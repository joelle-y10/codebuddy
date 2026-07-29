import type { LanguageTrack } from '../types'

export const pythonTrack: LanguageTrack = {
  id: 'python',
  name: 'Python',
  tagline: 'Clear syntax for real programs.',
  accent: '#5ec8ff',
  tier: 'basic',
  modules: [
    {
      id: 'py-start',
      title: 'Getting started',
      summary: 'How Python talks to you, and how to read mistakes.',
      lessons: [
        {
          id: 'py-hello',
          title: 'Printing with print()',
          summary: 'See output, understand strings, and run your first programs.',
          runner: 'python',
          sections: [
            {
              heading: 'What is print()?',
              body: `Python programs often need to show information while they run. In CodeBuddy’s lab, that happens with the built-in print function: print("hello").\n\nWhatever you put inside the parentheses is written to the console. By default, each print call ends with a newline, so two print calls become two lines of output.`,
            },
            {
              heading: 'Strings and quotes',
              body: `Text in Python is a string. Wrap it in double quotes "like this" or single quotes 'like this'.\n\nIf you forget the quotes, Python thinks you meant a variable name — and you’ll get a NameError if that name doesn’t exist.`,
            },
            {
              heading: 'Statements and newlines',
              body: `Each instruction is a statement, typically one per line. Python does not need semicolons. Each print() call ends with a newline by default, so two prints become two lines of output.`,
            },
          ],
          examples: [
            {
              title: 'One message',
              code: `print("Hello, CodeBuddy!")`,
              note: 'The quotes are part of the code; they are not printed.',
            },
            {
              title: 'Several lines',
              code: `print("Line one")\nprint("Line two")`,
              note: 'Each print appears on its own line in the console.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Say hello',
              prompt: 'Print exactly: Ready to code',
              difficulty: 1,
              starterCode: `# Warm-up: print the phrase below\n`,
              tests: [
                { id: 't1', description: 'Prints Ready to code', hint: 'print("Ready to code")', kind: 'stdout', expect: 'Ready to code' },
                { id: 't2', description: 'Uses print', hint: 'Call print(...)', kind: 'codeIncludes', expect: 'print(' },
              ],
            },
            {
              id: 'p2',
              title: 'Two lines',
              prompt: 'Print Hello on the first line and CodeBuddy on the second.',
              difficulty: 2,
              starterCode: `# Use two print calls\n`,
              tests: [
                { id: 't1', description: 'Exact two-line output', hint: 'print("Hello"); print("CodeBuddy")', kind: 'stdout', expect: 'Hello\nCodeBuddy' },
              ],
            },
            {
              id: 'p3',
              title: 'Three greetings',
              prompt: 'Print hi, then hey, then hello — each on its own line.',
              difficulty: 3,
              starterCode: `# three lines\n`,
              tests: [
                { id: 't1', description: 'hi / hey / hello', hint: 'Three print calls', kind: 'stdout', expect: 'hi\nhey\nhello' },
              ],
            },
          ],
        },
        {
          id: 'py-read-errors',
          title: 'Reading what went wrong',
          summary: 'Syntax mistakes are normal — learn to fix them fast.',
          runner: 'python',
          sections: [
            {
              heading: 'Errors are feedback',
              body: `When Python cannot understand your code, the runner shows an error. Read from the bottom of the traceback first: it usually names the problem (like SyntaxError or NameError) and the line that failed.`,
            },
            {
              heading: 'Common beginner mistakes',
              body: `Mismatched quotes ("hi'), missing parentheses print("hi", or typos (pirnt) will break a program.\n\nFix one error at a time, then Run again. Don’t change everything at once — that makes it harder to see what worked.`,
            },
          ],
          examples: [
            {
              title: 'Broken vs fixed',
              code: `# Broken: print("hi')\n# Fixed:\nprint("hi")`,
              note: 'Matching quotes matter.',
            },
            {
              title: 'NameError',
              code: `# Broken: print(message)  # message never defined\nmessage = "ok"\nprint(message)`,
              note: 'Define names before you use them.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Fix the string',
              prompt: 'This starter is broken. Fix it so it prints fixed.',
              difficulty: 1,
              starterCode: `print("fixed')\n`,
              tests: [
                { id: 't1', description: 'Prints fixed', hint: 'Use matching double quotes', kind: 'stdout', expect: 'fixed' },
              ],
            },
            {
              id: 'p2',
              title: 'Print OK twice',
              prompt: 'Print OK on two separate lines.',
              difficulty: 2,
              starterCode: `# two lines of OK\n`,
              tests: [
                { id: 't1', description: 'OK\\nOK', hint: 'Two print("OK") calls', kind: 'stdout', expect: 'OK\nOK' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'py-errors',
      title: 'Error messages',
      summary: 'Learn what Python’s exceptions mean so you can fix bugs with confidence.',
      lessons: [
        {
          id: 'py-traceback',
          title: 'How to read a traceback',
          summary: 'The bottom line names the error; the lines above show where it came from.',
          runner: 'python',
          sections: [
            {
              heading: 'Tracebacks are maps, not insults',
              body: `When Python hits a problem at runtime, it prints a traceback. Read it from the bottom up:\n\n1) The last line names the exception type and a short message (for example NameError: name 'x' is not defined).\n2) The lines above show the call stack — which functions were running.\n3) File and line numbers point near the code that failed.\n\nCodeBuddy also shows an Error coach panel beside the console that explains common messages in plain language.`,
            },
            {
              heading: 'SyntaxError is different',
              body: `A SyntaxError means Python could not even finish parsing your file. There may be no normal “stack of function calls” — just a caret (^) pointing near the bad token and a message like invalid syntax or unterminated string literal.\n\nFix syntax before you worry about logic.`,
            },
          ],
          examples: [
            {
              title: 'NameError traceback shape',
              code: `# If you run: print(score)\n# Python ends with something like:\n# NameError: name 'score' is not defined\nscore = 10\nprint(score)`,
              note: 'Define the name before you use it.',
            },
            {
              title: 'SyntaxError from a missing colon',
              code: `# Broken:\n# if True\n#     print("yes")\n# Fixed:\nif True:\n    print("yes")`,
              note: 'if, for, while, def, and class headers end with a colon.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Fix NameError',
              prompt: 'This code raises NameError. Define language, then print it so the program prints Python.',
              difficulty: 1,
              starterCode: `print(language)\n`,
              tests: [
                { id: 't1', description: 'Prints Python', hint: 'language = "Python" before print', kind: 'stdout', expect: 'Python' },
              ],
            },
            {
              id: 'p2',
              title: 'Fix missing colon',
              prompt: 'Fix the syntax so this prints ready when the condition is true.',
              difficulty: 2,
              starterCode: `if True\n    print("ready")\n`,
              tests: [
                { id: 't1', description: 'Prints ready', hint: 'Add : after if True', kind: 'stdout', expect: 'ready' },
                { id: 't2', description: 'Has if True:', hint: 'if True:', kind: 'codeIncludes', expect: 'if True:' },
              ],
            },
          ],
        },
        {
          id: 'py-common-exceptions',
          title: 'Common exceptions',
          summary: 'NameError, TypeError, IndexError, ZeroDivisionError — what each means.',
          runner: 'python',
          sections: [
            {
              heading: 'NameError',
              body: `NameError means the name is not defined in the current scope. Python is case-sensitive: Score and score are different names. Assign before use.`,
            },
            {
              heading: 'TypeError',
              body: `TypeError means an operation was given values of the wrong type — for example "3" + 1 (str + int). Convert with int(...) or str(...) when you intend a conversion.`,
            },
            {
              heading: 'IndexError',
              body: `IndexError: list index out of range means you used an index that does not exist. For a list of length 3, valid indexes are 0, 1, and 2 only.`,
            },
            {
              heading: 'ZeroDivisionError',
              body: `Dividing by zero raises ZeroDivisionError. Check the divisor before you divide.`,
            },
          ],
          examples: [
            {
              title: 'TypeError vs fix',
              code: `# Broken: print("level " + 1)\nprint("level " + str(1))\nprint(1 + 1)`,
              note: 'Use str() to join numbers into text; use bare numbers for math.',
            },
            {
              title: 'Safe index',
              code: `nums = [10, 20, 30]\nprint(nums[0])\nprint(nums[len(nums) - 1])`,
              note: 'Last index is always len(list) - 1.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Join with str()',
              prompt: 'Print level 3 by joining a string with a number correctly.',
              difficulty: 1,
              starterCode: `n = 3\n# print level 3\n`,
              tests: [
                { id: 't1', description: 'Prints level 3', hint: 'print("level " + str(n))', kind: 'stdout', expect: 'level 3' },
              ],
            },
            {
              id: 'p2',
              title: 'Last element',
              prompt: 'Print the last value in nums (40) without hard-coding index 3 if you can help it — index 3 is out of range.',
              difficulty: 2,
              starterCode: `nums = [10, 20, 30, 40]\n# print the last element\n`,
              tests: [
                { id: 't1', description: 'Prints 40', hint: 'print(nums[-1]) or nums[len(nums)-1]', kind: 'stdout', expect: '40' },
              ],
            },
            {
              id: 'p3',
              title: 'Avoid divide by zero',
              prompt: 'If denom is 0 print undefined, otherwise print numer / denom for numer=8, denom=0.',
              difficulty: 3,
              starterCode: `numer = 8\ndenom = 0\n# branch so you never divide by zero\n`,
              tests: [
                { id: 't1', description: 'Prints undefined', hint: 'if denom == 0: print("undefined")', kind: 'stdout', expect: 'undefined' },
                { id: 't2', description: 'Checks denom', hint: 'if denom == 0', kind: 'codeIncludes', expect: 'denom' },
              ],
            },
          ],
        },
        {
          id: 'py-indentation-errors',
          title: 'IndentationError',
          summary: 'Blocks are defined by spaces — be consistent.',
          runner: 'python',
          sections: [
            {
              heading: 'Indentation is syntax',
              body: `After a line ending in :, the next block must be indented. The community standard is 4 spaces per level. Mixing tabs and spaces can cause TabError.\n\nEvery statement in the same block must line up at the same indentation column.`,
            },
          ],
          examples: [
            {
              title: 'Correct block',
              code: `if True:\n    print("inside")\nprint("outside")`,
              note: 'Only the body of if is indented.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Indent the body',
              prompt: 'Fix indentation so this prints indented then done.',
              difficulty: 1,
              starterCode: `if True:\nprint("indented")\nprint("done")\n`,
              tests: [
                { id: 't1', description: 'Prints both lines', hint: 'Indent the first print under if', kind: 'stdout', expect: 'indented\ndone' },
              ],
            },
            {
              id: 'p2',
              title: 'for-loop body',
              prompt: 'Print 1 then 2 using a for loop with a properly indented body.',
              difficulty: 2,
              starterCode: `for n in [1, 2]:\nprint(n)\n`,
              tests: [
                { id: 't1', description: 'Prints 1\\n2', hint: 'Indent print(n) under for', kind: 'stdout', expect: '1\n2' },
                { id: 't2', description: 'Uses for', hint: 'for n in', kind: 'codeIncludes', expect: 'for ' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'py-vars',
      title: 'Variables & values',
      summary: 'Store information, update it, and combine it into messages.',
      lessons: [
        {
          id: 'py-vars-basics',
          title: 'Names that hold values',
          summary: 'Assign with =, then reuse the name.',
          runner: 'python',
          sections: [
            {
              heading: 'Why variables?',
              body: `Programs remember things: a score, a name, a count. A variable is a labeled box that holds a value.\n\nname = "Ada" creates a binding. Later you can print(name) or build a longer message with it.`,
            },
            {
              heading: 'Reassignment',
              body: `Python lets you reassign freely: level = 1 then level = level + 1. The name still points at a value — you’re just changing which value.`,
            },
            {
              heading: 'f-strings',
              body: `An f-string starts with f before the quotes: f"{name} scored {score}". Expressions inside {...} are evaluated and embedded. Plain "hi {name}" does not substitute — you need the f prefix.`,
            },
          ],
          examples: [
            {
              title: 'Assign and print',
              code: `language = "Python"\nlevel = 1\nlevel = level + 1\nprint(f"{language} level {level}")`,
              note: 'language stays fixed; level changes.',
            },
            {
              title: 'Join without f-strings',
              code: `name = "Ada"\nprint("Hi " + name)`,
              note: '+ only joins strings; convert numbers with str(...) if needed.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Introduce yourself',
              prompt: 'Keep the variables. Print: Python level 1',
              difficulty: 1,
              starterCode: `language = "Python"\nlevel = 1\n# print: Python level 1\n`,
              tests: [
                { id: 't1', description: 'Output includes Python level 1', hint: 'print(f"{language} level {level}")', kind: 'stdoutIncludes', expect: 'Python level 1' },
                { id: 't2', description: 'Uses language', hint: 'Keep language = "Python"', kind: 'codeIncludes', expect: 'language' },
              ],
            },
            {
              id: 'p2',
              title: 'Level up',
              prompt: 'Start level at 1, add 2, then print Python level 3',
              difficulty: 2,
              starterCode: `language = "Python"\nlevel = 1\n# increase level by 2, then print\n`,
              tests: [
                { id: 't1', description: 'Prints level 3 message', hint: 'level = level + 2; then print', kind: 'stdoutIncludes', expect: 'Python level 3' },
              ],
            },
            {
              id: 'p3',
              title: 'Three facts',
              prompt: 'Print name, then city, then year — each on its own line.',
              difficulty: 3,
              starterCode: `name = "Ada"\ncity = "London"\nyear = 1843\n`,
              tests: [
                { id: 't1', description: 'Three-line output', hint: 'Three print calls', kind: 'stdout', expect: 'Ada\nLondon\n1843' },
              ],
            },
          ],
        },
        {
          id: 'py-types',
          title: 'Numbers, strings, and booleans',
          summary: 'Different kinds of values behave differently.',
          runner: 'python',
          sections: [
            {
              heading: 'Types you’ll use daily',
              body: `Numbers are written without quotes: 42, 3.14. Strings are text. Booleans are True or False (capital T/F in Python).\n\nMixing types with + can surprise you: "5" + "1" becomes "51", while 5 + 1 is 6. Prefer keeping math with numbers and messages with strings (or f-strings).`,
            },
            {
              heading: 'type()',
              body: `type(value) tells you the type. For beginners, print(type(5)) shows <class 'int'>. It’s a helpful debugging tool when output looks wrong.`,
            },
          ],
          examples: [
            {
              title: 'Math vs join',
              code: `print(5 + 1)\nprint("5" + "1")\nprint(type(True))`,
              note: 'Compare the three lines carefully.',
            },
            {
              title: 'Convert when needed',
              code: `n = 7\nprint("score: " + str(n))`,
              note: 'str(...) turns a number into text for + joining.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Do the math',
              prompt: 'Print the result of 8 * 7',
              difficulty: 1,
              starterCode: `# print 56 using multiplication\n`,
              tests: [
                { id: 't1', description: 'Prints 56', hint: 'print(8 * 7)', kind: 'stdout', expect: '56' },
              ],
            },
            {
              id: 'p2',
              title: 'Boolean True',
              prompt: 'Print True (the boolean, not the word in quotes).',
              difficulty: 2,
              starterCode: `# print the boolean True\n`,
              tests: [
                { id: 't1', description: 'Prints True', hint: 'print(True)', kind: 'stdout', expect: 'True' },
                { id: 't2', description: 'Uses True literal', hint: 'True without quotes', kind: 'codeMatches', expect: '\\bTrue\\b' },
              ],
            },
            {
              id: 'p3',
              title: 'Type of a string',
              prompt: 'Print type("hi") — you should see class str in the output.',
              difficulty: 2,
              starterCode: `# print the type of "hi"\n`,
              tests: [
                { id: 't1', description: 'Mentions str', hint: 'print(type("hi"))', kind: 'stdoutIncludes', expect: 'str' },
                { id: 't2', description: 'Uses type(', hint: 'type(...)', kind: 'codeIncludes', expect: 'type(' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'py-conditionals',
      title: 'Decisions',
      summary: 'Programs that choose different paths.',
      lessons: [
        {
          id: 'py-if',
          title: 'if / elif / else',
          summary: 'Run code only when a condition is true.',
          runner: 'python',
          sections: [
            {
              heading: 'Conditions',
              body: `An if statement looks at a boolean expression. Comparisons like score >= 60, name == "Ada", or ready == True produce True or False.\n\nUse == for equality (not a single =, which assigns).`,
            },
            {
              heading: 'Blocks and indentation',
              body: `In Python, a colon : ends the header, and the next lines must be indented (usually 4 spaces). That indented block is what runs when the condition is true.\n\nif condition:\n    print("yes")\nelse:\n    print("no")`,
            },
            {
              heading: 'elif chains',
              body: `elif means “else if”. Only one branch runs. Order matters: put the most specific tests first when ranges overlap.`,
            },
          ],
          examples: [
            {
              title: 'Pass / retry',
              code: `score = 85\nif score >= 60:\n    print("pass")\nelse:\n    print("retry")`,
              note: 'Change score and predict the output before running.',
            },
            {
              title: 'elif chain',
              code: `temp = 50\nif temp >= 80:\n    print("hot")\nelif temp >= 60:\n    print("warm")\nelse:\n    print("cool")`,
              note: 'Only one branch runs.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Passing grade',
              prompt: 'If score >= 60 print pass, else print retry.',
              difficulty: 1,
              starterCode: `score = 85\n`,
              tests: [
                { id: 't1', description: 'Prints pass', hint: 'if score >= 60: print("pass")', kind: 'stdout', expect: 'pass' },
                { id: 't2', description: 'Uses if', hint: 'Write an if', kind: 'codeIncludes', expect: 'if ' },
              ],
            },
            {
              id: 'p2',
              title: 'Temperature label',
              prompt: 'If temp >= 70 print warm, otherwise print cool.',
              difficulty: 2,
              starterCode: `temp = 64\n`,
              tests: [
                { id: 't1', description: 'Prints cool for 64', hint: 'else branch should print cool', kind: 'stdout', expect: 'cool' },
              ],
            },
            {
              id: 'p3',
              title: 'Tier names',
              prompt: 'If points >= 100 print gold, elif >= 50 print silver, else print bronze. points is 50.',
              difficulty: 3,
              starterCode: `points = 50\n`,
              tests: [
                { id: 't1', description: 'Prints silver', hint: 'elif points >= 50', kind: 'stdout', expect: 'silver' },
                { id: 't2', description: 'Uses elif', hint: 'elif', kind: 'codeIncludes', expect: 'elif' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'py-loops',
      title: 'Loops',
      summary: 'Repeat work safely — the skill that unlocks real programs.',
      lessons: [
        {
          id: 'py-for-intro',
          title: 'for loops and range',
          summary: 'Start, stop, step — and what each part means.',
          runner: 'python',
          sections: [
            {
              heading: 'Why loops exist',
              body: `Copy-pasting print five times “works” until you need 500 lines or the count comes from a variable. A loop repeats a block while a rule stays true.\n\nThe classic Python pattern is for i in range(...): with an indented body.`,
            },
            {
              heading: 'Anatomy of range',
              body: `range(1, 6) yields 1, 2, 3, 4, 5 — the stop value is exclusive.\n\nfor i in range(1, 6):\n    print(i)\n\nTrace it on paper: i becomes 1..5, then the loop ends. range(5) alone means 0..4.`,
            },
            {
              heading: 'Off-by-one thinking',
              body: `Want five numbers starting at 1? Use range(1, 6). Want five numbers starting at 0? Use range(5). Decide whether you want “five times” or “numbers from A through B”, then pick the range that matches.\n\nWhen output is wrong, print(i) inside the loop and watch the sequence.`,
            },
          ],
          examples: [
            {
              title: 'Count 1 to 3',
              code: `for i in range(1, 4):\n    print(i)`,
              note: 'Predict the three lines before you run.',
            },
            {
              title: 'Zero-based count',
              code: `for i in range(3):\n    print(i)`,
              note: 'Prints 0, then 1, then 2 — still three iterations.',
            },
            {
              title: 'Count downward',
              code: `for i in range(3, 0, -1):\n    print(i)`,
              note: 'The third argument is the step; negative steps go down.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Count to five',
              prompt: 'Print 1 through 5, each on its own line, using a for loop.',
              difficulty: 1,
              starterCode: `# Warm-up for-loop\n`,
              tests: [
                { id: 't1', description: 'Prints 1..5', hint: 'for i in range(1, 6): print(i)', kind: 'stdout', expect: '1\n2\n3\n4\n5' },
                { id: 't2', description: 'Uses for', hint: 'for ', kind: 'codeIncludes', expect: 'for ' },
              ],
            },
            {
              id: 'p2',
              title: 'Zero through four',
              prompt: 'Print 0,1,2,3,4 using range(5) (not range(1, ...)).',
              difficulty: 2,
              starterCode: `# zero-based loop\n`,
              tests: [
                { id: 't1', description: 'Prints 0..4', hint: 'for i in range(5): print(i)', kind: 'stdout', expect: '0\n1\n2\n3\n4' },
                { id: 't2', description: 'Uses range(5)', hint: 'range(5)', kind: 'codeMatches', expect: 'range\\s*\\(\\s*5\\s*\\)' },
              ],
            },
            {
              id: 'p3',
              title: 'Countdown',
              prompt: 'Print 5,4,3,2,1 using a decrementing range.',
              difficulty: 3,
              starterCode: `# count down\n`,
              tests: [
                { id: 't1', description: 'Prints 5..1', hint: 'for i in range(5, 0, -1): print(i)', kind: 'stdout', expect: '5\n4\n3\n2\n1' },
                { id: 't2', description: 'Uses negative step', hint: 'range(..., -1)', kind: 'codeMatches', expect: 'range\\s*\\([^)]*-\\s*1' },
              ],
            },
          ],
        },
        {
          id: 'py-for-patterns',
          title: 'Loop patterns you’ll reuse',
          summary: 'Totals, repeated text, and stepping by more than one.',
          runner: 'python',
          sections: [
            {
              heading: 'Running totals',
              body: `Start an accumulator before the loop: total = 0. Inside, update it: total = total + i (or total += i). After the loop, print the result once — not every iteration unless you want a trace.`,
            },
            {
              heading: 'Different steps',
              body: `range(2, 11, 2) jumps by twos: 2, 4, 6, 8, 10. That’s how you print even numbers. Always ask: what is the first value, what is the last value I still want, and how big is each jump?`,
            },
            {
              heading: 'Repeat a message',
              body: `The loop variable doesn’t have to be printed. Sometimes you only use it to mean “do this N times”: for _ in range(3): print("go")`,
            },
          ],
          examples: [
            {
              title: 'Sum 1..4',
              code: `total = 0\nfor i in range(1, 5):\n    total += i\nprint(total)`,
              note: '1+2+3+4 = 10, printed once.',
            },
            {
              title: 'Evens',
              code: `for i in range(2, 9, 2):\n    print(i)`,
              note: 'Step is 2; stop is exclusive.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Sum 1..5',
              prompt: 'Add 1 through 5 in a loop and print the total (15).',
              difficulty: 1,
              starterCode: `total = 0\n# loop, then print total\n`,
              tests: [
                { id: 't1', description: 'Prints 15', hint: 'total += i inside for range(1, 6)', kind: 'stdout', expect: '15' },
                { id: 't2', description: 'Uses a for loop', hint: 'for ', kind: 'codeIncludes', expect: 'for ' },
              ],
            },
            {
              id: 'p2',
              title: 'Even numbers',
              prompt: 'Print 2,4,6,8,10 each on its own line.',
              difficulty: 2,
              starterCode: `# step by 2\n`,
              tests: [
                { id: 't1', description: 'Prints evens', hint: 'for i in range(2, 11, 2): print(i)', kind: 'stdout', expect: '2\n4\n6\n8\n10' },
              ],
            },
            {
              id: 'p3',
              title: 'Repeat label',
              prompt: 'Print the word loop exactly 4 times (4 lines).',
              difficulty: 2,
              starterCode: `# four times\n`,
              tests: [
                { id: 't1', description: 'Four lines of loop', hint: 'for _ in range(4): print("loop")', kind: 'stdout', expect: 'loop\nloop\nloop\nloop' },
              ],
            },
          ],
        },
        {
          id: 'py-while',
          title: 'while loops',
          summary: 'Repeat until a condition becomes false — carefully.',
          runner: 'python',
          sections: [
            {
              heading: 'When while shines',
              body: `A while loop only needs a condition: while ok: ... Use it when you don’t know the count ahead of time, or when the update step is clearer inside the body.\n\nYou must change something inside the loop that eventually makes the condition false — or you create an infinite loop (CodeBuddy will time out).`,
            },
            {
              heading: 'for vs while',
              body: `If you have a clear counter from A to B, for + range is usually cleaner. If you’re waiting until a value crosses a threshold, while often reads better. Both can express the same ideas.`,
            },
          ],
          examples: [
            {
              title: 'while count',
              code: `i = 1\nwhile i <= 3:\n    print(i)\n    i += 1`,
              note: 'Don’t forget i += 1.',
            },
            {
              title: 'Grow until limit',
              code: `n = 1\nwhile n < 10:\n    print(n)\n    n *= 2`,
              note: 'Condition checked before each body run.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'while 1..4',
              prompt: 'Print 1..4 using while (not for).',
              difficulty: 1,
              starterCode: `i = 1\n`,
              tests: [
                { id: 't1', description: 'Prints 1..4', hint: 'while i <= 4: print(i); i += 1', kind: 'stdout', expect: '1\n2\n3\n4' },
                { id: 't2', description: 'Uses while', hint: 'while ', kind: 'codeIncludes', expect: 'while ' },
              ],
            },
            {
              id: 'p2',
              title: 'Double until big',
              prompt: 'Start n at 1. While n < 20, print n, then double it. (1,2,4,8,16)',
              difficulty: 3,
              starterCode: `n = 1\n`,
              tests: [
                { id: 't1', description: 'Prints doubling sequence', hint: 'while n < 20: print(n); n *= 2', kind: 'stdout', expect: '1\n2\n4\n8\n16' },
                { id: 't2', description: 'Uses while', hint: 'while', kind: 'codeIncludes', expect: 'while' },
              ],
            },
            {
              id: 'p3',
              title: 'Countdown while',
              prompt: 'Start n at 3. While n > 0, print n, then subtract 1.',
              difficulty: 2,
              starterCode: `n = 3\n`,
              tests: [
                { id: 't1', description: 'Prints 3,2,1', hint: 'while n > 0: print(n); n -= 1', kind: 'stdout', expect: '3\n2\n1' },
              ],
            },
          ],
        },
        {
          id: 'py-nested-loops',
          title: 'Nested loops & patterns',
          summary: 'Loops inside loops — go slow and trace.',
          runner: 'python',
          sections: [
            {
              heading: 'Outer and inner',
              body: `A nested loop means: for each value of the outer loop, run the entire inner loop.\n\nIf outer runs 3 times and inner runs 2 times, the inner body runs 6 times. Draw a tiny table of (outer, inner) pairs when you’re confused.`,
            },
            {
              heading: 'Building lines',
              body: `Sometimes the inner loop builds one line of text, and the outer loop prints that line. Use a string variable row += "*" inside the inner loop, then print(row) in the outer.`,
            },
          ],
          examples: [
            {
              title: 'Coordinate pairs',
              code: `for r in range(1, 3):\n    for c in range(1, 3):\n        print(f"{r},{c}")`,
              note: 'Prints 1,1 then 1,2 then 2,1 then 2,2.',
            },
            {
              title: 'Star rows',
              code: `for r in range(1, 4):\n    print("*" * r)`,
              note: 'String multiplication repeats characters.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Pairs',
              prompt: 'Using nested loops, print 1,1 / 1,2 / 2,1 / 2,2 each on its own line.',
              difficulty: 2,
              starterCode: `# nested for loops\n`,
              tests: [
                { id: 't1', description: 'Prints four pairs', hint: 'outer 1..2, inner 1..2', kind: 'stdout', expect: '1,1\n1,2\n2,1\n2,2' },
                { id: 't2', description: 'Has two for loops', hint: 'Nest for inside for', kind: 'codeMatches', expect: 'for[\\s\\S]*for' },
              ],
            },
            {
              id: 'p2',
              title: 'Star rows',
              prompt: 'Print three lines: *, then **, then ***',
              difficulty: 3,
              starterCode: `# outer rows, inner stars (or * multiplication)\n`,
              tests: [
                { id: 't1', description: 'Triangle stars', hint: 'print("*" * r) or build with an inner loop', kind: 'stdout', expect: '*\n**\n***' },
              ],
            },
            {
              id: 'p3',
              title: 'Multiplication trace',
              prompt: 'For i in 1..3, print i*2 on each line (2, 4, 6).',
              difficulty: 1,
              starterCode: `# map each i to i*2\n`,
              tests: [
                { id: 't1', description: 'Prints 2,4,6', hint: 'for i in range(1, 4): print(i * 2)', kind: 'stdout', expect: '2\n4\n6' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'py-functions',
      title: 'Functions',
      summary: 'Name a process, reuse it, return results.',
      lessons: [
        {
          id: 'py-fn-basics',
          title: 'def and return',
          summary: 'Parameters in, return values out.',
          runner: 'python',
          sections: [
            {
              heading: 'What functions buy you',
              body: `A function packages steps under a name. You define it once, call it whenever you need that behavior, and can test it in isolation.\n\ndef double(n):\n    return n * 2\n\ndefines a function. double(4) calls it with argument 4.`,
            },
            {
              heading: 'return vs print',
              body: `return sends a value back to the caller. print shows something in the console. Helpers usually return; the top-level script often prints. Mixing them up is a common beginner bug (“my function printed but I can’t reuse the value”).`,
            },
          ],
          examples: [
            {
              title: 'square',
              code: `def square(n):\n    return n * n\n\nprint(square(6))`,
              note: 'Prints 36.',
            },
            {
              title: 'greet',
              code: `def greet(name):\n    return "hi " + name\n\nprint(greet("Ada"))`,
              note: 'Arguments fill in parameters by position.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'square(6)',
              prompt: 'Write square(n) returning n*n, then print square(6).',
              difficulty: 1,
              starterCode: `# define square, then print square(6)\n`,
              tests: [
                { id: 't1', description: 'Prints 36', hint: 'return n * n', kind: 'stdout', expect: '36' },
                { id: 't2', description: 'Defines square', hint: 'def square', kind: 'codeMatches', expect: 'def\\s+square' },
              ],
            },
            {
              id: 'p2',
              title: 'greet',
              prompt: 'Write greet(name) that returns "hi " + name. Print greet("Ada").',
              difficulty: 2,
              starterCode: `# greet + print\n`,
              tests: [
                { id: 't1', description: 'Prints hi Ada', hint: 'return "hi " + name', kind: 'stdout', expect: 'hi Ada' },
                { id: 't2', description: 'Defines greet', hint: 'def greet', kind: 'codeMatches', expect: 'def\\s+greet' },
              ],
            },
            {
              id: 'p3',
              title: 'sum_three',
              prompt: 'sum_three(a, b, c) returns a+b+c. Print sum_three(2, 3, 4).',
              difficulty: 2,
              starterCode: `# three parameters\n`,
              tests: [
                { id: 't1', description: 'Prints 9', hint: 'return a + b + c', kind: 'stdout', expect: '9' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'py-lists',
      title: 'Lists',
      summary: 'Ordered collections you can loop through.',
      lessons: [
        {
          id: 'py-lists-basics',
          title: 'Creating and looping lists',
          summary: 'Indexes, len, and for-each.',
          runner: 'python',
          sections: [
            {
              heading: 'Lists of values',
              body: `nums = [3, 6, 9] creates a list. Indexes start at 0: nums[0] is 3. len(nums) is 3.\n\nfor n in nums: visits each element without managing an index. Use range(len(nums)) when you need the index.`,
            },
            {
              heading: 'Mutating lists',
              body: `You can append with nums.append(12), change an item with nums[0] = 1, or build a new list in a loop. Prefer clear loops while learning; list comprehensions come later.`,
            },
          ],
          examples: [
            {
              title: 'for-each',
              code: `nums = [3, 6, 9]\nfor n in nums:\n    print(n)`,
              note: 'Three lines of output.',
            },
            {
              title: 'First and last',
              code: `nums = [10, 20, 30, 40]\nprint(nums[0])\nprint(nums[-1])`,
              note: 'Negative indexes count from the end.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Print each',
              prompt: 'Print each value in nums on its own line.',
              difficulty: 1,
              starterCode: `nums = [3, 6, 9]\n`,
              tests: [
                { id: 't1', description: 'Prints 3,6,9', hint: 'for n in nums: print(n)', kind: 'stdout', expect: '3\n6\n9' },
              ],
            },
            {
              id: 'p2',
              title: 'First and last',
              prompt: 'Print the first element, then the last element, on two lines.',
              difficulty: 2,
              starterCode: `nums = [10, 20, 30, 40]\n`,
              tests: [
                { id: 't1', description: '10 then 40', hint: 'nums[0] and nums[-1] or nums[len(nums)-1]', kind: 'stdout', expect: '10\n40' },
              ],
            },
            {
              id: 'p3',
              title: 'Sum the list',
              prompt: 'Loop to sum nums and print the total.',
              difficulty: 3,
              starterCode: `nums = [2, 4, 6, 8]\n`,
              tests: [
                { id: 't1', description: 'Prints 20', hint: 'total = 0; for n in nums: total += n; print(total)', kind: 'stdout', expect: '20' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
