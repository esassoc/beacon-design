// Emit step 3's fixtures from two finished build-index.mjs runs: the first build, and the
// Re-run with guidance (its own propose, then the same extract filed, merged and completed
// against the Re-run's bins).
//
//   node scripts/emit-sw3-index.mjs <base run dir> <rerun run dir>
//
// Writes src/data/sw3-index.json (the plan: both proposals and what drafting each counts,
// inline on the page) and public/data/sw3-index/<basis>.json (what the Draft run makes of
// each proposal, fetched when a run happens). Each run dir holds the sw3-index.json its
// complete/suggest collect wrote (SW3_INDEX_OUT), and its extract and file results.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join, resolve } from "node:path";

const root = (p) => fileURLToPath(new URL(`../${p}`, import.meta.url));
const [, , baseArg, rerunArg] = process.argv;
if (!baseArg || !rerunArg) throw new Error("usage: emit-sw3-index.mjs <base run dir> <rerun run dir>");
const read = (p) => JSON.parse(readFileSync(p, "utf8"));
const AUDIENCE = { Crews: "Crews", Monitors: "Monitors", ComplianceStaff: "Compliance staff" };

const proposal = (cats) =>
  cats.map((c) => ({
    id: c.id,
    name: c.name,
    subcategories: c.subcategories.map((s) => ({ id: s.id, name: s.name, evidence: s.evidence })),
  }));

const drafts = (dir, basis) => {
  const f = read(join(dir, "sw3-index.json"));
  const items = new Map(read(join(dir, "extract/result.json")).items.map((x) => [x.id, x]));
  const { noBin } = read(join(dir, "file/result.json"));
  const placement = {};
  for (const c of f.categories) for (const s of c.subcategories) placement[s.id] = { home: s.entryIds, also: s.alsoIds };
  return {
    fixture: f,
    out: {
      basis,
      entries: f.entries,
      placement,
      unfiled: f.unfiled.map((u, i) => {
        const x = items.get(noBin[i]?.itemId);
        return {
          ...u,
          kind: x?.kind === "action" ? "action" : "obligation",
          ...(x?.kind === "action" ? {} : { class: x?.class ?? "Adhere", audience: AUDIENCE[x?.audience] ?? "Crews" }),
        };
      }),
      suggestions: f.suggestions ?? { existing: [], newBins: [], left: [] },
    },
  };
};

const base = drafts(resolve(baseArg), "base");
const rerun = drafts(resolve(rerunArg), "rerun");
const plan = {
  prompts: base.fixture.prompts,
  requirements: base.fixture.draft.requirements,
  base: proposal(base.fixture.categories),
  rerun: { guidance: base.fixture.rerun.guidance, categories: proposal(rerun.fixture.categories) },
  counts: { base: base.fixture.draft, rerun: rerun.fixture.draft },
};
writeFileSync(root("src/data/sw3-index.json"), JSON.stringify(plan));
mkdirSync(root("public/data/sw3-index"), { recursive: true });
for (const d of [base, rerun]) writeFileSync(root(`public/data/sw3-index/${d.out.basis}.json`), JSON.stringify(d.out));
const n = (d) => `${Object.keys(d.out.entries).length} drafts, ${d.out.unfiled.length} unfiled`;
console.log(`plan: ${plan.base.length}/${plan.rerun.categories.length} categories; base ${n(base)}; rerun ${n(rerun)}`);
