import type { Module } from '../../types'

/** First module: values, variables, and simple type practice. */
export const pythonEssentialsModule: Module = {
  id: 'py-essentials',
  title: 'Values, variables & types',
  summary:
    'Start here: what a value is, what a variable is, then integers, floats, strings, and booleans — with simple practice.',
  lessons: [
    {
      id: 'py-ess-values',
      title: 'What is a value?',
      summary: 'A value is a piece of data. Every value has a type.',
      runner: 'python',
      sections: [
        {
          heading: 'Value + type',
          body: `A value is one piece of information — like 7, "Ada", or True.\n\nEvery value has a type (its category):\n\n• Integer (int) — a whole number: 0, 7, -3\n• Float — a decimal number: 3.14, 2.0\n• String (str) — text in quotes: "hello", "42"\n• Boolean (bool) — True or False only (no quotes)`,
        },
      ],
      examples: [
        {
          title: 'Four values',
          code: `print(7)\nprint(3.5)\nprint("Ada")\nprint(True)`,
          note: 'Each line prints one value.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print a number',
          prompt: 'Print 10.',
          difficulty: 1,
          starterCode: `# Print 10\n`,
          tests: [{ id: 't1', description: 'Prints 10', hint: 'print(10)', kind: 'stdout', expect: '10' }],
        },
        {
          id: 'p2',
          title: 'Print text',
          prompt: 'Print the word hi.',
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
      summary: 'A variable is a name that holds a value.',
      runner: 'python',
      sections: [
        {
          heading: 'Definition: variable',
          body: `A variable is a name that stores a value so you can use it later.\n\nYou create one with = (assignment):\n\nscore = 10\nname = "Ada"\nready = True\n\n• The name is on the left (score, name, ready)\n• The value is on the right (10, "Ada", True)\n• = means “put this value into that name” — it is not the same as == (which asks “are these equal?”)`,
        },
        {
          heading: 'Using a variable',
          body: `After you store a value, use the name to get it back:\n\nscore = 10\nprint(score)   → prints 10\n\nYou can change it later:\n\nscore = 10\nscore = 11\nprint(score)   → prints 11`,
        },
        {
          heading: 'Good names',
          body: `Use clear names: score, name, total — not s or x (unless x is a position).\n\nNames cannot start with a digit. They cannot have spaces. Use underscore for multi-word names: player_name.`,
        },
      ],
      examples: [
        {
          title: 'Store and print',
          code: `age = 15\nname = "Ada"\nprint(age)\nprint(name)`,
          note: 'print the variable name — not the word in quotes unless you want text.',
        },
        {
          title: 'Change a variable',
          code: `score = 0\nscore = 5\nprint(score)`,
          note: 'The last value assigned is what print shows.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Make a variable',
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
          title: 'Store a name',
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
          title: 'Change it',
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
      title: 'Integers & floats',
      summary: 'Integer = whole number. Float = decimal number.',
      runner: 'python',
      sections: [
        {
          heading: 'Definition: integer (int)',
          body: `An integer is a whole number — no decimal point.\n\nExamples: 0, 1, 42, -3.`,
        },
        {
          heading: 'Definition: float',
          body: `A float is a number with a decimal point.\n\nExamples: 3.14, 2.0, -0.5.`,
        },
        {
          heading: 'When to use which',
          body: `• Counting (“how many?”) → integer\n• Measurements and averages → float\n\nYou can store them in variables: count = 3 or price = 2.5.`,
        },
      ],
      examples: [
        {
          title: 'int and float',
          code: `count = 7\nprice = 3.5\nprint(count)\nprint(price)`,
          note: '7 is an integer. 3.5 is a float.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print an integer',
          prompt: 'Print 17.',
          difficulty: 1,
          starterCode: `# Print 17\n`,
          tests: [{ id: 't1', description: 'Prints 17', hint: 'print(17)', kind: 'stdout', expect: '17' }],
        },
        {
          id: 'p2',
          title: 'Print a float',
          prompt: 'Print 4.5.',
          difficulty: 1,
          starterCode: `# Print 4.5\n`,
          tests: [{ id: 't1', description: 'Prints 4.5', hint: 'print(4.5)', kind: 'stdout', expect: '4.5' }],
        },
        {
          id: 'p3',
          title: 'Store a float',
          prompt: 'Make a variable called price set to 2.5. Print price.',
          difficulty: 1,
          starterCode: `# price = 2.5\n# print price\n`,
          tests: [
            { id: 't1', description: 'Prints 2.5', hint: 'price = 2.5 then print(price)', kind: 'stdout', expect: '2.5' },
            { id: 't2', description: 'Uses price', hint: 'price = 2.5', kind: 'codeMatches', expect: '\\bprice\\s*=' },
          ],
        },
      ],
    },
    {
      id: 'py-ess-strings',
      title: 'Strings (text)',
      summary: 'A string is text in quotes.',
      runner: 'python',
      sections: [
        {
          heading: 'Definition: string (str)',
          body: `A string is text. Write it in quotes so Python knows it is text.\n\nExamples: "Ada", "hello", "42".\n\n"42" is a string (text). 42 without quotes is an integer (a number).`,
        },
        {
          heading: 'Variables hold strings too',
          body: `name = "Ada"\nprint(name)\n\nJoin two strings with +: "Hi " + "Ada" → Hi Ada.`,
        },
      ],
      examples: [
        {
          title: 'String in a variable',
          code: `word = "code"\nprint(word)\nprint("Hi " + "Ada")`,
          note: 'Quotes make text a string.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print a string',
          prompt: 'Print hello.',
          difficulty: 1,
          starterCode: `# Print "hello"\n`,
          tests: [
            { id: 't1', description: 'Prints hello', hint: 'print("hello")', kind: 'stdout', expect: 'hello' },
          ],
        },
        {
          id: 'p2',
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
          id: 'p3',
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
      title: 'Booleans (True / False)',
      summary: 'A boolean is a true/false value.',
      runner: 'python',
      sections: [
        {
          heading: 'Definition: boolean (bool)',
          body: `A boolean is a true/false value. It answers a yes/no question.\n\nIn Python the only boolean values are:\n• True\n• False\n\nNo quotes. Capital T and F.\n\n"True" with quotes is a string, not a boolean.`,
        },
        {
          heading: 'Booleans in variables',
          body: `ready = True\nprint(ready)\n\nComparisons also make booleans: score >= 60.`,
        },
      ],
      examples: [
        {
          title: 'Boolean values',
          code: `ready = True\nprint(ready)\nprint(False)\nprint(type(True))`,
          note: 'True and False are booleans.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print a boolean',
          prompt: 'Print True.',
          difficulty: 1,
          starterCode: `# Print True (no quotes)\n`,
          tests: [
            { id: 't1', description: 'Prints True', hint: 'print(True)', kind: 'stdout', expect: 'True' },
            { id: 't2', description: 'Uses True', hint: 'True without quotes', kind: 'codeMatches', expect: 'print\\(\\s*True\\s*\\)' },
          ],
        },
        {
          id: 'p2',
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
      id: 'py-ess-output',
      title: 'How types look when printed',
      summary: 'Different types can look the same when printed — know which one you meant.',
      runner: 'python',
      sections: [
        {
          heading: 'Look-alikes',
          body: `print(42) and print("42") both show 42 — but one is an integer and one is a string.\n\nprint(False) and print("False") both show False — but one is a boolean and one is a string.\n\nRule: quotes → string. No quotes on True/False → boolean. No quotes on digits → number.`,
        },
      ],
      examples: [
        {
          title: 'Side by side',
          code: `print(42)\nprint("42")\nprint(False)\nprint("False")`,
          note: 'Same looking output, different types.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Number then word',
          prompt: 'Print 7. Then print seven on the next line.',
          difficulty: 1,
          starterCode: `# print 7\n# print "seven"\n`,
          tests: [
            { id: 't1', description: 'Two lines', hint: 'print(7) then print("seven")', kind: 'stdout', expect: '7\nseven' },
          ],
        },
        {
          id: 'p2',
          title: 'Boolean then string',
          prompt: 'Print the boolean False. Then print the string False on the next line.',
          difficulty: 1,
          starterCode: `# print False\n# print "False"\n`,
          tests: [
            { id: 't1', description: 'False then False', hint: 'print(False) then print("False")', kind: 'stdout', expect: 'False\nFalse' },
            { id: 't2', description: 'Uses boolean False', hint: 'False without quotes first', kind: 'codeMatches', expect: 'print\\(\\s*False\\s*\\)' },
            { id: 't3', description: 'Uses string False', hint: 'print("False")', kind: 'codeIncludes', expect: '"False"' },
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
          body: `A list is an ordered group of values in square brackets.\n\nnums = [3, 6, 9]\n\n• nums[0] is the first item (3)\n• len(nums) is how many items (3)`,
        },
      ],
      examples: [
        {
          title: 'A short list',
          code: `nums = [3, 6, 9]\nprint(nums[0])\nprint(len(nums))`,
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
          heading: 'Common conversions',
          body: `• int("12") → 12 (text digits → integer)\n• str(5) → "5" (number → text)\n• float("3.5") → 3.5\n\nUse int before math on digit text. Use str when joining text with +.`,
        },
      ],
      examples: [
        {
          title: 'Convert then use',
          code: `raw = "12"\nn = int(raw)\nprint(n + 1)\nprint("n=" + str(n))`,
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
