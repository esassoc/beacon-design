# Component details

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

## Markup
```html
<dl class="bcn-pf">
  <div class="bcn-pf__fact">
    <dt class="bcn-pf__label">Start Date</dt>
    <dd class="bcn-pf__value">Sep 2, 2025</dd>
  </div>
  <div class="bcn-pf__fact">
    <dt class="bcn-pf__label">Expected End Date</dt>
    <dd class="bcn-pf__value">Nov 30, 2029</dd>
  </div>
  <div class="bcn-pf__fact">
    <dt class="bcn-pf__label">Reach</dt>
    <dd class="bcn-pf__value">Central Delta — Reach 3</dd>
  </div>
  <div class="bcn-pf__fact">
    <dt class="bcn-pf__label">Lead discipline</dt>
    <dd class="bcn-pf__value">Geotechnical</dd>
  </div>
  <div class="bcn-pf__fact">
    <dt class="bcn-pf__label">Shaft type</dt>
    <dd class="bcn-pf__value">Launch</dd>
  </div>
</dl>
```

## Styles
```css
.bcn-pf__desc {
  margin: 0 0 var(--spacing-300);
  font-size: var(--type-size-150);
  line-height: var(--line-height-normal);
  color: var(--color-text-secondary);
}
.bcn-pf {
  margin: 0;
  display: flex;
  flex-direction: column;
}
.bcn-pf__fact {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: var(--spacing-250) 0;
}
.bcn-pf__fact + .bcn-pf__fact {
  border-top: 1px solid var(--color-border-light);
}
.bcn-pf__label {
  font-size: var(--type-size-150);
  color: var(--color-text-tertiary);
}
.bcn-pf__value {
  margin: 0;
  font-size: var(--type-size-200);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-pf__files {
  list-style: none;
  margin: 0;
  padding: var(--spacing-250) 0 0;
  border-top: 1px solid var(--color-border-light);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-pf__file {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  color: var(--color-text-muted);
  min-width: 0;
}
.bcn-pf__file-name {
  font-size: var(--type-size-150);
  color: var(--color-text-secondary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

## Tokens
- `--color-border-light`: #efefef _(component)_
- `--color-text-muted`: #7c7c7c _(component)_
- `--color-text-primary`: #3d3d3d _(component)_
- `--color-text-secondary`: #525252 _(component)_
- `--color-text-tertiary`: #656565 _(component)_
- `--font-weight-semibold`: 550 _(component)_
- `--line-height-normal`: 1.6 _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(component)_
- `--type-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(component)_
