// The response editor, modeled on the WordPress block editor (ported in part from
// beacon-dashboard's TipTap editor, src/scripts/editor). Two configurations:
//
//   createResponseEditor   the letter of response: paragraphs, headings 2-4, lists,
//                          quote, callout, separator. "/" inserts a block (slash.ts);
//                          the block toolbar (mountBlockToolbar) sits over the
//                          selected block.
//   createPromptEditor     Aldo's prompt: one line of text that wraps, plus reference
//                          chips ("@" the Response Library, "#" a comment) (reference.ts).
//
// Content is TipTap JSON. A response saved before it had a document is built from its
// paragraphs (paragraphsDoc); every surface that reads text gets the blocks back as
// paragraphs (docParagraphs).
import { Editor, type JSONContent } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import { Placeholder } from '@tiptap/extensions';
import { BLOCK_TYPES, Callout, glyph, typeOf } from './blocks';
import { Slash, openSlash } from './slash';
import { Reference } from './reference';
import { NoteMark, notesPlugin } from './notes';

const isWebHref = (url: string) => /^https?:\/\//i.test(url);

export const paragraphsDoc = (body: string[]): JSONContent => ({
  type: 'doc',
  content: body.map((t) => ({ type: 'paragraph', content: t ? [{ type: 'text', text: t }] : [] })),
});

/** Each top-level block's text (a list's items each on their own line). */
export const docParagraphs = (editor: Editor): string[] => {
  const out: string[] = [];
  editor.state.doc.forEach((n) => {
    if (n.type.name === 'horizontalRule') return;
    const t = n.textBetween(0, n.content.size, '\n').trim();
    if (t) out.push(t);
  });
  return out;
};

export function createResponseEditor(
  el: HTMLElement,
  opts: { content: JSONContent; label: string; onUpdate?: (editor: Editor) => void; isResolved?: (noteId: string) => boolean },
): Editor {
  const editor = new Editor({
    element: el,
    content: opts.content,
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3, 4] },
        code: false,
        codeBlock: false,
        link: { openOnClick: false, autolink: true, defaultProtocol: 'https', isAllowedUri: isWebHref },
      }),
      Callout,
      NoteMark,
      Slash,
      Placeholder.configure({ placeholder: 'Type / to choose a block' }),
    ],
    editorProps: { attributes: { class: 'bcn-doc', 'aria-label': opts.label, role: 'textbox', 'aria-multiline': 'true' } },
    // A transaction marked bcn-quiet (notes placed on load) is not an edit.
    onUpdate: ({ editor, transaction }) => {
      if (!transaction.getMeta('bcn-quiet')) opts.onUpdate?.(editor as Editor);
    },
  });
  editor.registerPlugin(notesPlugin(opts.isResolved ?? (() => false)));
  return editor;
}

export function createPromptEditor(
  el: HTMLElement,
  opts: { label: string; placeholder: string; onUpdate?: (editor: Editor) => void; onSubmit?: () => void },
): Editor {
  return new Editor({
    element: el,
    extensions: [
      StarterKit.configure({
        heading: false, bulletList: false, orderedList: false, listItem: false, listKeymap: false,
        blockquote: false, codeBlock: false, code: false, horizontalRule: false, link: false,
      }),
      Reference,
      Placeholder.configure({ placeholder: opts.placeholder }),
    ],
    editorProps: {
      attributes: { class: 'bcn-prompt', 'aria-label': opts.label, role: 'textbox', 'aria-multiline': 'true' },
      handleKeyDown: (_view, e) => {
        if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          opts.onSubmit?.();
          return true;
        }
        return false;
      },
    },
    onUpdate: ({ editor }) => opts.onUpdate?.(editor as Editor),
  });
}

// ---- the block toolbar ---------------------------------------------------------------
// One toolbar, over the selected top-level block (not on hover), hidden while typing and
// on an empty paragraph, where the + inserter shows instead. Segments, WordPress's
// order: the block's type (a switcher), move up / down, inline Bold / Italic (a pasted
// address links itself),
// then Options (duplicate, delete). Its controls are esa-buttons rendered at build time
// in <BcnResponseEditor>; their glyphs are swapped in here.

type Menu = HTMLElement & { items: { label: string; action?: string; variant?: 'default' | 'danger'; divider?: boolean }[] };

export function mountBlockToolbar(editor: Editor, opts: { bar: HTMLElement; plus: HTMLElement; pane: HTMLElement }): void {
  const { bar, plus, pane } = opts;
  const $ = <T extends HTMLElement = HTMLElement>(s: string) => bar.querySelector<T>(s)!;
  const native = (el: Element) => (el.matches('button') ? el : el.querySelector('button')) as HTMLButtonElement;

  // Glyphs onto the build-time buttons.
  for (const b of bar.querySelectorAll<HTMLElement>('[data-glyph]')) {
    const svg = native(b).querySelector('svg');
    if (svg) svg.outerHTML = glyph(b.dataset.glyph!, 16);
  }
  const typeMenu = $<Menu>('[data-bt-type]');
  typeMenu.items = BLOCK_TYPES.map((t) => ({ label: t.label, action: t.id }));
  const moreMenu = $<Menu>('[data-bt-more]');
  moreMenu.items = [
    { label: 'Add Block Before', action: 'before' },
    { label: 'Add Block After', action: 'after' },
    { label: 'Duplicate', action: 'duplicate' },
    { divider: true, label: '' },
    { label: 'Delete', action: 'delete', variant: 'danger' },
  ];

  let typing = false;

  /** The top-level block holding the selection: its position and node. */
  const current = () => {
    const { $from } = editor.state.selection;
    if ($from.depth < 1) return null;
    const pos = $from.before(1);
    return { pos, node: editor.state.doc.nodeAt(pos)!, index: $from.index(0) };
  };

  const position = () => {
    const c = current();
    const empty = c && c.node.type.name === 'paragraph' && c.node.content.size === 0;
    const focused = editor.isFocused || bar.contains(document.activeElement) || !!document.querySelector('.bcn-slash');
    if (!c || !focused) {
      bar.hidden = true;
      plus.hidden = true;
      return;
    }
    const dom = editor.view.nodeDOM(c.pos) as HTMLElement | null;
    if (!dom) return;
    const box = pane.getBoundingClientRect();
    const r = dom.getBoundingClientRect();
    // The + at an empty line; the toolbar over any other block.
    plus.hidden = !empty;
    plus.style.top = `${r.top - box.top + r.height / 2}px`;
    bar.hidden = !!empty || typing;
    if (!bar.hidden) {
      bar.style.top = `${r.top - box.top - bar.offsetHeight - 6}px`;
      // Type button shows the block's own glyph.
      const t = typeOf(editor);
      const tb = native($('[data-bt-type-btn]'));
      tb.setAttribute('aria-label', `${t.label}: change block type`);
      tb.title = t.label;
      const svg = tb.querySelector('svg');
      if (svg) svg.outerHTML = glyph(t.icon, 16);
      native($('[data-bt-up]')).disabled = c.index === 0;
      native($('[data-bt-down]')).disabled = c.index === editor.state.doc.childCount - 1;
      for (const [sel, mark] of [['[data-bt-bold]', 'bold'], ['[data-bt-italic]', 'italic']] as const) {
        const b = native($(sel));
        const on = editor.isActive(mark);
        b.setAttribute('aria-pressed', String(on));
        b.closest('.esa-button')?.classList.toggle('esa-button--active', on);
      }
    }
  };

  const move = (dir: -1 | 1) => {
    const c = current();
    if (!c) return;
    const doc = editor.state.doc;
    const to = c.index + dir;
    if (to < 0 || to >= doc.childCount) return;
    const other = doc.child(to);
    const otherPos = dir === -1 ? c.pos - other.nodeSize : c.pos + c.node.nodeSize;
    const offset = editor.state.selection.from - c.pos;
    const tr = editor.state.tr.delete(c.pos, c.pos + c.node.nodeSize);
    const insertAt = dir === -1 ? otherPos : otherPos - c.node.nodeSize + other.nodeSize;
    tr.insert(insertAt, c.node);
    editor.view.dispatch(tr);
    editor.chain().focus().setTextSelection(insertAt + offset).scrollIntoView().run();
  };

  const insertParagraph = (after: boolean) => {
    const c = current();
    if (!c) return;
    const at = after ? c.pos + c.node.nodeSize : c.pos;
    editor.chain().focus().insertContentAt(at, { type: 'paragraph' }).setTextSelection(at + 1).run();
  };

  // Keep the selection while the toolbar is used.
  bar.addEventListener('mousedown', (e) => {
    if ((e.target as Element).closest('button')) e.preventDefault();
  });
  typeMenu.addEventListener('menu-action', (e) => {
    BLOCK_TYPES.find((t) => t.id === (e as CustomEvent<string>).detail)?.set(editor);
  });
  moreMenu.addEventListener('menu-action', (e) => {
    const a = (e as CustomEvent<string>).detail;
    const c = current();
    if (!c) return;
    if (a === 'before') insertParagraph(false);
    else if (a === 'after') insertParagraph(true);
    else if (a === 'duplicate') editor.chain().focus().insertContentAt(c.pos + c.node.nodeSize, c.node.toJSON()).run();
    else if (a === 'delete') {
      const tr = editor.state.tr.delete(c.pos, c.pos + c.node.nodeSize);
      editor.view.dispatch(tr);
      editor.commands.focus();
    }
  });
  native($('[data-bt-up]')).addEventListener('click', () => move(-1));
  native($('[data-bt-down]')).addEventListener('click', () => move(1));
  native($('[data-bt-bold]')).addEventListener('click', () => editor.chain().focus().toggleBold().run());
  native($('[data-bt-italic]')).addEventListener('click', () => editor.chain().focus().toggleItalic().run());
  native(plus).addEventListener('mousedown', (e) => e.preventDefault());
  native(plus).addEventListener('click', () => openSlash(editor));

  // Typing hides the toolbar until the pointer moves or the selection changes by other means.
  editor.view.dom.addEventListener('keydown', (e) => {
    if (e.key.length === 1 || e.key === 'Backspace' || e.key === 'Enter') typing = true;
  });
  addEventListener('mousemove', () => {
    if (typing) {
      typing = false;
      position();
    }
  });
  // Alt+F10 moves focus into the toolbar (WordPress's shortcut).
  editor.view.dom.addEventListener('keydown', (e) => {
    if (e.altKey && e.key === 'F10') {
      e.preventDefault();
      typing = false;
      position();
      native($('[data-bt-type-btn]')).focus();
    }
  });
  bar.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') editor.commands.focus();
  });

  editor.on('selectionUpdate', position);
  editor.on('transaction', () => requestAnimationFrame(position));
  editor.on('focus', position);
  editor.on('blur', () => setTimeout(position, 0));
  document.addEventListener('scroll', () => requestAnimationFrame(position), true);
  addEventListener('resize', position);
}
