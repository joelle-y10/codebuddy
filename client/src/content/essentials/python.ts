import type { Module } from '../../types'

/** First module: define each data type clearly, then practise using them. */
export const pythonEssentialsModule: Module = {
  id: 'py-essentials',
  title: 'Values & types',
  summary:
    'Start here: learn what an integer, float, string, and boolean are — then when to use each and how they print.',
  lessons: [
    {
      id: 'py-ess-values',
      title: 'What is a value?',
      summary: 'A value is a piece of data. Every value has a type. Learn the four core types by name.',
      runner: 'python',
      sections: [
        {
          heading: 'Value + type',
          body: `A value is one piece of information your program stores or uses — like 7, "Ada", or True.\n\nEvery value has a type. The type is the category of that value. The type decides what you are allowed to do with it (math? join text? yes/no decisions?).`,
        },
        {
          heading: 'The core types — memorize these definitions',
          body: `• Integer (int) — a whole number with no decimal point. Examples: 0, 7, -3, 100. Use for counts, scores, indexes.\n\n• Float — a number that can have a decimal point. Examples: 3.14, 2.0, -0.5. Use for measurements and averages.\n\n• String (str) — text. Always written in quotes. Examples: "Ada", "hello", "42", "". Use for names and messages.\n\n• Boolean (bool) — a true/false value only. In Python: True or False (capital T/F, no quotes). Use for yes/no decisions.\n\n• List — an ordered collection of values in [brackets]. Example: [10, 20, 30]. (You will practise lists after the basics.)`,
        },
        {
          heading: 'Same looking output ≠ same type',
          body: `print(False) and print("False") both show False on the screen — but one is a boolean and one is a string.\n\nprint(type(False)) shows <class 'bool'>. print(type("False")) shows <class 'str'>. Always know which type you meant.`,
        },
      ],
      examples: [
        {
          title: 'Each type, named',
          code: `# integer — whole number\ncount = 7\n# float — decimal number\nprice = 3.5\n# string — text in quotes\nname = "Ada"\n# boolean — True or False only\nready = True\n\nprint(type(count))\nprint(type(price))\nprint(type(name))\nprint(type(ready))`,
          note: 'type(...) tells you the category of the value.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Make one of each',
          prompt:
            'Create an integer n = 5, a float x = 2.5, a string label = "hi", and a boolean ok = False. Print them on four lines in that order.',
          difficulty: 1,
          starterCode: `# integer n, float x, string label, boolean ok — then print each\n`,
          tests: [
            {
              id: 't1',
              description: 'Prints 5, 2.5, hi, False',
              hint: 'print(n)\\nprint(x)\\nprint(label)\\nprint(ok)',
              kind: 'stdout',
              expect: '5\n2.5\nhi\nFalse',
            },
            {
              id: 't2',
              description: 'Uses boolean False',
              hint: 'ok = False with no quotes',
              kind: 'codeMatches',
              expect: '\\bFalse\\b',
            },
            {
              id: 't3',
              description: 'Uses a float literal',
              hint: 'x = 2.5 with a decimal point',
              kind: 'codeMatches',
              expect: '2\\.5',
            },
          ],
        },
        {
          id: 'p2',
          title: 'Check a boolean’s type',
          prompt: 'Print type(True) — the output should mention bool.',
          difficulty: 2,
          starterCode: `# A boolean is True or False. Print its type.\n`,
          tests: [
            { id: 't1', description: 'Mentions bool', hint: 'print(type(True))', kind: 'stdoutIncludes', expect: 'bool' },
            { id: 't2', description: 'Uses type(', hint: 'type(...)', kind: 'codeIncludes', expect: 'type(' },
          ],
        },
      ],
    },
    {
      id: 'py-ess-numbers',
      title: 'Integers & floats',
      summary: 'Integer = whole number. Float = decimal number. When to use each.',
      runner: 'python',
      sections: [
        {
          heading: 'Definition: integer (int)',
          body: `An integer is a whole number — no fractional part.\n\nExamples: 0, 1, 42, -3.\n\nNot integers: 3.14 (that’s a float), "7" (that’s a string because of the quotes).`,
        },
        {
          heading: 'Definition: float',
          body: `A float is a number that can include a decimal point.\n\nExamples: 3.14, 2.0, -0.5, 0.25.\n\nEven 2.0 is a float in Python, because it has a decimal point in how you wrote it (or because math produced a decimal).`,
        },
        {
          heading: 'When to use which',
          body: `• Counting, looping indexes, “how many?” → integer\n• Measurements, averages, money-style decimals → float\n\nMath: + - * /  and  // (whole division)  % (remainder)  ** (power).\nIn Python 3, 7 / 2 is the float 3.5. 7 // 2 is the integer 3.`,
        },
        {
          heading: 'What they can’t be',
          body: `• An integer is not text — "level " + 3 fails unless you convert with str(3).\n• A string of digits like "10" is not an integer until you use int("10").\n• Don’t use a float as a list index (indexes must be integers).`,
        },
      ],
      examples: [
        {
          title: 'int vs float',
          code: `print(7)        # integer\nprint(7.0)      # float\nprint(7 / 2)    # float 3.5\nprint(7 // 2)   # integer 3\nprint(type(7))\nprint(type(7.0))`,
          note: '/ gives a float; // keeps a whole number.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print an integer',
          prompt: 'Print the integer 17 (no quotes, no decimal point).',
          difficulty: 1,
          starterCode: `# Print an integer\n`,
          tests: [
            { id: 't1', description: 'Prints 17', hint: 'print(17)', kind: 'stdout', expect: '17' },
            { id: 't2', description: 'Uses int literal', hint: '17 without quotes', kind: 'codeMatches', expect: 'print\\(\\s*17\\s*\\)' },
          ],
        },
        {
          id: 'p2',
          title: 'Print a float',
          prompt: 'Print the float 4.5.',
          difficulty: 1,
          starterCode: `# Print a float\n`,
          tests: [
            { id: 't1', description: 'Prints 4.5', hint: 'print(4.5)', kind: 'stdout', expect: '4.5' },
            { id: 't2', description: 'Uses a decimal', hint: '4.5 with a dot', kind: 'codeMatches', expect: '4\\.5' },
          ],
        },
        {
          id: 'p3',
          title: 'Remainder',
          prompt: 'Print the remainder of 17 divided by 5 (integer answer 2).',
          difficulty: 2,
          starterCode: `# 17 % 5\n`,
          tests: [
            { id: 't1', description: 'Prints 2', hint: 'print(17 % 5)', kind: 'stdout', expect: '2' },
            { id: 't2', description: 'Uses %', hint: '% operator', kind: 'codeIncludes', expect: '%' },
          ],
        },
      ],
    },
    {
      id: 'py-ess-strings',
      title: 'Strings (text)',
      summary: 'A string is text in quotes — letters, digits, spaces, anything you read as words.',
      runner: 'python',
      sections: [
        {
          heading: 'Definition: string (str)',
          body: `A string is text. You write it inside quotes so Python knows it’s text, not a variable name or a number.\n\nExamples: "Ada", 'hello', "42", "" (empty string).\n\nImportant: "42" is a string of characters, not the integer 42. "False" is a string, not the boolean False.`,
        },
        {
          heading: 'When to use strings',
          body: `• Names, messages, labels\n• Anything the user should read as text\n• Codes that look like numbers but aren’t for math (zip codes, phone numbers) — keep them as strings so leading zeros aren’t lost\n\nlen("code") is 4. Join with +: "Hi " + "Ada". Repeat with *: "ha" * 3 → "hahaha".`,
        },
        {
          heading: 'What strings can’t do',
          body: `• "3" + 1 fails — convert with int("3") for math, or str(1) for joining.\n• A string is not a boolean — "True" is text, True is boolean.\n• You change strings by building new ones, not by editing one letter in place like a list.`,
        },
      ],
      examples: [
        {
          title: 'String vs number that looks the same',
          code: `print("42")      # string — text characters\nprint(42)        # integer — a number\nprint(type("42"))\nprint(type(42))\nprint("Hi " + "Ada")\nprint(len("code"))`,
          note: 'Quotes make it a string.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print a string',
          prompt: 'Print the string hello (with quotes in your code).',
          difficulty: 1,
          starterCode: `# Print a string\n`,
          tests: [
            { id: 't1', description: 'Prints hello', hint: 'print("hello")', kind: 'stdout', expect: 'hello' },
            { id: 't2', description: 'Uses quotes', hint: 'Put hello in quotes', kind: 'codeMatches', expect: '["\']hello["\']' },
          ],
        },
        {
          id: 'p2',
          title: 'Join a greeting',
          prompt: 'Using greeting and name, print Hello Ada (space between).',
          difficulty: 1,
          starterCode: `greeting = "Hello"\nname = "Ada"\n# print Hello Ada\n`,
          tests: [
            { id: 't1', description: 'Prints Hello Ada', hint: 'print(greeting + " " + name)', kind: 'stdout', expect: 'Hello Ada' },
          ],
        },
        {
          id: 'p3',
          title: 'String length',
          prompt: 'Print the length of word (should be 6).',
          difficulty: 2,
          starterCode: `word = "python"\n# print its length\n`,
          tests: [
            { id: 't1', description: 'Prints 6', hint: 'print(len(word))', kind: 'stdout', expect: '6' },
            { id: 't2', description: 'Uses len', hint: 'len(...)', kind: 'codeIncludes', expect: 'len(' },
          ],
        },
      ],
    },
    {
      id: 'py-ess-booleans',
      title: 'Booleans (True / False)',
      summary: 'A boolean is a true/false value — only True or False.',
      runner: 'python',
      sections: [
        {
          heading: 'Definition: boolean (bool)',
          body: `A boolean is a true/false value. It answers a yes/no question.\n\nIn Python the only boolean values are:\n• True\n• False\n\nThey must be capitalized, and they must NOT be in quotes.\n\n• True  → boolean\n• False → boolean\n• "True" / "False" → strings (text that happens to look similar)\n• 1 and 0 → integers, not booleans (even though they can act truthy/falsy later)`,
        },
        {
          heading: 'When to use booleans',
          body: `• Flags: ready = True, game_over = False\n• Results of comparisons: score >= 60 produces a boolean\n• Conditions in if / while\n\nCombine with and / or / not: age >= 13 and age <= 19.`,
        },
        {
          heading: 'What booleans aren’t',
          body: `• "False" with quotes is a string, not a boolean.\n• = assigns a value. == asks “are these equal?”\n• Prefer real True/False over 1/0 while learning.`,
        },
      ],
      examples: [
        {
          title: 'Boolean vs string that looks like one',
          code: `print(False)       # boolean\nprint("False")     # string\nprint(type(False))\nprint(type("False"))\n\nscore = 85\nprint(score >= 60)   # comparison → boolean True`,
          note: 'No quotes = boolean. Quotes = string.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print a boolean',
          prompt: 'Print the boolean True (no quotes).',
          difficulty: 1,
          starterCode: `# A boolean is True or False. Print True.\n`,
          tests: [
            { id: 't1', description: 'Prints True', hint: 'print(True)', kind: 'stdout', expect: 'True' },
            { id: 't2', description: 'Uses True boolean', hint: 'True without quotes', kind: 'codeMatches', expect: 'print\\(\\s*True\\s*\\)' },
          ],
        },
        {
          id: 'p2',
          title: 'Compare with >=',
          prompt: 'Print whether score >= 60 (should be True). That comparison creates a boolean.',
          difficulty: 2,
          starterCode: `score = 85\n# print the boolean result of score >= 60\n`,
          tests: [
            { id: 't1', description: 'Prints True', hint: 'print(score >= 60)', kind: 'stdout', expect: 'True' },
            { id: 't2', description: 'Uses >=', hint: 'score >= 60', kind: 'codeIncludes', expect: '>=' },
          ],
        },
        {
          id: 'p3',
          title: 'Use and',
          prompt: 'Print whether ready is True and score >= 60 (should be True).',
          difficulty: 3,
          starterCode: `ready = True\nscore = 85\n# print ready and score >= 60\n`,
          tests: [
            { id: 't1', description: 'Prints True', hint: 'print(ready and score >= 60)', kind: 'stdout', expect: 'True' },
            { id: 't2', description: 'Uses and', hint: 'and between conditions', kind: 'codeIncludes', expect: 'and' },
          ],
        },
      ],
    },
    {
      id: 'py-ess-output',
      title: 'How types look when printed',
      summary: 'Now that you know the definitions — see how print shows each type (and how look-alikes can fool you).',
      runner: 'python',
      sections: [
        {
          heading: 'print shows characters — type is still real',
          body: `print(...) turns a value into characters on the screen. Two different types can look the same:\n\n• print(42) and print("42") both show 42\n• print(False) and print("False") both show False\n\nYou already know the definitions:\n• 42 without quotes → integer\n• "42" with quotes → string\n• False without quotes → boolean\n• "False" with quotes → string`,
        },
        {
          heading: 'How each type usually prints',
          body: `• Integer / float → digits (3.5 for a float)\n• String → the text inside (quotes are NOT shown in the console)\n• Boolean → True or False\n• None → None (Python’s “no value” marker)\n• List → [1, 2, 3]\n\nWhen unsure: print(type(value)).`,
        },
      ],
      examples: [
        {
          title: 'Look-alikes side by side',
          code: `print(42)\nprint("42")\nprint(False)\nprint("False")\nprint(type(42))\nprint(type("42"))\nprint(type(False))\nprint(type("False"))`,
          note: 'Same looking line, different type.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Integer then string',
          prompt: 'Print the integer 7, then on the next line print the string seven.',
          difficulty: 1,
          starterCode: `# integer 7, then string "seven"\n`,
          tests: [
            { id: 't1', description: 'Two-line output', hint: 'print(7) then print("seven")', kind: 'stdout', expect: '7\nseven' },
          ],
        },
        {
          id: 'p2',
          title: 'Boolean vs string False',
          prompt:
            'A boolean is True/False. A string is text in quotes. Print the boolean False, then print the string False on the next line.',
          difficulty: 2,
          starterCode: `# boolean False (no quotes), then string "False"\n`,
          tests: [
            { id: 't1', description: 'False then False', hint: 'print(False)\\nprint("False")', kind: 'stdout', expect: 'False\nFalse' },
            { id: 't2', description: 'Uses boolean False', hint: 'False without quotes first', kind: 'codeMatches', expect: 'print\\(\\s*False\\s*\\)' },
            { id: 't3', description: 'Uses string False', hint: 'print("False")', kind: 'codeIncludes', expect: '"False"' },
          ],
        },
        {
          id: 'p3',
          title: 'Show None',
          prompt: 'Print None (the special “no value” marker — not a string).',
          difficulty: 2,
          starterCode: `# print None\n`,
          tests: [
            { id: 't1', description: 'Prints None', hint: 'print(None)', kind: 'stdout', expect: 'None' },
            { id: 't2', description: 'Uses None literal', hint: 'None without quotes', kind: 'codeMatches', expect: '\\bNone\\b' },
          ],
        },
      ],
    },
    {
      id: 'py-ess-lists',
      title: 'Lists (collections)',
      summary: 'A list is an ordered collection of values in [brackets].',
      runner: 'python',
      sections: [
        {
          heading: 'Definition: list',
          body: `A list is an ordered collection of values inside square brackets.\n\nExample: scores = [10, 20, 30]\n\n• scores[0] is the first item (10) — indexes start at 0\n• len(scores) is how many items (3)\n• Lists can hold integers, strings, booleans, or mixes — beginners should usually keep one type per list`,
        },
        {
          heading: 'When to use lists',
          body: `• Many related values (names, scores, prices)\n• When you’ll loop through every item\n• When the collection can grow: scores.append(40)`,
        },
        {
          heading: 'What lists aren’t',
          body: `• A single integer is not a list — 5 has no [0].\n• A string is not a list of numbers.\n• Index out of range crashes: scores[3] on a length-3 list is invalid (only 0, 1, 2).`,
        },
      ],
      examples: [
        {
          title: 'Create, index, loop',
          code: `nums = [3, 6, 9]\nprint(nums[0])\nprint(len(nums))\nfor n in nums:\n    print(n)`,
          note: 'First index is 0; len is how many items.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'First item',
          prompt: 'Print the first item of nums (3).',
          difficulty: 1,
          starterCode: `nums = [3, 6, 9]\n# print first item\n`,
          tests: [
            { id: 't1', description: 'Prints 3', hint: 'print(nums[0])', kind: 'stdout', expect: '3' },
            { id: 't2', description: 'Indexes 0', hint: 'nums[0]', kind: 'codeIncludes', expect: '[0]' },
          ],
        },
        {
          id: 'p2',
          title: 'List length',
          prompt: 'Print how many items are in nums (3).',
          difficulty: 2,
          starterCode: `nums = [3, 6, 9]\n# print length\n`,
          tests: [
            { id: 't1', description: 'Prints 3', hint: 'print(len(nums))', kind: 'stdout', expect: '3' },
            { id: 't2', description: 'Uses len', hint: 'len(nums)', kind: 'codeIncludes', expect: 'len(' },
          ],
        },
        {
          id: 'p3',
          title: 'Loop the list',
          prompt: 'Use a for loop to print each number in nums on its own line.',
          difficulty: 2,
          starterCode: `nums = [3, 6, 9]\n# for loop printing each\n`,
          tests: [
            { id: 't1', description: 'Prints 3\\n6\\n9', hint: 'for n in nums: print(n)', kind: 'stdout', expect: '3\n6\n9' },
            { id: 't2', description: 'Uses for', hint: 'for n in nums', kind: 'codeIncludes', expect: 'for ' },
          ],
        },
      ],
    },
    {
      id: 'py-ess-convert',
      title: 'Types & conversion',
      summary: 'Convert between int, float, str, and bool when you need a different type.',
      runner: 'python',
      sections: [
        {
          heading: 'Ask the type',
          body: `type(x) tells you the category. Common results: int, float, str, bool, list.`,
        },
        {
          heading: 'Convert between types',
          body: `• str(5) → "5" (number → text)\n• int("12") → 12 (digit text → integer)\n• float("3.5") → 3.5\n• bool(0) is False; bool(1) is True; bool("") is False; bool("hi") is True\n\nint("12.5") fails — use float first for decimals.`,
        },
        {
          heading: 'Why convert?',
          body: `Input often arrives as strings even when it looks like numbers. Convert before math. Convert numbers to strings when building messages with + (or use f-strings).`,
        },
      ],
      examples: [
        {
          title: 'Convert for math and text',
          code: `raw = "12"\nn = int(raw)\nprint(n + 1)\nprint("n=" + str(n))`,
          note: 'int before math; str before + join.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Stringify a number',
          prompt: 'Print score: 7 using + and str (not an f-string).',
          difficulty: 2,
          starterCode: `n = 7\n# print "score: " + ...\n`,
          tests: [
            { id: 't1', description: 'Prints score: 7', hint: 'print("score: " + str(n))', kind: 'stdout', expect: 'score: 7' },
            { id: 't2', description: 'Uses str(', hint: 'str(n)', kind: 'codeIncludes', expect: 'str(' },
          ],
        },
        {
          id: 'p2',
          title: 'Parse digits',
          prompt: 'Convert raw to an int, add 3, print the result (15).',
          difficulty: 2,
          starterCode: `raw = "12"\n# int, add 3, print\n`,
          tests: [
            { id: 't1', description: 'Prints 15', hint: 'print(int(raw) + 3)', kind: 'stdout', expect: '15' },
            { id: 't2', description: 'Uses int(', hint: 'int(raw)', kind: 'codeIncludes', expect: 'int(' },
          ],
        },
        {
          id: 'p3',
          title: 'Type of True',
          prompt: 'Print type(True) — output should mention bool.',
          difficulty: 2,
          starterCode: `# print type(True)\n`,
          tests: [
            { id: 't1', description: 'Mentions bool', hint: 'print(type(True))', kind: 'stdoutIncludes', expect: 'bool' },
            { id: 't2', description: 'Uses type(', hint: 'type(...)', kind: 'codeIncludes', expect: 'type(' },
          ],
        },
      ],
    },
  ],
}
