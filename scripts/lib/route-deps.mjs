// Which source files does a route's bundle actually depend on?
//
// Regenerating all 35 routes to pick up a one-page edit was most of the pipeline's
// cost. `handoff:all --changed` skips a route whose inputs are byte-identical to the
// last capture, which needs (a) the transitive local imports behind each page and
// (b) a fingerprint that changes when anything shared does.
//
// The import walk is deliberately shallow in one respect: it follows only RELATIVE
// and src/-rooted specifiers. Package imports (@esa/ecology, @esa/tokens) are not
// walked — resolving a package's own graph is a different job — so a hub change
// would otherwise go unnoticed. The global fingerprint covers that: hub package
// versions and every global stylesheet feed a hash mixed into EVERY route, so a hub
// bump or a token edit invalidates the whole set, which is the safe direction to err.
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, dirname, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../../', import.meta.url));
const SRC = join(ROOT, 'src');

const sha = (s) => createHash('sha256').update(s).digest('hex').slice(0, 16);
const read = (f) => {
  try {
    return readFileSync(f, 'utf8');
  } catch {
    return '';
  }
};

// Astro resolves a route to either <path>.astro or <path>/index.astro.
export function pageFileFor(route) {
  const rel = route.replace(/^\/+|\/+$/g, '');
  for (const candidate of [join(SRC, 'pages', `${rel}.astro`), join(SRC, 'pages', rel, 'index.astro')])
    if (existsSync(candidate)) return candidate;
  return null;
}

const EXTS = ['', '.astro', '.ts', '.tsx', '.js', '.mjs', '/index.ts', '/index.astro'];

function resolveSpecifier(spec, fromFile) {
  let base;
  if (spec.startsWith('.')) base = resolve(dirname(fromFile), spec);
  // The repo's TS path alias — src/-rooted, same as a relative import once expanded.
  else if (spec.startsWith('@/')) base = join(SRC, spec.slice(2));
  else if (spec.startsWith('src/')) base = join(ROOT, spec);
  else return null; // bare package specifier — covered by the global fingerprint
  for (const ext of EXTS) {
    const candidate = base + ext;
    if (existsSync(candidate) && statSync(candidate).isFile()) return candidate;
  }
  return null;
}

const IMPORT_RE = /(?:import|export)[\s\S]*?from\s*['"]([^'"]+)['"]|import\s*\(\s*['"]([^'"]+)['"]\s*\)/g;

// Transitive local imports reachable from `entry`, entry included.
export function depsOf(entry) {
  const seen = new Set();
  const stack = [entry];
  while (stack.length) {
    const file = stack.pop();
    if (!file || seen.has(file)) continue;
    seen.add(file);
    const src = read(file);
    for (const m of src.matchAll(IMPORT_RE)) {
      const next = resolveSpecifier(m[1] || m[2], file);
      if (next && !seen.has(next)) stack.push(next);
    }
  }
  return [...seen].sort();
}

// Anything that changes how EVERY page renders: global styles, the theme, the token
// and component packages. Hashed once per run and mixed into every route's key.
export function globalFingerprint() {
  const parts = [];
  for (const rel of ['src/styles', 'src/layouts'])
    for (const f of walk(join(ROOT, rel))) parts.push(`${relative(ROOT, f)}:${sha(read(f))}`);
  const pkg = read(join(ROOT, 'package.json'));
  try {
    const deps = JSON.parse(pkg).dependencies ?? {};
    // Hub packages are file: links to a sibling checkout, so the version string alone
    // says nothing. Hash the built token sheet, which is what a hub change moves.
    parts.push(`deps:${sha(JSON.stringify(deps))}`);
    parts.push(`tokens:${sha(read(join(ROOT, 'node_modules/@esa/tokens/dist/tokens.css')))}`);
  } catch {
    parts.push('deps:unreadable');
  }
  return sha(parts.join('|'));
}

function walk(dir) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return []; // directory absent — nothing to fingerprint
  }
  const out = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full));
    else if (e.isFile()) out.push(full);
  }
  return out.sort();
}

// A route's capture key: its own page + spec + every local import behind them,
// plus the global fingerprint. Identical key ⇒ identical inputs ⇒ skip the capture.
export function routeKey({ route, specPath }, fingerprint) {
  const page = pageFileFor(route);
  const files = new Set(page ? depsOf(page) : []);
  if (specPath && existsSync(specPath)) for (const f of depsOf(specPath)) files.add(f);
  const parts = [...files].sort().map((f) => `${relative(ROOT, f)}:${sha(read(f))}`);
  return sha(`${fingerprint}|${route}|${parts.join('|')}`);
}
