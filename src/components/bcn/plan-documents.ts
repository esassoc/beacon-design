// <BcnPlanDocuments>' runtime (2026-10-28): the plan's Documents view, All Documents and Agency Record. The plan page
// mounts it as a third view beside Schedule and Budget and calls draw() when it shows; the view also redraws itself
// when the plan's records change (a document added on an element page, here or in another tab). The mode is a
// per-viewer convenience, kept in this browser.
//
//   const docs = setupPlanDocumentsView(root, { planID, plan: () => live, elementHref: (id) => ELEMENT_HREF(planID, id) });
//   docs.draw();

import '@esa/ecology/esa-button-toggle';
import '@esa/ecology/esa-text-field';
import '@esa/ecology/esa-filter-dropdown';
import type { PlanDetailDto, PlanElementDto } from '../../lib/planning/model';
import { recordsFor, type DocLink, type PlanFile } from '../../lib/planning/plan-records';
import { PLAN_ICON_PATHS, planIcon } from '../../lib/planning/icons';
import { day } from './element-module';
import { documentGlyph, revisionText } from './element-documents';

export interface PlanDocumentsOptions {
  planID: string;
  /** The plan the view lists against (Live: records attach to Live elements). */
  plan: () => PlanDetailDto;
  elementHref: (id: string) => string;
}
export interface PlanDocumentsView {
  draw(): void;
}

type Mode = 'all' | 'agency';
type Facet = HTMLElement & { options: { value: string; label: string }[]; _selected: string[] };
type ToggleEl = HTMLElement & { value: string; options: { label: string; value: string; icon?: string }[] };

const CORRESPONDENCE = 'Correspondence';
const MODE_KEY = 'bcn-plan-documents-mode';

/** One link as the view lists it: the link, its file, the item it's on, that item's parent and study. */
interface DocRow {
  link: DocLink;
  file: PlanFile;
  item: PlanElementDto;
  parent?: PlanElementDto;
  /** The second-level element it sits under (or is). */
  studyId?: string;
}

const el = <K extends keyof HTMLElementTagNameMap>(tag: K, className = '', text = '') => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
};
const monthOf = (iso: string) => new Date(`${iso.slice(0, 7)}-15T12:00:00`).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
const plural = (n: number, one: string, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;
const csvCell = (v: string) => (/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);

export function setupPlanDocumentsView(root: HTMLElement, opts: PlanDocumentsOptions): PlanDocumentsView {
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const modeToggle = q<ToggleEl>('[data-pdocs-mode]');
  const search = q<HTMLElement & { value: string }>('[data-pdocs-search]');
  const facet = (name: 'type' | 'agency' | 'study') => q<Facet>(`[data-pdocs-filter="${name}"]`);
  const table = q<HTMLTableElement>('[data-pdocs-table]');
  const scroll = q<HTMLElement>('[data-pdocs-scroll]');
  const summary = q<HTMLElement>('[data-pdocs-summary]');
  const empty = q<HTMLElement>('[data-pdocs-empty]');

  let mode: Mode = 'all';
  try {
    if (localStorage.getItem(MODE_KEY) === 'agency') mode = 'agency';
  } catch {
    /* no storage: start on All Documents */
  }
  const filters = { text: '', type: '', agency: '', study: '' };
  /** The rows on screen, for Export: links in All Documents; in the Agency Record, letters (each its links). */
  let visible: DocRow[] = [];
  let letters: DocRow[][] = [];

  modeToggle.options = [
    { label: 'All Documents', value: 'all', icon: PLAN_ICON_PATHS.files },
    { label: 'Agency Record', value: 'agency', icon: PLAN_ICON_PATHS.mail },
  ];
  modeToggle.value = mode;
  modeToggle.addEventListener('change', (e) => {
    if (e.target !== modeToggle) return;
    mode = ((e as CustomEvent<{ value?: string }>).detail?.value ?? modeToggle.value) === 'agency' ? 'agency' : 'all';
    try {
      localStorage.setItem(MODE_KEY, mode);
    } catch {
      /* the choice holds for this visit */
    }
    draw();
  });
  // As you type, as on every plan view.
  search.addEventListener('input', (e) => {
    if (e.target !== search) return;
    filters.text = String(search.value ?? '').trim().toLowerCase();
    draw();
  });
  for (const name of ['type', 'agency', 'study'] as const) {
    facet(name).addEventListener('selection-change', (e) => {
      filters[name] = String((e as CustomEvent<{ value?: string }>).detail?.value ?? '');
      draw();
    });
  }
  function clearFilters(): void {
    Object.assign(filters, { text: '', type: '', agency: '', study: '' });
    search.value = '';
    for (const name of ['type', 'agency', 'study'] as const) facet(name)._selected = [];
    draw();
  }
  q<HTMLElement>('[data-pdocs-clear]').addEventListener('click', clearFilters);

  // ── The rows ──

  function rowsOf(plan: PlanDetailDto): { rows: DocRow[]; studies: PlanElementDto[] } {
    const byId = new Map<string, { item: PlanElementDto; parent?: PlanElementDto; studyId?: string }>();
    const studies: PlanElementDto[] = [];
    const walk = (els: readonly PlanElementDto[] | null | undefined, parent: PlanElementDto | undefined, depth: number, studyId: string | undefined) => {
      for (const e of els ?? []) {
        const d = e.LevelDepth ?? depth;
        const study = d === 2 ? (e.PlanElementID ?? undefined) : studyId;
        if (d === 2) studies.push(e);
        byId.set(e.PlanElementID ?? '', { item: e, parent, studyId: study });
        walk(e.Children, e, d + 1, study);
      }
    };
    walk(plan.Elements, undefined, 1, undefined);
    const rec = recordsFor(opts.planID);
    const files = new Map(rec.files.map((f) => [f.id, f]));
    const rows: DocRow[] = [];
    for (const link of rec.links) {
      const file = files.get(link.fileId);
      const at = byId.get(link.elementId);
      if (file && at) rows.push({ link, file, ...at });
    }
    return { rows, studies };
  }

  const matches = (r: DocRow) => {
    if (filters.study && r.studyId !== filters.study) return false;
    if (!filters.text) return true;
    const c = r.link.correspondence;
    return [r.file.name, r.file.revision, r.link.type, r.link.note, r.item.PlanElementName, r.parent?.PlanElementName, c?.agency, c?.agreement]
      .filter(Boolean)
      .some((s) => s!.toLowerCase().includes(filters.text));
  };

  // ── Cells ──

  function docCell(r: DocRow, withNote: boolean): HTMLElement {
    const td = el('td');
    const wrap = el('div', 'bcn-pdocs__doc');
    const glyph = el('span', 'bcn-pdocs__glyph');
    glyph.innerHTML = planIcon(documentGlyph(r.file, r.link.type), 14);
    const body = el('div');
    if (r.file.kind === 'link' && r.file.url) {
      const a = el('a', 'bcn-pdocs__name', r.file.name);
      a.href = r.file.url;
      a.target = '_blank';
      a.rel = 'noreferrer';
      a.title = r.file.url;
      a.insertAdjacentHTML('beforeend', planIcon('external-link', 11));
      body.append(a);
    } else body.append(el('span', 'bcn-pdocs__name', r.file.name));
    const rev = revisionText(r.file);
    if (rev) body.append(el('span', 'bcn-pdocs__rev', rev));
    if (withNote && r.link.note) body.append(el('span', 'bcn-pdocs__sub', r.link.note));
    wrap.append(glyph, body);
    td.append(wrap);
    return td;
  }
  /** The item a link is on, with its parent under it. */
  function itemBlock(r: DocRow): HTMLElement {
    const div = el('div', 'bcn-pdocs__at');
    const a = el('a', 'bcn-pdocs__item', r.item.PlanElementName ?? '');
    a.href = opts.elementHref(r.item.PlanElementID ?? '');
    div.append(a);
    if (r.parent) div.append(el('span', 'bcn-pdocs__sub', r.parent.PlanElementName ?? ''));
    return div;
  }
  const itemCell = (r: DocRow) => wrapTd(itemBlock(r));
  function agreementEl(text: string): HTMLElement {
    const div = el('div', 'bcn-pdocs__agreement');
    div.innerHTML = planIcon('circle-check', 14);
    div.append(el('span', '', text));
    return div;
  }
  const head = (cols: { label: string; width?: string }[]) => {
    const colgroup = el('colgroup');
    const thead = el('thead');
    const tr = el('tr');
    for (const c of cols) {
      const col = el('col');
      if (c.width) col.style.inlineSize = c.width;
      colgroup.append(col);
      const th = el('th', '', c.label);
      th.scope = 'col';
      tr.append(th);
    }
    thead.append(tr);
    return [colgroup, thead];
  };

  // ── All Documents ──

  function drawAll(rows: DocRow[]): void {
    visible = rows.filter((r) => (!filters.type || r.link.type === filters.type) && matches(r)).sort((a, b) => b.link.date.localeCompare(a.link.date) || a.file.name.localeCompare(b.file.name));
    const tbody = el('tbody');
    for (const r of visible) {
      const tr = el('tr');
      const note = el('td');
      if (r.link.note) note.append(el('div', 'bcn-pdocs__note', r.link.note));
      if (r.link.correspondence?.agreement) note.append(agreementEl(r.link.correspondence.agreement));
      tr.append(docCell(r, false), el('td', '', r.link.type), el('td', 'bcn-pdocs__date', day(r.link.date)), itemCell(r), note);
      tbody.append(tr);
    }
    table.replaceChildren(...head([{ label: 'Document', width: '28%' }, { label: 'Type', width: '9rem' }, { label: 'Added', width: '7rem' }, { label: 'Item', width: '22%' }, { label: 'Note' }]), tbody);
    summary.textContent = visible.length === rows.length ? plural(rows.length, 'Document') : `${visible.length} of ${plural(rows.length, 'Document')}`;
  }

  // ── Agency Record ──

  function drawAgency(rows: DocRow[]): void {
    const letterDate = (r: DocRow) => r.link.correspondence?.letterDate || r.link.date;
    visible = rows
      .filter((r) => r.link.type === CORRESPONDENCE && r.link.correspondence && (!filters.agency || r.link.correspondence.agency === filters.agency) && matches(r))
      .sort((a, b) => letterDate(b).localeCompare(letterDate(a)) || a.link.correspondence!.agency.localeCompare(b.link.correspondence!.agency));
    // One row per letter, not per link: a letter on two items is one touchpoint, listed once with both items. The
    // same file with a different agreement on each item (one workshop settling two things) stays two rows.
    const byLetter = new Map<string, DocRow[]>();
    for (const r of visible) {
      const c = r.link.correspondence!;
      const key = [r.file.id, c.agency, c.direction, c.letterDate, c.agreement ?? ''].join('|');
      byLetter.set(key, [...(byLetter.get(key) ?? []), r]);
    }
    letters = [...byLetter.values()];
    const months = new Map<string, DocRow[][]>();
    for (const letter of letters) {
      const key = letterDate(letter[0]).slice(0, 7);
      months.set(key, [...(months.get(key) ?? []), letter]);
    }
    const bodies = [...months.entries()].map(([key, group]) => {
      const tbody = el('tbody');
      const month = el('tr', 'bcn-pdocs__month');
      month.dataset.rtableGroup = '';
      const th = el('th', '', monthOf(key));
      th.colSpan = 6;
      th.scope = 'colgroup';
      th.append(el('small', '', plural(group.length, 'Letter')));
      month.append(th);
      tbody.append(month);
      for (const letter of group) {
        const [first] = letter;
        const c = first.link.correspondence!;
        const tr = el('tr');
        const dir = el('span', 'bcn-pdocs__dir');
        dir.innerHTML = planIcon(c.direction === 'Sent' ? 'send' : 'inbox', 13);
        dir.append(c.direction);
        const agreement = el('td');
        if (c.agreement) agreement.append(agreementEl(c.agreement));
        // The note is each item's own: shown when there's one item, or when every item says the same.
        const oneNote = letter.every((r) => r.link.note === first.link.note);
        const items = el('td');
        for (const r of letter) items.append(itemBlock(r));
        tr.append(el('td', 'bcn-pdocs__date', day(letterDate(first))), el('td', 'bcn-pdocs__agency', c.agency), wrapTd(dir), agreement, docCell(first, oneNote), items);
        tbody.append(tr);
      }
      return tbody;
    });
    table.replaceChildren(...head([{ label: 'Letter Date', width: '6.75rem' }, { label: 'Agency', width: '5rem' }, { label: 'Direction', width: '6.25rem' }, { label: 'Agreement', width: '27%' }, { label: 'Document', width: '23%' }, { label: 'Item' }]), ...bodies);
    const agreed = letters.filter((l) => l[0].link.correspondence?.agreement).length;
    summary.textContent = `${plural(letters.length, 'Letter')}, ${plural(agreed, 'Agreement')}`;
  }
  const wrapTd = (child: HTMLElement) => {
    const td = el('td');
    td.append(child);
    return td;
  };

  // ── Export: the rows on screen ──

  q<HTMLElement>('[data-pdocs-export]').addEventListener('click', () => {
    const header =
      mode === 'agency'
        ? ['Letter Date', 'Agency', 'Direction', 'Agreement', 'Document', 'Revision', 'Note', 'Items', 'Parents', 'Document Date']
        : ['Document', 'Revision', 'Type', 'Added', 'Item', 'Parent', 'Note', 'Agency', 'Direction', 'Letter Date', 'Agreement', 'URL'];
    const each = (rows: DocRow[], pick: (r: DocRow) => string) => [...new Set(rows.map(pick))].filter(Boolean).join('; ');
    const lines =
      mode === 'agency'
        ? letters.map((l) => {
            const [r] = l;
            const c = r.link.correspondence!;
            return [c.letterDate || r.link.date, c.agency, c.direction, c.agreement ?? '', r.file.name, r.file.revision ?? '', each(l, (x) => x.link.note), each(l, (x) => x.item.PlanElementName ?? ''), each(l, (x) => x.parent?.PlanElementName ?? ''), r.link.date];
          })
        : visible.map((r) => {
            const c = r.link.correspondence;
            return [r.file.name, r.file.revision ?? '', r.link.type, r.link.date, r.item.PlanElementName ?? '', r.parent?.PlanElementName ?? '', r.link.note, c?.agency ?? '', c?.direction ?? '', c?.letterDate ?? '', c?.agreement ?? '', r.file.url ?? ''];
          });
    const csv = [header, ...lines].map((row) => row.map((v) => csvCell(String(v ?? ''))).join(',')).join('\r\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([`﻿${csv}`], { type: 'text/csv;charset=utf-8' }));
    a.download = `${opts.plan().PlanName ?? 'Plan'} ${mode === 'agency' ? 'Agency Record' : 'Documents'}.csv`;
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  // ── Draw ──

  function draw(): void {
    const { rows, studies } = rowsOf(opts.plan());
    if (modeToggle.value !== mode) modeToggle.value = mode;
    root.dataset.mode = mode;
    q<HTMLElement>('[data-pdocs-facet="type"]').hidden = mode !== 'all';
    q<HTMLElement>('[data-pdocs-facet="agency"]').hidden = mode !== 'agency';

    // Facets offer what the plan has: its types in use, its agencies written to or from, its studies.
    const types = [...new Set(rows.map((r) => r.link.type))].sort();
    const agencies = [...new Set(rows.map((r) => r.link.correspondence?.agency).filter((a): a is string => !!a))].sort();
    facet('type').options = types.map((t) => ({ value: t, label: t }));
    facet('agency').options = agencies.map((a) => ({ value: a, label: a }));
    facet('study').options = studies.map((s) => ({ value: s.PlanElementID ?? '', label: s.PlanElementName ?? '' }));

    if (mode === 'agency') drawAgency(rows);
    else drawAll(rows);

    // Nothing to list: none yet, or none that match.
    const none = mode === 'agency' ? !rows.some((r) => r.link.type === CORRESPONDENCE) : !rows.length;
    const filtered = !!(filters.text || filters.study || (mode === 'all' ? filters.type : filters.agency));
    if (mode === 'all') letters = [];
    empty.hidden = visible.length > 0;
    scroll.hidden = visible.length === 0;
    const title = empty.querySelector<HTMLElement>('.esa-empty-state__title');
    const desc = empty.querySelector<HTMLElement>('.esa-empty-state__description');
    if (title) title.textContent = none ? (mode === 'agency' ? 'No Agency Correspondence Yet' : 'No Documents Yet') : 'Nothing Matches';
    if (desc) desc.textContent = none ? (mode === 'agency' ? 'Add a Correspondence document on any item.' : 'Add documents from any item’s Documents card.') : 'Clear the filters to see every document.';
    q<HTMLElement>('[data-pdocs-clear]').hidden = none || !filtered;
  }

  // Records saved anywhere redraw the view while it's on the page.
  const redraw = () => root.isConnected && draw();
  window.addEventListener('bcn-plan-records', redraw);
  window.addEventListener('storage', redraw);

  return { draw };
}
