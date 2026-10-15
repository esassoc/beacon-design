// The three-step Setup Wizard's source documents, each as the payload its scan replays.
//
// Three real DCP documents, three shapes of the same problem:
//   - the ITP: numbered conditions ("11.42.1 Title.") running through prose, anchored by
//     scripts/anchor-itp.mjs, with the extraction fixture and Jacky's seeded problems
//     (src/data/setup-wizard-3-step.ts);
//   - the MMRP: commitments as rows of three landscape tables, anchored by
//     scripts/anchor-mmrp.mjs, whose structured columns (timing, party, reporting) need
//     no extraction at all;
//   - the Notice of Determination: a four-page filing form with no commitments of its
//     own, whose labels and check boxes are drawn, not text.
//
// Every document gets the same payload: its pages, the scope pass's proposal and named
// sections, the finds and their event stream, and each commitment's requirement spans as
// boxes (prod's PdfBoundingBoxDto). The store runs one replay per document.

import mmrpJson from './sw3-mmrp-anchors.json';
import itpPages from './itp-pages.json';
import {
  COMMITMENTS,
  REQUIREMENTS,
  FINDS,
  SCAN_EVENTS,
  SCAN_SECONDS,
  SCAN_SCOPE,
  PAGE_SECONDS,
  MISSED_FIND,
  MERGES,
  SCOPE_PROPOSAL,
  SW3_REVIEW_CLIENT,
  ENTITIES,
  PHASES,
  type Box,
  type ReviewCommitment,
  type ReviewRequirement,
  type Find,
  type ScanEvent,
} from './setup-wizard-3-step';
import { boxesFor, type TextLineBox } from '../lib/anchored-text';
import { guessType, nameFrom } from '../lib/requirement-heuristics';

/** A named part of a document a person can scope to in their own words. */
export interface DocSection {
  /** Case-insensitive pattern for what a person might call it. */
  match: string;
  label: string;
  first: number;
  last: number;
}

/** One requirement candidate, drawn on the page as boxes. */
export interface ScanSpan {
  id: string;
  code: string;
  name: string;
  boxes: Box[];
}

export interface ScanCommitment {
  code: string;
  title: string;
  page: number;
  blocks: Box[];
  /** The commitment's text as identified: what a person checks before the run goes on. */
  text: string;
  /** Structured fields read from a table's columns (the MMRP), not extracted. */
  columns?: Record<string, string>;
}

export interface DocProposal {
  /** Aldo's opening: what the scope pass read. */
  text: string;
  /** The one-click answer: scan this range. Null when there is nothing to scan. */
  go: { label: string; first: number; last: number; scope: string } | null;
  /** Suggestions under the composer before the run. */
  suggest: string[];
}

export interface ScanDoc {
  id: string;
  short: string;
  name: string;
  /** The uploaded file's name, as prod's SourceFile.Name. */
  file: string;
  /** Path under public/. */
  pdf: string;
  /** Pages in the document. */
  total: number;
  /** A scanned file (no text layer): seconds per page to read its page images first (OCR),
   *  before the scope pass can run. */
  prepare?: number;
  /** The pages this prototype's replay covers; a wider scope clamps to it. */
  scope: { first: number; last: number };
  pageSeconds: number;
  sections: DocSection[];
  headings: Record<string, number>;
  proposal: DocProposal;
  finds: Find[];
  missed: Find | null;
  events: ScanEvent[];
  seconds: number;
  commitments: ScanCommitment[];
  spans: ScanSpan[];
  /** The first commitments, checked with a person before the scan goes on. */
  calibrate: string[];
  merges: typeof MERGES;
}

const CALIBRATE = 3;

/** Events for a replay: each page read in turn, each find on its page, each parse a little behind. */
const replay = (first: number, last: number, finds: Find[], reqCount: (code: string) => number, pageSeconds: number) => {
  const ev: ScanEvent[] = [];
  const pageT = (n: number) => (n - first) * pageSeconds;
  for (let n = first; n <= last; n++) ev.push({ t: pageT(n) + pageSeconds * 0.95, type: 'page_scanned', page: n });
  // A commitment parses once its end has been read: when the next heading is found (or
  // its last page is done), so the run is never more than one commitment ahead of itself.
  const foundT = (f: Find) => pageT(f.page) + pageSeconds * (0.2 + 0.6 * (f.boxes[0]?.y ?? 0));
  const endT = (f: Find) => pageT(Math.max(...f.boxes.map((b) => b.page), f.page)) + pageSeconds * 0.95;
  let parseFree = 0;
  for (const [i, f] of finds.entries()) {
    const tFound = foundT(f);
    ev.push({ t: tFound, type: 'commitment_found', findId: f.id });
    if (f.kind !== 'commitment') continue;
    const next = finds[i + 1];
    const tRead = next ? Math.min(foundT(next), endT(f)) : endT(f);
    const tParsed = Math.max(tRead + 0.3 * pageSeconds, tFound + 0.3 * pageSeconds, parseFree + 0.3 * pageSeconds);
    parseFree = tParsed;
    ev.push({ t: tParsed, type: 'commitment_parsed', code: f.code, requirements: reqCount(f.code) });
  }
  ev.sort((a, b) => a.t - b.t);
  return { events: ev, seconds: Math.max(0, ...ev.map((e) => e.t)) };
};

// ── ITP ───────────────────────────────────────────────────────────────────────

const itpHeadings = itpPages as Record<string, number>;
const likely = (h: Record<string, number>, a: number, b: number) => Object.values(h).filter((p) => p >= a && p <= b).length;

const itp: ScanDoc = {
  id: 'itp',
  short: 'ITP',
  name: 'Incidental Take Permit No. 2081-2024-018-00',
  file: 'ITP_2081-2024-018-00_Signed.pdf',
  pdf: '/source-docs/itp.pdf',
  total: 247,
  scope: SCAN_SCOPE,
  pageSeconds: PAGE_SECONDS,
  sections: [
    { match: 'multi[- ]?species', label: 'Multi-Species Measures', first: 131, last: 157 },
    { match: 'construction', label: 'Construction Phase and Maintenance-Activity Covered Species Measures', first: 158, last: 202 },
    { match: 'operations?', label: 'Operations Phases Covered Species Measures', first: 203, last: 223 },
  ],
  headings: itpHeadings,
  proposal: {
    text: `I read the contents and headings of the ITP. The commitments are in ${SCOPE_PROPOSAL.section}, pp. ${SCOPE_PROPOSAL.first}–${SCOPE_PROPOSAL.last}: about ${likely(itpHeadings, SCOPE_PROPOSAL.first, SCOPE_PROPOSAL.last)}. Condition 11, Take Minimization Measures, holds ${likely(itpHeadings, SCAN_SCOPE.first, SCAN_SCOPE.last)} of them on pp. ${SCAN_SCOPE.first}–${SCAN_SCOPE.last}, in three parts: Multi-Species, Construction Phase, and Operations Phases.\nTell me where to start, or scan Condition 11.`,
    go: { label: 'Scan Condition 11', first: SCAN_SCOPE.first, last: SCAN_SCOPE.last, scope: 'Condition 11' },
    suggest: ['Only Condition 11', 'Only the construction measures'],
  },
  finds: FINDS,
  missed: MISSED_FIND,
  events: SCAN_EVENTS,
  seconds: SCAN_SECONDS,
  commitments: COMMITMENTS.map((c) => ({ code: c.code, title: c.title, page: c.page, blocks: c.blocks, text: c.text })),
  spans: REQUIREMENTS.filter((r) => r.anchor).map((r) => {
    const c = COMMITMENTS.find((x) => x.code === r.code)!;
    return { id: r.id, code: r.code, name: r.name, boxes: boxesFor(c.lines, r.anchor!.charStart, r.anchor!.charEnd) };
  }),
  calibrate: FINDS.filter((f) => f.kind === 'commitment').slice(0, CALIBRATE).map((f) => f.code),
  merges: MERGES,
};

// ── MMRP ──────────────────────────────────────────────────────────────────────

interface MmrpRow {
  code: string;
  title: string;
  table: string;
  page: number;
  blocks: Box[];
  cols: Record<string, string>;
  requirements: { name: string; text: string; boxes: Box[] }[];
}
const M = mmrpJson as { pages: { n: number }[]; tables: { id: string; label: string; title: string; first: number; last: number }[]; rows: MmrpRow[] };
const table = (id: string) => M.tables.find((t) => t.id === id)!;
const rowsIn = (id: string) => M.rows.filter((r) => r.table === id).length;
const mmrpFirst = table('t1').first;
const mmrpLast = table('t3').last;
const mmrpFinds: Find[] = M.rows.map((r) => ({ id: r.code, code: r.code, title: r.title, page: r.page, boxes: r.blocks, kind: 'commitment' }));
const mmrpReplay = replay(mmrpFirst, mmrpLast, mmrpFinds, (code) => M.rows.find((r) => r.code === code)?.requirements.length ?? 0, PAGE_SECONDS);

const mmrp: ScanDoc = {
  id: 'mmrp',
  short: 'MMRP',
  name: 'Delta Conveyance Project Mitigation Monitoring and Reporting Program',
  file: '04_DCP_MMRP_ADA.pdf',
  pdf: '/source-docs/dcp-mmrp.pdf',
  total: M.pages.length,
  scope: { first: mmrpFirst, last: mmrpLast },
  pageSeconds: PAGE_SECONDS,
  sections: [
    { match: 'table\\s*1|mitigation measures', label: `${table('t1').label}, ${table('t1').title}`, first: table('t1').first, last: table('t1').last },
    { match: 'table\\s*2|environmental commitments', label: `${table('t2').label}, ${table('t2').title}`, first: table('t2').first, last: table('t2').last },
    { match: 'table\\s*3|compensatory', label: `${table('t3').label}, ${table('t3').title}`, first: table('t3').first, last: table('t3').last },
    { match: 'chapter\\s*3|tables', label: 'Chapter 3', first: mmrpFirst, last: mmrpLast },
  ],
  headings: Object.fromEntries(M.rows.map((r) => [r.code, r.page])),
  proposal: {
    text: [
      `I read the contents of the MMRP. Its commitments are the rows of Chapter 3's three tables, pp. ${mmrpFirst}–${mmrpLast}:`,
      `${table('t1').label}, ${table('t1').title}, pp. ${table('t1').first}–${table('t1').last}: ${rowsIn('t1')} measures.`,
      `${table('t2').label}, ${table('t2').title}, pp. ${table('t2').first}–${table('t2').last}: ${rowsIn('t2')}.`,
      `${table('t3').label}, ${table('t3').title}, pp. ${table('t3').first}–${table('t3').last}: ${rowsIn('t3')}.`,
      'Each row is one commitment and runs across page breaks. I will take Timing, Implementation Party, Reporting Schedule and Participating Permitting Organizations from their columns rather than read them out of the text. Chapters 1 and 2 have line numbers in the margin and no commitments, so I will skip them.',
    ].join('\n'),
    go: { label: 'Scan Chapter 3', first: mmrpFirst, last: mmrpLast, scope: 'Chapter 3' },
    suggest: ['Only Table 1', 'Skip Table 3'],
  },
  finds: mmrpFinds,
  missed: null,
  events: mmrpReplay.events,
  seconds: mmrpReplay.seconds,
  commitments: M.rows.map((r) => ({ code: r.code, title: r.title, page: r.page, blocks: r.blocks, text: r.requirements.map((q) => q.text).join('\n'), columns: r.cols })),
  spans: M.rows.flatMap((r) => r.requirements.map((q, i) => ({ id: `${r.code}#${i + 1}`, code: r.code, name: q.name, boxes: q.boxes }))),
  calibrate: M.rows.slice(0, CALIBRATE).map((r) => r.code),
  merges: [],
};

// ── Notice of Determination ──────────────────────────────────────────────────

const nodReplay = replay(1, 4, [], () => 0, PAGE_SECONDS);
const nod: ScanDoc = {
  id: 'nod',
  short: 'NOD',
  name: 'Delta Conveyance Project Notice of Determination',
  file: '02.0_Delta Conveyance Project Notice of Determination Signed 21DEC23.pdf',
  pdf: '/source-docs/dcp-nod.pdf',
  total: 4,
  prepare: 2,
  scope: { first: 1, last: 4 },
  pageSeconds: PAGE_SECONDS,
  sections: [],
  headings: {},
  proposal: {
    text: [
      'This is a Notice of Determination: a four-page CEQA filing form, signed December 21, 2023. It has no commitments of its own.',
      'On p. 1 it records that mitigation measures were made a condition of approval and that a mitigation monitoring plan was adopted. That plan is the MMRP, already in this project.',
      'p. 1 is a flattened form: its labels and check boxes are drawn, not text, and so are the five component bullets on p. 4. I read them from the page images.',
    ].join('\n'),
    go: null,
    suggest: ['Scan it anyway'],
  },
  finds: [],
  missed: null,
  events: nodReplay.events,
  seconds: nodReplay.seconds,
  commitments: [],
  spans: [],
  calibrate: [],
  merges: [],
};

export const SCAN_DOCS: ScanDoc[] = [itp, mmrp, nod];

// ── Sources ───────────────────────────────────────────────────────────────────
// Prod's shape: a Source (name, reference number) holds Files, and each file is scanned
// on its own. The EIR is the real case of one source with two files: the MMRP it adopted
// and the Notice of Determination that filed it.

export interface ScanSource {
  id: string;
  name: string;
  /** Prod's Source.ReferenceNumber: the permit or clearinghouse number. */
  ref: string;
  /** File ids (ScanDoc ids, or a person's uploads). */
  files: string[];
}

export const SCAN_SOURCES: ScanSource[] = [
  { id: 'src-itp', name: 'Incidental Take Permit', ref: '2081-2024-018-00', files: ['itp'] },
  { id: 'src-eir', name: 'Final Environmental Impact Report', ref: 'SCH-2020010227', files: ['mmrp', 'nod'] },
];
export const SCAN_DOC_BY_ID = new Map(SCAN_DOCS.map((d) => [d.id, d]));

// ── Step 2: every file with commitments, as the review reads them ────────────
// One payload per file, in the order the project lists them. The review runs them end to
// end in one scrubber.

/** An MMRP row as step 2 reads it: its requirements tile the row's text, one after another,
 *  and each line box on the page holds its share of a requirement's characters. */
const mmrpReview = (() => {
  const norm = (t: string) => t.toLowerCase().replace(/\(.*?\)/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
  const named = (t: string, kind: string) =>
    ENTITIES.filter((e) => e.kind === kind && norm(e.name).length > 3 && norm(t).includes(norm(e.name))).map((e) => e.id);
  const phaseOf: Record<string, string> = { preconstruction: 'Pre-Construction', construction: 'Construction', operations: 'Operations', postconstruction: 'Post-Construction' };
  const commitments: ReviewCommitment[] = [];
  const requirements: ReviewRequirement[] = [];
  for (const row of M.rows) {
    const lines: TextLineBox[] = [];
    const ids: string[] = [];
    let at = 0;
    const phases = row.cols.timing
      .split(';')
      .map((p) => phaseOf[p.trim().split(' ')[0].toLowerCase()])
      .filter((p): p is string => !!p && PHASES.includes(p as (typeof PHASES)[number]));
    row.requirements.forEach((q, i) => {
      const start = at;
      const end = start + q.text.length;
      const total = q.boxes.reduce((n, b) => n + b.w, 0) || 1;
      let s0 = start;
      q.boxes.forEach((b, k) => {
        const e0 = k === q.boxes.length - 1 ? end : Math.round(s0 + (q.text.length * b.w) / total);
        lines.push({ ...b, s: s0, e: e0 });
        s0 = e0;
      });
      const id = `${row.code}#${i + 1}`;
      ids.push(id);
      const type = guessType(q.text);
      requirements.push({
        id,
        code: row.code,
        name: nameFrom(q.text),
        type,
        typeConfidence: 0.85,
        phases: [...new Set(phases)],
        timing: { frequency: 'Ongoing' },
        speciesIds: named(q.text, 'species'),
        activityIds: named(q.text, 'activity'),
        seasonIds: named(q.text, 'season'),
        milestoneIds: named(q.text, 'milestone'),
        responsibleParty: row.cols.party ?? '',
        deliverable: '',
        quote: '',
        anchor: { page: row.page, charStart: start, charEnd: end, boxes: [] },
        values: [],
        filing: 'suggested',
      } as ReviewRequirement);
      at = end + 1;
    });
    const pages = [...new Set(row.blocks.map((b) => b.page))];
    commitments.push({
      code: row.code,
      title: row.title,
      page: row.page,
      pages,
      text: row.requirements.map((q) => q.text).join('\n'),
      heading: [],
      blocks: row.blocks,
      lines,
      requirementIds: ids,
    });
  }
  return { commitments, requirements };
})();

export const REVIEW_DOCS = [
  { ...SW3_REVIEW_CLIENT, id: itp.id, short: itp.short, name: itp.name, pdf: itp.pdf, aspect: 1.2941 },
  {
    id: mmrp.id,
    short: mmrp.short,
    name: mmrp.name,
    pdf: mmrp.pdf,
    aspect: 792 / 1224,
    finds: mmrp.finds,
    missed: null,
    events: mmrp.events,
    seconds: mmrp.seconds,
    scope: mmrp.scope,
    pageSeconds: mmrp.pageSeconds,
    merges: [],
    commitments: mmrpReview.commitments,
    requirements: mmrpReview.requirements,
    entities: ENTITIES,
    labels: SW3_REVIEW_CLIENT.labels,
  },
];
