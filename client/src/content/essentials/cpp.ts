import type { Module } from '../../types'

/** First module in every coding track: what values are, when to use them, what they can't be. */
export const cppEssentialsModule: Module = {
  id: 'cpp-essentials',
  title: 'Values & types',
  summary:
    'Start here: what a value is, the main data types, when to use each, and what each type can’t do.',
  lessons: [
    {
      id: 'cpp-ess-values',
      title: 'What is a value?',
      summary: 'Programs store and use values. Every value has a type that decides what you can do with it.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Values are the data your program works with',
          body: `A value is a single piece of information: the number 7, the text "Ada", the yes/no answer true, or a vector of scores {10, 20, 30}.\n\nYou put values in variables (std::string name = "Ada";), send them to cout (std::cout << name;), and combine them (score + 1).`,
        },
        {
          heading: 'Type = the rules for that value',
          body: `The type answers: what kind of value is this, and what operations are allowed?\n\n• int — whole numbers (count, index, score)\n• double — decimals (measurements, averages)\n• std::string — text (names, messages)\n• bool — true or false only (decisions)\n• std::vector<int> — ordered collection of ints (many scores)\n\nIn C++ you declare the type: int count = 3;`,
        },
        {
          heading: 'Wrong type = wrong result or an error',
          body: `"3" + "4" is "34" (text join with std::string). 3 + 4 is 7 (math). Mixing types without converting fails: you can't do "3" - 1 without std::stoi("3") first.\n\nRule of thumb: decide the type first, then write the code.`,
        },
      ],
      examples: [
        {
          title: 'Four core values',
          code: `#include <iostream>\n#include <string>\n#include <vector>\nint main() {\n  int count = 3;\n  std::string name = "Ada";\n  bool ready = true;\n  std::vector<int> scores = {10, 20};\n  std::cout << count << std::endl;\n  std::cout << name << std::endl;\n  std::cout << std::boolalpha << ready << std::endl;\n  std::cout << scores.size() << std::endl;\n  return 0;\n}`,
          note: 'Vectors use .size() for how many items.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Store each kind',
          prompt: 'Create int n = 5, std::string label = "hi", bool ok = false, then print each on its own line (in that order). Use boolalpha for the bool.',
          difficulty: 1,
          starterCode: `#include <iostream>\n#include <string>\nint main() {\n  // n, label, ok — then cout each\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints 5, hi, false', hint: 'cout << n << endl; cout << label << endl; cout << boolalpha << ok', kind: 'stdout', expect: '5\nhi\nfalse' },
            { id: 't2', description: 'Uses false boolean', hint: 'ok = false (no quotes)', kind: 'codeMatches', expect: '\\bfalse\\b' },
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
      id: 'cpp-ess-output',
      title: 'Kinds of output',
      summary: 'What std::cout shows for text, numbers, booleans, and missing values.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Output is text in the console',
          body: `std::cout << value sends a value to the console as characters. Different types can look alike — know which one you meant.\n\nstd::cout << 42 and std::cout << "42" both look like 42, but one is an int and one is a std::string.`,
        },
        {
          heading: 'How common types print',
          body: `• std::string / "text" → characters (no quotes in the console)\n• int / double → digits\n• bool → 1 or 0 by default (true/false as numbers) unless you enable std::boolalpha\n• Vectors don't print nicely by default — print elements individually or loop\n\nUse std::endl or '\\n' to end a line.`,
        },
        {
          heading: 'Several values in one cout',
          body: `std::cout << "score " << 10 << " " << std::boolalpha << true << std::endl; chains pieces together.\n\nGreat for debugging. For neat messages, build a std::string or chain << carefully.`,
        },
      ],
      examples: [
        {
          title: 'Same look, different types',
          code: `#include <iostream>\nint main() {\n  std::cout << 42 << std::endl;\n  std::cout << "42" << std::endl;\n  std::cout << std::boolalpha << true << std::endl;\n  std::cout << "true" << std::endl;\n  return 0;\n}`,
          note: '42 and "42" look alike; boolalpha shows true/false words.',
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
          title: 'Boolean vs string',
          prompt: 'Print true as the word true (use boolalpha), then print the string "true" on the next line.',
          difficulty: 2,
          starterCode: `#include <iostream>\nint main() {\n  // bool true, then string "true"\n  return 0;\n}\n`,
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
      id: 'cpp-ess-numbers',
      title: 'Integers & numbers',
      summary: 'Whole numbers (int), decimals (double) — when to use each, and what they can't do.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Define: int and double',
          body: `An int is a whole number with no fractional part: 0, 42, -3. A double holds decimals: 3.14, 2.0.\n\nUse ints for counts, indexes, and scores that must stay whole. Use doubles for measurements, averages, and anything that can be "in between."`,
        },
        {
          heading: 'When to use them',
          body: `• Counting loops, vector indexes, "how many?" → int\n• Division that should keep a fraction → double (9.0 / 2 is 4.5)\n• Measurements and averages → double\n\nInteger division truncates: 7 / 2 is 3 when both sides are ints. % gives remainder: 17 % 5 is 2.`,
        },
        {
          heading: 'What numbers can't be / common mistakes',
          body: `• An int is not text — you can't do math on a std::string of digits without std::stoi.\n• Integer division truncates: 7 / 2 is 3, not 3.5 — mix in 2.0 when you need decimals.\n• Don't use a std::string of digits as if it were a number: "10" + "1" is "101", not 11.\n• Don't use a double as a vector index (indexes must be ints).`,
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
        {
          id: 'p3',
          title: 'Power',
          prompt: 'Print 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 (256) using multiplication.',
          difficulty: 2,
          starterCode: `#include <iostream>\nint main() {\n  // 2 multiplied 8 times = 256\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints 256', hint: 'cout << 256 or multiply 2 eight times', kind: 'stdout', expect: '256' },
          ],
        },
      ],
    },
    {
      id: 'cpp-ess-strings',
      title: 'Strings (text)',
      summary: 'Define text values — when to use them, and what you can't do with them.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Define: string',
          body: `A std::string holds text in double quotes: std::string name = "Ada"; (include <string>).\n\nEmpty string "" has size 0. "code".size() is 4. Indexes start at 0: name[0] is the first character.\n\nC-style "text" also works with cout. Prefer std::string when you store and modify text.`,
        },
        {
          heading: 'When to use strings',
          body: `• Names, messages, file paths, labels on screen\n• Anything the user reads as text\n• Digits that are identifiers, not math (zip codes, phone numbers) — keep them as strings\n\nChain with << : cout << "Hi " << name << endl; Concatenate with +: std::string msg = "Hi " + name;`,
        },
        {
          heading: 'What strings can't do',
          body: `• You can't do "3" - 1 without std::stoi("3") first.\n• std::string + int doesn't work the way Python f-strings do — convert with std::to_string or chain <<.\n• Strings are not vectors of numbers; don't expect numeric compare without converting.\n• You can't change one character in place easily — build a new string instead.`,
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
        {
          id: 'p3',
          title: 'Concatenate strings',
          prompt: 'Using +, print go twice stuck together: gogo (from std::string s = "go";).',
          difficulty: 2,
          starterCode: `#include <iostream>\n#include <string>\nint main() {\n  std::string s = "go";\n  // print s + s\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints gogo', hint: 'cout << s + s', kind: 'stdout', expect: 'gogo' },
            { id: 't2', description: 'Uses +', hint: 's + s', kind: 'codeIncludes', expect: '+' },
          ],
        },
      ],
    },
    {
      id: 'cpp-ess-booleans',
      title: 'Booleans (true / false)',
      summary: 'Yes/no values — define them, when to use them, what they can't be.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Define: boolean',
          body: `A bool is only true or false (lowercase in C++). Nothing else is a bool — not "true", not 1, not "yes" (those are other types that can be converted).\n\nComparisons produce bools: 5 > 3 is true. Store them: bool ready = true;`,
        },
        {
          heading: 'When to use booleans',
          body: `• Flags: gameOver, isLoggedIn, ready\n• Conditions in if / while\n• Results of checks: score >= 60, name == "Ada"\n\nCombine with && / || / !: age >= 13 && age <= 19.`,
        },
        {
          heading: 'What booleans aren't',
          body: `"true" (with quotes) is a std::string, not a bool — it's truthy as non-empty text, which is a different rule.\n\nUse == to compare values (not a single =). = assigns; == compares.\n\nBy default cout prints bool as 1/0. Use std::boolalpha to print true/false words.`,
        },
      ],
      examples: [
        {
          title: 'Comparisons and logic',
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
      id: 'cpp-ess-vectors',
      title: 'Vectors (collections)',
      summary: 'Ordered collections of values — define, when to use, what they can't be.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Define: vector',
          body: `A std::vector<int> is an ordered collection of ints (include <vector>): std::vector<int> nums = {3, 6, 9};\n\nIndexes start at 0: nums[0] is 3. nums.size() is 3. You can grow a vector: nums.push_back(12);`,
        },
        {
          heading: 'When to use vectors',
          body: `• Many related values of the same kind (names, scores, prices)\n• When you'll loop through every item\n• When the collection can grow (unlike C arrays)\n\nfor (int n : nums) visits each element (range-for). Use nums[i] when you need the index.`,
        },
        {
          heading: 'What vectors aren't / can't do',
          body: `• A vector is not a std::string — different types, different operations.\n• Index out of range: nums[3] on a size-3 vector is undefined behavior (valid indexes 0..2).\n• Don't confuse the vector with one element inside it — cout << nums vs cout << nums[0].\n• A single int is not a vector: 5 has no [0].`,
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
      summary: 'Declare types and convert with stoi / to_string.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Declare the type',
          body: `C++ wants the type up front: int n = 3; double x = 1.5; bool ok = true; std::string s = "hi"; char c = 'A'; std::vector<int> nums = {1, 2, 3};\n\nEach type has rules about what operations are allowed.`,
        },
        {
          heading: 'Convert between types',
          body: `• std::stoi("12") → 12 (include <string>, for math on digit strings)\n• std::stod("3.5") → 3.5\n• std::to_string(12) → "12" (for building text)\n\nCasts like static_cast<double>(7) / 2 force decimal division.\n\nVectors don't convert to numbers — access elements with nums[0] or loop.`,
        },
        {
          heading: 'Why convert?',
          body: `Input and some APIs give you std::strings even when the content looks like numbers. Convert before doing math. Convert numbers to strings when building messages with + (or chain <<).\n\nstd::stoi("12.5") fails — use std::stod first if you need decimals.`,
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
          title: 'to_string',
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
