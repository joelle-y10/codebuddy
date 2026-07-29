import type { Module } from '../../types'

/** First module: define each data type clearly, then practise using them on the canvas. */
export const processingEssentialsModule: Module = {
  id: 'p5-essentials',
  title: 'Values & types',
  summary:
    'Start here: learn what a number, string, boolean, and array are — then when to use each in a sketch.',
  lessons: [
    {
      id: 'p5-ess-values',
      title: 'What is a value?',
      summary: 'A value is a piece of data. Every value has a type. Learn the four core types by name.',
      runner: 'processing',
      sections: [
        {
          heading: 'Value + type',
          body: `A value is one piece of information your sketch stores or uses — like 100, "Ada", or true.\n\nEvery value has a type. The type is the category of that value. The type decides what you are allowed to do with it (math? join text? yes/no decisions?).\n\nProcessing in CodeBuddy runs as p5.js (JavaScript), so the type names match JavaScript.`,
        },
        {
          heading: 'The core types — memorize these definitions',
          body: `• Number — an integer or decimal with no quotes. Examples: 0, 42, 3.14, -10. Use for positions, sizes, speeds, scores, and color channels.\n\n• String — text written in quotes. Examples: "Ada", "hello", "42", "". Use for labels and messages drawn with text(...).\n\n• Boolean — a true/false value only. In p5.js: true or false (lowercase, no quotes). Use for yes/no decisions and if checks.\n\n• Array — an ordered collection of values in [brackets]. Example: [10, 20, 30]. (You will practise arrays after the basics.)\n\nWhen unsure: text(typeof value, x, y) or console.log(typeof value) shows the type.`,
        },
        {
          heading: 'Same looking output ≠ same type',
          body: `text(false, x, y) and text("false", x, y) can both show false on the canvas — but one is a boolean and one is a string.\n\ntypeof false is "boolean". typeof "false" is "string". Always know which type you meant.\n\nWrong type = weird drawing or wrong math: "3" + "4" is "34" (text join). 3 + 4 is 7 (math).`,
        },
      ],
      examples: [
        {
          title: 'Each type, named',
          code: `function setup() {\n  createCanvas(320, 180);\n  background(20, 30, 40);\n  fill(255);\n  // number — integer or decimal\n  let score = 12;\n  // string — text in quotes\n  let label = "score";\n  // boolean — true or false only\n  let ready = true;\n  // array — ordered collection\n  let sizes = [20, 30, 40];\n  text(label + "=" + score, 20, 40);\n  text("ready=" + ready, 20, 70);\n  text("first size=" + sizes[0], 20, 100);\n  text("typeof score: " + typeof score, 20, 140);\n}`,
          note: 'typeof tells you the category of the value.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Make one of each',
          prompt:
            'Create a canvas, then declare n = 5 (number), label = "hi" (string), ok = false (boolean), and sizes = [10, 20] (array). Draw text for each value on the canvas.',
          difficulty: 1,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(30);\n  fill(255);\n  // let n = 5; let label = "hi"; let ok = false; let sizes = [10, 20];\n  // text each value on the canvas\n}\n`,
          tests: [
            { id: 't1', description: 'Declares n', hint: 'let n = 5', kind: 'codeMatches', expect: 'let\\s+n\\s*=' },
            { id: 't2', description: 'Declares label string', hint: 'let label = "hi"', kind: 'codeIncludes', expect: 'label' },
            { id: 't3', description: 'Uses false boolean', hint: 'ok = false (no quotes)', kind: 'codeMatches', expect: '\\bfalse\\b' },
            { id: 't4', description: 'Declares an array', hint: 'let sizes = [10, 20]', kind: 'codeIncludes', expect: '[' },
            { id: 't5', description: 'Uses text', hint: 'text(...)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
        {
          id: 'p2',
          title: 'Check a boolean’s type',
          prompt: 'Create a canvas and draw text(typeof true, ...) somewhere. The output should show "boolean".',
          difficulty: 2,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  // A boolean is true or false. Draw typeof true.\n  // text(typeof true, x, y)\n}\n`,
          tests: [
            { id: 't1', description: 'Uses typeof', hint: 'typeof true', kind: 'codeIncludes', expect: 'typeof' },
            { id: 't2', description: 'Uses text', hint: 'text(...)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
      ],
    },
    {
      id: 'p5-ess-numbers',
      title: 'Numbers',
      summary: 'A number is an integer or decimal — no quotes. When to use numbers in a sketch.',
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
        {
          heading: 'What numbers can’t be',
          body: `• A number is not text — "level " + 3 becomes "level 3", not math.\n• A string of digits like "10" is not a number until you use Number("10").\n• Array indexes should be whole numbers (0, 1, 2…), not random floats.`,
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
          title: 'Declare a number',
          prompt: 'Declare let d = 40; and draw an ellipse that uses d for width and height.',
          difficulty: 1,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  // let d = 40; ellipse(..., d, d)\n}\n`,
          tests: [
            { id: 't1', description: 'Declares d', hint: 'let d = 40', kind: 'codeMatches', expect: 'let\\s+d\\s*=' },
            { id: 't2', description: 'Uses ellipse', hint: 'ellipse(...)', kind: 'codeIncludes', expect: 'ellipse(' },
            { id: 't3', description: 'Uses d', hint: 'Pass d into ellipse', kind: 'codeMatches', expect: 'ellipse\\([^)]*\\bd\\b' },
          ],
        },
        {
          id: 'p2',
          title: 'Add to a score',
          prompt: 'Declare let score = 10; then draw text showing score + 5 (use + in the text call).',
          difficulty: 2,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  // let score = 10; text(... score + 5 ...)\n}\n`,
          tests: [
            { id: 't1', description: 'Declares score', hint: 'let score = 10', kind: 'codeMatches', expect: 'let\\s+score\\s*=' },
            { id: 't2', description: 'Adds with +', hint: 'score + 5', kind: 'codeMatches', expect: 'score\\s*\\+\\s*5' },
            { id: 't3', description: 'Uses text', hint: 'text(...)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
        {
          id: 'p3',
          title: 'Number vs string that looks the same',
          prompt: 'Draw text showing 42 (a number) on one line, then "42" (a string) on another. Use typeof on each to show the difference.',
          difficulty: 2,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  // text(typeof 42, ...) and text(typeof "42", ...)\n}\n`,
          tests: [
            { id: 't1', description: 'Uses typeof', hint: 'typeof 42 and typeof "42"', kind: 'codeIncludes', expect: 'typeof' },
            { id: 't2', description: 'Uses text', hint: 'text(...)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
      ],
    },
    {
      id: 'p5-ess-strings',
      title: 'Strings (text)',
      summary: 'A string is text in quotes — letters, digits, spaces, anything you read as words.',
      runner: 'processing',
      sections: [
        {
          heading: 'Definition: string',
          body: `A string is text. You write it inside quotes so p5.js knows it’s text, not a variable name or a number.\n\nExamples: "Ada", 'hello', "42", "" (empty string).\n\nImportant: "42" is a string of characters, not the number 42. "false" is a string, not the boolean false.`,
        },
        {
          heading: 'When to use strings',
          body: `• Labels and messages: text("hello", x, y)\n• Names and captions\n• Building text with +: text("x=" + x, 10, 20)\n\n"code".length is 4. Empty string "" has length 0.`,
        },
        {
          heading: 'What strings can’t do',
          body: `• "10" + 1 is "101", not 11 — convert with Number("10") for math.\n• A string is not a boolean — "false" is text, false is boolean.\n• Don’t forget quotes — without them, p5.js thinks you meant a variable name.`,
        },
      ],
      examples: [
        {
          title: 'String vs number that looks the same',
          code: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  text("42", 20, 40);       // string — text characters\n  text(42, 20, 70);         // number — a value for math\n  text(typeof "42", 20, 100);\n  text(typeof 42, 20, 130);\n  let name = "Ada";\n  text("Player: " + name, 20, 160);\n}`,
          note: 'Quotes make it a string.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Draw a string',
          prompt: 'Create a canvas, set a background, and call text with the string "hello".',
          difficulty: 1,
          starterCode: `function setup() {\n  // createCanvas, background, fill, text("hello", ...)\n}\n`,
          tests: [
            { id: 't1', description: 'Has createCanvas', hint: 'createCanvas(...)', kind: 'codeIncludes', expect: 'createCanvas' },
            { id: 't2', description: 'Uses text', hint: 'text("hello", x, y)', kind: 'codeIncludes', expect: 'text(' },
            { id: 't3', description: 'Says hello', hint: 'Include "hello"', kind: 'codeIncludes', expect: 'hello' },
          ],
        },
        {
          id: 'p2',
          title: 'Join a greeting',
          prompt: 'Using greeting and name, draw text that shows Hello Ada (space between).',
          difficulty: 1,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(30);\n  fill(255);\n  let greeting = "Hello";\n  let name = "Ada";\n  // text(greeting + " " + name, ...)\n}\n`,
          tests: [
            { id: 't1', description: 'Joins with +', hint: 'greeting + " " + name', kind: 'codeMatches', expect: 'greeting\\s*\\+\\s*["\']\\s*["\']\\s*\\+\\s*name' },
            { id: 't2', description: 'Uses text', hint: 'text(...)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
        {
          id: 'p3',
          title: 'String "false" vs boolean false',
          prompt:
            'A string is text in quotes. A boolean is true/false without quotes. Draw text(typeof false, ...) and text(typeof "false", ...) to show the difference.',
          difficulty: 2,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  // boolean false (no quotes), then string "false"\n  // text(typeof false, ...) and text(typeof "false", ...)\n}\n`,
          tests: [
            { id: 't1', description: 'Uses typeof false', hint: 'typeof false', kind: 'codeMatches', expect: 'typeof\\s+false' },
            { id: 't2', description: 'Uses typeof "false"', hint: 'typeof "false"', kind: 'codeIncludes', expect: '"false"' },
            { id: 't3', description: 'Uses text', hint: 'text(...)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
      ],
    },
    {
      id: 'p5-ess-booleans',
      title: 'Booleans (true / false)',
      summary: 'A boolean is a true/false value — only true or false.',
      runner: 'processing',
      sections: [
        {
          heading: 'Definition: boolean',
          body: `A boolean is a true/false value. It answers a yes/no question.\n\nIn p5.js the only boolean values are:\n• true\n• false\n\nThey must be lowercase, and they must NOT be in quotes.\n\n• true  → boolean\n• false → boolean\n• "true" / "false" → strings (text that happens to look similar)\n• 1 and 0 → numbers, not booleans\n\nComparisons produce booleans: mouseX > width / 2.`,
        },
        {
          heading: 'When to use booleans',
          body: `• Flags: let on = true;\n• if (on) { ... } else { ... }\n• Storing comparison results: let onLeft = mouseX < width / 2;\n\nCombine with && / || / !: age >= 13 && age <= 19.`,
        },
        {
          heading: 'What booleans aren’t',
          body: `• "false" with quotes is a string, not a boolean.\n• = assigns a value. === asks “are these equal (same value and type)?”\n• Prefer real true/false over 1/0 while learning.`,
        },
      ],
      examples: [
        {
          title: 'Boolean vs string that looks like one',
          code: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  text(false, 20, 40);       // boolean\n  text("false", 20, 70);     // string\n  text(typeof false, 20, 100);\n  text(typeof "false", 20, 130);\n  let ready = true;\n  if (ready) {\n    fill(80, 180, 120);\n  } else {\n    fill(180, 80, 80);\n  }\n  rect(20, 150, 80, 20);\n}`,
          note: 'No quotes = boolean. Quotes = string.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Use a boolean',
          prompt: 'Declare let ready = true; and draw text that includes ready (no quotes around true).',
          difficulty: 1,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(30);\n  fill(255);\n  // A boolean is true or false. let ready = true; then text(...)\n}\n`,
          tests: [
            { id: 't1', description: 'Declares ready', hint: 'let ready = true', kind: 'codeMatches', expect: 'let\\s+ready\\s*=\\s*true' },
            { id: 't2', description: 'Uses ready', hint: 'Mention ready after declaring it', kind: 'codeMatches', expect: 'ready' },
            { id: 't3', description: 'Uses text', hint: 'text(...)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
        {
          id: 'p2',
          title: 'Comparison in if',
          prompt: 'Use if with >= (for example if (width >= 300)) and draw an ellipse inside.',
          difficulty: 2,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  // if (width >= 300) { ellipse(...); }\n}\n`,
          tests: [
            { id: 't1', description: 'Uses if', hint: 'if (', kind: 'codeIncludes', expect: 'if' },
            { id: 't2', description: 'Uses >=', hint: '>= in the condition', kind: 'codeIncludes', expect: '>=' },
            { id: 't3', description: 'Draws ellipse', hint: 'ellipse inside the if', kind: 'codeIncludes', expect: 'ellipse(' },
          ],
        },
        {
          id: 'p3',
          title: 'Boolean vs string false',
          prompt:
            'A boolean is true/false without quotes. Draw text(typeof false, ...) and text(typeof "false", ...) on separate lines.',
          difficulty: 2,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  // text(typeof false, ...) and text(typeof "false", ...)\n}\n`,
          tests: [
            { id: 't1', description: 'Uses typeof false', hint: 'typeof false', kind: 'codeMatches', expect: 'typeof\\s+false' },
            { id: 't2', description: 'Uses typeof "false"', hint: 'typeof "false"', kind: 'codeIncludes', expect: '"false"' },
            { id: 't3', description: 'Uses text', hint: 'text(...)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
      ],
    },
    {
      id: 'p5-ess-arrays',
      title: 'Arrays (collections)',
      summary: 'An array is an ordered collection of values in [brackets].',
      runner: 'processing',
      sections: [
        {
          heading: 'Definition: array',
          body: `An array is an ordered collection of values inside square brackets.\n\nExample: let xs = [10, 20, 30]\n\n• xs[0] is the first item (10) — indexes start at 0\n• xs.length is how many items (3)\n• Arrays can hold numbers, strings, booleans, or mixes — beginners should usually keep one type per array`,
        },
        {
          heading: 'When to use arrays in sketches',
          body: `• Many related values: x positions, sizes, scores\n• Loop through every item to draw or label each one\n• Grow a collection: xs.push(40)\n\nfor (let i = 0; i < xs.length; i++) { text(xs[i], 20, 30 + i * 20); }`,
        },
        {
          heading: 'What arrays aren’t',
          body: `• A single number is not an array — 5 has no [0].\n• Index out of range: xs[3] on a length-3 array is undefined (valid indexes 0..2).\n• Don’t confuse the whole array with one element: text(xs, ...) vs text(xs[0], ...).`,
        },
      ],
      examples: [
        {
          title: 'Create, index, loop',
          code: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  let xs = [10, 20, 30];\n  text("first=" + xs[0], 20, 30);\n  text("count=" + xs.length, 20, 60);\n  for (let i = 0; i < xs.length; i++) {\n    ellipse(50 + i * 60, 120, xs[i], xs[i]);\n  }\n}`,
          note: 'First index is 0; length is how many items; loop to draw each.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'First item',
          prompt: 'Create xs = [10, 20, 30], then draw text showing xs[0] on the canvas.',
          difficulty: 1,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  // let xs = [10, 20, 30]; text(... xs[0] ...)\n}\n`,
          tests: [
            { id: 't1', description: 'Declares xs array', hint: 'let xs = [10, 20, 30]', kind: 'codeIncludes', expect: '[10, 20, 30]' },
            { id: 't2', description: 'Indexes 0', hint: 'xs[0]', kind: 'codeIncludes', expect: '[0]' },
            { id: 't3', description: 'Uses text', hint: 'text(...)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
        {
          id: 'p2',
          title: 'Array length',
          prompt: 'Create xs = [10, 20, 30] and draw text that includes xs.length.',
          difficulty: 2,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  // let xs = [...]; text with xs.length\n}\n`,
          tests: [
            { id: 't1', description: 'Uses .length', hint: 'xs.length', kind: 'codeIncludes', expect: '.length' },
            { id: 't2', description: 'Uses text', hint: 'text(...)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
        {
          id: 'p3',
          title: 'Loop the array',
          prompt: 'Create xs = [10, 20, 30] and use a for loop to draw text for each value.',
          difficulty: 2,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  let xs = [10, 20, 30];\n  // for loop: text(xs[i], ...)\n}\n`,
          tests: [
            { id: 't1', description: 'Uses for', hint: 'for (let i = 0; ...', kind: 'codeIncludes', expect: 'for' },
            { id: 't2', description: 'Uses xs.length', hint: 'i < xs.length', kind: 'codeIncludes', expect: '.length' },
            { id: 't3', description: 'Indexes xs', hint: 'xs[i]', kind: 'codeMatches', expect: 'xs\\s*\\[\\s*i\\s*\\]' },
          ],
        },
      ],
    },
    {
      id: 'p5-ess-types',
      title: 'typeof & comparisons',
      summary: 'Check types with typeof and produce true/false with comparisons.',
      runner: 'processing',
      sections: [
        {
          heading: 'Ask the type',
          body: `typeof x tells you the category. Common results:\n• typeof 5 → "number"\n• typeof "hi" → "string"\n• typeof true → "boolean"\n• typeof [1, 2] → "object" (arrays are a special kind of object in JavaScript)\n\nDraw it: text(typeof 5, 10, 20);`,
        },
        {
          heading: 'Comparisons produce booleans',
          body: `=== checks equal value and type. >= > <= < !== compare values and produce booleans.\n\nif (mouseX > width / 2) { fill(255, 80, 80); } else { fill(80, 180, 255); }\n\nYou already know: a boolean is a true/false value. Comparisons create booleans for if checks.`,
        },
        {
          heading: 'What to watch for',
          body: `• = assigns; === compares — don’t mix them up.\n• Comparing a string to a number with == may coerce types unexpectedly; prefer ===.\n• typeof returns a string ("number"), not a number — don’t use it for math.`,
        },
      ],
      examples: [
        {
          title: 'Look-alikes side by side',
          code: `function setup() {\n  createCanvas(320, 180);\n  background(20);\n  fill(255);\n  text(42, 20, 30);\n  text("42", 20, 60);\n  text(false, 20, 90);\n  text("false", 20, 120);\n  text(typeof 42, 20, 150);\n  text(typeof "42", 120, 150);\n  text(typeof false, 20, 180);\n  text(typeof "false", 120, 180);\n}`,
          note: 'Same looking line, different type.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Use typeof',
          prompt: 'In setup, create a canvas and text(typeof true, ...) somewhere.',
          difficulty: 2,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  // text(typeof true, x, y)\n}\n`,
          tests: [
            { id: 't1', description: 'Uses typeof', hint: 'typeof true', kind: 'codeIncludes', expect: 'typeof' },
            { id: 't2', description: 'Uses text', hint: 'text(...)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
        {
          id: 'p2',
          title: 'Use ===',
          prompt: 'Declare let ready = true; and use if (ready === true) to draw an ellipse.',
          difficulty: 2,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  // let ready = true;\n  // if (ready === true) { ellipse(...); }\n}\n`,
          tests: [
            { id: 't1', description: 'Uses ===', hint: 'ready === true', kind: 'codeIncludes', expect: '===' },
            { id: 't2', description: 'Uses if', hint: 'if (', kind: 'codeIncludes', expect: 'if' },
            { id: 't3', description: 'Draws ellipse', hint: 'ellipse(...)', kind: 'codeIncludes', expect: 'ellipse(' },
          ],
        },
        {
          id: 'p3',
          title: 'Compare with >=',
          prompt: 'Declare let score = 85; and draw text showing whether score >= 60 (the comparison creates a boolean).',
          difficulty: 2,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  let score = 85;\n  // text(score >= 60, ...)\n}\n`,
          tests: [
            { id: 't1', description: 'Uses >=', hint: 'score >= 60', kind: 'codeIncludes', expect: '>=' },
            { id: 't2', description: 'Uses text', hint: 'text(...)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
      ],
    },
  ],
}
