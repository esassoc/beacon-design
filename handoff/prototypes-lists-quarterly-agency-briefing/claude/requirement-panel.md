# Requirement panel

Commitment list · source prototype: https://esassoc.github.io/beacon-design/prototypes/lists/quarterly-agency-briefing/

![Requirement panel, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-quarterly-agency-briefing/claude/requirement-panel.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-lists-quarterly-agency-briefing/claude/requirement-panel.phone.png

Read-only side panel for one requirement: source commitment, type, scope, frequency, responsible party, phases, timing, deliverable, and species/activities when present.

## Key decisions

- Optional fields (species, construction activities) hide when empty rather than showing a dash.

## Components

- `bcn-cbadge` (spoke) · `src/components/bcn/BcnCommitmentBadge.astro`
- `bcn-lrq` (spoke) · `src/components/bcn/BcnListRequirementPanel.astro`
- `bcn-swo-edit` (spoke) · `src/components/bcn/BcnListActionPanel.astro`

## Markup

_5 repeated elements are collapsed in the markup below; the comments say where._

```html
<div
  class="bcn-swo-edit bcn-lrq"
  data-list-req-panel=""
  data-lrq-data='{"records":{"req_01M2ESMC0B9X341GWB1FC7JSGT":{"name":"Consult with CDFW on Federal Biological Opinion Terms","code":"COA… [711610 characters]'
  data-lrq-href="/beacon-design/prototypes/data-catalog-requirement"
>
  <div class="bcn-lrq__source">
    <span data-lrq-code=""><span class="bcn-cbadge bcn-cbadge--sm">COA 7.5</span></span
    ><span class="bcn-lrq__commitment" data-lrq="commitment"
      >Phase 2 Project Operations Report</span
    >
  </div>
  <div class="bcn-swo-edit__section">
    <span class="bcn-swo-edit__label">Requirement text</span>
    <blockquote class="bcn-swo-edit__text bcn-lrq__text" data-lrq="text">
      No more than six months after the initiation of Phase 2 Operations, Permittee shall provide
      CDFW with a Phase 2 Project Operations Report which shall include, at a minimum: (1) a summary
      of all Monthly Compliance Reports and all ASRs; and (2) a copy of the table in the MMRP with
      notes showing when each of the mitigation measures was implemented; (3) all available
      information about Project-related incidental take of the Covered Species; (4) information
      about other Project impacts on the Covered…
    </blockquote>
  </div>
  <div class="bcn-lrq__grid">
    <div data-lrq-kv="type">
      <span class="bcn-swo-edit__label">Type</span><span class="bcn-lrq__value">Reporting</span>
    </div>
    <div data-lrq-kv="scope">
      <span class="bcn-swo-edit__label">Scope</span><span class="bcn-lrq__value">Project</span>
    </div>
    <!-- …and 2 more like this (<div>) -->
    <div data-lrq-kv="phases" class="bcn-lrq__wide">
      <span class="bcn-swo-edit__label">Phases</span><span class="bcn-lrq__value">Operations</span>
    </div>
    <div data-lrq-kv="timing" class="bcn-lrq__wide">
      <span class="bcn-swo-edit__label">Timing</span
      ><span class="bcn-lrq__value"
        >No more than six months after the initiation of Phase 2 Operations</span
      >
    </div>
    <!-- …and 3 more like this (<div class="bcn-lrq__wide">) -->
  </div>
</div>
```

## Styles

```css
.bcn-lrq__source {
  align-items: center;
  gap: var(--spacing-200);
  min-width: 0;
  display: flex;
}
.bcn-lrq__commitment {
  color: var(--color-content-default-secondary);
  min-width: 0;
  font-size: 0.8125rem;
}
.bcn-lrq__text {
  white-space: pre-line;
  margin: 0;
}
.bcn-lrq__grid > div {
  gap: var(--spacing-050);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-lrq__value {
  color: var(--color-content-default);
  font-size: 0.8125rem;
  line-height: 1.5;
}
.bcn-lrq__grid {
  gap: var(--spacing-300);
  grid-template-columns: repeat(2, minmax(0, 1fr));
  display: grid;
}
.bcn-lrq__wide {
  grid-column: 1/-1;
}
.bcn-lrq__grid > [hidden] {
  display: none;
}
@media (width<=480px) {
  .bcn-lrq__grid {
    grid-template-columns: 1fr;
  }
}
.bcn-loc[data-class="commitment"] .bcn-loc__req .bcn-cbadge {
  display: none;
}
.bcn-cbadge {
  font-family: var(--typography-font-family-mono);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  white-space: nowrap;
  flex-shrink: 0;
  display: inline-block;
}
.bcn-cbadge--sm {
  padding: 1px var(--spacing-150);
  font-size: 0.75rem;
}
.bcn-swo-edit {
  gap: var(--spacing-400);
  flex-direction: column;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-swo-edit__section {
  gap: var(--spacing-150);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-swo-edit__label {
  color: var(--form-label-color, #646464);
  font-size: 0.75rem;
  font-weight: 500;
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
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--color-background-default` | `#fafafa` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--form-label-color` | `#525252` | component |
| `--radius-100` | `.25rem` | primitive |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
