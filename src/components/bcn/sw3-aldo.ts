// Controller for <BcnSw3Aldo>. setupX shape: owns the conversation for the document in
// view. Everything it shows is derived from sw3-store on each change: Aldo's opening (the
// scope pass), each steer (what was said, the page the scan was on, Aldo's reply), the
// check after the first commitments, and what the scan raises as it reaches it. Nothing
// here is stored twice; the steers ARE the record, one per document.
//
//   out  sw3:page  detail: { page }   a "Show p. N" answer; the host moves the page
//   out  sw3:find  detail: { id }     a commitment named in the check; the host shows it

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
  rules,
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
  calibrated,
  calibrationPoint,
  pace,
  skipped,
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
  const rulesEl = root.querySelector<HTMLElement>('[data-aldo-rules]')!;
  const suggest = root.querySelector<HTMLElement>('[data-aldo-suggest]')!;
  const form = root.querySelector<HTMLFormElement>('[data-aldo-form]')!;
  const field = root.querySelector<Field>('[data-aldo-input]')!;
  const msgTpl = root.querySelector<HTMLTemplateElement>('[data-aldo-msg]')!;
  const btnTpl = root.querySelector<HTMLTemplateElement>('[data-aldo-btn]')!;
  const primaryTpl = root.querySelector<HTMLTemplateElement>('[data-aldo-btn-primary]')!;
  const badgeTpl = root.querySelector<HTMLTemplateElement>('[data-aldo-badge]')!;

  const goto = (page: number) => document.dispatchEvent(new CustomEvent('sw3:page', { detail: { page } }));
  const showFind = (id: string) => document.dispatchEvent(new CustomEvent('sw3:find', { detail: { id } }));

  const button = ({ label, run, primary }: Btn) => {
    const host = ((primary ? primaryTpl : btnTpl).content.firstElementChild as HTMLElement).cloneNode(true) as HTMLElement;
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
        acts.push({
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
      head.append(badge(c.code), elx('span', 'bcn-sw3aldo__checktitle typography-label-md-strong', c.title));
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
      const quote = elx('blockquote', 'bcn-sw3aldo__quote typography-body-sm', c.text || 'No text identified.');
      el.append(quote);
      const meta = elx('div', 'bcn-sw3aldo__checkmeta');
      const pg = elx('button', 'bcn-sw3aldo__pagelink typography-body-sm', `p. ${c.page}`) as HTMLButtonElement;
      pg.type = 'button';
      pg.addEventListener('click', () => showFind(code));
      meta.append(pg);
      if (c.text.length > 320) {
        const more = elx('button', 'bcn-sw3aldo__pagelink typography-body-sm', 'Show all') as HTMLButtonElement;
        more.type = 'button';
        more.addEventListener('click', () => {
          const all = quote.toggleAttribute('data-all');
          more.textContent = all ? 'Show less' : 'Show all';
        });
        meta.append(more);
      }
      el.append(meta);
      const acts = elx('div', 'bcn-sw3aldo__checkacts');
      if (done.includes(code)) acts.append(elx('span', 'bcn-sw3aldo__ok typography-body-sm', c.fixed ? 'Fixed' : 'Read right'));
      else if (open)
        acts.append(
          button({ label: 'Looks right', primary: true, run: () => act(`${code} looks right`, { kind: 'check', code }, `Noted: ${code} read right.`) }),
          button({ label: 'Fix', run: () => (fixing.add(code), (reveal = code), render()) }),
        );
      el.append(acts);
      return el;
    };
    const build = () => {
      const wrap = elx('div', 'bcn-sw3aldo__checks');
      wrap.append(...codes.map(card));
      return wrap;
    };
    const allChecked = codes.every((c) => done.includes(c));
    return [
      {
        id: `${activeDoc()}:check`,
        t: cp,
        from: 'aldo',
        who: 'Aldo',
        text: open
          ? allChecked
            ? `All ${codes.length} checked. Continue from the toolbar when you are ready, or tell me how to go on.`
            : `I have read the first ${codes.length} commitments. Check that I have each one's ID, name and text right before I go on. What you fix here is how I read the rest of the ${D.short}.`
          : `I read the first ${codes.length} commitments and stopped for you to check them.`,
        acts: [],
        extra: { sig: `${codes.join(',')}|${done.join(',')}|${open}|${[...fixing].join(',')}|${JSON.stringify(state().fixes)}`, build },
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
          id: `${doc}:n:split:${f.id}`,
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
    if (started() && inScopePages.length && inScopePages.every((e) => read.has((e as { page: number }).page))) {
      const at = Math.max(...inScopePages.map((e) => e.t));
      const n = finds().filter((f) => f.code).length;
      const g = [...gaps()];
      const first = Math.min(...read);
      const last = Math.max(...read);
      const nothing = g.length && D.finds.length ? ` Nothing found on ${runs(g)}. If a commitment is there, drag over it on the page.` : '';
      out.push({
        id: `${doc}:n:done`,
        t: at,
        from: 'aldo',
        who: 'Aldo',
        text: `Read ${range(first, last)}: ${n} commitments.${nothing}`,
        acts: [
          ...(nothing ? [{ label: `Show p. ${Math.min(...g)}`, run: () => goto(Math.min(...g)) }] : []),
          ...(doc === 'itp' ? [{ label: 'Review commitments', primary: true, run: () => (location.href = reviewHref) }] : []),
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
        acts:
          offerOpen && reread
            ? [{ label: `Re-read ${range(offer.first, offer.last)}`, run: () => act(`Re-read ${range(offer.first, offer.last)}`, reread, `Re-reading ${range(offer.first, offer.last)} with the instructions now in effect.`) }]
            : [],
      },
    ];
  };

  // ── Paint ───────────────────────────────────────────────────────────────────
  const els = new Map<string, HTMLElement>();
  const actsSig = new Map<string, string>();
  const extraSig = new Map<string, string>();

  const paintRules = () => {
    const s = state();
    const rows: [string, string][] = [[`Scope: ${range(s.scope.first, s.scope.last)}`, '']];
    rows.push([`Pace: ${pace() === 'run' ? 'full speed' : pace() === 'step' ? 'one at a time' : 'watch'}`, '']);
    for (const r of rules()) rows.push([r.text, r.page ? `from p. ${r.page}` : '']);
    const sig = JSON.stringify(rows);
    if (rulesEl.dataset.sig === sig) return;
    rulesEl.dataset.sig = sig;
    rulesEl.replaceChildren(
      ...rows.map(([text, from]) => {
        const li = document.createElement('li');
        li.append(elx('span', '', text));
        if (from) {
          const b = elx('span', '', from);
          b.dataset.ruleFrom = '';
          li.append(b);
        }
        return li;
      }),
    );
    const summary = root.querySelector('.esa-collapsible__title');
    if (summary) summary.textContent = `Instructions (${rows.length})`;
  };

  const paintSuggest = () => {
    const D = payload();
    const opts: Btn[] = [];
    if (skipped()) {
      // nothing to offer
    } else if (!started()) for (const text of D.proposal?.suggest ?? []) opts.push({ label: text, run: () => say(text) });
    else if (checking()) {
      if (checked().length < (D.calibrate?.length ?? 3)) opts.push({ label: 'They look right', run: () => say('They look right') });
    } else if (!finished()) {
      opts.push(paused() || pausing() ? { label: 'Resume', run: () => say('Resume') } : { label: 'Pause', run: () => say('Pause') });
      if (calibrated()) opts.push(pace() === 'run' ? { label: 'Slow down', run: () => say('Slow down') } : { label: 'Full speed', run: () => say('Full speed') });
    }
    const sig = `${activeDoc()}|${opts.map((o) => o.label).join('|')}`;
    if (suggest.dataset.sig === sig) return;
    suggest.dataset.sig = sig;
    suggest.replaceChildren(...opts.map(button));
  };

  let lastDoc = '';
  const render = () => {
    const doc = activeDoc();
    if (doc !== lastDoc) {
      // Another document: another conversation.
      lastDoc = doc;
      log.replaceChildren();
      els.clear();
      actsSig.clear();
      extraSig.clear();
    }
    const t = now();
    const items = [opening(), ...steers().flatMap(steerItems), ...checkItem(t), ...notices(t)]
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
      e.querySelector('[data-msg-who]')!.textContent = it.who;
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
    if (lead) log.scrollTop = lead.offsetTop - log.offsetTop - 8;
    else if (added && nearBottom) log.scrollTop = log.scrollHeight;

    paintRules();
    paintSuggest();
  };

  document.addEventListener('sw3:change', render);
  render();
  log.scrollTop = log.scrollHeight;
}
