// Monitoring Portal — the single dataset (geotech component).
//
// THE THESIS (mirrors Fish Studies): one dataset, many projections. The dashboard
// cards, the observation-first Commitment-Compliance view, and the Surveys grid are
// all views over the records below.
//
// REAL DATA: observations are the geotech monitoring export (grid-data.csv) — every
// row is a survey at a geotech DH bore site (DCTR2-DH-###, DCRAI-DH-###, …). The
// commitment ladder + its full Condition-of-Approval text are the real DCP register
// (commitments.csv → src/data/commitment-text.ts). The flat observation→commitment
// model is what shipped (BCN-911/912/913); per-observation compliance status lives on
// the link (here, on each observation's commitment list).

import { COMMITMENT_TEXT, COMPONENT_COMMITMENT_CODES } from './commitment-text';

export const PROJECT_NAME = 'Delta Conveyance Project';
export const TODAY = '2026-06-17';

// ─────────────────────────────────────────────────────────────────────────────
// Status vocabularies ({label, hex} → drives makeStatusRenderer + BcnStatusChip).
// ─────────────────────────────────────────────────────────────────────────────
// Two sources feed this section, with DIFFERENT vocabularies. A species observation
// gets a BIOLOGICAL/MANAGEMENT state (it is not inherently a compliance judgment); only
// a compliance CONCERN carries a compliance state — so only a concern reads "Open"
// (non-compliant). This is the taxonomy fix: a logged bird ≠ a raised violation.
export type ObservationState = 'active' | 'cleared' | 'tracking';
export const OBSERVATION_STATE_META: Record<ObservationState, { label: string; hex: string }> = {
  'active': { label: 'Active', hex: '#f2770e' },     // species/nest present; measures in effect
  'cleared': { label: 'Cleared', hex: '#2e7571' },   // fledged/inactive; buffer can lift
  'tracking': { label: 'Tracking', hex: '#7c7c7c' }, // sighting, no nest; logged for awareness
};

export type ConcernState = 'open' | 'resolved';
export const CONCERN_STATE_META: Record<ConcernState, { label: string; hex: string }> = {
  'open': { label: 'Open', hex: '#ef4444' },         // non-compliant; needs resolution
  'resolved': { label: 'Resolved', hex: '#2e7571' },
};

export type Phase = 'pre-construction' | 'construction' | 'post-construction';
export const PHASE_META: Record<Phase, { label: string; short: string; note?: string }> = {
  'pre-construction': { label: 'Pre-construction', short: 'Pre-con', note: 'Survey & planning measures — largely obsolete once a nest is found (but the 14-day re-survey rule can revive them).' },
  'construction': { label: 'Construction', short: 'Construction', note: 'Current phase — the field-actionable measures that prevent take.' },
  'post-construction': { label: 'Post-construction', short: 'Post-con', note: 'Restoration, nest-tree protection (5-year horizon), reporting.' },
};

export type SurveyStatus = 'draft' | 'qc' | 'final';
export const SURVEY_STATUS_META: Record<SurveyStatus, { label: string; hex: string }> = {
  'draft': { label: 'Draft', hex: '#989898' },
  'qc': { label: 'In QC', hex: '#f2770e' },
  'final': { label: 'Final', hex: '#2e7571' },
};

// ─────────────────────────────────────────────────────────────────────────────
// Commitment registry — static attributes per code (NO status; status is
// per-observation). The structured buffer / restriction / method are assumed to be
// fields carried on the commitment (extracted from the requirement). Full CoA text
// for the side drawer lives in src/data/commitment-text.ts, keyed by the same code.
// ─────────────────────────────────────────────────────────────────────────────
export interface CommitmentDef {
  code: string;
  title: string;
}

// Commitments resolve against the GEOTECH COMPONENT WHITELIST (commitment-text.ts) —
// the only measures that apply to this component (per the client's 63-item list). The
// full Condition-of-Approval text lives in the side drawer; there is NO per-commitment
// compliance status (compliance is judged at the OBSERVATION level, Find.status).
const def = (code: string): CommitmentDef => ({ code, title: COMMITMENT_TEXT[code]?.title ?? code });
const defs = (...codes: string[]): CommitmentDef[] => codes.map(def);

/** The component commitment whitelist (register order) — for the library view. */
export const COMPONENT_COMMITMENTS: CommitmentDef[] = COMPONENT_COMMITMENT_CODES.map(def);

// ─────────────────────────────────────────────────────────────────────────────
// Observations — the geotech monitoring export (grid-data.csv). The PARENT of the
// observation-first compliance view. Nesting-bird finds carry a fledging estimate;
// resource/tracking sightings don't (hasFledge=false → no countdown).
// ─────────────────────────────────────────────────────────────────────────────
export interface Find {
  id: string;
  shortId: string;
  species: string;
  speciesCode: string;
  /** Source: a logged species observation, or a raised compliance concern. */
  kind: 'observation' | 'concern';
  type: 'Nesting Bird' | 'Biological Resource' | 'Compliance Concern';
  /** Observation state (active/cleared/tracking) OR concern state (open/resolved). */
  state: ObservationState | ConcernState;
  /** Short label for a concern (an observation uses `species` as its name). */
  title?: string;
  observedDate: string;
  /** Work area (DH bore site); '' if none recorded. */
  workArea: string;
  /** The real field-log description / latest entry. */
  description: string;
  // ── fledging (nests only) ──
  hatchDate?: string;
  fledgeDate?: string;
  daysToFledge?: number;
  fledgeNote?: string;
  /** The relevant commitments (measures that apply / the commitment a concern violates). */
  commitments: CommitmentDef[];
}

/** State label + color for a find, picking the right vocabulary by source. */
export const findStateMeta = (f: Find) =>
  f.kind === 'concern' ? CONCERN_STATE_META[f.state as ConcernState] : OBSERVATION_STATE_META[f.state as ObservationState];
/** Needs action = an open compliance concern, or an active species observation. */
export const findNeedsAction = (f: Find): boolean =>
  f.kind === 'concern' ? f.state === 'open' : f.state === 'active';

export const FINDS: Find[] = [
  // ── Compliance concern (ILLUSTRATIVE — the real geotech export has none yet) ──
  {
    id: 'CC-1042-06162026', shortId: 'CC-1042', species: 'Swainson’s Hawk', speciesCode: 'SWHA',
    kind: 'concern', type: 'Compliance Concern', state: 'open',
    title: 'Staging within the SWHA buffer before clearance',
    observedDate: '2026-06-16', workArea: 'DCTR2-DH-010',
    description: 'ILLUSTRATIVE SAMPLE — the geotech export has no real compliance concerns yet. Geotechnical staging equipment was observed inside the Swainson’s hawk no-disturbance buffer at DCTR2-DH-010 before clearance was issued. The designated biologist halted staging and notified the construction lead.',
    commitments: defs('BIO-39'),
  },
  {
    id: 'SWHA-2289-05182026', shortId: 'SWHA-2289', species: 'Swainson’s Hawk', speciesCode: 'SWHA', type: 'Nesting Bird',
    kind: 'observation', state: 'active',
    observedDate: '2026-05-18', workArea: 'DCTR2-DH-010',
    description: 'Active SWHA nest in a tree on the north side of Twin Cities Road. One adult sitting (presumably incubating); a second adult foraging and delivering food. Not disturbed by the preconstruction survey along the public roadway or at the bore site.',
    hatchDate: '2026-06-08', fledgeDate: '2026-07-20', daysToFledge: 33,
    fledgeNote: 'Swainson’s hawk: ~38–42 day nestling period. ±4 day estimate — guidance for rescheduling, not a guarantee.',
    commitments: defs('BIO-39', 'BIO-36a', 'EC-14'),
  },
  {
    id: 'CORA-2695-06042026', shortId: 'CORA-2695', species: 'Common Raven', speciesCode: 'CORA', type: 'Nesting Bird',
    kind: 'observation', state: 'active',
    observedDate: '2026-06-04', workArea: 'DCRAI-DH-009',
    description: 'Both ravens perched outside the nest during the preconstruction survey.',
    hatchDate: '2026-06-18', fledgeDate: '2026-07-12', daysToFledge: 25,
    fledgeNote: 'Common raven: ~28–35 day nestling period. ±4 day estimate.',
    commitments: defs('BIO-36a', 'EC-14'),
  },
  {
    id: 'CORA-5830-06052026', shortId: 'CORA-5830', species: 'Common Raven', speciesCode: 'CORA', type: 'Nesting Bird',
    kind: 'observation', state: 'cleared',
    observedDate: '2026-05-29', workArea: '',
    description: 'Multiple ravens observed around the nest; one in the nest. 6/8: ravens perched high on the tower outside the nest and foraging — appear to have fledged.',
    hatchDate: '2026-05-30', fledgeDate: '2026-06-14', daysToFledge: -3,
    fledgeNote: 'Common raven: ~28–35 day nestling period. Young appear fledged — buffer clearing.',
    commitments: defs('BIO-36a', 'EC-14'),
  },
  {
    id: 'KILL-7655-06032026', shortId: 'KILL-7655', species: 'Killdeer', speciesCode: 'KILL', type: 'Nesting Bird',
    kind: 'observation', state: 'active',
    observedDate: '2026-06-03', workArea: 'DCTR2-DH-100',
    description: 'One bird on the nest; tried to lead us away as we neared the site. Four eggs present.',
    hatchDate: '2026-06-27', fledgeDate: '2026-07-01', daysToFledge: 14,
    fledgeNote: 'Killdeer: ~24–28 day incubation; precocial — young leave the nest within ~1 day of hatch.',
    commitments: defs('BIO-36a', 'EC-14'),
  },
  {
    id: 'MALL-1520-06022026', shortId: 'MALL-1520', species: 'Mallard', speciesCode: 'MALL', type: 'Nesting Bird',
    kind: 'observation', state: 'active',
    observedDate: '2026-06-02', workArea: 'DCRDS-DH-294',
    description: 'A pair observed. Female stayed with the nest and had eggs.',
    hatchDate: '2026-06-28', fledgeDate: '2026-06-30', daysToFledge: 13,
    fledgeNote: 'Mallard: ~26–28 day incubation; precocial — ducklings leave the nest within ~1 day of hatch.',
    commitments: defs('BIO-36a', 'EC-14'),
  },
  {
    id: 'Unknown-5895-06032026', shortId: 'UNK-5895', species: 'Unknown raptor', speciesCode: 'UNK', type: 'Nesting Bird',
    kind: 'observation', state: 'active',
    observedDate: '2026-06-03', workArea: 'DCTR2-DH-100',
    description: 'Large stick nest with a raptor in it. Too far to identify to species and the site could not be accessed, so no closer ID was made.',
    fledgeNote: 'Species unconfirmed — no reliable fledge estimate. Precautionary raptor buffer until identified.',
    commitments: defs('BIO-36a', 'BIO-37', 'EC-14'),
  },
  {
    id: 'Species-Swainsons-Hawk-06042026', shortId: 'SWHA-0604', species: 'Swainson’s Hawk', speciesCode: 'SWHA', kind: 'observation', type: 'Biological Resource', state: 'tracking',
    observedDate: '2026-06-04', workArea: 'DCRAI-DH-006',
    description: 'Swainson’s hawk observed foraging overhead. No nest at the site.',
    commitments: defs('BIO-39', 'EC-14'),
  },
  {
    id: 'Species-Swainsons-Hawk-06092026', shortId: 'SWHA-0609', species: 'Swainson’s Hawk', speciesCode: 'SWHA', kind: 'observation', type: 'Biological Resource', state: 'tracking',
    observedDate: '2026-06-09', workArea: 'DCRAI-DH-012',
    description: 'Swainson’s hawk observed soaring overhead to the west. No nest at the site.',
    commitments: defs('BIO-39', 'EC-14'),
  },
  {
    id: 'Habitat-Other-06152026', shortId: 'HAB-0615', species: 'Rodent burrows', speciesCode: 'HAB', kind: 'observation', type: 'Biological Resource', state: 'tracking',
    observedDate: '2026-06-15', workArea: 'DCBPP-DH-066',
    description: 'Two small rodent burrows flagged within the project footprint; several more flagged along the access road. Crew asked to avoid the road north of the berm (many burrows, not all flagged). 6/16: crew has been avoiding driving over burrow entrances.',
    commitments: defs('BIO-40', 'BIO-47', 'EC-14'),
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Dashboard stats — the top cards (reconciled to the real observation breakdown).
// ─────────────────────────────────────────────────────────────────────────────
export interface BreakdownItem { label: string; value: number; hex: string; }
export interface DashboardStats {
  activeObservations: number;
  total30d: number;
  outstandingIssues: number;
  observationBreakdown: BreakdownItem[];
  nestingBirds: { total: number; total30d: number; species: BreakdownItem[] };
  complianceConcerns: { active: number; total30d: number };
  biologicalResources: { total: number; total30d: number; items: BreakdownItem[] };
}

export const DASHBOARD: DashboardStats = {
  activeObservations: 9,
  total30d: 13,
  outstandingIssues: 4,
  observationBreakdown: [
    { label: 'Nesting Birds', value: 6, hex: '#2e7571' },
    { label: 'Biological Resources', value: 3, hex: '#f2770e' },
  ],
  nestingBirds: {
    total: 6, total30d: 9,
    species: [
      { label: 'CORA', value: 2, hex: '#2e7571' },
      { label: 'SWHA', value: 1, hex: '#2e7571' },
      { label: 'KILL', value: 1, hex: '#2e7571' },
      { label: 'MALL', value: 1, hex: '#2e7571' },
      { label: 'UNK', value: 1, hex: '#bdbdbd' },
    ],
  },
  complianceConcerns: { active: 1, total30d: 1 },
  biologicalResources: {
    total: 3, total30d: 3,
    items: [
      { label: 'SWHA foraging', value: 2, hex: '#f2770e' },
      { label: 'Habitat / burrows', value: 1, hex: '#f2770e' },
    ],
  },
};

/** The "Outstanding Issues" mini-list — the non-compliant finds. */
export const OUTSTANDING_ISSUES: { id: string; ageDays: number }[] = [
  { id: 'SWHA-2289', ageDays: 30 },
  { id: 'KILL-7655', ageDays: 14 },
  { id: 'UNK-5895', ageDays: 14 },
  { id: 'CORA-2695', ageDays: 13 },
];

// ─────────────────────────────────────────────────────────────────────────────
// Surveys — Fulcrum / Survey123 / CASP documents brought into Beacon as Evidence of
// Compliance, at the same geotech bore sites. `compliant: false` raises a warning.
// ─────────────────────────────────────────────────────────────────────────────
export interface SurveyDoc {
  id: string;
  date: string;
  surveyor: string;
  surveyType: string;
  source: 'Fulcrum' | 'Survey123' | 'CASP';
  species: string;
  workArea: string;
  status: SurveyStatus;
  compliant: boolean | null;
}

export const SURVEYS: SurveyDoc[] = [
  { id: 'SWHA-2289-05182026', date: '2026-05-18', surveyor: 'Christy Pierce', surveyType: 'Preconstruction Clearance Survey', source: 'Fulcrum', species: 'Swainson’s Hawk', workArea: 'DCTR2-DH-010', status: 'final', compliant: false },
  { id: 'SRV-CORA-2695-06042026', date: '2026-06-04', surveyor: 'Bryce Kozak', surveyType: 'Nesting Bird Survey', source: 'Fulcrum', species: 'Common Raven', workArea: 'DCRAI-DH-009', status: 'final', compliant: false },
  { id: 'SRV-CORA-5830-05292026', date: '2026-05-29', surveyor: 'Aaron Lopez', surveyType: 'Nesting Bird Survey', source: 'Fulcrum', species: 'Common Raven', workArea: 'DCRAI-DH-006', status: 'final', compliant: true },
  { id: 'SRV-KILL-060326', date: '2026-06-03', surveyor: 'Michael Morales', surveyType: 'Nesting Bird Survey', source: 'Fulcrum', species: 'Killdeer', workArea: 'DCTR2-DH-100', status: 'qc', compliant: false },
  { id: 'SRV-UNK-060326', date: '2026-06-03', surveyor: 'Michael Morales', surveyType: 'Nesting Bird Survey', source: 'Fulcrum', species: 'Unknown raptor', workArea: 'DCTR2-DH-100', status: 'qc', compliant: null },
  { id: 'SRV-MALL-060226', date: '2026-06-02', surveyor: 'Mackenzie Firestone', surveyType: 'Nesting Bird Survey', source: 'Fulcrum', species: 'Mallard', workArea: 'DCRDS-DH-294', status: 'final', compliant: true },
  { id: 'SRV-SWHA-060426', date: '2026-06-04', surveyor: 'Carole Garrett', surveyType: 'SWHA Foraging Survey', source: 'Fulcrum', species: 'Swainson’s Hawk', workArea: 'DCRAI-DH-006', status: 'final', compliant: true },
  { id: 'SRV-CASP-061026', date: '2026-06-10', surveyor: 'Mackenzie Firestone', surveyType: 'CASP Protocol Survey', source: 'CASP', species: 'Special-status plants', workArea: 'DCTR2-DH-010', status: 'qc', compliant: null },
  { id: 'SRV-2WK-060926', date: '2026-06-09', surveyor: 'Alicia Manzo', surveyType: 'Two-week Clearance Survey', source: 'Survey123', species: 'General biological', workArea: 'DCRAI-DH-012', status: 'final', compliant: true },
  { id: 'SRV-HAB-061526', date: '2026-06-15', surveyor: 'Morgan Henry', surveyType: 'Habitat Assessment', source: 'Fulcrum', species: 'Rodent burrows', workArea: 'DCBPP-DH-066', status: 'qc', compliant: null },
  { id: 'SRV-72H-061226', date: '2026-06-12', surveyor: 'CJ January', surveyType: 'SWHA 72-hour Survey', source: 'Fulcrum', species: 'Swainson’s Hawk', workArea: 'DCTR2-DH-010', status: 'draft', compliant: null },
  { id: 'SRV-CASP-060426', date: '2026-06-04', surveyor: 'Morgan Henry', surveyType: 'CASP Protocol Survey', source: 'CASP', species: 'Special-status plants', workArea: 'DCTR1-DH-008', status: 'draft', compliant: null },
];

export const SURVEY_COUNT = SURVEYS.length;
