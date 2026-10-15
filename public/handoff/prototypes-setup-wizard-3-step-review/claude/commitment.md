# Commitment

The commitment as a marked-up page in Beacon's document voice. Each requirement is a highlighter stroke over the words that are its basis, drawn by hand: every line of it its own stroke, ragged at the ends. Requirements take six bright inks in turn, in text order (yellow, pink, green, orange, blue, aqua). What the parse pulled out of those words (a species, a milestone, a season) is underlined inside the stroke. Plain text is what nothing will be tracked from: the gap a spot check reads. Plain text the review thinks binds has a wavy warning underline. The header: the code, the page (opens the PDF beside it), Edit (the ID, name and text), Confirm.

## Key decisions
- No borders on the highlighter, and no list numbers ("R1"). Selected is a heavier pass of the same ink; with one selected or hovered from the rail, the others' ink fades and their words stay black.
- The text is read only. Its words change by telling Aldo (split, merge, you missed this); a requirement's record changes in its side panel.
- Confirm is disabled while a blocking item is open (a type to check and a hand-marked commitment do not block).

## Gotchas
- The painter cuts a mark wherever a value's words start or end; the controller joins touching pieces of one requirement back into one mark so the stroke is not broken.
- The stroke is an SVG in a theme token (--bcn-marker-1 to -6, and -faint-1 to -6), stretched to each line with box-decoration-break: clone. The painter numbers each mark's turn in data-ink.

## Done when
- MMRP rows read the same way: each row's requirements tile its text, so a spot check reads the row against the PDF beside it.
- COA 11.7: the sentence about the U.S. Naval Observatory times is plain, between two strokes: the spot check sees what is not tracked.

## Markup
```html
<article class="bcn-sw3c" data-c="COA 11.1" aria-labelledby="sw3c-title">
  <header class="bcn-sw3c__head">
    <span data-c-badge=""><span class="bcn-cbadge bcn-cbadge--md">11.1</span></span>
    <div class="bcn-sw3c__acts">
      <span data-c-peek=""
        ><span
          class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            data-c-pages="true"
          >
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
                  d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                ></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path></svg></span
            ><span class="esa-button__label">p. 131</span>
          </button></span
        ></span
      ><span data-c-edit=""
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            aria-label="Edit commitment"
            title="Edit commitment"
          >
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
                  d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                ></path>
                <path d="m15 5 4 4"></path></svg
            ></span></button></span></span
      ><span data-c-confirm=""
        ><span
          class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            title=""
          >
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
                <path d="M20 6 9 17l-5-5"></path></svg></span
            ><span class="esa-button__label">Confirm</span>
          </button></span
        ></span
      ><span data-c-reopen=""
        ><span
          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
          ><button class="esa-button__native typography-microcopy-xs" type="button">
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
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path></svg></span
            ><span class="esa-button__label">Confirmed</span>
          </button></span
        ></span
      >
    </div>
    <h2 class="bcn-sw3c__title" id="sw3c-title" data-c-title="">
      Covered Species Observations
    </h2>
  </header>
  <p class="bcn-sw3c__parsing" data-c-parsing="" hidden="">Parsing</p>
  <div class="bcn-sw3c__text" data-c-text="">
    <p data-off="0">
      During all phases of Project construction, operations, and maintenance,
      <mark
        class="bcn-hl"
        data-sid="req_01M2ESMHSDAW774SZWKJC8RQZB"
        data-family="amber"
        data-shade="1"
        data-ink="1"
        data-suggested=""
        title="11.1:1 Report Covered Species Encounters and Halt Work"
        >Permittee shall direct all workers to inform the Designated Biologist(s),
        Fisheries Biologist(s), or Biological Monitor(s) if they encounter any Covered
        Species within or near the Project site. All Covered Activities with potential to
        take Covered Species shall cease until the animal moves from the Project site on
        its own accord.</mark
      >
      <mark
        class="bcn-hl"
        data-sid="req_01M2ESMHSDAW774SZWKJC8RQZC"
        data-family="amber"
        data-shade="3"
        data-ink="2"
        data-suggested=""
        title="11.1:2 Relocate Trapped or Injured Covered Species from Construction Site"
        >If the animal is found within a fenced Project construction site and cannot move
        of its own volition, the Designated Biologist(s) shall move the animal outside of
        the area of construction according to their species-specific relocation or
        transplantation plans described in this ITP for each Covered Species. Capture and
        relocation of trapped or injured special-status wildlife may only be performed by
        the Designated Biologist(s) and Fisheries Biologist(s).</mark
      >
      <mark
        class="bcn-hl"
        data-sid="req_01M2ESMHSDAW774SZWKJC8RQZD"
        data-family="amber"
        data-shade="1"
        data-ink="3"
        data-suggested=""
        title="11.1:3 Record and Report Covered Species Sighting Locations to CDFW"
        >Covered Species sightings shall be recorded with a GPS (including datum and
        horizontal accuracy in feet) and the Designated Biologist(s), Fisheries
        Biologist(S), or Biological Monitor(s) shall report Covered Species observed
        locations to CDFW within one business day of the observation.</mark
      >
    </p>
  </div>
  <div class="bcn-sw3c__unanchored" data-c-unanchored=""></div>
</article>
```

## Styles
```css
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
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-help-bar .esa-icon-button:hover,
.bcn-help-bar .esa-icon-button:focus-visible {
  color: var(--bcn-helpbar-fg);
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
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
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
.bcn-cbadge--md {
  font-size: var(--font-size-100);
  padding: 1px var(--spacing-200);
}
.bcn-cbadge--sm {
  padding: 1px var(--spacing-150);
  font-size: 0.75rem;
}
.bcn-cbadge--neutral {
  font-family: var(--typography-font-family-sans);
  color: var(--bcn-gray-700);
  background: var(--bcn-gray-100);
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.topbar__right .esa-icon-button {
  color: var(--color-content-default-secondary);
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
mark.bcn-hl {
  --_hl: var(--bcn-topic-slate-1);
  background: var(--_hl);
  color: inherit;
  border-radius: var(--radius-xs, 2px);
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding: 0.08em 0.12em;
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="amber"] {
  --_ink: var(--bcn-topic-amber-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="blue"] {
  --_ink: var(--bcn-topic-blue-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="violet"] {
  --_ink: var(--bcn-topic-violet-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="grass"] {
  --_ink: var(--bcn-topic-grass-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="orange"] {
  --_ink: var(--bcn-topic-orange-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="crimson"] {
  --_ink: var(--bcn-topic-crimson-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="slate"] {
  --_ink: var(--bcn-topic-slate-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="none"] {
  --_ink: var(--color-content-default-tertiary);
}
mark.bcn-hl[data-suggested] {
  outline: 1.5px dashed var(--_ink);
  outline-offset: 0;
}
mark.bcn-hl[data-family="none"] {
  --_hl: transparent;
  outline: 1.5px dashed var(--color-border-default);
  outline-offset: -1px;
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="amber"][data-shade="1"] {
  --_hl: var(--bcn-topic-amber-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="amber"][data-shade="2"] {
  --_hl: var(--bcn-topic-amber-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="amber"][data-shade="3"] {
  --_hl: var(--bcn-topic-amber-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="amber"][data-shade="4"] {
  --_hl: var(--bcn-topic-amber-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="blue"][data-shade="1"] {
  --_hl: var(--bcn-topic-blue-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="blue"][data-shade="2"] {
  --_hl: var(--bcn-topic-blue-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="blue"][data-shade="3"] {
  --_hl: var(--bcn-topic-blue-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="blue"][data-shade="4"] {
  --_hl: var(--bcn-topic-blue-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="violet"][data-shade="1"] {
  --_hl: var(--bcn-topic-violet-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="violet"][data-shade="2"] {
  --_hl: var(--bcn-topic-violet-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="violet"][data-shade="3"] {
  --_hl: var(--bcn-topic-violet-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="violet"][data-shade="4"] {
  --_hl: var(--bcn-topic-violet-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="grass"][data-shade="1"] {
  --_hl: var(--bcn-topic-grass-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="grass"][data-shade="2"] {
  --_hl: var(--bcn-topic-grass-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="grass"][data-shade="3"] {
  --_hl: var(--bcn-topic-grass-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="grass"][data-shade="4"] {
  --_hl: var(--bcn-topic-grass-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="orange"][data-shade="1"] {
  --_hl: var(--bcn-topic-orange-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="orange"][data-shade="2"] {
  --_hl: var(--bcn-topic-orange-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="orange"][data-shade="3"] {
  --_hl: var(--bcn-topic-orange-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="orange"][data-shade="4"] {
  --_hl: var(--bcn-topic-orange-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="crimson"][data-shade="1"] {
  --_hl: var(--bcn-topic-crimson-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="crimson"][data-shade="2"] {
  --_hl: var(--bcn-topic-crimson-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="crimson"][data-shade="3"] {
  --_hl: var(--bcn-topic-crimson-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="crimson"][data-shade="4"] {
  --_hl: var(--bcn-topic-crimson-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="slate"][data-shade="1"] {
  --_hl: var(--bcn-topic-slate-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="slate"][data-shade="2"] {
  --_hl: var(--bcn-topic-slate-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="slate"][data-shade="3"] {
  --_hl: var(--bcn-topic-slate-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="slate"][data-shade="4"] {
  --_hl: var(--bcn-topic-slate-4);
}
.esa-button {
  --_btn-pad-y: var(--spacing-300, 0.75rem);
  --_btn-padding-x: var(--spacing-300, 0.75rem);
  --_btn-radius: var(--button-radius-md, 0.5rem);
  --_accent: var(--color-background-brand, #46a758);
  --_accent-hover: var(--color-background-brand-hover, #3e9b4f);
  --_on: var(--color-content-default-knockout, #fcfcfc);
  --_accent-text: var(--_accent);
  --_btn-tint-hover: color-mix(in srgb, var(--_accent) 8%, transparent);
  --_btn-tint-active: color-mix(in srgb, var(--_accent) 14%, transparent);
  display: inline-block;
}
.esa-button--xs {
  --_btn-pad-y: var(--spacing-200, 0.5rem);
  --_btn-padding-x: var(--spacing-200, 0.5rem);
  --_btn-radius: var(--button-radius-xs, 4px);
}
.esa-button--sm {
  --_btn-pad-y: var(--spacing-250, 0.625rem);
  --_btn-padding-x: var(--spacing-250, 0.625rem);
  --_btn-radius: var(--button-radius-sm, 4px);
}
.esa-button--lg {
  --_btn-pad-y: var(--spacing-400, 1rem);
  --_btn-padding-x: var(--spacing-400, 1rem);
  --_btn-radius: var(--button-radius-lg, 8px);
}
.esa-button--variant-primary {
  --_accent-text: var(--color-content-brand);
}
.esa-button--variant-secondary {
  --_accent: var(--color-background-brand-muted);
  --_accent-hover: var(--color-background-brand-muted-hover);
  --_on: var(--color-content-on-brand-muted, var(--color-content-default));
  --_accent-text: var(--color-content-brand);
  --_accent-border: var(--color-border-default-strong, #bbb);
}
.esa-button--variant-danger {
  --_accent: var(--color-background-utility-danger);
  --_accent-hover: var(--color-background-utility-danger-hover);
  --_accent-text: var(--color-content-utility-danger);
}
.esa-button--variant-success {
  --_accent: var(--color-background-utility-success);
  --_accent-hover: var(--color-background-utility-success-hover);
  --_on: var(--color-content-on-utility-success);
  --_accent-text: var(--color-content-utility-success);
}
.esa-button--variant-warning {
  --_accent: var(--color-background-utility-warning);
  --_accent-hover: var(--color-background-utility-warning-hover);
  --_on: var(--button-on-warning, var(--color-content-on-utility-warning, #4f3422));
  --_accent-text: var(--color-content-utility-warning);
}
.esa-button--variant-info {
  --_accent: var(--color-background-utility-info);
  --_accent-hover: var(--color-background-utility-info-hover);
  --_accent-text: var(--color-content-utility-info);
}
.esa-button--variant-ai {
  --_accent: var(--color-background-ai);
  --_accent-hover: var(--color-background-ai-hover);
  --_accent-text: var(--color-content-ai);
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent-border, transparent);
}
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled),
.esa-button--appearance-fill.esa-button--active .esa-button__native {
  background: var(--_accent-hover);
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  color: var(--_accent-text);
  border-color: var(--_accent);
  background: 0 0;
}
.esa-button--appearance-dashed .esa-button__native {
  border-style: dashed;
}
.esa-button--appearance-outline .esa-button__native:hover:not(:disabled),
.esa-button--appearance-dashed .esa-button__native:hover:not(:disabled) {
  background: var(--_btn-tint-hover);
}
.esa-button--appearance-outline.esa-button--active .esa-button__native,
.esa-button--appearance-dashed.esa-button--active .esa-button__native {
  background: var(--_btn-tint-active);
}
.esa-button--appearance-soft .esa-button__native {
  background: color-mix(
    in srgb,
    var(--color-background-elevation-sunken, #f0f0f0) 45%,
    var(--color-background-elevation-raised, #fcfcfc)
  );
  color: var(--_accent-text);
  border-color: var(--color-border-default-strong, #bbb);
}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),
.esa-button--appearance-soft.esa-button--active .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent);
}
.esa-button--variant-ghost .esa-button__native {
  color: var(--color-content-default, #202020);
  background: 0 0;
  border-color: #0000;
}
.esa-button--variant-ghost.esa-button--appearance-outline .esa-button__native,
.esa-button--variant-ghost.esa-button--appearance-dashed .esa-button__native {
  border-color: var(--color-border-default, #cecece);
}
.esa-button--variant-ghost .esa-button__native:hover:not(:disabled),
.esa-button--variant-ghost.esa-button--active .esa-button__native {
  background: var(--color-background-elevation-sunken, #f0f0f0);
}
.esa-button--variant-chrome .esa-button__native {
  color: inherit;
  background: 0 0;
  border-color: #0000;
}
.esa-button--variant-chrome .esa-button__native:hover:not(:disabled),
.esa-button--variant-chrome.esa-button--active .esa-button__native,
.esa-button--variant-chrome.esa-button--current .esa-button__native {
  background: var(
    --button-chrome-bg-hover,
    color-mix(in srgb, currentColor 14%, transparent)
  );
}
.esa-button--variant-chrome .esa-button__native:focus-visible {
  outline-color: currentColor;
}
.esa-button__native {
  justify-content: center;
  align-items: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  padding-block: var(--_btn-pad-y);
  padding-inline: var(--_btn-padding-x);
  border: var(--border-width-default, 1px) solid transparent;
  border-radius: var(--_btn-radius);
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
  text-decoration: none;
  display: inline-flex;
}
.esa-button__native:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
}
.esa-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
.esa-button--icon-only .esa-button__native {
  padding-inline: var(--_btn-pad-y);
  aspect-ratio: 1;
}
summary.esa-button {
  cursor: pointer;
  list-style: none;
}
summary.esa-button::-webkit-details-marker {
  display: none;
}
summary.esa-button:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
  border-radius: var(--_btn-radius);
}
summary.esa-button--variant-chrome:focus-visible {
  outline-color: currentColor;
}
.esa-button__label {
  white-space: nowrap;
}
.esa-button__label--hidden {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}
.esa-button__spinner {
  width: 1em;
  height: 1em;
  animation: esa-button-spin var(--animation-spin, 0.75s linear infinite);
  border: 2px solid;
  border-right-color: #0000;
  border-radius: 50%;
  display: inline-block;
}
.bcn-sw3c {
  gap: var(--spacing-400);
  box-sizing: border-box;
  min-height: 100%;
  padding: var(--spacing-500) var(--spacing-600);
  flex-direction: column;
  display: flex;
}
.bcn-sw3c__head {
  align-items: center;
  gap: var(--spacing-300);
  flex-wrap: wrap;
  display: flex;
}
.bcn-sw3c__title {
  font-family: var(--font-decorative, var(--typography-font-family-sans));
  text-wrap: balance;
  flex: 100%;
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.25;
}
.bcn-sw3c__acts {
  align-items: center;
  gap: var(--spacing-150);
  margin-left: auto;
  display: flex;
}
.bcn-sw3c:not([data-confirmed]) [data-c-reopen],
.bcn-sw3c[data-confirmed] [data-c-confirm] {
  display: none;
}
.bcn-sw3c__parsing {
  color: var(--color-content-default-tertiary);
  margin: 0;
}
.bcn-sw3c__text {
  font-family: var(--font-decorative, var(--typography-font-family-sans));
  color: var(--color-content-default);
  font-size: 1rem;
  line-height: 1.75;
}
.bcn-sw3c__text[hidden] {
  display: none;
}
.bcn-sw3c__text p {
  margin: 0 0 var(--spacing-400) 0;
  white-space: pre-line;
  max-width: 70ch;
}
.bcn-sw3c__text p:last-child {
  margin-bottom: 0;
}
.bcn-sw3c__text mark.bcn-hl {
  cursor: pointer;
  color: inherit;
  box-shadow: none;
  background: var(--bcn-marker-1) 0 60% / 100% 96% no-repeat;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  outline: none;
  margin: 0 -0.22em;
  padding: 0 0.3em;
  text-decoration: none;
  transition: opacity 0.12s;
}
.bcn-sw3c__text mark.bcn-hl[data-ink="2"] {
  background-image: var(--bcn-marker-2);
  background-position: 0;
}
.bcn-sw3c__text mark.bcn-hl[data-ink="3"] {
  background-image: var(--bcn-marker-3);
}
.bcn-sw3c__text mark.bcn-hl[data-ink="4"] {
  background-image: var(--bcn-marker-4);
  background-position: 0;
}
.bcn-sw3c__text mark.bcn-hl[data-ink="5"] {
  background-image: var(--bcn-marker-5);
}
.bcn-sw3c__text mark.bcn-hl[data-ink="6"] {
  background-image: var(--bcn-marker-6);
  background-position: 0;
}
.bcn-sw3c__text mark.bcn-hl[data-suggested] {
  outline: none;
  text-decoration: none;
}
.bcn-sw3c__text mark.bcn-hl[data-active] {
  filter: saturate(1.5) brightness(0.94);
  box-shadow: none;
}
.bcn-sw3c__text[data-focus]
  mark.bcn-hl[data-ink="1"]:not([data-active]):not([data-hover]) {
  background-image: var(--bcn-marker-faint-1);
}
.bcn-sw3c__text[data-focus]
  mark.bcn-hl[data-ink="2"]:not([data-active]):not([data-hover]) {
  background-image: var(--bcn-marker-faint-2);
}
.bcn-sw3c__text[data-focus]
  mark.bcn-hl[data-ink="3"]:not([data-active]):not([data-hover]) {
  background-image: var(--bcn-marker-faint-3);
}
.bcn-sw3c__text[data-focus]
  mark.bcn-hl[data-ink="4"]:not([data-active]):not([data-hover]) {
  background-image: var(--bcn-marker-faint-4);
}
.bcn-sw3c__text[data-focus]
  mark.bcn-hl[data-ink="5"]:not([data-active]):not([data-hover]) {
  background-image: var(--bcn-marker-faint-5);
}
.bcn-sw3c__text[data-focus]
  mark.bcn-hl[data-ink="6"]:not([data-active]):not([data-hover]) {
  background-image: var(--bcn-marker-faint-6);
}
.bcn-sw3c__text mark.bcn-hl[data-dup] {
  box-shadow: none;
  text-decoration: underline wavy var(--color-content-warning);
  text-underline-offset: 5px;
}
.bcn-sw3c__text .bcn-at-val {
  text-decoration: underline solid var(--bcn-topic-amber-ink);
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
}
.bcn-sw3c__text .bcn-at-val[data-lit] {
  background: var(--bcn-topic-amber-3);
  border-radius: 2px;
}
.bcn-sw3c__text mark.bcn-at-gap {
  color: inherit;
  text-decoration: underline wavy var(--color-content-warning);
  text-underline-offset: 5px;
  background: 0 0;
  text-decoration-thickness: 1.5px;
}
.bcn-sw3c__text ::selection,
.bcn-sw3c__text ::selection {
  background: color-mix(
    in srgb,
    var(--bcn-aldo, var(--color-background-info)) 28%,
    transparent
  );
}
.bcn-sw3c__unanchored {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-sw3c__unanchored:empty {
  display: none;
}
.bcn-sw3c__unanchored .bcn-sw3c__ghost {
  padding: var(--spacing-300);
  border: 1.5px dashed var(--color-border-warning);
  border-radius: var(--radius-100);
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.875rem;
}
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
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
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
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
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, 20px);
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, 24px);
}
.esa-icon--xl {
  --_icon-size: var(--icon-size-xl, 28px);
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
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--bcn-aldo`: #08908b _(component)_
- `--bcn-aldo-600`: #06736f _(component)_
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-700`: #525252 _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--bcn-marker-1`: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%23ffeb5c' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3Cpath fill='%23f5d52e' fill-opacity='0.35' d='M3.5 8.6C28 7.7 57 9 96.8 8.2L97 11.3C61 12.1 30 10.8 3.6 11.6Z'/%3E%3Cpath fill='%23f5d52e' fill-opacity='0.21' d='M6 13.4C35 12.9 64 13.8 95 13.1L95.2 14.6C64 15.2 35 14.4 6.1 15Z'/%3E%3C/svg%3E") _(component)_
- `--bcn-marker-2`: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%23ffa8d2' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3Cpath fill='%23f783bd' fill-opacity='0.35' d='M3.5 8.6C28 7.7 57 9 96.8 8.2L97 11.3C61 12.1 30 10.8 3.6 11.6Z'/%3E%3Cpath fill='%23f783bd' fill-opacity='0.21' d='M6 13.4C35 12.9 64 13.8 95 13.1L95.2 14.6C64 15.2 35 14.4 6.1 15Z'/%3E%3C/svg%3E") _(component)_
- `--bcn-marker-3`: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%23b6f28c' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3Cpath fill='%2393e063' fill-opacity='0.35' d='M3.5 8.6C28 7.7 57 9 96.8 8.2L97 11.3C61 12.1 30 10.8 3.6 11.6Z'/%3E%3Cpath fill='%2393e063' fill-opacity='0.21' d='M6 13.4C35 12.9 64 13.8 95 13.1L95.2 14.6C64 15.2 35 14.4 6.1 15Z'/%3E%3C/svg%3E") _(component)_
- `--bcn-marker-4`: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%23ffc56e' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3Cpath fill='%23fbaa45' fill-opacity='0.35' d='M3.5 8.6C28 7.7 57 9 96.8 8.2L97 11.3C61 12.1 30 10.8 3.6 11.6Z'/%3E%3Cpath fill='%23fbaa45' fill-opacity='0.21' d='M6 13.4C35 12.9 64 13.8 95 13.1L95.2 14.6C64 15.2 35 14.4 6.1 15Z'/%3E%3C/svg%3E") _(component)_
- `--bcn-marker-5`: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%239fd9ff' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3Cpath fill='%2372c3f7' fill-opacity='0.35' d='M3.5 8.6C28 7.7 57 9 96.8 8.2L97 11.3C61 12.1 30 10.8 3.6 11.6Z'/%3E%3Cpath fill='%2372c3f7' fill-opacity='0.21' d='M6 13.4C35 12.9 64 13.8 95 13.1L95.2 14.6C64 15.2 35 14.4 6.1 15Z'/%3E%3C/svg%3E") _(component)_
- `--bcn-marker-6`: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%238ff0de' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3Cpath fill='%235fe0c8' fill-opacity='0.35' d='M3.5 8.6C28 7.7 57 9 96.8 8.2L97 11.3C61 12.1 30 10.8 3.6 11.6Z'/%3E%3Cpath fill='%235fe0c8' fill-opacity='0.21' d='M6 13.4C35 12.9 64 13.8 95 13.1L95.2 14.6C64 15.2 35 14.4 6.1 15Z'/%3E%3C/svg%3E") _(component)_
- `--bcn-marker-faint-1`: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%23fff8c9' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3C/svg%3E") _(component)_
- `--bcn-marker-faint-2`: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%23ffe3f0' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3C/svg%3E") _(component)_
- `--bcn-marker-faint-3`: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%23e9fbdc' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3C/svg%3E") _(component)_
- `--bcn-marker-faint-4`: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%23ffeccf' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3C/svg%3E") _(component)_
- `--bcn-marker-faint-5`: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%23e2f3ff' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3C/svg%3E") _(component)_
- `--bcn-marker-faint-6`: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%23dbfbf5' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3C/svg%3E") _(component)_
- `--bcn-topic-amber-1`: #ffee9c _(component)_
- `--bcn-topic-amber-2`: #f3d673 _(component)_
- `--bcn-topic-amber-3`: #e9c162 _(component)_
- `--bcn-topic-amber-4`: #e2a336 _(component)_
- `--bcn-topic-amber-ink`: #ab6400 _(component)_
- `--bcn-topic-blue-1`: #d5efff _(component)_
- `--bcn-topic-blue-2`: #acd8fc _(component)_
- `--bcn-topic-blue-3`: #8ec8f6 _(component)_
- `--bcn-topic-blue-4`: #5eb1ef _(component)_
- `--bcn-topic-blue-ink`: #0d74ce _(component)_
- `--bcn-topic-crimson-1`: #fedce7 _(component)_
- `--bcn-topic-crimson-2`: #f3bed1 _(component)_
- `--bcn-topic-crimson-3`: #eaacc3 _(component)_
- `--bcn-topic-crimson-4`: #e093b2 _(component)_
- `--bcn-topic-crimson-ink`: #cb1d63 _(component)_
- `--bcn-topic-grass-1`: #daf1db _(component)_
- `--bcn-topic-grass-2`: #b2ddb5 _(component)_
- `--bcn-topic-grass-3`: #94ce9a _(component)_
- `--bcn-topic-grass-4`: #65ba74 _(component)_
- `--bcn-topic-grass-ink`: #2a7e3b _(component)_
- `--bcn-topic-orange-1`: #ffdfb5 _(component)_
- `--bcn-topic-orange-2`: #ffc182 _(component)_
- `--bcn-topic-orange-3`: #f5ae73 _(component)_
- `--bcn-topic-orange-4`: #ec9455 _(component)_
- `--bcn-topic-orange-ink`: #cc4e00 _(component)_
- `--bcn-topic-slate-1`: #e0e1e6 _(component)_
- `--bcn-topic-slate-2`: #d9d9e0 _(component)_
- `--bcn-topic-slate-3`: #cdced6 _(component)_
- `--bcn-topic-slate-4`: #b9bbc6 _(component)_
- `--bcn-topic-slate-ink`: #60646c _(component)_
- `--bcn-topic-violet-1`: #ebe4ff _(component)_
- `--bcn-topic-violet-2`: #d4cafe _(component)_
- `--bcn-topic-violet-3`: #c2b5f5 _(component)_
- `--bcn-topic-violet-4`: #aa99ec _(component)_
- `--bcn-topic-violet-ink`: #6550b9 _(component)_
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
- `--color-background-info`: #228be6 _(component)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-warning`: #f3d673 _(component)_
- `--color-commitment`: #58508d _(component)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--color-content-warning`: #ab6400 _(component)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-xs`: .125rem _(semantic)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-font-family-mono`: "Roboto Mono", ui-monospace, monospace _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
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
