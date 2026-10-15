// SETUP WIZARD IN THREE STEPS — watch the scan, review the commitment.
//
// Source Documents → Commitments → Compliance Index (2026-10-13 product meeting).
// Requirements stop being a step: they arrive as child highlights on a commitment in
// step 2. Step 3 is the shipped Compliance Index (/prototypes/setup-wizard-ci).
//
// Everything here is derived from the ITP itself:
//   sw3-anchors.json      scripts/anchor-itp.mjs over public/source-docs/itp.pdf, pp. 131–223 (Condition 11):
//                         each commitment's text and boxes, each requirement quote's offsets
//   setup-wizard-itp.json the 2026-09-14 bulk extraction: requirement names, types, timing,
//                         species, activities, parties
// Seasons have no extraction fixture; SEASON_PHRASES below are read from the ITP's own text.
//
// The scan is a REPLAY: SCAN_EVENTS is the event stream the server would push
// (page_scanned, commitment_found, commitment_parsed, entity_proposed, merge_proposed),
// on a simulated clock. The UI renders state from events, so working ahead and walking
// away cost nothing.
//
// Seeded problems, so the demo has something to catch (each is what Jacky reported):
//   COA 11.35  the scan misses it (pp. 152–153 show as gaps on the scrubber)
//   COA 11.32  a false find: a cross-reference read as a heading
//   COA 11.36  found twice, split across the page break into p. 156
//   COA 11.14  one requirement quotes a sentence that is not in the ITP
//   COA 11.25  one requirement is the same text as another, under a different title
//   COA 11.18  the parse missed its last duty (mowing timing): that sentence is uncovered
// The milestone and season variants are not seeded: they are the extraction's own.

import anchorsJson from './sw3-anchors.json';
import itpJson from './setup-wizard-itp.json';
import itpPages from './itp-pages.json';
import { STEP_GLYPH, REQUIREMENT_TYPE_LABEL, PHASES, type SetupStep, type RequirementType } from './setup-wizard';
import { BINDING, sentences, boxesFor, coveredChars, type PageBox, type TextLineBox } from '../lib/anchored-text';

// ── Types ─────────────────────────────────────────────────────────────────────

/** A rectangle on a page, as fractions of the page's width and height. */
export type Box = PageBox;

/** Where a quote sits: its page, its char range in the commitment text, its boxes. */
export interface Anchor {
  page: number;
  charStart: number;
  charEnd: number;
  boxes: Box[];
}

/** Aldo's proposal until a person confirms it; any edit confirms. */
export type Filing = 'suggested' | 'confirmed';

export type EntityKind = 'milestone' | 'season' | 'activity' | 'species';

/** One concept in the project's entity registry. */
export interface Entity {
  id: string;
  kind: EntityKind;
  name: string;
}

/** Beacon's proposal that several registry entries are one concept. */
export interface MergeProposal {
  id: string;
  kind: EntityKind;
  intoId: string;
  fromIds: string[];
}

export type Direction = 'Before' | 'After' | 'Within';

export interface Timing {
  frequency: string;
  milestoneId?: string;
  direction?: Direction;
  offset?: string;
  recurrence?: string;
  stated?: string;
}

/** A field value and the words it came from. */
export interface ValueAnchor {
  field: 'milestone' | 'stated' | 'species' | 'season' | 'party' | 'offset';
  value: string;
  charStart: number;
  charEnd: number;
}

export interface ReviewRequirement {
  id: string;
  code: string;
  name: string;
  type: RequirementType;
  /** 0–1; below LOW_CONFIDENCE the type is flagged for a person. */
  typeConfidence: number;
  phases: string[];
  timing: Timing;
  speciesIds: string[];
  activityIds: string[];
  seasonIds: string[];
  responsibleParty: string;
  deliverable: string;
  /** The verbatim quote the extraction returned. */
  quote: string;
  /** Null when the quote will not anchor to the source: the made-up-text signal. */
  anchor: Anchor | null;
  values: ValueAnchor[];
  filing: Filing;
}

export interface PageLine {
  x: number;
  y: number;
  w: number;
  h: number;
  text: string;
}

export interface ScanPage {
  n: number;
  /** height / width */
  aspect: number;
  lines: PageLine[];
}

/** A line of the commitment's body on the page, with the chars it holds. */
export type TextLine = TextLineBox;

export interface ReviewCommitment {
  code: string;
  title: string;
  page: number;
  pages: number[];
  text: string;
  heading: Box[];
  blocks: Box[];
  lines: TextLine[];
  requirementIds: string[];
}

/** Something the scan found on the page: a commitment, or what it took for one. */
export interface Find {
  id: string;
  code: string;
  title: string;
  page: number;
  boxes: Box[];
  kind: 'commitment' | 'false' | 'split';
  /** For a split find, the commitment it belongs to. */
  partOf?: string;
}

export type ScanEvent =
  | { t: number; type: 'page_scanned'; page: number }
  | { t: number; type: 'commitment_found'; findId: string }
  | { t: number; type: 'commitment_parsed'; code: string; requirements: number }
  | { t: number; type: 'entity_proposed'; entityId: string }
  | { t: number; type: 'merge_proposed'; mergeId: string };

export interface ScopeProposal {
  section: string;
  first: number;
  last: number;
  commitmentsLikely: number;
  pattern: string;
}

export type ReviewFlag = 'unanchored' | 'uncovered' | 'duplicate' | 'type' | 'missed' | 'split';

// ── Steps ─────────────────────────────────────────────────────────────────────

export const SW3_BASE = '/prototypes/setup-wizard-3-step';

/** Test drive (2026-10-14): this variant is called Project Setup, with its own glyph (Lucide
 *  folder-cog) so it no longer echoes Aldo's green circle. */
export const SW3_NAME = 'Project Setup';
export const SW3_GLYPH = '<circle cx="18" cy="18" r="3"/><path d="M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3"/><path d="m21.7 19.4-.9-.3"/><path d="m15.2 16.9-.9-.3"/><path d="m16.6 21.7.3-.9"/><path d="m19.1 15.2.3-.9"/><path d="m19.6 21.7-.4-1"/><path d="m16.8 15.3-.4-1"/><path d="m14.3 19.6 1-.4"/><path d="m20.7 16.8 1-.4"/>';
export const SW3_REVIEW = `${SW3_BASE}/review`;
export const CI_HREF = '/prototypes/setup-wizard-ci';

export const SW3_STEPS: SetupStep[] = [
  {
    id: 'source-documents',
    n: 1,
    label: 'Source Documents',
    token: 'source',
    line: 'Upload, scope, and watch Beacon find the commitments.',
    href: SW3_BASE,
    iconPaths: STEP_GLYPH['file-text'],
    iconName: 'file-text',
  },
  {
    id: 'commitments',
    n: 2,
    label: 'Commitments',
    token: 'commitment',
    line: 'Each commitment with its requirements and extracted data, against the source text.',
    href: SW3_REVIEW,
    iconPaths: STEP_GLYPH['clipboard-list'],
    iconName: 'clipboard-list',
  },
  {
    id: 'compliance-index',
    n: 3,
    label: 'Compliance Index',
    token: 'obligation',
    line: 'Every action and obligation, filed by topic and reviewed a subcategory at a time.',
    href: CI_HREF,
    iconPaths: STEP_GLYPH['list-tree'],
    iconName: 'list-tree',
  },
];

// ── Source ────────────────────────────────────────────────────────────────────

export const SOURCE_DOC = {
  name: 'Incidental Take Permit No. 2081-2024-018-00',
  file: 'itp.pdf',
  pages: 247,
  href: '/source-docs/itp.pdf',
};

/** The project's source documents. Each is scoped and scanned on its own run. */
export interface SourceDocument {
  id: string;
  name: string;
  /** The short name a card and Aldo use. */
  short: string;
  file: string;
  pages: number;
  href: string;
}
export const SOURCE_DOCS: SourceDocument[] = [
  { id: 'itp', name: SOURCE_DOC.name, short: 'ITP', file: SOURCE_DOC.file, pages: SOURCE_DOC.pages, href: SOURCE_DOC.href },
];

const PAGES_OF = itpPages as Record<string, number>;
const commitmentsBetween = (first: number, last: number) =>
  Object.values(PAGES_OF).filter((p) => p >= first && p <= last).length;

/** The scope pass: Beacon's read of the table of contents and headings. */
export const SCOPE_PROPOSAL: ScopeProposal = {
  section: 'VIII. Conditions of Approval',
  first: 80,
  last: 244,
  commitmentsLikely: commitmentsBetween(80, 244),
  pattern: '11.42.1 Title.',
};

/** What the scan in this prototype covers: Condition 11, Take Minimization Measures. */
export const SCAN_SCOPE = { first: 131, last: 223 };
export { commitmentsBetween, boxesFor };

// ── Commitments and requirements ─────────────────────────────────────────────

interface RawAnchors {
  first: number;
  last: number;
  pages: ScanPage[];
  commitments: {
    code: string;
    title: string;
    page: number;
    text: string;
    heading: Box[];
    blocks: Box[];
    lines: TextLine[];
    requirements: { id: string; score: number; start: number; end: number }[];
  }[];
}

interface RawRequirement {
  id: string;
  commitment: string;
  name: string;
  text: string;
  type: RequirementType;
  phases: string[];
  species: string[];
  activities: string[];
  responsibleParty: string;
  deliverable: string;
  timing: {
    frequency: string;
    deadline?: { milestone?: string; direction?: string; offset?: number; unit?: string };
    recurrence?: { interval?: number; unit?: string };
    stated?: string;
  };
}

const RAW = anchorsJson as unknown as RawAnchors;
const ITP = itpJson as unknown as { requirements: RawRequirement[] };
const REQ_BY_ID = new Map(ITP.requirements.map((r) => [r.id, r]));

export const SCAN_PAGES: ScanPage[] = RAW.pages;
export const LOW_CONFIDENCE = 0.6;

export const MISSED_CODE = 'COA 11.35';
export const SPLIT_CODE = 'COA 11.36';
const SPLIT_PAGE = 156;
const FALSE_CODE = 'COA 11.32';
const FALSE_PAGE = 146;
const UNANCHORED_IN = 'COA 11.14';
const DUPLICATE_IN = 'COA 11.25';
const DUPLICATE_OF = 'Submit SWPPP to CDFW with Construction Phase Authorization Package';
const UNCOVERED_IN = 'COA 11.18';
/** The parse missed this duty: its requirement is dropped, so its sentence is uncovered. */
const UNCOVERED_DROP = 'Time Mowing to Species Dormancy and Dry Conditions';

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
/** Case and punctuation never make two concepts: they fold by code, before any merge pass. */
const fold = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '');

const findIn = (text: string, needle: string, from = 0, to = text.length) => {
  const i = text.toLowerCase().indexOf(needle.toLowerCase(), from);
  return i >= 0 && i + needle.length <= to ? i : -1;
};

// Seasons: no wizard fixture, so the registry is read from the ITP's own phrasing. Each
// phrasing is what a raw extraction produces as its own entity; the merge pass then
// proposes which phrasings are one season.
const SEASON_PHRASES: { name: string; phrases: string[] }[] = [
  { name: 'GGS active season (May 1 – October 1)', phrases: ['active season (May 1 – October 1)'] },
  { name: 'Active season (May 1 to October 1)', phrases: ['active season (May 1 to October 1)'] },
  { name: 'GGS active period, May 1 – October 1', phrases: ['active period between May 1 and October 1'] },
  { name: 'GGS inactive season', phrases: ['GGS inactive season', 'inactive season'] },
  { name: 'Dry season (July 15 – October 15)', phrases: ['dry season (July 15 – October 15)', 'dry season of July 15 – October 15'] },
  { name: 'July 15 – October 15 (dry season)', phrases: ['July 15 to October 15 of each year (dry season)'] },
  { name: '“Dry season,” July 15 – Oct 15', phrases: ['dry season” defined as July 15-Oct 15'] },
  { name: 'CTS active season', phrases: ['CTS active season'] },
];

const entities = new Map<string, Entity>();
const entityId = (kind: EntityKind, name: string) => {
  const id = `${kind}:${fold(name)}`;
  const had = entities.get(id);
  // Spellings that fold together keep the one that reads as a name (leading capital).
  if (!had || (/^[a-z]/.test(had.name) && /^[A-Z]/.test(name))) entities.set(id, { id, kind, name });
  return id;
};

const typeConfidence = (r: RawRequirement) => (r.type === 'Other' ? 0.41 : 0.9);

const dirOf = (d?: string): Direction | undefined =>
  d === 'Before' || d === 'After' || d === 'Within' ? d : undefined;
const unitWord = (u?: string, n?: number) => {
  if (!u) return '';
  const w = u.toLowerCase().replace(/s$/, '');
  return n === 1 ? w : `${w}s`;
};

const makeRequirement = (
  raw: RawRequirement,
  code: string,
  text: string,
  lines: TextLine[],
  span: { start: number; end: number } | null,
): ReviewRequirement => {
  const dl = raw.timing.deadline;
  const timing: Timing = {
    frequency: raw.timing.frequency,
    milestoneId: dl?.milestone ? entityId('milestone', dl.milestone) : undefined,
    direction: dirOf(dl?.direction),
    offset: dl?.offset ? `${dl.offset} ${unitWord(dl.unit, dl.offset)}` : undefined,
    recurrence: raw.timing.recurrence?.unit
      ? `Every ${raw.timing.recurrence.interval && raw.timing.recurrence.interval > 1 ? `${raw.timing.recurrence.interval} ` : ''}${unitWord(raw.timing.recurrence.unit, raw.timing.recurrence.interval ?? 1)}`
      : undefined,
    stated: raw.timing.stated?.replace(/\s+/g, ' '),
  };
  const values: ValueAnchor[] = [];
  const seasonIds: string[] = [];
  if (span) {
    const at = (field: ValueAnchor['field'], value: string, needle: string) => {
      const i = findIn(text, needle, span.start, span.end);
      if (i >= 0) values.push({ field, value, charStart: i, charEnd: i + needle.length });
      return i >= 0;
    };
    if (timing.stated) at('stated', timing.stated, timing.stated);
    if (dl?.milestone) at('milestone', dl.milestone, dl.milestone);
    for (const sp of raw.species) at('species', sp, sp) || at('species', sp, sp.split(' ').slice(-2).join(' '));
    at('party', raw.responsibleParty, raw.responsibleParty.split(/[,(]/)[0].trim());
    for (const s of SEASON_PHRASES) {
      for (const p of s.phrases) {
        if (at('season', s.name, p)) {
          seasonIds.push(entityId('season', s.name));
          break;
        }
      }
    }
  }
  return {
    id: raw.id,
    code,
    name: raw.name,
    type: raw.type,
    typeConfidence: typeConfidence(raw),
    phases: raw.phases,
    timing,
    speciesIds: raw.species.map((s) => entityId('species', s)),
    activityIds: raw.activities.map((a) => entityId('activity', a)),
    seasonIds,
    responsibleParty: raw.responsibleParty,
    deliverable: raw.deliverable,
    quote: raw.text.replace(/\s+/g, ' '),
    anchor: span ? { page: boxesFor(lines, span.start, span.end)[0]?.page ?? 0, charStart: span.start, charEnd: span.end, boxes: boxesFor(lines, span.start, span.end) } : null,
    values,
    filing: 'suggested',
  };
};

export const REQUIREMENTS: ReviewRequirement[] = [];
export const COMMITMENTS: ReviewCommitment[] = [];

/** How much of the binding text the 2026-09-14 extraction's quotes cover, before partition. */
export const RAW_COVERAGE = { binding: 0, covered: 0 };

for (const c of RAW.commitments) {
  const reqsIn = c.requirements.filter((r) => REQ_BY_ID.get(r.id)?.name !== UNCOVERED_DROP);
  const anchored = reqsIn.filter((r) => r.start >= 0).sort((a, b) => a.start - b.start);
  const spans = new Map(anchored.map((r) => [r.id, { start: r.start, end: r.end }]));

  // Partition: every binding sentence belongs to exactly one requirement. Overlaps clip to
  // the earlier span; a binding sentence no quote covers joins the requirement before it
  // (or the first). The extraction prompt asks for this; the fixture enforces it here.
  const order = anchored.map((r) => r.id);
  for (let i = 1; i < order.length; i++) {
    const prev = spans.get(order[i - 1])!;
    const cur = spans.get(order[i])!;
    if (cur.start < prev.end) cur.start = Math.min(cur.end, prev.end + 1);
  }
  for (const { start: ss, end: se } of sentences(c.text)) {
    const s = { s: ss, e: se };
    if (!BINDING.test(c.text.slice(s.s, s.e))) continue;
    RAW_COVERAGE.binding++;
    const covered = coveredChars({ start: s.s, end: s.e }, [...spans.values()]) > (s.e - s.s) * 0.5;
    if (covered) {
      RAW_COVERAGE.covered++;
      continue;
    }
    if (!order.length) continue;
    // Partition never reaches past the last span: a duty after every quote is the parse's miss.
    if (spans.get(order.at(-1)!)!.end < s.s && c.code === UNCOVERED_IN) continue;
    const ownerIdx = Math.max(0, order.findLastIndex((id) => spans.get(id)!.start <= s.s));
    const owner = spans.get(order[ownerIdx])!;
    const next = spans.get(order[ownerIdx + 1] ?? '');
    owner.start = Math.min(owner.start, s.s);
    owner.end = Math.max(owner.end, next ? Math.min(s.e, next.start - 1) : s.e);
  }

  const ids: string[] = [];
  for (const r of reqsIn) {
    const raw = REQ_BY_ID.get(r.id);
    if (!raw) continue;
    const req = makeRequirement(raw, c.code, c.text, c.lines, spans.get(r.id) ?? null);
    REQUIREMENTS.push(req);
    ids.push(req.id);
  }

  if (c.code === UNANCHORED_IN) {
    const base = REQ_BY_ID.get(c.requirements[0].id)!;
    const req = makeRequirement(
      {
        ...base,
        id: 'req_sw3_unanchored',
        name: 'Submit Weekly Trench Inspection Photos to CDFW',
        text: 'The Designated Biologist shall photograph each inspected trench and submit the photographs to CDFW weekly.',
        type: 'Reporting',
        deliverable: 'Weekly trench inspection photographs',
        timing: { frequency: 'Recurring', recurrence: { interval: 1, unit: 'Weeks' } },
        species: [],
        activities: ['Excavation and trenching'],
      },
      c.code,
      c.text,
      c.lines,
      null,
    );
    REQUIREMENTS.push(req);
    ids.push(req.id);
  }

  if (c.code === DUPLICATE_IN) {
    const orig = REQUIREMENTS.find((r) => r.code === c.code && r.name === DUPLICATE_OF);
    if (orig) {
      const dup: ReviewRequirement = {
        ...orig,
        id: 'req_sw3_duplicate',
        name: 'Provide SWPPP to CDFW Before Construction',
        values: [...orig.values],
      };
      REQUIREMENTS.push(dup);
      ids.push(dup.id);
    }
  }

  COMMITMENTS.push({
    code: c.code,
    title: c.title,
    page: c.page,
    pages: [...new Set(c.blocks.map((b) => b.page))].filter((p) => p <= RAW.last),
    text: c.text,
    heading: c.heading,
    blocks: c.blocks.filter((b) => b.page <= RAW.last),
    lines: c.lines,
    requirementIds: ids,
  });
}

export const COMMITMENT_BY_CODE = new Map(COMMITMENTS.map((c) => [c.code, c]));
export const REQUIREMENT_BY_ID = new Map(REQUIREMENTS.map((r) => [r.id, r]));

// ── Entity registry and merge proposals ──────────────────────────────────────

/** The merge pass's output: phrasings it clusters as one concept, by meaning. */
const MERGE_SPEC: { kind: EntityKind; into: string; from: string[] }[] = [
  {
    kind: 'milestone',
    into: 'Initiation of Covered Activities',
    from: ['start of Covered Activities', 'start of any Covered Activity', 'Initiation of Covered Activity', 'Start of the Covered Activity'],
  },
  {
    kind: 'milestone',
    into: 'Initiation of In-Water Covered Activities',
    from: ['Initiation of In-Water Covered Activity'],
  },
  {
    kind: 'season',
    into: 'GGS active season (May 1 – October 1)',
    from: ['Active season (May 1 to October 1)', 'GGS active period, May 1 – October 1'],
  },
  {
    kind: 'season',
    into: 'Dry season (July 15 – October 15)',
    from: ['July 15 – October 15 (dry season)', '“Dry season,” July 15 – Oct 15'],
  },
];

export const MERGES: MergeProposal[] = MERGE_SPEC.map((m) => ({
  id: `merge:${slug(m.into)}`,
  kind: m.kind,
  intoId: `${m.kind}:${fold(m.into)}`,
  fromIds: m.from.map((f) => `${m.kind}:${fold(f)}`).filter((id) => entities.has(id)),
})).filter((m) => entities.has(m.intoId) && m.fromIds.length);

export const ENTITIES: Entity[] = [...entities.values()].sort((a, b) => a.name.localeCompare(b.name));
export const ENTITY_KIND_LABEL: Record<EntityKind, string> = {
  milestone: 'Milestones',
  season: 'Seasons',
  activity: 'Construction Activities',
  species: 'Species',
};

// ── Finds and the scan's event stream ────────────────────────────────────────

const falseLine = SCAN_PAGES.find((p) => p.n === FALSE_PAGE)?.lines.find((l) => l.text.includes('11.32'));

export const FINDS: Find[] = [];
for (const c of COMMITMENTS) {
  if (c.code === MISSED_CODE) continue;
  if (c.code === SPLIT_CODE) {
    FINDS.push({ id: c.code, code: c.code, title: c.title, page: c.page, boxes: c.blocks.filter((b) => b.page < SPLIT_PAGE), kind: 'commitment' });
    FINDS.push({
      id: `${c.code}:split`,
      code: '',
      title: 'Untitled',
      page: SPLIT_PAGE,
      boxes: c.blocks.filter((b) => b.page >= SPLIT_PAGE),
      kind: 'split',
      partOf: c.code,
    });
    continue;
  }
  FINDS.push({ id: c.code, code: c.code, title: c.title, page: c.page, boxes: c.blocks, kind: 'commitment' });
  if (c.code === 'COA 11.31.1' && falseLine) {
    FINDS.push({
      id: FALSE_CODE,
      code: FALSE_CODE,
      title: 'Condition of Approval 11.32',
      page: FALSE_PAGE,
      boxes: [{ page: FALSE_PAGE, x: falseLine.x, y: falseLine.y, w: falseLine.w, h: falseLine.h }],
      kind: 'false',
    });
  }
}
FINDS.sort((a, b) => a.page - b.page || (a.boxes[0]?.y ?? 0) - (b.boxes[0]?.y ?? 0));
export const FIND_BY_ID = new Map(FINDS.map((f) => [f.id, f]));

/** Seconds per page at 1×: the 50-page scan runs about a minute. */
export const PAGE_SECONDS = 1.2;
/** A commitment parses once its end has been read (the next heading found), one at a time. */
const PARSE_AFTER = 0.35;

export const SCAN_EVENTS: ScanEvent[] = (() => {
  const ev: ScanEvent[] = [];
  const pageT = (n: number) => (n - SCAN_SCOPE.first) * PAGE_SECONDS;
  for (const p of SCAN_PAGES) ev.push({ t: pageT(p.n) + PAGE_SECONDS * 0.95, type: 'page_scanned', page: p.n });
  let parseFree = 0;
  const seen = new Set<string>();
  const firstUse = new Map<string, number>();
  const foundT = (f: Find) => pageT(f.page) + PAGE_SECONDS * (0.2 + 0.6 * (f.boxes[0]?.y ?? 0));
  const endT = (f: Find) => pageT(Math.max(f.page, ...f.boxes.map((b) => b.page))) + PAGE_SECONDS * 0.95;
  for (const [i, f] of FINDS.entries()) {
    const tFound = foundT(f);
    ev.push({ t: tFound, type: 'commitment_found', findId: f.id });
    if (f.kind !== 'commitment') continue;
    const c = COMMITMENT_BY_CODE.get(f.code)!;
    const next = FINDS[i + 1];
    const tRead = next ? Math.min(foundT(next), endT(f)) : endT(f);
    const tParsed = Math.max(tRead, tFound, parseFree) + PARSE_AFTER;
    parseFree = tParsed;
    ev.push({ t: tParsed, type: 'commitment_parsed', code: c.code, requirements: c.requirementIds.length });
    for (const id of c.requirementIds) {
      const r = REQUIREMENT_BY_ID.get(id)!;
      for (const e of [r.timing.milestoneId, ...r.speciesIds, ...r.activityIds, ...r.seasonIds]) {
        if (!e || seen.has(e)) continue;
        seen.add(e);
        firstUse.set(e, tParsed);
        ev.push({ t: tParsed + 0.05, type: 'entity_proposed', entityId: e });
      }
    }
  }
  for (const m of MERGES) {
    const t = Math.max(...[m.intoId, ...m.fromIds].map((id) => firstUse.get(id) ?? Infinity));
    if (Number.isFinite(t)) ev.push({ t: t + 0.1, type: 'merge_proposed', mergeId: m.id });
  }
  return ev.sort((a, b) => a.t - b.t);
})();

export const SCAN_SECONDS = Math.max(...SCAN_EVENTS.map((e) => e.t));

/** The missed commitment, as it lands when a person marks it: found, then parsed. */
export const MISSED_FIND: Find = (() => {
  const c = COMMITMENT_BY_CODE.get(MISSED_CODE)!;
  return { id: c.code, code: c.code, title: c.title, page: c.page, boxes: c.blocks, kind: 'commitment' };
})();

// ── Labels ────────────────────────────────────────────────────────────────────

export { REQUIREMENT_TYPE_LABEL, PHASES };
export const FREQUENCY_LABEL: Record<string, string> = {
  Onetime: 'One time',
  Ongoing: 'Ongoing',
  AsNeeded: 'As needed',
  Recurring: 'Recurring',
};
export const FLAG_LABEL: Record<ReviewFlag, string> = {
  unanchored: 'Not in the source',
  uncovered: 'Uncovered text',
  duplicate: 'Likely duplicate',
  type: 'Type unclear',
  missed: 'Marked by a person',
  split: 'Found as two',
};

/** Everything the client controllers need, in one payload. */
// Boxes are recomputed in the browser from the commitment's lines (boxesFor), and a
// quote is only shipped where it is the evidence: when it did not anchor.
const clientRequirements = () =>
  REQUIREMENTS.map((r) => ({
    ...r,
    quote: r.anchor ? '' : r.quote,
    anchor: r.anchor && { ...r.anchor, boxes: [] as Box[] },
  }));

const runPayload = {
  finds: FINDS,
  missed: MISSED_FIND,
  events: SCAN_EVENTS,
  seconds: SCAN_SECONDS,
  scope: SCAN_SCOPE,
  pageSeconds: PAGE_SECONDS,
  merges: MERGES,
};

/** Step 1: the pages (for marking a missed commitment) and each commitment's geometry. */
export const SW3_SCAN_CLIENT = {
  ...runPayload,
  headings: PAGES_OF,
  proposal: { section: SCOPE_PROPOSAL.section, first: SCOPE_PROPOSAL.first, last: SCOPE_PROPOSAL.last },
  pages: SCAN_PAGES,
  commitments: COMMITMENTS.map(({ text: _t, ...c }) => c),
  requirements: REQUIREMENTS.map((r) => ({ id: r.id, code: r.code, anchor: r.anchor && { ...r.anchor, boxes: [] as Box[] } })),
};

/** Step 2: the text, the requirements and the registry. */
export const SW3_REVIEW_CLIENT = {
  ...runPayload,
  commitments: COMMITMENTS,
  requirements: clientRequirements(),
  entities: ENTITIES,
  labels: { types: REQUIREMENT_TYPE_LABEL, phases: [...PHASES], frequency: FREQUENCY_LABEL },
};
export type Sw3ScanClient = typeof SW3_SCAN_CLIENT;
export type Sw3ReviewClient = typeof SW3_REVIEW_CLIENT;
