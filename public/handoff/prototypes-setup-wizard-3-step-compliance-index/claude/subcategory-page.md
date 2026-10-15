# Subcategory page

Before drafting: Cited requirements, up to three, each its requirement ID, name and the requirement's text; pressing one opens the commitment. Drafted: actions first, then obligations by who reads them, then Discarded (N), folded, with Restore and Restore all. Each draft is one line with a box to tick for Merge; its title opens the record in place. Approve all (N) asks first; Discard all does not.

## Key decisions
- Review is by home subcategory only. Also filed in shows on the obligation, read only.
- A draft action with no scope cannot be approved: "This draft has no scope. Set one in Edit before approving it."
- Merge takes two or more drafts of one kind and, for obligations, one audience. The merged draft keeps every source.
- Rationale is never stored or shown, as in prod.

## Done when
- Ticking two Compliance staff drafts in Take and injury reporting and merging them leaves 20 drafts where there were 21.

## Markup
```html
<article class="bcn-sw3ip" data-sw3-index-page="" aria-labelledby="sw3ip-title">
  <header class="bcn-sw3ip__head">
    <p class="bcn-sw3ip__cat" data-ip-cat=""></p>
    <div class="bcn-sw3ip__acts" data-ip-acts="">
      <span
        class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-ip-discard-all="true"
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
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path></svg></span
          ><span class="esa-button__label">Discard all</span>
        </button></span
      ><span
        class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-ip-approve-all="true"
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
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m9 12 2 2 4-4"></path></svg></span
          ><span class="esa-button__label">Approve all</span>
        </button></span
      >
    </div>
    <h2 class="bcn-sw3ip__title" id="sw3ip-title" data-ip-title=""></h2>
  </header>
  <section class="bcn-sw3ip__cited" data-ip-cited="" aria-labelledby="sw3ip-cited">
    <h3 class="bcn-sw3ip__gh" id="sw3ip-cited">Cited requirements</h3>
    <ol class="bcn-sw3ip__reqs" data-ip-reqs=""></ol>
    <p class="bcn-sw3ip__empty" data-ip-cited-none="">
      Nothing cited for this subcategory.
    </p>
  </section>
  <div class="bcn-sw3ip__review" data-ip-review="">
    <div class="bcn-sw3ip__selected" data-ip-selected="" hidden="">
      <span data-ip-selected-n=""></span
      ><span
        class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--xs"
        ><button
          class="esa-button__native typography-microcopy-2xs"
          type="button"
          data-ip-merge="true"
        >
          <span class="esa-icon esa-icon--xs" aria-hidden="true"
            ><svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path d="m8 6 4-4 4 4"></path>
              <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"></path>
              <path d="m20 22-5-5"></path></svg></span
          ><span class="esa-button__label">Merge</span>
        </button></span
      ><span
        class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
        ><button
          class="esa-button__native typography-microcopy-2xs"
          type="button"
          data-ip-clear="true"
        >
          <span class="esa-button__label">Clear</span>
        </button></span
      >
    </div>
    <div class="bcn-sw3ip__groups" data-ip-groups=""></div>
    <p class="bcn-sw3ip__empty" data-ip-empty="" hidden=""></p>
    <details class="bcn-sw3ip__discarded" data-ip-discarded="">
      <summary class="bcn-sw3ip__gh">
        <span data-ip-discarded-label="">Discarded</span>
      </summary>
      <div class="bcn-sw3ip__discarded-acts" data-ip-restore-all-wrap="">
        <span
          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            data-ip-restore-all="true"
          >
            <span class="esa-icon esa-icon--xs" aria-hidden="true"
              ><svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path></svg></span
            ><span class="esa-button__label">Restore all</span>
          </button></span
        >
      </div>
      <ol class="bcn-sw3ip__entries" data-ip-discarded-list=""></ol>
    </details>
  </div>
  <template data-ip-tpl="req"
    ><li class="bcn-sw3ip__req" data-astro-cid-volza5tu="">
      <a href="#" class="bcn-sw3ip__req-head" data-r-open="" data-astro-cid-volza5tu=""
        ><span data-r-badge="" data-astro-cid-volza5tu=""
          ><span
            class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
            data-astro-cid-sh7ulwla=""
            ><span class="esa-badge__text" data-astro-cid-sh7ulwla="">11.38:1</span></span
          ></span
        ><span
          class="bcn-sw3ip__req-name"
          data-r-name=""
          data-astro-cid-volza5tu=""
        ></span
      ></a>
      <p
        class="bcn-sw3ip__req-text"
        data-r-text=""
        data-astro-cid-volza5tu=""
      ></p></li></template
  ><template data-ip-tpl="group"
    ><section class="bcn-sw3ip__group" data-astro-cid-volza5tu="">
      <h3 class="bcn-sw3ip__gh" data-g-name="" data-astro-cid-volza5tu=""></h3>
      <ol
        class="bcn-sw3ip__entries"
        data-g-entries=""
        data-astro-cid-volza5tu=""
      ></ol></section></template
  ><template data-ip-tpl="entry"
    ><li class="bcn-sw3ip__entry" data-status="draft" data-astro-cid-volza5tu="">
      <div class="bcn-sw3ip__line" data-astro-cid-volza5tu="">
        <span class="bcn-sw3ip__tick" data-e-tick="" data-astro-cid-volza5tu=""
          ><esa-checkbox
            size="sm"
            aria-label="Select for merge"
            data-astro-cid-volza5tu="true"
          ></esa-checkbox></span
        ><span class="bcn-sw3ip__chip" data-e-chip="" data-astro-cid-volza5tu=""
          ><span
            class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
            data-astro-cid-sh7ulwla=""
            ><span class="esa-badge__text" data-astro-cid-sh7ulwla="">Adhere</span></span
          ></span
        ><a
          class="bcn-sw3ip__name"
          href="#"
          data-e-toggle=""
          data-astro-cid-volza5tu=""
        ></a
        ><span class="bcn-sw3ip__locs" data-e-locs="" data-astro-cid-volza5tu=""></span
        ><span class="bcn-sw3ip__ok" data-e-ok="" data-astro-cid-volza5tu=""
          ><span
            class="esa-icon esa-icon--sm"
            role="img"
            aria-label="Approved"
            data-astro-cid-c7ivvrtd=""
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
              data-astro-cid-c7ivvrtd=""
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m9 12 2 2 4-4"></path></svg></span
        ></span>
      </div>
      <div class="bcn-sw3ip__rec" data-e-rec="" hidden="" data-astro-cid-volza5tu="">
        <p
          class="bcn-sw3ip__block"
          data-e-block=""
          hidden=""
          data-astro-cid-volza5tu=""
        ></p>
        <dl class="bcn-sw3ip__fields" data-e-fields="" data-astro-cid-volza5tu=""></dl>
        <div
          class="bcn-sw3ip__passages"
          data-e-passages=""
          data-astro-cid-volza5tu=""
        ></div>
        <div class="bcn-sw3ip__keys" data-astro-cid-volza5tu="">
          <span data-e-approve="" data-astro-cid-volza5tu=""
            ><span
              class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--xs"
              data-astro-cid-4xhmycw5=""
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                data-astro-cid-volza5tu="true"
                data-astro-cid-4xhmycw5=""
              >
                <span
                  class="esa-icon esa-icon--xs"
                  aria-hidden="true"
                  data-astro-cid-c7ivvrtd=""
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                    data-astro-cid-c7ivvrtd=""
                  >
                    <path d="M20 6 9 17l-5-5"></path></svg></span
                ><span class="esa-button__label" data-astro-cid-4xhmycw5="">Approve</span>
              </button></span
            ></span
          ><span data-e-discard="" data-astro-cid-volza5tu=""
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
              data-astro-cid-4xhmycw5=""
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                data-astro-cid-volza5tu="true"
                data-astro-cid-4xhmycw5=""
              >
                <span
                  class="esa-icon esa-icon--xs"
                  aria-hidden="true"
                  data-astro-cid-c7ivvrtd=""
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                    data-astro-cid-c7ivvrtd=""
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
                ><span class="esa-button__label" data-astro-cid-4xhmycw5="">Discard</span>
              </button></span
            ></span
          ><span data-e-restore="" data-astro-cid-volza5tu=""
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
              data-astro-cid-4xhmycw5=""
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                data-astro-cid-volza5tu="true"
                data-astro-cid-4xhmycw5=""
              >
                <span
                  class="esa-icon esa-icon--xs"
                  aria-hidden="true"
                  data-astro-cid-c7ivvrtd=""
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                    data-astro-cid-c7ivvrtd=""
                  >
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                    <path d="M3 3v5h5"></path></svg></span
                ><span class="esa-button__label" data-astro-cid-4xhmycw5="">Restore</span>
              </button></span
            ></span
          ><span data-e-edit="" data-astro-cid-volza5tu=""
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
              data-astro-cid-4xhmycw5=""
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                data-astro-cid-volza5tu="true"
                data-astro-cid-4xhmycw5=""
              >
                <span
                  class="esa-icon esa-icon--xs"
                  aria-hidden="true"
                  data-astro-cid-c7ivvrtd=""
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                    data-astro-cid-c7ivvrtd=""
                  >
                    <path
                      d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                    ></path>
                    <path d="m15 5 4 4"></path></svg></span
                ><span class="esa-button__label" data-astro-cid-4xhmycw5="">Edit</span>
              </button></span
            ></span
          >
        </div>
      </div>
    </li></template
  ><span hidden="" data-ip-merge-glyph=""
    ><path d="m8 6 4-4 4 4"
      ><path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"
        ><path d="m20 22-5-5"></path></path></path
  ></span>
</article>
```

## Styles
```css
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
.typography-microcopy-2xs-subtle {
  font-family: var(--typography-microcopy-2xs-subtle-font-family);
  font-size: var(--typography-microcopy-2xs-subtle-font-size);
  font-weight: var(--typography-microcopy-2xs-subtle-font-weight);
  line-height: var(--typography-microcopy-2xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-2xs-subtle-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
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
.bcn-sw3ip {
  gap: var(--spacing-500);
  box-sizing: border-box;
  min-height: 100%;
  padding: var(--spacing-500) var(--spacing-600);
  flex-direction: column;
  display: flex;
}
.bcn-sw3ip [hidden] {
  display: none !important;
}
.bcn-sw3ip__head {
  align-items: center;
  gap: var(--spacing-200) var(--spacing-300);
  flex-wrap: wrap;
  display: flex;
}
.bcn-sw3ip__cat {
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.875rem;
  font-weight: 500;
}
.bcn-sw3ip__acts {
  align-items: center;
  gap: var(--spacing-150);
  margin-left: auto;
  display: flex;
}
.bcn-sw3ip__title {
  font-family: var(--font-decorative, var(--typography-font-family-sans));
  text-wrap: balance;
  flex: 100%;
  margin: 0;
  font-size: 1.375rem;
  font-weight: 600;
  line-height: 1.25;
}
.bcn-sw3ip .bcn-sw3ip__gh {
  color: var(--color-content-default);
  padding-bottom: var(--spacing-100);
  border-bottom: 1px solid var(--color-border-default);
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 600;
}
.bcn-sw3ip__empty {
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.875rem;
}
.bcn-sw3ip__cited {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-sw3ip__reqs {
  gap: var(--spacing-400);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-sw3ip .bcn-sw3ip__req {
  gap: var(--spacing-150);
  flex-direction: column;
  display: flex;
}
.bcn-sw3ip .bcn-sw3ip__req-head {
  align-items: center;
  gap: var(--spacing-200);
  color: var(--color-content-default);
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
}
.bcn-sw3ip .bcn-sw3ip__req-head:hover .bcn-sw3ip__req-name {
  text-decoration: underline;
}
.bcn-sw3ip .bcn-sw3ip__req-text {
  font-family: var(--font-decorative, var(--typography-font-family-sans));
  color: var(--color-content-default);
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.6;
}
.bcn-sw3ip__review {
  gap: var(--spacing-500);
  flex-direction: column;
  display: flex;
}
.bcn-sw3ip__selected {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-150) var(--spacing-300);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-sunken);
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
}
.bcn-sw3ip__groups {
  gap: var(--spacing-500);
  flex-direction: column;
  display: flex;
}
.bcn-sw3ip .bcn-sw3ip__group {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-sw3ip .bcn-sw3ip__entries {
  gap: var(--spacing-100);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-sw3ip__discarded {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-sw3ip__discarded > summary {
  cursor: pointer;
  list-style-position: inside;
}
.bcn-sw3ip__discarded-acts {
  padding: var(--spacing-150) 0;
  justify-content: flex-end;
  display: flex;
}
.bcn-sw3ip .bcn-sw3ip__entry {
  border: 1px dashed var(--color-border-default-strong, var(--color-border-default));
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised);
}
.bcn-sw3ip .bcn-sw3ip__entry[data-status="approved"] {
  border-style: solid;
  border-color: var(--color-border-default);
}
.bcn-sw3ip .bcn-sw3ip__entry[data-status="discarded"] {
  background: 0 0;
  border-color: #0000;
}
.bcn-sw3ip .bcn-sw3ip__entry[data-open] {
  border-style: solid;
  border-color: var(--color-border-default-strong, var(--color-border-default));
}
.bcn-sw3ip .bcn-sw3ip__entry[data-focus] {
  border-color: var(--color-border-default-focus);
}
.bcn-sw3ip .bcn-sw3ip__line {
  align-items: baseline;
  gap: var(--spacing-200);
  padding: var(--spacing-150) var(--spacing-300);
  grid-template-columns: 1.25rem 5.25rem minmax(0, 1fr) auto 1.25rem;
  font-size: 0.875rem;
  display: grid;
}
.bcn-sw3ip .bcn-sw3ip__tick {
  align-self: center;
  line-height: 0;
}
.bcn-sw3ip .bcn-sw3ip__entry:not([data-status="draft"]) .bcn-sw3ip__tick {
  visibility: hidden;
}
.bcn-sw3ip .bcn-sw3ip__chip {
  align-self: center;
  line-height: 0;
}
.bcn-sw3ip .bcn-sw3ip__name {
  color: var(--color-content-default);
  font-weight: 500;
  text-decoration: none;
}
.bcn-sw3ip .bcn-sw3ip__name:hover {
  text-decoration: underline;
}
.bcn-sw3ip .bcn-sw3ip__entry[data-status="discarded"] .bcn-sw3ip__name {
  color: var(--color-content-default-tertiary);
  text-decoration: line-through;
}
.bcn-sw3ip .bcn-sw3ip__locs {
  font-variant-numeric: tabular-nums;
  color: var(--color-content-default-secondary);
  white-space: nowrap;
}
.bcn-sw3ip .bcn-sw3ip__locs a,
.bcn-sw3ip .bcn-sw3ip__passage a,
.bcn-sw3ip .bcn-sw3ip__fields a {
  color: var(--color-content-link, var(--color-content-brand));
  text-decoration: none;
}
.bcn-sw3ip .bcn-sw3ip__locs a:hover,
.bcn-sw3ip .bcn-sw3ip__passage a:hover,
.bcn-sw3ip .bcn-sw3ip__fields a:hover {
  text-decoration: underline;
}
.bcn-sw3ip .bcn-sw3ip__ok {
  visibility: hidden;
  color: var(--color-content-success);
  align-self: center;
  line-height: 0;
}
.bcn-sw3ip .bcn-sw3ip__entry[data-status="approved"] .bcn-sw3ip__ok {
  visibility: visible;
}
.bcn-sw3ip .bcn-sw3ip__rec {
  gap: var(--spacing-300);
  padding: 0 var(--spacing-300) var(--spacing-300)
    calc(1.25rem + 5.25rem + 2 * var(--spacing-200) + var(--spacing-300));
  flex-direction: column;
  font-size: 0.875rem;
  display: flex;
}
.bcn-sw3ip .bcn-sw3ip__block {
  color: var(--color-content-warning);
  margin: 0;
  font-weight: 500;
}
.bcn-sw3ip .bcn-sw3ip__fields {
  gap: var(--spacing-100) var(--spacing-300);
  grid-template-columns: 9rem minmax(0, 1fr);
  margin: 0;
  display: grid;
}
.bcn-sw3ip .bcn-sw3ip__fields dt {
  color: var(--color-content-default-secondary);
  font-weight: 500;
}
.bcn-sw3ip .bcn-sw3ip__fields dd {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-sw3ip .bcn-sw3ip__fields ul {
  margin: 0;
  padding-left: 1.1em;
}
.bcn-sw3ip .bcn-sw3ip__fields dd[data-needs] {
  color: var(--color-content-warning);
  font-weight: 500;
}
.bcn-sw3ip .bcn-sw3ip__passages {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-sw3ip .bcn-sw3ip__passage {
  gap: var(--spacing-300);
  font-variant-numeric: tabular-nums;
  grid-template-columns: 4.5rem minmax(0, 1fr);
  margin: 0;
  display: grid;
}
.bcn-sw3ip .bcn-sw3ip__passage q {
  font-family: var(--font-decorative, var(--typography-font-family-sans));
  color: var(--color-content-default);
  quotes: "“" "”";
  font-size: 0.9375rem;
  line-height: 1.6;
}
.bcn-sw3ip .bcn-sw3ip__keys {
  gap: var(--spacing-150);
  flex-wrap: wrap;
  display: flex;
}
.bcn-sw3ip .bcn-sw3ip__entry:not([data-status="discarded"]) [data-e-restore],
.bcn-sw3ip .bcn-sw3ip__entry[data-status="discarded"] [data-e-discard],
.bcn-sw3ip .bcn-sw3ip__entry[data-status="discarded"] [data-e-approve],
.bcn-sw3ip .bcn-sw3ip__entry[data-status="discarded"] [data-e-edit],
.bcn-sw3ip .bcn-sw3ip__entry[data-status="approved"] [data-e-approve] {
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
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
}
.bcn-aldo-needs__head .esa-badge {
  font-variant-numeric: tabular-nums;
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
.typography-microcopy-2xs-subtle {
  font-family: var(--typography-microcopy-2xs-subtle-font-family);
  font-size: var(--typography-microcopy-2xs-subtle-font-size);
  font-weight: var(--typography-microcopy-2xs-subtle-font-weight);
  line-height: var(--typography-microcopy-2xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-2xs-subtle-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
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
- `--badge-bg`: #005862 _(component)_
- `--badge-text-color`: #fcfcfc _(component)_
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
- `--color-border-default-focus`: #3e9b4f _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-utility-danger`: #fdbdbe _(semantic)_
- `--color-border-utility-info`: #acd8fc _(semantic)_
- `--color-border-utility-success`: #adddc0 _(semantic)_
- `--color-border-utility-warning`: #f3d673 _(semantic)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-link`: #005862 _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-success`: #218358 _(component)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--color-content-warning`: #ab6400 _(component)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-decorative`: "Besley", serif _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
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
- `--spacing-600`: 2rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-microcopy-2xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-2xs-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-microcopy-2xs-font-weight`: 500 _(semantic)_
- `--typography-microcopy-2xs-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-line-height`: 1 _(semantic)_
- `--typography-microcopy-2xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-2xs-strong-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-microcopy-2xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-2xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-2xs-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-2xs-subtle-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-microcopy-2xs-subtle-font-weight`: 400 _(semantic)_
- `--typography-microcopy-2xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-subtle-line-height`: 1 _(semantic)_
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
