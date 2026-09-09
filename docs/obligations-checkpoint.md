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

---

## 10. Session addendum — 2026-09-08 (later)

**Status change: §9's step-5 mechanism is falsified. The reasoning behind it is not.**
Do not build step 5 from §9 as written. Nothing was built this session; no code changed.

### What still stands from §9

The premise — *the user is not reviewing correctness, they are deciding
**applicability**, which is inherited from the work* — survives, and is stronger than
§9 claimed. `ComponentCommitment.IsApplicable` is the only applicability bit Beacon
has, and `BcnSetupWorkspace` already implements this exact job for
commitments-on-components (bulk + one-at-a-time, with a preview of what a decision
will *do*). Step 5 is that workspace's sibling. The Model A vs. Model B argument
settled on 2026-08-14 does not need re-running.

### What broke it — construction activities are not a menu

**`ProjectConstructionActivity` is per-project and hand-authored.** Free-text `Name`
+ `Description`, `SortOrder`, drag to reorder, placeholder *"Ex. Inspection"* — see
`Beacon.Web/src/app/pages/project-construction-activities/`. Each project writes its
own list. There is **no fixed taxonomy to tick**, so §9's input question — *"which of
these 34 activities does this project do?"* — cannot be asked.

**The 34 activity slugs in `obligations-registry.json` are extraction artifacts from
the specimen, not app entities.** They were being treated as if they were the real
thing. Any activity-led surface needs a fixture mapping them onto a plausible
project-authored list first.

**By step 5 the activity list already exists** — authoring it is its own earlier setup
page. So step 5 does not *collect* activities; at most it *uses* them.

### The link §9 wanted does exist, one level over

§4's "commitments are not associated to construction activities" is true and remains
true. But:

| Join table | What it means |
|---|---|
| `RequirementConstructionActivity` | **Requirements ↔ activities.** Populated from staging in BCN-1052 (Kim's own migration) |
| `ActionProjectConstructionActivity` | Actions ↔ activities — an obligation↔activity link would be this pattern's sibling |
| `ProjectSeasonProjectConstructionActivity` | Activities ↔ **seasons** — an in-effect condition §3 lists as existing nowhere. It exists in prod, just not in the specimen |

That last row is worth a second look independently of step 5: §3 names in-effect
conditions as the most important missing field, and season↔activity is one of them,
already modelled.

### Measurements taken (don't re-run)

Against the registry's own slugs — so these describe the *extraction*, not the app,
but the shape holds for any mapping onto it:

- Activity tags are broad and overlapping: **2.2 per obligation** (89 carry one, 210
  two, 100 three, 3 four). Disjunctive semantics, so an obligation survives if *any*
  of its activities happen.
- **Deselecting an activity mostly removes nothing.** Zero exclusive reach for
  in-water-work (30 tagged), excavation (17), pile-driving (16), demolition (8),
  helicopter (1). Best single checkbox is `diversions` at 14. `ground-disturbance`
  drops 6 of the 96 it touches.
- Killing all 11 marine/aerial/hazmat activities drops **34 of 402**. A pure-bio
  project (4 activities) still keeps **200**.
- **Conclusion: activity groups the registry, it does not narrow it.** True whatever
  the mapping.

Leverage on the other axes, for comparison:

- **Commitment cascades hard** — AMM-14 → 27 obligations, EC-14 → 25, CM 6.3.2.6 → 24.
  Top 20 commitments reach 123 obligations; **top 50 reach 202** (half the registry).
  78 commitments yield exactly one obligation — the tail nobody would review by hand.
- **Species eliminates cleanly but partially** — 35 distinct, 87 obligations tied to
  exactly one, so "no burrowing owl" genuinely removes rows. But **178 obligations
  carry no species at all** and can never be addressed this way.

### Also corrected

- §9's exception queue is mis-sized: *"the 17 gated rows, the 232 with parameters"* —
  **232 is 58% of the registry**, which is not an exception queue. The 17 gated rows
  are a real exception set; the parameters count needs a different rule or dropping.
- §5 says four commits; there are **five** under the checkpoint commit (`d690bfd0`,
  `28ea04a8`, `93fd580b`, `e1c19d32`, `bb8da013`), plus `9771a0a0` for the checkpoint
  itself. Still unpushed.

### The open question — ANSWERED, and step 5 is built

**Subject is the spine** (Kim, 2026-09-08). 17 majors over 69 minors, none bigger than
74 rows — the only grouping that fits in a person's head. Activity was ruled out on the
two grounds above; commitment is already step 2's job.

Kim also settled a point §4.3 had stated too strongly: **a full-registry page IS expected
eventually.** It just isn't what step 5 is. When it lands it should reuse
`BcnRegistryTree` without the confirm layer.

**Built and verified** (`/prototypes/setup-obligations`, 618 pages, build green,
`handoff:check — ok. 52 routes, 19 curated`):

| File | What |
|---|---|
| `src/data/obligation-registry.ts` | The tree — majors → minors → rows, with the measurements in its header |
| `BcnRegistryTree.astro` | **The registry tree — ONE component, two modes** (`review` / `browse`) |
| `registry-tree.ts` | Its controller — selection, three approval scopes, expand/collapse |
| `BcnRegistryProgress.astro` | Lead band: approved / not applicable / decided + the 613-vs-402 line |
| `BcnRegistryWorkspace/Areas/Area.astro` + `registry-review.ts` | The two-pane **alternative**, kept |
| `src/data/handoff/setup-obligations.mjs` | Curated handoff spec, 2 sections |

**The model that came out of it:**

- **Everything starts included.** The registry is authoritative; the job is finding what
  does NOT apply. Undecided-by-default would be 402 empty checkboxes calling itself a queue.
- **Confirming an area is the unit of work** — 17 decisions, and confirming is what records
  that a human looked.
- **The decision is on the DUTY, never the placement.** Verified in the browser: unchecking
  2-094 under Agency reporting also unchecks it under Mitigation and restoration, drops both
  confirm buttons by one, and moves the headline by exactly one.
- **Changing an area un-confirms it** — the person confirmed a set, and it is no longer
  that set.

**Three pages, one tree component.** `BcnRegistryTree` takes a `mode`:

| Route | Mode | What it is |
|---|---|---|
| `/prototypes/setup-obligations` | `review` | **Step 5.** Selectors, bulk verbs, per-area and registry-wide approval |
| `/prototypes/obligations-registry` | `browse` | The read-only registry — same tree, same records, nothing to decide |
| `/prototypes/setup-obligations-panes` | — | The two-pane alternative look, kept for comparison |

**Selection is a selection, not a decision** (Kim, 2026-09-08 — "configurable to have the
functionality of selecting all or none or multiple obligations, and approving them similar
to the other approval processes"). That is prod's model and `BcnSetupWorkspace`'s: a duty
is **pending** until somebody acts, the checkbox marks it for a bulk act, and **Approve** /
**Not applicable** are the acts. An earlier pass made the checkbox itself mean "applies",
which left select-all with nothing to mean.

Three approval scopes, mirroring prod's `Approve all (N)`: **the selection**, **one subject
area**, **the whole registry**. The registry-wide button hides while a selection is live so
the toolbar never offers two competing approvals. **Select-all takes what is visible** — a
control that reaches into a collapsed branch is a trap — so collapsing recomputes the
toolbar (`toggle` does not bubble; listen in capture).

Verified in the browser: with everything collapsed select-all takes 0; opening one heading
takes exactly its 16; approving those 16 paints **34** row badges (they are filed twice) but
moves the figure by **16**.

**The view went through two wrong passes before landing. Do not repeat either.**

1. **Card-per-area with three stacked lines per duty.** At 402 rows that is a wall.
2. **A copy of the specimen's own HTML** — a three-level `<details>` tree with hand-rolled
   carets, hand-rolled disclosure summaries and a hand-rolled definition-list grid. Kim's
   call (2026-09-08): *"the styling on this looks broken and looks very unaligned with our
   established UI patterns… make sure we're refraining from doing custom rolls where UI
   primitives and patterns exist."* Correct. **`actions-obligations-2026-09-02.html` is a
   CONTENT source, not a UI pattern source.** Take its structure — subject area → heading →
   duty, compact rows, detail on demand — and express it in the design system.

**What it is now: prod's setup-step shape, ported.** Every step of Beacon's project setup
renders `setup-wizard-sidebar` beside a main pane (`project-setup-layout`); the sidebar
picks the record you work through and the main pane does the step's work on it. Source
Documents picks a document, Commitments picks a commitment, Requirements picks a
commitment — **Obligations picks a subject area.** The main pane follows
`commitments-step` / `requirements-step`: a header for the selected record (title + counts
line) over a list of its children.

In the spoke that makes it the **third instance of an existing frame**, not a new one —
`BcnRegistryWorkspace` is the direct sibling of `BcnInboxWorkspace` and
`BcnTriageWorkspace`, and the area rows use `BcnInboxQueue`'s row anatomy.

**Everything is composed, nothing rebuilt:** `esa-collapsible` for each heading *and* each
duty's Details, `BcnKeyValue` for every field in the record, `BcnCommitmentBadge` for
commitment codes, `esa-checkbox` / `esa-badge` / `esa-button`, and the `.sidebar` layout
primitive for the two-pane geometry. What remains as CSS is composition glue only.

Prod files worth not re-finding: `Beacon.Web/src/app/pages/project-setup/` (the whole
flow) and `…/shared/components/project-setup/setup-wizard-sidebar/` (the generic
config-driven sidebar, which already does parent/child expansion).

**§9's "exception queue" is dead and should not come back.** Neither flag is a decision:
`gate` (17) is a dependency on an approved action, `parameters` (232) is a source conflict.
Both are shown in the duty's opened record; neither is asked about. There is no natural exception queue in
this data.

### Still open after this

- §8.6 — what "approve generically" means was answered *for this surface* (per subject
  area), but not for the data model. Nothing persists yet.
- Whether an area confirm should also be undoable directly, rather than only by changing a
  row inside it.
- The 232 contested rows need a home — resolving a source conflict is real work with no
  surface. Not step 5's job.

**Kim raised a possible pivot earlier in the session, then chose to proceed with this. The
work is live.**

---

## 11. Session addendum — 2026-09-09

Recovered after the previous session exited unexpectedly. Two decisions existed only in
conversation and are recorded here before they are lost again. **Nothing was rebuilt** —
§10's work is intact and is now committed.

### The inbox is renamed: Obligations Inbox → the Obligation Tracking page

Kim, 2026-09-09. The awareness surface is not a mail metaphor with a name borrowed from
one; it is where obligations are tracked. **The rename is not yet applied anywhere** — as
of this writing "Obligations Inbox" is still the page title, the route
(`/prototypes/obligations-inbox`), the breadcrumb (`Tracking › Obligations Inbox`), the
handoff spec (`src/data/handoff/obligations-inbox.mjs`), and the component family
(`BcnInboxQueue` / `BcnInboxThread` / `BcnInboxWorkspace`, `inbox.ts`,
`obligation-triggers.ts`).

**Do not apply the rename as a find-and-replace yet.** §12 below reshapes that surface,
and renaming the components before their shape is settled just churns the same files
twice.

### The registry's second home is a SECTION, not a page

§10 built `BcnRegistryTree` as one component with two modes, which is correct and is what
Kim asked for. But it homed `mode="browse"` on a standalone page
(`/prototypes/obligations-registry`), framed as proof the component is configurable.

**The real second consumer is a read-only section on the Obligation Tracking page.** The
component and both modes transfer unchanged — this is a re-homing, not a rebuild. The two
consumers are therefore:

| Consumer | Mode | Approval layer |
|---|---|---|
| Project setup step 5 | `review` | Yes — selection, per-area and registry-wide, appropriate to that work process |
| Obligation Tracking page (a section) | `browse` | None — read-only |

Whether the standalone `/prototypes/obligations-registry` route survives as its own page is
open. §10 recorded that a full-registry page is expected eventually; it may simply be that
page, or it may collapse into the tracking-page section.

### Committed this session

The whole of §10's build was untracked and six commits sat unpushed. Now committed on
`proto/obligations`: the registry components and their three pages, `obligation-registry.ts`,
the three handoff bundles, the `prototypes.ts` entries, §10, this section, and
`docs/obligation-entity-definition.md` (see §12). `package-lock.json` is still dirty from
the Astro 5 → 7.2.6 bump and is still deliberately uncommitted. **Still nothing pushed.**

### The entity work is upstream of the tracking page — sequence it first

`docs/obligation-entity-definition.md` was written at the very end of the previous session
(16:54, ~3 hours after the step-5 build) and is referenced by nothing. It is the thread to
pick up next, and it is **upstream** of the tracking-page work rather than parallel to it:
it argues the Seen pivot and filing verbs should go, that Trigger is a view over the
existing `Observation` entity rather than something new, and that the surface should carry
four views (All / Important / To-do / Standing). The registry section should slot into
whatever shape that produces, so harden the entity before reshaping the page.

## 12. Session addendum — 2026-09-09 (entity deliberation)

The entity thread from §11 was worked at length. **All of it is recorded in the
`# Revision — 2026-09-09` section of `docs/obligation-entity-definition.md`** — read that,
not this summary. Nothing was built.

Headlines:

- **Three prod claims verified**, and the observation-to-commitment link turns out to be
  shipped already (`ObservationCommitment` + explicit Fulcrum links + the BCN-913 species
  bridge), including the parent/children shape the inbox thought it invented.
- **The brief is wrong about Action status.** Prod is Draft/Published on the Action and
  NotStarted/InProgress/Completed on the *instance*. So Actions have no status either — the
  divergence is that an Action spawns enumerable instances and an Obligation spawns none.
- **`ActionSchedule` already tried to be an Obligation.** Its Ongoing (2 columns) and
  AsNeeded (1 prose column) modes are the state-based and event-based obligation, and are
  exactly where the schema gave up. An Obligation is an Action with the schedule and
  implementation satellites replaced.
- **The condition-points-at-an-observation-type idea is retracted** — it was inference, the
  loop already closes through commitments, and all 402 conditions are distinct so it is not
  a vocabulary.
- **Kim settled four things**: no status model; Important is per-user; the feed shows
  Obligations (linking to an Action if one exists); location and weather are not real yet.
  The feed is **a timeline, or an inventory for Standing** — which is what replaces status.
- **Provenance answered**: the 402 are one analyst's hand reading of five permits, embedded
  in the specimen HTML. Not Beacon data. Only the commitment lineage is real (90% against
  `dcp-commitments.json`).
- **The live question**: nothing says how obligations get created in the product, and prod
  already AI-proposes Actions from approved requirements. If obligations follow that path
  they arrive as drafts needing approval, which contradicts step 5's
  "everything starts included" premise.
