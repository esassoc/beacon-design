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
  ><div slot="header" class="wa__header">
    <div class="wa__headmain">
      <h2 class="wa__title" id="obs-title">Swainson's Hawk</h2>
      <span id="obs-chip"
        ><span
          class="bcn-status-chip"
          data-status="neutral"
          style="--_chip: var(--st-neutral)"
          ><span class="bcn-status-chip__dot"></span
          ><span class="bcn-status-chip__label">Active</span></span
        ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
      >
    </div>
    <p class="wa__subtitle" id="obs-sub">SWHA-2289-05182026</p>
  </div>
  <div class="wa">
    <div class="od__meta">
      <div class="bcn-key-value">
        <span class="bcn-key-value__key">Species code</span
        ><span class="wa__kv-val" id="obs-code">SWHA</span>
      </div>
      <div class="bcn-key-value">
        <span class="bcn-key-value__key">Kind</span
        ><span class="wa__kv-val" id="obs-kind">Nesting bird</span>
      </div>
      <div class="bcn-key-value">
        <span class="bcn-key-value__key">Buffer</span
        ><span class="wa__kv-val" id="obs-buffer">2,640 ft</span>
      </div>
      <div class="bcn-key-value">
        <span class="bcn-key-value__key">First observed</span
        ><span class="wa__kv-val" id="obs-first">May 18, 2026</span>
      </div>
    </div>
    <section id="obs-log-wrap">
      <h3 class="wa__section">
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
              d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"
            ></path>
            <path d="M2 6h4"></path>
            <path d="M2 10h4"></path>
            <path d="M2 14h4"></path>
            <path d="M2 18h4"></path>
            <path
              d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
            ></path></svg></span
        >Latest log
      </h3>
      <blockquote class="wa__note wa__note--log" id="obs-log">
        May 18, 2026, 1:31 PM: Active SWHA nest observed in tree during site clearance
        visit.
      </blockquote>
    </section>
    <section>
      <h3 class="wa__section">
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
            <line x1="22" x2="18" y1="12" y2="12"></line>
            <line x1="6" x2="2" y1="12" y2="12"></line>
            <line x1="12" x2="12" y1="6" y2="2"></line>
            <line x1="12" x2="12" y1="22" y2="18"></line></svg></span
        >Work areas within buffer<span id="obs-impact-count"
          ><span
            class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
            ><span class="esa-badge__text">19</span></span
          ></span
        >
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
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Provisional Block</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              >
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
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Provisional Block</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              >
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
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Blocked</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              >
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
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Provisional Block</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              >
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
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Provisional Block</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              >
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
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Provisional Block</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              >
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
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Provisional Block</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              >
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
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Provisional Block</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              >
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
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Provisional Block</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              >
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
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Provisional Block</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              >
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
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Provisional Block</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              >
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
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Provisional Block</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              >
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
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Provisional Block</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              >
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
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Provisional Block</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              >
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
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Provisional Block</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              >
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
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Provisional Block</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              >
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
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Provisional Block</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              >
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
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Provisional Block</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              >
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
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Provisional Block</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              >
            </p>
          </div>
          <span class="entry__meta">2,621 ft</span>
        </li>
      </ul>
    </section>
  </div>
  <div slot="footer" class="wa__footer">
    <!-- "Show on map" (round-5 ch5) — same jump as the work-area drawer's. --><span
      id="obs-showmap"
      class="wa__footer-start"
      ><span
        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
        ><button class="esa-button__native typography-microcopy-md" type="button">
          <span class="esa-button__label"
            ><span class="esa-icon esa-icon--sm" aria-hidden="true"
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
                  d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                ></path>
                <circle cx="12" cy="10" r="3"></circle></svg></span
            >Show on map</span
          >
        </button></span
      ></span
    >
  </div></esa-side-dialog
>
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
.bcn-countchip__num .esa-badge {
  --badge-radius: var(--radius-full);
  --badge-bg: var(--color-border-default);
  --badge-text-color: var(--color-content-default-secondary);
  box-sizing: border-box;
  font-variant-numeric: tabular-nums;
  min-width: 19px;
  height: 19px;
  box-shadow: 0 0 0 1.5px var(--color-background-elevation-raised);
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  font-size: 0.8125rem;
  line-height: 1;
  display: inline-flex;
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-attached__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid
    color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid
    color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--bcn-gray-100);
  --badge-text-color: var(--bcn-gray-700);
  font-weight: var(--typography-font-weight-medium);
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
.comp-picker__trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
}
.entry {
  align-items: flex-start;
  gap: var(--spacing-300);
  padding: var(--spacing-250) var(--spacing-300);
  display: flex;
}
.entry__badge {
  border-radius: var(--radius-100);
  font-family: var(--typography-font-family-mono, monospace);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  letter-spacing: 0;
  text-transform: uppercase;
  white-space: nowrap;
  flex-shrink: 0;
  margin-top: 1px;
  padding: 0.125rem 0.375rem;
  line-height: 1.4;
}
.entry__badge--obs {
  color: var(--obs-color-strong);
  background: color-mix(in srgb, var(--obs-color) 12%, white);
}
.entry__badge--wa {
  color: var(--color-background-brand);
  background: color-mix(in srgb, var(--color-background-brand) 10%, white);
}
.entry__body {
  flex-direction: column;
  flex: 1;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.entry__line {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.45;
}
.entry__type {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.entry__sep {
  color: var(--color-content-default-tertiary);
}
.entry__primary {
  color: var(--color-content-default);
}
.entry__line .gate__chipwrap {
  vertical-align: text-bottom;
}
.entry__secondary {
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.45;
}
.entry__meta {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  text-align: right;
  flex-shrink: 0;
  font-size: 0.8125rem;
}
.entry--empty {
  padding: var(--spacing-200) 0;
  color: var(--color-content-default-tertiary);
  font-size: 0.875rem;
}
.entry--card {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  cursor: pointer;
  transition:
    background 0.12s,
    border-color 0.12s;
}
.entry--card:hover {
  background: var(--grid-row-bg-hover);
  border-color: var(--color-border-default-strong);
}
.bcn-status-chip[data-status="provisional-block"],
.bcn-grid-chip[data-status="provisional-block"],
.bcn-status-chip[data-status="provisional-block"] .bcn-status-chip__dot,
.bcn-grid-chip[data-status="provisional-block"] .bcn-grid-chip__dot {
  background: var(--color-background-elevation-raised);
  box-shadow: inset 0 0 0 1.5px var(--st-provisional-block);
}
.wa {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.wa[hidden] {
  display: none;
}
.wa__header {
  flex-direction: column;
  flex: 1;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.wa__headmain {
  align-items: center;
  gap: var(--spacing-300);
  display: flex;
}
.wa__title {
  font-size: var(--font-size-400);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.wa__subtitle {
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.875rem;
}
#wa-read > .wa-comments,
#wa-read > .wa__more {
  margin-top: var(--spacing-500);
  padding-top: var(--spacing-500);
  border-top: 1px solid var(--color-border-default);
}
.wa__comments {
  margin: 0 0 var(--spacing-400);
  gap: var(--spacing-400);
  flex-direction: column;
  padding: 0;
  list-style: none;
  display: flex;
}
.wa__comments:empty {
  display: none;
}
.wa__compose {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.wa__compose-field {
  position: relative;
}
.wa__compose-field esa-textarea {
  width: 100%;
}
.wa__mention-menu {
  z-index: 5;
  padding: var(--spacing-100);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  box-shadow: var(--elevation-5);
  max-height: 208px;
  margin: 0;
  list-style: none;
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  overflow-y: auto;
}
.wa__mention-menu[hidden] {
  display: none;
}
.wa__compose-foot {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-300);
  display: flex;
}
.wa__compose-hint {
  color: var(--color-content-default-secondary);
  font-size: 0.8125rem;
}
.wa__more {
  flex-direction: column;
  display: flex;
}
.wa__more-item {
  display: block;
}
.wa__more-item[hidden] {
  display: none;
}
.wa__more-item + .wa__more-item {
  border-top: 1px solid var(--color-border-default-subtle);
}
.wa__more-item[hidden] + .wa__more-item {
  border-top: none;
}
.wa__section {
  align-items: center;
  gap: var(--spacing-200);
  margin: 0 0 var(--spacing-300);
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  display: flex;
}
.wa__section .esa-icon {
  color: var(--color-content-default-secondary);
  flex-shrink: 0;
}
.wa__section .esa-badge {
  vertical-align: middle;
}
.wa__footer {
  justify-content: flex-end;
  gap: var(--spacing-200);
  width: 100%;
  display: flex;
}
.wa__footer [hidden] {
  display: none;
}
.wa__footer-start {
  margin-right: auto;
}
.wa__footer-start .esa-button__label {
  align-items: center;
  gap: var(--spacing-150);
  display: inline-flex;
}
.od__impact {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.od__impact .entry__meta {
  white-space: normal;
  max-width: 36%;
}
.wa__note {
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
.wa__note--log {
  font-size: 0.9375rem;
}
.wa__note[hidden] {
  display: none;
}
.wa__notes-added {
  gap: var(--spacing-300);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.wa__activity {
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.wa__activity .entry:not(.entry--empty) {
  padding: var(--spacing-200) 0;
}
.wa__activity .entry + .entry {
  border-top: 1px solid var(--color-border-default-subtle);
}
.od__meta {
  gap: var(--spacing-300) var(--spacing-400);
  padding: var(--spacing-400);
  background: var(--color-background-default);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  grid-template-columns: 1fr 1fr;
  margin: 0;
  display: grid;
}
.wa__kv-val {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
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
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
}
.bcn-key-value {
  flex-direction: column;
  gap: 2px;
  display: flex;
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
.bcn-key-value__hint {
  color: var(--color-content-default-tertiary);
  font-size: 0.75rem;
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
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-background-brand, #46a758));
  --_badge-text: var(--badge-text-color, var(--color-content-default-knockout, #fcfcfc));
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
.esa-badge--xs {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-100, 0.25rem);
}
.esa-badge--sm {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-150, 0.375rem);
}
.esa-badge--lg {
  --_badge-padding-y: var(--spacing-250, 0.625rem);
  --_badge-padding-x: var(--spacing-300, 0.75rem);
}
.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand-muted, #e9f6e9);
  --_badge-text: var(--color-content-on-brand-muted, #203c25);
}
.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-muted, #e6f6eb);
  --_badge-text: var(--color-content-utility-success, #218358);
  --_badge-border: var(--color-border-utility-success, #adddc0);
}
.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-muted, #fff7c2);
  --_badge-text: var(--color-content-utility-warning, #ab6400);
  --_badge-border: var(--color-border-utility-warning, #f3d673);
}
.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-muted, #feebec);
  --_badge-text: var(--color-content-utility-danger, #ce2c31);
  --_badge-border: var(--color-border-utility-danger, #fdbdbe);
}
.esa-badge--info {
  --_badge-bg: var(--color-background-utility-info-muted, #e6f4fe);
  --_badge-text: var(--color-content-utility-info, #0d74ce);
  --_badge-border: var(--color-border-utility-info, #acd8fc);
}
.esa-badge--success:not(.esa-badge--dot),
.esa-badge--warning:not(.esa-badge--dot),
.esa-badge--danger:not(.esa-badge--dot),
.esa-badge--info:not(.esa-badge--dot) {
  border: 1px solid var(--_badge-border, transparent);
}
.esa-badge--dot {
  border-radius: var(--radius-pill, 9999px);
  width: 8px;
  min-width: 8px;
  height: 8px;
  padding: 0;
}
.esa-badge--dot.esa-badge--primary {
  --_badge-bg: var(--color-background-brand-hover, #3e9b4f);
}
.esa-badge--dot.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand, #46a758);
}
.esa-badge--dot.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-hover, #2b9a66);
}
.esa-badge--dot.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-hover, #ffba18);
}
.esa-badge--dot.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-hover, #dc3e42);
}
.esa-badge--dot.esa-badge--info {
  --_badge-bg: var(--color-background-utility-info-hover, #0588f0);
}
.esa-badge--dot {
  background: canvastext;
  border: 0;
  outline: 1px solid canvastext;
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
- `--badge-bg`: #43608a _(component)_
- `--badge-text-color`: #fcfcfc _(component)_
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-700`: #525252 _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--border-width-default`: 1px _(semantic)_
- `--button-chrome-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--button-on-warning`: #fff _(component)_
- `--button-radius-lg`: .25rem _(component)_
- `--button-radius-md`: .25rem _(component)_
- `--button-radius-sm`: .25rem _(component)_
- `--button-radius-xs`: .25rem _(component)_
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-danger-muted`: #feebec _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-info-muted`: #e6f4fe _(semantic)_
- `--color-background-utility-info-subtle`: #fbfdff _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-success-muted`: #e6f6eb _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-background-utility-warning-muted`: #fff7c2 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-border-utility-danger`: #fdbdbe _(semantic)_
- `--color-border-utility-info`: #acd8fc _(semantic)_
- `--color-border-utility-success`: #adddc0 _(semantic)_
- `--color-border-utility-warning`: #f3d673 _(semantic)_
- `--color-content-ai`: #7d5e54 _(semantic)_
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
- `--elevation-5`: 0 8px 32px -8px #00000014 _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--font-size-400`: clamp(1rem, .88rem + .6vw, 1.25rem) _(primitive)_
- `--form-label-color`: #525252 _(component)_
- `--grid-row-bg-hover`: #efefef _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--obs-color`: #7b5ea7 _(component)_
- `--obs-color-strong`: #5b3f87 _(component)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-chip`: .25rem _(semantic)_
- `--radius-full`: 9999px _(primitive)_
- `--radius-pill`: 9999px _(semantic)_
- `--radius-sm`: .25rem _(semantic)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--st-provisional-block`: #d73027 _(component)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-font-family-mono`: "Roboto Mono", ui-monospace, monospace _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-label-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
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
- `--typography-microcopy-xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-strong-line-height`: 1 _(semantic)_
