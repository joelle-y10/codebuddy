import type { Module } from '../../types'

/** First module: data types for sketches — same idea as other languages, applied on the canvas. */
export const processingEssentialsModule: Module = {
  id: 'p5-essentials',
  title: 'Values & types',
  summary:
    'Start here: what a value is, the main data types in a sketch, when to use each, and what each type can’t do.',
  lessons: [
    {
      id: 'p5-ess-values',
      title: 'What is a value?',
      summary: 'Every sketch stores data as values. Each value has a type that decides what you can do with it.',
      runner: 'processing',
      sections: [
        {
          heading: 'Values are the data your sketch works with',
          body: `A value is a single piece of information: a position, a label, a yes/no flag, or a whole list of sizes.\n\nYou store values in variables (let x = 100), pass them to drawing functions (ellipse(x, y, 40, 40)), and combine them (score + 1).\n\nProcessing in CodeBuddy runs as p5.js (JavaScript), so the type names match JavaScript.`,
        },
        {
          heading: 'Type = the rules for that value',
          body: `The type answers: what kind of value is this, and what operations are allowed?\n\n• number — integers and decimals (positions, sizes, speeds, colors)\n• string — text (labels drawn with text(...))\n• boolean — true or false only (toggles and if checks)\n• array — ordered collection of values (many x positions, many sizes)\n\ntext(typeof value, x, y) or console.log(typeof value) shows the type when you’re unsure.`,
        },
        {
          heading: 'Wrong type = weird drawing or wrong math',
          body: `"3" + "4" is "34" (text join). 3 + 4 is 7 (math). Mixing types without thinking often surprises you: "level " + 3 becomes "level 3", but "10" + 1 is "101", not 11.\n\nRule of thumb: decide the type first, then write the sketch. Use === when comparing value and type together.`,
        },
      ],
      examples: [
        {
          title: 'Core types on the canvas',
          code: `function setup() {\n  createCanvas(320, 180);\n  background(20, 30, 40);\n  fill(255);\n  let score = 12;          // number\n  let label = "score";     // string\n  let ready = true;        // boolean\n  let sizes = [20, 30, 40]; // array\n  text(label + "=" + score, 20, 40);\n  text("ready=" + ready, 20, 70);\n  text("first size=" + sizes[0], 20, 100);\n  text("typeof score: " + typeof score, 20, 140);\n}`,
          note: 'Same sketch can hold several types; typeof helps you check.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Store each kind',
          prompt: 'In setup, create a canvas, then declare n = 5, label = "hi", ok = false, and draw text for each (use text with + or separate text calls).',
          difficulty: 1,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(30);\n  fill(255);\n  // let n = 5; let label = "hi"; let ok = false;\n  // text each value on the canvas\n}\n`,
          tests: [
            { id: 't1', description: 'Declares n', hint: 'let n = 5', kind: 'codeMatches', expect: 'let\\s+n\\s*=' },
            { id: 't2', description: 'Declares label string', hint: 'let label = "hi"', kind: 'codeIncludes', expect: 'label' },
            { id: 't3', description: 'Uses false boolean', hint: 'ok = false (no quotes)', kind: 'codeMatches', expect: '\\bfalse\\b' },
            { id: 't4', description: 'Uses text', hint: 'text(...)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
        {
          id: 'p2',
          title: 'Ask the type',
          prompt: 'Create a canvas and draw text(typeof 7, ...) somewhere (or text that includes typeof 7).',
          difficulty: 2,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  // text(typeof 7, x, y)\n}\n`,
          tests: [
            { id: 't1', description: 'Uses typeof', hint: 'typeof 7', kind: 'codeIncludes', expect: 'typeof' },
            { id: 't2', description: 'Uses text', hint: 'text(...)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
      ],
    },
    {
      id: 'p5-ess-numbers',
      title: 'Numbers',
      summary: 'Whole and decimal values — positions, sizes, scores.',
      runner: 'processing',
      sections: [
        {
          heading: 'Define: number',
          body: `A number is an integer or decimal: 0, 42, 3.14, -10. In p5.js there isn’t a separate “int” type — both are number.`,
        },
        {
          heading: 'When to use numbers',
          body: `• x/y positions, width/height, speeds\n• Scores and counters\n• Color channels: fill(255, 80, 0)\n• Anything you’ll add, subtract, or compare mathematically`,
        },
        {
          heading: 'What numbers can’t be',
          body: `• Not text — "3" + "4" joins strings. Convert with Number("3") if you need math.\n• Don’t use a string of digits as a position without converting.\n• Array indexes should be whole numbers (0, 1, 2…), not random floats.`,
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
      ],
    },
    {
      id: 'p5-ess-strings',
      title: 'Strings (text)',
      summary: 'Text values for labels on the canvas.',
      runner: 'processing',
      sections: [
        {
          heading: 'Define: string',
          body: `A string is text in "double" or 'single' quotes: "hello", "score", "".\n\nEmpty string "" has length 0. "code".length is 4.`,
        },
        {
          heading: 'When to use strings',
          body: `• Labels: text("hello", x, y)\n• Messages and names\n• Building captions with +: text("x=" + x, 10, 20)`,
        },
        {
          heading: 'What strings can’t do',
          body: `• "10" + 1 is "101", not 11 — convert with Number("10") for math.\n• The string "true" is not a boolean.\n• Don’t forget quotes — without them, Processing thinks you meant a variable name.`,
        },
      ],
      examples: [
        {
          title: 'Join a label',
          code: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  let name = "Ada";\n  text("Player: " + name, 20, 40);\n}`,
          note: '+ joins text; numbers join into text when one side is a string.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Draw hello',
          prompt: 'Create a canvas, set a background, and call text with the word hello.',
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
          title: 'Join number into text',
          prompt: 'Declare let n = 7; and draw text that includes n with +.',
          difficulty: 2,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(30);\n  fill(255);\n  // let n = 7; text("n=" + n, ...)\n}\n`,
          tests: [
            { id: 't1', description: 'Declares n', hint: 'let n = 7', kind: 'codeMatches', expect: 'let\\s+n\\s*=' },
            { id: 't2', description: 'Joins with +', hint: 'text("..." + n, ...)', kind: 'codeMatches', expect: 'text\\s*\\([^)]*\\+' },
          ],
        },
      ],
    },
    {
      id: 'p5-ess-booleans',
      title: 'Booleans (true / false)',
      summary: 'Yes/no values for toggles and if checks.',
      runner: 'processing',
      sections: [
        {
          heading: 'Define: boolean',
          body: `A boolean is only true or false (lowercase in p5.js). Nothing else is a boolean — not "true", not 1.\n\nComparisons produce booleans: mouseX > width / 2.`,
        },
        {
          heading: 'When to use booleans',
          body: `• Flags: let on = true;\n• if (on) { ... } else { ... }\n• Storing comparison results: let onLeft = mouseX < width / 2;`,
        },
        {
          heading: 'What booleans aren’t',
          body: `• "true" with quotes is a string.\n• = assigns; === compares — don’t mix them up.\n• Prefer real true/false over 1/0 unless you’re doing numeric math on purpose.`,
        },
      ],
      examples: [
        {
          title: 'Boolean drives color',
          code: `function setup() {\n  createCanvas(320, 160);\n  let ready = true;\n  if (ready) {\n    background(40, 120, 80);\n  } else {\n    background(120, 40, 40);\n  }\n  fill(255);\n  text("ready=" + ready, 20, 40);\n}`,
          note: 'if uses a boolean to choose what to draw.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Boolean variable',
          prompt: 'Declare let ready = true; and use ready somehow (in text or an if).',
          difficulty: 2,
          starterCode: `function setup() {\n  createCanvas(320, 160);\n  background(30);\n  fill(255);\n  // let ready = true; then text or if\n}\n`,
          tests: [
            { id: 't1', description: 'Declares ready', hint: 'let ready = true', kind: 'codeMatches', expect: 'let\\s+ready\\s*=\\s*true' },
            { id: 't2', description: 'Uses ready', hint: 'Mention ready after declaring it', kind: 'codeMatches', expect: 'ready' },
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
      ],
    },
    {
      id: 'p5-ess-arrays',
      title: 'Arrays (collections)',
      summary: 'Ordered collections of values — define, when to use in sketches, what they can’t do.',
      runner: 'processing',
      sections: [
        {
          heading: 'Define: array',
          body: `An array is an ordered collection of values in square brackets: let xs = [10, 20, 30].\n\nIndexes start at 0: xs[0] is 10. xs.length is how many items (3).`,
        },
        {
          heading: 'When to use arrays in sketches',
          body: `• Many related numbers: x positions, sizes, scores\n• Loop through every item to draw or label each one\n• Grow a collection: xs.push(40)\n\nfor (let i = 0; i < xs.length; i++) { text(xs[i], 20, 30 + i * 20); }`,
        },
        {
          heading: 'What arrays can’t do',
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
      summary: 'Check types and produce true/false with comparisons.',
      runner: 'processing',
      sections: [
        {
          heading: 'typeof',
          body: `typeof 5 is "number", typeof "hi" is "string", typeof true is "boolean", typeof [1, 2] is "object" (arrays are a special kind of object in JavaScript).\n\nDraw it: text(typeof 5, 10, 20);`,
        },
        {
          heading: 'Comparisons',
          body: `=== checks equal value and type. >= > <= < !== compare values and produce booleans.\n\nif (mouseX > width / 2) { fill(255, 80, 80); } else { fill(80, 180, 255); }`,
        },
        {
          heading: 'What comparisons can’t do',
          body: `• = assigns; === compares — don’t mix them up.\n• Comparing a string to a number with == may coerce types unexpectedly; prefer ===.\n• typeof returns a string ("number"), not a number — don’t use it for math.`,
        },
      ],
      examples: [
        {
          title: 'Show typeof',
          code: `function setup() {\n  createCanvas(320, 160);\n  background(20);\n  fill(255);\n  text(typeof 5, 20, 40);\n  text(typeof "hi", 20, 70);\n  text(typeof true, 20, 100);\n}`,
          note: 'Useful when debugging weird values.',
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
      ],
    },
  ],
}
