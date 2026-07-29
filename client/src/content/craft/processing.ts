import type { Module } from '../../types'

/** First module in the Processing track — technique before heavy coding. */
export const processingCraftModule: Module = {
  id: 'p5-craft',
  title: 'Coding craft & symbols',
  summary:
    'Punctuation, operators, and habits so sketches run cleanly — learn these before bigger drawing lessons.',
  lessons: [
    {
      id: 'p5-craft-semicolons',
      title: 'Statements end with ;',
      summary: 'In Processing style, finish each statement with a semicolon.',
      runner: 'processing',
      sections: [
        {
          heading: 'What is a statement?',
          body: `A statement is one complete instruction, such as createCanvas(360, 240); or background(20);\n\nIn classic Processing (Java mode), every statement must end with a semicolon ; — just like Java and C++. Missing one is a compile error.\n\nCodeBuddy’s Processing lab runs with p5.js (JavaScript under the hood). JavaScript can sometimes insert semicolons for you, but that is easy to get wrong. In this track we treat semicolons as required after every statement so your technique matches real Processing and your code stays clear.`,
        },
        {
          heading: 'What does NOT need a semicolon?',
          body: `Do not put a semicolon after the header of a block:\n\nfunction setup() {   ← no semicolon here\n  createCanvas(200, 200);  ← yes, statement inside\n}\n\nSame idea for function draw() { ... } — the { } wrap a block; the statements inside the block get semicolons.`,
        },
        {
          heading: 'Everyday Processing etiquette',
          body: `• One statement per line while learning.\n• Indent code inside { } with 2 spaces.\n• Put spaces after commas: createCanvas(360, 240);\n• Match every ( with ) and every { with }.`,
        },
      ],
      examples: [
        {
          title: 'Correct statements',
          code: `function setup() {\n  createCanvas(320, 180);\n  background(12, 18, 24);\n  fill(200, 245, 66);\n  ellipse(160, 90, 60, 60);\n}`,
          note: 'Every instruction inside setup ends with ;',
        },
        {
          title: 'Broken (missing ;)',
          code: `// Wrong Processing craft:\n// createCanvas(320, 180)\n// background(12)\n// Always write:\n// createCanvas(320, 180);\n// background(12);`,
          note: 'Train your eye to look for the semicolon at the end of each line.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Add the semicolons',
          prompt:
            'Write a setup that creates a 360×240 canvas and a dark background. End every statement with ;',
          difficulty: 1,
          starterCode: `function setup() {\n  // createCanvas and background — with semicolons\n}\n`,
          tests: [
            {
              id: 't1',
              description: 'Calls createCanvas',
              hint: 'createCanvas(360, 240);',
              kind: 'codeIncludes',
              expect: 'createCanvas',
            },
            {
              id: 't2',
              description: 'Uses semicolon after createCanvas',
              hint: 'createCanvas(...);',
              kind: 'codeMatches',
              expect: 'createCanvas\\s*\\([^)]*\\)\\s*;',
            },
            {
              id: 't3',
              description: 'Calls background with semicolon',
              hint: 'background(...);',
              kind: 'codeMatches',
              expect: 'background\\s*\\([^)]*\\)\\s*;',
            },
          ],
        },
        {
          id: 'p2',
          title: 'Three statements',
          prompt:
            'In setup: createCanvas(300, 160); background(8); then ellipse(150, 80, 40, 40); — all with semicolons.',
          difficulty: 2,
          starterCode: `function setup() {\n}\n`,
          tests: [
            {
              id: 't1',
              description: 'Has ellipse with semicolon',
              hint: 'ellipse(150, 80, 40, 40);',
              kind: 'codeMatches',
              expect: 'ellipse\\s*\\([^)]*\\)\\s*;',
            },
            {
              id: 't2',
              description: 'Has createCanvas',
              hint: 'createCanvas(300, 160);',
              kind: 'codeIncludes',
              expect: 'createCanvas',
            },
          ],
        },
      ],
    },
    {
      id: 'p5-craft-operators',
      title: 'What coding signs mean',
      summary: '= vs ==, comparisons like >=, and math operators.',
      runner: 'processing',
      sections: [
        {
          heading: '= means “store / assign”',
          body: `In Processing (and most languages), a single = means assignment: put a value into a variable.\n\nlet x = 10;  →  x now holds 10\n\nIt does NOT mean “equals” in the math sense. For asking “are these equal?” you use a comparison operator.`,
        },
        {
          heading: '== means “are these equal?”',
          body: `== compares two values and produces true or false.\n\nif (x == 10) { ... } runs the block only when x equals 10.\n\nBeginner mix-up: writing if (x = 10) assigns 10 to x instead of comparing. Always use == (or === in pure JavaScript) inside conditions.`,
        },
        {
          heading: 'Comparison operators',
          body: `• ==  equal to\n• !=  not equal to\n• <   less than\n• >   greater than\n• <=  less than or equal to\n• >=  greater than or equal to\n\nExample: if (score >= 60) means “if score is at least 60.”`,
        },
        {
          heading: 'Math operators',
          body: `• + add   • - subtract   • * multiply   • / divide   • % remainder (modulo)\n\nYou can store results: let next = x + 1;`,
        },
      ],
      examples: [
        {
          title: 'Assign vs compare',
          code: `let score = 85;          // assign\nif (score >= 60) {       // compare\n  // passed\n}`,
          note: 'One = stores. >= asks a yes/no question.',
        },
        {
          title: 'Update a variable',
          code: `let x = 0;\nx = x + 2;   // or x += 2;\n// x is now 2`,
          note: 'Read the right side first, then store into the left.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Use >= in a condition',
          prompt:
            'In setup, set let score = 85; then if (score >= 60) draw a green ellipse. Use createCanvas and background first.',
          difficulty: 2,
          starterCode: `function setup() {\n  createCanvas(300, 160);\n  background(12);\n  let score = 85;\n  // if score >= 60, fill green and ellipse\n}\n`,
          tests: [
            {
              id: 't1',
              description: 'Uses >=',
              hint: 'if (score >= 60)',
              kind: 'codeIncludes',
              expect: '>=',
            },
            {
              id: 't2',
              description: 'Uses if',
              hint: 'if (score >= 60) { ... }',
              kind: 'codeIncludes',
              expect: 'if',
            },
            {
              id: 't3',
              description: 'Draws ellipse',
              hint: 'ellipse(...);',
              kind: 'codeIncludes',
              expect: 'ellipse(',
            },
          ],
        },
        {
          id: 'p2',
          title: 'Not equal !=',
          prompt:
            'Set let mode = 1; if (mode != 0) draw a rect. Include canvas + background.',
          difficulty: 2,
          starterCode: `function setup() {\n  createCanvas(300, 160);\n  background(12);\n  let mode = 1;\n  // if mode != 0, draw a rect\n}\n`,
          tests: [
            {
              id: 't1',
              description: 'Uses !=',
              hint: 'if (mode != 0)',
              kind: 'codeIncludes',
              expect: '!=',
            },
            {
              id: 't2',
              description: 'Draws rect',
              hint: 'rect(...);',
              kind: 'codeIncludes',
              expect: 'rect(',
            },
          ],
        },
      ],
    },
    {
      id: 'p5-craft-combine',
      title: 'Combining text and numbers',
      summary: 'Build messages with + and show values while you debug.',
      runner: 'processing',
      sections: [
        {
          heading: 'text() on the canvas',
          body: `In Processing/p5 you often show words with text("hello", x, y); — that draws on the canvas, not the CodeBuddy console.\n\nTo combine a label and a variable in one string, use + :\n\ntext("x = " + x, 20, 40);\n\nThe + here means “join into one string” when either side is text.`,
        },
        {
          heading: 'Why this matters',
          body: `Debugging sketches is easier when you print or draw the current value of x, speed, or score. Combining a short label with the variable is everyday coding technique.`,
        },
      ],
      examples: [
        {
          title: 'Join label + number',
          code: `function setup() {\n  createCanvas(300, 120);\n  background(12);\n  fill(230);\n  let lives = 3;\n  text("lives: " + lives, 20, 40);\n}`,
          note: '"lives: " + lives becomes lives: 3',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Show a score',
          prompt:
            'In setup, create a canvas, set let score = 12, and use text to show score: 12 using + to combine the string and variable.',
          difficulty: 2,
          starterCode: `function setup() {\n  createCanvas(300, 120);\n  background(12);\n  fill(230);\n  let score = 12;\n  // text("score: " + score, ...);\n}\n`,
          tests: [
            {
              id: 't1',
              description: 'Uses text(',
              hint: 'text("score: " + score, 20, 40);',
              kind: 'codeIncludes',
              expect: 'text(',
            },
            {
              id: 't2',
              description: 'Combines with +',
              hint: '"score: " + score',
              kind: 'codeMatches',
              expect: '\\+\\s*score|score\\s*\\+',
            },
          ],
        },
      ],
    },
  ],
}
