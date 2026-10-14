// Anchor the ITP's commitments and requirements to the page: a working proof of the
// Setup Wizard's "anchor every quote" step (docs/setup-wizard-3-step-brief.md, step 4).
//
// In prod the text layer is the OCR pass (word boxes for every page, scanned or native).
// Here it is poppler's `pdftotext -bbox-layout` over the native ITP, which yields the same
// shape: pages → lines → words, each with a box. From that layer this script:
//
//   1. finds each commitment's heading on its page ("6.1 Pre-implementation Phase …"),
//      walking the codes in document order, and takes the commitment as the run of words
//      from its heading to the next one (so a commitment that crosses a page break is one
//      commitment with a box on each page);
//   2. anchors every requirement's quote (setup-wizard-itp.json `text`) inside that run by
//      token alignment, giving char offsets in the commitment text and a box per line;
//      a quote that will not anchor is reported, not dropped;
//   3. writes line boxes for every page in scope, so a person can mark a commitment the
//      scan missed by dragging over the page.
//
// Coordinates are fractions of the page (0–1), prod's PdfBoundingBoxDto shape, so the
// overlay scales with the page as pdf.js renders it in the browser.
//
//   node scripts/anchor-itp.mjs [firstPage] [lastPage]     # default 80 129
//   # → src/data/sw3-anchors.json
//
// Needs poppler (pdftotext). Deterministic: same PDF, same output.
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = (p) => fileURLToPath(new URL(`../${p}`, import.meta.url));
const FIRST = Number(process.argv[2] ?? 80);
const LAST = Number(process.argv[3] ?? 129);
const PDF = root('public/source-docs/itp.pdf');
const OUT = root('src/data/sw3-anchors.json');
/** Lines at or below this y (pt) are the running header and page number. */
const BODY_BOTTOM = 655;
/** Body type sets 12pt lines; footnotes and their markers set smaller. */
const BODY_LINE_MIN = 11;

const itp = JSON.parse(readFileSync(root('src/data/setup-wizard-itp.json'), 'utf8'));
const pagesOf = JSON.parse(readFileSync(root('src/data/itp-pages.json'), 'utf8'));

// ── 1. The text layer ────────────────────────────────────────────────────────

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

// One page past the scope is read as overlap, so a commitment that runs off the last
// page in scope ends at the next heading rather than mid-sentence.
const READ_TO = LAST + 1;
const xml = execFileSync('pdftotext', ['-f', String(FIRST), '-l', String(READ_TO), '-bbox-layout', PDF, '-'], {
  maxBuffer: 256 * 1024 * 1024,
}).toString();

/** Every body word in document order: { t, page, line, x0, y0, x1, y1 } (pt). */
const words = [];
/** Per page: its size and its body lines. */
const pages = [];
let pageNo = FIRST - 1;
for (const pm of xml.matchAll(/<page width="([\d.]+)" height="([\d.]+)">([\s\S]*?)<\/page>/g)) {
  pageNo++;
  const W = Number(pm[1]);
  const H = Number(pm[2]);
  const lines = [];
  for (const lm of pm[3].matchAll(/<line xMin="([\d.]+)" yMin="([\d.]+)" xMax="([\d.]+)" yMax="([\d.]+)">([\s\S]*?)<\/line>/g)) {
    const [x0, y0, x1, y1] = lm.slice(1, 5).map(Number);
    if (y0 >= BODY_BOTTOM || y1 - y0 < BODY_LINE_MIN) continue;
    const lineIdx = lines.length;
    const ws = [...lm[5].matchAll(/<word xMin="([\d.]+)" yMin="([\d.]+)" xMax="([\d.]+)" yMax="([\d.]+)">([\s\S]*?)<\/word>/g)].map(
      (m) => ({ t: decode(m[5]), page: pageNo, line: lineIdx, x0: +m[1], y0: +m[2], x1: +m[3], y1: +m[4] }),
    );
    if (!ws.length) continue;
    lines.push({ x0, y0, x1, y1, text: ws.map((w) => w.t).join(' '), first: words.length });
    words.push(...ws);
  }
  // pdftotext reads in flow order; sort lines top-to-bottom so headings come out in reading order.
  pages.push({ n: pageNo, W, H, lines });
}

const norm = (t) =>
  t
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[^\p{L}\p{N}'%$]/gu, '');

// ── 2. Commitments: heading to next heading ──────────────────────────────────

const codeNum = (code) => code.replace(/^COA\s+/, '');
const codeKey = (code) => codeNum(code).split('.').map(Number);
const cmpCode = (a, b) => {
  const ka = codeKey(a);
  const kb = codeKey(b);
  for (let i = 0; i < Math.max(ka.length, kb.length); i++) {
    const d = (ka[i] ?? -1) - (kb[i] ?? -1);
    if (d) return d;
  }
  return 0;
};

const inScope = Object.entries(pagesOf)
  .filter(([, p]) => p >= FIRST && p <= LAST)
  .map(([code]) => code)
  .sort(cmpCode);
/** The first commitment past the scope: its heading only ends the last one in scope. */
const nextOut = Object.entries(pagesOf)
  .filter(([, p]) => p > LAST)
  .map(([code]) => code)
  .sort(cmpCode)[0];

/** Word index where each line starts, for heading lookup. */
const lineStarts = [];
for (const p of pages) for (const l of p.lines) lineStarts.push({ page: p.n, at: l.first, text: l.text });

const headings = [];
let from = 0;
for (const code of nextOut ? [...inScope, nextOut] : inScope) {
  const num = codeNum(code);
  const want = new RegExp(`^${num.replace(/\./g, '\\.')}\\.?\\s+\\S`);
  const page = pagesOf[code];
  const hit = lineStarts.find((l) => l.at >= from && Math.abs(l.page - page) <= 1 && want.test(l.text));
  if (!hit) {
    console.warn(`heading not found: ${code} (p. ${page})`);
    continue;
  }
  headings.push({ code, at: hit.at });
  from = hit.at + 1;
}

const reqsOf = new Map();
for (const r of itp.requirements) {
  if (!reqsOf.has(r.commitment)) reqsOf.set(r.commitment, []);
  reqsOf.get(r.commitment).push(r);
}

const r4 = (n) => Math.round(n * 10000) / 10000;
const pageSize = new Map(pages.map((p) => [p.n, p]));

/** One rect per line the words fall on, as page fractions. */
const lineRects = (ws) => {
  const by = new Map();
  for (const w of ws) {
    const k = `${w.page}:${w.line}`;
    const r = by.get(k);
    if (r) {
      r.x0 = Math.min(r.x0, w.x0);
      r.x1 = Math.max(r.x1, w.x1);
      r.y0 = Math.min(r.y0, w.y0);
      r.y1 = Math.max(r.y1, w.y1);
    } else by.set(k, { page: w.page, x0: w.x0, y0: w.y0, x1: w.x1, y1: w.y1 });
  }
  return [...by.values()].map((r) => {
    const { W, H } = pageSize.get(r.page);
    return { page: r.page, x: r4(r.x0 / W), y: r4(r.y0 / H), w: r4((r.x1 - r.x0) / W), h: r4((r.y1 - r.y0) / H) };
  });
};

/** One rect per page: the block the commitment occupies there. */
const blockRects = (ws) => {
  const by = new Map();
  for (const w of ws) {
    const r = by.get(w.page);
    if (r) {
      r.x0 = Math.min(r.x0, w.x0);
      r.x1 = Math.max(r.x1, w.x1);
      r.y0 = Math.min(r.y0, w.y0);
      r.y1 = Math.max(r.y1, w.y1);
    } else by.set(w.page, { page: w.page, x0: w.x0, y0: w.y0, x1: w.x1, y1: w.y1 });
  }
  return [...by.values()].map((r) => {
    const { W, H } = pageSize.get(r.page);
    return { page: r.page, x: r4(r.x0 / W), y: r4(r.y0 / H), w: r4((r.x1 - r.x0) / W), h: r4((r.y1 - r.y0) / H) };
  });
};

/**
 * Lay words out as text: a space between words, a paragraph break where the vertical gap
 * between lines on one page is wider than a line. Returns the text and each word's offset.
 */
const layout = (ws) => {
  let text = '';
  const offs = [];
  for (let i = 0; i < ws.length; i++) {
    const w = ws[i];
    const prev = ws[i - 1];
    if (prev) {
      const newLine = prev.page !== w.page || prev.line !== w.line;
      const gap = prev.page === w.page ? w.y0 - prev.y1 : 0;
      text += newLine && gap > 8 ? '\n\n' : ' ';
    }
    offs.push(text.length);
    text += w.t;
  }
  return { text, offs };
};

/**
 * The body's lines as boxes, each with the char range it holds in the laid-out text, so
 * any span of the text maps back to boxes on the page (partial lines by proportion).
 */
const textLines = (ws, offs) => {
  const out = [];
  let i = 0;
  while (i < ws.length) {
    let j = i;
    while (j + 1 < ws.length && ws[j + 1].page === ws[i].page && ws[j + 1].line === ws[i].line) j++;
    const [r] = lineRects(ws.slice(i, j + 1));
    out.push({ ...r, s: offs[i], e: offs[j] + ws[j].t.length });
    i = j + 1;
  }
  return out;
};

/**
 * Best window for a quote in the body, by token alignment: exact sequence first, then the
 * window with the most quote tokens in order-insensitive overlap, trimmed to its matching
 * ends. score = matched / quote tokens.
 */
const anchorQuote = (bodyNorm, quoteNorm) => {
  const L = quoteNorm.length;
  if (!L) return null;
  outer: for (let i = 0; i + L <= bodyNorm.length; i++) {
    for (let j = 0; j < L; j++) if (bodyNorm[i + j] !== quoteNorm[j]) continue outer;
    return { s: i, e: i + L, score: 1 };
  }
  const need = new Map();
  for (const t of quoteNorm) need.set(t, (need.get(t) ?? 0) + 1);
  let best = { s: 0, e: 0, score: 0 };
  for (let i = 0; i < bodyNorm.length; i++) {
    const have = new Map();
    let hit = 0;
    for (let j = i; j < Math.min(bodyNorm.length, i + L); j++) {
      const t = bodyNorm[j];
      const h = have.get(t) ?? 0;
      if (h < (need.get(t) ?? 0)) hit++;
      have.set(t, h + 1);
    }
    if (hit > best.score * L) {
      let s = i;
      let e = Math.min(bodyNorm.length, i + L);
      while (s < e && !need.has(bodyNorm[s])) s++;
      while (e > s && !need.has(bodyNorm[e - 1])) e--;
      best = { s, e, score: hit / L };
    }
  }
  return best;
};

const commitments = [];
const unanchoredLog = [];
const overlapAt = headings.findIndex((h) => h.code === nextOut);
if (overlapAt !== -1) headings.length = overlapAt + 1;
for (let h = 0; h < headings.length; h++) {
  const { code, at } = headings[h];
  if (code === nextOut) break;
  const end = headings[h + 1]?.at ?? words.length;
  const ws = words.slice(at, end);
  // Title: after the number, up to the first word ending the heading (":" or ".").
  const numWords = 1;
  let titleEnd = numWords;
  while (titleEnd < ws.length && titleEnd < 30 && !/[.:]$/.test(ws[titleEnd].t)) titleEnd++;
  const titleWords = ws.slice(numWords, titleEnd + 1);
  const title = titleWords.map((w) => w.t).join(' ').replace(/[.:]$/, '');
  const body = ws.slice(titleEnd + 1);
  const { text, offs } = layout(body);
  const bodyNorm = body.map((w) => norm(w.t));

  const requirements = (reqsOf.get(code) ?? []).map((r) => {
    const quoteNorm = r.text.split(/\s+/).map(norm).filter(Boolean);
    const a = anchorQuote(bodyNorm, quoteNorm.filter(Boolean)) ?? { s: 0, e: 0, score: 0 };
    const anchored = a.score >= 0.8 && a.e > a.s;
    if (!anchored) unanchoredLog.push(`${code} ${r.id} score=${a.score.toFixed(2)}`);
    return {
      id: r.id,
      score: r4(a.score),
      start: anchored ? offs[a.s] : -1,
      end: anchored ? offs[a.e - 1] + body[a.e - 1].t.length : -1,
    };
  });

  commitments.push({
    code,
    title,
    page: ws[0].page,
    text,
    heading: lineRects(ws.slice(0, titleEnd + 1)),
    blocks: blockRects(ws),
    lines: textLines(body, offs),
    requirements,
  });
}

// ── 3. Line boxes ─────────────────────────────────────────────────────────────

const scoped = pages.filter((p) => p.n <= LAST);

const pageOut = scoped.map((p) => ({
  n: p.n,
  aspect: r4(p.H / p.W),
  lines: p.lines.map((l) => ({
    x: r4(l.x0 / p.W),
    y: r4(l.y0 / p.H),
    w: r4((l.x1 - l.x0) / p.W),
    h: r4((l.y1 - l.y0) / p.H),
    text: l.text,
  })),
}));

writeFileSync(OUT, JSON.stringify({ first: FIRST, last: LAST, pages: pageOut, commitments }) + '\n');

const reqTotal = commitments.reduce((n, c) => n + c.requirements.length, 0);
console.log(
  `${commitments.length}/${inScope.length} commitments anchored on pp. ${FIRST}–${LAST}; ` +
    `${reqTotal - unanchoredLog.length}/${reqTotal} requirement quotes anchored`,
);
for (const l of unanchoredLog) console.log(`  unanchored ${l}`);
