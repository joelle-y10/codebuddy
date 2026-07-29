import type { Module } from '../../types'

const JAVA_HEAD = `public class Main {\n  public static void main(String[] args) {\n`
const JAVA_TAIL = `  }\n}\n`

export const javaEssentialsModule: Module = {
  id: 'java-essentials',
  title: 'Data essentials',
  summary: 'Strings, numbers, booleans, and how println shows each type.',
  lessons: [
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
          body: `• String → characters (no quotes in the console)\n• int / double → digits\n• boolean → true or false (lowercase)\n• char → a single character\n\nprint(...) writes without a newline; println(...) adds one.`,
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
      id: 'java-ess-strings',
      title: 'Strings (text)',
      summary: 'String values, length, and concatenation.',
      runner: 'java',
      sections: [
        {
          heading: 'String is text',
          body: `String holds text in double quotes: "Ada". Single quotes are for char: 'A'.\n\n"".length() is 0. "code".length() is 4. Concatenate with +: "Hi " + "Ada".`,
        },
        {
          heading: 'Compare carefully',
          body: `For String content, use .equals("Ada"), not ==. == on Strings compares references and often surprises beginners.`,
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
      id: 'java-ess-numbers',
      title: 'Numbers (int & double)',
      summary: 'Whole numbers, decimals, and arithmetic.',
      runner: 'java',
      sections: [
        {
          heading: 'int vs double',
          body: `int is a whole number. double holds decimals.\n\nWatch integer division: 7 / 2 is 3 when both sides are ints. 7 / 2.0 is 3.5 because a double is involved.`,
        },
        {
          heading: 'Operators',
          body: `+ - * / and % (remainder). 17 % 5 is 2. Parentheses change order.`,
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
      id: 'java-ess-booleans',
      title: 'Booleans (true / false)',
      summary: 'boolean type, comparisons, and && / || / !.',
      runner: 'java',
      sections: [
        {
          heading: 'boolean type',
          body: `boolean ready = true; stores a yes/no value. Comparisons produce booleans: score >= 60.\n\nPrint them with println — you’ll see true or false.`,
        },
        {
          heading: 'Logic operators',
          body: `• && and — both must be true\n• || or — at least one true\n• ! not — flips the value\n\nUse == for ints/booleans. Use .equals for String text.`,
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
      id: 'java-ess-convert',
      title: 'Types & conversion',
      summary: 'Declare types and convert with Integer.parseInt / Double.parseDouble.',
      runner: 'java',
      sections: [
        {
          heading: 'Declare the type',
          body: `Java wants the type up front: int n = 3; double x = 1.5; String s = "hi"; boolean ok = true; char c = 'A';`,
        },
        {
          heading: 'Convert text to numbers',
          body: `Integer.parseInt("12") → 12. Double.parseDouble("3.5") → 3.5.\n\nTo go the other way: String.valueOf(12) or "" + 12.`,
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
