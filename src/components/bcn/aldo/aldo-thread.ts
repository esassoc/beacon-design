// aldo-thread — the keyed renderer for <BcnAldoThread>. It diffs Turn[] into the log: one
// message per Aldo or system turn, two per person turn that has a reply (you, then Aldo).
// A message re-renders only the parts whose signature changed, so a card being edited keeps
// what is typed in it. Turns render in `at` order; ties keep the order given.
//
// Scroll: a person's own turn and its reply always come into view; a new 'check' turn is
// read from its top; anything else new scrolls only when the log was already near its end.
//
// A reply to what the person just said comes in as it is written: a moment of thinking, then
// the words. Stop ends it where it is. The latest message has its keys on hover: Edit on the
// person's (puts it back in the field, taking back what it did), Retry on Aldo's.

import type { ActionButton, AldoAction, Card, ContextRef, TextRun, Turn } from '../../../data/aldo';
import type { Parts, Press } from './aldo-parts';
import { renderCard } from './aldo-card';

export interface Thread<A extends AldoAction = AldoAction> {
  /** Render this conversation. A new `key` (another file, another route) starts clean. */
  render(key: string, turns: Turn<A>[]): void;
  /** Bring a turn's first message to the top of the log. */
  scrollTo(turnId: string): void;
  scrollToEnd(): void;
  /** The message element for a turn, if rendered. */
  element(turnId: string): HTMLElement | undefined;
  /** Write a turn's reply again, as if new (Retry). */
  replay(turnId: string): void;
  /** End the reply coming in, where it is. */
  stop(): void;
}

interface Msg<A extends AldoAction> {
  id: string;
  turnId: string;
  from: 'you' | 'aldo' | 'system';
  via?: string;
  kind?: string;
  who: string;
  text: string;
  /** Wall-clock time, formatted, or empty. */
  time: string;
  acts: ActionButton<A>[];
  cards?: Card<A>[];
  context?: ContextRef[];
  /** The hover keys beyond Copy. */
  keys: ('edit' | 'retry')[];
}

const SIG_REPLACER = (_k: string, v: unknown) => (typeof v === 'function' ? undefined : v);

export function mountThread<A extends AldoAction>(
  list: HTMLElement,
  opts: {
    parts: Parts;
    press: Press<A>;
    scroller?: HTMLElement;
    /** Split Aldo's text into plain runs and references (a commitment, a page) that open
     *  what they name. Without it, text is plain. */
    linkify?: (text: string) => TextRun[];
    /** Edit the person's latest message. Absent: no Edit key. */
    onEdit?: (turnId: string) => void;
    /** Ask again. Absent: no Retry key. */
    onRetry?: (turnId: string) => void;
    /** Whether a turn can still be edited or retried (it is the last thing said). */
    canChange?: (turnId: string) => boolean;
    /** Open a context chip under a message. */
    openRef?: (r: ContextRef) => void;
    /** A reply started or finished coming in; `stop` ends it. */
    onStream?: (on: boolean) => void;
  },
): Thread<A> {
  const { parts, press, linkify } = opts;
  const clock = (iso?: string) => (iso ? new Date(iso).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) : '');
  const fill = (el: HTMLElement, text: string, from: Msg<A>['from']) => {
    if (el.dataset.raw === text) return;
    el.dataset.raw = text;
    if (!linkify || from !== 'aldo') return void (el.textContent = text);
    el.replaceChildren(
      ...linkify(text).map((r) => {
        if (typeof r === 'string') return document.createTextNode(r);
        const b = parts.el('button', 'bcn-aldo-ref', r.label);
        b.type = 'button';
        b.addEventListener('click', () => press({ label: r.label, does: { go: r.go } }));
        return b;
      }),
    );
  };
  const scroller = opts.scroller ?? list;
  const els = new Map<string, HTMLElement>();
  const sigs = new Map<string, { acts: string; cards: string }>();
  const firstOf = new Map<string, string>();
  let key = '';
  let persons = 0;

  const top = (el: HTMLElement) => {
    // Only the log scrolls: scrollIntoView would move the page around it.
    scroller.scrollTop = Math.max(0, el.offsetTop - list.offsetTop - 8);
  };
  const toEnd = () => (scroller.scrollTop = scroller.scrollHeight);

  const messages = (turns: Turn<A>[]): Msg<A>[] => {
    const lastPerson = turns.filter((t) => t.by.kind === 'person' && t.kind !== 'event').at(-1)?.id;
    return turns.flatMap((t): Msg<A>[] => {
      if (t.kind === 'event') {
        const at = clock(t.time);
        const line: Msg<A> = { id: `${t.id}:event`, turnId: t.id, from: 'system', kind: 'event', who: '', text: at ? `${t.text} at ${at}` : t.text, time: '', acts: [], keys: [] };
        return t.reply ? [line, { id: `${t.id}:aldo`, turnId: t.id, from: 'aldo', who: 'Aldo', text: t.reply.text, time: at, acts: t.reply.offers ?? [], keys: [] }] : [line];
      }
      if (t.by.kind === 'person') {
        const page = t.anchor && 'page' in t.anchor ? t.anchor.page : null;
        const live = t.id === lastPerson && t.via === 'typed' && (opts.canChange?.(t.id) ?? false);
        const you: Msg<A> = {
          id: `${t.id}:you`,
          turnId: t.id,
          from: 'you',
          via: t.via,
          who: page ? `At p. ${page}` : '',
          text: t.text,
          time: clock(t.time),
          acts: [],
          context: t.context,
          keys: live && opts.onEdit ? ['edit'] : [],
        };
        if (!t.reply) return [you];
        // An unclear message: its readings, each sent as is, on the latest reply only.
        const unclear = t.id === lastPerson ? t.actions.flatMap((a) => (a.kind === 'unclear' ? ((a as { choices: { label: string; text: string }[] }).choices ?? []) : [])) : [];
        return [
          you,
          {
            id: `${t.id}:aldo`,
            turnId: t.id,
            from: 'aldo',
            who: 'Aldo',
            text: t.reply.text,
            time: clock(t.time),
            acts: [...(t.reply.offers ?? []), ...unclear.map((c): ActionButton<A> => ({ label: c.label, does: { say: c.text } }))],
            keys: live && opts.onRetry ? ['retry'] : [],
          },
        ];
      }
      return [
        {
          id: t.id,
          turnId: t.id,
          from: t.by.kind === 'system' ? 'system' : 'aldo',
          kind: t.kind,
          // A check card continues its lead: no who line.
          who: t.kind === 'check' ? '' : t.by.kind === 'system' ? '' : 'Aldo',
          text: t.text,
          time: clock(t.time),
          acts: t.offers ?? [],
          cards: t.cards,
          keys: [],
        },
      ];
    });
  };

  // ── A reply coming in ──────────────────────────────────────────────────────
  let streaming: { el: HTMLElement; text: string; timer: number; shown: number } | null = null;
  const words = (t: string) => t.match(/\S+\s*/g) ?? [];
  const finish = (stopped: boolean) => {
    if (!streaming) return;
    const { el, text, timer, shown } = streaming;
    clearTimeout(timer);
    streaming = null;
    const p = el.querySelector<HTMLElement>('[data-msg-text]')!;
    delete el.dataset.streaming;
    delete el.dataset.thinking;
    if (stopped) {
      // What was written stays; the rest is not shown. Prod cancels the call.
      el.dataset.stopped = '';
      p.textContent = words(text).slice(0, shown).join('').trimEnd() || ' ';
      p.dataset.raw = text;
    } else {
      delete p.dataset.raw;
      fill(p, text, 'aldo');
    }
    opts.onStream?.(false);
  };
  const stream = (el: HTMLElement, text: string) => {
    finish(true);
    const p = el.querySelector<HTMLElement>('[data-msg-text]')!;
    const all = words(text);
    delete el.dataset.stopped;
    el.dataset.streaming = '';
    el.dataset.thinking = '';
    (p.parentElement as HTMLElement).hidden = false;
    p.dataset.raw = text;
    p.textContent = '';
    streaming = { el, text, shown: 0, timer: 0 };
    opts.onStream?.(true);
    const step = () => {
      if (!streaming) return;
      delete el.dataset.thinking;
      streaming.shown = Math.min(all.length, streaming.shown + 2);
      p.textContent = all.slice(0, streaming.shown).join('');
      if (scroller.scrollHeight - scroller.scrollTop - scroller.clientHeight < 160) toEnd();
      if (streaming.shown >= all.length) return finish(false);
      streaming.timer = window.setTimeout(step, 45);
    };
    streaming.timer = window.setTimeout(step, 650);
  };

  const render = (k: string, turns: Turn<A>[]) => {
    if (k !== key) {
      finish(false);
      key = k;
      list.replaceChildren();
      els.clear();
      sigs.clear();
      persons = -1;
    }
    const ordered = turns
      .map((t, i) => ({ t, i }))
      .sort((a, b) => (a.t.at < b.t.at ? -1 : a.t.at > b.t.at ? 1 : a.i - b.i))
      .map(({ t }) => t);
    const msgs = messages(ordered);
    firstOf.clear();
    for (const m of msgs) if (!firstOf.has(m.turnId)) firstOf.set(m.turnId, m.id);

    const nearEnd = scroller.scrollHeight - scroller.scrollTop - scroller.clientHeight < 120;
    let added = false;
    let lead: HTMLElement | null = null;
    let editing: HTMLElement | null = null;
    const keep = new Set(msgs.map((m) => m.id));
    for (const [id, e] of els) if (!keep.has(id)) (e.remove(), els.delete(id), sigs.delete(id));

    let prev: Element | null = null;
    let fresh: { el: HTMLElement; text: string } | null = null;
    for (const m of msgs) {
      let e = els.get(m.id);
      if (!e) {
        e = parts.message();
        els.set(m.id, e);
        added = true;
        if (m.from === 'aldo' && m.id.endsWith(':aldo') && persons >= 0) fresh = { el: e, text: m.text };
        // A new run of check turns is read from its top: the lead before the first card.
        if (m.kind === 'check' && !lead) lead = (prev as HTMLElement | null)?.dataset.kind === 'check' ? e : ((prev as HTMLElement | null) ?? e);
      }
      e.dataset.from = m.from;
      // The same speaker again: drawn closer to the turn before.
      const before = msgs[msgs.indexOf(m) - 1];
      e.toggleAttribute('data-cont', !!before && before.from === m.from);
      if (m.via) e.dataset.via = m.via;
      else delete e.dataset.via;
      if (m.kind) e.dataset.kind = m.kind;
      else delete e.dataset.kind;
      const who = e.querySelector<HTMLElement>('[data-msg-who]')!;
      if (who.textContent !== m.who) who.textContent = m.who;
      who.hidden = !m.who;
      const text = e.querySelector<HTMLElement>('[data-msg-text]')!;
      fill(text, m.text, m.from);
      (text.parentElement as HTMLElement).hidden = !m.text;
      const time = e.querySelector<HTMLElement>('[data-msg-time]')!;
      if (time.textContent !== m.time) time.textContent = m.time;
      time.hidden = !m.time;
      const tools = e.querySelector<HTMLElement>('[data-msg-tools]')!;
      const keysSig = m.text && m.via !== 'button' ? ['copy', ...m.keys].join('|') : '';
      if (tools.dataset.keys !== keysSig) {
        tools.dataset.keys = keysSig;
        const turnId = m.turnId;
        tools.replaceChildren(
          ...(keysSig ? [parts.copy(() => text.textContent ?? '')] : []),
          ...(keysSig && m.keys.includes('edit') ? [parts.tool('pencil', 'Edit', () => opts.onEdit?.(turnId))] : []),
          ...(keysSig && m.keys.includes('retry') ? [parts.tool('rotate-ccw', 'Retry', () => opts.onRetry?.(turnId))] : []),
        );
      }

      const sig = sigs.get(m.id) ?? { acts: '\u0000', cards: '\u0000' };
      const actsSig = m.acts.map((a) => `${a.tone ?? ''}:${a.label}`).join('|');
      if (sig.acts !== actsSig) {
        sig.acts = actsSig;
        e.querySelector('[data-msg-acts]')!.replaceChildren(...m.acts.map((a) => parts.button(a, press)));
      }
      const cardsSig = JSON.stringify([m.cards ?? [], m.context ?? []], SIG_REPLACER);
      if (sig.cards !== cardsSig) {
        const wasEditing = sig.cards.includes('"edit":');
        sig.cards = cardsSig;
        const ctx = m.context?.length ? [parts.el('span', 'bcn-aldo-msg__context')] : [];
        ctx[0]?.append(...m.context!.map((r) => parts.chip(r, false, opts.openRef)));
        e.querySelector('[data-msg-extra]')!.replaceChildren(...ctx, ...(m.cards ?? []).map((c) => renderCard(c, parts, press)));
        // A form just opened: bring all of it, Save included, into view.
        if (!wasEditing && cardsSig.includes('"edit":')) editing = e;
      }
      sigs.set(m.id, sig);

      const want: Element | null = prev ? prev.nextElementSibling : list.firstElementChild;
      if (want !== e) list.insertBefore(e, want);
      prev = e;
    }

    const n = ordered.filter((t) => t.by.kind === 'person').length;
    const spoke = persons >= 0 && n > persons;
    persons = n;
    if (spoke && fresh) stream(fresh.el, fresh.text);
    if (spoke) toEnd();
    else if (editing) {
      const form = editing;
      requestAnimationFrame(() => {
        const r = form.getBoundingClientRect();
        const s = scroller.getBoundingClientRect();
        if (r.bottom > s.bottom) scroller.scrollTop += r.bottom - s.bottom + 8;
        else if (r.top < s.top) top(form);
      });
    } else if (lead) top(lead);
    else if (added && nearEnd) toEnd();
  };

  return {
    render,
    scrollTo: (turnId) => {
      const e = els.get(firstOf.get(turnId) ?? turnId);
      if (e) top(e);
    },
    scrollToEnd: toEnd,
    element: (turnId) => els.get(firstOf.get(turnId) ?? turnId),
    replay: (turnId) => {
      const e = els.get(`${turnId}:aldo`);
      const raw = e?.querySelector<HTMLElement>('[data-msg-text]')?.dataset.raw;
      if (e && raw) (stream(e, raw), toEnd());
    },
    stop: () => finish(true),
  };
}
