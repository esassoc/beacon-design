// Anchored text: the checks that run as code, not as model judgment.
//
// A commitment's text is partitioned by its requirements' spans. These helpers answer,
// deterministically, the questions the review leads with: which binding sentences no
// requirement covers, which two requirements sit on the same words, and where on the
// page a char range falls. Used at build time (src/data/setup-wizard-3-step.ts) and in
// the browser (sw3-store.ts), so the fixture and the live review flag the same things.

export interface Range {
  start: number;
  end: number;
}

/** A rectangle on a page, as fractions of the page's width and height. */
export interface PageBox {
  page: number;
  x: number;
  y: number;
  w: number;
  h: number;
}

/** A line of text on the page, with the chars of the laid-out text it holds. */
export interface TextLineBox extends PageBox {
  s: number;
  e: number;
}

/** A sentence binds when it carries an obligation verb. */
export const BINDING = /\b(shall|will|must|may not|required|prohibited)\b/i;

/**
 * Sentences with their offsets, trimmed of surrounding space. A sentence ends at . ; or :
 * followed by space or the end, so "Condition of Approval 11.44" stays one sentence.
 */
export const sentences = (text: string): Range[] => {
  const out: Range[] = [];
  const push = (s: number, e: number) => {
    while (s < e && /\s/.test(text[s])) s++;
    while (e > s && /\s/.test(text[e - 1])) e--;
    if (e > s) out.push({ start: s, end: e });
  };
  let from = 0;
  for (let i = 0; i < text.length; i++) {
    if (/[.;:]/.test(text[i]) && (i + 1 === text.length || /\s/.test(text[i + 1]))) {
      push(from, i + 1);
      from = i + 1;
    }
  }
  push(from, text.length);
  return out;
};

const overlap = (a: Range, b: Range) => Math.max(0, Math.min(a.end, b.end) - Math.max(a.start, b.start));

/** How many of a range's chars the spans cover between them (a sentence may straddle two). */
export const coveredChars = (r: Range, spans: Range[]) => {
  let n = 0;
  let at = r.start;
  for (const sp of [...spans].sort((a, b) => a.start - b.start)) {
    const s = Math.max(at, sp.start);
    const e = Math.min(r.end, sp.end);
    if (e > s) {
      n += e - s;
      at = e;
    }
  }
  return n;
};

/** Binding sentences the spans cover less than half of. */
export const uncoveredRanges = (text: string, spans: Range[]): Range[] =>
  sentences(text).filter((s) => BINDING.test(text.slice(s.start, s.end)) && coveredChars(s, spans) <= (s.end - s.start) * 0.5);

/** Two spans on near-identical words: overlap over union. */
export const sameWords = (a: Range, b: Range) => {
  const union = Math.max(a.end, b.end) - Math.min(a.start, b.start);
  return union > 0 && overlap(a, b) / union > 0.8;
};

const r4 = (n: number) => Math.round(n * 10000) / 10000;

/** Boxes for a char range: the lines it touches, partial lines by proportion. */
export const boxesFor = (lines: TextLineBox[], start: number, end: number): PageBox[] =>
  lines
    .filter((l) => l.e > start && l.s < end)
    .map((l) => {
      const len = Math.max(1, l.e - l.s);
      const a = Math.max(0, start - l.s) / len;
      const b = Math.min(len, end - l.s) / len;
      return { page: l.page, x: r4(l.x + l.w * a), y: l.y, w: r4(l.w * (b - a)), h: l.h };
    });
