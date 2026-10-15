// The Compliance Index as step 3 builds it, in develop's two phases
// (docs/setup-wizard-3-step-ci-brief.md):
//
//   1. The index: categories and subcategories (ProposeComplianceIndex), edited by hand,
//      locked, and re-run with guidance until it reads right.
//   2. The drafts: one Draft run reads every requirement for actions and obligations
//      (ExtractActionsAndObligations), files them into the subcategories (FileItems), merges
//      the duplicates (MergeObligations, MergeActions) and completes the actions
//      (CompleteActions). Then a person reviews them a subcategory at a time.
//
// Prod's tables, flattened: ComplianceIndexCategory › ComplianceIndexSubcategory (its
// ComplianceIndexSubcategoryRequirement rows are `evidence`) › Action and Obligation, each
// with its requirements (ObligationRequirement, with its Excerpt) as locators.
//
// sw3-index.json holds the two proposals (the first build, and one Re-run with guidance);
// public/data/sw3-index/<basis>.json holds what the Draft run makes of each. All of it is
// written by scripts/build-index.mjs from Beacon's own prompts over sw3-requirements.json.

/** Prod's ObligationClass. */
export type IndexClass = 'Adhere' | 'Monitor' | 'Notify' | 'Roster';
/** Prod's ObligationAudience: who reads the obligation in the field. */
export type IndexAudience = 'Crews' | 'Monitors' | 'Compliance staff';
/** Prod's ActionScope: done once for the project, or once per component. */
export type ActionScope = 'Project' | 'Component';

/** A locator: the requirement an entry rests on, and the words the link rests on. */
export interface IndexLocator {
  /** Source file id in step 2's REVIEW_DOCS ('itp', 'mmrp'). */
  doc: string;
  /** Commitment code: 'COA 11.29', 'MM AES-1a'. */
  code: string;
  /** 1-based place of the requirement in its commitment (step 2's DisplayIndex): 11.29:3. */
  n: number;
  /** ObligationRequirement.Excerpt: verbatim words inside the requirement's passage. Empty
   *  on a subcategory's evidence, which cites the whole requirement. */
  excerpt: string;
}

export interface IndexDeadline {
  milestone: string;
  offset: number;
  unit: string;
  direction: string;
}

/** ActionRecurrence: every N periods, between two milestones. */
export interface IndexRecurrence {
  every: number;
  unit: string;
  from: string;
  until: string;
}

export interface IndexAction {
  id: string;
  kind: 'action';
  /** Action.Name. */
  name: string;
  /** Action.Description: what is done. */
  text: string;
  /** Action.RequirementType: Plan, Reporting, Survey, Approval & Consultation… */
  type: string;
  /** Empty blocks approval: "This draft has no scope." */
  scope: ActionScope | '';
  /** Empty means "Needs input". */
  responsibleParty: string;
  expectedEvidence: string;
  /** Onetime, Recurring, AsNeeded. */
  frequency: string;
  deadline: IndexDeadline | null;
  recurrence: IndexRecurrence | null;
  /** As needed: the event that calls for it. */
  eventTrigger?: string;
  locators: IndexLocator[];
}

export interface IndexObligation {
  id: string;
  kind: 'obligation';
  /** Obligation.Title. */
  title: string;
  class: IndexClass;
  audience: IndexAudience;
  /** Obligation.TriggerText: "Applies when". Empty when it always applies. */
  trigger: string;
  /** Obligation.MonitorSigns: what a monitor looks for. */
  monitorSigns: string[];
  locators: IndexLocator[];
}

export type IndexEntry = IndexAction | IndexObligation;

// ── Phase 1: the index ──────────────────────────────────────────────────────

export interface ProposedSubcategory {
  id: string;
  name: string;
  /** The requirements cited as the reason the bin exists, up to three shown. */
  evidence: IndexLocator[];
}

export interface ProposedCategory {
  id: string;
  name: string;
  subcategories: ProposedSubcategory[];
}

/** Which proposal a bin came from: the first build, or the Re-run with guidance. */
export type IndexBasis = 'base' | 'rerun';

/** What the Draft run counted, project-wide (the four stages' numbers). */
export interface DraftCounts {
  requirements: number;
  read: number;
  items: number;
  /** Requirements that bind neither an action nor an obligation. */
  neither: number;
  filed: number;
  noBin: number;
  merged: number;
  obligations: number;
  actions: number;
  completed: number;
  needParty: number;
}

/** Inline on the page: the two proposals and what drafting each would count. */
export interface Sw3IndexPlan {
  prompts: string;
  requirements: number;
  base: ProposedCategory[];
  rerun: { guidance: string; categories: ProposedCategory[] };
  counts: Record<IndexBasis, DraftCounts>;
}

// ── Phase 2: the drafts ─────────────────────────────────────────────────────

/** Something File could not place (ExtractedItem.NoBinReason). */
export interface IndexUnfiled {
  id: string;
  statement: string;
  reason: string;
  kind: 'action' | 'obligation';
  class?: IndexClass;
  audience?: IndexAudience;
  locators: IndexLocator[];
}

/** SuggestSubcategories: where the unfiled items could go. */
export interface IndexSuggestions {
  existing: { sub: string; unfiledIds: string[] }[];
  newBins: { category: string; name: string; reason: string; unfiledIds: string[] }[];
  left: { unfiledId: string; reason: string }[];
}

/** public/data/sw3-index/<basis>.json: the Draft run over one proposal. */
export interface Sw3IndexDrafts {
  basis: IndexBasis;
  entries: Record<string, IndexEntry>;
  /** Subcategory id → its home drafts and those also filed there. */
  placement: Record<string, { home: string[]; also: string[] }>;
  unfiled: IndexUnfiled[];
  suggestions: IndexSuggestions;
}

export const CLASS_OPTIONS: { value: IndexClass; label: string }[] = [
  { value: 'Adhere', label: 'Adhere' },
  { value: 'Monitor', label: 'Monitor' },
  { value: 'Notify', label: 'Notify' },
  { value: 'Roster', label: 'Roster' },
];
export const AUDIENCE_OPTIONS: { value: IndexAudience; label: string }[] = [
  { value: 'Crews', label: 'Crews' },
  { value: 'Monitors', label: 'Monitors' },
  { value: 'Compliance staff', label: 'Compliance staff' },
];
export const SCOPE_OPTIONS: { value: ActionScope; label: string }[] = [
  { value: 'Project', label: 'Project' },
  { value: 'Component', label: 'Component' },
];

/** Prod's RequirementType: what an action is, its badge on the review row. */
export const ACTION_TYPES = [
  'Analysis',
  'Approval & Consultation',
  'Avoidance & BMPs',
  'Design',
  'Financial',
  'Monitoring',
  'Plan',
  'Reporting',
  'Restoration & Mitigation',
  'Survey',
  'Other',
] as const;
export const TYPE_OPTIONS = ACTION_TYPES.map((t) => ({ value: t, label: t }));
/** Prod's action-timing-form frequencies. */
export const FREQUENCY_OPTIONS = [
  { value: 'Onetime', label: 'One time' },
  { value: 'Recurring', label: 'Recurring' },
  { value: 'AsNeeded', label: 'As needed' },
];
export const PERIOD_OPTIONS = ['Days', 'Weeks', 'Months', 'Years'].map((p) => ({ value: p, label: p }));
export const DIRECTION_OPTIONS = ['Before', 'After'].map((p) => ({ value: p, label: p }));
