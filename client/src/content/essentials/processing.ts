import type { Module } from '../../types'

/** First module on every basic track: coding terms, values, variables, and types. */
export const processingEssentialsModule: Module = {
  id: 'p5-essentials',
  title: 'Start here: coding terms & data types',
  summary:
    'Module 1 — learn the words first (value, type, variable), then numbers, strings, booleans, missing values, and arrays. Do this before text()/setup drills or later modules.',
  lessons: [
    {
      id: 'p5-ess-terms',
      title: 'Coding terms you need',
      summary: 'Learn the basic vocabulary before writing sketches: value, type, variable, and statement.',
      runner: 'processing',
      sections: [
        {
          heading: 'Why start with terms?',
          body: `Before you draw text on the canvas or build big sketches, you need the same words every coder uses.

This module is first on purpose. Later lessons (text, if, loops) assume you already know:

• what a value is
• what a type is
• what a variable is

If those words feel fuzzy, stay here until they feel obvious.`,
        },
        {
          heading: 'Glossary',
          body: `• Value — one piece of data, like 7, "Ada", or true
• Type — the kind of value it is (number, string, boolean, …). The type decides what you can do with it
• Variable — a name that stores a value so you can use it later (let score = 10)
• Assignment — the = that puts a value into a variable (not the same as ===, which asks “are these equal?”)
• Statement — one instruction in your program, usually one line
• Expression — something that produces a value, like 3 + 4 or score >= 60
• Canvas / output — where text(...) shows results so you can see a value

text is only a flashlight: it shows a value on the canvas. It is not more important than understanding what that value is.`,
        },
        {
          heading: 'The types you will meet first',
          body: `Memorize these definitions — you will use them in every language track:

• A boolean is a true/false statement (true or false in p5.js)
• A string is a string of letters (and other characters) in quotes: "hello"
• A number can be an integer (whole) or a decimal: 7 or 3.14
• A missing value means nothing is stored yet — in p5.js that is null or undefined
• An array holds several values in order: [3, 6, 9]

Next lessons go through each idea slowly, with short practice.`,
        },
      ],
      examples: [
        {
          title: 'Same ideas, written in code',
          code: `function setup() {
  createCanvas(320, 160);
  background(20, 30, 40);
  fill(255);
  // value → 10 (type: number)
  // variable name → score
  let score = 10;
  let name = "Ada";      // string
  let ready = true;      // boolean
  // text only shows the value — it does not define the type
  text(score, 20, 40);
  text(name, 20, 70);
  text(ready, 20, 100);
}`,
          note: 'Read the comments first. text is just how we peek at the stored values on the canvas.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Store then show',
          prompt: 'Make let age = 12. Then show age with text.',
          difficulty: 1,
          starterCode: `function setup() {
  createCanvas(320, 160);
  background(20);
  fill(255);
  // Remember: age is the variable name, 12 is the value (a number)
  // let age = 12; text(age, x, y)
}
`,
          tests: [
            { id: 't1', description: 'Uses age', hint: 'let age = 12', kind: 'codeMatches', expect: '\\bage\\s*=' },
            { id: 't2', description: 'Uses text', hint: 'text(age, x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
        {
          id: 'p2',
          title: 'A string value in a variable',
          prompt: 'Make let word = "hi". Then show word with text.',
          difficulty: 1,
          starterCode: `function setup() {
  createCanvas(320, 160);
  background(20);
  fill(255);
  // word holds a string value — use quotes
}
`,
          tests: [
            { id: 't1', description: 'Uses word', hint: 'let word = "hi"', kind: 'codeMatches', expect: '\\bword\\s*=' },
            { id: 't2', description: 'Uses text', hint: 'text(word, x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
      ],
    },
    {
      id: 'p5-ess-values',
      title: 'What is a value?',
      summary: 'A value is a piece of data. Every value has a type that says what kind of data it is.',
      runner: 'processing',
      sections: [
        {
          heading: 'Definition: value',
          body: `A value is one piece of information your program can work with.

Examples of values:
• 7
• 3.14
• "hello"
• true
• null
• [10, 20, 30]

Values are the actual data. Later you will store them in variables so you can reuse them by name.

Processing in CodeBuddy runs as p5.js (JavaScript under the hood). You show a value on the canvas with text(value, x, y).`,
        },
        {
          heading: 'Definition: type',
          body: `Every value has a type. The type tells you what kind of information it is and what you can do with it.

Here are the main types you need first:

• A number can be an integer (whole number) or a decimal. In p5.js both are the same type: number. Examples: 0, 7, -3, 3.14, 2.0
• A string is a string of letters (and other characters) written in quotes. Examples: "Ada", "hi", "42"
• A boolean is a true/false statement. In p5.js the only boolean values are true and false (lowercase, no quotes)
• A missing value means “there is no value here yet.” In JavaScript that is null or undefined
• An array is an ordered collection of values in square brackets. Example: [3, 6, 9]

The type matters. You can add 3 + 4, but "3" + 4 joins into text ("34") because one side is a string.`,
        },
        {
          heading: 'Why types matter',
          body: `Programs treat different types differently:

• Numbers are for counting, measuring, positions, sizes, and math
• Strings are for names, messages, and any text drawn with text()
• Booleans are for yes/no decisions (later used in if statements)
• null / undefined are for “empty / unknown / not set”
• Arrays are for several related values together

In the next lessons you will learn each type carefully, and also learn variables — names that hold values.`,
        },
      ],
      examples: [
        {
          title: 'Different kinds of values',
          code: `function setup() {
  createCanvas(320, 200);
  background(20, 30, 40);
  fill(255);
  text(7, 20, 40);              // number (integer)
  text(3.5, 20, 70);            // number (decimal)
  text("Ada", 20, 100);         // string
  text(true, 20, 130);          // boolean
  text(null, 20, 160);          // missing value
}`,
          note: 'Each text call shows one value of a different type.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'A number value',
          prompt: 'Draw the number 10 with text.',
          difficulty: 1,
          starterCode: `function setup() {
  createCanvas(320, 160);
  background(20);
  fill(255);
  // text(10, x, y)
}
`,
          tests: [
            { id: 't1', description: 'Uses text', hint: 'text(10, x, y)', kind: 'codeIncludes', expect: 'text(' },
            { id: 't2', description: 'Shows 10', hint: 'text(10, ...)', kind: 'codeMatches', expect: 'text\\(\\s*10\\s*,' },
          ],
        },
        {
          id: 'p2',
          title: 'A string value',
          prompt: 'Draw the string hi (use quotes).',
          difficulty: 1,
          starterCode: `function setup() {
  createCanvas(320, 160);
  background(20);
  fill(255);
  // text("hi", x, y)
}
`,
          tests: [
            { id: 't1', description: 'Uses text', hint: 'text("hi", x, y)', kind: 'codeIncludes', expect: 'text(' },
            { id: 't2', description: 'Uses quotes', hint: 'Put hi in quotes', kind: 'codeMatches', expect: '["\']hi["\']' },
          ],
        },
      ],
    },
    {
      id: 'p5-ess-variables',
      title: 'Variables',
      summary: 'A variable is a name that stores a value so you can use it later.',
      runner: 'processing',
      sections: [
        {
          heading: 'Definition: variable',
          body: `A variable is a named box that holds a value.

You create a variable with let (or const) and = (called assignment):

let score = 10;
let name = "Ada";
let ready = true;

Read it as: “the variable score now holds the value 10.”

• The name is on the left (score, name, ready)
• The value is on the right (10, "Ada", true)
• = means “store this value in that name”
• = is not the same as ===. === asks “are these two things equal?”

Use let when you may change the value later. Use const when the value should stay the same.

You can declare variables inside setup(), or at the top of the sketch (globally) so draw() can use them too.`,
        },
        {
          heading: 'Using and changing a variable',
          body: `After you store a value, use the variable’s name to get the value back:

let score = 10;
text(score, 20, 40);   → draws 10

You can replace the value later (with let):

let score = 10;
score = 11;
text(score, 20, 40);   → draws 11

The variable still has the same name. Only the value inside changed.`,
        },
        {
          heading: 'Rules for variable names',
          body: `• Use clear names: age, score, playerName
• Names cannot start with a digit (1score is illegal)
• Names cannot contain spaces (player name is illegal)
• Use camelCase for multi-word names: playerName
• Prefer readable names over short ones like x or s (unless x really means a position)

A variable can hold any type of value: a number, a string, a boolean, null, or an array.`,
        },
      ],
      examples: [
        {
          title: 'Store different types in variables',
          code: `function setup() {
  createCanvas(320, 180);
  background(20);
  fill(255);
  let age = 15;
  let name = "Ada";
  let ready = true;
  let nickname = null;
  text(age, 20, 40);
  text(name, 20, 70);
  text(ready, 20, 100);
  text(nickname, 20, 130);
}`,
          note: 'Each variable holds one value of a specific type.',
        },
        {
          title: 'Change a variable',
          code: `function setup() {
  createCanvas(320, 160);
  background(20);
  fill(255);
  let score = 0;
  score = 5;
  text(score, 20, 40);
}`,
          note: 'The last assignment is the value that text shows.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Make a number variable',
          prompt: 'Make let age = 12. Then show age with text.',
          difficulty: 1,
          starterCode: `function setup() {
  createCanvas(320, 160);
  background(20);
  fill(255);
  // let age = 12; text(age, x, y)
}
`,
          tests: [
            { id: 't1', description: 'Uses age', hint: 'let age = 12', kind: 'codeMatches', expect: '\\bage\\s*=' },
            { id: 't2', description: 'Uses text', hint: 'text(age, x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
        {
          id: 'p2',
          title: 'Make a string variable',
          prompt: 'Make let name = "Ada". Then show name with text.',
          difficulty: 1,
          starterCode: `function setup() {
  createCanvas(320, 160);
  background(20);
  fill(255);
  // let name = "Ada"; text(name, x, y)
}
`,
          tests: [
            { id: 't1', description: 'Uses name', hint: 'let name = "Ada"', kind: 'codeMatches', expect: '\\bname\\s*=' },
            { id: 't2', description: 'Uses text', hint: 'text(name, x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
        {
          id: 'p3',
          title: 'Change a variable',
          prompt: 'Set score to 0, then set score to 7, then show score with text.',
          difficulty: 1,
          starterCode: `function setup() {
  createCanvas(320, 160);
  background(20);
  fill(255);
  // let score = 0; score = 7; text(score, x, y)
}
`,
          tests: [
            { id: 't1', description: 'Uses score', hint: 'score = 7 last', kind: 'codeMatches', expect: '\\bscore\\s*=' },
            { id: 't2', description: 'Uses text', hint: 'text(score, x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
      ],
    },
    {
      id: 'p5-ess-numbers',
      title: 'Numbers (integers & decimals)',
      summary: 'A number can be an integer (whole) or a decimal. In p5.js both are the same type: number.',
      runner: 'processing',
      sections: [
        {
          heading: 'Definition: number',
          body: `A number is a numeric value you can use in math.

In p5.js (JavaScript), there is one number type. It covers both:

• Integer — a whole number with no decimal point
  Examples: 0, 1, 42, -3
• Decimal — a number that can have a fractional part
  Examples: 3.14, 2.0, -0.5, 0.25

So: a number can be an integer or a decimal. There is no separate “int” or “float” type — both are number.`,
        },
        {
          heading: 'When to use each',
          body: `• Counting people, lives, or items → usually an integer
  let lives = 3;
• Money, height, averages, measurements → usually a decimal
  let price = 2.5;
  let height = 1.75;
• Canvas positions, sizes, and speeds → often numbers of either kind
  let x = 80;
  let d = 50.5;

Both are numbers. The difference is whether you need whole values only, or values with decimal places.`,
        },
        {
          heading: 'What numbers are not',
          body: `• "7" in quotes is a string of characters, not a number
• true and false are booleans, not numbers
• null is missing — it is not zero

You can store numbers in variables:

let count = 7;
let price = 3.5;`,
        },
      ],
      examples: [
        {
          title: 'Integer and decimal variables',
          code: `function setup() {
  createCanvas(320, 180);
  background(20);
  fill(255);
  let count = 7;
  let price = 3.5;
  text(count, 20, 40);
  text(price, 20, 70);
  text(count + 1, 20, 100);
  text(price * 2, 20, 130);
}`,
          note: '7 is an integer. 3.5 is a decimal. Both are numbers.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'An integer variable',
          prompt: 'Make let lives = 3. Show lives with text.',
          difficulty: 1,
          starterCode: `function setup() {
  createCanvas(320, 160);
  background(20);
  fill(255);
  // let lives = 3; text(lives, x, y)
}
`,
          tests: [
            { id: 't1', description: 'Uses lives', hint: 'let lives = 3', kind: 'codeMatches', expect: '\\blives\\s*=' },
            { id: 't2', description: 'Uses text', hint: 'text(lives, x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
        {
          id: 'p2',
          title: 'A decimal variable',
          prompt: 'Make let price = 2.5. Show price with text.',
          difficulty: 1,
          starterCode: `function setup() {
  createCanvas(320, 160);
  background(20);
  fill(255);
  // let price = 2.5; text(price, x, y)
}
`,
          tests: [
            { id: 't1', description: 'Uses price', hint: 'let price = 2.5', kind: 'codeMatches', expect: '\\bprice\\s*=' },
            { id: 't2', description: 'Uses text', hint: 'text(price, x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
        {
          id: 'p3',
          title: 'Simple math',
          prompt: 'Make let n = 10. Show n + 2 with text.',
          difficulty: 1,
          starterCode: `function setup() {
  createCanvas(320, 160);
  background(20);
  fill(255);
  // let n = 10; text(n + 2, x, y)
}
`,
          tests: [
            { id: 't1', description: 'Uses n', hint: 'let n = 10', kind: 'codeMatches', expect: '\\bn\\s*=' },
            { id: 't2', description: 'Uses text', hint: 'text(n + 2, x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
      ],
    },
    {
      id: 'p5-ess-strings',
      title: 'Strings',
      summary: 'A string is a string of letters (and other characters) written in quotes.',
      runner: 'processing',
      sections: [
        {
          heading: 'Definition: string',
          body: `A string is a string of letters — text made of characters.

In p5.js, write a string in quotes:

"Ada"
"hello"
"42"
""

• Letters: "Ada"
• Words and spaces: "hello world"
• Digits as text: "42" (this is text, not the number forty-two)
• An empty string: "" (a string with no characters)

You can use single quotes or double quotes: 'hi' and "hi" are both strings.`,
        },
        {
          heading: 'Strings in variables',
          body: `Store text in a variable the same way you store a number:

let name = "Ada";
let city = "Calgary";
text(name, 20, 40);

Join two strings with + :

let greeting = "Hello";
let name = "Ada";
text(greeting + " " + name, 20, 70);   → Hello Ada

+ joins strings. When both sides are strings, it does not add numbers.`,
        },
        {
          heading: 'What a string is not',
          body: `• "7" is a string. 7 (no quotes) is a number
• "true" is a string. true (no quotes) is a boolean
• Joining "3" + 4 becomes "34" (text), not 7

Rule: if it is in quotes, it is a string — even if it looks like a number or a boolean.`,
        },
      ],
      examples: [
        {
          title: 'String variables',
          code: `function setup() {
  createCanvas(320, 160);
  background(20);
  fill(255);
  let word = "code";
  let city = "Calgary";
  text(word, 20, 40);
  text(city, 20, 70);
  text("Hi " + "Ada", 20, 100);
}`,
          note: 'Quotes make text a string.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Store a string',
          prompt: 'Make let city = "Calgary". Show city with text.',
          difficulty: 1,
          starterCode: `function setup() {
  createCanvas(320, 160);
  background(20);
  fill(255);
  // let city = "Calgary"; text(city, x, y)
}
`,
          tests: [
            { id: 't1', description: 'Uses city', hint: 'let city = "Calgary"', kind: 'codeMatches', expect: '\\bcity\\s*=' },
            { id: 't2', description: 'Uses text', hint: 'text(city, x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
        {
          id: 'p2',
          title: 'Join two strings',
          prompt: 'Show Hello Ada by joining greeting and name with a space.',
          difficulty: 1,
          starterCode: `function setup() {
  createCanvas(320, 160);
  background(20);
  fill(255);
  let greeting = "Hello";
  let name = "Ada";
  // text(greeting + " " + name, x, y)
}
`,
          tests: [
            { id: 't1', description: 'Joins with +', hint: 'greeting + " " + name', kind: 'codeIncludes', expect: '+' },
            { id: 't2', description: 'Uses text', hint: 'text(greeting + " " + name, x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
      ],
    },
    {
      id: 'p5-ess-booleans',
      title: 'Booleans',
      summary: 'A boolean is a true/false statement.',
      runner: 'processing',
      sections: [
        {
          heading: 'Definition: boolean',
          body: `A boolean is a true/false statement. It answers a yes/no question with only two possible answers.

In p5.js, the only boolean values are:

• true
• false

Important details:
• No quotes — true and false are not strings
• Lowercase — True and False (capitalized) are wrong in JavaScript
• A boolean is not the words "yes" / "no", and not the numbers 1 / 0 (even if those ideas feel related)

Examples of boolean meaning:
• let ready = true;   → yes, ready
• let gameOver = false;   → no, not over`,
        },
        {
          heading: 'Booleans from comparisons',
          body: `Comparisons create boolean values automatically:

let score = 85;
text(score >= 60, 20, 40);   → draws true
text(score < 50, 20, 70);    → draws false

Common comparison operators:
• === equal to (same value and type)
• !== not equal to
• < less than
• > greater than
• <= less than or equal
• >= greater than or equal

Later, if statements use booleans to decide what code runs.`,
        },
        {
          heading: 'What a boolean is not',
          body: `• "true" with quotes is a string, not a boolean
• null means missing — it is not false
• 0 is a number, not a boolean (even though it can be treated as “falsey” in some checks)

Store booleans in variables when you need a yes/no fact:

let ready = true;
let passed = score >= 60;`,
        },
      ],
      examples: [
        {
          title: 'Boolean values and a comparison',
          code: `function setup() {
  createCanvas(320, 180);
  background(20);
  fill(255);
  let ready = true;
  text(ready, 20, 40);
  text(false, 20, 70);
  let score = 85;
  text(score >= 60, 20, 100);
}`,
          note: 'true and false are booleans. Comparisons also produce booleans.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Store a boolean',
          prompt: 'Make let ready = true. Show ready with text.',
          difficulty: 1,
          starterCode: `function setup() {
  createCanvas(320, 160);
  background(20);
  fill(255);
  // let ready = true; text(ready, x, y)
}
`,
          tests: [
            { id: 't1', description: 'Uses ready', hint: 'let ready = true', kind: 'codeMatches', expect: '\\bready\\s*=' },
            { id: 't2', description: 'Uses text', hint: 'text(ready, x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
        {
          id: 'p2',
          title: 'A false value',
          prompt: 'Make let done = false. Show done with text.',
          difficulty: 1,
          starterCode: `function setup() {
  createCanvas(320, 160);
  background(20);
  fill(255);
  // let done = false; text(done, x, y)
}
`,
          tests: [
            { id: 't1', description: 'Uses done', hint: 'let done = false', kind: 'codeMatches', expect: '\\bdone\\s*=' },
            { id: 't2', description: 'Uses text', hint: 'text(done, x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
        {
          id: 'p3',
          title: 'Compare numbers',
          prompt: 'score is 85. Show whether score >= 60 with text.',
          difficulty: 1,
          starterCode: `function setup() {
  createCanvas(320, 160);
  background(20);
  fill(255);
  let score = 85;
  // text(score >= 60, x, y)
}
`,
          tests: [
            { id: 't1', description: 'Uses >=', hint: 'score >= 60', kind: 'codeIncludes', expect: '>=' },
            { id: 't2', description: 'Uses text', hint: 'text(score >= 60, x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
      ],
    },
    {
      id: 'p5-ess-missing',
      title: 'Missing values (null / undefined)',
      summary: 'null and undefined mean there is no value yet — a missing value.',
      runner: 'processing',
      sections: [
        {
          heading: 'Definition: missing value',
          body: `A missing value means “there is nothing here yet” or “unknown.”

Because Processing in CodeBuddy is p5.js (JavaScript), missing values show up as:

• null — you intentionally set “no value”
• undefined — a variable exists but was never given a value (or a property does not exist)

Examples of when null is useful:
• let nickname = null;   → the player has no nickname yet
• let answer = null;     → no answer has been entered
• let winner = null;     → the game has not chosen a winner

null and undefined are their own ideas. They are not a string, not a number, and not a boolean.`,
        },
        {
          heading: 'What null / undefined are not',
          body: `• null is not 0 (zero is a number)
• null is not "" (empty string is still a string)
• null is not false (false is a boolean true/false statement)
• "null" in quotes is a string spelling the word null — not the real missing value
• undefined is what you get when nothing was assigned yet

For beginners: prefer setting null yourself when you want to say clearly “this variable has no real value yet.” You will see undefined when something was never assigned.`,
        },
      ],
      examples: [
        {
          title: 'A missing value in a variable',
          code: `function setup() {
  createCanvas(320, 160);
  background(20);
  fill(255);
  let nickname = null;
  text(nickname, 20, 40);
  nickname = "Ace";
  text(nickname, 20, 70);
}`,
          note: 'First there is no nickname. Later you store a real string.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Store null',
          prompt: 'Make let nickname = null. Show nickname with text.',
          difficulty: 1,
          starterCode: `function setup() {
  createCanvas(320, 160);
  background(20);
  fill(255);
  // let nickname = null; text(nickname, x, y)
}
`,
          tests: [
            { id: 't1', description: 'Uses nickname', hint: 'let nickname = null', kind: 'codeMatches', expect: '\\bnickname\\s*=' },
            { id: 't2', description: 'Uses null', hint: 'nickname = null', kind: 'codeIncludes', expect: 'null' },
            { id: 't3', description: 'Uses text', hint: 'text(nickname, x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
        {
          id: 'p2',
          title: 'Replace null later',
          prompt: 'Set answer to null, then set answer to "yes", then show answer with text.',
          difficulty: 1,
          starterCode: `function setup() {
  createCanvas(320, 160);
  background(20);
  fill(255);
  // let answer = null; answer = "yes"; text(answer, x, y)
}
`,
          tests: [
            { id: 't1', description: 'Uses null', hint: 'answer = null first', kind: 'codeIncludes', expect: 'null' },
            { id: 't2', description: 'Uses answer', hint: 'answer = ...', kind: 'codeMatches', expect: '\\banswer\\s*=' },
            { id: 't3', description: 'Uses text', hint: 'text(answer, x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
      ],
    },
    {
      id: 'p5-ess-lists',
      title: 'Arrays',
      summary: 'An array holds several values in order.',
      runner: 'processing',
      sections: [
        {
          heading: 'Definition: array',
          body: `An array is an ordered group of values inside square brackets.

let nums = [3, 6, 9];
let names = ["Ada", "Lin"];

• The values stay in order
• Indexes start at 0 — nums[0] is the first item
• nums.length tells you how many items are in the array

An array can hold numbers, strings, booleans, or even mixed types — but beginners usually keep one kind of value per array.

(In Python this idea is called a list. In p5.js / JavaScript it is called an array.)`,
        },
        {
          heading: 'Arrays and variables',
          body: `An array is itself a value, so you store it in a variable:

let scores = [10, 20, 30];
text(scores[0], 20, 40);      → draws 10
text(scores.length, 20, 70);  → draws 3

The variable scores holds the whole array. Each slot inside the array holds one value.`,
        },
      ],
      examples: [
        {
          title: 'A short array',
          code: `function setup() {
  createCanvas(320, 160);
  background(20);
  fill(255);
  let nums = [3, 6, 9];
  text(nums[0], 20, 40);
  text(nums.length, 20, 70);
}`,
          note: 'Indexes start at 0.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'First item',
          prompt: 'Show the first item in nums with text.',
          difficulty: 1,
          starterCode: `function setup() {
  createCanvas(320, 160);
  background(20);
  fill(255);
  let nums = [3, 6, 9];
  // text(nums[0], x, y)
}
`,
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
          starterCode: `function setup() {
  createCanvas(320, 160);
  background(20);
  fill(255);
  let nums = [3, 6, 9];
  // text(nums.length, x, y)
}
`,
          tests: [
            { id: 't1', description: 'Uses .length', hint: 'nums.length', kind: 'codeIncludes', expect: '.length' },
            { id: 't2', description: 'Uses text', hint: 'text(nums.length, x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
      ],
    },
    {
      id: 'p5-ess-convert',
      title: 'Changing types',
      summary: 'Convert a value when you need a different type.',
      runner: 'processing',
      sections: [
        {
          heading: 'Why convert?',
          body: `Sometimes you have the right information in the wrong type.

Common conversions in p5.js (JavaScript):
• Number("12") → 12   (digit text → number)
• Number("3.5") → 3.5
• String(5) → "5"     (number → text)
• You cannot turn null into a useful number without choosing a real value first

Use Number before math on digit text. Use String when you want to be explicit about joining text with +.

On the canvas, text() can show numbers and strings either way — but math and joining still need the right type.`,
        },
      ],
      examples: [
        {
          title: 'Convert then draw',
          code: `function setup() {
  createCanvas(320, 160);
  background(20);
  fill(255);
  let raw = "12";
  let n = Number(raw);
  text(n + 1, 20, 40);
  text("n=" + String(n), 20, 70);
}`,
          note: 'Number for math; String for joining text.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Text to number',
          prompt: 'Turn raw into a number with Number, add 3, and show the result with text.',
          difficulty: 1,
          starterCode: `function setup() {
  createCanvas(320, 160);
  background(20);
  fill(255);
  let raw = "12";
  // text(Number(raw) + 3, x, y)
}
`,
          tests: [
            { id: 't1', description: 'Uses Number', hint: 'Number(raw)', kind: 'codeIncludes', expect: 'Number(' },
            { id: 't2', description: 'Uses text', hint: 'text(Number(raw) + 3, x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
        {
          id: 'p2',
          title: 'Number to text',
          prompt: 'Show score: 7 using String and + with text.',
          difficulty: 1,
          starterCode: `function setup() {
  createCanvas(320, 160);
  background(20);
  fill(255);
  let n = 7;
  // text("score: " + String(n), x, y)
}
`,
          tests: [
            { id: 't1', description: 'Uses String', hint: 'String(n)', kind: 'codeIncludes', expect: 'String(' },
            { id: 't2', description: 'Uses text', hint: 'text("score: " + String(n), x, y)', kind: 'codeIncludes', expect: 'text(' },
          ],
        },
      ],
    },
  ],
}
