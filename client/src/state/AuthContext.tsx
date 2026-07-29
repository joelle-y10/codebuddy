import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { User } from '@supabase/supabase-js'
import { checkCodeBuddySchema, supabase } from '../lib/supabase'
import type { LangId, Lesson } from '../types'

type ProgressMap = Record<string, { completed: boolean; bestScore: number }>
type SyncStatus = 'idle' | 'syncing' | 'cloud' | 'local-only' | 'needs-schema' | 'error'

type AuthContextValue = {
  user: User | null
  authReady: boolean
  syncAvailable: boolean
  syncStatus: SyncStatus
  syncMessage: string
  displayName: string
  progress: ProgressMap
  signUp: (email: string, password: string) => Promise<string | null>
  signIn: (email: string, password: string) => Promise<string | null>
  signOut: () => Promise<void>
  updateDisplayName: (name: string) => Promise<string | null>
  updateEmail: (email: string) => Promise<string | null>
  updatePassword: (password: string) => Promise<string | null>
  deleteAccount: () => Promise<string | null>
  refreshProfile: () => Promise<void>
  markPracticeComplete: (
    language: LangId,
    lessonId: string,
    practiceId: string,
    score: number,
    code: string,
  ) => Promise<string | null>
  isPracticeComplete: (language: LangId, lessonId: string, practiceId: string) => boolean
  isLessonComplete: (language: LangId, lesson: Lesson) => boolean
  isComplete: (language: LangId, lessonId: string, lesson?: Lesson) => boolean
  refreshCloud: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)
const LOCAL_CACHE_KEY = 'codebuddy-progress-cache-v3'
const PENDING_UPLOAD_KEY = 'codebuddy-pending-upload-v3'

function practiceKey(language: string, lessonId: string, practiceId: string) {
  return `${language}:${lessonId}::${practiceId}`
}

function loadCache(): ProgressMap {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_CACHE_KEY) || '{}') as ProgressMap
  } catch {
    return {}
  }
}

function saveCache(map: ProgressMap) {
  // Cache only — cloud is the source of truth when signed in
  localStorage.setItem(LOCAL_CACHE_KEY, JSON.stringify(map))
}

function loadPendingUpload(): ProgressMap {
  try {
    return JSON.parse(localStorage.getItem(PENDING_UPLOAD_KEY) || '{}') as ProgressMap
  } catch {
    return {}
  }
}

function savePendingUpload(map: ProgressMap) {
  localStorage.setItem(PENDING_UPLOAD_KEY, JSON.stringify(map))
}

function clearPendingUpload() {
  localStorage.removeItem(PENDING_UPLOAD_KEY)
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [displayName, setDisplayName] = useState('')
  const [authReady, setAuthReady] = useState(false)
  const [progress, setProgress] = useState<ProgressMap>(() => loadCache())
  const [syncStatus, setSyncStatus] = useState<SyncStatus>('idle')
  const [syncMessage, setSyncMessage] = useState('Connecting…')

  const refreshSchemaStatus = useCallback(async () => {
    const result = await checkCodeBuddySchema()
    if (result.status === 'missing') {
      setSyncStatus('needs-schema')
      setSyncMessage(
        'Safe setup needed: run supabase/schema.sql once in the SQL Editor (adds CodeBuddy tables only).',
      )
      return false
    }
    if (result.status === 'error' || result.status === 'offline') {
      setSyncStatus('error')
      setSyncMessage(result.detail)
      return false
    }
    return true
  }, [])

  const pullCloudProgress = useCallback(async (uid: string) => {
    if (!supabase) return
    setSyncStatus('syncing')
    setSyncMessage('Loading your progress from Supabase…')

    const { data, error } = await supabase
      .from('codebuddy_progress')
      .select('language, lesson_id, completed, best_score')
      .eq('user_id', uid)

    if (error) {
      if (/could not find the table|PGRST205|schema cache/i.test(error.message)) {
        setSyncStatus('needs-schema')
        setSyncMessage('CodeBuddy tables are not installed yet. Run the safe schema SQL once.')
        return
      }
      setSyncStatus('error')
      setSyncMessage(error.message)
      return
    }

    const cloud: ProgressMap = {}
    for (const row of data ?? []) {
      const k = `${row.language}:${row.lesson_id}`
      cloud[k] = {
        completed: Boolean(row.completed),
        bestScore: row.best_score ?? 0,
      }
    }

    setProgress(cloud)
    saveCache(cloud)
    setSyncStatus('cloud')
    setSyncMessage('Progress is saved in Supabase (cloud), not only on this device.')
  }, [])

  const uploadPendingToCloud = useCallback(async (uid: string) => {
    if (!supabase) return
    const pending = loadPendingUpload()
    const entries = Object.entries(pending).filter(([, v]) => v.completed)
    if (entries.length === 0) return

    for (const [key, value] of entries) {
      // key format: language:lessonId::practiceId
      const match = key.match(/^([^:]+):(.+)::([^:]+)$/)
      if (!match) continue
      const [, language, lessonId, practiceId] = match
      const storageId = `${lessonId}::${practiceId}`
      await supabase.from('codebuddy_progress').upsert(
        {
          user_id: uid,
          language,
          lesson_id: storageId,
          completed: true,
          best_score: value.bestScore,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'user_id,language,lesson_id' },
      )
    }
    clearPendingUpload()
  }, [])

  useEffect(() => {
    if (!supabase) {
      setAuthReady(true)
      setSyncStatus('error')
      setSyncMessage('Supabase keys missing in client/.env')
      return
    }

    void refreshSchemaStatus()

    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null)
      setAuthReady(true)
      if (!data.session?.user) {
        setSyncStatus('local-only')
        setSyncMessage('Sign in to save progress in the cloud on Supabase.')
      }
    })

    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null)
    })
    return () => sub.subscription.unsubscribe()
  }, [refreshSchemaStatus])

  useEffect(() => {
    if (!user) return
    let cancelled = false
    ;(async () => {
      const ok = await refreshSchemaStatus()
      if (cancelled || !ok) return
      await uploadPendingToCloud(user.id)
      if (cancelled) return
      await pullCloudProgress(user.id)
    })()
    return () => {
      cancelled = true
    }
  }, [user, refreshSchemaStatus, uploadPendingToCloud, pullCloudProgress])

  const signUp = useCallback(async (email: string, password: string) => {
    if (!supabase) return 'Supabase is not configured.'
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) return error.message
    // Confirm-email OFF → session is returned and you're already signed in.
    if (data.session) return null
    // Confirm-email ON → no session yet; try password sign-in anyway.
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })
    if (!signInError) return null
    if (/confirm|verification|not confirmed/i.test(signInError.message)) {
      return 'Email confirmation is still ON in Supabase. Turn it off: Authentication → Providers → Email → Confirm email → disabled. Then sign in with the same email and password.'
    }
    return signInError.message
  }, [])

  const signIn = useCallback(async (email: string, password: string) => {
    if (!supabase) return 'Supabase is not configured.'
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (!error) return null
    if (/confirm|verification|not confirmed/i.test(error.message)) {
      return 'This account still needs email confirmation. In Supabase: Authentication → Providers → Email → turn Confirm email OFF, then try again.'
    }
    return error.message
  }, [])

  const signOut = useCallback(async () => {
    await supabase?.auth.signOut()
    setProgress({})
    saveCache({})
    setDisplayName('')
    setSyncStatus('local-only')
    setSyncMessage('Signed out. Sign in again to use cloud progress.')
  }, [])

  const refreshProfile = useCallback(async () => {
    if (!supabase || !user) {
      setDisplayName('')
      return
    }
    const { data } = await supabase
      .from('codebuddy_profiles')
      .select('display_name')
      .eq('id', user.id)
      .maybeSingle()
    const name =
      data?.display_name?.trim() ||
      user.user_metadata?.display_name ||
      user.email?.split('@')[0] ||
      ''
    setDisplayName(String(name))
  }, [user])

  useEffect(() => {
    void refreshProfile()
  }, [refreshProfile])

  const updateDisplayName = useCallback(
    async (name: string) => {
      if (!supabase) return 'Supabase is not configured.'
      if (!user) return 'Sign in first.'
      const cleaned = name.trim()
      if (!cleaned) return 'Enter a display name.'
      const { error } = await supabase.from('codebuddy_profiles').upsert(
        { id: user.id, display_name: cleaned },
        { onConflict: 'id' },
      )
      if (error) return error.message
      await supabase.auth.updateUser({ data: { display_name: cleaned } })
      setDisplayName(cleaned)
      return null
    },
    [user],
  )

  const updateEmail = useCallback(
    async (email: string) => {
      if (!supabase) return 'Supabase is not configured.'
      if (!user) return 'Sign in first.'
      const cleaned = email.trim()
      if (!cleaned) return 'Enter an email.'
      const { error } = await supabase.auth.updateUser({ email: cleaned })
      if (error) return error.message
      return null
    },
    [user],
  )

  const updatePassword = useCallback(
    async (password: string) => {
      if (!supabase) return 'Supabase is not configured.'
      if (!user) return 'Sign in first.'
      if (password.length < 6) return 'Password must be at least 6 characters.'
      const { error } = await supabase.auth.updateUser({ password })
      if (error) return error.message
      return null
    },
    [user],
  )

  const deleteAccount = useCallback(async () => {
    if (!supabase) return 'Supabase is not configured.'
    if (!user) return 'Sign in first.'
    const { error } = await supabase.rpc('codebuddy_delete_own_account')
    if (error) {
      return `${error.message} — If this fails, run the latest supabase/schema.sql (adds delete account).`
    }
    setProgress({})
    saveCache({})
    clearPendingUpload()
    setDisplayName('')
    await supabase.auth.signOut()
    setSyncStatus('local-only')
    setSyncMessage('Account deleted.')
    return null
  }, [user])

  const markPracticeComplete = useCallback(
    async (language: LangId, lessonId: string, practiceId: string, score: number, code: string) => {
      if (!supabase) return 'Supabase is not configured.'
      if (!user) return 'Sign in to save progress to the cloud.'

      const schemaOk = await refreshSchemaStatus()
      if (!schemaOk) {
        // Keep a pending upload so nothing is lost once schema is installed
        const k = practiceKey(language, lessonId, practiceId)
        const pending = loadPendingUpload()
        pending[k] = { completed: true, bestScore: score }
        savePendingUpload(pending)
        setProgress((prev) => {
          const next = { ...prev, [k]: { completed: true, bestScore: score } }
          saveCache(next)
          return next
        })
        return 'Cloud tables are not installed yet. Your clear is saved temporarily — run the safe schema SQL, then sign in again.'
      }

      const storageId = `${lessonId}::${practiceId}`
      const k = practiceKey(language, lessonId, practiceId)

      setProgress((prev) => {
        const next = {
          ...prev,
          [k]: {
            completed: true,
            bestScore: Math.max(score, prev[k]?.bestScore ?? 0),
          },
        }
        saveCache(next)
        return next
      })

      const { error: progressError } = await supabase.from('codebuddy_progress').upsert(
        {
          user_id: user.id,
          language,
          lesson_id: storageId,
          completed: true,
          best_score: score,
          last_code: code,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'user_id,language,lesson_id' },
      )

      if (progressError) {
        setSyncStatus('error')
        setSyncMessage(progressError.message)
        return progressError.message
      }

      await supabase.from('codebuddy_submissions').insert({
        user_id: user.id,
        language,
        lesson_id: storageId,
        code,
        passed: score > 0,
        score,
      })

      // Ensure profile row exists
      await supabase.from('codebuddy_profiles').upsert(
        {
          id: user.id,
          display_name: user.email?.split('@')[0] ?? 'learner',
        },
        { onConflict: 'id' },
      )

      setSyncStatus('cloud')
      setSyncMessage('Saved to Supabase cloud.')
      return null
    },
    [user, refreshSchemaStatus],
  )

  const isPracticeComplete = useCallback(
    (language: LangId, lessonId: string, practiceId: string) =>
      Boolean(progress[practiceKey(language, lessonId, practiceId)]?.completed),
    [progress],
  )

  const isLessonComplete = useCallback(
    (language: LangId, lesson: Lesson) => {
      if (lesson.practices.length === 0) return false
      if (progress[`${language}:${lesson.id}`]?.completed) return true
      return lesson.practices.every((p) =>
        Boolean(progress[practiceKey(language, lesson.id, p.id)]?.completed),
      )
    },
    [progress],
  )

  const isComplete = useCallback(
    (language: LangId, lessonId: string, lesson?: Lesson) => {
      if (lesson) return isLessonComplete(language, lesson)
      if (progress[`${language}:${lessonId}`]?.completed) return true
      return Object.keys(progress).some(
        (k) => k.startsWith(`${language}:${lessonId}::`) && progress[k]?.completed,
      )
    },
    [progress, isLessonComplete],
  )

  const refreshCloud = useCallback(async () => {
    if (!user) return
    const ok = await refreshSchemaStatus()
    if (ok) await pullCloudProgress(user.id)
  }, [user, refreshSchemaStatus, pullCloudProgress])

  const value = useMemo(
    () => ({
      user,
      authReady,
      syncAvailable: supabase !== null,
      syncStatus,
      syncMessage,
      displayName,
      progress,
      signUp,
      signIn,
      signOut,
      updateDisplayName,
      updateEmail,
      updatePassword,
      deleteAccount,
      refreshProfile,
      markPracticeComplete,
      isPracticeComplete,
      isLessonComplete,
      isComplete,
      refreshCloud,
    }),
    [
      user,
      authReady,
      syncStatus,
      syncMessage,
      displayName,
      progress,
      signUp,
      signIn,
      signOut,
      updateDisplayName,
      updateEmail,
      updatePassword,
      deleteAccount,
      refreshProfile,
      markPracticeComplete,
      isPracticeComplete,
      isLessonComplete,
      isComplete,
      refreshCloud,
    ],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
