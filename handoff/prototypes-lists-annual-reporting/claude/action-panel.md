# Action panel

Action list · source prototype: https://esassoc.github.io/beacon-design/prototypes/lists/annual-reporting/

![Action panel, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-annual-reporting/claude/action-panel.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-lists-annual-reporting/claude/action-panel.phone.png

Read-only side panel: type, action text, frequency, deliverable, species, timing, expected evidence, and the requirements it satisfies, with a link to the full action in the data catalog.

## Key decisions

- A list never edits the action; the footer offers Remove from list and Open action.

## Done when

- Opening from a mirror view shows the same action as the master card.

## Components

- `bcn-cbadge` (spoke) · `src/components/bcn/BcnCommitmentBadge.astro`
- `bcn-lac` (spoke) · `src/components/bcn/BcnListActionPanel.astro`
- `bcn-lob` (spoke) · `src/components/bcn/BcnListIndexItemPanel.astro`
- `bcn-swo-edit` (spoke) · `src/components/bcn/BcnListActionPanel.astro`

## Markup

```html
<div
  class="bcn-swo-edit bcn-lac"
  data-class="action"
  data-list-action-panel=""
  data-lac-data='{"act_01M2G6Y32EX2B7J0Q0QX2WW1TN":{"name":"Complete Sacramento River Hydrograph Limb Impact Evaluation","text":"Permitte… [252878 characters]'
  data-lac-href="/beacon-design/prototypes/data-catalog-action"
>
  <div><span class="bcn-lob__class bcn-lac__class" data-lac="type">Reporting</span></div>
  <div class="bcn-swo-edit__section">
    <span class="bcn-swo-edit__label">Action text</span>
    <blockquote class="bcn-swo-edit__text bcn-lac__text" data-lac="text">
      When impacts tracked for the Annual Status Report are likely to exceed the permanent or
      temporary impacts CDFW approved for any Covered Species, Permittee notifies CDFW and submits a
      revised Project Phase schedule within 10 business days of that notice, keeping temporary
      impacts within the COA 11.66 and 12.3 criteria.
    </blockquote>
  </div>
  <div class="bcn-lac__grid">
    <div data-lac-kv="frequency">
      <span class="bcn-swo-edit__label">Frequency</span
      ><span class="bcn-lac__value">As needed</span>
    </div>
    <div data-lac-kv="deliverable">
      <span class="bcn-swo-edit__label">Deliverable</span
      ><span class="bcn-lac__value">Notification</span>
    </div>
    <div data-lac-kv="species" class="bcn-lac__wide">
      <span class="bcn-swo-edit__label">Species</span><span class="bcn-lac__value">–</span>
    </div>
    <div data-lac-kv="timing" class="bcn-lac__wide">
      <span class="bcn-swo-edit__label">Timing</span
      ><span class="bcn-lac__value">Within 10 business days of the notification</span>
    </div>
    <div data-lac-kv="evidence" class="bcn-lac__wide">
      <span class="bcn-swo-edit__label">Expected evidence</span
      ><span class="bcn-lac__value"
        >Dated exceedance notice to CDFW with the tracked acreage against the authorized amounts,
        plus the revised Phase schedule transmitted within 10 business days.</span
      >
    </div>
  </div>
  <div class="bcn-swo-edit__section">
    <span class="bcn-swo-edit__label">Requirements (<span data-lac-n="">2</span>)</span>
    <ul class="bcn-lac__reqs" data-lac-reqs="">
      <li class="bcn-lac__req" data-lac-req="" data-req-id="req_01M2ESMEV1NQSW0M2DXK8JVMJC">
        <span class="bcn-cbadge bcn-cbadge--sm">COA 10.9</span
        ><button type="button" class="bcn-lac__req-name">
          Notify CDFW of Likely Impact Exceedance
        </button>
      </li>
      <li class="bcn-lac__req" data-lac-req="" data-req-id="req_01M2ESMEV1NQSW0M2DXK8JVMJD">
        <span class="bcn-cbadge bcn-cbadge--sm">COA 10.9</span
        ><button type="button" class="bcn-lac__req-name">
          Submit Revised Phase Schedule After Exceedance Notice
        </button>
      </li>
    </ul>
  </div>
  <template data-lac-tpl=""
    ><li class="bcn-lac__req" data-lac-req="" data-astro-cid-iaigrvl7="">
      <span class="bcn-cbadge bcn-cbadge--sm" data-astro-cid-cqxc3yz3="">COA</span
      ><button type="button" class="bcn-lac__req-name" data-astro-cid-iaigrvl7=""></button></li
  ></template>
</div>
```

## Styles

```css
.bcn-loc[data-class="commitment"] .bcn-loc__req .bcn-cbadge {
  display: none;
}
.bcn-lac__class {
  align-self: flex-start;
}
.bcn-lac__text {
  white-space: pre-line;
  margin: 0;
}
.bcn-lac__grid {
  gap: var(--spacing-300);
  grid-template-columns: repeat(2, minmax(0, 1fr));
  display: grid;
}
.bcn-lac__grid > div {
  gap: var(--spacing-050);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-lac__wide {
  grid-column: 1/-1;
}
.bcn-lac__value {
  color: var(--color-content-default);
  font-size: 0.8125rem;
  line-height: 1.5;
}
@media (width<=480px) {
  .bcn-lac__grid {
    grid-template-columns: 1fr;
  }
}
.bcn-lac__reqs {
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-lac__req {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 30px;
  padding: var(--spacing-050) var(--spacing-200);
  border-top: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-100);
  color: var(--color-content-default-secondary);
  cursor: pointer;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-lac__req:hover {
  background: var(--color-background-default);
  color: var(--color-content-default);
}
.bcn-lac__req-name {
  min-width: 0;
  font: inherit;
  color: inherit;
  text-align: start;
  cursor: pointer;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: 0 0;
  border: 0;
  flex: 1;
  padding: 0;
  overflow: hidden;
}
.bcn-lac__req-name:focus-visible {
  outline: 2px solid var(--color-action);
  outline-offset: 1px;
  border-radius: 2px;
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
| `--color-action` | `#d45087` | component |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
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
