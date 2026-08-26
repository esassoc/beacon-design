# Commitment side drawer (full CoA text)

The esa-side-dialog that shows a commitment's full Condition-of-Approval text, opened from any relevant-commitment row. The document-review pattern: the register's real CoA prose, set in Besley, preserving the register's own line breaks.

## Key decisions
- It is the esa-side-dialog lego (md / 640px), not a bespoke drawer. Body text is --font-decorative with white-space: pre-wrap so the register's authored line breaks survive verbatim.
- ONE shared drawer instance serves every row; the payload (code / title / source / text) is a JSON island read once on load and keyed by commitment code.
- The z-stack lifts the panel + backdrop above the fixed topbar (--z-modal 1300 / backdrop 1250, over the topbar's 1100) per the esa-dialog overlay note.

## Gotchas
- esa-side-dialog is a CUSTOM (non-native) overlay — to clear the topbar you must raise --z-modal/--z-modal-backdrop on the element, not rely on DOM order.
- Open is delegated from .bcn-crow (document-level click + keydown), so it works for rows revealed after load; do not bind per-row handlers.
- The body is set via textContent (with pre-wrap), NOT innerHTML — the CoA text is plain prose, not markup.

## Done when
- Clicking a commitment row opens a 640px right side-dialog over a blurred backdrop, above the topbar, showing the code, title, source, and full CoA text with the original line breaks; Close dismisses it.

## Markup
```html
<esa-side-dialog
  id="cmt-drawer"
  size="md"
  style="--z-modal: 1300; --z-modal-backdrop: 1250; --side-dialog-width: 640px"
  position="right"
  open=""
>
  <div slot="header" class="cmt-head">
    <span class="cmt-head__code" id="cmt-code">BIO-39</span>
    <span class="cmt-head__title" id="cmt-title"
      >Conduct Preconstruction Surveys and Implement Protective Measures to Minimize
      Disturbance of Swainson's Hawk (FEIR)</span
    >
  </div>
  <article class="cmt-body" id="cmt-body">
    The following measures will be required for surface construction and restoration
    activities occurring in suitable Swainson&amp;rsquo;s hawk habitat as defined in
    Appendix 13B, Section 13B.72, Swainson&amp;rsquo;s Hawk, and by additional assessments
    conducted prior to construction in a given area. Surveys and monitoring will be
    conducted from locations where access allows.&amp;nbsp; 1. &amp;nbsp;
    &amp;nbsp;Preconstruction Surveys. Preconstruction surveys will be conducted by a
    CDFW-approved biologist(s) to identify the presence of suitable Swainson&amp;rsquo;s
    hawk nest trees and known nest trees (occupied within 1 or more of the past 5 years)
    within 0.5 mile of project sites. DWR will ensure that surveys for nesting
    Swainson&amp;rsquo;s hawks are conducted in all suitable and known nest trees
    identified by the CDFW-approved biologist(s) and are consistent with the Recommended
    Timing and Methodology for Swainson&amp;rsquo;s Hawk Nesting Surveys in
    California&amp;rsquo;s Central Valley (Swainson&amp;rsquo;s Hawk Technical Advisory
    Committee 2000), or methodology modified with written approval from CDFW. DWR will
    provide survey results to CDFW by phone or email no less than 5 days prior to
    commencement of construction activities, and in a written report within 30 days after
    commencement of construction activities. The CDFW-approved biologist(s) will include
    the location of all known and occupied nest trees(occupied in 1 or more of the last 5
    years) present within 0.5 mile of the construction footprint. A nest tree will be
    considered occupied from the time the Swainson&amp;rsquo;s hawk pair starts
    constructing the nest until the young leave the nest, or until the CDFW-approved
    biologist(s) determine(s) the nesting attempt failed and the nest is abandoned.2.
    &amp;nbsp; &amp;nbsp;Timing Restrictions. Where the construction site occurs within
    0.5 mile of known or occupied nest trees identified by the CDFW-approved biologist(s),
    DWR will limit construction activities to outside the Swainson&amp;rsquo;s hawk
    breeding season (March 1 through August 15), to the extent practicable, as determined
    by the contractor. Where construction activities cannot be restricted to more than 0.5
    mile of an occupied nest tree during the breeding season, DWR will restrict the
    construction activities to not occur during the period of egg laying until after young
    have fledged, as determined by the CDFW-approved biologist(s), to the extent
    practicable as determined by the contractor in coordination with the CDFW-approved
    biologist. If not practicable, DWR will initiate construction activities prior to egg
    laying to allow time for Swainson&amp;rsquo;s hawk acclimate to disturbance before
    eggs are laid. Where restricting work to outside the breeding season or during the
    period of egg laying to post-fledging is not practicable, DWR will submit plans to
    initiate construction activities to CDFW for written approval.3. &amp;nbsp;
    &amp;nbsp;Non-Disturbance Buffer. Where construction activities must occur within 0.5
    mile of an occupied Swainson&amp;rsquo;s hawk nest tree, DWR will establish a
    650-foot-radius non-disturbance buffer around each occupied nest tree, and the buffer
    will remain in place until the end of the breeding season or until the last chick has
    left the nest. DWR will clearly delineate the non-disturbance buffer with fencing or
    other conspicuous marking. The CDFW-approved biologist(s) will monitor occupied nest
    trees to track progress of nesting activities (see measure 4 below). DWR will not
    conduct any construction activities within the buffer unless a smaller buffer is
    approved in writing by CDFW. If a construction activity must occur within 0.5 miles of
    an occupied nest tree, DWR will follow the conditions under Swainson&amp;rsquo;s Hawk
    Nest Monitoring below. DWR will not conduct any construction activity within 150 feet
    of an occupied nest tree. 4. &amp;nbsp; &amp;nbsp;Swainson&amp;rsquo;s Hawk Nest
    Monitoring. Where construction activities must occur within 0.5 mile of an occupied
    Swainson&amp;rsquo;s hawk nest tree, DWR will implement the following monitoring plan.
    If a nesting bird monitoring and management plan is prepared by a CDFW-approved
    biologist, and approved in writing by CDFW, it will prevail where it differs from the
    measures below.a. &amp;nbsp; &amp;nbsp;Five days and three days prior to the
    initiation of construction at any site where an occupied nest is within 0.5 mile of
    construction, the CDFW-approved biologist will observe the subject nest(s) for at
    least one hour or until nest status can be determined. The CDFW-approved biologist(s)
    will document nesting status and behaviors to compare to nesting status and behaviors
    after construction begins. DWR will report the results of preconstruction monitoring
    to CDFW within 24 hours of each survey.&amp;nbsp;b. &amp;nbsp; &amp;nbsp;Where an
    occupied nest tree occurs between 150 and 325 feet (46 to 99 meters) from construction
    activities, the CDFW-approved biologist will observe the nest for at least 4 hours per
    day during construction to ensure the Swainson&amp;rsquo;s hawks are engaged in normal
    nesting behavior. DWR will limit construction to between 30 minutes after sunrise and
    30 minutes before sunset.c. &amp;nbsp; &amp;nbsp;Where an occupied nest tree occurs
    between 325 and 650 feet (99 to 198 meters) of construction, the CDFW-approved
    biologist(s) will observe the nest for at least 2 hours per day during construction to
    ensure the Swainson&amp;rsquo;s hawk are engaged in normal nesting behavior.d.
    &amp;nbsp; &amp;nbsp;Where an occupied nest tree occurs between 650 and 1,300 feet
    (198 to 396 meters) of construction, the CDFW-approved biologist(s) will observe the
    nest for at least one hour on at least three days per week during construction to
    ensure the Swainson&amp;rsquo;s hawk are engaged in normal nesting behavior and to
    check the status of the nest.e. &amp;nbsp; &amp;nbsp;Where an occupied nest tree
    occurs between 1,300 and 2,640 feet (396 to 805 meters) of construction, the
    CDFW-approved biologist(s) will observe the nest for at least one hour on at least one
    day per week during construction to ensure the Swainson&amp;rsquo;s hawks are engaged
    in normal nesting behavior and to check the status of the nest.5. &amp;nbsp;
    &amp;nbsp;Disturbance of Occupied Nest Tree. DWR will prohibit physical contact with
    an occupied nest tree throughout the breeding season (March 1 through August 15). All
    workers within 650 feet will be out of the line of sight of the occupied nest tree
    during breaks or will take breaks more than 650 feet from the occupied nest tree.6.
    &amp;nbsp; &amp;nbsp;Authority of CDFW-Approved biologist(s). If, during construction,
    the CDFW-approved biologist(s) determine(s) that a nesting Swainson&amp;rsquo;s hawk
    within 0.5 mile of the construction site is disturbed by construction activities to
    the point where nest abandonment is likely, the CDFW-approved biologist(s) will have
    the authority to immediately stop work and will immediately notify DWR. A designated
    representative from DWR will contact CDFW within 24 hours to determine additional
    protective measures to be implemented. Additional protective measures may include, but
    are not limited to, increasing the size of the buffer, delaying construction until the
    chicks have fledged, temporarily relocating staging areas, and temporarily rerouting
    access to the construction site. The CDFW-approved biologist(s) will:a. &amp;nbsp;
    &amp;nbsp;Stop construction until additional protective measures are implemented,
    unless Swainson&amp;rsquo;s hawk behavior normalizes on its own. Potential nest
    abandonment and failure may be indicated if, in the CDFW-approved
    biologist(s)professional judgment, the Swainson&amp;rsquo;s hawks exhibit distress
    and/or abnormal nesting behavior, such as swooping/ stooping at equipment or
    personnel, excessive distress-call vocalization or agitated behavior directed at
    personnel, failure to remain on nest, or failure to deliver prey items.b. &amp;nbsp;
    &amp;nbsp;Continue monitoring and ensure additional protective measures remain in
    place until the CDFW-approved biologist(s) determine(s) Swainson&amp;rsquo;s hawk
    behavior has normalized.&amp;nbsp; c. &amp;nbsp; &amp;nbsp;Determine if additional
    protective measures are ineffective and stop construction until the additional
    protective measures are modified.d. &amp;nbsp; &amp;nbsp;Continue monitoring until
    determining that Swainson&amp;rsquo;s hawk behavior has normalized.e. &amp;nbsp;
    &amp;nbsp;The DWR representative or CDFW-approved biologist(s) will notify CDFW within
    24 hours if nests or nestlings are abandoned and if the nestlings are still alive. The
    CDFW-approved biologist(s) will work with CDFW to determine appropriate actions. 7.
    &amp;nbsp; &amp;nbsp;Nest Tree Avoidance. DWR will avoid removal of known nest trees
    and suitable nest trees to the maximum extent practicable as determined by the
    contractor in coordination with the CDFW-approved biologist. If a known nest tree must
    be removed for construction activities, DWR will notify and obtain written approval
    from CDFW. The notification will include the location of the known nest tree,
    conditions to offset the loss of the nest tree (using the protocol described for
    Swainson&amp;rsquo;s Hawk in Appendix 3F, Attachment 3F.1, Table 3F.1-3, CMP-19a:
    Swainson&amp;rsquo;s Hawk Nesting Habitat), and the time of removal, which will
    generally be October 1 through February 1. DWR will not remove any occupied nest tree
    until the last young have left the nest, as verified by the CDFW-approved
    biologist(s).8. &amp;nbsp; &amp;nbsp;Geotechnical Exploration. DWR will conduct
    geotechnical exploration outside of the breeding season, to the extent practicable as
    determined by the contractor in coordination with project engineers. The CDFW-approved
    biologist(s) will delineate with flagging or other visible markers suitable breeding
    habitat within the geotechnical exploration site. DWR will restrict geotechnical
    exploration to areas outside of the delineated breeding habitat. If geotechnical
    exploration must occur during the breeding season, the CDFW-approved biologist(s) will
    survey the breeding habitat within 0.5 mile for nesting Swainson&amp;rsquo;s hawks.
    DWR will limit geotechnical exploration activities to least 0.5 mile away from any
    occupied nest tree, unless otherwise approved by CDFW.9. &amp;nbsp; &amp;nbsp;Measures
    Specific to Transmission Line Construction. DWR will not use helicopters to string
    transmission lines or to conduct surveys for field investigations within 0.5 mile of
    an occupied nest tree. DWR will not remove or trim occupied nest trees for
    transmission line construction until after the breeding season has ended or the last
    young have left the nest. If removal or trimming of an occupied nest tree needs to
    occur for human or wildlife safety, DWR will conduct removal or trimming from October
    1 to February 1 (outside of the breeding season), or with written approval and
    guidance from CDFW. DWR will avoid removal or trimming of known or suitable nest
    trees, to the extent practicable, as determined by the contractor in coordination with
    the qualified biologist, during transmission line stringing and reconductoring
    activities or during power and pole placement. Where practicable, as determined by the
    contractor, DWR will place poles and lines outside of breeding habitat, as delineated
    by the CDFW-approved biologist(s). DWR will follow the Nest Tree Avoidance measures
    listed above when removal or trimming of known or suitable nest trees cannot be
    avoided.
  </article>
  <span slot="footer" class="cmt-foot">
    <span class="cmt-foot__src" id="cmt-source">Source: EIR</span>
    <span id="cmt-close"
      ><span
        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
        ><button class="esa-button__native typography-microcopy-md" type="button">
          <span class="esa-button__label">Close</span>
        </button></span
      ></span
    >
  </span>
</esa-side-dialog>
```

## Styles
```css
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.typography-microcopy-md-subtle {
  font-family: var(--typography-microcopy-md-subtle-font-family);
  font-size: var(--typography-microcopy-md-subtle-font-size);
  font-weight: var(--typography-microcopy-md-subtle-font-weight);
  line-height: var(--typography-microcopy-md-subtle-line-height);
  letter-spacing: var(--typography-microcopy-md-subtle-letter-spacing);
}
.typography-microcopy-md-strong {
  font-family: var(--typography-microcopy-md-strong-font-family);
  font-size: var(--typography-microcopy-md-strong-font-size);
  font-weight: var(--typography-microcopy-md-strong-font-weight);
  line-height: var(--typography-microcopy-md-strong-line-height);
  letter-spacing: var(--typography-microcopy-md-strong-letter-spacing);
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
  --_accent-border: var(--color-border-default-strong, #bbbbbb);
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
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled) {
  background: var(--_accent-hover);
}
.esa-button--appearance-fill.esa-button--active .esa-button__native {
  background: var(--_accent-hover);
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  background: transparent;
  color: var(--_accent-text);
  border-color: var(--_accent);
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
  border-color: var(--color-border-default-strong, #bbbbbb);
}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),
.esa-button--appearance-soft.esa-button--active .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent);
}
.esa-button--variant-ghost .esa-button__native {
  background: transparent;
  color: var(--color-content-default, #202020);
  border-color: transparent;
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
  background: transparent;
  color: inherit;
  border-color: transparent;
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  padding-block: var(--_btn-pad-y);
  padding-inline: var(--_btn-padding-x);
  border: var(--border-width-default, 1px) solid transparent;
  border-radius: var(--_btn-radius);
  text-decoration: none;
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
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
  list-style: none;
  cursor: pointer;
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
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
.esa-button__spinner {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: esa-button-spin var(--animation-spin, 0.75s linear infinite);
}
.cmt-head {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
  min-width: 0;
}
.cmt-head__code {
  width: max-content;
  font-family: var(--font-mono);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
}
.cmt-head__title {
  font-family: var(--font-decorative);
  font-size: var(--type-size-400);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  line-height: 1.25;
}
.cmt-body {
  display: block;
  white-space: pre-wrap;
  font-family: var(--font-decorative);
  font-size: var(--type-size-200);
  line-height: 1.6;
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  padding: var(--spacing-400);
  background: var(--color-surface);
}
.cmt-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: var(--spacing-300);
}
.cmt-foot__src {
  font-size: var(--type-size-100);
  color: var(--color-text-tertiary);
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.typography-microcopy-md-subtle {
  font-family: var(--typography-microcopy-md-subtle-font-family);
  font-size: var(--typography-microcopy-md-subtle-font-size);
  font-weight: var(--typography-microcopy-md-subtle-font-weight);
  line-height: var(--typography-microcopy-md-subtle-line-height);
  letter-spacing: var(--typography-microcopy-md-subtle-letter-spacing);
}
.typography-microcopy-md-strong {
  font-family: var(--typography-microcopy-md-strong-font-family);
  font-size: var(--typography-microcopy-md-strong-font-size);
  font-weight: var(--typography-microcopy-md-strong-font-weight);
  line-height: var(--typography-microcopy-md-strong-line-height);
  letter-spacing: var(--typography-microcopy-md-strong-letter-spacing);
}
```

## Tokens
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--border-width-default`: 1px _(semantic)_
- `--button-chrome-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--button-on-warning`: #ffffff _(component)_
- `--button-radius-lg`: .5rem _(component)_
- `--button-radius-md`: .5rem _(component)_
- `--button-radius-sm`: .25rem _(component)_
- `--button-radius-xs`: .25rem _(component)_
- `--color-background-ai`: #a18072 _(semantic)_
- `--color-background-ai-hover`: #957468 _(semantic)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-brand-hover`: #00474f _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
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
- `--color-commitment`: #58508d _(component)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #202020 _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--color-surface`: #fcfcfc _(component)_
- `--color-text-primary`: #3d3d3d _(component)_
- `--color-text-tertiary`: #656565 _(component)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-mono`: "Roboto Mono", ui-monospace, monospace _(component)_
- `--font-weight-bold`: 650 _(component)_
- `--font-weight-semibold`: 550 _(component)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(component)_
- `--type-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(component)_
- `--type-size-400`: clamp(1rem, .88rem + .6vw, 1.25rem) _(component)_
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
- `--typography-microcopy-md-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-md-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-subtle-line-height`: 1 _(semantic)_
