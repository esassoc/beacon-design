// ACTION TRACKING — the fixture behind /prototypes/actions, the redesign of prod's
// Compliance Tracking page (Kanban / Timeline / Grid) as "Actions" (Andy, 2026-10-06).
//
// THE BOARD HOLDS ACTION IMPLEMENTATIONS, nothing else. Prod nests the action over its
// implementations ("#1 Not Started" rows inside an action card); Andy: "on the board
// should just be action implementations from here on out." One card is one
// ActionImplementation: an ITP action carried out on one component.
//
// WHICH ACTIONS: the desk-based ones, the same type set the "Desktop Actions" list
// already uses (lists.ts DESK_TYPES): plans, approvals and consultations, reports,
// analyses, financial, design. Surveys, monitoring and BMPs are field work and belong to
// the Monitoring portal.
//
// STATUS = A BACKBONE + USER COLUMNS. Prod's ActionImplementationStatus enum is
// NotStarted / InProgress / Completed; rollups, the Compliance Index and reports read
// it. Andy, 2026-10-06: users define their own columns ("not just not started, in
// progress, or completed"), each one mapped to a backbone category, so every custom
// workflow still answers "is it done". Workflows are PROJECT-WIDE and PER ACTION TYPE:
// a plan moves Drafting → Internal Review → Submitted → Agency Comments → Approved,
// an approval request moves on its own stages. Not Applicable is prod's IsNotApplicable
// flag, not a status; overdue is derived from the due date, never stored.
//
// INVENTED and DETERMINISTIC: the actions and requirements are the real ITP fixture;
// which component an action is implemented on, its status, assignee and dates are
// hashed from ids so every run renders the same board. No Date.now().

import { ITP, REQUIREMENT_TYPE_LABEL, PHASES, type RequirementType, type WizardAction, type WizardRequirement } from './setup-wizard';
import { ACTION_LISTS, DESK_TYPES } from './lists';
import { COMPONENTS } from './evidence-drawer';
import { ACTIONS_TODAY, epochDay, isoOf, urgencyOf, type BoardColumn, type StatusCategory, type Workflow } from './action-status';

export * from './action-status';
import { implementationsOf } from './list-implementations';
import { DENSE, marksForProject } from './component-dashboard';
import type { EntityMark } from './entity-marks';

/* ── Workflows (project-wide, per action type) ───────────────────────────── */

const col = (wf: string, name: string, category: StatusCategory): BoardColumn => ({
  id: `${wf}-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '')}`,
  name,
  category,
});

export const DEFAULT_WORKFLOWS: Workflow[] = [
  {
    id: 'plans',
    name: 'Plans',
    types: ['Plan', 'Design'],
    columns: [
      col('plans', 'Not Started', 'NotStarted'),
      col('plans', 'Drafting', 'InProgress'),
      col('plans', 'Internal Review', 'InProgress'),
      col('plans', 'Submitted to Agency', 'InProgress'),
      col('plans', 'Agency Comments', 'InProgress'),
      col('plans', 'Approved', 'Completed'),
    ],
  },
  {
    id: 'approvals',
    name: 'Approvals & Consultations',
    types: ['ApprovalAndConsultation'],
    columns: [
      col('approvals', 'Not Started', 'NotStarted'),
      col('approvals', 'Preparing Request', 'InProgress'),
      col('approvals', 'Submitted', 'InProgress'),
      col('approvals', 'Under Agency Review', 'InProgress'),
      col('approvals', 'Approved', 'Completed'),
    ],
  },
  {
    id: 'reporting',
    name: 'Reporting',
    types: ['Reporting', 'Analysis'],
    columns: [
      col('reporting', 'Not Started', 'NotStarted'),
      col('reporting', 'Collecting Data', 'InProgress'),
      col('reporting', 'Drafting', 'InProgress'),
      col('reporting', 'QA/QC', 'InProgress'),
      col('reporting', 'Submitted', 'Completed'),
    ],
  },
  {
    id: 'other',
    name: 'Financial & Other',
    types: ['Financial', 'Other'],
    columns: [
      col('other', 'Not Started', 'NotStarted'),
      col('other', 'In Progress', 'InProgress'),
      col('other', 'Completed', 'Completed'),
    ],
  },
];

/** The action types this page tracks, in the Type filter's order. */
export const BOARD_TYPES: RequirementType[] = ['Plan', 'Design', 'ApprovalAndConsultation', 'Reporting', 'Analysis', 'Financial', 'Other'];
export const TYPE_LABEL = REQUIREMENT_TYPE_LABEL;

/* ── Implementations ─────────────────────────────────────────────────────── */

export type Frequency = 'Onetime' | 'Recurring' | 'AsNeeded' | 'Ongoing';
export const FREQUENCY_LABEL: Record<Frequency, string> = {
  Onetime: 'One-time',
  Recurring: 'Recurring',
  AsNeeded: 'As needed',
  Ongoing: 'Ongoing',
};

export interface ImplRequirement {
  id: string;
  name: string;
  code: string;
  text: string;
  phases: string[];
  scope: string;
  activities: string[];
}

export interface ActionImpl {
  /** ActionImplementationID — `<actionId>|<componentId>`. */
  id: string;
  actionId: string;
  name: string;
  /** Action.ActionText — the dialog's Summary. */
  text: string;
  type: RequirementType;
  componentId: string;
  componentName: string;
  /** ClientCommitmentIDs, in code order. */
  codes: string[];
  /** Union of the requirements' phases, in project order. */
  phases: string[];
  frequency: Frequency;
  /** SequenceNumber — the occurrence, for recurring and as-needed work. */
  sequence: number;
  /** The milestone the deadline hangs from, when the permit names one. */
  milestone: string | null;
  /** ISO. Null when the deadline is unscheduled (prod "Not set"). */
  dueDate: string | null;
  /** ISO, Completed only. */
  completedDate: string | null;
  /** The column the fixture seeds it in (a DEFAULT_WORKFLOWS column id). */
  columnId: string;
  category: StatusCategory;
  assignee: string | null;
  responsibleParty: string | null;
  notApplicable: boolean;
  flagged: boolean;
  evidence: number;
  comments: number;
  expectedEvidence: string;
  activities: string[];
  requirements: ImplRequirement[];
  /** Action lists that hold this action. */
  lists: { id: string; name: string }[];
}

// FNV-1a — the same scatter list-implementations.ts uses.
const hash = (s: string): number => {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 0x01000193) >>> 0;
  return h;
};

const REQ_BY_ID = new Map(ITP.requirements.map((r) => [r.id, r]));
const uniq = <T,>(xs: T[]) => [...new Set(xs)];

/** Invented people, the same roster the tracker and comments fixtures draw on. */
export const ASSIGNEES = ['Maria Chen', 'James Okafor', 'Priya Patel', 'Dana Whitfield', 'Luis Ortega', 'Hannah Brooks'];

export const workflowOf = (type: RequirementType, workflows: Workflow[] = DEFAULT_WORKFLOWS): Workflow =>
  workflows.find((w) => w.types.includes(type)) ?? workflows[workflows.length - 1];

const toCategory = (s: string): StatusCategory =>
  s === 'not-started' ? 'NotStarted' : s === 'completed' ? 'Completed' : 'InProgress';

const codeOrder = (a: string, b: string) => a.localeCompare(b, undefined, { numeric: true });

const buildImpl = (a: WizardAction, componentId: string, seed: { status: string; comments: number; evidence: number }): ActionImpl => {
  const id = `${a.id}|${componentId}`;
  const h = hash(id);
  const reqs = a.requirementIds.map((r) => REQ_BY_ID.get(r)).filter((r): r is WizardRequirement => !!r);
  const stated = (a.timing?.frequency ?? reqs[0]?.frequency ?? 'Onetime') as Frequency;
  const frequency: Frequency = stated in FREQUENCY_LABEL ? stated : 'Onetime';
  const category = toCategory(seed.status);
  const wf = workflowOf(a.type);
  const inCat = wf.columns.filter((c) => c.category === category);
  const column = inCat[(h >>> 5) % inCat.length];

  // Dates: completed work finished in the last half year; open work is due anywhere
  // from six weeks ago (overdue) to eighteen months out. About one in six open items
  // has no date yet, the as-needed ones most of all.
  const today = epochDay(ACTIONS_TODAY);
  const undated = category !== 'Completed' && (frequency === 'AsNeeded' ? h % 3 === 0 : h % 7 === 0);
  const dueDate = undated ? null
    : category === 'Completed' ? isoOf(today - 20 - ((h >>> 7) % 160))
    : isoOf(today - 42 + ((h >>> 7) % 540));
  const completedDate = category === 'Completed' && dueDate ? isoOf(epochDay(dueDate) - ((h >>> 11) % 12)) : null;

  return {
    id,
    actionId: a.id,
    name: a.name,
    text: a.text,
    type: a.type,
    componentId,
    componentName: COMPONENTS.find((c) => c.id === componentId)?.name ?? componentId,
    codes: uniq(reqs.map((r) => r.commitment)).sort(codeOrder),
    phases: PHASES.filter((p) => reqs.some((r) => r.phases.includes(p))),
    frequency,
    sequence: frequency === 'Recurring' || frequency === 'AsNeeded' ? 1 + ((h >>> 9) % 4) : 1,
    milestone: a.timing?.deadline?.milestone ?? null,
    dueDate,
    completedDate,
    columnId: column.id,
    category,
    assignee: (h >>> 13) % 5 === 0 ? null : ASSIGNEES[(h >>> 15) % ASSIGNEES.length],
    responsibleParty: reqs.find((r) => r.responsibleParty)?.responsibleParty ?? null,
    notApplicable: (h >>> 17) % 23 === 0,
    flagged: (h >>> 19) % 11 === 0,
    evidence: seed.evidence,
    comments: seed.comments,
    expectedEvidence: a.expectedEvidence,
    activities: uniq(reqs.flatMap((r) => r.activities)),
    requirements: reqs.map((r) => ({
      id: r.id,
      name: r.name,
      code: r.commitment,
      text: r.text,
      phases: r.phases,
      scope: r.scope,
      activities: r.activities,
    })),
    lists: ACTION_LISTS.filter((l) => l.actionIds.includes(a.id)).map((l) => ({ id: l.id, name: l.name })),
  };
};

/** Every implementation of every desk action, across all components. */
export const IMPLEMENTATIONS: ActionImpl[] = ITP.actions
  .filter((a) => DESK_TYPES.has(a.type))
  .flatMap((a) =>
    implementationsOf(a.id).map((seed) => {
      const componentId = seed.id.split('|')[1];
      return buildImpl(a, componentId, seed);
    }),
  );

/** Components that hold at least one implementation, in register order. */
export const BOARD_COMPONENTS = COMPONENTS.filter((c) => IMPLEMENTATIONS.some((i) => i.componentId === c.id));

/**
 * Each component's identity mark (glyph × color), keyed by component NAME. Assigned
 * across the project's whole register with marksForProject(), the same call the
 * Components grid makes, so a component wears the same mark here as on its dashboard.
 * Fill weight: in the switcher and the dialog header the mark is the landmark, which is
 * prod's ComponentIdentityMark `fill` + `seal` treatment.
 */
const PROJECT_MARKS = marksForProject(DENSE);
export const COMPONENT_MARKS: Record<string, EntityMark> = Object.fromEntries(
  BOARD_COMPONENTS.map((c) => {
    const mark = PROJECT_MARKS.get(c.name) ?? { glyph: 'map-pin', color: 'slate', style: 'fill' };
    return [c.name, { ...mark, style: 'fill' } satisfies EntityMark];
  }),
);

/* ── Filter facets ───────────────────────────────────────────────────────── */

export interface FacetOption { value: string; label: string }

export const FACETS = {
  type: BOARD_TYPES.filter((t) => IMPLEMENTATIONS.some((i) => i.type === t)).map((t) => ({ value: t, label: TYPE_LABEL[t] })),
  phase: PHASES.filter((p) => IMPLEMENTATIONS.some((i) => i.phases.includes(p))).map((p) => ({ value: p, label: p })),
  assignee: [...ASSIGNEES.map((a) => ({ value: a, label: a })), { value: '__none', label: 'Unassigned' }],
  frequency: (Object.keys(FREQUENCY_LABEL) as Frequency[])
    .filter((f) => IMPLEMENTATIONS.some((i) => i.frequency === f))
    .map((f) => ({ value: f, label: FREQUENCY_LABEL[f] })),
  due: [
    { value: 'overdue', label: 'Overdue' },
    { value: 'due-soon', label: 'Due in 30 days' },
    { value: 'upcoming', label: 'Due later' },
    { value: 'none', label: 'No due date' },
  ],
  list: ACTION_LISTS.filter((l) => IMPLEMENTATIONS.some((i) => i.lists.some((x) => x.id === l.id))).map((l) => ({ value: l.id, label: l.name })),
} satisfies Record<string, FacetOption[]>;

export type FacetKey = keyof typeof FACETS;
