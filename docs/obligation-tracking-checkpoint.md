# Obligation Tracking — build checkpoint

**Written 2026-09-16. Owner: Kim Bordon. Branch `proto/obligations`.**

Read this if you are resuming the **build** of the Obligation Tracking page. It covers what is
on disk, why it is shaped the way it is, and what is still open. The two companion documents:

- `docs/obligations-checkpoint.md` — the older session checkpoint. **Accurate for the
  prototyping track up to 2026-09-09 and stale for everything after.** Its §9 step-5 mechanism
  is already falsified by its own §10.
- `C:\Users\kim.bordon\Desktop\obligations\obligations-exploration-notes.md` — the entity
  deliberation, 20 sections. Not in this repo. Still the authority on the entity's shape.

---

## 1. What exists

`/prototypes/obligation-tracking` — built 2026-09-15, reworked 2026-09-16. Supersedes
`/prototypes/obligations-inbox`, which is **archived, not deleted**: its route, components and
data module are all intact, and the page itself opens with an alert box explaining what the
threading got right and what the mail metaphor got wrong.

### The page

```
AppShell > PageLayout > bcn-tracking-shell
  ├── outer tabs (segmented, NO counts): Feed · Registry
  ├── Feed    -> bcn-tracking-feed
  │     └── inner tabs (underline, NO counts): All · Important · To-do · Ongoing
  │           └── each view -> bcn-tracking-workspace (two panes)
  │                 ├── left rail: glyph / title (truncated) / relative time
  │                 └── right pane: title + per-source facts + expand/collapse
  │                                 + ONE list of bcn-sw-obligation-card
  └── Registry -> bcn-tracking-registry
        ├── view switch: By category | By commitment
        ├── per-view filter row (search + pickers)
        ├── bcn-sw-obligations-tree mode="browse"
        └── bcn-sw-chain-tree      mode="browse"
```

NO COUNTS ANYWHERE ON THE TABS (2026-09-16). They were briefly made consistent — every tab
counting distinct obligations, after Important had read larger than All by counting a different
unit — then removed outright: once the volumes were realistic the numbers stopped telling a
reader anything before they clicked.

### Files

| File | What it is |
|---|---|
| `src/pages/prototypes/obligation-tracking.astro` | The page. Single-section manifest, zero page CSS |
| `src/components/bcn/BcnTrackingShell.astro` | Outer Feed / Registry tabs |
| `src/components/bcn/BcnTrackingFeed.astro` | The four views + the two alert boxes |
| `src/components/bcn/BcnTrackingWorkspace.astro` | The two-pane frame, one per view |
| ~~`BcnTrackingDuty.astro`~~ | **Deleted 2026-09-16** — see §15 |
| `src/components/bcn/BcnTrackingRegistry.astro` | The Registry half |
| `src/data/obligation-tracking.ts` | All four views' data, derived from the wizard fixture |
| `src/data/handoff/obligation-tracking.mjs` | Handoff spec, 5 curated sections |

**Modified from main:** `BcnSwObligationsTree`, `BcnSwObligationCard` and `BcnSwChainTree`
gained a `mode: 'review' | 'browse'` prop. `prototypes.ts` gained the new entry and archived the
inbox.

---

## 2. The decisions, and why

### One fixture, both halves (2026-09-15)

The feed originally ran on the 402-duty hand registry while the Registry tab ran on the ITP
pass, so **one page disagreed with itself** about how many obligations the project has. Both
now read `setup-wizard.ts` → the ITP pass: **854 requirements, 333 obligations**, each carrying
the requirements it was drafted from.

**What that cost.** The 402-row registry carried four fields the fixture does not: a notice
window, a parameter conflict, a monitor-facing condition, and commitment codes. It had **50
Notify duties; the drafting pass produced 3**. So To-do is nearly empty and no deadline appears
anywhere. That is the state of the drafted data, not a regression — and it was invisible while
the two halves ran on different sources.

**What it bought.** Requirement lineage on every row; phases on all 333 (so Ongoing's phase
groups are derived, not authored); subjects as major/minor on the obligation itself.

### Three views share one spine (2026-09-16)

All, Important and To-do are three cuts of the **same event set**: everything, my subject
areas, and what is owed. Important filtered the whole registry by subject and ignored events
until 2026-09-16, which left one view that had plainly wandered in from another page. Ongoing is
the fourth and shares nothing with them by design — it is the inventory, not the timeline.

**Ongoing is the odd one by design** — the inventory rather than the timeline, and the only
view answering "what is on right now".

### Ongoing, formerly Standing

Built as **Standing**, removed 2026-09-15, restored under **Ongoing** on 2026-09-16 at Kim's
call. Standing was the proposal's own phrase ("a standing duty"); Ongoing is the plainer word.
Its groups were two phases and three activities; **§13 supersedes that** — the phase groups are
gone and Ongoing is 16.

### Verbal restraint pass (2026-09-15)

Removed: the page title badge, every view byline, every pane lede, and "N duties" text on rail
rows beside the badge already saying it. **Kept:** tab counts and rail-row badges — though the
outer tabs went from no counts, to a Registry count only, and every badge was later muted
(§14 item 13). §11 records the second, larger pruning pass.

Also removed the 25-item pane cap — it made the rail badge say 70 while the pane showed 25, and
the only thing reconciling them was a sentence in the lede being deleted.

### Rules carried in from the design record

- **The row label is the TITLE, never the trigger.** A list labelled with triggers reads as a
  list of accusations rather than duties in force.
- **The feed carries what you did not already know.** Observations qualify; a phase you entered
  does not, which is why phase is an Ongoing group and never a row in All.
- **No status, verdict, severity, "seen" control or filing verb** anywhere on the page.
- **Every panel renders at build time.** The controllers only reveal.
- **Class is a categorical facet, not a status** — quiet secondary badge, no colour meaning.

---

## 3. Bugs found here — do not reintroduce

1. **A silent filter fallback is worse than a crash.** Important was authored with subject area
   `'Terrestrial species'`, which does not exist in the fixture, and fell back to the largest
   category — so the page *named* a filter it was not applying. `IMPORTANT_AREAS` now validates
   against the fixture at module load and **throws**.
2. **Duties written for ANY covered species carry no species list.** A species-scoped predicate
   misses them, which is why To-do was empty on the first pass over this fixture. The
   `coveredSpeciesEncounter` predicate is what raises them — do not delete it as redundant.
3. **The old event log named a burrowing owl**, a species that appears nowhere in the ITP's 854
   requirements, so every owl event raised an empty list. Events must name species or activities
   the fixture actually covers.
4. **Astro appends scope hashes to class attributes.** `grep 'class="bcn-td"'` against built HTML
   finds nothing; match `class="bcn-td[ "]`. This produced two false "missing markup" alarms.
5. **`grep -c` returning 0 exits 1** and breaks an `&&` chain — which is the *good* outcome when
   checking for problems.
6. **The Bash heredoc mangles backslashes and long quoted strings.** Several patch scripts failed
   to parse. Write the script to the scratchpad and run it by path instead.
7. **Unicode escapes in patch scripts must be literal characters.** Patterns written with
   `\u2014` / `\u2019` do not match files containing real em dashes and curly quotes.

---

## 4. Verified state

- `npm run build` — green, **626 pages**
- `npm run handoff:check` — **clean for `obligation-tracking`** (5 curated sections)
- The setup wizard's step 5 is **unchanged**: still 127 verbs, 799 drag hooks, its confirm
  dialog and editor drawer. Browse mode renders 0 of each.
- Dev server: `npm run dev` → **http://localhost:4330** (base `/` in dev, `/beacon-design/` in
  prod). Stop with `astro dev stop`.

**`handoff:check` still reports 4 problems**, all pre-existing from the merge: the four
`setup-wizard*` manifests are gitignored, so pulling someone else's bundle does not give you
one. Fix with `npm run handoff:all -- <slug>` for each. Not caused by this work.

---

## 5. Nothing is committed

Fourteen files: 8 new, 5 modified, plus the generated handoff bundle. `package-lock.json` is
still dirty from the Astro 5 → 7.2.6 bump and is still deliberately uncommitted.

`origin/main` was merged into `proto/obligations` on 2026-09-15 (clean, no conflicts) to bring
in the setup wizard work. **Note:** `beacon-design` has no `develop` branch — its integration
branch is `main`. The `develop` in play is the Beacon prod repo at `C:\git\sitkatech\Beacon`,
a different repository.

---

## 6. Open

1. **Why did fifty notices become three?** To-do runs entirely on Notify. Either the drafting
   pass routes notices to Actions — plausible, a notice has a deadline and a deliverable — or
   the two readings disagree about what a notice is. **Nobody has checked. To-do cannot be
   designed until somebody does.**
2. **No obligation records why it is live.** Ongoing's phase groups are derived, but *which*
   phases and activities are under way is authored. This is the last gap between this page and
   a working one, and it is the same gap the entity work calls in-effect conditions.
3. **Is the Tracking page a tab beside Actions, or its own surface?** Never settled.
4. **Does a thread resolve as one unit?** Unchanged from the earlier record.
5. **The To-do alert box** explaining the Notify shortfall survived the restraint pass. It
   reports a finding rather than describing the UI, but it is the same species of text that was
   pruned elsewhere. Kim has not ruled on it.
6. **The three Desktop documents are now stale.** `obligations-tracking-page.html` especially —
   it describes four views with Standing as the centrepiece, an event log built on burrowing
   owls, and the 402-duty registry. They are the team-facing artifacts, so they will mislead
   until they are brought in line.

---

## 7. How a duty reaches the feed — the two-stage model (2026-09-16)

**Stage 1 — narrow, deterministically.** An event carries structured facts; an obligation
carries them through its requirements. Candidates are the duties that share one: event species
↔ `RequirementSpecies`, event activity ↔ `RequirementConstructionActivity`, season/phase ↔
`RequirementSeason` / `RequirementPhase`. Real joins, reproducible, and explainable to an
agency — *"this duty was raised because the observation named giant garter snake."*

**Stage 2 — rank, with an AI relevance service. NOT RUNNING in the prototype.** Narrowing
produces candidates; it does not decide which a person should look at. That judgement lives in
the obligation's **trigger**, and it cannot be done with string matching.

**Why the trigger cannot be matched directly.** It is prose a regex scraped from requirement
text, on 157 of 333 obligations. Real values: *"if there are any…"*, *"upon Project
operations"*, *"Upon mutual agreement, representatives from Reclamation, USFWS and NMFS may
also attend"*. Software cannot evaluate those; a model reading them against an event can.
The trigger's job on this page is to tell the reader **why**, in the permit's own words.

**This does not reverse §18.5 of the exploration notes** ("AI at authoring time, not firing
time"). That was about DEADLINES — an agency asks "why was this due Thursday?", so offset and
unit are extracted once, approved, and the runtime does arithmetic. Relevance is a different
question: nothing legal turns on which duties an awareness feed surfaces.

### Prod facts checked 2026-09-16 — do not re-check

- **Beacon already runs an event hub.** `Beacon.EventHubListener` — Azure Event Hubs + Azure
  Functions — with five live topics: `observations`, `dmrs`, `sitereports`, `surveys`,
  `processedreports`. Nobody needs to choose between RabbitMQ and building one.
- **`ObservationEventDto` is rich enough to match on.** ObservationType, a `Concern` flag,
  SiteName, ConstructionPackage, lat/long, photos, daily logs, `BeaconMeasureRef`, and an
  `ObservationTypeMetadata` block carrying **Species**, **BufferDistanceFt**, NestStage,
  NestingBird, ResourceType.
- **`SiteReport` carries a `DailyMonitoringReportID`**, and `SiteReportObservation` joins site
  reports to observations.
- **`EvidenceOfCompliance` is a real table** (Project, Title, Notes, Type, Create/UpdateDate) —
  but there is **no topic and no listener**.
- **`ProjectSeason` is real** — StartDay/StartMonth/EndDay/EndMonth and a `Tracked` flag — and
  `Beacon.API/Services/Scheduling/Jobs/` already runs scheduled jobs, so a daily season job has
  a home. There is no season event today.
- **Construction activities have no topic.**

---

## 8. Deferred — from the 2026-09-16 meeting notes

These are noted rather than built, at Kim's call. Return to them.

1. **Seasons as a feed with lead-up events.** The notes list seasons under NEW FEEDS with
   "7 days away, day of, 1 day before" and ask whether that is configurable. **Right now
   seasons and phases live in Ongoing, not the timeline** — the position being that the feed
   carries what you did not already know, and a date arriving on a published schedule is not
   news. The notes point the other way. Unresolved; revisit together.
2. **Evidence of compliance as a feed** — "eoc added to anywhere in the site". Needs a topic
   and a listener; the table exists.
3. **Construction activities as a feed.** No topic.
4. **Actions ↔ Obligations triggering each other.** An action completing puts obligations into
   effect; an obligation prioritising or creating an action. Open questions the notes name
   themselves: can obligations trigger actions at all while the trigger is a text field, and
   do obligations have an implementation/instance concept? **Merits team discussion.**
5. **To-do's signal.** It is currently read off class — Notify means somebody must report,
   3 of 333. Whether class is the right signal is open, and it is entangled with (4).

---

## 9. Class decides what kind of event moves a duty (2026-09-16)

Kim spotted a Roster duty — *"Permitted personnel for studies that may take Covered Fish
Species"* — appearing under a giant garter snake sighting. Two separate problems behind it.

**Roster is not event-driven.** A roster obligation is a standing qualification: "you must have
a permitted handler" is true today whether or not anyone saw anything. What moves it is a
**change in staff**. Roster is now excluded from event matching and sits in Ongoing under
*"Who is qualified to do the work"*. That names a **fifth event source nobody has listed** —
personnel changes. Not in the meeting notes, not a Fulcrum topic.

The general rule, worth taking to the team:

| Class | n | What actually moves it |
|---|---|---|
| Notify | 3 | A field event. Genuinely event-driven |
| Adhere | 260 | Standing rule; event-shaped thing is a **breach**, not a sighting |
| Monitor | 64 | Standing cadence; the event is evidence arriving, or failing to |
| Roster | 6 | Standing qualification; the event is a **staff change** |

Adhere and Monitor are still raised by sightings, which is a **placeholder** — what they should
answer to is a breach event and an evidence event, neither of which exists.

**The species-scope problem has no regex fix — measured, not assumed.** 36 obligations carry no
species list but mention "Covered Species". Some apply to all; others are scoped to a subset the
prose names in passing. The fish duty above reads *"all Covered Species Monitoring and
Scientific Studies which may result in take of DS, LFS, CHNWR, CHNSR, and WS"*.

Tightening the phrase (reject "Covered *word* Species") drops **zero of the 36**, because the
plain phrase appears in the same text. The scope lives in a take list of abbreviations and in
the title. **This is the clearest argument for stage 2 existing**: deciding whether a species is
in scope is exactly the judgement an AI relevance service is for.

So those rows stay as candidates, marked `unverified` and rendered differently — *"Candidate
only — this duty names no species, so whether it covers this one is not something the join can
answer"* — never as a confirmed match. Currently 273 confirmed lines against 139 unverified.

---

## 10. The Registry tab has both wizard views (2026-09-16)

The Registry tab was one tree; step 5 offers two. It now carries both, read-only, swapped by a
segmented control rather than by navigation:

- **By category** — `BcnSwObligationsTree mode="browse"`, four levels
- **By commitment** — `BcnSwChainTree mode="browse"`, 294 commitments with route and orphan counts

Each view has its own filter row, because the trees listen on different field names
(`swo-search` / `swc-search`) and narrow by different things: class and category for the
taxonomy, coverage for the chain. Search highlights hits in `<mark>`; the chips announce
themselves as bubbling `sw:chip` events, which is why a chip works from inside the filter row
rather than only from the step title the wizard puts it in.

**Bug found doing this:** the category tree's controller was bailing out entirely on browse
(`if (root && mode !== 'browse')`), which killed search, expand/collapse and the counts along
with the editing. Every edit path is inert on browse WITHOUT a guard — the verbs and drag hooks
are not rendered, the template stamp is lazy, the confirm guard is optional-chained. The script
now runs in both modes.

---

## 11. What a row and an event actually show (2026-09-16)

### The event row carries four facts and nothing else

Kind (the Event Hub **source**), a sub-kind under it (the observation's type, when it has one),
the count, the event itself, and when — **relative and absolute**, because "2h ago" is useless
in a week. Everything else is a labelled `dt`/`dd` pair behind a disclosure: Source, Reported,
Site, Reported by, Observation type, Species, Buffer, Flagged as a concern.

**Source and type are different things**, and running them together was a real error. Source is
the topic a record arrived on (`observations`, `sitereports`, `dmrs`) and those ARE enumerated,
by the listeners. `ObservationType` exists only on observations. A site report does not become an
observation because its own sub-type lacks a vocabulary.

### The duty row

Title, the meta line, and — on trigger matches only — the model's stated reason. The class badge,
the trigger quote, the filing line and the "Raised on X" sentence are all gone:

- **Class badge** — every view groups by class, so it repeated its own heading 209 times.
- **Trigger quote** — the bulkiest element and the least useful: scraped prose on fewer than
  half the duties. It now appears only where it is the actual reason (5 rows).
- **"Raised on X"** — stated on every row, identical 62 times. A row now speaks only when its
  basis DIFFERS from the pane's dominant one: 24 lines across 209 rows.

### Every group note was removed

Four were tried. Three restated the class name; the Monitor one also asserted a field that does
not exist (`expectedEvidence` is on `WizardAction`, not on an obligation). The last — "Already in
force, this event is where it bites" — was kept a while because it carried a real finding, then
removed too: the finding is already expressed STRUCTURALLY by the group order (Notify, Monitor,
Adhere), and a sentence repeating the sort order on fourteen panes is the page explaining itself.

---

## 12. Trigger is the strongest basis, and stage 2 is simulated (2026-09-16)

**Only a trigger match is stated on a row.** If a duty is not here by trigger, it is here because
its requirements name the species or activity the event named — implicit, obvious from the event,
and it was cluttering every row with a label that never varied. Species/Activity markers are gone.

**Five trigger matches exist, across three events**, authored in `TRIGGER_MATCHES` and clearly
marked as the simulated half. All three example duties carry NO species and NO activity, so a
join can never reach them — a trigger match is the only route. *Work Stoppage on Covered Species
Encounter* is the clearest: the snake, the hawk and the salamander all pull it in, and nothing
else would have.

**This does not reverse §18.5** of the exploration notes ("AI at authoring time, not firing
time"). That was about DEADLINES — an agency asks "why was this due Thursday?", so offset and unit
are extracted once, approved, and the runtime does arithmetic. Relevance is a different question
with nothing legal riding on it.

---

## 13. Realistic volumes (2026-09-16)

| View | Was | Now | Why |
|---|---|---|---|
| Ongoing | 317 | **16** | Phase groups dropped |
| To-do | 34 | **3** | Notify only |

**Phase is not a reason.** "The project is in Construction" swept in 260 duties — four fifths of
the permit. Phase SCOPES which duties can apply; it does not say which are live today. What is
left are conditions narrow enough to be true right now: dewatering under way (6), in-water work
under way (4), and the standing qualifications (6).

**To-do is Notify only — this REVERSES the notify+monitor decision made the same morning.**
Monitor was included when Notify alone gave zero rows; the any-species restoration fixed that
independently. The definition is the real argument: a Monitor duty is a standing cadence —
something that is ON, which belongs in Ongoing — while a Notify duty is owed BECAUSE THIS EVENT
HAPPENED and stops being owed once done.

**Still large and deliberately untouched: All 156, Important 66.** These are event-driven rather
than authored — a snake sighting genuinely touches 65 standing rules in this permit. Cutting them
would hide real matches. If they must read smaller, the honest lever is to surface only what an
event makes NEWLY relevant (Notify + trigger matches) and leave the Adhere rules it merely
touches to Ongoing — roughly 5-10 per event. Not done; Kim's call.

---

## 14. More bugs and traps — do not repeat

8. **I invented data twice in two turns, and both were caught by Kim, not by me.** Four
   observation types ("Species observation", "Injured wildlife", "Water quality exceedance") when
   prod has exactly THREE, client-side, in `ObservationTypes`: `Nesting Bird`, `Compliance
   Concern`, `Resource`. Then a site-report type ("Water quality monitoring") one turn after
   stating that site-report types are enumerated nowhere. Both read as real because they sounded
   like the domain. **Anything on this page not traceable to the fixture or to prod is suspect.**
9. **`Observation.ObservationType` is free text.** VARCHAR(255), no lookup, no FK — the vocabulary
   is enumerated in the Angular app and unconstrained in the database. A fourth string would
   store cleanly and classify as nothing.
10. **Class DOES have per-class colour**, in `BcnSwObligationCard`: adhere `--color-obligation`,
    monitor `#ff7c43`, notify `#ffa600`, roster `--color-action`, mixed at 14% on white for fill
    and 78% on black for text. I claimed there was none, having looked at the `esa-badge`
    secondary variant my own row used instead of at the card.
11. **`esa-collapsible --flush` out-specifies its host.** It zeroes `padding-inline` through
    `.esa-collapsible--flush[cid] > .esa-collapsible__summary[cid]` — (0,4,0) — which beats any
    reasonable host override. TWO passes of mine lost to it silently. Use the lego unflushed and
    cancel only the card chrome.
12. **Astro CSS can be INLINE or in an external bundle.** I grepped only `dist/_astro/*.css`,
    found nothing, and twice concluded the lego shipped unstyled — it was inline in the page all
    along. This is the same false-alarm trap already recorded as item 4, walked into again.
13. **`esa-tab-layout`'s badge defaults to a SOLID brand fill** with knockout text. Four
    saturated pills for the least important information on the page. It exposes
    `--_tab-badge-bg` / `--_tab-badge-color`, so muting it is configuration, not an override
    reaching inside the lego.

---

## 15. The feed's final shape (2026-09-16, late)

### The event row is three things

A glyph for the kind, the title on **one line truncated**, and the **relative time only**.
Dropped: the source text, the sub-type text, the count badge and the calendar date. A timeline
is scanned; five stacked facts per row is not scanning.

Five glyphs, Lucide inner markup in `EVENT_GLYPH`: leaf (Biological Resources), triangle-alert
(Compliance Concerns), egg (Nesting Birds), clipboard (site report), file-text (DMR).

### The facts band is per-source, and the payloads are NOT the same shape

Kim asked whether the detail fields were consistent across the three topics. They are not, and
rendering one list for all of them was a latent bug that only looked fine because the single
site report happened to use the two fields all three share.

| Detail | Observation | Site report | DMR |
|---|---|---|---|
| Site | `SiteName` | `SiteName` | **absent** — `ProjectName` / `ConstructionPackage` |
| Species | `ObservationTypeMetadata.Species` | `SelectSpecies` (different shape) | **absent** |
| Buffer | `BufferDistanceFt` | **absent** | **absent** |
| Concern flag | `Concern` | **absent** | **absent** |
| Reporter | `Metadata.CreatedBy` | `Metadata.CreatedBy` | `FieldPerson` |

So each source now contributes only what it has: observations show type/site/species/buffer/
reporter/flag, site reports show site/activity/on-site/reporter, and DMRs show package/weather/
air temp/precipitation/field person — weather being the actual point of a daily report.

**A DMR seed was added** so the feed exercises all three live topics rather than assuming
everything is an observation. It needed two trigger matches to surface at all, having no Notify
duty: *Dewatering pump shutdown* and *Watch for distressed or injured fish during pile driving*.

The band is a **wrapping flex row**, not a grid. The first pass used
`repeat(auto-fit, minmax(9rem, 1fr))` — `9rem` was a guess and `1fr` forced equal columns, so
"Resource" spanned as wide as "A. Mendes, biological monitor" and the last row went ragged.
Consistent spacing here means one gap between every pair of facts, not equal columns.

### Class groups are gone; the duty card IS the wizard's card

`BcnTrackingDuty.astro` is **deleted**. It existed to wrap `BcnSwObligationCard` with a Trigger
marker; the marker and its prose reason were both removed, at which point the wrapper forwarded
props and added a margin. The workspace renders `BcnSwObligationCard mode="browse"` directly, so
a duty is the same component in the feed, the Registry tab and setup step 5 — and the commitment
codes come back for free.

Collapsible Notify / Monitor / Adhere groups are gone too. They earned their place when an event
raised seventy duties; once it surfaces three to five, the headings outnumbered the rows. **Order
carries what they said** — trigger matches first, then Notify, Monitor, Adhere, Roster.

Each pane has **Expand all / Collapse all**, matching the Registry tab's pair, scoped to the pane
the button sits in (a document-wide query would open all 60 collapsible nodes across four views).

---

## 16. Debris worth sweeping

My patch scripts splice by string index, and that has left **duplicated blocks in at least two
files**:

- `obligation-tracking.ts` had two copies of `TrackingPane`, `detailOf`, `codesOf`, `basisOf`,
  `triggerWhy` and `asDuties`. The build compiled it silently because the copies were identical;
  it only surfaced as `Identifier has already been declared` once one copy was edited.
- `BcnTrackingWorkspace.astro` had **three** copies of the `.bcn-tw__facts` rule.

Both are fixed, but nobody has swept the rest of the tracking components for the same thing.
Worth one pass before this is handed to anyone.

---

## 17. The sweep, done (2026-09-17)

**The sweep of §16 ran.** Two scanners over every tracking file plus the three wizard components
this build modified: one for repeated top-level declarations and CSS selectors, one for any
identical 4-line window appearing twice in a file. Scripts are in the session scratchpad, not
the repo — they are 30 lines each and worth rewriting rather than maintaining.

**What it found, all in `BcnTrackingWorkspace.astro`, all now gone — 67 lines:**

- `.bcn-tw__blank` declared **four** times, identically.
- `.bcn-tw__detail :global(.esa-collapsible + .esa-collapsible)` **twice**, identically.
- `.bcn-tw__duties` a second time, padding only, restating what the full rule already set.
- `.bcn-tw__row` **twice**, and this one was not harmless: the first set
  `grid-template-columns: 1fr auto` (the old two-column row) and the second overrode it with
  `auto 1fr auto`. The live layout was the second; the first was the pre-glyph row still sitting
  there, with its stale "Four facts, in reading order" comment directly above the correct
  "THREE THINGS ON A ROW" one. Merged into one rule with one comment.
- **The entire `.bcn-tw__group` block was dead** — 48 lines of sticky per-class group headers for
  the collapsible class groups §15 deleted. Nothing on the page carries that class and nothing
  in the workspace's subtree is an `esa-collapsible` (the card's disclosure is a native
  `<details>`). Verified against built HTML: **0 occurrences of `bcn-tw__group`**. The two
  findings it recorded — `--flush` out-specifying its host (§14.11) and the per-class hues being
  the wizard card's own (§14.10) — live here, so deleting the CSS lost nothing.

**Three near-duplicates were left alone, deliberately:**

- `BcnTrackingRegistry.astro`'s two Expand-all/Collapse-all pairs — the two views listen on
  different field names, which is exactly why each has its own filter row (§10).
- `obligation-tracking.ts`'s three pane builders (`all` / `important` / `todo`) share seven
  identical field assignments. That is the shared spine of §2, not splice debris. A
  `pane(e, prefix, rows)` helper would take ~20 lines out; **not done — Kim's call**, since it
  trades three readable literals for one indirection.
- `BcnSwChainTree.astro`'s two truncation blocks are two different selectors and predate this
  build.

**The handoff spec's "Duty row" section was repointed and rewritten.** Its selector was
`.bcn-td`, deleted with `BcnTrackingDuty` — `handoff:check` passed anyway because it does not
verify that a selector resolves, so the section was silently capturing nothing. It is now
**"Duty card" → `.bcn-swoc`**, and the body had to be rewritten, not just the selector: every
claim in it described the deleted wrapper. Gone are "a filing line", "codes capped at four with
a +n more tail" and "codes are de-duplicated" — the card has no filing line and its requirement
list is an **uncapped fold**, not a chip row. Added: that this IS the wizard's own card in
`mode="browse"`, that browse is a prop rather than a second component, and that the class tag
does carry per-class colour.

**One doc/code mismatch found and recorded rather than fixed.** `BcnSwObligationCard`'s header
comment says the browse-mode title "links to the duty's record"; the code renders a static
`<span>`. The code is right (§11's no-dead-link rule) and the comment is stale. Noted in the
handoff gotchas; the comment itself is the wizard's file, so it is left for whoever owns that.

**Verified after the sweep:** `npm run build` green, **626 pages**; the page still renders
**4 workspaces, 17 rail rows, 17 panes, 394 cards**; `bcn-td` and `bcn-tw__group` appear
**0 times** in the built HTML; `handoff:all -- obligation-tracking` regenerates 5 curated
sections with Duty card now capturing 1563b rather than nothing; `handoff:check` clean for this
slug, with the same 4 pre-existing `setup-wizard*` manifest problems §4 already records.

---

## 18. The pre-commit review, and the five real bugs it found (2026-09-17)

`spoke-precommit-review` ran over the working tree before the commit. The sweep in §17 was
looking for duplicated text; this was looking for things that are *wrong*, and it found more
than the sweep did. **All five are fixed.**

### 1. A token that does not exist — the rail and detail panes had NO background

`BcnTrackingWorkspace` styled both panes with `background: var(--color-surface-raised)`.
**There is no `--color-surface-raised`** in `@esa/tokens`. CSS drops a declaration whose
custom property is undefined, so the two panes had been rendering on the page ground the whole
time, with only their border separating them. Nothing failed, nothing warned.

The same component was the ONLY file in the repo reading the deprecated `--color-surface-*` /
`--color-text-*` / `--color-border-subtle` alias family — measured: each of those five tokens
had exactly one consuming file, and it was this one. The repo's actual convention is the
canonical names, 249 uses of `--color-background-elevation-raised` against this file's one
misspelling of it. All six repointed:

| Was | Now |
|---|---|
| `--color-surface-raised` **(undefined)** | `--color-background-elevation-raised` |
| `--color-surface-sunken` | `--color-background-elevation-sunken` |
| `--color-text-primary` | `--color-content-default` |
| `--color-text-tertiary` | `--color-content-default-tertiary` |
| `--color-border-subtle` | `--color-border-default-subtle` |
| `--color-border-focus` | `--color-border-default-focus` |

**The check that found it is worth keeping:** list every `var(--x)` the changed files
reference, list every `--x` defined under `node_modules/@esa/tokens/`, and diff the two.

### 2. Ongoing's rail had an empty heading and its listbox had no name

`BcnTrackingFeed` defined `RAIL` with three keys — `all`, `important`, `todo` — and passed
`railLabel={RAIL.ongoing}` to the fourth workspace. **esbuild strips types, so the build never
saw it**; the fourth rail rendered `<h3></h3>` and its `role="listbox"` had no `aria-label`.
Added: **"Why these are in force"** — Ongoing's parent is a reason, not an event.

This is the second time the type system would have caught something the build could not
(§4 already notes the build cannot fail on a type error). `npx astro check` wants
`@astrojs/check` + `typescript` installed and prompts interactively; **it has not been run,
and installing it is Kim's call.**

### 3. Both alert boxes stated things that are false

- **To-do** said a duty reaches the view when "a Notify duty is reported to somebody, a Monitor
  duty leaves evidence… so Monitor is carrying this view." The predicate is
  `hasFollowUp = o.class === 'notify'` — **Monitor is excluded**, which is §13's own decision.
  The box was describing the reversed-then-reversed-back state from the morning of 2026-09-16.
- **Ongoing** said "all 333 obligations carry the phases they attach to, so the two phase
  groups are read from the data." **There are no phase groups** — §13 removed them. The claim
  survived the change that falsified it.

Both rewritten to what the code does. The To-do box also now names the open question (50
notices → 3) rather than implying the shortfall is understood.

### 4. Ornamental micro-labels in the facts band

`.bcn-tw__fact dt` was `font-size: 0.78rem` + `text-transform: uppercase` +
`letter-spacing: 0.06em` + tertiary grey — the exact four-part combination the house principles
ban, and a raw size where a **type role** belongs. The labels now carry
`typography-label-xs` and the values `typography-body-sm`; the only CSS left is the colour
pairing that tells a label from its value. The rail heading's `type-label` was the deprecated
alias too (the repo uses `typography-*` hundreds of times over) — now `typography-label-sm`.

### 5. Dead tab-badge CSS in two components, under a comment that contradicted the code

Both `BcnTrackingShell` and `BcnTrackingFeed` carried a `<style>` block setting
`--_tab-badge-bg` / `--_tab-badge-color` on `esa-tab-layout`. **Neither tablist has a badge** —
`TABS` is labels only, since §1 removed every count. Shell's header note still announced "ONLY
REGISTRY CARRIES A COUNT" directly above the `TABS` array that has none. Both style blocks
removed, the note corrected, and the reasoning kept as a comment in case a count returns.

### Stale numbers in this document, corrected by measurement

§13's closing line — "Still large and deliberately untouched: All 156, Important 66" — was
**already false when it was written down**, or was overtaken within the hour by §15's pruning.
Measured from the module on 2026-09-17:

| View | Panes | Duty rows |
|---|---|---|
| All | 6 | **20** |
| Important | 4 | **13** |
| To-do | 4 | **12** (3 distinct Notify duties, raised by several events each) |
| Ongoing | 3 | **16** |

§15's "three to five per event" is the accurate description; §13's figures are not. The honest
lever §13 proposed — surface only what an event makes newly relevant — **was evidently already
pulled**. Nothing to do; the numbers here supersede §13's.

**Verified after the review:** `npm run build` green, 626 pages; all four rails named in the
built HTML, all four listboxes with an `aria-label`; **zero** undefined and **zero** deprecated
tokens referenced by any tracking file; 75 fact labels carrying `typography-label-xs`; handoff
bundle regenerated; `handoff:check` clean for this slug.

---

## 19. The repo now type-checks, and it found four more (2026-09-17)

**`typescript` was never installed.** Not a dependency, not in `node_modules`. Astro compiles
`.ts` and `.astro` frontmatter with **esbuild, which strips types without reading them**, so
every type in this repo was documentation. `@astrojs/check` (the `.astro`-aware wrapper) and
`typescript` are now devDependencies, and `npx astro check` runs.

**It reports 253 errors across 382 files.** Almost all are pre-existing debt in other
prototypes — `monitoring/dashboard.astro` alone carries a pile. **Do not treat that number as
this build's.** Scoped to the tracking files it found four real bugs, all now fixed:

1. **`FeedEvent` declared `type` twice** — once required, once optional. TS2300. Not cosmetic:
   the required one asserts every event has an ObservationType, which is the assumption §15
   spent a session demolishing. The site-report and DMR seeds set no `type` at all.
2. **The object literal building a `FeedEvent` from a seed also set `type` twice** (ts1117) —
   the same fault one layer down.
3. **`PaneDetail` was referenced three times and defined nowhere.** Another declaration an
   index-splicing patch script dropped (§16), invisible because nothing resolved types.
4. **`esa-empty-state` takes `title` / `description`; the page passed `heading` / `message`.**
   Astro drops unknown props silently, so **every empty state on the page rendered with no text
   at all.** `esa-alert-box` takes `title`, not `heading` — so both alert boxes had been
   rendering untitled too. Their headings were also sentences, where the lego contracts the
   title as 1–3 words; they are now "Notify only" and "Pins are authored".

`EMPTY` is now a title-only map. `esa-empty-state`'s `description` is contracted as **one
imperative recovery action, ≤12 words** — "not a description of the missing feature" — and none
of these views has a recovery action, since a reader cannot make an event arrive. Each old
`message` was a restatement of its own heading anyway.

**Run `npx astro check` before believing a type.** It is the only thing in this repo that reads
them.

**The dependency itself is UNSETTLED and is Kim's to rule on.** `package.json` now carries both
as devDependencies, which every teammate inherits — a team-wide change that came out of a
debugging detour rather than a decision. The four bugs are fixed and committed independently of
it, and reinstalling later is one command with no commit, so backing it out costs nothing but
the convenience.

**A claim in §5 that turned out false, corrected by measuring.** "`package-lock.json` is dirty
from an unrelated Astro bump" was carried forward from note to note and repeated to Kim. **The
committed lock already has `astro 7.2.6`** — that bump is in. The working-tree diff is
**+1038/−14**, and it is the type checker's dependency tree (volar, the vscode language
services, yaml-language-server) plus `typescript`. The 14 removals are npm re-serialising:
`leaflet` moved, `gh-pages` shifted as `devDependencies` gained entries, a few `optional` flags
reordered. There is nothing unrelated hiding in it.

---

## 20. The pivot — reading a view the other way round (2026-09-17)

Kim: *"in the way that we see an event, and can see its related obligations, we should be able
to see that obligation, and all its events."*

**Built as a PIVOT, not a fifth view** — an `esa-button-toggle` above every view reading
**By event | By obligation**, the same lego and wiring as the Registry tab's By category / By
commitment switch. A tab says "here is a different thing"; this is a transpose, and the page
already has two tab levels. **Not sticky, at Kim's call**: each view owns its switch, all four
start on By event, nothing is remembered across a tab change.

**The index is derived, never authored** — built by walking the same `EVENTS[].raised` array
the forward panes read, so the two directions cannot disagree. Row totals match in both
directions (20, 13, 12, 8), which is the check that proves it.

**Components.** `BcnTrackingEvent.astro` is new: one event as a child of a duty. A native
`<details>` carrying `data-swo-branch`, deliberately matching `BcnSwObligationCard` — that is
the hook the pane's Expand all / Collapse all already drive, so both kinds of child open with no
new wiring. The workspace writes its frame ONCE for both directions; `TrackingPane` and
`ObligationPane` agree on `id`, `label`, `when` and `details` so only the children branch.

**The absolute date came back, in this direction only.** §15 dropped the calendar date from the
rail because a timeline is scanned by recency. A duty's history is read the other way — four
events across days, where "1d ago" beside "2d ago" is arithmetic. Both are shown here, the
relative one alone there. That is a considered difference, not an inconsistency.

### The basis rule, asserted wrongly and then measured

The first pass claimed the inverse **reverses** §11: that since the pane is one duty and the
events vary, why each reached it is the whole content of a row. **Measured, that is false.** Of
the nine duties in All, five have a single event and the other four are **uniform** — 4×"Any
covered species", 3×"Trigger". **Not one pane has a varying basis.** The per-row badge was 46
copies of 9 facts: the identical noise §11 removed from the forward view.

So the rule is the **same** rule, applied in the other direction: where every event reached the
duty the same way it is hoisted to the pane and stated once; where they differ the rows carry
it. 46 badges became 18 pane facts. Real data will produce the varied case; this fixture never
does.

**A layout trap worth keeping:** a flex item's auto basis is **max-content**, so a long value
takes one unbroken line. `min-width: 0` does not fix it — it permits shrinking but the basis
still asks for max-content. Both facts bands cap the item at `100%`.

---

## 21. Pinned replaces Ongoing (2026-09-17)

Kim, mid-build: *"maybe it's more useful to have this only available for important and pinned
after all, because those obligations that we want to track are specified by the user."*

There was no Pinned. Asked rather than assumed, and the answer was the stronger reading:
**a user-pinned list replaces Ongoing outright.**

**Why it is the right trade.** Ongoing answered "what is in force right now", and to answer it
at all it had to **author which activities were under way** — §6's second open question, the
thing the page had been papering over. Pinning does not close that gap; **it stops pretending
to.** The reader names what they are watching, which is a claim this system can actually keep.
"What am I tracking" is a smaller question than "what is in force", and it is one we are in a
position to answer honestly.

**What was lost, stated plainly.** The activity groups derived their MEMBERSHIP from real data —
duties under "Dewatering and fish isolation" genuinely name that activity in their requirements.
Only the claim that the activity was happening today was invented. **The page now answers "what
is on right now" for nobody.** That is a deliberate subtraction and should be reversed the moment
obligations carry in-effect conditions.

**Pinned rejoins the spine.** Ongoing shared nothing with the other three — its parents were
reasons. All four views are now cuts of one event set: everything, my subject areas, what is
owed, and what I pinned. Pinned is the one view whose **by-obligation side is native** and whose
by-event side is the transpose; every other view is the reverse.

**The pins are authored, and the page says so.** Six, resolved **by title** with a throw on a
miss — a list of ULIDs is unreadable in source and fails silently when the fixture is redrafted,
and §3's first lesson is that a silent filter fallback is worse than a crash. A pin is UI state
rather than permit data, which is why authoring it is legitimate where inventing an observation
type was not.

| | By event | By obligation |
|---|---|---|
| All | 6 panes, 20 rows | 9 panes, 20 rows |
| Important | 4 panes, 13 rows | 5 panes, 13 rows |
| To-do | 4 panes, 12 rows | 3 panes, 12 rows |
| **Pinned** | 5 panes, 8 rows | **6 panes, 8 rows — 3 with no events at all** |

**Those three empty pins are the sharpest thing the page says.** The set spans the four classes
and mixes reached with unreached deliberately: *you chose to watch this, and in the whole event
log nothing has ever touched it.* The pane then names what WOULD move it — and for three of the
four classes that is a topic Beacon does not publish (a staff change, a breach, evidence
arriving). §9's table, rendered as something a reader finds by looking.

`ONGOING`, `OngoingGroup`, `ACTIVE_ACTIVITIES` and `asDuties` are all deleted.

---

## 22. The pivot is restricted to Important and Pinned (2026-09-17)

Kim's call, once Pinned existed: **only the views the reader defines.** Important runs on their
saved subject areas; Pinned is a list they chose. All and To-do are the system's own cuts —
everything that happened, everything owed — and nobody arrives at those asking "what has become
of MY duties", which is what the inverse answers.

`BcnTrackingWorkspace` takes `pivot` (default false) and `opens`. **Without the pivot it renders
ONE side and no bar** — not both sides with one hidden. Shipping an inverse into the DOM that
nothing can reveal is dead weight on every page load and a trap for the next reader.

**Pinned opens on the obligation side; everything else opens on the event side.** A pin IS a
duty: opening a list you curated and being handed a list of events instead answers a question
nobody asked. That makes Pinned the one view whose by-event direction is the transpose.

**What it costs, recorded rather than argued.** To-do is where the transpose paid most — the same
three Notify duties appear under four events each, so the forward view spends 12 rows saying
three things, and that repetition is back. All's inverse was the cheapest way to ask what this
permit has actually touched (20 rows → 9 duties). **`OBLIGATION_PANES` still builds and exports
all four**, so restoring a switch is one prop.

### A trap that cost twenty minutes — read this before debugging the page

The switch reported `value=event` while the page showed the obligation side: a control
disagreeing with its own page, which is the exact fault the design record says to fix rather
than explain. **It was the dev server serving a stale script.** The built HTML and the source
were both correct. §4 already warns that the dev server goes stale across long sessions;
**restart it BEFORE diagnosing any rendering or wiring fault**, not after. The same trap is
recorded as §14.12 for CSS and it was walked into again, for JS this time.
