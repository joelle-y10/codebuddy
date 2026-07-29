import { useEffect, useState, type FormEvent } from 'react'
import { useAuth } from '../state/AuthContext'
import { checkCodeBuddySchema, supabaseUrl, type SchemaStatus } from '../lib/supabase'

export function AccountPage() {
  const {
    user,
    syncAvailable,
    syncStatus,
    syncMessage,
    signIn,
    signUp,
    signOut,
    refreshCloud,
  } = useAuth()
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setBusy(true)
    setMessage(null)
    const err = mode === 'signin' ? await signIn(email, password) : await signUp(email, password)
    setBusy(false)
    setMessage(
      err ??
        (mode === 'signup'
          ? 'Account created. If email confirm is on, check your inbox; otherwise sign in.'
          : 'Signed in — progress loads from the cloud.'),
    )
    if (!err) void refreshCloud()
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

      {user ? (
        <>
          <p className="lede">Signed in as {user.email}</p>
          <p className="body">
            Your lesson clears sync to Supabase in the cloud — not only this computer’s screen.
          </p>
          <button type="button" className="ghost-btn" onClick={() => void refreshCloud()}>
            Refresh from cloud
          </button>{' '}
          <button type="button" className="ghost-btn" onClick={() => void signOut()}>
            Sign out
          </button>
        </>
      ) : (
        <>
          <p className="lede">Sign up / sign in to practice and save progress online.</p>
          <form className="auth-form" onSubmit={(e) => void onSubmit(e)}>
            <label>
              Email
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
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
            <button className="primary-btn" type="submit" disabled={busy}>
              {busy ? 'Please wait…' : mode === 'signin' ? 'Sign in' : 'Sign up'}
            </button>
          </form>
          {message && <p className="form-msg">{message}</p>}
          <button
            type="button"
            className="text-link buttonish"
            onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
          >
            {mode === 'signin' ? 'Need an account? Sign up' : 'Have an account? Sign in'}
          </button>
        </>
      )}
    </div>
  )
}
