// ─────────────────────────────────────────────────────────────────────────────
// Geotech Work Area Clearance fixture — SIMPLIFIED MODEL variant.
//
// This is the side-by-side counterpart to geotech-fixture.ts. Same work areas
// (the 231 real KMZ sites), same observations/buffers, same derived work-area
// rollup and blocked-until math, same field-map palette. The ONE difference is
// how a discipline's status is held:
//
//   geotech-fixture.ts (the "rich" model)
//     A discipline owns a LIST of review events. Status is DERIVED — "the
//     latest completed review sets the status"; outcome-less reviews ride the
//     history as scheduled. Powerful, but a lot to demo/communicate, and it
//     presumes we have modeled each discipline's internal review workflow.
//
//   geotech-fixture-simple.ts (THIS file — the "direct" model)
//     A discipline owns a SINGLE status, SET BY THE OWNER. Surveys / field
//     notes / relocations attach as an append-only EVIDENCE LOG — they justify
//     the status, they do not derive it. Simpler to explain, respects each
//     discipline lead's control over their own call (the data-ownership win),
//     and forward-compatible: derivation can be added later, per discipline,
//     once we learn how each one actually works.
//
// Nothing here is stored "derived" at the WORK-AREA level — a work area's
// clearance status and blocked-until date are still COMPUTED from its
// per-discipline statuses plus any active observation buffers it sits inside
// (see helpers at the bottom). The simplification is purely at the DISCIPLINE
// level: status is set, not derived from a review list.
// ─────────────────────────────────────────────────────────────────────────────
import sitesJson from './geotech-sites.json';

/** A clearance review dimension. Biological is the workhorse; the others gate rarely. */
export type GateDimension = 'biological' | 'cultural' | 'noise' | 'geology';

/**
 * Clearance ladder for one discipline (and for the derived work-area rollup).
 * `not-required` is OFF-LADDER and discipline-level only: an explicit recorded
 * determination that no review of that dimension is needed. It never appears as
 * a derived work-area status (deriveStatus ignores it — same as an absent
 * discipline), so it stays out of STATUS_ORDER, the map legend, and status
 * filters. `provisional-block` is the mirror case — DERIVED-ONLY, never
 * discipline-level: the system detected a live buffer conflict but no human has
 * recorded a blocking determination yet (the system detects; managers decide).
 * It must never be offered in the discipline-status editor. `not-surveyed` is
 * likewise derived-only — it is the ABSENCE of any discipline status (nobody
 * has looked yet), represented by no entry in `disciplines`.
 */
export type ClearanceStatus =
  | 'cleared'
  | 'cleared-stipulations'
  | 'blocked'
  | 'provisional-block'
  | 'inaccessible'
  | 'survey-scheduled'
  | 'not-surveyed'
  | 'not-required';

/** The statuses a discipline lead can SET in the editor (the selectable ladder).
    Excludes the two derived-only states (`provisional-block`, `not-surveyed`). */
export const SELECTABLE_STATUSES: ClearanceStatus[] = [
  'cleared',
  'cleared-stipulations',
  'survey-scheduled',
  'blocked',
  'inaccessible',
  'not-required',
];

/** One append-only evidence note on a discipline — a clearance survey result, a
    field-biologist email, a relocation decision. It JUSTIFIES the status; it
    does NOT derive it (the simplification). */
export interface EvidenceNote {
  /** When the evidence was recorded / the survey happened (ISO). */
  date: string;
  author?: string;
  text: string;
}

/**
 * A discipline's CURRENT state in the simplified model — one status, set by the
 * owner, with the supporting detail attached. No review list, no
 * latest-completed-wins derivation.
 */
export interface DisciplineState {
  /** The status the discipline lead set. Never `provisional-block` /
      `not-surveyed` (those are derived-only). */
  status: ClearanceStatus;
  /** Date the status was determined (ISO) — completion date, or the scheduled
      visit date when status is `survey-scheduled`. */
  date?: string;
  reviewer?: string;
  note?: string;
  stipulations?: string[];
  /** Blocking statuses only — null = blocked until further notice. */
  blockedUntil?: string | null;
  /** Append-only evidence justifying the status (surveys, field notes,
      relocations). Optional; does NOT derive the status. */
  log?: EvidenceNote[];
}

export interface WorkArea {
  /** e.g. 'DCTR2-DH-010' (the Beacon WorkArea entity). */
  id: string;
  constructionPackage: string;
  /** Human label derived from the ID prefix (DCTR2 → 'Tunnel Reach 2', …). */
  segment: string;
  lat: number;
  lng: number;
  plannedStartDate?: string;
  /** Completed or scheduled site clearance visit (ISO). */
  clearanceVisitDate?: string;
  /** 30-day landowner notification sent (ISO). */
  notificationDate?: string;
  /** Exploration method from the KMZ attribute table (e.g. 'Boring', 'CPT'). */
  method?: string;
  /** Planned exploration depth in feet (KMZ). */
  depthFt?: number;
  /** Assessor's parcel number (KMZ). */
  parcelApn?: string;
  /** DCP parcel number, e.g. 'SJC-0459' (KMZ). */
  dcpn?: string;
  /** County the site falls in (KMZ). */
  county?: string;
  /** Entry agreement covering site access, e.g. 'TEP Batch 5' (KMZ). */
  entryAgreement?: string;
  /** Per-discipline current state. NO entry for a dimension = nobody has looked
      yet ("Not reviewed" — an unknown, derives 'not-surveyed'). A `not-required`
      status = an explicit recorded determination that no review is needed. Both
      leave the rollup unconstrained. */
  disciplines: Partial<Record<GateDimension, DisciplineState>>;
  /** VERBATIM email note from the field biologists. */
  biologistNote?: string;
}

export type ObservationKind = 'nesting-bird' | 'resource';

export interface Observation {
  /** Monitoring Portal ID, e.g. 'SWHA-2289-05182026'. */
  id: string;
  species: string;
  speciesCode: string;
  kind: ObservationKind;
  status: 'active' | 'tracking';
  lat: number;
  lng: number;
  /** Avoidance buffer radius. 0 = tracking-only, no avoidance buffer. */
  bufferFt: number;
  firstObserved: string;
  /** Est fledge / inactive date → drives "blocked until". */
  estEndDate?: string | null;
  latestLog?: string;
  /** Work area where it was observed, if tied to one. */
  workAreaId?: string;
}

/** The prototype's frozen clock — all date math runs from here, never Date.now(). */
export const TODAY = '2026-06-11';

const PACKAGE = '2024-2029 Geotechnical Activities';

// ID prefix → segment label. PROVISIONAL: client to confirm.
const SEGMENT_LABEL: Record<string, string> = {
  DCTR1: 'Tunnel Reach 1',
  DCTR2: 'Tunnel Reach 2',
  DCTR3: 'Tunnel Reach 3',
  DCTR4: 'Tunnel Reach 4',
  DCRDS: 'Roads',
  DCRAI: 'Rail Alignment',
  DCSHF: 'Shaft Sites',
  DCBPP: 'Bethany Pumping Plant',
  DCIN3: 'Intake 3',
  DCIN5: 'Intake 5',
  DCLEV: 'Levees',
  DCPWR: 'Power',
};

// ── Curated clearance overlay (per-discipline state ← DWR) ────────────────────
// Faithfully migrated from geotech-fixture.ts's review lists: each discipline's
// CURRENT outcome (the newest review that had an outcome) becomes its `status`,
// carrying that review's note / reviewer / date / stipulations / blockedUntil.
// Outcome-less (scheduled) reviews → status 'survey-scheduled' at the scheduled
// date. Extra historical reviews (re-surveys, pending second-discipline visits)
// are preserved in the discipline's `log` so NO clearance story is lost.
const CURATED: Record<string, Partial<WorkArea> & { id: string }> = {
  // The May clearance survey found the SWHA nest (→ blocked until est. fledge);
  // the outcome-less Sept post-fledge re-survey is preserved as an evidence
  // note (in the rich model it rode the history as a scheduled review).
  'DCTR2-DH-010': {
    id: 'DCTR2-DH-010',
    clearanceVisitDate: '2026-05-18',
    disciplines: {
      biological: {
        status: 'blocked',
        date: '2026-05-18',
        reviewer: 'C. Anderson (ESA)',
        note: 'Active SWHA nest within the 0.5-mile no-disturbance buffer — discovered during the site clearance visit.',
        blockedUntil: '2026-07-24',
        log: [
          {
            date: '2026-09-02',
            author: 'C. Anderson (ESA)',
            text: 'Post-fledge confirmation re-survey planned — SWHA est. fledge Jul 24, 2026.',
          },
        ],
      },
    },
    biologistNote: 'This was the site clearance visit that identified the SWHA nest on 5/18.',
  },
  // Survey scheduled — but the SWHA buffer blocks it anyway (provisional-block).
  'DCRDS-DH-184': {
    id: 'DCRDS-DH-184',
    plannedStartDate: '2026-06-29',
    clearanceVisitDate: '2026-06-15',
    notificationDate: '2026-05-15',
    disciplines: { biological: { status: 'survey-scheduled', date: '2026-06-15' } },
    biologistNote:
      '5/27 email (from H. Barbare):  30-day Notification was scheduled to be sent 5/15/2026 for 6/15/2026 site clearance visit and 6/29/2026 work. This location is the closest to the nest.',
  },
  // Survey scheduled — but the REAL coords put it INSIDE the SWHA buffer
  // (~0.36 mi), so the derived status is provisional-block until fledge.
  'DCTR2-DH-012': {
    id: 'DCTR2-DH-012',
    plannedStartDate: '2026-06-30',
    clearanceVisitDate: '2026-06-16',
    notificationDate: '2026-05-15',
    disciplines: { biological: { status: 'survey-scheduled', date: '2026-06-16' } },
    biologistNote:
      '5/27 email (from H. Barbare) 30-day Notification was scheduled to be sent 5/15/2026 for 6/16/2026 site clearance visit and 6/30/2026 start of work.',
  },
  'DCTR2-DH-100': {
    id: 'DCTR2-DH-100',
    disciplines: {
      biological: {
        status: 'inaccessible',
        date: '2026-06-03',
        reviewer: 'C. Anderson (ESA)',
        note: 'Road cannot be mowed (nesting birds, burrows within 200 ft of aquatic habitat) — DH not accessible.',
      },
    },
    biologistNote:
      "6/3 email:  This site is located along an unused dirt road on state lands in a wildlife preserve. The road would require mowing to access the DH. There is an irrigation canal with water and tulles along the border of the road. Several birds were observed to be nesting or were believed to be nesting along the road, in the slough, and in the adjacent field including red-winged blackbirds (based on behavior, did not observe nest), killdeer (observed one nest, two likely), and possibly a gold finch nest. One raptor nest was identified on the west side of the parcel approx. 2,500' to the west of the access road. The distance was too far to identify the raptor, but it was likely a red-tailed or Swainson's hawk nest. Due to the burrows in the road within 200' of aquatic habitat and the multiple nests it was determined by the group that the road can't be mowed, and the DH is not accessible.",
  },
  'DCRDS-DH-294': {
    id: 'DCRDS-DH-294',
    plannedStartDate: '2026-06-17',
    disciplines: {
      biological: {
        status: 'cleared-stipulations',
        date: '2026-06-03',
        reviewer: 'C. Anderson (ESA)',
        stipulations: [
          'Flag burrows for avoidance',
          'Vehicles stay within established tire tracks',
          'Biologist supervision when entering/exiting',
          "50' buffer from mallard nest if still present at drilling",
        ],
      },
    },
    biologistNote:
      "6/3 email: DH located in recently cut alfalfa field. Irrigation ditches surround the field and one access road to the site was available. The irrigation ditches had water and would be considered GGS aquatic habitat.  The field had multiple burrows but is being actively farmed, making it unlikely upland habitat for GGS. The only entrance road tot eh field was approx. 25' and had burrows in it but was actively used based on recent farming activities. The burrows were situated on either side of the road and down the middle. An established path was obvious where vehicles regularly drive that had no burrows. After discussing with Leah, it was determined that the DH could be safely accessed if the burrows were flagged and the vehicles crossed into the field within the established tire tracks and under the supervision of a biologist. A mallard nest was located near the entrance to the alfalfa field. If it is still present during the drilling a 50' buffer will be established from drilling activities.",
  },
  // The multi-discipline showcase: biology says go; geology + noise haven't yet
  // (each scheduled). In the rich model these were three separate reviews; here
  // they are three independent discipline states.
  'DCRAI-DH-014': {
    id: 'DCRAI-DH-014',
    plannedStartDate: '2026-06-17',
    disciplines: {
      biological: {
        status: 'cleared',
        date: '2026-06-03',
        reviewer: 'C. Anderson (ESA)',
        note: 'Highly disturbed gravel work pad; elderberry shrubs >165 ft from access.',
      },
      geology: {
        status: 'survey-scheduled',
        date: '2026-06-18',
        note: 'Site relocated — pending geologist confirmation of the new position.',
      },
      noise: {
        status: 'survey-scheduled',
        date: '2026-06-20',
        note: 'Potential noise issue raised near receptors; acoustic review pending.',
      },
    },
    biologistNote:
      "6/3 email: This DH is located in a gravel work pad. It was moved slightly to be placed outside of a dry roadside ditch and to be situated further from the railroad tracks. There are several large trees, and waterways nearby, but the site is situated in an area that is highly disturbed. A few elderberry shrubs are near the entrance to the road, but they are greater than 165' away.",
  },
  'DCTR1-DH-008': {
    id: 'DCTR1-DH-008',
    plannedStartDate: '2026-06-16',
    disciplines: {
      biological: {
        status: 'cleared',
        date: '2026-06-03',
        reviewer: 'C. Anderson (ESA)',
        note: 'No biological concerns observed 6/2; mowing preferred but not required.',
      },
    },
    biologistNote:
      "6/3 email: This DH was located on the edge of an almond orchard. Some trimming of fruit and or almond trees may be required at the entrance to the row to access the DH. There were no biological concerns at this site, outside of the potential for nesting birds and Crotch's bumblebee (CBB) foraging habitat which were not observed on 6/2. Mowing is not recommended, but is also not required, just preferred.",
  },
  'DCSHF-DH-144': {
    id: 'DCSHF-DH-144',
    plannedStartDate: '2026-06-12',
    disciplines: {
      biological: { status: 'cleared', date: '2026-06-01', reviewer: 'C. Anderson (ESA)' },
    },
    biologistNote:
      '6/1 email:  This site is in an active hayfield. The field has been hayed/baled but the bales have not yet been collected.  The soil surface was cultivated prior to planting and there are no burrows. A stick nest large enough to be a raptor was observed on a hi-voltage electric tower 1,325 feet to the north, but no activity was seen around the nest. There are no wetlands or waters nearby.',
  },
  'DCBPP-DH-034': {
    id: 'DCBPP-DH-034',
    plannedStartDate: '2026-06-16',
    disciplines: {
      biological: { status: 'cleared', date: '2026-06-01', reviewer: 'C. Anderson (ESA)' },
    },
    biologistNote:
      '6/1 email:  This site is in an active hayfield. The field has been hayed/baled but the bales have not yet been collected.  The soil surface was cultivated prior to planting and there are no burrows. A stick nest large enough to be a raptor was observed on a hi-voltage electric tower 1,500 feet to the north, but no activity was seen around the nest. There are no wetlands or waters nearby.',
  },
  'DCBPP-DH-066': {
    id: 'DCBPP-DH-066',
    plannedStartDate: '2026-06-15',
    disciplines: {
      biological: { status: 'cleared', date: '2026-06-01', reviewer: 'C. Anderson (ESA)' },
    },
    biologistNote:
      '6/1 email:  This site is in an active hayfield. The field has been hayed/baled but the bales have not yet been collected.  The soil surface was cultivated prior to planting and there are no burrows. A stick nest, probably not large enough to be a raptor was observed on a hi-voltage electric tower 1,785 feet to the southeast, but no activity was seen around the nest. There are no wetlands or waters nearby.',
  },
  'DCRDS-DH-292': {
    id: 'DCRDS-DH-292',
    plannedStartDate: '2026-06-15',
    disciplines: {
      biological: { status: 'cleared', date: '2026-06-01', reviewer: 'C. Anderson (ESA)' },
    },
    biologistNote:
      '6/1 email:  The site is entirely in a hard-packed gravel road, with annual grassland and ruderal vegetation on either side.  There is an agricultural ditch with water nearby. There are no burrows in the road, nor any burrows in the road outside the site necessary for access.',
  },
  // Blocked with NO end date — "until further notice" (compliance, not phenology).
  'DCRAI-DH-010': {
    id: 'DCRAI-DH-010',
    disciplines: {
      biological: {
        status: 'blocked',
        date: '2026-06-01',
        reviewer: 'C. Anderson (ESA)',
        note: 'Not in compliance with the GGS measure — access requires driving over burrows in the road.',
        blockedUntil: null,
      },
    },
    biologistNote:
      '6/1 email:  The site is entirely in a dirt road. There is an agricultural ditch with water nearby. There are no burrows in the work site, but there are burrows in the road outside the work site that would need to be driven over for access. We were instructed that project vehicles may not drive over burrows in roads. Site is currently not in compliance for the GGS measure due to the need to drive over burrows.',
  },
  'DCRAI-DH-011': {
    id: 'DCRAI-DH-011',
    disciplines: {
      biological: {
        status: 'inaccessible',
        date: '2026-06-01',
        reviewer: 'C. Anderson (ESA)',
        note: 'Not surveyed — surrounded by dense milk thistle.',
      },
    },
    biologistNote:
      '6/1 email:  This site was not surveyed. It was determined to be inaccessible currently due to thickness of milkweed (corrected to milk thistle) surrounding it.',
  },
  'DCRAI-DH-013': {
    id: 'DCRAI-DH-013',
    disciplines: {
      biological: {
        status: 'blocked',
        date: '2026-06-01',
        reviewer: 'C. Anderson (ESA)',
        note: 'Not in compliance with the GGS measure — access requires driving over burrows in the road.',
        blockedUntil: null,
      },
    },
    biologistNote:
      '6/1 email:  The site is entirely in a dirt road.  It is about 190 feet from the San Joaquin River. There are riparian trees and Himalayan blackberry adjacent on one side that will be avoided.  The other side is a row crop (tomato). There are no burrows in the work site, but there are burrows in the road outside the work site that would need to be driven over for access. We were instructed that project vehicles may not drive over burrows in roads. Site is currently not in compliance for the GGS measure due to the need to drive over burrows.',
  },
  // Active common-raven nest (CORA-2695) observed here — stipulated, not blocked.
  'DCRAI-DH-009': {
    id: 'DCRAI-DH-009',
    disciplines: {
      biological: {
        status: 'cleared-stipulations',
        date: '2026-06-04',
        reviewer: 'C. Anderson (ESA)',
        stipulations: ['Monitor CORA nest; avoid nest area until inactive'],
      },
    },
  },
  // No clearance survey yet — SWHA observed soaring overhead 6/9 (tracking only).
  'DCRAI-DH-012': { id: 'DCRAI-DH-012', disciplines: {} },
  // No clearance survey yet — SWHA observed foraging overhead 6/4 (tracking only).
  'DCRAI-DH-006': { id: 'DCRAI-DH-006', disciplines: {} },
};

export const workAreas: WorkArea[] = sitesJson.features.map((f) => {
  // GeoJSON is [lng, lat]; the fixture (like Leaflet) wants lat/lng fields.
  const [lng, lat] = f.geometry.coordinates as [number, number];
  const p = f.properties;
  const prefix = p.id.split('-')[0] ?? p.id;
  return {
    constructionPackage: PACKAGE,
    segment: SEGMENT_LABEL[prefix] ?? prefix,
    lat,
    lng,
    method: p.method,
    depthFt: p.depthFt,
    parcelApn: p.parcelApn,
    dcpn: p.dcpn,
    county: p.county,
    entryAgreement: p.entryAgreement,
    disciplines: {}, // no disciplines = not surveyed
    ...CURATED[p.id],
    id: p.id, // canonical ID always from the KMZ layer
  };
});

// ── Observations (live wildlife ← Monitoring Portal, real IDs) ───────────────
// Verbatim from geotech-fixture.ts — buffers/derivation are identical.
export const observations: Observation[] = [
  {
    id: 'SWHA-2289-05182026',
    species: "Swainson's Hawk",
    speciesCode: 'SWHA',
    kind: 'nesting-bird',
    status: 'active',
    lat: 38.286741,
    lng: -121.455012,
    bufferFt: 2640,
    firstObserved: '2026-05-18',
    estEndDate: '2026-07-24',
    latestLog: 'May 18, 2026, 1:31 PM: Active SWHA nest observed in tree during site clearance visit.',
    workAreaId: 'DCTR2-DH-010',
  },
  {
    id: 'CORA-5830-06052026',
    species: 'Common Raven',
    speciesCode: 'CORA',
    kind: 'nesting-bird',
    status: 'active',
    lat: 38.298616,
    lng: -121.439603,
    bufferFt: 250,
    firstObserved: '2026-05-29',
    estEndDate: '2026-07-05',
    latestLog: 'May 29, 2026, 2:06 PM: Multiple ravens observed around the nest.',
  },
  {
    id: 'CORA-2695-06042026',
    species: 'Common Raven',
    speciesCode: 'CORA',
    kind: 'nesting-bird',
    status: 'active',
    lat: 37.969248,
    lng: -121.382954,
    bufferFt: 250,
    firstObserved: '2026-06-04',
    estEndDate: '2026-07-10',
    latestLog: 'Jun 4, 2026, 11:16 AM: Both ravens perched outside of nest.',
    workAreaId: 'DCRAI-DH-009',
  },
  {
    id: 'KILL-7655-06032026',
    species: 'Killdeer',
    speciesCode: 'KILL',
    kind: 'nesting-bird',
    status: 'active',
    lat: 38.17008,
    lng: -121.433514,
    bufferFt: 100,
    firstObserved: '2026-06-03',
    estEndDate: '2026-07-02',
    latestLog: 'Jun 4, 2026, 2:23 PM: 1 bird on nest, tried to lead us away.',
    workAreaId: 'DCTR2-DH-100',
  },
  {
    id: 'Unknown-5895-06032026',
    species: 'Unknown Raptor',
    speciesCode: 'UNK',
    kind: 'nesting-bird',
    status: 'active',
    lat: 38.17008,
    lng: -121.442649,
    bufferFt: 500,
    firstObserved: '2026-06-03',
    estEndDate: null,
    latestLog: 'Jun 4, 2026, 2:20 PM: Large stick nest with raptor observed; too distant to identify (likely RTHA or SWHA).',
    workAreaId: 'DCTR2-DH-100',
  },
  {
    id: 'MALL-1520-06022026',
    species: 'Mallard',
    speciesCode: 'MALL',
    kind: 'nesting-bird',
    status: 'active',
    lat: 37.967773,
    lng: -121.3848,
    bufferFt: 50,
    firstObserved: '2026-06-02',
    estEndDate: '2026-06-30',
    latestLog: 'Jun 4, 2026, 2:14 PM: A pair observed. Female stayed with nest.',
    workAreaId: 'DCRDS-DH-294',
  },
  {
    id: "Species-Swainson's Hawk-06092026",
    species: "Swainson's Hawk",
    speciesCode: 'SWHA',
    kind: 'resource',
    status: 'tracking',
    lat: 37.967654,
    lng: -121.375906,
    bufferFt: 0,
    firstObserved: '2026-06-09',
    latestLog: "Swainson's hawk observed soaring overhead to the west.",
    workAreaId: 'DCRAI-DH-012',
  },
  {
    id: "Species-Swainson's Hawk-06042026",
    species: "Swainson's Hawk",
    speciesCode: 'SWHA',
    kind: 'resource',
    status: 'tracking',
    lat: 37.970948,
    lng: -121.391278,
    bufferFt: 0,
    firstObserved: '2026-06-04',
    latestLog: "Swainson's hawk observed foraging overhead.",
    workAreaId: 'DCRAI-DH-006',
  },
];

// ── Gate dimensions ───────────────────────────────────────────────────────────
export const GATE_DIMENSIONS: GateDimension[] = ['biological', 'cultural', 'noise', 'geology'];

export const GATE_DIMENSION_LABEL: Record<GateDimension, string> = {
  biological: 'Biological',
  cultural: 'Cultural Resources',
  noise: 'Noise',
  geology: 'Geology',
};

// ── Status model (identical palette to the rich fixture) ──────────────────────
export const STATUS_ORDER: ClearanceStatus[] = [
  'blocked',
  'provisional-block',
  'inaccessible',
  'not-surveyed',
  'survey-scheduled',
  'cleared-stipulations',
  'cleared',
];

export interface StatusMeta {
  key: ClearanceStatus;
  label: string;
  colorVar: string;
  hex: string;
}

export const STATUS_META: Record<ClearanceStatus, StatusMeta> = {
  blocked: { key: 'blocked', label: 'Blocked', colorVar: '--st-blocked', hex: '#d73027' },
  'provisional-block': {
    key: 'provisional-block',
    label: 'Provisional Block',
    colorVar: '--st-provisional-block',
    hex: '#d73027',
  },
  inaccessible: { key: 'inaccessible', label: 'Inaccessible', colorVar: '--st-inaccessible', hex: '#f46d43' },
  'not-surveyed': { key: 'not-surveyed', label: 'Not Surveyed', colorVar: '--st-not-surveyed', hex: '#9aa0a6' },
  'survey-scheduled': {
    key: 'survey-scheduled',
    label: 'Survey Scheduled',
    colorVar: '--st-survey-scheduled',
    hex: '#74add1',
  },
  'cleared-stipulations': {
    key: 'cleared-stipulations',
    label: 'Cleared w/ Stipulations',
    colorVar: '--st-cleared-stipulations',
    hex: '#8db94e',
  },
  cleared: { key: 'cleared', label: 'Cleared', colorVar: '--st-cleared', hex: '#1a9850' },
  'not-required': {
    key: 'not-required',
    label: 'No Review Required',
    colorVar: '--st-not-required',
    hex: '#989898',
  },
};

// ── Derived status model (nothing below is stored — all computed) ─────────────

const EARTH_RADIUS_FT = 20_902_231; // 6,371 km

/** Haversine distance between two points, in feet. */
export function distanceFt(aLat: number, aLng: number, bLat: number, bLng: number): number {
  const toRad = (deg: number): number => (deg * Math.PI) / 180;
  const dLat = toRad(bLat - aLat);
  const dLng = toRad(bLng - aLng);
  const h =
    Math.sin(dLat / 2) ** 2 + Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * Math.sin(dLng / 2) ** 2;
  return 2 * EARTH_RADIUS_FT * Math.asin(Math.sqrt(h));
}

/** The discipline's current status — DIRECT in this model: the status the owner
    set, or null = nobody has looked yet ("Not reviewed" — an unknown). No
    review list, no latest-completed-wins derivation. */
export function disciplineStatus(wa: WorkArea, dim: GateDimension): ClearanceStatus | null {
  return wa.disciplines[dim]?.status ?? null;
}

/** The discipline's full state (status + the attached detail/evidence), or null
    when nobody has looked yet. */
export function disciplineState(wa: WorkArea, dim: GateDimension): DisciplineState | null {
  return wa.disciplines[dim] ?? null;
}

/** Active buffered observations whose avoidance buffer reaches the work area. */
export function bufferConflicts(wa: WorkArea, obs: Observation[]): Observation[] {
  return obs.filter(
    (o) => o.status === 'active' && o.bufferFt > 0 && distanceFt(wa.lat, wa.lng, o.lat, o.lng) <= o.bufferFt
  );
}

/**
 * Derived work-area status = the WORST current discipline status (per
 * STATUS_ORDER) — IDENTICAL rollup to the rich fixture. A live buffer conflict
 * derives 'blocked' ONLY when some discipline's status is 'blocked' (a human
 * recorded the blocking determination); otherwise 'provisional-block' (the
 * system detects, managers decide). 'not-required' statuses are IGNORED — an
 * explicit "no review needed" does not constrain the rollup, exactly like an
 * unreviewed dimension.
 */
export function deriveStatus(wa: WorkArea, obs: Observation[]): ClearanceStatus {
  const statuses = GATE_DIMENSIONS.map((d) => disciplineStatus(wa, d)).filter(
    (s): s is ClearanceStatus => !!s && s !== 'not-required'
  );
  if (bufferConflicts(wa, obs).length > 0) {
    return statuses.includes('blocked') ? 'blocked' : 'provisional-block';
  }
  if (statuses.length === 0) return 'not-surveyed';
  let worst = STATUS_ORDER.length - 1;
  for (const s of statuses) {
    const ord = STATUS_ORDER.indexOf(s);
    if (ord < worst) worst = ord;
  }
  return STATUS_ORDER[worst];
}

/**
 * Blocked-until = LATEST known date across the CURRENT blocking disciplines'
 * blockedUntil and conflicting observations' estEndDate. Null when not blocked
 * — and null when blocked with no date on anything (= until further notice).
 */
export function blockedUntil(wa: WorkArea, obs: Observation[]): string | null {
  const blocking = GATE_DIMENSIONS.map((d) => wa.disciplines[d]).filter(
    (s): s is DisciplineState => !!s && s.status === 'blocked'
  );
  const conflicts = bufferConflicts(wa, obs);
  if (blocking.length === 0 && conflicts.length === 0) return null;
  const dates = [...blocking.map((s) => s.blockedUntil), ...conflicts.map((o) => o.estEndDate)].filter(
    (d): d is string => !!d
  );
  if (dates.length === 0) return null;
  return dates.reduce((a, b) => (a > b ? a : b));
}

/** Work areas counted per derived status (the legend/rollup metric). */
export function statusCounts(
  obs: Observation[],
  areas: WorkArea[] = workAreas
): { status: ClearanceStatus; count: number }[] {
  const totals = new Map<ClearanceStatus, number>(STATUS_ORDER.map((s) => [s, 0]));
  for (const wa of areas) {
    const s = deriveStatus(wa, obs);
    totals.set(s, (totals.get(s) ?? 0) + 1);
  }
  return STATUS_ORDER.map((status) => ({ status, count: totals.get(status) ?? 0 }));
}

/** Format YYYY-MM-DD → "Jun 15, 2026". */
export function formatDate(iso: string | null | undefined): string {
  if (!iso) return '—';
  const [y, m, d] = iso.split('-').map(Number);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[m - 1]} ${d}, ${y}`;
}

/** Calendar days from `from` (default TODAY) to `iso` — negative = past. */
export function daysUntil(iso: string, from: string = TODAY): number {
  const toUtc = (date: string): number => {
    const [y, m, d] = date.split('-').map(Number);
    return Date.UTC(y, m - 1, d);
  };
  return Math.round((toUtc(iso) - toUtc(from)) / 86_400_000);
}
