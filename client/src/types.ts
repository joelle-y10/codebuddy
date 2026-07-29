export type LangId = 'html' | 'javascript' | 'processing' | 'python' | 'cpp' | 'java'

export type TestKind = 'stdout' | 'stdoutIncludes' | 'codeIncludes' | 'codeMatches' | 'htmlIncludes'

export type RunnerId = 'javascript' | 'python' | 'cpp' | 'java' | 'html' | 'processing'

export type LessonTest = {
  id: string
  description: string
  /** Stronger / legacy hint — shown only when the learner asks (not auto-spoiled). */
  hint: string
  /** Optional gentle nudge that never pastes the full answer. */
  softHint?: string
  /** Optional explicit answer for “I need the answer”. */
  answer?: string
  kind: TestKind
  expect: string
  stdin?: string
}

export type LessonSection = {
  heading: string
  body: string
}

export type LessonExample = {
  title: string
  code: string
  note: string
}

export type Practice = {
  id: string
  title: string
  prompt: string
  /** 1 = warm-up, 2 = solidify, 3 = stretch */
  difficulty: 1 | 2 | 3
  starterCode: string
  tests: LessonTest[]
  /** Optional full solution code for “I need the answer”. */
  solution?: string
  /** Optional practice-level gentle nudge. */
  softHint?: string
}

export type Lesson = {
  id: string
  title: string
  summary: string
  sections: LessonSection[]
  examples: LessonExample[]
  practices: Practice[]
  runner: RunnerId
}

export type Module = {
  id: string
  title: string
  summary: string
  lessons: Lesson[]
}

export type TrackTier = 'basic' | 'university'

export type LanguageTrack = {
  id: LangId
  name: string
  tagline: string
  accent: string
  tier: TrackTier
  modules: Module[]
}

export type RunResult = {
  stdout: string
  stderr: string
  exitCode: number | null
  timedOut: boolean
  compileError?: string
  durationMs: number
}

export type CheckResult = {
  id: string
  description: string
  passed: boolean
  /** Learner-safe status — must not paste the expected answer. */
  message: string
  hint: string
  softHint?: string
  kind?: TestKind
}

export function flattenLessons(track: LanguageTrack): Lesson[] {
  return track.modules.flatMap((m) => m.lessons)
}

export function findLesson(
  track: LanguageTrack,
  lessonId: string,
): { module: Module; lesson: Lesson; indexInTrack: number } | undefined {
  const all = flattenLessons(track)
  const indexInTrack = all.findIndex((l) => l.id === lessonId)
  if (indexInTrack < 0) return undefined
  for (const module of track.modules) {
    const lesson = module.lessons.find((l) => l.id === lessonId)
    if (lesson) return { module, lesson, indexInTrack }
  }
  return undefined
}
