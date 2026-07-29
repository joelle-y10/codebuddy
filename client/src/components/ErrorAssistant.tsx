import type { ErrorExplanation } from '../lib/errorExplain'

export function ErrorAssistant({ explanation }: { explanation: ErrorExplanation | null }) {
  if (!explanation) {
    return (
      <aside className="error-assistant idle">
        <p className="pane-label">Error coach</p>
        <p className="muted">
          When a run fails, this panel explains what the console message means in plain language —
          next to the raw error, not instead of it.
        </p>
      </aside>
    )
  }

  return (
    <aside className="error-assistant active" aria-live="polite">
      <p className="pane-label">Error coach</p>
      <h4>{explanation.title}</h4>
      {explanation.matched && (
        <p className="error-matched">
          Matched: <code>{explanation.matched}</code>
        </p>
      )}
      <div className="error-block">
        <strong>What it means</strong>
        <p>{explanation.meaning}</p>
      </div>
      <div className="error-block">
        <strong>Likely cause</strong>
        <p>{explanation.likelyCause}</p>
      </div>
      <div className="error-block">
        <strong>What to try</strong>
        <p>{explanation.whatToTry}</p>
      </div>
    </aside>
  )
}
