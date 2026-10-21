# Title block

Obligation list PDF · source prototype: https://esassoc.github.io/beacon-design/prototypes/list-export-documents/construction-kickoff-summary/

![Title block, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-list-export-documents-construction-kickoff-summary/claude/title-block.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-list-export-documents-construction-kickoff-summary/claude/title-block.phone.png

The tenant's logo, the list's name and description, then one line of facts: Type, Project, Exported, and the obligation count.

## Key decisions

- Brand is the TENANT's logo only (round 1: "Tenant"). No Beacon or ESA mark. The tenant arrives on the print URL (PdfService passes it as ?tenant=), so the logo needs no extra call.
- Exported is the generation date, YYYY-MM-DD.
- The count is the number of members printed, derived from the data, never stored.
- Facts are label + value pairs on one line (the prototype's BcnDocFacts). The same pairs component prints the facts under each obligation.

## Done when

- The logo is the tenant's; the count equals the rows in the summary table.

## Components

- `bcn-doc` (spoke) · `src/components/bcn/BcnDocSheet.astro`
- `bcn-doc-facts` (spoke) · `src/components/bcn/BcnDocFacts.astro`

## Markup

_2 repeated elements are collapsed in the markup below; the comments say where._

```html
<header class="bcn-doc__head">
  <img class="bcn-doc__logo" src="/beacon-design/images/dcp/dwr-logo.png" alt="DWR" />
  <h1 class="bcn-doc__title">Construction Kickoff Summary</h1>
  <p class="bcn-doc__desc">
    Issued to each prime contractor at kickoff, and re-issued when a permit amendment changes a
    duty.
  </p>
  <div class="bcn-doc__facts">
    <dl class="bcn-doc-facts bcn-doc-facts--title">
      <div class="bcn-doc-facts__pair">
        <dt>Type</dt>
        <dd>Obligation List</dd>
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
