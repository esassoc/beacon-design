# Commitment entry

One commitment in the detail: its title with the code at the right margin, then each requirement: its name, then its text.

## Key decisions
- No facts row: a commitment has no class, audience, status or schedule of its own.

## Markup
```html
<article class="bcn-doc-entry" data-doc-entry="commitment">
  <div class="bcn-doc-entry__head">
    <h3 class="bcn-doc-entry__title">Phase 2 Project Operations Report</h3>
    <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 7.5</p>
  </div>
  <ol class="bcn-doc-entry__reqs">
    <li class="bcn-doc-entry__req">
      <p class="bcn-doc-entry__req-name">
        Submit Phase 2 Project Operations Report to CDFW
      </p>
      <p class="bcn-doc-entry__req-text">
        No more than six months after the initiation of Phase 2 Operations, Permittee
        shall provide CDFW with a Phase 2 Project Operations Report which shall include,
        at a minimum: (1) a summary of all Monthly Compliance Reports and all ASRs; and
        (2) a copy of the table in the MMRP with notes showing when each of the mitigation
        measures was implemented; (3) all available information about Project-related
        incidental take of the Covered Species; (4) information about other Project
        impacts on the Covered…
      </p>
    </li>
  </ol>
</article>
```

## Styles
```css
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
.bcn-doc-entry__reqs {
  margin: var(--spacing-150) 0 0;
  padding: 0;
  list-style: none;
}
.bcn-doc-entry__req + .bcn-doc-entry__req {
  margin-block-start: var(--spacing-150);
}
.bcn-doc-entry__req-name {
  font-weight: var(--typography-font-weight-medium);
  margin: 0;
}
.bcn-doc-entry__req-text {
  margin: var(--spacing-050) 0 0;
  max-inline-size: 46em;
}
```

## Tokens
- `--bcn-print-font-size-entry`: 9.5pt _(component)_
- `--bcn-print-font-size-meta`: 8pt _(component)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
