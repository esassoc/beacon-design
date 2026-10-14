// Anchor the DCP Mitigation Monitoring and Reporting Program's commitments to the page:
// the table-shaped counterpart of anchor-itp.mjs (docs/setup-wizard-3-step-brief.md).
//
// The MMRP's commitments are rows of three landscape tables (Chapter 3): Table 1 the
// mitigation measures (MM AES-1c …), Table 2 the environmental commitments (EC-2 …),
// Table 3 the compensatory mitigation plan (CMP-6 …). A row runs across page breaks; the
// header repeats on every page. From the PDF's word boxes (poppler `pdftotext -bbox`,
// the shape of prod's PdfPig words) this script:
//
//   1. reads each page's header row and takes the column edges from it, so the columns
//      are found, not configured (Table 2 and Table 3 lay theirs out differently);
//   2. starts a row wherever the first column holds a code, and runs it to the next one;
//   3. keeps each structured column's text (timing, action, reporting schedule, party,
//      mechanism, participating organisations, impact): fields a model need not extract;
//   4. splits the commitment text at its top-level enumerated items (1., a., i.), each a
//      requirement candidate with a box per line, standing in for the parse.
//
// Coordinates are fractions of the page (0–1), prod's PdfBoundingBoxDto shape.
//
//   node scripts/anchor-mmrp.mjs     # → src/data/sw3-mmrp-anchors.json
//
// Needs poppler (pdftotext, pdfinfo). Deterministic: same PDF, same output.
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = (p) => fileURLToPath(new URL(`../${p}`, import.meta.url));
const PDF = root('public/source-docs/dcp-mmrp.pdf');
const OUT = root('src/data/sw3-mmrp-anchors.json');
const r4 = (n) => Math.round(n * 10000) / 10000;
const LINE = 10;

// ── Words ─────────────────────────────────────────────────────────────────────

const xml = execFileSync('pdftotext', ['-bbox', PDF, '-'], { encoding: 'utf8', maxBuffer: 1 << 28 });
const pages = [];
for (const m of xml.matchAll(/<page width="([\d.]+)" height="([\d.]+)">([\s\S]*?)<\/page>/g)) {
  const words = [...m[3].matchAll(/<word xMin="([\d.]+)" yMin="([\d.]+)" xMax="([\d.]+)" yMax="([\d.]+)">([^<]*)<\/word>/g)].map((w) => ({
    x0: +w[1],
    y0: +w[2],
    x1: +w[3],
    // poppler reports this document's words at the font's full box (about 30pt for 9pt
    // type); the line height is what a box should cover.
    y1: Math.min(+w[4], +w[2] + LINE),
    t: w[5].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'"),
  }));
  pages.push({ n: pages.length + 1, W: +m[1], H: +m[2], words });
}

// ── Tables ────────────────────────────────────────────────────────────────────

const TABLES = [
  { id: 't1', label: 'Table 1', title: 'Mitigation Monitoring and Reporting Program', code: /^MM$/ },
  { id: 't2', label: 'Table 2', title: 'Environmental Commitments', code: /^EC-/ },
  { id: 't3', label: 'Table 3', title: 'Compensatory Mitigation Plan', code: /^CMP-/ },
];
const pageText = (p) => p.words.map((w) => w.t).join(' ');
const startOf = (label) => pages.find((p) => p.W > p.H && new RegExp(`^${label}\\. Delta Conveyance Project`).test(pageText(p).replace(/^.*?(Table \d\. Delta)/, '$1')))?.n;
const chapter4 = pages.find((p) => /^Chapter 4\b/.test(p.words.filter((w) => w.y0 > 60).map((w) => w.t).join(' ')))?.n ?? pages.length + 1;
const starts = TABLES.map((t) => startOf(t.label));
TABLES.forEach((t, i) => {
  t.first = starts[i];
  t.last = (starts[i + 1] ?? chapter4) - 1;
});

// ── Columns, from each page's header row ─────────────────────────────────────

const FOOTER = 730;
const COLS = ['code', 'title', 'text', 'timing', 'action', 'schedule', 'party', 'mechanism', 'orgs', 'impact'];

const header = (p) => {
  // The header sits at the top, or under the table's title on its first page.
  const timing = p.words.find((w) => w.t === 'Timing' && w.y0 < 220);
  if (!timing) return null;
  const hw = p.words.filter((w) => w.y0 >= timing.y0 - 14 && w.y0 <= timing.y0 + 2);
  const bottom = Math.max(...hw.map((w) => w.y1));
  // Cluster header words into columns: a gap of 10pt or more starts a new one.
  const xs = [...hw].sort((a, b) => a.x0 - b.x0);
  const clusters = [];
  for (const w of xs) {
    const c = clusters.at(-1);
    if (c && w.x0 - c.x1 < 10) c.x1 = Math.max(c.x1, w.x1);
    else clusters.push({ x0: w.x0, x1: w.x1 });
  }
  return { bottom, edges: clusters.map((c) => c.x0) };
};

const colOf = (edges, x) => {
  let i = 0;
  while (i + 1 < edges.length && x >= edges[i + 1] - 3) i++;
  return i;
};

// ── Rows ──────────────────────────────────────────────────────────────────────

const rows = [];
// A row's cells are top-aligned with its code, give or take a fraction of a point (the
// text column's first line can sit 0.01pt above the code), so rows are assigned by y with
// a tolerance, in two passes: find where each row starts, then give every word to the row
// above it. Words above the page's first code belong to the row carried from the last page.
const ROW_SLACK = 4;
for (const t of TABLES) {
  let row = null;
  for (let n = t.first; n <= t.last; n++) {
    const p = pages[n - 1];
    const h = header(p);
    if (!h) continue;
    const body = p.words.filter((w) => w.y0 > h.bottom + 1 && w.y1 < FOOTER).sort((a, b) => a.y0 - b.y0 || a.x0 - b.x0);
    const startsHere = [];
    for (const w of body) {
      if (colOf(h.edges, w.x0) !== 0 || !t.code.test(w.t)) continue;
      // A code wraps onto the next line ("MM AES-" / "1a"); one start per row.
      if (startsHere.length && w.y0 - startsHere.at(-1).codeY < 14) continue;
      startsHere.push({ table: t.id, page: n, codeY: w.y0, words: [] });
    }
    rows.push(...startsHere);
    for (const w of body) {
      const c = colOf(h.edges, w.x0);
      const owner = startsHere.filter((r) => r.codeY - ROW_SLACK <= w.y0).at(-1) ?? row;
      if (!owner) continue;
      owner.words.push({ ...w, n, c, W: p.W, H: p.H });
    }
    if (startsHere.length) row = startsHere.at(-1);
  }
}

const join = (ws) => ws.map((w) => w.t).join(' ').replace(/\s+([,.;:)])/g, '$1').trim();

/** Lines of one column's words, in reading order, page by page. */
const linesOf = (ws) => {
  const out = [];
  for (const w of [...ws].sort((a, b) => a.n - b.n || a.y0 - b.y0 || a.x0 - b.x0)) {
    const l = out.at(-1);
    if (l && l.n === w.n && Math.abs(l.y0 - w.y0) < 3) l.words.push(w);
    else out.push({ n: w.n, y0: w.y0, W: w.W, H: w.H, words: [w] });
  }
  for (const l of out) {
    l.x0 = Math.min(...l.words.map((w) => w.x0));
    l.x1 = Math.max(...l.words.map((w) => w.x1));
    l.y1 = Math.max(...l.words.map((w) => w.y1));
    l.text = join(l.words);
  }
  return out;
};
const rect = (l) => ({ page: l.n, x: r4(l.x0 / l.W), y: r4(l.y0 / l.H), w: r4((l.x1 - l.x0) / l.W), h: r4((l.y1 - l.y0) / l.H) });

/** One box per page covering the row's words. */
const blocks = (ws) => {
  const by = new Map();
  for (const w of ws) {
    const b = by.get(w.n) ?? { page: w.n, x0: Infinity, y0: Infinity, x1: -Infinity, y1: -Infinity, W: w.W, H: w.H };
    b.x0 = Math.min(b.x0, w.x0);
    b.y0 = Math.min(b.y0, w.y0);
    b.x1 = Math.max(b.x1, w.x1);
    b.y1 = Math.max(b.y1, w.y1);
    by.set(w.n, b);
  }
  return [...by.values()].map((b) => ({ page: b.page, x: r4(b.x0 / b.W), y: r4(b.y0 / b.H), w: r4((b.x1 - b.x0) / b.W), h: r4((b.y1 - b.y0) / b.H) }));
};

const MARK = [/^\d+\.$/, /^[a-z]\.$/, /^(?:i|ii|iii|iv|v|vi|vii|viii|ix|x|xi|xii)\.$/, /^[a-z]\)$/];
const NAME_WORDS = 8;

const out = rows.map((r) => {
  // The code is the first column's words beside the row's start (it may wrap once); the
  // first column lower down is an embedded table or a footnote marker, not the code.
  const CODE_PART = /^(MM|EC-|CMP-|[A-Za-z]+-|[A-Za-z]*-?\d+[a-z]?:?)/;
  const code = join(r.words.filter((w) => w.c === 0 && w.n === r.page && w.y0 - r.codeY < 24 && CODE_PART.test(w.t))).replace(/-\s+/g, '-').replace(/:$/, '');
  const title = join(r.words.filter((w) => w.c === 1));
  const textLines = linesOf(r.words.filter((w) => w.c === 2));
  const cols = {};
  for (let i = 3; i < COLS.length; i++) {
    const v = join(r.words.filter((w) => w.c === i));
    if (v) cols[COLS[i]] = v;
  }
  // The top-level marker kind is the first one the text uses.
  const kindOf = (l) => MARK.findIndex((re) => re.test(l.words[0].t));
  const top = textLines.map(kindOf).find((k) => k >= 0) ?? -1;
  const items = [];
  for (const l of textLines) {
    const k = kindOf(l);
    if (!items.length || (top >= 0 && k === top)) items.push({ lines: [] });
    items.at(-1).lines.push(l);
  }
  const requirements = items.map((it) => {
    const words = it.lines.flatMap((l) => l.words).map((w) => w.t);
    const body = MARK.some((re) => re.test(words[0])) ? words.slice(1) : words;
    const name = body.slice(0, NAME_WORDS).join(' ').replace(/[,;:.]$/, '');
    return { name: body.length > NAME_WORDS ? `${name}…` : name, text: join(it.lines.flatMap((l) => l.words)), boxes: it.lines.map(rect) };
  });
  return { code, title, table: r.table, page: r.page, blocks: blocks(r.words), cols, requirements };
});

const result = {
  file: 'dcp-mmrp.pdf',
  pages: pages.map((p) => ({ n: p.n, aspect: r4(p.H / p.W) })),
  tables: TABLES.map(({ id, label, title, first, last }) => ({ id, label, title, first, last })),
  rows: out,
};
writeFileSync(OUT, JSON.stringify(result));
const reqs = out.reduce((n, r) => n + r.requirements.length, 0);
for (const t of TABLES) console.log(`${t.label} ${t.title}: pp. ${t.first}–${t.last}, ${out.filter((r) => r.table === t.id).length} rows`);
console.log(`${out.length} commitments, ${reqs} requirement candidates`);
