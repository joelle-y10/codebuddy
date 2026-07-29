import type { Module } from '../../types'

/** First module: detailed definitions of values, variables, and types. */
export const javascriptEssentialsModule: Module = {
  id: 'js-essentials',
  title: 'Values, variables & types',
  summary:
    'Learn what values and variables are, then study each type in detail: numbers, strings, booleans, missing values, and arrays.',
  lessons: [
    {
      id: 'js-ess-values',
      title: 'What is a value?',
      summary: 'A value is a piece of data. Every value has a type that says what kind of data it is.',
      runner: 'javascript',
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
• undefined

Values are the actual data. Later you will store them in variables so you can reuse them by name.`,
        },
        {
          heading: 'Definition: type',
          body: `Every value has a type. The type tells you what kind of information it is and what you can do with it.

Here are the main types you need first:

• A number can be a whole number or have decimals. In JavaScript there is one number type for both. Examples: 0, 7, -3, 3.14, 2.0
• A string is a string of letters (and other characters) written in quotes. Examples: "Ada", "hi", "42"
• A boolean is a true/false statement. In JavaScript the only boolean values are true and false (lowercase)
• A missing value means “there is no value here.” In JavaScript that can be null (intentionally empty) or undefined (not set / missing)
• An array is an ordered collection of values in square brackets. Example: [3, 6, 9]

The type matters. You can add 3 + 4, but you cannot add 3 + "hello" without converting first.

You can check a type with typeof. For example, typeof 7 is "number" and typeof "hi" is "string".`,
        },
        {
          heading: 'Why types matter',
          body: `Programs treat different types differently:

• Numbers are for counting, measuring, and math
• Strings are for names, messages, and any text
• Booleans are for yes/no decisions (later used in if statements)
• null and undefined are for “empty / unknown / not set”
• Arrays are for several related values together

In the next lessons you will learn each type carefully, and also learn variables — names that hold values.`,
        },
      ],
      examples: [
        {
          title: 'Different kinds of values',
          code: `console.log(7);           // number (whole)
console.log(3.5);         // number (decimal)
console.log("Ada");       // string
console.log(true);        // boolean
console.log(null);        // intentionally empty
console.log(undefined);   // not set / missing`,
          note: 'Each line is a different type of value.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'A number value',
          prompt: 'Print the number 10.',
          difficulty: 1,
          starterCode: `// Print the number 10\n`,
          tests: [{ id: 't1', description: 'Prints 10', hint: 'console.log(10)', kind: 'stdout', expect: '10' }],
        },
        {
          id: 'p2',
          title: 'A string value',
          prompt: 'Print the string hi (use quotes).',
          difficulty: 1,
          starterCode: `// Print "hi"\n`,
          tests: [
            { id: 't1', description: 'Prints hi', hint: 'console.log("hi")', kind: 'stdout', expect: 'hi' },
            { id: 't2', description: 'Uses quotes', hint: 'Put hi in quotes', kind: 'codeMatches', expect: '["\']hi["\']' },
          ],
        },
      ],
    },
    {
      id: 'js-ess-variables',
      title: 'Variables',
      summary: 'A variable is a name that stores a value so you can use it later.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Definition: variable',
          body: `A variable is a named box that holds a value.

You create a variable with = (called assignment), using let or const:

let score = 10;
const name = "Ada";
const ready = true;

Read it as: “the variable score now holds the value 10.”

• The name is on the left (score, name, ready)
• The value is on the right (10, "Ada", true)
• = means “store this value in that name”
• = is not the same as ===. === asks “are these two things equal?”

Use const when the value will not change. Use let when you will reassign it later.`,
        },
        {
          heading: 'Using and changing a variable',
          body: `After you store a value, use the variable’s name to get the value back:

let score = 10;
console.log(score);   → prints 10

You can replace the value later (with let):

let score = 10;
score = 11;
console.log(score);   → prints 11

The variable still has the same name. Only the value inside changed.

With const you cannot reassign:

const lives = 3;
// lives = 2;  ← this would cause an error`,
        },
        {
          heading: 'Rules for variable names',
          body: `• Use clear names: age, score, playerName
• Names cannot start with a digit (1score is illegal)
• Names cannot contain spaces (player name is illegal)
• Use camelCase for multi-word names: playerName
• Prefer readable names over short ones like x or s (unless x really means a position)

A variable can hold any type of value: a number, a string, a boolean, null, undefined, or an array.`,
        },
      ],
      examples: [
        {
          title: 'Store different types in variables',
          code: `const age = 15;
const name = "Ada";
const ready = true;
let nickname = null;
console.log(age);
console.log(name);
console.log(ready);
console.log(nickname);`,
          note: 'Each variable holds one value of a specific type.',
        },
        {
          title: 'Change a variable',
          code: `let score = 0;
score = 5;
console.log(score);`,
          note: 'The last assignment is the value that remains.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Make a number variable',
          prompt: 'Make a variable called age set to 12. Then print age.',
          difficulty: 1,
          starterCode: `// age = 12\n// print age\n`,
          tests: [
            { id: 't1', description: 'Prints 12', hint: 'age = 12 then console.log(age)', kind: 'stdout', expect: '12' },
            { id: 't2', description: 'Uses age', hint: 'age = ...', kind: 'codeMatches', expect: '\\bage\\s*=' },
          ],
        },
        {
          id: 'p2',
          title: 'Make a string variable',
          prompt: 'Make a variable called name set to Ada. Then print name.',
          difficulty: 1,
          starterCode: `// name = "Ada"\n// print name\n`,
          tests: [
            { id: 't1', description: 'Prints Ada', hint: 'name = "Ada" then console.log(name)', kind: 'stdout', expect: 'Ada' },
            { id: 't2', description: 'Uses name', hint: 'name = "Ada"', kind: 'codeMatches', expect: '\\bname\\s*=' },
          ],
        },
        {
          id: 'p3',
          title: 'Change a variable',
          prompt: 'Set score to 0, then set score to 7, then print score.',
          difficulty: 1,
          starterCode: `// score = 0\n// score = 7\n// print score\n`,
          tests: [
            { id: 't1', description: 'Prints 7', hint: 'Assign 7 last, then console.log(score)', kind: 'stdout', expect: '7' },
            { id: 't2', description: 'Uses score', hint: 'score = ...', kind: 'codeMatches', expect: '\\bscore\\s*=' },
          ],
        },
      ],
    },
    {
      id: 'js-ess-numbers',
      title: 'Numbers (whole & decimals)',
      summary: 'A number can be whole or have decimals. JavaScript uses one number type for both.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Definition: number',
          body: `A number is a numeric value you can use in math.

In JavaScript, there is one number type for both whole numbers and decimals:

• A whole number has no decimal point
  Examples: 0, 1, 42, -3
• A number can also have decimals (a fractional part)
  Examples: 3.14, 2.0, -0.5, 0.25

So: a number can have decimals and integers (whole numbers). Both are typeof "number". There is no separate integer type in everyday JavaScript.`,
        },
        {
          heading: 'When to use each',
          body: `• Counting people, lives, or items → usually a whole number
  let lives = 3;
• Money, height, averages, measurements → usually a decimal
  let price = 2.5;
  let height = 1.75;

Both are numbers. The difference is whether you need whole values only, or values with decimal places.`,
        },
        {
          heading: 'What numbers are not',
          body: `• "7" in quotes is a string of characters, not a number
• true and false are booleans, not numbers
• null and undefined are missing — they are not zero

You can store numbers in variables:

const count = 7;
const price = 3.5;

Check with typeof:
typeof 7      → "number"
typeof 3.5    → "number"`,
        },
      ],
      examples: [
        {
          title: 'Whole and decimal number variables',
          code: `const count = 7;
const price = 3.5;
console.log(count);
console.log(price);
console.log(count + 1);
console.log(price * 2);
console.log(typeof count);
console.log(typeof price);`,
          note: '7 is whole. 3.5 has a decimal. Both are typeof "number".',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'A whole-number variable',
          prompt: 'Make a variable called lives set to 3. Print lives.',
          difficulty: 1,
          starterCode: `// lives = 3\n// print lives\n`,
          tests: [
            { id: 't1', description: 'Prints 3', hint: 'lives = 3 then console.log(lives)', kind: 'stdout', expect: '3' },
            { id: 't2', description: 'Uses lives', hint: 'lives = 3', kind: 'codeMatches', expect: '\\blives\\s*=' },
          ],
        },
        {
          id: 'p2',
          title: 'A decimal variable',
          prompt: 'Make a variable called price set to 2.5. Print price.',
          difficulty: 1,
          starterCode: `// price = 2.5\n// print price\n`,
          tests: [
            { id: 't1', description: 'Prints 2.5', hint: 'price = 2.5 then console.log(price)', kind: 'stdout', expect: '2.5' },
            { id: 't2', description: 'Uses price', hint: 'price = 2.5', kind: 'codeMatches', expect: '\\bprice\\s*=' },
          ],
        },
        {
          id: 'p3',
          title: 'Simple math',
          prompt: 'Make a variable called n set to 10. Print n + 2.',
          difficulty: 1,
          starterCode: `// n = 10\n// print n + 2\n`,
          tests: [
            { id: 't1', description: 'Prints 12', hint: 'n = 10 then console.log(n + 2)', kind: 'stdout', expect: '12' },
            { id: 't2', description: 'Uses n', hint: 'n = 10', kind: 'codeMatches', expect: '\\bn\\s*=' },
          ],
        },
      ],
    },
    {
      id: 'js-ess-strings',
      title: 'Strings',
      summary: 'A string is a string of letters (and other characters) written in quotes.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Definition: string',
          body: `A string is a string of letters — text made of characters.

In JavaScript, write a string in quotes:

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

const name = "Ada";
const city = "Calgary";
console.log(name);

Join two strings with + :

const greeting = "Hello";
const name = "Ada";
console.log(greeting + " " + name);   → Hello Ada

+ joins strings. It does not add numbers when both sides are strings.`,
        },
        {
          heading: 'What a string is not',
          body: `• "7" is a string. 7 (no quotes) is a number
• "true" is a string. true (no quotes) is a boolean
• You cannot do "3" + 4 and get normal math until you convert one side to the matching type

Rule: if it is in quotes, it is a string — even if it looks like a number or a boolean.

Check with typeof:
typeof "Ada"  → "string"
typeof 7      → "number"`,
        },
      ],
      examples: [
        {
          title: 'String variables',
          code: `const word = "code";
const city = "Calgary";
console.log(word);
console.log(city);
console.log("Hi " + "Ada");
console.log(typeof word);`,
          note: 'Quotes make text a string.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Store a string',
          prompt: 'Make a variable called city set to Calgary. Print city.',
          difficulty: 1,
          starterCode: `// city = "Calgary"\n// print city\n`,
          tests: [
            { id: 't1', description: 'Prints Calgary', hint: 'city = "Calgary" then console.log(city)', kind: 'stdout', expect: 'Calgary' },
            { id: 't2', description: 'Uses city', hint: 'city = ...', kind: 'codeMatches', expect: '\\bcity\\s*=' },
          ],
        },
        {
          id: 'p2',
          title: 'Join two strings',
          prompt: 'Print Hello Ada by joining greeting and name with a space.',
          difficulty: 1,
          starterCode: `const greeting = "Hello";\nconst name = "Ada";\n// print Hello Ada\n`,
          tests: [
            { id: 't1', description: 'Prints Hello Ada', hint: 'console.log(greeting + " " + name)', kind: 'stdout', expect: 'Hello Ada' },
          ],
        },
      ],
    },
    {
      id: 'js-ess-booleans',
      title: 'Booleans',
      summary: 'A boolean is a true/false statement.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Definition: boolean',
          body: `A boolean is a true/false statement. It answers a yes/no question with only two possible answers.

In JavaScript, the only boolean values are:

• true
• false

Important details:
• No quotes — true and false are not strings
• Lowercase — True and False (capital letters) are wrong in JavaScript
• A boolean is not the words "yes" / "no", and not the numbers 1 / 0 (even if those ideas feel related)

Examples of boolean meaning:
• ready = true   → yes, ready
• gameOver = false   → no, not over`,
        },
        {
          heading: 'Booleans from comparisons',
          body: `Comparisons create boolean values automatically:

const score = 85;
console.log(score >= 60);   → true
console.log(score < 50);    → false

Common comparison operators:
• === equal to (strict — same value and type)
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
• null and undefined mean missing — they are not false
• 0 is a number, not a boolean (even though it can be treated as “falsy” in some checks)

Store booleans in variables when you need a yes/no fact:

const ready = true;
const passed = score >= 60;

Check with typeof:
typeof true   → "boolean"`,
        },
      ],
      examples: [
        {
          title: 'Boolean values and a comparison',
          code: `const ready = true;
console.log(ready);
console.log(false);
const score = 85;
console.log(score >= 60);
console.log(typeof ready);`,
          note: 'true and false are booleans. Comparisons also produce booleans.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Store a boolean',
          prompt: 'Make a variable called ready set to true. Print ready.',
          difficulty: 1,
          starterCode: `// ready = true\n// print ready\n`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'ready = true then console.log(ready)', kind: 'stdout', expect: 'true' },
            { id: 't2', description: 'Uses ready', hint: 'ready = true', kind: 'codeMatches', expect: '\\bready\\s*=' },
          ],
        },
        {
          id: 'p2',
          title: 'A false value',
          prompt: 'Make a variable called done set to false. Print done.',
          difficulty: 1,
          starterCode: `// done = false\n// print done\n`,
          tests: [
            { id: 't1', description: 'Prints false', hint: 'done = false then console.log(done)', kind: 'stdout', expect: 'false' },
            { id: 't2', description: 'Uses done', hint: 'done = false', kind: 'codeMatches', expect: '\\bdone\\s*=' },
          ],
        },
        {
          id: 'p3',
          title: 'Compare numbers',
          prompt: 'score is 85. Print whether score >= 60.',
          difficulty: 1,
          starterCode: `const score = 85;\n// print score >= 60\n`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'console.log(score >= 60)', kind: 'stdout', expect: 'true' },
            { id: 't2', description: 'Uses >=', hint: 'score >= 60', kind: 'codeIncludes', expect: '>=' },
          ],
        },
      ],
    },
    {
      id: 'js-ess-missing',
      title: 'Missing values (null & undefined)',
      summary: 'null means intentionally empty. undefined means not set / missing.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Definition: missing values',
          body: `A missing value means “there is nothing here yet” or “unknown.”

In JavaScript there are two missing values:

• null — intentionally empty. You chose to put “nothing” here on purpose.
• undefined — not set / missing. The value was never given (or a variable has no value yet).

Examples of when they are useful:
• let nickname = null;        → the player has no nickname on purpose yet
• let answer = undefined;     → no answer has been set
• let winner = null;          → the game has not chosen a winner

Both mean “no real value,” but they are not the same thing:
• null = “I set this to empty on purpose”
• undefined = “this was never set” / “missing”`,
        },
        {
          heading: 'What null and undefined are not',
          body: `• Neither is 0 (zero is a number)
• Neither is "" (empty string is still a string)
• Neither is false (false is a boolean true/false statement)
• "null" or "undefined" in quotes are strings — not the real missing values

Use null when you want to say clearly: this variable exists, but I intentionally left it empty.
Use undefined (or leave a value unset) when something simply has not been given a value yet.

Check with typeof (note the quirk):
typeof null         → "object"  (a known JavaScript quirk — null is still a missing value)
typeof undefined    → "undefined"`,
        },
      ],
      examples: [
        {
          title: 'null and undefined in variables',
          code: `let nickname = null;
console.log(nickname);
nickname = "Ace";
console.log(nickname);

let answer;
console.log(answer);
answer = "yes";
console.log(answer);`,
          note: 'null is intentionally empty. A variable with no value is undefined until you assign one.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Store null',
          prompt: 'Make a variable called nickname set to null. Print nickname.',
          difficulty: 1,
          starterCode: `// nickname = null\n// print nickname\n`,
          tests: [
            { id: 't1', description: 'Prints null', hint: 'nickname = null then console.log(nickname)', kind: 'stdout', expect: 'null' },
            { id: 't2', description: 'Uses nickname', hint: 'nickname = null', kind: 'codeMatches', expect: '\\bnickname\\s*=' },
          ],
        },
        {
          id: 'p2',
          title: 'Replace null later',
          prompt: 'Set answer to null, then set answer to yes, then print answer.',
          difficulty: 1,
          starterCode: `// answer = null\n// answer = "yes"\n// print answer\n`,
          tests: [
            { id: 't1', description: 'Prints yes', hint: 'Assign "yes" last, then console.log(answer)', kind: 'stdout', expect: 'yes' },
            { id: 't2', description: 'Uses null', hint: 'answer = null first', kind: 'codeIncludes', expect: 'null' },
          ],
        },
        {
          id: 'p3',
          title: 'Store undefined',
          prompt: 'Make a variable called winner set to undefined. Print winner.',
          difficulty: 1,
          starterCode: `// winner = undefined\n// print winner\n`,
          tests: [
            { id: 't1', description: 'Prints undefined', hint: 'winner = undefined then console.log(winner)', kind: 'stdout', expect: 'undefined' },
            { id: 't2', description: 'Uses winner', hint: 'winner = undefined', kind: 'codeMatches', expect: '\\bwinner\\s*=' },
          ],
        },
      ],
    },
    {
      id: 'js-ess-lists',
      title: 'Arrays',
      summary: 'An array holds several values in order.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Definition: array',
          body: `An array is an ordered group of values inside square brackets.

const nums = [3, 6, 9];
const names = ["Ada", "Lin"];

• The values stay in order
• Indexes start at 0 — nums[0] is the first item
• nums.length tells you how many items are in the array

An array can hold numbers, strings, booleans, or even mixed types — but beginners usually keep one kind of value per array.

(In some languages these are called lists. In JavaScript the name is array.)`,
        },
        {
          heading: 'Arrays and variables',
          body: `An array is itself a value, so you store it in a variable:

const scores = [10, 20, 30];
console.log(scores[0]);      → 10
console.log(scores.length);  → 3

The variable scores holds the whole array. Each slot inside the array holds one value.`,
        },
      ],
      examples: [
        {
          title: 'A short array',
          code: `const nums = [3, 6, 9];
console.log(nums[0]);
console.log(nums.length);`,
          note: 'Indexes start at 0.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'First item',
          prompt: 'Print the first item in nums.',
          difficulty: 1,
          starterCode: `const nums = [3, 6, 9];\n// print the first item\n`,
          tests: [
            { id: 't1', description: 'Prints 3', hint: 'console.log(nums[0])', kind: 'stdout', expect: '3' },
          ],
        },
        {
          id: 'p2',
          title: 'How many items',
          prompt: 'Print how many items are in nums.',
          difficulty: 1,
          starterCode: `const nums = [3, 6, 9];\n// print the length\n`,
          tests: [
            { id: 't1', description: 'Prints 3', hint: 'console.log(nums.length)', kind: 'stdout', expect: '3' },
            { id: 't2', description: 'Uses length', hint: 'nums.length', kind: 'codeIncludes', expect: '.length' },
          ],
        },
      ],
    },
    {
      id: 'js-ess-convert',
      title: 'Changing types',
      summary: 'Convert a value when you need a different type.',
      runner: 'javascript',
      sections: [
        {
          heading: 'Why convert?',
          body: `Sometimes you have the right information in the wrong type.

Common conversions:
• Number("12") → 12     (digit text → number)
• Number("3.5") → 3.5
• String(5) → "5"       (number → text)
• You cannot turn null or undefined into a useful number without choosing a real value first

Use Number before math on digit text. Use String when joining text with +.

Check a type with typeof when you are unsure:
typeof 5        → "number"
typeof "5"      → "string"`,
        },
      ],
      examples: [
        {
          title: 'Convert then use',
          code: `const raw = "12";
const n = Number(raw);
console.log(n + 1);
console.log("n=" + String(n));
console.log(typeof n);`,
          note: 'Number for math; String for joining text.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Text to number',
          prompt: 'Turn raw into a number, add 3, and print the result.',
          difficulty: 1,
          starterCode: `const raw = "12";\n// Number(raw) + 3, then print\n`,
          tests: [
            { id: 't1', description: 'Prints 15', hint: 'console.log(Number(raw) + 3)', kind: 'stdout', expect: '15' },
            { id: 't2', description: 'Uses Number', hint: 'Number(raw)', kind: 'codeIncludes', expect: 'Number(' },
          ],
        },
        {
          id: 'p2',
          title: 'Number to text',
          prompt: 'Print score: 7 using String and +.',
          difficulty: 1,
          starterCode: `const n = 7;\n// print "score: " + String(n)\n`,
          tests: [
            { id: 't1', description: 'Prints score: 7', hint: 'console.log("score: " + String(n))', kind: 'stdout', expect: 'score: 7' },
            { id: 't2', description: 'Uses String', hint: 'String(n)', kind: 'codeIncludes', expect: 'String(' },
          ],
        },
      ],
    },
  ],
}
