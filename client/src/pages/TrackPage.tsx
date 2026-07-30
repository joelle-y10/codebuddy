import { Link, useParams } from 'react-router-dom'
import { getTrack, isUniversityUnlocked, moduleProgress, tierPath, trackProgress } from '../content'
import type { LangId, TrackTier } from '../types'
import { useAuth } from '../state/AuthContext'

export function TrackPage({ tier }: { tier: TrackTier }) {
  const { lang } = useParams()
  const track = getTrack(lang as LangId, tier)
  const { isLessonComplete } = useAuth()
  const base = tierPath(tier)

  if (!track) {
    return (
      <div className="page">
        <h1>Track not found</h1>
        <Link to={base}>Back</Link>
      </div>
    )
  }

  if (tier === 'university' && !isUniversityUnlocked(track.id, isLessonComplete)) {
    return (
      <div className="page narrow">
        <p className="eyebrow">Locked</p>
        <h1>{track.name} University</h1>
        <p className="lede">
          Finish every lesson in the basic {track.name} track (all practice stations) to unlock this
          advanced curriculum.
        </p>
        <Link className="primary-btn" to={`/learn/${track.id}`}>
          Go to basic {track.name}
        </Link>
      </div>
    )
  }

  const overall = trackProgress(track, isLessonComplete)

  return (
    <div className="page">
      <p className="eyebrow" style={{ color: track.accent }}>
        {tier === 'university' ? 'CodeBuddy University' : 'CodeBuddy Basics'} · {track.name}
      </p>
      <h1>{track.tagline}</h1>
      <p className="lede">
        {overall.done}/{overall.total} lessons complete across {track.modules.length} modules.
        {tier === 'basic'
          ? ' Start with Module 01 (Getting started — print/tags/setup), then Module 02 (values, variables & types).'
          : ' Lessons get harder as you go — finish every practice station before moving on.'}
      </p>

      <div className="module-list">
        {track.modules.map((mod, mi) => {
          const mp = moduleProgress(track, mod.id, isLessonComplete)
          const isFoundation = tier === 'basic' && mi === 0
          return (
            <section key={mod.id} className={`module-block${isFoundation ? ' module-foundation' : ''}`}>
              <header className="module-head">
                <div>
                  <p className="eyebrow">
                    Module {String(mi + 1).padStart(2, '0')}
                    {isFoundation ? ' · Start here' : ''}
                    {mp.complete ? ' · Cleared' : ''}
                  </p>
                  <h2>{mod.title}</h2>
                  <p className="body">{mod.summary}</p>
                </div>
                <span className="track-prog">
                  {mp.done}/{mp.total} lessons
                </span>
              </header>
              <ol className="lesson-list">
                {mod.lessons.map((lesson, i) => {
                  const done = isLessonComplete(track.id, lesson)
                  return (
                    <li key={lesson.id}>
                      <Link
                        to={`${base}/${track.id}/${lesson.id}`}
                        className={done ? 'done' : undefined}
                      >
                        <span className="num">{String(i + 1).padStart(2, '0')}</span>
                        <span>
                          <strong>{lesson.title}</strong>
                          <em>
                            {lesson.summary} · {lesson.practices.length} practice stations
                          </em>
                        </span>
                        {done && <span className="badge">Done</span>}
                      </Link>
                    </li>
                  )
                })}
              </ol>
            </section>
          )
        })}
      </div>
    </div>
  )
}
