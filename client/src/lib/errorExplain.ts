import type { RunnerId, RunResult } from '../types'

export type ErrorExplanation = {
  title: string
  meaning: string
  likelyCause: string
  whatToTry: string
  matched?: string
}

type Rule = {
  test: RegExp
  title: string
  meaning: string
  likelyCause: string
  whatToTry: string
}

const pythonRules: Rule[] = [
  {
    test: /SyntaxError: invalid syntax/i,
    title: 'SyntaxError — invalid syntax',
    meaning:
      'Python could not parse your code as valid Python. The grammar of the language was broken before the program could even start running.',
    likelyCause:
      'A missing colon after if/for/while/def, mismatched quotes or parentheses, or a typo in a keyword.',
    whatToTry:
      'Look at the line number in the traceback. Check colons, parentheses (), brackets [], braces {}, and matching quotes.',
  },
  {
    test: /SyntaxError:.*unterminated string/i,
    title: 'SyntaxError — unterminated string',
    meaning: 'You started a string with a quote but never closed it on that line (or string).',
    likelyCause: 'Mismatched " and \', or a missing closing quote.',
    whatToTry: 'Make sure every opening quote has a matching closing quote of the same kind.',
  },
  {
    test: /IndentationError|TabError/i,
    title: 'IndentationError / TabError',
    meaning:
      'Python uses indentation (spaces at the start of a line) to define blocks. Your indentation is inconsistent or incorrect.',
    likelyCause:
      'A block under if/for/while/def is not indented, is indented too far, or mixes tabs and spaces.',
    whatToTry:
      'Indent the body of every if/for/while/def with 4 spaces. Do not mix tabs and spaces. Match the indentation of nearby lines in the same block.',
  },
  {
    test: /NameError: name .+ is not defined/i,
    title: 'NameError — name is not defined',
    meaning:
      'You used a variable or function name that Python does not know in this scope yet.',
    likelyCause:
      'A typo in the name, using a variable before assigning it, or forgetting to define a function.',
    whatToTry:
      'Check spelling and capitalization (Python is case-sensitive). Assign the variable before you use it.',
  },
  {
    test: /TypeError:.*unsupported operand/i,
    title: 'TypeError — unsupported operand',
    meaning: 'You used an operator with types that do not support that operation together.',
    likelyCause: 'Adding a string and a number with +, or similar type mix-ups.',
    whatToTry:
      'Convert types explicitly (e.g. str(n) or int(text)) or keep math on numbers and joining on strings.',
  },
  {
    test: /TypeError:.*missing .+ required positional argument/i,
    title: 'TypeError — missing argument',
    meaning: 'You called a function with fewer arguments than its parameters require.',
    likelyCause: 'Forgot to pass a value inside the parentheses.',
    whatToTry: 'Compare the call to the function definition and supply every required argument.',
  },
  {
    test: /TypeError:.+takes .+ arguments? but .+ (was|were) given/i,
    title: 'TypeError — wrong number of arguments',
    meaning: 'You called a function with too many or too few arguments.',
    likelyCause: 'Extra values in the call, or missing ones.',
    whatToTry: 'Count the parameters in def and the values in the call — they must match.',
  },
  {
    test: /TypeError:.*not (subscriptable|iterable)/i,
    title: 'TypeError — not subscriptable / not iterable',
    meaning:
      'You tried to index ([...]) or loop over a value that does not support that operation.',
    likelyCause: 'Using [] on an int, or for x in 5.',
    whatToTry: 'Index and loop over sequences like lists and strings, not plain numbers.',
  },
  {
    test: /IndexError: list index out of range/i,
    title: 'IndexError — list index out of range',
    meaning: 'You asked for a list position that does not exist.',
    likelyCause: 'Indexes start at 0. For a list of length 3, valid indexes are 0, 1, and 2 — not 3.',
    whatToTry: 'Print len(your_list) and use indexes from 0 through len-1.',
  },
  {
    test: /KeyError:/i,
    title: 'KeyError',
    meaning: 'You asked a dictionary for a key that is not present.',
    likelyCause: 'Typo in the key string, or the key was never added.',
    whatToTry: 'Print the dict keys, or use .get(key) when a missing key is possible.',
  },
  {
    test: /ValueError: invalid literal for int/i,
    title: 'ValueError — invalid literal for int()',
    meaning: 'int(...) received text that cannot be converted to an integer.',
    likelyCause: 'Passing a non-numeric string like "hello" to int().',
    whatToTry: 'Only convert strings that contain whole numbers, or handle the error with try/except.',
  },
  {
    test: /ZeroDivisionError/i,
    title: 'ZeroDivisionError',
    meaning: 'You divided by zero, which is undefined in ordinary arithmetic.',
    likelyCause: 'The denominator expression evaluated to 0.',
    whatToTry: 'Check the divisor before dividing, or change the formula.',
  },
  {
    test: /AttributeError:/i,
    title: 'AttributeError',
    meaning: 'You used .something on a value that does not have that attribute or method.',
    likelyCause: 'Wrong type (e.g. calling .append on a string) or a typo in the method name.',
    whatToTry: 'Confirm the type (print(type(x))) and look up methods for that type.',
  },
  {
    test: /ModuleNotFoundError|ImportError/i,
    title: 'ImportError / ModuleNotFoundError',
    meaning: 'Python could not import the module you asked for.',
    likelyCause: 'Typo in the module name, or the package is not installed in this environment.',
    whatToTry: 'Check the spelling of the import. In CodeBuddy’s runner, stick to the standard library.',
  },
  {
    test: /RecursionError/i,
    title: 'RecursionError',
    meaning: 'A function kept calling itself (directly or indirectly) too many times.',
    likelyCause: 'A recursive function without a correct base case that stops the recursion.',
    whatToTry: 'Add or fix the base case so recursion eventually stops.',
  },
]

const javascriptRules: Rule[] = [
  {
    test: /SyntaxError:/i,
    title: 'SyntaxError',
    meaning: 'JavaScript could not parse your code. The program never started running.',
    likelyCause: 'Mismatched quotes/braces/parentheses, or a typo that breaks the language grammar.',
    whatToTry: 'Check the line mentioned in the error. Balance (), [], {}, and quotes.',
  },
  {
    test: /ReferenceError: .+ is not defined/i,
    title: 'ReferenceError — is not defined',
    meaning: 'You used a variable or function name that does not exist in the current scope.',
    likelyCause: 'Typo, or using a variable before declaring it with let/const/var.',
    whatToTry: 'Declare the name before use. Check spelling and capitalization.',
  },
  {
    test: /TypeError: .+ is not a function/i,
    title: 'TypeError — is not a function',
    meaning: 'You used () to call something that is not a function.',
    likelyCause: 'Calling a number/string/undefined as if it were a function, or a typo in the name.',
    whatToTry: 'Make sure the value is actually a function before you call it.',
  },
  {
    test: /TypeError: Cannot read propert(y|ies) .* of (undefined|null)/i,
    title: 'TypeError — cannot read property of null/undefined',
    meaning: 'You tried to access .something on null or undefined.',
    likelyCause: 'A variable was never assigned an object/array, or a function returned undefined.',
    whatToTry: 'Log the value before you use .property. Initialize objects before reading fields.',
  },
  {
    test: /TypeError: Assignment to constant variable/i,
    title: 'TypeError — assignment to constant variable',
    meaning: 'You tried to reassign a variable declared with const.',
    likelyCause: 'Using const for a value that needs to change.',
    whatToTry: 'Use let if you need to reassign, or create a new const with a new name.',
  },
  {
    test: /RangeError:/i,
    title: 'RangeError',
    meaning: 'A value was outside the allowed range (often from infinite recursion or invalid length).',
    likelyCause: 'A recursive call without a stop, or an invalid array length.',
    whatToTry: 'Check loops/recursion for a stopping condition.',
  },
]

const cppRules: Rule[] = [
  {
    test: /error: expected/i,
    title: 'Compile error — expected …',
    meaning: 'The C++ compiler expected a different token (often ;, ), or }).',
    likelyCause: 'Missing semicolon, unmatched parentheses/braces, or incomplete statement.',
    whatToTry: 'Read the first error line. Fix that line (and the one just above it) before others.',
  },
  {
    test: /error: ['`].+['`] was not declared/i,
    title: 'Compile error — was not declared',
    meaning: 'You used a name the compiler has not seen a declaration for.',
    likelyCause: 'Typo, missing #include, or using a variable before declaring it.',
    whatToTry: 'Declare variables before use. Include <iostream> for std::cout.',
  },
  {
    test: /error: no match for/i,
    title: 'Compile error — no match for operator/function',
    meaning: 'The types you used do not support that operation or call.',
    likelyCause: 'Wrong types passed to a function, or using << incorrectly.',
    whatToTry: 'Check types of operands and function arguments.',
  },
  {
    test: /undefined reference/i,
    title: 'Linker error — undefined reference',
    meaning: 'The program compiled pieces but the linker cannot find a definition.',
    likelyCause: 'A function was declared/called but never defined, or main is missing.',
    whatToTry: 'Ensure every called function has a body and you have int main().',
  },
  {
    test: /Segmentation fault|Abort trap|killed/i,
    title: 'Runtime crash',
    meaning: 'The program crashed while running (often invalid memory access).',
    likelyCause: 'Out-of-bounds array access or misuse of pointers/references.',
    whatToTry: 'Check indexes stay in range. Prefer vectors and careful loops in beginner code.',
  },
]

const javaRules: Rule[] = [
  {
    test: /error:.*';\s*;\s*' expected|error: ';' expected/i,
    title: 'Compile error — ; expected',
    meaning: 'The Java compiler expected a semicolon to end a statement.',
    likelyCause: 'Missing ; at the end of a statement.',
    whatToTry: 'Add ; after statements like assignments and method calls (not after {).',
  },
  {
    test: /error: cannot find symbol/i,
    title: 'Compile error — cannot find symbol',
    meaning: 'Java does not recognize a name you used.',
    likelyCause: 'Typo, missing import, or variable used outside its scope / before declaration.',
    whatToTry: 'Check spelling. Declare variables before use. Import classes like ArrayList.',
  },
  {
    test: /error: class .+ is public, should be declared in a file named/i,
    title: 'Public class / file name mismatch',
    meaning: 'A public class must be in a file with the same name as the class.',
    likelyCause: 'In CodeBuddy, keep public class Main so it matches Main.java.',
    whatToTry: 'Use public class Main { ... } in these practice stations.',
  },
  {
    test: /Exception in thread "main" java\.lang\.ArrayIndexOutOfBoundsException/i,
    title: 'ArrayIndexOutOfBoundsException',
    meaning: 'You used an array index that does not exist.',
    likelyCause: 'Indexes start at 0. For length 3, valid indexes are 0–2.',
    whatToTry: 'Use i < array.length in loops, not i <= array.length.',
  },
  {
    test: /NullPointerException/i,
    title: 'NullPointerException',
    meaning: 'You used a reference that is null (points to no object).',
    likelyCause: 'Calling a method on something never constructed with new, or a null return.',
    whatToTry: 'Create objects with new before using them. Check for null when relevant.',
  },
  {
    test: /Exception in thread "main"/i,
    title: 'Unhandled exception',
    meaning: 'The program threw an exception that was not caught, so it stopped.',
    likelyCause: 'Depends on the exception type named in the message.',
    whatToTry: 'Read the exception class name and the first stack frame that points at your code.',
  },
]

function rulesFor(runner: RunnerId): Rule[] {
  if (runner === 'python') return pythonRules
  if (runner === 'javascript') return javascriptRules
  if (runner === 'cpp') return cppRules
  if (runner === 'java') return javaRules
  return []
}

export function explainRunnerError(
  runner: RunnerId,
  result: RunResult | null,
  fetchError?: string | null,
): ErrorExplanation | null {
  if (fetchError) {
    return {
      title: 'Could not reach the runner',
      meaning: 'CodeBuddy’s backend runner did not return a normal result.',
      likelyCause: 'The API server may be offline, or the network request failed.',
      whatToTry: 'Make sure the CodeBuddy server is running (npm run dev), then try Run again.',
    }
  }

  if (!result) return null

  if (result.timedOut) {
    return {
      title: 'Time limit exceeded',
      meaning:
        'Your program ran too long and was stopped. This often means an infinite loop or extremely heavy work.',
      likelyCause:
        'A while/for loop whose condition never becomes false, or forgetting to update the loop variable.',
      whatToTry:
        'Check that every loop changes something that will eventually end the loop. Add a print inside the loop temporarily to see if it keeps going forever.',
    }
  }

  const text = [result.compileError, result.stderr, result.stdout].filter(Boolean).join('\n')
  if (!text.trim()) return null

  // Successful runs with empty stderr: no assistant panel
  if ((result.exitCode === 0 || result.exitCode === null) && !result.compileError && !result.stderr) {
    return null
  }

  // If exit 0 but stderr has warnings only, still try to explain if it looks like an error name
  const hasErrorSignal =
    Boolean(result.compileError) ||
    result.exitCode !== 0 ||
    /Error|Exception|error:/i.test(text)

  if (!hasErrorSignal) return null

  for (const rule of rulesFor(runner)) {
    const m = text.match(rule.test)
    if (m) {
      return {
        title: rule.title,
        meaning: rule.meaning,
        likelyCause: rule.likelyCause,
        whatToTry: rule.whatToTry,
        matched: m[0],
      }
    }
  }

  if (runner === 'python') {
    return {
      title: 'Python reported a problem',
      meaning:
        'The console shows a traceback: the bottom exception line is the error type; lines above show the call path.',
      likelyCause: 'Read the last line of the traceback for the exception name and message.',
      whatToTry:
        'Start at the last line (e.g. NameError: ...), then open the file/line listed just above it in your code.',
      matched: text.split('\n').filter(Boolean).slice(-1)[0],
    }
  }

  if (runner === 'javascript') {
    return {
      title: 'JavaScript reported a problem',
      meaning: 'Node printed an error object with a name (like TypeError) and a stack trace.',
      likelyCause: 'The first error line usually names the problem; the stack points near your code.',
      whatToTry: 'Read the error name first, then the first stack line that mentions your file.',
    }
  }

  if (runner === 'cpp') {
    return {
      title: 'C++ compiler/runtime message',
      meaning:
        'Compilers often print many follow-on errors. The first error is usually the real cause.',
      likelyCause: 'A syntax or type problem earlier in the file can cascade into later messages.',
      whatToTry: 'Fix the first error at the top of the output, then compile again.',
    }
  }

  if (runner === 'java') {
    return {
      title: 'Java compiler/runtime message',
      meaning: 'javac errors are compile-time; Exception in thread "main" messages are runtime.',
      likelyCause: 'Compile errors must be fixed before the program can run.',
      whatToTry: 'If you see error:, fix compile issues first. If you see Exception, read the exception type.',
    }
  }

  return null
}
