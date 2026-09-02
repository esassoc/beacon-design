---
title: Actions and Obligations
date: 2026-09-02
status: proposal, shaped against Delta Conveyance data
specimen: /Users/andrewlovseth/Dev/andy-work/projects/beacon/reference/2026-09-01-actions-obligations.html
research: /Users/andrewlovseth/Dev/andy-work/projects/beacon/research/2026-09-01-dcp-obligations-taxonomy.md
registry: /Users/andrewlovseth/Dev/andy-work/projects/beacon/research/2026-09-02-dcp-obligations-registry.json
---

# Actions and Obligations

Beacon tracks compliance today through one entity, the Action, and one surface, a three-column tracker. That works for plans, reports, submittals and approvals. It fails for the larger half of what a permit demands: speed limits, buffers, work windows, spill kits, daily inspections, take notices, training records. Those never close, happen an unknown number of times, and have no deliverable. Clients build "field" actions for them, the tracker shows nothing useful, and the compliance question a monitor actually asks, "are we in compliance right now," has no home.

The proposal splits tracking into two record types, each with its own status model and its own surface.

## The two records

**Action.** Work someone can start, with an owner and a due date that is fixed, milestone-relative, or recurring. It satisfies one or more requirements and closes when the deliverable or evidence is in. Status: Not started, In progress, Submitted, Approved, Done. Examples: a Barge Operations Plan, a Phase Authorization Package, the Monthly Compliance Report, a mitigation acreage delivery.

**Obligation.** A standing duty in effect while its conditions apply. It never closes. Evidence arrives from the field and status is derived, never dragged. Status: Not in effect, No evidence, In compliance, Out of compliance. Examples: a 10 mph speed limit on unpaved roads, a 250-foot vernal pool buffer, a daily exclusion fence check, a take notice to CDFW within 24 hours.

Both sit under the library records Beacon already has (Source document, Commitment, Requirement), both are implemented at project, component, or work area scope, and both produce Evidence of Compliance.

The line between them is countability. If the instances can be listed up front (once, per component, per phase, monthly), it is an Action. If they depend on events nobody can schedule (per rain, per encounter, per day of work), it is an Obligation.

## Obligation fields

Title, a noun phrase naming the thing governed and never the value ("Speed limit on unpaved roads and sites"). Standard, the requirement text. Condition, the non-compliance a monitor observes ("Vehicles exceed the posted speed limit"), which is what the monitoring form dropdown shows. Parameters, where sources disagree (10 mph in the ITP, 15 mph in the BiOp and EIR). Class. Subjects, activities, species. In-effect conditions (phase, season, activity, location, weather, event). Responsibility. Evidence source. Notify window. Scope.

## Classes

Four classes, system-owned, driving the tracker view, the evidence shape and the status derivation.

| Class | Definition | Evidence | Status |
|---|---|---|---|
| Adhere | A rule the work follows while its conditions apply | Inspection records, monitor logs, absence of logged concerns | In compliance while no concern is logged during an in-effect period |
| Monitor | A survey, inspection or watch on a cadence or trigger | Survey records, inspection logs, instrument data | In compliance while data arrives on cadence |
| Notify | A report owed when an event occurs, within a window | The notice and its timestamp against the event | Each instance closes inside its window; late or missing is out |
| Roster | A qualification every person or piece of equipment holds before it works | Signature sheets, approvals, affidavits, certifications | Out the moment someone on site lacks the record |

## The registry

Obligations live in one authoritative registry that a reader can enter from any axis their mental model uses. Categories are nouns of three kinds, and an obligation belongs to every category that fits:

- **Subjects**, the thing protected or governed, in a major and minor hierarchy (17 majors such as Air quality, Birds, Hazards, Water; 69 minors such as Fugitive dust, Nesting birds, Speed limits, Dewatering).
- **Activities**, the work during which the duty applies (34 in 7 groups: Ground disturbance, Pile driving, Barge operations, Night work, Surveys, Notifications, Training).
- **Species** (35 in 6 taxa), derived from each obligation's species list.

The subject view is the monitoring form: what a monitor observes. The activity view is the contracting checklist: pick Pile driving and get every obligation a contractor doing that work carries. Class is a field, not a tier. Categories and obligations are alphabetical so the registry reads as an index.

The commitment category mapping that feeds the Fulcrum forms today is the condition-form projection of this registry; the registry can replace it or generate it.

## Handoffs

Three relationships connect the two record types.

1. **Approval gate.** An obligation whose in-effect condition is an action's approval. Barge operations, dewatering, in-water work and owl exclusion all wait on an approved plan.
2. **Triggered submittal.** A Notify obligation that fires creates a dated action. A take on Tuesday creates a written incident report due Thursday.
3. **Evidence roll-up.** Monitor obligations produce the records that recurring report actions compile: daily compliance monitoring into the Monthly Compliance Report into the Annual Status Report.

The recurring text pattern "develop and implement X" is the split in one sentence: develop is the Action, implement is the Obligations the approved plan releases.

## Rules

- **Coverage.** Every applicable requirement has at least one Action, or at least one Obligation, or an explicit not-applicable with a reason.
- **Normalization.** One Action or Obligation may satisfy many requirements from many source documents. Duplicates across the EIR, the ITP and the BiOps collapse into one record with full lineage.
- **Registry.** An obligation appears under every category that fits. A species is a minor subject only where its protocol is its own thing (Burrowing owl, Giant garter snake, Sandhill crane, Bats); elsewhere species is a parameter.

## What the Delta Conveyance data says

391 commitments across five source documents (ITP, EIR, USFWS BiOp, ITP Amendment, NMFS BiOp).

| Measure | Count |
|---|---|
| Stated duties | 488 actions, 1,806 obligations |
| Obligations after normalization | 402 (Adhere 225, Monitor 103, Notify 50, Roster 24) |
| Commitments yielding both kinds | 47% |
| Commitments yielding only obligations | 34% |
| Commitments yielding only actions | 16% |
| Obligations that are continuous rules or event-triggered | 302 (75%) |

The 302 cannot be actions under any scoping. The 79 percent obligation share by stated duty is mostly source fan-out: the same duty restated by 4.5 commitments on average; counting each once, the record split is about 53 percent actions to 47 percent obligations. One BMP commitment unpacks to 25 to 33 duties, which is the normalization payoff and the reason field-type actions overwhelmed.

Source conflicts surface for free: speed limit 10 versus 15 mph, rain thresholds, take notification windows. The registry keeps both values with lineage; the stricter governs.

## Decisions made while shaping (2026-09-01 and 02)

- Names are Actions and Obligations. Users not knowing the words is an onboarding problem, not a model problem.
- Obligations are nouns; Actions are verbs.
- The registry is three levels: major category, minor category, obligation, with categories atomic.
- Class is a field on the record, not the top of the outline.
- Obligations belong to many categories (subject, activity, species) so the index answers from any axis.
- Installed controls (fencing, signage, screens, kits) are a flag on an Adhere obligation, not a fifth class.

## Open questions for the epic

1. Class set fixed at four, or five with Installed controls promoted.
2. Category lists per tenant: system defaults, editable, or fixed. A small project would use a dozen minors.
3. Species parametrization: one obligation with a parameter table, or one per species.
4. Approval gates as a first-class relationship between an Action and the Obligations it releases.
5. Migration: existing field-type actions become obligations; reconciliation tooling becomes a dependency.
6. Whether per-site obligations (fence at each site, survey before each site starts) live as Actions with per-component implementations or as Obligations scoped to a component.

## Related

- Specimen with the model, the registry tree, five worked chains and source conflicts: see `specimen` in the frontmatter.
- Research note with method, counts and the full category tables: see `research`.
- Registry data, 402 obligations on three axes: see `registry`. Import it for prototypes rather than inventing rows.
- Setup Wizard step 4 shaping: `andy-work/projects/beacon/shaping/setup-wizard-actions.md`.
- Decisions 2026-08-10 (CASP funds the actions rework) and 2026-08-13 (type-specific tracker views; component dashboard scoping): `andy-work/projects/beacon/decisions.md`.
