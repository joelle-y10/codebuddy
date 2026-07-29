/** HTML/XML void elements that must not get a closing tag. */
const VOID_TAGS = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
])

type MonacoNs = typeof import('monaco-editor')
type CodeEditor = import('monaco-editor').editor.IStandaloneCodeEditor

/**
 * When the learner types `>` to finish an opening tag like `<h1>`,
 * insert `</h1>` and leave the cursor between the tags.
 */
export function enableHtmlTagAutoClose(editor: CodeEditor, monaco: MonacoNs) {
  return editor.onDidChangeModelContent((event) => {
    if (event.isUndoing || event.isRedoing) return
    const change = event.changes[0]
    if (!change || change.text !== '>') return

    const model = editor.getModel()
    if (!model) return
    const language = model.getLanguageId()
    if (language !== 'html' && language !== 'xml') return

    const pos = editor.getPosition()
    if (!pos) return

    const line = model.getLineContent(pos.lineNumber)
    const before = line.slice(0, pos.column - 1)
    const match = before.match(/<([A-Za-z][\w:-]*)(\s[^<>]*?)?\s*>$/)
    if (!match) return

    const tag = match[1]
    if (VOID_TAGS.has(tag.toLowerCase())) return
    if (match[0].endsWith('/>') || /\/\s*>$/.test(match[0])) return

    const after = line.slice(pos.column - 1)
    if (after.toLowerCase().startsWith(`</${tag.toLowerCase()}`)) return

    const insert = `</${tag}>`
    editor.executeEdits('codebuddy-auto-close-tag', [
      {
        range: new monaco.Range(pos.lineNumber, pos.column, pos.lineNumber, pos.column),
        text: insert,
        forceMoveMarkers: true,
      },
    ])
    editor.setPosition({ lineNumber: pos.lineNumber, column: pos.column })
  })
}
