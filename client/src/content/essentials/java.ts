import type { Module } from '../../types'

const JAVA_HEAD = `public class Main {\n  public static void main(String[] args) {\n`
const JAVA_TAIL = `  }\n}\n`

/** First module: detailed definitions of values, variables, and types. */
export const javaEssentialsModule: Module = {
  id: 'java-essentials',
  title: 'Values, variables & types',
  summary:
    'Learn what values and variables are, then study each type in detail: numbers, strings, booleans, missing values, and arrays.',
  lessons: [
    {
      id: 'java-ess-values',
      title: 'What is a value?',
      summary: 'A value is a piece of data. Every value has a type that says what kind of data it is.',
      runner: 'java',
      sections: [
        {
          heading: 'Definition: value',
          body: `A value is one piece of information your program can work with.

Examples of values:
• 7
• 3.14
• "hello"
• true
• null

Values are the actual data. Later you will store them in variables so you can reuse them by name.`,
        },
        {
          heading: 'Definition: type',
          body: `Every value has a type. The type tells you what kind of information it is and what you can do with it.

Here are the main types you need first:

• A number can be an integer (whole number) or a double (decimal). Examples: 0, 7, -3, 3.14, 2.0
• A String is a string of letters (and other characters) written in quotes. Examples: "Ada", "hi", "42"
• A boolean is a true/false statement. In Java the only boolean values are true and false (lowercase)
• A missing value means “there is no value here yet.” For object references (like String), that value is null
• An array is an ordered collection of values. Example: int[] nums = {3, 6, 9}

The type matters. You can add 3 + 4, but you cannot add 3 + "hello" without converting first.`,
        },
        {
          heading: 'Why types matter',
          body: `Programs treat different types differently:

• Numbers are for counting, measuring, and math
• Strings are for names, messages, and any text
• Booleans are for yes/no decisions (later used in if statements)
• null is for “empty / unknown / not set” on objects
• Arrays are for several related values together

In Java you also declare the type when you make a variable: int age = 12. In the next lessons you will learn each type carefully, and also learn variables — names that hold values.`,
        },
      ],
      examples: [
        {
          title: 'Different kinds of values',
          code: `${JAVA_HEAD}    System.out.println(7);        // number (integer)
    System.out.println(3.5);      // number (double / decimal)
    System.out.println("Ada");    // String
    System.out.println(true);     // boolean
${JAVA_TAIL}`,
          note: 'Each line is a different type of value.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'A number value',
          prompt: 'Print the number 10.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // Print the number 10
${JAVA_TAIL}`,
          tests: [{ id: 't1', description: 'Prints 10', hint: 'System.out.println(10)', kind: 'stdout', expect: '10' }],
        },
        {
          id: 'p2',
          title: 'A string value',
          prompt: 'Print the string hi (use quotes).',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // Print "hi"
${JAVA_TAIL}`,
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
      summary: 'A variable is a name that stores a value so you can use it later. In Java you must declare the type.',
      runner: 'java',
      sections: [
        {
          heading: 'Definition: variable',
          body: `A variable is a named box that holds a value.

In Java you create a variable by writing the type, then the name, then = (called assignment):

int age = 12;
String name = "Ada";
boolean ready = true;

Read it as: “the variable age now holds the value 12.”

• The type comes first (int, String, boolean)
• The name is next (age, name, ready)
• The value is on the right (12, "Ada", true)
• = means “store this value in that name”
• = is not the same as ==. == asks “are these two things equal?”`,
        },
        {
          heading: 'Using and changing a variable',
          body: `After you store a value, use the variable’s name to get the value back:

int score = 10;
System.out.println(score);   → prints 10

You can replace the value later (same type — you do not rewrite the type):

int score = 10;
score = 11;
System.out.println(score);   → prints 11

The variable still has the same name. Only the value inside changed.`,
        },
        {
          heading: 'Rules for variable names',
          body: `• Use clear names: age, score, playerName
• Names cannot start with a digit (1score is illegal)
• Names cannot contain spaces (player name is illegal)
• Use camelCase for multi-word names: playerName
• Prefer readable names over short ones like x or s (unless x really means a position)

A variable can hold a value of its declared type: an int, a double, a String, a boolean, and so on.`,
        },
      ],
      examples: [
        {
          title: 'Store different types in variables',
          code: `${JAVA_HEAD}    int age = 15;
    String name = "Ada";
    boolean ready = true;
    String nickname = null;
    System.out.println(age);
    System.out.println(name);
    System.out.println(ready);
    System.out.println(nickname);
${JAVA_TAIL}`,
          note: 'Each variable holds one value of a specific type. Types are declared up front.',
        },
        {
          title: 'Change a variable',
          code: `${JAVA_HEAD}    int score = 0;
    score = 5;
    System.out.println(score);
${JAVA_TAIL}`,
          note: 'The last assignment is the value that remains.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Make a number variable',
          prompt: 'Make a variable called age set to 12. Then print age.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // int age = 12
    // print age
${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints 12', hint: 'int age = 12 then System.out.println(age)', kind: 'stdout', expect: '12' },
            { id: 't2', description: 'Uses age', hint: 'age = ...', kind: 'codeMatches', expect: '\\bage\\s*=' },
          ],
        },
        {
          id: 'p2',
          title: 'Make a string variable',
          prompt: 'Make a variable called name set to Ada. Then print name.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // String name = "Ada"
    // print name
${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints Ada', hint: 'String name = "Ada" then System.out.println(name)', kind: 'stdout', expect: 'Ada' },
            { id: 't2', description: 'Uses name', hint: 'name = "Ada"', kind: 'codeMatches', expect: '\\bname\\s*=' },
          ],
        },
        {
          id: 'p3',
          title: 'Change a variable',
          prompt: 'Set score to 0, then set score to 7, then print score.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // int score = 0
    // score = 7
    // print score
${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints 7', hint: 'Assign 7 last, then System.out.println(score)', kind: 'stdout', expect: '7' },
            { id: 't2', description: 'Uses score', hint: 'score = ...', kind: 'codeMatches', expect: '\\bscore\\s*=' },
          ],
        },
      ],
    },
    {
      id: 'java-ess-numbers',
      title: 'Numbers (integers & decimals)',
      summary: 'A number can be an integer (whole) or a double (decimal). Both are numeric values.',
      runner: 'java',
      sections: [
        {
          heading: 'Definition: number',
          body: `A number is a numeric value you can use in math.

In Java, numbers come in two common forms:

• Integer (int) — a whole number with no decimal point
  Examples: 0, 1, 42, -3
• Double — a number that can have a decimal (fractional) part
  Examples: 3.14, 2.0, -0.5, 0.25

So: a number can have decimals and integers. Integers are whole; doubles can include a decimal point.`,
        },
        {
          heading: 'When to use each',
          body: `• Counting people, lives, or items → usually an int
  int lives = 3;
• Money, height, averages, measurements → usually a double
  double price = 2.5;
  double height = 1.75;

Both are numbers. The difference is whether you need whole values only, or values with decimal places.`,
        },
        {
          heading: 'What numbers are not',
          body: `• "7" in quotes is a String of characters, not a number
• true and false are booleans, not numbers
• null is missing — it is not zero (and int cannot be null)

You can store numbers in variables:

int count = 7;
double price = 3.5;`,
        },
      ],
      examples: [
        {
          title: 'Integer and double variables',
          code: `${JAVA_HEAD}    int count = 7;
    double price = 3.5;
    System.out.println(count);
    System.out.println(price);
    System.out.println(count + 1);
    System.out.println(price * 2);
${JAVA_TAIL}`,
          note: '7 is an integer. 3.5 is a double. Both are numbers.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'An integer variable',
          prompt: 'Make a variable called lives set to 3. Print lives.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // int lives = 3
    // print lives
${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints 3', hint: 'int lives = 3 then System.out.println(lives)', kind: 'stdout', expect: '3' },
            { id: 't2', description: 'Uses lives', hint: 'lives = 3', kind: 'codeMatches', expect: '\\blives\\s*=' },
          ],
        },
        {
          id: 'p2',
          title: 'A decimal variable',
          prompt: 'Make a variable called price set to 2.5. Print price.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // double price = 2.5
    // print price
${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints 2.5', hint: 'double price = 2.5 then System.out.println(price)', kind: 'stdoutIncludes', expect: '2.5' },
            { id: 't2', description: 'Uses price', hint: 'price = 2.5', kind: 'codeMatches', expect: '\\bprice\\s*=' },
          ],
        },
        {
          id: 'p3',
          title: 'Simple math',
          prompt: 'Make a variable called n set to 10. Print n + 2.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // int n = 10
    // print n + 2
${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints 12', hint: 'int n = 10 then System.out.println(n + 2)', kind: 'stdout', expect: '12' },
            { id: 't2', description: 'Uses n', hint: 'n = 10', kind: 'codeMatches', expect: '\\bn\\s*=' },
          ],
        },
      ],
    },
    {
      id: 'java-ess-strings',
      title: 'Strings',
      summary: 'A String is a string of letters (and other characters) written in quotes.',
      runner: 'java',
      sections: [
        {
          heading: 'Definition: string',
          body: `A String is a string of letters — text made of characters.

In Java, write a String in double quotes:

"Ada"
"hello"
"42"
""

• Letters: "Ada"
• Words and spaces: "hello world"
• Digits as text: "42" (this is text, not the number forty-two)
• An empty String: "" (a String with no characters)

In Java, String uses a capital S. Prefer double quotes for String literals.`,
        },
        {
          heading: 'Strings in variables',
          body: `Store text in a variable the same way you store a number — but declare the type as String:

String name = "Ada";
String city = "Calgary";
System.out.println(name);

Join two strings with + :

String greeting = "Hello";
String name = "Ada";
System.out.println(greeting + " " + name);   → Hello Ada

+ joins strings. It does not add numbers when both sides are strings.`,
        },
        {
          heading: 'What a string is not',
          body: `• "7" is a String. 7 (no quotes) is a number
• "true" is a String. true (no quotes) is a boolean
• You cannot do "3" + 4 until you convert one side carefully (Java may turn the number into text when joining with a String)

Rule: if it is in quotes, it is a String — even if it looks like a number or a boolean.`,
        },
      ],
      examples: [
        {
          title: 'String variables',
          code: `${JAVA_HEAD}    String word = "code";
    String city = "Calgary";
    System.out.println(word);
    System.out.println(city);
    System.out.println("Hi " + "Ada");
${JAVA_TAIL}`,
          note: 'Quotes make text a String.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Store a string',
          prompt: 'Make a variable called city set to Calgary. Print city.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // String city = "Calgary"
    // print city
${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints Calgary', hint: 'String city = "Calgary" then System.out.println(city)', kind: 'stdout', expect: 'Calgary' },
            { id: 't2', description: 'Uses city', hint: 'city = ...', kind: 'codeMatches', expect: '\\bcity\\s*=' },
          ],
        },
        {
          id: 'p2',
          title: 'Join two strings',
          prompt: 'Print Hello Ada by joining greeting and name with a space.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    String greeting = "Hello";
    String name = "Ada";
    // print Hello Ada
${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints Hello Ada', hint: 'System.out.println(greeting + " " + name)', kind: 'stdout', expect: 'Hello Ada' },
          ],
        },
      ],
    },
    {
      id: 'java-ess-booleans',
      title: 'Booleans',
      summary: 'A boolean is a true/false statement.',
      runner: 'java',
      sections: [
        {
          heading: 'Definition: boolean',
          body: `A boolean is a true/false statement. It answers a yes/no question with only two possible answers.

In Java, the only boolean values are:

• true
• false

Important details:
• No quotes — true and false are not strings
• Lowercase — True and False (capital letters) are wrong in Java
• A boolean is not the words "yes" / "no", and not the numbers 1 / 0 (even if those ideas feel related)

Examples of boolean meaning:
• boolean ready = true;   → yes, ready
• boolean gameOver = false;   → no, not over`,
        },
        {
          heading: 'Booleans from comparisons',
          body: `Comparisons create boolean values automatically:

int score = 85;
System.out.println(score >= 60);   → true
System.out.println(score < 50);    → false

Common comparison operators:
• == equal to
• != not equal to
• < less than
• > greater than
• <= less than or equal
• >= greater than or equal

Later, if statements use booleans to decide what code runs.`,
        },
        {
          heading: 'What a boolean is not',
          body: `• "true" with quotes is a String, not a boolean
• null means missing — it is not false
• 0 is a number, not a boolean

Store booleans in variables when you need a yes/no fact:

boolean ready = true;
boolean passed = score >= 60;`,
        },
      ],
      examples: [
        {
          title: 'Boolean values and a comparison',
          code: `${JAVA_HEAD}    boolean ready = true;
    System.out.println(ready);
    System.out.println(false);
    int score = 85;
    System.out.println(score >= 60);
${JAVA_TAIL}`,
          note: 'true and false are booleans. Comparisons also produce booleans.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Store a boolean',
          prompt: 'Make a variable called ready set to true. Print ready.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // boolean ready = true
    // print ready
${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'boolean ready = true then System.out.println(ready)', kind: 'stdout', expect: 'true' },
            { id: 't2', description: 'Uses ready', hint: 'ready = true', kind: 'codeMatches', expect: '\\bready\\s*=' },
          ],
        },
        {
          id: 'p2',
          title: 'A false value',
          prompt: 'Make a variable called done set to false. Print done.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // boolean done = false
    // print done
${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints false', hint: 'boolean done = false then System.out.println(done)', kind: 'stdout', expect: 'false' },
            { id: 't2', description: 'Uses done', hint: 'done = false', kind: 'codeMatches', expect: '\\bdone\\s*=' },
          ],
        },
        {
          id: 'p3',
          title: 'Compare numbers',
          prompt: 'score is 85. Print whether score >= 60.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    int score = 85;
    // print score >= 60
${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'System.out.println(score >= 60)', kind: 'stdout', expect: 'true' },
            { id: 't2', description: 'Uses >=', hint: 'score >= 60', kind: 'codeIncludes', expect: '>=' },
          ],
        },
      ],
    },
    {
      id: 'java-ess-missing',
      title: 'Missing values (null)',
      summary: 'null means there is no value yet — a missing value for object references like String.',
      runner: 'java',
      sections: [
        {
          heading: 'Definition: missing value',
          body: `A missing value means “there is nothing here yet” or “unknown.”

In Java, the missing value for object references is called null.

Examples of when null is useful:
• String nickname = null;   → the player has no nickname yet
• String answer = null;     → no answer has been entered
• String winner = null;     → the game has not chosen a winner

null means the variable does not point at any object yet. It is not a String, not a number, and not a boolean.`,
        },
        {
          heading: 'Primitives cannot be null',
          body: `Important Java rule:

• Types like int, double, and boolean are primitives
• Primitives always hold a real value of that type — they cannot be null
• You cannot write int age = null; — that is illegal

Use null only with object types such as String (and later arrays, lists, and other objects):

String nickname = null;   // OK
int lives = 0;            // OK — use 0 (or another number), not null

When you need “no nickname yet,” use String and null. When you need “zero lives,” use int and 0.`,
        },
        {
          heading: 'What null is not',
          body: `• null is not 0 (zero is a number)
• null is not "" (empty String is still a String)
• null is not false (false is a boolean true/false statement)
• "null" in quotes is a String spelling the word null — not the real missing value

Use null when you want to say clearly: this object variable exists, but it has no real value yet.`,
        },
      ],
      examples: [
        {
          title: 'A missing value in a variable',
          code: `${JAVA_HEAD}    String nickname = null;
    System.out.println(nickname);
    nickname = "Ace";
    System.out.println(nickname);
${JAVA_TAIL}`,
          note: 'First there is no nickname. Later you store a real String.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Store null',
          prompt: 'Make a variable called nickname set to null. Print nickname.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // String nickname = null
    // print nickname
${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints null', hint: 'String nickname = null then System.out.println(nickname)', kind: 'stdout', expect: 'null' },
            { id: 't2', description: 'Uses nickname', hint: 'nickname = null', kind: 'codeMatches', expect: '\\bnickname\\s*=' },
          ],
        },
        {
          id: 'p2',
          title: 'Replace null later',
          prompt: 'Set answer to null, then set answer to yes, then print answer.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    // String answer = null
    // answer = "yes"
    // print answer
${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints yes', hint: 'Assign "yes" last, then System.out.println(answer)', kind: 'stdout', expect: 'yes' },
            { id: 't2', description: 'Uses null', hint: 'answer = null first', kind: 'codeIncludes', expect: 'null' },
          ],
        },
      ],
    },
    {
      id: 'java-ess-lists',
      title: 'Arrays',
      summary: 'An array holds several values in order.',
      runner: 'java',
      sections: [
        {
          heading: 'Definition: array',
          body: `An array is an ordered group of values. In Java you declare the element type, then fill the array with curly braces.

int[] nums = {3, 6, 9};
String[] names = {"Ada", "Lin"};

• The values stay in order
• Indexes start at 0 — nums[0] is the first item
• nums.length tells you how many items are in the array

An array usually holds one kind of value (all ints, or all Strings). Beginners should keep one type per array.`,
        },
        {
          heading: 'Arrays and variables',
          body: `An array is itself a value, so you store it in a variable:

int[] scores = {10, 20, 30};
System.out.println(scores[0]);      → 10
System.out.println(scores.length);  → 3

The variable scores holds the whole array. Each slot inside the array holds one value.`,
        },
      ],
      examples: [
        {
          title: 'A short array',
          code: `${JAVA_HEAD}    int[] nums = {3, 6, 9};
    System.out.println(nums[0]);
    System.out.println(nums.length);
${JAVA_TAIL}`,
          note: 'Indexes start at 0.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'First item',
          prompt: 'Print the first item in nums.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    int[] nums = {3, 6, 9};
    // print the first item
${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints 3', hint: 'System.out.println(nums[0])', kind: 'stdout', expect: '3' },
          ],
        },
        {
          id: 'p2',
          title: 'How many items',
          prompt: 'Print how many items are in nums.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    int[] nums = {3, 6, 9};
    // print the length
${JAVA_TAIL}`,
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
          heading: 'Why convert?',
          body: `Sometimes you have the right information in the wrong type.

Common conversions:
• Integer.parseInt("12") → 12   (digit text → integer)
• Double.parseDouble("3.5") → 3.5
• String.valueOf(5) → "5"     (number → text)
• You cannot turn null into a useful number without choosing a real value first

Use parseInt or parseDouble before math on digit text. Use String.valueOf (or + with a String) when joining text.`,
        },
      ],
      examples: [
        {
          title: 'Convert then use',
          code: `${JAVA_HEAD}    String raw = "12";
    int n = Integer.parseInt(raw);
    System.out.println(n + 1);
    System.out.println("n=" + String.valueOf(n));
${JAVA_TAIL}`,
          note: 'parseInt for math; String.valueOf for joining text.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Text to number',
          prompt: 'Turn raw into an integer, add 3, and print the result.',
          difficulty: 1,
          starterCode: `${JAVA_HEAD}    String raw = "12";
    // Integer.parseInt(raw) + 3, then print
${JAVA_TAIL}`,
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
          starterCode: `${JAVA_HEAD}    int n = 7;
    // print "score: " + String.valueOf(n)
${JAVA_TAIL}`,
          tests: [
            { id: 't1', description: 'Prints score: 7', hint: 'System.out.println("score: " + String.valueOf(n))', kind: 'stdout', expect: 'score: 7' },
            { id: 't2', description: 'Uses valueOf', hint: 'String.valueOf(n)', kind: 'codeIncludes', expect: 'valueOf' },
          ],
        },
      ],
    },
  ],
}
