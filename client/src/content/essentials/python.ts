import type { Module } from '../../types'

/** First module on every basic track: coding terms, values, variables, and types. */
export const pythonEssentialsModule: Module = {
  id: 'py-essentials',
  title: 'Start here: coding terms & data types',
  summary:
    'Module 1 — learn the words first (value, type, variable), then numbers, strings, booleans, missing values, and lists. Do this before print() drills or later modules.',
  lessons: [
    {
      id: 'py-ess-terms',
      title: 'Coding terms you need',
      summary: 'Learn the basic vocabulary before writing programs: value, type, variable, and statement.',
      runner: 'python',
      sections: [
        {
          heading: 'Why start with terms?',
          body: `Before you print messages or build big programs, you need the same words every coder uses.

This module is first on purpose. Later lessons (print, if, loops) assume you already know:

• what a value is
• what a type is
• what a variable is

If those words feel fuzzy, stay here until they feel obvious.`,
        },
        {
          heading: 'Glossary',
          body: `• Value — one piece of data, like 7, "Ada", or True
• Type — the kind of value it is (number, string, boolean, …). The type decides what you can do with it
• Variable — a name that stores a value so you can use it later (score = 10)
• Assignment — the = that puts a value into a variable (not the same as ==, which asks “are these equal?”)
• Statement — one instruction in your program, usually one line
• Expression — something that produces a value, like 3 + 4 or score >= 60
• Console / output — where print(...) shows results so you can see a value

print is only a flashlight: it shows a value. It is not more important than understanding what that value is.`,
        },
        {
          heading: 'The types you will meet first',
          body: `Memorize these definitions — you will use them in every language track:

• A boolean is a true/false statement (True or False in Python)
• A string is a string of letters (and other characters) in quotes: "hello"
• A number can be an integer (whole) or a float (decimal): 7 or 3.14
• A missing value means nothing is stored yet — in Python that is None
• A list holds several values in order: [3, 6, 9]

Next lessons go through each idea slowly, with short practice.`,
        },
      ],
      examples: [
        {
          title: 'Same ideas, written in code',
          code: `# value → 10 (type: integer)
# variable name → score
score = 10
name = "Ada"      # string
ready = True      # boolean
# print only shows the value — it does not define the type
print(score)
print(name)
print(ready)`,
          note: 'Read the comments first. print is just how we peek at the stored values.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Store then show',
          prompt: 'Make a variable called age set to 12. Then print age.',
          difficulty: 1,
          starterCode: `# Remember: age is the variable name, 12 is the value (an integer)\n# age = 12\n# print(age)\n`,
          tests: [
            { id: 't1', description: 'Prints 12', hint: 'age = 12 then print(age)', kind: 'stdout', expect: '12' },
            { id: 't2', description: 'Uses age', hint: 'age = ...', kind: 'codeMatches', expect: '\\bage\\s*=' },
          ],
        },
        {
          id: 'p2',
          title: 'A string value in a variable',
          prompt: 'Make a variable called word set to hi. Then print word.',
          difficulty: 1,
          starterCode: `# word holds a string value — use quotes\n`,
          tests: [
            { id: 't1', description: 'Prints hi', hint: 'word = "hi" then print(word)', kind: 'stdout', expect: 'hi' },
            { id: 't2', description: 'Uses word', hint: 'word = "hi"', kind: 'codeMatches', expect: '\\bword\\s*=' },
          ],
        },
      ],
    },
    {
      id: 'py-ess-values',
      title: 'What is a value?',
      summary: 'A value is a piece of data. Every value has a type that says what kind of data it is.',
      runner: 'python',
      sections: [
        {
          heading: 'Definition: value',
          body: `A value is one piece of information your program can work with.

Examples of values:
• 7
• 3.14
• "hello"
• True
• None

Values are the actual data. Later you will store them in variables so you can reuse them by name.`,
        },
        {
          heading: 'Definition: type',
          body: `Every value has a type. The type tells you what kind of information it is and what you can do with it.

Here are the main types you need first:

• A number can be an integer (whole number) or a float (decimal). Examples: 0, 7, -3, 3.14, 2.0
• A string is a string of letters (and other characters) written in quotes. Examples: "Ada", "hi", "42"
• A boolean is a true/false statement. In Python the only boolean values are True and False
• A missing value means “there is no value here yet.” In Python that value is called None
• A list is an ordered collection of values in square brackets. Example: [3, 6, 9]

The type matters. You can add 3 + 4, but you cannot add 3 + "hello" without converting first.`,
        },
        {
          heading: 'Why types matter',
          body: `Programs treat different types differently:

• Numbers are for counting, measuring, and math
• Strings are for names, messages, and any text
• Booleans are for yes/no decisions (later used in if statements)
• None is for “empty / unknown / not set”
• Lists are for several related values together

In the next lessons you will learn each type carefully, and also learn variables — names that hold values.`,
        },
      ],
      examples: [
        {
          title: 'Different kinds of values',
          code: `print(7)        # number (integer)
print(3.5)      # number (float / decimal)
print("Ada")    # string
print(True)     # boolean
print(None)     # missing value`,
          note: 'Each line is a different type of value.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'A number value',
          prompt: 'Print the number 10.',
          difficulty: 1,
          starterCode: `# Print the number 10\n`,
          tests: [{ id: 't1', description: 'Prints 10', hint: 'print(10)', kind: 'stdout', expect: '10' }],
        },
        {
          id: 'p2',
          title: 'A string value',
          prompt: 'Print the string hi (use quotes).',
          difficulty: 1,
          starterCode: `# Print "hi"\n`,
          tests: [
            { id: 't1', description: 'Prints hi', hint: 'print("hi")', kind: 'stdout', expect: 'hi' },
            { id: 't2', description: 'Uses quotes', hint: 'Put hi in quotes', kind: 'codeMatches', expect: '["\']hi["\']' },
          ],
        },
      ],
    },
    {
      id: 'py-ess-variables',
      title: 'Variables',
      summary: 'A variable is a name that stores a value so you can use it later.',
      runner: 'python',
      sections: [
        {
          heading: 'Definition: variable',
          body: `A variable is a named box that holds a value.

You create a variable with = (called assignment):

score = 10
name = "Ada"
ready = True

Read it as: “the variable score now holds the value 10.”

• The name is on the left (score, name, ready)
• The value is on the right (10, "Ada", True)
• = means “store this value in that name”
• = is not the same as ==. == asks “are these two things equal?”`,
        },
        {
          heading: 'Using and changing a variable',
          body: `After you store a value, use the variable’s name to get the value back:

score = 10
print(score)   → prints 10

You can replace the value later:

score = 10
score = 11
print(score)   → prints 11

The variable still has the same name. Only the value inside changed.`,
        },
        {
          heading: 'Rules for variable names',
          body: `• Use clear names: age, score, player_name
• Names cannot start with a digit (1score is illegal)
• Names cannot contain spaces (player name is illegal)
• Use underscore for multi-word names: player_name
• Prefer readable names over short ones like x or s (unless x really means a position)

A variable can hold any type of value: a number, a string, a boolean, None, or a list.`,
        },
      ],
      examples: [
        {
          title: 'Store different types in variables',
          code: `age = 15
name = "Ada"
ready = True
nickname = None
print(age)
print(name)
print(ready)
print(nickname)`,
          note: 'Each variable holds one value of a specific type.',
        },
        {
          title: 'Change a variable',
          code: `score = 0
score = 5
print(score)`,
          note: 'The last assignment is the value that remains.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Make a number variable',
          prompt: 'Make a variable called age set to 12. Then print age.',
          difficulty: 1,
          starterCode: `# age = 12\n# print age\n`,
          tests: [
            { id: 't1', description: 'Prints 12', hint: 'age = 12 then print(age)', kind: 'stdout', expect: '12' },
            { id: 't2', description: 'Uses age', hint: 'age = ...', kind: 'codeMatches', expect: '\\bage\\s*=' },
          ],
        },
        {
          id: 'p2',
          title: 'Make a string variable',
          prompt: 'Make a variable called name set to Ada. Then print name.',
          difficulty: 1,
          starterCode: `# name = "Ada"\n# print name\n`,
          tests: [
            { id: 't1', description: 'Prints Ada', hint: 'name = "Ada" then print(name)', kind: 'stdout', expect: 'Ada' },
            { id: 't2', description: 'Uses name', hint: 'name = "Ada"', kind: 'codeMatches', expect: '\\bname\\s*=' },
          ],
        },
        {
          id: 'p3',
          title: 'Change a variable',
          prompt: 'Set score to 0, then set score to 7, then print score.',
          difficulty: 1,
          starterCode: `# score = 0\n# score = 7\n# print score\n`,
          tests: [
            { id: 't1', description: 'Prints 7', hint: 'Assign 7 last, then print(score)', kind: 'stdout', expect: '7' },
            { id: 't2', description: 'Uses score', hint: 'score = ...', kind: 'codeMatches', expect: '\\bscore\\s*=' },
          ],
        },
      ],
    },
    {
      id: 'py-ess-numbers',
      title: 'Numbers (integers & decimals)',
      summary: 'A number can be an integer (whole) or a float (decimal). Both are numeric values.',
      runner: 'python',
      sections: [
        {
          heading: 'Definition: number',
          body: `A number is a numeric value you can use in math.

In Python, numbers come in two common forms:

• Integer (int) — a whole number with no decimal point
  Examples: 0, 1, 42, -3
• Float — a number that can have a decimal (fractional) part
  Examples: 3.14, 2.0, -0.5, 0.25

So: a number can have decimals and integers. Integers are whole; floats can include a decimal point.`,
        },
        {
          heading: 'When to use each',
          body: `• Counting people, lives, or items → usually an integer
  lives = 3
• Money, height, averages, measurements → usually a float
  price = 2.5
  height = 1.75

Both are numbers. The difference is whether you need whole values only, or values with decimal places.`,
        },
        {
          heading: 'What numbers are not',
          body: `• "7" in quotes is a string of characters, not a number
• True and False are booleans, not numbers (even though True can act like 1 in some math)
• None is missing — it is not zero

You can store numbers in variables:

count = 7
price = 3.5`,
        },
      ],
      examples: [
        {
          title: 'Integer and float variables',
          code: `count = 7
price = 3.5
print(count)
print(price)
print(count + 1)
print(price * 2)`,
          note: '7 is an integer. 3.5 is a float. Both are numbers.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'An integer variable',
          prompt: 'Make a variable called lives set to 3. Print lives.',
          difficulty: 1,
          starterCode: `# lives = 3\n# print lives\n`,
          tests: [
            { id: 't1', description: 'Prints 3', hint: 'lives = 3 then print(lives)', kind: 'stdout', expect: '3' },
            { id: 't2', description: 'Uses lives', hint: 'lives = 3', kind: 'codeMatches', expect: '\\blives\\s*=' },
          ],
        },
        {
          id: 'p2',
          title: 'A decimal variable',
          prompt: 'Make a variable called price set to 2.5. Print price.',
          difficulty: 1,
          starterCode: `# price = 2.5\n# print price\n`,
          tests: [
            { id: 't1', description: 'Prints 2.5', hint: 'price = 2.5 then print(price)', kind: 'stdout', expect: '2.5' },
            { id: 't2', description: 'Uses price', hint: 'price = 2.5', kind: 'codeMatches', expect: '\\bprice\\s*=' },
          ],
        },
        {
          id: 'p3',
          title: 'Simple math',
          prompt: 'Make a variable called n set to 10. Print n + 2.',
          difficulty: 1,
          starterCode: `# n = 10\n# print n + 2\n`,
          tests: [
            { id: 't1', description: 'Prints 12', hint: 'n = 10 then print(n + 2)', kind: 'stdout', expect: '12' },
            { id: 't2', description: 'Uses n', hint: 'n = 10', kind: 'codeMatches', expect: '\\bn\\s*=' },
          ],
        },
      ],
    },
    {
      id: 'py-ess-strings',
      title: 'Strings',
      summary: 'A string is a string of letters (and other characters) written in quotes.',
      runner: 'python',
      sections: [
        {
          heading: 'Definition: string',
          body: `A string is a string of letters — text made of characters.

In Python, write a string in quotes:

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

name = "Ada"
city = "Calgary"
print(name)

Join two strings with + :

greeting = "Hello"
name = "Ada"
print(greeting + " " + name)   → Hello Ada

+ joins strings. It does not add numbers when both sides are strings.`,
        },
        {
          heading: 'What a string is not',
          body: `• "7" is a string. 7 (no quotes) is a number
• "True" is a string. True (no quotes) is a boolean
• You cannot do "3" + 4 until you convert one side to the matching type

Rule: if it is in quotes, it is a string — even if it looks like a number or a boolean.`,
        },
      ],
      examples: [
        {
          title: 'String variables',
          code: `word = "code"
city = "Calgary"
print(word)
print(city)
print("Hi " + "Ada")`,
          note: 'Quotes make text a string.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Store a string',
          prompt: 'Make a variable called city set to Calgary. Print city.',
          difficulty: 1,
          starterCode: `# city = "Calgary"\n# print city\n`,
          tests: [
            { id: 't1', description: 'Prints Calgary', hint: 'city = "Calgary" then print(city)', kind: 'stdout', expect: 'Calgary' },
            { id: 't2', description: 'Uses city', hint: 'city = ...', kind: 'codeMatches', expect: '\\bcity\\s*=' },
          ],
        },
        {
          id: 'p2',
          title: 'Join two strings',
          prompt: 'Print Hello Ada by joining greeting and name with a space.',
          difficulty: 1,
          starterCode: `greeting = "Hello"\nname = "Ada"\n# print Hello Ada\n`,
          tests: [
            { id: 't1', description: 'Prints Hello Ada', hint: 'print(greeting + " " + name)', kind: 'stdout', expect: 'Hello Ada' },
          ],
        },
      ],
    },
    {
      id: 'py-ess-booleans',
      title: 'Booleans',
      summary: 'A boolean is a true/false statement.',
      runner: 'python',
      sections: [
        {
          heading: 'Definition: boolean',
          body: `A boolean is a true/false statement. It answers a yes/no question with only two possible answers.

In Python, the only boolean values are:

• True
• False

Important details:
• No quotes — True and False are not strings
• Capital T and F — true and false (lowercase) are wrong in Python
• A boolean is not the words "yes" / "no", and not the numbers 1 / 0 (even if those ideas feel related)

Examples of boolean meaning:
• ready = True   → yes, ready
• game_over = False   → no, not over`,
        },
        {
          heading: 'Booleans from comparisons',
          body: `Comparisons create boolean values automatically:

score = 85
print(score >= 60)   → True
print(score < 50)    → False

Common comparison operators:
• == equal to
• != not equal to
• < less than
• > greater than
• <= less than or equal
• >= greater than or equal

Later, if statements use booleans to decide what code runs.`,
        },
        {
          heading: 'What a boolean is not',
          body: `• "True" with quotes is a string, not a boolean
• None means missing — it is not False
• 0 is a number, not a boolean (even though it can be treated as “falsey” in some checks)

Store booleans in variables when you need a yes/no fact:

ready = True
passed = score >= 60`,
        },
      ],
      examples: [
        {
          title: 'Boolean values and a comparison',
          code: `ready = True
print(ready)
print(False)
score = 85
print(score >= 60)`,
          note: 'True and False are booleans. Comparisons also produce booleans.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Store a boolean',
          prompt: 'Make a variable called ready set to True. Print ready.',
          difficulty: 1,
          starterCode: `# ready = True\n# print ready\n`,
          tests: [
            { id: 't1', description: 'Prints True', hint: 'ready = True then print(ready)', kind: 'stdout', expect: 'True' },
            { id: 't2', description: 'Uses ready', hint: 'ready = True', kind: 'codeMatches', expect: '\\bready\\s*=' },
          ],
        },
        {
          id: 'p2',
          title: 'A false value',
          prompt: 'Make a variable called done set to False. Print done.',
          difficulty: 1,
          starterCode: `# done = False\n# print done\n`,
          tests: [
            { id: 't1', description: 'Prints False', hint: 'done = False then print(done)', kind: 'stdout', expect: 'False' },
            { id: 't2', description: 'Uses done', hint: 'done = False', kind: 'codeMatches', expect: '\\bdone\\s*=' },
          ],
        },
        {
          id: 'p3',
          title: 'Compare numbers',
          prompt: 'score is 85. Print whether score >= 60.',
          difficulty: 1,
          starterCode: `score = 85\n# print score >= 60\n`,
          tests: [
            { id: 't1', description: 'Prints True', hint: 'print(score >= 60)', kind: 'stdout', expect: 'True' },
            { id: 't2', description: 'Uses >=', hint: 'score >= 60', kind: 'codeIncludes', expect: '>=' },
          ],
        },
      ],
    },
    {
      id: 'py-ess-missing',
      title: 'Missing values (None)',
      summary: 'None means there is no value yet — a missing value.',
      runner: 'python',
      sections: [
        {
          heading: 'Definition: missing value',
          body: `A missing value means “there is nothing here yet” or “unknown.”

In Python, the missing value is called None.

Examples of when None is useful:
• nickname = None   → the player has no nickname yet
• answer = None     → no answer has been entered
• winner = None     → the game has not chosen a winner

None is its own type. It is not a string, not a number, and not a boolean.`,
        },
        {
          heading: 'What None is not',
          body: `• None is not 0 (zero is a number)
• None is not "" (empty string is still a string)
• None is not False (False is a boolean true/false statement)
• "None" in quotes is a string spelling the word None — not the real missing value

Use None when you want to say clearly: this variable exists, but it has no real value yet.`,
        },
      ],
      examples: [
        {
          title: 'A missing value in a variable',
          code: `nickname = None
print(nickname)
nickname = "Ace"
print(nickname)`,
          note: 'First there is no nickname. Later you store a real string.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Store None',
          prompt: 'Make a variable called nickname set to None. Print nickname.',
          difficulty: 1,
          starterCode: `# nickname = None\n# print nickname\n`,
          tests: [
            { id: 't1', description: 'Prints None', hint: 'nickname = None then print(nickname)', kind: 'stdout', expect: 'None' },
            { id: 't2', description: 'Uses nickname', hint: 'nickname = None', kind: 'codeMatches', expect: '\\bnickname\\s*=' },
          ],
        },
        {
          id: 'p2',
          title: 'Replace None later',
          prompt: 'Set answer to None, then set answer to yes, then print answer.',
          difficulty: 1,
          starterCode: `# answer = None\n# answer = "yes"\n# print answer\n`,
          tests: [
            { id: 't1', description: 'Prints yes', hint: 'Assign "yes" last, then print(answer)', kind: 'stdout', expect: 'yes' },
            { id: 't2', description: 'Uses None', hint: 'answer = None first', kind: 'codeIncludes', expect: 'None' },
          ],
        },
      ],
    },
    {
      id: 'py-ess-lists',
      title: 'Lists',
      summary: 'A list holds several values in order.',
      runner: 'python',
      sections: [
        {
          heading: 'Definition: list',
          body: `A list is an ordered group of values inside square brackets.

nums = [3, 6, 9]
names = ["Ada", "Lin"]

• The values stay in order
• Indexes start at 0 — nums[0] is the first item
• len(nums) tells you how many items are in the list

A list can hold numbers, strings, booleans, or even mixed types — but beginners usually keep one kind of value per list.`,
        },
        {
          heading: 'Lists and variables',
          body: `A list is itself a value, so you store it in a variable:

scores = [10, 20, 30]
print(scores[0])   → 10
print(len(scores)) → 3

The variable scores holds the whole list. Each slot inside the list holds one value.`,
        },
      ],
      examples: [
        {
          title: 'A short list',
          code: `nums = [3, 6, 9]
print(nums[0])
print(len(nums))`,
          note: 'Indexes start at 0.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'First item',
          prompt: 'Print the first item in nums.',
          difficulty: 1,
          starterCode: `nums = [3, 6, 9]\n# print the first item\n`,
          tests: [
            { id: 't1', description: 'Prints 3', hint: 'print(nums[0])', kind: 'stdout', expect: '3' },
          ],
        },
        {
          id: 'p2',
          title: 'How many items',
          prompt: 'Print how many items are in nums.',
          difficulty: 1,
          starterCode: `nums = [3, 6, 9]\n# print the length\n`,
          tests: [
            { id: 't1', description: 'Prints 3', hint: 'print(len(nums))', kind: 'stdout', expect: '3' },
            { id: 't2', description: 'Uses len', hint: 'len(nums)', kind: 'codeIncludes', expect: 'len(' },
          ],
        },
      ],
    },
    {
      id: 'py-ess-convert',
      title: 'Changing types',
      summary: 'Convert a value when you need a different type.',
      runner: 'python',
      sections: [
        {
          heading: 'Why convert?',
          body: `Sometimes you have the right information in the wrong type.

Common conversions:
• int("12") → 12   (digit text → integer)
• float("3.5") → 3.5
• str(5) → "5"     (number → text)
• You cannot turn None into a useful number without choosing a real value first

Use int or float before math on digit text. Use str when joining text with +.`,
        },
      ],
      examples: [
        {
          title: 'Convert then use',
          code: `raw = "12"
n = int(raw)
print(n + 1)
print("n=" + str(n))`,
          note: 'int for math; str for joining text.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Text to number',
          prompt: 'Turn raw into an integer, add 3, and print the result.',
          difficulty: 1,
          starterCode: `raw = "12"\n# int(raw) + 3, then print\n`,
          tests: [
            { id: 't1', description: 'Prints 15', hint: 'print(int(raw) + 3)', kind: 'stdout', expect: '15' },
            { id: 't2', description: 'Uses int', hint: 'int(raw)', kind: 'codeIncludes', expect: 'int(' },
          ],
        },
        {
          id: 'p2',
          title: 'Number to text',
          prompt: 'Print score: 7 using str and +.',
          difficulty: 1,
          starterCode: `n = 7\n# print "score: " + str(n)\n`,
          tests: [
            { id: 't1', description: 'Prints score: 7', hint: 'print("score: " + str(n))', kind: 'stdout', expect: 'score: 7' },
            { id: 't2', description: 'Uses str', hint: 'str(n)', kind: 'codeIncludes', expect: 'str(' },
          ],
        },
      ],
    },
  ],
}
