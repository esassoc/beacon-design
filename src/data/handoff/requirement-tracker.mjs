// Handoff spec for the /requirement-tracker prototype — the authored counterpart
// to the auto-derived capture. It declares which regions are inspectable sections
// (by selector), plus the design intent, decisions, gotchas, and acceptance a
// dev/Claude needs to re-implement each one faithfully in the Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by
// the browser. Capture runs against the production preview build.
//
// Context: this is the Prologis "Project Tracking" workspace re-cast as an AG Grid
// (Prologis wants a data grid, not the Kanban prod defaults to). Data is the real
// 3600 Alameda Avenue Project FEIR requirement export (130 rows). Columns mirror
// the live Progress Report view. Theme + grid chrome are ported verbatim from
// esassoc/Beacon so the prototype reads as the real app.

/**
 * @typedef {Object} HandoffSection
 * @property {string} label     Chip label in the inspector.
 * @property {string} selector  What to slice out as this section (first match).
 * @property {object[]} [apply]  Op recipe (click/fill/clear) to drive a live state.
 * @property {string} [intent]  What this is and why it exists.
 * @property {string[]} [decisions] Key design/implementation decisions.
 * @property {string[]} [gotchas]   Traps to avoid when re-implementing.
 * @property {string[]} [acceptance] "Done when…" checks.
 * @property {string[]} [js]    Source files that drive this section's behavior.
 */

/** @type {{ sections: HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Page header',
      selector: '.page-layout__title',
      intent:
        'The project title row: an H1 reading the project name ("3600 Alameda") with a green radar (Tracking) glyph, immediately followed by a neutral "Project Tracking" badge that names the workspace. The badge sits directly right of the H1, not in the far-right utilities slot.',
      decisions: [
        'The H1 is the PROJECT, not the page — the workspace name ("Project Tracking") is demoted to a badge beside it, so the user always sees what project they are in first.',
        'The radar icon is the Tracking section glyph, tinted brand green (--color-secondary / teal-500) to tie the title to the active nav section.',
        'The badge is neutral (gray-100 bg, gray-200 border, 4px radius) — it labels, it does not signal status, so it must not read as a colored state chip.',
      ],
      gotchas: [
        'PageLayout renders the icon outside the page component\'s style scope, so the green tint is applied with a global override — re-implementing in Angular, color the icon on the title component directly.',
        'Keep the badge directly adjacent to the H1 (same flex group); do not push it to the opposite end of the title row.',
      ],
      acceptance: [
        'H1 shows the project name with a green radar glyph; "Project Tracking" badge sits immediately to its right and reads as a neutral label.',
      ],
      js: ['src/layouts/PageLayout.astro'],
    },
    {
      label: 'View toggle',
      selector: '.tt-views',
      intent:
        'The Grid / Kanban / Timeline view switcher. Prologis wants the requirement set as a data GRID, so Grid is first and is the default (active) option; Kanban and Timeline are present but secondary.',
      decisions: [
        'Grid is the default view — it is listed first and active on load. This is the whole reason the prototype exists (prod defaults to Kanban; Prologis asked for the grid).',
        'A segmented control (pill group), not tabs — the three are peer views of the same data, switched in place with no navigation.',
        'In this prototype pass only Grid is wired; Kanban and Timeline render a labeled empty-state stub, deliberately identical, so the toggle is honest about what is built.',
      ],
      gotchas: [
        'The grid header + footer belong to the Grid pane only — they must hide when Kanban/Timeline is active, not float above an empty stub.',
        'Do not rebuild a real Kanban here; the two non-Grid views are intentionally stubs this pass.',
      ],
      acceptance: [
        'Grid is active on load; switching panes hides the grid chrome for the non-Grid views.',
      ],
      js: ['src/pages/prototypes/requirement-tracker.astro'],
    },
    {
      label: 'Grid header',
      selector: '.grid-header',
      intent:
        'Beacon\'s standard AG Grid header bar: a global quick-search on the left (placeholder "Search requirements…", with a clear-✕ that appears once you type) and a "Clear Filters" button on the right. Ported from esassoc/Beacon\'s beacon-grid-header.',
      decisions: [
        'Search is a QUICK FILTER (free-text across all columns), distinct from the per-column funnel filters. "Clear Filters" resets the column filter model only (setFilterModel(null)); the search ✕ clears the quick filter only — two independent affordances, matching Beacon.',
        'Placeholder is entity-aware ("Search requirements…") because under Prologis\'s Simplified aliasing the rows ARE their "Requirements".',
      ],
      gotchas: [
        'Do not collapse search and column-filter clearing into one control — Beacon keeps them separate and users expect that.',
        'The clear-✕ only shows when the search box has a value.',
      ],
      acceptance: [
        'Typing filters the grid within ~1 frame; ✕ clears search; Clear Filters resets column funnels; the two do not interfere.',
      ],
      js: ['src/pages/prototypes/requirement-tracker.astro'],
    },
    {
      label: 'Requirements grid',
      selector: '.tracker-grid',
      intent:
        'The AG Grid itself — the real grid (ag-grid-community), not a styled table. Column set mirrors the live Progress Report view: Source Document · Commitment ID · Requirement Name · Requirement Text · Requirement Type · Status · Comment · Action · Milestone(s) · Resource Category.',
      decisions: [
        'Theme is the Beacon "gold-star" Quartz theme ported verbatim from esassoc/Beacon (beacon-grid-theme.ts): teal-900 header, ESA-orange accent (#f9a134 — NOT teal), 13px DM Sans, 48/44 header/row heights, Lucide-funnel filter icon via iconOverrides, suppressHeaderMenuButton (funnel only, no hamburger).',
        'Columns use explicit (wide) widths and DO NOT fit-to-width — the grid overflows the viewport and scrolls left/right, like Beacon\'s data-catalog grids.',
        'Status renders as a compact chip (4px radius, 12px, status dot) centered in the row via a flex cell class — it is a renderer, not a theme feature.',
        'Linked cells (Source Document, Commitment ID, Requirement Name) render as regular-weight underlined links in the brand link color.',
        'The grid is the only wired view; the data shape is ActionRow in tracker-fixture.ts. The 5 tracking columns the FEIR export lacks (Requirement Text, Status, Comment, Action, Milestone) are synthesized deterministically in the fixture — flag this if real values are needed.',
      ],
      gotchas: [
        'AG Grid v33+ defaults to the Theming API (JS object), not CSS-class themes — there is no ag-theme-*.css to import. Beacon ships Material globally but its own backlog promotes this Quartz theme as the target; match Quartz.',
        'The accent is ORANGE, not the header teal — easy to get wrong since the header is teal.',
        'Quick-filter fires filterChanged ASYNCHRONOUSLY; read displayed-row-count in the onFilterChanged callback, never synchronously after setting quickFilterText.',
        'The grid renders client-side; status chip + link styles are injected outside the Astro scope, so they are authored as global rules.',
      ],
      acceptance: [
        'Teal header with funnel filter icons; orange sort/filter-active accent; columns overflow horizontally; status chips compact + centered; links underlined regular-weight.',
      ],
      js: ['src/pages/prototypes/requirement-tracker.astro', 'src/data/tracker-fixture.ts'],
    },
    {
      label: 'Grid footer',
      selector: '.table-footer',
      intent:
        'Beacon\'s standard grid footer: "Download as CSV" (download glyph) on the left, "Total Records: N" on the right, with "Filtered Records: N" appearing only when a search/filter narrows the set. Attaches flush under the grid to complete the rounded card.',
      decisions: [
        'Download exports the current grid via api.exportDataAsCsv().',
        'Total Records always shows the full row count; Filtered Records appears only while a filter is active — the gap between them is the at-a-glance "how much am I looking at".',
        'The footer border has no top edge and bottom-rounded corners because the grid wrapper is radius "4px 4px 0 0" — the two form one continuous card.',
      ],
      gotchas: [
        'Record counts must update from the grid\'s onFilterChanged (async), not from the input handler.',
        'Footer belongs to the Grid pane only.',
      ],
      acceptance: [
        'Total Records: 130 on load; searching shows Filtered Records: N; Download exports a CSV.',
      ],
      js: ['src/pages/prototypes/requirement-tracker.astro'],
    },
    {
      label: 'Prologis sidenav',
      selector: '.side-nav',
      intent:
        'The Prologis-specific, trimmed sidenav — what their tenant sees under the planned Simplified aliasing. Per-prototype: passed as navSections to the shared AppShell, not the global default.',
      decisions: [
        'Globally (AppShell default), Data Catalog is an EXPANDED section (Source Documents · Commitments · Requirements · Actions · All Data). For Prologis, Actions is removed — their "Requirements" will route to the Actions catalog under the Simplified fork.',
        'Prologis trims Project (Organize Actions / Action Lists / Document Reviews / Spatial Library Layers gone), Tracking (All Components gone), and Reporting (Progress Report gone).',
        'Separators sit after the Project group and after Reporting — placement ported verbatim from esassoc/Beacon (dividerAfter on those two sections).',
        'For this prototype every section except Tracking is collapsed on load, focusing attention on the active workspace.',
        'AppShell resolves a section\'s icon paths from its own glyph registry by name, so a per-prototype nav declares icon names only (icon: "radar") — no raw SVG threading.',
      ],
      gotchas: [
        'The trimmed tree is Prologis-only (passed via navSections); the global default keeps the full Project/Tracking/Reporting items and an Actions entry in Data Catalog.',
        'Divider placement is after Project and after Reporting — not directly under Setup Wizard (Setup + Project read as one top cluster in Beacon).',
      ],
      acceptance: [
        'Tracking is the only expanded section; Data Catalog shows no "Actions"; separators sit below Project and above Data Catalog.',
      ],
      js: ['src/layouts/AppShell.astro'],
    },
  ],
};
