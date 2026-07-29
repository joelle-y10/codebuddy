import type { Module } from '../../types'

/** First module: define each data type clearly, then practise using them. */
export const cppEssentialsModule: Module = {
  id: 'cpp-essentials',
  title: 'Values & types',
  summary:
    'Start here: learn what an int, double, std::string, and bool are — then when to use each and how they print.',
  lessons: [
    {
      id: 'cpp-ess-values',
      title: 'What is a value?',
      summary: 'A value is a piece of data. Every value has a type. Learn the four core types by name.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Value + type',
          body: `A value is one piece of information your program stores or uses — like 7, "Ada", or true.\n\nEvery value has a type. The type is the category of that value. The type decides what you are allowed to do with it (math? join text? yes/no decisions?).`,
        },
        {
          heading: 'The core types — memorize these definitions',
          body: `• Integer (int) — a whole number with no decimal point. Examples: 0, 7, -3, 100. Use for counts, scores, indexes.\n\n• Double — a number that can have a decimal point. Examples: 3.14, 2.0, -0.5. Use for measurements and averages.\n\n• String (std::string) — text. Always written in quotes. Examples: "Ada", "hello", "42", "". Use for names and messages.\n\n• Boolean (bool) — a true/false value only. In C++: true or false (lowercase, no quotes). Use for yes/no decisions.\n\n• std::vector<int> — an ordered collection of ints. Example: {10, 20, 30}. (You will practise vectors after the basics.)`,
        },
        {
          heading: 'Same looking output ≠ same type',
          body: `std::cout << false and std::cout << "false" both show false on the screen (with boolalpha) — but one is a bool and one is a std::string.\n\nYou can't mix them in math or comparisons without converting. Always know which type you meant.`,
        },
      ],
      examples: [
        {
          title: 'Each type, named',
          code: `#include <iostream>\n#include <string>\n#include <vector>\nint main() {\n  int count = 7;          // integer — whole number\n  double price = 3.5;     // double — decimal number\n  std::string name = "Ada"; // string — text in quotes\n  bool ready = true;      // bool — true or false only\n\n  std::cout << count << std::endl;\n  std::cout << price << std::endl;\n  std::cout << name << std::endl;\n  std::cout << std::boolalpha << ready << std::endl;\n  return 0;\n}`,
          note: 'Use std::boolalpha to print true/false words for bool.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Make one of each',
          prompt:
            'Create int n = 5, double x = 2.5, std::string label = "hi", and bool ok = false. Print each on four lines in that order. Use boolalpha for the bool.',
          difficulty: 1,
          starterCode: `#include <iostream>\n#include <string>\nint main() {\n  // int n, double x, std::string label, bool ok — then cout each\n  return 0;\n}\n`,
          tests: [
            {
              id: 't1',
              description: 'Prints 5, 2.5, hi, false',
              hint: 'cout << n << endl; cout << x << endl; cout << label << endl; cout << boolalpha << ok',
              kind: 'stdout',
              expect: '5\n2.5\nhi\nfalse',
            },
            {
              id: 't2',
              description: 'Uses false boolean',
              hint: 'ok = false with no quotes',
              kind: 'codeMatches',
              expect: '\\bfalse\\b',
            },
            {
              id: 't3',
              description: 'Uses a double literal',
              hint: 'x = 2.5 with a decimal point',
              kind: 'codeMatches',
              expect: '2\\.5',
            },
          ],
        },
        {
          id: 'p2',
          title: 'Declare the type',
          prompt: 'Declare int age = 12; and print age.',
          difficulty: 2,
          starterCode: `#include <iostream>\nint main() {\n  // int age = 12; then cout\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints 12', hint: 'int age = 12; cout << age', kind: 'stdout', expect: '12' },
            { id: 't2', description: 'Declares int', hint: 'int age', kind: 'codeIncludes', expect: 'int ' },
          ],
        },
      ],
    },
    {
      id: 'cpp-ess-numbers',
      title: 'Integers & doubles',
      summary: 'Integer = whole number. Double = decimal number. When to use each.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Definition: integer (int)',
          body: `An integer is a whole number — no fractional part.\n\nExamples: 0, 1, 42, -3.\n\nNot integers: 3.14 (that's a double), "7" (that's a std::string because of the quotes).`,
        },
        {
          heading: 'Definition: double',
          body: `A double is a number that can include a decimal point.\n\nExamples: 3.14, 2.0, -0.5, 0.25.\n\nEven 2.0 is a double in C++, because it has a decimal point in how you wrote it.`,
        },
        {
          heading: 'When to use which',
          body: `• Counting, looping indexes, "how many?" → int\n• Measurements, averages, money-style decimals → double\n\nMath: + - * /  % (remainder).\nInteger division truncates: 7 / 2 is 3 when both sides are ints. 7.0 / 2 is 3.5.`,
        },
        {
          heading: 'What they can't be',
          body: `• An int is not text — you can't do math on a std::string of digits without std::stoi.\n• A std::string of digits like "10" is not an int until you use std::stoi("10").\n• Integer division truncates: 7 / 2 is 3, not 3.5 — mix in 2.0 when you need decimals.\n• Don't use a double as a vector index (indexes must be ints).`,
        },
      ],
      examples: [
        {
          title: 'int vs double',
          code: `#include <iostream>\nint main() {\n  std::cout << 7 << std::endl;        // integer\n  std::cout << 7.0 << std::endl;      // double\n  std::cout << 7 / 2 << std::endl;   // integer 3\n  std::cout << 7.0 / 2 << std::endl;  // double 3.5\n  std::cout << 17 % 5 << std::endl;\n  return 0;\n}`,
          note: 'Add .0 when you want a decimal result.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print an integer',
          prompt: 'Print the integer 17 (no quotes, no decimal point).',
          difficulty: 1,
          starterCode: `#include <iostream>\nint main() {\n  // Print an integer\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints 17', hint: 'cout << 17', kind: 'stdout', expect: '17' },
            { id: 't2', description: 'Uses int literal', hint: '17 without quotes', kind: 'codeMatches', expect: '<<\\s*17' },
          ],
        },
        {
          id: 'p2',
          title: 'Print a double',
          prompt: 'Print the double 4.5.',
          difficulty: 1,
          starterCode: `#include <iostream>\nint main() {\n  // Print a double\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints 4.5', hint: 'cout << 4.5', kind: 'stdoutIncludes', expect: '4.5' },
            { id: 't2', description: 'Uses a decimal', hint: '4.5 with a dot', kind: 'codeMatches', expect: '4\\.5' },
          ],
        },
        {
          id: 'p3',
          title: 'Remainder',
          prompt: 'Print the remainder of 17 divided by 5 (integer answer 2).',
          difficulty: 2,
          starterCode: `#include <iostream>\nint main() {\n  // 17 % 5\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints 2', hint: 'cout << 17 % 5', kind: 'stdout', expect: '2' },
            { id: 't2', description: 'Uses %', hint: '% operator', kind: 'codeIncludes', expect: '%' },
          ],
        },
      ],
    },
    {
      id: 'cpp-ess-strings',
      title: 'Strings (text)',
      summary: 'A string is text in quotes — letters, digits, spaces, anything you read as words.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Definition: string (std::string)',
          body: `A std::string is text. You write it inside quotes so C++ knows it's text, not a variable name or a number.\n\nExamples: "Ada", "hello", "42", "" (empty string). Include <string>.\n\nImportant: "42" is a string of characters, not the integer 42. "false" is a string, not the bool false.`,
        },
        {
          heading: 'When to use strings',
          body: `• Names, messages, labels\n• Anything the user should read as text\n• Codes that look like numbers but aren't for math (zip codes, phone numbers) — keep them as strings so leading zeros aren't lost\n\n"cpp".size() is 3. Chain with << : cout << "Hi " << name << endl; Concatenate with +: std::string msg = "Hi " + name;`,
        },
        {
          heading: 'What strings can't do',
          body: `• You can't do "3" - 1 without std::stoi("3") first.\n• A string is not a bool — "true" is text, true is bool.\n• std::string + int doesn't work the way Python f-strings do — convert with std::to_string or chain <<.\n• Strings are not vectors of numbers; don't expect numeric compare without converting.`,
        },
      ],
      examples: [
        {
          title: 'String vs number that looks the same',
          code: `#include <iostream>\n#include <string>\nint main() {\n  std::cout << "42" << std::endl;      // string — text characters\n  std::cout << 42 << std::endl;        // int — a number\n  std::string word = "code";\n  std::cout << word.size() << std::endl;\n  std::cout << word + "buddy" << std::endl;\n  return 0;\n}`,
          note: 'Quotes make it a string.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print a string',
          prompt: 'Print the string hello (with quotes in your code).',
          difficulty: 1,
          starterCode: `#include <iostream>\nint main() {\n  // Print a string\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints hello', hint: 'cout << "hello"', kind: 'stdout', expect: 'hello' },
            { id: 't2', description: 'Uses quotes', hint: 'Put hello in quotes', kind: 'codeMatches', expect: '["\']hello["\']' },
          ],
        },
        {
          id: 'p2',
          title: 'Join a greeting',
          prompt: 'Using greeting and name, print Hello Ada (space between).',
          difficulty: 1,
          starterCode: `#include <iostream>\n#include <string>\nint main() {\n  std::string greeting = "Hello";\n  std::string name = "Ada";\n  // Print Hello Ada\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints Hello Ada', hint: 'cout << greeting << " " << name', kind: 'stdout', expect: 'Hello Ada' },
          ],
        },
        {
          id: 'p3',
          title: 'String size',
          prompt: 'Print the size of word (should be 3).',
          difficulty: 2,
          starterCode: `#include <iostream>\n#include <string>\nint main() {\n  std::string word = "cpp";\n  // print size\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints 3', hint: 'cout << word.size()', kind: 'stdout', expect: '3' },
            { id: 't2', description: 'Uses size or length', hint: 'word.size() or length()', kind: 'codeMatches', expect: '\\.(size|length)\\s*\\(' },
          ],
        },
      ],
    },
    {
      id: 'cpp-ess-booleans',
      title: 'Booleans (true / false)',
      summary: 'A boolean is a true/false value — only true or false.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Definition: boolean (bool)',
          body: `A boolean is a true/false value. It answers a yes/no question.\n\nIn C++ the only boolean values are:\n• true\n• false\n\nThey must be lowercase, and they must NOT be in quotes.\n\n• true  → bool\n• false → bool\n• "true" / "false" → std::strings (text that happens to look similar)\n• 1 and 0 → integers, not booleans (even though they can act truthy/falsy in conditions)`,
        },
        {
          heading: 'When to use booleans',
          body: `• Flags: ready = true, gameOver = false\n• Results of comparisons: score >= 60 produces a bool\n• Conditions in if / while\n\nCombine with && / || / !: age >= 13 && age <= 19.`,
        },
        {
          heading: 'What booleans aren't',
          body: `"false" with quotes is a std::string, not a bool.\n\nUse == to compare values (not a single =). = assigns; == compares.\n\nBy default cout prints bool as 1/0. Use std::boolalpha to print true/false words.`,
        },
      ],
      examples: [
        {
          title: 'Boolean vs string that looks like one',
          code: `#include <iostream>\n#include <string>\nint main() {\n  std::cout << std::boolalpha;\n  std::cout << false << std::endl;       // bool\n  std::cout << "false" << std::endl;     // string\n\n  int score = 85;\n  std::cout << (score >= 60) << std::endl;   // comparison → bool true\n  return 0;\n}`,
          note: 'No quotes = bool. Quotes = string. Use boolalpha for words.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print a boolean',
          prompt: 'Print the bool true as the word true (use boolalpha, no quotes).',
          difficulty: 1,
          starterCode: `#include <iostream>\nint main() {\n  // A boolean is true or false. Print true with boolalpha.\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'cout << boolalpha << true', kind: 'stdoutIncludes', expect: 'true' },
            { id: 't2', description: 'Uses boolalpha', hint: 'std::boolalpha', kind: 'codeIncludes', expect: 'boolalpha' },
          ],
        },
        {
          id: 'p2',
          title: 'Compare with >=',
          prompt: 'Print whether score >= 60 as true/false words (use boolalpha). That comparison creates a bool.',
          difficulty: 2,
          starterCode: `#include <iostream>\nint main() {\n  int score = 85;\n  // boolalpha + comparison\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'cout << boolalpha << (score >= 60)', kind: 'stdoutIncludes', expect: 'true' },
            { id: 't2', description: 'Uses >=', hint: 'score >= 60', kind: 'codeIncludes', expect: '>=' },
          ],
        },
        {
          id: 'p3',
          title: 'Use &&',
          prompt: 'Print ready && score >= 60 as true (use boolalpha).',
          difficulty: 3,
          starterCode: `#include <iostream>\nint main() {\n  bool ready = true;\n  int score = 85;\n  // boolalpha + ready && score >= 60\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'cout << boolalpha << (ready && score >= 60)', kind: 'stdoutIncludes', expect: 'true' },
            { id: 't2', description: 'Uses &&', hint: '&&', kind: 'codeIncludes', expect: '&&' },
          ],
        },
      ],
    },
    {
      id: 'cpp-ess-output',
      title: 'How types look when printed',
      summary: 'Now that you know the definitions — see how cout shows each type (and how look-alikes can fool you).',
      runner: 'cpp',
      sections: [
        {
          heading: 'cout shows characters — type is still real',
          body: `std::cout << ... sends a value to the console as characters. Two different types can look the same:\n\n• cout << 42 and cout << "42" both show 42\n• cout << boolalpha << false and cout << "false" both show false\n\nYou already know the definitions:\n• 42 without quotes → int\n• "42" with quotes → std::string\n• false without quotes → bool\n• "false" with quotes → std::string`,
        },
        {
          heading: 'How each type usually prints',
          body: `• int / double → digits (3.5 for a double)\n• std::string → the text inside (quotes are NOT shown in the console)\n• bool → 1 or 0 by default; true/false words with std::boolalpha\n• Vectors don't print nicely by default — print elements individually or loop\n\nUse std::endl or '\\n' to end a line.`,
        },
      ],
      examples: [
        {
          title: 'Look-alikes side by side',
          code: `#include <iostream>\nint main() {\n  std::cout << 42 << std::endl;\n  std::cout << "42" << std::endl;\n  std::cout << std::boolalpha << false << std::endl;\n  std::cout << "false" << std::endl;\n  std::cout << std::boolalpha << true << std::endl;\n  std::cout << "true" << std::endl;\n  return 0;\n}`,
          note: 'Same looking line, different type.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Integer then string',
          prompt: 'Print the integer 7, then on the next line print the string seven.',
          difficulty: 1,
          starterCode: `#include <iostream>\nint main() {\n  // int 7, then string "seven"\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Two-line output', hint: 'cout << 7 << endl; cout << "seven" << endl;', kind: 'stdout', expect: '7\nseven' },
          ],
        },
        {
          id: 'p2',
          title: 'Boolean vs string false',
          prompt:
            'A boolean is true/false. A string is text in quotes. Print true as the word true (use boolalpha), then print the string "true" on the next line.',
          difficulty: 2,
          starterCode: `#include <iostream>\nint main() {\n  // bool true (no quotes), then string "true"\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'true then true', hint: 'cout << boolalpha << true << endl; cout << "true"', kind: 'stdout', expect: 'true\ntrue' },
            { id: 't2', description: 'Uses boolalpha', hint: 'std::boolalpha', kind: 'codeIncludes', expect: 'boolalpha' },
            { id: 't3', description: 'Uses string true', hint: 'cout << "true"', kind: 'codeIncludes', expect: '"true"' },
          ],
        },
        {
          id: 'p3',
          title: 'Print true with boolalpha',
          prompt: 'Print true as the word true (use boolalpha).',
          difficulty: 2,
          starterCode: `#include <iostream>\nint main() {\n  // boolalpha + true\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'cout << boolalpha << true', kind: 'stdoutIncludes', expect: 'true' },
            { id: 't2', description: 'Uses boolalpha', hint: 'std::boolalpha', kind: 'codeIncludes', expect: 'boolalpha' },
          ],
        },
      ],
    },
    {
      id: 'cpp-ess-vectors',
      title: 'Vectors (collections)',
      summary: 'A vector is an ordered collection of values in {braces}.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Definition: vector',
          body: `A std::vector<int> is an ordered collection of ints (include <vector>): std::vector<int> nums = {3, 6, 9};\n\n• nums[0] is the first item (3) — indexes start at 0\n• nums.size() is how many items (3)\n• You can grow a vector: nums.push_back(12)`,
        },
        {
          heading: 'When to use vectors',
          body: `• Many related values (names, scores, prices)\n• When you'll loop through every item\n• When the collection can grow (unlike C arrays)\n\nfor (int n : nums) visits each element (range-for). Use nums[i] when you need the index.`,
        },
        {
          heading: 'What vectors aren't',
          body: `• A single int is not a vector — 5 has no [0].\n• A std::string is not a std::vector<int>.\n• Index out of range: nums[3] on a size-3 vector is undefined behavior (valid indexes 0..2).`,
        },
      ],
      examples: [
        {
          title: 'Create, index, loop',
          code: `#include <iostream>\n#include <vector>\nint main() {\n  std::vector<int> nums = {3, 6, 9};\n  std::cout << nums[0] << std::endl;\n  std::cout << nums.size() << std::endl;\n  for (int n : nums) {\n    std::cout << n << std::endl;\n  }\n  return 0;\n}`,
          note: 'First index is 0; size() is how many items.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'First item',
          prompt: 'Print the first item of nums (3).',
          difficulty: 1,
          starterCode: `#include <iostream>\n#include <vector>\nint main() {\n  std::vector<int> nums = {3, 6, 9};\n  // print first item\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints 3', hint: 'cout << nums[0]', kind: 'stdout', expect: '3' },
            { id: 't2', description: 'Indexes 0', hint: 'nums[0]', kind: 'codeIncludes', expect: '[0]' },
          ],
        },
        {
          id: 'p2',
          title: 'Vector size',
          prompt: 'Print how many items are in nums (3).',
          difficulty: 2,
          starterCode: `#include <iostream>\n#include <vector>\nint main() {\n  std::vector<int> nums = {3, 6, 9};\n  // print size\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints 3', hint: 'cout << nums.size()', kind: 'stdout', expect: '3' },
            { id: 't2', description: 'Uses .size()', hint: 'nums.size()', kind: 'codeIncludes', expect: '.size()' },
          ],
        },
        {
          id: 'p3',
          title: 'Loop the vector',
          prompt: 'Use a range-for loop to print each number in nums on its own line.',
          difficulty: 2,
          starterCode: `#include <iostream>\n#include <vector>\nint main() {\n  std::vector<int> nums = {3, 6, 9};\n  // range-for loop printing each\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints 3\\n6\\n9', hint: 'for (int n : nums) cout << n << endl', kind: 'stdout', expect: '3\n6\n9' },
            { id: 't2', description: 'Uses for', hint: 'for (int n : nums)', kind: 'codeIncludes', expect: 'for ' },
          ],
        },
      ],
    },
    {
      id: 'cpp-ess-convert',
      title: 'Types & conversion',
      summary: 'Convert between int, double, std::string, and bool when you need a different type.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Declare the type',
          body: `C++ wants the type up front: int n = 3; double x = 1.5; bool ok = true; std::string s = "hi"; char c = 'A'; std::vector<int> nums = {1, 2, 3};\n\nEach type has rules about what operations are allowed.`,
        },
        {
          heading: 'Convert between types',
          body: `• std::stoi("12") → 12 (include <string>, digit text → integer)\n• std::stod("3.5") → 3.5\n• std::to_string(12) → "12" (number → text)\n\nCasts like static_cast<double>(7) / 2 force decimal division.\n\nstd::stoi("12.5") fails — use std::stod first for decimals.`,
        },
        {
          heading: 'Why convert?',
          body: `Input often arrives as std::strings even when it looks like numbers. Convert before doing math. Convert numbers to strings when building messages with + (or chain <<).`,
        },
      ],
      examples: [
        {
          title: 'Convert for math and text',
          code: `#include <iostream>\n#include <string>\nint main() {\n  std::string raw = "12";\n  int n = std::stoi(raw);\n  std::cout << n + 1 << std::endl;\n  std::cout << "n=" << std::to_string(n) << std::endl;\n  return 0;\n}`,
          note: 'stoi before math; to_string when you need text.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Parse digits',
          prompt: 'Convert raw with stoi, add 3, print 15.',
          difficulty: 2,
          starterCode: `#include <iostream>\n#include <string>\nint main() {\n  std::string raw = "12";\n  // stoi, add 3, cout\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints 15', hint: 'stoi(raw) + 3', kind: 'stdout', expect: '15' },
            { id: 't2', description: 'Uses stoi', hint: 'std::stoi', kind: 'codeIncludes', expect: 'stoi' },
          ],
        },
        {
          id: 'p2',
          title: 'Stringify a number',
          prompt: 'Print score: 7 using + and std::to_string (n is int 7).',
          difficulty: 2,
          starterCode: `#include <iostream>\n#include <string>\nint main() {\n  int n = 7;\n  // print "score: " + to_string(n)\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints score: 7', hint: 'cout << "score: " + to_string(n)', kind: 'stdout', expect: 'score: 7' },
            { id: 't2', description: 'Uses to_string', hint: 'std::to_string(n)', kind: 'codeIncludes', expect: 'to_string' },
          ],
        },
        {
          id: 'p3',
          title: 'Declare bool',
          prompt: 'Declare bool ready = true; print it with boolalpha.',
          difficulty: 2,
          starterCode: `#include <iostream>\nint main() {\n  // bool ready = true; print with boolalpha\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'bool ready = true; cout << boolalpha << ready', kind: 'stdoutIncludes', expect: 'true' },
            { id: 't2', description: 'Declares bool', hint: 'bool ready', kind: 'codeIncludes', expect: 'bool' },
          ],
        },
      ],
    },
  ],
}
