import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../state/AuthContext'

export function Shell({ children }: { children: React.ReactNode }) {
  const { user, signOut, syncAvailable, syncStatus, syncMessage } = useAuth()

  const pill =
    !syncAvailable
      ? 'No cloud'
      : syncStatus === 'cloud'
        ? 'Cloud synced'
        : syncStatus === 'needs-schema'
          ? 'Setup needed'
          : user
            ? 'Signed in'
            : 'Sign in for cloud'

  return (
    <div className="app-shell">
      <header className="topbar">
        <Link to="/" className="brand-mark">
          <span className="brand-dot" aria-hidden />
          CodeBuddy
        </Link>
        <nav className="topnav">
          <NavLink to="/learn">Basics</NavLink>
          <NavLink to="/university">University</NavLink>
          <NavLink to="/account">{user ? 'Account' : 'Sign in'}</NavLink>
        </nav>
        <div className="topbar-meta" title={syncMessage}>
          <span className="sync-pill">{pill}</span>
          {user && (
            <button type="button" className="ghost-btn" onClick={() => void signOut()}>
              Sign out
            </button>
          )}
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}
