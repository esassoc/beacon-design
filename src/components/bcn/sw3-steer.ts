// sw3-steer — what a steer in the Aldo conversation turns into.
//
// In prod a person's message goes to one model call with structured output: the action
// schema below is that call's response format, and the reply is the model's one-line
// account of what it did. Free text that is not a scope, pause, resume or re-read is a
// RULE: it is appended to the instruction every later extraction call carries, so it
// governs the pages not read yet and nothing already read, unless those pages are
// re-read. This module is the prototype's stand-in for that call: a handful of patterns,
// deterministic, so a demo says the same thing every time.

export type SteerAction =
  | { kind: 'start' }
  | { kind: 'scope'; first: number; last: number; label: string }
  | { kind: 'rule'; text: string; crossRef?: boolean }
  | { kind: 'pause' }
  | { kind: 'resume' }
  | { kind: 'reread'; first: number; last: number }
  | { kind: 'dismiss'; findId: string; code: string }
  | { kind: 'merge'; findId: string; code: string }
  | { kind: 'pace'; pace: 'step' | 'watch' | 'run' }
  | { kind: 'check'; code: string }
  | { kind: 'go'; pace: 'step' | 'watch' | 'run' }
  | { kind: 'skip' }
  | { kind: 'stop' };

export interface SteerContext {
  started: boolean;
  finished: boolean;
  paused: boolean;
  /** The page the scan is reading, or null. */
  head: number | null;
  /** The first page of the run's scope. */
  first: number;
  /** The last page read, or null if none. */
  lastRead: number | null;
  /** Commitment code to the page its heading is on (the scope pass's index). */
  headings: Record<string, number>;
  /** The document's named parts (the ITP's three measure groups, the MMRP's tables). */
  sections: { match: string; label: string; first: number; last: number }[];
  /** Stopped after the first commitments, for a person to check them. */
  checking: boolean;
  calibrate: string[];
  hasCommitments: boolean;
}

const PACE_REPLY = {
  run: 'Going fast. I will raise anything that needs you as I reach it.',
  watch: 'Going slowly, so you can follow along. Tell me to speed up whenever you like.',
  step: 'Going one commitment at a time. I will stop after each one.',
} as const;

export interface Interpretation {
  actions: SteerAction[];
  reply: string;
}

const range = (a: number, b: number) => (a === b ? `p. ${a}` : `pp. ${a}–${b}`);

/** Pages a condition spans: from its first heading to the page before the next condition. */
const conditionPages = (n: string, headings: Record<string, number>) => {
  const own = Object.entries(headings).filter(([c]) => c === `COA ${n}` || c.startsWith(`COA ${n}.`));
  if (!own.length) return null;
  const first = Math.min(...own.map(([, p]) => p));
  const lastHeading = Math.max(...own.map(([, p]) => p));
  const next = Object.entries(headings)
    .filter(([c, p]) => p > lastHeading && !own.some(([o]) => o === c) && !c.startsWith(`COA ${n}.`))
    .map(([, p]) => p);
  const last = next.length ? Math.min(...next) - 1 : lastHeading;
  return { first, last: Math.max(first, last) };
};

const countBetween = (a: number, b: number, headings: Record<string, number>) =>
  Object.values(headings).filter((p) => p >= a && p <= b).length;

/** After a rule mid-run: what it covers, and the offer to re-read what it did not. */
const ruleScope = (ctx: SteerContext) => {
  if (!ctx.started) return { tail: 'It applies to every page I read.', reread: null };
  if (ctx.lastRead === null || ctx.lastRead < ctx.first) return { tail: 'It applies to every page from here.', reread: null };
  const from = ctx.finished ? null : ctx.head;
  const tail = from
    ? `It applies from p. ${from}. ${range(ctx.first, ctx.lastRead)} were read without it.`
    : `The run is done, so it changes nothing yet. Re-read the pages to apply it.`;
  return { tail, reread: { first: ctx.first, last: ctx.lastRead } };
};

export function interpret(raw: string, ctx: SteerContext): Interpretation & { offer?: { first: number; last: number } } {
  const text = raw.trim();

  // Nothing to scan (a document with no commitments of its own).
  if (/nothing to scan|skip (this|it|the document)|no commitments/i.test(text)) {
    return { actions: [{ kind: 'skip' }], reply: 'Skipped. It stays in the project as a source document with no commitments.' };
  }

  // The check after the first commitments: they read right.
  if (ctx.checking && /looks? (right|good|fine)|correct|all good|that's right|yes/i.test(text)) {
    return {
      actions: ctx.calibrate.map((code) => ({ kind: 'check' as const, code })),
      reply: 'Good. How should I go on? Fast, slow so you can follow along, or one commitment at a time.',
    };
  }

  // Pace.
  const pace = /let it (run|rip)|go ahead|full speed|fast|faster|speed up|run it|on your own/i.test(text)
    ? 'run'
    : /one at a time|step by step|stop after each|one by one/i.test(text)
      ? 'step'
      : /slow( down)?|watch|follow along/i.test(text)
        ? 'watch'
        : null;
  if (pace) {
    if (!ctx.started) return { actions: [{ kind: 'pace', pace }, { kind: 'start' }], reply: PACE_REPLY[pace] };
    if (ctx.checking) return { actions: [{ kind: 'go', pace }], reply: PACE_REPLY[pace] };
    return { actions: [{ kind: 'pace', pace }], reply: PACE_REPLY[pace] };
  }

  // Pause / resume.
  if (/^(pause|stop|hold|wait)\b/i.test(text)) {
    if (!ctx.started || ctx.finished) return { actions: [], reply: 'Nothing is running.' };
    return { actions: [{ kind: 'pause' }], reply: `Pausing after p. ${ctx.head}: that page is already being read.` };
  }
  if (/^(resume|continue|keep going|go on|go|start|begin|scan)\b/i.test(text) && !/\d/.test(text)) {
    if (!ctx.started) return { actions: [{ kind: 'start' }], reply: 'Starting the scan.' };
    if (ctx.paused) return { actions: [{ kind: 'resume' }], reply: `Resuming at p. ${ctx.head}.` };
    return { actions: [], reply: 'The scan is already running.' };
  }

  // Re-read.
  const rr = /re-?(?:read|scan)\D*(\d+)?\D*(\d+)?/i.exec(text);
  if (rr) {
    const a = rr[1] ? Number(rr[1]) : ctx.first;
    const b = rr[2] ? Number(rr[2]) : rr[1] ? Number(rr[1]) : (ctx.lastRead ?? ctx.first);
    if (ctx.lastRead === null) return { actions: [], reply: 'No pages have been read yet.' };
    const first = Math.max(ctx.first, Math.min(a, b));
    const last = Math.min(ctx.lastRead, Math.max(a, b));
    return { actions: [{ kind: 'reread', first, last }], reply: `Re-reading ${range(first, last)} with the instructions now in effect.` };
  }

  // Scope: a named part of the document.
  const sec = ctx.sections.find((x) => new RegExp(x.match, 'i').test(text));
  if (sec && !/skip|except|not /i.test(text)) {
    return {
      actions: [{ kind: 'scope', first: sec.first, last: sec.last, label: sec.label }],
      reply: `${sec.label} is ${range(sec.first, sec.last)}: ${countBetween(sec.first, sec.last, ctx.headings)} commitments likely.${ctx.started ? ' Pages outside it are skipped from here.' : ''}`,
    };
  }

  // Skipping a named part at either end of the document narrows the scope past it.
  if (sec && /skip|except|not /i.test(text)) {
    const lo = Math.min(...ctx.sections.map((x) => x.first));
    const hi = Math.max(...ctx.sections.map((x) => x.last));
    const [first, last] = sec.last === hi ? [lo, sec.first - 1] : sec.first === lo ? [sec.last + 1, hi] : [lo, hi];
    if (first <= last && (first !== lo || last !== hi)) {
      return {
        actions: [{ kind: 'scope', first, last, label: range(first, last) }],
        reply: `Skipping ${sec.label}. Scope is ${range(first, last)}: ${countBetween(first, last, ctx.headings)} commitments likely.`,
      };
    }
  }

  // Scope: a condition, or a page range.
  const cond = /(?:condition|coa)\s*(\d+)/i.exec(text);
  if (cond) {
    const r = conditionPages(cond[1], ctx.headings);
    if (!r) return { actions: [], reply: `I found no Condition ${cond[1]} in this document.` };
    const label = `Condition ${cond[1]}`;
    return {
      actions: [{ kind: 'scope', first: r.first, last: r.last, label }],
      reply: `${label} is ${range(r.first, r.last)}: ${countBetween(r.first, r.last, ctx.headings)} commitments likely.${ctx.started ? ' Pages outside it are skipped from here.' : ''}`,
    };
  }
  const pr = /(?:pages?|pp?\.?)\s*(\d+)\s*(?:-|–|to|through)\s*(\d+)/i.exec(text);
  if (pr) {
    const first = Math.min(Number(pr[1]), Number(pr[2]));
    const last = Math.max(Number(pr[1]), Number(pr[2]));
    return {
      actions: [{ kind: 'scope', first, last, label: range(first, last) }],
      reply: `Scope set to ${range(first, last)}: ${countBetween(first, last, ctx.headings)} commitments likely.`,
    };
  }

  // Everything else is a rule for the pages ahead.
  const crossRef = /cross[- ]?ref|refer(?:s|ence)?\s+(?:to\s+)?(?:another|other)|see condition/i.test(text);
  const ruleText = crossRef ? 'A reference to another condition is not a new commitment.' : text;
  const { tail, reread } = ruleScope(ctx);
  return {
    actions: [{ kind: 'rule', text: ruleText, crossRef }],
    reply: `Added to my instructions: "${ruleText}" ${tail}`,
    offer: reread ?? undefined,
  };
}
