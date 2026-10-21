# Filter row

Obligations (feed) · source prototype: https://esassoc.github.io/beacon-design/prototypes/obligation-feed/

![Filter row, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-feed/claude/filter-row.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-feed/claude/filter-row.phone.png

Search records, Source (which stream a record arrived from), and a 30 days / 90 days / All range. The filters narrow the RECORDS in the rail, never the obligations inside the open record.

## Key decisions

- No Component picker: the switcher beside the H1 owns component scope.
- If the open record is filtered out, the first surviving record opens; if none survive, the pane shows an empty state.

## Done when

- Search, Source and range AND together; empty date groups hide; clearing restores the rail.

## Components

- `bcn-swfr` (spoke) · `src/components/bcn/BcnSwFilterRow.astro`
- `esa-button-toggle` (hub) · `packages/ecology/src/components/esa-button-toggle.ts`
- `esa-select` (hub) · `packages/ecology/src/components/esa-select.ts`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`

## Markup

```html
<div class="bcn-swfr bcn-swfr--panel">
  <esa-text-field
    class="bcn-swfr__search"
    size="sm"
    name="feed-all"
    placeholder="Search records"
    aria-label="Search records"
  ></esa-text-field
  ><esa-select
    class="bcn-swfr__picker"
    size="sm"
    name="feed-all-source"
    options='[{"label":"All sources","value":""},{"label":"Nesting bird observation","value":"nesting-birds"},{"label":"Compliance co… [478 characters]'
    value=""
    placeholder="All sources"
    cue="Filter by source."
  ></esa-select
  ><esa-button-toggle
    slot="filters"
    size="sm"
    aria-label="How far back"
    data-fw-scope="true"
    data-value="30"
    data-options='[{"label":"30 days","value":"30"},{"label":"90 days","value":"90"},{"label":"All","value":"all"}]'
  ></esa-button-toggle>
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
