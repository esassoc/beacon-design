# View tabs

Obligation list · source prototype: https://esassoc.github.io/beacon-design/prototypes/lists/construction-kickoff-summary/

![View tabs, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-construction-kickoff-summary/claude/view-tabs.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-lists-construction-kickoff-summary/claude/view-tabs.phone.png

Three ways to read the same list: By Compliance Index (the category tree), By commitment, A–Z. The selected view rides ?view= in the URL.

## Key decisions

- There is ONE master tree, filed by category. The other views are clones of it, rebuilt after every filter pass.
- Every action taken on a clone (edit, remove, evidence) resolves to the master card.
- Bare esa-tab-layout used purely as a switcher; the panels are the tree bodies.

## Gotchas

- Never build a second editable tree per view — counts, moves and filters would drift. One source, derived views.
- Tree queries must exclude the mirrors ([data-list-mirror]) or every card counts twice.

## Done when

- Switching tabs keeps the active filters; a change made in one view shows in the others.

## Components

- `bcn-lvt` (spoke) · `src/components/bcn/BcnListViewTabs.astro`
- `esa-tab-layout` (hub) · `packages/ecology/src/components/esa-tab-layout.ts`

## Markup

```html
<esa-tab-layout
  class="bcn-lvt"
  data-list-views='[{"id":"category","label":"By Compliance Index"},{"id":"commitment","label":"By commitment"},{"id":"az","label":"A–Z"}]'
  appearance="underline"
  size="sm"
  variant="underline"
></esa-tab-layout>
```

## Styles

```css
.bcn-lvt {
  display: block;
}
```
