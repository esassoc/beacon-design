// Handoff spec for the /data-catalog-requirement-streamlined prototype — the authored
// counterpart to the auto-derived capture. It declares which regions are inspectable
// sections (by selector), plus the design intent, decisions, gotchas, and acceptance a
// dev/Claude needs to re-implement each one faithfully in the Angular Beacon app.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by the
// browser. Capture runs against the production preview build.
//
// Context: the Data Catalog "home" of ONE requirement under the STREAMLINED Compliance
// Workflow (BCN-1163 + BCN-1283; Prologis tenant). Streamlined COLLAPSES Requirement ↔
// Action ↔ one-time Action Implementation into a single 1:1:1 record, and ALIASES the
// Action entity to "Requirement" everywhere — so this page reads as ONE merged record,
// not the two-hop Requirement→Action jump the standard twin (data-catalog-requirement)
// keeps. It is setup/config/CRUD ONLY: zero tracking / ActionImplementation leakage —
// no status, due date, or assignee anywhere; that data lives in the Tracking area.
// Prologis config narrows it further: Action Text is HIDDEN, Timing is one-time only
// (no frequency), scope is fixed Project, and Action Lists are dropped. Recomposed in
// the catalog detail family (identity header + main/rail + lineage spine + two-pane
// edit modal + PDF viewer drawer). See the typedef in requirement-tracker.mjs for
// field shapes.

/** @type {{ sections: import('./requirement-tracker.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Identity header',
      selector: '.bcn-action__head',
      intent:
        'The requirement identity row: the parent commitment badge (MM-BIO-2) on top, the requirement name as a decorative H1, and a neutral Type badge (Survey) trailing the title — with a SINGLE primary action, "Edit requirement". The page renders its own identity header and hides PageLayout\'s default title row, so the H1 reads as the entity, not the page.',
      decisions: [
        'Exactly ONE header action — Edit. There is deliberately NO "Track this Requirement" jump-off: tracking is a separate area, and surfacing it here would leak an ActionImplementation affordance into the catalog.',
        'The commitment id is a badge ABOVE the name (the requirement\'s provenance), the Type is a neutral badge AFTER the name (a label, not a status chip) — both are quiet 4px badges, not colored state pills.',
        'Title uses the decorative font at 1.5rem / semibold — the detail-family identity treatment, shared verbatim with the standard twin and the source-document page.',
        'Edit opens the two-pane upsert modal (read source context | tabbed config), never an inline edit.',
      ],
      gotchas: [
        'PageLayout\'s built-in title row is suppressed with a global `.page-layout__title { display: none !important }` (the !important beats Astro\'s scoped `.page-layout__title { display: flex }`); the page supplies its own header. Re-implementing in Angular, render the identity header on the detail component and keep the single-action discipline.',
        'Do NOT reintroduce a Track / status / due affordance in the header — the streamlined merge does not change the rule that the Data Catalog is config-only.',
      ],
      acceptance: [
        'Commitment badge sits above an H1 of the requirement name with a neutral Type badge trailing; the only header action is "Edit requirement"; nothing tracking-related appears.',
      ],
    },
    {
      label: 'Requirement reference',
      selector: '.bcn-reqref',
      intent:
        'The full requirement reference block (BcnRequirementReference): the source requirement text in serif, then a metadata grid — Resource Category / Type / Phase / Frequency / Milestone / Species / Season / Construction Activities / Responsible Party / Expected Evidence. It is the single source of truth for the merged record\'s reference data; the rail carries ONLY what this block does not, so there is zero duplication.',
      decisions: [
        'One reusable bcn-* component owns the whole reference read (text + metadata grid + source link) — the page composes it, it does not re-hand-roll a definition list.',
        'It carries the FULL conditional trio as first-class rows (Species / Season / Construction Activities) — the MM-BIO-2 nesting-bird survey is the record that exercises all three.',
        'The block\'s own footer "Edit Requirement" button is HIDDEN here (the page header owns Edit); its "View in Source Document" trigger ([data-bcn-source]) opens the shared source drawer.',
        'It sits on the page as a white card (surface white against the page background), not inside a dialog.',
      ],
      gotchas: [
        'Do not render an Edit affordance inside this block on the detail page — the page header is the single edit entry point; the block\'s footer Edit is suppressed with `.bcn-action__main :global([data-bcn-edit]) { display: none }`.',
        'Rows with no value are hidden (data-field + hidden), not shown empty; keep that conditional so the trio collapses cleanly for requirements that lack a season or activity.',
      ],
      acceptance: [
        'Serif requirement text over a metadata grid including the Species / Season / Construction Activities trio; no inline Edit button; "View in Source Document" opens the PDF drawer.',
      ],
    },
    {
      label: 'Reference Files',
      selector: '#ref-files',
      intent:
        'A read list (esa-file-list lego) of the requirement\'s reference files — protocols and guidance PDFs attached to the requirement config (e.g. the nesting-bird survey protocol, the no-disturbance-buffer guidance).',
      decisions: [
        'esa-file-list populated client-side from a files array; this is a reference-config list, distinct from evidence-of-compliance (which is tracking data and does not appear on this page).',
        'Files are managed in the edit modal\'s Evidence tab (esa-file-upload); the detail page shows them read-only.',
      ],
      gotchas: [
        'The rows render in the lego\'s SHADOW DOM — a light-DOM selector cannot reach them; set the `.files` property, do not inject row markup.',
        'Do not conflate these reference files with tracked evidence uploads — different lifecycle, different area.',
      ],
      acceptance: [
        'A read-only file list showing the requirement\'s reference PDFs.',
      ],
    },
    {
      label: 'Lineage spine',
      selector: '.bcn-lineage',
      intent:
        'One connected lineage spine leading the rail: the entity chain this requirement descends from — Project → Source Document → Commitment → this Requirement — on a single line with one circular-icon treatment. It places the merged record in the catalog hierarchy and doubles as upward navigation to its provenance.',
      decisions: [
        'A single <ol> renders all four nodes so they share the connecting line + circular icon chips — it must read as ONE spine, ported verbatim from the standard twin (data-catalog-requirement.astro) so the two workflows stay visually parallel.',
        'The CURRENT node (this Requirement) gets the secondary-ring accent (border + text in --color-secondary) and a non-link name; ancestry nodes are links in the brand link color.',
        'Each node shows a "kind" caption (Project / Source Document / Commitment / Requirement) above the entity name. The Commitment node names both id and title (MM-BIO-2 — Nesting Birds and Raptors).',
        'Lineage LEADS the rail (above Details / Timing / Notifications) — provenance first, config second. It replaced the removed "Track this Requirement" jump-off as the rail\'s opening module.',
      ],
      gotchas: [
        'The connecting line is a ::before on each node, hidden on :last-child — keep all nodes in the one <ol> or the line breaks.',
        'This is composition glue shared across the catalog detail family (requirement / commitment / source-document), not an esa-* lego — the lego lookup found no ancestry-spine component. If Angular already has an entity-breadcrumb/lineage control, reuse it; otherwise this is a promotion candidate.',
        'The current-node ring is --color-secondary here (the requirement family), whereas the source-document page fills the current dot with --color-primary — keep each page\'s family accent.',
      ],
      acceptance: [
        'One unbroken spine Project → Source Document → Commitment → Requirement, the Requirement node carrying the secondary ring and a non-link name; ancestry names link to their catalog targets.',
      ],
    },
    {
      label: 'Details rail',
      selector: '.bcn-action__rail > details.esa-collapsible:nth-of-type(2)',
      intent:
        'The Details rail module (esa-collapsible): Default Assignee + a fixed Project scope. It carries ONLY the fields the reference block does not — Responsible Party and Type live in the reference block, so they are not repeated here.',
      decisions: [
        'Default Assignee is config (who a future implementation would be assigned to), not a tracking assignment — no live status attaches to it on this page.',
        'Scope is a fixed "Project" with a hint ("Streamlined requirements are always project-scoped") — under Prologis there is no scope choice, so it is shown as a settled value, not a control.',
        'Action Text is HIDDEN (Prologis config — no Jira story yet) and Action Lists are dropped entirely, so neither appears in this module or the edit modal.',
      ],
      gotchas: [
        'Do not re-list Type / Responsible Party here — they belong to the reference block; duplicating them was the drift this layout deliberately removed.',
        'Selector is positional (nth-of-type(2) among the rail\'s <details> after Lineage) because esa-collapsible forwards no id/class; if the rail order changes, update the selector.',
      ],
      acceptance: [
        'A Details module showing Default Assignee and a fixed Project scope, with no duplication of reference-block fields.',
      ],
    },
    {
      label: 'Timing rail',
      selector: '.bcn-action__rail > details.esa-collapsible:nth-of-type(3)',
      intent:
        'The Timing rail module (esa-collapsible): a single one-time deadline rule ("14 days before milestone"). Under BCN-1163 the merged record is a one-time Action Implementation — a single implementation with a single due date — so there is NO frequency or recurrence control.',
      decisions: [
        'One-time only: the module states the deadline RULE (offset + relation + milestone), never a concrete due date — a date would be per-implementation tracking data, which does not belong in the catalog.',
        'Frequency / Milestone read in the reference block; the rail adds only the deadline rule, with a hint ("One-time — single implementation, single due date").',
      ],
      gotchas: [
        'Never surface a computed due DATE on this page — the rule is config; the date is tracking. The edit modal\'s Notifications tab shows a due date only as read context for scheduling, labelled "edited in Project Tracking".',
        'Selector is positional (nth-of-type(3)); update it if the rail order changes.',
      ],
      acceptance: [
        'A Timing module showing a one-time deadline rule and no frequency control or concrete due date.',
      ],
    },
    {
      label: 'Notifications rail',
      selector: '.bcn-triggers',
      intent:
        'The Notifications rail module: rule-phrasing trigger rows (Coming up / Due / Past due), each an icon | name | rule. It mirrors the standard Action detail page\'s trigger list and states only the notification RULES — never any one implementation\'s calculated dates.',
      decisions: [
        'Rules-only: "7 days before due", "On the due date", "1 day after due" — config phrasing, so the module is honest that it is setup, not a live schedule.',
        'The full editable notification config (toggles, lead days, additional recipients, and the schedule computed off a due date) lives in the edit modal\'s Notifications tab; the rail is a read summary.',
      ],
      gotchas: [
        'Do not render per-implementation notification dates in the rail — that is tracking leakage; the computed schedule is only shown inside the modal against a read-only due date.',
        'Keep the row anatomy icon | name | rule (rule right-aligned) consistent with the standard Action page so the two read as the same control.',
      ],
      acceptance: [
        'Three trigger rows (Coming up / Due / Past due) showing rule phrasing only, no concrete dates.',
      ],
    },
    {
      label: 'Edit Requirement modal',
      selector: '#edit-dialog',
      apply: [{ click: '#edit-req' }],
      intent:
        'The upsert surface — a fixed-size TWO-PANE esa-dialog matching the family geometry. LEFT is read-only SOURCE CONTEXT (the requirement text in serif, the commitment badge, the source document); RIGHT is the merged config as an esa-tab-layout (Details / Timing / Evidence of Compliance / Notifications). There is no requirements-assignment pane — the 1:1 Action link is automatic (BCN-1163).',
      decisions: [
        'Two panes on a FIXED-HEIGHT stage (2fr | 3fr); each pane scrolls independently so switching tabs or toggling a notification NEVER resizes the modal.',
        'The left pane is read-only context (why the 1:1 link needs no assignment step); its "View in Source Document" opens the shared source drawer.',
        'Details tab edits the merged fields including the trio (Species / Season / Construction Activities) as first-class controls; Requirement Text replaces Action Text (Action Text is hidden for Prologis).',
        'Timing tab is one-time (a note states no frequency); Notifications tab shows the due date as READ context ("edited in Project Tracking") with the schedule computed from it.',
        'Every control is an esa-* lego (esa-tab-layout / esa-text-field / esa-textarea / esa-select / esa-input-tag / esa-entity-search / esa-file-upload / esa-switch-toggle).',
      ],
      gotchas: [
        'The modal is a peer dialog opened from the header Edit button (the apply recipe clicks #edit-req); it is not nested in the page flow.',
        'The two-pane stage cancels esa-dialog\'s body padding (negative margin of --_dialog-padding) so the panes reach the edges and the tab-bar border spans the full pane width — keep that when porting.',
        'Do NOT add an Action Text field or an Action-Lists control — both are intentionally absent under the streamlined + Prologis config.',
        'Keep the z-stack: source drawer (1300) above the edit modal (1200) above the topbar (1100).',
      ],
      acceptance: [
        'Clicking "Edit requirement" opens a fixed-size two-pane modal: read source context left, a four-tab config right (Details/Timing/Evidence/Notifications), each pane scrolling independently; Cancel and Save close it.',
      ],
    },
    {
      label: 'Source viewer',
      selector: '#source-drawer',
      intent:
        'The source PDF shown in the family side-dialog (esa-side-dialog, lg / 66vw), opened from the reference block\'s "View in Source Document" trigger and the edit modal\'s context button. An iframe renders the PDF with the native viewer chrome stripped (#view=FitH&navpanes=0&pagemode=none).',
      decisions: [
        'It is the shared family side-dialog lego (not a bespoke drawer), 66vw with a blurred backdrop, rendered at page root so it beats the topbar and the edit modal.',
        'A single shared drawer instance serves both entry points (the reference block and the modal context button).',
        'Its footer carries an "Open Source Document" link to the source-document catalog page.',
      ],
      gotchas: [
        'The prototype loads the sample FEIR PDF; in the app, set the iframe src to the real source document before opening.',
        'Keep the z-stack ordering: viewer (--z-modal 1300) above the edit modal (1200) above the topbar (1100).',
      ],
      acceptance: [
        'Triggering "View in Source Document" (from the reference block or the modal) opens the PDF in a 66vw right side-dialog over a blurred backdrop.',
      ],
    },
  ],
};
