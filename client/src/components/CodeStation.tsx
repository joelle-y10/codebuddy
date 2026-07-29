import { useEffect, useMemo, useRef, useState } from 'react'
import Editor from '@monaco-editor/react'
import type { CheckResult, LangId, Practice, RunnerId, RunResult } from '../types'
import { gradePractice } from '../lib/grader'
import { explainRunnerError } from '../lib/errorExplain'
import { enableHtmlTagAutoClose } from '../lib/monacoTagClose'
import { htmlIssuesToConsole, validateHtml } from '../lib/htmlValidate'
import { answerPayload, coachBlurb, mediumHintPayload } from '../lib/practiceCoach'
import {
  ANSWER_UNLOCK_AFTER,
  HINT_UNLOCK_AFTER,
  struggleLabel,
  type PracticeHelpRecord,
} from '../lib/practiceHelp'
import { useAuth } from '../state/AuthContext'
import { ErrorAssistant } from './ErrorAssistant'
import {
  buildHtmlPreviewDoc,
  buildProcessingPreviewDoc,
  isBackendLanguage,
  runOnServer,
} from '../lib/runnerClient'

type Props = {
  runner: RunnerId
  language: LangId
  lessonId: string
  practice: Practice
  cleared: boolean
  onPass: (score: number, code: string, checks: CheckResult[]) => void
}

const diffLabel = { 1: 'Warm-up', 2: 'Practice', 3: 'Challenge' }

export function CodeStation({ runner, language, lessonId, practice, cleared, onPass }: Props) {
  const { recordPracticeHelp, getPracticeHelp } = useAuth()
  const savedHelp = getPracticeHelp(language, lessonId, practice.id)

  const [code, setCode] = useState(practice.starterCode)
  const [running, setRunning] = useState(false)
  const [result, setResult] = useState<RunResult | null>(null)
  const [checks, setChecks] = useState<CheckResult[] | null>(null)
  const [previewDoc, setPreviewDoc] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [failedAttempts, setFailedAttempts] = useState(savedHelp.failedAttempts)
  const [usedHint, setUsedHint] = useState(savedHelp.usedHint)
  const [usedAnswer, setUsedAnswer] = useState(savedHelp.usedAnswer)
  const [hintLevel, setHintLevel] = useState<0 | 1 | 2>(savedHelp.usedAnswer ? 2 : savedHelp.usedHint ? 1 : 0)
  const [hintText, setHintText] = useState<string | null>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Reset editor only when the practice itself changes — not when helpMap updates.
  // recordPracticeHelp (called after a failed Run) recreates getPracticeHelp; if that
  // were a dependency, every Run would wipe the learner's code back to starterCode.
  useEffect(() => {
    const help = getPracticeHelp(language, lessonId, practice.id)
    setCode(practice.starterCode)
    setResult(null)
    setChecks(null)
    setPreviewDoc(null)
    setError(null)
    setFailedAttempts(help.failedAttempts)
    setUsedHint(help.usedHint)
    setUsedAnswer(help.usedAnswer)
    setHintLevel(help.usedAnswer ? 2 : help.usedHint ? 1 : 0)
    setHintText(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- omit getPracticeHelp on purpose
  }, [practice.id, practice.starterCode, language, lessonId])

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
  const hintUnlocked = failedAttempts >= HINT_UNLOCK_AFTER
  const answerUnlocked = failedAttempts >= ANSWER_UNLOCK_AFTER
  const hintRemaining = Math.max(0, HINT_UNLOCK_AFTER - failedAttempts)
  const answerRemaining = Math.max(0, ANSWER_UNLOCK_AFTER - failedAttempts)

  function hadErrorResult(r: RunResult | null) {
    if (!r) return false
    return Boolean(r.compileError || r.timedOut || (r.stderr && r.exitCode !== 0))
  }

  function topicsFromChecks(graded: CheckResult[]) {
    return graded.filter((c) => !c.passed).map((c) => c.description).slice(0, 8)
  }

  async function persistHelp(patch: {
    failedAttempts: number
    usedHint?: boolean
    usedAnswer?: boolean
    topics?: string[]
  }) {
    await recordPracticeHelp({
      language,
      lessonId,
      practiceId: practice.id,
      failedAttempts: patch.failedAttempts,
      usedHint: patch.usedHint,
      usedAnswer: patch.usedAnswer,
      topics: patch.topics ?? [practice.title],
    })
  }

  async function handleRun() {
    setRunning(true)
    setError(null)
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
      const failed = passedCount < graded.length || hadErrorResult(runResult)

      if (failed) {
        const nextFails = failedAttempts + 1
        setFailedAttempts(nextFails)
        void persistHelp({
          failedAttempts: nextFails,
          topics: topicsFromChecks(graded).length ? topicsFromChecks(graded) : [practice.title],
        })
      } else if (graded.length > 0) {
        onPass(passedCount, code, graded)
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Run failed')
      setResult(null)
      const nextFails = failedAttempts + 1
      setFailedAttempts(nextFails)
      void persistHelp({ failedAttempts: nextFails, topics: [practice.title] })
    } finally {
      setRunning(false)
    }
  }

  function onNeedHint() {
    if (!hintUnlocked) return
    const text = mediumHintPayload(practice, checks)
    setHintLevel(1)
    setHintText(text)
    setUsedHint(true)
    void persistHelp({
      failedAttempts,
      usedHint: true,
      topics: checks ? topicsFromChecks(checks) : [practice.title],
    })
  }

  function onNeedAnswer() {
    if (!answerUnlocked) return
    const text = answerPayload(practice, checks)
    setHintLevel(2)
    setHintText(text)
    setUsedAnswer(true)
    void persistHelp({
      failedAttempts,
      usedHint: true,
      usedAnswer: true,
      topics: checks ? topicsFromChecks(checks) : [practice.title],
    })
  }

  const allPassed = Boolean(checks && checks.length > 0 && checks.every((c) => c.passed))
  const anyFailed = Boolean(checks && checks.some((c) => !c.passed))
  const badge = struggleLabel({
    failedAttempts,
    usedHint,
    usedAnswer,
    struggling: usedHint || usedAnswer || failedAttempts >= HINT_UNLOCK_AFTER,
    topics: [],
  } satisfies PracticeHelpRecord)

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
            {badge ? ` · ${badge}` : ''}
            {failedAttempts > 0 ? ` · ${failedAttempts} failed attempt${failedAttempts === 1 ? '' : 's'}` : ''}
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
            <p className="muted unlock-note">
              Hint unlocks after {HINT_UNLOCK_AFTER} failed attempts
              {hintUnlocked ? ' ✓' : ` (${hintRemaining} to go)`}. Answer unlocks after{' '}
              {ANSWER_UNLOCK_AFTER} failed attempts
              {answerUnlocked ? ' ✓' : ` (${answerRemaining} to go)`}.
            </p>
            <div className="hint-actions">
              <button
                type="button"
                className="ghost-btn"
                onClick={onNeedHint}
                disabled={!hintUnlocked}
                title={
                  hintUnlocked
                    ? 'Get a directional hint (not the full answer)'
                    : `Keep trying — unlocks after ${HINT_UNLOCK_AFTER} failed runs`
                }
              >
                I need a hint
              </button>
              <button
                type="button"
                className="ghost-btn"
                onClick={onNeedAnswer}
                disabled={!answerUnlocked}
                title={
                  answerUnlocked
                    ? 'Reveal the answer for this practice'
                    : `Keep trying — unlocks after ${ANSWER_UNLOCK_AFTER} failed runs`
                }
              >
                I need help with the answer
              </button>
            </div>
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
