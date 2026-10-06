// What Aldo changed: after a rewrite, the new text is washed in Aldo's tint, which fades
// over a couple of seconds (CSS: .bcn-changed / .bcn-changed-block). Ranges follow edits
// made while the wash is up; the wash clears itself.
import type { Editor } from '@tiptap/core';
import { Plugin, PluginKey } from '@tiptap/pm/state';
import { Decoration, DecorationSet } from '@tiptap/pm/view';

const CHANGED = new PluginKey<DecorationSet>('bcn-changed');
const FADE_MS = 2800;

export const changedPlugin = () =>
  new Plugin<DecorationSet>({
    key: CHANGED,
    state: {
      init: () => DecorationSet.empty,
      apply(tr, set) {
        const meta = tr.getMeta(CHANGED) as DecorationSet | null | undefined;
        if (meta === null) return DecorationSet.empty;
        if (meta) return meta;
        return set.map(tr.mapping, tr.doc);
      },
    },
    props: { decorations: (state) => CHANGED.getState(state) },
  });

let timer = 0;
const show = (editor: Editor, decos: Decoration[]) => {
  const tr = editor.state.tr.setMeta(CHANGED, DecorationSet.create(editor.state.doc, decos)).setMeta('addToHistory', false);
  editor.view.dispatch(tr);
  clearTimeout(timer);
  timer = window.setTimeout(() => {
    if (!editor.isDestroyed) editor.view.dispatch(editor.state.tr.setMeta(CHANGED, null).setMeta('addToHistory', false));
  }, FADE_MS);
};

/** Wash a span of text that Aldo just wrote. */
export const flashRange = (editor: Editor, from: number, to: number) =>
  show(editor, to > from ? [Decoration.inline(from, to, { class: 'bcn-changed' })] : []);

/** Wash every top-level block whose text was not in the letter before (`before`). */
export const flashNewBlocks = (editor: Editor, before: Set<string>) => {
  const decos: Decoration[] = [];
  editor.state.doc.forEach((node, pos) => {
    if (node.textContent && !before.has(node.textContent)) decos.push(Decoration.node(pos, pos + node.nodeSize, { class: 'bcn-changed-block' }));
  });
  show(editor, decos);
};

/** Every top-level block's text, to compare after a rewrite. */
export const blockTexts = (editor: Editor) => {
  const out = new Set<string>();
  editor.state.doc.forEach((n) => out.add(n.textContent));
  return out;
};
