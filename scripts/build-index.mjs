// The Compliance Index for the Setup Wizard's step 3, built the way Beacon builds it: Build index
// (ProposeComplianceIndex v1, ComplianceIndexGenerationService), then one Draft run of Extract
// (ExtractActionsAndObligations v3), File (FileItems v1), Merge (MergeObligations v1, then
// MergeActions v1 per bin) and Complete (CompleteActions v1), over step 2's requirements
// (src/data/sw3-requirements.json). docs/backlog/compliance-index.md, Threads 2, 3, 9, 10, 11.
//
// Prod sends each prompt to gpt-5.6-terra with a strict JSON schema. This machine has no API key,
// so each call is answered by Claude agents. Every stage is `prepare` (render the prompt with every
// list filled but the per-call slots, and write the calls in batches), then agents (one answer
// file per batch, in the DTO's exact shape), then `collect` (check every answer, apply it the way
// prod persists it, and write the stage's result for the next prepare).
//
//   node scripts/build-index.mjs <stage> prepare <dir>   # → <dir>/<stage>/template.md, batch-N.json, check.mjs
//   (agents) <dir>/<stage>/batch-N.json → out-N.json     # { [callId]: <response DTO> }
//   node <dir>/<stage>/check.mjs N                       # validates out-N.json against batch-N.json
//   node scripts/build-index.mjs <stage> collect <dir>   # → <dir>/<stage>/result.json
//
// Stages, in order: propose, extract, file, merge, merge-actions, complete. propose and extract
// read only the requirements, so they may run side by side; merge and merge-actions read only
// file's result, so they may too. merge runs in rounds when a bin holds more than 120 items (prod
// merges such a bin in several calls, each seeing the drafts the calls before it made): collect
// says when another `merge prepare` is due. complete's collect writes src/data/sw3-index.json.
//
// The prompts are read from the Beacon checkout (origin/develop) at run time and are not copied
// into this repo, whose site is public. Prod orders some rows by GUID; a stable hash of each row's
// id stands in for that order, so a rerun gives the same batches.
import { execFileSync, spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
  mkdirSync,
  readFileSync,
  writeFileSync,
  existsSync,
  readdirSync,
} from "node:fs";
import { fileURLToPath } from "node:url";
import { join, resolve } from "node:path";
import { homedir } from "node:os";

const root = (p) => fileURLToPath(new URL(`../${p}`, import.meta.url));
const SELF = fileURLToPath(import.meta.url);
const [, , stage, cmd, dirArg, nArg] = process.argv;
const STAGES = [
  "propose",
  "extract",
  "file",
  "merge",
  "merge-actions",
  "complete",
];
if (
  !STAGES.includes(stage) ||
  !["prepare", "collect", "check"].includes(cmd) ||
  !dirArg
) {
  throw new Error(
    `usage: build-index.mjs ${STAGES.join("|")} prepare|collect <dir>  (or check <dir> N)`,
  );
}
const DIR = resolve(dirArg);
const SD = join(DIR, stage);

const BEACON = process.env.BEACON_REPO ?? join(homedir(), "Dev/Beacon");
const PROMPTS = {
  propose: ["ProposeComplianceIndex_v1.md", "ProposeComplianceIndex v1"],
  extract: [
    "ExtractActionsAndObligations_v3.md",
    "ExtractActionsAndObligations v3",
  ],
  file: ["FileItems_v1.md", "FileItems v1"],
  merge: ["MergeObligations_v1.md", "MergeObligations v1"],
  "merge-actions": ["MergeActions_v1.md", "MergeActions v1"],
  complete: ["CompleteActions_v1.md", "CompleteActions v1"],
};
const OUT = process.env.SW3_INDEX_OUT ?? root("src/data/sw3-index.json");

// ── Prod's constants (AIServiceConstants) and lookups ────────────────────────

const EXTRACT_CHUNK = 10; // ActionObligationExtractionChunkSize
const MAX_TEXT_FOR_EXTRACTION = 20000; // MaxRequirementTextLengthForExtraction
const FILE_CHUNK = 90; // ItemFilingChunkSize
const MAX_ITEMS_PER_MERGE = 120; // MaxItemsPerMergeCall
const MAX_EXISTING_PER_MERGE = 300; // MaxExistingObligationsPerMergeCall
const MAX_DRAFTS_PER_COMPLETE = 10; // MaxDraftsPerCompleteCall
const MAX_SOURCES_PER_DRAFT = 8; // MaxSourcesPerCompletedDraft
const MAX_EXCERPT_FOR_COMPLETION = 2000; // MaxExcerptLengthForCompletion
const MAX_NAME = 255; // ComplianceIndexNameDto.MaxNameLength
const REVIEW_CATEGORY = "Review — likely not obligations"; // ObligationTaxonomyNames
const UNFILED_CATEGORY = "Unfiled";
const BATCH_BYTES = 80_000;

const AUDIENCES = ["Crews", "Monitors", "ComplianceStaff"]; // ObligationAudienceEnum 1..3
const AUDIENCE_CODE = { Crews: "C", Monitors: "M", ComplianceStaff: "S" };
const CLASSES = ["Adhere", "Monitor", "Notify", "Roster"]; // ObligationClassEnum 1..4
const TYPE_DISPLAY = {
  Analysis: "Analysis",
  Survey: "Survey",
  Monitoring: "Monitoring",
  AvoidanceAndBMPs: "Avoidance & BMPs",
  RestorationAndMitigation: "Restoration & Mitigation",
  Plan: "Plan",
  Design: "Design",
  Reporting: "Reporting",
  ApprovalAndConsultation: "Approval & Consultation",
  Financial: "Financial",
  TrainingAndEducation: "Training & Education",
  Other: "Other",
};
const FREQUENCIES = ["AsNeeded", "Onetime", "Recurring", "Ongoing"]; // dbo.Frequency
const PERIODS = ["Days", "Weeks", "Months", "Years"]; // dbo.DeadlinePeriod
const DIRECTIONS = ["Before", "After"]; // dbo.DeadlineDirection

// ── Helpers ──────────────────────────────────────────────────────────────────

const readJson = (p) => JSON.parse(readFileSync(p, "utf8"));
const writeJson = (p, v) => writeFileSync(p, JSON.stringify(v, null, 1) + "\n");
const hash = (s) => createHash("sha1").update(s).digest("hex");
const byHash = (key) => (a, b) =>
  hash(key(a)) < hash(key(b)) ? -1 : hash(key(a)) > hash(key(b)) ? 1 : 0;
const collator = new Intl.Collator("en");
const upperOrdinal = (a, b) => {
  const x = a.toUpperCase();
  const y = b.toUpperCase();
  return x < y ? -1 : x > y ? 1 : 0;
};
const blank = (v) =>
  v == null || String(v).trim() === "" ? null : String(v).trim();
const truncate = (v, n) => (v == null || v.length <= n ? v : v.slice(0, n));
const prompt = (name) =>
  execFileSync("git", [
    "-C",
    BEACON,
    "show",
    `origin/develop:Beacon.API/Controllers/AI/Prompts/${name}`,
  ]).toString();
const need = (p, what) => {
  if (!existsSync(p))
    throw new Error(
      `${what} is missing (${p}): run that stage's collect first`,
    );
  return readJson(p);
};
const slug = (s) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "x";

// A batch file reads one row per line: each call's id and keys, then each array slot one element a line.
const dumpBatch = (calls) =>
  "[\n" +
  calls
    .map((c) => {
      const head = Object.entries(c)
        .filter(([k]) => k !== "slots")
        .map(([k, v]) => `${JSON.stringify(k)}:${JSON.stringify(v)}`);
      const slots = Object.entries(c.slots)
        .map(([k, v]) =>
          Array.isArray(v) && v.length
            ? `  ${JSON.stringify(k)}:[\n   ${v.map((x) => JSON.stringify(x)).join(",\n   ")}\n  ]`
            : `  ${JSON.stringify(k)}:${JSON.stringify(v)}`,
        )
        .join(",\n");
      return ` {${head.join(",")},"slots":{\n${slots}\n }}`;
    })
    .join(",\n") +
  "\n]\n";

// Calls packed into batch files of about BATCH_BYTES, never splitting a call.
const writeBatches = (calls, firstN = 1) => {
  const batches = [];
  let cur = [];
  let size = 0;
  for (const c of calls) {
    const s = JSON.stringify(c).length;
    if (cur.length && size + s > BATCH_BYTES) {
      batches.push(cur);
      cur = [];
      size = 0;
    }
    cur.push(c);
    size += s;
  }
  if (cur.length) batches.push(cur);
  batches.forEach((b, i) =>
    writeFileSync(join(SD, `batch-${firstN + i}.json`), dumpBatch(b)),
  );
  return batches;
};

const writeCheck = () =>
  writeFileSync(
    join(SD, "check.mjs"),
    `// node check.mjs N: checks out-N.json against batch-N.json and the ${stage} response shape.\n` +
      `import { spawnSync } from 'node:child_process';\n` +
      `const r = spawnSync(process.execPath, [${JSON.stringify(SELF)}, ${JSON.stringify(stage)}, 'check', ${JSON.stringify(DIR)}, process.argv[2] ?? ''], { stdio: 'inherit' });\n` +
      `process.exit(r.status ?? 1);\n`,
  );

const outFiles = () =>
  readdirSync(SD)
    .map((f) => /^out-(\d+)\.json$/.exec(f))
    .filter(Boolean)
    .map((m) => Number(m[1]))
    .sort((a, b) => a - b);

// ── Shape checking ───────────────────────────────────────────────────────────

const isInt = (v) => Number.isInteger(v);
const isStr = (v) => typeof v === "string";
const keysExactly = (o, keys, at, problems) => {
  if (!o || typeof o !== "object" || Array.isArray(o))
    return (problems.push(`${at}: not an object`), false);
  const got = Object.keys(o);
  const missing = keys.filter((k) => !(k in o));
  const extra = got.filter((k) => !keys.includes(k));
  if (missing.length) problems.push(`${at}: missing ${missing.join(", ")}`);
  if (extra.length) problems.push(`${at}: unexpected ${extra.join(", ")}`);
  return !missing.length;
};
const everyIndexOnce = (indexes, n, at, problems) => {
  const seen = new Map();
  for (const i of indexes) {
    if (!isInt(i) || i < 0 || i >= n)
      problems.push(`${at}: index ${JSON.stringify(i)} is not 0..${n - 1}`);
    seen.set(i, (seen.get(i) ?? 0) + 1);
  }
  for (const [i, k] of seen)
    if (k > 1) problems.push(`${at}: index ${i} appears ${k} times`);
  const missing = [];
  for (let i = 0; i < n; i++) if (!seen.has(i)) missing.push(i);
  if (missing.length)
    problems.push(`${at}: no entry for index ${missing.join(", ")}`);
};

// ── The requirements, as Requirement.PlannerListAsyncForProject lists them ───

const anchorsByCode = () => {
  const itp = readJson(root("src/data/sw3-anchors.json"));
  const mmrp = readJson(root("src/data/sw3-mmrp-anchors.json"));
  const m = new Map();
  for (const c of itp.commitments) m.set(`itp|${c.code}`, c.text);
  for (const r of mmrp.rows)
    m.set(`mmrp|${r.code}`, r.requirements.map((q) => q.text).join("\n"));
  return m;
};

// Step 2's requirement ID: the commitment code without "COA ", then its 1-based place (11.29:3).
const ridOf = (code, n) => `${code.replace(/^COA /, "")}:${n}`;

let REQS;
const requirements = () => {
  if (REQS) return REQS;
  const src = readJson(root("src/data/sw3-requirements.json"));
  const list = [];
  for (const [doc, byCode] of Object.entries(src.docs)) {
    for (const [code, rs] of Object.entries(byCode)) {
      rs.forEach((r, i) =>
        list.push({
          rid: ridOf(code, i + 1),
          doc,
          code,
          n: i + 1,
          name: r.name,
          act: r.quote,
          type: r.type,
          scope: r.scope,
          phases: r.phases ?? [],
          milestones: r.milestones ?? [],
          seasons: (r.seasons ?? []).map((s) => s.Name),
        }),
      );
    }
  }
  // OrderByAlphaNumeric(ClientCommitmentID): digit runs padded to the longest run, then a culture
  // string order; ThenBy(Name).
  const max = Math.max(
    0,
    ...list.flatMap((r) => (r.code.match(/\d+/g) ?? []).map((d) => d.length)),
  );
  const pad = (s) => s.replace(/\d+/g, (d) => d.padStart(max, "0"));
  list.sort(
    (a, b) =>
      collator.compare(pad(a.code), pad(b.code)) ||
      collator.compare(a.name, b.name),
  );
  REQS = list;
  return list;
};
const reqByRid = () => new Map(requirements().map((r) => [r.rid, r]));

// HtmlToPlainText over text that is already plain, then SplitIntoSegments, then CapWidth.
const plainText = (t) =>
  (t ?? "")
    .replace(/ /g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/ *\n */g, "\n")
    .replace(/\n{2,}/g, "\n")
    .trim();
const segmentsOf = (text) => {
  const segments = [];
  const plain = plainText(text);
  if (!plain.trim()) return segments;
  for (const line of plain.split("\n")) {
    for (const part of line.trim().split(/(?<=[.!?])\s+(?=[A-Z0-9"(])/))
      if (part.trim()) segments.push(part.trim());
  }
  const kept = [];
  let length = 0;
  for (const s of segments) {
    length += s.length;
    if (length > MAX_TEXT_FOR_EXTRACTION && kept.length > 0) break;
    kept.push(s);
  }
  return kept;
};
// ExcerptFrom: the cited segments, valid, distinct, in order, joined by a space.
const excerptFrom = (segments, numbers) => {
  const valid = [
    ...new Set((numbers ?? []).filter((n) => n >= 1 && n <= segments.length)),
  ].sort((a, b) => a - b);
  return valid.length ? valid.map((n) => segments[n - 1]).join(" ") : null;
};

// ── propose ──────────────────────────────────────────────────────────────────
// One call per project: every requirement, slim, in planner order (ComplianceIndexGenerationService).

const propose = {
  prepare() {
    const filled = prompt(PROMPTS.propose[0])
      .replace("{{LockedIndexJson}}", "[]")
      .replace("{{Guidance}}", "");
    writeFileSync(join(SD, "template.md"), filled);
    const reqs = requirements();
    const slim = reqs.map((r, i) => ({
      I: i,
      Name: r.name,
      C: r.code,
      ACT: r.act,
    }));
    const calls = [{ id: "index", slots: { RequirementsJson: slim } }];
    // One call cannot be split: the index is proposed from the whole permit set at once.
    writeFileSync(join(SD, "batch-1.json"), dumpBatch(calls));
    console.log(
      `propose prepare: ${reqs.length} requirements in 1 call (batch-1.json, ${readFileSync(join(SD, "batch-1.json")).length} bytes) → ${SD}`,
    );
  },
  check(batch, out, problems) {
    for (const call of batch) {
      const a = out[call.id];
      const n = call.slots.RequirementsJson.length;
      if (!keysExactly(a, ["Categories"], call.id, problems)) continue;
      if (!Array.isArray(a.Categories) || !a.Categories.length)
        problems.push(`${call.id}: Categories is empty`);
      for (const [ci, c] of (a.Categories ?? []).entries()) {
        const at = `${call.id} Categories[${ci}]`;
        if (!keysExactly(c, ["Name", "Subcategories"], at, problems)) continue;
        if (!isStr(c.Name) || !c.Name.trim())
          problems.push(`${at}: Name is empty`);
        if (!Array.isArray(c.Subcategories) || !c.Subcategories.length)
          problems.push(`${at}: no Subcategories`);
        for (const [si, s] of (c.Subcategories ?? []).entries()) {
          const sat = `${at} ${JSON.stringify(c.Name)} › Subcategories[${si}]`;
          if (
            !keysExactly(
              s,
              ["Name", "RequirementIndexes", "EvidencedByCount", "Rationale"],
              sat,
              problems,
            )
          )
            continue;
          if (!isStr(s.Name) || !s.Name.trim())
            problems.push(`${sat}: Name is empty`);
          if (!isStr(s.Rationale) || !s.Rationale.trim())
            problems.push(`${sat}: Rationale is empty`);
          if (
            !Array.isArray(s.RequirementIndexes) ||
            !s.RequirementIndexes.length
          )
            problems.push(`${sat}: no RequirementIndexes`);
          else {
            if (s.RequirementIndexes.length > 5)
              problems.push(
                `${sat}: ${s.RequirementIndexes.length} RequirementIndexes, the prompt allows five`,
              );
            for (const i of s.RequirementIndexes)
              if (!isInt(i) || i < 0 || i >= n)
                problems.push(
                  `${sat}: index ${JSON.stringify(i)} is not 0..${n - 1}`,
                );
            if (
              new Set(s.RequirementIndexes).size !== s.RequirementIndexes.length
            )
              problems.push(`${sat}: repeated index`);
          }
          if (
            !isInt(s.EvidencedByCount) ||
            s.EvidencedByCount < (s.RequirementIndexes?.length ?? 0)
          )
            problems.push(
              `${sat}: EvidencedByCount ${JSON.stringify(s.EvidencedByCount)} is below the cited count`,
            );
        }
      }
    }
  },
  // ComplianceIndexCategory.ApplyProposalAsync on a project with no index yet: names trimmed and cut to
  // 255, repeats merged case-insensitively, categories then subcategories in OrdinalIgnoreCase order,
  // evidence de-duplicated, the review and Unfiled categories last.
  collect(answers) {
    const a = answers.index;
    if (!a) throw new Error("propose: no answer for the index call");
    const reqs = requirements();
    const norm = (s) => {
      const t = (s ?? "").trim();
      return t.length <= MAX_NAME ? t : t.slice(0, MAX_NAME).trimEnd();
    };
    const cats = new Map();
    for (const c of a.Categories.filter((x) => blank(x.Name))) {
      const name = norm(c.Name);
      const key =
        [...cats.keys()].find((k) => k.toUpperCase() === name.toUpperCase()) ??
        name;
      if (!cats.has(key)) cats.set(key, []);
      cats
        .get(key)
        .push(...(c.Subcategories ?? []).filter((x) => blank(x.Name)));
    }
    const categories = [];
    for (const [cname, subs] of [...cats.entries()].sort((x, y) =>
      upperOrdinal(x[0], y[0]),
    )) {
      const cat = { id: slug(cname), name: cname, subcategories: [] };
      for (const s of [...subs].sort((x, y) =>
        upperOrdinal(norm(x.Name), norm(y.Name)),
      )) {
        const sname = norm(s.Name);
        let sub = cat.subcategories.find(
          (x) => x.name.toUpperCase() === sname.toUpperCase(),
        );
        if (!sub) {
          sub = {
            id: `${cat.id}/${slug(sname)}`,
            name: sname,
            evidencedByCount: s.EvidencedByCount,
            rationale: s.Rationale,
            evidence: [],
          };
          cat.subcategories.push(sub);
        } else {
          sub.evidencedByCount = s.EvidencedByCount;
        }
        for (const i of [...new Set(s.RequirementIndexes ?? [])]) {
          if (i < 0 || i >= reqs.length) continue;
          if (!sub.evidence.includes(reqs[i].rid))
            sub.evidence.push(reqs[i].rid);
        }
      }
      categories.push(cat);
    }
    for (const last of [REVIEW_CATEGORY, UNFILED_CATEGORY]) {
      const i = categories.findIndex(
        (c) => c.name.toUpperCase() === last.toUpperCase(),
      );
      if (i >= 0) categories.push(...categories.splice(i, 1));
    }
    const seen = new Set();
    for (const c of categories) {
      while (seen.has(c.id)) c.id += "-2";
      seen.add(c.id);
    }
    const subs = categories.reduce((n, c) => n + c.subcategories.length, 0);
    writeJson(join(SD, "result.json"), {
      prompt: PROMPTS.propose[1],
      categories,
    });
    console.log(
      `propose collect: ${categories.length} categories, ${subs} subcategories → ${join(SD, "result.json")}`,
    );
    for (const c of categories)
      console.log(
        `  ${c.name}: ${c.subcategories.map((s) => `${s.name} (${s.evidencedByCount})`).join(", ")}`,
      );
  },
};

// The index's bins in the order File numbers them (ExtractedItemFiling.ListBinsForProjectAsync):
// every subcategory but Unfiled's, category order then subcategory order.
const binsOf = (index) =>
  index.categories
    .filter((c) => c.name !== UNFILED_CATEGORY)
    .flatMap((c) =>
      c.subcategories.map((s) => ({ id: s.id, name: `${c.name} › ${s.name}` })),
    );

// ── extract ──────────────────────────────────────────────────────────────────
// Ten requirements a call, in planner order; each requirement's text numbered by segment
// (ActionObligationExtractionService). Needs no index.

const extract = {
  prepare() {
    writeFileSync(join(SD, "template.md"), prompt(PROMPTS.extract[0]));
    const reqs = requirements();
    const calls = [];
    for (let i = 0; i < reqs.length; i += EXTRACT_CHUNK) {
      const chunk = reqs.slice(i, i + EXTRACT_CHUNK);
      calls.push({
        id: `x${String(calls.length + 1).padStart(3, "0")}`,
        rids: chunk.map((r) => r.rid),
        slots: {
          RequirementsJson: chunk.map((r, k) => ({
            I: k,
            Name: r.name,
            C: r.code,
            ACT: segmentsOf(r.act)
              .map((s, n) => `[${n + 1}] ${s}`)
              .join(" "),
          })),
        },
      });
    }
    const batches = writeBatches(calls);
    console.log(
      `extract prepare: ${reqs.length} requirements in ${calls.length} calls of ${EXTRACT_CHUNK}, ${batches.length} batches → ${SD}`,
    );
  },
  check(batch, out, problems) {
    const reqs = reqByRid();
    for (const call of batch) {
      const a = out[call.id];
      if (!keysExactly(a, ["R"], call.id, problems)) continue;
      if (!Array.isArray(a.R)) {
        problems.push(`${call.id}: R is not an array`);
        continue;
      }
      everyIndexOnce(
        a.R.map((r) => r?.I),
        call.rids.length,
        `${call.id} R`,
        problems,
      );
      for (const r of a.R) {
        const at = `${call.id} R[I=${r?.I}]`;
        if (!keysExactly(r, ["I", "A", "O", "N", "U"], at, problems)) continue;
        const req = reqs.get(call.rids[r.I]);
        const nseg = req ? segmentsOf(req.act).length : 0;
        const checkE = (e, iat) => {
          if (!Array.isArray(e) || !e.length)
            problems.push(`${iat}: E is empty`);
          else
            for (const n of e)
              if (!isInt(n) || n < 1 || n > nseg)
                problems.push(
                  `${iat}: segment ${JSON.stringify(n)} is not 1..${nseg}`,
                );
        };
        if (!Array.isArray(r.A) || !Array.isArray(r.O)) {
          problems.push(`${at}: A and O must be arrays`);
          continue;
        }
        r.A.forEach((x, k) => {
          const iat = `${at} A[${k}]`;
          if (!keysExactly(x, ["S", "T", "W", "E"], iat, problems)) return;
          if (!isStr(x.S) || !x.S.trim()) problems.push(`${iat}: S is empty`);
          if (!isStr(x.T) || !isStr(x.W))
            problems.push(`${iat}: T and W must be strings`);
          checkE(x.E, iat);
        });
        r.O.forEach((x, k) => {
          const iat = `${at} O[${k}]`;
          if (
            !keysExactly(x, ["S", "P", "W", "M", "K", "E", "X"], iat, problems)
          )
            return;
          if (!isStr(x.S) || !x.S.trim()) problems.push(`${iat}: S is empty`);
          if (!AUDIENCES.includes(x.P))
            problems.push(
              `${iat}: P ${JSON.stringify(x.P)} is not ${AUDIENCES.join("|")}`,
            );
          if (!CLASSES.includes(x.K))
            problems.push(
              `${iat}: K ${JSON.stringify(x.K)} is not ${CLASSES.join("|")}`,
            );
          if (!isStr(x.W)) problems.push(`${iat}: W must be a string`);
          if (!Array.isArray(x.M) || x.M.some((m) => !isStr(m)))
            problems.push(`${iat}: M must be an array of strings`);
          if (typeof x.X !== "boolean")
            problems.push(`${iat}: X must be true or false`);
          checkE(x.E, iat);
        });
        if (!isStr(r.N) || !isStr(r.U))
          problems.push(`${at}: N and U must be strings`);
        else if (!r.A.length && !r.O.length && !r.N.trim())
          problems.push(`${at}: no actions or obligations, so N must say why`);
      }
    }
  },
  // ActionObligationExtraction.PersistAsync: a blank statement is skipped, NeitherReason kept only
  // when nothing was found, excerpts rebuilt from the cited segments.
  collect(answers, batches) {
    const reqs = reqByRid();
    const items = [];
    const neither = [];
    const uncertain = [];
    const unread = [];
    for (const call of batches.flat()) {
      const a = answers[call.id];
      const done = new Set();
      for (const r of a?.R ?? []) {
        if (!isInt(r.I) || r.I < 0 || r.I >= call.rids.length || done.has(r.I))
          continue;
        done.add(r.I);
        const req = reqs.get(call.rids[r.I]);
        const segs = segmentsOf(req.act);
        const acts = (r.A ?? []).filter((x) => blank(x.S));
        const obls = (r.O ?? []).filter((x) => blank(x.S));
        if (!acts.length && !obls.length)
          neither.push({ rid: req.rid, reason: blank(r.N) });
        if (blank(r.U)) uncertain.push({ rid: req.rid, note: blank(r.U) });
        acts.forEach((x, k) =>
          items.push({
            id: `${req.rid}#a${k + 1}`,
            kind: "action",
            rid: req.rid,
            statement: x.S.trim(),
            owedTo: truncate(blank(x.T), 255),
            appliesWhen: blank(x.W),
            excerpt: excerptFrom(segs, x.E),
          }),
        );
        obls.forEach((x, k) => {
          const audience =
            AUDIENCES.find(
              (v) =>
                v.toLowerCase() ===
                String(x.P ?? "")
                  .trim()
                  .toLowerCase(),
            ) ?? null;
          const cls =
            CLASSES.find(
              (v) =>
                v.toLowerCase() ===
                String(x.K ?? "")
                  .trim()
                  .toLowerCase(),
            ) ?? null;
          const signs = (x.M ?? [])
            .filter((m) => blank(m))
            .map((m) => m.trim());
          items.push({
            id: `${req.rid}#o${k + 1}`,
            kind: "obligation",
            rid: req.rid,
            statement: x.S.trim(),
            audience,
            class: cls,
            appliesWhen: blank(x.W),
            excerpt: excerptFrom(segs, x.E),
            monitorSigns: signs.length ? signs : null,
            isInferred: !!x.X,
          });
        });
      }
      call.rids.forEach((rid, i) => done.has(i) || unread.push(rid));
    }
    writeJson(join(SD, "result.json"), {
      prompt: PROMPTS.extract[1],
      items,
      neither,
      uncertain,
      unread,
    });
    const n = (k) => items.filter((x) => x.kind === k).length;
    console.log(
      `extract collect: ${n("action")} actions, ${n("obligation")} obligations, ${neither.length} binding nothing → ${join(SD, "result.json")}`,
    );
    for (const a of AUDIENCES)
      console.log(`  ${a}: ${items.filter((x) => x.audience === a).length}`);
    if (unread.length)
      console.log(
        `  unread, no answer (${unread.length}): ${unread.join(", ")}`,
      );
  },
};

// ── file ─────────────────────────────────────────────────────────────────────
// Ninety items a call, in item-id order, against the numbered bin list (ItemFilingService).

const fileStage = {
  prepare() {
    const index = need(join(DIR, "propose/result.json"), "propose result");
    const { items } = need(join(DIR, "extract/result.json"), "extract result");
    const bins = binsOf(index);
    writeFileSync(
      join(SD, "template.md"),
      prompt(PROMPTS.file[0]).replace(
        "{{IndexList}}",
        bins.map((b, n) => `${n + 1} · ${b.name}`).join("\n"),
      ),
    );
    const ordered = [...items].sort(byHash((x) => x.id));
    const kind = (x) =>
      x.kind === "action" ? "A" : (AUDIENCE_CODE[x.audience] ?? "?");
    const calls = [];
    for (let i = 0; i < ordered.length; i += FILE_CHUNK) {
      const chunk = ordered.slice(i, i + FILE_CHUNK);
      calls.push({
        id: `f${String(calls.length + 1).padStart(3, "0")}`,
        itemIds: chunk.map((x) => x.id),
        kinds: chunk.map(kind),
        slots: {
          ItemsJson: chunk.map((x, k) => ({
            I: k,
            K: kind(x),
            S: x.statement,
            W: x.appliesWhen ?? "",
          })),
        },
      });
    }
    const batches = writeBatches(calls);
    console.log(
      `file prepare: ${items.length} items in ${calls.length} calls of ${FILE_CHUNK} against ${bins.length} bins, ${batches.length} batches → ${SD}`,
    );
  },
  check(batch, out, problems) {
    const nbins = binsOf(
      need(join(DIR, "propose/result.json"), "propose result"),
    ).length;
    for (const call of batch) {
      const a = out[call.id];
      if (!keysExactly(a, ["F"], call.id, problems)) continue;
      if (!Array.isArray(a.F)) {
        problems.push(`${call.id}: F is not an array`);
        continue;
      }
      everyIndexOnce(
        a.F.map((f) => f?.I),
        call.itemIds.length,
        `${call.id} F`,
        problems,
      );
      for (const f of a.F) {
        const at = `${call.id} F[I=${f?.I}]`;
        if (!keysExactly(f, ["I", "H", "O", "N"], at, problems)) continue;
        if (!isInt(f.H) || f.H < 0 || f.H > nbins)
          problems.push(`${at}: H ${JSON.stringify(f.H)} is not 0..${nbins}`);
        if (!Array.isArray(f.O)) problems.push(`${at}: O must be an array`);
        else {
          for (const o of f.O)
            if (!isInt(o) || o < 1 || o > nbins)
              problems.push(
                `${at}: other bin ${JSON.stringify(o)} is not 1..${nbins}`,
              );
          if (f.O.includes(f.H))
            problems.push(`${at}: the home bin is repeated in O`);
          if (call.kinds[f.I] === "A" && f.O.length)
            problems.push(`${at}: an action takes no other bins`);
          if (f.H === 0 && f.O.length)
            problems.push(`${at}: O must be empty when H is 0`);
        }
        if (!isStr(f.N)) problems.push(`${at}: N must be a string`);
        else if (f.H === 0 && !f.N.trim())
          problems.push(`${at}: H is 0, so N must say what the item is about`);
        else if (f.H !== 0 && f.N.trim())
          problems.push(`${at}: N must be empty when H is set`);
      }
    }
  },
  // ExtractedItemFiling.PersistAsync: a bin number outside the list is dropped; home 0 (or invalid)
  // records the reason as "no bin fits"; an action keeps only its home bin.
  collect(answers, batches) {
    const bins = binsOf(
      need(join(DIR, "propose/result.json"), "propose result"),
    );
    const filings = [];
    const noBin = [];
    const unfiled = [];
    let invalid = 0;
    for (const call of batches.flat()) {
      const a = answers[call.id];
      const done = new Set();
      for (const f of a?.F ?? []) {
        if (
          !isInt(f.I) ||
          f.I < 0 ||
          f.I >= call.itemIds.length ||
          done.has(f.I)
        )
          continue;
        done.add(f.I);
        const itemId = call.itemIds[f.I];
        const bin = (n) => (n >= 1 && n <= bins.length ? bins[n - 1].id : null);
        const home = bin(f.H);
        if (!home) {
          if (f.H !== 0) invalid++;
          noBin.push({
            itemId,
            reason: truncate(blank(f.N) ?? "No bin in the index fits.", 500),
          });
          continue;
        }
        filings.push({ itemId, bin: home, home: true });
        if (call.kinds[f.I] === "A") continue;
        for (const n of [...new Set(f.O ?? [])]) {
          const other = bin(n);
          if (!other) {
            invalid++;
            continue;
          }
          if (other === home) continue;
          filings.push({ itemId, bin: other, home: false });
        }
      }
      call.itemIds.forEach((id, i) => done.has(i) || unfiled.push(id));
    }
    writeJson(join(SD, "result.json"), {
      prompt: PROMPTS.file[1],
      filings,
      noBin,
      unfiled,
    });
    console.log(
      `file collect: ${filings.filter((f) => f.home).length} filed · ${filings.filter((f) => !f.home).length} also filed elsewhere · ${noBin.length} with no bin that fits → ${join(SD, "result.json")}`,
    );
    if (invalid)
      console.log(`  ${invalid} bin numbers not in the index were dropped`);
    if (unfiled.length) console.log(`  unfiled, no answer (${unfiled.length})`);
  },
};

// ── merge (obligations) ──────────────────────────────────────────────────────
// One bin a call, its home-filed obligation items ordered by audience, 120 at most; a bigger bin
// is merged in rounds, each seeing the drafts before it (ObligationMergeService, MergeStep).

const filingId = (f) => `${f.itemId}>${f.bin}`;
const loadItems = () =>
  new Map(
    need(join(DIR, "extract/result.json"), "extract result").items.map((x) => [
      x.id,
      x,
    ]),
  );

const mergeState = () => {
  const p = join(SD, "state.json");
  return existsSync(p)
    ? readJson(p)
    : { round: 0, rounds: [], drafts: [], suggested: {} };
};

const merge = {
  prepare() {
    const index = need(join(DIR, "propose/result.json"), "propose result");
    const { filings } = need(join(DIR, "file/result.json"), "file result");
    const items = loadItems();
    const reqs = reqByRid();
    const st = mergeState();
    const open = st.rounds.at(-1);
    if (open && !open.collected)
      throw new Error(`merge: round ${open.round} is not collected yet`);
    writeFileSync(join(SD, "template.md"), prompt(PROMPTS.merge[0]));
    const bins = binsOf(index);
    const calls = [];
    // Bins in id order, as MergeStep takes its slot keys; the order does not change any bin's answer.
    bins.forEach((bin, b) => {
      const unmerged = filings
        .filter(
          (f) =>
            f.bin === bin.id &&
            f.home &&
            items.get(f.itemId)?.kind === "obligation" &&
            !st.suggested[filingId(f)],
        )
        .sort(
          (x, y) =>
            AUDIENCES.indexOf(items.get(x.itemId).audience) -
              AUDIENCES.indexOf(items.get(y.itemId).audience) ||
            byHash(filingId)(x, y),
        )
        .slice(0, MAX_ITEMS_PER_MERGE);
      if (!unmerged.length) return;
      const existing = st.drafts
        .filter((d) => d.bin === bin.id)
        .sort((x, y) => y.round - x.round || byHash((d) => d.id)(x, y))
        .slice(0, MAX_EXISTING_PER_MERGE);
      calls.push({
        id: `m${String(b + 1).padStart(3, "0")}r${st.round + 1}`,
        bin: bin.id,
        filingIds: unmerged.map(filingId),
        audiences: unmerged.map((f) => items.get(f.itemId).audience),
        existingIds: existing.map((d) => d.id),
        existingAudiences: existing.map((d) => d.audience),
        slots: {
          BinName: bin.name,
          ExistingJson: existing.map((d, n) => ({
            X: n + 1,
            P: AUDIENCE_CODE[d.audience] ?? "?",
            T: d.title,
            W: d.trigger ?? "",
          })),
          ItemsJson: unmerged.map((f, i) => {
            const x = items.get(f.itemId);
            return {
              I: i,
              P: AUDIENCE_CODE[x.audience] ?? "?",
              K: x.class ?? "",
              S: x.statement,
              W: x.appliesWhen ?? "",
              C: reqs.get(x.rid).code,
            };
          }),
        },
      });
    });
    if (!calls.length) {
      console.log("merge prepare: every bin is merged; nothing to prepare");
      return;
    }
    const first = st.rounds.reduce((n, r) => Math.max(n, r.last), 0) + 1;
    const batches = writeBatches(calls, first);
    st.round += 1;
    st.rounds.push({
      round: st.round,
      first,
      last: first + batches.length - 1,
      collected: false,
    });
    writeJson(join(SD, "state.json"), st);
    console.log(
      `merge prepare: round ${st.round}, ${calls.length} bins (${calls.reduce((n, c) => n + c.filingIds.length, 0)} items), batch-${first}..batch-${first + batches.length - 1} → ${SD}`,
    );
  },
  check(batch, out, problems) {
    for (const call of batch) {
      const a = out[call.id];
      if (!keysExactly(a, ["O"], call.id, problems)) continue;
      if (!Array.isArray(a.O)) {
        problems.push(`${call.id}: O is not an array`);
        continue;
      }
      everyIndexOnce(
        a.O.flatMap((o) => o?.M ?? []),
        call.filingIds.length,
        `${call.id} O[].M`,
        problems,
      );
      a.O.forEach((o, k) => {
        const at = `${call.id} O[${k}]`;
        if (!keysExactly(o, ["X", "M", "T", "W", "K"], at, problems)) return;
        if (!Array.isArray(o.M) || !o.M.length)
          return problems.push(`${at}: M is empty`);
        if (!isInt(o.X) || o.X < 0 || o.X > call.existingIds.length)
          problems.push(
            `${at}: X ${JSON.stringify(o.X)} is not 0..${call.existingIds.length}`,
          );
        if (!CLASSES.includes(o.K))
          problems.push(
            `${at}: K ${JSON.stringify(o.K)} is not ${CLASSES.join("|")}`,
          );
        if (!isStr(o.T) || !isStr(o.W))
          return problems.push(`${at}: T and W must be strings`);
        const auds = new Set(o.M.map((i) => call.audiences[i]));
        if (auds.size > 1)
          problems.push(
            `${at}: items of different audiences never merge (${[...auds].join(", ")})`,
          );
        if (o.X > 0) {
          if (o.T || o.W)
            problems.push(`${at}: T and W must be empty when X is not 0`);
          if (
            call.existingAudiences[o.X - 1] &&
            [...auds].some((p) => p !== call.existingAudiences[o.X - 1])
          )
            problems.push(
              `${at}: joins an existing obligation of another audience`,
            );
        } else if (o.M.length > 1) {
          if (!o.T.trim())
            problems.push(
              `${at}: a new obligation of ${o.M.length} items needs T`,
            );
        } else if (o.T || o.W)
          problems.push(
            `${at}: T and W must be empty for an item that stands alone`,
          );
      });
    }
  },
  // Obligation.PersistMergeAsync: mixed audiences split (the largest group keeps the merge, the rest
  // stand alone), joins honoured only within an audience, every item left out stands alone.
  collect(answers, batches) {
    const st = mergeState();
    const round = st.rounds.at(-1);
    if (!round || round.collected)
      throw new Error("merge: no round to collect; run merge prepare");
    const items = loadItems();
    const fileItem = (fid) => items.get(fid.split(">")[0]);
    const inRound = batches
      .filter((_, i) => i + 1 >= round.first && i + 1 <= round.last)
      .flat();
    const missing = [];
    let merged = 0;
    let alone = 0;
    let joined = 0;
    for (const call of inRound) {
      const a = answers[call.id];
      if (!a || !Array.isArray(a.O)) {
        missing.push(call.id); // the bin stays unmerged and is prepared again next round
        continue;
      }
      let k = 0;
      const assigned = new Set();
      const add = (members, statement, appliesWhen, cls) => {
        const its = members.map((i) => fileItem(call.filingIds[i]));
        const many = members.length > 1;
        const signs = [];
        for (const s of its.flatMap((x) => x.monitorSigns ?? []))
          if (!signs.some((t) => t.toLowerCase() === s.toLowerCase()))
            signs.push(s);
        const d = {
          id: `${call.id}.${++k}`,
          bin: call.bin,
          round: round.round,
          audience: its[0].audience,
          class: cls ?? its[0].class ?? "Adhere",
          title: truncate(
            many && blank(statement) ? statement.trim() : its[0].statement,
            510,
          ),
          trigger:
            many && blank(appliesWhen)
              ? appliesWhen.trim()
              : its[0].appliesWhen,
          monitorSigns: signs,
          filingIds: [],
        };
        st.drafts.push(d);
        for (const i of members) {
          st.suggested[call.filingIds[i]] = d.id;
          d.filingIds.push(call.filingIds[i]);
        }
        if (many) merged++;
      };
      for (const g of a.O) {
        const members = (g.M ?? []).filter(
          (i) =>
            isInt(i) &&
            i >= 0 &&
            i < call.filingIds.length &&
            !assigned.has(i) &&
            assigned.add(i),
        );
        if (!members.length) continue;
        if (g.X >= 1 && g.X <= call.existingIds.length) {
          const target = st.drafts.find(
            (d) => d.id === call.existingIds[g.X - 1],
          );
          for (const i of members) {
            if (call.audiences[i] !== target.audience) {
              assigned.delete(i);
              continue;
            }
            st.suggested[call.filingIds[i]] = target.id;
            target.filingIds.push(call.filingIds[i]);
            joined++;
          }
          continue;
        }
        const cls =
          CLASSES.find(
            (c) =>
              c.toLowerCase() ===
              String(g.K ?? "")
                .trim()
                .toLowerCase(),
          ) ?? null;
        const groups = [
          ...Map.groupBy(members, (i) => call.audiences[i]).values(),
        ].sort((x, y) => y.length - x.length);
        add(groups[0], g.T, g.W, cls);
        for (const other of groups.slice(1))
          for (const i of other) assigned.delete(i);
      }
      for (let i = 0; i < call.filingIds.length; i++) {
        if (assigned.has(i)) continue;
        add([i], null, null, null);
        alone++;
      }
    }
    round.collected = true;
    writeJson(join(SD, "state.json"), st);
    const { filings } = need(join(DIR, "file/result.json"), "file result");
    const left = filings.filter(
      (f) =>
        f.home &&
        items.get(f.itemId)?.kind === "obligation" &&
        !st.suggested[filingId(f)],
    );
    writeJson(join(SD, "result.json"), {
      prompt: PROMPTS.merge[1],
      drafts: st.drafts,
      remaining: left.length,
    });
    console.log(
      `merge collect: round ${round.round}, ${st.drafts.length} draft obligations so far (${merged} merged from several items, ${joined} joined existing, ${alone} stood alone) → ${join(SD, "result.json")}`,
    );
    if (missing.length)
      console.log(
        `  no answer for ${missing.length} bins: ${missing.join(", ")}`,
      );
    if (left.length)
      console.log(
        `  ${left.length} items still to merge in ${new Set(left.map((f) => f.bin)).size} bins: run \`merge prepare\` again (round ${round.round + 1})`,
      );
  },
};

// ── merge-actions ────────────────────────────────────────────────────────────
// One bin a call, all its home-filed action items (ActionMergeService). Prod runs it right after
// the bin's obligation merge; it reads nothing the obligation merge writes.

const mergeActions = {
  prepare() {
    const index = need(join(DIR, "propose/result.json"), "propose result");
    const { filings } = need(join(DIR, "file/result.json"), "file result");
    const items = loadItems();
    const reqs = reqByRid();
    writeFileSync(join(SD, "template.md"), prompt(PROMPTS["merge-actions"][0]));
    const calls = [];
    binsOf(index).forEach((bin, b) => {
      const its = filings
        .filter(
          (f) =>
            f.bin === bin.id &&
            f.home &&
            items.get(f.itemId)?.kind === "action",
        )
        .sort(byHash(filingId));
      if (!its.length) return;
      calls.push({
        id: `a${String(b + 1).padStart(3, "0")}`,
        bin: bin.id,
        filingIds: its.map(filingId),
        slots: {
          BinName: bin.name,
          ExistingJson: [],
          ItemsJson: its.map((f, i) => {
            const x = items.get(f.itemId);
            const r = reqs.get(x.rid);
            return {
              I: i,
              S: x.statement,
              W: x.appliesWhen ?? "",
              O: x.owedTo ?? "",
              Y: TYPE_DISPLAY[r.type] ?? "",
              Z: r.scope ?? "",
              C: r.code,
            };
          }),
        },
      });
    });
    const batches = writeBatches(calls);
    console.log(
      `merge-actions prepare: ${calls.reduce((n, c) => n + c.filingIds.length, 0)} action items in ${calls.length} bins, ${batches.length} batches → ${SD}`,
    );
  },
  check(batch, out, problems) {
    for (const call of batch) {
      const a = out[call.id];
      if (!keysExactly(a, ["A"], call.id, problems)) continue;
      if (!Array.isArray(a.A)) {
        problems.push(`${call.id}: A is not an array`);
        continue;
      }
      everyIndexOnce(
        a.A.flatMap((x) => x?.M ?? []),
        call.filingIds.length,
        `${call.id} A[].M`,
        problems,
      );
      a.A.forEach((x, k) => {
        const at = `${call.id} A[${k}]`;
        if (!keysExactly(x, ["X", "M", "N", "T", "Y", "Z"], at, problems))
          return;
        if (!Array.isArray(x.M) || !x.M.length)
          return problems.push(`${at}: M is empty`);
        if (x.X !== 0)
          problems.push(
            `${at}: X must be 0 (the bin has no draft actions yet)`,
          );
        if (![x.N, x.T, x.Y, x.Z].every(isStr))
          return problems.push(`${at}: N, T, Y and Z must be strings`);
        if (!x.N.trim()) problems.push(`${at}: N is empty`);
        if (x.N.length > 80)
          problems.push(`${at}: N is ${x.N.length} characters, at most 80`);
        const its = x.M.map((i) => call.slots.ItemsJson[i]).filter(Boolean);
        if (x.M.length > 1) {
          if (!x.T.trim())
            problems.push(`${at}: a new action of ${x.M.length} items needs T`);
          if (!its.some((i) => i.Y === x.Y))
            problems.push(
              `${at}: Y ${JSON.stringify(x.Y)} is not one of its items' types`,
            );
          if (!its.some((i) => i.Z === x.Z))
            problems.push(
              `${at}: Z ${JSON.stringify(x.Z)} is not one of its items' scopes`,
            );
        } else if (x.T || x.Y || x.Z)
          problems.push(
            `${at}: T, Y and Z must be empty for an item that stands alone`,
          );
      });
    }
  },
  // Action.PersistMergeAsync: name from N or the first statement; a merged action takes the model's
  // type and scope when they name one of its items', else the first item's.
  collect(answers, batches) {
    const items = loadItems();
    const reqs = reqByRid();
    const actions = [];
    const missing = [];
    let merged = 0;
    let alone = 0;
    for (const call of batches.flat()) {
      const a = answers[call.id];
      if (!a || !Array.isArray(a.A)) {
        missing.push(call.id);
        continue;
      }
      let k = 0;
      const assigned = new Set();
      const src = (i) => {
        const x = items.get(call.filingIds[i].split(">")[0]);
        const r = reqs.get(x.rid);
        return { x, type: TYPE_DISPLAY[r.type], scope: r.scope };
      };
      const add = (members, g) => {
        const its = members.map(src);
        const many = members.length > 1;
        const pick = (field, v) =>
          many
            ? (its.find(
                (s) =>
                  s[field] &&
                  s[field].toLowerCase() ===
                    String(v ?? "")
                      .trim()
                      .toLowerCase(),
              ) ?? its[0])
            : its[0];
        actions.push({
          id: `${call.id}.${++k}`,
          bin: call.bin,
          name: truncate(blank(g?.N) ?? its[0].x.statement, 510),
          text: many && blank(g?.T) ? g.T.trim() : its[0].x.statement,
          type: pick("type", g?.Y).type,
          scope: pick("scope", g?.Z).scope,
          filingIds: members.map((i) => call.filingIds[i]),
        });
        if (many) merged++;
      };
      for (const g of a.A) {
        const members = (g.M ?? []).filter(
          (i) =>
            isInt(i) &&
            i >= 0 &&
            i < call.filingIds.length &&
            !assigned.has(i) &&
            assigned.add(i),
        );
        if (!members.length) continue;
        if (g.X !== 0) {
          for (const i of members) assigned.delete(i); // no draft actions to join on a first run
          continue;
        }
        add(members, g);
      }
      for (let i = 0; i < call.filingIds.length; i++) {
        if (assigned.has(i)) continue;
        add([i], null);
        alone++;
      }
    }
    writeJson(join(SD, "result.json"), {
      prompt: PROMPTS["merge-actions"][1],
      actions,
    });
    console.log(
      `merge-actions collect: ${actions.length} draft actions (${merged} merged from several items, ${alone} stood alone) → ${join(SD, "result.json")}`,
    );
    if (missing.length)
      console.log(
        `  no answer for ${missing.length} bins: ${missing.join(", ")}`,
      );
  },
};

// ── complete ─────────────────────────────────────────────────────────────────
// Ten draft actions a call, each with up to eight sources (ActionCompletionService). Its collect
// writes the fixture.

// The project's milestones: the ones step 2's requirements name, which accepting step 2 enrolls.
const projectMilestones = () =>
  [...new Set(requirements().flatMap((r) => r.milestones))].sort(
    collator.compare,
  );

const complete = {
  prepare() {
    const { actions } = need(
      join(DIR, "merge-actions/result.json"),
      "merge-actions result",
    );
    const items = loadItems();
    const reqs = reqByRid();
    const milestones = projectMilestones();
    writeFileSync(
      join(SD, "template.md"),
      prompt(PROMPTS.complete[0])
        .replace("{{FrequencyNames}}", FREQUENCIES.join(", "))
        .replace("{{PeriodNames}}", PERIODS.join(", "))
        .replace("{{DirectionNames}}", DIRECTIONS.join(", "))
        .replace("{{MilestonesJson}}", JSON.stringify(milestones)),
    );
    const drafts = [...actions].sort(byHash((a) => a.id));
    const calls = [];
    for (let i = 0; i < drafts.length; i += MAX_DRAFTS_PER_COMPLETE) {
      const chunk = drafts.slice(i, i + MAX_DRAFTS_PER_COMPLETE);
      calls.push({
        id: `c${String(calls.length + 1).padStart(3, "0")}`,
        actionIds: chunk.map((a) => a.id),
        slots: {
          DraftsJson: chunk.map((d, n) => ({
            X: n + 1,
            N: d.name,
            T: d.text ?? "",
            S: [...d.filingIds]
              .sort(byHash((f) => f))
              .slice(0, MAX_SOURCES_PER_DRAFT)
              .map((f) => {
                const x = items.get(f.split(">")[0]);
                const r = reqs.get(x.rid);
                return {
                  S: x.statement,
                  Q: truncate(x.excerpt, MAX_EXCERPT_FOR_COMPLETION) ?? "",
                  W: x.appliesWhen ?? "",
                  O: x.owedTo ?? "",
                  P: r.phases,
                  M: r.milestones,
                  E: r.seasons,
                };
              }),
          })),
        },
      });
    }
    const batches = writeBatches(calls);
    console.log(
      `complete prepare: ${drafts.length} draft actions in ${calls.length} calls of ${MAX_DRAFTS_PER_COMPLETE}, ${milestones.length} milestones, ${batches.length} batches → ${SD}`,
    );
  },
  check(batch, out, problems) {
    const nm = projectMilestones().length;
    const keys = [
      "X",
      "E",
      "R",
      "F",
      "DM",
      "DN",
      "DO",
      "DU",
      "DD",
      "RI",
      "RU",
      "SM",
      "SN",
      "EM",
      "EN",
    ];
    for (const call of batch) {
      const a = out[call.id];
      if (!keysExactly(a, ["A"], call.id, problems)) continue;
      if (!Array.isArray(a.A)) {
        problems.push(`${call.id}: A is not an array`);
        continue;
      }
      everyIndexOnce(
        a.A.map((x) => (isInt(x?.X) ? x.X - 1 : x?.X)),
        call.actionIds.length,
        `${call.id} A[].X (from 1)`,
        problems,
      );
      for (const x of a.A) {
        const at = `${call.id} A[X=${x?.X}]`;
        if (!keysExactly(x, keys, at, problems)) continue;
        for (const k of ["DM", "DO", "RI", "SM", "EM"])
          if (!isInt(x[k]) || x[k] < 0)
            problems.push(`${at}: ${k} must be a whole number`);
        for (const k of ["E", "R", "F", "DN", "DU", "DD", "RU", "SN", "EN"])
          if (!isStr(x[k])) problems.push(`${at}: ${k} must be a string`);
        if (isStr(x.E) && !x.E.trim())
          problems.push(`${at}: E (expected evidence) is always filled`);
        if (x.F && !FREQUENCIES.includes(x.F))
          problems.push(
            `${at}: F ${JSON.stringify(x.F)} is not ${FREQUENCIES.join("|")} or empty`,
          );
        for (const k of ["DM", "SM", "EM"])
          if (isInt(x[k]) && x[k] > nm)
            problems.push(`${at}: ${k} ${x[k]} is not 0..${nm}`);
        for (const k of ["DU", "RU"])
          if (x[k] && !PERIODS.includes(x[k]))
            problems.push(
              `${at}: ${k} ${JSON.stringify(x[k])} is not ${PERIODS.join("|")} or empty`,
            );
        if (x.DD && !DIRECTIONS.includes(x.DD))
          problems.push(
            `${at}: DD ${JSON.stringify(x.DD)} is not ${DIRECTIONS.join("|")} or empty`,
          );
        if (x.F !== "Onetime" && (x.DM || x.DN || x.DO || x.DU || x.DD))
          problems.push(`${at}: deadline fields are only for Onetime`);
        if (
          x.F !== "Recurring" &&
          (x.RI || x.RU || x.SM || x.SN || x.EM || x.EN)
        )
          problems.push(`${at}: recurrence fields are only for Recurring`);
      }
    }
  },
  // Action.PersistCompletionAsync fills only the responsible party the fixture carries (blank stays
  // "Needs input"); then the index is assembled.
  collect(answers, batches) {
    const party = {};
    let leftOut = 0;
    for (const call of batches.flat()) {
      const byNumber = new Map();
      for (const x of answers[call.id]?.A ?? [])
        if (
          isInt(x.X) &&
          x.X >= 1 &&
          x.X <= call.actionIds.length &&
          !byNumber.has(x.X)
        )
          byNumber.set(x.X, x);
      call.actionIds.forEach((id, i) => {
        const c = byNumber.get(i + 1);
        if (!c) leftOut++;
        party[id] = blank(c?.R) ?? "";
      });
    }
    writeJson(join(SD, "result.json"), {
      prompt: PROMPTS.complete[1],
      responsibleParty: party,
    });
    console.log(
      `complete collect: ${Object.keys(party).length} draft actions, ${Object.values(party).filter((p) => !p).length} need a responsible party, ${leftOut} left out → ${join(SD, "result.json")}`,
    );
    assemble(party);
  },
};

// ── The fixture (Sw3Index, src/data/sw3-index-types.ts) ──────────────────────

function assemble(party) {
  const index = need(join(DIR, "propose/result.json"), "propose result");
  const ext = need(join(DIR, "extract/result.json"), "extract result");
  const { filings, noBin } = need(join(DIR, "file/result.json"), "file result");
  const mr = need(join(DIR, "merge/result.json"), "merge result");
  const { actions } = need(
    join(DIR, "merge-actions/result.json"),
    "merge-actions result",
  );
  if (mr.remaining)
    throw new Error(
      `merge: ${mr.remaining} items are not merged yet; run merge prepare/collect again`,
    );
  const items = new Map(ext.items.map((x) => [x.id, x]));
  const reqs = reqByRid();

  // ObligationRequirement as WriteRequirementLinksAsync writes it: one locator per requirement,
  // its distinct excerpts in text order (one the text lacks sorts last), joined by a blank line.
  const locators = (itemIds) => {
    const byReq = new Map();
    for (const id of itemIds) {
      const x = items.get(id);
      if (!byReq.has(x.rid)) byReq.set(x.rid, []);
      byReq.get(x.rid).push(x.excerpt);
    }
    return [...byReq.entries()]
      .map(([rid, ex]) => {
        const r = reqs.get(rid);
        const at = (e) => (r.act.indexOf(e) < 0 ? Infinity : r.act.indexOf(e));
        const distinct = [...new Set(ex.filter(Boolean))].sort(
          (a, b) => at(a) - at(b),
        );
        return {
          doc: r.doc,
          code: r.code,
          n: r.n,
          excerpt: distinct.join("\n\n"),
        };
      })
      .sort((a, b) => collator.compare(a.code, b.code) || a.n - b.n);
  };
  const itemOf = (fid) => fid.split(">")[0];

  const entries = {};
  const home = new Map(); // bin → entry ids
  const also = new Map();
  const push = (m, k, v) =>
    m.has(k) ? m.get(k).includes(v) || m.get(k).push(v) : m.set(k, [v]);
  const AUD = {
    Crews: "Crews",
    Monitors: "Monitors",
    ComplianceStaff: "Compliance staff",
  };

  const orderedActions = [...actions].sort((a, b) =>
    a.id.localeCompare(b.id, "en", { numeric: true }),
  );
  orderedActions.forEach((a, i) => {
    const id = `act-${String(i + 1).padStart(3, "0")}`;
    entries[id] = {
      id,
      kind: "action",
      name: a.name,
      responsibleParty: party[a.id] ?? "",
      locators: locators(a.filingIds.map(itemOf)),
    };
    push(home, a.bin, id);
  });
  const orderedDrafts = [...mr.drafts].sort(
    (a, b) =>
      a.bin.localeCompare(b.bin) ||
      AUDIENCES.indexOf(a.audience) - AUDIENCES.indexOf(b.audience) ||
      a.id.localeCompare(b.id, "en", { numeric: true }),
  );
  orderedDrafts.forEach((d, i) => {
    const id = `obl-${String(i + 1).padStart(4, "0")}`;
    const its = d.filingIds.map(itemOf);
    entries[id] = {
      id,
      kind: "obligation",
      title: d.title,
      class: d.class,
      audience: AUD[d.audience] ?? "Crews",
      trigger: d.trigger ?? "",
      monitorSigns: d.monitorSigns,
      locators: locators(its),
    };
    push(home, d.bin, id);
    // "Also filed in": the non-home filings of its items (Obligation.AlsoFiledInAsync).
    for (const f of filings)
      if (!f.home && f.bin !== d.bin && its.includes(f.itemId))
        push(also, f.bin, id);
  });

  const reqLocator = (rid) => {
    const r = reqs.get(rid);
    return { doc: r.doc, code: r.code, n: r.n, excerpt: "" };
  };
  const out = {
    prompts: `${PROMPTS.propose[1]}, ${PROMPTS.extract[1]}, ${PROMPTS.file[1]}, ${PROMPTS.merge[1]}, ${PROMPTS["merge-actions"][1]}, ${PROMPTS.complete[1]} (Beacon origin/develop)`,
    run: new Date().toISOString().slice(0, 10),
    categories: index.categories.map((c) => ({
      id: c.id,
      name: c.name,
      subcategories: c.subcategories.map((s) => ({
        id: s.id,
        name: s.name,
        entryIds: home.get(s.id) ?? [],
        alsoIds: (also.get(s.id) ?? []).filter(
          (e) => !(home.get(s.id) ?? []).includes(e),
        ),
        evidence: s.evidence.map(reqLocator),
      })),
    })),
    entries,
    unfiled: noBin.map((n, i) => {
      const x = items.get(n.itemId);
      return {
        id: `unf-${String(i + 1).padStart(3, "0")}`,
        statement: x.statement,
        reason: n.reason,
        locators: locators([n.itemId]),
      };
    }),
    // Merge applies its merges as draft obligations; prod keeps no merge proposal for a person.
    merges: [],
  };
  writeFileSync(OUT, JSON.stringify(out, null, 1) + "\n");
  const subs = out.categories.reduce((n, c) => n + c.subcategories.length, 0);
  console.log(
    `index: ${out.categories.length} categories, ${subs} subcategories, ${orderedActions.length} actions, ${orderedDrafts.length} obligations, ${out.unfiled.length} unfiled → ${OUT}`,
  );
  const empty = out.categories.flatMap((c) =>
    c.subcategories
      .filter((s) => !s.entryIds.length)
      .map((s) => `${c.name} › ${s.name}`),
  );
  if (empty.length)
    console.log(
      `  bins with nothing filed home (${empty.length}): ${empty.join("; ")}`,
    );
}

// ── Dispatch ─────────────────────────────────────────────────────────────────

const STAGE = {
  propose,
  extract,
  file: fileStage,
  merge,
  "merge-actions": mergeActions,
  complete,
}[stage];
const batchFiles = () =>
  readdirSync(SD)
    .map((f) => /^batch-(\d+)\.json$/.exec(f))
    .filter(Boolean)
    .map((m) => Number(m[1]))
    .sort((a, b) => a - b);

if (cmd === "prepare") {
  mkdirSync(SD, { recursive: true });
  STAGE.prepare();
  writeCheck();
}

if (cmd === "check") {
  const n = Number(nArg);
  const bp = join(SD, `batch-${n}.json`);
  const op = join(SD, `out-${n}.json`);
  if (!existsSync(bp)) throw new Error(`no ${bp}`);
  const problems = [];
  let out;
  try {
    out = readJson(op);
  } catch (e) {
    problems.push(
      `out-${n}.json: ${existsSync(op) ? `not valid JSON (${e.message})` : "missing"}`,
    );
  }
  if (out) {
    const batch = readJson(bp);
    const ids = batch.map((c) => c.id);
    for (const k of Object.keys(out))
      if (!ids.includes(k))
        problems.push(`out-${n}.json: ${k} is not a call in batch-${n}.json`);
    for (const id of ids)
      if (!(id in out))
        problems.push(`out-${n}.json: no answer for call ${id}`);
    STAGE.check(
      batch.filter((c) => c.id in out),
      out,
      problems,
    );
  }
  if (problems.length) {
    console.log(
      `${problems.length} problem${problems.length === 1 ? "" : "s"} in ${stage} out-${n}.json:`,
    );
    for (const p of problems.slice(0, 60)) console.log(`  ${p}`);
    if (problems.length > 60)
      console.log(`  … and ${problems.length - 60} more`);
    process.exitCode = 1;
  } else console.log("OK");
}

if (cmd === "collect") {
  const nums = batchFiles();
  const batches = nums.map((n) => readJson(join(SD, `batch-${n}.json`)));
  const answers = {};
  const bad = [];
  for (const n of outFiles()) {
    const r = spawnSync(
      process.execPath,
      [SELF, stage, "check", DIR, String(n)],
      { encoding: "utf8" },
    );
    if (r.status !== 0) bad.push(`out-${n}.json:\n${r.stdout}`);
    Object.assign(answers, readJson(join(SD, `out-${n}.json`)));
  }
  const unanswered = nums.filter((n) => !existsSync(join(SD, `out-${n}.json`)));
  if (stage !== "merge" && unanswered.length)
    console.log(`  no out file for batch ${unanswered.join(", ")}`);
  if (bad.length) {
    console.log(
      `${stage} collect: answers that fail the check (fix and collect again, or set FORCE=1 to apply them as prod would):\n${bad.join("\n")}`,
    );
    if (!process.env.FORCE) process.exit(1);
  }
  STAGE.collect(answers, batches);
}
