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
import { supabase } from '../lib/supabase'
import type { LangId, Lesson } from '../types'

type ProgressMap = Record<string, { completed: boolean; bestScore: number }>

type AuthContextValue = {
  user: User | null
  syncAvailable: boolean
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
  ) => Promise<void>
  isPracticeComplete: (language: LangId, lessonId: string, practiceId: string) => boolean
  isLessonComplete: (language: LangId, lesson: Lesson) => boolean
  /** @deprecated alias — lesson fully cleared */
  isComplete: (language: LangId, lessonId: string, lesson?: Lesson) => boolean
}

const AuthContext = createContext<AuthContextValue | null>(null)
const LOCAL_KEY = 'codebuddy-progress-v2'

function practiceKey(language: string, lessonId: string, practiceId: string) {
  return `${language}:${lessonId}::${practiceId}`
}

function loadLocal(): ProgressMap {
  try {
    const v2 = localStorage.getItem(LOCAL_KEY)
    if (v2) return JSON.parse(v2) as ProgressMap
    // migrate v1 lesson-level clears into a marker the UI can still read
    const v1 = localStorage.getItem('codebuddy-progress-v1')
    return v1 ? (JSON.parse(v1) as ProgressMap) : {}
  } catch {
    return {}
  }
}

function saveLocal(map: ProgressMap) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(map))
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [progress, setProgress] = useState<ProgressMap>(() => loadLocal())

  useEffect(() => {
    if (!supabase) return
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user ?? null))
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null)
    })
    return () => sub.subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (!supabase || !user) return
    let cancelled = false
    ;(async () => {
      const { data, error } = await supabase
        .from('codebuddy_progress')
        .select('language, lesson_id, completed, best_score')
        .eq('user_id', user.id)
      if (cancelled || error || !data) return
      setProgress((prev) => {
        const next = { ...prev }
        for (const row of data) {
          const k = `${row.language}:${row.lesson_id}`
          next[k] = {
            completed: Boolean(row.completed) || next[k]?.completed || false,
            bestScore: Math.max(row.best_score ?? 0, next[k]?.bestScore ?? 0),
          }
        }
        saveLocal(next)
        return next
      })
    })()
    return () => {
      cancelled = true
    }
  }, [user])

  const signUp = useCallback(async (email: string, password: string) => {
    if (!supabase) return 'Supabase is not configured.'
    const { error } = await supabase.auth.signUp({ email, password })
    return error?.message ?? null
  }, [])

  const signIn = useCallback(async (email: string, password: string) => {
    if (!supabase) return 'Supabase is not configured.'
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    return error?.message ?? null
  }, [])

  const signOut = useCallback(async () => {
    await supabase?.auth.signOut()
  }, [])

  const markPracticeComplete = useCallback(
    async (language: LangId, lessonId: string, practiceId: string, score: number, code: string) => {
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
        saveLocal(next)
        return next
      })

      if (!supabase || !user) return

      await supabase.from('codebuddy_progress').upsert(
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

      await supabase.from('codebuddy_submissions').insert({
        user_id: user.id,
        language,
        lesson_id: storageId,
        code,
        passed: score > 0,
        score,
      })
    },
    [user],
  )

  const isPracticeComplete = useCallback(
    (language: LangId, lessonId: string, practiceId: string) =>
      Boolean(progress[practiceKey(language, lessonId, practiceId)]?.completed),
    [progress],
  )

  const isLessonComplete = useCallback(
    (language: LangId, lesson: Lesson) => {
      if (lesson.practices.length === 0) return false
      // legacy whole-lesson clear
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
      // any practice progress under this lesson counts as started; full complete needs lesson obj
      return Object.keys(progress).some(
        (k) => k.startsWith(`${language}:${lessonId}::`) && progress[k]?.completed,
      )
    },
    [progress, isLessonComplete],
  )

  const value = useMemo(
    () => ({
      user,
      syncAvailable: supabase !== null,
      progress,
      signUp,
      signIn,
      signOut,
      markPracticeComplete,
      isPracticeComplete,
      isLessonComplete,
      isComplete,
    }),
    [
      user,
      progress,
      signUp,
      signIn,
      signOut,
      markPracticeComplete,
      isPracticeComplete,
      isLessonComplete,
      isComplete,
    ],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
