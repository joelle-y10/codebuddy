import type { LanguageTrack } from '../../types'

export const cppUniversity: LanguageTrack = {
  id: 'cpp',
  name: 'C++',
  tagline: 'References, classes, and the STL toolbox.',
  accent: '#ffb86b',
  tier: 'university',
  modules: [
    {
      id: 'cpp-u-memory',
      title: 'References & classes',
      summary: 'Aliases that avoid copies, and types that bundle state.',
      lessons: [
        {
          id: 'cpp-u-ref',
          title: 'References',
          summary: 'Aliases that avoid copies.',
          runner: 'cpp',
          sections: [
            {
              heading: 'What a reference is',
              body: `A reference is another name for an existing variable: int& r = x;. Changes through r change x.\n\nPass by reference when a function should modify the caller’s value without pointer syntax.`,
            },
            {
              heading: 'Reference parameters',
              body: `void bump(int& n) { n += 1; } lets the callee update the argument. Prefer const T& when you only need to read a large object.`,
            },
          ],
          examples: [
            {
              title: 'bump by reference',
              code: `#include <iostream>\nvoid bump(int& n) { n += 1; }\nint main() {\n  int x = 3;\n  bump(x);\n  std::cout << x << std::endl;\n  return 0;\n}`,
              note: 'Pass by reference when a function should modify the caller’s value.',
            },
            {
              title: 'double in place',
              code: `#include <iostream>\nvoid doubleInPlace(int& n) { n *= 2; }\nint main() {\n  int v = 6;\n  doubleInPlace(v);\n  std::cout << v << std::endl;\n  return 0;\n}`,
              note: 'v becomes 12.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'doubleInPlace',
              prompt: 'Write void doubleInPlace(int& n) that doubles n. Call it on v=6 and print v (12).',
              difficulty: 1,
              starterCode: `#include <iostream>\n// Write void doubleInPlace(int& n) that doubles n\nint main() {\n  int v = 6;\n  // call it, then print v (should be 12)\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 12', hint: 'void doubleInPlace(int& n){ n *= 2; }', kind: 'stdout', expect: '12' },
                { id: 't2', description: 'Uses a reference parameter', hint: 'int& in the parameter list', kind: 'codeMatches', expect: 'int\\s*&' },
              ],
            },
            {
              id: 'p2',
              title: 'addTen',
              prompt: 'void addTen(int& n) adds 10. Start at 5, call it, print 15.',
              difficulty: 2,
              starterCode: `#include <iostream>\nint main() {\n  int v = 5;\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 15', hint: 'n += 10', kind: 'stdout', expect: '15' },
                { id: 't2', description: 'Uses reference', hint: 'int&', kind: 'codeMatches', expect: 'int\\s*&' },
              ],
            },
          ],
        },
        {
          id: 'cpp-u-class',
          title: 'Classes',
          summary: 'Member data and methods.',
          runner: 'cpp',
          sections: [
            {
              heading: 'class groups state',
              body: `class groups fields and methods. Use public: for the interface callers need. Default member initializers keep setup simple.`,
            },
            {
              heading: 'Methods on instances',
              body: `Call methods with the dot: c.add(4). Methods can read and write member fields.`,
            },
          ],
          examples: [
            {
              title: 'Counter',
              code: `#include <iostream>\nclass Counter {\npublic:\n  int value = 0;\n  void add(int n) { value += n; }\n};\nint main() {\n  Counter c;\n  c.add(4);\n  std::cout << c.value << std::endl;\n  return 0;\n}`,
              note: 'Default member initializers keep setup simple.',
            },
            {
              title: 'Rect area',
              code: `#include <iostream>\nclass Rect {\npublic:\n  int width;\n  int height;\n  int area() const { return width * height; }\n};\nint main() {\n  Rect r{3, 7};\n  std::cout << r.area() << std::endl;\n  return 0;\n}`,
              note: 'const methods promise not to mutate.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Rect area',
              prompt: 'class Rect with width, height, and int area() const. Print area of 3x7.',
              difficulty: 1,
              starterCode: `#include <iostream>\n// class Rect with width, height, and int area() const\nint main() {\n  // Print Rect with 3x7 area\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 21', hint: 'class Rect { public: int width,height; int area() const { return width*height; } };', kind: 'stdout', expect: '21' },
                { id: 't2', description: 'Defines Rect', hint: 'class Rect', kind: 'codeIncludes', expect: 'class Rect' },
              ],
            },
            {
              id: 'p2',
              title: 'Counter add',
              prompt: 'class Counter with int value and void add(int). Start 0, add 9, print value.',
              difficulty: 2,
              starterCode: `#include <iostream>\nint main() {\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 9', hint: 'c.add(9); cout << c.value', kind: 'stdout', expect: '9' },
                { id: 't2', description: 'Defines Counter', hint: 'class Counter', kind: 'codeIncludes', expect: 'class Counter' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cpp-u-stl',
      title: 'STL toolbox',
      summary: 'Algorithms and templates for reusable code.',
      lessons: [
        {
          id: 'cpp-u-algo',
          title: 'Algorithms',
          summary: 'sort and accumulate.',
          runner: 'cpp',
          sections: [
            {
              heading: 'Ranges via iterators',
              body: `<algorithm> and <numeric> give tools like std::sort and std::accumulate. Iterators mark the range: begin → end.`,
            },
            {
              heading: 'accumulate',
              body: `std::accumulate(v.begin(), v.end(), 0) folds values into a sum starting at 0. Change the start for products or other folds.`,
            },
          ],
          examples: [
            {
              title: 'Sum with accumulate',
              code: `#include <iostream>\n#include <vector>\n#include <numeric>\nint main() {\n  std::vector<int> v = {1, 2, 3};\n  int sum = std::accumulate(v.begin(), v.end(), 0);\n  std::cout << sum << std::endl;\n  return 0;\n}`,
              note: 'Iterators mark the range: begin → end.',
            },
            {
              title: 'sort',
              code: `#include <iostream>\n#include <vector>\n#include <algorithm>\nint main() {\n  std::vector<int> v = {3, 1, 2};\n  std::sort(v.begin(), v.end());\n  for (int n : v) std::cout << n << std::endl;\n  return 0;\n}`,
              note: 'sort rearranges in place.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Sum vector',
              prompt: 'Print the sum of {2, 3, 5} with accumulate.',
              difficulty: 1,
              starterCode: `#include <iostream>\n#include <vector>\n#include <numeric>\nint main() {\n  std::vector<int> v = {2, 3, 5};\n  // Print the sum with accumulate\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 10', hint: 'std::accumulate(v.begin(), v.end(), 0)', kind: 'stdout', expect: '10' },
                { id: 't2', description: 'Uses accumulate', hint: 'include <numeric> and accumulate', kind: 'codeIncludes', expect: 'accumulate' },
              ],
            },
            {
              id: 'p2',
              title: 'Sort then print first',
              prompt: 'Sort {4, 1, 3} ascending and print the first element (1).',
              difficulty: 2,
              starterCode: `#include <iostream>\n#include <vector>\n#include <algorithm>\nint main() {\n  std::vector<int> v = {4, 1, 3};\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 1', hint: 'std::sort then cout << v[0]', kind: 'stdout', expect: '1' },
                { id: 't2', description: 'Uses sort', hint: 'std::sort', kind: 'codeIncludes', expect: 'sort' },
              ],
            },
          ],
        },
        {
          id: 'cpp-u-template',
          title: 'Function templates',
          summary: 'One function, many types.',
          runner: 'cpp',
          sections: [
            {
              heading: 'template <typename T>',
              body: `template <typename T> lets the compiler generate typed versions of a function. Write the logic once; call it with ints, doubles, and more (when operations make sense).`,
            },
            {
              heading: 'Deduction',
              body: `Usually you call identity(42) and the compiler deduces T. You can also write identity<int>(42) explicitly.`,
            },
          ],
          examples: [
            {
              title: 'twice',
              code: `#include <iostream>\ntemplate <typename T>\nT twice(T x) { return x + x; }\nint main() {\n  std::cout << twice(21) << std::endl;\n  return 0;\n}`,
              note: 'Works for ints here; same idea applies to other types.',
            },
            {
              title: 'identity',
              code: `#include <iostream>\ntemplate <typename T>\nT identity(T x) { return x; }\nint main() {\n  std::cout << identity(42) << std::endl;\n  return 0;\n}`,
              note: 'Returns whatever it receives.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'identity',
              prompt: 'Template identity function that returns its argument. Print identity(42).',
              difficulty: 1,
              starterCode: `#include <iostream>\n// template identity function that returns its argument\n// Print identity(42)\nint main() {\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 42', hint: 'template <typename T> T identity(T x){ return x; }', kind: 'stdout', expect: '42' },
                { id: 't2', description: 'Uses template', hint: 'template <typename T>', kind: 'codeIncludes', expect: 'template' },
              ],
            },
            {
              id: 'p2',
              title: 'twice template',
              prompt: 'Template twice(T x) returns x+x. Print twice(11).',
              difficulty: 2,
              starterCode: `#include <iostream>\nint main() {\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 22', hint: 'return x + x', kind: 'stdout', expect: '22' },
                { id: 't2', description: 'Uses template', hint: 'template', kind: 'codeIncludes', expect: 'template' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
