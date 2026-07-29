import type { RunResult } from '../types'

declare global {
  interface Window {
    loadPyodide?: (opts?: { indexURL?: string }) => Promise<PyodideInterface>
  }
}

type PyodideInterface = {
  runPythonAsync: (code: string) => Promise<unknown>
  setStdout: (opts: { batched: (text: string) => void }) => void
  setStderr: (opts: { batched: (text: string) => void }) => void
  globals: { set: (key: string, value: unknown) => void }
}

let pyodideReady: Promise<PyodideInterface> | null = null

function formatArg(value: unknown): string {
  if (typeof value === 'string') return value
  if (typeof value === 'number' || typeof value === 'boolean' || value == null) return String(value)
  try {
    return JSON.stringify(value)
  } catch {
    return String(value)
  }
}

function nowMs() {
  return typeof performance !== 'undefined' ? performance.now() : Date.now()
}

/** Run JavaScript in the browser (used when the API runner is unavailable). */
export async function runJavascriptInBrowser(code: string): Promise<RunResult> {
  const lines: string[] = []
  const fakeConsole = {
    log: (...args: unknown[]) => lines.push(args.map(formatArg).join(' ')),
    info: (...args: unknown[]) => lines.push(args.map(formatArg).join(' ')),
    warn: (...args: unknown[]) => lines.push(args.map(formatArg).join(' ')),
    error: (...args: unknown[]) => lines.push(args.map(formatArg).join(' ')),
  }

  const started = nowMs()
  try {
    const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor as new (
      ...args: string[]
    ) => (...args: unknown[]) => Promise<unknown>

    // Run as async so top-level await works. University lessons often call async main()
    // without awaiting it — give those promises a moment to finish.
    const runner = new AsyncFunction('console', code)
    await runner(fakeConsole)
    await Promise.resolve()
    await new Promise((r) => setTimeout(r, 20))

    return {
      stdout: lines.join('\n'),
      stderr: '',
      exitCode: 0,
      timedOut: false,
      durationMs: Math.round(nowMs() - started),
    }
  } catch (e) {
    const message = e instanceof Error ? e.stack || e.message : String(e)
    return {
      stdout: lines.join('\n'),
      stderr: message,
      exitCode: 1,
      timedOut: false,
      durationMs: Math.round(nowMs() - started),
      compileError: /SyntaxError/i.test(message) ? message.split('\n')[0] : undefined,
    }
  }
}

async function loadPyodideOnce(): Promise<PyodideInterface> {
  if (!pyodideReady) {
    pyodideReady = (async () => {
      if (!window.loadPyodide) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement('script')
          script.src = 'https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.js'
          script.async = true
          script.onload = () => resolve()
          script.onerror = () => reject(new Error('Could not load the in-browser Python engine (Pyodide).'))
          document.head.appendChild(script)
        })
      }
      if (!window.loadPyodide) {
        throw new Error('Pyodide failed to initialize.')
      }
      return window.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.27.5/full/',
      })
    })()
  }
  return pyodideReady
}

/** Run Python in the browser via Pyodide (used when the API runner is unavailable). */
export async function runPythonInBrowser(code: string, stdin?: string): Promise<RunResult> {
  const started = nowMs()
  let stdout = ''
  let stderr = ''

  try {
    const pyodide = await loadPyodideOnce()
    pyodide.setStdout({
      batched: (text) => {
        stdout += text.endsWith('\n') ? text : `${text}\n`
      },
    })
    pyodide.setStderr({
      batched: (text) => {
        stderr += text.endsWith('\n') ? text : `${text}\n`
      },
    })

    if (stdin != null && stdin.length > 0) {
      const escaped = JSON.stringify(stdin)
      await pyodide.runPythonAsync(`
import sys
from io import StringIO
sys.stdin = StringIO(${escaped})
`)
    }

    await pyodide.runPythonAsync(code)

    return {
      stdout: stdout.replace(/\n$/, ''),
      stderr: stderr.replace(/\n$/, ''),
      exitCode: 0,
      timedOut: false,
      durationMs: Math.round(nowMs() - started),
    }
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e)
    const combined = stderr ? `${stderr}\n${message}` : message
    return {
      stdout: stdout.replace(/\n$/, ''),
      stderr: combined,
      exitCode: 1,
      timedOut: false,
      durationMs: Math.round(nowMs() - started),
      compileError: /SyntaxError/i.test(message) ? message.split('\n')[0] : undefined,
    }
  }
}
