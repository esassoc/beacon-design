// The response document's blocks, the WordPress block editor's core set for a letter of
// response: paragraph, headings 2 to 4, lists, quote, callout, separator. Each block type
// has a glyph (Lucide paths, the beacon-dashboard icons.ts set) used by the inserter, the
// toolbar's type switcher and its badge.
import { Node, type Editor } from '@tiptap/core';

const svg = (paths: string, size = 16) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

export const LUCIDE: Record<string, string> = {
  paragraph: '<path d="M13 4v16"/><path d="M17 4v16"/><path d="M19 4H9.5a4.5 4.5 0 0 0 0 9H13"/>',
  heading2: '<path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"/>',
  heading3: '<path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"/><path d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"/>',
  heading4: '<path d="M12 18V6"/><path d="M17 10v3a1 1 0 0 0 1 1h3"/><path d="M21 10v8"/><path d="M4 12h8"/><path d="M4 18V6"/>',
  bulletList: '<path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/>',
  orderedList: '<path d="M10 12h11"/><path d="M10 18h11"/><path d="M10 6h11"/><path d="M4 10h2"/><path d="M4 6h1v4"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/>',
  quote: '<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>',
  callout: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  rule: '<path d="M5 12h14"/>',
  library: '<path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/>',
  bold: '<path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/>',
  italic: '<line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/>',
  more: '<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>',
  message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
};
export const glyph = (name: string, size = 16) => svg(LUCIDE[name] ?? LUCIDE.paragraph, size);

/** A block type a person can turn a block into (the toolbar's type switcher). */
export interface BlockType {
  id: string;
  label: string;
  icon: string;
  is(editor: Editor): boolean;
  set(editor: Editor): void;
}

export const BLOCK_TYPES: BlockType[] = [
  { id: 'paragraph', label: 'Paragraph', icon: 'paragraph', is: (e) => e.isActive('paragraph') && !e.isActive('bulletList') && !e.isActive('orderedList') && !e.isActive('blockquote') && !e.isActive('callout'), set: (e) => e.chain().focus().clearNodes().setParagraph().run() },
  { id: 'h2', label: 'Heading 2', icon: 'heading2', is: (e) => e.isActive('heading', { level: 2 }), set: (e) => e.chain().focus().clearNodes().setHeading({ level: 2 }).run() },
  { id: 'h3', label: 'Heading 3', icon: 'heading3', is: (e) => e.isActive('heading', { level: 3 }), set: (e) => e.chain().focus().clearNodes().setHeading({ level: 3 }).run() },
  { id: 'h4', label: 'Heading 4', icon: 'heading4', is: (e) => e.isActive('heading', { level: 4 }), set: (e) => e.chain().focus().clearNodes().setHeading({ level: 4 }).run() },
  { id: 'bullets', label: 'Bullet List', icon: 'bulletList', is: (e) => e.isActive('bulletList'), set: (e) => e.chain().focus().clearNodes().toggleBulletList().run() },
  { id: 'numbers', label: 'Numbered List', icon: 'orderedList', is: (e) => e.isActive('orderedList'), set: (e) => e.chain().focus().clearNodes().toggleOrderedList().run() },
  { id: 'quote', label: 'Quote', icon: 'quote', is: (e) => e.isActive('blockquote'), set: (e) => e.chain().focus().clearNodes().toggleBlockquote().run() },
  { id: 'callout', label: 'Callout', icon: 'callout', is: (e) => e.isActive('callout'), set: (e) => e.chain().focus().clearNodes().wrapIn('callout').run() },
];

export const typeOf = (editor: Editor): BlockType => BLOCK_TYPES.find((t) => t.is(editor)) ?? BLOCK_TYPES[0];

/** Callout: WordPress's Group with a background, for a passage set off from the letter
 *  (a commitment, a date). Backspace at the start of its first block lifts it out.
 *  (beacon-dashboard editor/callout.ts, one colour.) */
export const Callout = Node.create({
  name: 'callout',
  group: 'block',
  content: '(paragraph | heading | bulletList | orderedList | blockquote)+',
  defining: true,
  parseHTML() {
    return [{ tag: 'div[data-callout]' }];
  },
  renderHTML() {
    return ['div', { class: 'bcn-callout', 'data-callout': '' }, 0];
  },
  addKeyboardShortcuts() {
    return {
      Backspace: ({ editor }) => {
        const { $from, empty } = editor.state.selection;
        if (!empty || $from.parentOffset !== 0 || $from.depth < 2) return false;
        if ($from.node(-1).type.name !== this.name || $from.index(-1) !== 0) return false;
        return editor.commands.lift(this.name);
      },
    };
  },
});
