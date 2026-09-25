// Shared state for the Notifications & Daily Logs views (matrix + timeline).
//
// BcnFieldDocFilters owns the controls and broadcasts FILTER_EVENT / VIEW_EVENT on
// `document`; each view applies the same predicate and order to its own rows through
// applyFieldDocFilter(). Rows carry the same data-* attributes in both views
// (rowAttrs), so the two can never disagree about what a filter keeps.
//
// Imported by .astro frontmatter (rowAttrs, sortHoles) AND by client scripts, so it
// imports types only from the fixture — never the data.
import type { DocKind, HoleSummary } from '../data/field-notifications-fixture';

export type FacetKey = 'status' | 'agreement' | 'rig' | 'county';
export type SortKey = 'start' | 'missing' | 'id';
export type FieldDocView = 'matrix' | 'timeline';

export interface FieldDocFilterState {
  query: string;
  facets: Record<FacetKey, string[]>;
  sort: SortKey;
}

/** Row → record, optionally aimed at one document or one drill day. */
export interface FieldDocSelectDetail {
  holeId: string;
  kind?: DocKind;
  day?: string;
}

export const FILTER_EVENT = 'field-doc-filter';
export const VIEW_EVENT = 'field-doc-view';
export const SELECT_EVENT = 'field-doc-select';

export const FIELD_DOC_VIEWS: FieldDocView[] = ['matrix', 'timeline'];

const UNSCHEDULED_START = '9999-12-31';

const startKey = (h: HoleSummary) =>
  h.location.schedule.kind === 'scheduled' ? h.location.schedule.start : UNSCHEDULED_START;

/** The data-* attributes every filterable row carries, in either view. */
export function rowAttrs(h: HoleSummary): Record<string, string | number> {
  const loc = h.location;
  return {
    'data-fd-row': '',
    'data-hole': loc.id,
    'data-status': h.status,
    'data-agreement': loc.agreement,
    'data-rig': loc.rig,
    'data-county': loc.county,
    'data-start': startKey(h),
    'data-missing': h.missing,
    'data-search': `${loc.id} ${loc.property}`.toLowerCase(),
  };
}

type RowData = { hole: string; start: string; missing: number };

/** One ordering for SSR and client: unscheduled holes always last in their batch. */
function compare(a: RowData, b: RowData, sort: SortKey): number {
  const au = a.start === UNSCHEDULED_START;
  const bu = b.start === UNSCHEDULED_START;
  if (au !== bu) return au ? 1 : -1;
  if (sort === 'missing') return b.missing - a.missing || a.start.localeCompare(b.start) || a.hole.localeCompare(b.hole);
  if (sort === 'id') return a.hole.localeCompare(b.hole);
  return a.start.localeCompare(b.start) || a.hole.localeCompare(b.hole);
}

/** Server-side: the default order, so the page is right before any script runs. */
export function sortHoles(holes: HoleSummary[], sort: SortKey = 'start'): HoleSummary[] {
  const data = (h: HoleSummary): RowData => ({ hole: h.location.id, start: startKey(h), missing: h.missing });
  return [...holes].sort((a, b) => compare(data(a), data(b), sort));
}

const rowData = (r: HTMLElement): RowData => ({
  hole: r.dataset.hole ?? '',
  start: r.dataset.start ?? UNSCHEDULED_START,
  missing: Number(r.dataset.missing ?? 0),
});

function passes(r: HTMLElement, s: FieldDocFilterState): boolean {
  const d = r.dataset;
  if (s.query && !(d.search ?? '').includes(s.query)) return false;
  if (s.facets.status.length && !s.facets.status.includes(d.status ?? '')) return false;
  if (s.facets.agreement.length && !s.facets.agreement.includes(d.agreement ?? '')) return false;
  if (s.facets.rig.length && !s.facets.rig.includes(d.rig ?? '')) return false;
  if (s.facets.county.length && !s.facets.county.includes(d.county ?? '')) return false;
  return true;
}

/**
 * Filter and order the rows under `root`. Rows live inside [data-fd-group] containers
 * (a tbody, a div); each is reordered in place and hidden when it fails, and a group
 * with nothing left hides too. Returns the number of rows shown.
 */
export function applyFieldDocFilter(root: HTMLElement, s: FieldDocFilterState): number {
  let shown = 0;
  for (const g of root.querySelectorAll<HTMLElement>('[data-fd-group]')) {
    const rows = [...g.querySelectorAll<HTMLElement>(':scope > [data-fd-row]')].sort((a, b) =>
      compare(rowData(a), rowData(b), s.sort),
    );
    let visible = 0;
    for (const r of rows) {
      g.appendChild(r);
      const ok = passes(r, s);
      r.hidden = !ok;
      if (ok) visible += 1;
    }
    g.hidden = visible === 0;
    shown += visible;
  }
  return shown;
}
