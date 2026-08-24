// EVIDENCE TRIAGE — the inbox for evidence that arrived WITHOUT a human attaching it.
//
// The companion to ./evidence-drawer.ts, and deliberately its inverse. The drawer is for
// evidence a person is holding: they open it, drop a file, and choose where it goes. This
// surface is for evidence that showed up on its own — a survey synced from the monitoring
// portal, a daily report filed from the field, a report Beacon itself produced, a PDF
// dropped by an outside party through a temporary link. Andrew's framing (DCP sync,
// 2026-08-04): those records "are just being blindly added to a table in the database with
// no sort of connective tissue," and the goal is that in five years you can reconstruct what
// happened in 2026 because everything ended up in its right drawer.
//
// SO THE MODEL IS THE SAME JOIN, ENTERED FROM THE OTHER END. Every entity below is imported
// from ./evidence-drawer rather than redeclared — same components, same actions, same
// suggestion shape with the same two tiers and the same plain-language rationale. Only three
// facts are genuinely new, and each earns its place:
//
//   · source     — HOW it arrived. The drawer only knew 'upload' | 'existing' because a human
//                  was always the courier. Here the courier is the point: it drives the
//                  filter, and it is the difference between a survey that went through QC and
//                  a PDF from someone with no Beacon login.
//   · receivedOn — WHEN it landed, because the queue is organized by date.
//   · componentId may be EMPTY — the drawer never allowed this (Andrew: "there should be no
//                  null state for component"), and that rule still holds where a HUMAN picks
//                  the scope. But an inbound file genuinely may not say which component it
//                  belongs to. Refusing to represent that would be lying about the data; the
//                  queue shows it as unresolved and makes the human answer it.
//
// Triage STATE (needs review / approved / dismissed) is not in this fixture on purpose — it
// is what the session produces, so the controller owns it and every reload starts clean.
//
// DETERMINISTIC: no Date.now(), no Math.random(). Dates are literals anchored to TODAY.
// INVENTED: credible DCP material, never lifted from client documents.

import {
  COMPONENTS,
  type EvidenceFile,
  type EvidenceSuggestion,
  type SuggestionTier,
  actionById,
} from './evidence-drawer';

/** Fixture clock. Every relative label ("Today", "Yesterday") is computed against this. */
export const TODAY = '2026-07-22';

// ── Source: how the evidence got here ────────────────────────────────────────
// The four inbound routes Andrew named. Ad-hoc uploads are deliberately ABSENT: a person
// uploading a file already has the drawer, where they say where it goes at the moment they
// drop it. Nothing a human has already routed should ever appear in this queue — if it did,
// the inbox would be asking people to re-answer a question they just answered.

export type EvidenceSource = 'monitoring-portal' | 'daily-report' | 'beacon-report' | 'drop-box';

export interface SourceMeta {
  label: string;
  /** One line on the review panel: what this route is and what it guarantees. */
  note: string;
}

export const SOURCE_META: Record<EvidenceSource, SourceMeta> = {
  'monitoring-portal': {
    label: 'Monitoring portal',
    note: 'Synced from the monitoring portal once the survey passed QC. Drafts never reach this queue.',
  },
  'daily-report': {
    label: 'Daily monitoring report',
    note: 'Filed from the field on the day of work. High volume, and repetitive by design.',
  },
  'beacon-report': {
    label: 'Beacon report',
    note: 'Generated in Beacon and finalized. The record is its own evidence.',
  },
  'drop-box': {
    label: 'Drop-box link',
    note: 'Submitted through a temporary link by someone without a Beacon login. Provenance is what the sender typed.',
  },
};

export const SOURCES: EvidenceSource[] = [
  'monitoring-portal',
  'daily-report',
  'beacon-report',
  'drop-box',
];

// ── The queue's records ──────────────────────────────────────────────────────

const C_FOREBAY = COMPONENTS[0].id; // Southern Forebay & Pumping Plant
const C_INTAKE_B = COMPONENTS[1].id; // Intake B — North Delta
const C_TWIN = COMPONENTS[2].id; // Twin Cities Complex

export interface TriageItem {
  id: string;
  title: string;
  /** What the record says, in the words a reviewer would skim. */
  notes: string;
  source: EvidenceSource;
  /** ISO date it landed in the evidence table. */
  receivedOn: string;
  /**
   * EMPTY means the inbound record did not name a component. Only ever true for routes where
   * nobody chose a scope — a drop-box submission, or a Beacon report spanning the project.
   */
  componentId: string;
  /** Person or system of record that submitted it. Shown as provenance, never as authority. */
  submittedBy: string;
  files: EvidenceFile[];
}

/**
 * Sixteen records across six days — enough that the queue reads as a real backlog rather
 * than a demo, and enough that "approve them one at a time" visibly stops being the answer.
 */
export const TRIAGE_ITEMS: TriageItem[] = [
  // ── Jul 22 · today ──
  {
    id: 'tri-ib-turbidity',
    title: 'Intake B turbidity monitoring — Jul 22',
    notes:
      'Continuous readings at the cofferdam, 06:00–18:00. Two exceedances of the 15 NTU trigger, both cleared within the hour.',
    source: 'monitoring-portal',
    receivedOn: '2026-07-22',
    componentId: C_INTAKE_B,
    submittedBy: 'R. Delgado',
    files: [
      { name: 'IB-turbidity-log-2026-07-22.xlsx', size: '86 KB' },
      { name: 'IB-turbidity-field-notes-2026-07-22.pdf', size: '1.2 MB' },
      { name: 'IB-probe-calibration-2026-07-22.pdf', size: '244 KB' },
      { name: 'IB-turbidity-photos-2026-07-22.zip', size: '14.3 MB' },
    ],
  },
  {
    id: 'tri-daily-forebay-0722',
    title: 'Daily biological monitoring — Southern Forebay, Jul 22',
    notes:
      'Ground disturbance at the north levee toe. One Swainson’s hawk observed foraging; no nest located within the work area.',
    source: 'daily-report',
    receivedOn: '2026-07-22',
    componentId: C_FOREBAY,
    submittedBy: 'C. Anderson',
    files: [{ name: 'daily-bio-monitoring-2026-07-22.pdf', size: '640 KB' }],
  },
  {
    id: 'tri-dropbox-fish-screen',
    title: 'Fish screen approach-velocity readings — Jul 21',
    notes:
      'Velocity measurements at eight screen panels, submitted by the screen fabricator. All panels below the 0.33 ft/s criterion.',
    source: 'drop-box',
    receivedOn: '2026-07-22',
    componentId: '',
    submittedBy: 'T. Yamada, Cascade Screen Works',
    files: [
      { name: 'approach-velocity-readings-2026-07-21.pdf', size: '890 KB' },
      { name: 'screen-panel-layout.pdf', size: '1.6 MB' },
    ],
  },

  // ── Jul 21 · yesterday ──
  {
    id: 'tri-swppp-inspection-0721',
    title: 'SWPPP inspection — Southern Forebay, Jul 21',
    notes:
      'Qualified-personnel walk of all four stockpiles. Two corrective actions logged at the southern stockpile perimeter.',
    source: 'monitoring-portal',
    receivedOn: '2026-07-21',
    componentId: C_FOREBAY,
    submittedBy: 'M. Okafor',
    files: [{ name: 'SWPPP-inspection-2026-07-21.pdf', size: '1.1 MB' }],
  },
  {
    id: 'tri-daily-forebay-0721',
    title: 'Daily biological monitoring — Southern Forebay, Jul 21',
    notes: 'Excavation along the utility trench. No listed species observed; buffers intact.',
    source: 'daily-report',
    receivedOn: '2026-07-21',
    componentId: C_FOREBAY,
    submittedBy: 'C. Anderson',
    files: [{ name: 'daily-bio-monitoring-2026-07-21.pdf', size: '612 KB' }],
  },
  {
    id: 'tri-tc-rtm-stockpile',
    title: 'RTM stockpile inspection — Twin Cities, Jul 21',
    notes:
      'Reusable tunnel material stockpile cover and perimeter controls checked after the Jul 20 wind event. No erosion observed.',
    source: 'monitoring-portal',
    receivedOn: '2026-07-21',
    componentId: C_TWIN,
    submittedBy: 'J. Whitfield',
    files: [
      { name: 'RTM-stockpile-inspection-2026-07-21.pdf', size: '1.4 MB' },
      { name: 'RTM-stockpile-photos-2026-07-21.zip', size: '9.2 MB' },
    ],
  },

  // ── Jul 20 ──
  {
    id: 'tri-hydroacoustic',
    title: 'Hydroacoustic monitoring — Intake B pile driving, Jul 20',
    notes:
      'Underwater sound pressure levels recorded at 10 m and 150 m during 6.5 hours of impact driving. Peak 204 dB at 10 m.',
    source: 'monitoring-portal',
    receivedOn: '2026-07-20',
    componentId: C_INTAKE_B,
    submittedBy: 'Delta Acoustics LLC',
    files: [
      { name: 'hydroacoustic-monitoring-2026-07-20.pdf', size: '3.8 MB' },
      { name: 'SPL-raw-2026-07-20.csv', size: '4.1 MB' },
    ],
  },
  {
    id: 'tri-noise-readings-wk29',
    title: 'Construction noise readings — week of Jul 13',
    notes:
      'Five sensitive receptors along the eastern boundary, all below the 75 dBA threshold. Highest reading 71 dBA at receptor R-3.',
    source: 'monitoring-portal',
    receivedOn: '2026-07-20',
    componentId: C_FOREBAY,
    submittedBy: 'M. Okafor',
    files: [{ name: 'noise-readings-week-2026-07-13.xlsx', size: '104 KB' }],
  },
  {
    id: 'tri-dropbox-tribal-letter',
    title: 'Tribal monitor availability confirmation',
    notes:
      'Letter confirming monitor coverage for the August excavation window. No monitoring observations included.',
    source: 'drop-box',
    receivedOn: '2026-07-20',
    componentId: '',
    submittedBy: 'Cultural resources liaison',
    files: [{ name: 'tribal-monitor-availability-aug-2026.pdf', size: '318 KB' }],
  },

  // ── Jul 19 ──
  {
    id: 'tri-monthly-report-june',
    title: 'Monthly compliance monitoring report — June 2026',
    notes:
      'Finalized in Beacon. Covers all Southern Forebay actions for the June reporting period, including the four open corrective actions.',
    source: 'beacon-report',
    receivedOn: '2026-07-19',
    componentId: C_FOREBAY,
    submittedBy: 'Beacon',
    files: [{ name: 'monthly-compliance-report-2026-06.pdf', size: '5.2 MB' }],
  },
  {
    id: 'tri-daily-forebay-0719',
    title: 'Daily biological monitoring — Southern Forebay, Jul 19',
    notes:
      'Two mourning dove nests flagged with 50-ft buffers ahead of vegetation clearing. Giant garter snake upland refugia re-checked.',
    source: 'daily-report',
    receivedOn: '2026-07-19',
    componentId: C_FOREBAY,
    submittedBy: 'C. Anderson',
    files: [
      { name: 'daily-bio-monitoring-2026-07-19.pdf', size: '702 KB' },
      { name: 'nest-buffer-map-2026-07-19.pdf', size: '2.4 MB' },
    ],
  },
  {
    id: 'tri-dust-log-wk29',
    title: 'Dust control log — week of Jul 13',
    notes: 'Daily watering passes and two wind-speed shutdowns. Logged by the site superintendent.',
    source: 'daily-report',
    receivedOn: '2026-07-19',
    componentId: C_FOREBAY,
    submittedBy: 'Site superintendent',
    files: [{ name: 'dust-control-log-week-2026-07-13.pdf', size: '286 KB' }],
  },

  // ── Jul 17 ──
  {
    id: 'tri-fish-screen-inspection',
    title: 'Fish screen criteria compliance inspection — Jul 17',
    notes:
      'Quarterly inspection of screen cleaning cycle, sweeping velocity and debris accumulation. One panel scheduled for servicing.',
    source: 'monitoring-portal',
    receivedOn: '2026-07-17',
    componentId: C_INTAKE_B,
    submittedBy: 'R. Delgado',
    files: [{ name: 'fish-screen-inspection-2026-07-17.pdf', size: '1.9 MB' }],
  },
  {
    id: 'tri-tc-nesting-sweep',
    title: 'Nesting bird sweep — Twin Cities, Jul 17',
    notes:
      'Pre-clearing sweep of the staging area. One red-winged blackbird nest flagged; buffer released Jul 21 after fledging.',
    source: 'monitoring-portal',
    receivedOn: '2026-07-17',
    componentId: C_TWIN,
    submittedBy: 'J. Whitfield',
    files: [{ name: 'nesting-bird-sweep-2026-07-17.pdf', size: '1.3 MB' }],
  },

  // ── Jul 15 ──
  {
    id: 'tri-quarterly-summary',
    title: 'Quarterly commitment status summary — Q2 2026',
    notes:
      'Finalized in Beacon. Project-wide roll-up across all components; not scoped to any single one.',
    source: 'beacon-report',
    receivedOn: '2026-07-15',
    componentId: '',
    submittedBy: 'Beacon',
    files: [{ name: 'quarterly-commitment-summary-2026-Q2.pdf', size: '2.8 MB' }],
  },
  {
    id: 'tri-dropbox-equipment-certs',
    title: 'Contractor equipment emissions certificates',
    notes:
      'Tier 4 Final certificates for eleven pieces of equipment, submitted by the earthwork subcontractor.',
    source: 'drop-box',
    receivedOn: '2026-07-15',
    componentId: '',
    submittedBy: 'K. Boyle, Meridian Earthworks',
    files: [{ name: 'equipment-emissions-certs-2026-07.pdf', size: '4.6 MB' }],
  },
];

// ── What the matching utility proposed ───────────────────────────────────────
// Same shape and same two tiers as the drawer, because it is the same utility reading the
// same corpus — only the trigger differs (arrival, not a button).
//
// The narrowing Andrew described is visible in the data: monitoring content reaches
// monitoring-type actions, and CONTENT decides which one. Note the deliberate variety, because
// a queue where every row has exactly one confident answer would be a queue that needs no
// human:
//
//   · Most records get one confident match — the fast path the inline Approve exists for.
//   · Some get two, and both are right (one record, several actions).
//   · Some get ONLY less-certain matches, so the panel opens with nothing pre-blessed.
//   · Two get NOTHING. That is the honest case Jamie raised in the sync — you can review the
//     suggestions the utility makes, but not the ones it fails to make. A record that lands
//     here with no proposal is the queue admitting it, rather than hiding an empty answer.

export const TRIAGE_SUGGESTIONS: EvidenceSuggestion[] = [
  // Turbidity monitoring — the clean case, plus one honest stretch.
  {
    itemId: 'tri-ib-turbidity',
    actionId: 'act-ib-turbidity-monitoring',
    tier: 'suggested',
    rationale: 'Continuous readings for the in-water work period; monitoring data, monitoring action.',
  },
  {
    itemId: 'tri-ib-turbidity',
    actionId: 'act-ib-inwater-work-window',
    tier: 'less-certain',
    rationale: 'The readings fall inside the work window, but they record turbidity, not the window itself.',
  },

  // Daily monitoring, Jul 22 — content splits it across two actions.
  {
    itemId: 'tri-daily-forebay-0722',
    actionId: 'act-daily-biological-monitoring',
    tier: 'suggested',
    rationale: 'A daily log filed by the on-site biologist during ground disturbance.',
  },
  {
    itemId: 'tri-daily-forebay-0722',
    actionId: 'act-swha-buffer-monitoring',
    tier: 'less-certain',
    rationale: 'A Swainson’s hawk was observed, but no nest was located, so no buffer occurrence opened.',
  },

  // Drop-box fish screen readings — right content, unstated component.
  {
    itemId: 'tri-dropbox-fish-screen',
    actionId: 'act-ib-fish-screen-inspection',
    tier: 'suggested',
    rationale: 'Approach-velocity readings against the screen criteria this action names.',
  },

  // SWPPP inspection — the textbook match, plus the overlap the drawer already models.
  {
    itemId: 'tri-swppp-inspection-0721',
    actionId: 'act-swppp-inspection',
    tier: 'suggested',
    rationale: 'Inspection by qualified personnel, dated inside the reporting period.',
  },
  {
    itemId: 'tri-swppp-inspection-0721',
    actionId: 'act-dust-control-inspection',
    tier: 'less-certain',
    rationale: 'The same walk covered the stockpiles, but dust control keeps its own inspection record.',
  },

  {
    itemId: 'tri-daily-forebay-0721',
    actionId: 'act-daily-biological-monitoring',
    tier: 'suggested',
    rationale: 'A daily log filed by the on-site biologist during ground disturbance.',
  },

  // RTM stockpile — Twin Cities, and only one action fits.
  {
    itemId: 'tri-tc-rtm-stockpile',
    actionId: 'act-tc-rtm-stockpile-inspection',
    tier: 'suggested',
    rationale: 'Cover and perimeter-control check on the stockpile this action covers.',
  },

  // Hydroacoustic — the occurrence-based match.
  {
    itemId: 'tri-hydroacoustic',
    actionId: 'act-ib-pile-driving-hydroacoustic',
    tier: 'suggested',
    rationale: 'Sound pressure levels recorded during the pile-driving occurrence this action stands for.',
  },

  {
    itemId: 'tri-noise-readings-wk29',
    actionId: 'act-noise-monitoring',
    tier: 'suggested',
    rationale: 'Receptor readings for the monitoring period; noise evidence, noise action.',
  },
  {
    itemId: 'tri-noise-readings-wk29',
    actionId: 'act-monthly-compliance-report',
    tier: 'less-certain',
    rationale: 'These readings feed the month’s report, but the report itself is that action’s evidence.',
  },

  // Tribal monitor letter — ONLY less-certain. Nothing here is a monitoring record.
  {
    itemId: 'tri-dropbox-tribal-letter',
    actionId: 'act-cultural-monitoring',
    tier: 'less-certain',
    rationale: 'Names the excavation window this action covers, but confirms availability rather than monitoring performed.',
  },
  {
    itemId: 'tri-dropbox-tribal-letter',
    actionId: 'act-qualified-biologist',
    tier: 'less-certain',
    rationale: 'A personnel confirmation, but for a cultural monitor rather than a qualified biologist.',
  },

  {
    itemId: 'tri-monthly-report-june',
    actionId: 'act-monthly-compliance-report',
    tier: 'suggested',
    rationale: 'The finalized report for the June period — the action asks for exactly this document.',
  },

  // Daily monitoring, Jul 19 — two confident matches from one day's content.
  {
    itemId: 'tri-daily-forebay-0719',
    actionId: 'act-daily-biological-monitoring',
    tier: 'suggested',
    rationale: 'A daily log filed by the on-site biologist during vegetation clearing.',
  },
  {
    itemId: 'tri-daily-forebay-0719',
    actionId: 'act-ggs-preconstruction-survey',
    tier: 'suggested',
    rationale: 'Records a re-check of the giant garter snake upland refugia this action tracks.',
  },
  {
    itemId: 'tri-daily-forebay-0719',
    actionId: 'act-swha-preconstruction-survey',
    tier: 'less-certain',
    rationale: 'Nesting birds were flagged, but no Swainson’s hawk effort is recorded on this sweep.',
  },

  {
    itemId: 'tri-dust-log-wk29',
    actionId: 'act-dust-control-inspection',
    tier: 'suggested',
    rationale: 'Watering passes and wind shutdowns for the week — the action’s own record.',
  },

  {
    itemId: 'tri-fish-screen-inspection',
    actionId: 'act-ib-fish-screen-inspection',
    tier: 'suggested',
    rationale: 'Quarterly inspection against the screen criteria, dated inside the period.',
  },

  {
    itemId: 'tri-tc-nesting-sweep',
    actionId: 'act-tc-nesting-bird-survey',
    tier: 'suggested',
    rationale: 'Pre-clearing sweep of the staging area, with the buffer outcome recorded.',
  },

  // tri-quarterly-summary       — NO suggestion. Project-wide, matches no single action.
  // tri-dropbox-equipment-certs — NO suggestion. No air-quality equipment action exists to hold it.
];

// ── Derivations ──────────────────────────────────────────────────────────────

export const itemById = (id: string): TriageItem | undefined =>
  TRIAGE_ITEMS.find((i) => i.id === id);

/** Every proposal for one record, confident tier first — the order the panel reads in. */
export const suggestionsForItem = (itemId: string): EvidenceSuggestion[] => {
  const mine = TRIAGE_SUGGESTIONS.filter((s) => s.itemId === itemId);
  const rank = (t: SuggestionTier): number => (t === 'suggested' ? 0 : 1);
  return [...mine].sort((a, b) => rank(a.tier) - rank(b.tier));
};

/**
 * The one proposal a row shows inline — the high-confidence match, when there is exactly one
 * thing to be confident about. Two high-confidence matches means the row cannot speak for the
 * record, and neither can a single Approve button, so it stays silent and sends you to the
 * panel. That restraint is the whole reason the inline Approve is trustworthy.
 */
export const inlineSuggestionFor = (itemId: string): EvidenceSuggestion | undefined => {
  const confident = TRIAGE_SUGGESTIONS.filter((s) => s.itemId === itemId && s.tier === 'suggested');
  return confident.length === 1 ? confident[0] : undefined;
};

/** The commitment code + action name a suggestion points at, for display. */
export const suggestionTarget = (
  s: EvidenceSuggestion
): { code: string; name: string; period: string } => {
  const a = actionById(s.actionId);
  return { code: a?.code ?? '', name: a?.name ?? '', period: a?.period ?? '' };
};

// ── Date grouping ────────────────────────────────────────────────────────────
// The queue is organized by the day evidence landed, newest first. "Today" and "Yesterday"
// are computed from TODAY rather than written into the data, so the fixture stays a set of
// plain dates and only the labels are relative.

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2026-07-22" → "Jul 22". Parsed by hand: `new Date('...')` drags in a timezone. */
export const formatDate = (iso: string): string => {
  const [, m, d] = iso.split('-').map(Number);
  return `${MONTHS[m - 1]} ${Number(d)}`;
};

const MONTHS_LONG = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/**
 * "2026-07-19" -> "July 19, 2026". The review panel has room for the full date and is the
 * place a reader stops to take a record in, so it spells it out; the queue rows stay short
 * because they are scanned, not read.
 */
export const formatDateLong = (iso: string): string => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${MONTHS_LONG[m - 1]} ${Number(d)}, ${y}`;
};

/** Days between two ISO dates, via a UTC epoch so no local timezone can shift the answer. */
const daysBetween = (a: string, b: string): number => {
  const toUtc = (iso: string): number => {
    const [y, m, d] = iso.split('-').map(Number);
    return Date.UTC(y, m - 1, d);
  };
  return Math.round((toUtc(a) - toUtc(b)) / 86_400_000);
};

export interface DateBucket {
  /** Stable key for the bucket, e.g. "today". */
  id: string;
  /** "Today", "Yesterday", "Earlier this week", "Last week", "Older". */
  label: string;
  items: TriageItem[];
}

/**
 * The buckets, newest first. Deliberately RELATIVE rather than one heading per calendar day:
 * a heading for every date turns a queue into a wall of dates, and nobody triaging asks "what
 * came in on the 19th" — they ask "what is new" and "what has been sitting here". Weeks start
 * Sunday, matching the mail clients this pattern is borrowed from.
 */
const BUCKETS: { id: string; label: string; holds: (age: number, weekIndex: number) => boolean }[] = [
  { id: 'today', label: 'Today', holds: (age) => age === 0 },
  { id: 'yesterday', label: 'Yesterday', holds: (age) => age === 1 },
  { id: 'this-week', label: 'Earlier this week', holds: (age, w) => age > 1 && w === 0 },
  { id: 'last-week', label: 'Last week', holds: (age, w) => w === 1 },
  { id: 'older', label: 'Older', holds: (age, w) => w > 1 },
];

/** Sunday-anchored week distance: 0 = the week containing TODAY, 1 = the week before it. */
const weeksBack = (iso: string): number => {
  const [ty, tm, td] = TODAY.split('-').map(Number);
  const todayUtc = Date.UTC(ty, tm - 1, td);
  // Roll TODAY back to the Sunday that opens its week, then measure whole weeks from there.
  const thisSunday = todayUtc - new Date(todayUtc).getUTCDay() * 86_400_000;
  const [y, m, d] = iso.split('-').map(Number);
  const diff = thisSunday - Date.UTC(y, m - 1, d);
  return diff <= 0 ? 0 : Math.ceil(diff / (7 * 86_400_000));
};

/** Records grouped into relative buckets, newest first, in fixture order within a bucket. */
export const groupByBucket = (items: TriageItem[] = TRIAGE_ITEMS): DateBucket[] => {
  const held = new Map<string, TriageItem[]>();

  for (const item of items) {
    const age = daysBetween(TODAY, item.receivedOn);
    const week = weeksBack(item.receivedOn);
    const bucket = BUCKETS.find((b) => b.holds(age, week)) ?? BUCKETS[BUCKETS.length - 1];
    const list = held.get(bucket.id);
    if (list) list.push(item);
    else held.set(bucket.id, [item]);
  }

  // Drive the order off BUCKETS, and drop any bucket nothing landed in — an empty
  // "Last week" band is a heading advertising that there is nothing to read.
  return BUCKETS.filter((b) => held.has(b.id)).map((b) => ({
    id: b.id,
    label: b.label,
    items: held.get(b.id) ?? [],
  }));
};

// NOTE: there is no queue-count export. The page carried a summary bar of totals and it was
// removed — the queue itself is the count, and a number above a list you can see is a second
// place for the same fact to go stale.
