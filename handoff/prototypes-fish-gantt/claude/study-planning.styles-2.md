# Study Planning: styles, part 2 of 2

```css
  border-radius: var(--radius-100);
  white-space: nowrap;
  padding: 1px 5px;
  line-height: 1.5;
  display: inline-block;
}
.bcn-readiness__tl {
  height: 138px;
  margin-top: var(--spacing-200);
  position: relative;
}
.bcn-readiness__tl-axis {
  background: var(--color-border-default-strong);
  height: 2px;
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
}
.bcn-readiness__tl-tick {
  background: var(--color-border-default);
  width: 1px;
  height: 10px;
  position: absolute;
  bottom: 26px;
}
.bcn-readiness__tl-yr {
  font-family: var(--typography-font-family-mono);
  font-size: var(--font-size-100);
  color: var(--color-content-default-tertiary);
  position: absolute;
  bottom: 6px;
  transform: translate(-50%);
}
.bcn-readiness__tl-band {
  z-index: 2;
  height: 22px;
  padding: 0 var(--spacing-150);
  border: 1px solid color-mix(in srgb, var(--color-background-brand-muted) 45%, transparent);
  border-radius: var(--radius-100);
  background: color-mix(
    in srgb,
    var(--color-background-brand-muted) 14%,
    var(--color-background-elevation-raised)
  );
  align-items: center;
  display: flex;
  position: absolute;
  bottom: 25px;
}
.bcn-readiness__tl-band[data-state="past"] {
  border-color: var(--color-border-default);
  background: var(--color-background-elevation-sunken);
}
.bcn-readiness__tl-band-btn {
  cursor: pointer;
  background: 0 0;
  border: 0;
  padding: 0;
}
.bcn-readiness__tl-band-lbl {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: color-mix(in srgb, var(--color-background-brand-muted) 65%, var(--color-content-default));
  white-space: nowrap;
}
.bcn-readiness__tl-pointpop {
  z-index: 3;
  width: 0;
  display: block;
  position: absolute;
  bottom: 31px;
  overflow: visible;
}
.bcn-readiness__tl-point {
  cursor: pointer;
  background: 0 0;
  border: 0;
  padding: 0;
  display: block;
  position: relative;
  transform: translate(-50%);
}
.bcn-readiness__tl-dot {
  border-radius: var(--radius-full);
  background: var(--color-background-elevation-raised);
  border: 3px solid var(--color-content-default-secondary);
  width: 10px;
  height: 10px;
  margin: 0 auto;
  display: block;
}
.bcn-readiness__tl-point[data-state="past"] .bcn-readiness__tl-dot {
  border-color: var(--color-border-default-strong);
}
.bcn-readiness__tl-stem {
  background: var(--color-border-default);
  width: 1px;
  height: 18px;
  margin: 0 auto;
  display: block;
}
.bcn-readiness__tl-point[data-row="1"] .bcn-readiness__tl-stem {
  height: 46px;
}
.bcn-readiness__tl-lbl {
  text-align: center;
  max-width: 18ch;
  line-height: 1.25;
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0 auto 3px;
  display: block;
}
.bcn-readiness__tl-today {
  background: var(--color-background-utility-danger);
  pointer-events: none;
  z-index: 1;
  width: 1px;
  position: absolute;
  top: 14px;
  bottom: 24px;
}
.bcn-readiness__tl-today-beacon {
  border-radius: var(--radius-full);
  background: var(--color-background-utility-danger);
  width: 7px;
  height: 7px;
  animation: 2.4s ease-out infinite bcn-readiness-beacon;
  position: absolute;
  top: -4px;
  left: -3px;
}
.bcn-readiness__tl-today-lbl {
  top: -14px;
  left: var(--spacing-200);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-background-utility-danger);
  white-space: nowrap;
  position: absolute;
}
.bcn-readiness__tl-pop {
  gap: var(--spacing-100);
  max-width: 34ch;
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
  flex-direction: column;
  display: flex;
}
.bcn-readiness__tl-pop-name {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  font-size: var(--font-size-200);
}
.bcn-readiness__tl-pop-count {
  color: var(--color-content-default-secondary);
}
.bcn-readiness__tl-pop-cite {
  color: var(--color-content-default-tertiary);
  line-height: 1.4;
}
.bcn-readiness__filterbar {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
}
.bcn-readiness__fb-top {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-250) var(--spacing-400);
  flex-wrap: wrap;
  display: flex;
}
.bcn-readiness__fb-group {
  align-items: center;
  gap: var(--spacing-300);
  display: inline-flex;
}
.bcn-readiness__fb-label {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
}
.bcn-readiness__fb-divider {
  background: var(--color-border-default);
  width: 1px;
  margin: 0 var(--spacing-100);
  align-self: stretch;
}
.bcn-readiness__fb-clear {
  margin-left: auto;
}
.bcn-readiness__fb-group esa-text-field {
  width: 220px;
}
.bcn-readiness__fb-group esa-select {
  width: 11em;
  display: inline-block;
}
.bcn-readiness__fb-group .bcn-status-select__trigger {
  height: 32px;
  padding: 0 var(--spacing-200);
  font-size: var(--typography-label-xs-font-size, 12px);
  font-weight: var(--typography-font-weight-regular);
}
.bcn-readiness__chains {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-readiness__chainitem {
  cursor: pointer;
}
.bcn-readiness__chainitem:hover .esa-card {
  border-color: var(--color-border-default-strong);
}
.bcn-readiness__chainitem .esa-card__body {
  padding: var(--spacing-300) var(--spacing-400);
}
.bcn-readiness__study {
  gap: var(--spacing-250);
  flex-direction: column;
  display: flex;
}
.bcn-readiness__study-head {
  justify-content: space-between;
  align-items: baseline;
  gap: var(--spacing-300);
  display: flex;
}
.bcn-readiness__study-id {
  align-items: baseline;
  gap: var(--spacing-250);
  flex-flow: wrap;
  min-width: 0;
  display: flex;
}
.bcn-readiness__study-name {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.35;
}
.bcn-readiness__study-lead {
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
}
.bcn-readiness__dates {
  gap: var(--spacing-300);
  grid-template-columns: repeat(3, 1fr);
  display: grid;
}
.bcn-readiness__dates[data-tone="on-track"] {
  --_hue: var(--color-background-brand-muted);
}
.bcn-readiness__dates[data-tone="complete"] {
  --_hue: var(--bcn-status-completed);
}
.bcn-readiness__dates[data-tone="at-risk"] {
  --_hue: var(--bcn-status-in-progress);
}
.bcn-readiness__dates[data-tone="blocked"] {
  --_hue: var(--bcn-status-overdue);
}
.bcn-readiness__dates[data-tone="not-started"] {
  --_hue: var(--bcn-content-muted);
}
.bcn-readiness__date {
  justify-content: space-between;
  align-items: baseline;
  gap: var(--spacing-250);
  padding: var(--spacing-200) var(--spacing-250);
  border: 1px solid color-mix(in srgb, var(--_hue) 18%, transparent);
  border-radius: var(--radius-100);
  background: color-mix(in srgb, var(--_hue) 6%, var(--color-background-elevation-raised));
  flex-direction: row;
  display: flex;
}
.bcn-readiness__date[data-empty] {
  background: var(--color-background-elevation-raised);
}
.bcn-readiness__date-k {
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  color: color-mix(in srgb, var(--_hue) 55%, var(--color-content-default));
}
.bcn-readiness__date-v {
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-bold);
  color: var(--color-content-default);
}
.bcn-readiness__date[data-empty] .bcn-readiness__date-v {
  color: var(--bcn-content-muted);
  font-weight: var(--typography-font-weight-regular);
}
.bcn-readiness__flags {
  gap: var(--spacing-200);
  flex-wrap: wrap;
  display: flex;
}
.bcn-readiness__flag {
  align-items: center;
  gap: var(--spacing-150);
  border-radius: var(--radius-100);
  font-size: var(--font-size-150);
  background: var(--color-background-elevation-sunken);
  box-shadow: inset 0 0 0 1px var(--color-border-default-subtle);
  color: var(--color-content-default-secondary);
  padding: 2px 10px;
  line-height: 1.5;
  display: inline-flex;
}
.bcn-readiness__flag-ic {
  flex: none;
  width: 13px;
  height: 13px;
}
.bcn-readiness__flag[data-tone="warn"] .bcn-readiness__flag-ic {
  color: var(--bcn-status-in-progress);
}
.bcn-readiness__flag[data-tone="risk"] .bcn-readiness__flag-ic {
  color: var(--bcn-status-overdue);
}
.bcn-readiness__noresults {
  font-size: var(--font-size-150);
  color: var(--color-content-default-tertiary);
  margin: 0;
}
.bcn-readiness__periods {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-readiness__period {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
}
.bcn-readiness__period[data-current] {
  border-color: var(--color-background-brand-muted);
  background: color-mix(
    in srgb,
    var(--color-background-brand-muted) 4%,
    var(--color-background-elevation-raised)
  );
}
.bcn-readiness__period-sum {
  align-items: center;
  gap: var(--spacing-250);
  padding: var(--spacing-250) var(--spacing-400);
  cursor: pointer;
  list-style: none;
  display: flex;
}
.bcn-readiness__period-sum::-webkit-details-marker {
  display: none;
}
.bcn-readiness__period-sum:after {
  content: "";
  border-right: 2px solid var(--color-content-default-tertiary);
  border-bottom: 2px solid var(--color-content-default-tertiary);
  width: 8px;
  height: 8px;
  margin-left: auto;
  transition: transform 0.15s;
  transform: rotate(-45deg);
}
.bcn-readiness__period[open] > .bcn-readiness__period-sum:after {
  transform: rotate(45deg);
}
.bcn-readiness__period-label {
  font-size: var(--font-size-200);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-readiness__period-body {
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-400) var(--spacing-400);
  border-top: 1px solid var(--color-border-default-subtle);
  flex-direction: column;
  display: flex;
}
.bcn-readiness__prow {
  align-items: baseline;
  gap: var(--spacing-400);
  padding: var(--spacing-150) var(--spacing-100);
  font-size: var(--font-size-150);
  margin-left: var(--spacing-600);
  grid-template-columns: 64px 168px minmax(0, 1fr) 150px 96px;
  display: grid;
}
.bcn-readiness__prow--head {
  margin-left: var(--spacing-600);
  padding-bottom: var(--spacing-100);
  border-bottom: 1px solid var(--color-border-default);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-tertiary);
}
.bcn-readiness__pgroup {
  gap: var(--spacing-100);
  flex-direction: column;
  display: flex;
}
.bcn-readiness__pgroup-head {
  align-items: baseline;
  gap: var(--spacing-200);
  flex-wrap: wrap;
  display: flex;
}
.bcn-readiness__pgroup-name {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  line-height: 1.3;
}
.bcn-readiness__pitems {
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-readiness__pitems li + li .bcn-readiness__pitem {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-readiness__pitem {
  width: calc(100% - var(--spacing-600));
  text-align: left;
  cursor: pointer;
  border-radius: var(--radius-100);
  background: 0 0;
  border: 0;
  font-family: inherit;
}
.bcn-readiness__pitem:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-readiness__pitem-span {
  color: var(--color-content-default-secondary);
}
.bcn-readiness__pitem-name {
  align-items: center;
  gap: var(--spacing-150);
  color: var(--color-content-default);
  flex-wrap: wrap;
  min-width: 0;
  line-height: 1.35;
  display: inline-flex;
}
.bcn-readiness__pitem-owner {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
}
.bcn-readiness__starts {
  border-radius: var(--radius-100);
  background: color-mix(
    in srgb,
    var(--color-background-brand-muted) 10%,
    var(--color-background-elevation-raised)
  );
  box-shadow: inset 0 0 0 1px
    color-mix(in srgb, var(--color-background-brand-muted) 25%, transparent);
  color: color-mix(in srgb, var(--color-background-brand-muted) 60%, var(--color-content-default));
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-medium);
  align-items: center;
  padding: 0 8px;
  line-height: 1.6;
  display: inline-flex;
}
@media (width<=900px) {
  .bcn-readiness__dates {
    grid-template-columns: 1fr;
  }
}
@media (width<=900px) {
  .bcn-readiness__prow {
    gap: var(--spacing-150) var(--spacing-300);
    margin-left: var(--spacing-300);
    flex-wrap: wrap;
    display: flex;
  }
}
@media (width<=900px) {
  .bcn-readiness__prow--head {
    display: none;
  }
}
.bcn-node-head {
  align-items: center;
  gap: var(--spacing-200);
  flex-wrap: wrap;
  min-width: 0;
  display: flex;
}
.bcn-node-head__id {
  font-family: var(--typography-font-family-mono);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
  flex-shrink: 0;
}
.bcn-node-head__title {
  font-family: var(--font-decorative);
  font-size: 1.125rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  min-width: 0;
  line-height: 1.25;
}
.bcn-node-body {
  flex-direction: column;
  min-height: 100%;
  display: flex;
}
.bcn-node-body [data-node-panel][hidden] {
  display: none;
}
.bcn-node-body [data-node-panel]:not([hidden]) {
  flex-direction: column;
  flex: 1;
  display: flex;
}
.bcn-node-foot {
  justify-content: space-between;
  align-items: center;
  width: 100%;
  display: flex;
}
.bcn-node-foot a {
  text-decoration: none;
}
.bcn-create-head {
  align-items: center;
  gap: var(--spacing-200);
  min-width: 0;
  display: flex;
}
.bcn-create-head__title {
  font-family: var(--font-decorative);
  font-size: 1.125rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  min-width: 0;
  line-height: 1.25;
}
.bcn-create {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-create__section {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-create__label {
  font-size: var(--typography-label-md-font-size, 0.9375rem);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
}
.bcn-create__sched-grid {
  gap: var(--spacing-200) var(--spacing-300);
  grid-template-columns: 1fr 1fr;
  display: grid;
}
.bcn-create-foot {
  justify-content: flex-end;
  align-items: center;
  gap: var(--spacing-200);
  width: 100%;
  display: flex;
}
.bcn-roles-edit-head {
  align-items: center;
  gap: var(--spacing-200);
  flex-wrap: wrap;
  min-width: 0;
  display: flex;
}
.bcn-roles-edit-head__ref {
  font-family: var(--typography-font-family-mono);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
  flex-shrink: 0;
}
.bcn-roles-edit-head__title {
  font-family: var(--font-decorative);
  font-size: 1.125rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  min-width: 0;
  line-height: 1.25;
}
.bcn-roles-edit {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-roles-edit-foot {
  justify-content: flex-end;
  align-items: center;
  gap: var(--spacing-200);
  width: 100%;
  display: flex;
}
.bcn-gantt-coa {
  font-family: var(--typography-font-family-mono);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  padding: 2px 8px;
}
.bcn-gantt-utils {
  align-items: center;
  gap: var(--spacing-300);
  display: flex;
}
html,
.modern-layout__content {
  scroll-behavior: smooth;
}
@media (prefers-reduced-motion: reduce) {
  html,
  .modern-layout__content {
    scroll-behavior: auto;
  }
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-sm {
  font-family: var(--typography-microcopy-sm-font-family);
  font-size: var(--typography-microcopy-sm-font-size);
  font-weight: var(--typography-microcopy-sm-font-weight);
  line-height: var(--typography-microcopy-sm-line-height);
  letter-spacing: var(--typography-microcopy-sm-letter-spacing);
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.bcn-funding {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-funding__table {
  border-collapse: collapse;
  font-variant-numeric: tabular-nums;
  width: 100%;
}
.bcn-funding__table th,
.bcn-funding__table td {
  padding: var(--spacing-150) var(--spacing-200);
  font-size: var(--font-size-200);
  text-align: left;
  border-bottom: 1px solid var(--color-border-default-subtle);
}
.bcn-funding__table thead th {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-tertiary);
  border-bottom: 1px solid var(--color-border-default);
}
.bcn-funding--slim .bcn-funding__table thead th {
  font-size: var(--typography-label-md-font-size, var(--typography-label-xs-font-size, 12px));
  font-weight: var(--typography-label-md-font-weight, var(--typography-font-weight-medium));
  color: var(--form-label-color);
}
.bcn-funding--slim .bcn-funding__table:not(:has([data-cell="sub"])) .bcn-funding__edit {
  width: 60%;
}
.bcn-funding--slim .bcn-funding__field {
  width: 100%;
}
.bcn-funding__num {
  text-align: right;
}
.bcn-funding__year {
  font-weight: var(--typography-font-weight-regular);
  color: var(--color-content-default);
}
.bcn-funding__muted {
  color: var(--color-content-default-secondary);
}
.bcn-funding__strong {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-funding__table tfoot th,
.bcn-funding__table tfoot td {
  border-top: 1px solid var(--color-border-default-strong);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  border-bottom: 0;
}
.bcn-funding__edit {
  padding-top: var(--spacing-100);
  padding-bottom: var(--spacing-100);
}
.bcn-funding__field {
  width: 130px;
  margin-left: auto;
}
.bcn-status-select {
  gap: var(--spacing-100);
  flex-direction: column;
  display: flex;
}
.bcn-status-select__dd {
  position: relative;
}
.bcn-status-select__trigger {
  align-items: center;
  gap: var(--spacing-200);
  width: 100%;
  height: 40px;
  padding: 0 var(--spacing-300);
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--form-border-color);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition:
    border-color 0.15s,
    box-shadow 0.15s;
  display: flex;
}
.bcn-status-select__trigger:hover {
  border-color: var(--color-border-default-strong);
}
.bcn-status-select__trigger[aria-expanded="true"] {
  border-color: var(--color-background-brand);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-background-brand) 18%, transparent);
}
.bcn-status-select__value {
  text-align: left;
  flex: 1;
}
.bcn-status-select__chev {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.15s;
}
.bcn-status-select__trigger[aria-expanded="true"] .bcn-status-select__chev {
  transform: rotate(180deg);
}
.bcn-status-select__dot {
  border-radius: 50%;
  flex-shrink: 0;
  width: 9px;
  height: 9px;
}
.bcn-status-select[data-value="not-started"] .bcn-status-select__dot--trigger {
  background: var(--bcn-status-not-started);
}
.bcn-status-select[data-value="in-progress"] .bcn-status-select__dot--trigger {
  background: var(--bcn-status-in-progress);
}
.bcn-status-select[data-value="completed"] .bcn-status-select__dot--trigger {
  background: var(--bcn-status-completed);
}
.bcn-status-select__menu {
  z-index: 20;
  width: max-content;
  min-width: 100%;
  padding: var(--spacing-100);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-md);
  box-shadow: var(--elevation-4);
  margin: 0;
  list-style: none;
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
}
.bcn-status-select__menu[hidden] {
  display: none;
}
.bcn-status-select__opt {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-200) var(--spacing-300);
  color: var(--color-content-default);
  border-radius: var(--radius-200);
  cursor: pointer;
  white-space: nowrap;
  font-size: 0.875rem;
  display: flex;
}
.bcn-status-select__opt:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-status-select__opt[aria-selected="true"] {
  background: var(--color-background-elevation-sunken);
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-rrep {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-rrep__list {
  flex-direction: column;
  display: flex;
}
.bcn-rrep__add {
  align-self: flex-start;
}
.esa-filter-clear-button {
  --_clear-text: var(--color-content-default-secondary, #646464);
  --_clear-text-hover: var(--color-content-utility-danger, var(--color-content-brand, #2a7e3b));
  --_clear-icon-size: 18px;
  align-items: center;
  gap: var(--spacing-100, 0.25rem);
  padding: var(--spacing-100, 0.25rem) var(--spacing-200, 0.5rem);
  border-radius: var(--radius-sm, 0.25rem);
  color: var(--_clear-text);
  cursor: pointer;
  text-underline-offset: 2px;
  transition:
    color var(--transition-fast, 0.15s ease),
    background var(--transition-fast, 0.15s ease);
  background: 0 0;
  border: none;
  text-decoration: underline;
  display: inline-flex;
}
.esa-filter-clear-button:hover {
  color: var(--_clear-text-hover);
  background: var(--color-background-overlay-hover, #00000008);
}
.esa-filter-clear-button:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
}
.esa-filter-clear-button__icon {
  width: var(--_clear-icon-size);
  height: var(--_clear-icon-size);
  flex: none;
}
.esa-filter-clear-button__label {
  white-space: nowrap;
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
.esa-card--outlined {
  --_card-border: var(--color-border-default, #cecece);
}
.esa-card--padding-spacious {
  --_card-padding: var(--spacing-700, 3rem);
}
.esa-card__body {
  padding: var(--_card-padding);
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
.esa-pill--info {
  --_pill-bg: var(--color-background-utility-info-subtle, var(--color-blue-2));
  --_pill-text: var(--color-content-utility-info, #0d74ce);
  --_pill-border: var(--color-border-utility-info, var(--color-blue-6));
}
.esa-pill--success {
  --_pill-bg: var(--color-background-utility-success-subtle, var(--color-green-2));
  --_pill-text: var(--color-content-utility-success, #218358);
  --_pill-border: var(--color-border-utility-success, var(--color-green-6));
}
.esa-pill--warning {
  --_pill-bg: var(--color-background-utility-warning-subtle, var(--color-yellow-2));
  --_pill-text: var(--color-content-utility-warning, #ab6400);
  --_pill-border: var(--color-border-utility-warning, var(--color-yellow-6));
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
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.page-layout {
  min-height: calc(100vh - 52px);
  padding: var(--spacing-600);
  background: var(--bcn-gray-50);
  box-sizing: border-box;
  flex-direction: column;
  display: flex;
}
.page-layout__container {
  flex-direction: column;
  display: flex;
}
.page-layout--bleed .page-layout__container {
  padding: 0 var(--spacing-600) var(--spacing-600);
}
.page-layout__bleed,
.page-layout section {
  width: 100%;
}
.breadcrumbs {
  padding: var(--spacing-400) 0;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-400);
  display: flex;
}
.breadcrumbs__items {
  gap: var(--spacing-100);
  flex-wrap: wrap;
  align-items: center;
  display: flex;
}
.breadcrumb-item {
  color: var(--bcn-gray-600);
  text-transform: capitalize;
  font-size: 0.875rem;
}
a.breadcrumb-item {
  text-decoration: none;
}
a.breadcrumb-item:hover {
  text-decoration: underline;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title {
  border-bottom: 1px solid var(--bcn-gray-200);
  padding: var(--spacing-500) 0;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  display: flex;
}
.page-layout__title-main {
  align-items: center;
  gap: var(--spacing-400);
  min-width: 0;
  display: flex;
}
.page-layout__title h1 {
  align-items: center;
  gap: var(--spacing-300);
  font-family: var(--font-decorative);
  font-weight: var(--typography-font-weight-bold);
  font-size: var(--font-size-500);
  color: var(--bcn-gray-1000);
  margin: 0;
  display: flex;
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
.page-layout__utilities {
  gap: var(--spacing-200);
  display: flex;
}
.page-layout__content {
  padding: var(--spacing-500) 0;
  min-height: 70vh;
  position: relative;
}
```
