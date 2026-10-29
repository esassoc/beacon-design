// <BcnPlanDeliverables>'s runtime (2026-10-28): every deliverable in the plan, one row each, with what a five-minute
// review asks of it. Due is its end date on the plan as shown; health is derived (or its owner's, with a note; stale
// after 30 days); the last transmittal is the newest one sent, with its receipt ("2 of 3", warning once a recipient is
// past the acknowledgment date); completion is the recorded result, or Open.
//
// The records are Live's (decision 5), read fresh on every draw; the view redraws itself when records change here or in
// another tab. Filters: search, Study, and Late or Due in 30 Days (past its end or due within 30 days, not complete).
// Export writes the rows shown as CSV.

import type { PlanDetailDto, PlanElementDto } from '../../lib/planning/model';
import { TRANSMITTAL_HREF } from '../../lib/planning/element-context';
import {
  healthOf,
  receiptCount,
  receiptOverdue,
  recordsFor,
  reviewRound,
  sentBack,
  statusOf,
  todayIso,
  transmittalNumber,
  transmittalsFor,
  type Completion,
  type ElementStatus,
  type Health,
  type HealthReading,
  type Transmittal,
} from '../../lib/planning/plan-records';
import { badge, HEALTH_VARIANT, STATUS_VARIANT, type BadgeVariant } from './badge-bank';
import { receiptBadge as receiptBadgeOf } from './badge-bank';
import { day, esc } from './element-module';
import { datesIn } from './health-dialog';

export interface PlanDeliverablesOptions {
  planID: string;
  /** The plan as the page shows it: Live, or a draft over it. */
  plan: () => PlanDetailDto;
  isDeliverable: (id: string) => boolean;
  elementHref: (id: string) => string;
}

type FacetEl = HTMLElement & { options: { value: string; label: string }[]; _selected: string[] };
type FieldEl = HTMLElement & { value: string };

interface Row {
  id: string;
  name: string;
  studyId: string;
  study: string;
  due: string | null;
  health: HealthReading;
  status: ElementStatus;
  /** The newest sent; or, with none sent, a draft one. */
  sent?: Transmittal;
  draftOnly?: Transmittal;
  receipt?: { confirmed: number; of: number; overdue: boolean };
  completion?: Completion;
  /** Which round of review the newest send is (1 for a first submittal). */
  round: number;
  /** The send that came back Revisions Requested or Rejected, not yet resubmitted. */
  back?: Transmittal;
}

// Every column sorts (design QA, 2026-10-29: a read list sorts on every data column or on none).
type SortKey = 'name' | 'study' | 'due' | 'health' | 'status' | 'sent' | 'receipt' | 'completion';
/** Worst first, when sorted by health. */
const HEALTH_ORDER = ['Late', 'Blocked', 'At Risk', 'On Track', 'Completed'];
const STATUS_ORDER: ElementStatus[] = ['Blocked', 'In Progress', 'Not Started', 'Completed'];

const endOf = (e: PlanElementDto) => e.SpanEndDate ?? e.EndDate ?? e.StartDate ?? null;
const addDays = (iso: string, days: number) => new Date(Date.parse(`${iso}T12:00:00Z`) + days * 86_400_000).toISOString().slice(0, 10);
const plural = (n: number, one: string, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;

/** Late, or due within so many days, and not complete: the memo's overdue list at 30. */
const dueWithin = (r: Row, today: string, days: number) => r.status !== 'Completed' && !!r.due && r.due <= addDays(today, days);
/** The Due facet: the memo's overdue list, and the quarter ahead. */
const DUE_OPTIONS = [
  { value: '30', label: 'Late or Due in 30 Days' },
  { value: '90', label: 'Late or Due in 90 Days' },
  { value: '-1', label: 'Waiting on Agency' },
];
/** An agency still owes something on it: a receipt not confirmed, or a response not in by its due date. */
const waitingOnAgency = (r: Row) => !r.back && !!r.sent && !r.sent.closedAt && (!!(r.receipt && r.receipt.confirmed < r.receipt.of) || (!!r.sent.responseDue && !r.sent.response));
const healthText = (h: HealthReading) => (h.stale ? `${h.health}, Update Missing` : h.health);

export function setupPlanDeliverablesView(root: HTMLElement, opts: PlanDeliverablesOptions): { draw(): void } {
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const search = q<FieldEl>('[data-pdv-search]');
  const studyFacet = q<FacetEl>('[data-pdv-study]');
  const healthFacet = q<FacetEl>('[data-pdv-health]');
  const dueFacet = q<FacetEl>('[data-pdv-due]');
  const tbody = q('[data-pdv-rows]');
  const count = q('[data-pdv-count]');
  const countTip = q('[data-pdv-count-tip]');
  const tableWrap = q('[data-pdv-table-wrap]');
  const noMatch = q('[data-pdv-no-match]');
  const none = q('[data-pdv-none]');

  let term = '';
  let study = '';
  let healths: string[] = [];
  let dueDays = 0;
  let sort: { key: SortKey; dir: 1 | -1 } = { key: 'due', dir: 1 };
  let shown: Row[] = [];

  // ── The rows ──
  function rowsOf(plan: PlanDetailDto): Row[] {
    const rec = recordsFor(opts.planID);
    const today = todayIso();
    const out: Row[] = [];
    const walk = (els: readonly PlanElementDto[] | null | undefined, chain: PlanElementDto[]) => {
      for (const e of els ?? []) {
        const id = e.PlanElementID ?? '';
        if (opts.isDeliverable(id)) {
          // Its study is the second level down: the top is the program.
          const s = chain[1];
          const ts = transmittalsFor(rec, id);
          const sent = ts.find((t) => t.sentAt);
          const rc = sent ? receiptCount(sent) : undefined;
          out.push({
            id,
            name: e.PlanElementName ?? 'Untitled',
            studyId: s?.PlanElementID ?? '',
            study: s?.PlanElementName ?? '',
            due: endOf(e),
            health: healthOf(rec, plan, id, opts.isDeliverable, today),
            status: statusOf(rec, plan, id),
            sent,
            draftOnly: sent ? undefined : ts[0],
            receipt: sent && rc ? { ...rc, overdue: sent.to.some((n) => receiptOverdue(sent, n, today)) } : undefined,
            completion: rec.completions[id],
            round: sent ? reviewRound(rec, sent) : 1,
            back: sentBack(rec, id),
          });
        }
        walk(e.Children, [...chain, e]);
      }
    };
    walk(plan.Elements, []);
    return out;
  }

  function compare(a: Row, b: Row): number {
    const byDue = (x: Row, y: Row) => (x.due ?? '9999').localeCompare(y.due ?? '9999') || x.name.localeCompare(y.name);
    let d = 0;
    if (sort.key === 'name') d = a.name.localeCompare(b.name);
    else if (sort.key === 'study') d = (a.study || '￿').localeCompare(b.study || '￿');
    else if (sort.key === 'health') d = HEALTH_ORDER.indexOf(a.health.health) - HEALTH_ORDER.indexOf(b.health.health);
    else if (sort.key === 'status') d = STATUS_ORDER.indexOf(a.status) - STATUS_ORDER.indexOf(b.status);
    // Newest send last; a row with nothing sent sorts after every send.
    else if (sort.key === 'sent') d = (a.sent?.sentAt ?? '￿').localeCompare(b.sent?.sentAt ?? '￿');
    // Least received first; nothing sent after every receipt.
    else if (sort.key === 'receipt') d = (a.receipt ? a.receipt.confirmed / (a.receipt.of || 1) : 2) - (b.receipt ? b.receipt.confirmed / (b.receipt.of || 1) : 2);
    else if (sort.key === 'completion') d = (a.completion?.completedOn ?? '￿').localeCompare(b.completion?.completedOn ?? '￿');
    else d = byDue(a, b);
    return d * sort.dir || byDue(a, b);
  }

  const matches = (r: Row) => {
    if (!term) return true;
    const hay = [r.name, r.study, r.status, r.health.health, r.completion?.result, r.back?.response?.outcome, r.round > 1 ? `round ${r.round}` : '', r.sent ? transmittalNumber(r.sent) : '', r.sent?.purpose].join(' ').toLowerCase();
    return term
      .toLowerCase()
      .split(/\s+/)
      .every((w) => hay.includes(w));
  };

  // ── Cells ──
  function cell(cls?: string): HTMLTableCellElement {
    const td = document.createElement('td');
    if (cls) td.className = cls;
    return td;
  }
  const quiet = (text: string, cls = 'bcn-pdv__none') => Object.assign(document.createElement('span'), { className: cls, textContent: text });

  function receiptBadge(r: Row): HTMLElement {
    if (!r.receipt || !r.receipt.of) return quiet('None');
    const { confirmed, of, overdue } = r.receipt;
    return receiptBadgeOf(confirmed, of, overdue);
  }

  function drawRow(r: Row): HTMLTableRowElement {
    const tr = document.createElement('tr');
    tr.dataset.id = r.id;

    const name = cell('bcn-pdv__name');
    const a = document.createElement('a');
    a.className = 'bcn-pdv__link';
    a.href = opts.elementHref(r.id);
    a.textContent = r.name;
    name.append(a);

    const studyCell = cell('bcn-pdv__study');
    studyCell.append(r.study ? document.createTextNode(r.study) : quiet('None'));
    if (r.study) studyCell.title = r.study;

    const due = cell('bcn-pdv__date');
    due.append(r.due ? document.createTextNode(day(r.due)) : quiet('Not Scheduled'));

    // Done needs no health: Status already says Complete.
    const health = cell();
    if (r.status === 'Completed' && !r.health.override) health.append(quiet('None'));
    else {
      const hb = badge(healthText(r.health), r.health.stale ? 'warning' : (HEALTH_VARIANT[r.health.health] ?? 'neutral'), 'sm');
      hb.title = r.health.override ? `Set by ${r.health.override.by}: ${r.health.why}` : datesIn(r.health.why);
      health.append(hb);
    }

    const status = cell();
    status.append(badge(r.status, STATUS_VARIANT[r.status] ?? 'neutral', 'sm'));

    const sent = cell();
    const t = r.sent ?? r.draftOnly;
    if (t) {
      const wrap = document.createElement('span');
      wrap.className = 'bcn-pdv__sent';
      wrap.innerHTML = `<a class="bcn-pdv__num" href="${esc(TRANSMITTAL_HREF(opts.planID, t.id))}">${esc(transmittalNumber(t))}</a><span class="${r.sent ? '' : 'bcn-pdv__quiet'}">${esc(r.sent ? t.purpose : 'Not Sent')}</span>`;
      wrap.title = r.sent ? `${t.subject}, sent ${day(t.sentAt)}` : `${t.subject}, a draft`;
      sent.append(wrap);
      // The rounds it took, once it took more than one: "Round 2 of Review".
      if (r.round > 1) {
        sent.classList.add('bcn-pdv__stack');
        sent.append(Object.assign(document.createElement('small'), { className: 'bcn-pdv__round', textContent: `Round ${r.round} of Review` }));
      }
    } else sent.append(quiet('None'));

    const receipt = cell();
    receipt.append(receiptBadge(r));

    const completion = cell();
    if (r.completion) {
      const wrap = document.createElement('span');
      wrap.className = 'bcn-pdv__result';
      const date = document.createElement('small');
      date.className = 'bcn-pdv__date';
      date.textContent = day(r.completion.completedOn);
      wrap.append(document.createTextNode(r.completion.result), date);
      wrap.title = r.completion.acceptedBy ? `Accepted by ${r.completion.acceptedBy}` : '';
      completion.append(wrap);
    } else if (r.back) {
      // Sent back: open, and why, in the warning tone.
      const wrap = document.createElement('span');
      wrap.className = 'bcn-pdv__result';
      const why = document.createElement('small');
      why.className = 'bcn-pdv__back';
      why.textContent = r.back.response?.outcome ?? '';
      wrap.append(document.createTextNode('Open'), why);
      wrap.title = `${transmittalNumber(r.back)} came back ${r.back.response?.outcome}; not resubmitted yet`;
      completion.append(wrap);
    } else completion.append(quiet('Open'));

    tr.append(name, studyCell, due, health, status, sent, receipt, completion);
    return tr;
  }

  // ── Draw ──
  /** The facets offer what the rows hold. */
  function drawFacets(all: Row[]): void {
    const studies = new Map<string, string>();
    for (const r of all) if (r.studyId) studies.set(r.studyId, r.study);
    if (study && !studies.has(study)) study = '';
    studyFacet.options = [...studies].map(([value, label]) => ({ value, label }));
    const present = new Set(all.map((r) => r.health.health));
    healthFacet.options = HEALTH_ORDER.filter((h) => present.has(h as Health)).map((h) => ({ value: h, label: h }));
    dueFacet.options = DUE_OPTIONS;
  }

  function drawSort(): void {
    root.querySelectorAll<HTMLElement>('th[data-col]').forEach((th) => {
      if (th.dataset.col === sort.key) th.setAttribute('aria-sort', sort.dir === 1 ? 'ascending' : 'descending');
      else th.removeAttribute('aria-sort');
    });
  }

  function draw(): void {
    const all = rowsOf(opts.plan());
    const today = todayIso();
    drawFacets(all);
    shown = all.filter((r) => (!study || r.studyId === study) && (!healths.length || healths.includes(r.health.health)) && (!dueDays || (dueDays < 0 ? waitingOnAgency(r) : dueWithin(r, today, dueDays))) && matches(r)).sort(compare);
    tbody.replaceChildren(...shown.map(drawRow));
    drawSort();

    const filtered = shown.length !== all.length;
    const complete = shown.filter((r) => r.status === 'Completed').length;
    const late = shown.filter((r) => r.health.health === 'Late').length;
    const atRisk = shown.filter((r) => r.health.health === 'At Risk').length;
    const head = filtered ? `${shown.length} of ${plural(all.length, 'Deliverable')}` : plural(all.length, 'Deliverable');
    count.textContent = head;
    countTip.setAttribute('text', [complete ? `${complete} Complete` : '', atRisk ? `${atRisk} At Risk` : '', late ? `${late} Late` : ''].filter(Boolean).join(', '));
    countTip.hidden = !all.length;

    none.hidden = all.length > 0;
    noMatch.hidden = !all.length || shown.length > 0;
    if (!noMatch.hidden) {
      // The overdue list empty is good news, said as such.
      const onlyThat = dueDays === 30 && !term && !study && !healths.length;
      noMatch.querySelector('.esa-empty-state__title')!.textContent = onlyThat ? 'Nothing Late or Due in 30 Days' : 'No Deliverables Match';
      noMatch.querySelector('.esa-empty-state__description')!.textContent = onlyThat ? 'Clear the Due filter to see every deliverable.' : 'Clear the filters to see them all.';
      const label = noMatch.querySelector('[data-pdv-clear] .esa-button__label');
      if (label) label.textContent = onlyThat ? 'Show All' : 'Clear Filters';
    }
    tableWrap.hidden = !shown.length;
  }

  // ── Controls ──
  const ready = Promise.all(['esa-filter-dropdown', 'esa-text-field'].map((n) => customElements.whenDefined(n)));
  search.addEventListener('input', () => {
    term = (search.value ?? '').trim();
    draw();
  });
  const picked = (e: Event) => (e as CustomEvent<{ value?: string | string[] }>).detail?.value;
  studyFacet.addEventListener('selection-change', (e) => {
    study = String(picked(e) ?? '');
    draw();
  });
  healthFacet.addEventListener('selection-change', (e) => {
    const v = picked(e);
    healths = Array.isArray(v) ? v : v ? [v] : [];
    draw();
  });
  dueFacet.addEventListener('selection-change', (e) => {
    dueDays = Number(picked(e) ?? 0) || 0;
    draw();
  });
  q('[data-pdv-clear]').addEventListener('click', () => {
    term = '';
    study = '';
    healths = [];
    dueDays = 0;
    search.value = '';
    for (const f of [studyFacet, healthFacet, dueFacet]) f._selected = [];
    draw();
  });
  root.querySelectorAll<HTMLButtonElement>('[data-pdv-sort]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.pdvSort as SortKey;
      sort = sort.key === key ? { key, dir: sort.dir === 1 ? -1 : 1 } : { key, dir: 1 };
      draw();
    });
  });

  // ── Export: the rows shown, as the table reads them ──
  q('[data-pdv-export]').addEventListener('click', () => {
    const csvCell = (v: string) => (/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);
    const header = ['Deliverable', 'Study', 'Due', 'Health', 'Health Note', 'Status', 'Last Transmittal', 'Purpose', 'Sent', 'Round', 'Response', 'Receipt', 'Completion', 'Completed On', 'Accepted By'];
    const lines = shown.map((r) => [
      r.name,
      r.study,
      r.due ?? '',
      healthText(r.health),
      r.health.override ? r.health.why : '',
      r.status,
      r.sent ? transmittalNumber(r.sent) : '',
      r.sent?.purpose ?? '',
      r.sent?.sentAt?.slice(0, 10) ?? '',
      r.sent ? String(r.round) : '',
      r.sent?.response?.outcome ?? '',
      r.receipt ? `${r.receipt.confirmed} of ${r.receipt.of}` : '',
      r.completion?.result ?? 'Open',
      r.completion?.completedOn ?? '',
      r.completion?.acceptedBy ?? '',
    ]);
    const csv = [header, ...lines].map((l) => l.map(csvCell).join(',')).join('\r\n');
    const blob = new Blob([`﻿${csv}`], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${(opts.plan().PlanName ?? 'Plan').replace(/[\\/:*?"<>|]/g, '')} Deliverables ${todayIso()}.csv`;
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  // Records saved anywhere (an element page, another tab) redraw the view.
  let queued = false;
  const soonDraw = () => {
    if (queued) return;
    queued = true;
    queueMicrotask(() => {
      queued = false;
      if (root.isConnected) draw();
    });
  };
  window.addEventListener('bcn-plan-records', soonDraw);
  window.addEventListener('storage', soonDraw);

  return {
    draw() {
      void ready.then(draw);
    },
  };
}
