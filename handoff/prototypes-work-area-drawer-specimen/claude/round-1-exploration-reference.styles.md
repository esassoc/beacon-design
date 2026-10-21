# Round 1 exploration (reference): styles

```css
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
.esa-button--variant-primary {
  --_accent-text: var(--color-content-brand);
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
.v2__pair .mockup {
  justify-self: center;
  width: 100%;
  max-width: 460px;
}
.decide__row--warn .esa-icon {
  color: color-mix(in srgb, var(--st-blocked) 72%, #1a1a1a);
  flex-shrink: 0;
}
.board__cellhead .board__dim {
  flex: 1;
  min-width: 0;
}
.stack__child .drawer__body {
  flex: 1;
}
.round1 {
  gap: var(--spacing-500);
  padding-top: var(--spacing-600);
  border-top: 1px solid var(--color-border-default);
  flex-direction: column;
  display: flex;
}
.round1__head {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.round1__title {
  font-size: 1.5rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.round1__line {
  max-width: 86ch;
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 1rem;
  line-height: 1.55;
}
.concepts {
  gap: var(--spacing-700) var(--spacing-500);
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  align-items: start;
  display: grid;
}
.concept {
  gap: var(--spacing-400);
  flex-direction: column;
  justify-self: center;
  width: 100%;
  max-width: 460px;
  display: flex;
}
.concept__thesis {
  gap: var(--spacing-250);
  flex-direction: column;
  display: flex;
}
.concept__name {
  align-items: center;
  gap: var(--spacing-250);
  font-size: 1.25rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
  display: flex;
}
.concept__num {
  border-radius: var(--radius-full);
  background: var(--color-background-brand);
  color: #fff;
  width: 28px;
  height: 28px;
  font-size: 1rem;
  font-weight: var(--typography-font-weight-semibold);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.concept__line {
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
}
.concept__pt {
  gap: var(--spacing-100);
  flex-direction: column;
  display: flex;
}
.concept__pt-label {
  margin: var(--spacing-150) 0 0;
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.concept__pt ul {
  gap: var(--spacing-100);
  flex-direction: column;
  margin: 0;
  padding-left: 1.25rem;
  display: flex;
}
.concept__pt li {
  color: var(--color-content-default-secondary);
  font-size: 0.9375rem;
  line-height: 1.5;
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
.action {
  gap: var(--spacing-250);
  padding: var(--spacing-400);
  border-radius: var(--radius-300);
  background: var(--color-background-default);
  border: 1px solid var(--color-border-default);
  flex-direction: column;
  display: flex;
}
.action--provisional {
  background: color-mix(in srgb, var(--st-provisional-block) 6%, transparent);
  border: 1px solid color-mix(in srgb, var(--st-provisional-block) 45%, transparent);
}
.action--instep {
  padding: var(--spacing-300);
  margin-top: var(--spacing-250);
}
.action__title {
  font-size: 1.0625rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.action--provisional .action__title {
  color: color-mix(in srgb, var(--st-provisional-block) 72%, #1a1a1a);
}
.action__text {
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.55;
}
.action__text strong {
  color: color-mix(in srgb, var(--st-provisional-block) 72%, #1a1a1a);
  font-weight: var(--typography-font-weight-semibold);
}
.action__facts {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
  margin: 0;
}
.action__conflict {
  align-items: flex-start;
  gap: var(--spacing-150);
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-semibold);
  color: color-mix(in srgb, var(--st-blocked) 72%, #1a1a1a);
  margin: 0;
  line-height: 1.45;
  display: flex;
}
.action__conflict .esa-icon {
  flex-shrink: 0;
  margin-top: 2px;
}
.action__btns {
  gap: var(--spacing-200);
  margin-top: var(--spacing-100);
  display: flex;
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
.survey {
  padding: var(--spacing-100) 0;
}
.survey__link {
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-background-brand-muted);
  cursor: pointer;
  text-decoration: none;
}
.survey__link:hover {
  color: var(--color-background-brand-muted-hover);
  text-decoration: underline;
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
.note--sm {
  padding: var(--spacing-250) var(--spacing-300);
  font-size: 0.9375rem;
}
.dates {
  gap: var(--spacing-300) var(--spacing-400);
  grid-template-columns: repeat(3, 1fr);
  display: grid;
}
.empty {
  color: var(--color-content-default-tertiary);
  margin: 0;
  font-size: 0.875rem;
}
.kv-text {
  color: var(--color-content-default-secondary);
  font-size: 0.9375rem;
  line-height: 1.5;
}
.strip {
  align-items: center;
  gap: var(--spacing-250);
  padding: var(--spacing-250) var(--spacing-300);
  background: var(--color-background-default);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  display: flex;
}
.strip .esa-icon {
  color: color-mix(in srgb, var(--st-blocked) 72%, #1a1a1a);
  flex-shrink: 0;
}
.strip__text {
  color: var(--color-content-default-secondary);
  font-size: 0.875rem;
  line-height: 1.45;
}
.strip__text strong {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.disc-tabs {
  gap: var(--spacing-150);
  grid-template-columns: repeat(4, 1fr);
  display: grid;
}
.disc-tabs [role="tab"] {
  align-items: center;
  gap: var(--spacing-100);
  padding: var(--spacing-200) var(--spacing-100);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  cursor: pointer;
  flex-direction: column;
  font-family: inherit;
  transition:
    border-color 0.12s,
    background 0.12s;
  display: flex;
}
.disc-tabs [role="tab"]:hover {
  border-color: var(--color-border-default-strong);
}
.disc-tabs [role="tab"][aria-selected="true"] {
  border-color: var(--color-background-brand);
  background: var(--color-background-brand-subtle);
  box-shadow: inset 0 0 0 1px var(--color-background-brand);
}
.disc-tabs__dot {
  border-radius: var(--radius-full);
  flex-shrink: 0;
  width: 10px;
  height: 10px;
}
.disc-tabs__dot[data-none="true"] {
  background: var(--color-background-elevation-raised);
  border: 1px dashed var(--color-border-default-strong);
}
.disc-tabs__label {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
}
.disc-panel {
  gap: var(--spacing-300);
  padding: var(--spacing-400);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  background: var(--color-background-elevation-raised);
  flex-direction: column;
  display: flex;
}
.disc-panel[hidden] {
  display: none;
}
.disc-panel__head {
  align-items: center;
  gap: var(--spacing-300);
  display: flex;
}
.disc-panel__when {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
}
.disc-panel__warn {
  align-items: flex-start;
  gap: var(--spacing-150);
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: color-mix(in srgb, var(--st-blocked) 72%, #1a1a1a);
  margin: 0;
  line-height: 1.45;
  display: flex;
}
.disc-panel__warn .esa-icon {
  flex-shrink: 0;
  margin-top: 1px;
}
.disc-panel__foot {
  gap: var(--spacing-200);
  margin-top: var(--spacing-100);
  display: flex;
}
.steps {
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.step {
  column-gap: var(--spacing-300);
  padding-bottom: var(--spacing-400);
  grid-template-columns: 24px 1fr;
  display: grid;
  position: relative;
}
.step:last-child {
  padding-bottom: 0;
}
.step:not(:last-child):before {
  content: "";
  background: var(--color-border-default);
  width: 2px;
  position: absolute;
  top: 28px;
  bottom: 4px;
  left: 11px;
}
.step__dot {
  border-radius: var(--radius-full);
  background: var(--color-background-elevation-raised);
  border: 2px solid var(--color-border-default-strong);
  z-index: 1;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-top: 0;
  display: flex;
}
.step[data-state="done"] .step__dot {
  background: var(--color-background-brand);
  border-color: var(--color-background-brand);
}
.step[data-state="done"] .step__dot:after {
  content: "";
  border-bottom: 2px solid #fff;
  border-left: 2px solid #fff;
  width: 9px;
  height: 5px;
  margin-top: -2px;
  transform: rotate(-45deg);
}
.step[data-state="scheduled"] .step__dot {
  border-color: var(--st-survey-scheduled);
}
.step[data-state="live"] .step__dot {
  border-color: var(--st-survey-scheduled);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--st-survey-scheduled) 22%, transparent);
}
.step[data-state="live"] .step__dot:after {
  content: "";
  border-radius: var(--radius-full);
  background: var(--st-survey-scheduled);
  width: 8px;
  height: 8px;
}
.step[data-state="live-red"] .step__dot {
  border-color: var(--st-provisional-block);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--st-provisional-block) 18%, transparent);
}
.step[data-state="live-red"] .step__dot:after {
  content: "";
  border-radius: var(--radius-full);
  background: var(--st-provisional-block);
  width: 8px;
  height: 8px;
}
.step[data-state="future"] .step__dot {
  border-style: dashed;
  border-color: var(--color-border-default-strong);
}
.step__content {
  gap: var(--spacing-150);
  flex-direction: column;
  min-width: 0;
  padding-top: 2px;
  display: flex;
}
.step__title {
  align-items: baseline;
  gap: var(--spacing-200);
  font-size: 1rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  flex-wrap: wrap;
  margin: 0;
  display: flex;
}
.step__when {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
}
.step[data-state="live-red"] .step__when {
  color: color-mix(in srgb, var(--st-provisional-block) 72%, #1a1a1a);
}
.step__text {
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.5;
}
.step__flag {
  align-items: flex-start;
  gap: var(--spacing-150);
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-semibold);
  color: color-mix(in srgb, var(--st-blocked) 72%, #1a1a1a);
  margin: 0;
  line-height: 1.45;
  display: flex;
}
.step__flag .esa-icon {
  flex-shrink: 0;
  margin-top: 2px;
}
.step__act {
  gap: var(--spacing-200);
  margin-top: var(--spacing-100);
  display: flex;
}
.check {
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.check__row {
  column-gap: var(--spacing-250);
  padding: var(--spacing-200) 0;
  grid-template-columns: 12px 1fr auto;
  align-items: center;
  row-gap: 2px;
  display: grid;
}
.check__row + .check__row {
  border-top: 1px solid var(--color-border-default-subtle);
}
.check__dot {
  border-radius: var(--radius-full);
  justify-self: center;
  width: 10px;
  height: 10px;
}
.check__dot[data-none="true"] {
  background: var(--color-background-elevation-raised);
  border: 1px dashed var(--color-border-default-strong);
}
.check__dim {
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.check__state {
  color: var(--color-content-default-secondary);
  grid-column: 2/-1;
  font-size: 0.875rem;
}
.check__act {
  grid-area: 1/3;
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
```
