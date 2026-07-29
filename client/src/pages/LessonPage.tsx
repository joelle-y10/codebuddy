import { Link, useParams } from 'react-router-dom'
import { getLesson, isUniversityUnlocked, nextLesson, tierPath, trackProgress } from '../content'
import type { LangId, TrackTier } from '../types'
import { CodeStation } from '../components/CodeStation'
import { CloudSignInGate } from '../components/CloudSignInGate'
import { useAuth } from '../state/AuthContext'

export function LessonPage({ tier }: { tier: TrackTier }) {
  const { lang, lessonId } = useParams()
  const data = getLesson(lang as LangId, lessonId || '', tier)
  const { markPracticeComplete, isPracticeComplete, isLessonComplete } = useAuth()
  const base = tierPath(tier)

  if (!data) {
    return (
      <div className="page">
        <h1>Lesson not found</h1>
        <Link to={base}>Back</Link>
      </div>
    )
  }

  const { track, module, lesson } = data

  if (tier === 'university' && !isUniversityUnlocked(track.id, isLessonComplete)) {
    return (
      <div className="page narrow">
        <h1>University locked</h1>
        <p className="lede">Complete basic {track.name} first.</p>
        <Link className="primary-btn" to={`/learn/${track.id}`}>
          Open basic track
        </Link>
      </div>
    )
  }

  const next = nextLesson(track, lesson.id)
  const lessonDone = isLessonComplete(track.id, lesson)
  const practicesDone = lesson.practices.filter((p) =>
    isPracticeComplete(track.id, lesson.id, p.id),
  ).length
  const basicTrackDone = tier === 'basic' && trackProgress(track, isLessonComplete).complete

  return (
    <div className="page lesson-page">
      <div className="lesson-nav">
        <Link to={base}>{tier === 'university' ? 'University' : 'Basics'}</Link>
        <span>/</span>
        <Link to={`${base}/${track.id}`}>{track.name}</Link>
        <span>/</span>
        <span>{module.title}</span>
        <span>/</span>
        <span>{lesson.title}</span>
        {lessonDone && <span className="badge">Lesson complete</span>}
      </div>

      <section className="teach">
        <p className="eyebrow">
          {tier === 'university' ? 'University' : 'Module'} · {module.title}
        </p>
        <h1>{lesson.title}</h1>
        <p className="lede">{lesson.summary}</p>
        <p className="practice-meter">
          Practices cleared in this lesson: {practicesDone}/{lesson.practices.length}
        </p>
      </section>

      {lesson.sections.map((section) => (
        <section key={section.heading} className="teach-block">
          <h2>{section.heading}</h2>
          {section.body.split('\n\n').map((para) => (
            <p key={para.slice(0, 24)} className="body">
              {para}
            </p>
          ))}
        </section>
      ))}

      <section className="example">
        <p className="eyebrow">Examples</p>
        <h2>Study these before you try</h2>
        <p className="body">
          Read each example, predict the output, then compare with what you’d write yourself.
        </p>
        <div className="example-stack">
          {lesson.examples.map((ex) => (
            <figure key={ex.title} className="example-card">
              <figcaption>
                <strong>{ex.title}</strong>
                <span>{ex.note}</span>
              </figcaption>
              <pre className="example-code">{ex.code}</pre>
            </figure>
          ))}
        </div>
      </section>

      <section className="practices" id="station">
        <p className="eyebrow">Practice stations</p>
        <h2>Work through every station</h2>
        <p className="lede">
          Warm-ups build confidence, then harder stations lock the idea in. Clears save to
          Supabase cloud when you are signed in.
        </p>
        <CloudSignInGate>
          <div className="practice-stack">
            {lesson.practices.map((practice, i) => (
              <div key={practice.id}>
                <p className="practice-index">
                  Station {i + 1} of {lesson.practices.length}
                </p>
                <CodeStation
                  runner={lesson.runner}
                  practice={practice}
                  cleared={isPracticeComplete(track.id, lesson.id, practice.id)}
                  onPass={(score, code) => {
                    void markPracticeComplete(track.id, lesson.id, practice.id, score, code)
                  }}
                />
              </div>
            ))}
          </div>
        </CloudSignInGate>
      </section>

      <div className="lesson-footer">
        {!lessonDone && (
          <p className="muted">Clear every practice station above to complete this lesson.</p>
        )}
        {lessonDone && next && (
          <Link className="primary-btn" to={`${base}/${track.id}/${next.id}`}>
            Next lesson: {next.title}
          </Link>
        )}
        {lessonDone && !next && basicTrackDone && (
          <div className="footer-stack">
            <p className="pass-banner">Basic {track.name} complete — University awaits.</p>
            <Link className="primary-btn" to={`/university/${track.id}`}>
              Enter {track.name} University
            </Link>
          </div>
        )}
        {lessonDone && !next && !basicTrackDone && (
          <Link className="primary-btn" to={`${base}/${track.id}`}>
            Back to {track.name}
            {tier === 'university' ? ' University' : ' modules'}
          </Link>
        )}
      </div>
    </div>
  )
}
