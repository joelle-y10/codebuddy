import { useEffect, useState, type FormEvent } from 'react'
import { useAuth } from '../state/AuthContext'
import { checkCodeBuddySchema, supabaseUrl, type SchemaStatus } from '../lib/supabase'
import { AvatarBubble } from '../components/AvatarBubble'

type Mode = 'signin' | 'signup' | 'forgot'

export function AccountPage() {
  const {
    user,
    displayName,
    avatar,
    syncAvailable,
    syncStatus,
    syncMessage,
    passwordRecovery,
    clearPasswordRecovery,
    signIn,
    signUp,
    signOut,
    requestPasswordReset,
    updatePassword,
    refreshCloud,
  } = useAuth()
  const [mode, setMode] = useState<Mode>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const [schemaStatus, setSchemaStatus] = useState<SchemaStatus>('checking')
  const [schemaDetail, setSchemaDetail] = useState('Checking Supabase…')

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const result = await checkCodeBuddySchema()
      if (cancelled) return
      setSchemaStatus(result.status)
      setSchemaDetail(result.detail)
    })()
    return () => {
      cancelled = true
    }
  }, [user, syncStatus])

  useEffect(() => {
    if (passwordRecovery) {
      setMessage('Reset link accepted. Choose a new password below.')
      setPassword('')
      setConfirmPassword('')
    }
  }, [passwordRecovery])

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setBusy(true)
    setMessage(null)

    if (mode === 'forgot') {
      const err = await requestPasswordReset(email)
      setBusy(false)
      setMessage(
        err ??
          `If an account exists for ${email}, a reset link is on its way. Check that inbox (and spam).`,
      )
      return
    }

    const err = mode === 'signin' ? await signIn(email, password) : await signUp(email, password)
    setBusy(false)
    setMessage(
      err ??
        (mode === 'signup'
          ? 'Account created — you’re signed in. Progress syncs to the cloud.'
          : 'Signed in — progress loads from the cloud.'),
    )
    if (!err) void refreshCloud()
  }

  async function onSetNewPassword(e: FormEvent) {
    e.preventDefault()
    if (password.length < 6) {
      setMessage('Password must be at least 6 characters.')
      return
    }
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.')
      return
    }
    setBusy(true)
    setMessage(null)
    const err = await updatePassword(password)
    setBusy(false)
    if (err) {
      setMessage(err)
      return
    }
    clearPasswordRecovery()
    setPassword('')
    setConfirmPassword('')
    setMessage('Password updated. You’re signed in with the new password.')
  }

  if (!syncAvailable) {
    return (
      <div className="page narrow">
        <h1>Connect Supabase</h1>
        <p className="lede">Create a <strong>new</strong> Supabase project for CodeBuddy (safest).</p>
        <ol className="setup-steps">
          <li>Supabase Dashboard → New project named codebuddy</li>
          <li>Settings → API → copy Project URL + anon key</li>
          <li>
            Put them in <code>client/.env</code> (see <code>.env.example</code>)
          </li>
          <li>Restart <code>npm run dev</code></li>
          <li>
            SQL Editor → paste <code>supabase/schema.sql</code> → Run
          </li>
        </ol>
      </div>
    )
  }

  return (
    <div className="page narrow">
      <h1>Account &amp; cloud</h1>

      <section className="supabase-status">
        <p className="eyebrow">Supabase connection</p>
        <p className="body">
          Project:{' '}
          <code>{supabaseUrl?.replace('https://', '').replace('.supabase.co', '') ?? 'not set'}</code>
        </p>
        <p className={`schema-pill schema-${schemaStatus}`}>
          {schemaStatus === 'checking' && 'Checking tables…'}
          {schemaStatus === 'ready' && 'CodeBuddy tables connected'}
          {schemaStatus === 'missing' && 'Run schema.sql on this project'}
          {schemaStatus === 'error' && 'Could not verify schema'}
          {schemaStatus === 'offline' && 'Offline'}
        </p>
        <p className="muted">{schemaDetail}</p>
        <p className="muted">{syncMessage}</p>

        {(schemaStatus === 'missing' || syncStatus === 'needs-schema') && (
          <div className="unlock-banner muted-banner">
            <strong>Safe setup (new project)</strong>
            <span>
              Use a <em>new</em> Supabase project so StudyBuddy is untouched. Then paste{' '}
              <code>supabase/schema.sql</code> in that project’s SQL Editor and Run — it only adds
              tables.
            </span>
          </div>
        )}
      </section>

      {passwordRecovery && (
        <section className="auth-recovery">
          <h2>Set a new password</h2>
          <p className="body">You opened a password reset / change link from your email.</p>
          <form className="auth-form" onSubmit={(e) => void onSetNewPassword(e)}>
            <label>
              New password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                autoComplete="new-password"
              />
            </label>
            <label>
              Confirm password
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
                autoComplete="new-password"
              />
            </label>
            <button className="primary-btn" type="submit" disabled={busy}>
              {busy ? 'Please wait…' : 'Save new password'}
            </button>
          </form>
          {message && <p className="form-msg">{message}</p>}
        </section>
      )}

      {!passwordRecovery && user ? (
        <>
          <div className="account-signed-in">
            <AvatarBubble avatar={avatar} label={displayName || user.email || 'You'} size="lg" />
            <div>
              <p className="lede">{displayName || 'Signed in'}</p>
              <p className="muted">{user.email}</p>
            </div>
          </div>
          <p className="body">
            Your lesson clears sync to Supabase in the cloud — not only this computer’s screen.
          </p>
          <p className="body">
            Open the <strong>Profile</strong> chip in the top bar for picture, emoji/color, email,
            password, and delete-account settings.
          </p>
          <button type="button" className="ghost-btn" onClick={() => void refreshCloud()}>
            Refresh from cloud
          </button>{' '}
          <button type="button" className="ghost-btn" onClick={() => void signOut()}>
            Sign out
          </button>
        </>
      ) : null}

      {!passwordRecovery && !user ? (
        <>
          <p className="lede">
            {mode === 'forgot'
              ? 'Forgot password — we’ll email you a reset link.'
              : 'Sign up / sign in to practice and save progress online.'}
          </p>
          <form className="auth-form" onSubmit={(e) => void onSubmit(e)}>
            <label>
              Email
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            {mode !== 'forgot' && (
              <label>
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </label>
            )}
            <button className="primary-btn" type="submit" disabled={busy}>
              {busy
                ? 'Please wait…'
                : mode === 'signin'
                  ? 'Sign in'
                  : mode === 'signup'
                    ? 'Sign up'
                    : 'Send reset link'}
            </button>
          </form>
          {message && <p className="form-msg">{message}</p>}
          <div className="auth-links">
            {mode === 'signin' && (
              <button type="button" className="text-link buttonish" onClick={() => setMode('forgot')}>
                Forgot password?
              </button>
            )}
            {mode === 'forgot' && (
              <button type="button" className="text-link buttonish" onClick={() => setMode('signin')}>
                Back to sign in
              </button>
            )}
            {mode !== 'forgot' && (
              <button
                type="button"
                className="text-link buttonish"
                onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
              >
                {mode === 'signin' ? 'Need an account? Sign up' : 'Have an account? Sign in'}
              </button>
            )}
          </div>
        </>
      ) : null}
    </div>
  )
}
