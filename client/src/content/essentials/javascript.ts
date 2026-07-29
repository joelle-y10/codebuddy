import type { Module } from '../../types'

/** First module: define each data type clearly, then practise using them. */
export const javascriptEssentialsModule: Module = {
  id: 'js-essentials',
  title: 'Values & types',
  summary:
    'Start here: learn what a number, string, and boolean are — then when to use each and how they print.',
  lessons: [
    {
      id: 'js-ess-values',
      title: 'What is a value?',
      summary: 'A value is a piece of data. Every value has a type. Learn the four core types by name.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Value + type',
          body: `A value is one piece of information your program stores or uses — like 7, "Ada", or true.\n\nEvery value has a type. The type is the category of that value. The type decides what you are allowed to do with it (math? join text? yes/no decisions?).`,
        },
        {
          heading: 'The core types — memorize these definitions',
          body: `• Number — a numeric value. Whole numbers (7, -3) and decimals (3.14, 2.0) are both typeof "number" in JavaScript. Use for counts, scores, measurements.\n\n• String — text. Always written in quotes. Examples: "Ada", "hello", "42", "". Use for names and messages.\n\n• Boolean — a true/false value only. In JavaScript: true or false (lowercase, no quotes). Use for yes/no decisions.\n\n• Array — an ordered collection of values in [brackets]. Example: [10, 20, 30]. (You will practise arrays after the basics.)`,
        },
        {
          heading: 'Same looking output ≠ same type',
          body: `console.log(false) and console.log("false") both show false on the screen — but one is a boolean and one is a string.\n\nconsole.log(typeof false) shows boolean. console.log(typeof "false") shows string. Always know which type you meant.`,
        },
      ],
      examples: [
        {
          title: 'Each type, named',
          code: `const count = 7;          // number — whole\nconst price = 3.5;        // number — decimal\nconst name = "Ada";       // string — text in quotes\nconst ready = true;       // boolean — true or false only\n\nconsole.log(typeof count);\nconsole.log(typeof price);\nconsole.log(typeof name);\nconsole.log(typeof ready);`,
          note: 'typeof(...) tells you the category of the value.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Make one of each',
          prompt:
            'Create number n = 5, number x = 2.5, string label = "hi", and boolean ok = false. Log each on four lines in that order.',
          difficulty: 1,
          starterCode: `// number n, number x, string label, boolean ok — then log each\n`,
          tests: [
            {
              id: 't1',
              description: 'Prints 5, 2.5, hi, false',
              hint: 'console.log(n);\\nconsole.log(x);\\nconsole.log(label);\\nconsole.log(ok);',
              kind: 'stdout',
              expect: '5\n2.5\nhi\nfalse',
            },
            {
              id: 't2',
              description: 'Uses boolean false',
              hint: 'ok = false with no quotes',
              kind: 'codeMatches',
              expect: '\\bfalse\\b',
            },
            {
              id: 't3',
              description: 'Uses a decimal number',
              hint: 'x = 2.5 with a decimal point',
              kind: 'codeMatches',
              expect: '2\\.5',
            },
          ],
        },
        {
          id: 'p2',
          title: 'Check a boolean’s type',
          prompt: 'Log typeof true — the output should be boolean.',
          difficulty: 2,
          starterCode: `// A boolean is true or false. Log its type.\n`,
          tests: [
            { id: 't1', description: 'Prints boolean', hint: 'console.log(typeof true)', kind: 'stdout', expect: 'boolean' },
            { id: 't2', description: 'Uses typeof', hint: 'typeof(...)', kind: 'codeIncludes', expect: 'typeof' },
          ],
        },
      ],
    },
    {
      id: 'js-ess-numbers',
      title: 'Numbers',
      summary: 'Whole numbers and decimals — both are typeof "number". When to use each.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Definition: whole number',
          body: `A whole number has no fractional part: 0, 1, 42, -3.\n\nIn JavaScript these are still typeof "number" (there is no separate int type).\n\nNot whole numbers: 3.14 (decimal), "7" (string because of the quotes).`,
        },
        {
          heading: 'Definition: decimal number',
          body: `A decimal number includes a fractional part: 3.14, 2.0, -0.5, 0.25.\n\nIn JavaScript these are also typeof "number".\n\nEven 2.0 is a number — the decimal point (or math that produces a fraction) tells you it can hold decimals.`,
        },
        {
          heading: 'When to use which',
          body: `• Counting, looping indexes, "how many?" → whole numbers\n• Measurements, averages, money-style decimals → decimal numbers\n\nMath: + - * /  % (remainder)  ** (power).\n9 / 2 is 4.5 (true division — not truncated).`,
        },
        {
          heading: 'What numbers can't be',
          body: `• A number is not text — "level " + 3 becomes "level 3" (coercion), but don't rely on that everywhere.\n• A string of digits like "10" is not a number until you use Number("10").\n• "10" + "1" is "101", not 11 — strings join, they don't add.\n• Don't use a float as an array index without converting to an integer.`,
        },
      ],
      examples: [
        {
          title: 'Whole vs decimal',
          code: `console.log(7);        // whole number\nconsole.log(7.0);      // decimal number\nconsole.log(7 / 2);    // 3.5\nconsole.log(typeof 7);\nconsole.log(typeof 7.0);`,
          note: '/ gives a decimal result in JavaScript.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print a whole number',
          prompt: 'Log the whole number 17 (no quotes, no decimal point).',
          difficulty: 1,
          starterCode: `// Log a whole number\n`,
          tests: [
            { id: 't1', description: 'Prints 17', hint: 'console.log(17)', kind: 'stdout', expect: '17' },
            { id: 't2', description: 'Uses number literal', hint: '17 without quotes', kind: 'codeMatches', expect: 'console\\.log\\(\\s*17\\s*\\)' },
          ],
        },
        {
          id: 'p2',
          title: 'Print a decimal',
          prompt: 'Log the decimal 4.5.',
          difficulty: 1,
          starterCode: `// Log a decimal number\n`,
          tests: [
            { id: 't1', description: 'Prints 4.5', hint: 'console.log(4.5)', kind: 'stdout', expect: '4.5' },
            { id: 't2', description: 'Uses a decimal', hint: '4.5 with a dot', kind: 'codeMatches', expect: '4\\.5' },
          ],
        },
        {
          id: 'p3',
          title: 'Remainder',
          prompt: 'Log the remainder of 17 divided by 5 (answer 2).',
          difficulty: 2,
          starterCode: `// 17 % 5\n`,
          tests: [
            { id: 't1', description: 'Prints 2', hint: 'console.log(17 % 5)', kind: 'stdout', expect: '2' },
            { id: 't2', description: 'Uses %', hint: '% operator', kind: 'codeIncludes', expect: '%' },
          ],
        },
      ],
    },
    {
      id: 'js-ess-strings',
      title: 'Strings (text)',
      summary: 'A string is text in quotes — letters, digits, spaces, anything you read as words.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Definition: string',
          body: `A string is text. You write it inside quotes so JavaScript knows it's text, not a variable name or a number.\n\nExamples: "Ada", 'hello', "42", "" (empty string).\n\nImportant: "42" is a string of characters, not the number 42. "false" is a string, not the boolean false.`,
        },
        {
          heading: 'When to use strings',
          body: `• Names, messages, labels\n• Anything the user should read as text\n• Codes that look like numbers but aren't for math (zip codes, phone numbers) — keep them as strings so leading zeros aren't lost\n\n"code".length is 4. Join with +: "Hi " + "Ada". Template literals: \`Hi \${name}\`.`,
        },
        {
          heading: 'What strings can't do',
          body: `• "3" + 1 becomes "31" — + prefers string joining when either side is a string.\n• A string is not a boolean — "true" is text, true is boolean.\n• Strings are immutable — you build new strings instead of changing characters in place.\n• Use === to compare string content (avoid ==, which coerces types).`,
        },
      ],
      examples: [
        {
          title: 'String vs number that looks the same',
          code: `console.log("42");      // string — text characters\nconsole.log(42);        // number — a numeric value\nconsole.log(typeof "42");\nconsole.log(typeof 42);\nconsole.log("Hi " + "Ada");\nconsole.log("code".length);`,
          note: 'Quotes make it a string.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Log a string',
          prompt: 'Log the string hello (with quotes in your code).',
          difficulty: 1,
          starterCode: `// Log a string\n`,
          tests: [
            { id: 't1', description: 'Prints hello', hint: 'console.log("hello")', kind: 'stdout', expect: 'hello' },
            { id: 't2', description: 'Uses quotes', hint: 'Put hello in quotes', kind: 'codeMatches', expect: '["\']hello["\']' },
          ],
        },
        {
          id: 'p2',
          title: 'Join a greeting',
          prompt: 'Using greeting and name, log Hello Ada (space between).',
          difficulty: 1,
          starterCode: `const greeting = "Hello";\nconst name = "Ada";\n// log Hello Ada\n`,
          tests: [
            { id: 't1', description: 'Prints Hello Ada', hint: 'console.log(greeting + " " + name)', kind: 'stdout', expect: 'Hello Ada' },
          ],
        },
        {
          id: 'p3',
          title: 'String length',
          prompt: 'Log the length of word (should be 10).',
          difficulty: 2,
          starterCode: `const word = "javascript";\n// log its length\n`,
          tests: [
            { id: 't1', description: 'Prints 10', hint: 'console.log(word.length)', kind: 'stdout', expect: '10' },
            { id: 't2', description: 'Uses .length', hint: 'word.length', kind: 'codeIncludes', expect: '.length' },
          ],
        },
      ],
    },
    {
      id: 'js-ess-booleans',
      title: 'Booleans (true / false)',
      summary: 'A boolean is a true/false value — only true or false.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Definition: boolean',
          body: `A boolean is a true/false value. It answers a yes/no question.\n\nIn JavaScript the only boolean values are:\n• true\n• false\n\nThey must be lowercase, and they must NOT be in quotes.\n\n• true  → boolean\n• false → boolean\n• "true" / "false" → strings (text that happens to look similar)\n• 1 and 0 → numbers, not booleans (even though they can act truthy/falsy later)`,
        },
        {
          heading: 'When to use booleans',
          body: `• Flags: ready = true, gameOver = false\n• Results of comparisons: score >= 60 produces a boolean\n• Conditions in if / while\n\nCombine with && / || / !: age >= 13 && age <= 19.`,
        },
        {
          heading: 'What booleans aren't',
          body: `"false" with quotes is a string, not a boolean.\n\nUse === and !== for comparisons (recommended while learning). == tries to convert types first and can surprise you ("5" == 5 is true, but "5" === 5 is false).\n\nDon't use = when you mean ===. = assigns; === compares value and type.`,
        },
      ],
      examples: [
        {
          title: 'Boolean vs string that looks like one',
          code: `console.log(false);       // boolean\nconsole.log("false");     // string\nconsole.log(typeof false);\nconsole.log(typeof "false");\n\nconst score = 85;\nconsole.log(score >= 60);   // comparison → boolean true`,
          note: 'No quotes = boolean. Quotes = string.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Log a boolean',
          prompt: 'Log the boolean true (no quotes).',
          difficulty: 1,
          starterCode: `// A boolean is true or false. Log true.\n`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'console.log(true)', kind: 'stdout', expect: 'true' },
            { id: 't2', description: 'Uses true boolean', hint: 'true without quotes', kind: 'codeMatches', expect: 'console\\.log\\(\\s*true\\s*\\)' },
          ],
        },
        {
          id: 'p2',
          title: 'Compare with >=',
          prompt: 'Log whether score >= 60 (should be true). That comparison creates a boolean.',
          difficulty: 2,
          starterCode: `const score = 85;\n// log the boolean result of score >= 60\n`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'console.log(score >= 60)', kind: 'stdout', expect: 'true' },
            { id: 't2', description: 'Uses >=', hint: 'score >= 60', kind: 'codeIncludes', expect: '>=' },
          ],
        },
        {
          id: 'p3',
          title: 'Use &&',
          prompt: 'Log whether ready is true and score >= 60 (should be true).',
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
      id: 'js-ess-output',
      title: 'How types look when printed',
      summary: 'Now that you know the definitions — see how console.log shows each type (and how look-alikes can fool you).',
      runner: 'javascript',
      sections: [
        {
          heading: 'console.log shows characters — type is still real',
          body: `console.log(...) turns a value into characters on the screen. Two different types can look the same:\n\n• console.log(42) and console.log("42") both show 42\n• console.log(false) and console.log("false") both show false\n\nYou already know the definitions:\n• 42 without quotes → number\n• "42" with quotes → string\n• false without quotes → boolean\n• "false" with quotes → string`,
        },
        {
          heading: 'How each type usually prints',
          body: `• Number → digits (3.5 for a decimal)\n• String → the text inside (quotes are NOT shown in the console)\n• Boolean → true or false (lowercase)\n• null → null (intentional empty)\n• undefined → undefined ("no value assigned yet")\n• Array → [1, 2, 3]\n\nWhen unsure: console.log(typeof value).`,
        },
      ],
      examples: [
        {
          title: 'Look-alikes side by side',
          code: `console.log(42);\nconsole.log("42");\nconsole.log(false);\nconsole.log("false");\nconsole.log(typeof 42);\nconsole.log(typeof "42");\nconsole.log(typeof false);\nconsole.log(typeof "false");`,
          note: 'Same looking line, different type.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Number then string',
          prompt: 'Log the number 7, then on the next line log the string seven.',
          difficulty: 1,
          starterCode: `// number 7, then string "seven"\n`,
          tests: [
            { id: 't1', description: 'Two-line output', hint: 'console.log(7) then console.log("seven")', kind: 'stdout', expect: '7\nseven' },
          ],
        },
        {
          id: 'p2',
          title: 'Boolean vs string false',
          prompt:
            'A boolean is true/false. A string is text in quotes. Log the boolean false, then log the string "false" on the next line.',
          difficulty: 2,
          starterCode: `// boolean false (no quotes), then string "false"\n`,
          tests: [
            { id: 't1', description: 'false then false', hint: 'console.log(false)\\nconsole.log("false")', kind: 'stdout', expect: 'false\nfalse' },
            { id: 't2', description: 'Uses boolean false', hint: 'false without quotes first', kind: 'codeMatches', expect: 'console\\.log\\(\\s*false\\s*\\)' },
            { id: 't3', description: 'Uses string false', hint: 'console.log("false")', kind: 'codeIncludes', expect: '"false"' },
          ],
        },
        {
          id: 'p3',
          title: 'Log null',
          prompt: 'Log null (the special "empty on purpose" value — not a string).',
          difficulty: 2,
          starterCode: `// log null\n`,
          tests: [
            { id: 't1', description: 'Prints null', hint: 'console.log(null)', kind: 'stdout', expect: 'null' },
            { id: 't2', description: 'Uses null literal', hint: 'null without quotes', kind: 'codeMatches', expect: '\\bnull\\b' },
          ],
        },
      ],
    },
    {
      id: 'js-ess-arrays',
      title: 'Arrays (collections)',
      summary: 'An array is an ordered collection of values in [brackets].',
      runner: 'javascript',
      sections: [
        {
          heading: 'Definition: array',
          body: `An array is an ordered collection of values inside square brackets.\n\nExample: const scores = [10, 20, 30];\n\n• scores[0] is the first item (10) — indexes start at 0\n• scores.length is how many items (3)\n• Arrays can hold numbers, strings, booleans, or mixes — beginners should usually keep one type per array`,
        },
        {
          heading: 'When to use arrays',
          body: `• Many related values (names, scores, prices)\n• When you'll loop through every item\n• When the collection can grow: scores.push(40)`,
        },
        {
          heading: 'What arrays aren't',
          body: `• A single number is not an array — 5 has no [0].\n• A string is not an array of numbers.\n• Index out of range: scores[3] on a length-3 array is undefined (no crash, but wrong data).`,
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
      summary: 'Convert between number, string, and boolean when you need a different type.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Ask the type',
          body: `typeof x returns a string like "number", "string", "boolean", "undefined", or "object" (note: typeof null is historically "object" — a famous quirk; arrays also show "object").\n\nCommon types: number, string, boolean, array (object), null, undefined.`,
        },
        {
          heading: 'Convert between types',
          body: `• String(5) or "" + 5 → "5" (number → text)\n• Number("12") → 12 (digit text → number)\n• Number("3.5") → 3.5\n• Boolean(0) is false; Boolean(1) is true; Boolean("") is false; Boolean("hi") is true\n\nNumber("12.5") works; parseInt("12px", 10) reads leading digits from messy text.`,
        },
        {
          heading: 'Why convert?',
          body: `Input often arrives as strings even when it looks like numbers. Convert before math. Convert numbers to strings when building messages with + (or use template literals).\n\nnull usually means "empty on purpose." undefined usually means "not set yet." Both are falsy in if conditions.`,
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
          title: 'Stringify a number',
          prompt: 'Log score: 7 using + and String(...).',
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
          prompt: 'Convert raw to a number, add 3, log the result (15).',
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
          prompt: 'Log typeof true — output should be boolean.',
          difficulty: 2,
          starterCode: `// log typeof true\n`,
          tests: [
            { id: 't1', description: 'Prints boolean', hint: 'console.log(typeof true)', kind: 'stdout', expect: 'boolean' },
            { id: 't2', description: 'Uses typeof', hint: 'typeof', kind: 'codeIncludes', expect: 'typeof' },
          ],
        },
      ],
    },
  ],
}
