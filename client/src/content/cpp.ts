import type { LanguageTrack } from '../types'
import { cppCraftModule } from './craft/cpp'
import { cppEssentialsModule } from './essentials/cpp'

export const cppTrack: LanguageTrack = {
  id: 'cpp',
  name: 'C++',
  tagline: 'Speed, control, and systems thinking.',
  accent: '#ffb86b',
  tier: 'basic',
  modules: [
    cppEssentialsModule,
    cppCraftModule,
    {
      id: 'cpp-start',
      title: 'Getting started',
      summary: 'iostream, main, and your first console programs.',
      lessons: [
        {
          id: 'cpp-hello',
          title: 'Hello, cout',
          summary: 'Write to the console from main.',
          runner: 'cpp',
          sections: [
            {
              heading: 'A minimal C++ program',
              body: `Every C++ program needs a main function — that’s where execution starts. Include <iostream> so you can use std::cout to print.\n\nstd::cout << "text" << std::endl; sends text to the console and ends the line.`,
            },
            {
              heading: 'Namespaces and endl',
              body: `std:: means “from the standard library.” You can also write using namespace std; later, but while learning, std::cout keeps the origin clear.\n\nstd::endl flushes and adds a newline. '\\n' also ends a line and is common in real code.`,
            },
            {
              heading: 'return 0',
              body: `Returning 0 from main signals success to the operating system. You’ll see it in nearly every beginner program.`,
            },
          ],
          examples: [
            {
              title: 'One message',
              code: `#include <iostream>\nint main() {\n  std::cout << "Hello, CodeBuddy!" << std::endl;\n  return 0;\n}`,
              note: 'Every C++ program needs a main function.',
            },
            {
              title: 'Two lines',
              code: `#include <iostream>\nint main() {\n  std::cout << "Line one" << std::endl;\n  std::cout << "Line two" << std::endl;\n  return 0;\n}`,
              note: 'Each cout with endl becomes its own line.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Say hello',
              prompt: 'Print exactly: Ready to code',
              difficulty: 1,
              starterCode: `#include <iostream>\nint main() {\n  // Print exactly: Ready to code\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints Ready to code', hint: 'std::cout << "Ready to code" << std::endl;', kind: 'stdout', expect: 'Ready to code' },
                { id: 't2', description: 'Has main', hint: 'int main() { ... }', kind: 'codeIncludes', expect: 'main' },
              ],
            },
            {
              id: 'p2',
              title: 'Two lines',
              prompt: 'Print Hello on the first line and CodeBuddy on the second.',
              difficulty: 2,
              starterCode: `#include <iostream>\nint main() {\n  // two lines\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Hello then CodeBuddy', hint: 'Two cout lines', kind: 'stdout', expect: 'Hello\nCodeBuddy' },
              ],
            },
            {
              id: 'p3',
              title: 'Include check',
              prompt: 'Print ok and make sure you still include iostream.',
              difficulty: 1,
              starterCode: `#include <iostream>\nint main() {\n  // print ok\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints ok', hint: 'cout << "ok"', kind: 'stdout', expect: 'ok' },
                { id: 't2', description: 'Includes iostream', hint: '#include <iostream>', kind: 'codeIncludes', expect: 'iostream' },
              ],
            },
          ],
        },
        {
          id: 'cpp-read-errors',
          title: 'Reading compile errors',
          summary: 'C++ fails at compile time — use that feedback.',
          runner: 'cpp',
          sections: [
            {
              heading: 'Compile then run',
              body: `Unlike Python or JavaScript, C++ is compiled. If the compiler can’t understand your code, you get a compile error before anything runs. Read the first error carefully — later errors are often cascade noise.`,
            },
            {
              heading: 'Common beginner mistakes',
              body: `Missing semicolons, mismatched quotes, forgetting return 0;, or typing cout without std:: (or a using declaration) all fail to compile.\n\nFix one error, rebuild, repeat.`,
            },
          ],
          examples: [
            {
              title: 'Semicolon matters',
              code: `#include <iostream>\nint main() {\n  std::cout << "fixed" << std::endl;\n  return 0;\n}`,
              note: 'Almost every C++ statement ends with ;',
            },
            {
              title: 'Quotes must match',
              code: `#include <iostream>\nint main() {\n  // Broken: std::cout << "hi' << std::endl;\n  std::cout << "hi" << std::endl;\n  return 0;\n}`,
              note: 'Matching quotes matter.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Fix the string',
              prompt: 'This starter is broken. Fix it so it prints fixed.',
              difficulty: 1,
              starterCode: `#include <iostream>\nint main() {\n  std::cout << "fixed' << std::endl;\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints fixed', hint: 'Use matching double quotes', kind: 'stdout', expect: 'fixed' },
              ],
            },
            {
              id: 'p2',
              title: 'Print OK twice',
              prompt: 'Print OK on two separate lines.',
              difficulty: 2,
              starterCode: `#include <iostream>\nint main() {\n  // two lines of OK\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'OK\\nOK', hint: 'Two cout << "OK" lines', kind: 'stdout', expect: 'OK\nOK' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cpp-vars',
      title: 'Variables & types',
      summary: 'Declare typed values and build messages.',
      lessons: [
        {
          id: 'cpp-vars-basics',
          title: 'int, double, string',
          summary: 'Names for values — with types.',
          runner: 'cpp',
          sections: [
            {
              heading: 'Why types?',
              body: `C++ asks you to declare the kind of value a variable holds: int for integers, double for floating-point, std::string for text (include <string>).\n\nint level = 1; creates a typed binding you can reassign later.`,
            },
            {
              heading: 'Chaining <<',
              body: `std::cout << language << " level " << level << std::endl; streams pieces left to right. Mix strings and numbers freely in the chain.`,
            },
          ],
          examples: [
            {
              title: 'Typed variables',
              code: `#include <iostream>\n#include <string>\nint main() {\n  std::string lang = "C++";\n  int level = 1;\n  std::cout << lang << " level " << level << std::endl;\n  return 0;\n}`,
              note: 'Chain << to build output.',
            },
            {
              title: 'Update an int',
              code: `#include <iostream>\nint main() {\n  int score = 10;\n  score = score + 5;\n  std::cout << score << std::endl;\n  return 0;\n}`,
              note: 'score becomes 15.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Introduce yourself',
              prompt: 'Keep the variables. Print: C++ level 1',
              difficulty: 1,
              starterCode: `#include <iostream>\n#include <string>\nint main() {\n  std::string language = "C++";\n  int level = 1;\n  // Print: C++ level 1\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints C++ level 1', hint: 'cout << language << " level " << level', kind: 'stdoutIncludes', expect: 'C++ level 1' },
                { id: 't2', description: 'Uses string', hint: 'Keep std::string language', kind: 'codeIncludes', expect: 'string' },
              ],
            },
            {
              id: 'p2',
              title: 'Level up',
              prompt: 'Start level at 1, add 2, then print C++ level 3',
              difficulty: 2,
              starterCode: `#include <iostream>\n#include <string>\nint main() {\n  std::string language = "C++";\n  int level = 1;\n  // increase level by 2, then print\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints level 3 message', hint: 'level = level + 2; then cout', kind: 'stdoutIncludes', expect: 'C++ level 3' },
              ],
            },
            {
              id: 'p3',
              title: 'Three facts',
              prompt: 'Print Ada, then London, then 1843 — each on its own line.',
              difficulty: 3,
              starterCode: `#include <iostream>\n#include <string>\nint main() {\n  std::string name = "Ada";\n  std::string city = "London";\n  int year = 1843;\n  // three lines\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Three-line output', hint: 'Three cout lines', kind: 'stdout', expect: 'Ada\nLondon\n1843' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cpp-conditionals',
      title: 'Decisions',
      summary: 'Programs that choose different paths.',
      lessons: [
        {
          id: 'cpp-if',
          title: 'if and else',
          summary: 'Branch on conditions.',
          runner: 'cpp',
          sections: [
            {
              heading: 'Conditions',
              body: `An if statement looks at a boolean expression. Comparisons like score >= 60 or name == "Ada" produce true or false.\n\nUse == for equality (not a single =, which assigns).`,
            },
            {
              heading: 'Branches and braces',
              body: `if (condition) { ... } runs the block when true. else { ... } runs when it wasn’t. You can chain else if for more cases.\n\nAlways use braces { } while learning — they prevent tricky bugs when you add a second line later.`,
            },
          ],
          examples: [
            {
              title: 'Pass / retry',
              code: `#include <iostream>\nint main() {\n  int score = 85;\n  if (score >= 60) {\n    std::cout << "pass" << std::endl;\n  } else {\n    std::cout << "retry" << std::endl;\n  }\n  return 0;\n}`,
              note: 'Change score and predict the output.',
            },
            {
              title: 'else if chain',
              code: `#include <iostream>\nint main() {\n  int temp = 50;\n  if (temp >= 80) std::cout << "hot\\n";\n  else if (temp >= 60) std::cout << "warm\\n";\n  else std::cout << "cool\\n";\n  return 0;\n}`,
              note: 'Only one branch runs.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Passing grade',
              prompt: 'If score >= 60 print pass, else print retry.',
              difficulty: 1,
              starterCode: `#include <iostream>\nint main() {\n  int score = 85;\n  // If score >= 60 print pass else print retry\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints pass', hint: 'if (score >= 60) cout << "pass"', kind: 'stdout', expect: 'pass' },
                { id: 't2', description: 'Uses if', hint: 'Write an if statement', kind: 'codeIncludes', expect: 'if' },
              ],
            },
            {
              id: 'p2',
              title: 'Temperature label',
              prompt: 'If temp >= 70 print warm, otherwise print cool.',
              difficulty: 2,
              starterCode: `#include <iostream>\nint main() {\n  int temp = 64;\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints cool for 64', hint: 'else branch should print cool', kind: 'stdout', expect: 'cool' },
              ],
            },
            {
              id: 'p3',
              title: 'Tier names',
              prompt: 'If points >= 100 print gold, else if >= 50 print silver, else print bronze. points is 50.',
              difficulty: 3,
              starterCode: `#include <iostream>\nint main() {\n  int points = 50;\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints silver', hint: 'else if (points >= 50)', kind: 'stdout', expect: 'silver' },
                { id: 't2', description: 'Uses else if', hint: 'else if', kind: 'codeIncludes', expect: 'else if' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cpp-loops',
      title: 'Loops',
      summary: 'Repeat work safely — the skill that unlocks real programs.',
      lessons: [
        {
          id: 'cpp-for-intro',
          title: 'for loops: the idea',
          summary: 'Start, condition, step — and what each part means.',
          runner: 'cpp',
          sections: [
            {
              heading: 'Why loops exist',
              body: `Copy-pasting cout five times “works” until you need 500 lines or the count comes from a variable. A loop repeats a block while a rule stays true.\n\nThe classic for loop packs three parts into one header: where you start, when you stop, and how you move each time.`,
            },
            {
              heading: 'Anatomy of for ( ; ; )',
              body: `for (int i = 1; i <= 5; i++) {\n  std::cout << i << std::endl;\n}\n\n1) int i = 1 runs once — the counter starts at 1.\n2) i <= 5 is checked before every repeat — if false, the loop ends.\n3) i++ runs after each body — add one to i.\n\nTrace it on paper: i becomes 1,2,3,4,5 then the condition fails.`,
            },
            {
              heading: 'Off-by-one thinking',
              body: `i < 5 with a start of 0 gives five values (0–4). i <= 5 with a start of 1 also gives five values (1–5). Decide whether you want “five times” or “numbers from A through B”, then pick the condition that matches.`,
            },
          ],
          examples: [
            {
              title: 'Count 1 to 3',
              code: `#include <iostream>\nint main() {\n  for (int i = 1; i <= 3; i++) {\n    std::cout << i << std::endl;\n  }\n  return 0;\n}`,
              note: 'Predict the three lines before you run.',
            },
            {
              title: 'Zero-based count',
              code: `#include <iostream>\nint main() {\n  for (int i = 0; i < 3; i++) {\n    std::cout << i << std::endl;\n  }\n  return 0;\n}`,
              note: 'Prints 0, then 1, then 2.',
            },
            {
              title: 'Count downward',
              code: `#include <iostream>\nint main() {\n  for (int i = 3; i >= 1; i--) {\n    std::cout << i << std::endl;\n  }\n  return 0;\n}`,
              note: 'The step can subtract.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Count to five',
              prompt: 'Print 1 through 5, each on its own line, using a for loop.',
              difficulty: 1,
              starterCode: `#include <iostream>\nint main() {\n  // Print 1 through 5 each on its own line\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 1..5', hint: 'for (int i = 1; i <= 5; i++) cout << i << endl;', kind: 'stdout', expect: '1\n2\n3\n4\n5' },
                { id: 't2', description: 'Uses for', hint: 'for (', kind: 'codeIncludes', expect: 'for' },
              ],
            },
            {
              id: 'p2',
              title: 'Zero through four',
              prompt: 'Print 0,1,2,3,4 using i < 5 (not <=).',
              difficulty: 2,
              starterCode: `#include <iostream>\nint main() {\n  // zero-based loop\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 0..4', hint: 'for (int i = 0; i < 5; i++)', kind: 'stdout', expect: '0\n1\n2\n3\n4' },
                { id: 't2', description: 'Uses i < ', hint: 'Condition should use <', kind: 'codeMatches', expect: 'i\\s*<' },
              ],
            },
            {
              id: 'p3',
              title: 'Countdown',
              prompt: 'Print 5,4,3,2,1 using a decrementing for loop.',
              difficulty: 3,
              starterCode: `#include <iostream>\nint main() {\n  // count down\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 5..1', hint: 'for (int i = 5; i >= 1; i--)', kind: 'stdout', expect: '5\n4\n3\n2\n1' },
                { id: 't2', description: 'Uses decrement', hint: 'i-- or i -= 1', kind: 'codeMatches', expect: 'i--|i\\s*-=\\s*1' },
              ],
            },
          ],
        },
        {
          id: 'cpp-for-patterns',
          title: 'Loop patterns you’ll reuse',
          summary: 'Totals, repeated text, and stepping by more than one.',
          runner: 'cpp',
          sections: [
            {
              heading: 'Running totals',
              body: `Start an accumulator before the loop: int sum = 0;. Inside, update it: sum += i;. After the loop, print the result once.`,
            },
            {
              heading: 'Different steps',
              body: `i += 2 jumps by twos. That’s how you print even numbers. Always ask: first value, last value you still want, and jump size.`,
            },
            {
              heading: 'Repeat a message',
              body: `The loop variable doesn’t have to be printed. Sometimes you only use it to mean “do this N times”.`,
            },
          ],
          examples: [
            {
              title: 'Sum 1..4',
              code: `#include <iostream>\nint main() {\n  int sum = 0;\n  for (int i = 1; i <= 4; i++) {\n    sum += i;\n  }\n  std::cout << sum << std::endl;\n  return 0;\n}`,
              note: '1+2+3+4 = 10, printed once.',
            },
            {
              title: 'Evens',
              code: `#include <iostream>\nint main() {\n  for (int i = 2; i <= 8; i += 2) {\n    std::cout << i << std::endl;\n  }\n  return 0;\n}`,
              note: 'Step is +2.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Sum 1..5',
              prompt: 'Add 1 through 5 in a loop and print the total (15).',
              difficulty: 1,
              starterCode: `#include <iostream>\nint main() {\n  int sum = 0;\n  // loop, then print sum\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 15', hint: 'sum += i inside for 1..5', kind: 'stdout', expect: '15' },
                { id: 't2', description: 'Uses a for loop', hint: 'for (', kind: 'codeIncludes', expect: 'for' },
              ],
            },
            {
              id: 'p2',
              title: 'Even numbers',
              prompt: 'Print 2,4,6,8,10 each on its own line.',
              difficulty: 2,
              starterCode: `#include <iostream>\nint main() {\n  // step by 2\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints evens', hint: 'for (int i = 2; i <= 10; i += 2)', kind: 'stdout', expect: '2\n4\n6\n8\n10' },
              ],
            },
            {
              id: 'p3',
              title: 'Repeat label',
              prompt: 'Print the word loop exactly 4 times (4 lines).',
              difficulty: 2,
              starterCode: `#include <iostream>\nint main() {\n  // four times\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Four lines of loop', hint: 'for (int i = 0; i < 4; i++) cout << "loop"', kind: 'stdout', expect: 'loop\nloop\nloop\nloop' },
              ],
            },
          ],
        },
        {
          id: 'cpp-while',
          title: 'while loops',
          summary: 'Repeat until a condition becomes false — carefully.',
          runner: 'cpp',
          sections: [
            {
              heading: 'When while shines',
              body: `A while loop only needs a condition: while (ok) { ... }. Use it when you don’t know the count ahead of time.\n\nYou must change something inside the loop that eventually makes the condition false — or you create an infinite loop (CodeBuddy will time out).`,
            },
            {
              heading: 'for vs while',
              body: `If you have a clear counter from A to B, for is usually cleaner. If you’re waiting until a value crosses a threshold, while often reads better.`,
            },
          ],
          examples: [
            {
              title: 'while count',
              code: `#include <iostream>\nint main() {\n  int i = 1;\n  while (i <= 3) {\n    std::cout << i << std::endl;\n    i += 1;\n  }\n  return 0;\n}`,
              note: 'Don’t forget i += 1.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'while 1..4',
              prompt: 'Print 1..4 using while (not for).',
              difficulty: 1,
              starterCode: `#include <iostream>\nint main() {\n  int i = 1;\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 1..4', hint: 'while (i <= 4) { cout << i; i++; }', kind: 'stdout', expect: '1\n2\n3\n4' },
                { id: 't2', description: 'Uses while', hint: 'while (', kind: 'codeIncludes', expect: 'while' },
              ],
            },
            {
              id: 'p2',
              title: 'Double until big',
              prompt: 'Start n at 1. While n < 20, print n, then double it. (1,2,4,8,16)',
              difficulty: 3,
              starterCode: `#include <iostream>\nint main() {\n  int n = 1;\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints doubling sequence', hint: 'while (n < 20) { cout << n; n *= 2; }', kind: 'stdout', expect: '1\n2\n4\n8\n16' },
                { id: 't2', description: 'Uses while', hint: 'while', kind: 'codeIncludes', expect: 'while' },
              ],
            },
            {
              id: 'p3',
              title: 'Countdown while',
              prompt: 'Start n at 3. While n > 0, print n, then subtract 1.',
              difficulty: 2,
              starterCode: `#include <iostream>\nint main() {\n  int n = 3;\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 3,2,1', hint: 'while (n > 0) { cout << n; n--; }', kind: 'stdout', expect: '3\n2\n1' },
              ],
            },
          ],
        },
        {
          id: 'cpp-nested-loops',
          title: 'Nested loops & patterns',
          summary: 'Loops inside loops — go slow and trace.',
          runner: 'cpp',
          sections: [
            {
              heading: 'Outer and inner',
              body: `A nested loop means: for each value of the outer loop, run the entire inner loop.\n\nIf outer runs 3 times and inner runs 2 times, the inner body runs 6 times. Draw a tiny table of (outer, inner) pairs when you’re confused.`,
            },
            {
              heading: 'Building lines',
              body: `Sometimes the inner loop builds one line of text (append '*'), and the outer loop prints that line.`,
            },
          ],
          examples: [
            {
              title: 'Coordinate pairs',
              code: `#include <iostream>\nint main() {\n  for (int r = 1; r <= 2; r++) {\n    for (int c = 1; c <= 2; c++) {\n      std::cout << r << "," << c << std::endl;\n    }\n  }\n  return 0;\n}`,
              note: 'Prints 1,1 then 1,2 then 2,1 then 2,2.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Pairs',
              prompt: 'Using nested loops, print 1,1 / 1,2 / 2,1 / 2,2 each on its own line.',
              difficulty: 2,
              starterCode: `#include <iostream>\nint main() {\n  // nested for loops\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints four pairs', hint: 'outer 1..2, inner 1..2', kind: 'stdout', expect: '1,1\n1,2\n2,1\n2,2' },
                { id: 't2', description: 'Has two for loops', hint: 'Nest for inside for', kind: 'codeMatches', expect: 'for[\\s\\S]*for' },
              ],
            },
            {
              id: 'p2',
              title: 'Star rows',
              prompt: 'Print three lines: *, then **, then ***',
              difficulty: 3,
              starterCode: `#include <iostream>\n#include <string>\nint main() {\n  // outer rows, inner stars\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Triangle stars', hint: 'Build a string per row with an inner loop', kind: 'stdout', expect: '*\n**\n***' },
              ],
            },
            {
              id: 'p3',
              title: 'Multiplication trace',
              prompt: 'For i from 1 to 3, print i*2 on each line (2, 4, 6).',
              difficulty: 1,
              starterCode: `#include <iostream>\nint main() {\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 2,4,6', hint: 'for (int i = 1; i <= 3; i++) cout << i * 2', kind: 'stdout', expect: '2\n4\n6' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cpp-functions',
      title: 'Functions',
      summary: 'Name a process, reuse it, return results.',
      lessons: [
        {
          id: 'cpp-fn-basics',
          title: 'Declaring and calling',
          summary: 'Return type first, then name and parameters.',
          runner: 'cpp',
          sections: [
            {
              heading: 'What functions buy you',
              body: `A function packages steps under a name. Return type comes first: int square(int n) { return n * n; }\n\nDefine helpers above main, or declare a prototype before main and define later.`,
            },
            {
              heading: 'return vs cout',
              body: `return sends a value back to the caller. std::cout shows something in the console. Helpers usually return; main often prints.`,
            },
          ],
          examples: [
            {
              title: 'square',
              code: `#include <iostream>\nint square(int n) { return n * n; }\nint main() {\n  std::cout << square(6) << std::endl;\n  return 0;\n}`,
              note: 'Prints 36.',
            },
            {
              title: 'greet-style join',
              code: `#include <iostream>\n#include <string>\nstd::string greet(std::string name) {\n  return "hi " + name;\n}\nint main() {\n  std::cout << greet("Ada") << std::endl;\n  return 0;\n}`,
              note: 'Strings need <string>.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'square(6)',
              prompt: 'Define square(int n) returning n*n. In main, print square(6).',
              difficulty: 1,
              starterCode: `#include <iostream>\n// Define square(int n) returning n*n\n// In main, print square(6)\nint main() {\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 36', hint: 'int square(int n){return n*n;} then cout << square(6)', kind: 'stdout', expect: '36' },
                { id: 't2', description: 'Defines square', hint: 'int square(int n)', kind: 'codeMatches', expect: 'square\\s*\\(' },
              ],
            },
            {
              id: 'p2',
              title: 'doubleValue',
              prompt: 'Write doubleValue(int n) returning n*2. Print doubleValue(4).',
              difficulty: 2,
              starterCode: `#include <iostream>\nint main() {\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 8', hint: 'return n * 2', kind: 'stdout', expect: '8' },
                { id: 't2', description: 'Defines doubleValue', hint: 'doubleValue(', kind: 'codeIncludes', expect: 'doubleValue' },
              ],
            },
            {
              id: 'p3',
              title: 'sumThree',
              prompt: 'sumThree(a,b,c) returns a+b+c. Print sumThree(2,3,4).',
              difficulty: 2,
              starterCode: `#include <iostream>\nint main() {\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 9', hint: 'return a + b + c', kind: 'stdout', expect: '9' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cpp-vectors',
      title: 'Vectors',
      summary: 'Growable sequences from the STL.',
      lessons: [
        {
          id: 'cpp-vector-basics',
          title: 'std::vector basics',
          summary: 'Store lists of values and loop them.',
          runner: 'cpp',
          sections: [
            {
              heading: 'Why vector?',
              body: `#include <vector> gives you std::vector<int> — a resizable array. Push values with push_back, read size with .size(), and index with v[i] (starting at 0).`,
            },
            {
              heading: 'Range-style loops',
              body: `for (int n : nums) { ... } visits each element. Classic index loops work too: for (size_t i = 0; i < nums.size(); i++).`,
            },
          ],
          examples: [
            {
              title: 'Print each',
              code: `#include <iostream>\n#include <vector>\nint main() {\n  std::vector<int> nums = {3, 6, 9};\n  for (int n : nums) {\n    std::cout << n << std::endl;\n  }\n  return 0;\n}`,
              note: 'Three lines of output.',
            },
            {
              title: 'Sum',
              code: `#include <iostream>\n#include <vector>\nint main() {\n  std::vector<int> nums = {2, 4, 6};\n  int sum = 0;\n  for (int n : nums) sum += n;\n  std::cout << sum << std::endl;\n  return 0;\n}`,
              note: 'Prints 12.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Print each',
              prompt: 'Print each value in nums on its own line.',
              difficulty: 1,
              starterCode: `#include <iostream>\n#include <vector>\nint main() {\n  std::vector<int> nums = {3, 6, 9};\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 3,6,9', hint: 'for (int n : nums) cout << n', kind: 'stdout', expect: '3\n6\n9' },
              ],
            },
            {
              id: 'p2',
              title: 'First and last',
              prompt: 'Print the first element, then the last element, on two lines.',
              difficulty: 2,
              starterCode: `#include <iostream>\n#include <vector>\nint main() {\n  std::vector<int> nums = {10, 20, 30, 40};\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: '10 then 40', hint: 'nums[0] and nums[nums.size()-1]', kind: 'stdout', expect: '10\n40' },
              ],
            },
            {
              id: 'p3',
              title: 'Sum the vector',
              prompt: 'Loop to sum nums and print the total.',
              difficulty: 3,
              starterCode: `#include <iostream>\n#include <vector>\nint main() {\n  std::vector<int> nums = {2, 4, 6, 8};\n  return 0;\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 20', hint: 'int sum=0; for (...) sum += n; cout << sum', kind: 'stdout', expect: '20' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
