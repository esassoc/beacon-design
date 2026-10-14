# Navigator

Step 1's queue as the navigator: each commitment with its state (Parsing, N to review, N requirements, Confirmed). It grows while the scan is still running. Click to go to a commitment; in One at a time it pages.

## Key decisions
- All / Needs a person filters the navigator and the document together. Needs a person is the exceptions-first order the brief asks for.
- Recommendation: Continuous scroll with Needs a person as the default working view; One at a time stays as an option. The brief has the comparison.

## Markup
```html
<nav class="bcn-sw3rev__nav" aria-label="Commitments">
  <ol class="bcn-sw3rev__navlist" data-rev-nav="">
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.1" data-state="ready" data-current="">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.1</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Covered Species Observations</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >3 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.2" data-state="flagged">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.2</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Covered Species Injury</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 to review</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.3" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.3</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Covered Species Capture, Handling, and Reporting</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.4" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.4</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Pesticide, Fungicide, and Herbicide Use</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >4 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.5" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.5</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Prohibition of Rodenticide and Poison Use</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.6" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.6</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Fertilizer Use</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.7" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.7</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Daily Work Restrictions</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >4 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.8" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.8</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Artificial Lighting at Night</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.9" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.9</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Lighting on Intake Structure</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.10" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.10</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Visual Barriers Along Access Routes for Nighttime Activities</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.11" data-state="flagged">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.11</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Speed Limits</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 to review</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.12" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.12</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Wildlife Road-crossing Structures</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >3 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.13" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.13</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Precipitation Work Limit</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >4 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.14" data-state="flagged">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.14</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Daily Entrapment Inspections</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 to review</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.15" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.15</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Pipes, Culverts, and Other Materials Inspections</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >3 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.16" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.16</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Disposal of Spoils, Reusable Tunnel Material, and Dredged Material</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >7 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.17" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.17</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Electrical Power Line Support Placement</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.17.1" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.17.1</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Transmission Line Strikes</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.18" data-state="flagged">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.18</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Vegetation Management</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 to review</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.19" data-state="flagged">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.19</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Prevention of Spread of Invasive Species</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 to review</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.19.1" data-state="flagged">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.19.1</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Invasive Plant Species Monitoring, Management, and Control Plan</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 to review</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.19.2" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.19.2</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Invasive Plant Species Management</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.20" data-state="flagged">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.20</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Hazards to Covered Species</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 to review</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.21" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.21</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Hazardous Materials Management Plans</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >10 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.22" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.22</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Spill Prevention, Control, and Countermeasure Plans</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >15 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.23" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.23</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Groundwater Testing and Monitoring Plan</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.24" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.24</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Detection of Underground and Natural Gas Wells</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.25" data-state="flagged">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.25</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Stormwater Pollution Prevention Plans</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 to review</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.26" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.26</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Erosion and Sediment Control Plans</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >15 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.27" data-state="flagged">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.27</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Erosion Control Stabilization Prohibitions</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 to review</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.28" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.28</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Monofilament Netting</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.29" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.29</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Fugitive Dust Control</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >4 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.30" data-state="flagged">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.30</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Construction Mercury Management and Monitoring Plan</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 to review</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.31.1" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.31.1</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Preconstruction Geotechnical Exploration</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >3 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.31.2" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.31.2</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Construction Work Windows</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >7 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.33" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.33</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Underwater Sound Abatement Plan</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >11 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.34" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.34</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Pile Driving Plan</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.35" hidden="">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.35</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Fish Salvage Plan</span
          ><span
            class="bcn-sw3rev__navmeta typography-microcopy-sm"
            data-nav-meta=""
          ></span
        ></span>
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.36" data-state="flagged">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.36</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Barge Operations Plan</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 to review</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.37" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.37</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Dewatering Plan</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >5 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.38" data-state="flagged">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.38</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Preconstruction Survey Protocols</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 to review</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.39" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.39</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">CTS Avoidance</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >3 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.39.1" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.39.1</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Vehicle Strikes</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.40" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.40</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Breeding Habitat Avoidance Near Conserved Lands</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >3 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.41" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.41</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Preconstruction Activities, SCADA and Transmission Line Construction and
            Maintenance, Access Road Construction and Maintenance Activities</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >5 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.42" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.42</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">CTS Surveys</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >4 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.42.1" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.42.1</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Preconstruction Watering</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.42.2" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.42.2</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Mowing</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >4 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.43" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.43</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Exclusion Barrier Installation and Maintenance</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >9 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.44" data-state="flagged">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.44</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Seasonal Work Window</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 to review</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.45" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.45</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Rain Forecast</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >3 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.46" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.46</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Time of Day Work Restriction</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.47" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.47</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Night Work</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.48" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.48</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Initial Site Clearing and Monitoring</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >4 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.49" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.49</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Avoidance or Treatment of Burrows</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >4 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.49.1" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.49.1</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Flag Burrows</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >3 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.49.2" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.49.2</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Burrow Excavation</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.50" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.50</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >CTS Capture and Handling</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.51" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.51</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >CTS Mortality Reduction and Relocation Plan</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.51.1" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.51.1</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Relocation from Buffer Outside Project Construction Sites</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.51.2" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.51.2</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Capture and Handling of CTS</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.51.3" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.51.3</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Release of Relocated CTS</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.52" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.52</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Notification of CTS Take or Injury</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >3 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.52.1" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.52.1</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Minor Injury</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.52.2" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.52.2</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Major or Serious Injuries</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.52.3" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.52.3</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Recently Deceased</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.52.4" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.52.4</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Written Report</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.53" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.53</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Invasive Species</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >3 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.54" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.54</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Establishment of Environmentally Sensitive Areas (ESAs)</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >5 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.55" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.55</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">GGS Avoidance</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >7 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.55.1" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.55.1</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Access to Project Construction Sites</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >3 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.56" data-state="flagged">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.56</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">GGS Surveys</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 to review</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.57" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.57</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Mowing</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >9 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.58" data-state="flagged">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.58</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Seasonal Work Window</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 to review</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.58.1" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.58.1</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Work Period in Low Rainfall/Dry Weather Only</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.59" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.59</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Seasonal Work Restriction Exception</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.60" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.60</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Channel Management and Seasonal Work Restriction</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >9 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.61" data-state="flagged">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.61</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Dewatered GGS Aquatic Habitat</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 to review</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.62" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.62</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Exclusion Barrier Installation and Maintenance</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >13 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.62.1" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.62.1</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Refugia Flagging</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >6 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.62.2" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.62.2</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Burrow Excavation</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >3 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.63" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.63</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Initial Site Clearing and Monitoring</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >3 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.64" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.64</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Disposal of Debris</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.65" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.65</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Preconstruction Activities, SCADA and Transmission Line Construction and
            Maintenance, Access Road Construction and Maintenance Activities</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >11 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.66" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.66</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Restoration of Temporary Impacts</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.67" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.67</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >GGS Mortality Reduction and Relocation Plan</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.67.1" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.67.1</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">GGS Handling</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >3 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.68" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.68</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Notification of GGS Take or Injury</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >4 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.68.1" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.68.1</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Minor Injury</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.68.2" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.68.2</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Major or Serious Injuries</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >4 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.68.3" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.68.3</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Recently Deceased</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.68.4" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.68.4</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Written Report</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.69" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.69</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">SWHA Avoidance</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >4 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.70" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.70</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Seasonal Work Restriction</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.71" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.71</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">SWHA Surveys</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >3 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.72" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.72</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >No-Disturbance Buffer</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >3 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.73" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.73</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >SHWA Nest Monitoring</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >3 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.74" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.74</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Disturbance of Occupied Nest Tree</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.75" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.75</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Authority of the Designated Biologist(s)</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >5 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.76" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.76</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Nest Tree Avoidance</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >3 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.77" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.77</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Vegetation Removal</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >3 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.78" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.78</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Preconstruction Activities</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >4 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.79" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.79</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Measures Specific to SCADA and Transmission Line Construction and
            Maintenance</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >5 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.80" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.80</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >SWHA Mortality Reduction and Relocation Plan</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.81" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.81</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Notification of SWHA Take or Injury</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >5 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.82" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.82</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">TRBL Avoidance</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >3 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.83" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.83</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Preconstruction Assessment</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.84" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.84</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">TRBL Surveys</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >4 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.84.1" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.84.1</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Nesting Habitat</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.84.2" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.84.2</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Roosting Habitat</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >4 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.85" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.85</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Nest Buffer Zone</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >6 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.86" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.86</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Nest Buffer Monitoring</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >6 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.87" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.87</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Roosting Site Buffer Zone</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >5 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.88" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.88</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Roosting Site Buffer Monitoring</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >4 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.89" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.89</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Disturbance of Breeding Colonies and Roost Sites</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >3 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.90" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.90</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Delineation of Nesting and Roosting Habitat</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.91" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.91</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Helicopters</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.92" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.92</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >TRBL Mortality Reduction and Relocation Plan</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.93" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.93</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Notification of TRBL Take or Injury</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >6 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.94" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.94</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">CBB Avoidance</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >4 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.95" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.95</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Seasonal Restriction</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >6 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.96" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.96</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Preconstruction Assessment</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.97" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.97</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">CBB Surveys</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >3 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.98" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.98</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >CBB No-activity Buffer Zone</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >4 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.99" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.99</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >CBB Daily Monitoring</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >4 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.100" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.100</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Avoidance or Treatment of Underground Refugia</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >4 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.101" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.101</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Vegetation Management</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >3 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.102" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.102</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >CBB Nest Relocation Plan</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >5 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.103" data-state="flagged">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.103</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Notification of CBB Take or Injury</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 to review</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.104" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.104</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Initial Site Clearing and Monitoring</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >4 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.105" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.105</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">MALI Surveys</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >4 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.106" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.106</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >MALI No-Activity Buffer Zone</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >8 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.107" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.107</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Measures Specific to SCADA and Transmission Line Construction and
            Maintenance</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >3 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.108" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.108</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >MALI Translocation Plan</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >5 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.109" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.109</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Velocity Requirements at North Delta Intakes</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >5 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.109.1" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.109.1</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >No Diversions Without North Delta Intake Screens</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.110" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.110</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Phase 1 and Phase 2 Authorized Operations</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >6 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.111" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.111</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Diversion Criteria</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >5 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.111.1" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.111.1</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">June Operations</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.111.2" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.111.2</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Seasonal Operations of the North Delta Intakes</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >10 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.111.3" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.111.3</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >North Delta Diversion Monitoring Team</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >7 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.111.4" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.111.4</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Chartering the North Delta Diversion Monitoring Team</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.111.5" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.111.5</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Collaborative Approach to Real-time Decision Making</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >3 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.111.6" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.111.6</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Salmon Presence Off-ramp</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.112" data-state="flagged">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.112</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md">Reservoir Storage</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 to review</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.113" data-state="flagged">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.113</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Shifting During Balanced Conditions</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 to review</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.114" data-state="flagged">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.114</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Additional Diversions from North Delta Intakes</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 to review</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.115" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.115</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Delta Smelt and Longfin Smelt Biological Criteria</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.115.1" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.115.1</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Smelt Biological Criterion 1</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.115.2" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.115.2</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Smelt Biological Criterion 2</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.116" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.116</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Winter- and Spring-run Chinook Salmon Biological Criteria</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.116.1" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.116.1</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Salmonid Biological Criterion 1</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >2 requirements</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.116.2" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.116.2</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Salmonid Biological Criterion 2</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.117" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.117</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >White Sturgeon Biological Criteria</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.117.1" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.117.1</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >White Sturgeon Biological Criterion 1</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 11.117.2" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">11.117.2</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >White Sturgeon Biological Criterion 2</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >1 requirement</span
          ></span
        >
      </button>
    </li>
    <li class="bcn-sw3rev__navrow" data-nav="COA 12" data-state="ready">
      <button type="button" class="bcn-sw3rev__navbtn">
        <span class="bcn-cbadge bcn-cbadge--sm">12</span
        ><span class="bcn-sw3rev__navtext"
          ><span class="bcn-sw3rev__navtitle typography-label-md"
            >Habitat Management Land Acquisition and Restoration</span
          ><span class="bcn-sw3rev__navmeta typography-microcopy-sm" data-nav-meta=""
            >10 requirements</span
          ></span
        >
      </button>
    </li>
  </ol>
  <div class="bcn-sw3rev__pager" data-rev-pager="">
    <span
      class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
      ><button
        class="esa-button__native typography-microcopy-xs"
        type="button"
        data-rev-prev="true"
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
            <path d="m15 18-6-6 6-6"></path></svg></span
        ><span class="esa-button__label">Previous</span>
      </button></span
    ><span class="typography-label-md" data-rev-pos="">1 of 156</span
    ><span
      class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
      ><button
        class="esa-button__native typography-microcopy-xs"
        type="button"
        data-rev-next="true"
      >
        <span class="esa-button__label">Next</span
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
            <path d="m9 18 6-6-6-6"></path></svg
        ></span></button
    ></span>
  </div>
</nav>
```

## Styles
```css
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
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
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-sm-subtle {
  font-family: var(--typography-microcopy-sm-subtle-font-family);
  font-size: var(--typography-microcopy-sm-subtle-font-size);
  font-weight: var(--typography-microcopy-sm-subtle-font-weight);
  line-height: var(--typography-microcopy-sm-subtle-line-height);
  letter-spacing: var(--typography-microcopy-sm-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-microcopy-sm-strong {
  font-family: var(--typography-microcopy-sm-strong-font-family);
  font-size: var(--typography-microcopy-sm-strong-font-size);
  font-weight: var(--typography-microcopy-sm-strong-font-weight);
  line-height: var(--typography-microcopy-sm-strong-line-height);
  letter-spacing: var(--typography-microcopy-sm-strong-letter-spacing);
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
.bcn-cbadge {
  font-family: var(--typography-font-family-mono);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  white-space: nowrap;
  flex-shrink: 0;
  display: inline-block;
}
.bcn-cbadge--md {
  font-size: var(--font-size-100);
  padding: 1px var(--spacing-200);
}
.bcn-cbadge--sm {
  padding: 1px var(--spacing-150);
  font-size: 0.75rem;
}
.bcn-cbadge--neutral {
  font-family: var(--typography-font-family-sans);
  color: var(--bcn-gray-700);
  background: var(--bcn-gray-100);
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
.bcn-sw3c__flags .bcn-sw3c__flagbtn .esa-icon {
  color: var(--color-content-warning);
  flex: none;
}
.bcn-sw3c__flags [data-kind="missed"] .esa-icon {
  color: var(--color-content-default-secondary);
}
.bcn-sw3rev__nav,
.bcn-sw3rev__side {
  top: var(--spacing-400);
  max-height: calc(100vh - 2 * var(--spacing-400));
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  flex-direction: column;
  display: flex;
  position: sticky;
  overflow: hidden;
}
.bcn-sw3rev__navlist {
  flex: 1;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-y: auto;
}
.bcn-sw3rev__navrow {
  border-bottom: 1px solid var(--color-border-default-subtle);
}
.bcn-sw3rev__navrow[hidden] {
  display: none;
}
.bcn-sw3rev__navrow[data-current] {
  background: var(--color-background-default-hover);
}
.bcn-sw3rev__navbtn {
  align-items: flex-start;
  gap: var(--spacing-200);
  width: 100%;
  padding: var(--spacing-200) var(--spacing-300);
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
  background: 0 0;
  border: 0;
  display: flex;
}
.bcn-sw3rev__navbtn:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: -2px;
}
.bcn-sw3rev__navtext {
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.bcn-sw3rev__navtitle {
  color: var(--color-content-default);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.bcn-sw3rev__navmeta {
  color: var(--color-content-default-secondary);
}
.bcn-sw3rev__navrow[data-state="flagged"] .bcn-sw3rev__navmeta {
  color: var(--color-content-warning);
}
.bcn-sw3rev__navrow[data-state="confirmed"] .bcn-sw3rev__navmeta {
  color: var(--color-content-success);
}
.bcn-sw3rev__navrow[data-state="parsing"] .bcn-sw3rev__navmeta {
  color: var(--color-content-default-tertiary);
}
.bcn-sw3rev__pager {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-300);
  border-top: 1px solid var(--color-border-default-subtle);
  font-variant-numeric: tabular-nums;
  display: none;
}
.bcn-sw3rev[data-view="pager"] .bcn-sw3rev__pager {
  display: flex;
}
.bcn-sw3rev__nav {
  display: none;
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
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
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-sm-subtle {
  font-family: var(--typography-microcopy-sm-subtle-font-family);
  font-size: var(--typography-microcopy-sm-subtle-font-size);
  font-weight: var(--typography-microcopy-sm-subtle-font-weight);
  line-height: var(--typography-microcopy-sm-subtle-line-height);
  letter-spacing: var(--typography-microcopy-sm-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-microcopy-sm-strong {
  font-family: var(--typography-microcopy-sm-strong-font-family);
  font-size: var(--typography-microcopy-sm-strong-font-size);
  font-weight: var(--typography-microcopy-sm-strong-font-weight);
  line-height: var(--typography-microcopy-sm-strong-line-height);
  letter-spacing: var(--typography-microcopy-sm-strong-letter-spacing);
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
- `--color-background-default-hover`: #e8e8e8 _(semantic)_
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
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-commitment`: #58508d _(component)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
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
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-font-family-mono`: "Roboto Mono", ui-monospace, monospace _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
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
- `--typography-microcopy-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-microcopy-sm-font-weight`: 500 _(semantic)_
- `--typography-microcopy-sm-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-sm-line-height`: 1 _(semantic)_
- `--typography-microcopy-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-microcopy-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-sm-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-sm-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-sm-subtle-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-microcopy-sm-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-sm-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-sm-subtle-line-height`: 1 _(semantic)_
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
