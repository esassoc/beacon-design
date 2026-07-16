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
  description:
    'A new State Water Project conveyance facility — twin tunnels carrying water beneath the Delta from new North Delta intakes to the southern export facilities. Beacon is the system of record for every environmental commitment, monitoring observation, and compliance report across the project’s components.',
  logo: '/images/dcp/dwr-logo.png',
  hero: '/images/dcp/hero.jpeg',
  phase: { key: 'preconstruction', label: 'Pre-Construction', hex: 'var(--color-primary)' },
  facts: [
    { label: 'Lead agency', value: 'Department of Water Resources' },
    { label: 'Region', value: 'Sacramento–San Joaquin Delta' },
    { label: 'Components', value: '24 tracked · 4 starred' },
    { label: 'Tracking since', value: 'January 2024' },
  ],
};

// Pipeline stages, in order — the Setup Wizard triages actions for the active
// phase and the one before it.
export type PhaseKey = 'permitting' | 'preconstruction' | 'construction' | 'restoration';

// ── Most critical right now ("what should I do next") ────────────────────────
// Criticality — NOT "needs action" — is the elevation criterion. Few items, each
// genuinely critical, drawn PROJECT-WIDE (a critical item on a non-starred
// component still surfaces here). Each item is a first-class ENTITY — an
// observation, an action, or a report — rendered as a tangible entity card whose
// type icon makes what-kind-of-thing legible at a glance.
export type CriticalTier = 'critical' | 'urgent';
export type EntityType = 'observation' | 'action' | 'report';
export interface CriticalItem {
  id: string;
  tier: CriticalTier;
  /** The entity kind — drives the card's type icon + label. */
  entityType: EntityType;
  /** Commitment ID (actions) — rendered as the mono code chip prefixing the title. */
  code?: string;
  title: string;
  /** Component name, or "Project-wide". */
  where: string;
  /** Baked timing phrase (relative to TODAY). */
  timing: string;
  /** Render the timing in the danger color. */
  late?: boolean;
  href: string;
}
export const CRITICAL_NOW: CriticalItem[] = [
  {
    id: 'c1',
    tier: 'critical',
    entityType: 'observation',
    title: 'Nesting-bird resurvey lapsed — ground disturbance not cleared',
    where: 'Bouldin Island Launch Shaft',
    timing: 'Survey expired Mar 24',
    late: true,
    href: '/prototypes/component-dashboard',
  },
  {
    id: 'c2',
    tier: 'critical',
    entityType: 'report',
    title: 'Q1 ITP compliance report to CDFW — 2 sections still incomplete',
    where: 'Project-wide',
    timing: 'Due in 2 days · Apr 1',
    href: '#reporting',
  },
  {
    id: 'c3',
    tier: 'urgent',
    entityType: 'action',
    code: 'BIO-14',
    title: 'Exclusion-fencing inspection overdue',
    where: 'Intake B — North Delta',
    timing: '4 days overdue',
    late: true,
    href: '/prototypes/component-dashboard',
  },
];

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
export interface StarredComponent {
  name: string;
  /** Short classifier line under the name. */
  type: string;
  /** Light phase context (not a filter). */
  phaseLabel: string;
  /** The single most-important thing about this component right now. */
  headline: string;
  headlineStatus: PulseStatus;
  /** Exactly three pulses, in Tracking / Monitoring / Reporting order. */
  pulse: AreaPulse[];
  href: string;
}
const CMP_HREF = '/prototypes/component-dashboard';
export const STARRED_COMPONENTS: StarredComponent[] = [
  {
    name: 'Bouldin Island Launch Shaft',
    type: 'Tunnel launch shaft · Bouldin Island',
    phaseLabel: 'Pre-Construction',
    headline: 'Resurvey lapsed — ground disturbance work blocked',
    headlineStatus: 'critical',
    pulse: [
      { area: 'tracking', label: 'Tracking', status: 'attention', note: '3 overdue actions' },
      { area: 'monitoring', label: 'Monitoring', status: 'critical', note: 'Resurvey required' },
      { area: 'reporting', label: 'Reporting', status: 'on-track', note: 'Reports current' },
    ],
    href: CMP_HREF,
  },
  {
    name: 'Intake B — North Delta',
    type: 'Screened intake · Sacramento River',
    phaseLabel: 'Pre-Construction',
    headline: 'Fencing inspection overdue — otherwise tracking well',
    headlineStatus: 'attention',
    pulse: [
      { area: 'tracking', label: 'Tracking', status: 'attention', note: '1 inspection overdue' },
      { area: 'monitoring', label: 'Monitoring', status: 'on-track', note: '6 obs · 30d' },
      { area: 'reporting', label: 'Reporting', status: 'on-track', note: 'Reports current' },
    ],
    href: CMP_HREF,
  },
  {
    name: 'Southern Forebay & Pumping Plant',
    type: 'Forebay · Byron Tract',
    phaseLabel: 'Pre-Construction',
    headline: 'On schedule across all areas',
    headlineStatus: 'on-track',
    pulse: [
      { area: 'tracking', label: 'Tracking', status: 'on-track', note: '22 / 30 actions' },
      { area: 'monitoring', label: 'Monitoring', status: 'on-track', note: '11 obs · 30d' },
      { area: 'reporting', label: 'Reporting', status: 'attention', note: 'Q1 section due' },
    ],
    href: CMP_HREF,
  },
  {
    name: 'Twin Cities Complex',
    type: 'Tunnel shaft · Staging',
    phaseLabel: 'On hold',
    headline: 'Paused — revised haul-route agreement pending',
    headlineStatus: 'quiet',
    pulse: [
      { area: 'tracking', label: 'Tracking', status: 'quiet', note: 'Work paused' },
      { area: 'monitoring', label: 'Monitoring', status: 'quiet', note: '2 obs · 30d' },
      { area: 'reporting', label: 'Reporting', status: 'quiet', note: 'Nothing due' },
    ],
    href: CMP_HREF,
  },
];

// ── Tracking — the PRIMARY zone (Lists live here) ────────────────────────────
// The primary front door. Beacon tracks ACTIONS (not requirements — Andy, round
// 3), and actions carry a status: Not Started / In Progress / Complete. The
// rollup is those statuses project-wide, framed "across 24 components" so the
// figures are unambiguously project totals.
export interface TrackingFigure {
  label: string;
  value: string;
}
export const TRACKING_ROLLUP: TrackingFigure[] = [
  { label: 'Not started', value: '31' },
  { label: 'In progress', value: '24' },
  { label: 'Complete', value: '87' },
];
export const TRACKING_SCOPE = 'across 24 components';
export const TRACKING_HREF = '/prototypes/requirement-tracker';

export interface StarredList {
  name: string;
  meta: string;
  href: string;
}
// Lists hold commitments and actions only (Andy, round 3 — no requirements lists).
export const TRACKING_LISTS: StarredList[] = [
  { name: 'Active BIO mitigations', meta: '12 actions', href: '#list-bio-mitigations' },
  { name: 'Q2 reporting deadlines', meta: '8 actions', href: '#list-q2-reporting' },
  { name: 'North Delta permit conditions', meta: '23 commitments', href: '#list-permit-conditions' },
];

// ── Secondary front doors — Monitoring, Reporting, Setup Wizard ───────────────
// Prominent but clearly secondary to Tracking. Each is a portal into that area of
// the app plus a high-level, criticality-elevated rollup — not an inventory.
export interface FrontDoor {
  id: string;
  title: string;
  /** Semantic icon key the component maps to Lucide paths. */
  icon: 'monitoring' | 'reporting' | 'setup';
  summary: string;
  rollup: { label: string; value: string }[];
  /** The one criticality-elevated signal for this area (optional). */
  flag?: { status: PulseStatus; label: string };
  href: string;
  cta: string;
}
export const SECONDARY_DOORS: FrontDoor[] = [
  {
    id: 'monitoring',
    title: 'Monitoring',
    icon: 'monitoring',
    summary: 'Field observations, surveys, and site clearance across every component.',
    rollup: [
      { label: 'Active observations', value: '34' },
      { label: 'Logged in 30 days', value: '58' },
    ],
    flag: { status: 'critical', label: '2 critical observations' },
    href: '/prototypes/monitoring/dashboard',
    cta: 'Open Monitoring',
  },
  {
    id: 'reporting',
    title: 'Reporting',
    icon: 'reporting',
    summary: 'Compliance reports and agency submissions generated from tracked data.',
    rollup: [
      { label: 'Reports in progress', value: '4' },
      { label: 'Submitted this quarter', value: '9' },
    ],
    flag: { status: 'critical', label: '1 report due in 2 days' },
    href: '#reporting',
    cta: 'Open Reporting',
  },
  {
    // The wizard's homepage signal is the un-triaged pipeline (Andy, round 4):
    // requirements not yet part of any action, and commitments without parsed
    // requirements. Counts of EXISTING entities — never "actions to create"
    // (how many actions those will become isn't knowable until triage). The
    // card wears the prod wizard's identity (teal compass mark, serif title).
    id: 'setup',
    title: 'Setup Wizard',
    icon: 'setup',
    summary: 'From source documents to trackable actions.',
    rollup: [
      { label: 'Requirements not part of an action', value: '12' },
      { label: 'Commitments without requirements', value: '3' },
    ],
    flag: { status: 'attention', label: '15 items need triage in the wizard' },
    href: '#setup-wizard',
    cta: 'Open Setup Wizard',
  },
];

// ── Project data & attributes — the quiet utility rail (project-level CRUD) ───
// Minimal utility text links, NOT the overly prominent PROD tabs. Project Info,
// Species, Milestones, Construction Activities, Seasons, etc. — quiet CRUD entries.
export interface UtilityLink {
  label: string;
  meta?: string;
  href: string;
}
export const PROJECT_UTILITIES: UtilityLink[] = [
  { label: 'Project Info', href: '#project-info' },
  { label: 'Species', meta: '38', href: '#species' },
  { label: 'Milestones', meta: '12', href: '#milestones' },
  { label: 'Construction Activities', meta: '27', href: '#construction-activities' },
  { label: 'Seasons', meta: '4', href: '#seasons' },
];
