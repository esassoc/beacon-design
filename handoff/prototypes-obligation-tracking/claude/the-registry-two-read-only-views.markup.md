# The registry — two read-only views: markup

```html
<section class="bcn-treg stack" data-gap="md">
  <header class="bcn-treg__bar">
    <esa-button-toggle
      class="bcn-treg__switch"
      size="sm"
      value="category"
      aria-label="Registry view"
      data-treg-switch="true"
      data-options='[{"label":"By category","value":"category"},{"label":"By commitment","value":"commitment"}]'
    ></esa-button-toggle>
  </header>
  <div class="esa-card esa-card--outlined esa-card--padding-none">
    <div class="esa-card__body typography-body-md">
      <div class="bcn-treg__filters" data-treg-view="category">
        <div class="bcn-swfr bcn-swfr--inset">
          <esa-text-field
            class="bcn-swfr__search"
            size="sm"
            name="swo-search"
            placeholder="Search obligations"
            aria-label="Search obligations"
          ></esa-text-field
          ><esa-select
            class="bcn-swfr__picker"
            size="sm"
            name="swo-search-class"
            options='[{"label":"All classes","value":""},{"label":"Adhere","value":"adhere"},{"label":"Monitor","value":"monitor"},{"label":"Notify","value":"notify"},{"label":"Roster","value":"roster"}]'
            value=""
            placeholder="All classes"
            cue="Filter by class."
          ></esa-select
          ><esa-dropdown-menu
            class="bcn-swsc__menu"
            position="below-start"
            data-sw-chip="category"
            data-items='[{"label":"All categories","value":""},{"label":"Agency reporting and approvals","value":"agency"},{"label":"Air quality… [731 characters]'
            data-value=""
            width="auto"
            ><button
              type="button"
              class="bcn-swsc"
              aria-label="Category: All categories"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-controls="menu"
              style="
                font-family: &quot;Times New Roman&quot;;
                font-size: 13px;
                font-weight: 400;
                line-height: normal;
              "
            >
              <span class="bcn-swsc__label" data-sw-chip-label="">All categories</span
              ><span class="bcn-swsc__chevron" aria-hidden="true"
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
                    <path d="m6 9 6 6 6-6"></path></svg></span
              ></span></button
          ></esa-dropdown-menu>
          <div class="bcn-swfr__verbs">
            <span
              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                data-swo-expand="true"
                title="Open every category"
              >
                <span class="esa-button__label"
                  ><span class="bcn-treg__verb"
                    ><span class="esa-icon esa-icon--xs" aria-hidden="true"
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
                        <path d="m7 15 5 5 5-5"></path>
                        <path d="m7 9 5-5 5 5"></path></svg></span
                    >Expand all</span
                  ></span
                >
              </button></span
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                data-swo-collapse="true"
                title="Close every category"
              >
                <span class="esa-button__label"
                  ><span class="bcn-treg__verb"
                    ><span class="esa-icon esa-icon--xs" aria-hidden="true"
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
                        <path d="m7 20 5-5 5 5"></path>
                        <path d="m7 4 5 5 5-5"></path></svg></span
                    >Collapse all</span
                  ></span
                >
              </button></span
            >
          </div>
        </div>
      </div>
      <div class="bcn-treg__filters" data-treg-view="commitment" hidden="">
        <div class="bcn-swfr bcn-swfr--inset">
          <esa-text-field
            class="bcn-swfr__search"
            size="sm"
            name="swc-search"
            placeholder="Search requirements"
            aria-label="Search requirements"
          ></esa-text-field
          ><esa-dropdown-menu
            class="bcn-swsc__menu"
            position="below-start"
            data-sw-chip="coverage"
            data-items='[{"label":"All requirements","value":""},{"label":"Orphaned requirements","value":"unrouted"},{"label":"In several obligations","value":"several"}]'
            data-value=""
            width="auto"
            ><button
              type="button"
              class="bcn-swsc"
              aria-label="Coverage: All requirements"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-controls="menu"
              style="
                font-family: &quot;Times New Roman&quot;;
                font-size: 13px;
                font-weight: 400;
                line-height: normal;
              "
            >
              <span class="bcn-swsc__label" data-sw-chip-label="">All requirements</span
              ><span class="bcn-swsc__chevron" aria-hidden="true"
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
                    <path d="m6 9 6 6 6-6"></path></svg></span
              ></span></button
          ></esa-dropdown-menu>
          <div class="bcn-swfr__verbs">
            <span
              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                data-swc-expand="true"
                title="Open every commitment"
              >
                <span class="esa-button__label"
                  ><span class="bcn-treg__verb"
                    ><span class="esa-icon esa-icon--xs" aria-hidden="true"
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
                        <path d="m7 15 5 5 5-5"></path>
                        <path d="m7 9 5-5 5 5"></path></svg></span
                    >Expand all</span
                  ></span
                >
              </button></span
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                data-swc-collapse="true"
                title="Close every commitment"
              >
                <span class="esa-button__label"
                  ><span class="bcn-treg__verb"
                    ><span class="esa-icon esa-icon--xs" aria-hidden="true"
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
                        <path d="m7 20 5-5 5 5"></path>
                        <path d="m7 4 5 5 5-5"></path></svg></span
                    >Collapse all</span
                  ></span
                >
              </button></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bcn-treg__view" data-treg-view="category">
    <section class="bcn-swot" aria-label="Obligation registry" data-swo-mode="browse">
      <p class="bcn-swot__nomatch" data-swo-nomatch="" hidden="">No obligations match.</p>
      <div class="bcn-swot__body" data-swo-cats="">
        <details class="bcn-swot__cat" data-swo-branch="" data-swo-cat="agency" open="">
          <summary class="bcn-swot__row bcn-swot__row--cat">
            <span class="bcn-swot__chevron" aria-hidden="true"
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
            ><span class="bcn-swot__name" data-swo-name="">Agency reporting and approvals</span
            ><span data-swo-count="cat"
              ><span class="bcn-swcb" aria-label="2 obligations">2</span></span
            >
          </summary>
          <div class="bcn-swot__subs" data-swo-subs="">
            <details class="bcn-swot__sub" data-swo-branch="" data-swo-sub="sightings-reporting">
              <summary class="bcn-swot__row bcn-swot__row--sub" data-swo-drop="subcategory">
                <span class="bcn-swot__chevron" aria-hidden="true"
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
                ><span class="bcn-swot__name" data-swo-name=""
                  >Species sightings and CNDDB reporting</span
                ><span data-swo-count="sub"
                  ><span class="bcn-swcb" aria-label="1 obligations">1</span></span
                ><span class="bcn-swot__verbs"
                  ><esa-tooltip text="Expand to requirements" position="above" align="center"
                    ><button
                      type="button"
                      class="bcn-swot__verb"
                      aria-label="Expand to requirements"
                      data-swo-sub-expand=""
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
                          <path d="m7 15 5 5 5-5"></path>
                          <path d="m7 9 5-5 5 5"></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Collapse" position="above" align="center"
                    ><button
                      type="button"
                      class="bcn-swot__verb"
                      aria-label="Collapse"
                      data-swo-sub-collapse=""
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
                          <path d="m7 20 5-5 5 5"></path>
                          <path d="m7 4 5 5 5-5"></path></svg
                      ></span></button></esa-tooltip
                ></span>
              </summary>
              <ul class="bcn-swot__cards" data-swo-cards="">
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Biological Monitor daily communication and immediate reports to the Designated Biologist"
                        >Biological Monitor daily communication and immediate reports to the
                        Designated Biologist</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMDCKEBRF744X854M9ESF"
                        data-code="COA 9.2.2"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 9.2.2</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Daily to Designated Biologist and Flag Non-Compliance"
                          >Report Daily to Designated Biologist and Flag Non-Compliance</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
            <details class="bcn-swot__sub" data-swo-branch="" data-swo-sub="take-reporting">
              <summary class="bcn-swot__row bcn-swot__row--sub" data-swo-drop="subcategory">
                <span class="bcn-swot__chevron" aria-hidden="true"
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
                ><span class="bcn-swot__name" data-swo-name="">Take and injury reporting</span
                ><span data-swo-count="sub"
                  ><span class="bcn-swcb" aria-label="1 obligations">1</span></span
                ><span class="bcn-swot__verbs"
                  ><esa-tooltip text="Expand to requirements" position="above" align="center"
                    ><button
                      type="button"
                      class="bcn-swot__verb"
                      aria-label="Expand to requirements"
                      data-swo-sub-expand=""
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
                          <path d="m7 15 5 5 5-5"></path>
                          <path d="m7 9 5-5 5 5"></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Collapse" position="above" align="center"
                    ><button
                      type="button"
                      class="bcn-swot__verb"
                      aria-label="Collapse"
                      data-swo-sub-collapse=""
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
                          <path d="m7 20 5-5 5 5"></path>
                          <path d="m7 4 5 5 5-5"></path></svg
                      ></span></button></esa-tooltip
                ></span>
              </summary>
              <ul class="bcn-swot__cards" data-swo-cards="">
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFQ"
                  data-class="adhere"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Carcass salvage, labeling and storage for the wildlife health lab"
                        >Carcass salvage, labeling and storage for the wildlife health lab</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMS0VRXQZQ44TNN5TJ4N1"
                        data-code="COA 11.103"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.103</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Salvage and Label CBB Carcass for CDFW Lab"
                          >Salvage and Label CBB Carcass for CDFW Lab</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </div>
        </details>
        <details class="bcn-swot__cat" data-swo-branch="" data-swo-cat="air" open="">
          <summary class="bcn-swot__row bcn-swot__row--cat">
            <span class="bcn-swot__chevron" aria-hidden="true"
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
            ><span class="bcn-swot__name" data-swo-name="">Air quality</span
            ><span data-swo-count="cat"
              ><span class="bcn-swcb" aria-label="12 obligations">12</span></span
            >
          </summary>
          <div class="bcn-swot__subs" data-swo-subs="">
            <details class="bcn-swot__sub" data-swo-branch="" data-swo-sub="fugitive-dust">
              <summary class="bcn-swot__row bcn-swot__row--sub" data-swo-drop="subcategory">
                <span class="bcn-swot__chevron" aria-hidden="true"
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
                ><span class="bcn-swot__name" data-swo-name="">Fugitive dust</span
                ><span data-swo-count="sub"
                  ><span class="bcn-swcb" aria-label="12 obligations">12</span></span
                ><span class="bcn-swot__verbs"
                  ><esa-tooltip text="Expand to requirements" position="above" align="center"
                    ><button
                      type="button"
                      class="bcn-swot__verb"
                      aria-label="Expand to requirements"
                      data-swo-sub-expand=""
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
                          <path d="m7 15 5 5 5-5"></path>
                          <path d="m7 9 5-5 5 5"></path></svg
                      ></span></button></esa-tooltip
                  ><esa-tooltip text="Collapse" position="above" align="center"
                    ><button
                      type="button"
                      class="bcn-swot__verb"
                      aria-label="Collapse"
                      data-swo-sub-collapse=""
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
                          <path d="m7 20 5-5 5 5"></path>
                          <path d="m7 4 5 5 5-5"></path></svg
                      ></span></button></esa-tooltip
                ></span>
              </summary>
              <ul class="bcn-swot__cards" data-swo-cards="">
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXC"
                  data-class="adhere"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Access Route Surface Stabilization"
                        >Access Route Surface Stabilization</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMKGJBCK65KGGWNK6WZX8"
                        data-code="COA 11.29"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.29</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Implement Construction-Area Fugitive Dust BMPs"
                          >Implement Construction-Area Fugitive Dust BMPs</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXB"
                  data-class="adhere"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Dryer and Conveyor Enclosure"
                        >Dryer and Conveyor Enclosure</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMKGJBCK65KGGWNK6WZX8"
                        data-code="COA 11.29"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.29</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Implement Construction-Area Fugitive Dust BMPs"
                          >Implement Construction-Area Fugitive Dust BMPs</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <!-- …and 10 more like this (<li class="bcn-swoc">) -->
              </ul>
            </details>
          </div>
        </details>
        <!-- …and 13 more like this (<details class="bcn-swot__cat">) -->
      </div>
      <footer class="bcn-swot__foot"><div class="bcn-swot__foot-end"></div></footer>
    </section>
  </div>
  <div class="bcn-treg__view" data-treg-view="commitment" hidden="">
    <section class="bcn-swc" data-swc-tree="" data-swc-mode="browse">
      <p class="bcn-swc__nomatch" data-swc-nomatch="" hidden="">No requirements match.</p>
      <div class="bcn-swc__body">
        <details class="bcn-swc__cmt" data-swc-cmt="" data-code="COA 4">
          <summary class="bcn-swc__row bcn-swc__row--cmt">
            <span class="bcn-swc__chevron" aria-hidden="true"
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
            ><span class="bcn-cbadge bcn-cbadge--sm">COA 4</span
            ><span class="bcn-swc__name" data-swc-text="ESA Consultation and ITP Precedence"
              >ESA Consultation and ITP Precedence</span
            ><span class="bcn-swcb" aria-label="1 requirements">1</span
            ><span class="bcn-swc__gap" data-swc-gap="" hidden="">0 orphaned</span
            ><span class="bcn-swc__verbs"
              ><esa-tooltip text="Expand to obligations" position="above" align="center"
                ><button
                  type="button"
                  class="bcn-swc__verb"
                  aria-label="Expand to obligations"
                  data-swc-cmt-expand=""
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
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path></svg
                  ></span></button></esa-tooltip
              ><esa-tooltip text="Collapse" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-swc__verb"
                  aria-label="Collapse"
                  data-swc-cmt-collapse=""
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
                      <path d="m7 20 5-5 5 5"></path>
                      <path d="m7 4 5 5 5-5"></path></svg
                  ></span></button></esa-tooltip
            ></span>
          </summary>
          <div class="bcn-swc__reqs">
            <details
              data-swc-req="req_01M2ESMC0B9X341GWB1FC7JSGT"
              data-code="COA 4"
              data-actions="1"
              class="bcn-swc__req is-leaf"
            >
              <summary class="bcn-swc__row bcn-swc__row--req">
                <span class="bcn-swc__chevron" aria-hidden="true"
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
                  class="bcn-swc__title bcn-swc__title--static"
                  data-swc-text="Consult with CDFW on Federal Biological Opinion Terms"
                  >Consult with CDFW on Federal Biological Opinion Terms</span
                ><span class="bcn-swc__route bcn-swc__route--action" data-swc-route=""
                  >action only</span
                >
              </summary>
              <ul class="bcn-swc__obls" data-swc-obls=""></ul>
            </details>
          </div>
        </details>
        <details class="bcn-swc__cmt" data-swc-cmt="" data-code="COA 6">
          <summary class="bcn-swc__row bcn-swc__row--cmt">
            <span class="bcn-swc__chevron" aria-hidden="true"
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
            ><span class="bcn-cbadge bcn-cbadge--sm">COA 6</span
            ><span
              class="bcn-swc__name"
              data-swc-text="Construction Phase Authorization Required Before Construction"
              >Construction Phase Authorization Required Before Construction</span
            ><span class="bcn-swcb" aria-label="1 requirements">1</span
            ><span class="bcn-swc__gap" data-swc-gap="" hidden="">0 orphaned</span
            ><span class="bcn-swc__verbs"
              ><esa-tooltip text="Expand to obligations" position="above" align="center"
                ><button
                  type="button"
                  class="bcn-swc__verb"
                  aria-label="Expand to obligations"
                  data-swc-cmt-expand=""
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
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path></svg
                  ></span></button></esa-tooltip
              ><esa-tooltip text="Collapse" align="end" position="above"
                ><button
                  type="button"
                  class="bcn-swc__verb"
                  aria-label="Collapse"
                  data-swc-cmt-collapse=""
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
                      <path d="m7 20 5-5 5 5"></path>
                      <path d="m7 4 5 5 5-5"></path></svg
                  ></span></button></esa-tooltip
            ></span>
          </summary>
          <div class="bcn-swc__reqs">
            <details
              data-swc-req="req_01M2ESMC3SG5TTMS74P5R5PTEA"
              data-code="COA 6"
              data-actions="1"
              class="bcn-swc__req is-leaf"
            >
              <summary class="bcn-swc__row bcn-swc__row--req">
                <span class="bcn-swc__chevron" aria-hidden="true"
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
                  class="bcn-swc__title bcn-swc__title--static"
                  data-swc-text="Obtain Construction Phase Authorization Before Each Phase"
                  >Obtain Construction Phase Authorization Before Each Phase</span
                ><span class="bcn-swc__route bcn-swc__route--action" data-swc-route=""
                  >action only</span
                >
              </summary>
              <ul class="bcn-swc__obls" data-swc-obls=""></ul>
            </details>
          </div>
        </details>
        <!-- …and 292 more like this (<details class="bcn-swc__cmt">) -->
      </div>
      <footer class="bcn-swc__foot">
        <div class="bcn-swc__legend">
          <span class="bcn-swc__stat"
            ><span class="bcn-swc__dot bcn-swc__dot--obligation"></span
            ><span data-swc-legend="obligation">422</span> in an obligation</span
          ><span class="bcn-swc__sep">·</span
          ><span class="bcn-swc__stat"
            ><span class="bcn-swc__dot bcn-swc__dot--action"></span
            ><span data-swc-legend="action">428</span> action only</span
          ><span class="bcn-swc__sep">·</span
          ><span class="bcn-swc__stat"
            ><span class="bcn-swc__dot bcn-swc__dot--unrouted"></span
            ><span data-swc-legend="unrouted">4</span> orphaned</span
          >
        </div>
        <div class="bcn-swc__foot-end"></div>
      </footer>
      <!-- The stamp for an obligation leaf: bcn-sw-chain-panels clones this whenever a
       requirement's links change, so new rows carry this file's scope. --><template
        data-swc-tpl="obl"
        ><li class="bcn-swc__obl" data-swc-obl="" data-class="" data-astro-cid-zwb5b7zi="">
          <span class="bcn-swc__class" data-swc-class="" data-astro-cid-zwb5b7zi=""></span
          ><button
            type="button"
            class="bcn-swc__obl-title"
            data-swc-edit=""
            data-swc-text=""
            data-astro-cid-zwb5b7zi=""
          ></button
          ><span class="bcn-swc__filing" data-swc-filing="" data-astro-cid-zwb5b7zi=""></span
          ><span class="bcn-swc__verbs" data-astro-cid-zwb5b7zi=""
            ><esa-tooltip text="Edit" data-astro-cid-zwb5b7zi="true"
              ><button
                type="button"
                class="bcn-swc__verb"
                aria-label="Edit obligation"
                data-swc-edit=""
                data-astro-cid-zwb5b7zi=""
              >
                <span class="esa-icon esa-icon--xs" aria-hidden="true" data-astro-cid-wcwfib5m=""
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
                    data-astro-cid-wcwfib5m=""
                  >
                    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path
                      d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                    ></path></svg
                ></span></button></esa-tooltip
            ><esa-tooltip text="Unlink" align="end" data-astro-cid-zwb5b7zi="true"
              ><button
                type="button"
                class="bcn-swc__verb bcn-swc__verb--danger"
                aria-label="Unlink from this obligation"
                data-swc-unlink=""
                data-astro-cid-zwb5b7zi=""
              >
                <span class="esa-icon esa-icon--xs" aria-hidden="true" data-astro-cid-wcwfib5m=""
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
                    data-astro-cid-wcwfib5m=""
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg
                ></span></button></esa-tooltip
          ></span></li
      ></template>
    </section>
  </div>
</section>
```
