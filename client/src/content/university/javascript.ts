import type { LanguageTrack } from '../../types'

export const javascriptUniversity: LanguageTrack = {
  id: 'javascript',
  name: 'JavaScript',
  tagline: 'Closures, async flow, and sharper array tools.',
  accent: '#c8f542',
  tier: 'university',
  modules: [
    {
      id: 'js-u-arrays',
      title: 'Array pipelines',
      summary: 'Transform collections with map, filter, and reduce.',
      lessons: [
        {
          id: 'js-u-map',
          title: 'map & filter',
          summary: 'Transform and select without mutating the source.',
          runner: 'javascript',
          sections: [
            {
              heading: 'map builds a parallel array',
              body: `nums.map((n) => n * 2) returns a new array with each item transformed. The original nums is unchanged.\n\nThink: same length, new values.`,
            },
            {
              heading: 'filter keeps a subset',
              body: `nums.filter((n) => n > 5) keeps items that pass a test. The result may be shorter.\n\nChain map then filter for clean data pipelines: transform first, then decide what to keep.`,
            },
            {
              heading: 'join for output',
              body: `After you have an array of results, .join(",") turns it into a single printable string — handy for CodeBuddy checks.`,
            },
          ],
          examples: [
            {
              title: 'Double then keep evens',
              code: `const nums = [1, 2, 3, 4];\nconst doubled = nums.map((n) => n * 2);\nconst evens = doubled.filter((n) => n % 2 === 0);\nconsole.log(evens.join(","));`,
              note: 'Arrow functions keep callbacks short.',
            },
            {
              title: 'Filter first',
              code: `const nums = [1, 2, 3, 4, 5];\nconst big = nums.filter((n) => n >= 3);\nconsole.log(big.join("-"));`,
              note: 'Order of map/filter changes the story.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Pipeline',
              prompt: 'Double each number, keep values > 5, print joined by commas.',
              difficulty: 1,
              starterCode: `const nums = [1, 2, 3, 4, 5];\n// Double each number, keep values > 5, print joined by commas\n`,
              tests: [
                { id: 't1', description: 'Prints 6,8,10', hint: 'map *2 then filter > 5, join with ","', kind: 'stdout', expect: '6,8,10' },
                { id: 't2', description: 'Uses map', hint: 'nums.map(...)', kind: 'codeIncludes', expect: '.map(' },
                { id: 't3', description: 'Uses filter', hint: 'filter(...)', kind: 'codeIncludes', expect: '.filter(' },
              ],
            },
            {
              id: 'p2',
              title: 'Odds only',
              prompt: 'Filter nums to odd values and print joined by commas.',
              difficulty: 2,
              starterCode: `const nums = [1, 2, 3, 4, 5, 6];\n`,
              tests: [
                { id: 't1', description: 'Prints 1,3,5', hint: 'filter n % 2 === 1', kind: 'stdout', expect: '1,3,5' },
                { id: 't2', description: 'Uses filter', hint: '.filter(', kind: 'codeIncludes', expect: '.filter(' },
              ],
            },
            {
              id: 'p3',
              title: 'Squares',
              prompt: 'Map each num to n*n and print joined by commas.',
              difficulty: 2,
              starterCode: `const nums = [2, 3, 4];\n`,
              tests: [
                { id: 't1', description: 'Prints 4,9,16', hint: 'map n => n*n', kind: 'stdout', expect: '4,9,16' },
                { id: 't2', description: 'Uses map', hint: '.map(', kind: 'codeIncludes', expect: '.map(' },
              ],
            },
          ],
        },
        {
          id: 'js-u-reduce',
          title: 'reduce',
          summary: 'Fold an array into one value.',
          runner: 'javascript',
          sections: [
            {
              heading: 'Accumulator pattern',
              body: `reduce walks the array and accumulates a result. Signature: arr.reduce((acc, item) => nextAcc, start).\n\nThe start value matters — 0 for sums, 1 for products, [] for building arrays.`,
            },
            {
              heading: 'When to reach for reduce',
              body: `Use reduce when the result isn’t “another array of the same shape” (that’s map/filter). Totals, products, max, and custom folds fit well.`,
            },
          ],
          examples: [
            {
              title: 'Sum',
              code: `const nums = [1, 2, 3, 4];\nconst sum = nums.reduce((acc, n) => acc + n, 0);\nconsole.log(sum);`,
              note: 'Start value matters — here it is 0.',
            },
            {
              title: 'Product',
              code: `const nums = [2, 3, 4];\nconst product = nums.reduce((acc, n) => acc * n, 1);\nconsole.log(product);`,
              note: 'Start at 1 for multiplication.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Product',
              prompt: 'Use reduce to print the product of [2, 4, 6] (48).',
              difficulty: 1,
              starterCode: `const nums = [2, 4, 6];\n// Use reduce to print the product (48)\n`,
              tests: [
                { id: 't1', description: 'Prints 48', hint: 'reduce((a,n)=>a*n, 1)', kind: 'stdout', expect: '48' },
                { id: 't2', description: 'Uses reduce', hint: '.reduce(', kind: 'codeIncludes', expect: '.reduce(' },
              ],
            },
            {
              id: 'p2',
              title: 'Sum again',
              prompt: 'Reduce [5, 5, 5] to a sum and print it.',
              difficulty: 2,
              starterCode: `const nums = [5, 5, 5];\n`,
              tests: [
                { id: 't1', description: 'Prints 15', hint: 'reduce((a,n)=>a+n, 0)', kind: 'stdout', expect: '15' },
                { id: 't2', description: 'Uses reduce', hint: '.reduce(', kind: 'codeIncludes', expect: '.reduce(' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'js-u-functions',
      title: 'Closures & async',
      summary: 'Functions that remember — and wait — for you.',
      lessons: [
        {
          id: 'js-u-closure',
          title: 'Closures',
          summary: 'Functions that remember outer variables.',
          runner: 'javascript',
          sections: [
            {
              heading: 'What a closure is',
              body: `A closure is a function that keeps access to variables from the scope where it was created — even after that outer function returns.\n\nFactories like makeCounter() return an inner function that still sees n.`,
            },
            {
              heading: 'Why it matters',
              body: `Closures power private state, partial application, and many library APIs. If you understand “the inner function still sees the outer box,” you’ve got the core idea.`,
            },
          ],
          examples: [
            {
              title: 'Counter factory',
              code: `function makeCounter() {\n  let n = 0;\n  return function () {\n    n += 1;\n    return n;\n  };\n}\nconst c = makeCounter();\nconsole.log(c());\nconsole.log(c());`,
              note: 'n lives on inside the returned function.',
            },
            {
              title: 'Adder factory',
              code: `function makeAdder(x) {\n  return function (y) {\n    return x + y;\n  };\n}\nconsole.log(makeAdder(5)(3));`,
              note: 'x is captured; y arrives later.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'makeAdder',
              prompt: 'Write makeAdder(x) that returns a function adding x to its argument. Print makeAdder(5)(3).',
              difficulty: 1,
              starterCode: `// Write makeAdder(x) that returns a function adding x to its argument\n// Print makeAdder(5)(3)\n`,
              tests: [
                { id: 't1', description: 'Prints 8', hint: 'const add5 = makeAdder(5); console.log(add5(3))', kind: 'stdout', expect: '8' },
                { id: 't2', description: 'Defines makeAdder', hint: 'function makeAdder(x) { return (y) => x + y }', kind: 'codeMatches', expect: 'makeAdder' },
              ],
            },
            {
              id: 'p2',
              title: 'makeMultiplier',
              prompt: 'makeMultiplier(x) returns a function that multiplies by x. Print makeMultiplier(3)(4).',
              difficulty: 2,
              starterCode: `// makeMultiplier + print\n`,
              tests: [
                { id: 't1', description: 'Prints 12', hint: 'return (y) => x * y', kind: 'stdout', expect: '12' },
                { id: 't2', description: 'Defines makeMultiplier', hint: 'makeMultiplier', kind: 'codeIncludes', expect: 'makeMultiplier' },
              ],
            },
            {
              id: 'p3',
              title: 'Two counters',
              prompt: 'Create two counters from makeCounter-style factories; print 1 then 1 (independent state).',
              difficulty: 3,
              starterCode: `function makeCounter() {\n  let n = 0;\n  return function () {\n    n += 1;\n    return n;\n  };\n}\n// create two counters, print each once\n`,
              tests: [
                { id: 't1', description: 'Prints 1\\n1', hint: 'const a = makeCounter(); const b = makeCounter();', kind: 'stdout', expect: '1\n1' },
              ],
            },
          ],
        },
        {
          id: 'js-u-async',
          title: 'Promises & async',
          summary: 'Wait for work without blocking the story.',
          runner: 'javascript',
          sections: [
            {
              heading: 'async / await',
              body: `async functions return Promises. await pauses until a Promise settles, then continues with the value.\n\nFor this lab we simulate delay with a tiny Promise.resolve helper.`,
            },
            {
              heading: 'Calling async main',
              body: `You still need to call main() at the bottom. Node waits for the async main’s Promise so your print can finish.`,
            },
          ],
          examples: [
            {
              title: 'await a value',
              code: `function later(value) {\n  return Promise.resolve(value);\n}\nasync function main() {\n  const v = await later("done");\n  console.log(v);\n}\nmain();`,
              note: 'Node waits for the async main to finish printing.',
            },
            {
              title: 'Two awaits',
              code: `function later(value) {\n  return Promise.resolve(value);\n}\nasync function main() {\n  const a = await later("uni");\n  const b = await later("versity");\n  console.log(a + b);\n}\nmain();`,
              note: 'Each await gets a settled value.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Await university',
              prompt: 'await later("university") and print it.',
              difficulty: 1,
              starterCode: `function later(value) {\n  return Promise.resolve(value);\n}\nasync function main() {\n  // await later("university") and print it\n}\nmain();\n`,
              tests: [
                { id: 't1', description: 'Prints university', hint: 'const v = await later("university"); console.log(v)', kind: 'stdout', expect: 'university' },
                { id: 't2', description: 'Uses await', hint: 'await later(...)', kind: 'codeIncludes', expect: 'await' },
              ],
            },
            {
              id: 'p2',
              title: 'Await ready',
              prompt: 'Await later("ready") and print the result.',
              difficulty: 2,
              starterCode: `function later(value) {\n  return Promise.resolve(value);\n}\nasync function main() {\n}\nmain();\n`,
              tests: [
                { id: 't1', description: 'Prints ready', hint: 'await later("ready")', kind: 'stdout', expect: 'ready' },
                { id: 't2', description: 'Uses await', hint: 'await', kind: 'codeIncludes', expect: 'await' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
