import type { Module } from '../../types'

/** First module: values, variables, and simple type practice. */
export const cppEssentialsModule: Module = {
  id: 'cpp-essentials',
  title: 'Values, variables & types',
  summary:
    'Start here: what a value is, what a variable is, then integers, doubles, strings, and booleans — with simple practice.',
  lessons: [
    {
      id: 'cpp-ess-values',
      title: 'What is a value?',
      summary: 'A value is a piece of data. Every value has a type.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Value + type',
          body: `A value is one piece of information — like 7, "Ada", or true.\n\nEvery value has a type (its category):\n\n• Integer (int) — a whole number: 0, 7, -3\n• Double — a decimal number: 3.14, 2.0\n• String (std::string) — text in quotes: "hello", "42"\n• Boolean (bool) — true or false only (no quotes)`,
        },
      ],
      examples: [
        {
          title: 'Four values',
          code: `#include <iostream>\n#include <string>\nint main() {\n  std::cout << 7 << std::endl;\n  std::cout << 3.5 << std::endl;\n  std::cout << "Ada" << std::endl;\n  std::cout << std::boolalpha << true << std::endl;\n  return 0;\n}`,
          note: 'Use std::boolalpha to print true/false words for bool.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print a number',
          prompt: 'Print 10.',
          difficulty: 1,
          starterCode: `#include <iostream>\nint main() {\n  // Print 10\n  return 0;\n}\n`,
          tests: [{ id: 't1', description: 'Prints 10', hint: 'std::cout << 10', kind: 'stdout', expect: '10' }],
        },
        {
          id: 'p2',
          title: 'Print text',
          prompt: 'Print the word hi.',
          difficulty: 1,
          starterCode: `#include <iostream>\nint main() {\n  // Print "hi"\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints hi', hint: 'std::cout << "hi"', kind: 'stdout', expect: 'hi' },
            { id: 't2', description: 'Uses quotes', hint: 'Put hi in quotes', kind: 'codeMatches', expect: '["\']hi["\']' },
          ],
        },
      ],
    },
    {
      id: 'cpp-ess-variables',
      title: 'Variables',
      summary: 'A variable is a name that holds a value.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Definition: variable',
          body: `A variable is a name that stores a value so you can use it later.\n\nYou create one with = (assignment):\n\nint score = 10;\nstd::string name = "Ada";\nbool ready = true;\n\n• The name is on the left (score, name, ready)\n• The type comes before the name (int, std::string, bool)\n• The value is on the right (10, "Ada", true)\n• = means "put this value into that name" — it is not the same as == (which asks "are these equal?")`,
        },
        {
          heading: 'Using a variable',
          body: `After you store a value, use the name to get it back:\n\nint score = 10;\nstd::cout << score;   → prints 10\n\nYou can change it later:\n\nint score = 10;\nscore = 11;\nstd::cout << score;   → prints 11`,
        },
        {
          heading: 'Good names',
          body: `Use clear names: score, name, total — not s or x (unless x is a position).\n\nNames cannot start with a digit. They cannot have spaces. Use snake_case or camelCase for multi-word names: player_name or playerName.`,
        },
      ],
      examples: [
        {
          title: 'Store and print',
          code: `#include <iostream>\n#include <string>\nint main() {\n  int age = 15;\n  std::string name = "Ada";\n  std::cout << age << std::endl;\n  std::cout << name << std::endl;\n  return 0;\n}`,
          note: 'Print the variable name — not the word in quotes unless you want text.',
        },
        {
          title: 'Change a variable',
          code: `#include <iostream>\nint main() {\n  int score = 0;\n  score = 5;\n  std::cout << score << std::endl;\n  return 0;\n}`,
          note: 'The last value assigned is what cout shows.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Make a variable',
          prompt: 'Make a variable called age set to 12. Then print age.',
          difficulty: 1,
          starterCode: `#include <iostream>\nint main() {\n  // int age = 12\n  // print age\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints 12', hint: 'int age = 12 then std::cout << age', kind: 'stdout', expect: '12' },
            { id: 't2', description: 'Uses age', hint: 'age = ...', kind: 'codeMatches', expect: '\\bage\\s*=' },
          ],
        },
        {
          id: 'p2',
          title: 'Store a name',
          prompt: 'Make a variable called name set to Ada. Then print name.',
          difficulty: 1,
          starterCode: `#include <iostream>\n#include <string>\nint main() {\n  // std::string name = "Ada"\n  // print name\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints Ada', hint: 'std::string name = "Ada" then std::cout << name', kind: 'stdout', expect: 'Ada' },
            { id: 't2', description: 'Uses name', hint: 'name = "Ada"', kind: 'codeMatches', expect: '\\bname\\s*=' },
          ],
        },
        {
          id: 'p3',
          title: 'Change it',
          prompt: 'Set score to 0, then set score to 7, then print score.',
          difficulty: 1,
          starterCode: `#include <iostream>\nint main() {\n  // int score = 0\n  // score = 7\n  // print score\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints 7', hint: 'Assign 7 last, then std::cout << score', kind: 'stdout', expect: '7' },
            { id: 't2', description: 'Uses score', hint: 'score = ...', kind: 'codeMatches', expect: '\\bscore\\s*=' },
          ],
        },
      ],
    },
    {
      id: 'cpp-ess-numbers',
      title: 'Integers & doubles',
      summary: 'Integer = whole number. Double = decimal number.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Definition: integer (int)',
          body: `An integer is a whole number — no decimal point.\n\nExamples: 0, 1, 42, -3.`,
        },
        {
          heading: 'Definition: double',
          body: `A double is a number with a decimal point.\n\nExamples: 3.14, 2.0, -0.5.`,
        },
        {
          heading: 'When to use which',
          body: `• Counting ("how many?") → int\n• Measurements and averages → double\n\nYou can store them in variables: int count = 3 or double price = 2.5.`,
        },
      ],
      examples: [
        {
          title: 'int and double',
          code: `#include <iostream>\nint main() {\n  int count = 7;\n  double price = 3.5;\n  std::cout << count << std::endl;\n  std::cout << price << std::endl;\n  return 0;\n}`,
          note: '7 is an integer. 3.5 is a double.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print an integer',
          prompt: 'Print 17.',
          difficulty: 1,
          starterCode: `#include <iostream>\nint main() {\n  // Print 17\n  return 0;\n}\n`,
          tests: [{ id: 't1', description: 'Prints 17', hint: 'std::cout << 17', kind: 'stdout', expect: '17' }],
        },
        {
          id: 'p2',
          title: 'Print a double',
          prompt: 'Print 4.5.',
          difficulty: 1,
          starterCode: `#include <iostream>\nint main() {\n  // Print 4.5\n  return 0;\n}\n`,
          tests: [{ id: 't1', description: 'Prints 4.5', hint: 'std::cout << 4.5', kind: 'stdoutIncludes', expect: '4.5' }],
        },
        {
          id: 'p3',
          title: 'Store a double',
          prompt: 'Make a variable called price set to 2.5. Print price.',
          difficulty: 1,
          starterCode: `#include <iostream>\nint main() {\n  // double price = 2.5\n  // print price\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints 2.5', hint: 'double price = 2.5 then std::cout << price', kind: 'stdoutIncludes', expect: '2.5' },
            { id: 't2', description: 'Uses price', hint: 'price = 2.5', kind: 'codeMatches', expect: '\\bprice\\s*=' },
          ],
        },
      ],
    },
    {
      id: 'cpp-ess-strings',
      title: 'Strings (text)',
      summary: 'A string is text in quotes.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Definition: string (std::string)',
          body: `A std::string is text. Write it in quotes so C++ knows it is text. Include <string>.\n\nExamples: "Ada", "hello", "42".\n\n"42" is a string (text). 42 without quotes is an int (a number).`,
        },
        {
          heading: 'Variables hold strings too',
          body: `std::string name = "Ada";\nstd::cout << name;\n\nJoin two strings with +: "Hi " + "Ada" → Hi Ada.`,
        },
      ],
      examples: [
        {
          title: 'String in a variable',
          code: `#include <iostream>\n#include <string>\nint main() {\n  std::string word = "code";\n  std::cout << word << std::endl;\n  std::cout << "Hi " + std::string("Ada") << std::endl;\n  return 0;\n}`,
          note: 'Quotes make text a string.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print a string',
          prompt: 'Print hello.',
          difficulty: 1,
          starterCode: `#include <iostream>\nint main() {\n  // Print "hello"\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints hello', hint: 'std::cout << "hello"', kind: 'stdout', expect: 'hello' },
          ],
        },
        {
          id: 'p2',
          title: 'Store a string',
          prompt: 'Make a variable called city set to Calgary. Print city.',
          difficulty: 1,
          starterCode: `#include <iostream>\n#include <string>\nint main() {\n  // std::string city = "Calgary"\n  // print city\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints Calgary', hint: 'std::string city = "Calgary" then std::cout << city', kind: 'stdout', expect: 'Calgary' },
            { id: 't2', description: 'Uses city', hint: 'city = ...', kind: 'codeMatches', expect: '\\bcity\\s*=' },
          ],
        },
        {
          id: 'p3',
          title: 'Join two strings',
          prompt: 'Print Hello Ada by joining greeting and name with a space.',
          difficulty: 1,
          starterCode: `#include <iostream>\n#include <string>\nint main() {\n  std::string greeting = "Hello";\n  std::string name = "Ada";\n  // print Hello Ada\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints Hello Ada', hint: 'std::cout << greeting + " " + name', kind: 'stdout', expect: 'Hello Ada' },
          ],
        },
      ],
    },
    {
      id: 'cpp-ess-booleans',
      title: 'Booleans (true / false)',
      summary: 'A boolean is a true/false value.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Definition: boolean (bool)',
          body: `A boolean is a true/false value. It answers a yes/no question.\n\nIn C++ the only boolean values are:\n• true\n• false\n\nNo quotes. Lowercase.\n\n"true" with quotes is a string, not a bool.\n\nBy default cout prints bool as 1/0. Use std::boolalpha to print true/false words.`,
        },
        {
          heading: 'Booleans in variables',
          body: `bool ready = true;\nstd::cout << std::boolalpha << ready;\n\nComparisons also make booleans: score >= 60.`,
        },
      ],
      examples: [
        {
          title: 'Boolean values',
          code: `#include <iostream>\nint main() {\n  bool ready = true;\n  std::cout << std::boolalpha << ready << std::endl;\n  std::cout << std::boolalpha << false << std::endl;\n\n  int score = 85;\n  std::cout << std::boolalpha << (score >= 60) << std::endl;\n  return 0;\n}`,
          note: 'Use std::boolalpha to print true/false words.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print a boolean',
          prompt: 'Print true as the word true (use boolalpha).',
          difficulty: 1,
          starterCode: `#include <iostream>\nint main() {\n  // Print true with boolalpha\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'std::cout << std::boolalpha << true', kind: 'stdoutIncludes', expect: 'true' },
            { id: 't2', description: 'Uses boolalpha', hint: 'std::boolalpha', kind: 'codeIncludes', expect: 'boolalpha' },
          ],
        },
        {
          id: 'p2',
          title: 'Store a boolean',
          prompt: 'Make a variable called ready set to true. Print ready with boolalpha.',
          difficulty: 1,
          starterCode: `#include <iostream>\nint main() {\n  // bool ready = true\n  // print ready with boolalpha\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'bool ready = true then std::cout << std::boolalpha << ready', kind: 'stdoutIncludes', expect: 'true' },
            { id: 't2', description: 'Uses ready', hint: 'ready = true', kind: 'codeMatches', expect: '\\bready\\s*=' },
          ],
        },
        {
          id: 'p3',
          title: 'Compare numbers',
          prompt: 'score is 85. Print whether score >= 60 (use boolalpha).',
          difficulty: 1,
          starterCode: `#include <iostream>\nint main() {\n  int score = 85;\n  // print score >= 60 with boolalpha\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'std::cout << std::boolalpha << (score >= 60)', kind: 'stdoutIncludes', expect: 'true' },
            { id: 't2', description: 'Uses >=', hint: 'score >= 60', kind: 'codeIncludes', expect: '>=' },
          ],
        },
      ],
    },
    {
      id: 'cpp-ess-output',
      title: 'How types look when printed',
      summary: 'Different types can look the same when printed — know which one you meant.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Look-alikes',
          body: `std::cout << 42 and std::cout << "42" both show 42 — but one is an int and one is a std::string.\n\nstd::cout << std::boolalpha << false and std::cout << "false" both show false — but one is a bool and one is a string.\n\nRule: quotes → string. No quotes on true/false → bool. No quotes on digits → number.`,
        },
      ],
      examples: [
        {
          title: 'Side by side',
          code: `#include <iostream>\nint main() {\n  std::cout << 42 << std::endl;\n  std::cout << "42" << std::endl;\n  std::cout << std::boolalpha << false << std::endl;\n  std::cout << "false" << std::endl;\n  return 0;\n}`,
          note: 'Same looking output, different types.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Number then word',
          prompt: 'Print 7. Then print seven on the next line.',
          difficulty: 1,
          starterCode: `#include <iostream>\nint main() {\n  // print 7\n  // print "seven"\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Two lines', hint: 'std::cout << 7 << endl; std::cout << "seven" << endl', kind: 'stdout', expect: '7\nseven' },
          ],
        },
        {
          id: 'p2',
          title: 'Boolean then string',
          prompt: 'Print the boolean false (use boolalpha). Then print the string false on the next line.',
          difficulty: 1,
          starterCode: `#include <iostream>\nint main() {\n  // print false with boolalpha\n  // print "false"\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'false then false', hint: 'std::cout << std::boolalpha << false then std::cout << "false"', kind: 'stdout', expect: 'false\nfalse' },
            { id: 't2', description: 'Uses boolalpha', hint: 'std::boolalpha', kind: 'codeIncludes', expect: 'boolalpha' },
            { id: 't3', description: 'Uses string false', hint: 'std::cout << "false"', kind: 'codeIncludes', expect: '"false"' },
          ],
        },
      ],
    },
    {
      id: 'cpp-ess-vectors',
      title: 'Vectors',
      summary: 'A vector holds several values in order.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Definition: vector',
          body: `A std::vector<int> is an ordered group of values in curly braces (include <vector>).\n\nstd::vector<int> nums = {3, 6, 9};\n\n• nums[0] is the first item (3)\n• nums.size() is how many items (3)`,
        },
      ],
      examples: [
        {
          title: 'A short vector',
          code: `#include <iostream>\n#include <vector>\nint main() {\n  std::vector<int> nums = {3, 6, 9};\n  std::cout << nums[0] << std::endl;\n  std::cout << nums.size() << std::endl;\n  return 0;\n}`,
          note: 'Indexes start at 0.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'First item',
          prompt: 'Print the first item in nums.',
          difficulty: 1,
          starterCode: `#include <iostream>\n#include <vector>\nint main() {\n  std::vector<int> nums = {3, 6, 9};\n  // print the first item\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints 3', hint: 'std::cout << nums[0]', kind: 'stdout', expect: '3' },
          ],
        },
        {
          id: 'p2',
          title: 'How many items',
          prompt: 'Print how many items are in nums.',
          difficulty: 1,
          starterCode: `#include <iostream>\n#include <vector>\nint main() {\n  std::vector<int> nums = {3, 6, 9};\n  // print the size\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints 3', hint: 'std::cout << nums.size()', kind: 'stdout', expect: '3' },
            { id: 't2', description: 'Uses size', hint: 'nums.size()', kind: 'codeIncludes', expect: '.size()' },
          ],
        },
      ],
    },
    {
      id: 'cpp-ess-convert',
      title: 'Changing types',
      summary: 'Convert a value when you need a different type.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Common conversions',
          body: `• std::stoi("12") → 12 (include <string>, text digits → integer)\n• std::to_string(5) → "5" (number → text)\n• std::stod("3.5") → 3.5\n\nUse stoi before math on digit text. Use to_string when joining text with +.`,
        },
      ],
      examples: [
        {
          title: 'Convert then use',
          code: `#include <iostream>\n#include <string>\nint main() {\n  std::string raw = "12";\n  int n = std::stoi(raw);\n  std::cout << n + 1 << std::endl;\n  std::cout << "n=" << std::to_string(n) << std::endl;\n  return 0;\n}`,
          note: 'stoi for math; to_string for joining text.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Text to number',
          prompt: 'Turn raw into an integer, add 3, and print the result.',
          difficulty: 1,
          starterCode: `#include <iostream>\n#include <string>\nint main() {\n  std::string raw = "12";\n  // std::stoi(raw) + 3, then print\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints 15', hint: 'std::cout << std::stoi(raw) + 3', kind: 'stdout', expect: '15' },
            { id: 't2', description: 'Uses stoi', hint: 'std::stoi(raw)', kind: 'codeIncludes', expect: 'stoi' },
          ],
        },
        {
          id: 'p2',
          title: 'Number to text',
          prompt: 'Print score: 7 using std::to_string and +.',
          difficulty: 1,
          starterCode: `#include <iostream>\n#include <string>\nint main() {\n  int n = 7;\n  // print "score: " + std::to_string(n)\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints score: 7', hint: 'std::cout << "score: " + std::to_string(n)', kind: 'stdout', expect: 'score: 7' },
            { id: 't2', description: 'Uses to_string', hint: 'std::to_string(n)', kind: 'codeIncludes', expect: 'to_string' },
          ],
        },
      ],
    },
  ],
}
