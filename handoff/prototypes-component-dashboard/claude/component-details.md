# Component details

Component Dashboard · source prototype: https://esassoc.github.io/beacon-design/prototypes/component-dashboard/

![Component details, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-component-dashboard/claude/component-details.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-component-dashboard/claude/component-details.phone.png

The quiet rail card of the Component record's own fields: start date, expected end date, and the tenant-defined custom field values, under the stored description.

## Key decisions

- Every line maps to a field on ComponentDto. Nothing derived, nothing decorative.
- NO FILES. ComponentDto has no Files field — a `files` array was invented in the first prototype pass and cut at review (2026-08-13). Component files in prod are `EvidenceOfComplianceFile` rows reached through evidence records, a different entity, which is why prod's Summary tab surfaces them in an evidence-of-compliance grid rather than as component fields. Do not add a file list to this card.
- NO STATUS. The header renders it as a chip; one fact does not need two homes on one screen. (Prod's Summary tab does show it, because prod has no identity header to carry it.)
- NO PROJECT LINK. The breadcrumb trail carries the hierarchy, as it does in prod.
- NO SOURCE DOCUMENTS and no footprint layers. Both are real Component data and both are on the page — as their own rail rows, each opening a panel — so restating them inside this card would be a second home for the same fact.
- It reuses the project dashboard's facts card unchanged, with a title override. The two records differ; the treatment should not.

## Gotchas

- Resist re-adding derived or decorative facts. On the project card four were deleted for having no DB source; on this one an invented file list was. That rule is why the card is short.
- THE COMPONENT DASHBOARD CARRIES NO EVIDENCE SURFACE. Decided 2026-08-13, and deliberate rather than an oversight — the Summary tab being retired had one, so its absence will otherwise read as something lost in the move. Two separate reasons. (1) The thing being dropped is dead UI: prod's `<evidence-of-compliance-summary-grid [componentID]>` renders "Highlighted Evidence of Compliance", whose rows come from `dbo.ComponentSummaryEvidenceOfCompliance`, an opt-in join that NOTHING in develop writes — no UI references it and `EvidenceOfComplianceUpsertDto` has no field for it — so rows arrive only by seed or direct insert, and the template short-circuits on `rowData.length > 0`, rendering nothing at all when empty. That is why it is invisible in QA. (2) Evidence already has homes: the app-wide evidence drawer attaches it to actions, and the Data Catalog lists the records. Re-confirm (1) at slicing in case an admin or import path exists that this survey missed. If a component-scoped evidence VIEW is later wanted, it is a new surface designed on its own terms — not this grid resurrected.

## Done when

- Every fact maps to a ComponentDto field or a custom field value; no file list appears; status and the project link are not duplicated from the header and breadcrumb.

## Components

- `bcn-pf` (spoke) · `src/components/bcn/BcnProjectFacts.astro`

## Markup

_3 repeated elements are collapsed in the markup below; the comments say where._

```html
<dl class="bcn-pf">
  <div class="bcn-pf__fact">
    <dt class="bcn-pf__label">Start Date</dt>
    <dd class="bcn-pf__value">Oct 5, 2026</dd>
  </div>
  <div class="bcn-pf__fact">
    <dt class="bcn-pf__label">Expected End Date</dt>
    <dd class="bcn-pf__value">Jan 29, 2027</dd>
  </div>
  <!-- …and 3 more like this (<div class="bcn-pf__fact">) -->
</dl>
```

## Styles

```css
.bcn-pf {
  flex-direction: column;
  margin: 0;
  display: flex;
}
.bcn-pf__fact {
  padding: var(--spacing-250) 0;
  flex-direction: column;
  gap: 2px;
  display: flex;
}
.bcn-pf__fact + .bcn-pf__fact {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-pf__label {
  font-size: var(--font-size-150);
  color: var(--color-content-default-tertiary);
}
.bcn-pf__value {
  font-size: var(--font-size-200);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--typography-font-weight-semibold` | `550` | semantic |
