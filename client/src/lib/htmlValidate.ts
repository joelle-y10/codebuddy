/** Lightweight HTML “compiler” messages for the console (not a full browser parse). */

export type HtmlIssue = {
  severity: 'error' | 'warning'
  message: string
}

const VOID = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr',
])

export function validateHtml(code: string): HtmlIssue[] {
  const issues: HtmlIssue[] = []
  const stack: { tag: string; line: number }[] = []
  const lines = code.split(/\r?\n/)

  // Obvious quote problems in attributes / text
  const dq = (code.match(/"/g) || []).length
  if (dq % 2 !== 0) {
    issues.push({
      severity: 'error',
      message: 'HTMLSyntaxError: Unterminated string — an odd number of " quotes. Close every opening quote.',
    })
  }

  const tagRe = /<!--[\s\S]*?-->|<\/?([A-Za-z][\w:-]*)\b([^>]*)>/g
  let match: RegExpExecArray | null
  while ((match = tagRe.exec(code)) !== null) {
    const full = match[0]
    if (full.startsWith('<!--')) continue
    const tag = match[1].toLowerCase()
    const rest = match[2] || ''
    const line = code.slice(0, match.index).split(/\r?\n/).length
    const isClose = full.startsWith('</')
    const selfClosing = /\/\s*>$/.test(full) || VOID.has(tag)

    if (isClose) {
      if (stack.length === 0) {
        issues.push({
          severity: 'error',
          message: `HTMLSyntaxError: Unexpected closing tag </${tag}> on line ${line} — nothing is open to close.`,
        })
        continue
      }
      const top = stack[stack.length - 1]
      if (top.tag !== tag) {
        issues.push({
          severity: 'error',
          message: `HTMLSyntaxError: Mismatched tags on line ${line} — expected </${top.tag}> to close <${top.tag}> from line ${top.line}, but found </${tag}>.`,
        })
      } else {
        stack.pop()
      }
      continue
    }

    if (!selfClosing) {
      stack.push({ tag, line })
    }

    // Common attribute typo: missing = 
    if (/\s[a-zA-Z_:][\w:-]*\s+"/.test(` ${rest}`) && !/=/.test(rest)) {
      issues.push({
        severity: 'warning',
        message: `HTMLWarning: Attribute on <${tag}> (line ${line}) may be missing = before its value.`,
      })
    }
  }

  for (let i = stack.length - 1; i >= 0; i--) {
    const open = stack[i]
    issues.push({
      severity: 'error',
      message: `HTMLSyntaxError: Unclosed element <${open.tag}> opened on line ${open.line} — add a matching </${open.tag}>.`,
    })
  }

  // Empty file
  if (!code.trim()) {
    issues.push({
      severity: 'error',
      message: 'HTMLSyntaxError: Empty document — add at least one element, like <h1>…</h1>.',
    })
  }

  // Angle bracket typos
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (/<[A-Za-z][^>]*$/.test(line) && !line.includes('>')) {
      issues.push({
        severity: 'error',
        message: `HTMLSyntaxError: line ${i + 1} — opening tag looks unfinished (missing >).`,
      })
    }
  }

  return issues
}

export function htmlIssuesToConsole(issues: HtmlIssue[]): string {
  if (issues.length === 0) return ''
  return issues.map((i) => i.message).join('\n')
}
