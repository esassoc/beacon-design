// The obligations registry — types and derived views over the 402 real rows.
//
// PROVENANCE: obligations-registry.json is extracted verbatim from the Actions-and-
// Obligations specimen by `node scripts/extract-obligations.mjs <specimen.html>`, which
// verifies the counts the brief asserts and fails on a mismatch. Nothing here invents a
// row, a category or a value — every string on every page traces back to that file.
//
// NO STATUS MODEL. The brief proposes four derived compliance statuses (Not in effect /
// No evidence / In compliance / Out of compliance); the team dropped them on 2026-09-03.
// Nothing in this module computes or exposes a compliance verdict, and the registry
// carries no evidence data to derive one from. Do not add one back without that decision
// being revisited — see the plan and the specimen, whose own registry section renders no
// status either.
//
// The three axes are self-describing: each carries the `field` naming the obligation
// property that holds its ids, so lookups below are generic rather than per-axis.
import registryData from './obligations-registry.json';

// --- the record ---------------------------------------------------------------

export type ObligationClass = 'adhere' | 'monitor' | 'notify' | 'roster';

export interface Obligation {
  /** Registry id, e.g. "3-069a". Stable; used as the detail route param. */
  id: string;
  /** A noun phrase naming the thing governed, never the value. */
  title: string;
  cls: ObligationClass;
  /** The requirement text — what the duty actually says. */
  standard: string;
  /** The non-compliance a monitor observes. This is what a field form offers. */
  condition: string;
  /** Where sources disagree, e.g. "10 mph in the ITP, 15 mph in the BiOp". May be ''. */
  parameters: string;
  /** Display names of the species this governs. May be empty. */
  species: string[];
  /** Notify deadline, e.g. "24 hours". Only the Notify class carries one. */
  window: string;
  /** Commitment ids that state this duty, e.g. ["BIO-34", "CM 6.3.2.2"]. */
  commitments: string[];
  /** Waits on an approved action before it takes effect. 17 rows. */
  gate: boolean;
  /** Satisfied by a physical control — fencing, signage, screens, kits. 46 rows. */
  installedControl: boolean;
  /** Minor-category ids on each axis. Resolve names via itemName(). */
  subjects: string[];
  activities: string[];
  speciesIds: string[];
}

/**
 * The four classes are system-owned and drive the evidence shape. Definitions are the
 * brief's own. No colors: class is a categorical facet, not a status, so it renders as a
 * quiet chip (makeQuietChipRenderer) rather than a colored one.
 */
export const CLASS_META: Record<ObligationClass, { label: string; definition: string }> = {
  adhere: { label: 'Adhere', definition: 'A rule the work follows while its conditions apply' },
  monitor: { label: 'Monitor', definition: 'A survey, inspection or watch on a cadence or trigger' },
  notify: { label: 'Notify', definition: 'A report owed when an event occurs, within a window' },
  roster: {
    label: 'Roster',
    definition: 'A qualification every person or machine holds before it works',
  },
};

/** Alphabetical, matching the registry's own ordering rule. */
export const CLASS_ORDER: ObligationClass[] = ['adhere', 'monitor', 'notify', 'roster'];

// --- the axes -----------------------------------------------------------------

export type AxisId = 'subject' | 'activity' | 'species';

export interface AxisItem {
  id: string;
  name: string;
  /** What the category covers, in prose. Often '' on the species axis. */
  scope: string;
  /** How many obligations sit under it. */
  n: number;
}

export interface AxisGroup {
  id: string;
  name: string;
  items: AxisItem[];
}

export interface Axis {
  id: AxisId;
  name: string;
  /** The Obligation property holding this axis's item ids. */
  field: 'subjects' | 'activities' | 'speciesIds';
  groupLabel: string;
  itemLabel: string;
  groups: AxisGroup[];
}

// --- load ---------------------------------------------------------------------

type RawObligation = Omit<Obligation, 'cls' | 'installedControl' | 'speciesIds'> & {
  class: ObligationClass;
  installed_control: boolean;
  species_ids: string[];
};

type RawAxis = Omit<Axis, 'field' | 'groupLabel' | 'itemLabel'> & {
  field: string;
  group_label: string;
  item_label: string;
};

const raw = registryData as unknown as { axes: RawAxis[]; obligations: RawObligation[] };

/** The registry's own field names differ from ours only in case convention. */
const FIELD_BY_AXIS: Record<string, Axis['field']> = {
  subjects: 'subjects',
  activities: 'activities',
  species_ids: 'speciesIds',
};

export const AXES: Axis[] = raw.axes.map((a) => ({
  id: a.id,
  name: a.name,
  field: FIELD_BY_AXIS[a.field],
  groupLabel: a.group_label,
  itemLabel: a.item_label,
  groups: a.groups,
}));

export const OBLIGATIONS: Obligation[] = raw.obligations.map((o) => ({
  id: o.id,
  title: o.title,
  cls: o.class,
  standard: o.standard,
  condition: o.condition,
  parameters: o.parameters,
  species: o.species ?? [],
  window: o.window,
  commitments: o.commitments ?? [],
  gate: o.gate,
  installedControl: o.installed_control,
  subjects: o.subjects ?? [],
  activities: o.activities ?? [],
  speciesIds: o.species_ids ?? [],
}));

export const AXIS_BY_ID: Record<AxisId, Axis> = Object.fromEntries(
  AXES.map((a) => [a.id, a]),
) as Record<AxisId, Axis>;

export const BY_ID = new Map(OBLIGATIONS.map((o) => [o.id, o]));

// --- category lookups ----------------------------------------------------------

/** item id → { item, group } for every axis, built once. */
const ITEM_INDEX: Record<AxisId, Map<string, { item: AxisItem; group: AxisGroup }>> =
  Object.fromEntries(
    AXES.map((a) => [
      a.id,
      new Map(a.groups.flatMap((g) => g.items.map((item) => [item.id, { item, group: g }]))),
    ]),
  ) as Record<AxisId, Map<string, { item: AxisItem; group: AxisGroup }>>;

/** Display name for one category id, falling back to the id when unknown. */
export const itemName = (axis: AxisId, id: string): string =>
  ITEM_INDEX[axis].get(id)?.item.name ?? id;

/** The group (major category / activity group / taxon) one item sits under. */
export const groupOf = (axis: AxisId, id: string): AxisGroup | undefined =>
  ITEM_INDEX[axis].get(id)?.group;

/** Every item name an obligation carries on one axis, alphabetical. */
export const itemNames = (o: Obligation, axis: AxisId): string[] =>
  o[AXIS_BY_ID[axis].field].map((id) => itemName(axis, id)).sort((a, b) => a.localeCompare(b));

/** Every distinct group name an obligation touches on one axis, alphabetical. */
export const groupNames = (o: Obligation, axis: AxisId): string[] => [
  ...new Set(
    o[AXIS_BY_ID[axis].field]
      .map((id) => groupOf(axis, id)?.name)
      .filter((n): n is string => Boolean(n)),
  ),
].sort((a, b) => a.localeCompare(b));

/** Every obligation filed under one category id. */
export const obligationsUnder = (axis: AxisId, itemId: string): Obligation[] =>
  OBLIGATIONS.filter((o) => o[AXIS_BY_ID[axis].field].includes(itemId));

// --- the flat catalog projection ------------------------------------------------

/**
 * One row of the data-catalog grid — the "filing cabinet" view. Flat by design: the
 * hierarchy is the registry's job, and the catalog is deliberately not that.
 * Multi-valued axes join to a single cell so the grid stays sortable and filterable.
 */
export interface ObligationRow {
  id: string;
  title: string;
  cls: string;
  subjectMajor: string;
  subjectMinor: string;
  activities: string;
  species: string;
  commitments: string;
}

const join = (xs: string[]) => xs.join(', ');

export const CATALOG_ROWS: ObligationRow[] = OBLIGATIONS.map((o) => ({
  id: o.id,
  title: o.title,
  cls: CLASS_META[o.cls].label,
  subjectMajor: join(groupNames(o, 'subject')),
  subjectMinor: join(itemNames(o, 'subject')),
  activities: join(itemNames(o, 'activity')),
  species: join(itemNames(o, 'species')),
  commitments: join(o.commitments),
})).sort((a, b) => a.title.localeCompare(b.title));

// --- counts the pages quote -------------------------------------------------------

/** Derived, never hard-coded — the registry is the only source for any total. */
export const TOTALS = {
  obligations: OBLIGATIONS.length,
  byClass: CLASS_ORDER.reduce<Record<ObligationClass, number>>(
    (acc, c) => ({ ...acc, [c]: OBLIGATIONS.filter((o) => o.cls === c).length }),
    {} as Record<ObligationClass, number>,
  ),
  gated: OBLIGATIONS.filter((o) => o.gate).length,
  installedControls: OBLIGATIONS.filter((o) => o.installedControl).length,
  withParameters: OBLIGATIONS.filter((o) => o.parameters.trim()).length,
  commitments: new Set(OBLIGATIONS.flatMap((o) => o.commitments)).size,
};
