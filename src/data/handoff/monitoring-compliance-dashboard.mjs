// Handoff spec for /prototypes/monitoring/compliance-dashboard — the authored
// counterpart to the auto-derived capture. Declares which regions are inspectable
// sections (by selector) plus the design intent, decisions, gotchas, and acceptance
// a dev/Claude needs to re-implement each one faithfully in the Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by the
// browser. Capture runs against the production preview build.
//
// SCOPE: all three dashboard widgets. Unlike the Delta Conveyance portal
// (monitoring-dashboard.mjs), which curates only its new Commitment Compliance
// feature, everything on this page is new work — the page exists to demonstrate
// that Monitoring Portal widgets are configured PER PROJECT, not fixed.
//
// The role this dashboard models: ESA holds a THIRD-PARTY compliance-inspection
// position. A separate first-party contractor performs day-to-day field inspection
// and logs observations; ESA spot-checks that log rather than resolving issues
// directly. That is why every widget is read-and-route (open the filtered list,
// export the list) and none of them edits an observation.
//
// Fixture data and the Cottonwood Solar + Storage scenario are invented — see the
// header of src/data/monitoring-oversight-fixture.ts. No real project data.
//
// SELECTOR NOTE: esa-card accepts no host class or id (it composes its class from
// variant props only), so each section is targeted as `.esa-card:has(<inner root>)`
// to capture the whole card — title, subtitle, actions slot, body — rather than
// just the component's inner div. Logged as a hub gap in the improvement ledger.

/** @type {{ sections: import('./requirement-tracker.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Severity overview (clickable donut)',
      selector: '.esa-card:has(.bcn-ohero)',
      intent:
        'BcnOversightHero — the band that answers "how bad is it right now, and in what categories". A severity donut of the CURRENT active observation set on the left, its legend beside it, and two category count lists (Needs Attention, Non-Compliance) on the right. Every severity is a real link: the ring segment and its legend row both route to the Observations list pre-filtered to that severity, and the donut centre routes to the unfiltered active list. It is a navigation surface, not a static readout.',
      decisions: [
        'The ring is stacked SVG <circle> strokes (stroke-dasharray as a percentage at r=15.915, so the circumference is ~100), each wrapped in an SVG <a>. The existing house idiom — a flat conic-gradient div, used by BcnMonitoringStats and permit-tracking — was rejected because a conic gradient CANNOT carry one click target per slice, and per-segment routing is the whole point of this widget.',
        'The donut and both category lists read the same active-observation set, so the severity totals and the category totals always reconcile. An earlier revision sourced them differently and the numbers disagreed on screen.',
        'The category lists are plain label + count rows, deliberately NOT bar charts — a bar track needs a shared max to be honest, and these two lists are scoped to different severities, so a shared scale would be meaningless.',
        'Severity colour comes from SEVERITY_META in the fixture (one hex per severity), threaded to both the ring stroke and the legend swatch, so a severity can never be two different colours on one page.',
      ],
      gotchas: [
        'There is no esa-* chart lego anywhere in Ecology — this is bespoke SVG by necessity, not by preference. Third occurrence of the gap; see the improvement ledger before hand-rolling a fourth.',
        'SVG <a> needs href set via the SVG namespace semantics Astro already emits — do not swap the segments for <path onclick>, which loses keyboard access and the link affordance.',
        'The donut centre total is a link too, and it is easy to lose when restyling the hole — keep it focusable.',
      ],
      acceptance: [
        'The ring renders one segment per severity, sized to its share of the active set, and the segment colours match the legend swatches exactly.',
        'Clicking any ring segment or legend row opens the Observations list filtered to that severity; clicking the centre total opens it unfiltered.',
        'The needs-attention and non-compliance category counts sum to the same totals the donut shows for those severities.',
      ],
    },
    {
      label: 'Needs Attention & Non-Compliance panel',
      selector: '.esa-card:has(.bcn-apanel__body)',
      intent:
        'BcnAttentionPanel — one card answering the three questions a compliance lead asks in sequence: WHERE the active issues are (a non-interactive map inset), WHAT is still outstanding (the item list, worst first, each row routing into its Observations detail), and HOW to get it off-platform (spreadsheet and KMZ export).',
      decisions: [
        'The component never sorts, filters, or reasons about severity — the caller hands it a list already ordered worst-first, and it only renders and derives map pins from what it is given. Keeping the ordering policy in the page is what lets the same panel serve a differently-configured project.',
        'The map inset is BcnObservationMap with interactive={false}: it reads as a picture of where the issues are, not a map you work in. The interactive instance of the same component is the Observations page map.',
        'It does NOT repeat the category breakdown — that lives in the severity overview above, split by severity. Two widgets showing the same counts in different groupings is how dashboards start disagreeing with themselves.',
        'Exports are plain client-side Blob downloads (spreadsheet + KMZ), not a server round trip — the dataset is already fully in the page.',
        'Everything else is a lego: esa-card shell with actions and footer slots, esa-button for all four actions, esa-badge for the age, esa-empty-state for the zero case, bcn-status-chip for the severity colour.',
      ],
      gotchas: [
        'The registry has no `download` or `map` icon, and EsaButton does not forward a paths override, so the export buttons use `arrow-down` and `map-pin`, which read slightly off-label. Logged in the ledger — swap them the moment the registry grows.',
        'The export buttons live in the esa-card actions slot, so they sit in the card HEADER, not next to the list. Do not re-parent them into the body when porting; the slot placement is what keeps the card header pattern consistent with the other trackers.',
        'The map inset derives its pins from the same outstanding array the list renders. Feeding the two from different sources will silently desynchronise the picture from the list.',
      ],
      acceptance: [
        'The card shows a map inset, an outstanding list ordered worst-first, and four actions; each list row opens that observation in the Observations page.',
        'Export spreadsheet and Export KMZ both download a file client-side covering exactly the rows shown.',
        'With no outstanding items the list is replaced by an esa-empty-state and the map inset renders with no pins.',
      ],
    },
    {
      label: '90-day trend (cohort bars)',
      selector: '.esa-card:has(.bcn-trend)',
      intent:
        'BcnTrendPanel — a three-up stat band (still active / resolved / net change over the trailing 90 days) over a compact grouped weekly bar chart: 13 columns, two thin bars each. It answers "is the backlog growing or shrinking", which neither the donut nor the outstanding list can show.',
      decisions: [
        'This is a COHORT / AGING view, not an opened-vs-closed event flow. Each observation is counted exactly ONCE, under the week it was first reported, split by its CURRENT status. That is the single most important property of the widget and the easiest to break.',
        'All bars scale against ONE shared max computed across every week AND both series, so heights are comparable across the whole chart. Bars are never renormalised per column.',
        'The stat band is three esa-stat legos; only the plot itself is bespoke.',
      ],
      gotchas: [
        'An earlier version bucketed resolved items by their RESOLVE date while active items were bucketed by report date. That counted every resolved observation twice — once in each of two different weeks — and inflated the chart. If you re-derive this server-side, bucket strictly by first-reported week and split by current status.',
        'Per-column normalisation makes every week look equally busy and is a plausible-looking bug. Compute the max once, across both series and all 13 weeks, before rendering any bar.',
        'No esa-* chart lego exists for this either — same documented gap as the donut.',
      ],
      acceptance: [
        'Thirteen weekly columns render, two bars each, with a caption naming the trailing-90-day window.',
        'Summing the two series across all weeks equals the total observation count for the window — no observation appears in two columns or two bars.',
        'The tallest bar in the chart touches the plot ceiling and every other bar is proportional to it, not to its own column.',
      ],
    },
  ],
};
