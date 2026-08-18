// Handoff spec for /prototypes/monitoring/daily-reports — the authored counterpart
// to the auto-derived capture. Declares which regions are inspectable sections (by
// selector) plus the design intent, decisions, gotchas, and acceptance a dev/Claude
// needs to re-implement each one faithfully in the Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by the
// browser. Capture runs against the production preview build.
//
// SCOPE: the Monitoring Portal's Daily Reports tab, rebuilt to match the existing
// production grid (Date / Monitor / Status / Work Areas / Report) rather than
// inventing a new shape — a card-based Person/Day-toggle layout was tried first and
// replaced once the real prod tab's screenshot showed it should be a grid instead.
//
// Fixture data and the Cottonwood Solar + Storage scenario are invented — see the
// header of src/data/monitoring-oversight-fixture.ts. No real project data.

/** @type {{ sections: import('./requirement-tracker.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Filter bar (search + clear)',
      selector: '.bcn-filterbar',
      intent:
        'A minimal toolbar over the grid: free-text search and a clear-filters control. Unlike the Observations page, there are no separate facet dropdowns here — every column (Date, Monitor, Status, Work Areas) already carries its own native AG Grid filter, matching the real Daily Reports tab, which has no facet bar either.',
      decisions: [
        'The carded shell reuses the same .bcn-filterbar class as every other grid page in the spoke, so the toolbar reads as one product regardless of which list it sits over.',
        'Search and Clear are legos (esa-text-field, esa-filter-clear-button) — no bespoke input or button was written.',
        'Per-column facets were deliberately NOT added as a separate dropdown row: the grid\'s own filter icons already cover Date/Monitor/Status/Work Areas, and duplicating that as a facet bar would just be two controls for the same job.',
      ],
      gotchas: [
        'Clear Filters must reset BOTH the quick-filter search text and every column filter (api.setFilterModel(null)) — clearing only one leaves a stale, invisible filter narrowing the grid.',
      ],
      acceptance: [
        'Typing in Search narrows the grid to matching rows across every column.',
        'Clear Filters empties the search box and removes any active column filter, restoring all 47 rows.',
      ],
    },
    {
      label: 'Reports grid + footer',
      selector: '#dr-grid',
      intent:
        'One row per site visit — the shared AG Grid kit (beacon-grid.ts) already used by Observations, Surveys, and Permits & Studies, over a footer carrying a CSV download and the record count. Columns: Date (sortable link, opens the detail dialog), Monitor, Status (report-workflow chip), Work Areas, and a per-row Report download button.',
      decisions: [
        'Date is a link-styled cell (linkRenderer) sorted descending by default, so the newest report leads — matching the reference prod tab exactly.',
        'Status here is the REPORT DOCUMENT\'s own paperwork lifecycle (draft / in review / in progress / final) — a separate concept from the compliance severity used elsewhere on the dashboard. It answers "has Fieldstone\'s office finished writing this up," not "is there a finding."',
        'The Report column is a small icon-only download button, not a link — it fires a real generated text file (the same DAILY MONITORING REPORT content the detail dialog\'s own download button produces), not a dead affordance.',
        'linkRenderer was extended to prefer a column\'s formatted value (valueFormatted) over the raw value, so Date can render a compact "8/4/26" while the underlying field stays the raw ISO string for correct chronological sort.',
      ],
      gotchas: [
        'The Report button\'s click handler MUST call stopPropagation() — the row itself is also click-wired to open the detail dialog (onRowClicked), so without it every download also pops the dialog open behind the browser\'s download prompt.',
        'The footer\'s "Filtered Records" count only appears once a filter narrows the set below the total — it should stay hidden at the unfiltered 47, not show "47 of 47."',
      ],
      acceptance: [
        'The grid lists all 47 site visits, newest date first, with a working status chip per row.',
        'Clicking a row\'s Report icon downloads a text file for that row only, without opening the detail dialog.',
        'Download as CSV exports every currently-filtered row; the footer count matches what is on screen.',
      ],
    },
    {
      label: 'Detail dialog (read-only)',
      selector: '#dr-detail',
      apply: [{ click: '.ag-row' }],
      intent:
        'An esa-side-dialog showing one site visit in full: report status, monitor, work areas, the visit summary, and — when the visit logged a finding — the observations from that day. A "Download Report" button reproduces the same file as the grid\'s per-row icon.',
      decisions: [
        'esa-side-dialog (520px), the same pattern as the Observations and Permits & Studies detail panels, so the whole spoke opens a record the same way.',
        'Read-only: no edit/approve control for the report status. This page reviews the monitor\'s written record; it does not manage the workflow that produced it.',
        'The observations list only renders when that visit actually logged a finding — a routine patrol day shows just the summary, with no empty "Observations" heading dangling above nothing.',
      ],
      gotchas: [
        'ONE shared dialog instance serves every row; openDetail() overwrites its contents on each click. The SSR seed is the first row purely so the panel has structure before any JS runs — never mistake that seed for the selected record.',
        'The dialog\'s own Download Report button and the grid\'s per-row icon must produce byte-identical output for the same row — they call the same buildReportText()/download() functions rather than each formatting the file independently.',
      ],
      acceptance: [
        'Clicking any row opens a 520px right side-dialog showing that visit\'s status, monitor, work areas, and summary.',
        'A visit with a logged finding also lists its observation(s); a routine visit shows no observations section at all.',
        'Download Report in the dialog produces the same file the grid\'s row-level download button would for that same row.',
      ],
    },
  ],
};
