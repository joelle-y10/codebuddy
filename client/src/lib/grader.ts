import type { CheckResult, LessonTest, Practice, RunResult } from '../types'

function norm(s: string) {
  return s.replace(/\r\n/g, '\n').trimEnd()
}

export function evaluateTest(
  test: LessonTest,
  code: string,
  result: RunResult | null,
  previewHtml?: string,
): CheckResult {
  const fail = (message: string): CheckResult => ({
    id: test.id,
    description: test.description,
    passed: false,
    message,
    hint: test.hint,
  })
  const pass = (message: string): CheckResult => ({
    id: test.id,
    description: test.description,
    passed: true,
    message,
    hint: test.hint,
  })

  if (test.kind === 'codeIncludes') {
    return code.includes(test.expect)
      ? pass('Found the expected code pattern.')
      : fail(`Missing: ${test.expect}`)
  }

  if (test.kind === 'codeMatches') {
    try {
      const re = new RegExp(test.expect, 'm')
      return re.test(code) ? pass('Code matches the required pattern.') : fail('Pattern not found in your code.')
    } catch {
      return fail('Invalid test pattern.')
    }
  }

  if (test.kind === 'htmlIncludes') {
    const hay = previewHtml ?? code
    return hay.includes(test.expect)
      ? pass('HTML includes the expected markup.')
      : fail(`Expected HTML to include: ${test.expect}`)
  }

  if (!result) return fail('Run your code first.')
  if (result.timedOut) return fail('Your program timed out.')
  if (result.compileError) return fail(`Compile error: ${result.compileError.split('\n')[0]}`)
  if (result.stderr && result.exitCode !== 0) {
    return fail(`Runtime error: ${result.stderr.split('\n')[0]}`)
  }

  const out = norm(result.stdout)

  if (test.kind === 'stdout') {
    return out === norm(test.expect)
      ? pass('Output matches exactly.')
      : fail(`Expected output:\n${test.expect}\n\nGot:\n${out || '(empty)'}`)
  }

  if (test.kind === 'stdoutIncludes') {
    return out.includes(test.expect)
      ? pass('Output contains the expected text.')
      : fail(`Expected output to include: ${test.expect}`)
  }

  return fail('Unknown check.')
}

export function gradePractice(
  practice: Practice,
  code: string,
  result: RunResult | null,
  previewHtml?: string,
): CheckResult[] {
  return practice.tests.map((t) => evaluateTest(t, code, result, previewHtml))
}
