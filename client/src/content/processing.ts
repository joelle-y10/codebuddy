import type { LanguageTrack } from '../types'
import { processingCraftModule } from './craft/processing'
import { processingEssentialsModule } from './essentials/processing'

export const processingTrack: LanguageTrack = {
  id: 'processing',
  name: 'Processing',
  tagline: 'Creative coding with shapes and motion.',
  accent: '#d4a1ff',
  tier: 'basic',
  modules: [
    processingEssentialsModule,
    processingCraftModule,
    {
      id: 'p5-start',
      title: 'Canvas & setup',
      summary: 'After coding terms & types: create a drawing surface and clear it with color.',
      lessons: [
        {
          id: 'p5-canvas',
          title: 'setup & canvas',
          summary: 'createCanvas and background — every sketch starts here.',
          runner: 'processing',
          sections: [
            {
              heading: 'How sketches run',
              body: `Processing sketches (we use p5.js in the browser) call setup() once when the program starts. That’s where you create the canvas and set initial state.\n\ncreateCanvas(w, h) makes the drawing surface. background(r, g, b) fills it with a color (RGB 0–255).`,
            },
            {
              heading: 'Coordinates',
              body: `The origin (0, 0) is the top-left corner. x grows to the right; y grows downward. width and height match the canvas size after createCanvas.`,
            },
            {
              heading: 'Gray vs RGB',
              body: `background(20) is a gray shorthand. background(20, 30, 40) sets red, green, and blue separately. Experiment — color choices define mood.`,
            },
          ],
          examples: [
            {
              title: 'Dark canvas',
              code: `function setup() {\n  createCanvas(320, 200);\n  background(20, 30, 40);\n}`,
              note: 'Colors are RGB 0–255.',
            },
            {
              title: 'Gray fill',
              code: `function setup() {\n  createCanvas(360, 240);\n  background(12);\n}`,
              note: 'One argument = grayscale.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Sized canvas',
              prompt: 'Create a 360x240 canvas and a dark background.',
              difficulty: 1,
              starterCode: `function setup() {\n  // Create a 360x240 canvas and a dark background\n}\n`,
              tests: [
                { id: 't1', description: 'Calls createCanvas', hint: 'createCanvas(360, 240);', kind: 'codeIncludes', expect: 'createCanvas' },
                { id: 't2', description: 'Sets background', hint: 'background(...);', kind: 'codeIncludes', expect: 'background' },
                { id: 't3', description: 'Has setup', hint: 'function setup() { ... }', kind: 'codeIncludes', expect: 'function setup' },
              ],
            },
            {
              id: 'p2',
              title: 'Exact size',
              prompt: 'Call createCanvas(360, 240) specifically.',
              difficulty: 2,
              starterCode: `function setup() {\n  // exact size 360 by 240\n}\n`,
              tests: [
                { id: 't1', description: '360x240 canvas', hint: 'createCanvas(360, 240)', kind: 'codeIncludes', expect: 'createCanvas(360, 240)' },
                { id: 't2', description: 'Has background', hint: 'background(...)', kind: 'codeIncludes', expect: 'background' },
              ],
            },
            {
              id: 'p3',
              title: 'RGB mood',
              prompt: 'Use an RGB background with three arguments (not a single gray).',
              difficulty: 2,
              starterCode: `function setup() {\n  createCanvas(360, 240);\n  // RGB background\n}\n`,
              tests: [
                { id: 't1', description: 'RGB background call', hint: 'background(r, g, b)', kind: 'codeMatches', expect: 'background\\s*\\([^)]+,[^)]+,[^)]+\\)' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'p5-drawing',
      title: 'Shapes & style',
      summary: 'Draw ellipses, rects, and lines with fill and stroke.',
      lessons: [
        {
          id: 'p5-shapes',
          title: 'Shapes',
          summary: 'ellipse, rect, line.',
          runner: 'processing',
          sections: [
            {
              heading: 'Primitive shapes',
              body: `ellipse(x, y, w, h) draws an oval (circle when w === h). Default mode centers the ellipse on (x, y).\n\nrect(x, y, w, h) draws a rectangle from its top-left corner by default. line(x1, y1, x2, y2) connects two points.`,
            },
            {
              heading: 'Order of drawing',
              body: `Later shapes paint over earlier ones. Set fill and stroke before the shape you want them to affect.`,
            },
          ],
          examples: [
            {
              title: 'Centered circle',
              code: `function setup() {\n  createCanvas(320, 200);\n  background(15);\n  fill(200, 245, 66);\n  noStroke();\n  ellipse(160, 100, 80, 80);\n}`,
              note: 'Default ellipse mode is center.',
            },
            {
              title: 'Rect + line',
              code: `function setup() {\n  createCanvas(320, 200);\n  background(10);\n  fill(94, 200, 255);\n  rect(40, 40, 80, 60);\n  stroke(255);\n  line(40, 160, 280, 160);\n}`,
              note: 'Mix filled shapes and stroked lines.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Draw a circle',
              prompt: 'Draw a filled ellipse somewhere on the canvas.',
              difficulty: 1,
              starterCode: `function setup() {\n  createCanvas(360, 240);\n  background(12, 18, 24);\n  // Draw a filled ellipse somewhere on the canvas\n}\n`,
              tests: [
                { id: 't1', description: 'Draws an ellipse', hint: 'ellipse(x, y, w, h);', kind: 'codeIncludes', expect: 'ellipse(' },
                { id: 't2', description: 'Uses fill', hint: 'fill(r, g, b);', kind: 'codeIncludes', expect: 'fill(' },
              ],
            },
            {
              id: 'p2',
              title: 'Add a rect',
              prompt: 'Also draw a rect on the same canvas.',
              difficulty: 2,
              starterCode: `function setup() {\n  createCanvas(360, 240);\n  background(12);\n  fill(200, 245, 66);\n  // ellipse and rect\n}\n`,
              tests: [
                { id: 't1', description: 'Has ellipse', hint: 'ellipse(', kind: 'codeIncludes', expect: 'ellipse(' },
                { id: 't2', description: 'Has rect', hint: 'rect(', kind: 'codeIncludes', expect: 'rect(' },
              ],
            },
            {
              id: 'p3',
              title: 'Draw a line',
              prompt: 'Draw a line across the canvas with stroke set.',
              difficulty: 2,
              starterCode: `function setup() {\n  createCanvas(360, 240);\n  background(8);\n  // stroke + line\n}\n`,
              tests: [
                { id: 't1', description: 'Uses stroke', hint: 'stroke(...)', kind: 'codeIncludes', expect: 'stroke(' },
                { id: 't2', description: 'Draws line', hint: 'line(x1,y1,x2,y2)', kind: 'codeIncludes', expect: 'line(' },
              ],
            },
          ],
        },
        {
          id: 'p5-color',
          title: 'Color & style',
          summary: 'fill, stroke, strokeWeight, noFill.',
          runner: 'processing',
          sections: [
            {
              heading: 'Fill vs stroke',
              body: `fill sets the interior color. stroke sets the outline. noFill() and noStroke() turn those off.\n\nstrokeWeight(n) controls outline thickness in pixels.`,
            },
            {
              heading: 'Style before shape',
              body: `Order matters: set style, then draw. Styles persist until you change them — a later fill affects later shapes.`,
            },
          ],
          examples: [
            {
              title: 'Outlined rect',
              code: `function setup() {\n  createCanvas(320, 200);\n  background(8);\n  noFill();\n  stroke(200, 245, 66);\n  strokeWeight(4);\n  rect(60, 40, 200, 120);\n}`,
              note: 'Order matters: set style before drawing.',
            },
            {
              title: 'Filled then outlined',
              code: `function setup() {\n  createCanvas(320, 200);\n  background(12);\n  fill(255, 100, 80);\n  noStroke();\n  ellipse(100, 100, 60, 60);\n  noFill();\n  stroke(255);\n  strokeWeight(2);\n  ellipse(200, 100, 60, 60);\n}`,
              note: 'Two different styles on one canvas.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Thick outline',
              prompt: 'Draw an outlined rect with strokeWeight at least 3.',
              difficulty: 1,
              starterCode: `function setup() {\n  createCanvas(360, 240);\n  background(8);\n  // Draw an outlined rect with strokeWeight at least 3\n}\n`,
              tests: [
                { id: 't1', description: 'Sets strokeWeight', hint: 'strokeWeight(3); or higher', kind: 'codeIncludes', expect: 'strokeWeight' },
                { id: 't2', description: 'Uses stroke', hint: 'stroke(r,g,b);', kind: 'codeIncludes', expect: 'stroke(' },
                { id: 't3', description: 'Draws rect', hint: 'rect(...);', kind: 'codeIncludes', expect: 'rect(' },
              ],
            },
            {
              id: 'p2',
              title: 'noFill outline',
              prompt: 'Use noFill() and draw an ellipse outline.',
              difficulty: 2,
              starterCode: `function setup() {\n  createCanvas(360, 240);\n  background(8);\n}\n`,
              tests: [
                { id: 't1', description: 'Uses noFill', hint: 'noFill()', kind: 'codeIncludes', expect: 'noFill' },
                { id: 't2', description: 'Draws ellipse', hint: 'ellipse(', kind: 'codeIncludes', expect: 'ellipse(' },
              ],
            },
            {
              id: 'p3',
              title: 'noStroke fill',
              prompt: 'Use noStroke() and a filled rect.',
              difficulty: 2,
              starterCode: `function setup() {\n  createCanvas(360, 240);\n  background(8);\n}\n`,
              tests: [
                { id: 't1', description: 'Uses noStroke', hint: 'noStroke()', kind: 'codeIncludes', expect: 'noStroke' },
                { id: 't2', description: 'Draws rect', hint: 'rect(', kind: 'codeIncludes', expect: 'rect(' },
                { id: 't3', description: 'Uses fill', hint: 'fill(', kind: 'codeIncludes', expect: 'fill(' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'p5-vars',
      title: 'Variables in sketches',
      summary: 'Store positions and sizes so you can change one number.',
      lessons: [
        {
          id: 'p5-vars-basics',
          title: 'Positions and sizes',
          summary: 'let bindings make sketches editable.',
          runner: 'processing',
          sections: [
            {
              heading: 'Why variables?',
              body: `Hard-coded numbers scatter through a sketch. let x = 80; let size = 40; lets you change position or size in one place.\n\nDeclare variables inside setup for one-shot drawings, or outside (global) when draw needs them every frame.`,
            },
            {
              heading: 'Reuse in multiple shapes',
              body: `One size variable can drive width and height of a square, or spacing between several shapes.`,
            },
          ],
          examples: [
            {
              title: 'Sized square',
              code: `function setup() {\n  createCanvas(320, 200);\n  let x = 80;\n  let y = 100;\n  background(10);\n  fill(94, 200, 255);\n  rect(x, y, 40, 40);\n}`,
              note: 'Declare variables inside setup for one-shot drawings.',
            },
            {
              title: 'Shared size',
              code: `function setup() {\n  createCanvas(320, 200);\n  background(10);\n  let size = 50;\n  fill(212, 161, 255);\n  ellipse(100, 100, size, size);\n  ellipse(200, 100, size, size);\n}`,
              note: 'Change size once to resize both.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Use size',
              prompt: 'Draw a rect that uses the size variable for width and height.',
              difficulty: 1,
              starterCode: `function setup() {\n  createCanvas(360, 240);\n  background(10);\n  let size = 60;\n  // Draw a rect that uses the size variable for width and height\n}\n`,
              tests: [
                { id: 't1', description: 'Uses size variable', hint: 'rect(..., size, size)', kind: 'codeIncludes', expect: 'size' },
                { id: 't2', description: 'Draws rect', hint: 'rect(x, y, size, size);', kind: 'codeIncludes', expect: 'rect(' },
              ],
            },
            {
              id: 'p2',
              title: 'Position vars',
              prompt: 'Declare let x and let y, then draw an ellipse at (x, y).',
              difficulty: 2,
              starterCode: `function setup() {\n  createCanvas(360, 240);\n  background(10);\n  // x, y, ellipse\n}\n`,
              tests: [
                { id: 't1', description: 'Declares x', hint: 'let x = ...', kind: 'codeMatches', expect: 'let\\s+x\\s*=' },
                { id: 't2', description: 'Declares y', hint: 'let y = ...', kind: 'codeMatches', expect: 'let\\s+y\\s*=' },
                { id: 't3', description: 'Draws ellipse', hint: 'ellipse(x, y, ...)', kind: 'codeIncludes', expect: 'ellipse(' },
              ],
            },
            {
              id: 'p3',
              title: 'Two shapes, one size',
              prompt: 'Use one size variable for both an ellipse and a rect.',
              difficulty: 3,
              starterCode: `function setup() {\n  createCanvas(360, 240);\n  background(10);\n  let size = 40;\n}\n`,
              tests: [
                { id: 't1', description: 'Has ellipse', hint: 'ellipse(', kind: 'codeIncludes', expect: 'ellipse(' },
                { id: 't2', description: 'Has rect', hint: 'rect(', kind: 'codeIncludes', expect: 'rect(' },
                { id: 't3', description: 'Mentions size', hint: 'use size', kind: 'codeIncludes', expect: 'size' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'p5-motion',
      title: 'Motion & the draw loop',
      summary: 'Repeat every frame — the creative coding loop.',
      lessons: [
        {
          id: 'p5-draw',
          title: 'The draw loop',
          summary: 'Animate by changing values each frame.',
          runner: 'processing',
          sections: [
            {
              heading: 'Why draw exists',
              body: `setup() runs once. draw() runs about 60 times per second. That’s how animation works: each frame, clear (optional), draw shapes, update variables.\n\nPut let x = 0; outside so it persists between frames. Inside draw, change x a little each time.`,
            },
            {
              heading: 'Clearing trails',
              body: `Call background(...) at the start of draw to erase the previous frame. Skip it if you want paint trails.`,
            },
            {
              heading: 'Wrapping and bouncing',
              body: `When a moving shape leaves the canvas, reset it (if (x > width) x = 0) or reverse direction. width and height match the canvas.`,
            },
          ],
          examples: [
            {
              title: 'Moving ellipse',
              code: `let x = 0;\nfunction setup() {\n  createCanvas(320, 200);\n}\nfunction draw() {\n  background(20);\n  fill(255, 180, 70);\n  ellipse(x, 100, 30, 30);\n  x = x + 2;\n  if (x > width) x = 0;\n}`,
              note: 'width and height match the canvas.',
            },
            {
              title: 'Vertical drift',
              code: `let y = 0;\nfunction setup() {\n  createCanvas(320, 200);\n}\nfunction draw() {\n  background(12);\n  fill(94, 200, 255);\n  ellipse(160, y, 24, 24);\n  y += 1;\n  if (y > height) y = 0;\n}`,
              note: 'Same idea on the y axis.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Moving down',
              prompt: 'Clear, draw a moving ellipse using y, then increase y.',
              difficulty: 1,
              starterCode: `let y = 0;\nfunction setup() {\n  createCanvas(360, 240);\n}\nfunction draw() {\n  // Clear, draw a moving ellipse using y, then increase y\n}\n`,
              tests: [
                { id: 't1', description: 'Defines draw', hint: 'function draw() { ... }', kind: 'codeIncludes', expect: 'function draw' },
                { id: 't2', description: 'Uses background in draw', hint: 'Call background inside draw', kind: 'codeIncludes', expect: 'background' },
                { id: 't3', description: 'Draws ellipse', hint: 'ellipse(...);', kind: 'codeIncludes', expect: 'ellipse(' },
              ],
            },
            {
              id: 'p2',
              title: 'Update the variable',
              prompt: 'Make sure y changes somehow inside draw (y = y + ... or y += ...).',
              difficulty: 2,
              starterCode: `let y = 0;\nfunction setup() {\n  createCanvas(360, 240);\n}\nfunction draw() {\n  background(20);\n  ellipse(180, y, 30, 30);\n  // update y\n}\n`,
              tests: [
                { id: 't1', description: 'Updates y', hint: 'y += 1 or y = y + 1', kind: 'codeMatches', expect: 'y\\s*(\\+=|=\\s*y\\s*\\+)' },
                { id: 't2', description: 'Has draw', hint: 'function draw', kind: 'codeIncludes', expect: 'function draw' },
              ],
            },
            {
              id: 'p3',
              title: 'Wrap around',
              prompt: 'If y goes past height, reset y to 0.',
              difficulty: 3,
              starterCode: `let y = 0;\nfunction setup() {\n  createCanvas(360, 240);\n}\nfunction draw() {\n  background(20);\n  ellipse(180, y, 30, 30);\n  y += 2;\n  // wrap when off-screen\n}\n`,
              tests: [
                { id: 't1', description: 'Checks height', hint: 'if (y > height) y = 0', kind: 'codeIncludes', expect: 'height' },
                { id: 't2', description: 'Uses if', hint: 'if (', kind: 'codeIncludes', expect: 'if' },
              ],
            },
          ],
        },
        {
          id: 'p5-loop-patterns',
          title: 'Drawing with for loops',
          summary: 'Repeat shapes in patterns — loops meet graphics.',
          runner: 'processing',
          sections: [
            {
              heading: 'Loops inside setup or draw',
              body: `A for loop can place many shapes without copy-paste. In setup, that builds a static pattern. In draw, you can animate the whole grid.\n\nfor (let i = 0; i < 5; i++) { ellipse(40 + i * 50, 100, 20, 20); }`,
            },
            {
              heading: 'Nested patterns',
              body: `Nested loops build grids: outer loop for rows, inner loop for columns. Trace (row, col) on paper when spacing looks wrong.`,
            },
            {
              heading: 'Spacing math',
              body: `Start + i * gap is the classic formula. Choose start so the first shape sits where you want; choose gap for breathing room.`,
            },
          ],
          examples: [
            {
              title: 'Row of circles',
              code: `function setup() {\n  createCanvas(320, 160);\n  background(12);\n  fill(200, 245, 66);\n  noStroke();\n  for (let i = 0; i < 5; i++) {\n    ellipse(40 + i * 50, 80, 24, 24);\n  }\n}`,
              note: 'Five ellipses, even spacing.',
            },
            {
              title: 'Simple grid',
              code: `function setup() {\n  createCanvas(300, 200);\n  background(10);\n  fill(94, 200, 255);\n  for (let r = 0; r < 3; r++) {\n    for (let c = 0; c < 4; c++) {\n      ellipse(40 + c * 60, 40 + r * 50, 20, 20);\n    }\n  }\n}`,
              note: 'Outer rows, inner columns.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Five dots',
              prompt: 'Use a for loop to draw at least 5 ellipses in a row.',
              difficulty: 1,
              starterCode: `function setup() {\n  createCanvas(360, 200);\n  background(12);\n  fill(200, 245, 66);\n  // for loop of ellipses\n}\n`,
              tests: [
                { id: 't1', description: 'Uses for', hint: 'for (let i = 0; ...)', kind: 'codeIncludes', expect: 'for' },
                { id: 't2', description: 'Draws ellipse', hint: 'ellipse(', kind: 'codeIncludes', expect: 'ellipse(' },
              ],
            },
            {
              id: 'p2',
              title: 'Index in position',
              prompt: 'Use the loop variable i when computing x (something like i * 40).',
              difficulty: 2,
              starterCode: `function setup() {\n  createCanvas(360, 200);\n  background(12);\n  // space ellipses with i\n}\n`,
              tests: [
                { id: 't1', description: 'Uses i in expression', hint: 'i * gap', kind: 'codeMatches', expect: 'i\\s*\\*' },
                { id: 't2', description: 'Has for', hint: 'for (', kind: 'codeIncludes', expect: 'for' },
              ],
            },
            {
              id: 'p3',
              title: 'Nested grid',
              prompt: 'Use nested for loops to draw a small grid of ellipses or rects.',
              difficulty: 3,
              starterCode: `function setup() {\n  createCanvas(360, 240);\n  background(10);\n  // nested loops\n}\n`,
              tests: [
                { id: 't1', description: 'Has two for loops', hint: 'Nest for inside for', kind: 'codeMatches', expect: 'for[\\s\\S]*for' },
                { id: 't2', description: 'Draws shapes', hint: 'ellipse or rect', kind: 'codeMatches', expect: 'ellipse\\(|rect\\(' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'p5-input',
      title: 'Interaction',
      summary: 'Follow the mouse and respond to the pointer.',
      lessons: [
        {
          id: 'p5-mouse',
          title: 'Mouse input',
          summary: 'mouseX and mouseY update every frame.',
          runner: 'processing',
          sections: [
            {
              heading: 'Built-in mouse variables',
              body: `mouseX and mouseY track the cursor over the canvas. In draw, use them as coordinates so a shape follows the pointer.`,
            },
            {
              heading: 'Combining with style',
              body: `Clear with background each frame so you get a single follower, or skip background for a paintbrush trail.`,
            },
          ],
          examples: [
            {
              title: 'Follower',
              code: `function setup() {\n  createCanvas(320, 200);\n}\nfunction draw() {\n  background(12, 16, 22);\n  fill(212, 161, 255);\n  noStroke();\n  ellipse(mouseX, mouseY, 40, 40);\n}`,
              note: 'Move your mouse over the preview.',
            },
            {
              title: 'Paint trail',
              code: `function setup() {\n  createCanvas(320, 200);\n  background(12);\n}\nfunction draw() {\n  // no background clear\n  fill(94, 200, 255, 80);\n  noStroke();\n  ellipse(mouseX, mouseY, 20, 20);\n}`,
              note: 'Skipping background leaves trails.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Follow the mouse',
              prompt: 'Draw a shape at mouseX, mouseY.',
              difficulty: 1,
              starterCode: `function setup() {\n  createCanvas(360, 240);\n}\nfunction draw() {\n  background(12, 16, 22);\n  // Draw a shape at mouseX, mouseY\n}\n`,
              tests: [
                { id: 't1', description: 'Uses mouseX', hint: 'ellipse(mouseX, mouseY, ...)', kind: 'codeIncludes', expect: 'mouseX' },
                { id: 't2', description: 'Uses mouseY', hint: 'Include mouseY', kind: 'codeIncludes', expect: 'mouseY' },
              ],
            },
            {
              id: 'p2',
              title: 'Styled follower',
              prompt: 'Follower ellipse that sets fill and uses noStroke.',
              difficulty: 2,
              starterCode: `function setup() {\n  createCanvas(360, 240);\n}\nfunction draw() {\n  background(12);\n  // fill, noStroke, ellipse at mouse\n}\n`,
              tests: [
                { id: 't1', description: 'Uses fill', hint: 'fill(', kind: 'codeIncludes', expect: 'fill(' },
                { id: 't2', description: 'Uses noStroke', hint: 'noStroke()', kind: 'codeIncludes', expect: 'noStroke' },
                { id: 't3', description: 'Uses mouseX', hint: 'mouseX', kind: 'codeIncludes', expect: 'mouseX' },
              ],
            },
            {
              id: 'p3',
              title: 'Rect follower',
              prompt: 'Draw a rect centered-ish on the mouse (use mouseX and mouseY).',
              difficulty: 2,
              starterCode: `function setup() {\n  createCanvas(360, 240);\n}\nfunction draw() {\n  background(8);\n  // rect near mouse\n}\n`,
              tests: [
                { id: 't1', description: 'Uses rect', hint: 'rect(', kind: 'codeIncludes', expect: 'rect(' },
                { id: 't2', description: 'Uses mouseX', hint: 'mouseX', kind: 'codeIncludes', expect: 'mouseX' },
                { id: 't3', description: 'Uses mouseY', hint: 'mouseY', kind: 'codeIncludes', expect: 'mouseY' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
