// The selection bubble: select text in the letter and a small bar appears under it —
// Bold, Italic, Note, and Aldo. Note and Aldo both open <BcnNoteComposer> under the
// selection, which stays tinted while you write: New note marks the text and hands the
// thread to the host; Revise with Aldo ("shorter", "plainer", "warmer", or anything)
// rewrites only the selected text, in one undoable step, and the bar reports it with
// Undo. Esc or a click away dismisses either.
//
// The prototype runs no model: rewrite() is deterministic (see below). Aldo "works" for
// about a second (the composer and the held text shimmer), then the new text lands
// washed in his tint, which fades (changed.ts). The bubble's controls are esa-button
// rendered at build time in <BcnResponseEditor>.
import type { Editor } from '@tiptap/core';
import { Plugin, PluginKey } from '@tiptap/pm/state';
import { Decoration, DecorationSet } from '@tiptap/pm/view';
import { glyph } from './blocks';
import { mountComposer } from '../note-composer';
import { ALDO_REWRITES, type RewriteIntent } from '../../../data/aldo-rewrites';
import { changedPlugin, flashRange } from './changed';

type Mode = 'tools' | 'compose' | 'done';

// ---- the rewrite --------------------------------------------------------------------
const PLAIN: [RegExp, string][] = [
  [/\bin order to\b/gi, 'to'],
  [/\bapproximately\b/gi, 'about'],
  [/\butiliz(e|es|ed|ing)\b/gi, 'us$1'],
  [/\bprior to\b/gi, 'before'],
  [/\bregarding\b/gi, 'about'],
  [/\badditionally\b/gi, 'also'],
  [/\bcommence(s|d)?\b/gi, 'start$1'],
  [/\bin the event that\b/gi, 'if'],
  [/\bat this time\b/gi, 'now'],
  [/\bsubsequently\b/gi, 'later'],
  [/\bnumerous\b/gi, 'many'],
];
const FORMAL: [RegExp, string][] = [
  [/\bcan't\b/gi, 'cannot'],
  [/\bwon't\b/gi, 'will not'],
  [/\bdon't\b/gi, 'do not'],
  [/\bisn't\b/gi, 'is not'],
  [/\bit's\b/gi, 'it is'],
  [/\babout\b/gi, 'regarding'],
  [/\bget\b/gi, 'obtain'],
  [/\bshow\b/gi, 'demonstrate'],
];
const keepCase = (from: string, to: string) => (/^[A-Z]/.test(from) ? to[0].toUpperCase() + to.slice(1) : to);
const swap = (text: string, map: [RegExp, string][]) =>
  map.reduce((t, [re, to]) => t.replace(re, (m, ...g) => keepCase(m, to.replace('$1', typeof g[0] === 'string' ? g[0] : ''))), text);
const sentences = (t: string) => t.match(/[^.!?]+[.!?]+(\s+|$)|[^.!?]+$/g)?.map((s) => s.trim()) ?? [t];

const intentOf = (a: string): RewriteIntent | null =>
  /short|concise|brief|tight|trim|cut/.test(a) ? 'shorter'
  : /warm|empath|kind|friendl/.test(a) ? 'warmer'
  : /formal|professional/.test(a) ? null
  : 'plainer';

/** Aldo's prewritten rewrite (aldo-rewrites.ts) when the selection is whole sentences
 *  the mock knows; null otherwise. Matched by the known sentences themselves, not by
 *  splitting on periods ("5 a.m." would split). */
const KNOWN = Object.keys(ALDO_REWRITES).sort((a, b) => b.length - a.length);
const fromMock = (text: string, intent: RewriteIntent): string | null => {
  const out: string[] = [];
  let rest = text.replace(/\s+/g, ' ').trim();
  while (rest) {
    const k = KNOWN.find((x) => rest.startsWith(x));
    if (!k) return null;
    if (ALDO_REWRITES[k][intent]) out.push(ALDO_REWRITES[k][intent]);
    rest = rest.slice(k.length).trim();
  }
  return out.length ? out.join(' ') : null;
};

/** The selection, rewritten for the ask: from the mock when it knows the sentences;
 *  otherwise by rule. Shorter keeps the first sentence (or cuts a lone sentence at its
 *  last clause); plainer and more formal swap phrasing; warmer leads with an
 *  acknowledgement; anything else gets the plain-language pass. */
export function rewrite(text: string, ask: string): string {
  const a = ask.toLowerCase();
  const intent = intentOf(a);
  const mocked = intent && fromMock(text.trim(), intent);
  if (mocked) return mocked;
  if (/short|concise|brief|tight|trim|cut/.test(a)) {
    const ss = sentences(text);
    if (ss.length > 1) return ss[0];
    const cut = text.lastIndexOf(', ');
    return cut > text.length / 3 ? `${text.slice(0, cut).trim()}.` : text;
  }
  if (/formal|professional/.test(a)) return swap(text, FORMAL);
  if (/warm|empath|kind|friendl/.test(a)) {
    const body = text.charAt(0).toLowerCase() + text.slice(1);
    return `We understand why this matters to you, and ${body}`;
  }
  return swap(text, PLAIN);
}

// The range Aldo is working on stays marked while focus is in the prompt (the native
// selection paints only while the editor has focus).
type Held = { from: number; to: number; aldo?: boolean; working?: boolean };
const HELD = new PluginKey<DecorationSet>('bcn-held-selection');
const heldPlugin = () =>
  new Plugin<DecorationSet>({
    key: HELD,
    state: {
      init: () => DecorationSet.empty,
      apply(tr, set) {
        const meta = tr.getMeta(HELD) as Held | null | undefined;
        if (meta === null) return DecorationSet.empty;
        if (meta) {
          const cls = ['bcn-held', meta.aldo && 'is-aldo', meta.working && 'is-working'].filter(Boolean).join(' ');
          return DecorationSet.create(tr.doc, [Decoration.inline(meta.from, meta.to, { class: cls })]);
        }
        return set.map(tr.mapping, tr.doc);
      },
    },
    props: { decorations: (state) => HELD.getState(state) },
  });

// ---- the bubble -----------------------------------------------------------------------
export function mountSelectionBubble(
  editor: Editor,
  opts: { bubble: HTMLElement; pane: HTMLElement; onNote?: (quote: string, text: string) => string | null },
): void {
  const { bubble, pane } = opts;
  const $ = <T extends HTMLElement = HTMLElement>(s: string) => bubble.querySelector<T>(s)!;
  const native = (el: Element) => (el.matches('button') ? el : el.querySelector('button')) as HTMLButtonElement;
  editor.registerPlugin(heldPlugin());
  editor.registerPlugin(changedPlugin());
  const hold = (r: Held | null) => editor.view.dispatch(editor.state.tr.setMeta(HELD, r).setMeta('addToHistory', false));
  let mode: Mode = 'tools';
  let range: { from: number; to: number } | null = null;
  let working = 0;
  const HOLD_MS = matchMedia('(prefers-reduced-motion: reduce)').matches ? 200 : 1100;

  for (const b of bubble.querySelectorAll<HTMLElement>('[data-glyph]')) {
    const svg = native(b).querySelector('svg');
    if (svg) svg.outerHTML = glyph(b.dataset.glyph!, 16);
  }

  const setMode = (m: Mode) => {
    mode = m;
    bubble.dataset.mode = m;
    hold(m === 'compose' && range ? { ...range, aldo: composer?.mode === 'aldo' } : null);
    for (const el of bubble.querySelectorAll<HTMLElement>('[data-sb]')) el.hidden = el.dataset.sb !== m;
  };

  const place = () => {
    if (!range) return;
    const view = editor.view;
    const start = view.coordsAtPos(range.from);
    const end = view.coordsAtPos(range.to);
    const box = pane.getBoundingClientRect();
    const left = Math.min(start.left, end.left) - box.left;
    const max = pane.clientWidth - bubble.offsetWidth;
    bubble.style.left = `${Math.max(0, Math.min(left, max))}px`;
    bubble.style.top = `${end.bottom - box.top + 8}px`;
  };

  const hide = () => {
    clearTimeout(working);
    working = 0;
    bubble.hidden = true;
    range = null;
    composer.close();
    setMode('tools');
  };

  const sync = () => {
    if (mode !== 'tools') return place();
    const { from, to, empty } = editor.state.selection;
    const text = editor.state.doc.textBetween(from, to, ' ').trim();
    if (empty || !text || !editor.isFocused) {
      if (!bubble.contains(document.activeElement)) hide();
      return;
    }
    range = { from, to };
    bubble.hidden = false;
    for (const [sel, mark] of [['[data-sb-bold]', 'bold'], ['[data-sb-italic]', 'italic']] as const) {
      const on = editor.isActive(mark);
      native($(sel)).setAttribute('aria-pressed', String(on));
      $(sel).closest('.esa-button')?.classList.toggle('esa-button--active', on);
    }
    place();
  };

  // Note and Aldo share one composer (BcnNoteComposer): New note, or Revise with Aldo.
  const selected = () => (range ? editor.state.doc.textBetween(range.from, range.to, ' ') : '');
  const compose = (kind: 'note' | 'aldo') => {
    if (!range) return;
    composer.open({ mode: kind, quote: selected() });
    setMode('compose');
    requestAnimationFrame(place);
  };
  // Aldo works for a beat (the composer and the held text shimmer), then the new text
  // replaces the selection in one undoable step and is washed in his tint as it lands.
  const rewriteSelection = (ask: string) => {
    if (!range || working) return;
    const before = selected();
    const after = rewrite(before, ask);
    composer.setWorking(true);
    hold({ ...range, aldo: true, working: true });
    working = window.setTimeout(() => {
      working = 0;
      if (!range) return;
      const { from } = range;
      composer.setWorking(false);
      editor.chain().focus().insertContentAt(range, after).setTextSelection(from + after.length).run();
      range = { from, to: from + after.length };
      composer.close();
      $('[data-sb-result]').textContent = after === before ? 'Aldo found nothing to change' : 'Aldo rewrote the selection';
      setMode('done');
      if (after !== before) flashRange(editor, from, from + after.length);
      place();
    }, HOLD_MS);
  };
  const addNote = (text: string) => {
    if (!range || !opts.onNote) return;
    const id = opts.onNote(selected(), text);
    if (id) editor.chain().focus().setTextSelection(range).setMark('note', { id }).setTextSelection(range.to).run();
    hide();
  };
  const composer = mountComposer($('[data-note-composer]'), {
    submit: (m, text) => (m === 'aldo' ? rewriteSelection(text) : addNote(text)),
    cancel: () => {
      editor.commands.focus();
      hide();
    },
  });

  // Keep the selection while the bubble's buttons are used.
  bubble.addEventListener('mousedown', (e) => {
    if ((e.target as Element).closest('button')) e.preventDefault();
  });
  native($('[data-sb-bold]')).addEventListener('click', () => editor.chain().focus().toggleBold().run());
  native($('[data-sb-italic]')).addEventListener('click', () => editor.chain().focus().toggleItalic().run());
  native($('[data-sb-note]')).addEventListener('click', () => compose('note'));
  native($('[data-sb-aldo]')).addEventListener('click', () => compose('aldo'));
  native($('[data-sb-undo]')).addEventListener('click', () => {
    editor.chain().focus().undo().run();
    hide();
  });
  native($('[data-sb-done]')).addEventListener('click', () => {
    editor.commands.focus();
    hide();
  });
  bubble.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !e.defaultPrevented) {
      e.preventDefault();
      editor.commands.focus();
      hide();
    }
  });
  document.addEventListener('pointerdown', (e) => {
    const t = e.target as Node;
    if (!bubble.hidden && mode !== 'tools' && !bubble.contains(t)) hide();
  });

  editor.on('selectionUpdate', sync);
  editor.on('focus', sync);
  editor.on('blur', () => setTimeout(sync, 0));
  document.addEventListener('scroll', () => !bubble.hidden && requestAnimationFrame(place), true);
  setMode('tools');
}
