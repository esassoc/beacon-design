// <BcnPlanBudgetSheet>'s runtime: the plan's budget by fiscal year in AG Grid (2026-10-28). Rows are the plan's
// elements in outline order (a parent sums its children), columns the fiscal years the plan spans, then a Total; a
// pinned row totals the plan. The page hands it the plan, the budget to show and the one to compare with (Live's,
// in a draft), whether it edits, and the search; it hands back each changed cell.

import { createGrid, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import type { CellClassParams, ColDef, GridApi, ICellRendererParams, ValueFormatterParams } from 'ag-grid-community';
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
  /** Amounts by fiscal year, as `fy2026`. */
  [fy: `fy${number}`]: number;
  total: number;
  /** Fiscal years a cell differs from the comparison in. */
  changed: Set<number>;
}

export interface PlanBudgetSheet {
  set(data: { plan: PlanDetailDto; budget: PlanBudget; base: PlanBudget | null; editable: boolean; query: string; heading: string }): void;
  /** Scroll to an element's row and mark it, as the drawer's Open in Budget View does. */
  focus(id: string): void;
}

let registered = false;
const dollars = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export function setupPlanBudgetSheet(
  root: HTMLElement,
  opts: { onEdit: (id: string, fy: number, value: number) => void; onOpen: (id: string) => void }
): PlanBudgetSheet {
  if (!registered) {
    ModuleRegistry.registerModules([AllCommunityModule]);
    registered = true;
  }
  const host = root.querySelector<HTMLElement>('[data-pbs-grid]')!;
  let editable = false;
  let query = '';
  let keep: ReadonlySet<string> = new Set();
  let years: number[] = [];

  const fyKey = (fy: number) => `fy${fy}` as const;
  const nameColumn = (heading: string): ColDef<SheetRow> => ({
    headerName: heading,
    field: 'name',
    pinned: 'left',
    width: 340,
    cellClass: (p: CellClassParams<SheetRow>) => (p.data?.kind === 'parent' ? 'bcn-pbs__parent' : ''),
    cellRenderer: (p: ICellRendererParams<SheetRow>) => {
      const span = document.createElement('span');
      span.className = 'bcn-pbs__name';
      span.style.paddingInlineStart = `${(p.data?.depth ?? 0) * 16}px`;
      span.textContent = p.value ?? '';
      return span;
    },
    onCellClicked: (e) => e.data && e.data.kind !== undefined && !e.node.isRowPinned() && opts.onOpen(e.data.id),
  });
  const money = (p: ValueFormatterParams<SheetRow>) => (p.value ? dollars.format(p.value) : p.data?.kind === 'milestone' ? '' : '—');
  const yearColumn = (fy: number): ColDef<SheetRow> => ({
    headerName: fiscalYearLabel(fy),
    headerTooltip: fiscalYearSpan(fy),
    field: fyKey(fy) as never,
    width: 128,
    type: 'numericColumn',
    valueFormatter: money,
    editable: (p) => editable && p.data?.kind === 'task' && !p.node.isRowPinned(),
    cellEditor: 'agNumberCellEditor',
    cellEditorParams: { min: 0, precision: 0, step: 1000 },
    cellClass: (p: CellClassParams<SheetRow>) => {
      const row = p.data;
      if (!row || p.node.isRowPinned()) return '';
      const classes: string[] = [];
      // The schedule shows through on the rows that carry money: a parent's own dates are its planned window, not
      // where its tasks' money falls.
      const off = row.kind !== 'parent' && (row.startFy === null || fy < row.startFy || fy > (row.endFy ?? row.startFy));
      if (off) classes.push('bcn-pbs__off');
      if (off && row[fyKey(fy)]) classes.push('bcn-pbs__stray');
      if (row.changed.has(fy)) classes.push('bcn-pbs__changed');
      if (editable && row.kind === 'task') classes.push('bcn-pbs__editable');
      if (row.kind === 'parent') classes.push('bcn-pbs__parent');
      return classes.join(' ');
    },
  });
  const totalColumn: ColDef<SheetRow> = { headerName: 'Total', field: 'total', pinned: 'right', width: 140, type: 'numericColumn', valueFormatter: money, cellClass: 'bcn-pbs__parent' };

  const api: GridApi<SheetRow> = createGrid(host, {
    theme: settingsEsaTheme,
    domLayout: 'autoHeight',
    columnDefs: [nameColumn('Item')],
    rowData: [],
    getRowId: (p) => p.data.id,
    singleClickEdit: false,
    stopEditingWhenCellsLoseFocus: true,
    defaultColDef: { sortable: false, resizable: true, suppressMovable: true },
    tooltipShowDelay: 300,
    isExternalFilterPresent: () => !!query,
    doesExternalFilterPass: (node) => !!node.data && keep.has(node.data.id),
    onCellValueChanged: (e) => {
      const field = String(e.colDef.field ?? '');
      if (!field.startsWith('fy') || !e.data) return;
      const value = Math.max(0, Math.round(Number(e.newValue) || 0));
      opts.onEdit(e.data.id, Number(field.slice(2)), value);
    },
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
        total: 0,
        changed: new Set<number>(),
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
        if (base && sum !== was) row.changed.add(fy);
      }
      return row;
    });
    return { rows, years: fys };
  }

  return {
    set(data) {
      editable = data.editable;
      const built = rowsOf(data.plan, data.budget, data.base);
      if (built.years.join() !== years.join() || api.getColumnDefs()?.[0]?.headerName !== data.heading) {
        years = built.years;
        api.setGridOption('columnDefs', [nameColumn(data.heading), ...years.map(yearColumn), totalColumn]);
      }
      // The search, as the Gantt does it: the matches and the parents above them.
      query = data.query.trim().toLowerCase();
      const parentOf = new Map<string, string | null>();
      for (const { element } of flattenPlan(data.plan.Elements)) parentOf.set(element.PlanElementID ?? '', element.ParentPlanElementID ?? null);
      const hits = query ? built.rows.filter((r) => r.name.toLowerCase().includes(query)).map((r) => r.id) : [];
      const kept = new Set<string>();
      for (const id of hits) for (let at: string | null | undefined = id; at; at = parentOf.get(at)) kept.add(at);
      keep = kept;
      api.setGridOption('rowData', built.rows);
      const totals = { id: 'total', name: 'Plan Total', depth: 0, kind: 'parent', startFy: null, endFy: null, total: 0, changed: new Set<number>() } as SheetRow;
      for (const fy of years) {
        totals[fyKey(fy)] = built.rows.filter((r) => r.depth === 0).reduce((sum, r) => sum + r[fyKey(fy)], 0);
        totals.total += totals[fyKey(fy)];
      }
      api.setGridOption('pinnedBottomRowData', [totals]);
      api.onFilterChanged();
      api.refreshCells({ force: true });
    },
    focus(id) {
      const node = api.getRowNode(id);
      if (!node) return;
      api.ensureNodeVisible(node, 'middle');
      api.flashCells({ rowNodes: [node] });
    },
  };
}
