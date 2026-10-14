// Controller for <BcnSw3Aldo>. setupX shape: owns the conversation. Everything it shows
// is derived from sw3-store on each change: Aldo's proposal, each steer (what was said,
// the page the scan was on, Aldo's reply), and the notices the scan raises as it reaches
// them. Nothing here is stored twice; the steers ARE the record.
//
//   out  sw3:page  detail: { page }   a "Show p. N" answer; the host moves the page

import {
  initSw3,
  started,
  finished,
  now,
  paused,
  pausing,
  steers,
  rules,
  finds,
  gaps,
  scanned,
  inScope,
  state,
  rereads,
  rereadEnd,
  findOf,
  act,
  say,
  type Steer,
} from './sw3-store';
import type { SteerAction } from './sw3-steer';

type Field = HTMLElement & { value: string };

interface Btn {
  label: string;
  run: () => void;
  primary?: boolean;
}
interface Item {
  id: string;
  t: number;
  from: 'aldo' | 'you';
  via?: 'typed' | 'button';
  who: string;
  text: string;
  acts: Btn[];
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
  const D = initSw3();
  const docShort = root.dataset.doc ?? 'document';
  const reviewHref = root.dataset.review ?? '';
  const log = root.querySelector<HTMLElement>('[data-aldo-log]')!;
  const rulesEl = root.querySelector<HTMLElement>('[data-aldo-rules]')!;
  const suggest = root.querySelector<HTMLElement>('[data-aldo-suggest]')!;
  const form = root.querySelector<HTMLFormElement>('[data-aldo-form]')!;
  const field = root.querySelector<Field>('[data-aldo-input]')!;
  const msgTpl = root.querySelector<HTMLTemplateElement>('[data-aldo-msg]')!;
  const btnTpl = root.querySelector<HTMLTemplateElement>('[data-aldo-btn]')!;
  const primaryTpl = root.querySelector<HTMLTemplateElement>('[data-aldo-btn-primary]')!;

  const goto = (page: number) => document.dispatchEvent(new CustomEvent('sw3:page', { detail: { page } }));

  const button = ({ label, run, primary }: Btn) => {
    const host = ((primary ? primaryTpl : btnTpl).content.firstElementChild as HTMLElement).cloneNode(true) as HTMLElement;
    const b = host.querySelector('button') ?? host;
    (b.querySelector('.esa-button__label') ?? b).textContent = label;
    b.addEventListener('click', run);
    return host;
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

  // ── What the scan raises ────────────────────────────────────────────────────
  const eventT = (findId: string) =>
    (D.events.find((e) => e.type === 'commitment_found' && e.findId === findId) as { t: number } | undefined)?.t ?? Infinity;

  const notices = (t: number): Item[] => {
    const live = new Set(finds().map((f) => f.id));
    const out: Item[] = [];
    const s = state();

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
          id: `n:false:${f.id}`,
          t: at,
          from: 'aldo',
          who: 'Aldo',
          text: `${f.code} on p. ${f.page} has no requirements of its own. It reads like a reference to another condition.`,
          acts: open
            ? [
                { label: `Dismiss ${f.code}`, run: () => act(`Dismiss ${f.code}`, { kind: 'dismiss', findId: f.id, code: f.code }, `Removed ${f.code}.`) },
                { label: 'References are not commitments', run: () => say('References to another condition are not commitments') },
              ]
            : [],
        });
      }
      if (f.kind === 'split') {
        const at = eventT(f.id);
        if (at > t) continue;
        const parent = f.partOf ? findOf(f.partOf) : undefined;
        const code = parent?.code ?? 'the commitment before it';
        out.push({
          id: `n:split:${f.id}`,
          t: at,
          from: 'aldo',
          who: 'Aldo',
          text: `The passage at the top of p. ${f.page} has no heading of its own. It reads as the rest of ${code}.`,
          acts: live.has(f.id) ? [{ label: `Merge into ${code}`, run: () => act(`Merge p. ${f.page} into ${code}`, { kind: 'merge', findId: f.id, code }, `Merged. ${code} now runs onto p. ${f.page}.`) }] : [],
        });
      }
    }

    // The run's end: what was read and where nothing was found.
    const inScopePages = D.events.filter((e) => e.type === 'page_scanned' && inScope((e as { page: number }).page));
    const read = scanned();
    if (inScopePages.length && inScopePages.every((e) => read.has((e as { page: number }).page))) {
      const at = Math.max(...inScopePages.map((e) => e.t));
      const n = finds().filter((f) => f.code).length;
      const g = [...gaps()];
      const first = Math.min(...read);
      const last = Math.max(...read);
      out.push({
        id: 'n:done',
        t: at,
        from: 'aldo',
        who: 'Aldo',
        text: `Read ${range(first, last)}: ${n} commitments.${g.length ? ` Nothing found on ${runs(g)}. If a commitment is there, drag over it on the page.` : ''}`,
        acts: [
          ...(g.length ? [{ label: `Show p. ${Math.min(...g)}`, run: () => goto(Math.min(...g)) }] : []),
          { label: 'Review commitments', primary: true, run: () => (location.href = reviewHref) },
        ],
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
        id: `n:reread:${i}`,
        t: at,
        from: 'aldo',
        who: 'Aldo',
        text: `Re-read ${range(r.first, r.last)}. ${changed.length ? `${changed.map((f) => f.code).join(', ')} removed: a reference to another condition.` : 'No changes.'}`,
        acts: [],
      });
    });
    return out;
  };

  // ── The conversation ────────────────────────────────────────────────────────
  const steerItems = (x: Steer): Item[] => {
    const who = x.page ? `You, at p. ${x.page}` : 'You';
    const offer = x.offer;
    const offerOpen = offer && !rereads().some((r) => r.at >= x.at && r.first <= offer.first && r.last >= offer.last);
    const reread: SteerAction | null = offer ? { kind: 'reread', first: offer.first, last: offer.last } : null;
    return [
      { id: `${x.id}:you`, t: x.at, from: 'you', via: x.via, who, text: x.text, acts: [] },
      {
        id: `${x.id}:aldo`,
        t: x.at,
        from: 'aldo',
        who: 'Aldo',
        text: x.reply,
        acts:
          offerOpen && reread
            ? [{ label: `Re-read ${range(offer.first, offer.last)}`, run: () => act(`Re-read ${range(offer.first, offer.last)}`, reread, `Re-reading ${range(offer.first, offer.last)} with the instructions now in effect.`) }]
            : [],
      },
    ];
  };

  const proposal = (): Item => {
    const p = D.proposal;
    const h = D.headings ?? {};
    const likely = (a: number, b: number) => Object.values(h).filter((n) => n >= a && n <= b).length;
    const sc = D.scope;
    const go = () =>
      act('Scan Condition 11', [{ kind: 'scope', first: sc.first, last: sc.last, label: 'Condition 11' }, { kind: 'start' }], `Reading ${range(sc.first, sc.last)}.`);
    return {
      id: 'proposal',
      t: -1,
      from: 'aldo',
      who: 'Aldo',
      text: p
        ? `I read the contents and headings of the ${docShort}. The commitments are in ${p.section}, ${range(p.first, p.last)}: about ${likely(p.first, p.last)}. Condition 11, Take Minimization Measures, holds ${likely(sc.first, sc.last)} of them on ${range(sc.first, sc.last)}.\nTell me where to start, or scan Condition 11.`
        : `Tell me which pages of the ${docShort} hold its commitments.`,
      acts: started()
        ? []
        : [{ label: 'Scan Condition 11', primary: true, run: go }],
    };
  };

  const els = new Map<string, HTMLElement>();
  const actsSig = new Map<string, string>();

  const paintRules = () => {
    const s = state();
    const rows: [string, string][] = [[`Scope: ${range(s.scope.first, s.scope.last)}`, '']];
    for (const r of rules()) rows.push([r.text, r.page ? `from p. ${r.page}` : '']);
    const sig = JSON.stringify(rows);
    if (rulesEl.dataset.sig === sig) return;
    rulesEl.dataset.sig = sig;
    rulesEl.replaceChildren(
      ...rows.map(([text, from]) => {
        const li = document.createElement('li');
        const a = document.createElement('span');
        a.textContent = text;
        li.append(a);
        if (from) {
          const b = document.createElement('span');
          b.dataset.ruleFrom = '';
          b.textContent = from;
          li.append(b);
        }
        return li;
      }),
    );
    const summary = root.querySelector('.esa-collapsible__title');
    if (summary) summary.textContent = `Instructions (${rows.length})`;
  };

  const paintSuggest = () => {
    const opts: Btn[] = [];
    if (!started()) opts.push({ label: 'Only Condition 11', run: () => say('Only Condition 11') }, { label: 'Start', run: () => say('Start') });
    else if (!finished()) {
      if (paused() || pausing()) opts.push({ label: 'Resume', run: () => say('Resume') });
      else opts.push({ label: 'Pause', run: () => say('Pause') });
      if (!rules().length) opts.push({ label: 'Skip the footnotes', run: () => say('Skip the footnotes') });
    }
    const sig = opts.map((o) => o.label).join('|');
    if (suggest.dataset.sig === sig) return;
    suggest.dataset.sig = sig;
    suggest.replaceChildren(...opts.map(button));
  };

  const render = () => {
    const t = now();
    const items = [proposal(), ...steers().flatMap(steerItems), ...notices(t)]
      .map((it, i) => ({ it, i }))
      .sort((a, b) => a.it.t - b.it.t || a.i - b.i)
      .map(({ it }) => it);

    const nearBottom = log.scrollHeight - log.scrollTop - log.clientHeight < 80;
    let added = false;
    const keep = new Set(items.map((i) => i.id));
    for (const [id, el] of els) if (!keep.has(id)) (el.remove(), els.delete(id), actsSig.delete(id));
    let prev: Element | null = null;
    for (const it of items) {
      let el = els.get(it.id);
      if (!el) {
        el = (msgTpl.content.firstElementChild as HTMLElement).cloneNode(true) as HTMLElement;
        els.set(it.id, el);
        added = true;
      }
      el.dataset.from = it.from;
      if (it.via) el.dataset.via = it.via;
      el.querySelector('[data-msg-who]')!.textContent = it.who;
      el.querySelector('[data-msg-text]')!.textContent = it.text;
      const sig = it.acts.map((a) => a.label).join('|');
      if (actsSig.get(it.id) !== sig) {
        actsSig.set(it.id, sig);
        el.querySelector('[data-msg-acts]')!.replaceChildren(...it.acts.map(button));
      }
      const want: Element | null = prev ? prev.nextElementSibling : log.firstElementChild;
      if (want !== el) log.insertBefore(el, want);
      prev = el;
    }
    if (added && nearBottom) log.scrollTop = log.scrollHeight;

    paintRules();
    paintSuggest();
  };

  document.addEventListener('sw3:change', render);
  render();
  log.scrollTop = log.scrollHeight;
}
