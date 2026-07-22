// Beacon Release Notes content — the client-facing subset behind the Release
// Notes prototype page and the "What's new" popover.
//
// Transcribed and condensed from esassoc/Beacon docs/release-notes (1.31.0,
// 1.32.0, 1.33.0). Only customer-facing material is carried here: the release
// header facts, the Headlines, the Customer Announcements reorganized into
// per-area sections, and a de-emphasized fixes list. ESA-internal Operations &
// Support sections, dev-only notes, and the PR/Jira change-log tables are
// intentionally omitted; Jira ticket numbers are stripped from the fixes lines.
//
// Consumers:
//   - the Release Notes prototype page — renders every release in full.
//   - BcnHelpBar — the "What's new" popover surfaces the latest release.

/** One renderable chunk of a release entry body. Inline **bold** and `code` are allowed in text and rendered by the components. */
export type ReleaseBlock =
  | { kind: 'p'; text: string }
  | { kind: 'bullets'; items: string[] }
  /** "Read this first" heads-up callouts (the blockquotes in the source notes). */
  | { kind: 'callout'; text: string };

export interface ReleaseEntry {
  /** Kebab id, unique within the release — anchor target. */
  id: string;
  title: string;
  /** Feature-flag note when the source calls one out, e.g. 'DocumentReview'. */
  flag?: string;
  /** Applicability note when the source calls one out, e.g. 'applies to all tenants'. */
  applies?: string;
  blocks: ReleaseBlock[];
}

export interface ReleaseSection {
  /** Area heading, e.g. 'Data Catalog', 'Monitoring Portal'. */
  title: string;
  entries: ReleaseEntry[];
}

export interface ReleaseHeadline {
  title: string;
  text: string;
  /** Entry id this headline expands into, when one exists in sections. */
  entryId?: string;
}

export interface Release {
  /** e.g. '1.33.0' */
  version: string;
  /** Hash anchor, e.g. 'v1-33-0'. */
  anchor: string;
  /** ISO date. */
  date: string;
  /** e.g. 'Patched through 1.32.2 (2026-05-27)'. */
  patchNote?: string;
  latest?: boolean;
  headlines: ReleaseHeadline[];
  sections: ReleaseSection[];
  /** De-emphasized fixes bullets (inline **bold** / `code` allowed). */
  fixes: string[];
}

export const RELEASES: Release[] = [
  {
    version: '1.33.0',
    anchor: 'v1-33-0',
    date: '2026-06-02',
    latest: true,
    headlines: [
      {
        title: 'Commitment Lists',
        text: 'The Data Catalog Commitments page gains reusable **Lists** — save a filtered view as a named List, reopen it later to scope the grid to its members, update its membership from the current view, add or remove individual commitments inline, and rename or delete Lists with confirmation. This replaces (and retires) the old "Tag These Commitments" workaround in the Compare overlay.',
        entryId: 'commitment-lists',
      },
      {
        title: 'Evidence of Compliance is consolidated to one grid',
        text: '**Read this first** — the EoC tabs on Project and Component detail pages are **removed**; all evidence is now managed from the canonical Data Catalog EoC grid with Project / Component / Work Area scope selectors. Featuring evidence on a Component\'s Summary Page moves to a multi-select dialog. Image and `.zip` files are now allowed as evidence.',
        entryId: 'eoc-single-grid',
      },
      {
        title: 'Monitoring Portal: Commitment Compliance',
        text: 'A new dashboard section surfaces which commitments are out of compliance and the observations driving it — Nesting Bird and Biological Resource observations are now bridged to commitments by species.',
        entryId: 'commitment-compliance',
      },
      {
        title: 'The legacy app shell is retired',
        text: '**Read this first** — the modern header and side navigation are now the only experience; the old shell is gone.',
        entryId: 'legacy-shell-retired',
      },
      {
        title: 'ESA Admins can create & configure tenants in-app',
        text: 'A new Configure → Tenants screen lets ESA Admins stand up a new tenant — name, subdomain, modules, enrolled users, and starter commitment types, phases, and resource categories.',
      },
    ],
    sections: [
      {
        title: 'Data Model & Navigation Updates',
        entries: [
          {
            id: 'eoc-tabs-moved',
            title: 'Evidence of Compliance tabs are gone from Project and Component detail pages',
            blocks: [
              {
                kind: 'callout',
                text: 'Read this first — these three changes move or remove things you\'re used to finding in a particular place.',
              },
              {
                kind: 'p',
                text: 'All Evidence of Compliance is now managed from the canonical Data Catalog EoC grid, which gained Project / Component / Work Area scope selectors. Nothing is lost — the same records are reachable from the grid — but anyone used to the per-Project or per-Component EoC tab needs to be pointed at the Data Catalog grid instead. Featuring evidence on a Component\'s Summary Page is now done through a multi-select dialog opened from the Component overview star.',
              },
            ],
          },
          {
            id: 'legacy-shell-retired',
            title: 'The legacy app shell has been retired',
            blocks: [
              {
                kind: 'p',
                text: 'The modern header and side navigation are now the only experience — the old shell can no longer be toggled on. Customers still on the legacy look will see the modern shell on their next sign-in.',
              },
            ],
          },
          {
            id: 'species-names-corrected',
            title: 'Some species names have been corrected',
            blocks: [
              {
                kind: 'p',
                text: 'A data issue had stripped the substring "go" from certain species names (e.g. "San Die Banded Gecko" → corrected to "San Diego Banded Gecko", "lden Eagle" → "Golden Eagle", "Marbled Dwit" → "Marbled Godwit"). These names — and their 4-letter species codes where applicable — are restored to their correct spelling.',
              },
            ],
          },
        ],
      },
      {
        title: 'Commitment Lists',
        entries: [
          {
            id: 'commitment-lists',
            title: 'Organize commitments into reusable Lists on the Commitments page',
            applies: 'applies to all tenants',
            blocks: [
              {
                kind: 'p',
                text: 'Create a List from a filtered view, add commitments to an existing List, edit or compare Lists, and add or remove individual commitments inline. The Commitments grid toolbar now exposes a **Lists** library: save the current view as a named List, reopen it later to scope the grid to its members, update its membership from the current view, and rename or delete Lists with confirmation. The previous "Tag These Commitments" bulk workaround in the Compare overlay is removed — existing tag chips, tag filtering, and per-commitment tag editing are unchanged.',
              },
              {
                kind: 'p',
                text: 'This release also brings a refreshed visual style across grids and pages — a cleaner page shell, updated grid styling, and more compact tag chips.',
              },
            ],
          },
        ],
      },
      {
        title: 'Evidence of Compliance',
        entries: [
          {
            id: 'eoc-single-grid',
            title: 'Evidence of Compliance is managed from a single grid',
            applies: 'applies to all tenants',
            blocks: [
              {
                kind: 'p',
                text: 'The Evidence of Compliance tabs on Project and Component detail pages are removed; their content now lives on the canonical Data Catalog EoC grid, which has Project / Component / Work Area scope selectors. Featuring evidence on a Component\'s Summary Page is now a multi-select dialog — open the Component overview star and pick all components on whose Summary Page the evidence should appear. (See the Data Model heads-up above.)',
              },
            ],
          },
          {
            id: 'eoc-image-zip',
            title: 'Image and `.zip` files can now be uploaded as Evidence of Compliance',
            blocks: [
              {
                kind: 'p',
                text: 'The accepted file types for evidence uploads now include images and `.zip` archives.',
              },
            ],
          },
          {
            id: 'eoc-report-link',
            title: 'The "View Evidence of Compliance" link on report packages works again',
            blocks: [
              {
                kind: 'p',
                text: 'On a generated report package, that link now opens the evidence record instead of a not-found page.',
              },
            ],
          },
        ],
      },
      {
        title: 'Monitoring Portal',
        entries: [
          {
            id: 'commitment-compliance',
            title: 'See which commitments are out of compliance — and why',
            blocks: [
              {
                kind: 'p',
                text: 'A new **Commitment Compliance** section on the Monitoring Portal Dashboard surfaces commitments that are out of compliance along with the observations driving it. Nesting Bird and Biological Resource observations are matched to commitments by species, so field observations now connect directly to the commitments they affect.',
              },
            ],
          },
          {
            id: 'map-layer-panel',
            title: 'A new in-app map layer panel',
            blocks: [
              {
                kind: 'p',
                text: 'The corner layer toggle on every map (project detail, monitoring portal, project layer details, footprint selection dialog, project-layer admin) is replaced by an in-app panel that matches the rest of the Beacon UI. Layers are grouped by their configured category and can be filtered by name, with **Select all / Deselect all / Reset** bulk actions. Long species/feature names truncate with a tooltip, and a red alert icon flags any layer whose service URL can\'t be reached.',
              },
            ],
          },
        ],
      },
      {
        title: 'Document Review',
        entries: [
          {
            id: 'doc-review-gap-triage',
            title: 'Triage gap commitments inline on the Gaps tab',
            flag: 'DocumentReview',
            blocks: [
              {
                kind: 'p',
                text: 'Each un-mapped (gap) commitment row carries a cycling status chip — **Unscreened / Relevant / Not Relevant** — that you click to set its screening relevance; the gap list groups by status. The Show-filter chips now live inside the filter toolbar, with a new **All** option.',
              },
            ],
          },
          {
            id: 'doc-review-sections',
            title: 'Add, edit, renumber, and delete outline sections without re-importing the CSV',
            flag: 'DocumentReview',
            blocks: [
              {
                kind: 'bullets',
                items: [
                  '**Add a section** directly from the By Section tab via a side dialog — no outline re-import needed.',
                  '**Edit a section\'s number and title**, or **delete it**. Renumbering moves the section to its correct place in the outline; deleting a section reattaches its children to the deleted section\'s parent.',
                ],
              },
            ],
          },
          {
            id: 'doc-review-exports',
            title: 'Export the Gaps view and per-section breakdowns',
            flag: 'DocumentReview',
            blocks: [
              {
                kind: 'bullets',
                items: [
                  '**Gaps CSV** — export every un-mapped commitment with its screening relevance (Unscreened / Relevant / Not Relevant).',
                  '**Per-section zip** — download a zip with one CSV per chapter (root section), alongside the existing full export. Export controls are now scoped to the active tab.',
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'Setup Wizard',
        entries: [
          {
            id: 'inline-contacts-orgs',
            title: 'Add External Contacts and Organizations inline from any picker',
            blocks: [
              {
                kind: 'p',
                text: 'A new `+` affordance next to every Assignee and Notification Recipients picker opens a side dialog to add a new External Contact or External Organization without losing the in-progress form. When adding an External Contact, its required Organization picker has its own `+` so a new Organization can be created in the same flow. Newly-created records persist to the global External Contacts / External Organizations lists.',
              },
            ],
          },
          {
            id: 'edit-action-fixes',
            title: 'Edit Action dialog fixes',
            blocks: [
              {
                kind: 'p',
                text: 'The Edit Action dialog now preserves an action\'s linked requirements on save, shows and saves the correct scope, and hides the Component/Project choice on projects that have no components.',
              },
            ],
          },
          {
            id: 'setup-wizard-chrome',
            title: 'Refreshed get-started landing and chrome',
            blocks: [
              {
                kind: 'p',
                text: 'The Setup Wizard landing, header, and sidebar have a refreshed look — the header is now a link back to the landing, and long document reference numbers no longer overflow the sidebar.',
              },
            ],
          },
        ],
      },
      {
        title: 'Commitments & Projects',
        entries: [
          {
            id: 'add-edit-commitment-dialog',
            title: 'Refreshed Add/Edit Commitment dialog',
            blocks: [
              {
                kind: 'p',
                text: 'The Add/Edit Commitment dialog has a refreshed two-column layout with an inline help icon on every field.',
              },
            ],
          },
          {
            id: 'component-delete-overview',
            title: 'Deleting a Component returns you to the project Overview',
            blocks: [
              {
                kind: 'p',
                text: 'After deleting a Component you now land on the project\'s Overview page instead of the global Data Catalog.',
              },
            ],
          },
          {
            id: 'names-not-guids',
            title: 'Tab titles and breadcrumbs show names, not GUIDs',
            blocks: [
              {
                kind: 'p',
                text: 'Project pages now display resolved entity names in tab titles and breadcrumbs instead of raw identifiers.',
              },
            ],
          },
        ],
      },
    ],
    fixes: [
      '**Report package EoC link** — "View Evidence of Compliance" now opens the record instead of a 404.',
      '**Edit Action dialog** — preserves linked requirements, shows/saves the correct scope, hides the Component/Project choice on component-less projects.',
      '**Component delete** — returns you to the project Overview instead of the global Data Catalog.',
      '**Species names** — names with the "go" substring stripped are restored, along with their species codes.',
      '**Project tab titles / breadcrumbs** — show resolved names instead of GUIDs.',
    ],
  },
  {
    version: '1.32.0',
    anchor: 'v1-32-0',
    date: '2026-05-21',
    patchNote: 'Patched through 1.32.2 (2026-05-27)',
    headlines: [
      {
        title: 'Rich-text editor swap (TinyMCE → Tiptap)',
        text: 'Every rich-text surface in the app — 22 of them — moved off GPL-licensed TinyMCE onto MIT-licensed Tiptap, with a fresh selection bubble menu, link-hover actions, in-table context menu, and headings dropdown. Persisted content round-trips unchanged. **One regression to call out:** audio/video embeds from the previous editor are not ported.',
        entryId: 'rich-text-editor',
      },
      {
        title: 'Document Review wraps up its first end-to-end pass',
        text: 'CSV outline import now reconciles sections and commitment assignments as source-of-truth, the Export CSV button is wired and round-trips with import, a Commitment Search tab joins the existing three, comments accept an optional citation, and By Section gains sticky chapter / sub-section headers, a chapter filter, and a Clear button. All still behind the `DocumentReview` flag.',
        entryId: 'dr-csv-source-of-truth',
      },
      {
        title: 'Setup Wizard polish pass',
        text: 'AI now infers Resource Category at commitment parse time, commitments can be tagged inline, the Season inline-create panel captures the full Season data shape with a month/day picker (no more confusing year input), and Steps 1–4 receive a 19-item visual sweep (status badges, tri-state Step 3 sidebar filter, hover-to-edit Step 4 rows, Finish Setup button removed).',
        entryId: 'sw-ai-resource-category',
      },
    ],
    sections: [
      {
        title: 'Rich Text Editor',
        entries: [
          {
            id: 'rich-text-editor',
            title: 'The editor under every rich-text field has been replaced',
            applies: 'applies to all tenants',
            blocks: [
              {
                kind: 'p',
                text: 'Every rich-text surface in Beacon — notification templates, commitment descriptions, custom report blocks, requirement text, and the rest — now uses a modern editor with a floating selection toolbar (Bold, Italic, Link appear when you select text), a link-hover popover with Open / Edit / Unlink, an in-table context menu (add or remove rows and columns from inside a cell), a heading-style dropdown that previews each level at its actual size before you pick it, and a proper link editor dialog with an "Open in new tab" toggle. Your existing content is preserved as-is.',
              },
              {
                kind: 'callout',
                text: 'Audio and video embeds from the previous editor are not carried over — that is the one intentional regression in this migration.',
              },
            ],
          },
        ],
      },
      {
        title: 'Document Review',
        entries: [
          {
            id: 'dr-csv-source-of-truth',
            title: 'CSV import is now the source of truth for sections and commitment assignments',
            flag: 'DocumentReview',
            blocks: [
              {
                kind: 'p',
                text: 'The outline import accepts a four-column CSV — `Number, Title, CommitmentID, Subject` — that captures both the outline structure and which commitments are mapped to which sections. Re-importing the same review with an updated CSV reconciles the live state to match the file: sections and assignments missing from the upload are removed; matched assignments keep their review state (Approved / Needs Revision, flags, and comments). Unresolvable Commitment IDs abort the upload with an inline error listing every offender — nothing is partially imported. The success toast shows the diff (`Sections: X added, Y updated, Z removed. Commitment assignments: A added, B updated, C removed.`).',
              },
            ],
          },
          {
            id: 'dr-export-csv',
            title: 'Export a Document Review to CSV',
            flag: 'DocumentReview',
            blocks: [
              {
                kind: 'p',
                text: 'The Export CSV button on the Document Review detail page is now wired up. The download has one row per section / commitment annotation in the same column shape the import accepts — so an exported file can be edited offline and re-imported without any reformatting.',
              },
            ],
          },
          {
            id: 'dr-commitment-search',
            title: 'Search any Document Review\'s commitments by ID, title, or body text',
            flag: 'DocumentReview',
            blocks: [
              {
                kind: 'p',
                text: 'A new fourth tab — **Commitment Search** — joins By Section, By Commitment, and Gaps. Type any text and the tab surfaces commitment cards whose ID, title, or body text contains it, with surrounding context snippets and inline highlights so you can see why each card matched.',
              },
            ],
          },
          {
            id: 'dr-optional-citation',
            title: 'Comments accept an optional citation',
            flag: 'DocumentReview',
            blocks: [
              {
                kind: 'p',
                text: 'Reviewer comments on commitment annotations no longer require a citation. If you have an exact-text excerpt to paste from the source PDF, the citation field still captures it; if you just want to leave a note, leave it blank.',
              },
            ],
          },
          {
            id: 'dr-optional-subject',
            title: 'Subject is optional when adding a section mapping',
            flag: 'DocumentReview',
            blocks: [
              {
                kind: 'p',
                text: 'The Subject field is now optional when attaching a commitment to a section. By Commitment cards show `· (no subject)` as an italic placeholder where the subject would otherwise render.',
              },
            ],
          },
          {
            id: 'dr-by-section-sticky',
            title: 'By Section view: sticky chapter headers, chapter filter, Clear filters',
            flag: 'DocumentReview',
            blocks: [
              {
                kind: 'bullets',
                items: [
                  'The chapter row pins at the top of the scroll while you read; the active sub-section pins flush beneath it, with a subtle elevation shadow only while pinned.',
                  'A new **Chapter** dropdown in the filter bar scopes the view to one chapter, or leave it on "All chapters".',
                  'A new **Clear filters** button appears whenever the search text, status chip, or chapter selector is off its default; one click resets all three.',
                  'Long row titles truncate with a hover tooltip carrying the full text — no more horizontal page scrolling.',
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'Setup Wizard',
        entries: [
          {
            id: 'sw-ai-resource-category',
            title: 'AI now infers Resource Category at commitment parse time, and commitments are taggable inline',
            flag: 'SetupWizard (AI features within: TenantAIUsage)',
            blocks: [
              {
                kind: 'p',
                text: 'When the AI extracts a commitment from a Source Document, the review form pre-fills the **Resource Category** dropdown with a match from the project\'s lookup (when one is found). A new **Tags** input below Resource Category lets you tag the commitment as you save it — type to filter existing tags, or press Enter to create a new tag inline. Tags are also editable from the same form when you re-open an existing commitment.',
              },
            ],
          },
          {
            id: 'sw-add-season-panel',
            title: 'Step 3: Add Season inline panel captures the full Season data shape',
            flag: 'SetupWizard',
            blocks: [
              {
                kind: 'p',
                text: 'The "+ Add Season" side panel on the requirement form now captures **Season Types** (Nesting Birds / Biological Resources), **Related Species**, **Related Construction Activities**, and **Tracked** — matching what you\'d get from the legacy Project Seasons screen. The date inputs are a month/day picker (no more confusing year input), and the panel renders without a background blur so the requirement text behind it stays readable.',
              },
            ],
          },
          {
            id: 'sw-inline-create-immediate',
            title: 'Newly-created Seasons, Species, Construction Activities, and Milestones now appear in dropdowns immediately on re-edit',
            flag: 'SetupWizard',
            blocks: [
              {
                kind: 'p',
                text: 'Inline-create previously required a page refresh before the new entry showed up in the dropdown when you re-opened a requirement. That round-trip is gone.',
              },
            ],
          },
          {
            id: 'sw-duplicate-promotion',
            title: 'Step 3 AI duplicate-promotion no longer fails',
            flag: 'SetupWizard',
            blocks: [
              {
                kind: 'p',
                text: 'When the AI suggested the same season or milestone on more than one requirement in a commitment, promoting it on the second requirement used to fail with a duplicate-entry error. Now it attaches the existing entry instead.',
              },
            ],
          },
          {
            id: 'sw-scope-blank',
            title: 'Step 3: Scope field starts blank',
            flag: 'SetupWizard',
            blocks: [
              {
                kind: 'p',
                text: 'The Scope dropdown on the requirements form previously rendered "Component" in grey as if it were a selected value. It now starts as a proper "Select…" placeholder.',
              },
            ],
          },
          {
            id: 'sw-polish-bundle',
            title: 'Setup Wizard polish bundle',
            flag: 'SetupWizard',
            blocks: [
              {
                kind: 'p',
                text: 'A 19-item visual sweep across Steps 1–4: shared status-badge and commitment-badge components replace ad-hoc pills, Step 1\'s status icon now reflects whether source docs are uploaded, Step 3\'s sidebar gains a tri-state filter (suggested / in-progress / all) with empty-state messaging and the selected row stays visible even when its bucket is filtered out, Step 4 action rows render as a single line with a hover-revealed edit pencil, and the standalone **Finish Setup** button has been removed (the step\'s normal Continue/Next controls take over).',
              },
            ],
          },
          {
            id: 'sw-tab-state-preserved',
            title: 'Toggling tabs in the proposed-requirement review dialog no longer clears the editor',
            flag: 'SetupWizard',
            blocks: [
              {
                kind: 'p',
                text: 'Switching from the Requirement tab to the Entities tab and back used to wipe whatever you had typed in the Requirement Text editor. Tab state now survives the switch.',
              },
            ],
          },
        ],
      },
      {
        title: 'Setup, Projects & Navigation',
        entries: [
          {
            id: 'create-project-sidebar',
            title: 'Create a new project directly from the sidebar',
            blocks: [
              {
                kind: 'p',
                text: 'The project picker in the sidebar now has a **Create Project** entry that opens the standard project-creation dialog. The picker also renders correctly when no project is currently selected.',
              },
            ],
          },
          {
            id: 'pickers-scroll-safe',
            title: 'Project and tenant pickers no longer close when the page scrolls',
            blocks: [
              {
                kind: 'p',
                text: 'Previously, scrolling the page would dismiss an open project or tenant picker. Click-outside and ESC still close them as expected.',
              },
            ],
          },
        ],
      },
    ],
    fixes: [
      '**Proposed-requirement detail dialog** — tab switches no longer clear the Requirement Text editor.',
      '**AI-suggested Season / Milestone duplicates** — promoting the same suggestion on a second requirement now attaches the existing entry instead of failing.',
      '**Scope dropdown on requirements form** — now starts blank instead of showing "Component" in grey.',
      '**Generate Package on a freshly-templated report** — the first generate now includes the Documents-block sections (by-tag in particular); previously the zip contained only the report PDF until the report was saved at least once.',
      '**Inline-created Seasons / Species / Construction Activities / Milestones** — now appear in the requirement form\'s dropdowns immediately on re-edit, no page refresh required.',
    ],
  },
  {
    version: '1.31.0',
    anchor: 'v1-31-0',
    date: '2026-05-12',
    headlines: [
      {
        title: 'Data Model Updates — read this first',
        text: 'Requirement Types consolidated from 23 to 12; Species, Seasons, and Work Activities moved from Commitments down to Requirements; Actions now inherit Requirement Type from their parent. Existing data was migrated automatically — but the fields customers edited yesterday may live in a different place today.',
        entryId: 'dm-requirement-types',
      },
      {
        title: 'Setup Wizard — first end-to-end pass at Steps 2, 3, and 4',
        text: 'Commitment capture, requirement extraction, and action planning are now usable in one flow with AI assistance at each step. Behind the `SetupWizard` flag, with AI features additionally behind `TenantAIUsage`.',
        entryId: 'sw-step-2',
      },
      {
        title: 'Document Review — new workspace',
        text: 'A new tool for reviewing any document outline section-by-section, with three views (By Section, By Commitment, Gaps), filtering, and per-annotation review / flag status. Behind the `DocumentReview` flag.',
        entryId: 'dr-review-section-by-section',
      },
      {
        title: 'Evidence of Compliance tagging',
        text: 'EoCs can now carry tags, and the Documents block on reports can pull EoCs by tag.',
        entryId: 'eoc-tagging',
      },
    ],
    sections: [
      {
        title: 'Data Model Updates',
        entries: [
          {
            id: 'dm-requirement-types',
            title: 'Requirement Types consolidated (23 → 12)',
            applies: 'applies to all tenants',
            blocks: [
              {
                kind: 'callout',
                text: 'Existing data has been migrated automatically, but several fields now live in a different place. If you\'re looking for where a field went, this section is the answer.',
              },
              {
                kind: 'p',
                text: 'We\'ve simplified the list of Requirement Types from 23 granular types to **12** (11 + Other) so the picklist is shorter and more consistent. The new types are: **Analysis, Survey, Monitoring, Avoidance & BMPs, Restoration & Mitigation, Plan, Design, Reporting, Approval & Consultation, Financial, Training & Education,** and **Other**. Existing requirements have been remapped automatically — for example, "Pre-Construction Survey" now lives under **Survey**, and "Construction & BMP Monitoring" under **Monitoring**. If a client\'s workflow assumes a specific old type, they\'ll find it under its new parent.',
              },
            ],
          },
          {
            id: 'dm-species-seasons',
            title: 'Species and Seasons moved from Commitments to Requirements',
            blocks: [
              {
                kind: 'p',
                text: '**Species** and **Seasons** used to be set on the Commitment. They now live on **Requirements** instead — so different requirements within the same commitment can carry different species or seasons. Existing values have been copied to all child Requirements, and the Commitment view still shows them as a read-only rollup from its child Requirements.',
              },
            ],
          },
          {
            id: 'dm-work-activities',
            title: 'Work Activities → Construction Activity, moved to Requirements',
            blocks: [
              {
                kind: 'p',
                text: '**Work Activities** has been moved off Commitments and onto **Requirements**, and merged with **Construction Activities** into a single field called **Construction Activity**. The Commitment view rolls up Construction Activity values from child Requirements for display.',
              },
            ],
          },
          {
            id: 'dm-field-cleanup',
            title: 'Other Commitment field cleanup',
            blocks: [
              {
                kind: 'bullets',
                items: [
                  '**Location Description** has been removed from Commitments; existing content was merged into **General Guidance**.',
                  '**Technical Lead Users** has been removed (was unused).',
                ],
              },
            ],
          },
          {
            id: 'dm-actions-inherit',
            title: 'Actions inherit Requirement Type; Desktop/Field is now derived',
            blocks: [
              {
                kind: 'p',
                text: 'Actions now carry a Requirement Type, inherited from their parent Requirement (with optional override). **Desktop vs. Field** is no longer a separate setting — it\'s derived from the Requirement Type (Survey, Monitoring, Avoidance & BMPs, and Restoration & Mitigation are **Field**; everything else is **Desktop**). A new **Responsible Party** persona selector has been added to Actions; the legacy **Readiness**, **Is Flagged**, and per-Action **Construction Activities** fields have been removed.',
              },
            ],
          },
        ],
      },
      {
        title: 'Setup Wizard',
        entries: [
          {
            id: 'sw-step-2',
            title: 'Step 2 — Capture commitments',
            flag: 'SetupWizard (AI features within: TenantAIUsage)',
            blocks: [
              {
                kind: 'p',
                text: 'Upload commitment PDFs for background parsing with per-PDF progress, or add commitments manually. As you save each one, Beacon extracts requirements in the background so they\'re ready for Step 3.',
              },
            ],
          },
          {
            id: 'sw-step-3',
            title: 'Step 3 — Review requirements',
            flag: 'SetupWizard',
            blocks: [
              {
                kind: 'p',
                text: 'AI-proposed requirements get a clear approve flow and a detail modal. A single consolidated form handles add/edit, with inline-create for related entities (species, milestones, etc.).',
              },
            ],
          },
          {
            id: 'sw-step-4',
            title: 'Step 4 — Plan actions',
            flag: 'SetupWizard',
            blocks: [
              {
                kind: 'p',
                text: 'A new Actions panel lets you approve, edit, reorder, and drag-drop draft actions. Bulk controls — Approve all, Discard all, Convert Each, Combine All — handle large batches in one click. "Suggest a Move" flags actions that fit a different phase. AI guidance lives in a dedicated banner that expands to a chat-style panel.',
              },
            ],
          },
        ],
      },
      {
        title: 'Document Review',
        entries: [
          {
            id: 'dr-review-section-by-section',
            title: 'Review any document section by section',
            flag: 'DocumentReview',
            blocks: [
              {
                kind: 'p',
                text: 'A new workspace for modelling any document — source documents, plans, regulations, anything with a hierarchical outline — and mapping commitments to the sections they live in. Import a CSV outline to start.',
              },
            ],
          },
          {
            id: 'dr-three-views',
            title: 'Three views',
            flag: 'DocumentReview',
            blocks: [
              {
                kind: 'bullets',
                items: [
                  '**By Section** — the full outline, annotations grouped under each section.',
                  '**By Commitment** — every commitment on the project as a card, with its mapped sections.',
                  '**Gaps** — commitments not yet mapped to any section.',
                ],
              },
            ],
          },
          {
            id: 'dr-filter-track',
            title: 'Filter and track review progress',
            flag: 'DocumentReview',
            blocks: [
              {
                kind: 'p',
                text: 'Filter by status (Unreviewed / Approved / Needs Revision / Flagged) or search by ID, title, subject, citation, or section — matches highlight inline. Mark annotations Approved or Needs Revision, or flag any that need follow-up.',
              },
            ],
          },
        ],
      },
      {
        title: 'Evidence of Compliance',
        entries: [
          {
            id: 'eoc-tagging',
            title: 'Tag your EoC records, surface them by tag',
            blocks: [
              {
                kind: 'p',
                text: 'You can now attach tags to EoC records. On project reports, the Documents block has a new mode that pulls EoCs by tag — useful for templated reports that should always include "permit" or "monitoring" evidence.',
              },
            ],
          },
        ],
      },
    ],
    fixes: [
      '**Daily Monitoring Reports** (Monitoring Portal) — weather notes and the map render correctly; nesting-bird records respect the Active flag; category labels display consistently; the map zooms appropriately when a report has only a single record.',
      '**Table Commitments block** on project-scoped reports now populates correctly (was rendering empty).',
      '**Action editing after a planning update** no longer fails silently; the tracker refreshes when an action moves between Implementation and Planner.',
      '**"Organize Actions" page** is significantly faster on large projects (split-query optimization).',
      '**Requirement dropdowns** no longer accept free-text entry, and deleting a requirement no longer throws a foreign-key error.',
      '**AI requirement phase assignment** — when a project has no components, AI-extracted requirements now auto-assign to the "Project" phase instead of failing.',
      '**Evidence of Compliance ZIP download** no longer fails on tenants using user-delegation SAS.',
    ],
  },
];
