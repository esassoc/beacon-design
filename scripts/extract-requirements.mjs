// Requirements for the Setup Wizard's step 2, extracted the way Beacon extracts them:
// Beacon's own prompt (ExtractRequirementsFromCommitment v6, RequirementExtractionService)
// over each commitment's text, answered in its own output shape (ExtractRequirementsAIResponseDto).
//
// Prod sends the prompt to gpt-5.2 with a strict JSON schema. This machine has no API key,
// so the prompt is answered by Claude agents in batches: `prepare` renders the prompt's
// inputs and the batches, the agents write one answer file per batch, and `collect`
// checks every answer (each ApplicableCommitmentText must be a literal substring, as prod
// requires for highlighting) and writes the fixture.
//
//   node scripts/extract-requirements.mjs prepare <dir>    # → <dir>/template.md, <dir>/batch-N.json
//   (agents) <dir>/batch-N.json → <dir>/out-N.json          # { [code]: { Requirements: [...] } }
//   node scripts/extract-requirements.mjs collect <dir>    # → src/data/sw3-requirements.json
//
// The prompt is read from the Beacon checkout (origin/develop) at run time and is not copied
// into this repo, whose site is public.
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { homedir } from 'node:os';

const root = (p) => fileURLToPath(new URL(`../${p}`, import.meta.url));
const [, , cmd, dir] = process.argv;
if (!cmd || !dir) throw new Error('usage: extract-requirements.mjs prepare|collect <dir>');

const BEACON = process.env.BEACON_REPO ?? join(homedir(), 'Dev/Beacon');
const PROMPT_PATH = 'Beacon.API/Controllers/AI/Prompts/ExtractRequirementsFromCommitment_v6.md';
const OUT = root('src/data/sw3-requirements.json');

// ── The project, as the prompt sees it ────────────────────────────────────────

// Beacon's lookup tables (RequirementTypeDto, FrequencyDto) and the prototype's phases.
const PHASES = ['Implementation Planning', 'Pre-Construction', 'Construction', 'Post-Construction', 'Operations', 'Maintenance'];
const TYPES = [
  [1, 'Analysis', 'Analysis', false],
  [2, 'Survey', 'Survey', true],
  [3, 'Monitoring', 'Monitoring', true],
  [4, 'AvoidanceAndBMPs', 'Avoidance & BMPs', true],
  [5, 'RestorationAndMitigation', 'Restoration & Mitigation', true],
  [6, 'Plan', 'Plan', false],
  [7, 'Design', 'Design', false],
  [8, 'Reporting', 'Reporting', false],
  [9, 'ApprovalAndConsultation', 'Approval & Consultation', false],
  [10, 'Financial', 'Financial', false],
  [11, 'TrainingAndEducation', 'Training & Education', false],
  [12, 'Other', 'Other', false],
];
const SCOPES = [
  { ScopeID: '6f0c2b1e-3a52-4d7e-9a51-0c1b7f2d8e01', Name: 'Project' },
  { ScopeID: '6f0c2b1e-3a52-4d7e-9a51-0c1b7f2d8e02', Name: 'Component' },
];
const FREQUENCIES = [
  [1, 'AsNeeded', 'As Needed'],
  [2, 'Onetime', 'One-time'],
  [3, 'Recurring', 'Recurring'],
  [4, 'Ongoing', 'Ongoing'],
];
// Enrolled on the project before setup: its covered and named species and the construction
// activities. Seasons and milestones are empty, as on a first run: the model names them as
// the text does, and the review folds the variants.
const SPECIES = [
  ['Giant Garter Snake', 'Thamnophis gigas', 'GGS'],
  ['California Tiger Salamander', 'Ambystoma californiense', 'CTS'],
  ['Crotch Bumble Bee', 'Bombus crotchii', 'CBB'],
  ['Swainson’s Hawk', 'Buteo swainsoni', 'SWHA'],
  ['Tricolored Blackbird', 'Agelaius tricolor', 'TRBL'],
  ['Delta Smelt', 'Hypomesus transpacificus', null],
  ['Longfin Smelt', 'Spirinchus thaleichthys', null],
  ['Winter-run Chinook Salmon', 'Oncorhynchus tshawytscha', null],
  ['Spring-run Chinook Salmon', 'Oncorhynchus tshawytscha', null],
  ['White Sturgeon', 'Acipenser transmontanus', null],
  ['Mason’s Lilaeopsis', 'Lilaeopsis masonii', null],
];
const ACTIVITIES = [
  'Access road and route construction', 'Barge and vessel operations', 'Burrow and roost exclusion', 'Compliance monitoring and inspections',
  'Concrete work and batch plants', 'Dewatering and fish isolation', 'Excavation and trenching', 'Exclusion fencing and flagging installation',
  'Facility operations and maintenance', 'Fertilizer application', 'Geotechnical investigations and drilling', 'Ground disturbance and grading',
  'Hauling and deliveries', 'Hazardous materials handling and storage', 'Heavy equipment operation', 'Helicopter operations',
  'In-water and in-channel work', 'Night work', 'Pesticide and herbicide application', 'Pile driving', 'Pipe and culvert installation',
  'Restoration and planting', 'Rodenticide and poison use', 'Site clearing and vegetation removal', 'Staging and laydown',
  'Stockpiling and spoils handling', 'Transmission and power line work', 'Vehicle travel on site', 'Waste and trash handling',
  'Water diversions and intake operations', 'Wildlife capture, handling and relocation',
];

// ── The commitments ──────────────────────────────────────────────────────────

const commitments = () => {
  const itp = JSON.parse(readFileSync(root('src/data/sw3-anchors.json'), 'utf8'));
  const mmrp = JSON.parse(readFileSync(root('src/data/sw3-mmrp-anchors.json'), 'utf8'));
  return [
    ...itp.commitments.map((c) => ({ doc: 'itp', code: c.code, title: c.title, text: c.text })),
    ...mmrp.rows.map((r) => ({ doc: 'mmrp', code: r.code, title: r.title, text: r.requirements.map((q) => q.text).join('\n') })),
  ];
};

if (cmd === 'prepare') {
  mkdirSync(dir, { recursive: true });
  const prompt = execFileSync('git', ['-C', BEACON, 'show', `origin/develop:${PROMPT_PATH}`]).toString();
  const json = (v) => JSON.stringify(v);
  const filled = prompt
    .replace('{{ExistingRequirementsJson}}', '[]')
    .replace('{{PhasesJson}}', json(PHASES.map((Name, i) => ({ PhaseID: i + 1, Name }))))
    .replace('{{RequirementTypesJson}}', json(TYPES.map(([RequirementTypeID, Name, DisplayName, IsFieldType]) => ({ RequirementTypeID, Name, DisplayName, IsFieldType }))))
    .replace('{{ScopesJson}}', json(SCOPES))
    .replace('{{FrequenciesJson}}', json(FREQUENCIES.map(([FrequencyID, , DisplayName]) => ({ FrequencyID, DisplayName }))))
    .replace('{{ConstructionActivitiesJson}}', json(ACTIVITIES))
    .replace('{{SpeciesJson}}', json(SPECIES.map(([CommonName, ScientificName, SpeciesCode]) => ({ CommonName, ScientificName, SpeciesCode }))))
    .replace('{{GloballyKnownSpeciesJson}}', '[]')
    .replace('{{SeasonsJson}}', '[]')
    .replace('{{MilestonesJson}}', '[]');
  writeFileSync(join(dir, 'template.md'), filled);

  // Batches of about the same amount of text, never splitting a document's run.
  const all = commitments();
  const TARGET = 95_000;
  const batches = [];
  let cur = [];
  let size = 0;
  for (const c of all) {
    if (cur.length && (size + c.text.length > TARGET || cur[0].doc !== c.doc)) {
      batches.push(cur);
      cur = [];
      size = 0;
    }
    cur.push(c);
    size += c.text.length;
  }
  if (cur.length) batches.push(cur);
  batches.forEach((b, i) => writeFileSync(join(dir, `batch-${i + 1}.json`), JSON.stringify(b, null, 1)));
  console.log(`prepare: ${all.length} commitments in ${batches.length} batches → ${dir}`);
  for (const [i, b] of batches.entries()) console.log(`  batch-${i + 1}: ${b[0].doc} ${b.length} commitments, ${b.reduce((n, c) => n + c.text.length, 0)} chars`);
}

if (cmd === 'collect') {
  const all = commitments();
  const answers = {};
  for (const f of readdirSync(dir).filter((x) => /^out-\d+\.json$/.test(x))) Object.assign(answers, JSON.parse(readFileSync(join(dir, f), 'utf8')));

  const typeName = new Map(TYPES.map(([id, name]) => [id, name]));
  const freqName = new Map(FREQUENCIES.map(([id, name]) => [id, name]));
  const scopeName = new Map(SCOPES.map((s) => [s.ScopeID, s.Name]));
  // Whitespace may differ where the text layer broke a line; anything else is a miss.
  const locate = (text, quote) => {
    const i = text.indexOf(quote);
    if (i >= 0) return [i, i + quote.length];
    const esc = quote.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+');
    const m = new RegExp(esc).exec(text);
    return m ? [m.index, m.index + m[0].length] : null;
  };

  const out = { itp: {}, mmrp: {} };
  const missing = [];
  const misses = [];
  let n = 0;
  for (const c of all) {
    const a = answers[`${c.doc}|${c.code}`] ?? answers[c.code];
    if (!a) {
      missing.push(`${c.doc} ${c.code}`);
      continue;
    }
    out[c.doc][c.code] = a.Requirements.map((r, i) => {
      n++;
      const at = locate(c.text, r.ApplicableCommitmentText);
      if (!at) misses.push(`${c.code} #${i + 1} ${r.Name}`);
      return {
        name: r.Name,
        quote: r.ApplicableCommitmentText,
        start: at?.[0] ?? -1,
        end: at?.[1] ?? -1,
        phases: r.PhaseNames.filter((p) => PHASES.includes(p)),
        type: typeName.get(Number(r.RequirementTypeID)) ?? 'Other',
        scope: scopeName.get(r.ScopeID) ?? 'Project',
        frequency: r.FrequencyID == null ? null : (freqName.get(r.FrequencyID) ?? null),
        activities: r.WorkActivityNames,
        species: r.SpeciesNames,
        seasons: r.Seasons.map((s) => (s.StartMonth ? s : { Name: s.Name })),
        milestones: r.MilestoneNames,
        related: r.RelatedRequirementIndexes,
        rationale: r.Rationale,
      };
    });
  }
  const counts = Object.values(out).flatMap((d) => Object.values(d).map((rs) => rs.length));
  const hist = {};
  for (const k of counts) hist[k] = (hist[k] ?? 0) + 1;
  writeFileSync(
    OUT,
    JSON.stringify({ prompt: 'ExtractRequirementsFromCommitment v6 (Beacon origin/develop)', run: new Date().toISOString().slice(0, 10), docs: out }, null, 1) + '\n',
  );
  console.log(`collect: ${n} requirements over ${counts.length} commitments → ${OUT}`);
  console.log(`  per commitment: ${JSON.stringify(hist)}`);
  if (missing.length) console.log(`  no answer (${missing.length}): ${missing.slice(0, 20).join(', ')}`);
  if (misses.length) console.log(`  quote not in the text (${misses.length}):\n    ${misses.join('\n    ')}`);
  if (!existsSync(OUT)) process.exitCode = 1;
}
