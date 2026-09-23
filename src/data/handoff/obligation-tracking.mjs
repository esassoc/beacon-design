// Handoff spec for /prototypes/obligation-tracking — the awareness surface for the
// Obligation record type. Declares which regions are inspectable sections (by selector)
// plus the design intent, decisions, gotchas and acceptance a dev/Claude needs to
// re-implement each one faithfully in the Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by the browser.
//
// SCOPE: the whole page. It superseded the Obligations Inbox, which was deleted on 2026-09-17
// once nothing was being read across from it — what that stab settled is recorded here rather
// than kept alive as a second route. The inbox was right about the THREADING — an event is the
// parent and the duties it raised are its children, which is the shape this page kept — and
// wrong about the metaphor around it. Mail brings an Open/Seen pivot and a filing verb on every
// row, and neither survives contact with a standing duty: nothing is owed to a feed, and a
// duty in force today is still in force tomorrow whether or not you looked at it.
//
// WHAT REPLACES STATUS. Nothing here renders a verdict — the team dropped the
// compliance-status model, and the registry itself contains no status vocabulary. An
// obligation holds no time; the EVENT does.
//
// THE FOURTH VIEW IS "PINNED", AND IT REPLACED AN INVENTORY VIEW. That view was built as
// Standing (2026-09-15), removed, restored as Ongoing (2026-09-16) and removed again
// (2026-09-17). It answered "what is in force right now" — and to answer it at all, it had to
// author which activities were under way, because NOTHING IN THE FIXTURE RECORDS THAT AN
// OBLIGATION IS CURRENTLY LIVE. Pinning does not close that gap; it stops pretending to. The
// reader names the duties they are watching, which is a claim this system can actually keep.
//
// So the page no longer answers "what is in force right now" for anybody. That subtraction is
// deliberate, and it should be reversed the moment obligations carry in-effect conditions.
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
// PHASE IS NOT A REASON (2026-09-16). The inventory view's groups were briefly derived from
// phase, and "the project is in Construction" swept in 260 duties — four fifths of the permit.
// Phase SCOPES which duties can apply; it does not say which are live today. Narrowing to
// conditions true right now took it from 317 duties to 16 — and the fact that even those had to
// be authored is what eventually retired the view altogether.
//
// DATA PROVENANCE. Every obligation, class, title, description, trigger, phase, subject filing
// and requirement link is fixture data, and every predicate matching a duty to an event is a
// real match against it. AUTHORED, and marked on the page: the events themselves, and which six
// duties the reader has pinned. Nothing uses Date.now(); see the fixed NOW in
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
        'NO COUNT ON EITHER OUTER TAB. Registry briefly carried one — the project’s obligation total, the page’s single honest number — while Feed carried none, because its four views count four different slices and any one figure would imply it was the total. Once the volumes were realistic even that one stopped telling a reader anything before they clicked (Kim, 2026-09-16).',
        'The shell decides nothing else. The feed owns its views; the registry owns its tree and its provenance note.',
      ],
      gotchas: [
        'NESTED TABLISTS MUST NOT SHARE AN APPEARANCE, or the two rows read as one broken row. If the outer row is ever restyled, the inner must stay visually subordinate.',
        'The page also carries an unrelated esa-tab-layout in the staging chrome (data-staging-tabs). Do not count it when testing, and do not confuse it for a third level.',
      ],
      acceptance: [
        'Two tab rows: an outer segmented row reading Feed / Registry, and inside Feed an underline row reading All / Important / To-do / Pinned. No badge on any of them.',
        'Selecting Registry swaps the whole area for the four-level read-only tree.',
      ],
    },
    {
      label: 'The feed — four views',
      selector: '.bcn-tf',
      intent:
        'The working half of the page: one esa-tab-layout carrying All, Important, To-do and Pinned. NO tab carries a count; the panel below is the two-pane workspace and nothing else.',
      decisions: [
        'NO TEXT ABOUT THE PAGE. An earlier pass gave every view a byline, every pane a lede, and every rail row its count in words beside the badge that already carried it. All of it went: a view that needs a sentence explaining what it is has the wrong name, and a badge plus "54 duties" is two controls saying one thing.',
        'PANES ARE NOT CAPPED. Showing the first 25 of 70 meant the rail badge and the pane disagreed, patched with a sentence. The pane scrolls; 70 rows is not a problem worth a paragraph.',
        'EVERY VIEW IS TWO PANES: the timeline or list on the LEFT, the obligations related to the selected parent on the RIGHT. This geometry is the one part of the inbox that was always right and it is kept \u2014 it is what makes "why am I seeing this" structural rather than a sentence someone wrote. What a PARENT is varies with the pivot: an event in the by-event direction, a duty in the by-obligation one. One frame serves every view and both directions.',
        'THE VIEWS REPLACE THE OPEN / SEEN PIVOT. That pivot asked "have you filed this", which a feed of standing duties cannot answer. These ask ones that do have answers: what happened that I did not already know, what is owed, and what am I watching.',
        'THE FEED CARRIES WHAT YOU DID NOT ALREADY KNOW. This rule decides what reaches the timeline. An observation qualifies — nobody knew. A phase you entered does not: you already knew, so it never becomes a row.',
        'ALL GROUPS BY EVENT, NEVER BY DUTY. One sighting switches on several duties, so a flat list repeats the same sighting once per duty. Prod already returns this parent/children shape — ObservationComplianceDto is described in its own code as an observation together with the commitments it triggers.',
        'NO SEVERITY ORDERING. It appears nowhere in the source documents — we invented it and dropped it. A timeline sorts by time. To-do has nothing to sort on at all in this fixture, because no obligation carries a notice window.',
        'ALL FOUR VIEWS SHARE ONE SPINE, as of 2026-09-17. All, Important, To-do and Pinned are four cuts of the SAME event set — everything, my subject areas, what is owed, and what I pinned. Ongoing was the exception and it is gone. Important filtered the whole registry by subject and ignored events until 2026-09-16, which left one view that had plainly wandered in from another page. An event that raised nothing in the reader\u2019s areas does not appear in Important at all.',
        'IMPORTANT IS PER-USER AND NOTHING ABOUT IT LANDS ON THE ENTITY — a saved filter, not a field. The saved areas are validated against the fixture at build time and THROW if one is missing. An earlier pass authored an area that did not exist and silently fell back to the largest, so the page named a filter it was not applying.',
        'PINNED REPLACED ONGOING (2026-09-17), and the swap is the point rather than a rename. Ongoing was the inventory — "what is on right now" — and to exist at all it had to AUTHOR which activities were under way, because nothing in the fixture records that an obligation is currently in force. Pinning does not close that gap, it stops pretending to: the reader says what they are watching, which is a claim the software can actually keep. THE COST, STATED PLAINLY: the page no longer answers "what is in force right now" for anybody, and that should be reversed the moment obligations carry in-effect conditions.',
        'THE PINS ARE AUTHORED AND THE PAGE SAYS SO. Beacon has no pin table and the fixture has no per-user state, so the six are a stand-in of the same kind as the saved subject areas. A pin is UI state rather than permit data, which is why authoring it is legitimate where inventing an observation type was not. They resolve BY TITLE and the resolution THROWS on a miss — a list of ULIDs is unreadable in source and fails silently when the fixture is redrafted.',
        'THE PIN SET SPANS THE FOUR CLASSES AND MIXES REACHED WITH UNREACHED — three of each. A pin with no history is the sharpest thing this page says: you chose to watch this, and in the whole event log nothing has ever touched it. The pane then names what WOULD move it, and for three of the four classes that is a topic Beacon does not publish.',
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
        'Four tabs read All, Important, To-do and Pinned, none of them carrying a count.',
        'By event, the rails hold 6, 4, 4 and 5 parents and 20, 13, 12 and 8 duty rows.',
        'All lists the events in the rail, the giant garter snake sighting first; selecting one shows the duties it switched on in the right pane.',
        'Important lists the same events minus any that raised nothing in the saved subject areas.',
        'Pinned lists 6 duties by obligation, 3 of them with no events, and an alert box saying the pins are authored.',
        'To-do carries an alert box explaining that the fixture drafted three Notify duties and no notice windows.',
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
        'Four workspaces exist, one per view. In the by-event direction they hold 19 rail rows and 19 detail panes between them; in the by-obligation direction, 23 and 23.',
        'Clicking a rail row marks it aria-selected and reveals only its pane.',
        'ArrowUp / ArrowDown move the selection and follow focus.',
      ],
    },
    {
      label: 'The pivot — reading a view the other way round',
      selector: '.bcn-tw__bar',
      intent:
        'A two-option switch above every view: By event, or By obligation. It transposes the view — the same data with the parent and the child swapped. By event, a pane is a thing that happened and its children are the duties it raised. By obligation, a pane is a duty and its children are the events that reached it.',
      decisions: [
        'ON THE READER-DEFINED VIEWS ONLY (Kim, 2026-09-17): Important, whose slice is the reader’s saved subject areas, and Pinned, which is a list they chose. All and To-do are the system’s own cuts — everything that happened, and everything owed — and nobody arrives at them asking "what has become of MY duties", which is what the inverse answers. A view without the pivot renders ONE side and no switch, rather than both with one hidden. WHAT THAT COSTS, recorded rather than argued: To-do is where the transpose paid most (12 rows for 3 duties becomes 3), and that repetition is back. The inverse data for all four views is still built and exported — restoring a switch is one prop.',
        'PINNED OPENS ON THE OBLIGATION SIDE, every other view on the event side. A pin IS a duty: opening a list you curated and being shown a list of events instead answers a question nobody asked. That makes Pinned the one view whose by-event direction is the transpose.',
        'A PIVOT, NOT A FIFTH TAB. This is a transpose, not another subject. A tab says "here is a different thing"; a switch says "here is the same thing the other way round" — and the page already has two levels of tab, so a fifth inner tab under two outer ones would be the third nesting. Same lego and same wiring as the Registry tab’s By category / By commitment switch, so the two switches on this page read as one control.',
        'THE INDEX IS DERIVED, NEVER AUTHORED. It is built by walking the SAME EVENTS[].raised array the forward panes read, so the two directions cannot disagree. Authoring the inverse separately would repeat exactly the fault the one-fixture alignment fixed, where one page held two answers to the same question. Row totals match in both directions — 20, 13, 12 — which is the check that proves it.',
        'NOT STICKY, and that is a decision (Kim, 2026-09-17). Each view owns its own switch and every one starts on By event. A pivot that followed the reader between views would mean arriving at To-do in a direction chosen while reading All.',
        'IT PAYS FOR ITSELF MOST ON TO-DO. The same three Notify duties appear under four separate events, so the forward view spends 12 rows saying three things. Inverted it is three rows, each carrying its four triggers. Measured across the views: 6->9, 4->5, 4->3 and 5->6 parents, with the duty and event row totals agreeing in both directions (20, 13, 12, 8).',
        'PINNED IS THE ONE VIEW WHOSE BY-OBLIGATION SIDE IS NATIVE. The other three are lists of events that happen to reach duties, so their inverse is DERIVED from the event log and a duty with no events is simply not in them. Pinned is a list of duties that may or may not have been reached, so every pin appears whether or not anything has touched it — and THREE OF THE SIX HAVE NOTHING. Keeping those panes rather than dropping them is the whole value: it renders the missing event sources as something a reader finds by looking.',
      ],
      gotchas: [
        'BOTH DIRECTIONS RENDER AT BUILD TIME and the switch only reveals, like everything else on this page.',
        'THE REVEAL SCRIPT IS SCOPED PER SIDE, not per workspace. Both directions put a rail and panes inside the same .bcn-tw; a workspace-wide query lets a click in one rail hide the other side’s pane and silently unselect its row.',
        'A DUTY WITH NO EVENTS GETS NO EMPTY-STATE COMPONENT. It is not a failed lookup, it is the answer — the pane’s own "Moved by" and "Events" facts state it in the structured band instead of as prose.',
        'THE "Moved by" FACT IS PER CLASS and is a statement about Beacon, not about this page: Notify is moved by a field event, Adhere by a breach, Monitor by evidence arriving, Roster by a change of staff — and only the first of those four is a topic Beacon actually publishes.',
      ],
      acceptance: [
        'Only Important and Pinned carry a switch; All and To-do render one side and no bar.',
        'Important opens By event and Pinned opens By obligation, and switching one leaves the other alone.',
        'Row totals agree in both directions for All, Important and To-do.',
        'Pinned by obligation shows 6 duties, 3 of them with no events and each naming what would move it.',
      ],
    },
    {
      label: 'Event row — one event under a duty',
      selector: '.bcn-tev',
      intent:
        'One event as a CHILD of a duty: a glyph for its Event Hub source, the title on one line, and the source plus both a relative and an absolute date. Folding it open shows that source’s own facts, and the relevance service’s stated reason where one applies.',
      decisions: [
        'THE ABSOLUTE DATE IS BACK, and only in this direction. The feed’s rail shows "45m ago" alone because a timeline is scanned by recency. A duty’s history is read the other way — four events spread across days, where "1d ago" beside "2d ago" stops being a date and becomes arithmetic. Showing both here and only the relative one there is a considered difference.',
        'A ROW STATES ITS BASIS ONLY WHEN THE PANE’S EVENTS DISAGREE — the SAME rule as the duty row’s, applied in the other direction rather than reversed. Measured against this fixture, NOT ONE pane has a varying basis: five duties have a single event and the other four are uniform (4x "Any covered species", 3x "Trigger"). So the per-row badge was 46 copies of 9 facts. Where every event reached the duty the same way it is hoisted to the pane and stated once; where they differ the rows carry it. Real data will produce the varied case.',
        'A NATIVE <details> CARRYING data-swo-branch, deliberately, to match bcn-sw-obligation-card — the sibling doing this same job on the same panes. That is the hook the pane’s Expand all / Collapse all already drive, so both kinds of child open together with no new wiring.',
        'THE FACTS BAND IS PER-SOURCE and arrives assembled. An observation has a species and a buffer; a DMR has neither and has weather instead. The component renders what it is handed and asserts nothing about the shape.',
        'SOURCE LEADS EVERY BAND, on all three sources. SOURCE is the Event Hub topic a record arrived on — observations, sitereports, dmrs — and those ARE enumerated, by the listeners. TYPE exists only on observations, is VARCHAR(255) with no lookup and no foreign key, and its vocabulary lives in the Angular app rather than the database. Running the two together was a real error once and the band is where the distinction is kept legible.',
      ],
      gotchas: [
        'A FLEX ITEM’S AUTO BASIS IS MAX-CONTENT, so a long value takes one unbroken line and is clipped rather than wrapped. min-width: 0 alone does not fix it — it permits shrinking but the basis still asks for max-content. Both facts bands cap the item at 100%.',
        'Safari draws its own disclosure triangle through ::-webkit-details-marker; the chevron replaces it and the marker is hidden.',
        'A duty with exactly one event renders it already open — folding the only thing in the pane hides everything it has to say.',
      ],
      acceptance: [
        'Every row shows a source, a relative time and a calendar date; no row shows a status, a verdict or a filing verb.',
        'Expand all in a by-obligation pane opens every event row in that pane and no other.',
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
