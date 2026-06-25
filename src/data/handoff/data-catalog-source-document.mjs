// Handoff spec for the /data-catalog-source-document prototype — the authored
// counterpart to the auto-derived capture. It declares which regions are
// inspectable sections (by selector), plus the design intent, decisions, gotchas,
// and acceptance a dev/Claude needs to re-implement each one faithfully in the
// Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by
// the browser. Capture runs against the production preview build.
//
// Context: the Data Catalog "home" of ONE source document (the 3600 Alameda FEIR) —
// what it is, who approved it, what it contains. Modeled on the prod Source Document
// overview field set, recomposed in the Data Catalog detail family (identity header
// + main/rail + lineage + PDF viewer drawer + single-pane upsert). This spec curates
// the four moves the e161abe pass introduced — files-as-viewer, the lineage spine,
// the coversheet rail action, and the danger-zone delete — plus the framing identity
// header and edit modal. See the typedef in requirement-tracker.mjs for field shapes.

/** @type {{ sections: import('./requirement-tracker.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Identity header',
      selector: '.bcn-doc__head',
      intent:
        'The document identity row: an H1 of the source-document name (the FEIR) with a SINGLE primary action — "Edit source document". The page renders its own identity header and hides PageLayout\'s default title row, so the H1 reads as the entity, not the page.',
      decisions: [
        'Exactly ONE header action — Edit. There is deliberately no header "View Document" (a document can have several files, so viewing is per-file from the Files list) and no header trash icon (delete lives in a bottom danger zone).',
        'Title uses the decorative font at 1.5rem / semibold — the detail-family identity treatment, ported from data-catalog-requirement.astro.',
        'Edit opens a single-pane modal (the prod Edit Source Document field set), never an inline edit or a side drawer.',
      ],
      gotchas: [
        'PageLayout\'s built-in title row is suppressed with a global `.page-layout__title { display: none }`; the page supplies its own header. Re-implementing in Angular, render the identity header on the detail component and keep the single-action discipline.',
        'Do not reintroduce a header View or Delete — those moves live in the Files list and the danger zone respectively.',
      ],
      acceptance: [
        'H1 shows the document name; the only header action is "Edit source document"; no View or Delete in the header.',
      ],
    },
    {
      label: 'Files (files-as-viewer)',
      selector: '#doc-files',
      intent:
        'The Files list (esa-file-list lego) is the document\'s entry point: each file NAME is a link to the source PDF, and clicking it opens the in-page viewer drawer instead of navigating. Because a document can have several files, viewing is per-file here — which is exactly why there is no single "View Document" header action.',
      decisions: [
        'esa-file-list is populated client-side from a files array; each row name is an <a> whose href is the source PDF (the no-JS fallback). A click handler intercepts the anchor, preventDefaults, and opens the side-dialog viewer.',
        'The lego\'s per-row download button (downloadable defaults true) is kept and wired separately: name-link OPENS the viewer, download-button DOWNLOADS. Two distinct affordances per row.',
        'Row density is bumped via the lego\'s --file-list-row-padding-y knob (its default is a tight 2px block padding).',
        'The "Files (N)" count is a neutral esa-badge beside the heading — a label, not a status.',
      ],
      gotchas: [
        'The file rows render in the lego\'s SHADOW DOM — outerHTML will not show them and a light-DOM selector cannot reach them. Intercept the click with composedPath() to find the anchor, not event.target.',
        'Only the name-link opens the viewer; the download <button> is not an anchor, so it must fall through to the download handler — do not open the viewer on every row click.',
        'In the prototype every file resolves to the same sample PDF; wire real per-file hrefs in the app.',
      ],
      acceptance: [
        'Clicking a file name opens the PDF viewer drawer; the per-row download button downloads; the "Files (N)" count matches the list length.',
      ],
    },
    {
      label: 'Document viewer',
      selector: '#source-drawer',
      intent:
        'The source PDF shown in the family side-dialog (esa-side-dialog, lg / 66vw), opened from the Files list. An iframe renders the PDF with the native viewer chrome stripped (#view=FitH&navpanes=0&pagemode=none).',
      decisions: [
        'It is the shared family side-dialog lego (not a bespoke drawer), 66vw with a blurred backdrop.',
        'Entry is exclusively the file rows — there is no header "View" action, because the document is multi-file.',
        'A single shared drawer instance serves every file row.',
      ],
      gotchas: [
        'The prototype loads the sample PDF for every file; in the app, set the iframe src from the clicked file before opening.',
        'Keep the z-stack ordering: viewer (1300) above the edit modal (1200) above the topbar (1100); the delete confirm sits above all (1400).',
      ],
      acceptance: [
        'Opening a file shows the PDF in a 66vw right side-dialog over a blurred backdrop.',
      ],
    },
    {
      label: 'Lineage spine',
      selector: '.bcn-lineage',
      intent:
        'One connected lineage spine in the rail: the document\'s ANCESTRY (Project → this Source Document) followed by its CHILD rollups (Commitments / Requirements / Actions), all on a single line with one icon treatment. It places the document in the catalog hierarchy and doubles as navigation into what it contains.',
      decisions: [
        'A single <ol> renders both ancestry nodes and child-rollup nodes so they share the connecting line + circular icon chips — it must read as ONE spine, not two stacked lists.',
        'The CURRENT node (this document) gets a filled primary dot + primary-text name; ancestry and child nodes are links in the brand link color.',
        'Each node shows a "kind" caption (links to that catalog LIST) above the entity name (links to the ENTITY). Child rollups add a neutral count badge and use the smaller caption-size name.',
        'Counts are fixture-computed (distinct commitments, requirement rows, distinct actions); the full rosters live on the linked catalog lists, not here.',
      ],
      gotchas: [
        'The connecting line is a ::before on each node, hidden on :last-child — keep all nodes in the one <ol> or the line breaks between ancestry and children.',
        'Child-rollup nodes need the double-class selector (.bcn-lineage__node.bcn-lineage__node--child) to win center-alignment over the base node rule (equal specificity, defined later in the sheet).',
        'The count is the house NEUTRAL badge (esa-badge re-pointed to sunken surface + secondary text), not the teal secondary — it labels a count and must not read as a status chip.',
      ],
      acceptance: [
        'One unbroken spine: Project → Source Document (filled current dot) → Commitments / Requirements / Actions with neutral counts; kind captions and names link to the correct catalog targets.',
      ],
    },
    {
      label: 'Coversheet download',
      selector: '.bcn-coversheet',
      intent:
        'A rail action module: a full-width "Download Source Coversheet" button (prod sourcesSourceIDCoverSheetGet, which saves Source-Coversheet_{Name}.pdf). A document-level output action that belongs neither in the identity header nor the danger zone.',
      decisions: [
        'Rendered as a ghost/outline EsaButton stretched full-width at the bottom of the rail — a quiet, secondary action, visually distinct from the primary Edit and the destructive Delete.',
        'In the prototype it downloads the sample PDF under the prod filename pattern; wire it to the coversheet endpoint in the app.',
      ],
      gotchas: [
        'It is an outline ghost, NOT a primary button — the coversheet is a utility output, not the page\'s main action; keep the visual weight low.',
      ],
      acceptance: [
        'A full-width "Download Source Coversheet" button at the bottom of the rail triggers a download.',
      ],
    },
    {
      label: 'Danger zone (delete)',
      selector: '.bcn-danger-zone',
      intent:
        'The destructive action lives in a bottom danger zone (BcnDangerZone — GitHub layout: a heading OUTSIDE/above a red-bordered box, and inside it a row of [bold title + description | right-aligned soft-danger button]). Deleting the document also deletes its files, so it is deliberately separated from the rest of the page and gated by a confirm.',
      decisions: [
        'Uses BcnDangerZone, not esa-danger-zone: the lego stacks heading-INSIDE the box; this ports Beacon\'s ui-danger-zone as GitHub\'s heading-OUTSIDE / per-item-row anatomy. It is a candidate to promote to an esa- variant.',
        'Delete is a SOFT-danger button (color=danger, appearance=soft), not a loud solid fill — present but not alarming.',
        'Confirm is a simple yes/no esa-confirm-dialog (danger variant), NOT type-to-confirm — faithful to Beacon. On confirm, prod navigates back to the source-documents list.',
        'There is NO header trash icon — delete is reachable only here, at the bottom, behind the confirm.',
      ],
      gotchas: [
        'Do not add a type-to-confirm; Beacon uses a plain confirm and the prototype matches it.',
        'The confirm dialog z-index (1400) must sit above the topbar and the other dialogs.',
        'BcnDangerZone reads only the semantic token layer; the box border is --color-danger.',
      ],
      acceptance: [
        'A red-bordered danger zone at the page bottom with a soft-danger "Delete source document" button; clicking it opens a simple confirm; confirming routes to the source-documents list.',
      ],
    },
    {
      label: 'Edit Source Document modal',
      selector: '#edit-dialog',
      apply: [{ click: '#edit-doc' }],
      intent:
        'The single-pane upsert — a single-column esa-dialog carrying the prod Edit Source Document field set (Name, Project, Date of Latest Amendment, Reference Number, Approving Agency, Agency Contact, Agency Signatory, Description). It is the only edit surface; there is no inline editing.',
      decisions: [
        'Single column, not a two-pane editor — the field set is small and flat (contrast the Action modal\'s two-pane assignment). Two paired fields (Amendment date + Reference Number; Contact + Signatory) sit in 2-up rows via .bcn-grid-2.',
        'Every control is an esa-* lego (esa-text-field / esa-select / esa-date-picker / esa-textarea); the dialog is 640px wide, 92vh max.',
        'Fields pre-populate from the page\'s editPayload on load; Save/Cancel just close in the prototype.',
      ],
      gotchas: [
        'The modal is a peer dialog opened from the header Edit button (the apply recipe clicks #edit-doc); it is not nested in the page flow.',
        'Project is an esa-select with options set client-side; the date is an esa-date-picker taking an ISO value (2026-02-20).',
      ],
      acceptance: [
        'Clicking "Edit source document" opens a 640px single-column modal with the 8 prod fields pre-filled; Cancel and Save close it.',
      ],
    },
  ],
};
