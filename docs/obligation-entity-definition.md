# What is an Obligation?

**Working notes, 2026-09-08. Checked against the Beacon codebase (`origin/develop`) and
the September proposal documents. Nothing here is built.**

**Settled going in: an Obligation is its own entity.** Actions and Obligations are two
different things we track. This document works out what an Obligation actually holds, and
what a person does with each piece of it.

---

## 1. Where the 402 obligations come from

This matters, because everything below is designed against them.

They were **written by hand from real permit documents**, not computed and not taken from
Beacon's database:

1. Five source documents — ITP, EIR, USFWS BiOp, ITP Amendment, NMFS BiOp — holding
   **391 commitments**.
2. Reading those produced **1,806 obligation-shaped duties**.
3. Most are the same duty said more than once: a duty is restated by about **4.5
   commitments on average** across documents. Collapsing the repeats leaves **402 unique
   obligations** (Adhere 225, Monitor 103, Notify 50, Roster 24).
4. Those 402 were written into a JSON file, embedded inside
   `actions-obligations-2026-09-02.html`.
5. `scripts/extract-obligations.mjs` copies that block out **verbatim** — no reshaping, no
   enrichment, and it fails loudly if the counts move.

**What that means for trusting them.** They are one careful reading of five permits. The
only independent check is that the commitment codes attached to them resolve **90% (1,138
of 1,270)** against `dcp-commitments.json`, which is real Beacon data — so the links to
commitments hold up even though the duties themselves have never been checked against how
Beacon stores this project today. Good enough to design against. Not a migration plan.

---

## 2. What is broken today, and why it proves the point

Beacon's Action has a "how often" setting with four options:

| Setting | What Beacon does with it | What that looks like |
|---|---|---|
| One time | makes one dated item | works |
| Recurring | makes one dated item per interval | works |
| **Ongoing** | makes **exactly one** item, spanning start to end | one row that never closes |
| **As needed** | makes **nothing** | invisible |

There is a comment in Beacon's own source next to the "as needed" case that reads:
*"No implementations until trigger occurs."* **Nothing in Beacon ever creates that
trigger.** The box where you type what the trigger is holds free text that no code reads.

So today, when a duty never ends, people pick one of those two settings and get either a
row that sits open forever or nothing at all. That is not evidence obligations are
actions. **It is evidence there is nowhere to put them**, which is the argument for a
separate entity — and it matches the brief's own count: **302 of the 402 cannot be
actions under any scoping.**

---

## 3. What Beacon already has that we should reuse

Not to make obligations into actions — to avoid inventing words for things Beacon already
names, and to keep the two entities speaking the same language.

| Idea | Beacon already has it as |
|---|---|
| Who is responsible | `ResponsibleParty`, plus a default assignee (person, user or organization) |
| What proves compliance | `ExpectedEvidenceOfCompliance` |
| Where it applies | `Scope` (project / component / work area) |
| Time of year | `ProjectSeason` — a named window with start and end day/month |
| Phase of work | project milestones, with a start and an end |
| Kind of work under way | Construction Activities, already linked to requirements |
| Something a monitor saw | `Observation` — with a location, a date, a species, photos, and a **Concern** flag |
| Evidence with nothing to close | evidence can already attach straight to a Requirement |

Two of these are worth pausing on.

**Observations are real.** The obligations inbox prototype invented the idea of a
"trigger." It already exists: a monitor in the field files an observation, it carries a
species and a place and a time and a concern flag, and it is already linked to
commitments. Nothing needs building — it needs connecting.

**Evidence can already exist without something to close.** Everywhere else in Beacon,
evidence hangs off a dated item that it completes. But evidence can also attach directly
to a Requirement, with no dated item in between. That is the pattern an obligation needs,
and it is already there.

---

## 4. The three text fields are three different kinds of thing

This is the biggest problem with the current shape. Three columns of prose that are not
the same kind of object at all.

| Field | What it really is | Who reads it |
|---|---|---|
| **Standard** | the rule, in the permit's own words | anyone deciding whether they are compliant; an auditor later |
| **Condition** | what a monitor would see going wrong | **a monitor filling in a form in the field** |
| **Parameters** | the actual number | whoever has to pick, once |

### Condition is a form option, not a sentence

All 402 carry one, and they read exactly like the options on a field form — *"Active work
area unfenced or unflagged"*, *"Burrowing owl seen on or near site and not reported."*

That is what they are. The brief says the subject view "is the monitoring form." Beacon
already has a commitment-to-form mapping feeding the Fulcrum forms today, and the brief
says the registry could replace it.

**So a condition should point at a kind of observation, not just describe one.** If it
does, the loop closes on its own: a monitor logs an observation → the observation's type
identifies the condition → the condition identifies the obligation → the evidence lands
on the right duty without anyone filing it. Left as prose, that can never happen and
somebody has to connect every record by hand.

### Parameters is an unmade decision, not a description

232 of the 402 (58%) have one, and they read like *"10 mph in the ITP, 15 mph in the BiOp
and EIR."*

That is not a description of the rule. **It is two numbers and nobody has chosen.**
Recorded as a sentence, it looks like documentation and quietly is not.

It should be **a number, its unit, and which document it came from**, with the other
values kept underneath as history and a flag saying the sources disagree. The rule for
choosing already exists in the brief — *the stricter one governs* — so only the modelling
is missing. Somebody has to pick, because a monitor cannot enforce a speed limit that is
two numbers.

### And a question about Class

Adhere / Monitor / Notify / Roster may not need to be a field someone sets:

- **Notify** — it has a reporting deadline
- **Monitor** — it has a schedule
- **Roster** — it is a qualification held *before* work starts, not during it
- **Adhere** — everything else

Three of the four can be worked out from other fields. Worth deciding whether class is
something stored or something computed, because that decides whether a person can ever
set it wrong.

---

## 5. So what is an Obligation?

**An Action is a piece of work that finishes. An Obligation is a rule that is either on or
off.**

That single difference produces every other difference:

- An Action has a **due date**, and the thing you track is whether it got done.
- An Obligation has no due date and never gets done. What you track instead is **whether
  it is on right now**, and **what evidence turned up while it was on**.

### What an Obligation holds

**Identity and meaning**

| Field | Notes |
|---|---|
| Title | a noun naming the thing governed, never the value — *"Speed limit on unpaved roads"* |
| Standard | the rule in the permit's words |
| Class | Adhere / Monitor / Notify / Roster — see the question above |
| Lineage | the commitments and source documents that state it. One obligation, many commitments — 3.16 on average, and 92 of them have five or more |

**The categories it files under** — an obligation belongs to every one that fits, so the
registry can be entered from whichever direction a reader thinks in:

| Axis | Size |
|---|---|
| Subjects | 17 major, 69 minor |
| Activities | 34 in 7 groups |
| Species | 35 in 6 taxa |

**When it is on** — this is the piece that replaces a due date, and the most important
thing to get right:

| Part | Beacon has it as |
|---|---|
| Time of year | `ProjectSeason` |
| Phase of work | milestone start and end |
| Kind of work | construction activities |
| Waiting on an approval | an Action that must be approved first — 17 of the 402 |
| An event happened | an `Observation` |

**What proves it** — expected evidence, and for a Monitor obligation, how often the
evidence should arrive.

**The details a person acts on**

| Field | Notes |
|---|---|
| Condition | points at a kind of observation |
| Parameter | number + unit + source document, with the losing values kept and a flag when they disagree |
| Notice window | Notify only — the clock. 26 of the 50 Notify duties are owed within a day |
| Installed control | a flag, not a class — fencing, signage, screens, kits. 46 of the 402 |
| Responsibility and scope | same fields Actions use |

**What it deliberately does not have:** a due date, a completion date, a sequence number,
or a status. The team already dropped the status model on 2026-09-03 — this is why that
was right. Status describes a piece of work that can finish, and there isn't one.

### The one distinction that does the most work

Some obligations are on because of **a state**: a season is open, a phase is running, a
crew is doing ground disturbance. Speed limits, buffers, spill kits.

Others are on because of **an event**: somebody saw an owl, a fish was injured, a
threshold was crossed.

**That split is not a detail. It decides how a duty reaches a person** — a state-based
duty is background you need to know about, an event-based one arrives and starts a clock.
It also gives us the fourth feed view for free (§7).

---

## 6. What this means for the setup wizard

Approving *applicability* — which the current step 5 prototype does — is the easy half,
and mostly inherited from what the project does.

**The hard half is three things the prototype does not ask for:**

1. **When is it on?** Seasons, phase, activities, and whether it waits on an approval.
   Without this nothing can ever say whether a duty applies today.
2. **Which number?** 232 conflicts, each needing one decision. This is the only moment it
   can happen before a monitor in the field needs the number.
3. **Which observation does this condition correspond to?** Without it, the field loop
   stays open and every record gets connected by hand forever.

Worth flagging: I previously argued those 232 "conflicting values" rows were not the
step's work. **They are.** They are the largest piece of real decision-making in it.

---

## 7. What this means for the feed

**Trigger is a view, not a new entity.** Observations already exist and already link to
commitments. A trigger is an observation, matched through its condition to the obligations
it switches on.

The four views:

| View | What it is |
|---|---|
| **All** | everything on right now |
| **Important** | the reader's own slice — see below |
| **To-do** | **Notify duties that have fired.** Note these stop being obligations at that point: the brief says a fired Notify **creates a dated Action**. That is why a to-do can have a deadline and be finished — it is an Action, born from an Obligation |
| **Standing** | the duties switched on by a **state**, not an event. In force because a season or a phase or an activity is |

**"Standing" needs no pinning.** The set can be worked out: it is every obligation whose
"when is it on" has no event in it. Speed limits, buffers, spill kits, training records.
"Standing" is the brief's own word — it calls an obligation "a standing duty" — and it
beats *Pinned*, which sounds like something a user did by hand.

**"Important" needs a configuration, and the entity says what it can be built from:**

- subject areas and minor subjects — *"I look after Birds and Water"*
- species — *"this project has burrowing owl and giant garter snake"*
- construction activities — *"I am on the barge crew"*

Those three are role-shaped, and they are the honest basis for something a person saves
once: a person owns a slice of the registry, and Important is their slice, currently on.

Two more signals exist — how short the notice window is, and whether a monitor flagged an
observation as a concern — but those are **severity**, and severity probably belongs in
how All is sorted rather than in a view of its own.

**Dropping "seen" and the filing verbs fits all of this.** Nothing is owed to a feed, and
a standing duty is still on tomorrow, so marking it seen never meant anything. The thing
that *can* be completed is a to-do — and a to-do is an Action, which already has a real
status model.

---

## 8. Questions left for the team

1. **Is Class stored or worked out?** Three of the four can be derived from other fields.
2. **Who maps conditions to observation types?** This is the field loop, and it is what
   would replace the commitment-to-form mapping Fulcrum uses today.
3. **Who resolves the 232 number conflicts, and when?**
4. **Location and weather** are named in the brief as things that switch a duty on, and
   Beacon models neither. Do they matter enough to build?
5. **Is "on right now" worked out live, or recorded?** Recording it gives you history and
   lets you show an auditor it was on for a given date; working it out live is cheaper and
   always current.
6. **Does Important belong to a person or a role?** Per person is kinder; per role
   survives someone leaving.
7. **Have the 402 been checked against a real Beacon project?** They came from permits,
   not from the database, and the gap has never been measured.

---

# Revision — 2026-09-09

**This session interrogated the notes above against `origin/develop` and the source docs.
Most of it holds. Three things are corrected, one is retracted outright, and four questions
were settled by Kim.** Nothing was built.

## A. Verified against prod

| Claim above | Verdict |
|---|---|
| `Observation` is real and carries species, place, time, a concern flag | **Confirmed** — and stronger than claimed, see below |
| Evidence can attach with nothing to close | **Confirmed** — `RequirementEvidenceOfCompliance` |
| `ProjectSeason`, milestones, construction activities model the in-effect parts | **Confirmed** — `ProjectSeason` carries StartDay/Month, EndDay/Month, a `Tracked` flag |

**The observation-to-commitment link is further along than §3 says.** `ObservationCommitment`
exists, and `Observation.ListWithRelevantCommitmentsForProjectAsync` already returns each
observation *with the commitments it triggers*, by two mechanisms: **explicit links entered
in Fulcrum by the monitor** (BCN-911) and a **species bridge** (BCN-913 — the observation's
`ProjectSpecies` is targeted by a commitment's requirement, scoped to commitments applicable
to the observation's Component). `ObservationComplianceDto`'s own comment describes it as
"a single species observation or compliance concern (**the parent**) together with the
commitments it triggers (**the children**)" — which is the inbox's thread model, already
shipped.

## B. Corrections

**1. The "as needed" story in §2 is wrong in its mechanism, right in its conclusion.**
As-needed does not silently make nothing forever: `CreateAsNeededImplementation` /
`DeleteAsNeededImplementation` let a user hand-create instances, and `AsNeededEventTrigger`
is **required and validated on publish** (`ActionPublishValidator:143`, `ActionPutValidator:166`),
stored on `ActionSchedule`, displayed back. What is true is that **no code branches on its
content** — Beacon makes people write down the trigger and then cannot fire on it, while
`Observation` + `ObservationCommitment`, the machinery that could, sits one join away.
Worse for Beacon, better for the argument.

**2. The brief is wrong about Action status, and it changes the entity argument.**
The brief says Actions run *Not started / In progress / Submitted / Approved / Done*. Prod has
`ActionImplementationStatus` = **NotStarted / InProgress / Completed** — three values, on the
**instance**. `Action.ActionStatusID` is **Draft / Published**, an authoring lifecycle.

So "Obligations have no status" is **not** the divergence — *Actions have no status either*.
An Action is a template; status is a property of the instances it spawns. The correct
statement: **an Action spawns enumerable instances and status lives on them; an Obligation
spawns none, so there is nowhere for status to live.** Same conclusion the team reached on
2026-09-03, now resting on the schema rather than on taste.

**3. `ActionSchedule` already tried to be an Obligation, and the schema shows where it gave up.**
Action is three tables: `Action` (identity, evidence, scope, responsibility — **no dates, no
progress**), `ActionSchedule` (1:1, a `FrequencyID` discriminator over four mutually-exclusive
column groups), `ActionImplementation` (1:N — where every date lives). By column count:

| Frequency | Columns modelling it |
|---|---|
| Onetime | 5 — milestone, offset, unit, direction, isRange |
| Recurring | 5 — interval, unit, start/end milestone, day-of-month |
| **Ongoing** | **2** — start milestone, end milestone |
| **AsNeeded** | **1** — `AsNeededEventTrigger VARCHAR(MAX)`, prose |

Ongoing and AsNeeded *are* the state-based and event-based obligation. They are the two modes
that do not work and the two the schema barely models. **That is the case for a separate
entity, in one table.**

**So: an Obligation is an Action with the two satellites replaced.** The `Action` table itself
— name, standard text, expected evidence, scope, responsibility, requirement links — transfers
nearly wholesale. What diverges is *when* (a schedule producing dates becomes an in-effect
predicate producing a boolean over time) and *instances* (countable and closable becomes none;
evidence attaches directly, the 6th anchor in an existing join-per-anchor pattern).

## C. Retracted — condition should NOT point at an observation type

§4 above argued a `condition` should point at a kind of observation so the field loop closes
itself. **That was an inference, not something the docs asked for, and it does not survive.**

The docs say only that condition is *"the non-compliance a monitor observes … which is what
the monitoring form dropdown shows."* The observation-type pointer was added on top.

It is not needed: **the loop already closes through commitments.** Explicit Fulcrum links and
the species bridge connect observation to commitment, the 402 carry commitment codes (90%
resolvable), so observation → commitment → obligation runs end to end today. Neither path uses
`ObservationType` — it is a raw string the backend deliberately leaves unclassified.

The one problem the idea would have addressed is fan-out:

| Path | Obligations raised per observation |
|---|---|
| Explicit commitment link | mean **4.07**, median 3, max 27; 25% of commitments raise exactly 1 |
| Species match | mean **18**, top species 58 (Giant garter snake, California tiger salamander) |

But **the in-effect predicate narrows that better and is needed anyway** — of a snake's 58
duties the right filter is *which are on right now*, not *which sentence resembles the sighting*.
Building a second matcher for a job the predicate already does is the wrong order.

**A finding that complicates the docs' own claim:** all **402 conditions are distinct** — 402
unique sentences, no repeats. That is not a dropdown. It could become one grouped by minor
subject (69 groups, ~6 each), but as authored it is prose per row, and nobody has scoped the
normalization.

**What condition is actually for:** the feed **row label** — the only field written in the
monitor's voice, and far more useful than permit text for saying what to look for — and the
**Fulcrum form-generation** story, which is a different surface and should not be smuggled
into this entity.

## D. Settled by Kim, 2026-09-09

1. **No status model, and no appetite for one.** The registry applies and views obligations;
   the feed displays them. If a status turns out to be wanted later, that is its own effort.
2. **"Important" is a per-user view.** Nothing lands on the entity — it is a saved slice over
   the registry axes intersected with what is in force.
3. **The feed shows Obligations, not Actions.** A To-do row may *link* to an Action if one was
   created, but the surface is fundamentally about Obligations.
4. **Location and weather are not real yet** and need their own discussion. Noted against the
   data: over the 1,806 stated duties the specimen counts triggers as Activity 552, **Event 465,
   Location 306**, Season 223, Weather 61 — so location is the third-largest trigger and larger
   than season. Deferring it is a choice with a cost, not a footnote.

### The feed, restated in Kim's own framing

**"A timeline, or an inventory in the case of Standing."** That is what replaces status:

- **All / Important / To-do are a timeline** — rows are *events*, each carrying the obligations
  it switched on. **The Obligation holds no time; the event does.**
- **Standing is an inventory** — obligations in force because of a *state* (season, phase,
  activity, an approved gate). No event, no time, nothing to order by. Just what is on.

No verdict and no status field is required. What is required is the predicate, and its two
halves land in two different views.

## E. What the source docs say about the Notify handoff (worked chain D)

The specimen's chain **D. Notification of Take or Injury** splits into both entities:

| Record | Kind | Key fields |
|---|---|---|
| **O3** Written incident report to CDFW | Obligation, Class Notify | Satisfies **R3**. *In effect: Event: take, injury or carcass found.* Window: two business days |
| **A1** Written incident report | Action | Satisfies **R3**. Timing: two business days after each event. **Scope: Per event. Spawned by: O3** |

Both satisfy the **same requirement**. The obligation is the standing duty; the Action is the
concrete firing. `Spawned by` is an explicit field on the Action. Consequences:

- **Window is a duration, not a date.** O3 holds "two business days", the event supplies the
  anchor, A1 holds the absolute due date. The only time-shaped field on an Obligation is relative.
- **One event fires several obligations.** O1, O2 and O3 share the identical
  `In effect: Event: take, injury or carcass found` — the feed's parent/children thread model
  is in the source docs, not invented by the prototype.
- Rather than inventing an occurrence table, the model borrows Action's existing machinery to
  make a firing countable.

## F. Where the 402 actually come from — and the gap this exposes

**They are not Beacon app data.** They are one analyst's hand-authored reading of five permit
documents, embedded as a `<script id="registry-data">` JSON block inside
`actions-obligations-2026-09-02.html`; `scripts/extract-obligations.mjs` copies that block out
verbatim and fails if the counts move. The chain that produced them: 5 source documents to 391
commitments, reading yields **1,806 stated duties**, collapsing repeats (the same duty restated
by ~4.5 commitments) yields **402 unique obligations**.

The only part touching real Beacon data is the lineage: the commitment codes resolve **90%
(1,138 / 1,270)** against `src/data/dcp-commitments.json`, which is the real DCP commitment
register (real source-document filenames, committed as "real data").

**Neither source doc says how obligations get created in the product.** The brief's open
question 5 covers only *migration* of existing field-type actions. This is a genuine hole.

**But prod has an exact precedent nobody has connected to obligations.** Beacon already derives
Actions from Requirements with an LLM:

```
source document
  -> RequirementExtractionService (AI)   [RequirementExtractionStatus: NotStarted/InProgress/Completed/Failed]
  -> Requirements  -> human approves
  -> ActionExtractionService (AI): "group a filtered set of approved Requirements into proposed Actions"
  -> Action rows: IsAIProposed = true, ActionStatusID = Draft
  -> human reviews and publishes
```

Details worth keeping: proposals land as **Draft + AI-proposed, never published directly**;
`ActionRequirement` join rows record which requirements each proposal covers; "Suggest Another"
**accumulates rather than replaces** and re-running the same extraction is idempotent; every
creation writes `ActionAudit` rows.

### The tension this creates with step 5 — unresolved

The built step-5 surface rests on **"everything starts included, because the registry is
authoritative and the job is finding what does not apply."** That premise came from treating
the 402 as given truth.

If obligations are instead **AI-proposed from approved requirements**, the same way Actions
are, then they arrive as **drafts needing approval**, and step 5 is the obligation sibling of
the AI-draft review board rather than an applicability filter over authoritative rows. Those
are different defaults and different surfaces.

**Which it is has never been decided.** It is now the most consequential open question in this
work, because it determines whether the registry is curated content or model output.

## G. Open, carried forward

- **How are obligations populated in the product?** (§F — the live question.) AI-proposed from
  requirements like Actions? Authored by a curator? Imported per tenant?
- **Where do in-effect conditions get authored?** They exist on the five hand-worked chain
  examples and on **none of the 402 registry rows**. The specimen reports aggregate trigger
  counts but the field is per-row absent. This is why the inbox had to invent triggers, and it
  is the main obstacle to prototyping the feed on real data.
- **Is `Spawned by` the relationship we want?** It makes Notify the only class that hands its
  work to the other entity. (Held at Kim's request, 2026-09-09.)
- **Do Condition and Parameters belong on the entity at all?** The worked chains include
  neither; the registry has condition on 402 and parameters on 232. They may belong to the
  monitoring form and the conflict-resolution surface. (Held at Kim's request, 2026-09-09.)
- **Monitor obligations need an expected evidence cadence** — the brief asserts "in compliance
  while data arrives on cadence" but lists no cadence field. Without it the Monitor class
  produces no feed signal.
- **Severity has no field.** Currently derived by regex over standard text (20 rows mentioning
  take/injury/mortality). If severity orders the feed, that ordering rests on string matching.
- Location and weather (§D.4).
