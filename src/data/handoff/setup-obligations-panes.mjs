// Handoff spec for /prototypes/setup-obligations-panes — the TWO-PANE ALTERNATIVE to step 5.
//
// The SHIPPING shape is the nested tree at /prototypes/setup-obligations. This sibling is
// kept for comparison: it trades the tree for prod’s other setup geometry — sidebar picking
// one subject area, main pane reviewing its duties. The applicability argument below is the
// same in both; only the navigation and the decision grain differ (this variant confirms an
// AREA, the tree approves DUTIES).
//
// Original header follows.
// Handoff spec for /prototypes/setup-obligations — project setup, step 5, where the 402
// standing duties get scoped to a project. Declares which regions are inspectable sections
// (by selector) plus the design intent, decisions, gotchas and acceptance a dev/Claude needs
// to re-implement each one faithfully in the Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by the browser.
//
// SCOPE. Steps 1–4 build the chain: source documents → commitments → requirements → actions.
// This is where the standing duties that fall out of that chain get scoped. The registry is
// NOT a page of its own (team decision, 2026-09-03) — it lives here. The flat 402-row data
// catalog is the filing cabinet; this hierarchical view is the registry. A standalone
// full-registry page is expected later and should reuse BcnRegistryTree without the confirm
// layer.
//
// WHY SUBJECT IS THE SPINE — the measurement that settled it (2026-09-08). An earlier plan
// made ACTIVITY the input axis ("which of these 34 activities does this project do?"). That
// cannot be asked and would not work:
//   - ProjectConstructionActivity is PER-PROJECT and HAND-AUTHORED (free-text name +
//     description, sort order, drag to reorder). There is no fixed taxonomy to tick, and the
//     project writes its own list on an earlier setup page. The 34 activity slugs in the
//     extract are specimen artifacts, not app entities.
//   - Activity does not narrow. Each duty carries 2.2 activities and the semantics are
//     disjunctive, so deselecting one mostly removes nothing: in-water-work is tagged on 30
//     rows and excluding it drops ZERO; the best single activity, diversions, drops 14;
//     excluding ALL marine, aerial and hazmat activities drops 34 of 402.
//   - Commitment is already step 2's job (the Applicable Commitments drawer), and 312 of them
//     is not a browsable spine.
//   - Subject is 17 majors over 69 minors, none bigger than 74 rows — the only grouping that
//     fits in a person's head.
// Note this is the SETUP job. Grouping by subject was rejected for the obligations INBOX,
// because 17 groups never shrink to a short daily list. Setup is the opposite task: you want
// all 17 in front of you, once, because the goal is not missing anything.
//
// DATA PROVENANCE. Every duty, heading, subject area, class, observable condition, gate flag
// and value-conflict flag is registry data, extracted from four real permit documents (ITP
// 177, EIR 129, ITP Amendment 36, USFWS BiOp 33). EXAMPLE: the tenant and project names in
// the shell, and the fact that nothing has been confirmed yet.

/** @type {{ sections: import('./requirement-tracker.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'The two-pane registry review',
      selector: '.bcn-registry-workspace',
      intent:
        'The registry itself and the thing this step approves: 17 subject areas over 69 headings over 402 standing duties, as a three-level disclosure tree. An area states its count, offers a single confirm, and opens to its headings; a heading opens to its duties; a duty opens IN PLACE to its record.',
      decisions: [
        'IT IS PROD’S SETUP-STEP SHAPE, PORTED — not a new surface. Every step of Beacon’s project setup renders `setup-wizard-sidebar` beside a main pane (`project-setup-layout`): the sidebar picks the record you are working through, the main pane does the step’s work on it. Source Documents picks a document, Commitments picks a commitment, Requirements picks a commitment; Obligations picks a SUBJECT AREA. The main pane then follows `commitments-step` / `requirements-step`: a header for the selected record (title + a counts line) over a list of its children. Match that, not something invented.',
        'IN THE SPOKE IT IS THE THIRD INSTANCE OF AN EXISTING FRAME, not a new one: bcn-registry-workspace is the direct sibling of bcn-inbox-workspace and bcn-triage-workspace, and the area rows use the same anatomy as bcn-inbox-queue’s. A fourth invented list shape would read as a different product.',
        'AN EARLIER PASS WENT WRONG BY COPYING THE PROPOSAL DOCUMENT’S OWN HTML. The specimen (actions-obligations-2026-09-02.html) is a content source, not a UI pattern source — chasing its look produced hand-rolled carets, hand-rolled disclosure summaries and a hand-rolled definition-list grid, all of which esa-collapsible and BcnKeyValue already provide. Take the specimen’s STRUCTURE (subject area → heading → duty, compact rows, detail on demand) and express it in the design system.',
        'THE USER IS DECIDING APPLICABILITY, NOT CORRECTNESS. The permit says what it says and the four classes are system-owned. Applicability is inherited from the work: if the project does no in-water work, the in-water duties are not theirs. Same job the Applicable Commitments drawer does at step 2, one level down the chain.',
        'EVERYTHING STARTS INCLUDED. The registry is authoritative, so the default is that a duty applies and the job is finding the ones that do not. Undecided-by-default would put 402 empty checkboxes in front of someone and call it a queue. Confirming an area is what records that a human looked, which is the only thing an auditor can be shown later.',
        'THE DECISION IS ON THE DUTY, NEVER ON THE PLACEMENT. 188 duties sit under two or three areas, so the same row appears more than once. Unchecking it anywhere unchecks it everywhere, because it is one duty. Each row names the other areas it appears in so the jump is not a surprise.',
        'CHANGING AN AREA UN-CONFIRMS IT. The person confirmed a set; once the set changes it is no longer that set.',
        'An excluded row stays legible and struck through rather than disappearing — it is a decision to see and undo, not a deletion.',
        'Confirmed state is a value-layered surface change, never a coloured left border, which is banned house-wide as a category or status device.',
      ],
      gotchas: [
        'TWO ROW MARKERS, NEITHER OF WHICH IS A DECISION. GATED (17 rows) means the duty does not take effect until an action is approved — a dependency. CONTESTED (232 rows) means the sources state different values ("10 mph in the ITP, 15 in the BiOp") — a conflict somebody must resolve, but a different job from applicability, and at 58% of the registry it is nobody\’s exception queue. An earlier plan made these two the "individual review queue"; they are not.',
        'esa-collapsible takes `title` as a STRING and has no slot in its summary, so an area\’s confirm control cannot live in the disclosure row and gets its own header row above it.',
        'esa-checkbox with no visible label must be named from the HOST via aria-label, which the lego forwards to its inner input. Passing `label` prints the duty title a second time beside the one already in the row.',
        'esa-button declares its own display and CANNOT be hidden by the `hidden` attribute — wrap it in an element you own and hide that. Any element with an explicit display rule toggled via `hidden` also needs :not([hidden]) on that rule.',
        'A keydown or click handler must not call .closest() on event.target unguarded — with nothing focused that target is the document, which has no closest(), and the throw silently kills the handler.',
        'An area\’s count and its confirm button are both recomputed from the rows, so a button can never offer to confirm a number its own list disproves.',
        'PAGE WEIGHT IS THE COST OF SERVER-RENDERING EVERYTHING: 777 <details> elements and 691 checkboxes, 2.0 MB decoded (152 KB gzipped), ~950 ms to load. Fine for a static prototype and deliberate — every panel renders at build time, because a panel assembled from a template literal bypasses the design system and no gate can see it. In the Angular app this is the one place to deviate: render an area’s headings eagerly but defer each heading’s duty rows until it opens, which is invisible to the user because minors ship closed.',
        '691 checkboxes render at build time (placements at the minor level, higher than the 613 area placements because a duty can sit under two headings of the same area). Every panel is server-rendered and the controller only reveals, hides and re-labels — a panel assembled from a template literal bypasses the design system and no gate can see it.',
      ],
      acceptance: [
        'Seventeen areas, alphabetical, from Agency reporting and approvals (53) to Water operations (28).',
        'Unchecking duty 2-094 under Agency reporting also unchecks it under Mitigation and restoration, marks both rows excluded, drops both confirm buttons by one, and moves the headline figure by exactly one.',
        'Confirming an area swaps its button for a badge reading "N duties confirmed"; unchecking a row inside it restores the button and drops the headline.',
        'The left pane lists 17 subject areas with a duty count and a heading count; the first is selected on load and the main pane shows it.',
        'Selecting an area in the left pane swaps the main pane and moves the current-row marker; no pane is ever built at runtime.',
        'Opening a duty’s Details shows Standard, Condition, then Parameters / Notice window / In effect / Installed control where present, then Activities, Species and "Also filed under" (comma-separated — several subject names contain "and" themselves), then a link to the full record.',
        'Confirming an area badges it in BOTH panes — the pane header and its row in the sidebar — and moves the sidebar’s own "N of 17 confirmed" line.',
      ],
    },
  ],
};
