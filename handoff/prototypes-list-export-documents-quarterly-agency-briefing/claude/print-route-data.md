# Print route + data

Commitment list PDF · source prototype: https://esassoc.github.io/beacon-design/prototypes/list-export-documents/quarterly-agency-briefing/

![Print route + data, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-list-export-documents-quarterly-agency-briefing/claude/print-route-data.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-list-export-documents-quarterly-agency-briefing/claude/print-route-data.phone.png

A commitment list as the PDF its Export card downloads: title block, a summary table with one line per commitment, then each commitment with its requirements in the permit's words, from a new page.

## Key decisions

- Print route: `commitment-list/:commitmentListID` in print.routes.ts, beside the other list routes, guarded by printAuthGuard.
- Data: the endpoint the list tree and the CSV read, `commitmentListsCommitmentListIDTreeGet` (its Commitments), plus the list detail for Name and Description.
- Groups are permit sections ("COA 10"), commitments in code order inside each (the CSV's compareByCode).
- Download: `GET commitment-lists/{commitmentListID}/generate-pdf`, file named `{list.Name}.pdf`, Letter via the PdfService paper option.
- An empty list still exports: the title block with a count of 0 and no body.

## Gotchas

- The prototype's requirement text is cut short in its fixture (it ends in an ellipsis). Prod prints the full requirement text.
- A long commitment can run past a page. `break-inside: avoid` keeps short ones whole; Chromium lets a taller one break, which is right.

## Done when

- Every commitment on the list appears once in the summary and once in the detail, in code order.

## Components

- `bcn-doc` (spoke) · `src/components/bcn/BcnDocSheet.astro`
- `bcn-doc-facts` (spoke) · `src/components/bcn/BcnDocFacts.astro`

## Markup

_2 repeated elements are collapsed in the markup below; the comments say where._

```html
<header class="bcn-doc__head">
  <img class="bcn-doc__logo" src="/beacon-design/images/dcp/dwr-logo.png" alt="DWR" />
  <h1 class="bcn-doc__title">Quarterly Agency Briefing</h1>
  <p class="bcn-doc__desc">Read into the quarterly briefing deck for the resource agencies.</p>
  <div class="bcn-doc__facts">
    <dl class="bcn-doc-facts bcn-doc-facts--title">
      <div class="bcn-doc-facts__pair">
        <dt>Type</dt>
        <dd>Commitment List</dd>
      </div>
      <div class="bcn-doc-facts__pair">
        <dt>Project</dt>
        <dd>Delta Conveyance</dd>
      </div>
      <!-- …and 2 more like this (<div class="bcn-doc-facts__pair">) -->
    </dl>
  </div>
</header>
```

## Styles

```css
.bcn-doc-facts {
  flex-wrap: wrap;
  margin: 0;
  display: flex;
}
.bcn-doc-facts--title {
  gap: var(--spacing-100) var(--spacing-500);
  font-size: var(--bcn-print-font-size-body);
}
.bcn-doc-facts__pair {
  gap: var(--spacing-150);
  min-inline-size: 0;
  display: flex;
}
.bcn-doc-facts dt {
  white-space: nowrap;
  color: var(--color-content-default-secondary);
  flex: none;
}
.bcn-doc-facts dd {
  min-inline-size: 0;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-doc__head {
  border-block-end: 2px solid var(--color-content-default);
  margin-block-end: var(--spacing-500);
  padding-block-end: var(--spacing-400);
}
.bcn-doc__logo {
  block-size: var(--bcn-print-logo-height);
  inline-size: auto;
  margin-block-end: var(--spacing-500);
  display: block;
}
.bcn-doc__title {
  font-size: var(--bcn-print-font-size-title);
  font-weight: var(--typography-font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-doc__desc {
  margin: var(--spacing-200) 0 0;
  max-inline-size: 42em;
  font-size: var(--bcn-print-font-size-entry);
}
.bcn-doc__facts {
  margin-block-start: var(--spacing-400);
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-print-font-size-body` | `9pt` | component |
| `--bcn-print-font-size-entry` | `9.5pt` | component |
| `--bcn-print-font-size-title` | `20pt` | component |
| `--bcn-print-logo-height` | `54px` | component |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--line-height-tight` | `1.3` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
