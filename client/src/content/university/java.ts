import type { LanguageTrack } from '../../types'

export const javaUniversity: LanguageTrack = {
  id: 'java',
  name: 'Java',
  tagline: 'Objects, collections, and inheritance.',
  accent: '#ff7a59',
  tier: 'university',
  modules: [
    {
      id: 'java-u-objects',
      title: 'Objects & collections',
      summary: 'Instance state and growable lists.',
      lessons: [
        {
          id: 'java-u-class',
          title: 'Instance classes',
          summary: 'Fields, constructors, methods.',
          runner: 'java',
          sections: [
            {
              heading: 'Instance state',
              body: `Instance methods use object state. Constructors initialize new objects with new.\n\nIn CodeBuddy we nest a static class inside Main so everything stays in one file while you still practice real OOP shapes.`,
            },
            {
              heading: 'Constructors',
              body: `Counter(int start) { value = start; } runs when you write new Counter(2). Methods like add update fields on that instance.`,
            },
          ],
          examples: [
            {
              title: 'Counter',
              code: `public class Main {\n  static class Counter {\n    int value;\n    Counter(int start) { value = start; }\n    void add(int n) { value += n; }\n  }\n  public static void main(String[] args) {\n    Counter c = new Counter(2);\n    c.add(3);\n    System.out.println(c.value);\n  }\n}`,
              note: 'Nested static class keeps the demo in one file.',
            },
            {
              title: 'Box area',
              code: `public class Main {\n  static class Box {\n    int width, height;\n    Box(int w, int h) { width = w; height = h; }\n    int area() { return width * height; }\n  }\n  public static void main(String[] args) {\n    System.out.println(new Box(3, 4).area());\n  }\n}`,
              note: 'new Box(...) then call area().',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Box area',
              prompt: 'static class Box with width, height, constructor, and int area(). Print area of 4x6 Box.',
              difficulty: 1,
              starterCode: `public class Main {\n  // static class Box with width, height, constructor, and int area()\n  public static void main(String[] args) {\n    // Print area of 4x6 Box\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 24', hint: 'new Box(4,6).area()', kind: 'stdout', expect: '24' },
                { id: 't2', description: 'Defines Box', hint: 'class Box', kind: 'codeIncludes', expect: 'class Box' },
              ],
            },
            {
              id: 'p2',
              title: 'Counter',
              prompt: 'Counter starting at 1, add(4), print value (5).',
              difficulty: 2,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 5', hint: 'new Counter(1); c.add(4)', kind: 'stdout', expect: '5' },
                { id: 't2', description: 'Defines Counter', hint: 'class Counter', kind: 'codeIncludes', expect: 'class Counter' },
              ],
            },
          ],
        },
        {
          id: 'java-u-list',
          title: 'ArrayList',
          summary: 'Growable lists from java.util.',
          runner: 'java',
          sections: [
            {
              heading: 'Why ArrayList?',
              body: `ArrayList<T> resizes as you add. Use Integer, not int, as the type parameter. Loop with enhanced for.`,
            },
            {
              heading: 'Common ops',
              body: `add appends. size() counts. get(i) reads by index. Prefer the enhanced for when you only need values.`,
            },
          ],
          examples: [
            {
              title: 'Add and print',
              code: `import java.util.ArrayList;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Integer> nums = new ArrayList<>();\n    nums.add(2);\n    nums.add(4);\n    for (int n : nums) System.out.println(n);\n  }\n}`,
              note: 'Use Integer, not int, as the type parameter.',
            },
            {
              title: 'Strings',
              code: `import java.util.ArrayList;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> langs = new ArrayList<>();\n    langs.add("Java");\n    langs.add("University");\n    for (String s : langs) System.out.println(s);\n  }\n}`,
              note: 'Same pattern for any object type.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Two languages',
              prompt: 'Add Java and University, print each on its own line.',
              difficulty: 1,
              starterCode: `import java.util.ArrayList;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> langs = new ArrayList<>();\n    // add Java and University, print each on its own line\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints Java then University', hint: 'langs.add("Java"); langs.add("University");', kind: 'stdout', expect: 'Java\nUniversity' },
                { id: 't2', description: 'Uses ArrayList', hint: 'ArrayList<String>', kind: 'codeIncludes', expect: 'ArrayList' },
              ],
            },
            {
              id: 'p2',
              title: 'Three ints',
              prompt: 'ArrayList of Integers: add 1, 2, 3 and print each on its own line.',
              difficulty: 2,
              starterCode: `import java.util.ArrayList;\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<Integer> nums = new ArrayList<>();\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints 1\\n2\\n3', hint: 'add then enhanced for', kind: 'stdout', expect: '1\n2\n3' },
                { id: 't2', description: 'Uses ArrayList', hint: 'ArrayList', kind: 'codeIncludes', expect: 'ArrayList' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'java-u-types',
      title: 'Inheritance & interfaces',
      summary: 'Share behavior through extends and implements.',
      lessons: [
        {
          id: 'java-u-inherit',
          title: 'Inheritance',
          summary: 'Extend a base class.',
          runner: 'java',
          sections: [
            {
              heading: 'extends',
              body: `extends creates a subclass. @Override marks replaced methods. super reaches the parent constructor or method.`,
            },
            {
              heading: 'Substitution',
              body: `Subclass instances are usable as the parent type too — that’s polymorphism at work.`,
            },
          ],
          examples: [
            {
              title: 'Dog speaks',
              code: `public class Main {\n  static class Animal {\n    String speak() { return "..." ; }\n  }\n  static class Dog extends Animal {\n    @Override String speak() { return "woof"; }\n  }\n  public static void main(String[] args) {\n    System.out.println(new Dog().speak());\n  }\n}`,
              note: 'Subclass instances are usable as the parent type too.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'LoudGreeter',
              prompt: 'Subclass LoudGreeter that overrides hello to return HELLO. Print new LoudGreeter().hello().',
              difficulty: 1,
              starterCode: `public class Main {\n  static class Greeter {\n    String hello() { return "hi"; }\n  }\n  // Subclass LoudGreeter that overrides hello to return HELLO\n  public static void main(String[] args) {\n    // Print new LoudGreeter().hello()\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints HELLO', hint: 'class LoudGreeter extends Greeter', kind: 'stdout', expect: 'HELLO' },
                { id: 't2', description: 'Uses extends', hint: 'extends Greeter', kind: 'codeIncludes', expect: 'extends' },
              ],
            },
            {
              id: 'p2',
              title: 'Cat speak',
              prompt: 'Animal with speak returning ..., Cat extends Animal returning meow. Print new Cat().speak().',
              difficulty: 2,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints meow', hint: 'class Cat extends Animal', kind: 'stdout', expect: 'meow' },
                { id: 't2', description: 'Uses extends', hint: 'extends', kind: 'codeIncludes', expect: 'extends' },
              ],
            },
          ],
        },
        {
          id: 'java-u-interface',
          title: 'Interfaces',
          summary: 'Contracts classes implement.',
          runner: 'java',
          sections: [
            {
              heading: 'interface as contract',
              body: `An interface lists methods. Classes implement it and provide bodies. Interface methods are public when implemented.`,
            },
            {
              heading: 'Programming to the interface',
              body: `Named n = new City(); lets you depend on the contract, not the concrete class — useful as systems grow.`,
            },
          ],
          examples: [
            {
              title: 'Named city',
              code: `public class Main {\n  interface Named { String name(); }\n  static class City implements Named {\n    public String name() { return "Oslo"; }\n  }\n  public static void main(String[] args) {\n    Named n = new City();\n    System.out.println(n.name());\n  }\n}`,
              note: 'Interface methods are public when implemented.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Siren',
              prompt: 'class Siren implements Shout returning CODEBUDDY. Print new Siren().yell().',
              difficulty: 1,
              starterCode: `public class Main {\n  interface Shout { String yell(); }\n  // class Siren implements Shout returning CODEBUDDY\n  public static void main(String[] args) {\n    // Print new Siren().yell()\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints CODEBUDDY', hint: 'class Siren implements Shout', kind: 'stdout', expect: 'CODEBUDDY' },
                { id: 't2', description: 'Implements interface', hint: 'implements Shout', kind: 'codeIncludes', expect: 'implements' },
              ],
            },
            {
              id: 'p2',
              title: 'Labeled',
              prompt: 'interface Labeled { String label(); } and class Tag implementing it returning uni. Print new Tag().label().',
              difficulty: 2,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints uni', hint: 'implements Labeled', kind: 'stdout', expect: 'uni' },
                { id: 't2', description: 'Uses implements', hint: 'implements', kind: 'codeIncludes', expect: 'implements' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'java-u-projects',
      title: 'Assignments',
      summary: 'Build a grocery inventory with classes and an ArrayList cart.',
      lessons: [
        {
          id: 'java-u-grocery',
          title: 'Grocery inventory',
          summary: 'Store items and print a checkout total.',
          runner: 'java',
          sections: [
            {
              heading: 'Assignment brief',
              body: `Build a tiny grocery checkout in Java.

Print:
milk: 3
bread: 2
eggs: 4
total: 9

You can use parallel arrays, a Map, or simple variables — but the printed receipt must match exactly.`,
            },
          ],
          examples: [
            {
              title: 'Receipt sketch',
              code: `public class Main {
  public static void main(String[] args) {
    String[] items = {"milk", "bread", "eggs"};
    int[] prices = {3, 2, 4};
    int total = 0;
    for (int i = 0; i < items.length; i++) {
      System.out.println(items[i] + ": " + prices[i]);
      total += prices[i];
    }
    System.out.println("total: " + total);
  }
}`,
              note: 'Parallel arrays keep names and prices aligned.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Print three items',
              prompt: 'Print milk, bread, and eggs each on its own line.',
              difficulty: 2,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    // print milk, bread, eggs\n  }\n}\n`,
              tests: [
                { id: 't1', description: 'Prints three items', hint: 'System.out.println for each', kind: 'stdout', expect: 'milk\nbread\neggs' },
              ],
            },
            {
              id: 'p2',
              title: 'Full checkout',
              prompt: 'Print milk: 3, bread: 2, eggs: 4, then total: 9.',
              difficulty: 3,
              starterCode: `public class Main {\n  public static void main(String[] args) {\n    // Assignment: grocery receipt ending with total: 9\n  }\n}\n`,
              tests: [
                {
                  id: 't1',
                  description: 'Full receipt',
                  hint: 'Loop items and prices, then print total',
                  kind: 'stdout',
                  expect: 'milk: 3\nbread: 2\neggs: 4\ntotal: 9',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
