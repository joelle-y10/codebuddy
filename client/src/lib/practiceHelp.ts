import type { LangId } from '../types'

export const HINT_UNLOCK_AFTER = 3
export const ANSWER_UNLOCK_AFTER = 5

export type PracticeHelpRecord = {
  failedAttempts: number
  usedHint: boolean
  usedAnswer: boolean
  struggling: boolean
  topics: string[]
}

export type HelpMap = Record<string, PracticeHelpRecord>

const HELP_KEY = 'codebuddy-practice-help-v1'

export function helpKey(language: string, lessonId: string, practiceId: string) {
  return `${language}:${lessonId}::${practiceId}`
}

export function loadHelpMap(): HelpMap {
  try {
    return JSON.parse(localStorage.getItem(HELP_KEY) || '{}') as HelpMap
  } catch {
    return {}
  }
}

export function saveHelpMap(map: HelpMap) {
  localStorage.setItem(HELP_KEY, JSON.stringify(map))
}

export function emptyHelp(): PracticeHelpRecord {
  return {
    failedAttempts: 0,
    usedHint: false,
    usedAnswer: false,
    struggling: false,
    topics: [],
  }
}

export function mergeHelp(
  prev: PracticeHelpRecord | undefined,
  patch: Partial<PracticeHelpRecord>,
): PracticeHelpRecord {
  const base = prev ?? emptyHelp()
  const topics = Array.from(new Set([...(base.topics || []), ...(patch.topics || [])])).slice(0, 12)
  const usedHint = Boolean(patch.usedHint || base.usedHint)
  const usedAnswer = Boolean(patch.usedAnswer || base.usedAnswer)
  const failedAttempts = Math.max(base.failedAttempts, patch.failedAttempts ?? base.failedAttempts)
  return {
    failedAttempts,
    usedHint,
    usedAnswer,
    struggling: usedHint || usedAnswer || failedAttempts >= HINT_UNLOCK_AFTER,
    topics,
  }
}

export function struggleLabel(rec: PracticeHelpRecord | undefined): string | null {
  if (!rec) return null
  if (rec.usedAnswer) return 'Needed answer'
  if (rec.usedHint) return 'Needed hint'
  if (rec.failedAttempts >= HINT_UNLOCK_AFTER) return 'Struggling'
  return null
}

export type HelpEvent = {
  language: LangId
  lessonId: string
  practiceId: string
  failedAttempts: number
  usedHint?: boolean
  usedAnswer?: boolean
  topics?: string[]
}
