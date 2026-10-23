// Trips and Emissions — the Monitoring Portal data page that turns the Fulcrum
// equipment use log (vehicle trips + equipment run time) into miles, solo-trip
// share and estimated emissions. One capability, two tenants:
//
//   dcp           "how many miles, how much was emitted, are we cutting solo trips"
//                 → TRANS-1's 25% single-occupancy reduction is the comparison.
//   valley-water  "how much has construction emitted against what must be offset"
//                 → the EIR's net-zero construction requirement is the comparison.
//
// Same inputs, same records grids, different comparison panel.
//
// EVERYTHING HERE IS INVENTED. Companies (other than ESA), drivers, plates, serials,
// emission factors and offset volumes are fictional. Factors are placeholder
// round numbers in the right order of magnitude, NOT EMFAC/OFFROAD values: the
// method is an open question for DCA and Valley Water, so every emission figure is
// an estimate and the method reads "Not set".
//
// Deterministic: a seeded PRNG, never Math.random().

import { bucketStacked, type BucketUnit } from '../lib/bucket-series';
import type { MonitoringStream } from './monitoring-streams';

export type TenantId = 'dcp' | 'valley-water';
export type VehicleClass = 'Passenger' | 'Light Truck' | 'Heavy Truck';
export type EngineTier = 'Tier 4 Final' | 'Tier 4 Interim' | 'Tier 3' | 'Electric';

export interface Trip {
  id: string;
  date: string;
  site: string;
  company: string;
  driver: string;
  vehicle: string;
  vehicleClass: VehicleClass;
  licensePlate: string;
  origin: string;
  /** People in the vehicle, driver included. null = not recorded. */
  occupants: number | null;
  roundTrip: 'Yes' | 'No';
  miles: number;
  /** Estimated, kilograms CO2e. */
  co2eKg: number;
}

export interface EquipmentUse {
  id: string;
  date: string;
  site: string;
  company: string;
  unit: string;
  equipmentClass: string;
  tier: EngineTier;
  horsepower: number;
  serialNumber: string;
  hours: number;
  /** Estimated, kilograms CO2e. */
  co2eKg: number;
}

export type FlagKind = 'zero-miles' | 'round-trip-mismatch' | 'no-occupants' | 'site-silent';

export interface RecordFlag {
  kind: FlagKind;
  label: string;
  date: string;
  site: string;
  /** The flagged record's identity: driver and vehicle, or the last trip date. */
  detail: string;
}

export interface PollutantRow {
  pollutant: string;
  unit: string;
  onRoad: number;
  offRoad: number;
}

export interface OffsetRetirement {
  date: string;
  registry: string;
  project: string;
  tons: number;
}

/** A source series for the activity chart (bottom-first, like BcnVizStacked). */
export interface SourceSeries {
  key: string;
  label: string;
  color: string;
}

export interface TenantEmissions {
  tenant: TenantId;
  tenantName: string;
  projectName: string;
  /** Period the records grids cover. */
  periodStart: string;
  periodEnd: string;
  trips: Trip[];
  equipment: EquipmentUse[];
  flags: RecordFlag[];
  totals: {
    miles: number;
    trips: number;
    equipmentHours: number;
    co2eTons: number;
    tier4Share: number;
  };
  activity: {
    title: string;
    measure: string;
    unit: BucketUnit;
    points: { date: string; values: Record<string, number> }[];
    series: SourceSeries[];
  };
  pollutants: PollutantRow[];
}

export const TODAY = '2026-06-17';

// ── Deterministic PRNG ───────────────────────────────────────────────────────
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const MS_DAY = 86_400_000;
const iso = (t: number) => new Date(t).toISOString().slice(0, 10);
const dayList = (start: string, end: string): string[] => {
  const out: string[] = [];
  for (let t = Date.parse(start); t <= Date.parse(end); t += MS_DAY) {
    const dow = new Date(t).getUTCDay();
    if (dow !== 0 && dow !== 6) out.push(iso(t));
  }
  return out;
};
const round1 = (n: number) => Math.round(n * 10) / 10;

// ── Placeholder factors (NOT EMFAC/OFFROAD — method pending) ─────────────────
// CO2e grams per mile by class; criteria pollutants grams per mile.
const ON_ROAD_G_PER_MILE: Record<VehicleClass, Record<string, number>> = {
  Passenger: { CO2e: 330, ROG: 0.012, NOx: 0.03, CO: 0.6, PM10: 0.009, 'PM2.5': 0.004 },
  'Light Truck': { CO2e: 460, ROG: 0.02, NOx: 0.06, CO: 0.9, PM10: 0.012, 'PM2.5': 0.006 },
  'Heavy Truck': { CO2e: 1600, ROG: 0.05, NOx: 2.1, CO: 0.45, PM10: 0.06, 'PM2.5': 0.03 },
};
// Grams per horsepower-hour by tier, applied with a flat load factor.
const LOAD_FACTOR = 0.5;
const OFF_ROAD_G_PER_HP_HR: Record<EngineTier, Record<string, number>> = {
  'Tier 4 Final': { CO2e: 530, ROG: 0.06, NOx: 0.26, CO: 2.2, PM10: 0.012, 'PM2.5': 0.011 },
  'Tier 4 Interim': { CO2e: 530, ROG: 0.1, NOx: 1.4, CO: 2.6, PM10: 0.02, 'PM2.5': 0.018 },
  'Tier 3': { CO2e: 530, ROG: 0.18, NOx: 2.8, CO: 2.6, PM10: 0.15, 'PM2.5': 0.14 },
  Electric: { CO2e: 0, ROG: 0, NOx: 0, CO: 0, PM10: 0, 'PM2.5': 0 },
};
const POLLUTANTS: { key: string; unit: string }[] = [
  { key: 'CO2e', unit: 'Metric tons' },
  { key: 'NOx', unit: 'Pounds' },
  { key: 'ROG', unit: 'Pounds' },
  { key: 'CO', unit: 'Pounds' },
  { key: 'PM10', unit: 'Pounds' },
  { key: 'PM2.5', unit: 'Pounds' },
];
const G_PER_LB = 453.592;

// ── Fleet definitions ────────────────────────────────────────────────────────
interface Driver {
  name: string;
  company: string;
  origin: string;
  /** One-way miles from origin to the work area cluster. */
  oneWay: number;
  vehicle: string;
  vehicleClass: VehicleClass;
  plate: string;
  /** Chance a given trip carries a second person. */
  carpool: number;
}
interface Unit {
  unit: string;
  equipmentClass: string;
  tier: EngineTier;
  hp: number;
  serial: string;
  company: string;
  /** Typical hours per working day. */
  hours: number;
}
interface TenantFleet {
  seed: number;
  start: string;
  end: string;
  sites: string[];
  drivers: Driver[];
  units: Unit[];
  /** Chance a driver works a given day. */
  attendance: number;
}

const DCP_FLEET: TenantFleet = {
  seed: 1919,
  start: '2026-04-06',
  end: TODAY,
  sites: [
    'DCTR2-DH-010', 'DCTR2-DH-012', 'DCTR2-DH-100', 'DCTR1-DH-008', 'DCRDS-DH-184',
    'DCRDS-DH-292', 'DCRDS-DH-294', 'DCRAI-DH-012', 'DCRAI-DH-014', 'DCBPP-DH-034', 'DCBPP-DH-066',
  ],
  attendance: 0.62,
  drivers: [
    { name: 'Christy Pierce', company: 'ESA', origin: 'Sacramento office', oneWay: 24, vehicle: 'Subaru Crosstrek', vehicleClass: 'Passenger', plate: '8ULM301', carpool: 0.35 },
    { name: 'Alicia Manzo', company: 'ESA', origin: 'Sacramento office', oneWay: 24, vehicle: 'Toyota RAV4', vehicleClass: 'Passenger', plate: '7PKT882', carpool: 0.4 },
    { name: 'CJ January', company: 'ESA', origin: 'Sacramento office', oneWay: 26, vehicle: 'Jeep Compass', vehicleClass: 'Passenger', plate: '9BRD114', carpool: 0.1 },
    { name: 'M. Vasquez', company: 'Bayline Drilling', origin: 'Martinez yard', oneWay: 58, vehicle: 'Ford F-150', vehicleClass: 'Light Truck', plate: '61437H2', carpool: 0.55 },
    { name: 'T. Reyes', company: 'Bayline Drilling', origin: 'Martinez yard', oneWay: 58, vehicle: 'Ford F-600 flatbed', vehicleClass: 'Heavy Truck', plate: '48213K7', carpool: 0.5 },
    { name: 'S. Ortiz', company: 'Bayline Drilling', origin: 'Martinez yard', oneWay: 58, vehicle: 'Kenworth T370 water truck', vehicleClass: 'Heavy Truck', plate: '92184M1', carpool: 0 },
    { name: 'R. Okafor', company: 'Northgate Geotechnical', origin: 'Lodi office', oneWay: 31, vehicle: 'Chevrolet Colorado', vehicleClass: 'Light Truck', plate: '55K2093', carpool: 0.2 },
    { name: 'D. Lindqvist', company: 'Northgate Geotechnical', origin: 'Lodi office', oneWay: 31, vehicle: 'Toyota Tacoma', vehicleClass: 'Light Truck', plate: '4XTR772', carpool: 0.15 },
    { name: 'P. Nakamura', company: 'Carquinez CPT', origin: 'Richmond yard', oneWay: 66, vehicle: 'Freightliner M2 CPT truck', vehicleClass: 'Heavy Truck', plate: '77C1408', carpool: 0.6 },
    { name: 'J. Ferreira', company: 'Delta Survey Co.', origin: 'Dixon office', oneWay: 38, vehicle: 'Ford Ranger', vehicleClass: 'Light Truck', plate: '3DSV219', carpool: 0.45 },
    { name: 'L. Ahmadi', company: 'DWR', origin: 'West Sacramento office', oneWay: 21, vehicle: 'Ford Escape Hybrid', vehicleClass: 'Passenger', plate: 'E180442', carpool: 0.2 },
    { name: 'K. Brandt', company: 'Valley Site Services', origin: 'Rancho Cordova yard', oneWay: 34, vehicle: 'Hino 268 service truck', vehicleClass: 'Heavy Truck', plate: '90311V2', carpool: 0 },
  ],
  units: [
    { unit: 'GtechDrill GT-8', equipmentClass: 'Drill Rig', tier: 'Tier 4 Final', hp: 74, serial: 'GT8-2210-114', company: 'Bayline Drilling', hours: 7.4 },
    { unit: 'CME-75 track rig', equipmentClass: 'Drill Rig', tier: 'Tier 4 Final', hp: 120, serial: 'CME75-1873', company: 'Bayline Drilling', hours: 6.8 },
    { unit: 'Geoprobe 7822DT', equipmentClass: 'Direct Push Rig', tier: 'Tier 4 Final', hp: 63, serial: 'GP7822-0451', company: 'Northgate Geotechnical', hours: 5.6 },
    { unit: '30-ton CPT rig', equipmentClass: 'CPT Rig', tier: 'Tier 4 Interim', hp: 173, serial: 'CPT30-2207', company: 'Carquinez CPT', hours: 6.1 },
    { unit: 'Doosan G25 generator', equipmentClass: 'Generator', tier: 'Tier 4 Final', hp: 38, serial: 'G25-88610', company: 'Bayline Drilling', hours: 4.2 },
    { unit: 'Allmand light tower', equipmentClass: 'Light Tower', tier: 'Tier 3', hp: 14, serial: 'NL-6213', company: 'Valley Site Services', hours: 2.4 },
  ],
};

const VW_FLEET: TenantFleet = {
  seed: 2026,
  start: '2026-05-04',
  end: TODAY,
  sites: ['Main embankment', 'Spillway', 'Outlet works tunnel', 'Borrow Area B', 'Coyote Creek staging'],
  attendance: 0.85,
  drivers: [
    { name: 'A. Guzman', company: 'Sierra Granite Constructors', origin: 'San Jose yard', oneWay: 21, vehicle: 'Ford F-250', vehicleClass: 'Light Truck', plate: '19SG442', carpool: 0.3 },
    { name: 'B. Tran', company: 'Sierra Granite Constructors', origin: 'San Jose yard', oneWay: 21, vehicle: 'Ram 2500', vehicleClass: 'Light Truck', plate: '19SG517', carpool: 0.3 },
    { name: 'E. Castillo', company: 'Sierra Granite Constructors', origin: 'Gilroy', oneWay: 14, vehicle: 'Honda Civic', vehicleClass: 'Passenger', plate: '8HXC201', carpool: 0.25 },
    { name: 'H. Patel', company: 'Coyote Hauling', origin: 'Morgan Hill quarry', oneWay: 9, vehicle: 'Peterbilt 567 end dump', vehicleClass: 'Heavy Truck', plate: '61CH008', carpool: 0 },
    { name: 'I. Moreno', company: 'Coyote Hauling', origin: 'Morgan Hill quarry', oneWay: 9, vehicle: 'Peterbilt 567 end dump', vehicleClass: 'Heavy Truck', plate: '61CH011', carpool: 0 },
    { name: 'N. Osei', company: 'Coyote Hauling', origin: 'Morgan Hill quarry', oneWay: 9, vehicle: 'Mack Granite end dump', vehicleClass: 'Heavy Truck', plate: '61CH014', carpool: 0 },
    { name: 'W. Liang', company: 'Valley Water', origin: 'Almaden campus', oneWay: 19, vehicle: 'Chevrolet Bolt', vehicleClass: 'Passenger', plate: 'VW20331', carpool: 0.2 },
    { name: 'S. Delgado', company: 'ESA', origin: 'San Jose office', oneWay: 22, vehicle: 'Toyota Prius', vehicleClass: 'Passenger', plate: '9ESA116', carpool: 0.15 },
  ],
  units: [
    { unit: 'Cat 349 excavator', equipmentClass: 'Excavator', tier: 'Tier 4 Final', hp: 424, serial: 'CAT349-ADSR-01', company: 'Sierra Granite Constructors', hours: 7.6 },
    { unit: 'Cat D8 dozer', equipmentClass: 'Dozer', tier: 'Tier 4 Final', hp: 354, serial: 'CATD8-ADSR-02', company: 'Sierra Granite Constructors', hours: 6.9 },
    { unit: 'Cat 745 articulated truck', equipmentClass: 'Haul Truck', tier: 'Tier 4 Final', hp: 510, serial: 'CAT745-ADSR-03', company: 'Sierra Granite Constructors', hours: 7.8 },
    { unit: 'Cat 825 compactor', equipmentClass: 'Compactor', tier: 'Tier 4 Interim', hp: 405, serial: 'CAT825-ADSR-04', company: 'Sierra Granite Constructors', hours: 6.2 },
    { unit: 'Liebherr LR 1300 crane', equipmentClass: 'Crane', tier: 'Tier 4 Final', hp: 449, serial: 'LR1300-7781', company: 'Sierra Granite Constructors', hours: 4.4 },
    { unit: 'Volvo ECR58 Electric', equipmentClass: 'Excavator', tier: 'Electric', hp: 0, serial: 'ECR58E-0193', company: 'Sierra Granite Constructors', hours: 5.1 },
  ],
};

// ── Generator ────────────────────────────────────────────────────────────────
function generate(fleet: TenantFleet, idPrefix: string) {
  const rnd = mulberry32(fleet.seed);
  const days = dayList(fleet.start, fleet.end);
  const trips: Trip[] = [];
  const equipment: EquipmentUse[] = [];
  const onRoad: Record<string, number> = {};
  const offRoad: Record<string, number> = {};
  const add = (bag: Record<string, number>, k: string, v: number) => (bag[k] = (bag[k] ?? 0) + v);

  days.forEach((date, di) => {
    fleet.drivers.forEach((d, i) => {
      if (rnd() > fleet.attendance) return;
      const site = fleet.sites[(di + i * 3) % fleet.sites.length];
      const round = d.vehicleClass !== 'Heavy Truck' || rnd() > 0.3;
      const miles = round1((round ? 2 : 1) * d.oneWay * (0.92 + rnd() * 0.16));
      const occupants = d.carpool > 0 && rnd() < d.carpool ? 2 : 1;
      const f = ON_ROAD_G_PER_MILE[d.vehicleClass];
      for (const p of POLLUTANTS) add(onRoad, p.key, f[p.key] * miles);
      trips.push({
        id: `${idPrefix}-T${String(trips.length + 1).padStart(4, '0')}`,
        date, site, company: d.company, driver: d.name, vehicle: d.vehicle,
        vehicleClass: d.vehicleClass, licensePlate: d.plate, origin: d.origin,
        occupants, roundTrip: round ? 'Yes' : 'No', miles,
        co2eKg: round1((f.CO2e * miles) / 1000),
      });
    });
    fleet.units.forEach((u, i) => {
      if (rnd() > 0.78) return;
      const site = fleet.sites[(di + i * 2) % fleet.sites.length];
      const hours = round1(u.hours * (0.7 + rnd() * 0.5));
      const f = OFF_ROAD_G_PER_HP_HR[u.tier];
      const hpHr = u.hp * hours * LOAD_FACTOR;
      for (const p of POLLUTANTS) add(offRoad, p.key, f[p.key] * hpHr);
      equipment.push({
        id: `${idPrefix}-E${String(equipment.length + 1).padStart(4, '0')}`,
        date, site, company: u.company, unit: u.unit, equipmentClass: u.equipmentClass,
        tier: u.tier, horsepower: u.hp, serialNumber: u.serial, hours,
        co2eKg: round1((f.CO2e * hpHr) / 1000),
      });
    });
  });

  // Newest first, the grid's reading order.
  trips.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  equipment.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

  const pollutants: PollutantRow[] = POLLUTANTS.map((p) => {
    const conv = p.key === 'CO2e' ? 1_000_000 : G_PER_LB;
    return {
      pollutant: p.key,
      unit: p.unit,
      onRoad: round1((onRoad[p.key] ?? 0) / conv),
      offRoad: round1((offRoad[p.key] ?? 0) / conv),
    };
  });

  return { trips, equipment, pollutants };
}

/** The data problems Laura and Leah found by eye, planted so the flags have work. */
function plantFlags(trips: Trip[], sites: string[], silentSite: string | null): RecordFlag[] {
  const flags: RecordFlag[] = [];
  // Zero-mile trips.
  [7, 41, 118].forEach((i) => {
    const t = trips[i];
    if (!t) return;
    t.miles = 0;
    t.co2eKg = 0;
    flags.push({ kind: 'zero-miles', label: 'Zero Miles', date: t.date, site: t.site, detail: `${t.driver}, ${t.vehicle}` });
  });
  // Same driver and origin, very different round-trip miles.
  const compass = trips.filter((t) => t.vehicle === 'Jeep Compass' && t.roundTrip === 'Yes');
  if (compass.length > 2) {
    const a = compass[2];
    a.miles = 17;
    a.co2eKg = round1((330 * 17) / 1000);
    flags.push({
      kind: 'round-trip-mismatch', label: 'Round Trip Mismatch', date: a.date, site: a.site,
      detail: `${a.driver}, ${a.origin}: 17 miles, usually ${Math.round(compass[0].miles)}`,
    });
  }
  // Occupants not recorded.
  [23, 96].forEach((i) => {
    const t = trips[i];
    if (!t) return;
    t.occupants = null;
    flags.push({ kind: 'no-occupants', label: 'No Occupant Count', date: t.date, site: t.site, detail: `${t.driver}, ${t.vehicle}` });
  });
  // An active site with no records in the last two weeks.
  if (silentSite) {
    const last = trips.find((t) => t.site === silentSite);
    flags.push({
      kind: 'site-silent', label: 'No Records', date: TODAY, site: silentSite,
      detail: last
        ? `Last trip logged ${new Date(`${last.date}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' })}`
        : 'No trips logged this period',
    });
  }
  void sites;
  return flags;
}

/** On-road rows recomputed from the trips as they stand (after flagged edits). */
function withOnRoad(rows: PollutantRow[], trips: Trip[]): PollutantRow[] {
  return rows.map((r) => {
    const g = trips.reduce((n, t) => n + ON_ROAD_G_PER_MILE[t.vehicleClass][r.pollutant] * t.miles, 0);
    return { ...r, onRoad: round1(g / (r.pollutant === 'CO2e' ? 1_000_000 : G_PER_LB)) };
  });
}

function totalsOf(trips: Trip[], equipment: EquipmentUse[]) {
  const hours = equipment.reduce((n, e) => n + e.hours, 0);
  const t4 = equipment.filter((e) => e.tier === 'Tier 4 Final' || e.tier === 'Electric').reduce((n, e) => n + e.hours, 0);
  const kg = trips.reduce((n, t) => n + t.co2eKg, 0) + equipment.reduce((n, e) => n + e.co2eKg, 0);
  return {
    miles: Math.round(trips.reduce((n, t) => n + t.miles, 0)),
    trips: trips.length,
    equipmentHours: Math.round(hours),
    co2eTons: round1(kg / 1000),
    tier4Share: hours > 0 ? Math.round((t4 / hours) * 100) : 0,
  };
}

// ── Delta Conveyance ─────────────────────────────────────────────────────────
const dcpGen = generate(DCP_FLEET, 'DCP');
// DCRDS-DH-184 goes quiet for the last two weeks of the period.
dcpGen.trips.splice(
  0,
  dcpGen.trips.length,
  ...dcpGen.trips.filter((t) => !(t.site === 'DCRDS-DH-184' && t.date > '2026-06-03')),
);
const dcpFlags = plantFlags(dcpGen.trips, DCP_FLEET.sites, 'DCRDS-DH-184');

const COMPANY_SERIES: SourceSeries[] = [
  { key: 'Bayline Drilling', label: 'Bayline Drilling', color: 'var(--bcn-mark-sky)' },
  { key: 'Carquinez CPT', label: 'Carquinez CPT', color: 'var(--bcn-mark-teal)' },
  { key: 'Northgate Geotechnical', label: 'Northgate Geotechnical', color: 'var(--bcn-mark-amber)' },
  { key: 'ESA', label: 'ESA', color: 'var(--bcn-mark-violet)' },
  { key: 'Other', label: 'Other', color: 'var(--color-border-default-strong)' },
];
const dcpMilesByDay = new Map<string, Record<string, number>>();
for (const t of dcpGen.trips) {
  const k = COMPANY_SERIES.some((s) => s.key === t.company) ? t.company : 'Other';
  const v = dcpMilesByDay.get(t.date) ?? {};
  v[k] = (v[k] ?? 0) + t.miles;
  dcpMilesByDay.set(t.date, v);
}
const dcpActivity = bucketStacked(
  dayList(DCP_FLEET.start, DCP_FLEET.end).map((date) => ({ date, values: dcpMilesByDay.get(date) ?? {} })),
  { maxColumns: 12 },
);

export const DCP: TenantEmissions = {
  tenant: 'dcp',
  tenantName: 'DWR',
  projectName: 'Delta Conveyance',
  periodStart: DCP_FLEET.start,
  periodEnd: DCP_FLEET.end,
  trips: dcpGen.trips,
  equipment: dcpGen.equipment,
  flags: dcpFlags,
  totals: totalsOf(dcpGen.trips, dcpGen.equipment),
  activity: {
    title: `Miles ${dcpActivity.perLabel.replace(/ (\w)/, (_, c: string) => ` ${c.toUpperCase()}`)} by Company`,
    measure: 'Miles',
    unit: dcpActivity.unit,
    points: dcpActivity.points.map((p) => ({
      date: p.date,
      values: Object.fromEntries(Object.entries(p.values).map(([k, v]) => [k, Math.round(v)])),
    })),
    series: COMPANY_SERIES,
  },
  pollutants: withOnRoad(dcpGen.pollutants, dcpGen.trips),
};

// ── TRANS-1: single-occupancy trips (passenger vehicles and light trucks) ─────
// Heavy trucks and equipment carry crew by necessity and are not commute trips,
// so the solo share is read over passenger and light-truck trips only — an
// assumption (which vehicles count is an open question for DCA).
export interface SoloTripShare {
  counted: number;
  solo: number;
  carpool: number;
  unrecorded: number;
  /** Percent of counted trips with one occupant. */
  soloShare: number;
  byCompany: { name: string; soloShare: number; trips: number }[];
  /** TRANS-1: 25% fewer single-occupancy trips than a baseline nobody has set. */
  targetReduction: number;
  baseline: number | null;
}

function soloShareOf(trips: Trip[]): SoloTripShare {
  const counted = trips.filter((t) => t.vehicleClass !== 'Heavy Truck');
  const solo = counted.filter((t) => t.occupants === 1).length;
  const carpool = counted.filter((t) => (t.occupants ?? 0) > 1).length;
  const unrecorded = counted.filter((t) => t.occupants === null).length;
  const companies = [...new Set(counted.map((t) => t.company))];
  const byCompany = companies
    .map((name) => {
      const c = counted.filter((t) => t.company === name && t.occupants !== null);
      const s = c.filter((t) => t.occupants === 1).length;
      return { name, trips: c.length, soloShare: c.length ? Math.round((s / c.length) * 100) : 0 };
    })
    .sort((a, b) => b.soloShare - a.soloShare);
  return {
    counted: counted.length,
    solo,
    carpool,
    unrecorded,
    soloShare: Math.round((solo / Math.max(1, solo + carpool)) * 100),
    byCompany,
    targetReduction: 25,
    baseline: null,
  };
}

export const DCP_SOLO: SoloTripShare = soloShareOf(DCP.trips);

// ── Valley Water: Anderson Dam Seismic Retrofit, net-zero construction ────────
const vwGen = generate(VW_FLEET, 'ADSR');
const vwFlags = plantFlags(vwGen.trips, VW_FLEET.sites, null);

const SOURCE_SERIES: SourceSeries[] = [
  { key: 'offroad', label: 'Off-Road Equipment', color: 'var(--bcn-mark-amber)' },
  { key: 'hauling', label: 'Hauling', color: 'var(--bcn-mark-sky)' },
  { key: 'commute', label: 'Worker Commute', color: 'var(--bcn-mark-violet)' },
];

// Construction began before the log reached Beacon; earlier months are the
// contractor's monthly summaries (invented), the last two are computed from the
// records on this page.
const VW_HISTORY: { month: string; offroad: number; hauling: number; commute: number }[] = [
  ['2025-01', 41, 15, 6], ['2025-02', 44, 16, 6], ['2025-03', 50, 19, 6],
  ['2025-04', 57, 21, 7], ['2025-05', 60, 23, 7], ['2025-06', 62, 24, 7],
  ['2025-07', 63, 24, 7], ['2025-08', 64, 25, 7], ['2025-09', 61, 23, 7],
  ['2025-10', 58, 21, 7], ['2025-11', 49, 18, 6], ['2025-12', 40, 14, 6],
  ['2026-01', 40, 14, 6], ['2026-02', 45, 17, 6], ['2026-03', 53, 20, 6],
  ['2026-04', 59, 22, 7],
].map(([month, offroad, hauling, commute]) => ({
  month: month as string, offroad: offroad as number, hauling: hauling as number, commute: commute as number,
}));

const vwComputed = new Map<string, { offroad: number; hauling: number; commute: number }>();
for (const t of vwGen.trips) {
  const m = t.date.slice(0, 7);
  const v = vwComputed.get(m) ?? { offroad: 0, hauling: 0, commute: 0 };
  if (t.vehicleClass === 'Heavy Truck') v.hauling += t.co2eKg / 1000;
  else v.commute += t.co2eKg / 1000;
  vwComputed.set(m, v);
}
for (const e of vwGen.equipment) {
  const m = e.date.slice(0, 7);
  const v = vwComputed.get(m) ?? { offroad: 0, hauling: 0, commute: 0 };
  v.offroad += e.co2eKg / 1000;
  vwComputed.set(m, v);
}
const vwMonths = [
  ...VW_HISTORY,
  ...[...vwComputed.entries()]
    .sort(([a], [b]) => (a < b ? -1 : 1))
    .map(([month, v]) => ({ month, offroad: Math.round(v.offroad), hauling: Math.round(v.hauling), commute: Math.round(v.commute) })),
];
const vwEmittedToDate = vwMonths.reduce((n, m) => n + m.offroad + m.hauling + m.commute, 0);

export const VW: TenantEmissions = {
  tenant: 'valley-water',
  tenantName: 'Valley Water',
  projectName: 'Anderson Dam Seismic Retrofit',
  periodStart: VW_FLEET.start,
  periodEnd: VW_FLEET.end,
  trips: vwGen.trips,
  equipment: vwGen.equipment,
  flags: vwFlags,
  totals: totalsOf(vwGen.trips, vwGen.equipment),
  activity: {
    title: 'Metric Tons CO2e per Month by Source',
    measure: 'Metric tons CO2e',
    unit: 'month',
    points: vwMonths.map((m) => ({ date: `${m.month}-01`, values: { offroad: m.offroad, hauling: m.hauling, commute: m.commute } })),
    series: SOURCE_SERIES,
  },
  pollutants: withOnRoad(vwGen.pollutants, vwGen.trips),
};

export interface NetZeroBalance {
  /** Metric tons CO2e emitted by construction to date (estimate). */
  emitted: number;
  /** Metric tons retired against the project. */
  retired: number;
  /** Emitted minus retired; what the next retirement must cover. */
  outstanding: number;
  /** The EIR's construction estimate for the whole project, metric tons (invented). */
  projectEstimate: number;
  retirements: OffsetRetirement[];
  bySource: { label: string; tons: number; color: string }[];
}

const VW_RETIREMENTS: OffsetRetirement[] = [
  { date: '2025-07-15', registry: 'Climate Action Reserve', project: 'Sierra Foothills Improved Forest Management', tons: 350 },
  { date: '2026-02-27', registry: 'American Carbon Registry', project: 'Central Valley Dairy Digester', tons: 420 },
];
const retired = VW_RETIREMENTS.reduce((n, r) => n + r.tons, 0);

export const VW_NET_ZERO: NetZeroBalance = {
  emitted: vwEmittedToDate,
  retired,
  outstanding: vwEmittedToDate - retired,
  projectEstimate: 4_600,
  retirements: VW_RETIREMENTS,
  bySource: SOURCE_SERIES.map((s) => ({
    label: s.label,
    color: s.color,
    tons: vwMonths.reduce((n, m) => n + (m[s.key as 'offroad' | 'hauling' | 'commute'] ?? 0), 0),
  })),
};

export const TENANTS: Record<TenantId, TenantEmissions> = { dcp: DCP, 'valley-water': VW };

// ── Records grids ────────────────────────────────────────────────────────────
// The two grids at the foot of the page are the generic stream index
// (BcnStreamRecords), fed stream-shaped objects so the columns derive from a
// declared schema exactly as every other Monitoring Data stream does. The column
// set is the per-site Excel DCA already agreed to, plus the estimate.

function recordsStream(
  t: TenantEmissions,
  kind: 'trips' | 'equipment',
): MonitoringStream {
  const base = {
    sourceForm: 'Equipment Use Log',
    sourceSystem: 'Fulcrum',
    status: 'active' as const,
    lastSync: `${TODAY} 06:10`,
    firstRecord: t.periodStart,
    syncCadence: 'Daily · 06:00',
    description: '',
  };
  if (kind === 'trips') {
    return {
      ...base,
      id: `${t.tenant}-trips`,
      name: 'Vehicle Trips',
      icon: 'car',
      markColor: 'var(--bcn-mark-sky)',
      table: `${t.tenant.replace('-', '_')}_monitoring.equipment_use_trips`,
      recordCount: t.trips.length,
      fields: [
        { name: 'date', label: 'Date', type: 'date' },
        { name: 'site', label: 'Site', type: 'text' },
        { name: 'company', label: 'Company', type: 'text' },
        { name: 'driver', label: 'Driver', type: 'text' },
        { name: 'vehicle', label: 'Vehicle', type: 'text' },
        { name: 'vehicleClass', label: 'Class', type: 'select' },
        { name: 'origin', label: 'Trip Origin', type: 'text' },
        { name: 'occupants', label: 'Occupants', type: 'number' },
        { name: 'roundTrip', label: 'Round Trip', type: 'select' },
        { name: 'miles', label: 'Miles', type: 'number' },
        { name: 'co2eKg', label: 'CO2e (kg, est.)', type: 'number' },
      ],
      sampleRecords: t.trips.map(({ id: _id, licensePlate: _p, ...r }) => r),
    };
  }
  return {
    ...base,
    id: `${t.tenant}-equipment`,
    name: 'Equipment Use',
    icon: 'timer',
    markColor: 'var(--bcn-mark-amber)',
    table: `${t.tenant.replace('-', '_')}_monitoring.equipment_use_runtime`,
    recordCount: t.equipment.length,
    fields: [
      { name: 'date', label: 'Date', type: 'date' },
      { name: 'site', label: 'Site', type: 'text' },
      { name: 'company', label: 'Company', type: 'text' },
      { name: 'unit', label: 'Equipment', type: 'text' },
      { name: 'equipmentClass', label: 'Class', type: 'select' },
      { name: 'tier', label: 'Engine Tier', type: 'select' },
      { name: 'horsepower', label: 'Horsepower', type: 'number' },
      { name: 'serialNumber', label: 'Serial Number', type: 'text' },
      { name: 'hours', label: 'Hours', type: 'number' },
      { name: 'co2eKg', label: 'CO2e (kg, est.)', type: 'number' },
    ],
    sampleRecords: t.equipment.map(({ id: _id, ...r }) => r),
  };
}

export const RECORD_STREAMS: Record<TenantId, { trips: MonitoringStream; equipment: MonitoringStream }> = {
  dcp: { trips: recordsStream(DCP, 'trips'), equipment: recordsStream(DCP, 'equipment') },
  'valley-water': { trips: recordsStream(VW, 'trips'), equipment: recordsStream(VW, 'equipment') },
};
