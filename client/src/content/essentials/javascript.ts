import type { Module } from '../../types'

/** First module in every coding track: what values are, when to use them, what they can't be. */
export const javascriptEssentialsModule: Module = {
  id: 'js-essentials',
  title: 'Values & types',
  summary:
    'Start here: what a value is, the main data types, when to use each, and what each type can’t do.',
  lessons: [
    {
      id: 'js-ess-values',
      title: 'What is a value?',
      summary: 'Programs store and use values. Every value has a type that decides what you can do with it.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Values are the data your program works with',
          body: `A value is a single piece of information: the number 7, the text "Ada", the yes/no answer true, or an array of scores [10, 20, 30].\n\nYou put values in variables (const name = "Ada"), pass them to functions (console.log(name)), and combine them (score + 1).`,
        },
        {
          heading: 'Type = the rules for that value',
          body: `The type answers: what kind of value is this, and what operations are allowed?\n\n• number — integers and decimals (count, score, measurements)\n• string — text (names, messages)\n• boolean — true or false only (decisions)\n• array — ordered collection of values (many scores, many names)\n\nconsole.log(typeof x) shows the type when you're unsure.`,
        },
        {
          heading: 'Wrong type = wrong result or an error',
          body: `"3" + "4" is "34" (text join). 3 + 4 is 7 (math). Mixing types without converting often surprises you: "level " + 3 becomes "level 3" (JS coerces the number), but "3" - 1 works as math.\n\nRule of thumb: decide the type first, then write the code. Use === to compare value and type together.`,
        },
      ],
      examples: [
        {
          title: 'Four core values',
          code: `const count = 3;          // number\nconst name = "Ada";       // string\nconst ready = true;       // boolean\nconst scores = [10, 20];  // array\nconsole.log(typeof count, typeof name, typeof ready, typeof scores);`,
          note: 'Same console.log can show several types.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Store each kind',
          prompt: 'Create n = 5, label = "hi", ok = false, then log each on its own line (in that order).',
          difficulty: 1,
          starterCode: `// n, label, ok — then log each\n`,
          tests: [
            { id: 't1', description: 'Prints 5, hi, false', hint: 'console.log(n);\\nconsole.log(label);\\nconsole.log(ok);', kind: 'stdout', expect: '5\nhi\nfalse' },
            { id: 't2', description: 'Uses false boolean', hint: 'ok = false (no quotes)', kind: 'codeMatches', expect: '\\bfalse\\b' },
          ],
        },
        {
          id: 'p2',
          title: 'Ask the type',
          prompt: 'Log typeof 7 — output should be number.',
          difficulty: 2,
          starterCode: `// log typeof 7\n`,
          tests: [
            { id: 't1', description: 'Prints number', hint: 'console.log(typeof 7)', kind: 'stdout', expect: 'number' },
            { id: 't2', description: 'Uses typeof', hint: 'typeof(...)', kind: 'codeIncludes', expect: 'typeof' },
          ],
        },
      ],
    },
    {
      id: 'js-ess-output',
      title: 'Kinds of output',
      summary: 'What console.log shows for text, numbers, booleans, and missing values.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Output is text in the console',
          body: `console.log(...) prints values so you can see what your program is doing. Different types can look similar — know which one you meant.\n\nconsole.log(42) and console.log("42") both look like 42, but one is a number and one is a string.`,
        },
        {
          heading: 'How common types print',
          body: `• Strings print their characters (no quotes in the console)\n• Numbers print as digits\n• Booleans print true or false (lowercase in JavaScript)\n• null prints null — intentional empty\n• undefined prints undefined — "no value assigned yet"\n• Arrays print with brackets: [1, 2]\n\nTip: console.log(typeof value) shows "number", "string", "boolean", etc.`,
        },
        {
          heading: 'Several values in one log',
          body: `console.log("score", 10, true) prints pieces separated by spaces: score 10 true.\n\nGreat for debugging. For neat messages, use templates: console.log(\`score \${10}\`).`,
        },
      ],
      examples: [
        {
          title: 'Same look, different types',
          code: `console.log(42);\nconsole.log("42");\nconsole.log(true);\nconsole.log("true");\nconsole.log(null);\nconsole.log(undefined);\nconsole.log(typeof 42);\nconsole.log(typeof "42");`,
          note: 'typeof reveals what print alone hides.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Number then word',
          prompt: 'Log 7, then log seven on the next line.',
          difficulty: 1,
          starterCode: `// number 7, then the word seven\n`,
          tests: [
            { id: 't1', description: 'Two-line output', hint: 'console.log(7); console.log("seven");', kind: 'stdout', expect: '7\nseven' },
          ],
        },
        {
          id: 'p2',
          title: 'Boolean vs string',
          prompt: 'Log boolean false, then string false on the next line.',
          difficulty: 2,
          starterCode: `// boolean false, then "false"\n`,
          tests: [
            { id: 't1', description: 'false then false', hint: 'console.log(false); console.log("false");', kind: 'stdout', expect: 'false\nfalse' },
            { id: 't2', description: 'Uses boolean false', hint: 'false without quotes first', kind: 'codeMatches', expect: 'console\\.log\\(\\s*false\\s*\\)' },
            { id: 't3', description: 'Uses string false', hint: 'console.log("false")', kind: 'codeIncludes', expect: '"false"' },
          ],
        },
        {
          id: 'p3',
          title: 'Log null',
          prompt: 'Log null (the value, not a string).',
          difficulty: 2,
          starterCode: `// log null\n`,
          tests: [
            { id: 't1', description: 'Prints null', hint: 'console.log(null)', kind: 'stdout', expect: 'null' },
            { id: 't2', description: 'Uses null', hint: 'null without quotes', kind: 'codeMatches', expect: '\\bnull\\b' },
          ],
        },
      ],
    },
    {
      id: 'js-ess-numbers',
      title: 'Numbers',
      summary: 'Whole numbers and decimals — when to use them, and what they can't do.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Define: number',
          body: `JavaScript uses one Number type for both integers and decimals: 42 and 3.14 are both typeof "number".\n\nUse numbers for counts, scores, measurements, and anything you do math on.`,
        },
        {
          heading: 'When to use them',
          body: `• Counting loops, array indexes, "how many?" → whole numbers\n• Division that should keep a fraction → 9 / 2 is 4.5\n• Measurements and averages → decimals\n\nOperators: + - * /, % (remainder), ** (power). Parentheses change order: (1 + 2) * 3 is 9.`,
        },
        {
          heading: 'What numbers can't be / common mistakes',
          body: `• A number is not text — "level " + 3 becomes "level 3" (coercion), but you can't rely on that everywhere.\n• "10" + "1" is "101", not 11 — strings join, they don't add.\n• Special values: NaN ("not a number") and Infinity appear when math goes wrong (like 0/0).\n• Don't use a float as an array index without converting to an integer.`,
        },
      ],
      examples: [
        {
          title: 'Everyday math',
          code: `console.log(7 / 2);\nconsole.log(17 % 5);\nconsole.log(2 ** 8);\nconsole.log(typeof 3.14);`,
          note: '7/2 is 3.5 — JS does true division.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Remainder',
          prompt: 'Print 17 % 5 (should be 2).',
          difficulty: 1,
          starterCode: `// 17 % 5\n`,
          tests: [
            { id: 't1', description: 'Prints 2', hint: 'console.log(17 % 5)', kind: 'stdout', expect: '2' },
            { id: 't2', description: 'Uses %', hint: '% operator', kind: 'codeIncludes', expect: '%' },
          ],
        },
        {
          id: 'p2',
          title: 'Division',
          prompt: 'Print 9 / 2.',
          difficulty: 2,
          starterCode: `// 9 / 2\n`,
          tests: [
            { id: 't1', description: 'Prints 4.5', hint: 'console.log(9 / 2)', kind: 'stdout', expect: '4.5' },
          ],
        },
        {
          id: 'p3',
          title: 'Power',
          prompt: 'Print 2 ** 8 (256).',
          difficulty: 2,
          starterCode: `// 2 ** 8\n`,
          tests: [
            { id: 't1', description: 'Prints 256', hint: 'console.log(2 ** 8)', kind: 'stdout', expect: '256' },
            { id: 't2', description: 'Uses **', hint: '** for power', kind: 'codeIncludes', expect: '**' },
          ],
        },
      ],
    },
    {
      id: 'js-ess-strings',
      title: 'Strings (text)',
      summary: 'Define text values — when to use them, and what you can't do with them.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Define: string',
          body: `A string is text in "double", 'single', or \`backtick\` quotes.\n\nEmpty string "" has length 0. "code".length is 4. Indexes start at 0: "code"[0] is "c".`,
        },
        {
          heading: 'When to use strings',
          body: `• Names, messages, file paths, labels on screen\n• Anything the user reads as text\n• Digits that are identifiers, not math (zip codes, phone numbers) — keep them as strings\n\nJoin with + or template literals: \`Hi \${name}\`. Repeat is less common in JS than Python.`,
        },
        {
          heading: 'What strings can't do',
          body: `• "3" + 1 becomes "31" — + prefers string joining when either side is a string.\n• Strings are not arrays of numbers; compare carefully or convert first.\n• Strings are immutable — you build new strings instead of changing characters in place.\n• Use === to compare string content (avoid ==, which coerces types).`,
        },
      ],
      examples: [
        {
          title: 'Length and join',
          code: `const word = "code";\nconsole.log(word.length);\nconsole.log(word + "buddy");\nconsole.log(\`go\${2}\`);`,
          note: '.length counts characters.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Join a greeting',
          prompt: 'Using greeting and name, print Hello Ada.',
          difficulty: 1,
          starterCode: `const greeting = "Hello";\nconst name = "Ada";\n// print Hello Ada\n`,
          tests: [
            { id: 't1', description: 'Prints Hello Ada', hint: 'console.log(greeting + " " + name)', kind: 'stdout', expect: 'Hello Ada' },
          ],
        },
        {
          id: 'p2',
          title: 'String length',
          prompt: 'Print the length of word (should be 10).',
          difficulty: 2,
          starterCode: `const word = "javascript";\n// print its length\n`,
          tests: [
            { id: 't1', description: 'Prints 10', hint: 'console.log(word.length)', kind: 'stdout', expect: '10' },
            { id: 't2', description: 'Uses .length', hint: 'word.length', kind: 'codeIncludes', expect: '.length' },
          ],
        },
        {
          id: 'p3',
          title: 'Template literal',
          prompt: 'Using a template literal, print level 3.',
          difficulty: 2,
          starterCode: `const level = 3;\n// console.log(\`level \${level}\`)\n`,
          tests: [
            { id: 't1', description: 'Prints level 3', hint: 'Backticks and ${level}', kind: 'stdout', expect: 'level 3' },
            { id: 't2', description: 'Uses template', hint: 'Use ` backticks', kind: 'codeIncludes', expect: '`' },
          ],
        },
      ],
    },
    {
      id: 'js-ess-booleans',
      title: 'Booleans (true / false)',
      summary: 'Yes/no values — define them, when to use them, what they can't be.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Define: boolean',
          body: `A boolean is only true or false (lowercase in JavaScript). Nothing else is a boolean — not "true", not 1, not "yes" (those are other types that can be converted).\n\nComparisons produce booleans: 5 > 3 is true. Store them: const ready = true;`,
        },
        {
          heading: 'When to use booleans',
          body: `• Flags: gameOver, isLoggedIn, ready\n• Conditions in if / while\n• Results of checks: score >= 60, name === "Ada"\n\nCombine with && / || / !: age >= 13 && age <= 19.`,
        },
        {
          heading: 'What booleans aren't',
          body: `"true" (with quotes) is a string, not a boolean — it's truthy as non-empty text, which is a different rule.\n\nUse === and !== for comparisons (recommended while learning). == tries to convert types first and can surprise you ("5" == 5 is true, but "5" === 5 is false).\n\nDon't use = when you mean ===. = assigns; === compares value and type.`,
        },
      ],
      examples: [
        {
          title: 'Comparisons',
          code: `const score = 85;\nconsole.log(score >= 60);\nconsole.log(score === 100);\nconsole.log(!false);`,
          note: 'console.log shows true/false.',
        },
        {
          title: 'Combining',
          code: `const age = 15;\nconsole.log(age >= 13 && age <= 19);\nconsole.log(age < 5 || age > 65);`,
          note: '&& needs both; || needs one.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Log true',
          prompt: 'Log the boolean true.',
          difficulty: 1,
          starterCode: `// log true\n`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'console.log(true)', kind: 'stdout', expect: 'true' },
            { id: 't2', description: 'Uses true', hint: 'true without quotes', kind: 'codeMatches', expect: '\\btrue\\b' },
          ],
        },
        {
          id: 'p2',
          title: 'Compare with >=',
          prompt: 'Log whether score >= 60 (should be true).',
          difficulty: 2,
          starterCode: `const score = 85;\n// log the comparison\n`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'console.log(score >= 60)', kind: 'stdout', expect: 'true' },
            { id: 't2', description: 'Uses >=', hint: 'score >= 60', kind: 'codeIncludes', expect: '>=' },
          ],
        },
        {
          id: 'p3',
          title: 'Use &&',
          prompt: 'Log whether ready is true AND score >= 60.',
          difficulty: 3,
          starterCode: `const ready = true;\nconst score = 85;\n// log ready && score >= 60\n`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'console.log(ready && score >= 60)', kind: 'stdout', expect: 'true' },
            { id: 't2', description: 'Uses &&', hint: '&& between conditions', kind: 'codeIncludes', expect: '&&' },
          ],
        },
      ],
    },
    {
      id: 'js-ess-arrays',
      title: 'Arrays (collections)',
      summary: 'Ordered collections of values — define, when to use, what they can't be.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Define: array',
          body: `An array is an ordered collection of values in square brackets: const scores = [10, 20, 30].\n\nIndexes start at 0: scores[0] is 10. scores.length is 3. Arrays can hold mixed types, but beginners should keep one type per array when possible.`,
        },
        {
          heading: 'When to use arrays',
          body: `• Many related values of the same kind (names, scores, prices)\n• When you'll loop through every item\n• When the collection can grow: scores.push(40)\n\nfor (const n of scores) visits each element. Use scores[i] when you need the index.`,
        },
        {
          heading: 'What arrays aren't / can't do',
          body: `• An array is not a string — "abc"[0] is a character; [1, 2, 3] + 4 becomes "1,2,34" (weird coercion).\n• Index out of range: scores[3] on a length-3 array is undefined (no crash, but wrong data).\n• Don't confuse the array with one element inside it — console.log(scores) vs console.log(scores[0]).\n• A single number is not an array: 5 has no [0].`,
        },
      ],
      examples: [
        {
          title: 'Create, index, loop',
          code: `const nums = [3, 6, 9];\nconsole.log(nums[0]);\nconsole.log(nums.length);\nfor (const n of nums) {\n  console.log(n);\n}`,
          note: 'First index is 0; length is how many items.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'First item',
          prompt: 'Log the first item of nums (3).',
          difficulty: 1,
          starterCode: `const nums = [3, 6, 9];\n// log first item\n`,
          tests: [
            { id: 't1', description: 'Prints 3', hint: 'console.log(nums[0])', kind: 'stdout', expect: '3' },
            { id: 't2', description: 'Indexes 0', hint: 'nums[0]', kind: 'codeIncludes', expect: '[0]' },
          ],
        },
        {
          id: 'p2',
          title: 'Array length',
          prompt: 'Log how many items are in nums (3).',
          difficulty: 2,
          starterCode: `const nums = [3, 6, 9];\n// log length\n`,
          tests: [
            { id: 't1', description: 'Prints 3', hint: 'console.log(nums.length)', kind: 'stdout', expect: '3' },
            { id: 't2', description: 'Uses .length', hint: 'nums.length', kind: 'codeIncludes', expect: '.length' },
          ],
        },
        {
          id: 'p3',
          title: 'Loop the array',
          prompt: 'Use a for...of loop to log each number in nums on its own line.',
          difficulty: 2,
          starterCode: `const nums = [3, 6, 9];\n// for...of loop logging each\n`,
          tests: [
            { id: 't1', description: 'Prints 3\\n6\\n9', hint: 'for (const n of nums) console.log(n)', kind: 'stdout', expect: '3\n6\n9' },
            { id: 't2', description: 'Uses for...of', hint: 'for (const n of nums)', kind: 'codeIncludes', expect: 'for ' },
          ],
        },
      ],
    },
    {
      id: 'js-ess-convert',
      title: 'Types & conversion',
      summary: 'typeof, Number, String, Boolean — and when to convert arrays and other values.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Ask the type',
          body: `typeof x returns a string like "number", "string", "boolean", "undefined", or "object" (note: typeof null is historically "object" — a famous quirk; arrays also show "object").\n\nCommon types: number, string, boolean, array (object), null, undefined.`,
        },
        {
          heading: 'Convert between types',
          body: `• String(5) or "" + 5 → "5" (for joining text)\n• Number("12") → 12; Number("hi") → NaN\n• Boolean(0) is false; Boolean(1) is true; Boolean("") is false; Boolean("hi") is true\n• parseInt("12px", 10) reads leading digits — useful with messy text\n\nArrays don't convert to numbers directly — access elements with nums[0] or loop.`,
        },
        {
          heading: 'Why convert?',
          body: `User input and some APIs give you strings even when the content looks like numbers. Convert before doing math. Convert numbers to strings when building messages with + (or use template literals).\n\nnull usually means "empty on purpose." undefined usually means "not set yet." Both are falsy in if conditions.`,
        },
      ],
      examples: [
        {
          title: 'Convert for math and text',
          code: `const raw = "12";\nconst n = Number(raw);\nconsole.log(n + 1);\nconsole.log("n=" + String(n));`,
          note: 'Number before math; String before + join.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Stringify',
          prompt: 'Print score: 7 using + and String(...).',
          difficulty: 2,
          starterCode: `const n = 7;\n// console.log("score: " + ...)\n`,
          tests: [
            { id: 't1', description: 'Prints score: 7', hint: 'console.log("score: " + String(n))', kind: 'stdout', expect: 'score: 7' },
            { id: 't2', description: 'Uses String(', hint: 'String(n)', kind: 'codeIncludes', expect: 'String(' },
          ],
        },
        {
          id: 'p2',
          title: 'Parse digits',
          prompt: 'Convert raw with Number, add 3, log 15.',
          difficulty: 2,
          starterCode: `const raw = "12";\n// Number, add 3, log\n`,
          tests: [
            { id: 't1', description: 'Prints 15', hint: 'console.log(Number(raw) + 3)', kind: 'stdout', expect: '15' },
            { id: 't2', description: 'Uses Number(', hint: 'Number(raw)', kind: 'codeIncludes', expect: 'Number(' },
          ],
        },
        {
          id: 'p3',
          title: 'typeof true',
          prompt: 'Log typeof true (should be boolean).',
          difficulty: 2,
          starterCode: `// typeof true\n`,
          tests: [
            { id: 't1', description: 'Prints boolean', hint: 'console.log(typeof true)', kind: 'stdout', expect: 'boolean' },
            { id: 't2', description: 'Uses typeof', hint: 'typeof', kind: 'codeIncludes', expect: 'typeof' },
          ],
        },
      ],
    },
  ],
}
