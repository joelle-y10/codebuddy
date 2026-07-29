import type { LanguageTrack } from '../../types'

export const htmlUniversity: LanguageTrack = {
  id: 'html',
  name: 'HTML',
  tagline: 'Accessible structure and richer documents.',
  accent: '#7dffb3',
  tier: 'university',
  modules: [
    {
      id: 'html-u-a11y-docs',
      title: 'Accessible documents',
      summary: 'Landmarks, labels, and solid document heads.',
      lessons: [
        {
          id: 'html-u-a11y',
          title: 'Accessibility basics',
          summary: 'Labels, alt text, and landmarks.',
          runner: 'html',
          sections: [
            {
              heading: 'Why accessibility is structure',
              body: `Accessible pages connect labels to inputs (for / id), give images meaningful alt, and use landmarks like nav and main so assistive tech can jump around the page.`,
            },
            {
              heading: 'for and id pairs',
              body: `Matching for="user" on a label and id="user" on an input is required for proper labeling when the input isn’t nested inside the label.`,
            },
          ],
          examples: [
            {
              title: 'Nav + labeled input',
              code: `<nav aria-label="Primary">\n  <a href="#main">Skip</a>\n</nav>\n<main id="main">\n  <label for="email">Email</label>\n  <input id="email" type="email">\n</main>`,
              note: 'Matching for/id pairs are required for proper labeling.',
            },
            {
              title: 'aria-label on nav',
              code: `<nav aria-label="Site">\n  <a href="/">Home</a>\n</nav>`,
              note: 'Name the landmark when the page has several navs.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Labeled landmark',
              prompt: 'nav with aria-label Site, main with labeled input id=user.',
              difficulty: 1,
              starterCode: `<!-- nav with aria-label Site, main with labeled input id=user -->\n`,
              tests: [
                { id: 't1', description: 'Has nav landmark', hint: '<nav ...>', kind: 'codeIncludes', expect: '<nav' },
                { id: 't2', description: 'aria-label on nav', hint: 'aria-label="Site"', kind: 'codeIncludes', expect: 'aria-label' },
                { id: 't3', description: 'label for=user', hint: 'for="user" and id="user"', kind: 'codeIncludes', expect: 'for="user"' },
                { id: 't4', description: 'input id user', hint: 'id="user"', kind: 'codeIncludes', expect: 'id="user"' },
              ],
            },
            {
              id: 'p2',
              title: 'Main landmark',
              prompt: 'Include a <main> with a heading University.',
              difficulty: 2,
              starterCode: `<!-- main + heading -->\n`,
              tests: [
                { id: 't1', description: 'Has main', hint: '<main>', kind: 'codeIncludes', expect: '<main>' },
                { id: 't2', description: 'Says University', hint: 'University', kind: 'htmlIncludes', expect: 'University' },
              ],
            },
            {
              id: 'p3',
              title: 'Skip-friendly link',
              prompt: 'A link with href="#main" and text Skip.',
              difficulty: 2,
              starterCode: `<!-- skip link -->\n`,
              tests: [
                { id: 't1', description: 'href #main', hint: 'href="#main"', kind: 'codeIncludes', expect: 'href="#main"' },
                { id: 't2', description: 'Text Skip', hint: 'Skip', kind: 'htmlIncludes', expect: 'Skip' },
              ],
            },
          ],
        },
        {
          id: 'html-u-meta',
          title: 'Document head',
          summary: 'title, meta description, charset.',
          runner: 'html',
          sections: [
            {
              heading: 'What belongs in head',
              body: `University pages still need a solid <head>: charset, title, and a meta description for link previews and search snippets.`,
            },
            {
              heading: 'lang on html',
              body: `When you write a full document, <html lang="en"> helps screen readers pick a voice. For this station, include the head tags in your snippet even if the full doctype is optional.`,
            },
          ],
          examples: [
            {
              title: 'Minimal head',
              code: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <title>CodeBuddy University</title>\n  <meta name="description" content="Advanced tracks">\n</head>\n<body><h1>Welcome</h1></body>\n</html>`,
              note: 'For this station, include the head tags in your snippet.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Head essentials',
              prompt: 'Include meta charset, title Advanced HTML, meta description University track.',
              difficulty: 1,
              starterCode: `<!-- Include meta charset, title Advanced HTML, meta description University track -->\n<h1>Advanced HTML</h1>\n`,
              tests: [
                { id: 't1', description: 'Has charset meta', hint: 'meta charset', kind: 'codeIncludes', expect: 'charset' },
                { id: 't2', description: 'Title Advanced HTML', hint: '<title>Advanced HTML</title>', kind: 'codeIncludes', expect: 'Advanced HTML' },
                { id: 't3', description: 'Meta description', hint: 'name="description"', kind: 'codeIncludes', expect: 'name="description"' },
              ],
            },
            {
              id: 'p2',
              title: 'Title only focus',
              prompt: 'Include a <title> that says CodeBuddy University.',
              difficulty: 2,
              starterCode: `<!-- title tag -->\n`,
              tests: [
                { id: 't1', description: 'Has title element', hint: '<title>...', kind: 'codeIncludes', expect: '<title>' },
                { id: 't2', description: 'CodeBuddy University', hint: 'CodeBuddy University', kind: 'htmlIncludes', expect: 'CodeBuddy University' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'html-u-rich',
      title: 'Rich media & forms',
      summary: 'Figures, captions, and enrollment-ready forms.',
      lessons: [
        {
          id: 'html-u-media',
          title: 'Media & figure',
          summary: 'figure, figcaption, video.',
          runner: 'html',
          sections: [
            {
              heading: 'figure groups media',
              body: `<figure> groups media with an optional <figcaption>. Captions describe the media for everyone — not only for sighted users skimming.`,
            },
            {
              heading: 'video',
              body: `<video controls> embeds playable video. Always provide a text alternative nearby when the video carries essential information.`,
            },
          ],
          examples: [
            {
              title: 'Figure with caption',
              code: `<figure>\n  <img src="https://placehold.co/200x120" alt="demo">\n  <figcaption>Campus skyline</figcaption>\n</figure>`,
              note: 'Captions describe the media for everyone.',
            },
            {
              title: 'Video controls',
              code: `<video controls src="clip.mp4">\n  Your browser does not support video.\n</video>`,
              note: 'controls adds play UI.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Campus figure',
              prompt: 'figure with img alt Campus and figcaption CodeBuddy University.',
              difficulty: 1,
              starterCode: `<!-- figure with img alt Campus and figcaption CodeBuddy University -->\n`,
              tests: [
                { id: 't1', description: 'Uses figure', hint: '<figure>', kind: 'codeIncludes', expect: '<figure>' },
                { id: 't2', description: 'Has figcaption', hint: '<figcaption>CodeBuddy University</figcaption>', kind: 'htmlIncludes', expect: 'CodeBuddy University' },
                { id: 't3', description: 'img alt Campus', hint: 'alt="Campus"', kind: 'codeIncludes', expect: 'alt="Campus"' },
              ],
            },
            {
              id: 'p2',
              title: 'Video tag',
              prompt: 'Add a <video> element that includes the controls attribute.',
              difficulty: 2,
              starterCode: `<!-- video with controls -->\n`,
              tests: [
                { id: 't1', description: 'Has video', hint: '<video', kind: 'codeIncludes', expect: '<video' },
                { id: 't2', description: 'Has controls', hint: 'controls', kind: 'codeIncludes', expect: 'controls' },
              ],
            },
          ],
        },
        {
          id: 'html-u-forms',
          title: 'Advanced forms',
          summary: 'fieldset, required, types.',
          runner: 'html',
          sections: [
            {
              heading: 'Grouping controls',
              body: `<fieldset> + <legend> group related controls. Legends name the group for assistive tech.`,
            },
            {
              heading: 'Validation affordances',
              body: `required and input types (email, number) improve validation UX before a server ever sees the data.`,
            },
          ],
          examples: [
            {
              title: 'Profile fieldset',
              code: `<form>\n  <fieldset>\n    <legend>Profile</legend>\n    <label>Age <input type="number" required></label>\n  </fieldset>\n  <button>Save</button>\n</form>`,
              note: 'Legends name the group for assistive tech.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Enrollment form',
              prompt: 'form with fieldset legend Enrollment, required email input, button Enroll.',
              difficulty: 1,
              starterCode: `<!-- form with fieldset legend Enrollment, required email input, button Enroll -->\n`,
              tests: [
                { id: 't1', description: 'Uses fieldset', hint: '<fieldset>', kind: 'codeIncludes', expect: '<fieldset>' },
                { id: 't2', description: 'Legend Enrollment', hint: '<legend>Enrollment</legend>', kind: 'htmlIncludes', expect: 'Enrollment' },
                { id: 't3', description: 'required attribute', hint: 'required on the input', kind: 'codeIncludes', expect: 'required' },
                { id: 't4', description: 'Enroll button', hint: 'Button text Enroll', kind: 'htmlIncludes', expect: 'Enroll' },
              ],
            },
            {
              id: 'p2',
              title: 'Number required',
              prompt: 'An input type="number" that is required, inside a form.',
              difficulty: 2,
              starterCode: `<!-- number + required -->\n`,
              tests: [
                { id: 't1', description: 'type number', hint: 'type="number"', kind: 'codeIncludes', expect: 'type="number"' },
                { id: 't2', description: 'required', hint: 'required', kind: 'codeIncludes', expect: 'required' },
                { id: 't3', description: 'Has form', hint: '<form>', kind: 'codeIncludes', expect: '<form>' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'html-u-projects',
      title: 'Assignments',
      summary: 'Build a full mini-project: a neighborhood scene with a person and a house.',
      lessons: [
        {
          id: 'html-u-scene',
          title: 'Person next to a house',
          summary: 'Use HTML and CSS to draw a simple scene: a house and a person standing beside it.',
          runner: 'html',
          sections: [
            {
              heading: 'Assignment brief',
              body: `Build a small picture with HTML and CSS (inline styles are fine).

You need:
• A house — walls, a roof, a door, and at least one window
• A person standing next to the house — a head and a body

Use class names house and person so the checks can find your scene. Put them side by side (for example with display: flex on a wrapper).`,
            },
            {
              heading: 'Tips',
              body: `• Use <div> boxes with background colors and sizes
• A triangle roof can be a div with borders, or a simple colored rectangle labeled Roof
• The person can be a circle head (border-radius) plus a rectangle body
• Keep it simple — this is about structure and layout, not perfect art`,
            },
          ],
          examples: [
            {
              title: 'Tiny scene sketch',
              code: `<div style="display:flex; align-items:flex-end; gap:24px; padding:20px; background:#cfe8ff; min-height:220px;">
  <div class="house">
    <div style="width:0; height:0; border-left:50px solid transparent; border-right:50px solid transparent; border-bottom:40px solid #8b4513;"></div>
    <div style="width:100px; height:80px; background:#f5d76e; position:relative;">
      <div class="door" style="width:24px; height:36px; background:#6b3e26; position:absolute; bottom:0; left:38px;"></div>
      <div class="window" style="width:22px; height:22px; background:#87ceeb; position:absolute; top:12px; left:12px;"></div>
    </div>
    <p>House</p>
  </div>
  <div class="person">
    <div style="width:28px; height:28px; border-radius:50%; background:#ffcc99; margin:0 auto;"></div>
    <div style="width:36px; height:50px; background:#3b6ea5; margin:4px auto 0;"></div>
    <p>Person</p>
  </div>
</div>`,
              note: 'House on the left, person on the right — both labeled with classes.',
            },
          ],
          practices: [
            {
              id: 'p1',
              title: 'Neighborhood scene',
              prompt:
                'Build a scene with a house (class="house") and a person (class="person") standing next to it. The house needs a door and a window. Use a flex (or similar) layout so they sit side by side. Include the word House and the word Person somewhere in the page (for example in alt text, titles, or visible labels).',
              difficulty: 3,
              starterCode: `<!-- Assignment: person standing next to a house.
  Build a house and a person side by side.
-->
<div style="display:flex; align-items:flex-end; gap:24px; padding:20px; background:#cfe8ff; min-height:220px;">
  <!-- add house (with door + window parts) and person -->
  <!-- add visible labels House and Person -->
</div>
`,
              tests: [
                {
                  id: 't1',
                  description: 'Has a house',
                  hint: 'class="house"',
                  kind: 'codeIncludes',
                  expect: 'class="house"',
                },
                {
                  id: 't2',
                  description: 'Has a person',
                  hint: 'class="person"',
                  kind: 'codeIncludes',
                  expect: 'class="person"',
                },
                {
                  id: 't3',
                  description: 'Has a door element',
                  hint: 'class="door" on a div inside the house',
                  kind: 'codeIncludes',
                  expect: 'class="door"',
                },
                {
                  id: 't4',
                  description: 'Has a window element',
                  hint: 'class="window" on a div inside the house',
                  kind: 'codeIncludes',
                  expect: 'class="window"',
                },
                {
                  id: 't5',
                  description: 'Side-by-side layout',
                  hint: 'display:flex or display: flex',
                  kind: 'codeMatches',
                  expect: 'display\\s*:\\s*flex',
                },
                {
                  id: 't6',
                  description: 'Mentions House',
                  hint: 'Put House in visible text',
                  kind: 'htmlIncludes',
                  expect: 'House',
                },
                {
                  id: 't7',
                  description: 'Mentions Person',
                  hint: 'Put Person in visible text',
                  kind: 'htmlIncludes',
                  expect: 'Person',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
