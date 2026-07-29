import type { CheckResult, LessonTest, Practice, RunnerId } from '../types'

/** Gentle nudge — never paste the expected code/output. */
export function softHintForTest(test: Pick<LessonTest, 'kind' | 'description' | 'softHint'>): string {
  if (test.softHint?.trim()) return test.softHint.trim()

  switch (test.kind) {
    case 'stdout':
      return 'Your printed output doesn’t match yet. Check spelling, capitalization, spaces, and whether you need a new line.'
    case 'stdoutIncludes':
      return 'Something the prompt asked for is missing from your output. Print the key words, then Run again.'
    case 'codeIncludes':
      return 'A required piece of code is still missing. Re-read the prompt and the example — think about which keyword or symbol you haven’t used yet.'
    case 'codeMatches':
      return 'Your code is close, but the shape isn’t quite right yet. Compare punctuation and structure to the example (colons, braces, parentheses).'
    case 'htmlIncludes':
      return 'The page is missing markup the check expects. Look at which tag or attribute the prompt asked for, and make sure it’s spelled correctly.'
    default:
      return 'Not quite yet — re-read the prompt slowly and try one small change.'
  }
}

function directionalFromDescription(description: string): string {
  const d = description.toLowerCase()
  if (d.includes('print') || d.includes('output')) {
    return 'Focus on what should appear in the console.'
  }
  if (d.includes('boolean') || d.includes('true') || d.includes('false')) {
    return 'Think about whether you need a boolean value or a string of text.'
  }
  if (d.includes('tag') || d.includes('html') || d.includes('heading')) {
    return 'Check opening and closing tags, and that the tag name matches the prompt.'
  }
  if (d.includes('if') || d.includes('condition')) {
    return 'Look at your condition and the punctuation around it.'
  }
  if (d.includes('loop') || d.includes('for') || d.includes('while')) {
    return 'Check the loop header and that the body is indented / braced correctly.'
  }
  return 'Compare your approach to the worked example in this lesson.'
}

function looksLikeFullAnswer(hint: string): boolean {
  const h = hint.trim()
  if (h.includes('\n') && /print\(|console\.|System\.out|std::cout|<\w+/.test(h)) return true
  if (/^(print|console\.log|System\.out|std::cout|public class|#include)/.test(h)) return true
  if (/^<\/?[a-zA-Z]/.test(h) && h.includes('>')) return true
  return false
}

/** Medium hint for the “I need a hint” button — directional, avoids dumping full solutions when possible. */
export function mediumHintForTest(test: LessonTest): string {
  if (test.softHint?.trim()) {
    return `${test.softHint.trim()} ${directionalFromDescription(test.description)}`.trim()
  }
  if (test.hint?.trim() && !looksLikeFullAnswer(test.hint)) {
    return test.hint.trim()
  }
  return `${softHintForTest(test)} ${directionalFromDescription(test.description)}`.trim()
}

/** Build a coach blurb after a failed run (no answers). */
export function coachBlurb(
  _runner: RunnerId,
  checks: CheckResult[] | null,
  hadRuntimeError: boolean,
  practiceSoftHint?: string,
): string {
  if (hadRuntimeError) {
    return 'CodeBuddy noticed a real language error in the console. Read that message first — the Error coach explains what it means. Fix the crash, then worry about the checks.'
  }
  if (!checks || checks.length === 0) {
    return 'Hit Run when you’re ready. I’ll mark what’s right and wrong — without spoiling the answer. Use “I need a hint” only if you’re stuck.'
  }
  const failed = checks.filter((c) => !c.passed)
  if (failed.length === 0) {
    return 'Nice — every check passed. You cleared this practice.'
  }
  if (practiceSoftHint?.trim()) {
    return `You got ${failed.length} check${failed.length === 1 ? '' : 's'} wrong. ${practiceSoftHint.trim()}`
  }
  const tips = failed.slice(0, 2).map((c) =>
    softHintForTest({
      kind: c.kind ?? 'codeIncludes',
      description: c.description,
      softHint: c.softHint,
    }),
  )
  return `Hey — ${failed.length} check${failed.length === 1 ? '' : 's'} still wrong. ${tips.join(' ')}`
}

export function answerPayload(practice: Practice, checks?: CheckResult[] | null): string {
  if (practice.solution?.trim()) {
    return practice.solution.trim()
  }
  const failed = (checks ?? []).filter((c) => !c.passed)
  const tests = failed.length
    ? practice.tests.filter((t) => failed.some((c) => c.id === t.id))
    : practice.tests
  const parts: string[] = []
  for (const t of tests) {
    if (t.answer?.trim()) {
      parts.push(`• ${t.description}\n${t.answer.trim()}`)
    } else if (t.hint?.trim() && looksLikeFullAnswer(t.hint)) {
      parts.push(`• ${t.description}\n${t.hint.trim()}`)
    } else if (t.kind === 'stdout' || t.kind === 'stdoutIncludes') {
      parts.push(`• ${t.description}\nExpected output: ${JSON.stringify(t.expect)}`)
    } else if (t.kind === 'codeIncludes' || t.kind === 'htmlIncludes') {
      parts.push(`• ${t.description}\nInclude this in your code: ${t.expect}`)
    } else if (t.kind === 'codeMatches') {
      parts.push(`• ${t.description}\nYour code should match this pattern: ${t.expect}`)
    } else if (t.hint?.trim()) {
      parts.push(`• ${t.description}\n${t.hint.trim()}`)
    }
  }
  if (parts.length === 0) {
    return 'No authored answer for this practice yet — re-read the example above the station and match its structure.'
  }
  return parts.join('\n\n')
}

export function mediumHintPayload(practice: Practice, checks: CheckResult[] | null): string {
  const failed = (checks ?? []).filter((c) => !c.passed)
  const tests = failed.length
    ? practice.tests.filter((t) => failed.some((c) => c.id === t.id))
    : practice.tests
  return tests.map((t) => `• ${t.description}: ${mediumHintForTest(t)}`).join('\n')
}
