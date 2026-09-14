// SETUP WIZARD — the five-step pipeline and the fixtures its steps review.
//
// The wizard grew a fifth step on 2026-09-14 (Beacon PM check-in): a requirement
// routes to an ACTION (dated work with a deliverable) or an OBLIGATION (a
// standing duty in effect while its conditions apply), not both. Step 4 reviews
// the actions the bulk-extraction tool drafted; step 5 reviews the obligations
// as ONE LIST — category > subcategory > obligation — and approves the taxonomy
// at once, not row by row.
//
// Two fixtures, both real:
//   · setup-wizard-itp.json — the Incidental Take Permit's 854 requirements, the
//     267 actions and 333 obligations drafted from them in one pass (2026-09-14),
//     with every action→requirement and obligation→requirement link. Step 4.
//   · dcp-obligations-registry.json — the 402-obligation registry shaped on
//     2026-09-02, whose SUBJECT axis (17 groups, 69 items) is the category >
//     subcategory taxonomy step 5 reviews.
// No obligation or requirement below is invented.

import registry from './dcp-obligations-registry.json';
import itp from './setup-wizard-itp.json';

// ── Steps ─────────────────────────────────────────────────────────────────────

export type SetupStepId = 'source-documents' | 'commitments' | 'requirements' | 'actions' | 'obligations';
export type SetupStepToken = 'source' | 'commitment' | 'requirement' | 'action' | 'obligation';

export interface SetupStep {
  id: SetupStepId;
  n: number;
  label: string;
  /** --color-<token>: the step's entity color on Beacon's setup ramp. */
  token: SetupStepToken;
  /** One line under the step name on the wizard's overview. */
  line: string;
  /** Root-relative route (wrap with withBase at render). Steps 1–3 are stubs here. */
  href: string;
  /** Inline Lucide path markup for the step's entity glyph. */
  iconPaths: string;
}

// Lucide glyphs — inner SVG markup only, the same idiom AppShell uses.
export const STEP_GLYPH = {
  'file-text':
    '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  handshake:
    '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>',
  'list-checks':
    '<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>',
  'square-check-big':
    '<path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5"/><path d="m9 11 3 3L22 4"/>',
  'shield-check':
    '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  compass:
    '<path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/><circle cx="12" cy="12" r="10"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
} as const;

export const SETUP_STEPS: SetupStep[] = [
  {
    id: 'source-documents',
    n: 1,
    label: 'Source Documents',
    token: 'source',
    line: 'Upload permits, plans and agreements. Beacon reads them page by page.',
    href: '#setup-source-documents',
    iconPaths: STEP_GLYPH['file-text'],
  },
  {
    id: 'commitments',
    n: 2,
    label: 'Commitments',
    token: 'commitment',
    line: 'Every enforceable commitment, cited to the page it came from.',
    href: '#setup-commitments',
    iconPaths: STEP_GLYPH.handshake,
  },
  {
    id: 'requirements',
    n: 3,
    label: 'Requirements',
    token: 'requirement',
    line: 'Each commitment split into what, when and who — one requirement per duty.',
    href: '#setup-requirements',
    iconPaths: STEP_GLYPH['list-checks'],
  },
  {
    id: 'actions',
    n: 4,
    label: 'Actions',
    token: 'action',
    line: 'Dated work with a deliverable — plans, reports, approvals — drafted for review.',
    href: '/prototypes/setup-wizard/actions',
    iconPaths: STEP_GLYPH['square-check-big'],
  },
  {
    id: 'obligations',
    n: 5,
    label: 'Obligations',
    token: 'obligation',
    line: 'Standing duties in effect while the work runs — reviewed as one list, approved at once.',
    href: '/prototypes/setup-wizard/obligations',
    iconPaths: STEP_GLYPH['shield-check'],
  },
];

/** Steps 1–3 are complete on the fixture project; 4 and 5 are the review steps. */
export const COMPLETE_STEPS: SetupStepId[] = ['source-documents', 'commitments', 'requirements'];

// ── Obligation taxonomy (step 5) ──────────────────────────────────────────────

export type ObligationClass = 'adhere' | 'monitor' | 'notify' | 'roster';

export const OBLIGATION_CLASS_LABEL: Record<ObligationClass, string> = {
  adhere: 'Adhere',
  monitor: 'Monitor',
  notify: 'Notify',
  roster: 'Roster',
};

export interface ObligationRow {
  id: string;
  /** Noun phrase naming the thing governed, never the value. */
  title: string;
  class: ObligationClass;
  /** The requirement text. */
  standard: string;
  /** The non-compliance a monitor observes. */
  condition: string;
  /** Where sources disagree, e.g. "10 mph in the ITP, 15 mph in the BiOp". */
  parameters: string;
  species: string[];
  /** Notify window, e.g. "24 hours"; empty for other classes. */
  window: string;
  /** Commitment codes this obligation traces to (BIO-34, CM 6.3.2.2, COA 5.1 …). */
  commitments: string[];
  /** Waits on an approved plan. */
  gate: boolean;
  installedControl: boolean;
  /** Subject item ids — the first is the row's home in the tree. */
  subjects: string[];
  activities: string[];
}

export interface ObligationSubcategory {
  id: string;
  name: string;
  /** What belongs here, from the registry. */
  scope: string;
  obligations: ObligationRow[];
}

export interface ObligationCategory {
  id: string;
  name: string;
  subcategories: ObligationSubcategory[];
  count: number;
}

interface RegistryAxisItem { id: string; name: string; scope: string; n: number }
interface RegistryAxisGroup { id: string; name: string; items: RegistryAxisItem[]; n: number }
interface RegistryAxis { id: string; groups: RegistryAxisGroup[] }
interface RegistryObligation {
  id: string; title: string; class: string; standard: string; condition: string; parameters: string;
  species: string[]; window: string; commitments: string[]; gate: boolean; installed_control: boolean;
  subjects: string[]; activities: string[];
}

const axes = (registry as { axes: RegistryAxis[] }).axes;
const subjectAxis = axes.find((a) => a.id === 'subject')!;
const registryRows = (registry as { obligations: RegistryObligation[] }).obligations;

export const OBLIGATIONS: ObligationRow[] = registryRows.map((o) => ({
  id: o.id,
  title: o.title,
  class: o.class as ObligationClass,
  standard: o.standard,
  condition: o.condition,
  parameters: o.parameters,
  species: o.species,
  window: o.window,
  commitments: o.commitments,
  gate: o.gate,
  installedControl: o.installed_control,
  subjects: o.subjects,
  activities: o.activities,
}));

/**
 * Category > subcategory > obligation, from the registry's subject axis. An
 * obligation that names several subjects is HOMED under its first — one list,
 * every row exactly once — and its other subjects stay on the row.
 */
export const OBLIGATION_TAXONOMY: ObligationCategory[] = subjectAxis.groups
  .map((g) => {
    const subcategories = g.items
      .map((it) => ({
        id: it.id,
        name: it.name,
        scope: it.scope,
        obligations: OBLIGATIONS.filter((o) => o.subjects[0] === it.id).sort((a, b) =>
          a.title.localeCompare(b.title),
        ),
      }))
      .filter((s) => s.obligations.length > 0)
      .sort((a, b) => a.name.localeCompare(b.name));
    return {
      id: g.id,
      name: g.name,
      subcategories,
      count: subcategories.reduce((n, s) => n + s.obligations.length, 0),
    };
  })
  .filter((c) => c.count > 0)
  .sort((a, b) => a.name.localeCompare(b.name));

export const OBLIGATION_TOTALS = {
  obligations: OBLIGATIONS.length,
  categories: OBLIGATION_TAXONOMY.length,
  subcategories: OBLIGATION_TAXONOMY.reduce((n, c) => n + c.subcategories.length, 0),
  byClass: (['adhere', 'monitor', 'notify', 'roster'] as ObligationClass[]).map((c) => ({
    class: c,
    count: OBLIGATIONS.filter((o) => o.class === c).length,
  })),
  gated: OBLIGATIONS.filter((o) => o.gate).length,
};

// ── ITP fixture (step 4) ──────────────────────────────────────────────────────

export type RequirementType =
  | 'AvoidanceAndBMPs' | 'Reporting' | 'Monitoring' | 'ApprovalAndConsultation' | 'Plan' | 'Analysis'
  | 'Survey' | 'RestorationAndMitigation' | 'Financial' | 'Other' | 'TrainingAndEducation' | 'Design';

export const REQUIREMENT_TYPE_LABEL: Record<RequirementType, string> = {
  AvoidanceAndBMPs: 'Avoidance & BMPs',
  Reporting: 'Reporting',
  Monitoring: 'Monitoring',
  ApprovalAndConsultation: 'Approval & Consultation',
  Plan: 'Plan',
  Analysis: 'Analysis',
  Survey: 'Survey',
  RestorationAndMitigation: 'Restoration & Mitigation',
  Financial: 'Financial',
  Other: 'Other',
  TrainingAndEducation: 'Training & Education',
  Design: 'Design',
};

/** The project's lifecycle, in order — the phase picker's order. */
export const PHASES = [
  'Implementation Planning',
  'Pre-Construction',
  'Construction',
  'Post-Construction',
  'Operations',
  'Maintenance',
] as const;
export type Phase = (typeof PHASES)[number];

export interface StatedTiming {
  frequency?: 'Onetime' | 'Recurring' | 'AsNeeded' | 'Ongoing' | string;
  deadline?: { milestone?: string; direction?: string; offset?: number; unit?: string; isRange?: boolean };
  recurrence?: Record<string, unknown>;
  asNeeded?: { trigger?: string };
  recipient?: string;
  /** The schedule as the source states it. */
  stated?: string;
}

export interface WizardRequirement {
  id: string;
  /** Client commitment id, e.g. "COA 5.1". */
  commitment: string;
  commitmentTitle: string;
  name: string;
  text: string;
  type: RequirementType;
  scope: string;
  frequency: string | null;
  phases: string[];
  species: string[];
  activities: string[];
  responsibleParty: string | null;
  deliverable: string | null;
  timing: StatedTiming;
}

export type DeliverableType =
  | 'plan' | 'report' | 'survey' | 'notification' | 'training' | 'payment' | 'installation' | 'approval' | 'other';

export interface WizardAction {
  id: string;
  name: string;
  text: string;
  type: RequirementType;
  timing: StatedTiming;
  deliverableType: DeliverableType | null;
  expectedEvidence: string;
  requirementIds: string[];
}

export interface WizardObligationLink {
  id: string;
  name: string;
  class: ObligationClass;
  type: RequirementType;
  subjects: { major: string; minor: string }[];
  phases: string[];
  requirementIds: string[];
}

interface ItpFixture {
  source: string;
  requirements: WizardRequirement[];
  actions: WizardAction[];
  obligations: WizardObligationLink[];
}

export const ITP = itp as unknown as ItpFixture;

/** Where a requirement went: an action, an obligation, both (rare), or nowhere yet. */
export type Route = 'action' | 'obligation' | 'both' | 'unrouted';

const inAction = new Set(ITP.actions.flatMap((a) => a.requirementIds));
const inObligation = new Set(ITP.obligations.flatMap((o) => o.requirementIds));

export const ROUTE_OF = new Map<string, Route>(
  ITP.requirements.map((r) => {
    const a = inAction.has(r.id);
    const o = inObligation.has(r.id);
    return [r.id, a && o ? 'both' : a ? 'action' : o ? 'obligation' : 'unrouted'];
  }),
);

export const ROUTING_TOTALS = (['action', 'obligation', 'both', 'unrouted'] as Route[]).map((route) => ({
  route,
  count: [...ROUTE_OF.values()].filter((v) => v === route).length,
}));

/** The action(s) a requirement sits in — exclusivity is off, so this is a list. */
export const ACTIONS_OF = new Map<string, WizardAction[]>();
for (const a of ITP.actions) for (const rid of a.requirementIds) ACTIONS_OF.set(rid, [...(ACTIONS_OF.get(rid) ?? []), a]);

export const OBLIGATIONS_OF = new Map<string, WizardObligationLink[]>();
for (const o of ITP.obligations) for (const rid of o.requirementIds) OBLIGATIONS_OF.set(rid, [...(OBLIGATIONS_OF.get(rid) ?? []), o]);

// ── Timing, reduced ───────────────────────────────────────────────────────────
// Stewart, 2026-09-14: action timing should come down to whether a deadline is
// specific or relative, and whether it recurs. Four values from the stated
// schedule; everything else the source says stays as the `stated` line.

export type DeadlineKind = 'specific' | 'relative' | 'none';
export type CadenceKind = 'one-time' | 'recurring' | 'as-needed' | 'ongoing';

export interface SimpleTiming {
  deadline: DeadlineKind;
  cadence: CadenceKind;
  /** e.g. "Before Phase 1 Operations", "By 2030", "Within 24 hours of a take", "Quarterly". */
  label: string;
}

const looksLikeDate = (s: string) => /\b(19|20)\d{2}\b/.test(s) || /\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.? \d/i.test(s);

export function simpleTiming(t: StatedTiming | undefined): SimpleTiming {
  const f = t?.frequency;
  const cadence: CadenceKind =
    f === 'Recurring' ? 'recurring' : f === 'AsNeeded' ? 'as-needed' : f === 'Ongoing' ? 'ongoing' : 'one-time';
  const m = t?.deadline?.milestone ?? '';
  const deadline: DeadlineKind = !m ? 'none' : looksLikeDate(m) ? 'specific' : 'relative';
  const label = t?.stated || (m ? `${t?.deadline?.direction ?? ''} ${m}`.trim() : cadence === 'as-needed' ? (t?.asNeeded?.trigger ? `When ${t.asNeeded.trigger}` : 'As needed') : '');
  return { deadline, cadence, label };
}

export const DEADLINE_LABEL: Record<DeadlineKind, string> = {
  specific: 'Specific date',
  relative: 'Relative to a milestone',
  none: 'No deadline stated',
};
export const CADENCE_LABEL: Record<CadenceKind, string> = {
  'one-time': 'One time',
  recurring: 'Recurring',
  'as-needed': 'As needed',
  ongoing: 'Ongoing',
};

/** Human label for the tool that drafted the rows — the same mark prod's AI panel wears. */
export const DRAFTED_BY = 'Drafted by AI from the approved requirements';
