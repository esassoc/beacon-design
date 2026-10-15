// Reading a passage of commitment text as a requirement: its type, by its verbs, and a
// short name, by its first clause. Pure, so the fixture build and Aldo share one reading.

import type { RequirementType } from '../data/setup-wizard';

/** The type a passage reads as, by its verbs. */
export const guessType = (t: string): RequirementType => {
  const s = t.toLowerCase();
  if (/\b(report|notif|submit)/.test(s)) return 'Reporting';
  if (/\bsurvey/.test(s)) return 'Survey';
  if (/\bmonitor/.test(s)) return 'Monitoring';
  if (/\btrain|educat|orientation/.test(s)) return 'TrainingAndEducation';
  if (/\bplan\b/.test(s)) return 'Plan';
  if (/\b(security|fund|endowment|fee)\b/.test(s)) return 'Financial';
  if (/\b(approv|consult|concurrence)/.test(s)) return 'ApprovalAndConsultation';
  if (/\b(restor|compensat|mitigat)/.test(s)) return 'RestorationAndMitigation';
  if (/\bdesign/.test(s)) return 'Design';
  return 'AvoidanceAndBMPs';
};

/** A name for a passage: its first clause, up to the verb's object. */
export const nameFrom = (t: string): string => {
  let s = t.replace(/\s+/g, ' ').trim().replace(/^\(?(?:\d{1,2}|[a-z]|[ivx]+)[.)]\s+/i, '').replace(/^(?:and|or)\s+/i, '');
  // "X shall do Y": the name is the doing. "X shall be done": the thing done to.
  const verb = /\b(?:shall|will|must)\s+(?:also\s+)?(?:be\s+)?(.+)$/i.exec(s);
  if (verb) s = verb[1];
  s = s.replace(/^(?:the|a|an)\s+/i, '');
  const clause = s.split(/[.;:,]/)[0];
  const ws = clause.split(' ').slice(0, 7);
  while (ws.length > 2 && /^(the|of|a|an|to|and|or|by|for|in|on|at|with|where|that|which)$/i.test(ws.at(-1)!)) ws.pop();
  const w = ws.join(' ');
  return w.charAt(0).toUpperCase() + w.slice(1);
};
