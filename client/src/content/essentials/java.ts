import type { Module } from '../../types'

const JAVA_HEAD = `public class Main {\n  public static void main(String[] args) {\n`
const JAVA_TAIL = `  }\n}\n`

/** First module: define each data type clearly, then practise using them. */
export const javaEssentialsModule: Module = {
  id: 'java-essentials',
  title: 'Values & types',
  summary:
    'Start here: learn what an int, double, String, and boolean are — then when to use each and how they print.',
  lessons: [
    {
      id: 'java-ess-values',
      title: 'What is a value?',
      summary: 'A value is a piece of data. Every value has a type. Learn the four core types by name.',
      runner: 'java',
      sections: [
        {
          heading: 'Value + type',
          body: `A value is one piece of information your program stores or uses — like 7, "Ada", or true.\n\nEvery value has a type. The type is the category of that value. The type decides what you are allowed to do with it (math? join text? yes/no decisions?).`,
        },
        {
          heading: 'The core types — memorize these definitions',
          body: `• Integer (int) — a whole number with no decimal point. Examples: 0, 7, -3, 100. Use for counts, scores, indexes.\n\n• Double — a number that can have a decimal point. Examples: 3.14, 2.0, -0.5. Use for measurements and averages.\n\n• String — text. Always written in double quotes. Examples: "Ada", "hello", "42", "". Use for names and messages.\n\n• Boolean (boolean) — a true/false value only. In Java: true or false (lowercase, no quotes). Use for yes/no decisions.\n\n• int[] — an ordered collection of ints in {braces}. Example: {10, 20, 30}. (You will practise arrays after the basics.)`,
        },
        {
          heading: 'Same looking output ≠ same type',
          body: `System.out.println(false) and System.out.println("false") both show false on the screen — but one is a boolean and one is a String.\n\nYou can't mix them in math or comparisons without converting. Always know which type you meant.`,
        },
      ],
      examples: [
        {
          title: 'Each type, named',
          code: `${JAVA_HEAD}    int count = 7;          // integer — whole number\n    double price = 3.5;     // double — decimal number\n    String name = "Ada";    // String — text in quotes\n    boolean ready = true;   // boolean — true or false only\n\n    System.out.println(count);\n    System.out.println(price);\n    System.out.println(name);\n    System.out.println(ready);\n${JAVA_TAIL}`,
          note: 'Java requires you to declare the type: int count = 7;',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Make one of each',
          prompt:
            'Create int n = 5, double x = 2.5, String label = "hi", and boolean ok = false. Print each on four lines in that order.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // int n, double x, String label, boolean ok — then println each\n${JAVA_TAIL}`,
          tests: [
            {
              id: 't1',
              description: 'Prints 5, 2.5, hi, false',
              hint: 'println(n);\\nprintln(x);\\nprintln(label);\\nprintln(ok);',
              kind: 'stdout',
              expect: '5\n2.5\nhi\nfalse',
            },
            {
              id: 't2',
              description: 'Uses boolean false',
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
          title: 'Declare types',
          prompt: 'Declare int age = 12; and print age.',
          difficulty: 2,
          starterCode: `${JAVA_HEAD}    // int age = 12; then println\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints 12', hint: 'int age = 12; println(age);', kind: 'stdout', expect: '12' },
            { id: 't2', description: 'Declares int', hint: 'int age', kind: 'codeIncludes', expect: 'int ' },
          ],
        },
      ],
    },
    {
      id: 'java-ess-numbers',
      title: 'Integers & doubles',
      summary: 'Integer = whole number. Double = decimal number. When to use each.',
      runner: 'java',
      sections: [
        {
          heading: 'Definition: integer (int)',
          body: `An integer is a whole number — no fractional part.\n\nExamples: 0, 1, 42, -3.\n\nNot integers: 3.14 (that's a double), "7" (that's a String because of the quotes).`,
        },
        {
          heading: 'Definition: double',
          body: `A double is a number that can include a decimal point.\n\nExamples: 3.14, 2.0, -0.5, 0.25.\n\nEven 2.0 is a double in Java, because it has a decimal point in how you wrote it.`,
        },
        {
          heading: 'When to use which',
          body: `• Counting, looping indexes, "how many?" → int\n• Measurements, averages, money-style decimals → double\n\nMath: + - * /  % (remainder).\nWatch integer division: 7 / 2 is 3 when both sides are ints. 7 / 2.0 is 3.5.`,
        },
        {
          heading: 'What they can't be',
          body: `• An int is not text — you can't do math on a String of digits without Integer.parseInt.\n• A String of digits like "10" is not an int until you use Integer.parseInt("10").\n• Integer division truncates: 7 / 2 is 3, not 3.5 — mix in 2.0 when you need decimals.\n• Don't use a double as an array index (indexes must be ints).`,
        },
      ],
      examples: [
        {
          title: 'int vs double',
          code: `${JAVA_HEAD}    System.out.println(7);        // integer\n    System.out.println(7.0);      // double\n    System.out.println(7 / 2);    // integer 3\n    System.out.println(7 / 2.0);  // double 3.5\n    System.out.println(17 % 5);\n${JAVA_TAIL}`,
          note: 'Mix in a .0 when you want a decimal result.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print an integer',
          prompt: 'Print the integer 17 (no quotes, no decimal point).',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // Print an integer\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints 17', hint: 'println(17)', kind: 'stdout', expect: '17' },
            { id: 't2', description: 'Uses int literal', hint: '17 without quotes', kind: 'codeMatches', expect: 'println\\(\\s*17\\s*\\)' },
          ],
        },
        {
          id: 'p2',
          title: 'Print a double',
          prompt: 'Print the double 4.5.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // Print a double\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints 4.5', hint: 'println(4.5)', kind: 'stdoutIncludes', expect: '4.5' },
            { id: 't2', description: 'Uses a decimal', hint: '4.5 with a dot', kind: 'codeMatches', expect: '4\\.5' },
          ],
        },
        {
          id: 'p3',
          title: 'Remainder',
          prompt: 'Print the remainder of 17 divided by 5 (integer answer 2).',
          difficulty: 2,
          starterCode: `${JAVA_HEAD}    // 17 % 5\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints 2', hint: 'println(17 % 5)', kind: 'stdout', expect: '2' },
            { id: 't2', description: 'Uses %', hint: '% operator', kind: 'codeIncludes', expect: '%' },
          ],
        },
      ],
    },
    {
      id: 'java-ess-strings',
      title: 'Strings (text)',
      summary: 'A String is text in quotes — letters, digits, spaces, anything you read as words.',
      runner: 'java',
      sections: [
        {
          heading: 'Definition: String',
          body: `A String is text. You write it inside double quotes so Java knows it's text, not a variable name or a number.\n\nExamples: "Ada", "hello", "42", "" (empty string).\n\nImportant: "42" is a String of characters, not the integer 42. "false" is a String, not the boolean false.`,
        },
        {
          heading: 'When to use strings',
          body: `• Names, messages, labels\n• Anything the user should read as text\n• Codes that look like numbers but aren't for math (zip codes, phone numbers) — keep them as strings so leading zeros aren't lost\n\n"java".length() is 4. Join with +: "Hi " + "Ada".`,
        },
        {
          heading: 'What strings can't do',
          body: `• You can't do "3" - 1 without Integer.parseInt("3") first.\n• A String is not a boolean — "true" is text, true is boolean.\n• For String content, use .equals("Ada"), not ==. == on Strings compares references and often surprises beginners.\n• Strings are immutable — you build new strings instead of changing characters in place.`,
        },
      ],
      examples: [
        {
          title: 'String vs number that looks the same',
          code: `${JAVA_HEAD}    System.out.println("42");      // String — text characters\n    System.out.println(42);        // int — a number\n    System.out.println("Hi " + "Ada");\n    System.out.println("code".length());\n${JAVA_TAIL}`,
          note: 'Quotes make it a String.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print a string',
          prompt: 'Print the String hello (with quotes in your code).',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // Print a String\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints hello', hint: 'println("hello")', kind: 'stdout', expect: 'hello' },
            { id: 't2', description: 'Uses quotes', hint: 'Put hello in quotes', kind: 'codeMatches', expect: '["\']hello["\']' },
          ],
        },
        {
          id: 'p2',
          title: 'Join a greeting',
          prompt: 'Using greeting and name, print Hello Ada (space between).',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    String greeting = "Hello";\n    String name = "Ada";\n    // Print Hello Ada\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints Hello Ada', hint: 'println(greeting + " " + name)', kind: 'stdout', expect: 'Hello Ada' },
          ],
        },
        {
          id: 'p3',
          title: 'String length',
          prompt: 'Print the length of word (should be 4).',
          difficulty: 2,
          starterCode: `${JAVA_HEAD}    String word = "java";\n    // print length\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints 4', hint: 'println(word.length())', kind: 'stdout', expect: '4' },
            { id: 't2', description: 'Uses length()', hint: 'word.length()', kind: 'codeIncludes', expect: 'length()' },
          ],
        },
      ],
    },
    {
      id: 'java-ess-booleans',
      title: 'Booleans (true / false)',
      summary: 'A boolean is a true/false value — only true or false.',
      runner: 'java',
      sections: [
        {
          heading: 'Definition: boolean',
          body: `A boolean is a true/false value. It answers a yes/no question.\n\nIn Java the only boolean values are:\n• true\n• false\n\nThey must be lowercase, and they must NOT be in quotes.\n\n• true  → boolean\n• false → boolean\n• "true" / "false" → Strings (text that happens to look similar)\n• 1 and 0 → integers, not booleans (even though they can act truthy/falsy in conditions)`,
        },
        {
          heading: 'When to use booleans',
          body: `• Flags: ready = true, gameOver = false\n• Results of comparisons: score >= 60 produces a boolean\n• Conditions in if / while\n\nCombine with && / || / !: age >= 13 && age <= 19.`,
        },
        {
          heading: 'What booleans aren't',
          body: `"false" with quotes is a String, not a boolean.\n\nUse == for ints and booleans. Use .equals for String text.\n\nDon't use = when you mean ==. = assigns; == compares.`,
        },
      ],
      examples: [
        {
          title: 'Boolean vs string that looks like one',
          code: `${JAVA_HEAD}    System.out.println(false);       // boolean\n    System.out.println("false");     // String\n\n    int score = 85;\n    System.out.println(score >= 60);   // comparison → boolean true\n${JAVA_TAIL}`,
          note: 'No quotes = boolean. Quotes = String.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print a boolean',
          prompt: 'Print the boolean true (no quotes).',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // A boolean is true or false. Print true.\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'println(true)', kind: 'stdout', expect: 'true' },
            { id: 't2', description: 'Uses true boolean', hint: 'true without quotes', kind: 'codeMatches', expect: 'println\\(\\s*true\\s*\\)' },
          ],
        },
        {
          id: 'p2',
          title: 'Compare with >=',
          prompt: 'Print whether score >= 60 (should be true). That comparison creates a boolean.',
          difficulty: 2,
          starterCode: `${JAVA_HEAD}    int score = 85;\n    // print the boolean result of score >= 60\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'println(score >= 60)', kind: 'stdout', expect: 'true' },
            { id: 't2', description: 'Uses >=', hint: 'score >= 60', kind: 'codeIncludes', expect: '>=' },
          ],
        },
        {
          id: 'p3',
          title: 'Use &&',
          prompt: 'Print whether ready is true and score >= 60 (should be true).',
          difficulty: 3,
          starterCode: `${JAVA_HEAD}    boolean ready = true;\n    int score = 85;\n    // print ready && score >= 60\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'println(ready && score >= 60)', kind: 'stdout', expect: 'true' },
            { id: 't2', description: 'Uses &&', hint: '&& between conditions', kind: 'codeIncludes', expect: '&&' },
          ],
        },
      ],
    },
    {
      id: 'java-ess-output',
      title: 'How types look when printed',
      summary: 'Now that you know the definitions — see how println shows each type (and how look-alikes can fool you).',
      runner: 'java',
      sections: [
        {
          heading: 'println shows characters — type is still real',
          body: `System.out.println(...) turns a value into characters on the screen. Two different types can look the same:\n\n• println(42) and println("42") both show 42\n• println(false) and println("false") both show false\n\nYou already know the definitions:\n• 42 without quotes → int\n• "42" with quotes → String\n• false without quotes → boolean\n• "false" with quotes → String`,
        },
        {
          heading: 'How each type usually prints',
          body: `• int / double → digits (3.5 for a double)\n• String → the text inside (quotes are NOT shown in the console)\n• boolean → true or false (lowercase)\n• char → a single character\n• Arrays print like [I@... (reference) — print elements individually or use Arrays.toString later\n\nprint(...) writes without a newline; println(...) adds one.`,
        },
      ],
      examples: [
        {
          title: 'Look-alikes side by side',
          code: `${JAVA_HEAD}    System.out.println(42);\n    System.out.println("42");\n    System.out.println(false);\n    System.out.println("false");\n    System.out.println(true);\n    System.out.println("true");\n${JAVA_TAIL}`,
          note: 'Same looking line, different type.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Integer then string',
          prompt: 'Print the integer 7, then on the next line print the String seven.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // int 7, then String "seven"\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Two-line output', hint: 'println(7) then println("seven")', kind: 'stdout', expect: '7\nseven' },
          ],
        },
        {
          id: 'p2',
          title: 'Boolean vs string false',
          prompt:
            'A boolean is true/false. A string is text in quotes. Print the boolean false, then print the String "false" on the next line.',
          difficulty: 2,
          starterCode: `${JAVA_HEAD}    // boolean false (no quotes), then String "false"\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'false then false', hint: 'println(false); println("false");', kind: 'stdout', expect: 'false\nfalse' },
            { id: 't2', description: 'Uses boolean false', hint: 'println(false) first', kind: 'codeMatches', expect: 'println\\(\\s*false\\s*\\)' },
            { id: 't3', description: 'Uses string false', hint: 'println("false")', kind: 'codeIncludes', expect: '"false"' },
          ],
        },
      ],
    },
    {
      id: 'java-ess-arrays',
      title: 'Arrays (collections)',
      summary: 'An array is an ordered collection of values in {braces}.',
      runner: 'java',
      sections: [
        {
          heading: 'Definition: array',
          body: `An array is an ordered collection of values: int[] nums = {3, 6, 9};\n\n• nums[0] is the first item (3) — indexes start at 0\n• nums.length is how many items (3) — a field, not a method\n• Arrays have a fixed size once created — beginners should usually keep one type per array`,
        },
        {
          heading: 'When to use arrays',
          body: `• Many related values (names, scores, prices)\n• When you'll loop through every item\n• When you know the size upfront\n\nfor (int n : nums) visits each element (enhanced for). Use nums[i] when you need the index.`,
        },
        {
          heading: 'What arrays aren't',
          body: `• A single int is not an array — 5 has no [0].\n• A String is not an int[].\n• Index out of range: nums[3] on a length-3 array throws ArrayIndexOutOfBoundsException.`,
        },
      ],
      examples: [
        {
          title: 'Create, index, loop',
          code: `${JAVA_HEAD}    int[] nums = {3, 6, 9};\n    System.out.println(nums[0]);\n    System.out.println(nums.length);\n    for (int n : nums) {\n      System.out.println(n);\n    }\n${JAVA_TAIL}`,
          note: 'First index is 0; length is how many items.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'First item',
          prompt: 'Print the first item of nums (3).',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    int[] nums = {3, 6, 9};\n    // print first item\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints 3', hint: 'println(nums[0])', kind: 'stdout', expect: '3' },
            { id: 't2', description: 'Indexes 0', hint: 'nums[0]', kind: 'codeIncludes', expect: '[0]' },
          ],
        },
        {
          id: 'p2',
          title: 'Array length',
          prompt: 'Print how many items are in nums (3).',
          difficulty: 2,
          starterCode: `${JAVA_HEAD}    int[] nums = {3, 6, 9};\n    // print length\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints 3', hint: 'println(nums.length)', kind: 'stdout', expect: '3' },
            { id: 't2', description: 'Uses .length', hint: 'nums.length', kind: 'codeIncludes', expect: '.length' },
          ],
        },
        {
          id: 'p3',
          title: 'Loop the array',
          prompt: 'Use an enhanced for loop to print each number in nums on its own line.',
          difficulty: 2,
          starterCode: `${JAVA_HEAD}    int[] nums = {3, 6, 9};\n    // enhanced for loop printing each\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints 3\\n6\\n9', hint: 'for (int n : nums) println(n)', kind: 'stdout', expect: '3\n6\n9' },
            { id: 't2', description: 'Uses for', hint: 'for (int n : nums)', kind: 'codeIncludes', expect: 'for ' },
          ],
        },
      ],
    },
    {
      id: 'java-ess-convert',
      title: 'Types & conversion',
      summary: 'Convert between int, double, String, and boolean when you need a different type.',
      runner: 'java',
      sections: [
        {
          heading: 'Declare the type',
          body: `Java wants the type up front: int n = 3; double x = 1.5; String s = "hi"; boolean ok = true; char c = 'A'; int[] nums = {1, 2, 3};\n\nEach type has rules about what operations are allowed.`,
        },
        {
          heading: 'Convert between types',
          body: `• Integer.parseInt("12") → 12 (digit text → integer)\n• Double.parseDouble("3.5") → 3.5\n• String.valueOf(12) or "" + 12 → "12" (number → text)\n\nArrays don't convert to numbers — access elements with nums[0] or loop.\n\nInteger.parseInt("12.5") fails — use parseDouble first for decimals.`,
        },
        {
          heading: 'Why convert?',
          body: `Input often arrives as Strings even when it looks like numbers. Convert before math. Convert numbers to strings when building messages with +.`,
        },
      ],
      examples: [
        {
          title: 'Convert for math and text',
          code: `${JAVA_HEAD}    String raw = "12";\n    int n = Integer.parseInt(raw);\n    System.out.println(n + 1);\n    System.out.println("n=" + n);\n${JAVA_TAIL}`,
          note: 'parseInt before math; + with String builds text.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Parse digits',
          prompt: 'Convert raw to an int, add 3, print the result (15).',
          difficulty: 2,
          starterCode: `${JAVA_HEAD}    String raw = "12";\n    // parse, add 3, println\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints 15', hint: 'Integer.parseInt(raw) + 3', kind: 'stdout', expect: '15' },
            { id: 't2', description: 'Uses parseInt', hint: 'Integer.parseInt', kind: 'codeIncludes', expect: 'parseInt' },
          ],
        },
        {
          id: 'p2',
          title: 'Stringify a number',
          prompt: 'Print score: 7 using + and String.valueOf (n is int 7).',
          difficulty: 2,
          starterCode: `${JAVA_HEAD}    int n = 7;\n    // println("score: " + ...)\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints score: 7', hint: 'println("score: " + String.valueOf(n))', kind: 'stdout', expect: 'score: 7' },
            { id: 't2', description: 'Uses valueOf or +', hint: 'String.valueOf(n) or "" + n', kind: 'codeMatches', expect: '(valueOf|\\+\\s*n)' },
          ],
        },
        {
          id: 'p3',
          title: 'Declare a boolean',
          prompt: 'Declare boolean ready = true; then print ready.',
          difficulty: 2,
          starterCode: `${JAVA_HEAD}    // boolean ready = true; then println\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'boolean ready = true; println(ready);', kind: 'stdout', expect: 'true' },
            { id: 't2', description: 'Declares boolean', hint: 'boolean ready', kind: 'codeIncludes', expect: 'boolean' },
          ],
        },
      ],
    },
  ],
}
