import type { Module } from '../../types'

export const processingEssentialsModule: Module = {
  id: 'p5-essentials',
  title: 'Data essentials',
  summary: 'Numbers, strings, booleans, and text on the canvas — coding basics for sketches.',
  lessons: [
    {
      id: 'p5-ess-values',
      title: 'Numbers, strings & booleans',
      summary: 'The same core types every language uses — applied in a sketch.',
      runner: 'processing',
      sections: [
        {
          heading: 'Values drive drawings',
          body: `Sketches use the same building blocks as other languages:\n\n• Numbers position and size shapes: ellipse(x, y, w, h)\n• Strings are text: "score"\n• Booleans are true/false — great for toggles and if checks\n\nProcessing (p5.js) is JavaScript under the hood, so true/false are lowercase.`,
        },
        {
          heading: 'Show values with text()',
          body: `text("hello", x, y) draws a string on the canvas. Combine with + : text("x=" + x, 10, 20).\n\nNumbers join into strings automatically with + when one side is text.`,
        },
        {
          heading: 'Booleans in sketches',
          body: `let on = true; then if (on) { ... }. Comparisons like mouseX > width / 2 produce booleans you can store or use directly in if.`,
        },
      ],
      examples: [
        {
          title: 'Label a value',
          code: `function setup() {\n  createCanvas(320, 160);\n  background(20, 30, 40);\n  fill(255);\n  let score = 12;\n  let ready = true;\n  text("score=" + score, 20, 40);\n  text("ready=" + ready, 20, 70);\n}`,
          note: 'Booleans become the words true/false in text.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Draw labeled text',
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
          id: 'p3',
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
      id: 'p5-ess-types',
      title: 'typeof & comparisons',
      summary: 'Check types and produce true/false with comparisons.',
      runner: 'processing',
      sections: [
        {
          heading: 'typeof',
          body: `Because p5.js is JavaScript, typeof 5 is "number", typeof "hi" is "string", typeof true is "boolean".\n\nYou can draw that on the canvas: text(typeof 5, 10, 20);`,
        },
        {
          heading: 'Comparisons',
          body: `=== checks equal value and type. >= > <= < != (or !==) compare values.\n\nif (mouseX > 160) { fill(255, 80, 80); } else { fill(80, 180, 255); }`,
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
  ],
}
