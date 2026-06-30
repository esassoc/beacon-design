// Parse the DCP commitments CSV (RFC-4180: quoted fields, "" escapes, embedded
// commas/newlines) into a clean JSON array for the search index (src/data/global-search.ts
// imports the result).
//
// The Commitment Text is NEWLINE-delimited: paragraphs and lettered/numbered list items
// each sit on their own line (\r\n). There are no HTML tags, but lots of &nbsp; and other
// entities. We split the body into BLOCKS on those newlines (cleaning entities + stray
// tags + intra-line whitespace per block), drop empties, and strip the "<code> <title>"
// heading the export runs onto the front. The block array preserves the structure the
// results card renders as paragraphs/list items.
//
//   node scripts/parse-commitments.mjs <commitments.csv> [out.json]
//   # default out → src/data/dcp-commitments.json
//
// The CSV itself is a one-off export and is NOT kept in the repo; pass its path.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const SRC = process.argv[2];
if (!SRC) {
  console.error('usage: node scripts/parse-commitments.mjs <commitments.csv> [out.json]');
  process.exit(1);
}
const OUT = process.argv[3] || fileURLToPath(new URL('../src/data/dcp-commitments.json', import.meta.url));

// --- RFC-4180 parser → array of string[] rows ---------------------------------
function parseCsv(text) {
  if (text.charCodeAt(0) === 0xfeff) text = text.slice(1); // strip UTF-8 BOM
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; } // escaped quote
        else inQuotes = false;
      } else field += c;
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
      else field += c; // keep \r — it rides the field and is split out as a block boundary
    }
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows;
}

// Rich-text cleanup: strip stray HTML tags, decode the common entities.
const stripTags = (s) => s.replace(/<[^>]+>/g, ' ');
const decodeEntities = (s) =>
  s
    .replace(/&nbsp;/gi, ' ')
    .replace(/&rsquo;|&#8217;|&#39;|&apos;/gi, '’')
    .replace(/&lsquo;|&#8216;/gi, '‘')
    .replace(/&ldquo;|&#8220;/gi, '“')
    .replace(/&rdquo;|&#8221;/gi, '”')
    .replace(/&mdash;|&#8212;/gi, '—')
    .replace(/&ndash;|&#8211;/gi, '–')
    .replace(/&hellip;|&#8230;/gi, '…')
    .replace(/&bull;|&#8226;/gi, '•')
    .replace(/&middot;|&#183;/gi, '·')
    .replace(/&sect;|&#167;/gi, '§')
    .replace(/&para;|&#182;/gi, '¶')
    .replace(/&plusmn;|&#177;/gi, '±')
    .replace(/&times;|&#215;/gi, '×')
    .replace(/&divide;|&#247;/gi, '÷')
    .replace(/&mu;|&#956;/gi, 'μ')
    .replace(/&micro;|&#181;/gi, 'µ')
    .replace(/&deg;|&#176;/gi, '°')
    .replace(/&copy;|&#169;/gi, '©')
    .replace(/&reg;|&#174;/gi, '®')
    .replace(/&trade;|&#8482;/gi, '™')
    .replace(/&quot;/gi, '"')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&amp;/gi, '&'); // last, so it doesn't re-create entities

// Single-line field (code / title / category): collapse ALL whitespace.
const clean = (s) => decodeEntities(stripTags(s ?? '')).replace(/\s+/g, ' ').trim();
// Body → blocks: split on source newlines AND on bullets (• denotes a list item), clean
// each segment, drop empties. So both paragraph- and bullet-structured lists break apart.
const toBlocks = (s) =>
  decodeEntities(stripTags(s ?? ''))
    .split(/\r?\n/)
    .flatMap((line) => line.split(/\s*•\s*/))
    .map((seg) => seg.replace(/\s+/g, ' ').trim())
    .filter(Boolean);

const rows = parseCsv(readFileSync(SRC, 'utf8'));
const header = rows[0];
const idx = (name) => header.indexOf(name);
const cID = idx('ID'), cTitle = idx('Title'), cCat = idx('Resource Category'),
      cDoc = idx('Source Document'), cText = idx('Commitment Text'), cVer = idx('Version');

let records = [];
for (let r = 1; r < rows.length; r++) {
  const row = rows[r];
  if (!row || row.length < 2) continue;
  const code = clean(row[cID]);
  const title = clean(row[cTitle]);
  const blocks = toBlocks(row[cText]);

  // The export runs "<code> <title>" (or just the title) onto the FRONT of the first
  // block — strip that heading so the body starts at the actual text.
  if (blocks.length) {
    const lead = `${code} ${title}`.trim();
    if (code && title && blocks[0].startsWith(lead)) blocks[0] = blocks[0].slice(lead.length).trim();
    else if (title && blocks[0].startsWith(title)) blocks[0] = blocks[0].slice(title.length).trim();
    if (!blocks[0]) blocks.shift();
  }

  if (!title && !blocks.length && !code) continue; // skip blank rows
  records.push({ code, title, category: clean(row[cCat]), sourceDoc: clean(row[cDoc]), blocks, version: clean(row[cVer]) });
}

// Dedupe by code, keeping the highest Version (records without a code are kept as-is).
const byCode = new Map();
const noCode = [];
for (const rec of records) {
  if (!rec.code) { noCode.push(rec); continue; }
  const prev = byCode.get(rec.code);
  if (!prev || Number(rec.version || 0) >= Number(prev.version || 0)) byCode.set(rec.code, rec);
}
records = [...byCode.values(), ...noCode];

// --- stats --------------------------------------------------------------------
const blockCounts = records.map((r) => r.blocks.length);
const charLen = (r) => r.blocks.join(' ').length;
console.log('records       :', records.length, '| unique codes:', new Set(records.map((r) => r.code).filter(Boolean)).size);
console.log('blocks/record : avg', Math.round(blockCounts.reduce((a, b) => a + b, 0) / records.length), '| max', Math.max(...blockCounts));
console.log('body chars    : avg', Math.round(records.reduce((a, r) => a + charLen(r), 0) / records.length), '| max', Math.max(...records.map(charLen)));
const multi = records.find((r) => r.blocks.length >= 4) || records[0];
console.log(`\nsample "${multi.code} ${multi.title}" — ${multi.blocks.length} blocks:`);
for (const b of multi.blocks.slice(0, 5)) console.log('  •', b.slice(0, 90) + (b.length > 90 ? '…' : ''));

const out = records.map((r) => ({ code: r.code, title: r.title, category: r.category, sourceDoc: r.sourceDoc, blocks: r.blocks }));
writeFileSync(OUT, JSON.stringify(out));
console.log(`\nwrote ${out.length} records → ${OUT}`);
