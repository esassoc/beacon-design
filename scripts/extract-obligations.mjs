// Extract the obligations registry from the Actions-and-Obligations specimen HTML into a
// clean JSON file for the prototypes (src/data/obligations.ts imports the result).
//
// The specimen is a self-contained HTML document that carries its own data: the registry
// lives in a <script id="registry-data" type="application/json"> block, roughly 260 KB of
// the 1.15 MB file. We pull that block out verbatim — no reshaping, no enrichment — so the
// prototypes render the real 402 rows rather than invented ones.
//
// The payload is { axes, obligations }:
//   axes         3 category axes (subject / activity / species), each { id, name, field,
//                group_label, item_label, groups[], n_groups, n_items }, where a group is
//                { id, name, items[] } and an item is { id, name, scope, n }.
//   obligations  402 rows of { id, title, class, standard, condition, parameters, species,
//                window, commitments, gate, installed_control, subjects, activities,
//                species_ids }.
//
// This script VERIFIES the counts the brief asserts and fails loudly on a mismatch — the
// specimen is a moving document, and a silent shape change would otherwise land in the
// prototypes as wrong numbers.
//
//   node scripts/extract-obligations.mjs <specimen.html> [out.json]
//   # default out → src/data/obligations-registry.json
//
// The specimen is an out-of-repo working document and is NOT kept here; pass its path.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const SRC = process.argv[2];
if (!SRC) {
  console.error('usage: node scripts/extract-obligations.mjs <specimen.html> [out.json]');
  process.exit(1);
}
const OUT =
  process.argv[3] || fileURLToPath(new URL('../src/data/obligations-registry.json', import.meta.url));

// --- pull the embedded JSON block --------------------------------------------
const html = readFileSync(SRC, 'utf8');
const block = html.match(
  /<script id="registry-data" type="application\/json">([\s\S]*?)<\/script>/,
);
if (!block) {
  console.error(`no <script id="registry-data"> block in ${SRC} — is this the specimen?`);
  process.exit(1);
}

let data;
try {
  data = JSON.parse(block[1]);
} catch (err) {
  console.error(`the registry-data block is not valid JSON: ${err.message}`);
  process.exit(1);
}

// --- verify against the brief's stated counts --------------------------------
// These are the figures in actions-obligations-brief.md. They all matched on 2026-09-03.
// A mismatch means the specimen moved, not that this script is wrong — reconcile before
// shipping pages that quote the numbers.
const EXPECTED = {
  obligations: 402,
  classes: { adhere: 225, monitor: 103, notify: 50, roster: 24 },
  axes: { subject: [17, 69], activity: [7, 34], species: [6, 35] },
};

const problems = [];
const obligations = data.obligations ?? [];
const axes = data.axes ?? [];

if (obligations.length !== EXPECTED.obligations) {
  problems.push(`obligations: expected ${EXPECTED.obligations}, got ${obligations.length}`);
}

const classes = {};
for (const o of obligations) classes[o.class] = (classes[o.class] ?? 0) + 1;
for (const [name, n] of Object.entries(EXPECTED.classes)) {
  if (classes[name] !== n) problems.push(`class ${name}: expected ${n}, got ${classes[name] ?? 0}`);
}

for (const [id, [groups, items]] of Object.entries(EXPECTED.axes)) {
  const axis = axes.find((a) => a.id === id);
  if (!axis) {
    problems.push(`axis ${id}: missing`);
    continue;
  }
  const g = axis.groups?.length ?? 0;
  const i = (axis.groups ?? []).reduce((n, x) => n + (x.items?.length ?? 0), 0);
  if (g !== groups || i !== items) {
    problems.push(`axis ${id}: expected ${groups} groups / ${items} items, got ${g} / ${i}`);
  }
}

if (problems.length) {
  console.error('the specimen no longer matches the brief:');
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}

// --- write --------------------------------------------------------------------
writeFileSync(OUT, `${JSON.stringify(data, null, 2)}\n`);

const flag = (k) => obligations.filter((o) => o[k]).length;
console.log(`✓ ${obligations.length} obligations → ${OUT}`);
console.log(
  `  classes: ${Object.entries(classes)
    .sort()
    .map(([k, v]) => `${k} ${v}`)
    .join(', ')}`,
);
console.log(
  `  axes: ${axes.map((a) => `${a.id} ${a.groups.length}/${a.groups.reduce((n, x) => n + x.items.length, 0)}`).join(', ')}`,
);
console.log(`  flags: gate ${flag('gate')}, installed_control ${flag('installed_control')}`);
