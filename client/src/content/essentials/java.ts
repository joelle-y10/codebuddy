import type { Module } from '../../types'

const JAVA_HEAD = `public class Main {\n  public static void main(String[] args) {\n`
const JAVA_TAIL = `  }\n}\n`

/** First module: values, variables, and simple type practice. */
export const javaEssentialsModule: Module = {
  id: 'java-essentials',
  title: 'Values, variables & types',
  summary:
    'Start here: what a value is, what a variable is, then integers, doubles, strings, and booleans — with simple practice.',
  lessons: [
    {
      id: 'java-ess-values',
      title: 'What is a value?',
      summary: 'A value is a piece of data. Every value has a type.',
      runner: 'java',
      sections: [
        {
          heading: 'Value + type',
          body: `A value is one piece of information — like 7, "Ada", or true.\n\nEvery value has a type (its category):\n\n• Integer (int) — a whole number: 0, 7, -3\n• Double — a decimal number: 3.14, 2.0\n• String — text in quotes: "hello", "42"\n• Boolean (boolean) — true or false only (no quotes)`,
        },
      ],
      examples: [
        {
          title: 'Four values',
          code: `${JAVA_HEAD}    System.out.println(7);\n    System.out.println(3.5);\n    System.out.println("Ada");\n    System.out.println(true);\n${JAVA_TAIL}`,
          note: 'Each line prints one value.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print a number',
          prompt: 'Print 10.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // Print 10\n${JAVA_TAIL}`,
          tests: [{ id: 't1', description: 'Prints 10', hint: 'System.out.println(10)', kind: 'stdout', expect: '10' }],
        },
        {
          id: 'p2',
          title: 'Print text',
          prompt: 'Print the word hi.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // Print "hi"\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints hi', hint: 'System.out.println("hi")', kind: 'stdout', expect: 'hi' },
            { id: 't2', description: 'Uses quotes', hint: 'Put hi in quotes', kind: 'codeMatches', expect: '["\']hi["\']' },
          ],
        },
      ],
    },
    {
      id: 'java-ess-variables',
      title: 'Variables',
      summary: 'A variable is a name that holds a value.',
      runner: 'java',
      sections: [
        {
          heading: 'Definition: variable',
          body: `A variable is a name that stores a value so you can use it later.\n\nYou create one with = (assignment):\n\nint score = 10;\nString name = "Ada";\nboolean ready = true;\n\n• The name is on the left (score, name, ready)\n• The type comes before the name in Java (int, String, boolean)\n• The value is on the right (10, "Ada", true)\n• = means "put this value into that name" — it is not the same as == (which asks "are these equal?")`,
        },
        {
          heading: 'Using a variable',
          body: `After you store a value, use the name to get it back:\n\nint score = 10;\nSystem.out.println(score);   → prints 10\n\nYou can change it later:\n\nint score = 10;\nscore = 11;\nSystem.out.println(score);   → prints 11`,
        },
        {
          heading: 'Good names',
          body: `Use clear names: score, name, total — not s or x (unless x is a position).\n\nNames cannot start with a digit. They cannot have spaces. Use camelCase for multi-word names: playerName.`,
        },
      ],
      examples: [
        {
          title: 'Store and print',
          code: `${JAVA_HEAD}    int age = 15;\n    String name = "Ada";\n    System.out.println(age);\n    System.out.println(name);\n${JAVA_TAIL}`,
          note: 'Print the variable name — not the word in quotes unless you want text.',
        },
        {
          title: 'Change a variable',
          code: `${JAVA_HEAD}    int score = 0;\n    score = 5;\n    System.out.println(score);\n${JAVA_TAIL}`,
          note: 'The last value assigned is what println shows.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Make a variable',
          prompt: 'Make a variable called age set to 12. Then print age.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // int age = 12\n    // print age\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints 12', hint: 'int age = 12 then System.out.println(age)', kind: 'stdout', expect: '12' },
            { id: 't2', description: 'Uses age', hint: 'age = ...', kind: 'codeMatches', expect: '\\bage\\s*=' },
          ],
        },
        {
          id: 'p2',
          title: 'Store a name',
          prompt: 'Make a variable called name set to Ada. Then print name.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // String name = "Ada"\n    // print name\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints Ada', hint: 'String name = "Ada" then System.out.println(name)', kind: 'stdout', expect: 'Ada' },
            { id: 't2', description: 'Uses name', hint: 'name = "Ada"', kind: 'codeMatches', expect: '\\bname\\s*=' },
          ],
        },
        {
          id: 'p3',
          title: 'Change it',
          prompt: 'Set score to 0, then set score to 7, then print score.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // int score = 0\n    // score = 7\n    // print score\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints 7', hint: 'Assign 7 last, then System.out.println(score)', kind: 'stdout', expect: '7' },
            { id: 't2', description: 'Uses score', hint: 'score = ...', kind: 'codeMatches', expect: '\\bscore\\s*=' },
          ],
        },
      ],
    },
    {
      id: 'java-ess-numbers',
      title: 'Integers & doubles',
      summary: 'Integer = whole number. Double = decimal number.',
      runner: 'java',
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
          code: `${JAVA_HEAD}    int count = 7;\n    double price = 3.5;\n    System.out.println(count);\n    System.out.println(price);\n${JAVA_TAIL}`,
          note: '7 is an integer. 3.5 is a double.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print an integer',
          prompt: 'Print 17.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // Print 17\n${JAVA_TAIL}`,
          tests: [{ id: 't1', description: 'Prints 17', hint: 'System.out.println(17)', kind: 'stdout', expect: '17' }],
        },
        {
          id: 'p2',
          title: 'Print a double',
          prompt: 'Print 4.5.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // Print 4.5\n${JAVA_TAIL}`,
          tests: [{ id: 't1', description: 'Prints 4.5', hint: 'System.out.println(4.5)', kind: 'stdoutIncludes', expect: '4.5' }],
        },
        {
          id: 'p3',
          title: 'Store a double',
          prompt: 'Make a variable called price set to 2.5. Print price.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // double price = 2.5\n    // print price\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints 2.5', hint: 'double price = 2.5 then System.out.println(price)', kind: 'stdoutIncludes', expect: '2.5' },
            { id: 't2', description: 'Uses price', hint: 'price = 2.5', kind: 'codeMatches', expect: '\\bprice\\s*=' },
          ],
        },
      ],
    },
    {
      id: 'java-ess-strings',
      title: 'Strings (text)',
      summary: 'A String is text in quotes.',
      runner: 'java',
      sections: [
        {
          heading: 'Definition: String',
          body: `A String is text. Write it in quotes so Java knows it is text.\n\nExamples: "Ada", "hello", "42".\n\n"42" is a String (text). 42 without quotes is an int (a number).`,
        },
        {
          heading: 'Variables hold strings too',
          body: `String name = "Ada";\nSystem.out.println(name);\n\nJoin two strings with +: "Hi " + "Ada" → Hi Ada.`,
        },
      ],
      examples: [
        {
          title: 'String in a variable',
          code: `${JAVA_HEAD}    String word = "code";\n    System.out.println(word);\n    System.out.println("Hi " + "Ada");\n${JAVA_TAIL}`,
          note: 'Quotes make text a String.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print a string',
          prompt: 'Print hello.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // Print "hello"\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints hello', hint: 'System.out.println("hello")', kind: 'stdout', expect: 'hello' },
          ],
        },
        {
          id: 'p2',
          title: 'Store a string',
          prompt: 'Make a variable called city set to Calgary. Print city.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // String city = "Calgary"\n    // print city\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints Calgary', hint: 'String city = "Calgary" then System.out.println(city)', kind: 'stdout', expect: 'Calgary' },
            { id: 't2', description: 'Uses city', hint: 'city = ...', kind: 'codeMatches', expect: '\\bcity\\s*=' },
          ],
        },
        {
          id: 'p3',
          title: 'Join two strings',
          prompt: 'Print Hello Ada by joining greeting and name with a space.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    String greeting = "Hello";\n    String name = "Ada";\n    // print Hello Ada\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints Hello Ada', hint: 'System.out.println(greeting + " " + name)', kind: 'stdout', expect: 'Hello Ada' },
          ],
        },
      ],
    },
    {
      id: 'java-ess-booleans',
      title: 'Booleans (true / false)',
      summary: 'A boolean is a true/false value.',
      runner: 'java',
      sections: [
        {
          heading: 'Definition: boolean',
          body: `A boolean is a true/false value. It answers a yes/no question.\n\nIn Java the only boolean values are:\n• true\n• false\n\nNo quotes. Lowercase.\n\n"true" with quotes is a String, not a boolean.`,
        },
        {
          heading: 'Booleans in variables',
          body: `boolean ready = true;\nSystem.out.println(ready);\n\nComparisons also make booleans: score >= 60.`,
        },
      ],
      examples: [
        {
          title: 'Boolean values',
          code: `${JAVA_HEAD}    boolean ready = true;\n    System.out.println(ready);\n    System.out.println(false);\n\n    int score = 85;\n    System.out.println(score >= 60);\n${JAVA_TAIL}`,
          note: 'true and false are booleans.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print a boolean',
          prompt: 'Print true.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // Print true (no quotes)\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'System.out.println(true)', kind: 'stdout', expect: 'true' },
            { id: 't2', description: 'Uses true', hint: 'true without quotes', kind: 'codeMatches', expect: 'println\\(\\s*true\\s*\\)' },
          ],
        },
        {
          id: 'p2',
          title: 'Store a boolean',
          prompt: 'Make a variable called ready set to true. Print ready.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // boolean ready = true\n    // print ready\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'boolean ready = true then System.out.println(ready)', kind: 'stdout', expect: 'true' },
            { id: 't2', description: 'Uses ready', hint: 'ready = true', kind: 'codeMatches', expect: '\\bready\\s*=' },
          ],
        },
        {
          id: 'p3',
          title: 'Compare numbers',
          prompt: 'score is 85. Print whether score >= 60.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    int score = 85;\n    // print score >= 60\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'System.out.println(score >= 60)', kind: 'stdout', expect: 'true' },
            { id: 't2', description: 'Uses >=', hint: 'score >= 60', kind: 'codeIncludes', expect: '>=' },
          ],
        },
      ],
    },
    {
      id: 'java-ess-output',
      title: 'How types look when printed',
      summary: 'Different types can look the same when printed — know which one you meant.',
      runner: 'java',
      sections: [
        {
          heading: 'Look-alikes',
          body: `System.out.println(42) and System.out.println("42") both show 42 — but one is an int and one is a String.\n\nSystem.out.println(false) and System.out.println("false") both show false — but one is a boolean and one is a String.\n\nRule: quotes → String. No quotes on true/false → boolean. No quotes on digits → number.`,
        },
      ],
      examples: [
        {
          title: 'Side by side',
          code: `${JAVA_HEAD}    System.out.println(42);\n    System.out.println("42");\n    System.out.println(false);\n    System.out.println("false");\n${JAVA_TAIL}`,
          note: 'Same looking output, different types.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Number then word',
          prompt: 'Print 7. Then print seven on the next line.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // print 7\n    // print "seven"\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Two lines', hint: 'System.out.println(7) then System.out.println("seven")', kind: 'stdout', expect: '7\nseven' },
          ],
        },
        {
          id: 'p2',
          title: 'Boolean then string',
          prompt: 'Print the boolean false. Then print the string false on the next line.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // print false\n    // print "false"\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'false then false', hint: 'System.out.println(false) then System.out.println("false")', kind: 'stdout', expect: 'false\nfalse' },
            { id: 't2', description: 'Uses boolean false', hint: 'false without quotes first', kind: 'codeMatches', expect: 'println\\(\\s*false\\s*\\)' },
            { id: 't3', description: 'Uses string false', hint: 'System.out.println("false")', kind: 'codeIncludes', expect: '"false"' },
          ],
        },
      ],
    },
    {
      id: 'java-ess-arrays',
      title: 'Arrays',
      summary: 'An array holds several values in order.',
      runner: 'java',
      sections: [
        {
          heading: 'Definition: array',
          body: `An array is an ordered group of values in curly braces.\n\nint[] nums = {3, 6, 9};\n\n• nums[0] is the first item (3)\n• nums.length is how many items (3)`,
        },
      ],
      examples: [
        {
          title: 'A short array',
          code: `${JAVA_HEAD}    int[] nums = {3, 6, 9};\n    System.out.println(nums[0]);\n    System.out.println(nums.length);\n${JAVA_TAIL}`,
          note: 'Indexes start at 0.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'First item',
          prompt: 'Print the first item in nums.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    int[] nums = {3, 6, 9};\n    // print the first item\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints 3', hint: 'System.out.println(nums[0])', kind: 'stdout', expect: '3' },
          ],
        },
        {
          id: 'p2',
          title: 'How many items',
          prompt: 'Print how many items are in nums.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    int[] nums = {3, 6, 9};\n    // print the length\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints 3', hint: 'System.out.println(nums.length)', kind: 'stdout', expect: '3' },
            { id: 't2', description: 'Uses length', hint: 'nums.length', kind: 'codeIncludes', expect: '.length' },
          ],
        },
      ],
    },
    {
      id: 'java-ess-convert',
      title: 'Changing types',
      summary: 'Convert a value when you need a different type.',
      runner: 'java',
      sections: [
        {
          heading: 'Common conversions',
          body: `• Integer.parseInt("12") → 12 (text digits → integer)\n• String.valueOf(5) → "5" (number → text)\n• Double.parseDouble("3.5") → 3.5\n\nUse parseInt before math on digit text. Use valueOf when joining text with +.`,
        },
      ],
      examples: [
        {
          title: 'Convert then use',
          code: `${JAVA_HEAD}    String raw = "12";\n    int n = Integer.parseInt(raw);\n    System.out.println(n + 1);\n    System.out.println("n=" + n);\n${JAVA_TAIL}`,
          note: 'parseInt for math; + with String builds text.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Text to number',
          prompt: 'Turn raw into an integer, add 3, and print the result.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    String raw = "12";\n    // Integer.parseInt(raw) + 3, then print\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints 15', hint: 'System.out.println(Integer.parseInt(raw) + 3)', kind: 'stdout', expect: '15' },
            { id: 't2', description: 'Uses parseInt', hint: 'Integer.parseInt(raw)', kind: 'codeIncludes', expect: 'parseInt' },
          ],
        },
        {
          id: 'p2',
          title: 'Number to text',
          prompt: 'Print score: 7 using String.valueOf and +.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    int n = 7;\n    // print "score: " + String.valueOf(n)\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints score: 7', hint: 'System.out.println("score: " + String.valueOf(n))', kind: 'stdout', expect: 'score: 7' },
            { id: 't2', description: 'Uses valueOf', hint: 'String.valueOf(n)', kind: 'codeIncludes', expect: 'valueOf' },
          ],
        },
      ],
    },
  ],
}
