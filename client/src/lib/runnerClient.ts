import type { LangId, RunResult } from '../types'
import { runJavascriptInBrowser, runPythonInBrowser } from './browserRunner'

const BACKEND_LANGS = new Set(['javascript', 'python', 'cpp', 'java'])

function apiRunUrl() {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
  return `${base}/api/run`
}

function isRunnerUnavailable(status: number) {
  // GitHub Pages (static) answers POST with 404/405; local proxy may be down (502/503/504).
  return status === 404 || status === 405 || status === 502 || status === 503 || status === 504
}

async function runInBrowserFallback(
  language: 'javascript' | 'python' | 'cpp' | 'java',
  code: string,
  stdin?: string,
): Promise<RunResult> {
  if (language === 'javascript') return runJavascriptInBrowser(code)
  if (language === 'python') return runPythonInBrowser(code, stdin)
  throw new Error(
    `${language === 'cpp' ? 'C++' : 'Java'} needs the CodeBuddy runner server. On the live site only JavaScript, Python, HTML, and Processing can Run in the browser. Locally, start the app with npm run dev.`,
  )
}

export async function runOnServer(
  language: 'javascript' | 'python' | 'cpp' | 'java',
  code: string,
  stdin?: string,
): Promise<RunResult> {
  try {
    const res = await fetch(apiRunUrl(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ language, code, stdin }),
    })

    if (res.ok) return res.json()

    if (isRunnerUnavailable(res.status)) {
      return runInBrowserFallback(language, code, stdin)
    }

    const err = await res.json().catch(() => ({}))
    throw new Error((err as { error?: string }).error || `Runner HTTP ${res.status}`)
  } catch (e) {
    // Network failure (Pages has no /api, or local API is down) → browser fallback when possible
    if (e instanceof TypeError || (e instanceof Error && /Failed to fetch|NetworkError/i.test(e.message))) {
      return runInBrowserFallback(language, code, stdin)
    }
    throw e
  }
}

export function isBackendLanguage(lang: string): lang is 'javascript' | 'python' | 'cpp' | 'java' {
  return BACKEND_LANGS.has(lang)
}

export function buildHtmlPreviewDoc(code: string): string {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
    body{font-family:system-ui,sans-serif;margin:16px;background:#0f1419;color:#e8f0e9}
  </style></head><body>${code}</body></html>`
}

export function buildProcessingPreviewDoc(code: string): string {
  return `<!DOCTYPE html><html><head><meta charset="utf-8">
<style>html,body{margin:0;background:#0b0f14;overflow:hidden} canvas{display:block;margin:0 auto}</style>
<script src="https://cdn.jsdelivr.net/npm/p5@1.11.3/lib/p5.min.js"><\/script>
</head><body>
<script>
window.onerror = function(msg) {
  document.body.innerHTML = '<pre style="color:#ff8a7a;padding:16px;font:14px/1.4 ui-monospace,monospace"></pre>';
  document.body.firstChild.textContent = String(msg);
};
<\/script>
<script>
${code}
<\/script>
</body></html>`
}

export function langLabel(id: LangId): string {
  const map: Record<LangId, string> = {
    html: 'HTML',
    javascript: 'JavaScript',
    processing: 'Processing',
    python: 'Python',
    cpp: 'C++',
    java: 'Java',
  }
  return map[id]
}
