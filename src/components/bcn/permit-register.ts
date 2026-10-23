// permit-register.ts — the controller behind <BcnPermitRegister>: a project's permits
// in one carded AG Grid, grouped by Level / Jurisdiction / Status (or not at all).
//
// AG Grid Community has no row grouping, so a group is a FULL-WIDTH header row
// interleaved with the permit rows (isFullWidthRow + fullWidthCellRenderer). The rows
// are rebuilt whenever the Group By toggle or the store changes, and postSortRows keeps
// each group intact under a column sort — the sort reorders permits WITHIN their group.
//
// Search and the Assignee / Status facets run through ONE external filter rather than
// AG Grid's quick filter: a header row has no cell values of its own, so the stock
// quick filter would hide every header the moment anything was typed. The header row
// instead passes when any permit in its group passes. mountBeaconGrid still wires the
// search field to `quickFilterText` (that is the shared chrome's contract); this grid
// neutralises the stock matcher and reads the text itself.
//
// bcn-lego-checked: a grid controller, not new UI — every control it drives is a lego
// (esa-button-toggle, esa-filter-dropdown, BcnGridChrome's esa-text-field / esa-button)
// and the grid is the spoke's shared beacon-grid kit. The cells it builds are the
// BcnStatusChip markup (its CSS is global) plus the permit name/reference pair, the
// quiet expiry chip and the group header — cell looks AG Grid injects outside Astro's
// scope, styled :global in BcnPermitRegister.astro.
import type {
  ColDef,
  GridApi,
  GridOptions,
  ICellRendererParams,
  IRowNode,
  ValueFormatterParams,
} from 'ag-grid-community';
import { beaconTheme, mountBeaconGrid, type BeaconGridHandle } from '../../lib/beacon-grid';
import {
  JURISDICTIONS,
  LEVEL_ORDER,
  STATUS_META,
  STATUS_ORDER,
  TODAY,
  daysBetween,
  formatDate,
  jurisdictionOf,
  levelOf,
  permitById,
  personName,
  submittedDate,
  type Permit,
  type PermitStatus,
} from '../../data/internal-permits';
import {
  allPermits,
  getPermit,
  initFromIsland,
  openDependenciesLive,
  openPermit,
} from '../../lib/internal-permits-store';

const PREFIX = 'pr';
const EM_DASH = '—';
const EXPIRY_WINDOW_DAYS = 90;

export type GroupBy = 'level' | 'jurisdiction' | 'status' | 'none';

interface PermitRow {
  kind: 'permit';
  id: string;
  groupKey: string;
  name: string;
  referenceNumber: string;
  agency: string;
  agencyFull: string;
  assigneeId: string;
  assignee: string;
  status: PermitStatus;
  statusLabel: string;
  statusRank: number;
  submitted: string;
  review: string;
  issued: string;
  expires: string;
  /** Days to expiration when inside the warning window, else null. */
  expiresInDays: number | null;
  conditions: string;
  waitsOn: string;
  waitsOnAll: string[];
  /** Lower-cased text the search matches against. */
  haystack: string;
}

interface GroupRow {
  kind: 'group';
  id: string;
  groupKey: string;
  label: string;
  total: number;
}

type Row = PermitRow | GroupRow;

// ── Derived values (written here, not in the data module — see the build spec) ──

/** The round state in words. */
export function reviewState(p: Permit): string {
  const n = p.rounds.length;
  if (p.status === 'not-required' || n === 0) return EM_DASH;
  if (p.status === 'issued') return `Issued after ${n} ${n === 1 ? 'round' : 'rounds'}`;
  const last = p.rounds[n - 1];
  if (!last.returned) return `Round ${n} · with agency since ${formatDate(last.sent)}`;
  if (last.outcome === 'comments') return `Round ${n} · comments back ${formatDate(last.returned)}`;
  return `Round ${n} · decision ${formatDate(last.returned)}`;
}

function conditionsText(p: Permit): string {
  if (p.conditions === null) return EM_DASH;
  if (!p.conditions) return 'No';
  return p.conditionsCount ? `Yes · ${p.conditionsCount}` : 'Yes';
}

function expiresInDays(p: Permit): number | null {
  if (p.status !== 'issued' || !p.expiresDate) return null;
  const d = daysBetween(TODAY, p.expiresDate);
  return d >= 0 && d <= EXPIRY_WINDOW_DAYS ? d : null;
}

function groupKeyOf(p: Permit, by: GroupBy): string {
  switch (by) {
    case 'level':
      return levelOf(p);
    case 'jurisdiction':
      return jurisdictionOf(p)?.id ?? 'unknown';
    case 'status':
      return p.status;
    default:
      return 'all';
  }
}

/** Every group key for a mode, in display order, with its header label. */
function groupOrder(by: GroupBy): { key: string; label: string }[] {
  switch (by) {
    case 'level':
      return LEVEL_ORDER.map((l) => ({ key: l, label: l }));
    case 'jurisdiction':
      return LEVEL_ORDER.flatMap((l) =>
        JURISDICTIONS.filter((j) => j.level === l).map((j) => ({ key: j.id, label: j.name })),
      ).concat({ key: 'unknown', label: 'Other' });
    case 'status':
      return STATUS_ORDER.map((s) => ({ key: s, label: STATUS_META[s].label }));
    default:
      return [];
  }
}

function toPermitRow(p: Permit, by: GroupBy): PermitRow {
  const j = jurisdictionOf(p);
  const deps = (p.status === 'not-required' ? [] : openDependenciesLive(p)).map((d) => (getPermit(d.permitId) ?? permitById(d.permitId))?.name ?? d.permitId);
  const row: Omit<PermitRow, 'haystack'> = {
    kind: 'permit',
    id: p.id,
    groupKey: groupKeyOf(p, by),
    name: p.name,
    referenceNumber: p.referenceNumber ?? '',
    agency: j?.short ?? EM_DASH,
    agencyFull: j?.name ?? '',
    assigneeId: p.assigneeId,
    assignee: personName(p.assigneeId),
    status: p.status,
    statusLabel: STATUS_META[p.status].label,
    statusRank: STATUS_ORDER.indexOf(p.status),
    submitted: submittedDate(p) ?? '',
    review: reviewState(p),
    issued: p.issuedDate ?? '',
    expires: p.expiresDate ?? '',
    expiresInDays: expiresInDays(p),
    conditions: conditionsText(p),
    waitsOn: deps.length ? (deps.length > 1 ? `${deps[0]} +${deps.length - 1}` : deps[0]) : '',
    waitsOnAll: deps,
  };
  const haystack = [row.name, row.referenceNumber, row.agency, row.agencyFull, row.assignee, row.statusLabel, row.review, ...deps]
    .join(' ')
    .toLowerCase();
  return { ...row, haystack };
}

/** The interleaved row list: each group header followed by its permits. */
function buildRows(permits: Permit[], by: GroupBy): Row[] {
  const rows = permits.map((p) => toPermitRow(p, by));
  if (by === 'none') return rows;
  const out: Row[] = [];
  for (const g of groupOrder(by)) {
    const members = rows.filter((r) => r.groupKey === g.key);
    if (!members.length) continue;
    out.push({ kind: 'group', id: `group:${g.key}`, groupKey: g.key, label: g.label, total: members.length });
    out.push(...members);
  }
  return out;
}

// ── Cells ────────────────────────────────────────────────────────────────────

function el(tag: string, className: string, text?: string): HTMLElement {
  const node = document.createElement(tag);
  node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

/** Name over a quieter reference number. */
function permitRenderer(p: ICellRendererParams<Row>): HTMLElement | string {
  const r = p.data;
  if (!r || r.kind !== 'permit') return '';
  const cell = el('span', 'bcn-permit-register__permit');
  cell.append(el('span', 'bcn-permit-register__name', r.name));
  if (r.referenceNumber) cell.append(el('span', 'bcn-permit-register__ref', r.referenceNumber));
  return cell;
}

/** BcnStatusChip's markup (its CSS is global), toned from STATUS_META. */
function statusRenderer(p: ICellRendererParams<Row>): HTMLElement | string {
  const r = p.data;
  if (!r || r.kind !== 'permit') return '';
  const chip = el('span', 'bcn-status-chip');
  chip.dataset.status = r.status;
  chip.style.setProperty('--_chip', STATUS_META[r.status].tone);
  chip.append(el('span', 'bcn-status-chip__dot'), el('span', 'bcn-status-chip__label', r.statusLabel));
  // Wrapped so the chip sits at its natural height, centred — bare, it inherits the
  // cell's row-height line-height and grows into a tall blob.
  const wrap = el('span', 'bcn-permit-register__chip-cell');
  wrap.append(chip);
  return wrap;
}

/** Submitted date (quiet) over the round state; one dash before submittal. */
function reviewRenderer(p: ICellRendererParams<Row>): HTMLElement | string {
  const r = p.data;
  if (!r || r.kind !== 'permit') return '';
  const cell = el('span', 'bcn-permit-register__review');
  if (r.review !== EM_DASH && r.submitted) {
    cell.append(el('span', 'bcn-permit-register__ref', `Submitted ${formatDate(r.submitted)}`));
  }
  cell.append(el('span', '', r.review));
  return cell;
}

/** Issued date over a quiet "Expires …" line, plus the warning chip inside the window. */
function issuedRenderer(p: ICellRendererParams<Row>): HTMLElement | string {
  const r = p.data;
  if (!r || r.kind !== 'permit') return '';
  const cell = el('span', 'bcn-permit-register__expires');
  cell.append(el('span', '', formatDate(r.issued || null)));
  if (r.expires) cell.append(el('span', 'bcn-permit-register__ref', `Expires ${formatDate(r.expires)}`));
  if (r.expiresInDays != null) {
    const d = r.expiresInDays;
    const text = d === 0 ? 'Expires today' : `Expires in ${d} ${d === 1 ? 'day' : 'days'}`;
    cell.append(el('span', 'bcn-permit-register__expiry-chip', text));
  }
  return cell;
}

/** The group header: name and permit count, quiet. Counts say so when narrowed. */
function groupRenderer(p: ICellRendererParams<Row>): HTMLElement {
  const r = p.data as GroupRow;
  let visible = 0;
  p.api.forEachNodeAfterFilter((n) => {
    if (n.data?.kind === 'permit' && n.data.groupKey === r.groupKey) visible += 1;
  });
  const head = el('div', 'bcn-permit-register__group');
  head.append(
    el('span', 'bcn-permit-register__group-name', r.label),
    el('span', 'bcn-permit-register__group-count', visible < r.total ? `${visible} of ${r.total}` : String(r.total)),
  );
  return head;
}

const dateFormatter = (p: ValueFormatterParams<Row>) => (p.data?.kind === 'permit' ? formatDate(p.value || null) : '');

/** ISO dates sort as strings; blanks always last. */
const dateComparator = (a: string | undefined, b: string | undefined) => {
  if (!a && !b) return 0;
  if (!a) return 1;
  if (!b) return -1;
  return a.localeCompare(b);
};

const permitField = <K extends keyof PermitRow>(key: K) => (p: { data?: Row }) =>
  p.data?.kind === 'permit' ? p.data[key] : undefined;

// Sized to fit the ~1080px card a 1440 viewport leaves (sidebar + gutters) without
// sideways scroll: the minimums sum to ~1,050px and the flex columns share the rest.
// Text wraps (autoHeight) instead of truncating. Submitted rides as Review's first
// line and Expires as Issued's second; both stay in the CSV as hidden columns.
function columnDefs(): ColDef<Row>[] {
  return [
    {
      colId: 'permit',
      headerName: 'Permit',
      valueGetter: permitField('name'),
      cellRenderer: permitRenderer,
      autoHeight: true,
      flex: 2,
      minWidth: 170,
    },
    // Exported, never shown: on screen these ride inside Permit / Review / Issued.
    { colId: 'reference', headerName: 'Reference No.', valueGetter: permitField('referenceNumber'), hide: true },
    { colId: 'submitted', headerName: 'Submitted', valueGetter: permitField('submitted'), valueFormatter: dateFormatter, hide: true },
    { colId: 'agency', headerName: 'Agency', valueGetter: permitField('agency'), wrapText: true, autoHeight: true, flex: 0.7, minWidth: 80 },
    { colId: 'assignee', headerName: 'Assignee', valueGetter: permitField('assignee'), wrapText: true, autoHeight: true, flex: 0.7, minWidth: 90 },
    {
      colId: 'status',
      headerName: 'Status',
      valueGetter: permitField('statusLabel'),
      cellRenderer: statusRenderer,
      width: 176,
      comparator: (_a, _b, nodeA, nodeB) => rankOf(nodeA) - rankOf(nodeB),
    },
    {
      colId: 'review',
      headerName: 'Review',
      valueGetter: permitField('review'),
      cellRenderer: reviewRenderer,
      autoHeight: true,
      // Chronological: by submittal date, not by the wording.
      comparator: (_a, _b, nodeA, nodeB) => dateComparator(submittedOf(nodeA), submittedOf(nodeB)),
      flex: 1.6,
      minWidth: 170,
    },
    {
      colId: 'issued',
      headerName: 'Issued',
      valueGetter: permitField('issued'),
      valueFormatter: dateFormatter,
      comparator: dateComparator,
      cellRenderer: issuedRenderer,
      autoHeight: true,
      width: 152,
    },
    { colId: 'expires', headerName: 'Expires', valueGetter: permitField('expires'), valueFormatter: dateFormatter, hide: true },
    { colId: 'conditions', headerName: 'Conditions', valueGetter: permitField('conditions'), width: 96 },
    {
      colId: 'waitsOn',
      headerName: 'Waits On',
      valueGetter: permitField('waitsOn'),
      tooltipValueGetter: (p) => (p.data?.kind === 'permit' && p.data.waitsOnAll.length > 1 ? p.data.waitsOnAll.join('\n') : undefined),
      wrapText: true,
      autoHeight: true,
      flex: 1,
      minWidth: 120,
    },
  ];
}

function submittedOf(node: IRowNode<Row>): string | undefined {
  return node.data?.kind === 'permit' ? node.data.submitted || undefined : undefined;
}

function rankOf(node: IRowNode<Row>): number {
  return node.data?.kind === 'permit' ? node.data.statusRank : -1;
}

// The kit's theme at the 14px dense floor (rather than its ported 13px): this grid is
// the page's default view and is read by scanning. Rows size to their content
// (autoHeight on the wrapping columns); rowHeight is the estimate and one-line floor.
// Cell padding steps down to 10px a side so eight columns fit a laptop-width card.
const registerTheme = beaconTheme.withParams({
  dataFontSize: '14px',
  headerFontSize: '14px',
  rowHeight: 52,
  cellHorizontalPaddingScale: 0.625,
});

const GROUP_ROW_HEIGHT = 40;

// ── Mount ────────────────────────────────────────────────────────────────────

type ToggleEl = HTMLElement & { options: { value: string; label: string }[]; value: string };
type FilterDropdownEl = HTMLElement & {
  options: { label: string; value: string; color?: string }[];
  _selected: string[];
};

/** Wire one register. `mount` is the component's root ([data-permit-register]). */
export function setupPermitRegister(mount: HTMLElement): void {
  const projectId = mount.dataset.projectId ?? '';
  const csvName = mount.dataset.csvName ?? 'permits.csv';

  const projectPermits = () => allPermits().filter((p) => p.projectId === projectId);
  initFromIsland();

  let groupBy: GroupBy = 'level';
  let assigneeFacet: string[] = [];
  let statusFacet: string[] = [];
  let api: GridApi<Row> | null = null;
  // Declared up front: AG Grid can fire rowDataUpdated while createGrid is still
  // running, before mountBeaconGrid has returned.
  let handle: BeaconGridHandle<Row> | null = null;

  const searchText = () => String(api?.getGridOption('quickFilterText') ?? '').trim().toLowerCase();

  const permitPasses = (r: PermitRow, parts: string[]) =>
    (!assigneeFacet.length || assigneeFacet.includes(r.assigneeId)) &&
    (!statusFacet.length || statusFacet.includes(r.status)) &&
    parts.every((part) => r.haystack.includes(part));

  const filterActive = () => !!assigneeFacet.length || !!statusFacet.length || !!searchText();

  // Footer counts read PERMITS, not rows — the group headers are not records.
  const filteredEl = mount.querySelector<HTMLElement>(`[data-${PREFIX}-filtered]`);
  const fixCounts = ({ total }: { total: number }) => {
    if (!api || !filteredEl) return;
    let shown = 0;
    api.forEachNodeAfterFilter((n) => {
      if (n.data?.kind === 'permit') shown += 1;
    });
    filteredEl.hidden = shown >= total;
    if (shown < total) filteredEl.textContent = `Filtered Records: ${shown}`;
  };

  const gridOptions: GridOptions<Row> = {
    theme: registerTheme,
    rowData: buildRows(projectPermits(), groupBy),
    columnDefs: columnDefs(),
    getRowId: (p) => p.data.id,
    defaultColDef: {
      sortable: true,
      resizable: true,
      filter: false,
      suppressHeaderMenuButton: true,
      cellClass: 'bcn-permit-register__cell',
    },
    tooltipShowDelay: 300,

    isFullWidthRow: (p) => p.rowNode.data?.kind === 'group',
    fullWidthCellRenderer: groupRenderer,
    getRowHeight: (p) => (p.data?.kind === 'group' ? GROUP_ROW_HEIGHT : undefined),
    getRowClass: (p) => (p.data?.kind === 'group' ? 'bcn-permit-register__group-row' : undefined),
    rowClassRules: {
      'bcn-permit-register__row--muted': (p) => p.data?.kind === 'permit' && p.data.status === 'not-required',
    },

    // Groups stay whole under a column sort: the sort decides order WITHIN a group,
    // the group order itself never moves, and each header leads its permits.
    postSortRows: ({ nodes }) => {
      if (groupBy === 'none') return;
      const order = groupOrder(groupBy).map((g) => g.key);
      const byGroup = new Map<string, IRowNode<Row>[]>();
      const headers = new Map<string, IRowNode<Row>>();
      for (const n of nodes) {
        const key = n.data?.groupKey ?? '';
        if (n.data?.kind === 'group') headers.set(key, n);
        else byGroup.set(key, [...(byGroup.get(key) ?? []), n]);
      }
      const ordered: IRowNode<Row>[] = [];
      for (const key of order) {
        const head = headers.get(key);
        if (head) ordered.push(head);
        ordered.push(...(byGroup.get(key) ?? []));
      }
      nodes.splice(0, nodes.length, ...ordered);
    },

    // Search + facets in one pass (see the header comment for why not quickFilter).
    quickFilterMatcher: () => true,
    isExternalFilterPresent: filterActive,
    doesExternalFilterPass: (node) => {
      const r = node.data;
      if (!r) return true;
      const parts = searchText().split(/\s+/).filter(Boolean);
      if (r.kind === 'permit') return permitPasses(r, parts);
      let any = false;
      api?.forEachNode((n) => {
        if (!any && n.data?.kind === 'permit' && n.data.groupKey === r.groupKey && permitPasses(n.data, parts)) any = true;
      });
      return any;
    },
    // Header counts read the filtered set, so repaint them whenever it changes.
    onFilterChanged: (e) => {
      const heads: IRowNode<Row>[] = [];
      e.api.forEachNode((n) => {
        if (n.data?.kind === 'group') heads.push(n);
      });
      if (heads.length) e.api.redrawRows({ rowNodes: heads });
    },
    onRowDataUpdated: () => handle?.updateCounts(),

    onRowClicked: (e) => {
      if (e.data?.kind === 'permit') openPermit(e.data.id);
    },
    // AG Grid owns row focus (arrow keys, Tab into the grid); Enter opens the permit.
    onCellKeyDown: (e) => {
      const ev = e.event as KeyboardEvent | null | undefined;
      if (ev?.key === 'Enter' && e.data?.kind === 'permit') openPermit(e.data.id);
    },

    defaultCsvExportParams: {
      allColumns: true,
      shouldRowBeSkipped: (p) => p.node.data?.kind === 'group',
    },
  };

  handle = mountBeaconGrid<Row>({
    mount,
    prefix: PREFIX,
    gridOptions,
    csvName,
    totalRows: () => projectPermits().length,
    onCountsChanged: fixCounts,
  });
  if (!handle) return;
  api = handle.api;
  handle.updateCounts();

  const refresh = () => {
    api?.setGridOption('rowData', buildRows(projectPermits(), groupBy));
    syncFacetOptions();
  };

  // ── Group By ──
  const toggle = mount.querySelector<ToggleEl>('[data-pr-group-by]');
  if (toggle) {
    toggle.options = [
      { value: 'level', label: 'Level' },
      { value: 'jurisdiction', label: 'Jurisdiction' },
      { value: 'status', label: 'Status' },
      { value: 'none', label: 'None' },
    ];
    toggle.value = groupBy;
    toggle.addEventListener('change', (e) => {
      groupBy = (((e as CustomEvent).detail?.value as string) ?? toggle.value) as GroupBy;
      refresh();
    });
  }

  // ── Facets ──
  const fltAssignee = mount.querySelector<FilterDropdownEl>('[data-pr-filter-assignee]');
  const fltStatus = mount.querySelector<FilterDropdownEl>('[data-pr-filter-status]');

  function syncFacetOptions() {
    const ps = projectPermits();
    if (fltAssignee) {
      const ids = [...new Set(ps.map((p) => p.assigneeId))];
      fltAssignee.options = ids
        .map((id) => ({ value: id, label: personName(id) }))
        .sort((a, b) => a.label.localeCompare(b.label));
    }
    if (fltStatus) {
      const present = new Set(ps.map((p) => p.status));
      fltStatus.options = STATUS_ORDER.filter((s) => present.has(s)).map((s) => ({
        value: s,
        label: STATUS_META[s].label,
        color: STATUS_META[s].tone,
      }));
    }
  }
  syncFacetOptions();

  fltAssignee?.addEventListener('selection-change', (e) => {
    assigneeFacet = ((e as CustomEvent).detail?.value as string[]) ?? [];
    api?.onFilterChanged();
  });
  fltStatus?.addEventListener('selection-change', (e) => {
    statusFacet = ((e as CustomEvent).detail?.value as string[]) ?? [];
    api?.onFilterChanged();
  });

  // BcnGridChrome's Clear Filters: mountBeaconGrid clears the column filter model;
  // the facets are this grid's filters, so they clear here too.
  mount.querySelector(`[data-${PREFIX}-clear-filters]`)?.addEventListener('click', () => {
    assigneeFacet = [];
    statusFacet = [];
    if (fltAssignee) fltAssignee._selected = [];
    if (fltStatus) fltStatus._selected = [];
    api?.onFilterChanged();
  });

  // ── Store ── every write repaints the register (edits regroup, adds appear).
  document.addEventListener('bcn-permit-updated', refresh);
  document.addEventListener('bcn-permit-added', refresh);
}
