// ─────────────────────────────────────────────────────────────────────────────
// Geotech Work Area Clearance fixture (go/no-go decision support for the
// 2024-2029 Geotechnical Activities drill-hole program, Sacramento–San Joaquin
// Delta).
//
// Three layers: WorkAreas (the DH drill-hole sites — the Beacon WorkArea
// entity), per-discipline REVIEW LISTS (DisciplineReview — every clearance
// survey, re-survey, and management determination ever recorded for
// biological / cultural / noise / geology; the Decision-first v2 model), and
// Observations (live wildlife sightings from the Monitoring Portal, each with
// an avoidance buffer that can block any work area inside it). Work areas are
// REAL: the 231 exploration sites from the client KMZ (DCP_Proposed_
// Explorations_2026_Program.kmz), extracted by scripts/kmz-to-sites.py into
// ./geotech-sites.json — coordinates plus method / depth / parcel / county /
// entry-agreement attributes all come from that layer. Biologist notes remain
// VERBATIM from DWR Biological_Notes_2026.xlsx (June 2026 — typos and all).
// The only remaining ILLUSTRATIVE bits are the non-SWHA observation buffer
// distances — only the SWHA ½-mile and the mallard 50' come from the source
// material.
//
// REVIEW-LIST SEMANTICS (the v2 contract — see helpers at the bottom):
//   · A review WITH an outcome is COMPLETED; its date is the completion date.
//   · A review WITHOUT an outcome is SCHEDULED/PENDING; its date is the
//     scheduled date. That absence IS the scheduled-vs-completed distinction.
//   · The newest completed review per discipline SETS that discipline's
//     current status (currentReview / disciplineStatus) — "the latest
//     completed review sets this status." Scheduled reviews never set status;
//     a discipline with only scheduled reviews reads 'survey-scheduled'.
//   · "No review required" is itself a recorded review (a management
//     determination with outcome 'not-required') — the review list IS the
//     audit trail; nothing is ever silently un-recorded.
//
// Nothing here is stored "derived" — a work area's clearance status and
// blocked-until date are COMPUTED from its discipline reviews plus any active
// observation buffers it sits inside (see helpers at the bottom).
// ─────────────────────────────────────────────────────────────────────────────
import sitesJson from './geotech-sites.json';

/** A clearance review dimension. Biological is the workhorse; the others gate rarely. */
export type GateDimension = 'biological' | 'cultural' | 'noise' | 'geology';

/**
 * Clearance ladder for one gate (and for the derived work-area rollup).
 * `not-required` is OFF-LADDER and gate-level only: an explicit recorded
 * determination that no review of that dimension is needed. It never appears
 * as a derived work-area status (deriveStatus ignores it — same as an absent
 * gate), so it stays out of STATUS_ORDER, the map legend, and status filters.
 * `provisional-block` is the mirror case — DERIVED-ONLY, never gate-level:
 * the system detected a live buffer conflict but no human has recorded a
 * blocking determination yet (the system detects; managers decide). It must
 * never be offered in the gate-status editor.
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

/** What kind of review event was recorded. */
export type ReviewKind = 'clearance-survey' | 're-survey' | 'management-determination';

/**
 * One review event in a discipline's history (the Decision-first v2 model —
 * a discipline holds a LIST of these, newest-first when read through
 * disciplineReviews). An ABSENT `outcome` = a scheduled/pending review (its
 * `date` is the scheduled date); a PRESENT `outcome` = a completed review
 * (its `date` is the completion date). The newest completed review sets the
 * discipline's current status.
 */
export interface DisciplineReview {
  dimension: GateDimension;
  kind: ReviewKind;
  /** Completed date — or the scheduled date when `outcome` is absent. */
  date: string;
  /** ABSENT = scheduled/pending review (the scheduled-vs-completed distinction). */
  outcome?: ClearanceStatus;
  reviewer?: string;
  note?: string;
  stipulations?: string[];
  /** Blocking outcomes only — null = blocked until further notice. */
  blockedUntil?: string | null;
  /** True when recorded by a management determination (e.g. the drawer's
      Confirm-block action) rather than a field survey — excluded from
      survey-record semantics (a confirmation is not a clearance survey). */
  managerDetermination?: boolean;
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
  /** Every review event ever recorded, across all disciplines (read them
      per-discipline via disciplineReviews). NO reviews for a dimension =
      nobody has looked yet ("Not reviewed" — an unknown). A completed review
      with outcome `not-required` = an explicit recorded determination that no
      review is needed. Both leave the rollup unconstrained. */
  reviews: DisciplineReview[];
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

// ── Work areas (REAL sites ← geotech-sites.json ← client KMZ) ────────────────
// All 231 exploration sites, coordinates and attributes straight from the
// source layer. Clearance activity (discipline reviews, dates, verbatim
// biologist notes ← DWR spreadsheet) overlays the 17 visited sites via
// CURATED below.

// ID prefix → segment label. PROVISIONAL: the expansions are our best reading
// of the prefixes (DC + TR2 = Tunnel Reach 2, …) — client to confirm. An
// unknown prefix falls through to the raw prefix string.
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

// ── Curated clearance overlay (discipline reviews + verbatim biologist notes ← DWR) ──
// The clearance story: an active SWHA nest (½-mile buffer) sits in the densest
// part of the program — with the REAL coordinates its buffer engulfs 19 sites
// (DCRDS-DH-184 closest at ~146 ft, matching the DWR "closest to the nest"
// email; DCTR2-DH-010 at ~878 ft, where the nest was found during its
// clearance visit). GGS burrow-compliance blocks two Rail Alignment roads, two
// sites are physically inaccessible, two haven't been surveyed at all, and
// DCRAI-DH-014 shows a multi-gate review (bio cleared, geology + noise pending).
// Coordinates are deliberately NOT curated — they come only from the KMZ.
const CURATED: Record<string, Partial<WorkArea> & { id: string }> = {
  // The June → September re-survey story: the May clearance survey found the
  // nest (→ blocked), and an outcome-less post-fledge re-survey rides the
  // history as scheduled — the v2 model holding both at once.
  'DCTR2-DH-010': {
    id: 'DCTR2-DH-010',
    clearanceVisitDate: '2026-05-18',
    reviews: [
      {
        dimension: 'biological',
        kind: 'clearance-survey',
        date: '2026-05-18',
        outcome: 'blocked',
        note: 'Active SWHA nest within the 0.5-mile no-disturbance buffer — discovered during the site clearance visit.',
        blockedUntil: '2026-07-24',
        reviewer: 'C. Anderson (ESA)',
      },
      {
        dimension: 'biological',
        kind: 're-survey',
        date: '2026-09-02',
        note: 'Post-fledge confirmation visit — SWHA est. fledge Jul 24, 2026.',
      },
    ],
    biologistNote: 'This was the site clearance visit that identified the SWHA nest on 5/18.',
  },
  // Survey on the books — but the SWHA buffer blocks it anyway.
  'DCRDS-DH-184': {
    id: 'DCRDS-DH-184',
    plannedStartDate: '2026-06-29',
    clearanceVisitDate: '2026-06-15',
    notificationDate: '2026-05-15',
    reviews: [{ dimension: 'biological', kind: 'clearance-survey', date: '2026-06-15' }],
    biologistNote:
      '5/27 email (from H. Barbare):  30-day Notification was scheduled to be sent 5/15/2026 for 6/15/2026 site clearance visit and 6/29/2026 work. This location is the closest to the nest.',
  },
  // DWR has the survey on the books — but the REAL coordinates put this site
  // INSIDE the SWHA buffer (~1,875 ft ≈ 0.36 mi from the nest), so the derived
  // status is blocked until fledge despite the scheduled visit. (The old
  // illustrative coords had it ~0.75 mi out; the KMZ says otherwise.)
  'DCTR2-DH-012': {
    id: 'DCTR2-DH-012',
    plannedStartDate: '2026-06-30',
    clearanceVisitDate: '2026-06-16',
    notificationDate: '2026-05-15',
    reviews: [{ dimension: 'biological', kind: 'clearance-survey', date: '2026-06-16' }],
    biologistNote:
      '5/27 email (from H. Barbare) 30-day Notification was scheduled to be sent 5/15/2026 for 6/16/2026 site clearance visit and 6/30/2026 start of work.',
  },
  'DCTR2-DH-100': {
    id: 'DCTR2-DH-100',
    reviews: [
      {
        dimension: 'biological',
        kind: 'clearance-survey',
        date: '2026-06-03',
        outcome: 'inaccessible',
        note: 'Road cannot be mowed (nesting birds, burrows within 200 ft of aquatic habitat) — DH not accessible.',
        reviewer: 'C. Anderson (ESA)',
      },
    ],
    biologistNote:
      "6/3 email:  This site is located along an unused dirt road on state lands in a wildlife preserve. The road would require mowing to access the DH. There is an irrigation canal with water and tulles along the border of the road. Several birds were observed to be nesting or were believed to be nesting along the road, in the slough, and in the adjacent field including red-winged blackbirds (based on behavior, did not observe nest), killdeer (observed one nest, two likely), and possibly a gold finch nest. One raptor nest was identified on the west side of the parcel approx. 2,500' to the west of the access road. The distance was too far to identify the raptor, but it was likely a red-tailed or Swainson's hawk nest. Due to the burrows in the road within 200' of aquatic habitat and the multiple nests it was determined by the group that the road can't be mowed, and the DH is not accessible.",
  },
  'DCRDS-DH-294': {
    id: 'DCRDS-DH-294',
    plannedStartDate: '2026-06-17',
    reviews: [
      {
        dimension: 'biological',
        kind: 'clearance-survey',
        date: '2026-06-03',
        outcome: 'cleared-stipulations',
        stipulations: [
          'Flag burrows for avoidance',
          'Vehicles stay within established tire tracks',
          'Biologist supervision when entering/exiting',
          "50' buffer from mallard nest if still present at drilling",
        ],
        reviewer: 'C. Anderson (ESA)',
      },
    ],
    biologistNote:
      "6/3 email: DH located in recently cut alfalfa field. Irrigation ditches surround the field and one access road to the site was available. The irrigation ditches had water and would be considered GGS aquatic habitat.  The field had multiple burrows but is being actively farmed, making it unlikely upland habitat for GGS. The only entrance road tot eh field was approx. 25' and had burrows in it but was actively used based on recent farming activities. The burrows were situated on either side of the road and down the middle. An established path was obvious where vehicles regularly drive that had no burrows. After discussing with Leah, it was determined that the DH could be safely accessed if the burrows were flagged and the vehicles crossed into the field within the established tire tracks and under the supervision of a biologist. A mallard nest was located near the entrance to the alfalfa field. If it is still present during the drilling a 50' buffer will be established from drilling activities.",
  },
  // The multi-gate showcase: biology says go, geology + noise haven't yet.
  // NOTE: the DWR spreadsheet wrote this ID as "DCRA1-DH-014" (digit one) — the
  // KMZ has no such site; the real ID is DCRAI-DH-014 (letter I, Rail
  // Alignment prefix shared with DH-006…013). Source typo, corrected here.
  'DCRAI-DH-014': {
    id: 'DCRAI-DH-014',
    plannedStartDate: '2026-06-17',
    reviews: [
      {
        dimension: 'biological',
        kind: 'clearance-survey',
        date: '2026-06-03',
        outcome: 'cleared',
        note: 'Highly disturbed gravel work pad; elderberry shrubs >165 ft from access.',
        reviewer: 'C. Anderson (ESA)',
      },
      {
        dimension: 'geology',
        kind: 'clearance-survey',
        date: '2026-06-18',
        note: 'Site relocated — pending geologist confirmation of the new position.',
      },
      {
        dimension: 'noise',
        kind: 'clearance-survey',
        date: '2026-06-20',
        note: 'Potential noise issue raised near receptors; acoustic review pending.',
      },
    ],
    biologistNote:
      "6/3 email: This DH is located in a gravel work pad. It was moved slightly to be placed outside of a dry roadside ditch and to be situated further from the railroad tracks. There are several large trees, and waterways nearby, but the site is situated in an area that is highly disturbed. A few elderberry shrubs are near the entrance to the road, but they are greater than 165' away.",
  },
  'DCTR1-DH-008': {
    id: 'DCTR1-DH-008',
    plannedStartDate: '2026-06-16',
    reviews: [
      {
        dimension: 'biological',
        kind: 'clearance-survey',
        date: '2026-06-03',
        outcome: 'cleared',
        note: 'No biological concerns observed 6/2; mowing preferred but not required.',
        reviewer: 'C. Anderson (ESA)',
      },
    ],
    biologistNote:
      "6/3 email: This DH was located on the edge of an almond orchard. Some trimming of fruit and or almond trees may be required at the entrance to the row to access the DH. There were no biological concerns at this site, outside of the potential for nesting birds and Crotch's bumblebee (CBB) foraging habitat which were not observed on 6/2. Mowing is not recommended, but is also not required, just preferred.",
  },
  'DCSHF-DH-144': {
    id: 'DCSHF-DH-144',
    plannedStartDate: '2026-06-12',
    reviews: [
      { dimension: 'biological', kind: 'clearance-survey', date: '2026-06-01', outcome: 'cleared', reviewer: 'C. Anderson (ESA)' },
    ],
    biologistNote:
      '6/1 email:  This site is in an active hayfield. The field has been hayed/baled but the bales have not yet been collected.  The soil surface was cultivated prior to planting and there are no burrows. A stick nest large enough to be a raptor was observed on a hi-voltage electric tower 1,325 feet to the north, but no activity was seen around the nest. There are no wetlands or waters nearby.',
  },
  'DCBPP-DH-034': {
    id: 'DCBPP-DH-034',
    plannedStartDate: '2026-06-16',
    reviews: [
      { dimension: 'biological', kind: 'clearance-survey', date: '2026-06-01', outcome: 'cleared', reviewer: 'C. Anderson (ESA)' },
    ],
    biologistNote:
      '6/1 email:  This site is in an active hayfield. The field has been hayed/baled but the bales have not yet been collected.  The soil surface was cultivated prior to planting and there are no burrows. A stick nest large enough to be a raptor was observed on a hi-voltage electric tower 1,500 feet to the north, but no activity was seen around the nest. There are no wetlands or waters nearby.',
  },
  'DCBPP-DH-066': {
    id: 'DCBPP-DH-066',
    plannedStartDate: '2026-06-15',
    reviews: [
      { dimension: 'biological', kind: 'clearance-survey', date: '2026-06-01', outcome: 'cleared', reviewer: 'C. Anderson (ESA)' },
    ],
    biologistNote:
      '6/1 email:  This site is in an active hayfield. The field has been hayed/baled but the bales have not yet been collected.  The soil surface was cultivated prior to planting and there are no burrows. A stick nest, probably not large enough to be a raptor was observed on a hi-voltage electric tower 1,785 feet to the southeast, but no activity was seen around the nest. There are no wetlands or waters nearby.',
  },
  'DCRDS-DH-292': {
    id: 'DCRDS-DH-292',
    plannedStartDate: '2026-06-15',
    reviews: [
      { dimension: 'biological', kind: 'clearance-survey', date: '2026-06-01', outcome: 'cleared', reviewer: 'C. Anderson (ESA)' },
    ],
    biologistNote:
      '6/1 email:  The site is entirely in a hard-packed gravel road, with annual grassland and ruderal vegetation on either side.  There is an agricultural ditch with water nearby. There are no burrows in the road, nor any burrows in the road outside the site necessary for access.',
  },
  // Blocked with NO end date — "until further notice" (compliance, not phenology).
  'DCRAI-DH-010': {
    id: 'DCRAI-DH-010',
    reviews: [
      {
        dimension: 'biological',
        kind: 'clearance-survey',
        date: '2026-06-01',
        outcome: 'blocked',
        note: 'Not in compliance with the GGS measure — access requires driving over burrows in the road.',
        blockedUntil: null,
        reviewer: 'C. Anderson (ESA)',
      },
    ],
    biologistNote:
      '6/1 email:  The site is entirely in a dirt road. There is an agricultural ditch with water nearby. There are no burrows in the work site, but there are burrows in the road outside the work site that would need to be driven over for access. We were instructed that project vehicles may not drive over burrows in roads. Site is currently not in compliance for the GGS measure due to the need to drive over burrows.',
  },
  'DCRAI-DH-011': {
    id: 'DCRAI-DH-011',
    reviews: [
      {
        dimension: 'biological',
        kind: 'clearance-survey',
        date: '2026-06-01',
        outcome: 'inaccessible',
        note: 'Not surveyed — surrounded by dense milk thistle.',
        reviewer: 'C. Anderson (ESA)',
      },
    ],
    biologistNote:
      '6/1 email:  This site was not surveyed. It was determined to be inaccessible currently due to thickness of milkweed (corrected to milk thistle) surrounding it.',
  },
  'DCRAI-DH-013': {
    id: 'DCRAI-DH-013',
    reviews: [
      {
        dimension: 'biological',
        kind: 'clearance-survey',
        date: '2026-06-01',
        outcome: 'blocked',
        note: 'Not in compliance with the GGS measure — access requires driving over burrows in the road.',
        blockedUntil: null,
        reviewer: 'C. Anderson (ESA)',
      },
    ],
    biologistNote:
      '6/1 email:  The site is entirely in a dirt road.  It is about 190 feet from the San Joaquin River. There are riparian trees and Himalayan blackberry adjacent on one side that will be avoided.  The other side is a row crop (tomato). There are no burrows in the work site, but there are burrows in the road outside the work site that would need to be driven over for access. We were instructed that project vehicles may not drive over burrows in roads. Site is currently not in compliance for the GGS measure due to the need to drive over burrows.',
  },
  // Active common-raven nest (CORA-2695) observed here — stipulated, not blocked.
  'DCRAI-DH-009': {
    id: 'DCRAI-DH-009',
    reviews: [
      {
        dimension: 'biological',
        kind: 'clearance-survey',
        date: '2026-06-04',
        outcome: 'cleared-stipulations',
        stipulations: ['Monitor CORA nest; avoid nest area until inactive'],
        reviewer: 'C. Anderson (ESA)',
      },
    ],
  },
  // No clearance survey yet — SWHA observed soaring overhead 6/9 (tracking only).
  'DCRAI-DH-012': { id: 'DCRAI-DH-012', reviews: [] },
  // No clearance survey yet — SWHA observed foraging overhead 6/4 (tracking only).
  'DCRAI-DH-006': { id: 'DCRAI-DH-006', reviews: [] },
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
    reviews: [], // no reviews = not surveyed
    ...CURATED[p.id],
    id: p.id, // canonical ID always from the KMZ layer
  };
});

// ── Observations (live wildlife ← Monitoring Portal, real IDs) ───────────────
// Active nesting birds carry avoidance buffers that can block work areas they
// engulf; tracking-only resource sightings (bufferFt 0) just sit on the map.
// Only the SWHA nest coordinates are real. The other observation positions are
// ILLUSTRATIVE, anchored to the real KMZ site geometry per each narrative —
// actual observation coords pending.
export const observations: Observation[] = [
  // THE nest of the story — against the real KMZ coordinates its ½-mile buffer
  // engulfs 19 sites, incl. DCRDS-DH-184 (closest, ~146 ft) and DCTR2-DH-010
  // (where the nest was found during the 5/18 clearance visit).
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
  // Illustrative position anchored to real site geometry (along the road by
  // DCRDS-DH-173/174, >250 ft from every site — its buffer catches nothing);
  // actual observation coords pending.
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
  // ~300 ft east of the REAL DCRAI-DH-009 — its 250-ft ring sits visibly beside
  // the marker but does NOT reach it (the site stays cleared-with-stipulations,
  // not buffer-blocked). Illustrative position anchored to real site geometry;
  // actual observation coords pending.
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
  // Immediately beside the REAL DCTR2-DH-100 (~120 ft east, along the road the
  // killdeer nests were found on) — just beyond its own 100-ft buffer reach, so
  // the site's status stays driven by its inaccessible gate. Illustrative
  // position anchored to real site geometry; actual observation coords pending.
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
  // No est end date — unidentified raptor, can't project a fledge. 2,500 ft due
  // WEST of the REAL DCTR2-DH-100, honoring the biologist note ("approx. 2,500'
  // to the west of the access road"); its 500-ft buffer captures no sites
  // there. Illustrative position anchored to real site geometry; actual
  // observation coords pending.
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
  // ~120 ft NE of the REAL DCRDS-DH-294 (the alfalfa-field entrance per the
  // note) — its 50-ft buffer does NOT reach the site; the stipulation covers
  // the contingency if the nest persists at drilling. Illustrative position
  // anchored to real site geometry; actual observation coords pending.
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
  // ~150 ft WEST of the REAL DCRAI-DH-012 (the log says "soaring overhead to
  // the west"). Tracking-only, no buffer. Illustrative position anchored to
  // real site geometry; actual observation coords pending.
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
  // ~150 ft north of the REAL DCRAI-DH-006 (foraging overhead). Tracking-only,
  // no buffer. Illustrative position anchored to real site geometry; actual
  // observation coords pending.
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

// ── Status model ──────────────────────────────────────────────────────────────

/** Worst → best. `not-required` is deliberately NOT here — it is off-ladder
    (gate-level only) and must never surface as a derived work-area status,
    in the map legend, or in the status filters. `provisional-block` sits
    directly after `blocked`: a system-detected buffer conflict awaiting the
    manager's confirming determination (derived-only — never a gate status). */
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
  /** CSS custom-property name (no var()) so consumers can use it in JS + CSS. */
  colorVar: string;
  hex: string;
}

// ── Status colors — the committed FIELD-MAP palette ───────────────────────────
// Determinations run the RdYlGn print-map ramp; unknowns stay out of the
// argument — neutral gray and process blue. Two invariants: green always means
// cleared, red always means blocked. Every page surface (markers, buffers,
// chips, legend) reads the static --st-<status> custom properties, which the
// page sets at SSR straight from these hexes — STATUS_META is the single source.

/** Canonical status → label + color var (hex = the field-map palette, the page's static :root vars). */
export const STATUS_META: Record<ClearanceStatus, StatusMeta> = {
  blocked: { key: 'blocked', label: 'Blocked', colorVar: '--st-blocked', hex: '#d73027' },
  // Same red as blocked ON PURPOSE — the differentiation is the hollow
  // rendering (white fill, red stroke): "blocked, but not solidified".
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
  // Off-ladder, gate-level only (mirrors map-fixture's PermitStatus handling):
  // an explicit "no review needed" determination. Fixed neutral — never in
  // STATUS_ORDER, the legend, or the filters.
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

/** A discipline's review history, NEWEST-FIRST by date (scheduled reviews sort
    by their scheduled date, completed ones by their completion date). */
export function disciplineReviews(wa: WorkArea, dim: GateDimension): DisciplineReview[] {
  return wa.reviews.filter((r) => r.dimension === dim).sort((a, b) => b.date.localeCompare(a.date));
}

/** The review that SETS the discipline's current status: the newest review
    WITH an outcome — "the latest completed review sets this status" (the v2
    rule). Scheduled/pending (outcome-less) reviews never set status. Null
    when the discipline has no completed review. */
export function currentReview(wa: WorkArea, dim: GateDimension): DisciplineReview | null {
  return disciplineReviews(wa, dim).find((r) => !!r.outcome) ?? null;
}

/** The discipline's current status: the current review's outcome; else
    'survey-scheduled' while any outcome-less (scheduled/pending) review
    exists; else null = nobody has looked yet ("Not reviewed" — an unknown). */
export function disciplineStatus(wa: WorkArea, dim: GateDimension): ClearanceStatus | null {
  const cur = currentReview(wa, dim);
  if (cur) return cur.outcome!;
  return wa.reviews.some((r) => r.dimension === dim && !r.outcome) ? 'survey-scheduled' : null;
}

/** Active buffered observations whose avoidance buffer reaches the work area. */
export function bufferConflicts(wa: WorkArea, obs: Observation[]): Observation[] {
  return obs.filter(
    (o) => o.status === 'active' && o.bufferFt > 0 && distanceFt(wa.lat, wa.lng, o.lat, o.lng) <= o.bufferFt
  );
}

/**
 * Derived work-area status = the WORST current discipline status (per
 * STATUS_ORDER). A live buffer conflict derives 'blocked' ONLY when some
 * discipline's CURRENT outcome is 'blocked' (a human recorded the blocking
 * determination); otherwise it derives 'provisional-block' — the system
 * detects, ESA/DWR managers decide. A blocking outcome with no buffer
 * conflict still derives blocked (the GGS compliance cases). 'not-required'
 * outcomes are IGNORED — an explicit "no review needed" does not constrain
 * the rollup, exactly like an unreviewed dimension — so no constraining
 * statuses + no conflicts = nobody has looked yet ('not-surveyed').
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
 * Blocked-until = LATEST known date across the CURRENT blocking reviews'
 * blockedUntil and conflicting observations' estEndDate. Null when not
 * blocked — and null when blocked with no date on anything (= until further
 * notice).
 */
export function blockedUntil(wa: WorkArea, obs: Observation[]): string | null {
  const blocking = GATE_DIMENSIONS.map((d) => currentReview(wa, d)).filter(
    (r): r is DisciplineReview => !!r && r.outcome === 'blocked'
  );
  const conflicts = bufferConflicts(wa, obs);
  if (blocking.length === 0 && conflicts.length === 0) return null;
  const dates = [...blocking.map((r) => r.blockedUntil), ...conflicts.map((o) => o.estEndDate)].filter(
    (d): d is string => !!d
  );
  if (dates.length === 0) return null;
  return dates.reduce((a, b) => (a > b ? a : b));
}

/** LEGACY READ-ONLY VIEW — the v1 single-gate shape, synthesized from the
    review list. Kept ONLY so the drawer specimen's round-1 reference sections
    keep rendering; new code reads disciplineReviews / currentReview /
    disciplineStatus. Completed disciplines mirror their current review;
    scheduled-only disciplines read as 'survey-scheduled' at their earliest
    pending date. */
export interface LegacyGateView {
  dimension: GateDimension;
  status: ClearanceStatus;
  note?: string;
  stipulations?: string[];
  blockedUntil?: string | null;
  reviewDate?: string;
  reviewer?: string;
  managerDetermination?: boolean;
}
export function gateFor(wa: WorkArea, dim: GateDimension): LegacyGateView | null {
  const st = disciplineStatus(wa, dim);
  if (!st) return null;
  const cur = currentReview(wa, dim);
  if (cur) {
    return {
      dimension: dim,
      status: cur.outcome!,
      note: cur.note,
      stipulations: cur.stipulations,
      blockedUntil: cur.blockedUntil,
      reviewDate: cur.date,
      reviewer: cur.reviewer,
      managerDetermination: cur.managerDetermination,
    };
  }
  const pending = disciplineReviews(wa, dim).filter((r) => !r.outcome);
  const next = pending[pending.length - 1]; // newest-first → last = earliest
  return { dimension: dim, status: 'survey-scheduled', note: next?.note, reviewDate: next?.date };
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
