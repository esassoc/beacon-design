// Global Search — the single search index, shared by the ⌘K omnibox (BcnOmniSearch)
// AND the full results page (/prototypes/global-search → BcnSearchResults). One dataset,
// two surfaces, so a record reads identically whether it surfaces in the palette or on
// the page.
//
// FULL-TEXT: commitments + requirements carry a `body` (real Condition-of-Approval text
// / requirement text). Matching searches title + subtitle + body, mirroring Beacon's
// Document Review "Commitment Search" (ID/title/body). When a hit is in the body only,
// both surfaces render a highlighted snippet of the matched context.
//
// REAL DATA: titles + bodies are drawn from the live fixtures the other prototypes run
// on — the 3600 Alameda Avenue Project FEIR requirement export (requirements.csv), the
// DCP commitments register (commitment-text.ts: AES/AG Condition-of-Approval text), and
// the geotech monitoring export (monitoring.ts). `url`s are root-relative and base-less
// — wrap with withBase() at the point of navigation/render.
//
// COMMITMENTS are the FULL DCP register (375), loaded from the real CSV export via
// dcp-commitments.json (regenerate with scripts/parse-commitments — see that file).
// Code · Title · full Commitment Text are all searchable.
import dcpCommitmentsData from './dcp-commitments.json';

/** A facet the search narrows to. `icon` is inner Lucide SVG markup (no <svg> wrapper). */
export interface SearchScope {
  id: string;
  label: string;
  icon: string;
}

/** A searchable record. Falls back to its scope's icon when `icon` is omitted. */
export interface SearchEntity {
  id: string;
  title: string;
  subtitle?: string;
  /** Commitment ID — rendered as a purple badge before the title (on commitments and
   *  their requirements) and folded into the searchable text. */
  code?: string;
  /** id of the SearchScope this entity belongs to. */
  scope: string;
  /** Root-relative, base-less route — wrap with withBase() to navigate. */
  url?: string;
  /** Right-aligned secondary text (status / phase / date). */
  meta?: string;
  /** Full body text for FULL-TEXT matching. A highlighted snippet of the match shows
   *  when the query hits the body but not the title/subtitle. */
  body?: string;
  /** The body as structured blocks (paragraphs / list items). When present, the results
   *  card renders the MATCHING blocks as separate paragraphs instead of a flat snippet. */
  blocks?: string[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Scopes — the six the team named + Components, Work Areas & Observations. Order
// here is the group order in both surfaces. Icons are inner Lucide path markup.
// ─────────────────────────────────────────────────────────────────────────────
export const SCOPES: SearchScope[] = [
  {
    id: 'source-documents',
    label: 'Source Documents',
    icon: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
  },
  {
    id: 'commitments',
    label: 'Commitments',
    icon: '<path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m3 15 2 2 4-4"/>',
  },
  {
    id: 'requirements',
    label: 'Requirements',
    icon: '<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>',
  },
  {
    id: 'actions',
    label: 'Actions',
    icon: '<path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5"/><path d="m9 11 3 3L22 4"/>',
  },
  {
    id: 'components',
    label: 'Components',
    icon: "<rect width='7' height='7' x='3' y='3' rx='1'/><rect width='7' height='7' x='14' y='3' rx='1'/><rect width='7' height='7' x='14' y='14' rx='1'/><rect width='7' height='7' x='3' y='14' rx='1'/>",
  },
  {
    id: 'evidence',
    label: 'Evidence of Compliance',
    icon: '<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
  },
  {
    id: 'work-areas',
    label: 'Work Areas',
    icon: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  },
  {
    id: 'observations',
    label: 'Observations',
    icon: '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
  },
];

// Route constants — every result lands on a real prototype surface.
const R = {
  sourceDoc: '/prototypes/data-catalog-source-document',
  commitment: '/prototypes/data-catalog-commitment',
  requirement: '/prototypes/data-catalog-requirement',
  action: '/prototypes/data-catalog-action',
  siteClearance: '/prototypes/site-clearance',
  monitoring: '/prototypes/monitoring/dashboard',
  surveys: '/prototypes/monitoring/surveys',
  tracker: '/prototypes/requirement-tracker',
  permits: '/prototypes/permit-tracking',
  fish: '/prototypes/fish-studies',
};

// The full DCP commitment register, mapped from the CSV export. `code` (Commitment ID),
// `title`, and `body` (full Commitment Text) are the searchable fields; `category` rides
// along as non-searchable meta.
const DCP_COMMITMENTS: SearchEntity[] = (
  dcpCommitmentsData as Array<{ code: string; title: string; category: string; sourceDoc: string; blocks: string[] }>
).map((c, i) => ({
  id: `cm-dcp-${i}`,
  scope: 'commitments',
  code: c.code,
  title: c.title,
  blocks: c.blocks,
  body: c.blocks.join(' '), // flat text for matching + the omnibox one-line snippet
  meta: c.category || undefined,
  url: R.commitment,
}));

// ─────────────────────────────────────────────────────────────────────────────
// Entities — curated from the real fixtures (see header), EXCEPT commitments, which
// are the full DCP register (DCP_COMMITMENTS). Requirements carry representative `body`
// text so full-text search has something to find.
// ─────────────────────────────────────────────────────────────────────────────
export const ENTITIES: SearchEntity[] = [
  // ── Source Documents ──
  { id: 'sd-feir-3600', scope: 'source-documents', title: '3600 Alameda Avenue Project FEIR', subtitle: 'Final Environmental Impact Report · 130 requirements', meta: 'FEIR', url: R.sourceDoc },
  { id: 'sd-dcp-eir', scope: 'source-documents', title: 'Delta Conveyance Project EIR', subtitle: 'Environmental Impact Report', meta: 'EIR', url: R.sourceDoc },
  { id: 'sd-itp', scope: 'source-documents', title: 'Incidental Take Permit (ITP) 2081', subtitle: 'CDFW 2081(b) permit · 36 studies', meta: 'ITP', url: R.sourceDoc },
  { id: 'sd-biop', scope: 'source-documents', title: 'Biological Opinion — Delta Smelt', subtitle: 'USFWS Biological Opinion', meta: 'BiOp', url: R.sourceDoc },
  { id: 'sd-nbmp', scope: 'source-documents', title: 'Nesting Bird Management Plan', subtitle: 'Construction management plan', meta: 'Plan', url: R.sourceDoc },
  { id: 'sd-swppp', scope: 'source-documents', title: 'Stormwater Pollution Prevention Plan (SWPPP)', subtitle: 'Construction stormwater plan', meta: 'Plan', url: R.sourceDoc },

  // ── Commitments — the full DCP register (375), from dcp-commitments.json ──
  ...DCP_COMMITMENTS,

  // ── Requirements (real names from requirements.csv + representative body text) ──
  {
    id: 'rq-weap-dev', scope: 'requirements', code: 'MM-BIO-1', title: 'Develop WEAP Training', subtitle: 'Training & Education', meta: 'Pre-Construction', url: R.requirement,
    body: 'Develop the Worker Environmental Awareness Program training curriculum and materials covering sensitive biological resources, no-disturbance buffers, and the species-reporting protocol prior to the start of construction.',
  },
  {
    id: 'rq-weap-provide', scope: 'requirements', code: 'MM-BIO-1', title: 'Provide WEAP Training to all Project personnel', subtitle: 'Training & Education', meta: 'Construction', url: R.requirement,
    body: 'Provide WEAP training to all Project construction personnel before they begin work on site, and to new personnel before they start, documenting attendance on a sign-in sheet retained for the duration of construction.',
  },
  {
    id: 'rq-buffer', scope: 'requirements', code: 'MM-BIO-2', title: 'If bird nests are found, establish no-disturbance buffer zones', subtitle: 'Biological Resources', meta: 'Construction', url: R.requirement,
    body: 'Where active nests are identified, establish and flag no-disturbance buffer zones sized by the qualified biologist; restrict ground-disturbing activities, demolition, and vegetation removal within the buffer until the nest is no longer active.',
  },
  {
    id: 'rq-raptor-survey', scope: 'requirements', code: 'MM-BIO-2', title: 'Pre-construction survey for nesting raptors and migratory birds', subtitle: 'Biological Resources', meta: 'Pre-Construction', url: R.requirement,
    body: 'Conduct preconstruction surveys for nesting raptors and other migratory birds during the nesting season within the work area and a surrounding buffer, repeating surveys if a lapse in construction exceeds the protocol window.',
  },
  {
    id: 'rq-bat-assess', scope: 'requirements', code: 'MM-BIO-2', title: 'Pre-construction habitat assessment for bat roost sites', subtitle: 'Biological Resources', meta: 'Pre-Construction', url: R.requirement,
    body: 'Conduct a preconstruction habitat assessment of the Project area to characterize potential bat roosting habitat and identify potentially active roost sites in trees and structures prior to removal.',
  },
  {
    id: 'rq-dust-erosion', scope: 'requirements', code: 'AQ-1', title: 'Dust control measures — erosion', subtitle: 'Air Quality', meta: 'Construction', url: R.requirement,
    body: 'Implement dust control and soil-stabilization measures on graded and disturbed surfaces to control wind erosion, including watering, soil binders, and limiting simultaneous ground-disturbing activities.',
  },

  // ── Actions ──
  { id: 'ac-weap-schedule', scope: 'actions', title: 'Schedule WEAP training session with qualified biologist', subtitle: 'MM-BIO-1', meta: 'In Progress', url: R.action },
  { id: 'ac-retain-bio', scope: 'actions', title: 'Retain qualified biologist for nesting surveys', subtitle: 'MM-BIO-2', meta: 'Completed', url: R.action },
  { id: 'ac-fencing', scope: 'actions', title: 'Install no-disturbance buffer fencing at active nests', subtitle: 'MM-BIO-2', meta: 'Not Started', url: R.action },
  { id: 'ac-monthly-report', scope: 'actions', title: 'File monthly nesting-bird monitoring report', subtitle: 'MM-BIO-2', meta: 'In Progress', url: R.action },
  { id: 'ac-dust-watering', scope: 'actions', title: 'Apply dust-control watering on graded surfaces', subtitle: 'Air Quality', meta: 'In Progress', url: R.action },
  { id: 'ac-ag-easement', scope: 'actions', title: 'Coordinate agricultural easement acquisition', subtitle: 'AG-1', meta: 'Not Started', url: R.action },

  // ── Components (project work components a commitment applies to) ──
  { id: 'co-north-grading', scope: 'components', title: 'North Grading Area', subtitle: 'Work component · 3600 Alameda', meta: '8 commitments', url: R.commitment },
  { id: 'co-south-grading', scope: 'components', title: 'South Grading Area', subtitle: 'Work component · 3600 Alameda', meta: '6 commitments', url: R.commitment },
  { id: 'co-intake', scope: 'components', title: 'Intake Facilities', subtitle: 'Work component · DCP', meta: '21 commitments', url: R.commitment },
  { id: 'co-tunnel-shafts', scope: 'components', title: 'Tunnel Shaft Sites', subtitle: 'Work component · DCP', meta: '17 commitments', url: R.commitment },
  { id: 'co-bouldin', scope: 'components', title: 'Bouldin Island Complex', subtitle: 'Work component · DCP', meta: '12 commitments', url: R.commitment },
  { id: 'co-twin-cities', scope: 'components', title: 'Twin Cities Road Corridor', subtitle: 'Work component · DCP', meta: '9 commitments', url: R.commitment },

  // ── Evidence of Compliance ──
  { id: 'ev-weap-signin', scope: 'evidence', title: 'WEAP Training Sign-in Sheet — 2026-04-12.pdf', subtitle: 'MM-BIO-1 · Document', meta: 'Apr 12', url: R.action },
  { id: 'ev-nest-survey', scope: 'evidence', title: 'Preconstruction Nesting Bird Survey Report.pdf', subtitle: 'MM-BIO-2 · Report', meta: 'May 18', url: R.action },
  { id: 'ev-fence-photos', scope: 'evidence', title: 'Buffer Fencing Photo Log — DCTR2-DH-010', subtitle: 'MM-BIO-2 · Photos', meta: 'May 19', url: R.action },
  { id: 'ev-daily-log', scope: 'evidence', title: 'Biologist Daily Monitoring Log — Week 14', subtitle: 'MM-BIO-2 · Log', meta: 'Jun 04', url: R.action },
  { id: 'ev-dust-record', scope: 'evidence', title: 'Dust Control Watering Record — June.xlsx', subtitle: 'Air Quality · Record', meta: 'Jun', url: R.action },
  { id: 'ev-ag-deed', scope: 'evidence', title: 'Agricultural Land Easement — Recorded Deed.pdf', subtitle: 'AG-1 · Legal', meta: 'Mar 30', url: R.action },

  // ── Work Areas (geotech DH bore sites) ──
  { id: 'wa-dctr2-010', scope: 'work-areas', title: 'DCTR2-DH-010', subtitle: 'Twin Cities Road · Geotech bore', meta: 'Blocked', url: R.siteClearance },
  { id: 'wa-dcrai-009', scope: 'work-areas', title: 'DCRAI-DH-009', subtitle: 'Rail crossing · Geotech bore', meta: 'Cleared', url: R.siteClearance },
  { id: 'wa-dcrai-006', scope: 'work-areas', title: 'DCRAI-DH-006', subtitle: 'Rail crossing · Geotech bore', meta: 'Scheduled', url: R.siteClearance },
  { id: 'wa-dctr2-100', scope: 'work-areas', title: 'DCTR2-DH-100', subtitle: 'Twin Cities Road · Geotech bore', meta: 'Blocked', url: R.siteClearance },
  { id: 'wa-dcrds-294', scope: 'work-areas', title: 'DCRDS-DH-294', subtitle: 'Roadway · Geotech bore', meta: 'Cleared', url: R.siteClearance },
  { id: 'wa-dcbpp-066', scope: 'work-areas', title: 'DCBPP-DH-066', subtitle: 'Bouldin Island · Geotech bore', meta: 'Scheduled', url: R.siteClearance },

  // ── Observations (real species + sites from monitoring.ts) ──
  { id: 'ob-swha-010', scope: 'observations', title: "Swainson's Hawk nest — DCTR2-DH-010", subtitle: 'Nesting Bird · Active', meta: 'May 18', url: R.monitoring },
  { id: 'ob-cora-009', scope: 'observations', title: 'Common Raven nest — DCRAI-DH-009', subtitle: 'Nesting Bird · Active', meta: 'Jun 04', url: R.monitoring },
  { id: 'ob-kild-100', scope: 'observations', title: 'Killdeer nest — DCTR2-DH-100', subtitle: 'Nesting Bird · Active', meta: 'Jun', url: R.monitoring },
  { id: 'ob-mall-294', scope: 'observations', title: 'Mallard nest — DCRDS-DH-294', subtitle: 'Nesting Bird · Active', meta: 'Jun', url: R.monitoring },
  { id: 'ob-rodent-066', scope: 'observations', title: 'Rodent burrows — DCBPP-DH-066', subtitle: 'Biological Resource · Tracking', meta: '—', url: R.monitoring },
  { id: 'ob-swha-006', scope: 'observations', title: "Swainson's Hawk foraging — DCRAI-DH-006", subtitle: 'Biological Resource · Tracking', meta: '—', url: R.monitoring },
];

// ─────────────────────────────────────────────────────────────────────────────
// Matching + highlighting + snippets — shared by the omnibox and the results page so
// the two surfaces always agree.
// ─────────────────────────────────────────────────────────────────────────────

const haystackOf = (e: SearchEntity): string =>
  `${e.code ?? ''} ${e.title} ${e.subtitle ?? ''} ${e.body ?? ''}`.toLowerCase();

// Precomputed lowercased search text per entity — so a keystroke over the full DCP
// register (375 commitments × ~3KB body ≈ 1.3MB) is just N substring checks, never a
// re-lowercase of the whole corpus.
const HAYSTACK = new Map(ENTITIES.map((e) => [e.id, haystackOf(e)]));

/** Case-insensitive substring match across code + title + subtitle + body (full-text). */
export function matchEntities(query: string, entities: SearchEntity[] = ENTITIES): SearchEntity[] {
  const q = query.toLowerCase().trim();
  if (!q) return entities;
  return entities.filter((e) => (HAYSTACK.get(e.id) ?? haystackOf(e)).includes(q));
}

/** True when the query hits the body but NOT the code/title/subtitle — i.e. a full-text-
 *  only match, the case where a snippet earns its keep. */
export function isBodyOnlyMatch(entity: SearchEntity, query: string): boolean {
  const q = query.toLowerCase().trim();
  if (!q || !entity.body) return false;
  const inHead = `${entity.code ?? ''} ${entity.title} ${entity.subtitle ?? ''}`.toLowerCase().includes(q);
  return !inHead && entity.body.toLowerCase().includes(q);
}

const HTML_ESCAPE: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const escapeHtml = (s: string): string => s.replace(/[&<>"']/g, (c) => HTML_ESCAPE[c]);
const escapeRegex = (s: string): string => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Escape `text`, then wrap each case-insensitive `query` hit in <mark>. Returns HTML. */
export function highlightHtml(text: string, query: string): string {
  const escaped = escapeHtml(text);
  const q = query.trim();
  if (!q) return escaped;
  return escaped.replace(new RegExp(`(${escapeRegex(q)})`, 'ig'), '<mark>$1</mark>');
}

/**
 * A highlighted, ellipsised preview of `body` for a query hit (HTML), or null when there
 * is no body match. Each match gets a ±`radius`-char window; windows that overlap merge,
 * and up to `maxWindows` separate windows are joined by " … " — so two matches that are
 * far apart in the source BOTH show, e.g. "…drainage infrastructure… … …drainage systems…".
 * `… ` / ` …` mark elided head/tail (or a 3rd+ window that was dropped).
 */
export function bodySnippet(body: string | undefined, query: string, radius = 70, maxWindows = 2): string | null {
  const q = query.trim();
  if (!body || !q) return null;
  const lc = body.toLowerCase();
  const lq = q.toLowerCase();

  const idxs: number[] = [];
  for (let i = lc.indexOf(lq); i !== -1; i = lc.indexOf(lq, i + lq.length)) idxs.push(i);
  if (!idxs.length) return null;

  // ±radius windows around each hit; merge any that touch/overlap.
  const windows: { start: number; end: number }[] = [];
  for (const idx of idxs) {
    const start = Math.max(0, idx - radius);
    const end = Math.min(body.length, idx + q.length + radius);
    const last = windows[windows.length - 1];
    if (last && start <= last.end + 1) last.end = Math.max(last.end, end);
    else windows.push({ start, end });
  }

  const shown = windows.slice(0, maxWindows);
  const pieces = shown.map((w) => highlightHtml(body.slice(w.start, w.end), q));
  const lead = shown[0].start > 0 ? '… ' : '';
  const tail = shown[shown.length - 1].end < body.length || windows.length > shown.length ? ' …' : '';
  return lead + pieces.join(' … ') + tail;
}

export interface ScopeGroup {
  scope: SearchScope;
  items: SearchEntity[];
}

/** Group matched entities under their scope, preserving SCOPES order; drops empty groups. */
export function groupByScope(entities: SearchEntity[]): ScopeGroup[] {
  return SCOPES
    .map((scope) => ({ scope, items: entities.filter((e) => e.scope === scope.id) }))
    .filter((g) => g.items.length > 0);
}

// ─────────────────────────────────────────────────────────────────────────────
// Inline autocomplete ("type-ahead") — a frequency-ranked word vocabulary built from
// every title + subtitle + body, so the omnibox can ghost-complete the word you're
// typing (the grey suffix after the caret).
// ─────────────────────────────────────────────────────────────────────────────
const VOCAB_STOP = new Set([
  'the', 'and', 'for', 'will', 'with', 'within', 'that', 'this', 'from', 'are', 'any',
  'all', 'each', 'not', 'its', 'per', 'via', 'use', 'used', 'may', 'can', 'out', 'off',
  'due', 'has', 'have', 'been', 'their', 'they', 'other', 'into', 'than', 'such', 'when',
  'where', 'which', 'while', 'until', 'upon', 'these', 'those', 'also', 'including',
]);

const VOCAB: string[] = (() => {
  const counts = new Map<string, number>();
  for (const e of ENTITIES) {
    const text = `${e.title} ${e.subtitle ?? ''} ${e.body ?? ''}`.toLowerCase();
    for (const w of text.split(/[^a-z]+/)) {
      if (w.length < 3 || VOCAB_STOP.has(w)) continue;
      counts.set(w, (counts.get(w) ?? 0) + 1);
    }
  }
  // Most frequent first, ties broken alphabetically → deterministic predictions.
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([w]) => w);
})();

/**
 * Inline-autocomplete the LAST word being typed: returns the predicted SUFFIX (the grey
 * ghost text shown after the caret), or '' when nothing fits. Drawn from the most frequent
 * vocabulary word that starts with the partial word — e.g. "fledg" → "ed", "constru" → "ction".
 */
export function predictCompletion(query: string): string {
  const m = query.match(/([A-Za-z]+)$/);
  if (!m) return '';
  const partial = m[1].toLowerCase();
  for (const word of VOCAB) {
    if (word.length > partial.length && word.startsWith(partial)) return word.slice(partial.length);
  }
  return '';
}
