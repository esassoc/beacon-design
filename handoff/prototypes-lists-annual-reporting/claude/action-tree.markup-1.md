# Action tree: markup, part 1 of 2

```html
<section
  class="bcn-lot bcn-lmt"
  aria-label="Annual Reporting"
  data-list-label="Annual Reporting"
  data-list-type="action"
  data-list-noun="actions"
  data-list-titles='{"COA 4":"ESA Consultation and ITP Precedence","COA 6":"Construction Phase Authorization Required Before Construction","… [16049 characters]'
  data-list-view="index"
>
  <p class="bcn-lot__nomatch" data-list-nomatch="" hidden="">No actions match.</p>
  <div class="bcn-lmt__empty" data-list-empty-state="" hidden="">
    <div class="esa-empty-state esa-empty-state--sm">
      <h3 class="esa-empty-state__title typography-label-sm-strong">No actions on this list</h3>
      <p class="esa-empty-state__description typography-body-xs">Add actions to start the list.</p>
      <div class="esa-empty-state__actions typography-label-md"></div>
    </div>
  </div>
  <div class="bcn-lot__body" data-list-cats="">
    <details class="bcn-lot__cat" data-list-cat="Financial" open="">
      <summary class="bcn-lot__row bcn-lot__row--cat">
        <span class="bcn-lot__chevron" aria-hidden="true"
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
              <path d="m9 18 6-6-6-6"></path></svg></span></span
        ><span class="bcn-lot__name" data-list-name="" data-list-text="Financial">Financial</span
        ><span data-list-count="cat"><span class="bcn-swcb" aria-label="2 actions">2</span></span>
      </summary>
      <ul class="bcn-lot__cards bcn-lmt__cards" data-list-cards="">
        <li
          class="bcn-loc"
          data-list-card=""
          data-member-id="act_01M2G6Y3ENYWE6AXT12YDFDJM1"
          data-id="act_01M2G6Y3ENYWE6AXT12YDFDJM1"
          data-class="action"
          data-codes="COA 12.12|COA 12.12.3"
          data-index="Mitigation and restoration::Mitigation lands|Mitigation and restoration::Conservation endowment"
        >
          <details class="bcn-loc__node">
            <summary class="bcn-loc__main">
              <span class="bcn-loc__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-loc__class" data-list-class-tag="">Financial</span
              ><button
                type="button"
                class="bcn-loc__title"
                data-list-open=""
                data-list-title=""
                data-list-text="Fund Annual Endowment Deposit Amount Installment"
              >
                Fund Annual Endowment Deposit Amount Installment</button
              ><span data-list-count="member"
                ><span class="bcn-swcb" aria-label="3 implementations">3</span></span
              ><esa-tooltip text="Remove from this list" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-loc__verb bcn-loc__verb--danger"
                  aria-label="Remove from this list"
                  data-list-remove=""
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
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path></svg
                  ></span></button
              ></esa-tooltip>
            </summary>
            <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="action">
              <li
                class="bcn-loc__req bcn-loc__impl"
                data-list-impl="act_01M2G6Y3ENYWE6AXT12YDFDJM1|twin-cities-complex"
                data-status="in-progress"
                data-evidence="6"
              >
                <span
                  class="bcn-status-chip"
                  data-status="in-progress"
                  style="--_chip: var(--st-in-progress, var(--bcn-status-in-progress))"
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">In Progress</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><button
                  type="button"
                  class="bcn-loc__req-name"
                  data-list-text="Twin Cities Complex"
                >
                  Twin Cities Complex</button
                ><span class="bcn-loc__comments" hidden="">0 comments</span
                ><span class="bcn-loc__evidence" data-list-evidence="">6 evidence</span>
              </li>
              <li
                class="bcn-loc__req bcn-loc__impl"
                data-list-impl="act_01M2G6Y3ENYWE6AXT12YDFDJM1|bouldin-island-geotechnical-exploration"
                data-status="in-progress"
                data-evidence="6"
              >
                <span
                  class="bcn-status-chip"
                  data-status="in-progress"
                  style="--_chip: var(--st-in-progress, var(--bcn-status-in-progress))"
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">In Progress</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><button
                  type="button"
                  class="bcn-loc__req-name"
                  data-list-text="Bouldin Island Geotechnical Exploration"
                >
                  Bouldin Island Geotechnical Exploration</button
                ><span class="bcn-loc__comments" hidden="">0 comments</span
                ><span class="bcn-loc__evidence" data-list-evidence="">6 evidence</span>
              </li>
              <li
                class="bcn-loc__req bcn-loc__impl"
                data-list-impl="act_01M2G6Y3ENYWE6AXT12YDFDJM1|byron-tract-forebay"
                data-status="completed"
                data-evidence="6"
              >
                <span
                  class="bcn-status-chip"
                  data-status="completed"
                  style="--_chip: var(--st-completed, var(--bcn-status-completed))"
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Completed</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><button
                  type="button"
                  class="bcn-loc__req-name"
                  data-list-text="Byron Tract Forebay"
                >
                  Byron Tract Forebay</button
                ><span class="bcn-loc__comments" hidden="">0 comments</span
                ><span class="bcn-loc__evidence" data-list-evidence="">6 evidence</span>
              </li>
            </ul>
          </details>
        </li>
        <li
          class="bcn-loc"
          data-list-card=""
          data-member-id="act_01M2G6Y3ENYWE6AXT12YDFDJM2"
          data-id="act_01M2G6Y3ENYWE6AXT12YDFDJM2"
          data-class="action"
          data-codes="COA 12.12"
          data-index="Mitigation and restoration::Mitigation lands"
        >
          <details class="bcn-loc__node">
            <summary class="bcn-loc__main">
              <span class="bcn-loc__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-loc__class" data-list-class-tag="">Financial</span
              ><button
                type="button"
                class="bcn-loc__title"
                data-list-open=""
                data-list-title=""
                data-list-text="Provide Annual Long-Term HM Lands Management Funding"
              >
                Provide Annual Long-Term HM Lands Management Funding</button
              ><span data-list-count="member"
                ><span class="bcn-swcb" aria-label="3 implementations">3</span></span
              ><esa-tooltip text="Remove from this list" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-loc__verb bcn-loc__verb--danger"
                  aria-label="Remove from this list"
                  data-list-remove=""
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
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path></svg
                  ></span></button
              ></esa-tooltip>
            </summary>
            <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="action">
              <li
                class="bcn-loc__req bcn-loc__impl"
                data-list-impl="act_01M2G6Y3ENYWE6AXT12YDFDJM2|twin-cities-complex"
                data-status="not-started"
                data-evidence="0"
              >
                <span
                  class="bcn-status-chip"
                  data-status="not-started"
                  style="--_chip: var(--st-not-started, var(--bcn-status-not-started))"
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Not Started</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><button
                  type="button"
                  class="bcn-loc__req-name"
                  data-list-text="Twin Cities Complex"
                >
                  Twin Cities Complex</button
                ><span class="bcn-loc__comments" hidden="">0 comments</span
                ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                  >No evidence</span
                >
              </li>
              <li
                class="bcn-loc__req bcn-loc__impl"
                data-list-impl="act_01M2G6Y3ENYWE6AXT12YDFDJM2|bouldin-island-geotechnical-exploration"
                data-status="in-progress"
                data-evidence="2"
              >
                <span
                  class="bcn-status-chip"
                  data-status="in-progress"
                  style="--_chip: var(--st-in-progress, var(--bcn-status-in-progress))"
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">In Progress</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><button
                  type="button"
                  class="bcn-loc__req-name"
                  data-list-text="Bouldin Island Geotechnical Exploration"
                >
                  Bouldin Island Geotechnical Exploration</button
                ><span class="bcn-loc__comments">3 comments</span
                ><span class="bcn-loc__evidence" data-list-evidence="">2 evidence</span>
              </li>
              <li
                class="bcn-loc__req bcn-loc__impl"
                data-list-impl="act_01M2G6Y3ENYWE6AXT12YDFDJM2|byron-tract-forebay"
                data-status="not-started"
                data-evidence="0"
              >
                <span
                  class="bcn-status-chip"
                  data-status="not-started"
                  style="--_chip: var(--st-not-started, var(--bcn-status-not-started))"
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Not Started</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><button
                  type="button"
                  class="bcn-loc__req-name"
                  data-list-text="Byron Tract Forebay"
                >
                  Byron Tract Forebay</button
                ><span class="bcn-loc__comments" hidden="">0 comments</span
                ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                  >No evidence</span
                >
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
    <details class="bcn-lot__cat" data-list-cat="Reporting" open="">
      <summary class="bcn-lot__row bcn-lot__row--cat">
        <span class="bcn-lot__chevron" aria-hidden="true"
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
              <path d="m9 18 6-6-6-6"></path></svg></span></span
        ><span class="bcn-lot__name" data-list-name="" data-list-text="Reporting">Reporting</span
        ><span data-list-count="cat"><span class="bcn-swcb" aria-label="14 actions">14</span></span>
      </summary>
      <ul class="bcn-lot__cards bcn-lmt__cards" data-list-cards="">
        <li
          class="bcn-loc"
          data-list-card=""
          data-member-id="act_01M2G6Y3R3GHBSN2G09CZKZQ72"
          data-id="act_01M2G6Y3R3GHBSN2G09CZKZQ72"
          data-class="action"
          data-codes="COA 10.13|COA 11.35|COA 11.36|COA 12"
          data-index="Site conduct::Compliance inspections and records|Agency reporting and approvals::Periodic compliance reports|Fish::Fish rescue and salvage|Water::Barge and vessel operations|Mitigation and restoration::Mitigation lands|Habitat protection::Habitat impact tracking"
        >
          <details class="bcn-loc__node">
            <summary class="bcn-loc__main">
              <span class="bcn-loc__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-loc__class" data-list-class-tag="">Reporting</span
              ><button
                type="button"
                class="bcn-loc__title"
                data-list-open=""
                data-list-title=""
                data-list-text="Deliver Annual Status Report to CDFW"
              >
                Deliver Annual Status Report to CDFW</button
              ><span data-list-count="member"
                ><span class="bcn-swcb" aria-label="2 implementations">2</span></span
              ><esa-tooltip text="Remove from this list" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-loc__verb bcn-loc__verb--danger"
                  aria-label="Remove from this list"
                  data-list-remove=""
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
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path></svg
                  ></span></button
              ></esa-tooltip>
            </summary>
            <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="action">
              <li
                class="bcn-loc__req bcn-loc__impl"
                data-list-impl="act_01M2G6Y3R3GHBSN2G09CZKZQ72|intake-c-north-delta"
                data-status="not-started"
                data-evidence="0"
              >
                <span
                  class="bcn-status-chip"
                  data-status="not-started"
                  style="--_chip: var(--st-not-started, var(--bcn-status-not-started))"
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Not Started</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><button
                  type="button"
                  class="bcn-loc__req-name"
                  data-list-text="Intake C — North Delta"
                >
                  Intake C — North Delta</button
                ><span class="bcn-loc__comments" hidden="">0 comments</span
                ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                  >No evidence</span
                >
              </li>
              <li
                class="bcn-loc__req bcn-loc__impl"
                data-list-impl="act_01M2G6Y3R3GHBSN2G09CZKZQ72|bethany-reservoir-aqueduct"
                data-status="not-started"
                data-evidence="0"
              >
                <span
                  class="bcn-status-chip"
                  data-status="not-started"
                  style="--_chip: var(--st-not-started, var(--bcn-status-not-started))"
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Not Started</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><button
                  type="button"
                  class="bcn-loc__req-name"
                  data-list-text="Bethany Reservoir Aqueduct"
                >
                  Bethany Reservoir Aqueduct</button
                ><span class="bcn-loc__comments" hidden="">0 comments</span
                ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                  >No evidence</span
                >
              </li>
            </ul>
          </details>
        </li>
        <li
          class="bcn-loc"
          data-list-card=""
          data-member-id="act_01M2G6Y3R6NBY4JTT233FQYDT9"
          data-id="act_01M2G6Y3R6NBY4JTT233FQYDT9"
          data-class="action"
          data-codes="COA 10.15"
          data-index="Site conduct::Compliance inspections and records|Mitigation and restoration::Restoration|Agency reporting and approvals::Periodic compliance reports"
        >
          <details class="bcn-loc__node">
            <summary class="bcn-loc__main">
              <span class="bcn-loc__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-loc__class" data-list-class-tag="">Reporting</span
              ><button
                type="button"
                class="bcn-loc__title"
                data-list-open=""
                data-list-title=""
                data-list-text="Deliver Final Phase Mitigation Report to CDFW"
              >
                Deliver Final Phase Mitigation Report to CDFW</button
              ><span data-list-count="member"
                ><span class="bcn-swcb" aria-label="1 implementations">1</span></span
              ><esa-tooltip text="Remove from this list" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-loc__verb bcn-loc__verb--danger"
                  aria-label="Remove from this list"
                  data-list-remove=""
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
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path></svg
                  ></span></button
              ></esa-tooltip>
            </summary>
            <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="action">
              <li
                class="bcn-loc__req bcn-loc__impl"
                data-list-impl="act_01M2G6Y3R6NBY4JTT233FQYDT9|twin-cities-complex"
                data-status="not-started"
                data-evidence="0"
              >
                <span
                  class="bcn-status-chip"
                  data-status="not-started"
                  style="--_chip: var(--st-not-started, var(--bcn-status-not-started))"
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Not Started</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><button
                  type="button"
                  class="bcn-loc__req-name"
                  data-list-text="Twin Cities Complex"
                >
                  Twin Cities Complex</button
                ><span class="bcn-loc__comments">3 comments</span
                ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                  >No evidence</span
                >
              </li>
            </ul>
          </details>
        </li>
        <!-- …and 12 more like this (<li class="bcn-loc">) -->
      </ul>
    </details>
  </div>
  <div class="bcn-lot__body" data-list-mirror-body="" data-built="">
    <details class="bcn-lot__cat" data-list-group="Agency reporting and approvals" open="">
      <summary class="bcn-lot__row bcn-lot__row--cat">
        <span class="bcn-lot__chevron" aria-hidden="true"
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
              <path d="m9 18 6-6-6-6"></path></svg></span></span
        ><span
          class="bcn-lot__name"
          data-list-name=""
          data-list-text="Agency reporting and approvals"
          >Agency reporting and approvals</span
        ><span data-list-count="group"><span class="bcn-swcb" aria-label="8 actions">8</span></span>
      </summary>
      <div class="bcn-lot__subs" data-list-subs="">
        <details
          class="bcn-lot__sub"
          data-list-group="Agency reporting and approvals::Agency approvals"
        >
          <summary class="bcn-lot__row bcn-lot__row--sub">
            <span class="bcn-lot__chevron" aria-hidden="true"
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
                  <path d="m9 18 6-6-6-6"></path></svg></span></span
            ><span class="bcn-lot__name" data-list-name="" data-list-text="Agency approvals"
              >Agency approvals</span
            ><span data-list-count="group"
              ><span class="bcn-swcb" aria-label="1 actions">1</span></span
            >
          </summary>
          <ul class="bcn-lot__cards" data-list-cards="">
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="act_01M2G6Y3RB67EQDRWNDJBKFW6M"
              data-id="act_01M2G6Y3RB67EQDRWNDJBKFW6M"
              data-class="action"
              data-codes="COA 10.9"
              data-index="Habitat protection::Habitat impact tracking|Agency reporting and approvals::Non-compliance reporting|Agency reporting and approvals::Agency approvals"
              data-list-mirror="act_01M2G6Y3RB67EQDRWNDJBKFW6M|Agency reporting and approvals::Agency approvals"
            >
              <details class="bcn-loc__node">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Reporting</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-open=""
                    data-list-title=""
                    data-list-text="Notify CDFW of Likely Impact Exceedance and Revised Schedule"
                  >
                    Notify CDFW of Likely Impact Exceedance and Revised Schedule</button
                  ><span data-list-count="member"
                    ><span class="bcn-swcb" aria-label="1 implementations">1</span></span
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="action">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="act_01M2G6Y3RB67EQDRWNDJBKFW6M|intake-c-north-delta"
                    data-status="not-started"
                    data-evidence="0"
                  >
                    <span
                      class="bcn-status-chip"
                      data-status="not-started"
                      style="--_chip: var(--st-not-started, var(--bcn-status-not-started))"
                      ><span class="bcn-status-chip__dot"></span
                      ><span class="bcn-status-chip__label">Not Started</span></span
                    ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake C — North Delta"
                    >
                      Intake C — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
        <details
          class="bcn-lot__sub"
          data-list-group="Agency reporting and approvals::Non-compliance reporting"
        >
          <summary class="bcn-lot__row bcn-lot__row--sub">
            <span class="bcn-lot__chevron" aria-hidden="true"
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
                  <path d="m9 18 6-6-6-6"></path></svg></span></span
            ><span class="bcn-lot__name" data-list-name="" data-list-text="Non-compliance reporting"
              >Non-compliance reporting</span
            ><span data-list-count="group"
              ><span class="bcn-swcb" aria-label="1 actions">1</span></span
            >
          </summary>
          <ul class="bcn-lot__cards" data-list-cards="">
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="act_01M2G6Y3RB67EQDRWNDJBKFW6M"
              data-id="act_01M2G6Y3RB67EQDRWNDJBKFW6M"
              data-class="action"
              data-codes="COA 10.9"
              data-index="Habitat protection::Habitat impact tracking|Agency reporting and approvals::Non-compliance reporting|Agency reporting and approvals::Agency approvals"
              data-list-mirror="act_01M2G6Y3RB67EQDRWNDJBKFW6M|Agency reporting and approvals::Non-compliance reporting"
            >
              <details class="bcn-loc__node">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Reporting</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-open=""
                    data-list-title=""
                    data-list-text="Notify CDFW of Likely Impact Exceedance and Revised Schedule"
                  >
                    Notify CDFW of Likely Impact Exceedance and Revised Schedule</button
                  ><span data-list-count="member"
                    ><span class="bcn-swcb" aria-label="1 implementations">1</span></span
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button
                  ></esa-tooltip>
                </summary>
                <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="action">
                  <li
                    class="bcn-loc__req bcn-loc__impl"
                    data-list-impl="act_01M2G6Y3RB67EQDRWNDJBKFW6M|intake-c-north-delta"
                    data-status="not-started"
                    data-evidence="0"
                  >
                    <span
                      class="bcn-status-chip"
                      data-status="not-started"
                      style="--_chip: var(--st-not-started, var(--bcn-status-not-started))"
                      ><span class="bcn-status-chip__dot"></span
                      ><span class="bcn-status-chip__label">Not Started</span></span
                    ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><button
                      type="button"
                      class="bcn-loc__req-name"
                      data-list-text="Intake C — North Delta"
                    >
                      Intake C — North Delta</button
                    ><span class="bcn-loc__comments" hidden="">0 comments</span
                    ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
                      >No evidence</span
                    >
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
        <!-- …and 3 more like this (<details class="bcn-lot__sub">) -->
      </div>
    </details>
    <details class="bcn-lot__cat" data-list-group="Birds" open="">
      <summary class="bcn-lot__row bcn-lot__row--cat">
        <span class="bcn-lot__chevron" aria-hidden="true"
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
              <path d="m9 18 6-6-6-6"></path></svg></span></span
        ><span class="bcn-lot__name" data-list-name="" data-list-text="Birds">Birds</span
        ><span data-list-count="group"><span class="bcn-swcb" aria-label="1 actions">1</span></span>
      </summary>
      <div class="bcn-lot__subs" data-list-subs="">
        <details class="bcn-lot__sub" data-list-group="Birds::Nesting birds">
          <summary class="bcn-lot__row bcn-lot__row--sub">
            <span class="bcn-lot__chevron" aria-hidden="true"
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
                  <path d="m9 18 6-6-6-6"></path></svg></span></span
            ><span class="bcn-lot__name" data-list-name="" data-list-text="Nesting birds"
              >Nesting birds</span
            ><span data-list-count="group"
              ><span class="bcn-swcb" aria-label="1 actions">1</span></span
            >
          </summary>
          <ul class="bcn-lot__cards" data-list-cards="">
            <li
              class="bcn-loc"
              data-list-card=""
              data-member-id="act_01M2G6Y3RC1N589S9ETAS5HQJS"
              data-id="act_01M2G6Y3RC1N589S9ETAS5HQJS"
              data-class="action"
              data-codes="COA 11.86|COA 11.88"
              data-index="Birds::Nesting birds|Birds::Tricolored blackbird|Agency reporting and approvals::Take and injury reporting"
              data-list-mirror="act_01M2G6Y3RC1N589S9ETAS5HQJS|Birds::Nesting birds"
            >
              <details class="bcn-loc__node">
                <summary class="bcn-loc__main">
                  <span class="bcn-loc__chevron" aria-hidden="true"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span
                  ><span class="bcn-loc__class" data-list-class-tag="">Reporting</span
                  ><button
                    type="button"
                    class="bcn-loc__title"
                    data-list-open=""
                    data-list-title=""
                    data-list-text="Notify CDFW of TRBL Colony or Roost Disturbance"
                  >
                    Notify CDFW of TRBL Colony or Roost Disturbance</button
                  ><span data-list-count="member"
                    ><span class="bcn-swcb" aria-label="1 implementations">1</span></span
                  ><esa-tooltip text="Remove from this list" align="end" position="above"
                    ><button
                      type="button"
                      class="bcn-loc__verb bcn-loc__verb--danger"
                      aria-label="Remove from this list"
                      data-list-remove=""
```
