# Decision-first — v2 deep dive: styles

```css
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
.esa-badge--dot.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand, #46a758);
}
@media (forced-colors: active) {
  .esa-badge {
    border: 1px solid canvastext;
  }
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
.esa-button--sm {
  --_btn-pad-y: var(--spacing-250, 0.625rem);
  --_btn-padding-x: var(--spacing-250, 0.625rem);
  --_btn-radius: var(--button-radius-sm, 4px);
}
.esa-button--variant-danger {
  --_accent: var(--color-background-utility-danger);
  --_accent-hover: var(--color-background-utility-danger-hover);
  --_accent-text: var(--color-content-utility-danger);
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
  background: var(--button-chrome-bg-hover, color-mix(in srgb, currentColor 14%, transparent));
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
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.v2 {
  gap: var(--spacing-500);
  flex-direction: column;
  display: flex;
}
.v2__head {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.v2__title {
  font-size: 1.5rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.v2__changes {
  gap: var(--spacing-200);
  flex-direction: column;
  max-width: 86ch;
  margin: 0;
  padding-left: 1.25rem;
  display: flex;
}
.v2__changes li {
  color: var(--color-content-default-secondary);
  font-size: 1rem;
  line-height: 1.55;
}
.v2__changes strong {
  color: var(--color-content-default);
  font-weight: var(--typography-font-weight-semibold);
}
.v2__pair {
  gap: var(--spacing-500);
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  align-items: start;
  max-width: 1000px;
  display: grid;
}
.v2__pair .mockup {
  justify-self: center;
  width: 100%;
  max-width: 460px;
}
.v2__sub {
  margin: var(--spacing-300) 0 0;
  font-size: 1.1875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.band {
  gap: var(--spacing-200) var(--spacing-300);
  padding: var(--spacing-250) var(--spacing-400);
  background: var(--color-background-default);
  border-bottom: 1px solid var(--color-border-default);
  grid-template-columns: repeat(3, 1fr);
  display: grid;
}
.band--4 {
  grid-template-columns: repeat(4, 1fr);
}
.band__alert {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-semibold);
  color: color-mix(in srgb, var(--st-blocked) 72%, #1a1a1a);
}
.decide {
  gap: var(--spacing-200);
  padding: var(--spacing-250) var(--spacing-300);
  border-radius: var(--radius-200);
  background: var(--color-background-default);
  border: 1px solid var(--color-border-default);
  flex-direction: column;
  display: flex;
}
.decide--prov {
  background: color-mix(in srgb, var(--st-provisional-block) 6%, transparent);
  border-color: color-mix(in srgb, var(--st-provisional-block) 45%, transparent);
  --color-background-utility-danger: var(--st-provisional-block);
}
.decide--blocked {
  background: color-mix(in srgb, var(--st-blocked) 10%, transparent);
  border-color: color-mix(in srgb, var(--st-blocked) 30%, transparent);
}
.decide__line {
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.45;
}
.decide__line--fact {
  align-items: center;
  gap: var(--spacing-250);
  flex-wrap: wrap;
  display: flex;
}
.decide__actions {
  justify-content: flex-end;
  gap: var(--spacing-200);
  display: flex;
}
.decide--prov .decide__line {
  color: color-mix(in srgb, var(--st-provisional-block) 72%, #1a1a1a);
}
.decide--blocked .decide__line {
  color: color-mix(in srgb, var(--st-blocked) 72%, #1a1a1a);
}
.obs-id {
  font-family: var(--typography-font-family-mono);
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised);
  border: 1px solid color-mix(in srgb, var(--st-provisional-block) 45%, transparent);
  color: color-mix(in srgb, var(--st-provisional-block) 72%, #1a1a1a);
  white-space: nowrap;
  flex-shrink: 0;
  font-size: 0.8125rem;
  font-weight: 500;
}
.decide__row {
  align-items: center;
  gap: var(--spacing-250);
  display: flex;
}
.decide__row--warn .esa-icon {
  color: color-mix(in srgb, var(--st-blocked) 72%, #1a1a1a);
  flex-shrink: 0;
}
.decide__warntext {
  min-width: 0;
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: color-mix(in srgb, var(--st-blocked) 72%, #1a1a1a);
  flex: 1;
  line-height: 1.45;
}
.board__cell--btn {
  cursor: pointer;
  text-align: left;
  border: 1px solid var(--color-border-default-subtle);
  background: var(--color-background-elevation-raised);
  width: 100%;
  font-family: inherit;
  transition:
    border-color 0.12s,
    background 0.12s;
}
.board__cell--btn:hover {
  border-color: var(--color-border-default-strong);
  background: var(--grid-row-bg-hover, var(--color-background-default));
}
.board__cell--btn[data-active] {
  border-color: var(--color-background-brand);
  box-shadow: inset 0 0 0 1px var(--color-background-brand);
  background: var(--color-background-brand-subtle);
}
.board__cellhead {
  align-items: center;
  gap: var(--spacing-150);
  width: 100%;
  display: flex;
}
.board__cellhead .board__dim {
  flex: 1;
  min-width: 0;
}
.board__chev {
  color: var(--color-content-default-tertiary);
  display: inline-flex;
}
.stack {
  width: 100%;
  max-width: 540px;
  position: relative;
}
.stack__parent {
  width: calc(100% - 72px);
  position: relative;
}
.stack__parent:after {
  content: "";
  border-radius: var(--radius-300);
  z-index: 4;
  pointer-events: none;
  background: #0d111438;
  position: absolute;
  inset: 0;
}
.stack__child {
  z-index: 5;
  flex-direction: column;
  width: calc(100% - 72px);
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  box-shadow: -16px 0 40px #00000038;
}
.stack__child .drawer__body {
  flex: 1;
}
.drawer__close {
  color: var(--color-content-default-secondary);
  margin-left: auto;
}
.child__bar {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-300);
  display: flex;
}
.child__count {
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.revs {
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.rev {
  column-gap: var(--spacing-250);
  padding-bottom: var(--spacing-400);
  grid-template-columns: 16px 1fr;
  display: grid;
  position: relative;
}
.rev:last-child {
  padding-bottom: 0;
}
.rev:not(:last-child):before {
  content: "";
  background: var(--color-border-default);
  width: 2px;
  position: absolute;
  top: 20px;
  bottom: 2px;
  left: 7px;
}
.rev__dot {
  border-radius: var(--radius-full);
  z-index: 1;
  background: var(--color-background-elevation-raised);
  border: 2px solid var(--color-border-default-strong);
  width: 16px;
  height: 16px;
  margin-top: 2px;
}
.rev[data-kind="scheduled"] .rev__dot {
  border-color: var(--st-survey-scheduled);
}
.rev[data-kind="blocked"] .rev__dot {
  background: var(--st-blocked);
  border-color: var(--st-blocked);
}
.rev__main {
  gap: var(--spacing-150);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.rev__head {
  align-items: baseline;
  gap: var(--spacing-200);
  font-size: 1rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  flex-wrap: wrap;
  margin: 0;
  display: flex;
}
.rev__when {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
}
.rev__chiprow {
  align-items: center;
  gap: var(--spacing-200);
  flex-wrap: wrap;
  display: flex;
}
.rev__until {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
}
.rev__current {
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-full);
  background: color-mix(in srgb, var(--color-background-brand) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-background-brand) 30%, transparent);
  font-size: 0.75rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-background-brand);
  white-space: nowrap;
  align-items: center;
  display: inline-flex;
}
.rev__note {
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.55;
}
.model-note {
  max-width: 86ch;
  padding: var(--spacing-400) var(--spacing-500);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.model-note__title {
  font-size: 1rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.model-note__text {
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.6;
}
.model-note__text code {
  font-family: var(--typography-font-family-mono);
  border-radius: var(--radius-100);
  background: var(--color-background-default);
  border: 1px solid var(--color-border-default-subtle);
  padding: 1px 5px;
  font-size: 0.875em;
}
.model-note__text strong {
  color: var(--color-content-default);
  font-weight: var(--typography-font-weight-semibold);
}
.mockup {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  display: flex;
}
.mockup__case {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
  line-height: 1.5;
}
.drawer {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  overflow: hidden;
  box-shadow: 0 12px 32px #0000001a;
}
.drawer__head {
  padding: var(--spacing-400);
  border-bottom: 1px solid var(--color-border-default);
  flex-direction: column;
  gap: 2px;
  display: flex;
}
.drawer__headrow {
  align-items: center;
  gap: var(--spacing-300);
  display: flex;
}
.drawer__title {
  font-size: var(--font-size-400);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.drawer__sub {
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.875rem;
}
.drawer__body {
  gap: var(--spacing-400);
  padding: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.drawer__foot {
  justify-content: flex-end;
  gap: var(--spacing-200);
  padding: var(--spacing-300) var(--spacing-400);
  border-top: 1px solid var(--color-border-default);
  background: var(--color-background-elevation-raised);
  display: flex;
}
.drawer__section {
  align-items: center;
  gap: var(--spacing-200);
  margin: 0 0 var(--spacing-300);
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  display: flex;
}
.drawer__section .esa-icon {
  color: var(--color-content-default-secondary);
  flex-shrink: 0;
}
.drawer__more {
  flex-direction: column;
  display: flex;
}
.drawer__more .esa-collapsible + .esa-collapsible {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-status-chip[data-status="provisional-block"],
.bcn-status-chip[data-status="provisional-block"] .bcn-status-chip__dot {
  background: var(--color-background-elevation-raised);
  box-shadow: inset 0 0 0 1.5px var(--st-provisional-block);
}
.unreviewed {
  padding: 2px var(--spacing-250);
  border: 1px dashed var(--color-border-default-strong);
  border-radius: var(--radius-full);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  align-items: center;
  display: inline-flex;
}
.action__conflict .esa-icon {
  flex-shrink: 0;
  margin-top: 2px;
}
.board {
  gap: var(--spacing-200);
  grid-template-columns: 1fr 1fr;
  display: grid;
}
.board__cell {
  align-items: flex-start;
  gap: var(--spacing-150);
  padding: var(--spacing-250) var(--spacing-300);
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  flex-direction: column;
  display: flex;
}
.board__dim {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.board__meta {
  color: var(--color-content-default-tertiary);
  font-size: 0.8125rem;
}
.rows {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.conflict {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-250) var(--spacing-300);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  display: flex;
}
.conflict__main {
  min-width: 0;
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  flex-direction: column;
  flex: 1;
  gap: 2px;
  display: flex;
}
.conflict__meta {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  white-space: nowrap;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  display: flex;
}
.conflict__sub {
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-regular);
  color: var(--color-content-default-tertiary);
}
.note {
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--color-background-default);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  color: var(--color-content-default-secondary);
  white-space: pre-line;
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
}
.empty {
  color: var(--color-content-default-tertiary);
  margin: 0;
  font-size: 0.875rem;
}
.strip .esa-icon {
  color: color-mix(in srgb, var(--st-blocked) 72%, #1a1a1a);
  flex-shrink: 0;
}
.disc-panel__warn .esa-icon {
  flex-shrink: 0;
  margin-top: 1px;
}
.step__flag .esa-icon {
  flex-shrink: 0;
  margin-top: 2px;
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
.esa-collapsible {
  border: var(--border-width-default, 1px) solid var(--color-border-default, #cecece);
  border-radius: var(--radius-md, 0.5rem);
  background: var(--color-background-elevation-raised, #fcfcfc);
}
.esa-collapsible--flush {
  background: 0 0;
  border: none;
  border-radius: 0;
}
.esa-collapsible--flush > .esa-collapsible__summary,
.esa-collapsible--flush > .esa-collapsible__body {
  padding-inline: 0;
}
.esa-collapsible__summary {
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
  padding: var(--spacing-300, 0.75rem) var(--spacing-400, 1rem);
  color: var(--color-content-default, #202020);
  cursor: pointer;
  list-style: none;
  display: flex;
}
.esa-collapsible__summary::-webkit-details-marker {
  display: none;
}
.esa-collapsible__summary:after {
  content: "";
  border-right: 2px solid var(--color-content-default-secondary, #646464);
  border-bottom: 2px solid var(--color-content-default-secondary, #646464);
  width: 8px;
  height: 8px;
  margin-left: auto;
  transition: transform 0.15s;
  transform: rotate(-45deg);
}
.esa-collapsible[open] > .esa-collapsible__summary:after {
  transform: rotate(45deg);
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
}
.esa-collapsible__body {
  gap: var(--spacing-400, 1rem);
  padding: 0 var(--spacing-400, 1rem) var(--spacing-400, 1rem);
  flex-direction: column;
  display: flex;
}
.bcn-key-value {
  flex-direction: column;
  gap: 2px;
  display: flex;
}
.bcn-key-value[data-layout="row"] {
  align-items: baseline;
  column-gap: var(--spacing-300);
  grid-template-columns: 6.5rem minmax(0, 1fr);
  display: grid;
}
.bcn-key-value__key {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-medium);
  color: var(--form-label-color);
}
.bcn-key-value__val {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-key-value__key {
  align-items: center;
  gap: var(--spacing-100);
  display: inline-flex;
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.bcn-key-value[data-size="sm"] .bcn-key-value__key {
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  color: var(--color-content-secondary);
}
.bcn-key-value[data-size="sm"] .bcn-key-value__val {
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
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
.stack {
  --gap: var(--spacing-400, 1rem);
  gap: var(--gap);
  flex-direction: column;
  display: flex;
}
.stack[data-split] > [data-split] {
  margin-block-end: auto;
}
```
