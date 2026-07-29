import type { LanguageTrack } from '../../types'

export const pythonUniversity: LanguageTrack = {
  id: 'python',
  name: 'Python',
  tagline: 'Comprehensions, dictionaries, and classes.',
  accent: '#5ec8ff',
  tier: 'university',
  modules: [
    {
      id: 'py-u-data',
      title: 'Expressive data',
      summary: 'Comprehensions and dictionaries for real datasets.',
      lessons: [
        {
          id: 'py-u-comp',
          title: 'List comprehensions',
          summary: 'Build lists in one expressive line.',
          runner: 'python',
          sections: [
            {
              heading: 'The pattern',
              body: `[expr for item in iterable if condition] creates a new list without a multi-line loop.\n\nRead it as: “make expr for each item, optionally only when condition holds.”`,
            },
            {
              heading: 'When to use them',
              body: `Comprehensions shine for simple map/filter jobs. If the body needs many statements, keep a regular for loop for clarity.`,
            },
          ],
          examples: [
            {
              title: 'Odd squares',
              code: `nums = [1, 2, 3, 4, 5]\nsquares = [n * n for n in nums if n % 2 == 1]\nprint(",".join(str(s) for s in squares))`,
              note: 'Filter with the optional if clause.',
            },
            {
              title: 'Double everything',
              code: `nums = [1, 2, 3]\nprint([n * 2 for n in nums])`,
              note: 'Map-only comprehension — no if.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Evens joined',
              prompt: 'Even numbers only from nums, joined by commas: 2,4,6',
              difficulty: 1,
              starterCode: `nums = [1, 2, 3, 4, 5, 6]\n# Even numbers only, joined by commas: 2,4,6\n`,
              tests: [
                { id: 't1', description: 'Prints 2,4,6', hint: 'print(",".join(str(n) for n in nums if n % 2 == 0))', kind: 'stdout', expect: '2,4,6' },
                { id: 't2', description: 'Uses a comprehension or generator', hint: 'Use [...] or (... for ...)', kind: 'codeMatches', expect: 'for .+ in' },
              ],
            },
            {
              id: 'p2',
              title: 'Squares list',
              prompt: 'Print the list of squares of nums using a comprehension (repr like [1, 4, 9]).',
              difficulty: 2,
              starterCode: `nums = [1, 2, 3]\n`,
              tests: [
                { id: 't1', description: 'Prints [1, 4, 9]', hint: 'print([n*n for n in nums])', kind: 'stdout', expect: '[1, 4, 9]' },
                { id: 't2', description: 'Uses comprehension brackets', hint: '[... for ...]', kind: 'codeMatches', expect: '\\[.*for.*in' },
              ],
            },
            {
              id: 'p3',
              title: 'Negatives filtered',
              prompt: 'From values, keep only negatives and print them joined by commas.',
              difficulty: 2,
              starterCode: `values = [-2, 0, 3, -5, 8]\n`,
              tests: [
                { id: 't1', description: 'Prints -2,-5', hint: 'if n < 0', kind: 'stdout', expect: '-2,-5' },
              ],
            },
          ],
        },
        {
          id: 'py-u-dict',
          title: 'Dictionaries',
          summary: 'Key → value maps.',
          runner: 'python',
          sections: [
            {
              heading: 'Maps, not lists',
              body: `Dicts store pairs: d = {"a": 1}. Read with d[key] or .get. Loop keys with for k in d, or items with for k, v in d.items().`,
            },
            {
              heading: 'Common operations',
              body: `len(d) counts keys. d["new"] = 3 inserts or updates. Keys must be hashable — strings and numbers are common.`,
            },
          ],
          examples: [
            {
              title: 'Lookup + length',
              code: `scores = {"ada": 95, "lin": 88}\nprint(scores["ada"])\nprint(len(scores))`,
              note: 'Keys must be hashable — strings and numbers are common.',
            },
            {
              title: 'items()',
              code: `grades = {"html": 90, "python": 95}\nfor subject, score in grades.items():\n    print(f"{subject}:{score}")`,
              note: 'Unpack key and value together.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Python grade',
              prompt: 'Print the python grade, then the number of subjects.',
              difficulty: 1,
              starterCode: `grades = {"html": 90, "python": 95, "java": 88}\n# Print the python grade, then the number of subjects\n`,
              tests: [
                { id: 't1', description: 'First line is 95', hint: 'print(grades["python"])', kind: 'stdoutIncludes', expect: '95' },
                { id: 't2', description: 'Prints length 3', hint: 'print(len(grades))', kind: 'stdoutIncludes', expect: '3' },
                { id: 't3', description: 'Uses grades', hint: 'Read from grades', kind: 'codeIncludes', expect: 'grades' },
              ],
            },
            {
              id: 'p2',
              title: 'Add a key',
              prompt: 'Set grades["cpp"] = 92, then print grades["cpp"].',
              difficulty: 2,
              starterCode: `grades = {"html": 90, "python": 95}\n`,
              tests: [
                { id: 't1', description: 'Prints 92', hint: 'grades["cpp"] = 92', kind: 'stdout', expect: '92' },
                { id: 't2', description: 'Mentions cpp', hint: 'cpp key', kind: 'codeIncludes', expect: 'cpp' },
              ],
            },
            {
              id: 'p3',
              title: 'Keys only',
              prompt: 'Print each key in grades on its own line (html then python).',
              difficulty: 2,
              starterCode: `grades = {"html": 90, "python": 95}\n`,
              tests: [
                { id: 't1', description: 'html then python', hint: 'for k in grades: print(k)', kind: 'stdout', expect: 'html\npython' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'py-u-oop',
      title: 'Objects & errors',
      summary: 'Classes for structure; exceptions for recovery.',
      lessons: [
        {
          id: 'py-u-class',
          title: 'Classes',
          summary: 'Bundle data and behavior.',
          runner: 'python',
          sections: [
            {
              heading: 'class and __init__',
              body: `class defines a type. __init__ sets up an instance. Methods take self as the first parameter — Python passes the instance automatically when you call p.label().`,
            },
            {
              heading: 'Creating instances',
              body: `Create objects by calling the class like a function: p = Point(2, 3). Attributes live on self: self.x = x.`,
            },
          ],
          examples: [
            {
              title: 'Point',
              code: `class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    def label(self):\n        return f"{self.x},{self.y}"\n\np = Point(2, 3)\nprint(p.label())`,
              note: 'Create objects by calling the class like a function.',
            },
            {
              title: 'Box area',
              code: `class Box:\n    def __init__(self, w, h):\n        self.w = w\n        self.h = h\n    def area(self):\n        return self.w * self.h\n\nprint(Box(3, 4).area())`,
              note: 'Methods read instance state via self.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Box area',
              prompt: 'Define class Box with __init__(self, w, h) and area(self) -> w*h. Print Box(4, 5).area().',
              difficulty: 1,
              starterCode: `# Define class Box with __init__(self, w, h) and area(self) -> w*h\n# Print Box(4, 5).area()\n`,
              tests: [
                { id: 't1', description: 'Prints 20', hint: 'class Box... def area(self): return self.w * self.h', kind: 'stdout', expect: '20' },
                { id: 't2', description: 'Defines Box', hint: 'class Box:', kind: 'codeIncludes', expect: 'class Box' },
              ],
            },
            {
              id: 'p2',
              title: 'Greeter',
              prompt: 'class Greeter with __init__(self, name) and hello(self) returning "hi " + name. Print Greeter("Ada").hello().',
              difficulty: 2,
              starterCode: `# Greeter class\n`,
              tests: [
                { id: 't1', description: 'Prints hi Ada', hint: 'return "hi " + self.name', kind: 'stdout', expect: 'hi Ada' },
                { id: 't2', description: 'Defines Greeter', hint: 'class Greeter', kind: 'codeIncludes', expect: 'class Greeter' },
              ],
            },
          ],
        },
        {
          id: 'py-u-except',
          title: 'Exceptions',
          summary: 'Catch errors without crashing.',
          runner: 'python',
          sections: [
            {
              heading: 'try / except',
              body: `try / except handle failures. Catch specific types when you can: except ValueError:.\n\nOnly the matching except block runs. Uncaught exceptions still crash the program.`,
            },
            {
              heading: 'When to catch',
              body: `Catch when you have a recovery plan (default value, message, retry). Don’t blanket-catch Exception just to silence bugs.`,
            },
          ],
          examples: [
            {
              title: 'Safe int',
              code: `try:\n    print(int("7"))\nexcept ValueError:\n    print("bad")`,
              note: 'Only the matching except block runs.',
            },
            {
              title: 'Fallback path',
              code: `try:\n    print(int("nope"))\nexcept ValueError:\n    print("fallback")`,
              note: 'Invalid int → ValueError.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Fallback',
              prompt: 'Try int("codebuddy"), on ValueError print fallback.',
              difficulty: 1,
              starterCode: `# Try int("codebuddy"), on ValueError print fallback\n`,
              tests: [
                { id: 't1', description: 'Prints fallback', hint: 'except ValueError: print("fallback")', kind: 'stdout', expect: 'fallback' },
                { id: 't2', description: 'Uses try', hint: 'try:', kind: 'codeIncludes', expect: 'try:' },
                { id: 't3', description: 'Uses except', hint: 'except ValueError', kind: 'codeIncludes', expect: 'except' },
              ],
            },
            {
              id: 'p2',
              title: 'Valid parse',
              prompt: 'Try int("42") and print the result (should succeed).',
              difficulty: 2,
              starterCode: `# try/except around int("42")\n`,
              tests: [
                { id: 't1', description: 'Prints 42', hint: 'print(int("42")) inside try', kind: 'stdout', expect: '42' },
                { id: 't2', description: 'Uses try', hint: 'try:', kind: 'codeIncludes', expect: 'try:' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
