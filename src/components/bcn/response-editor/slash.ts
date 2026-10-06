// The "/" inserter: typing "/" opens the block list at the caret, filtered as you type
// (label first, then a word in it, then a keyword, then anywhere), the first match
// active so Enter takes it. The block inserters (the + at an empty line, the toolbar's
// Add block) open the same menu through openSlash(): a "/" typed for the reader and
// taken back out if nothing is picked; opened that way the menu heads its list with a
// search field, as WordPress's inserter does. (beacon-dashboard editor/slash.ts.)
//
// Below the blocks, the Response Library: ESA's past responses, anonymized. Picking one
// inserts its paragraphs as blocks, the way WordPress inserts a pattern, to be edited
// in place.
import { Extension, type ChainedCommands, type Editor, type Range } from '@tiptap/core';
import { Suggestion } from '@tiptap/suggestion';
import { PluginKey } from '@tiptap/pm/state';
import { PAST_RESPONSES } from '../../../data/comments';
import { glyph } from './blocks';
import { OPENED, setTakeBack, suggestionMenu, type MenuItem } from './menu';

interface SlashItem {
  id: string;
  label: string;
  group?: string;
  hint?: string;
  icon: string;
  keywords?: string[];
  run(chain: ChainedCommands, editor: Editor): ChainedCommands;
}

const ITEMS: SlashItem[] = [
  { id: 'p', label: 'Paragraph', icon: 'paragraph', keywords: ['text', 'body'], run: (c) => c.setParagraph() },
  { id: 'h2', label: 'Heading 2', hint: '##', icon: 'heading2', keywords: ['h2', 'heading', 'title', 'section'], run: (c) => c.setNode('heading', { level: 2 }) },
  { id: 'h3', label: 'Heading 3', hint: '###', icon: 'heading3', keywords: ['h3', 'heading', 'subheading'], run: (c) => c.setNode('heading', { level: 3 }) },
  { id: 'h4', label: 'Heading 4', hint: '####', icon: 'heading4', keywords: ['h4', 'heading', 'subheading', 'minor'], run: (c) => c.setNode('heading', { level: 4 }) },
  { id: 'bullets', label: 'Bullet List', hint: '-', icon: 'bulletList', keywords: ['ul', 'unordered', 'list'], run: (c) => c.toggleBulletList() },
  { id: 'numbers', label: 'Numbered List', hint: '1.', icon: 'orderedList', keywords: ['ol', 'ordered', 'list', 'numbers'], run: (c) => c.toggleOrderedList() },
  { id: 'quote', label: 'Quote', hint: '>', icon: 'quote', keywords: ['blockquote', 'citation', 'comment'], run: (c) => c.toggleBlockquote() },
  { id: 'callout', label: 'Callout', icon: 'callout', keywords: ['note', 'box', 'notice', 'commitment'], run: (c) => c.wrapIn('callout') },
  { id: 'separator', label: 'Separator', hint: '---', icon: 'rule', keywords: ['divider', 'rule', 'line', 'hr'], run: (c) => c.setHorizontalRule() },
];

const year = (ym: string) => ym.slice(0, 4);
const LIBRARY: SlashItem[] = PAST_RESPONSES.map((p) => ({
  id: `lib-${p.id}`,
  label: p.title,
  group: 'Response Library',
  hint: year(p.issued),
  icon: 'library',
  keywords: ['library', 'past', 'pattern', ...p.source.toLowerCase().split(/\W+/)],
  run: (c) => c.insertContent(p.body.map((t) => ({ type: 'paragraph', content: [{ type: 'text', text: t }] }))),
}));

function rank(x: SlashItem, q: string): number | null {
  if (!q) return 0;
  const label = x.label.toLowerCase();
  if (label.startsWith(q)) return 0;
  if (label.split(/\s+/).some((w) => w.startsWith(q))) return 1;
  const kw = (x.keywords ?? []).map((k) => k.toLowerCase());
  if (kw.some((k) => k.startsWith(q))) return 2;
  if (label.includes(q)) return 3;
  if (kw.some((k) => k.includes(q))) return 4;
  return null;
}

function itemsFor(query: string): MenuItem[] {
  const q = query.toLowerCase().trim();
  return [...ITEMS, ...LIBRARY]
    .map((x, i) => ({ x, i, r: rank(x, q) }))
    .filter((m) => m.r != null)
    .sort((a, b) => (q ? a.r! - b.r! : 0) || a.i - b.i)
    .map(({ x }): MenuItem => ({ group: q && !x.group ? '' : (x.group ?? 'Blocks'), label: x.label, hint: x.hint, icon: glyph(x.icon), run: x.run }));
}

function command({ editor, range, props }: { editor: Editor; range: Range; props: MenuItem }): void {
  OPENED.delete(editor);
  const chain = editor.chain().focus().deleteRange(range);
  props.run?.(chain, editor).run();
}

/** Open the menu at the caret, as typing "/" would: the block inserters. */
export function openSlash(editor: Editor): void {
  if (!editor.isEditable) return;
  const at = editor.state.selection.from;
  OPENED.set(editor, at);
  editor.chain().focus().command(({ tr }) => {
    tr.insertText('/', at);
    tr.setMeta('addToHistory', false);
    return true;
  }).run();
}

/** The menu closed: take out the "/" an inserter typed, unless something was picked or typed after it. */
setTakeBack((editor: Editor) => {
  const at = OPENED.get(editor);
  OPENED.delete(editor);
  if (at == null || editor.isDestroyed) return;
  const doc = editor.state.doc;
  if (at + 1 > doc.content.size || doc.textBetween(at, at + 1) !== '/') return;
  const $a = doc.resolve(at);
  if ($a.parent.textBetween($a.parentOffset, Math.min($a.parent.content.size, $a.parentOffset + 2)) !== '/') return;
  editor.view.dispatch(editor.state.tr.delete(at, at + 1).setMeta('addToHistory', false));
});

export const Slash = Extension.create({
  name: 'slash',
  // Ahead of every keymap: while the menu is open, Enter, Tab and the arrows pick from it.
  priority: 1000,
  addProseMirrorPlugins() {
    return [
      Suggestion<MenuItem>({
        editor: this.editor,
        pluginKey: new PluginKey('slash'),
        char: '/',
        allowSpaces: true,
        startOfLine: false,
        items: ({ query }) => itemsFor(query),
        command,
        render: () => suggestionMenu('Insert', (q) => itemsFor(q)),
      }),
    ];
  },
});
