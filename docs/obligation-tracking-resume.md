# Resume prompt — Obligation Tracking build

**Paste everything below the line into a fresh Claude Code session started in
`C:\Users\kim.bordon\Dev\beacon-design`.** Last updated 2026-09-17.

---

We are building the **Obligation Tracking page** in this Astro spoke — the awareness surface for
the Obligation record type. It is at `/prototypes/obligation-tracking` on branch
`proto/obligations`, and it is a prototype that will become the spec for several epics.

## Read these first, in this order

1. **`docs/obligation-tracking-checkpoint.md`** — 21 sections, the authority on this build. What
   is on disk, every design decision and why, the bugs not to reintroduce, and what is open.
   **Read §14, §18 and §19 before touching anything**: they list bugs that shipped silently,
   including four that only a type-checker could see. §20 is the pivot, §21 is Pinned.
2. **`C:\Users\kim.bordon\Desktop\obligations\obligations-exploration-notes.md`** — the entity
   deliberation, 20 sections, not in this repo. Still the authority on the entity's *shape*.
   §13 lists claims that turned out wrong; do not carry them forward.
3. `docs/obligations-checkpoint.md` — the older checkpoint. **Accurate only up to 2026-09-09**
   and actively misleading after it. Its §9 is falsified by its own §10.

## Hard constraints

- **Beacon prod is at `C:\git\sitkatech\Beacon`.** Read it with
  `git show origin/develop:<path>`, never from the working tree.
- **`beacon-design` has no `develop` branch.** Its integration branch is `main`;
  `origin/main` was merged into `proto/obligations` cleanly on 2026-09-15.
- **The build is committed** on `proto/obligations`, and `package.json` and `package-lock.json`
  are both back to exactly what the team has. An earlier note claiming the lock was dirty from
  an unrelated Astro bump was WRONG — the committed lock already carries astro 7.2.6.
- **NOTHING TYPE-CHECKS THIS REPO.** `typescript` is not a dependency, and Astro compiles with
  esbuild, which strips types without reading them — so every type here is documentation and the
  build CANNOT fail on a type error. A type checker was installed on 2026-09-17, found four real
  bugs in a few minutes (checkpoint §19), and was then **backed out at Kim's call**: it is a
  team-wide dependency change that came out of a debugging detour rather than a decision.
  **To use it for a session without committing anything:**

  ```sh
  npm i --no-save @astrojs/check typescript && npx astro check
  git checkout -- package.json package-lock.json   # if npm touches them
  ```

  Expect ~253 pre-existing errors elsewhere in the repo; the tracking files are clean. **Run it
  before believing a type**, and see §19 for the four bugs it caught — all of the kind that
  render silently rather than failing.
- Dev server: `npm run dev` → **http://localhost:4330** (base `/` in dev). Stop with
  `astro dev stop`. It serves stale CSS across long sessions — restart before diagnosing a
  rendering fault.
- Verify with `npm run build` (626 pages) and `npm run handoff:check`. For types, see the
  no-save recipe above.

## How I want you to work

- **Measure before asserting.** Query the fixture or read the prod schema; do not reason from
  the name of a thing. Most of this build's real findings came that way.
- **Never invent a value that looks like data.** I caught three: four observation types when
  prod has three, a site-report type one turn after you said they were unenumerated, and a
  fabricated "168 duties in force". All read as real because they sounded like the domain.
- **Anything not traceable to the fixture or to prod is suspect.** Say which it is.
- **No text about the page.** No bylines explaining what a view is, no notes restating a group
  heading, no sentence reconciling two controls that disagree — fix the controls. This has been
  corrected five times; the pattern is in the checkpoint.
- **Reuse the lego.** `esa-*` first, then a Beacon pattern, then `bcn-`. A component that only
  forwards props should be deleted, not kept.
- **Push back.** Several of my corrections overturned your claims and several of yours
  overturned mine. That is the point.
- **Never move past an unanswered question**, and do not open a plan overlay unprompted.

## Where the build stands

**Two tabs.** FEED (four views) and REGISTRY, no counts on either row.

**Important and Pinned read two ways** — an `esa-button-toggle` reading *By event | By
obligation* (checkpoint §20, §22). By event, a pane is a thing that happened and its children
are the duties it raised; by obligation, a pane is a duty and its children are the events that
reached it. The index is derived from the same array both directions read, so they cannot
disagree. **All and To-do have no switch** — only the views the reader defines get one. Pinned
opens on the obligation side, Important on the event side, and neither is sticky.

| | By event | By obligation |
|---|---|---|
| **All** | 6 panes, 20 rows | — (built, no switch) |
| **Important** | 4, 13 | 5, 13 |
| **To-do** | 4, 12 | — (built, no switch) |
| **Pinned** | 5, 8 | 6, 8 — **3 with no events at all**, and the side it opens on |

- **All** — a timeline. An event surfaces only what it made newly true: Notify duties and
  trigger matches, 1–5 per event. Adhere and Monitor duties that merely *match* an event are
  deliberately not surfaced; they are standing, and a standing duty reaches you by being pinned.
- **Important** — the same events, narrowed to the reader's saved subject areas.
- **To-do** — Notify only. A Monitor duty is a cadence that is ON, not a task that is OWED.
- **Pinned (6 duties)** — **replaced Ongoing on 2026-09-17** (checkpoint §21). Ongoing answered
  "what is in force right now" and had to author which activities were under way to do it.
  Pinning does not close that gap, it stops pretending to. The cost: the page now answers
  "what is on right now" for nobody. The pins are authored, resolved by title, and throw on a
  miss.
- **Registry** — both wizard views (By category / By commitment), read-only, each with its own
  filter row. Both trees are the wizard's own components in `mode="browse"`.

**One fixture, both halves:** the ITP pass of 2026-09-14 — 854 requirements, 333 obligations,
each carrying the requirements it was drafted from. Same data the setup wizard uses.

**How a duty reaches the feed — two stages.** Stage 1 narrows deterministically on species and
activity joins through requirements (real, running). Stage 2 ranks by reading the obligation's
TRIGGER with an AI relevance service (**not running** — the five trigger matches are authored in
`TRIGGER_MATCHES`, and the page says so). The trigger cannot be string-matched: it is scraped
prose like *"if there are any…"* on 157 of 333 duties.

**Events are shaped like the real Fulcrum payloads.** Beacon already runs an event hub
(`Beacon.EventHubListener`, Azure Event Hubs + Functions) with five live topics: `observations`,
`dmrs`, `sitereports`, `surveys`, `processedreports`. The three payloads are **not the same
shape**, so the facts band is per-source — see the checkpoint §15 table.

## Pick up here

Everything on the old list is done and committed. What is left:

1. ~~Decide where the pivot lives~~ — **done: Important and Pinned only** (§22). The cost is
   recorded there: To-do is where the transpose paid most, and that repetition is back.
   `OBLIGATION_PANES` still builds all four, so restoring a switch is one prop.
2. ~~Decide on the type-checker dependency~~ — **backed out at Kim's call, 2026-09-17.**
   `package.json` and `package-lock.json` are byte-identical to the team's again. It was a
   team-wide dependency change that came out of a debugging detour rather than a decision, and
   nothing depends on it: the four bugs it found are fixed in their own commits and stay fixed.
   The no-save recipe under Hard constraints runs it for a session without committing anything.
   **If the team ever wants it standing, raise it as its own change** — it earns its keep
   (four silent bugs in one pass) but that is the team's call, not this build's.
3. **The ~253 repo-wide type errors are still there**, unmeasured since the checker came out.
   Almost all are pre-existing debt in other prototypes — `monitoring/dashboard.astro` is the
   worst. The tracking files were clean when it last ran.

**Still Kim's call, unchanged:** the three pane builders in `obligation-tracking.ts` share seven
identical field assignments (§17). That is the shared spine, not debris — a
`pane(e, prefix, rows)` helper would take ~20 lines out at the cost of one indirection.

**Open questions 1–6 below are unchanged**, except that #2 ("nothing records why an obligation
is live") is now *acknowledged* rather than papered over — see §21. Pinning sidesteps it; it
does not answer it.

## Open questions — mine to answer, not yours to assume

1. **Why did fifty notices become three?** The hand-built registry of the same permits had 50
   Notify duties with stated windows; the drafting pass produced 3 with none. To-do runs entirely
   on Notify. Nobody has checked whether the pass routes notices to Actions instead.
2. **Nothing records why an obligation is live.** Ongoing's activity groups are authored —
   nothing in the fixture says which activities are under way today. This is the same gap the
   entity work calls in-effect conditions, and it is the last thing between this page and a real
   one.
3. **Seasons as a feed** with lead-up events (7 days out, 1 day before, day of) — my meeting
   notes want this; the page currently treats a date arriving on a published schedule as not
   news. Unresolved.
4. **Evidence of compliance** and **construction activities** as feeds. Both tables exist; no
   topic, no listener.
5. **Actions ↔ Obligations triggering each other.** An action completing switches obligations on;
   an obligation possibly creating or prioritising an action. Merits team discussion — and it is
   unsettled while the trigger is a text field with no obligation-instance concept.
6. **A fifth event source nobody has listed: personnel changes.** The only thing that moves a
   Roster duty.
