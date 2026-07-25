# Category article list (full browse)

The comprehensive list for one category: a quiet article count, then EVERY article in the category as a title link over a terse one-line summary. This is the full browse — denser than the home's curated preview cards, and the reason "View all →" exists.

## Key decisions
- Rows are divided by hairlines with NO outer border — the list reads as a continuous index rather than a boxed table. Andy's call in the category-page polish pass.
- A bare count sits alone above the list. No lede, no filters, no sort control — the category is already the filter.
- Every row deep-links the reading pane on the SAME page via #article-<id> — the same hash contract every other entry point in the feature uses, so a row here and a search result on the home behave identically.
- The title is a link and the summary is plain text beside it; the row is not itself a link, matching the container-not-link discipline used on the home's cards.
- The list is held to a 60rem measure so long summaries do not run the full content column.

## Gotchas
- No esa-* lego fits: esa-card is card chrome, esa-link-column is a card of bare links with no summaries, and esa-sidebar-nav renders ornamental micro-label group headers plus filled-badge hints. A dense titled article list is bcn-kb-article-list.
- The count is derived from the articles passed in, not stored — it must match articlesByCategory for the route, or the home's card count and this page disagree.
- Rows come from getStaticPaths props, so the list is fully server-rendered; nothing here needs client JS.

## Done when
- The count matches the number of rows and the count on the home's card for this category; every article in the category appears exactly once as a title link over a summary; rows are separated by hairlines with no box around the list; clicking a row opens it in the pane below.

## Markup
```html
<section class="bcn-kbl" aria-label="Tracking articles">
  <span class="bcn-kbl__count">6 articles</span>
  <ul class="bcn-kbl__list" role="list">
    <li class="bcn-kbl__row">
      <a class="bcn-kbl__link" href="#article-actions-vs-implementations"
        >Implementation</a
      >
      <span class="bcn-kbl__summary"
        >A single execution of a published action — the record teams work day to
        day.</span
      >
    </li>
    <li class="bcn-kbl__row">
      <a class="bcn-kbl__link" href="#article-what-is-a-component">Component</a>
      <span class="bcn-kbl__summary"
        >A distinct place or package of work within a project, tracked
        independently.</span
      >
    </li>
    <li class="bcn-kbl__row">
      <a class="bcn-kbl__link" href="#article-permit">Permit</a>
      <span class="bcn-kbl__summary"
        >An agency authorization the project must obtain, tracked through the acquisition
        pipeline.</span
      >
    </li>
    <li class="bcn-kbl__row">
      <a class="bcn-kbl__link" href="#article-reading-permit-tracking"
        >Reading the Permit Tracking board</a
      >
      <span class="bcn-kbl__summary"
        >Where each permit stands, what is blocking it, and what is due next.</span
      >
    </li>
    <li class="bcn-kbl__row">
      <a class="bcn-kbl__link" href="#article-starring-components"
        >Starring components on your dashboard</a
      >
      <span class="bcn-kbl__summary"
        >Pin the three-to-five components you actually work in.</span
      >
    </li>
    <li class="bcn-kbl__row">
      <a class="bcn-kbl__link" href="#article-reading-critical-now"
        >How “Most critical right now” is chosen</a
      >
      <span class="bcn-kbl__summary"
        >Why an item earns a spot at the top of the dashboard.</span
      >
    </li>
  </ul>
</section>
```

## Styles
```css
.bcn-kbl {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-500);
  max-inline-size: 60rem;
}
.bcn-kbl__count {
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
}
.bcn-kbl__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.bcn-kbl__row {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-050);
  padding-block: var(--spacing-300);
}
.bcn-kbl__link {
  font-size: 1rem;
  font-weight: var(--font-weight-medium);
  line-height: 1.4;
  color: var(--color-text-primary);
  text-decoration: none;
  transition: color 0.12s ease;
  width: fit-content;
}
.bcn-kbl__summary {
  font-size: 0.875rem;
  line-height: 1.45;
  color: var(--color-text-secondary);
}
.bcn-kbl__row + .bcn-kbl__row {
  border-top: 1px solid var(--color-border-light);
}
```

## Tokens
- `--color-border-light`: #efefef _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-weight-medium`: 500 _(primitive)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
