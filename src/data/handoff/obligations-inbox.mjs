// Handoff spec for /prototypes/obligations-inbox — the awareness surface for the Obligation
// record type. Declares which regions are inspectable sections (by selector) plus the design
// intent, decisions, gotchas and acceptance a dev/Claude needs to re-implement each one
// faithfully in the Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by the browser.
//
// SCOPE: the whole inbox. It replaces five earlier dashboard variants that all failed the
// same way — they arranged 402 obligations, and arranging a registry is not the same as
// telling somebody what happened. The team's framing (2026-09-06) was to build it like the
// Evidence Inbox instead, and this is that page's direct sibling.
//
// THE THREADING IS THE IDEA. A TRIGGER is the parent, the obligations it raises are children.
// One burrowing owl sighting raises thirty duties, five of them owed on a clock. Listing
// those thirty as separate rows is how an inbox turns back into a registry, so the event is
// the row and the duties are the thread. That makes "why am I seeing this" structural rather
// than a sentence someone wrote.
//
// DATA PROVENANCE. Every obligation a trigger raises is matched out of the 402-row registry
// by a real predicate (a species name, an activity id, or a phrase in the row's own condition
// and standard). Conditions, classes, notice windows, commitment codes and commitment titles
// are all registry data. EXAMPLE, and marked on the page: which triggers fired, when, where,
// and who reported them — the registry carries no in-effect conditions and no observations.
// Nothing uses Date.now(); see the fixed NOW in src/data/obligation-triggers.ts.

/** @type {{ sections: import('./requirement-tracker.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Trigger queue',
      selector: '.bcn-inbox-queue',
      intent:
        'The left pane: every trigger that has fired, grouped into relative date buckets (Today / Yesterday / Earlier this week / Older) and sorted by urgency then recency. A row states what happened, where, when, how many notices it owes and how many obligations it raised.',
      decisions: [
        'A TRIGGER IS THE ROW, NOT AN OBLIGATION. Eight triggers stand in front of 180 distinct obligations. The alternative — one row per obligation — is how an inbox becomes a registry with a different heading.',
        'THE ROW REPORTS, IT DOES NOT ACT. There is no dismiss on the queue, which is the rule the Evidence Inbox set: a one-click clear off a list is the fastest way to close something without reading why it was raised. Verbs live in the thread.',
        'URGENCY IS DERIVED AND IT DECAYS. Two signals, both named by the team and both computable from the registry: a strict notice deadline (26 of the 50 Notify rows are owed in a day or less) and take or injury (20 rows). A trigger inherits the strongest signal among the obligations it raised — but only while the clock is still running. Without the decay all eight triggers ranked "now" and the signal carried nothing.',
        'Only the row with an open clock gets the heavier title. Selection is a filled row, never a coloured left border — the house design principles ban that as a status device, and here it would compete with the urgency weight.',
        'Bucket headings are sticky so the date context survives scrolling, and a bucket hides with its last row rather than leaving a heading floating over nothing.',
      ],
      gotchas: [
        'Three kinds of trigger — observation, season, milestone — and only observations have a reporter and a place. The row falls back to the kind label when there is no location, rather than rendering an empty line.',
        'The counts are per trigger, not per obligation: "5 notices owed · 30 obligations raised" on the owl means five of its thirty children have a clock. Summing the badges across rows double-counts, because one obligation can be raised by more than one trigger.',
      ],
      acceptance: [
        'Eight triggers appear across four date buckets, with the burrowing owl sighting first.',
        'The three triggers inside 24 hours read "now" (heavier title, notices-owed badge); pile driving and turbidity read as recent; the two seasons and the plan approval read as background.',
        'Clicking a row shows that trigger\'s thread and fills the row; nothing can be dismissed from the queue.',
      ],
    },
    {
      label: 'Trigger thread',
      selector: '.bcn-inbox-thread:not([hidden])',
      intent:
        'The right pane: one trigger and every obligation it raised, split into "Needs a notice now" and "Also raised". Each obligation leads with its CONDITION — the observable phrased the way a monitor would see it — then the deadline, the reason it is here, and the commitments driving it.',
      decisions: [
        'THE CONDITION IS THE HEADLINE, not the obligation title. "Burrowing owl seen on or near site and not reported" reads as an instruction; "Burrowing owl sighting report to the Designated Biologist" reads as a catalogue entry. All 402 rows carry a condition, which makes it the most under-used field in the registry.',
        'EVERY ROW SHOWS WHAT IS DRIVING IT — commitment code over title, linked out, so "what is making me do this" is answerable without leaving the page. On the owl thread those resolve to COA 11.109 BUOW Avoidance, COA 11.117 BUOW Exclusion Activities, COA 11.116 BUOW Monitoring. This is why threading by trigger is worth the work.',
        'THE WHY LINE IS SHORT because the deadline rides its own chip. Inlining the window text produced sentences like "A notice is owed within one business day; within 24 hours when an owl moves on site because of this".',
        'Drivers render only in the "needs a notice now" group. In "Also raised" the codes collapse to a single line — forty rows each carrying three titles is a wall, and those rows are reference.',
        'DISMISSAL LIVES HERE, at the foot, after the reasons. It is an acknowledgement, not a resolution: the obligations stay in force and only the notice leaves, which the footnote says out loud.',
        'Fill and weight carry the tier. A row with an open clock gets a tinted ground; everything else is a hairline box.',
      ],
      gotchas: [
        'EVERY THREAD IS RENDERED AT BUILD TIME and all but one hidden. Astro is compile-time, so a panel assembled from a JavaScript template literal would bypass the design system and no gate could see it (component-first is explicit). inbox.ts only reveals, hides and re-labels — it never builds markup. Same rule as triage.ts.',
        'Thread lengths vary wildly: the hawk raises 51 obligations, the barge grounding 16. The pane scrolls internally so the frame never resizes on selection.',
        'The dismiss attribute lands on esa-button\'s inner native <button>, not the wrapper, so the handler must use closest() rather than matching the click target.',
      ],
      acceptance: [
        'The owl thread shows 5 obligations under "Needs a notice now" and 25 under "Also raised".',
        'Each urgent row shows its deadline chip ("Immediately", "Within 24 hours"), the reason it was raised, and at least one commitment code with its real title.',
        'Every obligation links through to its detail page by id.',
        '"Mark as seen" removes the trigger from the queue and selects the next one; clearing all eight reveals the cleared-inbox state in both panes rather than leaving them blank.',
      ],
    },
    {
      label: 'Two-pane frame',
      selector: '.bcn-inbox-workspace',
      intent:
        'The fixed frame the two panes live in — the direct sibling of bcn-triage-workspace, composing the .sidebar hub primitive with a queue of fixed basis and a thread pane taking the rest.',
      decisions: [
        'A FIXED FOOTPRINT that never resizes on interaction. Selecting a trigger must not make the page jump, and a fifty-row thread must not grow the viewport — each pane scrolls inside its own half instead, so the queue keeps its place while a long thread is read.',
        'The geometry composes the .sidebar PRIMITIVE rather than reimplementing flex. What the component adds is the frame and the two independent scroll regions.',
        'Below 60rem the primitive stacks the panes, so the fixed height releases — otherwise the thread is trapped in a short box on a phone.',
      ],
      gotchas: [
        'The cleared-inbox empty states for BOTH panes are server-rendered and start hidden. The controller reveals them; it must not build them, for the same compile-time reason as the threads.',
      ],
      acceptance: [
        'Selecting any trigger leaves the frame exactly the same height.',
        'Both panes scroll independently, and neither the page nor the frame grows when a long thread is opened.',
      ],
    },
  ],
};
