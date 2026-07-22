// ─────────────────────────────────────────────────────────────────────────────
// fish-plan.ts — THE SOURCE OF TRUTH for the Study Planning prototype.
//
// Every surface (gantt / roles / readiness / memo + exports / detail pages /
// science-plan reader / data-model map) derives from THIS module. It owns
// exactly six things:
//
//   1. TODAY               — the plan's current-date anchor (single definition;
//                            every countdown, flag, window, export stamp, and
//                            gantt today-line reads it).
//   2. PROGRAMS            — the four-tier work-breakdown forest
//                            (Commitment → Study → Sub-study → Task):
//        • a Commitment's id IS its COA (e.g. "COA-10.19"); Study/Sub-study/Task
//          carry stable synthetic ids (STY/SUB/TSK) with the ITP sub-number
//          (coaRef, e.g. "10.19.1") shown as a reference —
//          study ↔ COA is not strictly 1:1 (that is what the crosswalk is for);
//        • the TASK is the schedulable month-by-month leaf; status, span, and
//          per-water-year funding all ROLL UP (derived at render, never stored);
//        • field-season timing honors the fish calendar (dry-season Apr–Sep
//          install/analyze/report; winter-freshet Oct–Mar deploy/tag).
//   3. MILESTONES          — the immovable regulatory/engineering anchors
//                            (+ MMRP citations) that back-planning starts from.
//   4. PLAN_ASSUMPTIONS    — authored plan-level judgment (renders only in the
//                            generated memo document, never as page copy).
//   5. STUDY_PROFILES      — the authored science-plan satellite per COA
//                            (sketch, CDFW review thread, deliverables, details,
//                            dependencies), projected from the legacy register
//                            corpus in ./fish-studies.ts. The profile carries
//                            ONLY authored content — schedule/status/lead/roles
//                            for plan COAs live on the work-breakdown alone.
//   6. PLAN_SECTIONS       — the FIXED draft science plan's numbered outline
//                            (+ PLAN_COMMENTS, the plan-level review comments).
//                            Sections cite COAs; review comments anchor to
//                            sections. Only comment status is live data.
//
// The TYPES + roll-up helpers are the contract in ./fish-model.ts. Content is
// grounded in the DCP science plan but tasks, months, owners, and dollar
// magnitudes are ILLUSTRATIVE planning fixtures — deterministic, invented, NOT
// CDFW/DWR contract values.
// ─────────────────────────────────────────────────────────────────────────────
import type { FundingEntry, HierNode, LeadOrg, Milestone, PlanAssumption, PlanSection, ReviewComment, RoleAssignment, StudyProfile, TaskStatus } from './fish-model';
import { waterYearOf } from './fish-model';
import { STUDIES } from './fish-studies';

// ── TODAY: the plan's current-date anchor ─────────────────────────────────────
export const TODAY = '2026-07-21';
export const TODAY_LABEL = 'July 21, 2026';
export const TODAY_MONTH = TODAY.slice(0, 7);

// ── Funding helper: spread a task's total across the water years it spans ───────
// Even split across spanned water years, rounded to $10k, remainder to the first
// year, so a per-year plan reads realistically and sums to the total exactly.
function spread(startMonth: string, endMonth: string, total: number): FundingEntry[] {
  const first = waterYearOf(startMonth);
  const last = Math.max(first, waterYearOf(endMonth));
  const years = last - first + 1;
  const per = Math.round(total / years / 10_000) * 10_000;
  const out: FundingEntry[] = [];
  for (let i = 0; i < years; i++) out.push({ waterYear: first + i, amount: per });
  out[0].amount += total - per * years; // absorb rounding into the first year
  return out;
}

/** A leaf Task node. */
function task(
  id: string,
  coaRef: string,
  name: string,
  startMonth: string,
  endMonth: string,
  owner: string,
  status: TaskStatus,
  total: number,
  extra: { notes?: string; constraints?: string[] } = {},
): HierNode {
  return {
    id,
    tier: 'task',
    name,
    coaRef,
    startMonth,
    endMonth,
    owner,
    status,
    funding: total > 0 ? spread(startMonth, endMonth, total) : [],
    notes: extra.notes,
    constraints: extra.constraints,
    children: [],
  };
}

const branch = (
  tier: HierNode['tier'],
  id: string,
  coaRef: string,
  name: string,
  children: HierNode[],
  extra: { funding?: FundingEntry[]; notes?: string; constraints?: string[] } = {},
): HierNode => ({
  id,
  tier,
  name,
  coaRef,
  funding: extra.funding ?? [],
  notes: extra.notes,
  constraints: extra.constraints,
  children,
});

// ── The forest: the Programs of the science plan ──────────────────────────────

export const PROGRAMS: HierNode[] = [
  branch(
    'program',
    'COA-10.19',
    '10.19',
    'Fisheries Evaluation Studies',
    [
      branch(
        'study',
        'STY-014',
        '10.19.1',
        'Migration & Survival Study',
        [
          branch(
            'substudy',
            'SUB-021',
            '10.19.1a',
            'Near-field intake behavior & survival',
            [
              task('TSK-029', '10.19.1a.0', 'Detailed baseline study plan', '2026-07', '2027-03', 'DWR-DISE', 'on-track', 180_000),
              task('TSK-030', '10.19.1a.0b', 'Acoustic tag & receiver procurement', '2027-04', '2028-03', 'DWR-DISE', 'not-started', 640_000, {
                notes: 'Tag and receiver lead times are significant; fish must be ordered well in advance of tagging.',
              }),
              task('TSK-001', '10.19.1a.1', 'Fabricate & install acoustic receiver array', '2028-04', '2028-09', 'cbec eco-engineering', 'not-started', 620_000),
              task('TSK-002', '10.19.1a.2', 'Winter-freshet acoustic tagging season', '2028-10', '2029-03', 'ESA Fisheries', 'not-started', 540_000),
              task('TSK-003', '10.19.1a.3', 'Receiver retrieval & detection QA', '2029-04', '2029-08', 'ESA Fisheries', 'not-started', 210_000),
              task('TSK-004', '10.19.1a.4', 'Draft near-field survival memo', '2029-09', '2029-12', 'ESA Fisheries', 'not-started', 160_000),
            ],
          ),
          branch(
            'substudy',
            'SUB-022',
            '10.19.1b',
            'Far-field through-Delta survival & routing',
            [
              task('TSK-031', '10.19.1b.0', 'Receiver-site encroachment permits', '2026-10', '2027-09', 'DWR-DCO', 'blocked', 120_000, {
                notes: 'Two of eleven planned receiver sites are stalled in reclamation-district encroachment review.',
              }),
              task('TSK-005', '10.19.1b.1', 'Regional receiver network build-out', '2028-05', '2028-10', 'DWR-DISE', 'not-started', 880_000, {
                notes: 'Two of eleven planned receiver sites still need encroachment permits from the reclamation districts.',
              }),
              task('TSK-006', '10.19.1b.2', 'Multi-year tag release & tracking', '2028-11', '2031-03', 'ESA Fisheries', 'not-started', 1_650_000),
              task('TSK-007', '10.19.1b.3', 'Through-Delta survival model fit', '2031-04', '2031-10', 'ESA / cbec', 'not-started', 320_000),
            ],
            { constraints: ['Back-scheduled from in-water construction (WY2034)', 'Requires ≥3 tag-release years before model fit'] },
          ),
        ],
      ),
      branch(
        'study',
        'STY-015',
        '10.19.2',
        'Predation Study',
        [
          branch(
            'substudy',
            'SUB-023',
            '10.19.2a',
            'Predator density & distribution surveys',
            [
              task('TSK-032', '10.19.2a.0', 'Predation study plan & permitting', '2027-01', '2027-09', 'DWR-DISE', 'not-started', 140_000),
              task('TSK-008', '10.19.2a.1', 'Baseline predator hydroacoustic survey', '2029-04', '2029-09', 'DWR-DCO', 'not-started', 300_000),
              task('TSK-009', '10.19.2a.2', 'Predation hotspot mapping', '2029-10', '2030-03', 'DWR-DCO', 'not-started', 260_000, {
                notes: 'Blocked on landowner access agreement for the Georgiana Slough approach; escalated to DWR right-of-way.',
                constraints: ['Requires landowner access agreement (DWR ROW)'],
              }),
            ],
          ),
          branch(
            'substudy',
            'SUB-024',
            '10.19.2b',
            'Predation exposure modeling',
            [
              task('TSK-010', '10.19.2b.1', 'Diet & eDNA sampling', '2030-04', '2030-09', 'UC Davis (subaward)', 'not-started', 240_000),
              task('TSK-011', '10.19.2b.2', 'Predation exposure model build', '2030-10', '2031-06', 'ESA / UC Davis', 'not-started', 380_000),
            ],
          ),
        ],
      ),
      branch(
        'study',
        'STY-016',
        '10.19.3',
        'Abundance & Distribution Study',
        [
          branch(
            'substudy',
            'SUB-025',
            '10.19.3a',
            'Juvenile abundance & distribution monitoring',
            [
              task('TSK-033', '10.19.3a.0', 'Abundance-methods pilot design', '2027-04', '2028-03', 'DWR-DISE', 'not-started', 200_000),
              task('TSK-012', '10.19.3a.1', 'Monitoring-array installation & calibration', '2028-08', '2028-11', 'DWR-DCO', 'not-started', 180_000),
              task('TSK-013', '10.19.3a.2', 'Abundance & distribution field seasons', '2028-12', '2032-03', 'DWR-DCO', 'not-started', 1_240_000),
              task('TSK-014', '10.19.3a.3', 'Abundance & distribution analysis', '2032-04', '2032-10', 'ESA Fisheries', 'not-started', 280_000),
            ],
          ),
        ],
      ),
    ],
    {
      // No node-level dollars in the fixture: every parent's number is EXACTLY the
      // sum of its descendants' entries, so the money column reads as clean sums.
      // (Funding stays enterable at any tier via the drawer's Own column.)
      constraints: ['Funding ceiling $12.0M (illustrative)', 'ICF-primed DWR contract — separate from the ESA on-call'],
    },
  ),
  branch(
    'program',
    'COA-10.20',
    '10.20',
    'Water Quality Evaluation Studies',
    [
      branch(
        'study',
        'STY-017',
        '10.20.1',
        'Installation of New Real-time Monitoring Station',
        [
          branch(
            'substudy',
            'SUB-026',
            '10.20.1a',
            'Real-time station build-out',
            [
              task('TSK-034', '10.20.1a.0', 'Station design & permitting scoping', '2026-08', '2027-03', 'DWR-DCO', 'on-track', 90_000),
              task('TSK-015', '10.20.1a.1', 'Station siting & regulatory clearance', '2027-04', '2027-12', 'DWR-DISE', 'not-started', 220_000, {
                notes: 'Two candidate sites overlap CDFW-designated sensitive habitat; siting under review.',
              }),
              task('TSK-016', '10.20.1a.2', 'Sensor procurement & installation', '2028-01', '2028-08', 'DWR-DISE', 'not-started', 640_000),
              task('TSK-017', '10.20.1a.3', 'Telemetry commissioning', '2028-09', '2029-01', 'DWR-DISE', 'not-started', 180_000),
            ],
          ),
          branch(
            'substudy',
            'SUB-027',
            '10.20.1b',
            'Data QA/QC & pipeline',
            [
              task('TSK-018', '10.20.1b.1', 'QA/QC protocol authoring', '2028-04', '2028-08', 'ESA Data', 'not-started', 120_000),
              task('TSK-019', '10.20.1b.2', 'CDEC / Beacon data-pipeline integration', '2028-09', '2029-03', 'ESA Data', 'not-started', 200_000),
            ],
          ),
        ],
      ),
      branch(
        'study',
        'STY-018',
        '10.20.2',
        'Sediment & Turbidity Monitoring',
        [
          branch(
            'substudy',
            'SUB-028',
            '10.20.2a',
            'Sediment & turbidity sampling program',
            [
              task('TSK-020', '10.20.2a.1', 'Sampling design & QAPP', '2029-04', '2029-08', 'ESA / DWR-DCO', 'not-started', 140_000),
              task('TSK-021', '10.20.2a.2', 'Turbidity & SSC field season 1', '2029-09', '2030-03', 'DWR-DCO', 'not-started', 310_000),
              task('TSK-022', '10.20.2a.3', 'Sediment-flux lab analysis & reporting', '2030-04', '2030-09', 'ESA Lab (subaward)', 'not-started', 190_000),
            ],
          ),
        ],
      ),
    ],
    {
      constraints: ['Funding ceiling $6.0M (illustrative)', 'Infrastructure back-scheduled from 30% design (WY2031)'],
    },
  ),
  branch(
    'program',
    'COA-10.21',
    '10.21',
    'Ecological Response Evaluation Studies',
    [
      branch(
        'study',
        'STY-019',
        '10.21.1',
        'Hydrodynamics at Georgiana Slough Monitoring',
        [
          branch(
            'substudy',
            'SUB-029',
            '10.21.1a',
            'Continuous hydrodynamic monitoring',
            [
              task('TSK-023', '10.21.1a.1', 'ADCP array deployment & data collection', '2034-10', '2038-03', 'ESA Fisheries', 'not-started', 2_400_000),
              task('TSK-024', '10.21.1a.2', 'Multi-year flow-split synthesis', '2038-04', '2039-03', 'ESA Fisheries', 'not-started', 420_000),
            ],
          ),
          branch(
            'substudy',
            'SUB-030',
            '10.21.1b',
            'Routing & flow-reversal analysis',
            [
              task('TSK-025', '10.21.1b.1', 'Hydrodynamic model calibration', '2033-04', '2033-12', 'ESA / cbec', 'not-started', 260_000),
              task('TSK-026', '10.21.1b.2', 'Annual hydrodynamic monitoring', '2034-04', '2041-09', 'DWR-DCO', 'not-started', 1_120_000),
            ],
            { constraints: ['Continuous through operations (WY2034+)'] },
          ),
        ],
      ),
      branch(
        'study',
        'STY-020',
        '10.21.2',
        'Covered Fish Species Life Cycle Models',
        [
          branch(
            'substudy',
            'SUB-033',
            '10.21.2a',
            'Life-cycle model refinement',
            [
              task('TSK-027', '10.21.2a.1', 'Model refinement with monitoring data', '2037-10', '2038-09', 'ESA', 'not-started', 380_000),
              task('TSK-028', '10.21.2a.2', 'Decadal model validation & CDFW report-out', '2041-10', '2042-09', 'ESA / DWR-DCO', 'not-started', 460_000),
            ],
          ),
        ],
      ),
    ],
    {
      constraints: ['Funding ceiling $8.0M (illustrative)', 'Runs Phase 1 operations (WY2034) through the decadal review (WY2042)'],
    },
  ),
  branch(
    'program',
    'COA-10.26',
    '10.26',
    'Incorporation of Fish Guidance System into the North Delta Intake Structures',
    [
      branch(
        'study',
        'STY-021',
        '10.26',
        'Fish Guidance System Study',
        [
          branch(
            'substudy',
            'SUB-031',
            '10.26a',
            'Study design & procurement',
            [
              task('TSK-035', '10.26a.1', 'Detailed study plan & tracking-array design', '2026-04', '2026-09', 'DWR-DISE', 'complete', 160_000),
              task('TSK-036', '10.26a.2', 'Telemetry equipment & tagged-fish orders', '2026-06', '2026-12', 'DWR-DCO', 'at-risk', 480_000, {
                notes: 'Tag and receiver lead times put winter 26/27 deployment at risk; hatchery fish must be ordered by September.',
              }),
              task('TSK-037', '10.26a.3', 'Pile & science-deployment permitting', '2026-07', '2026-12', 'DWR-DCO', 'on-track', 110_000),
            ],
          ),
          branch(
            'substudy',
            'SUB-032',
            '10.26b',
            'Field seasons & analysis',
            [
              task('TSK-038', '10.26b.1', 'Winter 26/27 tracking field season', '2026-10', '2027-03', 'ESA Fisheries', 'not-started', 820_000),
              task('TSK-039', '10.26b.2', 'Season-1 analysis & STAIRS calibration', '2027-04', '2027-09', 'ESA / cbec', 'not-started', 310_000),
              task('TSK-040', '10.26b.3', 'Winter 27/28 tracking field season', '2027-10', '2028-03', 'ESA Fisheries', 'not-started', 780_000),
              task('TSK-041', '10.26b.4', 'FGS modeling, analysis & reporting', '2028-04', '2028-12', 'ESA / cbec', 'not-started', 350_000),
            ],
          ),
        ],
        {
          constraints: [
            'Recommended fish-guidance plan due to CDFW by January 2030 — one year before 30% design finalization',
            'Tightest timelines in the science plan: field work must land winters 26/27 and 27/28',
          ],
        },
      ),
    ],
  ),
];

// ── Study-tier LEADS (accountability), grounded in Aaron's ITP crosswalk /
//    Roles_Summary "Study/Plan Lead" column. Applied onto the built forest so the
//    branch() calls above stay clean. Rolls up at Program, inherits down to tasks.
const STUDY_LEAD: Record<string, LeadOrg> = {
  'STY-014': 'DWR-DISE', // 10.19.1 Migration & Survival — DWR-DISE/DCO
  'STY-015': 'DWR-DISE', // 10.19.2 Predation — DWR-DISE (Javier/Parisa)
  'STY-016': 'DWR-DISE', // 10.19.3 Abundance & distribution — DWR-DISE (Brian S.)
  'STY-017': 'DWR-DCO', //  10.20.1 WQ station network — DWR-DCO (DCA coordination)
  'STY-018': 'DWR-DISE', // 10.20.2 Sediment & turbidity — DWR-DISE (Ellen)
  'STY-019': 'DCA', //      10.21.1 Georgiana Slough hydrodynamics — DCA/consultant
  'STY-020': 'DWR-DCO', //  10.21.2 Life cycle models — DWR-DCO
  'STY-021': 'DWR-DISE', // 10.26 Fish guidance — DWR-DISE w/ interagency working group
};
// ── Study-tier RACI assignments (Roles_Summary work-streams). The source for the
//    Roles-matrix projection — grounded in Aaron's Roles_Summary, illustrative.
const STUDY_ROLES: Record<string, RoleAssignment[]> = {
  'STY-014': [
    { workstream: 'lead', org: 'DWR-DISE/DCO', person: 'Kevin, Javier, Chris G.', tentative: true },
    { workstream: 'design', org: 'Consultant', person: 'ESA/USGS', tentative: true },
    { workstream: 'implementation', org: 'Consultant', person: 'ESA/ICF/USGS', tentative: true },
    { workstream: 'compliance', org: 'DCO/Consultant', person: 'ESA/ICF', tentative: true },
    { workstream: 'engineering', org: 'DCA' },
    { workstream: 'construction', org: 'DCA Contractor', tentative: true },
  ],
  'STY-015': [
    { workstream: 'lead', org: 'DWR-DISE', person: 'Javier/Parisa' },
    { workstream: 'design', org: 'DWR-DISE', person: 'Javier/Parisa, ESA/ICF', tentative: true },
    { workstream: 'implementation', org: 'DWR-DISE', person: 'ESA/ICF', tentative: true },
    { workstream: 'compliance', org: 'Consultant', person: 'beyond 10.19.1 coverage', tentative: true },
  ],
  'STY-016': [
    { workstream: 'lead', org: 'DWR-DISE', person: 'Brian S. (smelt)' },
    { workstream: 'design', org: 'DWR-DISE', person: 'Consultants', tentative: true },
    { workstream: 'implementation', org: 'DWR-DISE', person: 'Consultants', tentative: true },
  ],
  'STY-017': [
    { workstream: 'lead', org: 'DWR-DCO', person: 'DCA coordination likely', tentative: true },
    { workstream: 'implementation', org: 'DWR-DISE', person: 'Ellen', tentative: true },
    { workstream: 'baseline', org: 'DWR-DISE', person: 'Ellen', tentative: true },
    { workstream: 'near-field', org: 'DWR-DISE', person: 'per 10.19.1 leads', tentative: true },
  ],
  'STY-018': [
    { workstream: 'lead', org: 'DWR-DISE', person: 'Ellen' },
    { workstream: 'design', org: 'DWR-DISE', person: 'Ellen' },
    { workstream: 'implementation', org: 'DWR-DISE', person: 'Ellen, Consultants', tentative: true },
  ],
  'STY-019': [
    { workstream: 'lead', org: 'DCA' },
    { workstream: 'operations', org: 'DCA Contractor', tentative: true },
    { workstream: 'implementation', org: 'Consultant', person: 'ESA', tentative: true },
    { workstream: 'modeling', org: 'DWR-DCO/BDO', tentative: true },
  ],
  'STY-020': [
    { workstream: 'lead', org: 'DWR-DCO' },
    { workstream: 'implementation', org: 'Consultant', person: 'ESA' },
    { workstream: 'compliance', org: 'DWR-DCO', person: 'CDFW liaison', tentative: true },
  ],
  'STY-021': [
    { workstream: 'lead', org: 'DWR-DISE', person: 'FGS working group (DWR/CDFW/USFWS/NMFS)' },
    { workstream: 'design', org: 'Consultant', person: 'ESA / cbec', tentative: true },
    { workstream: 'implementation', org: 'Consultant', person: 'ESA Fisheries', tentative: true },
    { workstream: 'engineering', org: 'DCA', tentative: true },
  ],
};
// ── MILESTONES: the immovable anchors the plan back-plans from, grounded in the
//    Prior-to-2030 Timelines Memo (project phases + MMRP Att. 2 citations). The
//    Readiness view and the timelines-memo export derive every must-finish-by /
//    must-start-by chain from these; nothing downstream stores derived dates. ──
export const MILESTONES: Milestone[] = [
  {
    id: 'ms-baseline',
    name: 'Baseline monitoring',
    kind: 'phase',
    month: '2028-10',
    endMonth: '2034-01',
    windowLabel: 'WY2029 – 2034',
    citation: 'ITP: baseline monitoring for at least five (5) years prior to initiation of in-water construction.',
  },
  {
    id: 'ms-design-30',
    name: '30% Design',
    kind: 'design',
    month: '2031-10',
    windowLabel: '2031',
    citation: 'MMRP Att. 2: study results shall be available no less than one year prior to finalization of 30% Project design.',
  },
  { id: 'ms-design-60', name: '60% Design', kind: 'design', month: '2032-10', windowLabel: '2032' },
  {
    id: 'ms-construction',
    name: 'In-water construction (cofferdam & intakes)',
    kind: 'construction',
    month: '2034-01',
    windowLabel: '2034',
  },
  { id: 'ms-ops-1', name: 'Phase 1 Operations', kind: 'operations', month: '2043-01', windowLabel: '2043' },
  { id: 'ms-ops-2', name: 'Phase 2 Operations', kind: 'operations', month: '2044-01', windowLabel: '2044' },
];

// ── Study-tier deadline links: which anchor DRIVES each study, and the due month
//    its condition text implies. Must-start-by is never stored — the projection
//    computes it from the task schedule. STY-018 (Sediment & Turbidity) deliberately
//    carries no regulatory deadline (exercises the no-deadline rendering). ──
const STUDY_DEADLINE: Record<string, { drivenBy: string; deadline: string }> = {
  'STY-014': { drivenBy: 'ms-construction', deadline: '2033-09' }, // ≥5 water years of survival baseline before WY2034 in-water work
  'STY-015': { drivenBy: 'ms-design-30', deadline: '2031-03' }, //   hotspot characterization reported inside the 30% design window
  'STY-016': { drivenBy: 'ms-construction', deadline: '2033-09' }, // abundance & distribution rides the same baseline suite as 10.19.1
  'STY-017': { drivenBy: 'ms-baseline', deadline: '2028-10' }, //    station installed BEFORE baseline monitoring commences (MMRP)
  'STY-019': { drivenBy: 'ms-ops-1', deadline: '2043-01' }, //       effectiveness monitoring running at Phase 1 operations start
  'STY-020': { drivenBy: 'ms-ops-1', deadline: '2044-09' }, //       trend baseline established ahead of the decadal review
  'STY-021': { drivenBy: 'ms-design-30', deadline: '2030-01' }, //   recommended FGS plan due one year before 30% design finalization
};

// ── Plan-level ASSUMPTIONS & OPEN QUESTIONS — the memo's judgment stratum:
//    authored positions that cannot be derived and must survive regeneration. ──
export const PLAN_ASSUMPTIONS: PlanAssumption[] = [
  {
    kind: 'question',
    text: 'Do water-year deadlines mean the START of that water year? (A 2029 deadline would mean October 2028.)',
  },
  {
    kind: 'question',
    text: 'Do milestone deadlines require full completion, or is starting / partial implementation sufficient?',
  },
  {
    kind: 'assumption',
    text: 'Baseline monitoring runs at least five full water years before in-water construction (WY2029–WY2033).',
  },
  {
    kind: 'assumption',
    text: 'Acoustic tags, receivers, and hatchery fish carry long procurement lead times — orders land the water year before each field season.',
  },
];

for (const program of PROGRAMS)
  for (const study of program.children) {
    study.lead = STUDY_LEAD[study.id];
    study.roles = STUDY_ROLES[study.id];
    const dl = STUDY_DEADLINE[study.id];
    if (dl) {
      study.drivenBy = dl.drivenBy;
      study.deadline = dl.deadline;
    }
  }

/** Synthetic root over the programs — used only for the whole-plan header roll-up. */
export const PLAN_ROOT: HierNode = {
  id: 'PLAN',
  tier: 'program',
  name: 'Covered Fish Species Monitoring & Science Plan',
  funding: [],
  children: PROGRAMS,
};

// ── PLAN_SECTIONS: the FIXED draft science plan's numbered outline ────────────
// Chapter/section numbering and chapter-level titles transcribe the real Feb-2026
// draft ("Covered Fish Species Monitoring and Science Plan — DCP ITP COA 10.18");
// the 3.5.x sketch sections carry THIS fixture's study set, and excerpts are
// condensed. Sections cite COAs (families resolve to Commitments, dot-numbers to
// Studies); review comments anchor to sections. The document is fixed — only
// comment status is live data.
export const PLAN_SECTIONS: PlanSection[] = [
  { id: 'sec-1', number: '1', title: 'Introduction, Background, and Purpose', level: 1, coaRefs: [] },
  {
    id: 'sec-1-1', number: '1.1', title: 'Introduction and Background', level: 2, parentId: 'sec-1', coaRefs: [],
    excerpt: 'The proposed Delta Conveyance Project will construct and operate new conveyance facilities in the North Delta along the Sacramento River. On February 14, 2025, CDFW issued Incidental Take Permit No. 2081-2024-018-00 under CESA for construction and operation of the DCP.',
  },
  {
    id: 'sec-1-2', number: '1.2', title: 'Purpose', level: 2, parentId: 'sec-1', coaRefs: ['10.18'],
    excerpt: 'The purpose of the Science Plan is to create a pathway for DWR to fulfill its requirements under COA 10.18, and the procedures to facilitate the review, revision, and finalization of the CDFW-approved plan and all plans and reports required in its conditions.',
  },
  { id: 'sec-2', number: '2', title: 'Scope of the Science Plan', level: 1, coaRefs: [] },
  {
    id: 'sec-2-1', number: '2.1', title: 'Scope', level: 2, parentId: 'sec-2', coaRefs: ['10.19', '10.20', '10.21', '10.26'],
    excerpt: 'The plan focuses on study elements related to ITP COA 10.18 and the procedures for review, revision, and finalization of all plans and reports required in the covered conditions of approval.',
  },
  {
    id: 'sec-2-2', number: '2.2', title: 'Relationship to State Water Project Operations', level: 2, parentId: 'sec-2', coaRefs: [],
    excerpt: 'DCP facilities will be operated in coordination with existing SWP South Delta pumping facilities, in compliance with State and federal regulatory requirements.',
  },
  { id: 'sec-3', number: '3', title: 'Studies', level: 1, coaRefs: [] },
  {
    id: 'sec-3-1', number: '3.1', title: 'Studies Overview', level: 2, parentId: 'sec-3', coaRefs: ['10.19', '10.20', '10.21', '10.26'],
    excerpt: 'DWR will initiate monitoring studies to establish baseline aquatic conditions and conduct a minimum of five years of monitoring before initiating DCP in-water construction activities.',
  },
  {
    id: 'sec-3-2', number: '3.2', title: 'Study Development', level: 2, parentId: 'sec-3', coaRefs: [],
    excerpt: 'Study sketches describe the overall intent and direction of the Science Program rather than finalized study designs; each will be progressively developed into a full study plan through continued coordination with CDFW.',
  },
  {
    id: 'sec-3-3', number: '3.3', title: 'Study Plan Requirements', level: 2, parentId: 'sec-3', coaRefs: [],
    excerpt: 'Table 1 details the general requirements and key considerations for each study plan; these requirements are treated as individual sections of each plan.',
  },
  {
    id: 'sec-3-4', number: '3.4', title: 'Data Management Considerations', level: 2, parentId: 'sec-3', coaRefs: [],
    excerpt: 'Each study plan will define methods for data collection, quality assurance, documentation, storage, and sharing, following common data standards that enable interoperability among DWR, CDFW, and partner agencies.',
  },
  {
    id: 'sec-3-5', number: '3.5', title: 'Study Sketches', level: 2, parentId: 'sec-3', coaRefs: [],
    excerpt: 'One sketch per condition of approval: the core hypotheses, methods, study components, and relevance to DCP effects of the work proposed for each COA.',
  },
  {
    id: 'sec-3-5-1', number: '3.5.1', title: 'Condition of Approval 10.19.1 (Migration & Survival Study)', level: 3, parentId: 'sec-3-5', coaRefs: ['10.19.1'],
    excerpt: 'Acoustic-telemetry evaluation of juvenile salmonid survival and routing in the near-field intake reach and through-Delta, establishing the preconstruction baseline required before in-water work.',
  },
  {
    id: 'sec-3-5-2', number: '3.5.2', title: 'Condition of Approval 10.19.2 (Predation Study)', level: 3, parentId: 'sec-3-5', coaRefs: ['10.19.2'],
    excerpt: 'Hydroacoustic surveys, diet and eDNA sampling, and exposure modeling to characterize predation risk and identify hotspots near the North Delta intakes.',
  },
  {
    id: 'sec-3-5-3', number: '3.5.3', title: 'Condition of Approval 10.19.3 (Abundance & Distribution Study)', level: 3, parentId: 'sec-3-5', coaRefs: ['10.19.3'],
    excerpt: 'Near-field and far-field surveys of covered-species abundance and distribution at the North Delta intakes, including a technology pilot to select the best abundance-measurement methods before baseline monitoring begins.',
  },
  {
    id: 'sec-3-5-4', number: '3.5.4', title: 'Condition of Approval 10.20.1 (Installation of New Real-time Monitoring Station)', level: 3, parentId: 'sec-3-5', coaRefs: ['10.20.1'],
    excerpt: 'Installation and rating of a new real-time monitoring station downstream of Intake C before initiation of preconstruction baseline monitoring.',
  },
  {
    id: 'sec-3-5-5', number: '3.5.5', title: 'Condition of Approval 10.20.2 (Sediment & Turbidity Monitoring)', level: 3, parentId: 'sec-3-5', coaRefs: ['10.20.2'],
    excerpt: 'Continuous sediment and turbidity monitoring at the North Delta diversions, coordinated with the real-time monitoring station, to characterize suspended-sediment and turbidity conditions.',
  },
  {
    id: 'sec-3-5-6', number: '3.5.6', title: 'Condition of Approval 10.21.1 (Hydrodynamics at Georgiana Slough Monitoring)', level: 3, parentId: 'sec-3-5', coaRefs: ['10.21.1'],
    excerpt: 'Hydrodynamic monitoring at Georgiana Slough to characterize flow split and routing, informing the flow-reversal and routing-minimization analyses under COA 10.21.7.',
  },
  {
    id: 'sec-3-5-7', number: '3.5.7', title: 'Condition of Approval 10.21.2 (Covered Fish Species Life Cycle Models)', level: 3, parentId: 'sec-3-5', coaRefs: ['10.21.2'],
    excerpt: 'Refinement and evaluation of covered-species life-cycle models to incorporate DCP operations, drawing on the fish and water-quality monitoring studies to identify and address data gaps.',
  },
  {
    id: 'sec-3-5-8', number: '3.5.8', title: 'Condition of Approval 10.26 (Fish Guidance System)', level: 3, parentId: 'sec-3-5', coaRefs: ['10.26'],
    excerpt: 'Field evaluation across winters 26/27 and 27/28 of whether, and how, a fish guidance system should be incorporated into the North Delta intake structures, with a recommendation due one year before 30% design finalization.',
  },
];

/** COA → its sketch section (the document anchor for study-scoped comments). */
const SKETCH_SECTION_BY_COA: Record<string, string> = Object.fromEntries(
  PLAN_SECTIONS.filter((s) => s.parentId === 'sec-3-5').flatMap((s) => s.coaRefs.map((c) => [c, s.id])),
);

// ── STUDY_PROFILES: the authored science-plan satellite, keyed by COA ─────────
// Projected from the legacy register corpus (./fish-studies.ts) for exactly the
// COAs the work-breakdown covers. The projection takes ONLY authored content —
// the register's schedule/status/lead/roles fields are dead for these COAs (the
// work-breakdown owns execution). Each fact still lives once: the corpus stores
// it, this module is the sole live doorway to it.
const PLAN_COAS = new Set(
  PROGRAMS.flatMap((p) => p.children.map((s) => s.coaRef)).filter((c): c is string => !!c),
);

export const STUDY_PROFILES: Record<string, StudyProfile> = Object.fromEntries(
  STUDIES.filter((s) => PLAN_COAS.has(s.coaNumber)).map((s) => [
    s.coaNumber,
    {
      coaRef: s.coaNumber,
      category: s.category,
      studyProgram: s.studyProgram,
      method: s.method,
      agencies: s.agencies,
      focalSpecies: s.focalSpecies,
      phases: s.phases,
      timeframe: s.timeframe,
      planStatus: s.planStatus,
      deliverables: s.deliverables,
      informs: s.informs,
      informedBy: s.informedBy,
      regulatoryRefs: s.regulatoryRefs,
      planning: s.planning,
      sketch: s.sketch,
      // Study-scoped comments anchor to the study's sketch SECTION of the draft
      // plan (document-side anchor), alongside their sketch-field anchor.
      reviewComments: s.reviewComments?.map((c) => ({
        ...c,
        sectionId: c.sectionId ?? SKETCH_SECTION_BY_COA[s.coaNumber],
      })),
    },
  ]),
);

/** COA → display name, for rendering dependency references (informs / informed by). */
export const COA_NAMES: Record<string, string> = Object.fromEntries(
  STUDIES.map((s) => [s.coaNumber, s.name]),
);

// ── PLAN_COMMENTS: plan-level review comments (not scoped to any study) ───────
// Anchored to sections of chapters 1–3 rather than a study sketch. Same record
// type as the study threads; the corpus text/responses are fixed — only status
// is live, managed by the compliance lead.
export const PLAN_COMMENTS: ReviewComment[] = [
  {
    id: 'PC-01',
    author: 'CDFW',
    agency: true,
    date: '2026-03-12',
    field: 'general',
    sectionId: 'sec-3-1',
    intent: 'scope-dispute',
    status: 'open',
    text: 'The overview should state explicitly which studies must be complete before Phase 1 versus Phase 2 authorization; the current framing defers all sequencing to Appendix A.',
  },
  {
    id: 'PC-02',
    author: 'CDFW',
    agency: true,
    date: '2026-03-12',
    field: 'general',
    sectionId: 'sec-3-3',
    intent: 'governance',
    status: 'open',
    text: 'Table 1 requirements should include a data-sharing timeline for each study plan; CDFW review cannot proceed on rolling data deliveries otherwise.',
  },
  {
    id: 'PC-03',
    author: 'CDFW',
    agency: true,
    date: '2026-04-02',
    field: 'general',
    sectionId: 'sec-3-4',
    intent: 'governance',
    status: 'addressed',
    text: 'QA procedures for continuous telemetry data should follow the interagency standard, and versioning must be specified for derived datasets.',
    replies: [
      {
        author: 'Greenwood, Marin',
        date: '2026-04-18',
        text: 'Section 3.4 now cites the interagency QA standard and commits each study plan to a versioned derived-dataset register.',
      },
    ],
  },
  {
    id: 'PC-04',
    author: 'CDFW',
    agency: true,
    date: '2026-02-26',
    field: 'general',
    sectionId: 'sec-2-1',
    intent: 'fix-coa-link',
    status: 'resolved',
    text: 'Scope text cites COA 10.21.9 modeling as within this plan; 10.21.9 is implemented under the real-time operations program, not the Science Plan.',
    replies: [
      {
        author: 'Greenwood, Marin',
        date: '2026-03-05',
        text: 'Removed the 10.21.9 reference from Section 2.1; the real-time operations program is now cited as a related effort only.',
      },
    ],
  },
];
