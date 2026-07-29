import type { Module } from '../../types'

export const cppEssentialsModule: Module = {
  id: 'cpp-essentials',
  title: 'Data essentials',
  summary: 'Strings, numbers, booleans, and how cout shows each type.',
  lessons: [
    {
      id: 'cpp-ess-output',
      title: 'Kinds of output',
      summary: 'What std::cout shows for text, numbers, and booleans.',
      runner: 'cpp',
      sections: [
        {
          heading: 'cout streams values as text',
          body: `std::cout << value sends a value to the console. Types can look alike: 42 and "42" both print as 42, but only the int does math the way you expect.`,
        },
        {
          heading: 'How common types print',
          body: `• std::string / "text" → characters\n• int / double → digits\n• bool → 1 or 0 by default (true/false as numbers) unless you enable boolalpha\n\nUse std::endl or '\\n' to end a line.`,
        },
        {
          heading: 'boolalpha',
          body: `std::cout << std::boolalpha << true; prints true instead of 1. Include <iostream>. Handy when teaching booleans.`,
        },
      ],
      examples: [
        {
          title: 'Numbers, strings, bools',
          code: `#include <iostream>\nint main() {\n  std::cout << 42 << std::endl;\n  std::cout << "42" << std::endl;\n  std::cout << std::boolalpha << true << std::endl;\n  std::cout << false << std::endl;\n  return 0;\n}`,
          note: 'boolalpha makes true/false print as words.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Number then word',
          prompt: 'Print 7, then seven on the next line.',
          difficulty: 1,
          starterCode: `#include <iostream>\nint main() {\n  // 7 then seven\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Two-line output', hint: 'cout << 7 << endl; cout << "seven" << endl;', kind: 'stdout', expect: '7\nseven' },
          ],
        },
        {
          id: 'p2',
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
      id: 'cpp-ess-strings',
      title: 'Strings (text)',
      summary: 'std::string, size, and chaining output.',
      runner: 'cpp',
      sections: [
        {
          heading: 'std::string',
          body: `Include <string>. std::string name = "Ada"; holds text. name.size() (or length()) is the character count.\n\nC-style "text" also works with cout. Prefer std::string when you store and modify text.`,
        },
        {
          heading: 'Building messages',
          body: `Chain with << : cout << "Hi " << name << endl;\n\nYou can also concatenate std::string with +: std::string msg = "Hi " + name;`,
        },
      ],
      examples: [
        {
          title: 'Size and join',
          code: `#include <iostream>\n#include <string>\nint main() {\n  std::string word = "code";\n  std::cout << word.size() << std::endl;\n  std::cout << word + "buddy" << std::endl;\n  return 0;\n}`,
          note: 'size() counts characters.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Join a greeting',
          prompt: 'Print Hello Ada using greeting and name.',
          difficulty: 1,
          starterCode: `#include <iostream>\n#include <string>\nint main() {\n  std::string greeting = "Hello";\n  std::string name = "Ada";\n  // Print Hello Ada\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints Hello Ada', hint: 'cout << greeting << " " << name', kind: 'stdout', expect: 'Hello Ada' },
          ],
        },
        {
          id: 'p2',
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
      id: 'cpp-ess-numbers',
      title: 'Numbers (int & double)',
      summary: 'Whole numbers, decimals, and arithmetic.',
      runner: 'cpp',
      sections: [
        {
          heading: 'int vs double',
          body: `int is whole numbers. double is floating-point.\n\nInteger division truncates toward zero for positive ints: 7 / 2 is 3. Use 7.0 / 2 for 3.5.`,
        },
        {
          heading: 'Operators',
          body: `+ - * / and % (remainder for ints). Parentheses change order.`,
        },
      ],
      examples: [
        {
          title: 'Division flavors',
          code: `#include <iostream>\nint main() {\n  std::cout << 7 / 2 << std::endl;\n  std::cout << 7.0 / 2 << std::endl;\n  std::cout << 17 % 5 << std::endl;\n  return 0;\n}`,
          note: 'Add .0 when you want a decimal result.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Remainder',
          prompt: 'Print 17 % 5 (2).',
          difficulty: 1,
          starterCode: `#include <iostream>\nint main() {\n  // 17 % 5\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints 2', hint: 'cout << 17 % 5', kind: 'stdout', expect: '2' },
            { id: 't2', description: 'Uses %', hint: '% operator', kind: 'codeIncludes', expect: '%' },
          ],
        },
        {
          id: 'p2',
          title: 'Decimal division',
          prompt: 'Print 9.0 / 2 (4.5).',
          difficulty: 2,
          starterCode: `#include <iostream>\nint main() {\n  // 9.0 / 2\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints 4.5', hint: 'cout << 9.0 / 2', kind: 'stdoutIncludes', expect: '4.5' },
            { id: 't2', description: 'Uses 9.0', hint: '9.0 not 9', kind: 'codeIncludes', expect: '9.0' },
          ],
        },
      ],
    },
    {
      id: 'cpp-ess-booleans',
      title: 'Booleans (true / false)',
      summary: 'bool type, comparisons, and && / || / !.',
      runner: 'cpp',
      sections: [
        {
          heading: 'bool type',
          body: `bool ready = true; stores yes/no. Comparisons produce bools: score >= 60.\n\nBy default cout prints bool as 1/0. Use std::boolalpha to print true/false words.`,
        },
        {
          heading: 'Logic operators',
          body: `• && and  • || or  • ! not\n\nUse == to compare values (not a single =).`,
        },
      ],
      examples: [
        {
          title: 'Comparisons',
          code: `#include <iostream>\nint main() {\n  int score = 85;\n  bool ready = true;\n  std::cout << std::boolalpha;\n  std::cout << (score >= 60) << std::endl;\n  std::cout << (ready && score >= 60) << std::endl;\n  return 0;\n}`,
          note: 'Parentheses help when chaining << with comparisons.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print true',
          prompt: 'Print true as the word true (boolalpha).',
          difficulty: 1,
          starterCode: `#include <iostream>\nint main() {\n  // boolalpha << true\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'cout << boolalpha << true', kind: 'stdoutIncludes', expect: 'true' },
            { id: 't2', description: 'Uses boolalpha', hint: 'boolalpha', kind: 'codeIncludes', expect: 'boolalpha' },
          ],
        },
        {
          id: 'p2',
          title: 'Compare with >=',
          prompt: 'Print whether score >= 60 as true/false words.',
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
          prompt: 'Print ready && score >= 60 as true.',
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
      id: 'cpp-ess-convert',
      title: 'Types & conversion',
      summary: 'Declare types and convert with stoi / to_string.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Declare the type',
          body: `int n = 3; double x = 1.5; bool ok = true; std::string s = "hi"; char c = 'A';`,
        },
        {
          heading: 'Convert',
          body: `std::stoi("12") → 12 (include <string>). std::to_string(12) → "12".\n\nCasts like static_cast<double>(7) / 2 force decimal division.`,
        },
      ],
      examples: [
        {
          title: 'stoi and to_string',
          code: `#include <iostream>\n#include <string>\nint main() {\n  std::string raw = "12";\n  int n = std::stoi(raw);\n  std::cout << n + 1 << std::endl;\n  std::cout << "n=" << std::to_string(n) << std::endl;\n  return 0;\n}`,
          note: 'stoi before math; to_string when you need text.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'stoi',
          prompt: 'Parse raw with stoi, add 3, print 15.',
          difficulty: 2,
          starterCode: `#include <iostream>\n#include <string>\nint main() {\n  std::string raw = "12";\n  // stoi, add 3, cout\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints 15', hint: 'stoi(raw) + 3', kind: 'stdout', expect: '15' },
            { id: 't2', description: 'Uses stoi', hint: 'std::stoi', kind: 'codeIncludes', expect: 'stoi' },
          ],
        },
        {
          id: 'p2',
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
