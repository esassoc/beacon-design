# Browse by category

Help & Guidance · source prototype: https://esassoc.github.io/beacon-design/prototypes/help/

![Browse by category, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-help/claude/browse-by-category.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-help/claude/browse-by-category.phone.png

The curated browse surface: one spacious card per category (seven), each a PREVIEW rather than an inventory — the category title, its one-line description, two-to-three featured articles, the total article count, and a "View all →" link into that category's comprehensive page.

## Key decisions

- FEATURED is an owned, curated authored record — the editorial pick of what best orients someone new to each category, held in a FEATURED map keyed by category id and validated against the data at build time. Every other value on the card (title, description, count) derives from HELP_CATEGORIES + articlesByCategory, so the cards follow the data.
- Uniform 3-column grid on wide viewports (2-up medium, 1-up narrow). The seventh card orphaning on the last row is ACCEPTED and expected — symmetry and equal card widths win over orphan-avoidance. Do not stretch or feature a card to compensate.
- The card footer (count + "View all") is pinned to the bottom with margin-top:auto so a row of cards aligns regardless of how many featured links each holds.
- Two destinations, deliberately different: a featured link deep-links the reading pane ON THIS PAGE via #article-<id> (a quick inline read); "View all →" navigates to the category page (the full browse).
- The card is a CONTAINER, never itself a link — it holds several independent links.

## Gotchas

- This is not esa-card: esa-card is a display:block title/body/footer shell whose body cannot stretch to pin a footer action, and the card is not a single link.
- The dense all-articles index that once lived on this page was cut — it read as overwhelming for a homepage. Keep the home a preview; the comprehensive per-category list belongs on the category page.
- NOT CAPTURED HERE (different route): the category page /prototypes/help/<id> is a static route per category (getStaticPaths over HELP_CATEGORIES) composed of bcn-kb-article-list (a quiet count, then every article as a title link over a one-line summary, rows divided by hairlines with NO outer border and no description lede) plus a bcn-kb-browser scoped to that category and landing on its first article. PageLayout supplies the breadcrumb back to the help home.
- Cards carry id="category-<id>" as a graceful-fallback anchor with scroll-margin-top to clear the topbar; #category-<id> otherwise redirects to the category page.

## Done when

- Seven equal-width cards in a 3-column grid, footers aligned across each row; a featured link opens the article inline on this page; "View all →" leaves for the category page; counts match articlesByCategory.

## Components

- `bcn-kbc` (spoke) · `src/components/bcn/BcnKbCategories.astro`

## Markup

_5 repeated elements are collapsed in the markup below; the comments say where._

```html
<section class="bcn-kbc" aria-labelledby="bcn-kbc-title">
  <h2 id="bcn-kbc-title" class="bcn-kbc__title typography-heading-md">Browse by category</h2>
  <div class="bcn-kbc__grid">
    <article class="bcn-kbc__card" id="category-general">
      <h3 class="bcn-kbc__card-title typography-title">General</h3>
      <p class="bcn-kbc__card-desc">
        App-wide structure and the vocabulary shared across every zone.
      </p>
      <ul class="bcn-kbc__featured" role="list">
        <li>
          <a class="bcn-kbc__featured-link" href="#article-project-vs-component-scope">Scope</a>
        </li>
        <li><a class="bcn-kbc__featured-link" href="#article-tenant">Tenant</a></li>
        <li><a class="bcn-kbc__featured-link" href="#article-work-area">Work Area</a></li>
      </ul>
      <div class="bcn-kbc__foot">
        <span class="bcn-kbc__count">3 articles</span
        ><a class="bcn-kbc__viewall" href="/beacon-design/prototypes/help/general"
          >View all<span class="bcn-kbc__viewall-arrow" aria-hidden="true">→</span></a
        >
      </div>
    </article>
    <article class="bcn-kbc__card" id="category-getting-started">
      <h3 class="bcn-kbc__card-title typography-title">Getting Started</h3>
      <p class="bcn-kbc__card-desc">
        Orientation, navigation, and search — the first day in Beacon.
      </p>
      <ul class="bcn-kbc__featured" role="list">
        <li>
          <a class="bcn-kbc__featured-link" href="#article-five-minute-tour"
            >A five-minute tour of Beacon</a
          >
        </li>
        <li>
          <a class="bcn-kbc__featured-link" href="#article-global-search-tips"
            >Finding anything with search</a
          >
        </li>
      </ul>
      <div class="bcn-kbc__foot">
        <span class="bcn-kbc__count">2 articles</span
        ><a class="bcn-kbc__viewall" href="/beacon-design/prototypes/help/getting-started"
          >View all<span class="bcn-kbc__viewall-arrow" aria-hidden="true">→</span></a
        >
      </div>
    </article>
    <!-- …and 5 more like this (<article class="bcn-kbc__card">) -->
  </div>
</section>
```

## Styles

```css
.typography-heading-md {
  font-family: var(--typography-heading-md-font-family);
  font-size: var(--typography-heading-md-font-size);
  font-weight: var(--typography-heading-md-font-weight);
  line-height: var(--typography-heading-md-line-height);
  letter-spacing: var(--typography-heading-md-letter-spacing);
}
.typography-title {
  font-family: var(--typography-title-font-family);
  font-size: var(--typography-title-font-size);
  font-weight: var(--typography-title-font-weight);
  line-height: var(--typography-title-line-height);
  letter-spacing: var(--typography-title-letter-spacing);
}
.bcn-kbc {
  gap: var(--spacing-500);
  flex-direction: column;
  display: flex;
}
.bcn-kbc__title {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-kbc__grid {
  gap: var(--spacing-400);
  grid-template-columns: 1fr;
  display: grid;
}
@media (width>=40rem) {
  .bcn-kbc__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (width>=68rem) {
  .bcn-kbc__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.bcn-kbc__card {
  gap: var(--spacing-300);
  padding: var(--spacing-500);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  flex-direction: column;
  scroll-margin-top: 5rem;
  display: flex;
}
.bcn-kbc__card-title {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-kbc__card-desc {
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.5;
}
.bcn-kbc__featured {
  gap: var(--spacing-150);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-kbc__featured-link {
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
  line-height: 1.35;
  text-decoration: none;
  transition: color 0.12s;
}
.bcn-kbc__featured-link:hover {
  color: var(--color-content-link);
  text-underline-offset: 2px;
  text-decoration: underline;
}
.bcn-kbc__featured-link:focus-visible {
  outline: 2px solid var(--color-content-link);
  outline-offset: 2px;
  border-radius: var(--radius-100);
}
.bcn-kbc__foot {
  justify-content: space-between;
  align-items: baseline;
  gap: var(--spacing-300);
  padding-top: var(--spacing-300);
  border-top: 1px solid var(--color-border-default-subtle);
  margin-top: auto;
  display: flex;
}
.bcn-kbc__count {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  font-size: 0.8125rem;
}
.bcn-kbc__viewall {
  align-items: center;
  gap: var(--spacing-100);
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-link);
  white-space: nowrap;
  text-decoration: none;
  transition: color 0.15s;
  display: inline-flex;
}
.bcn-kbc__viewall:hover {
  color: var(--color-content-link-hover);
}
.bcn-kbc__viewall:focus-visible {
  outline: 2px solid var(--color-content-link);
  outline-offset: 2px;
  border-radius: var(--radius-100);
}
.bcn-kbc__viewall-arrow {
  transition: transform 0.15s;
}
.bcn-kbc__viewall:hover .bcn-kbc__viewall-arrow {
  transform: translate(2px);
}
.typography-heading-md {
  font-family: var(--typography-heading-md-font-family);
  font-size: var(--typography-heading-md-font-size);
  font-weight: var(--typography-heading-md-font-weight);
  line-height: var(--typography-heading-md-line-height);
  letter-spacing: var(--typography-heading-md-letter-spacing);
}
.typography-title {
  font-family: var(--typography-title-font-family);
  font-size: var(--typography-title-font-size);
  font-weight: var(--typography-title-font-weight);
  line-height: var(--typography-title-line-height);
  letter-spacing: var(--typography-title-letter-spacing);
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-link` | `#005862` | semantic |
| `--color-content-link-hover` | `#00474f` | semantic |
| `--radius-100` | `.25rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-heading-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-heading-md-font-size` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` | semantic |
| `--typography-heading-md-font-weight` | `550` | semantic |
| `--typography-heading-md-letter-spacing` | `-.01em` | semantic |
| `--typography-heading-md-line-height` | `1.3` | semantic |
| `--typography-title-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-title-font-size` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | semantic |
| `--typography-title-font-weight` | `500` | semantic |
| `--typography-title-letter-spacing` | `.01em` | semantic |
| `--typography-title-line-height` | `1.6` | semantic |
