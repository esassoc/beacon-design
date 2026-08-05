// Project Dashboard fixture — the logged-in PROJECT HOMEPAGE for a Beacon
// engagement. After sign-in the app lands the user on a project (default, first,
// or last-visited) and shows this page. It answers two questions: "where am I?"
// (a profile-style header anchors the project's identity) and "what should I do
// next?" (a criticality-elevated surface elevates ONLY the most critical items,
// project-wide — nothing falls through the cracks, but not everything rises here).
//
// The page is a FRONT DOOR to the four macro areas of Beacon — Tracking (the
// primary zone; Lists live here), Monitoring (Observations), Reporting (Reports),
// and the Setup Wizard. Detail belongs on the component dashboards, not here:
// projects like DCP can carry dozens of components, so STARRED components (3–5,
// active / top-of-mind) are the portals in, each with a high-level Tracking /
// Monitoring / Reporting pulse. Phase awareness is worn lightly — a header chip
// and per-component phase context, never a project-level filter.
//
// Content is invented-but-credible Delta Conveyance / DWR material and is
// DETERMINISTIC: every timing phrase is baked relative to a fixed TODAY, never
// computed from Date.now(), so each demo run renders identically. Status/pulse
// colors are VALUE-driven — each datum carries a token-reference `hex` the
// components read into an inline custom property, so the palette follows the theme.

import { PROJECT_DATA_META } from './project-data';
import type { ActionType } from './project-actions';

export const TODAY = '2026-03-25';

// ── The four macro areas the page is a front door to ────────────────────────
export type MacroArea = 'tracking' | 'monitoring' | 'reporting';

// ── Value-driven pulse status (rendered as dots / tints — never a left border) ─
export type PulseStatus = 'on-track' | 'attention' | 'critical' | 'quiet';
export interface PulseMeta {
  label: string;
  /** Token reference — read into `--_c`, so the theme (incl. dark mode) drives it. */
  hex: string;
}
export const PULSE_META: Record<PulseStatus, PulseMeta> = {
  'on-track': { label: 'On track', hex: 'var(--color-success)' },
  attention: { label: 'Attention', hex: 'var(--color-warning)' },
  critical: { label: 'Critical', hex: 'var(--color-danger)' },
  // Light gray, not mid gray (Andy, round 3): quiet rows keep their dot for
  // row-to-row consistency, but the dot recedes.
  quiet: { label: 'Quiet', hex: 'var(--bcn-status-not-started)' },
};

// ── Project identity — the profile header ("where am I") ─────────────────────
export interface ProjectFact {
  label: string;
  value: string;
}
export interface Project {
  name: string;
  tenant: string;
  code: string;
  /** The owning organization, spelled out — the header's eyebrow line. */
  org: string;
  description: string;
  /** Public-path (base-less) org logo — the DWR seal; component wraps with withBase(). */
  logo: string;
  /** Public-path (base-less) cover/hero image. */
  hero: string;
  /**
   * Current phase, worn lightly as a header chip. `key` is the pipeline stage the
   * Setup Wizard scopes its action-triage to (active phase).
   */
  phase: { key: PhaseKey; label: string; hex: string };
  facts: ProjectFact[];
}
export const PROJECT: Project = {
  name: 'Delta Conveyance Project',
  tenant: 'DWR',
  code: 'DCP',
  org: 'Department of Water Resources',
  // The project's REAL public description (Andy, round 10) — Project.Description.
  description:
    'The Delta Conveyance Project will modernize water infrastructure in the Sacramento-San Joaquin Delta by making physical improvements to how we capture and move water during wet years for use in dry years with a tunnel system. The Delta Conveyance Project is intended to restore the reliability of the State Water Project and ensure California’s largest supply of clean and affordable water for 27 million people and 750,000 acres of farmland is protected from earthquakes and climate-driven weather extremes.',
  logo: '/images/dcp/dwr-logo.png',
  hero: '/images/dcp/hero.jpeg',
  phase: { key: 'preconstruction', label: 'Pre-Construction', hex: 'var(--color-primary)' },
  // Every fact is a Project-record field (round 6: Lead agency, Region,
  // Components, and Tracking-since had no DB source — cut. The org line in the
  // header is Tenant.Name; files render below the facts from Project.Files).
  facts: [
    { label: 'Start Date', value: 'Jan 8, 2024' }, // Project.StartDate
    { label: 'End Date', value: 'Dec 31, 2043' }, // Project.EndDate
  ],
};

// Pipeline stages, in order — the Setup Wizard triages actions for the active
// phase and the one before it.
export type PhaseKey = 'permitting' | 'preconstruction' | 'construction' | 'restoration';

// ── The signal template vocabulary (Andy, round 6: no freeform prose) ─────────
// The rule engine emits (kind, params); the UI renders the kind's FIXED template.
// Every non-field string on this dashboard is produced by one of these functions
// over named params — dev implements the same vocabulary server-side. Freeform
// sentences ("ground disturbance not cleared", "revised haul-route agreement
// pending") are not in the vocabulary and so cannot appear on the surface.
export const sig = {
  /** survey-expired: a clearance/survey record past its valid-through date. */
  surveyExpired: (surveyName: string, date: string) => `${surveyName} expired ${date}`,
  /** action-overdue (rollup): count of actions past due. */
  actionsOverdue: (count: number) => `${count} overdue action${count === 1 ? '' : 's'}`,
  /** action-overdue (single, timing): days past due. */
  daysOverdue: (days: number) => `${days} day${days === 1 ? '' : 's'} overdue`,
  /** report-due (timing): due date inside the alert window. */
  reportDue: (days: number, date: string) => `Due in ${days} day${days === 1 ? '' : 's'} · ${date}`,
  /** tracking zero-state: completion figure. */
  actionsProgress: (complete: number, total: number) => `${complete} / ${total} actions`,
  /** monitoring zero-state: 30-day observation count. */
  obs30: (count: number) => `${count} obs · 30d`,
  /** reporting zero-state: nothing inside the alert window. */
  nothingDue: () => 'Nothing due',
  /** all-clear: no signals on the component. */
  onSchedule: () => 'On schedule',
};

// ── Starred components — the portals into active component dashboards ─────────
// Starred = active / top-of-mind (3–5). Each card is a portal into that
// component's dashboard, carrying a HIGH-high-level Tracking / Monitoring /
// Reporting pulse so the user reads the component's health across all three at a
// glance without leaving the homepage.
export interface AreaPulse {
  area: MacroArea;
  label: string;
  status: PulseStatus;
  /** Terse figure/phrase, e.g. "3 overdue", "11 obs · 30d". */
  note: string;
}
// Every card string maps to the Component DTO or a signal template (round 6):
//   name → Component.Name · description → Component.Description · status →
//   ComponentStatus.Name (shown only when not Active) · pulse notes → the
//   area's top-signal template, else the area's zero-state template.
// (The headline row was removed round 10 — the three pulses carry the story.)
export interface StarredComponent {
  name: string;
  /** Component.Description — the stored classifier line under the name. */
  description: string;
  /** ComponentStatus.Name — rendered beside the description when not "Active". */
  status: 'Active' | 'On Hold' | 'Complete';
  /** Exactly three pulses, in Tracking / Monitoring / Reporting order. */
  pulse: AreaPulse[];
  href: string;
}
const CMP_HREF = '/prototypes/component-dashboard';
export const STARRED_COMPONENTS: StarredComponent[] = [
  {
    name: 'Bouldin Island Launch Shaft',
    description: 'Tunnel launch shaft — Bouldin Island',
    status: 'Active',
    pulse: [
      { area: 'tracking', label: 'Tracking', status: 'attention', note: sig.actionsOverdue(3) },
      { area: 'monitoring', label: 'Monitoring', status: 'critical', note: sig.surveyExpired('Survey', 'Mar 24') },
      { area: 'reporting', label: 'Reporting', status: 'on-track', note: sig.nothingDue() },
    ],
    href: CMP_HREF,
  },
  {
    name: 'Intake B — North Delta',
    description: 'Screened intake — Sacramento River',
    status: 'Active',
    pulse: [
      { area: 'tracking', label: 'Tracking', status: 'attention', note: sig.actionsOverdue(1) },
      { area: 'monitoring', label: 'Monitoring', status: 'on-track', note: sig.obs30(6) },
      { area: 'reporting', label: 'Reporting', status: 'on-track', note: sig.nothingDue() },
    ],
    href: CMP_HREF,
  },
  {
    name: 'Southern Forebay & Pumping Plant',
    description: 'Forebay — Byron Tract',
    status: 'Active',
    pulse: [
      { area: 'tracking', label: 'Tracking', status: 'on-track', note: sig.actionsProgress(22, 30) },
      { area: 'monitoring', label: 'Monitoring', status: 'on-track', note: sig.obs30(11) },
      { area: 'reporting', label: 'Reporting', status: 'attention', note: sig.reportDue(7, 'Apr 1') },
    ],
    href: CMP_HREF,
  },
  {
    name: 'Twin Cities Complex',
    description: 'Tunnel shaft — staging',
    status: 'On Hold',

    pulse: [
      { area: 'tracking', label: 'Tracking', status: 'quiet', note: sig.actionsProgress(9, 21) },
      { area: 'monitoring', label: 'Monitoring', status: 'quiet', note: sig.obs30(2) },
      { area: 'reporting', label: 'Reporting', status: 'quiet', note: sig.nothingDue() },
    ],
    href: CMP_HREF,
  },
];

// ── The three MODULES — Tracking, Monitoring, Reporting ──────────────────────
// Promoted above Components and given criticality of their own (product
// meeting, 2026-08-04): "consider moving above components, or integrating
// critical status indicators directly into those modules rather than a separate
// 'Most Critical Now' section." So the standalone criticality card is gone and
// each module owns its type's urgent ACTIONS — the spine decision, applied.
//
// The Setup Wizard left this row: it is the project's setup PIPELINE, not a work
// area, and now renders as its own slim four-step card (bcn-setup-wizard-card).
//
// Everything here derives from PROJECT_ACTIONS via rollupFor() — the figures are
// counts of a real, filterable action set, never authored numbers.
export interface Module {
  id: ActionType;
  title: string;
  /** Semantic icon key the component maps to Lucide paths. */
  icon: ActionType;
  /** Named sub-surfaces within the area, rendered as quiet links. */
  links?: { label: string; href: string }[];
  href: string;
  cta: string;
  /**
   * Slice guidance (product meeting): Monitoring and Reporting modules — and the
   * red/yellow criticality treatment — are DEFERRED past the first slice
   * ("enough to ship without them"). The prototype shows the full framework;
   * `firstSlice` marks what ships first.
   */
  firstSlice: boolean;
}
export const MODULES: Module[] = [
  {
    id: 'tracking',
    title: 'Tracking',
    icon: 'tracking',
    links: [
      { label: 'Tracking Summary', href: '#tracking-summary' },
      { label: 'Project Tracking', href: '#project-tracking' },
      { label: 'Permit Tracking', href: '/prototypes/permit-tracking' },
      { label: 'Action Lists', href: '#action-lists' },
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
      { label: 'Monitoring Dashboard', href: '/prototypes/monitoring/dashboard' },
      { label: 'Observations', href: '#observations' },
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
    links: [
      { label: 'Report Center', href: '#report-center' },
      { label: 'Progress Report', href: '#progress-report' },
    ],
    href: '#report-center',
    cta: 'Open Reporting',
    firstSlice: false,
  },
];

// ── Setup Wizard — the four-step setup pipeline ──────────────────────────────
// Its own slim card (Andy, round 9), shaped like the wizard homepage's steps:
// Source Documents → Commitments → Requirements → Actions. The figures are the
// UN-TRIAGED pipeline — counts of existing entities not yet carried forward,
// never "actions to create" (unknowable until triage).
export interface WizardStepStat {
  label: string;
  value: number;
  /** Draws attention (amber dot) — work waiting on the user at this step. */
  attention?: boolean;
}
export interface WizardStep {
  n: number;
  label: string;
  /**
   * The step's entity color — Beacon's setup ramp, exposed globally as
   * --color-source / --color-commitment / --color-requirement / --color-action.
   * The wizard homepage numbers its steps in these; the dashboard card matches.
   */
  token: 'source' | 'commitment' | 'requirement' | 'action';
  /** Per-entity rollup (Andy, round 11) — counts of real records at this step. */
  stats: WizardStepStat[];
  href: string;
}
export const WIZARD_STEPS: WizardStep[] = [
  {
    n: 1,
    label: 'Source Documents',
    token: 'source',
    stats: [{ label: 'Created', value: 14 }],
    href: '#setup-source-documents',
  },
  {
    n: 2,
    label: 'Commitments',
    token: 'commitment',
    stats: [
      { label: 'Created', value: 212 },
      { label: 'Approved', value: 209 },
    ],
    href: '#setup-commitments',
  },
  {
    n: 3,
    label: 'Requirements',
    token: 'requirement',
    stats: [
      { label: 'Created', value: 486 },
      { label: 'Approved', value: 474 },
    ],
    href: '#setup-requirements',
  },
  {
    n: 4,
    label: 'Actions',
    token: 'action',
    stats: [
      // The un-triaged pipeline: requirements not yet carried into any action.
      { label: 'Requirements not in an action', value: 12, attention: true },
      { label: 'Created', value: 142 },
      { label: 'Approved', value: 138 },
    ],
    href: '#setup-actions',
  },
];
export const WIZARD_HREF = '#project-setup';

// ── Project map — the inset boundary map (product meeting: "we don't even have
// footprint geometry … you should be able to upload a boundary") ─────────────
// The prototype answers the ask with REAL geometry: src/data/dcp-geo.json is
// derived from the 231 real DCP geotech exploration coordinates (the client
// KMZ already in this repo) — a 0.05° latitude-binned centerline through the
// corridor, buffered ~2.4 km each side. It stands in for the boundary a project
// would UPLOAD once the spatial-data epic lands (KMZ / shapefile / GDB).
// Component markers sit on that alignment.
/**
 * The boundary's SOURCE, rendered as a field on the map card. Today it names the
 * derivation; once projects can upload geometry it names the uploaded file
 * (e.g. "DCP_Boundary_2026.kmz") in the same slot.
 */
export const BOUNDARY_SOURCE = 'Geotech exploration extent (derived)';

// ── Project data — the quiet utility rail (project-level CRUD) ────────────────
// Minimal utility text links, NOT the overly prominent PROD tabs. Every entry
// opens the SIDE PANEL (bcn-project-data-panel) via the ?data=<key> URL contract
// — the five data panels replace prod's project-details-layout tab pages
// outright (Andy, 2026-08-03), and Spatial Data opens a read-only layers panel
// whose management surface remains the Spatial Library zone (round 6). Labels
// and counts derive from the project-data fixture so the rail and its panels can
// never disagree.
export interface UtilityLink {
  label: string;
  meta?: string;
  href: string;
}
export const PROJECT_UTILITIES: UtilityLink[] = PROJECT_DATA_META.map((m) => ({
  label: m.label,
  meta: m.meta,
  href: `?data=${m.key}`,
}));
