// The obligation feed's data model — every RECORD that lands on the project and says
// something about an obligation, whatever channel it came in on (Andy, 2026-09-23).
//
// Kim's Obligation Tracking fixture (obligation-tracking.ts) models one kind of thing: an
// Event Hub event that makes a duty newly owed. The feed has to hold more than that. A daily
// monitoring report that shows the daily inspection was done, a survey, a WEAP session, a
// photo set somebody uploads by hand: each one is a record, and each relates to obligations.
// So the unit here is the RECORD and the edge is RELATION:
//
//   · triggered  the record makes the duty owed (a notice to file, a buffer to set)
//   · evidence   the record shows the duty being met
//
// A record carries only the facts every channel can supply (source, received, component,
// submitted by, location). Anything particular to one source (buffer distance, weather,
// species) stays on that record's own page, and the feed links there.
//
// Kim's six events are carried over unchanged in substance: same titles, same people, same
// surfaced duties (all `triggered`). The records added around them are AUTHORED to fill the
// date groups and the 30d / 90d / All scopes.
//
// TIME. Kim's timestamps are written as field wall-clock times with a Z suffix (a snake at
// "08:35Z" is a morning sighting, not 1:35 AM Pacific). Everything here is formatted in UTC so
// those times read as she wrote them.

import { OBLIGATION_FILING, OBLIGATION_NODES, type ObligationClass, type ObligationNode } from './setup-wizard';
import { EVENTS, IMPORTANT_AREAS, NOW, PINNED } from './obligation-tracking';
import { STREAM_ICON_PATHS } from './monitoring-streams';

export { NOW };

// ── Sources: one icon per kind of record ────────────────────────────────────────────
//
// The icon names the KIND OF RECORD, and every kind has exactly one. Observations take the
// monitoring portal's stream glyphs for their three real ObservationTypes; the other sources
// take their stream's glyph where the portal has one. Site reports and manual evidence have no
// stream, so they get the two new glyphs.

export type RecordSourceId =
  | 'nesting-birds'
  | 'compliance-concerns'
  | 'biological-resources'
  | 'daily-monitoring-reports'
  | 'site-reports'
  | 'surveys'
  | 'weap'
  | 'evidence';

export type RecordFamily = 'Observation' | 'Report' | 'Survey' | 'Training' | 'Evidence';

export interface RecordSource {
  id: RecordSourceId;
  /** Singular, as a record names its own kind: "Nesting bird observation". */
  label: string;
  family: RecordFamily;
  /** How it arrives. */
  channel: 'Fulcrum' | 'Event Hub' | 'Manual upload';
  icon: string;
  paths: string;
  mark: string;
  /** The monitoring portal stream that holds these records, when there is one. */
  streamId?: string;
  streamName?: string;
}

const PAPERCLIP =
  '<path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/>';

export const RECORD_SOURCES: Record<RecordSourceId, RecordSource> = {
  'nesting-birds': {
    id: 'nesting-birds', label: 'Nesting bird observation', family: 'Observation', channel: 'Fulcrum',
    icon: 'bird', paths: STREAM_ICON_PATHS.bird, mark: 'var(--bcn-mark-cyan)',
    streamId: 'nesting-birds', streamName: 'Nesting Birds',
  },
  'compliance-concerns': {
    id: 'compliance-concerns', label: 'Compliance concern', family: 'Observation', channel: 'Fulcrum',
    icon: 'triangle-alert', paths: STREAM_ICON_PATHS['triangle-alert'], mark: 'var(--bcn-mark-rust)',
    streamId: 'compliance-concerns', streamName: 'Compliance Concerns',
  },
  'biological-resources': {
    id: 'biological-resources', label: 'Biological resource observation', family: 'Observation', channel: 'Fulcrum',
    icon: 'leaf', paths: STREAM_ICON_PATHS.leaf, mark: 'var(--bcn-mark-olive)',
    streamId: 'biological-resources', streamName: 'Biological Resources',
  },
  'daily-monitoring-reports': {
    id: 'daily-monitoring-reports', label: 'Daily monitoring report', family: 'Report', channel: 'Event Hub',
    icon: 'file-text', paths: STREAM_ICON_PATHS['file-text'], mark: 'var(--bcn-mark-slate)',
    streamId: 'daily-monitoring-reports', streamName: 'Daily Monitoring Reports',
  },
  'site-reports': {
    id: 'site-reports', label: 'Site report', family: 'Report', channel: 'Event Hub',
    icon: 'clipboard-check', paths: STREAM_ICON_PATHS['clipboard-check'], mark: 'var(--bcn-mark-orange)',
  },
  surveys: {
    id: 'surveys', label: 'Survey', family: 'Survey', channel: 'Fulcrum',
    icon: 'clipboard-list', paths: STREAM_ICON_PATHS['clipboard-list'], mark: 'var(--bcn-mark-emerald)',
    streamId: 'surveys', streamName: 'Surveys',
  },
  weap: {
    id: 'weap', label: 'WEAP training', family: 'Training', channel: 'Fulcrum',
    icon: 'graduation-cap', paths: STREAM_ICON_PATHS['graduation-cap'], mark: 'var(--bcn-mark-moss)',
    streamId: 'weap', streamName: 'WEAP Training',
  },
  evidence: {
    id: 'evidence', label: 'Uploaded evidence', family: 'Evidence', channel: 'Manual upload',
    icon: 'paperclip', paths: PAPERCLIP, mark: 'var(--bcn-mark-violet)',
  },
};

// ── Records ─────────────────────────────────────────────────────────────────────────

export type Relation = 'triggered' | 'evidence';

export interface RecordDuty {
  obligation: ObligationNode;
  relation: Relation;
}

export interface RecordFile {
  name: string;
  size: string;
}

export interface FeedRecord {
  id: string;
  title: string;
  source: RecordSource;
  at: string;
  component: string;
  submittedBy: string;
  location: string;
  /** One or two sentences in the submitter's words. */
  summary?: string;
  files?: RecordFile[];
  duties: RecordDuty[];
  /** The page that holds the full record, unprefixed — the component applies withBase. */
  href?: string;
  hrefLabel?: string;
}

interface RecordSeed {
  id: string;
  title: string;
  source: RecordSourceId;
  at: string;
  component: string;
  submittedBy: string;
  location: string;
  summary?: string;
  files?: RecordFile[];
  duties: [string, Relation][];
}

// Kim's events: which source each lands in, and the component it happened on.
const KIM_SOURCE: Record<string, { source: RecordSourceId; component: string }> = {
  'obs-ggs': { source: 'biological-resources', component: 'Twin Cities Complex' },
  'obs-hawk': { source: 'compliance-concerns', component: 'Intake B — North Delta' },
  'obs-trbl': { source: 'nesting-birds', component: 'Southern Forebay & Pumping Plant' },
  'sr-turbid': { source: 'site-reports', component: 'Intake C — North Delta' },
  'dmr-daily': { source: 'daily-monitoring-reports', component: 'Intake B — North Delta' },
  'obs-cts': { source: 'compliance-concerns', component: 'Twin Cities Complex' },
};

// A daily monitoring report is also the proof that the day's standing inspections ran.
const KIM_EVIDENCE: Record<string, string[]> = {
  'dmr-daily': ['obl_01M2G6Y3GS5JKTENA4JZKKAVH0', 'obl_01M2G6Y3QRJRM8HB4RC5N41ANR'],
};

const AUTHORED: RecordSeed[] = [
  {
    id: 'dmr-0914', title: 'Daily monitoring report — Intake B cofferdam', source: 'daily-monitoring-reports',
    at: '2026-09-14T17:30:00Z', component: 'Intake B — North Delta', submittedBy: 'D. Vance', location: 'Reach 2',
    duties: [
      ['obl_01M2G6Y3GS5JKTENA4JZKKAVH0', 'evidence'],
      ['obl_01M2G6Y3QRJRM8HB4RC5N41ANR', 'evidence'],
      ['obl_01M2G6Y3GTRYAK61ZHAYGX6G9R', 'evidence'],
    ],
  },
  {
    id: 'svy-0913', title: 'Pre-activity presence survey — Reach 1 upland', source: 'surveys',
    at: '2026-09-13T14:00:00Z', component: 'Twin Cities Complex', submittedBy: 'A. Mendes', location: 'Reach 1',
    summary: 'No covered species found in the work footprint. Twelve burrows checked and flagged.',
    duties: [
      ['obl_01M2G6Y3GVB9GY756CNBCP3TGV', 'evidence'],
      ['obl_01M2G6Y3GTRYAK61ZHAYGX6GA1', 'evidence'],
    ],
  },
  {
    id: 'ev-fence-0911', title: 'Exclusion fencing inspection — Reach 1 photo set', source: 'evidence',
    at: '2026-09-11T16:15:00Z', component: 'Twin Cities Complex', submittedBy: 'K. Ito', location: 'Reach 1',
    summary: 'Fence intact along the full run. One sagging section at station 14 retensioned the same day.',
    files: [
      { name: 'reach1-fence-inspection-0911.pdf', size: '2.4 MB' },
      { name: 'station14-before-after.jpg', size: '860 KB' },
    ],
    duties: [
      ['obl_01M2G6YKM0HYHZPHBXBXTP9J37', 'evidence'],
      ['obl_01M2G6Y3GTRYAK61ZHAYGX6GA5', 'evidence'],
      ['obl_01M2G6Y3757AMQWDRRZPPRX5WQ', 'evidence'],
    ],
  },
  {
    id: 'weap-0908', title: 'WEAP session — 14 new crew members', source: 'weap',
    at: '2026-09-08T13:00:00Z', component: 'Bouldin Island Launch Shaft', submittedBy: 'R. Osei', location: 'Bouldin Island trailer',
    duties: [['obl_01M2G6Y40FW7TYCC8DP1VT56RE', 'evidence']],
  },
  {
    id: 'sr-0903', title: 'Dewatering pump intake screen inspected', source: 'site-reports',
    at: '2026-09-03T10:40:00Z', component: 'Intake C — North Delta', submittedBy: 'M. Okafor', location: 'Compliance point 3',
    summary: 'Screen mesh intact; pumping rate logged at 180 gpm.',
    duties: [
      ['obl_01M2G6YKKYBZ9A7EECEZB6FGXZ', 'evidence'],
      ['obl_01M2G6Y374X4RKETDHB3S1M1MZ', 'evidence'],
    ],
  },
  {
    id: 'nb-0902', title: "Active Swainson's hawk nest confirmed near the Intake C haul road", source: 'nesting-birds',
    at: '2026-09-02T08:20:00Z', component: 'Intake C — North Delta', submittedBy: 'J. Whitfield', location: 'Intake C haul road',
    duties: [
      ['obl_01M2G6Y3757AMQWDRRZPPRX5XH', 'triggered'],
      ['obl_01M2G6Y3GVB9GY756CNBCP3TGZ', 'triggered'],
      ['obl_01M2G6YKKH7P3XH3JHE4Y9KPEK', 'triggered'],
    ],
  },
  {
    id: 'cc-0828', title: 'No spill kit at the Byron Tract staging area', source: 'compliance-concerns',
    at: '2026-08-28T15:05:00Z', component: 'Byron Tract Forebay', submittedBy: 'R. Osei', location: 'Staging area 4',
    duties: [
      ['obl_01M2G6YKKXGW0MHG5S1F0JJR7B', 'triggered'],
      ['obl_01M2G6YKKXGW0MHG5S1F0JJR7F', 'triggered'],
    ],
  },
  {
    id: 'ev-dust-0822', title: 'Dust suppression log — week of August 17', source: 'evidence',
    at: '2026-08-22T18:00:00Z', component: 'Southern Forebay & Pumping Plant', submittedBy: 'L. Park', location: 'Southern Forebay haul roads',
    files: [{ name: 'dust-log-2026-08-17.xlsx', size: '48 KB' }],
    duties: [['obl_01M2G6YKKYBZ9A7EECEZB6FGX8', 'evidence']],
  },
  {
    id: 'svy-0815', title: 'Nesting bird sweep — Byron Tract', source: 'surveys',
    at: '2026-08-15T07:30:00Z', component: 'Byron Tract Forebay', submittedBy: 'J. Whitfield', location: 'Byron Tract',
    duties: [
      ['obl_01M2G6Y3GVB9GY756CNBCP3TGZ', 'evidence'],
      ['obl_01M2G6Y3GVB9GY756CNBCP3TH2', 'evidence'],
    ],
  },
  {
    id: 'dmr-0806', title: 'Daily monitoring report — Bethany aqueduct tie-in', source: 'daily-monitoring-reports',
    at: '2026-08-06T17:10:00Z', component: 'Bethany Reservoir Aqueduct', submittedBy: 'D. Vance', location: 'Bethany tie-in',
    duties: [
      ['obl_01M2G6Y3GS5JKTENA4JZKKAVH0', 'evidence'],
      ['obl_01M2G6Y3GVB9GY756CNBCP3THE', 'evidence'],
    ],
  },
  {
    id: 'ev-erosion-0725', title: 'Post-storm erosion control inspection', source: 'evidence',
    at: '2026-07-25T12:00:00Z', component: 'Bethany Reservoir Aqueduct', submittedBy: 'L. Park', location: 'Bethany slopes',
    files: [{ name: 'erosion-inspection-0725.pdf', size: '5.1 MB' }],
    duties: [
      ['obl_01M2G6Y3GTRYAK61ZHAYGX6G9S', 'evidence'],
      ['obl_01M2G6YKKW469S9XKYKCE1V6Y4', 'evidence'],
    ],
  },
  {
    id: 'br-0712', title: 'Western pond turtle basking at the forebay edge', source: 'biological-resources',
    at: '2026-07-12T09:45:00Z', component: 'Byron Tract Forebay', submittedBy: 'A. Mendes', location: 'Byron Tract forebay',
    duties: [['obl_01M2G6YKKH7P3XH3JHE4Y9KPEK', 'triggered']],
  },
  {
    id: 'weap-0701', title: 'WEAP session — Intake B mobilization', source: 'weap',
    at: '2026-07-01T13:30:00Z', component: 'Intake B — North Delta', submittedBy: 'R. Osei', location: 'Intake B field office',
    duties: [['obl_01M2G6Y40FW7TYCC8DP1VT56RE', 'evidence']],
  },
  {
    id: 'cc-0605', title: 'Night lighting spilling into habitat at the pumping plant', source: 'compliance-concerns',
    at: '2026-06-05T22:10:00Z', component: 'Southern Forebay & Pumping Plant', submittedBy: 'K. Ito', location: 'Pumping plant east pad',
    duties: [
      ['obl_01M2G6YKKYBZ9A7EECEZB6FGY6', 'triggered'],
      ['obl_01M2G6Y3GVB9GY756CNBCP3TGQ', 'triggered'],
    ],
  },
  {
    id: 'ev-quals-0520', title: 'Designated Biologist approval letter from CDFW', source: 'evidence',
    at: '2026-05-20T16:00:00Z', component: 'Twin Cities Complex', submittedBy: 'M. Okafor', location: 'Project-wide',
    files: [{ name: 'cdfw-db-approval-2026-05.pdf', size: '310 KB' }],
    duties: [
      ['obl_01M2G6Y34JV1PFVYQEE7T447XE', 'evidence'],
      ['obl_01M2G6YKKZS8T1WDX0E4QXHYGC', 'evidence'],
    ],
  },
];

const byId = new Map(OBLIGATION_NODES.map((o) => [o.id, o]));

const hrefOf = (s: RecordSource) =>
  s.streamId ? `/prototypes/monitoring/stream/${s.streamId}` : undefined;

const finish = (r: Omit<FeedRecord, 'href' | 'hrefLabel'>): FeedRecord => ({
  ...r,
  href: hrefOf(r.source),
  hrefLabel: r.source.streamName ? `Open in ${r.source.streamName}` : undefined,
});

/** Strip the role Kim appended ("A. Mendes, biological monitor") — the feed shows the person. */
const personOf = (s: string) => s.split(',')[0];

const fromKim: FeedRecord[] = EVENTS.map((e) => {
  const k = KIM_SOURCE[e.id];
  const extra = (KIM_EVIDENCE[e.id] ?? []).map((id) => byId.get(id)).filter((o): o is ObligationNode => !!o);
  return finish({
    id: e.id,
    title: e.what,
    source: RECORD_SOURCES[k.source],
    at: e.at,
    component: k.component,
    submittedBy: personOf(e.reportedBy),
    location: e.where,
    duties: [
      ...e.raised.map((r) => ({ obligation: r.obligation, relation: 'triggered' as const })),
      ...extra.map((o) => ({ obligation: o, relation: 'evidence' as const })),
    ],
  });
});

const fromAuthored: FeedRecord[] = AUTHORED.map((s) =>
  finish({
    id: s.id,
    title: s.title,
    source: RECORD_SOURCES[s.source],
    at: s.at,
    component: s.component,
    submittedBy: s.submittedBy,
    location: s.location,
    summary: s.summary,
    files: s.files,
    duties: s.duties.flatMap(([id, relation]) => {
      const o = byId.get(id);
      return o ? [{ obligation: o, relation }] : [];
    }),
  }),
);

/** Triggered duties first, then by class the way Kim ranks them. */
const CLASS_RANK: Record<ObligationClass, number> = { notify: 1, monitor: 2, adhere: 3, roster: 4 };
const orderDuties = (d: RecordDuty[]) =>
  [...d].sort(
    (a, b) =>
      Number(a.relation !== 'triggered') - Number(b.relation !== 'triggered') ||
      CLASS_RANK[a.obligation.class] - CLASS_RANK[b.obligation.class],
  );

export const RECORDS: FeedRecord[] = [...fromKim, ...fromAuthored]
  .map((r) => ({ ...r, duties: orderDuties(r.duties) }))
  .sort((a, b) => b.at.localeCompare(a.at));

// ── Time: Outlook's groups, and the scope windows ───────────────────────────────────

export type DateGroup = 'Today' | 'Yesterday' | 'This week' | 'This month' | 'Older';
export const DATE_GROUPS: DateGroup[] = ['Today', 'Yesterday', 'This week', 'This month', 'Older'];

const DAY = 86_400_000;
const dayStart = (d: Date) => Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());

/** Outlook's buckets: a week starts on Sunday, a month on the 1st. */
export const groupOf = (iso: string): DateGroup => {
  const t = new Date(iso);
  const today = dayStart(NOW);
  const day = dayStart(t);
  if (day === today) return 'Today';
  if (day === today - DAY) return 'Yesterday';
  if (day >= today - NOW.getUTCDay() * DAY) return 'This week';
  if (t.getUTCFullYear() === NOW.getUTCFullYear() && t.getUTCMonth() === NOW.getUTCMonth()) return 'This month';
  return 'Older';
};

const TIME = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'UTC' });
const WEEKDAY = new Intl.DateTimeFormat('en-US', { weekday: 'short', timeZone: 'UTC' });
const SHORT = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
const LONG = new Intl.DateTimeFormat('en-US', {
  weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', timeZone: 'UTC',
});

/** The rail's time stamp, Outlook style: a time today, a weekday this week, a date after. */
export const railTime = (iso: string): string => {
  const g = groupOf(iso);
  const d = new Date(iso);
  // The group heading already says the day, so today and yesterday show the time alone.
  if (g === 'Today' || g === 'Yesterday') return TIME.format(d);
  if (g === 'This week') return `${WEEKDAY.format(d)} ${TIME.format(d)}`;
  return SHORT.format(d);
};

export const fullTime = (iso: string): string => LONG.format(new Date(iso));

/** Whole days between the record and now, for the scope filter. */
export const ageDays = (iso: string): number => Math.floor((NOW.getTime() - new Date(iso).getTime()) / DAY);

export const SCOPES = [
  { label: '30 days', value: '30' },
  { label: '90 days', value: '90' },
  { label: 'All', value: 'all' },
] as const;
export const DEFAULT_SCOPE = '30';

// ── Views ───────────────────────────────────────────────────────────────────────────
//
// Kim's four views, re-cut over records. A view narrows the DUTIES on each record; a record
// with none left drops out of the view.

export type FeedViewId = 'all' | 'important' | 'todo' | 'pinned';

const pinnedIds = new Set(PINNED.map((o) => o.id));
const areaOf = (o: ObligationNode) => OBLIGATION_FILING.get(o.id)?.catName ?? 'Unfiled';

const KEEP: Record<FeedViewId, (d: RecordDuty) => boolean> = {
  all: () => true,
  important: (d) => (IMPORTANT_AREAS as readonly string[]).includes(areaOf(d.obligation)),
  // A notice is owed because something happened: a triggered Notify duty.
  todo: (d) => d.relation === 'triggered' && d.obligation.class === 'notify',
  pinned: (d) => pinnedIds.has(d.obligation.id),
};

export const RECORDS_IN: Record<FeedViewId, FeedRecord[]> = Object.fromEntries(
  (Object.keys(KEEP) as FeedViewId[]).map((v) => [
    v,
    RECORDS.map((r) => ({ ...r, duties: r.duties.filter(KEEP[v]) })).filter((r) => r.duties.length > 0),
  ]),
) as Record<FeedViewId, FeedRecord[]>;

export const PINNED_IDS = pinnedIds;

export const RELATION_LABEL: Record<Relation, string> = { triggered: 'Triggered', evidence: 'Evidence' };
export const RELATION_HINT: Record<Relation, string> = {
  triggered: 'This record made the obligation owed',
  evidence: 'This record shows the obligation being met',
};
