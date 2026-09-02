---
title: Actions and Obligations prototypes
date: 2026-09-02
brief: docs/actions-obligations-brief.md
data: /Users/andrewlovseth/Dev/andy-work/projects/beacon/research/2026-09-02-dcp-obligations-registry.json
---

# Actions and Obligations prototypes

Read `docs/actions-obligations-brief.md` first. It defines the two record types, the four classes, the three-axis registry, the handoffs, and the numbers. Everything below assumes it.

## Repo state on 2026-09-02

- `main` is current and published to gh-pages: the monitoring rebuild, the component handoff notes, the due diligence bundles and the Permitting module are all in. Build green, 213 pages, zero deprecations. `feat/card-meta-migration` is level with main and can be deleted.
- Start the actions work on a new branch from `main`.
- Pushing needs the ESA GitHub account active: `gh auth switch --user andrewlovseth-esa` (the repo's credential helper is gh). Switch back to `andrewlovseth` after.
- The deploy gate (`npm run deploy`) wants curated handoff specs for three prototypes that have none: `monitoring-data`, `permitting-dashboard`, `permitting-details`. Write `src/data/handoff/<slug>.mjs` for each, or add the slugs to `scripts/handoff-guidance-baseline.mjs`; today's publish bypassed the gate once with `HANDOFF_SKIP_GUIDANCE=1`.

## Before building

- Load `component-first` and walk the lookup order in `CLAUDE.md`. Reuse `requirement-tracker.astro` (Grid, Kanban, Timeline toggle), `project-dashboard.astro`, `component-dashboard.astro`, `data-catalog-action.astro`, `data-catalog-actions.astro` and `BcnSetupWizardCard.astro` as the pattern anchors.
- Copy the registry JSON into `src/data/` and load it. It carries 402 obligations with title, class, standard, condition, parameters, species, window, commitments, gate and installed-control flags, and category ids on three axes. Use real rows; do not invent obligations. Tenant naming rule from `prototypes.ts` applies: no tenant names in titles or descriptions, though commitment ids and species in the data are fine.
- Prototypes cap at one day each (decision 2026-08-10). Where a surface needs more, split it and say so.
- Register every page in `src/data/prototypes.ts` under one group, "Actions and Obligations".

## The surfaces, in order

### 1. Obligations tracker (new)

The surface the proposal exists for. A dashboard, not a board: nothing here is dragged.

- Registry tree as the spine, with the Browse-by control (Subject, Activity, Species), keyword filter, group and class filters, and expandable rows, as in the specimen's registry section.
- Each obligation carries a derived status: Not in effect, No evidence, In compliance, Out of compliance. Status comes from the class rules in the brief and from evidence recency; show the last evidence date and source (monitor log, survey record, notice timestamp, roster record).
- Top of page: what is in effect now. Phase and season filters set "now"; the count of in-effect obligations, the count out of compliance, the count with no evidence while in effect. Roll-ups per major category.
- An exceptions list: out of compliance and no-evidence-while-in-effect, sorted by age, each row linking to its obligation and its evidence.
- Notify class shows open windows: the triggering event, the deadline, whether the notice went out.
- Approval-gated obligations show the action they wait on and its status.
- Scope selector (project, component, work area) reusing the existing scope pattern.

### 2. Actions tracker (updated)

The board, updated rather than rebuilt.

- Kanban by default with the five statuses: Not started, In progress, Submitted, Approved, Done. Grid and Timeline stay as alternate views.
- Phase is the primary filter (decision 2026-08-13). Type gives the default view: plans and submittals on the board; recurring reports as a calendar or timeline of instances; one-time installations as a checklist.
- Cards carry owner, due (fixed, milestone-relative, or recurring), deliverable, recipient or approver, and the count of requirements satisfied. A card that releases obligations shows that count and, on open, the list.
- Triggered actions (created by a Notify obligation firing) show their trigger and the window they inherit.
- Recurring actions show the current instance and the next.

### 3. Setup Wizard, step 4 and new step 5

Step 4 (Actions) follows the existing shaping in `andy-work/projects/beacon/shaping/setup-wizard-actions.md`: bucket by phase and type, orphan requirements beside actions, drag-drop, the single-shot AI helper, per-action review modal, Approve all, Finish Wizard.

Step 5 (Obligations) is new:

- The registry tree pre-populated from approved requirements, browsable by subject, activity or species, every obligation carrying its source lineage.
- Review verbs per obligation: approve, merge duplicates, split a compound rule, set parameters, recategorize, mark not applicable with a reason.
- A coverage meter: every applicable requirement has at least one action, at least one obligation, or an explicit not-applicable. Requirements failing coverage are listed.
- Per requirement, show the split: the requirement text, the actions it yields, the obligations it yields. "Develop and implement X" is the worked example.
- Finish Wizard becomes active when steps 4 and 5 both pass coverage.

### 4. Data Catalog

- Obligations list: teal grid like the Actions list, columns for title, class, major and minor subjects, activities, species, commitments, status.
- Obligation detail: title, standard, condition, parameters, class, subjects, activities, species, in-effect conditions, responsibility, evidence source, window; lineage to requirements, commitments and source documents; implementations per component with derived status; evidence list. Editing in a modal, matching the Action detail pattern.
- Action detail: add "Releases obligations" (the gate) and "Created by" (the Notify trigger) alongside "Satisfies requirements".
- Requirement detail: replace "the one linked Action" with the derived records, actions and obligations side by side, and the not-applicable state.
- Commitment detail: the requirement groups gain action and obligation counts.

### 5. Project and Component dashboards

- The tracking block splits in two. Actions: due soon, overdue, by phase, with the board as the jump-off. Obligations: in effect now, compliance state, exceptions, with the tracker as the jump-off.
- Component dashboard is the same block scoped to one component (decision 2026-08-13), with actions primary inside the block and obligations beside them.
- Reporting and monitoring blocks are unchanged.

## Out of scope

- AI grouping prompt or endpoint changes for the wizard.
- Per-tenant terminology aliasing for Actions or Obligations.
- Replacing the Fulcrum category mapping. Note where the registry would generate it; do not build it.
- Migration tooling for existing field-type actions.
- Work area detail pages.

## Success criteria

- A monitor can open the Obligations tracker, set phase and season, and read what is in effect and what is out of compliance without opening a row.
- A contractor can filter the registry by one activity and read every obligation that work carries.
- The Actions board is unchanged for a plan and different for a recurring report.
- Step 5 shows one requirement that yields both an action and obligations, and one that yields neither with a reason.
- Every page passes the component-first hook without a `bcn-lego-checked` escape that lacks a real reason.
