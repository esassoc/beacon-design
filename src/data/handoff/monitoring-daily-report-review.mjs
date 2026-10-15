// Handoff spec for /prototypes/monitoring/daily-report-review — QA/QC review of one
// Daily Monitoring Report (DMR), and generation of the regulator report as a PDF.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by the
// browser. Capture runs against the production preview build.
//
// SCOPE: today the internal QA/QC + reporting team reviews a field inspector's log
// across several Fulcrum grids and the report is generated as a Word doc. This page
// keeps prod's Daily Monitoring Report detail layout and adds: tracked editing (two
// edit kinds — Fulcrum data corrections vs Beacon-only report wording), batched sync
// back to Fulcrum, a change log, editable compliance concerns that are PERSISTENT
// records shared across DMRs, and preview → PDF generation.
//
// All state lives in src/lib/dmr-review-store.ts. Fixture (Coyote Wash Substation,
// Fieldstone Environmental Monitoring, Basin & Range Lands Office) is invented — see
// the header of src/data/dmr-review-fixture.ts. No real project data, names or logos.

/** @type {{ sections: import('./requirement-tracker.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Unsynced-changes bar (batched push to Fulcrum)',
      selector: '[data-bcn-dmr-sync-bar]',
      intent:
        'Corrections to monitoring data are held in Beacon as PENDING until the reviewer pushes them to Fulcrum together. The bar counts them and offers Review (a dialog listing each correction old → new, with per-row Undo) and Push to Fulcrum.',
      decisions: [
        'Batch-then-push, not instant sync (product decision): reviewers check a set of corrections before anything leaves Beacon.',
        'Several edits to one field collapse into ONE pending correction; editing a field back to the value Fulcrum holds withdraws it (logged as "Withdrawn").',
        'The bar disappears at zero pending — no "0 corrections" state.',
      ],
      gotchas: [
        'The "Fulcrum value" shown in Review is what Fulcrum holds NOW, not the first edit\'s from-value — after a partial push those differ.',
        'Push can also be requested from the report preview ("Push to Fulcrum first") via a document-level bcn-dmr-push-request event; both paths must run the same push + confirmation.',
      ],
      acceptance: [
        'Editing a Fulcrum-data field (e.g. Precipitation) raises the count by one and marks the field "Pending sync".',
        'Push to Fulcrum clears the bar and turns every pending marker into "Synced"; the change log records "Pushed N changes to Fulcrum".',
      ],
    },
    {
      label: 'Details + map, Report Information',
      selector: '.bcn-dmr-details',
      intent:
        'Prod\'s Details card (detail-facts, ported as BcnDetailFacts) with prod\'s eight facts in prod\'s order, beside the observations map at the same height; below, full width, the three General Information fields the regulator report carries that prod\'s card does not (Contractors, Tailboards Attended, Variance Requests Reviewed).',
      decisions: [
        'Every Fulcrum-sourced value is a BcnTrackedField: same reading as prod plus a provenance marker ("Pending sync" / "Synced" / "Edited in Beacon") whose tooltip names the Fulcrum or inspector value, who changed it and when.',
        'Inline facts are click-to-edit (the value itself is the edit button, hover tint + focus ring) because a pencil per value made sentence-like facts ("September 11, 2026 7:00 AM – 4:30 PM") wrap.',
        'Two edit kinds, decided per field: monitoring data syncs to Fulcrum; report wording (tailboards, variances, notes, activity write-ups) is Beacon-only and never pushed.',
      ],
      gotchas: [
        'The Details card gets ~60% of the band (not prod\'s 50%) because the change-log rail takes a column; with the rail collapsed it widens.',
        'Pin colors on the map follow each work area\'s CURRENT compliance level and update in place when a level is edited.',
      ],
      acceptance: [
        'Clicking any Details value opens an inline editor whose helper line says where the edit goes (Fulcrum on push, or report only).',
        'The map is exactly as tall as the Details card; Report Information spans the full width beneath them.',
      ],
    },
    {
      label: 'Work Area Reports',
      selector: '[data-bcn-dmr-wa]',
      intent:
        'Prod\'s work-area section restyled to match prod: one collapsible per work area, the work area\'s Compliance Level (it goes into the regulator report) left of a right-aligned "View as Categories | Chronological Order" toggle, teal category headings, and tinted item rows with prod\'s entity icons, bold title, muted time, indented write-up and right-aligned thumbnails. Then Notes, Wildlife Observed and Photos (each with an Include in report switch).',
      decisions: [
        'Prod is the precedent here, so items carry prod\'s per-item entity icons (triangle-alert, construction cone, bird, flag).',
        'Excluding a photo is a Beacon-only edit; it fades the photo everywhere it appears and drops it from the report.',
      ],
      gotchas: [
        'esa-collapsible only takes a string title, so the header cannot do prod\'s bold name + regular date + outlined count badge; the count is folded into the title text (filed as a lego gap).',
        'The Chronological view MOVES the same <li> nodes rather than rendering a second list, so each tracked field exists once on the page.',
      ],
      acceptance: [
        'Switching to Chronological Order lists every item of that work area in time order; switching back restores the categories.',
        'Turning a photo\'s Include in report off fades it and removes it from the report preview and PDF.',
      ],
    },
    {
      label: 'Compliance concern (persistent, shared record)',
      selector: '[data-bcn-cc][data-item-id="ts22-c1"]',
      apply: [{ click: '[data-bcn-cc][data-item-id="ts22-c1"] [data-bcn-cc-toggle]' }],
      intent:
        'A compliance concern is a persistent record (prod\'s Observation) that many DMRs log against. Collapsed it reads like prod\'s row; expanded it separates THIS report\'s log entry (report-only) from the SHARED concern record (Status, Description — prod\'s observation-detail facts) and shows the full Daily Logs history across reports, this report\'s entry tagged.',
      decisions: [
        'Editing the shared record from a DMR is allowed but never silent: a "Shared record" box lists every other DMR that includes the concern with its report status; the editor\'s helper line repeats it; Save asks for confirmation naming those reports.',
        'Product decision: record edits ARE allowed from a DMR (with the warning + confirmation), and every other report whose PDF was already generated is flagged "Out of date — regenerate" (in the Shared record list, and logged in the change log). The issued PDF itself never changes silently.',
        'Record fields are Fulcrum data, so record edits batch-sync like any other correction and are labelled "shared record" in the change log.',
        'A concern that only this DMR includes (Dust-2347-09112026) says so and skips the confirmation.',
      ],
      gotchas: [
        'Concern titles are record IDs (type-number-first-observed date), matching prod; the report shows the record\'s CURRENT status beside the ID.',
        'Each generated report is flagged once per concern; drafts are not flagged (they pick up the record change when they are generated).',
      ],
      acceptance: [
        'Expanding a concern shows three parts in order: this report\'s log entry, the shared record (with the list of other reports), and Daily Logs (newest first).',
        'Changing Status on Erosion-2331-09092026 opens a confirmation naming Sep 9, Sep 10 and Sep 12; confirming updates the row\'s status badge, marks the field "Pending sync", and flags Sep 9 and Sep 10 (generated) "Out of date — regenerate"; declining keeps the editor open.',
      ],
    },
    {
      label: 'Change log (collapsible rail)',
      selector: '[data-bcn-dmr-change-log]',
      intent:
        'Who changed what, and when: a date-grouped timeline of every edit (field · context, old → new, who · time, tag: Pending sync / Synced to Fulcrum / Withdrawn / Beacon only) and every event (submitted from Fulcrum, pushed, report generated). Filter: All · Syncs to Fulcrum · Beacon only. Collapses to a slim strip that hands its width back to the report.',
      decisions: [
        'BcnChangeLog was extended (backward compatible) rather than duplicated; runtime rows reuse its exact markup.',
        'Not a live region: every entry records something the user just did elsewhere, and that control owns its feedback.',
        'Collapsed/expanded is remembered per browser.',
      ],
      gotchas: [
        'A correction\'s tag reflects its CURRENT state — an entry logged as pending reads "Synced to Fulcrum" after a push.',
      ],
      acceptance: [
        'Every edit on the page appears at the top of the log immediately with the right tag.',
        'Collapsing the rail widens the report column; reloading keeps it collapsed.',
      ],
    },
    {
      label: 'Report preview → PDF',
      selector: '.bcn-report-preview',
      apply: [{ click: '[data-dmr-open-report] button' }],
      intent:
        'Generate Report opens a preview of the regulator document (letterhead, General Information, Compliance Monitoring Details per location, captioned photos, End of Report) built from the same model as the PDF, so the preview is what gets issued. Generate PDF downloads it and moves the DMR to Report Generated.',
      decisions: [
        'PDF, not Word (product decision), generated client-side here with jsPDF + autotable from the shared report model.',
        '"Highlight Beacon edits" tints every passage whose text differs from the inspector\'s Fulcrum original — the reviewer sees exactly what the regulator reads that is not in the field record. The PDF never carries the tints.',
        'If corrections are still unpushed, the preview warns and offers "Push to Fulcrum first".',
      ],
      gotchas: [
        'The current prod Word generator prints "[object Object]" for Contractor(s); the model joins the contractor list explicitly.',
        'The PDF uses Times (built in) rather than the theme\'s Besley; embedding the brand font is a production task.',
      ],
      acceptance: [
        'The preview reflects every edit made on the page; Generate PDF downloads a multi-page PDF with the invented letterhead on every page and "Page X of Y" footers.',
        'After generating, the status chip reads Report Generated and the change log records the file name.',
      ],
    },
  ],
};
