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

// Lucide glyphs — inner SVG markup only, the same idiom AppShell uses. The four
// entity glyphs are prod's BeaconEntityTypeEnum (BCN-1623: SourceDocument file-text,
// Commitment clipboard-list, Requirement clipboard-check, Action radar). Prod has no
// Obligation entity yet; shield-check is this prototype's proposal, drawn from prod's
// registered icon set. The rest are the row/panel chrome prod's actions step uses.
export const STEP_GLYPH = {
  'file-text':
    '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  'clipboard-list':
    '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>',
  'clipboard-check':
    '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
  radar:
    '<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"/><path d="M12 18h.01"/><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"/><circle cx="12" cy="12" r="2"/><path d="m13.41 10.59 5.66-5.66"/>',
  'shield-check':
    '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  compass:
    '<path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/><circle cx="12" cy="12" r="10"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  'grip-vertical':
    '<circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/>',
  'square-pen':
    '<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  'list-tree':
    '<path d="M21 12h-8"/><path d="M21 6H8"/><path d="M21 18h-8"/><path d="M3 6v4c0 1.1.9 2 2 2h3"/><path d="M3 10v6c0 1.1.9 2 2 2h3"/>',
  merge: '<path d="m8 6 4-4 4 4"/><path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"/><path d="m20 22-5-5"/>',
  undo: '<path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/>',
  'flask-conical':
    '<path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/><path d="M6.453 15h11.094"/><path d="M8.5 2h7"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  'arrow-up': '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
  lightbulb:
    '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
  'chevrons-down-up':
    '<path d="m7 20 5-5 5 5"/><path d="m7 4 5 5 5-5"/>',
  'chevrons-up-down':
    '<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',
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
    iconPaths: STEP_GLYPH['clipboard-list'],
  },
  {
    id: 'requirements',
    n: 3,
    label: 'Requirements',
    token: 'requirement',
    line: 'Each commitment split into what, when and who — one requirement per duty.',
    href: '#setup-requirements',
    iconPaths: STEP_GLYPH['clipboard-check'],
  },
  {
    id: 'actions',
    n: 4,
    label: 'Actions',
    token: 'action',
    line: 'Dated work with a deliverable — plans, reports, approvals — drafted for review.',
    href: '/prototypes/setup-wizard/actions',
    iconPaths: STEP_GLYPH.radar,
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

/* ------------------------------------------------------------------ */
/* Obligation tree with requirement children (2026-09-14, second cut)   */
/* ------------------------------------------------------------------ */

/**
 * The registry rows above trace to COMMITMENT codes; only the ITP fixture's
 * obligations trace to REQUIREMENTS. Step 5's tree is therefore built from the
 * ITP obligations, filed into the registry's subject taxonomy by their first
 * subject (major › minor), with the requirement records as children.
 *
 * Trigger and thresholds are the fields the setup wizard's model would extract;
 * here they are SEEDED from the requirement text by two small patterns so the
 * editor shows the shape with real values. They are a demonstration, not a pass.
 */
export interface ObligationThreshold {
  /** What is measured — "underwater peak sound", "buffer". */
  quantity: string;
  comparator: '≤' | '≥' | '<' | '>' | '=' | 'within';
  value: string;
  unit: string;
  /** Commitment code of the requirement the number came from. */
  source: string;
}

export interface ObligationRequirement {
  id: string;
  code: string;
  name: string;
  text: string;
  inActions: number;
  inObligations: number;
}

export interface ObligationNode {
  id: string;
  title: string;
  class: ObligationClass;
  phases: string[];
  species: string[];
  activities: string[];
  trigger: string;
  thresholds: ObligationThreshold[];
  /** Waits on an approved plan before it is in force. */
  gate: boolean;
  requirements: ObligationRequirement[];
}

export interface ObligationTreeSub { id: string; name: string; obligations: ObligationNode[] }
export interface ObligationTreeCat { id: string; name: string; subcategories: ObligationTreeSub[]; count: number }

const UNIT_RE =
  /(\d[\d,]*(?:\.\d+)?)\s*(dB(?:\s?(?:peak|SEL|rms|Leq|re\s?1\s?µPa))?|dBA|feet|foot|ft|miles?|mi|mph|hours?|hrs?|days?|weeks?|months?|minutes?|°F|degrees?(?: F)?|mg\/L|NTU|percent|%|acres?|cfs|inches|in\.|meters?|m|gpm|km\/h|business days)\b/gi;

const comparatorBefore = (before: string): ObligationThreshold['comparator'] => {
  const b = before.toLowerCase();
  if (/within/.test(b)) return 'within';
  if (/(no more than|not exceed|shall not exceed|maximum|max\.?|up to|less than|below|under|no greater than|not more than)/.test(b)) return '≤';
  if (/(at least|minimum|min\.?|no less than|greater than|more than|exceed|above|beyond|over)/.test(b)) return '≥';
  return '=';
};

const COMPARATOR_PHRASE =
  /\b(within|no more than|not exceed|shall not exceed|maximum|max\.?|up to|less than|below|under|no greater than|not more than|at least|minimum|min\.?|no less than|greater than|more than|exceed(?:s|ing)?|above|beyond|over|of|for|to|by|at|in|every|each)\s*$/i;

/** The noun the number measures: the few words before the comparator phrase, clean of stopwords. */
const quantityBefore = (before: string): string => {
  let head = before.replace(/[()]/g, ' ').replace(/[.;:,]\s*$/, '').trim();
  for (let i = 0; i < 2; i++) head = head.replace(COMPARATOR_PHRASE, '').trim();
  const words = head.split(/[.;:]/).pop()!.trim().split(/\s+/).filter(Boolean).slice(-4);
  while (words.length && /^(a|an|the|of|to|by|for|and|or|with|at|in|shall|will|be|is|are|not|any|all)$/i.test(words[0])) words.shift();
  return words.join(' ').toLowerCase();
};

const thresholdsFrom = (text: string, code: string): ObligationThreshold[] => {
  const out: ObligationThreshold[] = [];
  for (const m of text.matchAll(UNIT_RE)) {
    const before = text.slice(Math.max(0, (m.index ?? 0) - 70), m.index);
    out.push({ quantity: quantityBefore(before), comparator: comparatorBefore(before), value: m[1], unit: m[2], source: code });
    if (out.length >= 4) break;
  }
  return out;
};

const TRIGGER_RE = /\b(if|when|whenever|in the event(?: that)?|should|upon|prior to|before|during|after|once)\b[^.;]{12,160}/i;
const triggerFrom = (text: string): string => {
  const m = text.match(TRIGGER_RE);
  if (!m) return '';
  const t = m[0].trim();
  return t.charAt(0).toUpperCase() + t.slice(1);
};

const GATE_RE = /\b(approved (?:plan|by)|approval of the|prior to approval|upon approval|once approved|plan is approved)\b/i;

const uniq = (xs: string[]) => [...new Set(xs)];
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const OBLIGATION_NODES: ObligationNode[] = ITP.obligations.map((o) => {
  const reqs = o.requirementIds
    .map((rid) => ITP.requirements.find((r) => r.id === rid))
    .filter((r): r is WizardRequirement => !!r);
  const requirements: ObligationRequirement[] = reqs.map((r) => ({
    id: r.id,
    code: r.commitment,
    name: r.name,
    text: r.text,
    inActions: ACTIONS_OF.get(r.id)?.length ?? 0,
    inObligations: OBLIGATIONS_OF.get(r.id)?.length ?? 0,
  }));
  const allText = reqs.map((r) => r.text).join(' ');
  return {
    id: o.id,
    title: o.name,
    class: o.class,
    phases: o.phases,
    species: uniq(reqs.flatMap((r) => r.species)),
    activities: uniq(reqs.flatMap((r) => r.activities)),
    trigger: reqs.map((r) => triggerFrom(r.text)).find(Boolean) ?? '',
    thresholds: reqs.flatMap((r) => thresholdsFrom(r.text, r.commitment)).slice(0, 5),
    gate: GATE_RE.test(allText),
    requirements,
  };
});

export const OBLIGATION_TREE: ObligationTreeCat[] = (() => {
  const cats = new Map<string, ObligationTreeCat>();
  const catId = (major: string) => subjectAxis.groups.find((g) => g.name === major)?.id ?? `cat-${slug(major)}`;
  const subId = (major: string, minor: string) =>
    subjectAxis.groups.find((g) => g.name === major)?.items.find((i) => i.name === minor)?.id ?? `sub-${slug(major)}-${slug(minor)}`;
  for (const o of ITP.obligations) {
    const home = o.subjects[0] ?? { major: 'Unfiled', minor: 'Unfiled' };
    const node = OBLIGATION_NODES.find((n) => n.id === o.id)!;
    const cid = catId(home.major);
    const cat = cats.get(cid) ?? { id: cid, name: home.major, subcategories: [], count: 0 };
    cats.set(cid, cat);
    const sid = subId(home.major, home.minor);
    let sub = cat.subcategories.find((s) => s.id === sid);
    if (!sub) {
      sub = { id: sid, name: home.minor, obligations: [] };
      cat.subcategories.push(sub);
    }
    sub.obligations.push(node);
    cat.count += 1;
  }
  const byName = (a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name);
  return [...cats.values()]
    .map((c) => ({
      ...c,
      subcategories: c.subcategories.map((s) => ({ ...s, obligations: [...s.obligations].sort((a, b) => a.title.localeCompare(b.title)) })).sort(byName),
    }))
    .sort(byName);
})();

export const OBLIGATION_TREE_TOTALS = {
  obligations: OBLIGATION_NODES.length,
  categories: OBLIGATION_TREE.length,
  subcategories: OBLIGATION_TREE.reduce((n, c) => n + c.subcategories.length, 0),
  requirementLinks: OBLIGATION_NODES.reduce((n, o) => n + o.requirements.length, 0),
  withThresholds: OBLIGATION_NODES.filter((o) => o.thresholds.length > 0).length,
  withTrigger: OBLIGATION_NODES.filter((o) => o.trigger).length,
};
