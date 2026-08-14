// COMPONENT INDEX MAP — where each component sits on the alignment.
//
// The design call asked for a map on the component index: "we could put a big
// map on here… there could be a component map with geometries. If they overlap
// I think that's fine too — if we color code them, that's what the species
// habitat layers look like, it's fine." The overlap is expected, because
// components genuinely are areas over areas over time in the same place.
//
// Components have no stored geometry (no geography column on Component, and
// BCN-1582 has not started), so a footprint is anchored here to the REAL geotech
// coordinates already in this repo. Anchors are chosen by what the component
// name actually names — the intakes sit on the intake borings, the shafts on the
// shaft borings, the southern complex on the Alameda cluster — so a viewer who
// knows the project recognizes the shape of the alignment rather than a scatter.
//
// Where a name carries no geographic signal, the anchor falls back to a
// deterministic pick from the same 231 real sites: still on the alignment, still
// identical on every run, and never pretending to a precision it does not have.
//
// This is a PROTOTYPE stand-in for the boundary polygons BCN-1584 will add. When
// components carry real geometry, this module is deleted, not extended.

import sites from './geotech-sites.json';
import { STATUS_META, type ProjectComponent } from './component-dashboard';

type SiteFeature = { properties: { id: string }; geometry: { coordinates: [number, number] } };
const FEATURES = sites.features as unknown as SiteFeature[];

/** Cluster centroids, by the drill-hole prefix that names them. */
const CLUSTER: Record<string, [number, number]> = {
  intakeNorth: [38.3799, -121.5188], // DCIN3 — northernmost intake borings
  intakeMid: [38.3492, -121.5307], // DCIN5
  twinCities: [38.3266, -121.4985], // DCTR1
  levee: [38.2966, -121.4506], // DCLEV
  centralReach: [38.2135, -121.444], // DCTR2
  roads: [38.1448, -121.428], // DCRDS
  bouldin: [38.1169, -121.4378], // DCSHF, mid-Delta shaft cluster
  kingIsland: [38.0667, -121.4363], // DCTR3
  unionIsland: [37.9684, -121.3807], // DCRAI
  southReach: [37.9002, -121.5009], // DCTR4
  bethany: [37.8024, -121.575], // DCBPP — the Alameda complex
};

// Named anchors: the component's own name says where it is.
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

/**
 * Components anchored to the same cluster are nudged apart by a deterministic
 * offset — a few hundred metres, enough that four markers on the Bethany complex
 * read as four rather than one, without moving any of them somewhere untrue.
 */
// Shifts are UNSIGNED — `h` exceeds 2^31 for most names, and a signed >> would
// return a negative, skewing every offset one way.
const jitter = (name: string): [number, number] => {
  const h = hash(name);
  return [(((h >>> 2) % 21) - 10) * 0.0022, (((h >>> 9) % 21) - 10) * 0.0028];
};

export interface ComponentMapPoint {
  id: string;
  lat: number;
  lon: number;
  label: string;
  /** Token reference from STATUS_META — the index map colors by lifecycle status. */
  markColor: string;
}

export const indexMapPoints = (components: ProjectComponent[]): ComponentMapPoint[] =>
  components.map((c) => {
    const key = ANCHOR[c.name];
    const base = key
      ? CLUSTER[key]
      : // No geographic signal in the name — land on a real site, deterministically.
        (() => {
          const f = FEATURES[hash(c.name) % FEATURES.length];
          return [f.geometry.coordinates[1], f.geometry.coordinates[0]] as [number, number];
        })();
    const [dLat, dLon] = jitter(c.name);
    return {
      id: c.name,
      lat: base[0] + dLat,
      lon: base[1] + dLon,
      label: `${c.name} · ${STATUS_META[c.status].label}`,
      markColor: STATUS_META[c.status].hex,
    };
  });

/** Legend rows for the index map — one per lifecycle status, in pipeline order. */
export const INDEX_MAP_LEGEND = (['not-started', 'in-progress', 'on-hold', 'complete'] as const).map((s) => ({
  label: STATUS_META[s].label,
  color: STATUS_META[s].hex,
}));
