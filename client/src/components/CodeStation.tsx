import { useEffect, useMemo, useRef, useState } from 'react'
import Editor from '@monaco-editor/react'
import type { CheckResult, Practice, RunnerId, RunResult } from '../types'
import { gradePractice } from '../lib/grader'
import { explainRunnerError } from '../lib/errorExplain'
import { enableHtmlTagAutoClose } from '../lib/monacoTagClose'
import { htmlIssuesToConsole, validateHtml } from '../lib/htmlValidate'
import { answerPayload, coachBlurb, mediumHintPayload } from '../lib/practiceCoach'
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
  const [hintLevel, setHintLevel] = useState<0 | 1 | 2>(0)
  const [hintText, setHintText] = useState<string | null>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    setCode(practice.starterCode)
    setResult(null)
    setChecks(null)
    setPreviewDoc(null)
    setError(null)
    setHintLevel(0)
    setHintText(null)
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

  const hadRuntimeError = Boolean(
    result &&
      (result.compileError ||
        result.timedOut ||
        (result.stderr && result.exitCode !== 0) ||
        /HTMLSyntaxError/i.test(result.stderr || '')),
  )

  const coach = useMemo(
    () => coachBlurb(runner, checks, hadRuntimeError, practice.softHint),
    [runner, checks, hadRuntimeError, practice.softHint],
  )

  const showConsole = isBackendLanguage(runner) || runner === 'html'

  async function handleRun() {
    setRunning(true)
    setError(null)
    setChecks(null)
    setHintLevel(0)
    setHintText(null)
    try {
      let runResult: RunResult | null = null
      let preview: string | undefined

      if (runner === 'html') {
        const issues = validateHtml(code)
        const consoleText = htmlIssuesToConsole(issues)
        const hasError = issues.some((i) => i.severity === 'error')
        preview = buildHtmlPreviewDoc(code)
        setPreviewDoc(preview)
        runResult = {
          stdout: hasError ? '' : '(preview updated)',
          stderr: consoleText,
          exitCode: hasError ? 1 : 0,
          timedOut: false,
          durationMs: 0,
          compileError: hasError ? consoleText.split('\n')[0] : undefined,
        }
        setResult(runResult)
      } else if (runner === 'processing') {
        preview = buildProcessingPreviewDoc(code)
        setPreviewDoc(preview)
        runResult = { stdout: '', stderr: '', exitCode: 0, timedOut: false, durationMs: 0 }
        setResult(runResult)
      } else if (isBackendLanguage(runner)) {
        setPreviewDoc(null)
        const stdin = practice.tests.find((t) => t.stdin)?.stdin
        runResult = await runOnServer(runner, code, stdin)
        setResult(runResult)
      }

      const graded = gradePractice(practice, code, runResult, preview ?? code)
      setChecks(graded)
      const passedCount = graded.filter((c) => c.passed).length
      if (passedCount === graded.length && graded.length > 0 && !hadErrorResult(runResult)) {
        onPass(passedCount, code, graded)
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Run failed')
      setResult(null)
    } finally {
      setRunning(false)
    }
  }

  function hadErrorResult(r: RunResult | null) {
    if (!r) return false
    return Boolean(r.compileError || r.timedOut || (r.stderr && r.exitCode !== 0))
  }

  function onNeedHint() {
    const text = mediumHintPayload(practice, checks)
    setHintLevel(1)
    setHintText(text)
  }

  function onNeedAnswer() {
    const text = answerPayload(practice, checks)
    setHintLevel(2)
    setHintText(text)
  }

  const allPassed = Boolean(checks && checks.length > 0 && checks.every((c) => c.passed))
  const anyFailed = Boolean(checks && checks.some((c) => !c.passed))

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
            onMount={(editor, monaco) => {
              enableHtmlTagAutoClose(editor, monaco)
            }}
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              wordWrap: 'on',
              automaticLayout: true,
              tabSize: 2,
              autoClosingBrackets: 'always',
              autoClosingQuotes: 'always',
              autoIndent: 'full',
              formatOnPaste: true,
              suggest: {
                showWords: true,
              },
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

          {showConsole && (
            <div className="console-coach">
              <div className="console-wrap">
                <p className="pane-label">Console (raw)</p>
                <pre className="console">
                  {error
                    ? error
                    : result
                      ? [
                          result.compileError && runner !== 'html'
                            ? `compile:\n${result.compileError}`
                            : null,
                          result.stdout && !result.stdout.startsWith('(preview')
                            ? result.stdout
                            : null,
                          result.stderr ? result.stderr : null,
                          result.timedOut ? 'Timed out.' : null,
                          !result.stdout && !result.stderr && !result.compileError
                            ? '(no output)'
                            : null,
                          runner === 'html' && !result.stderr && result.exitCode === 0
                            ? '(no HTML syntax errors)'
                            : null,
                        ]
                          .filter(Boolean)
                          .join('\n\n')
                      : 'Output and language errors appear here after you Run.'}
                </pre>
              </div>
              <ErrorAssistant explanation={explanation} />
            </div>
          )}

          <aside className={`buddy-coach ${anyFailed || hadRuntimeError ? 'active' : 'idle'}`}>
            <p className="pane-label">CodeBuddy</p>
            <p className="body">{coach}</p>
            {(anyFailed || hadRuntimeError || !allPassed) && (
              <div className="hint-actions">
                <button type="button" className="ghost-btn" onClick={onNeedHint}>
                  I need a hint
                </button>
                <button type="button" className="ghost-btn" onClick={onNeedAnswer}>
                  I need the answer
                </button>
              </div>
            )}
            {hintText && (
              <div className={`reveal-box ${hintLevel === 2 ? 'reveal-answer' : 'reveal-hint'}`}>
                <strong>{hintLevel === 2 ? 'Answer' : 'Hint'}</strong>
                <pre>{hintText}</pre>
              </div>
            )}
          </aside>

          <div className="feedback">
            <p className="pane-label">Checks</p>
            {!checks && <p className="muted">Run to see what you got right and wrong.</p>}
            {checks && (
              <ul className="check-list">
                {checks.map((c) => (
                  <li key={c.id} className={c.passed ? 'ok' : 'bad'}>
                    <strong>{c.passed ? 'Right' : 'Wrong'}</strong>
                    <span>{c.description}</span>
                    <em>{c.message}</em>
                  </li>
                ))}
              </ul>
            )}
            {allPassed && !hadRuntimeError && <p className="pass-banner">Practice cleared.</p>}
          </div>
        </div>
      </div>
    </article>
  )
}
