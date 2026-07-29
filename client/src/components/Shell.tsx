import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../state/AuthContext'

export function Shell({ children }: { children: React.ReactNode }) {
  const { user, signOut, syncAvailable } = useAuth()

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
        <div className="topbar-meta">
          {user ? (
            <button type="button" className="ghost-btn" onClick={() => void signOut()}>
              Sign out
            </button>
          ) : (
            <span className="sync-pill">{syncAvailable ? 'Cloud ready' : 'Local mode'}</span>
          )}
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}
