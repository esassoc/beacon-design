// ─────────────────────────────────────────────────────────────────────────────
// Site Clearance — BIOLOGICAL clearance fixture (BCN-1337).
//
// Self-contained: this is the data model the epic ships, not a scoping over
// the old cross-discipline fixture (that model lives on in ./geotech-fixture
// for the deferred site-clearance.astro prototype). One clearance per work
// area (bio-only while Biological is the only ClearanceType), carried through
// dated REVIEWS — each a recorded determination with a REQUIRED outcome.
// There is no scheduled/pending review, no planned-start date, no
// notification date, no blocked-until horizon, and no estimated observation
// end date: Beacon records what happened and detects live geometric
// conflicts; it never forecasts.
//
// Work areas are REAL: the 231 exploration sites from the client KMZ
// (DCP_Proposed_Explorations_2026_Program.kmz), extracted by
// scripts/kmz-to-sites.py into ./geotech-sites.json — coordinates plus
// method / depth / parcel / county / entry-agreement attributes all come from
// that layer (they land as Work Area custom fields in prod). Monitor notes
// remain VERBATIM from DWR Biological_Notes_2026.xlsx (June 2026 — typos and
// all), promoted to first-class append-only note records (date, author, text).
//
// MODEL (the epic's contract — see helpers at the bottom):
//   · Every review carries an outcome: Cleared, Inaccessible, or Blocked
//     (the fixed ClearanceStatus set). The LATEST review sets the work
//     area's current status; no reviews = the derived 'Not Surveyed'.
//   · Adding a review updates the clearance-visit date (directly editable
//     otherwise).
//   · PROVISIONAL BLOCK is derived-only and display-only: an active
//     observation's buffer covers a work area that has NO recorded review.
//     Any recorded review status overrules it — the system detects, humans
//     decide.
// ─────────────────────────────────────────────────────────────────────────────
import sitesJson from './geotech-sites.json';

/**
 * Clearance ladder for a work area. `cleared` / `inaccessible` / `blocked`
 * are the FIXED stored set (a review's outcome). `not-surveyed` and
 * `provisional-block` are DERIVED-ONLY display states — never recorded,
 * never offered in the review form's Outcome select.
 */
export type ClearanceStatus = 'cleared' | 'blocked' | 'provisional-block' | 'inaccessible' | 'not-surveyed';

/** The outcomes a review can record (the fixed stored subset of the ladder). */
export type ClearanceOutcome = 'cleared' | 'inaccessible' | 'blocked';
export const OUTCOMES: ClearanceOutcome[] = ['blocked', 'inaccessible', 'cleared'];

/**
 * The tenant's configurable clearance-review-kind list (ESA-admin managed in
 * prod; per-tenant, in-use kinds deactivate rather than delete). DCP seed.
 */
export type ReviewKind = '14-day-clearance' | '72-hour-clearance' | 'management-determination';
export const REVIEW_KINDS: ReviewKind[] = ['14-day-clearance', '72-hour-clearance', 'management-determination'];
export const REVIEW_KIND_LABEL: Record<ReviewKind, string> = {
  '14-day-clearance': '14-day clearance',
  '72-hour-clearance': '72-hour clearance',
  'management-determination': 'Management determination',
};

/**
 * One recorded determination in the work area's clearance history (newest-
 * first when read through clearanceReviews). The outcome is REQUIRED — a
 * review IS a determination; there is no scheduled/pending review. Any
 * stipulation language lives in `note` (the epic cut the stipulations field).
 */
export interface ClearanceReview {
  kind: ReviewKind;
  /** The determination date (ISO). */
  date: string;
  outcome: ClearanceOutcome;
  /** The field biologist — free text, not necessarily a Beacon user. */
  reviewer?: string;
  note?: string;
}

/**
 * An append-only monitor note (create + delete, never edit). `author` is the
 * biologist who sent it — free text, distinct from the create-user audit.
 */
export interface ClearanceNote {
  date: string;
  author: string;
  text: string;
}

export interface WorkArea {
  /** e.g. 'DCTR2-DH-010' (the Beacon WorkArea entity). */
  id: string;
  /** The parent Component (work areas are children of a Component). */
  component: string;
  lat: number;
  lng: number;
  /** The date the clearance survey happened (ISO). Auto-updated when a
      review is added; directly editable otherwise. Unset = no visit yet. */
  clearanceVisitDate?: string;
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
  /** The biological clearance's review history. NO reviews = nobody has
      recorded a determination yet (the derived 'Not Surveyed'). */
  reviews: ClearanceReview[];
  /** Append-only monitor notes, VERBATIM from the field biologists' emails. */
  notes: ClearanceNote[];
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
  /** Avoidance buffer radius (the observation's own BufferDistanceFt).
      0 = tracking-only, no avoidance buffer. */
  bufferFt: number;
  firstObserved: string;
  latestLog?: string;
  /** Work area where it was observed, if tied to one. */
  workAreaId?: string;
}

/** The prototype's frozen clock — date defaults and "Today" grouping run from
    here, never Date.now(). */
export const TODAY = '2026-06-11';

// ── Components (the real DCP component register) ─────────────────────────────
// The page is scoped to a single Component via the picker; the selection
// persists in browser storage. All 231 exploration sites are children of the
// 2024-2029 Geotechnical Activities component — the other components exist
// and are selectable, but carry no geo-located work areas in this fixture.
export const COMPONENTS = [
  '2024-2029 Geotechnical Activities',
  '2027 Geotechnical Activities - Covered under ITP',
  'AEM Surveys - Fall 2026',
  'Compensatory Mitigation 1 - I-5 Ponds',
] as const;

export const GEOTECH_COMPONENT = COMPONENTS[0];

export const PROJECT = 'Delta Conveyance Project';

// ── Curated clearance overlay (reviews + verbatim monitor notes ← DWR) ────────
// The clearance story: an active SWHA nest (½-mile buffer) sits in the densest
// part of the program — with the REAL coordinates its buffer engulfs 19
// unreviewed sites (every one a PROVISIONAL block: the system detects, humans
// decide), plus DCTR2-DH-010 where the 5/18 clearance visit found the nest —
// the one recorded (solid) block inside the ring. GGS burrow-compliance blocks
// two Rail Alignment roads, two sites are physically inaccessible, and two
// haven't been surveyed at all. Coordinates are deliberately NOT curated —
// they come only from the KMZ.
const CURATED: Record<string, Partial<WorkArea> & { id: string }> = {
  // The site whose 5/18 clearance visit identified the SWHA nest. The blocked
  // determination is RECORDED — so it renders solid red, not provisional,
  // even though the buffer covers it (a review always overrules detection).
  'DCTR2-DH-010': {
    id: 'DCTR2-DH-010',
    clearanceVisitDate: '2026-05-18',
    reviews: [
      {
        kind: '14-day-clearance',
        date: '2026-05-18',
        outcome: 'blocked',
        note: 'Active SWHA nest within the 0.5-mile no-disturbance buffer — discovered during the site clearance visit.',
        reviewer: 'C. Anderson (ESA)',
      },
    ],
    notes: [
      {
        date: '2026-05-18',
        author: 'C. Anderson (ESA)',
        text: 'This was the site clearance visit that identified the SWHA nest on 5/18.',
      },
    ],
  },
  // Closest site to the nest. No determination recorded yet — the SWHA buffer
  // covering it is what renders the provisional block.
  'DCRDS-DH-184': {
    id: 'DCRDS-DH-184',
    notes: [
      {
        date: '2026-05-27',
        author: 'H. Barbare (DWR)',
        text: '30-day Notification was scheduled to be sent 5/15/2026 for 6/15/2026 site clearance visit and 6/29/2026 work. This location is the closest to the nest.',
      },
    ],
  },
  // The REAL coordinates put this site INSIDE the SWHA buffer (~1,875 ft ≈
  // 0.36 mi from the nest). No determination recorded yet → provisional block.
  'DCTR2-DH-012': {
    id: 'DCTR2-DH-012',
    notes: [
      {
        date: '2026-05-27',
        author: 'H. Barbare (DWR)',
        text: '30-day Notification was scheduled to be sent 5/15/2026 for 6/16/2026 site clearance visit and 6/30/2026 start of work.',
      },
    ],
  },
  'DCTR2-DH-100': {
    id: 'DCTR2-DH-100',
    clearanceVisitDate: '2026-06-03',
    reviews: [
      {
        kind: '14-day-clearance',
        date: '2026-06-03',
        outcome: 'inaccessible',
        note: 'Road cannot be mowed (nesting birds, burrows within 200 ft of aquatic habitat) — DH not accessible.',
        reviewer: 'C. Anderson (ESA)',
      },
    ],
    notes: [
      {
        date: '2026-06-03',
        author: 'C. Anderson (ESA)',
        text: "This site is located along an unused dirt road on state lands in a wildlife preserve. The road would require mowing to access the DH. There is an irrigation canal with water and tulles along the border of the road. Several birds were observed to be nesting or were believed to be nesting along the road, in the slough, and in the adjacent field including red-winged blackbirds (based on behavior, did not observe nest), killdeer (observed one nest, two likely), and possibly a gold finch nest. One raptor nest was identified on the west side of the parcel approx. 2,500' to the west of the access road. The distance was too far to identify the raptor, but it was likely a red-tailed or Swainson's hawk nest. Due to the burrows in the road within 200' of aquatic habitat and the multiple nests it was determined by the group that the road can't be mowed, and the DH is not accessible.",
      },
    ],
  },
  // Cleared with the stipulation language captured in the review's note (the
  // epic cut the stipulations field — the note IS where it lives).
  'DCRDS-DH-294': {
    id: 'DCRDS-DH-294',
    clearanceVisitDate: '2026-06-03',
    reviews: [
      {
        kind: '14-day-clearance',
        date: '2026-06-03',
        outcome: 'cleared',
        note: "Cleared with stipulations: flag burrows for avoidance; vehicles stay within established tire tracks; biologist supervision when entering/exiting; 50' buffer from mallard nest if still present at drilling.",
        reviewer: 'C. Anderson (ESA)',
      },
    ],
    notes: [
      {
        date: '2026-06-03',
        author: 'C. Anderson (ESA)',
        text: "DH located in recently cut alfalfa field. Irrigation ditches surround the field and one access road to the site was available. The irrigation ditches had water and would be considered GGS aquatic habitat.  The field had multiple burrows but is being actively farmed, making it unlikely upland habitat for GGS. The only entrance road tot eh field was approx. 25' and had burrows in it but was actively used based on recent farming activities. The burrows were situated on either side of the road and down the middle. An established path was obvious where vehicles regularly drive that had no burrows. After discussing with Leah, it was determined that the DH could be safely accessed if the burrows were flagged and the vehicles crossed into the field within the established tire tracks and under the supervision of a biologist. A mallard nest was located near the entrance to the alfalfa field. If it is still present during the drilling a 50' buffer will be established from drilling activities.",
      },
    ],
  },
  // NOTE: the DWR spreadsheet wrote this ID as "DCRA1-DH-014" (digit one) — the
  // KMZ has no such site; the real ID is DCRAI-DH-014 (letter I, prefix shared
  // with DH-006…013). Source typo, corrected here.
  'DCRAI-DH-014': {
    id: 'DCRAI-DH-014',
    clearanceVisitDate: '2026-06-03',
    reviews: [
      {
        kind: '14-day-clearance',
        date: '2026-06-03',
        outcome: 'cleared',
        note: 'Highly disturbed gravel work pad; elderberry shrubs >165 ft from access.',
        reviewer: 'C. Anderson (ESA)',
      },
    ],
    notes: [
      {
        date: '2026-06-03',
        author: 'C. Anderson (ESA)',
        text: "This DH is located in a gravel work pad. It was moved slightly to be placed outside of a dry roadside ditch and to be situated further from the railroad tracks. There are several large trees, and waterways nearby, but the site is situated in an area that is highly disturbed. A few elderberry shrubs are near the entrance to the road, but they are greater than 165' away.",
      },
    ],
  },
  'DCTR1-DH-008': {
    id: 'DCTR1-DH-008',
    clearanceVisitDate: '2026-06-03',
    reviews: [
      {
        kind: '14-day-clearance',
        date: '2026-06-03',
        outcome: 'cleared',
        note: 'No biological concerns observed 6/2; mowing preferred but not required.',
        reviewer: 'C. Anderson (ESA)',
      },
    ],
    notes: [
      {
        date: '2026-06-03',
        author: 'C. Anderson (ESA)',
        text: "This DH was located on the edge of an almond orchard. Some trimming of fruit and or almond trees may be required at the entrance to the row to access the DH. There were no biological concerns at this site, outside of the potential for nesting birds and Crotch's bumblebee (CBB) foraging habitat which were not observed on 6/2. Mowing is not recommended, but is also not required, just preferred.",
      },
    ],
  },
  'DCSHF-DH-144': {
    id: 'DCSHF-DH-144',
    clearanceVisitDate: '2026-06-01',
    reviews: [
      { kind: '14-day-clearance', date: '2026-06-01', outcome: 'cleared', reviewer: 'C. Anderson (ESA)' },
    ],
    notes: [
      {
        date: '2026-06-01',
        author: 'C. Anderson (ESA)',
        text: 'This site is in an active hayfield. The field has been hayed/baled but the bales have not yet been collected.  The soil surface was cultivated prior to planting and there are no burrows. A stick nest large enough to be a raptor was observed on a hi-voltage electric tower 1,325 feet to the north, but no activity was seen around the nest. There are no wetlands or waters nearby.',
      },
    ],
  },
  'DCBPP-DH-034': {
    id: 'DCBPP-DH-034',
    clearanceVisitDate: '2026-06-01',
    reviews: [
      { kind: '14-day-clearance', date: '2026-06-01', outcome: 'cleared', reviewer: 'C. Anderson (ESA)' },
    ],
    notes: [
      {
        date: '2026-06-01',
        author: 'C. Anderson (ESA)',
        text: 'This site is in an active hayfield. The field has been hayed/baled but the bales have not yet been collected.  The soil surface was cultivated prior to planting and there are no burrows. A stick nest large enough to be a raptor was observed on a hi-voltage electric tower 1,500 feet to the north, but no activity was seen around the nest. There are no wetlands or waters nearby.',
      },
    ],
  },
  'DCBPP-DH-066': {
    id: 'DCBPP-DH-066',
    clearanceVisitDate: '2026-06-01',
    reviews: [
      { kind: '14-day-clearance', date: '2026-06-01', outcome: 'cleared', reviewer: 'C. Anderson (ESA)' },
    ],
    notes: [
      {
        date: '2026-06-01',
        author: 'C. Anderson (ESA)',
        text: 'This site is in an active hayfield. The field has been hayed/baled but the bales have not yet been collected.  The soil surface was cultivated prior to planting and there are no burrows. A stick nest, probably not large enough to be a raptor was observed on a hi-voltage electric tower 1,785 feet to the southeast, but no activity was seen around the nest. There are no wetlands or waters nearby.',
      },
    ],
  },
  'DCRDS-DH-292': {
    id: 'DCRDS-DH-292',
    clearanceVisitDate: '2026-06-01',
    reviews: [
      { kind: '14-day-clearance', date: '2026-06-01', outcome: 'cleared', reviewer: 'C. Anderson (ESA)' },
    ],
    notes: [
      {
        date: '2026-06-01',
        author: 'C. Anderson (ESA)',
        text: 'The site is entirely in a hard-packed gravel road, with annual grassland and ruderal vegetation on either side.  There is an agricultural ditch with water nearby. There are no burrows in the road, nor any burrows in the road outside the site necessary for access.',
      },
    ],
  },
  // Blocked by a recorded determination (GGS compliance) — no buffer involved,
  // and no projected lift date: a block holds until a human reviews again.
  'DCRAI-DH-010': {
    id: 'DCRAI-DH-010',
    clearanceVisitDate: '2026-06-01',
    reviews: [
      {
        kind: '14-day-clearance',
        date: '2026-06-01',
        outcome: 'blocked',
        note: 'Not in compliance with the GGS measure — access requires driving over burrows in the road.',
        reviewer: 'C. Anderson (ESA)',
      },
    ],
    notes: [
      {
        date: '2026-06-01',
        author: 'C. Anderson (ESA)',
        text: 'The site is entirely in a dirt road. There is an agricultural ditch with water nearby. There are no burrows in the work site, but there are burrows in the road outside the work site that would need to be driven over for access. We were instructed that project vehicles may not drive over burrows in roads. Site is currently not in compliance for the GGS measure due to the need to drive over burrows.',
      },
    ],
  },
  'DCRAI-DH-011': {
    id: 'DCRAI-DH-011',
    clearanceVisitDate: '2026-06-01',
    reviews: [
      {
        kind: '14-day-clearance',
        date: '2026-06-01',
        outcome: 'inaccessible',
        note: 'Not surveyed — surrounded by dense milk thistle.',
        reviewer: 'C. Anderson (ESA)',
      },
    ],
    notes: [
      {
        date: '2026-06-01',
        author: 'C. Anderson (ESA)',
        text: 'This site was not surveyed. It was determined to be inaccessible currently due to thickness of milkweed (corrected to milk thistle) surrounding it.',
      },
    ],
  },
  'DCRAI-DH-013': {
    id: 'DCRAI-DH-013',
    clearanceVisitDate: '2026-06-01',
    reviews: [
      {
        kind: '14-day-clearance',
        date: '2026-06-01',
        outcome: 'blocked',
        note: 'Not in compliance with the GGS measure — access requires driving over burrows in the road.',
        reviewer: 'C. Anderson (ESA)',
      },
    ],
    notes: [
      {
        date: '2026-06-01',
        author: 'C. Anderson (ESA)',
        text: 'The site is entirely in a dirt road.  It is about 190 feet from the San Joaquin River. There are riparian trees and Himalayan blackberry adjacent on one side that will be avoided.  The other side is a row crop (tomato). There are no burrows in the work site, but there are burrows in the road outside the work site that would need to be driven over for access. We were instructed that project vehicles may not drive over burrows in roads. Site is currently not in compliance for the GGS measure due to the need to drive over burrows.',
      },
    ],
  },
  // Active common-raven nest (CORA-2695) observed ~300 ft away — cleared, with
  // the monitoring stipulation in the review note.
  'DCRAI-DH-009': {
    id: 'DCRAI-DH-009',
    clearanceVisitDate: '2026-06-04',
    reviews: [
      {
        kind: '14-day-clearance',
        date: '2026-06-04',
        outcome: 'cleared',
        note: 'Cleared with stipulation: monitor CORA nest; avoid nest area until inactive.',
        reviewer: 'C. Anderson (ESA)',
      },
    ],
  },
  // No clearance review yet — SWHA observed soaring overhead 6/9 (tracking only).
  'DCRAI-DH-012': { id: 'DCRAI-DH-012' },
  // No clearance review yet — SWHA observed foraging overhead 6/4 (tracking only).
  'DCRAI-DH-006': { id: 'DCRAI-DH-006' },
};

// ── Work areas (REAL sites ← geotech-sites.json ← client KMZ) ────────────────
// All 231 exploration sites, coordinates and attributes straight from the
// source layer, every one a child of the 2024-2029 Geotechnical Activities
// component. Clearance activity (reviews, visit dates, verbatim monitor
// notes ← DWR spreadsheet) overlays the visited sites via CURATED above.
export const workAreas: WorkArea[] = sitesJson.features.map((f) => {
  // GeoJSON is [lng, lat]; the fixture (like Leaflet) wants lat/lng fields.
  const [lng, lat] = f.geometry.coordinates as [number, number];
  const p = f.properties;
  return {
    component: GEOTECH_COMPONENT,
    lat,
    lng,
    method: p.method,
    depthFt: p.depthFt,
    parcelApn: p.parcelApn,
    dcpn: p.dcpn,
    county: p.county,
    entryAgreement: p.entryAgreement,
    reviews: [], // no reviews = Not Surveyed
    notes: [],
    ...CURATED[p.id],
    id: p.id, // canonical ID always from the KMZ layer
  };
});

// ── Observations (live wildlife ← Monitoring Portal, real IDs) ───────────────
// Active nesting birds carry avoidance buffers (each observation's own
// BufferDistanceFt) that provisionally block unreviewed work areas they
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
    latestLog: 'May 29, 2026, 2:06 PM: Multiple ravens observed around the nest.',
  },
  // ~300 ft east of the REAL DCRAI-DH-009 — its 250-ft ring sits visibly beside
  // the marker but does NOT reach it (the site stays cleared, not buffer-
  // blocked). Illustrative position anchored to real site geometry; actual
  // observation coords pending.
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
    latestLog: 'Jun 4, 2026, 11:16 AM: Both ravens perched outside of nest.',
    workAreaId: 'DCRAI-DH-009',
  },
  // Immediately beside the REAL DCTR2-DH-100 (~120 ft east, along the road the
  // killdeer nests were found on) — just beyond its own 100-ft buffer reach, so
  // the site's status stays driven by its inaccessible review. Illustrative
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
    latestLog: 'Jun 4, 2026, 2:23 PM: 1 bird on nest, tried to lead us away.',
    workAreaId: 'DCTR2-DH-100',
  },
  // Unidentified raptor 2,500 ft due WEST of the REAL DCTR2-DH-100, honoring
  // the biologist note ("approx. 2,500' to the west of the access road"); its
  // 500-ft buffer captures no sites there. Illustrative position anchored to
  // real site geometry; actual observation coords pending.
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

// ── Status model ──────────────────────────────────────────────────────────────

/** Worst → best. `provisional-block` sits directly after `blocked`: a
    system-detected buffer conflict on an UNREVIEWED work area (derived-only —
    never a recorded outcome, and overruled by any recorded review). */
export const STATUS_ORDER: ClearanceStatus[] = [
  'blocked',
  'provisional-block',
  'inaccessible',
  'not-surveyed',
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
// Determinations run the RdYlGn print-map ramp; the unknown stays out of the
// argument — neutral gray. Two invariants: green always means cleared, red
// always means blocked. Every page surface (markers, buffers, chips, legend)
// reads the static --st-<status> custom properties, which the page sets at SSR
// straight from these hexes — STATUS_META is the single source.

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
  cleared: { key: 'cleared', label: 'Cleared', colorVar: '--st-cleared', hex: '#1a9850' },
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

/** The clearance's review history, NEWEST-FIRST by determination date. */
export function clearanceReviews(wa: WorkArea): ClearanceReview[] {
  return [...wa.reviews].sort((a, b) => b.date.localeCompare(a.date));
}

/** The review that SETS the work area's current status: the latest one.
    Null when nobody has recorded a determination yet. */
export function currentReview(wa: WorkArea): ClearanceReview | null {
  return clearanceReviews(wa)[0] ?? null;
}

/** Active buffered observations whose avoidance buffer reaches the work area. */
export function bufferConflicts(wa: WorkArea, obs: Observation[]): Observation[] {
  return obs.filter(
    (o) => o.status === 'active' && o.bufferFt > 0 && distanceFt(wa.lat, wa.lng, o.lat, o.lng) <= o.bufferFt
  );
}

/**
 * Derived work-area status: the latest review's outcome — ANY recorded review
 * overrules detection. Only a work area with NO recorded review renders the
 * system's read: 'provisional-block' when an active observation buffer covers
 * it, else 'not-surveyed'. The system detects; humans decide.
 */
export function deriveStatus(wa: WorkArea, obs: Observation[]): ClearanceStatus {
  const cur = currentReview(wa);
  if (cur) return cur.outcome;
  return bufferConflicts(wa, obs).length > 0 ? 'provisional-block' : 'not-surveyed';
}

/** Work areas counted per derived status — the legend/rollup metric. */
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
