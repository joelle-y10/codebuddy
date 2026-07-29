import type { Module } from '../../types'

export const cppCraftModule: Module = {
  id: 'cpp-craft',
  title: 'Coding craft & symbols',
  summary: 'Semicolons, operators, and combining text with numbers in cout.',
  lessons: [
    {
      id: 'cpp-craft-semicolons',
      title: 'Every statement ends with ;',
      summary: 'C++ requires semicolons — missing one is a compile error.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Required punctuation',
          body: `In C++, each statement ends with a semicolon ;\n\nint x = 3;\nstd::cout << x << std::endl;\n\nHeaders like int main() { do not take a semicolon after the ). Closing braces } of functions also do not need a semicolon (class definitions sometimes do — you will learn that later).`,
        },
        {
          heading: 'Etiquette',
          body: `• Include <iostream> before using std::cout.\n• Always have int main() { ... return 0; }\n• Indent inside braces.\n• Prefer std:: before cout/endl (or using declarations once you understand them).`,
        },
      ],
      examples: [
        {
          title: 'Minimal correct program',
          code: `#include <iostream>\nint main() {\n  std::cout << "hi" << std::endl;\n  return 0;\n}`,
          note: 'Semicolons after the cout statement and return.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print with semicolon',
          prompt: 'Print ok using std::cout and end statements with ;',
          difficulty: 1,
          starterCode: `#include <iostream>\nint main() {\n  // print ok\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints ok', hint: 'std::cout << "ok" << std::endl;', kind: 'stdout', expect: 'ok' },
            { id: 't2', description: 'Uses cout', hint: 'std::cout', kind: 'codeIncludes', expect: 'cout' },
          ],
        },
      ],
    },
    {
      id: 'cpp-craft-operators',
      title: 'What coding signs mean',
      summary: '= vs ==, >=, and math operators in C++.',
      runner: 'cpp',
      sections: [
        {
          heading: '= assigns; == compares',
          body: `int score = 85; stores 85.\nif (score == 85) { ... } asks whether score equals 85.\n\nA notorious bug: if (score = 85) assigns 85 (always true as a condition in C++). Always use == for equality tests.`,
        },
        {
          heading: 'Comparisons',
          body: `== != < > <= >= mean equal, not equal, less, greater, at most, at least — same ideas as other languages.`,
        },
      ],
      examples: [
        {
          title: '>= check',
          code: `#include <iostream>\nint main() {\n  int score = 85;\n  if (score >= 60) {\n    std::cout << "pass" << std::endl;\n  }\n  return 0;\n}`,
          note: '>= means at least 60.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Use ==',
          prompt: 'int n = 3; if n == 3 print yes.',
          difficulty: 1,
          starterCode: `#include <iostream>\nint main() {\n  int n = 3;\n  // if n == 3 print yes\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints yes', hint: 'if (n == 3) std::cout << "yes"', kind: 'stdout', expect: 'yes' },
            { id: 't2', description: 'Uses ==', hint: 'n == 3', kind: 'codeIncludes', expect: '==' },
          ],
        },
        {
          id: 'p2',
          title: 'Use >=',
          prompt: 'score = 85; if score >= 60 print pass else print retry.',
          difficulty: 2,
          starterCode: `#include <iostream>\nint main() {\n  int score = 85;\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints pass', hint: 'if (score >= 60)', kind: 'stdout', expect: 'pass' },
            { id: 't2', description: 'Uses >=', hint: '>=', kind: 'codeIncludes', expect: '>=' },
          ],
        },
      ],
    },
    {
      id: 'cpp-craft-combine',
      title: 'Combining text and variables in cout',
      summary: 'Chain << to build one output line.',
      runner: 'cpp',
      sections: [
        {
          heading: 'The << chain',
          body: `std::cout << "score " << score << std::endl;\n\nEach << sends the next piece to the console. Strings go in quotes; variables do not.\n\nThis is the standard C++ way to mix labels and values on one line.`,
        },
      ],
      examples: [
        {
          title: 'Label + variable',
          code: `#include <iostream>\nint main() {\n  int score = 12;\n  std::cout << "score " << score << std::endl;\n  return 0;\n}`,
          note: 'Outputs: score 12',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print level line',
          prompt: 'Print C++ level 1 using variables language and level chained with <<.',
          difficulty: 1,
          starterCode: `#include <iostream>\n#include <string>\nint main() {\n  std::string language = "C++";\n  int level = 1;\n  // print: C++ level 1\n  return 0;\n}\n`,
          tests: [
            { id: 't1', description: 'Prints C++ level 1', hint: 'cout << language << " level " << level', kind: 'stdoutIncludes', expect: 'C++ level 1' },
            { id: 't2', description: 'Chains <<', hint: 'Multiple << in one statement', kind: 'codeMatches', expect: '<<.*<<' },
          ],
        },
      ],
    },
  ],
}
