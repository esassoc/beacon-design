// ─────────────────────────────────────────────────────────────────────────────
// Fish Studies — the FOUR-TIER WORK-BREAKDOWN fixture (the Tasking Gantt's data).
//
//     Program → Study → Sub-study → Task
//
// The TYPES + roll-up helpers are the contract in ./fish-model.ts; this file is
// the DATA the second prototype renders:
//
//   • Stable, type-prefixed IDS are identity (PRG-011, STY-014, SUB-021, TSK-001).
//     The ITP COA dot-number (coaRef, e.g. "10.19.1") rides along as a secondary
//     REFERENCE label only — deliberately DECOUPLED from the id so the demo makes
//     the point that the id, not the COA number, is the record's identity.
//   • The TASK is the schedulable, month-by-month leaf: startMonth/endMonth, an
//     owner, a status. Field-season timing honors the fish-study calendar (dry-
//     season Apr–Sep install/analyze/report; winter-freshet Oct–Mar deploy/tag).
//   • Funding is entered per water year at ANY node; task funding sums upward.
//   • Status + span + funding all ROLL UP: Task → Sub-study → Study → Program.
//
// Content is grounded in the DCP science plan (Migration & Survival 10.19.1 with
// near-/far-field survival; Predation 10.19.2; the water-quality station network
// 10.20.1) but the tasks, months, owners, and dollar magnitudes are ILLUSTRATIVE
// planning fixtures — deterministic, invented, NOT CDFW/DWR contract values.
// ─────────────────────────────────────────────────────────────────────────────
import type { FundingEntry, HierNode, TaskStatus } from './fish-model';
import { waterYearOf } from './fish-model';

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
    'PRG-011',
    '10.19',
    'Fish Migration, Survival & Predation Studies',
    [
      branch(
        'study',
        'STY-014',
        '10.19.1',
        'Juvenile Salmonid Migration & Survival',
        [
          branch(
            'substudy',
            'SUB-021',
            '10.19.1a',
            'Near-field intake behavior & survival',
            [
              task('TSK-001', '10.19.1a.1', 'Fabricate & install acoustic receiver array', '2028-04', '2028-09', 'cbec eco-engineering', 'complete', 620_000),
              task('TSK-002', '10.19.1a.2', 'Winter-freshet acoustic tagging season', '2028-10', '2029-03', 'ESA Fisheries', 'on-track', 540_000),
              task('TSK-003', '10.19.1a.3', 'Receiver retrieval & detection QA', '2029-04', '2029-08', 'ESA Fisheries', 'on-track', 210_000),
              task('TSK-004', '10.19.1a.4', 'Draft near-field survival memo', '2029-09', '2029-12', 'ESA Fisheries', 'not-started', 160_000),
            ],
          ),
          branch(
            'substudy',
            'SUB-022',
            '10.19.1b',
            'Far-field through-Delta survival & routing',
            [
              task('TSK-005', '10.19.1b.1', 'Regional receiver network build-out', '2028-05', '2028-10', 'DWR-DISE', 'at-risk', 880_000, {
                notes: 'Two of eleven planned receiver sites still need encroachment permits from the reclamation districts.',
              }),
              task('TSK-006', '10.19.1b.2', 'Multi-year tag release & tracking', '2028-11', '2031-03', 'ESA Fisheries', 'on-track', 1_650_000),
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
        'Predation Risk & Hotspot Characterization',
        [
          branch(
            'substudy',
            'SUB-023',
            '10.19.2a',
            'Predator density & distribution surveys',
            [
              task('TSK-008', '10.19.2a.1', 'Baseline predator hydroacoustic survey', '2029-04', '2029-09', 'DWR-DCO', 'on-track', 300_000),
              task('TSK-009', '10.19.2a.2', 'Predation hotspot mapping', '2029-10', '2030-03', 'DWR-DCO', 'blocked', 260_000, {
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
        'Salmonid Outmigration Timing & Cues',
        [
          branch(
            'substudy',
            'SUB-025',
            '10.19.3a',
            'Rotary screw-trap timing monitoring',
            [
              task('TSK-012', '10.19.3a.1', 'RST installation & calibration', '2028-08', '2028-11', 'DWR-DCO', 'complete', 180_000),
              task('TSK-013', '10.19.3a.2', 'Outmigration timing field seasons', '2028-12', '2032-03', 'DWR-DCO', 'on-track', 1_240_000),
              task('TSK-014', '10.19.3a.3', 'Migration cue & timing analysis', '2032-04', '2032-10', 'ESA Fisheries', 'not-started', 280_000),
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
    'PRG-012',
    '10.20',
    'Water Quality & Monitoring Infrastructure',
    [
      branch(
        'study',
        'STY-017',
        '10.20.1',
        'Continuous Water-Quality Station Network',
        [
          branch(
            'substudy',
            'SUB-026',
            '10.20.1a',
            'Real-time station build-out',
            [
              task('TSK-015', '10.20.1a.1', 'Station siting & regulatory clearance', '2027-04', '2027-12', 'DWR-DISE', 'at-risk', 220_000, {
                notes: 'Two candidate sites overlap CDFW-designated sensitive habitat; siting under review.',
              }),
              task('TSK-016', '10.20.1a.2', 'Sensor procurement & installation', '2028-01', '2028-08', 'DWR-DISE', 'on-track', 640_000),
              task('TSK-017', '10.20.1a.3', 'Telemetry commissioning', '2028-09', '2029-01', 'DWR-DISE', 'not-started', 180_000),
            ],
          ),
          branch(
            'substudy',
            'SUB-027',
            '10.20.1b',
            'Data QA/QC & pipeline',
            [
              task('TSK-018', '10.20.1b.1', 'QA/QC protocol authoring', '2028-04', '2028-08', 'ESA Data', 'on-track', 120_000),
              task('TSK-019', '10.20.1b.2', 'CDEC / Beacon data-pipeline integration', '2028-09', '2029-03', 'ESA Data', 'not-started', 200_000),
            ],
          ),
        ],
      ),
      branch(
        'study',
        'STY-018',
        '10.20.2',
        'Harmful Algal Bloom Monitoring',
        [
          branch(
            'substudy',
            'SUB-028',
            '10.20.2a',
            'HAB sampling program',
            [
              task('TSK-020', '10.20.2a.1', 'Sampling design & QAPP', '2029-04', '2029-08', 'ESA / DWR-DCO', 'on-track', 140_000),
              task('TSK-021', '10.20.2a.2', 'HAB field season 1', '2029-09', '2030-03', 'DWR-DCO', 'not-started', 310_000),
              task('TSK-022', '10.20.2a.3', 'Toxin lab analysis & reporting', '2030-04', '2030-09', 'ESA Lab (subaward)', 'not-started', 190_000),
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
    'PRG-013',
    '10.21',
    'Operations-Phase Effectiveness Monitoring',
    [
      branch(
        'study',
        'STY-019',
        '10.21.1',
        'Long-term Salmonid Response Monitoring',
        [
          branch(
            'substudy',
            'SUB-029',
            '10.21.1a',
            'Post-construction survival verification',
            [
              task('TSK-023', '10.21.1a.1', 'Ops-phase acoustic telemetry seasons', '2034-10', '2038-03', 'ESA Fisheries', 'not-started', 2_400_000),
              task('TSK-024', '10.21.1a.2', 'Five-year survival trend synthesis', '2038-04', '2039-03', 'ESA Fisheries', 'not-started', 420_000),
            ],
          ),
          branch(
            'substudy',
            'SUB-030',
            '10.21.1b',
            'Adaptive-management triggers & response',
            [
              task('TSK-025', '10.21.1b.1', 'Trigger framework & thresholds', '2033-04', '2033-12', 'ESA / CDFW liaison', 'not-started', 260_000),
              task('TSK-026', '10.21.1b.2', 'Annual trigger evaluations', '2034-04', '2041-09', 'DWR-DCO', 'not-started', 1_120_000),
            ],
            { constraints: ['Begins at Phase 1 operations (WY2034)'] },
          ),
        ],
      ),
      branch(
        'study',
        'STY-020',
        '10.21.2',
        'Decadal Ecosystem Trend Reporting',
        [
          branch(
            'substudy',
            'SUB-031',
            '10.21.2a',
            'Integrated monitoring synthesis',
            [
              task('TSK-027', '10.21.2a.1', 'Mid-operations synthesis report', '2037-10', '2038-09', 'ESA', 'not-started', 380_000),
              task('TSK-028', '10.21.2a.2', 'Decadal science-plan review & CDFW report-out', '2041-10', '2042-09', 'ESA / DWR-DCO', 'not-started', 460_000),
            ],
          ),
        ],
      ),
    ],
    {
      constraints: ['Funding ceiling $8.0M (illustrative)', 'Runs Phase 1 operations (WY2034) through the decadal review (WY2042)'],
    },
  ),
];

/** Synthetic root over the two programs — used only for the whole-plan header roll-up. */
export const PLAN_ROOT: HierNode = {
  id: 'PLAN',
  tier: 'program',
  name: 'Covered Fish Species Monitoring & Science Plan',
  funding: [],
  children: PROGRAMS,
};
