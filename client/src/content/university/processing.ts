import type { LanguageTrack } from '../../types'

export const processingUniversity: LanguageTrack = {
  id: 'processing',
  name: 'Processing',
  tagline: 'Systems, noise, and object-oriented sketches.',
  accent: '#d4a1ff',
  tier: 'university',
  modules: [
    {
      id: 'p5-u-data',
      title: 'Data-driven sketches',
      summary: 'Drive many shapes from arrays and objects.',
      lessons: [
        {
          id: 'p5-u-array',
          title: 'Arrays of values',
          summary: 'Drive many shapes from data.',
          runner: 'processing',
          sections: [
            {
              heading: 'Scale by data',
              body: `Store positions in arrays and loop to draw. University sketches scale by data, not copy-paste.\n\nIndex with i and use .length so the loop stays in bounds.`,
            },
            {
              heading: 'Parallel arrays',
              body: `Sometimes one array holds x and another holds y. Keep lengths in sync, or prefer objects when the sketch grows.`,
            },
          ],
          examples: [
            {
              title: 'xs row',
              code: `let xs = [40, 100, 160, 220];\nfunction setup() {\n  createCanvas(300, 160);\n  background(12);\n  fill(200, 245, 66);\n  noStroke();\n  for (let i = 0; i < xs.length; i++) {\n    ellipse(xs[i], 80, 24, 24);\n  }\n}`,
              note: 'Index with i and use .length.',
            },
            {
              title: 'ys column',
              code: `let ys = [40, 80, 120];\nfunction setup() {\n  createCanvas(300, 180);\n  background(12);\n  fill(94, 200, 255);\n  for (let i = 0; i < ys.length; i++) {\n    ellipse(150, ys[i], 20, 20);\n  }\n}`,
              note: 'Same idea on the y axis.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Loop ys',
              prompt: 'Loop ys and draw an ellipse at (150, ys[i]).',
              difficulty: 1,
              starterCode: `let ys = [40, 80, 120];\nfunction setup() {\n  createCanvas(300, 180);\n  background(12);\n  // Loop ys and draw an ellipse at (150, ys[i])\n}\n`,
              tests: [
                { id: 't1', description: 'Loops the array', hint: 'for (let i = 0; i < ys.length; i++)', kind: 'codeIncludes', expect: 'ys.length' },
                { id: 't2', description: 'Draws ellipses', hint: 'ellipse(150, ys[i], ...)', kind: 'codeIncludes', expect: 'ellipse(' },
              ],
            },
            {
              id: 'p2',
              title: 'Loop xs',
              prompt: 'Given xs, loop and draw ellipses using xs[i] for x.',
              difficulty: 2,
              starterCode: `let xs = [50, 120, 190, 260];\nfunction setup() {\n  createCanvas(320, 160);\n  background(10);\n  fill(212, 161, 255);\n}\n`,
              tests: [
                { id: 't1', description: 'Uses xs.length', hint: 'xs.length', kind: 'codeIncludes', expect: 'xs.length' },
                { id: 't2', description: 'Uses xs[i]', hint: 'xs[i]', kind: 'codeIncludes', expect: 'xs[' },
                { id: 't3', description: 'Draws ellipse', hint: 'ellipse(', kind: 'codeIncludes', expect: 'ellipse(' },
              ],
            },
            {
              id: 'p3',
              title: 'Sizes array',
              prompt: 'Loop a sizes array and draw ellipses whose diameter uses sizes[i].',
              difficulty: 3,
              starterCode: `let sizes = [10, 20, 30, 40];\nfunction setup() {\n  createCanvas(320, 160);\n  background(8);\n}\n`,
              tests: [
                { id: 't1', description: 'Uses sizes', hint: 'sizes[i]', kind: 'codeIncludes', expect: 'sizes' },
                { id: 't2', description: 'Has for loop', hint: 'for (', kind: 'codeIncludes', expect: 'for' },
                { id: 't3', description: 'Draws ellipse', hint: 'ellipse(', kind: 'codeIncludes', expect: 'ellipse(' },
              ],
            },
          ],
        },
        {
          id: 'p5-u-class',
          title: 'Sketch classes',
          summary: 'Objects with update/draw.',
          runner: 'processing',
          sections: [
            {
              heading: 'Why classes in sketches?',
              body: `Define a class with position and a method to display. Create instances in setup. Classes keep state tidy as sketches grow beyond a few variables.`,
            },
            {
              heading: 'constructor and methods',
              body: `constructor(x, y) { this.x = x; this.y = y; } stores state on the instance. show() draws using this.x / this.y.`,
            },
          ],
          examples: [
            {
              title: 'Dot',
              code: `class Dot {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n  show() {\n    ellipse(this.x, this.y, 20, 20);\n  }\n}\nlet d;\nfunction setup() {\n  createCanvas(300, 160);\n  d = new Dot(150, 80);\n}\nfunction draw() {\n  background(10);\n  fill(212, 161, 255);\n  d.show();\n}`,
              note: 'Classes keep state tidy as sketches grow.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Ball class',
              prompt: 'class Ball with constructor(x,y) and show() drawing an ellipse. Create one in setup; in draw, clear and show it.',
              difficulty: 1,
              starterCode: `// class Ball with constructor(x,y) and show() drawing an ellipse\n// In setup, create canvas and a Ball; in draw, clear and show it\n`,
              tests: [
                { id: 't1', description: 'Defines Ball class', hint: 'class Ball { ... }', kind: 'codeIncludes', expect: 'class Ball' },
                { id: 't2', description: 'Uses new Ball', hint: 'new Ball(...)', kind: 'codeIncludes', expect: 'new Ball' },
                { id: 't3', description: 'Has show method usage', hint: 'ball.show() or similar', kind: 'codeIncludes', expect: '.show(' },
              ],
            },
            {
              id: 'p2',
              title: 'Two balls',
              prompt: 'Create two Ball instances and show both in draw.',
              difficulty: 2,
              starterCode: `class Ball {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n  show() {\n    ellipse(this.x, this.y, 20, 20);\n  }\n}\n// two balls\n`,
              tests: [
                { id: 't1', description: 'new Ball appears twice', hint: 'two new Ball(...)', kind: 'codeMatches', expect: 'new\\s+Ball[\\s\\S]*new\\s+Ball' },
                { id: 't2', description: 'Calls show', hint: '.show(', kind: 'codeIncludes', expect: '.show(' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'p5-u-motion',
      title: 'Organic motion & transforms',
      summary: 'Noise fields and rotate/translate.',
      lessons: [
        {
          id: 'p5-u-noise',
          title: 'Perlin noise',
          summary: 'Organic motion with noise().',
          runner: 'processing',
          sections: [
            {
              heading: 'Smooth randomness',
              body: `noise(t) returns smooth 0–1 values. Walk t forward each frame for natural motion — unlike random(), neighbors in t are related.`,
            },
            {
              heading: 'Mapping to the canvas',
              body: `Multiply by width or height: let x = noise(t) * width;. Small steps in t (0.01) keep motion smooth.`,
            },
          ],
          examples: [
            {
              title: 'Drifting x',
              code: `let t = 0;\nfunction setup() {\n  createCanvas(300, 160);\n}\nfunction draw() {\n  background(12);\n  let x = noise(t) * width;\n  fill(94, 200, 255);\n  ellipse(x, height / 2, 30, 30);\n  t += 0.01;\n}`,
              note: 'Small steps in t keep motion smooth.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Noise x',
              prompt: 'Place an ellipse using noise(t) for x, then increase t.',
              difficulty: 1,
              starterCode: `let t = 0;\nfunction setup() {\n  createCanvas(300, 160);\n}\nfunction draw() {\n  background(12);\n  // Place an ellipse using noise(t) for x, then increase t\n}\n`,
              tests: [
                { id: 't1', description: 'Uses noise', hint: 'noise(t)', kind: 'codeIncludes', expect: 'noise(' },
                { id: 't2', description: 'Animates in draw', hint: 'function draw', kind: 'codeIncludes', expect: 'function draw' },
                { id: 't3', description: 'Draws ellipse', hint: 'ellipse(...)', kind: 'codeIncludes', expect: 'ellipse(' },
              ],
            },
            {
              id: 'p2',
              title: 'Advance t',
              prompt: 'Make sure t increases each frame (t += ...).',
              difficulty: 2,
              starterCode: `let t = 0;\nfunction setup() {\n  createCanvas(300, 160);\n}\nfunction draw() {\n  background(12);\n  ellipse(noise(t) * width, 80, 24, 24);\n  // advance t\n}\n`,
              tests: [
                { id: 't1', description: 'Increments t', hint: 't += 0.01', kind: 'codeMatches', expect: 't\\s*(\\+=|=\\s*t\\s*\\+)' },
                { id: 't2', description: 'Uses noise', hint: 'noise(', kind: 'codeIncludes', expect: 'noise(' },
              ],
            },
          ],
        },
        {
          id: 'p5-u-transform',
          title: 'Transforms',
          summary: 'translate and rotate.',
          runner: 'processing',
          sections: [
            {
              heading: 'Moving the origin',
              body: `translate moves the origin. rotate spins around it. After translate(width/2, height/2), (0,0) is the center.`,
            },
            {
              heading: 'push / pop',
              body: `Use push() / pop() to isolate transforms so one spinning shape doesn’t affect everything else.`,
            },
          ],
          examples: [
            {
              title: 'Spinning rect',
              code: `function setup() {\n  createCanvas(300, 160);\n}\nfunction draw() {\n  background(8);\n  translate(width / 2, height / 2);\n  rotate(frameCount * 0.02);\n  fill(255, 180, 70);\n  rect(-20, -20, 40, 40);\n}`,
              note: 'After translate, (0,0) is the center.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Center spin',
              prompt: 'translate to center, rotate a little, draw a rect.',
              difficulty: 1,
              starterCode: `function setup() {\n  createCanvas(300, 160);\n}\nfunction draw() {\n  background(8);\n  // translate to center, rotate a little, draw a rect\n}\n`,
              tests: [
                { id: 't1', description: 'Uses translate', hint: 'translate(width/2, height/2)', kind: 'codeIncludes', expect: 'translate(' },
                { id: 't2', description: 'Uses rotate', hint: 'rotate(...)', kind: 'codeIncludes', expect: 'rotate(' },
                { id: 't3', description: 'Draws rect', hint: 'rect(...)', kind: 'codeIncludes', expect: 'rect(' },
              ],
            },
            {
              id: 'p2',
              title: 'push/pop',
              prompt: 'Wrap your transforms in push() and pop().',
              difficulty: 2,
              starterCode: `function setup() {\n  createCanvas(300, 160);\n}\nfunction draw() {\n  background(8);\n  // push, translate, rotate, rect, pop\n}\n`,
              tests: [
                { id: 't1', description: 'Uses push', hint: 'push()', kind: 'codeIncludes', expect: 'push(' },
                { id: 't2', description: 'Uses pop', hint: 'pop()', kind: 'codeIncludes', expect: 'pop(' },
                { id: 't3', description: 'Uses rotate', hint: 'rotate(', kind: 'codeIncludes', expect: 'rotate(' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
