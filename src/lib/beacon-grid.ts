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
import { themeQuartz, iconOverrides } from 'ag-grid-community';
import type { ICellRendererParams } from 'ag-grid-community';

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
 * QUIET LIGHT HEADER (Andy, 2026-07-30). A page grid owns its viewport and can
 * afford a filled band; a card-hosted grid already sits under the card's own
 * title, and on an ESA-admin page under a charcoal one, so a filled band made
 * the card read as two stacked chrome bars — teal under charcoal, or charcoal
 * under charcoal once the two were matched. Both are gone. The header is the
 * card's white with dark semibold labels and a hairline under the row, so a
 * section reads title → columns → rows in one descent, and the card band is the
 * only dark thing on the card. Everything else is beaconTheme's: same font,
 * same 13px, same accent, same zebra, same borders.
 *
 * The corners also square-to-round: beaconTheme squares its bottom pair because
 * a page grid has the download/record-count strip welded under it, and a
 * card-hosted grid ends at its last row.
 */
export const settingsTheme = beaconTheme.withParams({
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

/** Underlined teal link cell (the Name / Commitment / Source Document columns). */
export function linkRenderer(p: ICellRendererParams) {
  const el = document.createElement('a');
  el.className = 'bcn-grid-name';
  el.href = '#';
  el.textContent = String(p.value ?? '');
  el.addEventListener('click', (e) => e.preventDefault());
  return el;
}
