// Controller for <BcnCiBinReview>: opening a bin, prev/next, expand/collapse, select,
// merge, dismiss, create / edit / delete, mark reviewed, and the three-tab side panel.
// setupX shape.
//
// Decisions (ci-state.ts) are held on the item id and re-applied to EVERY row carrying
// that id, so an obligation filed in three bins reads the same in all three.

import { readState, writeState, effective, type CiReviewState } from './ci-state';
import type { CiDetail } from '../../data/setup-wizard-ci';

interface Crosscheck {
  req: Record<string, [string, string, string]>;
  com: Record<string, { title: string; from: string; blocks: string[]; page: number | null }>;
}

type DialogEl = HTMLElement & { show(): void; close(): void; open: boolean };
type Field = HTMLElement & { value: unknown };

const CLASS_LABEL: Record<string, string> = { adhere: 'Adhere', monitor: 'Monitor', notify: 'Notify', roster: 'Roster' };

const norm = (s: string) => s.replace(/\s+/g, ' ').trim();
const escapeHtml = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
const wordsOf = (s: string) => new Set(s.toLowerCase().match(/[a-z0-9]{4,}/g) ?? []);

const flat = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '');

/**
 * Mark each sentence of a commitment block that one of the item's sources states.
 * Requirement text is the commitment's own words re-cut (line breaks, list markers),
 * so both are flattened to letters and digits and a sentence counts as stated when one
 * contains the other. Near-verbatim sentences (a word or two changed) fall back to a
 * strict word overlap. Each <mark> carries the id of the source that states it.
 */
type Src = { id: string; flat: string; words: Set<string> };
const highlight = (block: string, sources: Src[]): string =>
  norm(block)
    .split(/(?<=[.;:])\s+/)
    .map((sentence) => {
      const html = escapeHtml(sentence);
      const f = flat(sentence);
      if (f.length < 24) return html;
      const w = wordsOf(sentence);
      const hit = sources.find((src) => {
        if (src.flat.includes(f) || (src.flat.length >= 40 && f.includes(src.flat))) return true;
        let n = 0;
        w.forEach((x) => src.words.has(x) && n++);
        return w.size >= 8 && n / w.size >= 0.85;
      });
      return hit ? `<mark data-src="${hit.id}">${html}</mark>` : html;
    })
    .join(' ');

const setLabel = (btn: HTMLElement, text: string) => {
  (btn.querySelector('.esa-button__label') ?? btn).textContent = text;
};
const show = (el: HTMLElement | null, on: boolean) => {
  if (!el) return;
  // esa-button's own display rule outranks the hidden attribute, so hide by style.
  const host = (el.closest('.esa-button') as HTMLElement | null) ?? el;
  host.style.display = on ? '' : 'none';
  el.hidden = !on;
};

export function setupCiReview(root: HTMLElement): void {
  const dialog = root as DialogEl;
  const pdf = root.dataset.pdf ?? '';
  const base = JSON.parse(root.querySelector('[data-ci-details-json]')?.textContent ?? '{}') as Record<string, CiDetail>;
  const bins = [...root.querySelectorAll<HTMLElement>('[data-rev-bin]')];
  const order = bins.map((b) => b.dataset.revBin!);
  const $ = <T extends HTMLElement>(sel: string) => root.querySelector<T>(sel)!;

  const title = $('[data-rev-title]');
  const crumb = $('[data-rev-cat]');
  const pos = $('[data-rev-pos]');
  const sel = $('[data-rev-sel]');
  const mergeBtn = $('[data-rev-merge]');
  const dismissSel = $('[data-rev-dismiss-sel]');
  const tally = $('[data-rev-tally]');
  const approveBtn = $('[data-rev-approve]');
  const reopenBtn = $('[data-rev-reopen]');
  const approvedNote = $('[data-rev-approved-note]');
  const checkEmpty = $('[data-check-empty]');
  const checkBody = $('[data-check-body]');
  const checkDoc = $('[data-check-commitment]');
  const sourcePick = $<Field>('[data-check-source]');
  const pdfLink = $('[data-check-pdf-link]');
  const frame = $<HTMLIFrameElement>('[data-check-frame]');
  const tabs = $<HTMLElement & { activeIndex: number }>('[data-check-tabs]');
  const form = $('[data-ci-details]');
  const savedNote = $('[data-cidet-saved]');
  const template = $<HTMLTemplateElement>('[data-rev-row-template]');

  let current = order[0];
  let selected: string | null = null;
  let cross: Crosscheck | null = null;
  const section = () => bins.find((b) => b.dataset.revBin === current)!;

  // ── decisions → DOM ──────────────────────────────────────────────────────
  // Every re-apply starts from the rows as rendered: placed clones are removed and
  // merged sources restored, then each decision is laid back on.
  const original = new Map<HTMLElement, string>();
  root.querySelectorAll<HTMLElement>('[data-rev-bin] [data-item-reqs]').forEach((ul) => original.set(ul, ul.innerHTML));
  const homeOf = new Map<string, string>(Object.values(base).map((d) => [d.id, d.home]));
  const sourceLi = (reqId: string) => root.querySelector<HTMLElement>(`[data-rev-bin] [data-req="${reqId}"]`)?.closest('li');

  const makeRow = (d: CiDetail): HTMLElement => {
    const row = (template.content.firstElementChild as HTMLElement).cloneNode(true) as HTMLElement;
    row.dataset.item = d.id;
    row.dataset.kind = d.kind;
    row.dataset.clone = '';
    const ul = row.querySelector<HTMLElement>('[data-item-reqs]')!;
    ul.innerHTML = '';
    for (const s of d.sources) {
      const li = sourceLi(s.id);
      if (li) ul.append(li.cloneNode(true));
    }
    return row;
  };

  const paintRow = (row: HTMLElement, d: CiDetail) => {
    row.querySelector('[data-item-open]')!.textContent = d.title || (d.kind === 'action' ? 'Untitled action' : 'Untitled obligation');
    const chip = row.querySelector<HTMLElement>('[data-item-chip]')!;
    chip.dataset.class = d.kind === 'action' ? 'action' : d.cls ?? 'adhere';
    chip.textContent = d.kind === 'action' ? 'Action' : CLASS_LABEL[d.cls ?? 'adhere'];
  };

  const apply = (s: CiReviewState) => {
    root.querySelectorAll('[data-item][data-clone]').forEach((r) => r.remove());
    original.forEach((html, ul) => (ul.innerHTML = html));

    // Rows placed by a decision: created items, and fixture items whose home moved.
    const placed: CiDetail[] = [
      ...s.created.map((c) => effective(base, s, c.id)!),
      ...Object.keys(s.edits)
        .filter((id) => base[id] && s.edits[id].home && s.edits[id].home !== homeOf.get(id))
        .map((id) => effective(base, s, id)!),
    ];
    for (const d of placed) {
      const target = bins.find((b) => b.dataset.revBin === d.home)?.querySelector<HTMLElement>(`[data-rev-group="${d.kind}"]`);
      if (target) target.append(makeRow(d));
    }

    root.querySelectorAll<HTMLElement>('[data-rev-bin] [data-item]').forEach((row) => {
      const id = row.dataset.item!;
      const d = effective(base, s, id);
      if (d) paintRow(row, d);
      const movedAway = !row.hasAttribute('data-clone') && !row.hasAttribute('data-also') && !!base[id] && !!d && d.home !== homeOf.get(id);
      const dismissed = s.dismissed.includes(id);
      row.toggleAttribute('data-dismissed', dismissed);
      row.querySelector<HTMLElement>('[data-item-dismissed]')!.hidden = !dismissed;
      row.hidden = !!s.merged[id] || s.deleted.includes(id) || movedAway;
      const sources = Object.entries(s.merged).filter(([, t]) => t === id).map(([src]) => src);
      const note = row.querySelector<HTMLElement>('[data-merged-note]')!;
      note.hidden = sources.length === 0;
      note.textContent = sources.length ? `Merged from ${sources.length + 1}` : '';
      row.querySelector<HTMLElement>('[data-item-unmerge]')!.hidden = sources.length === 0;
      if (sources.length) {
        const ul = row.querySelector<HTMLElement>('[data-item-reqs]')!;
        const have = new Set([...ul.querySelectorAll<HTMLElement>('[data-req]')].map((b) => b.dataset.req));
        for (const src of sources) {
          for (const r of base[src]?.sources ?? []) {
            if (have.has(r.id)) continue;
            const li = sourceLi(r.id);
            if (li) {
              have.add(r.id);
              ul.append(li.cloneNode(true));
            }
          }
        }
      }
    });

    for (const b of bins) {
      b.querySelectorAll<HTMLElement>('[data-rev-group]').forEach((g) => (g.hidden = !g.querySelector('[data-item]:not([hidden])')));
      b.querySelector<HTMLElement>('[data-rev-empty]')!.hidden = !!b.querySelector('[data-item]:not([hidden])');
    }
    paintBin(s);
  };

  /** The item as the tree shows it, merged sources included. */
  const itemNow = (id: string): CiDetail | undefined => {
    const s = readState();
    const d = effective(base, s, id);
    if (!d) return undefined;
    const extra = Object.entries(s.merged)
      .filter(([, t]) => t === id)
      .flatMap(([src]) => base[src]?.sources ?? []);
    const seen = new Set(d.sources.map((x) => x.id));
    return { ...d, sources: [...d.sources, ...extra.filter((x) => !seen.has(x.id) && !!seen.add(x.id))] };
  };

  const paintBin = (s = readState()) => {
    const visible = [...section().querySelectorAll<HTMLElement>('[data-item]')].filter((r) => !r.hidden);
    const kept = visible.filter((r) => !r.hasAttribute('data-dismissed'));
    const dismissed = visible.length - kept.length;
    const actions = kept.filter((r) => r.dataset.kind === 'action').length;
    const obligations = kept.length - actions;
    const n = (x: number, one: string, many: string) => `${x} ${x === 1 ? one : many}`;
    tally.textContent = [
      n(actions, 'action', 'actions'),
      n(obligations, 'obligation', 'obligations'),
      dismissed ? `${dismissed} dismissed` : '',
    ]
      .filter(Boolean)
      .join(' · ');
    const approved = s.approved.includes(current);
    show(approveBtn, !approved);
    show(reopenBtn, approved);
    approvedNote.hidden = !approved;
    paintSelection();
  };

  // ── selection (checkboxes) ───────────────────────────────────────────────
  const checked = () =>
    [...section().querySelectorAll<HTMLElement & { checked?: boolean }>('[data-item-select]')]
      .filter((c) => c.checked && !c.closest<HTMLElement>('[data-item]')!.hidden)
      .map((c) => c.closest<HTMLElement>('[data-item]')!);

  const paintSelection = () => {
    const rows = checked();
    const obligations = rows.filter((r) => r.dataset.kind === 'obligation');
    sel.textContent = rows.length ? `${rows.length} selected` : 'Nothing selected';
    const canMerge = obligations.length >= 2 && obligations.length === rows.length;
    (mergeBtn as HTMLButtonElement).disabled = !canMerge;
    setLabel(mergeBtn, canMerge ? `Merge ${obligations.length}` : 'Merge');
    (dismissSel as HTMLButtonElement).disabled = rows.length === 0;
  };

  const clearChecks = () => {
    root.querySelectorAll<HTMLElement & { checked?: boolean }>('[data-item-select]').forEach((c) => (c.checked = false));
    paintSelection();
  };

  // ── the side panel ───────────────────────────────────────────────────────
  const loadCross = async (): Promise<Crosscheck> => {
    if (cross) return cross;
    const res = await fetch(new URL('crosscheck.json', new URL(location.pathname.replace(/\/?$/, '/'), location.origin)));
    cross = (await res.json()) as Crosscheck;
    return cross;
  };

  const field = (name: string) => form.querySelector<Field>(`[data-f="${name}"]`)!;
  const FIELDS = [
    'title',
    'description',
    'cls',
    'trigger',
    'type',
    'deliverableType',
    'frequency',
    'timing',
    'recipient',
    'evidence',
    'phases',
    'species',
    'activities',
    'party',
    'home',
    'also',
  ] as const;

  const fillDetails = (d: CiDetail) => {
    form.dataset.kind = d.kind;
    for (const f of FIELDS) {
      const v = (d as unknown as Record<string, unknown>)[f];
      field(f).value = Array.isArray(v) ? [...v] : (v ?? '');
    }
    const list = form.querySelector<HTMLElement>('[data-cidet-sources]')!;
    list.innerHTML = '';
    if (!d.sources.length) {
      const li = document.createElement('li');
      li.className = 'bcn-cidet__empty';
      li.textContent = '–';
      list.append(li);
    }
    for (const s of d.sources) {
      const li = document.createElement('li');
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'bcn-cidet__source';
      b.dataset.req = s.id;
      // The tree's own <BcnCommitmentBadge>, cloned so the scoped chip styles come with it.
      const badge = sourceLi(s.id)?.querySelector('.bcn-cbadge');
      const code = (badge?.cloneNode(true) as HTMLElement | undefined) ?? document.createElement('span');
      if (!badge) code.textContent = s.code;
      const text = document.createElement('span');
      text.textContent = s.excerpt;
      b.append(code, text);
      li.append(b);
      list.append(li);
    }
    savedNote.hidden = true;
  };

  const readDetails = (): Partial<CiDetail> => {
    const out: Record<string, unknown> = {};
    for (const f of FIELDS) {
      const v = field(f).value;
      out[f] = Array.isArray(v) ? [...v] : (v ?? '');
    }
    if (form.dataset.kind === 'action') {
      delete out.cls;
      delete out.trigger;
      out.also = [];
    }
    return out as Partial<CiDetail>;
  };

  const renderCommitment = async (d: CiDetail, focusReq?: string) => {
    if (!d.sources.length) {
      checkDoc.innerHTML = '';
      return;
    }
    const data = await loadCross();
    const byCode = new Map<string, Src[]>();
    for (const s of d.sources) {
      const r = data.req[s.id];
      if (!r) continue;
      const list = byCode.get(r[0]) ?? [];
      list.push({ id: s.id, flat: flat(r[2]), words: wordsOf(r[2]) });
      byCode.set(r[0], list);
    }
    checkDoc.innerHTML = [...byCode.entries()]
      .map(([code, srcs]) => {
        const c = data.com[code];
        const blocks = (c?.blocks ?? []).map((b) => `<p>${highlight(b, srcs)}</p>`).join('');
        const from = c?.from && c.from !== code ? `<span class="bcn-cirev__doc-from">text of ${escapeHtml(c.from)}</span>` : '';
        return `<section class="bcn-cirev__com" data-code="${escapeHtml(code)}">
          <div class="bcn-cirev__doc-head"><span class="bcn-cirev__doc-code">${escapeHtml(code)}</span><span class="bcn-cirev__doc-title">${escapeHtml(c?.title ?? '')}</span>${from}</div>
          <div class="bcn-cirev__doc-text">${blocks || '<p>–</p>'}</div>
        </section>`;
      })
      .join('');
    // Swap each header code for the tree's <BcnCommitmentBadge>.
    checkDoc.querySelectorAll<HTMLElement>('.bcn-cirev__doc-code').forEach((el) => {
      const src = d.sources.find((x) => x.code === el.textContent);
      const badge = src && sourceLi(src.id)?.querySelector('.bcn-cbadge');
      if (badge) el.replaceWith(badge.cloneNode(true));
    });
    if (focusReq) {
      const marks = checkDoc.querySelectorAll<HTMLElement>(`mark[data-src="${focusReq}"]`);
      marks.forEach((m) => m.setAttribute('data-focus', ''));
      const target = marks[0] ?? checkDoc.querySelector<HTMLElement>(`[data-code="${data.req[focusReq]?.[0] ?? ''}"]`);
      // Scroll the panel, not the dialog: scrollIntoView would drag the tabs off too.
      requestAnimationFrame(() => {
        if (!target) return;
        let box = checkDoc.parentElement;
        while (box && !/(auto|scroll)/.test(getComputedStyle(box).overflowY)) box = box.parentElement;
        if (!box) return;
        const off = target.getBoundingClientRect().top - box.getBoundingClientRect().top;
        box.scrollTop += off - box.clientHeight / 3;
      });
    }
  };

  // The PDF viewer ignores #page when it loads inside a hidden tab panel, and a hash
  // change alone does not re-seek it; so the frame loads only while its tab shows, and
  // is replaced rather than re-hashed.
  let pdfSrc = '';
  let loaded = '';
  const loadPdf = () => {
    if (!pdfSrc || loaded === pdfSrc) return;
    loaded = pdfSrc;
    frame.src = 'about:blank';
    setTimeout(() => (frame.src = pdfSrc), 50);
  };
  const pointPdf = (reqId: string) => {
    const r = cross?.req[reqId];
    const page = r ? cross?.com[r[0]]?.page : null;
    pdfSrc = page ? `${pdf}#page=${page}&navpanes=0&view=FitH` : pdf;
    pdfLink.setAttribute('href', pdfSrc);
    if (tabs.activeIndex === 2) loadPdf();
  };
  const fillSources = async (d: CiDetail, focusReq?: string) => {
    const data = await loadCross();
    const seen = new Set<string>();
    const options = d.sources
      .filter((s) => !seen.has(s.code) && !!seen.add(s.code))
      .map((s) => ({ label: `${s.code} · page ${data.com[s.code]?.page ?? '–'}`, value: s.id }));
    (sourcePick as HTMLElement & { options: unknown }).options = options;
    if (!options.length) {
      pdfSrc = pdf;
      pdfLink.setAttribute('href', pdf);
      return;
    }
    const focusCode = focusReq ? data.req[focusReq]?.[0] : undefined;
    const pick = options.find((o) => data.req[o.value]?.[0] === focusCode)?.value ?? options[0].value;
    sourcePick.value = pick;
    pointPdf(pick);
  };

  const deselect = () => {
    selected = null;
    root.querySelectorAll('[data-item][data-active]').forEach((r) => r.removeAttribute('data-active'));
    root.querySelectorAll('[data-req][aria-current]').forEach((b) => b.removeAttribute('aria-current'));
    checkEmpty.hidden = false;
    checkBody.hidden = true;
  };

  const select = async (id: string, opts: { tab?: number; focusReq?: string } = {}) => {
    const d = itemNow(id);
    if (!d) return;
    selected = id;
    root.querySelectorAll('[data-item][data-active]').forEach((r) => r.removeAttribute('data-active'));
    root.querySelectorAll('[data-req][aria-current]').forEach((b) => b.removeAttribute('aria-current'));
    section().querySelectorAll(`[data-item="${id}"]`).forEach((r) => r.setAttribute('data-active', ''));
    if (opts.focusReq) section().querySelectorAll(`[data-req="${opts.focusReq}"]`).forEach((b) => b.setAttribute('aria-current', 'true'));
    checkEmpty.hidden = true;
    checkBody.hidden = false;
    fillDetails(d);
    if (opts.tab !== undefined) tabs.activeIndex = opts.tab;
    await renderCommitment(d, opts.focusReq);
    await fillSources(d, opts.focusReq);
  };

  tabs.addEventListener('tabchange', (e) => {
    if ((e as CustomEvent<{ index: number }>).detail.index === 2) requestAnimationFrame(loadPdf);
  });
  sourcePick.addEventListener('change', () => pointPdf(sourcePick.value as string));

  // ── open a bin ───────────────────────────────────────────────────────────
  const open = (bin: string) => {
    if (!order.includes(bin)) return;
    current = bin;
    bins.forEach((b) => (b.hidden = b.dataset.revBin !== bin));
    const sec = section();
    title.textContent = sec.dataset.binName ?? '';
    crumb.textContent = sec.dataset.catName ?? '';
    pos.textContent = `${order.indexOf(bin) + 1} of ${order.length}`;
    clearChecks();
    deselect();
    paintBin();
    sec.closest('.bcn-cirev__tree')?.scrollTo({ top: 0 });
    const url = new URL(location.href);
    url.searchParams.set('bin', bin);
    history.replaceState(null, '', url);
    if (!dialog.open) dialog.show();
  };

  const step = (dir: 1 | -1) => open(order[(order.indexOf(current) + dir + order.length) % order.length]);

  // ── events ───────────────────────────────────────────────────────────────
  root.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    const row = t.closest<HTMLElement>('[data-item]');

    if (t.closest('[data-rev-prev]')) return step(-1);
    if (t.closest('[data-rev-next]')) return step(1);

    if (t.closest('[data-rev-expand]') || t.closest('[data-rev-collapse]')) {
      const on = !!t.closest('[data-rev-expand]');
      section()
        .querySelectorAll<HTMLElement>('[data-item]')
        .forEach((r) => {
          r.querySelector<HTMLElement>('[data-item-reqs]')!.hidden = !on;
          r.querySelector('[data-item-toggle]')!.setAttribute('aria-expanded', String(on));
        });
      return;
    }

    if (row && t.closest('[data-item-toggle]')) {
      const ul = row.querySelector<HTMLElement>('[data-item-reqs]')!;
      ul.hidden = !ul.hidden;
      row.querySelector('[data-item-toggle]')!.setAttribute('aria-expanded', String(!ul.hidden));
      return;
    }

    if (row && t.closest('[data-item-open]')) return void select(row.dataset.item!, { tab: 0 });

    // A source, from a row's children or from the Details tab's list.
    const reqBtn = t.closest<HTMLElement>('[data-req]');
    if (reqBtn && (row || selected)) return void select(row?.dataset.item ?? selected!, { tab: 1, focusReq: reqBtn.dataset.req });

    const newKind = t.closest<HTMLElement>('[data-rev-new]')?.dataset.revNew as 'action' | 'obligation' | undefined;
    if (newKind) {
      const s = readState();
      const d: CiDetail = {
        id: `new-${Date.now()}`,
        kind: newKind,
        title: '',
        description: '',
        cls: newKind === 'obligation' ? 'adhere' : undefined,
        trigger: '',
        type: '',
        deliverableType: '',
        frequency: '',
        timing: '',
        recipient: '',
        evidence: '',
        phases: [],
        species: [],
        activities: [],
        party: '',
        home: current,
        also: [],
        sources: [],
      };
      s.created.push(d);
      writeState(s);
      apply(s);
      return void select(d.id, { tab: 0 });
    }

    if (t.closest('[data-cidet-save]') && selected) {
      const s = readState();
      const patch = readDetails();
      const made = s.created.find((c) => c.id === selected);
      if (made) Object.assign(made, patch);
      else s.edits[selected] = { ...(s.edits[selected] ?? {}), ...patch };
      writeState(s);
      apply(s);
      const id = selected;
      if (section().querySelector(`[data-item="${id}"]:not([hidden])`)) select(id).then(() => (savedNote.hidden = false));
      else deselect();
      return;
    }
    if (t.closest('[data-cidet-delete]') && selected) {
      const s = readState();
      if (s.created.some((c) => c.id === selected)) s.created = s.created.filter((c) => c.id !== selected);
      else s.deleted = [...new Set([...s.deleted, selected])];
      writeState(s);
      apply(s);
      return deselect();
    }

    if (row && t.closest('[data-item-dismiss]')) {
      const s = readState();
      s.dismissed = [...new Set([...s.dismissed, row.dataset.item!])];
      writeState(s);
      return apply(s);
    }
    if (row && t.closest('[data-item-restore]')) {
      const s = readState();
      s.dismissed = s.dismissed.filter((x) => x !== row.dataset.item);
      writeState(s);
      return apply(s);
    }
    if (row && t.closest('[data-item-unmerge]')) {
      const s = readState();
      for (const [src, tgt] of Object.entries(s.merged)) if (tgt === row.dataset.item) delete s.merged[src];
      writeState(s);
      return apply(s);
    }

    if (t.closest('[data-rev-merge]')) {
      const rows = checked();
      if (rows.length < 2) return;
      const s = readState();
      const [target, ...rest] = rows.map((r) => r.dataset.item!);
      for (const src of rest) {
        s.merged[src] = target;
        // Anything already merged into a source follows it into the target.
        for (const [k, v] of Object.entries(s.merged)) if (v === src) s.merged[k] = target;
      }
      writeState(s);
      clearChecks();
      apply(s);
      return void select(target, { tab: 0 });
    }
    if (t.closest('[data-rev-dismiss-sel]')) {
      const s = readState();
      s.dismissed = [...new Set([...s.dismissed, ...checked().map((r) => r.dataset.item!)])];
      writeState(s);
      clearChecks();
      return apply(s);
    }

    if (t.closest('[data-rev-approve]')) {
      const s = readState();
      s.approved = [...new Set([...s.approved, current])];
      writeState(s);
      const next = order
        .slice(order.indexOf(current) + 1)
        .concat(order)
        .find((b) => !s.approved.includes(b));
      if (next) open(next);
      else paintBin(s);
      return;
    }
    if (t.closest('[data-rev-reopen]')) {
      const s = readState();
      s.approved = s.approved.filter((b) => b !== current);
      writeState(s);
      return paintBin(s);
    }
  });

  root.addEventListener('change', (e) => {
    if ((e.target as HTMLElement).closest('[data-item-select]')) paintSelection();
  });

  root.addEventListener('close', () => {
    const url = new URL(location.href);
    url.searchParams.delete('bin');
    history.replaceState(null, '', url);
  });

  document.addEventListener('ci:open-bin', (e) => open((e as CustomEvent<{ bin: string }>).detail.bin));

  apply(readState());
  const initial = new URL(location.href).searchParams.get('bin');
  if (initial) customElements.whenDefined('esa-dialog').then(() => open(initial));
}
