// Adapter for <BcnSw3IndexAldo>: step 3's conversation with Aldo about the subcategory in
// view. The kit renders; this file decides what is said. One conversation per subcategory,
// kept in sw3-index-store (talkOf), as step 2 keeps one per commitment.
//
// The person says what to change in their own words: approve these, merge two entries (@
// each, same audience only, as prod's Merge), move this to Nesting birds, also file it under
// Night work, this is a monitor's duty, why is this here. Aldo answers with what it would
// change; a proposal applies only when pressed. What the subcategory needs from a person is
// the Open items list, each with its answers.
//
//   in   sw3i:current  detail: { sub, entryId }   the subcategory in view, the entry open
//   out  sw3i:go       detail: { sub, entryId? }  a reference was pressed
//   out  sw3i:edit     detail: { id }             Edit, from an open item
//   out  sw3i:locator  detail: IndexLocator       a locator, from why

import {
  initIndex,
  subs,
  subOf,
  entryAny,
  titleOf,
  statusOf,
  entriesIn,
  flagsOf,
  unfiled,
  index,
  setStatus,
  acceptMerge,
  dismissMerge,
  fileUnfiled,
  applyProposal,
  talkOf,
  pushTalk,
  settleProposal,
  takeBackTalk,
  type IndexTalk,
  type IndexProposal,
} from './sw3-index-store';
import { locatorRef } from './sw3-index';
import { ALDO, type ActionButton, type Command, type ContextRef, type Mention, type OpenItem, type TextRun, type Turn } from '../../data/aldo';
import { aldoParts, pressWith, type AldoHost } from './aldo/aldo-parts';
import { mountThread } from './aldo/aldo-thread';
import { mountInstructions, mountNeeds } from './aldo/aldo-panel';
import { mountComposer } from './aldo/aldo-composer';
import type { IndexEntry } from '../../data/sw3-index-types';

type A = { kind: 'index' };
type T = Turn<A>;
type Btn = ActionButton<A>;

const YOU = { kind: 'person', id: 'me', name: 'You' } as const;
const iso = (ms: number) => new Date(ms).toISOString();
const words = (s: string, n: number) => {
  const w = s.replace(/\s+/g, ' ').trim().split(' ');
  return w.length > n ? `${w.slice(0, n).join(' ')}…` : w.join(' ');
};
const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

const COMMANDS: Command[] = [
  { name: 'approve', hint: 'Approve every draft here', text: 'Approve all' },
  { name: 'merge', hint: 'Make two entries one (@ each)', text: 'Merge ' },
  { name: 'move', hint: 'File the open entry somewhere else', text: 'Move this to ' },
  { name: 'also', hint: 'File the open entry in another subcategory too', text: 'Also file this under ' },
  { name: 'monitor', hint: 'The open entry is for monitors', text: 'This is a monitor’s duty' },
  { name: 'why', hint: 'Why the open entry is here', text: 'Why is this here?' },
];

/** The subcategory a phrase names: the closest by words. */
const subNamed = (phrase: string, not?: string): string | null => {
  const p = norm(phrase);
  if (!p) return null;
  let best: { id: string; score: number } | null = null;
  for (const { sub } of subs()) {
    if (sub.id === not) continue;
    const n = norm(sub.name);
    const pw = p.split(' ');
    const score = n === p ? 100 : n.includes(p) ? 50 : pw.filter((w) => w.length > 2 && n.includes(w)).length;
    if (score > 0 && (!best || score > best.score)) best = { id: sub.id, score };
  }
  return best?.id ?? null;
};

interface Answer {
  reply: string;
  proposals?: { label: string; p: IndexProposal }[];
}

/** Read what the person said about the subcategory in view. */
const interpret = (sub: string, text: string, focus: IndexEntry | null, attached: IndexEntry[]): Answer => {
  const t = text.trim();
  const lower = t.toLowerCase();
  const here = entriesIn(sub)
    .map(({ id }) => entryAny(id))
    .filter((e): e is IndexEntry => !!e);
  const name = subOf(sub)!.sub.name;

  if (/^approve( all| every| them| these)?\b/.test(lower) && !focus && !attached.length) {
    const ids = here.filter((e) => statusOf(e.id) === 'draft').map((e) => e.id);
    if (!ids.length) return { reply: `Nothing in ${name} is still a draft.` };
    return { reply: `${ids.length} draft${ids.length === 1 ? '' : 's'} in ${name}.`, proposals: [{ label: `Approve ${ids.length}`, p: { kind: 'approve', ids } }] };
  }

  if (/\bmerge\b/.test(lower)) {
    const two = attached.length >= 2 ? attached : focus && attached.length === 1 ? [focus, attached[0]] : [];
    if (two.length < 2) return { reply: 'Which two? @ each entry to merge.' };
    const obs = two.filter((e) => e.kind === 'obligation');
    if (obs.length === two.length && new Set(obs.map((e) => (e.kind === 'obligation' ? e.audience : ''))).size > 1)
      return { reply: 'Those are read by different people, so they stay two entries. Change one’s audience first if they are the same duty.' };
    if (new Set(two.map((e) => e.kind)).size > 1) return { reply: 'An action and an obligation stay separate: one is done once, the other holds while the work goes on.' };
    const title = titleOf(two[0]);
    return {
      reply: `One entry, “${title}”, resting on every locator of both.`,
      proposals: [{ label: 'Merge', p: { kind: 'mergeIds', ids: two.map((e) => e.id), title } }],
    };
  }

  const target = focus ?? (attached.length === 1 ? attached[0] : null);
  const move = /\b(?:move|refile)\b.*?\b(?:to|into|under)\s+(.+)$/i.exec(t);
  const also = /\balso (?:file|list|put)\b.*?\b(?:under|in|into)\s+(.+)$/i.exec(t);
  if (move || also) {
    if (!target) return { reply: 'Open the entry first, or @ it.' };
    const to = subNamed((also ?? move)![1], sub);
    if (!to) return { reply: `No subcategory reads like “${(also ?? move)![1]}”.` };
    const toName = subOf(to)!.sub.name;
    if (also) return { reply: `“${titleOf(target)}” would read in ${name} and ${toName}.`, proposals: [{ label: `Also file in ${toName}`, p: { kind: 'also', id: target.id, to } }] };
    return { reply: `“${titleOf(target)}” would leave ${name} for ${toName}.`, proposals: [{ label: `Move to ${toName}`, p: { kind: 'move', id: target.id, from: sub, to } }] };
  }

  if (/\bmonitor'?s?’?s?\b.*\b(duty|job|watch)\b|\bfor monitors\b/.test(lower)) {
    if (!target || target.kind !== 'obligation') return { reply: 'Open the obligation first, or @ it.' };
    return {
      reply: `“${titleOf(target)}” would move under Monitors, as a Monitor obligation.`,
      proposals: [{ label: 'Make it a monitor’s duty', p: { kind: 'edit', id: target.id, patch: { audience: 'Monitors', class: 'Monitor' } } }],
    };
  }

  if (/\bwhy\b/.test(lower)) {
    if (!target) return { reply: `${name} holds ${here.length} entr${here.length === 1 ? 'y' : 'ies'}, filed here because their requirements are about it. Open one and ask again.` };
    const l = target.locators[0];
    const more = target.locators.length - 1;
    return {
      reply: `It rests on ${locatorRef(l)}: “${words(l.excerpt, 24)}”${more ? ` and ${more} more` : ''}. That is what ${name} indexes.`,
    };
  }

  if (/^(discard|remove|not an? (obligation|action))\b/.test(lower)) {
    if (!target) return { reply: 'Open the entry first, or @ it.' };
    return { reply: `“${titleOf(target)}” would leave the index.`, proposals: [{ label: 'Discard', p: { kind: 'discard', ids: [target.id] } }] };
  }

  return { reply: 'I can approve, merge, move, also file, make something a monitor’s duty, or say why an entry is here.' };
};

export function setupSw3IndexAldo(root: HTMLElement): void {
  initIndex();
  const fire = (name: string, detail: unknown) => document.dispatchEvent(new CustomEvent(name, { detail }));
  let sub = '';
  let focusId: string | null = null;
  let chips: ContextRef[] = [];
  let choices: { label: string; text: string }[] = [];

  const host: AldoHost<A> = {
    say: (text) => send(text, chips, 'button'),
    act: () => {},
    go: (a) => {
      if (a.kind === 'entity' && a.entity === 'entry') {
        const where = entriesIn(sub).some((x) => x.id === a.id) ? sub : subs().find(({ sub: s }) => entriesIn(s.id).some((x) => x.id === a.id))?.sub.id;
        if (where) fire('sw3i:go', { sub: where, entryId: a.id });
      } else if (a.kind === 'entity' && a.entity === 'subcategory') fire('sw3i:go', { sub: a.id });
    },
  };
  const press = pressWith(host, root.querySelector('[data-aldo-panel]') ?? root);
  const parts = aldoParts(root);

  /** Subcategory names in Aldo's text open them. */
  const linkify = (text: string): TextRun[] => {
    const out: TextRun[] = [];
    const names = subs()
      .filter((s) => s.sub.id !== sub)
      .map((s) => s.sub)
      .sort((a, b) => b.name.length - a.name.length);
    let rest = text;
    while (rest) {
      let hit: { at: number; id: string; name: string } | null = null;
      for (const s of names) {
        const at = rest.indexOf(s.name);
        if (at >= 0 && (!hit || at < hit.at)) hit = { at, id: s.id, name: s.name };
      }
      if (!hit) {
        out.push(rest);
        break;
      }
      if (hit.at) out.push(rest.slice(0, hit.at));
      out.push({ label: hit.name, go: { kind: 'entity', entity: 'subcategory', id: hit.id } });
      rest = rest.slice(hit.at + hit.name.length);
    }
    return out;
  };

  const thread = mountThread<A>(root.querySelector('[data-aldo-thread]')!, {
    parts,
    press,
    linkify,
    canChange: (turnId) => {
      const t = talkOf(sub).at(-1);
      return !!t && turnId.endsWith(`:${t.id}`) && t.via === 'typed' && !t.proposals?.some((p) => p.state);
    },
    onEdit: (turnId) => {
      const t = takeBackTalk(turnId.split(':').pop()!);
      if (t) composer.setDraft(t.text);
    },
    onRetry: (turnId) => thread.replay(turnId),
    onStream: (on) => composer.setBusy(on, () => thread.stop()),
  });
  const needsList = mountNeeds<A>(root, parts, press);
  const instructions = mountInstructions(root, parts);

  // ── Saying something ──────────────────────────────────────────────────────────
  const send = (text: string, context: ContextRef[], via: 'typed' | 'button') => {
    if (!sub) return;
    const attached = context.flatMap((c) => (c.anchor?.kind === 'entity' && c.anchor.entity === 'entry' ? [entryAny(c.anchor.id)!] : [])).filter(Boolean);
    const focus = focusId ? (entryAny(focusId) ?? null) : null;
    const r = interpret(sub, text, attached.some((e) => e.id === focusId) ? null : focus, attached);
    pushTalk({
      sub,
      via,
      text,
      context: context.map(({ id, kind, label }) => ({ id, kind, label })),
      reply: r.reply,
      proposals: r.proposals?.map((p, i) => ({ id: `p${i}`, label: p.label, p: p.p })),
    });
    choices = [];
    render();
  };
  /** A press on the record, said as one quiet line. */
  const event = (text: string) => pushTalk({ sub, via: 'button', text, reply: '', event: true });

  const composer = mountComposer<A>(root, parts, (text, context) => send(text, context, 'typed'));
  composer.setCommands(COMMANDS);

  // ── The conversation for the subcategory in view ──────────────────────────────
  const opening = (): T => {
    const here = entriesIn(sub);
    const ref = subOf(sub)!;
    const acts = here.filter(({ id }) => entryAny(id)?.kind === 'action').length;
    const obs = here.length - acts;
    const open = flagsOf(sub).length + unfiled().length;
    const parts = [obs && `${obs} obligation${obs === 1 ? '' : 's'}`, acts && `${acts} action${acts === 1 ? '' : 's'}`].filter(Boolean).join(' and ');
    const text = `${parts || 'Nothing'} filed under ${ref.sub.name}.` + (open ? ` ${open} to settle in Open items.` : '');
    return { id: `${sub}:opening`, at: iso(0), by: ALDO, via: 'event', actions: [], kind: 'opening', text };
  };

  const turnOf = (t: IndexTalk): T => {
    if (t.event) return { id: `${sub}:${t.id}`, at: iso(t.wall), time: iso(t.wall), by: YOU, via: 'button', kind: 'event', actions: [], text: t.text };
    const offers: Btn[] = (t.proposals ?? [])
      .filter((p) => !p.state)
      .map((p) => ({
        label: p.label,
        tone: p.p.kind === 'discard' ? ('danger' as const) : ('success' as const),
        does: {
          run: () => {
            applyProposal(p.p);
            settleProposal(t.id, p.id, 'accepted');
            event(p.label);
          },
        },
      }));
    if (offers.length)
      offers.push({
        label: offers.length > 1 ? 'None of these' : 'Dismiss',
        does: { run: () => (t.proposals ?? []).filter((p) => !p.state).forEach((p) => settleProposal(t.id, p.id, 'dismissed')) },
      });
    const dismissed = (t.proposals ?? []).some((p) => p.state === 'dismissed') && !(t.proposals ?? []).some((p) => p.state === 'accepted');
    return {
      id: `${sub}:${t.id}`,
      at: iso(t.wall),
      time: iso(t.wall),
      by: YOU,
      via: t.via,
      text: t.text,
      context: t.context as ContextRef[] | undefined,
      actions: [],
      reply: { text: t.reply + (dismissed && !offers.length ? ' Left as it was.' : ''), offers },
    };
  };

  // ── Open items ────────────────────────────────────────────────────────────────
  const items = (): OpenItem<A>[] => {
    const at = iso(1);
    const run = (label: string, fn: () => void, tone?: Btn['tone'], line = label): Btn => ({ label, tone, does: { run: () => (fn(), event(line)) } });
    const item = (id: string, kind: string, text: string, answers: Btn[], entryId?: string): OpenItem<A> => ({
      id: `${sub}:need:${id}`,
      kind,
      raisedBy: `${sub}:opening`,
      raisedAt: at,
      text,
      anchor: entryId ? { kind: 'entity', entity: 'entry', id: entryId } : undefined,
      answers,
    });
    const name = subOf(sub)!.sub.name;
    const out = flagsOf(sub).map((f): OpenItem<A> => {
      if (f.kind === 'merge') {
        const m = index().merges.find((x) => x.id === f.id)!;
        const titles = m.entryIds.map((id) => `“${titleOf(entryAny(id)!)}”`).join(' and ');
        return item(`merge-${m.id}`, 'merge', `${titles} read as one duty.`, [
          run('Merge', () => acceptMerge(m.id), 'info', `Merged into “${m.title}”`),
          run('Keep separate', () => dismissMerge(m.id), undefined, 'Kept them separate'),
        ], m.entryIds[0]);
      }
      const e = entryAny(f.id)!;
      return item(`party-${e.id}`, 'party', `Nobody is named to do “${titleOf(e)}”.`, [
        { label: 'Edit', tone: 'info', does: { run: () => fire('sw3i:edit', { id: e.id }) } },
        run('Discard', () => setStatus([e.id], 'discarded'), 'danger', `Discarded “${titleOf(e)}”`),
      ], e.id);
    });
    // What File could not place is the whole index's to settle: it shows on every page.
    for (const u of unfiled())
      out.push(
        item(`unfiled-${u.id}`, 'unfiled', `“${words(u.statement, 12)}” fits no subcategory. ${u.reason}`, [
          run(`File in ${name}`, () => fileUnfiled(u.id, sub), 'info'),
          run('Not an obligation', () => fileUnfiled(u.id, 'none'), undefined),
        ]),
      );
    return out;
  };

  // ── Context: the subcategory, and the entry open in it ────────────────────────
  const entryRef = (e: IndexEntry): ContextRef => ({ id: `entity:entry:${e.id}`, kind: 'entity', label: words(titleOf(e), 5), anchor: { kind: 'entity', entity: 'entry', id: e.id } });
  const paintContext = () => {
    if (!sub) return;
    const refs: ContextRef[] = [{ id: `entity:subcategory:${sub}`, kind: 'entity', label: subOf(sub)!.sub.name, anchor: { kind: 'entity', entity: 'subcategory', id: sub } }];
    const focus = focusId ? entryAny(focusId) : null;
    if (focus) refs.push(entryRef(focus));
    chips = refs;
    composer.setContext(refs);
    composer.setSuggestions(
      focus
        ? [
            { label: 'Why is this here?', text: 'Why is this here?' },
            { label: 'Also file it', text: 'Also file this under ' },
            ...(focus.kind === 'obligation' && focus.audience !== 'Monitors' ? [{ label: 'A monitor’s duty', text: 'This is a monitor’s duty' }] : []),
          ]
        : choices.length
          ? choices
          : [{ label: 'Approve all', text: 'Approve all' }],
      press,
    );
  };

  const render = () => {
    if (!sub || !subOf(sub)) return;
    thread.render(sub, [opening(), ...talkOf(sub).map(turnOf)]);
    needsList.setItems(items());
    instructions.setInstructions([]);
    composer.setMentions(
      entriesIn(sub)
        .map(({ id }) => entryAny(id))
        .filter((e): e is IndexEntry => !!e)
        .map((e): Mention => ({ label: titleOf(e), detail: e.kind === 'action' ? 'Action' : `${e.class}, ${e.audience}`, ref: entryRef(e) })),
    );
    paintContext();
  };

  document.addEventListener('sw3i:current', (e) => {
    const d = (e as CustomEvent<{ sub: string; entryId: string | null }>).detail;
    if (d.sub === sub) {
      if (d.entryId !== focusId) ((focusId = d.entryId), paintContext());
      return;
    }
    sub = d.sub;
    focusId = d.entryId;
    choices = [];
    render();
    thread.scrollToEnd();
  });
  document.addEventListener('sw3i:change', render);
}
