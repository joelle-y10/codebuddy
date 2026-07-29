import type { LangId, LanguageTrack, Lesson, TrackTier } from '../types'
import { findLesson, flattenLessons } from '../types'
import { htmlTrack } from './html'
import { javascriptTrack } from './javascript'
import { processingTrack } from './processing'
import { pythonTrack } from './python'
import { cppTrack } from './cpp'
import { javaTrack } from './java'
import { htmlUniversity } from './university/html'
import { javascriptUniversity } from './university/javascript'
import { processingUniversity } from './university/processing'
import { pythonUniversity } from './university/python'
import { cppUniversity } from './university/cpp'
import { javaUniversity } from './university/java'

export const basicTracks: LanguageTrack[] = [
  htmlTrack,
  javascriptTrack,
  processingTrack,
  pythonTrack,
  cppTrack,
  javaTrack,
]

export const universityTracks: LanguageTrack[] = [
  htmlUniversity,
  javascriptUniversity,
  processingUniversity,
  pythonUniversity,
  cppUniversity,
  javaUniversity,
]

export const tracks = basicTracks

export function getTracks(tier: TrackTier): LanguageTrack[] {
  return tier === 'university' ? universityTracks : basicTracks
}

export function getTrack(id: LangId, tier: TrackTier = 'basic'): LanguageTrack | undefined {
  return getTracks(tier).find((t) => t.id === id)
}

export function getLesson(lang: LangId, lessonId: string, tier: TrackTier = 'basic') {
  const track = getTrack(lang, tier)
  if (!track) return undefined
  const found = findLesson(track, lessonId)
  if (!found) return undefined
  return { track, module: found.module, lesson: found.lesson, indexInTrack: found.indexInTrack }
}

export function trackProgress(
  track: LanguageTrack,
  isLessonComplete: (language: LangId, lesson: Lesson) => boolean,
) {
  const lessons = flattenLessons(track)
  const done = lessons.filter((l) => isLessonComplete(track.id, l)).length
  return { done, total: lessons.length, complete: done === lessons.length && done > 0 }
}

export function moduleProgress(
  track: LanguageTrack,
  moduleId: string,
  isLessonComplete: (language: LangId, lesson: Lesson) => boolean,
) {
  const module = track.modules.find((m) => m.id === moduleId)
  if (!module) return { done: 0, total: 0, complete: false }
  const done = module.lessons.filter((l) => isLessonComplete(track.id, l)).length
  return { done, total: module.lessons.length, complete: done === module.lessons.length && done > 0 }
}

export function isUniversityUnlocked(
  lang: LangId,
  isLessonComplete: (language: LangId, lesson: Lesson) => boolean,
) {
  const basic = getTrack(lang, 'basic')
  if (!basic) return false
  return trackProgress(basic, isLessonComplete).complete
}

export function basicGraduation(isLessonComplete: (language: LangId, lesson: Lesson) => boolean) {
  const perTrack = basicTracks.map((t) => trackProgress(t, isLessonComplete))
  const doneLessons = perTrack.reduce((n, p) => n + p.done, 0)
  const totalLessons = perTrack.reduce((n, p) => n + p.total, 0)
  const tracksComplete = perTrack.filter((p) => p.complete).length
  return {
    doneLessons,
    totalLessons,
    tracksComplete,
    totalTracks: basicTracks.length,
    graduated: tracksComplete === basicTracks.length,
  }
}

export function tierPath(tier: TrackTier) {
  return tier === 'university' ? '/university' : '/learn'
}

export function nextLesson(track: LanguageTrack, lessonId: string): Lesson | undefined {
  const all = flattenLessons(track)
  const i = all.findIndex((l) => l.id === lessonId)
  return i >= 0 ? all[i + 1] : undefined
}
