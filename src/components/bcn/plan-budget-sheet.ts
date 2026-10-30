// <BcnPlanBudgetSheet>'s runtime: the plan's budget by fiscal year in AG Grid (2026-10-28). Rows are the plan's
// elements in outline order (a parent sums its children), columns the fiscal years the plan spans, then a Total; a
// pinned row totals the plan. The page hands it the plan, the budget to show and the one to compare with (Live's,
// in a draft), whether it edits, and the search; it hands back each changed cell.
//
// It behaves like a spreadsheet (Andy, 2026-10-28: "as Excel and Google Sheets like as possible"): a 2px cell cursor,
// the cursor's column header and row name lit, a name box and value bar above, type to replace, Enter or F2 to edit,
// Enter again commits and moves down, Tab across, Escape cancels, Delete clears, copy and paste (a block from Excel
// pastes across the cells it covers), and "250k" or "$1.2m" read as money. A committed change flashes its cell, the
// parents it rolls up into and the plan's total. The spreadsheet itself is ./plan-sheet.ts (2026-10-30), shared with
// the Schedule Table; this file is the budget's columns and rules.

import type { CellClassParams, Column, ColDef, IHeaderComp, IHeaderParams, ValueFormatterParams } from 'ag-grid-community';
import { createSheet, nameRenderer, SHEET_HEAD_PX, SHEET_ROW_PX, tierClass, type SheetAt } from './plan-sheet';
import { todayIso } from '../../lib/planning/plan-records';
import { fiscalYearLabel, fiscalYearOf, fiscalYearSpan, flattenPlan, type PlanBudget } from '../../lib/planning/plan-repo';
import type { PlanDetailDto, PlanElementDto } from '../../lib/planning/model';

interface SheetRow {
  id: string;
  name: string;
  depth: number;
  /** A task carries money; a parent sums its tasks; a milestone carries none. */
  kind: 'parent' | 'task' | 'milestone';
  startFy: number | null;
  endFy: number | null;
  /** How many tasks a parent sums. */
  leaves: number;
  /** Amounts by fiscal year, as `fy2026`. */
  [fy: `fy${number}`]: number;
  total: number;
  /** Fiscal years a cell differs from the comparison in, and what the comparison held. */
  changed: Map<number, number>;
}

export interface BudgetChange {
  id: string;
  fy: number;
  value: number;
}

export interface PlanBudgetSheet {
  set(data: { plan: PlanDetailDto; budget: PlanBudget; base: PlanBudget | null; editable: boolean; query: string; heading: string }): void;
  /** Scroll to an element's row and mark it, as the drawer's Open in Budget View does. */
  focus(id: string): void;
  /** The sheet as a CSV file, as prod's grids' Download as CSV (2026-10-29, the traps audit: the PM had no way to take
   *  the budget out). The rows and years shown, figures unformatted, the Plan Total last. */
  download(fileName: string): void;
}

const dollars = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const ROW_PX = SHEET_ROW_PX;
const HEAD_PX = SHEET_HEAD_PX;

/**
 * Money as people type it: "250000", "250,000", "$250,000", "250k", "1.2m", "1.5 M". Blank, "-" or "—" is nothing.
 * Anything else (a word, a negative) is not money: null, and the cell keeps what it had.
 */
export function parseMoney(input: unknown): number | null {
  if (typeof input === 'number') return Number.isFinite(input) && input >= 0 ? Math.round(input) : null;
  const text = String(input ?? '').trim().toLowerCase().replace(/[$,\s]/g, '');
  if (!text || text === '-' || text === '—' || text === '–') return 0;
  const match = /^(\d*\.?\d+)([kmb]?)$/.exec(text);
  if (!match) return null;
  const scale = { '': 1, k: 1e3, m: 1e6, b: 1e9 }[match[2] as '' | 'k' | 'm' | 'b'];
  return Math.round(Number(match[1]) * scale);
}

/** A fiscal year's header: its label over its months (every year, 2026-10-28: the current one had "Current Year" in
 *  their place), the current year in the brand ink. A column too narrow for the months drops them (a container query
 *  in BcnPlanBudgetSheet's CSS); the tooltip keeps them. */
class YearHeader implements IHeaderComp {
  private gui!: HTMLElement;
  init(params: IHeaderParams & { fy: number }): void {
    const current = fiscalYearOf(todayIso()) === params.fy;
    this.gui = document.createElement('div');
    this.gui.className = 'bcn-pbs__head';
    if (current) this.gui.dataset.current = '';
    const label = Object.assign(document.createElement('span'), { className: 'bcn-pbs__head-fy', textContent: params.displayName });
    const months = Object.assign(document.createElement('span'), { className: 'bcn-pbs__head-span', textContent: `Jul ${params.fy}–Jun ${params.fy + 1}` });
    this.gui.append(label, months);
    // Sorts as the grid's own headers do (design QA, 2026-10-29: sorting on in both data grids): a click steps
    // ascending, descending, off; the arrow sits before the label, as AG Grid's right-aligned headers put it.
    if (params.enableSorting) {
      const arrow = Object.assign(document.createElement('span'), { className: 'bcn-pbs__head-sort', ariaHidden: 'true' });
      label.prepend(arrow);
      const show = () => {
        const dir = params.column.getSort();
        arrow.textContent = dir === 'asc' ? '↑' : dir === 'desc' ? '↓' : '';
      };
      this.gui.addEventListener('click', (e) => params.progressSort(e.shiftKey));
      params.column.addEventListener('sortChanged', show);
      show();
    }
  }
  getGui(): HTMLElement {
    return this.gui;
  }
  refresh(): boolean {
    return false;
  }
}

export function setupPlanBudgetSheet(
  root: HTMLElement,
  opts: { onEdit: (changes: BudgetChange[]) => void; onOpen: (id: string) => void }
): PlanBudgetSheet {
  const host = root.querySelector<HTMLElement>('[data-pbs-grid]')!;
  let editable = false;
  let query = '';
  let keep: ReadonlySet<string> = new Set();
  let years: number[] = [];
  let parentOf = new Map<string, string | null>();

  const fyKey = (fy: number) => `fy${fy}` as const;
  const fyOfCol = (colId: string) => (colId.startsWith('fy') ? Number(colId.slice(2)) : null);
  /** A year inside a task's dates. */
  const inDates = (row: SheetRow, fy: number) => row.startFy !== null && fy >= row.startFy && fy <= (row.endFy ?? row.startFy);
  // What a draft can type into (2026-10-28, Andy: "make it clear what I can and can't edit"): a task's years inside
  // its dates. Sums never; a year outside the dates only to clear money already sitting there.
  const canEdit = (row: SheetRow | undefined, colId: string) => {
    const fy = fyOfCol(colId);
    return editable && !!row && row.id !== 'total' && row.kind === 'task' && fy !== null && (inDates(row, fy) || !!row[fyKey(fy)]);
  };
  const yearsOf = (row: SheetRow) => (row.startFy === null ? 'it has no dates' : row.endFy !== null && row.endFy !== row.startFy ? `${fiscalYearLabel(row.startFy)} to ${fiscalYearLabel(row.endFy)}` : fiscalYearLabel(row.startFy));
  /** Why the cursor's cell won't take a figure, in a draft. */
  function whyNot(row: SheetRow, colId: string): string {
    if (!editable) return '';
    const fy = fyOfCol(colId);
    if (row.id === 'total' || colId === 'total' || row.kind === 'parent') return `A sum. Edit the tasks under it.`;
    if (fy !== null && !inDates(row, fy)) return `Outside its dates (${yearsOf(row)}). Change its dates to budget this year.`;
    return '';
  }

  const nameColumn = (heading: string): ColDef<SheetRow> => ({
    headerName: heading,
    field: 'name',
    colId: 'name',
    pinned: 'left',
    // Narrow enough that the years fit beside it at a laptop's width (2026-10-28, the review: at 340px the fifth year
    // showed "$1" before the total); a long name ends in an ellipsis, whole in its tooltip.
    width: 240,
    tooltipField: 'name',
    cellClass: (p: CellClassParams<SheetRow>) => (p.data?.kind === 'parent' ? 'bcn-sheet__parent' : ''),
    // The search's hits in yellow, as the Gantt marks them (2026-10-28, Andy: "we also lost the yellow hit
    // highlighting").
    cellRenderer: nameRenderer<SheetRow>({ depth: (r) => r.depth, query: () => query, link: true }),
    onCellClicked: (e) => {
      // The name opens the element, as the Gantt's does; the cell around it just takes the cursor.
      if (e.data && !e.node.isRowPinned() && (e.event?.target as HTMLElement | null)?.closest('.bcn-sheet__name')) opts.onOpen(e.data.id);
    },
  });
  // Nothing in a cell reads as a quiet en dash (a milestone's stay empty: it carries no money).
  const money = (p: ValueFormatterParams<SheetRow>) => (p.value ? dollars.format(p.value) : p.data?.kind === 'milestone' ? '' : '–');
  const yearColumn = (fy: number): ColDef<SheetRow> => ({
    headerName: fiscalYearLabel(fy),
    headerTooltip: fiscalYearSpan(fy),
    headerComponent: YearHeader,
    headerComponentParams: { fy },
    field: fyKey(fy) as never,
    colId: fyKey(fy),
    // The years share the room between the name and the total, never under a figure's width ("$1,862,000" in 13px
    // mono): at 1440 every year shows; narrower, the sheet scrolls sideways.
    flex: 1,
    minWidth: 100,
    type: 'numericColumn',
    valueFormatter: money,
    editable: (p) => canEdit(p.data, fyKey(fy)) && !p.node.isRowPinned(),
    // Text, not a number field, so "$250,000" and "250k" can be typed; the parser reads them.
    cellEditor: 'agTextCellEditor',
    valueParser: (p) => parseMoney(p.newValue) ?? p.oldValue,
    cellClass: (p: CellClassParams<SheetRow>) => {
      const row = p.data;
      // A cellClass replaces the numericColumn type's own, so the right alignment is restated (design QA: the
      // figures sat at the cell's left under a right-aligned header).
      const classes = ['ag-right-aligned-cell', 'bcn-pbs__money'];
      if (!p.value) classes.push('bcn-pbs__zero');
      if (!row || p.node.isRowPinned()) return classes.join(' ');
      // The schedule shows through on the rows that carry money: a parent's own dates are its planned window, not
      // where its tasks' money falls.
      const off = row.kind === 'task' && !inDates(row, fy);
      if (off) classes.push('bcn-pbs__off');
      if (off && row[fyKey(fy)]) classes.push('bcn-pbs__stray');
      if (row.changed.has(fy)) classes.push('bcn-pbs__changed');
      if (canEdit(row, fyKey(fy))) classes.push('bcn-pbs__editable', 'bcn-sheet__edit');
      if (row.kind === 'parent') classes.push('bcn-sheet__parent', 'bcn-sheet__sum');
      return classes.join(' ');
    },
  });
  const totalColumn: ColDef<SheetRow> = {
    headerName: 'Total',
    field: 'total',
    colId: 'total',
    pinned: 'right',
    width: 124,
    type: 'numericColumn',
    valueFormatter: money,
    cellClass: 'ag-right-aligned-cell bcn-pbs__money bcn-sheet__parent bcn-sheet__sum bcn-pbs__total',
  };

  /** Hands changes to the page, and remembers what to flash when it redraws: the cell, the parents it rolls up into
   *  and the plan's total. */
  function commit(changes: BudgetChange[]): void {
    if (!changes.length) return;
    const ids = new Set<string>();
    const cols = new Set<string>(['total']);
    for (const c of changes) {
      for (let at: string | null | undefined = c.id; at; at = parentOf.get(at)) ids.add(at);
      cols.add(fyKey(c.fy));
    }
    sheet.flashNext(ids, cols);
    opts.onEdit(changes);
  }

  let ready = false;
  const sheet = createSheet<SheetRow>(
    {
      root,
      canEdit: (row, colId) => canEdit(row, colId),
      whyNot,
      where: (at) => {
        const fy = fyOfCol(at.colId);
        return { col: at.colId === 'total' ? 'Total' : fy !== null ? fiscalYearLabel(fy) : '', name: at.row.name };
      },
      describe: (at: SheetAt<SheetRow>) => {
        const row = at.row;
        const fy = fyOfCol(at.colId);
        if (at.colId === 'name') return { value: row.name, notes: [] };
        const amount = at.colId === 'total' ? row.total : fy !== null ? row[fyKey(fy)] : 0;
        const notes: string[] = [];
        if (row.id === 'total') notes.push('Sum of the Plan');
        else if (row.kind === 'parent' || at.colId === 'total') notes.push(row.kind === 'parent' ? `Sum of ${row.leaves} ${row.leaves === 1 ? 'Task' : 'Tasks'}` : 'Sum of Its Years');
        if (fy !== null && row.changed.has(fy)) notes.push(`Live ${dollars.format(row.changed.get(fy)!)}`);
        if (fy !== null && row.kind === 'task' && !inDates(row, fy)) notes.push(`Outside its dates (${yearsOf(row)})`);
        if (editable && !canEdit(row, at.colId)) notes.push('Read-Only');
        return { value: row.kind === 'milestone' ? '' : dollars.format(amount ?? 0), notes };
      },
      clear: (at) => {
        if (at.row[at.colId as `fy${number}`]) commit([{ id: at.row.id, fy: fyOfCol(at.colId)!, value: 0 }]);
      },
      onKey: (e, at) => {
        // Enter on a name opens the element.
        if (e.key === 'Enter' && at.colId === 'name') {
          opts.onOpen(at.row.id);
          return true;
        }
        return false;
      },
      copy: (at) => (at.colId === 'name' ? at.row.name : String(at.row[at.colId as `fy${number}`] ?? '')),
      // Paste: figures across the cells the block covers; cells that don't edit, and text that isn't money, skipped.
      paste: (cells) => {
        if (!editable) return;
        const changes: BudgetChange[] = [];
        for (const { row, colId, raw } of cells) {
          const value = parseMoney(raw);
          if (value === null || !canEdit(row, colId)) continue;
          if (row[colId as `fy${number}`] !== value) changes.push({ id: row.id, fy: fyOfCol(colId)!, value });
        }
        commit(changes);
      },
    },
    {
      columnDefs: [nameColumn('Item')],
      rowData: [],
      getRowId: (p) => p.data.id,
      getRowClass: (p) => (p.data && !p.node.isRowPinned() ? tierClass(p.data.depth, p.data.kind === 'parent') : undefined),
      isExternalFilterPresent: () => !!query,
      doesExternalFilterPass: (node) => !!node.data && keep.has(node.data.id),
      onCellValueChanged: (e) => {
        const fy = fyOfCol(String(e.colDef.colId ?? e.colDef.field ?? ''));
        if (fy === null || !e.data) return;
        const value = parseMoney(e.newValue);
        if (value === null) return;
        commit([{ id: e.data.id, fy, value }]);
      },
      onModelUpdated: () => fit(),
      onGridSizeChanged: () => fit(),
    }
  );
  const api = sheet.api;
  ready = true;

  /** The grid's height: its rows, up to the page's cap (the consumer's --bcn-pbs-max-height), where it scrolls with
   *  the header and the plan's total pinned. When the years run wider than the panel it also stops at the window's
   *  bottom (2026-10-28, the review: the sideways scrollbar sat under the 25th row, off-screen), so the scrollbar that
   *  reaches the later years is always in view. */
  function fit(): void {
    if (!ready) return;
    const rows = api.getDisplayedRowCount() + 1;
    const wide = api.getAllDisplayedColumns().reduce((sum, c: Column) => sum + c.getActualWidth(), 0) > host.clientWidth + 1;
    const px = HEAD_PX + rows * ROW_PX + (wide ? 16 : 0) + 2;
    const room = Math.max(320, Math.floor(window.innerHeight - host.getBoundingClientRect().top - 24));
    host.style.blockSize = wide ? `min(${px}px, ${room}px)` : `min(${px}px, var(--bcn-pbs-max-height, ${px}px))`;
  }

  function rowsOf(plan: PlanDetailDto, budget: PlanBudget, base: PlanBudget | null): { rows: SheetRow[]; years: number[] } {
    const flat: { element: PlanElementDto; depth: number }[] = [];
    const walk = (elements: readonly PlanElementDto[] | null | undefined, depth: number) => {
      for (const element of elements ?? []) {
        flat.push({ element, depth });
        walk(element.Children, depth + 1);
      }
    };
    walk(plan.Elements, 0);
    // The plan's fiscal years: every element's span, and any year money sits in.
    const span = new Set<number>();
    for (const { element } of flat) {
      if (element.StartDate) span.add(fiscalYearOf(element.StartDate));
      if (element.EndDate) span.add(fiscalYearOf(element.EndDate));
    }
    for (const row of Object.values(budget)) for (const fy of Object.keys(row)) span.add(Number(fy));
    const fys = span.size ? Array.from({ length: Math.max(...span) - Math.min(...span) + 1 }, (_, i) => Math.min(...span) + i) : [];
    const rows: SheetRow[] = flat.map(({ element, depth }) => {
      const leaves = flattenPlan([element]).map((x) => x.element).filter((e) => !e.Children?.length);
      const kind: SheetRow['kind'] = element.Children?.length ? 'parent' : element.IsMilestone ? 'milestone' : 'task';
      const row = {
        id: element.PlanElementID ?? '',
        name: element.PlanElementName ?? '',
        depth,
        kind,
        startFy: element.StartDate ? fiscalYearOf(element.StartDate) : null,
        endFy: element.EndDate ? fiscalYearOf(element.EndDate) : null,
        leaves: leaves.filter((e) => !e.IsMilestone).length,
        total: 0,
        changed: new Map<number, number>(),
      } as SheetRow;
      for (const fy of fys) {
        let sum = 0;
        let was = 0;
        for (const leaf of leaves) {
          sum += budget[leaf.PlanElementID ?? '']?.[String(fy)] ?? 0;
          was += base?.[leaf.PlanElementID ?? '']?.[String(fy)] ?? 0;
        }
        row[fyKey(fy)] = sum;
        row.total += sum;
        if (base && sum !== was) row.changed.set(fy, was);
      }
      return row;
    });
    // Milestones carry no money: the sheet leaves them out (2026-10-28, Andy).
    return { rows: rows.filter((r) => r.kind !== 'milestone'), years: fys };
  }

  return {
    download(fileName) {
      api.exportDataAsCsv({
        fileName,
        processCellCallback: (p) => (p.column.getColId() === 'name' ? `${'  '.repeat(p.node?.data?.depth ?? 0)}${p.node?.data?.name ?? ''}` : String(p.value ?? '')),
      });
    },
    set(data) {
      editable = data.editable;
      root.dataset.editable = String(editable);
      const built = rowsOf(data.plan, data.budget, data.base);
      if (built.years.join() !== years.join() || api.getColumnDefs()?.[0]?.headerName !== data.heading) {
        years = built.years;
        api.setGridOption('columnDefs', [nameColumn(data.heading), ...years.map(yearColumn), totalColumn]);
      }
      // The search, as the Gantt does it: the matches and the parents above them.
      query = data.query.trim().toLowerCase();
      parentOf = new Map();
      for (const { element } of flattenPlan(data.plan.Elements)) parentOf.set(element.PlanElementID ?? '', element.ParentPlanElementID ?? null);
      const hits = query ? built.rows.filter((r) => r.name.toLowerCase().includes(query)).map((r) => r.id) : [];
      const kept = new Set<string>();
      for (const id of hits) for (let at: string | null | undefined = id; at; at = parentOf.get(at)) kept.add(at);
      keep = kept;
      api.setGridOption('rowData', built.rows);
      const totals = { id: 'total', name: 'Plan Total', depth: 0, kind: 'parent', startFy: null, endFy: null, leaves: 0, total: 0, changed: new Map<number, number>() } as SheetRow;
      for (const fy of years) {
        totals[fyKey(fy)] = built.rows.filter((r) => r.depth === 0).reduce((sum, r) => sum + r[fyKey(fy)], 0);
        totals.total += totals[fyKey(fy)];
      }
      api.setGridOption('pinnedBottomRowData', [totals]);
      api.onFilterChanged();
      api.refreshCells({ force: true });
      fit();
      sheet.showCursor();
      const total = api.getPinnedBottomRow(0);
      sheet.flush(total ? [total] : []);
    },
    focus(id) {
      const node = api.getRowNode(id);
      if (!node || node.rowIndex === null) return;
      api.ensureNodeVisible(node, 'middle');
      // The cursor lands on the first year the element runs in.
      const start = node.data?.startFy ?? null;
      api.setFocusedCell(node.rowIndex, years.length ? fyKey(start !== null && years.includes(start) ? start : years[0]) : 'name');
      api.flashCells({ rowNodes: [node] });
    },
  };
}
