import type { LanguageTrack } from '../types'
import { htmlCraftModule } from './craft/html'
import { htmlEssentialsModule } from './essentials/html'

export const htmlTrack: LanguageTrack = {
  id: 'html',
  name: 'HTML',
  tagline: 'Structure the web with meaning.',
  accent: '#7dffb3',
  tier: 'basic',
  modules: [
    {
      id: 'html-start',
      title: 'Start here: Getting started',
      summary: 'Start here — learn your first tags (headings and paragraphs), then move on to page values and types.',
      lessons: [
        {
          id: 'html-hello',
          title: 'Your first tags',
          summary: 'Headings and paragraphs wrap real content.',
          runner: 'html',
          sections: [
            {
              heading: 'What is HTML?',
              body: `HTML (HyperText Markup Language) describes the structure of a web page. You wrap content in tags so browsers — and assistive tools — know what each piece means.\n\nMost elements have an opening tag <p> and a closing tag </p>. The text in between is the content.`,
            },
            {
              heading: 'Headings and paragraphs',
              body: `<h1> is the main heading of a page (usually one per page). <h2>–<h6> are subheadings. <p> marks a paragraph of body text.\n\nChoose heading levels by outline, not by size. Don’t skip from h1 to h4 just to make text smaller.`,
            },
            {
              heading: 'Comments',
              body: `<!-- like this --> is an HTML comment. Browsers ignore comments; they’re notes for humans (and for yourself in CodeBuddy starters).`,
            },
          ],
          examples: [
            {
              title: 'Heading + paragraph',
              code: `<h1>Hello, CodeBuddy</h1>\n<p>This is a paragraph.</p>`,
              note: 'The preview shows how browsers render your markup.',
            },
            {
              title: 'Two paragraphs',
              code: `<h1>News</h1>\n<p>First idea.</p>\n<p>Second idea.</p>`,
              note: 'Each <p> is its own block of text.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Brand heading',
              prompt: 'Create an h1 that says CodeBuddy and a p that says Let\'s learn HTML.',
              difficulty: 1,
              starterCode: `<!-- Create an h1 that says CodeBuddy and a p that says Let's learn HTML -->\n`,
              tests: [
                { id: 't1', description: 'Has an h1 with CodeBuddy', hint: '<h1>CodeBuddy</h1>', kind: 'htmlIncludes', expect: '<h1>CodeBuddy</h1>' },
                { id: 't2', description: 'Has a paragraph', hint: 'Add a <p>...</p>', kind: 'codeIncludes', expect: '<p>' },
              ],
            },
            {
              id: 'p2',
              title: 'Subheading',
              prompt: 'Add an h1 Welcome and an h2 Lesson 1.',
              difficulty: 2,
              starterCode: `<!-- h1 then h2 -->\n`,
              tests: [
                { id: 't1', description: 'h1 Welcome', hint: '<h1>Welcome</h1>', kind: 'htmlIncludes', expect: '<h1>Welcome</h1>' },
                { id: 't2', description: 'h2 Lesson 1', hint: '<h2>Lesson 1</h2>', kind: 'htmlIncludes', expect: '<h2>Lesson 1</h2>' },
              ],
            },
            {
              id: 'p3',
              title: 'Short article',
              prompt: 'h1 Tips, then two paragraphs: Start small and Practice daily.',
              difficulty: 3,
              starterCode: `<!-- article-shaped markup -->\n`,
              tests: [
                { id: 't1', description: 'Has Tips heading', hint: '<h1>Tips</h1>', kind: 'htmlIncludes', expect: 'Tips' },
                { id: 't2', description: 'Mentions Start small', hint: 'Paragraph with Start small', kind: 'htmlIncludes', expect: 'Start small' },
                { id: 't3', description: 'Mentions Practice daily', hint: 'Paragraph with Practice daily', kind: 'htmlIncludes', expect: 'Practice daily' },
              ],
            },
          ],
        },
        {
          id: 'html-nesting',
          title: 'Nesting and inline emphasis',
          summary: 'Elements inside elements — and when to use strong/em.',
          runner: 'html',
          sections: [
            {
              heading: 'Nesting rules',
              body: `Elements can contain other elements. Close the inner tag before the outer one: <p>Hello <strong>world</strong></p>.\n\nMismatched nesting (closing in the wrong order) confuses browsers and validators.`,
            },
            {
              heading: 'Inline meaning',
              body: `<strong> marks important text (often bold). <em> marks stressed/emphasized text (often italic). Prefer these over styling-only tags when the meaning matters.`,
            },
          ],
          examples: [
            {
              title: 'Emphasis in a paragraph',
              code: `<p>Read the <strong>rules</strong> before you <em>begin</em>.</p>`,
              note: 'strong and em nest inside p.',
            },
            {
              title: 'Line break',
              code: `<p>Line one<br>Line two</p>`,
              note: '<br> is empty — no closing tag needed.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Strong word',
              prompt: 'A paragraph that includes the word Important wrapped in <strong>.',
              difficulty: 1,
              starterCode: `<!-- paragraph with strong -->\n`,
              tests: [
                { id: 't1', description: 'Uses strong', hint: '<strong>Important</strong>', kind: 'codeIncludes', expect: '<strong>' },
                { id: 't2', description: 'Says Important', hint: 'Important inside strong', kind: 'htmlIncludes', expect: 'Important' },
              ],
            },
            {
              id: 'p2',
              title: 'Emphasize gently',
              prompt: 'A paragraph containing <em>please</em>.',
              difficulty: 2,
              starterCode: `<!-- use em -->\n`,
              tests: [
                { id: 't1', description: 'Uses em', hint: '<em>please</em>', kind: 'codeIncludes', expect: '<em>' },
                { id: 't2', description: 'Says please', hint: 'please', kind: 'htmlIncludes', expect: 'please' },
              ],
            },
            {
              id: 'p3',
              title: 'Both together',
              prompt: 'One paragraph that uses both <strong>CodeBuddy</strong> and <em>fun</em>.',
              difficulty: 2,
              starterCode: `<!-- strong + em in one p -->\n`,
              tests: [
                { id: 't1', description: 'Has strong CodeBuddy', hint: '<strong>CodeBuddy</strong>', kind: 'htmlIncludes', expect: 'CodeBuddy' },
                { id: 't2', description: 'Has em', hint: '<em>fun</em>', kind: 'codeIncludes', expect: '<em>' },
              ],
            },
          ],
        },
      ],
    },
    htmlEssentialsModule,
    htmlCraftModule,
    {
      id: 'html-lists-links',
      title: 'Lists & links',
      summary: 'Organize items and connect pages.',
      lessons: [
        {
          id: 'html-lists',
          title: 'Lists',
          summary: 'ul, ol, and li.',
          runner: 'html',
          sections: [
            {
              heading: 'Unordered vs ordered',
              body: `Use <ul> when order doesn’t matter (a shopping list). Use <ol> when sequence matters (steps in a recipe).\n\nEvery list item is an <li>. Put <li> elements inside the list — don’t leave them floating alone.`,
            },
            {
              heading: 'Nesting lists',
              body: `You can put a <ul> inside an <li> for sub-items. Keep indentation tidy so you can see the structure.`,
            },
          ],
          examples: [
            {
              title: 'Skills list',
              code: `<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>`,
              note: 'Indent list items for readability.',
            },
            {
              title: 'Numbered steps',
              code: `<ol>\n  <li>Open the editor</li>\n  <li>Write a tag</li>\n  <li>Preview</li>\n</ol>`,
              note: 'Browsers number the items for you.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Three languages',
              prompt: 'Make a ul with three li items: HTML, JavaScript, Python.',
              difficulty: 1,
              starterCode: `<!-- Make a ul with three li items: HTML, JavaScript, Python -->\n`,
              tests: [
                { id: 't1', description: 'Uses ul', hint: 'Wrap items in <ul>', kind: 'codeIncludes', expect: '<ul>' },
                { id: 't2', description: 'Includes HTML item', hint: '<li>HTML</li>', kind: 'htmlIncludes', expect: 'HTML' },
                { id: 't3', description: 'Includes Python item', hint: '<li>Python</li>', kind: 'htmlIncludes', expect: 'Python' },
              ],
            },
            {
              id: 'p2',
              title: 'Ordered warm-up',
              prompt: 'An ol with items First and Second.',
              difficulty: 2,
              starterCode: `<!-- ordered list -->\n`,
              tests: [
                { id: 't1', description: 'Uses ol', hint: '<ol>', kind: 'codeIncludes', expect: '<ol>' },
                { id: 't2', description: 'Has First', hint: '<li>First</li>', kind: 'htmlIncludes', expect: 'First' },
                { id: 't3', description: 'Has Second', hint: '<li>Second</li>', kind: 'htmlIncludes', expect: 'Second' },
              ],
            },
            {
              id: 'p3',
              title: 'Checklist shape',
              prompt: 'ul with Plan, Build, and Ship as list items.',
              difficulty: 2,
              starterCode: `<!-- three li items -->\n`,
              tests: [
                { id: 't1', description: 'Has Plan', hint: 'Plan', kind: 'htmlIncludes', expect: 'Plan' },
                { id: 't2', description: 'Has Build', hint: 'Build', kind: 'htmlIncludes', expect: 'Build' },
                { id: 't3', description: 'Has Ship', hint: 'Ship', kind: 'htmlIncludes', expect: 'Ship' },
              ],
            },
          ],
        },
        {
          id: 'html-links',
          title: 'Links & images',
          summary: 'a and img connect the web.',
          runner: 'html',
          sections: [
            {
              heading: 'Anchors',
              body: `<a href="https://example.com">Visit Example</a> creates a link. The href is the destination; the text between the tags is what people click.\n\nPrefer descriptive link text (“Learn more about loops”) over bare “click here”.`,
            },
            {
              heading: 'Images',
              body: `<img src="..." alt="..."> shows an image. src is the URL or path. alt describes the image for screen readers and when the image fails to load.\n\nimg is an empty (void) element — no closing tag.`,
            },
          ],
          examples: [
            {
              title: 'Link + image',
              code: `<a href="https://example.com">Visit Example</a>\n<img src="https://placehold.co/120x80" alt="placeholder">`,
              note: 'Always include alt text on images.',
            },
            {
              title: 'Link wrapping text',
              code: `<p>Read the <a href="https://example.com">docs</a> tonight.</p>`,
              note: 'Links nest inside paragraphs cleanly.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Learn more link',
              prompt: 'Link with text Learn more pointing to https://example.com. Also add an img with alt CodeBuddy.',
              difficulty: 1,
              starterCode: `<!-- Link with text Learn more pointing to https://example.com -->\n<!-- Also add an img with alt CodeBuddy -->\n`,
              tests: [
                { id: 't1', description: 'Has a link to example.com', hint: 'href="https://example.com"', kind: 'codeIncludes', expect: 'https://example.com' },
                { id: 't2', description: 'Link text Learn more', hint: '>Learn more</a>', kind: 'htmlIncludes', expect: 'Learn more' },
                { id: 't3', description: 'img has alt CodeBuddy', hint: 'alt="CodeBuddy"', kind: 'codeIncludes', expect: 'alt="CodeBuddy"' },
              ],
            },
            {
              id: 'p2',
              title: 'Home link',
              prompt: 'An anchor whose visible text is Home and href is #top.',
              difficulty: 2,
              starterCode: `<!-- a href="#top" -->\n`,
              tests: [
                { id: 't1', description: 'href #top', hint: 'href="#top"', kind: 'codeIncludes', expect: 'href="#top"' },
                { id: 't2', description: 'Text Home', hint: 'Home', kind: 'htmlIncludes', expect: 'Home' },
              ],
            },
            {
              id: 'p3',
              title: 'Descriptive alt',
              prompt: 'An img with alt Campus skyline (any src is fine).',
              difficulty: 2,
              starterCode: `<!-- img with meaningful alt -->\n`,
              tests: [
                { id: 't1', description: 'Has img', hint: '<img ...>', kind: 'codeIncludes', expect: '<img' },
                { id: 't2', description: 'alt Campus skyline', hint: 'alt="Campus skyline"', kind: 'codeIncludes', expect: 'alt="Campus skyline"' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'html-structure',
      title: 'Page structure',
      summary: 'Semantic landmarks that make pages make sense.',
      lessons: [
        {
          id: 'html-semantic',
          title: 'Semantic layout',
          summary: 'header, main, footer.',
          runner: 'html',
          sections: [
            {
              heading: 'Why semantics?',
              body: `Semantic tags describe meaning: <header>, <main>, <footer>, <section>, <nav>. They help accessibility tools jump to the right regions and help you organize thinking.\n\nA page usually has one <main> for the primary content.`,
            },
            {
              heading: 'A simple skeleton',
              body: `header → branding or title\nmain → the point of the page\nfooter → copyright, secondary links\n\nYou can nest headings and paragraphs inside these landmarks.`,
            },
          ],
          examples: [
            {
              title: 'Three landmarks',
              code: `<header><h1>Site</h1></header>\n<main><p>Content</p></main>\n<footer><p>© CodeBuddy</p></footer>`,
              note: 'One main per page is a good habit.',
            },
            {
              title: 'Section inside main',
              code: `<main>\n  <section>\n    <h2>Intro</h2>\n    <p>Welcome aboard.</p>\n  </section>\n</main>`,
              note: 'section groups related content under a heading.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Landmarks',
              prompt: 'Build header with h1 CodeBuddy, main with a p Welcome, footer with p End.',
              difficulty: 1,
              starterCode: `<!-- Build header with h1 CodeBuddy, main with a p Welcome, footer with p End -->\n`,
              tests: [
                { id: 't1', description: 'Has header', hint: '<header>...</header>', kind: 'codeIncludes', expect: '<header>' },
                { id: 't2', description: 'Has main', hint: '<main>...</main>', kind: 'codeIncludes', expect: '<main>' },
                { id: 't3', description: 'Has footer', hint: '<footer>...</footer>', kind: 'codeIncludes', expect: '<footer>' },
                { id: 't4', description: 'Says Welcome', hint: 'Paragraph Welcome in main', kind: 'htmlIncludes', expect: 'Welcome' },
              ],
            },
            {
              id: 'p2',
              title: 'Nav landmark',
              prompt: 'Add a <nav> containing a link Home.',
              difficulty: 2,
              starterCode: `<!-- nav with a Home link -->\n`,
              tests: [
                { id: 't1', description: 'Has nav', hint: '<nav>', kind: 'codeIncludes', expect: '<nav>' },
                { id: 't2', description: 'Has Home', hint: 'Home', kind: 'htmlIncludes', expect: 'Home' },
              ],
            },
            {
              id: 'p3',
              title: 'Sectioned main',
              prompt: 'main containing a section with h2 Topics and a paragraph Inside.',
              difficulty: 3,
              starterCode: `<!-- main > section > h2 + p -->\n`,
              tests: [
                { id: 't1', description: 'Has section', hint: '<section>', kind: 'codeIncludes', expect: '<section>' },
                { id: 't2', description: 'Has Topics', hint: 'Topics', kind: 'htmlIncludes', expect: 'Topics' },
                { id: 't3', description: 'Has Inside', hint: 'Inside', kind: 'htmlIncludes', expect: 'Inside' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'html-forms-tables',
      title: 'Forms & tables',
      summary: 'Collect input and present structured data.',
      lessons: [
        {
          id: 'html-forms',
          title: 'Forms',
          summary: 'Collect input with labels and buttons.',
          runner: 'html',
          sections: [
            {
              heading: 'Form building blocks',
              body: `<form> wraps controls. <label> describes a field. <input> collects a value. <button> triggers an action.\n\nLabels improve usability and accessibility — click the label text and the input focuses.`,
            },
            {
              heading: 'Input types',
              body: `type="text", type="email", type="password", and others change keyboard and validation behavior on devices. Start with the type that matches the data you want.`,
            },
          ],
          examples: [
            {
              title: 'Name field',
              code: `<form>\n  <label>Name <input name="name"></label>\n  <button type="submit">Go</button>\n</form>`,
              note: 'type="submit" sends the form.',
            },
            {
              title: 'Email field',
              code: `<form>\n  <label>Email <input type="email" name="email"></label>\n  <button>Send</button>\n</form>`,
              note: 'email type hints the mobile keyboard.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Email form',
              prompt: 'form with label Email, input type email, and a button Send.',
              difficulty: 1,
              starterCode: `<!-- form with label Email, input type email, and a button Send -->\n`,
              tests: [
                { id: 't1', description: 'Has a form', hint: '<form>', kind: 'codeIncludes', expect: '<form>' },
                { id: 't2', description: 'Email input', hint: 'type="email"', kind: 'codeIncludes', expect: 'type="email"' },
                { id: 't3', description: 'Send button', hint: 'Button text Send', kind: 'htmlIncludes', expect: 'Send' },
              ],
            },
            {
              id: 'p2',
              title: 'Labeled name',
              prompt: 'A form with a label Name and an input inside or associated with it, plus button Save.',
              difficulty: 2,
              starterCode: `<!-- label Name + input + Save -->\n`,
              tests: [
                { id: 't1', description: 'Has label', hint: '<label>', kind: 'codeIncludes', expect: '<label>' },
                { id: 't2', description: 'Mentions Name', hint: 'Name', kind: 'htmlIncludes', expect: 'Name' },
                { id: 't3', description: 'Save button', hint: 'Save', kind: 'htmlIncludes', expect: 'Save' },
              ],
            },
            {
              id: 'p3',
              title: 'Password field',
              prompt: 'An input with type="password" inside a form.',
              difficulty: 2,
              starterCode: `<!-- password input -->\n`,
              tests: [
                { id: 't1', description: 'type password', hint: 'type="password"', kind: 'codeIncludes', expect: 'type="password"' },
                { id: 't2', description: 'Has form', hint: '<form>', kind: 'codeIncludes', expect: '<form>' },
              ],
            },
          ],
        },
        {
          id: 'html-table',
          title: 'Tables',
          summary: 'Rows, headers, and data cells.',
          runner: 'html',
          sections: [
            {
              heading: 'Table anatomy',
              body: `<table> holds rows. Each <tr> is a row. <th> is a header cell; <td> is a data cell.\n\nPut the header row first so the table reads clearly for everyone.`,
            },
            {
              heading: 'When to use tables',
              body: `Tables are for tabular data — comparisons, schedules, grade sheets. Don’t use tables just to lay out a whole page; that’s what CSS and semantic landmarks are for.`,
            },
          ],
          examples: [
            {
              title: 'Tiny grade sheet',
              code: `<table>\n  <tr><th>Lang</th><th>Level</th></tr>\n  <tr><td>HTML</td><td>1</td></tr>\n</table>`,
              note: 'Keep header row first.',
            },
            {
              title: 'Two data rows',
              code: `<table>\n  <tr><th>Name</th><th>Score</th></tr>\n  <tr><td>Ada</td><td>95</td></tr>\n  <tr><td>Lin</td><td>88</td></tr>\n</table>`,
              note: 'Each tr is one record.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Language table',
              prompt: 'Table with header Language / Fun and one data row JavaScript / High.',
              difficulty: 1,
              starterCode: `<!-- Table with header Language / Fun and one data row JavaScript / High -->\n`,
              tests: [
                { id: 't1', description: 'Has table', hint: '<table>', kind: 'codeIncludes', expect: '<table>' },
                { id: 't2', description: 'Has th Language', hint: '<th>Language</th>', kind: 'htmlIncludes', expect: 'Language' },
                { id: 't3', description: 'Has JavaScript cell', hint: '<td>JavaScript</td>', kind: 'htmlIncludes', expect: 'JavaScript' },
              ],
            },
            {
              id: 'p2',
              title: 'Header cells',
              prompt: 'A table row of headers: Topic and Status.',
              difficulty: 2,
              starterCode: `<!-- th Topic, th Status -->\n`,
              tests: [
                { id: 't1', description: 'Has Topic', hint: 'Topic', kind: 'htmlIncludes', expect: 'Topic' },
                { id: 't2', description: 'Has Status', hint: 'Status', kind: 'htmlIncludes', expect: 'Status' },
                { id: 't3', description: 'Uses th', hint: '<th>', kind: 'codeIncludes', expect: '<th>' },
              ],
            },
            {
              id: 'p3',
              title: 'Two rows of data',
              prompt: 'Table with headers A and B, then a data row 1 and 2.',
              difficulty: 3,
              starterCode: `<!-- headers + one data row -->\n`,
              tests: [
                { id: 't1', description: 'Has table', hint: '<table>', kind: 'codeIncludes', expect: '<table>' },
                { id: 't2', description: 'Has td 1', hint: '<td>1</td>', kind: 'htmlIncludes', expect: '1' },
                { id: 't3', description: 'Has th A', hint: 'A', kind: 'htmlIncludes', expect: 'A' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
