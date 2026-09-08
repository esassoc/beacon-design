# Obligations — session checkpoint

**Written 2026-09-08. Owner: Kim Bordon.**

Read this first if you are resuming this work in a fresh session. It carries the
context that is **not** recoverable from the code: where the source material lives,
what the data actually contains, which decisions are settled and why, what was
tried and rejected, and what is still open. The code is on branch
`proto/obligations`.

---

## 1. What this is

Beacon tracks compliance through one entity (the **Action**) and one surface (a
three-column tracker). That works for plans, reports and submittals. It fails for
the larger half of what a permit demands — speed limits, buffers, work windows,
spill kits, daily inspections, take notices, training records. Those never close,
happen an unknown number of times, and have no deliverable.

The proposal adds a second record type, the **Obligation**: a standing duty in
effect while its conditions apply. The discriminator is **countability** — if the
instances can be listed up front it is an Action; if they depend on events nobody
can schedule it is an Obligation.

**Audience:** internal team. The prototypes are intended to become the spec for
several epics, the way `/prototypes/project-dashboard` became BCN-1039's.

---

## 2. Source material (not in this repo)

`C:\Users\kim.bordon\Desktop\obligations\`

| File | What it is |
|---|---|
| `actions-obligations-brief.md` | The proposal: two record types, four classes, three-axis registry, handoffs, the numbers |
| `actions-obligations-prototypes.md` | The five proposed surfaces. **Substantially superseded — see §4** |
| `actions-obligations-2026-09-02.html` | 1.15 MB specimen. Carries the real registry in a `<script id="registry-data">` block |

The brief's frontmatter references files on Andrew's Mac (`/Users/andrewlovseth/…`)
that are **not reachable**. Everything needed was extracted from the specimen.

---

## 3. What the data actually contains

Extracted by `node scripts/extract-obligations.mjs <specimen.html>` into
`src/data/obligations-registry.json`, and typed in `src/data/obligations.ts`.
The script **verifies the brief's counts and fails on a mismatch**.

**402 obligations.** Adhere 225, Monitor 103, Notify 50, Roster 24.
Subject axis 17 majors / 69 minors. Activity axis 7 groups / 34 activities.
Species axis 6 taxa / 35 species.

**Fields, with real coverage** — the pages render conditionally because the data
is uneven:

| Always (402/402) | Sometimes |
|---|---|
| `standard`, `condition` | `parameters` 232 (58%) |
| `subjects`, `activities`, `commitments` | `species` 224 (56%) |
| | `window` 50 (12%) — exactly the Notify class |
| | `installed_control` 46 (11%), `gate` 17 (4%) |

**Four fields the brief names that DO NOT EXIST in the data:** in-effect
conditions (phase, season, activity, location, weather, event), responsibility,
evidence source, scope. They are omitted from every page rather than invented.
**In-effect conditions matter most** — they are the predicate that decides whether
an obligation is live, and every awareness surface quietly depends on them.

### Findings worth not re-deriving

- **`condition` is the most under-used field in the registry.** All 402 rows carry
  a plain-language observable — *"Active work area unfenced or unflagged"*,
  *"Burrowing owl seen on or near site and not reported"*. It **is** the monitoring
  form, already written. Nothing in the source docs surfaces it. It also encodes
  *trigger + failure* in one sentence, so triggers may be derivable from it rather
  than authored — worth a spike.
- **Commitment titles and source documents ARE available.** `src/data/dcp-commitments.json`
  (already in the repo) has `code`, `title`, `category`, `sourceDoc`, and resolves
  **1138 of 1270 references (90%)**. I twice told Kim this would be inference; that
  was wrong both times.
- **Four real source documents:** ITP 177, EIR 129, ITP Amendment 36, USFWS BiOp 33.
- **Normalization is visible in the data.** AMM-14 unpacks to 27 obligations, EC-14
  to 25 — direct confirmation of the brief's "one BMP commitment unpacks to 25 to 33
  duties". 146 obligations are stated by exactly one commitment; 92 by five or more.
- **Priority signals, both computable:** 26 of 50 Notify rows have a window of one
  day or less; 20 rows mention take, injury, mortality, strike or entrapment; 4 have
  both.
- **The burrowing owl demo case is real:** 30 obligations mention it, spanning all
  four classes, driven by COA 11.109 BUOW Avoidance, COA 11.117 BUOW Exclusion
  Activities, COA 11.116 BUOW Monitoring.
- **`commitmentsReferenced` is 312**, against the brief's stated 391 total — so ~79
  commitments yield no obligation. The brief's "1,806 stated duties" counts *atomic
  requirements*, not commitments, so it is **not comparable** to the registry's 1,270
  commitment references (3.16 per obligation).
- **"600 obligations"** appears in meeting notes and matches nothing computable.

---

## 4. Settled decisions — these OVERRIDE the source docs

From the team discussions of **2026-09-03** and **2026-09-06**. The prototypes doc
is stale on all of these.

1. **No obligation status model.** The brief's *Not in effect / No evidence / In
   compliance / Out of compliance* is dropped. Nothing renders a compliance verdict.
   The specimen agrees — its registry section contains zero status vocabulary.
2. **No standalone obligations tracker.** That surface is not being built.
3. **The registry is not a page** — it lives inside the setup wizard.
4. **The data catalog is deliberately flat** ("a filing cabinet, not a meaningful
   view"). The registry is the hierarchical view; the catalog is not.
5. **Approval is generic, not per-obligation.** Corrects the prototypes doc's
   "review verbs per obligation".
6. **"Stated duty" = atomic requirement.** Neither *duty* nor *atomic* is a real
   Beacon term; `Requirement` is (with `ActionRequirement`, `RequirementExtractionStatus`).
7. **The dashboard is an INBOX**, threaded like mail — see §5.
8. **Obligation scope rows are an open question, not a decision.** Built as example
   data only, and deliberately **not** called "implementations": an Action's
   implementation is a trackable instance with status, owner, due date and completion
   (that is `ActionImplementation` in prod, ~15 columns); an obligation's instances are
   not enumerable, so a row is an applicability assertion plus an evidence anchor —
   about 4 of those columns survive.

### Prod facts checked, worth not re-checking

- **There is no `Task` entity in Beacon.** Closest analogue is `ActionImplementation`.
  Notifications have a full stack (`ActionNotificationConfiguration`/`Log`/`Recipient`/`Type`);
  tasks have nothing.
- **There is no setup wizard page in this repo.** `WIZARD_HREF` is the placeholder
  `'#project-setup'` and every step href is a `#setup-*` fragment. `BcnSetupWizardCard`
  only *advertises* four steps. Step 5 is a build-from-zero surface, not an edit.
- `BcnModules` hardcodes `repeat(3, …)` and keys icons off
  `ActionType = 'tracking' | 'monitoring' | 'reporting'`. A fourth module means widening
  a union used in five places.
- `CommitmentCategoryMap` exists in prod — the Fulcrum mapping the brief says the
  registry could replace or generate.

---

## 5. What was built

Branch `proto/obligations`, four commits, **unpushed**. 617 pages, build green,
`handoff:check — ok. 51 routes, 18 curated`.

| Commit | What |
|---|---|
| `d690bfd0` | Data catalog — list + 402 detail routes |
| `28ea04a8` | Regenerate all handoff bundles against Astro 7 + current ecology tokens |
| `93fd580b` | Rebuild the detail page as an action sibling |
| `e1c19d32` | The Obligations Inbox |
| `bb8da013` | Make the inbox navigable |

### Pages

- **`/prototypes/data-catalog-obligations`** — the flat 402-row grid. Composes the
  extracted grid kit (`mountBeaconGrid`, `beaconTheme`, `linkRenderer`,
  `BcnGridChrome`, `BcnGridFooter`). **No status column**, on two independent grounds.
- **`/prototypes/data-catalog-obligation/[id]`** — 402 static routes, built as the
  sibling of `data-catalog-action.astro`. Nested subjects (major→minors), activities
  as a bulleted "Construction activities" list, commitments with real titles grouped
  by source document, evidence box, "In force at" scope table.
- **`/prototypes/obligations-inbox`** — the awareness surface. **Trigger is the
  parent, obligations are its children.** 8 triggers in front of 180 distinct
  obligations. Two-pane frame, date buckets, Open/Seen pivot, per-notice filing, live
  counts, keyboard nav (↑↓/jk move, `e` marks seen).

### Components

`BcnObligationGrid`, `BcnObligationHeader`, `BcnObligationFacets`,
`BcnObligationScope`, `BcnInboxQueue`, `BcnInboxThread`, `BcnInboxWorkspace`,
`inbox.ts`.

### Data modules

`src/data/obligations.ts` (types, commitment join, subject tree, scope),
`src/data/obligation-triggers.ts` (the trigger model and derived priority),
`scripts/extract-obligations.mjs`.

### The inbox's priority model

Trigger urgency inherits the strongest signal among the obligations it raised, and
**decays with the age of the event** — a 24-hour notice on an owl seen 40 minutes
ago is open; the same duty on a season that opened last week is background. Without
the decay **all eight triggers ranked "now" and the signal carried nothing**.

Two rules inherited from the **evidence inbox** (`evidence-triage.astro`,
`BcnTriageQueue/Review/Workspace`, `triage.ts`) rather than re-litigated:

- **The row reports, it does not act.** No dismiss on the queue — a one-click clear
  off a list closes things without reading why they were raised. Verbs live in the thread.
- **Every panel renders at build time.** Astro is compile-time; a panel assembled from
  a template literal bypasses the design system and no gate can see it. The controller
  only reveals, hides and re-labels.

---

## 6. Bugs found and fixed — do not reintroduce

1. **`esa-badge` must be relabelled through its inner `.esa-badge__text`.** Writing to
   the badge root replaces that span with a bare text node: the label still reads
   correctly, so the bug is invisible, but the lego's structure is gone.
2. **The `hidden` attribute loses to an author `display` rule.** Anything with an
   explicit display toggled via `hidden` needs `:not([hidden])` on that rule. And
   **`esa-button` cannot be hidden at all** — the lego declares its own display, so
   wrap it in an element you own.
3. **A keydown handler must not call `.closest()` on `event.target`** — that is the
   `document` when nothing is focused, and it throws, silently killing every shortcut.
4. **Do not exclude a segmented control from a global key handler.** Focus stays inside
   it after a click, which kills navigation permanently. Segmented controls use
   Left/Right, so only text entry needs excluding.
5. **A `data-w="3"` widget must not be a direct child of a one-column grid** — `grid-column:
   span 3` forces three implicit columns and wrecks the siblings' layout.
6. **A deterministic pick must use stride 1.** A stride of 7 over a 7-entry fixture
   picked the same component on every row.
7. **`BcnDetailLineage` cannot render obligation lineage** — it draws a strictly linear
   `<ol>`, and an obligation's ancestry fans out (14 commitments on the exemplar).
8. **Astro puts the scope attribute BETWEEN the class and any pseudo-class**, and a
   component's CSS may land in an external bundle rather than inline. Substring greps
   against built HTML produce false "missing CSS" alarms — I raised three.
9. **`npx astro dev` can serve stale component CSS for days.** Restart it before
   diagnosing a rendering fault.

---

## 7. Tried and rejected — do not re-propose

- **Five single-axis dashboards** (transition feed, horizon, activity checklist,
  roster, place) — each organised by one in-effect condition. Rejected: a dashboard
  needs a slice of all of them.
- **Five compositions** of those slices — rejected as still arranging a registry.
- **Class as the module row** (mapping Adhere/Monitor/Notify/Roster onto `BcnModules`).
  Ports beautifully, but class is how the *system* thinks; a monitor thinks in subjects
  and places.
- **Grouping a watch list by subject.** Scoped to one stretch it still yields 15 majors
  and 46 minors, so it never caps. Grouping by *what you do about it* is always four
  groups.
- **"One at a time"** (a single hero card) — counterintuitive for a dashboard; it hides
  the shape of the day.
- **"Exposure" as a theme** — invented, not in the docs. **Coverage** is the brief's own
  named Rule and is the correct frame.
- **Three lanes of hand-off relationship types** — a taxonomy in a new costume. The
  mechanism (approval → releases work) is what matters.

Artifacts for these explorations exist and are still viewable, but they are superseded
thinking, not proposals.

---

## 8. Open questions

1. **Is a Trigger an entity or a view?** If observations, season boundaries and state
   changes are three sources feeding one inbox, it is a view. If it has an id you can
   link to and comment on, it is an entity — a data-model decision.
2. **Does a thread resolve as a unit?** The owl's Notify has a 24-hour clock; its Adhere
   buffer runs for weeks. Probably the thread is awareness and each child clears
   separately, but this is the crux of the inbox metaphor.
3. **Is dismissal per-user or per-project?** Per-user is kinder; per-project is auditable
   and can be pointed at as evidence.
4. **What brings a dismissed thing back?** A dismissed notice that goes unfiled should
   return, or dismissal becomes a way to lose things.
5. **Do obligations get scope rows?** See §4.8.
6. **What does "approve generically" mean concretely** — whole tree, per major category,
   or per axis? My reasoning (§9) is a proposal, not a confirmed answer.
7. **Is Obligations a tab beside Actions**, or its own surface?
8. **Split Notify in the data model?** Reactive (41) and advance (9) notices are one class
   today but behave nothing alike — one is an alert, the other a calendar entry. Both
   prototypes separate them by parsing the window text, which is not durable.

---

## 9. Where things stand / next steps

**Done:** data catalog (list + detail), obligations inbox (functional).

**Next, in order:**

1. **Setup wizard page 5.** Blocked only on confirming the "approve generically"
   reasoning: the user is not reviewing *correctness* (the registry is authoritative and
   classes are system-owned), they are deciding **applicability**, which is inherited from
   the work. So step 5 is an **activity checklist that yields a filtered registry, plus an
   exception queue** — input axis is Activity ("which of these 34 activities does this
   project do?" is answerable in minutes), approve top-down where the answer is uniform,
   and spend individual review only on what the data flags: the 17 gated rows, the 232
   with parameters, and any uncovered requirement. Build as one standalone page — there is
   no wizard shell, and step 5 would otherwise need a fifth entity colour (a hub token
   decision).
2. **Dashboard blocks** on project/component dashboards — needs the `BcnModules` refactor.
3. **Actions tracker update** — "releases obligations" and "created by".

**Also outstanding:**

- `docs/actions-obligations-prototypes.md:17` is stale: it says three prototypes need
  `HANDOFF_SKIP_GUIDANCE=1`, but commit `6beca7c2` added them to the baseline ratchet.
- The detail page's **rail is taller than its main column** on records with many
  commitments — the cost of showing titles instead of codes. Fix with a disclosure if it
  bothers anyone; do not revert to codes.
- `package-lock.json` is dirty from the Astro 5 → 7.2.6 bump; left uncommitted deliberately.
- **Nothing is pushed.** Four commits sit on `proto/obligations`.

### Environment gotchas

- `npm run dev` serves at **port 4330**, base `/` in dev and `/beacon-design/` in prod
  (`withBase()`).
- `@esa/tokens` `dist/` is gitignored and its postinstall is blocked by `allowScripts` —
  after a fresh install in the sibling `ecology` checkout, run
  `node packages/tokens/build.js` there or the spoke build fails on
  `@esa/tokens/a11y-styles.js`.
- Beacon prod is at `C:\git\sitkatech\Beacon`; local `develop` is ~370 commits stale, so
  read prod with `git show origin/develop:<path>`.
