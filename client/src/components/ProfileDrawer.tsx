import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../state/AuthContext'
import { AvatarBubble } from './AvatarBubble'
import {
  AVATAR_COLORS,
  AVATAR_EMOJIS,
  fileToAvatarDataUrl,
  type AvatarKind,
  type ProfileAvatar,
} from '../lib/profileAvatar'

type Props = {
  open: boolean
  onClose: () => void
}

type Tab = 'profile' | 'account'

export function ProfileDrawer({ open, onClose }: Props) {
  const {
    user,
    displayName,
    avatar,
    signOut,
    updateDisplayName,
    updateAvatar,
    updateEmail,
    requestPasswordChangeEmail,
    deleteAccount,
    refreshProfile,
  } = useAuth()

  const [tab, setTab] = useState<Tab>('profile')
  const [name, setName] = useState('')
  const [draftAvatar, setDraftAvatar] = useState<ProfileAvatar>(avatar)
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState<string | null>(null)
  const [err, setErr] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  useEffect(() => {
    if (!open) return
    setMsg(null)
    setErr(null)
    setConfirmDelete(false)
    setTab('profile')
    setName(displayName || user?.email?.split('@')[0] || '')
    setEmail(user?.email ?? '')
    setDraftAvatar(avatar)
    void refreshProfile()
  }, [open, user, displayName, avatar, refreshProfile])

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

  function setKind(kind: AvatarKind) {
    setDraftAvatar((prev) => ({ ...prev, kind }))
  }

  async function onSaveProfile(e: FormEvent) {
    e.preventDefault()
    await run(async () => {
      const nameErr = await updateDisplayName(name.trim())
      if (nameErr) return nameErr
      return updateAvatar(draftAvatar)
    }, 'Profile saved.')
  }

  async function onPickImage(file: File | null) {
    if (!file) return
    setErr(null)
    try {
      const imageUrl = await fileToAvatarDataUrl(file)
      setDraftAvatar((prev) => ({ ...prev, kind: 'image', imageUrl }))
    } catch (error) {
      setErr(error instanceof Error ? error.message : 'Could not use that image.')
    }
  }

  async function onSaveEmail(e: FormEvent) {
    e.preventDefault()
    await run(
      () => updateEmail(email.trim()),
      'Confirmation email sent. Check your inbox (and the original email) and click the link to finish changing your email.',
    )
  }

  async function onRequestPasswordEmail() {
    await run(
      () => requestPasswordChangeEmail(),
      `Password change link sent to ${user?.email ?? 'your email'}. Open that email to set a new password.`,
    )
  }

  async function onDelete() {
    await run(async () => {
      const error = await deleteAccount()
      if (!error) onClose()
      return error
    }, 'Account deleted.')
  }

  return (
    <div className="profile-drawer-root" role="presentation">
      <button type="button" className="profile-backdrop" aria-label="Close profile" onClick={onClose} />
      <aside className="profile-drawer" role="dialog" aria-modal="true" aria-labelledby="profile-drawer-title">
        <header className="profile-drawer-head">
          <AvatarBubble avatar={draftAvatar} label={name || displayName || 'Profile'} size="lg" />
          <div>
            <p className="eyebrow">Your space</p>
            <h2 id="profile-drawer-title">{displayName || 'Profile'}</h2>
            <p className="muted">{user?.email}</p>
          </div>
          <button type="button" className="ghost-btn profile-close" onClick={onClose}>
            Close
          </button>
        </header>

        {!user ? (
          <div className="profile-section">
            <p className="body">Sign in to set a profile picture and manage account settings.</p>
            <Link className="primary-btn" to="/account" onClick={onClose}>
              Go to sign in
            </Link>
          </div>
        ) : (
          <>
            <div className="profile-tabs" role="tablist">
              <button
                type="button"
                role="tab"
                className={tab === 'profile' ? 'active' : ''}
                aria-selected={tab === 'profile'}
                onClick={() => setTab('profile')}
              >
                Profile
              </button>
              <button
                type="button"
                role="tab"
                className={tab === 'account' ? 'active' : ''}
                aria-selected={tab === 'account'}
                onClick={() => setTab('account')}
              >
                Account settings
              </button>
            </div>

            {tab === 'profile' && (
              <form className="profile-section auth-form" onSubmit={(e) => void onSaveProfile(e)}>
                <h3>Display name</h3>
                <label>
                  Name
                  <input value={name} onChange={(e) => setName(e.target.value)} maxLength={40} required />
                </label>

                <h3>Profile picture</h3>
                <p className="muted">Pick an emoji, a color, or upload an image.</p>
                <div className="avatar-kind-row">
                  {(['emoji', 'color', 'image'] as AvatarKind[]).map((kind) => (
                    <button
                      key={kind}
                      type="button"
                      className={`ghost-btn ${draftAvatar.kind === kind ? 'kind-active' : ''}`}
                      onClick={() => setKind(kind)}
                    >
                      {kind === 'emoji' ? 'Emoji' : kind === 'color' ? 'Color' : 'Image'}
                    </button>
                  ))}
                </div>

                {draftAvatar.kind === 'emoji' && (
                  <div className="emoji-grid" role="listbox" aria-label="Choose emoji">
                    {AVATAR_EMOJIS.map((emoji) => (
                      <button
                        key={emoji}
                        type="button"
                        className={`emoji-opt ${draftAvatar.emoji === emoji ? 'selected' : ''}`}
                        onClick={() => setDraftAvatar((p) => ({ ...p, emoji }))}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                )}

                {draftAvatar.kind === 'color' && (
                  <div className="color-grid" role="listbox" aria-label="Choose color">
                    {AVATAR_COLORS.map((color) => (
                      <button
                        key={color}
                        type="button"
                        className={`color-opt ${draftAvatar.color === color ? 'selected' : ''}`}
                        style={{ background: color }}
                        aria-label={color}
                        onClick={() => setDraftAvatar((p) => ({ ...p, color }))}
                      />
                    ))}
                  </div>
                )}

                {draftAvatar.kind === 'image' && (
                  <label className="image-upload">
                    Upload photo
                    <input
                      type="file"
                      accept="image/png,image/jpeg,image/webp,image/gif"
                      onChange={(e) => void onPickImage(e.target.files?.[0] ?? null)}
                    />
                  </label>
                )}

                <button type="submit" className="primary-btn" disabled={busy}>
                  Save profile
                </button>
              </form>
            )}

            {tab === 'account' && (
              <>
                <form className="profile-section auth-form" onSubmit={(e) => void onSaveEmail(e)}>
                  <h3>Change email</h3>
                  <p className="muted">
                    We’ll email a confirmation link to finish the change (typically to your new address,
                    and often your current one too when secure email change is enabled in Supabase).
                  </p>
                  <label>
                    New email
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </label>
                  <button type="submit" className="primary-btn" disabled={busy}>
                    Send email change confirmation
                  </button>
                </form>

                <div className="profile-section">
                  <h3>Change password</h3>
                  <p className="muted">
                    For safety, we email a link to <strong>{user.email}</strong>. Open that link to
                    choose a new password.
                  </p>
                  <button
                    type="button"
                    className="primary-btn"
                    disabled={busy}
                    onClick={() => void onRequestPasswordEmail()}
                  >
                    Email me a password change link
                  </button>
                </div>

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
                      <button
                        type="button"
                        className="danger-btn"
                        disabled={busy}
                        onClick={() => void onDelete()}
                      >
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
          </>
        )}

        {(msg || err) && <p className={`form-msg ${err ? 'form-msg-error' : ''}`}>{err ?? msg}</p>}
      </aside>
    </div>
  )
}
