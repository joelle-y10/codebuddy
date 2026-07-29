import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../state/AuthContext'
import { ProfileDrawer } from './ProfileDrawer'
import { AvatarBubble } from './AvatarBubble'

export function Shell({ children }: { children: React.ReactNode }) {
  const { user, displayName, avatar, syncAvailable, syncStatus, syncMessage } = useAuth()
  const [profileOpen, setProfileOpen] = useState(false)

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
          {!user && <NavLink to="/account">Sign in</NavLink>}
        </nav>
        <div className="topbar-meta" title={syncMessage}>
          <span className="sync-pill">{pill}</span>
          <button
            type="button"
            className="profile-chip"
            onClick={() => setProfileOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={profileOpen}
            title={user ? 'Open profile settings' : 'Account'}
          >
            {user ? (
              <AvatarBubble
                avatar={avatar}
                label={displayName || user.email || 'Profile'}
                size="sm"
                className="profile-chip-bubble"
              />
            ) : (
              <span className="profile-chip-avatar" aria-hidden>
                ↪
              </span>
            )}
            <span className="profile-chip-label">
              {user ? displayName || 'Profile' : 'Account'}
            </span>
          </button>
        </div>
      </header>
      <main>{children}</main>
      <ProfileDrawer open={profileOpen} onClose={() => setProfileOpen(false)} />
    </div>
  )
}
