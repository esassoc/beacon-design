# Resume prompt — Obligation Tracking build

**Paste everything below the line into a fresh Claude Code session started in
`C:\Users\kim.bordon\Dev\beacon-design`.** Last updated 2026-09-16.

---

We are building the **Obligation Tracking page** in this Astro spoke — the awareness surface for
the Obligation record type. It is at `/prototypes/obligation-tracking` on branch
`proto/obligations`, and it is a prototype that will become the spec for several epics.

## Read these first, in this order

1. **`docs/obligation-tracking-checkpoint.md`** — 16 sections, the authority on this build. What
   is on disk, every design decision and why, the bugs not to reintroduce, and what is open.
   **Read §14 and §16 before touching anything**: they list mistakes I made and debris I left.
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
- **Nothing is committed.** 15 files: 8 new, 6 modified, plus the generated handoff bundle.
  `package-lock.json` is dirty from an unrelated Astro bump and stays uncommitted.
- Dev server: `npm run dev` → **http://localhost:4330** (base `/` in dev). Stop with
  `astro dev stop`. It serves stale CSS across long sessions — restart before diagnosing a
  rendering fault.
- Verify with `npm run build` (626 pages) and `npm run handoff:check`.

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

- **All (6 events)** — a timeline. An event surfaces only what it made newly true: Notify duties
  and trigger matches, 1–5 per event. Adhere and Monitor duties that merely *match* an event are
  deliberately not surfaced; they are standing, and Ongoing is for standing.
- **Important (4)** — the same events, narrowed to the reader's saved subject areas.
- **To-do (4)** — Notify only. A Monitor duty is a cadence that is ON, not a task that is OWED.
- **Ongoing (3 groups, 16 duties)** — the inventory: two active activities plus standing
  qualifications. Phase groups were removed; "the project is in Construction" swept in 260.
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

## Pick up here — in this order

1. ~~Sweep for duplicated blocks~~ — **done 2026-09-17, checkpoint §17.** 67 lines out of
   `BcnTrackingWorkspace.astro`: four copies of one rule, two of another, and a 48-line dead
   `.bcn-tw__group` block left over from the class groups §15 deleted. One duplicate was NOT
   harmless — two `.bcn-tw__row` rules disagreed about `grid-template-columns`.
2. ~~Repoint the handoff spec's "Duty row" section~~ — **done 2026-09-17.** Now
   **"Duty card" → `.bcn-swoc`**, and the body was rewritten as well: every claim in it
   described the deleted wrapper (a filing line, codes capped at four, de-duplicated codes —
   none of which the wizard card does).
3. **Commit.** A day of reasoning lives only in the working tree.

**The pre-commit review ran too, and found five real bugs — checkpoint §18.** A pane background
that never rendered (`--color-surface-raised` does not exist), Ongoing's rail heading missing
entirely, both alert boxes asserting things the code had already reversed, banned ornamental
micro-labels, and dead tab-badge CSS under a comment contradicting its own code. All fixed.

**Left for Kim to call:**

- The three pane builders in `obligation-tracking.ts` share seven identical field assignments
  (§17). That is the shared spine, not debris — a `pane(e, prefix, rows)` helper would take
  ~20 lines out, at the cost of one indirection.
- **Install `@astrojs/check` + `typescript` so `npx astro check` can run.** The missing
  `RAIL.ongoing` key was a plain type error that shipped because esbuild strips types and the
  build cannot fail on one. It is the second bug of that shape.
- The To-do alert box still stands (checkpoint §6.5, unruled). It is now TRUE, but it is still
  text about the page.

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
