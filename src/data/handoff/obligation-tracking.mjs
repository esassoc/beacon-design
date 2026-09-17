// Handoff spec for /prototypes/obligation-tracking — the awareness surface for the
// Obligation record type. Declares which regions are inspectable sections (by selector)
// plus the design intent, decisions, gotchas and acceptance a dev/Claude needs to
// re-implement each one faithfully in the Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by the browser.
//
// SCOPE: the whole page. It supersedes /prototypes/obligations-inbox, which is kept and
// archived so the two stabs can be read side by side. The inbox was right about the
// threading — an event is the parent and the duties it raised are its children — and wrong
// about the metaphor around it. Mail brings an Open/Seen pivot and a filing verb on every
// row, and neither survives contact with a standing duty: nothing is owed to a feed, and a
// duty in force today is still in force tomorrow whether or not you looked at it.
//
// WHAT REPLACES STATUS. Nothing here renders a verdict — the team dropped the
// compliance-status model, and the registry itself contains no status vocabulary. An
// obligation holds no time; the EVENT does.
//
// THE INVENTORY VIEW IS CALLED "ONGOING". It was built as Standing, removed on 2026-09-15
// and restored under Kim's name for it on 2026-09-16. Standing came from the proposal's own
// phrase ("a standing duty"); Ongoing is the plainer word for the same idea — what is in
// force right now, for as long as its reason stays true.
//
// THE RECORD SHAPE THIS PAGE RENDERS came out of the setup wizard round (2026-09-14, merged
// from origin/main): Title, Class, Category/Subcategory, Description, Trigger, Requirements.
// Three reach this page — the row label is the TITLE, the old `condition` is now the
// TRIGGER, and species/activities are DERIVED from a duty's requirements rather than stored.
// Gate is no longer a field: whether a duty waits on an approved plan is read off its
// requirements' actions.
//
// ONE FIXTURE, BOTH HALVES (aligned 2026-09-15). This page and setup step 5 read the same
// data: the ITP pass of 2026-09-14 — 854 requirements and the 333 obligations drafted from
// them, each carrying the requirements it came from. Until then the feed ran on a 402-row
// hand-built registry while the registry tab ran on the ITP, and the two tabs of one page
// disagreed about how many obligations the project has.
//
// WHAT ALIGNING COST, STATED PLAINLY. The 402-row registry carried four fields this fixture
// does not: a notice window, a parameter conflict, a monitor-facing condition, and commitment
// codes. It had 50 Notify duties; the drafting pass produced 3. So To-do is nearly empty and
// no deadline appears anywhere on the page. That is the state of the drafted data, not a
// regression in the page — and it was hidden while the two halves ran on different sources.
//
// WHAT THE FIXTURE GIVES BACK: requirement lineage on every duty (the registry only reached
// commitments), phases on all 333, and subjects as major/minor on the obligation itself.
//
// PHASE IS NOT A REASON (2026-09-16). Ongoing's groups were briefly derived from phase, and
// "the project is in Construction" swept in 260 duties — four fifths of the permit. Phase
// SCOPES which duties can apply; it does not say which are live today. Ongoing now groups only
// conditions narrow enough to be true right now: dewatering under way, in-water work under way,
// and the standing qualifications.
//
// DATA PROVENANCE. Every obligation, class, title, description, trigger, phase, subject filing
// and requirement link is fixture data, and every predicate matching a duty to an event is a
// real match against it. EXAMPLE, and marked on the page: the events themselves, and which
// phases and activities are under way today. Nothing uses Date.now(); see the fixed NOW in
// src/data/obligation-tracking.ts.

/** @type {{ sections: import('./requirement-tracker.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Page shell — Feed / Registry',
      selector: '.bcn-tsh',
      intent:
        'The two halves of the page as tabs: Feed (what is happening) and Registry (what the project is signed up to). The outer tablist; the feed carries its own four views inside it.',
      decisions: [
        'THE TWO HALVES ARE PEERS, NOT A SURFACE WITH AN APPENDIX. Stacking them made the registry read as a footnote you scroll past. Tabs say what is true: you are either asking what is happening or what the project is signed up to.',
        'TWO LEVELS OF TAB, DELIBERATELY DIFFERENT IN APPEARANCE. The outer row is SEGMENTED and the inner row (the four feed views) is UNDERLINE, so a nested tablist reads as a second level rather than one confusing row of six. Both are esa-tab-layout; only the appearance prop differs.',
        'THE OUTER TABS CARRY COUNTS OF DIFFERENT THINGS — Feed is events, Registry is obligations. Both now come from ONE fixture, so a duty in the feed is a duty in the tree and the numbers reconcile.',
        'The shell decides nothing else. The feed owns its views; the registry owns its tree and its provenance note.',
      ],
      gotchas: [
        'NESTED TABLISTS MUST NOT SHARE AN APPEARANCE, or the two rows read as one broken row. If the outer row is ever restyled, the inner must stay visually subordinate.',
        'The page also carries an unrelated esa-tab-layout in the staging chrome (data-staging-tabs). Do not count it when testing, and do not confuse it for a third level.',
      ],
      acceptance: [
        'Two tab rows: an outer segmented row reading Feed (5) / Registry (333), and inside Feed an underline row reading All (5) / Important (54) / To-do (4).',
        'Selecting Registry swaps the whole area for the four-level read-only tree.',
      ],
    },
    {
      label: 'The feed — four views',
      selector: '.bcn-tf',
      intent:
        'The working half of the page: one esa-tab-layout carrying All, Important, To-do and Ongoing. Each tab carries a count; the panel below is the two-pane workspace and nothing else.',
      decisions: [
        'NO TEXT ABOUT THE PAGE. An earlier pass gave every view a byline, every pane a lede, and every rail row its count in words beside the badge that already carried it. All of it went: a view that needs a sentence explaining what it is has the wrong name, and a badge plus "54 duties" is two controls saying one thing.',
        'PANES ARE NOT CAPPED. Showing the first 25 of 70 meant the rail badge and the pane disagreed, patched with a sentence. The pane scrolls; 70 rows is not a problem worth a paragraph.',
        'EVERY VIEW IS TWO PANES: the timeline or list on the LEFT, the obligations related to the selected parent on the RIGHT. This geometry is the one part of the inbox that was always right and it is kept \u2014 it is what makes "why am I seeing this" structural rather than a sentence someone wrote. What a PARENT is varies by view: an event in All and To-do, a heading in Important. One frame serves all three so the page reads the same wherever you are.',
        'THE VIEWS REPLACE THE OPEN / SEEN PIVOT. The pivot asked "have you filed this", which is a question a feed of standing duties cannot answer. They ask the two that have answers: what is on right now, and what happened that I did not already know.',
        'THE FEED CARRIES WHAT YOU DID NOT ALREADY KNOW. This rule decides what reaches the timeline. An observation qualifies — nobody knew. A phase you entered does not: you already knew, so it never becomes a row.',
        'ALL GROUPS BY EVENT, NEVER BY DUTY. One sighting switches on several duties, so a flat list repeats the same sighting once per duty. Prod already returns this parent/children shape — ObservationComplianceDto is described in its own code as an observation together with the commitments it triggers.',
        'NO SEVERITY ORDERING. It appears nowhere in the source documents — we invented it and dropped it. A timeline sorts by time. To-do has nothing to sort on at all in this fixture, because no obligation carries a notice window.',
        'THREE VIEWS SHARE ONE SPINE. All, Important and To-do are three cuts of the SAME event set — everything, my subject areas, and what is owed. Important filtered the whole registry by subject and ignored events until 2026-09-16, which left one view that had plainly wandered in from another page. An event that raised nothing in the reader\u2019s areas does not appear in Important at all.',
        'IMPORTANT IS PER-USER AND NOTHING ABOUT IT LANDS ON THE ENTITY — a saved filter, not a field. The saved areas are validated against the fixture at build time and THROW if one is missing. An earlier pass authored an area that did not exist and silently fell back to the largest, so the page named a filter it was not applying.',
        'ONGOING IS THE ODD ONE BY DESIGN. It is the inventory rather than the timeline, and the only view answering "what is on right now". It must not scroll like a feed: seasons and phases move slowly, so it is grouped by the reason each duty is in force.',
      ],
      gotchas: [
        'EVERY PANEL RENDERS AT BUILD TIME — the rule inherited from the evidence inbox. Astro is compile-time; a panel assembled from a template literal bypasses the design system and no gate can see it. esa-tab-layout only reveals a panel that is already in the light DOM under slot="panel-N".',
        'esa-tab-layout takes `tabs` as an Array property. Passing it as a JSON string attribute works because Lit parses JSON for Array-typed attributes — do not try to build the tab list from markup.',
        'THE NOTIFY CLASS HAS THREE MEMBERS IN THIS FIXTURE, and none carries a notice window. To-do shows 4 rows across 4 events, all of them the same generic covered-species reporting duty raised by different sightings. An esa-alert-box under the rail states the shortfall rather than letting an empty view read as a bug.',
        'THE ROW LABEL IS THE TITLE, NEVER THE TRIGGER. Every duty carries a vivid trigger line and it is tempting to use it as the label. A list labelled with triggers reads as a list of ACCUSATIONS rather than duties in force. The trigger belongs on the record and in the event-driven views.',
        'A DUTY WRITTEN FOR ANY COVERED SPECIES CARRIES NO SPECIES LIST. A species-scoped predicate alone misses it, which is why To-do was empty on the first pass over this fixture. The covered-species predicate is what raises it.',
        'CLASS IS A CATEGORICAL FACET, NOT A STATUS — a quiet secondary badge at xs, the same idiom the wizard card uses. No colour carries meaning, and there is no status to carry.',
      ],
      acceptance: [
        'Four tabs read All (5), Important (66), To-do (4) and Ongoing (317).',
        'All lists five observations in the rail, the giant garter snake sighting first; selecting one shows the duties it switched on in the right pane.',
        'Important lists the same events minus the turbidity exceedance, which raised nothing in the saved subject areas.',
        'Ongoing lists five reasons — two phases and three activities — and no event.',
        'To-do carries four rows and an alert box explaining that the fixture drafted three Notify duties and no notice windows.',
        'No status, verdict, severity, "seen" control or filing verb appears anywhere on the page.',
      ],
    },
    {
      label: 'Two-pane workspace',
      selector: '.bcn-tw',
      intent:
        'The frame one view lives in: a rail of parents on the left, and the obligations related to the selected parent on the right. Selecting a row on the left swaps the right pane; nothing else moves.',
      decisions: [
        'A FIXED FOOTPRINT that never resizes on interaction. Selecting a parent must not make the page jump, and a pane with thirty duties must not grow the viewport \u2014 each side scrolls inside its own half, so the rail keeps its place while a long list is read.',
        'THE RAIL HEADING SAYS WHAT A PARENT IS (Events / In your filter / Events that owe a notice / Why it is in force), so the left column never leaves the reader to infer what it is a list of.',
        'SELECTION IS A FILLED ROW, never a coloured left border \u2014 the house design principles ban that as a status device, and there is no status on this page for it to mean.',
        'The row reports, it does not act. There is no verb on a rail row; the inbox\u2019s per-notice filing is gone entirely.',
      ],
      gotchas: [
        'EVERY DETAIL PANE IS RENDERED AT BUILD TIME, all but the first hidden. The controller only reveals \u2014 it never builds. A pane assembled from a template literal would bypass the design system and no gate could see it.',
        'THE [hidden] ATTRIBUTE LOSES TO AN AUTHOR display RULE. The visible pane rule is guarded with :not([hidden]) or no pane ever hides.',
        'THE ARROW-KEY LISTENER IS ON THE RAIL, NEVER THE DOCUMENT. A keydown with nothing focused targets the document, and calling closest() on it throws \u2014 which silently kills every shortcut on the page.',
        'Below 60rem the fixed height releases and the page scrolls, or the detail pane is trapped in a short box.',
      ],
      acceptance: [
        'Four workspaces exist, one per view, with 17 rail rows and 17 detail panes between them.',
        'Clicking a rail row marks it aria-selected and reveals only its pane.',
        'ArrowUp / ArrowDown move the selection and follow focus.',
      ],
    },
    {
      label: 'Duty card',
      selector: '.bcn-swoc',
      intent:
        'One duty, as a collapsed card: a class tag, the title, and a count badge saying how many requirements it was drafted from. Folding it open lists those requirements, each with its commitment code, its name, and a faint "also in n actions" where it is shared.',
      decisions: [
        'THIS IS THE SETUP WIZARD\u2019S OWN CARD, not a tracking-page one. bcn-sw-obligation-card, mode="browse" \u2014 the same component the registry tree and setup step 5 render. A duty therefore looks identical in the feed, in the registry tab and in the wizard, and the commitment codes come along for free.',
        'THE WRAPPER WAS DELETED (2026-09-16). A bcn-tracking-duty existed to add a Trigger marker and a prose reason to the card; both were removed as the page was pruned, at which point the wrapper only forwarded props and added a margin. A component that only forwards props is deleted, not kept.',
        'mode="browse" IS A PROP, NOT A SECOND COMPONENT. It drops the grips, the drag hooks, the pencil/\u00d7 verbs and the per-row duplicate/unlink \u2014 everything that decides something \u2014 and leaves the reading surface. Everything else, including the class tag\u2019s per-class hue, is shared.',
        'THE REQUIREMENTS ARE THE LINEAGE, and they are the reason this page moved onto the wizard fixture. The old registry could only reach commitments; these obligations carry the requirements they were drafted from, so a reader can open a duty and see what it came from without leaving the page.',
        'NO LINK ON THE TITLE. In browse mode the title is a static span, not a button. These are fixture obligations with no detail route, and a title that looks clickable but does nothing is worse than one that does not.',
      ],
      gotchas: [
        'THE REQUIREMENT LIST IS UNCAPPED \u2014 it is a fold, not a chip row, so a duty drafted from twelve requirements lists twelve. The card ships collapsed; the pane\u2019s Expand all / Collapse all pair drives every card in that pane at once.',
        'CLASS DOES CARRY COLOUR HERE. The card tints the class tag per class (adhere --color-obligation, monitor #ff7c43, notify #ffa600, roster --color-action, mixed at 14% on white for the fill). It is a categorical facet, not a status \u2014 no class is worse than another.',
        'THE CLASS TAG IS THE ONLY CLASS SIGNAL LEFT. The feed\u2019s own class badge, its trigger quote and its "Raised on X" line are all gone (the badge repeated its group heading 209 times); a feed row states its basis only where that basis DIFFERS from the pane\u2019s dominant one.',
        'The component\u2019s own header comment still says the browse title "links to the duty\u2019s record". It does not \u2014 the code renders a static span. Trust the code.',
      ],
      acceptance: [
        'A card renders in the feed, in the registry tree and in setup step 5, and is visibly the same component in all three.',
        'In browse mode: no grip, no drag, no pencil, no \u00d7, no duplicate, no unlink, and the title is not a control.',
        'Every card shows a class tag and a requirement count; opening it lists that many requirement rows, each with a commitment code.',
        'No card renders a link, a deadline badge, a status or a filing verb.',
      ],
    },
    {
      label: 'The registry — two read-only views',
      selector: '.bcn-treg',
      intent:
        'The Registry tab, in the same two views setup step 5 offers: BY CATEGORY (the subject taxonomy, four levels: category > subcategory > obligation > requirements) and BY COMMITMENT (the permit top-down: commitment > requirement > the obligations it became, with route and orphan counts). A segmented control swaps them; each carries its own filter row.',
      decisions: [
        'BOTH TREES ARE THE WIZARD OWN COMPONENTS in mode="browse" — bcn-sw-obligations-tree and bcn-sw-chain-tree. Setup gets rename, remove, add, drag and the editor drawer; browse gets none of them. One component with a mode, so setup approves along these trees and this page reads along them and they cannot drift.',
        'WHAT SURVIVES BROWSE IS EVERYTHING THAT NAVIGATES rather than decides: expand and collapse, search with hit highlighting, the class and category pickers, and the coverage picker.',
        'THE SWITCH REVEALS, IT DOES NOT NAVIGATE. The wizard makes these two separate PAGES and its bcn-sw-view-switch changes location. A tab that navigates away is not a tab, and this page already has two levels of tab — a third nesting is what this avoids.',
        'EACH VIEW CARRIES ITS OWN FILTER ROW, because the two trees listen on different field names (swo-search / swc-search) and narrow by different things: class and category for the taxonomy, coverage for the chain.',
        'THE CARD AND REQUIREMENT TITLES ARE STATIC SPANS IN BROWSE, not buttons. In review they open a drawer; a read-only page does not carry one, and a control that looks clickable and does nothing is worse than no control.',
      ],
      gotchas: [
        'THE TREE SCRIPTS MUST NOT BAIL ON BROWSE. An earlier pass skipped all wiring when mode was browse, which also killed search, expand/collapse and the counts — the parts a read-only registry needs most. Every EDIT path is inert on browse without a guard: the verbs and drag hooks are not rendered, the template stamp is lazy, and the confirm guard is optional-chained.',
        'CHIPS ANNOUNCE THEMSELVES AS BUBBLING sw:chip EVENTS carrying a name, and each tree listens on the document for its own. That is why a chip works from inside the filter row rather than only from the step title where the wizard puts it.',
        'BOTH TREES RENDER AT BUILD TIME, one hidden. [hidden] loses to an author display rule, so the visible state is guarded with :not([hidden]).',
        'The template stamps and the confirm dialog are review-only and are gated out, not merely hidden — a read-only tree should not ship a delete guard.',
      ],
      acceptance: [
        'A segmented control reads By category / By commitment and swaps the panel below it.',
        'By category renders four levels with no grips, no rename/remove/add verbs, no New category footer and no confirm dialog.',
        'By commitment renders 294 commitments with route and orphan counts, and no Add or Open verbs.',
        'Typing in either search box filters its tree and wraps hits in <mark>.',
        'The setup wizard step 5 pages are unchanged — both still render in review mode with their verbs, drag hooks and drawers.',
      ],
    },
  ],
};
