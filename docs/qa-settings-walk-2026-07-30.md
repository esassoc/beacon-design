# QA Beacon — esa-config + admin walk

Environment: https://qa-beacon.esassoc.com — tenant **Delta Conveyance**, QA badge in topbar.
Walk date: 2026-07-30. Read-only (no buttons clicked, no forms touched).

Topbar (persistent): sidebar-collapse icon, tenant switcher "Delta Conveyance" (chevron =
tenant menu), centered "Search…" field with `/` kbd hint, orange **QA** environment pill,
then three icon links: ESA-Config (`/esa-config`), Admin settings (`/admin`), User menu.

Left sidebar (persistent): ESA leaf logo, a "Select a Project" combobox (project scope
picker, with a wrench-ish icon), then nav group **Data Catalog** (expandable) containing
Projects, Source Documents, Commitments, Requirements, Actions, Components, Evidence of
Compliance. On esa-config/admin pages the Data Catalog group renders collapsed.

---

## /esa-config — "ESA-Config" dashboard  [SHOT]

**Breadcrumb:** `Esa-Config` (single crumb, with the sliders icon)
**H1:** `ESA-Config` — set in the serif display face, prefixed by a sliders icon. Full-width
hairline under the heading.
**Intro/help text:** NONE. The page goes straight from H1 to the first section.

**Layout:** stacked sections. Each section = a heading (normal-case, ~20px, semibold) with a
full-width hairline rule directly under it, then a **3-column grid of tiles**. Tiles are
white cards, thin border, 4px-ish radius, ~65px tall; each tile is a small icon on the first
line and the label on the second line (icon ABOVE label, both left-aligned). Rows fill
left-to-right and a short row leaves the remaining columns empty (no stretching).

**Sections and tiles, in order (verbatim labels):**

1. **Reporting** — `Report Templates`, `Report Types`, `Tenant Logo`
2. **Custom Fields** — `Field Definitions` (→ /esa-config/custom-field-definitions),
   `Terminology` (→ /esa-config/entity-labels)
3. **Tenants** — `Tenants` (→ /esa-config/tenants)
4. **Feature Flags** — `Feature Flags` (→ /esa-config/feature-flags)
5. **Site Clearance** — `Clearance Review Kinds` (→ /esa-config/clearance-review-kinds)
6. **API & Integrations** — `Commitment Categories` (→ /esa-config/commitment-category-maps)
7. **Actions** — `Bulk EoC Ingest` (→ /esa-config/bulk-eoc-ingest),
   `Extract Source PDF contents`, `Backfill DMR Evidence of Compliance`,
   `Extend Rolling Window`, `Send Notifications`

**Important:** the four job tiles in **Actions** (Extract Source PDF contents, Backfill DMR
Evidence of Compliance, Extend Rolling Window, Send Notifications) are rendered as anchors
with NO href — they are click-to-fire job triggers styled identically to the navigation
tiles. Only `Bulk EoC Ingest` in that section is a real page link. There is no visual
distinction between "go to a page" and "run a job now" tiles — same card, same icon
treatment. Icons differ: Bulk EoC Ingest = file-plus, Extract Source PDF = document,
Backfill DMR = document, Extend Rolling Window = refresh/cycle arrows, Send Notifications = bell.

**No count badges anywhere on this dashboard.** No per-tile description text.

---

## /esa-config/report-types — "Report Types"

**Tab title:** `Manage Report Types | ESA Beacon`
**Breadcrumb:** `Esa-Config › Manage Report Types`
**H1:** `Report Types` (icon-prefixed serif display) — note the H1 and the breadcrumb/tab
title DISAGREE (breadcrumb says "Manage Report Types", H1 says "Report Types").
**Intro/help text:** NONE.

**Layout:** an inline-editable **repeatable row list**, not a table. No column headers as
such — each row carries its own floating field labels. One white card per… actually one
white card wraps ALL rows; each row is:

`[ordinal chip "1" ] [ outlined text field, label "Report Type Name", grows to fill ] [ outlined select, label "Scope", ~165px ] [ ✕ icon-button ]`

Below the card, **right-aligned**: `+ Add Report Type` (outlined/secondary button) and
`Save` (primary button, rendered DISABLED/gray until the form is dirty).

**Controls (verbatim):**
- text input, floating label `Report Type Name`, placeholder `Ex. Inspection`
- select, floating label `Scope` — value seen: `Component`. (Scope vocabulary is
  Project/Component — see the ReportScopeType enum.)
- `✕` remove-row icon button per row
- `+ Add Report Type`
- `Save`

**Content shape / example rows:** exactly **1** row in QA:
1. `Geotech Soil Investigation Report` — Scope `Component`

Report-type names read as document-genre nouns ("<Discipline> <Subject> Report").
Empty state not observable (list is non-empty), but the shape implies an empty list would
show zero rows plus the two buttons.

---

## /esa-config/report-templates — "Report Templates"

**Tab title:** `Manage Report Templates | ESA Beacon`
**Breadcrumb:** `Esa-Config › Manage Report Templates`
**H1:** `Report Templates`, with a right-aligned `+ Report Template` button **on the same
line as the H1** (top-right of the header band, above the hairline rule).
**Intro/help text:** NONE.

**Layout:** templates are **grouped by report type**. Structure per group:

- Group heading = the report type name, ~18px semibold, normal case, followed by a small
  square outlined **count badge** showing the number of templates in that group.
- Then a white card containing one row per template:
  `[small grid/table icon] [template name] ……… [Edit] [Clone] [Delete]`
  The three actions are right-aligned, styled as underlined text links (not filled
  buttons); **Delete is red**, Edit and Clone are the default link color.

**Content shape / example:**
- Group `Geotech Soil Investigation Report` — badge `1`
  - `2026 Soil Investigation Report`

So: report *type* is the taxonomy, report *template* is a named instance under it, and
template names are commonly `<year> <type-ish name>`.

**Blocked:** `Edit`, `Clone`, `Delete` are all real `<button>` elements (no href), so the
template **edit page could not be reached without clicking a button** — out of bounds for
this read-only walk. The route exists at `/esa-config/report-templates/:reportTemplateID`
where the ID is a **GUID** (`ReportTemplateDto.ReportTemplateID: string`), so guessing a
numeric ID just bounces to `/`. See the code-derived section for that page at the end.

---

## /esa-config/tenant-logo — "Tenant Logo"

**Tab title:** `Tenant Logo | ESA Beacon` · **Breadcrumb:** `Esa-Config › Tenant Logo`
**H1:** `Tenant Logo` (gear icon prefix)
**Intro/help text:** NONE at the top; help lives at the BOTTOM in a "Logo Guidelines" list.

**Layout:** single column, no card. Top-left primary button `Upload Logo` (dark teal fill,
upload-cloud icon). Under it, a plain label `Current Logo`, then a large **centered empty
state** in the content area: a big outlined image-placeholder icon, then two centered
lines of copy, then the guidelines block below.

**Empty state copy (verbatim, two lines):**
> No logo has been uploaded for this tenant.
> Click "Upload Logo" to add a logo.

**Guidelines block (verbatim):** heading `Logo Guidelines`, bulleted list:
- `Supported formats: PNG, JPG, JPEG, GIF, SVG, WebP`
- `Recommended size: 200x200 pixels or larger`
- `The logo will be displayed in reports and other tenant-branded materials`

Note: the guidelines are static help copy, not derived from data — the one place in
esa-config where prose help text exists. The Delta Conveyance QA tenant has **no logo set**.

---

## /esa-config/custom-field-definitions — "Custom Field Definitions"

**Tab title:** `Custom Field Definitions | ESA Beacon`
**Breadcrumb:** `Esa-Config › Custom Field Definitions`
**H1:** `Custom Field Definitions`, with a right-aligned primary button
`+ Add Definition` (dark teal fill, plus icon) on the H1 line.
**Intro/help text:** NONE.

**Layout:** an **ag-Grid data grid** — the first real grid in esa-config. Above the grid, a
toolbar row: a `Search grid…` text input on the LEFT, a `Clear Filters` button on the RIGHT
(disabled/gray when no filters are active). Grid header row is a **solid dark teal band with
white text**; each header has a filter (funnel) icon. Below the grid a footer row:
`Download as CSV` (link with a download icon, bottom-left) and `Total Records: 6`
(bottom-right).

**Column headers, left to right (verbatim):**
`Display Label` | `Entity Type` | `Field Type` | (an unlabeled narrow column that still has
a filter icon) | `Display Order` (right-aligned numeric) | `Required` | `Active`

**Rows (6 total) — all Entity Type `Work Area`:**
| Display Label | Entity Type | Field Type | Display Order | Required | Active |
|---|---|---|---|---|---|
| `EntryAgr` | Work Area | Text | 0 | No | Yes |
| `ParcelAPN` | Work Area | Text | 0 | No | Yes |
| `Depth` | Work Area | Number | 0 | No | Yes |
| `County` | Work Area | Text | 0 | No | Yes |
| `DCPN` | Work Area | Text | 0 | No | Yes |
| `Method` | Work Area | Text | 0 | No | Yes |

Content shape: labels are terse field-name-ish tokens (abbreviations, no spaces), NOT
sentences. Field Type vocabulary seen: `Text`, `Number`. Required/Active render as literal
`Yes`/`No` text, not checkboxes or badges. Display Order is 0 for everything (nobody uses it).

`Display Label` is the only linked column → `/esa-config/custom-field-definitions/{GUID}`.

### /esa-config/custom-field-definitions/{id} — detail

**Breadcrumb:** `Esa-Config › Custom Field Definitions › Custom Field Definition Details`
**H1:** `Custom Field Definition - EntryAgr` (i.e. `Custom Field Definition - <Display Label>`)
**Header actions:** two **filled square icon buttons** top-right — a dark-teal **pencil**
(edit) and a **red trash** (delete). No text labels.

**Layout:** a plain single-column **stacked key/value list** — no card, no two-column grid,
no sections. Each pair is a small teal label line with the value on the line below it.
Fields in order: `Entity Type`, `Field Type`, `Display Label`, `Display Order`, `Active`,
`Required`, `Default Value`, `Help Text`.

Empty values render as *italic* `None` (seen on Default Value and Help Text).

---

## /esa-config/feature-flags — "Feature Flags"  [SHOT]

**Tab title:** `Feature Flags | ESA Beacon` · **Breadcrumb:** `Esa-Config › Feature Flags`
**H1:** `Feature Flags` (sliders icon). No page-level intro text.

**Layout:** two groups, styled DIFFERENTLY from each other:

1. **Capability Toggles** — wrapped in a bordered white **card**. Inside the card:
   - group title `Capability Toggles` in **teal**, semibold, ~16px
   - a one-line description under it (the only help text on the page):
     > Permanent toggles that control which product areas this tenant sees.
   - then one row per flag, hairline-separated: `[toggle] [flag name]` — toggle on the LEFT.
2. **Rollout Flags** — **no card**; the teal group title sits on the page background and the
   rows run full width with hairline separators. **No description line** for this group.

`Save` button (dark teal, primary) sits at the **bottom-left** under the last row.

**Toggle appearance:** ON = amber/orange track with a teal knob carrying a white check.
OFF = gray track, dark-gray knob. (Unusual — the ON state is orange, not green/teal track.)

**Every flag, exact label and state as shown in QA / Delta Conveyance:**

*Capability Toggles*
| Flag | State | Badge |
|---|---|---|
| `Monitoring Dashboard` | ON | — |
| `Spatial Library` | ON | — |
| `Reporting` | ON | — |

*Rollout Flags*
| Flag | State | Badge |
|---|---|---|
| `Tenant AI Usage` | ON | — |
| `Notifications` | OFF | — |
| `Components Default Off` | OFF | — |
| `Setup Wizard` | ON | — |
| `Document Review` | ON | — |
| `Configurable Data Catalog Display` | ON | — |
| `Permit Tracking` | OFF | — |
| `Streamlined Workflow Enabled` | OFF | `Remove at GA` |
| `Streamlined Workflow Default On` | OFF | — |
| `Site Clearance` | ON | — |
| `Help & Guidance` | OFF | `Remove at GA` |

**Badge:** `Remove at GA` renders as a small quiet gray chip (light gray fill, gray text,
4px radius) sitting inline to the RIGHT of the flag name. Only two flags carry it, and note
that `Streamlined Workflow Default On` does NOT carry it even though its sibling
`Streamlined Workflow Enabled` does.

Naming shape: flags are Title Case product-area names; a couple encode their default in the
name itself (`Components Default Off`, `Streamlined Workflow Default On`), which is why two
adjacent flags read as a pair (an "enabled" master + a "default on" sub-flag).

---

## /esa-config/entity-labels — "Terminology"

**Tab title:** `Terminology | ESA Beacon` · **Breadcrumb:** `Esa-Config › Terminology`
**H1:** `Terminology` — note the ROUTE is `entity-labels` but nothing in the UI says
"entity labels"; the tile, breadcrumb, title and H1 all say **Terminology**.

**Intro/help text (verbatim, two lines wrapped, sits directly under the H1 rule):**
> Set this tenant's display term for each core entity. Leave a field blank to use the
> default shown in grey. Saved terms apply across the app for everyone on this tenant.

**Layout:** a 3-column form grid with a plain header row (`Entity` | `Singular` | `Plural`)
— header labels are normal-case semibold, NOT a filled table header. The grid occupies only
the left ~55% of the content width; the right side is empty. Each row: bold entity name in
column 1, then two outlined text inputs. **The inputs are empty; the default term is shown
as a grey placeholder** (that is the "default shown in grey" the intro refers to).
`Save` button is right-aligned under the grid, **disabled/gray** until dirty.

**Rows, in order, with their default placeholders:**
| Entity | Singular placeholder | Plural placeholder |
|---|---|---|
| Project | Project | Projects |
| Source Document | Source Document | Source Documents |
| Commitment | Commitment | Commitments |
| Requirement | Requirement | Requirements |
| Action | Action | Actions |
| Component | Component | Components |
| Action Implementation | Action Implementation | Action Implementations |
| Evidence of Compliance | Evidence of Compliance | **Evidence of Compliance** |
| Work Area | Work Area | Work Areas |

Note `Evidence of Compliance` is its own plural. Delta Conveyance has NO overrides set —
every field is blank/placeholder. `Work Area` appears here as a first-class core entity even
though it has no Data Catalog nav item.

---

## /esa-config/tenants — "Tenants"

**Tab title:** `Tenants | ESA Beacon` · **Breadcrumb:** `Esa-Config › Tenants`
**H1:** `Tenants`

**Intro/help text (verbatim):**
> ESA Admins only. Creating a tenant clones baseline configuration (roles, scopes, field
> definitions, custom pages) from ESA.

**Layout:** intro paragraph, then an `Add Tenant` primary button **right-aligned on its own
row** (not on the H1 line — different from Custom Field Definitions / Report Templates,
which put the add button up on the heading line). Then a bordered white card containing a
simple table.

**Column headers:** `Name` | `Subdomain` | (unlabeled actions column)
Row = tenant name (plain text, left), subdomain rendered as a **monospace chip** on a light
gray fill, and a small outlined `Edit` button right-aligned. No count, no search, no filter,
no pagination, no CSV export.

**19 tenants, alphabetical (name → subdomain):**
Alaska Power & Telephone → `apt` · AWS → `aws` · Beyond Petrochemicals → `bonozoic` ·
CASP → `casp` · Cobalt Solar → `cobalt-solar` · CPUC → `cpuc` ·
Delta Conveyance → `delta-conveyance` · ESA → `esa` · ESA Measure Library → `esa-ml` ·
ESA NEPA Demo → `nepa-demo` · GGB Highway & Transportation → `ggb` ·
Gridliance Core Upgrades CIC → `gridliance` · LEBLS → `lebls` · Los Vaqueros → `losvaqueros` ·
Prologis → `prologis` · SFO → `sfo` · Sites Reservoir → `sitesreservoir` ·
Tahoe Regional Planning Agency → `trpa` · Vista Grande → `vista-grande`

Shape: tenant names are a mix of client orgs, agencies, projects and internal/demo tenants
(`ESA`, `ESA Measure Library`, `ESA NEPA Demo`). Subdomains are lowercase, sometimes
hyphenated, sometimes an acronym, and are NOT always a slug of the name (`Beyond
Petrochemicals` → `bonozoic`).

---

## /esa-config/commitment-category-maps — "Commitment Category Maps"

**Tab title:** `Commitment Category Maps | ESA Beacon`
**Breadcrumb:** `Esa-Config › Commitment Category Maps`
**H1:** `Commitment Category Maps` (tag icon), with `+ Commitment Category Map` outlined
button right-aligned on the H1 line. **No intro/help text** — surprising given this is the
"API & Integrations" tile and each map carries an API key (see DTO).

**Layout:** one bordered white card containing a **three-line row per map** (not a table):
- line 1: map name, teal link-colored, prefixed by a small tag icon
- line 2: the project name, secondary gray
- line 3: a meta line — `N categories` and, when it has ever been updated,
  ` · Last updated <Mon D, YYYY>`
- right-aligned on the row: `Edit` and `Delete` text links (Delete in red)

**Rows (3):**
| Name | Project | Meta line (verbatim) |
|---|---|---|
| `2026 Geotech Investigations - Concerns` | Delta Conveyance Project | `8 categories · Last updated Jun 5, 2026` |
| `2026 Geotech Investigations - Special Status Species` | Delta Conveyance Project | `0 categories` |
| `2026 Geotech Investigations - Nesting Birds` | Delta Conveyance Project | `1 category · Last updated May 8, 2026` |

Note the meta line **pluralizes correctly** (`1 category` vs `8 categories`) and **omits the
"Last updated" clause entirely** when the map has never been updated (the 0-category row).

Name shape: `<year> <program/campaign> - <topic>`; all three are scoped to one project.

**Blocked:** as with report templates, `Edit`/`Delete` are `<button>`s with no href and the
route ID is a **GUID** (`CommitmentCategoryMapDto.CommitmentCategoryMapID: string`), so the
edit page at `/esa-config/commitment-category-maps/:commitmentCategoryMapID` was not
reachable read-only. See the code-derived section.

---

## /esa-config/clearance-review-kinds — "Clearance Review Kinds"  ⚠️ NOT IN THE BRIEF

**Tab title:** `Clearance Review Kinds | ESA Beacon`
**Breadcrumb:** `Esa-Config › Clearance Review Kinds` · **H1:** `Clearance Review Kinds`

**Intro/help text (verbatim):**
> Configure this tenant's Site Clearance review kinds — the list the review form's Kind
> dropdown reads from. Kinds in use are deactivated rather than deleted. Drag to reorder
> how they appear in the dropdown.

**Layout:** a **drag-reorderable list**. Section header row: `Review Kinds` (teal, semibold,
~18px) on the left, `+ Add Kind` outlined button on the right — i.e. the add button sits on
the SECTION header, not the page H1. Then hairline-separated rows:
`[6-dot drag handle] [kind name] ……… [pencil icon-button] [circle-slash icon-button]`

The second icon is a **circle-slash (block/deactivate)**, not a trash can — matching the
"deactivated rather than deleted" rule in the intro. This is the only esa-config page whose
destructive action is deactivate-instead-of-delete, and the only one with drag ordering.

**Rows (3, in display order):** `14-day clearance`, `72-hour clearance`,
`Management determination`

Shape: sentence-case, only the first word capitalized — different casing convention from
report types and feature flags (which are Title Case).

---

## /esa-config/bulk-eoc-ingest — "Bulk EoC Ingest"  [SHOT]

**Tab title:** `Bulk EoC Ingest | ESA Beacon` · **Breadcrumb:** `Esa-Config › Bulk EoC Ingest`
**H1:** `Bulk EoC Ingest` with an **(i) info-circle** icon prefix (all three bulk-ingest
pages use that icon). No intro paragraph.

**⚠️ This page is visually UNSTYLED relative to the rest of esa-config** — it reads as a
developer utility that never got a design pass:
- sub-nav is two **plain bordered rectangular buttons**, `Saved patterns` and `Run history`
  (not tabs, not the app's button styles)
- labels are **bold text ABOVE the field**, not the app's floating material labels
- `Project` is a **raw native `<select>`** with the OS chevron
- `Folder of files` is a **raw `<input type="file">`** rendering the browser's default
  `Choose Files | No file chosen` control
- `Preview` is a gray disabled button, bottom-left

**Controls in order:**
1. `Filename pattern` — text input, prefilled value `{component}_{workArea}_{tag}`.
   Helper text below (verbatim, tokens in monospace):
   > Tokens: `{project}`, `{component}`, `{workArea}`, `{tag}`. Use `*` for any characters.
   > Patterns are matched case-insensitively against the full filename.
2. `Project` — native select. Options: `— select a project —` (placeholder) and
   `Delta Conveyance Project`.
3. `Folder of files` — file input; below it the counter `0 file(s) selected.`
4. `Preview` — disabled until files are chosen.

### /esa-config/bulk-eoc-ingest/patterns — "Bulk EoC Ingest — Saved Patterns"

Breadcrumb: `Esa-Config › Bulk EoC Ingest › Bulk EoC Ingest — Saved Patterns`
(the H1 repeats the full em-dashed title). Two teal section headings:

- **`New pattern`** — `Name` text input, placeholder `e.g. DCP Geotech Boring Logs`;
  `Pattern` text input, placeholder `e.g. {workArea}_{tag}_*.pdf`; a **checkbox**
  `Set as tenant default`; then a `Create` primary button. Labels again bold-above-field.
- **`Saved patterns`** — empty state is a single line of *italic* gray text:
  `No saved patterns yet.` (no icon, no card, no illustration)

### /esa-config/bulk-eoc-ingest/runs — "Bulk EoC Ingest — Run History"

Breadcrumb: `Esa-Config › Bulk EoC Ingest › Bulk EoC Ingest — Run History`.
Body is **only** the italic empty state `No runs yet.` — no table headers rendered at all
when empty, so the run-history columns are not observable in QA. A run detail route exists
(`/esa-config/bulk-eoc-ingest/runs/:bulkIngestRunID`) but there are no runs to open.

---
---

# ADMIN

## /admin — "Admin" dashboard  [SHOT]

**Tab title:** `Admin Dashboard | ESA Beacon` · **Breadcrumb:** `Admin` (gear-in-hex icon)
**H1:** `Admin` · **No intro text.**

**Layout:** ⚠️ **flat 4-column tile grid with NO section groupings** — structurally different
from the esa-config dashboard, which is 3 columns split into 7 named sections. 11 tiles,
same card treatment (icon on line 1, label on line 2), but here the label is followed by a
**count badge**: a small light-gray rounded rect with the number, inline to the right.

**Tiles in order, with the exact counts shown in QA / Delta Conveyance:**
| Tile | Count badge | Route |
|---|---|---|
| `Users` | 75 | /admin/users |
| `Roles` | 4 | /admin/roles |
| `People` | 0 | /admin/people |
| `Organizations` | 0 | /admin/organizations |
| `Labels & Definitions` | 36 | /admin/labels-and-definitions |
| `Data Catalog Display` | **(none)** | /admin/data-catalog-display |
| `Custom Pages` | 2 | /admin/custom-pages |
| `Commitment Types` | 4 | /admin/commitment-types |
| `Phases` | 6 | /admin/phases |
| `Resource Categories` | 26 | /admin/resource-categories |
| `Tags` | 320 | /admin/tags |

`Data Catalog Display` is the only tile with **no badge** (it's a settings page, not a list).
Zero-count tiles still render the badge showing `0` — they are not hidden or dimmed.

⚠️ **There is NO `Notifications` tile and NO `Notification Audit Log` tile** on this
dashboard. See DELTAS.

---

## /admin/users — "Users"

**Tab title:** `Manage Users` · **Breadcrumb:** `Admin › Manage Users` · **H1:** `Users`
with a right-aligned `+ Invite User` primary button on the H1 line. (Note the verb: **Invite**,
not Add — the only admin list that doesn't say "Add".) No intro text.

**Layout:** ag-Grid, same chrome as Custom Field Definitions: `Search grid…` input top-left,
`Clear Filters` (disabled) top-right, dark-teal header band, `Download as CSV` bottom-left,
`Total Records: 75` bottom-right. No pagination — one long virtualized scroll.

**Column headers (verbatim, left→right):**
`ID` | `Name` | `Email` | `Role` | `System Support?` | `ESA Admin?` | `Created`

- `ID` is a right-aligned integer, and it is NOT sequential with the alphabetical sort
  (rows sort by Name by default, IDs are scattered: 33, 61, 52, 211, 212, 29 …).
- `Name` is the linked column.
- `System Support?` and `ESA Admin?` render as literal `Yes`/`No` text. Underlying fields
  are `ReceiveSupportEmails` and `IsEsaAdmin` — note the header wording drifts from the field
  name (`System Support?` ← `ReceiveSupportEmails`).
- `Created` is `M/D/YYYY`.

**Content shape (real client PII — do NOT copy into fixtures):** rows are staff at ESA plus
client/agency people. Emails are a mix of `@esassoc.com`, `@water.ca.gov`, `@dcdca.org`,
`@icf.com`, plus a couple of `+test@gmail.com` QA accounts and junk names like `1234 1234`.
Fixture shape: 4 role values only — `Admin`, `Standard`, `Read Only`, `No Access`; most rows
`No` / `No`; ESA-domain users are the ones with `ESA Admin? = Yes`.

---

## /admin/roles — "Roles"

**Breadcrumb:** `Admin › Manage Roles` · **H1:** `Roles` + right-aligned `+ Add Role`.
Same ag-Grid chrome. `Total Records: 4`.

**Column headers:** `Name` | `Description` | `Is System Role`

- `Name` is linked → `/admin/roles/{int}` (roles use **integer** IDs 1–4, unlike the GUIDs
  everywhere in esa-config).
- `Is System Role` renders as an actual **checkbox** (checked+grayed for system roles,
  unchecked otherwise) rather than Yes/No text — inconsistent with the Users grid.
- `Description` is empty for all 4 rows.

**Rows (4):** `Admin` (system), `No Access` (system), `Read Only`, `Standard`

⚠️ **Layout defect:** the columns auto-size to their content, so the grid body only occupies
the left ~27% of the card and the header band runs the full width — a wide empty region to
the right of the last column. Same happens on any narrow-content grid.

### /admin/roles/{id} — "Role Details"  [SHOT]

**Breadcrumb:** `Admin › Manage Roles › Role Details`
**H1:** `Role Details - No Access` (i.e. `Role Details - <Role Name>`)

**Layout:** a **right-aligned-label form**: a ~165px left column of teal labels, right-aligned
against the field column, which fills the remaining width. Not a card, not sections — one
long single stack. No tabs, no grouping headers between the rights and the flags.

**Controls, in order:**
1. `Name` — text input
2. `Description` — textarea (resizable, ~3 rows)
3. Eleven **"Rights" selects**, all showing `None` for the No Access role:
   `Custom Page Rights`, `Custom Rich Text Rights`, `Field Definition Rights`,
   `User Rights`, `Role Rights`, `Project Rights`, `Source Document Rights`,
   `Commitment Rights`, `Person Rights`, `Organization Rights`, `Geospatial Data Rights`
4. Six **checkboxes**: `Can Impersonate Users`, `Can Approve Commitments`,
   `Can Edit Approved Commitments`, `Can Manage Geospatial Library Connection`,
   `Can Manage Monitoring Dashboard Connection`, `Can Administer Tenant`

⚠️ **Two real defects on this page:**
- Every checkbox's text is rendered **TWICE** — once as the teal left-column form label
  (which wraps to 2–3 ragged lines: "Can Manage / Geospatial Library / Connection") and again
  as the checkbox's own inline label. The label column should be blank for these.
- **There is no `Save` or `Cancel` button anywhere on the page** in its pristine state, yet
  every input is editable (`disabled: false`). The only button in the document body is a
  floating **back-to-top** arrow. Either Save appears only once dirty, or it's missing.

---

## /admin/people — "People"

**Breadcrumb:** `Admin › Manage People` · **H1:** `People` + `+ Add Person`.
**Columns:** `Name` | `Email` | `Phone` | `Created`. `Total Records: 0`.
**Empty state:** ag-Grid's raw default — the words `No Rows To Show` centered in a tall blank
grid body. No icon, no explanatory copy, no call to action. (Contrast with the designed
empty state on Tenant Logo.)

## /admin/organizations — "Organizations"

**Breadcrumb:** `Admin › Manage Organizations` · **H1:** `Organizations` + `+ Add Organization`.
**Columns: identical to People —** `Name` | `Email` | `Phone` | `Created`.
`Total Records: 0`, same `No Rows To Show` empty state. People and Organizations are the
same grid with different labels.

---

## /admin/labels-and-definitions — "Labels & Definitions"

**Tab title:** `Manage Labels and Definitions` · **Breadcrumb:** `Admin › Manage Labels And
Definitions` (note the breadcrumb Title-Cases the "And") · **H1:** `Labels & Definitions`
(ampersand in the H1, the word "and" in the breadcrumb).

**⚠️ No add button** — this is the only admin list page with nothing on the H1 line. The label
set is fixed; only definitions are editable.

**Columns:** `Label` (pinned left, linked, narrow ~170px) | `Definition` (fills the rest).
`Total Records: 36`. Standard grid chrome + `Download as CSV`.

**Row heights are auto/variable** and the grid body scrolls internally at a fixed height.

**Content shape — this is the most interesting page for a prototype:**
- Labels are the field names shown across the Data Catalog:
  `Name`, `Commitment ID`, `Title`, `Commitment Type`, `Resource Category`, `Source`,
  `Full Commitment Text`, `Compliance Lead`, `Phase`, `Applicable Commitment …`,
  `Work Activities`, `Location Description`, `Version Number`, `Date Approved`,
  `Approved By`, `Summary of Change`, `Date Of Latest Amendment`, `Reference Number`,
  `Approving Agency`, `Agency Contact`, `Agency Signatory`, `Description`,
  `General Guidance`, `Originator of Change`, `Tags`, `Implementation Responsibilities`,
  `Requirement Type`, `Compliance Leads`, `Scope`, `Frequency`, …(36 total)
- Definitions are normally **one sentence**, e.g. "The agency responsible for approving the
  source document." / "A brief summary of the source document."
- Some are unfilled and literally read `Placeholder text.` (seen on `Tags` and
  `Implementation Responsibilities`) — and one reads `Default definition for Name`.
- **Definition is a RICH TEXT field.** The `Summary of Change` row contains a whole pasted
  mitigation-measure excerpt with bold headings, italics, a nested numbered list and
  **strikethrough tracked-change markup**, blowing that single row up to ~10× the height of
  its neighbours. Any prototype table needs to survive a row like that.

---

## /admin/data-catalog-display — "Data Catalog Display"  [SHOT]

**Breadcrumb:** `Admin › Data Catalog Display` · **H1:** `Data Catalog Display`

**⚠️ The entire page body is wrapped in a dashed PURPLE border with a purple `EXPERIMENTAL`
badge** notched into its top-right corner (the badge visually collides with the intro text).
Nothing else in esa-config or admin uses this treatment.

**Intro/help text (verbatim):**
> Choose which columns appear, and in what order. These selections apply to everyone in your
> tenant; an empty selection falls back to the system default.

**Layout:** everything is constrained to a **narrow ~510px left column**, not full width.
Top to bottom:
1. `Configure` — label above a select. Options: `Select...` (placeholder), `Commitments`,
   `Tracker Grid`. Currently `Commitments`.
2. A 2-item **segmented tab control**: `Grid Columns` (active — teal text on a tinted fill)
   and `Card Fields`.
3. A **drag-reorderable list of field cards**. Each card:
   `[vertical-dots drag handle] [field label in BOLD] [source entity in gray] … [✕]`
4. `Add a column` — label above a **searchable combobox**, placeholder `Search fields…`
   with a magnifier icon.
5. `Save changes` — gray/disabled until dirty, bottom-left.

**Current Commitments → Grid Columns selection (label + gray source qualifier):**
`ID` (Commitment) · `Title` (Commitment) · `Source Document` (**Source**) ·
`Commitment Text` (Commitment) · `Resource Category` (Commitment) · `Species` (Commitment) ·
`Tags` (Commitment)

The gray qualifier names the entity the field is pulled from, so a column can come from a
related entity (`Source Document` comes from `Source`, not `Commitment`).

---

## /admin/custom-pages — "Custom Pages"

**Breadcrumb:** `Admin › Manage Custom Pages` · **H1:** `Custom Pages` +
`+ Custom Page` primary button (note: no "Add" verb, unlike its siblings).
`Total Records: 2`.

**Columns:** (unlabeled **pencil** icon column) | `Page Name` | `Menu` | `Content?` |
`Viewable By` | (unlabeled **trash** icon column)

This is the only admin grid with **row-action icon columns on both ends** — everywhere else
the row link is the only affordance.

**Rows (2):**
| Page Name | Menu | Content? | Viewable By |
|---|---|---|---|
| `Commitment Bulk Import Instructions` | Learn More | Yes | `Admin, Read Only, Standard` |
| `User Guide` | Learn More | No | `Admin` |

Shape: `Menu` is the nav menu the page is filed under (both under `Learn More`);
`Content?` is Yes/No for whether a body has been authored; `Viewable By` is a
**comma-joined list of role names** in one cell.

---

## /admin/commitment-types — "Commitment Types"

**Breadcrumb:** `Admin › Commitment Types` (⚠️ NOT "Manage …" — see DELTAS)
**H1:** `Commitment Types` + `+ Add Commitment Type`. `Total Records: 4`.

**Columns:** `Name` (linked) | `Description` | `Number Of References` (right-aligned integer)

| Name | Description | Number Of References |
|---|---|---|
| `Compensatory Mitigation Measure` | (empty) | 35 |
| `Environmental Commitment` | (empty) | 21 |
| `Mitigation Measure` | (empty) | 107 |
| `Permit Condition` | (empty) | 227 |

`Number Of References` = how many records use the term. Descriptions are empty on every row
even though the column exists — same on Phases, Resource Categories and Tags.

## /admin/phases — "Phases"

**Breadcrumb:** `Admin › Phases` · **H1:** `Phases` + `+ Add Phase`. `Total Records: 6`.
**Columns:** `Name` | `Description` | `Sort Order` | `Number Of References`
— the only lookup list with an explicit `Sort Order` **column** (Clearance Review Kinds does
the same job with drag-and-drop instead).

| Name | Sort Order | Number Of References |
|---|---|---|
| `Implementation Planning` | 1 | 44 |
| `Pre-Construction` | 2 | 683 |
| `Construction` | 3 | 599 |
| `Post-Construction` | 4 | 201 |
| `Maintenance` | 5 | 37 |
| `Restoration` | 6 | 24 |

Rows are sorted by Sort Order, not alphabetically — the one grid on the site that isn't
alphabetical by default.

## /admin/resource-categories — "Resource Categories"

**Breadcrumb:** `Admin › Resource Categories` · **H1** + `+ Add Resource Category`.
`Total Records: 26`. **Columns:** `Name` | `Description` | `Number Of References`.

Content shape — two distinct naming families in one list, environmental resource areas and
process/administrative buckets, which is why the counts are so lopsided:
`Administrative` 1 · `Aesthetics and Visual Resources` 16 · `Agency Consultation` 0 ·
`Agricultural Resources` 4 · `Air Quality and Greenhouse Gases` 21 · `Birds` 2 ·
`Cultural Resources` 9 · `Defining of Roles/Responsibilities` 0 ·
`Document Review/Amendments` 0 · `Fish & Aquatic Resources` 35 · `Flood Protection` 0 ·
`General Construction Planning` 0 · `General Permit Compliance` 0 ·
`General Pre-Construction Planning` 0 · `Groundwater` 2 ·
`Hazards, Hazardous Materials, and Wildfire` 14 · …(26 total)

Note the inconsistent conjunctions in one list: `and` (Air Quality and Greenhouse Gases),
`&` (Fish & Aquatic Resources), `/` (Document Review/Amendments), and an Oxford comma
(Hazards, Hazardous Materials, and Wildfire). Many categories have **0 references**.

## /admin/tags — "Tags"

**Breadcrumb:** `Admin › Tags` · **H1:** `Tags` + `+ Add Tag`. `Total Records: 320`.
**Columns:** `Name` (linked) | `Description` | `Type` | `Requirement Count`

Content shape — this is user-generated free text and it shows:
- **lowercase** by default (`acces routes`, `adaptive management`, `agency approval`),
  but acronyms stay uppercase (`ACHP`, `ACR`, `AHPO`)
- typos are in the data (`acces routes`)
- some begin with a number (`75-ft buffer`)
- `Type` is `Requirement` on every row (single-valued in practice)
- `Requirement Count` ranges from `0` (orphan tags) to `57`+
- `Description` is empty on every row

320 tags with no grouping, no merge tool and no dedupe — the largest and messiest admin list.

---

## /admin/notifications and /admin/notification-audit-log — ⛔ FEATURE-GATED, NOT VIEWABLE

Both routes exist but for Delta Conveyance they **redirect to `/subscription-insufficient`**,
because the `Notifications` rollout flag is OFF for this tenant.

That page renders: heading `Page Not Found` (teal, ~20px), body line
`You are currently not authorized to view this page.`, and a **red error toast** stacked
bottom-right reading:
> The feature 'Notifications' is not enabled for Delta Conveyance.

⚠️ The toast fires **twice** (two identical stacked toasts) on the /admin/notifications hit.
The heading is also wrong — it says "Page Not Found" for what is an authorization/feature
failure, and the URL says `subscription-insufficient`, a third vocabulary for the same thing.

---
---

# APPENDIX — pages that could NOT be walked read-only (structure from the prod codebase)

These three could not be opened without clicking a `<button>` or without the feature flag.
Structure below is read from `~/Dev/Beacon/Beacon.Web/src/app/pages/...` — **code-derived,
not observed**, so treat the layout details as approximate and the strings as exact.

### `/esa-config/report-templates/:reportTemplateID` — `report-template-edit`
H1 `Edit Report Template`. A `Details` panel with an `Edit` affordance, then a **`Blocks`**
section: `+ Add Block`, and a drag-reorderable (`reorder` handle) numbered list of blocks
(`{{ i + 1 }}`), each with `add` / `content_copy` (clone) / `cancel` (remove) /
`instant_mix` → `Configure Block` / `edit_square` icon actions.
Empty state: `No blocks available.`

### `/esa-config/commitment-category-maps/:commitmentCategoryMapID` — `commitment-category-map-edit`
Two halves.
1. **Categories**: `+ Add Category`, a drag-reorderable list of categories, each with icon
   actions titled `Rename Category` / `Clone Category` / `Delete Category`; each category
   contains a nested drag-reorderable **subcategory** list with `Edit` / `Delete`.
   Empty states: `No subcategories yet.` and
   `No categories. Click "+ Add Category" to get started.`
2. **`Details`** panel with `Edit`, and the integration block:
   `API Key` (with a copy-to-clipboard button, a **Generate** and a **Revoke** button, both
   `color="warn"`), empty state `No API key generated.`; `Endpoint URL` (copy button);
   and a `JSON Preview`.
   → This is why the tile lives under **API & Integrations**: each category map is an
   external ingestion endpoint with its own API key.

### `/admin/notifications` — `manage-notifications`
H1 `Manage Notifications`. A **`mat-tab-group`** where **one tab per notification type**,
labelled by `ActionNotificationTypeDisplayName` (so the tab set is data-driven, not
hard-coded). Each tab has its own `Save` (disabled until that tab is dirty) and `Cancel`.
Below the tabs, two more sections:
- `Email Signature` — help line
  `This signature appears at the bottom of all notification emails.`, a `Sign-off Text`
  field, a logo slot whose empty state reads `No logo uploaded. Upload one here` (the
  "Upload one here" is a link to the Tenant Logo page), and a `Cancel`.
- `Email Preview`

### `/admin/notification-audit-log` — `notification-audit-log`
An ag-Grid with columns: `Component` (`ComponentName`), `Sent Date`, `Project`
(`ProjectName`), `Action` (`ActionName`), `Recipient` (`RecipientName`),
`Recipient Type`, `Email` (`RecipientEmail`), `Type`
(`ActionNotificationTypeDisplayName`), `Test` (`IsTestRun`), `Due Date`, `View`.

### Role rights vocabulary (for the Role Details selects)
The eleven `… Rights` selects all share one option list (`permissionsOptions`, a bit-mask).
The underlying rights are `CanRead`, `CanUpdate`, `CanCreate`, `CanDelete`; the composed
option shown in QA for the No Access role was `None`.

---
---

# DELTAS vs. common assumptions

1. **`/admin` has no Notifications tile at all, and both notification routes are hard-gated.**
   Reading the route table suggests `/admin/notifications` and `/admin/notification-audit-log`
   are normal admin pages. In QA they redirect to `/subscription-insufficient` with a
   `Page Not Found` heading and a duplicated red toast, because the `Notifications` rollout
   flag is OFF for Delta Conveyance. A settings prototype either needs a tenant with the flag
   on, or must model the gate itself. Three different words for one state — "Page Not Found",
   "not authorized", "subscription-insufficient" — is itself worth fixing.

2. **There are two settings dashboards with two different information architectures.**
   `/esa-config` is a **3-column grid split into 7 named sections** (Reporting, Custom Fields,
   Tenants, Feature Flags, Site Clearance, API & Integrations, Actions) with **no counts**.
   `/admin` is a **flat 4-column grid, no sections**, where every tile **has a count badge**.
   Nothing signals to a user why a given setting lives in one versus the other.

3. **The esa-config "Actions" tiles fire real jobs and look exactly like navigation tiles.**
   `Extract Source PDF contents`, `Backfill DMR Evidence of Compliance`,
   `Extend Rolling Window` and `Send Notifications` are anchors with **no href** — a single
   click runs the job. They sit in the same grid, with the same card, icon and label
   treatment, as `Bulk EoC Ingest`, which is just a link to a page. No confirm, no
   destructive styling, no separation.

4. **Two pages are visibly outside the design system.** `/esa-config/bulk-eoc-ingest` renders
   **raw native `<select>` and `<input type="file">`** ("Choose Files | No file chosen") with
   bold-above-field labels and plain bordered buttons — none of the app's form styling. And
   `/admin/data-catalog-display` is wrapped in a **dashed purple `EXPERIMENTAL` border** with
   the badge overlapping its own intro text. Both look shipped-but-unfinished.

5. **`/admin/roles/{id}` renders an editable form with no Save button.** Every input is live
   (`disabled: false`), but the actions bar is inside an `@if (editMode)` block that is false
   on the details route — so a user can type into Name, flip checkboxes, and have nowhere to
   commit. The same page renders **every checkbox's label twice** (once as the teal
   right-aligned form label, wrapping to three ragged lines, and again as the checkbox's own
   inline text), because each row pairs a `<custom-form-label>` with a `<mat-checkbox>` that
   already has inner text.

## Smaller deltas worth knowing before building fixtures

- **Two config pages the brief didn't list exist:** `/esa-config/clearance-review-kinds`
  (a Site Clearance section on the dashboard) and, effectively, the `/esa-config/report-types`
  scope model. Clearance Review Kinds is the only page using **deactivate (circle-slash)
  instead of delete** and drag-to-reorder.
- **Headings, breadcrumbs and tab titles disagree constantly.** `Manage Report Types` (crumb)
  vs `Report Types` (H1); `entity-labels` (route) vs `Terminology` (everything else);
  `Manage Labels And Definitions` (crumb) vs `Labels & Definitions` (H1). And most admin
  crumbs say "Manage X" while `Commitment Types`, `Phases`, `Resource Categories` and `Tags`
  say just "X".
- **Add-button placement and wording are unstable.** Some sit on the H1 line
  (`+ Add Definition`, `+ Report Template`, `+ Add Role`), one sits on a row of its own below
  the intro (`Add Tenant`), one sits on a *section* header (`+ Add Kind`). Wording varies:
  `Invite User`, `+ Custom Page` (no verb), `Add Tenant` (no `+`), `+ Add Report Type`.
- **Boolean rendering is inconsistent across grids:** literal `Yes`/`No` text on Users and
  Custom Field Definitions, a real (disabled) **checkbox** on Roles, `Yes`/`No` again on
  Custom Pages.
- **Empty states are inconsistent.** Tenant Logo has a designed one (icon + two lines of
  copy). Bulk EoC Ingest uses one line of *italic* gray text. Every ag-Grid page falls back to
  ag-Grid's raw `No Rows To Show`, centered in a tall blank body.
- **`Description` exists as a column on Roles, Commitment Types, Phases, Resource Categories
  and Tags — and is empty on literally every row** across all five.
- **Narrow grids look broken.** ag-Grid auto-sizes columns to content, so `/admin/roles`
  fills only ~27% of the card width while its dark header band runs full width.
- **`Work Area` is a first-class entity** in Terminology and is the `Entity Type` on all six
  custom field definitions, but it has no Data Catalog nav item.
- **ID types are mixed:** esa-config entities use **GUIDs** (report templates, category maps,
  custom field definitions); admin roles and users use **integers**.
- **Scale for fixtures:** Users 75, Tags 320, Labels & Definitions 36, Resource Categories 26,
  Phases 6, Commitment Types 4, Roles 4, Custom Pages 2, Tenants 19, Report Types 1,
  Report Templates 1, Category Maps 3, Clearance Review Kinds 3, People 0, Organizations 0.
- **`Definition` and other long-text fields hold rich HTML.** One Labels & Definitions row
  contains a pasted mitigation measure with bold/italic/strikethrough tracked changes and a
  nested numbered list, ~10× the height of its neighbours. Fixture data should include one
  monster row.
