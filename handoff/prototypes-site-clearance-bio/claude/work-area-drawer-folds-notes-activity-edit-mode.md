# Work-area drawer — folds (notes / activity) & edit mode

The demoted reference detail: two EsaCollapsible rows with live counts — Notes (the append-only monitor notes: date · author · verbatim text, each with a delete affordance) and Activity (the read-only derived change log for this site). Below them, the footer's "Edit site details" swaps the drawer body to the site-level edit form: the clearance-visit date picker + the Add-note block (Date, Author, Note — Leah's paste-the-biologist-email flow).

## Key decisions
- Notes are first-class append-only records (date, author, text — author is the biologist who SENT it, distinct from the create-user audit). A note can be DELETED but never edited — the delete affordance rides each read-mode note row; the edit form only ADDS.
- The old verbatim "seed note" special case is gone: every biologist email is just a note in the same list, so the model matches the epic's single WorkAreaClearanceNote table.
- The Buffer-conflicts fold was cut with the spec: the observation drawer's "Work areas within buffer" list covers the relationship from the fact's side, and the provisional-block marker/chip already tells the site's side.
- The Activity fold here and the Activity TAB feed are the same events for this site — one save updates both.

## Gotchas
- Notes render newest-first; deleting logs an Activity entry and re-renders every surface.
- Edit mode is site-level only (visit date + add-note) — reviews are edited inline in read mode, never here.
- The Notes fold hides when empty; do not assume both folds are always present.

## Done when
- Notes list date · author · verbatim text with working delete (no edit); Add note captures Date/Author/Note and appends; the Activity fold matches this site's feed entries; Edit mode offers exactly one date field.

## Markup
```html
<div class="wa__more">
  <span class="wa__more-item" id="wa-notes-col">
    <details class="esa-collapsible esa-collapsible--flush">
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
            <path
              d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
            ></path>
            <path
              d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
            ></path>
          </svg>
        </span>
        <span class="esa-collapsible__title">Notes (1)</span>
      </summary>
      <div class="esa-collapsible__body typography-body-md">
        <ul class="wa__notes-added" id="wa-notes-added">
          <li class="wnote">
            <div class="wnote__head">
              <span class="wnote__meta">May 18, 2026 · C. Anderson (ESA)</span
              ><span class="wnote__del"
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                    aria-label="Delete note"
                    title="Delete note"
                  >
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
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        <line x1="10" x2="10" y1="11" y2="17"></line>
                        <line x1="14" x2="14" y1="11" y2="17"></line>
                      </svg>
                    </span></button></span
              ></span>
            </div>
            <p class="wnote__text">
              This was the site clearance visit that identified the SWHA nest on 5/18.
            </p>
          </li>
        </ul>
      </div>
    </details>
  </span>
  <span class="wa__more-item">
    <details class="esa-collapsible esa-collapsible--flush">
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
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
            <path d="M3 3v5h5"></path>
            <path d="M12 7v5l4 2"></path>
          </svg>
        </span>
        <span class="esa-collapsible__title">Activity</span>
      </summary>
      <div class="esa-collapsible__body typography-body-md">
        <ul class="wa__activity" id="wa-activity">
          <li class="entry entry--empty">No changes yet — edits made here are logged.</li>
        </ul>
      </div>
    </details>
  </span>
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
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.esa-button{--_btn-pad-y: var(--spacing-300, .75rem);--_btn-padding-x: var(--spacing-300, .75rem);--_btn-radius: var(--button-radius-md, .5rem);--_accent: var(--color-background-brand, #46a758);--_accent-hover: var(--color-background-brand-hover, #3e9b4f);--_on: var(--color-content-default-knockout, #fcfcfc);--_accent-text: var(--_accent);--_btn-tint-hover: color-mix(in srgb, var(--_accent) 8%, transparent);--_btn-tint-active: color-mix(in srgb, var(--_accent) 14%, transparent);display:inline-block}
.esa-button--xs{--_btn-pad-y: var(--spacing-200, .5rem);--_btn-padding-x: var(--spacing-200, .5rem);--_btn-radius: var(--button-radius-xs, 4px)}
.esa-button--sm{--_btn-pad-y: var(--spacing-250, .625rem);--_btn-padding-x: var(--spacing-250, .625rem);--_btn-radius: var(--button-radius-sm, 4px)}
.esa-button--lg{--_btn-pad-y: var(--spacing-400, 1rem);--_btn-padding-x: var(--spacing-400, 1rem);--_btn-radius: var(--button-radius-lg, 8px)}
.esa-button--variant-primary{--_accent-text: var(--color-content-brand)}
.esa-button--variant-secondary{--_accent: var(--color-background-brand-muted);--_accent-hover: var(--color-background-brand-muted-hover);--_on: var(--color-content-on-brand-muted, var(--color-content-default));--_accent-text: var(--color-content-brand);--_accent-border: var(--color-border-default-strong, #bbbbbb)}
.esa-button--variant-danger{--_accent: var(--color-background-utility-danger);--_accent-hover: var(--color-background-utility-danger-hover);--_accent-text: var(--color-content-utility-danger)}
.esa-button--variant-success{--_accent: var(--color-background-utility-success);--_accent-hover: var(--color-background-utility-success-hover);--_on: var(--color-content-on-utility-success);--_accent-text: var(--color-content-utility-success)}
.esa-button--variant-warning{--_accent: var(--color-background-utility-warning);--_accent-hover: var(--color-background-utility-warning-hover);--_on: var(--button-on-warning, var(--color-content-on-utility-warning, #4f3422));--_accent-text: var(--color-content-utility-warning)}
.esa-button--variant-info{--_accent: var(--color-background-utility-info);--_accent-hover: var(--color-background-utility-info-hover);--_accent-text: var(--color-content-utility-info)}
.esa-button--variant-ai{--_accent: var(--color-background-ai);--_accent-hover: var(--color-background-ai-hover);--_accent-text: var(--color-content-ai)}
.esa-button--appearance-fill .esa-button__native{background:var(--_accent);color:var(--_on);border-color:var(--_accent-border, transparent)}
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled){background:var(--_accent-hover)}
.esa-button--appearance-fill.esa-button--active .esa-button__native{background:var(--_accent-hover)}
.esa-button--appearance-outline .esa-button__native,.esa-button--appearance-dashed .esa-button__native{background:transparent;color:var(--_accent-text);border-color:var(--_accent)}
.esa-button--appearance-dashed .esa-button__native{border-style:dashed}
.esa-button--appearance-outline .esa-button__native:hover:not(:disabled),.esa-button--appearance-dashed .esa-button__native:hover:not(:disabled){background:var(--_btn-tint-hover)}
.esa-button--appearance-outline.esa-button--active .esa-button__native,.esa-button--appearance-dashed.esa-button--active .esa-button__native{background:var(--_btn-tint-active)}
.esa-button--appearance-soft .esa-button__native{background:color-mix(in srgb,var(--color-background-elevation-sunken, #f0f0f0) 45%,var(--color-background-elevation-raised, #fcfcfc));color:var(--_accent-text);border-color:var(--color-border-default-strong, #bbbbbb)}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),.esa-button--appearance-soft.esa-button--active .esa-button__native{background:var(--_accent);color:var(--_on);border-color:var(--_accent)}
.esa-button--variant-ghost .esa-button__native{background:transparent;color:var(--color-content-default, #202020);border-color:transparent}
.esa-button--variant-ghost.esa-button--appearance-outline .esa-button__native,.esa-button--variant-ghost.esa-button--appearance-dashed .esa-button__native{border-color:var(--color-border-default, #cecece)}
.esa-button--variant-ghost .esa-button__native:hover:not(:disabled),.esa-button--variant-ghost.esa-button--active .esa-button__native{background:var(--color-background-elevation-sunken, #f0f0f0)}
.esa-button--variant-chrome .esa-button__native{background:transparent;color:inherit;border-color:transparent}
.esa-button--variant-chrome .esa-button__native:hover:not(:disabled),.esa-button--variant-chrome.esa-button--active .esa-button__native,.esa-button--variant-chrome.esa-button--current .esa-button__native{background:var(--button-chrome-bg-hover, color-mix(in srgb, currentColor 14%, transparent))}
.esa-button--variant-chrome .esa-button__native:focus-visible{outline-color:currentColor}
.esa-button__native{display:inline-flex;align-items:center;justify-content:center;gap:var(--spacing-200, 8px);width:100%;padding-block:var(--_btn-pad-y);padding-inline:var(--_btn-padding-x);border:var(--border-width-default, 1px) solid transparent;border-radius:var(--_btn-radius);text-decoration:none;cursor:pointer;transition:background var(--transition-fast, .15s ease),border-color var(--transition-fast, .15s ease);-webkit-appearance:none;appearance:none}
.esa-button__native:focus-visible{outline:var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);outline-offset:var(--focus-ring-offset, 2px)}
.esa-button--disabled{opacity:.5;cursor:not-allowed;pointer-events:none}
.esa-button--icon-only .esa-button__native{padding-inline:var(--_btn-pad-y);aspect-ratio:1}
summary.esa-button{list-style:none;cursor:pointer}
summary.esa-button::-webkit-details-marker{display:none}
summary.esa-button:focus-visible{outline:var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);outline-offset:var(--focus-ring-offset, 2px);border-radius:var(--_btn-radius)}
summary.esa-button--variant-chrome:focus-visible{outline-color:currentColor}
.esa-button__label{white-space:nowrap}
.esa-button__label--hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
.esa-button__spinner{display:inline-block;width:1em;height:1em;border:2px solid currentColor;border-right-color:transparent;border-radius:50%;animation:esa-button-spin var(--animation-spin, .75s linear infinite)}
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
.typography-body-md{font-family:var(--typography-body-md-font-family);font-size:var(--typography-body-md-font-size);font-weight:var(--typography-body-md-font-weight);line-height:var(--typography-body-md-line-height);letter-spacing:var(--typography-body-md-letter-spacing)}
.typography-label-sm-strong{font-family:var(--typography-label-sm-strong-font-family);font-size:var(--typography-label-sm-strong-font-size);font-weight:var(--typography-label-sm-strong-font-weight);line-height:var(--typography-label-sm-strong-line-height);letter-spacing:var(--typography-label-sm-strong-letter-spacing)}
.typography-microcopy-xs{font-family:var(--typography-microcopy-xs-font-family);font-size:var(--typography-microcopy-xs-font-size);font-weight:var(--typography-microcopy-xs-font-weight);line-height:var(--typography-microcopy-xs-line-height);letter-spacing:var(--typography-microcopy-xs-letter-spacing)}
.typography-microcopy-xs-subtle{font-family:var(--typography-microcopy-xs-subtle-font-family);font-size:var(--typography-microcopy-xs-subtle-font-size);font-weight:var(--typography-microcopy-xs-subtle-font-weight);line-height:var(--typography-microcopy-xs-subtle-line-height);letter-spacing:var(--typography-microcopy-xs-subtle-letter-spacing)}
.typography-microcopy-xs-strong{font-family:var(--typography-microcopy-xs-strong-font-family);font-size:var(--typography-microcopy-xs-strong-font-size);font-weight:var(--typography-microcopy-xs-strong-font-weight);line-height:var(--typography-microcopy-xs-strong-line-height);letter-spacing:var(--typography-microcopy-xs-strong-letter-spacing)}
.comp-picker__trigger .esa-icon{color:var(--color-text-tertiary);flex-shrink:0}
.entry{display:flex;align-items:flex-start;gap:var(--spacing-300);padding:var(--spacing-250) var(--spacing-300)}
.entry__badge{flex-shrink:0;margin-top:1px;padding:.125rem .375rem;border-radius:var(--radius-100);font-family:var(--font-mono, monospace);font-size:var(--type-size-100);font-weight:var(--font-weight-semibold);line-height:1.4;letter-spacing:0;text-transform:uppercase;white-space:nowrap}
.entry__badge--obs{color:var(--obs-color-strong);background:color-mix(in srgb,var(--obs-color) 12%,white)}
.entry__badge--wa{color:var(--color-primary);background:color-mix(in srgb,var(--color-primary) 10%,white)}
.entry__body{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.entry__line{margin:0;font-size:.875rem;line-height:1.45}
.entry__type{font-weight:var(--font-weight-semibold);color:var(--color-text-primary)}
.entry__sep{color:var(--color-text-tertiary)}
.entry__primary{color:var(--color-text-primary)}
.entry__line .gate__chipwrap{vertical-align:text-bottom}
.entry__secondary{margin:0;font-size:.875rem;line-height:1.45;color:var(--color-text-secondary)}
.entry__meta{flex-shrink:0;font-size:.8125rem;color:var(--color-text-tertiary);white-space:nowrap;text-align:right}
.entry--empty{padding:var(--spacing-200) 0;font-size:.875rem;color:var(--color-text-tertiary)}
.entry--card{background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-300);cursor:pointer;transition:background .12s ease,border-color .12s ease}
.entry--card:hover{background:var(--grid-row-bg-hover);border-color:var(--color-border-strong)}
#wa-read>.wa-comments,#wa-read>.wa__more{margin-top:var(--spacing-500);padding-top:var(--spacing-500);border-top:1px solid var(--color-border)}
.wa__more{display:flex;flex-direction:column}
.wa__more-item{display:block}
.wa__more-item[hidden]{display:none}
.wa__more-item+.wa__more-item{border-top:1px solid var(--color-border-light)}
.wa__more-item[hidden]+.wa__more-item{border-top:none}
.wa__section .esa-icon{flex-shrink:0;color:var(--color-text-secondary)}
.wa__footer-start .esa-button__label{display:inline-flex;align-items:center;gap:var(--spacing-150)}
.od__impact .entry__meta{white-space:normal;max-width:36%}
.wa__notes-added{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:var(--spacing-300)}
.wnote{display:flex;flex-direction:column;gap:var(--spacing-100);padding:var(--spacing-300) var(--spacing-400);background:var(--color-background);border:1px solid var(--color-border);border-radius:var(--radius-300)}
.wnote__head{display:flex;align-items:center;justify-content:space-between;gap:var(--spacing-300)}
.wnote__meta{font-size:.8125rem;font-weight:var(--font-weight-semibold);color:var(--color-text-tertiary)}
.wnote__del{flex-shrink:0}
.wnote__text{margin:0;font-size:1rem;line-height:1.6;color:var(--color-text-secondary);white-space:pre-line}
.wa__activity{list-style:none;margin:0;padding:0;display:flex;flex-direction:column}
.wa__activity .entry:not(.entry--empty){padding:var(--spacing-200) 0}
.wa__activity .entry+.entry{border-top:1px solid var(--color-border-light)}
.esa-collapsible{border:var(--border-width-default, 1px) solid var(--color-border-default, #cecece);border-radius:var(--radius-md, .5rem);background:var(--color-background-elevation-raised, #fcfcfc)}
.esa-collapsible--flush{border:none;border-radius:0;background:transparent}
.esa-collapsible--flush>.esa-collapsible__summary,.esa-collapsible--flush>.esa-collapsible__body{padding-inline:0}
.esa-collapsible__summary{display:flex;align-items:center;gap:var(--spacing-200, .5rem);padding:var(--spacing-300, .75rem) var(--spacing-400, 1rem);color:var(--color-content-default, #202020);cursor:pointer;list-style:none}
.esa-collapsible__summary::-webkit-details-marker{display:none}
.esa-collapsible__summary:after{content:"";width:8px;height:8px;border-right:2px solid var(--color-content-default-secondary, #646464);border-bottom:2px solid var(--color-content-default-secondary, #646464);transform:rotate(-45deg);transition:transform .15s ease;margin-left:auto}
.esa-collapsible[open]>.esa-collapsible__summary:after{transform:rotate(45deg)}
.esa-collapsible__summary .esa-icon{flex-shrink:0;color:var(--color-content-default-secondary, #646464)}
.esa-collapsible__body{display:flex;flex-direction:column;gap:var(--spacing-400, 1rem);padding:0 var(--spacing-400, 1rem) var(--spacing-400, 1rem)}
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
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: rgba(255, 255, 255, .92) _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--border-width-default`: 1px _(semantic)_
- `--button-chrome-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--button-on-warning`: #ffffff _(component)_
- `--button-radius-lg`: .5rem _(component)_
- `--button-radius-md`: .5rem _(component)_
- `--button-radius-sm`: .25rem _(component)_
- `--button-radius-xs`: .25rem _(component)_
- `--color-background`: #fafafa _(component)_
- `--color-background-ai`: #a18072 _(semantic)_
- `--color-background-ai-hover`: #957468 _(semantic)_
- `--color-background-brand`: #46a758 _(semantic)_
- `--color-background-brand-hover`: #3e9b4f _(semantic)_
- `--color-background-brand-muted`: #e9f6e9 _(semantic)_
- `--color-background-brand-muted-hover`: #daf1db _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #f0f0f0 _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-info`: #0d74ce _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-success`: #218358 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-warning`: #ffc53d _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-border`: #dcdcdc _(component)_
- `--color-border-default`: #cecece _(semantic)_
- `--color-border-default-strong`: #bbbbbb _(semantic)_
- `--color-border-light`: #efefef _(component)_
- `--color-border-strong`: #bdbdbd _(component)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #2a7e3b _(semantic)_
- `--color-content-default`: #202020 _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #646464 _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--color-danger`: #ce2c31 _(component)_
- `--color-primary`: #005862 _(component)_
- `--color-surface`: #fcfcfc _(component)_
- `--color-text-primary`: #3d3d3d _(component)_
- `--color-text-secondary`: #525252 _(component)_
- `--color-text-tertiary`: #656565 _(component)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-mono`: "Roboto Mono", ui-monospace, monospace _(component)_
- `--font-weight-semibold`: 550 _(component)_
- `--grid-row-bg-hover`: #f0f0f0 _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--obs-color`: #7b5ea7 _(component)_
- `--obs-color-strong`: #5b3f87 _(component)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-md`: .5rem _(semantic)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(component)_
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
- `--typography-microcopy-xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-font-weight`: 500 _(semantic)_
- `--typography-microcopy-xs-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-subtle-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-subtle-line-height`: 1 _(semantic)_
