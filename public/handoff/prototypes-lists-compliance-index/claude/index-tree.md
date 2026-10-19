# Index tree

Every action and obligation on the project, category › subcategory, Unfiled › Needs a home last. Categories load open, subcategories folded; inside a subcategory, actions first, then obligations, each A–Z.

## Key decisions
- Same rows and cards as the list pages: the action card (type chip, title, implementation count) and the obligation card (class chip, title, implementation count), each opening to its implementations.
- The cards' list verbs (remove, duplicate, move or retitle for this list) are hidden: nothing on this page edits the index. Filing is the setup wizard's Compliance Index step.
- No filter row, add drawer, title-row verbs or Danger Zone: the canonical index is the project's own, and every version starts from it. It cannot be renamed or deleted here.
- Prod data: the same export-data read the index PDF uses (see list-export-compliance-index-pdf), so the page and the PDF hold the same items.

## Gotchas
- In prod an action's subcategory is Action.ComplianceIndexSubcategoryID; unfiled means null. The prototype's placement rule is a fixture stand-in; do not port it.

## Done when
- Category counts sum to the title badge (every action plus every obligation); Unfiled is the last category.

## Markup
```html
<details
  class="bcn-lot__sub"
  data-index-sub="agency-reporting-and-approvals-agency-approvals"
  open=""
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
    ><span class="bcn-lot__name">Agency approvals</span
    ><span class="bcn-swcb" aria-label="22 items">22</span>
  </summary>
  <ul class="bcn-lot__cards">
    <li
      class="bcn-loc"
      data-list-card=""
      data-member-id="act_01M2G6Y3EPKKKVFDBN1YQGB0HT"
      data-id="act_01M2G6Y3EPKKKVFDBN1YQGB0HT"
      data-class="action"
      data-codes="COA 13.1"
      data-index="Mitigation and restoration::Mitigation lands|Mitigation and restoration::Security and funding assurances|Agency reporting and approvals::Agency approvals"
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
            data-list-text="Calculate Phase Security Amount Before Phase Approval"
          >
            Calculate Phase Security Amount Before Phase Approval</button
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
            data-list-impl="act_01M2G6Y3EPKKKVFDBN1YQGB0HT|twin-cities-complex"
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
            data-list-impl="act_01M2G6Y3EPKKKVFDBN1YQGB0HT|bouldin-island-launch-shaft"
            data-status="on-hold"
            data-evidence="0"
          >
            <span
              class="bcn-status-chip"
              data-status="on-hold"
              style="--_chip: var(--st-on-hold, var(--bcn-status-on-hold))"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">On Hold</span></span
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
              data-list-text="Bouldin Island Launch Shaft"
            >
              Bouldin Island Launch Shaft</button
            ><span class="bcn-loc__comments" hidden="">0 comments</span
            ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
              >No evidence</span
            >
          </li>
          <li
            class="bcn-loc__req bcn-loc__impl"
            data-list-impl="act_01M2G6Y3EPKKKVFDBN1YQGB0HT|byron-tract-forebay"
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
    <li
      class="bcn-loc"
      data-list-card=""
      data-member-id="act_01M2G6Y34ZRWNWJ42W3E737QZR"
      data-id="act_01M2G6Y34ZRWNWJ42W3E737QZR"
      data-class="action"
      data-codes="COA 4"
      data-index="Agency reporting and approvals::Agency approvals"
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
          ><span class="bcn-loc__class" data-list-class-tag=""
            >Approval &amp; Consultation</span
          ><button
            type="button"
            class="bcn-loc__title"
            data-list-open=""
            data-list-title=""
            data-list-text="Consult CDFW on Federal Biological Opinions"
          >
            Consult CDFW on Federal Biological Opinions</button
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
            data-list-impl="act_01M2G6Y34ZRWNWJ42W3E737QZR|bethany-reservoir-aqueduct"
            data-status="on-hold"
            data-evidence="3"
          >
            <span
              class="bcn-status-chip"
              data-status="on-hold"
              style="--_chip: var(--st-on-hold, var(--bcn-status-on-hold))"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">On Hold</span></span
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
            ><span class="bcn-loc__comments">2 comments</span
            ><span class="bcn-loc__evidence" data-list-evidence="">3 evidence</span>
          </li>
          <li
            class="bcn-loc__req bcn-loc__impl"
            data-list-impl="act_01M2G6Y34ZRWNWJ42W3E737QZR|southern-forebay-pumping-plant"
            data-status="completed"
            data-evidence="2"
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
              data-list-text="Southern Forebay &amp; Pumping Plant"
            >
              Southern Forebay &amp; Pumping Plant</button
            ><span class="bcn-loc__comments" hidden="">0 comments</span
            ><span class="bcn-loc__evidence" data-list-evidence="">2 evidence</span>
          </li>
        </ul>
      </details>
    </li>
    <li
      class="bcn-loc"
      data-list-card=""
      data-member-id="act_01M2G6Y34X89RDDJZVZVMK8Y0D"
      data-id="act_01M2G6Y34X89RDDJZVZVMK8Y0D"
      data-class="action"
      data-codes="COA 11.40"
      data-index="Amphibians and reptiles::Amphibians|Agency reporting and approvals::Agency approvals"
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
          ><span class="bcn-loc__class" data-list-class-tag=""
            >Approval &amp; Consultation</span
          ><button
            type="button"
            class="bcn-loc__title"
            data-list-open=""
            data-list-title=""
            data-list-text="Coordinate with CDFW on Breeding Habitat Buffer Encroachment"
          >
            Coordinate with CDFW on Breeding Habitat Buffer Encroachment</button
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
            data-list-impl="act_01M2G6Y34X89RDDJZVZVMK8Y0D|bouldin-island-launch-shaft"
            data-status="in-progress"
            data-evidence="0"
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
              data-list-text="Bouldin Island Launch Shaft"
            >
              Bouldin Island Launch Shaft</button
            ><span class="bcn-loc__comments" hidden="">0 comments</span
            ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
              >No evidence</span
            >
          </li>
          <li
            class="bcn-loc__req bcn-loc__impl"
            data-list-impl="act_01M2G6Y34X89RDDJZVZVMK8Y0D|byron-tract-forebay"
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
    <li
      class="bcn-loc"
      data-list-card=""
      data-member-id="act_01M2G6Y34V8WHD9WZSVEXW30W6"
      data-id="act_01M2G6Y34V8WHD9WZSVEXW30W6"
      data-class="action"
      data-codes="COA 10.18.3|COA 12|COA 8"
      data-index="Agency reporting and approvals::Agency approvals|Water operations::Diversion limits and bypass flows|Habitat protection::Habitat impact tracking|Agency reporting and approvals::Non-compliance reporting"
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
          ><span class="bcn-loc__class" data-list-class-tag=""
            >Approval &amp; Consultation</span
          ><button
            type="button"
            class="bcn-loc__title"
            data-list-open=""
            data-list-title=""
            data-list-text="Notify and Consult CDFW on ITP Amendment Conditions"
          >
            Notify and Consult CDFW on ITP Amendment Conditions</button
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
            data-list-impl="act_01M2G6Y34V8WHD9WZSVEXW30W6|byron-tract-forebay"
            data-status="in-progress"
            data-evidence="3"
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
              data-list-text="Byron Tract Forebay"
            >
              Byron Tract Forebay</button
            ><span class="bcn-loc__comments" hidden="">0 comments</span
            ><span class="bcn-loc__evidence" data-list-evidence="">3 evidence</span>
          </li>
          <li
            class="bcn-loc__req bcn-loc__impl"
            data-list-impl="act_01M2G6Y34V8WHD9WZSVEXW30W6|intake-b-north-delta"
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
              data-list-text="Intake B — North Delta"
            >
              Intake B — North Delta</button
            ><span class="bcn-loc__comments" hidden="">0 comments</span
            ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
              >No evidence</span
            >
          </li>
          <li
            class="bcn-loc__req bcn-loc__impl"
            data-list-impl="act_01M2G6Y34V8WHD9WZSVEXW30W6|intake-c-north-delta"
            data-status="completed"
            data-evidence="2"
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
              data-list-text="Intake C — North Delta"
            >
              Intake C — North Delta</button
            ><span class="bcn-loc__comments" hidden="">0 comments</span
            ><span class="bcn-loc__evidence" data-list-evidence="">2 evidence</span>
          </li>
        </ul>
      </details>
    </li>
    <li
      class="bcn-loc"
      data-list-card=""
      data-member-id="act_01M2G6Y34X89RDDJZVZVMK8Y0M"
      data-id="act_01M2G6Y34X89RDDJZVZVMK8Y0M"
      data-class="action"
      data-codes="COA 11.60"
      data-index="Water::In-water work|Amphibians and reptiles::Giant garter snake|Agency reporting and approvals::Agency approvals"
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
          ><span class="bcn-loc__class" data-list-class-tag=""
            >Approval &amp; Consultation</span
          ><button
            type="button"
            class="bcn-loc__title"
            data-list-open=""
            data-list-title=""
            data-list-text="Obtain CDFW Approval for In-Channel Work in the GGS Active Season"
          >
            Obtain CDFW Approval for In-Channel Work in the GGS Active Season</button
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
            data-list-impl="act_01M2G6Y34X89RDDJZVZVMK8Y0M|byron-tract-forebay"
            data-status="completed"
            data-evidence="3"
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
            ><span class="bcn-loc__comments">1 comment</span
            ><span class="bcn-loc__evidence" data-list-evidence="">3 evidence</span>
          </li>
        </ul>
      </details>
    </li>
    <li
      class="bcn-loc"
      data-list-card=""
      data-member-id="act_01M2G6Y34X89RDDJZVZVMK8Y0N"
      data-id="act_01M2G6Y34X89RDDJZVZVMK8Y0N"
      data-class="action"
      data-codes="COA 11.61"
      data-index="Water::Dewatering|Agency reporting and approvals::Agency approvals|Amphibians and reptiles::Giant garter snake"
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
          ><span class="bcn-loc__class" data-list-class-tag=""
            >Approval &amp; Consultation</span
          ><button
            type="button"
            class="bcn-loc__title"
            data-list-open=""
            data-list-title=""
            data-list-text="Obtain CDFW Approval of Dewatering Measure Deviations"
          >
            Obtain CDFW Approval of Dewatering Measure Deviations</button
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
            data-list-impl="act_01M2G6Y34X89RDDJZVZVMK8Y0N|bouldin-island-launch-shaft"
            data-status="overdue"
            data-evidence="0"
          >
            <span
              class="bcn-status-chip"
              data-status="overdue"
              style="--_chip: var(--st-overdue, var(--bcn-status-overdue))"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Overdue</span></span
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
              data-list-text="Bouldin Island Launch Shaft"
            >
              Bouldin Island Launch Shaft</button
            ><span class="bcn-loc__comments" hidden="">0 comments</span
            ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
              >No evidence</span
            >
          </li>
          <li
            class="bcn-loc__req bcn-loc__impl"
            data-list-impl="act_01M2G6Y34X89RDDJZVZVMK8Y0N|byron-tract-forebay"
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
    <li
      class="bcn-loc"
      data-list-card=""
      data-member-id="act_01M2G6Y34YSP53SW383CFT2CZN"
      data-id="act_01M2G6Y34YSP53SW383CFT2CZN"
      data-class="action"
      data-codes="COA 12.11.3"
      data-index="Mitigation and restoration::Mitigation lands|Agency reporting and approvals::Agency approvals"
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
          ><span class="bcn-loc__class" data-list-class-tag=""
            >Approval &amp; Consultation</span
          ><button
            type="button"
            class="bcn-loc__title"
            data-list-open=""
            data-list-title=""
            data-list-text="Obtain CDFW Approval of HM Lands Before Acquisition"
          >
            Obtain CDFW Approval of HM Lands Before Acquisition</button
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
            data-list-impl="act_01M2G6Y34YSP53SW383CFT2CZN|bouldin-island-launch-shaft"
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
              data-list-text="Bouldin Island Launch Shaft"
            >
              Bouldin Island Launch Shaft</button
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
      data-member-id="act_01M2G6Y34YSP53SW383CFT2CZD"
      data-id="act_01M2G6Y34YSP53SW383CFT2CZD"
      data-class="action"
      data-codes="COA 11.7"
      data-index="Site conduct::Work hours|Agency reporting and approvals::Agency approvals"
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
          ><span class="bcn-loc__class" data-list-class-tag=""
            >Approval &amp; Consultation</span
          ><button
            type="button"
            class="bcn-loc__title"
            data-list-open=""
            data-list-title=""
            data-list-text="Obtain CDFW Approval of Nighttime Covered Activities"
          >
            Obtain CDFW Approval of Nighttime Covered Activities</button
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
            data-list-impl="act_01M2G6Y34YSP53SW383CFT2CZD|southern-forebay-pumping-plant"
            data-status="on-hold"
            data-evidence="6"
          >
            <span
              class="bcn-status-chip"
              data-status="on-hold"
              style="--_chip: var(--st-on-hold, var(--bcn-status-on-hold))"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">On Hold</span></span
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
              data-list-text="Southern Forebay &amp; Pumping Plant"
            >
              Southern Forebay &amp; Pumping Plant</button
            ><span class="bcn-loc__comments">3 comments</span
            ><span class="bcn-loc__evidence" data-list-evidence="">6 evidence</span>
          </li>
          <li
            class="bcn-loc__req bcn-loc__impl"
            data-list-impl="act_01M2G6Y34YSP53SW383CFT2CZD|twin-cities-complex"
            data-status="in-progress"
            data-evidence="1"
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
            ><span class="bcn-loc__comments">2 comments</span
            ><span class="bcn-loc__evidence" data-list-evidence="">1 evidence</span>
          </li>
          <li
            class="bcn-loc__req bcn-loc__impl"
            data-list-impl="act_01M2G6Y34YSP53SW383CFT2CZD|bouldin-island-launch-shaft"
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
              data-list-text="Bouldin Island Launch Shaft"
            >
              Bouldin Island Launch Shaft</button
            ><span class="bcn-loc__comments">3 comments</span
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
      data-member-id="act_01M2G6Y34YSP53SW383CFT2CZK"
      data-id="act_01M2G6Y34YSP53SW383CFT2CZK"
      data-class="action"
      data-codes="COA 12.10"
      data-index="Mitigation and restoration::Mitigation lands|Agency reporting and approvals::Agency approvals"
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
          ><span class="bcn-loc__class" data-list-class-tag=""
            >Approval &amp; Consultation</span
          ><button
            type="button"
            class="bcn-loc__title"
            data-list-open=""
            data-list-title=""
            data-list-text="Obtain CDFW Approval of the Mitigation or Conservation Bank"
          >
            Obtain CDFW Approval of the Mitigation or Conservation Bank</button
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
            data-list-impl="act_01M2G6Y34YSP53SW383CFT2CZK|southern-forebay-pumping-plant"
            data-status="overdue"
            data-evidence="0"
          >
            <span
              class="bcn-status-chip"
              data-status="overdue"
              style="--_chip: var(--st-overdue, var(--bcn-status-overdue))"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Overdue</span></span
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
              data-list-text="Southern Forebay &amp; Pumping Plant"
            >
              Southern Forebay &amp; Pumping Plant</button
            ><span class="bcn-loc__comments" hidden="">0 comments</span
            ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
              >No evidence</span
            >
          </li>
          <li
            class="bcn-loc__req bcn-loc__impl"
            data-list-impl="act_01M2G6Y34YSP53SW383CFT2CZK|twin-cities-complex"
            data-status="on-hold"
            data-evidence="6"
          >
            <span
              class="bcn-status-chip"
              data-status="on-hold"
              style="--_chip: var(--st-on-hold, var(--bcn-status-on-hold))"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">On Hold</span></span
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
            data-list-impl="act_01M2G6Y34YSP53SW383CFT2CZK|bouldin-island-launch-shaft"
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
              data-list-text="Bouldin Island Launch Shaft"
            >
              Bouldin Island Launch Shaft</button
            ><span class="bcn-loc__comments" hidden="">0 comments</span
            ><span class="bcn-loc__evidence" data-list-evidence="">6 evidence</span>
          </li>
        </ul>
      </details>
    </li>
    <li
      class="bcn-loc"
      data-list-card=""
      data-member-id="act_01M2G6Y34WE7XE98281ZXQVPK5"
      data-id="act_01M2G6Y34WE7XE98281ZXQVPK5"
      data-class="action"
      data-codes="COA 11.110"
      data-index="Water operations::Diversion limits and bypass flows|Agency reporting and approvals::Agency approvals"
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
          ><span class="bcn-loc__class" data-list-class-tag=""
            >Approval &amp; Consultation</span
          ><button
            type="button"
            class="bcn-loc__title"
            data-list-open=""
            data-list-title=""
            data-list-text="Obtain CDFW Approval to Extend Phase 1 Operations"
          >
            Obtain CDFW Approval to Extend Phase 1 Operations</button
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
            data-list-impl="act_01M2G6Y34WE7XE98281ZXQVPK5|intake-b-north-delta"
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
              data-list-text="Intake B — North Delta"
            >
              Intake B — North Delta</button
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
      data-member-id="act_01M2G6Y34X89RDDJZVZVMK8Y0J"
      data-id="act_01M2G6Y34X89RDDJZVZVMK8Y0J"
      data-class="action"
      data-codes="COA 11.59"
      data-index="Amphibians and reptiles::Giant garter snake|Agency reporting and approvals::Agency approvals|Habitat protection::Exclusion fencing and ESAs"
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
          ><span class="bcn-loc__class" data-list-class-tag=""
            >Approval &amp; Consultation</span
          ><button
            type="button"
            class="bcn-loc__title"
            data-list-open=""
            data-list-title=""
            data-list-text="Obtain CDFW Approval to Work Outside the Seasonal Window"
          >
            Obtain CDFW Approval to Work Outside the Seasonal Window</button
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
            data-list-impl="act_01M2G6Y34X89RDDJZVZVMK8Y0J|byron-tract-forebay"
            data-status="completed"
            data-evidence="4"
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
            ><span class="bcn-loc__evidence" data-list-evidence="">4 evidence</span>
          </li>
        </ul>
      </details>
    </li>
    <li
      class="bcn-loc"
      data-list-card=""
      data-member-id="act_01M2G6Y34YSP53SW383CFT2CZJ"
      data-id="act_01M2G6Y34YSP53SW383CFT2CZJ"
      data-class="action"
      data-codes="COA 12"
      data-index="Mitigation and restoration::Mitigation lands|Agency reporting and approvals::Agency approvals"
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
          ><span class="bcn-loc__class" data-list-class-tag=""
            >Approval &amp; Consultation</span
          ><button
            type="button"
            class="bcn-loc__title"
            data-list-open=""
            data-list-title=""
            data-list-text="Obtain CESA Authorization for HM Lands Activities"
          >
            Obtain CESA Authorization for HM Lands Activities</button
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
            data-list-impl="act_01M2G6Y34YSP53SW383CFT2CZJ|twin-cities-complex"
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
            data-list-impl="act_01M2G6Y34YSP53SW383CFT2CZJ|bouldin-island-launch-shaft"
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
              data-list-text="Bouldin Island Launch Shaft"
            >
              Bouldin Island Launch Shaft</button
            ><span class="bcn-loc__comments">1 comment</span
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
      data-member-id="act_01M2G6Y3RA6HTPQEBMJTM46QTT"
      data-id="act_01M2G6Y3RA6HTPQEBMJTM46QTT"
      data-class="action"
      data-codes="COA 10.18"
      data-index="Water operations::Operations monitoring and studies|Agency reporting and approvals::Agency approvals"
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
            data-list-text="Submit Aquatic Conditions Assessments with the Phase 2 Package"
          >
            Submit Aquatic Conditions Assessments with the Phase 2 Package</button
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
            data-list-impl="act_01M2G6Y3RA6HTPQEBMJTM46QTT|intake-c-north-delta"
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
            data-list-impl="act_01M2G6Y3RA6HTPQEBMJTM46QTT|bethany-reservoir-aqueduct"
            data-status="completed"
            data-evidence="1"
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
              data-list-text="Bethany Reservoir Aqueduct"
            >
              Bethany Reservoir Aqueduct</button
            ><span class="bcn-loc__comments" hidden="">0 comments</span
            ><span class="bcn-loc__evidence" data-list-evidence="">1 evidence</span>
          </li>
          <li
            class="bcn-loc__req bcn-loc__impl"
            data-list-impl="act_01M2G6Y3RA6HTPQEBMJTM46QTT|southern-forebay-pumping-plant"
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
              data-list-text="Southern Forebay &amp; Pumping Plant"
            >
              Southern Forebay &amp; Pumping Plant</button
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
      data-member-id="act_01M2G6Y34ZRWNWJ42W3E737QZS"
      data-id="act_01M2G6Y34ZRWNWJ42W3E737QZS"
      data-class="action"
      data-codes="COA 6|COA 6.2"
      data-index="Agency reporting and approvals::Agency approvals|Agency reporting and approvals::Schedule notices"
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
          ><span class="bcn-loc__class" data-list-class-tag=""
            >Approval &amp; Consultation</span
          ><button
            type="button"
            class="bcn-loc__title"
            data-list-open=""
            data-list-title=""
            data-list-text="Submit Construction Phase Authorization Package to CDFW"
          >
            Submit Construction Phase Authorization Package to CDFW</button
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
            data-list-impl="act_01M2G6Y34ZRWNWJ42W3E737QZS|southern-forebay-pumping-plant"
            data-status="completed"
            data-evidence="5"
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
              data-list-text="Southern Forebay &amp; Pumping Plant"
            >
              Southern Forebay &amp; Pumping Plant</button
            ><span class="bcn-loc__comments" hidden="">0 comments</span
            ><span class="bcn-loc__evidence" data-list-evidence="">5 evidence</span>
          </li>
        </ul>
      </details>
    </li>
    <li
      class="bcn-loc"
      data-list-card=""
      data-member-id="act_01M2G6Y34TCYX1R0179FZ33YWM"
      data-id="act_01M2G6Y34TCYX1R0179FZ33YWM"
      data-class="action"
      data-codes="COA 10.18.1"
      data-index="Water operations::Operations monitoring and studies|Agency reporting and approvals::Agency approvals"
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
          ><span class="bcn-loc__class" data-list-class-tag=""
            >Approval &amp; Consultation</span
          ><button
            type="button"
            class="bcn-loc__title"
            data-list-open=""
            data-list-title=""
            data-list-text="Submit Fish Study Plans and Reports for CDFW Approval"
          >
            Submit Fish Study Plans and Reports for CDFW Approval</button
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
            data-list-impl="act_01M2G6Y34TCYX1R0179FZ33YWM|twin-cities-complex"
            data-status="in-progress"
            data-evidence="5"
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
            ><span class="bcn-loc__evidence" data-list-evidence="">5 evidence</span>
          </li>
          <li
            class="bcn-loc__req bcn-loc__impl"
            data-list-impl="act_01M2G6Y34TCYX1R0179FZ33YWM|bouldin-island-launch-shaft"
            data-status="on-hold"
            data-evidence="6"
          >
            <span
              class="bcn-status-chip"
              data-status="on-hold"
              style="--_chip: var(--st-on-hold, var(--bcn-status-on-hold))"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">On Hold</span></span
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
              data-list-text="Bouldin Island Launch Shaft"
            >
              Bouldin Island Launch Shaft</button
            ><span class="bcn-loc__comments" hidden="">0 comments</span
            ><span class="bcn-loc__evidence" data-list-evidence="">6 evidence</span>
          </li>
          <li
            class="bcn-loc__req bcn-loc__impl"
            data-list-impl="act_01M2G6Y34TCYX1R0179FZ33YWM|byron-tract-forebay"
            data-status="completed"
            data-evidence="5"
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
            ><span class="bcn-loc__evidence" data-list-evidence="">5 evidence</span>
          </li>
        </ul>
      </details>
    </li>
    <li
      class="bcn-loc"
      data-list-card=""
      data-member-id="act_01M2G6Y3RA6HTPQEBMJTM46QTV"
      data-id="act_01M2G6Y3RA6HTPQEBMJTM46QTV"
      data-class="action"
      data-codes="COA 10.21.8"
      data-index="Water operations::Operations monitoring and studies|Agency reporting and approvals::Agency approvals"
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
            data-list-text="Submit Joint Operations Study Results and Compliance Report"
          >
            Submit Joint Operations Study Results and Compliance Report</button
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
            data-list-impl="act_01M2G6Y3RA6HTPQEBMJTM46QTV|intake-b-north-delta"
            data-status="in-progress"
            data-evidence="1"
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
              data-list-text="Intake B — North Delta"
            >
              Intake B — North Delta</button
            ><span class="bcn-loc__comments">2 comments</span
            ><span class="bcn-loc__evidence" data-list-evidence="">1 evidence</span>
          </li>
        </ul>
      </details>
    </li>
    <li
      class="bcn-loc"
      data-list-card=""
      data-member-id="act_01M2G6Y34ZRWNWJ42W3E737QZV"
      data-id="act_01M2G6Y34ZRWNWJ42W3E737QZV"
      data-class="action"
      data-codes="COA 7|COA 7.1"
      data-index="Agency reporting and approvals::Agency approvals"
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
          ><span class="bcn-loc__class" data-list-class-tag=""
            >Approval &amp; Consultation</span
          ><button
            type="button"
            class="bcn-loc__title"
            data-list-open=""
            data-list-title=""
            data-list-text="Submit Phase 2 Authorization Package to CDFW"
          >
            Submit Phase 2 Authorization Package to CDFW</button
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
            data-list-impl="act_01M2G6Y34ZRWNWJ42W3E737QZV|southern-forebay-pumping-plant"
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
              data-list-text="Southern Forebay &amp; Pumping Plant"
            >
              Southern Forebay &amp; Pumping Plant</button
            ><span class="bcn-loc__comments">1 comment</span
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
      data-member-id="act_01M2G6Y34ZRWNWJ42W3E737QZT"
      data-id="act_01M2G6Y34ZRWNWJ42W3E737QZT"
      data-class="action"
      data-codes="COA 6.1"
      data-index="Agency reporting and approvals::Agency approvals|Agency reporting and approvals::Schedule notices"
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
          ><span class="bcn-loc__class" data-list-class-tag=""
            >Approval &amp; Consultation</span
          ><button
            type="button"
            class="bcn-loc__title"
            data-list-open=""
            data-list-title=""
            data-list-text="Submit Pre-implementation Phase Authorization Package to CDFW"
          >
            Submit Pre-implementation Phase Authorization Package to CDFW</button
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
            data-list-impl="act_01M2G6Y34ZRWNWJ42W3E737QZT|bethany-reservoir-aqueduct"
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
          <li
            class="bcn-loc__req bcn-loc__impl"
            data-list-impl="act_01M2G6Y34ZRWNWJ42W3E737QZT|southern-forebay-pumping-plant"
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
              data-list-text="Southern Forebay &amp; Pumping Plant"
            >
              Southern Forebay &amp; Pumping Plant</button
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
      data-member-id="act_01M2G6Y3RA6HTPQEBMJTM46QTN"
      data-id="act_01M2G6Y3RA6HTPQEBMJTM46QTN"
      data-class="action"
      data-codes="COA 10.8"
      data-index="Habitat protection::Habitat impact tracking|Agency reporting and approvals::Agency approvals"
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
            data-list-text="Submit Preconstruction Habitat Survey Results in the Phase Package"
          >
            Submit Preconstruction Habitat Survey Results in the Phase Package</button
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
            data-list-impl="act_01M2G6Y3RA6HTPQEBMJTM46QTN|intake-c-north-delta"
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
            data-list-impl="act_01M2G6Y3RA6HTPQEBMJTM46QTN|bethany-reservoir-aqueduct"
            data-status="completed"
            data-evidence="5"
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
              data-list-text="Bethany Reservoir Aqueduct"
            >
              Bethany Reservoir Aqueduct</button
            ><span class="bcn-loc__comments">1 comment</span
            ><span class="bcn-loc__evidence" data-list-evidence="">5 evidence</span>
          </li>
          <li
            class="bcn-loc__req bcn-loc__impl"
            data-list-impl="act_01M2G6Y3RA6HTPQEBMJTM46QTN|southern-forebay-pumping-plant"
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
              data-list-text="Southern Forebay &amp; Pumping Plant"
            >
              Southern Forebay &amp; Pumping Plant</button
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
      data-member-id="act_01M2G6Y3NNJMTS3JZDQQZNRKES"
      data-id="act_01M2G6Y3NNJMTS3JZDQQZNRKES"
      data-class="action"
      data-codes="COA 11.38|COA 6.1"
      data-index="Agency reporting and approvals::Agency approvals|People and qualifications::Designated biologists and monitors"
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
          ><span class="bcn-loc__class" data-list-class-tag="">Plan</span
          ><button
            type="button"
            class="bcn-loc__title"
            data-list-open=""
            data-list-title=""
            data-list-text="Submit Species and Habitat Survey Protocols to CDFW"
          >
            Submit Species and Habitat Survey Protocols to CDFW</button
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
            data-list-impl="act_01M2G6Y3NNJMTS3JZDQQZNRKES|twin-cities-complex"
            data-status="in-progress"
            data-evidence="0"
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
            ><span class="bcn-loc__comments">2 comments</span
            ><span class="bcn-loc__evidence" data-list-evidence="" data-none=""
              >No evidence</span
            >
          </li>
          <li
            class="bcn-loc__req bcn-loc__impl"
            data-list-impl="act_01M2G6Y3NNJMTS3JZDQQZNRKES|bouldin-island-launch-shaft"
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
              data-list-text="Bouldin Island Launch Shaft"
            >
              Bouldin Island Launch Shaft</button
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
      data-member-id="act_01M2G6Y3RA6HTPQEBMJTM46QTQ"
      data-id="act_01M2G6Y3RA6HTPQEBMJTM46QTQ"
      data-class="action"
      data-codes="COA 10.17"
      data-index="Noise and vibration::Vibration|Agency reporting and approvals::Agency approvals"
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
            data-list-text="Submit Subsurface Vibration Study Results to CDFW"
          >
            Submit Subsurface Vibration Study Results to CDFW</button
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
            data-list-impl="act_01M2G6Y3RA6HTPQEBMJTM46QTQ|intake-c-north-delta"
            data-status="completed"
            data-evidence="2"
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
              data-list-text="Intake C — North Delta"
            >
              Intake C — North Delta</button
            ><span class="bcn-loc__comments" hidden="">0 comments</span
            ><span class="bcn-loc__evidence" data-list-evidence="">2 evidence</span>
          </li>
          <li
            class="bcn-loc__req bcn-loc__impl"
            data-list-impl="act_01M2G6Y3RA6HTPQEBMJTM46QTQ|bethany-reservoir-aqueduct"
            data-status="completed"
            data-evidence="1"
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
              data-list-text="Bethany Reservoir Aqueduct"
            >
              Bethany Reservoir Aqueduct</button
            ><span class="bcn-loc__comments" hidden="">0 comments</span
            ><span class="bcn-loc__evidence" data-list-evidence="">1 evidence</span>
          </li>
          <li
            class="bcn-loc__req bcn-loc__impl"
            data-list-impl="act_01M2G6Y3RA6HTPQEBMJTM46QTQ|southern-forebay-pumping-plant"
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
              data-list-text="Southern Forebay &amp; Pumping Plant"
            >
              Southern Forebay &amp; Pumping Plant</button
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
      data-member-id="act_01M2G6Y3RA6HTPQEBMJTM46QTW"
      data-id="act_01M2G6Y3RA6HTPQEBMJTM46QTW"
      data-class="action"
      data-codes="COA 7.1"
      data-index="Water operations::Operations coordination and data|Agency reporting and approvals::Agency approvals"
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
            data-list-text="Submit Supplemental Phase 1 Operations Data Before Phase 2"
          >
            Submit Supplemental Phase 1 Operations Data Before Phase 2</button
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
            data-list-impl="act_01M2G6Y3RA6HTPQEBMJTM46QTW|bethany-reservoir-aqueduct"
            data-status="completed"
            data-evidence="2"
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
              data-list-text="Bethany Reservoir Aqueduct"
            >
              Bethany Reservoir Aqueduct</button
            ><span class="bcn-loc__comments" hidden="">0 comments</span
            ><span class="bcn-loc__evidence" data-list-evidence="">2 evidence</span>
          </li>
          <li
            class="bcn-loc__req bcn-loc__impl"
            data-list-impl="act_01M2G6Y3RA6HTPQEBMJTM46QTW|southern-forebay-pumping-plant"
            data-status="in-progress"
            data-evidence="5"
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
              data-list-text="Southern Forebay &amp; Pumping Plant"
            >
              Southern Forebay &amp; Pumping Plant</button
            ><span class="bcn-loc__comments" hidden="">0 comments</span
            ><span class="bcn-loc__evidence" data-list-evidence="">5 evidence</span>
          </li>
        </ul>
      </details>
    </li>
  </ul>
</details>
```

## Styles
```css
.bcn-loc__edited {
  flex-shrink: 0;
  display: inline-flex;
}
.bcn-loc__edited[hidden] {
  display: none;
}
.bcn-loc__dot {
  place-items: center;
  block-size: 1rem;
  inline-size: 1rem;
  display: inline-grid;
}
.bcn-loc__dot:before {
  content: "";
  background: var(--color-content-brand);
  border-radius: 50%;
  block-size: 6px;
  inline-size: 6px;
}
.bcn-lot__cat[data-list-empty],
.bcn-lot__sub[data-list-empty] {
  display: none;
}
.bcn-lot__row:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: -2px;
}
.bcn-loc[data-class="commitment"] .bcn-loc__req .bcn-cbadge {
  display: none;
}
.bcn-lot__row:focus-visible {
  outline: 2px solid var(--color-action);
  outline-offset: -2px;
}
.bcn-lit
  esa-tooltip:has(
    [data-list-remove],
    [data-list-duplicate],
    .bcn-loc__verb[data-list-edit]
  ) {
  display: none;
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
.bcn-ev-targets__listmode .bcn-loc__main {
  cursor: default;
}
.bcn-ev-targets__listmode .bcn-loc__title {
  cursor: inherit;
  text-decoration: none;
}
.bcn-ev-targets__listmode .bcn-loc__main > :last-child {
  margin-left: auto;
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
.bcn-swoc,
.bcn-loc {
  --_req-indent: 22px;
  border: 1px solid var(--color-border-default);
  background: var(--color-background-elevation-raised);
  color: var(--color-content-default);
  border-radius: 6px;
  flex-shrink: 0;
  font-size: 0.8125rem;
  list-style: none;
  transition:
    border-color 0.12s,
    box-shadow 0.12s;
}
.bcn-swoc:hover,
.bcn-loc:hover {
  border-color: var(--color-border-default-strong);
}
.bcn-swoc[hidden],
.bcn-loc[hidden] {
  display: none;
}
.bcn-swoc.is-new,
.bcn-loc.is-new {
  animation: 0.9s ease-out bcn-obl-flash;
}
.bcn-swoc__node,
.bcn-loc__node {
  min-width: 0;
}
.bcn-swoc__main,
.bcn-loc__main {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-150) var(--spacing-300);
  cursor: pointer;
  border-radius: 6px;
  min-width: 0;
  list-style: none;
  transition:
    background-color 0.12s,
    box-shadow 0.12s;
  display: flex;
}
.bcn-swoc__main::-webkit-details-marker,
.bcn-loc__main::-webkit-details-marker {
  display: none;
}
.bcn-swoc__main:hover,
.bcn-loc__main:hover {
  background: var(--color-background-default);
}
.bcn-swoc__main:focus-visible,
.bcn-loc__main:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: -2px;
}
details[open] > .bcn-swoc__main,
details[open] > .bcn-loc__main {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.bcn-swoc__chevron,
.bcn-loc__chevron {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.12s;
  display: inline-flex;
}
details[open] > summary .bcn-swoc__chevron,
details[open] > summary .bcn-loc__chevron {
  transform: rotate(90deg);
}
.bcn-swoc__class,
.bcn-loc__class,
.bcn-lob__class,
.bcn-ci-chip {
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
  background: color-mix(in srgb, var(--_hue) 14%, white);
  color: color-mix(in srgb, var(--_hue) 78%, black);
  flex-shrink: 0;
  align-items: center;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1.5;
  display: inline-flex;
}
.bcn-swoc[data-class="adhere"],
.bcn-loc[data-class="adhere"],
.bcn-lob[data-class="adhere"],
.bcn-ci-chip[data-class="adhere"] {
  --_hue: var(--color-obligation);
}
.bcn-swoc[data-class="monitor"],
.bcn-loc[data-class="monitor"],
.bcn-lob[data-class="monitor"],
.bcn-ci-chip[data-class="monitor"] {
  --_hue: #ff7c43;
}
.bcn-swoc[data-class="notify"],
.bcn-loc[data-class="notify"],
.bcn-lob[data-class="notify"],
.bcn-ci-chip[data-class="notify"] {
  --_hue: #ffa600;
}
.bcn-swoc[data-class="roster"],
.bcn-loc[data-class="roster"],
.bcn-lob[data-class="roster"],
.bcn-ci-chip[data-class="roster"],
.bcn-loc[data-class="action"],
.bcn-lac[data-class="action"],
.bcn-ci-chip[data-class="action"] {
  --_hue: var(--color-action);
}
.bcn-swoc__title,
.bcn-loc__title {
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  min-width: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  background: 0 0;
  border: none;
  flex: 1;
  padding: 0;
  font-weight: 500;
  overflow: hidden;
}
.bcn-swoc__title:hover,
.bcn-loc__title:hover {
  text-underline-offset: 2px;
  text-decoration: underline;
}
.bcn-swoc__title:focus-visible,
.bcn-loc__title:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: 2px;
  border-radius: 2px;
}
.bcn-swoc esa-tooltip,
.bcn-loc esa-tooltip {
  display: inline-flex;
}
.bcn-swoc__verb,
.bcn-loc__verb {
  border-radius: var(--radius-100);
  width: 22px;
  height: 22px;
  color: var(--color-content-default-tertiary);
  cursor: pointer;
  opacity: 0;
  background: 0 0;
  border: none;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  transition:
    opacity 0.12s,
    color 0.12s,
    background-color 0.12s;
  display: inline-flex;
}
.bcn-swoc__main:hover .bcn-swoc__verb,
.bcn-swoc__req:hover .bcn-swoc__verb,
.bcn-swoc__verb:focus-visible,
.bcn-loc__main:hover .bcn-loc__verb,
.bcn-loc__verb:focus-visible {
  opacity: 1;
}
.bcn-swoc__verb:hover,
.bcn-loc__verb:hover {
  background: var(--bcn-gray-100);
  color: var(--color-content-default);
}
.bcn-swoc__verb:focus-visible,
.bcn-loc__verb:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: 1px;
}
.bcn-swoc__verb--danger:hover,
.bcn-loc__verb--danger:hover {
  color: var(--color-background-utility-danger);
}
.bcn-swoc__reqs,
.bcn-loc__reqs,
.bcn-ciitem__reqs {
  padding: 0 var(--spacing-300) var(--spacing-150)
    calc(var(--spacing-300) + var(--_req-indent));
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-swoc__req,
.bcn-loc__req,
.bcn-ciitem__req {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 28px;
  padding: var(--spacing-050) var(--spacing-200);
  border-top: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-100);
  display: flex;
}
.bcn-swoc__req:hover,
.bcn-loc__req:hover {
  background: var(--color-background-default);
}
.bcn-swoc__req-name,
.bcn-loc__req-name,
.bcn-ciitem__req-name {
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.bcn-swoc__also,
.bcn-loc__also {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  flex-shrink: 0;
  font-size: 0.6875rem;
}
.bcn-loc__title {
  flex: 0 auto;
}
.bcn-loc [data-list-count] {
  margin-inline-start: auto;
}
.bcn-loc__req {
  color: var(--color-content-default-secondary);
  cursor: pointer;
}
.bcn-loc__req-name {
  font: inherit;
  color: inherit;
  text-align: start;
  cursor: pointer;
  background: 0 0;
  border: 0;
  padding: 0;
}
.bcn-loc__req:hover .bcn-loc__req-name {
  color: var(--color-content-default);
}
.bcn-loc__req-name:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: 1px;
  border-radius: 2px;
}
.bcn-loc__impl[hidden] {
  display: none;
}
.bcn-loc__impl .bcn-status-chip {
  flex-shrink: 0;
}
.bcn-loc__comments {
  font-size: var(--font-size-100);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  flex-shrink: 0;
}
.bcn-loc__evidence {
  text-align: end;
  min-width: 5.5rem;
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  flex-shrink: 0;
}
.bcn-loc__evidence[data-none] {
  color: var(--color-content-default-tertiary);
  font-weight: 400;
}
.bcn-swot__cat:nth-of-type(2n) .bcn-swot__row:hover,
.bcn-lot__cat:nth-of-type(2n) .bcn-lot__row:hover,
.bcn-ciidx__cat:nth-of-type(2n) .bcn-ciidx__row:hover {
  background: var(--bcn-gray-100);
}
.bcn-swot__sub + .bcn-swot__sub,
.bcn-lot__sub + .bcn-lot__sub {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-swot__cat[hidden],
.bcn-swot__sub[hidden],
.bcn-lot__cat[hidden],
.bcn-lot__sub[hidden] {
  display: none;
}
.bcn-swot__row,
.bcn-lot__row {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 34px;
  padding: var(--spacing-100) var(--spacing-400);
  cursor: pointer;
  user-select: none;
  list-style: none;
  transition:
    background-color 0.12s,
    box-shadow 0.12s;
  display: flex;
}
.bcn-swot__row::-webkit-details-marker,
.bcn-lot__row::-webkit-details-marker {
  display: none;
}
.bcn-swot__row:hover,
.bcn-lot__row:hover {
  background: var(--color-background-default);
}
.bcn-swot__row--cat,
.bcn-lot__row--cat {
  font-weight: 600;
}
.bcn-swot__row--sub,
.bcn-lot__row--sub {
  padding-left: calc(var(--spacing-400) + 22px);
}
.bcn-swot__chevron,
.bcn-lot__chevron {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.12s;
  display: inline-flex;
}
details[open] > .bcn-swot__row .bcn-swot__chevron,
details[open] > .bcn-lot__row .bcn-lot__chevron {
  transform: rotate(90deg);
}
.bcn-swot__name,
.bcn-lot__name {
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  min-width: 0;
  padding: 0 2px;
  overflow: hidden;
}
.bcn-swot__name.is-editing,
.bcn-lot__name.is-editing {
  outline: 2px solid var(--color-obligation);
  outline-offset: 0;
  background: var(--color-background-elevation-raised);
  cursor: text;
  user-select: text;
  font-weight: 500;
}
.bcn-swot__row:hover .bcn-swot__verb--quiet,
.bcn-swot__row:focus-within .bcn-swot__verb--quiet,
.bcn-lot__row:hover .bcn-lot__verb--quiet,
.bcn-lot__row:focus-within .bcn-lot__verb--quiet {
  opacity: 1;
}
.bcn-swot__subs,
.bcn-lot__subs {
  flex-direction: column;
  display: flex;
}
.bcn-swot__cards,
.bcn-lot__cards {
  padding: var(--spacing-200) var(--spacing-400) var(--spacing-300)
    calc(var(--spacing-400) + 44px);
  gap: var(--spacing-150);
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-lot [data-list-flat] > .bcn-lot__cards {
  padding: var(--spacing-300) var(--spacing-400);
}
.bcn-lot__row .bcn-lot__name[hidden] {
  display: none;
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
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
.bcn-swcb {
  min-width: 22px;
  padding: 2px var(--spacing-150);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default-subtle);
  color: var(--color-content-default-tertiary);
  font-family: var(--typography-font-family-sans);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1;
  display: inline-flex;
}
.bcn-swcb--sm {
  min-width: 18px;
  padding: 2px var(--spacing-100);
  font-size: var(--font-size-050);
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
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```

## Tokens
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--color-action`: #d45087 _(component)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-obligation`: #f95d6a _(component)_
- `--font-size-050`: clamp(.5rem, .44rem + .3vw, .625rem) _(primitive)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
