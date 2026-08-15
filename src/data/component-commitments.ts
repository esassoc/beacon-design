// COMPONENT SETUP — applicable commitments. The fixture behind the redesign.
//
// WHAT THIS SCREEN IS FOR: deciding which of a project's commitments actually
// apply to THIS component. It is not a form — the decision has teeth. Applying a
// commitment materializes its actions against the component (prod runs
// ReconcileImplementationsForApplicabilityChange on save), which is what fills
// the tracker. Dismissing deletes the deletable ones back out. So the screen has
// to say what a decision will DO before it is made; today it says nothing.
//
// WHY THE COUNT IS BROKEN TODAY, in one paragraph, because the redesign turns on
// it: prod has no "pending" state. `ComponentCommitment.IsApplicable` is a
// NOT NULL bit, and pending is manufactured by a view that LEFT JOINs every
// component in the project against every commitment in the project and calls the
// misses pending. Three consequences. The number is a CROSS PRODUCT, so it
// counts the project, not the component. It RE-INFLATES every time any source
// document gains a commitment, so it can never reach zero — a treadmill wearing
// a queue's clothing. And the badge counts the unfiltered set while the list
// below it is filtered to one source document, so the count and the list are
// never talking about the same thing. "52 pending" over a list of three is not
// a rendering bug; it is the data model surfacing.
//
// The fixture therefore models the decision honestly: a commitment is undecided
// until a decision exists, undecided is scoped to THIS component, and the date a
// commitment entered the project is stored so "new since you last reviewed" can
// be derived rather than lumped into one unmoving number.
//
// Content is invented-but-credible Delta Conveyance material. Nothing is copied
// from client documents.

import type { ActionType } from './project-actions';

export interface SetupSource {
  id: string;
  name: string;
  /** Short label for facet chips and the grouped list. */
  short: string;
}

export const SETUP_SOURCES: SetupSource[] = [
  { id: 'feir', name: 'Delta Conveyance Project Final EIR', short: 'Final EIR' },
  { id: 'itp', name: 'CDFW Incidental Take Permit', short: 'ITP' },
  { id: 'usace', name: 'USACE Section 404 Permit', short: '404 Permit' },
  { id: 'swrcb', name: 'SWRCB Water Quality Certification', short: '401 Cert' },
];

export const SOURCE_BY_ID: Record<string, SetupSource> = Object.fromEntries(
  SETUP_SOURCES.map((s) => [s.id, s]),
);

/** Species codes reach a commitment through its requirements, never directly. */
export const SPECIES_LABEL: Record<string, string> = {
  SWHA: "Swainson's hawk",
  GGS: 'Giant garter snake',
  DS: 'Delta smelt',
  VELB: 'Valley elderberry longhorn beetle',
  CTS: 'California tiger salamander',
  WPT: 'Western pond turtle',
  SACR: 'Sacramento splittail',
};

export const REQUIREMENT_TYPES = [
  'Survey',
  'Monitoring',
  'Training',
  'Reporting',
  'Avoidance & BMPs',
  'Plan Submittal',
  'Inspection',
] as const;
export type RequirementType = (typeof REQUIREMENT_TYPES)[number];

export type Decision = 'applied' | 'dismissed';

export interface SetupAction {
  code: string;
  name: string;
  type: ActionType;
}

export interface ApplicableCommitment {
  id: string;
  /** ClientCommitmentID — the mono chip. */
  code: string;
  title: string;
  /** The commitment's own language, quoted. */
  text: string;
  sourceId: string;
  requirementType: RequirementType;
  /** Requirement count rolled up from the commitment. */
  requirements: number;
  species: string[];
  /** What applying this commitment will create on the component. */
  actions: SetupAction[];
  /** null = no decision row exists for this component yet. */
  decision: Decision | null;
  rationale?: string;
  /** ISO date the commitment entered the project via its source document. */
  addedOn: string;
}

/** The last time anyone made a decision on this component — anchors "new since". */
export const LAST_REVIEWED = '2026-02-11';

type Row = [
  code: string,
  title: string,
  sourceId: string,
  type: RequirementType,
  reqs: number,
  species: string[],
  actions: SetupAction[],
  decision: Decision | null,
  addedOn: string,
  text: string,
  extra?: { rationale?: string },
];

const a = (code: string, name: string, type: ActionType): SetupAction => ({ code, name, type });

const ROWS: Row[] = [
  // ── Decided: applied ──────────────────────────────────────────────────────
  ['BIO-03', 'Nesting bird preconstruction survey', 'feir', 'Survey', 4, ['SWHA'],
    [a('BIO-03', 'Nesting-bird preconstruction survey', 'monitoring')], 'applied', '2025-11-04',
    'A qualified biologist shall conduct preconstruction surveys for nesting birds within 500 feet of ground-disturbing activity no more than 7 days prior to the start of work during the nesting season (February 1 through August 31).',
    { rationale: 'Ground disturbance occurs within the nesting season window at all shaft work areas.' }],
  ['BIO-21', 'Giant garter snake avoidance measures', 'itp', 'Avoidance & BMPs', 6, ['GGS'],
    [a('BIO-21', 'Giant garter snake preconstruction survey', 'monitoring')], 'applied', '2025-11-04',
    'Ground disturbance within 200 feet of aquatic habitat shall be restricted to the active season (May 1 through October 1). A qualified biologist shall survey the work area within 24 hours prior to ground disturbance.',
    { rationale: 'Shaft footprint is within 200 feet of Bouldin Island agricultural ditches.' }],
  ['CUL-02', 'Worker cultural resources awareness training', 'feir', 'Training', 2, [],
    [a('CUL-02', 'Cultural resources worker training', 'tracking')], 'applied', '2025-11-04',
    'All construction personnel shall receive cultural resources sensitivity training prior to beginning work, covering identification of archaeological materials and required stop-work procedures.',
    { rationale: 'Standard for all ground-disturbing components.' }],
  ['WQ-08', 'Stormwater pollution prevention plan', 'swrcb', 'Plan Submittal', 3, [],
    [a('WQ-08', 'SWPPP preparation and submittal', 'tracking')], 'applied', '2025-11-18',
    'A Stormwater Pollution Prevention Plan shall be prepared by a Qualified SWPPP Developer and implemented prior to any ground disturbance exceeding one acre.',
    { rationale: 'Disturbance footprint exceeds one acre across the work areas.' }],
  ['NOI-03', 'Construction noise monitoring plan', 'feir', 'Plan Submittal', 2, [],
    [a('NOI-03', 'Noise monitoring plan submittal', 'tracking')], 'applied', '2025-12-02',
    'A noise monitoring plan shall be submitted for review at least 30 days prior to the start of shaft construction where work occurs within 1,000 feet of a sensitive receptor.',
    { rationale: 'Residences on Bouldin Island Road are within 1,000 feet.' }],
  ['AIR-04', 'Fugitive dust control', 'feir', 'Avoidance & BMPs', 3, [],
    [a('AIR-04', 'Fugitive dust control implementation', 'tracking')], 'applied', '2025-12-02',
    'Exposed surfaces shall be watered at a frequency adequate to maintain minimum soil moisture of 12 percent. Vehicle speed on unpaved roads shall not exceed 15 miles per hour.',
    { rationale: 'Unpaved access roads serve every work area.' }],
  ['GEO-01', 'Geotechnical exploration site restoration', 'feir', 'Inspection', 2, [],
    [a('GEO-01', 'Borehole abandonment verification', 'tracking')], 'applied', '2025-12-16',
    'Each exploration location shall be abandoned in accordance with county well-abandonment standards and the surface restored to preexisting contours within 30 days of completion.',
    { rationale: 'Directly governs this component’s exploration program.' }],

  // ── Decided: dismissed ────────────────────────────────────────────────────
  ['BIO-44', 'Tidal marsh restoration monitoring', 'itp', 'Monitoring', 5, ['SACR'],
    [], 'dismissed', '2025-11-04',
    'Restored tidal marsh acreage shall be monitored annually for 10 years against performance criteria for vegetation cover, channel density, and fish access.',
    { rationale: 'No tidal marsh restoration occurs within this component.' }],
  ['BIO-52', 'Fish screen approach velocity verification', 'itp', 'Monitoring', 4, ['DS'],
    [], 'dismissed', '2025-11-04',
    'Approach velocity at the screen face shall not exceed 0.2 feet per second, verified by field measurement prior to and following each maintenance event.',
    { rationale: 'No intake or screening structure in this component.' }],
  ['WQ-19', 'In-water work turbidity monitoring', 'swrcb', 'Monitoring', 3, ['DS'],
    [], 'dismissed', '2025-11-18',
    'Turbidity shall be monitored upstream and downstream of in-water work and shall not exceed background by more than 5 NTU.',
    { rationale: 'No in-water work in this component.' }],
  ['TRA-07', 'Barge landing traffic management', 'feir', 'Plan Submittal', 2, [],
    [], 'dismissed', '2025-12-02',
    'A traffic management plan shall be prepared for each barge landing addressing vehicle queuing, flagging, and levee road load limits.',
    { rationale: 'No barge landing associated with this shaft.' }],

  // ── Undecided, present since the last review ──────────────────────────────
  ['BIO-09', 'Swainson’s hawk nest buffer', 'itp', 'Avoidance & BMPs', 4, ['SWHA'],
    [a('BIO-09', 'Swainson’s hawk nest buffer verification', 'monitoring')], null, '2025-11-04',
    'A 0.25-mile no-disturbance buffer shall be established around active Swainson’s hawk nests and maintained until a qualified biologist determines the young have fledged or the nest has failed.'],
  ['BIO-18', 'Worker environmental awareness program', 'feir', 'Training', 2, ['SWHA', 'GGS'],
    [a('BIO-18', 'Worker environmental awareness refresher', 'tracking')], null, '2025-11-04',
    'All personnel shall complete an environmental awareness program prior to site access, with annual refresher training thereafter.'],
  ['BIO-27', 'Western pond turtle relocation protocol', 'itp', 'Survey', 3, ['WPT'],
    [a('BIO-27', 'Pond turtle clearance survey', 'monitoring')], null, '2025-11-04',
    'Where work occurs within 100 feet of aquatic habitat, a qualified biologist shall survey for western pond turtle and relocate individuals outside the work area prior to disturbance.',
    {}],
  ['BIO-30', 'Vernal pool branchiopod wet-season survey', 'itp', 'Survey', 4, ['CTS'],
    [a('BIO-30', 'Vernal pool branchiopod wet-season survey', 'monitoring')], null, '2025-11-04',
    'Suitable vernal pool habitat within the work area shall receive protocol-level wet-season surveys across two consecutive years prior to disturbance.',
    {}],
  ['BIO-36', 'Valley elderberry shrub avoidance', 'itp', 'Avoidance & BMPs', 3, ['VELB'],
    [a('BIO-36', 'Elderberry shrub buffer installation', 'tracking')], null, '2025-11-04',
    'Elderberry shrubs with stems one inch or greater in diameter shall be avoided by a minimum 20-foot buffer, fenced and signed prior to construction.',
    {}],
  ['CUL-05', 'Inadvertent discovery stop-work protocol', 'feir', 'Avoidance & BMPs', 2, [],
    [a('CUL-05', 'Discovery protocol acknowledgement', 'tracking')], null, '2025-11-04',
    'If cultural materials are encountered, work shall halt within 100 feet of the find and a qualified archaeologist shall evaluate the discovery before work resumes.'],
  ['CUL-11', 'Archaeological construction monitoring', 'feir', 'Monitoring', 3, [],
    [a('CUL-11', 'Archaeological monitor coverage', 'monitoring')], null, '2025-11-18',
    'Ground disturbance in areas of elevated archaeological sensitivity shall be monitored by a qualified archaeologist and a Native American monitor.',
    {}],
  ['WQ-05', 'Dewatering discharge management', 'swrcb', 'Avoidance & BMPs', 3, [],
    [a('WQ-05', 'Dewatering discharge sampling', 'monitoring')], null, '2025-11-18',
    'Dewatering discharge shall be routed through sediment controls and sampled for turbidity and pH prior to release to any surface water.'],
  ['WQ-12', 'Quarterly SWPPP inspection', 'swrcb', 'Inspection', 2, [],
    [a('WQ-12', 'SWPPP quarterly inspection', 'tracking')], null, '2025-11-18',
    'A Qualified SWPPP Practitioner shall inspect all stormwater controls quarterly and within 48 hours of any qualifying rain event.'],
  ['VEG-06', 'Revegetation of temporarily disturbed areas', 'feir', 'Plan Submittal', 3, [],
    [a('VEG-06', 'Revegetation plan agency review', 'tracking')], null, '2025-12-02',
    'Temporarily disturbed areas shall be revegetated with a native seed mix approved by the resource agencies within one growing season of disturbance.',
    {}],
  ['VEG-14', 'Invasive plant material controls', 'feir', 'Avoidance & BMPs', 2, [],
    [a('VEG-14', 'Equipment washing log', 'tracking')], null, '2025-12-02',
    'Equipment arriving from outside the project area shall be washed prior to entry, and imported fill shall be certified free of noxious weed propagules.',
    {}],
  ['TRA-11', 'Haul route compliance', 'feir', 'Inspection', 2, [],
    [a('TRA-11', 'Haul route compliance verification', 'tracking')], null, '2025-12-02',
    'Construction traffic shall use only designated haul routes. Levee road segments shall be inspected monthly for load-related damage.',
    {}],
  ['NOI-08', 'Nighttime work noise limits', 'feir', 'Monitoring', 2, [],
    [a('NOI-08', 'Nighttime noise level verification', 'monitoring')], null, '2025-12-16',
    'Nighttime construction noise shall not exceed 50 dBA Leq at the nearest sensitive receptor property line between 10 PM and 7 AM.',
    {}],
  ['GEO-04', 'Levee stability monitoring during exploration', 'usace', 'Monitoring', 3, [],
    [a('GEO-04', 'Levee deformation survey', 'monitoring')], null, '2025-12-16',
    'Exploration within 100 feet of a federal project levee shall be accompanied by deformation monitoring before, during, and after drilling.'],
  ['GEO-09', 'Drilling fluid containment', 'usace', 'Avoidance & BMPs', 2, [],
    [a('GEO-09', 'Drilling fluid containment inspection', 'tracking')], null, '2025-12-16',
    'Drilling fluids shall be fully contained and removed from the site. No discharge to surface water or to the levee prism is permitted.'],
  ['USACE-02', 'Section 404 preconstruction notification', 'usace', 'Reporting', 2, [],
    [a('USACE-02', 'Preconstruction notification submittal', 'reporting')], null, '2025-12-16',
    'The permittee shall submit preconstruction notification to the District Engineer at least 45 days prior to commencing work in waters of the United States.',
    {}],
  ['USACE-07', 'Compensatory mitigation accounting', 'usace', 'Reporting', 4, [],
    [a('USACE-07', 'Mitigation ledger update', 'reporting')], null, '2026-01-08',
    'Permanent and temporary impacts to jurisdictional waters shall be accounted against the approved mitigation ledger and reported with each annual submittal.',
    {}],
  ['BIO-39', 'Biological monitor daily reporting', 'itp', 'Reporting', 3, ['SWHA', 'GGS'],
    [a('BIO-39', 'Daily biological monitoring report', 'reporting')], null, '2026-01-08',
    'The biological monitor shall record daily observations, including species detected, avoidance measures implemented, and any incidental take, and submit within 5 working days.'],

  // ── Undecided AND new since the last review (added after LAST_REVIEWED) ───
  // These are the treadmill made legible: commitments the project gained after
  // anyone last looked at this component. Today they vanish into one number.
  ['BIO-41', 'Delta smelt entrainment avoidance window', 'itp', 'Avoidance & BMPs', 3, ['DS'],
    [], null, '2026-02-24',
    'In-water construction shall be prohibited between December 1 and June 30 unless real-time monitoring demonstrates delta smelt are absent from the action area.',
    {}],
  ['BIO-47', 'Nesting raptor buffer for non-listed species', 'feir', 'Avoidance & BMPs', 2, [],
    [a('BIO-47', 'Raptor buffer establishment', 'monitoring')], null, '2026-02-24',
    'Active nests of non-listed raptors shall receive a 250-foot no-disturbance buffer until the young have fledged.'],
  ['WQ-23', 'Spill prevention and response plan', 'swrcb', 'Plan Submittal', 3, [],
    [a('WQ-23', 'Spill response plan submittal', 'tracking')], null, '2026-03-03',
    'A spill prevention and response plan shall be maintained on site, with response materials staged within 100 feet of any fueling or fluid transfer location.'],
  ['AIR-11', 'Off-road equipment emissions tier', 'feir', 'Inspection', 2, [],
    [a('AIR-11', 'Equipment tier verification', 'tracking')], null, '2026-03-03',
    'Off-road diesel equipment greater than 50 horsepower shall meet Tier 4 Final emission standards, verified by equipment list prior to mobilization.',
    {}],
  ['CUL-14', 'Tribal monitor notification', 'feir', 'Reporting', 2, [],
    [a('CUL-14', 'Tribal monitor notification', 'reporting')], null, '2026-03-10',
    'Culturally affiliated tribes shall receive no less than 14 days notice prior to the start of ground disturbance in areas identified as culturally sensitive.'],
  ['GEO-12', 'Artesian conditions contingency', 'usace', 'Avoidance & BMPs', 2, [],
    [], null, '2026-03-10',
    'Where artesian conditions are encountered, drilling shall stop and the boring shall be sealed under the direction of a licensed engineering geologist.'],
  ['NOI-12', 'Vibration limits for adjacent structures', 'feir', 'Monitoring', 3, [],
    [a('NOI-12', 'Vibration monitoring at receptors', 'monitoring')], null, '2026-03-17',
    'Ground-borne vibration shall not exceed 0.2 in/sec PPV at any structure of normal construction, monitored continuously during impact activities.',
    {}],
  ['BIO-55', 'Lighting shielding for nocturnal wildlife', 'feir', 'Avoidance & BMPs', 2, ['GGS'],
    [], null, '2026-03-17',
    'Nighttime lighting shall be directed downward, shielded, and of the minimum intensity necessary, with no direct illumination of adjacent aquatic habitat.'],
];

export const SETUP_COMMITMENTS: ApplicableCommitment[] = ROWS.map(
  ([code, title, sourceId, requirementType, requirements, species, actions, decision, addedOn, text, extra], i) => ({
    id: `cc-${String(i + 1).padStart(3, '0')}`,
    code,
    title,
    text,
    sourceId,
    requirementType,
    requirements,
    species,
    actions,
    decision,
    addedOn,
    rationale: extra?.rationale
  }),
);

// ── Derivations — the counts the redesign leads with ────────────────────────
// Every one of these is scoped to THIS component and agrees with the list it
// labels. That agreement is the whole point: the current screen's badge counts
// one set and its list renders another.

export const UNDECIDED = SETUP_COMMITMENTS.filter((c) => c.decision === null);
export const APPLIED = SETUP_COMMITMENTS.filter((c) => c.decision === 'applied');
export const DISMISSED = SETUP_COMMITMENTS.filter((c) => c.decision === 'dismissed');

/** Undecided AND added after the last decision here — the honest "what changed". */
export const NEW_SINCE_REVIEW = UNDECIDED.filter((c) => c.addedOn > LAST_REVIEWED);

/** Undecided and already present at the last review — the standing backlog. */
export const STANDING_BACKLOG = UNDECIDED.filter((c) => c.addedOn <= LAST_REVIEWED);

/** Actions that would materialize if every undecided commitment were applied. */
export const PENDING_ACTION_COUNT = UNDECIDED.reduce((n, c) => n + c.actions.length, 0);

export const SETUP_TOTALS = {
  total: SETUP_COMMITMENTS.length,
  undecided: UNDECIDED.length,
  applied: APPLIED.length,
  dismissed: DISMISSED.length,
  newSince: NEW_SINCE_REVIEW.length,
  decided: APPLIED.length + DISMISSED.length,
};

/** Share of the component's commitments that carry a decision — the honest progress figure. */
export const DECIDED_PERCENT = Math.round((SETUP_TOTALS.decided / SETUP_TOTALS.total) * 100);

// ── Facets — every option carries the count it will actually produce ────────
// The current screen renders a Construction Activity filter that is populated
// and permanently disabled, because commitments are not associated to
// construction activities in the data model. It is not rendered here: a control
// that cannot act is debt, and polish is subtractive.
export interface Facet {
  key: string;
  label: string;
  options: { value: string; label: string; count: number }[];
}

const countBy = <T>(items: ApplicableCommitment[], pick: (c: ApplicableCommitment) => T[]): Map<T, number> => {
  const m = new Map<T, number>();
  for (const c of items) for (const v of pick(c)) m.set(v, (m.get(v) ?? 0) + 1);
  return m;
};

/** Facets are built over a SCOPE, so switching view recomputes them together. */
export const facetsFor = (scope: ApplicableCommitment[]): Facet[] => {
  const bySource = countBy(scope, (c) => [c.sourceId]);
  const byType = countBy(scope, (c) => [c.requirementType]);
  const bySpecies = countBy(scope, (c) => c.species);

  return [
    {
      key: 'source',
      label: 'Source document',
      options: SETUP_SOURCES.filter((s) => bySource.get(s.id)).map((s) => ({
        value: s.id,
        label: s.short,
        count: bySource.get(s.id) ?? 0,
      })),
    },
    {
      key: 'type',
      label: 'Requirement type',
      options: REQUIREMENT_TYPES.filter((t) => byType.get(t)).map((t) => ({
        value: t,
        label: t,
        count: byType.get(t) ?? 0,
      })),
    },
    {
      key: 'species',
      label: 'Species',
      options: [...bySpecies.entries()]
        .sort((x, y) => x[0].localeCompare(y[0]))
        .map(([code, count]) => ({ value: code, label: `${code} · ${SPECIES_LABEL[code]}`, count })),
    },
  ];
};

/** ISO → "Mmm d, yyyy" without touching Date.now(). */
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const fmtDate = (iso: string): string => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
};
