# Filter row

Commitment list · source prototype: https://esassoc.github.io/beacon-design/prototypes/lists/quarterly-agency-briefing/

![Filter row, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-quarterly-agency-briefing/claude/filter-row.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-lists-quarterly-agency-briefing/claude/filter-row.phone.png

Search plus a Source picker ("All source documents"). No view tabs: commitment lists are flat, per Andy.

## Key decisions

- Source filters cards by data-source (ListMemberRow.source). The fixture has one source document (the ITP); the picker stays so the shape holds when a project has several.

## Done when

- Picking the ITP keeps every card; clearing restores the same set.

## Components

- `bcn-swfr` (spoke) · `src/components/bcn/BcnSwFilterRow.astro`
- `esa-select` (hub) · `packages/ecology/src/components/esa-select.ts`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`

## Markup

```html
<div class="bcn-swfr bcn-swfr--panel">
  <esa-text-field
    class="bcn-swfr__search"
    size="sm"
    name="list-search"
    placeholder="Search commitments"
    aria-label="Search commitments"
  ></esa-text-field
  ><esa-select
    class="bcn-swfr__picker"
    size="sm"
    name="list-search-source"
    options='[{"label":"All source documents","value":""},{"label":"Incidental Take Permit (ITP) 2081","value":"Incidental Take Permit (ITP) 2081"}]'
    value=""
    placeholder="All source documents"
    cue="Filter by source."
  ></esa-select>
  <div class="bcn-swfr__verbs"></div>
</div>
```

## Styles

```css
.bcn-swfr {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-500);
  border-top: 1px solid var(--color-border-default-subtle);
  color: var(--color-content-default);
  flex-wrap: wrap;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-swfr--panel {
  padding: var(--spacing-250) var(--spacing-400);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-sunken);
}
.bcn-swfr--panel .bcn-swfr__search,
.bcn-swfr--panel .bcn-swfr__picker {
  --color-background-field: var(--color-background-elevation-raised);
}
.bcn-swfr__search {
  flex: 180px;
  max-width: 360px;
}
.bcn-swfr__picker {
  flex: 0 180px;
  min-width: 140px;
}
.bcn-swfr__verbs {
  align-items: center;
  gap: var(--spacing-200);
  margin-left: auto;
  display: inline-flex;
}
.bcn-swfr__verbs:empty {
  display: none;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--radius-200` | `.5rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
