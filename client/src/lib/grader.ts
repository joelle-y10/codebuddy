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
  const base = {
    id: test.id,
    description: test.description,
    hint: test.hint,
    softHint: test.softHint,
    kind: test.kind,
  }
  const fail = (message: string): CheckResult => ({
    ...base,
    passed: false,
    message,
  })
  const pass = (message: string): CheckResult => ({
    ...base,
    passed: true,
    message,
  })

  if (test.kind === 'codeIncludes') {
    return code.includes(test.expect)
      ? pass('Found the expected code pattern.')
      : fail('Missing a required piece of code for this check. Re-read the prompt — don’t peek at the answer yet.')
  }

  if (test.kind === 'codeMatches') {
    try {
      const re = new RegExp(test.expect, 'm')
      return re.test(code)
        ? pass('Code matches the required pattern.')
        : fail('Your code’s structure doesn’t match what this check looks for yet.')
    } catch {
      return fail('Invalid test pattern (authoring issue).')
    }
  }

  if (test.kind === 'htmlIncludes') {
    const hay = previewHtml ?? code
    return hay.includes(test.expect)
      ? pass('HTML includes the expected markup.')
      : fail('Your HTML is missing markup this check expects. Compare tags/attributes to the prompt.')
  }

  if (!result) return fail('Run your code first.')
  if (result.timedOut) return fail('Your program timed out.')
  if (result.compileError) {
    return fail('Your program didn’t compile or parse. Read the console error (and the Error coach).')
  }
  if (result.stderr && result.exitCode !== 0) {
    return fail('Your program hit a runtime error. Read the console error (and the Error coach).')
  }

  const out = norm(result.stdout)

  if (test.kind === 'stdout') {
    return out === norm(test.expect)
      ? pass('Output matches exactly.')
      : fail(
          out
            ? 'Output doesn’t match yet — check spelling, spaces, and new lines.'
            : 'No output yet. Make sure you print / log what the prompt asks for.',
        )
  }

  if (test.kind === 'stdoutIncludes') {
    return out.includes(test.expect)
      ? pass('Output contains the expected text.')
      : fail('Output is missing some of the text this check looks for.')
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
