import type { LanguageTrack } from '../types'

export const javascriptTrack: LanguageTrack = {
  id: 'javascript',
  name: 'JavaScript',
  tagline: 'The language of the interactive web.',
  accent: '#c8f542',
  tier: 'basic',
  modules: [
    {
      id: 'js-start',
      title: 'Getting started',
      summary: 'How programs talk to you, and how to read errors.',
      lessons: [
        {
          id: 'js-hello',
          title: 'Printing with console.log',
          summary: 'See output, understand strings, and run your first programs.',
          runner: 'javascript',
          sections: [
            {
              heading: 'What is console.log?',
              body: `JavaScript programs often need to show information while they run. In CodeBuddy’s lab, that happens with console.log(...).\n\nWhatever you put inside the parentheses is written to the console — usually one line per call. This is how you check that your program did what you meant.`,
            },
            {
              heading: 'Strings and quotes',
              body: `Text in JavaScript is a string. Wrap it in double quotes "like this" or single quotes 'like this'.\n\nIf you forget the quotes, JavaScript thinks you meant a variable name — and you’ll get an error if that name doesn’t exist.`,
            },
            {
              heading: 'Statements',
              body: `Each instruction is a statement. Ending with a semicolon ; is optional in modern JavaScript, but you’ll see it often. One clear habit: one idea per line so you can read your program top to bottom.`,
            },
          ],
          examples: [
            {
              title: 'One message',
              code: `console.log("Hello, CodeBuddy!");`,
              note: 'The quotes are part of the code; they are not printed.',
            },
            {
              title: 'Several lines',
              code: `console.log("Line one");\nconsole.log("Line two");`,
              note: 'Each console.log prints on its own line in the console.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Say hello',
              prompt: 'Print exactly: Ready to code',
              difficulty: 1,
              starterCode: `// Warm-up: print the phrase below\n`,
              tests: [
                { id: 't1', description: 'Prints Ready to code', hint: 'console.log("Ready to code")', kind: 'stdout', expect: 'Ready to code' },
                { id: 't2', description: 'Uses console.log', hint: 'Call console.log(...)', kind: 'codeIncludes', expect: 'console.log' },
              ],
            },
            {
              id: 'p2',
              title: 'Two lines',
              prompt: 'Print Hello on the first line and CodeBuddy on the second.',
              difficulty: 2,
              starterCode: `// Use two console.log calls\n`,
              tests: [
                { id: 't1', description: 'Exact two-line output', hint: 'console.log("Hello"); console.log("CodeBuddy");', kind: 'stdout', expect: 'Hello\nCodeBuddy' },
              ],
            },
          ],
        },
        {
          id: 'js-read-errors',
          title: 'Reading what went wrong',
          summary: 'Syntax mistakes are normal — learn to fix them fast.',
          runner: 'javascript',
          sections: [
            {
              heading: 'Errors are feedback',
              body: `When JavaScript cannot understand your code, the runner shows an error in the console or stderr. Read the message from the top: it usually names the problem (like SyntaxError) and roughly where it happened.`,
            },
            {
              heading: 'Common beginner mistakes',
              body: `Mismatched quotes ("hi'), missing parentheses console.log("hi", or typos in keywords (consol.log) will break a program.\n\nFix one error at a time, then Run again. Don’t change everything at once — that makes it harder to see what worked.`,
            },
          ],
          examples: [
            {
              title: 'Broken vs fixed',
              code: `// Broken: console.log("hi'\n// Fixed:\nconsole.log("hi");`,
              note: 'Matching quotes matter.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Fix the string',
              prompt: 'This starter is broken. Fix it so it prints fixed.',
              difficulty: 1,
              starterCode: `console.log("fixed';\n`,
              tests: [
                { id: 't1', description: 'Prints fixed', hint: 'Use matching double quotes', kind: 'stdout', expect: 'fixed' },
              ],
            },
            {
              id: 'p2',
              title: 'Print OK twice',
              prompt: 'Print OK on two separate lines.',
              difficulty: 2,
              starterCode: `// two lines of OK\n`,
              tests: [
                { id: 't1', description: 'OK\\nOK', hint: 'Two console.log("OK") calls', kind: 'stdout', expect: 'OK\nOK' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'js-errors',
      title: 'Error messages',
      summary: 'Learn what JavaScript’s errors mean so you can fix bugs quickly.',
      lessons: [
        {
          id: 'js-error-anatomy',
          title: 'How to read JS errors',
          summary: 'Error name first, then the message, then the stack.',
          runner: 'javascript',
          sections: [
            {
              heading: 'Name + message + stack',
              body: `When Node hits a problem, it prints an error name (SyntaxError, ReferenceError, TypeError), a message, and a stack trace showing where the failure happened.\n\nRead the error name first — it classifies the problem. Then read the message. Then look for the first stack line that points at your code.\n\nCodeBuddy’s Error coach panel beside the console translates common messages into plain English.`,
            },
            {
              heading: 'SyntaxError vs runtime errors',
              body: `SyntaxError means the file could not be parsed — quotes, braces, or parentheses are unbalanced, or the grammar is otherwise invalid. Runtime errors (ReferenceError, TypeError, …) happen while the program is already running.`,
            },
          ],
          examples: [
            {
              title: 'ReferenceError',
              code: `// Broken: console.log(score);\nconst score = 10;\nconsole.log(score);`,
              note: 'Declare names before you use them (temporal dead zone for let/const).',
            },
            {
              title: 'SyntaxError from quotes',
              code: `// Broken: console.log("hi');\nconsole.log("hi");`,
              note: 'Opening and closing quotes must match.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Fix ReferenceError',
              prompt: 'Define language as "JavaScript", then print it.',
              difficulty: 1,
              starterCode: `console.log(language);\n`,
              tests: [
                { id: 't1', description: 'Prints JavaScript', hint: 'const language = "JavaScript" first', kind: 'stdout', expect: 'JavaScript' },
              ],
            },
            {
              id: 'p2',
              title: 'Fix quotes',
              prompt: 'Fix the syntax so this prints ready.',
              difficulty: 2,
              starterCode: `console.log("ready');\n`,
              tests: [
                { id: 't1', description: 'Prints ready', hint: 'Matching double quotes', kind: 'stdout', expect: 'ready' },
              ],
            },
          ],
        },
        {
          id: 'js-common-errors',
          title: 'ReferenceError & TypeError',
          summary: 'The two runtime errors beginners see most.',
          runner: 'javascript',
          sections: [
            {
              heading: 'ReferenceError',
              body: `ReferenceError: x is not defined means there is no binding named x in scope. Check spelling and make sure you declared it with let, const, or function.`,
            },
            {
              heading: 'TypeError',
              body: `TypeError often means you treated a value like the wrong kind of thing — for example calling something that is not a function, or reassigning a const.\n\n"Assignment to constant variable" means you used const but later wrote name = .... Switch to let if reassignment is required.`,
            },
          ],
          examples: [
            {
              title: 'const reassignment',
              code: `let level = 1;\nlevel = 2;\nconsole.log(level);`,
              note: 'Use let when the value must change.',
            },
            {
              title: 'Not a function',
              code: `const n = 3;\n// Broken: n();\nconsole.log(n);`,
              note: 'Only call values that are actually functions.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Use let to update',
              prompt: 'Start level at 1, set it to 2, print 2.',
              difficulty: 1,
              starterCode: `let level = 1;\n// update level, then print\n`,
              tests: [
                { id: 't1', description: 'Prints 2', hint: 'level = 2; console.log(level)', kind: 'stdout', expect: '2' },
                { id: 't2', description: 'Uses let', hint: 'Keep let level', kind: 'codeIncludes', expect: 'let level' },
              ],
            },
            {
              id: 'p2',
              title: 'Call a real function',
              prompt: 'Write function hello() that returns "hi", then print hello().',
              difficulty: 2,
              starterCode: `// define hello and print hello()\n`,
              tests: [
                { id: 't1', description: 'Prints hi', hint: 'function hello(){ return "hi" }', kind: 'stdout', expect: 'hi' },
                { id: 't2', description: 'Defines hello', hint: 'function hello', kind: 'codeMatches', expect: 'function\\s+hello' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'js-vars',
      title: 'Variables & values',
      summary: 'Store information, update it, and combine it into messages.',
      lessons: [
        {
          id: 'js-vars-basics',
          title: 'const and let',
          summary: 'Names for values — and when to reassign.',
          runner: 'javascript',
          sections: [
            {
              heading: 'Why variables?',
              body: `Programs remember things: a score, a name, a count. A variable is a labeled box that holds a value.\n\nconst name = "Ada" creates a binding you should not reassign. let score = 0 creates a binding you can change later with score = 10.`,
            },
            {
              heading: 'Choose const first',
              body: `If a value won’t be reassigned, use const. It prevents accidental overwrites and makes your intent clear. Switch to let only when you know the value must change (like a counter in a loop).`,
            },
            {
              heading: 'Building strings',
              body: `You can join strings with + : "Hi " + name. Template literals use backticks and \${...}: \`Hi \${name}\`. Both appear in real code; templates are often easier to read.`,
            },
          ],
          examples: [
            {
              title: 'const and let together',
              code: `const language = "JavaScript";\nlet level = 1;\nlevel = level + 1;\nconsole.log(language + " level " + level);`,
              note: 'language stays fixed; level changes.',
            },
            {
              title: 'Template literal',
              code: `const language = "JavaScript";\nconst level = 2;\nconsole.log(\`\${language} level \${level}\`);`,
              note: 'Backticks `, not quotes.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Introduce yourself',
              prompt: 'Keep the variables. Print: JavaScript level 1',
              difficulty: 1,
              starterCode: `const language = "JavaScript";\nlet level = 1;\n// print: JavaScript level 1\n`,
              tests: [
                { id: 't1', description: 'Output includes JavaScript level 1', hint: 'console.log(language + " level " + level)', kind: 'stdoutIncludes', expect: 'JavaScript level 1' },
                { id: 't2', description: 'Uses const language', hint: 'Keep const language', kind: 'codeIncludes', expect: 'const language' },
              ],
            },
            {
              id: 'p2',
              title: 'Level up',
              prompt: 'Start level at 1, add 2, then print JavaScript level 3',
              difficulty: 2,
              starterCode: `const language = "JavaScript";\nlet level = 1;\n// increase level by 2, then print\n`,
              tests: [
                { id: 't1', description: 'Prints level 3 message', hint: 'level = level + 2; then log', kind: 'stdoutIncludes', expect: 'JavaScript level 3' },
              ],
            },
            {
              id: 'p3',
              title: 'Three facts',
              prompt: 'Print name, then city, then year — each on its own line.',
              difficulty: 3,
              starterCode: `const name = "Ada";\nconst city = "London";\nconst year = 1843;\n`,
              tests: [
                { id: 't1', description: 'Three-line output', hint: 'Three console.log calls', kind: 'stdout', expect: 'Ada\nLondon\n1843' },
              ],
            },
          ],
        },
        {
          id: 'js-types',
          title: 'Numbers, strings, and booleans',
          summary: 'Different kinds of values behave differently.',
          runner: 'javascript',
          sections: [
            {
              heading: 'Primitive types you’ll use daily',
              body: `Numbers are written without quotes: 42, 3.14. Strings are text. Booleans are true or false — the answers to yes/no questions.\n\nMixing types with + can surprise you: "5" + 1 becomes "51" (string join), while 5 + 1 is 6. Prefer keeping math with numbers and messages with strings.`,
            },
            {
              heading: 'typeof',
              body: `typeof value tells you the type as a string, like "number" or "string". It’s a helpful debugging tool when output looks wrong.`,
            },
          ],
          examples: [
            {
              title: 'Math vs join',
              code: `console.log(5 + 1);\nconsole.log("5" + 1);\nconsole.log(typeof 5);`,
              note: 'Compare the three lines carefully.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Do the math',
              prompt: 'Print the result of 8 * 7',
              difficulty: 1,
              starterCode: `// print 56 using multiplication\n`,
              tests: [
                { id: 't1', description: 'Prints 56', hint: 'console.log(8 * 7)', kind: 'stdout', expect: '56' },
              ],
            },
            {
              id: 'p2',
              title: 'Type check',
              prompt: 'Print typeof true (should be boolean)',
              difficulty: 2,
              starterCode: `// print the typeof true\n`,
              tests: [
                { id: 't1', description: 'Prints boolean', hint: 'console.log(typeof true)', kind: 'stdout', expect: 'boolean' },
                { id: 't2', description: 'Uses typeof', hint: 'typeof', kind: 'codeIncludes', expect: 'typeof' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'js-conditionals',
      title: 'Decisions',
      summary: 'Programs that choose different paths.',
      lessons: [
        {
          id: 'js-if',
          title: 'if and else',
          summary: 'Run code only when a condition is true.',
          runner: 'javascript',
          sections: [
            {
              heading: 'Conditions',
              body: `An if statement looks at a boolean expression. Comparisons like score >= 60, name === "Ada", or ready === true produce true or false.\n\nUse === for equality (not a single =, which assigns).`,
            },
            {
              heading: 'Branches',
              body: `if (condition) { ... } runs the block when true. else { ... } runs when it wasn’t. You can chain else if for more cases.\n\nAlways use braces { } while learning — they prevent tricky bugs when you add a second line later.`,
            },
          ],
          examples: [
            {
              title: 'Pass / retry',
              code: `const score = 85;\nif (score >= 60) {\n  console.log("pass");\n} else {\n  console.log("retry");\n}`,
              note: 'Change score and predict the output before running.',
            },
            {
              title: 'else if chain',
              code: `const temp = 50;\nif (temp >= 80) {\n  console.log("hot");\n} else if (temp >= 60) {\n  console.log("warm");\n} else {\n  console.log("cool");\n}`,
              note: 'Only one branch runs.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Passing grade',
              prompt: 'If score >= 60 print pass, else print retry.',
              difficulty: 1,
              starterCode: `const score = 85;\n`,
              tests: [
                { id: 't1', description: 'Prints pass', hint: 'if (score >= 60) console.log("pass")', kind: 'stdout', expect: 'pass' },
                { id: 't2', description: 'Uses if', hint: 'Write an if', kind: 'codeIncludes', expect: 'if' },
              ],
            },
            {
              id: 'p2',
              title: 'Temperature label',
              prompt: 'If temp >= 70 print warm, otherwise print cool.',
              difficulty: 2,
              starterCode: `const temp = 64;\n`,
              tests: [
                { id: 't1', description: 'Prints cool for 64', hint: 'else branch should print cool', kind: 'stdout', expect: 'cool' },
              ],
            },
            {
              id: 'p3',
              title: 'Tier names',
              prompt: 'If points >= 100 print gold, else if >= 50 print silver, else print bronze. points is 50.',
              difficulty: 3,
              starterCode: `const points = 50;\n`,
              tests: [
                { id: 't1', description: 'Prints silver', hint: 'else if (points >= 50)', kind: 'stdout', expect: 'silver' },
                { id: 't2', description: 'Uses else if', hint: 'else if', kind: 'codeIncludes', expect: 'else if' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'js-loops',
      title: 'Loops',
      summary: 'Repeat work safely — the skill that unlocks real programs.',
      lessons: [
        {
          id: 'js-for-intro',
          title: 'for loops: the idea',
          summary: 'Start, condition, step — and what each part means.',
          runner: 'javascript',
          sections: [
            {
              heading: 'Why loops exist',
              body: `Copy-pasting console.log five times “works” until you need 500 lines or the count comes from a variable. A loop repeats a block while a rule stays true.\n\nThe classic for loop packs three parts into one header: where you start, when you stop, and how you move each time.`,
            },
            {
              heading: 'Anatomy of for ( ; ; )',
              body: `for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}\n\n1) let i = 1 runs once — the counter starts at 1.\n2) i <= 5 is checked before every repeat — if false, the loop ends.\n3) i++ runs after each body — add one to i.\n\nTrace it on paper: i becomes 1,2,3,4,5 then the condition fails.`,
            },
            {
              heading: 'Off-by-one thinking',
              body: `i < 5 with a start of 0 gives five values (0–4). i <= 5 with a start of 1 also gives five values (1–5). Decide whether you want “five times” or “numbers from A through B”, then pick the condition that matches.\n\nWhen output is wrong, log i inside the loop and watch the sequence.`,
            },
          ],
          examples: [
            {
              title: 'Count 1 to 3',
              code: `for (let i = 1; i <= 3; i++) {\n  console.log(i);\n}`,
              note: 'Predict the three lines before you run.',
            },
            {
              title: 'Zero-based count',
              code: `for (let i = 0; i < 3; i++) {\n  console.log(i);\n}`,
              note: 'Prints 0, then 1, then 2 — still three iterations.',
            },
            {
              title: 'Count downward',
              code: `for (let i = 3; i >= 1; i--) {\n  console.log(i);\n}`,
              note: 'The step can subtract.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Count to five',
              prompt: 'Print 1 through 5, each on its own line, using a for loop.',
              difficulty: 1,
              starterCode: `// Warm-up for-loop\n`,
              tests: [
                { id: 't1', description: 'Prints 1..5', hint: 'for (let i = 1; i <= 5; i++) console.log(i)', kind: 'stdout', expect: '1\n2\n3\n4\n5' },
                { id: 't2', description: 'Uses for', hint: 'for (', kind: 'codeIncludes', expect: 'for (' },
              ],
            },
            {
              id: 'p2',
              title: 'Zero through four',
              prompt: 'Print 0,1,2,3,4 using i < 5 (not <=).',
              difficulty: 2,
              starterCode: `// zero-based loop\n`,
              tests: [
                { id: 't1', description: 'Prints 0..4', hint: 'for (let i = 0; i < 5; i++)', kind: 'stdout', expect: '0\n1\n2\n3\n4' },
                { id: 't2', description: 'Uses i < ', hint: 'Condition should use <', kind: 'codeMatches', expect: 'i\\s*<' },
              ],
            },
            {
              id: 'p3',
              title: 'Countdown',
              prompt: 'Print 5,4,3,2,1 using a decrementing for loop.',
              difficulty: 3,
              starterCode: `// count down\n`,
              tests: [
                { id: 't1', description: 'Prints 5..1', hint: 'for (let i = 5; i >= 1; i--)', kind: 'stdout', expect: '5\n4\n3\n2\n1' },
                { id: 't2', description: 'Uses decrement', hint: 'i-- or i -= 1', kind: 'codeMatches', expect: 'i--|i\\s*-=\\s*1' },
              ],
            },
          ],
        },
        {
          id: 'js-for-patterns',
          title: 'Loop patterns you’ll reuse',
          summary: 'Totals, repeated text, and stepping by more than one.',
          runner: 'javascript',
          sections: [
            {
              heading: 'Running totals',
              body: `Start an accumulator before the loop: let sum = 0. Inside, update it: sum = sum + i (or sum += i). After the loop, print the result once — not every iteration unless you want a trace.`,
            },
            {
              heading: 'Different steps',
              body: `i += 2 jumps by twos. That’s how you print even numbers or visit every other index. Always ask: what is the first value, what is the last value I still want, and how big is each jump?`,
            },
            {
              heading: 'Repeat a message',
              body: `The loop variable doesn’t have to be printed. Sometimes you only use it to mean “do this N times”: for (let n = 0; n < 3; n++) console.log("go");`,
            },
          ],
          examples: [
            {
              title: 'Sum 1..4',
              code: `let sum = 0;\nfor (let i = 1; i <= 4; i++) {\n  sum += i;\n}\nconsole.log(sum);`,
              note: '1+2+3+4 = 10, printed once.',
            },
            {
              title: 'Evens',
              code: `for (let i = 2; i <= 8; i += 2) {\n  console.log(i);\n}`,
              note: 'Step is +2.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Sum 1..5',
              prompt: 'Add 1 through 5 in a loop and print the total (15).',
              difficulty: 1,
              starterCode: `let sum = 0;\n// loop, then print sum\n`,
              tests: [
                { id: 't1', description: 'Prints 15', hint: 'sum += i inside for 1..5', kind: 'stdout', expect: '15' },
                { id: 't2', description: 'Uses a for loop', hint: 'for (', kind: 'codeIncludes', expect: 'for (' },
              ],
            },
            {
              id: 'p2',
              title: 'Even numbers',
              prompt: 'Print 2,4,6,8,10 each on its own line.',
              difficulty: 2,
              starterCode: `// step by 2\n`,
              tests: [
                { id: 't1', description: 'Prints evens', hint: 'for (let i = 2; i <= 10; i += 2)', kind: 'stdout', expect: '2\n4\n6\n8\n10' },
              ],
            },
            {
              id: 'p3',
              title: 'Repeat label',
              prompt: 'Print the word loop exactly 4 times (4 lines).',
              difficulty: 2,
              starterCode: `// four times\n`,
              tests: [
                { id: 't1', description: 'Four lines of loop', hint: 'for (let i = 0; i < 4; i++) console.log("loop")', kind: 'stdout', expect: 'loop\nloop\nloop\nloop' },
              ],
            },
          ],
        },
        {
          id: 'js-while',
          title: 'while loops',
          summary: 'Repeat until a condition becomes false — carefully.',
          runner: 'javascript',
          sections: [
            {
              heading: 'when while shines',
              body: `A while loop only needs a condition: while (ok) { ... }. Use it when you don’t know the count ahead of time, or when the update step is clearer inside the body.\n\nYou must change something inside the loop that eventually makes the condition false — or you create an infinite loop (CodeBuddy will time out).`,
            },
            {
              heading: 'for vs while',
              body: `If you have a clear counter from A to B, for is usually cleaner. If you’re waiting until a value crosses a threshold, while often reads better. Both can express the same ideas.`,
            },
          ],
          examples: [
            {
              title: 'while count',
              code: `let i = 1;\nwhile (i <= 3) {\n  console.log(i);\n  i += 1;\n}`,
              note: 'Don’t forget i += 1.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'while 1..4',
              prompt: 'Print 1..4 using while (not for).',
              difficulty: 1,
              starterCode: `let i = 1;\n`,
              tests: [
                { id: 't1', description: 'Prints 1..4', hint: 'while (i <= 4) { console.log(i); i++ }', kind: 'stdout', expect: '1\n2\n3\n4' },
                { id: 't2', description: 'Uses while', hint: 'while (', kind: 'codeIncludes', expect: 'while' },
              ],
            },
            {
              id: 'p2',
              title: 'Double until big',
              prompt: 'Start n at 1. While n < 20, print n, then double it. (1,2,4,8,16)',
              difficulty: 3,
              starterCode: `let n = 1;\n`,
              tests: [
                { id: 't1', description: 'Prints doubling sequence', hint: 'while (n < 20) { console.log(n); n *= 2; }', kind: 'stdout', expect: '1\n2\n4\n8\n16' },
                { id: 't2', description: 'Uses while', hint: 'while', kind: 'codeIncludes', expect: 'while' },
              ],
            },
          ],
        },
        {
          id: 'js-nested-loops',
          title: 'Nested loops & patterns',
          summary: 'Loops inside loops — go slow and trace.',
          runner: 'javascript',
          sections: [
            {
              heading: 'Outer and inner',
              body: `A nested loop means: for each value of the outer loop, run the entire inner loop.\n\nIf outer runs 3 times and inner runs 2 times, the inner body runs 6 times. Draw a tiny table of (outer, inner) pairs when you’re confused.`,
            },
            {
              heading: 'Building lines',
              body: `Sometimes the inner loop builds one line of text, and the outer loop prints that line. Use a string variable row += "*" inside the inner loop, then console.log(row) in the outer.`,
            },
          ],
          examples: [
            {
              title: 'Coordinate pairs',
              code: `for (let r = 1; r <= 2; r++) {\n  for (let c = 1; c <= 2; c++) {\n    console.log(r + "," + c);\n  }\n}`,
              note: 'Prints 1,1 then 1,2 then 2,1 then 2,2.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Pairs',
              prompt: 'Using nested loops, print 1,1 / 1,2 / 2,1 / 2,2 each on its own line.',
              difficulty: 2,
              starterCode: `// nested for loops\n`,
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
              starterCode: `// outer rows, inner stars\n`,
              tests: [
                { id: 't1', description: 'Triangle stars', hint: 'Build a string per row with an inner loop', kind: 'stdout', expect: '*\n**\n***' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'js-functions',
      title: 'Functions',
      summary: 'Name a process, reuse it, return results.',
      lessons: [
        {
          id: 'js-fn-basics',
          title: 'Declaring and calling',
          summary: 'Parameters in, return values out.',
          runner: 'javascript',
          sections: [
            {
              heading: 'What functions buy you',
              body: `A function packages steps under a name. You define it once, call it whenever you need that behavior, and can test it in isolation.\n\nfunction double(n) { return n * 2 } declares a function. double(4) calls it with argument 4.`,
            },
            {
              heading: 'return vs console.log',
              body: `return sends a value back to the caller. console.log shows something in the console. Helpers usually return; the top-level script often prints. Mixing them up is a common beginner bug (“my function printed but I can’t reuse the value”).`,
            },
          ],
          examples: [
            {
              title: 'square',
              code: `function square(n) {\n  return n * n;\n}\nconsole.log(square(6));`,
              note: 'Prints 36.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'square(6)',
              prompt: 'Write square(n) returning n*n, then print square(6).',
              difficulty: 1,
              starterCode: `// define square, then print square(6)\n`,
              tests: [
                { id: 't1', description: 'Prints 36', hint: 'return n * n', kind: 'stdout', expect: '36' },
                { id: 't2', description: 'Defines square', hint: 'function square', kind: 'codeMatches', expect: 'function\\s+square' },
              ],
            },
            {
              id: 'p2',
              title: 'greet',
              prompt: 'Write greet(name) that returns "hi " + name. Print greet("Ada").',
              difficulty: 2,
              starterCode: `// greet + print\n`,
              tests: [
                { id: 't1', description: 'Prints hi Ada', hint: 'return "hi " + name', kind: 'stdout', expect: 'hi Ada' },
                { id: 't2', description: 'Defines greet', hint: 'function greet', kind: 'codeMatches', expect: 'function\\s+greet' },
              ],
            },
            {
              id: 'p3',
              title: 'sumThree',
              prompt: 'sumThree(a,b,c) returns a+b+c. Print sumThree(2,3,4).',
              difficulty: 2,
              starterCode: `// three parameters\n`,
              tests: [
                { id: 't1', description: 'Prints 9', hint: 'return a + b + c', kind: 'stdout', expect: '9' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'js-arrays',
      title: 'Arrays',
      summary: 'Ordered lists you can loop through.',
      lessons: [
        {
          id: 'js-arrays-basics',
          title: 'Creating and looping arrays',
          summary: 'Indexes, length, and for...of.',
          runner: 'javascript',
          sections: [
            {
              heading: 'Lists of values',
              body: `const nums = [3, 6, 9] creates an array. Indexes start at 0: nums[0] is 3. nums.length is 3.\n\nfor (const n of nums) { ... } visits each element without managing an index. Classic for (let i = 0; i < nums.length; i++) is better when you need the index.`,
            },
          ],
          examples: [
            {
              title: 'for...of',
              code: `const nums = [3, 6, 9];\nfor (const n of nums) {\n  console.log(n);\n}`,
              note: 'Three lines of output.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Print each',
              prompt: 'Print each value in nums on its own line.',
              difficulty: 1,
              starterCode: `const nums = [3, 6, 9];\n`,
              tests: [
                { id: 't1', description: 'Prints 3,6,9', hint: 'for (const n of nums) console.log(n)', kind: 'stdout', expect: '3\n6\n9' },
              ],
            },
            {
              id: 'p2',
              title: 'First and last',
              prompt: 'Print the first element, then the last element, on two lines.',
              difficulty: 2,
              starterCode: `const nums = [10, 20, 30, 40];\n`,
              tests: [
                { id: 't1', description: '10 then 40', hint: 'nums[0] and nums[nums.length-1]', kind: 'stdout', expect: '10\n40' },
              ],
            },
            {
              id: 'p3',
              title: 'Sum the array',
              prompt: 'Loop to sum nums and print the total.',
              difficulty: 3,
              starterCode: `const nums = [2, 4, 6, 8];\n`,
              tests: [
                { id: 't1', description: 'Prints 20', hint: 'let sum=0; for... sum += n; console.log(sum)', kind: 'stdout', expect: '20' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
