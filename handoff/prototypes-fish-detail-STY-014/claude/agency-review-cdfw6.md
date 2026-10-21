# Agency Review — CDFW6

Record detail pages (work breakdown) · source prototype: https://esassoc.github.io/beacon-design/prototypes/fish-detail/STY-014/

![Agency Review — CDFW6, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-fish-detail-STY-014/claude/agency-review-cdfw6.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-fish-detail-STY-014/claude/agency-review-cdfw6.phone.png

## Components

- `bcn-review` (spoke) · `src/components/bcn/BcnReviewThread.astro`
- `bcn-status-chip` (spoke) · `src/components/bcn/BcnActionTable.astro`
- `esa-avatar` (hub) · `packages/ecology/src/components/esa-avatar.astro`
- `esa-badge` (hub) · `packages/ecology/src/components/esa-badge.astro` → use `ui-badge` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-pill` (hub) · `packages/ecology/src/components/esa-pill.astro`

## Markup

_3 repeated elements are collapsed in the markup below; the comments say where._

```html
<section class="bcn-review">
  <header class="bcn-review__head">
    <h3 class="bcn-review__title">
      <span class="esa-icon esa-icon--sm" aria-hidden="true"
        ><svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          focusable="false"
        >
          <path d="M12 7v2"></path>
          <path d="M12 13h.01"></path>
          <path d="M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2V8"></path></svg></span
      >Agency Review — CDFW<span
        class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
        ><span class="esa-badge__text">6</span></span
      >
    </h3>
    <div class="bcn-review__counts">
      <span class="bcn-review__count" data-s="open">3 open</span
      ><span class="bcn-review__count" data-s="addressed">2 addressed</span
      ><span class="bcn-review__count" data-s="resolved">1 resolved</span>
    </div>
  </header>
  <div class="bcn-review__groups">
    <div class="bcn-review__group">
      <h4 class="bcn-review__field">
        <span class="esa-icon esa-icon--sm" aria-hidden="true"
          ><svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path
              d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
            ></path>
            <circle cx="12" cy="10" r="3"></circle></svg></span
        >Pinned to: Research Questions
      </h4>
      <ul class="bcn-review__list">
        <li class="bcn-review__item">
          <span class="bcn-review__node"
            ><span
              class="esa-avatar esa-avatar--sm esa-avatar--circle typography-label-xs-strong"
              style="--_avatar-hue: 82"
              ><span class="esa-avatar__initials">C</span></span
            ></span
          >
          <div class="bcn-review__body">
            <div class="bcn-review__meta">
              <span class="bcn-review__author">CDFW</span
              ><span
                class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
                ><span class="esa-badge__text">CDFW</span></span
              ><span class="bcn-review__time">2026-02-10</span
              ><span class="bcn-review__tags"
                ><a
                  class="bcn-review__section"
                  href="/beacon-design/prototypes/fish-science-plan#sec-3-5-1"
                  title="Open in the Science Plan reader"
                  >§ 3.5.1</a
                ><span class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                  ><span class="esa-pill__label">Rephrase research question</span></span
                ><span
                  class="bcn-status-chip"
                  data-status="addressed"
                  style="--_chip: var(--st-addressed, #228be6)"
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Addressed</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              >
            </div>
            <p class="bcn-review__text">
              RQ1 should separate the baseline objective from the with-project objective so the
              preconstruction baseline can be approved and started independent of the
              construction-phase design.
            </p>
            <ul class="bcn-review__replies">
              <li class="bcn-review__reply">
                <span class="bcn-review__node bcn-review__node--reply"
                  ><span
                    class="esa-avatar esa-avatar--sm esa-avatar--circle typography-label-xs-strong"
                    style="--_avatar-hue: 233"
                    ><span class="esa-avatar__initials">GM</span></span
                  ></span
                >
                <div class="bcn-review__body">
                  <div class="bcn-review__meta">
                    <span class="bcn-review__author">Greenwood, Marin</span
                    ><span class="bcn-review__time">2026-02-24</span>
                  </div>
                  <p class="bcn-review__text">
                    Split into a baseline clause and a with-project clause within RQ1; the baseline
                    component can proceed on the 2027 field season while the construction-phase
                    design is finalized.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="bcn-review__group">
      <h4 class="bcn-review__field">
        <span class="esa-icon esa-icon--sm" aria-hidden="true"
          ><svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path
              d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
            ></path>
            <circle cx="12" cy="10" r="3"></circle></svg></span
        >Pinned to: Background
      </h4>
      <ul class="bcn-review__list">
        <li class="bcn-review__item">
          <span class="bcn-review__node"
            ><span
              class="esa-avatar esa-avatar--sm esa-avatar--circle typography-label-xs-strong"
              style="--_avatar-hue: 82"
              ><span class="esa-avatar__initials">C</span></span
            ></span
          >
          <div class="bcn-review__body">
            <div class="bcn-review__meta">
              <span class="bcn-review__author">CDFW</span
              ><span
                class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
                ><span class="esa-badge__text">CDFW</span></span
              ><span class="bcn-review__time">2026-05-06</span
              ><span class="bcn-review__tags"
                ><a
                  class="bcn-review__section"
                  href="/beacon-design/prototypes/fish-science-plan#sec-3-5-1"
                  title="Open in the Science Plan reader"
                  >§ 3.5.1</a
                ><span class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                  ><span class="esa-pill__label">Fix COA cross-reference</span></span
                ><span
                  class="bcn-status-chip"
                  data-status="resolved"
                  style="--_chip: var(--st-resolved, #2e7571)"
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Resolved</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              >
            </div>
            <p class="bcn-review__text">
              Background references COA 10.20.2 where the Abundance and Distribution Study
              (10.19.2/10.19.3) is meant — please correct the coordinating-study cross-reference.
            </p>
            <ul class="bcn-review__replies">
              <li class="bcn-review__reply">
                <span class="bcn-review__node bcn-review__node--reply"
                  ><span
                    class="esa-avatar esa-avatar--sm esa-avatar--circle typography-label-xs-strong"
                    style="--_avatar-hue: 233"
                    ><span class="esa-avatar__initials">GM</span></span
                  ></span
                >
                <div class="bcn-review__body">
                  <div class="bcn-review__meta">
                    <span class="bcn-review__author">Greenwood, Marin</span
                    ><span class="bcn-review__time">2026-05-12</span>
                  </div>
                  <p class="bcn-review__text">
                    Corrected to 10.19.2 (Predation) and 10.19.3 (Abundance and Distribution);
                    10.20.2 reference removed.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <!-- …and 3 more like this (<div class="bcn-review__group">) -->
  </div>
</section>
```

## Styles

```css
.typography-label-xs-strong {
  font-family: var(--typography-label-xs-strong-font-family);
  font-size: var(--typography-label-xs-strong-font-size);
  font-weight: var(--typography-label-xs-strong-font-weight);
  line-height: var(--typography-label-xs-strong-line-height);
  letter-spacing: var(--typography-label-xs-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.bcn-dlineage__icon .esa-icon {
  --_icon-size: 14px;
}
.bcn-dassign .bcn-status-chip {
  align-self: flex-start;
  width: fit-content;
}
.bcn-fdetail__rail .bcn-status-chip {
  align-self: flex-start;
  width: fit-content;
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-aldo-needs__head .esa-badge {
  font-variant-numeric: tabular-nums;
}
.bcn-aldo-composer__context .esa-pill[data-auto] {
  --_pill-bg: transparent;
  border-style: dashed;
}
.bcn-aldo-composer__context .esa-pill {
  max-width: 100%;
}
.bcn-aldo-composer__context .esa-pill__label,
.bcn-aldo-msg__context .esa-pill__label {
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 16rem;
  overflow: hidden;
}
.bcn-admin-btn .esa-icon {
  block-size: 14px;
  inline-size: 14px;
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
.bcn-countchip__num .esa-badge {
  --badge-radius: var(--radius-full);
  --badge-bg: var(--color-border-default);
  --badge-text-color: var(--color-content-default-secondary);
  box-sizing: border-box;
  font-variant-numeric: tabular-nums;
  min-width: 19px;
  height: 19px;
  box-shadow: 0 0 0 1.5px var(--color-background-elevation-raised);
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  font-size: 0.8125rem;
  line-height: 1;
  display: inline-flex;
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-card__count .esa-pill {
  --pill-bg: transparent;
  --pill-border-color: var(--color-border-default);
  --pill-text-color: var(--color-content-default-secondary);
}
.bcn-ev-card__files .esa-pill {
  max-width: 100%;
}
.bcn-ev-card__files .esa-pill__label {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-attached__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--bcn-gray-100);
  --badge-text-color: var(--bcn-gray-700);
  font-weight: var(--typography-font-weight-medium);
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
.bcn-sketch__h .esa-icon {
  color: var(--color-background-brand-muted);
  flex-shrink: 0;
}
.bcn-sketch__component-h .esa-icon {
  color: var(--color-background-brand-muted);
}
.bcn-review {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-review__head {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-300);
  flex-wrap: wrap;
  display: flex;
}
.bcn-review__title {
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--font-size-300);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
  display: flex;
}
.bcn-review__title .esa-icon {
  color: var(--color-background-utility-warning);
  flex-shrink: 0;
}
.bcn-review__counts {
  align-items: center;
  gap: var(--spacing-300);
  font-size: var(--font-size-100);
  display: inline-flex;
}
.bcn-review__count {
  align-items: center;
  gap: var(--spacing-100);
  color: var(--color-content-default-secondary);
  display: inline-flex;
}
.bcn-review__count:before {
  content: "";
  border-radius: var(--radius-full);
  width: 8px;
  height: 8px;
}
.bcn-review__count[data-s="open"]:before {
  background: var(--color-background-utility-warning);
}
.bcn-review__count[data-s="addressed"]:before {
  background: var(--color-background-utility-info);
}
.bcn-review__count[data-s="resolved"]:before {
  background: var(--color-background-utility-success);
}
.bcn-review__section {
  font-family: var(--typography-font-family-mono);
  font-size: 0.6875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  white-space: nowrap;
  padding: 1px 5px;
  text-decoration: none;
}
.bcn-review__section:hover {
  background: color-mix(in srgb, var(--color-commitment) 20%, white);
}
.bcn-review__groups {
  gap: var(--spacing-500);
  flex-direction: column;
  display: flex;
}
.bcn-review__group {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-review__field {
  align-items: center;
  gap: var(--spacing-150);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: var(--color-content-default-tertiary);
  margin: 0;
  display: flex;
}
.bcn-review__field .esa-icon {
  color: var(--bcn-content-muted);
}
.bcn-review__list,
.bcn-review__replies {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-review__item {
  gap: var(--spacing-300);
  padding: var(--spacing-300);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  grid-template-columns: auto 1fr;
  display: grid;
}
.bcn-review__item + .bcn-review__item {
  margin-top: var(--spacing-200);
}
.bcn-review__body {
  gap: var(--spacing-150);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-review__meta {
  align-items: center;
  gap: var(--spacing-200);
  flex-wrap: wrap;
  display: flex;
}
.bcn-review__author {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-review__time {
  color: var(--color-content-default-tertiary);
  font-size: 0.75rem;
}
.bcn-review__tags {
  align-items: center;
  gap: var(--spacing-150);
  flex-wrap: wrap;
  margin-left: auto;
  display: inline-flex;
}
.bcn-review__text {
  font-size: var(--font-size-200);
  color: var(--color-content-default-secondary);
  margin: 0;
  line-height: 1.55;
}
.bcn-review__replies {
  margin-top: var(--spacing-200);
  padding-left: var(--spacing-400);
  border-left: 2px solid var(--color-border-default);
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-review__reply {
  gap: var(--spacing-200);
  grid-template-columns: auto 1fr;
  display: grid;
}
.bcn-review__node--reply .esa-avatar {
  --_avatar-bg: var(--color-background-brand-muted);
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
.esa-badge--sm {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-150, 0.375rem);
}
.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand-muted, #e9f6e9);
  --_badge-text: var(--color-content-on-brand-muted, #203c25);
}
.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-muted, #fff7c2);
  --_badge-text: var(--color-content-utility-warning, #ab6400);
  --_badge-border: var(--color-border-utility-warning, #f3d673);
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
.esa-badge--dot.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-hover, #ffba18);
}
@media (forced-colors: active) {
  .esa-badge {
    border: 1px solid canvastext;
  }
}
.typography-label-xs-strong {
  font-family: var(--typography-label-xs-strong-font-family);
  font-size: var(--typography-label-xs-strong-font-size);
  font-weight: var(--typography-label-xs-strong-font-weight);
  line-height: var(--typography-label-xs-strong-line-height);
  letter-spacing: var(--typography-label-xs-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
}
.bcn-status-chip {
  align-items: center;
  gap: var(--spacing-150);
  padding: 2px var(--spacing-250);
  border-radius: var(--radius-full);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  white-space: nowrap;
  background: color-mix(in srgb, var(--_chip) 16%, transparent);
  color: color-mix(in srgb, var(--_chip) 72%, #1a1a1a);
  display: inline-flex;
}
.bcn-status-chip__dot {
  border-radius: var(--radius-full);
  background: var(--_chip);
  flex-shrink: 0;
  width: 8px;
  height: 8px;
}
.esa-avatar {
  --_avatar-size: var(--avatar-size-md, 40px);
  --_avatar-font-size: var(
    --avatar-font-size-md,
    var(--typography-label-md-strong-font-size, var(--font-size-200, 0.9375rem))
  );
  --_avatar-radius: var(--radius-pill, 9999px);
  --_avatar-bg: var(--avatar-bg, hsl(var(--_avatar-hue, 200) 45% 65%));
  --_avatar-text: var(--color-content-default-knockout, #fcfcfc);
  width: var(--_avatar-size);
  height: var(--_avatar-size);
  border-radius: var(--_avatar-radius);
  background: var(--_avatar-bg);
  color: var(--_avatar-text);
  font-size: var(--_avatar-font-size);
  user-select: none;
  box-sizing: border-box;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  overflow: hidden;
}
.esa-avatar--sm {
  --_avatar-size: var(--avatar-size-sm, 28px);
  --_avatar-font-size: var(
    --avatar-font-size-sm,
    var(--typography-label-xs-strong-font-size, var(--font-size-100, 0.75rem))
  );
}
.esa-pill {
  --_pill-bg: var(--color-background-elevation-sunken, #f0f0f0);
  --_pill-text: var(--color-content-default, #202020);
  --_pill-border: var(--color-border-default-subtle, #d9d9d9);
  --_pill-padding-y: var(--spacing-150, 0.375rem);
  --_pill-padding-x: var(--spacing-200, 0.5rem);
  --_pill-gap: var(--spacing-100, 0.25rem);
  align-items: center;
  gap: var(--_pill-gap);
  padding-block: var(--_pill-padding-y);
  padding-inline: var(--_pill-padding-x);
  border: var(--border-width-default, 1px) solid var(--_pill-border);
  border-radius: var(--radius-chip, var(--radius-sm, 0.25rem));
  background: var(--_pill-bg);
  color: var(--_pill-text);
  white-space: nowrap;
  box-sizing: border-box;
  display: inline-flex;
}
.esa-pill--sm {
  --_pill-padding-y: var(--spacing-100, 0.25rem);
  --_pill-padding-x: var(--spacing-150, 0.375rem);
}
.esa-pill[data-category] {
  --_pill-bg: var(--category-2, var(--color-background-elevation-sunken, #f0f0f0));
  --_pill-border: var(--category-6, var(--color-border-default-subtle, #d9d9d9));
  --_pill-text: var(--category-11, var(--color-content-default, #202020));
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
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
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
| `--avatar-bg` | `hsl(200 45% 65%)` | component |
| `--avatar-font-size-md` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | component |
| `--avatar-font-size-sm` | `clamp(.625rem, .56rem + .32vw, .75rem)` | component |
| `--avatar-size-md` | `40px` | component |
| `--avatar-size-sm` | `28px` | component |
| `--badge-bg` | `#fcfcfc` | component |
| `--badge-border-color` | `#dcdcdc` | component |
| `--badge-text-color` | `#525252` | component |
| `--bcn-content-muted` | `#7c7c7c` | component |
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-700` | `#525252` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--border-width-default` | `1px` | semantic |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-info` | `#228be6` | semantic |
| `--color-background-utility-info-subtle` | `#fbfdff` | semantic |
| `--color-background-utility-success` | `#2e7571` | semantic |
| `--color-background-utility-warning` | `#f59e0b` | semantic |
| `--color-background-utility-warning-hover` | `#ffba18` | semantic |
| `--color-background-utility-warning-muted` | `#fff7c2` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-border-utility-warning` | `#f3d673` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-on-brand-muted` | `#203c25` | semantic |
| `--color-content-utility-warning` | `#ab6400` | semantic |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--font-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-chip` | `.25rem` | semantic |
| `--radius-full` | `9999px` | primitive |
| `--radius-pill` | `9999px` | semantic |
| `--radius-sm` | `.25rem` | semantic |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-strong-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-xs-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-xs-strong-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-label-xs-strong-font-weight` | `550` | semantic |
| `--typography-label-xs-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-xs-strong-line-height` | `1.6` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
| `--typography-microcopy-xs-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-strong-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-xs-strong-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-strong-line-height` | `1` | semantic |
