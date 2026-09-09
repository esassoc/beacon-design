/**
 * The REGISTRY TREE — the hierarchical view of the 402 obligations, built for setup
 * step 5. The data catalog is the flat filing cabinet; this is the shape a person can
 * actually read, and the shape they approve in.
 *
 * WHY SUBJECT IS THE SPINE. Three axes were measured against the real registry before
 * this was written (2026-09-08):
 *
 *   - ACTIVITY cannot be the spine. Construction activities in Beacon are per-project
 *     and hand-authored (`ProjectConstructionActivity` — free-text name, sort order,
 *     drag to reorder), so there is no fixed list to tick, and the project authors its
 *     own list on an EARLIER setup page. The 34 activity slugs in the extract are
 *     specimen artifacts, not app entities. They also do not narrow: each obligation
 *     carries 2.2 of them and the semantics are disjunctive, so deselecting an activity
 *     mostly removes nothing (in-water-work is tagged on 30 rows and excluding it drops
 *     ZERO; the best single activity, diversions, drops 14). Activity groups; it does
 *     not filter.
 *   - COMMITMENT is already step 2's job (BcnSetupWorkspace decides applicability
 *     commitment-by-commitment), and 312 of them is not a browsable spine.
 *   - SUBJECT is 17 majors over 69 minors, none bigger than 74 rows, most between 20
 *     and 50 — the only grouping a person can hold in their head, and the one the team
 *     already calls "the registry's hierarchical view".
 *
 * Note this is the SETUP job, not the inbox job. Grouping by subject was rejected for
 * the obligations INBOX because 17 groups never shrink to a short daily list. Setup is
 * the opposite task: you want all 17 in front of you, once, because the goal is not
 * missing anything.
 *
 * THE MULTI-FILING PROBLEM, MADE VISIBLE. An obligation can sit under more than one
 * major: 214 sit under exactly one, 165 under two, 23 under three — 613 placements over
 * 402 duties. So branch counts sum to more than the registry. That is a property of the
 * data, not a bug, and the page has to be honest about it or the numbers will look
 * broken. Two consequences carried in the types below:
 *   - `alsoUnder` names a row's OTHER majors, so a duty appearing twice reads as one
 *     duty filed twice rather than two duties.
 *   - the DECISION IS ON THE OBLIGATION, never on the placement. Excluding a row under
 *     Birds excludes the same row under Habitat protection, because it is one duty.
 *     The controller syncs by id; the totals count distinct ids.
 *
 * TWO ROW FLAGS, AND WHAT THEY ARE NOT. Neither is an applicability question, so
 * neither is a decision — they are things the reviewer should SEE while deciding:
 *   - `gated` (17 rows) — the duty does not take effect until an action is approved.
 *     A dependency, not an ambiguity.
 *   - `contested` (232 rows) — the sources state different values ("10 mph in the ITP,
 *     15 mph in the BiOp"). Somebody has to pick, but that is a separate job from
 *     saying whether the duty applies here, and 232 is 58% of the registry — far too
 *     many to be anyone's "exception queue".
 */
import {
  AXIS_BY_ID,
  OBLIGATIONS,
  CLASS_META,
  itemNames,
  type Obligation,
  type ObligationClass,
} from './obligations';

/** One duty as it appears at one place in the tree. */
export interface RegistryRow {
  id: string;
  title: string;
  cls: ObligationClass;
  classLabel: string;
  /** The observable failure — the most useful one-line gloss the registry carries. */
  condition: string;
  /** Waits on an approved action before it takes effect. */
  gated: boolean;
  /** The sources state different values; someone has to pick. */
  contested: boolean;
  /** The other majors this same duty is filed under. Empty for 214 of the 402. */
  alsoUnder: string[];
  /** How many commitments state it — the "why is this here" weight. */
  commitmentCount: number;

  // ── The record itself, for the row's own disclosure. The specimen's registry opens
  //    each duty in place rather than sending you to a detail page, and these are the
  //    fields it shows, in its order. Empty strings/arrays render nothing.
  /** What the duty actually says. Always present. */
  standard: string;
  /** Where the sources disagree, e.g. "10 mph in the ITP, 15 mph in the BiOp". */
  parameters: string;
  /** Notify deadline. Only the Notify class carries one. */
  window: string;
  /** Satisfied by a physical control — fencing, signage, screens, kits. */
  installedControl: boolean;
  /** Commitment codes that state it, in registry order. */
  commitments: string[];
  /** Resolved category names on each axis — the specimen's "where it files" block. */
  subjectNames: string[];
  activityNames: string[];
  speciesNames: string[];
}

/** A minor category — the second level, and the one rows hang off. */
export interface RegistryMinor {
  id: string;
  name: string;
  rows: RegistryRow[];
}

/** A major category — the branch the reviewer approves. */
export interface RegistryMajor {
  /** Slug for DOM ids and controller lookups. */
  key: string;
  name: string;
  minors: RegistryMinor[];
  /** DISTINCT duties under this branch — not the sum of its minors, which double-counts. */
  count: number;
  /** Distinct ids under this branch, for the controller's set maths. */
  ids: string[];
  gated: number;
  contested: number;
}

const SUBJECT = AXIS_BY_ID.subject;

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/** minor id → its major's name, built once. */
const MAJOR_OF = new Map<string, string>();
for (const g of SUBJECT.groups) for (const i of g.items) MAJOR_OF.set(i.id, g.name);

/** Every major an obligation is filed under, deduped and stable. */
const majorsOf = (o: Obligation): string[] => [
  ...new Set(o.subjects.map((s) => MAJOR_OF.get(s)).filter((n): n is string => !!n)),
];

const toRow = (o: Obligation, underMajor: string): RegistryRow => ({
  id: o.id,
  title: o.title,
  cls: o.cls,
  classLabel: CLASS_META[o.cls].label,
  condition: o.condition,
  gated: o.gate,
  contested: o.parameters !== '',
  alsoUnder: majorsOf(o).filter((m) => m !== underMajor),
  commitmentCount: o.commitments.length,
  standard: o.standard,
  parameters: o.parameters,
  window: o.window,
  installedControl: o.installedControl,
  commitments: o.commitments,
  subjectNames: itemNames(o, 'subject'),
  activityNames: itemNames(o, 'activity'),
  speciesNames: o.species,
});

/**
 * The tree. Majors in the registry's own alphabetical order; minors likewise; rows by
 * title so a branch reads as a list rather than an extraction order.
 */
export const REGISTRY_TREE: RegistryMajor[] = SUBJECT.groups.map((g) => {
  const minors: RegistryMinor[] = g.items
    .map((item) => ({
      id: item.id,
      name: item.name,
      rows: OBLIGATIONS.filter((o) => o.subjects.includes(item.id))
        .map((o) => toRow(o, g.name))
        .sort((a, b) => a.title.localeCompare(b.title)),
    }))
    .filter((m) => m.rows.length > 0)
    .sort((a, b) => a.name.localeCompare(b.name));

  // Distinct, because a duty can sit under two MINORS of the same major.
  const ids = [...new Set(minors.flatMap((m) => m.rows.map((r) => r.id)))];
  const seen = new Set<string>();
  const distinct = minors.flatMap((m) => m.rows).filter((r) => !seen.has(r.id) && seen.add(r.id));

  return {
    key: slug(g.name),
    name: g.name,
    minors,
    count: ids.length,
    ids,
    gated: distinct.filter((r) => r.gated).length,
    contested: distinct.filter((r) => r.contested).length,
  };
});

export const REGISTRY_TOTALS = {
  /** Distinct duties in the registry. The only number the progress bar may divide by. */
  duties: OBLIGATIONS.length,
  /** Branches to confirm — the number of decisions if every answer is uniform. */
  branches: REGISTRY_TREE.length,
  /** Placements. Exceeds `duties` because 188 rows are filed under more than one major. */
  placements: REGISTRY_TREE.reduce((n, m) => n + m.count, 0),
  /** Duties filed under more than one major — the reason the two numbers differ. */
  multiFiled: OBLIGATIONS.filter((o) => majorsOf(o).length > 1).length,
  gated: OBLIGATIONS.filter((o) => o.gate).length,
  contested: OBLIGATIONS.filter((o) => o.parameters !== '').length,
};
