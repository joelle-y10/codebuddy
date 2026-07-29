import type { Module } from '../../types'

/** First module in every coding track: what values are, when to use them, what they can’t be. */
export const pythonEssentialsModule: Module = {
  id: 'py-essentials',
  title: 'Values & types',
  summary:
    'Start here: what a value is, the main data types, when to use each, and what each type can’t do.',
  lessons: [
    {
      id: 'py-ess-values',
      title: 'What is a value?',
      summary: 'Programs store and use values. Every value has a type that decides what you can do with it.',
      runner: 'python',
      sections: [
        {
          heading: 'Values are the data your program works with',
          body: `A value is a single piece of information: the number 7, the text "Ada", the yes/no answer True, or a list of scores [10, 20, 30].\n\nYou put values in variables (name = "Ada"), pass them to functions (print(name)), and combine them (score + 1).`,
        },
        {
          heading: 'Type = the rules for that value',
          body: `The type answers: what kind of value is this, and what operations are allowed?\n\n• int — whole numbers (count, index, score)\n• float — decimals (measurements, averages)\n• str — text (names, messages)\n• bool — True or False only (decisions)\n• list — ordered collection of values (many scores, many names)\n\nprint(type(x)) shows the type when you’re unsure.`,
        },
        {
          heading: 'Wrong type = wrong result or an error',
          body: `"3" + "4" is "34" (text join). 3 + 4 is 7 (math). Mixing types without converting often fails: "level " + 3 raises TypeError — convert with str(3) or use an f-string.\n\nRule of thumb: decide the type first, then write the code.`,
        },
      ],
      examples: [
        {
          title: 'Four core values',
          code: `count = 3          # int\nname = "Ada"       # str\nready = True       # bool\nscores = [10, 20]  # list\nprint(type(count), type(name), type(ready), type(scores))`,
          note: 'Same print(...) call can show several types.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Store each kind',
          prompt: 'Create n = 5, label = "hi", ok = False, then print each on its own line (in that order).',
          difficulty: 1,
          starterCode: `# n, label, ok — then print each\n`,
          tests: [
            { id: 't1', description: 'Prints 5, hi, False', hint: 'print(n)\\nprint(label)\\nprint(ok)', kind: 'stdout', expect: '5\nhi\nFalse' },
            { id: 't2', description: 'Uses False boolean', hint: 'ok = False (no quotes)', kind: 'codeMatches', expect: '\\bFalse\\b' },
          ],
        },
        {
          id: 'p2',
          title: 'Ask the type',
          prompt: 'Print type(7) — output should mention int.',
          difficulty: 2,
          starterCode: `# print type(7)\n`,
          tests: [
            { id: 't1', description: 'Mentions int', hint: 'print(type(7))', kind: 'stdoutIncludes', expect: 'int' },
            { id: 't2', description: 'Uses type(', hint: 'type(...)', kind: 'codeIncludes', expect: 'type(' },
          ],
        },
      ],
    },
    {
      id: 'py-ess-output',
      title: 'Kinds of output',
      summary: 'What print shows for text, numbers, booleans, and missing values.',
      runner: 'python',
      sections: [
        {
          heading: 'Output is just text on the screen',
          body: `When you print(...), Python converts the value into characters and shows them in the console. Different types often look similar — so you must know what you meant to print.\n\nprint(42) and print("42") both look like 42, but one is a number and one is a string. That matters when you do math or join text later.`,
        },
        {
          heading: 'How common types print',
          body: `• Strings print their characters: print("hi") → hi (no quotes in the console)\n• Numbers print digits: print(3.5) → 3.5\n• Booleans print True or False (capital T/F)\n• None prints None — Python’s “no value” marker\n• Lists print with brackets: print([1, 2]) → [1, 2]\n\nTip: print(type(value)) shows the real type when you’re unsure.`,
        },
        {
          heading: 'Several values in one print',
          body: `print("score", 10, True) prints the pieces separated by spaces: score 10 True.\n\nThat is handy for debugging. For polished messages, prefer f-strings: print(f"score {10}").`,
        },
      ],
      examples: [
        {
          title: 'Same look, different types',
          code: `print(42)\nprint("42")\nprint(True)\nprint("True")\nprint(None)\nprint(type(42))\nprint(type("42"))`,
          note: '42 and "42" look alike; type() reveals the difference.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print a number and a string',
          prompt: 'Print 7 on the first line, then print seven on the second line (the word).',
          difficulty: 1,
          starterCode: `# number 7, then the word seven\n`,
          tests: [
            { id: 't1', description: 'Two-line output', hint: 'print(7) then print("seven")', kind: 'stdout', expect: '7\nseven' },
          ],
        },
        {
          id: 'p2',
          title: 'Boolean vs string',
          prompt: 'Print the boolean False, then print the string False on the next line.',
          difficulty: 2,
          starterCode: `# boolean False, then string "False"\n`,
          tests: [
            { id: 't1', description: 'False then False', hint: 'print(False)\\nprint("False")', kind: 'stdout', expect: 'False\nFalse' },
            { id: 't2', description: 'Uses boolean False', hint: 'False without quotes first', kind: 'codeMatches', expect: 'print\\(\\s*False\\s*\\)' },
            { id: 't3', description: 'Uses string False', hint: 'print("False")', kind: 'codeIncludes', expect: '"False"' },
          ],
        },
        {
          id: 'p3',
          title: 'Show None',
          prompt: 'Print None (the special value, not a string).',
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
      id: 'py-ess-numbers',
      title: 'Integers & numbers',
      summary: 'Whole numbers (int), decimals (float) — when to use each, and what they can’t do.',
      runner: 'python',
      sections: [
        {
          heading: 'Define: int and float',
          body: `An int is a whole number with no fractional part: 0, 42, -3. A float has a decimal point: 3.14, 2.0.\n\nUse ints for counts, indexes, and scores that must stay whole. Use floats for measurements, averages, and anything that can be “in between.”`,
        },
        {
          heading: 'When to use them',
          body: `• Counting loops, list indexes, “how many?” → int\n• Division that should keep a fraction → float (7 / 2 is 3.5)\n• Money/grades you display with decimals → float (or Decimal later)\n\nInteger division // keeps a whole result: 7 // 2 is 3. Remainder is %: 7 % 2 is 1.`,
        },
        {
          heading: 'What numbers can’t be / common mistakes',
          body: `• An int is not text — you can’t do "level " + 3 without converting.\n• Dividing with / always gives a float in Python 3, even 8 / 2 → 4.0.\n• Don’t use a string of digits as if it were a number: "10" + "1" is "101", not 11.\n• Don’t use a float as a list index (indexes must be ints).`,
        },
      ],
      examples: [
        {
          title: 'Division flavors',
          code: `print(7 / 2)\nprint(7 // 2)\nprint(7 % 2)\nprint(2 ** 3)\nprint(type(10))\nprint(type(10 / 2))`,
          note: '/ is true division; // is whole pieces; % is leftover.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Remainder',
          prompt: 'Print the remainder of 17 divided by 5 (should be 2).',
          difficulty: 1,
          starterCode: `# 17 % 5\n`,
          tests: [
            { id: 't1', description: 'Prints 2', hint: 'print(17 % 5)', kind: 'stdout', expect: '2' },
            { id: 't2', description: 'Uses %', hint: '% operator', kind: 'codeIncludes', expect: '%' },
          ],
        },
        {
          id: 'p2',
          title: 'True division',
          prompt: 'Print 9 / 2 (the float result).',
          difficulty: 2,
          starterCode: `# print 9 / 2\n`,
          tests: [
            { id: 't1', description: 'Prints 4.5', hint: 'print(9 / 2)', kind: 'stdout', expect: '4.5' },
            { id: 't2', description: 'Uses /', hint: 'Use / not //', kind: 'codeMatches', expect: '9\\s*/\\s*2' },
          ],
        },
        {
          id: 'p3',
          title: 'Power',
          prompt: 'Print 2 ** 8 (256).',
          difficulty: 2,
          starterCode: `# 2 to the power 8\n`,
          tests: [
            { id: 't1', description: 'Prints 256', hint: 'print(2 ** 8)', kind: 'stdout', expect: '256' },
            { id: 't2', description: 'Uses **', hint: '** for power', kind: 'codeIncludes', expect: '**' },
          ],
        },
      ],
    },
    {
      id: 'py-ess-strings',
      title: 'Strings (text)',
      summary: 'Define text values — when to use them, and what you can’t do with them.',
      runner: 'python',
      sections: [
        {
          heading: 'Define: string',
          body: `A string (str) is a sequence of characters — letters, digits, spaces, punctuation — wrapped in "double" or 'single' quotes.\n\nEmpty string "" has length 0. len("code") is 4. Indexes start at 0: "code"[0] is "c".`,
        },
        {
          heading: 'When to use strings',
          body: `• Names, messages, file paths, labels on screen\n• Anything the user reads as text\n• Digits that are identifiers, not math (zip codes, phone numbers) — keep them as strings so leading zeros aren’t lost\n\nJoin with + or f-strings. Repeat with *: "ha" * 3 → "hahaha".`,
        },
        {
          heading: 'What strings can’t do',
          body: `• "3" + 1 fails — convert with int("3") for math, or str(1) for joining.\n• Strings are not lists of numbers; don’t expect "10" > 5 to mean numeric compare the way you hope (convert first).\n• You can’t change one character in place like a mutable list item — build a new string instead.`,
        },
      ],
      examples: [
        {
          title: 'Length and join',
          code: `word = "code"\nprint(len(word))\nprint(word + "buddy")\nprint("go" * 2)\nprint("line1\\nline2")`,
          note: 'len counts characters, including spaces.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Join a greeting',
          prompt: 'Using greeting and name, print Hello Ada (space between).',
          difficulty: 1,
          starterCode: `greeting = "Hello"\nname = "Ada"\n# print Hello Ada\n`,
          tests: [
            { id: 't1', description: 'Prints Hello Ada', hint: 'print(greeting + " " + name)', kind: 'stdout', expect: 'Hello Ada' },
          ],
        },
        {
          id: 'p2',
          title: 'String length',
          prompt: 'Print the length of word (should be 6).',
          difficulty: 2,
          starterCode: `word = "python"\n# print its length\n`,
          tests: [
            { id: 't1', description: 'Prints 6', hint: 'print(len(word))', kind: 'stdout', expect: '6' },
            { id: 't2', description: 'Uses len', hint: 'len(...)', kind: 'codeIncludes', expect: 'len(' },
          ],
        },
        {
          id: 'p3',
          title: 'Repeat text',
          prompt: 'Print ha three times stuck together: hahaha',
          difficulty: 2,
          starterCode: `# print "ha" * 3\n`,
          tests: [
            { id: 't1', description: 'Prints hahaha', hint: 'print("ha" * 3)', kind: 'stdout', expect: 'hahaha' },
            { id: 't2', description: 'Uses *', hint: 'string * number', kind: 'codeIncludes', expect: '*' },
          ],
        },
      ],
    },
    {
      id: 'py-ess-booleans',
      title: 'Booleans (True / False)',
      summary: 'Yes/no values — define them, when to use them, what they can’t be.',
      runner: 'python',
      sections: [
        {
          heading: 'Define: boolean',
          body: `A boolean (bool) is only True or False (capital T and F in Python). Nothing else is a boolean — not "True", not 1, not "yes" (those are other types that can be converted).\n\nComparisons produce booleans: 5 > 3 is True. You can store them: ready = True.`,
        },
        {
          heading: 'When to use booleans',
          body: `• Flags: game_over, is_logged_in, ready\n• Conditions in if / while\n• Results of checks: score >= 60, name == "Ada"\n\nCombine with and / or / not: age >= 13 and age <= 19.`,
        },
        {
          heading: 'What booleans aren’t',
          body: `• "True" (with quotes) is a string, not a boolean — if "True": is always truthy as non-empty text, which is a different rule.\n• Don’t use = when you mean ==. = assigns; == compares.\n• Prefer real True/False over 1/0 unless you’re doing numeric math on purpose.`,
        },
      ],
      examples: [
        {
          title: 'Comparisons and logic',
          code: `score = 85\nprint(score >= 60)\nprint(score == 100)\nprint(not False)\nage = 15\nprint(age >= 13 and age <= 19)`,
          note: 'print shows the boolean result.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print True',
          prompt: 'Print the boolean True.',
          difficulty: 1,
          starterCode: `# print True\n`,
          tests: [
            { id: 't1', description: 'Prints True', hint: 'print(True)', kind: 'stdout', expect: 'True' },
            { id: 't2', description: 'Uses True', hint: 'True without quotes', kind: 'codeMatches', expect: '\\bTrue\\b' },
          ],
        },
        {
          id: 'p2',
          title: 'Compare with >=',
          prompt: 'Print whether score >= 60 (should be True).',
          difficulty: 2,
          starterCode: `score = 85\n# print the comparison result\n`,
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
      id: 'py-ess-lists',
      title: 'Lists (collections)',
      summary: 'Ordered collections of values — define, when to use, what they can’t be.',
      runner: 'python',
      sections: [
        {
          heading: 'Define: list',
          body: `A list is an ordered collection of values in square brackets: scores = [10, 20, 30].\n\nIndexes start at 0: scores[0] is 10. len(scores) is 3. Lists can hold mixed types, but beginners should keep one type per list when possible.`,
        },
        {
          heading: 'When to use lists',
          body: `• Many related values of the same kind (names, scores, prices)\n• When you’ll loop through every item\n• When the collection can grow: scores.append(40)\n\nfor n in scores: visits each element. Use range(len(scores)) when you need the index.`,
        },
        {
          heading: 'What lists aren’t / can’t do',
          body: `• A list is not a string — "abc"[0] is a character; [1, 2, 3] + 4 fails (use append).\n• Index out of range: scores[3] on a length-3 list crashes (valid indexes 0..2).\n• Don’t confuse the list with one element inside it — print(scores) vs print(scores[0]).\n• A single int is not a list: 5 has no [0].`,
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
      summary: 'int, str, float, bool — and when to convert.',
      runner: 'python',
      sections: [
        {
          heading: 'Ask the type',
          body: `type(x) returns the type object. print(type(x)) shows something like <class 'int'>.\n\nCommon types: int, float, str, bool, list, and NoneType for None.`,
        },
        {
          heading: 'Convert between types',
          body: `• str(5) → "5" (for joining text)\n• int("12") → 12 (for math on digits typed as text)\n• float("3.5") → 3.5\n• bool(0) is False; bool(1) is True; bool("") is False; bool("hi") is True\n• list("ab") → ["a", "b"] (characters)\n\nint("12.5") fails — use float first if you need decimals.`,
        },
        {
          heading: 'Why convert?',
          body: `User input and some APIs give you strings even when the content looks like numbers. Convert before doing math. Convert numbers to strings when building messages with + (or just use f-strings).`,
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
