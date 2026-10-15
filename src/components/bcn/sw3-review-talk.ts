// sw3-review-talk — what Aldo makes of a message in step 2, and what an accepted proposal
// does. In prod one structured-output call reads the message with the commitment, its
// requirements and the project's entities; here the reading is deterministic, so every demo
// run answers the same way.
//
// What a person can say about a commitment, in their own words:
//   you missed "..." / this is a requirement      Add a requirement over those words
//   split R2 / split the lettered items           Split a requirement at its sentences or items
//   merge R1 and R2                               One requirement over both spans
//   R3 is not a requirement / remove R3           Remove it
//   this is not binding (with text selected)      The uncovered words stay unhighlighted
//   R2 is Reporting                               Change the type
//   add Delta smelt to R1 / remove ... from R1    Link or unlink a species, season, milestone
//   rename R2 to "..."                            Change the name
//   why ... R2                                    How it was read: the words each value came from
//   always / every / rule: ...                    A rule for how requirements are parsed
// Anything else gets a question back, with readings to choose from.

import {
  commitmentOf,
  requirementsOf,
  requirementOf,
  payload,
  createRequirement,
  editRequirement,
  removeRequirement,
  markNotBinding,
  flagsOf,
  requirementRef,
  type ReviewProposal,
} from './sw3-store';
import { REQUIREMENT_TYPE_LABEL, type RequirementType } from '../../data/setup-wizard';
import type { Range } from '../../lib/anchored-text';
import type { Choice } from '../../data/aldo';
import { guessType, nameFrom } from '../../lib/requirement-heuristics';

export { guessType, nameFrom };

export interface Reading {
  reply: string;
  proposals?: { label: string; p: ReviewProposal }[];
  rule?: string;
  choices?: Choice[];
}

const TYPES = Object.keys(REQUIREMENT_TYPE_LABEL) as RequirementType[];
const short = (code: string) => code.replace(/^COA\s+/, '');
const words = (s: string, n: number) => {
  const w = s.replace(/\s+/g, ' ').trim().split(' ');
  return w.length > n ? `${w.slice(0, n).join(' ')}…` : w.join(' ');
};
const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

/** Entities named in a passage, by kind. */
export const entitiesIn = (t: string) => {
  const s = norm(t);
  const hit = (kind: string) =>
    (payload().entities ?? [])
      .filter((e) => e.kind === kind)
      .filter((e) => {
        const n = norm(e.name.replace(/\(.*?\)/g, ''));
        return n.length > 3 && s.includes(n);
      })
      .map((e) => e.id);
  return { speciesIds: hit('species'), seasonIds: hit('season'), milestoneIds: hit('milestone') };
};

/** "R2", "requirement 2", "#2", or a requirement's name, to its id. */
const refsIn = (code: string, text: string): string[] => {
  const reqs = requirementsOf(code);
  const ids: string[] = [];
  // Its ID, "11.3:2", or just ":2".
  for (const m of text.matchAll(/(?:^|[\s(])(?:[\w.-]*):(\d{1,2})\b/g)) {
    const r = reqs[Number(m[1]) - 1];
    if (r && !ids.includes(r.id)) ids.push(r.id);
  }
  for (const m of text.matchAll(/\b(?:R|req(?:uirement)?\s*|#)\s?(\d{1,2})\b/gi)) {
    const r = reqs[Number(m[1]) - 1];
    if (r && !ids.includes(r.id)) ids.push(r.id);
  }
  if (!ids.length) {
    const s = norm(text);
    for (const r of reqs) if (norm(r.name).length > 6 && s.includes(norm(r.name))) ids.push(r.id);
  }
  return ids;
};

/** The words a message points at: a quote found in the text, else the selection. */
const pointedAt = (code: string, text: string, selection: Range | null): Range | null => {
  const c = commitmentOf(code);
  if (!c?.text) return null;
  const q = /[“"]([^”"]{8,})[”"]/.exec(text)?.[1];
  if (q) {
    const at = c.text.toLowerCase().indexOf(q.toLowerCase().trim());
    if (at >= 0) return { start: at, end: at + q.trim().length };
  }
  return selection;
};

/** Sentence ends inside a range, or lettered items (a., b.) when asked for them. */
const cutsIn = (text: string, r: Range, items: boolean): number[] => {
  const seg = text.slice(r.start, r.end);
  const out: number[] = [];
  // Items: a lettered or numbered line (a., 1.), or an inline enumeration ((1), (a)).
  const re = items ? /\n\s*(?:[a-z]|\d{1,2}|[ivx]+)[.)]\s|\s\((?:\d{1,2}|[a-z]|[ivx]+)\)\s/g : /[.;]\s+(?=[A-Z(])/g;
  for (const m of seg.matchAll(re)) {
    const at = r.start + (m.index ?? 0) + (items ? 0 : m[0].length);
    if (at - r.start > 20 && r.end - at > 20) out.push(at);
  }
  return out;
};

/** A requirement as Aldo says it: its ID, then its name, short, in quotes. */
export const reqName = (code: string, id: string) => {
  const r = requirementsOf(code).find((x) => x.id === id);
  return r ? `${requirementRef(code, id)} “${words(r.name, 4)}”` : 'it';
};
const label = reqName;

const typeIn = (text: string): RequirementType | null => {
  const s = norm(text);
  for (const t of TYPES) if (s.includes(norm(REQUIREMENT_TYPE_LABEL[t])) || s.includes(norm(t))) return t;
  return null;
};

/** `attached`: requirements the message carries as chips (@ mentions, the one selected in the rail). */
export function interpretReview(code: string, text: string, selection: Range | null, attached: string[] = []): Reading {
  const c = commitmentOf(code);
  const reqs = requirementsOf(code);
  const s = text.trim();
  const at = pointedAt(code, s, selection);
  // Which requirements: named in the words, else attached as chips, else ("this") the one
  // the selected words are in.
  let refs = refsIn(code, s);
  if (!refs.length) refs = attached.filter((id) => reqs.some((r) => r.id === id));
  if (!refs.length && at && /\b(this|it|that)\b/i.test(s) && !/\b(missed|not binding|split)\b/i.test(s)) {
    const holder = reqs.find((r) => r.anchor && r.anchor.charStart <= at.start && r.anchor.charEnd >= at.end);
    if (holder) refs = [holder.id];
  }
  const ctext = c?.text ?? '';

  // A rule for how requirements are read: it holds for every commitment.
  if (/^rule:|\b(always|every|each time|from now on|in general)\b/i.test(s)) {
    const rule = s.replace(/^rule:\s*/i, '');
    const items = /\b(letter|lettered|number|numbered|enumerat\w*|item|items|sub-?item|list)\b|\(1\)|\(a\)|\ba\./i.test(s) && /\b(own|separate|split|each)\b/i.test(s);
    if (items) {
      const proposals = reqs
        .filter((r) => r.anchor && cutsIn(ctext, { start: r.anchor.charStart, end: r.anchor.charEnd }, true).length)
        .map((r) => {
          const cuts = cutsIn(ctext, { start: r.anchor!.charStart, end: r.anchor!.charEnd }, true);
          return { label: `Split ${label(code, r.id)} in ${cuts.length + 1}`, p: { kind: 'split', reqId: r.id, cuts } as ReviewProposal };
        });
      return {
        rule,
        reply: proposals.length
          ? `I will read each lettered or numbered item as its own requirement, in every commitment. Here that splits ${proposals.length === 1 ? 'one requirement' : `${proposals.length} requirements`}.`
          : `I will read each lettered or numbered item as its own requirement, in every commitment. ${short(code)} has none.`,
        proposals,
      };
    }
    return { rule, reply: `I will parse every commitment that way, from here on. Commitments you confirmed keep their requirements.` };
  }

  // Why: the grouping's reason, and the words each value came from.
  if (/^(why|how did|how come|where did)\b/i.test(s)) {
    const r = reqs.find((x) => refs.includes(x.id)) ?? reqs[0];
    if (!r) return { reply: `I found no requirements in ${short(code)}: nothing in it says who must do what.` };
    const from = r.values
      .filter((v) => ['species', 'milestone', 'season', 'party'].includes(v.field))
      .map((v) => `${v.field === 'party' ? 'the party' : `the ${v.field}`} from “${ctext.slice(v.charStart, v.charEnd)}”`);
    const verb = r.anchor ? `“${words(ctext.slice(r.anchor.charStart, r.anchor.charEnd), 10)}”` : 'its quote';
    // The prompt's own reason for the grouping first: who does the work, what done looks like.
    const why = r.rationale ? ` ${r.rationale.trim().replace(/\.?$/, '.')}` : ` It is ${REQUIREMENT_TYPE_LABEL[r.type]} because of ${verb}.`;
    return {
      reply: `${label(code, r.id)}, ${REQUIREMENT_TYPE_LABEL[r.type]}.${why}${from.length ? ` I took ${from.join(', ')}.` : ''}`,
    };
  }

  // Not binding: selected words that need no requirement.
  if (/\b(not binding|isn't binding|is not binding|doesn't bind|just context|background|preamble)\b/i.test(s) && at) {
    const gap = flagsOf(code).find((f) => f.kind === 'uncovered' && f.range!.start <= at.start && f.range!.end >= at.start);
    if (gap) return { reply: `Then “${words(ctext.slice(gap.range!.start, gap.range!.end), 8)}” stays unhighlighted, and is not flagged again.`, proposals: [{ label: 'Not binding', p: { kind: 'notBinding', code, start: gap.range!.start } }] };
  }

  // Remove.
  if (/\b(not a requirement|isn't a requirement|remove|delete|drop)\b/i.test(s) && refs.length) {
    return {
      reply: `Remove ${refs.map((id) => label(code, id)).join(' and ')}? Its words go back to unhighlighted.`,
      proposals: refs.map((id) => ({ label: refs.length > 1 ? `Remove ${label(code, id)}` : 'Remove it', p: { kind: 'remove', reqId: id } as ReviewProposal })),
    };
  }

  // Merge.
  if (/\b(merge|combine|same requirement|one requirement)\b/i.test(s) && refs.length >= 2) {
    const [keep, ...others] = refs;
    return {
      reply: `One requirement over both: ${label(code, keep)} takes ${others.map((id) => label(code, id)).join(' and ')}'s words and keeps its own name.`,
      proposals: [{ label: 'Merge them', p: { kind: 'merge', keepId: keep, otherIds: others } }],
    };
  }

  // Split.
  if (/\bsplit|separate|break (it|this) up|two requirements\b/i.test(s)) {
    const items = /\b(letter|lettered|number|numbered|item|items|list)\b|\(1\)|\(a\)/i.test(s);
    // Split at the words selected: they become their own requirement.
    const around = at ? reqs.find((r) => r.anchor && r.anchor.charStart <= at.start && r.anchor.charEnd >= at.end) : null;
    if (around) {
      const cuts = [at!.start, at!.end].filter((x) => x - around.anchor!.charStart > 5 && around.anchor!.charEnd - x > 5);
      if (cuts.length) return { reply: `${label(code, around.id)} in ${cuts.length + 1}, at the words you selected.`, proposals: [{ label: `Split in ${cuts.length + 1}`, p: { kind: 'split', reqId: around.id, cuts } }] };
    }
    const targets = refs.length ? reqs.filter((r) => refs.includes(r.id)) : reqs.filter((r) => r.anchor && (!at || (r.anchor.charStart <= at.start && r.anchor.charEnd >= at.start)));
    const proposals = targets
      .filter((r) => r.anchor)
      .map((r) => ({ r, cuts: cutsIn(ctext, { start: r.anchor!.charStart, end: r.anchor!.charEnd }, items) }))
      .filter((x) => x.cuts.length)
      .slice(0, 3)
      .map(({ r, cuts }, _i, all) => ({ label: all.length > 1 ? `Split ${label(code, r.id)} in ${cuts.length + 1}` : `Split in ${cuts.length + 1}`, p: { kind: 'split', reqId: r.id, cuts } as ReviewProposal }));
    if (proposals.length) return { reply: `${proposals.map((p) => p.label.replace('Split ', '')).join('; ')}, at its ${items ? 'lettered items' : 'sentences'}. Each part keeps the species and milestones its words name.`, proposals };
    return { reply: `${targets.length ? label(code, targets[0].id) : 'That'} is one sentence; there is nowhere to split it. Select the words that should be their own requirement and tell me.` };
  }

  // Type.
  const type = typeIn(s);
  if (type && refs.length && !/\b(add|missed)\b/i.test(s)) {
    return {
      reply: `${refs.map((id) => label(code, id)).join(' and ')} as ${REQUIREMENT_TYPE_LABEL[type]}.`,
      proposals: refs.map((id) => ({ label: refs.length > 1 ? `Make ${label(code, id)} ${REQUIREMENT_TYPE_LABEL[type]}` : `Make it ${REQUIREMENT_TYPE_LABEL[type]}`, p: { kind: 'patch', reqId: id, patch: { type }, what: `type to ${REQUIREMENT_TYPE_LABEL[type]}` } as ReviewProposal })),
    };
  }

  // Rename.
  const rename = /\b(rename|call it|name it|should be called)\b.*?[“"]([^”"]+)[”"]/i.exec(s);
  if (rename && (refs.length || reqs.length === 1)) {
    const id = refs[0] ?? reqs[0].id;
    return { reply: `${label(code, id)} renamed.`, proposals: [{ label: 'Rename it', p: { kind: 'patch', reqId: id, patch: { name: rename[2] }, what: `name to “${rename[2]}”` } }] };
  }

  // Link or unlink an entity.
  const unlink = /\b(remove|drop|take off|not)\b/i.test(s);
  if (/\b(add|link|also|remove|drop|take off|doesn't apply|not)\b/i.test(s) && (refs.length || reqs.length === 1)) {
    const named = entitiesIn(s);
    const all = [...named.speciesIds, ...named.seasonIds, ...named.milestoneIds];
    if (all.length) {
      const id = refs[0] ?? reqs[0].id;
      const r = reqs.find((x) => x.id === id)!;
      const ent = (payload().entities ?? []).filter((e) => all.includes(e.id));
      const next = (cur: string[], add: string[]) => (unlink ? cur.filter((x) => !add.includes(x)) : [...new Set([...cur, ...add])]);
      const patch: Partial<typeof r> = {};
      if (named.speciesIds.length) patch.speciesIds = next(r.speciesIds, named.speciesIds);
      if (named.seasonIds.length) patch.seasonIds = next(r.seasonIds, named.seasonIds);
      if (named.milestoneIds.length) patch.milestoneIds = next(r.milestoneIds ?? [], named.milestoneIds);
      const what = `${unlink ? 'without' : 'with'} ${ent.map((e) => e.name).join(' and ')}`;
      return { reply: `${label(code, id)} ${what}.`, proposals: [{ label: unlink ? 'Unlink' : 'Link', p: { kind: 'patch', reqId: id, patch, what } }] };
    }
  }

  // Words already inside a requirement: they become their own by splitting it there.
  if (at) {
    const inside = reqs.find((r) => r.anchor && r.anchor.charStart <= at.start && r.anchor.charEnd >= at.end);
    if (inside && !/\bwhy\b/i.test(s)) {
      const cuts = [at.start, at.end].filter((x) => x - inside.anchor!.charStart > 5 && inside.anchor!.charEnd - x > 5);
      const quote = ctext.slice(at.start, at.end).trim();
      if (cuts.length)
        return {
          reply: `“${words(quote, 10)}” is already in ${label(code, inside.id)}. As its own requirement, ${label(code, inside.id)} splits there: ${nameFrom(quote)}, ${REQUIREMENT_TYPE_LABEL[guessType(quote)]}.`,
          proposals: [{ label: 'Split it there', p: { kind: 'split', reqId: inside.id, cuts } }],
        };
      return { reply: `“${words(quote, 10)}” is ${label(code, inside.id)} already, all of it.` };
    }
  }

  // A missed requirement: words no requirement covers.
  if (at || /\b(missed|missing|another requirement|also a requirement|is a requirement|add)\b/i.test(s)) {
    const range = at ?? flagsOf(code).find((f) => f.kind === 'uncovered')?.range ?? null;
    if (range) {
      const quote = ctext.slice(range.start, range.end).trim();
      const ents = entitiesIn(quote);
      const name = nameFrom(quote);
      const t = guessType(quote);
      return {
        reply: `“${words(quote, 12)}” as a requirement: ${name}, ${REQUIREMENT_TYPE_LABEL[t]}.`,
        proposals: [{ label: 'Add requirement', p: { kind: 'add', code, range, name, type: t, ...ents } }],
      };
    }
    return { reply: `Every binding word in ${short(code)} is in a requirement. Select the words I missed, or quote them, and tell me again.` };
  }

  return {
    reply: `I am not sure what to change in ${short(code)}.`,
    choices: [
      { label: 'Add what I selected', text: 'You missed this one' },
      { label: 'Split numbered items, always', text: 'Rule: always split numbered items like (1) and (2) into their own requirements' },
    ],
  };
}

/** Do what an accepted proposal says, through the store (each a commit). */
export function applyProposal(p: ReviewProposal): void {
  if (p.kind === 'add') {
    const id = createRequirement(p.code, p.range);
    editRequirement(id, { name: p.name, type: p.type, speciesIds: p.speciesIds, seasonIds: p.seasonIds, milestoneIds: p.milestoneIds });
  } else if (p.kind === 'remove') removeRequirement(p.reqId);
  else if (p.kind === 'notBinding') markNotBinding(p.code, p.start);
  else if (p.kind === 'patch') editRequirement(p.reqId, p.patch);
  else if (p.kind === 'merge') {
    const reqs = requirementsOf(requirementCode(p.keepId));
    const keep = reqs.find((r) => r.id === p.keepId)!;
    const others = reqs.filter((r) => p.otherIds.includes(r.id));
    const spans = [keep, ...others].filter((r) => r.anchor);
    const start = Math.min(...spans.map((r) => r.anchor!.charStart));
    const end = Math.max(...spans.map((r) => r.anchor!.charEnd));
    editRequirement(keep.id, {
      anchor: { ...keep.anchor!, charStart: start, charEnd: end },
      speciesIds: [...new Set([keep, ...others].flatMap((r) => r.speciesIds))],
      seasonIds: [...new Set([keep, ...others].flatMap((r) => r.seasonIds))],
      activityIds: [...new Set([keep, ...others].flatMap((r) => r.activityIds))],
      milestoneIds: [...new Set([keep, ...others].flatMap((r) => r.milestoneIds ?? []))],
      phases: [...new Set([keep, ...others].flatMap((r) => r.phases))],
    });
    for (const o of others) removeRequirement(o.id);
  } else if (p.kind === 'split') {
    const code = requirementCode(p.reqId);
    const r = requirementsOf(code).find((x) => x.id === p.reqId)!;
    const text = commitmentOf(code)!.text!;
    const bounds = [r.anchor!.charStart, ...p.cuts, r.anchor!.charEnd];
    const part = (i: number) => ({ start: bounds[i], end: bounds[i + 1] });
    const first = text.slice(bounds[0], bounds[1]);
    editRequirement(r.id, { anchor: { ...r.anchor!, charEnd: bounds[1] }, ...entitiesKeep(r, first) });
    for (let i = 1; i < bounds.length - 1; i++) {
      const rg = part(i);
      const quote = text.slice(rg.start, rg.end);
      const id = createRequirement(code, rg);
      const ents = entitiesIn(quote);
      editRequirement(id, {
        name: nameFrom(quote),
        // A part says its own type only when its words do; otherwise it is the whole's.
        type: guessType(quote) === 'AvoidanceAndBMPs' ? r.type : guessType(quote),
        phases: r.phases,
        activityIds: r.activityIds,
        speciesIds: ents.speciesIds.length ? ents.speciesIds : r.speciesIds,
        seasonIds: ents.seasonIds,
        milestoneIds: ents.milestoneIds,
      });
    }
  }
}

/** The first part of a split keeps what its own words name, or all of it if they name none. */
const entitiesKeep = (r: ReturnType<typeof requirementsOf>[number], quote: string) => {
  const e = entitiesIn(quote);
  return {
    speciesIds: e.speciesIds.length ? e.speciesIds : r.speciesIds,
    seasonIds: e.seasonIds.length ? e.seasonIds : r.seasonIds,
    milestoneIds: e.milestoneIds.length ? e.milestoneIds : r.milestoneIds,
  };
};

const requirementCode = (id: string) => requirementOf(id)?.code ?? '';
