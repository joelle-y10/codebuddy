import type { Module } from '../../types'

/** First module on every basic track: coding terms, values, variables, and types. */
export const cppEssentialsModule: Module = {
  id: 'cpp-essentials',
  title: 'Values, variables & types',
  summary:
    'After Getting started: learn coding terms, then numbers, strings, booleans, missing values, and lists — now that you know std::cout.',
  lessons: [
    {
      id: 'cpp-ess-terms',
      title: 'Coding terms you need',
      summary: 'Learn the basic vocabulary before writing programs: value, type, variable, and statement.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Why learn these terms now?',
          body: `You already know std::cout from Getting started — that is how you see results.

Now learn the words every coder uses for the data itself:

• what a value is
• what a type is
• what a variable is

Later lessons (if, loops, vectors in more depth) assume you know these words.`,
        },
        {
          heading: 'Glossary',
          body: `• Value — one piece of data, like 7, "Ada", or true
• Type — the kind of value it is (int, string, bool, …). The type decides what you can do with it
• Variable — a name that stores a value so you can use it later (int score = 10)
• Assignment — the = that puts a value into a variable (not the same as ==, which asks “are these equal?”)
• Statement — one instruction in your program, usually one line ending with ;
• Expression — something that produces a value, like 3 + 4 or score >= 60
• Console / output — where std::cout << ... shows results so you can see a value

cout is only a flashlight: it shows a value. It is not more important than understanding what that value is.`,
        },
        {
          heading: 'The types you will meet first',
          body: `Memorize these definitions — you will use them in every language track:

• A boolean is a true/false statement (true or false in C++)
• A string is a string of letters (and other characters) in quotes: "hello"
• A number can be an integer (whole, int) or a decimal (double): 7 or 3.14
• A missing value means nothing is stored yet — for pointers that is nullptr; for an empty string use ""
• A list (vector) holds several values in order: {3, 6, 9}

Next lessons go through each idea slowly, with short practice.`,
        },
      ],
      examples: [
        {
          title: 'Same ideas, written in code',
          code: `#include <iostream>
#include <string>
int main() {
  // value → 10 (type: int)
  // variable name → score
  int score = 10;
  std::string name = "Ada";      // string
  bool ready = true;             // boolean
  // cout only shows the value — it does not define the type
  std::cout << score << std::endl;
  std::cout << name << std::endl;
  std::cout << std::boolalpha << ready << std::endl;
  return 0;
}`,
          note: 'Read the comments first. cout is just how we peek at the stored values.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Store then show',
          prompt: 'Make a variable called age set to 12. Then print age.',
          difficulty: 1,
          starterCode: `#include <iostream>
int main() {
  // Remember: age is the variable name, 12 is the value (an int)
  // int age = 12;
  // std::cout << age << std::endl;
  return 0;
}
`,
          tests: [
            { id: 't1', description: 'Prints 12', hint: 'int age = 12; then std::cout << age', kind: 'stdout', expect: '12' },
            { id: 't2', description: 'Uses age', hint: 'age = ...', kind: 'codeMatches', expect: '\\bage\\s*=' },
          ],
        },
        {
          id: 'p2',
          title: 'A string value in a variable',
          prompt: 'Make a variable called word set to hi. Then print word.',
          difficulty: 1,
          starterCode: `#include <iostream>
#include <string>
int main() {
  // word holds a string value — use quotes
  return 0;
}
`,
          tests: [
            { id: 't1', description: 'Prints hi', hint: 'std::string word = "hi"; then std::cout << word', kind: 'stdout', expect: 'hi' },
            { id: 't2', description: 'Uses word', hint: 'word = "hi"', kind: 'codeMatches', expect: '\\bword\\s*=' },
          ],
        },
      ],
    },
    {
      id: 'cpp-ess-values',
      title: 'What is a value?',
      summary: 'A value is a piece of data. Every value has a type that says what kind of data it is.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Definition: value',
          body: `A value is one piece of information your program can work with.

Examples of values:
• 7
• 3.14
• "hello"
• true

Values are the actual data. Later you will store them in variables so you can reuse them by name.`,
        },
        {
          heading: 'Definition: type',
          body: `Every value has a type. The type tells you what kind of information it is and what you can do with it.

Here are the main types you need first:

• A number can be an int (whole number) or a double (decimal). Examples: 0, 7, -3, 3.14, 2.0
• A string is a string of letters (and other characters) written in quotes. Examples: "Ada", "hi", "42"
• A boolean is a true/false statement. In C++ the only boolean values are true and false
• C++ has no single “None” for every type. For an empty string use "". For “no pointer yet,” use nullptr (covered later in this module)
• A list (vector) is an ordered collection of values. Example: {3, 6, 9}

The type matters. You can add 3 + 4, but you cannot add 3 + "hello" without converting first.`,
        },
        {
          heading: 'Why types matter',
          body: `Programs treat different types differently:

• Numbers are for counting, measuring, and math
• Strings are for names, messages, and any text
• Booleans are for yes/no decisions (later used in if statements)
• Empty / missing ideas help you say “not set yet”
• Vectors are for several related values together

In C++, you usually write the type when you create a variable: int age = 12;

In the next lessons you will learn each type carefully, and also learn variables — names that hold values.`,
        },
      ],
      examples: [
        {
          title: 'Different kinds of values',
          code: `#include <iostream>
#include <string>
int main() {
  std::cout << 7 << std::endl;        // number (int)
  std::cout << 3.5 << std::endl;      // number (double / decimal)
  std::cout << "Ada" << std::endl;    // string
  std::cout << std::boolalpha << true << std::endl;  // boolean
  return 0;
}`,
          note: 'Each line is a different type of value. Use std::boolalpha so bool prints as true/false.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'A number value',
          prompt: 'Print the number 10.',
          difficulty: 1,
          starterCode: `#include <iostream>
int main() {
  // Print the number 10
  return 0;
}
`,
          tests: [{ id: 't1', description: 'Prints 10', hint: 'std::cout << 10 << std::endl;', kind: 'stdout', expect: '10' }],
        },
        {
          id: 'p2',
          title: 'A string value',
          prompt: 'Print the string hi (use quotes).',
          difficulty: 1,
          starterCode: `#include <iostream>
int main() {
  // Print "hi"
  return 0;
}
`,
          tests: [
            { id: 't1', description: 'Prints hi', hint: 'std::cout << "hi" << std::endl;', kind: 'stdout', expect: 'hi' },
            { id: 't2', description: 'Uses quotes', hint: 'Put hi in quotes', kind: 'codeMatches', expect: '["\']hi["\']' },
          ],
        },
      ],
    },
    {
      id: 'cpp-ess-variables',
      title: 'Variables',
      summary: 'A variable is a name that stores a value so you can use it later.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Definition: variable',
          body: `A variable is a named box that holds a value.

In C++, you usually write the type, then the name, then = and the value:

int score = 10;
std::string name = "Ada";
bool ready = true;

Read it as: “the variable score now holds the value 10.”

• The type comes first (int, std::string, bool)
• The name is next (score, name, ready)
• The value is on the right (10, "Ada", true)
• = means “store this value in that name”
• = is not the same as ==. == asks “are these two things equal?”`,
        },
        {
          heading: 'Using and changing a variable',
          body: `After you store a value, use the variable’s name to get the value back:

int score = 10;
std::cout << score;   → prints 10

You can replace the value later (same type):

int score = 10;
score = 11;
std::cout << score;   → prints 11

The variable still has the same name. Only the value inside changed.`,
        },
        {
          heading: 'Rules for variable names',
          body: `• Use clear names: age, score, player_name
• Names cannot start with a digit (1score is illegal)
• Names cannot contain spaces (player name is illegal)
• Use underscore or camelCase for multi-word names: player_name or playerName
• Prefer readable names over short ones like x or s (unless x really means a position)

A variable holds one type of value: an int, a double, a string, a bool, and so on.`,
        },
      ],
      examples: [
        {
          title: 'Store different types in variables',
          code: `#include <iostream>
#include <string>
int main() {
  int age = 15;
  std::string name = "Ada";
  bool ready = true;
  std::cout << age << std::endl;
  std::cout << name << std::endl;
  std::cout << std::boolalpha << ready << std::endl;
  return 0;
}`,
          note: 'Each variable holds one value of a specific type.',
        },
        {
          title: 'Change a variable',
          code: `#include <iostream>
int main() {
  int score = 0;
  score = 5;
  std::cout << score << std::endl;
  return 0;
}`,
          note: 'The last assignment is the value that remains.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Make a number variable',
          prompt: 'Make a variable called age set to 12. Then print age.',
          difficulty: 1,
          starterCode: `#include <iostream>
int main() {
  // int age = 12;
  // print age
  return 0;
}
`,
          tests: [
            { id: 't1', description: 'Prints 12', hint: 'int age = 12; then std::cout << age', kind: 'stdout', expect: '12' },
            { id: 't2', description: 'Uses age', hint: 'age = ...', kind: 'codeMatches', expect: '\\bage\\s*=' },
          ],
        },
        {
          id: 'p2',
          title: 'Make a string variable',
          prompt: 'Make a variable called name set to Ada. Then print name.',
          difficulty: 1,
          starterCode: `#include <iostream>
#include <string>
int main() {
  // std::string name = "Ada";
  // print name
  return 0;
}
`,
          tests: [
            { id: 't1', description: 'Prints Ada', hint: 'std::string name = "Ada"; then std::cout << name', kind: 'stdout', expect: 'Ada' },
            { id: 't2', description: 'Uses name', hint: 'name = "Ada"', kind: 'codeMatches', expect: '\\bname\\s*=' },
          ],
        },
        {
          id: 'p3',
          title: 'Change a variable',
          prompt: 'Set score to 0, then set score to 7, then print score.',
          difficulty: 1,
          starterCode: `#include <iostream>
int main() {
  // int score = 0;
  // score = 7;
  // print score
  return 0;
}
`,
          tests: [
            { id: 't1', description: 'Prints 7', hint: 'Assign 7 last, then std::cout << score', kind: 'stdout', expect: '7' },
            { id: 't2', description: 'Uses score', hint: 'score = ...', kind: 'codeMatches', expect: '\\bscore\\s*=' },
          ],
        },
      ],
    },
    {
      id: 'cpp-ess-numbers',
      title: 'Numbers (integers & decimals)',
      summary: 'A number can be an int (whole) or a double (decimal). Both are numeric values.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Definition: number',
          body: `A number is a numeric value you can use in math.

In C++, numbers come in two common forms:

• Integer (int) — a whole number with no decimal point
  Examples: 0, 1, 42, -3
• Double — a number that can have a decimal (fractional) part
  Examples: 3.14, 2.0, -0.5, 0.25

So: a number can be whole or have decimals. Integers are whole; doubles can include a decimal point.`,
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
          body: `• "7" in quotes is a string of characters, not a number
• true and false are booleans, not numbers
• An empty or missing idea is not zero

You can store numbers in variables:

int count = 7;
double price = 3.5;`,
        },
      ],
      examples: [
        {
          title: 'Integer and double variables',
          code: `#include <iostream>
int main() {
  int count = 7;
  double price = 3.5;
  std::cout << count << std::endl;
  std::cout << price << std::endl;
  std::cout << count + 1 << std::endl;
  std::cout << price * 2 << std::endl;
  return 0;
}`,
          note: '7 is an int. 3.5 is a double. Both are numbers.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'An integer variable',
          prompt: 'Make a variable called lives set to 3. Print lives.',
          difficulty: 1,
          starterCode: `#include <iostream>
int main() {
  // int lives = 3;
  // print lives
  return 0;
}
`,
          tests: [
            { id: 't1', description: 'Prints 3', hint: 'int lives = 3; then std::cout << lives', kind: 'stdout', expect: '3' },
            { id: 't2', description: 'Uses lives', hint: 'lives = 3', kind: 'codeMatches', expect: '\\blives\\s*=' },
          ],
        },
        {
          id: 'p2',
          title: 'A decimal variable',
          prompt: 'Make a variable called price set to 2.5. Print price.',
          difficulty: 1,
          starterCode: `#include <iostream>
int main() {
  // double price = 2.5;
  // print price
  return 0;
}
`,
          tests: [
            { id: 't1', description: 'Prints 2.5', hint: 'double price = 2.5; then std::cout << price', kind: 'stdoutIncludes', expect: '2.5' },
            { id: 't2', description: 'Uses price', hint: 'price = 2.5', kind: 'codeMatches', expect: '\\bprice\\s*=' },
          ],
        },
        {
          id: 'p3',
          title: 'Simple math',
          prompt: 'Make a variable called n set to 10. Print n + 2.',
          difficulty: 1,
          starterCode: `#include <iostream>
int main() {
  // int n = 10;
  // print n + 2
  return 0;
}
`,
          tests: [
            { id: 't1', description: 'Prints 12', hint: 'int n = 10; then std::cout << n + 2', kind: 'stdout', expect: '12' },
            { id: 't2', description: 'Uses n', hint: 'n = 10', kind: 'codeMatches', expect: '\\bn\\s*=' },
          ],
        },
      ],
    },
    {
      id: 'cpp-ess-strings',
      title: 'Strings',
      summary: 'A string is a string of letters (and other characters) written in quotes.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Definition: string',
          body: `A string is a string of letters — text made of characters.

In C++, use std::string (include <string>) and write the text in quotes:

"Ada"
"hello"
"42"
""

• Letters: "Ada"
• Words and spaces: "hello world"
• Digits as text: "42" (this is text, not the number forty-two)
• An empty string: "" (a string with no characters)

You write: std::string name = "Ada";
(Or using namespace std; then you can write string name = "Ada";)`,
        },
        {
          heading: 'Strings in variables',
          body: `Store text in a variable the same way you store a number — but with the string type:

std::string name = "Ada";
std::string city = "Calgary";
std::cout << name;

Join two strings with + :

std::string greeting = "Hello";
std::string name = "Ada";
std::cout << greeting + " " + name;   → Hello Ada

+ joins strings. It does not add numbers when both sides are strings.`,
        },
        {
          heading: 'What a string is not',
          body: `• "7" is a string. 7 (no quotes) is an int
• "true" is a string. true (no quotes) is a boolean
• You cannot do "3" + 4 until you convert one side to the matching type

Rule: if it is in quotes, it is a string — even if it looks like a number or a boolean.`,
        },
      ],
      examples: [
        {
          title: 'String variables',
          code: `#include <iostream>
#include <string>
int main() {
  std::string word = "code";
  std::string city = "Calgary";
  std::cout << word << std::endl;
  std::cout << city << std::endl;
  std::cout << std::string("Hi ") + "Ada" << std::endl;
  return 0;
}`,
          note: 'Quotes make text a string. Include <string> for std::string.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Store a string',
          prompt: 'Make a variable called city set to Calgary. Print city.',
          difficulty: 1,
          starterCode: `#include <iostream>
#include <string>
int main() {
  // std::string city = "Calgary";
  // print city
  return 0;
}
`,
          tests: [
            { id: 't1', description: 'Prints Calgary', hint: 'std::string city = "Calgary"; then std::cout << city', kind: 'stdout', expect: 'Calgary' },
            { id: 't2', description: 'Uses city', hint: 'city = ...', kind: 'codeMatches', expect: '\\bcity\\s*=' },
          ],
        },
        {
          id: 'p2',
          title: 'Join two strings',
          prompt: 'Print Hello Ada by joining greeting and name with a space.',
          difficulty: 1,
          starterCode: `#include <iostream>
#include <string>
int main() {
  std::string greeting = "Hello";
  std::string name = "Ada";
  // print Hello Ada
  return 0;
}
`,
          tests: [
            { id: 't1', description: 'Prints Hello Ada', hint: 'std::cout << greeting + " " + name', kind: 'stdout', expect: 'Hello Ada' },
          ],
        },
      ],
    },
    {
      id: 'cpp-ess-booleans',
      title: 'Booleans',
      summary: 'A boolean is a true/false statement.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Definition: boolean',
          body: `A boolean is a true/false statement. It answers a yes/no question with only two possible answers.

In C++, the only boolean values are:

• true
• false

Important details:
• No quotes — true and false are not strings
• Lowercase — True and False (capital letters) are wrong in C++
• A boolean is not the words "yes" / "no", and not the numbers 1 / 0 (even if those ideas feel related)

By default, cout may print bool as 1 or 0. Use std::boolalpha to print the words true and false.

Examples of boolean meaning:
• bool ready = true;   → yes, ready
• bool game_over = false;   → no, not over`,
        },
        {
          heading: 'Booleans from comparisons',
          body: `Comparisons create boolean values automatically:

int score = 85;
std::cout << std::boolalpha << (score >= 60);   → true
std::cout << std::boolalpha << (score < 50);    → false

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
          body: `• "true" with quotes is a string, not a boolean
• "" (empty string) is not false — it is still a string
• 0 is a number, not a boolean (even though it can be treated as “falsey” in some checks)

Store booleans in variables when you need a yes/no fact:

bool ready = true;
bool passed = score >= 60;`,
        },
      ],
      examples: [
        {
          title: 'Boolean values and a comparison',
          code: `#include <iostream>
int main() {
  bool ready = true;
  std::cout << std::boolalpha << ready << std::endl;
  std::cout << std::boolalpha << false << std::endl;
  int score = 85;
  std::cout << std::boolalpha << (score >= 60) << std::endl;
  return 0;
}`,
          note: 'true and false are booleans. Comparisons also produce booleans. Use boolalpha for word output.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Store a boolean',
          prompt: 'Make a variable called ready set to true. Print ready with boolalpha.',
          difficulty: 1,
          starterCode: `#include <iostream>
int main() {
  // bool ready = true;
  // print ready with boolalpha
  return 0;
}
`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'bool ready = true; then std::cout << std::boolalpha << ready', kind: 'stdoutIncludes', expect: 'true' },
            { id: 't2', description: 'Uses ready', hint: 'ready = true', kind: 'codeMatches', expect: '\\bready\\s*=' },
          ],
        },
        {
          id: 'p2',
          title: 'A false value',
          prompt: 'Make a variable called done set to false. Print done with boolalpha.',
          difficulty: 1,
          starterCode: `#include <iostream>
int main() {
  // bool done = false;
  // print done with boolalpha
  return 0;
}
`,
          tests: [
            { id: 't1', description: 'Prints false', hint: 'bool done = false; then std::cout << std::boolalpha << done', kind: 'stdoutIncludes', expect: 'false' },
            { id: 't2', description: 'Uses done', hint: 'done = false', kind: 'codeMatches', expect: '\\bdone\\s*=' },
          ],
        },
        {
          id: 'p3',
          title: 'Compare numbers',
          prompt: 'score is 85. Print whether score >= 60 (use boolalpha).',
          difficulty: 1,
          starterCode: `#include <iostream>
int main() {
  int score = 85;
  // print score >= 60 with boolalpha
  return 0;
}
`,
          tests: [
            { id: 't1', description: 'Prints true', hint: 'std::cout << std::boolalpha << (score >= 60)', kind: 'stdoutIncludes', expect: 'true' },
            { id: 't2', description: 'Uses >=', hint: 'score >= 60', kind: 'codeIncludes', expect: '>=' },
          ],
        },
      ],
    },
    {
      id: 'cpp-ess-missing',
      title: 'Missing values',
      summary: 'C++ has no single None. Use "" for empty text, or nullptr when a pointer has no object yet.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Definition: missing value',
          body: `A missing value means “there is nothing here yet” or “unknown.”

Python has one missing value called None. C++ does not.

Instead, beginners usually choose an approach that fits the type:

• For a string with no text yet → use the empty string ""
  std::string nickname = "";
• For a pointer with no object yet → use nullptr
  int* answer = nullptr;

Examples of when “missing” is useful:
• nickname = ""   → the player has no nickname yet
• answer = nullptr → no answer object has been set
• You might later replace "" with "Ace", or point the pointer at a real value

There is no one missing value that works for int, string, and bool alike.`,
        },
        {
          heading: 'Empty string vs nullptr',
          body: `• "" is still a string — it just has zero characters
• nullptr means a pointer does not point at anything yet
• 0 is a number, not “missing”
• false is a boolean true/false statement, not “missing”
• "nullptr" in quotes is a string spelling a word — not the real nullptr

For most early lessons, empty string "" is the friendliest “no text yet” idea. nullptr appears when you learn pointers.`,
        },
        {
          heading: 'What missing is not',
          body: `• Missing is not 0 (zero is a number)
• "" is empty text, not the same as false
• nullptr is not the number 0 in meaning — even if some old code wrote 0 for “no pointer”

Use "" when you want to say: this string exists, but it has no characters yet.
Use nullptr when you want to say: this pointer exists, but it points nowhere yet.`,
        },
      ],
      examples: [
        {
          title: 'Empty string, then a real nickname',
          code: `#include <iostream>
#include <string>
int main() {
  std::string nickname = "";
  std::cout << "len=" << nickname.size() << std::endl;
  nickname = "Ace";
  std::cout << nickname << std::endl;
  return 0;
}`,
          note: 'First the nickname is empty text. Later you store a real string.',
        },
        {
          title: 'A pointer with no object yet',
          code: `#include <iostream>
int main() {
  int* answer = nullptr;
  if (answer == nullptr) {
    std::cout << "no value yet" << std::endl;
  }
  return 0;
}`,
          note: 'nullptr means the pointer does not point at a value yet. You will use pointers more later.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Empty string',
          prompt: 'Make a variable called nickname set to the empty string "". Print the size of nickname.',
          difficulty: 1,
          starterCode: `#include <iostream>
#include <string>
int main() {
  // std::string nickname = "";
  // print nickname.size()
  return 0;
}
`,
          tests: [
            { id: 't1', description: 'Prints 0', hint: 'std::string nickname = ""; then std::cout << nickname.size()', kind: 'stdout', expect: '0' },
            { id: 't2', description: 'Uses nickname', hint: 'nickname = ""', kind: 'codeMatches', expect: '\\bnickname\\s*=' },
          ],
        },
        {
          id: 'p2',
          title: 'Replace empty later',
          prompt: 'Set answer to "". Then set answer to yes. Then print answer.',
          difficulty: 1,
          starterCode: `#include <iostream>
#include <string>
int main() {
  // std::string answer = "";
  // answer = "yes";
  // print answer
  return 0;
}
`,
          tests: [
            { id: 't1', description: 'Prints yes', hint: 'Assign "yes" last, then std::cout << answer', kind: 'stdout', expect: 'yes' },
            { id: 't2', description: 'Uses empty string', hint: 'answer = "" first', kind: 'codeIncludes', expect: '""' },
          ],
        },
      ],
    },
    {
      id: 'cpp-ess-lists',
      title: 'Lists (vectors)',
      summary: 'A vector holds several values in order — like a list.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Definition: list (vector)',
          body: `A list is an ordered group of values. In C++, beginners often use std::vector (include <vector>).

std::vector<int> nums = {3, 6, 9};
std::vector<std::string> names = {"Ada", "Lin"};

• The values stay in order
• Indexes start at 0 — nums[0] is the first item
• nums.size() tells you how many items are in the vector

A vector usually holds one kind of value (all ints, or all strings). Write the element type in the angle brackets: vector<int>.`,
        },
        {
          heading: 'Vectors and variables',
          body: `A vector is itself a value, so you store it in a variable:

std::vector<int> scores = {10, 20, 30};
std::cout << scores[0];      → 10
std::cout << scores.size();  → 3

The variable scores holds the whole list. Each slot inside the vector holds one value.`,
        },
      ],
      examples: [
        {
          title: 'A short vector',
          code: `#include <iostream>
#include <vector>
int main() {
  std::vector<int> nums = {3, 6, 9};
  std::cout << nums[0] << std::endl;
  std::cout << nums.size() << std::endl;
  return 0;
}`,
          note: 'Indexes start at 0.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'First item',
          prompt: 'Print the first item in nums.',
          difficulty: 1,
          starterCode: `#include <iostream>
#include <vector>
int main() {
  std::vector<int> nums = {3, 6, 9};
  // print the first item
  return 0;
}
`,
          tests: [
            { id: 't1', description: 'Prints 3', hint: 'std::cout << nums[0]', kind: 'stdout', expect: '3' },
          ],
        },
        {
          id: 'p2',
          title: 'How many items',
          prompt: 'Print how many items are in nums.',
          difficulty: 1,
          starterCode: `#include <iostream>
#include <vector>
int main() {
  std::vector<int> nums = {3, 6, 9};
  // print the size
  return 0;
}
`,
          tests: [
            { id: 't1', description: 'Prints 3', hint: 'std::cout << nums.size()', kind: 'stdout', expect: '3' },
            { id: 't2', description: 'Uses size', hint: 'nums.size()', kind: 'codeIncludes', expect: '.size()' },
          ],
        },
      ],
    },
    {
      id: 'cpp-ess-convert',
      title: 'Changing types',
      summary: 'Convert a value when you need a different type.',
      runner: 'cpp',
      sections: [
        {
          heading: 'Why convert?',
          body: `Sometimes you have the right information in the wrong type.

Common conversions:
• std::stoi("12") → 12   (digit text → int; include <string>)
• std::stod("3.5") → 3.5 (digit text → double)
• std::to_string(5) → "5"  (number → text)

Use stoi or stod before math on digit text. Use to_string when you need a number as text to join with +.

An empty string "" is not a number — convert only when the text really holds digits.`,
        },
      ],
      examples: [
        {
          title: 'Convert then use',
          code: `#include <iostream>
#include <string>
int main() {
  std::string raw = "12";
  int n = std::stoi(raw);
  std::cout << n + 1 << std::endl;
  std::cout << "n=" + std::to_string(n) << std::endl;
  return 0;
}`,
          note: 'stoi for math; to_string for joining text.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Text to number',
          prompt: 'Turn raw into an integer, add 3, and print the result.',
          difficulty: 1,
          starterCode: `#include <iostream>
#include <string>
int main() {
  std::string raw = "12";
  // std::stoi(raw) + 3, then print
  return 0;
}
`,
          tests: [
            { id: 't1', description: 'Prints 15', hint: 'std::cout << std::stoi(raw) + 3', kind: 'stdout', expect: '15' },
            { id: 't2', description: 'Uses stoi', hint: 'std::stoi(raw)', kind: 'codeIncludes', expect: 'stoi' },
          ],
        },
        {
          id: 'p2',
          title: 'Number to text',
          prompt: 'Print score: 7 using std::to_string and +.',
          difficulty: 1,
          starterCode: `#include <iostream>
#include <string>
int main() {
  int n = 7;
  // print "score: " + std::to_string(n)
  return 0;
}
`,
          tests: [
            { id: 't1', description: 'Prints score: 7', hint: 'std::cout << "score: " + std::to_string(n)', kind: 'stdout', expect: 'score: 7' },
            { id: 't2', description: 'Uses to_string', hint: 'std::to_string(n)', kind: 'codeIncludes', expect: 'to_string' },
          ],
        },
      ],
    },
  ],
}
