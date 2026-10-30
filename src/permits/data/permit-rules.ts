// Permit Tracker — what each permit type is governed by, and for Critical Areas Review,
// each city's or county's own critical areas ordinance (CAO).
//
// TWO SOURCES:
//   src/data/wa-cao-index.json — EVERY Washington county and city (320): its CAO chapter,
//       the link to it online, the last amending ordinance and its date, and a note where
//       the code is missing or unclear. Read from the code sites (eCode360, Municode,
//       municipal.codes, Code Publishing, county sites) on Oct 23, 2026; jurisdiction lists
//       from MRSC.
//   src/data/cao-detail.json — Lewis County, Napavine, Grays Harbor County, Pacific County
//       and Raymond: how review works and the wetland and stream buffer tables, read from
//       the ordinance text with a citation for each.
// The tracker's other sample agencies (King County, Bellevue, …) get EXAMPLE detail
// (exampleDetail below): the shape of a real CAO on Ecology's model wetland buffers, refs
// pointing at the chapter only, marked as example data on the page. Every other
// jurisdiction has its ordinance only; its detail hasn't been read yet.

import indexRaw from '../../data/wa-cao-index.json';
import detailRaw from '../../data/cao-detail.json';
import { JURISDICTIONS, jurisdiction, type PermitTypeId } from './permit-tracker';

/** A table cell: text, or a value spanning every value column, or two of them. */
export type Cell = string | { span: string } | { span2: string };

export interface RuleTable {
  title: string;
  ref: string;
  cols: string[];
  /** Grouped rows (wetland category → characteristics); cols[1] is the characteristic column. */
  groups?: { label: string; rows: Cell[][] }[];
  rows?: Cell[][];
  notes: string[];
}

export interface WetlandRules {
  rating: string;
  ratingRef: string;
  range: string;
  rangeRef: string;
  tables: RuleTable[];
  url: string;
}

export interface StreamRules {
  typing: string;
  typingRef: string;
  range: string;
  rangeRef: string;
  tables: RuleTable[];
  url: string;
}

export interface ReviewRules {
  url: string;
  process: string;
  processRef: string;
  triggers: string;
  triggersRef: string;
  exemptions: string;
  exemptionsRef: string;
  relief: string;
  reliefRef: string;
}

export interface CaoDetail {
  /** Date the detail was read from the code. */
  verified: string;
  wetland: WetlandRules;
  stream: StreamRules;
  review: ReviewRules;
  /** Code sections read, [title, url]. */
  sources: [string, string][];
}

/** One county or city in the statewide index. `id` matches JURISDICTIONS ids. */
export interface CaoIndexEntry {
  id: string;
  /** As MRSC lists it: "King County", "Bellevue". */
  name: string;
  kind: 'County' | 'City';
  /** The county (or counties, "King/Pierce") a city sits in. */
  county: string;
  chapter: string;
  url: string;
  date: string;
  ord: string;
  note: string;
  /** Where the chapter was read: eCode360, Municode, Web research, … ('' when none). */
  source: string;
}

export interface Ordinance {
  chapter: string;
  url: string;
  /** Last amendment: 'YYYY', 'YYYY-MM' or 'YYYY-MM-DD'; '' when the code shows none. */
  date: string;
  ord: string;
  note: string;
}

export interface CaoRecord {
  entry: CaoIndexEntry;
  ordinance: Ordinance;
  /** Absent when the ordinance's review and buffer rules haven't been read yet. */
  detail?: CaoDetail;
  /** True when `detail` is example content, not read from this agency's code. */
  example: boolean;
}

/** Every Washington county and city, counties first, each alphabetical. */
export const CAO_INDEX = indexRaw as CaoIndexEntry[];
const indexById = new Map(CAO_INDEX.map((e) => [e.id, e]));
const DETAIL = detailRaw as unknown as Record<string, CaoDetail>;
/** The tracker's own sample agencies — the ones that get example detail. */
const SAMPLE_AGENCIES = new Set(JURISDICTIONS.filter((j) => j.level === 'Local').map((j) => j.id));

export const caoEntry = (id: string) => indexById.get(id);

/** The chapter's short cite for example refs: "KCC Ch. 21A.24 Critical Areas" → "KCC Ch. 21A.24". */
const chapterCite = (chapter: string) => chapter.match(/^(.*?\d[\w.–-]*)/)?.[1] ?? chapter;

// Example stream buffers (Type F / Np / Ns, feet) — varied so agencies don't all read the same.
const EXAMPLE_STREAMS: Record<string, [number, number, number]> = {
  'king-county': [165, 65, 65],
  bellevue: [100, 75, 50],
  redmond: [150, 75, 50],
  woodinville: [115, 65, 50],
  'snohomish-county': [150, 75, 50],
  'lake-stevens': [115, 65, 50],
  'pierce-county': [150, 75, 50],
  'thurston-county': [200, 150, 150],
};

function exampleDetail(jurisdictionId: string, o: Ordinance): CaoDetail {
  const cite = chapterCite(o.chapter);
  const [f, np, ns] = EXAMPLE_STREAMS[jurisdictionId] ?? [150, 75, 50];
  const name = agencyName(jurisdictionId);
  return {
    verified: '',
    wetland: {
      rating: 'Washington State Wetland Rating System for Western Washington, 2014 Update (Ecology Publication No. 23-06-009)',
      ratingRef: cite,
      range: '40 to 225 feet based on category and habitat score',
      rangeRef: cite,
      url: o.url,
      tables: [
        {
          title: 'Wetland Buffers',
          ref: cite,
          cols: ['Wetland Category and Characteristics', '', 'Habitat 3–5', 'Habitat 6–7', 'Habitat 8–9'],
          groups: [
            { label: 'Category I', rows: [['Based on total score', '75', '110', '225'], ['Bogs and wetlands of high conservation value', { span2: '190' }, '225'], ['Forested', '75', '110', '225']] },
            { label: 'Category II', rows: [['Based on total score', '75', '110', '225']] },
            { label: 'Category III', rows: [['All', '60', '110', '225']] },
            { label: 'Category IV', rows: [['All', { span: '40' }]] },
          ],
          notes: ['Widths assume the impact minimization measures are applied and a habitat corridor is provided.'],
        },
      ],
    },
    stream: {
      typing: 'Types S, F, Np, Ns — WDNR water typing system, WAC 222-16-030',
      typingRef: cite,
      range: `${ns} to ${f} feet based on water type; Type S waters per the shoreline master program`,
      rangeRef: cite,
      url: o.url,
      tables: [
        {
          title: 'Stream Buffers',
          ref: cite,
          cols: ['Stream Type', 'Description', 'Standard Buffer Width (feet)'],
          rows: [
            ['Type S Water', 'Shorelines of the state', 'Per SMP'],
            ['Type F Water', 'Fish habitat waters', String(f)],
            ['Type Np Water', 'Perennial non-fish habitat streams', String(np)],
            ['Type Ns Water', 'Seasonal non-fish habitat streams', String(ns)],
          ],
          notes: ['Buffers are measured from the ordinary high water mark.'],
        },
      ],
    },
    review: {
      url: o.url,
      process: `${name} reviews critical areas with the underlying land use or development permit. Work that needs no other permit is reviewed on its own as an administrative decision.`,
      processRef: cite,
      triggers: 'Applies to development within or near a wetland, stream, geologically hazardous area or their buffers. A critical areas report by a qualified professional is required when one is present or likely.',
      triggersRef: cite,
      exemptions: 'Emergencies, maintenance of existing structures and rights-of-way, and restoration that improves critical area functions.',
      exemptionsRef: cite,
      relief: 'Buffer averaging or reduction with mitigation; beyond that, a reasonable use exception or variance.',
      reliefRef: cite,
    },
    sources: [[o.chapter, o.url]],
  };
}

/** The CAO record for a county or city, or undefined for one the index doesn't cover. */
export function caoOf(jurisdictionId: string): CaoRecord | undefined {
  const entry = indexById.get(jurisdictionId);
  if (!entry) return undefined;
  const ordinance: Ordinance = { chapter: entry.chapter, url: entry.url, date: entry.date, ord: entry.ord, note: entry.note };
  const real = DETAIL[jurisdictionId];
  if (real) return { entry, ordinance, detail: real, example: false };
  if (SAMPLE_AGENCIES.has(jurisdictionId)) return { entry, ordinance, detail: exampleDetail(jurisdictionId, ordinance), example: true };
  return { entry, ordinance, example: false };
}

/** The display name: the tracker's ("City of Bellevue") when it has one, else the index's. */
export const agencyName = (id: string) => (SAMPLE_AGENCIES.has(id) ? jurisdiction(id).name : indexById.get(id)?.name ?? id);

/** "2025-12-02" → "Dec 2, 2025"; "2025-06" → "Jun 2025"; "2025" → "2025"; "" → "". */
export function fmtAmended(date: string): string {
  if (!date) return '';
  const [y, m, d] = date.split('-').map(Number);
  const month = m ? new Date(Date.UTC(y, m - 1, 1)).toLocaleString('en-US', { month: 'short', timeZone: 'UTC' }) : '';
  return d ? `${month} ${d}, ${y}` : m ? `${month} ${y}` : String(y);
}

// ── governing law, by permit type ────────────────────────────────────────────

export interface Authority {
  cite: string;
  title: string;
  url?: string;
}

const RCW = (cite: string) => `https://app.leg.wa.gov/rcw/default.aspx?cite=${cite}`;
const WAC = (cite: string) => `https://app.leg.wa.gov/wac/default.aspx?cite=${cite}`;

/** The statutes and rules each permit type is issued under. Local codes add to these. */
export const GOVERNING_LAW: Record<PermitTypeId, Authority[]> = {
  'usace-404': [
    { cite: '33 U.S.C. 1344', title: 'Clean Water Act Section 404', url: 'https://www.law.cornell.edu/uscode/text/33/1344' },
    { cite: '33 CFR Parts 320–332', title: 'Corps regulatory program', url: 'https://www.ecfr.gov/current/title-33/chapter-II/part-320' },
  ],
  'ecy-401': [
    { cite: '33 U.S.C. 1341', title: 'Clean Water Act Section 401', url: 'https://www.law.cornell.edu/uscode/text/33/1341' },
    { cite: 'Ch. 173-225 WAC', title: 'Federal water quality certification procedures', url: WAC('173-225') },
    { cite: 'Ch. 173-201A WAC', title: 'Surface water quality standards', url: WAC('173-201A') },
  ],
  'wdfw-hpa': [
    { cite: 'Ch. 77.55 RCW', title: 'Construction projects in state waters', url: RCW('77.55') },
    { cite: 'Ch. 220-660 WAC', title: 'Hydraulic code rules', url: WAC('220-660') },
  ],
  'ecy-cswgp': [
    { cite: 'Ch. 90.48 RCW', title: 'Water pollution control', url: RCW('90.48') },
    { cite: 'Ch. 173-226 WAC', title: 'Waste discharge general permit program', url: WAC('173-226') },
  ],
  sepa: [
    { cite: 'Ch. 43.21C RCW', title: 'State Environmental Policy Act', url: RCW('43.21C') },
    { cite: 'Ch. 197-11 WAC', title: 'SEPA rules', url: WAC('197-11') },
  ],
  'critical-areas': [
    { cite: 'RCW 36.70A.060, .172', title: 'Growth Management Act: protect critical areas using best available science', url: RCW('36.70A.060') },
    { cite: 'Ch. 365-190 WAC', title: 'Minimum guidelines to classify critical areas', url: WAC('365-190') },
  ],
  ssdp: [
    { cite: 'Ch. 90.58 RCW', title: 'Shoreline Management Act', url: RCW('90.58') },
    { cite: 'Ch. 173-27 WAC', title: 'Shoreline management permits and enforcement', url: WAC('173-27') },
  ],
  grading: [{ cite: 'Local code', title: "Each city's or county's own clearing and grading code" }],
};

// ── reviewed rules: who suggested, edited and validated each section ─────────

export type RuleSectionId = 'review' | 'wetland' | 'stream';
export type RuleStatus = 'suggested' | 'edited' | 'validated';

export interface RuleSection<T> {
  /** What AI suggested, kept as suggested even after a person edits it. */
  ai: T;
  /** What the page shows: the AI suggestion, or a person's edit of it. */
  current: T;
  status: RuleStatus;
  suggestedAt: string;
  editedAt?: string;
  editedBy?: string;
  validatedAt?: string;
  validatedBy?: string;
}

export interface JurisdictionRules {
  review: RuleSection<ReviewRules>;
  wetland: RuleSection<WetlandRules>;
  stream: RuleSection<StreamRules>;
  /** Code sections read, [title, url]. */
  sources: [string, string][];
  /** Template content (the tracker's sample agencies, or a simulated AI run), not read from this code. */
  example: boolean;
}

/** Which rule sections a permit type has: only critical areas reads a local code today. */
export const RULE_SECTIONS: Partial<Record<PermitTypeId, RuleSectionId[]>> = {
  'critical-areas': ['review', 'wetland', 'stream'],
};

export const RULE_SECTION_TITLE: Record<RuleSectionId, string> = {
  review: 'How review works',
  wetland: 'Wetland buffers',
  stream: 'Stream buffers',
};

const section = <T>(content: T, suggestedAt: string, validated?: { at: string; by: string }): RuleSection<T> => ({
  ai: content,
  current: content,
  status: validated ? 'validated' : 'suggested',
  suggestedAt,
  ...(validated ? { validatedAt: validated.at, validatedBy: validated.by } : {}),
});

/**
 * The sample history. The five read from the code were suggested by AI on Oct 23, 2026
 * (Raymond since validated); the tracker's sample agencies were suggested on Jun 2, 2025
 * (Bellevue validated that month), so the ones amended since then flag for review.
 */
const SEED_HISTORY: Record<string, { at: string; validated?: { at: string; by: string } }> = {
  raymond: { at: '2026-10-23', validated: { at: '2026-10-27', by: 'Grace Huang' } },
  bellevue: { at: '2025-06-02', validated: { at: '2025-06-20', by: 'Daniel Reyes' } },
};

/** The rules a page starts from before anyone edits in the browser; undefined = not read yet. */
export function seedRules(jurisdictionId: string): JurisdictionRules | undefined {
  const cao = caoOf(jurisdictionId);
  if (!cao?.detail) return undefined;
  const h = SEED_HISTORY[jurisdictionId] ?? { at: cao.example ? '2025-06-02' : cao.detail.verified };
  return {
    review: section(cao.detail.review, h.at, h.validated),
    wetland: section(cao.detail.wetland, h.at, h.validated),
    stream: section(cao.detail.stream, h.at, h.validated),
    sources: cao.detail.sources.length ? cao.detail.sources : [[cao.ordinance.chapter, cao.ordinance.url]],
    example: cao.example,
  };
}

/** What a simulated AI run returns: the known detail, or the template for this chapter. */
export function simulatedSuggestion(jurisdictionId: string, today: string): JurisdictionRules | undefined {
  const cao = caoOf(jurisdictionId);
  if (!cao?.ordinance.url) return undefined;
  const detail = cao.detail ?? exampleDetail(jurisdictionId, cao.ordinance);
  return {
    review: section(detail.review, today),
    wetland: section(detail.wetland, today),
    stream: section(detail.stream, today),
    sources: detail.sources.length ? detail.sources : [[cao.ordinance.chapter, cao.ordinance.url]],
    example: !cao.detail || cao.example,
  };
}

/** A partial amended date as a comparable day: '2026' → '2026-01-01', '2025-06' → '2025-06-01'. */
export const amendedDay = (date: string) => (date ? `${date}-01-01`.slice(0, 10).replace(/^(\d{4})-(\d{2})-01-01$/, '$1-$2-01') : '');

/** The day the rules were last looked at by AI or a person: the oldest section's latest event. */
export function reviewedDay(rules: JurisdictionRules): string {
  const days = (['review', 'wetland', 'stream'] as const).map((k) => {
    const s = rules[k];
    return [s.suggestedAt, s.editedAt ?? '', s.validatedAt ?? ''].sort().at(-1)!;
  });
  return days.sort()[0];
}

/** True when the ordinance was amended after its rules were last reviewed. */
export const changedSinceReview = (ordinanceDate: string, rules: JurisdictionRules | undefined) =>
  !!rules && !!ordinanceDate && amendedDay(ordinanceDate) > reviewedDay(rules);
