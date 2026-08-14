// COMPONENT DASHBOARD fixture — the level-3 record page for ONE component.
//
// The story it has to serve (2026-08-13 design call): a user working the geotech
// component and nothing else. They arrive from the project dashboard's starred
// box and everything narrows to this component — its tracking, its monitoring,
// its reporting, its work areas, its dates, its footprint. No project setup, no
// other components. "Let me focus my efforts on this one segment."
//
// So this module is deliberately THIN where the project fixture is thick. A
// component owns very little data of its own: its record fields, its milestone
// date overrides, its work areas, and its commitment-applicability decisions.
// Species, seasons, and construction activities are PROJECT-level and stay on
// the project dashboard — the component rail must not grow a copy of them.
//
// Scoping is by NAME, not id, because that is what the shipped action set
// carries (ProjectAction.where is a Component.Name string). Same TODAY as the
// project dashboard (2026-03-25) so the two surfaces agree to the day.

import sites from './geotech-sites.json';
import { TODAY, sig, type AreaPulse, type Module } from './project-dashboard';
import { PROJECT_ACTIONS, rollupOver, type ActionType, type ModuleRollup, type ProjectAction } from './project-actions';
import { MILESTONES } from './project-data';
import { DENSE } from './component-dashboard';
import type { EntityMark } from './entity-marks';

export { TODAY };

// ── The component record ────────────────────────────────────────────────────
// EVERY FIELD HERE EXISTS ON ComponentDto. That is the same rule the project
// dashboard's details card is held to (four facts were deleted from it for having
// no DB source), and it caught a fabrication at review on 2026-08-13: this record
// carried a `files` array, which ComponentDto has NO equivalent of. Component
// files in prod are `EvidenceOfComplianceFile` rows reached through evidence
// records — a different entity, which is why prod's Summary tab surfaces them in
// an evidence grid rather than as component fields. The array was invented and is
// gone. Before adding a fact here, find it on the DTO.
export interface ComponentRecord {
  name: string;
  /** Component.Description — the stored classifier line, not a narrated blurb. */
  description: string;
  /** ComponentStatus.Name. */
  status: 'Active' | 'On Hold' | 'Complete';
  /** Component.StartDate / ExpectedEndDate (ISO). */
  startDate: string;
  expectedEndDate: string;
  /** The parent project — the header eyebrow and the way back UP the tree. */
  project: { name: string; href: string };
  /** The identity mark (glyph × swatch), replacing the project header's cover. */
  mark: EntityMark;
  /** ComponentCustomFieldValue rows — tenant-defined, rendered as plain facts. */
  customFields: { label: string; value: string }[];
  /**
   * Component.Sources (SourceSimpleDto[]) — the source documents whose commitments
   * reach here. Rendered by the rail's "Source documents" row and its panel, NOT
   * by the details card: one home per fact.
   */
  sources: { name: string; href: string }[];
}

const COMPONENT_NAME = 'Bouldin Island Launch Shaft';

export const COMPONENT: ComponentRecord = {
  name: COMPONENT_NAME,
  description: 'Tunnel launch shaft — Bouldin Island',
  status: 'Active',
  startDate: '2025-09-02',
  expectedEndDate: '2029-11-30',
  project: { name: 'Delta Conveyance Project', href: '/prototypes/project-dashboard' },
  // A shaft on an island in the Delta: the anchor glyph on deep sky reads as a
  // place, and no sibling component in the fixture uses either axis.
  mark: { glyph: 'anchor', color: 'sky', style: 'fill' },
  customFields: [
    { label: 'Reach', value: 'Central Delta — Reach 3' },
    { label: 'Lead discipline', value: 'Geotechnical' },
    { label: 'Shaft type', value: 'Launch' },
  ],
  sources: [
    { name: 'Delta Conveyance Project Final EIR', href: '/prototypes/data-catalog-source-document' },
    { name: 'CDFW Incidental Take Permit', href: '/prototypes/data-catalog-source-document' },
    { name: 'USACE Section 404 Permit', href: '/prototypes/data-catalog-source-document' },
  ],
};

/**
 * Rail facts — the Component record's own fields, and nothing else.
 *
 * Reconciled against prod's Summary tab at review (2026-08-13). That tab shows the
 * project link, Status, Start Date, Expected End Date, Description, and the custom
 * field values; separately it lists Source Documents and Footprint Layers, and ends
 * in an evidence-of-compliance grid. This card carries only the first group, minus
 * two deliberate omissions:
 *
 *   · STATUS is not here. The header renders it as a chip a few inches above, and
 *     one fact does not need two homes on one screen.
 *   · The PROJECT LINK is not here. The breadcrumb trail carries it, which is
 *     where prod puts hierarchy too.
 *
 * Source documents and footprint layers live in the rail as their own rows, each
 * opening a panel — so they are on the page, just not restated inside this card.
 */
export const COMPONENT_FACTS: { label: string; value: string }[] = [
  { label: 'Start Date', value: 'Sep 2, 2025' },
  { label: 'Expected End Date', value: 'Nov 30, 2029' },
  ...COMPONENT.customFields,
];

// ── Work areas — derived from the REAL geotech coordinates ──────────────────
// The 231-point KMZ export already in this repo carries the project's actual
// drill-hole locations. Filtering to the Bouldin Island corridor yields 35 in a
// ~1.2 km-wide, 19 km-long band along the alignment — a genuine footprint for
// this component rather than invented dots, and enough rows that the grid's
// bulk actions have something to act on.
//
// Note what prod's work-area grid does NOT show: it fetches geometry, measure,
// and custom fields and renders only the identifier plus an edit and a delete
// button. The columns below are the fields that were always there.
const BOULDIN_BOX = { latMin: 38.05, latMax: 38.22, lonMin: -121.62, lonMax: -121.4 };

export type WorkAreaStatus = 'Cleared' | 'Scheduled' | 'In progress' | 'Not started';

export interface WorkArea {
  identifier: string;
  /** Exploration method (Boring / CPT / Water Quality Test). */
  method: string;
  depthFt: number;
  county: string;
  /** Right-of-entry agreement the site is covered by. */
  entryAgreement: string;
  parcelApn: string;
  /** WorkArea.MeasureValue + MeasureType — the disturbance footprint. */
  measureValue: number;
  measureType: 'acres';
  status: WorkAreaStatus;
  /** Planned start (ISO) — null when the site has no date yet. */
  plannedStart: string | null;
  lat: number;
  lon: number;
  href: string;
}

/**
 * Deterministic per-site variation. A stored fixture would be equally valid, but
 * deriving from the identifier keeps the module small and guarantees the same
 * grid on every demo run — no Math.random anywhere in this repo.
 */
const hash = (s: string): number => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
};

const WA_STATUS: WorkAreaStatus[] = ['Cleared', 'Scheduled', 'In progress', 'Not started'];

// Planned starts fan out across the same window the timeline covers, so a work
// area's date is comparable to an action's without a mental conversion.
const PLANNED_START_BASE = '2026-03-02';
const addDays = (iso: string, n: number): string => {
  const [y, m, d] = iso.split('-').map(Number);
  const t = Date.UTC(y, m - 1, d) + n * 86_400_000;
  const dt = new Date(t);
  const p = (v: number) => String(v).padStart(2, '0');
  return `${dt.getUTCFullYear()}-${p(dt.getUTCMonth() + 1)}-${p(dt.getUTCDate())}`;
};

type SiteFeature = {
  properties: { id: string; method: string; depthFt: number; parcelApn: string; county: string; entryAgreement: string };
  geometry: { coordinates: [number, number] };
};

export const WORK_AREAS: WorkArea[] = (sites.features as unknown as SiteFeature[])
  .filter((f) => {
    const [lon, lat] = f.geometry.coordinates;
    return (
      lat >= BOULDIN_BOX.latMin && lat <= BOULDIN_BOX.latMax && lon >= BOULDIN_BOX.lonMin && lon <= BOULDIN_BOX.lonMax
    );
  })
  .map((f) => {
    const p = f.properties;
    const h = hash(p.id);
    const status = WA_STATUS[h % 4];
    return {
      identifier: p.id,
      method: p.method,
      depthFt: p.depthFt,
      county: p.county,
      entryAgreement: p.entryAgreement,
      parcelApn: p.parcelApn,
      // 0.4–2.3 acres, one decimal — a credible drill-pad disturbance footprint.
      // Shifts are UNSIGNED: `h` exceeds 2^31 for most identifiers, and a signed
      // >> on those returns a negative, which produced -0.1 acre work areas.
      measureValue: Math.round((0.4 + ((h >>> 3) % 20) / 10) * 10) / 10,
      measureType: 'acres' as const,
      status,
      plannedStart: status === 'Not started' ? null : addDays(PLANNED_START_BASE, (h >>> 5) % 90),
      lat: f.geometry.coordinates[1],
      lon: f.geometry.coordinates[0],
      href: '/prototypes/site-clearance',
    };
  })
  .sort((a, b) => a.identifier.localeCompare(b.identifier));

export const WORK_AREA_COUNT = WORK_AREAS.length;

/** Total disturbance across the component's work areas — a real sum, not a label. */
export const WORK_AREA_ACRES = Math.round(WORK_AREAS.reduce((n, w) => n + w.measureValue, 0) * 10) / 10;

// ── Component-scoped actions ────────────────────────────────────────────────
/** The component's slice of the one project action set. */
export const COMPONENT_ACTIONS: ProjectAction[] = PROJECT_ACTIONS.filter((a) => a.where === COMPONENT_NAME);

/**
 * The component's rollup is the PROJECT's derivation over a narrower set — the
 * same function, not a parallel copy. Urgency must mean exactly one thing across
 * both dashboards, and two implementations of "overdue" would eventually
 * disagree. `rollupOver` is the shared body; `rollupFor` is it bound to the
 * whole project.
 */
export const componentRollupFor = (type: ActionType): ModuleRollup => rollupOver(COMPONENT_ACTIONS, type);

/**
 * This component's three-pulse summary, in the same anatomy the project
 * dashboard's component boxes carry. Notes come from the fixed signal vocabulary,
 * so no freeform prose reaches a surface.
 *
 * NOT rendered on the component dashboard: the header's pulse strip was cut at
 * review (2026-08-13) because the Tracking / Monitoring / Reporting cards sit
 * directly below it and carry the same figures with more precision. It stays
 * exported because this is what the PARENT surface — the project dashboard's box
 * for this component — shows, where those cards are not on screen. Keeping one
 * definition means the box and the page can never disagree.
 */
export const COMPONENT_PULSE: AreaPulse[] = [
  { area: 'tracking', label: 'Tracking', status: 'attention', note: sig.actionsOverdue(1) },
  { area: 'monitoring', label: 'Monitoring', status: 'critical', note: sig.surveyExpired('Survey', 'Mar 24') },
  { area: 'reporting', label: 'Reporting', status: 'on-track', note: sig.nothingDue() },
];

// ── The three modules, scoped to this component ─────────────────────────────
// Same Tracking / Monitoring / Reporting spine as the project dashboard — the
// component page is not a different information architecture, it is the same one
// pointed at a smaller set. What changes is the SUB-SURFACES: a component's
// links go to component-filtered views, because sending a user who is deep in
// one component back out to a project-wide list undoes the scoping the page
// exists to provide.
export const COMPONENT_MODULES: Module[] = [
  {
    id: 'tracking',
    title: 'Tracking',
    icon: 'tracking',
    links: [
      { label: 'Component Tracker', href: '/prototypes/requirement-tracker' },
      { label: 'Action Lists', href: '#action-lists' },
      // Component Setup is NOT listed here. It has its own card directly below
      // the modules, because it carries state (how much is decided) that a bare
      // link cannot show — and duplicating the door would give the same surface
      // two affordances on one screen.
    ],
    href: '/prototypes/requirement-tracker',
    cta: 'Open Tracking',
    firstSlice: true,
  },
  {
    id: 'monitoring',
    title: 'Monitoring',
    icon: 'monitoring',
    links: [
      { label: 'Observations', href: '/prototypes/monitoring/dashboard' },
      { label: 'Surveys', href: '/prototypes/monitoring/surveys' },
      { label: 'Site Clearance', href: '/prototypes/site-clearance' },
    ],
    href: '/prototypes/monitoring/dashboard',
    cta: 'Open Monitoring',
    firstSlice: false,
  },
  {
    id: 'reporting',
    title: 'Reporting',
    icon: 'reporting',
    links: [{ label: 'Report Center', href: '#report-center' }],
    href: '#report-center',
    cta: 'Open Reporting',
    firstSlice: false,
  },
];

// ── Map points — the component's footprint, drawn from its work areas ───────
// Component has NO boundary geometry in the product today: there is no geography
// column on Component, and the boundary epic (BCN-1582) is Ready-for-Dev with no
// commits. Its work areas, though, carry real coordinates that the work-areas
// endpoint already returns and every current surface throws away. So the
// footprint is the work areas — honest today, and exactly what BCN-1583 slice 1
// proposes to draw.
export const COMPONENT_MAP_POINTS = WORK_AREAS.map((w) => ({
  id: w.identifier,
  lat: w.lat,
  lon: w.lon,
  status: w.status,
  label: `${w.identifier} · ${w.method}`,
}));

export const COMPONENT_MAP_LEGEND = [
  { label: 'Cleared', color: 'var(--color-success)' },
  { label: 'Scheduled', color: 'var(--color-info)' },
  { label: 'In progress', color: 'var(--bcn-status-in-progress)' },
  { label: 'Not started', color: 'var(--bcn-status-not-started)' },
];

// ── Component milestones — the ONE thing a component really edits ───────────
// Prod gives a component exactly one editable tab of its own: milestones, where
// each project milestone can carry a component-specific date. The project's
// estimate stays visible beside it, because the override only means anything
// against what it overrides.
export interface ComponentMilestone {
  name: string;
  description: string;
  /** ProjectMilestone.EstimatedDate — read-through, never edited here. */
  projectDate: string;
  /** ComponentMilestone.EstimatedDate — null when this component doesn't override. */
  componentDate: string | null;
}

// Three overrides, each a milestone this component genuinely owns a date for,
// and each LATER than the project's estimate — which is the realistic case and
// the one worth designing against. A component that only ever matched the
// project would make the whole override concept look decorative.
const OVERRIDES: Record<string, string> = {
  'USACE Section 408 permission': '2026-05-06',
  'Start of construction — Bouldin Island': '2026-08-24',
  'Tunnel drive begins — Bouldin reach': '2028-02-28',
};

export const COMPONENT_MILESTONES: ComponentMilestone[] = MILESTONES.map((m) => ({
  name: m.name,
  description: m.description,
  projectDate: m.estimatedDate,
  componentDate: OVERRIDES[m.name] ?? null,
}));

export const MILESTONE_OVERRIDE_COUNT = COMPONENT_MILESTONES.filter((m) => m.componentDate).length;

/**
 * What the component's TIMELINE plots. A milestone's effective date here is the
 * component's override when one exists, otherwise the project's estimate —
 * because the timeline answers "when does this land for me", and a component
 * that has moved a date should see the date it moved to. The description records
 * which of the two is being shown, so an overridden mark is never mistaken for
 * the project's own schedule.
 */
export const COMPONENT_TIMELINE_MILESTONES = COMPONENT_MILESTONES.map((m) => ({
  name: m.name,
  description: m.componentDate ? `${m.description} · Component date` : m.description,
  estimatedDate: m.componentDate ?? m.projectDate,
}));

// ── Footprint layers — the ArcGIS layer picks scoped to this component ──────
// ComponentProjectFeatureServerLayer: which of the project's spatial layers this
// component draws. Read-only here; the layers themselves are managed in the
// Spatial Library zone.
export interface ComponentLayer {
  name: string;
  source: string;
  geometry: 'Point' | 'Polygon' | 'Line';
  visible: boolean;
}
export const COMPONENT_LAYERS: ComponentLayer[] = [
  { name: 'Work Areas', source: 'DCA Feature Server', geometry: 'Point', visible: true },
  { name: 'Tunnel Alignment', source: 'DCA Feature Server', geometry: 'Line', visible: true },
  { name: 'Parcel Boundaries', source: 'San Joaquin County GIS', geometry: 'Polygon', visible: false },
  { name: 'Levee Centerlines', source: 'DWR Open Data', geometry: 'Line', visible: false },
];

// ── The component-data rail ─────────────────────────────────────────────────
// Four rows, not the project's six. Species / seasons / construction activities
// are project-level and deliberately absent: a component that offered its own
// copy of them would imply an override that does not exist in the data model.
export type ComponentDataKey = 'component-info' | 'milestones' | 'sources' | 'layers';

export interface ComponentDataMeta {
  key: ComponentDataKey;
  label: string;
  meta?: string;
}

/**
 * THE COUNT RULE for this rail, fixed at review (2026-08-13): a BARE number is
 * how many things the panel contains, and anything narrower must say what it is
 * narrowing — "N of M". Footprint layers broke it by showing only the VISIBLE
 * layers as a bare 2 while its panel listed 4, which reads as a bug rather than
 * as a fact about visibility. Both rows that count a subset now use the same
 * explicit form, so a reader never has to guess which of the two a number means.
 */
export const COMPONENT_DATA_META: ComponentDataMeta[] = [
  { key: 'component-info', label: 'Component info' },
  { key: 'milestones', label: 'Milestones', meta: `${MILESTONE_OVERRIDE_COUNT} of ${COMPONENT_MILESTONES.length}` },
  { key: 'sources', label: 'Source documents', meta: String(COMPONENT.sources.length) },
  {
    key: 'layers',
    label: 'Footprint layers',
    meta: `${COMPONENT_LAYERS.filter((l) => l.visible).length} of ${COMPONENT_LAYERS.length}`,
  },
];

export const COMPONENT_UTILITIES = COMPONENT_DATA_META.map((m) => ({
  label: m.label,
  meta: m.meta,
  href: `?data=${m.key}`,
}));

// ── Sibling components — the prev/next walk in the breadcrumb bar ───────────
// Andy's tree: project → component index → component detail. Landing three
// levels down with no way sideways is a dead end, so the breadcrumb bar carries
// prev/next, matching prod's `<commitment-navigation>` which lives in that same bar.
//
// TWO THINGS THIS SET HAS TO SETTLE, both raised at review:
//
// ORDER — "next" is meaningless unless it agrees with a list the user has seen.
// This is sorted ALPHABETICALLY, which is the components index's stable ordering.
// It deliberately does NOT follow the index grid's default needs-attention sort:
// that ordering changes as work becomes overdue, so yesterday's "next" would be a
// different component today, and a back-and-forth walk could revisit or skip. A
// stable sequence is worth more here than a smart one.
//
// ACCESS — Component is `IAmComponentScoped`, and BeaconDbContext applies a global
// filter (`!_componentScopeActive || _inScopeComponentIDs.Contains(...)`) stamped
// per request by ComponentScopeMiddleware from the user's organization grants
// (BCN-1367/1368). Any list the client can obtain is therefore ALREADY the in-scope
// set, so prev/next cannot walk into a component the user may not see and needs no
// permission logic of its own. The house rule is see-all-unless-scoped: no grants
// means unrestricted, never fail-closed. In this fixture every component is in
// scope; a scoped user would simply get a shorter list and a smaller "N of M".
export interface SiblingComponent {
  name: string;
  href: string;
}

/** Every component the user may see, in the index's stable order. */
export const SIBLING_COMPONENTS: SiblingComponent[] = [...DENSE]
  .map((c) => ({ name: c.name, href: '/prototypes/component-dashboard' }))
  .sort((a, b) => a.name.localeCompare(b.name));

export const SIBLING_INDEX = SIBLING_COMPONENTS.findIndex((c) => c.name === COMPONENT_NAME);

export const SIBLINGS = {
  indexHref: '/prototypes/components',
  items: SIBLING_COMPONENTS,
  currentIndex: SIBLING_INDEX,
};
