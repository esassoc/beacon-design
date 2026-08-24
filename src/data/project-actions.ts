// ACTIONS — the spine of the project dashboard (product meeting, 2026-08-04).
//
// The meeting's load-bearing decision: "Actions as the spine: all urgency
// signals (survey expiry, report due dates, observations) should tie to action
// due dates by type (reporting, monitoring, tracking)." So there is ONE action
// set here, and three surfaces read it:
//
//   · the TIMELINE  — action due dates plotted across a 30/60/90-day window
//   · the MODULES   — Tracking / Monitoring / Reporting each own their type's
//                     actions, including the critical ones (which is why the
//                     standalone "Most critical now" section dissolved)
//   · the COMPONENTS cards — each component's per-area pulse
//
// An action's TYPE is the module facet (a survey is a monitoring action; a
// compliance report is a reporting action; everything else — desktop, permit,
// training, plan review — is tracking). Urgency is DERIVED from dueDate against
// the fixed TODAY, never stored: overdue < 0 days, due-soon within 14 days,
// upcoming beyond. Nothing here is computed from Date.now(), so every demo run
// renders identically.

import { TODAY } from './project-dashboard';

/** The module facet of an action — Beacon's three work areas. */
export type ActionType = 'tracking' | 'monitoring' | 'reporting';

/** Derived from dueDate vs TODAY — never a stored field. */
export type Urgency = 'overdue' | 'due-soon' | 'upcoming';

export interface ProjectAction {
  id: string;
  /** Commitment code — the mono chip prefixing the name. */
  code: string;
  /** Action.Name — the record's own name, never a narrated sentence. */
  name: string;
  type: ActionType;
  /** Component.Name, or "Project-wide" for project-scoped actions. */
  where: string;
  /** Whether this action is scoped to the project rather than a component. */
  projectScoped?: boolean;
  /** ISO due date (Action.DueDate). */
  dueDate: string;
  status: 'Not Started' | 'In Progress' | 'Complete';
  href: string;
}

// ── Deterministic date math (no Date.now(); ISO in, day counts out) ──────────
const epochDay = (iso: string): number => {
  const [y, m, d] = iso.split('-').map(Number);
  return Math.floor(Date.UTC(y, m - 1, d) / 86_400_000);
};
/** Signed days from TODAY to `iso` — negative means past due. */
export const daysOut = (iso: string): number => epochDay(iso) - epochDay(TODAY);

export const urgencyOf = (a: ProjectAction): Urgency => {
  const d = daysOut(a.dueDate);
  return d < 0 ? 'overdue' : d <= 14 ? 'due-soon' : 'upcoming';
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
/** ISO → "Mmm d" (deterministic, timezone-proof). */
export const shortDate = (iso: string): string => {
  const [, m, d] = iso.split('-').map(Number);
  return `${MONTHS[m - 1]} ${d}`;
};

const CMP = '/prototypes/component-dashboard';
const ACT = '/prototypes/data-catalog-action';

// ── The project's open actions ───────────────────────────────────────────────
// Invented-but-credible DCP material. Due dates are baked around TODAY
// (2026-03-25) so the 30/60/90-day timeline windows each carry content.
export const PROJECT_ACTIONS: ProjectAction[] = [
  // ── Monitoring (surveys, observations, field verification) ──
  {
    id: 'a-bio-03',
    code: 'BIO-03',
    name: 'Nesting-bird preconstruction survey',
    type: 'monitoring',
    where: 'Bouldin Island Launch Shaft',
    dueDate: '2026-03-24',
    status: 'In Progress',
    href: '/prototypes/monitoring/dashboard',
  },
  {
    id: 'a-bio-21',
    code: 'BIO-21',
    name: 'Giant garter snake preconstruction survey',
    type: 'monitoring',
    where: 'Southern Forebay & Pumping Plant',
    dueDate: '2026-03-31',
    status: 'Not Started',
    href: '/prototypes/monitoring/dashboard',
  },
  {
    id: 'a-wq-05',
    code: 'WQ-05',
    name: 'Turbidity monitoring — in-water work',
    type: 'monitoring',
    where: 'Intake B — North Delta',
    dueDate: '2026-04-05',
    status: 'In Progress',
    href: '/prototypes/monitoring/dashboard',
  },
  {
    id: 'a-bio-09',
    code: 'BIO-09',
    name: 'Swainson’s hawk nest buffer verification',
    type: 'monitoring',
    where: 'Twin Cities Complex',
    dueDate: '2026-04-28',
    status: 'Not Started',
    href: '/prototypes/monitoring/dashboard',
  },
  {
    id: 'a-bio-30',
    code: 'BIO-30',
    name: 'Vernal pool branchiopod wet-season survey',
    type: 'monitoring',
    where: 'Southern Forebay & Pumping Plant',
    dueDate: '2026-05-20',
    status: 'Not Started',
    href: '/prototypes/monitoring/dashboard',
  },

  // ── Reporting (agency submittals, compliance reports) ──
  {
    id: 'a-rpt-02',
    code: 'RPT-02',
    name: 'Annual mitigation summary to USFWS',
    type: 'reporting',
    where: 'Project-wide',
    projectScoped: true,
    dueDate: '2026-03-18',
    status: 'In Progress',
    href: '#report-center',
  },
  {
    id: 'a-rpt-01',
    code: 'RPT-01',
    name: 'Q1 ITP compliance report to CDFW',
    type: 'reporting',
    where: 'Project-wide',
    projectScoped: true,
    dueDate: '2026-04-01',
    status: 'In Progress',
    href: '#report-center',
  },
  {
    id: 'a-rpt-04',
    code: 'RPT-04',
    name: 'Monthly construction compliance report',
    type: 'reporting',
    where: 'Project-wide',
    projectScoped: true,
    dueDate: '2026-03-31',
    status: 'Not Started',
    href: '#report-center',
  },
  {
    id: 'a-rpt-07',
    code: 'RPT-07',
    name: 'Delta Plan consistency annual report',
    type: 'reporting',
    where: 'Project-wide',
    projectScoped: true,
    dueDate: '2026-06-01',
    status: 'Not Started',
    href: '#report-center',
  },

  // ── Tracking (permits, plans, training, inspections — everything else) ──
  {
    id: 'a-bio-14',
    code: 'BIO-14',
    name: 'Exclusion fencing inspection',
    type: 'tracking',
    where: 'Intake B — North Delta',
    dueDate: '2026-03-21',
    status: 'In Progress',
    href: ACT,
  },
  {
    id: 'a-air-07',
    code: 'AIR-07',
    name: 'Fugitive dust control plan review',
    type: 'tracking',
    where: 'Project-wide',
    projectScoped: true,
    dueDate: '2026-03-23',
    status: 'In Progress',
    href: ACT,
  },
  {
    id: 'a-cul-02',
    code: 'CUL-02',
    name: 'Cultural resources worker training',
    type: 'tracking',
    where: 'Bouldin Island Launch Shaft',
    dueDate: '2026-03-30',
    status: 'Not Started',
    href: ACT,
  },
  {
    id: 'a-tra-11',
    code: 'TRA-11',
    name: 'Haul route compliance verification',
    type: 'tracking',
    where: 'Twin Cities Complex',
    dueDate: '2026-04-07',
    status: 'Not Started',
    href: ACT,
  },
  {
    id: 'a-wq-12',
    code: 'WQ-12',
    name: 'SWPPP quarterly inspection',
    type: 'tracking',
    where: 'Southern Forebay & Pumping Plant',
    dueDate: '2026-04-10',
    status: 'Not Started',
    href: ACT,
  },
  {
    id: 'a-noi-03',
    code: 'NOI-03',
    name: 'Noise monitoring plan submittal',
    type: 'tracking',
    where: 'Bouldin Island Launch Shaft',
    dueDate: '2026-04-22',
    status: 'Not Started',
    href: ACT,
  },
  {
    id: 'a-veg-06',
    code: 'VEG-06',
    name: 'Revegetation plan agency review',
    type: 'tracking',
    where: 'Project-wide',
    projectScoped: true,
    dueDate: '2026-05-11',
    status: 'Not Started',
    href: ACT,
  },
  {
    id: 'a-bio-18',
    code: 'BIO-18',
    name: 'Worker environmental awareness refresher',
    type: 'tracking',
    where: 'Intake B — North Delta',
    dueDate: '2026-06-15',
    status: 'Not Started',
    href: ACT,
  },
];

void CMP;

// ── Per-type derivations the modules read ────────────────────────────────────
export interface ModuleRollup {
  type: ActionType;
  /** Actions past due. */
  overdue: ProjectAction[];
  /** Actions due within the 14-day window. */
  dueSoon: ProjectAction[];
  /** Overdue first (most-late first), then soonest due — the module's list. */
  critical: ProjectAction[];
  /** Every open action of this type. */
  all: ProjectAction[];
}

/**
 * Project-SCOPED work, for the Components section's project card (product
 * meeting: "should there always be just the project-scoped one of these… think
 * about whether the project view is inclusive of components or not"). Same
 * derivation as a component's pulse, filtered to actions with no component.
 */
export const projectScopedByType = (type: ActionType): ProjectAction[] =>
  PROJECT_ACTIONS.filter((a) => a.type === type && a.projectScoped);

/**
 * The rollup derivation over an ARBITRARY action set. The math is identical to
 * the project-wide rollup — it just takes the set as an argument, so a
 * COMPONENT-scoped surface can roll up its own slice of the spine without a
 * second copy of the overdue / due-soon ordering rules.
 */
export const rollupOver = (actions: ProjectAction[], type: ActionType): ModuleRollup => {
  const all = actions.filter((a) => a.type === type);
  const overdue = all.filter((a) => urgencyOf(a) === 'overdue').sort((x, y) => daysOut(x.dueDate) - daysOut(y.dueDate));
  const dueSoon = all.filter((a) => urgencyOf(a) === 'due-soon').sort((x, y) => daysOut(x.dueDate) - daysOut(y.dueDate));
  return { type, overdue, dueSoon, critical: [...overdue, ...dueSoon], all };
};

/** The PROJECT-wide rollup — same signature and same result as before. */
export const rollupFor = (type: ActionType): ModuleRollup => rollupOver(PROJECT_ACTIONS, type);
