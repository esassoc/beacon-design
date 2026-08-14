# Observation drawer (read-only)

The compact read-only counterpart to the write drawer (esa-side-dialog, 520px): an observation's facts (species code, kind, buffer distance, first observed), its latest field log, and — the reason it matters — the counted list of "Work areas within buffer" (each opening that site's write drawer). From a site you see its status; from an observation you see everything its buffer covers.

## Key decisions
- Read-only by design: an observation is a field FACT (a sighting), not a decision — you review the work area, you do not "edit" the bird.
- There is NO estimated-end date and no countdown — the observation carries no projection of when it stops mattering; it is active until the Monitoring Portal says otherwise. First observed is the only date, because it happened.
- The "Work areas within buffer" list reuses the same intersection that powers provisional-block detection and the grid's Work Areas Affected column — one computation, three surfaces.

## Gotchas
- A tracking-only sighting (buffer 0) still opens this drawer but its impact list is empty and it must never appear as affecting any work area.
- Impact rows show each covered site's DERIVED status chip — a reviewed site inside the buffer keeps its review color here too (the precedence rule is visible in this list).

## Done when
- Shows species/kind/buffer/first-observed + latest log (when present) + a counted "Work areas within buffer" list with derived-status chips; each row opens that work area's write drawer; no estimated-end or countdown renders anywhere.

## Markup
```html
<esa-side-dialog
  id="obs-dialog"
  size="md"
  style="--_width: 520px; --z-modal: 1300; --z-modal-backdrop: 1250"
  position="right"
  open=""
>
  <div slot="header" class="wa__header">
    <div class="wa__headmain">
      <h2 class="wa__title" id="obs-title">Swainson's Hawk</h2>
      <span id="obs-chip"
        ><span
          class="bcn-status-chip"
          data-status="neutral"
          style="--_chip: var(--st-neutral)"
        >
          <span class="bcn-status-chip__dot"></span>
          <span class="bcn-status-chip__label">Active</span>
        </span>
      </span>
    </div>
    <p class="wa__subtitle" id="obs-sub">SWHA-2289-05182026</p>
  </div>
  <div class="wa">
    <div class="od__meta">
      <div class="bcn-key-value">
        <span class="bcn-key-value__key">Species code</span>
        <span class="wa__kv-val" id="obs-code">SWHA</span>
      </div>
      <div class="bcn-key-value">
        <span class="bcn-key-value__key">Kind</span>
        <span class="wa__kv-val" id="obs-kind">Nesting bird</span>
      </div>
      <div class="bcn-key-value">
        <span class="bcn-key-value__key">Buffer</span>
        <span class="wa__kv-val" id="obs-buffer">2,640 ft</span>
      </div>
      <div class="bcn-key-value">
        <span class="bcn-key-value__key">First observed</span>
        <span class="wa__kv-val" id="obs-first">May 18, 2026</span>
      </div>
    </div>
    <section id="obs-log-wrap">
      <h3 class="wa__section">
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
              d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"
            ></path>
            <path d="M2 6h4"></path>
            <path d="M2 10h4"></path>
            <path d="M2 14h4"></path>
            <path d="M2 18h4"></path>
            <path
              d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
            ></path>
          </svg>
        </span>
        Latest log
      </h3>
      <blockquote class="wa__note wa__note--log" id="obs-log">
        May 18, 2026, 1:31 PM: Active SWHA nest observed in tree during site clearance
        visit.
      </blockquote>
    </section>
    <section>
      <h3 class="wa__section">
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
            <line x1="22" x2="18" y1="12" y2="12"></line>
            <line x1="6" x2="2" y1="12" y2="12"></line>
            <line x1="12" x2="12" y1="6" y2="2"></line>
            <line x1="12" x2="12" y1="22" y2="18"></line>
          </svg>
        </span>
        Work areas within buffer
        <span id="obs-impact-count"
          ><span class="esa-badge esa-badge--primary esa-badge--sm">
            <span class="esa-badge__text">19</span>
          </span>
        </span>
      </h3>
      <ul class="od__impact" id="obs-impact">
        <li class="entry entry--card" data-wa="DCRDS-DH-184" tabindex="0" role="button">
          <span class="entry__badge entry__badge--wa">DCRDS-DH-184</span>
          <div class="entry__body">
            <p class="entry__line">
              <span class="entry__type">Work area</span><span class="entry__sep"> · </span
              ><span class="entry__primary">Boring</span>
              <span class="gate__chipwrap"
                ><span
                  class="bcn-status-chip"
                  data-status="provisional-block"
                  style="--_chip: var(--st-provisional-block)"
                >
                  <span class="bcn-status-chip__dot"></span>
                  <span class="bcn-status-chip__label">Provisional Block</span>
                </span>
              </span>
            </p>
          </div>
          <span class="entry__meta">146 ft</span>
        </li>
        <li class="entry entry--card" data-wa="DCRDS-DH-183" tabindex="0" role="button">
          <span class="entry__badge entry__badge--wa">DCRDS-DH-183</span>
          <div class="entry__body">
            <p class="entry__line">
              <span class="entry__type">Work area</span><span class="entry__sep"> · </span
              ><span class="entry__primary">Boring</span>
              <span class="gate__chipwrap"
                ><span
                  class="bcn-status-chip"
                  data-status="provisional-block"
                  style="--_chip: var(--st-provisional-block)"
                >
                  <span class="bcn-status-chip__dot"></span>
                  <span class="bcn-status-chip__label">Provisional Block</span>
                </span>
              </span>
            </p>
          </div>
          <span class="entry__meta">702 ft</span>
        </li>
        <li class="entry entry--card" data-wa="DCTR2-DH-010" tabindex="0" role="button">
          <span class="entry__badge entry__badge--wa">DCTR2-DH-010</span>
          <div class="entry__body">
            <p class="entry__line">
              <span class="entry__type">Work area</span><span class="entry__sep"> · </span
              ><span class="entry__primary">Water Quality Test/Boring</span>
              <span class="gate__chipwrap"
                ><span
                  class="bcn-status-chip"
                  data-status="blocked"
                  style="--_chip: var(--st-blocked)"
                >
                  <span class="bcn-status-chip__dot"></span>
                  <span class="bcn-status-chip__label">Blocked</span>
                </span>
              </span>
            </p>
          </div>
          <span class="entry__meta">878 ft</span>
        </li>
        <li class="entry entry--card" data-wa="DCTR2-CPT-007" tabindex="0" role="button">
          <span class="entry__badge entry__badge--wa">DCTR2-CPT-007</span>
          <div class="entry__body">
            <p class="entry__line">
              <span class="entry__type">Work area</span><span class="entry__sep"> · </span
              ><span class="entry__primary">CPT</span>
              <span class="gate__chipwrap"
                ><span
                  class="bcn-status-chip"
                  data-status="provisional-block"
                  style="--_chip: var(--st-provisional-block)"
                >
                  <span class="bcn-status-chip__dot"></span>
                  <span class="bcn-status-chip__label">Provisional Block</span>
                </span>
              </span>
            </p>
          </div>
          <span class="entry__meta">907 ft</span>
        </li>
        <li class="entry entry--card" data-wa="DCTR2-DH-006" tabindex="0" role="button">
          <span class="entry__badge entry__badge--wa">DCTR2-DH-006</span>
          <div class="entry__body">
            <p class="entry__line">
              <span class="entry__type">Work area</span><span class="entry__sep"> · </span
              ><span class="entry__primary">Boring</span>
              <span class="gate__chipwrap"
                ><span
                  class="bcn-status-chip"
                  data-status="provisional-block"
                  style="--_chip: var(--st-provisional-block)"
                >
                  <span class="bcn-status-chip__dot"></span>
                  <span class="bcn-status-chip__label">Provisional Block</span>
                </span>
              </span>
            </p>
          </div>
          <span class="entry__meta">925 ft</span>
        </li>
        <li class="entry entry--card" data-wa="DCLEV-DH-034" tabindex="0" role="button">
          <span class="entry__badge entry__badge--wa">DCLEV-DH-034</span>
          <div class="entry__body">
            <p class="entry__line">
              <span class="entry__type">Work area</span><span class="entry__sep"> · </span
              ><span class="entry__primary">Boring</span>
              <span class="gate__chipwrap"
                ><span
                  class="bcn-status-chip"
                  data-status="provisional-block"
                  style="--_chip: var(--st-provisional-block)"
                >
                  <span class="bcn-status-chip__dot"></span>
                  <span class="bcn-status-chip__label">Provisional Block</span>
                </span>
              </span>
            </p>
          </div>
          <span class="entry__meta">1,006 ft</span>
        </li>
        <li class="entry entry--card" data-wa="DCLEV-DH-035" tabindex="0" role="button">
          <span class="entry__badge entry__badge--wa">DCLEV-DH-035</span>
          <div class="entry__body">
            <p class="entry__line">
              <span class="entry__type">Work area</span><span class="entry__sep"> · </span
              ><span class="entry__primary">Boring</span>
              <span class="gate__chipwrap"
                ><span
                  class="bcn-status-chip"
                  data-status="provisional-block"
                  style="--_chip: var(--st-provisional-block)"
                >
                  <span class="bcn-status-chip__dot"></span>
                  <span class="bcn-status-chip__label">Provisional Block</span>
                </span>
              </span>
            </p>
          </div>
          <span class="entry__meta">1,067 ft</span>
        </li>
        <li class="entry entry--card" data-wa="DCLEV-DH-036" tabindex="0" role="button">
          <span class="entry__badge entry__badge--wa">DCLEV-DH-036</span>
          <div class="entry__body">
            <p class="entry__line">
              <span class="entry__type">Work area</span><span class="entry__sep"> · </span
              ><span class="entry__primary">Boring</span>
              <span class="gate__chipwrap"
                ><span
                  class="bcn-status-chip"
                  data-status="provisional-block"
                  style="--_chip: var(--st-provisional-block)"
                >
                  <span class="bcn-status-chip__dot"></span>
                  <span class="bcn-status-chip__label">Provisional Block</span>
                </span>
              </span>
            </p>
          </div>
          <span class="entry__meta">1,197 ft</span>
        </li>
        <li class="entry entry--card" data-wa="DCLEV-DH-033" tabindex="0" role="button">
          <span class="entry__badge entry__badge--wa">DCLEV-DH-033</span>
          <div class="entry__body">
            <p class="entry__line">
              <span class="entry__type">Work area</span><span class="entry__sep"> · </span
              ><span class="entry__primary">Boring</span>
              <span class="gate__chipwrap"
                ><span
                  class="bcn-status-chip"
                  data-status="provisional-block"
                  style="--_chip: var(--st-provisional-block)"
                >
                  <span class="bcn-status-chip__dot"></span>
                  <span class="bcn-status-chip__label">Provisional Block</span>
                </span>
              </span>
            </p>
          </div>
          <span class="entry__meta">1,199 ft</span>
        </li>
        <li class="entry entry--card" data-wa="DCRDS-DH-182" tabindex="0" role="button">
          <span class="entry__badge entry__badge--wa">DCRDS-DH-182</span>
          <div class="entry__body">
            <p class="entry__line">
              <span class="entry__type">Work area</span><span class="entry__sep"> · </span
              ><span class="entry__primary">Boring</span>
              <span class="gate__chipwrap"
                ><span
                  class="bcn-status-chip"
                  data-status="provisional-block"
                  style="--_chip: var(--st-provisional-block)"
                >
                  <span class="bcn-status-chip__dot"></span>
                  <span class="bcn-status-chip__label">Provisional Block</span>
                </span>
              </span>
            </p>
          </div>
          <span class="entry__meta">1,445 ft</span>
        </li>
        <li class="entry entry--card" data-wa="DCLEV-DH-037" tabindex="0" role="button">
          <span class="entry__badge entry__badge--wa">DCLEV-DH-037</span>
          <div class="entry__body">
            <p class="entry__line">
              <span class="entry__type">Work area</span><span class="entry__sep"> · </span
              ><span class="entry__primary">Boring</span>
              <span class="gate__chipwrap"
                ><span
                  class="bcn-status-chip"
                  data-status="provisional-block"
                  style="--_chip: var(--st-provisional-block)"
                >
                  <span class="bcn-status-chip__dot"></span>
                  <span class="bcn-status-chip__label">Provisional Block</span>
                </span>
              </span>
            </p>
          </div>
          <span class="entry__meta">1,531 ft</span>
        </li>
        <li class="entry entry--card" data-wa="DCLEV-DH-027" tabindex="0" role="button">
          <span class="entry__badge entry__badge--wa">DCLEV-DH-027</span>
          <div class="entry__body">
            <p class="entry__line">
              <span class="entry__type">Work area</span><span class="entry__sep"> · </span
              ><span class="entry__primary">Boring</span>
              <span class="gate__chipwrap"
                ><span
                  class="bcn-status-chip"
                  data-status="provisional-block"
                  style="--_chip: var(--st-provisional-block)"
                >
                  <span class="bcn-status-chip__dot"></span>
                  <span class="bcn-status-chip__label">Provisional Block</span>
                </span>
              </span>
            </p>
          </div>
          <span class="entry__meta">1,657 ft</span>
        </li>
        <li class="entry entry--card" data-wa="DCTR2-DH-012" tabindex="0" role="button">
          <span class="entry__badge entry__badge--wa">DCTR2-DH-012</span>
          <div class="entry__body">
            <p class="entry__line">
              <span class="entry__type">Work area</span><span class="entry__sep"> · </span
              ><span class="entry__primary">Boring</span>
              <span class="gate__chipwrap"
                ><span
                  class="bcn-status-chip"
                  data-status="provisional-block"
                  style="--_chip: var(--st-provisional-block)"
                >
                  <span class="bcn-status-chip__dot"></span>
                  <span class="bcn-status-chip__label">Provisional Block</span>
                </span>
              </span>
            </p>
          </div>
          <span class="entry__meta">1,875 ft</span>
        </li>
        <li class="entry entry--card" data-wa="DCLEV-DH-032" tabindex="0" role="button">
          <span class="entry__badge entry__badge--wa">DCLEV-DH-032</span>
          <div class="entry__body">
            <p class="entry__line">
              <span class="entry__type">Work area</span><span class="entry__sep"> · </span
              ><span class="entry__primary">Boring</span>
              <span class="gate__chipwrap"
                ><span
                  class="bcn-status-chip"
                  data-status="provisional-block"
                  style="--_chip: var(--st-provisional-block)"
                >
                  <span class="bcn-status-chip__dot"></span>
                  <span class="bcn-status-chip__label">Provisional Block</span>
                </span>
              </span>
            </p>
          </div>
          <span class="entry__meta">2,026 ft</span>
        </li>
        <li class="entry entry--card" data-wa="DCLEV-DH-025" tabindex="0" role="button">
          <span class="entry__badge entry__badge--wa">DCLEV-DH-025</span>
          <div class="entry__body">
            <p class="entry__line">
              <span class="entry__type">Work area</span><span class="entry__sep"> · </span
              ><span class="entry__primary">Boring</span>
              <span class="gate__chipwrap"
                ><span
                  class="bcn-status-chip"
                  data-status="provisional-block"
                  style="--_chip: var(--st-provisional-block)"
                >
                  <span class="bcn-status-chip__dot"></span>
                  <span class="bcn-status-chip__label">Provisional Block</span>
                </span>
              </span>
            </p>
          </div>
          <span class="entry__meta">2,120 ft</span>
        </li>
        <li class="entry entry--card" data-wa="DCRDS-DH-181" tabindex="0" role="button">
          <span class="entry__badge entry__badge--wa">DCRDS-DH-181</span>
          <div class="entry__body">
            <p class="entry__line">
              <span class="entry__type">Work area</span><span class="entry__sep"> · </span
              ><span class="entry__primary">Boring</span>
              <span class="gate__chipwrap"
                ><span
                  class="bcn-status-chip"
                  data-status="provisional-block"
                  style="--_chip: var(--st-provisional-block)"
                >
                  <span class="bcn-status-chip__dot"></span>
                  <span class="bcn-status-chip__label">Provisional Block</span>
                </span>
              </span>
            </p>
          </div>
          <span class="entry__meta">2,189 ft</span>
        </li>
        <li class="entry entry--card" data-wa="DCLEV-DH-029" tabindex="0" role="button">
          <span class="entry__badge entry__badge--wa">DCLEV-DH-029</span>
          <div class="entry__body">
            <p class="entry__line">
              <span class="entry__type">Work area</span><span class="entry__sep"> · </span
              ><span class="entry__primary">Boring</span>
              <span class="gate__chipwrap"
                ><span
                  class="bcn-status-chip"
                  data-status="provisional-block"
                  style="--_chip: var(--st-provisional-block)"
                >
                  <span class="bcn-status-chip__dot"></span>
                  <span class="bcn-status-chip__label">Provisional Block</span>
                </span>
              </span>
            </p>
          </div>
          <span class="entry__meta">2,482 ft</span>
        </li>
        <li class="entry entry--card" data-wa="DCLEV-DH-023" tabindex="0" role="button">
          <span class="entry__badge entry__badge--wa">DCLEV-DH-023</span>
          <div class="entry__body">
            <p class="entry__line">
              <span class="entry__type">Work area</span><span class="entry__sep"> · </span
              ><span class="entry__primary">Boring</span>
              <span class="gate__chipwrap"
                ><span
                  class="bcn-status-chip"
                  data-status="provisional-block"
                  style="--_chip: var(--st-provisional-block)"
                >
                  <span class="bcn-status-chip__dot"></span>
                  <span class="bcn-status-chip__label">Provisional Block</span>
                </span>
              </span>
            </p>
          </div>
          <span class="entry__meta">2,598 ft</span>
        </li>
        <li class="entry entry--card" data-wa="DCTR2-DH-003" tabindex="0" role="button">
          <span class="entry__badge entry__badge--wa">DCTR2-DH-003</span>
          <div class="entry__body">
            <p class="entry__line">
              <span class="entry__type">Work area</span><span class="entry__sep"> · </span
              ><span class="entry__primary">Boring</span>
              <span class="gate__chipwrap"
                ><span
                  class="bcn-status-chip"
                  data-status="provisional-block"
                  style="--_chip: var(--st-provisional-block)"
                >
                  <span class="bcn-status-chip__dot"></span>
                  <span class="bcn-status-chip__label">Provisional Block</span>
                </span>
              </span>
            </p>
          </div>
          <span class="entry__meta">2,621 ft</span>
        </li>
      </ul>
    </section>
  </div>
  <div slot="footer" class="wa__footer">
    <!-- "Show on map" (round-5 ch5) — same jump as the work-area drawer's. -->
    <span id="obs-showmap" class="wa__footer-start">
      <span
        class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--md"
      >
        <button class="esa-button__native" type="button">
          <span class="esa-button__label">
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
                  d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                ></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </span>
            Show on map
          </span>
        </button>
      </span>
    </span>
  </div>
</esa-side-dialog>
```

## Styles
```css
.esa-button {
  --_btn-height: var(--form-height-md, 40px);
  --_btn-padding-x: var(--form-padding-x-md, 16px);
  --_btn-font-size: var(--form-font-size-md, 14px);
  --_btn-radius: var(--form-radius-md, 6px);
  --_accent: var(--color-primary, #46a758);
  --_accent-hover: var(--color-primary-hover, #3e9b4f);
  --_on: var(--color-text-inverse, #ffffff);
  --_accent-text: var(--_accent);
  --_btn-tint-hover: color-mix(in srgb, var(--_accent) 8%, transparent);
  --_btn-tint-active: color-mix(in srgb, var(--_accent) 14%, transparent);
  display: inline-block;
}
.esa-button--xs {
  --_btn-height: var(--form-height-xs, 28px);
  --_btn-padding-x: var(--form-padding-x-xs, 8px);
  --_btn-font-size: var(--form-font-size-xs, 11px);
  --_btn-radius: var(--form-radius-xs, 4px);
}
.esa-button--sm {
  --_btn-height: var(--form-height-sm, 32px);
  --_btn-padding-x: var(--form-padding-x-sm, 12px);
  --_btn-font-size: var(--form-font-size-sm, 12px);
  --_btn-radius: var(--form-radius-sm, 4px);
}
.esa-button--lg {
  --_btn-height: var(--form-height-lg, 48px);
  --_btn-padding-x: var(--form-padding-x-lg, 20px);
  --_btn-font-size: var(--form-font-size-lg, 16px);
  --_btn-radius: var(--form-radius-lg, 8px);
}
.esa-button--sm .esa-button__native {
  height: auto;
  padding-block: var(--spacing-150, 6px);
}
.esa-button--sm.esa-button--icon-only .esa-button__native {
  height: var(--form-height-sm, 32px);
  padding-block: 0;
}
.esa-button--color-primary {
  --_accent-text: var(--color-primary-strong);
}
.esa-button--color-secondary {
  --_accent: var(--color-secondary);
  --_accent-hover: var(--color-secondary-hover);
  --_on: var(--color-secondary-on-fill, var(--color-gray-12));
  --_accent-text: var(--color-secondary-strong);
}
.esa-button--color-danger {
  --_accent: var(--color-danger);
  --_accent-hover: var(--color-danger-hover);
  --_accent-text: var(--color-danger-strong);
}
.esa-button--color-success {
  --_accent: var(--color-success);
  --_accent-hover: var(--color-success-hover);
  --_on: var(--color-success-on-fill);
  --_accent-text: var(--color-success-strong);
}
.esa-button--color-warning {
  --_accent: var(--color-warning);
  --_accent-hover: var(--color-warning-hover);
  --_on: var(--button-on-warning, var(--color-gray-12));
  --_accent-text: var(--color-warning-strong);
}
.esa-button--color-info {
  --_accent: var(--color-info);
  --_accent-hover: var(--color-info-hover);
  --_accent-text: var(--color-info-strong);
}
.esa-button--color-ai {
  --_accent: var(--color-ai);
  --_accent-hover: var(--color-ai-hover);
  --_accent-text: var(--color-ai-strong);
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: transparent;
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
    var(--color-surface-sunken, #efefef) 45%,
    var(--color-surface, #fff)
  );
  color: var(--_accent-text);
  border-color: var(--color-border-strong, #d4d4d4);
}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),
.esa-button--appearance-soft.esa-button--active .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent);
}
.esa-button--color-ghost .esa-button__native {
  background: transparent;
  color: var(--color-text-primary, #171717);
  border-color: transparent;
}
.esa-button--color-ghost.esa-button--appearance-outline .esa-button__native,
.esa-button--color-ghost.esa-button--appearance-dashed .esa-button__native {
  border-color: var(--color-border, #e5e5e5);
}
.esa-button--color-ghost .esa-button__native:hover:not(:disabled),
.esa-button--color-ghost.esa-button--active .esa-button__native {
  background: var(--color-surface-sunken, #efefef);
}
.esa-button__native {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  height: var(--_btn-height);
  padding-inline: var(--_btn-padding-x);
  border: 1px solid transparent;
  border-radius: var(--_btn-radius);
  font-size: var(--_btn-font-size);
  font-family: var(--font-sans, system-ui, sans-serif);
  font-weight: var(--font-weight-medium, 500);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
}
.esa-button__native:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
}
.esa-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
.esa-button--icon-only .esa-button__native {
  padding-inline: 0;
  width: var(--_btn-height);
}
.esa-button__label {
  white-space: nowrap;
}
.esa-button__label--hidden {
  visibility: hidden;
  width: 0;
  overflow: hidden;
}
.esa-button__spinner {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: esa-button-spin 0.6s linear infinite;
}
.bcn-search-trigger .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
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
  color: var(--color-text-tertiary);
  flex: none;
}
.bcn-gd-row .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
}
.bcn-disclosure .esa-icon {
  transition: transform 0.15s ease;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
.bcn-countchip__num .esa-badge {
  --badge-radius: var(--radius-full);
  --badge-bg: var(--color-border);
  --badge-text-color: var(--color-text-secondary);
  min-width: 19px;
  height: 19px;
  padding: 0 4px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8125rem;
  font-variant-numeric: tabular-nums;
  line-height: 1;
  box-shadow: 0 0 0 1.5px var(--color-surface);
}
.bcn-ev-staging__title .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.bcn-ev-targets__title .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.bcn-ev-attached__mark .esa-badge {
  --badge-bg: var(--color-info-subtle);
  --badge-text-color: var(--color-text-primary);
  border: 1px solid color-mix(in srgb, var(--color-info) 35%, transparent);
  font-weight: var(--font-weight-medium);
}
.bcn-ev-row__mark .esa-badge {
  --badge-bg: var(--color-info-subtle);
  --badge-text-color: var(--color-text-primary);
  border: 1px solid color-mix(in srgb, var(--color-info) 35%, transparent);
  font-weight: var(--font-weight-medium);
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--bcn-gray-100);
  --badge-text-color: var(--bcn-gray-700);
  font-weight: var(--font-weight-medium);
}
.topbar__right .esa-icon-button {
  color: var(--color-text-secondary);
}
.user-panel__item .esa-icon {
  color: var(--bcn-gray-500);
}
.user-panel__item--danger .esa-icon {
  color: var(--color-danger);
}
.project-switcher__trigger > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-500);
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-primary);
}
.nav-section__header > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-950);
  transition: color 0.15s ease;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  transition:
    transform 0.15s ease,
    opacity 0.2s ease-in-out;
  flex-shrink: 0;
}
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.side-nav.collapsed .nav-section__header > .esa-icon:last-child {
  display: none;
}
.comp-picker__trigger .esa-icon {
  color: var(--color-text-tertiary);
  flex-shrink: 0;
}
.entry {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-300);
  padding: var(--spacing-250) var(--spacing-300);
}
.entry__badge {
  flex-shrink: 0;
  margin-top: 1px;
  padding: 0.125rem 0.375rem;
  border-radius: var(--radius-100);
  font-family: var(--font-mono, monospace);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  line-height: 1.4;
  letter-spacing: 0;
  text-transform: uppercase;
  white-space: nowrap;
}
.entry__badge--obs {
  color: var(--obs-color-strong);
  background: color-mix(in srgb, var(--obs-color) 12%, white);
}
.entry__badge--wa {
  color: var(--color-primary);
  background: color-mix(in srgb, var(--color-primary) 10%, white);
}
.entry__body {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.entry__line {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.45;
}
.entry__type {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.entry__sep {
  color: var(--color-text-tertiary);
}
.entry__primary {
  color: var(--color-text-primary);
}
.entry__line .gate__chipwrap {
  vertical-align: text-bottom;
}
.entry__secondary {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.45;
  color: var(--color-text-secondary);
}
.entry__meta {
  flex-shrink: 0;
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
  white-space: nowrap;
  text-align: right;
}
.entry--empty {
  padding: var(--spacing-200) 0;
  font-size: 0.875rem;
  color: var(--color-text-tertiary);
}
.entry--card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
  cursor: pointer;
  transition:
    background 0.12s ease,
    border-color 0.12s ease;
}
.entry--card:hover {
  background: var(--grid-row-bg-hover);
  border-color: var(--color-border-strong);
}
.bcn-status-chip[data-status="provisional-block"],
.bcn-grid-chip[data-status="provisional-block"],
.bcn-status-chip[data-status="provisional-block"] .bcn-status-chip__dot,
.bcn-grid-chip[data-status="provisional-block"] .bcn-grid-chip__dot {
  background: var(--color-surface);
  box-shadow: inset 0 0 0 1.5px var(--st-provisional-block);
}
.wa {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.wa[hidden] {
  display: none;
}
.wa__header {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.wa__headmain {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
}
.wa__title {
  margin: 0;
  font-size: var(--type-size-400);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.wa__subtitle {
  margin: 0;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}
#wa-read > .wa-comments,
#wa-read > .wa__more {
  margin-top: var(--spacing-500);
  padding-top: var(--spacing-500);
  border-top: 1px solid var(--color-border);
}
.wa__comments {
  list-style: none;
  margin: 0 0 var(--spacing-400);
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.wa__comments:empty {
  display: none;
}
.wa__compose {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.wa__compose-field {
  position: relative;
}
.wa__compose-field esa-textarea {
  width: 100%;
}
.wa__mention-menu {
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% + 4px);
  z-index: 5;
  list-style: none;
  margin: 0;
  padding: var(--spacing-100);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  box-shadow: var(--shadow-400);
  max-height: 208px;
  overflow-y: auto;
}
.wa__mention-menu[hidden] {
  display: none;
}
.wa__compose-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-300);
}
.wa__compose-hint {
  font-size: 0.8125rem;
  color: var(--color-text-secondary);
}
.wa__more {
  display: flex;
  flex-direction: column;
}
.wa__more-item {
  display: block;
}
.wa__more-item[hidden] {
  display: none;
}
.wa__more-item + .wa__more-item {
  border-top: 1px solid var(--color-border-light);
}
.wa__more-item[hidden] + .wa__more-item {
  border-top: none;
}
.wa__section {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  margin: 0 0 var(--spacing-300);
  font-size: 0.9375rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.wa__section .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary);
}
.wa__section .esa-badge {
  vertical-align: middle;
}
.wa__footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-200);
  width: 100%;
}
.wa__footer [hidden] {
  display: none;
}
.wa__footer-start {
  margin-right: auto;
}
.wa__footer-start .esa-button__label {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
}
.od__impact {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.od__impact .entry__meta {
  white-space: normal;
  max-width: 36%;
}
.wa__note {
  margin: 0;
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
  white-space: pre-line;
}
.wa__note--log {
  font-size: 0.9375rem;
}
.wa__note[hidden] {
  display: none;
}
.wa__notes-added {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
}
.wa__activity {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.wa__activity .entry:not(.entry--empty) {
  padding: var(--spacing-200) 0;
}
.wa__activity .entry + .entry {
  border-top: 1px solid var(--color-border-light);
}
.od__meta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-300) var(--spacing-400);
  margin: 0;
  padding: var(--spacing-400);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
}
.wa__kv-val {
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.esa-collapsible__summary .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary, #404040);
}
.esa-icon {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_icon-size);
  height: var(--_icon-size);
  line-height: 1;
  color: inherit;
}
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, var(--icon-size-small, 16px));
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, var(--icon-size-large, 24px));
}
.esa-icon--xl {
  --_icon-size: var(--icon-size-xl, 28px);
}
.esa-icon svg {
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
}
.esa-icon-button {
  --_ib-size: var(--form-height-md, 40px);
  --_ib-bg-hover: var(
    --icon-button-bg-hover,
    color-mix(in srgb, currentColor 14%, transparent)
  );
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_ib-size);
  height: var(--_ib-size);
  padding: 0;
  border: 0;
  border-radius: var(--radius-200, 8px);
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition: background var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
}
.esa-icon-button--xs {
  --_ib-size: var(--form-height-xs, 28px);
}
.esa-icon-button--sm {
  --_ib-size: var(--form-height-sm, 32px);
}
.esa-icon-button--lg {
  --_ib-size: var(--form-height-lg, 48px);
}
.esa-icon-button:hover {
  background: var(--_ib-bg-hover);
}
.esa-icon-button:focus-visible {
  outline: var(--focus-ring-width) solid currentColor;
  outline-offset: var(--focus-ring-offset, 2px);
}
.bcn-key-value {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.bcn-key-value__key {
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-medium);
  color: var(--form-label-color);
}
.bcn-key-value__val {
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-key-value__hint {
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
}
.bcn-status-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
  padding: 2px var(--spacing-250);
  border-radius: var(--radius-full);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  white-space: nowrap;
  background: color-mix(in srgb, var(--_chip) 16%, transparent);
  color: color-mix(in srgb, var(--_chip) 72%, #1a1a1a);
}
.bcn-status-chip__dot {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background: var(--_chip);
  flex-shrink: 0;
}
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-primary, #43608a));
  --_badge-text: var(--badge-text-color, var(--color-text-inverse, #fff));
  --_badge-height: var(--badge-height-md, 28px);
  --_badge-font-size: 13px;
  --_badge-padding-x: var(--spacing-200, 0.5rem);
  --_badge-min-width: var(--badge-height-md, 28px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--_badge-height);
  min-width: var(--_badge-min-width);
  padding-inline: var(--_badge-padding-x);
  border-radius: var(--badge-radius, var(--radius-100, 4px));
  background: var(--_badge-bg);
  color: var(--_badge-text);
  font-size: var(--_badge-font-size);
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  box-sizing: border-box;
}
.esa-badge--xs {
  --_badge-height: var(--badge-height-xs, 18px);
  --_badge-font-size: 10px;
  --_badge-padding-x: var(--spacing-100, 0.25rem);
  --_badge-min-width: var(--badge-height-xs, 18px);
}
.esa-badge--sm {
  --_badge-height: var(--badge-height-sm, 22px);
  --_badge-font-size: 11px;
  --_badge-padding-x: var(--spacing-150, 0.375rem);
  --_badge-min-width: var(--badge-height-sm, 22px);
}
.esa-badge--lg {
  --_badge-height: var(--badge-height-lg, 34px);
  --_badge-font-size: 14px;
  --_badge-padding-x: var(--spacing-300, 0.75rem);
  --_badge-min-width: var(--badge-height-lg, 34px);
}
.esa-badge--secondary {
  --_badge-bg: var(--color-secondary, #65ba74);
  --_badge-text: var(--color-secondary-on-fill, #203c25);
}
.esa-badge--success {
  --_badge-bg: var(--color-success, #bdee63);
  --_badge-text: var(--color-success-on-fill, #37401c);
}
.esa-badge--warning {
  --_badge-bg: var(--color-warning, #ffc53d);
  --_badge-text: var(--color-warning-on-fill, #4f3422);
}
.esa-badge--danger {
  --_badge-bg: var(--color-danger, #e5484d);
}
.esa-badge--info {
  --_badge-bg: var(--color-info, #0090ff);
}
.esa-badge--dot {
  width: 8px;
  height: 8px;
  min-width: 8px;
  padding: 0;
  border-radius: var(--radius-full, 9999px);
}
.esa-badge--dot.esa-badge--primary {
  --_badge-bg: var(--color-primary-hover, #3e9b4f);
}
.esa-badge--dot.esa-badge--secondary {
  --_badge-bg: var(--color-secondary-hover, #46a758);
}
.esa-badge--dot.esa-badge--success {
  --_badge-bg: var(--color-success-hover, #b0e64c);
}
.esa-badge--dot.esa-badge--warning {
  --_badge-bg: var(--color-warning-hover, #ffba18);
}
.esa-badge--dot.esa-badge--danger {
  --_badge-bg: var(--color-danger-hover, #dc3e42);
}
.esa-badge--dot.esa-badge--info {
  --_badge-bg: var(--color-info-hover, #0588f0);
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--bcn-gray-1000);
  flex-shrink: 0;
}
```

## Tokens
- `--badge-bg`: #005862 _(component)_
- `--badge-height-lg`: 34px _(component)_
- `--badge-height-md`: 28px _(component)_
- `--badge-height-sm`: 22px _(component)_
- `--badge-height-xs`: 18px _(component)_
- `--badge-radius`: .25rem _(component)_
- `--badge-text-color`: #fcfcfc _(component)_
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-700`: #525252 _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: rgba(255, 255, 255, .92) _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--button-on-warning`: #ffffff _(component)_
- `--color-ai`: #699cc6 _(semantic)_
- `--color-ai-hover`: #4c75a9 _(semantic)_
- `--color-ai-strong`: #7d5e54 _(semantic)_
- `--color-background`: #fafafa _(semantic)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-light`: #efefef _(semantic)_
- `--color-border-strong`: #bdbdbd _(semantic)_
- `--color-danger`: #e5484d _(semantic)_
- `--color-danger-hover`: #dc3e42 _(semantic)_
- `--color-danger-strong`: #ce2c31 _(semantic)_
- `--color-gray-12`: #202020 _(primitive)_
- `--color-info`: #228be6 _(semantic)_
- `--color-info-hover`: #0588f0 _(semantic)_
- `--color-info-strong`: #0d74ce _(semantic)_
- `--color-info-subtle`: #f4faff _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-primary-hover`: #00474f _(semantic)_
- `--color-primary-strong`: #2a7e3b _(semantic)_
- `--color-secondary`: #00918b _(semantic)_
- `--color-secondary-hover`: #0a6562 _(semantic)_
- `--color-secondary-on-fill`: #203c25 _(semantic)_
- `--color-secondary-strong`: #2a7e3b _(semantic)_
- `--color-success`: #2e7571 _(semantic)_
- `--color-success-hover`: #b0e64c _(semantic)_
- `--color-success-on-fill`: #37401c _(semantic)_
- `--color-success-strong`: #5c7c2f _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-inverse`: #fcfcfc _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--color-warning`: #f59e0b _(semantic)_
- `--color-warning-hover`: #ffba18 _(semantic)_
- `--color-warning-on-fill`: #4f3422 _(semantic)_
- `--color-warning-strong`: #ab6400 _(semantic)_
- `--focus-ring-color`: #65ba74 _(primitive)_
- `--focus-ring-offset`: 2px _(primitive)_
- `--focus-ring-width`: 2px _(primitive)_
- `--font-mono`: "Roboto Mono", ui-monospace, monospace _(primitive)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-medium`: 500 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-font-size-lg`: clamp(.875rem, .77rem + .52vw, 1.125rem) _(component)_
- `--form-font-size-md`: clamp(.75rem, .66rem + .44vw, .9375rem) _(component)_
- `--form-font-size-sm`: clamp(.625rem, .56rem + .32vw, .75rem) _(component)_
- `--form-font-size-xs`: clamp(.5rem, .44rem + .3vw, .625rem) _(component)_
- `--form-height-lg`: 44px _(component)_
- `--form-height-md`: 36px _(component)_
- `--form-height-sm`: 28px _(component)_
- `--form-height-xs`: 24px _(component)_
- `--form-label-color`: #525252 _(component)_
- `--form-padding-x-lg`: 1rem _(component)_
- `--form-padding-x-md`: .75rem _(component)_
- `--form-padding-x-sm`: .625rem _(component)_
- `--form-padding-x-xs`: .5rem _(component)_
- `--form-radius-lg`: .25rem _(component)_
- `--form-radius-md`: .25rem _(component)_
- `--form-radius-sm`: .25rem _(component)_
- `--form-radius-xs`: .25rem _(component)_
- `--grid-row-bg-hover`: #f0f0f0 _(component)_
- `--icon-button-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--icon-size-large`: 24px _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--obs-color`: #7b5ea7 _(component)_
- `--obs-color-strong`: #5b3f87 _(component)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--shadow-400`: 0 8px 32px -8px rgba(0, 0, 0, .08) _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--st-provisional-block`: #d73027 _(component)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--type-size-400`: clamp(1rem, .88rem + .6vw, 1.25rem) _(primitive)_
