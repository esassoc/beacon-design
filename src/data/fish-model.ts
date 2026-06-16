// ─────────────────────────────────────────────────────────────────────────────
// Fish Studies — the DATA MODEL CONTRACT (types + metadata + helpers, NO rows).
//
// Why this file exists: the DCP "Covered Fish Species Monitoring & Science Plan"
// lives today as FOUR hand-maintained documents — a narrative Word plan (27 study
// "sketches"), a wide crosswalk spreadsheet, a roles/RACI spreadsheet, and a
// timeline memo + gantt. They drift the instant anything changes. Every one of
// them is a PROJECTION of a single dataset keyed by the ITP Condition-of-Approval
// number (e.g. "10.19.1"). This file defines that one dataset's shape so a Beacon
// "fish study" record can generate all four views instead of being copied across
// four formats.
//
// The 9-field `StudySketch` is a literal transcription of "Table 1. Requirements
// and Key Considerations for DCP Study Plans" — the science plan instantiates that
// same 9-field form 27 times, so it is a schema, not prose.
//
// The `STUDIES` rows themselves live in ./fish-studies.ts (kept separate so this
// contract stays readable); the schedule layer (phases / milestones / water-year
// helpers) lives in ./fish-schedule.ts.
// ─────────────────────────────────────────────────────────────────────────────

/** The 4 top-level groupings from the crosswalk's merged category column. */
export type StudyCategory =
  | 'covered-species-monitoring'
  | 'preconstruction-engineering'
  | 'operations-monitoring'
  | 'operations-covered-species';

/** Owning org. DWR sub-offices + the DCA, plus outside consultants. */
export type LeadOrg = 'DWR-DCO' | 'DWR-DCO/BDO' | 'DWR-DISE' | 'DWR-BDO' | 'DCA' | 'Consultant';

/**
 * PLAN-side lifecycle — the agency review cycle that is Beacon's differentiator
 * vs. Monday/Asana (draft in Beacon → submit to CDFW → ingest comments → revise →
 * approved). Distinct from execution status below.
 */
export type PlanStatus = 'draft' | 'submitted' | 'in-review' | 'revising' | 'approved';

/** EXECUTION-side status — where the fieldwork/modeling actually is. */
export type ExecStatus = 'not-started' | 'planning' | 'active' | 'complete';

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
  intent: CommentIntent;
  status: CommentStatus;
  text: string;
  replies?: ReviewReply[];
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

/** One period-scoped row of gantt activity (the timeline memo's (study × period) cells). */
export interface ScheduleActivity {
  /** Half-year field-season bucket label, e.g. "2026 Q2-Q3". See fish-schedule.ts. */
  period: string;
  tasks: string[];
}

/**
 * The central entity. One row per ITP Condition of Approval. The tabular fields
 * (category … commentCount) drive the crosswalk index + the gantt; `sketch` and
 * `reviewComments` are present only on flagship studies for the detail view.
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

// Re-export the schedule-side id so Study.phases is typed without a cycle.
import type { DcpPhaseId } from './fish-schedule';
export type { DcpPhaseId };

// ── Display metadata ────────────────────────────────────────────────────────
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

export const EXEC_STATUS_META: Record<ExecStatus, { label: string; hex: string }> = {
  'not-started': { label: 'Not Started', hex: '#d73027' },
  planning: { label: 'Planning', hex: '#fc8d59' },
  active: { label: 'Active Fieldwork', hex: '#e3c14d' },
  complete: { label: 'Complete', hex: '#1a9850' },
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
