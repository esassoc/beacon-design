// <BcnPlanItemsTable>'s runtime (2026-10-28, the SOW review: "edit records in a table view rather than row by row"):
// the plan's items in a sheet, one row each in outline order: Name, Level, Start, End, Date Type, Milestone, Owners,
// Status (Live) and Notes. Live reads; your draft edits, each committed cell (or pasted block) one edit of the draft.
// The page hands it the plan, each item's owners, whether it edits and the search; it hands back the changes.
//
// It is the budget sheet's spreadsheet (2026-10-30, Andy: "The Budget table and Schedule Table seem like two different
// implementations... I really like the budget table"): ./plan-sheet.ts, the same name box and value bar, cursor, keys,
// flash and parent shading. What's its own is the columns:
// - Name and Notes type: type to replace, Enter or F2 to edit, Enter commits and moves down, Escape cancels.
// - Start and End open a date entry on one click (type 3/17/2027 or 2027-03-17, or pick from the calendar).
// - Date Type, Owners and Status pick on one click (Andy: "hate how the Schedule table makes me click into a status
//   cell, and then it transforms into a dropdown"): the list opens under the cell and a pick commits. Owners takes
//   several, saved when the list closes.
// - Milestone toggles on one click, or Space.
// - Delete clears a date, the owners or the notes.
// A block copied from Excel pastes across the cells it covers (names, dates, Estimated or Scheduled, Yes or No, owners
// separated by commas or semicolons). A parent's dates come from its items, and say so.

import type { CellClassParams, ColDef, ValueFormatterParams } from 'ag-grid-community';
import { flattenPlan, isOrganization, PLAN_DIRECTORY, PLAN_ORGANIZATIONS } from '../../lib/planning/plan-repo';
import { PlanDateTypeEnum, type PlanDetailDto } from '../../lib/planning/model';
import { STATUSES } from '../../lib/planning/plan-records';
import { checkRenderer, choiceRenderer, createSheet, nameRenderer, SheetChoiceEditor, SheetDateEditor, tierClass, type Choice, type Sheet, type SheetAt } from './plan-sheet';

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
  /** A task's or milestone's status, a record kept on Live; null where it has none to set (a parent, a new item). */
  status: string | null;
}
export interface PlanItemsTable {
  /** statuses and canRecord (2026-10-29, the second traps audit: a Contributor opened each task to set its status):
   *  the Status column, which saves to Live whatever the rest of the table edits. inDraft: the person is in their own
   *  draft (an edit from Live opens it first, and the value bar says so). */
  set(data: { plan: PlanDetailDto; owners: Record<string, string[]>; editable: boolean; query: string; statuses?: Record<string, string>; canRecord?: boolean; deliverables?: Set<string>; keep?: ReadonlySet<string> | null; inDraft?: boolean }): void;
}

const EDITABLE: ItemField[] = ['name', 'start', 'end', 'type', 'milestone', 'owners', 'notes'];
const DIRECTORY = [...PLAN_DIRECTORY, ...Object.keys(PLAN_ORGANIZATIONS)];
const KNOWN = new Map(DIRECTORY.map((n) => [n.toLowerCase(), n]));
/** A status's dot: the item page's (BcnStatusSelect's) colors. */
const STATUS_TONE: Record<string, string> = {
  'Not Started': 'var(--bcn-status-not-started)',
  'In Progress': 'var(--bcn-status-in-progress)',
  Blocked: 'var(--bcn-status-blocked)',
  Completed: 'var(--bcn-status-completed)',
};
const DATE_TYPES: Choice[] = [
  { value: 'Estimated', label: 'Estimated' },
  { value: 'Scheduled', label: 'Scheduled' },
];
const OWNER_CHOICES: Choice[] = DIRECTORY.map((n) => ({ value: n, label: n }));
/** The columns that open on one click. */
const CLICK_TO_EDIT = new Set(['start', 'end', 'type', 'owners', 'status']);

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

export function setupPlanItemsTable(root: HTMLElement, onEdit: (changes: ItemChange[]) => void, onStatus: (id: string, status: string) => void = () => {}): PlanItemsTable {
  let editable = false;
  let canRecord = false;
  let inDraft = false;
  let query = '';
  let deliverableIds: ReadonlySet<string> = new Set();
  let parentOf = new Map<string, string | null>();

  /** Whether a cell takes a change now. A task's or milestone's fields edit in a draft (a milestone's End is its
   *  Start); a parent's dates and kind come from its items, its name, owners and notes still edit. Status is Live's,
   *  set by anyone on the plan, on an item Live has. */
  const canEdit = (row: TableRow | undefined, col: string): boolean => {
    if (!row) return false;
    if (col === 'status') return canRecord && row.status !== null;
    if (!editable || !EDITABLE.includes(col as ItemField)) return false;
    if (row.parent) return col === 'name' || col === 'notes' || col === 'owners';
    if (col === 'end' && row.milestone) return false;
    return true;
  };
  /** Why a cell won't take a change (quiet in a read-only table, but for Status). */
  const whyNot = (row: TableRow, col: string): string => {
    if (col === 'status') {
      if (row.parent) return 'From its items. Set the status of the items under it.';
      if (row.status === null) return 'A new item takes a status once its draft is published.';
      if (!canRecord) return 'Only people on the plan set a status.';
      return '';
    }
    if (!editable) return '';
    if (col === 'level') return 'From the outline. Move or indent the item in the chart to change it.';
    if (row.parent && (col === 'start' || col === 'end' || col === 'type')) return 'From its items. Change the dates of the items under it.';
    if (row.parent && col === 'milestone') return 'It has items under it. Only a task can be a milestone.';
    if (col === 'end' && row.milestone) return 'A milestone is one day. Change its start.';
    return '';
  };
  const cellClass = (col: string) => (p: CellClassParams<TableRow>) => {
    const row = p.data;
    const classes = [canEdit(row, col) ? (col === 'status' ? 'bcn-sheet__live' : 'bcn-sheet__edit') : 'bcn-sheet__read'];
    if (CLICK_TO_EDIT.has(col)) classes.push('bcn-sheet__pick');
    if (row?.parent) classes.push('bcn-sheet__parent');
    return classes;
  };

  const columns: ColDef<TableRow>[] = [
    {
      field: 'name',
      headerName: 'Name',
      // Pinned, as the Budget sheet's names (2026-10-30, Andy): scrolling across to Status keeps the row's name.
      pinned: 'left',
      width: 280,
      editable: (p) => canEdit(p.data, 'name'),
      cellClass: cellClass('name'),
      tooltipField: 'name',
      // Indented by depth; the search's hits in yellow, as the budget sheet's names (plain text otherwise, so the cell
      // reads as its name).
      cellStyle: (p) => ({ paddingInlineStart: `${10 + (p.data?.depth ?? 0) * 16}px` }),
      cellRendererSelector: (p) => (query && String(p.value ?? '').toLowerCase().includes(query) ? { component: nameRenderer<TableRow>({ depth: () => 0, query: () => query }) } : undefined),
    },
    { field: 'level', headerName: 'Level', width: 110, cellClass: cellClass('level') },
    {
      field: 'start',
      headerName: 'Start',
      width: 132,
      editable: (p) => canEdit(p.data, 'start'),
      cellClass: cellClass('start'),
      cellEditor: SheetDateEditor,
      valueFormatter: (p: ValueFormatterParams<TableRow>) => day(p.value),
      valueParser: (p) => readDate(p.newValue, p.oldValue),
    },
    {
      field: 'end',
      headerName: 'End',
      width: 132,
      editable: (p) => canEdit(p.data, 'end'),
      cellClass: cellClass('end'),
      cellEditor: SheetDateEditor,
      valueFormatter: (p: ValueFormatterParams<TableRow>) => (p.data?.milestone ? '' : day(p.value)),
      valueParser: (p) => readDate(p.newValue, p.oldValue),
    },
    {
      field: 'type',
      headerName: 'Date Type',
      width: 132,
      editable: (p) => canEdit(p.data, 'type'),
      cellClass: cellClass('type'),
      cellEditor: SheetChoiceEditor,
      cellEditorPopup: true,
      cellEditorParams: { choices: DATE_TYPES },
      cellRenderer: choiceRenderer<TableRow>({ label: (p) => p.value ?? '', pickable: (p) => canEdit(p.data, 'type') }),
    },
    {
      field: 'milestone',
      headerName: 'Milestone',
      width: 104,
      // Toggled by the sheet (one click, or Space), not through an editor.
      editable: false,
      cellClass: cellClass('milestone'),
      cellRenderer: checkRenderer<TableRow>({ show: (p) => !p.data?.parent }),
      valueFormatter: (p: ValueFormatterParams<TableRow>) => (p.value ? 'Yes' : 'No'),
    },
    {
      field: 'owners',
      headerName: 'Owners',
      minWidth: 200,
      flex: 1.2,
      editable: (p) => canEdit(p.data, 'owners'),
      cellClass: cellClass('owners'),
      cellEditor: SheetChoiceEditor,
      cellEditorPopup: true,
      cellEditorParams: { choices: OWNER_CHOICES, multi: true },
      valueFormatter: (p: ValueFormatterParams<TableRow>) => (p.value as string[] | undefined)?.join(', ') ?? '',
      valueParser: (p) => parseOwners(p.newValue) ?? p.oldValue,
      cellRenderer: choiceRenderer<TableRow>({ label: (p) => (p.value as string[] | undefined)?.join(', ') ?? '', pickable: (p) => canEdit(p.data, 'owners') }),
      tooltipValueGetter: (p) => (p.value as string[] | undefined)?.join(', ') ?? '',
    },
    {
      field: 'status',
      headerName: 'Status (Live)',
      width: 152,
      headerTooltip: 'Saves to Live, not to a draft',
      editable: (p) => canEdit(p.data, 'status'),
      cellClass: cellClass('status'),
      cellEditor: SheetChoiceEditor,
      cellEditorPopup: true,
      // A deliverable completes through Record Completion, on its page.
      cellEditorParams: (p: { data?: TableRow }) => ({
        choices: STATUSES.filter((s) => !(s === 'Completed' && p.data && deliverableIds.has(p.data.id))).map((s) => ({ value: s, label: s, tone: STATUS_TONE[s] })),
      }),
      valueFormatter: (p: ValueFormatterParams<TableRow>) => p.value ?? '',
      // At rest, as the item page shows it: a dot in the status's color and its label.
      cellRenderer: choiceRenderer<TableRow>({ label: (p) => p.value ?? '', tone: (p) => STATUS_TONE[p.value as string] ?? null, pickable: (p) => canEdit(p.data, 'status') }),
    },
    { field: 'notes', headerName: 'Notes', minWidth: 220, flex: 1.6, editable: (p) => canEdit(p.data, 'notes'), cellClass: cellClass('notes'), tooltipField: 'notes' },
  ];

  /** A typed date, or the old one kept (and the value bar says why) when it doesn't read. */
  function readDate(raw: unknown, old: unknown): string | null {
    const v = parseDate(raw);
    if (v === undefined) {
      queueMicrotask(() => sheet.say(`Not a date: ${String(raw)}. Type it as 3/17/2027.`));
      return (old as string | null) ?? null;
    }
    return v;
  }

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

  /** Hands changes to the page (your draft; from Live it opens first), and remembers what to flash when it redraws:
   *  the cells, and a date's parents, whose dates roll up from it. */
  function commit(changes: ItemChange[]): void {
    if (!changes.length) return;
    const ids = new Set<string>();
    const cols = new Set<string>();
    for (const c of changes) {
      ids.add(c.id);
      cols.add(c.field);
      if (c.field === 'start' || c.field === 'end') for (let at = parentOf.get(c.id); at; at = parentOf.get(at)) ids.add(at);
    }
    sheet.flashNext(ids, cols);
    onEdit(changes);
  }
  const toggle = (row: TableRow) => {
    const change = asChange(row, 'milestone', !row.milestone);
    if (change) commit([change]);
  };
  const headerOf = (col: string): string => sheet.api.getColumn(col)?.getColDef().headerName ?? '';
  const shown = (row: TableRow, col: string): string => {
    switch (col) {
      case 'start':
        return day(row.start);
      case 'end':
        return row.milestone ? day(row.start) : day(row.end);
      case 'milestone':
        return row.parent ? '' : row.milestone ? 'Yes' : 'No';
      case 'owners':
        return row.owners.join(', ');
      default:
        return String(row[col as keyof TableRow] ?? '');
    }
  };

  const sheet: Sheet<TableRow> = createSheet<TableRow>(
    {
      root,
      canEdit: (row, col) => canEdit(row, col),
      whyNot,
      where: (at) => ({ col: headerOf(at.colId), name: at.row.name }),
      describe: (at: SheetAt<TableRow>) => {
        const { row, colId: col } = at;
        const notes: string[] = [];
        if (col === 'status') {
          if (row.status !== null) notes.push('Saves to Live');
          if (row.parent) notes.push('From its items');
          if (deliverableIds.has(row.id)) notes.push('A deliverable completes on its page');
        } else if (row.parent && (col === 'start' || col === 'end' || col === 'type')) notes.push('From its items');
        else if (col === 'level') notes.push('From the outline');
        else if (col === 'end' && row.milestone) notes.push('A milestone is one day');
        else if (canEdit(row, col)) {
          if (CLICK_TO_EDIT.has(col)) notes.push(col === 'owners' ? 'Click to pick one or more' : col === 'start' || col === 'end' ? 'Click to change' : 'Click to pick');
          if (col === 'milestone') notes.push('Click or press Space');
          notes.push(inDraft ? 'Saves to your draft' : 'Opens your draft');
        }
        if (editable && !canEdit(row, col) && col !== 'status' && !notes.length && col !== 'name') notes.push('Read-Only');
        return { value: shown(row, col), notes };
      },
      clear: (at) => {
        const { row, colId: col } = at;
        if (col === 'start' || col === 'end' || col === 'owners' || col === 'notes') {
          const change = asChange(row, col, col === 'owners' ? [] : '');
          if (change) commit([change]);
          return;
        }
        if (col === 'name') return "A name can't be blank. Type a new one.";
        if (col === 'status') return 'A status is always set. Pick another one.';
        if (col === 'type') return 'A date is Estimated or Scheduled. Pick one.';
        if (col === 'milestone' && row.milestone) toggle(row);
      },
      onKey: (e, at) => {
        if (e.key === ' ' && at.colId === 'milestone' && canEdit(at.row, 'milestone')) {
          toggle(at.row);
          return true;
        }
        return false;
      },
      onClick: (at) => {
        if (at.colId !== 'milestone' || !canEdit(at.row, 'milestone')) return false;
        toggle(at.row);
        return true;
      },
      clickToEdit: CLICK_TO_EDIT,
      copy: (at) => {
        const { row, colId: col } = at;
        if (col === 'owners') return row.owners.join('; ');
        if (col === 'milestone') return row.milestone ? 'Yes' : 'No';
        return String(row[col as keyof TableRow] ?? '');
      },
      // Paste a block from a spreadsheet across the cells it covers, from the cursor. Each pasted cell is read as its
      // column reads typing; the whole block is one edit.
      paste: (cells) => {
        if (!editable) return;
        const changes: ItemChange[] = [];
        for (const { row, colId, raw } of cells) {
          if (!EDITABLE.includes(colId as ItemField)) continue;
          const change = asChange(row, colId as ItemField, raw);
          if (change) changes.push(change);
        }
        commit(changes);
      },
    },
    {
      columnDefs: columns,
      // Eight columns and a pinned name: draw them all, so a cell scrolled off to the right is still there to reach.
      suppressColumnVirtualisation: true,
      domLayout: 'autoHeight',
      getRowId: (p) => p.data.id,
      getRowClass: (p) => (p.data ? tierClass(p.data.depth, p.data.parent) : undefined),
      onCellValueChanged: (e) => {
        if (!e.data) return;
        if (e.colDef.field === 'status') {
          if (e.newValue && e.newValue !== e.oldValue) {
            sheet.flashNext([e.data.id], ['status']);
            onStatus(e.data.id, String(e.newValue));
          }
          return;
        }
        const field = e.colDef.field as ItemField;
        const row = { ...e.data, [field]: e.oldValue } as TableRow;
        const change = asChange(row, field, e.newValue);
        if (change) commit([change]);
        else e.node.setDataValue(field, e.oldValue);
      },
    }
  );
  const api = sheet.api;

  return {
    set({ plan, owners, editable: canEditNow, query: q, statuses = {}, canRecord: records = false, deliverables = new Set(), keep = null, inDraft: drafting = false }) {
      deliverableIds = deliverables;
      editable = canEditNow;
      canRecord = records;
      inDraft = drafting;
      root.dataset.editable = String(editable);
      root.dataset.records = String(canRecord);
      query = q.trim().toLowerCase();
      const flat = flattenPlan(plan.Elements);
      parentOf = new Map(flat.map(({ element }) => [element.PlanElementID ?? '', element.ParentPlanElementID ?? null]));
      const rows: TableRow[] = flat
        .filter(({ element, path }) => !query || (element.PlanElementName ?? '').toLowerCase().includes(query) || path.some((p) => p.toLowerCase().includes(query)))
        // The chart's Health and Owner filters hold here too: the rows they keep, with the parents above them.
        .filter(({ element }) => !keep || keep.has(element.PlanElementID ?? ''))
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
          status: element.Children?.length ? null : (statuses[element.PlanElementID ?? ''] ?? null),
        }));
      api.setGridOption('rowData', rows);
      api.refreshCells({ force: true });
      sheet.showCursor();
      sheet.flush();
    },
  };
}
