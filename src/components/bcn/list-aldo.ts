// Adapter for <BcnListAldo>: Aldo on a list page. The kit renders; this file decides what is
// said. One conversation per page load, kept here.
//
// What the person says is read as one of:
//   add      the default on a list: what it should hold ("anything about dust or spills")
//   remove   "take out", "remove", "drop", "leave out", "without" + what
//   keep     a Compliance Index list's default: who it is for or what it covers. It keeps the
//            subcategories that fit and takes out the rest
//   ask      a question ("what's on here?", "is dust covered?"): nothing changes
// Each answer names how many records fit and where they file, and offers ONE key. Nothing
// changes until the key is pressed; pressed, the change goes through the page's own path
// (the Add drawer's rows, the tree's own drop) and is said as one quiet event line.
//
// The prototype runs no model. It matches the words against every record of the list's
// type (src/data/list-aldo.ts), with the synonyms a permit uses. Prod puts the same request
// to one structured-output call that returns { actions: [{ kind: 'add', ids }], reply }.

import { ALDO, type ActionButton, type Choice, type Command, type Turn } from '../../data/aldo';
import type { AldoCandidate } from '../../data/list-aldo';
import { clausesOf, match, opOf, phrasesOf, whereSummary, type Op } from './list-aldo-match';
import type { ListType } from '../../data/lists';
import { aldoParts, pressWith, type AldoHost } from './aldo/aldo-parts';
import { mountThread } from './aldo/aldo-thread';
import { mountComposer } from './aldo/aldo-composer';

type A = { kind: 'list' };
type T = Turn<A>;
type Btn = ActionButton<A>;

interface Data {
  type: ListType;
  name: string;
  description: string;
  fresh: boolean;
  noun: [string, string];
  starters: Choice[];
  candidates: AldoCandidate[];
  indexTotal: number;
}

interface Proposal {
  op: Op;
  ids: string[];
  label: string;
  state?: 'done' | 'dismissed';
}

interface Talk {
  id: string;
  wall: number;
  via: 'typed' | 'button';
  text: string;
  reply: string;
  proposal?: Proposal;
  /** A key pressed: one quiet line, no bubble. */
  event?: boolean;
}

const YOU = { kind: 'person', id: 'me', name: 'You' } as const;
const iso = (ms: number) => new Date(ms).toISOString();

// ── The page ───────────────────────────────────────────────────────────────

/** What the list holds now, read off the tree, so a remove from a card is seen too. */
const heldIds = (index: boolean): string[] =>
  index
    ? [...document.querySelectorAll<HTMLElement>('[data-index-sub]:not([data-list-removed])')].map((s) => s.dataset.indexSub!)
    : [...new Set([...document.querySelectorAll<HTMLElement>('[data-list-card][data-member-id]:not([data-list-removed]):not([data-list-mirror])')].map((c) => c.dataset.id!))];

const fire = (name: string, ids: string[]) => document.dispatchEvent(new CustomEvent(name, { detail: { ids }, bubbles: true }));

export function setupListAldo(root: HTMLElement): void {
  const data = JSON.parse(root.querySelector('[data-lal-data]')?.textContent ?? '{}') as Data;
  const index = data.type === 'compliance-index';
  const byId = new Map(data.candidates.map((c) => [c.id, c]));
  const phrases = phrasesOf(data.candidates);
  const plural = (n: number) => `${n.toLocaleString('en-US')} ${data.noun[n === 1 ? 0 : 1]}`;
  // A new list carries the name and description it was given in the create dialog.
  const q = new URLSearchParams(location.search);
  const name = (data.fresh && q.get('name')) || data.name;
  const description = (data.fresh && q.get('description')) || data.description;

  const talk: Talk[] = [];
  let seq = 0;

  const host: AldoHost<A> = {
    say: (text) => send(text, 'button'),
    act: () => {},
    go: () => {},
  };
  const panel = root.querySelector<HTMLElement>('[data-aldo-panel]')!;
  const press = pressWith(host, panel);
  const parts = aldoParts(root);
  const thread = mountThread<A>(root.querySelector('[data-aldo-thread]')!, {
    parts,
    press,
    canChange: (turnId) => {
      const t = talk.at(-1);
      return !!t && turnId === t.id && t.via === 'typed' && !t.proposal?.state;
    },
    onEdit: (turnId) => {
      const i = talk.findIndex((t) => t.id === turnId);
      if (i < 0) return;
      const [t] = talk.splice(i, 1);
      render();
      composer.setDraft(t.text);
    },
    onRetry: (turnId) => thread.replay(turnId),
    onStream: (on) => composer.setBusy(on, () => thread.stop()),
  });
  const composer = mountComposer<A>(root, parts, (text) => send(text, 'typed'));

  // ── Reading a message ──────────────────────────────────────────────────
  const answer = (text: string): { reply: string; proposal?: Proposal } => {
    const op = opOf(text, index);
    const asked = clausesOf(text, phrases).length > 0;
    const held = new Set(heldIds(index));
    const hits = match(text, data.candidates, phrases);
    const heldHits = hits.filter((c) => held.has(c.id));

    if (op === 'ask') {
      if (!asked || !hits.length) {
        const all = [...held].map((id) => byId.get(id)).filter((c): c is AldoCandidate => !!c);
        return { reply: all.length ? `${name} holds ${plural(all.length)}: ${whereSummary(all)}.` : `${name} holds nothing yet. Tell me what it is for and I'll fill it.` };
      }
      return { reply: heldHits.length ? `Yes: ${plural(heldHits.length)} here fit, ${whereSummary(heldHits)}.` : `Nothing on ${name} fits that. ${plural(hits.length)} on the project do.` };
    }

    if (!hits.length) {
      const example = data.starters[0]?.text.toLowerCase() ?? '';
      return { reply: `Nothing on the project fits “${text.trim()}”. Try the words a permit uses${example ? `, like “${example}”` : ''}.` };
    }

    if (op === 'add') {
      const fresh = hits.filter((c) => !held.has(c.id));
      const already = hits.length - fresh.length;
      const tail = already ? ` ${already === 1 ? 'One is' : `${already} are`} on the list already.` : '';
      if (!fresh.length) return { reply: `All ${plural(hits.length)} that fit are on the list already.` };
      return {
        reply: `${plural(fresh.length)} fit: ${whereSummary(fresh)}.${tail}`,
        proposal: { op, ids: fresh.map((c) => c.id), label: `Add ${fresh.length}` },
      };
    }
    if (op === 'remove') {
      if (!heldHits.length) return { reply: `Nothing on ${name} fits that, so there is nothing to take off.` };
      return {
        reply: `${plural(heldHits.length)} on ${name} fit: ${whereSummary(heldHits)}.`,
        proposal: { op, ids: heldHits.map((c) => c.id), label: `Remove ${heldHits.length}` },
      };
    }
    if (op === 'drop') {
      if (!heldHits.length) return { reply: `None of the subcategories still here fit that.` };
      return {
        reply: `${plural(heldHits.length)} fit: ${heldHits.slice(0, 4).map((c) => c.label).join(', ')}${heldHits.length > 4 ? ` and ${heldHits.length - 4} more` : ''}.`,
        proposal: { op, ids: heldHits.map((c) => c.id), label: `Take Out ${heldHits.length}` },
      };
    }
    // keep
    const keep = heldHits;
    const out = held.size - keep.length;
    if (!keep.length) return { reply: `None of the subcategories still here fit that.` };
    if (!out) return { reply: `Every subcategory still here fits that. Nothing to take out.` };
    return {
      reply: `${plural(keep.length)} of ${held.size} fit, in ${whereSummary(keep)}. Keeping them takes the other ${out} out.`,
      proposal: { op, ids: keep.map((c) => c.id), label: `Keep ${keep.length}` },
    };
  };

  const send = (text: string, via: 'typed' | 'button') => {
    if (!text.trim()) return;
    const r = answer(text);
    talk.push({ id: `t${++seq}`, wall: Date.now(), via, text, reply: r.reply, proposal: r.proposal });
    render();
    thread.scrollToEnd();
  };

  const apply = (p: Proposal) => {
    if (p.op === 'add') fire('list:add-ids', p.ids);
    else if (p.op === 'remove') fire('list:drop-members', p.ids);
    else if (p.op === 'keep') fire('list:index-keep', p.ids);
    else fire('list:index-drop', p.ids);
    p.state = 'done';
    const said = {
      add: `Added ${plural(p.ids.length)}`,
      remove: `Removed ${plural(p.ids.length)}`,
      keep: `Kept ${plural(p.ids.length)}`,
      drop: `Took out ${plural(p.ids.length)}`,
    }[p.op];
    talk.push({ id: `t${++seq}`, wall: Date.now(), via: 'button', text: said, reply: '', event: true });
    render();
  };

  // ── The conversation ────────────────────────────────────────────────────
  // Said once, about the list as the page opened on it.
  const firstHeld = index
    ? heldIds(true).length
    : document.querySelectorAll('[data-list-card][data-member-id]:not([data-list-removed]):not([data-list-mirror])').length;
  const opening = (): T => {
    const held = firstHeld;
    const total = index ? data.indexTotal : data.candidates.length;
    const text = index
      ? `${name} has ${plural(held)}, drawn from the index's ${total}. Say who it's for or what it covers, and I'll keep what fits.`
      : held
        ? `${name} holds ${plural(held)}. Tell me what to add or take off.`
        : `What should ${name} hold? Describe it and I'll fill it from the project's ${plural(total)}.`;
    return { id: 'opening', at: iso(0), by: ALDO, via: 'event', kind: 'opening', actions: [], text };
  };

  const turnOf = (t: Talk): T => {
    if (t.event) return { id: t.id, at: iso(t.wall), time: iso(t.wall), by: YOU, via: 'button', kind: 'event', actions: [], text: t.text };
    const p = t.proposal;
    const offers: Btn[] =
      p && !p.state
        ? [
            { label: p.label, tone: p.op === 'remove' || p.op === 'drop' ? 'danger' : 'success', does: { run: () => apply(p) } },
            { label: 'Dismiss', does: { run: () => ((p.state = 'dismissed'), render()) } },
          ]
        : [];
    return {
      id: t.id,
      at: iso(t.wall),
      time: iso(t.wall),
      by: YOU,
      via: t.via,
      text: t.text,
      actions: [],
      reply: { text: t.reply + (p?.state === 'dismissed' ? ' Left as it was.' : ''), offers },
    };
  };

  const COMMANDS: Command[] = index
    ? [
        { name: 'keep', hint: 'Keep only what fits', text: 'Keep only ' },
        { name: 'remove', hint: 'Take subcategories out', text: 'Take out ' },
      ]
    : [
        { name: 'add', hint: 'Add what fits', text: 'Add ' },
        { name: 'remove', hint: 'Take members off', text: 'Remove ' },
      ];

  const render = () => {
    thread.render('list', [opening(), ...talk.map(turnOf)]);
    // The starters until something is said; the description, on a new list given one.
    const suggestions: Choice[] = talk.length
      ? []
      : [...(description ? [{ label: 'Use the description', text: description }] : []), ...data.starters];
    composer.setSuggestions(suggestions, press);
  };

  composer.setCommands(COMMANDS);
  composer.setMentions([]);
  render();

  // The launcher opens the conversation in place; the panel's collapse folds it back.
  const launcher = root.querySelector<HTMLButtonElement>('[data-lal-open]')!;
  launcher.addEventListener('click', () => {
    root.dataset.aldo = 'open';
    launcher.setAttribute('aria-expanded', 'true');
    requestAnimationFrame(() => composer.focus());
  });
  root.addEventListener('aldo:collapse', () => {
    launcher.setAttribute('aria-expanded', 'false');
    launcher.focus();
  });
  if (data.fresh) requestAnimationFrame(() => composer.focus());
}
