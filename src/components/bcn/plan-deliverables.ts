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
  statusOf,
  todayIso,
  transmittalNumber,
  transmittalsFor,
  type Completion,
  type ElementStatus,
  type HealthReading,
  type Transmittal,
} from '../../lib/planning/plan-records';
import { badge, HEALTH_VARIANT, STATUS_VARIANT, type BadgeVariant } from './badge-bank';
import { day, esc } from './element-module';
import { datesIn } from './health-dialog';

export interface PlanDeliverablesOptions {
  planID: string;
  /** The plan as the page shows it: Live, or a draft over it. */
  plan: () => PlanDetailDto;
  isDeliverable: (id: string) => boolean;
  elementHref: (id: string) => string;
}

type SelectEl = HTMLElement & { value: string | string[]; options: { value: string; label: string }[] };
type FieldEl = HTMLElement & { value: string };
type SwitchEl = HTMLElement & { checked: boolean };

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
}

type SortKey = 'name' | 'study' | 'due' | 'health' | 'status';
/** Worst first, when sorted by health. */
const HEALTH_ORDER = ['Late', 'Blocked', 'At Risk', 'On Track', 'Upcoming', 'Complete'];
const STATUS_ORDER: ElementStatus[] = ['Blocked', 'In Progress', 'Not Started', 'Complete'];

const endOf = (e: PlanElementDto) => e.SpanEndDate ?? e.EndDate ?? e.StartDate ?? null;
const addDays = (iso: string, days: number) => new Date(Date.parse(`${iso}T12:00:00Z`) + days * 86_400_000).toISOString().slice(0, 10);
const plural = (n: number, one: string, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;

/** Late or due within 30 days, and not complete: the memo's overdue list. */
const soon = (r: Row, today: string) => r.status !== 'Complete' && !!r.due && r.due <= addDays(today, 30);
const healthText = (h: HealthReading) => (h.stale ? `${h.health}, Update Missing` : h.health);

export function setupPlanDeliverablesView(root: HTMLElement, opts: PlanDeliverablesOptions): { draw(): void } {
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const search = q<FieldEl>('[data-pdv-search]');
  const studySelect = q<SelectEl>('[data-pdv-study]');
  const soonToggle = q<SwitchEl>('[data-pdv-soon]');
  const tbody = q('[data-pdv-rows]');
  const count = q('[data-pdv-count]');
  const tableWrap = q('[data-pdv-table-wrap]');
  const noMatch = q('[data-pdv-no-match]');
  const none = q('[data-pdv-none]');

  let term = '';
  let study = '';
  let onlySoon = false;
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
    else d = byDue(a, b);
    return d * sort.dir || byDue(a, b);
  }

  const matches = (r: Row) => {
    if (!term) return true;
    const hay = [r.name, r.study, r.status, r.health.health, r.completion?.result, r.sent ? transmittalNumber(r.sent) : '', r.sent?.purpose].join(' ').toLowerCase();
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
    const variant: BadgeVariant = confirmed === of ? 'success' : overdue ? 'warning' : 'neutral';
    const b = badge(confirmed === of ? 'All' : `${confirmed} of ${of}`, variant, 'sm');
    b.title = confirmed === of ? `All ${of} confirmed receipt` : `${confirmed} of ${of} confirmed receipt${overdue ? '; past the acknowledgment date' : ''}`;
    return b;
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

    const due = cell('bcn-pdv__date');
    due.append(r.due ? document.createTextNode(day(r.due)) : quiet('Not Scheduled'));

    // Done needs no health: Status already says Complete.
    const health = cell();
    if (r.status === 'Complete' && !r.health.override) health.append(quiet('Done'));
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
    } else completion.append(quiet('Open'));

    tr.append(name, studyCell, due, health, status, sent, receipt, completion);
    return tr;
  }

  // ── Draw ──
  function drawStudies(all: Row[]): void {
    const studies = new Map<string, string>();
    for (const r of all) if (r.studyId) studies.set(r.studyId, r.study);
    if (study && !studies.has(study)) study = '';
    studySelect.options = [{ value: '', label: 'All Studies' }, ...[...studies].map(([value, label]) => ({ value, label }))];
    studySelect.value = study;
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
    drawStudies(all);
    shown = all.filter((r) => (!study || r.studyId === study) && (!onlySoon || soon(r, today)) && matches(r)).sort(compare);
    tbody.replaceChildren(...shown.map(drawRow));
    drawSort();

    const filtered = shown.length !== all.length;
    const complete = shown.filter((r) => r.status === 'Complete').length;
    const late = shown.filter((r) => r.health.health === 'Late').length;
    const atRisk = shown.filter((r) => r.health.health === 'At Risk').length;
    const head = filtered ? `${shown.length} of ${plural(all.length, 'Deliverable')}` : plural(all.length, 'Deliverable');
    count.textContent = [head, complete ? `${complete} Complete` : '', atRisk ? `${atRisk} At Risk` : '', late ? `${late} Late` : ''].filter(Boolean).join(', ');
    count.hidden = !all.length;

    none.hidden = all.length > 0;
    noMatch.hidden = !all.length || shown.length > 0;
    if (!noMatch.hidden) {
      // The overdue list empty is good news, said as such.
      const onlyThat = onlySoon && !term && !study;
      noMatch.querySelector('.esa-empty-state__title')!.textContent = onlyThat ? 'Nothing Late or Due in 30 Days' : 'No Deliverables Match';
      noMatch.querySelector('.esa-empty-state__description')!.textContent = onlyThat ? 'Turn the filter off to see every deliverable.' : 'Clear the filters to see them all.';
      const label = noMatch.querySelector('[data-pdv-clear] .esa-button__label');
      if (label) label.textContent = onlyThat ? 'Show All' : 'Clear Filters';
    }
    tableWrap.hidden = !shown.length;
  }

  // ── Controls ──
  const ready = Promise.all(['esa-select', 'esa-text-field', 'esa-switch-toggle'].map((n) => customElements.whenDefined(n)));
  search.addEventListener('input', () => {
    term = (search.value ?? '').trim();
    draw();
  });
  studySelect.addEventListener('change', () => {
    const v = studySelect.value;
    study = String(Array.isArray(v) ? (v[0] ?? '') : (v ?? ''));
    draw();
  });
  soonToggle.addEventListener('change', () => {
    onlySoon = !!soonToggle.checked;
    draw();
  });
  q('[data-pdv-clear]').addEventListener('click', () => {
    term = '';
    study = '';
    onlySoon = false;
    search.value = '';
    soonToggle.checked = false;
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
    const header = ['Deliverable', 'Study', 'Due', 'Health', 'Health Note', 'Status', 'Last Transmittal', 'Purpose', 'Sent', 'Receipt', 'Completion', 'Completed On', 'Accepted By'];
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
