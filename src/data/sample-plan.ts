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
