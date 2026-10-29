// <BcnPlanItemsTable>'s runtime (2026-10-28, the SOW review: "edit records in a table view rather than row by row"):
// the plan's items in AG Grid, one row each in outline order: Name, Level, Start, End, Date Type, Milestone, Owners and
// Notes. Live reads; your draft edits, each committed cell (or pasted block) one edit of the draft, as the budget sheet's
// cells are. The page hands it the plan, each item's owners, whether it edits and the search; it hands back the changes.
//
// It keeps the budget sheet's keys: type to replace, Enter or F2 to edit, Enter commits and moves down, Tab across,
// Escape cancels, and a block copied from Excel pastes across the cells it covers (names, dates as 2027-03-17 or
// 3/17/2027, Estimated or Scheduled, Yes or No, owners separated by commas or semicolons).

import { createGrid, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import type { CellClassParams, ColDef, GridApi, ValueFormatterParams } from 'ag-grid-community';
import { settingsEsaTheme } from '../../lib/beacon-grid';
import { flattenPlan, isOrganization, PLAN_DIRECTORY, PLAN_ORGANIZATIONS } from '../../lib/planning/plan-repo';
import { PlanDateTypeEnum, type PlanDetailDto } from '../../lib/planning/model';

export type ItemField = 'name' | 'start' | 'end' | 'type' | 'milestone' | 'owners' | 'notes';
export interface ItemChange {
  id: string;
  field: ItemField;
  value: string | boolean | string[] | null;
}
interface TableRow {
  id: string;
  name: string;
  depth: number;
  level: string;
  parent: boolean;
  start: string | null;
  end: string | null;
  type: string;
  milestone: boolean;
  owners: string[];
  notes: string;
}
export interface PlanItemsTable {
  set(data: { plan: PlanDetailDto; owners: Record<string, string[]>; editable: boolean; query: string }): void;
}

let registered = false;
const EDITABLE: ItemField[] = ['name', 'start', 'end', 'type', 'milestone', 'owners', 'notes'];
const KNOWN = new Map([...PLAN_DIRECTORY, ...Object.keys(PLAN_ORGANIZATIONS)].map((n) => [n.toLowerCase(), n]));

/** A date as people type or paste it: 2027-03-17, 3/17/2027, 3/17/27. Blank is none; anything else, null (kept). */
export function parseDate(input: unknown): string | null | undefined {
  const text = String(input ?? '').trim();
  if (!text) return null;
  let m = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(text);
  if (m) return `${m[1]}-${m[2].padStart(2, '0')}-${m[3].padStart(2, '0')}`;
  m = /^(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})$/.exec(text);
  if (m) return `${m[3].length === 2 ? `20${m[3]}` : m[3]}-${m[1].padStart(2, '0')}-${m[2].padStart(2, '0')}`;
  const t = Date.parse(text);
  return Number.isFinite(t) ? new Date(t).toISOString().slice(0, 10) : undefined;
}
/** Owners as typed: names or organizations, by commas or semicolons, matched to the directory (any case). Unknown
 *  names are dropped; undefined when none is known. */
export function parseOwners(input: unknown): string[] | undefined {
  if (Array.isArray(input)) return input as string[];
  const names = String(input ?? '').split(/[;,]/).map((s) => s.trim()).filter(Boolean);
  if (!names.length) return [];
  const known = names.map((n) => KNOWN.get(n.toLowerCase())).filter((n): n is string => !!n);
  return known.length ? [...new Set(known)] : undefined;
}
const yes = (v: unknown) => (typeof v === 'boolean' ? v : /^(y|yes|true|1|x)$/i.test(String(v ?? '').trim()));
const day = (iso: string | null) => (iso ? new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }) : '');

export function setupPlanItemsTable(root: HTMLElement, onEdit: (changes: ItemChange[]) => void): PlanItemsTable {
  if (!registered) {
    ModuleRegistry.registerModules([AllCommunityModule]);
    registered = true;
  }
  const host = root.querySelector<HTMLElement>('[data-pit-grid]')!;
  let editable = false;
  // A cell is editable on a task or milestone; a parent's dates come from its items, its name and notes still edit.
  const canEdit = (row: TableRow | undefined, field: ItemField) => editable && !!row && (!row.parent || field === 'name' || field === 'notes' || field === 'owners');
  const cellClass = (field: ItemField) => (p: CellClassParams<TableRow>) => [canEdit(p.data, field) ? 'bcn-pit__edit' : 'bcn-pit__read', p.data?.parent ? 'bcn-pit__parent' : ''].filter(Boolean);

  const columns: ColDef<TableRow>[] = [
    {
      field: 'name',
      headerName: 'Name',
      minWidth: 260,
      flex: 2,
      editable: (p) => canEdit(p.data, 'name'),
      cellClass: cellClass('name'),
      cellStyle: (p) => ({ paddingInlineStart: `${12 + (p.data?.depth ?? 0) * 16}px` }),
    },
    { field: 'level', headerName: 'Level', width: 110, cellClass: 'bcn-pit__read' },
    { field: 'start', headerName: 'Start', width: 130, editable: (p) => canEdit(p.data, 'start'), cellClass: cellClass('start'), valueFormatter: (p: ValueFormatterParams<TableRow>) => day(p.value) },
    { field: 'end', headerName: 'End', width: 130, editable: (p) => canEdit(p.data, 'end'), cellClass: cellClass('end'), valueFormatter: (p: ValueFormatterParams<TableRow>) => (p.data?.milestone ? '' : day(p.value)) },
    {
      field: 'type',
      headerName: 'Date Type',
      width: 130,
      editable: (p) => canEdit(p.data, 'type'),
      cellClass: cellClass('type'),
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: { values: ['Estimated', 'Scheduled'] },
    },
    { field: 'milestone', headerName: 'Milestone', width: 110, editable: (p) => canEdit(p.data, 'milestone'), cellClass: cellClass('milestone'), cellEditor: 'agCheckboxCellEditor', cellRenderer: 'agCheckboxCellRenderer' },
    {
      field: 'owners',
      headerName: 'Owners',
      minWidth: 200,
      flex: 1.2,
      editable: (p) => canEdit(p.data, 'owners'),
      cellClass: cellClass('owners'),
      valueFormatter: (p: ValueFormatterParams<TableRow>) => (p.value as string[] | undefined)?.join(', ') ?? '',
      valueParser: (p) => parseOwners(p.newValue) ?? p.oldValue,
      tooltipValueGetter: () => (editable ? 'Names or organizations, separated by commas' : ''),
    },
    { field: 'notes', headerName: 'Notes', minWidth: 220, flex: 1.6, editable: (p) => canEdit(p.data, 'notes'), cellClass: cellClass('notes') },
  ];

  /** A change as the draft takes it, or null when it isn't one (a date that doesn't read, a name left blank). */
  const asChange = (row: TableRow, field: ItemField, raw: unknown): ItemChange | null => {
    if (!canEdit(row, field)) return null;
    switch (field) {
      case 'name': {
        const v = String(raw ?? '').trim();
        return v && v !== row.name ? { id: row.id, field, value: v } : null;
      }
      case 'start':
      case 'end': {
        const v = parseDate(raw);
        return v === undefined || v === row[field] ? null : { id: row.id, field, value: v };
      }
      case 'type': {
        const v = /^s/i.test(String(raw ?? '')) ? 'Scheduled' : /^e/i.test(String(raw ?? '')) ? 'Estimated' : null;
        return v && v !== row.type ? { id: row.id, field, value: v } : null;
      }
      case 'milestone': {
        const v = yes(raw);
        return v !== row.milestone ? { id: row.id, field, value: v } : null;
      }
      case 'owners': {
        const v = parseOwners(raw);
        return v && v.join('|') !== row.owners.join('|') ? { id: row.id, field, value: v } : null;
      }
      case 'notes': {
        const v = String(raw ?? '').trim();
        return v !== row.notes ? { id: row.id, field, value: v || null } : null;
      }
    }
  };

  const api: GridApi<TableRow> = createGrid(host, {
    theme: settingsEsaTheme,
    columnDefs: columns,
    defaultColDef: { resizable: true, sortable: false, suppressMovable: true },
    rowHeight: 32,
    headerHeight: 40,
    domLayout: 'autoHeight',
    getRowId: (p) => p.data.id,
    singleClickEdit: false,
    stopEditingWhenCellsLoseFocus: true,
    enterNavigatesVerticallyAfterEdit: true,
    onCellValueChanged: (e) => {
      const field = e.colDef.field as ItemField;
      const row = { ...e.data, [field]: e.oldValue } as TableRow;
      const change = asChange(row, field, e.newValue);
      if (change) onEdit([change]);
      else e.node.setDataValue(field, e.oldValue);
    },
  });

  // Paste a block from a spreadsheet across the cells it covers, from the focused cell (AG Grid community has no
  // clipboard of its own). Each pasted cell is read as its column reads typing; the whole block is one edit.
  document.addEventListener('paste', (e) => {
    if (!root.isConnected || root.closest('[hidden]') || !editable) return;
    const focused = api.getFocusedCell();
    if (!focused || api.getEditingCells().length) return;
    const text = e.clipboardData?.getData('text/plain') ?? '';
    if (!text) return;
    e.preventDefault();
    const grid = text.replace(/\r/g, '').replace(/\n$/, '').split('\n').map((line) => line.split('\t'));
    const cols = api.getAllDisplayedColumns();
    const first = cols.indexOf(focused.column);
    const changes: ItemChange[] = [];
    grid.forEach((cells, r) => {
      const node = api.getDisplayedRowAtIndex(focused.rowIndex + r);
      if (!node?.data) return;
      cells.forEach((cell, c) => {
        const field = cols[first + c]?.getColDef().field as ItemField | undefined;
        if (!field || !EDITABLE.includes(field)) return;
        const change = asChange(node.data!, field, cell);
        if (change) changes.push(change);
      });
    });
    if (changes.length) onEdit(changes);
  });

  return {
    set({ plan, owners, editable: canEditNow, query }) {
      editable = canEditNow;
      root.toggleAttribute('data-editable', editable);
      const q = query.trim().toLowerCase();
      const rows: TableRow[] = flattenPlan(plan.Elements)
        .filter(({ element, path }) => !q || (element.PlanElementName ?? '').toLowerCase().includes(q) || path.some((p) => p.toLowerCase().includes(q)))
        .map(({ element, path }) => ({
          id: element.PlanElementID ?? '',
          name: element.PlanElementName ?? '',
          depth: path.length,
          level: element.IsMilestone ? 'Milestone' : (element.LevelSingularName ?? ''),
          parent: !!element.Children?.length,
          start: element.StartDate ?? null,
          end: element.EndDate ?? null,
          type: element.PlanDateType === PlanDateTypeEnum.Scheduled ? 'Scheduled' : 'Estimated',
          milestone: !!element.IsMilestone,
          owners: (owners[element.PlanElementID ?? ''] ?? []).filter((o) => o && (isOrganization(o) || KNOWN.has(o.toLowerCase()))),
          notes: element.Notes ?? '',
        }));
      api.setGridOption('rowData', rows);
      api.refreshCells({ force: true });
    },
  };
}
