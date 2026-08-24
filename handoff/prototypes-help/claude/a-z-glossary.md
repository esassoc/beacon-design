# A–Z glossary

Every glossary-kind article as a bare term link, sorted A–Z and flowing into narrow text columns. It answers "what does Beacon mean by this word" without the ceremony of a card or a summary.

## Key decisions
- Deliberately spare: no cards, no summaries, no icons, no counts — just terms. The restraint is the design.
- CSS multi-column layout (columns: 12rem) rather than a grid, so the term list reflows naturally to the viewport with break-inside:avoid on each item.
- Each term deep-links the reading pane on the same page via #article-<id> — the same contract every other entry point uses.
- Terms come from glossaryArticles() (articles whose kind is glossary); glossary terms live in the functional category their term belongs to, so this section is the only place they appear alphabetically.

## Gotchas
- No esa-* lego fits: esa-link-column is a titled card of links with card chrome, esa-pillbox is tag chips, esa-badge is a status token. A bare A–Z term index is bcn-kb-glossary.
- The interactive accent here is the house link color. An earlier revision used a light Aldo-green tint — light green is BANNED as an interactive accent across this feature; Aldo green is the mark's color, not a hover state.

## Done when
- Terms render A–Z in flowing columns with no chrome beyond a hairline above; hovering underlines a term in the house link color; clicking one opens it in the reading pane.

## Markup
```html
<section class="bcn-kbg" aria-labelledby="bcn-kbg-title">
  <h2 id="bcn-kbg-title" class="bcn-kbg__title type-section-title">Glossary</h2>
  <ul class="bcn-kbg__terms" role="list">
    <li class="bcn-kbg__term">
      <a class="bcn-kbg__link" href="#article-what-is-an-action">Action</a>
    </li>
    <li class="bcn-kbg__term">
      <a class="bcn-kbg__link" href="#article-what-is-a-commitment">Commitment</a>
    </li>
    <li class="bcn-kbg__term">
      <a class="bcn-kbg__link" href="#article-what-is-a-component">Component</a>
    </li>
    <li class="bcn-kbg__term">
      <a class="bcn-kbg__link" href="#article-what-is-a-dmr">Daily Monitoring Report</a>
    </li>
    <li class="bcn-kbg__term">
      <a class="bcn-kbg__link" href="#article-what-is-evidence">Evidence of Compliance</a>
    </li>
    <li class="bcn-kbg__term">
      <a class="bcn-kbg__link" href="#article-feature-flag">Feature Flag</a>
    </li>
    <li class="bcn-kbg__term">
      <a class="bcn-kbg__link" href="#article-actions-vs-implementations"
        >Implementation</a
      >
    </li>
    <li class="bcn-kbg__term">
      <a class="bcn-kbg__link" href="#article-monitoring-portal">Monitoring Portal</a>
    </li>
    <li class="bcn-kbg__term">
      <a class="bcn-kbg__link" href="#article-what-is-an-observation">Observation</a>
    </li>
    <li class="bcn-kbg__term">
      <a class="bcn-kbg__link" href="#article-permit">Permit</a>
    </li>
    <li class="bcn-kbg__term">
      <a class="bcn-kbg__link" href="#article-what-is-a-requirement">Requirement</a>
    </li>
    <li class="bcn-kbg__term">
      <a class="bcn-kbg__link" href="#article-project-vs-component-scope">Scope</a>
    </li>
    <li class="bcn-kbg__term">
      <a class="bcn-kbg__link" href="#article-site-clearance">Site Clearance</a>
    </li>
    <li class="bcn-kbg__term">
      <a class="bcn-kbg__link" href="#article-what-is-a-source">Source Document</a>
    </li>
    <li class="bcn-kbg__term">
      <a class="bcn-kbg__link" href="#article-survey">Survey</a>
    </li>
    <li class="bcn-kbg__term">
      <a class="bcn-kbg__link" href="#article-tenant">Tenant</a>
    </li>
    <li class="bcn-kbg__term">
      <a class="bcn-kbg__link" href="#article-work-area">Work Area</a>
    </li>
  </ul>
</section>
```

## Styles
```css
.type-section-title {
  font-family: var(--typography-heading-md-font-family);
  font-size: var(--typography-heading-md-font-size);
  font-weight: var(--typography-heading-md-font-weight);
  line-height: var(--typography-heading-md-line-height);
  letter-spacing: var(--typography-heading-md-letter-spacing);
}
.bcn-kbg {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
  padding-block-start: var(--spacing-500);
  border-top: 1px solid var(--color-border);
}
.bcn-kbg__title {
  margin: 0;
  color: var(--color-text-primary);
}
.bcn-kbg__terms {
  list-style: none;
  margin: 0;
  padding: 0;
  columns: 12rem;
  column-gap: var(--spacing-600);
}
.bcn-kbg__term {
  break-inside: avoid;
  margin-block-end: var(--spacing-150);
}
.bcn-kbg__link {
  font-size: 0.9375rem;
  line-height: 1.4;
  color: var(--color-text-primary);
  text-decoration: none;
  transition: color 0.12s ease;
}
.bcn-kbg__link:hover {
  color: var(--color-text-link);
  text-decoration: underline;
  text-underline-offset: 2px;
}
.bcn-kbg__link:focus-visible {
  outline: 2px solid var(--color-text-link);
  outline-offset: 2px;
  border-radius: var(--radius-100);
}
```

## Tokens
- `--color-border`: #dcdcdc _(component)_
- `--color-text-link`: #46a758 _(component)_
- `--color-text-primary`: #3d3d3d _(component)_
- `--radius-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
- `--typography-heading-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-heading-md-font-size`: clamp(1.125rem, .98rem + .72vw, 1.5rem) _(semantic)_
- `--typography-heading-md-font-weight`: 550 _(semantic)_
- `--typography-heading-md-letter-spacing`: -.01em _(semantic)_
- `--typography-heading-md-line-height`: 1.3 _(semantic)_
