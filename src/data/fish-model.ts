// ─────────────────────────────────────────────────────────────────────────────
// Fish Studies — the DATA MODEL CONTRACT (types + metadata + helpers, NO rows).
//
// Why this file exists: the DCP "Covered Fish Species Monitoring & Science Plan"
// lives today as FOUR hand-maintained documents — a narrative Word plan (study
// "sketches"), a wide crosswalk spreadsheet, a roles/RACI spreadsheet, and a
// timeline memo + gantt. They drift the instant anything changes. Every one of
// them is a PROJECTION of a single dataset. This file defines that dataset's
// shape; the fixture ROWS live in ./fish-plan.ts (the source of truth every
// surface reads) and ./fish-schedule.ts (calendar rules).
//
// The contract is organized in STRATA — read them as the architecture:
//
//   A. COMMITMENT-REFERENCE VOCABULARY — how records point at the regulatory
//      layer. Beacon tracks Commitments at the two-level COA grain (10.19, 10.20,
//      10.26); the work-breakdown's TOP tier (a Commitment node) mirrors one of
//      those records via `coaRef`. The Study tier references an ITP sub-study
//      named WITHIN that commitment's text (e.g. 10.19.1) — a real identifier, but
//      NOT a separately-tracked Commitment. `coaRef`/`coaNumber` is always a
//      REFERENCE, never identity (study ↔ COA is not 1:1 — hence the crosswalk).
//   B. AUTHORED-SATELLITE RECORDS — content people write and own, keyed by COA:
//      the 9-field `StudySketch` (a literal transcription of "Table 1.
//      Requirements and Key Considerations for DCP Study Plans" — a schema, not
//      prose), the CDFW `ReviewComment` cycle, `Deliverable`s, RACI
//      `RoleAssignment`s, and the assembled `StudyProfile` satellite.
//   C. PRESENTATION METAS — label/hex vocabularies for the above.
//   D. THE WORK-BREAKDOWN — the execution tree (`HierNode`, Commitment → Study →
//      Sub-study → Task) laid OVER the commitment references, plus the anchors
//      (`Milestone`) and authored plan judgment (`PlanAssumption`).
//   E. DERIVATIONS — `computeRollUp` and friends. Derived values are NEVER
//      stored; every surface recomputes from the tree at render.
//   F. LEGACY (quarantined at the bottom) — the flat-register era's composite
//      `Study` record and its execution fields, alive ONLY for the two
//      superseded pages (fish-studies.astro, fish-study/[coa].astro).
// ─────────────────────────────────────────────────────────────────────────────

// ═══ STRATUM A — commitment-reference & org vocabulary ═══════════════════════

/** The 4 top-level groupings from the crosswalk's merged category column. */
export type StudyCategory =
  | 'covered-species-monitoring'
  | 'preconstruction-engineering'
  | 'operations-monitoring'
  | 'operations-covered-species';

/** Owning org. DWR sub-offices + the DCA, plus outside consultants. */
export type LeadOrg = 'DWR-DCO' | 'DWR-DCO/BDO' | 'DWR-DISE' | 'DWR-BDO' | 'DCA' | 'Consultant';

/** Runtime list of the lead orgs (option source for the drawer's Lead picker). */
export const LEAD_ORGS: LeadOrg[] = ['DWR-DCO', 'DWR-DCO/BDO', 'DWR-DISE', 'DWR-BDO', 'DCA', 'Consultant'];

// ═══ STRATUM B — authored-satellite records (keyed by COA) ═══════════════════

/**
 * PLAN-side lifecycle — the agency review cycle that is Beacon's differentiator
 * vs. Monday/Asana (draft in Beacon → submit to CDFW → ingest comments → revise →
 * approved). This is the sketch DOCUMENT'S workflow state, not execution status
 * (execution lives on the work-breakdown's TaskStatus roll-up).
 */
export type PlanStatus = 'draft' | 'submitted' | 'in-review' | 'revising' | 'approved';

/** Deliverable lifecycle (the recurring Draft→Final report sequence per study). */
export type DeliverableStatus = 'not-started' | 'in-progress' | 'submitted' | 'approved' | 'complete';

/**
 * RACI work-streams (the Roles_Summary column set). A study × work-stream cell is
 * an assignment to an org (optionally a named person, optionally tentative — the
 * trailing "?" in the source spreadsheet).
 */
export type WorkstreamKey =
  | 'lead'
  | 'design'
  | 'implementation'
  | 'compliance'
  | 'engineering'
  | 'construction'
  | 'modeling'
  | 'operations'
  | 'baseline'
  | 'near-field'
  | 'far-field';

export interface RoleAssignment {
  workstream: WorkstreamKey;
  org: string;
  person?: string;
  /** Source spreadsheet marked unconfirmed assignments with a trailing "?". */
  tentative?: boolean;
}

export interface Deliverable {
  /** e.g. "Draft Study Plan", "Final Report". */
  type: string;
  status: DeliverableStatus;
  /** ISO date (YYYY-MM-DD) or undefined if not yet scheduled. */
  due?: string;
}

/** Covered/listed fish, predator/proxy species, or other monitored taxa. */
export interface FocalSpecies {
  name: string;
  group: 'listed' | 'predator' | 'other';
}

/**
 * A study often decomposes into components (near-field / far-field, or per-species
 * for the life-cycle models). Methods (named, reusable protocols like "Telemetry
 * System") and performance metrics attach at the component level when components
 * exist, else at the study level (see StudySketch.methods / .performanceMetrics).
 */
export interface StudyComponent {
  name: string;
  methods: string[];
  metrics: string[];
}

/**
 * The 9-field study sketch (= science-plan "Table 1"). Only flagship studies carry
 * a full sketch in this prototype; the rest are tabular-only (the crosswalk view).
 * `focalSpecies`, `phases`, and the dependency arrays live on `Study` (shared with
 * the tabular views) rather than being duplicated here.
 */
export interface StudySketch {
  /** Field 1 — Focal Species note (the narrative around Study.focalSpecies). */
  focalSpeciesNote: string;
  /** Field 2 — Project Effect Links (near/far-field, construction vs operations). */
  projectEffectLinks: string;
  /** Field 3 — Objectives + numbered Research Questions (+ optional hypotheses). */
  objectivesSummary: string;
  researchQuestions: string[];
  hypotheses?: string[];
  /** Field 4 — Background (prior/ongoing efforts, literature). */
  background: string;
  /** Field 5a — Study Area. */
  studyArea?: string;
  /** Field 5b — Methods: components carry their own methods+metrics... */
  components?: StudyComponent[];
  /** ...or, for single-component studies, methods+metrics live at study level. */
  methods?: string[];
  /** Field 6 — Performance Metrics (study-level; component metrics live on components). */
  performanceMetrics?: string[];
  /** Field 7 — Data Management. */
  dataManagement: string;
  /** Field 8 — Reporting Requirements. */
  reportingRequirements: string;
}

/** Why a CDFW reviewer left a comment — the ingest-classification dimension. */
export type CommentIntent =
  | 'rephrase-rq'
  | 'add-metric'
  | 'fix-coa-link'
  | 'scope-dispute'
  | 'model-peer-review'
  | 'governance';

export type CommentStatus = 'open' | 'addressed' | 'resolved';

export interface ReviewReply {
  author: string;
  date: string;
  text: string;
}

/**
 * An agency review comment, anchored to a specific (study, sketch field). This
 * annotation layer is what makes the plan a REVIEW-CYCLE artifact rather than a
 * static document — and is the part the source filename
 * ("CDFW Comments_…_DWR_Review") was advertising.
 */
export interface ReviewComment {
  id: string;
  author: string;
  /** true = agency (CDFW); false = author-side reply (DWR/ESA). */
  agency: boolean;
  date: string;
  /** Which sketch field this comment targets, e.g. "researchQuestions", "performanceMetrics". */
  field: keyof StudySketch | 'general';
  /** Which draft-plan SECTION this comment anchors to (PlanSection.id) — the
   *  document-side anchor; the corpus letter cites section numbers, not sketch
   *  fields. Study-scoped comments get their study's sketch section at
   *  projection time; plan-level comments carry it directly. */
  sectionId?: string;
  intent: CommentIntent;
  status: CommentStatus;
  text: string;
  replies?: ReviewReply[];
}

/**
 * A numbered section of the FIXED draft science plan (Feb 2026). The document is
 * the corpus the brief's "linking COAs to sections" bullet points at: sections
 * reference COAs (many-to-many — a sketch section cites its COA, overview
 * sections cite whole condition families), and review comments anchor to
 * sections. Only comment STATUS is live data; the document itself never changes.
 */
export interface PlanSection {
  /** Stable id used as the comment anchor + URL fragment, e.g. 'sec-3-5-2'. */
  id: string;
  /** The document's own number, e.g. '3.5.2'. */
  number: string;
  title: string;
  /** Outline depth: 1 = chapter, 2 = section, 3 = subsection. */
  level: 1 | 2 | 3;
  parentId?: string;
  /** COA references this section cites — study COAs or condition families. */
  coaRefs: string[];
  /** Opening passage of the section (fixture excerpt of the fixed document). */
  excerpt?: string;
}

/**
 * The Roles_Summary planning/sizing block (cols C–H). Defined-but-empty in the
 * source spreadsheet — modeled here so the schema is ready to be backfilled.
 */
export interface PlanningMetrics {
  studyPlanDue?: string;
  rampUpStart?: string;
  workStart?: string;
  /** 1–10 ordinal. */
  complexity?: number;
  /** Peak full-time-equivalent staff. */
  peakFte?: number;
  /** e.g. "$1–3M", "<$500k". */
  budgetMagnitude?: string;
}

// Re-export the schedule-side id so satellite `phases` are typed without a cycle.
import type { DcpPhaseId } from './fish-schedule';
export type { DcpPhaseId };

/**
 * The ASSEMBLED authored satellite for one COA — everything people write about a
 * study (never its execution facts, which live on the work-breakdown). Built by
 * fish-plan.ts from the corpus; consumed by the detail pages and document
 * exports. `coaRef` joins it to the work-breakdown study that references the
 * same condition.
 */
export interface StudyProfile {
  /** The COA (= Beacon Commitment) this authored content belongs to. */
  coaRef: string;
  category: StudyCategory;
  /** Crosswalk col C program prefix, e.g. "Fisheries Evaluation Studies". */
  studyProgram: string;
  /** Crosswalk col C method suffix, e.g. "Biological Monitoring". */
  method: string;
  agencies: string[];
  focalSpecies: FocalSpecies[];
  phases: DcpPhaseId[];
  /** Narrative schedule constraint (the crosswalk "Timeframe" cell). */
  timeframe: string;
  /** The sketch document's review-cycle state (authoring workflow, not execution). */
  planStatus: PlanStatus;
  deliverables: Deliverable[];
  /** COA numbers this study INFORMS (outbound dependency references). */
  informs: string[];
  /** COA numbers that INFORM this study (inbound). */
  informedBy: string[];
  /** Regulatory cross-refs (bio criteria 11.115–117, ops criteria 11.111, COA 7/8…). */
  regulatoryRefs: string[];
  planning: PlanningMetrics;
  sketch?: StudySketch;
  reviewComments?: ReviewComment[];
}

// ═══ STRATUM C — presentation metas ══════════════════════════════════════════
// Hex literals are kept in sync with theme-beacon.css --bcn-status-* / --color-*
// BY VALUE (same convention as tracker-fixture.ts) because AG Grid + inline chips
// resolve color at config time and can't read CSS vars.

export const CATEGORY_META: Record<StudyCategory, { label: string; short: string }> = {
  'covered-species-monitoring': { label: 'Covered Species Monitoring & Scientific Study', short: 'Covered Species' },
  'preconstruction-engineering': { label: 'Preconstruction Engineering Studies', short: 'Preconstruction Eng.' },
  'operations-monitoring': { label: 'Operations Monitoring Studies', short: 'Operations Monitoring' },
  'operations-covered-species': { label: 'Operations Phases Covered Species Measures', short: 'Operations Measures' },
};

// Status hexes follow the AWS permit-tracking RdYlGn readiness ramp (red = early /
// not ready → green = approved / complete), kept in sync with that prototype's
// scheme so the fish-studies grid, timeline, and chips speak the same color
// language as the rest of the platform.
export const PLAN_STATUS_META: Record<PlanStatus, { label: string; hex: string }> = {
  draft: { label: 'Draft', hex: '#d73027' }, // ramp: not-ready (red)
  submitted: { label: 'Submitted to CDFW', hex: '#fc8d59' }, // orange
  'in-review': { label: 'In Agency Review', hex: '#e3c14d' }, // gold
  revising: { label: 'Revising', hex: '#91cf60' }, // light green
  approved: { label: 'Approved', hex: '#1a9850' }, // green (cleared)
};

export const DELIVERABLE_STATUS_META: Record<DeliverableStatus, { label: string; hex: string }> = {
  'not-started': { label: 'Not Started', hex: '#d73027' },
  'in-progress': { label: 'In Progress', hex: '#fc8d59' },
  submitted: { label: 'Submitted', hex: '#e3c14d' },
  approved: { label: 'Approved', hex: '#91cf60' },
  complete: { label: 'Complete', hex: '#1a9850' },
};

export const COMMENT_INTENT_META: Record<CommentIntent, { label: string }> = {
  'rephrase-rq': { label: 'Rephrase research question' },
  'add-metric': { label: 'Add / adjust metric' },
  'fix-coa-link': { label: 'Fix COA cross-reference' },
  'scope-dispute': { label: 'Scope dispute' },
  'model-peer-review': { label: 'Model peer-review / documentation' },
  governance: { label: 'Governance / approval' },
};

export const COMMENT_STATUS_META: Record<CommentStatus, { label: string; hex: string }> = {
  open: { label: 'Open', hex: '#f2770e' },
  addressed: { label: 'Addressed', hex: '#228be6' },
  resolved: { label: 'Resolved', hex: '#2e7571' },
};

export const WORKSTREAM_META: Record<WorkstreamKey, { label: string }> = {
  lead: { label: 'Study / Plan Lead' },
  design: { label: 'Study / Plan Design' },
  implementation: { label: 'Study / Plan Implementation' },
  compliance: { label: 'Compliance / CEQA / Permitting' },
  engineering: { label: 'Engineering' },
  construction: { label: 'Construction / Installation' },
  modeling: { label: 'Modeling' },
  operations: { label: 'Operations' },
  baseline: { label: 'Baseline Monitoring' },
  'near-field': { label: 'Near-Field Studies' },
  'far-field': { label: 'Far-Field Studies' },
};

/** Sketch field → human label (drives the detail page section headings + comment anchors). */
export const SKETCH_FIELD_META: Record<keyof StudySketch | 'general', { label: string }> = {
  focalSpeciesNote: { label: 'Focal Species' },
  projectEffectLinks: { label: 'Project Effect Links' },
  objectivesSummary: { label: 'Objectives, Research Questions & Hypotheses' },
  researchQuestions: { label: 'Research Questions' },
  hypotheses: { label: 'Hypotheses' },
  background: { label: 'Background' },
  studyArea: { label: 'Study Area' },
  components: { label: 'Methods' },
  methods: { label: 'Methods' },
  performanceMetrics: { label: 'Performance Metrics' },
  dataManagement: { label: 'Data Management' },
  reportingRequirements: { label: 'Reporting Requirements' },
  general: { label: 'General' },
};

/** The covered/predator/other species vocabulary referenced across studies. */
export const SPECIES_CATALOG: FocalSpecies[] = [
  { name: 'Winter-run Chinook salmon', group: 'listed' },
  { name: 'Spring-run Chinook salmon', group: 'listed' },
  { name: 'Delta smelt', group: 'listed' },
  { name: 'Longfin smelt', group: 'listed' },
  { name: 'White sturgeon', group: 'listed' },
  { name: 'Green sturgeon', group: 'listed' },
  { name: 'Sacramento pikeminnow', group: 'predator' },
  { name: 'Striped bass', group: 'predator' },
  { name: 'Largemouth bass', group: 'predator' },
  { name: 'Smallmouth bass', group: 'predator' },
  { name: 'Catfishes', group: 'predator' },
  { name: 'Mississippi silverside', group: 'predator' },
  { name: 'Wakasagi', group: 'predator' },
  { name: 'Harmful algal blooms', group: 'other' },
  { name: 'Zooplankton', group: 'other' },
  { name: 'Benthic macroinvertebrates', group: 'other' },
];

export const PROJECT_NAME = 'Covered Fish Species Monitoring & Science Plan';
export const PROJECT_SUBTITLE = 'Delta Conveyance Project — CESA Incidental Take Permit';

// ═══ STRATUM D — the work-breakdown (execution tree + anchors) ═══════════════
// FOUR-TIER WORK-BREAKDOWN MODEL — the Tasking Gantt's data contract.
//
// The 7/8 data-model decision gave fish-study compliance a recursive hierarchy.
// The second prototype socializes THAT model as a work breakdown with named tiers:
//
//     Commitment → Study → Sub-study → Task
//
// Design decisions locked by Andy (this contract implements all five):
//   1. FOUR named tiers (was three), CRUD at every tier (UI-level in the component).
//   2. NO dependency dimension — informs/informed-by is dropped from this view.
//   3. IDENTITY is a stable, type-prefixed id (CMT-###/STY-###/SUB-###/TSK-###).
//      The ITP COA dot-number ("10.19.1") is a secondary REFERENCE label only.
//   4. The TASK (4th tier) is the schedulable, month-by-month unit — it owns the
//      start/end months, the owner, and the status. Everything ROLLS UP from
//      tasks: Task → Sub-study → Study → Commitment (status + funding + span).
//   5. The row side panel reads Identity → Timing → Funding → Roll-up → notes.
//
// The month-scale schedule still honors the fish-study calendar (water-year
// deadlines, half-year field seasons) from ./fish-schedule.ts — the axis, phase
// bands, and milestones are shared with the flat timeline. Dollar figures are
// ILLUSTRATIVE planning magnitudes, not CDFW/DWR contract values.
// ═════════════════════════════════════════════════════════════════════════════

export type NodeTier = 'program' | 'study' | 'substudy' | 'task';

// ── Milestones: the immovable regulatory/engineering anchors the plan back-plans
//    from (30%/60% design, in-water construction, operations, the baseline-
//    monitoring phase). Studies link to the anchor that DRIVES their deadline via
//    `drivenBy`; the Readiness view and the timelines-memo export derive every
//    must-finish-by / must-start-by chain from these + the task schedule. In prod
//    the citation text lives on the COMMITMENT record (Data Catalog) — here it is
//    carried inline so the projection can quote its source. ──

export type MilestoneKind = 'design' | 'construction' | 'operations' | 'phase';

export interface Milestone {
  /** Stable id studies reference via `drivenBy` (e.g. 'ms-design-30'). */
  id: string;
  name: string;
  kind: MilestoneKind;
  /** Anchor month, ISO 'YYYY-MM'. For a phase this is the phase START. */
  month: string;
  /** Phase END month — only `kind: 'phase'` carries one. */
  endMonth?: string;
  /** Loose calendar label when the source gives a range ("2030–2031"). */
  windowLabel?: string;
  /** The regulatory source line (MMRP / ITP condition text) this anchor quotes. */
  citation?: string;
}

/** An authored plan-level assumption or open question — the JUDGMENT stratum of
 *  the timelines memo: interpretive positions that cannot be derived from the
 *  schedule and must not be lost when the document is regenerated. */
export interface PlanAssumption {
  /** 'assumption' renders as a position held; 'question' as unresolved. */
  kind: 'assumption' | 'question';
  text: string;
}
export type TierPrefix = 'CMT' | 'STY' | 'SUB' | 'TSK';

/** Per-tier display + the type prefix that stamps a node's stable id. */
export const TIER_META: Record<NodeTier, { label: string; prefix: TierPrefix; childLabel: string }> = {
  program: { label: 'Commitment', prefix: 'CMT', childLabel: 'Study' },
  study: { label: 'Study', prefix: 'STY', childLabel: 'Sub-study' },
  substudy: { label: 'Sub-study', prefix: 'SUB', childLabel: 'Task' },
  task: { label: 'Task', prefix: 'TSK', childLabel: '' },
};

export const TIER_ORDER: NodeTier[] = ['program', 'study', 'substudy', 'task'];

/** Leaf-task execution status (richer than the 3-bucket roll-up health). */
export type TaskStatus = 'not-started' | 'on-track' | 'at-risk' | 'blocked' | 'complete';

/** The 3-bucket health the roll-up breakdown reports ("X on track · Y at risk · Z blocked"). */
export type HealthBucket = 'on-track' | 'at-risk' | 'blocked';

// Health hexes reuse the platform RdYlGn readiness ramp (red = trouble → green =
// healthy), kept in sync BY VALUE with the fish-studies grid + timeline chips.
// Bar hexes follow the science-plan prototype's RdYlGn ramp (fish-studies /
// PLAN_STATUS_META): red = blocked, orange = at risk, light green = moving,
// deep green = done. Neutral gray for not-started (the ramp carries no neutral).
export const TASK_STATUS_META: Record<TaskStatus, { label: string; hex: string; bucket: HealthBucket }> = {
  'not-started': { label: 'Not started', hex: '#9aa0a6', bucket: 'on-track' },
  'on-track': { label: 'On track', hex: '#91cf60', bucket: 'on-track' },
  'at-risk': { label: 'At risk', hex: '#fc8d59', bucket: 'at-risk' },
  blocked: { label: 'Blocked', hex: '#d73027', bucket: 'blocked' },
  complete: { label: 'Complete', hex: '#1a9850', bucket: 'on-track' },
};

export const HEALTH_META: Record<HealthBucket, { label: string; hex: string }> = {
  'on-track': { label: 'On track', hex: '#1a9850' },
  'at-risk': { label: 'At risk', hex: '#e8973a' },
  blocked: { label: 'Blocked', hex: '#d73027' },
};

/** One water year of planned dollars entered AT a node. */
export interface FundingEntry {
  /** Water year (WY): Oct 1 of the prior calendar year — see fish-schedule.ts. */
  waterYear: number;
  amount: number;
}

/** A node in the 4-tier work breakdown. Recursive; leaves (Tasks) carry the schedule. */
export interface HierNode {
  /** STABLE, type-prefixed identity — CMT-###/STY-###/SUB-###/TSK-###. THE identity (not the COA). */
  id: string;
  tier: NodeTier;
  name: string;
  /** Secondary REFERENCE label only: the ITP Condition-of-Approval dot-number ("10.19.1"). NOT identity. */
  coaRef?: string;
  /** Leaf (Task) schedule — the schedulable month-by-month unit. ISO 'YYYY-MM'. Parents derive span from descendants. */
  startMonth?: string;
  endMonth?: string;
  /** Leaf (Task) owner (org or org — person) — who DOES the task. */
  owner?: string;
  /** Study-tier LEAD org — who's ACCOUNTABLE for this line of work. Distinct from
   *  the leaf `owner` (the doer): the lead sits on the Study, rolls up at Program
   *  (distinct set → "Multiple"), and inherits DOWN to Sub-study / Task. */
  lead?: LeadOrg;
  /** Study-tier RACI assignments (the Roles_Summary work-streams) — the source for
   *  the Roles-matrix projection. Sits on the Study alongside `lead`. */
  roles?: RoleAssignment[];
  /** Study-tier link to the Milestone that DRIVES this study's deadline. */
  drivenBy?: string;
  /** Study-tier compliance due month (ISO 'YYYY-MM') derived from the driving
   *  anchor's condition text. Must-start-by is COMPUTED (earliest task start),
   *  never stored. */
  deadline?: string;
  /** Leaf (Task) execution status; parents roll it up. */
  status?: TaskStatus;
  /** Per-water-year funding entered AT this node (dollars). Task funding sums upward. */
  funding: FundingEntry[];
  /** Free-text note shown (collapsed) in the panel's constraints/notes block. */
  notes?: string;
  /** Schedule/scope constraints shown (collapsed) in the panel's constraints/notes block. */
  constraints?: string[];
  children: HierNode[];
}

/** The aggregate computed for a node from its subtree — the roll-up. */
export interface NodeRollUp {
  /** Leaf tasks in this subtree (1 for a Task itself). */
  taskCount: number;
  /** Healthy, not-yet-complete leaves (on-track + not-started). */
  onTrack: number;
  atRisk: number;
  blocked: number;
  complete: number;
  /** Worst-case aggregate for the chip: blocked > at-risk > (complete iff all done) > on-track. */
  aggregate: TaskStatus;
  startMonth?: string;
  endMonth?: string;
  /** Funding entered AT this node (own). */
  ownFunding: number;
  /** own + all descendants. */
  totalFunding: number;
  /** Subtree funding (own + descendants) summed by water year, ascending. */
  fundingByYear: FundingEntry[];
}

/** One flattened render row: the node plus its depth + lineage. */
export interface FlatRow {
  node: HierNode;
  depth: number;
  parentId?: string;
  ancestors: HierNode[];
}

// ═══ STRATUM E — derivations (computed at render, never stored) ══════════════

/** Compact USD label: $4.3M / $560k / $900. */
export const formatUSD = (n: number): string =>
  n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M`
    : n >= 1_000
      ? `$${Math.round(n / 1_000)}k`
      : `$${n}`;

const MONTH_ABBR = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** 'YYYY-MM' → "Apr 2029". */
export function monthLabel(iso?: string): string {
  if (!iso) return '—';
  const [y, m] = iso.split('-').map(Number);
  return `${MONTH_ABBR[(m || 1) - 1]} ${y}`;
}

/** Water year of a month: Oct–Dec roll into the NEXT water year (freshet anchoring). */
export function waterYearOf(iso: string): number {
  const [y, m] = iso.split('-').map(Number);
  return m >= 10 ? y + 1 : y;
}

/** Field-season half a month falls in: freshet (Oct–Mar deploy/tag) vs dry (Apr–Sep install/analyze/report). */
export function fieldSeasonOf(iso: string): 'freshet' | 'dry' {
  const m = Number(iso.split('-')[1]);
  return m >= 4 && m <= 9 ? 'dry' : 'freshet';
}

export const FIELD_SEASON_META = {
  freshet: { label: 'Winter freshet (Oct–Mar)', short: 'Freshet' },
  dry: { label: 'Dry season (Apr–Sep)', short: 'Dry' },
} as const;

const sumFunding = (entries: FundingEntry[]): number => entries.reduce((a, e) => a + e.amount, 0);

function mergeByYear(...lists: FundingEntry[][]): FundingEntry[] {
  const acc = new Map<number, number>();
  for (const list of lists) for (const e of list) acc.set(e.waterYear, (acc.get(e.waterYear) ?? 0) + e.amount);
  return [...acc.entries()].sort((a, b) => a[0] - b[0]).map(([waterYear, amount]) => ({ waterYear, amount }));
}

const minMonth = (a?: string, b?: string): string | undefined => (!a ? b : !b ? a : a < b ? a : b);
const maxMonth = (a?: string, b?: string): string | undefined => (!a ? b : !b ? a : a > b ? a : b);

/**
 * Roll a node up from its subtree: status health, schedule span, and funding all
 * aggregate Task → Sub-study → Study → Commitment. A leaf returns its own values.
 */
export function computeRollUp(node: HierNode): NodeRollUp {
  const ownFunding = sumFunding(node.funding);

  if (node.children.length === 0) {
    const status = node.status ?? 'on-track';
    const bucket = TASK_STATUS_META[status].bucket;
    const isTask = node.tier === 'task';
    return {
      taskCount: isTask ? 1 : 0,
      onTrack: isTask && bucket === 'on-track' && status !== 'complete' ? 1 : 0,
      atRisk: isTask && bucket === 'at-risk' ? 1 : 0,
      blocked: isTask && bucket === 'blocked' ? 1 : 0,
      complete: isTask && status === 'complete' ? 1 : 0,
      aggregate: status,
      startMonth: node.startMonth,
      endMonth: node.endMonth,
      ownFunding,
      totalFunding: ownFunding,
      fundingByYear: mergeByYear(node.funding),
    };
  }

  const childRolls = node.children.map(computeRollUp);
  let taskCount = 0,
    onTrack = 0,
    atRisk = 0,
    blocked = 0,
    complete = 0;
  let startMonth: string | undefined;
  let endMonth: string | undefined;
  for (const c of childRolls) {
    taskCount += c.taskCount;
    onTrack += c.onTrack;
    atRisk += c.atRisk;
    blocked += c.blocked;
    complete += c.complete;
    startMonth = minMonth(startMonth, c.startMonth);
    endMonth = maxMonth(endMonth, c.endMonth);
  }
  const aggregate: TaskStatus =
    blocked > 0 ? 'blocked' : atRisk > 0 ? 'at-risk' : taskCount > 0 && complete === taskCount ? 'complete' : 'on-track';

  return {
    taskCount,
    onTrack,
    atRisk,
    blocked,
    complete,
    aggregate,
    startMonth,
    endMonth,
    ownFunding,
    totalFunding: ownFunding + childRolls.reduce((a, c) => a + c.totalFunding, 0),
    fundingByYear: mergeByYear(node.funding, ...childRolls.map((c) => c.fundingByYear)),
  };
}

/** Depth-first flatten of a forest (top-level = Programs at depth 0). */
export function flattenForest(nodes: HierNode[]): FlatRow[] {
  const out: FlatRow[] = [];
  const walk = (node: HierNode, depth: number, ancestors: HierNode[]) => {
    out.push({ node, depth, parentId: ancestors.at(-1)?.id, ancestors });
    for (const child of node.children) walk(child, depth + 1, [...ancestors, node]);
  };
  for (const node of nodes) walk(node, 0, []);
  return out;
}

/** Whole-plan roll-up across a forest of Programs (for the header KPIs). */
export function forestRollUp(nodes: HierNode[]): NodeRollUp {
  return computeRollUp({ id: 'PLAN', tier: 'program', name: 'plan', funding: [], children: nodes });
}

// ═══ STRATUM F — LEGACY (quarantined) ════════════════════════════════════════
// The flat-register era's composite record and its execution fields. Alive ONLY
// for the two SUPERSEDED pages (fish-studies.astro, fish-study/[coa].astro) and
// the corpus rows in ./fish-studies.ts. For the COAs the work-breakdown covers,
// every field below that describes EXECUTION (schedule, status, lead, roles) is
// DEAD — the work-breakdown owns those facts; only authored narrative flows out,
// via fish-plan.ts STUDY_PROFILES. Do not add new consumers.

/** LEGACY execution-side status — superseded by the work-breakdown's TaskStatus roll-up. */
export type ExecStatus = 'not-started' | 'planning' | 'active' | 'complete';

export const EXEC_STATUS_META: Record<ExecStatus, { label: string; hex: string }> = {
  'not-started': { label: 'Not Started', hex: '#d73027' },
  planning: { label: 'Planning', hex: '#fc8d59' },
  active: { label: 'Active Fieldwork', hex: '#e3c14d' },
  complete: { label: 'Complete', hex: '#1a9850' },
};

/** LEGACY period-scoped gantt activity (the old timeline's (study × period) cells). */
export interface ScheduleActivity {
  /** Half-year field-season bucket label, e.g. "2026 Q2-Q3". See fish-schedule.ts. */
  period: string;
  tasks: string[];
}

/**
 * LEGACY composite — one row per COA with authored content AND execution fields
 * fused. The register rows in ./fish-studies.ts still take this shape; the live
 * system reads only the authored slice of it (as `StudyProfile`).
 */
export interface Study {
  /** Primary key — the ITP Condition-of-Approval id, e.g. "10.19.1". */
  coaNumber: string;
  name: string;
  category: StudyCategory;
  /** Crosswalk col C program prefix, e.g. "Fisheries Evaluation Studies". */
  studyProgram: string;
  /** Crosswalk col C method suffix, e.g. "Biological Monitoring". */
  method: string;
  dcpLead: LeadOrg;
  agencies: string[];
  focalSpecies: FocalSpecies[];
  phases: DcpPhaseId[];
  /** Narrative schedule constraint (the crosswalk "Timeframe" cell). */
  timeframe: string;
  planStatus: PlanStatus;
  execStatus: ExecStatus;
  deliverables: Deliverable[];
  /** COA numbers this study INFORMS (outbound dependency edges). */
  informs: string[];
  /** COA numbers that INFORM this study (inbound). */
  informedBy: string[];
  /** Regulatory cross-refs (bio criteria 11.115–117, ops criteria 11.111, COA 7/8…). */
  regulatoryRefs: string[];
  roles: RoleAssignment[];
  planning: PlanningMetrics;
  /** Gantt bar start/end (ISO). Water-year aware — see fish-schedule.ts. */
  scheduleStart: string;
  scheduleEnd: string;
  scheduleActivities?: ScheduleActivity[];
  /** Open agency-comment count (the crosswalk "Comment" column). */
  commentCount: number;
  sketch?: StudySketch;
  reviewComments?: ReviewComment[];
}
