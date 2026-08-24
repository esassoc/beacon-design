// EVIDENCE DRAWER — the fixture behind the global bottom-anchored evidence workspace
// (DCP sync, 2026-08-04). The drawer joins two things: evidence on the left, action
// implementations on the right. Everything here exists to make that join legible.
//
// Vocabulary discipline carried from the meeting, and enforced in every visible string
// below:
//   · Never "implementation" — the UI calls these ACTIONS. The distinction between an
//     action and its per-component implementation is hand-waved, exactly as prod does.
//   · Never "Evidence of Compliance container" — a dropped file becomes an evidence ITEM.
//     One item may hold several files; the user is never told there is a wrapper entity.
//   · Never "AI". The suggestion pass is a utility: "Find matches", "Suggested",
//     "Less certain". No agent, no persona, no sparkles.
//
// DETERMINISTIC: no Date.now(), no Math.random() — every demo run renders identically
// (the same house rule already enforced in ./project-actions.ts). Dates are literals.
//
// INVENTED: credible DCP material, never lifted from client documents. Component names
// are REUSED from ./component-dashboard.ts so the drawer's scope picker agrees with the
// rest of the spoke rather than inventing a parallel project.

import { POPULATED } from './component-dashboard';
import type { ActionType } from './project-actions';

// ── Components (the scope) ───────────────────────────────────────────────────
// Andrew: "there should be no null state for component" — the drawer always opens
// scoped to the most recently active one. The first entry is the seed default when
// localStorage is empty.

export interface EvidenceComponent {
  id: string;
  name: string;
  /** Short classifier, mirrored from the component fixture. */
  type: string;
}

/** Slugify a component name into a stable id (deterministic, no counters). */
const slug = (name: string): string =>
  name
    .toLowerCase()
    .replace(/[—–]/g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export const COMPONENTS: EvidenceComponent[] = POPULATED.map((c) => ({
  id: slug(c.name),
  name: c.name,
  type: c.type,
}));

/** The seed "active component" before the user has chosen one. Never null. */
export const DEFAULT_COMPONENT_ID = COMPONENTS[0].id;

export const componentById = (id: string): EvidenceComponent =>
  COMPONENTS.find((c) => c.id === id) ?? COMPONENTS[0];

// ── Actions (the join targets) ───────────────────────────────────────────────
// Frequency variants come straight from the data model Andrew walked through: a
// one-time action has a single implementation per component; recurring and as-needed
// can have several, which is why the period line matters on the row.

export type ActionFrequency = 'one-time' | 'recurring' | 'as-needed' | 'ongoing';

export const FREQUENCY_LABEL: Record<ActionFrequency, string> = {
  'one-time': 'One time',
  recurring: 'Recurring',
  'as-needed': 'As needed',
  ongoing: 'Ongoing',
};

// ── Phase ────────────────────────────────────────────────────────────────────
// "The stage of the project a commitment applies to" — a real Beacon lookup, not an
// invention: these are the six rows and the sort order from the Phases settings
// collection (see settings-registry.ts). The Setup Wizard's Actions step filters by the
// same dimension, so filtering by it here matches what the app already does.

export type PhaseId =
  | 'planning'
  | 'preconstruction'
  | 'construction'
  | 'postconstruction'
  | 'operations'
  | 'restoration';

export interface Phase {
  id: PhaseId;
  name: string;
}

/** Sort order is the point — listed as the project runs, never alphabetically. */
export const PHASES: Phase[] = [
  { id: 'planning', name: 'Implementation Planning' },
  { id: 'preconstruction', name: 'Pre-Construction' },
  { id: 'construction', name: 'Construction' },
  { id: 'postconstruction', name: 'Post-Construction' },
  { id: 'operations', name: 'Operations' },
  { id: 'restoration', name: 'Restoration' },
];

export const phaseName = (id: PhaseId): string =>
  PHASES.find((p) => p.id === id)?.name ?? '';

export interface EvidenceAction {
  id: string;
  /** The PRIMARY commitment code — the chip shown on the card. */
  code: string;
  /**
   * Further commitments this action's requirements were drawn from. An action is a
   * collection of requirements, and those requirements can come from more than one
   * commitment — so a card can legitimately carry several codes. Only the primary shows;
   * the rest sit behind a "+ n more" tag.
   */
  otherCodes?: string[];
  /** Action.Name — the record's own name, never a narrated sentence. */
  name: string;
  /** The module facet, shared with ./project-actions.ts. Narrows what evidence can land. */
  type: ActionType;
  frequency: ActionFrequency;
  /** The occurrence this row stands for, e.g. "Jul 2026" or "Pre-construction". */
  period: string;
  /** Component id this action's implementation belongs to. */
  componentId: string;
  /** Project stage this action applies to — the second filter dimension. */
  phase: PhaseId;
  /** Evidence already attached BEFORE this session — the "is this covered?" signal. */
  evidenceCount: number;
}

const C_FOREBAY = COMPONENTS[0].id; // Southern Forebay & Pumping Plant
const C_INTAKE_B = COMPONENTS[1].id; // Intake B — North Delta
const C_TWIN = COMPONENTS[2].id; // Twin Cities Complex

// Only the three components the prototype actually demonstrates carry a full action
// set; the rest resolve to a short list so switching scope still shows real rows.
export const ACTIONS: EvidenceAction[] = [
  // ── Southern Forebay & Pumping Plant ──
  {
    id: 'act-swha-preconstruction-survey',
    code: 'BIO-4.2',
    name: 'Preconstruction Swainson’s hawk nest survey',
    type: 'monitoring',
    frequency: 'recurring',
    period: 'Nesting season 2026',
    componentId: C_FOREBAY,
    phase: 'preconstruction',
    evidenceCount: 2,
  },
  {
    id: 'act-swha-buffer-monitoring',
    code: 'BIO-4.5',
    name: 'Swainson’s hawk active-nest buffer monitoring',
    type: 'monitoring',
    frequency: 'as-needed',
    period: 'Jul 2026 occurrence',
    componentId: C_FOREBAY,
    phase: 'construction',
    evidenceCount: 0,
  },
  {
    id: 'act-ggs-preconstruction-survey',
    code: 'BIO-6.1',
    name: 'Giant garter snake preconstruction survey',
    type: 'monitoring',
    frequency: 'recurring',
    period: 'Active season 2026',
    componentId: C_FOREBAY,
    phase: 'preconstruction',
    evidenceCount: 1,
  },
  {
    id: 'act-qualified-biologist',
    code: 'BIO-1.1',
    name: 'Retain qualified biologist for covered species',
    type: 'tracking',
    frequency: 'one-time',
    period: 'Before ground disturbance',
    componentId: C_FOREBAY,
    phase: 'planning',
    evidenceCount: 3,
  },
  {
    id: 'act-worker-training',
    code: 'BIO-2.3',
    otherCodes: ['BIO-6.4', 'CUL-1.2'],
    name: 'Worker environmental awareness training',
    type: 'tracking',
    frequency: 'recurring',
    period: 'Q3 2026 crews',
    componentId: C_FOREBAY,
    phase: 'preconstruction',
    evidenceCount: 4,
  },
  {
    id: 'act-daily-biological-monitoring',
    code: 'BIO-8.4',
    otherCodes: ['BIO-4.5', 'BIO-6.1', 'CUL-3.3'],
    name: 'Daily biological monitoring during ground disturbance',
    type: 'monitoring',
    frequency: 'ongoing',
    period: 'Jul 2026',
    componentId: C_FOREBAY,
    phase: 'construction',
    evidenceCount: 18,
  },
  {
    id: 'act-monthly-compliance-report',
    code: 'REP-3.1',
    otherCodes: ['REP-3.4', 'REP-5.1', 'ADM-2.2'],
    name: 'Monthly compliance monitoring report',
    type: 'reporting',
    frequency: 'recurring',
    period: 'Jul 2026',
    componentId: C_FOREBAY,
    phase: 'construction',
    evidenceCount: 1,
  },
  {
    id: 'act-noise-monitoring',
    code: 'NOI-2.2',
    name: 'Construction noise level monitoring at sensitive receptors',
    type: 'monitoring',
    frequency: 'recurring',
    period: 'Jul 2026',
    componentId: C_FOREBAY,
    phase: 'construction',
    evidenceCount: 5,
  },
  {
    id: 'act-dust-control-inspection',
    code: 'AIR-1.4',
    name: 'Fugitive dust control inspection',
    type: 'monitoring',
    frequency: 'ongoing',
    period: 'Jul 2026',
    componentId: C_FOREBAY,
    phase: 'construction',
    evidenceCount: 9,
  },
  {
    id: 'act-swppp-inspection',
    code: 'WQ-5.2',
    otherCodes: ['WQ-5.5'],
    name: 'SWPPP qualified-personnel site inspection',
    type: 'monitoring',
    frequency: 'recurring',
    period: 'Jul 2026',
    componentId: C_FOREBAY,
    phase: 'construction',
    evidenceCount: 6,
  },
  {
    id: 'act-cultural-monitoring',
    code: 'CUL-3.3',
    name: 'Archaeological monitoring during excavation',
    type: 'monitoring',
    frequency: 'as-needed',
    period: 'Jul 2026 occurrence',
    componentId: C_FOREBAY,
    phase: 'construction',
    evidenceCount: 0,
  },
  {
    id: 'act-haul-route-agreement',
    code: 'TRA-2.1',
    name: 'Execute haul route maintenance agreement',
    type: 'tracking',
    frequency: 'one-time',
    period: 'Before hauling begins',
    componentId: C_FOREBAY,
    phase: 'planning',
    evidenceCount: 1,
  },

  // ── Intake B — North Delta ──
  {
    id: 'act-ib-fish-screen-inspection',
    code: 'FSH-2.1',
    name: 'Fish screen criteria compliance inspection',
    type: 'monitoring',
    frequency: 'recurring',
    period: 'Q3 2026',
    componentId: C_INTAKE_B,
    phase: 'construction',
    evidenceCount: 2,
  },
  {
    id: 'act-ib-inwater-work-window',
    code: 'FSH-1.3',
    name: 'In-water work window conformance record',
    type: 'tracking',
    frequency: 'recurring',
    period: 'Jul–Oct 2026',
    componentId: C_INTAKE_B,
    phase: 'construction',
    evidenceCount: 0,
  },
  {
    id: 'act-ib-turbidity-monitoring',
    code: 'WQ-2.4',
    otherCodes: ['WQ-2.6', 'FSH-3.1'],
    name: 'Turbidity monitoring during in-water construction',
    type: 'monitoring',
    frequency: 'ongoing',
    period: 'Jul 2026',
    componentId: C_INTAKE_B,
    phase: 'construction',
    evidenceCount: 12,
  },
  {
    id: 'act-ib-worker-training',
    code: 'BIO-2.3',
    name: 'Worker environmental awareness training',
    type: 'tracking',
    frequency: 'recurring',
    period: 'Q3 2026 crews',
    componentId: C_INTAKE_B,
    phase: 'preconstruction',
    evidenceCount: 2,
  },
  {
    id: 'act-ib-monthly-compliance-report',
    code: 'REP-3.1',
    name: 'Monthly compliance monitoring report',
    type: 'reporting',
    frequency: 'recurring',
    period: 'Jul 2026',
    componentId: C_INTAKE_B,
    phase: 'construction',
    evidenceCount: 1,
  },
  {
    id: 'act-ib-pile-driving-hydroacoustic',
    code: 'FSH-4.2',
    name: 'Hydroacoustic monitoring during pile driving',
    type: 'monitoring',
    frequency: 'as-needed',
    period: 'Aug 2026 occurrence',
    componentId: C_INTAKE_B,
    phase: 'construction',
    evidenceCount: 0,
  },

  // ── Twin Cities Complex ──
  {
    id: 'act-tc-rtm-stockpile-inspection',
    code: 'WQ-7.1',
    name: 'Reusable tunnel material stockpile inspection',
    type: 'monitoring',
    frequency: 'recurring',
    period: 'Jul 2026',
    componentId: C_TWIN,
    phase: 'construction',
    evidenceCount: 3,
  },
  {
    id: 'act-tc-haul-route-agreement',
    code: 'TRA-2.1',
    name: 'Execute haul route maintenance agreement',
    type: 'tracking',
    frequency: 'one-time',
    period: 'Before hauling begins',
    componentId: C_TWIN,
    phase: 'planning',
    evidenceCount: 0,
  },
  {
    id: 'act-tc-worker-training',
    code: 'BIO-2.3',
    name: 'Worker environmental awareness training',
    type: 'tracking',
    frequency: 'recurring',
    period: 'Q3 2026 crews',
    componentId: C_TWIN,
    phase: 'preconstruction',
    evidenceCount: 1,
  },
  {
    id: 'act-tc-nesting-bird-survey',
    code: 'BIO-5.2',
    name: 'Nesting bird survey before vegetation removal',
    type: 'monitoring',
    frequency: 'as-needed',
    period: 'Jul 2026 occurrence',
    componentId: C_TWIN,
    phase: 'preconstruction',
    evidenceCount: 0,
  },
];

/** Every action whose implementation belongs to this component. Scope is absolute —
    nothing outside the component is ever reachable from the drawer. */
export const actionsFor = (componentId: string): EvidenceAction[] =>
  ACTIONS.filter((a) => a.componentId === componentId);

/** Display labels for the action TYPE facet — Beacon's three work areas. */
export const TYPE_LABEL: Record<ActionType, string> = {
  tracking: 'Tracking',
  monitoring: 'Monitoring',
  reporting: 'Reporting',
};

export const ACTION_TYPES: ActionType[] = ['tracking', 'monitoring', 'reporting'];

/** Actions in scope, narrowed by phase and type. An empty value means "all". */
export const actionsIn = (
  componentId: string,
  phase: PhaseId | '',
  type: ActionType | '' = ''
): EvidenceAction[] =>
  actionsFor(componentId).filter((a) => (!phase || a.phase === phase) && (!type || a.type === type));

export const actionById = (id: string): EvidenceAction | undefined =>
  ACTIONS.find((a) => a.id === id);

// ── Evidence items (the left side) ───────────────────────────────────────────
// The whole point of the shape below: an ITEM holds FILES. Three files dropped
// together are one item; a file dropped later is its own item. That is the entire
// file/EOC hand-wave, expressed as data instead of explained as copy.

export interface EvidenceFile {
  name: string;
  /** Human size string — presentational only. */
  size: string;
}

export interface EvidenceItem {
  id: string;
  title: string;
  notes: string;
  files: EvidenceFile[];
  /** How it entered the drawer — drives the quiet provenance line on the card. */
  origin: 'upload' | 'existing';
  /** Existing records only: when it landed in Beacon. */
  addedOn?: string;
}

/** The staged drop the prototype opens with: one multi-file item, one single-file item. */
export const STAGED_ITEMS: EvidenceItem[] = [
  {
    id: 'ev-staged-swha',
    title: 'Swainson’s hawk nest survey — Jul 14',
    notes: 'Two active nests recorded along the northern levee; surveyed by C. Anderson.',
    origin: 'upload',
    files: [
      { name: 'SWHA-nest-survey-2026-07-14.pdf', size: '2.4 MB' },
      { name: 'SWHA-nest-locations-2026-07-14.kmz', size: '318 KB' },
      { name: 'SWHA-survey-photos-2026-07-14.zip', size: '18.7 MB' },
    ],
  },
  {
    id: 'ev-staged-training',
    title: 'Worker training roster — Jul 16',
    notes: '34 crew signatures against the Q3 awareness curriculum.',
    origin: 'upload',
    files: [{ name: 'WEAP-training-roster-2026-07-16.pdf', size: '412 KB' }],
  },
];

/** Records already in Beacon — the corpus the left column's search reads. */
export const EXISTING_ITEMS: EvidenceItem[] = [
  {
    id: 'ev-exist-ggs-survey',
    title: 'Giant garter snake preconstruction survey — Jun 29',
    notes: 'No individuals observed; upland refugia mapped along the north levee toe.',
    origin: 'existing',
    addedOn: 'Jun 30, 2026',
    files: [{ name: 'GGS-preconstruction-survey-2026-06-29.pdf', size: '1.8 MB' }],
  },
  {
    id: 'ev-exist-biologist-quals',
    title: 'Qualified biologist statements of qualification',
    notes: 'Four approved biologists covering avian, herpetological and botanical scopes.',
    origin: 'existing',
    addedOn: 'May 12, 2026',
    files: [
      { name: 'SOQ-C-Anderson.pdf', size: '640 KB' },
      { name: 'SOQ-M-Okafor.pdf', size: '588 KB' },
      { name: 'SOQ-R-Delgado.pdf', size: '712 KB' },
      { name: 'SOQ-J-Whitfield.pdf', size: '604 KB' },
    ],
  },
  {
    id: 'ev-exist-noise-readings',
    title: 'Noise level readings — week of Jul 6',
    notes: 'Five sensitive receptors, all below the 75 dBA construction threshold.',
    origin: 'existing',
    addedOn: 'Jul 10, 2026',
    files: [{ name: 'noise-readings-2026-07-06.xlsx', size: '96 KB' }],
  },
  {
    id: 'ev-exist-swppp-inspection',
    title: 'SWPPP inspection report — Jul 9',
    notes: 'Two corrective actions logged at the southern stockpile; both closed Jul 11.',
    origin: 'existing',
    addedOn: 'Jul 11, 2026',
    files: [{ name: 'SWPPP-inspection-2026-07-09.pdf', size: '1.1 MB' }],
  },
  {
    id: 'ev-exist-dust-log',
    title: 'Dust control log — Jul 2026',
    notes: 'Daily watering passes and wind-speed shutdowns for the month to date.',
    origin: 'existing',
    addedOn: 'Jul 17, 2026',
    files: [{ name: 'dust-control-log-2026-07.pdf', size: '520 KB' }],
  },
  {
    id: 'ev-exist-haul-agreement',
    title: 'Executed haul route maintenance agreement',
    notes: 'Countersigned by the county public works director.',
    origin: 'existing',
    addedOn: 'Apr 3, 2026',
    files: [{ name: 'haul-route-agreement-executed.pdf', size: '3.2 MB' }],
  },
  {
    id: 'ev-exist-cultural-brief',
    title: 'Cultural resources monitoring brief — Jul 8',
    notes: 'No cultural material encountered during the utility trench excavation.',
    origin: 'existing',
    addedOn: 'Jul 9, 2026',
    files: [{ name: 'cultural-monitoring-brief-2026-07-08.pdf', size: '780 KB' }],
  },
  {
    id: 'ev-exist-nesting-bird-sweep',
    title: 'Nesting bird sweep — Jun 22',
    notes: 'Two mourning dove nests flagged with 50-ft buffers; released Jul 6.',
    origin: 'existing',
    addedOn: 'Jun 23, 2026',
    files: [
      { name: 'nesting-bird-sweep-2026-06-22.pdf', size: '1.4 MB' },
      { name: 'nest-buffer-map-2026-06-22.pdf', size: '2.9 MB' },
    ],
  },
];

// ── Suggested matches (the utility's output) ─────────────────────────────────
// Two tiers, per the confidence-indexing idea: what we are actually suggesting, and
// what we are unsure about but will show if asked. The rationale on every row is what
// makes "the LLM suggests, the human approves" a reviewable claim rather than a verdict
// — you can tell WHY a row is here and disagree with it.
//
// The narrowing Andrew described is visible in the data: monitoring/survey content only
// reaches monitoring-type actions, and CONTENT decides which one — the Swainson's hawk
// files and the giant garter snake record land on different actions even though both are
// preconstruction surveys.

export type SuggestionTier = 'suggested' | 'less-certain';

export interface EvidenceSuggestion {
  /** Evidence item this is a match for. */
  itemId: string;
  actionId: string;
  tier: SuggestionTier;
  /** One line, plain language: what in the evidence pointed at this action. */
  rationale: string;
}

export const SUGGESTIONS: EvidenceSuggestion[] = [
  // Swainson's hawk survey packet → the two SWHA actions, confidently.
  {
    itemId: 'ev-staged-swha',
    actionId: 'act-swha-preconstruction-survey',
    tier: 'suggested',
    rationale:
      'Survey report names Swainson’s hawk and the preconstruction window; monitoring evidence, monitoring action.',
  },
  {
    itemId: 'ev-staged-swha',
    actionId: 'act-swha-buffer-monitoring',
    tier: 'suggested',
    rationale: 'Two active nests recorded, which is what opens the buffer monitoring occurrence.',
  },
  {
    itemId: 'ev-staged-swha',
    actionId: 'act-daily-biological-monitoring',
    tier: 'less-certain',
    rationale: 'Survey dates fall inside the daily monitoring period, but the report is not a daily log.',
  },
  {
    itemId: 'ev-staged-swha',
    actionId: 'act-ggs-preconstruction-survey',
    tier: 'less-certain',
    rationale: 'Also a preconstruction survey, but it records no giant garter snake effort.',
  },

  // Training roster → the training action, confidently.
  {
    itemId: 'ev-staged-training',
    actionId: 'act-worker-training',
    tier: 'suggested',
    rationale: 'Roster lists 34 crew signatures against the Q3 awareness training curriculum.',
  },
  {
    itemId: 'ev-staged-training',
    actionId: 'act-qualified-biologist',
    tier: 'less-certain',
    rationale: 'The trainer is a listed qualified biologist, but a roster is not a qualification record.',
  },

  // Existing records, for the "Use existing" entry point.
  {
    itemId: 'ev-exist-ggs-survey',
    actionId: 'act-ggs-preconstruction-survey',
    tier: 'suggested',
    rationale: 'Survey scope and species match the action exactly; dated inside the active season.',
  },
  {
    itemId: 'ev-exist-biologist-quals',
    actionId: 'act-qualified-biologist',
    tier: 'suggested',
    rationale: 'Four statements of qualification covering the species this action names.',
  },
  {
    itemId: 'ev-exist-noise-readings',
    actionId: 'act-noise-monitoring',
    tier: 'suggested',
    rationale: 'Receptor readings for the monitoring period; noise evidence, noise action.',
  },
  {
    itemId: 'ev-exist-noise-readings',
    actionId: 'act-monthly-compliance-report',
    tier: 'less-certain',
    rationale: 'Readings feed the month’s report, but the report itself is the evidence for that action.',
  },
  {
    itemId: 'ev-exist-ggs-survey',
    actionId: 'act-daily-biological-monitoring',
    tier: 'less-certain',
    rationale: 'A biologist was on site that day, but a survey is not the daily monitoring log.',
  },
  {
    itemId: 'ev-exist-biologist-quals',
    actionId: 'act-worker-training',
    tier: 'less-certain',
    rationale: 'Two of these biologists deliver the training, but qualifications are not a roster.',
  },
  {
    itemId: 'ev-exist-swppp-inspection',
    actionId: 'act-swppp-inspection',
    tier: 'suggested',
    rationale: 'Inspection by qualified personnel, dated inside the reporting period.',
  },
  {
    itemId: 'ev-exist-swppp-inspection',
    actionId: 'act-dust-control-inspection',
    tier: 'less-certain',
    rationale: 'Same walk covered the stockpiles, but dust control has its own inspection record.',
  },
  {
    itemId: 'ev-exist-dust-log',
    actionId: 'act-dust-control-inspection',
    tier: 'suggested',
    rationale: 'Daily watering passes and wind shutdowns for the month — the action’s own record.',
  },
  {
    itemId: 'ev-exist-haul-agreement',
    actionId: 'act-haul-route-agreement',
    tier: 'suggested',
    rationale: 'Countersigned agreement; the action asks for exactly this document.',
  },
  {
    itemId: 'ev-exist-cultural-brief',
    actionId: 'act-cultural-monitoring',
    tier: 'suggested',
    rationale: 'Monitoring brief for the trench excavation this occurrence covers.',
  },
  {
    itemId: 'ev-exist-nesting-bird-sweep',
    actionId: 'act-daily-biological-monitoring',
    tier: 'suggested',
    rationale: 'Pre-disturbance sweep logged by the on-site biologist during ground disturbance.',
  },
  {
    itemId: 'ev-exist-nesting-bird-sweep',
    actionId: 'act-swha-preconstruction-survey',
    tier: 'less-certain',
    rationale: 'Nesting birds were surveyed, but no Swainson’s hawk was recorded on this sweep.',
  },
];

/** Any evidence record by id, whichever pool it came from. */
export const itemById = (id: string): EvidenceItem | undefined =>
  [...STAGED_ITEMS, ...EXISTING_ITEMS].find((i) => i.id === id);

/** Suggestions for a set of staged items, in tier order — the utility's answer. */
export const suggestionsFor = (itemIds: string[], tier: SuggestionTier): EvidenceSuggestion[] =>
  SUGGESTIONS.filter((s) => itemIds.includes(s.itemId) && s.tier === tier);

// ── Entry presets (the four ways in) ─────────────────────────────────────────
// Each preset is the state the drawer opens into. `cold` is the bottom-bar case with
// nothing pre-filled; the other three are the contextual openings Andrew named.

export interface EntryPreset {
  id: string;
  /** Card title on the prototype page. */
  label: string;
  /** One line: what this opening is for. */
  blurb: string;
  /** Actions already on the right when the drawer opens. */
  actionIds: string[];
  /** Evidence already staged on the left. */
  itemIds: string[];
  /**
   * The component this opening forces. EMPTY means "whatever the user was last working
   * in" — which is the correct answer for the cold open, and the whole reason the active
   * component is persisted. A contextual opening carries its own action's component, so
   * it names one.
   */
  componentId: string;
}

export const ENTRY_PRESETS: EntryPreset[] = [
  {
    id: 'cold',
    label: 'From anywhere',
    blurb:
      'The Attach Evidence of Compliance button in the bottom bar, with no context at all — the "I have a PDF on my desktop" case. Nothing is on the right yet; the component you last worked in is already selected.',
    actionIds: [],
    itemIds: [],
    // Empty on purpose: the cold open keeps the component you were last in.
    componentId: '',
  },
  {
    id: 'single-action',
    label: 'From an action',
    blurb:
      'Add evidence from an open action opens the same global drawer with that one action already on the right, instead of a drawer inside a dialog.',
    actionIds: ['act-swha-preconstruction-survey'],
    itemIds: ['ev-staged-swha'],
    componentId: C_FOREBAY,
  },
  {
    id: 'bulk',
    label: 'From a bulk update',
    blurb:
      'Select several actions in a list and add evidence to all of them at once — the case that replaces today’s modal-on-top-of-a-sidebar flow.',
    actionIds: [
      'act-qualified-biologist',
      'act-worker-training',
      'act-swha-preconstruction-survey',
      'act-ggs-preconstruction-survey',
    ],
    itemIds: ['ev-staged-training'],
    componentId: C_FOREBAY,
  },
  {
    id: 'existing',
    label: 'Evidence already in Beacon',
    blurb:
      'The same workspace, but the left side picks records that are already in the system rather than uploading anything new.',
    actionIds: [],
    itemIds: ['ev-exist-ggs-survey', 'ev-exist-biologist-quals'],
    componentId: C_FOREBAY,
  },
];

export const presetById = (id: string): EntryPreset =>
  ENTRY_PRESETS.find((p) => p.id === id) ?? ENTRY_PRESETS[0];

// ── The bulk-update entry point's mocked list ────────────────────────────────
// The four rows shown pre-checked on the prototype page's bulk card.
export const BULK_PRESELECTED = presetById('bulk').actionIds;

// ── The single-action entry point's mocked dialog ────────────────────────────
export const SINGLE_ACTION_ID = presetById('single-action').actionIds[0];

// ── Uploading: the draft card on the Add New tab ─────────────────────────────
// A browser cannot be handed a real OS file drop deterministically, and the house rule is
// that a demo renders identically every run — so a drop pulls the NEXT file off this queue
// instead of reading the drop event. The four belong together on purpose: they are one
// monitoring event arriving as four artefacts, which is exactly the "several files, one
// piece of evidence" case the drawer exists to make possible.
export const INCOMING_FILES: EvidenceFile[] = [
  { name: 'IB-turbidity-log-2026-07-22.xlsx', size: '86 KB' },
  { name: 'IB-turbidity-field-notes-2026-07-22.pdf', size: '1.2 MB' },
  { name: 'IB-probe-calibration-2026-07-22.pdf', size: '244 KB' },
  { name: 'IB-turbidity-photos-2026-07-22.zip', size: '14.3 MB' },
];

/**
 * What the suggestion utility proposes for a draft, from the files it holds.
 *
 * DETERMINISTIC — same files in, same words out, every run. The title is fixed by the first
 * file (the thing that decided what this record is); the description grows as more files
 * join, because the point of the card is to show the utility reading the SET rather than
 * one attachment. No "AI" anywhere in what it returns: this is a proposal the human edits.
 */
export const draftSuggestion = (files: EvidenceFile[]): { title: string; notes: string } => {
  if (files.length === 0) return { title: '', notes: '' };
  const base = 'Intake B turbidity monitoring — Jul 22';
  const parts: string[] = ['Continuous turbidity readings at the Intake B cofferdam, 06:00–18:00.'];
  if (files.some((f) => f.name.includes('field-notes'))) {
    parts.push('Field notes record two exceedances of the 15 NTU trigger, both cleared within the hour.');
  }
  if (files.some((f) => f.name.includes('calibration'))) {
    parts.push('Probe calibration certificate covers the monitoring window.');
  }
  if (files.some((f) => f.name.includes('photos'))) {
    parts.push('Photo set documents the turbidity curtain at each reading.');
  }
  return { title: base, notes: parts.join(' ') };
};

/**
 * Empty card shells for records the user creates during the session.
 *
 * The evidence cards are Astro — compiled at build time — so a record invented at RUNTIME
 * has no card to live in. Rather than hand-assemble one from lego markup in JavaScript
 * (which bypasses the design system and no gate can see), the list renders these shells
 * through the SAME map as every other card and the controller fills them in. One definition
 * of the card, no duplicated markup.
 *
 * Four is the ceiling because INCOMING_FILES holds four files, so four is the most separate
 * records this prototype can produce.
 */
export const NEW_SLOTS: EvidenceItem[] = [1, 2, 3, 4].map((n) => ({
  id: `ev-new-${n}`,
  title: '',
  notes: '',
  origin: 'upload' as const,
  files: [],
}));

/**
 * Lucide `triangle-alert` — the platform's warning mark (it is in Beacon's own ui-icon
 * registry, so this is the glyph the app already uses to mean "attention").
 *
 * Lives in the fixture rather than in a component because BOTH the drawer footer and the
 * draft card draw it, and the two must be the same mark.
 */
export const WARN_ICON =
  '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>';
