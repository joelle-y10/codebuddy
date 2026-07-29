import { useState, type FormEvent } from 'react'
import { useAuth } from '../state/AuthContext'

export function AccountPage() {
  const { user, syncAvailable, signIn, signUp } = useAuth()
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setBusy(true)
    setMessage(null)
    const err = mode === 'signin' ? await signIn(email, password) : await signUp(email, password)
    setBusy(false)
    setMessage(err ?? (mode === 'signup' ? 'Check your email to confirm, then sign in.' : 'Signed in.'))
  }

  if (!syncAvailable) {
    return (
      <div className="page narrow">
        <h1>Account</h1>
        <p>Supabase keys are missing. Progress still saves in this browser.</p>
      </div>
    )
  }

  if (user) {
    return (
      <div className="page narrow">
        <h1>Account</h1>
        <p className="lede">Signed in as {user.email}</p>
        <p className="body">Lesson progress syncs to Supabase when you clear a station.</p>
      </div>
    )
  }

  return (
    <div className="page narrow">
      <h1>{mode === 'signin' ? 'Sign in' : 'Create account'}</h1>
      <p className="lede">Sync your CodeBuddy progress with Supabase.</p>
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
    </div>
  )
}
