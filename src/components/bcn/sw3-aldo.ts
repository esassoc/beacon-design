// Controller for <BcnSw3Aldo>. setupX shape: owns the conversation for the document in
// view. Everything it shows is derived from sw3-store on each change: Aldo's opening (the
// scope pass), each steer (what was said, the page the scan was on, Aldo's reply), the
// check after the first commitments, and what the scan raises as it reaches it. Nothing
// here is stored twice; the steers ARE the record, one per document.
//
//   out  sw3:page  detail: { page }   a "Show p. N" answer; the host moves the page
//   out  sw3:find  detail: { id }     a commitment named in the check; the host shows it
//   out  sw3:mark  detail: { page? }  Mark (on a page): the host arms drawing
//   out  sw3:needs detail: { count }  how many things wait on the person (the rail's dot)
//
// What waits on the person is listed once, above the composer, until it is answered: the
// check, a flagged reference, a passage with no heading, pages with nothing found, a box
// with no ID. The log is the record of what happened; the list is the work left. A notice
// in the log keeps its text; its buttons live in the list, so each answer has one place.

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
  gaps,
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
  keptFinds,
  openGaps,
  commitmentCount,
  headedForCheck,
  heldForStep,
  manual,
  now as runNow,
  calibrated,
  calibrationPoint,
  pace,
  skipped,
  stopped,
  headPage,
  act,
  say,
  type Steer,
} from './sw3-store';
import type { SteerAction } from './sw3-steer';

type Field = HTMLElement & { value: string };

/** What a button does, in its color: the next step, accept, remove, change, or neutral. */
type Tone = 'primary' | 'success' | 'danger' | 'info' | 'neutral';
interface Btn {
  label: string;
  run: () => void;
  primary?: boolean;
  tone?: Tone;
}
interface Item {
  id: string;
  t: number;
  from: 'aldo' | 'you';
  via?: 'typed' | 'button';
  who: string;
  text: string;
  acts: Btn[];
  /** A message of a kind with its own layout (one commitment to check). */
  kind?: 'check';
  /** Rich content under the text (the check), rebuilt when its signature changes. */
  extra?: { sig: string; build: () => HTMLElement };
}

const range = (a: number, b: number) => (a === b ? `p. ${a}` : `pp. ${a}–${b}`);
/** Runs of consecutive pages, as "pp. 152–154" / "p. 160". */
const runs = (pages: number[]) => {
  const out: string[] = [];
  const s = [...pages].sort((a, b) => a - b);
  for (let i = 0; i < s.length; ) {
    let j = i;
    while (j + 1 < s.length && s[j + 1] === s[j] + 1) j++;
    out.push(range(s[i], s[j]));
    i = j + 1;
  }
  return out.join(', ');
};

export function setupSw3Aldo(root: HTMLElement): void {
  initSw3();
  const reviewHref = root.dataset.review ?? '';
  const log = root.querySelector<HTMLElement>('[data-aldo-log]')!;
  const statusEl = root.querySelector<HTMLElement>('[data-aldo-status]')!;
  const suggest = root.querySelector<HTMLElement>('[data-aldo-suggest]')!;
  const form = root.querySelector<HTMLFormElement>('[data-aldo-form]')!;
  const field = root.querySelector<Field>('[data-aldo-input]')!;
  const msgTpl = root.querySelector<HTMLTemplateElement>('[data-aldo-msg]')!;
  const btnTpl = root.querySelector<HTMLTemplateElement>('[data-aldo-btn]')!;
  const tpls: Record<Tone, HTMLTemplateElement> = {
    neutral: btnTpl,
    primary: root.querySelector<HTMLTemplateElement>('[data-aldo-btn-primary]')!,
    success: root.querySelector<HTMLTemplateElement>('[data-aldo-btn-success]')!,
    danger: root.querySelector<HTMLTemplateElement>('[data-aldo-btn-danger]')!,
    info: root.querySelector<HTMLTemplateElement>('[data-aldo-btn-info]')!,
  };
  const badgeTpl = root.querySelector<HTMLTemplateElement>('[data-aldo-badge]')!;

  const goto = (page: number) => document.dispatchEvent(new CustomEvent('sw3:page', { detail: { page } }));
  const showFind = (id: string) => document.dispatchEvent(new CustomEvent('sw3:find', { detail: { id } }));

  const button = ({ label, run, primary, tone }: Btn) => {
    const host = (tpls[tone ?? (primary ? 'primary' : 'neutral')].content.firstElementChild as HTMLElement).cloneNode(true) as HTMLElement;
    const b = host.querySelector('button') ?? host;
    (b.querySelector('.esa-button__label') ?? b).textContent = label;
    b.addEventListener('click', run);
    return host;
  };
  const badge = (code: string) => {
    const host = (badgeTpl.content.firstElementChild as HTMLElement).cloneNode(true) as HTMLElement;
    const chip = host.querySelector('.bcn-cbadge') ?? host;
    chip.textContent = code.replace(/^COA\s+/, '');
    return host;
  };
  const elx = (tag: string, cls: string, text?: string) => {
    const e = document.createElement(tag);
    e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  };

  // ── Send ────────────────────────────────────────────────────────────────────
  const send = () => {
    const text = (field.value ?? '').trim();
    if (!text) return;
    field.value = '';
    say(text);
  };
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    send();
  });
  root.querySelector('[data-aldo-send]')?.addEventListener('click', send);
  // Enter sends; Shift+Enter is a new line.
  field.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) {
      e.preventDefault();
      send();
    }
  });

  // ── The opening: the scope pass ─────────────────────────────────────────────
  const opening = (): Item => {
    const D = payload();
    const p = D.proposal;
    const acts: Btn[] = [];
    if (!started() && !skipped() && p) {
      if (p.go) {
        const go = p.go;
        if (!manual())
          acts.push({
            label: 'Mark them myself',
            run: () => {
              act('Mark them myself', { kind: 'manual' }, 'Draw a box over each commitment. I read only the text inside your boxes.');
              document.dispatchEvent(new CustomEvent('sw3:mark', { detail: {} }));
            },
          });
        acts.unshift({
          label: go.label,
          primary: true,
          run: () => act(go.label, [{ kind: 'scope', first: go.first, last: go.last, label: go.scope }, { kind: 'start' }], `Reading ${range(go.first, go.last)}. I will stop after the first ${D.calibrate?.length ?? 3} commitments so you can check how I read them.`),
        });
      } else {
        acts.push({ label: 'Nothing to scan', primary: true, run: () => act('Nothing to scan', { kind: 'skip' }, 'Skipped. It stays in the project as a source document with no commitments.') });
      }
    }
    return { id: `${activeDoc()}:opening`, t: -1, from: 'aldo', who: 'Aldo', text: p?.text ?? `Tell me which pages of the ${D.short} hold its commitments.`, acts };
  };

  // ── The check after the first commitments ───────────────────────────────────
  // Only what step 1 decides: was each commitment identified right (its ID, its name, the
  // text that is it). Requirements, timing and parties are step 2's.
  const fixing = new Set<string>();
  let reveal: string | null = null;
  const checkItem = (t: number): Item[] => {
    const D = payload();
    const codes = D.calibrate ?? [];
    const cp = calibrationPoint();
    if (!started() || cp === null || t < cp || !codes.length) return [];
    const done = checked();
    const open = checking();
    const card = (code: string) => {
      const c = identified(code);
      const el = document.createElement('div');
      el.className = 'bcn-sw3aldo__check';
      el.dataset.state = done.includes(code) ? 'checked' : 'open';
      const head = el.appendChild(document.createElement('button'));
      head.type = 'button';
      head.className = 'bcn-sw3aldo__checkhead';
      head.title = 'Show it on the page';
      head.append(badge(c.code), elx('span', 'bcn-sw3aldo__checktitle', c.title));
      head.addEventListener('click', () => showFind(code));
      if (fixing.has(code)) {
        const f = (label: string, value: string, multi = false) => {
          const field = document.createElement(multi ? 'esa-textarea' : 'esa-text-field') as HTMLElement & { value: string };
          field.setAttribute('label', label);
          field.setAttribute('size', 'sm');
          if (multi) field.setAttribute('rows', '5');
          field.value = value;
          return field;
        };
        const id = f('ID', c.code);
        const name = f('Name', c.title);
        const text = f('Text', c.text, true);
        const form = elx('div', 'bcn-sw3aldo__fix');
        const acts = elx('div', 'bcn-sw3aldo__checkacts');
        acts.append(
          button({
            label: 'Save',
            primary: true,
            run: () => {
              fixing.delete(code);
              fixCommitment(code, { code: id.value.trim() || c.code, title: name.value.trim() || c.title, text: text.value });
            },
          }),
          button({ label: 'Redraw the box', run: () => (showFind(code), document.dispatchEvent(new CustomEvent('sw3:redraw', { detail: { id: code } }))) }),
          button({ label: 'Cancel', run: () => (fixing.delete(code), render()) }),
        );
        form.append(id, name, text, acts);
        el.append(form);
        // Just opened: bring the whole form, Save included, into the log's view.
        if (reveal === code) (reveal = null, requestAnimationFrame(() => acts.scrollIntoView({ block: 'nearest' })));
        return el;
      }
      const quote = elx('blockquote', 'bcn-sw3aldo__quote');
      quote.append(elx('span', 'bcn-sw3aldo__quotetext', c.text || 'No text identified.'));
      el.append(quote);
      const meta = elx('div', 'bcn-sw3aldo__checkmeta');
      meta.append(button({ label: `p. ${c.page}`, run: () => showFind(code) }));
      if (c.text.length > 320) {
        const more = button({
          label: 'Show all',
          run: () => {
            const all = quote.toggleAttribute('data-all');
            ((more.querySelector('.esa-button__label') ?? more) as HTMLElement).textContent = all ? 'Show less' : 'Show all';
          },
        });
        meta.append(more);
      }
      const acts = elx('div', 'bcn-sw3aldo__checkacts');
      if (done.includes(code)) acts.append(elx('span', 'bcn-sw3aldo__ok', c.fixed ? 'Fixed' : 'Read right'));
      else if (open)
        acts.append(
          button({ label: 'Looks right', tone: 'success', run: () => act(`${code} looks right`, { kind: 'check', code }, `Noted: ${code} read right.`) }),
          button({ label: 'Fix', run: () => (fixing.add(code), (reveal = code), render()) }),
        );
      const foot = elx('div', 'bcn-sw3aldo__checkfoot');
      foot.append(meta, acts);
      el.append(foot);
      return el;
    };
    // Aldo's lead for each: what it read the commitment from, and how far its text runs.
    const lead = (code: string, i: number) => {
      const c = identified(code);
      const f = finds().find((x) => x.code === code);
      const pages = [...new Set((f?.boxes ?? []).map((b) => b.page))].sort((a, b) => a - b);
      const words = c.text.trim() ? c.text.trim().split(/\s+/).length : 0;
      const runsOn = pages.length > 1 ? `, onto p. ${pages.at(-1)}` : '';
      return `${i + 1} of ${codes.length}. I took the ID and name from the heading on p. ${c.page}. The text runs ${words} words${runsOn}, up to the next heading.`;
    };
    const allChecked = codes.every((c) => done.includes(c));
    const intro: Item = {
      id: `${activeDoc()}:check`,
      t: cp,
      from: 'aldo',
      who: 'Aldo',
      text: open
        ? allChecked
          ? `All ${codes.length} checked.`
          : `First ${codes.length} of the ${D.short}. Check each ID, name, and where its text starts and ends. What you fix, I apply to the rest of the file.`
        : `I read the first ${codes.length} commitments and stopped for you to check them.`,
      acts: [],
    };
    const sigBase = `${done.join(',')}|${open}|${[...fixing].join(',')}|${JSON.stringify(state().fixes)}`;
    return [
      intro,
      ...codes.map(
        (code, i): Item => ({
          id: `${activeDoc()}:check:${code}`,
          t: cp,
          from: 'aldo',
          who: '',
          kind: 'check',
          text: lead(code, i),
          acts: [],
          extra: { sig: `${code}|${sigBase}`, build: () => card(code) },
        }),
      ),
    ];
  };

  // ── Edit ID and name, from the page tools ───────────────────────────────────
  // Any commitment on the page, not only those at the check: its ID, name and (for one the
  // scan read) its text, in the conversation where the record of it is.
  let editing: { id: string; at: number } | null = null;
  document.addEventListener('sw3:edit', (e) => {
    editing = { id: (e as CustomEvent<{ id: string }>).detail.id, at: runNow() };
    render();
    requestAnimationFrame(() => {
      const el = els.get(`${activeDoc()}:edit`);
      // Only the log scrolls (scrollIntoView would move the page around it).
      if (el) log.scrollTop = Math.max(0, el.offsetTop - log.offsetTop - 8);
      el?.querySelector<HTMLElement>('esa-text-field')?.focus({ preventScroll: true } as FocusOptions);
    });
  });
  const editItem = (): Item[] => {
    const f = editing && finds().find((x) => x.id === editing!.id);
    if (!editing || !f) return [];
    const at = editing.at;
    const c = f.code ? identified(f.code) : null;
    const build = () => {
      const el = elx('div', 'bcn-sw3aldo__check');
      const field = (label: string, value: string, multi = false) => {
        const x = document.createElement(multi ? 'esa-textarea' : 'esa-text-field') as Field;
        x.setAttribute('label', label);
        x.setAttribute('size', 'sm');
        if (multi) x.setAttribute('rows', '5');
        x.value = value;
        return x;
      };
      const id = field('ID', f.shown);
      const name = field('Name', f.parsed || f.shown ? f.title : '');
      const text = c ? field('Text', c.text, true) : null;
      const acts = elx('div', 'bcn-sw3aldo__checkacts');
      acts.append(
        button({
          label: 'Save',
          primary: true,
          run: () => {
            const patch: { code?: string; title?: string; text?: string } = { code: id.value.trim() || f.shown, title: name.value.trim() || f.title };
            if (text) patch.text = text.value;
            editing = null;
            editFind(f.id, patch);
            render();
          },
        }),
        button({ label: 'Cancel', run: () => ((editing = null), render()) }),
      );
      const form = elx('div', 'bcn-sw3aldo__fix');
      form.append(id, name, ...(text ? [text] : []), acts);
      el.append(form);
      return el;
    };
    const page = f.boxes[0]?.page ?? f.page;
    return [
      {
        id: `${activeDoc()}:edit`,
        t: at,
        from: 'aldo',
        who: 'Aldo',
        kind: 'check',
        text: f.shown ? `${f.shown} on p. ${page}, as I have it.` : `Your box on p. ${page}. Give it an ID and a name.`,
        acts: [],
        extra: { sig: `edit|${f.id}|${at}`, build },
      },
    ];
  };

  // ── What the scan raises ────────────────────────────────────────────────────
  const eventT = (findId: string) =>
    (payload().events.find((e) => e.type === 'commitment_found' && e.findId === findId) as { t: number } | undefined)?.t ?? Infinity;

  const notices = (t: number): Item[] => {
    const D = payload();
    const live = new Set(finds().map((f) => f.id));
    const out: Item[] = [];
    const s = state();
    const doc = activeDoc();

    for (const f of D.finds) {
      if (!inScope(f.page)) continue;
      if (f.kind === 'false') {
        const at = eventT(f.id) + 3;
        if (at > t) continue;
        const open = live.has(f.id);
        // Read after a cross-reference rule, it never surfaced: there is nothing to raise.
        const ruleAt = steers().find((x) => x.actions.some((a) => a.kind === 'rule' && a.crossRef))?.at;
        if (ruleAt !== undefined && ruleAt <= eventT(f.id)) continue;
        out.push({
          id: `${doc}:n:false:${f.id}`,
          t: at,
          from: 'aldo',
          who: 'Aldo',
          text: `${f.code} on p. ${f.page} has no requirements of its own. It reads like a reference to another condition.`,
          acts: [],
        });
      }
      if (f.kind === 'split') {
        const at = eventT(f.id);
        if (at > t) continue;
        const parent = f.partOf ? findOf(f.partOf) : undefined;
        const code = parent?.code ?? 'the commitment before it';
        out.push({
          id: `${doc}:n:split:${f.id}`,
          t: at,
          from: 'aldo',
          who: 'Aldo',
          text: `The passage at the top of p. ${f.page} has no heading of its own. It reads as the rest of ${code}.`,
          acts: [],
        });
      }
    }

    // The run's end: what was read and where nothing was found.
    const inScopePages = D.events.filter((e) => e.type === 'page_scanned' && inScope((e as { page: number }).page));
    const read = scanned();
    if (started() && inScopePages.length && inScopePages.every((e) => read.has((e as { page: number }).page))) {
      const at = Math.max(...inScopePages.map((e) => e.t));
      const n = commitmentCount();
      const first = Math.min(...read);
      const last = Math.max(...read);
      const open = needs(t).length;
      out.push({
        id: `${doc}:n:done`,
        t: at,
        from: 'aldo',
        who: 'Aldo',
        text: `Read ${range(first, last)}: ${n} commitments.${open ? ` ${open} to settle, listed below.` : ''}`,
        acts: doc === 'itp' ? [{ label: 'Review commitments', primary: true, run: () => (location.href = reviewHref) }] : [],
      });
    }

    // Re-reads, once done: what changed.
    rereads().forEach((r, i) => {
      const at = rereadEnd(r);
      if (at > t) return;
      const changed = D.finds.filter(
        (f) => f.kind === 'false' && f.page >= r.first && f.page <= r.last && !live.has(f.id) && !s.dismissed.includes(f.id) && eventT(f.id) <= r.at,
      );
      out.push({
        id: `${doc}:n:reread:${i}`,
        t: at,
        from: 'aldo',
        who: 'Aldo',
        text: `Re-read ${range(r.first, r.last)}. ${changed.length ? `${changed.map((f) => f.code).join(', ')} removed: a reference to another condition.` : 'No changes.'}`,
        acts: [],
      });
    });
    return out;
  };

  // ── Steers ──────────────────────────────────────────────────────────────────
  const steerItems = (x: Steer): Item[] => {
    const doc = activeDoc();
    const who = x.page ? `You, at p. ${x.page}` : 'You';
    const offer = x.offer;
    const offerOpen = offer && !rereads().some((r) => r.at >= x.at && r.first <= offer.first && r.last >= offer.last);
    const reread: SteerAction | null = offer ? { kind: 'reread', first: offer.first, last: offer.last } : null;
    return [
      { id: `${doc}:${x.id}:you`, t: x.at, from: 'you', via: x.via, who, text: x.text, acts: [] },
      {
        id: `${doc}:${x.id}:aldo`,
        t: x.at,
        from: 'aldo',
        who: 'Aldo',
        text: x.reply,
        acts: [
          ...(offerOpen && reread
            ? [{ label: `Re-read ${range(offer.first, offer.last)}`, tone: 'info' as Tone, run: () => act(`Re-read ${range(offer.first, offer.last)}`, reread, `Re-reading ${range(offer.first, offer.last)} with the instructions now in effect.`) }]
            : []),
          // An unclear message: the readings, each sent as is. Only the latest steer offers them.
          ...(x.choices && x.id === steers().at(-1)?.id ? x.choices.map((c) => ({ label: c.label, run: () => say(c.text) })) : []),
        ],
      },
    ];
  };

  // ── What waits on the person ────────────────────────────────────────────────
  interface Need {
    id: string;
    t: number;
    text: string;
    acts: Btn[];
    /** Clicking the text shows this find, or this page. */
    find?: string;
    page?: number;
  }
  const PACE_REPLY_GO = {
    run: 'Reading the rest. I will raise anything that needs you as I reach it.',
    watch: 'Reading the rest slowly, so you can follow along.',
    step: 'One commitment at a time: I will stop after each.',
  } as const;
  const needs = (t: number): Need[] => {
    const D = payload();
    const out: Need[] = [];
    const doc = activeDoc();
    // The check after the first commitments.
    if (checking()) {
      const codes = D.calibrate ?? [];
      const left = codes.filter((c) => !checked().includes(c));
      const cp = calibrationPoint() ?? 0;
      out.push(
        left.length
          ? {
              id: `${doc}:need:check`,
              t: cp,
              text: `Check the first ${codes.length}: ${left.length} left.`,
              acts: [
                { label: 'All look right', tone: 'success', run: () => act('All look right', left.map((code) => ({ kind: 'check' as const, code })), 'Good. How should I read the rest?') },
                { label: 'Show them', run: () => showCheck() },
              ],
            }
          : {
              id: `${doc}:need:go`,
              t: cp,
              text: `All ${codes.length} checked. How should I read the rest?`,
              acts: [
                { label: 'Read the rest', primary: true, run: () => act('Read the rest', { kind: 'go', pace: 'run' }, PACE_REPLY_GO.run) },
                { label: 'Watch it', run: () => act('Watch it', { kind: 'go', pace: 'watch' }, PACE_REPLY_GO.watch) },
                { label: 'One at a time', run: () => act('One at a time', { kind: 'go', pace: 'step' }, PACE_REPLY_GO.step) },
              ],
            },
      );
    }
    const live = new Set(finds().map((f) => f.id));
    const kept = keptFinds();
    const ruleAt = steers().find((x) => x.actions.some((a) => a.kind === 'rule' && a.crossRef))?.at;
    for (const f of D.finds) {
      if (!inScope(f.page) || !live.has(f.id) || kept.includes(f.id)) continue;
      if (f.kind === 'false') {
        const at = eventT(f.id) + 3;
        if (at > t || (ruleAt !== undefined && ruleAt <= eventT(f.id))) continue;
        out.push({
          id: `${doc}:need:false:${f.id}`,
          t: at,
          find: f.id,
          text: `${f.code} on p. ${f.page} reads like a reference to another condition.`,
          acts: [
            { label: `Dismiss ${f.code}`, tone: 'danger', run: () => act(`Dismiss ${f.code}`, { kind: 'dismiss', findId: f.id, code: f.code }, `Removed ${f.code}.`) },
            { label: 'Keep it', run: () => act(`Keep ${f.code}`, { kind: 'keep', findId: f.id, code: f.code }, `Kept ${f.code} as a commitment.`) },
            { label: 'Skip all cross-references', tone: 'info', run: () => say('References to another condition are not commitments') },
          ],
        });
      }
      if (f.kind === 'split') {
        const at = eventT(f.id);
        if (at > t) continue;
        const code = (f.partOf ? findOf(f.partOf)?.code : undefined) ?? 'the commitment before it';
        out.push({
          id: `${doc}:need:split:${f.id}`,
          t: at,
          find: f.id,
          text: `The top of p. ${f.page} has no heading. It reads as the rest of ${code}.`,
          acts: [
            { label: `Merge into ${code}`, tone: 'info', run: () => act(`Merge p. ${f.page} into ${code}`, { kind: 'merge', findId: f.id, code }, `Merged. ${code} now runs onto p. ${f.page}.`) },
            { label: 'Keep separate', run: () => act(`Keep p. ${f.page} separate`, { kind: 'keep', findId: f.id, code }, `Kept the passage on p. ${f.page} as its own.`) },
          ],
        });
      }
    }
    for (const g of openGaps()) {
      const where = range(g.first, g.last);
      out.push({
        id: `${doc}:need:gap:${g.first}`,
        t: Infinity,
        page: g.first,
        text: `Nothing found on ${where}.`,
        acts: [
          { label: `Mark on p. ${g.first}`, tone: 'info', run: () => document.dispatchEvent(new CustomEvent('sw3:mark', { detail: { page: g.first } })) },
          { label: 'Nothing there', run: () => act(`Nothing on ${where}`, { kind: 'clear', first: g.first, last: g.last }, `Noted: no commitments on ${where}.`) },
        ],
      });
    }
    // A box a person drew that has no ID yet.
    for (const f of finds()) {
      if (!f.marked || f.shown) continue;
      const page = f.boxes[0]?.page ?? f.page;
      out.push({
        id: `${doc}:need:mark:${f.id}`,
        t: Infinity,
        find: f.id,
        text: `Your box on p. ${page} has no ID.`,
        acts: [{ label: 'Edit ID and name', run: () => (showFind(f.id), document.dispatchEvent(new CustomEvent('sw3:edit', { detail: { id: f.id } }))) }],
      });
    }
    return out;
  };
  /** Bring the check (its first message) into the log's view. */
  const showCheck = () => {
    const el = els.get(`${activeDoc()}:check`);
    if (el) log.scrollTop = Math.max(0, el.offsetTop - log.offsetTop - 8);
  };
  const queue = root.querySelector<HTMLElement>('[data-aldo-queue]')!;
  const queueList = root.querySelector<HTMLElement>('[data-queue-list]')!;
  const queueCount = root.querySelector<HTMLElement>('[data-queue-count]')!;
  let lastNeeds = -1;
  const paintQueue = () => {
    const list = needs(now()).sort((a, b) => b.t - a.t);
    const sig = `${activeDoc()}|${list.map((n) => `${n.id}:${n.text}:${n.acts.map((a) => a.label).join(',')}`).join('|')}`;
    if (queue.dataset.sig !== sig) {
      queue.dataset.sig = sig;
      queueList.replaceChildren(
        ...list.map((n) => {
          const li = elx('li', 'bcn-sw3aldo__need');
          const text = elx(n.find || n.page ? 'button' : 'p', 'bcn-sw3aldo__needtext', n.text);
          if (text instanceof HTMLButtonElement) {
            text.type = 'button';
            text.addEventListener('click', () => (n.find ? showFind(n.find) : goto(n.page!)));
          }
          const acts = elx('span', 'bcn-sw3aldo__needacts');
          acts.append(...n.acts.map(button));
          li.append(text, acts);
          return li;
        }),
      );
    }
    queue.hidden = !list.length;
    queueCount.textContent = String(list.length);
    if (list.length !== lastNeeds) {
      lastNeeds = list.length;
      document.dispatchEvent(new CustomEvent('sw3:needs', { detail: { count: list.length } }));
    }
  };

  // ── Paint ───────────────────────────────────────────────────────────────────
  const els = new Map<string, HTMLElement>();
  const actsSig = new Map<string, string>();
  const extraSig = new Map<string, string>();

  // Where the run is, pinned above the composer: the one place it is said.
  const paintStatus = () => {
    const D = payload();
    const total = D.total ?? D.scope.last;
    const head = started() ? headPage() : null;
    const n = commitmentCount();
    const open = needs(now()).length;
    let kind: 'check' | 'reading' | 'done' | null = null;
    let text = '';
    if (skipped()) kind = null;
    else if (!started()) {
      // Marking by hand: no run, only the person's boxes.
      const marked = finds().length;
      kind = manual() ? 'reading' : null;
      text = `By hand. ${marked} marked.`;
    } else if (checking()) {
      const left = (D.calibrate?.length ?? 3) - checked().length;
      kind = 'check';
      text = left > 0 ? `Stopped for your check: ${left} left.` : 'Checked. Resume to read the rest.';
    } else if (finished() || head === null) {
      kind = 'done';
      text = `${stopped() ? 'Stopped' : 'Done'}. ${n} commitment${n === 1 ? '' : 's'} found.${open ? ` ${open} to settle.` : ''}`;
    } else if (heldForStep()) {
      kind = 'reading';
      text = `One at a time: stopped at p. ${head}. Resume reads the next commitment.`;
    } else if (paused() || pausing()) {
      kind = 'reading';
      text = paused() ? `Paused at p. ${Math.max(1, head - 1)} of ${total}. ${n} found so far.` : `Pausing after p. ${head}.`;
    } else {
      kind = 'reading';
      const toCheck = D.calibrate?.length ?? 3;
      text = headedForCheck()
        ? `Reading p. ${head} of ${total}. Stopping after ${toCheck} commitments for your check.`
        : `Reading p. ${head} of ${total}. ${n} found so far.`;
    }
    statusEl.querySelectorAll<HTMLElement>('[data-status]').forEach((el) => {
      const on = el.dataset.status === kind;
      el.hidden = !on;
      if (on) {
        const t = el.querySelector('[data-status-text]');
        if (t && t.textContent !== text) t.textContent = text;
      }
    });
  };

  const paintSuggest = () => {
    const D = payload();
    const opts: Btn[] = [];
    if (skipped()) {
      // nothing to offer
    } else if (!started()) for (const text of D.proposal?.suggest ?? []) opts.push({ label: text, run: () => say(text) });
    // The check's answers are in the list of what waits on the person.
    // Pause, resume and speed are the console's; the chat offers only what is said in words.
    const sig = `${activeDoc()}|${opts.map((o) => o.label).join('|')}`;
    if (suggest.dataset.sig === sig) return;
    suggest.dataset.sig = sig;
    suggest.replaceChildren(...opts.map(button));
  };

  let lastDoc = '';
  let lastSaid = 0;
  let lastSaidDoc = '';
  const render = () => {
    const doc = activeDoc();
    if (doc !== lastDoc) {
      // Another document: another conversation.
      lastDoc = doc;
      editing = null;
      log.replaceChildren();
      els.clear();
      actsSig.clear();
      extraSig.clear();
    }
    const t = now();
    // At one run time (the check holds the clock), what was said follows the check.
    const items = [opening(), ...checkItem(t), ...steers().flatMap(steerItems), ...notices(t), ...editItem()]
      .map((it, i) => ({ it, i }))
      .sort((a, b) => a.it.t - b.it.t || a.i - b.i)
      .map(({ it }) => it);

    const nearBottom = log.scrollHeight - log.scrollTop - log.clientHeight < 120;
    let added = false;
    let lead: HTMLElement | null = null;
    const keep = new Set(items.map((i) => i.id));
    for (const [id, e] of els) if (!keep.has(id)) (e.remove(), els.delete(id), actsSig.delete(id), extraSig.delete(id));
    let prev: Element | null = null;
    for (const it of items) {
      let e = els.get(it.id);
      if (!e) {
        e = (msgTpl.content.firstElementChild as HTMLElement).cloneNode(true) as HTMLElement;
        els.set(it.id, e);
        added = true;
        // The check is read from its top, not its last card.
        if (it.id.endsWith(':check')) lead = e;
      }
      e.dataset.from = it.from;
      if (it.via) e.dataset.via = it.via;
      if (it.kind) e.dataset.kind = it.kind;
      const whoEl = e.querySelector<HTMLElement>('[data-msg-who]')!;
      whoEl.textContent = it.who;
      whoEl.hidden = !it.who;
      e.querySelector('[data-msg-text]')!.textContent = it.text;
      const extraHost = e.querySelector<HTMLElement>('[data-msg-extra]')!;
      if (it.extra && extraSig.get(it.id) !== it.extra.sig) {
        extraSig.set(it.id, it.extra.sig);
        extraHost.replaceChildren(it.extra.build());
      }
      const sig = it.acts.map((a) => a.label).join('|');
      if (actsSig.get(it.id) !== sig) {
        actsSig.set(it.id, sig);
        e.querySelector('[data-msg-acts]')!.replaceChildren(...it.acts.map(button));
      }
      const want: Element | null = prev ? prev.nextElementSibling : log.firstElementChild;
      if (want !== e) log.insertBefore(e, want);
      prev = e;
    }
    // A person's own message, and the reply to it, always come into view.
    const said = steers().length;
    const spoke = said > lastSaid && lastSaidDoc === doc;
    lastSaid = said;
    lastSaidDoc = doc;
    if (spoke) log.scrollTop = log.scrollHeight;
    else if (lead) log.scrollTop = lead.offsetTop - log.offsetTop - 8;
    else if (added && nearBottom) log.scrollTop = log.scrollHeight;

    paintStatus();
    paintQueue();
    paintSuggest();
  };

  document.addEventListener('sw3:change', render);
  render();
  log.scrollTop = log.scrollHeight;
}
