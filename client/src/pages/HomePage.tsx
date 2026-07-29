import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import {
  basicGraduation,
  basicTracks,
  isUniversityUnlocked,
  trackProgress,
} from '../content'
import { useAuth } from '../state/AuthContext'

export function HomePage() {
  const { isLessonComplete } = useAuth()
  const grad = basicGraduation(isLessonComplete)

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-copy">
          <p className="brand-hero">CodeBuddy</p>
          <h1>Learn to code by doing — then level up to University.</h1>
          <p className="lede">
            Start in Basics. When you master a language, unlock CodeBuddy University for advanced
            lessons, examples, and tougher practice stations.
          </p>
          <div className="cta-row">
            <Link className="primary-btn" to="/learn">
              Start Basics
            </Link>
            <Link className="text-link" to="/university">
              CodeBuddy University
            </Link>
          </div>
        </div>
        <div className="hero-visual" aria-hidden>
          <div className="code-glow">
            <pre>{`// Basics → University
for (let i = 1; i <= 5; i++) {
  console.log(i);
}`}</pre>
          </div>
        </div>
      </section>

      <section className="path-section" id="path">
        <p className="eyebrow">Progression</p>
        <h2>Grow out of Basics</h2>
        <div className="path-steps">
          <div className="path-step">
            <span className="path-num">01</span>
            <strong>CodeBuddy Basics</strong>
            <p>Foundations with examples and graded labs across six languages.</p>
          </div>
          <div className="path-step">
            <span className="path-num">02</span>
            <strong>Clear a track</strong>
            <p>Finish every basic lesson in a language to unlock its advanced campus.</p>
          </div>
          <div className="path-step">
            <span className="path-num">03</span>
            <strong>CodeBuddy University</strong>
            <p>Closures, classes, algorithms, a11y, creative systems — deeper practice.</p>
          </div>
        </div>
        <p className="track-prog path-meter">
          Basics progress: {grad.doneLessons}/{grad.totalLessons} lessons · {grad.tracksComplete}/
          {grad.totalTracks} tracks ready for University
        </p>
      </section>

      <section className="tracks" id="tracks">
        <p className="eyebrow">Basics</p>
        <h2>Pick a language</h2>
        <div className="track-grid">
          {basicTracks.map((t) => {
            const { done, total, complete } = trackProgress(t, isLessonComplete)
            const uniOpen = isUniversityUnlocked(t.id, isLessonComplete)
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
                  {done}/{total} lessons
                  {uniOpen || complete ? ' · University unlocked' : ''}
                </span>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
