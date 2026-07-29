import type { LangId, RunResult } from '../types'

const BACKEND_LANGS = new Set(['javascript', 'python', 'cpp', 'java'])

export async function runOnServer(
  language: 'javascript' | 'python' | 'cpp' | 'java',
  code: string,
  stdin?: string,
): Promise<RunResult> {
  const res = await fetch('/api/run', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ language, code, stdin }),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.error || `Runner HTTP ${res.status}`)
  }
  return res.json()
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
