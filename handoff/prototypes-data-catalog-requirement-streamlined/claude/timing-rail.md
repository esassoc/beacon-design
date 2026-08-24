# Timing rail

The Timing rail module (esa-collapsible): a single one-time deadline rule ("14 days before milestone"). Under BCN-1163 the merged record is a one-time Action Implementation — a single implementation with a single due date — so there is NO frequency or recurrence control.

## Key decisions
- One-time only: the module states the deadline RULE (offset + relation + milestone), never a concrete due date — a date would be per-implementation tracking data, which does not belong in the catalog.
- Frequency / Milestone read in the reference block; the rail adds only the deadline rule, with a hint ("One-time — single implementation, single due date").

## Gotchas
- Never surface a computed due DATE on this page — the rule is config; the date is tracking. The edit modal's Notifications tab shows a due date only as read context for scheduling, labelled "edited in Project Tracking".
- Selector is positional (nth-of-type(3)); update it if the rail order changes.

## Done when
- A Timing module showing a one-time deadline rule and no frequency control or concrete due date.

## Markup
```html
<details class="esa-collapsible" open="">
  <summary class="esa-collapsible__summary typography-label-sm-strong">
    <span class="esa-icon esa-icon--sm" aria-hidden="true">
      <svg
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
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    </span>
    <span class="esa-collapsible__title">Timing</span>
  </summary>
  <div class="esa-collapsible__body typography-body-md">
    <div class="bcn-key-value">
      <span class="bcn-key-value__key">Deadline</span>
      <span class="bcn-key-value__val">14 days before milestone</span>
      <span class="bcn-key-value__hint"
        >One-time — single implementation, single due date</span
      >
    </div>
  </div>
</details>
```

## Styles
```css
/* Type comes from .typography-body-md on the element, leading included — the
       role leads at normal, which is what a one-word label beside a 22px track
       wants. This carried a line-height override back when body-md was relaxed
       (1.8) and the row outgrew the track; the role moved, so the override went. */

    /* FORCED COLORS. The worst case in the kit: on/off is --_bg-on vs --_bg-off
       (both force-adjusted to the same Canvas) and the thumb's ONLY separation
       from the track is its background plus --elevation-1, which is deleted. The
       control becomes an empty pill with an invisible thumb, and the position
       channel is unreadable because the thing being positioned cannot be seen.
       There is no "On"/"Off" text to fall back on — 'label' is the field name and
       is identical in both states.

       Two channels are restored: the thumb FILL (Canvas when off, Highlight when
       on) and its POSITION, which already worked.

       The 'left' re-declaration is not optional. ':host([checked]) .thumb' above
       computes '--_track-w - --_thumb - 2px', which assumes --_track-w is the
       track's padding-box width. Adding a border under box-sizing: border-box
       shrinks that box by 2px while the calc still uses the full value, so the
       checked thumb would overshoot the right edge at every one of the four
       sizes. -4px absorbs it. */
    @media (forced-colors: active) {
      .track {
        box-sizing: border-box;
        border: 1px solid CanvasText;
        background: Canvas;
      }
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.bcn-search-trigger .esa-icon{flex:none;color:var(--color-text-tertiary)}
.bcn-help-bar .esa-icon-button{color:var(--bcn-helpbar-fg-muted);--icon-button-bg-hover: var(--bcn-helpbar-hover-bg)}
.bcn-help-bar .esa-icon-button:hover,.bcn-help-bar .esa-icon-button:focus-visible{color:var(--bcn-helpbar-fg)}
.bcn-gd__label .esa-icon{color:var(--color-text-tertiary);flex:none}
.bcn-gd-row .esa-icon{color:var(--color-text-tertiary);flex:none}
.bcn-disclosure .esa-icon{transition:transform .15s ease}
.bcn-disclosure[aria-expanded=false] .esa-icon{transform:rotate(-90deg)}
.bcn-ev-staging__title .esa-icon{flex:none;color:var(--color-text-tertiary)}
.bcn-ev-targets__title .esa-icon{flex:none;color:var(--color-text-tertiary)}
.topbar__right .esa-icon-button{color:var(--color-text-secondary)}
.user-panel__item .esa-icon{color:var(--bcn-gray-500)}
.user-panel__item--danger .esa-icon{color:var(--color-danger)}
.project-switcher__trigger>.esa-icon:first-child{flex-shrink:0;color:var(--bcn-gray-500)}
.nav-section__header:hover .esa-icon,.nav-section--active .nav-section__header,.nav-section--active .nav-section__header .esa-icon{color:var(--color-primary)}
.nav-section__header>.esa-icon:first-child{flex-shrink:0;color:var(--bcn-gray-950);transition:color .15s ease}
.nav-section__header>.esa-icon:last-child{color:var(--bcn-gray-400);transition:transform .15s ease,opacity .2s ease-in-out;flex-shrink:0}
.nav-section--collapsed .nav-section__header>.esa-icon:last-child{transform:rotate(-90deg)}
.side-nav.collapsed .nav-section__header>.esa-icon:last-child{display:none}
.bcn-action__rail .esa-collapsible__title{font-size:var(--type-size-300);font-weight:var(--font-weight-semibold)}
.bcn-lineage__icon .esa-icon{--_icon-size: 14px}
.bcn-trigger-row .esa-icon{color:var(--color-primary);flex-shrink:0}
.bcn-context__doc .esa-icon{color:var(--color-text-tertiary)}
.bcn-note .esa-icon{color:var(--color-primary);flex-shrink:0;margin-top:2px}
.bcn-ntoggle__title .esa-icon{color:var(--color-text-primary)}
.typography-body-md{font-family:var(--typography-body-md-font-family);font-size:var(--typography-body-md-font-size);font-weight:var(--typography-body-md-font-weight);line-height:var(--typography-body-md-line-height);letter-spacing:var(--typography-body-md-letter-spacing)}
.typography-label-sm-strong{font-family:var(--typography-label-sm-strong-font-family);font-size:var(--typography-label-sm-strong-font-size);font-weight:var(--typography-label-sm-strong-font-weight);line-height:var(--typography-label-sm-strong-line-height);letter-spacing:var(--typography-label-sm-strong-letter-spacing)}
.esa-collapsible{border:var(--border-width-default, 1px) solid var(--color-border-default, #cecece);border-radius:var(--radius-md, .5rem);background:var(--color-background-elevation-raised, #fcfcfc)}
.esa-collapsible--flush{border:none;border-radius:0;background:transparent}
.esa-collapsible--flush>.esa-collapsible__summary,.esa-collapsible--flush>.esa-collapsible__body{padding-inline:0}
.esa-collapsible__summary{display:flex;align-items:center;gap:var(--spacing-200, .5rem);padding:var(--spacing-300, .75rem) var(--spacing-400, 1rem);color:var(--color-content-default, #202020);cursor:pointer;list-style:none}
.esa-collapsible__summary::-webkit-details-marker{display:none}
.esa-collapsible__summary:after{content:"";width:8px;height:8px;border-right:2px solid var(--color-content-default-secondary, #646464);border-bottom:2px solid var(--color-content-default-secondary, #646464);transform:rotate(-45deg);transition:transform .15s ease;margin-left:auto}
.esa-collapsible[open]>.esa-collapsible__summary:after{transform:rotate(45deg)}
.esa-collapsible__summary .esa-icon{flex-shrink:0;color:var(--color-content-default-secondary, #646464)}
.esa-collapsible__body{display:flex;flex-direction:column;gap:var(--spacing-400, 1rem);padding:0 var(--spacing-400, 1rem) var(--spacing-400, 1rem)}
.bcn-key-value{display:flex;flex-direction:column;gap:2px}
.bcn-key-value__key{font-size:var(--form-font-size-md);font-weight:var(--font-weight-medium);color:var(--form-label-color)}
.bcn-key-value__val{font-size:var(--form-font-size-md);font-weight:var(--font-weight-semibold);color:var(--color-text-primary)}
.bcn-key-value__hint{font-size:.75rem;color:var(--color-text-tertiary)}
.bcn-reqref__key .esa-icon{--_icon-size: 11px;color:var(--color-text-tertiary);flex-shrink:0}
.bcn-reqref__footer .esa-icon{--_icon-size: 13px}
.bcn-reqref__ext .esa-icon{--_icon-size: 12px;opacity:.75}
.esa-icon{--_icon-size: var(--icon-size-md, 20px);display:inline-flex;align-items:center;justify-content:center;width:var(--_icon-size);height:var(--_icon-size);color:inherit}
.esa-icon--xs{--_icon-size: var(--icon-size-xs, 14px)}
.esa-icon--sm{--_icon-size: var(--icon-size-sm, 16px)}
.esa-icon--md{--_icon-size: var(--icon-size-md, 20px)}
.esa-icon--lg{--_icon-size: var(--icon-size-lg, 24px)}
.esa-icon--xl{--_icon-size: var(--icon-size-xl, 28px)}
.esa-icon svg{display:block;width:var(--_icon-size);height:var(--_icon-size)}
.breadcrumbs__items .esa-icon{color:var(--bcn-gray-400)}
.page-layout__title h1 .esa-icon{color:var(--page-title-icon-color, var(--bcn-gray-1000));flex-shrink:0}
```

## Tokens
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: rgba(255, 255, 255, .92) _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--border-width-default`: 1px _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-border-default`: #cecece _(semantic)_
- `--color-content-default`: #202020 _(semantic)_
- `--color-content-default-secondary`: #646464 _(semantic)_
- `--color-danger`: #ce2c31 _(component)_
- `--color-primary`: #005862 _(component)_
- `--color-text-primary`: #3d3d3d _(component)_
- `--color-text-secondary`: #525252 _(component)_
- `--color-text-tertiary`: #656565 _(component)_
- `--font-weight-medium`: 500 _(component)_
- `--font-weight-semibold`: 550 _(component)_
- `--form-font-size-md`: clamp(.75rem, .66rem + .44vw, .9375rem) _(component)_
- `--form-label-color`: #646464 _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-md`: .5rem _(semantic)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--type-size-300`: clamp(.875rem, .77rem + .52vw, 1.125rem) _(component)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 350 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-label-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-label-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-strong-line-height`: 1.6 _(semantic)_
