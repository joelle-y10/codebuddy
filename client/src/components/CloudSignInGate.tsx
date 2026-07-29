import { Link } from 'react-router-dom'
import { useAuth } from '../state/AuthContext'

/** Blocks practice until the learner is signed into Supabase cloud. */
export function CloudSignInGate({ children }: { children: React.ReactNode }) {
  const { user, authReady, syncStatus, syncMessage } = useAuth()

  if (!authReady) {
    return <p className="muted">Checking your Supabase session…</p>
  }

  if (!user) {
    return (
      <div className="cloud-gate">
        <p className="eyebrow">Cloud required</p>
        <h2>Sign in to practice &amp; save</h2>
        <p className="body">
          Progress is stored on Supabase (the internet), not only in this browser. Create a free
          account or sign in to unlock practice stations and keep your clears across devices.
        </p>
        <Link className="primary-btn" to="/account">
          Sign in / Sign up
        </Link>
      </div>
    )
  }

  if (syncStatus === 'needs-schema') {
    return (
      <div className="cloud-gate">
        <p className="eyebrow">One safe setup step</p>
        <h2>Connect CodeBuddy tables</h2>
        <p className="body">{syncMessage}</p>
        <p className="body">
          This only <strong>adds</strong> new <code>codebuddy_*</code> tables. It does not delete
          StudyBuddy data.
        </p>
        <Link className="primary-btn" to="/account">
          Open safe setup on Account
        </Link>
      </div>
    )
  }

  return <>{children}</>
}
