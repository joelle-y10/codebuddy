import type { Module } from '../../types'

export const pythonCraftModule: Module = {
  id: 'py-craft',
  title: 'Coding craft & symbols',
  summary: 'Operators, punctuation, and how to mix text with variables — before bigger programs.',
  lessons: [
    {
      id: 'py-craft-punctuation',
      title: 'Python punctuation & etiquette',
      summary: 'Colons, indentation, and what Python does not need.',
      runner: 'python',
      sections: [
        {
          heading: 'Python does not require semicolons',
          body: `Unlike Processing, Java, or C++, Python statements usually end at the newline. You do not put ; at the end of every line.\n\nWhat Python does require: a colon : at the end of headers like if, for, while, def, and class — then an indented block on the following lines.`,
        },
        {
          heading: 'Indentation is part of the language',
          body: `Spaces at the start of a line define which code belongs inside a block. Use 4 spaces per level. Mixing tabs and spaces causes TabError.\n\nif score >= 60:\n    print("pass")   ← indented body\nprint("done")       ← back at the outer level`,
        },
        {
          heading: 'Everyday etiquette',
          body: `• Prefer clear names: score, not s.\n• Put spaces around operators: a = b + 1 (not a=b+1) for readability.\n• Keep one logical idea per line while learning.\n• Comments start with # and are ignored by Python.`,
        },
      ],
      examples: [
        {
          title: 'Colon + indent',
          code: `ready = True\nif ready:\n    print("go")\nprint("after")`,
          note: 'if line ends with : ; body is indented.',
        },
        {
          title: 'Comment',
          code: `# This explains the next line\nprint("hi")`,
          note: 'Everything after # on that line is a comment.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Proper if block',
          prompt: 'If True, print ok (with a colon and indented body).',
          difficulty: 1,
          starterCode: `# use if True: then an indented print\n`,
          tests: [
            { id: 't1', description: 'Prints ok', hint: 'if True:\\n    print("ok")', kind: 'stdout', expect: 'ok' },
            { id: 't2', description: 'Has if True:', hint: 'Colon after True', kind: 'codeIncludes', expect: 'if True:' },
          ],
        },
        {
          id: 'p2',
          title: 'Add a comment',
          prompt: 'Include a # comment and print ready.',
          difficulty: 1,
          starterCode: `# your note here\n`,
          tests: [
            { id: 't1', description: 'Prints ready', hint: 'print("ready")', kind: 'stdout', expect: 'ready' },
            { id: 't2', description: 'Has a # comment', hint: 'Start a line with #', kind: 'codeIncludes', expect: '#' },
          ],
        },
      ],
    },
    {
      id: 'py-craft-operators',
      title: 'What coding signs mean',
      summary: '= vs ==, >= and friends, and math symbols.',
      runner: 'python',
      sections: [
        {
          heading: '= assigns; == compares',
          body: `score = 85 stores 85 in the name score.\n\nscore == 85 asks “is score equal to 85?” and gives True or False.\n\nNever use a single = inside an if condition when you meant to compare — that is invalid syntax in Python (Python forbids assignment in that place in older styles; use ==).`,
        },
        {
          heading: 'Comparison operators (exact meanings)',
          body: `• ==  equal to\n• !=  not equal to\n• <   less than\n• >   greater than\n• <=  less than or equal to (“at most”)\n• >=  greater than or equal to (“at least”)\n\nSo age >= 18 means “age is 18 or higher.”`,
        },
        {
          heading: 'Math operators',
          body: `• + - * /  add, subtract, multiply, divide\n• //  integer division (floors toward -∞ for ints in the usual case)\n• %   remainder\n• **  exponent (2 ** 3 is 8)\n\nTrue division / always returns a float in Python 3 (for example 7 / 2 is 3.5).`,
        },
      ],
      examples: [
        {
          title: 'Comparisons',
          code: `score = 85\nprint(score >= 60)  # True\nprint(score == 100) # False\nprint(score != 0)   # True`,
          note: 'print shows True/False for comparisons.',
        },
        {
          title: 'Math',
          code: `print(7 / 2)\nprint(7 // 2)\nprint(7 % 2)`,
          note: '/ is 3.5 ; // is 3 ; % is 1',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Use >=',
          prompt: 'Set score = 85. If score >= 60 print pass else print retry.',
          difficulty: 1,
          starterCode: `score = 85\n`,
          tests: [
            { id: 't1', description: 'Prints pass', hint: 'if score >= 60: print("pass")', kind: 'stdout', expect: 'pass' },
            { id: 't2', description: 'Uses >=', hint: 'score >= 60', kind: 'codeIncludes', expect: '>=' },
          ],
        },
        {
          id: 'p2',
          title: 'Use ==',
          prompt: 'Set color = "green". If color == "green" print go else print stop.',
          difficulty: 2,
          starterCode: `color = "green"\n`,
          tests: [
            { id: 't1', description: 'Prints go', hint: 'if color == "green":', kind: 'stdout', expect: 'go' },
            { id: 't2', description: 'Uses ==', hint: '== for comparison', kind: 'codeIncludes', expect: '==' },
          ],
        },
        {
          id: 'p3',
          title: 'Remainder %',
          prompt: 'Print the remainder of 17 divided by 5 (should be 2) using %.',
          difficulty: 2,
          starterCode: `# print 17 % 5\n`,
          tests: [
            { id: 't1', description: 'Prints 2', hint: 'print(17 % 5)', kind: 'stdout', expect: '2' },
            { id: 't2', description: 'Uses %', hint: '17 % 5', kind: 'codeIncludes', expect: '%' },
          ],
        },
      ],
    },
    {
      id: 'py-craft-combine',
      title: 'Combining variables and text in print',
      summary: 'One print line that mixes words and values.',
      runner: 'python',
      sections: [
        {
          heading: 'Why combine?',
          body: `You often need one readable line like Player Ada scored 12 — a mix of fixed text and variables.`,
        },
        {
          heading: 'Three accurate ways',
          body: `1) Commas in print (adds spaces between items):\nprint("score", score)\n\n2) String + (both sides must be strings — convert numbers with str()):\nprint("score " + str(score))\n\n3) f-strings (clear and preferred in modern Python):\nprint(f"score {score}")\n\nAll three are valid. f-strings are usually the cleanest once you know them.`,
        },
        {
          heading: 'Common mistake',
          body: `print("score " + score) fails with TypeError if score is an int, because you cannot + a str and an int. Use str(score) or an f-string.`,
        },
      ],
      examples: [
        {
          title: 'f-string',
          code: `name = "Ada"\nscore = 12\nprint(f"{name} scored {score}")`,
          note: 'Outputs: Ada scored 12',
        },
        {
          title: 'concat with str()',
          code: `score = 12\nprint("score " + str(score))`,
          note: 'str(12) is "12" so + works.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'f-string message',
          prompt: 'Using language = "Python" and level = 1, print Python level 1 with an f-string.',
          difficulty: 1,
          starterCode: `language = "Python"\nlevel = 1\n`,
          tests: [
            { id: 't1', description: 'Prints Python level 1', hint: 'print(f"{language} level {level}")', kind: 'stdout', expect: 'Python level 1' },
            { id: 't2', description: 'Uses an f-string', hint: 'Start the string with f" or f\\\'', kind: 'codeMatches', expect: 'f["\']' },
          ],
        },
        {
          id: 'p2',
          title: 'Join with str()',
          prompt: 'Print hi Ada using name = "Ada" and string + (use str only if needed).',
          difficulty: 2,
          starterCode: `name = "Ada"\n# print hi Ada using +\n`,
          tests: [
            { id: 't1', description: 'Prints hi Ada', hint: 'print("hi " + name)', kind: 'stdout', expect: 'hi Ada' },
            { id: 't2', description: 'Uses +', hint: '"hi " + name', kind: 'codeIncludes', expect: '+' },
          ],
        },
      ],
    },
  ],
}
