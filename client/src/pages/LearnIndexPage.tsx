import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import { basicGraduation, basicTracks, trackProgress } from '../content'
import { useAuth } from '../state/AuthContext'

export function LearnIndexPage() {
  const { isLessonComplete } = useAuth()
  const grad = basicGraduation(isLessonComplete)

  return (
    <div className="page">
      <p className="eyebrow">CodeBuddy Basics</p>
      <h1>Master the foundations</h1>
      <p className="lede">
        Clear each basic track to unlock its University advanced curriculum. Progress:{' '}
        {grad.doneLessons}/{grad.totalLessons} lessons · {grad.tracksComplete}/{grad.totalTracks}{' '}
        tracks cleared.
      </p>

      {grad.graduated ? (
        <div className="unlock-banner">
          <strong>You graduated Basics.</strong>
          <span>Every University track is open.</span>
          <Link className="primary-btn" to="/university">
            Enter CodeBuddy University
          </Link>
        </div>
      ) : (
        <p className="body">
          Tip: finish one language fully, then jump into that language’s University while you keep
          growing the others.
        </p>
      )}

      <div className="track-grid">
        {basicTracks.map((t) => {
          const { done, total, complete } = trackProgress(t, isLessonComplete)
          return (
            <Link
              key={t.id}
              to={`/learn/${t.id}`}
              className="track-link"
              style={{ '--accent': t.accent } as CSSProperties}
            >
              <span className="track-name">{t.name}</span>
              <span className="track-tag">{t.tagline}</span>
              <span className="track-prog">
                {done}/{total} complete{complete ? ' · University unlocked' : ''}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
