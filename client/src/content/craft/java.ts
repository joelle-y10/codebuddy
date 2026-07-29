import type { Module } from '../../types'

export const javaCraftModule: Module = {
  id: 'java-craft',
  title: 'Coding craft & symbols',
  summary: 'Semicolons, operators, and combining text with variables in println.',
  lessons: [
    {
      id: 'java-craft-semicolons',
      title: 'Every statement ends with ;',
      summary: 'Java requires semicolons after statements.',
      runner: 'java',
      sections: [
        {
          heading: 'Required ;',
          body: `Java statements end with a semicolon:\n\nint score = 10;\nSystem.out.println(score);\n\nDo not put ; after class or method headers: public static void main(String[] args) {`,
        },
        {
          heading: 'Etiquette',
          body: `• In CodeBuddy keep public class Main.\n• Entry point: public static void main(String[] args).\n• Indent inside { }.\n• Class names start with UpperCamelCase; variables with lowerCamelCase.`,
        },
      ],
      examples: [
        {
          title: 'Correct main',
          code: `public class Main {\n  public static void main(String[] args) {\n    System.out.println("hi");\n  }\n}`,
          note: 'Semicolon after println.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print ok',
          prompt: 'Print ok with System.out.println and a semicolon.',
          difficulty: 1,
          starterCode: `public class Main {\n  public static void main(String[] args) {\n    // print ok\n  }\n}\n`,
          tests: [
            { id: 't1', description: 'Prints ok', hint: 'System.out.println("ok");', kind: 'stdout', expect: 'ok' },
          ],
        },
      ],
    },
    {
      id: 'java-craft-operators',
      title: 'What coding signs mean',
      summary: '= vs ==, >=, and math in Java.',
      runner: 'java',
      sections: [
        {
          heading: '= assigns; == compares',
          body: `For primitives (int, double, boolean, char), == compares values.\n\nFor String content, beginners should use .equals: name.equals("Ada"). Using == on String compares references, which is a common trap.\n\nint score = 85; assigns. if (score == 85) compares.`,
        },
        {
          heading: 'Comparisons & math',
          body: `!= < > <= >= work on numbers as usual. >= means “at least.”\n+ - * / % for arithmetic. Integer division truncates toward zero: 7/2 is 3.`,
        },
      ],
      examples: [
        {
          title: '>= and String equals',
          code: `public class Main {\n  public static void main(String[] args) {\n    int score = 85;\n    String color = "green";\n    if (score >= 60) System.out.println("pass");\n    if (color.equals("green")) System.out.println("go");\n  }\n}`,
          note: 'Use .equals for String content.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Use >=',
          prompt: 'score = 85; if score >= 60 print pass.',
          difficulty: 1,
          starterCode: `public class Main {\n  public static void main(String[] args) {\n    int score = 85;\n  }\n}\n`,
          tests: [
            { id: 't1', description: 'Prints pass', hint: 'if (score >= 60) System.out.println("pass");', kind: 'stdout', expect: 'pass' },
            { id: 't2', description: 'Uses >=', hint: '>=', kind: 'codeIncludes', expect: '>=' },
          ],
        },
        {
          id: 'p2',
          title: 'String equals',
          prompt: 'color = "green"; if color equals green print go.',
          difficulty: 2,
          starterCode: `public class Main {\n  public static void main(String[] args) {\n    String color = "green";\n  }\n}\n`,
          tests: [
            { id: 't1', description: 'Prints go', hint: 'color.equals("green")', kind: 'stdout', expect: 'go' },
            { id: 't2', description: 'Uses equals', hint: '.equals(', kind: 'codeIncludes', expect: '.equals(' },
          ],
        },
      ],
    },
    {
      id: 'java-craft-combine',
      title: 'Combining text and variables',
      summary: 'Use + to build one println message.',
      runner: 'java',
      sections: [
        {
          heading: 'String + value',
          body: `System.out.println("score " + score);\n\nIf the left side is a String, Java converts the right side to text and joins them. This is the usual beginner way to mix labels and variables on one line.`,
        },
      ],
      examples: [
        {
          title: 'Join',
          code: `public class Main {\n  public static void main(String[] args) {\n    int score = 12;\n    System.out.println("score " + score);\n  }\n}`,
          note: 'Outputs: score 12',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Print Java level 1',
          prompt: 'Using language and level variables, print Java level 1 with +.',
          difficulty: 1,
          starterCode: `public class Main {\n  public static void main(String[] args) {\n    String language = "Java";\n    int level = 1;\n  }\n}\n`,
          tests: [
            { id: 't1', description: 'Prints Java level 1', hint: 'println(language + " level " + level)', kind: 'stdoutIncludes', expect: 'Java level 1' },
            { id: 't2', description: 'Uses +', hint: 'String concatenation with +', kind: 'codeIncludes', expect: '+' },
          ],
        },
      ],
    },
  ],
}
