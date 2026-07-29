import { Link } from 'react-router-dom'
import { useAuth } from '../state/AuthContext'

function offlineSiteHref() {
  if (import.meta.env.VITE_SITE_EDITION === 'offline') return null
  // Cloud Pages live at /codebuddy/ ; offline edition is nested under /offline/
  return '/codebuddy/offline/'
}

function cloudSiteHref() {
  if (import.meta.env.VITE_SITE_EDITION !== 'offline') return null
  return '/codebuddy/'
}

/** Practice gate: offline edition never blocks; cloud edition needs sign-in. */
export function CloudSignInGate({ children }: { children: React.ReactNode }) {
  const { user, authReady, syncAvailable, syncStatus, syncMessage } = useAuth()
  const offlineHref = offlineSiteHref()
  const cloudHref = cloudSiteHref()

  if (!syncAvailable || import.meta.env.VITE_SITE_EDITION === 'offline') {
    return (
      <>
        {cloudHref ? (
          <p className="muted edition-banner">
            Offline edition (no Supabase). Prefer accounts?{' '}
            <a href={cloudHref}>Open the cloud version</a>.
          </p>
        ) : null}
        {children}
      </>
    )
  }

  if (!authReady) {
    return <p className="muted">Checking your Supabase session…</p>
  }

  if (!user) {
    return (
      <div className="cloud-gate">
        <p className="eyebrow">Cloud edition</p>
        <h2>Sign in to practice &amp; save</h2>
        <p className="body">
          Progress syncs to Supabase when you sign in. Want a copy that never talks to Supabase?
          {offlineHref ? (
            <>
              {' '}
              <a href={offlineHref}>Open the offline version</a>.
            </>
          ) : null}
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
          This only <strong>adds</strong> new <code>codebuddy_*</code> tables. It does not remove
          StudyBuddy or other projects’ data.
        </p>
        {offlineHref ? (
          <p className="body">
            Meanwhile you can use the <a href={offlineHref}>offline version</a> (browser-only
            progress).
          </p>
        ) : null}
        <Link className="primary-btn" to="/account">
          Open setup on Account
        </Link>
      </div>
    )
  }

  return (
    <>
      {children}
    </>
  )
}
