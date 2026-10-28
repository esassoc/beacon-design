// <BcnPlanBudgetSheet>'s runtime: the plan's budget by fiscal year in AG Grid (2026-10-28). Rows are the plan's
// elements in outline order (a parent sums its children), columns the fiscal years the plan spans, then a Total; a
// pinned row totals the plan. The page hands it the plan, the budget to show and the one to compare with (Live's,
// in a draft), whether it edits, and the search; it hands back each changed cell.
//
// It behaves like a spreadsheet (Andy, 2026-10-28: "as Excel and Google Sheets like as possible"): a 2px cell cursor,
// the cursor's column header and row name lit, a name box and value bar above, type to replace, Enter or F2 to edit,
// Enter again commits and moves down, Tab across, Escape cancels, Delete clears, copy and paste (a block from Excel
// pastes across the cells it covers), and "250k" or "$1.2m" read as money. A committed change flashes its cell, the
// parents it rolls up into and the plan's total.

import { createGrid, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import type { CellClassParams, CellPosition, Column, ColDef, GridApi, ICellRendererParams, IHeaderComp, IHeaderParams, IRowNode, ValueFormatterParams } from 'ag-grid-community';
import { settingsEsaTheme } from '../../lib/beacon-grid';
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
}

let registered = false;
const dollars = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const ROW_PX = 32;
const HEAD_PX = 48;

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
    const current = fiscalYearOf(new Date().toISOString().slice(0, 10)) === params.fy;
    this.gui = document.createElement('div');
    this.gui.className = 'bcn-pbs__head';
    if (current) this.gui.dataset.current = '';
    const label = Object.assign(document.createElement('span'), { className: 'bcn-pbs__head-fy', textContent: params.displayName });
    const months = Object.assign(document.createElement('span'), { className: 'bcn-pbs__head-span', textContent: `Jul ${params.fy}–Jun ${params.fy + 1}` });
    this.gui.append(label, months);
  }
  getGui(): HTMLElement {
    return this.gui;
  }
  refresh(): boolean {
    return false;
  }
}

// The sheet's grid: the card's light-header theme, made a spreadsheet. Flush with its panel (no wrapper border or
// corners: the panel is the frame), no zebra (cell states are the only fills, and the parents carry the Gantt's tier
// shading), a hairline between columns as well as rows, denser rows, and a two-line header. Literal hex, as
// beacon-grid's are: AG Grid reads its params at config time.
const sheetTheme = settingsEsaTheme.withParams({
  wrapperBorder: false,
  wrapperBorderRadius: 0,
  rowHeight: ROW_PX,
  headerHeight: HEAD_PX,
  oddRowBackgroundColor: '#ffffff', // no zebra
  rowHoverColor: '#fafafa', // gray-50
  columnBorder: { color: '#efefef' }, // gray-100
  rowBorder: { color: '#efefef' }, // gray-100
  headerColumnBorder: { color: '#efefef' }, // gray-100
  headerRowBorder: { color: '#bdbdbd' }, // gray-300: the header's rule, a step firmer than the cells'
  rangeSelectionBorderColor: '#005862', // teal-900 / --color-background-brand
  valueChangeValueHighlightBackgroundColor: 'rgba(0, 88, 98, 0.18)', // teal-900 at 18%
  cellHorizontalPadding: 10,
});

export function setupPlanBudgetSheet(
  root: HTMLElement,
  opts: { onEdit: (changes: BudgetChange[]) => void; onOpen: (id: string) => void }
): PlanBudgetSheet {
  if (!registered) {
    ModuleRegistry.registerModules([AllCommunityModule]);
    registered = true;
  }
  const host = root.querySelector<HTMLElement>('[data-pbs-grid]')!;
  const refEl = root.querySelector<HTMLElement>('[data-pbs-ref]')!;
  const valueEl = root.querySelector<HTMLElement>('[data-pbs-value]')!;
  // The cursor's header and row-name highlight, rewritten as it moves (made here: Astro would hoist a <style> in markup).
  const focusStyle = root.appendChild(document.createElement('style'));
  let editable = false;
  let query = '';
  let keep: ReadonlySet<string> = new Set();
  let years: number[] = [];
  let parentOf = new Map<string, string | null>();
  /** The cells a commit touched, flashed once the page has redrawn with it. */
  let flash: { ids: Set<string>; cols: Set<string> } | null = null;

  const fyKey = (fy: number) => `fy${fy}` as const;
  const fyOfCol = (colId: string) => (colId.startsWith('fy') ? Number(colId.slice(2)) : null);
  /** A year inside a task's dates. */
  const inDates = (row: SheetRow, fy: number) => row.startFy !== null && fy >= row.startFy && fy <= (row.endFy ?? row.startFy);
  // What a draft can type into (2026-10-28, Andy: "make it clear what I can and can't edit"): a task's years inside
  // its dates. Sums never; a year outside the dates only to clear money already sitting there.
  const canEdit = (row: SheetRow | undefined, colId: string) => {
    const fy = fyOfCol(colId);
    return editable && !!row && row.kind === 'task' && fy !== null && (inDates(row, fy) || !!row[fyKey(fy)]);
  };
  const yearsOf = (row: SheetRow) => (row.startFy === null ? 'it has no dates' : row.endFy !== null && row.endFy !== row.startFy ? `${fiscalYearLabel(row.startFy)} to ${fiscalYearLabel(row.endFy)}` : fiscalYearLabel(row.startFy));
  /** Why the cursor's cell won't take a figure, in a draft. */
  function whyNot(row: SheetRow, colId: string): string {
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
    cellClass: (p: CellClassParams<SheetRow>) => (p.data?.kind === 'parent' ? 'bcn-pbs__parent' : ''),
    cellRenderer: (p: ICellRendererParams<SheetRow>) => {
      const span = document.createElement('span');
      span.className = 'bcn-pbs__name';
      span.style.paddingInlineStart = `${(p.data?.depth ?? 0) * 16}px`;
      // The search's hits in yellow, as the Gantt marks them (2026-10-28, Andy: "we also lost the yellow hit
      // highlighting"; the sheet narrowed to the matches without marking them).
      const label: string = p.value ?? '';
      const at = query && !p.node.isRowPinned() ? label.toLowerCase().indexOf(query) : -1;
      if (at < 0) span.textContent = label;
      else {
        const mark = Object.assign(document.createElement('mark'), { className: 'bcn-pbs__match', textContent: label.slice(at, at + query.length) });
        span.append(label.slice(0, at), mark, label.slice(at + query.length));
      }
      return span;
    },
    onCellClicked: (e) => {
      // The name opens the element, as the Gantt's does; the cell around it just takes the cursor.
      if (e.data && !e.node.isRowPinned() && (e.event?.target as HTMLElement | null)?.closest('.bcn-pbs__name')) opts.onOpen(e.data.id);
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
      const classes = ['bcn-pbs__money'];
      if (!p.value) classes.push('bcn-pbs__zero');
      if (!row || p.node.isRowPinned()) return classes.join(' ');
      // The schedule shows through on the rows that carry money: a parent's own dates are its planned window, not
      // where its tasks' money falls.
      const off = row.kind === 'task' && !inDates(row, fy);
      if (off) classes.push('bcn-pbs__off');
      if (off && row[fyKey(fy)]) classes.push('bcn-pbs__stray');
      if (row.changed.has(fy)) classes.push('bcn-pbs__changed');
      if (canEdit(row, fyKey(fy))) classes.push('bcn-pbs__editable');
      if (row.kind === 'parent') classes.push('bcn-pbs__parent', 'bcn-pbs__sum');
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
    cellClass: 'bcn-pbs__money bcn-pbs__parent bcn-pbs__sum bcn-pbs__total',
  };

  const api: GridApi<SheetRow> = createGrid(host, {
    theme: sheetTheme,
    columnDefs: [nameColumn('Item')],
    rowData: [],
    getRowId: (p) => p.data.id,
    getRowClass: (p) => (p.data?.kind === 'parent' && !p.node.isRowPinned() ? `bcn-pbs__tier-${Math.min(p.data.depth, 2)}` : undefined),
    singleClickEdit: false,
    stopEditingWhenCellsLoseFocus: true,
    // Sheets and Excel: Enter commits and moves down a row.
    enterNavigatesVerticallyAfterEdit: true,
    defaultColDef: {
      sortable: false,
      resizable: true,
      suppressMovable: true,
      // Delete and Backspace clear the cell outright (below), rather than opening an empty editor.
      suppressKeyboardEvent: (p) => !p.editing && (p.event.key === 'Delete' || p.event.key === 'Backspace'),
    },
    tooltipShowDelay: 300,
    isExternalFilterPresent: () => !!query,
    doesExternalFilterPass: (node) => !!node.data && keep.has(node.data.id),
    onCellValueChanged: (e) => {
      const fy = fyOfCol(String(e.colDef.colId ?? e.colDef.field ?? ''));
      if (fy === null || !e.data) return;
      const value = parseMoney(e.newValue);
      if (value === null) return;
      commit([{ id: e.data.id, fy, value }]);
    },
    onCellFocused: () => showCursor(),
    onModelUpdated: () => fit(),
    onGridSizeChanged: () => fit(),
  });

  /** Hands changes to the page, and remembers what to flash when it redraws. */
  function commit(changes: BudgetChange[]): void {
    if (!changes.length) return;
    const ids = new Set<string>();
    const cols = new Set<string>(['total']);
    for (const c of changes) {
      for (let at: string | null | undefined = c.id; at; at = parentOf.get(at)) ids.add(at);
      cols.add(fyKey(c.fy));
    }
    flash = { ids, cols };
    opts.onEdit(changes);
  }

  /** The focused cell as its row and column, the pinned total included. */
  function cursor(): { cell: CellPosition; node: IRowNode<SheetRow> | undefined; colId: string } | null {
    const cell = api.getFocusedCell();
    if (!cell) return null;
    const node = cell.rowPinned === 'bottom' ? api.getPinnedBottomRow(cell.rowIndex) : cell.rowPinned ? undefined : api.getDisplayedRowAtIndex(cell.rowIndex);
    return { cell, node, colId: cell.column.getColId() };
  }

  /** The name box, the value bar, and the cursor's column header and row name lit, as Sheets lights its A and 1. */
  function showCursor(): void {
    const at = cursor();
    const row = at?.node?.data;
    if (!at || !row) {
      refEl.replaceChildren(document.createTextNode('Select a Cell'));
      refEl.dataset.empty = '';
      valueEl.replaceChildren();
      focusStyle.textContent = '';
      return;
    }
    delete refEl.dataset.empty;
    const fy = fyOfCol(at.colId);
    const where = at.colId === 'total' ? 'Total' : fy !== null ? fiscalYearLabel(fy) : '';
    const ref: Node[] = [];
    if (where) ref.push(Object.assign(document.createElement('strong'), { textContent: where }));
    ref.push(Object.assign(document.createElement('span'), { textContent: row.name }));
    refEl.replaceChildren(...ref);

    const parts: Node[] = [];
    const small = (text: string) => Object.assign(document.createElement('small'), { textContent: text });
    if (at.colId === 'name') {
      parts.push(document.createTextNode(row.name));
    } else {
      const amount = at.colId === 'total' ? row.total : fy !== null ? row[fyKey(fy)] : 0;
      parts.push(document.createTextNode(row.kind === 'milestone' ? '' : dollars.format(amount ?? 0)));
      if (row.id === 'total') parts.push(small('Sum of the Plan'));
      else if (row.kind === 'parent' || at.colId === 'total') parts.push(small(row.kind === 'parent' ? `Sum of ${row.leaves} ${row.leaves === 1 ? 'Task' : 'Tasks'}` : 'Sum of Its Years'));
      if (fy !== null && row.changed.has(fy)) parts.push(small(`Live ${dollars.format(row.changed.get(fy)!)}`));
      if (fy !== null && row.kind === 'task' && !inDates(row, fy)) parts.push(small(`Outside its dates (${yearsOf(row)})`));
      if (editable && !canEdit(row, at.colId)) parts.push(small('Read-Only'));
    }
    valueEl.replaceChildren(...parts);

    const rowSel = at.node && !at.node.isRowPinned() ? `.ag-row[row-id=${JSON.stringify(at.node.id)}] .ag-cell[col-id="name"]` : '';
    focusStyle.textContent = [
      `[data-pbs-grid] .ag-header-cell[col-id=${JSON.stringify(at.colId)}] { background: var(--_pbs-lit); }`,
      `[data-pbs-grid] .ag-header-cell[col-id=${JSON.stringify(at.colId)}] :is(.ag-header-cell-text, .bcn-pbs__head-fy) { color: var(--color-content-brand); }`,
      rowSel ? `[data-pbs-grid] ${rowSel} { background: var(--_pbs-lit); }` : '',
      rowSel ? `[data-pbs-grid] ${rowSel} .bcn-pbs__name { color: var(--color-content-brand); }` : '',
    ].join('\n');
  }

  /** The grid's height: its rows, up to the page's cap (the consumer's --bcn-pbs-max-height), where it scrolls with
   *  the header and the plan's total pinned. When the years run wider than the panel it also stops at the window's
   *  bottom (2026-10-28, the review: the sideways scrollbar sat under the 25th row, off-screen), so the scrollbar that
   *  reaches the later years is always in view. */
  function fit(): void {
    const rows = api.getDisplayedRowCount() + 1;
    const wide = api.getAllDisplayedColumns().reduce((sum, c: Column) => sum + c.getActualWidth(), 0) > host.clientWidth + 1;
    const px = HEAD_PX + rows * ROW_PX + (wide ? 16 : 0) + 2;
    const room = Math.max(320, Math.floor(window.innerHeight - host.getBoundingClientRect().top - 24));
    host.style.blockSize = wide ? `min(${px}px, ${room}px)` : `min(${px}px, var(--bcn-pbs-max-height, ${px}px))`;
  }

  // The value bar follows the editor as you type, as a formula bar does.
  host.addEventListener('input', (e) => {
    const input = e.target as HTMLInputElement;
    if (input.closest('.ag-cell-inline-editing')) valueEl.replaceChildren(document.createTextNode(input.value));
  });

  // ── The keys a spreadsheet has that the grid doesn't ──
  host.addEventListener('keydown', (e) => {
    if (api.getEditingCells().length || e.metaKey || e.ctrlKey || e.altKey) return;
    const at = cursor();
    if (!at?.node?.data) return;
    // In a draft, a try at a cell that won't take a figure says why, in the value bar, instead of doing nothing.
    const attempt = e.key.length === 1 || e.key === 'Enter' || e.key === 'F2' || e.key === 'Delete' || e.key === 'Backspace';
    if (editable && attempt && at.colId !== 'name' && !canEdit(at.node.data, at.colId)) {
      const why = whyNot(at.node.data, at.colId);
      if (why) {
        e.preventDefault();
        const note = Object.assign(document.createElement('span'), { className: 'bcn-pbs__why', textContent: why });
        valueEl.replaceChildren(note);
        root.querySelector('.bcn-pbs__bar')?.animate([{ backgroundColor: 'var(--_pbs-why)' }, { backgroundColor: 'transparent' }], { duration: 900, easing: 'ease-out' });
      }
      return;
    }
    if ((e.key === 'Delete' || e.key === 'Backspace') && canEdit(at.node.data, at.colId) && !at.node.isRowPinned()) {
      e.preventDefault();
      if (at.node.data[at.colId as `fy${number}`]) commit([{ id: at.node.data.id, fy: fyOfCol(at.colId)!, value: 0 }]);
    } else if (e.key === 'Enter' && at.colId === 'name' && !at.node.isRowPinned()) {
      e.preventDefault();
      opts.onOpen(at.node.data.id);
    }
  });
  const inSheet = () => host.contains(document.activeElement) && !api.getEditingCells().length;
  document.addEventListener('copy', (e) => {
    if (!inSheet()) return;
    const at = cursor();
    const row = at?.node?.data;
    if (!at || !row) return;
    const value = at.colId === 'name' ? row.name : String(row[at.colId as `fy${number}`] ?? '');
    e.clipboardData?.setData('text/plain', value);
    e.preventDefault();
  });
  // Paste: one figure into the cursor's cell, or a block (tab-separated rows, as Excel and Sheets copy them) across
  // the cells it covers from there. Cells that don't edit, and text that isn't money, are skipped.
  document.addEventListener('paste', (e) => {
    if (!inSheet() || !editable) return;
    const at = cursor();
    if (!at || at.node?.isRowPinned()) return;
    const text = e.clipboardData?.getData('text/plain') ?? '';
    if (!text) return;
    e.preventDefault();
    const columns = api.getAllDisplayedColumns();
    const startCol = columns.findIndex((c) => c.getColId() === at.colId);
    const changes: BudgetChange[] = [];
    text.replace(/\r?\n$/, '').split(/\r?\n/).forEach((line, r) => {
      const node = api.getDisplayedRowAtIndex(at.cell.rowIndex + r);
      line.split('\t').forEach((raw, c) => {
        const colId = columns[startCol + c]?.getColId() ?? '';
        const value = parseMoney(raw);
        if (!node?.data || value === null || !canEdit(node.data, colId)) return;
        if (node.data[colId as `fy${number}`] !== value) changes.push({ id: node.data.id, fy: fyOfCol(colId)!, value });
      });
    });
    commit(changes);
  });

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
      showCursor();
      if (flash) {
        const { ids, cols } = flash;
        flash = null;
        const rowNodes = [...ids].map((id) => api.getRowNode(id)).filter((n): n is IRowNode<SheetRow> => !!n);
        const total = api.getPinnedBottomRow(0);
        if (total) rowNodes.push(total);
        api.flashCells({ rowNodes, columns: [...cols], flashDuration: 250, fadeDuration: 650 });
      }
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
