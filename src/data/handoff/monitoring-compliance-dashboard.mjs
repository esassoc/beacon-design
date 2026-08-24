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
      label: 'Timeline Explorer (category sparkline grid)',
      selector: '.esa-card:has(.bcn-tlx)',
      apply: [{ clickText: ['#tlx-window', '30d', 'radio'] }],
      intent:
        'BcnTimelineExplorer — replaced the old aggregate opened-vs-resolved bar chart (BcnTrendPanel) after user feedback that a single grouped-bar plot was confusing and not actionable. A 30/60/90-day esa-button-toggle drives one small sparkline tile per concern category (needs-attention/non-compliance scope, the same categories as the two count lists above), each showing that category\'s own recent trend and current open count. It answers "which category is trending up", which an 8-way stacked chart could not show at a glance.',
      decisions: [
        'Small multiples, one sparkline per category, instead of one combined chart — a compliance lead scans for the category climbing, not the aggregate total, and eight thin lines on one axis would be unreadable.',
        'This is a COHORT / AGING view, not an opened-vs-closed event flow: each observation is counted exactly once, under the week it was first reported, still bucketed by category. Carried over from the retired trend panel\'s own hard-won fix — do not reintroduce double-counting when re-deriving this.',
        'The 30/60/90 toggle re-slices the SAME underlying 13-week series; it does not re-fetch or re-derive data. Selecting a shorter window only changes how many of the trailing weeks are plotted and read out in the hint caption.',
        'Tile colours are a fixed categorical map (CATEGORY_COLOR in the fixture, one hex per category) — the same colours used nowhere else on this page, since categories are not otherwise colour-coded elsewhere on the dashboard.',
        'An off-screen table beside the sparkline grid carries the full trailing-90-day dataset for assistive tech — the visual grid is aria-hidden, so the table is not a redundant decoration but the accessible reading of the same data.',
      ],
      gotchas: [
        'The toggle changes how many of the 13 weeks are SLICED for display, not the data itself — a re-implementation that re-queries per window risks the slice disagreeing with the table\'s fixed 90-day view.',
        'Per-tile normalisation (scaling each sparkline to its own min/max) is a plausible-looking bug: a flat, low-volume category and a spiking, high-volume one would render as visually identical shapes. Confirm intent before choosing per-tile vs shared scaling if re-deriving this.',
        'No esa-* chart lego exists for this — same documented gap as the donut and the retired trend panel.',
      ],
      acceptance: [
        'One sparkline tile renders per category, each with a distinct, consistent colour and a current open-count readout.',
        'Selecting 30d/60d/90d re-slices every tile to that trailing window and updates the hint caption naming the window and week count.',
        'The off-screen table lists the full 13-week series for every category, independent of the toggle\'s current selection.',
      ],
    },
  ],
};
