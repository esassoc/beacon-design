// Handoff spec for the /prototypes/monitoring/dashboard prototype — the authored
// counterpart to the auto-derived capture. It declares which regions are
// inspectable sections (by selector), plus the design intent, decisions, gotchas,
// and acceptance a dev/Claude needs to re-implement each one faithfully in the
// Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by
// the browser. Capture runs against the production preview build.
//
// SCOPE: this spec deliberately curates ONLY the Commitment Compliance feature
// (the observation-first dossier), not the whole dashboard — the portal stat band
// (bcn-monitoring-stats) reproduces a prod screenshot and needs no design handoff.
// Commitment Compliance is the new design work and the input for the (empty)
// BCN-1315, so the four sections below decompose it component-by-component:
//   1. the section shell + the two organize controls (Show / Group by),
//   2. the observation card (the parent → relevant-commitments dossier),
//   3. the relevant-commitment row, and
//   4. the full-CoA-text side drawer the row opens.
//
// Reframe (Leah/Christy): the OBSERVATION is the unit of work; its relevant
// commitments are children. You start from "a Swainson's-hawk nest came in at
// DH-039" and get everything you must do about it. See the typedef in
// requirement-tracker.mjs for the field shapes.
//
// NOTE — fledging is currently HIDDEN: the "~Nd to fledge" summary pill and the
// BcnFledgingCountdown body panel are commented out (not deleted) in
// BcnObservationCard.astro pending sign-off on the hatch/fledge estimate data, so
// no fledging section is captured here. Re-enable both blocks together to restore.

/** @type {{ sections: import('./requirement-tracker.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Compliance section & controls',
      selector: '.cc',
      intent:
        'The Commitment Compliance workspace: a titled section over the observation list, with two independent organize controls — a "Show" lens (Needs action [default] | All) and a "Group by" switch (Source [default] | Date). It is the observation-first reframe of compliance — the OBSERVATION is the unit of work, its relevant commitments are children — and the design input for the empty BCN-1315.',
      decisions: [
        'Two DEFAULTS that frame the whole feature: Show = "Needs action" (you land on what needs you, not the full firehose) and Group by = "Source" (the two lanes — Compliance concerns vs Species observations). "Date" is the alternative: a newest-first reverse-chronological log.',
        'Both controls are esa-button-toggle legos (segmented), not tabs or selects — peer lenses switched in place with no navigation. Group-by swaps the visible pane; Show filters cards WITHIN whichever pane is active.',
        'Each group header carries a quiet NEUTRAL count badge (4px radius, light-gray border — the design-principles "compact + quiet" badge). It is a count label, never a status chip; no esa-* outline-badge variant exists, so it is the only bespoke bit and is page glue.',
        'Show and Group by are orthogonal axes: the filter runs inside BOTH panes and, after hiding cards, re-counts each group badge and hides any group that drops to zero visible cards.',
      ],
      gotchas: [
        'The Show filter must re-derive every group\'s count and empty-state on each change, in BOTH the source and date panes — otherwise stale counts or empty headers leak when you switch grouping.',
        'Date grouping is computed at build time (SSR) from observedDate; the runtime Date.now is forbidden in this codebase. Port the grouping server-side, not in the browser.',
        '"Needs action" is DERIVED (findNeedsAction over the observation state), not a stored boolean — re-derive it in the app, do not persist a flag.',
        'Everything here except the two toggles is page-composition glue (header bar, control strip, panes, group headers, count badge); do not promote it to a component.',
      ],
      acceptance: [
        'Lands on "Needs action" + "Source"; switching Show to All reveals every card and restores full counts; switching Group by to Date re-lays the same cards as a newest-first dated log; groups with no visible cards disappear.',
      ],
      js: ['src/pages/prototypes/monitoring/dashboard.astro'],
    },
    {
      label: 'Observation card (parent → commitments)',
      selector: '.bcn-obs',
      apply: [{ click: '.bcn-obs__summary' }],
      intent:
        'BcnObservationCard — the heart of the reframe. Each card\'s parent is ONE observation (a Swainson\'s-hawk nest at DH-039, or a raised compliance concern); its children are the RELEVANT commitments to review. Collapsed it is a scannable summary row; expanded inline it is the dossier (the real field note → the relevant-commitment rows).',
      decisions: [
        'Native <details>/<summary>, NOT esa-collapsible: the lego only accepts a string title and cannot host this rich summary trigger (species code badge + species name + short id + observed/raised meta + status chip). Inline disclosure (not navigation) keeps you in the list.',
        'Two variants keyed off find.kind — an OBSERVATION (mono species-code badge + species name) vs a CONCERN (danger triangle + concern title). The date verb flips with it ("observed" vs "raised").',
        'Compliance status is judged at the OBSERVATION level — exactly one BcnStatusChip on the card — never per commitment. The child rows are "the measures that apply," not individually statused.',
        'The "~Nd to fledge" summary pill and the BcnFledgingCountdown body panel are HIDDEN (commented out in BcnObservationCard.astro, not deleted) pending sign-off on the hatch/fledge estimate data — re-enable both blocks (plus the import and the hasFledge const) together.',
      ],
      gotchas: [
        'The summary is a rich flex row with a custom chevron — suppress the native disclosure marker (list-style: none + ::-webkit-details-marker) or you get a double triangle.',
        'The dossier body lives in the DOM even when collapsed; the Show filter hides the whole <details>, it does not depend on open state.',
        'When re-enabling fledging, restore all FOUR commented units together: the import, the hasFledge const, the summary pill, and the body panel — they are commented as one feature.',
      ],
      acceptance: [
        'Collapsed, the card shows species/concern + id + meta + a single status chip; clicking it expands inline to the field note + relevant-commitment rows; concern cards show the danger marker and "raised"; no fledging pill or panel renders while hidden.',
      ],
      js: ['src/components/bcn/BcnObservationCard.astro'],
    },
    {
      label: 'Relevant-commitment row',
      selector: '.bcn-crow',
      apply: [{ click: '.bcn-obs__summary' }],
      intent:
        'BcnCommitmentRow — one Condition-of-Approval measure relevant to the observation, rendered as a SLIM clickable row: a code badge + the title + an open chevron. The structured detail and the full CoA text live in the side drawer the row opens, so the dossier list stays dense and scannable.',
      decisions: [
        'NO per-row compliance status — compliance is the observation\'s, not the measure\'s. The row says "review this measure," nothing more.',
        'The whole row is the open affordance (role=button, tabindex=0, aria-label "Open commitment {code}: {title}") and opens the one shared commitment drawer; the code badge uses the --color-commitment semantic tint, not a raw color.',
      ],
      gotchas: [
        'Rows are keyed by data-code; the drawer is opened by a DELEGATED click/keydown on .bcn-crow at the document level, not a per-row listener — preserve the data-code contract so rows revealed later still work.',
      ],
      acceptance: [
        'Each relevant commitment renders as a slim row (code + title + chevron); click or Enter/Space opens the drawer for that code; there is no status chip on the row.',
      ],
      js: ['src/components/bcn/BcnCommitmentRow.astro'],
    },
    {
      label: 'Commitment side drawer (full CoA text)',
      selector: '#cmt-drawer',
      apply: [{ click: '.bcn-obs__summary' }, { click: '.bcn-crow' }],
      intent:
        'The esa-side-dialog that shows a commitment\'s full Condition-of-Approval text, opened from any relevant-commitment row. The document-review pattern: the register\'s real CoA prose, set in Besley, preserving the register\'s own line breaks.',
      decisions: [
        'It is the esa-side-dialog lego (md / 640px), not a bespoke drawer. Body text is --font-decorative with white-space: pre-wrap so the register\'s authored line breaks survive verbatim.',
        'ONE shared drawer instance serves every row; the payload (code / title / source / text) is a JSON island read once on load and keyed by commitment code.',
        'The z-stack lifts the panel + backdrop above the fixed topbar (--z-modal 1300 / backdrop 1250, over the topbar\'s 1100) per the esa-dialog overlay note.',
      ],
      gotchas: [
        'esa-side-dialog is a CUSTOM (non-native) overlay — to clear the topbar you must raise --z-modal/--z-modal-backdrop on the element, not rely on DOM order.',
        'Open is delegated from .bcn-crow (document-level click + keydown), so it works for rows revealed after load; do not bind per-row handlers.',
        'The body is set via textContent (with pre-wrap), NOT innerHTML — the CoA text is plain prose, not markup.',
      ],
      acceptance: [
        'Clicking a commitment row opens a 640px right side-dialog over a blurred backdrop, above the topbar, showing the code, title, source, and full CoA text with the original line breaks; Close dismisses it.',
      ],
      js: ['src/pages/prototypes/monitoring/dashboard.astro'],
    },
  ],
};
