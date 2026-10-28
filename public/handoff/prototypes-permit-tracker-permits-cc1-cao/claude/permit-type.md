# Permit type

Permit · source prototype: https://esassoc.github.io/beacon-design/prototypes/permit-tracker/permits/cc1-cao/

![Permit type, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker-permits-cc1-cao/claude/permit-type.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker-permits-cc1-cao/claude/permit-type.phone.png

What the permit's type says in general (level, how long it stays valid, typical days across agencies, governing law) and at this permit's agency (typical days there; for Critical Areas Review the agency's ordinance with its last amendment, the rules' review status, and the gist of the rules), each linking to its Permit types page.

## Key decisions

- Rules status badges: AI suggested, Edited (not validated), Validated; plus Example data for template content and Ordinance changed when the code was amended after the rules were last reviewed.
- It reads the same stores as the Permit types pages, so edits there show here.

## Done when

- "Full rules and buffer tables for <agency>" opens that agency's Critical Areas Review page.

## Components

- `bcn-gl` (spoke) · `src\components\bcn\BcnGoverningLaw.astro`
- `bcn-pti` (spoke) · `src\components\bcn\BcnPermitTypeInfo.astro`
- `esa-badge` (hub) · `packages\ecology\src\components\esa-badge.astro` → use `ui-badge` in the Beacon app
- `esa-card` (hub) · `packages\ecology\src\components\esa-card.astro`

## Markup

_5 repeated elements are collapsed in the markup below; the comments say where._

```html
<div
  class="bcn-pti stack"
  data-gap="lg"
  data-pti=""
  data-type-id="critical-areas"
  data-jurisdiction-id="bellevue"
  data-permit-id="cc1-cao"
>
  <div class="esa-card">
    <div class="esa-card__header">
      <div class="esa-card__header-content">
        <div class="esa-card__titles">
          <h3 class="esa-card__title typography-title-sm-strong">Critical Areas Review</h3>
        </div>
      </div>
    </div>
    <div class="esa-card__body typography-body-md">
      <div class="stack" data-gap="md" data-pti-general="">
        <dl class="bcn-pti__facts">
          <div class="bcn-pti__fact">
            <dt class="typography-label-md-strong">Level</dt>
            <dd class="typography-body-md">Local</dd>
          </div>
          <div class="bcn-pti__fact">
            <dt class="typography-label-md-strong">Valid for</dt>
            <dd class="typography-body-md">3 years</dd>
          </div>
          <div class="bcn-pti__fact">
            <dt class="typography-label-md-strong">Typical days, all agencies</dt>
            <dd class="typography-body-md">135</dd>
          </div>
        </dl>
        <div class="stack" data-gap="xs">
          <h4 class="bcn-pti__subhead typography-label-md-strong">Governing law</h4>
          <ul class="bcn-gl" role="list">
            <li class="bcn-gl__item stack" data-gap="3xs">
              <a
                class="bcn-gl__cite typography-body-md"
                href="https://app.leg.wa.gov/rcw/default.aspx?cite=36.70A.060"
                target="_blank"
                rel="noopener"
                >RCW 36.70A.060, .172<span class="visually-hidden"> (opens in a new tab)</span></a
              ><span class="bcn-gl__title typography-body-sm"
                >Growth Management Act: protect critical areas using best available science</span
              >
            </li>
            <li class="bcn-gl__item stack" data-gap="3xs">
              <a
                class="bcn-gl__cite typography-body-md"
                href="https://app.leg.wa.gov/wac/default.aspx?cite=365-190"
                target="_blank"
                rel="noopener"
                >Ch. 365-190 WAC<span class="visually-hidden"> (opens in a new tab)</span></a
              ><span class="bcn-gl__title typography-body-sm"
                >Minimum guidelines to classify critical areas</span
              >
            </li>
          </ul>
        </div>
        <a
          class="bcn-pti__link typography-body-md"
          href="/beacon-design/prototypes/permit-tracker/permit-types/critical-areas"
          >All about Critical Areas Review</a
        >
      </div>
    </div>
  </div>
  <div class="esa-card">
    <div class="esa-card__header">
      <div class="esa-card__header-content">
        <div class="esa-card__titles">
          <h3 class="esa-card__title typography-title-sm-strong">
            Critical Areas Land Use Permit at City of Bellevue
          </h3>
        </div>
      </div>
    </div>
    <div class="esa-card__body typography-body-md">
      <div class="stack" data-gap="md" data-pti-agency="">
        <dl class="bcn-pti__facts">
          <div class="bcn-pti__fact">
            <dt class="typography-label-md-strong">Typical days here</dt>
            <dd class="typography-body-md">129 (122–168, 3 past)</dd>
          </div>
          <div class="bcn-pti__fact">
            <dt class="typography-label-md-strong">Ordinance</dt>
            <dd class="typography-body-md">
              <a
                class="bcn-pti__link"
                href="https://bellevue.municipal.codes/LUC/20.25H"
                target="_blank"
                rel="noopener"
                >LUC Part 20.25H Critical Areas Overlay District<span class="visually-hidden">
                  (opens in a new tab)</span
                ></a
              >
            </dd>
          </div>
          <div class="bcn-pti__fact">
            <dt class="typography-label-md-strong">Last amended</dt>
            <dd class="typography-body-md">Jul 28, 2026</dd>
          </div>
        </dl>
        <div class="cluster" data-gap="xs" data-pti-badges="">
          <span class="esa-badge esa-badge--success esa-badge--md typography-microcopy-sm-strong"
            ><span class="esa-badge__text">Validated</span></span
          ><span class="esa-badge esa-badge--secondary esa-badge--md typography-microcopy-sm-strong"
            ><span class="esa-badge__text">Example data</span></span
          ><span class="esa-badge esa-badge--danger esa-badge--md typography-microcopy-sm-strong"
            ><span class="esa-badge__text">Ordinance changed</span></span
          >
        </div>
        <dl class="bcn-pti__facts">
          <div class="bcn-pti__fact">
            <dt class="typography-label-md-strong">Process</dt>
            <dd class="typography-body-md">
              City of Bellevue reviews critical areas with the underlying land use or development
              permit. Work that needs no other permit is reviewed on its own as an administrative
              decision.
            </dd>
          </div>
          <div class="bcn-pti__fact">
            <dt class="typography-label-md-strong">When review applies</dt>
            <dd class="typography-body-md">
              Applies to development within or near a wetland, stream, geologically hazardous area
              or their buffers. A critical areas report by a qualified professional is required when
              one is present or likely.
            </dd>
          </div>
          <!-- …and 2 more like this (<div class="bcn-pti__fact">) -->
        </dl>
        <a
          class="bcn-pti__link typography-body-md"
          href="/beacon-design/prototypes/permit-tracker/permit-types/critical-areas/bellevue"
          >Full rules and buffer tables for City of Bellevue</a
        >
      </div>
    </div>
  </div>
  <template data-pti-badge="suggested"
    ><span
      class="esa-badge esa-badge--info esa-badge--md typography-microcopy-sm-strong"
      data-astro-cid-v3fnotwi=""
      ><span class="esa-badge__text" data-astro-cid-v3fnotwi="">AI suggested</span></span
    ></template
  ><template data-pti-badge="edited"
    ><span
      class="esa-badge esa-badge--warning esa-badge--md typography-microcopy-sm-strong"
      data-astro-cid-v3fnotwi=""
      ><span class="esa-badge__text" data-astro-cid-v3fnotwi="">Edited, not validated</span></span
    ></template
  ><!-- …and 3 more like this (<template>) -->
</div>
```

## Styles

```css
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-microcopy-sm-strong {
  font-family: var(--typography-microcopy-sm-strong-font-family);
  font-size: var(--typography-microcopy-sm-strong-font-size);
  font-weight: var(--typography-microcopy-sm-strong-font-weight);
  line-height: var(--typography-microcopy-sm-strong-line-height);
  letter-spacing: var(--typography-microcopy-sm-strong-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  white-space: nowrap;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
}
.visually-hidden {
  white-space: nowrap;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  border: 0;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  position: absolute;
  overflow: hidden;
}
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-background-elevation-raised, #fcfcfc));
  --_badge-text: var(--badge-text-color, var(--color-content-default-secondary, #646464));
  --_badge-border: var(--badge-border-color, var(--color-border-default, #cecece));
  --_badge-padding-y: var(--spacing-150, 0.375rem);
  --_badge-padding-x: var(--spacing-200, 0.5rem);
  min-width: calc(1lh + 2 * var(--_badge-padding-y));
  padding-block: var(--_badge-padding-y);
  padding-inline: var(--_badge-padding-x);
  border-radius: var(--radius-chip, var(--radius-sm, 0.25rem));
  background: var(--_badge-bg);
  color: var(--_badge-text);
  white-space: nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand-muted, #e9f6e9);
  --_badge-text: var(--color-content-on-brand-muted, #203c25);
}
.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-muted, #e6f6eb);
  --_badge-text: var(--color-content-utility-success, #218358);
  --_badge-border: var(--color-border-utility-success, #adddc0);
}
.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-muted, #feebec);
  --_badge-text: var(--color-content-utility-danger, #ce2c31);
  --_badge-border: var(--color-border-utility-danger, #fdbdbe);
}
.esa-badge--neutral:not(.esa-badge--dot),
.esa-badge--success:not(.esa-badge--dot),
.esa-badge--warning:not(.esa-badge--dot),
.esa-badge--danger:not(.esa-badge--dot),
.esa-badge--info:not(.esa-badge--dot) {
  border: 1px solid var(--_badge-border, transparent);
}
.esa-badge--dot.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand, #46a758);
}
.esa-badge--dot.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-hover, #2b9a66);
}
.esa-badge--dot.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-hover, #dc3e42);
}
@media (forced-colors: active) {
  .esa-badge {
    border: 1px solid canvastext;
  }
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-microcopy-sm-strong {
  font-family: var(--typography-microcopy-sm-strong-font-family);
  font-size: var(--typography-microcopy-sm-strong-font-size);
  font-weight: var(--typography-microcopy-sm-strong-font-weight);
  line-height: var(--typography-microcopy-sm-strong-line-height);
  letter-spacing: var(--typography-microcopy-sm-strong-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.bcn-pti .bcn-pti__facts {
  margin: 0;
}
.bcn-pti .bcn-pti__fact {
  column-gap: var(--spacing-400);
  padding-block: var(--spacing-200);
  border-block-start: 1px solid var(--color-border-default-subtle, var(--color-border-default));
  grid-template-columns: minmax(9rem, 12rem) minmax(0, 1fr);
  display: grid;
}
.bcn-pti .bcn-pti__fact:first-child {
  border-block-start: 0;
  padding-block-start: 0;
}
@media (width<=40rem) {
  .bcn-pti .bcn-pti__fact {
    grid-template-columns: 1fr;
  }
}
.bcn-pti .bcn-pti__fact dd,
.bcn-pti .bcn-pti__subhead,
.bcn-pti .bcn-pti__none {
  margin: 0;
}
.bcn-pti .bcn-pti__link {
  color: var(--color-content-link);
  inline-size: fit-content;
  text-decoration: underline;
}
.bcn-pti .bcn-pti__link:hover {
  color: var(--color-content-link-hover, var(--color-content-link));
}
.bcn-pti .bcn-gl {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-pti .bcn-gl__item {
  padding-block: var(--spacing-150);
}
.bcn-pti .bcn-gl__cite {
  color: var(--color-content-link);
  inline-size: fit-content;
  text-decoration: underline;
}
.bcn-pti .bcn-gl__title {
  color: var(--color-content-default-secondary);
}
.stack {
  --gap: var(--spacing-400, 1rem);
  gap: var(--gap);
  flex-direction: column;
  display: flex;
}
.stack[data-split] > [data-split] {
  margin-block-end: auto;
}
.cluster {
  --gap: var(--spacing-300, 0.75rem);
  --align: center;
  --justify: flex-start;
  gap: var(--gap);
  align-items: var(--align);
  justify-content: var(--justify);
  flex-wrap: wrap;
  display: flex;
}
.esa-card {
  --_card-bg: var(--card-bg, var(--color-background-elevation-raised, #fcfcfc));
  --_card-border: var(--card-border-color, var(--color-border-default, #cecece));
  --_card-radius: var(--radius-md, 0.5rem);
  --_card-padding: var(--spacing-500, 1.5rem);
  --_card-header-bg: var(--card-header-bg, transparent);
  --_card-header-color: var(--color-content-default, #202020);
  --_card-header-border: var(--color-border-default-subtle, #d9d9d9);
  --_card-meta-label-color: var(--color-content-default-secondary, #646464);
  --_card-meta-label-size: var(--typography-label-sm-font-size, 0.875rem);
  --_card-meta-value-size: var(--typography-label-md-font-size, 0.9375rem);
  background: var(--_card-bg);
  border: var(--border-width-default, 1px) solid var(--_card-border);
  border-radius: var(--_card-radius);
  display: block;
  overflow: hidden;
}
.esa-card--header-primary .esa-card__header {
  --_card-header-bg: var(--color-background-brand, #46a758);
  --_card-header-color: var(--color-content-default-knockout, #fcfcfc);
}
.esa-card--header-muted .esa-card__header {
  --_card-header-bg: var(--color-background-elevation-sunken, #f0f0f0);
}
.esa-card__header {
  padding: var(--spacing-400, 1rem) var(--_card-padding);
  background: var(--_card-header-bg);
  color: var(--_card-header-color);
  border-bottom: var(--border-width-default, 1px) solid var(--_card-header-border);
  justify-content: space-between;
  align-items: center;
  min-height: 56px;
  display: flex;
}
.esa-card__header-content {
  align-items: center;
  gap: var(--spacing-300, 0.75rem);
  display: flex;
}
.esa-card__titles {
  gap: var(--spacing-050, 0.125rem);
  flex-direction: column;
  display: flex;
}
.esa-card__title {
  color: inherit;
  margin: 0;
}
.esa-card__body {
  padding: var(--_card-padding);
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--badge-bg` | `#fcfcfc` | component |
| `--badge-border-color` | `#dcdcdc` | component |
| `--badge-text-color` | `#525252` | component |
| `--border-width-default` | `1px` | semantic |
| `--card-bg` | `#fcfcfc` | component |
| `--card-border-color` | `#dcdcdc` | component |
| `--card-header-bg` | `transparent` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger-hover` | `#641723` | semantic |
| `--color-background-utility-danger-muted` | `#feebec` | semantic |
| `--color-background-utility-success-hover` | `#193b2d` | semantic |
| `--color-background-utility-success-muted` | `#e6f6eb` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-border-utility-danger` | `#fdbdbe` | semantic |
| `--color-border-utility-success` | `#adddc0` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-link` | `#005862` | semantic |
| `--color-content-link-hover` | `#00474f` | semantic |
| `--color-content-on-brand-muted` | `#203c25` | semantic |
| `--color-content-utility-danger` | `#ce2c31` | semantic |
| `--color-content-utility-success` | `#218358` | semantic |
| `--gap` | `1.5rem` | component |
| `--radius-chip` | `.25rem` | semantic |
| `--radius-md` | `.25rem` | semantic |
| `--radius-sm` | `.25rem` | semantic |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--typography-body-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-body-md-font-weight` | `400` | semantic |
| `--typography-body-md-letter-spacing` | `.01em` | semantic |
| `--typography-body-md-line-height` | `1.6` | semantic |
| `--typography-body-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-body-sm-font-weight` | `400` | semantic |
| `--typography-body-sm-letter-spacing` | `.01em` | semantic |
| `--typography-body-sm-line-height` | `1.6` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-strong-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-strong-font-weight` | `550` | semantic |
| `--typography-label-md-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-strong-line-height` | `1.6` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-microcopy-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-microcopy-sm-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-sm-strong-line-height` | `1` | semantic |
| `--typography-title-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-title-sm-strong-font-size` | `clamp(.8125rem, .71rem + .5vw, 1.0625rem)` | semantic |
| `--typography-title-sm-strong-font-weight` | `550` | semantic |
| `--typography-title-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-title-sm-strong-line-height` | `1.6` | semantic |
