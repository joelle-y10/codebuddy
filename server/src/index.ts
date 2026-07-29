import express from 'express'
import cors from 'cors'
import { runCode, type RunLanguage } from './runner.js'

const app = express()
const PORT = Number(process.env.PORT) || 8787

app.use(cors({ origin: true }))
app.use(express.json({ limit: '256kb' }))

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'codebuddy-runner', ts: Date.now() })
})

const ALLOWED: RunLanguage[] = ['javascript', 'python', 'cpp', 'java']

app.post('/api/run', async (req, res) => {
  try {
    const { language, code, stdin, timeoutMs } = req.body ?? {}
    if (!ALLOWED.includes(language)) {
      res.status(400).json({ error: `language must be one of: ${ALLOWED.join(', ')}` })
      return
    }
    if (typeof code !== 'string') {
      res.status(400).json({ error: 'code must be a string' })
      return
    }
    const result = await runCode({
      language,
      code,
      stdin: typeof stdin === 'string' ? stdin : undefined,
      timeoutMs: typeof timeoutMs === 'number' ? timeoutMs : undefined,
    })
    res.json(result)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Runner failed'
    res.status(500).json({ error: message })
  }
})

app.listen(PORT, () => {
  console.log(`CodeBuddy runner API on http://localhost:${PORT}`)
})
