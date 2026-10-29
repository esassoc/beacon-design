// Import items from a file (2026-10-28, the SOW review: "import schedule items from a file"). A CSV, or rows pasted
// from a spreadsheet (tabs), read into rows; its columns matched to the item's fields by their headers (the person can
// change any match); then each row placed in the outline: by a Level column (each row under the last row of a level
// above it), else by a Parent column (by name, among the rows above it and the plan's items), else under one item the
// person picks. The result is a list of new items with temporary ids, in order, for the page to add to a draft.

import type { PlanDetailDto, PlanElementCreateDto, PlanLevelDto } from './model';
import { PlanDateTypeEnum } from './model';
import { flattenPlan } from './plan-repo';
import { parseDate, parseOwners } from '../../components/bcn/plan-items-table';

export type ImportField = 'name' | 'level' | 'parent' | 'start' | 'end' | 'milestone' | 'owners' | 'notes' | 'budget' | 'type';
export const IMPORT_FIELDS: { key: ImportField; label: string; required?: boolean; hints: RegExp }[] = [
  { key: 'name', label: 'Name', required: true, hints: /^(name|title|task|item|activity|description of work)$/i },
  { key: 'level', label: 'Level', hints: /^(level|type|wbs level|kind)$/i },
  { key: 'parent', label: 'Parent', hints: /^(parent|under|summary|parent task)$/i },
  { key: 'start', label: 'Start', hints: /^(start|start date|begin|from)$/i },
  { key: 'end', label: 'End', hints: /^(end|end date|finish|due|due date|to)$/i },
  { key: 'type', label: 'Date Type', hints: /^(date type|fixed|scheduled)$/i },
  { key: 'milestone', label: 'Milestone', hints: /^(milestone|is milestone)$/i },
  { key: 'owners', label: 'Owners', hints: /^(owner|owners|lead|leads|assigned to|responsible)$/i },
  { key: 'notes', label: 'Notes', hints: /^(notes|note|comments|description)$/i },
  { key: 'budget', label: 'Budget', hints: /^(budget|cost|amount|estimate)$/i },
];

/** Rows from a CSV or pasted cells: tabs if the first line has any, else commas; quotes honored. */
export function parseTable(text: string): string[][] {
  const clean = text.replace(/^﻿/, '').replace(/\r\n?/g, '\n');
  const sep = (clean.split('\n')[0] ?? '').includes('\t') ? '\t' : ',';
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = '';
  let quoted = false;
  for (let i = 0; i < clean.length; i++) {
    const ch = clean[i];
    if (quoted) {
      if (ch === '"' && clean[i + 1] === '"') (cell += '"'), i++;
      else if (ch === '"') quoted = false;
      else cell += ch;
    } else if (ch === '"' && !cell) quoted = true;
    else if (ch === sep) row.push(cell.trim()), (cell = '');
    else if (ch === '\n') {
      row.push(cell.trim());
      if (row.some((c) => c)) rows.push(row);
      (row = []), (cell = '');
    } else cell += ch;
  }
  row.push(cell.trim());
  if (row.some((c) => c)) rows.push(row);
  return rows;
}

/** Each field's column, matched by header (-1: not in the file). */
export function matchColumns(headers: readonly string[]): Record<ImportField, number> {
  const out = {} as Record<ImportField, number>;
  for (const f of IMPORT_FIELDS) out[f.key] = headers.findIndex((h) => f.hints.test(h.trim()));
  // A Description column fills Notes only when Name came from something else.
  return out;
}

export interface ImportRow {
  /** The file's row number (1 is the header). */
  line: number;
  id: string;
  parentId: string | null;
  depth: number;
  levelName: string;
  dto: PlanElementCreateDto;
  owners: string[];
  /** What's wrong with it; a row with problems isn't added. */
  problems: string[];
}

const money = (v: string) => {
  const m = /^\$?\s*([\d,.]+)\s*([kKmM]?)$/.exec(v.trim());
  if (!m) return null;
  const n = Number(m[1].replace(/,/g, '')) * (m[2].toLowerCase() === 'k' ? 1e3 : m[2].toLowerCase() === 'm' ? 1e6 : 1);
  return Number.isFinite(n) ? Math.round(n) : null;
};

/**
 * The rows as new items, placed in the outline. `under` is where rows go when the file says nothing about the
 * outline (null: the top). Ids are `new-imp-…`, unique per call.
 */
export function placeRows(rows: readonly string[][], map: Record<ImportField, number>, plan: PlanDetailDto, under: string | null): ImportRow[] {
  const levels: PlanLevelDto[] = [...(plan.Levels ?? [])].sort((a, b) => (a.Depth ?? 0) - (b.Depth ?? 0));
  const existing = flattenPlan(plan.Elements);
  const depthOf = (id: string | null) => (id ? (existing.find((x) => x.element.PlanElementID === id)?.element.LevelDepth ?? 0) : 0);
  const levelByName = (v: string) => levels.find((l) => [l.SingularName, l.PluralName].some((n) => (n ?? '').toLowerCase() === v.trim().toLowerCase()));
  const stamp = Math.random().toString(36).slice(2, 7);
  const out: ImportRow[] = [];
  const get = (r: string[], f: ImportField) => (map[f] >= 0 ? (r[map[f]] ?? '').trim() : '');
  rows.forEach((r, i) => {
    const problems: string[] = [];
    const name = get(r, 'name');
    if (!name) problems.push('No name');
    const isMilestone = /^(y|yes|true|1|x)$/i.test(get(r, 'milestone')) || /^milestone$/i.test(get(r, 'level'));
    // Where it goes.
    let parentId: string | null = under;
    let depth = depthOf(under) + 1;
    const levelText = get(r, 'level');
    const parentText = get(r, 'parent');
    if (map.level >= 0 && levelText && !/^milestone$/i.test(levelText)) {
      const level = levelByName(levelText);
      if (!level) problems.push(`No level named ${levelText}`);
      else {
        depth = level.Depth ?? depth;
        const above = [...out].reverse().find((o) => o.depth < depth && !o.dto.IsMilestone);
        parentId = above ? above.id : depthOf(under) < depth ? under : null;
      }
    } else if (map.level >= 0 && /^milestone$/i.test(levelText)) {
      const above = [...out].reverse().find((o) => !o.dto.IsMilestone);
      parentId = above?.id ?? under;
      depth = (above?.depth ?? depthOf(under)) + 1;
    } else if (map.parent >= 0 && parentText) {
      const p = [...out].reverse().find((o) => o.dto.PlanElementName?.toLowerCase() === parentText.toLowerCase());
      const e = existing.find((x) => (x.element.PlanElementName ?? '').toLowerCase() === parentText.toLowerCase())?.element;
      if (p) (parentId = p.id), (depth = p.depth + 1);
      else if (e) (parentId = e.PlanElementID ?? null), (depth = (e.LevelDepth ?? 0) + 1);
      else problems.push(`No item named ${parentText} above it`);
    }
    const level = levels.find((l) => l.Depth === depth) ?? (isMilestone ? levels.at(-1) : undefined);
    if (!level) problems.push(`The plan has no level ${depth} for it`);
    // Its dates.
    const start = map.start >= 0 ? parseDate(get(r, 'start')) : null;
    const end = map.end >= 0 ? parseDate(get(r, 'end')) : null;
    if (start === undefined) problems.push(`Start ${get(r, 'start')} isn't a date`);
    if (end === undefined) problems.push(`End ${get(r, 'end')} isn't a date`);
    if (start && end && end < start) problems.push('Ends before it starts');
    const owners = map.owners >= 0 ? (parseOwners(get(r, 'owners')) ?? []) : [];
    if (map.owners >= 0 && get(r, 'owners') && !owners.length) problems.push(`No one named ${get(r, 'owners')} on the project`);
    const budget = map.budget >= 0 && get(r, 'budget') ? money(get(r, 'budget')) : null;
    if (map.budget >= 0 && get(r, 'budget') && budget === null) problems.push(`Budget ${get(r, 'budget')} isn't an amount`);
    out.push({
      line: i + 2,
      id: `new-imp-${stamp}-${i}`,
      parentId,
      depth: level?.Depth ?? depth,
      levelName: isMilestone ? 'Milestone' : map.level >= 0 && levelText && !levelByName(levelText) ? levelText : (level?.SingularName ?? ''),
      owners,
      problems,
      dto: {
        ParentPlanElementID: parentId ?? undefined,
        LevelDepth: level?.Depth ?? depth,
        PlanElementName: name,
        StartDate: start || undefined,
        EndDate: (isMilestone ? start : end) || undefined,
        PlanDateType: /^s|fixed|yes/i.test(get(r, 'type')) ? PlanDateTypeEnum.Scheduled : PlanDateTypeEnum.Estimated,
        IsMilestone: isMilestone,
        Notes: get(r, 'notes') || null,
        Budget: isMilestone ? null : budget,
      },
    });
  });
  // A row under one that can't be added can't be added either.
  const bad = new Set(out.filter((o) => o.problems.length).map((o) => o.id));
  for (const o of out) if (o.parentId && bad.has(o.parentId) && !o.problems.length) (o.problems.push('Its parent row has a problem'), bad.add(o.id));
  return out;
}

/** An example file, for trying it without one: two studies, their tasks and a milestone. */
export const EXAMPLE_CSV = `Level,Name,Start,End,Owners,Notes,Budget
Study,Delta smelt larval survey,2027-02-01,2027-06-30,Alex Rivera,Spring Kodiak trawl,
Task,Trawl season 1,2027-02-01,2027-03-31,"Alex Rivera, CDFW",,48000
Task,Trawl season 2,2027-04-01,2027-06-30,Alex Rivera,,52000
Milestone,Larval index to CDFW,2027-07-15,,Alex Rivera,Annual index memo,
Study,Adult spawning survey,2027-07-01,2027-11-30,Priya Natarajan,,
Task,Spawning habitat mapping,2027-07-01,2027-09-30,Priya Natarajan,Side-scan sonar,36000
Task,Data report,2027-10-01,2027-11-30,"Priya Natarajan; Sam Okafor",,24000
`;
