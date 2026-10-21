# Live article search

Help & Guidance · source prototype: https://esassoc.github.io/beacon-design/prototypes/help/

![Live article search, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-help/claude/live-article-search.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-help/claude/live-article-search.phone.png

The results dropdown anchored under the search field: matching articles as two-line rows (title + category on one line, a terse summary beneath), with the matched substring highlighted, keyboard navigation, and a no-results message that echoes the query. Choosing a row routes into the reading pane via the #article-<id> hash.

## Key decisions

- PROGRESSIVE, NOT CLIENT-RENDERED: every article is server-rendered as a hidden row up front. The controller only shows/hides rows and wraps matches in <mark> — the article corpus never enters the JS bundle.
- Keyboard: ArrowUp/ArrowDown move the active row, Enter opens it, Esc closes the dropdown. The active row is mirrored into aria-activedescendant against each row's id.
- The active/hover row gets a quiet neutral sunken wash (--color-background-elevation-sunken) and shifts the title to the link color — never a tint, never a colored left border.
- Match highlighting is a neutral translucent wash (color-mix of --color-content-default at 12%), which reads on both white and the sunken active row.
- The category label and the summary are genuine meta, floored at 13px; the row title sits at 15px — a deliberate dense-list size with no type role that fits.

## Gotchas

- The dropdown is absolutely positioned and overlays the content below it. It must own a z-index above the category grid, or rows render behind the cards.
- The <mark> wrappers are JS-injected, so their rule cannot carry Astro's scope hash — it is authored :global. In Angular this is component CSS, but keep the same containment discipline.
- The query is echoed into the no-results message — escape it. The <mark> wrappers are the only markup that may be injected around user input.
- The controller that drives this lives in kb-browser.ts and is mounted by <BcnKbBrowser>, NOT by the hero. The hero only advertises the [data-kb-search] hook and listens for the native `input` event, which is composed and retargets to the esa-text-field host — read e.target.value off the host, not off the shadow input.

## Done when

- Typing reveals only matching rows with the matched substring highlighted; Arrow keys move the active row and Enter opens it in the reading pane; a query with no match shows the quoted no-results line; clearing the field hides the dropdown entirely.

## Components

- `bcn-kb-hero` (spoke) · `src/components/bcn/BcnKbHero.astro`

## Markup

_27 repeated elements are collapsed in the markup below; the comments say where._

```html
<div
  class="bcn-kb-hero__results"
  id="bcn-kb-results"
  data-kb-results=""
  role="listbox"
  aria-label="Search results"
>
  <a
    class="bcn-kb-hero__result"
    id="kb-result-project-vs-component-scope"
    role="option"
    aria-selected="false"
    href="#article-project-vs-component-scope"
    data-result=""
    data-title="Scope"
    data-summary="The setting that determines whether work is tracked once, or once per location."
    hidden=""
    ><span class="bcn-kb-hero__result-top"
      ><span class="bcn-kb-hero__result-title" data-result-title="">Scope</span
      ><span class="bcn-kb-hero__result-cat">General</span></span
    ><span class="bcn-kb-hero__result-summary"
      >The setting that determines whether work is tracked once, or once per location.</span
    ></a
  ><a
    class="bcn-kb-hero__result"
    id="kb-result-tenant"
    role="option"
    aria-selected="false"
    href="#article-tenant"
    data-result=""
    data-title="Tenant"
    data-summary="The client organization a Beacon workspace, its data, and its configuration are scoped to."
    hidden=""
    ><span class="bcn-kb-hero__result-top"
      ><span class="bcn-kb-hero__result-title" data-result-title="">Tenant</span
      ><span class="bcn-kb-hero__result-cat">General</span></span
    ><span class="bcn-kb-hero__result-summary"
      >The client organization a Beacon workspace, its data, and its configuration are scoped
      to.</span
    ></a
  ><a
    class="bcn-kb-hero__result is-active"
    id="kb-result-what-is-a-dmr"
    role="option"
    aria-selected="true"
    href="#article-what-is-a-dmr"
    data-result=""
    data-title="Daily Monitoring Report"
    data-summary="The structured field record of one day on site, and a direct source of evidence."
    ><span class="bcn-kb-hero__result-top"
      ><span class="bcn-kb-hero__result-title" data-result-title="">Daily Monitoring Report</span
      ><span class="bcn-kb-hero__result-cat">Monitoring</span></span
    ><span class="bcn-kb-hero__result-summary"
      >The structured field record of one day on site, and a direct source of evidence.</span
    ></a
  ><!-- …and 27 more like this (<a class="bcn-kb-hero__result">) -->
  <p class="bcn-kb-hero__no-results" data-kb-no-results="" hidden="">
    No articles match “<span data-kb-query=""></span>”.
  </p>
</div>
```

## Styles

```css
.bcn-omni-rail__item.is-active {
  background: var(--color-background-brand);
  color: var(--color-content-default-knockout);
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-omni-row.is-active {
  background: var(--color-background-elevation-sunken);
}
.bcn-kb-hero__results {
  z-index: 30;
  max-block-size: min(60vh, 30rem);
  padding: var(--spacing-100);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  box-shadow: var(--elevation-3, 0 8px 28px #0000001f);
  text-align: start;
  position: absolute;
  inset-block-start: calc(100% + var(--spacing-150));
  inset-inline: 0;
  overflow-y: auto;
}
.bcn-kb-hero__results[hidden] {
  display: none;
}
.bcn-kb-hero__result {
  padding: var(--spacing-200) var(--spacing-300);
  border-radius: var(--radius-200);
  color: inherit;
  flex-direction: column;
  gap: 2px;
  text-decoration: none;
  display: flex;
}
.bcn-kb-hero__result[hidden] {
  display: none;
}
.bcn-kb-hero__result:hover,
.bcn-kb-hero__result.is-active {
  background: var(--color-background-elevation-sunken);
}
.bcn-kb-hero__result-top {
  justify-content: space-between;
  align-items: baseline;
  gap: var(--spacing-300);
  display: flex;
}
.bcn-kb-hero__result-title {
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
  line-height: 1.35;
}
.bcn-kb-hero__result.is-active .bcn-kb-hero__result-title,
.bcn-kb-hero__result:hover .bcn-kb-hero__result-title {
  color: var(--color-content-link);
}
.bcn-kb-hero__result-title mark {
  background: color-mix(in srgb, var(--color-content-default) 12%, transparent);
  color: inherit;
  border-radius: 2px;
  padding: 0 1px;
}
.bcn-kb-hero__result-cat {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  flex: none;
  font-size: 0.8125rem;
}
.bcn-kb-hero__result-summary {
  color: var(--color-content-default-secondary);
  font-size: 0.8125rem;
  line-height: 1.4;
}
.bcn-kb-hero__no-results {
  padding: var(--spacing-300);
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.9375rem;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-link` | `#005862` | semantic |
| `--elevation-3` | `0 4px 20px -4px #0000000f` | semantic |
| `--radius-200` | `.5rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
