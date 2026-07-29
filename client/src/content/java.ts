import type { LanguageTrack } from '../types'
import { javaCraftModule } from './craft/java'
import { javaEssentialsModule } from './essentials/java'

export const javaTrack: LanguageTrack = {
  id: 'java',
  name: 'Java',
  tagline: 'Structured, portable, object-oriented.',
  accent: '#ff7a59',
  tier: 'basic',
  modules: [
    javaEssentialsModule,
    javaCraftModule,
    {
      id: 'java-start',
      title: 'Getting started',
      summary: 'public class Main, System.out, and your first programs.',
      lessons: [
        {
          id: 'java-hello',
          title: 'Hello, System.out',
          summary: 'Print from main.',
          runner: 'java',
          sections: [
            {
              heading: 'A minimal Java program',
              body: `In CodeBuddy, every Java lesson uses public class Main. The entry point is public static void main(String[] args).\n\nSystem.out.println("text"); prints a line to the console. println adds a newline; print does not.`,
            },
            {
              heading: 'Why so many keywords?',
              body: `public means other code can see the class. static means main belongs to the class itself (no object needed to start). void means main doesn’t return a value.\n\nYou’ll get used to the boilerplate — focus on the statements inside main while learning.`,
            },
            {
              heading: 'Statements',
              body: `Java statements end with a semicolon ;. Forgetting one is a common compile error. Keep one idea per line so you can read top to bottom.`,
            },
          ],
          examples: [
            {
              title: 'One message',
              code: `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, CodeBuddy!");\n  }\n}`,
              note: 'println adds a newline.',
            },
            {
              title: 'Several lines',
              code: `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Line one");\n    System.out.println("Line two");\n  }\n}`,
              note: 'Each println is its own line.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Say hello',
              prompt: 'Print exactly: Ready to code',
              difficulty: 1,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    // Print exactly: Ready to code\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints Ready to code', hint: 'System.out.println("Ready to code");', kind: 'stdout', expect: 'Ready to code' },
                { id: 't2', description: 'Uses println', hint: 'System.out.println', kind: 'codeIncludes', expect: 'System.out.println' },
              ],
            },
            {
              id: 'p2',
              title: 'Two lines',
              prompt: 'Print Hello on the first line and CodeBuddy on the second.',
              difficulty: 2,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    // two lines\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Hello then CodeBuddy', hint: 'Two println calls', kind: 'stdout', expect: 'Hello\nCodeBuddy' },
              ],
            },
            {
              id: 'p3',
              title: 'Keep Main',
              prompt: 'Print ok. Keep public class Main.',
              difficulty: 1,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    // print ok\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints ok', hint: 'println("ok")', kind: 'stdout', expect: 'ok' },
                { id: 't2', description: 'Has public class Main', hint: 'public class Main', kind: 'codeIncludes', expect: 'public class Main' },
              ],
            },
          ],
        },
        {
          id: 'java-read-errors',
          title: 'Reading compile errors',
          summary: 'Java fails at compile time — use that feedback.',
          runner: 'java',
          sections: [
            {
              heading: 'Compile then run',
              body: `Java is compiled. If the compiler can’t understand your code, you get an error before anything runs. Read the first error carefully — it usually names the file, line, and problem.`,
            },
            {
              heading: 'Common beginner mistakes',
              body: `Mismatched quotes, missing semicolons, wrong class name (must stay Main here), or typos like System.out.printl will fail.\n\nFix one error, rebuild, repeat.`,
            },
          ],
          examples: [
            {
              title: 'Broken vs fixed',
              code: `public class Main {\n  public static void main(String[] args) {\n    // Broken: System.out.println("hi');\n    System.out.println("hi");\n  }\n}`,
              note: 'Matching quotes matter.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Fix the string',
              prompt: 'This starter is broken. Fix it so it prints fixed.',
              difficulty: 1,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    System.out.println("fixed');\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints fixed', hint: 'Use matching double quotes', kind: 'stdout', expect: 'fixed' },
              ],
            },
            {
              id: 'p2',
              title: 'Print OK twice',
              prompt: 'Print OK on two separate lines.',
              difficulty: 2,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    // two lines of OK\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'OK\\nOK', hint: 'Two println("OK") calls', kind: 'stdout', expect: 'OK\nOK' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'java-vars',
      title: 'Variables & types',
      summary: 'Typed declarations and string messages.',
      lessons: [
        {
          id: 'java-vars-basics',
          title: 'int, double, String',
          summary: 'Names for values — with types.',
          runner: 'java',
          sections: [
            {
              heading: 'Why types?',
              body: `Java asks you to declare the kind of value a variable holds: int for integers, double for floating-point, String for text.\n\nint level = 1; creates a typed binding. String is a class; int is a primitive.`,
            },
            {
              heading: 'Concatenation',
              body: `Join with +: language + " level " + level. Numbers are converted to text automatically in a + chain that includes a String.`,
            },
          ],
          examples: [
            {
              title: 'Typed variables',
              code: `public class Main {\n  public static void main(String[] args) {\n    String lang = "Java";\n    int level = 1;\n    System.out.println(lang + " level " + level);\n  }\n}`,
              note: 'String is a class; int is a primitive.',
            },
            {
              title: 'Update an int',
              code: `public class Main {\n  public static void main(String[] args) {\n    int score = 10;\n    score = score + 5;\n    System.out.println(score);\n  }\n}`,
              note: 'score becomes 15.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Introduce yourself',
              prompt: 'Keep the variables. Print: Java level 1',
              difficulty: 1,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    String language = "Java";\n    int level = 1;\n    // Print: Java level 1\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints Java level 1', hint: 'println(language + " level " + level)', kind: 'stdoutIncludes', expect: 'Java level 1' },
                { id: 't2', description: 'Declares String', hint: 'String language = ...', kind: 'codeIncludes', expect: 'String' },
              ],
            },
            {
              id: 'p2',
              title: 'Level up',
              prompt: 'Start level at 1, add 2, then print Java level 3',
              difficulty: 2,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    String language = "Java";\n    int level = 1;\n    // increase level by 2, then print\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints level 3 message', hint: 'level = level + 2; then println', kind: 'stdoutIncludes', expect: 'Java level 3' },
              ],
            },
            {
              id: 'p3',
              title: 'Three facts',
              prompt: 'Print Ada, then London, then 1843 — each on its own line.',
              difficulty: 3,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    String name = "Ada";\n    String city = "London";\n    int year = 1843;\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Three-line output', hint: 'Three println calls', kind: 'stdout', expect: 'Ada\nLondon\n1843' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'java-conditionals',
      title: 'Decisions',
      summary: 'Programs that choose different paths.',
      lessons: [
        {
          id: 'java-if',
          title: 'if and else',
          summary: 'Branch on conditions.',
          runner: 'java',
          sections: [
            {
              heading: 'Conditions',
              body: `An if statement looks at a boolean expression. Comparisons like score >= 60 or name.equals("Ada") produce true or false.\n\nFor Strings, prefer .equals(...) over ==. For ints, == is correct.`,
            },
            {
              heading: 'Branches and braces',
              body: `if (condition) { ... } runs the block when true. else { ... } runs when it wasn’t. You can chain else if for more cases.\n\nAlways use braces { } while learning.`,
            },
          ],
          examples: [
            {
              title: 'Pass / retry',
              code: `public class Main {\n  public static void main(String[] args) {\n    int score = 85;\n    if (score >= 60) {\n      System.out.println("pass");\n    } else {\n      System.out.println("retry");\n    }\n  }\n}`,
              note: 'Change score and predict the output.',
            },
            {
              title: 'else if chain',
              code: `public class Main {\n  public static void main(String[] args) {\n    int temp = 50;\n    if (temp >= 80) System.out.println("hot");\n    else if (temp >= 60) System.out.println("warm");\n    else System.out.println("cool");\n  }\n}`,
              note: 'Only one branch runs.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Passing grade',
              prompt: 'If score >= 60 print pass, else print retry.',
              difficulty: 1,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    int score = 85;\n    // If score >= 60 print pass else print retry\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints pass', hint: 'if (score >= 60) println("pass")', kind: 'stdout', expect: 'pass' },
                { id: 't2', description: 'Uses if', hint: 'Write if (', kind: 'codeIncludes', expect: 'if' },
              ],
            },
            {
              id: 'p2',
              title: 'Temperature label',
              prompt: 'If temp >= 70 print warm, otherwise print cool.',
              difficulty: 2,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    int temp = 64;\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints cool for 64', hint: 'else branch should print cool', kind: 'stdout', expect: 'cool' },
              ],
            },
            {
              id: 'p3',
              title: 'Tier names',
              prompt: 'If points >= 100 print gold, else if >= 50 print silver, else print bronze. points is 50.',
              difficulty: 3,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    int points = 50;\n  }\n}\n`,
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
      id: 'java-loops',
      title: 'Loops',
      summary: 'Repeat work safely — the skill that unlocks real programs.',
      lessons: [
        {
          id: 'java-for-intro',
          title: 'for loops: the idea',
          summary: 'Start, condition, step — and what each part means.',
          runner: 'java',
          sections: [
            {
              heading: 'Why loops exist',
              body: `Copy-pasting println five times “works” until you need 500 lines or the count comes from a variable. A loop repeats a block while a rule stays true.\n\nThe classic for loop packs three parts into one header: where you start, when you stop, and how you move each time.`,
            },
            {
              heading: 'Anatomy of for ( ; ; )',
              body: `for (int i = 1; i <= 5; i++) {\n  System.out.println(i);\n}\n\n1) int i = 1 runs once — the counter starts at 1.\n2) i <= 5 is checked before every repeat — if false, the loop ends.\n3) i++ runs after each body — add one to i.\n\nTrace it on paper: i becomes 1,2,3,4,5 then the condition fails.`,
            },
            {
              heading: 'Off-by-one thinking',
              body: `i < 5 with a start of 0 gives five values (0–4). i <= 5 with a start of 1 also gives five values (1–5). Decide whether you want “five times” or “numbers from A through B”, then pick the condition that matches.`,
            },
          ],
          examples: [
            {
              title: 'Count 1 to 3',
              code: `public class Main {\n  public static void main(String[] args) {\n    for (int i = 1; i <= 3; i++) {\n      System.out.println(i);\n    }\n  }\n}`,
              note: 'Predict the three lines before you run.',
            },
            {
              title: 'Zero-based count',
              code: `public class Main {\n  public static void main(String[] args) {\n    for (int i = 0; i < 3; i++) {\n      System.out.println(i);\n    }\n  }\n}`,
              note: 'Prints 0, then 1, then 2.',
            },
            {
              title: 'Count downward',
              code: `public class Main {\n  public static void main(String[] args) {\n    for (int i = 3; i >= 1; i--) {\n      System.out.println(i);\n    }\n  }\n}`,
              note: 'The step can subtract.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Count to five',
              prompt: 'Print 1 through 5, each on its own line, using a for loop.',
              difficulty: 1,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    // Print 1 through 5 each on its own line\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 1..5', hint: 'for (int i = 1; i <= 5; i++) println(i)', kind: 'stdout', expect: '1\n2\n3\n4\n5' },
                { id: 't2', description: 'Uses for', hint: 'for (', kind: 'codeIncludes', expect: 'for' },
              ],
            },
            {
              id: 'p2',
              title: 'Zero through four',
              prompt: 'Print 0,1,2,3,4 using i < 5 (not <=).',
              difficulty: 2,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    // zero-based loop\n  }\n}\n`,
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
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    // count down\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 5..1', hint: 'for (int i = 5; i >= 1; i--)', kind: 'stdout', expect: '5\n4\n3\n2\n1' },
                { id: 't2', description: 'Uses decrement', hint: 'i-- or i -= 1', kind: 'codeMatches', expect: 'i--|i\\s*-=\\s*1' },
              ],
            },
          ],
        },
        {
          id: 'java-for-patterns',
          title: 'Loop patterns you’ll reuse',
          summary: 'Totals, repeated text, and stepping by more than one.',
          runner: 'java',
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
              code: `public class Main {\n  public static void main(String[] args) {\n    int sum = 0;\n    for (int i = 1; i <= 4; i++) {\n      sum += i;\n    }\n    System.out.println(sum);\n  }\n}`,
              note: '1+2+3+4 = 10, printed once.',
            },
            {
              title: 'Evens',
              code: `public class Main {\n  public static void main(String[] args) {\n    for (int i = 2; i <= 8; i += 2) {\n      System.out.println(i);\n    }\n  }\n}`,
              note: 'Step is +2.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Sum 1..5',
              prompt: 'Add 1 through 5 in a loop and print the total (15).',
              difficulty: 1,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    int sum = 0;\n    // loop, then print sum\n  }\n}\n`,
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
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    // step by 2\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints evens', hint: 'for (int i = 2; i <= 10; i += 2)', kind: 'stdout', expect: '2\n4\n6\n8\n10' },
              ],
            },
            {
              id: 'p3',
              title: 'Repeat label',
              prompt: 'Print the word loop exactly 4 times (4 lines).',
              difficulty: 2,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    // four times\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Four lines of loop', hint: 'for (int i = 0; i < 4; i++) println("loop")', kind: 'stdout', expect: 'loop\nloop\nloop\nloop' },
              ],
            },
          ],
        },
        {
          id: 'java-while',
          title: 'while loops',
          summary: 'Repeat until a condition becomes false — carefully.',
          runner: 'java',
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
              code: `public class Main {\n  public static void main(String[] args) {\n    int i = 1;\n    while (i <= 3) {\n      System.out.println(i);\n      i += 1;\n    }\n  }\n}`,
              note: 'Don’t forget i += 1.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'while 1..4',
              prompt: 'Print 1..4 using while (not for).',
              difficulty: 1,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    int i = 1;\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 1..4', hint: 'while (i <= 4) { println(i); i++; }', kind: 'stdout', expect: '1\n2\n3\n4' },
                { id: 't2', description: 'Uses while', hint: 'while (', kind: 'codeIncludes', expect: 'while' },
              ],
            },
            {
              id: 'p2',
              title: 'Double until big',
              prompt: 'Start n at 1. While n < 20, print n, then double it. (1,2,4,8,16)',
              difficulty: 3,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    int n = 1;\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints doubling sequence', hint: 'while (n < 20) { println(n); n *= 2; }', kind: 'stdout', expect: '1\n2\n4\n8\n16' },
                { id: 't2', description: 'Uses while', hint: 'while', kind: 'codeIncludes', expect: 'while' },
              ],
            },
            {
              id: 'p3',
              title: 'Countdown while',
              prompt: 'Start n at 3. While n > 0, print n, then subtract 1.',
              difficulty: 2,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    int n = 3;\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 3,2,1', hint: 'while (n > 0) { println(n); n--; }', kind: 'stdout', expect: '3\n2\n1' },
              ],
            },
          ],
        },
        {
          id: 'java-nested-loops',
          title: 'Nested loops & patterns',
          summary: 'Loops inside loops — go slow and trace.',
          runner: 'java',
          sections: [
            {
              heading: 'Outer and inner',
              body: `A nested loop means: for each value of the outer loop, run the entire inner loop.\n\nIf outer runs 3 times and inner runs 2 times, the inner body runs 6 times. Draw a tiny table of (outer, inner) pairs when you’re confused.`,
            },
            {
              heading: 'Building lines',
              body: `Sometimes the inner loop builds one line of text with a String, and the outer loop prints that line.`,
            },
          ],
          examples: [
            {
              title: 'Coordinate pairs',
              code: `public class Main {\n  public static void main(String[] args) {\n    for (int r = 1; r <= 2; r++) {\n      for (int c = 1; c <= 2; c++) {\n        System.out.println(r + "," + c);\n      }\n    }\n  }\n}`,
              note: 'Prints 1,1 then 1,2 then 2,1 then 2,2.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Pairs',
              prompt: 'Using nested loops, print 1,1 / 1,2 / 2,1 / 2,2 each on its own line.',
              difficulty: 2,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    // nested for loops\n  }\n}\n`,
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
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    // outer rows, inner stars\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Triangle stars', hint: 'Build a String per row with an inner loop', kind: 'stdout', expect: '*\n**\n***' },
              ],
            },
            {
              id: 'p3',
              title: 'Multiplication trace',
              prompt: 'For i from 1 to 3, print i*2 on each line (2, 4, 6).',
              difficulty: 1,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 2,4,6', hint: 'for (int i = 1; i <= 3; i++) println(i * 2)', kind: 'stdout', expect: '2\n4\n6' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'java-methods',
      title: 'Methods',
      summary: 'Reusable logic on a class.',
      lessons: [
        {
          id: 'java-method',
          title: 'static methods',
          summary: 'Parameters in, return values out.',
          runner: 'java',
          sections: [
            {
              heading: 'What methods buy you',
              body: `A method packages steps under a name. static methods can be called from main without creating an object.\n\nstatic int square(int n) { return n * n; } declares a method. square(6) calls it.`,
            },
            {
              heading: 'return vs println',
              body: `return sends a value back to the caller. System.out.println shows something in the console. Helpers usually return; main often prints.`,
            },
          ],
          examples: [
            {
              title: 'square',
              code: `public class Main {\n  static int square(int n) { return n * n; }\n  public static void main(String[] args) {\n    System.out.println(square(6));\n  }\n}`,
              note: 'Prints 36.',
            },
            {
              title: 'greet',
              code: `public class Main {\n  static String greet(String name) {\n    return "hi " + name;\n  }\n  public static void main(String[] args) {\n    System.out.println(greet("Ada"));\n  }\n}`,
              note: 'Return type sits before the method name.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'square(6)',
              prompt: 'Write static int square(int n) returning n*n, then print square(6).',
              difficulty: 1,
              starterCode: `public class Main {\n  // Write static int square(int n)\n  public static void main(String[] args) {\n    // Print square(6)\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 36', hint: 'static int square(int n){return n*n;} println(square(6))', kind: 'stdout', expect: '36' },
                { id: 't2', description: 'Defines square', hint: 'static int square', kind: 'codeMatches', expect: 'square\\s*\\(' },
              ],
            },
            {
              id: 'p2',
              title: 'greet',
              prompt: 'Write greet(name) that returns "hi " + name. Print greet("Ada").',
              difficulty: 2,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints hi Ada', hint: 'return "hi " + name', kind: 'stdout', expect: 'hi Ada' },
                { id: 't2', description: 'Defines greet', hint: 'greet(', kind: 'codeIncludes', expect: 'greet' },
              ],
            },
            {
              id: 'p3',
              title: 'sumThree',
              prompt: 'sumThree(a,b,c) returns a+b+c. Print sumThree(2,3,4).',
              difficulty: 2,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 9', hint: 'return a + b + c', kind: 'stdout', expect: '9' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'java-arrays',
      title: 'Arrays',
      summary: 'Fixed-length lists you can loop through.',
      lessons: [
        {
          id: 'java-arrays-basics',
          title: 'Creating and looping arrays',
          summary: 'Indexes, length, and enhanced for.',
          runner: 'java',
          sections: [
            {
              heading: 'Arrays of values',
              body: `int[] nums = {3, 6, 9}; creates an array. Indexes start at 0: nums[0] is 3. nums.length is 3.\n\nfor (int n : nums) { ... } visits each element. Classic for (int i = 0; i < nums.length; i++) is better when you need the index.`,
            },
          ],
          examples: [
            {
              title: 'enhanced for',
              code: `public class Main {\n  public static void main(String[] args) {\n    int[] nums = {3, 6, 9};\n    for (int n : nums) {\n      System.out.println(n);\n    }\n  }\n}`,
              note: 'Three lines of output.',
            },
            {
              title: 'First and last',
              code: `public class Main {\n  public static void main(String[] args) {\n    int[] nums = {10, 20, 30, 40};\n    System.out.println(nums[0]);\n    System.out.println(nums[nums.length - 1]);\n  }\n}`,
              note: 'length is a field, not a method.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Print each',
              prompt: 'Print each value in nums on its own line.',
              difficulty: 1,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    int[] nums = {3, 6, 9};\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 3,6,9', hint: 'for (int n : nums) println(n)', kind: 'stdout', expect: '3\n6\n9' },
              ],
            },
            {
              id: 'p2',
              title: 'First and last',
              prompt: 'Print the first element, then the last element, on two lines.',
              difficulty: 2,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    int[] nums = {10, 20, 30, 40};\n  }\n}\n`,
              tests: [
                { id: 't1', description: '10 then 40', hint: 'nums[0] and nums[nums.length-1]', kind: 'stdout', expect: '10\n40' },
              ],
            },
            {
              id: 'p3',
              title: 'Sum the array',
              prompt: 'Loop to sum nums and print the total.',
              difficulty: 3,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    int[] nums = {2, 4, 6, 8};\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 20', hint: 'int sum=0; for... sum += n; println(sum)', kind: 'stdout', expect: '20' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
