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
      label: 'Review progress',
      selector: '.bcn-rp',
      intent:
        'The lead band: how much of the registry has been decided, the scale it covers, and the one line that reconciles two counts which otherwise look like a bug.',
      decisions: [
        'IT MIRRORS PROD’S OWN SETUP-STEP HEADER, which reads "{total} commitments · {confirmed} confirmed · {pending} pending review". Same three figures, because the unit of work is the DUTY: pending until somebody approves it or marks it not applicable, and progress is how much of the registry has been decided either way.',
        'THE RECONCILIATION LINE IS LOAD-BEARING, not editorial. The area counts below sum to 613 while the registry holds 402 duties, because 188 are filed under more than one subject. Unexplained, that reads as a broken count. It is the same discipline the Applicable Commitments drawer applies to its segment counts: a figure and the list under it may never appear to disagree.',
        'One instruction line, naming the two gestures the surface supports. It does not explain what an obligation is — the registry below states what it is.',
        'No compliance status anywhere. Obligations carry no verdict by decision (2026-09-03), and "applies / does not apply" is scope, not performance.',
      ],
      gotchas: [
        'EVERY FIGURE IS RE-LABELLED OFF THE RENDERED TREE, never from a parallel total, so the headline cannot drift from the list beneath it.',
        'esa-badge must be re-labelled through its inner .esa-badge__text span. Writing to the badge root replaces that span with a bare text node — the label still READS correctly, so the breakage is invisible, but the lego\’s structure is gone.',
        'Every figure counts DISTINCT duties, not rendered rows. Deciding one duty filed under two areas moves the figure by one even though two rows change on screen.',
        'esa-progress-bar renders a static value snapshot; live updates mean writing aria-valuenow, the fill width and the printed percentage together, or the bar and its label disagree.',
      ],
      acceptance: [
        'Loads reading 0 approved, 0 not applicable, 0 of 402 decided, bar at 0%.',
        'The reconciliation line states 188, 613 and 402.',
        'Approving the 25-duty Air quality area moves Approved to 25 and Decided to "25 of 402".',
      ],
    },
    {
      label: 'The registry',
      selector: '.bcn-rt',
      intent:
        'The registry as a nested tree — 17 subject areas over 69 headings over 402 standing duties, each duty a one-line row opening in place to its record — with a toolbar carrying selection, the bulk verbs and expand/collapse.',
      decisions: [
        'ONE COMPONENT, TWO MODES. BcnRegistryTree takes mode="review" (here: selectors, bulk verbs, per-area approval) or mode="browse" (the read-only registry at /prototypes/obligations-registry: same tree, same records, nothing to decide). Build it as one configurable component, never as two surfaces — they will drift.',
        'THE SHAPE COMES FROM THE PROPOSAL DOCUMENT (actions-obligations-2026-09-02.html, §Obligations Registry): three levels of disclosure, a count beside every name, duties opening to a key-value record, and expand/collapse-all because 86 grouping nodes is more than anyone clicks through. The CHROME does NOT come from that document — it is a content source, not a UI pattern source, and an earlier pass that copied its markup hand-rolled carets, disclosure summaries and a definition list the design system already provides.',
        'SELECTION IS A SELECTION, NOT A DECISION — prod’s model, and the one BcnSetupWorkspace already implements. A duty is PENDING until somebody acts; the checkbox marks it for a bulk act; Approve and Not applicable are the acts. An earlier pass made the checkbox itself mean “applies”, which left select-all with nothing to mean.',
        'THREE APPROVAL SCOPES, mirroring prod’s “Approve all (N)”: the selection, one subject area, or the whole registry. The registry-wide button hides while a selection is live so the toolbar never offers two competing approvals at once, and every label counts PENDING duties only.',
        'SELECT-ALL TAKES WHAT IS VISIBLE, never the hidden remainder — the rule BcnSetupWorkspace set. A control that silently reaches into a collapsed branch is a trap. Collapsing a branch therefore recomputes the toolbar.',
        'THE DECISION IS ON THE DUTY, NEVER ON THE PLACEMENT. 188 duties sit under two or three areas, so the same duty appears more than once and every write fans out by id. Deciding 16 duties can paint 34 badges — that is the fan-out working, not a double count.',
        'A decided duty leaves the selection: leaving it ticked invites the same act twice.',
        'An excluded duty stays legible and struck through rather than disappearing — a decision to see and undo. Approved does NOT dim, because approved is the expected outcome.',
        'No compliance status anywhere. Obligations carry no verdict by decision (2026-09-03); Approved / Not applicable is SCOPE — whether the duty is this project’s — not performance against it.',
      ],
      gotchas: [
        'COMPOSE, DO NOT REBUILD: esa-collapsible is all three disclosure levels AND the duty’s Details, esa-checkbox the select-all and every row selector, esa-button every verb, esa-badge the decision marker and class chip, BcnCommitmentBadge every commitment code, BcnKeyValue every field in the record. What is left as CSS is composition glue — the toolbar row, the branch indentation, and the checkbox-beside-content row grid.',
        'esa-collapsible takes `title` as a plain STRING with no slot, so a branch count goes IN the title (“Birds (62)”) and a branch’s Approve button lives in the first row of its BODY — which also avoids a click on the verb toggling the disclosure on its way to doing its job.',
        'EXPAND-ALL MOVES ONLY THE TWO GROUPING LEVELS. Opening 402 duty records is not “expand”, it is a wall.',
        'The `toggle` event does NOT bubble — listen in the capture phase, or collapsing a branch silently leaves select-all claiming rows nobody can see.',
        'esa-badge must be re-labelled through its inner .esa-badge__text span. Writing to the badge root replaces that span with a bare text node — the label still READS correctly, so the breakage is invisible, but the lego’s structure is gone.',
        'esa-button declares its own display and CANNOT be hidden by the `hidden` attribute — wrap it in an element you own. Any element with an author display rule toggled via `hidden` also needs :not([hidden]) on that rule.',
        'A click handler must not call .closest() on event.target unguarded — with nothing focused that target is the document, which has no closest(), and the throw silently kills every control on the surface.',
        'BOTH decision badges are rendered on every row and hidden; the controller reveals one. It never builds markup — a panel assembled from a template literal bypasses the design system and no gate can see it.',
        'PAGE WEIGHT is the cost of server-rendering everything: 691 duty placements and ~1500 <details> elements. Deliberate here. In the Angular app, render areas and headings eagerly but defer each heading’s duty rows until it opens — invisible to the user, because headings ship closed.',
      ],
      acceptance: [
        'Seventeen subject areas render open, each listing its headings with counts; headings and duty records render closed.',
        'With every heading collapsed, select-all selects nothing; opening one heading and selecting all takes exactly its rows and the count line reads “N selected”.',
        'Approving a selection badges those duties, clears the selection, and moves the lead band; approving one area badges the area and swaps its button for “N duties approved”.',
        'Approving 16 duties that are filed twice paints 34 row badges but moves the approved figure by 16.',
        'The registry-wide Approve all button counts pending only, and disappears whenever a selection is live.',
        'On /prototypes/obligations-registry the same tree renders with no checkboxes, no bulk verbs and no approve buttons.',
      ],
    },
  ],
};
