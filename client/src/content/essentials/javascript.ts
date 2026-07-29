import type { Module } from '../../types'

/** First module: values, variables, and simple type practice. */
export const javascriptEssentialsModule: Module = {
  id: 'js-essentials',
  title: 'Values, variables & types',
  summary:
    'Start here: what a value is, what a variable is, then numbers, strings, and booleans — with simple practice.',
  lessons: [
    {
      id: 'js-ess-values',
      title: 'What is a value?',
      summary: 'A value is a piece of data. Every value has a type.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Value + type',
          body: `A value is one piece of information — like 7, "Ada", or true.\n\nEvery value has a type (its category):\n\n• Number — a numeric value: 0, 7, 3.14 (whole and decimal are both typeof "number")\n• String — text in quotes: "hello", "42"\n• Boolean — true or false only (no quotes)\n• Array — an ordered list in [brackets]: [3, 6, 9]`,
        },
      ],
      examples: [
        {
          title: 'Four values',
          code: `console.log(7);\nconsole.log(3.5);\nconsole.log("Ada");\nconsole.log(true);`,
          note: 'Each line logs one value.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print a number',
          prompt: 'Print 10.',
          difficulty: 1,
          starterCode: `// Print 10\n`,
          tests: [{ id: 't1', description: 'Prints 10', hint: 'console.log(10)', kind: 'stdout', expect: '10' }],
        },
        {
          id: 'p2',
          title: 'Print text',
          prompt: 'Print the word hi.',
          difficulty: 1,
          starterCode: `// Print "hi"\n`,
          tests: [
            { id: 't1', description: 'Prints hi', hint: 'console.log("hi")', kind: 'stdout', expect: 'hi' },
            { id: 't2', description: 'Uses quotes', hint: 'Put hi in quotes', kind: 'codeMatches', expect: '["\']hi["\']' },
          ],
        },
      ],
    },
    {
      id: 'js-ess-variables',
      title: 'Variables',
      summary: 'A variable is a name that holds a value.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Definition: variable',
          body: `A variable is a name that stores a value so you can use it later.\n\nYou create one with = (assignment):\n\nconst score = 10;\nlet name = "Ada";\nconst ready = true;\n\n• The name is on the left (score, name, ready)\n• The value is on the right (10, "Ada", true)\n• = means "put this value into that name" — it is not the same as === (which asks "are these equal?")\n\nUse const when the value won't change. Use let when you will reassign it.`,
        },
        {
          heading: 'Using a variable',
          body: `After you store a value, use the name to get it back:\n\nlet score = 10;\nconsole.log(score);   → logs 10\n\nYou can change it later (with let):\n\nlet score = 10;\nscore = 11;\nconsole.log(score);   → logs 11`,
        },
        {
          heading: 'Good names',
          body: `Use clear names: score, name, total — not s or x (unless x is a position).\n\nNames cannot start with a digit. They cannot have spaces. Use camelCase for multi-word names: playerName.`,
        },
      ],
      examples: [
        {
          title: 'Store and print',
          code: `const age = 15;\nconst name = "Ada";\nconsole.log(age);\nconsole.log(name);`,
          note: 'Log the variable name — not the word in quotes unless you want text.',
        },
        {
          title: 'Change a variable',
          code: `let score = 0;\nscore = 5;\nconsole.log(score);`,
          note: 'The last value assigned is what console.log shows.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Make a variable',
          prompt: 'Make a variable called age set to 12. Then print age.',
          difficulty: 1,
          starterCode: `// age = 12\n// print age\n`,
          tests: [
            { id: 't1', description: 'Prints 12', hint: 'age = 12 then console.log(age)', kind: 'stdout', expect: '12' },
            { id: 't2', description: 'Uses age', hint: 'age = ...', kind: 'codeMatches', expect: '\\bage\\s*=' },
          ],
        },
        {
          id: 'p2',
          title: 'Store a name',
          prompt: 'Make a variable called name set to Ada. Then print name.',
          difficulty: 1,
          starterCode: `// name = "Ada"\n// print name\n`,
          tests: [
            { id: 't1', description: 'Prints Ada', hint: 'name = "Ada" then console.log(name)', kind: 'stdout', expect: 'Ada' },
            { id: 't2', description: 'Uses name', hint: 'name = "Ada"', kind: 'codeMatches', expect: '\\bname\\s*=' },
          ],
        },
        {
          id: 'p3',
          title: 'Change it',
          prompt: 'Set score to 0, then set score to 7, then print score.',
          difficulty: 1,
          starterCode: `// score = 0\n// score = 7\n// print score\n`,
          tests: [
            { id: 't1', description: 'Prints 7', hint: 'Assign 7 last, then console.log(score)', kind: 'stdout', expect: '7' },
            { id: 't2', description: 'Uses score', hint: 'score = ...', kind: 'codeMatches', expect: '\\bscore\\s*=' },
          ],
        },
      ],
    },
    {
      id: 'js-ess-numbers',
      title: 'Numbers',
      summary: 'Whole numbers and decimals — both are typeof "number".',
      runner: 'javascript',
      sections: [
        {
          heading: 'Definition: whole number',
          body: `A whole number has no fractional part.\n\nExamples: 0, 1, 42, -3.\n\nIn JavaScript these are still typeof "number" (there is no separate int type).`,
        },
        {
          heading: 'Definition: decimal number',
          body: `A decimal number includes a fractional part.\n\nExamples: 3.14, 2.0, -0.5.\n\nIn JavaScript these are also typeof "number".`,
        },
        {
          heading: 'When to use which',
          body: `• Counting ("how many?") → whole numbers\n• Measurements and averages → decimal numbers\n\nYou can store them in variables: const count = 3 or const price = 2.5.`,
        },
      ],
      examples: [
        {
          title: 'Whole and decimal',
          code: `const count = 7;\nconst price = 3.5;\nconsole.log(count);\nconsole.log(price);`,
          note: '7 is a whole number. 3.5 is a decimal.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print a number',
          prompt: 'Print 17.',
          difficulty: 1,
          starterCode: `// Print 17\n`,
          tests: [{ id: 't1', description: 'Prints 17', hint: 'console.log(17)', kind: 'stdout', expect: '17' }],
        },
        {
          id: 'p2',
          title: 'Print a decimal',
          prompt: 'Print 4.5.',
          difficulty: 1,
          starterCode: `// Print 4.5\n`,
          tests: [{ id: 't1', description: 'Prints 4.5', hint: 'console.log(4.5)', kind: 'stdout', expect: '4.5' }],
        },
        {
          id: 'p3',
          title: 'Store a decimal',
          prompt: 'Make a variable called price set to 2.5. Print price.',
          difficulty: 1,
          starterCode: `// price = 2.5\n// print price\n`,
          tests: [
            { id: 't1', description: 'Prints 2.5', hint: 'price = 2.5 then console.log(price)', kind: 'stdout', expect: '2.5' },
            { id: 't2', description: 'Uses price', hint: 'price = 2.5', kind: 'codeMatches', expect: '\\bprice\\s*=' },
          ],
        },
      ],
    },
    {
      id: 'js-ess-strings',
      title: 'Strings (text)',
      summary: 'A string is text in quotes.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Definition: string',
          body: `A string is text. Write it in quotes so JavaScript knows it is text.\n\nExamples: "Ada", "hello", "42".\n\n"42" is a string (text). 42 without quotes is a number.`,
        },
        {
          heading: 'Variables hold strings too',
          body: `const name = "Ada";\nconsole.log(name);\n\nJoin two strings with +: "Hi " + "Ada" → Hi Ada.`,
        },
      ],
      examples: [
        {
          title: 'String in a variable',
          code: `const word = "code";\nconsole.log(word);\nconsole.log("Hi " + "Ada");`,
          note: 'Quotes make text a string.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print a string',
          prompt: 'Print hello.',
          difficulty: 1,
          starterCode: `// Print "hello"\n`,
          tests: [
            { id: 't1', description: 'Prints hello', hint: 'console.log("hello")', kind: 'stdout', expect: 'hello' },
          ],
        },
        {
          id: 'p2',
          title: 'Store a string',
          prompt: 'Make a variable called city set to Calgary. Print city.',
          difficulty: 1,
          starterCode: `// city = "Calgary"\n// print city\n`,
          tests: [
            { id: 't1', description: 'Prints Calgary', hint: 'city = "Calgary" then console.log(city)', kind: 'stdout', expect: 'Calgary' },
            { id: 't2', description: 'Uses city', hint: 'city = ...', kind: 'codeMatches', expect: '\\bcity\\s*=' },
          ],
        },
        {
          id: 'p3',
          title: 'Join two strings',
          prompt: 'Print Hello Ada by joining greeting and name with a space.',
          difficulty: 1,
          starterCode: `const greeting = "Hello";\nconst name = "Ada";\n// print Hello Ada\n`,
          tests: [
            { id: 't1', description: 'Prints Hello Ada', hint: 'console.log(greeting + " " + name)', kind: 'stdout', expect: 'Hello Ada' },
          ],
        },
      ],
    },
    {
      id: 'js-ess-booleans',
      title: 'Booleans (true / false)',
      summary: 'A boolean is a true/false value.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Definition: boolean',
          body: `A boolean is a true/false value. It answers a yes/no question.\n\nIn JavaScript the only boolean values are:\n• true\n• false\n\nNo quotes. Lowercase.\n\n"true" with quotes is a string, not a boolean.`,
        },
        {
          heading: 'Booleans in variables',
          body: `const ready = true;\nconsole.log(ready);\n\nComparisons also make booleans: score >= 60.`,
        },
      ],
      examples: [
        {
          title: 'Boolean values',
          code: `const ready = true;\nconsole.log(ready);\nconsole.log(false);\nconsole.log(typeof true);`,
          note: 'true and false are booleans.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print a boolean',
          prompt: 'Print true.',
          difficulty: 1,
          starterCode: `// Print true (no quotes)\n`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'console.log(true)', kind: 'stdout', expect: 'true' },
            { id: 't2', description: 'Uses true', hint: 'true without quotes', kind: 'codeMatches', expect: 'console\\.log\\(\\s*true\\s*\\)' },
          ],
        },
        {
          id: 'p2',
          title: 'Store a boolean',
          prompt: 'Make a variable called ready set to true. Print ready.',
          difficulty: 1,
          starterCode: `// ready = true\n// print ready\n`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'ready = true then console.log(ready)', kind: 'stdout', expect: 'true' },
            { id: 't2', description: 'Uses ready', hint: 'ready = true', kind: 'codeMatches', expect: '\\bready\\s*=' },
          ],
        },
        {
          id: 'p3',
          title: 'Compare numbers',
          prompt: 'score is 85. Print whether score >= 60.',
          difficulty: 1,
          starterCode: `const score = 85;\n// print score >= 60\n`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'console.log(score >= 60)', kind: 'stdout', expect: 'true' },
            { id: 't2', description: 'Uses >=', hint: 'score >= 60', kind: 'codeIncludes', expect: '>=' },
          ],
        },
      ],
    },
    {
      id: 'js-ess-output',
      title: 'How types look when printed',
      summary: 'Different types can look the same when printed — know which one you meant.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Look-alikes',
          body: `console.log(42) and console.log("42") both show 42 — but one is a number and one is a string.\n\nconsole.log(false) and console.log("false") both show false — but one is a boolean and one is a string.\n\nRule: quotes → string. No quotes on true/false → boolean. No quotes on digits → number.\n\nWhen unsure: console.log(typeof value).`,
        },
      ],
      examples: [
        {
          title: 'Side by side',
          code: `console.log(42);\nconsole.log("42");\nconsole.log(false);\nconsole.log("false");`,
          note: 'Same looking output, different types.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Number then word',
          prompt: 'Print 7. Then print seven on the next line.',
          difficulty: 1,
          starterCode: `// print 7\n// print "seven"\n`,
          tests: [
            { id: 't1', description: 'Two lines', hint: 'console.log(7) then console.log("seven")', kind: 'stdout', expect: '7\nseven' },
          ],
        },
        {
          id: 'p2',
          title: 'Boolean then string',
          prompt: 'Print the boolean false. Then print the string false on the next line.',
          difficulty: 1,
          starterCode: `// print false\n// print "false"\n`,
          tests: [
            { id: 't1', description: 'false then false', hint: 'console.log(false) then console.log("false")', kind: 'stdout', expect: 'false\nfalse' },
            { id: 't2', description: 'Uses boolean false', hint: 'false without quotes first', kind: 'codeMatches', expect: 'console\\.log\\(\\s*false\\s*\\)' },
            { id: 't3', description: 'Uses string false', hint: 'console.log("false")', kind: 'codeIncludes', expect: '"false"' },
          ],
        },
      ],
    },
    {
      id: 'js-ess-arrays',
      title: 'Arrays',
      summary: 'An array holds several values in order.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Definition: array',
          body: `An array is an ordered group of values in square brackets.\n\nconst nums = [3, 6, 9];\n\n• nums[0] is the first item (3)\n• nums.length is how many items (3)`,
        },
      ],
      examples: [
        {
          title: 'A short array',
          code: `const nums = [3, 6, 9];\nconsole.log(nums[0]);\nconsole.log(nums.length);`,
          note: 'Indexes start at 0.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'First item',
          prompt: 'Print the first item in nums.',
          difficulty: 1,
          starterCode: `const nums = [3, 6, 9];\n// print the first item\n`,
          tests: [
            { id: 't1', description: 'Prints 3', hint: 'console.log(nums[0])', kind: 'stdout', expect: '3' },
          ],
        },
        {
          id: 'p2',
          title: 'How many items',
          prompt: 'Print how many items are in nums.',
          difficulty: 1,
          starterCode: `const nums = [3, 6, 9];\n// print the length\n`,
          tests: [
            { id: 't1', description: 'Prints 3', hint: 'console.log(nums.length)', kind: 'stdout', expect: '3' },
            { id: 't2', description: 'Uses length', hint: 'nums.length', kind: 'codeIncludes', expect: '.length' },
          ],
        },
      ],
    },
    {
      id: 'js-ess-convert',
      title: 'Changing types',
      summary: 'Convert a value when you need a different type.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Common conversions',
          body: `• Number("12") → 12 (text digits → number)\n• String(5) → "5" (number → text)\n• Number("3.5") → 3.5\n\nUse Number before math on digit text. Use String when joining text with +.\n\nCheck a type with typeof: typeof 5 → "number".`,
        },
      ],
      examples: [
        {
          title: 'Convert then use',
          code: `const raw = "12";\nconst n = Number(raw);\nconsole.log(n + 1);\nconsole.log("n=" + String(n));`,
          note: 'Number for math; String for joining text.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Text to number',
          prompt: 'Turn raw into a number, add 3, and print the result.',
          difficulty: 1,
          starterCode: `const raw = "12";\n// Number(raw) + 3, then print\n`,
          tests: [
            { id: 't1', description: 'Prints 15', hint: 'console.log(Number(raw) + 3)', kind: 'stdout', expect: '15' },
            { id: 't2', description: 'Uses Number', hint: 'Number(raw)', kind: 'codeIncludes', expect: 'Number(' },
          ],
        },
        {
          id: 'p2',
          title: 'Number to text',
          prompt: 'Print score: 7 using String and +.',
          difficulty: 1,
          starterCode: `const n = 7;\n// print "score: " + String(n)\n`,
          tests: [
            { id: 't1', description: 'Prints score: 7', hint: 'console.log("score: " + String(n))', kind: 'stdout', expect: 'score: 7' },
            { id: 't2', description: 'Uses String', hint: 'String(n)', kind: 'codeIncludes', expect: 'String(' },
          ],
        },
      ],
    },
  ],
}
