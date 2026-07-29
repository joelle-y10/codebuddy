import type { Module } from '../../types'

const JAVA_HEAD = `public class Main {\n  public static void main(String[] args) {\n`
const JAVA_TAIL = `  }\n}\n`

/** First module in every coding track: what values are, when to use them, what they can't be. */
export const javaEssentialsModule: Module = {
  id: 'java-essentials',
  title: 'Values & types',
  summary:
    'Start here: what a value is, the main data types, when to use each, and what each type can’t do.',
  lessons: [
    {
      id: 'java-ess-values',
      title: 'What is a value?',
      summary: 'Programs store and use values. Every value has a type that decides what you can do with it.',
      runner: 'java',
      sections: [
        {
          heading: 'Values are the data your program works with',
          body: `A value is a single piece of information: the number 7, the text "Ada", the yes/no answer true, or an array of scores {10, 20, 30}.\n\nYou put values in variables (String name = "Ada";), pass them to methods (System.out.println(name);), and combine them (score + 1).`,
        },
        {
          heading: 'Type = the rules for that value',
          body: `The type answers: what kind of value is this, and what operations are allowed?\n\n• int — whole numbers (count, index, score)\n• double — decimals (measurements, averages)\n• String — text (names, messages)\n• boolean — true or false only (decisions)\n• int[] — ordered collection of ints (many scores)\n\nJava requires you to declare the type: int count = 3;`,
        },
        {
          heading: 'Wrong type = wrong result or an error',
          body: `"3" + "4" is "34" (text join). 3 + 4 is 7 (math). Mixing types without converting fails: "level " + 3 works (Java converts 3 to "3"), but you can't do "3" - 1 without parseInt.\n\nRule of thumb: decide the type first, then write the code.`,
        },
      ],
      examples: [
        {
          title: 'Four core values',
          code: `${JAVA_HEAD}    int count = 3;\n    String name = "Ada";\n    boolean ready = true;\n    int[] scores = {10, 20};\n    System.out.println(count);\n    System.out.println(name);\n    System.out.println(ready);\n    System.out.println(scores.length);\n${JAVA_TAIL}`,
          note: 'Arrays use .length (not a method call).',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Store each kind',
          prompt: 'Create int n = 5, String label = "hi", boolean ok = false, then print each on its own line (in that order).',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // n, label, ok — then println each\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints 5, hi, false', hint: 'println(n); println(label); println(ok);', kind: 'stdout', expect: '5\nhi\nfalse' },
            { id: 't2', description: 'Uses false boolean', hint: 'ok = false (no quotes)', kind: 'codeMatches', expect: '\\bfalse\\b' },
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
      id: 'java-ess-output',
      title: 'Kinds of output',
      summary: 'What System.out shows for text, numbers, and booleans.',
      runner: 'java',
      sections: [
        {
          heading: 'println turns values into text',
          body: `System.out.println(value) converts a value to characters and prints a line.\n\nprintln(42) and println("42") both look like 42 — one is an int, one is a String. Types still matter for math and method calls.`,
        },
        {
          heading: 'How common types print',
          body: `• String → characters (no quotes in the console)\n• int / double → digits\n• boolean → true or false (lowercase)\n• char → a single character\n• Arrays print like [I@... (reference) — print elements individually or use Arrays.toString later\n\nprint(...) writes without a newline; println(...) adds one.`,
        },
      ],
      examples: [
        {
          title: 'Same look, different types',
          code: `${JAVA_HEAD}    System.out.println(42);\n    System.out.println("42");\n    System.out.println(true);\n    System.out.println("true");\n${JAVA_TAIL}`,
          note: 'Booleans print lowercase true/false.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Number then word',
          prompt: 'Print 7, then seven on the next line.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // number 7, then the word seven\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Two-line output', hint: 'println(7); println("seven");', kind: 'stdout', expect: '7\nseven' },
          ],
        },
        {
          id: 'p2',
          title: 'Boolean vs string',
          prompt: 'Print boolean false, then string false on the next line.',
          difficulty: 2,
          starterCode: `${JAVA_HEAD}    // boolean false, then "false"\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'false then false', hint: 'println(false); println("false");', kind: 'stdout', expect: 'false\nfalse' },
            { id: 't2', description: 'Uses boolean false', hint: 'println(false)', kind: 'codeMatches', expect: 'println\\(\\s*false\\s*\\)' },
            { id: 't3', description: 'Uses string false', hint: 'println("false")', kind: 'codeIncludes', expect: '"false"' },
          ],
        },
      ],
    },
    {
      id: 'java-ess-numbers',
      title: 'Numbers (int & double)',
      summary: 'Whole numbers and decimals — when to use each, and what they can't do.',
      runner: 'java',
      sections: [
        {
          heading: 'Define: int and double',
          body: `An int is a whole number with no fractional part: 0, 42, -3. A double holds decimals: 3.14, 2.0.\n\nUse ints for counts, indexes, and scores that must stay whole. Use doubles for measurements, averages, and anything that can be "in between."`,
        },
        {
          heading: 'When to use them',
          body: `• Counting loops, array indexes, "how many?" → int\n• Division that should keep a fraction → use a double: 9 / 2.0 is 4.5\n• Money/grades you display with decimals → double\n\nWatch integer division: 7 / 2 is 3 when both sides are ints. % gives remainder: 17 % 5 is 2.`,
        },
        {
          heading: 'What numbers can't be / common mistakes',
          body: `• An int is not text — you can't do math on a String of digits without parseInt.\n• Integer division truncates: 7 / 2 is 3, not 3.5 — mix in 2.0 when you need decimals.\n• Don't use a String of digits as if it were a number: "10" + "1" is "101", not 11.\n• Don't use a double as an array index (indexes must be ints).`,
        },
      ],
      examples: [
        {
          title: 'Integer vs decimal division',
          code: `${JAVA_HEAD}    System.out.println(7 / 2);\n    System.out.println(7 / 2.0);\n    System.out.println(17 % 5);\n${JAVA_TAIL}`,
          note: 'Mix in a .0 when you want a decimal result.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Remainder',
          prompt: 'Print 17 % 5 (2).',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // 17 % 5\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints 2', hint: 'println(17 % 5)', kind: 'stdout', expect: '2' },
            { id: 't2', description: 'Uses %', hint: '% operator', kind: 'codeIncludes', expect: '%' },
          ],
        },
        {
          id: 'p2',
          title: 'Decimal division',
          prompt: 'Print 9 / 2.0 (4.5).',
          difficulty: 2,
          starterCode: `${JAVA_HEAD}    // 9 / 2.0\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints 4.5', hint: 'println(9 / 2.0)', kind: 'stdoutIncludes', expect: '4.5' },
            { id: 't2', description: 'Uses 2.0', hint: 'Use 2.0 not 2', kind: 'codeIncludes', expect: '2.0' },
          ],
        },
      ],
    },
    {
      id: 'java-ess-strings',
      title: 'Strings (text)',
      summary: 'Define text values — when to use them, and what you can't do with them.',
      runner: 'java',
      sections: [
        {
          heading: 'Define: String',
          body: `A String holds text in double quotes: "Ada". Single quotes are for char: 'A'.\n\nEmpty string "".length() is 0. "code".length() is 4. charAt(0) gets the first character.`,
        },
        {
          heading: 'When to use strings',
          body: `• Names, messages, file paths, labels on screen\n• Anything the user reads as text\n• Digits that are identifiers, not math (zip codes, phone numbers) — keep them as strings\n\nConcatenate with +: "Hi " + "Ada". For formatted output, you'll meet printf later.`,
        },
        {
          heading: 'What strings can't do',
          body: `• You can't do "3" - 1 without Integer.parseInt("3") first.\n• For String content, use .equals("Ada"), not ==. == on Strings compares references and often surprises beginners.\n• Strings are immutable — you build new strings instead of changing characters in place.\n• A String is not an int[] — different types, different operations.`,
        },
      ],
      examples: [
        {
          title: 'Length and join',
          code: `${JAVA_HEAD}    String word = "code";\n    System.out.println(word.length());\n    System.out.println(word + "buddy");\n${JAVA_TAIL}`,
          note: 'length() is a method on String.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Join a greeting',
          prompt: 'Print Hello Ada using greeting and name.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    String greeting = "Hello";\n    String name = "Ada";\n    // Print Hello Ada\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints Hello Ada', hint: 'println(greeting + " " + name)', kind: 'stdout', expect: 'Hello Ada' },
          ],
        },
        {
          id: 'p2',
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
      summary: 'Yes/no values — define them, when to use them, what they can't be.',
      runner: 'java',
      sections: [
        {
          heading: 'Define: boolean',
          body: `A boolean is only true or false (lowercase in Java). Nothing else is a boolean — not "true", not 1, not "yes".\n\nComparisons produce booleans: score >= 60. Store them: boolean ready = true;`,
        },
        {
          heading: 'When to use booleans',
          body: `• Flags: gameOver, isLoggedIn, ready\n• Conditions in if / while\n• Results of checks: score >= 60, name.equals("Ada")\n\nCombine with && / || / !: age >= 13 && age <= 19.`,
        },
        {
          heading: 'What booleans aren't',
          body: `"true" (with quotes) is a String, not a boolean.\n\nUse == for ints and booleans. Use .equals for String text.\n\nDon't use = when you mean ==. = assigns; == compares.`,
        },
      ],
      examples: [
        {
          title: 'Comparisons and logic',
          code: `${JAVA_HEAD}    int score = 85;\n    boolean ready = true;\n    System.out.println(score >= 60);\n    System.out.println(ready && score >= 60);\n${JAVA_TAIL}`,
          note: 'Conditions evaluate to boolean.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print true',
          prompt: 'Print the boolean true.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // println(true)\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'println(true)', kind: 'stdout', expect: 'true' },
            { id: 't2', description: 'Uses true', hint: 'true without quotes', kind: 'codeMatches', expect: '\\btrue\\b' },
          ],
        },
        {
          id: 'p2',
          title: 'Compare with >=',
          prompt: 'Print whether score >= 60.',
          difficulty: 2,
          starterCode: `${JAVA_HEAD}    int score = 85;\n    // print comparison\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'println(score >= 60)', kind: 'stdout', expect: 'true' },
            { id: 't2', description: 'Uses >=', hint: 'score >= 60', kind: 'codeIncludes', expect: '>=' },
          ],
        },
        {
          id: 'p3',
          title: 'Use &&',
          prompt: 'Print ready && score >= 60.',
          difficulty: 3,
          starterCode: `${JAVA_HEAD}    boolean ready = true;\n    int score = 85;\n    // print ready && score >= 60\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'println(ready && score >= 60)', kind: 'stdout', expect: 'true' },
            { id: 't2', description: 'Uses &&', hint: '&&', kind: 'codeIncludes', expect: '&&' },
          ],
        },
      ],
    },
    {
      id: 'java-ess-arrays',
      title: 'Arrays (collections)',
      summary: 'Ordered collections of values — define, when to use, what they can't be.',
      runner: 'java',
      sections: [
        {
          heading: 'Define: array',
          body: `An array is an ordered collection of values: int[] nums = {3, 6, 9};\n\nIndexes start at 0: nums[0] is 3. nums.length is 3 (a field, not a method). Arrays have a fixed size once created.`,
        },
        {
          heading: 'When to use arrays',
          body: `• Many related values of the same kind (names, scores, prices)\n• When you'll loop through every item\n• When you know the size upfront\n\nfor (int n : nums) visits each element (enhanced for). Use nums[i] when you need the index.`,
        },
        {
          heading: 'What arrays aren't / can't do',
          body: `• An array is not a String — different types, different operations.\n• Index out of range: nums[3] on a length-3 array throws ArrayIndexOutOfBoundsException.\n• Don't confuse the array with one element inside it — println(nums) vs println(nums[0]).\n• A single int is not an array: 5 has no [0].`,
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
      summary: 'Declare types and convert with parseInt / parseDouble — including arrays.',
      runner: 'java',
      sections: [
        {
          heading: 'Declare the type',
          body: `Java wants the type up front: int n = 3; double x = 1.5; String s = "hi"; boolean ok = true; char c = 'A'; int[] nums = {1, 2, 3};\n\nEach type has rules about what operations are allowed.`,
        },
        {
          heading: 'Convert between types',
          body: `• Integer.parseInt("12") → 12 (for math on digit strings)\n• Double.parseDouble("3.5") → 3.5\n• String.valueOf(12) or "" + 12 → "12" (for building text)\n\nArrays don't convert to numbers — access elements with nums[0] or loop.`,
        },
        {
          heading: 'Why convert?',
          body: `Input and some APIs give you Strings even when the content looks like numbers. Convert before doing math. Convert numbers to strings when building messages with +.\n\nint("12.5") fails — use parseDouble first if you need decimals.`,
        },
      ],
      examples: [
        {
          title: 'Parse and stringify',
          code: `${JAVA_HEAD}    String raw = "12";\n    int n = Integer.parseInt(raw);\n    System.out.println(n + 1);\n    System.out.println("n=" + n);\n${JAVA_TAIL}`,
          note: 'parseInt before math; + with String builds text.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'ParseInt',
          prompt: 'Parse raw, add 3, print 15.',
          difficulty: 2,
          starterCode: `${JAVA_HEAD}    String raw = "12";\n    // parse, add 3, println\n${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints 15', hint: 'Integer.parseInt(raw) + 3', kind: 'stdout', expect: '15' },
            { id: 't2', description: 'Uses parseInt', hint: 'Integer.parseInt', kind: 'codeIncludes', expect: 'parseInt' },
          ],
        },
        {
          id: 'p2',
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
