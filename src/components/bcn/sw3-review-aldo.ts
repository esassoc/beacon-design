// Adapter for <BcnSw3ReviewAldo>: step 2's conversation with Aldo about the commitment in
// view. The kit renders; this file decides what is said. One conversation per commitment,
// kept in sw3-store (talk), so coming back to a commitment shows what was said about it.
//
// The person tells Aldo how to parse in their own words (sw3-review-talk.ts reads them):
// you missed this, split R2, merge R1 and R2, R3 is not a requirement, always split
// lettered items. Aldo answers with what it would change; a proposal applies only when
// pressed. What the review flags on the commitment is the Open items list, each with its
// answers. A rule is an instruction in effect for every commitment.
//
//   in   sw3:rev-current    detail: { code }                    the commitment in view
//   in   sw3:rev-selection  detail: { code, range, quote } | null  words selected in its text
//   out  sw3:rev-go         detail: { code, reqId? }            a reference was pressed
//   out  sw3:req-edit       detail: { id }                      Edit, from an open item

import {
  initSw3,
  commitmentOf,
  requirementsOf,
  flagsOf,
  payload,
  talk,
  pushTalk,
  settleProposal,
  takeBackTalk,
  parseRules,
  keepRequirement,
  removeRequirement,
  editRequirement,
  markNotBinding,
  acceptMerge,
  dismissMerge,
  mergeSplit,
  dismissFind,
  confirmCommitment,
  isConfirmed,
  type ReviewTalk,
  type ReviewProposal,
} from './sw3-store';
import { interpretReview, applyProposal, nameFrom, guessType, entitiesIn, reqName } from './sw3-review-talk';
import { REQUIREMENT_TYPE_LABEL } from '../../data/setup-wizard';
import { ALDO, type ActionButton, type Anchor, type Command, type ContextRef, type Instruction, type Mention, type OpenItem, type TextRun, type Turn } from '../../data/aldo';
import { aldoParts, pressWith, type AldoHost } from './aldo/aldo-parts';
import { mountThread } from './aldo/aldo-thread';
import { mountInstructions, mountNeeds } from './aldo/aldo-panel';
import { mountComposer } from './aldo/aldo-composer';
import type { Range } from '../../lib/anchored-text';

type A = { kind: 'review' };
type T = Turn<A>;
type Btn = ActionButton<A>;

const YOU = { kind: 'person', id: 'me', name: 'You' } as const;
const short = (code: string) => code.replace(/^COA\s+/, '');
const iso = (ms: number) => new Date(ms).toISOString();
const words = (s: string, n: number) => {
  const w = s.replace(/\s+/g, ' ').trim().split(' ');
  return w.length > n ? `${w.slice(0, n).join(' ')}…` : w.join(' ');
};

const COMMANDS: Command[] = [
  { name: 'missed', hint: 'Words that should be a requirement', text: 'You missed ' },
  { name: 'split', hint: 'Split the selected requirement at its sentences', text: 'Split this' },
  { name: 'merge', hint: 'Make two requirements one (@ each)', text: 'Merge ' },
  { name: 'remove', hint: 'The selected requirement is not one', text: 'Remove this' },
  { name: 'type', hint: 'Change the selected requirement type', text: 'This is ' },
  { name: 'why', hint: 'How the selected requirement was read', text: 'Why this?' },
  { name: 'rule', hint: 'How to parse every commitment', text: 'Rule: ' },
];

export function setupSw3ReviewAldo(root: HTMLElement): void {
  initSw3();
  const fire = (name: string, detail: unknown) => document.dispatchEvent(new CustomEvent(name, { detail }));
  let code = '';
  /** The requirement selected in the rail: what "this" means. */
  let focusId: string | null = null;
  let chips: ContextRef[] = [];
  let selection: { range: Range; quote: string } | null = null;

  const host: AldoHost<A> = {
    // A suggestion carries what the composer carries: the selected requirement, the words.
    say: (text) => send(text, chips, 'button'),
    act: () => {},
    go: (a) => {
      if (a.kind === 'entity' && a.entity === 'requirement') fire('sw3:rev-go', { code, reqId: a.id });
      else if (a.kind === 'entity' && a.entity === 'commitment') fire('sw3:rev-go', { code: a.id });
    },
  };
  const press = pressWith(host, root.querySelector('[data-aldo-panel]') ?? root);
  const parts = aldoParts(root);

  /** R1, R2 and commitment IDs in Aldo's text open what they name. */
  const linkify = (text: string): TextRun[] => {
    const reqs = requirementsOf(code);
    const out: TextRun[] = [];
    let last = 0;
    void reqs;
    for (const m of text.matchAll(/\b(COA \d+(?:\.\d+)+)\b/g)) {
      const at = m.index ?? 0;
      let go: Anchor | null = null;
      if (m[1] && commitmentOf(m[1])) go = { kind: 'entity', entity: 'commitment', id: m[1] };
      if (!go) continue;
      if (at > last) out.push(text.slice(last, at));
      out.push({ label: m[0], go });
      last = at + m[0].length;
    }
    if (last < text.length) out.push(text.slice(last));
    return out;
  };

  const thread = mountThread<A>(root.querySelector('[data-aldo-thread]')!, {
    parts,
    press,
    linkify,
    canChange: (turnId) => {
      const t = talk().at(-1);
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

  // ── Saying something ────────────────────────────────────────────────────────
  const send = (text: string, context: ContextRef[], via: 'typed' | 'button') => {
    if (!code) return;
    const sel = selection;
    const attached = context.flatMap((c) => (c.anchor?.kind === 'entity' && c.anchor.entity === 'requirement' ? [c.anchor.id] : []));
    const r = interpretReview(code, text, sel?.range ?? null, attached);
    pushTalk(
      {
        code,
        via,
        text,
        context: context.map(({ id, kind, label }) => ({ id, kind, label })),
        reply: r.reply,
        proposals: r.proposals?.map((p, i) => ({ id: `p${i}`, label: p.label, p: p.p })),
      },
      r.rule,
    );
    choices = r.choices ?? [];
    render();
  };
  /** A press on the record, said as one quiet line. */
  const event = (text: string) => pushTalk({ code, via: 'button', text, reply: '', event: true });

  const composer = mountComposer<A>(root, parts, (text, context) => send(text, context, 'typed'));
  composer.setCommands(COMMANDS);
  let choices: { label: string; text: string }[] = [];

  // ── The conversation for the commitment in view ─────────────────────────────
  const reqLabel = (id: string) => reqName(code, id);
  const proposalLine = (p: ReviewProposal): string => {
    switch (p.kind) {
      case 'add':
        return `Added ${p.name}`;
      case 'split':
        return `Split ${reqLabel(p.reqId)} in ${p.cuts.length + 1}`;
      case 'merge':
        return `Merged ${[p.keepId, ...p.otherIds].map(reqLabel).join(' and ')}`;
      case 'remove':
        return `Removed ${reqLabel(p.reqId)}`;
      case 'notBinding':
        return 'Marked not binding';
      case 'patch':
        return `Changed ${reqLabel(p.reqId)}: ${p.what}`;
    }
  };

  const opening = (): T => {
    const reqs = requirementsOf(code);
    const flags = flagsOf(code);
    const n = reqs.length;
    const open = flags.length;
    const text = !commitmentOf(code)?.text
      ? `${short(code)} is still being parsed.`
      : `${n} requirement${n === 1 ? '' : 's'} in ${short(code)}.` +
        (open ? ` ${open} to settle in Open items.` : reqs.length ? ' Nothing to settle.' : '');
    return { id: `${code}:opening`, at: iso(0), by: ALDO, via: 'event', actions: [], kind: 'opening', text };
  };

  const turnOf = (t: ReviewTalk): T => {
    if (t.event) return { id: `${code}:${t.id}`, at: iso(t.wall), time: iso(t.wall), by: YOU, via: 'button', kind: 'event', actions: [], text: t.text };
    const offers: Btn[] = (t.proposals ?? [])
      .filter((p) => !p.state)
      .flatMap((p) => [
        {
          label: p.label,
          tone: p.p.kind === 'remove' ? ('danger' as const) : ('success' as const),
          does: {
            run: () => {
              applyProposal(p.p);
              settleProposal(t.id, p.id, 'accepted');
              event(proposalLine(p.p));
            },
          },
        },
      ]);
    if (offers.length)
      offers.push({
        label: offers.length > 1 ? 'None of these' : 'Dismiss',
        does: { run: () => (t.proposals ?? []).filter((p) => !p.state).forEach((p) => settleProposal(t.id, p.id, 'dismissed')) },
      });
    const settled = (t.proposals ?? []).filter((p) => p.state === 'dismissed').length;
    return {
      id: `${code}:${t.id}`,
      at: iso(t.wall),
      time: iso(t.wall),
      by: YOU,
      via: t.via,
      text: t.text,
      context: t.context as ContextRef[] | undefined,
      actions: [],
      reply: { text: t.reply + (settled && !offers.length && !(t.proposals ?? []).some((p) => p.state === 'accepted') ? ' Left as it was.' : ''), offers },
    };
  };

  // ── Open items: what the review flags on this commitment ────────────────────
  const items = (): OpenItem<A>[] => {
    const c = commitmentOf(code);
    if (!c?.text) return [];
    const reqs = requirementsOf(code);
    const name = (id?: string) => (id ? reqLabel(id) : '');
    const ent = new Map((payload().entities ?? []).map((e) => [e.id, e.name]));
    const at = iso(1);
    const item = (id: string, kind: string, text: string, answers: Btn[], reqId?: string): OpenItem<A> => ({
      id: `${code}:need:${id}`,
      kind,
      raisedBy: `${code}:opening`,
      raisedAt: at,
      text,
      anchor: reqId ? { kind: 'entity', entity: 'requirement', id: reqId } : undefined,
      answers,
    });
    /** An answer: does it, and records it as one line. */
    const run = (label: string, fn: () => void, tone?: Btn['tone'], line = label): Btn => ({ label, tone, does: { run: () => (fn(), event(line)) } });
    let text = '';
    return flagsOf(code).map((f, i) => {
      switch (f.kind) {
        case 'unanchored':
          text = `${name(f.reqId)} quotes words that are not in the text.`;
          return item(`un${i}`, f.kind, text, [run('Keep', () => keepRequirement(f.reqId!), undefined, `Kept ${name(f.reqId)} as quoted`), run(`Remove ${name(f.reqId)}`, () => removeRequirement(f.reqId!), 'danger')], f.reqId);
        case 'duplicate':
          text = `${name(f.reqId)} covers the same words as ${name(f.otherId)}.`;
          return item(`dup${i}`, f.kind, text, [run(`Remove ${name(f.reqId)}`, () => removeRequirement(f.reqId!), 'danger'), run('Keep both', () => keepRequirement(f.reqId!), undefined, `Kept ${name(f.reqId)} and ${name(f.otherId)}`)], f.reqId);
        case 'uncovered': {
          const quote = c.text!.slice(f.range!.start, f.range!.end).trim();
          text = `“${words(quote, 10)}” is in no requirement.`;
          return item(`gap${f.range!.start}`, f.kind, text, [
            run(
              'Add as a requirement',
              () => applyProposal({ kind: 'add', code, range: f.range!, name: nameFrom(quote), type: guessType(quote), ...entitiesIn(quote) }),
              'info',
              `Added ${nameFrom(quote)}`,
            ),
            run('Not binding', () => markNotBinding(code, f.range!.start)),
          ]);
        }
        case 'type': {
          const r = reqs.find((x) => x.id === f.reqId)!;
          text = `${name(f.reqId)} reads as ${REQUIREMENT_TYPE_LABEL[r.type]}, but not clearly.`;
          return item(`type${i}`, f.kind, text, [
            run(`${REQUIREMENT_TYPE_LABEL[r.type]} is right`, () => editRequirement(r.id, {}), 'success', `${name(f.reqId)} is ${REQUIREMENT_TYPE_LABEL[r.type]}`),
            { label: 'Change', does: { run: () => fire('sw3:req-edit', { id: r.id }) } },
          ], f.reqId);
        }
        case 'merge': {
          const m = payload().merges.find((x) => x.id === f.mergeId)!;
          text = `${m.fromIds.map((id) => ent.get(id)).join(', ')}: the same as ${ent.get(m.intoId)}?`;
          return item(`merge${m.id}`, f.kind, text, [run('Merge', () => acceptMerge(m.id), 'info', `Merged ${m.fromIds.map((id) => ent.get(id)).join(', ')} into ${ent.get(m.intoId)}`), run('Keep separate', () => dismissMerge(m.id), undefined, `Kept ${m.fromIds.map((id) => ent.get(id)).join(', ')} separate`)]);
        }
        case 'split': {
          const split = payload().finds.find((x) => x.kind === 'split' && x.partOf === code);
          text = `The passage at the top of p. ${split?.page ?? ''} reads as the rest of ${short(code)}.`;
          return item('split', f.kind, text, [run('Merge it in', () => split && mergeSplit(split.id), 'info', `Merged p. ${split?.page ?? ''} into ${short(code)}`), run('Keep separate', () => split && dismissFind(split.id))]);
        }
        case 'missed':
          text = `${short(code)} was marked by hand. Check what it requires.`;
          return item('missed', f.kind, text, [run('Looks right', () => confirmCommitment(code), 'success')]);
        default:
          text = `${short(code)} needs a look.`;
          return item(`f${i}`, f.kind, text, []);
      }
    });
  };

  // ── Context: the commitment, and the words selected in it ───────────────────
  const paintContext = () => {
    if (!code) return;
    const refs: ContextRef[] = [{ id: `entity:commitment:${code}`, kind: 'entity', label: short(code), anchor: { kind: 'entity', entity: 'commitment', id: code } }];
    const focus = focusId && requirementsOf(code).find((r) => r.id === focusId);
    if (focus) refs.push({ id: `entity:requirement:${focus.id}`, kind: 'entity', label: words(focus.name, 5), anchor: { kind: 'entity', entity: 'requirement', id: focus.id } });
    if (selection) refs.push({ id: `sel:${code}:${selection.range.start}`, kind: 'entity', label: `“${words(selection.quote, 6)}”` });
    chips = refs;
    composer.setContext(refs);
    composer.setSuggestions(
      selection
        ? [
            { label: 'Add as a requirement', text: 'You missed this one' },
            { label: 'Not binding', text: 'This is not binding' },
            { label: 'Split here', text: 'Split this' },
          ]
        : choices,
      press,
    );
  };

  const render = () => {
    if (!code) return;
    const turns = [opening(), ...talk(code).map(turnOf)];
    thread.render(code, turns);
    needsList.setItems(items());
    instructions.setInstructions(parseRules().map((text, i): Instruction => ({ id: `rule${i}`, kind: 'rule', text, from: 'start', sourceTurn: '' })));
    composer.setMentions(
      requirementsOf(code).map((r): Mention => ({
        label: r.name,
        detail: REQUIREMENT_TYPE_LABEL[r.type],
        ref: { id: `entity:requirement:${r.id}`, kind: 'entity', label: words(r.name, 5), anchor: { kind: 'entity', entity: 'requirement', id: r.id } },
      })),
    );
    paintContext();
    root.querySelector('[data-aldo-panel]')?.toggleAttribute('data-confirmed', isConfirmed(code));
  };

  document.addEventListener('sw3:rev-current', (e) => {
    const d = (e as CustomEvent<{ code: string; reqId?: string | null }>).detail;
    const next = d.code;
    const nextFocus = d.reqId ?? null;
    if (next === code) {
      if (nextFocus !== focusId) ((focusId = nextFocus), paintContext());
      return;
    }
    focusId = nextFocus;
    code = next;
    selection = null;
    choices = [];
    render();
    thread.scrollToEnd();
  });
  document.addEventListener('sw3:rev-selection', (e) => {
    const d = (e as CustomEvent<{ code: string; range: Range; quote: string } | null>).detail;
    selection = d && d.code === code ? { range: d.range, quote: d.quote } : null;
    paintContext();
  });
  document.addEventListener('sw3:change', render);
}
