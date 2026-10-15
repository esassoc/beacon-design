// Adapter for <BcnSw3IndexAldo>: step 3's conversation with Aldo about the subcategory in
// view. The kit renders; this file decides what is said. One conversation per subcategory,
// kept in sw3-index-store (talkOf), as step 2 keeps one per commitment.
//
// Before drafting, Aldo takes Re-run guidance in plain words and answers with the Re-run
// key and what a re-run keeps (develop's popover note); guidance holds for that run only.
// One Re-run with guidance was run ahead through Beacon's prompt; other guidance gets a
// plain answer that offers it. Aldo also says why a subcategory exists, from what it cites.
//
// Once drafted, the person says what to change: approve all, discard this, merge two drafts
// (@ each, one kind and one audience, as prod's Merge), this is a monitor's duty, why is this
// here (answered from its sources). Nothing applies until a key is pressed. Open items: a
// draft action with nobody named to do it, and one with no scope.
//
//   in   sw3i:current    detail: { sub, entryId }   the subcategory in view, the draft open
//   in   sw3i:rerun-ask                              Re-run pressed in the step's actions
//   out  sw3i:go         detail: { sub, entryId? }  a reference was pressed
//   out  sw3i:edit       detail: { id }             Edit, from an open item

import {
  initIndex,
  plan,
  phase,
  subs,
  subOf,
  entry,
  entriesIn,
  titleOf,
  statusOf,
  homeOf,
  lockedCount,
  mergeRefusal,
  applyProposal,
  discard,
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
const plural = (n: number, one: string, many = `${one}s`) => `${n.toLocaleString('en-US')} ${n === 1 ? one : many}`;

const BUILT_COMMANDS: Command[] = [
  { name: 'rerun', hint: 'Re-run the index, with guidance', text: 'Re-run: ' },
  { name: 'why', hint: 'Why this subcategory exists', text: 'Why is this here?' },
];
const DRAFTED_COMMANDS: Command[] = [
  { name: 'approve', hint: 'Approve every draft here', text: 'Approve all' },
  { name: 'merge', hint: 'Make two drafts one (@ each)', text: 'Merge ' },
  { name: 'monitor', hint: 'The open draft is for monitors', text: 'This is a monitor’s duty' },
  { name: 'discard', hint: 'Discard the open draft', text: 'Discard this' },
  { name: 'why', hint: 'Why the open draft is here', text: 'Why is this here?' },
];

/** What a re-run keeps, as develop's popover says it. */
const rerunNote = () => {
  const n = lockedCount();
  return n
    ? `${plural(n, 'locked subcategory', 'locked subcategories')} stay as is; unlocked ones it doesn't propose again are removed.`
    : "Nothing is locked, so any subcategory it doesn't propose again is removed.";
};

interface Answer {
  reply: string;
  proposals?: { label: string; p: IndexProposal }[];
}

/** Guidance the pre-run proposal answers: species bins under one category. */
const matchesPrerun = (g: string) => /\bspecies\b/i.test(g);

/** Read what the person said, before drafting. */
const interpretBuilt = (sub: string, text: string): Answer => {
  const t = text.trim();
  const ref = subOf(sub)!;
  if (/\bwhy\b/i.test(t)) {
    const ev = ref.sub.evidence.slice(0, 3);
    if (!ev.length) return { reply: `${ref.sub.name} cites no requirement. It was made by hand, or the proposal named it without one.` };
    return { reply: `${ref.sub.name} is there for ${ev.map(locatorRef).join(', ')}: the requirements the proposal cited for it.` };
  }
  const m = /^\s*re-?run\b[:\s,-]*(.*)$/is.exec(t);
  const guidance = (m ? m[1] : t).trim();
  if (!guidance) return { reply: `Re-run the index as it was first built? ${rerunNote()}`, proposals: [{ label: 'Re-run', p: { kind: 'rerun', guidance: '' } }] };
  const canned = plan().rerun.guidance;
  if (matchesPrerun(guidance))
    return { reply: `Re-run with “${canned}”. ${rerunNote()}`, proposals: [{ label: 'Re-run', p: { kind: 'rerun', guidance: canned } }] };
  return {
    reply: `This prototype ran one Re-run ahead through Beacon's prompt, with “${canned}”. Other guidance would go to the same prompt; here it can't.`,
    proposals: [
      { label: 'Re-run with that', p: { kind: 'rerun', guidance: canned } },
      { label: 'Re-run without guidance', p: { kind: 'rerun', guidance: '' } },
    ],
  };
};

/** Read what the person said about the drafts. */
const interpretDrafted = (sub: string, text: string, focus: IndexEntry | null, attached: IndexEntry[]): Answer => {
  const t = text.trim();
  const lower = t.toLowerCase();
  const here = entriesIn(sub);
  const name = subOf(sub)!.sub.name;

  if (/^approve( all| every| them| these)?\b/.test(lower) && !focus && !attached.length) {
    const ids = here.filter((e) => statusOf(e.id) === 'draft').map((e) => e.id);
    if (!ids.length) return { reply: `Nothing in ${name} is still a draft.` };
    return { reply: `${plural(ids.length, 'draft')} in ${name}.`, proposals: [{ label: `Approve ${ids.length}`, p: { kind: 'approve', ids } }] };
  }

  if (/\bmerge\b/.test(lower)) {
    const two = attached.length >= 2 ? attached : focus && attached.length === 1 ? [focus, attached[0]] : [];
    if (two.length < 2) return { reply: 'Which ones? @ each draft to merge.' };
    const why = mergeRefusal(two.map((e) => e.id));
    if (why) return { reply: why };
    const title = titleOf(two[0]);
    return { reply: `One draft, “${title}”, keeping every source behind both.`, proposals: [{ label: 'Merge', p: { kind: 'merge', ids: two.map((e) => e.id), title } }] };
  }

  const target = attached.length === 1 ? attached[0] : focus;
  if (/\bmonitor'?s?’?s?\b.*\b(duty|job|watch)\b|\bfor monitors\b/.test(lower)) {
    if (!target || target.kind !== 'obligation') return { reply: 'Open the obligation first, or @ it.' };
    return {
      reply: `“${titleOf(target)}” would move under Monitors, as a Monitor obligation.`,
      proposals: [{ label: 'Make it a monitor’s duty', p: { kind: 'edit', id: target.id, patch: { audience: 'Monitors', class: 'Monitor' } } }],
    };
  }

  if (/\bwhy\b/.test(lower)) {
    if (!target) return { reply: `${name} holds ${plural(here.length, 'draft')}, filed here because their requirements are about it. Open one and ask again.` };
    const l = target.locators.find((x) => x.excerpt) ?? target.locators[0];
    const more = target.locators.length - 1;
    return { reply: `It rests on ${locatorRef(l)}: “${words(l.excerpt, 28)}”${more ? ` and ${more} more` : ''}. That is what ${name} files.` };
  }

  if (/^(discard|remove|not an? (obligation|action))\b/.test(lower)) {
    if (!target) return { reply: 'Open the draft first, or @ it.' };
    return { reply: `“${titleOf(target)}” would be discarded. Restore brings it back.`, proposals: [{ label: 'Discard', p: { kind: 'discard', ids: [target.id] } }] };
  }

  return { reply: 'I can approve, merge, discard, make something a monitor’s duty, or say why a draft is here.' };
};

export function setupSw3IndexAldo(root: HTMLElement): void {
  initIndex();
  const fire = (name: string, detail: unknown) => document.dispatchEvent(new CustomEvent(name, { detail }));
  let sub = '';
  let focusId: string | null = null;
  let chips: ContextRef[] = [];
  const drafted = () => phase() === 'drafted';

  const host: AldoHost<A> = {
    say: (text) => send(text, chips, 'button'),
    act: () => {},
    go: (a) => {
      if (a.kind === 'entity' && a.entity === 'entry') {
        const where = homeOf(a.id);
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

  // ── Saying something ─────────────────────────────────────────────────────────
  const send = (text: string, context: ContextRef[], via: 'typed' | 'button') => {
    if (!sub) return;
    const attached = context.flatMap((c) => (c.anchor?.kind === 'entity' && c.anchor.entity === 'entry' ? [entry(c.anchor.id)!] : [])).filter(Boolean);
    const focus = focusId ? (entry(focusId) ?? null) : null;
    const r = drafted() ? interpretDrafted(sub, text, attached.some((e) => e.id === focusId) ? null : focus, attached) : interpretBuilt(sub, text);
    pushTalk({
      sub,
      via,
      text,
      context: context.map(({ id, kind, label }) => ({ id, kind, label })),
      reply: r.reply,
      proposals: r.proposals?.map((p, i) => ({ id: `p${i}`, label: p.label, p: p.p })),
    });
    render();
  };
  /** A press on the record, said as one quiet line. */
  const event = (text: string) => pushTalk({ sub, via: 'button', text, reply: '', event: true });

  const composer = mountComposer<A>(root, parts, (text, context) => send(text, context, 'typed'));

  // ── The conversation for the subcategory in view ─────────────────────────────
  const opening = (): T => {
    const ref = subOf(sub)!;
    const ph = phase();
    let text: string;
    if (ph === 'drafted') {
      const here = entriesIn(sub);
      const acts = here.filter((e) => e.kind === 'action').length;
      const obs = here.length - acts;
      const pending = here.filter((e) => statusOf(e.id) === 'draft').length;
      const what = [obs && plural(obs, 'obligation'), acts && plural(acts, 'action')].filter(Boolean).join(' and ');
      text = what ? `${what} drafted into ${ref.sub.name}. ${pending ? `${pending} to review.` : 'Every one decided.'}` : `Nothing was drafted into ${ref.sub.name}.`;
    } else if (ph === 'drafting') text = `The Draft run is filing into ${ref.sub.name}.`;
    else {
      text = 'Tell me how the index should change and I’ll re-run it.';
    }
    return { id: `${sub}:opening:${ph}`, at: iso(0), by: ALDO, via: 'event', actions: [], kind: 'opening', text };
  };

  const turnOf = (t: IndexTalk): T => {
    if (t.event) return { id: `${sub}:${t.id}`, at: iso(t.wall), time: iso(t.wall), by: YOU, via: 'button', kind: 'event', actions: [], text: t.text };
    const live = (t.proposals ?? []).filter((p) => !p.state);
    // A Re-run key is spent once the index is drafted.
    const offers: Btn[] = live
      .filter((p) => p.p.kind !== 'rerun' || phase() === 'built')
      .map((p) => ({
        label: p.label,
        tone: p.p.kind === 'discard' ? ('danger' as const) : ('success' as const),
        does: {
          run: () => {
            applyProposal(p.p);
            settleProposal(t.id, p.id, 'accepted');
            event(p.p.kind === 'rerun' ? (p.p.guidance ? `Re-ran with “${p.p.guidance}”` : 'Re-ran') : p.label);
          },
        },
      }));
    if (offers.length)
      offers.push({
        label: offers.length > 1 ? 'None of these' : 'Dismiss',
        does: { run: () => live.forEach((p) => settleProposal(t.id, p.id, 'dismissed')) },
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

  // ── Open items: what a draft needs from a person ─────────────────────────────
  const items = (): OpenItem<A>[] => {
    if (!drafted()) return [];
    const at = iso(1);
    const item = (id: string, kind: string, text: string, answers: Btn[], entryId: string): OpenItem<A> => ({
      id: `${sub}:need:${id}`,
      kind,
      raisedBy: `${sub}:opening:drafted`,
      raisedAt: at,
      text,
      anchor: { kind: 'entity', entity: 'entry', id: entryId },
      answers,
    });
    const edit = (id: string): Btn => ({ label: 'Edit', tone: 'info', does: { run: () => fire('sw3i:edit', { id }) } });
    const drop = (e: IndexEntry): Btn => ({ label: 'Discard', tone: 'danger', does: { run: () => (discard([e.id]), event(`Discarded “${titleOf(e)}”`)) } });
    return entriesIn(sub)
      .filter((e) => e.kind === 'action' && statusOf(e.id) === 'draft')
      .flatMap((e) => {
        if (e.kind !== 'action') return [];
        const out: OpenItem<A>[] = [];
        if (!e.scope) out.push(item(`scope-${e.id}`, 'scope', `“${titleOf(e)}” has no scope. Set one before approving it.`, [edit(e.id), drop(e)], e.id));
        if (!e.responsibleParty) out.push(item(`party-${e.id}`, 'party', `Nobody is named to do “${titleOf(e)}”.`, [edit(e.id), drop(e)], e.id));
        return out;
      });
  };

  // ── Context: the subcategory, and the draft open in it ───────────────────────
  const entryRef = (e: IndexEntry): ContextRef => ({ id: `entity:entry:${e.id}`, kind: 'entity', label: words(titleOf(e), 5), anchor: { kind: 'entity', entity: 'entry', id: e.id } });
  const paintContext = () => {
    if (!sub) return;
    const refs: ContextRef[] = [{ id: `entity:subcategory:${sub}`, kind: 'entity', label: subOf(sub)!.sub.name, anchor: { kind: 'entity', entity: 'subcategory', id: sub } }];
    const focus = drafted() && focusId ? entry(focusId) : null;
    if (focus) refs.push(entryRef(focus));
    chips = refs;
    composer.setContext(refs);
    const canned = plan().rerun.guidance;
    composer.setSuggestions(
      !drafted()
        ? phase() === 'built'
          ? [
              { label: 'Give each species its own subcategory', text: `Re-run: ${canned}` },
              { label: 'Why is this here?', text: 'Why is this here?' },
            ]
          : []
        : focus
          ? [
              { label: 'Why is this here?', text: 'Why is this here?' },
              ...(focus.kind === 'obligation' && focus.audience !== 'Monitors' ? [{ label: 'A monitor’s duty', text: 'This is a monitor’s duty' }] : []),
            ]
          : [{ label: 'Approve all', text: 'Approve all' }],
      press,
    );
  };

  const render = () => {
    // No index yet, or one on its way: an empty conversation.
    if (phase() === 'empty' || phase() === 'building') {
      sub = '';
      thread.render('', []);
      needsList.setItems([]);
      composer.setCommands([]);
      composer.setMentions([]);
      return;
    }
    if (!sub || !subOf(sub)) return;
    thread.render(sub, [opening(), ...talkOf(sub).map(turnOf)]);
    needsList.setItems(items());
    instructions.setInstructions([]);
    composer.setCommands(drafted() ? DRAFTED_COMMANDS : BUILT_COMMANDS);
    composer.setMentions(
      drafted()
        ? entriesIn(sub).map((e): Mention => ({ label: titleOf(e), detail: e.kind === 'action' ? 'Action' : `${e.class}, ${e.audience}`, ref: entryRef(e) }))
        : [],
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
    render();
    thread.scrollToEnd();
  });
  document.addEventListener('sw3i:change', render);
  // Re-run, pressed in the step's actions: Aldo asks what should change.
  document.addEventListener('sw3i:rerun-ask', () => {
    if (!sub) return;
    const ix = root.closest<HTMLElement>('[data-sw3-ix]');
    if (ix) ix.dataset.aldo = 'open';
    const r = interpretBuilt(sub, 'Re-run');
    pushTalk({
      sub,
      via: 'button',
      text: 'Re-run the index',
      reply: `${r.reply} Or tell me what should change, and it re-runs with that as guidance.`,
      proposals: r.proposals?.map((p, i) => ({ id: `p${i}`, label: p.label, p: p.p })),
    });
    composer.setDraft('Re-run: ');
    thread.scrollToEnd();
  });
}
