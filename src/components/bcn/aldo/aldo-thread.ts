// aldo-thread — the keyed renderer for <BcnAldoThread>. It diffs Turn[] into the log: one
// message per Aldo or system turn, two per person turn that has a reply (you, then Aldo).
// A message re-renders only the parts whose signature changed, so a card being edited keeps
// what is typed in it. Turns render in `at` order; ties keep the order given.
//
// Scroll: a person's own turn and its reply always come into view; a new 'check' turn is
// read from its top; anything else new scrolls only when the log was already near its end.

import type { ActionButton, AldoAction, Card, TextRun, Turn } from '../../../data/aldo';
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
    const lastPerson = turns.filter((t) => t.by.kind === 'person').at(-1)?.id;
    return turns.flatMap((t): Msg<A>[] => {
      if (t.by.kind === 'person') {
        const page = t.anchor && 'page' in t.anchor ? t.anchor.page : null;
        const you: Msg<A> = { id: `${t.id}:you`, turnId: t.id, from: 'you', via: t.via, who: page ? `At p. ${page}` : '', text: t.text, time: clock(t.time), acts: [] };
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
        },
      ];
    });
  };

  const render = (k: string, turns: Turn<A>[]) => {
    if (k !== key) {
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
    for (const m of msgs) {
      let e = els.get(m.id);
      if (!e) {
        e = parts.message();
        els.set(m.id, e);
        added = true;
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
      if (!tools.firstChild && m.text && m.via !== 'button') tools.append(parts.copy(() => text.textContent ?? ''));

      const sig = sigs.get(m.id) ?? { acts: '\u0000', cards: '\u0000' };
      const actsSig = m.acts.map((a) => `${a.tone ?? ''}:${a.label}`).join('|');
      if (sig.acts !== actsSig) {
        sig.acts = actsSig;
        e.querySelector('[data-msg-acts]')!.replaceChildren(...m.acts.map((a) => parts.button(a, press)));
      }
      const cardsSig = JSON.stringify(m.cards ?? [], SIG_REPLACER);
      if (sig.cards !== cardsSig) {
        const wasEditing = sig.cards.includes('"edit":');
        sig.cards = cardsSig;
        e.querySelector('[data-msg-extra]')!.replaceChildren(...(m.cards ?? []).map((c) => renderCard(c, parts, press)));
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
  };
}
