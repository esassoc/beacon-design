# Action entry + status lines

One action in the detail: title with commitment codes at the right margin, description, a facts row (Frequency, Timing), then one line per component saying where the action stands there.

## Key decisions
- One line per scope, not per occurrence (round 1). Scope is ComponentName, or ProjectName when the action is done once for the project.
- Each line names the occurrence that is open now: the first implementation by SequenceNumber that is not Completed, or the last one when all are. It prints that occurrence's status (occurrenceStatusLabel, the same label the tree uses), its due date (EditedDueDate, else DueDate, YYYY-MM-DD), and "N of M done" when the scope has more than one occurrence.
- Status is a plain word, not a pill: a printed page cannot rely on color, and a tinted chip prints as a gray box.
- No due date on a Completed line, and none when the occurrence has none (as-needed actions).

## Gotchas
- An implementation marked IsNotApplicable prints "Not Applicable" (NOT_APPLICABLE_LABEL), as the CSV does, and does not count toward "N of M done".
- Keep the whole entry together on a page (`break-inside: avoid`); a status list split from its action is unreadable.

## Done when
- A recurring action on three components prints three lines, each with the open occurrence's status, its due date, and "k of n done".

## Markup
```html
<article class="bcn-doc-entry" data-doc-entry="action">
  <div class="bcn-doc-entry__head">
    <h3 class="bcn-doc-entry__title">Fund Annual Endowment Deposit Amount Installment</h3>
    <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 12.12, COA 12.12.3</p>
  </div>
  <p class="bcn-doc-entry__desc">
    Each year beginning in the fiscal year SWP Contractor charges cease to be available,
    the Permittee deposits at least 10 percent of the PAR-required Endowment Deposit
    Amount, adjusted for inflation and present value, into the mutually agreed account,
    until the Endowment is fully funded over a maximum of 10 years. Each installment
    amount is as approved by CDFW in writing.
  </p>
  <div class="bcn-doc-entry__facts">
    <dl class="bcn-doc-facts bcn-doc-facts--entry">
      <div class="bcn-doc-facts__pair">
        <dt>Frequency</dt>
        <dd>Recurring</dd>
      </div>
      <div class="bcn-doc-facts__pair">
        <dt>Timing</dt>
        <dd>
          over a maximum 10-year period, in annual amounts of at least 10%, commencing the
          fiscal year that SWP charges to the SWP Contractors are no longer an available
          funding source
        </dd>
      </div>
    </dl>
  </div>
  <dl class="bcn-doc-occ">
    <div class="bcn-doc-occ__line">
      <dt>Twin Cities Complex</dt>
      <dd>
        In Progress<span class="bcn-doc-occ__aside">Due 2026-09-12</span
        ><span class="bcn-doc-occ__aside">1 of 3 done</span>
      </dd>
    </div>
    <div class="bcn-doc-occ__line">
      <dt>Bouldin Island Launch Shaft</dt>
      <dd>
        In Progress<span class="bcn-doc-occ__aside">Due 2027-03-10</span
        ><span class="bcn-doc-occ__aside">1 of 3 done</span>
      </dd>
    </div>
    <div class="bcn-doc-occ__line">
      <dt>Byron Tract Forebay</dt>
      <dd>
        Not Started<span class="bcn-doc-occ__aside">Due 2027-03-15</span
        ><span class="bcn-doc-occ__aside">2 of 3 done</span>
      </dd>
    </div>
  </dl>
</article>
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
.bcn-doc-facts--entry {
  gap: var(--spacing-050) var(--spacing-500);
  font-size: var(--bcn-print-font-size-meta);
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
.bcn-doc-occ {
  gap: var(--spacing-050) var(--spacing-400);
  margin: var(--spacing-200) 0 0;
  font-size: var(--bcn-print-font-size-meta);
  grid-template-columns: max-content 1fr;
  display: grid;
}
.bcn-doc-occ__line {
  display: contents;
}
.bcn-doc-occ__line dt {
  color: var(--color-content-default-secondary);
}
.bcn-doc-occ__line dd {
  font-weight: var(--typography-font-weight-medium);
  margin: 0;
}
.bcn-doc-occ__aside {
  font-weight: var(--typography-font-weight-regular);
  color: var(--color-content-default-secondary);
  margin-inline-start: var(--spacing-300);
}
.bcn-doc-entry {
  padding-block: var(--spacing-250);
  break-inside: avoid;
}
.bcn-doc-entry__head {
  justify-content: space-between;
  align-items: baseline;
  gap: var(--spacing-500);
  display: flex;
}
.bcn-doc-entry__title {
  font-size: var(--bcn-print-font-size-entry);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-doc-entry__codes {
  text-align: end;
  max-inline-size: 40%;
  font-size: var(--bcn-print-font-size-meta);
  color: var(--color-content-default-secondary);
  flex: none;
  margin: 0;
}
.bcn-doc-entry__desc {
  margin: var(--spacing-100) 0 0;
  max-inline-size: 46em;
}
.bcn-doc-entry__facts {
  margin-block-start: var(--spacing-150);
}
```

## Tokens
- `--bcn-print-font-size-body`: 9pt _(component)_
- `--bcn-print-font-size-entry`: 9.5pt _(component)_
- `--bcn-print-font-size-meta`: 8pt _(component)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-regular`: 400 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
