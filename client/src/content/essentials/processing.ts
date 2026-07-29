import type { Module } from '../../types'

/** First module: values, variables, and simple type practice on the canvas. */
export const processingEssentialsModule: Module = {
  id: 'p5-essentials',
  title: 'Values, variables & types',
  summary:
    'Start here: what a value is, what a variable is, then numbers, strings, booleans, and arrays — with simple canvas practice.',
  lessons: [
    {
      id: 'p5-ess-values',
      title: 'What is a value?',
      summary: 'A value is a piece of data. Every value has a type.',
      runner: 'processing',
      sections: [
        {
          heading: 'Value + type',
          body: `A value is one piece of information — like 7, "Ada", or true.\n\nEvery value has a type (its category):\n\n• Number — a number with no quotes: 0, 42, 3.14\n• String — text in quotes: "hello", "42"\n• Boolean — true or false only (no quotes)\n• Array — an ordered list in [brackets]: [10, 20, 30]\n\nProcessing in CodeBuddy runs as p5.js (JavaScript).`,
        },
      ],
      examples: [
        {
          title: 'Four values on the canvas',
          code: `function setup() {\n  createCanvas(320, 180);\n  background(20, 30, 40);\n  fill(255);\n  text(7, 20, 40);          // number\n  text("Ada", 20, 70);      // string\n  text(true, 20, 100);      // boolean\n  text([10, 20, 30], 20, 130); // array\n}`,
          note: 'Each text call shows one value.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Draw a number',
          prompt: 'Draw the number 10 with text.',
          difficulty: 1,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  // text(10, x, y)\n}\n`,
          tests: [
            { id: 't1', description: 'Uses text', hint: 'text(10, x, y)', kind: 'codeIncludes', expect: 'text(' },
            { id: 't2', description: 'Shows 10', hint: 'text(10, ...)', kind: 'codeMatches', expect: 'text\\(\\s*10\\s*,' },
          ],
        },
        {
          id: 'p2',
          title: 'Draw text',
          prompt: 'Draw the word hello.',
          difficulty: 1,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  // text("hello", x, y)\n}\n`,
          tests: [
            { id: 't1', description: 'Uses text', hint: 'text("hello", x, y)', kind: 'codeIncludes', expect: 'text(' },
            { id: 't2', description: 'Says hello', hint: 'Use "hello" in quotes', kind: 'codeIncludes', expect: 'hello' },
          ],
        },
      ],
    },
    {
      id: 'p5-ess-variables',
      title: 'Variables',
      summary: 'A variable is a name that holds a value.',
      runner: 'processing',
      sections: [
        {
          heading: 'Definition: variable',
          body: `A variable is a name that stores a value so you can use it later.\n\nYou create one with let and = (assignment):\n\nlet score = 10\nlet name = "Ada"\nlet ready = true\n\n• The name is on the left (score, name, ready)\n• The value is on the right (10, "Ada", true)\n• = means “put this value into that name”`,
        },
        {
          heading: 'Using a variable',
          body: `After you store a value, use the name to get it back:\n\nlet score = 10\ntext(score, 20, 40)   → draws 10\n\nYou can change it later:\n\nlet score = 10\nscore = 11\ntext(score, 20, 40)   → draws 11`,
        },
        {
          heading: 'Good names',
          body: `Use clear names: score, name, total — not s or x (unless x is a position).\n\nNames cannot start with a digit. They cannot have spaces. Use camelCase for multi-word names: playerName.`,
        },
      ],
      examples: [
        {
          title: 'Store and draw',
          code: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  let age = 15;\n  let name = "Ada";\n  text(age, 20, 40);\n  text(name, 20, 70);\n}`,
          note: 'Use the variable name — not quotes unless you want literal text.',
        },
        {
          title: 'Change a variable',
          code: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  let score = 0;\n  score = 5;\n  text(score, 20, 40);\n}`,
          note: 'The last value assigned is what text shows.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Make a variable',
          prompt: 'Make let score = 5 and show it with text.',
          difficulty: 1,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  // let score = 5; text(score, x, y)\n}\n`,
          tests: [
            { id: 't1', description: 'Uses score', hint: 'let score = 5', kind: 'codeMatches', expect: 'let\\s+score\\s*=' },
            { id: 't2', description: 'Uses text', hint: 'text(score, x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
        {
          id: 'p2',
          title: 'Store a name',
          prompt: 'Make let name = "Ada" and show it with text.',
          difficulty: 1,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  // let name = "Ada"; text(name, x, y)\n}\n`,
          tests: [
            { id: 't1', description: 'Uses name', hint: 'let name = "Ada"', kind: 'codeMatches', expect: 'let\\s+name\\s*=' },
            { id: 't2', description: 'Uses text', hint: 'text(name, x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
        {
          id: 'p3',
          title: 'Change it',
          prompt: 'Set score to 0, then set score to 7, then show score with text.',
          difficulty: 1,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  // let score = 0; score = 7; text(score, x, y)\n}\n`,
          tests: [
            { id: 't1', description: 'Uses score', hint: 'score = 7 last', kind: 'codeMatches', expect: '\\bscore\\s*=' },
            { id: 't2', description: 'Uses text', hint: 'text(score, x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
      ],
    },
    {
      id: 'p5-ess-numbers',
      title: 'Numbers',
      summary: 'A number is an integer or decimal — no quotes.',
      runner: 'processing',
      sections: [
        {
          heading: 'Definition: number',
          body: `A number is an integer or decimal — no quotes around it.\n\nExamples: 0, 1, 42, 3.14, -10.\n\nNot numbers: "7" (that’s a string because of the quotes), true (that’s a boolean).\n\nIn p5.js there isn’t a separate “int” or “float” type — both are number.`,
        },
        {
          heading: 'When to use numbers',
          body: `• x/y positions, width/height, speeds\n• Scores and counters\n• Color channels: fill(255, 80, 0)\n• Anything you’ll add, subtract, or compare mathematically`,
        },
      ],
      examples: [
        {
          title: 'Numbers place a shape',
          code: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  let x = 80;\n  let y = 80;\n  let d = 50;\n  fill(80, 180, 255);\n  ellipse(x, y, d, d);\n  fill(255);\n  text("x=" + x, 20, 30);\n}`,
          note: 'Positions and sizes are numbers.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Draw a number',
          prompt: 'Draw the number 17 with text.',
          difficulty: 1,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  // text(17, x, y)\n}\n`,
          tests: [
            { id: 't1', description: 'Uses text', hint: 'text(17, x, y)', kind: 'codeIncludes', expect: 'text(' },
            { id: 't2', description: 'Shows 17', hint: 'text(17, ...)', kind: 'codeMatches', expect: 'text\\(\\s*17\\s*,' },
          ],
        },
        {
          id: 'p2',
          title: 'Use a number for size',
          prompt: 'Make let d = 40 and draw an ellipse with d for width and height.',
          difficulty: 1,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  // let d = 40; ellipse(..., d, d)\n}\n`,
          tests: [
            { id: 't1', description: 'Declares d', hint: 'let d = 40', kind: 'codeMatches', expect: 'let\\s+d\\s*=' },
            { id: 't2', description: 'Uses ellipse', hint: 'ellipse(..., d, d)', kind: 'codeIncludes', expect: 'ellipse(' },
          ],
        },
        {
          id: 'p3',
          title: 'Store a number',
          prompt: 'Make let score = 10 and show score + 5 with text.',
          difficulty: 1,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  // let score = 10; text(score + 5, x, y)\n}\n`,
          tests: [
            { id: 't1', description: 'Declares score', hint: 'let score = 10', kind: 'codeMatches', expect: 'let\\s+score\\s*=' },
            { id: 't2', description: 'Uses text', hint: 'text(score + 5, x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
      ],
    },
    {
      id: 'p5-ess-strings',
      title: 'Strings (text)',
      summary: 'A string is text in quotes.',
      runner: 'processing',
      sections: [
        {
          heading: 'Definition: string',
          body: `A string is text. Write it in quotes so p5.js knows it is text.\n\nExamples: "Ada", "hello", "42".\n\n"42" is a string (text). 42 without quotes is a number.`,
        },
        {
          heading: 'Variables hold strings too',
          body: `let name = "Ada"\ntext(name, 20, 40)\n\nJoin two strings with +: text("Hi " + "Ada", 20, 70)`,
        },
      ],
      examples: [
        {
          title: 'String in a variable',
          code: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  let word = "code";\n  text(word, 20, 40);\n  text("Hi " + "Ada", 20, 70);\n}`,
          note: 'Quotes make text a string.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Draw a string',
          prompt: 'Draw the word hello.',
          difficulty: 1,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  // text("hello", x, y)\n}\n`,
          tests: [
            { id: 't1', description: 'Uses text', hint: 'text("hello", x, y)', kind: 'codeIncludes', expect: 'text(' },
            { id: 't2', description: 'Says hello', hint: 'Use "hello"', kind: 'codeIncludes', expect: 'hello' },
          ],
        },
        {
          id: 'p2',
          title: 'Store a string',
          prompt: 'Make let city = "Calgary" and show it with text.',
          difficulty: 1,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  // let city = "Calgary"; text(city, x, y)\n}\n`,
          tests: [
            { id: 't1', description: 'Uses city', hint: 'let city = "Calgary"', kind: 'codeMatches', expect: 'let\\s+city\\s*=' },
            { id: 't2', description: 'Uses text', hint: 'text(city, x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
        {
          id: 'p3',
          title: 'Join two strings',
          prompt: 'Show Hello Ada by joining greeting and name with a space.',
          difficulty: 1,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  let greeting = "Hello";\n  let name = "Ada";\n  // text(greeting + " " + name, x, y)\n}\n`,
          tests: [
            { id: 't1', description: 'Joins with +', hint: 'greeting + " " + name', kind: 'codeIncludes', expect: 'greeting' },
            { id: 't2', description: 'Uses text', hint: 'text(...)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
      ],
    },
    {
      id: 'p5-ess-booleans',
      title: 'Booleans (true / false)',
      summary: 'A boolean is a true/false value.',
      runner: 'processing',
      sections: [
        {
          heading: 'Definition: boolean',
          body: `A boolean is a true/false value. It answers a yes/no question.\n\nIn p5.js the only boolean values are:\n• true\n• false\n\nNo quotes. Lowercase.\n\n"true" with quotes is a string, not a boolean.`,
        },
        {
          heading: 'Booleans in variables',
          body: `let ready = true\ntext(ready, 20, 40)\n\nComparisons also make booleans: score >= 60`,
        },
      ],
      examples: [
        {
          title: 'Boolean values',
          code: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  let ready = true;\n  text(ready, 20, 40);\n  text(false, 20, 70);\n}`,
          note: 'true and false are booleans.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Draw a boolean',
          prompt: 'Draw true with text (no quotes).',
          difficulty: 1,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  // text(true, x, y)\n}\n`,
          tests: [
            { id: 't1', description: 'Uses text', hint: 'text(true, x, y)', kind: 'codeIncludes', expect: 'text(' },
            { id: 't2', description: 'Uses true', hint: 'true without quotes', kind: 'codeMatches', expect: 'text\\(\\s*true\\s*,' },
          ],
        },
        {
          id: 'p2',
          title: 'Store a boolean',
          prompt: 'Make let ready = true and show ready with text.',
          difficulty: 1,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  // let ready = true; text(ready, x, y)\n}\n`,
          tests: [
            { id: 't1', description: 'Uses ready', hint: 'let ready = true', kind: 'codeMatches', expect: 'let\\s+ready\\s*=' },
            { id: 't2', description: 'Uses text', hint: 'text(ready, x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
        {
          id: 'p3',
          title: 'Compare numbers',
          prompt: 'score is 85. Show whether score >= 60 with text.',
          difficulty: 1,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  let score = 85;\n  // text(score >= 60, x, y)\n}\n`,
          tests: [
            { id: 't1', description: 'Uses >=', hint: 'score >= 60', kind: 'codeIncludes', expect: '>=' },
            { id: 't2', description: 'Uses text', hint: 'text(score >= 60, x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
      ],
    },
    {
      id: 'p5-ess-arrays',
      title: 'Arrays',
      summary: 'An array holds several values in order.',
      runner: 'processing',
      sections: [
        {
          heading: 'Definition: array',
          body: `An array is an ordered group of values in square brackets.\n\nlet nums = [3, 6, 9]\n\n• nums[0] is the first item (3)\n• nums.length is how many items (3)`,
        },
      ],
      examples: [
        {
          title: 'A short array',
          code: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  let nums = [3, 6, 9];\n  text(nums[0], 20, 40);\n  text(nums.length, 20, 70);\n}`,
          note: 'Indexes start at 0.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'First item',
          prompt: 'Show the first item in nums with text.',
          difficulty: 1,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  let nums = [3, 6, 9];\n  // text(nums[0], x, y)\n}\n`,
          tests: [
            { id: 't1', description: 'Indexes 0', hint: 'nums[0]', kind: 'codeIncludes', expect: '[0]' },
            { id: 't2', description: 'Uses text', hint: 'text(nums[0], x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
        {
          id: 'p2',
          title: 'How many items',
          prompt: 'Show how many items are in nums with text.',
          difficulty: 1,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  let nums = [3, 6, 9];\n  // text(nums.length, x, y)\n}\n`,
          tests: [
            { id: 't1', description: 'Uses .length', hint: 'nums.length', kind: 'codeIncludes', expect: '.length' },
            { id: 't2', description: 'Uses text', hint: 'text(nums.length, x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
      ],
    },
    {
      id: 'p5-ess-types',
      title: 'How types look when drawn',
      summary: 'Different types can look the same on the canvas — know which one you meant.',
      runner: 'processing',
      sections: [
        {
          heading: 'Look-alikes',
          body: `text(42, x, y) and text("42", x, y) both show 42 — but one is a number and one is a string.\n\ntext(false, x, y) and text("false", x, y) both show false — but one is a boolean and one is a string.\n\nRule: quotes → string. No quotes on true/false → boolean. No quotes on digits → number.`,
        },
      ],
      examples: [
        {
          title: 'Side by side',
          code: `function setup() {\n  createCanvas(320, 180);\n  background(20);\n  fill(255);\n  text(42, 20, 40);\n  text("42", 20, 70);\n  text(false, 20, 100);\n  text("false", 20, 130);\n}`,
          note: 'Same looking output, different types.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Number then word',
          prompt: 'Draw 7, then draw seven on the next line.',
          difficulty: 1,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  // text(7, x, y); text("seven", x, y + 30)\n}\n`,
          tests: [
            { id: 't1', description: 'Uses text', hint: 'Two text calls', kind: 'codeIncludes', expect: 'text(' },
            { id: 't2', description: 'Shows seven', hint: 'text("seven", ...)', kind: 'codeIncludes', expect: 'seven' },
          ],
        },
        {
          id: 'p2',
          title: 'Boolean then string',
          prompt: 'Draw the boolean false, then draw the string "false" below it.',
          difficulty: 1,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  // text(false, x, y); text("false", x, y + 30)\n}\n`,
          tests: [
            { id: 't1', description: 'Uses boolean false', hint: 'text(false, ...)', kind: 'codeMatches', expect: 'text\\(\\s*false\\s*,' },
            { id: 't2', description: 'Uses string false', hint: 'text("false", ...)', kind: 'codeIncludes', expect: '"false"' },
          ],
        },
      ],
    },
  ],
}
