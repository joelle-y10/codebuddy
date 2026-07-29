import type { Module } from '../../types'

export const javascriptEssentialsModule: Module = {
  id: 'js-essentials',
  title: 'Data essentials',
  summary: 'Strings, numbers, booleans, null/undefined, and how each looks in the console.',
  lessons: [
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
          body: `• Strings print their characters (no quotes in the console)\n• Numbers print as digits\n• Booleans print true or false (lowercase in JavaScript)\n• null prints null — intentional empty\n• undefined prints undefined — “no value assigned yet”\n\nTip: console.log(typeof value) shows "number", "string", "boolean", etc.`,
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
      id: 'js-ess-strings',
      title: 'Strings (text)',
      summary: 'Quotes, length, joining, and template literals.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Text lives in quotes',
          body: `A string is text in "double", 'single', or \`backtick\` quotes.\n\nEmpty string "" has length 0. "code".length is 4. Indexes start at 0: "code"[0] is "c".`,
        },
        {
          heading: 'Joining text',
          body: `"Hi " + "Ada" joins strings. Template literals embed values: \`Hi \${name}\`.\n\nWatch out: "5" + 1 becomes "51" because + prefers string joining when either side is a string.`,
        },
        {
          heading: 'Escapes',
          body: `\\n is a newline. \\" puts a quote inside a double-quoted string.`,
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
      id: 'js-ess-numbers',
      title: 'Numbers',
      summary: 'Math operators and how JS treats numbers.',
      runner: 'javascript',
      sections: [
        {
          heading: 'One number type',
          body: `JavaScript mostly uses one Number type for both integers and decimals: 42 and 3.14 are both typeof "number".\n\nSpecial values: NaN (“not a number”), Infinity. You’ll meet them when math goes wrong (like 0/0).`,
        },
        {
          heading: 'Operators',
          body: `• + - * /  basic math\n• %  remainder (17 % 5 is 2)\n• **  power (2 ** 3 is 8)\n\nParentheses change order: (1 + 2) * 3 is 9.`,
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
      id: 'js-ess-booleans',
      title: 'Booleans (true / false)',
      summary: 'Yes/no values, === comparisons, and && / || / !.',
      runner: 'javascript',
      sections: [
        {
          heading: 'What is a boolean?',
          body: `A boolean is only true or false (lowercase in JavaScript). Comparisons produce them: 5 > 3 is true.\n\nStore them: const ready = true;`,
        },
        {
          heading: '=== vs ==',
          body: `=== compares value and type (recommended while learning). == tries to convert types first and can surprise you ("5" == 5 is true, but "5" === 5 is false).\n\nPrefer === and !==.`,
        },
        {
          heading: '&&, ||, !',
          body: `• A && B — true only if both are true\n• A || B — true if at least one is true\n• !A — flips true↔false`,
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
      id: 'js-ess-convert',
      title: 'Types & conversion',
      summary: 'typeof, Number, String, Boolean, null vs undefined.',
      runner: 'javascript',
      sections: [
        {
          heading: 'typeof',
          body: `typeof x returns a string like "number", "string", "boolean", "undefined", or "object" (note: typeof null is historically "object" — a famous quirk).`,
        },
        {
          heading: 'Convert',
          body: `• String(5) or "" + 5 → "5"\n• Number("12") → 12; Number("hi") → NaN\n• Boolean(0) is false; Boolean(1) is true; Boolean("") is false; Boolean("hi") is true\n\nparseInt("12px", 10) reads leading digits — useful with messy text.`,
        },
        {
          heading: 'null vs undefined',
          body: `undefined usually means “not set yet.” null usually means “empty on purpose.” Both are falsy in if conditions.`,
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
