import { LUCIDE_EXTRA } from '../lib/lucide-extra';
import { withBase } from '../lib/base';
// SETUP WIZARD IN THREE STEPS — watch the scan, review the commitment.
//
// Source Documents → Commitments → Compliance Index (2026-10-13 product meeting).
// Requirements stop being a step: they arrive as child highlights on a commitment in
// step 2. Step 3 is the shipped Compliance Index (/prototypes/setup-wizard-ci).
//
// Everything here is derived from the ITP itself:
//   sw3-anchors.json      scripts/anchor-itp.mjs over public/source-docs/itp.pdf, pp. 131–223 (Condition 11):
//                         each commitment's text and boxes, each requirement quote's offsets
//   sw3-requirements.json scripts/extract-requirements.mjs: Beacon's own requirement prompt
//                         (ExtractRequirementsFromCommitment v6) over each commitment's text, in
//                         its output shape: name, verbatim passage, phases, type, scope,
//                         frequency, activities, species, seasons, milestones, rationale
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
// The milestone and season variants are not seeded: they are the extraction's own.

import anchorsJson from './sw3-anchors.json';
import v6Json from './sw3-requirements.json';
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
  /** Set once a person or Aldo lists them; until then the timing's one milestone. Beacon's
   *  RequirementMilestone allows several. */
  milestoneIds?: string[];
  /** Beacon's Requirement.Notes. */
  notes?: string;
  /** Why the prompt grouped it so: who does the work and what "done" looks like. */
  rationale?: string;
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

/** Test drive (2026-10-14): this variant is called Project Setup, with the scan glyph (Lucide
 *  scan-text) so it no longer echoes Aldo's green circle. In the side nav it is "Setup" under
 *  Project, with Dashboard, Components and Lists. */
export const SW3_NAME = 'Project Setup';
export const SW3_GLYPH = LUCIDE_EXTRA['scan-text'];
export const SW3_NAV = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'components', label: 'Components', href: withBase('/prototypes/components') },
  { id: 'lists', label: 'Lists', href: withBase('/prototypes/lists') },
  { id: 'sw3-setup', label: 'Setup', href: withBase(SW3_BASE) },
];
export const SW3_REVIEW = `${SW3_BASE}/review`;
export const CI_HREF = '/prototypes/setup-wizard-ci';
export const SW3_INDEX = `${SW3_BASE}/compliance-index`;

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
    href: SW3_INDEX,
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

/** One requirement as Beacon's v6 prompt returned it (scripts/extract-requirements.mjs). */
export interface V6Requirement {
  name: string;
  quote: string;
  start: number;
  end: number;
  phases: string[];
  type: RequirementType;
  scope: 'Project' | 'Component';
  frequency: string | null;
  activities: string[];
  species: string[];
  seasons: { Name: string; StartMonth?: number; StartDay?: number; EndMonth?: number; EndDay?: number }[];
  milestones: string[];
  related: number[];
  rationale: string;
}

const RAW = anchorsJson as unknown as RawAnchors;
const V6 = (v6Json as unknown as { docs: { itp: Record<string, V6Requirement[]> } }).docs.itp;

export const SCAN_PAGES: ScanPage[] = RAW.pages;
export const LOW_CONFIDENCE = 0.6;

export const MISSED_CODE = 'COA 11.35';
export const SPLIT_CODE = 'COA 11.36';
const SPLIT_PAGE = 156;
const FALSE_CODE = 'COA 11.32';
const FALSE_PAGE = 146;
const UNANCHORED_IN = 'COA 11.14';
const DUPLICATE_IN = 'COA 11.25';

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
/** A requirement's ID from its commitment and its place in the v6 answer: coa-11-3-2.
 *  Step 3's locators carry (code, n) and resolve through this. */
export const requirementIdFor = (code: string, n: number) => `${slug(code)}-${n}`;
/** Case and punctuation never make two concepts: they fold by code, before any merge pass. */
const fold = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '');

const findIn = (text: string, needle: string, from = 0, to = text.length) => {
  const i = text.toLowerCase().indexOf(needle.toLowerCase(), from);
  return i >= 0 && i + needle.length <= to ? i : -1;
};

const entities = new Map<string, Entity>();
const entityId = (kind: EntityKind, name: string) => {
  const id = `${kind}:${fold(name)}`;
  const had = entities.get(id);
  // Spellings that fold together keep the one that reads as a name (leading capital).
  if (!had || (/^[a-z]/.test(had.name) && /^[A-Z]/.test(name))) entities.set(id, { id, kind, name });
  return id;
};

/** The responsible party each type implies (the v6 prompt's own table). */
const PARTY: Record<RequirementType, string> = {
  Survey: 'Field biologists',
  Monitoring: 'Field monitors',
  AvoidanceAndBMPs: 'Construction crews',
  RestorationAndMitigation: 'Restoration crews',
  Analysis: 'Technical analysts',
  Plan: 'Environmental planners',
  Design: 'Engineers',
  Reporting: 'Compliance staff',
  ApprovalAndConsultation: 'Permitting staff',
  Financial: 'Admin and finance',
  TrainingAndEducation: 'Compliance leads',
  Other: '',
};

/** A season as the model named it. Its dates, when the text gave them, fold its variants. */
const seasonLabel = (s: V6Requirement['seasons'][number]) => s.Name.replace(/\s+/g, ' ').trim();
const seasonDates = new Map<string, string>();

export const makeV6Requirement = (
  raw: V6Requirement,
  id: string,
  code: string,
  text: string,
  lines: TextLine[],
): ReviewRequirement => {
  const span = raw.start >= 0 ? { start: raw.start, end: raw.end } : null;
  const milestoneIds = raw.milestones.map((m) => entityId('milestone', m));
  const seasonIds = raw.seasons.map((s) => {
    const id = entityId('season', seasonLabel(s));
    if (s.StartMonth && s.EndMonth) seasonDates.set(id, `${s.StartMonth}/${s.StartDay}-${s.EndMonth}/${s.EndDay}`);
    return id;
  });
  // Where each linked name sits in the requirement's words: underlined in the text.
  const values: ValueAnchor[] = [];
  if (span) {
    const at = (field: ValueAnchor['field'], value: string, needle: string) => {
      const i = findIn(text, needle, span.start, span.end);
      if (i >= 0) values.push({ field, value, charStart: i, charEnd: i + needle.length });
      return i >= 0;
    };
    for (const m of raw.milestones) at('milestone', m, m);
    for (const s of raw.seasons) at('season', seasonLabel(s), s.Name);
    for (const sp of raw.species) at('species', sp, sp) || at('species', sp, sp.split(' ').slice(-2).join(' '));
  }
  return {
    id,
    code,
    name: raw.name,
    type: raw.type,
    typeConfidence: raw.type === 'Other' ? 0.41 : 0.9,
    phases: raw.phases,
    timing: { frequency: raw.frequency ?? 'Ongoing', milestoneId: milestoneIds[0] },
    speciesIds: raw.species.map((s) => entityId('species', s)),
    activityIds: raw.activities.map((a) => entityId('activity', a)),
    seasonIds,
    milestoneIds,
    responsibleParty: PARTY[raw.type] ?? '',
    deliverable: '',
    rationale: raw.rationale,
    quote: raw.quote.replace(/\s+/g, ' '),
    anchor: span ? { page: boxesFor(lines, span.start, span.end)[0]?.page ?? 0, charStart: span.start, charEnd: span.end, boxes: boxesFor(lines, span.start, span.end) } : null,
    values,
    filing: 'suggested',
  };
};

export const REQUIREMENTS: ReviewRequirement[] = [];
export const COMMITMENTS: ReviewCommitment[] = [];

/** How much of the binding text the extraction's passages cover. */
export const RAW_COVERAGE = { binding: 0, covered: 0 };

for (const c of RAW.commitments) {
  const reqs = (V6[c.code] ?? []).map((r, i) => makeV6Requirement(r, `${slug(c.code)}-${i + 1}`, c.code, c.text, c.lines));
  for (const { start, end } of sentences(c.text)) {
    if (!BINDING.test(c.text.slice(start, end))) continue;
    RAW_COVERAGE.binding++;
    const spans = reqs.filter((r) => r.anchor).map((r) => ({ start: r.anchor!.charStart, end: r.anchor!.charEnd }));
    if (coveredChars({ start, end }, spans) > (end - start) * 0.5) RAW_COVERAGE.covered++;
  }
  const ids = reqs.map((r) => r.id);
  REQUIREMENTS.push(...reqs);

  // Seeded: a requirement whose quote is not in the ITP (the made-up-text signal).
  if (c.code === UNANCHORED_IN && reqs[0]) {
    const req: ReviewRequirement = {
      ...reqs[0],
      id: 'req_sw3_unanchored',
      name: 'Submit Weekly Trench Inspection Photos to CDFW',
      type: 'Reporting',
      phases: ['Construction'],
      timing: { frequency: 'Recurring' },
      speciesIds: [],
      activityIds: [entityId('activity', 'Excavation and trenching')],
      seasonIds: [],
      milestoneIds: [],
      responsibleParty: PARTY.Reporting,
      rationale: 'Compliance staff photograph each inspected trench and submit the photographs weekly.',
      quote: 'The Designated Biologist shall photograph each inspected trench and submit the photographs to CDFW weekly.',
      anchor: null,
      values: [],
    };
    REQUIREMENTS.push(req);
    ids.push(req.id);
  }

  // Seeded: the same words parsed twice, under a different name.
  if (c.code === DUPLICATE_IN) {
    const orig = reqs.find((r) => r.type === 'Reporting') ?? reqs[0];
    if (orig) {
      const dup: ReviewRequirement = { ...orig, id: 'req_sw3_duplicate', name: `${orig.name.replace(/^Submit /, 'Provide ')} Before Construction`, values: [...orig.values] };
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

/** The merge pass: phrasings of one concept, as the extraction named them across
 *  commitments. Milestones fold by meaning (start, initiation and commencement of the same
 *  thing; singular and plural); seasons by the same date range. The phrasing most
 *  requirements use is the one the others merge into. */
const MILESTONE_WORDS: Record<string, string> = { initiation: 'start', initiating: 'start', commencement: 'start', commence: 'start', beginning: 'start', begin: 'start', onset: 'start', starting: 'start', completion: 'end', completing: 'end', complete: 'end', finish: 'end', end: 'end' };
const milestoneKey = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9 ]+/g, ' ')
    .split(/\s+/)
    .filter((w) => w && !['of', 'the', 'any', 'a', 'an', 'all'].includes(w))
    .map((w) => MILESTONE_WORDS[w] ?? w.replace(/ies$/, 'y').replace(/(?<!s)s$/, ''))
    .join(' ');
const uses = new Map<string, number>();
for (const r of REQUIREMENTS) for (const id of [...(r.milestoneIds ?? []), ...r.seasonIds]) uses.set(id, (uses.get(id) ?? 0) + 1);
const clusters = new Map<string, string[]>();
for (const e of entities.values()) {
  const key = e.kind === 'milestone' ? `m:${milestoneKey(e.name)}` : e.kind === 'season' && seasonDates.has(e.id) ? `s:${seasonDates.get(e.id)}` : null;
  if (key) clusters.set(key, [...(clusters.get(key) ?? []), e.id]);
}

export const MERGES: MergeProposal[] = [...clusters.values()]
  .filter((ids) => ids.length > 1)
  .map((ids) => {
    const [intoId, ...fromIds] = [...ids].sort((x, y) => (uses.get(y) ?? 0) - (uses.get(x) ?? 0) || x.localeCompare(y));
    return { id: `merge:${slug(entities.get(intoId)!.name)}`, kind: entities.get(intoId)!.kind, intoId, fromIds };
  });

export const ENTITIES: Entity[] = [...entities.values()].sort((a, b) => a.name.localeCompare(b.name));
/** The registry as it stands, with any file read after this one (the MMRP) added. */
export const allEntities = (): Entity[] => [...entities.values()].sort((a, b) => a.name.localeCompare(b.name));
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
      for (const e of [...(r.milestoneIds ?? []), ...r.speciesIds, ...r.activityIds, ...r.seasonIds]) {
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
