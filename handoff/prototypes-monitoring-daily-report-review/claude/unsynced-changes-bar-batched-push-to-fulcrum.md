# Unsynced-changes bar (batched push to Fulcrum)

Corrections to monitoring data are held in Beacon as PENDING until the reviewer pushes them to Fulcrum together. The bar counts them and offers Review (a dialog listing each correction old → new, with per-row Undo) and Push to Fulcrum.

## Key decisions
- Batch-then-push, not instant sync (product decision): reviewers check a set of corrections before anything leaves Beacon.
- Several edits to one field collapse into ONE pending correction; editing a field back to the value Fulcrum holds withdraws it (logged as "Withdrawn").
- The bar disappears at zero pending — no "0 corrections" state.

## Gotchas
- The "Fulcrum value" shown in Review is what Fulcrum holds NOW, not the first edit's from-value — after a partial push those differ.
- Push can also be requested from the report preview ("Push to Fulcrum first") via a document-level bcn-dmr-push-request event; both paths must run the same push + confirmation.

## Done when
- Editing a Fulcrum-data field (e.g. Precipitation) raises the count by one and marks the field "Pending sync".
- Push to Fulcrum clears the bar and turns every pending marker into "Synced"; the change log records "Pushed N changes to Fulcrum".

## Markup
```html
<div class="bcn-dmr-sync-bar" data-bcn-dmr-sync-bar="">
  <div class="esa-alert-box esa-alert-box--warning typography-body-sm">
    <div class="esa-alert-box__icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path
          d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
        ></path>
        <path d="M12 9v4"></path>
        <path d="M12 17h.01"></path>
      </svg>
    </div>
    <div class="esa-alert-box__body">
      <strong class="esa-alert-box__title typography-label-sm-strong">Not synced</strong>
      <div class="esa-alert-box__message">
        <div class="bcn-dmr-sync-bar__content repel" data-gap="sm">
          <p class="bcn-dmr-sync-bar__message">
            <span data-bcn-dmr-sync-count="">2</span>
            <span data-bcn-dmr-sync-noun="">corrections</span> waiting to push to Fulcrum.
          </p>
          <div class="cluster" data-gap="xs">
            <span
              class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                data-bcn-dmr-sync-review="true"
              >
                <span class="esa-button__label">Review</span>
              </button></span
            ><span
              class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                data-bcn-dmr-sync-push="true"
              >
                <span class="esa-button__label">Push to Fulcrum</span>
              </button></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <script type="module">
    document.addEventListener(`click`, (e) => {
      let t = e.target.closest?.(`[data-esa-alert-dismiss]`);
      if (!t) return;
      let n = t.closest(`.esa-alert-box`);
      if (!n) return;
      let r = Array.from(document.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
          (e) => !n.contains(e) && e.offsetParent !== null,
        ),
        i =
          r.find(
            (e) => n.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
          ) ?? r[r.length - 1];
      ((n.style.display = `none`),
        n.dispatchEvent(new CustomEvent(`dismissed`, { bubbles: !0 })),
        i?.focus());
    });
  </script>
  <esa-dialog
    heading="Corrections waiting to sync"
    size="lg"
    data-bcn-dmr-sync-dialog="true"
    ><ul class="bcn-dmr-sync-bar__list" role="list" data-bcn-dmr-sync-list=""></ul>
    <span
      class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
      slot="footer"
      ><button
        class="esa-button__native typography-microcopy-md"
        type="button"
        data-bcn-dmr-sync-dialog-push="true"
      >
        <span class="esa-button__label">Push to Fulcrum</span>
      </button></span
    ><span
      class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--md"
      slot="footer"
      ><button
        class="esa-button__native typography-microcopy-md"
        type="button"
        data-bcn-dmr-sync-dialog-cancel="true"
      >
        <span class="esa-button__label">Cancel</span>
      </button></span
    ></esa-dialog
  ><template data-bcn-dmr-sync-row=""
    ><li class="bcn-dmr-sync-bar__row repel" data-gap="md" data-astro-cid-6tzd3hkt="">
      <div class="stack" data-gap="3xs" data-astro-cid-6tzd3hkt="">
        <span
          class="typography-label-md-strong"
          data-row-field=""
          data-astro-cid-6tzd3hkt=""
        ></span
        ><span class="typography-body-md" data-astro-cid-6tzd3hkt=""
          ><span data-row-from="" data-astro-cid-6tzd3hkt=""></span
          ><span aria-hidden="true" data-astro-cid-6tzd3hkt="">→</span
          ><span class="visually-hidden" data-astro-cid-6tzd3hkt="">changed to</span
          ><span data-row-to="" data-astro-cid-6tzd3hkt=""></span></span
        ><span
          class="bcn-dmr-sync-bar__meta typography-body-sm"
          data-row-meta=""
          data-astro-cid-6tzd3hkt=""
        ></span>
      </div>
      <span
        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
        data-astro-cid-5nhxdd72=""
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-bcn-dmr-sync-undo="true"
          data-astro-cid-6tzd3hkt="true"
          data-astro-cid-5nhxdd72=""
        >
          <span class="esa-button__label" data-astro-cid-5nhxdd72="">Undo</span>
        </button></span
      >
    </li></template
  >
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
/* Both message nodes ALWAYS render — a live region created at the same moment as
       its text is routinely not announced, so it has to already exist. When empty they
       carry .visually-hidden, which takes them out of flow: .field is a flex column
       with a gap, so an in-flow empty node would spend 4px of dead space each.
       Deliberately NOT display:none, which drops them from the accessibility tree. */

    .container {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-100, 4px);
    }
/* Both message nodes are ALWAYS rendered — a live region created at the same moment
       as its text is routinely not announced, so it has to already exist. When there is
       nothing to say they carry .visually-hidden, which takes them out of flow: .field
       is a flex column with a gap, so an in-flow empty node would spend 4px of dead
       space per message. Deliberately NOT display:none, which would drop them from the
       accessibility tree and defeat the arrangement entirely. */

    .container {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-100, 4px);
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
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-md-subtle {
  font-family: var(--typography-microcopy-md-subtle-font-family);
  font-size: var(--typography-microcopy-md-subtle-font-size);
  font-weight: var(--typography-microcopy-md-subtle-font-weight);
  line-height: var(--typography-microcopy-md-subtle-line-height);
  letter-spacing: var(--typography-microcopy-md-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-microcopy-md-strong {
  font-family: var(--typography-microcopy-md-strong-font-family);
  font-size: var(--typography-microcopy-md-strong-font-size);
  font-weight: var(--typography-microcopy-md-strong-font-weight);
  line-height: var(--typography-microcopy-md-strong-line-height);
  letter-spacing: var(--typography-microcopy-md-strong-letter-spacing);
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
.visually-hidden--focusable:focus,
.visually-hidden--focusable:focus-within,
.visually-hidden--focusable:active {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  white-space: normal;
  clip: auto;
  clip-path: none;
}
.bcn-dmr-sync-bar[hidden]{display:none}
.bcn-dmr-sync-bar__content{align-items:center}
.bcn-dmr-sync-bar__message{margin:0}
.bcn-dmr-sync-bar__list{margin:0;padding:0;list-style:none}
.bcn-dmr-sync-bar__row{padding-block:var(--spacing-300,.75rem);align-items:center}
.bcn-dmr-sync-bar__row+.bcn-dmr-sync-bar__row{border-block-start:var(--border-width-default,1px) solid var(--color-border-default-subtle,#d9d9d9)}
.bcn-dmr-sync-bar__meta{color:var(--color-content-default-secondary,#646464)}
.esa-button{--_btn-pad-y:var(--spacing-300,.75rem);--_btn-padding-x:var(--spacing-300,.75rem);--_btn-radius:var(--button-radius-md,.5rem);--_accent:var(--color-background-brand,#46a758);--_accent-hover:var(--color-background-brand-hover,#3e9b4f);--_on:var(--color-content-default-knockout,#fcfcfc);--_accent-text:var(--_accent);--_btn-tint-hover:color-mix(in srgb, var(--_accent) 8%, transparent);--_btn-tint-active:color-mix(in srgb, var(--_accent) 14%, transparent);display:inline-block}
.esa-button--xs{--_btn-pad-y:var(--spacing-200,.5rem);--_btn-padding-x:var(--spacing-200,.5rem);--_btn-radius:var(--button-radius-xs,4px)}
.esa-button--sm{--_btn-pad-y:var(--spacing-250,.625rem);--_btn-padding-x:var(--spacing-250,.625rem);--_btn-radius:var(--button-radius-sm,4px)}
.esa-button--lg{--_btn-pad-y:var(--spacing-400,1rem);--_btn-padding-x:var(--spacing-400,1rem);--_btn-radius:var(--button-radius-lg,8px)}
.esa-button--variant-primary{--_accent-text:var(--color-content-brand)}
.esa-button--variant-secondary{--_accent:var(--color-background-brand-muted);--_accent-hover:var(--color-background-brand-muted-hover);--_on:var(--color-content-on-brand-muted,var(--color-content-default));--_accent-text:var(--color-content-brand);--_accent-border:var(--color-border-default-strong,#bbb)}
.esa-button--variant-danger{--_accent:var(--color-background-utility-danger);--_accent-hover:var(--color-background-utility-danger-hover);--_accent-text:var(--color-content-utility-danger)}
.esa-button--variant-success{--_accent:var(--color-background-utility-success);--_accent-hover:var(--color-background-utility-success-hover);--_on:var(--color-content-on-utility-success);--_accent-text:var(--color-content-utility-success)}
.esa-button--variant-warning{--_accent:var(--color-background-utility-warning);--_accent-hover:var(--color-background-utility-warning-hover);--_on:var(--button-on-warning,var(--color-content-on-utility-warning,#4f3422));--_accent-text:var(--color-content-utility-warning)}
.esa-button--variant-info{--_accent:var(--color-background-utility-info);--_accent-hover:var(--color-background-utility-info-hover);--_accent-text:var(--color-content-utility-info)}
.esa-button--variant-ai{--_accent:var(--color-background-ai);--_accent-hover:var(--color-background-ai-hover);--_accent-text:var(--color-content-ai)}
.esa-button--appearance-fill .esa-button__native{background:var(--_accent);color:var(--_on);border-color:var(--_accent-border,transparent)}
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled),.esa-button--appearance-fill.esa-button--active .esa-button__native{background:var(--_accent-hover)}
.esa-button--appearance-outline .esa-button__native,.esa-button--appearance-dashed .esa-button__native{color:var(--_accent-text);border-color:var(--_accent);background:0 0}
.esa-button--appearance-dashed .esa-button__native{border-style:dashed}
.esa-button--appearance-outline .esa-button__native:hover:not(:disabled),.esa-button--appearance-dashed .esa-button__native:hover:not(:disabled){background:var(--_btn-tint-hover)}
.esa-button--appearance-outline.esa-button--active .esa-button__native,.esa-button--appearance-dashed.esa-button--active .esa-button__native{background:var(--_btn-tint-active)}
.esa-button--appearance-soft .esa-button__native{background:color-mix(in srgb, var(--color-background-elevation-sunken,#f0f0f0) 45%, var(--color-background-elevation-raised,#fcfcfc));color:var(--_accent-text);border-color:var(--color-border-default-strong,#bbb)}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),.esa-button--appearance-soft.esa-button--active .esa-button__native{background:var(--_accent);color:var(--_on);border-color:var(--_accent)}
.esa-button--variant-ghost .esa-button__native{color:var(--color-content-default,#202020);background:0 0;border-color:#0000}
.esa-button--variant-ghost.esa-button--appearance-outline .esa-button__native,.esa-button--variant-ghost.esa-button--appearance-dashed .esa-button__native{border-color:var(--color-border-default,#cecece)}
.esa-button--variant-ghost .esa-button__native:hover:not(:disabled),.esa-button--variant-ghost.esa-button--active .esa-button__native{background:var(--color-background-elevation-sunken,#f0f0f0)}
.esa-button--variant-chrome .esa-button__native{color:inherit;background:0 0;border-color:#0000}
.esa-button--variant-chrome .esa-button__native:hover:not(:disabled),.esa-button--variant-chrome.esa-button--active .esa-button__native,.esa-button--variant-chrome.esa-button--current .esa-button__native{background:var(--button-chrome-bg-hover,color-mix(in srgb, currentColor 14%, transparent))}
.esa-button--variant-chrome .esa-button__native:focus-visible{outline-color:currentColor}
.esa-button__native{justify-content:center;align-items:center;gap:var(--spacing-200,8px);width:100%;padding-block:var(--_btn-pad-y);padding-inline:var(--_btn-padding-x);border:var(--border-width-default,1px) solid transparent;border-radius:var(--_btn-radius);cursor:pointer;transition:background var(--transition-fast,.15s ease), border-color var(--transition-fast,.15s ease);-webkit-appearance:none;appearance:none;text-decoration:none;display:inline-flex}
.esa-button__native:focus-visible{outline:var(--focus-ring-width,2px) solid var(--focus-ring-color,#3e9b4f);outline-offset:var(--focus-ring-offset,2px)}
.esa-button--disabled{opacity:.5;cursor:not-allowed;pointer-events:none}
.esa-button--icon-only .esa-button__native{padding-inline:var(--_btn-pad-y);aspect-ratio:1}
summary.esa-button{cursor:pointer;list-style:none}
summary.esa-button::-webkit-details-marker{display:none}
summary.esa-button:focus-visible{outline:var(--focus-ring-width,2px) solid var(--focus-ring-color,#3e9b4f);outline-offset:var(--focus-ring-offset,2px);border-radius:var(--_btn-radius)}
summary.esa-button--variant-chrome:focus-visible{outline-color:currentColor}
.esa-button__label{white-space:nowrap}
.esa-button__label--hidden{clip-path:inset(50%);white-space:nowrap;width:1px;height:1px;position:absolute;overflow:hidden}
.esa-button__spinner{width:1em;height:1em;animation:esa-button-spin var(--animation-spin,.75s linear infinite);border:2px solid;border-right-color:#0000;border-radius:50%;display:inline-block}
.typography-body-md{font-family:var(--typography-body-md-font-family);font-size:var(--typography-body-md-font-size);font-weight:var(--typography-body-md-font-weight);line-height:var(--typography-body-md-line-height);letter-spacing:var(--typography-body-md-letter-spacing)}
.typography-body-sm{font-family:var(--typography-body-sm-font-family);font-size:var(--typography-body-sm-font-size);font-weight:var(--typography-body-sm-font-weight);line-height:var(--typography-body-sm-line-height);letter-spacing:var(--typography-body-sm-letter-spacing)}
.typography-label-sm-strong{font-family:var(--typography-label-sm-strong-font-family);font-size:var(--typography-label-sm-strong-font-size);font-weight:var(--typography-label-sm-strong-font-weight);line-height:var(--typography-label-sm-strong-line-height);letter-spacing:var(--typography-label-sm-strong-letter-spacing)}
.typography-label-md-strong{font-family:var(--typography-label-md-strong-font-family);font-size:var(--typography-label-md-strong-font-size);font-weight:var(--typography-label-md-strong-font-weight);line-height:var(--typography-label-md-strong-line-height);letter-spacing:var(--typography-label-md-strong-letter-spacing)}
.typography-microcopy-xs{font-family:var(--typography-microcopy-xs-font-family);font-size:var(--typography-microcopy-xs-font-size);font-weight:var(--typography-microcopy-xs-font-weight);line-height:var(--typography-microcopy-xs-line-height);letter-spacing:var(--typography-microcopy-xs-letter-spacing)}
.typography-microcopy-md{font-family:var(--typography-microcopy-md-font-family);font-size:var(--typography-microcopy-md-font-size);font-weight:var(--typography-microcopy-md-font-weight);line-height:var(--typography-microcopy-md-line-height);letter-spacing:var(--typography-microcopy-md-letter-spacing)}
.typography-microcopy-xs-subtle{font-family:var(--typography-microcopy-xs-subtle-font-family);font-size:var(--typography-microcopy-xs-subtle-font-size);font-weight:var(--typography-microcopy-xs-subtle-font-weight);line-height:var(--typography-microcopy-xs-subtle-line-height);letter-spacing:var(--typography-microcopy-xs-subtle-letter-spacing)}
.typography-microcopy-md-subtle{font-family:var(--typography-microcopy-md-subtle-font-family);font-size:var(--typography-microcopy-md-subtle-font-size);font-weight:var(--typography-microcopy-md-subtle-font-weight);line-height:var(--typography-microcopy-md-subtle-line-height);letter-spacing:var(--typography-microcopy-md-subtle-letter-spacing)}
.typography-microcopy-xs-strong{font-family:var(--typography-microcopy-xs-strong-font-family);font-size:var(--typography-microcopy-xs-strong-font-size);font-weight:var(--typography-microcopy-xs-strong-font-weight);line-height:var(--typography-microcopy-xs-strong-line-height);letter-spacing:var(--typography-microcopy-xs-strong-letter-spacing)}
.typography-microcopy-md-strong{font-family:var(--typography-microcopy-md-strong-font-family);font-size:var(--typography-microcopy-md-strong-font-size);font-weight:var(--typography-microcopy-md-strong-font-weight);line-height:var(--typography-microcopy-md-strong-line-height);letter-spacing:var(--typography-microcopy-md-strong-letter-spacing)}
.visually-hidden{white-space:nowrap;clip:rect(0 0 0 0);clip-path:inset(50%);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}
.visually-hidden--focusable:focus,.visually-hidden--focusable:focus-within,.visually-hidden--focusable:active{white-space:normal;clip:auto;clip-path:none;width:auto;height:auto;margin:0;position:static;overflow:visible}
.esa-alert-box{--_alert-bg:var(--color-background-utility-info-subtle,#fbfdff);--_alert-border:var(--color-border-utility-info,#acd8fc);--_alert-accent:var(--color-content-utility-info,#0d74ce);--_alert-icon-color:var(--_alert-accent);--_alert-title-color:var(--_alert-accent);--_alert-text-color:var(--alert-box-text-color,var(--color-content-default-secondary,#646464));align-items:flex-start;gap:var(--spacing-300,.75rem);padding:var(--spacing-300,.75rem) var(--spacing-400,1rem);border:var(--border-width-default,1px) solid var(--_alert-border);border-radius:var(--radius-md,.5rem);background:var(--_alert-bg);display:flex}
.esa-alert-box--success{--_alert-bg:var(--color-background-utility-success-subtle,#fbfefc);--_alert-border:var(--color-border-utility-success,#adddc0);--_alert-accent:var(--color-content-utility-success,#218358)}
.esa-alert-box--warning{--_alert-bg:var(--color-background-utility-warning-subtle,#fefdfb);--_alert-border:var(--color-border-utility-warning,#f3d673);--_alert-accent:var(--color-content-utility-warning,#ab6400)}
.esa-alert-box--danger{--_alert-bg:var(--color-background-utility-danger-subtle,#fffcfc);--_alert-border:var(--color-border-utility-danger,#fdbdbe);--_alert-accent:var(--color-content-utility-danger,#ce2c31)}
.esa-alert-box__icon{color:var(--_alert-icon-color);flex-shrink:0;padding-top:1px}
.esa-alert-box__body{flex:1;min-width:0}
.esa-alert-box__title{color:var(--_alert-title-color);margin-bottom:var(--spacing-050,.125rem);display:block}
.esa-alert-box__message{color:var(--_alert-text-color)}
.esa-alert-box__dismiss{border-radius:var(--radius-sm,.25rem);width:24px;height:24px;color:var(--color-content-default-secondary,#646464);cursor:pointer;transition:color var(--transition-fast,.15s ease), background var(--transition-fast,.15s ease);background:0 0;border:none;flex-shrink:0;justify-content:center;align-items:center;padding:0;display:inline-flex}
.esa-alert-box__dismiss:hover{color:var(--color-content-default,#202020);background:var(--color-background-overlay-strong-hover,#0000000f)}
.esa-alert-box__dismiss:focus-visible{outline:var(--focus-ring-width,2px) solid var(--focus-ring-color,#3e9b4f);outline-offset:var(--focus-ring-offset,2px)}
.stack{--gap:var(--spacing-400,1rem);gap:var(--gap);flex-direction:column;display:flex}
.stack[data-split]>[data-split]{margin-block-end:auto}
.cluster{--gap:var(--spacing-300,.75rem);--align:center;--justify:flex-start;gap:var(--gap);align-items:var(--align);justify-content:var(--justify);flex-wrap:wrap;display:flex}
.repel{--gap:var(--spacing-400,1rem);--align:center;gap:var(--gap);align-items:var(--align);flex-wrap:wrap;justify-content:space-between;display:flex}
```

## Tokens
- `--alert-box-text-color`: #525252 _(component)_
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--border-width-default`: 1px _(semantic)_
- `--button-chrome-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--button-on-warning`: #fff _(component)_
- `--button-radius-lg`: .25rem _(component)_
- `--button-radius-md`: .25rem _(component)_
- `--button-radius-sm`: .25rem _(component)_
- `--button-radius-xs`: .25rem _(component)_
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-brand-hover`: #00474f _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-overlay-strong-hover`: #0000000d _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-danger-subtle`: #fffcfc _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-info-subtle`: #fbfdff _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-success-subtle`: #fbfefc _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-background-utility-warning-subtle`: #fefdfb _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-border-utility-danger`: #fdbdbe _(semantic)_
- `--color-border-utility-info`: #acd8fc _(semantic)_
- `--color-border-utility-success`: #adddc0 _(semantic)_
- `--color-border-utility-warning`: #f3d673 _(semantic)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--gap`: 1.5rem _(component)_
- `--radius-md`: .25rem _(semantic)_
- `--radius-sm`: .25rem _(semantic)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 400 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-body-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-body-sm-font-weight`: 400 _(semantic)_
- `--typography-body-sm-letter-spacing`: .01em _(semantic)_
- `--typography-body-sm-line-height`: 1.6 _(semantic)_
- `--typography-label-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-strong-font-weight`: 550 _(semantic)_
- `--typography-label-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-strong-line-height`: 1.6 _(semantic)_
- `--typography-label-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-label-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-strong-line-height`: 1.6 _(semantic)_
- `--typography-microcopy-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-microcopy-md-font-weight`: 500 _(semantic)_
- `--typography-microcopy-md-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-line-height`: 1 _(semantic)_
- `--typography-microcopy-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-microcopy-md-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-md-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-md-subtle-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-microcopy-md-subtle-font-weight`: 400 _(semantic)_
- `--typography-microcopy-md-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-subtle-line-height`: 1 _(semantic)_
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
- `--typography-microcopy-xs-subtle-font-weight`: 400 _(semantic)_
- `--typography-microcopy-xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-subtle-line-height`: 1 _(semantic)_
