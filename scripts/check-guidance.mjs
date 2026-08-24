#!/usr/bin/env node
// Gate: every prototype ships with authored handoff guidance and a captured bundle.
//
//   npm run handoff:check     # run it directly
//   npm run deploy            # runs automatically first (npm `predeploy`)
//
// Why this exists: a prototype with no spec in src/data/handoff/ does not fail, it
// silently DEGRADES — gen-handoff falls through to the hub's whole-page capture and
// emits a bundle with guessed section labels and no intent / decisions / gotchas /
// acceptance. Nothing surfaced that, so writing guidance depended on someone
// remembering to ask. Now the pipeline asks.
//
// Deploy no longer regenerates bundles (that got expensive as the registry grew), so
// this also checks that every registered route HAS a bundle on disk — otherwise a new
// prototype could publish with nothing for the inspector to read.
//
// Escape hatch, for when a deploy genuinely can't wait:
//   HANDOFF_SKIP_GUIDANCE=1 npm run deploy
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import baseline from './handoff-guidance-baseline.mjs';

const root = (p) => fileURLToPath(new URL('../' + p, import.meta.url));
// Dynamic import() needs a file:// URL, NOT a filesystem path. On macOS/Linux a posix path
// happens to work, so this only ever failed on Windows — with
// ERR_UNSUPPORTED_ESM_URL_SCHEME "Received protocol 'c:'" — and only at deploy time, since
// predeploy is the one place this script runs. Same family as the spawn() calls fixed in
// gen-handoff.mjs. Keep root() for readFileSync and use this for import().
const rootUrl = (p) => new URL('../' + p, import.meta.url).href;

if (process.env.HANDOFF_SKIP_GUIDANCE) {
  console.warn('handoff:check — SKIPPED via HANDOFF_SKIP_GUIDANCE. Guidance gaps are shipping.');
  process.exit(0);
}

// Same registry walk gen-handoff.mjs uses: pair each route with its nearest
// preceding slug (within a page object `slug:` always immediately precedes `route:`).
const registry = readFileSync(root('src/data/prototypes.ts'), 'utf8');
const targets = [];
let pendingSlug = null;
for (const m of registry.matchAll(/slug:\s*'([^']+)'|route:\s*'([^']+)'/g)) {
  if (m[1] !== undefined) pendingSlug = m[1];
  else if (pendingSlug) {
    targets.push({ slug: pendingSlug, route: m[2] });
    pendingSlug = null;
  }
}

const specs = new Set(
  readdirSync(root('src/data/handoff'))
    .filter((f) => f.endsWith('.mjs'))
    .map((f) => f.replace(/\.mjs$/, ''))
);
const allowed = new Set(baseline);
const bundleSlug = (route) => route.replace(/^\/+|\/+$/g, '').replace(/\//g, '-');

const errors = [];
const warnings = [];

// 1. A prototype with no spec, and no baseline entry excusing it, is the gap this
//    gate exists to catch — a new route that would ship on the fallback capture.
const ungated = targets.filter((t) => !specs.has(t.slug) && !allowed.has(t.slug));
for (const t of ungated)
  errors.push(
    `${t.slug} — no curated spec. Write src/data/handoff/${t.slug}.mjs (sections with ` +
      `selector + intent / decisions / gotchas / acceptance), or add the slug to ` +
      `scripts/handoff-guidance-baseline.mjs if it is deliberately un-curated.`
  );

// 2. A section inside a spec that carries none of the four guidance keys produces a
//    bundle entry with markup and styles but nothing telling a dev what it is for.
for (const slug of [...specs].sort()) {
  const spec = (await import(rootUrl(`src/data/handoff/${slug}.mjs`))).default;
  for (const s of spec.sections ?? [])
    if (!s.intent && !s.decisions && !s.gotchas && !s.acceptance)
      errors.push(`${slug} — section "${s.label}" has no guidance (needs at least an intent).`);
}

// 3. Keep the ratchet honest: once a spec is written, its baseline entry must go.
for (const slug of baseline)
  if (specs.has(slug))
    errors.push(
      `${slug} — has a spec now, so remove it from scripts/handoff-guidance-baseline.mjs.`
    );

// 4. Manifests are gitignored build artifacts — only claude/*.md is committed — so a
//    fresh clone has none, and deploy publishes whatever happens to be on disk. A
//    route with no manifest ships a page whose inspector 404s.
for (const t of targets)
  if (!existsSync(root(`public/handoff/${bundleSlug(t.route)}/manifest.json`)))
    errors.push(
      `${t.slug} — no manifest at public/handoff/${bundleSlug(t.route)}/ on this machine ` +
        `(manifests are gitignored, so pulling someone else's bundle does not give you one). ` +
        `Run: npm run handoff:all -- ${t.slug}`
    );

// 5. Remaining debt is reported, never fatal — that is what the baseline buys.
const debt = targets.filter((t) => allowed.has(t.slug));
if (debt.length)
  warnings.push(
    `${debt.length} prototype(s) still on the whole-page fallback with no authored guidance:\n` +
      `    ${debt.map((t) => t.slug).join(', ')}`
  );

for (const w of warnings) console.warn(`handoff:check — ${w}`);

if (errors.length) {
  console.error(`\nhandoff:check — ${errors.length} problem(s):\n`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  console.error('\nFix these, or bypass once with HANDOFF_SKIP_GUIDANCE=1.\n');
  process.exit(1);
}

console.log(`handoff:check — ok. ${targets.length} route(s), ${specs.size} curated.`);
