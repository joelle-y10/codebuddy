import type { Module } from '../../types'

/** First module: what values are on a page — content, attributes, and lists. */
export const htmlEssentialsModule: Module = {
  id: 'html-essentials',
  title: 'Values on the page',
  summary:
    'Start here: how HTML holds values in content and attributes — text, number-looking values, on/off attributes, and lists.',
  lessons: [
    {
      id: 'html-ess-values',
      title: 'What is a value in HTML?',
      summary: 'HTML doesn’t have programming variables — content and attributes hold values.',
      runner: 'html',
      sections: [
        {
          heading: 'No variables like Python or JavaScript',
          body: `In Python or p5.js you write let score = 10 to store a value in a variable.\n\nHTML doesn’t work that way. You don’t declare variables in HTML.\n\nInstead, values live in two places:\n\n• Text between tags — <p>Ada</p> holds the value Ada\n• Attributes on tags — <a href="https://example.com"> holds the value https://example.com in the href attribute\n\nThink of HTML as describing what’s on the page, not running code.`,
        },
        {
          heading: 'Content vs attributes',
          body: `Content is what you see between opening and closing tags:\n\n<h1>Scoreboard</h1>\n<p>Player: Ada</p>\n\nAttributes are name="value" pairs on a tag:\n\n<a href="https://example.com">Docs</a>\n<input type="number" value="42">\n\nAttribute values are always text, even when they look like numbers: value="42".`,
        },
      ],
      examples: [
        {
          title: 'Content and an attribute',
          code: `<h1>Scoreboard</h1>\n<p>Player: Ada</p>\n<p>Score: 42</p>\n<a href="https://example.com">Docs</a>`,
          note: 'Text between tags is content. href="..." is an attribute value.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Add a heading',
          prompt: 'Add an h1 that says CodeBuddy.',
          difficulty: 1,
          starterCode: `<!-- h1 CodeBuddy -->\n`,
          tests: [
            { id: 't1', description: 'Has h1', hint: '<h1>CodeBuddy</h1>', kind: 'htmlIncludes', expect: '<h1' },
            { id: 't2', description: 'Says CodeBuddy', hint: 'CodeBuddy inside h1', kind: 'htmlIncludes', expect: 'CodeBuddy' },
          ],
        },
        {
          id: 'p2',
          title: 'Add a paragraph',
          prompt: 'Add a p that says Ada.',
          difficulty: 1,
          starterCode: `<!-- p Ada -->\n`,
          tests: [
            { id: 't1', description: 'Has p', hint: '<p>Ada</p>', kind: 'htmlIncludes', expect: '<p' },
            { id: 't2', description: 'Says Ada', hint: 'Ada inside p', kind: 'htmlIncludes', expect: 'Ada' },
          ],
        },
      ],
    },
    {
      id: 'html-ess-text',
      title: 'Text as content',
      summary: 'Text between tags is like a string — words the browser displays.',
      runner: 'html',
      sections: [
        {
          heading: 'Definition: text content',
          body: `In HTML, the text people see is usually between tags: <p>Hello</p>.\n\nThat text is like a string in other languages — characters the browser displays.\n\nTags describe meaning (<h1>, <p>, <strong>). The text inside is the content.`,
        },
        {
          heading: 'What text content isn’t',
          body: `• <p>42</p> is the characters "4" and "2" as text — not a typed number\n• <p>true</p> is the word true as text — not a boolean\n• You can’t do math on HTML content directly; JavaScript reads the text later`,
        },
      ],
      examples: [
        {
          title: 'Text and a number-looking value',
          code: `<h1>Scoreboard</h1>\n<p>Player: Ada</p>\n<p>Score: 42</p>`,
          note: '42 here is text content, not a typed number.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Name and score',
          prompt: 'Add an h1 CodeBuddy, a p with Ada, and a p with 42.',
          difficulty: 1,
          starterCode: `<!-- h1, then two paragraphs -->\n`,
          tests: [
            { id: 't1', description: 'Has h1 CodeBuddy', hint: '<h1>CodeBuddy</h1>', kind: 'htmlIncludes', expect: 'CodeBuddy' },
            { id: 't2', description: 'Mentions Ada', hint: 'Paragraph with Ada', kind: 'htmlIncludes', expect: 'Ada' },
            { id: 't3', description: 'Mentions 42', hint: 'Include 42 in content', kind: 'htmlIncludes', expect: '42' },
          ],
        },
        {
          id: 'p2',
          title: 'True as text',
          prompt: 'Add a p that says true.',
          difficulty: 1,
          starterCode: `<!-- p with true -->\n`,
          tests: [
            { id: 't1', description: 'Has a paragraph', hint: '<p>true</p>', kind: 'htmlIncludes', expect: '<p' },
            { id: 't2', description: 'Contains true', hint: 'Write true inside the paragraph', kind: 'htmlIncludes', expect: 'true' },
          ],
        },
      ],
    },
    {
      id: 'html-ess-attributes',
      title: 'Attributes & boolean attributes',
      summary: 'Attributes attach values to tags — like href="..." or checked.',
      runner: 'html',
      sections: [
        {
          heading: 'Definition: attribute',
          body: `Attributes look like name="value" on an opening tag:\n\n<a href="https://example.com">Docs</a>\n<input type="number" value="42">\n\nThey attach extra data: links, image sources, labels, ids. Values are always text, even when they look like numbers.`,
        },
        {
          heading: 'Definition: boolean-style attributes',
          body: `Some attributes are on/off only: checked, disabled, required, open.\n\nWrite them as <input type="checkbox" checked> or checked="checked".\n\nPresence means on; absence means off. That’s the HTML cousin of a boolean — but it’s markup, not a JavaScript true/false value.\n\nDon’t write checked="false" — that still means checked! Remove the attribute to mean off.`,
        },
      ],
      examples: [
        {
          title: 'Checkbox and number input',
          code: `<label>\n  <input type="checkbox" checked />\n  Ready\n</label>\n<label>\n  Score\n  <input type="number" value="42" />\n</label>`,
          note: 'checked is on/off; value holds text the browser may treat as a number.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Link with href',
          prompt: 'Make a link to https://example.com that says Docs.',
          difficulty: 1,
          starterCode: `<!-- <a href="...">Docs</a> -->\n`,
          tests: [
            { id: 't1', description: 'Has an anchor', hint: '<a href=...>', kind: 'htmlIncludes', expect: '<a' },
            { id: 't2', description: 'Uses example.com', hint: 'href to example.com', kind: 'htmlIncludes', expect: 'example.com' },
            { id: 't3', description: 'Says Docs', hint: 'Link text Docs', kind: 'htmlIncludes', expect: 'Docs' },
          ],
        },
        {
          id: 'p2',
          title: 'Checked checkbox',
          prompt: 'Add a checked checkbox.',
          difficulty: 1,
          starterCode: `<!-- input type checkbox checked -->\n`,
          tests: [
            { id: 't1', description: 'Has checkbox', hint: 'type="checkbox"', kind: 'htmlIncludes', expect: 'checkbox' },
            { id: 't2', description: 'Is checked', hint: 'Include checked', kind: 'htmlIncludes', expect: 'checked' },
          ],
        },
        {
          id: 'p3',
          title: 'Disabled button',
          prompt: 'Add a disabled button.',
          difficulty: 1,
          starterCode: `<!-- button with disabled -->\n`,
          tests: [
            { id: 't1', description: 'Has button', hint: '<button', kind: 'htmlIncludes', expect: '<button' },
            { id: 't2', description: 'Is disabled', hint: 'Include disabled', kind: 'htmlIncludes', expect: 'disabled' },
          ],
        },
      ],
    },
    {
      id: 'html-ess-lists',
      title: 'Lists',
      summary: 'A list holds several items in order — like an array.',
      runner: 'html',
      sections: [
        {
          heading: 'Definition: list',
          body: `A list is a collection of items using <ul> (unordered) or <ol> (ordered) wrapping <li> items:\n\n<ul>\n  <li>Apple</li>\n  <li>Banana</li>\n</ul>\n\nEach <li> is one item — like one element in an array.`,
        },
        {
          heading: 'ul vs ol',
          body: `• <ul> — order doesn’t matter: groceries, features\n• <ol> — order matters: steps in a recipe\n\nList item text is still plain text — <li>42</li> is text "42", not a number.`,
        },
      ],
      examples: [
        {
          title: 'Unordered and ordered lists',
          code: `<h2>Shopping</h2>\n<ul>\n  <li>Milk</li>\n  <li>Eggs</li>\n</ul>\n<h2>Steps</h2>\n<ol>\n  <li>Preheat oven</li>\n  <li>Mix batter</li>\n</ol>`,
          note: 'ul gets bullets; ol gets numbers automatically.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Unordered list',
          prompt: 'Make a ul with Ada and Grace as li items.',
          difficulty: 1,
          starterCode: `<!-- ul with li Ada and li Grace -->\n`,
          tests: [
            { id: 't1', description: 'Has ul', hint: '<ul>', kind: 'htmlIncludes', expect: '<ul' },
            { id: 't2', description: 'Has li items', hint: '<li>...</li>', kind: 'htmlIncludes', expect: '<li' },
            { id: 't3', description: 'Mentions Ada', hint: 'Ada in an li', kind: 'htmlIncludes', expect: 'Ada' },
            { id: 't4', description: 'Mentions Grace', hint: 'Grace in an li', kind: 'htmlIncludes', expect: 'Grace' },
          ],
        },
        {
          id: 'p2',
          title: 'Ordered list',
          prompt: 'Make an ol with Mix, Pour, and Bake as li items.',
          difficulty: 1,
          starterCode: `<!-- ol with three li steps -->\n`,
          tests: [
            { id: 't1', description: 'Has ol', hint: '<ol>', kind: 'htmlIncludes', expect: '<ol' },
            { id: 't2', description: 'Has li items', hint: '<li>...</li>', kind: 'htmlIncludes', expect: '<li' },
            { id: 't3', description: 'Mentions Mix', hint: 'Mix in an li', kind: 'htmlIncludes', expect: 'Mix' },
          ],
        },
        {
          id: 'p3',
          title: 'List with numbers',
          prompt: 'Make a ul with li items 10, 20, and 30.',
          difficulty: 1,
          starterCode: `<!-- ul with numeric li content -->\n`,
          tests: [
            { id: 't1', description: 'Has ul', hint: '<ul>', kind: 'htmlIncludes', expect: '<ul' },
            { id: 't2', description: 'Has 10', hint: '<li>10</li>', kind: 'htmlIncludes', expect: '10' },
            { id: 't3', description: 'Has 20', hint: '<li>20</li>', kind: 'htmlIncludes', expect: '20' },
            { id: 't4', description: 'Has 30', hint: '<li>30</li>', kind: 'htmlIncludes', expect: '30' },
          ],
        },
      ],
    },
  ],
}
