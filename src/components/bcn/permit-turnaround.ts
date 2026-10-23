// permit-turnaround.ts — the client half of <BcnPermitTurnaround>.
//
// setupPermitTurnaround(root) owns one turnaround grid: it reads the rows the
// component serialized at build time, mounts AG Grid through mountBeaconGrid (search,
// Clear Filters, CSV and record counts come from BcnGridChrome / BcnGridFooter by the
// `ta` prefix), drives the Level toggle as an external filter, draws the Spread cell
// (a dot strip on ONE months axis shared by every row) and its axis header, and shows
// the hover label for a dot or an Open Now count through a single esa-tooltip.
//
// Why one shared esa-tooltip rather than one per dot: esa-tooltip positions its bubble
// CSS-absolute inside its own wrapper, and an AG Grid cell clips its overflow, so a
// bubble inside a cell is cut off at the row edge. The tooltip lives outside the grid
// (a sibling of the card, in the section) and is moved onto the hovered mark.
//
// Every display string (labels, ranges, hrefs) was formatted at build time, so this
// file never imports the fixture module.
import type { ColDef, GridOptions, ICellRendererParams, IHeaderComp, IHeaderParams } from 'ag-grid-community';
import { beaconTheme, mountBeaconGrid } from '../../lib/beacon-grid';

/** One mark on the strip: an issued permit (filled) or an open one (hollow). */
export interface TurnaroundMark {
  months: number;
  /** Hover label: project, permit, span. */
  label: string;
  /** Set when the project is fully seeded — the dot opens that permit. */
  href: string | null;
}

/** One catalog entry's row, as serialized by BcnPermitTurnaround. */
export interface TurnaroundGridRow {
  id: string;
  permit: string;
  jurisdiction: string;
  jurisdictionName: string;
  type: string;
  level: 'Federal' | 'State' | 'Local';
  issued: number;
  median: number | null;
  medianLabel: string;
  rangeMin: number | null;
  rangeLabel: string;
  medianRounds: number | null;
  openCount: number;
  longestOpenLabel: string;
  issuedMarks: TurnaroundMark[];
  openMarks: TurnaroundMark[];
}

type Toggle = HTMLElement & { value: string };
type Tooltip = HTMLElement & { text: string; open: boolean };

const EM_DASH = '—';
/** Below this grid width the canonical Type column steps aside for the strip (the other
    columns' floors sum to about 1,050px; Type adds 190). */
const TYPE_COLUMN_MIN_WIDTH = 1260;

const esc = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const pct = (months: number, axisMax: number): string => `${Math.min(100, (months / axisMax) * 100).toFixed(2)}%`;

/** The strip's SVG for one row: gridlines, the median tick, then the marks on top. */
function stripSvg(row: TurnaroundGridRow, axisMax: number, ticks: number[]): string {
  const grid = ticks
    .map((t) => `<line class="bcn-permit-turnaround__gridline" x1="${pct(t, axisMax)}" x2="${pct(t, axisMax)}" y1="4" y2="20"/>`)
    .join('');
  const median =
    row.median != null
      ? `<line class="bcn-permit-turnaround__median" x1="${pct(row.median, axisMax)}" x2="${pct(row.median, axisMax)}" y1="3" y2="21"/>`
      : '';
  const mark = (m: TurnaroundMark, kind: 'issued' | 'open'): string => {
    const x = pct(m.months, axisMax);
    const shapes =
      `<circle class="bcn-permit-turnaround__hit" cx="${x}" cy="12" r="9"/>` +
      `<circle class="bcn-permit-turnaround__dot bcn-permit-turnaround__dot--${kind}" cx="${x}" cy="12" r="4"/>`;
    const label = esc(m.label);
    return m.href
      ? `<a class="bcn-permit-turnaround__mark" href="${esc(m.href)}" aria-label="${label}" data-ta-tip="${label}">${shapes}</a>`
      : `<g class="bcn-permit-turnaround__mark" role="img" aria-label="${label}" data-ta-tip="${label}">${shapes}</g>`;
  };
  // Open marks last: a hollow dot drawn under a filled one at the same span would vanish.
  const marks = row.issuedMarks.map((m) => mark(m, 'issued')).join('') + row.openMarks.map((m) => mark(m, 'open')).join('');
  return `<svg class="bcn-permit-turnaround__strip" width="100%" height="24">${grid}${median}${marks}</svg>`;
}

/** The Spread header: its name over the shared axis's tick labels, aligned to the strip. */
function makeAxisHeader(axisMax: number, ticks: number[]) {
  return class AxisHeader implements IHeaderComp {
    private gui!: HTMLElement;
    init(params: IHeaderParams): void {
      this.gui = document.createElement('div');
      this.gui.className = 'bcn-permit-turnaround__axis';
      const name = document.createElement('span');
      name.className = 'bcn-permit-turnaround__axis-name';
      name.textContent = params.displayName;
      const scale = document.createElement('span');
      scale.className = 'bcn-permit-turnaround__axis-scale';
      scale.setAttribute('aria-hidden', 'true');
      // The track is the scale's content box — the same width the strip's SVG spans —
      // so a tick's percentage lands on that tick's gridline.
      const track = document.createElement('span');
      track.className = 'bcn-permit-turnaround__axis-track';
      for (const t of ticks) {
        const tick = document.createElement('span');
        tick.className = 'bcn-permit-turnaround__axis-tick';
        tick.style.left = pct(t, axisMax);
        tick.textContent = String(t);
        track.append(tick);
      }
      scale.append(track);
      this.gui.append(name, scale);
    }
    getGui(): HTMLElement {
      return this.gui;
    }
    refresh(): boolean {
      return true;
    }
  };
}

export function setupPermitTurnaround(root: HTMLElement): void {
  const data = root.querySelector('[data-ta-data]');
  if (!data) return;
  const rows: TurnaroundGridRow[] = JSON.parse(data.textContent || '[]');
  const axisMax = Number(root.dataset.taAxisMax) || 1;
  const ticks: number[] = JSON.parse(root.dataset.taTicks || '[0]');

  // ── Level filter (external, so it composes with column filters + quick search) ──
  const toggle = root.querySelector<Toggle>('[data-ta-level]');
  let level = 'all';

  // ── Hover label: one esa-tooltip, moved onto the hovered mark ──
  const anchor = root.querySelector<HTMLElement>('[data-ta-tip-anchor]');
  const target = root.querySelector<HTMLElement>('[data-ta-tip-target]');
  const tooltip = root.querySelector<Tooltip>('[data-ta-tip]');
  const host = root.querySelector<HTMLElement>('[data-ta-host]');
  let current: Element | null = null;

  function showTip(el: Element): void {
    if (!anchor || !target || !tooltip) return;
    const text = el.getAttribute('data-ta-tip');
    if (!text) return;
    const r = el.getBoundingClientRect();
    const base = root.getBoundingClientRect();
    anchor.style.left = `${r.left - base.left}px`;
    anchor.style.top = `${r.top - base.top}px`;
    target.style.width = `${r.width}px`;
    target.style.height = `${r.height}px`;
    tooltip.text = text;
    tooltip.open = true;
    current = el;
  }

  function hideTip(): void {
    if (tooltip) tooltip.open = false;
    current = null;
  }

  const columnDefs: ColDef<TurnaroundGridRow>[] = [
    { field: 'level', headerName: 'Level', hide: true },
    { field: 'jurisdictionName', headerName: 'Jurisdiction Name', hide: true },
    { field: 'permit', headerName: 'Permit', flex: 2, minWidth: 170, wrapText: true, autoHeight: true },
    { field: 'jurisdiction', headerName: 'Jurisdiction', width: 130, minWidth: 120, wrapText: true, autoHeight: true },
    { colId: 'type', field: 'type', headerName: 'Type', width: 190, minWidth: 160 },
    { field: 'issued', headerName: 'Issued', width: 68, type: 'numericColumn', valueFormatter: (p) => (p.value ? String(p.value) : EM_DASH) },
    {
      field: 'median',
      headerName: 'Median',
      width: 120,
      wrapText: true,
      autoHeight: true,
      type: 'numericColumn',
      valueFormatter: (p) => p.data?.medianLabel ?? EM_DASH,
    },
    {
      field: 'rangeMin',
      headerName: 'Range',
      width: 168,
      wrapText: true,
      autoHeight: true,
      valueFormatter: (p) => p.data?.rangeLabel ?? EM_DASH,
    },
    {
      field: 'medianRounds',
      headerName: 'Typical Rounds',
      width: 80,
      type: 'numericColumn',
      valueFormatter: (p) => (p.value == null ? EM_DASH : String(p.value)),
    },
    {
      field: 'openCount',
      headerName: 'Open Now',
      width: 76,
      type: 'numericColumn',
      cellRenderer: (p: ICellRendererParams<TurnaroundGridRow>) => {
        if (!p.data?.openCount) return EM_DASH;
        const el = document.createElement('span');
        el.className = 'bcn-permit-turnaround__open';
        el.textContent = String(p.data.openCount);
        el.dataset.taTip = `Longest open: ${p.data.longestOpenLabel}`;
        return el;
      },
    },
    {
      colId: 'spread',
      headerName: 'Spread (Months)',
      // The widest flex share and a floor that keeps the whole 0 to axisMax scale on
      // screen: at 1440 the fixed columns plus these floors fit the card without scroll.
      flex: 3,
      minWidth: 240,
      sortable: false,
      resizable: false,
      wrapHeaderText: false,
      autoHeaderHeight: false,
      headerComponent: makeAxisHeader(axisMax, ticks),
      headerClass: 'bcn-permit-turnaround__spread-head',
      cellClass: 'bcn-permit-turnaround__spread-cell',
      // CSV carries the spans as text; quick search ignores them.
      valueGetter: (p) => {
        if (!p.data) return '';
        const issued = p.data.issuedMarks.map((m) => m.months).join(', ');
        const open = p.data.openMarks.map((m) => m.months).join(', ');
        return [issued && `Issued ${issued}`, open && `Open ${open}`].filter(Boolean).join('; ');
      },
      getQuickFilterText: () => '',
      cellRenderer: (p: ICellRendererParams<TurnaroundGridRow>) => {
        const plot = document.createElement('div');
        plot.className = 'bcn-permit-turnaround__plot';
        if (p.data) plot.innerHTML = stripSvg(p.data, axisMax, ticks);
        return plot;
      },
    },
  ];

  const gridOptions: GridOptions<TurnaroundGridRow> = {
    theme: beaconTheme,
    rowData: rows,
    columnDefs,
    getRowId: (p) => p.data.id,
    includeHiddenColumnsInQuickFilter: true,
    defaultColDef: {
      sortable: true,
      resizable: true,
      // No column funnels: the search field and the Level toggle are this grid's filters.
      filter: false,
      suppressHeaderMenuButton: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
    },
    isExternalFilterPresent: () => level !== 'all',
    doesExternalFilterPass: (node) => node.data?.level.toLowerCase() === level,
    onGridSizeChanged: (e) => e.api.setColumnsVisible(['type'], e.clientWidth >= TYPE_COLUMN_MIN_WIDTH),
    onBodyScroll: () => hideTip(),
  };

  const handle = mountBeaconGrid({
    mount: root,
    prefix: 'ta',
    gridOptions,
    csvName: 'permit-turnaround.csv',
    totalRows: () => rows.length,
  });
  if (!handle) return;
  const { api } = handle;

  toggle?.addEventListener('change', (e) => {
    level = (e as CustomEvent).detail?.value ?? toggle.value ?? 'all';
    api.onFilterChanged();
  });
  // Clear Filters clears the column filters (mountBeaconGrid); the Level toggle is
  // a filter too, so it resets with them.
  root.querySelector('[data-ta-clear-filters]')?.addEventListener('click', () => {
    level = 'all';
    if (toggle) toggle.value = 'all';
    api.onFilterChanged();
  });

  const tipFrom = (node: EventTarget | null): Element | null =>
    node instanceof Element ? node.closest('[data-ta-tip]') : null;

  host?.addEventListener('pointerover', (e) => {
    const el = tipFrom(e.target);
    if (el && el !== current) showTip(el);
  });
  host?.addEventListener('pointerout', (e) => {
    if (!current) return;
    const next = e.relatedTarget;
    if (next instanceof Node && current.contains(next)) return;
    hideTip();
  });
  host?.addEventListener('focusin', (e) => {
    const el = tipFrom(e.target);
    if (el) showTip(el);
  });
  host?.addEventListener('focusout', () => hideTip());
}
