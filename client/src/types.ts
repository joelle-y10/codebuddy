export type LangId = 'html' | 'javascript' | 'processing' | 'python' | 'cpp' | 'java'

export type TestKind = 'stdout' | 'stdoutIncludes' | 'codeIncludes' | 'codeMatches' | 'htmlIncludes'

export type RunnerId = 'javascript' | 'python' | 'cpp' | 'java' | 'html' | 'processing'

export type LessonTest = {
  id: string
  description: string
  hint: string
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
  message: string
  hint: string
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
