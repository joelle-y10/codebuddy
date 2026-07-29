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
  progress: ProgressMap
  signUp: (email: string, password: string) => Promise<string | null>
  signIn: (email: string, password: string) => Promise<string | null>
  signOut: () => Promise<void>
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
    if (data.user && !data.session) {
      return null // may need email confirm — Account page explains
    }
    return null
  }, [])

  const signIn = useCallback(async (email: string, password: string) => {
    if (!supabase) return 'Supabase is not configured.'
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    return error?.message ?? null
  }, [])

  const signOut = useCallback(async () => {
    await supabase?.auth.signOut()
    setProgress({})
    saveCache({})
    setSyncStatus('local-only')
    setSyncMessage('Signed out. Sign in again to use cloud progress.')
  }, [])

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
      progress,
      signUp,
      signIn,
      signOut,
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
      progress,
      signUp,
      signIn,
      signOut,
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
