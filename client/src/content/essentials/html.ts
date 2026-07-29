import type { Module } from '../../types'

/** First module in every coding track: what values are, when to use them, what they can't be. */
export const htmlEssentialsModule: Module = {
  id: 'html-essentials',
  title: 'Values on the page',
  summary:
    'Start here: what content and attributes mean as data on a page — text, number-looking values, on/off attributes, and lists.',
  lessons: [
    {
      id: 'html-ess-text',
      title: 'Text as content',
      summary: 'HTML text content is like a string — define it, when to use it, what it can't be.',
      runner: 'html',
      sections: [
        {
          heading: 'Define: text content',
          body: `In HTML, the "data" people see is usually text between tags: <p>Hello</p>. That text is like a string in other languages — a sequence of characters the browser displays.\n\nTags describe meaning (<h1>, <p>, <strong>). The text inside is the content.`,
        },
        {
          heading: 'When to use text content',
          body: `• Headings, paragraphs, labels — anything the user reads\n• Names, messages, descriptions\n• Digits that are identifiers, not math (phone numbers, zip codes) — keep them as text so leading zeros aren't lost\n\nEmpty element <p></p> is like an empty string "". Some elements are empty by design and use attributes instead: <img src="..." alt="...">.`,
        },
        {
          heading: 'What text content can't be',
          body: `• HTML has no int or boolean types in content — <p>42</p> is the characters "4" and "2", not a typed number.\n• <p>true</p> is the word true as text, not a boolean — the browser won't treat it as on/off.\n• You can't do math on HTML content directly; JavaScript reads the text and converts later.`,
        },
      ],
      examples: [
        {
          title: 'Text and a number-looking value',
          code: `<h1>Scoreboard</h1>\n<p>Player: Ada</p>\n<p>Score: 42</p>`,
          note: '42 here is text content, not a typed int.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Name and score',
          prompt: 'Add an h1 CodeBuddy, a p with Ada, and a p that includes 42.',
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
          prompt: 'Show a paragraph that contains the word true (as text users can read).',
          difficulty: 2,
          starterCode: `<!-- paragraph with true -->\n`,
          tests: [
            { id: 't1', description: 'Has a paragraph', hint: '<p>...</p>', kind: 'htmlIncludes', expect: '<p' },
            { id: 't2', description: 'Contains true', hint: 'Write true inside the paragraph', kind: 'htmlIncludes', expect: 'true' },
          ],
        },
      ],
    },
    {
      id: 'html-ess-attributes',
      title: 'Attributes & boolean attributes',
      summary: 'Boolean-like attributes (checked, disabled) — define them, when to use them, what they aren't.',
      runner: 'html',
      sections: [
        {
          heading: 'Attributes are data on tags',
          body: `Attributes look like name="value" on an opening tag: <a href="https://example.com">.\n\nThey're how HTML attaches extra data: links, image sources, labels, ids. Attribute values are always text strings, even when they look like numbers: value="42".`,
        },
        {
          heading: 'Define: boolean-style attributes',
          body: `Some attributes are on/off only: checked, disabled, required, open, readonly.\n\nWrite them as <input type="checkbox" checked> or checked="checked". Presence means true; absence means false. That's the HTML cousin of a boolean — but it's still markup, not a JavaScript true/false value.`,
        },
        {
          heading: 'When to use boolean attributes',
          body: `• checked — checkbox/radio starts selected\n• disabled — user can't interact\n• required — form field must be filled\n• open — <details> starts expanded\n\nDon't write checked="false" — that still means checked! Remove the attribute to mean off.`,
        },
        {
          heading: 'Number-looking attribute values',
          body: `<input type="number" value="10"> stores "10" as text. The browser may validate or spin buttons, but HTML itself doesn't do math. JavaScript reads .value as a string and converts with Number(...) or parseInt(...) when needed.`,
        },
      ],
      examples: [
        {
          title: 'Checkbox and number input',
          code: `<label>\n  <input type="checkbox" checked />\n  Ready\n</label>\n<label>\n  Score\n  <input type="number" value="42" />\n</label>`,
          note: 'checked is boolean-like; value holds text the browser may treat as a number.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Link with href',
          prompt: 'Make a link with href https://example.com and visible text Docs.',
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
          prompt: 'Add a checkbox input that is checked.',
          difficulty: 2,
          starterCode: `<!-- input type checkbox checked -->\n`,
          tests: [
            { id: 't1', description: 'Has checkbox', hint: 'type="checkbox"', kind: 'htmlIncludes', expect: 'checkbox' },
            { id: 't2', description: 'Is checked', hint: 'Include checked', kind: 'htmlIncludes', expect: 'checked' },
          ],
        },
        {
          id: 'p3',
          title: 'Disabled button',
          prompt: 'Add a button with the disabled attribute.',
          difficulty: 2,
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
      title: 'Lists (collections)',
      summary: 'Ordered and unordered lists — the HTML equivalent of an array or collection.',
      runner: 'html',
      sections: [
        {
          heading: 'Define: list elements',
          body: `A list is a collection of items using <ul> (unordered) or <ol> (ordered) wrapping <li> items:\n\n<ul>\n  <li>Apple</li>\n  <li>Banana</li>\n</ul>\n\nEach <li> is one item — like one element in an array. The browser numbers or bullets them for you.`,
        },
        {
          heading: 'When to use ul vs ol',
          body: `• <ul> — order doesn't matter: groceries, features, nav links\n• <ol> — order matters: steps in a recipe, rankings, instructions\n\nUse lists when you have many related items of the same kind — not separate paragraphs with manual "1." "2." typed in.`,
        },
        {
          heading: 'What not to do',
          body: `• Don't put <li> floating outside <ul> or <ol> — always wrap items in a list container.\n• Don't use lists for layout only — they're for grouped content.\n• List item text is still plain text (or inline markup) — <li>42</li> is text "42", not a number.\n• Empty list <ul></ul> is valid but usually you want at least one <li>.`,
        },
      ],
      examples: [
        {
          title: 'Unordered and ordered lists',
          code: `<h2>Shopping</h2>\n<ul>\n  <li>Milk</li>\n  <li>Eggs</li>\n</ul>\n<h2>Steps</h2>\n<ol>\n  <li>Preheat oven</li>\n  <li>Mix batter</li>\n  <li>Bake 20 minutes</li>\n</ol>`,
          note: 'ul gets bullets; ol gets numbers automatically.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Unordered list',
          prompt: 'Create a ul with two li items: Ada and Grace.',
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
          prompt: 'Create an ol with three numbered steps: Mix, Pour, Bake.',
          difficulty: 2,
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
          prompt: 'Create a ul with li items showing 10, 20, and 30 (as text content).',
          difficulty: 2,
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
