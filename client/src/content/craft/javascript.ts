import type { Module } from '../../types'

export const javascriptCraftModule: Module = {
  id: 'js-craft',
  title: 'Coding craft & symbols',
  summary: 'Operators, punctuation habits, and mixing text with variables — accurately.',
  lessons: [
    {
      id: 'js-craft-punctuation',
      title: 'Statements, braces, and style',
      summary: 'How JavaScript lines are built.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Semicolons in JavaScript',
          body: `JavaScript has Automatic Semicolon Insertion (ASI): many lines work without ; because the engine inserts them.\n\nThat said, ASI has sharp edges (returning an object on the next line is a famous trap). In CodeBuddy we recommend ending statements with ; so your habit transfers cleanly to Java, C++, and Processing.`,
        },
        {
          heading: 'Braces { } mark blocks',
          body: `if (ok) {\n  console.log("yes");\n}\n\nAlways use braces while learning, even for one-line bodies — it prevents bugs when you add a second line later.`,
        },
        {
          heading: 'Etiquette',
          body: `• Prefer const until you need reassignment, then let. Avoid var in modern code.\n• Use === for equality (see next lesson).\n• Name variables in camelCase: highScore.\n• Comments: // one line   or   /* multi-line */`,
        },
      ],
      examples: [
        {
          title: 'Clear statement style',
          code: `const name = "Ada";\nlet score = 0;\nscore = score + 1;\nconsole.log(name);`,
          note: 'Semicolons after each statement.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Declare and print',
          prompt: 'Create const label = "CodeBuddy"; then console.log(label); with semicolons.',
          difficulty: 1,
          starterCode: `// const + console.log\n`,
          tests: [
            { id: 't1', description: 'Prints CodeBuddy', hint: 'console.log(label)', kind: 'stdout', expect: 'CodeBuddy' },
            { id: 't2', description: 'Uses const', hint: 'const label = "CodeBuddy";', kind: 'codeIncludes', expect: 'const ' },
          ],
        },
      ],
    },
    {
      id: 'js-craft-operators',
      title: 'What coding signs mean',
      summary: '= vs == vs ===, >=, and math operators — precise meanings.',
      runner: 'javascript',
      sections: [
        {
          heading: '= assigns',
          body: `let x = 10; stores 10 in x. The single = is assignment, not a math “equals.”`,
        },
        {
          heading: '== vs === (important accuracy)',
          body: `=== is strict equality: same value and same type. 1 === "1" is false.\n\n== is loose equality: JavaScript may coerce types before comparing. 1 == "1" is true. That coercion surprises beginners.\n\nModern style: use === and !== almost always. We teach === in CodeBuddy.`,
        },
        {
          heading: 'Other comparisons',
          body: `• !==  not strictly equal\n• < > <= >=  numeric/lexicographic comparisons as usual\n• >=  means “greater than or equal to” (at least)\n• <=  means “less than or equal to” (at most)`,
        },
        {
          heading: 'Math',
          body: `+ - * / % as usual. % is remainder: 10 % 3 is 1.\n\nCareful: "5" + 1 becomes "51" (string join). 5 + 1 is 6. Keep numbers unquoted for math.`,
        },
      ],
      examples: [
        {
          title: 'Strict equality',
          code: `console.log(1 === 1);    // true\nconsole.log(1 === "1");  // false\nconsole.log(1 == "1");   // true (avoid relying on this)`,
          note: 'Prefer === in real code.',
        },
        {
          title: '>= check',
          code: `const score = 85;\nif (score >= 60) {\n  console.log("pass");\n}`,
          note: '85 is at least 60.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Use ===',
          prompt: 'Set const color = "green"; if color === "green" print go.',
          difficulty: 1,
          starterCode: `const color = "green";\n`,
          tests: [
            { id: 't1', description: 'Prints go', hint: 'if (color === "green") console.log("go");', kind: 'stdout', expect: 'go' },
            { id: 't2', description: 'Uses ===', hint: 'Strict equality ===', kind: 'codeIncludes', expect: '===' },
          ],
        },
        {
          id: 'p2',
          title: 'Use >=',
          prompt: 'score = 85; if score >= 60 print pass else print retry.',
          difficulty: 2,
          starterCode: `const score = 85;\n`,
          tests: [
            { id: 't1', description: 'Prints pass', hint: 'if (score >= 60)', kind: 'stdout', expect: 'pass' },
            { id: 't2', description: 'Uses >=', hint: 'score >= 60', kind: 'codeIncludes', expect: '>=' },
          ],
        },
      ],
    },
    {
      id: 'js-craft-combine',
      title: 'Combining variables and text',
      summary: 'One console.log that mixes words and values.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Three accurate techniques',
          body: `1) + join:\nconsole.log("score " + score);\n\n2) Template literal (backticks):\nconsole.log(\`score \${score}\`);\n\n3) Multiple arguments (console inserts spaces):\nconsole.log("score", score);\n\nTemplate literals are often the clearest for sentences.`,
        },
      ],
      examples: [
        {
          title: 'Template literal',
          code: `const name = "Ada";\nconst score = 12;\nconsole.log(\`\${name} scored \${score}\`);`,
          note: 'Backticks `, not quotes. \${ } embeds values.',
        },
        {
          title: 'Plus join',
          code: `const score = 12;\nconsole.log("score " + score);`,
          note: 'Number is coerced to string when joined with + to a string.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Template message',
          prompt: 'language = "JavaScript", level = 1. Print JavaScript level 1 with a template literal.',
          difficulty: 1,
          starterCode: `const language = "JavaScript";\nconst level = 1;\n`,
          tests: [
            { id: 't1', description: 'Prints JavaScript level 1', hint: 'console.log(`${language} level ${level}`)', kind: 'stdout', expect: 'JavaScript level 1' },
            { id: 't2', description: 'Uses backticks', hint: 'Template literal with `', kind: 'codeMatches', expect: '`[^`]*\\$\\{' },
          ],
        },
        {
          id: 'p2',
          title: 'Join with +',
          prompt: 'Print hi Ada using + and name = "Ada".',
          difficulty: 2,
          starterCode: `const name = "Ada";\n`,
          tests: [
            { id: 't1', description: 'Prints hi Ada', hint: 'console.log("hi " + name);', kind: 'stdout', expect: 'hi Ada' },
            { id: 't2', description: 'Uses +', hint: '"hi " + name', kind: 'codeIncludes', expect: '+' },
          ],
        },
      ],
    },
  ],
}
