// list-aldo-match — how <BcnListAldo> reads what a person says about a list, with no model:
// the words, the phrases the records themselves use ("water operations", "nesting birds"),
// and the synonyms a permit uses. Pure, so it runs the same in a test as on the page.
//
// Prod replaces all of it with one structured-output call that returns the ids to add or
// remove (list-aldo.ts).

import type { AldoCandidate } from '../../data/list-aldo';

export type Op = 'add' | 'remove' | 'keep' | 'drop';

/** Words that carry the request's shape, not its subject. */
const STOP = new Set(
  (
    'a an and or the of to for on in at by with about from into onto as is are be it its this that these those there here ' +
    'i we our us you me my want need needs should would could can will please just also any anything everything every all ' +
    'each some list lists item items obligation obligations action actions commitment commitments thing things stuff ' +
    'add put include fill make give show hold holds keep only remove drop take out off leave without cut delete ' +
    'related relating regarding cover covers covering who what which how many much does do have has has crew crews ' +
    'index subcategory subcategories category categories one ones like such them they their before during after team ' +
    'project permit everyone anyone people owe due site control work works construction measure measures near'
  ).split(' '),
);

/** The words a permit uses for the same thing: a concept matches if any of its terms does.
 *  An entry REPLACES the word, so a loose word ("ground") can be pinned to its sense. */
const SYNONYMS: Record<string, string[]> = {
  dust: ['dust', 'fugitive'],
  spill: ['spill', 'leak'],
  refuel: ['refuel', 'fuel'],
  fuel: ['fuel', 'refuel'],
  bird: ['bird', 'nest', 'raptor', 'avian'],
  nest: ['nest', 'bird'],
  bat: ['bat', 'roost'],
  fish: ['fish', 'salmon', 'smelt', 'sturgeon', 'steelhead'],
  report: ['report', 'notif'],
  notice: ['notice', 'notif'],
  train: ['train', 'education', 'awareness'],
  fenc: ['fenc', 'exclusion'],
  fence: ['fenc', 'exclusion'],
  biologist: ['biologist', 'monitor'],
  fund: ['fund', 'endowment', 'financial'],
  snake: ['snake', 'garter'],
  night: ['night', 'light'],
  noise: ['noise', 'vibration', 'pile driv'],
  ground: ['ground disturb', 'grading', 'clearing', 'vegetation removal'],
  disturbance: ['disturb', 'grading', 'clearing'],
  water: ['water', 'in-water', 'dewater', 'stormwater', 'wetland', 'stream'],
};

/** "surveys" → "survey", "refueling" → "refuel", "fencing" → "fenc". */
const stem = (w: string) =>
  w.length <= 3 ? w : w.replace(/ies$/, 'y').replace(/(ing|ed)$/, '').replace(/(?<!s)s$/, '');

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** The multi-word names the records file under ("water operations", "nesting birds"): said,
 *  each is one concept, not its words. */
export const phrasesOf = (candidates: AldoCandidate[]): string[] =>
  [...new Set(candidates.flatMap((c) => [...c.where.split(' › '), c.label]).map((s) => s.toLowerCase().trim()))]
    .filter((s) => s.includes(' ') && s.length < 40)
    .sort((a, b) => b.length - a.length);

/**
 * What was said, as clauses: split on commas, "and", "or", so "dust, spills or refueling" is
 * three asks and "annual reports to CDFW" is one. Each clause is a list of concepts, each a
 * pattern any term of which matches. A phrase a record files under counts as one concept,
 * and is taken out before the split, so "agency reporting and approvals" stays whole.
 */
export const clausesOf = (text: string, phrases: string[] = []): RegExp[][] => {
  let rest = text.toLowerCase().replace(/[“”"’']/g, '');
  const held: string[] = [];
  for (const p of phrases) {
    if (!rest.includes(p)) continue;
    rest = rest.split(p).join(` §${held.length}§ `);
    held.push(p);
  }
  return rest
    .split(/[,;:/]|\band\b|\bor\b|\bplus\b/)
    .map((clause) => {
      const out: RegExp[] = [];
      for (const m of clause.matchAll(/§(\d+)§/g)) out.push(new RegExp(`\\b${escape(held[Number(m[1])])}`, 'i'));
      const words = [...new Set(clause.replace(/§\d+§/g, ' ').split(/[^a-z0-9-]+/).filter((w) => w.length > 2 && !STOP.has(w)).map(stem))].filter((w) => w && !STOP.has(w));
      for (const w of words) out.push(new RegExp(`\\b(${(SYNONYMS[w] ?? [w]).map(escape).join('|')})`, 'i'));
      return out;
    })
    .filter((c) => c.length);
};

/**
 * The records that fit what was said: the union of each clause's fits. A record fits a
 * clause when every concept in it turns up (in its name, where it files, or what it says)
 * and at least one names it. A concept nothing on the project uses ("crews", "owe") is
 * left out of its clause rather than sinking it.
 */
export const match = (text: string, candidates: AldoCandidate[], phrases: string[] = []): AldoCandidate[] => {
  const hits = new Set<AldoCandidate>();
  for (const clause of clausesOf(text, phrases)) {
    const live = clause.filter((rx) => candidates.some((c) => rx.test(c.head) || rx.test(c.body)));
    if (!live.length) continue;
    for (const c of candidates)
      if (live.every((rx) => rx.test(c.head) || rx.test(c.body)) && live.some((rx) => rx.test(c.head))) hits.add(c);
  }
  return candidates.filter((c) => hits.has(c));
};

/** "6 in Birds › Nesting birds, 4 in Air quality › Fugitive dust and 3 more elsewhere". */
export const whereSummary = (hits: AldoCandidate[]): string => {
  const by = new Map<string, number>();
  for (const c of hits) by.set(c.where, (by.get(c.where) ?? 0) + 1);
  const groups = [...by.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  const shown = groups.slice(0, 3).map(([w, n]) => `${n} in ${w}`);
  const rest = groups.slice(3).reduce((n, [, k]) => n + k, 0);
  if (rest) shown.push(`${rest} more elsewhere`);
  return shown.length > 1 ? `${shown.slice(0, -1).join(', ')} and ${shown.at(-1)}` : (shown[0] ?? '');
};

/** What the message asks for. On a Compliance Index list, saying what it covers keeps. */
export const opOf = (text: string, index: boolean): Op | 'ask' => {
  const t = text.trim().toLowerCase();
  if (/\?$/.test(t) || /^(what|which|how many|is |are |does |do |why)\b/.test(t)) return 'ask';
  if (/^(remove|drop|delete|cut|take|leave|without|no )\b/.test(t) || /\b(take|leave) .*\b(out|off)\b/.test(t)) return index ? 'drop' : 'remove';
  return index ? 'keep' : 'add';
};
