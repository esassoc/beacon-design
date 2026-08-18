// Beacon "gold-star" AG Grid theme + cell renderers — the shared client-side grid
// kit for the spoke's data-catalog grids. Ported verbatim from esassoc/Beacon
// (Beacon.Web/.../ag-grid/beacon-grid-theme.ts): teal header, DM Sans, ESA-orange
// accent, Lucide funnel filter icon. Literal hex (each annotated with the Beacon
// design token it mirrors) because AG Grid resolves theme params at config time and
// can't read CSS vars.
//
// Extracted from requirement-tracker.astro so the Actions list + the Action detail
// page's implementations grid share ONE theme instead of triple-duplicating it.
// Import from a page's client <script>:
//   import { beaconTheme, makeStatusRenderer, linkRenderer } from '../../lib/beacon-grid';
import { themeQuartz, iconOverrides, createGrid, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import type { GridApi, GridOptions, ICellRendererParams } from 'ag-grid-community';

const lucideFunnelSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>';

const beaconIconOverrides = iconOverrides({
  type: 'image',
  mask: true,
  icons: { filter: { svg: lucideFunnelSvg }, filterActive: { svg: lucideFunnelSvg } },
});

export const beaconTheme = themeQuartz.withPart(beaconIconOverrides).withParams({
  fontFamily: 'DM Sans, sans-serif',
  headerFontFamily: 'DM Sans, sans-serif',
  accentColor: '#f9a134', // ESA orange / --color-orange-400
  foregroundColor: '#3d3d3d', // gray-900
  headerBackgroundColor: '#005862', // teal-900 / --primary
  headerTextColor: '#ffffff',
  headerFontSize: '13px',
  headerFontWeight: 600,
  headerHeight: 48,
  rowHeight: 44,
  dataFontSize: '13px',
  oddRowBackgroundColor: '#fafafa', // gray-50
  rowHoverColor: '#effefb', // teal-50
  borderColor: '#dcdcdc', // gray-200
  wrapperBorder: '1px solid #dcdcdc', // gray-200
  wrapperBorderRadius: '4px 4px 0 0',
  borderRadius: '4px',
  headerColumnResizeHandleColor: 'rgba(255, 255, 255, 0.2)',
  checkboxCheckedBackgroundColor: '#f9a134', // ESA orange / --color-orange-400
});

/**
 * The card-hosted variant, for grids that sit INSIDE a card body (the Unified
 * Settings collection sections and the Operations run history) rather than
 * owning the page. ONE theme for that surface — there is no ESA-admin variant.
 *
 * TWO settings variants (Andy, 2026-07-30). A TENANT page's card grid keeps the
 * prod teal header — the beacon-grid identity — because the card band above it is
 * light and the teal is the only chrome bar. An ESA page's card sits under the
 * charcoal band, where any filled grid header stacked a second dark bar (teal
 * under charcoal, or charcoal under charcoal once the two were matched), so the
 * ESA variant runs a QUIET LIGHT header: the card's white, dark semibold labels,
 * a hairline doing the band's job — title → columns → rows in one descent, the
 * card band the only dark thing. Everything else is beaconTheme's: same font,
 * same 13px, same accent, same zebra, same borders. Consumers pick by
 * `host.closest('[data-esa-surface]')`.
 *
 * Both square-to-round the corners: beaconTheme squares its bottom pair because a
 * page grid has the download/record-count strip welded under it, and a
 * card-hosted grid ends at its last row.
 */
export const settingsTheme = beaconTheme.withParams({
  wrapperBorderRadius: '4px',
});

export const settingsEsaTheme = beaconTheme.withParams({
  wrapperBorderRadius: '4px',
  headerBackgroundColor: '#ffffff', // the card body's own surface
  headerTextColor: '#3d3d3d', // gray-900 — the same ink the rows carry
  headerRowBorder: '1px solid #dcdcdc', // gray-200, the hairline that does the band's job
  // The teal band's white handle is invisible on white; the hairline's gray is not.
  headerColumnResizeHandleColor: '#dcdcdc', // gray-200
});

/** Status metadata: a label + a literal hex (kept in sync with --bcn-status-* by value). */
export type StatusMeta = Record<string, { label: string; hex: string }>;

/**
 * Build a status-chip cell renderer for a given status map. The chip mirrors the
 * tracker's .bcn-grid-chip (token-tinted pill + status dot); the page must ship the
 * matching :global(.bcn-grid-chip) CSS (AG Grid injects cells outside Astro's scope).
 */
export function makeStatusRenderer(statusMeta: StatusMeta) {
  return (p: ICellRendererParams) => {
    const meta = statusMeta[p.value as string];
    if (!meta) return '';
    const el = document.createElement('span');
    el.className = 'bcn-grid-chip';
    el.style.setProperty('--_chip', meta.hex);
    el.innerHTML = `<span class="bcn-grid-chip__dot"></span>${meta.label}`;
    return el;
  };
}

/** Options for {@link makeQuietChipRenderer}. */
export interface QuietChipOptions {
  /**
   * Row field holding the chip's tone key, stamped on the chip as `data-tone`. The
   * DISPLAYED value stays the cell's own — so the column sorts, filters, and reads as
   * the label, while the tone rides beside it as a separate stored field.
   */
  toneField?: string;
  /** The class the consumer styles `:global` (AG Grid injects cells outside Astro's scope). */
  className?: string;
  /** A node placed ahead of the label for a given tone — e.g. a cloned SSR spinner. */
  lead?: (tone: string) => Node | null;
}

/**
 * A quiet chip cell — hairline border, surface fill, tone stamped for the consumer's
 * CSS. The sibling of {@link makeStatusRenderer}: that one draws the data-catalog
 * grids' tinted dot-pill from a hex map, this one draws the settings surface's quieter
 * bordered chip and leaves every color to the page, so a chip can be toned off the
 * theme's semantic tokens instead of a literal.
 */
export function makeQuietChipRenderer(options: QuietChipOptions = {}) {
  const { toneField, className = 'bcn-grid-quiet-chip', lead } = options;
  return (p: ICellRendererParams) => {
    const label = p.value == null ? '' : String(p.value);
    if (!label) return '';
    const el = document.createElement('span');
    el.className = className;
    const tone = toneField ? String(p.data?.[toneField] ?? '') : '';
    if (tone) el.dataset.tone = tone;
    const leadNode = tone ? lead?.(tone) : null;
    if (leadNode) el.append(leadNode);
    el.append(label);
    return el;
  };
}

// ── The grid-card mount ─────────────────────────────────────────────────────────
//
// Every carded grid in this spoke wires the SAME five things to AG Grid: the quick
// filter (plus its clear-x), clear-all-filters, CSV export, and a "Total Records / N
// filtered" pair. BcnComponentGrid and BcnWorkAreaBoard each had their own verbatim
// copy of that wiring, differing only in a data-attribute prefix — flagged by the
// decomposition review 2026-08-17. It lives here now, beside the themes and renderers
// the same two callers already share.
//
// What is deliberately NOT here: the card SHELL. The two grids place their chrome
// differently on purpose — the component index puts search in esa-card's `actions`
// slot, the work-area board puts it in an in-body toolbar so the bulk-selection bar
// can sit beside it rather than cover it (a reviewed decision, 2026-08-13). A single
// shell component would have to undo one of those layouts or grow a position prop
// that explains nothing. The markup stays in BcnGridChrome / BcnGridFooter, which each
// caller places where its own layout wants.

/** Modules register once per page, however many grids mount on it. */
let modulesRegistered = false;

export interface MountBeaconGridOptions<T> {
  /** The section root. Every handle is queried WITHIN it, so N grids per page never collide. */
  mount: HTMLElement;
  /** Data-attribute prefix — must match the `prefix` given to BcnGridChrome / BcnGridFooter. */
  prefix: string;
  /** Everything grid-specific: theme, rowData, columnDefs, selection, row-click. */
  gridOptions: GridOptions<T>;
  /** Download filename. */
  csvName: string;
  /**
   * The CURRENT total, called on every count update rather than captured — a bulk
   * delete changes it, and a stale closure is how the footer and the grid drift apart.
   */
  totalRows: () => number;
  /** Extra work per count update, e.g. retitling a header badge. */
  onCountsChanged?: (counts: { total: number; displayed: number }) => void;
}

export interface BeaconGridHandle<T> {
  api: GridApi<T>;
  /** Re-read the counts — call after any mutation the grid didn't originate. */
  updateCounts: () => void;
}

/**
 * Create a carded grid and wire its standard chrome. Returns the api plus the
 * count refresher, so a caller that mutates rowData (bulk delete) can resync.
 *
 * The caller's own `onFirstDataRendered` / `onFilterChanged` are preserved and run
 * AFTER the count update — passing either one no longer silently replaces it.
 */
export function mountBeaconGrid<T>(options: MountBeaconGridOptions<T>): BeaconGridHandle<T> | null {
  const { mount, prefix, gridOptions, csvName, totalRows, onCountsChanged } = options;

  if (!modulesRegistered) {
    ModuleRegistry.registerModules([AllCommunityModule]);
    modulesRegistered = true;
  }

  const host = mount.querySelector<HTMLElement>(`[data-${prefix}-host]`);
  if (!host) return null;

  const totalEl = mount.querySelector<HTMLElement>(`[data-${prefix}-total]`);
  const filteredEl = mount.querySelector<HTMLElement>(`[data-${prefix}-filtered]`);

  // Takes the api off the event where one is available — `api` below is still in its
  // temporal dead zone if AG Grid fires first-render synchronously.
  const readCounts = (gridApi: GridApi<T>) => {
    const total = totalRows();
    const displayed = gridApi.getDisplayedRowCount();
    if (totalEl) totalEl.textContent = String(total);
    if (filteredEl) {
      if (displayed < total) {
        filteredEl.hidden = false;
        filteredEl.textContent = `Filtered Records: ${displayed}`;
      } else {
        filteredEl.hidden = true;
      }
    }
    onCountsChanged?.({ total, displayed });
  };

  const callerFirstRender = gridOptions.onFirstDataRendered;
  const callerFilterChanged = gridOptions.onFilterChanged;

  const api: GridApi<T> = createGrid(host, {
    ...gridOptions,
    onFirstDataRendered: (e) => {
      readCounts(e.api);
      callerFirstRender?.(e);
    },
    onFilterChanged: (e) => {
      readCounts(e.api);
      callerFilterChanged?.(e);
    },
  });

  // Search → quick filter, with its clear-x appearing only when there is something
  // to clear. esa-text-field emits `change` with the value on the event detail; the
  // `.value` read is the fallback for a plain input.
  const search = mount.querySelector<HTMLElement & { value: string }>(`[data-${prefix}-search]`);
  const searchClear = mount.querySelector<HTMLElement>(`[data-${prefix}-search-clear]`);
  search?.addEventListener('change', (e) => {
    const value = (e as CustomEvent).detail?.value ?? search.value ?? '';
    api.setGridOption('quickFilterText', value);
    if (searchClear) searchClear.hidden = !value;
  });
  searchClear?.addEventListener('click', () => {
    if (search) search.value = '';
    api.setGridOption('quickFilterText', '');
    searchClear.hidden = true;
  });

  mount
    .querySelector(`[data-${prefix}-clear-filters]`)
    ?.addEventListener('click', () => api.setFilterModel(null));
  mount
    .querySelector(`[data-${prefix}-download]`)
    ?.addEventListener('click', () => api.exportDataAsCsv({ fileName: csvName }));

  return { api, updateCounts: () => readCounts(api) };
}

/** Underlined teal link cell (the Name / Commitment / Source Document columns).
 * Prefers the column's formatted value (e.g. a compact date) when a
 * `valueFormatter` is set on the colDef; falls back to the raw value
 * otherwise, so existing callers with no formatter are unaffected. */
export function linkRenderer(p: ICellRendererParams) {
  const el = document.createElement('a');
  el.className = 'bcn-grid-name';
  el.href = '#';
  el.textContent = String(p.valueFormatted ?? p.value ?? '');
  el.addEventListener('click', (e) => e.preventDefault());
  return el;
}
