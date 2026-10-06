// Internal notes in the letter: a `note` mark over the span a note is about, numbered
// as footnotes in reading order. An open note's span is tinted and ends in its number;
// a resolved one keeps its mark (so it can be reopened) but shows nothing. The thread
// itself lives in the store and reads below the letter (<BcnResponseNotes>).
import { Mark, mergeAttributes, type Editor } from '@tiptap/core';
import { Plugin, PluginKey } from '@tiptap/pm/state';
import { Decoration, DecorationSet } from '@tiptap/pm/view';
import type { Node as PMNode } from '@tiptap/pm/model';

export const NoteMark = Mark.create({
  name: 'note',
  inclusive: false,
  // Notes may overlap: two marks of this type with different ids can share text.
  excludes: '',
  addAttributes() {
    return {
      id: {
        default: null,
        parseHTML: (el) => el.getAttribute('data-note'),
        renderHTML: (a) => ({ 'data-note': a.id }),
      },
    };
  },
  parseHTML() {
    return [{ tag: 'span[data-note]' }];
  },
  renderHTML({ HTMLAttributes }) {
    return ['span', mergeAttributes({ class: 'bcn-note' }, HTMLAttributes), 0];
  },
});

/** Every note's span in the document: first start, last end, in reading order. */
export function noteRanges(doc: PMNode): Map<string, { from: number; to: number }> {
  const out = new Map<string, { from: number; to: number }>();
  doc.descendants((node, pos) => {
    if (!node.isText) return;
    for (const m of node.marks) {
      if (m.type.name !== 'note' || !m.attrs.id) continue;
      const r = out.get(m.attrs.id);
      const to = pos + node.nodeSize;
      if (r) r.to = Math.max(r.to, to);
      else out.set(m.attrs.id, { from: pos, to });
    }
  });
  return out;
}

const NOTES = new PluginKey('bcn-notes');

/** Footnote numbers and tints, from the document and which notes are resolved. */
export function notesPlugin(isResolved: (id: string) => boolean): Plugin {
  return new Plugin({
    key: NOTES,
    props: {
      decorations(state) {
        const decos: Decoration[] = [];
        let n = 0;
        for (const [id, r] of noteRanges(state.doc)) {
          if (isResolved(id)) {
            decos.push(Decoration.inline(r.from, r.to, { class: 'is-resolved' }, { note: id }));
            continue;
          }
          n += 1;
          const label = String(n);
          decos.push(
            Decoration.widget(
              r.to,
              () => {
                const sup = document.createElement('sup');
                sup.className = 'bcn-note-ref';
                sup.dataset.noteRef = id;
                sup.textContent = label;
                sup.setAttribute('aria-label', `Note ${label}`);
                return sup;
              },
              { side: 1, key: `${id}-${label}` },
            ),
          );
        }
        return DecorationSet.create(state.doc, decos);
      },
    },
  });
}

/** Open notes in reading order (their footnote numbers are index + 1). */
export const openNoteOrder = (editor: Editor, isResolved: (id: string) => boolean) =>
  [...noteRanges(editor.state.doc).keys()].filter((id) => !isResolved(id));

/** Mark each note's quote where it first appears, for notes the document does not carry
 *  yet (seeded notes on a response no one has saved). Returns how many it placed. */
export function placeNotes(editor: Editor, notes: { id: string; quote: string }[]): number {
  const have = noteRanges(editor.state.doc);
  const type = editor.schema.marks.note;
  const tr = editor.state.tr;
  let placed = 0;
  for (const note of notes) {
    if (have.has(note.id)) continue;
    let found = false;
    editor.state.doc.descendants((node, pos) => {
      if (found) return false;
      if (!node.isTextblock) return;
      const i = node.textContent.indexOf(note.quote);
      // Plain-text blocks only: there, text offset + 1 is the document position.
      if (i === -1 || node.childCount !== 1) return;
      tr.addMark(pos + 1 + i, pos + 1 + i + note.quote.length, type.create({ id: note.id }));
      placed += 1;
      found = true;
      return false;
    });
  }
  if (placed) editor.view.dispatch(tr.setMeta('addToHistory', false).setMeta('bcn-quiet', true));
  return placed;
}

/** Re-read the decorations (after a note is resolved or reopened). */
export const refreshNotes = (editor: Editor) => editor.view.dispatch(editor.state.tr.setMeta(NOTES, true));
