// The "Load sample plan" content, copied from Beacon.API/Services/Planning/SamplePlanFixture.cs (origin/develop).
// Jamie adapted it from this repo's fish-gantt prototype (src/data/fish-plan.ts): the first program, its two
// studies, their sub-studies and tasks; month spans became first-of-month to last-of-month dates. Illustrative only.

export type SampleDateType = 'Estimated' | 'Scheduled';

export interface SampleElement {
  name: string;
  start: string | null;
  end: string | null;
  type: SampleDateType;
  milestone: boolean;
  children: SampleElement[];
}

const lastDay = (y: number, m: number) => new Date(Date.UTC(y, m, 0)).getUTCDate();
const iso = (y: number, m: number, d: number) => `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;

/** A parent's planned window: first day of the start month to last day of the end month. */
const window = (sy: number, sm: number, ey: number, em: number) => ({ start: iso(sy, sm, 1), end: iso(ey, em, lastDay(ey, em)) });

const branch = (name: string, w: { start: string; end: string } | null, type: SampleDateType, ...children: SampleElement[]): SampleElement => ({
  name,
  start: w?.start ?? null,
  end: w?.end ?? null,
  type,
  milestone: false,
  children,
});

const leaf = (name: string, sy: number, sm: number, ey: number, em: number): SampleElement => ({
  name,
  start: iso(sy, sm, 1),
  end: iso(ey, em, lastDay(ey, em)),
  type: 'Estimated',
  milestone: false,
  children: [],
});

const milestone = (name: string, date: string, type: SampleDateType): SampleElement => ({ name, start: date, end: date, type, milestone: true, children: [] });

const DRAFT_STUDY_PLAN_SUBMITTED = 'Draft study plan submitted to CDFW';

export const SAMPLE_PLAN = {
  name: 'Sample plan — Fisheries Evaluation Studies',
  description:
    'Illustrative sample data adapted from a fisheries science plan. Tasks, dates, milestones and dependencies are invented for demonstration and are not contract or regulatory values.',
  levels: [
    { SingularName: 'Program', PluralName: 'Programs' },
    { SingularName: 'Study', PluralName: 'Studies' },
    { SingularName: 'Sub-study', PluralName: 'Sub-studies' },
    { SingularName: 'Task', PluralName: 'Tasks' },
  ],
  elements: [
    branch(
      'Fisheries Evaluation Studies',
      window(2026, 7, 2033, 9),
      'Estimated',
      branch(
        'Migration & Survival Study',
        window(2026, 7, 2031, 6),
        'Scheduled',
        branch(
          'Near-field intake behavior & survival',
          null,
          'Estimated',
          leaf('Detailed baseline study plan', 2026, 7, 2027, 3),
          milestone(DRAFT_STUDY_PLAN_SUBMITTED, '2027-03-17', 'Scheduled'),
          leaf('Acoustic tag & receiver procurement', 2027, 4, 2028, 3),
          leaf('Fabricate & install acoustic receiver array', 2028, 4, 2028, 9),
          leaf('Winter-freshet acoustic tagging season', 2028, 10, 2029, 3),
          leaf('Receiver retrieval & detection QA', 2029, 4, 2029, 8),
          leaf('Draft near-field survival memo', 2029, 9, 2029, 12),
        ),
        branch(
          'Far-field through-Delta survival & routing',
          null,
          'Estimated',
          leaf('Receiver-site encroachment permits', 2026, 10, 2027, 9),
          leaf('Regional receiver network build-out', 2028, 5, 2028, 10),
          leaf('Multi-year tag release & tracking', 2028, 11, 2031, 3),
          leaf('Through-Delta survival model fit', 2031, 4, 2031, 10),
        ),
      ),
      branch(
        'Predation Study',
        window(2027, 1, 2030, 12),
        'Estimated',
        branch(
          'Predator density & distribution surveys',
          null,
          'Estimated',
          leaf('Predation study plan & permitting', 2027, 1, 2027, 9),
          leaf('Baseline predator hydroacoustic survey', 2029, 4, 2029, 9),
          leaf('Predation hotspot mapping', 2029, 10, 2030, 3),
        ),
        branch('Predation exposure modeling', null, 'Estimated', leaf('Diet & eDNA sampling', 2030, 4, 2030, 9), leaf('Predation exposure model build', 2030, 10, 2031, 6)),
      ),
    ),
  ] as SampleElement[],
  /** Finish-to-start, predecessor → successor, with lag days (negative is a lead). */
  dependencies: [
    ['Detailed baseline study plan', 'Acoustic tag & receiver procurement', 0],
    ['Acoustic tag & receiver procurement', 'Fabricate & install acoustic receiver array', 0],
    ['Fabricate & install acoustic receiver array', 'Winter-freshet acoustic tagging season', 0],
    ['Winter-freshet acoustic tagging season', 'Receiver retrieval & detection QA', 0],
    ['Receiver-site encroachment permits', 'Regional receiver network build-out', 0],
    ['Regional receiver network build-out', 'Multi-year tag release & tracking', 0],
    ['Baseline predator hydroacoustic survey', 'Predation hotspot mapping', 0],
    ['Diet & eDNA sampling', 'Predation exposure model build', 0],
    ['Winter-freshet acoustic tagging season', 'Baseline predator hydroacoustic survey', 0],
    ['Detailed baseline study plan', DRAFT_STUDY_PLAN_SUBMITTED, -14],
  ] as [string, string, number][],
  landmarks: [
    { name: '30% design', date: '2031-01-01' },
    { name: '60% design', date: '2032-01-01' },
  ],
};

/**
 * New (2026-10-21): illustrative budgets (whole dollars) and notes for the sample's elements, by name. Invented for the
 * prototype, not contract values. Milestones carry no budget.
 */
export const SAMPLE_BUDGETS: Record<string, number> = {
  'Fisheries Evaluation Studies': 350_000,
  'Detailed baseline study plan': 185_000,
  'Acoustic tag & receiver procurement': 640_000,
  'Fabricate & install acoustic receiver array': 1_250_000,
  'Winter-freshet acoustic tagging season': 480_000,
  'Receiver retrieval & detection QA': 210_000,
  'Draft near-field survival memo': 95_000,
  'Receiver-site encroachment permits': 120_000,
  'Regional receiver network build-out': 1_800_000,
  'Multi-year tag release & tracking': 2_400_000,
  'Through-Delta survival model fit': 310_000,
  'Predation study plan & permitting': 140_000,
  'Baseline predator hydroacoustic survey': 520_000,
  'Predation hotspot mapping': 260_000,
  'Diet & eDNA sampling': 380_000,
  'Predation exposure model build': 290_000,
};

export const SAMPLE_NOTES: Record<string, string> = {
  'Fabricate & install acoustic receiver array':
    'Array design follows the receiver spec from procurement. Installation has to fit the June–September in-water work window, so a late permit pushes it a full year.',
  'Multi-year tag release & tracking': 'Three release seasons. Hatchery fish supply is confirmed for the first two; the third depends on a supply agreement still in review.',
  'Receiver-site encroachment permits': 'Two of the nine sites need landowner access agreements before the applications can go in.',
  'Predation hotspot mapping': 'Built from the hydroacoustic survey; scope narrows if the survey misses its spring window.',
};

// ── The index's other two plans (2026-10-28) ────────────────────────────────────────────────────────────────────────
// Before this they were the fisheries sample renamed, so "Geotechnical Investigations" opened on fish studies (the
// adversarial review's first blocker). Each is its own small plan now, in the same shape. Illustrative only.

export interface SampleSource {
  plan: typeof SAMPLE_PLAN;
  budgets: Record<string, number>;
  notes: Record<string, string>;
}

const GEOTECH_PLAN: typeof SAMPLE_PLAN = {
  name: 'Geotechnical Investigations',
  description: 'Borings, CPTs and lab testing along the tunnel alignment, sequenced around the permit windows.',
  levels: [
    { SingularName: 'Program', PluralName: 'Programs' },
    { SingularName: 'Reach', PluralName: 'Reaches' },
    { SingularName: 'Campaign', PluralName: 'Campaigns' },
    { SingularName: 'Task', PluralName: 'Tasks' },
  ],
  elements: [
    branch(
      'Tunnel Alignment Geotechnical Program',
      window(2026, 4, 2029, 6),
      'Estimated',
      branch(
        'Reach 1: Intakes to Twin Cities',
        window(2026, 4, 2027, 6),
        'Scheduled',
        branch(
          'Over-water borings',
          null,
          'Estimated',
          leaf('Barge access and encroachment permits', 2026, 4, 2026, 9),
          leaf('Over-water boring program', 2026, 10, 2027, 2),
          milestone('In-water work window closes', '2027-02-28', 'Scheduled'),
          leaf('Boring logs and field data report', 2027, 3, 2027, 5),
        ),
        branch(
          'Land CPT campaign',
          null,
          'Estimated',
          leaf('Landowner temporary entry permits', 2026, 4, 2026, 8),
          leaf('CPT soundings at 40 locations', 2026, 9, 2026, 12),
          leaf('Seismic CPT and dissipation tests', 2027, 1, 2027, 3),
        ),
      ),
      branch(
        'Reach 3: Bouldin Island to Bethany',
        window(2027, 1, 2028, 9),
        'Estimated',
        branch(
          'Deep borings',
          null,
          'Estimated',
          leaf('Drilling contractor procurement', 2027, 1, 2027, 6),
          leaf('Deep boring program to 150 feet', 2027, 7, 2028, 2),
          leaf('Downhole geophysics', 2027, 9, 2028, 3),
        ),
        branch('Laboratory testing', null, 'Estimated', leaf('Index and strength testing', 2028, 1, 2028, 6), leaf('Consolidation and cyclic testing', 2028, 3, 2028, 9)),
      ),
      branch(
        'Geotechnical Data Report',
        window(2028, 7, 2029, 6),
        'Estimated',
        branch(
          'Reporting',
          null,
          'Estimated',
          leaf('Draft geotechnical data report', 2028, 10, 2028, 12),
          milestone('Data report submitted for review', '2029-01-15', 'Scheduled'),
          leaf('Final data report and baseline report', 2029, 2, 2029, 6),
        ),
      ),
    ),
  ] as SampleElement[],
  dependencies: [
    ['Barge access and encroachment permits', 'Over-water boring program', 0],
    ['Over-water boring program', 'Boring logs and field data report', 0],
    ['Landowner temporary entry permits', 'CPT soundings at 40 locations', 0],
    ['CPT soundings at 40 locations', 'Seismic CPT and dissipation tests', 0],
    ['Drilling contractor procurement', 'Deep boring program to 150 feet', 0],
    ['Deep boring program to 150 feet', 'Index and strength testing', -30],
    ['Consolidation and cyclic testing', 'Draft geotechnical data report', 0],
    ['Draft geotechnical data report', 'Data report submitted for review', 14],
  ] as [string, string, number][],
  landmarks: [{ name: 'Tunnel 30% design', date: '2028-01-01' }],
};

const GEOTECH_BUDGETS: Record<string, number> = {
  'Barge access and encroachment permits': 90_000,
  'Over-water boring program': 1_450_000,
  'Boring logs and field data report': 120_000,
  'Landowner temporary entry permits': 60_000,
  'CPT soundings at 40 locations': 380_000,
  'Seismic CPT and dissipation tests': 140_000,
  'Drilling contractor procurement': 40_000,
  'Deep boring program to 150 feet': 2_100_000,
  'Downhole geophysics': 310_000,
  'Index and strength testing': 260_000,
  'Consolidation and cyclic testing': 340_000,
  'Draft geotechnical data report': 220_000,
  'Final data report and baseline report': 180_000,
};

const GEOTECH_NOTES: Record<string, string> = {
  'Over-water boring program': 'Barge work stays inside the in-water window; anything not drilled by the end of February waits a full year.',
  'Landowner temporary entry permits': 'Six of the forty CPT locations are on parcels still negotiating entry.',
};

const HABITAT_PLAN: typeof SAMPLE_PLAN = {
  name: 'Habitat Restoration Monitoring',
  description: 'Monitoring for the tidal habitat restoration sites: baseline surveys, construction monitoring and five years of post-construction performance.',
  levels: [
    { SingularName: 'Program', PluralName: 'Programs' },
    { SingularName: 'Site', PluralName: 'Sites' },
    { SingularName: 'Phase', PluralName: 'Phases' },
    { SingularName: 'Task', PluralName: 'Tasks' },
  ],
  elements: [
    branch(
      'Tidal Habitat Restoration Monitoring',
      window(2026, 1, 2032, 6),
      'Estimated',
      branch(
        'Lookout Slough',
        window(2026, 1, 2031, 12),
        'Scheduled',
        branch(
          'Lookout Slough baseline and construction',
          null,
          'Estimated',
          leaf('Baseline vegetation and bathymetry surveys', 2026, 1, 2026, 9),
          leaf('Construction turbidity monitoring', 2026, 10, 2027, 9),
          milestone('Levee breach', '2027-10-15', 'Scheduled'),
        ),
        branch(
          'Lookout Slough performance',
          null,
          'Estimated',
          leaf('Year 1 fish and invertebrate sampling', 2027, 11, 2028, 10),
          leaf('Years 1 to 3 vegetation transects', 2028, 4, 2030, 10),
          leaf('Year 5 performance report', 2031, 1, 2031, 12),
        ),
      ),
      branch(
        'Winter Island',
        window(2027, 1, 2032, 6),
        'Estimated',
        branch('Winter Island baseline and construction', null, 'Estimated', leaf('Winter Island baseline surveys', 2027, 1, 2027, 9), leaf('Winter Island construction monitoring', 2027, 10, 2028, 9)),
        branch('Winter Island performance', null, 'Estimated', leaf('Years 1 to 3 monitoring', 2028, 10, 2031, 9), leaf('Adaptive management review', 2031, 10, 2032, 6)),
      ),
    ),
  ] as SampleElement[],
  dependencies: [
    ['Baseline vegetation and bathymetry surveys', 'Construction turbidity monitoring', 0],
    ['Construction turbidity monitoring', 'Year 1 fish and invertebrate sampling', 30],
    ['Winter Island baseline surveys', 'Winter Island construction monitoring', 0],
    ['Winter Island construction monitoring', 'Years 1 to 3 monitoring', 0],
    ['Years 1 to 3 monitoring', 'Adaptive management review', 0],
  ] as [string, string, number][],
  landmarks: [],
};

const HABITAT_BUDGETS: Record<string, number> = {
  'Baseline vegetation and bathymetry surveys': 240_000,
  'Construction turbidity monitoring': 410_000,
  'Year 1 fish and invertebrate sampling': 380_000,
  'Years 1 to 3 vegetation transects': 520_000,
  'Year 5 performance report': 160_000,
  'Winter Island baseline surveys': 210_000,
  'Winter Island construction monitoring': 360_000,
  'Years 1 to 3 monitoring': 690_000,
  'Adaptive management review': 120_000,
};

const HABITAT_NOTES: Record<string, string> = {
  'Construction turbidity monitoring': 'Continuous sondes at the breach and two reference sites; exceedances go to the contractor the same day.',
};

/** The samples the seed stages, by key. */
export const SAMPLES: Record<'fisheries' | 'geotech' | 'habitat', SampleSource> = {
  fisheries: { plan: SAMPLE_PLAN, budgets: SAMPLE_BUDGETS, notes: SAMPLE_NOTES },
  geotech: { plan: GEOTECH_PLAN, budgets: GEOTECH_BUDGETS, notes: GEOTECH_NOTES },
  habitat: { plan: HABITAT_PLAN, budgets: HABITAT_BUDGETS, notes: HABITAT_NOTES },
};
export type SampleKey = keyof typeof SAMPLES;
