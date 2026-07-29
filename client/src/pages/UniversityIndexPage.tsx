import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import {
  basicGraduation,
  isUniversityUnlocked,
  trackProgress,
  universityTracks,
} from '../content'
import { useAuth } from '../state/AuthContext'

export function UniversityIndexPage() {
  const { isLessonComplete } = useAuth()
  const grad = basicGraduation(isLessonComplete)
  const unlockedCount = universityTracks.filter((t) =>
    isUniversityUnlocked(t.id, isLessonComplete),
  ).length

  return (
    <div className="page">
      <p className="eyebrow">CodeBuddy University</p>
      <h1>Advanced tracks for graduates</h1>
      <p className="lede">
        Harder concepts, same practice-station rhythm. Unlock a University language by finishing
        its basic track ({unlockedCount}/{universityTracks.length} open).
      </p>

      {!grad.graduated && (
        <div className="unlock-banner muted-banner">
          <strong>Keep clearing Basics.</strong>
          <span>
            {grad.tracksComplete}/{grad.totalTracks} basic tracks done — locked courses stay visible
            so you can see what’s next.
          </span>
          <Link className="text-link" to="/learn">
            Back to Basics
          </Link>
        </div>
      )}

      <div className="track-grid">
        {universityTracks.map((t) => {
          const unlocked = isUniversityUnlocked(t.id, isLessonComplete)
          const { done, total } = trackProgress(t, isLessonComplete)
          if (!unlocked) {
            return (
              <div
                key={t.id}
                className="track-link locked"
                style={{ '--accent': t.accent } as CSSProperties}
              >
                <span className="track-name">{t.name}</span>
                <span className="track-tag">{t.tagline}</span>
                <span className="track-prog">Locked — finish basic {t.name} first</span>
                <Link className="text-link" to={`/learn/${t.id}`}>
                  Open basics
                </Link>
              </div>
            )
          }
          return (
            <Link
              key={t.id}
              to={`/university/${t.id}`}
              className="track-link"
              style={{ '--accent': t.accent } as CSSProperties}
            >
              <span className="track-name">{t.name}</span>
              <span className="track-tag">{t.tagline}</span>
              <span className="track-prog">
                {done}/{total} advanced lessons
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
