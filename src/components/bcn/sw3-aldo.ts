// Adapter for <BcnSw3Aldo>: maps sw3-store onto the Aldo kit (src/data/aldo.ts) for the
// document in view, and routes what its buttons open to the workspace. The kit renders;
// this file decides what is said. Everything is derived from the store on each change:
// Aldo's opening (the scope pass), each steer as a person's turn with its reply, the check
// after the first commitments, and what the scan raises as it reaches it. Nothing is stored
// twice; the steers ARE the record, one conversation per document.
//
//   out  sw3:page  detail: { page }   a page anchor; the host moves the page
//   out  sw3:find  detail: { id }     a commitment anchor; the host shows it
//   out  sw3:mark  detail: { page? }  Mark (on a page): the host arms drawing
//   out  sw3:redraw detail: { id }    Redraw the box, from a Fix
//   in   sw3:edit  detail: { id }     Edit ID and name, from the page tools
//
// What waits on the person is the Needs you list, until it is answered: the check, a
// flagged reference, a passage with no heading, pages with nothing found, a box with no ID.
// The thread keeps the notice text; the answers live only in the list.

import {
  initSw3,
  payload,
  activeDoc,
  started,
  finished,
  now,
  paused,
  pausing,
  steers,
  finds,
  scanned,
  inScope,
  state,
  rereads,
  rereadEnd,
  findOf,
  checking,
  checked,
  identified,
  fixCommitment,
  editFind,
  openItems,
  preparing,
  rules,
  commitmentCount,
  headedForCheck,
  heldForStep,
  manual,
  calibrationPoint,
  skipped,
  stopped,
  headPage,
  pace as currentPace,
  act,
  say,
  takeBack,
  canTakeBack,
  type Steer,
} from './sw3-store';
import type { SteerAction } from './sw3-steer';
import { ALDO, runAt, type ActionButton, type Anchor, type Card, type Choice, type Command, type ContextRef, type Instruction, type Mention, type OpenItem, type Status, type TextRun, type Turn } from '../../data/aldo';
import { aldoParts, pressWith, type AldoHost } from './aldo/aldo-parts';
import { mountThread } from './aldo/aldo-thread';
import { mountInstructions, mountNeeds } from './aldo/aldo-panel';
import { mountComposer } from './aldo/aldo-composer';

type Btn = ActionButton<SteerAction>;
type T = Turn<SteerAction>;

const YOU = { kind: 'person', id: 'me', name: 'You' } as const;

const range = (a: number, b: number) => (a === b ? `p. ${a}` : `pp. ${a}–${b}`);

/** What / offers on a scan: each starts a message the interpreter reads. */
const COMMANDS: Command[] = [
  { name: 'scope', hint: 'Read only these pages', text: 'Only read pp. ' },
  { name: 'skip', hint: 'Skip a named part, such as an appendix', text: 'Skip ' },
  { name: 'rule', hint: 'An instruction for the pages ahead', text: 'Rule: ' },
  { name: 'reread', hint: 'Read pages again with the instructions in effect', text: 'Re-read pp. ' },
  { name: 'why', hint: 'Ask how a commitment was read', text: 'Why did you read ' },
  { name: 'pause', hint: 'Pause the scan', text: 'Pause' },
  { name: 'resume', hint: 'Go on reading', text: 'Resume' },
];
const QUESTION = /^(why|what|how|where|when|which|who|did|does|is|are)\b|\?\s*$/i;

const PACE_REPLY_GO = {
  run: 'Reading the rest. I will raise anything that needs you as I reach it.',
  watch: 'Reading the rest slowly, so you can follow along.',
  step: 'One commitment at a time: I will stop after each.',
} as const;

export function setupSw3Aldo(root: HTMLElement): void {
  /** Confirming the check goes on reading: Fast after it, unless One at a time was chosen. */
  const goOn = (): { action: SteerAction; reply: string } => {
    const p = currentPace() === 'step' ? 'step' : 'run';
    return { action: { kind: 'go', pace: p }, reply: PACE_REPLY_GO[p] };
  };
  const leftToCheck = () => (payload().calibrate ?? []).filter((c) => !checked().includes(c));
  initSw3();
  const reviewHref = root.dataset.review ?? '';
  const review: Anchor = { kind: 'route', path: reviewHref };
  const commitment = (id: string): Anchor => ({ kind: 'entity', entity: 'commitment', id });
  const page = (p: number): Anchor => ({ kind: 'page', documentId: activeDoc(), page: p });
  const fire = (name: string, detail: unknown) => document.dispatchEvent(new CustomEvent(name, { detail }));

  const host: AldoHost<SteerAction> = {
    say,
    act: (label, actions, reply) => act(label, actions, reply),
    go: (a) => {
      if (a.kind === 'page') fire('sw3:page', { page: a.page });
      else if (a.kind === 'entity') fire('sw3:find', { id: a.id });
      else if (a.kind === 'route') location.href = a.path;
    },
  };
  const press = pressWith(host, root.querySelector('[data-aldo-panel]') ?? root);
  const parts = aldoParts(root);
  // A commitment's ID or a page in Aldo's text is a reference: it moves the page beside Aldo.
  const REF = /\b(COA \d+(?:\.\d+)*|MM [A-Z]+-\d+[a-z]?)\b|\bpp?\. (\d+)(?:–\d+)?/g;
  const linkify = (text: string): TextRun[] => {
    const out: TextRun[] = [];
    let last = 0;
    for (const m of text.matchAll(REF)) {
      const at = m.index ?? 0;
      let go: Anchor | null = null;
      if (m[1]) {
        const f = finds().find((x) => x.code === m[1] || x.shown === m[1]);
        if (f) go = commitment(f.id);
      } else if (m[2]) go = page(Number(m[2]));
      if (!go) continue;
      if (at > last) out.push(text.slice(last, at));
      out.push({ label: m[0], go });
      last = at + m[0].length;
    }
    if (last < text.length) out.push(text.slice(last));
    return out;
  };
  const openRef = (r: ContextRef) => r.anchor && press({ label: r.label, does: { go: r.anchor } });
  // Edit takes the message back, and what it did, and puts it in the field. Retry asks again.
  const edit = (turnId: string) => {
    const said = takeBack(turnId.split(':').pop()!);
    if (said) composer.setDraft(said.text, said.context);
  };
  const thread = mountThread<SteerAction>(root.querySelector('[data-aldo-thread]')!, {
    parts,
    press,
    linkify,
    openRef,
    canChange: (turnId) => canTakeBack(turnId.split(':').pop()!),
    onEdit: edit,
    onRetry: (turnId) => thread.replay(turnId),
    onStream: (on) => composer.setBusy(on, () => thread.stop()),
  });
  // Where the run is: said by the scan's controls, not in the conversation.
  const statusEl = document.querySelector<HTMLElement>('[data-bar-status]');
  let statusSig = '';
  const setStatus = (s: Status<SteerAction> | null, live: boolean) => {
    if (!statusEl) return;
    const sig = s ? `${s.tone}|${s.text}|${s.action?.label ?? ''}|${live}` : '';
    if (sig === statusSig) return;
    statusSig = sig;
    statusEl.hidden = !s?.action;
    statusEl.dataset.tone = s?.tone ?? '';
    statusEl.toggleAttribute('data-live', live);
    statusEl.querySelector('[data-bar-status-action]')!.replaceChildren(...(s?.action ? [parts.button(s.action, press)] : []));
  };
  const needsList = mountNeeds(root, parts, press);
  const instructions = mountInstructions(root, parts);
  /** Send with what rode along: a commitment chip names what a question is about; a file is
   *  context for this document, never a source of commitments. */
  const sayWith = (text: string, context: ContextRef[]) => {
    const codes = context.filter((r) => r.kind === 'entity').map((r) => findOf(r.anchor && 'id' in r.anchor ? r.anchor.id : '')?.code).filter(Boolean);
    const files = context.filter((r) => r.kind === 'file').map((r) => r.file!.name);
    say(text, {
      context,
      hint: codes.length && QUESTION.test(text) && !/\d+\.\d+/.test(text) ? `(${codes[0]})` : undefined,
      note: files.length ? `I have ${files.join(' and ')} as context for this file. I read ${files.length > 1 ? 'them' : 'it'} for what ${files.length > 1 ? 'they say' : 'it says'} about the commitments, never as a source of new ones.` : undefined,
    });
  };
  const composer = mountComposer<SteerAction>(root, parts, sayWith);
  composer.setCommands(COMMANDS);
  // Where the person is rides along: the page in view and the commitment selected.
  let view: { page: number; find: string | null } | null = null;
  const paintContext = () => {
    if (!view) return;
    const refs: ContextRef[] = [{ id: `page:${activeDoc()}:${view.page}`, kind: 'page', label: `p. ${view.page}`, anchor: page(view.page) }];
    const f = view.find ? finds().find((x) => x.id === view!.find) : null;
    if (f) refs.unshift({ id: `entity:commitment:${f.id}`, kind: 'entity', label: f.shown ? f.shown.replace(/^COA\s+/, '') : f.title || 'No ID', anchor: commitment(f.id) });
    composer.setContext(refs);
  };
  document.addEventListener('sw3:view', (e) => {
    view = (e as CustomEvent<{ page: number; find: string | null }>).detail;
    paintContext();
  });

  // View state: which check cards are open as forms, and the page tools' edit.
  const fixing = new Set<string>();
  let editing: { id: string; at: number } | null = null;

  // ── The opening: the scope pass ─────────────────────────────────────────────
  const opening = (): T => {
    const D = payload();
    const p = D.proposal;
    const base = { id: `${activeDoc()}:opening`, at: runAt(-1), by: ALDO, via: 'event' as const, actions: [], kind: 'opening' as const };
    // A scanned file: its page images are read before anything can be proposed.
    const prep = preparing();
    if (prep)
      return { ...base, text: `This file is scanned: it has no text layer. I am reading its pages as images first, p. ${prep.page} of ${prep.total}. Then I will tell you what is in it.` };
    const offers: Btn[] = [];
    if (!started() && !skipped() && p) {
      if (p.go) {
        const go = p.go;
        offers.push({
          label: go.label,
          tone: 'primary',
          does: {
            act: [{ kind: 'scope', first: go.first, last: go.last, label: go.scope }, { kind: 'start' }],
            reply: `Reading ${range(go.first, go.last)}. I will stop after the first ${D.calibrate?.length ?? 3} commitments so you can check how I read them.`,
          },
        });
        if (!manual())
          offers.push({
            label: 'Mark them myself',
            does: {
              run: () => {
                act('Mark them myself', { kind: 'manual' }, 'Draw a box over each commitment. I read only the text inside your boxes.');
                fire('sw3:mark', {});
              },
            },
          });
      } else {
        offers.push({ label: 'Nothing to scan', tone: 'primary', does: { act: { kind: 'skip' }, reply: 'Skipped. It stays in the project as a source document with no commitments.' } });
      }
    }
    return { ...base, text: p?.text ?? `Tell me which pages of the ${D.short} hold its commitments.`, offers };
  };

  // ── The check after the first commitments ───────────────────────────────────
  // Only what step 1 decides: was each commitment identified right (its ID, its name, the
  // text that is it). Requirements, timing and parties are step 2's.
  const checkTurns = (t: number): T[] => {
    const D = payload();
    const codes = D.calibrate ?? [];
    const cp = calibrationPoint();
    if (!started() || cp === null || t < cp || !codes.length) return [];
    const done = checked();
    const open = checking();
    const at = runAt(cp);
    const card = (code: string): Card<SteerAction> => {
      const c = identified(code);
      const base: Card<SteerAction> = {
        id: code,
        subject: { entity: 'commitment', id: code, label: c.code },
        badge: c.code,
        title: c.title,
        proposal: { id: code, state: done.includes(code) ? 'confirmed' : 'suggested' },
        settled: c.fixed ? 'Fixed' : 'Confirmed',
        actions: [],
      };
      if (fixing.has(code))
        return {
          ...base,
          edit: {
            fields: [
              { key: 'code', label: 'ID', value: c.code },
              { key: 'title', label: 'Name', value: c.title },
              { key: 'text', label: 'Text', value: c.text, multiline: true },
            ],
            save: {
              label: 'Save',
              run: (v) => {
                fixing.delete(code);
                fixCommitment(code, { code: v.code.trim() || c.code, title: v.title.trim() || c.title, text: v.text });
              },
            },
            extra: [
              { label: 'Redraw the box', does: { run: () => (fire('sw3:find', { id: code }), fire('sw3:redraw', { id: code })) } },
              { label: 'Cancel', does: { run: () => (fixing.delete(code), render()) } },
            ],
          },
        };
      return {
        ...base,
        quote: c.text,
        where: { label: `p. ${c.page}`, go: commitment(code) },
        actions:
          open && !done.includes(code)
            ? [
                leftToCheck().length === 1 && leftToCheck()[0] === code
                  ? // The last of the check: confirming it goes on reading.
                    { label: 'Looks right', tone: 'success', does: { act: [{ kind: 'check', code }, goOn().action], reply: `Noted: ${code} read right. ${goOn().reply}` } }
                  : { label: 'Looks right', tone: 'success', does: { act: { kind: 'check', code }, reply: `Noted: ${code} read right.` } },
                { label: 'Fix', does: { run: () => (fixing.add(code), render()) } },
              ]
            : [],
      };
    };
    // Aldo's lead for each: what it read the commitment from, and how far its text runs.
    const lead = (code: string, i: number) => {
      const c = identified(code);
      const f = finds().find((x) => x.code === code);
      const pages = [...new Set((f?.boxes ?? []).map((b) => b.page))].sort((a, b) => a - b);
      const words = c.text.trim() ? c.text.trim().split(/\s+/).length : 0;
      const runsOn = pages.length > 1 ? `, onto p. ${pages.at(-1)}` : '';
      if (c.columns) return `${i + 1} of ${codes.length}. I took the ID and name from the row on p. ${c.page}. The text runs ${words} words${runsOn}, up to the next row.`;
      return `${i + 1} of ${codes.length}. I took the ID and name from the heading on p. ${c.page}. The text runs ${words} words${runsOn}, up to the next heading.`;
    };
    const allChecked = codes.every((c) => done.includes(c));
    return [
      {
        id: `${activeDoc()}:check`,
        at,
        by: ALDO,
        via: 'event',
        actions: [],
        text: open
          ? allChecked
            ? `All ${codes.length} checked.`
            : `First ${codes.length} of the ${D.short}. Check each ID, name, and where its text starts and ends. What you fix, I apply to the rest of the file.`
          : `I read the first ${codes.length} commitments and stopped for you to check them.`,
      },
      ...codes.map((code, i): T => ({ id: `${activeDoc()}:check:${code}`, at, by: ALDO, via: 'event', kind: 'check', actions: [], text: lead(code, i), cards: [card(code)] })),
    ];
  };

  // ── Edit ID and name, from the page tools ───────────────────────────────────
  // Any commitment on the page, not only those at the check: its ID, name and (for one the
  // scan read) its text, in the conversation where the record of it is.
  document.addEventListener('sw3:edit', (e) => {
    editing = { id: (e as CustomEvent<{ id: string }>).detail.id, at: now() };
    render();
    requestAnimationFrame(() => {
      const id = `${activeDoc()}:edit`;
      thread.scrollTo(id);
      thread.element(id)?.querySelector<HTMLElement>('esa-text-field')?.focus({ preventScroll: true } as FocusOptions);
    });
  });
  const editTurn = (): T[] => {
    const f = editing && finds().find((x) => x.id === editing!.id);
    if (!editing || !f) return [];
    const c = f.code ? identified(f.code) : null;
    const pg = f.boxes[0]?.page ?? f.page;
    return [
      {
        id: `${activeDoc()}:edit`,
        at: runAt(editing.at),
        by: ALDO,
        via: 'event',
        kind: 'check',
        actions: [],
        text: f.shown ? `${f.shown} on p. ${pg}, as I have it.` : `Your box on p. ${pg}. Give it an ID and a name.`,
        cards: [
          {
            id: `edit:${f.id}`,
            subject: { entity: 'commitment', id: f.id, label: f.shown },
            badge: f.shown || undefined,
            title: f.parsed || f.shown ? f.title : `Box on p. ${pg}`,
            actions: [],
            edit: {
              fields: [
                { key: 'code', label: 'ID', value: f.shown },
                { key: 'title', label: 'Name', value: f.parsed || f.shown ? f.title : '' },
                ...(c ? [{ key: 'text', label: 'Text', value: c.text, multiline: true }] : []),
              ],
              save: {
                label: 'Save',
                run: (v) => {
                  editing = null;
                  editFind(f.id, { code: v.code.trim() || f.shown, title: v.title.trim() || f.title, ...(c ? { text: v.text } : {}) });
                  render();
                },
              },
              extra: [{ label: 'Cancel', does: { run: () => ((editing = null), render()) } }],
            },
          },
        ],
      },
    ];
  };

  // ── What the scan raises ────────────────────────────────────────────────────
  const eventT = (findId: string) =>
    (payload().events.find((e) => e.type === 'commitment_found' && e.findId === findId) as { t: number } | undefined)?.t ?? Infinity;

  const notice = (id: string, t: number, text: string, offers: Btn[] = []): T => ({ id, at: runAt(t), by: ALDO, via: 'event', kind: 'notice', actions: [], text, offers });

  const notices = (t: number): T[] => {
    const D = payload();
    const live = new Set(finds().map((f) => f.id));
    const out: T[] = [];
    const s = state();
    const doc = activeDoc();

    for (const f of D.finds) {
      if (!inScope(f.page)) continue;
      if (f.kind === 'false') {
        const at = eventT(f.id) + 3;
        if (at > t) continue;
        // Read after a cross-reference rule, it never surfaced: there is nothing to raise.
        const ruleAt = steers().find((x) => x.actions.some((a) => a.kind === 'rule' && a.crossRef))?.at;
        if (ruleAt !== undefined && ruleAt <= eventT(f.id)) continue;
        out.push(notice(`${doc}:n:false:${f.id}`, at, `${f.code} on p. ${f.page} has no requirements of its own. It reads like a reference to another condition.`));
      }
      if (f.kind === 'split') {
        const at = eventT(f.id);
        if (at > t) continue;
        const parent = f.partOf ? findOf(f.partOf) : undefined;
        out.push(notice(`${doc}:n:split:${f.id}`, at, `The passage at the top of p. ${f.page} has no heading of its own. It reads as the rest of ${parent?.code ?? 'the commitment before it'}.`));
      }
    }

    // The run's end: what was read and where nothing was found.
    const inScopePages = D.events.filter((e) => e.type === 'page_scanned' && inScope((e as { page: number }).page));
    const read = scanned();
    if (started() && inScopePages.length && inScopePages.every((e) => read.has((e as { page: number }).page))) {
      const at = Math.max(...inScopePages.map((e) => e.t));
      const n = commitmentCount();
      const open = openItems().length;
      out.push(
        notice(
          `${doc}:n:done`,
          at,
          `Read ${range(Math.min(...read), Math.max(...read))}: ${n} commitments.${open ? ` ${open} to settle, listed below.` : ''}`,
          doc === 'itp' ? [{ label: 'Review commitments', tone: 'primary', does: { go: review } }] : [],
        ),
      );
    }

    // Re-reads, once done: what changed.
    rereads().forEach((r, i) => {
      const at = rereadEnd(r);
      if (at > t) return;
      const changed = D.finds.filter(
        (f) => f.kind === 'false' && f.page >= r.first && f.page <= r.last && !live.has(f.id) && !s.dismissed.includes(f.id) && eventT(f.id) <= r.at,
      );
      out.push(notice(`${doc}:n:reread:${i}`, at, `Re-read ${range(r.first, r.last)}. ${changed.length ? `${changed.map((f) => f.code).join(', ')} removed: a reference to another condition.` : 'No changes.'}`));
    });
    return out;
  };

  // ── Steers: a person's turn and the reply to it ─────────────────────────────
  /** A steer given with the scan's controls, as a line: what was done and where. */
  const controlLine = (x: Steer): string => {
    const where = x.page ? ` on p. ${x.page}` : '';
    const pace = x.actions.find((a) => a.kind === 'pace' || a.kind === 'go') as { pace?: string } | undefined;
    if (x.actions.some((a) => a.kind === 'start')) return 'Started the scan';
    if (x.text.startsWith('Speed:')) return `Set the speed to ${x.text.slice(6).trim()}${where}`;
    if (x.actions.some((a) => a.kind === 'pause')) return `Paused${where}`;
    return `Resumed${where}${pace?.pace === 'run' ? ', fast' : ''}`;
  };
  const steerTurn = (x: Steer): T => {
    // The scan's controls are recorded like any steer (the model sees the person slow it
    // down), but the conversation shows one quiet line, and Aldo only answers a start.
    // Steers saved before the flag existed are recognized by their labels.
    if (x.controls ?? (x.via === 'button' && (/^(Start|Resume|Pause)$/.test(x.text) || x.text.startsWith('Speed:'))))
      return {
        id: `${activeDoc()}:${x.id}`,
        at: runAt(x.at),
        time: x.wall ? new Date(x.wall).toISOString() : undefined,
        by: YOU,
        via: 'button',
        kind: 'event',
        text: controlLine(x),
        actions: x.actions,
        reply: x.actions.some((a) => a.kind === 'start') ? { text: x.reply } : undefined,
      };
    const offer = x.offer;
    const offerOpen = offer && !rereads().some((r) => r.at >= x.at && r.first <= offer.first && r.last >= offer.last);
    // Steers recorded before `unclear` was an action kind carry their readings on the side.
    const actions: SteerAction[] = x.choices && !x.actions.some((a) => a.kind === 'unclear') ? [...x.actions, { kind: 'unclear', choices: x.choices }] : x.actions;
    return {
      id: `${activeDoc()}:${x.id}`,
      at: runAt(x.at),
      time: x.wall ? new Date(x.wall).toISOString() : undefined,
      by: YOU,
      via: x.via,
      text: x.text,
      anchor: x.page ? page(x.page) : undefined,
      context: x.context,
      actions,
      reply: {
        text: x.reply,
        offers:
          offerOpen && offer
            ? [
                {
                  label: `Re-read ${range(offer.first, offer.last)}`,
                  tone: 'info',
                  does: { act: { kind: 'reread', first: offer.first, last: offer.last }, reply: `Re-reading ${range(offer.first, offer.last)} with the instructions now in effect.` },
                },
              ]
            : [],
      },
    };
  };

  // ── What waits on the person ────────────────────────────────────────────────
  const items = (): OpenItem<SteerAction>[] => {
    const doc = activeDoc();
    const raised = (id: string, t: number, kind: string, text: string, answers: Btn[], anchor?: Anchor): OpenItem<SteerAction> => ({
      id: `${doc}:need:${id}`,
      kind,
      raisedBy: `${doc}:${id}`,
      raisedAt: runAt(t),
      text,
      anchor,
      answers,
    });
    return openItems()
      .map((it) => {
        switch (it.kind) {
          case 'check':
            return raised('check', it.t, it.kind, `Check the first ${it.total}: ${it.left.length} left.`, [
              { label: 'All look right', tone: 'success', does: { act: [...it.left.map((code) => ({ kind: 'check' as const, code })), goOn().action], reply: `Good. ${goOn().reply}` } },
              { label: 'Show them', does: { run: () => thread.scrollTo(`${doc}:check`) } },
            ]);
          case 'go':
            return raised('go', it.t, it.kind, `All ${it.total} checked. How should I read the rest?`, [
              { label: 'Read the rest', tone: 'primary', does: { act: { kind: 'go', pace: 'run' }, reply: PACE_REPLY_GO.run } },
              { label: 'Watch it', does: { act: { kind: 'go', pace: 'watch' }, reply: PACE_REPLY_GO.watch } },
              { label: 'One at a time', does: { act: { kind: 'go', pace: 'step' }, reply: PACE_REPLY_GO.step } },
            ]);
          case 'false':
            return raised(
              `false:${it.findId}`,
              it.t,
              it.kind,
              `${it.code} on p. ${it.page} reads like a reference to another condition.`,
              [
                { label: `Dismiss ${it.code}`, tone: 'danger', does: { act: { kind: 'dismiss', findId: it.findId, code: it.code }, reply: `Removed ${it.code}.` } },
                { label: 'Keep it', does: { run: () => act(`Keep ${it.code}`, { kind: 'keep', findId: it.findId, code: it.code }, `Kept ${it.code} as a commitment.`) } },
                { label: 'Skip all cross-references', tone: 'info', does: { say: 'References to another condition are not commitments' } },
              ],
              commitment(it.findId),
            );
          case 'split':
            return raised(
              `split:${it.findId}`,
              it.t,
              it.kind,
              `The top of p. ${it.page} has no heading. It reads as the rest of ${it.code}.`,
              [
                { label: `Merge into ${it.code}`, tone: 'info', does: { run: () => act(`Merge p. ${it.page} into ${it.code}`, { kind: 'merge', findId: it.findId, code: it.code }, `Merged. ${it.code} now runs onto p. ${it.page}.`) } },
                { label: 'Keep separate', does: { run: () => act(`Keep p. ${it.page} separate`, { kind: 'keep', findId: it.findId, code: it.code }, `Kept the passage on p. ${it.page} as its own.`) } },
              ],
              commitment(it.findId),
            );
          case 'gap': {
            const where = range(it.first, it.last);
            return raised(
              `gap:${it.first}`,
              it.t,
              it.kind,
              `Nothing found on ${where}.`,
              [
                { label: `Mark on p. ${it.first}`, tone: 'info', does: { run: () => fire('sw3:mark', { page: it.first }) } },
                { label: 'Nothing there', does: { run: () => act(`Nothing on ${where}`, { kind: 'clear', first: it.first, last: it.last }, `Noted: no commitments on ${where}.`) } },
              ],
              page(it.first),
            );
          }
          case 'mark':
            return raised(
              `mark:${it.findId}`,
              it.t,
              it.kind,
              `Your box on p. ${it.page} has no ID.`,
              [{ label: 'Edit ID and name', does: { run: () => (fire('sw3:find', { id: it.findId }), fire('sw3:edit', { id: it.findId })) } }],
              commitment(it.findId),
            );
        }
      })
      .sort((a, b) => (a.raisedAt < b.raisedAt ? 1 : a.raisedAt > b.raisedAt ? -1 : 0));
  };

  // ── Instructions in effect ──────────────────────────────────────────────────
  const instructionList = (): Instruction[] => {
    const out: Instruction[] = [];
    if (started()) {
      const sc = state().scope;
      out.push({ id: 'scope', kind: 'scope', text: `Read ${range(sc.first, sc.last)}.`, from: 'start', sourceTurn: '' });
    }
    for (const r of rules()) out.push({ id: `rule:${r.id}`, kind: 'rule', text: r.text, from: r.page ? page(r.page) : 'start', sourceTurn: r.id });
    for (const [code, f] of Object.entries(state().fixes)) {
      const what = [f.code && f.code !== code ? `ID ${f.code}` : '', f.title ? `name "${f.title}"` : '', f.text !== undefined ? 'its text' : ''].filter(Boolean).join(', ');
      if (what) out.push({ id: `fix:${code}`, kind: 'fix', text: `Read like your fix of ${code}: ${what}.`, from: 'start', sourceTurn: '' });
    }
    return out;
  };

  // ── Status: where the run is, the one place it is said ──────────────────────
  const statusOf = (): Status<SteerAction> | null => {
    const D = payload();
    const total = D.total ?? D.scope.last;
    const head = started() ? headPage() : null;
    const n = commitmentCount();
    const open = openItems().length;
    const prep = preparing();
    if (prep) return { tone: 'info', text: `Reading page images: p. ${prep.page} of ${prep.total}.` };
    if (skipped()) return null;
    // Marking by hand: no run, only the person's boxes.
    if (!started()) return manual() ? { tone: 'info', text: `By hand. ${finds().length} marked.` } : null;
    if (checking()) {
      const left = (D.calibrate?.length ?? 3) - checked().length;
      return { tone: 'warning', text: left > 0 ? `Stopped for your check: ${left} left.` : 'Checked. Resume to read the rest.' };
    }
    // Done: nothing to say by the controls. The Library row carries what is left to settle.
    if (finished() || head === null) return null;
    if (heldForStep()) return { tone: 'info', text: `One at a time: stopped at p. ${head}. Resume reads the next commitment.` };
    if (paused() || pausing()) {
      if (!paused()) return { tone: 'info', text: `Pausing after p. ${head}.` };
      // Paused partway, by the person: what was found so far can be reviewed now.
      const action: Btn | undefined = activeDoc() === 'itp' && n > 0 ? { label: `Review the ${n} so far`, does: { go: review } } : undefined;
      return { tone: 'info', text: `Paused at p. ${Math.max(1, head - 1)} of ${total}. ${n} found so far.`, action };
    }
    const toCheck = D.calibrate?.length ?? 3;
    return {
      tone: 'info',
      text: headedForCheck() ? `Reading p. ${head} of ${total}. Stopping after ${toCheck} commitments for your check.` : `Reading p. ${head} of ${total}. ${n} found so far.`,
    };
  };

  // ── Suggestions: before the run, what Aldo proposes saying ──────────────────
  const suggestions = (): Choice[] =>
    skipped() || preparing() || started() || manual() ? [] : (payload().proposal?.suggest ?? []).map((text) => ({ label: text, text }));

  // ── Render ──────────────────────────────────────────────────────────────────
  let lastDoc = '';
  const render = () => {
    const doc = activeDoc();
    if (doc !== lastDoc) {
      lastDoc = doc;
      editing = null;
      fixing.clear();
    }
    const t = now();
    // At one run time (the check holds the clock), what was said follows the check.
    thread.render(doc, [opening(), ...checkTurns(t), ...steers().map(steerTurn), ...notices(t), ...editTurn()]);
    instructions.setInstructions(instructionList());
    needsList.setItems(items());
    setStatus(statusOf(), !!preparing() || (started() && !finished() && headPage() !== null && !paused() && !checking() && !heldForStep()));
    composer.setSuggestions(suggestions(), press);
    composer.setMentions(
      finds()
        .filter((f) => f.shown || f.title)
        .map((f): Mention => {
          const code = f.shown ? f.shown.replace(/^COA\s+/, '') : '';
          return {
            label: code ? `${code} ${f.title ?? ''}`.trim() : f.title,
            detail: `p. ${f.page}`,
            ref: { id: `entity:commitment:${f.id}`, kind: 'entity', label: code || f.title, anchor: commitment(f.id) },
          };
        }),
    );
  };

  document.addEventListener('sw3:change', render);
  render();
  thread.scrollToEnd();
}
