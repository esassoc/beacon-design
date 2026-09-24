# View tabs

Four cuts of one record set as icon tabs: All (inbox), Important (star: records touching the reader's saved categories), To-do (checklist: records that owe a notice), Pinned (pin: records touching a pinned obligation). The view rides ?view=.

## Key decisions
- Kim's outer Feed / Registry segmented row is gone: this page is the feed alone.
- Icons ride esa-tab-layout's own tab.icon (a full inline SVG string), so the tabs need no custom CSS.
- Every view reads by record. Kim's By record / By obligation pivot on Important and Pinned was cut (Andy, 2026-09-23).

## Done when
- Each tab shows its own rail and pane; reloading with ?view=pinned opens Pinned.

## Markup
```html
<esa-tab-layout
  class="bcn-feed"
  tabs='[{"label":"All","icon":"&lt;svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"&gt;&lt;polyline points=\"22 12 16 12 14 15 10 15 8 12 2 12\"/&gt;&lt;path d=\"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"/&gt;&lt;/svg&gt;"},{"label":"Important","icon":"&lt;svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"&gt;&lt;path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\"/&gt;&lt;/svg&gt;"},{"label":"To-do","icon":"&lt;svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"&gt;&lt;rect x=\"3\" y=\"5\" width=\"6\" height=\"6\" rx=\"1\"/&gt;&lt;path d=\"m3 17 2 2 4-4\"/&gt;&lt;path d=\"M13 6h8\"/&gt;&lt;path d=\"M13 12h8\"/&gt;&lt;path d=\"M13 18h8\"/&gt;&lt;/svg&gt;"},{"label":"Pinned","icon":"&lt;svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"&gt;&lt;path d=\"M12 17v5\"/&gt;&lt;path d=\"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z\"/&gt;&lt;/svg&gt;"}]'
  appearance="underline"
  size="sm"
  active-index="0"
  data-feed-views='["all","important","todo","pinned"]'
  variant="underline"
  ><div slot="panel-0">
    <div
      class="bcn-fw stack"
      data-gap="md"
      data-fw-view="all"
      data-fw-search="feed-all"
      data-fw-records='{"obs-ggs":{"source":"biological-resources","age":0,"text":"giant garter snake seen in an irrigation canal at the work edge reach 3 — canal crossing a. mendes biological resource observation"},"obs-hawk":{"source":"compliance-concerns","age":0,"text":"injured swainson&apos;s hawk recovered near a haul road north haul road r. osei compliance concern"},"dmr-daily":{"source":"daily-monitoring-reports","age":0,"text":"daily monitoring report — in-water work at the intake reach 2 d. vance daily monitoring report"},"obs-trbl":{"source":"nesting-birds","age":0,"text":"active tricolored blackbird colony found in the staging buffer staging area 2 j. whitfield nesting bird observation"},"sr-turbid":{"source":"site-reports","age":0,"text":"turbidity above the approved threshold downstream of dewatering compliance point 3 water quality team site report"},"dmr-0914":{"source":"daily-monitoring-reports","age":1,"text":"daily monitoring report — intake b cofferdam reach 2 d. vance daily monitoring report"},"obs-cts":{"source":"compliance-concerns","age":2,"text":"california tiger salamander found inside exclusion fencing reach 1 — upland margin wildlife capture crew compliance concern"},"svy-0913":{"source":"surveys","age":2,"text":"pre-activity presence survey — reach 1 upland reach 1 a. mendes survey"},"ev-fence-0911":{"source":"evidence","age":4,"text":"exclusion fencing inspection — reach 1 photo set reach 1 k. ito uploaded evidence"},"weap-0908":{"source":"weap","age":7,"text":"weap session — 14 new crew members bouldin island trailer r. osei weap training"},"sr-0903":{"source":"site-reports","age":12,"text":"dewatering pump intake screen inspected compliance point 3 m. okafor site report"},"nb-0902":{"source":"nesting-birds","age":14,"text":"active swainson&apos;s hawk nest confirmed near the intake c haul road intake c haul road j. whitfield nesting bird observation"},"cc-0828":{"source":"compliance-concerns","age":18,"text":"no spill kit at the byron tract staging area staging area 4 r. osei compliance concern"},"ev-dust-0822":{"source":"evidence","age":24,"text":"dust suppression log — week of august 17 southern forebay haul roads l. park uploaded evidence"},"svy-0815":{"source":"surveys","age":32,"text":"nesting bird sweep — byron tract byron tract j. whitfield survey"},"dmr-0806":{"source":"daily-monitoring-reports","age":40,"text":"daily monitoring report — bethany aqueduct tie-in bethany tie-in d. vance daily monitoring report"},"ev-erosion-0725":{"source":"evidence","age":52,"text":"post-storm erosion control inspection bethany slopes l. park uploaded evidence"},"br-0712":{"source":"biological-resources","age":65,"text":"western pond turtle basking at the forebay edge byron tract forebay a. mendes biological resource observation"},"weap-0701":{"source":"weap","age":76,"text":"weap session — intake b mobilization intake b field office r. osei weap training"},"cc-0605":{"source":"compliance-concerns","age":102,"text":"night lighting spilling into habitat at the pumping plant pumping plant east pad k. ito compliance concern"},"ev-quals-0520":{"source":"evidence","age":118,"text":"designated biologist approval letter from cdfw project-wide m. okafor uploaded evidence"}}'
    >
      <div class="bcn-swfr bcn-swfr--panel">
        <esa-text-field
          class="bcn-swfr__search"
          size="sm"
          name="feed-all"
          placeholder="Search records"
          aria-label="Search records"
        ></esa-text-field
        ><esa-select
          class="bcn-swfr__picker"
          size="sm"
          name="feed-all-source"
          options='[{"label":"All sources","value":""},{"label":"Nesting bird observation","value":"nesting-birds"},{"label":"Compliance concern","value":"compliance-concerns"},{"label":"Biological resource observation","value":"biological-resources"},{"label":"Daily monitoring report","value":"daily-monitoring-reports"},{"label":"Site report","value":"site-reports"},{"label":"Survey","value":"surveys"},{"label":"WEAP training","value":"weap"},{"label":"Uploaded evidence","value":"evidence"}]'
          value=""
          placeholder="All sources"
          cue="Filter by source."
        ></esa-select
        ><esa-button-toggle
          slot="filters"
          size="sm"
          aria-label="How far back"
          data-fw-scope="true"
          data-value="30"
          data-options='[{"label":"30 days","value":"30"},{"label":"90 days","value":"90"},{"label":"All","value":"all"}]'
        ></esa-button-toggle>
        <div class="bcn-swfr__verbs"></div>
      </div>
      <div class="bcn-fw__side" data-fw-side="">
        <div
          class="sidebar"
          data-gap="lg"
          style="--sidebar-width: 21rem; --sidebar-content-min: 55%"
        >
          <aside class="bcn-fw__rail" aria-label="Records">
            <div class="bcn-fw__scroll" role="listbox" aria-label="Records">
              <div class="bcn-fw__group" role="group" aria-label="Today" data-fw-group="">
                <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">
                  Today
                </p>
                <ul class="bcn-fw__list stack" data-gap="xs" role="none">
                  <li class="bcn-frc" data-frc="" data-fw-record="obs-ggs">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="true"
                      data-of-pick="obs-ggs"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source"
                          >Biological resource observation</span
                        ><span class="bcn-frc__when">8:35 AM</span></span
                      ><span class="bcn-frc__label"
                        >Giant garter snake seen in an irrigation canal at the work
                        edge</span
                      >
                    </button>
                  </li>
                  <li class="bcn-frc" data-frc="" data-fw-record="obs-hawk">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="obs-hawk"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Compliance concern</span
                        ><span class="bcn-frc__when">7:10 AM</span></span
                      ><span class="bcn-frc__label"
                        >Injured Swainson's hawk recovered near a haul road</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
              <div
                class="bcn-fw__group"
                role="group"
                aria-label="Yesterday"
                data-fw-group=""
              >
                <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">
                  Yesterday
                </p>
                <ul class="bcn-fw__list stack" data-gap="xs" role="none">
                  <li class="bcn-frc" data-frc="" data-fw-record="dmr-daily">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="dmr-daily"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Daily monitoring report</span
                        ><span class="bcn-frc__when">5:05 PM</span></span
                      ><span class="bcn-frc__label"
                        >Daily monitoring report — in-water work at the intake</span
                      >
                    </button>
                  </li>
                  <li class="bcn-frc" data-frc="" data-fw-record="obs-trbl">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="obs-trbl"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Nesting bird observation</span
                        ><span class="bcn-frc__when">3:40 PM</span></span
                      ><span class="bcn-frc__label"
                        >Active tricolored blackbird colony found in the staging
                        buffer</span
                      >
                    </button>
                  </li>
                  <li class="bcn-frc" data-frc="" data-fw-record="sr-turbid">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="sr-turbid"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Site report</span
                        ><span class="bcn-frc__when">11:25 AM</span></span
                      ><span class="bcn-frc__label"
                        >Turbidity above the approved threshold downstream of
                        dewatering</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
              <div
                class="bcn-fw__group"
                role="group"
                aria-label="This week"
                data-fw-group=""
              >
                <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">
                  This week
                </p>
                <ul class="bcn-fw__list stack" data-gap="xs" role="none">
                  <li class="bcn-frc" data-frc="" data-fw-record="dmr-0914">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="dmr-0914"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Daily monitoring report</span
                        ><span class="bcn-frc__when">Mon 5:30 PM</span></span
                      ><span class="bcn-frc__label"
                        >Daily monitoring report — Intake B cofferdam</span
                      >
                    </button>
                  </li>
                  <li class="bcn-frc" data-frc="" data-fw-record="obs-cts">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="obs-cts"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Compliance concern</span
                        ><span class="bcn-frc__when">Mon 9:05 AM</span></span
                      ><span class="bcn-frc__label"
                        >California tiger salamander found inside exclusion fencing</span
                      >
                    </button>
                  </li>
                  <li class="bcn-frc" data-frc="" data-fw-record="svy-0913">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="svy-0913"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Survey</span
                        ><span class="bcn-frc__when">Sun 2:00 PM</span></span
                      ><span class="bcn-frc__label"
                        >Pre-activity presence survey — Reach 1 upland</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
              <div
                class="bcn-fw__group"
                role="group"
                aria-label="This month"
                data-fw-group=""
              >
                <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">
                  This month
                </p>
                <ul class="bcn-fw__list stack" data-gap="xs" role="none">
                  <li class="bcn-frc" data-frc="" data-fw-record="ev-fence-0911">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="ev-fence-0911"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Uploaded evidence</span
                        ><span class="bcn-frc__when">Sep 11</span></span
                      ><span class="bcn-frc__label"
                        >Exclusion fencing inspection — Reach 1 photo set</span
                      >
                    </button>
                  </li>
                  <li class="bcn-frc" data-frc="" data-fw-record="weap-0908">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="weap-0908"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">WEAP training</span
                        ><span class="bcn-frc__when">Sep 8</span></span
                      ><span class="bcn-frc__label"
                        >WEAP session — 14 new crew members</span
                      >
                    </button>
                  </li>
                  <li class="bcn-frc" data-frc="" data-fw-record="sr-0903">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="sr-0903"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Site report</span
                        ><span class="bcn-frc__when">Sep 3</span></span
                      ><span class="bcn-frc__label"
                        >Dewatering pump intake screen inspected</span
                      >
                    </button>
                  </li>
                  <li class="bcn-frc" data-frc="" data-fw-record="nb-0902">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="nb-0902"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Nesting bird observation</span
                        ><span class="bcn-frc__when">Sep 2</span></span
                      ><span class="bcn-frc__label"
                        >Active Swainson's hawk nest confirmed near the Intake C haul
                        road</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
              <div class="bcn-fw__group" role="group" aria-label="Older" data-fw-group="">
                <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">
                  Older
                </p>
                <ul class="bcn-fw__list stack" data-gap="xs" role="none">
                  <li class="bcn-frc" data-frc="" data-fw-record="cc-0828">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="cc-0828"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Compliance concern</span
                        ><span class="bcn-frc__when">Aug 28</span></span
                      ><span class="bcn-frc__label"
                        >No spill kit at the Byron Tract staging area</span
                      >
                    </button>
                  </li>
                  <li class="bcn-frc" data-frc="" data-fw-record="ev-dust-0822">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="ev-dust-0822"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Uploaded evidence</span
                        ><span class="bcn-frc__when">Aug 22</span></span
                      ><span class="bcn-frc__label"
                        >Dust suppression log — week of August 17</span
                      >
                    </button>
                  </li>
                  <li class="bcn-frc" data-frc="" data-fw-record="svy-0815" hidden="">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="svy-0815"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Survey</span
                        ><span class="bcn-frc__when">Aug 15</span></span
                      ><span class="bcn-frc__label"
                        >Nesting bird sweep — Byron Tract</span
                      >
                    </button>
                  </li>
                  <li class="bcn-frc" data-frc="" data-fw-record="dmr-0806" hidden="">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="dmr-0806"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Daily monitoring report</span
                        ><span class="bcn-frc__when">Aug 6</span></span
                      ><span class="bcn-frc__label"
                        >Daily monitoring report — Bethany aqueduct tie-in</span
                      >
                    </button>
                  </li>
                  <li
                    class="bcn-frc"
                    data-frc=""
                    data-fw-record="ev-erosion-0725"
                    hidden=""
                  >
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="ev-erosion-0725"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Uploaded evidence</span
                        ><span class="bcn-frc__when">Jul 25</span></span
                      ><span class="bcn-frc__label"
                        >Post-storm erosion control inspection</span
                      >
                    </button>
                  </li>
                  <li class="bcn-frc" data-frc="" data-fw-record="br-0712" hidden="">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="br-0712"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source"
                          >Biological resource observation</span
                        ><span class="bcn-frc__when">Jul 12</span></span
                      ><span class="bcn-frc__label"
                        >Western pond turtle basking at the forebay edge</span
                      >
                    </button>
                  </li>
                  <li class="bcn-frc" data-frc="" data-fw-record="weap-0701" hidden="">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="weap-0701"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">WEAP training</span
                        ><span class="bcn-frc__when">Jul 1</span></span
                      ><span class="bcn-frc__label"
                        >WEAP session — Intake B mobilization</span
                      >
                    </button>
                  </li>
                  <li class="bcn-frc" data-frc="" data-fw-record="cc-0605" hidden="">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="cc-0605"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Compliance concern</span
                        ><span class="bcn-frc__when">Jun 5</span></span
                      ><span class="bcn-frc__label"
                        >Night lighting spilling into habitat at the pumping plant</span
                      >
                    </button>
                  </li>
                  <li
                    class="bcn-frc"
                    data-frc=""
                    data-fw-record="ev-quals-0520"
                    hidden=""
                  >
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="ev-quals-0520"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Uploaded evidence</span
                        ><span class="bcn-frc__when">May 20</span></span
                      ><span class="bcn-frc__label"
                        >Designated Biologist approval letter from CDFW</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
              <p class="bcn-fw__none typography-body-sm" data-fw-none="" hidden="">
                Nothing matches these filters.
              </p>
            </div>
          </aside>
          <div class="bcn-fw__detail">
            <section
              class="bcn-fw__pane"
              data-fw-pane="obs-ggs"
              aria-label="Giant garter snake seen in an irrigation canal at the work edge"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Biological resource observation
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Giant garter snake seen in an irrigation canal at the work edge
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Wed, Sep 16, 2026, 8:35 AM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Twin Cities Complex</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Reach 3 — canal crossing</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">A. Mendes</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/biological-resources"
                          role="button"
                          ><span class="esa-button__label"
                            >Open in Biological Resources</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="5 obligations"
                                >5</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="obs-ggs"
                              data-fw-link-title="Giant garter snake seen in an irrigation canal at the work edge"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="obs-ggs"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYV"
                            data-class="notify"
                            data-text="ongoing demonstration of mitigation performance during the permit term"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Ongoing demonstration of mitigation performance during
                                the permit term</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                            data-class="notify"
                            data-text="biological monitor daily communication and immediate reports to the designated biologist"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Biological Monitor daily communication and immediate
                                reports to the Designated Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                            data-class="notify"
                            data-text="covered species encounter reporting to the biologist"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Covered Species Encounter Reporting to the
                                Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEH"
                            data-class="adhere"
                            data-text="avoidance measures in unmapped habitat"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Avoidance Measures in Unmapped Habitat</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEM"
                            data-class="adhere"
                            data-text="work stoppage on covered species encounter"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Work Stoppage on Covered Species Encounter</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="obs-hawk"
              hidden=""
              aria-label="Injured Swainson's hawk recovered near a haul road"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Compliance concern
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Injured Swainson's hawk recovered near a haul road
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Wed, Sep 16, 2026, 7:10 AM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Intake B — North Delta</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">North haul road</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">R. Osei</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/compliance-concerns"
                          role="button"
                          ><span class="esa-button__label"
                            >Open in Compliance Concerns</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="5 obligations"
                                >5</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="obs-hawk"
                              data-fw-link-title="Injured Swainson's hawk recovered near a haul road"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="obs-hawk"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYV"
                            data-class="notify"
                            data-text="ongoing demonstration of mitigation performance during the permit term"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Ongoing demonstration of mitigation performance during
                                the permit term</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                            data-class="notify"
                            data-text="biological monitor daily communication and immediate reports to the designated biologist"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Biological Monitor daily communication and immediate
                                reports to the Designated Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                            data-class="notify"
                            data-text="covered species encounter reporting to the biologist"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Covered Species Encounter Reporting to the
                                Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFW"
                            data-class="adhere"
                            data-text="care of covered species injured by covered activities"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Care of covered species injured by covered
                                activities</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEM"
                            data-class="adhere"
                            data-text="work stoppage on covered species encounter"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Work Stoppage on Covered Species Encounter</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="dmr-daily"
              hidden=""
              aria-label="Daily monitoring report — in-water work at the intake"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Daily monitoring report
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Daily monitoring report — in-water work at the intake
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Tue, Sep 15, 2026, 5:05 PM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Intake B — North Delta</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Reach 2</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">D. Vance</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Event Hub</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/daily-monitoring-reports"
                          role="button"
                          ><span class="esa-button__label"
                            >Open in Daily Monitoring Reports</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="4 obligations"
                                >4</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="dmr-daily"
                              data-fw-link-title="Daily monitoring report — in-water work at the intake"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="dmr-daily"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9X"
                            data-class="monitor"
                            data-text="watch for distressed or injured fish during pile driving"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Monitor</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Watch for distressed or injured fish during pile
                                driving</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3757AMQWDRRZPPRX5X5"
                            data-class="adhere"
                            data-text="dewatering pump shutdown"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Dewatering pump shutdown</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3GS5JKTENA4JZKKAVH0"
                            data-class="monitor"
                            data-text="daily biologist compliance inspection at each construction site and maintenance activity"
                            data-relation="evidence"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Monitor</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Daily biologist compliance inspection at each
                                construction site and maintenance activity</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QRJRM8HB4RC5N41ANR"
                            data-class="monitor"
                            data-text="daily written observation and inspection record"
                            data-relation="evidence"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Monitor</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Daily written observation and inspection record</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="obs-trbl"
              hidden=""
              aria-label="Active tricolored blackbird colony found in the staging buffer"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Nesting bird observation
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Active tricolored blackbird colony found in the staging buffer
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Tue, Sep 15, 2026, 3:40 PM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">
                              Southern Forebay &amp; Pumping Plant
                            </dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Staging area 2</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">J. Whitfield</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/nesting-birds"
                          role="button"
                          ><span class="esa-button__label">Open in Nesting Birds</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="3 obligations"
                                >3</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="obs-trbl"
                              data-fw-link-title="Active tricolored blackbird colony found in the staging buffer"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="obs-trbl"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYV"
                            data-class="notify"
                            data-text="ongoing demonstration of mitigation performance during the permit term"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Ongoing demonstration of mitigation performance during
                                the permit term</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                            data-class="notify"
                            data-text="biological monitor daily communication and immediate reports to the designated biologist"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Biological Monitor daily communication and immediate
                                reports to the Designated Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                            data-class="notify"
                            data-text="covered species encounter reporting to the biologist"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Covered Species Encounter Reporting to the
                                Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="sr-turbid"
              hidden=""
              aria-label="Turbidity above the approved threshold downstream of dewatering"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">Site report</p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Turbidity above the approved threshold downstream of dewatering
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">
                              Tue, Sep 15, 2026, 11:25 AM
                            </dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Intake C — North Delta</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Compliance point 3</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">Water quality team</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Event Hub</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="1 obligation"
                                >1</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="sr-turbid"
                              data-fw-link-title="Turbidity above the approved threshold downstream of dewatering"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="sr-turbid"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKM0HYHZPHBXBXTP9J36"
                            data-class="adhere"
                            data-text="storm onset work restriction"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Storm Onset Work Restriction</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="dmr-0914"
              hidden=""
              aria-label="Daily monitoring report — Intake B cofferdam"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Daily monitoring report
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Daily monitoring report — Intake B cofferdam
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Mon, Sep 14, 2026, 5:30 PM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Intake B — North Delta</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Reach 2</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">D. Vance</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Event Hub</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/daily-monitoring-reports"
                          role="button"
                          ><span class="esa-button__label"
                            >Open in Daily Monitoring Reports</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="3 obligations"
                                >3</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="dmr-0914"
                              data-fw-link-title="Daily monitoring report — Intake B cofferdam"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="dmr-0914"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3GS5JKTENA4JZKKAVH0"
                            data-class="monitor"
                            data-text="daily biologist compliance inspection at each construction site and maintenance activity"
                            data-relation="evidence"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Monitor</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Daily biologist compliance inspection at each
                                construction site and maintenance activity</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QRJRM8HB4RC5N41ANR"
                            data-class="monitor"
                            data-text="daily written observation and inspection record"
                            data-relation="evidence"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Monitor</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Daily written observation and inspection record</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9R"
                            data-class="monitor"
                            data-text="daily inspection of equipment in contact with water for petroleum leaks"
                            data-relation="evidence"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Monitor</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Daily inspection of equipment in contact with water for
                                petroleum leaks</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="obs-cts"
              hidden=""
              aria-label="California tiger salamander found inside exclusion fencing"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Compliance concern
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          California tiger salamander found inside exclusion fencing
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Mon, Sep 14, 2026, 9:05 AM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Twin Cities Complex</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Reach 1 — upland margin</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">Wildlife capture crew</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/compliance-concerns"
                          role="button"
                          ><span class="esa-button__label"
                            >Open in Compliance Concerns</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="4 obligations"
                                >4</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="obs-cts"
                              data-fw-link-title="California tiger salamander found inside exclusion fencing"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="obs-cts"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYV"
                            data-class="notify"
                            data-text="ongoing demonstration of mitigation performance during the permit term"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Ongoing demonstration of mitigation performance during
                                the permit term</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                            data-class="notify"
                            data-text="biological monitor daily communication and immediate reports to the designated biologist"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Biological Monitor daily communication and immediate
                                reports to the Designated Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                            data-class="notify"
                            data-text="covered species encounter reporting to the biologist"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Covered Species Encounter Reporting to the
                                Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEM"
                            data-class="adhere"
                            data-text="work stoppage on covered species encounter"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Work Stoppage on Covered Species Encounter</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="svy-0913"
              hidden=""
              aria-label="Pre-activity presence survey — Reach 1 upland"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">Survey</p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Pre-activity presence survey — Reach 1 upland
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Sun, Sep 13, 2026, 2:00 PM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Twin Cities Complex</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Reach 1</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">A. Mendes</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/surveys"
                          role="button"
                          ><span class="esa-button__label">Open in Surveys</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <p class="bcn-frec__summary typography-body-sm">
                        No covered species found in the work footprint. Twelve burrows
                        checked and flagged.
                      </p>
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="2 obligations"
                                >2</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="svy-0913"
                              data-fw-link-title="Pre-activity presence survey — Reach 1 upland"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="svy-0913"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3GVB9GY756CNBCP3TGV"
                            data-class="monitor"
                            data-text="presence surveys before and during each work day"
                            data-relation="evidence"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Monitor</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Presence surveys before and during each work day</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6GA1"
                            data-class="monitor"
                            data-text="daily burrow check before work starts"
                            data-relation="evidence"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Monitor</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Daily burrow check before work starts</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="ev-fence-0911"
              hidden=""
              aria-label="Exclusion fencing inspection — Reach 1 photo set"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Uploaded evidence
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Exclusion fencing inspection — Reach 1 photo set
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Fri, Sep 11, 2026, 4:15 PM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Twin Cities Complex</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Reach 1</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">K. Ito</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Manual upload</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <p class="bcn-frec__summary typography-body-sm">
                        Fence intact along the full run. One sagging section at station 14
                        retensioned the same day.
                      </p>
                      <div class="stack" data-gap="xs">
                        <div class="bcn-file-row">
                          <span class="bcn-file-row__icon"
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
                                  d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                                ></path>
                                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                <path d="M10 9H8"></path>
                                <path d="M16 13H8"></path>
                                <path d="M16 17H8"></path></svg></span></span
                          ><span
                            class="bcn-file-row__name"
                            title="reach1-fence-inspection-0911.pdf"
                            >reach1-fence-inspection-0911.pdf</span
                          ><span class="bcn-file-row__size">2.4 MB</span
                          ><span class="bcn-file-row__actions"
                            ><span class="bcn-file-row__act"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Download reach1-fence-inspection-0911.pdf"
                                  title="Download reach1-fence-inspection-0911.pdf"
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
                                      <path
                                        d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                      ></path>
                                      <polyline points="7 10 12 15 17 10"></polyline>
                                      <line x1="12" x2="12" y1="15" y2="3"></line></svg
                                  ></span></button></span></span
                          ></span>
                        </div>
                        <div class="bcn-file-row">
                          <span class="bcn-file-row__icon"
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
                                  d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                                ></path>
                                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                <path d="M10 9H8"></path>
                                <path d="M16 13H8"></path>
                                <path d="M16 17H8"></path></svg></span></span
                          ><span
                            class="bcn-file-row__name"
                            title="station14-before-after.jpg"
                            >station14-before-after.jpg</span
                          ><span class="bcn-file-row__size">860 KB</span
                          ><span class="bcn-file-row__actions"
                            ><span class="bcn-file-row__act"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Download station14-before-after.jpg"
                                  title="Download station14-before-after.jpg"
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
                                      <path
                                        d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                      ></path>
                                      <polyline points="7 10 12 15 17 10"></polyline>
                                      <line x1="12" x2="12" y1="15" y2="3"></line></svg
                                  ></span></button></span></span
                          ></span>
                        </div>
                      </div>
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="3 obligations"
                                >3</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="ev-fence-0911"
                              data-fw-link-title="Exclusion fencing inspection — Reach 1 photo set"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="ev-fence-0911"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKM0HYHZPHBXBXTP9J37"
                            data-class="monitor"
                            data-text="exclusion fencing inspection and repair"
                            data-relation="evidence"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Monitor</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Exclusion Fencing Inspection and Repair</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6GA5"
                            data-class="monitor"
                            data-text="inspection and reporting of habitat fencing, stakes and flags"
                            data-relation="evidence"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Monitor</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Inspection and reporting of habitat fencing, stakes and
                                flags</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3757AMQWDRRZPPRX5WQ"
                            data-class="adhere"
                            data-text="exclusion fencing in place during covered activities"
                            data-relation="evidence"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Exclusion fencing in place during covered
                                activities</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="weap-0908"
              hidden=""
              aria-label="WEAP session — 14 new crew members"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">WEAP training</p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          WEAP session — 14 new crew members
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Tue, Sep 8, 2026, 1:00 PM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">
                              Bouldin Island Launch Shaft
                            </dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Bouldin Island trailer</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">R. Osei</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/weap"
                          role="button"
                          ><span class="esa-button__label">Open in WEAP Training</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="1 obligation"
                                >1</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="weap-0908"
                              data-fw-link-title="WEAP session — 14 new crew members"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="weap-0908"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y40FW7TYCC8DP1VT56RE"
                            data-class="adhere"
                            data-text="wallet card or fact sheet carried by workers in the project area"
                            data-relation="evidence"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Wallet card or fact sheet carried by workers in the
                                Project Area</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="sr-0903"
              hidden=""
              aria-label="Dewatering pump intake screen inspected"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">Site report</p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Dewatering pump intake screen inspected
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Thu, Sep 3, 2026, 10:40 AM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Intake C — North Delta</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Compliance point 3</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">M. Okafor</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Event Hub</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <p class="bcn-frec__summary typography-body-sm">
                        Screen mesh intact; pumping rate logged at 180 gpm.
                      </p>
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="2 obligations"
                                >2</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="sr-0903"
                              data-fw-link-title="Dewatering pump intake screen inspected"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="sr-0903"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXZ"
                            data-class="adhere"
                            data-text="dewatering pump intake screening"
                            data-relation="evidence"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Dewatering Pump Intake Screening</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y374X4RKETDHB3S1M1MZ"
                            data-class="adhere"
                            data-text="dewatering rate limit"
                            data-relation="evidence"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Dewatering rate limit</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="nb-0902"
              hidden=""
              aria-label="Active Swainson's hawk nest confirmed near the Intake C haul road"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Nesting bird observation
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Active Swainson's hawk nest confirmed near the Intake C haul
                          road
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Wed, Sep 2, 2026, 8:20 AM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Intake C — North Delta</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Intake C haul road</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">J. Whitfield</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/nesting-birds"
                          role="button"
                          ><span class="esa-button__label">Open in Nesting Birds</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="3 obligations"
                                >3</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="nb-0902"
                              data-fw-link-title="Active Swainson's hawk nest confirmed near the Intake C haul road"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="nb-0902"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                            data-class="notify"
                            data-text="covered species encounter reporting to the biologist"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Covered Species Encounter Reporting to the
                                Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3GVB9GY756CNBCP3TGZ"
                            data-class="monitor"
                            data-text="distance-tiered nest observation during covered activities"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Monitor</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Distance-tiered nest observation during covered
                                activities</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3757AMQWDRRZPPRX5XH"
                            data-class="adhere"
                            data-text="occupied nest no-activity buffer"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Occupied nest no-activity buffer</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="cc-0828"
              hidden=""
              aria-label="No spill kit at the Byron Tract staging area"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Compliance concern
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          No spill kit at the Byron Tract staging area
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Fri, Aug 28, 2026, 3:05 PM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Byron Tract Forebay</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Staging area 4</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">R. Osei</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/compliance-concerns"
                          role="button"
                          ><span class="esa-button__label"
                            >Open in Compliance Concerns</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="2 obligations"
                                >2</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="cc-0828"
                              data-fw-link-title="No spill kit at the Byron Tract staging area"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="cc-0828"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7B"
                            data-class="adhere"
                            data-text="spill kits on site"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Spill Kits On Site</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7F"
                            data-class="adhere"
                            data-text="staging area spill containment"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Staging Area Spill Containment</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="ev-dust-0822"
              hidden=""
              aria-label="Dust suppression log — week of August 17"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Uploaded evidence
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Dust suppression log — week of August 17
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Sat, Aug 22, 2026, 6:00 PM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">
                              Southern Forebay &amp; Pumping Plant
                            </dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">
                              Southern Forebay haul roads
                            </dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">L. Park</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Manual upload</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <div class="stack" data-gap="xs">
                        <div class="bcn-file-row">
                          <span class="bcn-file-row__icon"
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
                                  d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                                ></path>
                                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                <path d="M10 9H8"></path>
                                <path d="M16 13H8"></path>
                                <path d="M16 17H8"></path></svg></span></span
                          ><span
                            class="bcn-file-row__name"
                            title="dust-log-2026-08-17.xlsx"
                            >dust-log-2026-08-17.xlsx</span
                          ><span class="bcn-file-row__size">48 KB</span
                          ><span class="bcn-file-row__actions"
                            ><span class="bcn-file-row__act"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Download dust-log-2026-08-17.xlsx"
                                  title="Download dust-log-2026-08-17.xlsx"
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
                                      <path
                                        d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                      ></path>
                                      <polyline points="7 10 12 15 17 10"></polyline>
                                      <line x1="12" x2="12" y1="15" y2="3"></line></svg
                                  ></span></button></span></span
                          ></span>
                        </div>
                      </div>
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="1 obligation"
                                >1</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="ev-dust-0822"
                              data-fw-link-title="Dust suppression log — week of August 17"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="ev-dust-0822"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGX8"
                            data-class="adhere"
                            data-text="fugitive dust suppression"
                            data-relation="evidence"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Fugitive Dust Suppression</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="svy-0815"
              hidden=""
              aria-label="Nesting bird sweep — Byron Tract"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">Survey</p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Nesting bird sweep — Byron Tract
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Sat, Aug 15, 2026, 7:30 AM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Byron Tract Forebay</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Byron Tract</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">J. Whitfield</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/surveys"
                          role="button"
                          ><span class="esa-button__label">Open in Surveys</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="2 obligations"
                                >2</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="svy-0815"
                              data-fw-link-title="Nesting bird sweep — Byron Tract"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="svy-0815"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3GVB9GY756CNBCP3TGZ"
                            data-class="monitor"
                            data-text="distance-tiered nest observation during covered activities"
                            data-relation="evidence"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Monitor</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Distance-tiered nest observation during covered
                                activities</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3GVB9GY756CNBCP3TH2"
                            data-class="monitor"
                            data-text="daily monitoring of an active colony near work"
                            data-relation="evidence"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Monitor</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Daily monitoring of an active colony near work</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="dmr-0806"
              hidden=""
              aria-label="Daily monitoring report — Bethany aqueduct tie-in"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Daily monitoring report
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Daily monitoring report — Bethany aqueduct tie-in
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Thu, Aug 6, 2026, 5:10 PM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Bethany Reservoir Aqueduct</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Bethany tie-in</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">D. Vance</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Event Hub</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/daily-monitoring-reports"
                          role="button"
                          ><span class="esa-button__label"
                            >Open in Daily Monitoring Reports</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="2 obligations"
                                >2</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="dmr-0806"
                              data-fw-link-title="Daily monitoring report — Bethany aqueduct tie-in"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="dmr-0806"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3GS5JKTENA4JZKKAVH0"
                            data-class="monitor"
                            data-text="daily biologist compliance inspection at each construction site and maintenance activity"
                            data-relation="evidence"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Monitor</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Daily biologist compliance inspection at each
                                construction site and maintenance activity</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3GVB9GY756CNBCP3THE"
                            data-class="monitor"
                            data-text="erosion control inspection before, during and after storms"
                            data-relation="evidence"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Monitor</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Erosion control inspection before, during and after
                                storms</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="ev-erosion-0725"
              hidden=""
              aria-label="Post-storm erosion control inspection"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Uploaded evidence
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Post-storm erosion control inspection
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">
                              Sat, Jul 25, 2026, 12:00 PM
                            </dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Bethany Reservoir Aqueduct</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Bethany slopes</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">L. Park</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Manual upload</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <div class="stack" data-gap="xs">
                        <div class="bcn-file-row">
                          <span class="bcn-file-row__icon"
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
                                  d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                                ></path>
                                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                <path d="M10 9H8"></path>
                                <path d="M16 13H8"></path>
                                <path d="M16 17H8"></path></svg></span></span
                          ><span
                            class="bcn-file-row__name"
                            title="erosion-inspection-0725.pdf"
                            >erosion-inspection-0725.pdf</span
                          ><span class="bcn-file-row__size">5.1 MB</span
                          ><span class="bcn-file-row__actions"
                            ><span class="bcn-file-row__act"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Download erosion-inspection-0725.pdf"
                                  title="Download erosion-inspection-0725.pdf"
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
                                      <path
                                        d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                      ></path>
                                      <polyline points="7 10 12 15 17 10"></polyline>
                                      <line x1="12" x2="12" y1="15" y2="3"></line></svg
                                  ></span></button></span></span
                          ></span>
                        </div>
                      </div>
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="2 obligations"
                                >2</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="ev-erosion-0725"
                              data-fw-link-title="Post-storm erosion control inspection"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="ev-erosion-0725"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9S"
                            data-class="monitor"
                            data-text="inspection of erosion controls before, during and after rain events"
                            data-relation="evidence"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Monitor</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Inspection of erosion controls before, during and after
                                rain events</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKW469S9XKYKCE1V6Y4"
                            data-class="adhere"
                            data-text="erosion control in place before storms"
                            data-relation="evidence"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Erosion Control in Place Before Storms</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="br-0712"
              hidden=""
              aria-label="Western pond turtle basking at the forebay edge"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Biological resource observation
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Western pond turtle basking at the forebay edge
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Sun, Jul 12, 2026, 9:45 AM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Byron Tract Forebay</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Byron Tract forebay</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">A. Mendes</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/biological-resources"
                          role="button"
                          ><span class="esa-button__label"
                            >Open in Biological Resources</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="1 obligation"
                                >1</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="br-0712"
                              data-fw-link-title="Western pond turtle basking at the forebay edge"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="br-0712"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                            data-class="notify"
                            data-text="covered species encounter reporting to the biologist"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Covered Species Encounter Reporting to the
                                Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="weap-0701"
              hidden=""
              aria-label="WEAP session — Intake B mobilization"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">WEAP training</p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          WEAP session — Intake B mobilization
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Wed, Jul 1, 2026, 1:30 PM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Intake B — North Delta</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Intake B field office</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">R. Osei</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/weap"
                          role="button"
                          ><span class="esa-button__label">Open in WEAP Training</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="1 obligation"
                                >1</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="weap-0701"
                              data-fw-link-title="WEAP session — Intake B mobilization"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="weap-0701"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y40FW7TYCC8DP1VT56RE"
                            data-class="adhere"
                            data-text="wallet card or fact sheet carried by workers in the project area"
                            data-relation="evidence"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Wallet card or fact sheet carried by workers in the
                                Project Area</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="cc-0605"
              hidden=""
              aria-label="Night lighting spilling into habitat at the pumping plant"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Compliance concern
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Night lighting spilling into habitat at the pumping plant
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Fri, Jun 5, 2026, 10:10 PM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">
                              Southern Forebay &amp; Pumping Plant
                            </dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Pumping plant east pad</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">K. Ito</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/compliance-concerns"
                          role="button"
                          ><span class="esa-button__label"
                            >Open in Compliance Concerns</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="2 obligations"
                                >2</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="cc-0605"
                              data-fw-link-title="Night lighting spilling into habitat at the pumping plant"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="cc-0605"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3GVB9GY756CNBCP3TGQ"
                            data-class="monitor"
                            data-text="burrow monitoring when night lighting spills toward habitat"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Monitor</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Burrow monitoring when night lighting spills toward
                                habitat</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGY6"
                            data-class="adhere"
                            data-text="night lighting spill control"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Night Lighting Spill Control</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="ev-quals-0520"
              hidden=""
              aria-label="Designated Biologist approval letter from CDFW"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Uploaded evidence
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Designated Biologist approval letter from CDFW
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Wed, May 20, 2026, 4:00 PM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Twin Cities Complex</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Project-wide</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">M. Okafor</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Manual upload</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <div class="stack" data-gap="xs">
                        <div class="bcn-file-row">
                          <span class="bcn-file-row__icon"
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
                                  d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                                ></path>
                                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                <path d="M10 9H8"></path>
                                <path d="M16 13H8"></path>
                                <path d="M16 17H8"></path></svg></span></span
                          ><span
                            class="bcn-file-row__name"
                            title="cdfw-db-approval-2026-05.pdf"
                            >cdfw-db-approval-2026-05.pdf</span
                          ><span class="bcn-file-row__size">310 KB</span
                          ><span class="bcn-file-row__actions"
                            ><span class="bcn-file-row__act"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Download cdfw-db-approval-2026-05.pdf"
                                  title="Download cdfw-db-approval-2026-05.pdf"
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
                                      <path
                                        d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                      ></path>
                                      <polyline points="7 10 12 15 17 10"></polyline>
                                      <line x1="12" x2="12" y1="15" y2="3"></line></svg
                                  ></span></button></span></span
                          ></span>
                        </div>
                      </div>
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="2 obligations"
                                >2</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="ev-quals-0520"
                              data-fw-link-title="Designated Biologist approval letter from CDFW"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="ev-quals-0520"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y34JV1PFVYQEE7T447XE"
                            data-class="roster"
                            data-text="designated biologist and fisheries biologist qualifications and responsibilities"
                            data-relation="evidence"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Roster</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Designated Biologist and Fisheries Biologist
                                qualifications and responsibilities</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYGC"
                            data-class="roster"
                            data-text="approved wildlife handler"
                            data-relation="evidence"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Roster</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Approved Wildlife Handler</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div class="bcn-fw__pane" data-fw-pane-none="" hidden="">
              <div class="esa-empty-state esa-empty-state--md">
                <h3 class="esa-empty-state__title typography-label-md-strong">
                  No records match these filters
                </h3>
                <p class="esa-empty-state__description typography-body-sm">
                  Widen the time range or clear a filter.
                </p>
                <div class="esa-empty-state__actions typography-label-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div slot="panel-1">
    <div
      class="bcn-fw stack"
      data-gap="md"
      data-fw-view="important"
      data-fw-search="feed-important"
      data-fw-records='{"obs-ggs":{"source":"biological-resources","age":0,"text":"giant garter snake seen in an irrigation canal at the work edge reach 3 — canal crossing a. mendes biological resource observation"},"obs-hawk":{"source":"compliance-concerns","age":0,"text":"injured swainson&apos;s hawk recovered near a haul road north haul road r. osei compliance concern"},"obs-trbl":{"source":"nesting-birds","age":0,"text":"active tricolored blackbird colony found in the staging buffer staging area 2 j. whitfield nesting bird observation"},"obs-cts":{"source":"compliance-concerns","age":2,"text":"california tiger salamander found inside exclusion fencing reach 1 — upland margin wildlife capture crew compliance concern"},"ev-fence-0911":{"source":"evidence","age":4,"text":"exclusion fencing inspection — reach 1 photo set reach 1 k. ito uploaded evidence"},"nb-0902":{"source":"nesting-birds","age":14,"text":"active swainson&apos;s hawk nest confirmed near the intake c haul road intake c haul road j. whitfield nesting bird observation"},"br-0712":{"source":"biological-resources","age":65,"text":"western pond turtle basking at the forebay edge byron tract forebay a. mendes biological resource observation"}}'
    >
      <div class="bcn-swfr bcn-swfr--panel">
        <esa-text-field
          class="bcn-swfr__search"
          size="sm"
          name="feed-important"
          placeholder="Search records"
          aria-label="Search records"
        ></esa-text-field
        ><esa-select
          class="bcn-swfr__picker"
          size="sm"
          name="feed-important-source"
          options='[{"label":"All sources","value":""},{"label":"Nesting bird observation","value":"nesting-birds"},{"label":"Compliance concern","value":"compliance-concerns"},{"label":"Biological resource observation","value":"biological-resources"},{"label":"Daily monitoring report","value":"daily-monitoring-reports"},{"label":"Site report","value":"site-reports"},{"label":"Survey","value":"surveys"},{"label":"WEAP training","value":"weap"},{"label":"Uploaded evidence","value":"evidence"}]'
          value=""
          placeholder="All sources"
          cue="Filter by source."
        ></esa-select
        ><esa-button-toggle
          slot="filters"
          size="sm"
          aria-label="How far back"
          data-fw-scope="true"
          data-value="30"
          data-options='[{"label":"30 days","value":"30"},{"label":"90 days","value":"90"},{"label":"All","value":"all"}]'
        ></esa-button-toggle>
        <div class="bcn-swfr__verbs"></div>
      </div>
      <div class="bcn-fw__side" data-fw-side="">
        <div
          class="sidebar"
          data-gap="lg"
          style="--sidebar-width: 21rem; --sidebar-content-min: 55%"
        >
          <aside class="bcn-fw__rail" aria-label="Records in your filter">
            <div
              class="bcn-fw__scroll"
              role="listbox"
              aria-label="Records in your filter"
            >
              <div class="bcn-fw__group" role="group" aria-label="Today" data-fw-group="">
                <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">
                  Today
                </p>
                <ul class="bcn-fw__list stack" data-gap="xs" role="none">
                  <li class="bcn-frc" data-frc="" data-fw-record="obs-ggs">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="true"
                      data-of-pick="obs-ggs"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source"
                          >Biological resource observation</span
                        ><span class="bcn-frc__when">8:35 AM</span></span
                      ><span class="bcn-frc__label"
                        >Giant garter snake seen in an irrigation canal at the work
                        edge</span
                      >
                    </button>
                  </li>
                  <li class="bcn-frc" data-frc="" data-fw-record="obs-hawk">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="obs-hawk"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Compliance concern</span
                        ><span class="bcn-frc__when">7:10 AM</span></span
                      ><span class="bcn-frc__label"
                        >Injured Swainson's hawk recovered near a haul road</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
              <div
                class="bcn-fw__group"
                role="group"
                aria-label="Yesterday"
                data-fw-group=""
              >
                <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">
                  Yesterday
                </p>
                <ul class="bcn-fw__list stack" data-gap="xs" role="none">
                  <li class="bcn-frc" data-frc="" data-fw-record="obs-trbl">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="obs-trbl"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Nesting bird observation</span
                        ><span class="bcn-frc__when">3:40 PM</span></span
                      ><span class="bcn-frc__label"
                        >Active tricolored blackbird colony found in the staging
                        buffer</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
              <div
                class="bcn-fw__group"
                role="group"
                aria-label="This week"
                data-fw-group=""
              >
                <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">
                  This week
                </p>
                <ul class="bcn-fw__list stack" data-gap="xs" role="none">
                  <li class="bcn-frc" data-frc="" data-fw-record="obs-cts">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="obs-cts"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Compliance concern</span
                        ><span class="bcn-frc__when">Mon 9:05 AM</span></span
                      ><span class="bcn-frc__label"
                        >California tiger salamander found inside exclusion fencing</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
              <div
                class="bcn-fw__group"
                role="group"
                aria-label="This month"
                data-fw-group=""
              >
                <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">
                  This month
                </p>
                <ul class="bcn-fw__list stack" data-gap="xs" role="none">
                  <li class="bcn-frc" data-frc="" data-fw-record="ev-fence-0911">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="ev-fence-0911"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Uploaded evidence</span
                        ><span class="bcn-frc__when">Sep 11</span></span
                      ><span class="bcn-frc__label"
                        >Exclusion fencing inspection — Reach 1 photo set</span
                      >
                    </button>
                  </li>
                  <li class="bcn-frc" data-frc="" data-fw-record="nb-0902">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="nb-0902"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Nesting bird observation</span
                        ><span class="bcn-frc__when">Sep 2</span></span
                      ><span class="bcn-frc__label"
                        >Active Swainson's hawk nest confirmed near the Intake C haul
                        road</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
              <div
                class="bcn-fw__group"
                role="group"
                aria-label="Older"
                data-fw-group=""
                hidden=""
              >
                <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">
                  Older
                </p>
                <ul class="bcn-fw__list stack" data-gap="xs" role="none">
                  <li class="bcn-frc" data-frc="" data-fw-record="br-0712" hidden="">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="br-0712"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source"
                          >Biological resource observation</span
                        ><span class="bcn-frc__when">Jul 12</span></span
                      ><span class="bcn-frc__label"
                        >Western pond turtle basking at the forebay edge</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
              <p class="bcn-fw__none typography-body-sm" data-fw-none="" hidden="">
                Nothing matches these filters.
              </p>
            </div>
          </aside>
          <div class="bcn-fw__detail">
            <section
              class="bcn-fw__pane"
              data-fw-pane="obs-ggs"
              aria-label="Giant garter snake seen in an irrigation canal at the work edge"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Biological resource observation
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Giant garter snake seen in an irrigation canal at the work edge
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Wed, Sep 16, 2026, 8:35 AM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Twin Cities Complex</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Reach 3 — canal crossing</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">A. Mendes</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/biological-resources"
                          role="button"
                          ><span class="esa-button__label"
                            >Open in Biological Resources</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="4 obligations"
                                >4</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="obs-ggs"
                              data-fw-link-title="Giant garter snake seen in an irrigation canal at the work edge"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="obs-ggs"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                            data-class="notify"
                            data-text="biological monitor daily communication and immediate reports to the designated biologist"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Biological Monitor daily communication and immediate
                                reports to the Designated Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                            data-class="notify"
                            data-text="covered species encounter reporting to the biologist"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Covered Species Encounter Reporting to the
                                Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEH"
                            data-class="adhere"
                            data-text="avoidance measures in unmapped habitat"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Avoidance Measures in Unmapped Habitat</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEM"
                            data-class="adhere"
                            data-text="work stoppage on covered species encounter"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Work Stoppage on Covered Species Encounter</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="obs-hawk"
              hidden=""
              aria-label="Injured Swainson's hawk recovered near a haul road"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Compliance concern
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Injured Swainson's hawk recovered near a haul road
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Wed, Sep 16, 2026, 7:10 AM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Intake B — North Delta</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">North haul road</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">R. Osei</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/compliance-concerns"
                          role="button"
                          ><span class="esa-button__label"
                            >Open in Compliance Concerns</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="4 obligations"
                                >4</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="obs-hawk"
                              data-fw-link-title="Injured Swainson's hawk recovered near a haul road"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="obs-hawk"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                            data-class="notify"
                            data-text="biological monitor daily communication and immediate reports to the designated biologist"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Biological Monitor daily communication and immediate
                                reports to the Designated Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                            data-class="notify"
                            data-text="covered species encounter reporting to the biologist"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Covered Species Encounter Reporting to the
                                Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFW"
                            data-class="adhere"
                            data-text="care of covered species injured by covered activities"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Care of covered species injured by covered
                                activities</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEM"
                            data-class="adhere"
                            data-text="work stoppage on covered species encounter"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Work Stoppage on Covered Species Encounter</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="obs-trbl"
              hidden=""
              aria-label="Active tricolored blackbird colony found in the staging buffer"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Nesting bird observation
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Active tricolored blackbird colony found in the staging buffer
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Tue, Sep 15, 2026, 3:40 PM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">
                              Southern Forebay &amp; Pumping Plant
                            </dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Staging area 2</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">J. Whitfield</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/nesting-birds"
                          role="button"
                          ><span class="esa-button__label">Open in Nesting Birds</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="2 obligations"
                                >2</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="obs-trbl"
                              data-fw-link-title="Active tricolored blackbird colony found in the staging buffer"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="obs-trbl"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                            data-class="notify"
                            data-text="biological monitor daily communication and immediate reports to the designated biologist"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Biological Monitor daily communication and immediate
                                reports to the Designated Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                            data-class="notify"
                            data-text="covered species encounter reporting to the biologist"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Covered Species Encounter Reporting to the
                                Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="obs-cts"
              hidden=""
              aria-label="California tiger salamander found inside exclusion fencing"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Compliance concern
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          California tiger salamander found inside exclusion fencing
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Mon, Sep 14, 2026, 9:05 AM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Twin Cities Complex</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Reach 1 — upland margin</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">Wildlife capture crew</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/compliance-concerns"
                          role="button"
                          ><span class="esa-button__label"
                            >Open in Compliance Concerns</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="3 obligations"
                                >3</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="obs-cts"
                              data-fw-link-title="California tiger salamander found inside exclusion fencing"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="obs-cts"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                            data-class="notify"
                            data-text="biological monitor daily communication and immediate reports to the designated biologist"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Biological Monitor daily communication and immediate
                                reports to the Designated Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                            data-class="notify"
                            data-text="covered species encounter reporting to the biologist"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Covered Species Encounter Reporting to the
                                Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEM"
                            data-class="adhere"
                            data-text="work stoppage on covered species encounter"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Work Stoppage on Covered Species Encounter</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="ev-fence-0911"
              hidden=""
              aria-label="Exclusion fencing inspection — Reach 1 photo set"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Uploaded evidence
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Exclusion fencing inspection — Reach 1 photo set
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Fri, Sep 11, 2026, 4:15 PM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Twin Cities Complex</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Reach 1</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">K. Ito</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Manual upload</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <p class="bcn-frec__summary typography-body-sm">
                        Fence intact along the full run. One sagging section at station 14
                        retensioned the same day.
                      </p>
                      <div class="stack" data-gap="xs">
                        <div class="bcn-file-row">
                          <span class="bcn-file-row__icon"
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
                                  d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                                ></path>
                                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                <path d="M10 9H8"></path>
                                <path d="M16 13H8"></path>
                                <path d="M16 17H8"></path></svg></span></span
                          ><span
                            class="bcn-file-row__name"
                            title="reach1-fence-inspection-0911.pdf"
                            >reach1-fence-inspection-0911.pdf</span
                          ><span class="bcn-file-row__size">2.4 MB</span
                          ><span class="bcn-file-row__actions"
                            ><span class="bcn-file-row__act"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Download reach1-fence-inspection-0911.pdf"
                                  title="Download reach1-fence-inspection-0911.pdf"
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
                                      <path
                                        d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                      ></path>
                                      <polyline points="7 10 12 15 17 10"></polyline>
                                      <line x1="12" x2="12" y1="15" y2="3"></line></svg
                                  ></span></button></span></span
                          ></span>
                        </div>
                        <div class="bcn-file-row">
                          <span class="bcn-file-row__icon"
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
                                  d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                                ></path>
                                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                <path d="M10 9H8"></path>
                                <path d="M16 13H8"></path>
                                <path d="M16 17H8"></path></svg></span></span
                          ><span
                            class="bcn-file-row__name"
                            title="station14-before-after.jpg"
                            >station14-before-after.jpg</span
                          ><span class="bcn-file-row__size">860 KB</span
                          ><span class="bcn-file-row__actions"
                            ><span class="bcn-file-row__act"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Download station14-before-after.jpg"
                                  title="Download station14-before-after.jpg"
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
                                      <path
                                        d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                      ></path>
                                      <polyline points="7 10 12 15 17 10"></polyline>
                                      <line x1="12" x2="12" y1="15" y2="3"></line></svg
                                  ></span></button></span></span
                          ></span>
                        </div>
                      </div>
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="3 obligations"
                                >3</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="ev-fence-0911"
                              data-fw-link-title="Exclusion fencing inspection — Reach 1 photo set"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="ev-fence-0911"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKM0HYHZPHBXBXTP9J37"
                            data-class="monitor"
                            data-text="exclusion fencing inspection and repair"
                            data-relation="evidence"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Monitor</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Exclusion Fencing Inspection and Repair</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6GA5"
                            data-class="monitor"
                            data-text="inspection and reporting of habitat fencing, stakes and flags"
                            data-relation="evidence"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Monitor</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Inspection and reporting of habitat fencing, stakes and
                                flags</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3757AMQWDRRZPPRX5WQ"
                            data-class="adhere"
                            data-text="exclusion fencing in place during covered activities"
                            data-relation="evidence"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Exclusion fencing in place during covered
                                activities</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="nb-0902"
              hidden=""
              aria-label="Active Swainson's hawk nest confirmed near the Intake C haul road"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Nesting bird observation
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Active Swainson's hawk nest confirmed near the Intake C haul
                          road
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Wed, Sep 2, 2026, 8:20 AM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Intake C — North Delta</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Intake C haul road</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">J. Whitfield</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/nesting-birds"
                          role="button"
                          ><span class="esa-button__label">Open in Nesting Birds</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="1 obligation"
                                >1</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="nb-0902"
                              data-fw-link-title="Active Swainson's hawk nest confirmed near the Intake C haul road"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="nb-0902"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                            data-class="notify"
                            data-text="covered species encounter reporting to the biologist"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Covered Species Encounter Reporting to the
                                Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="br-0712"
              hidden=""
              aria-label="Western pond turtle basking at the forebay edge"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Biological resource observation
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Western pond turtle basking at the forebay edge
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Sun, Jul 12, 2026, 9:45 AM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Byron Tract Forebay</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Byron Tract forebay</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">A. Mendes</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/biological-resources"
                          role="button"
                          ><span class="esa-button__label"
                            >Open in Biological Resources</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="1 obligation"
                                >1</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="br-0712"
                              data-fw-link-title="Western pond turtle basking at the forebay edge"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="br-0712"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                            data-class="notify"
                            data-text="covered species encounter reporting to the biologist"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Covered Species Encounter Reporting to the
                                Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div class="bcn-fw__pane" data-fw-pane-none="" hidden="">
              <div class="esa-empty-state esa-empty-state--md">
                <h3 class="esa-empty-state__title typography-label-md-strong">
                  No records match these filters
                </h3>
                <p class="esa-empty-state__description typography-body-sm">
                  Widen the time range or clear a filter.
                </p>
                <div class="esa-empty-state__actions typography-label-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div slot="panel-2">
    <div
      class="bcn-fw stack"
      data-gap="md"
      data-fw-view="todo"
      data-fw-search="feed-todo"
      data-fw-records='{"obs-ggs":{"source":"biological-resources","age":0,"text":"giant garter snake seen in an irrigation canal at the work edge reach 3 — canal crossing a. mendes biological resource observation"},"obs-hawk":{"source":"compliance-concerns","age":0,"text":"injured swainson&apos;s hawk recovered near a haul road north haul road r. osei compliance concern"},"obs-trbl":{"source":"nesting-birds","age":0,"text":"active tricolored blackbird colony found in the staging buffer staging area 2 j. whitfield nesting bird observation"},"obs-cts":{"source":"compliance-concerns","age":2,"text":"california tiger salamander found inside exclusion fencing reach 1 — upland margin wildlife capture crew compliance concern"},"nb-0902":{"source":"nesting-birds","age":14,"text":"active swainson&apos;s hawk nest confirmed near the intake c haul road intake c haul road j. whitfield nesting bird observation"},"br-0712":{"source":"biological-resources","age":65,"text":"western pond turtle basking at the forebay edge byron tract forebay a. mendes biological resource observation"}}'
    >
      <div class="bcn-swfr bcn-swfr--panel">
        <esa-text-field
          class="bcn-swfr__search"
          size="sm"
          name="feed-todo"
          placeholder="Search records"
          aria-label="Search records"
        ></esa-text-field
        ><esa-select
          class="bcn-swfr__picker"
          size="sm"
          name="feed-todo-source"
          options='[{"label":"All sources","value":""},{"label":"Nesting bird observation","value":"nesting-birds"},{"label":"Compliance concern","value":"compliance-concerns"},{"label":"Biological resource observation","value":"biological-resources"},{"label":"Daily monitoring report","value":"daily-monitoring-reports"},{"label":"Site report","value":"site-reports"},{"label":"Survey","value":"surveys"},{"label":"WEAP training","value":"weap"},{"label":"Uploaded evidence","value":"evidence"}]'
          value=""
          placeholder="All sources"
          cue="Filter by source."
        ></esa-select
        ><esa-button-toggle
          slot="filters"
          size="sm"
          aria-label="How far back"
          data-fw-scope="true"
          data-value="30"
          data-options='[{"label":"30 days","value":"30"},{"label":"90 days","value":"90"},{"label":"All","value":"all"}]'
        ></esa-button-toggle>
        <div class="bcn-swfr__verbs"></div>
      </div>
      <div class="bcn-fw__side" data-fw-side="">
        <div
          class="sidebar"
          data-gap="lg"
          style="--sidebar-width: 21rem; --sidebar-content-min: 55%"
        >
          <aside class="bcn-fw__rail" aria-label="Records that owe a notice">
            <div
              class="bcn-fw__scroll"
              role="listbox"
              aria-label="Records that owe a notice"
            >
              <div class="bcn-fw__group" role="group" aria-label="Today" data-fw-group="">
                <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">
                  Today
                </p>
                <ul class="bcn-fw__list stack" data-gap="xs" role="none">
                  <li class="bcn-frc" data-frc="" data-fw-record="obs-ggs">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="true"
                      data-of-pick="obs-ggs"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source"
                          >Biological resource observation</span
                        ><span class="bcn-frc__when">8:35 AM</span></span
                      ><span class="bcn-frc__label"
                        >Giant garter snake seen in an irrigation canal at the work
                        edge</span
                      >
                    </button>
                  </li>
                  <li class="bcn-frc" data-frc="" data-fw-record="obs-hawk">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="obs-hawk"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Compliance concern</span
                        ><span class="bcn-frc__when">7:10 AM</span></span
                      ><span class="bcn-frc__label"
                        >Injured Swainson's hawk recovered near a haul road</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
              <div
                class="bcn-fw__group"
                role="group"
                aria-label="Yesterday"
                data-fw-group=""
              >
                <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">
                  Yesterday
                </p>
                <ul class="bcn-fw__list stack" data-gap="xs" role="none">
                  <li class="bcn-frc" data-frc="" data-fw-record="obs-trbl">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="obs-trbl"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Nesting bird observation</span
                        ><span class="bcn-frc__when">3:40 PM</span></span
                      ><span class="bcn-frc__label"
                        >Active tricolored blackbird colony found in the staging
                        buffer</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
              <div
                class="bcn-fw__group"
                role="group"
                aria-label="This week"
                data-fw-group=""
              >
                <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">
                  This week
                </p>
                <ul class="bcn-fw__list stack" data-gap="xs" role="none">
                  <li class="bcn-frc" data-frc="" data-fw-record="obs-cts">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="obs-cts"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Compliance concern</span
                        ><span class="bcn-frc__when">Mon 9:05 AM</span></span
                      ><span class="bcn-frc__label"
                        >California tiger salamander found inside exclusion fencing</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
              <div
                class="bcn-fw__group"
                role="group"
                aria-label="This month"
                data-fw-group=""
              >
                <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">
                  This month
                </p>
                <ul class="bcn-fw__list stack" data-gap="xs" role="none">
                  <li class="bcn-frc" data-frc="" data-fw-record="nb-0902">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="nb-0902"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Nesting bird observation</span
                        ><span class="bcn-frc__when">Sep 2</span></span
                      ><span class="bcn-frc__label"
                        >Active Swainson's hawk nest confirmed near the Intake C haul
                        road</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
              <div
                class="bcn-fw__group"
                role="group"
                aria-label="Older"
                data-fw-group=""
                hidden=""
              >
                <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">
                  Older
                </p>
                <ul class="bcn-fw__list stack" data-gap="xs" role="none">
                  <li class="bcn-frc" data-frc="" data-fw-record="br-0712" hidden="">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="br-0712"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source"
                          >Biological resource observation</span
                        ><span class="bcn-frc__when">Jul 12</span></span
                      ><span class="bcn-frc__label"
                        >Western pond turtle basking at the forebay edge</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
              <p class="bcn-fw__none typography-body-sm" data-fw-none="" hidden="">
                Nothing matches these filters.
              </p>
            </div>
          </aside>
          <div class="bcn-fw__detail">
            <section
              class="bcn-fw__pane"
              data-fw-pane="obs-ggs"
              aria-label="Giant garter snake seen in an irrigation canal at the work edge"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Biological resource observation
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Giant garter snake seen in an irrigation canal at the work edge
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Wed, Sep 16, 2026, 8:35 AM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Twin Cities Complex</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Reach 3 — canal crossing</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">A. Mendes</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/biological-resources"
                          role="button"
                          ><span class="esa-button__label"
                            >Open in Biological Resources</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="3 obligations"
                                >3</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="obs-ggs"
                              data-fw-link-title="Giant garter snake seen in an irrigation canal at the work edge"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="obs-ggs"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYV"
                            data-class="notify"
                            data-text="ongoing demonstration of mitigation performance during the permit term"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Ongoing demonstration of mitigation performance during
                                the permit term</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                            data-class="notify"
                            data-text="biological monitor daily communication and immediate reports to the designated biologist"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Biological Monitor daily communication and immediate
                                reports to the Designated Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                            data-class="notify"
                            data-text="covered species encounter reporting to the biologist"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Covered Species Encounter Reporting to the
                                Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="obs-hawk"
              hidden=""
              aria-label="Injured Swainson's hawk recovered near a haul road"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Compliance concern
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Injured Swainson's hawk recovered near a haul road
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Wed, Sep 16, 2026, 7:10 AM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Intake B — North Delta</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">North haul road</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">R. Osei</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/compliance-concerns"
                          role="button"
                          ><span class="esa-button__label"
                            >Open in Compliance Concerns</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="3 obligations"
                                >3</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="obs-hawk"
                              data-fw-link-title="Injured Swainson's hawk recovered near a haul road"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="obs-hawk"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYV"
                            data-class="notify"
                            data-text="ongoing demonstration of mitigation performance during the permit term"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Ongoing demonstration of mitigation performance during
                                the permit term</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                            data-class="notify"
                            data-text="biological monitor daily communication and immediate reports to the designated biologist"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Biological Monitor daily communication and immediate
                                reports to the Designated Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                            data-class="notify"
                            data-text="covered species encounter reporting to the biologist"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Covered Species Encounter Reporting to the
                                Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="obs-trbl"
              hidden=""
              aria-label="Active tricolored blackbird colony found in the staging buffer"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Nesting bird observation
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Active tricolored blackbird colony found in the staging buffer
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Tue, Sep 15, 2026, 3:40 PM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">
                              Southern Forebay &amp; Pumping Plant
                            </dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Staging area 2</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">J. Whitfield</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/nesting-birds"
                          role="button"
                          ><span class="esa-button__label">Open in Nesting Birds</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="3 obligations"
                                >3</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="obs-trbl"
                              data-fw-link-title="Active tricolored blackbird colony found in the staging buffer"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="obs-trbl"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYV"
                            data-class="notify"
                            data-text="ongoing demonstration of mitigation performance during the permit term"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Ongoing demonstration of mitigation performance during
                                the permit term</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                            data-class="notify"
                            data-text="biological monitor daily communication and immediate reports to the designated biologist"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Biological Monitor daily communication and immediate
                                reports to the Designated Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                            data-class="notify"
                            data-text="covered species encounter reporting to the biologist"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Covered Species Encounter Reporting to the
                                Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="obs-cts"
              hidden=""
              aria-label="California tiger salamander found inside exclusion fencing"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Compliance concern
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          California tiger salamander found inside exclusion fencing
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Mon, Sep 14, 2026, 9:05 AM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Twin Cities Complex</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Reach 1 — upland margin</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">Wildlife capture crew</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/compliance-concerns"
                          role="button"
                          ><span class="esa-button__label"
                            >Open in Compliance Concerns</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="3 obligations"
                                >3</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="obs-cts"
                              data-fw-link-title="California tiger salamander found inside exclusion fencing"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="obs-cts"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYV"
                            data-class="notify"
                            data-text="ongoing demonstration of mitigation performance during the permit term"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Ongoing demonstration of mitigation performance during
                                the permit term</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                            data-class="notify"
                            data-text="biological monitor daily communication and immediate reports to the designated biologist"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Biological Monitor daily communication and immediate
                                reports to the Designated Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                            data-class="notify"
                            data-text="covered species encounter reporting to the biologist"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Covered Species Encounter Reporting to the
                                Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="nb-0902"
              hidden=""
              aria-label="Active Swainson's hawk nest confirmed near the Intake C haul road"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Nesting bird observation
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Active Swainson's hawk nest confirmed near the Intake C haul
                          road
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Wed, Sep 2, 2026, 8:20 AM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Intake C — North Delta</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Intake C haul road</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">J. Whitfield</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/nesting-birds"
                          role="button"
                          ><span class="esa-button__label">Open in Nesting Birds</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="1 obligation"
                                >1</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="nb-0902"
                              data-fw-link-title="Active Swainson's hawk nest confirmed near the Intake C haul road"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="nb-0902"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                            data-class="notify"
                            data-text="covered species encounter reporting to the biologist"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Covered Species Encounter Reporting to the
                                Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="br-0712"
              hidden=""
              aria-label="Western pond turtle basking at the forebay edge"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Biological resource observation
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Western pond turtle basking at the forebay edge
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Sun, Jul 12, 2026, 9:45 AM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Byron Tract Forebay</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Byron Tract forebay</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">A. Mendes</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/biological-resources"
                          role="button"
                          ><span class="esa-button__label"
                            >Open in Biological Resources</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="1 obligation"
                                >1</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="br-0712"
                              data-fw-link-title="Western pond turtle basking at the forebay edge"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="br-0712"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                            data-class="notify"
                            data-text="covered species encounter reporting to the biologist"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Covered Species Encounter Reporting to the
                                Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div class="bcn-fw__pane" data-fw-pane-none="" hidden="">
              <div class="esa-empty-state esa-empty-state--md">
                <h3 class="esa-empty-state__title typography-label-md-strong">
                  No records match these filters
                </h3>
                <p class="esa-empty-state__description typography-body-sm">
                  Widen the time range or clear a filter.
                </p>
                <div class="esa-empty-state__actions typography-label-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div slot="panel-3">
    <div
      class="bcn-fw stack"
      data-gap="md"
      data-fw-view="pinned"
      data-fw-search="feed-pinned"
      data-fw-records='{"obs-ggs":{"source":"biological-resources","age":0,"text":"giant garter snake seen in an irrigation canal at the work edge reach 3 — canal crossing a. mendes biological resource observation"},"obs-hawk":{"source":"compliance-concerns","age":0,"text":"injured swainson&apos;s hawk recovered near a haul road north haul road r. osei compliance concern"},"dmr-daily":{"source":"daily-monitoring-reports","age":0,"text":"daily monitoring report — in-water work at the intake reach 2 d. vance daily monitoring report"},"obs-trbl":{"source":"nesting-birds","age":0,"text":"active tricolored blackbird colony found in the staging buffer staging area 2 j. whitfield nesting bird observation"},"obs-cts":{"source":"compliance-concerns","age":2,"text":"california tiger salamander found inside exclusion fencing reach 1 — upland margin wildlife capture crew compliance concern"},"nb-0902":{"source":"nesting-birds","age":14,"text":"active swainson&apos;s hawk nest confirmed near the intake c haul road intake c haul road j. whitfield nesting bird observation"},"br-0712":{"source":"biological-resources","age":65,"text":"western pond turtle basking at the forebay edge byron tract forebay a. mendes biological resource observation"},"ev-quals-0520":{"source":"evidence","age":118,"text":"designated biologist approval letter from cdfw project-wide m. okafor uploaded evidence"}}'
    >
      <div class="bcn-swfr bcn-swfr--panel">
        <esa-text-field
          class="bcn-swfr__search"
          size="sm"
          name="feed-pinned"
          placeholder="Search records"
          aria-label="Search records"
        ></esa-text-field
        ><esa-select
          class="bcn-swfr__picker"
          size="sm"
          name="feed-pinned-source"
          options='[{"label":"All sources","value":""},{"label":"Nesting bird observation","value":"nesting-birds"},{"label":"Compliance concern","value":"compliance-concerns"},{"label":"Biological resource observation","value":"biological-resources"},{"label":"Daily monitoring report","value":"daily-monitoring-reports"},{"label":"Site report","value":"site-reports"},{"label":"Survey","value":"surveys"},{"label":"WEAP training","value":"weap"},{"label":"Uploaded evidence","value":"evidence"}]'
          value=""
          placeholder="All sources"
          cue="Filter by source."
        ></esa-select
        ><esa-button-toggle
          slot="filters"
          size="sm"
          aria-label="How far back"
          data-fw-scope="true"
          data-value="30"
          data-options='[{"label":"30 days","value":"30"},{"label":"90 days","value":"90"},{"label":"All","value":"all"}]'
        ></esa-button-toggle>
        <div class="bcn-swfr__verbs"></div>
      </div>
      <div class="bcn-fw__side" data-fw-side="">
        <div
          class="sidebar"
          data-gap="lg"
          style="--sidebar-width: 21rem; --sidebar-content-min: 55%"
        >
          <aside class="bcn-fw__rail" aria-label="Records touching your pins">
            <div
              class="bcn-fw__scroll"
              role="listbox"
              aria-label="Records touching your pins"
            >
              <div class="bcn-fw__group" role="group" aria-label="Today" data-fw-group="">
                <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">
                  Today
                </p>
                <ul class="bcn-fw__list stack" data-gap="xs" role="none">
                  <li class="bcn-frc" data-frc="" data-fw-record="obs-ggs">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="true"
                      data-of-pick="obs-ggs"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source"
                          >Biological resource observation</span
                        ><span class="bcn-frc__when">8:35 AM</span></span
                      ><span class="bcn-frc__label"
                        >Giant garter snake seen in an irrigation canal at the work
                        edge</span
                      >
                    </button>
                  </li>
                  <li class="bcn-frc" data-frc="" data-fw-record="obs-hawk">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="obs-hawk"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Compliance concern</span
                        ><span class="bcn-frc__when">7:10 AM</span></span
                      ><span class="bcn-frc__label"
                        >Injured Swainson's hawk recovered near a haul road</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
              <div
                class="bcn-fw__group"
                role="group"
                aria-label="Yesterday"
                data-fw-group=""
              >
                <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">
                  Yesterday
                </p>
                <ul class="bcn-fw__list stack" data-gap="xs" role="none">
                  <li class="bcn-frc" data-frc="" data-fw-record="dmr-daily">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="dmr-daily"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Daily monitoring report</span
                        ><span class="bcn-frc__when">5:05 PM</span></span
                      ><span class="bcn-frc__label"
                        >Daily monitoring report — in-water work at the intake</span
                      >
                    </button>
                  </li>
                  <li class="bcn-frc" data-frc="" data-fw-record="obs-trbl">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="obs-trbl"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Nesting bird observation</span
                        ><span class="bcn-frc__when">3:40 PM</span></span
                      ><span class="bcn-frc__label"
                        >Active tricolored blackbird colony found in the staging
                        buffer</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
              <div
                class="bcn-fw__group"
                role="group"
                aria-label="This week"
                data-fw-group=""
              >
                <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">
                  This week
                </p>
                <ul class="bcn-fw__list stack" data-gap="xs" role="none">
                  <li class="bcn-frc" data-frc="" data-fw-record="obs-cts">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="obs-cts"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Compliance concern</span
                        ><span class="bcn-frc__when">Mon 9:05 AM</span></span
                      ><span class="bcn-frc__label"
                        >California tiger salamander found inside exclusion fencing</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
              <div
                class="bcn-fw__group"
                role="group"
                aria-label="This month"
                data-fw-group=""
              >
                <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">
                  This month
                </p>
                <ul class="bcn-fw__list stack" data-gap="xs" role="none">
                  <li class="bcn-frc" data-frc="" data-fw-record="nb-0902">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="nb-0902"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Nesting bird observation</span
                        ><span class="bcn-frc__when">Sep 2</span></span
                      ><span class="bcn-frc__label"
                        >Active Swainson's hawk nest confirmed near the Intake C haul
                        road</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
              <div
                class="bcn-fw__group"
                role="group"
                aria-label="Older"
                data-fw-group=""
                hidden=""
              >
                <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">
                  Older
                </p>
                <ul class="bcn-fw__list stack" data-gap="xs" role="none">
                  <li class="bcn-frc" data-frc="" data-fw-record="br-0712" hidden="">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="br-0712"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source"
                          >Biological resource observation</span
                        ><span class="bcn-frc__when">Jul 12</span></span
                      ><span class="bcn-frc__label"
                        >Western pond turtle basking at the forebay edge</span
                      >
                    </button>
                  </li>
                  <li
                    class="bcn-frc"
                    data-frc=""
                    data-fw-record="ev-quals-0520"
                    hidden=""
                  >
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="ev-quals-0520"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Uploaded evidence</span
                        ><span class="bcn-frc__when">May 20</span></span
                      ><span class="bcn-frc__label"
                        >Designated Biologist approval letter from CDFW</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
              <p class="bcn-fw__none typography-body-sm" data-fw-none="" hidden="">
                Nothing matches these filters.
              </p>
            </div>
          </aside>
          <div class="bcn-fw__detail">
            <section
              class="bcn-fw__pane"
              data-fw-pane="obs-ggs"
              aria-label="Giant garter snake seen in an irrigation canal at the work edge"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Biological resource observation
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Giant garter snake seen in an irrigation canal at the work edge
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Wed, Sep 16, 2026, 8:35 AM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Twin Cities Complex</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Reach 3 — canal crossing</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">A. Mendes</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/biological-resources"
                          role="button"
                          ><span class="esa-button__label"
                            >Open in Biological Resources</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="2 obligations"
                                >2</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="obs-ggs"
                              data-fw-link-title="Giant garter snake seen in an irrigation canal at the work edge"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="obs-ggs"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                            data-class="notify"
                            data-text="covered species encounter reporting to the biologist"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Covered Species Encounter Reporting to the
                                Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEM"
                            data-class="adhere"
                            data-text="work stoppage on covered species encounter"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Work Stoppage on Covered Species Encounter</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="obs-hawk"
              hidden=""
              aria-label="Injured Swainson's hawk recovered near a haul road"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Compliance concern
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Injured Swainson's hawk recovered near a haul road
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Wed, Sep 16, 2026, 7:10 AM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Intake B — North Delta</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">North haul road</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">R. Osei</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/compliance-concerns"
                          role="button"
                          ><span class="esa-button__label"
                            >Open in Compliance Concerns</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="2 obligations"
                                >2</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="obs-hawk"
                              data-fw-link-title="Injured Swainson's hawk recovered near a haul road"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="obs-hawk"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                            data-class="notify"
                            data-text="covered species encounter reporting to the biologist"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Covered Species Encounter Reporting to the
                                Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEM"
                            data-class="adhere"
                            data-text="work stoppage on covered species encounter"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Work Stoppage on Covered Species Encounter</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="dmr-daily"
              hidden=""
              aria-label="Daily monitoring report — in-water work at the intake"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Daily monitoring report
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Daily monitoring report — in-water work at the intake
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Tue, Sep 15, 2026, 5:05 PM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Intake B — North Delta</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Reach 2</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">D. Vance</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Event Hub</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/daily-monitoring-reports"
                          role="button"
                          ><span class="esa-button__label"
                            >Open in Daily Monitoring Reports</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="1 obligation"
                                >1</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="dmr-daily"
                              data-fw-link-title="Daily monitoring report — in-water work at the intake"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="dmr-daily"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3757AMQWDRRZPPRX5X5"
                            data-class="adhere"
                            data-text="dewatering pump shutdown"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Dewatering pump shutdown</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="obs-trbl"
              hidden=""
              aria-label="Active tricolored blackbird colony found in the staging buffer"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Nesting bird observation
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Active tricolored blackbird colony found in the staging buffer
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Tue, Sep 15, 2026, 3:40 PM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">
                              Southern Forebay &amp; Pumping Plant
                            </dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Staging area 2</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">J. Whitfield</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/nesting-birds"
                          role="button"
                          ><span class="esa-button__label">Open in Nesting Birds</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="1 obligation"
                                >1</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="obs-trbl"
                              data-fw-link-title="Active tricolored blackbird colony found in the staging buffer"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="obs-trbl"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                            data-class="notify"
                            data-text="covered species encounter reporting to the biologist"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Covered Species Encounter Reporting to the
                                Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="obs-cts"
              hidden=""
              aria-label="California tiger salamander found inside exclusion fencing"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Compliance concern
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          California tiger salamander found inside exclusion fencing
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Mon, Sep 14, 2026, 9:05 AM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Twin Cities Complex</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Reach 1 — upland margin</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">Wildlife capture crew</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/compliance-concerns"
                          role="button"
                          ><span class="esa-button__label"
                            >Open in Compliance Concerns</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="2 obligations"
                                >2</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="obs-cts"
                              data-fw-link-title="California tiger salamander found inside exclusion fencing"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="obs-cts"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                            data-class="notify"
                            data-text="covered species encounter reporting to the biologist"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Covered Species Encounter Reporting to the
                                Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEM"
                            data-class="adhere"
                            data-text="work stoppage on covered species encounter"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Adhere</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Work Stoppage on Covered Species Encounter</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="nb-0902"
              hidden=""
              aria-label="Active Swainson's hawk nest confirmed near the Intake C haul road"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Nesting bird observation
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Active Swainson's hawk nest confirmed near the Intake C haul
                          road
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Wed, Sep 2, 2026, 8:20 AM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Intake C — North Delta</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Intake C haul road</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">J. Whitfield</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/nesting-birds"
                          role="button"
                          ><span class="esa-button__label">Open in Nesting Birds</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="1 obligation"
                                >1</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="nb-0902"
                              data-fw-link-title="Active Swainson's hawk nest confirmed near the Intake C haul road"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="nb-0902"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                            data-class="notify"
                            data-text="covered species encounter reporting to the biologist"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Covered Species Encounter Reporting to the
                                Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="br-0712"
              hidden=""
              aria-label="Western pond turtle basking at the forebay edge"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Biological resource observation
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Western pond turtle basking at the forebay edge
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Sun, Jul 12, 2026, 9:45 AM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Byron Tract Forebay</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Byron Tract forebay</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">A. Mendes</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Fulcrum</dd>
                          </div>
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/biological-resources"
                          role="button"
                          ><span class="esa-button__label"
                            >Open in Biological Resources</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="1 obligation"
                                >1</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="br-0712"
                              data-fw-link-title="Western pond turtle basking at the forebay edge"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="br-0712"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                            data-class="notify"
                            data-text="covered species encounter reporting to the biologist"
                            data-relation="triggered"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Covered Species Encounter Reporting to the
                                Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="ev-quals-0520"
              hidden=""
              aria-label="Designated Biologist approval letter from CDFW"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Uploaded evidence
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Designated Biologist approval letter from CDFW
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Wed, May 20, 2026, 4:00 PM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Twin Cities Complex</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Location</dt>
                            <dd class="typography-body-sm">Project-wide</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Submitted by</dt>
                            <dd class="typography-body-sm">M. Okafor</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Channel</dt>
                            <dd class="typography-body-sm">Manual upload</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <div class="stack" data-gap="xs">
                        <div class="bcn-file-row">
                          <span class="bcn-file-row__icon"
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
                                  d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                                ></path>
                                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                <path d="M10 9H8"></path>
                                <path d="M16 13H8"></path>
                                <path d="M16 17H8"></path></svg></span></span
                          ><span
                            class="bcn-file-row__name"
                            title="cdfw-db-approval-2026-05.pdf"
                            >cdfw-db-approval-2026-05.pdf</span
                          ><span class="bcn-file-row__size">310 KB</span
                          ><span class="bcn-file-row__actions"
                            ><span class="bcn-file-row__act"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Download cdfw-db-approval-2026-05.pdf"
                                  title="Download cdfw-db-approval-2026-05.pdf"
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
                                      <path
                                        d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                      ></path>
                                      <polyline points="7 10 12 15 17 10"></polyline>
                                      <line x1="12" x2="12" y1="15" y2="3"></line></svg
                                  ></span></button></span></span
                          ></span>
                        </div>
                      </div>
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="1 obligation"
                                >1</span
                              ></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="ev-quals-0520"
                              data-fw-link-title="Designated Biologist approval letter from CDFW"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul
                          class="bcn-frec__cards stack"
                          data-gap="sm"
                          data-fw-duties="ev-quals-0520"
                        >
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYGC"
                            data-class="roster"
                            data-text="approved wildlife handler"
                            data-relation="evidence"
                            data-pinned=""
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Roster</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Approved Wildlife Handler</span
                              ><esa-tooltip
                                text="This record shows the obligation being met"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="evidence"
                                  >Evidence</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Unpin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="true"
                                    data-of-pin=""
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
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
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div class="bcn-fw__pane" data-fw-pane-none="" hidden="">
              <div class="esa-empty-state esa-empty-state--md">
                <h3 class="esa-empty-state__title typography-label-md-strong">
                  No records match these filters
                </h3>
                <p class="esa-empty-state__description typography-body-sm">
                  Widen the time range or clear a filter.
                </p>
                <div class="esa-empty-state__actions typography-label-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></div
></esa-tab-layout>
```

## Styles
```css
/* Type comes from .typography-body-sm — help and error are one size at every
       control step, so they name the composite directly rather than mapping. */
/* Both nodes are ALWAYS in the DOM (see render()), so the gap is opt-IN rather
       than collapsed away. Deliberately not display:none when empty — that removes
       the node from the accessibility tree, and a live region that is not in the tree
       cannot announce anything. An empty <p> with no margin occupies no space.

       .is-shown rather than :empty: Lit's template whitespace leaves a text node
       inside the element, and browsers still disagree about whether :empty ignores
       whitespace-only children (Selectors L4 says yes, L3 says no). A class is
       deterministic; :empty here would silently leave 4px of dead space under every
       clean field in some engines and not others. */
.help,
.error {
  margin: 0;
}
.typography-heading-md {
  font-family: var(--typography-heading-md-font-family);
  font-size: var(--typography-heading-md-font-size);
  font-weight: var(--typography-heading-md-font-weight);
  line-height: var(--typography-heading-md-line-height);
  letter-spacing: var(--typography-heading-md-letter-spacing);
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-xs {
  font-family: var(--typography-label-xs-font-family);
  font-size: var(--typography-label-xs-font-size);
  font-weight: var(--typography-label-xs-font-weight);
  line-height: var(--typography-label-xs-line-height);
  letter-spacing: var(--typography-label-xs-letter-spacing);
}
.typography-label-sm {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-xs-strong {
  font-family: var(--typography-label-xs-strong-font-family);
  font-size: var(--typography-label-xs-strong-font-size);
  font-weight: var(--typography-label-xs-strong-font-weight);
  line-height: var(--typography-label-xs-strong-line-height);
  letter-spacing: var(--typography-label-xs-strong-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
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
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
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
.esa-card--elevated {
  --_card-border: transparent;
  box-shadow: var(--elevation-2, 0 2px 12px 0 #0000000a);
}
.esa-card--filled {
  --_card-bg: var(--color-background-elevation-sunken, #f0f0f0);
  --_card-border: transparent;
}
.esa-card--header-primary .esa-card__header {
  --_card-header-bg: var(--color-background-brand, #46a758);
  --_card-header-color: var(--color-content-default-knockout, #fcfcfc);
}
.esa-card--header-muted .esa-card__header {
  --_card-header-bg: var(--color-background-elevation-sunken, #f0f0f0);
}
.esa-card--padding-none {
  --_card-padding: 0;
}
.esa-card--padding-compact {
  --_card-padding: var(--spacing-300, 0.75rem);
}
.esa-card--padding-spacious {
  --_card-padding: var(--spacing-700, 3rem);
}
.esa-card__header {
  padding: var(--spacing-400, 1rem) var(--_card-padding);
  background: var(--_card-header-bg);
  color: var(--_card-header-color);
  border-bottom: var(--border-width-default, 1px) solid var(--_card-header-border);
  justify-content: space-between;
  align-items: center;
  min-height: 56px;
  display: flex;
}
.esa-card__header-content {
  align-items: center;
  gap: var(--spacing-300, 0.75rem);
  display: flex;
}
.esa-card__titles {
  gap: var(--spacing-050, 0.125rem);
  flex-direction: column;
  display: flex;
}
.esa-card__title {
  color: inherit;
  margin: 0;
}
.esa-card__subtitle {
  color: var(--color-content-default-secondary, #646464);
  margin: 0;
}
.esa-card--header-primary .esa-card__subtitle {
  color: var(--color-content-on-brand, #fffc);
}
.esa-card__meta {
  gap: var(--spacing-100, 0.25rem) var(--spacing-500, 1.5rem);
  margin: var(--spacing-050, 0.125rem) 0 0;
  flex-wrap: wrap;
  display: flex;
}
.esa-card__meta-pair {
  align-items: baseline;
  gap: var(--spacing-100, 0.25rem);
  min-width: 0;
  display: flex;
}
.esa-card__meta dt {
  font-size: var(--_card-meta-label-size);
  font-weight: var(--font-weight-medium, 500);
  color: var(--_card-meta-label-color);
}
.esa-card__meta dd {
  font-size: var(--_card-meta-value-size);
  color: inherit;
  margin: 0;
}
.esa-card--header-primary .esa-card__meta dt {
  color: #fffc;
}
.esa-card__icon {
  color: inherit;
  flex-shrink: 0;
}
.esa-card__actions {
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
  display: flex;
}
.esa-card__body {
  padding: var(--_card-padding);
}
.esa-card__footer {
  padding: var(--spacing-300, 0.75rem) var(--_card-padding);
  border-top: var(--border-width-default, 1px) solid var(--_card-header-border);
  background: var(--color-background-elevation-sunken, #f0f0f0);
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
.bcn-ev-staging__item .esa-card {
  overflow: visible;
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
.bcn-ev-targets__item[data-receiving] .esa-card {
  border-color: var(--color-background-brand-muted);
  background: color-mix(in srgb, var(--color-background-brand-muted) 5%, transparent);
}
.bcn-ev-targets__item[data-blocked] .esa-card {
  opacity: 0.45;
}
.bcn-ev-targets__item .esa-card {
  overflow: visible;
}
.sidebar-toggle {
  border-radius: var(--spacing-050);
  width: 32px;
  height: 32px;
  color: var(--bcn-gray-600);
  cursor: pointer;
  background: 0 0;
  border: none;
  justify-content: center;
  align-items: center;
  padding: 0;
  transition:
    background 0.15s,
    color 0.15s;
  display: flex;
}
.sidebar-toggle:hover {
  background: var(--bcn-gray-200);
  color: var(--color-background-brand);
}
.sidebar-toggle:focus-visible {
  outline: 2px solid var(--color-background-brand);
  outline-offset: 2px;
}
.sidebar-toggle__icon {
  transition: transform 0.15s;
}
.sidebar-toggle--collapsed .sidebar-toggle__icon {
  transform: scaleX(-1);
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
.sidebar-header {
  padding: var(--spacing-300) var(--spacing-400);
  flex-shrink: 0;
  transition: padding 0.2s ease-in-out;
}
.side-nav.collapsed .sidebar-header {
  padding: var(--spacing-300) var(--spacing-200);
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
.bcn-lob__class {
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
.bcn-lob[data-class="adhere"] {
  --_hue: var(--color-obligation);
}
.bcn-swoc[data-class="monitor"],
.bcn-loc[data-class="monitor"],
.bcn-lob[data-class="monitor"] {
  --_hue: #ff7c43;
}
.bcn-swoc[data-class="notify"],
.bcn-loc[data-class="notify"],
.bcn-lob[data-class="notify"] {
  --_hue: #ffa600;
}
.bcn-swoc[data-class="roster"],
.bcn-loc[data-class="roster"],
.bcn-lob[data-class="roster"],
.bcn-loc[data-class="action"],
.bcn-lac[data-class="action"] {
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
.bcn-loc__reqs {
  padding: 0 var(--spacing-300) var(--spacing-150)
    calc(var(--spacing-300) + var(--_req-indent));
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-swoc__req,
.bcn-loc__req {
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
.bcn-loc__req-name {
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
.bcn-frc {
  list-style: none;
}
.bcn-frc[hidden] {
  display: none;
}
.bcn-frc__row {
  gap: var(--spacing-050);
  inline-size: 100%;
  padding: var(--spacing-150) var(--spacing-300);
  border: 1px solid var(--color-border-default-subtle);
  background: var(--color-background-default);
  font: inherit;
  color: var(--color-content-default);
  text-align: start;
  cursor: pointer;
  border-radius: 6px;
  flex-direction: column;
  font-size: 0.8125rem;
  transition:
    border-color 0.12s,
    background-color 0.12s;
  display: flex;
}
.bcn-frc__row:hover {
  border-color: var(--color-border-default-strong);
}
.bcn-frc__row:focus-visible {
  outline: 2px solid var(--color-border-default-focus);
  outline-offset: 2px;
}
.bcn-frc__row[aria-selected="true"] {
  border-color: var(--color-background-brand);
  background: var(--color-background-brand);
  color: var(--color-content-on-brand);
}
.bcn-frc__row[aria-selected="true"] .bcn-frc__from,
.bcn-frc__row[aria-selected="true"] .bcn-frc__when {
  color: var(--color-content-on-brand);
}
.bcn-frc__row[aria-selected="true"] .bcn-frc__class {
  background: color-mix(in srgb, var(--color-content-on-brand) 18%, transparent);
  color: var(--color-content-on-brand);
}
.bcn-frc__from {
  align-items: center;
  gap: var(--spacing-150);
  min-inline-size: 0;
  color: var(--color-content-default-secondary);
  font-size: 0.75rem;
  display: flex;
}
.bcn-frc__source {
  text-overflow: ellipsis;
  white-space: nowrap;
  min-inline-size: 0;
  overflow: hidden;
}
.bcn-frc__when {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  flex-shrink: 0;
  margin-inline-start: auto;
}
.bcn-frc__class {
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
  background: color-mix(in srgb, var(--_hue) 14%, white);
  color: color-mix(in srgb, var(--_hue) 78%, black);
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1.5;
}
.bcn-frc[data-class="adhere"] {
  --_hue: var(--color-obligation);
}
.bcn-frc[data-class="monitor"] {
  --_hue: #ff7c43;
}
.bcn-frc[data-class="notify"] {
  --_hue: #ffa600;
}
.bcn-frc[data-class="roster"] {
  --_hue: var(--color-action);
}
.bcn-frc__label {
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  line-height: 1.4;
  overflow: hidden;
}
.bcn-foc__main {
  cursor: default;
}
.bcn-foc__verbs {
  align-items: center;
  gap: var(--spacing-200);
  flex-shrink: 0;
  margin-inline-start: auto;
  display: inline-flex;
}
.bcn-foc__title {
  cursor: inherit;
}
.bcn-foc__title:hover {
  text-decoration: none;
}
.bcn-foc__pin[aria-pressed="true"] {
  opacity: 1;
  color: var(--color-content-brand);
}
.bcn-foc__pin[aria-pressed="true"] svg {
  fill: currentColor;
}
.bcn-foc__relation {
  padding: 0 var(--spacing-150);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-sunken);
  color: var(--color-content-default-secondary);
  flex-shrink: 0;
  font-size: 0.6875rem;
  line-height: 1.5;
}
.bcn-foc__relation[data-relation="triggered"] {
  color: #996400;
  background: #fff1d6;
}
.bcn-frec {
  border-radius: var(--radius-md);
  box-shadow: var(--elevation-2);
  --card-header-bg: color-mix(
    in srgb,
    var(--color-background-elevation-sunken) 45%,
    var(--color-background-default)
  );
}
.bcn-frec__head {
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--spacing-400);
  inline-size: 100%;
  padding-block: var(--spacing-200);
  display: flex;
}
.bcn-frec__heading {
  gap: var(--spacing-150);
  flex-direction: column;
  min-inline-size: 0;
  display: flex;
}
.bcn-frec__source {
  align-items: center;
  gap: var(--spacing-200);
  color: var(--color-content-default-secondary);
  margin: 0;
  display: flex;
}
.bcn-frec__title {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-frec__meta {
  gap: var(--spacing-150) var(--spacing-600);
  margin: var(--spacing-200) 0 0;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  display: grid;
}
.bcn-frec__pair {
  align-items: baseline;
  gap: var(--spacing-300);
  grid-template-columns: 7rem minmax(0, 1fr);
  display: grid;
}
.bcn-frec__pair dt {
  color: var(--color-content-default-secondary);
}
.bcn-frec__pair dd {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-frec__body {
  padding-block: var(--spacing-100);
}
.bcn-frec__summary {
  max-inline-size: 70ch;
  color: var(--color-content-default);
  margin: 0;
}
.bcn-frec__count {
  align-items: center;
  gap: var(--spacing-200);
  color: var(--color-content-default);
  margin: 0;
  display: flex;
}
.bcn-frec__cards {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-frec__cards:empty {
  display: none;
}
.bcn-frec__none {
  color: var(--color-content-default-tertiary);
  margin: 0;
}
.bcn-frec__none[hidden],
.bcn-fw__side[hidden],
.bcn-fw__pane[hidden],
.bcn-fw__group[hidden],
.bcn-fw__none[hidden] {
  display: none;
}
.bcn-fw__rail {
  --_rail-bg: color-mix(
    in srgb,
    var(--color-background-elevation-sunken) 30%,
    var(--color-background-default)
  );
  top: var(--spacing-400);
  max-block-size: calc(100vh - 52px - var(--spacing-400) - var(--spacing-900));
  overflow-anchor: none;
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-md);
  background: var(--_rail-bg);
  flex-direction: column;
  align-self: start;
  display: flex;
  position: sticky;
  overflow: hidden;
}
.bcn-fw__scroll {
  padding: 0 var(--spacing-300) var(--spacing-300);
  overflow-y: auto;
}
.bcn-fw__group + .bcn-fw__group {
  margin-block-start: var(--spacing-100);
}
.bcn-fw__group-head {
  z-index: 1;
  padding: var(--spacing-300) 2px var(--spacing-150);
  background: var(--_rail-bg);
  box-shadow: 0 -2px 0 var(--_rail-bg);
  color: var(--color-content-default-secondary);
  margin: 0;
  position: sticky;
  top: 0;
}
.bcn-fw__list {
  margin: 0;
  padding: 2px;
}
.bcn-fw__none {
  padding: var(--spacing-300) var(--spacing-100);
  color: var(--color-content-default-tertiary);
  margin: 0;
}
.bcn-fwl__to {
  align-items: baseline;
  gap: var(--spacing-300);
  grid-template-columns: 5rem minmax(0, 1fr);
  margin: 0;
  display: grid;
}
.bcn-fwl__to dt {
  color: var(--color-content-default-secondary);
}
.bcn-fwl__to dd {
  color: var(--color-content-default);
  margin: 0;
}
.typography-heading-md {
  font-family: var(--typography-heading-md-font-family);
  font-size: var(--typography-heading-md-font-size);
  font-weight: var(--typography-heading-md-font-weight);
  line-height: var(--typography-heading-md-line-height);
  letter-spacing: var(--typography-heading-md-letter-spacing);
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-xs {
  font-family: var(--typography-label-xs-font-family);
  font-size: var(--typography-label-xs-font-size);
  font-weight: var(--typography-label-xs-font-weight);
  line-height: var(--typography-label-xs-line-height);
  letter-spacing: var(--typography-label-xs-letter-spacing);
}
.typography-label-sm {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-xs-strong {
  font-family: var(--typography-label-xs-strong-font-family);
  font-size: var(--typography-label-xs-strong-font-size);
  font-weight: var(--typography-label-xs-strong-font-weight);
  line-height: var(--typography-label-xs-strong-line-height);
  letter-spacing: var(--typography-label-xs-strong-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
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
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.bcn-component-picker__trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
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
.bcn-swfr {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-500);
  border-top: 1px solid var(--color-border-default-subtle);
  color: var(--color-content-default);
  flex-wrap: wrap;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-swfr--inset {
  border-top: none;
}
.bcn-swfr--panel {
  padding: var(--spacing-250) var(--spacing-400);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-sunken);
}
.bcn-swfr--panel .bcn-swfr__search,
.bcn-swfr--panel .bcn-swfr__picker {
  --color-background-field: var(--color-background-elevation-raised);
}
.bcn-swfr__search {
  flex: 180px;
  max-width: 360px;
}
.bcn-swfr__picker {
  flex: 0 180px;
  min-width: 140px;
}
.bcn-swfr__verbs {
  align-items: center;
  gap: var(--spacing-200);
  margin-left: auto;
  display: inline-flex;
}
.bcn-swfr__verbs:empty {
  display: none;
}
.bcn-file-row {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-100) var(--spacing-300);
  border: var(--form-border-width, 1px) solid var(--color-border-default);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised);
  grid-template-columns: auto 1fr auto auto;
  font-size: 0.875rem;
  display: grid;
}
.bcn-file-row__icon {
  color: var(--color-content-default-secondary);
  display: inline-flex;
}
.bcn-file-row__name {
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  color: var(--color-content-default);
  overflow: hidden;
}
.bcn-file-row__size {
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  font-size: 0.8125rem;
}
.bcn-file-row__actions {
  align-items: center;
  gap: var(--spacing-050);
  display: inline-flex;
}
.bcn-file-row__act {
  display: inline-flex;
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
.esa-empty-state {
  --_empty-icon-size: var(--empty-state-icon-size-md, 48px);
  --_empty-gap: var(--spacing-200, 0.5rem);
  text-align: center;
  padding: var(--spacing-600, 2rem) var(--spacing-400, 1rem);
  justify-content: center;
  align-items: center;
  gap: var(--_empty-gap);
  flex-direction: column;
  display: flex;
}
.esa-empty-state--xs {
  --_empty-icon-size: var(--empty-state-icon-size-xs, 24px);
  padding: var(--spacing-300, 0.75rem) var(--spacing-200, 0.5rem);
}
.esa-empty-state--sm {
  --_empty-icon-size: var(--empty-state-icon-size-sm, 32px);
  padding: var(--spacing-400, 1rem) var(--spacing-300, 0.75rem);
}
.esa-empty-state--lg {
  --_empty-icon-size: var(--empty-state-icon-size-lg, 64px);
  padding: var(--spacing-800, 4rem) var(--spacing-400, 1rem);
}
.esa-empty-state__icon {
  color: var(--color-content-default-secondary, #646464);
  margin-bottom: var(--spacing-100, 0.25rem);
  display: inline-flex;
}
.esa-empty-state__icon svg {
  width: var(--_empty-icon-size);
  height: var(--_empty-icon-size);
}
.esa-empty-state__title {
  color: var(--color-content-default, #202020);
  margin: 0;
}
.esa-empty-state__description {
  color: var(--color-content-default-secondary, #646464);
  max-width: 360px;
  margin: 0;
}
.esa-empty-state__actions {
  margin-top: var(--spacing-200, 0.5rem);
}
.esa-empty-state__actions:empty {
  display: none;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
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
.repel {
  --gap: var(--spacing-400, 1rem);
  --align: center;
  gap: var(--gap);
  align-items: var(--align);
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
}
.sidebar {
  --gap: var(--spacing-500, 1.5rem);
  --sidebar-width: 18rem;
  --sidebar-content-min: 60%;
  gap: var(--gap);
  flex-wrap: wrap;
  display: flex;
}
.sidebar > :first-child {
  flex-basis: var(--sidebar-width);
  flex-grow: 1;
}
.sidebar > :last-child {
  min-inline-size: var(--sidebar-content-min);
  flex-grow: 999;
  flex-basis: 0;
}
.sidebar[data-side="end"] > :first-child {
  order: 2;
}
```

## Tokens
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-200`: #dcdcdc _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-600`: #656565 _(component)_
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
- `--card-bg`: #fcfcfc _(component)_
- `--card-border-color`: #dcdcdc _(component)_
- `--card-header-bg`: transparent _(component)_
- `--color-action`: #d45087 _(component)_
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-brand-hover`: #00474f _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-focus`: #3e9b4f _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-brand`: #fcfcfc _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--color-obligation`: #f95d6a _(component)_
- `--elevation-2`: 0 2px 12px 0 #0000000a _(semantic)_
- `--empty-state-icon-size-lg`: 64px _(component)_
- `--empty-state-icon-size-md`: 48px _(component)_
- `--empty-state-icon-size-sm`: 32px _(component)_
- `--empty-state-icon-size-xs`: 24px _(component)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-size-050`: clamp(.5rem, .44rem + .3vw, .625rem) _(primitive)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--font-weight-medium`: 500 _(component)_
- `--form-border-width`: 1px _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-md`: .25rem _(semantic)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
- `--spacing-700`: 3rem _(primitive)_
- `--spacing-800`: 4rem _(primitive)_
- `--spacing-900`: 6rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 350 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-body-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-body-sm-font-weight`: 350 _(semantic)_
- `--typography-body-sm-letter-spacing`: .01em _(semantic)_
- `--typography-body-sm-line-height`: 1.6 _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-heading-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-heading-md-font-size`: clamp(1.125rem, .98rem + .72vw, 1.5rem) _(semantic)_
- `--typography-heading-md-font-weight`: 550 _(semantic)_
- `--typography-heading-md-letter-spacing`: -.01em _(semantic)_
- `--typography-heading-md-line-height`: 1.3 _(semantic)_
- `--typography-label-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-font-weight`: 500 _(semantic)_
- `--typography-label-md-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-line-height`: 1.6 _(semantic)_
- `--typography-label-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-strong-font-weight`: 550 _(semantic)_
- `--typography-label-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-strong-line-height`: 1.6 _(semantic)_
- `--typography-label-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-font-weight`: 500 _(semantic)_
- `--typography-label-sm-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-line-height`: 1.6 _(semantic)_
- `--typography-label-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-label-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-strong-line-height`: 1.6 _(semantic)_
- `--typography-label-xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-xs-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-label-xs-font-weight`: 500 _(semantic)_
- `--typography-label-xs-letter-spacing`: .01em _(semantic)_
- `--typography-label-xs-line-height`: 1.6 _(semantic)_
- `--typography-label-xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-label-xs-strong-font-weight`: 550 _(semantic)_
- `--typography-label-xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-xs-strong-line-height`: 1.6 _(semantic)_
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
- `--typography-microcopy-2xs-subtle-font-weight`: 350 _(semantic)_
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
- `--typography-microcopy-xs-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-subtle-line-height`: 1 _(semantic)_
- `--typography-title-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-title-sm-strong-font-size`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(semantic)_
- `--typography-title-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-title-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-title-sm-strong-line-height`: 1.6 _(semantic)_
