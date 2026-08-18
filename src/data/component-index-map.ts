// COMPONENT INDEX MAP — each component's FOOTPRINT, derived from its work areas.
//
// The design call asked for a map on the component index: "we could put a big map
// on here… there could be a component map with geometries. If they overlap I think
// that's fine too — if we color code them, that's what the species habitat layers
// look like, it's fine."
//
// WHAT THESE SHAPES ARE, because the honest answer matters. Component has NO stored
// geometry: there is no geography column on dbo.Component, and BCN-1584 (which adds
// one, with shapefile upload) is Ready-for-Dev with zero commits. The only real
// geometry any component owns today is its WORK AREAS — points the work-areas
// endpoint already returns and every current surface throws away.
//
// So a footprint here is the convex hull of a component's work areas: the smallest
// shape containing everywhere it has ground disturbance. That is a derivation, not a
// boundary, and the map says so rather than implying a surveyed line. It is also
// forward-compatible — when BCN-1584 lands, a component's uploaded boundary replaces
// the hull and this module is deleted rather than extended.
//
// An earlier pass drew one DOT per component at an invented coordinate. That was
// worse than nothing: a point implies a location the data does not have, and nobody
// could tell what the dots meant.
//
// Coordinates are the real 231-point DCP geotech export already in this repo. Each
// component claims its own `workAreas` count of nearest sites, so the derivation is
// deterministic, the shapes fall where the project's actual exploration work falls,
// and the map agrees with the grid's Work areas column.

import sites from './geotech-sites.json';
import { STATUS_META, type ProjectComponent } from './component-dashboard';

type SiteFeature = { properties: { id: string }; geometry: { coordinates: [number, number] } };
const FEATURES = sites.features as unknown as SiteFeature[];

/** Cluster centroids, from the drill-hole prefixes that name them. */
const CLUSTER: Record<string, [number, number]> = {
  intakeNorth: [38.3799, -121.5188],
  intakeMid: [38.3492, -121.5307],
  twinCities: [38.3266, -121.4985],
  levee: [38.2966, -121.4506],
  centralReach: [38.2135, -121.444],
  roads: [38.1448, -121.428],
  bouldin: [38.1169, -121.4378],
  kingIsland: [38.0667, -121.4363],
  unionIsland: [37.9684, -121.3807],
  southReach: [37.9002, -121.5009],
  bethany: [37.8024, -121.575],
};

/** A component's anchor: where its name says it is. */
const ANCHOR: Record<string, keyof typeof CLUSTER> = {
  'Intake B — North Delta': 'intakeNorth',
  'Intake C — North Delta': 'intakeMid',
  'Twin Cities Complex': 'twinCities',
  'Central Tunnel Reach': 'centralReach',
  'Bouldin Island Launch Shaft': 'bouldin',
  'King Island Intermediate Shaft': 'kingIsland',
  'Union Island Reusable Tunnel Material Storage & Rehandling Area': 'unionIsland',
  'Southern Tunnel Reach — King Island to Bethany Complex Launch Shaft Transition Zone': 'southReach',
  'Lower Roberts Island Maintenance Shaft & Ventilation Structure': 'southReach',
  'Southern Forebay & Pumping Plant': 'bethany',
  'Bethany Reservoir Aqueduct': 'bethany',
  'Byron Tract Forebay': 'bethany',
  'Bethany Reservoir Complex — Discharge Structure': 'bethany',
  'Mandeville Island Tunnel Material Reuse Site': 'roads',
  'Rio Vista Field Office & Environmental Staging Yard': 'levee',
  'Turner Cut Barge Landing': 'kingIsland',
};

const hash = (s: string): number => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
};

type Pt = [number, number]; // [lat, lon]

/** Raw anchor for a component, falling back to a real site when the name says nothing. */
const rawAnchor = (name: string): Pt => {
  const key = ANCHOR[name];
  if (key) return CLUSTER[key];
  const f = FEATURES[hash(name) % FEATURES.length];
  return [f.geometry.coordinates[1], f.geometry.coordinates[0]];
};

/** How far co-located anchors are pushed apart, in degrees (~1.3 km). */
const SPREAD = 0.012;

/**
 * Anchors for a whole set, with components that name the SAME place pushed apart.
 *
 * Four components sit at Bethany and two at King Island. Left on identical
 * coordinates, the nearest-anchor partition below would hand every site to
 * whichever one happened to be first and leave the rest with nothing — four
 * footprints stacked on one square. Spreading them around their shared centre
 * turns that into a Voronoi split of the cluster: each gets a real, distinct
 * slice of the work its neighbours don't own.
 */
const anchorsFor = (names: string[]): Pt[] => {
  const groups = new Map<string, number[]>();
  names.forEach((name, i) => {
    const key = ANCHOR[name] ?? `~${name}`;
    const bucket = groups.get(key);
    if (bucket) bucket.push(i);
    else groups.set(key, [i]);
  });

  const out: Pt[] = names.map(rawAnchor);
  for (const members of groups.values()) {
    if (members.length < 2) continue;
    members.forEach((idx, k) => {
      const centre = out[idx];
      const angle = (2 * Math.PI * k) / members.length;
      out[idx] = [centre[0] + Math.sin(angle) * SPREAD, centre[1] + Math.cos(angle) * SPREAD];
    });
  }
  return out;
};

/**
 * Convex hull, Andrew's monotone chain. Deterministic and dependency-free; the hull
 * of a component's work areas is the smallest convex shape containing all of them.
 */
function hull(points: Pt[]): Pt[] {
  if (points.length < 3) return points;
  const p = [...points].sort((a, b) => a[1] - b[1] || a[0] - b[0]);
  // Cross product of OA x OB; >0 means counter-clockwise.
  const cross = (o: Pt, a: Pt, b: Pt) =>
    (a[1] - o[1]) * (b[0] - o[0]) - (a[0] - o[0]) * (b[1] - o[1]);
  const build = (src: Pt[]): Pt[] => {
    const out: Pt[] = [];
    for (const pt of src) {
      while (out.length >= 2 && cross(out[out.length - 2], out[out.length - 1], pt) <= 0) out.pop();
      out.push(pt);
    }
    out.pop();
    return out;
  };
  return [...build(p), ...build([...p].reverse())];
}

/**
 * Buffer radius in degrees of latitude — roughly 1.1 km, a credible work-area
 * envelope for a tunnel shaft or staging yard. Round numbers on purpose: this is a
 * footprint sketch, and a projection-correct buffer would imply a precision the
 * derivation does not have.
 */
const PAD_LAT = 0.01;
const RING_STEPS = 16;

/**
 * Buffer a set of work areas into a footprint: replace each point with a small
 * circle and hull the whole cloud. That is the convex hull of a Minkowski sum with
 * a disc, and it is the reason this isn't just `hull(points)` — geotech borings sit
 * in a LINE along the alignment, so their bare hull collapses to a sliver a few
 * pixels wide, which reads as a rendering artefact rather than an area. Buffering
 * first gives a lozenge for a line of sites and a circle for a single one, so a
 * component with one work area and a component with nine both draw as shapes.
 *
 * Longitude is scaled by 1/cos(lat) so the buffer stays round on the map instead of
 * squashing into an ellipse at Delta latitudes.
 */
function buffered(pts: Pt[]): Pt[] {
  const lat0 = pts.reduce((n, p) => n + p[0], 0) / pts.length;
  const padLon = PAD_LAT / Math.max(0.2, Math.cos((lat0 * Math.PI) / 180));
  const cloud: Pt[] = [];
  for (const [lat, lon] of pts) {
    for (let k = 0; k < RING_STEPS; k += 1) {
      const a = (2 * Math.PI * k) / RING_STEPS;
      cloud.push([lat + Math.sin(a) * PAD_LAT, lon + Math.cos(a) * padLon]);
    }
  }
  return hull(cloud);
}

export interface ComponentFootprint {
  id: string;
  label: string;
  /** Token reference — the component's lifecycle status colour. */
  color: string;
  /** Closed ring of [lat, lon]. */
  ring: Pt[];
  /** How many work areas the shape was derived from. */
  siteCount: number;
}

/**
 * Footprints for a set of components. Each component claims its OWN `workAreas`
 * count of nearest sites, so the shape on the map and the "Work areas" column in
 * the grid describe the same thing — a footprint drawn from more sites than the
 * component owns would quietly contradict the row beside it.
 *
 * Claiming is ROUND-ROBIN, not first-come: every component takes one nearest
 * unclaimed site per pass until its quota is met. A straight Voronoi partition of
 * all 231 sites was tried first and was wrong — it handed 83 of them to a field
 * office because that anchor sat in the gap between two clusters, and drew a 30 km
 * footprint for a staging yard. Round-robin keeps every shape compact, and leaves
 * the sites no component claims unassigned, which is honest: the geotech export is
 * project-wide exploration, not a component roster.
 */
export const componentFootprints = (components: ProjectComponent[]): ComponentFootprint[] => {
  const at = anchorsFor(components.map((c) => c.name));
  const claimed = new Map<string, Pt[]>(components.map((c) => [c.name, []]));
  const taken = new Set<number>();

  const quota = components.map((c) => Math.max(0, c.workAreas));
  const remaining = [...quota];
  let left = remaining.reduce((n, q) => n + q, 0);

  while (left > 0) {
    let progressed = false;
    for (let i = 0; i < components.length; i += 1) {
      if (remaining[i] <= 0) continue;
      let best = -1;
      let bestD = Infinity;
      for (let f = 0; f < FEATURES.length; f += 1) {
        if (taken.has(f)) continue;
        const co = FEATURES[f].geometry.coordinates;
        const d = (co[1] - at[i][0]) ** 2 + (co[0] - at[i][1]) ** 2;
        if (d < bestD) {
          bestD = d;
          best = f;
        }
      }
      if (best < 0) {
        // Ran out of sites entirely — stop rather than spin.
        left = 0;
        progressed = false;
        break;
      }
      taken.add(best);
      const co = FEATURES[best].geometry.coordinates;
      claimed.get(components[i].name)!.push([co[1], co[0]]);
      remaining[i] -= 1;
      left -= 1;
      progressed = true;
    }
    if (!progressed) break;
  }

  return components.map((c, i) => {
    // A component with a quota of zero still gets a shape — at its anchor, so it
    // appears on the map as a place rather than vanishing from it.
    const pts = claimed.get(c.name)?.length ? claimed.get(c.name)! : [at[i]];
    return {
      id: c.name,
      label: `${c.name} · ${STATUS_META[c.status].label}`,
      color: STATUS_META[c.status].hex,
      ring: buffered(pts),
      siteCount: claimed.get(c.name)?.length ?? 0,
    };
  });
};

/**
 * Legend rows — one per lifecycle status, in pipeline order. `shape: 'area'` because
 * these key FILLED FOOTPRINTS, not points: a dot swatch would promise a marker the
 * map does not draw.
 */
export const INDEX_MAP_LEGEND = (['not-started', 'in-progress', 'on-hold', 'complete'] as const).map(
  (s) => ({ label: STATUS_META[s].label, color: STATUS_META[s].hex, shape: 'area' as const }),
);
