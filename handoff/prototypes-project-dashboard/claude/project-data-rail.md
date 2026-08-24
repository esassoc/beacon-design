# Project data rail

A quiet list of the project's own data — Project Info, Species, Milestones, Construction Activities, Seasons, Spatial Data — each opening a SIDE PANEL. These panels REPLACE the prod project-details-layout tab pages outright; the review confirmed these entities stay project-scoped rather than moving to the Data Catalog.

## Key decisions
- Panel open-state lives in the URL as ?data=<key> (pushState, popstate, honored on load), so the deep links the tab routes provided survive the page-to-panel move.
- Panel lists are READ-ONLY slim cards, each bespoke to its data, dense enough to show 6–8 at once, with a search field on every panel. Sort is alphabetical everywhere except Milestones, which sort by date.
- Add is a primary button in the panel footer; per-row Edit opens a STACKED CHILD DRAWER carrying that entity's form (the prod inline-create-panels, ported). The standard edit footer is Delete left, Cancel/Save right, medium.
- Project Info opens straight into the editable form and ends in the danger zone that gives delete-project its new home.
- Seasons render as the ported prod season-card (year timeline, teal active span, today marker, wrap-year aware).

## Gotchas
- A live pain point the review raised: project data cannot currently be edited from the tracker — "if I'm on the tracker and I don't have a date on my milestone, I cannot easily add it from there." This drawer pattern is the canonical home, but it should be invocable from the tracker and action dialogs too.
- Deleting the replaced tab routes may need redirects to the ?data= URLs for bookmarked links.
- Checkboxes in these forms render as switches; there is no esa month-day picker lego yet, so season start/end use text fields in the prototype (another hub gap).

## Done when
- Each rail link opens its panel and updates the URL; the browser back button closes it; lists are searchable and read-only with per-row Edit opening a child drawer; Project Info ends in a delete danger zone.

## Markup
```html
<div class="esa-card">
  <div class="esa-card__header">
    <div class="esa-card__header-content">
      <div class="esa-card__titles">
        <h3 class="esa-card__title typography-title-sm-strong">Project data</h3>
      </div>
    </div>
    <div class="esa-card__actions typography-label-md"></div>
  </div>
  <div class="esa-card__body typography-body-md">
    <ul class="bcn-lrc">
      <li>
        <a class="bcn-lrc__row" href="?data=project-info">
          <span class="bcn-lrc__label">Project Info</span>
          <span class="bcn-lrc__right">
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
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </span>
          </span>
        </a>
      </li>
      <li>
        <a class="bcn-lrc__row" href="?data=species">
          <span class="bcn-lrc__label">Species</span>
          <span class="bcn-lrc__right">
            <span class="bcn-lrc__meta">38</span>
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
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </span>
          </span>
        </a>
      </li>
      <li>
        <a class="bcn-lrc__row" href="?data=milestones">
          <span class="bcn-lrc__label">Milestones</span>
          <span class="bcn-lrc__right">
            <span class="bcn-lrc__meta">12</span>
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
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </span>
          </span>
        </a>
      </li>
      <li>
        <a class="bcn-lrc__row" href="?data=construction-activities">
          <span class="bcn-lrc__label">Construction Activities</span>
          <span class="bcn-lrc__right">
            <span class="bcn-lrc__meta">27</span>
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
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </span>
          </span>
        </a>
      </li>
      <li>
        <a class="bcn-lrc__row" href="?data=seasons">
          <span class="bcn-lrc__label">Seasons</span>
          <span class="bcn-lrc__right">
            <span class="bcn-lrc__meta">14</span>
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
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </span>
          </span>
        </a>
      </li>
      <li>
        <a class="bcn-lrc__row" href="?data=spatial">
          <span class="bcn-lrc__label">Spatial Data</span>
          <span class="bcn-lrc__right">
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
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </span>
          </span>
        </a>
      </li>
    </ul>
  </div>
</div>
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
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.bcn-mod__link .esa-icon{color:var(--color-text-muted)}
.bcn-lrc{list-style:none;margin:0;padding:0;display:flex;flex-direction:column}
.bcn-lrc__row{display:flex;align-items:center;justify-content:space-between;gap:var(--spacing-300);padding:var(--spacing-250) 0;text-decoration:none;color:inherit}
.bcn-lrc li+li .bcn-lrc__row{border-top:1px solid var(--color-border-light)}
.bcn-lrc__label{font-size:var(--type-size-150);font-weight:var(--font-weight-medium);color:var(--color-text-primary);min-width:0}
.bcn-lrc__row:hover .bcn-lrc__label{color:var(--color-primary)}
.bcn-lrc__right{display:inline-flex;align-items:center;gap:var(--spacing-200);flex-shrink:0}
.bcn-lrc__meta{font-size:var(--type-size-150);color:var(--color-text-tertiary);font-variant-numeric:tabular-nums;white-space:nowrap}
.bcn-lrc__chev{color:var(--color-text-muted)}
.bcn-lrc__row:hover .bcn-lrc__chev{color:var(--color-primary)}
.bcn-lrc__footer{display:inline-flex;align-items:center;gap:var(--spacing-100);margin-top:var(--spacing-100);padding-top:var(--spacing-250);border-top:1px solid var(--color-border-light);width:100%;font-size:var(--type-size-150);font-weight:var(--font-weight-semibold);color:var(--color-primary);text-decoration:none}
.bcn-lrc__footer:hover{color:var(--color-primary-hover)}
.bcn-search-trigger .esa-icon{flex:none;color:var(--color-text-tertiary)}
.bcn-help-bar .esa-icon-button{color:var(--bcn-helpbar-fg-muted);--icon-button-bg-hover: var(--bcn-helpbar-hover-bg)}
.bcn-help-bar .esa-icon-button:hover,.bcn-help-bar .esa-icon-button:focus-visible{color:var(--bcn-helpbar-fg)}
.bcn-gd__label .esa-icon{color:var(--color-text-tertiary);flex:none}
.bcn-gd-row .esa-icon{color:var(--color-text-tertiary);flex:none}
.bcn-disclosure .esa-icon{transition:transform .15s ease}
.bcn-disclosure[aria-expanded=false] .esa-icon{transform:rotate(-90deg)}
.bcn-ev-staging__title .esa-icon{flex:none;color:var(--color-text-tertiary)}
.bcn-ev-staging__item .esa-card{overflow:visible}
.bcn-ev-targets__title .esa-icon{flex:none;color:var(--color-text-tertiary)}
.bcn-ev-targets__item[data-receiving] .esa-card{border-color:var(--color-secondary);background:color-mix(in srgb,var(--color-secondary) 5%,transparent)}
.bcn-ev-targets__item[data-blocked] .esa-card{opacity:.45}
.bcn-ev-targets__item .esa-card{overflow:visible}
.topbar__right .esa-icon-button{color:var(--color-text-secondary)}
.user-panel__item .esa-icon{color:var(--bcn-gray-500)}
.user-panel__item--danger .esa-icon{color:var(--color-danger)}
.project-switcher__trigger>.esa-icon:first-child{flex-shrink:0;color:var(--bcn-gray-500)}
.nav-section__header:hover .esa-icon,.nav-section--active .nav-section__header,.nav-section--active .nav-section__header .esa-icon{color:var(--color-primary)}
.nav-section__header>.esa-icon:first-child{flex-shrink:0;color:var(--bcn-gray-950);transition:color .15s ease}
.nav-section__header>.esa-icon:last-child{color:var(--bcn-gray-400);transition:transform .15s ease,opacity .2s ease-in-out;flex-shrink:0}
.nav-section--collapsed .nav-section__header>.esa-icon:last-child{transform:rotate(-90deg)}
.side-nav.collapsed .nav-section__header>.esa-icon:last-child{display:none}
.typography-body-md{font-family:var(--typography-body-md-font-family);font-size:var(--typography-body-md-font-size);font-weight:var(--typography-body-md-font-weight);line-height:var(--typography-body-md-line-height);letter-spacing:var(--typography-body-md-letter-spacing)}
.typography-label-md{font-family:var(--typography-label-md-font-family);font-size:var(--typography-label-md-font-size);font-weight:var(--typography-label-md-font-weight);line-height:var(--typography-label-md-line-height);letter-spacing:var(--typography-label-md-letter-spacing)}
.typography-label-md-strong{font-family:var(--typography-label-md-strong-font-family);font-size:var(--typography-label-md-strong-font-size);font-weight:var(--typography-label-md-strong-font-weight);line-height:var(--typography-label-md-strong-line-height);letter-spacing:var(--typography-label-md-strong-letter-spacing)}
.typography-title-sm-strong{font-family:var(--typography-title-sm-strong-font-family);font-size:var(--typography-title-sm-strong-font-size);font-weight:var(--typography-title-sm-strong-font-weight);line-height:var(--typography-title-sm-strong-line-height);letter-spacing:var(--typography-title-sm-strong-letter-spacing)}
.esa-icon{--_icon-size: var(--icon-size-md, 20px);display:inline-flex;align-items:center;justify-content:center;width:var(--_icon-size);height:var(--_icon-size);color:inherit}
.esa-icon--xs{--_icon-size: var(--icon-size-xs, 14px)}
.esa-icon--sm{--_icon-size: var(--icon-size-sm, 16px)}
.esa-icon--md{--_icon-size: var(--icon-size-md, 20px)}
.esa-icon--lg{--_icon-size: var(--icon-size-lg, 24px)}
.esa-icon--xl{--_icon-size: var(--icon-size-xl, 28px)}
.esa-icon svg{display:block;width:var(--_icon-size);height:var(--_icon-size)}
.esa-card{--_card-bg: var(--card-bg, var(--color-background-elevation-raised, #fcfcfc));--_card-border: var(--card-border-color, var(--color-border-default, #cecece));--_card-radius: var(--radius-md, .5rem);--_card-padding: var(--spacing-500, 1.5rem);--_card-header-bg: var(--card-header-bg, transparent);--_card-header-color: var(--color-content-default, #202020);--_card-header-border: var(--color-border-default-subtle, #d9d9d9);display:block;background:var(--_card-bg);border:var(--border-width-default, 1px) solid var(--_card-border);border-radius:var(--_card-radius);overflow:hidden}
.esa-card--outlined{--_card-border: var(--color-border-default, #cecece)}
.esa-card--elevated{--_card-border: transparent;box-shadow:var(--elevation-2, 0 2px 12px 0 rgba(0, 0, 0, .04))}
.esa-card--filled{--_card-bg: var(--color-background-elevation-sunken, #f0f0f0);--_card-border: transparent}
.esa-card--header-primary .esa-card__header{--_card-header-bg: var(--color-background-brand, #46a758);--_card-header-color: var(--color-content-default-knockout, #fcfcfc)}
.esa-card--header-muted .esa-card__header{--_card-header-bg: var(--color-background-elevation-sunken, #f0f0f0)}
.esa-card--padding-none{--_card-padding: 0}
.esa-card--padding-compact{--_card-padding: var(--spacing-300, .75rem)}
.esa-card--padding-spacious{--_card-padding: var(--spacing-700, 3rem)}
.esa-card__header{display:flex;align-items:center;justify-content:space-between;padding:var(--spacing-400, 1rem) var(--_card-padding);background:var(--_card-header-bg);color:var(--_card-header-color);border-bottom:var(--border-width-default, 1px) solid var(--_card-header-border);min-height:56px}
.esa-card__header-content{display:flex;align-items:center;gap:var(--spacing-300, .75rem)}
.esa-card__titles{display:flex;flex-direction:column;gap:var(--spacing-050, .125rem)}
.esa-card__title{margin:0;color:inherit}
.esa-card__subtitle{color:var(--color-content-default-secondary, #646464);margin:0}
.esa-card--header-primary .esa-card__subtitle{color:var(--color-content-on-brand, rgba(255, 255, 255, .8))}
.esa-card__icon{color:inherit;flex-shrink:0}
.esa-card__actions{display:flex;align-items:center;gap:var(--spacing-200, .5rem)}
.esa-card__body{padding:var(--_card-padding)}
.esa-card__footer{padding:var(--spacing-300, .75rem) var(--_card-padding);border-top:var(--border-width-default, 1px) solid var(--_card-header-border);background:var(--color-background-elevation-sunken, #f0f0f0)}
.breadcrumbs__items .esa-icon{color:var(--bcn-gray-400)}
.page-layout__title h1 .esa-icon{color:var(--bcn-gray-1000);flex-shrink:0}
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
- `--card-bg`: #fcfcfc _(component)_
- `--card-border-color`: #cecece _(component)_
- `--card-header-bg`: transparent _(component)_
- `--color-background-brand`: #46a758 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #f0f0f0 _(semantic)_
- `--color-border-default`: #cecece _(semantic)_
- `--color-border-default-subtle`: #d9d9d9 _(semantic)_
- `--color-border-light`: #efefef _(component)_
- `--color-content-default`: #202020 _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #646464 _(semantic)_
- `--color-content-on-brand`: #fcfcfc _(semantic)_
- `--color-danger`: #ce2c31 _(component)_
- `--color-primary`: #005862 _(component)_
- `--color-primary-hover`: #00474f _(component)_
- `--color-secondary`: #00918b _(component)_
- `--color-text-muted`: #7c7c7c _(component)_
- `--color-text-primary`: #3d3d3d _(component)_
- `--color-text-secondary`: #525252 _(component)_
- `--color-text-tertiary`: #656565 _(component)_
- `--elevation-2`: 0 2px 12px 0 rgba(0, 0, 0, .04) _(semantic)_
- `--font-weight-medium`: 500 _(component)_
- `--font-weight-semibold`: 550 _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-md`: .5rem _(semantic)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-700`: 3rem _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(component)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 350 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-label-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-font-weight`: 500 _(semantic)_
- `--typography-label-md-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-line-height`: 1.6 _(semantic)_
- `--typography-label-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-strong-font-weight`: 550 _(semantic)_
- `--typography-label-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-strong-line-height`: 1.6 _(semantic)_
- `--typography-title-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-title-sm-strong-font-size`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(semantic)_
- `--typography-title-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-title-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-title-sm-strong-line-height`: 1.6 _(semantic)_
