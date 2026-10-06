// References: what a person points Aldo at while prompting. Typing "@" lists the Response
// Library (ESA's past responses); "#" lists the comments this response answers, by
// their passage number (18.003). Picking one inserts a chip, an inline atom that stores
// its kind and id, never its text, so the prompt carries exactly what was meant.
// (beacon-dashboard editor/mention.ts, generalised to two sources.)
//
// Sources are registered by the page (registerReferences), so the prompt component
// stays generic.
import { Node, type Editor } from '@tiptap/core';
import { Suggestion } from '@tiptap/suggestion';
import { PluginKey } from '@tiptap/pm/state';
import { suggestionMenu, type MenuItem } from './menu';

export type RefKind = 'library' | 'comment';

export interface RefOption {
  id: string;
  /** What the chip and the menu row say. */
  label: string;
  hint?: string;
  icon?: string;
  family?: string;
  /** More words it matches on. */
  keywords?: string;
}

export interface RefSource {
  kind: RefKind;
  char: '@' | '#';
  /** The menu's group head. */
  group: string;
  options(): RefOption[];
}

const SOURCES: RefSource[] = [];
export const registerReferences = (...s: RefSource[]) => {
  for (const x of s) if (!SOURCES.some((y) => y.kind === x.kind)) SOURCES.push(x);
};
export const sources = () => SOURCES;

const labelOf = (kind: string, id: string) =>
  SOURCES.find((s) => s.kind === kind)?.options().find((o) => o.id === id)?.label ?? id;

export const Reference = Node.create({
  name: 'reference',
  group: 'inline',
  inline: true,
  atom: true,
  selectable: false,
  addAttributes() {
    return {
      kind: { default: 'library', parseHTML: (el: HTMLElement) => el.getAttribute('data-ref-kind'), renderHTML: () => ({}) },
      id: { default: null, parseHTML: (el: HTMLElement) => el.getAttribute('data-ref'), renderHTML: () => ({}) },
    };
  },
  parseHTML() {
    return [{ tag: 'span[data-ref]' }];
  },
  renderHTML({ node }) {
    return ['span', { class: 'bcn-ref', 'data-ref': node.attrs.id, 'data-ref-kind': node.attrs.kind }];
  },
  renderText({ node }) {
    const s = SOURCES.find((x) => x.kind === node.attrs.kind);
    return `${s?.char ?? '@'}${labelOf(node.attrs.kind, node.attrs.id)}`;
  },
  addNodeView() {
    return ({ node }) => {
      const dom = document.createElement('span');
      dom.className = 'bcn-ref';
      dom.dataset.ref = String(node.attrs.id ?? '');
      dom.dataset.refKind = String(node.attrs.kind);
      dom.textContent = `${SOURCES.find((x) => x.kind === node.attrs.kind)?.char ?? '@'}${labelOf(node.attrs.kind, node.attrs.id)}`;
      return { dom };
    };
  },
  addProseMirrorPlugins() {
    const editor = this.editor as Editor;
    return (['@', '#'] as const).map((char) =>
      Suggestion<MenuItem>({
        editor,
        pluginKey: new PluginKey(`ref-${char === '@' ? 'at' : 'hash'}`),
        char,
        allowSpaces: false,
        startOfLine: false,
        items: ({ query }) => {
          const q = query.toLowerCase();
          return SOURCES.filter((s) => s.char === char).flatMap((s) =>
            s.options()
              .filter((o) => !q || `${o.label} ${o.keywords ?? ''}`.toLowerCase().split(/\s+/).some((w) => w.startsWith(q)) || o.label.toLowerCase().includes(q))
              .map((o): MenuItem => ({ group: s.group, label: o.label, hint: o.hint, icon: o.icon, family: o.family, value: `${s.kind}|${o.id}` })),
          );
        },
        command: ({ editor: e, range, props }) => {
          if (!props.value) return;
          const [kind, id] = props.value.split('|');
          e.chain().focus().deleteRange(range).insertContent([{ type: 'reference', attrs: { kind, id } }, { type: 'text', text: ' ' }]).run();
        },
        render: () => suggestionMenu(char === '@' ? 'Response Library' : 'Comments'),
      }),
    );
  },
});

/** The references in an editor's document, in order. */
export const referencesIn = (editor: Editor): { kind: RefKind; id: string }[] => {
  const out: { kind: RefKind; id: string }[] = [];
  editor.state.doc.descendants((n) => {
    if (n.type.name === 'reference') out.push({ kind: n.attrs.kind, id: n.attrs.id });
  });
  return out;
};
