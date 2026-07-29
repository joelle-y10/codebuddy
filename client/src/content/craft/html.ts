import type { Module } from '../../types'

export const htmlCraftModule: Module = {
  id: 'html-craft',
  title: 'Markup craft & symbols',
  summary: 'Tags, attributes, and HTML etiquette before building bigger pages.',
  lessons: [
    {
      id: 'html-craft-tags',
      title: 'What < > and tags mean',
      summary: 'Angle brackets wrap element names.',
      runner: 'html',
      sections: [
        {
          heading: 'Opening and closing tags',
          body: `HTML uses tags in angle brackets.\n\n<p>Hello</p>\n\n<p> is the opening tag. </p> is the closing tag (note the slash). Content sits between them.\n\nSome elements are void (no closing tag), like <img> and <br>. In modern HTML you write <img src="..." alt="...">.`,
        },
        {
          heading: 'Attributes',
          body: `Attributes add information inside the opening tag:\n\n<a href="https://example.com">Visit</a>\n\nhref is the attribute name; the quoted value is the URL. Always quote attribute values.`,
        },
        {
          heading: 'Etiquette',
          body: `• Prefer lowercase tag names.\n• Nest tags properly: do not write <p><strong>x</p></strong>.\n• Indent nested elements for readability.\n• Include alt text on images.`,
        },
      ],
      examples: [
        {
          title: 'Nested correctly',
          code: `<p>Learn <strong>HTML</strong> today.</p>`,
          note: 'strong closes before p closes.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Open and close',
          prompt: 'Make an h1 that says CodeBuddy with proper opening and closing tags.',
          difficulty: 1,
          starterCode: `<!-- h1 CodeBuddy -->\n`,
          tests: [
            { id: 't1', description: 'Has h1 CodeBuddy', hint: '<h1>CodeBuddy</h1>', kind: 'htmlIncludes', expect: '<h1>CodeBuddy</h1>' },
          ],
        },
        {
          id: 'p2',
          title: 'Attribute quotes',
          prompt: 'Create a link with href="https://example.com" and text Docs.',
          difficulty: 2,
          starterCode: `<!-- a tag with href -->\n`,
          tests: [
            { id: 't1', description: 'Has href example.com', hint: 'href="https://example.com"', kind: 'codeIncludes', expect: 'href="https://example.com"' },
            { id: 't2', description: 'Link text Docs', hint: '>Docs</a>', kind: 'htmlIncludes', expect: 'Docs' },
          ],
        },
      ],
    },
    {
      id: 'html-craft-comments-structure',
      title: 'Comments & tidy structure',
      summary: 'Notes for humans; clean nesting for browsers.',
      runner: 'html',
      sections: [
        {
          heading: 'Comments',
          body: `<!-- This is an HTML comment -->\n\nBrowsers hide comments from the page. Use them to leave notes for yourself or teammates.`,
        },
        {
          heading: 'Parent and child',
          body: `An element inside another is a child:\n\n<ul>\n  <li>One</li>\n</ul>\n\nIndent children. Close inner tags before outer tags.`,
        },
      ],
      examples: [
        {
          title: 'List structure',
          code: `<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>`,
          note: 'li elements sit inside ul.',
        },
      ],
      practices: [
        {
          id: 'p1',
          title: 'Comment + heading',
          prompt: 'Include an HTML comment and an h2 that says Practice.',
          difficulty: 1,
          starterCode: `<!-- note -->\n`,
          tests: [
            { id: 't1', description: 'Has comment syntax', hint: '<!-- ... -->', kind: 'codeIncludes', expect: '<!--' },
            { id: 't2', description: 'h2 Practice', hint: '<h2>Practice</h2>', kind: 'htmlIncludes', expect: '<h2>Practice</h2>' },
          ],
        },
      ],
    },
  ],
}
