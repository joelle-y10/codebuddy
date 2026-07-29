import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../state/AuthContext'

type Props = {
  open: boolean
  onClose: () => void
}

export function ProfileDrawer({ open, onClose }: Props) {
  const {
    user,
    displayName,
    signOut,
    updateDisplayName,
    updateEmail,
    updatePassword,
    deleteAccount,
    refreshProfile,
  } = useAuth()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [msg, setMsg] = useState<string | null>(null)
  const [err, setErr] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  useEffect(() => {
    if (!open) return
    setMsg(null)
    setErr(null)
    setPassword('')
    setConfirmPassword('')
    setConfirmDelete(false)
    setName(displayName || user?.email?.split('@')[0] || '')
    setEmail(user?.email ?? '')
    void refreshProfile()
  }, [open, user, displayName, refreshProfile])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  async function run(action: () => Promise<string | null>, ok: string) {
    setBusy(true)
    setErr(null)
    setMsg(null)
    const error = await action()
    setBusy(false)
    if (error) setErr(error)
    else setMsg(ok)
  }

  async function onSaveName(e: FormEvent) {
    e.preventDefault()
    await run(() => updateDisplayName(name.trim()), 'Display name saved.')
  }

  async function onSaveEmail(e: FormEvent) {
    e.preventDefault()
    await run(() => updateEmail(email.trim()), 'Email updated. Use the new email next time you sign in.')
  }

  async function onSavePassword(e: FormEvent) {
    e.preventDefault()
    if (password.length < 6) {
      setErr('Password must be at least 6 characters.')
      return
    }
    if (password !== confirmPassword) {
      setErr('Passwords do not match.')
      return
    }
    await run(async () => {
      const error = await updatePassword(password)
      setPassword('')
      setConfirmPassword('')
      return error
    }, 'Password updated.')
  }

  async function onDelete() {
    await run(async () => {
      const error = await deleteAccount()
      if (!error) onClose()
      return error
    }, 'Account deleted.')
  }

  const initial = (displayName || user?.email || '?').slice(0, 1).toUpperCase()

  return (
    <div className="profile-drawer-root" role="presentation">
      <button type="button" className="profile-backdrop" aria-label="Close profile" onClick={onClose} />
      <aside className="profile-drawer" role="dialog" aria-modal="true" aria-labelledby="profile-drawer-title">
        <header className="profile-drawer-head">
          <div className="profile-avatar" aria-hidden>
            {initial}
          </div>
          <div>
            <p className="eyebrow">Profile</p>
            <h2 id="profile-drawer-title">{displayName || 'Your account'}</h2>
            <p className="muted">{user?.email}</p>
          </div>
          <button type="button" className="ghost-btn profile-close" onClick={onClose}>
            Close
          </button>
        </header>

        {!user ? (
          <div className="profile-section">
            <p className="body">Sign in to manage your profile, password, and cloud progress.</p>
            <Link className="primary-btn" to="/account" onClick={onClose}>
              Go to sign in
            </Link>
          </div>
        ) : (
          <>
            <form className="profile-section auth-form" onSubmit={(e) => void onSaveName(e)}>
              <h3>Display name</h3>
              <label>
                Name shown on your profile
                <input value={name} onChange={(e) => setName(e.target.value)} maxLength={40} required />
              </label>
              <button type="submit" className="primary-btn" disabled={busy}>
                Save name
              </button>
            </form>

            <form className="profile-section auth-form" onSubmit={(e) => void onSaveEmail(e)}>
              <h3>Email</h3>
              <label>
                Account email
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <button type="submit" className="primary-btn" disabled={busy}>
                Update email
              </button>
            </form>

            <form className="profile-section auth-form" onSubmit={(e) => void onSavePassword(e)}>
              <h3>Password</h3>
              <label>
                New password
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={6}
                  required
                  autoComplete="new-password"
                />
              </label>
              <label>
                Confirm password
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  minLength={6}
                  required
                  autoComplete="new-password"
                />
              </label>
              <button type="submit" className="primary-btn" disabled={busy}>
                Change password
              </button>
            </form>

            <div className="profile-section">
              <h3>Session</h3>
              <button
                type="button"
                className="ghost-btn"
                onClick={() => {
                  void signOut()
                  onClose()
                }}
              >
                Sign out
              </button>
            </div>

            <div className="profile-section danger-zone">
              <h3>Delete account</h3>
              <p className="muted">
                Permanently deletes your CodeBuddy account and cloud progress. This cannot be undone.
              </p>
              {!confirmDelete ? (
                <button type="button" className="danger-btn" onClick={() => setConfirmDelete(true)}>
                  Delete my account…
                </button>
              ) : (
                <div className="danger-confirm">
                  <p className="body">Really delete everything?</p>
                  <button type="button" className="danger-btn" disabled={busy} onClick={() => void onDelete()}>
                    Yes, delete forever
                  </button>
                  <button type="button" className="ghost-btn" onClick={() => setConfirmDelete(false)}>
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </>
        )}

        {(msg || err) && <p className={`form-msg ${err ? 'form-msg-error' : ''}`}>{err ?? msg}</p>}
      </aside>
    </div>
  )
}
