import { useEffect, useMemo, useRef, useState } from 'react'
import Editor from '@monaco-editor/react'
import type { CheckResult, Practice, RunnerId, RunResult } from '../types'
import { gradePractice } from '../lib/grader'
import { explainRunnerError } from '../lib/errorExplain'
import { ErrorAssistant } from './ErrorAssistant'
import {
  buildHtmlPreviewDoc,
  buildProcessingPreviewDoc,
  isBackendLanguage,
  runOnServer,
} from '../lib/runnerClient'

type Props = {
  runner: RunnerId
  practice: Practice
  cleared: boolean
  onPass: (score: number, code: string, checks: CheckResult[]) => void
}

const diffLabel = { 1: 'Warm-up', 2: 'Practice', 3: 'Challenge' }

export function CodeStation({ runner, practice, cleared, onPass }: Props) {
  const [code, setCode] = useState(practice.starterCode)
  const [running, setRunning] = useState(false)
  const [result, setResult] = useState<RunResult | null>(null)
  const [checks, setChecks] = useState<CheckResult[] | null>(null)
  const [previewDoc, setPreviewDoc] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    setCode(practice.starterCode)
    setResult(null)
    setChecks(null)
    setPreviewDoc(null)
    setError(null)
  }, [practice.id, practice.starterCode])

  const monacoLang = useMemo(() => {
    if (runner === 'cpp') return 'cpp'
    if (runner === 'java') return 'java'
    if (runner === 'python') return 'python'
    if (runner === 'html') return 'html'
    return 'javascript'
  }, [runner])

  const explanation = useMemo(
    () => explainRunnerError(runner, result, error),
    [runner, result, error],
  )

  async function handleRun() {
    setRunning(true)
    setError(null)
    setChecks(null)
    try {
      let runResult: RunResult | null = null
      let preview: string | undefined

      if (runner === 'html') {
        preview = buildHtmlPreviewDoc(code)
        setPreviewDoc(preview)
        runResult = { stdout: '', stderr: '', exitCode: 0, timedOut: false, durationMs: 0 }
      } else if (runner === 'processing') {
        preview = buildProcessingPreviewDoc(code)
        setPreviewDoc(preview)
        runResult = { stdout: '', stderr: '', exitCode: 0, timedOut: false, durationMs: 0 }
      } else if (isBackendLanguage(runner)) {
        setPreviewDoc(null)
        const stdin = practice.tests.find((t) => t.stdin)?.stdin
        runResult = await runOnServer(runner, code, stdin)
        setResult(runResult)
      }

      const graded = gradePractice(practice, code, runResult, preview ?? code)
      setChecks(graded)
      const passedCount = graded.filter((c) => c.passed).length
      if (passedCount === graded.length && graded.length > 0) {
        onPass(passedCount, code, graded)
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Run failed')
      setResult(null)
    } finally {
      setRunning(false)
    }
  }

  const allPassed = Boolean(checks && checks.length > 0 && checks.every((c) => c.passed))

  return (
    <article
      className={`station practice-card diff-${practice.difficulty}`}
      id={`practice-${practice.id}`}
    >
      <div className="station-head">
        <div>
          <p className="eyebrow">
            {diffLabel[practice.difficulty]} · Difficulty {practice.difficulty}/3
            {cleared ? ' · Cleared' : ''}
          </p>
          <h3>{practice.title}</h3>
          <p className="body practice-prompt">{practice.prompt}</p>
        </div>
        <button type="button" className="run-btn" onClick={() => void handleRun()} disabled={running}>
          {running ? 'Running…' : 'Run'}
        </button>
      </div>

      <div className="station-grid">
        <div className="editor-pane">
          <Editor
            height="280px"
            theme="vs-dark"
            language={monacoLang}
            value={code}
            onChange={(v) => setCode(v ?? '')}
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              wordWrap: 'on',
              automaticLayout: true,
              tabSize: 2,
            }}
          />
        </div>

        <div className="output-pane">
          {(runner === 'html' || runner === 'processing') && (
            <div className="preview-frame-wrap">
              <p className="pane-label">Preview</p>
              {previewDoc ? (
                <iframe
                  ref={iframeRef}
                  title={practice.title}
                  className="preview-frame"
                  sandbox="allow-scripts"
                  srcDoc={previewDoc}
                />
              ) : (
                <div className="preview-placeholder">Hit Run to preview.</div>
              )}
            </div>
          )}

          {isBackendLanguage(runner) && (
            <div className="console-coach">
              <div className="console-wrap">
                <p className="pane-label">Console (raw)</p>
                <pre className="console">
                  {error
                    ? error
                    : result
                      ? [
                          result.compileError ? `compile:\n${result.compileError}` : null,
                          result.stdout ? result.stdout : null,
                          result.stderr ? `stderr:\n${result.stderr}` : null,
                          result.timedOut ? 'Timed out.' : null,
                          !result.stdout && !result.stderr && !result.compileError
                            ? '(no output)'
                            : null,
                        ]
                          .filter(Boolean)
                          .join('\n\n')
                      : 'Output appears here after you Run.'}
                </pre>
              </div>
              <ErrorAssistant explanation={explanation} />
            </div>
          )}

          <div className="feedback">
            <p className="pane-label">Checks</p>
            {!checks && <p className="muted">Run to see what you got right and wrong.</p>}
            {checks && (
              <ul className="check-list">
                {checks.map((c) => (
                  <li key={c.id} className={c.passed ? 'ok' : 'bad'}>
                    <strong>{c.passed ? 'Right' : 'Wrong'}</strong>
                    <span>{c.description}</span>
                    <em>{c.passed ? c.message : `${c.message} — Hint: ${c.hint}`}</em>
                  </li>
                ))}
              </ul>
            )}
            {allPassed && <p className="pass-banner">Practice cleared.</p>}
          </div>
        </div>
      </div>
    </article>
  )
}
