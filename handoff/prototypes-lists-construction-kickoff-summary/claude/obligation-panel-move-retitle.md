# Obligation panel (move / retitle)

Obligation list · source prototype: https://esassoc.github.io/beacon-design/prototypes/lists/construction-kickoff-summary/

![Obligation panel (move / retitle), desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-construction-kickoff-summary/claude/obligation-panel-move-retitle.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-lists-construction-kickoff-summary/claude/obligation-panel-move-retitle.phone.png

The side panel for one obligation ON THIS LIST. It offers exactly three things: a List title, a new home (Category + Subcategory), and a List description. It never edits the registry obligation.

## Key decisions

- Andy, 2026-09-23: "we don't want them to edit them, but that they can simply move them to other cat/sub-cats AND/OR add a list title or a list description."
- List title is an esa-text-field; leaving it empty falls back to the registry title.
- Category / Subcategory are esa-selects over the WHOLE registry taxonomy (so an obligation can move to a branch the list does not hold yet). Labels use this list's renames. Changing Category refills Subcategory.
- When the chosen home differs from the registry home, a hint reads "Registry: <Cat> › <Sub>".
- Save emits list:obligation-saved {memberId, listTitle, listDescription, catId/Name, subId/Name}. The tree creates any missing branch, re-files the card in title order, opens the path to it and flashes it.

## Gotchas

- Reopening a moved obligation must show its CURRENT list home in the pickers, not the registry home.
- The dot is recomputed on save; clearing both overrides removes it.

## Done when

- Moving "Fire Suppression Supplies On Site" into a subcategory the list does not hold yet creates that branch, re-files the card there, drops the emptied source branch, and on reopen shows "Registry: Hazards › Fire prevention".

## Components

- `bcn-lob` (spoke) · `src/components/bcn/BcnListIndexItemPanel.astro`
- `bcn-swo-edit` (spoke) · `src/components/bcn/BcnListActionPanel.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-select` (hub) · `packages/ecology/src/components/esa-select.ts`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`
- `esa-textarea` (hub) · `packages/ecology/src/components/esa-textarea.ts`

## Markup

```html
<form
  class="bcn-swo-edit bcn-lob"
  data-list-obl-panel=""
  data-lob-data='{"records":{"obl_01M2G6YKM0HYHZPHBXBXTP9J34":{"title":"Fire Suppression Supplies On Site","catId":"hazards","subId":"fir… [40831 characters]'
  data-class="adhere"
>
  <!-- The dialog heading is the REGISTRY title. The list's own, when it has one,
      is the field below it. --><esa-text-field
    label="List title"
    size="sm"
    name="lob-title"
    help-text="Leave this empty and the list uses the registry title."
  ></esa-text-field>
  <div class="bcn-lob__field">
    <span class="bcn-swo-edit__label">Class</span
    ><span><span class="bcn-lob__class" data-lob="class">Adhere</span></span>
  </div>
  <div class="bcn-lob__field">
    <div class="bcn-swo-edit__pair">
      <esa-select label="Category" size="sm" name="lob-cat"></esa-select
      ><esa-select label="Subcategory" size="sm" name="lob-sub"></esa-select>
    </div>
    <span class="bcn-lob__registry" data-lob="home" hidden=""
      >Registry: Hazards › Fire prevention</span
    >
  </div>
  <div class="bcn-lob__field">
    <span class="bcn-swo-edit__label">Registry description</span>
    <p class="bcn-lob__prose" data-lob="description" data-superseded="true">
      Permittee shall keep basic fire suppression supplies on site at all times during construction
      of the Bethany Complex or while undertaking maintenance activities within the Bethany Complex.
    </p>
  </div>
  <esa-textarea
    label="List description"
    size="sm"
    rows="4"
    name="lob-description"
    help-text="Leave this empty and the list uses the registry description."
  ></esa-textarea>
  <div class="bcn-lob__field">
    <span class="bcn-swo-edit__label">Trigger</span>
    <p class="bcn-lob__prose" data-lob="trigger">
      During construction of the Bethany Complex or while undertaking maintenance activities within
      the Bethany Complex
    </p>
  </div>
  <div class="bcn-swo-edit__section">
    <div class="bcn-swo-edit__label-row">
      <span class="bcn-swo-edit__label"
        >Requirements <span class="bcn-swo-edit__label-n" data-lob-req-n="">1</span></span
      >
    </div>
    <div class="bcn-swo-edit__reqs" data-lob-reqs="">
      <details class="bcn-swo-edit__req">
        <summary class="bcn-swo-edit__req-row">
          <span class="bcn-swo-edit__chev" aria-hidden="true"
            ><span class="esa-icon esa-icon--xs" aria-hidden="true"
              ><svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-swo-edit__code">COA 9.18</span
          ><span class="bcn-swo-edit__req-name"
            >Keep Basic Fire Suppression Supplies On Site at Bethany Complex</span
          ><span class="bcn-swo-edit__also"></span>
        </summary>
        <blockquote class="bcn-swo-edit__text">
          Permittee shall keep basic fire suppression supplies on site at all times during
          construction of the Bethany Complex or while undertaking maintenance activities within the
          Bethany Complex.
        </blockquote>
      </details>
    </div>
  </div>
</form>
```

## Styles

```css
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd__label .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd-row .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-disclosure .esa-icon {
  transition: transform 0.15s;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
@media (prefers-reduced-motion: reduce) {
  .bcn-disclosure .esa-icon {
    transition: none;
  }
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.user-panel__item .esa-icon {
  color: var(--bcn-gray-500);
}
.user-panel__item--danger .esa-icon {
  color: var(--color-background-utility-danger);
}
.project-switcher__trigger > .esa-icon:first-child {
  color: var(--bcn-gray-500);
  flex-shrink: 0;
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-background-brand);
}
.nav-section__header > .esa-icon:first-child {
  color: var(--bcn-gray-950);
  flex-shrink: 0;
  transition: color 0.15s;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  flex-shrink: 0;
  transition:
    transform 0.15s,
    opacity 0.2s ease-in-out;
}
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.side-nav.collapsed .nav-section__title,
.side-nav.collapsed .nav-section__header > .esa-icon:last-child {
  display: none;
}
.bcn-swoc__class,
.bcn-loc__class,
.bcn-lob__class,
.bcn-ci-chip {
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
  background: color-mix(in srgb, var(--_hue) 14%, white);
  color: color-mix(in srgb, var(--_hue) 78%, black);
  flex-shrink: 0;
  align-items: center;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1.5;
  display: inline-flex;
}
.bcn-swoc[data-class="adhere"],
.bcn-loc[data-class="adhere"],
.bcn-lob[data-class="adhere"],
.bcn-ci-chip[data-class="adhere"] {
  --_hue: var(--color-obligation);
}
.bcn-swoc[data-class="monitor"],
.bcn-loc[data-class="monitor"],
.bcn-lob[data-class="monitor"],
.bcn-ci-chip[data-class="monitor"] {
  --_hue: #ff7c43;
}
.bcn-swoc[data-class="notify"],
.bcn-loc[data-class="notify"],
.bcn-lob[data-class="notify"],
.bcn-ci-chip[data-class="notify"] {
  --_hue: #ffa600;
}
.bcn-swoc[data-class="roster"],
.bcn-loc[data-class="roster"],
.bcn-lob[data-class="roster"],
.bcn-ci-chip[data-class="roster"],
.bcn-loc[data-class="action"],
.bcn-lac[data-class="action"],
.bcn-lob[data-class="action"],
.bcn-ci-chip[data-class="action"] {
  --_hue: var(--color-action);
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.bcn-swo-edit {
  gap: var(--spacing-400);
  flex-direction: column;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-swo-edit__pair {
  gap: var(--spacing-300);
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: start;
  display: grid;
}
.bcn-swo-edit__section {
  gap: var(--spacing-150);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-swo-edit__label-row {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-swo-edit__label {
  color: var(--form-label-color, #646464);
  font-size: 0.75rem;
  font-weight: 500;
}
.bcn-swo-edit__label-n {
  color: var(--color-content-default-tertiary);
  margin-left: var(--spacing-100);
  font-weight: 400;
}
.bcn-swo-edit__reqs {
  border-top: 1px solid var(--color-border-default-subtle);
  flex-direction: column;
  display: flex;
}
.bcn-swo-edit__reqs:empty {
  border-top: none;
}
.bcn-swo-edit__req {
  border-bottom: 1px solid var(--color-border-default-subtle);
}
.bcn-swo-edit__req.is-new {
  background: color-mix(in srgb, var(--color-obligation) 10%, white);
}
.bcn-swo-edit__req-row {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 30px;
  padding: var(--spacing-100) var(--spacing-100);
  cursor: pointer;
  font-size: 0.8125rem;
  list-style: none;
  display: flex;
}
.bcn-swo-edit__req-row::-webkit-details-marker {
  display: none;
}
.bcn-swo-edit__req-row:hover {
  background: var(--color-background-default);
}
.bcn-swo-edit__chev {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.12s;
  display: inline-flex;
}
.bcn-swo-edit__req[open] > .bcn-swo-edit__req-row .bcn-swo-edit__chev {
  transform: rotate(90deg);
}
.bcn-swo-edit__code {
  font-family: var(--typography-font-family-mono);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  flex-shrink: 0;
  padding: 1px 6px;
  font-size: 0.6875rem;
  font-weight: 600;
}
.bcn-swo-edit__req-name {
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.bcn-swo-edit__also {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  font-size: 0.6875rem;
}
.bcn-swo-edit__also:empty {
  display: none;
}
.bcn-swo-edit__text {
  margin: 0 0 var(--spacing-200) calc(var(--spacing-100) + 20px);
  padding: var(--spacing-200) var(--spacing-300);
  border-left: 3px solid var(--color-commitment);
  background: var(--color-background-default);
  color: var(--color-content-default);
  font-size: 0.8125rem;
  line-height: 1.5;
}
.bcn-swo-edit__req-row:hover .bcn-swo-edit__req-verbs,
.bcn-swo-edit__req-row:focus-within .bcn-swo-edit__req-verbs {
  opacity: 1;
}
.bcn-lob__field {
  gap: var(--spacing-050);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-lob__prose {
  color: var(--color-content-default);
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.5;
}
.bcn-lob__prose[data-superseded="true"] {
  color: var(--color-content-default-tertiary);
}
.bcn-lob__registry {
  color: var(--color-content-default-tertiary);
  font-size: 0.8125rem;
}
.bcn-lob__registry[hidden] {
  display: none;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--color-action` | `#d45087` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-obligation` | `#f95d6a` | component |
| `--form-label-color` | `#525252` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
