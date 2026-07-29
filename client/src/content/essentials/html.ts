import type { Module } from '../../types'

export const htmlEssentialsModule: Module = {
  id: 'html-essentials',
  title: 'Content essentials',
  summary: 'Text, numbers in content, and boolean-style attributes — data ideas on the web.',
  lessons: [
    {
      id: 'html-ess-text',
      title: 'Text as content',
      summary: 'What users read lives between tags — treat it carefully.',
      runner: 'html',
      sections: [
        {
          heading: 'Content vs markup',
          body: `In HTML, the “data” people see is usually text between tags: <p>Hello</p>.\n\nTags describe meaning. The text inside is the content — like a string in other languages.`,
        },
        {
          heading: 'Empty vs filled',
          body: `<p></p> is an empty element (like an empty string). <p>Hello</p> has content.\n\nSome elements are empty by design and use attributes instead of inner text: <img src="..." alt="...">.`,
        },
        {
          heading: 'Numbers are still text in HTML',
          body: `HTML itself doesn’t have int/boolean types. <p>42</p> is text characters "4" and "2". Forms and JavaScript later interpret that text as numbers or booleans.`,
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
      summary: 'Name/value pairs on tags — including on/off attributes.',
      runner: 'html',
      sections: [
        {
          heading: 'Attributes are data on tags',
          body: `Attributes look like name="value" on an opening tag: <a href="https://example.com">.\n\nThey’re how HTML attaches extra data: links, image sources, labels, ids.`,
        },
        {
          heading: 'Boolean-style attributes',
          body: `Some attributes are on/off: checked, disabled, required, open.\n\nWrite them as <input type="checkbox" checked> or checked="checked". Presence means true; absence means false. That’s the HTML cousin of a boolean.`,
        },
        {
          heading: 'type on inputs',
          body: `<input type="text">, type="number", type="checkbox" tell the browser what kind of value to expect — a soft version of “types” before JavaScript runs.`,
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
          title: 'Number input',
          prompt: 'Add <input type="number" value="10">.',
          difficulty: 2,
          starterCode: `<!-- number input with value 10 -->\n`,
          tests: [
            { id: 't1', description: 'type number', hint: 'type="number"', kind: 'htmlIncludes', expect: 'number' },
            { id: 't2', description: 'value 10', hint: 'value="10"', kind: 'htmlIncludes', expect: '10' },
          ],
        },
      ],
    },
  ],
}
