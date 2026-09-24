# Add commitments drawer

ONE flat checkbox list in code order, with search and a Source Document facet.

## Key decisions
- Andy rejected section folders and a nested parent/child checkbox group; keep it flat.
- The Source Document facet is kept with a single value, despite buildFacets' >1 rule.

## Markup
```html
<div class="bcn-lao">
  <esa-text-field
    size="sm"
    name="lam-search"
    aria-label="Search commitments"
    placeholder="Search by code or title"
  ></esa-text-field>
  <div class="bcn-laf" data-add-filters="">
    <div
      class="esa-filter-container typography-label-md"
      style="
        --_filter-container-gap: var(--spacing-200, var(--spacing-300, 0.75rem));
        --_filter-container-row-gap: var(--spacing-200, 0.5rem);
      "
    >
      <esa-filter-dropdown
        name="source"
        label="Source Document"
        placeholder="Search source document"
        size="sm"
        multiple=""
        options='[{"value":"Incidental Take Permit (ITP) 2081","label":"Incidental Take Permit (ITP) 2081"}]'
      ></esa-filter-dropdown
      ><span class="bcn-laf__clear" data-add-filters-clear="" hidden=""
        ><button
          class="esa-filter-clear-button typography-microcopy-sm"
          type="button"
          data-esa-filter-clear=""
          aria-label="Clear all filters"
        >
          <svg
            class="esa-filter-clear-button__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"></path>
            <path d="m22 3-5 5"></path>
            <path d="m17 3 5 5"></path></svg
          ><span class="esa-filter-clear-button__label">Clear all</span>
        </button></span
      >
    </div>
  </div>
  <p class="bcn-lao__nomatch" data-lam-nomatch="" hidden="">No commitments match.</p>
  <p class="bcn-lao__nomatch" data-lam-none="" hidden="">
    Every commitment in the registry is already on this list.
  </p>
  <div class="bcn-lao__tree" data-lam-tree="">
    <div data-lam-group="all">
      <ul class="bcn-lao__opts bcn-lam__opts bcn-lam__opts--flat">
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 4 ESA Consultation and ITP Precedence"
          data-item='{"memberId":"COA 4","id":"COA 4","title":"ESA Consultation and ITP Precedence","code":"COA 4","groupId":"COA 4","groupName":"COA 4","reqs":[{"id":"req_01M2ESMC0B9X341GWB1FC7JSGT","code":"COA 4","name":"Consult with CDFW on Federal Biological Opinion Terms"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 4"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 4 ESA Consultation and ITP Precedence"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 4</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="ESA Consultation and ITP Precedence"
            >ESA Consultation and ITP Precedence</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 6 Construction Phase Authorization Required Before Construction"
          data-item='{"memberId":"COA 6","id":"COA 6","title":"Construction Phase Authorization Required Before Construction","code":"COA 6","groupId":"COA 6","groupName":"COA 6","reqs":[{"id":"req_01M2ESMC3SG5TTMS74P5R5PTEA","code":"COA 6","name":"Obtain Construction Phase Authorization Before Each Phase"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 6"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 6 Construction Phase Authorization Required Before Construction"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 6</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Construction Phase Authorization Required Before Construction"
            >Construction Phase Authorization Required Before Construction</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 6.1 Pre-implementation Phase Authorization Package"
          data-item='{"memberId":"COA 6.1","id":"COA 6.1","title":"Pre-implementation Phase Authorization Package","code":"COA 6.1","groupId":"COA 6","groupName":"COA 6","reqs":[{"id":"req_01M2ESMC5JPZYS7Y50RAJ4JT9P","code":"COA 6.1","name":"Submit Pre-implementation Phase Authorization Package"},{"id":"req_01M2ESMC5KYTF17870WK6KKW9N","code":"COA 6.1","name":"Submit Protocol-Level Survey Methodology for CDFW Approval"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 6"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 6.1 Pre-implementation Phase Authorization Package"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 6.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Pre-implementation Phase Authorization Package"
            >Pre-implementation Phase Authorization Package</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 6.2 Construction Phase Authorization Package Contents"
          data-item='{"memberId":"COA 6.2","id":"COA 6.2","title":"Construction Phase Authorization Package Contents","code":"COA 6.2","groupId":"COA 6","groupName":"COA 6","reqs":[{"id":"req_01M2ESMC939ZX97P9AXG9S3A6G","code":"COA 6.2","name":"Submit Construction Phase Authorization Package 90 Days Prior"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 6"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 6.2 Construction Phase Authorization Package Contents"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 6.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Construction Phase Authorization Package Contents"
            >Construction Phase Authorization Package Contents</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 7 Phase 2 Authorization Required Before Phase 2 Operations"
          data-item='{"memberId":"COA 7","id":"COA 7","title":"Phase 2 Authorization Required Before Phase 2 Operations","code":"COA 7","groupId":"COA 7","groupName":"COA 7","reqs":[{"id":"req_01M2ESMCNBKDG2MXRMH6NHDPGV","code":"COA 7","name":"Obtain Phase 2 Authorization Before Phase 2 Operations"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 7"
          data-f-phase="Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 7 Phase 2 Authorization Required Before Phase 2 Operations"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 7</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Phase 2 Authorization Required Before Phase 2 Operations"
            >Phase 2 Authorization Required Before Phase 2 Operations</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 7.1 Phase 2 Authorization Package Contents"
          data-item='{"memberId":"COA 7.1","id":"COA 7.1","title":"Phase 2 Authorization Package Contents","code":"COA 7.1","groupId":"COA 7","groupName":"COA 7","reqs":[{"id":"req_01M2ESMCQ5MM4B9MEJ7232K24M","code":"COA 7.1","name":"Submit Phase 2 Authorization Package Before Phase 1 Operations"},{"id":"req_01M2ESMCQ5MM4B9MEJ7232K24N","code":"COA 7.1","name":"Share Phase 1 Operations Data with CDFW"},{"id":"req_01M2ESMCQ5MM4B9MEJ7232K24P","code":"COA 7.1","name":"Submit Supplemental Phase 1 Data Before Phase 2 Operations"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 7"
          data-f-phase="Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 7.1 Phase 2 Authorization Package Contents"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 7.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Phase 2 Authorization Package Contents"
            >Phase 2 Authorization Package Contents</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 8 Consultation and Notification Regarding Amendment"
          data-item='{"memberId":"COA 8","id":"COA 8","title":"Consultation and Notification Regarding Amendment","code":"COA 8","groupId":"COA 8","groupName":"COA 8","reqs":[{"id":"req_01M2ESMD546NR666PVXEW5APZW","code":"COA 8","name":"Notify and Consult CDFW on Amendment-Triggering Conditions"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 8"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 8 Consultation and Notification Regarding Amendment"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 8</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Consultation and Notification Regarding Amendment"
            >Consultation and Notification Regarding Amendment</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 9.1 Designated Representative"
          data-item='{"memberId":"COA 9.1","id":"COA 9.1","title":"Designated Representative","code":"COA 9.1","groupId":"COA 9","groupName":"COA 9","reqs":[{"id":"req_01M2ESMD6W6RQG8JF2DYBGJG48","code":"COA 9.1","name":"Designate and Notify CDFW of Designated Representative"},{"id":"req_01M2ESMD6XM3P5WQ752XPQVX8Z","code":"COA 9.1","name":"Notify CDFW of Substitute Designated Representative"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 9.1 Designated Representative"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Designated Representative"
            >Designated Representative</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 9.2 Designated Biologists, Fisheries Biologists, and Biological Monitors"
          data-item='{"memberId":"COA 9.2","id":"COA 9.2","title":"Designated Biologists, Fisheries Biologists, and Biological Monitors","code":"COA 9.2","groupId":"COA 9","groupName":"COA 9","reqs":[{"id":"req_01M2ESMD8N87X4KKRYNGESBETT","code":"COA 9.2","name":"Submit Biologist Resume Forms 30 Days Before Each Phase"},{"id":"req_01M2ESMD8P1D9GP5SHAZ2ZEEXK","code":"COA 9.2","name":"Submit Annual Biologist Reapproval List by January 31"},{"id":"req_01M2ESMD8P1D9GP5SHAZ2ZEEXM","code":"COA 9.2","name":"Obtain CDFW Approval Before Replacing a Biologist or Monitor"},{"id":"req_01M2ESMD8P1D9GP5SHAZ2ZEEXN","code":"COA 9.2","name":"Maintain Biological Monitor Presence During Construction"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 9.2 Designated Biologists, Fisheries Biologists, and Biological Monitors"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Designated Biologists, Fisheries Biologists, and Biological Monitors"
            >Designated Biologists, Fisheries Biologists, and Biological Monitors</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 9.2.1 Designated Biologist and Fisheries Biologist Qualifications"
          data-item='{"memberId":"COA 9.2.1","id":"COA 9.2.1","title":"Designated Biologist and Fisheries Biologist Qualifications","code":"COA 9.2.1","groupId":"COA 9","groupName":"COA 9","reqs":[{"id":"req_01M2ESMDAT8XEFVPD8J1CHZG7X","code":"COA 9.2.1","name":"Maintain Qualified Designated/Fisheries Biologist Credentials"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 9.2.1 Designated Biologist and Fisheries Biologist Qualifications"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.2.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Designated Biologist and Fisheries Biologist Qualifications"
            >Designated Biologist and Fisheries Biologist Qualifications</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 9.2.2 Biological Monitor Qualifications and Duties"
          data-item='{"memberId":"COA 9.2.2","id":"COA 9.2.2","title":"Biological Monitor Qualifications and Duties","code":"COA 9.2.2","groupId":"COA 9","groupName":"COA 9","reqs":[{"id":"req_01M2ESMDCJSES4G0RSSPXC7J7J","code":"COA 9.2.2","name":"Maintain Qualified Biological Monitor Scope of Work"},{"id":"req_01M2ESMDCKEBRF744X854M9ESF","code":"COA 9.2.2","name":"Report Daily to Designated Biologist and Flag Non-Compliance"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 9"
          data-f-phase="Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 9.2.2 Biological Monitor Qualifications and Duties"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.2.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Biological Monitor Qualifications and Duties"
            >Biological Monitor Qualifications and Duties</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 9.3 Biologist and Monitor Stop-Work Authority"
          data-item='{"memberId":"COA 9.3","id":"COA 9.3","title":"Biologist and Monitor Stop-Work Authority","code":"COA 9.3","groupId":"COA 9","groupName":"COA 9","reqs":[{"id":"req_01M2ESMDEBV2KH7CJHQF9ZB8XJ","code":"COA 9.3","name":"Provide Unfettered Biologist Access to the Project Site"},{"id":"req_01M2ESMDEC1Q0RGFP8KGZD7JYG","code":"COA 9.3","name":"Exercise Stop-Work Authority for Non-Compliant Activity"},{"id":"req_01M2ESMDEC1Q0RGFP8KGZD7JYH","code":"COA 9.3","name":"Notify CDFW When Unable to Comply with the ITP"},{"id":"req_01M2ESMDEC1Q0RGFP8KGZD7JYJ","code":"COA 9.3","name":"Prohibit Contracts That Restrict CDFW Communication"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 9.3 Biologist and Monitor Stop-Work Authority"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.3</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Biologist and Monitor Stop-Work Authority"
            >Biologist and Monitor Stop-Work Authority</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 9.4 Worker Education Program"
          data-item='{"memberId":"COA 9.4","id":"COA 9.4","title":"Worker Education Program","code":"COA 9.4","groupId":"COA 9","groupName":"COA 9","reqs":[{"id":"req_01M2ESMDG5ZAFW7GT3S4AFYDA4","code":"COA 9.4","name":"Conduct Worker Education Program Before Work Begins"},{"id":"req_01M2ESMDG5ZAFW7GT3S4AFYDA5","code":"COA 9.4","name":"Repeat Worker Education Annually for Long-Term Employees"},{"id":"req_01M2ESMDG5ZAFW7GT3S4AFYDA6","code":"COA 9.4","name":"Distribute Wallet Cards or Fact Sheets to All Workers"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 9.4 Worker Education Program"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.4</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Worker Education Program"
            >Worker Education Program</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 9.5 Construction Monitoring Documentation"
          data-item='{"memberId":"COA 9.5","id":"COA 9.5","title":"Construction Monitoring Documentation","code":"COA 9.5","groupId":"COA 9","groupName":"COA 9","reqs":[{"id":"req_01M2ESMDHYF867YQNWQK3NVG8W","code":"COA 9.5","name":"Maintain On-Site Construction Monitoring Documentation"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 9"
          data-f-phase="Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 9.5 Construction Monitoring Documentation"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.5</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Construction Monitoring Documentation"
            >Construction Monitoring Documentation</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 9.6 Trash Abatement Program"
          data-item='{"memberId":"COA 9.6","id":"COA 9.6","title":"Trash Abatement Program","code":"COA 9.6","groupId":"COA 9","groupName":"COA 9","reqs":[{"id":"req_01M2ESMDKPBV0KRRJY304RM6H9","code":"COA 9.6","name":"Maintain Trash Abatement Program with Animal-Proof Containers"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 9.6 Trash Abatement Program"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.6</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Trash Abatement Program"
            >Trash Abatement Program</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 9.7 Erosion and Sediment Control"
          data-item='{"memberId":"COA 9.7","id":"COA 9.7","title":"Erosion and Sediment Control","code":"COA 9.7","groupId":"COA 9","groupName":"COA 9","reqs":[{"id":"req_01M2ESMDND6Q88AT76ZWVB5VRW","code":"COA 9.7","name":"Install and Maintain Erosion and Sediment Control Measures"},{"id":"req_01M2ESMDND6Q88AT76ZWVB5VRX","code":"COA 9.7","name":"Monitor Construction Sites Before, During and After Storm Events"},{"id":"req_01M2ESMDND6Q88AT76ZWVB5VRY","code":"COA 9.7","name":"Restrict Sediment-Generating Work Ahead of Storm Onset"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction|Post-Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 9.7 Erosion and Sediment Control"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.7</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Erosion and Sediment Control"
            >Erosion and Sediment Control</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 9.8 Delineation of Property Boundaries"
          data-item='{"memberId":"COA 9.8","id":"COA 9.8","title":"Delineation of Property Boundaries","code":"COA 9.8","groupId":"COA 9","groupName":"COA 9","reqs":[{"id":"req_01M2ESMDQ70QCZ5B0X554ZQPFC","code":"COA 9.8","name":"Delineate and Maintain Construction Site Boundary"},{"id":"req_01M2ESMDQ8FGD7Z8V69VMS5X55","code":"COA 9.8","name":"Confine Covered Activities to Delineated Construction Sites"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 9.8 Delineation of Property Boundaries"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.8</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Delineation of Property Boundaries"
            >Delineation of Property Boundaries</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 9.9 Delineation of Covered Species Habitat"
          data-item='{"memberId":"COA 9.9","id":"COA 9.9","title":"Delineation of Covered Species Habitat","code":"COA 9.9","groupId":"COA 9","groupName":"COA 9","reqs":[{"id":"req_01M2ESMDS4KC7YKNABBMKNV6GV","code":"COA 9.9","name":"Delineate Covered Species Habitat and Show on Construction Plans"},{"id":"req_01M2ESMDS5E818E06EZYTVMJ35","code":"COA 9.9","name":"Inspect and Maintain Habitat Fencing, Stakes and Flags"},{"id":"req_01M2ESMDS5E818E06EZYTVMJ36","code":"COA 9.9","name":"Verify and Document Fencing Status in Monthly Compliance Report"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 9.9 Delineation of Covered Species Habitat"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.9</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Delineation of Covered Species Habitat"
            >Delineation of Covered Species Habitat</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 9.10 Project Access Routes"
          data-item='{"memberId":"COA 9.10","id":"COA 9.10","title":"Project Access Routes","code":"COA 9.10","groupId":"COA 9","groupName":"COA 9","reqs":[{"id":"req_01M2ESMDV1RTA9PERE8C8MBS0S","code":"COA 9.10","name":"Confine Site Access and Vehicle Travel to Established Routes"},{"id":"req_01M2ESMDV2Z1D8E43SV3PA7GH9","code":"COA 9.10","name":"Mark Cross-Country Access Routes in the Field"},{"id":"req_01M2ESMDV2Z1D8E43SV3PA7GHA","code":"COA 9.10","name":"Obtain CDFW Approval Before Constructing New Travel Routes"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 9.10 Project Access Routes"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.10</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Project Access Routes"
            >Project Access Routes</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 9.11 Staging Areas"
          data-item='{"memberId":"COA 9.11","id":"COA 9.11","title":"Staging Areas","code":"COA 9.11","groupId":"COA 9","groupName":"COA 9","reqs":[{"id":"req_01M2ESMDWX0TGCJRKPXWPA79HX","code":"COA 9.11","name":"Confine Staging and Laydown to Disturbed Areas Within the Site"},{"id":"req_01M2ESMDWYWKYNTP6J9K2FJE2J","code":"COA 9.11","name":"Store Equipment and Vehicles 200 Feet from Aquatic Habitat"},{"id":"req_01M2ESMDWYWKYNTP6J9K2FJE2K","code":"COA 9.11","name":"Confine Activity to the Marked Site, Avoiding Covered Species Habitat"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox size="sm" aria-label="COA 9.11 Staging Areas"></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.11</span
          ><span class="bcn-lao__label" data-opt-label="" data-text="Staging Areas"
            >Staging Areas</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 9.12 Vehicle and Equipment Inspection for Invasive Species"
          data-item='{"memberId":"COA 9.12","id":"COA 9.12","title":"Vehicle and Equipment Inspection for Invasive Species","code":"COA 9.12","groupId":"COA 9","groupName":"COA 9","reqs":[{"id":"req_01M2ESMDYRSCC4TRN3XVY6KGWC","code":"COA 9.12","name":"Inspect and Clean Equipment and Vessels for Invasive Species"},{"id":"req_01M2ESMDYRSCC4TRN3XVY6KGWD","code":"COA 9.12","name":"Inspect Idle Vehicles and Equipment for Wildlife Before Moving"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 9.12 Vehicle and Equipment Inspection for Invasive Species"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.12</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Vehicle and Equipment Inspection for Invasive Species"
            >Vehicle and Equipment Inspection for Invasive Species</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 9.13 Refueling and Maintenance Controls"
          data-item='{"memberId":"COA 9.13","id":"COA 9.13","title":"Refueling and Maintenance Controls","code":"COA 9.13","groupId":"COA 9","groupName":"COA 9","reqs":[{"id":"req_01M2ESME0G47Q8BCWPAWVMG2J8","code":"COA 9.13","name":"Daily Inspect and Maintain Vehicles to Prevent Contaminant Release"},{"id":"req_01M2ESME0G47Q8BCWPAWVMG2J9","code":"COA 9.13","name":"Contain and Attend Vehicle Refueling Operations"},{"id":"req_01M2ESME0HFZBS8WNTW5P7481F","code":"COA 9.13","name":"Keep Refueling, Maintenance and Fuel Storage 200 Feet from Water"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 9.13 Refueling and Maintenance Controls"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.13</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Refueling and Maintenance Controls"
            >Refueling and Maintenance Controls</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 9.14 Hazardous Waste Spill Response"
          data-item='{"memberId":"COA 9.14","id":"COA 9.14","title":"Hazardous Waste Spill Response","code":"COA 9.14","groupId":"COA 9","groupName":"COA 9","reqs":[{"id":"req_01M2ESME28WH6M351CX8A8P93C","code":"COA 9.14","name":"Implement CDFW-Approved Hazardous Materials Management Plan"},{"id":"req_01M2ESME28WH6M351CX8A8P93D","code":"COA 9.14","name":"Immediately Stop and Clean Up Fuel and Hazardous Waste Spills"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 9.14 Hazardous Waste Spill Response"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.14</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Hazardous Waste Spill Response"
            >Hazardous Waste Spill Response</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 9.15 CDFW Access to Project and Mitigation Lands"
          data-item='{"memberId":"COA 9.15","id":"COA 9.15","title":"CDFW Access to Project and Mitigation Lands","code":"COA 9.15","groupId":"COA 9","groupName":"COA 9","reqs":[{"id":"req_01M2ESME404SWG6PS2ESE8KYH7","code":"COA 9.15","name":"Provide CDFW Access to Project and Mitigation Lands"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 9.15 CDFW Access to Project and Mitigation Lands"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.15</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="CDFW Access to Project and Mitigation Lands"
            >CDFW Access to Project and Mitigation Lands</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 9.16 No Disturbance of CDFW Conserved and Managed Lands"
          data-item='{"memberId":"COA 9.16","id":"COA 9.16","title":"No Disturbance of CDFW Conserved and Managed Lands","code":"COA 9.16","groupId":"COA 9","groupName":"COA 9","reqs":[{"id":"req_01M2ESME5SZR3H6JG2521K9KK5","code":"COA 9.16","name":"Prohibit Surface Disturbance of CDFW Conserved and Managed Lands"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 9.16 No Disturbance of CDFW Conserved and Managed Lands"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.16</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="No Disturbance of CDFW Conserved and Managed Lands"
            >No Disturbance of CDFW Conserved and Managed Lands</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 9.16.1 Conservation Easement 50-Foot Buffer"
          data-item='{"memberId":"COA 9.16.1","id":"COA 9.16.1","title":"Conservation Easement 50-Foot Buffer","code":"COA 9.16.1","groupId":"COA 9","groupName":"COA 9","reqs":[{"id":"req_01M2ESME7HX3P38N1DXDK3KCVC","code":"COA 9.16.1","name":"Maintain 50-Foot Buffer at Bethany Complex Conservation Easements"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 9.16.1 Conservation Easement 50-Foot Buffer"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.16.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conservation Easement 50-Foot Buffer"
            >Conservation Easement 50-Foot Buffer</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 9.17 Refuse Removal on Completion"
          data-item='{"memberId":"COA 9.17","id":"COA 9.17","title":"Refuse Removal on Completion","code":"COA 9.17","groupId":"COA 9","groupName":"COA 9","reqs":[{"id":"req_01M2ESME9BSX73B5K904W1AMCF","code":"COA 9.17","name":"Remove Temporary Fill and Construction Refuse on Completion"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 9"
          data-f-phase="Post-Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 9.17 Refuse Removal on Completion"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.17</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Refuse Removal on Completion"
            >Refuse Removal on Completion</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 9.18 Wildfire Prevention at Bethany Complex"
          data-item='{"memberId":"COA 9.18","id":"COA 9.18","title":"Wildfire Prevention at Bethany Complex","code":"COA 9.18","groupId":"COA 9","groupName":"COA 9","reqs":[{"id":"req_01M2ESMEB3JEW0AY0NARFBHQMP","code":"COA 9.18","name":"Keep Basic Fire Suppression Supplies On Site at Bethany Complex"},{"id":"req_01M2ESMEB3JEW0AY0NARFBHQMQ","code":"COA 9.18","name":"Hand Clear Vegetation for Fire Prevention, Timed to Surveys and Exclusion Barriers"},{"id":"req_01M2ESMEB3JEW0AY0NARFBHQMR","code":"COA 9.18","name":"Obtain CDFW Approval for Mowing, Disking or Tilling as Fire Prevention"},{"id":"req_01M2ESMEB3JEW0AY0NARFBHQMS","code":"COA 9.18","name":"Clear Non-Living Vegetative Debris from the Work Footprint"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 9"
          data-f-phase="Construction|Maintenance|Pre-Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 9.18 Wildfire Prevention at Bethany Complex"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.18</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Wildfire Prevention at Bethany Complex"
            >Wildfire Prevention at Bethany Complex</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.1 Notification Before Commencement"
          data-item='{"memberId":"COA 10.1","id":"COA 10.1","title":"Notification Before Commencement","code":"COA 10.1","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMECVYQSPE08483H5P0ET","code":"COA 10.1","name":"Notify CDFW 14 Days Before Starting Covered Activities"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.1 Notification Before Commencement"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notification Before Commencement"
            >Notification Before Commencement</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.2 Notification of Non-compliance"
          data-item='{"memberId":"COA 10.2","id":"COA 10.2","title":"Notification of Non-compliance","code":"COA 10.2","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMEEMEXGEGREP1K279WSX","code":"COA 10.2","name":"Notify and Report Non-Compliance with the ITP to CDFW"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.2 Notification of Non-compliance"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notification of Non-compliance"
            >Notification of Non-compliance</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.4 Suitable Habitat Monitoring Features by Species"
          data-item='{"memberId":"COA 10.4","id":"COA 10.4","title":"Suitable Habitat Monitoring Features by Species","code":"COA 10.4","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMEJ50ANJZ1WRG9NY1TNR","code":"COA 10.4","name":"Track and Map Suitable Habitat Features by Species"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Post-Construction"
          data-f-species="california tiger salamander|giant garter snake|swainson’s hawk|tricolored blackbird|crotch bumble bee|mason’s lilaeopsis"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.4 Suitable Habitat Monitoring Features by Species"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.4</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Suitable Habitat Monitoring Features by Species"
            >Suitable Habitat Monitoring Features by Species</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.6 Photo Monitoring Stations"
          data-item='{"memberId":"COA 10.6","id":"COA 10.6","title":"Photo Monitoring Stations","code":"COA 10.6","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMENP1CJ80TQ2PM1VM14P","code":"COA 10.6","name":"Photograph Impact Areas Before and During Construction"},{"id":"req_01M2ESMENP1CJ80TQ2PM1VM14Q","code":"COA 10.6","name":"Document Restoration Success with Quarterly Photos"},{"id":"req_01M2ESMENP1CJ80TQ2PM1VM14R","code":"COA 10.6","name":"Submit Photo Monitoring with Compliance Reports"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Maintenance|Post-Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.6 Photo Monitoring Stations"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.6</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Photo Monitoring Stations"
            >Photo Monitoring Stations</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.7 Species Observations Outside of Mapped Habitat"
          data-item='{"memberId":"COA 10.7","id":"COA 10.7","title":"Species Observations Outside of Mapped Habitat","code":"COA 10.7","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMEQFTWDF4BPXFH799KTB","code":"COA 10.7","name":"Email CDFW of Covered Species Sightings Within One Day"},{"id":"req_01M2ESMEQGNEXHJ6WJ7QGSE8T9","code":"COA 10.7","name":"Apply Avoidance Measures to Unmapped Species Occurrences"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.7 Species Observations Outside of Mapped Habitat"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.7</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Species Observations Outside of Mapped Habitat"
            >Species Observations Outside of Mapped Habitat</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.8 Habitat Evaluation Field Survey for Covered Species"
          data-item='{"memberId":"COA 10.8","id":"COA 10.8","title":"Habitat Evaluation Field Survey for Covered Species","code":"COA 10.8","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMES8P77HCP3S39H7JS57","code":"COA 10.8","name":"Conduct Preconstruction Habitat Evaluation Field Survey"},{"id":"req_01M2ESMES8P77HCP3S39H7JS58","code":"COA 10.8","name":"Submit Habitat Survey Results in Authorization Package"},{"id":"req_01M2ESMES8P77HCP3S39H7JS59","code":"COA 10.8","name":"Apply Avoidance Measures to Unmapped Suitable Habitat"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.8 Habitat Evaluation Field Survey for Covered Species"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.8</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Habitat Evaluation Field Survey for Covered Species"
            >Habitat Evaluation Field Survey for Covered Species</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.9 Tracking Temporary and Permanent Impacts"
          data-item='{"memberId":"COA 10.9","id":"COA 10.9","title":"Tracking Temporary and Permanent Impacts","code":"COA 10.9","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMEV1NQSW0M2DXK8JVMJB","code":"COA 10.9","name":"Track Temporary and Permanent Impacts by Project Phase"},{"id":"req_01M2ESMEV1NQSW0M2DXK8JVMJC","code":"COA 10.9","name":"Notify CDFW of Likely Impact Exceedance"},{"id":"req_01M2ESMEV1NQSW0M2DXK8JVMJD","code":"COA 10.9","name":"Submit Revised Phase Schedule After Exceedance Notice"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Post-Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.9 Tracking Temporary and Permanent Impacts"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.9</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Tracking Temporary and Permanent Impacts"
            >Tracking Temporary and Permanent Impacts</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.10 Daily Compliance Monitoring and Inspection Records"
          data-item='{"memberId":"COA 10.10","id":"COA 10.10","title":"Daily Compliance Monitoring and Inspection Records","code":"COA 10.10","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMEWT6ZZDZ4V47ZTC9YBS","code":"COA 10.10","name":"Conduct Daily Compliance Inspections at Each Site"},{"id":"req_01M2ESMEWT6ZZDZ4V47ZTC9YBT","code":"COA 10.10","name":"Prepare Daily Written Inspection Records"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.10 Daily Compliance Monitoring and Inspection Records"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.10</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Daily Compliance Monitoring and Inspection Records"
            >Daily Compliance Monitoring and Inspection Records</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.11 Environmental Compliance Monitoring Plan"
          data-item='{"memberId":"COA 10.11","id":"COA 10.11","title":"Environmental Compliance Monitoring Plan","code":"COA 10.11","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMEYQKN0BMMHCSCGJAM12","code":"COA 10.11","name":"Develop Environmental Compliance Monitoring Plan"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.11 Environmental Compliance Monitoring Plan"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.11</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Environmental Compliance Monitoring Plan"
            >Environmental Compliance Monitoring Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.14 CNDDB Observation Submittals"
          data-item='{"memberId":"COA 10.14","id":"COA 10.14","title":"CNDDB Observation Submittals","code":"COA 10.14","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMF4D5N9ER94Y6T84ZHQW","code":"COA 10.14","name":"Submit Species Observations to CNDDB Within 60 Days"},{"id":"req_01M2ESMF4D5N9ER94Y6T84ZHQX","code":"COA 10.14","name":"Include CNDDB Forms with Next Compliance Report"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.14 CNDDB Observation Submittals"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.14</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="CNDDB Observation Submittals"
            >CNDDB Observation Submittals</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.16 Notification of Take or Injury/Damage"
          data-item='{"memberId":"COA 10.16","id":"COA 10.16","title":"Notification of Take or Injury/Damage","code":"COA 10.16","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMF9PFFTXCX5ZD1XJ6RT3","code":"COA 10.16","name":"Notify Biologist Immediately of Take or Injury"},{"id":"req_01M2ESMF9PFFTXCX5ZD1XJ6RT4","code":"COA 10.16","name":"Call CDFW with Initial Take or Injury Notification"},{"id":"req_01M2ESMF9PFFTXCX5ZD1XJ6RT5","code":"COA 10.16","name":"Send Written Take Report to CDFW Within Two Days"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.16 Notification of Take or Injury/Damage"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.16</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notification of Take or Injury/Damage"
            >Notification of Take or Injury/Damage</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.17 Subsurface Vibratory Testing and Monitoring Study"
          data-item='{"memberId":"COA 10.17","id":"COA 10.17","title":"Subsurface Vibratory Testing and Monitoring Study","code":"COA 10.17","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMFBFFQB6W6S2SBSGX16J","code":"COA 10.17","name":"Develop Draft Subsurface Vibration Study Plan"},{"id":"req_01M2ESMFBG0N35H82TF02GZ3ZK","code":"COA 10.17","name":"Submit Final Study Plan One Year Before Ground Disturbance"},{"id":"req_01M2ESMFBG0N35H82TF02GZ3ZM","code":"COA 10.17","name":"Implement Approved Vibration Study Before Covered Activities"},{"id":"req_01M2ESMFBG0N35H82TF02GZ3ZN","code":"COA 10.17","name":"Submit Vibration Study Results in Construction Phase Package"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.17 Subsurface Vibratory Testing and Monitoring Study"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.17</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Subsurface Vibratory Testing and Monitoring Study"
            >Subsurface Vibratory Testing and Monitoring Study</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.18 Covered Fish Species Monitoring and Science Plan"
          data-item='{"memberId":"COA 10.18","id":"COA 10.18","title":"Covered Fish Species Monitoring and Science Plan","code":"COA 10.18","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMFDD89X51ER81SA5A47W","code":"COA 10.18","name":"Develop Draft Covered Fish Species Monitoring and Science Plan"},{"id":"req_01M2ESMFDD89X51ER81SA5A47X","code":"COA 10.18","name":"Submit Final Fish Monitoring Plan for CDFW Approval"},{"id":"req_01M2ESMFDD89X51ER81SA5A47Y","code":"COA 10.18","name":"Conduct Covered Fish Species Monitoring Across Project Phases"},{"id":"req_01M2ESMFDD89X51ER81SA5A47Z","code":"COA 10.18","name":"Report Aquatic Conditions in Phase 2 Package and Final Report"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.18 Covered Fish Species Monitoring and Science Plan"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.18</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Covered Fish Species Monitoring and Science Plan"
            >Covered Fish Species Monitoring and Science Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.18.2 Long-term Purpose of Fish Monitoring and Studies"
          data-item='{"memberId":"COA 10.18.2","id":"COA 10.18.2","title":"Long-term Purpose of Fish Monitoring and Studies","code":"COA 10.18.2","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMFGZ8HC07KDBN51TGSY5","code":"COA 10.18.2","name":"Evaluate Fish Monitoring Results Against Biological Criteria"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.18.2 Long-term Purpose of Fish Monitoring and Studies"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.18.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Long-term Purpose of Fish Monitoring and Studies"
            >Long-term Purpose of Fish Monitoring and Studies</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.18.3 Alternative Operating Criteria for Hydrograph Limbs"
          data-item='{"memberId":"COA 10.18.3","id":"COA 10.18.3","title":"Alternative Operating Criteria for Hydrograph Limbs","code":"COA 10.18.3","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMFJP84FPQ8WD96C79HB3","code":"COA 10.18.3","name":"Evaluate Hydrograph Limb Impacts on Covered Fish Species"},{"id":"req_01M2ESMFJQSEEGPYZYE6WVCX4G","code":"COA 10.18.3","name":"Consult CDFW on ITP Amendment for Alternative Operating Criteria"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.18.3 Alternative Operating Criteria for Hydrograph Limbs"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.18.3</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Alternative Operating Criteria for Hydrograph Limbs"
            >Alternative Operating Criteria for Hydrograph Limbs</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.19 Fisheries Evaluation Studies"
          data-item='{"memberId":"COA 10.19","id":"COA 10.19","title":"Fisheries Evaluation Studies","code":"COA 10.19","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMFMEJXZM1HVYK3XV5PQT","code":"COA 10.19","name":"Conduct Fisheries Evaluation Studies for Covered Fish Species"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.19 Fisheries Evaluation Studies"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.19</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Fisheries Evaluation Studies"
            >Fisheries Evaluation Studies</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.19.1 Migration and Survival Study"
          data-item='{"memberId":"COA 10.19.1","id":"COA 10.19.1","title":"Migration and Survival Study","code":"COA 10.19.1","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMFP7PJEEVSGSWXDT8J8C","code":"COA 10.19.1","name":"Develop Migration and Survival Study Plan"},{"id":"req_01M2ESMFP7PJEEVSGSWXDT8J8D","code":"COA 10.19.1","name":"Fund and Implement Migration and Survival Telemetry Study"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
          data-f-species="chinook salmon"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.19.1 Migration and Survival Study"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.19.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Migration and Survival Study"
            >Migration and Survival Study</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.19.2 Predation Study"
          data-item='{"memberId":"COA 10.19.2","id":"COA 10.19.2","title":"Predation Study","code":"COA 10.19.2","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMFR2KXGWDWNPQA65Y5SW","code":"COA 10.19.2","name":"Develop Predation Study Plan"},{"id":"req_01M2ESMFR2KXGWDWNPQA65Y5SX","code":"COA 10.19.2","name":"Capture, Tag, and Survey Predatory Fish Distribution"},{"id":"req_01M2ESMFR2KXGWDWNPQA65Y5SY","code":"COA 10.19.2","name":"Measure Predation Rate on Covered Fish Species"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
          data-f-species="chinook salmon|black bass|catfish|sacramento pikeminnow|striped bass"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox size="sm" aria-label="COA 10.19.2 Predation Study"></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.19.2</span
          ><span class="bcn-lao__label" data-opt-label="" data-text="Predation Study"
            >Predation Study</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.19.3 Abundance and Distribution Study"
          data-item='{"memberId":"COA 10.19.3","id":"COA 10.19.3","title":"Abundance and Distribution Study","code":"COA 10.19.3","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMFSVPYFXAKH7EGNG5276","code":"COA 10.19.3","name":"Develop Covered Fish Species Abundance and Distribution Study Plan"},{"id":"req_01M2ESMFSWDA12BBS51THCDAHH","code":"COA 10.19.3","name":"Conduct Near-Field Abundance and Distribution Monitoring"},{"id":"req_01M2ESMFSWDA12BBS51THCDAHJ","code":"COA 10.19.3","name":"Conduct Far-Field Abundance and Distribution Monitoring"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.19.3 Abundance and Distribution Study"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.19.3</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Abundance and Distribution Study"
            >Abundance and Distribution Study</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.20 Water Quality Evaluation Studies"
          data-item='{"memberId":"COA 10.20","id":"COA 10.20","title":"Water Quality Evaluation Studies","code":"COA 10.20","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMFVMMT7GYMAYSSJWC4NA","code":"COA 10.20","name":"Conduct Water Quality Evaluation Studies Program"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.20 Water Quality Evaluation Studies"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.20</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Water Quality Evaluation Studies"
            >Water Quality Evaluation Studies</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.20.1 Installation of New Real-time Monitoring Station"
          data-item='{"memberId":"COA 10.20.1","id":"COA 10.20.1","title":"Installation of New Real-time Monitoring Station","code":"COA 10.20.1","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMFXACJWZR5W6GS2G1D3B","code":"COA 10.20.1","name":"Install and Maintain Real-Time Water Quality Monitoring Station"},{"id":"req_01M2ESMFXB7WQBC5CM212M571M","code":"COA 10.20.1","name":"Develop Hydraulic Data Plan for Operating Criteria"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.20.1 Installation of New Real-time Monitoring Station"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.20.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Installation of New Real-time Monitoring Station"
            >Installation of New Real-time Monitoring Station</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.20.2 Sediment and Turbidity Monitoring Study"
          data-item='{"memberId":"COA 10.20.2","id":"COA 10.20.2","title":"Sediment and Turbidity Monitoring Study","code":"COA 10.20.2","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMFZ5H9GH44E6MV06FWQT","code":"COA 10.20.2","name":"Develop Sediment and Turbidity Monitoring Study Plan"},{"id":"req_01M2ESMFZ5H9GH44E6MV06FWQV","code":"COA 10.20.2","name":"Implement Sediment and Turbidity Monitoring Through Phase 2 Operations"},{"id":"req_01M2ESMFZ5H9GH44E6MV06FWQW","code":"COA 10.20.2","name":"Develop and Implement Sediment Reintroduction Plan if Criteria Unmet"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.20.2 Sediment and Turbidity Monitoring Study"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.20.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Sediment and Turbidity Monitoring Study"
            >Sediment and Turbidity Monitoring Study</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.20.3 Harmful Algal Blooms Monitoring Plan"
          data-item='{"memberId":"COA 10.20.3","id":"COA 10.20.3","title":"Harmful Algal Blooms Monitoring Plan","code":"COA 10.20.3","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMG0XBZNCYVWPBKFF9KN3","code":"COA 10.20.3","name":"Develop and Implement Harmful Algal Bloom Monitoring Plan"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.20.3 Harmful Algal Blooms Monitoring Plan"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.20.3</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Harmful Algal Blooms Monitoring Plan"
            >Harmful Algal Blooms Monitoring Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.20.4 Selenium Bioaccumulation Study Plan"
          data-item='{"memberId":"COA 10.20.4","id":"COA 10.20.4","title":"Selenium Bioaccumulation Study Plan","code":"COA 10.20.4","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMG2PRTZSMCABGAWR0K28","code":"COA 10.20.4","name":"Develop and Implement Selenium Bioaccumulation Monitoring"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.20.4 Selenium Bioaccumulation Study Plan"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.20.4</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Selenium Bioaccumulation Study Plan"
            >Selenium Bioaccumulation Study Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.20.5 Mercury Monitoring Study Plan"
          data-item='{"memberId":"COA 10.20.5","id":"COA 10.20.5","title":"Mercury Monitoring Study Plan","code":"COA 10.20.5","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMG4EDSA27H7ZGNA9A8PQ","code":"COA 10.20.5","name":"Develop and Implement Mercury Monitoring Study"},{"id":"req_01M2ESMG4EDSA27H7ZGNA9A8PR","code":"COA 10.20.5","name":"Develop and Implement Methylmercury Management Approach if Criteria Exceeded"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.20.5 Mercury Monitoring Study Plan"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.20.5</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Mercury Monitoring Study Plan"
            >Mercury Monitoring Study Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.21 Ecological Response Evaluation Studies"
          data-item='{"memberId":"COA 10.21","id":"COA 10.21","title":"Ecological Response Evaluation Studies","code":"COA 10.21","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMG67SBQQ9NGTDVYWB5GJ","code":"COA 10.21","name":"Conduct Ecological Response Evaluation Studies Program"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.21 Ecological Response Evaluation Studies"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.21</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Ecological Response Evaluation Studies"
            >Ecological Response Evaluation Studies</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.21.1 Hydrodynamics at Georgiana Slough Monitoring"
          data-item='{"memberId":"COA 10.21.1","id":"COA 10.21.1","title":"Hydrodynamics at Georgiana Slough Monitoring","code":"COA 10.21.1","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMG7ZSS0VR9VCVNR8Q59C","code":"COA 10.21.1","name":"Develop and Implement Georgiana Slough Hydrodynamics Monitoring"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.21.1 Hydrodynamics at Georgiana Slough Monitoring"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.21.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Hydrodynamics at Georgiana Slough Monitoring"
            >Hydrodynamics at Georgiana Slough Monitoring</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.21.2 Covered Fish Species Life Cycle Models"
          data-item='{"memberId":"COA 10.21.2","id":"COA 10.21.2","title":"Covered Fish Species Life Cycle Models","code":"COA 10.21.2","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMG9R17WXSGP8V7T4FYJV","code":"COA 10.21.2","name":"Fund and Support Covered Fish Species Life Cycle Models"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species="delta smelt|longfin smelt|spring-run chinook salmon|winter-run chinook salmon|white sturgeon"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.21.2 Covered Fish Species Life Cycle Models"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.21.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Covered Fish Species Life Cycle Models"
            >Covered Fish Species Life Cycle Models</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.21.3 Food Web and Larval Fishes Entrainment Study"
          data-item='{"memberId":"COA 10.21.3","id":"COA 10.21.3","title":"Food Web and Larval Fishes Entrainment Study","code":"COA 10.21.3","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMGBG6K7E9GGDZEX3WR6M","code":"COA 10.21.3","name":"Conduct Baseline Food Web Resource Surveys"},{"id":"req_01M2ESMGBHRNY6JFE0S1HFFP8V","code":"COA 10.21.3","name":"Monitor Food Web and Larval Fish Entrainment During Operations"},{"id":"req_01M2ESMGBHRNY6JFE0S1HFFP8W","code":"COA 10.21.3","name":"Incorporate Food Web and Entrainment Results into Life Cycle Models"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.21.3 Food Web and Larval Fishes Entrainment Study"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.21.3</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Food Web and Larval Fishes Entrainment Study"
            >Food Web and Larval Fishes Entrainment Study</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.21.4 Tidal Wetland Restoration Efficacy Study"
          data-item='{"memberId":"COA 10.21.4","id":"COA 10.21.4","title":"Tidal Wetland Restoration Efficacy Study","code":"COA 10.21.4","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMGD8N4F2ZYV5J3EF3N0N","code":"COA 10.21.4","name":"Develop Tidal Wetland Restoration Efficacy Study and Evaluate Benefits"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.21.4 Tidal Wetland Restoration Efficacy Study"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.21.4</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Tidal Wetland Restoration Efficacy Study"
            >Tidal Wetland Restoration Efficacy Study</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.21.5 Delta Smelt and Longfin Smelt Spawning Habitat Study"
          data-item='{"memberId":"COA 10.21.5","id":"COA 10.21.5","title":"Delta Smelt and Longfin Smelt Spawning Habitat Study","code":"COA 10.21.5","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMGF1TSJX5H4GGJY5YZCJ","code":"COA 10.21.5","name":"Fund and Implement DS/LFS Spawning Habitat Study"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species="delta smelt|longfin smelt"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.21.5 Delta Smelt and Longfin Smelt Spawning Habitat Study"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.21.5</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Delta Smelt and Longfin Smelt Spawning Habitat Study"
            >Delta Smelt and Longfin Smelt Spawning Habitat Study</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.21.6 Refugia Design and Field Study"
          data-item='{"memberId":"COA 10.21.6","id":"COA 10.21.6","title":"Refugia Design and Field Study","code":"COA 10.21.6","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMGGSKMA3NH7DNR3MW3SN","code":"COA 10.21.6","name":"Develop Refugia Design and Field Study Plan"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning|Pre-Construction|Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.21.6 Refugia Design and Field Study"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.21.6</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Refugia Design and Field Study"
            >Refugia Design and Field Study</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.21.7 Sacramento River Flow Reversal and Routing Minimization"
          data-item='{"memberId":"COA 10.21.7","id":"COA 10.21.7","title":"Sacramento River Flow Reversal and Routing Minimization","code":"COA 10.21.7","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMGJJCNQNMMN75S2PQQTY","code":"COA 10.21.7","name":"Manage Diversions to Minimize Sacramento River Flow Reversals"},{"id":"req_01M2ESMGJJCNQNMMN75S2PQQTZ","code":"COA 10.21.7","name":"Assess Juvenile Salmon Route Entrainment by Reach and Junction"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Operations|Pre-Construction|Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.21.7 Sacramento River Flow Reversal and Routing Minimization"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.21.7</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Sacramento River Flow Reversal and Routing Minimization"
            >Sacramento River Flow Reversal and Routing Minimization</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.21.8 Joint Operations Optimization Study"
          data-item='{"memberId":"COA 10.21.8","id":"COA 10.21.8","title":"Joint Operations Optimization Study","code":"COA 10.21.8","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMGMAMKBY5AJH52CX903X","code":"COA 10.21.8","name":"Ensure Operations Meet Covered Fish Species Biological Criteria"},{"id":"req_01M2ESMGMBN9YSZN01BVXBTRPV","code":"COA 10.21.8","name":"Develop and Implement Joint Operations Optimization Study Plan"},{"id":"req_01M2ESMGMBN9YSZN01BVXBTRPW","code":"COA 10.21.8","name":"Report Joint Operations Study Results in Phase 2 Authorization Package"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Operations|Pre-Construction|Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.21.8 Joint Operations Optimization Study"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.21.8</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Joint Operations Optimization Study"
            >Joint Operations Optimization Study</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.21.9 Modeling Needed to Implement Real-time Operations"
          data-item='{"memberId":"COA 10.21.9","id":"COA 10.21.9","title":"Modeling Needed to Implement Real-time Operations","code":"COA 10.21.9","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMGP1Y7ZE95PPTF235TAA","code":"COA 10.21.9","name":"Evaluate and Refine Real-Time Operations Modeling Tools"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.21.9 Modeling Needed to Implement Real-time Operations"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.21.9</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Modeling Needed to Implement Real-time Operations"
            >Modeling Needed to Implement Real-time Operations</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.21.10 Ascending and Descending Hydrograph Limb Studies"
          data-item='{"memberId":"COA 10.21.10","id":"COA 10.21.10","title":"Ascending and Descending Hydrograph Limb Studies","code":"COA 10.21.10","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMGQVQ28RFNJX1ZA1EZMC","code":"COA 10.21.10","name":"Model Ascending Versus Descending Hydrograph Limb Impacts"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.21.10 Ascending and Descending Hydrograph Limb Studies"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.21.10</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Ascending and Descending Hydrograph Limb Studies"
            >Ascending and Descending Hydrograph Limb Studies</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.22 Personnel Conducting Studies and Monitoring"
          data-item='{"memberId":"COA 10.22","id":"COA 10.22","title":"Personnel Conducting Studies and Monitoring","code":"COA 10.22","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMGSM98FYZAKW9PV13PEW","code":"COA 10.22","name":"Ensure Permitted Personnel Conduct Covered Species Studies"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.22 Personnel Conducting Studies and Monitoring"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.22</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Personnel Conducting Studies and Monitoring"
            >Personnel Conducting Studies and Monitoring</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.23 Sacramento River Bathymetric Surveys"
          data-item='{"memberId":"COA 10.23","id":"COA 10.23","title":"Sacramento River Bathymetric Surveys","code":"COA 10.23","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMGVCT9X0A51HY1Y8JGYA","code":"COA 10.23","name":"Conduct Sacramento River Bathymetric Surveys Near Intakes"},{"id":"req_01M2ESMGVDDZE5XV4ZZWKHTZBT","code":"COA 10.23","name":"Report Bathymetric Survey Results Within 120 Days"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.23 Sacramento River Bathymetric Surveys"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.23</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Sacramento River Bathymetric Surveys"
            >Sacramento River Bathymetric Surveys</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.24 Mathematical Model Development Deliverables"
          data-item='{"memberId":"COA 10.24","id":"COA 10.24","title":"Mathematical Model Development Deliverables","code":"COA 10.24","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMGX3R64B0C3GTQ10EM3H","code":"COA 10.24","name":"Submit Final Models and Reports to CDFW Before 30% Design"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.24 Mathematical Model Development Deliverables"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.24</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Mathematical Model Development Deliverables"
            >Mathematical Model Development Deliverables</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.24.1 Sacramento River Hydraulic Model"
          data-item='{"memberId":"COA 10.24.1","id":"COA 10.24.1","title":"Sacramento River Hydraulic Model","code":"COA 10.24.1","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMGYXR984FC4A4EABEBSG","code":"COA 10.24.1","name":"Complete 3D Sacramento River Hydraulic Model"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.24.1 Sacramento River Hydraulic Model"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.24.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Sacramento River Hydraulic Model"
            >Sacramento River Hydraulic Model</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.24.2 Sediment Transport Model"
          data-item='{"memberId":"COA 10.24.2","id":"COA 10.24.2","title":"Sediment Transport Model","code":"COA 10.24.2","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMH0NYS2HV9RZRDQC1BKX","code":"COA 10.24.2","name":"Complete Sacramento River Sediment Transport Model"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.24.2 Sediment Transport Model"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.24.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Sediment Transport Model"
            >Sediment Transport Model</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.25 North Delta Intake Hydraulic Modeling Deliverables"
          data-item='{"memberId":"COA 10.25","id":"COA 10.25","title":"North Delta Intake Hydraulic Modeling Deliverables","code":"COA 10.25","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMH2DT08G18ZCGEFSA9TW","code":"COA 10.25","name":"Submit 10.25.1 Mathematical Model and Report to CDFW"},{"id":"req_01M2ESMH2DT08G18ZCGEFSA9TX","code":"COA 10.25","name":"Submit 10.25.2-10.25.4 Models and Reports to CDFW"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.25 North Delta Intake Hydraulic Modeling Deliverables"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.25</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="North Delta Intake Hydraulic Modeling Deliverables"
            >North Delta Intake Hydraulic Modeling Deliverables</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.25.1 Intake Structure Hydraulic Model, Mathematical"
          data-item='{"memberId":"COA 10.25.1","id":"COA 10.25.1","title":"Intake Structure Hydraulic Model, Mathematical","code":"COA 10.25.1","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMH482SRYPDZ45R1CEVHY","code":"COA 10.25.1","name":"Complete Mathematical Intake Structure Hydraulic Model"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.25.1 Intake Structure Hydraulic Model, Mathematical"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.25.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Intake Structure Hydraulic Model, Mathematical"
            >Intake Structure Hydraulic Model, Mathematical</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.25.2 Intake Structure Hydraulic Modeling, Physical"
          data-item='{"memberId":"COA 10.25.2","id":"COA 10.25.2","title":"Intake Structure Hydraulic Modeling, Physical","code":"COA 10.25.2","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMH6093KC5P4SWVRJXXM3","code":"COA 10.25.2","name":"Complete Physical Reduced-Scale Intake Structure Model"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.25.2 Intake Structure Hydraulic Modeling, Physical"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.25.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Intake Structure Hydraulic Modeling, Physical"
            >Intake Structure Hydraulic Modeling, Physical</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.25.3 Intake Tee Screen Hydraulic Model, Mathematical"
          data-item='{"memberId":"COA 10.25.3","id":"COA 10.25.3","title":"Intake Tee Screen Hydraulic Model, Mathematical","code":"COA 10.25.3","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMH7PGYFFQ2NB0Y9XC3HP","code":"COA 10.25.3","name":"Complete Mathematical Tee Screen Hydraulic Model"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.25.3 Intake Tee Screen Hydraulic Model, Mathematical"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.25.3</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Intake Tee Screen Hydraulic Model, Mathematical"
            >Intake Tee Screen Hydraulic Model, Mathematical</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.25.4 Intake Tee Screen Hydraulic Model, Physical"
          data-item='{"memberId":"COA 10.25.4","id":"COA 10.25.4","title":"Intake Tee Screen Hydraulic Model, Physical","code":"COA 10.25.4","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMH9F16JCFE1QH35MGSZB","code":"COA 10.25.4","name":"Develop Physical Tee Screen Lab Model"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.25.4 Intake Tee Screen Hydraulic Model, Physical"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.25.4</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Intake Tee Screen Hydraulic Model, Physical"
            >Intake Tee Screen Hydraulic Model, Physical</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.26 Fish Guidance System Working Group and Study Plan"
          data-item='{"memberId":"COA 10.26","id":"COA 10.26","title":"Fish Guidance System Working Group and Study Plan","code":"COA 10.26","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMHB8XDGERVYJ54SWK0BB","code":"COA 10.26","name":"Develop Fish Guidance System Study Plan"},{"id":"req_01M2ESMHB8XDGERVYJ54SWK0BC","code":"COA 10.26","name":"Implement Study and Recommend Fish Guidance Approach"},{"id":"req_01M2ESMHB8XDGERVYJ54SWK0BD","code":"COA 10.26","name":"Convene Fish Guidance System Working Group"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.26 Fish Guidance System Working Group and Study Plan"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.26</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Fish Guidance System Working Group and Study Plan"
            >Fish Guidance System Working Group and Study Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.27 Hydraulic Testing for Velocity Requirements"
          data-item='{"memberId":"COA 10.27","id":"COA 10.27","title":"Hydraulic Testing for Velocity Requirements","code":"COA 10.27","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMHD09XMJW13QPHXCDF52","code":"COA 10.27","name":"Prepare and Submit Hydraulic Testing Plan"},{"id":"req_01M2ESMHD1WNN0Q544H487855D","code":"COA 10.27","name":"Conduct Scheduled Fish Screen Hydraulic Tests"},{"id":"req_01M2ESMHD1WNN0Q544H487855E","code":"COA 10.27","name":"Retest Fish Screens After a Qualifying Event"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.27 Hydraulic Testing for Velocity Requirements"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.27</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Hydraulic Testing for Velocity Requirements"
            >Hydraulic Testing for Velocity Requirements</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.27.1 Hydraulic Testing Procedures and Plan Contents"
          data-item='{"memberId":"COA 10.27.1","id":"COA 10.27.1","title":"Hydraulic Testing Procedures and Plan Contents","code":"COA 10.27.1","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMHESPTYZVZHBGTPERHSP","code":"COA 10.27.1","name":"Conduct Fish Screen Testing per NMFS 2023 Guidance"},{"id":"req_01M2ESMHESPTYZVZHBGTPERHSQ","code":"COA 10.27.1","name":"Specify Hydraulic Testing Plan Methods and Contents"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Operations|Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.27.1 Hydraulic Testing Procedures and Plan Contents"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.27.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Hydraulic Testing Procedures and Plan Contents"
            >Hydraulic Testing Procedures and Plan Contents</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.27.2 Approach Velocity Testing Compliance"
          data-item='{"memberId":"COA 10.27.2","id":"COA 10.27.2","title":"Approach Velocity Testing Compliance","code":"COA 10.27.2","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMHGJED0F8PP04FMVHBDZ","code":"COA 10.27.2","name":"Submit Hydraulic Testing Data Within 72 Hours"},{"id":"req_01M2ESMHGJED0F8PP04FMVHBE0","code":"COA 10.27.2","name":"Adjust Baffles and Retest After Non-Compliance"},{"id":"req_01M2ESMHGJED0F8PP04FMVHBE1","code":"COA 10.27.2","name":"Maintain Approach Velocity Within Screening Criteria"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.27.2 Approach Velocity Testing Compliance"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.27.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Approach Velocity Testing Compliance"
            >Approach Velocity Testing Compliance</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.28 Fish Screen Visual Inspections"
          data-item='{"memberId":"COA 10.28","id":"COA 10.28","title":"Fish Screen Visual Inspections","code":"COA 10.28","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMHM3MDV37W0VHBA7M7NS","code":"COA 10.28","name":"Visually Inspect Fish Screens Several Times per Year"},{"id":"req_01M2ESMHM4KCFCMYCV8HCE6WB9","code":"COA 10.28","name":"Remove and Clean Fish Screens Every Six Months"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.28 Fish Screen Visual Inspections"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.28</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Fish Screen Visual Inspections"
            >Fish Screen Visual Inspections</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.29 Sediment Management Inspections at Intakes"
          data-item='{"memberId":"COA 10.29","id":"COA 10.29","title":"Sediment Management Inspections at Intakes","code":"COA 10.29","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMHNV33KRJW34PYX96NJ9","code":"COA 10.29","name":"Inspect Sediment Deposition at Intake Tee Screens"},{"id":"req_01M2ESMHNV33KRJW34PYX96NJA","code":"COA 10.29","name":"Report Sediment Deposition Assessment to CDFW"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.29 Sediment Management Inspections at Intakes"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.29</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Sediment Management Inspections at Intakes"
            >Sediment Management Inspections at Intakes</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 10.30 Screen Impingement Study"
          data-item='{"memberId":"COA 10.30","id":"COA 10.30","title":"Screen Impingement Study","code":"COA 10.30","groupId":"COA 10","groupName":"COA 10","reqs":[{"id":"req_01M2ESMHQM4Y8XNWWGJWTJ3P5M","code":"COA 10.30","name":"Develop and Submit Screen Impingement Study Plan"},{"id":"req_01M2ESMHQM4Y8XNWWGJWTJ3P5N","code":"COA 10.30","name":"Implement Screen Impingement Study During Operations"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 10"
          data-f-phase="Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 10.30 Screen Impingement Study"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.30</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Screen Impingement Study"
            >Screen Impingement Study</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.1 Covered Species Observations and Work Stoppage"
          data-item='{"memberId":"COA 11.1","id":"COA 11.1","title":"Covered Species Observations and Work Stoppage","code":"COA 11.1","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMHSDAW774SZWKJC8RQZB","code":"COA 11.1","name":"Report Covered Species Encounters and Halt Work"},{"id":"req_01M2ESMHSDAW774SZWKJC8RQZC","code":"COA 11.1","name":"Relocate Trapped or Injured Covered Species from Construction Site"},{"id":"req_01M2ESMHSDAW774SZWKJC8RQZD","code":"COA 11.1","name":"Record and Report Covered Species Sighting Locations to CDFW"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.1 Covered Species Observations and Work Stoppage"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Covered Species Observations and Work Stoppage"
            >Covered Species Observations and Work Stoppage</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.2 Covered Species Injury Response"
          data-item='{"memberId":"COA 11.2","id":"COA 11.2","title":"Covered Species Injury Response","code":"COA 11.2","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMHV7XKMQW8P8NFN047XX","code":"COA 11.2","name":"Transport Injured Covered Species to Rehabilitation Facility"},{"id":"req_01M2ESMHV8ZTVEEH1XRC04ZSKM","code":"COA 11.2","name":"Notify CDFW of Injury and Submit Written Incident Report"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.2 Covered Species Injury Response"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Covered Species Injury Response"
            >Covered Species Injury Response</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.4 Pesticide, Fungicide, and Herbicide Use Restrictions"
          data-item='{"memberId":"COA 11.4","id":"COA 11.4","title":"Pesticide, Fungicide, and Herbicide Use Restrictions","code":"COA 11.4","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMHYSHPSSPHZ1CGQNSKGT","code":"COA 11.4","name":"Obtain CDFW Approval Before Any Pesticide or Herbicide Use"},{"id":"req_01M2ESMHYSHPSSPHZ1CGQNSKGV","code":"COA 11.4","name":"Apply Sprays via Licensed Applicator Within Wind Speed Limit"},{"id":"req_01M2ESMHYSHPSSPHZ1CGQNSKGW","code":"COA 11.4","name":"Prepare and Submit Annual Herbicide Application Plan to CDFW"},{"id":"req_01M2ESMHYSHPSSPHZ1CGQNSKGX","code":"COA 11.4","name":"Keep Herbicide and Pesticide Application 300 Feet from Aquatic Habitat"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.4 Pesticide, Fungicide, and Herbicide Use Restrictions"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.4</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Pesticide, Fungicide, and Herbicide Use Restrictions"
            >Pesticide, Fungicide, and Herbicide Use Restrictions</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.5 Prohibition of Rodenticide and Poison Use"
          data-item='{"memberId":"COA 11.5","id":"COA 11.5","title":"Prohibition of Rodenticide and Poison Use","code":"COA 11.5","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMJ0HTG8W8PBKM9K3J0JS","code":"COA 11.5","name":"Prohibit Rodenticide, Poison, and Broadcast Baiting Use"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Post-Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.5 Prohibition of Rodenticide and Poison Use"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.5</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Prohibition of Rodenticide and Poison Use"
            >Prohibition of Rodenticide and Poison Use</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.6 Fertilizer Use Restrictions"
          data-item='{"memberId":"COA 11.6","id":"COA 11.6","title":"Fertilizer Use Restrictions","code":"COA 11.6","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMJ29XED85VTSSFH9QFYF","code":"COA 11.6","name":"Obtain CDFW Written Approval Before Fertilizer Use"},{"id":"req_01M2ESMJ2AQJCN2G7VR9PBB3JB","code":"COA 11.6","name":"Prepare and Submit Fertilizer Application Plan to CDFW"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.6 Fertilizer Use Restrictions"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.6</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Fertilizer Use Restrictions"
            >Fertilizer Use Restrictions</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.7 Daily Work Restrictions"
          data-item='{"memberId":"COA 11.7","id":"COA 11.7","title":"Daily Work Restrictions","code":"COA 11.7","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMJ42JSX41WJGE87W85HT","code":"COA 11.7","name":"Restrict Covered Activities to Daylight Hours"},{"id":"req_01M2ESMJ42JSX41WJGE87W85HV","code":"COA 11.7","name":"Detail and Justify Nighttime Work in Authorization Package"},{"id":"req_01M2ESMJ42JSX41WJGE87W85HW","code":"COA 11.7","name":"Exercise Caution for Nighttime Vehicle Travel After Construction"},{"id":"req_01M2ESMJ42JSX41WJGE87W85HX","code":"COA 11.7","name":"Prohibit Non-Emergency Night Work in CTS Habitat After Construction"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Implementation Planning|Post-Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.7 Daily Work Restrictions"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.7</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Daily Work Restrictions"
            >Daily Work Restrictions</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.8 Artificial Lighting at Night"
          data-item='{"memberId":"COA 11.8","id":"COA 11.8","title":"Artificial Lighting at Night","code":"COA 11.8","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMJ5TQR3PPTWS4JN8K985","code":"COA 11.8","name":"Shield and Limit Nighttime Lighting Spill Toward Habitat"},{"id":"req_01M2ESMJ5VAA2348XZ4ZFCRAC9","code":"COA 11.8","name":"Use Yellow or Orange Lighting Near Covered Species Habitat"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.8 Artificial Lighting at Night"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.8</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Artificial Lighting at Night"
            >Artificial Lighting at Night</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.9 Lighting on Intake Structure"
          data-item='{"memberId":"COA 11.9","id":"COA 11.9","title":"Lighting on Intake Structure","code":"COA 11.9","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMJ7J7YMKT4NMKG844FM5","code":"COA 11.9","name":"Prohibit Permanent Intake Lighting Toward the Sacramento River"},{"id":"req_01M2ESMJ7J7YMKT4NMKG844FM6","code":"COA 11.9","name":"Position Temporary Construction Lighting to Avoid the River Channel"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.9 Lighting on Intake Structure"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.9</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Lighting on Intake Structure"
            >Lighting on Intake Structure</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.10 Visual Barriers Along Access Routes for Nighttime Activities"
          data-item='{"memberId":"COA 11.10","id":"COA 11.10","title":"Visual Barriers Along Access Routes for Nighttime Activities","code":"COA 11.10","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMJ9BGHZMB473YX12MFMD","code":"COA 11.10","name":"Install CDFW-Approved Visual Barriers Along Access Routes"},{"id":"req_01M2ESMJ9BGHZMB473YX12MFME","code":"COA 11.10","name":"Assess Access Road Locations Before Visual Barrier Installation"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.10 Visual Barriers Along Access Routes for Nighttime Activities"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.10</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Visual Barriers Along Access Routes for Nighttime Activities"
            >Visual Barriers Along Access Routes for Nighttime Activities</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.11 Project Vehicle Speed Limits"
          data-item='{"memberId":"COA 11.11","id":"COA 11.11","title":"Project Vehicle Speed Limits","code":"COA 11.11","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMJB3K0AEXATZED9H08N1","code":"COA 11.11","name":"Enforce Project Vehicle Speed Limits on Access Roads"},{"id":"req_01M2ESMJB4W12EQY1N5B9E03H0","code":"COA 11.11","name":"Post Speed Limit and Wildlife Crossing Signage"},{"id":"req_01M2ESMJB4W12EQY1N5B9E03H1","code":"COA 11.11","name":"Enforce Nighttime 10 MPH Limit at Bethany Complex"},{"id":"req_01M2ESMJB4W12EQY1N5B9E03H2","code":"COA 11.11","name":"Limit Speed Near GGS Habitat During Active Season"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.11 Project Vehicle Speed Limits"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.11</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Project Vehicle Speed Limits"
            >Project Vehicle Speed Limits</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.12 Wildlife Road-crossing Structures"
          data-item='{"memberId":"COA 11.12","id":"COA 11.12","title":"Wildlife Road-crossing Structures","code":"COA 11.12","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMJCW3S0Y78C3N63HEMHA","code":"COA 11.12","name":"Design Wildlife-Passable Roadway Curbs and Barriers"},{"id":"req_01M2ESMJCW3S0Y78C3N63HEMHB","code":"COA 11.12","name":"Submit Wildlife Culvert Under-crossing Plan for CDFW Approval"},{"id":"req_01M2ESMJCW3S0Y78C3N63HEMHC","code":"COA 11.12","name":"Construct Wildlife Under-crossing Culverts to Specification"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.12 Wildlife Road-crossing Structures"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.12</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Wildlife Road-crossing Structures"
            >Wildlife Road-crossing Structures</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.13 Precipitation Work Limit"
          data-item='{"memberId":"COA 11.13","id":"COA 11.13","title":"Precipitation Work Limit","code":"COA 11.13","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMJEM2TNZCJNZX5RKPYYN","code":"COA 11.13","name":"Restrict Work Near Waters During Rain and Wet Weather"},{"id":"req_01M2ESMJEM2TNZCJNZX5RKPYYP","code":"COA 11.13","name":"Initiate Erosion Control Measures Before Storm Events"},{"id":"req_01M2ESMJEM2TNZCJNZX5RKPYYQ","code":"COA 11.13","name":"Monitor 72-Hour Weather Forecast for Each Project Site"},{"id":"req_01M2ESMJEM2TNZCJNZX5RKPYYR","code":"COA 11.13","name":"Survey Site for Clearance Before Resuming After Rain"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.13 Precipitation Work Limit"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.13</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Precipitation Work Limit"
            >Precipitation Work Limit</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.14 Daily Entrapment Inspections"
          data-item='{"memberId":"COA 11.14","id":"COA 11.14","title":"Daily Entrapment Inspections","code":"COA 11.14","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMJGCA5WEKEPJA6HV1AQE","code":"COA 11.14","name":"Inspect Overnight Equipment and Excavations Each Morning"},{"id":"req_01M2ESMJGDAZD639XYXVJKZ53Z","code":"COA 11.14","name":"Cover or Ramp Open Excavations Nightly"},{"id":"req_01M2ESMJGDAZD639XYXVJKZ540","code":"COA 11.14","name":"Install Exclusion Barriers Around Shaft Openings"},{"id":"req_01M2ESMJGDAZD639XYXVJKZ541","code":"COA 11.14","name":"Inspect Excavations Before Filling for Trapped Animals"},{"id":"req_01M2ESMJGDAZD639XYXVJKZ542","code":"COA 11.14","name":"Divert Activities When Wildlife Found in Excavations"},{"id":"req_01M2ESMJGDAZD639XYXVJKZ543","code":"COA 11.14","name":"Relocate Wildlife Found in Excavations"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.14 Daily Entrapment Inspections"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.14</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Daily Entrapment Inspections"
            >Daily Entrapment Inspections</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.15 Pipes, Culverts, and Other Materials Inspections"
          data-item='{"memberId":"COA 11.15","id":"COA 11.15","title":"Pipes, Culverts, and Other Materials Inspections","code":"COA 11.15","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMJJ6GFENC0595YKR32VJ","code":"COA 11.15","name":"Inspect Stored Pipes and Culverts for Wildlife"},{"id":"req_01M2ESMJJ7FY4RXDK08MWJQGCH","code":"COA 11.15","name":"Minimize and Regularly Remove Debris Piles After Inspection"},{"id":"req_01M2ESMJJ7FY4RXDK08MWJQGCJ","code":"COA 11.15","name":"Respond to Wildlife Found in Stored Pipes or Debris"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.15 Pipes, Culverts, and Other Materials Inspections"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.15</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Pipes, Culverts, and Other Materials Inspections"
            >Pipes, Culverts, and Other Materials Inspections</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.16 Disposal of Spoils, RTM, and Dredged Material"
          data-item='{"memberId":"COA 11.16","id":"COA 11.16","title":"Disposal of Spoils, RTM, and Dredged Material","code":"COA 11.16","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMJKYQ156WGZ62C1YQYFS","code":"COA 11.16","name":"Develop Spoils, RTM and Dredged Material Disposal Plan"},{"id":"req_01M2ESMJKZ1ZK3GZFZDFASB7W9","code":"COA 11.16","name":"Size and Site Spoils and RTM Storage Areas"},{"id":"req_01M2ESMJKZ1ZK3GZFZDFASB7WA","code":"COA 11.16","name":"Restrict Storage Site Placement Near Habitat and Watercourses"},{"id":"req_01M2ESMJKZ1ZK3GZFZDFASB7WB","code":"COA 11.16","name":"Haul or Pile Cleared Vegetative Material Away From Habitat"},{"id":"req_01M2ESMJKZ1ZK3GZFZDFASB7WC","code":"COA 11.16","name":"Restrict Chipping and Stockpiling Over Topsoil"},{"id":"req_01M2ESMJKZ1ZK3GZFZDFASB7WD","code":"COA 11.16","name":"Backfill or Remove Grubbed Rock and Inorganic Material"},{"id":"req_01M2ESMJKZ1ZK3GZFZDFASB7WE","code":"COA 11.16","name":"Prevent Erosion and Toxicity from RTM Drainage Discharge"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.16 Disposal of Spoils, RTM, and Dredged Material"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.16</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Disposal of Spoils, RTM, and Dredged Material"
            >Disposal of Spoils, RTM, and Dredged Material</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.17 Electrical Power Line Support Placement"
          data-item='{"memberId":"COA 11.17","id":"COA 11.17","title":"Electrical Power Line Support Placement","code":"COA 11.17","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMJNPKPZXW6GQRP907SEQ","code":"COA 11.17","name":"Site Power Lines and Structures to Avoid Covered Species Habitat"},{"id":"req_01M2ESMJNQ9FV420MSYCZ3Q6ET","code":"COA 11.17","name":"Restore Areas Disturbed by Power Line Construction"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Construction|Post-Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.17 Electrical Power Line Support Placement"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.17</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Electrical Power Line Support Placement"
            >Electrical Power Line Support Placement</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.17.1 Transmission Line Bird Strike Diverters"
          data-item='{"memberId":"COA 11.17.1","id":"COA 11.17.1","title":"Transmission Line Bird Strike Diverters","code":"COA 11.17.1","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMJQFYA8QN1KR6N41VJE2","code":"COA 11.17.1","name":"Install Bird Strike Diverters on New and Existing Power Lines"},{"id":"req_01M2ESMJQG67M0XWJTESQAFJ49","code":"COA 11.17.1","name":"Inspect and Replace Bird Strike Diverters Annually"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.17.1 Transmission Line Bird Strike Diverters"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.17.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Transmission Line Bird Strike Diverters"
            >Transmission Line Bird Strike Diverters</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.18 Vegetation Management"
          data-item='{"memberId":"COA 11.18","id":"COA 11.18","title":"Vegetation Management","code":"COA 11.18","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMJS8SQ5SW593M924G2B3","code":"COA 11.18","name":"Minimize Vegetation Disturbance and Protect No-Disturbance Buffers"},{"id":"req_01M2ESMJS8SQ5SW593M924G2B4","code":"COA 11.18","name":"Hand-Trim Protected Vegetation for Access Only"},{"id":"req_01M2ESMJS999Z18GR8YFDYGW1G","code":"COA 11.18","name":"Obtain CDFW Approval for Non-String-Trimmer Mowing Equipment"},{"id":"req_01M2ESMJS999Z18GR8YFDYGW1H","code":"COA 11.18","name":"Set Minimum Mower Blade Heights"},{"id":"req_01M2ESMJS999Z18GR8YFDYGW1J","code":"COA 11.18","name":"Monitor for Fossorial Species During Vegetation Management"},{"id":"req_01M2ESMJS999Z18GR8YFDYGW1K","code":"COA 11.18","name":"Time Mowing to Species Dormancy and Dry Conditions"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.18 Vegetation Management"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.18</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Vegetation Management"
            >Vegetation Management</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.19 Prevention of Spread of Invasive Species"
          data-item='{"memberId":"COA 11.19","id":"COA 11.19","title":"Prevention of Spread of Invasive Species","code":"COA 11.19","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMJV4F9SC76BM0QNDZZVY","code":"COA 11.19","name":"Conduct Pre-Project Baseline Invasive Plant Survey"},{"id":"req_01M2ESMJV4F9SC76BM0QNDZZVZ","code":"COA 11.19","name":"Conduct Annual Invasive Plant Monitoring Survey"},{"id":"req_01M2ESMJV4F9SC76BM0QNDZZW0","code":"COA 11.19","name":"Prevent Introduction and Spread of Invasive Species Between Sites"},{"id":"req_01M2ESMJV4F9SC76BM0QNDZZW1","code":"COA 11.19","name":"Implement BMPs to Prevent Phytophthora and Mold Spread"},{"id":"req_01M2ESMJV5HBRQ84EMFSSQ1EN9","code":"COA 11.19","name":"Permanently Remove Bullfrogs Encountered During Work"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
          data-f-species="bullfrogs"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.19 Prevention of Spread of Invasive Species"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.19</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Prevention of Spread of Invasive Species"
            >Prevention of Spread of Invasive Species</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.19.1 Invasive Plant Species Monitoring, Management, and Control Plan"
          data-item='{"memberId":"COA 11.19.1","id":"COA 11.19.1","title":"Invasive Plant Species Monitoring, Management, and Control Plan","code":"COA 11.19.1","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMJWX86XC6P7ST3J5X0Q8","code":"COA 11.19.1","name":"Develop Draft Invasive Plant Species Management Plan"},{"id":"req_01M2ESMJWX86XC6P7ST3J5X0Q9","code":"COA 11.19.1","name":"Submit Final IPSMMCP for Each Construction Phase"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.19.1 Invasive Plant Species Monitoring, Management, and Control Plan"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.19.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Invasive Plant Species Monitoring, Management, and Control Plan"
            >Invasive Plant Species Monitoring, Management, and Control Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.19.2 Invasive Plant Species Management"
          data-item='{"memberId":"COA 11.19.2","id":"COA 11.19.2","title":"Invasive Plant Species Management","code":"COA 11.19.2","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMJYNR0JHB8SG91G6WA6E","code":"COA 11.19.2","name":"Oversee Invasive Plant Removal During Restoration"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Post-Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.19.2 Invasive Plant Species Management"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.19.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Invasive Plant Species Management"
            >Invasive Plant Species Management</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.20 Hazards to Covered Species"
          data-item='{"memberId":"COA 11.20","id":"COA 11.20","title":"Hazards to Covered Species","code":"COA 11.20","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMK0DDG4ZFNJAKCEHPAGJ","code":"COA 11.20","name":"Prohibit Pets, Campfires, and Firearms at Construction Sites"},{"id":"req_01M2ESMK0E6ZRR9CKPYAD4WQJF","code":"COA 11.20","name":"Store Food-Related Trash in Enclosed Containers"},{"id":"req_01M2ESMK0E6ZRR9CKPYAD4WQJG","code":"COA 11.20","name":"Remove Trash from Site Weekly"},{"id":"req_01M2ESMK0E6ZRR9CKPYAD4WQJH","code":"COA 11.20","name":"Include Litter Compliance Language in Contractor Contracts"},{"id":"req_01M2ESMK0E6ZRR9CKPYAD4WQJJ","code":"COA 11.20","name":"Cover and Secure Loads on Trash-Hauling Vehicles"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Maintenance|Implementation Planning"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.20 Hazards to Covered Species"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.20</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Hazards to Covered Species"
            >Hazards to Covered Species</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.21 Hazardous Materials Management Plans"
          data-item='{"memberId":"COA 11.21","id":"COA 11.21","title":"Hazardous Materials Management Plans","code":"COA 11.21","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMK264B6YJSTX7W90NN3M","code":"COA 11.21","name":"Develop Hazardous Materials Management Plan Before Covered Activities"},{"id":"req_01M2ESMK264B6YJSTX7W90NN3N","code":"COA 11.21","name":"Maintain Historic Contamination and Inspection Database"},{"id":"req_01M2ESMK264B6YJSTX7W90NN3P","code":"COA 11.21","name":"Designate Storage Sites for Fuel, Oil, and Petroleum Products"},{"id":"req_01M2ESMK27YFM5RYJ58JMWJ8R9","code":"COA 11.21","name":"Label Hazardous Material Containers"},{"id":"req_01M2ESMK27YFM5RYJ58JMWJ8RA","code":"COA 11.21","name":"Obtain CDFW Permission for Hazardous Material Use Near Streams"},{"id":"req_01M2ESMK27YFM5RYJ58JMWJ8RB","code":"COA 11.21","name":"Provide Material Safety Data Sheets to Site Personnel"},{"id":"req_01M2ESMK27YFM5RYJ58JMWJ8RC","code":"COA 11.21","name":"Limit Temporary Hazardous Materials Storage to 90 Days"},{"id":"req_01M2ESMK27YFM5RYJ58JMWJ8RD","code":"COA 11.21","name":"Segregate, Contain, and Remove Contaminated Soils"},{"id":"req_01M2ESMK27YFM5RYJ58JMWJ8RE","code":"COA 11.21","name":"Stage Spill Containment and Kits at Every Work Site"},{"id":"req_01M2ESMK27YFM5RYJ58JMWJ8RF","code":"COA 11.21","name":"Submit HMMP to CDFW with Construction Phase Authorization Package"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction|Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.21 Hazardous Materials Management Plans"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.21</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Hazardous Materials Management Plans"
            >Hazardous Materials Management Plans</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.22 Spill Prevention, Control, and Countermeasure Plans"
          data-item='{"memberId":"COA 11.22","id":"COA 11.22","title":"Spill Prevention, Control, and Countermeasure Plans","code":"COA 11.22","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMK3YTNATKZ8DGM1P6DTC","code":"COA 11.22","name":"Develop SPCCP and Ensure Stormwater Permit Compliance"},{"id":"req_01M2ESMK3ZJQ9BHNEKAKFQY2VB","code":"COA 11.22","name":"Address Site-Specific Spill Prevention and Notification Actions"},{"id":"req_01M2ESMK3ZJQ9BHNEKAKFQY2VC","code":"COA 11.22","name":"Scope SPCCP to Oil and Petroleum-Based Products"},{"id":"req_01M2ESMK3ZJQ9BHNEKAKFQY2VD","code":"COA 11.22","name":"Train Personnel in Emergency Response and Spill Containment"},{"id":"req_01M2ESMK3ZJQ9BHNEKAKFQY2VE","code":"COA 11.22","name":"Store Petroleum Products at Impervious Storage Sites"},{"id":"req_01M2ESMK3ZJQ9BHNEKAKFQY2VF","code":"COA 11.22","name":"Contain Concrete and Wash Water in Watertight Structures"},{"id":"req_01M2ESMK3ZJQ9BHNEKAKFQY2VG","code":"COA 11.22","name":"Maintain Spill Containment Materials in Sealed Containers"},{"id":"req_01M2ESMK3ZJQ9BHNEKAKFQY2VH","code":"COA 11.22","name":"Use Spill Containment Materials Under Fuel Transfer Areas"},{"id":"req_01M2ESMK3ZJQ9BHNEKAKFQY2VJ","code":"COA 11.22","name":"Inspect Water-Contact Equipment Daily for Petroleum Leaks"},{"id":"req_01M2ESMK3ZJQ9BHNEKAKFQY2VK","code":"COA 11.22","name":"Clean Petroleum Products Off Equipment Before Water Contact"},{"id":"req_01M2ESMK3ZJQ9BHNEKAKFQY2VM","code":"COA 11.22","name":"Use Oil-Absorbent Booms Near Water"},{"id":"req_01M2ESMK3ZJQ9BHNEKAKFQY2VN","code":"COA 11.22","name":"Design Staging Areas to Prevent Spill Drainage to Waters"},{"id":"req_01M2ESMK406ECZG1RS62GFJ59Y","code":"COA 11.22","name":"Contain the Source of an Accidental Spill"},{"id":"req_01M2ESMK406ECZG1RS62GFJ59Z","code":"COA 11.22","name":"Notify CDFW of Accidental Spills Within 24 Hours"},{"id":"req_01M2ESMK406ECZG1RS62GFJ5A0","code":"COA 11.22","name":"Submit SPCC Plans to CDFW with Construction Phase Authorization Package"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Construction|Pre-Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.22 Spill Prevention, Control, and Countermeasure Plans"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.22</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Spill Prevention, Control, and Countermeasure Plans"
            >Spill Prevention, Control, and Countermeasure Plans</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.23 Groundwater Testing and Monitoring Plan"
          data-item='{"memberId":"COA 11.23","id":"COA 11.23","title":"Groundwater Testing and Monitoring Plan","code":"COA 11.23","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMK5XM7T1VJ6933H6KCBR","code":"COA 11.23","name":"Develop and Submit Groundwater Testing and Monitoring Plan"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.23 Groundwater Testing and Monitoring Plan"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.23</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Groundwater Testing and Monitoring Plan"
            >Groundwater Testing and Monitoring Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.24 Detection of Underground and Natural Gas Wells"
          data-item='{"memberId":"COA 11.24","id":"COA 11.24","title":"Detection of Underground and Natural Gas Wells","code":"COA 11.24","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMK7NGGYP3AZGTTG4KXZ5","code":"COA 11.24","name":"Develop and Submit Underground Well Detection Plan"},{"id":"req_01M2ESMK7PAVW5TD19TE9Z6C2T","code":"COA 11.24","name":"Disclose Detected Wells in Construction Phase Authorization Package"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.24 Detection of Underground and Natural Gas Wells"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.24</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Detection of Underground and Natural Gas Wells"
            >Detection of Underground and Natural Gas Wells</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.25 Stormwater Pollution Prevention Plans"
          data-item='{"memberId":"COA 11.25","id":"COA 11.25","title":"Stormwater Pollution Prevention Plans","code":"COA 11.25","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMK9EW9X7X4YSN8VHGYXC","code":"COA 11.25","name":"Ensure Stormwater Permit Compliance and Prepare SWPPP"},{"id":"req_01M2ESMK9F910VNEH5Y3ZKSX7Z","code":"COA 11.25","name":"Meet SWRCB and Central Valley RWQCB Stormwater Requirements"},{"id":"req_01M2ESMK9F910VNEH5Y3ZKSX80","code":"COA 11.25","name":"Address Core SWPPP Control Measure Categories"},{"id":"req_01M2ESMK9F910VNEH5Y3ZKSX81","code":"COA 11.25","name":"Prevent Non-Stormwater Discharges to Surface Waters"},{"id":"req_01M2ESMK9F910VNEH5Y3ZKSX82","code":"COA 11.25","name":"Describe Site Conditions, Schedules, Materials, and Training in SWPPP"},{"id":"req_01M2ESMK9F910VNEH5Y3ZKSX83","code":"COA 11.25","name":"Specify SMARTS Reporting Forms and Records"},{"id":"req_01M2ESMK9F910VNEH5Y3ZKSX84","code":"COA 11.25","name":"Submit SWPPP to CDFW with Construction Phase Authorization Package"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.25 Stormwater Pollution Prevention Plans"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.25</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Stormwater Pollution Prevention Plans"
            >Stormwater Pollution Prevention Plans</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.26 Erosion and Sediment Control Plans"
          data-item='{"memberId":"COA 11.26","id":"COA 11.26","title":"Erosion and Sediment Control Plans","code":"COA 11.26","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMKB7XTCSNNGN1FT760N3","code":"COA 11.26","name":"Submit and Implement Site-Specific Erosion and Sediment Control Plan"},{"id":"req_01M2ESMKB8BZD2X5Z1JJH7FZCM","code":"COA 11.26","name":"Maintain Emergency Erosion Control Supplies"},{"id":"req_01M2ESMKB8BZD2X5Z1JJH7FZCN","code":"COA 11.26","name":"Minimize Disturbance of Terrain and Natural Land Features"},{"id":"req_01M2ESMKB8BZD2X5Z1JJH7FZCP","code":"COA 11.26","name":"Divert Runoff Away from Steep or Denuded Slopes"},{"id":"req_01M2ESMKB8BZD2X5Z1JJH7FZCQ","code":"COA 11.26","name":"Retain Trees and Vegetation to Stabilize Hillsides"},{"id":"req_01M2ESMKB8BZD2X5Z1JJH7FZCR","code":"COA 11.26","name":"Limit Ground Disturbance to Stable Areas"},{"id":"req_01M2ESMKB8BZD2X5Z1JJH7FZCS","code":"COA 11.26","name":"Sequence Clearing to Minimize Soil Disturbance Time"},{"id":"req_01M2ESMKB95CSAHR95M0TPRXZT","code":"COA 11.26","name":"Inspect Erosion Controls and Schedule Around Rain Events"},{"id":"req_01M2ESMKB95CSAHR95M0TPRXZV","code":"COA 11.26","name":"Install Runoff and Drainage Control Features"},{"id":"req_01M2ESMKB95CSAHR95M0TPRXZW","code":"COA 11.26","name":"Install Wind Erosion Control Features"},{"id":"req_01M2ESMKB95CSAHR95M0TPRXZX","code":"COA 11.26","name":"Contain Concrete and Wash Water to Protect Surface Waters"},{"id":"req_01M2ESMKB95CSAHR95M0TPRXZY","code":"COA 11.26","name":"Control On-Site Sediment Transport and Turbidity"},{"id":"req_01M2ESMKB95CSAHR95M0TPRXZZ","code":"COA 11.26","name":"Cover Stockpiled Excavated Materials Away from Drainage Courses"},{"id":"req_01M2ESMKB95CSAHR95M0TPRY00","code":"COA 11.26","name":"Replace or Upgrade Drainage Facilities to Minimize Erosion"},{"id":"req_01M2ESMKB95CSAHR95M0TPRY01","code":"COA 11.26","name":"Repave Construction-Damaged Pavement to Prevent Erosion"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Construction|Post-Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.26 Erosion and Sediment Control Plans"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.26</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Erosion and Sediment Control Plans"
            >Erosion and Sediment Control Plans</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.27 Erosion Control Stabilization Prohibitions"
          data-item='{"memberId":"COA 11.27","id":"COA 11.27","title":"Erosion Control Stabilization Prohibitions","code":"COA 11.27","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMKCZB1AQW6B43EGM7WRB","code":"COA 11.27","name":"Obtain CDFW Approval for Erosion Control Stabilization Measures"},{"id":"req_01M2ESMKD0JHB00RJNR3WFEE54","code":"COA 11.27","name":"Prohibit Monofilament and Synthetic Netting for Erosion Control"},{"id":"req_01M2ESMKD0JHB00RJNR3WFEE55","code":"COA 11.27","name":"Use Approved Erosion Control Material Composition and Installation"},{"id":"req_01M2ESMKD0JHB00RJNR3WFEE56","code":"COA 11.27","name":"Include Erosion Control Material Standard in Contractor Bid Specifications"},{"id":"req_01M2ESMKD1149R8RFXNQY4H35H","code":"COA 11.27","name":"Consult 72-Hour Weather Forecasts Before Sediment-Risk Activities"},{"id":"req_01M2ESMKD1149R8RFXNQY4H35J","code":"COA 11.27","name":"Delay Sediment-Risk Activities Until Erosion Controls Are Complete"},{"id":"req_01M2ESMKD1149R8RFXNQY4H35K","code":"COA 11.27","name":"Monitor and Repair Erosion Controls Around Rain Events"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Construction|Pre-Construction|Post-Construction|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.27 Erosion Control Stabilization Prohibitions"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.27</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Erosion Control Stabilization Prohibitions"
            >Erosion Control Stabilization Prohibitions</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.28 Monofilament Netting Prohibition"
          data-item='{"memberId":"COA 11.28","id":"COA 11.28","title":"Monofilament Netting Prohibition","code":"COA 11.28","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMKERYGPK854VAVG6EA2F","code":"COA 11.28","name":"Prohibit Monofilament Netting Site-Wide"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Post-Construction|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.28 Monofilament Netting Prohibition"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.28</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Monofilament Netting Prohibition"
            >Monofilament Netting Prohibition</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.29 Fugitive Dust Control"
          data-item='{"memberId":"COA 11.29","id":"COA 11.29","title":"Fugitive Dust Control","code":"COA 11.29","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMKGHYQC5TH3EPKATNKAS","code":"COA 11.29","name":"Submit Fugitive Dust Control and Monitoring Plan"},{"id":"req_01M2ESMKGJBCK65KGGWNK6WZX8","code":"COA 11.29","name":"Implement Construction-Area Fugitive Dust BMPs"},{"id":"req_01M2ESMKGJBCK65KGGWNK6WZX9","code":"COA 11.29","name":"Plant Vegetative Ground Cover After Construction"},{"id":"req_01M2ESMKGJBCK65KGGWNK6WZXA","code":"COA 11.29","name":"Limit Vehicle Speed on Unpaved Roads to 10 MPH"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Construction|Post-Construction|Pre-Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.29 Fugitive Dust Control"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.29</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Fugitive Dust Control"
            >Fugitive Dust Control</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.30 Construction Mercury Management and Monitoring Plan"
          data-item='{"memberId":"COA 11.30","id":"COA 11.30","title":"Construction Mercury Management and Monitoring Plan","code":"COA 11.30","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMKJ962P3Z8GXN62B4VFD","code":"COA 11.30","name":"Finalize and Obtain CDFW Approval of MMMP"},{"id":"req_01M2ESMKJ962P3Z8GXN62B4VFE","code":"COA 11.30","name":"Conduct Baseline and Annual In-Water Mercury Monitoring"},{"id":"req_01M2ESMKJAAEK7P784Z3NXA5NK","code":"COA 11.30","name":"Report Mercury Monitoring Results to CDFW"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction|Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.30 Construction Mercury Management and Monitoring Plan"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.30</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Construction Mercury Management and Monitoring Plan"
            >Construction Mercury Management and Monitoring Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.31.1 Preconstruction Geotechnical Exploration Work Windows"
          data-item='{"memberId":"COA 11.31.1","id":"COA 11.31.1","title":"Preconstruction Geotechnical Exploration Work Windows","code":"COA 11.31.1","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMKM0VEBTJPRJMCT61J08","code":"COA 11.31.1","name":"Submit Over-Water Geotechnical Exploration Description for CDFW Approval"},{"id":"req_01M2ESMKM1QM5KYNMAGYR6THA6","code":"COA 11.31.1","name":"Restrict Geotechnical Exploration to Aug 1–Oct 31 Window"},{"id":"req_01M2ESMKM1QM5KYNMAGYR6THA7","code":"COA 11.31.1","name":"Enforce Daily Sunset-to-Sunrise In-Water Work Curfew"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.31.1 Preconstruction Geotechnical Exploration Work Windows"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.31.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Preconstruction Geotechnical Exploration Work Windows"
            >Preconstruction Geotechnical Exploration Work Windows</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.31.2 Construction In-Water Work Windows and Pile Driving Limits"
          data-item='{"memberId":"COA 11.31.2","id":"COA 11.31.2","title":"Construction In-Water Work Windows and Pile Driving Limits","code":"COA 11.31.2","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMKNRCMV0V8XY1Q4V7P6R","code":"COA 11.31.2","name":"Restrict In-Water Construction to June 1–Oct 31 Window"},{"id":"req_01M2ESMKNRCMV0V8XY1Q4V7P6S","code":"COA 11.31.2","name":"Cap Impact Pile Driving Within Table 4–6 Limits"},{"id":"req_01M2ESMKNSX5WPNMGT57793V97","code":"COA 11.31.2","name":"Allow Year-Round Pile Driving Inside Cofferdams or Training Walls"},{"id":"req_01M2ESMKNSX5WPNMGT57793V98","code":"COA 11.31.2","name":"Permit Shoulder-Season Pile Driving With Noise Attenuation"},{"id":"req_01M2ESMKNSX5WPNMGT57793V99","code":"COA 11.31.2","name":"Verify Sound Below 150 dB Outside the Work Window"},{"id":"req_01M2ESMKNSX5WPNMGT57793V9A","code":"COA 11.31.2","name":"Submit In-Water Pile Driving Plan for CDFW Approval"},{"id":"req_01M2ESMKNSX5WPNMGT57793V9B","code":"COA 11.31.2","name":"Notify CDFW 60 Days Before In-Water Maintenance"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Implementation Planning|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.31.2 Construction In-Water Work Windows and Pile Driving Limits"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.31.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Construction In-Water Work Windows and Pile Driving Limits"
            >Construction In-Water Work Windows and Pile Driving Limits</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.32 Daily In-Water Work Restriction"
          data-item='{"memberId":"COA 11.32","id":"COA 11.32","title":"Daily In-Water Work Restriction","code":"COA 11.32","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMKQJF35M22DBMHN9PNW7","code":"COA 11.32","name":"Enforce Daily Sunset-to-Sunrise In-Water Work Curfew"},{"id":"req_01M2ESMKQKE1D1BZDS4B33EYMB","code":"COA 11.32","name":"Restrict Pile Driving to 7 AM–7 PM"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.32 Daily In-Water Work Restriction"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.32</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Daily In-Water Work Restriction"
            >Daily In-Water Work Restriction</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.33 Underwater Sound Abatement Plan"
          data-item='{"memberId":"COA 11.33","id":"COA 11.33","title":"Underwater Sound Abatement Plan","code":"COA 11.33","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMKSA5B31E9JAZ7XQPKZF","code":"COA 11.33","name":"Develop and Implement Underwater Sound Abatement Plan"},{"id":"req_01M2ESMKSA5B31E9JAZ7XQPKZG","code":"COA 11.33","name":"Deploy Noise-Attenuation Equipment for Impact Pile Driving"},{"id":"req_01M2ESMKSA5B31E9JAZ7XQPKZH","code":"COA 11.33","name":"Monitor Work Area for Distressed or Injured Fish"},{"id":"req_01M2ESMKSB96CWQM0DXWY5AQH0","code":"COA 11.33","name":"Apply Soft-Start Sequence to Impact Pile Driving"},{"id":"req_01M2ESMKSB96CWQM0DXWY5AQH1","code":"COA 11.33","name":"Provide Fish Escape Route for Multiple Pile Driving Rigs"},{"id":"req_01M2ESMKSB96CWQM0DXWY5AQH2","code":"COA 11.33","name":"Report Hydroacoustic Threshold Exceedances Within One Business Day"},{"id":"req_01M2ESMKSB96CWQM0DXWY5AQH3","code":"COA 11.33","name":"Report Hydroacoustic Results in Compliance and Status Reports"},{"id":"req_01M2ESMKSB96CWQM0DXWY5AQH4","code":"COA 11.33","name":"Conduct Two-Hydrophone Hydroacoustic Monitoring Per Site"},{"id":"req_01M2ESMKSB96CWQM0DXWY5AQH5","code":"COA 11.33","name":"Maintain Injury Thresholds During the Construction Work Window"},{"id":"req_01M2ESMKSB96CWQM0DXWY5AQH6","code":"COA 11.33","name":"Maintain Disturbance Threshold Outside the Work Window"},{"id":"req_01M2ESMKSB96CWQM0DXWY5AQH7","code":"COA 11.33","name":"Coordinate CDFW/NMFS/USFWS Time-of-Day Pile Driving Restriction"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Construction|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.33 Underwater Sound Abatement Plan"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.33</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Underwater Sound Abatement Plan"
            >Underwater Sound Abatement Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.34 Pile Driving Plan"
          data-item='{"memberId":"COA 11.34","id":"COA 11.34","title":"Pile Driving Plan","code":"COA 11.34","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMKV3GT4BZZAA72R61S1X","code":"COA 11.34","name":"Submit Pile Driving Plan for CDFW Approval"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox size="sm" aria-label="COA 11.34 Pile Driving Plan"></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.34</span
          ><span class="bcn-lao__label" data-opt-label="" data-text="Pile Driving Plan"
            >Pile Driving Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.35 Fish Salvage Plan"
          data-item='{"memberId":"COA 11.35","id":"COA 11.35","title":"Fish Salvage Plan","code":"COA 11.35","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMKWWFQ2XBV3AV9Z71DHD","code":"COA 11.35","name":"Develop and Obtain CDFW Approval of Fish Salvage Plan"},{"id":"req_01M2ESMKWX75VN6Q904Q7QHHXM","code":"COA 11.35","name":"Notify CDFW Before Dewatering or Fish-Isolating Activities"},{"id":"req_01M2ESMKWX75VN6Q904Q7QHHXN","code":"COA 11.35","name":"Exclude, Capture, Hold and Release Fish During Salvage"},{"id":"req_01M2ESMKWX75VN6Q904Q7QHHXP","code":"COA 11.35","name":"Train and Staff Fish Salvage Teams with a Biologist"},{"id":"req_01M2ESMKWX75VN6Q904Q7QHHXQ","code":"COA 11.35","name":"Preserve and Deliver Dead Covered Fish Specimens to CDFW"},{"id":"req_01M2ESMKWX75VN6Q904Q7QHHXR","code":"COA 11.35","name":"Report Fish Salvage Results in Annual Status Report"},{"id":"req_01M2ESMKWX75VN6Q904Q7QHHXS","code":"COA 11.35","name":"Provide CDFW Site Access During Fish Salvage Activities"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox size="sm" aria-label="COA 11.35 Fish Salvage Plan"></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.35</span
          ><span class="bcn-lao__label" data-opt-label="" data-text="Fish Salvage Plan"
            >Fish Salvage Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.36 Barge Operations Plan"
          data-item='{"memberId":"COA 11.36","id":"COA 11.36","title":"Barge Operations Plan","code":"COA 11.36","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMKYNZZAGM46HKFBZYF2R","code":"COA 11.36","name":"Develop and Obtain CDFW Approval of Barge Operations Plan"},{"id":"req_01M2ESMKYPBG0Z69DC9K48B19H","code":"COA 11.36","name":"Operate Vessels per Barge Operations BMPs"},{"id":"req_01M2ESMKYPBG0Z69DC9K48B19J","code":"COA 11.36","name":"Train Tugboat and Barge Operators"},{"id":"req_01M2ESMKYPBG0Z69DC9K48B19K","code":"COA 11.36","name":"Inspect In-Water Equipment for Invasive Species Before Deployment"},{"id":"req_01M2ESMKYPBG0Z69DC9K48B19M","code":"COA 11.36","name":"Report Detected Invasive Species to CDFW Within 24 Hours"},{"id":"req_01M2ESMKYQ8AM5AR4SCE24X1JB","code":"COA 11.36","name":"Monitor Barge Loading, Unloading and Geotechnical Activities"},{"id":"req_01M2ESMKYQ8AM5AR4SCE24X1JC","code":"COA 11.36","name":"Report Vessel Groundings and Plan Deviations Within 24 Hours"},{"id":"req_01M2ESMKYQ8AM5AR4SCE24X1JD","code":"COA 11.36","name":"Summarize Annual Barge Monitoring in the Annual Status Report"},{"id":"req_01M2ESMKYQ8AM5AR4SCE24X1JE","code":"COA 11.36","name":"Survey Riverbank and Vegetation Conditions at Barge Sites"},{"id":"req_01M2ESMKYQ8AM5AR4SCE24X1JF","code":"COA 11.36","name":"Restore Riverbanks Eroded by Barge Operations"},{"id":"req_01M2ESMKYQ8AM5AR4SCE24X1JG","code":"COA 11.36","name":"Report Vessel Fuel Spills to CDFW Spill Prevention Office"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Post-Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.36 Barge Operations Plan"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.36</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Barge Operations Plan"
            >Barge Operations Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.37 Dewatering Plan"
          data-item='{"memberId":"COA 11.37","id":"COA 11.37","title":"Dewatering Plan","code":"COA 11.37","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMM0EM81PTXW51E1T9ERW","code":"COA 11.37","name":"Develop and Obtain CDFW Approval of Dewatering Plan"},{"id":"req_01M2ESMM0FVKV7MZMMSVC11NPA","code":"COA 11.37","name":"Screen Dewatering Pump Intakes to Prevent Fish Entrainment"},{"id":"req_01M2ESMM0FVKV7MZMMSVC11NPB","code":"COA 11.37","name":"Station Fisheries Biologist Onsite to Rescue Fish During Dewatering"},{"id":"req_01M2ESMM0FVKV7MZMMSVC11NPC","code":"COA 11.37","name":"Halt Dewatering When Water Levels Drop Too Quickly for Salvage"},{"id":"req_01M2ESMM0FVKV7MZMMSVC11NPD","code":"COA 11.37","name":"Notify CDFW When Fish Salvage Is Complete"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox size="sm" aria-label="COA 11.37 Dewatering Plan"></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.37</span
          ><span class="bcn-lao__label" data-opt-label="" data-text="Dewatering Plan"
            >Dewatering Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.38 Preconstruction Survey Protocols for Covered Species"
          data-item='{"memberId":"COA 11.38","id":"COA 11.38","title":"Preconstruction Survey Protocols for Covered Species","code":"COA 11.38","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMM256F0RRDSBCNM9S5G4","code":"COA 11.38","name":"Develop and Obtain CDFW-Approved Species Survey Protocols"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.38 Preconstruction Survey Protocols for Covered Species"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.38</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Preconstruction Survey Protocols for Covered Species"
            >Preconstruction Survey Protocols for Covered Species</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.39 CTS Habitat Avoidance and Encounter Response"
          data-item='{"memberId":"COA 11.39","id":"COA 11.39","title":"CTS Habitat Avoidance and Encounter Response","code":"COA 11.39","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMM3WQAYANXSHWPZZ1BSW","code":"COA 11.39","name":"Avoid Suitable CTS Habitat and Confine the Work Footprint"},{"id":"req_01M2ESMM3X13N0WRNT88R8CVN6","code":"COA 11.39","name":"Maintain No-Activity Buffer Around CTS Refuge Sites"},{"id":"req_01M2ESMM3X13N0WRNT88R8CVN7","code":"COA 11.39","name":"Notify Designated Biologist of CTS Encounters"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="california tiger salamander"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.39 CTS Habitat Avoidance and Encounter Response"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.39</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="CTS Habitat Avoidance and Encounter Response"
            >CTS Habitat Avoidance and Encounter Response</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.39.1 Vehicle Speed Limits in CTS Habitat"
          data-item='{"memberId":"COA 11.39.1","id":"COA 11.39.1","title":"Vehicle Speed Limits in CTS Habitat","code":"COA 11.39.1","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMM5NN7ECM6KBA3FW2T7C","code":"COA 11.39.1","name":"Observe 10 MPH Speed Limits in CTS Habitat and Near Burrows"},{"id":"req_01M2ESMM5PJ68M2M1KZ3RW9HGJ","code":"COA 11.39.1","name":"Post 10 MPH Speed Limit Signage on Nonpublic Project Roads"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
          data-f-species="california tiger salamander"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.39.1 Vehicle Speed Limits in CTS Habitat"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.39.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Vehicle Speed Limits in CTS Habitat"
            >Vehicle Speed Limits in CTS Habitat</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.40 CTS Breeding Habitat Avoidance Near Conserved Lands"
          data-item='{"memberId":"COA 11.40","id":"COA 11.40","title":"CTS Breeding Habitat Avoidance Near Conserved Lands","code":"COA 11.40","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMM7D459TJFVVKTJEAM9C","code":"COA 11.40","name":"Demarcate 300-Foot No-Activity Buffer Around CTS Breeding Habitat"},{"id":"req_01M2ESMM7EFFY55TCP0J01VJ85","code":"COA 11.40","name":"Restrict Unavoidable Breeding-Habitat Work to the Dry Season"},{"id":"req_01M2ESMM7EFFY55TCP0J01VJ86","code":"COA 11.40","name":"Coordinate with CDFW on Breeding Habitat Buffer Encroachment"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance|Implementation Planning"
          data-f-species="california tiger salamander"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.40 CTS Breeding Habitat Avoidance Near Conserved Lands"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.40</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="CTS Breeding Habitat Avoidance Near Conserved Lands"
            >CTS Breeding Habitat Avoidance Near Conserved Lands</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.41 CTS Measures for Preconstruction, SCADA, Transmission and Access Road Work"
          data-item='{"memberId":"COA 11.41","id":"COA 11.41","title":"CTS Measures for Preconstruction, SCADA, Transmission and Access Road Work","code":"COA 11.41","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMM94TH79BEBAWHWR9EE0","code":"COA 11.41","name":"Station Biologist During Site Selection, Access and Set-Up"},{"id":"req_01M2ESMM95JM93STV0ZS9872BN","code":"COA 11.41","name":"Flag Occupied Burrows With 75-Foot No-Activity Buffers"},{"id":"req_01M2ESMM95JM93STV0ZS9872BP","code":"COA 11.41","name":"Conduct Daily Preconstruction Burrow Surveys"},{"id":"req_01M2ESMM95JM93STV0ZS9872BQ","code":"COA 11.41","name":"Confine Heavy Equipment to Approved Access Routes"},{"id":"req_01M2ESMM95JM93STV0ZS9872BR","code":"COA 11.41","name":"Restore Temporarily Disturbed CTS Habitat With Native Vegetation"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance|Post-Construction"
          data-f-species="california tiger salamander"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.41 CTS Measures for Preconstruction, SCADA, Transmission and Access Road Work"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.41</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="CTS Measures for Preconstruction, SCADA, Transmission and Access Road Work"
            >CTS Measures for Preconstruction, SCADA, Transmission and Access Road
            Work</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.42 CTS Preconstruction and Construction-Phase Surveys"
          data-item='{"memberId":"COA 11.42","id":"COA 11.42","title":"CTS Preconstruction and Construction-Phase Surveys","code":"COA 11.42","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMMAY0PGV8V7Z8ACMASBF","code":"COA 11.42","name":"Submit CTS Preconstruction Survey Results to CDFW for Approval"},{"id":"req_01M2ESMMAY0PGV8V7Z8ACMASBG","code":"COA 11.42","name":"Report Annual Construction-Phase CTS Surveys to CDFW"},{"id":"req_01M2ESMMAY0PGV8V7Z8ACMASBH","code":"COA 11.42","name":"Complete Walking Clearance Survey Before Clearing or Ground Disturbance"},{"id":"req_01M2ESMMAY0PGV8V7Z8ACMASBJ","code":"COA 11.42","name":"Monitor Initial Grading and Excavation for CTS"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="california tiger salamander"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.42 CTS Preconstruction and Construction-Phase Surveys"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.42</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="CTS Preconstruction and Construction-Phase Surveys"
            >CTS Preconstruction and Construction-Phase Surveys</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.42.1 CTS Preconstruction Watering Protocol"
          data-item='{"memberId":"COA 11.42.1","id":"COA 11.42.1","title":"CTS Preconstruction Watering Protocol","code":"COA 11.42.1","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMMCQ2FHMYR575BA568WT","code":"COA 11.42.1","name":"Prepare CDFW-Consulted Preconstruction Watering Protocol"},{"id":"req_01M2ESMMCQ2FHMYR575BA568WV","code":"COA 11.42.1","name":"Conduct Morning Survey and Relocate CTS After Burrow Watering"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species="california tiger salamander"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.42.1 CTS Preconstruction Watering Protocol"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.42.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="CTS Preconstruction Watering Protocol"
            >CTS Preconstruction Watering Protocol</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.42.2 CTS Mowing Restrictions"
          data-item='{"memberId":"COA 11.42.2","id":"COA 11.42.2","title":"CTS Mowing Restrictions","code":"COA 11.42.2","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMMEFBX4WFR4CPK6HQKWB","code":"COA 11.42.2","name":"Avoid Removing Vegetation Within Burrows and Refugia"},{"id":"req_01M2ESMMEG0R2D5MWTTDJMHNAB","code":"COA 11.42.2","name":"Mow in a Non-Concentrating Pattern During Dry Daytime Conditions"},{"id":"req_01M2ESMMEG0R2D5MWTTDJMHNAC","code":"COA 11.42.2","name":"Obtain CDFW Approval for Non-String-Trimmer Mowing Equipment"},{"id":"req_01M2ESMMEG0R2D5MWTTDJMHNAD","code":"COA 11.42.2","name":"Monitor Mowing Operations for Emerging CTS"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="california tiger salamander"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.42.2 CTS Mowing Restrictions"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.42.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="CTS Mowing Restrictions"
            >CTS Mowing Restrictions</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.43 CTS Exclusion Barrier Installation and Maintenance"
          data-item='{"memberId":"COA 11.43","id":"COA 11.43","title":"CTS Exclusion Barrier Installation and Maintenance","code":"COA 11.43","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMMG8S1HWB1AND39KY4G7","code":"COA 11.43","name":"Submit Site-Specific Exclusion Barrier Design for CDFW Approval"},{"id":"req_01M2ESMMG8S1HWB1AND39KY4G8","code":"COA 11.43","name":"Install and Maintain High-Visibility CTS Exclusion Barrier"},{"id":"req_01M2ESMMG8S1HWB1AND39KY4G9","code":"COA 11.43","name":"Build Exclusion Barrier to Required Fencing Specifications"},{"id":"req_01M2ESMMG9385GQ6TSP4A11WCH","code":"COA 11.43","name":"Prohibit Plastic Monofilament Netting in the Exclusion Barrier"},{"id":"req_01M2ESMMG9385GQ6TSP4A11WCJ","code":"COA 11.43","name":"Keep Exclusion Barrier Access Gates Closed When Not in Use"},{"id":"req_01M2ESMMG9385GQ6TSP4A11WCK","code":"COA 11.43","name":"Monitor Exclusion Barrier Installation and Ongoing Integrity"},{"id":"req_01M2ESMMG9385GQ6TSP4A11WCM","code":"COA 11.43","name":"Repair Exclusion Barrier Defects Within 24 Hours"},{"id":"req_01M2ESMMG9385GQ6TSP4A11WCN","code":"COA 11.43","name":"Conduct Clearance Survey Before Reinitiating Activities After Barrier Repair"},{"id":"req_01M2ESMMGAXNN0F9PTZR9D531Y","code":"COA 11.43","name":"Provide Refuge Cover and Maintain Vegetation Along the Barrier"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Post-Construction|Maintenance"
          data-f-species="california tiger salamander"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.43 CTS Exclusion Barrier Installation and Maintenance"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.43</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="CTS Exclusion Barrier Installation and Maintenance"
            >CTS Exclusion Barrier Installation and Maintenance</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.44 CTS Seasonal Work Window"
          data-item='{"memberId":"COA 11.44","id":"COA 11.44","title":"CTS Seasonal Work Window","code":"COA 11.44","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMMJ1ZJBJE406FTY5NWYV","code":"COA 11.44","name":"Limit Ground-Disturbing Work to CTS Dry-Season Window"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="california tiger salamander"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.44 CTS Seasonal Work Window"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.44</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="CTS Seasonal Work Window"
            >CTS Seasonal Work Window</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.45 Rain Forecast Work Stoppage Near CTS Breeding Sites"
          data-item='{"memberId":"COA 11.45","id":"COA 11.45","title":"Rain Forecast Work Stoppage Near CTS Breeding Sites","code":"COA 11.45","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMMMG5744RQ9XYPGCYB2J","code":"COA 11.45","name":"Monitor NWS 72-Hour Rain Forecast Before Site Work"},{"id":"req_01M2ESMMMH0D7BAQ0QJ0GX0MM6","code":"COA 11.45","name":"Cease Construction on 30% Rain Forecast Near CTS Breeding Sites"},{"id":"req_01M2ESMMMH0D7BAQ0QJ0GX0MM7","code":"COA 11.45","name":"Survey Project Site Before Work on Rain-Forecast Days"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="california tiger salamander"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.45 Rain Forecast Work Stoppage Near CTS Breeding Sites"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.45</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Rain Forecast Work Stoppage Near CTS Breeding Sites"
            >Rain Forecast Work Stoppage Near CTS Breeding Sites</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.46 CTS Time of Day Work Restriction"
          data-item='{"memberId":"COA 11.46","id":"COA 11.46","title":"CTS Time of Day Work Restriction","code":"COA 11.46","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMMPK3754MVG37HGJJK0X","code":"COA 11.46","name":"Assess CTS Active Season Yearly at Each Construction Site"},{"id":"req_01M2ESMMPK3754MVG37HGJJK0Y","code":"COA 11.46","name":"Restrict Covered Activities to Daylight Hours in CTS Active Season"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="california tiger salamander"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.46 CTS Time of Day Work Restriction"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.46</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="CTS Time of Day Work Restriction"
            >CTS Time of Day Work Restriction</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.47 Night Work Lighting Near CTS Habitat"
          data-item='{"memberId":"COA 11.47","id":"COA 11.47","title":"Night Work Lighting Near CTS Habitat","code":"COA 11.47","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMMRAVC9JDF9WNS47SGKG","code":"COA 11.47","name":"Restrict Night-Work Lighting to Worker Safety Uses"},{"id":"req_01M2ESMMRAVC9JDF9WNS47SGKH","code":"COA 11.47","name":"Survey Burrows and Halt Work on Night-Lighting Spillover"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species="california tiger salamander"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.47 Night Work Lighting Near CTS Habitat"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.47</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Night Work Lighting Near CTS Habitat"
            >Night Work Lighting Near CTS Habitat</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.48 Initial Site Clearing and CTS Monitoring"
          data-item='{"memberId":"COA 11.48","id":"COA 11.48","title":"Initial Site Clearing and CTS Monitoring","code":"COA 11.48","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMMT11DAME30TN5AWMQ91","code":"COA 11.48","name":"Confine Clearance Work to Minimal Disturbance Area"},{"id":"req_01M2ESMMT2ZR1740F4HF6BZW5V","code":"COA 11.48","name":"Monitor CTS Hiding Spots Onsite During Clearance Work"},{"id":"req_01M2ESMMT2ZR1740F4HF6BZW5W","code":"COA 11.48","name":"Conduct CTS Surveys Before and During Each Workday"},{"id":"req_01M2ESMMT2ZR1740F4HF6BZW5X","code":"COA 11.48","name":"Stop Work on CTS Discovery Inside Exclusion Fencing"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species="california tiger salamander"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.48 Initial Site Clearing and CTS Monitoring"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.48</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Initial Site Clearing and CTS Monitoring"
            >Initial Site Clearing and CTS Monitoring</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.49 CTS Burrow Avoidance or Treatment"
          data-item='{"memberId":"COA 11.49","id":"COA 11.49","title":"CTS Burrow Avoidance or Treatment","code":"COA 11.49","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMMVTFGK3FTZ4Y74GEMF3","code":"COA 11.49","name":"Avoid Disturbing Burrows Outside Direct-Disturbance Areas"},{"id":"req_01M2ESMMVVR3CR1BGCKGCBA0DF","code":"COA 11.49","name":"Monitor and Temporarily Block Vacant Burrows"},{"id":"req_01M2ESMMVVR3CR1BGCKGCBA0DG","code":"COA 11.49","name":"Hand Excavate Unavoidable Burrows Before Trenching"},{"id":"req_01M2ESMMVVR3CR1BGCKGCBA0DH","code":"COA 11.49","name":"Monitor Exclusion Fencing Installation and Block Extending Burrows"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="california tiger salamander"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.49 CTS Burrow Avoidance or Treatment"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.49</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="CTS Burrow Avoidance or Treatment"
            >CTS Burrow Avoidance or Treatment</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.49.1 Flagging CTS Burrows and No-Activity Buffers"
          data-item='{"memberId":"COA 11.49.1","id":"COA 11.49.1","title":"Flagging CTS Burrows and No-Activity Buffers","code":"COA 11.49.1","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMMXNW06J2K6JTX9DFAKH","code":"COA 11.49.1","name":"Flag Burrows and Habitat Features Before Earthmoving"},{"id":"req_01M2ESMMXNW06J2K6JTX9DFAKJ","code":"COA 11.49.1","name":"Establish 75-Foot No-Activity Buffer Around Flagged Burrows"},{"id":"req_01M2ESMMXNW06J2K6JTX9DFAKK","code":"COA 11.49.1","name":"Monitor and Block Burrows That Cannot Be Buffered"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="california tiger salamander"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.49.1 Flagging CTS Burrows and No-Activity Buffers"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.49.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Flagging CTS Burrows and No-Activity Buffers"
            >Flagging CTS Burrows and No-Activity Buffers</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.49.2 CTS Burrow Excavation by Designated Biologist"
          data-item='{"memberId":"COA 11.49.2","id":"COA 11.49.2","title":"CTS Burrow Excavation by Designated Biologist","code":"COA 11.49.2","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMMZDEG0FSF04VK5A9TBP","code":"COA 11.49.2","name":"Hand Excavate Refuge Features by Designated Biologist Only"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction"
          data-f-species="california tiger salamander"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.49.2 CTS Burrow Excavation by Designated Biologist"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.49.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="CTS Burrow Excavation by Designated Biologist"
            >CTS Burrow Excavation by Designated Biologist</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.50 CTS Capture and Handling Protocols"
          data-item='{"memberId":"COA 11.50","id":"COA 11.50","title":"CTS Capture and Handling Protocols","code":"COA 11.50","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMN15BVV0FGVSPSSTJ8RS","code":"COA 11.50","name":"Capture, Handle, and Transport CTS Under CDFW Protocols"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
          data-f-species="california tiger salamander"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.50 CTS Capture and Handling Protocols"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.50</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="CTS Capture and Handling Protocols"
            >CTS Capture and Handling Protocols</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.51 CTS Mortality Reduction and Relocation Plan"
          data-item='{"memberId":"COA 11.51","id":"COA 11.51","title":"CTS Mortality Reduction and Relocation Plan","code":"COA 11.51","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMN2YQ60Y2FFS086MKP75","code":"COA 11.51","name":"Prepare and Submit CTS Mortality Reduction and Relocation Plan"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species="california tiger salamander"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.51 CTS Mortality Reduction and Relocation Plan"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.51</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="CTS Mortality Reduction and Relocation Plan"
            >CTS Mortality Reduction and Relocation Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.51.1 CTS Relocation From Construction Site Buffer"
          data-item='{"memberId":"COA 11.51.1","id":"COA 11.51.1","title":"CTS Relocation From Construction Site Buffer","code":"COA 11.51.1","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMN4NKSK6C4P5V4Y0W5R5","code":"COA 11.51.1","name":"Notify Designated Biologist of CTS Found in Site or Buffer"},{"id":"req_01M2ESMN4PPRTWBTNBYA3CN13C","code":"COA 11.51.1","name":"Relocate Threatened CTS Under Numbered Placement Parameters"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Operations|Maintenance"
          data-f-species="california tiger salamander"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.51.1 CTS Relocation From Construction Site Buffer"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.51.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="CTS Relocation From Construction Site Buffer"
            >CTS Relocation From Construction Site Buffer</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.51.2 Capture, Handling and Release of CTS Into Burrows"
          data-item='{"memberId":"COA 11.51.2","id":"COA 11.51.2","title":"Capture, Handling and Release of CTS Into Burrows","code":"COA 11.51.2","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMN6EK7YFDGGENE53D2NC","code":"COA 11.51.2","name":"Release Relocated CTS Into Suitable Burrows One at a Time"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="california tiger salamander"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.51.2 Capture, Handling and Release of CTS Into Burrows"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.51.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Capture, Handling and Release of CTS Into Burrows"
            >Capture, Handling and Release of CTS Into Burrows</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.51.3 CDFW Notification of CTS Relocation"
          data-item='{"memberId":"COA 11.51.3","id":"COA 11.51.3","title":"CDFW Notification of CTS Relocation","code":"COA 11.51.3","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMN87B9MY447Z0HMPG8MV","code":"COA 11.51.3","name":"Notify CDFW Within One Business Day of Each CTS Relocation"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="california tiger salamander"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.51.3 CDFW Notification of CTS Relocation"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.51.3</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="CDFW Notification of CTS Relocation"
            >CDFW Notification of CTS Relocation</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.52 Notification of CTS Take or Injury"
          data-item='{"memberId":"COA 11.52","id":"COA 11.52","title":"Notification of CTS Take or Injury","code":"COA 11.52","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMN9ZQ8CS1KWBNS6BJ4PM","code":"COA 11.52","name":"Immediately Notify Biologist of Injured or Dead CTS"},{"id":"req_01M2ESMNA0BX5FD2QMF1667XY4","code":"COA 11.52","name":"Handle and Transport Injured CTS to Rehabilitation Facility"},{"id":"req_01M2ESMNA0BX5FD2QMF1667XY5","code":"COA 11.52","name":"Contact CDFW Representative Within One Business Day of Injury"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="california tiger salamander"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.52 Notification of CTS Take or Injury"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.52</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notification of CTS Take or Injury"
            >Notification of CTS Take or Injury</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.52.1 Release of CTS With Minor Injury"
          data-item='{"memberId":"COA 11.52.1","id":"COA 11.52.1","title":"Release of CTS With Minor Injury","code":"COA 11.52.1","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMNBS2HF5M30P3MV0FTH4","code":"COA 11.52.1","name":"Release CTS With Minor, Survivable Injury"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
          data-f-species="california tiger salamander"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.52.1 Release of CTS With Minor Injury"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.52.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Release of CTS With Minor Injury"
            >Release of CTS With Minor Injury</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.52.2 Treatment of Seriously Injured CTS"
          data-item='{"memberId":"COA 11.52.2","id":"COA 11.52.2","title":"Treatment of Seriously Injured CTS","code":"COA 11.52.2","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMNDJ1BPHFJMBQ19Q4267","code":"COA 11.52.2","name":"Transport Seriously Injured CTS to Rehabilitation Facility"},{"id":"req_01M2ESMNDKAXN4DY312N8QFX49","code":"COA 11.52.2","name":"Document Injury Circumstances in Written Incident Report"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
          data-f-species="california tiger salamander"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.52.2 Treatment of Seriously Injured CTS"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.52.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Treatment of Seriously Injured CTS"
            >Treatment of Seriously Injured CTS</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.52.3 Handling of Recently Deceased CTS"
          data-item='{"memberId":"COA 11.52.3","id":"COA 11.52.3","title":"Handling of Recently Deceased CTS","code":"COA 11.52.3","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMNF9RQGB3NF81P111Q8H","code":"COA 11.52.3","name":"Preserve and Label Tissue Sample and Carcass of Deceased CTS"},{"id":"req_01M2ESMNFAW6P5NJ8QT7ASJVXX","code":"COA 11.52.3","name":"Consult CDFW on Disposal of Deceased CTS Specimen"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species="california tiger salamander"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.52.3 Handling of Recently Deceased CTS"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.52.3</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Handling of Recently Deceased CTS"
            >Handling of Recently Deceased CTS</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.53 Invasive Species Prohibition Near CTS Habitat"
          data-item='{"memberId":"COA 11.53","id":"COA 11.53","title":"Invasive Species Prohibition Near CTS Habitat","code":"COA 11.53","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMNJTV6GZ0WKJRR39T85N","code":"COA 11.53","name":"Prohibit Introduction of Predatory Fish and Amphibians Near CTS Habitat"},{"id":"req_01M2ESMNJVZV958WPXE76E9J5R","code":"COA 11.53","name":"Notify CDFW of Barred Tiger Salamander or Hybrid Detection"},{"id":"req_01M2ESMNJVZV958WPXE76E9J5S","code":"COA 11.53","name":"Consult CDFW on Non-Native or Hybrid Salamander Measures"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
          data-f-species="california tiger salamander"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.53 Invasive Species Prohibition Near CTS Habitat"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.53</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Invasive Species Prohibition Near CTS Habitat"
            >Invasive Species Prohibition Near CTS Habitat</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.54 Environmentally Sensitive Areas for GGS Habitat"
          data-item='{"memberId":"COA 11.54","id":"COA 11.54","title":"Environmentally Sensitive Areas for GGS Habitat","code":"COA 11.54","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMNMKZ2CXZM89538YV5TQ","code":"COA 11.54","name":"Establish and Maintain ESA Fencing Around GGS Habitat"},{"id":"req_01M2ESMNMMW9SG3Q6Z79Q52X05","code":"COA 11.54","name":"Post and Maintain ESA Identification Signage"},{"id":"req_01M2ESMNMMW9SG3Q6Z79Q52X06","code":"COA 11.54","name":"Identify and Flag Avoidable Burrows Before Ground Disturbance"},{"id":"req_01M2ESMNMMW9SG3Q6Z79Q52X07","code":"COA 11.54","name":"Avoid Environmentally Sensitive Areas During Construction"},{"id":"req_01M2ESMNMMW9SG3Q6Z79Q52X08","code":"COA 11.54","name":"Inspect ESA Stakes and Poly Wire Before Each Workday"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction"
          data-f-species="giant garter snake"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.54 Environmentally Sensitive Areas for GGS Habitat"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.54</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Environmentally Sensitive Areas for GGS Habitat"
            >Environmentally Sensitive Areas for GGS Habitat</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.55 GGS Habitat Avoidance and Encounter Response"
          data-item='{"memberId":"COA 11.55","id":"COA 11.55","title":"GGS Habitat Avoidance and Encounter Response","code":"COA 11.55","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMNPBE1S42WVDR6P44YNA","code":"COA 11.55","name":"Avoid Suitable GGS Habitat and Confine Work to Disturbed Areas"},{"id":"req_01M2ESMNPC70G96ND7GGB3PC49","code":"COA 11.55","name":"Keep Staging, Parking and Stockpiles Away from Suitable Habitat"},{"id":"req_01M2ESMNPC70G96ND7GGB3PC4A","code":"COA 11.55","name":"Submit Habitat Disturbance Footprint for CDFW Approval"},{"id":"req_01M2ESMNPC70G96ND7GGB3PC4B","code":"COA 11.55","name":"Biologist Guides Project Access and Work Around ESAs"},{"id":"req_01M2ESMNPC70G96ND7GGB3PC4C","code":"COA 11.55","name":"Implement Dust Control to Preserve GGS Monitoring Visibility"},{"id":"req_01M2ESMNPDV7QXCBYW8DDTXVYZ","code":"COA 11.55","name":"Report GGS Encounters and Establish Refuge No-Activity Buffer"},{"id":"req_01M2ESMNPDV7QXCBYW8DDTXVZ0","code":"COA 11.55","name":"Stop Work and Relocate GGS Unearthed During Ground Disturbance"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance|Implementation Planning"
          data-f-species="giant garter snake"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.55 GGS Habitat Avoidance and Encounter Response"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.55</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="GGS Habitat Avoidance and Encounter Response"
            >GGS Habitat Avoidance and Encounter Response</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.55.1 Vehicle Access and Speed in GGS Habitat"
          data-item='{"memberId":"COA 11.55.1","id":"COA 11.55.1","title":"Vehicle Access and Speed in GGS Habitat","code":"COA 11.55.1","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMNR4G0SVH144QWV0HBM2","code":"COA 11.55.1","name":"Confine Project Vehicles to Existing Routes"},{"id":"req_01M2ESMNR53ZMKFRBNXWPVN05H","code":"COA 11.55.1","name":"Observe Vehicle Speed Limits in GGS Upland Habitat"},{"id":"req_01M2ESMNR53ZMKFRBNXWPVN05J","code":"COA 11.55.1","name":"Allow or Relocate GGS Found on a Roadway"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance|Operations"
          data-f-species="giant garter snake"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.55.1 Vehicle Access and Speed in GGS Habitat"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.55.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Vehicle Access and Speed in GGS Habitat"
            >Vehicle Access and Speed in GGS Habitat</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.56 GGS Preconstruction and Clearance Surveys"
          data-item='{"memberId":"COA 11.56","id":"COA 11.56","title":"GGS Preconstruction and Clearance Surveys","code":"COA 11.56","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMNSWCZGT0M3FST201ZGF","code":"COA 11.56","name":"Conduct GGS Preconstruction Survey and Submit Results to CDFW"},{"id":"req_01M2ESMNSXG45H0H0SE68K0EPD","code":"COA 11.56","name":"Conduct and Report Annual GGS Surveys During Construction"},{"id":"req_01M2ESMNSXG45H0H0SE68K0EPE","code":"COA 11.56","name":"Survey Within 24 Hours Before Exclusion Fencing Installation"},{"id":"req_01M2ESMNSXG45H0H0SE68K0EPF","code":"COA 11.56","name":"Resurvey After a Lapse in Covered Activities"},{"id":"req_01M2ESMNSXG45H0H0SE68K0EPG","code":"COA 11.56","name":"Investigate Burrows for GGS Occupancy"},{"id":"req_01M2ESMNSXG45H0H0SE68K0EPH","code":"COA 11.56","name":"Block Vacant Burrows and Relocate Any GGS Found"},{"id":"req_01M2ESMNSXG45H0H0SE68K0EPJ","code":"COA 11.56","name":"Avoid Disturbing Known or Potentially Occupied Burrows"},{"id":"req_01M2ESMNSY95MBB3815AW1HPQ4","code":"COA 11.56","name":"Hand Excavate Unavoidable Burrows Before Trenching"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="giant garter snake"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.56 GGS Preconstruction and Clearance Surveys"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.56</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="GGS Preconstruction and Clearance Surveys"
            >GGS Preconstruction and Clearance Surveys</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.57 Mowing Restrictions in GGS Habitat"
          data-item='{"memberId":"COA 11.57","id":"COA 11.57","title":"Mowing Restrictions in GGS Habitat","code":"COA 11.57","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMNVNRM56GDXBV3B5RXSF","code":"COA 11.57","name":"Avoid Vegetation Removal in ESAs, Burrows and Refugia"},{"id":"req_01M2ESMNVPGQNZ1HSC42V2SN9P","code":"COA 11.57","name":"Limit Mowing to July–September Window After Clearance Survey"},{"id":"req_01M2ESMNVPGQNZ1HSC42V2SN9Q","code":"COA 11.57","name":"Obtain CDFW Approval for Non-String-Trimmer Mowing Equipment"},{"id":"req_01M2ESMNVPGQNZ1HSC42V2SN9R","code":"COA 11.57","name":"Maintain Vegetation Height at Minimum Six Inches When Mowing"},{"id":"req_01M2ESMNVPGQNZ1HSC42V2SN9S","code":"COA 11.57","name":"Biologist Monitors Mowing and Halts Work on GGS Detection"},{"id":"req_01M2ESMNVPGQNZ1HSC42V2SN9T","code":"COA 11.57","name":"Mow in Rows Directed Away From Concentrating Animals"},{"id":"req_01M2ESMNVPGQNZ1HSC42V2SN9V","code":"COA 11.57","name":"Limit Channel Bank Mowing to One Side Per Year"},{"id":"req_01M2ESMNVPGQNZ1HSC42V2SN9W","code":"COA 11.57","name":"Avoid Mowing Emergent Vegetation"},{"id":"req_01M2ESMNVPGQNZ1HSC42V2SN9X","code":"COA 11.57","name":"Prohibit Discing or Tilling of Upland GGS Habitat"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="giant garter snake"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.57 Mowing Restrictions in GGS Habitat"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.57</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Mowing Restrictions in GGS Habitat"
            >Mowing Restrictions in GGS Habitat</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.58 GGS Seasonal Work Window"
          data-item='{"memberId":"COA 11.58","id":"COA 11.58","title":"GGS Seasonal Work Window","code":"COA 11.58","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMNXF8Y5A3Q47BDSYDRSE","code":"COA 11.58","name":"Confine Ground-Disturbing Work to the GGS Active Period"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="giant garter snake"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.58 GGS Seasonal Work Window"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.58</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="GGS Seasonal Work Window"
            >GGS Seasonal Work Window</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.58.1 Low Rainfall and Dry Weather Work Period in GGS Habitat"
          data-item='{"memberId":"COA 11.58.1","id":"COA 11.58.1","title":"Low Rainfall and Dry Weather Work Period in GGS Habitat","code":"COA 11.58.1","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMNZAYEXA85ZFZK0QSTVT","code":"COA 11.58.1","name":"Restrict Work Period to Low Rainfall and Dry Weather"},{"id":"req_01M2ESMNZAYEXA85ZFZK0QSTVV","code":"COA 11.58.1","name":"Monitor 72-Hour Forecast and Observe Post-Rain Dry-Out Period"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="giant garter snake"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.58.1 Low Rainfall and Dry Weather Work Period in GGS Habitat"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.58.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Low Rainfall and Dry Weather Work Period in GGS Habitat"
            >Low Rainfall and Dry Weather Work Period in GGS Habitat</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.59 GGS Seasonal Work Restriction Exception"
          data-item='{"memberId":"COA 11.59","id":"COA 11.59","title":"GGS Seasonal Work Restriction Exception","code":"COA 11.59","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMP13NA9T96QAKVJHBMPP","code":"COA 11.59","name":"Obtain CDFW Approval for Early-Season Work Before May 1"},{"id":"req_01M2ESMP1408Q3PX5ZFQRD41HX","code":"COA 11.59","name":"Obtain CDFW Approval to Work Outside the Window via Early Ground Disturbance"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="giant garter snake"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.59 GGS Seasonal Work Restriction Exception"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.59</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="GGS Seasonal Work Restriction Exception"
            >GGS Seasonal Work Restriction Exception</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.60 In-Channel Work and GGS Seasonal Restriction"
          data-item='{"memberId":"COA 11.60","id":"COA 11.60","title":"In-Channel Work and GGS Seasonal Restriction","code":"COA 11.60","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMP2T4KRS4836CF7YNNNX","code":"COA 11.60","name":"Confine In-Channel Work to the Inactive-Season Window and Scope"},{"id":"req_01M2ESMP2VS2KH28B9FRJ498K8","code":"COA 11.60","name":"Obtain CDFW Approval and Survey for In-Channel Work in Active Season"},{"id":"req_01M2ESMP2VS2KH28B9FRJ498K9","code":"COA 11.60","name":"Leave Canal Banks Undisturbed"},{"id":"req_01M2ESMP2VS2KH28B9FRJ498KA","code":"COA 11.60","name":"Obtain CDFW Approval for Non-String-Trimmer Canal Mowing Equipment"},{"id":"req_01M2ESMP2VS2KH28B9FRJ498KB","code":"COA 11.60","name":"Place Canal-Clearing Spoils Away from Bank Tops"},{"id":"req_01M2ESMP2VS2KH28B9FRJ498KC","code":"COA 11.60","name":"Operate Equipment from Bank Top and Limit Excavation to One Side Per Year"},{"id":"req_01M2ESMP2VS2KH28B9FRJ498KD","code":"COA 11.60","name":"Haul or Place Dredged Material Away from GGS Cover Features"},{"id":"req_01M2ESMP2WVD08ZN1ZQFKCJS5Z","code":"COA 11.60","name":"Prohibit Discing of Upland GGS Habitat"},{"id":"req_01M2ESMP2WVD08ZN1ZQFKCJS60","code":"COA 11.60","name":"Retain Vegetation on Levees and Canal Sides"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="giant garter snake"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.60 In-Channel Work and GGS Seasonal Restriction"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.60</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="In-Channel Work and GGS Seasonal Restriction"
            >In-Channel Work and GGS Seasonal Restriction</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.61 Dewatering of GGS Aquatic Habitat"
          data-item='{"memberId":"COA 11.61","id":"COA 11.61","title":"Dewatering of GGS Aquatic Habitat","code":"COA 11.61","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMP4JFYT5C3WF6QC3PDCX","code":"COA 11.61","name":"Dewater Unavoidable GGS Aquatic Habitat Before Work Begins"},{"id":"req_01M2ESMP4K7W5XYW0R2Z17AQ13","code":"COA 11.61","name":"Station Biologist to Salvage GGS During Dewatering"},{"id":"req_01M2ESMP4K7W5XYW0R2Z17AQ14","code":"COA 11.61","name":"Shut Down Pump and Contact Biologist if GGS Seen at Intake Screen"},{"id":"req_01M2ESMP4K7W5XYW0R2Z17AQ15","code":"COA 11.61","name":"Maintain 15-Day Dry Period Before Excavating or Filling Dewatered Habitat"},{"id":"req_01M2ESMP4K7W5XYW0R2Z17AQ16","code":"COA 11.61","name":"Limit Dewatering to the April 15–October 1 Window"},{"id":"req_01M2ESMP4K7W5XYW0R2Z17AQ17","code":"COA 11.61","name":"Survey for GGS Following Dewatering"},{"id":"req_01M2ESMP4K7W5XYW0R2Z17AQ18","code":"COA 11.61","name":"Obtain CDFW Approval for Deviations from the Dewatering Measure"},{"id":"req_01M2ESMP4MX65TNY0B89G46JP2","code":"COA 11.61","name":"Install Exclusion Fencing Once Habitat Is Confirmed GGS-Free"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction"
          data-f-species="giant garter snake"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.61 Dewatering of GGS Aquatic Habitat"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.61</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Dewatering of GGS Aquatic Habitat"
            >Dewatering of GGS Aquatic Habitat</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.62 GGS Exclusion Barrier Installation and Maintenance"
          data-item='{"memberId":"COA 11.62","id":"COA 11.62","title":"GGS Exclusion Barrier Installation and Maintenance","code":"COA 11.62","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMP6B09YEGB5XD12TN3G2","code":"COA 11.62","name":"Submit Exclusion Barrier Design and Location to CDFW"},{"id":"req_01M2ESMP6B09YEGB5XD12TN3G3","code":"COA 11.62","name":"Erect Exclusion Barrier Before Ground-Disturbing Activities"},{"id":"req_01M2ESMP6CF3YRTR62KB5BMKWA","code":"COA 11.62","name":"Monitor Biologically During Barrier Installation"},{"id":"req_01M2ESMP6CF3YRTR62KB5BMKWB","code":"COA 11.62","name":"Inspect Barrier Daily and After Rain Events"},{"id":"req_01M2ESMP6CF3YRTR62KB5BMKWC","code":"COA 11.62","name":"Maintain and Immediately Repair Barrier Defects"},{"id":"req_01M2ESMP6CF3YRTR62KB5BMKWD","code":"COA 11.62","name":"Survey and Re-Search the Barrier Line After Repair"},{"id":"req_01M2ESMP6CF3YRTR62KB5BMKWE","code":"COA 11.62","name":"Avoid or Hand-Excavate Burrows During Barrier Installation"},{"id":"req_01M2ESMP6CF3YRTR62KB5BMKWF","code":"COA 11.62","name":"Stop Barrier Construction When GGS Is Discovered and Block Undermined Burrows"},{"id":"req_01M2ESMP6CF3YRTR62KB5BMKWG","code":"COA 11.62","name":"Maintain Low Vegetation Along the Barrier&apos;s Outer Side"},{"id":"req_01M2ESMP6CF3YRTR62KB5BMKWH","code":"COA 11.62","name":"Construct the Barrier to Specification"},{"id":"req_01M2ESMP6D71ETMFGEBPMJCEPZ","code":"COA 11.62","name":"Prohibit Plastic Monofilament Netting in the Exclusion Barrier"},{"id":"req_01M2ESMP6D71ETMFGEBPMJCEQ0","code":"COA 11.62","name":"Keep Access Gates Closed and Stop Work if Left Open"},{"id":"req_01M2ESMP6D71ETMFGEBPMJCEQ1","code":"COA 11.62","name":"Keep Barrier in Place Until Completion and Remove It Afterward"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Maintenance|Post-Construction"
          data-f-species="giant garter snake"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.62 GGS Exclusion Barrier Installation and Maintenance"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.62</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="GGS Exclusion Barrier Installation and Maintenance"
            >GGS Exclusion Barrier Installation and Maintenance</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.62.1 GGS Refugia Flagging and No-Activity Buffers"
          data-item='{"memberId":"COA 11.62.1","id":"COA 11.62.1","title":"GGS Refugia Flagging and No-Activity Buffers","code":"COA 11.62.1","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMP86ZDJDW04YY8YTW5QH","code":"COA 11.62.1","name":"Flag Burrows and Habitat Features Outside the Disturbance Footprint"},{"id":"req_01M2ESMP86ZDJDW04YY8YTW5QJ","code":"COA 11.62.1","name":"Establish and Respect No-Activity Buffers Around Flagged Burrows"},{"id":"req_01M2ESMP86ZDJDW04YY8YTW5QK","code":"COA 11.62.1","name":"Monitor for GGS On Site During Ground-Disturbing Activities"},{"id":"req_01M2ESMP86ZDJDW04YY8YTW5QM","code":"COA 11.62.1","name":"Demarcate High-Burrow-Concentration Areas as ESAs"},{"id":"req_01M2ESMP86ZDJDW04YY8YTW5QN","code":"COA 11.62.1","name":"Submit Proposed ESAs and Burrow-Bearing Areas to CDFW for Approval"},{"id":"req_01M2ESMP86ZDJDW04YY8YTW5QP","code":"COA 11.62.1","name":"Determine Vacancy and Block or Excavate Burrows That Cannot Be Buffered"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance|Implementation Planning"
          data-f-species="giant garter snake"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.62.1 GGS Refugia Flagging and No-Activity Buffers"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.62.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="GGS Refugia Flagging and No-Activity Buffers"
            >GGS Refugia Flagging and No-Activity Buffers</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.62.2 GGS Burrow Excavation by Designated Biologist"
          data-item='{"memberId":"COA 11.62.2","id":"COA 11.62.2","title":"GGS Burrow Excavation by Designated Biologist","code":"COA 11.62.2","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMP9YA0W4A4Q9V4P970E3","code":"COA 11.62.2","name":"Avoid Disturbing Known or Potentially Occupied Burrows"},{"id":"req_01M2ESMP9ZV6NV1G1EA1KK4YJB","code":"COA 11.62.2","name":"Determine Burrow Vacancy, Block Unoccupied Burrows, and Remove Blocks After Work"},{"id":"req_01M2ESMP9ZV6NV1G1EA1KK4YJC","code":"COA 11.62.2","name":"Hand Excavate Unavoidable Burrows and Refuge Features Before Trenching"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="giant garter snake"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.62.2 GGS Burrow Excavation by Designated Biologist"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.62.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="GGS Burrow Excavation by Designated Biologist"
            >GGS Burrow Excavation by Designated Biologist</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.63 Initial Site Clearing and GGS Monitoring"
          data-item='{"memberId":"COA 11.63","id":"COA 11.63","title":"Initial Site Clearing and GGS Monitoring","code":"COA 11.63","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMPBQEHX1ATS8PGJM8C33","code":"COA 11.63","name":"Confine Clearance Work to Minimal Disturbance Footprint"},{"id":"req_01M2ESMPBRY7DF2GSN7K01R43J","code":"COA 11.63","name":"Monitor Clearing Site Daily for Emerging and Sheltering GGS"},{"id":"req_01M2ESMPBRY7DF2GSN7K01R43K","code":"COA 11.63","name":"Halt Work and Apply Corrective Measures on GGS Discovery"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species="giant garter snake"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.63 Initial Site Clearing and GGS Monitoring"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.63</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Initial Site Clearing and GGS Monitoring"
            >Initial Site Clearing and GGS Monitoring</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.64 Disposal of Natural Debris in GGS Habitat"
          data-item='{"memberId":"COA 11.64","id":"COA 11.64","title":"Disposal of Natural Debris in GGS Habitat","code":"COA 11.64","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMPDJBZR8PXAQ1TN7D8EC","code":"COA 11.64","name":"Dispose of Cleared Natural Debris by an Approved Method"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species="giant garter snake"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.64 Disposal of Natural Debris in GGS Habitat"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.64</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Disposal of Natural Debris in GGS Habitat"
            >Disposal of Natural Debris in GGS Habitat</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.65 GGS Measures for Preconstruction, SCADA, Transmission and Access Road Work"
          data-item='{"memberId":"COA 11.65","id":"COA 11.65","title":"GGS Measures for Preconstruction, SCADA, Transmission and Access Road Work","code":"COA 11.65","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMPFFFN6XA2AYSQDTQAAE","code":"COA 11.65","name":"Delineate and Avoid Suitable Aquatic GGS Habitat"},{"id":"req_01M2ESMPFMQ9ZF5A9KB9VN8CD6","code":"COA 11.65","name":"Delineate Suitable Upland GGS Habitat at Work Sites"},{"id":"req_01M2ESMPFPCGNRWFXPM4CGKT4X","code":"COA 11.65","name":"Restrict Upland Habitat Work to the GGS Active Season"},{"id":"req_01M2ESMPFQNWZW6VVJM7QKG2P4","code":"COA 11.65","name":"Confine Equipment Movement and Limit Vehicle Speed in Upland Habitat"},{"id":"req_01M2ESMPFQNWZW6VVJM7QKG2P5","code":"COA 11.65","name":"Guide Site Access and Conduct Daily Burrow Surveys in Upland Habitat"},{"id":"req_01M2ESMPFQNWZW6VVJM7QKG2P6","code":"COA 11.65","name":"Respond to GGS Encountered at the Work Site"},{"id":"req_01M2ESMPFQNWZW6VVJM7QKG2P7","code":"COA 11.65","name":"Limit Vegetation Control in Upland Habitat to Approved Mowing Methods"},{"id":"req_01M2ESMPFQNWZW6VVJM7QKG2P8","code":"COA 11.65","name":"Obtain CDFW Approval to Use Other Mowing Equipment"},{"id":"req_01M2ESMPFQNWZW6VVJM7QKG2P9","code":"COA 11.65","name":"Limit Channel Bank Mowing and Preserve Emergent Vegetation Cover"},{"id":"req_01M2ESMPFRRK7FBN8PGN0GP06F","code":"COA 11.65","name":"Restore Temporarily Disturbed Upland and Channel Habitat"},{"id":"req_01M2ESMPFRRK7FBN8PGN0GP06G","code":"COA 11.65","name":"Perform Maintenance Without Crushing or Entombing GGS in Burrows"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance|Post-Construction"
          data-f-species="giant garter snake"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.65 GGS Measures for Preconstruction, SCADA, Transmission and Access Road Work"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.65</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="GGS Measures for Preconstruction, SCADA, Transmission and Access Road Work"
            >GGS Measures for Preconstruction, SCADA, Transmission and Access Road
            Work</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.66 Restoration of Temporary Impacts to GGS Habitat"
          data-item='{"memberId":"COA 11.66","id":"COA 11.66","title":"Restoration of Temporary Impacts to GGS Habitat","code":"COA 11.66","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMPHJ9K1JPTSFFKW27FTB","code":"COA 11.66","name":"Restore Temporarily Impacted GGS Habitat to Pre-Project Conditions"},{"id":"req_01M2ESMPHJ9K1JPTSFFKW27FTC","code":"COA 11.66","name":"Monitor Restored GGS Habitat Until Restoration Success"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Post-Construction"
          data-f-species="giant garter snake"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.66 Restoration of Temporary Impacts to GGS Habitat"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.66</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Restoration of Temporary Impacts to GGS Habitat"
            >Restoration of Temporary Impacts to GGS Habitat</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.67 GGS Mortality Reduction and Relocation Plan"
          data-item='{"memberId":"COA 11.67","id":"COA 11.67","title":"GGS Mortality Reduction and Relocation Plan","code":"COA 11.67","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMPKAG6VQ9A1ZV3ZCXR6F","code":"COA 11.67","name":"Prepare and Submit GGS Mortality Reduction and Relocation Plan"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species="giant garter snake"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.67 GGS Mortality Reduction and Relocation Plan"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.67</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="GGS Mortality Reduction and Relocation Plan"
            >GGS Mortality Reduction and Relocation Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.67.1 GGS Handling, Relocation and Notification"
          data-item='{"memberId":"COA 11.67.1","id":"COA 11.67.1","title":"GGS Handling, Relocation and Notification","code":"COA 11.67.1","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMPN4JPXNJPSZSQVFG3AB","code":"COA 11.67.1","name":"Capture and Handle GGS Only Through the Designated Biologist"},{"id":"req_01M2ESMPN4JPXNJPSZSQVFG3AC","code":"COA 11.67.1","name":"Relocate GGS Only When Directly Threatened and Unable to Self-Escape"},{"id":"req_01M2ESMPN5893FF8Q2YE57ZWQA","code":"COA 11.67.1","name":"Notify CDFW Within 24 Hours of Each GGS Relocation"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Pre-Construction|Maintenance"
          data-f-species="giant garter snake"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.67.1 GGS Handling, Relocation and Notification"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.67.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="GGS Handling, Relocation and Notification"
            >GGS Handling, Relocation and Notification</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.68 Notification of GGS Take or Injury"
          data-item='{"memberId":"COA 11.68","id":"COA 11.68","title":"Notification of GGS Take or Injury","code":"COA 11.68","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMPPWZPQPM63D24K68WYR","code":"COA 11.68","name":"Notify Designated Biologist Immediately of GGS Take, Injury or Death"},{"id":"req_01M2ESMPPXXTTV96MGFP9E403B","code":"COA 11.68","name":"Transport Injured GGS to a CDFW-Approved Rehabilitation Facility"},{"id":"req_01M2ESMPPXXTTV96MGFP9E403C","code":"COA 11.68","name":"Bear Costs of Injured GGS Care and Treatment"},{"id":"req_01M2ESMPPXXTTV96MGFP9E403D","code":"COA 11.68","name":"Provide Initial and Written Incident Reports to CDFW on GGS Take or Injury"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="giant garter snake"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.68 Notification of GGS Take or Injury"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.68</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notification of GGS Take or Injury"
            >Notification of GGS Take or Injury</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.68.1 Release of GGS With Minor Injury"
          data-item='{"memberId":"COA 11.68.1","id":"COA 11.68.1","title":"Release of GGS With Minor Injury","code":"COA 11.68.1","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMPRPJFZ3021PCVGNTYGF","code":"COA 11.68.1","name":"Release GGS With Minor, Survivable Injury Per Relocation Plan"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
          data-f-species="giant garter snake"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.68.1 Release of GGS With Minor Injury"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.68.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Release of GGS With Minor Injury"
            >Release of GGS With Minor Injury</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.68.2 Treatment of Seriously Injured GGS"
          data-item='{"memberId":"COA 11.68.2","id":"COA 11.68.2","title":"Treatment of Seriously Injured GGS","code":"COA 11.68.2","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMPTDWYH9N3QXCAWDTFSR","code":"COA 11.68.2","name":"Transport Seriously Injured GGS to Nearest Rehabilitation Facility"},{"id":"req_01M2ESMPTEM53MG569201GQDP6","code":"COA 11.68.2","name":"Restrict Release of Captive GGS to Quarantined, Agency-Authorized Cases"},{"id":"req_01M2ESMPTEM53MG569201GQDP7","code":"COA 11.68.2","name":"Bear Costs of Seriously Injured GGS Care and Treatment"},{"id":"req_01M2ESMPTEM53MG569201GQDP8","code":"COA 11.68.2","name":"Document Injury Circumstances and Disposition in the Written Incident Report"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
          data-f-species="giant garter snake"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.68.2 Treatment of Seriously Injured GGS"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.68.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Treatment of Seriously Injured GGS"
            >Treatment of Seriously Injured GGS</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.68.3 Handling of Recently Deceased GGS"
          data-item='{"memberId":"COA 11.68.3","id":"COA 11.68.3","title":"Handling of Recently Deceased GGS","code":"COA 11.68.3","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMPW6XCT9HBQQBPJGZ894","code":"COA 11.68.3","name":"Bag, Label and Freeze a Recently Deceased GGS Carcass"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species="giant garter snake"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.68.3 Handling of Recently Deceased GGS"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.68.3</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Handling of Recently Deceased GGS"
            >Handling of Recently Deceased GGS</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.69 SWHA Habitat Avoidance and Access Restrictions"
          data-item='{"memberId":"COA 11.69","id":"COA 11.69","title":"SWHA Habitat Avoidance and Access Restrictions","code":"COA 11.69","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMPZQ9NN9E3861M5F8KYS","code":"COA 11.69","name":"Confine Project Access and Vehicle Traffic to Existing Routes"},{"id":"req_01M2ESMPZQ9NN9E3861M5F8KYT","code":"COA 11.69","name":"Obtain CDFW Approval Before Constructing New Off-Site Travel Routes"},{"id":"req_01M2ESMPZRHNZ4CD80HJSP67JN","code":"COA 11.69","name":"Confine Parking, Staging and Surface-Disturbing Activities to the Project Site"},{"id":"req_01M2ESMPZRHNZ4CD80HJSP67JP","code":"COA 11.69","name":"Apply Dust Control to Maintain Visibility for SWHA Monitoring"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="swainson’s hawk"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.69 SWHA Habitat Avoidance and Access Restrictions"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.69</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="SWHA Habitat Avoidance and Access Restrictions"
            >SWHA Habitat Avoidance and Access Restrictions</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.70 SWHA Nesting Season Work Restriction"
          data-item='{"memberId":"COA 11.70","id":"COA 11.70","title":"SWHA Nesting Season Work Restriction","code":"COA 11.70","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMQ1HMCQ78A08SGPE7Z0F","code":"COA 11.70","name":"Restrict Work Near SWHA Nest Trees to Outside Nesting Season"},{"id":"req_01M2ESMQ1JCSNP3WDJZSP8BFSQ","code":"COA 11.70","name":"Submit CDFW Approval Plan to Work During SWHA Nesting Season"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="swainson’s hawk"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.70 SWHA Nesting Season Work Restriction"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.70</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="SWHA Nesting Season Work Restriction"
            >SWHA Nesting Season Work Restriction</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.71 SWHA Nest Tree Surveys and Survey Schedule"
          data-item='{"memberId":"COA 11.71","id":"COA 11.71","title":"SWHA Nest Tree Surveys and Survey Schedule","code":"COA 11.71","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMQ3AH38XGY89WZCHJ04Q","code":"COA 11.71","name":"Conduct and Submit Preconstruction SWHA Nest Tree Survey"},{"id":"req_01M2ESMQ3AH38XGY89WZCHJ04R","code":"COA 11.71","name":"Conduct Recurring Annual SWHA Nest Surveys During Construction"},{"id":"req_01M2ESMQ3BXJWY2RWRRD34QXXF","code":"COA 11.71","name":"Map SWHA Nesting and Foraging Sites for CDFW"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance|Implementation Planning"
          data-f-species="swainson’s hawk"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.71 SWHA Nest Tree Surveys and Survey Schedule"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.71</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="SWHA Nest Tree Surveys and Survey Schedule"
            >SWHA Nest Tree Surveys and Survey Schedule</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.72 SWHA Occupied Nest No-Disturbance Buffer"
          data-item='{"memberId":"COA 11.72","id":"COA 11.72","title":"SWHA Occupied Nest No-Disturbance Buffer","code":"COA 11.72","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMQ51T6HN61N27Z6H7119","code":"COA 11.72","name":"Establish, Delineate and Maintain SWHA Nest Buffer"},{"id":"req_01M2ESMQ52X2ZM48TYEMYHBH8F","code":"COA 11.72","name":"Submit SWHA Nest Buffer Design and Location to CDFW"},{"id":"req_01M2ESMQ52X2ZM48TYEMYHBH8G","code":"COA 11.72","name":"Obtain CDFW Approval to Reduce SWHA Nest Buffer Below 656 Feet"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Post-Construction|Maintenance|Implementation Planning"
          data-f-species="swainson’s hawk"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.72 SWHA Occupied Nest No-Disturbance Buffer"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.72</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="SWHA Occupied Nest No-Disturbance Buffer"
            >SWHA Occupied Nest No-Disturbance Buffer</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.73 SWHA Nest Monitoring During Covered Activities"
          data-item='{"memberId":"COA 11.73","id":"COA 11.73","title":"SWHA Nest Monitoring During Covered Activities","code":"COA 11.73","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMQ6TQEK3RDVYVY9E6ZBD","code":"COA 11.73","name":"Conduct and Report Baseline SWHA Nest Monitoring"},{"id":"req_01M2ESMQ6VJGF0K1SVCFFN2SDK","code":"COA 11.73","name":"Monitor SWHA Nest Status at Tiered Distances During Construction"},{"id":"req_01M2ESMQ6VJGF0K1SVCFFN2SDM","code":"COA 11.73","name":"Limit Work to Daylight Hours Near Occupied SWHA Nest"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="swainson’s hawk"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.73 SWHA Nest Monitoring During Covered Activities"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.73</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="SWHA Nest Monitoring During Covered Activities"
            >SWHA Nest Monitoring During Covered Activities</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.74 Disturbance of Occupied SWHA Nest Tree"
          data-item='{"memberId":"COA 11.74","id":"COA 11.74","title":"Disturbance of Occupied SWHA Nest Tree","code":"COA 11.74","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMQ8J2FGTN88B9YQHXWNB","code":"COA 11.74","name":"Prohibit Physical Contact With Occupied SWHA Nest Trees"},{"id":"req_01M2ESMQ8KBKTZ8CC3BFJMZ4XG","code":"COA 11.74","name":"Keep Break Areas and Idle Equipment Out of Nest Sightlines"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="swainson’s hawk"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.74 Disturbance of Occupied SWHA Nest Tree"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.74</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Disturbance of Occupied SWHA Nest Tree"
            >Disturbance of Occupied SWHA Nest Tree</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.75 Designated Biologist Authority for Distressed Nesting SWHA"
          data-item='{"memberId":"COA 11.75","id":"COA 11.75","title":"Designated Biologist Authority for Distressed Nesting SWHA","code":"COA 11.75","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMQABV7ZXHTW7CASVJ9Q5","code":"COA 11.75","name":"Stop Work and Notify Designated Representative of SWHA Distress"},{"id":"req_01M2ESMQABV7ZXHTW7CASVJ9Q6","code":"COA 11.75","name":"Notify CDFW of SWHA Nesting Distress Within 24 Hours"},{"id":"req_01M2ESMQABV7ZXHTW7CASVJ9Q7","code":"COA 11.75","name":"Continue Monitoring Until CDFW Confirms Normalized SWHA Behavior"},{"id":"req_01M2ESMQACBHVMRN8J6HBT74MK","code":"COA 11.75","name":"Notify CDFW of SWHA Nest or Nestling Abandonment Within 24 Hours"},{"id":"req_01M2ESMQACBHVMRN8J6HBT74MM","code":"COA 11.75","name":"Extend Nest Monitoring to Newly Discovered SWHA Nests"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="swainson’s hawk"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.75 Designated Biologist Authority for Distressed Nesting SWHA"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.75</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Designated Biologist Authority for Distressed Nesting SWHA"
            >Designated Biologist Authority for Distressed Nesting SWHA</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.76 SWHA Nest Tree Avoidance and Removal Approval"
          data-item='{"memberId":"COA 11.76","id":"COA 11.76","title":"SWHA Nest Tree Avoidance and Removal Approval","code":"COA 11.76","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMQC3YF21DBHG0A648TP7","code":"COA 11.76","name":"Avoid Removal of Known and Suitable SWHA Nest Trees"},{"id":"req_01M2ESMQC449CBWAQ4AXX5Q7TB","code":"COA 11.76","name":"Obtain CDFW Approval Before Removing a Known SWHA Nest Tree"},{"id":"req_01M2ESMQC449CBWAQ4AXX5Q7TC","code":"COA 11.76","name":"Prohibit Removal of Occupied SWHA Nest Trees Until Fledging"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="swainson’s hawk"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.76 SWHA Nest Tree Avoidance and Removal Approval"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.76</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="SWHA Nest Tree Avoidance and Removal Approval"
            >SWHA Nest Tree Avoidance and Removal Approval</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.77 Woody Vegetation Removal Outside SWHA Nesting Season"
          data-item='{"memberId":"COA 11.77","id":"COA 11.77","title":"Woody Vegetation Removal Outside SWHA Nesting Season","code":"COA 11.77","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMQDVJ8AQ6Y0J5881DJ9D","code":"COA 11.77","name":"Time Woody Vegetation Removal to September 16–February 28"},{"id":"req_01M2ESMQDWQRXTGEXYK0XZGMD8","code":"COA 11.77","name":"Notify CDFW of Nest Survey Results Before Vegetation Removal"},{"id":"req_01M2ESMQDWQRXTGEXYK0XZGMD9","code":"COA 11.77","name":"Delineate and Avoid 656-Foot Buffer Around Active SWHA Nests"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance|Post-Construction"
          data-f-species="swainson’s hawk"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.77 Woody Vegetation Removal Outside SWHA Nesting Season"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.77</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Woody Vegetation Removal Outside SWHA Nesting Season"
            >Woody Vegetation Removal Outside SWHA Nesting Season</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.78 SWHA Nesting Habitat Delineation for Preconstruction Activities"
          data-item='{"memberId":"COA 11.78","id":"COA 11.78","title":"SWHA Nesting Habitat Delineation for Preconstruction Activities","code":"COA 11.78","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMQFNFZT5HSCXF6R3A3F1","code":"COA 11.78","name":"Delineate and Avoid SWHA Nesting Habitat at Preconstruction Sites"},{"id":"req_01M2ESMQFNFZT5HSCXF6R3A3F2","code":"COA 11.78","name":"Schedule Preconstruction Field Investigations Outside Nesting Season"},{"id":"req_01M2ESMQFNFZT5HSCXF6R3A3F3","code":"COA 11.78","name":"Survey for Nesting SWHA Before In-Season Field Investigations"},{"id":"req_01M2ESMQFNFZT5HSCXF6R3A3F4","code":"COA 11.78","name":"Keep Field Investigations 0.5 Miles From Occupied SWHA Nests"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="swainson’s hawk"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.78 SWHA Nesting Habitat Delineation for Preconstruction Activities"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.78</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="SWHA Nesting Habitat Delineation for Preconstruction Activities"
            >SWHA Nesting Habitat Delineation for Preconstruction Activities</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.79 SWHA Measures for SCADA and Transmission Line Work"
          data-item='{"memberId":"COA 11.79","id":"COA 11.79","title":"SWHA Measures for SCADA and Transmission Line Work","code":"COA 11.79","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMQHCTEMZ0TEGRQKFWZFT","code":"COA 11.79","name":"Prohibit Helicopter Line Stringing Near Occupied SWHA Nests"},{"id":"req_01M2ESMQHDSWYB94XYC24TQNXJ","code":"COA 11.79","name":"Prohibit Occupied Nest Tree Removal for Transmission Line Work"},{"id":"req_01M2ESMQHDSWYB94XYC24TQNXK","code":"COA 11.79","name":"Remove or Trim an Occupied Nest Tree for Safety Per 11.77 or CDFW Approval"},{"id":"req_01M2ESMQHDSWYB94XYC24TQNXM","code":"COA 11.79","name":"Avoid Nest Tree Removal During SCADA and Transmission Line Work"},{"id":"req_01M2ESMQHDSWYB94XYC24TQNXN","code":"COA 11.79","name":"Site Poles and Lines Outside Suitable SWHA Nesting Habitat"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Maintenance|Pre-Construction|Implementation Planning"
          data-f-species="swainson’s hawk"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.79 SWHA Measures for SCADA and Transmission Line Work"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.79</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="SWHA Measures for SCADA and Transmission Line Work"
            >SWHA Measures for SCADA and Transmission Line Work</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.80 SWHA Mortality Reduction and Relocation Plan"
          data-item='{"memberId":"COA 11.80","id":"COA 11.80","title":"SWHA Mortality Reduction and Relocation Plan","code":"COA 11.80","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMQK5KXEQT5D15EGCDHXJ","code":"COA 11.80","name":"Develop and Submit SWHA Mortality Reduction and Relocation Plan"},{"id":"req_01M2ESMQK69KMKHCS7SXAF6ZQ7","code":"COA 11.80","name":"Restrict SWHA Capture and Handling to Qualified Designated Biologist"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
          data-f-species="swainson’s hawk"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.80 SWHA Mortality Reduction and Relocation Plan"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.80</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="SWHA Mortality Reduction and Relocation Plan"
            >SWHA Mortality Reduction and Relocation Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.81 Notification of SWHA Take or Injury"
          data-item='{"memberId":"COA 11.81","id":"COA 11.81","title":"Notification of SWHA Take or Injury","code":"COA 11.81","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMQMYFBJZP5GR352A38DG","code":"COA 11.81","name":"Notify Designated Biologist of SWHA Take, Injury or Death"},{"id":"req_01M2ESMQMYFBJZP5GR352A38DH","code":"COA 11.81","name":"Transport Injured SWHA to Rehabilitation Facility at Permittee&apos;s Cost"},{"id":"req_01M2ESMQMZAZ4ATFDENRZAYK0X","code":"COA 11.81","name":"Notify CDFW Within 24 Hours of SWHA Nest Abandonment or Distress"},{"id":"req_01M2ESMQMZAZ4ATFDENRZAYK0Y","code":"COA 11.81","name":"Provide Initial CDFW Notification With Event Details"},{"id":"req_01M2ESMQMZAZ4ATFDENRZAYK0Z","code":"COA 11.81","name":"Submit Written Incident Report to CDFW Within Two Business Days"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Operations|Maintenance|Post-Construction"
          data-f-species="swainson’s hawk"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.81 Notification of SWHA Take or Injury"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.81</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notification of SWHA Take or Injury"
            >Notification of SWHA Take or Injury</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.82 TRBL Avoidance and Daily Activity Window"
          data-item='{"memberId":"COA 11.82","id":"COA 11.82","title":"TRBL Avoidance and Daily Activity Window","code":"COA 11.82","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMQPP346JX87DN02K8RWW","code":"COA 11.82","name":"Restrict Work Hours Near Occupied TRBL Colony or Roost"},{"id":"req_01M2ESMQPQTBPN9DN4Z6YVY3D8","code":"COA 11.82","name":"Train Project Personnel on TRBL Avoidance and Buffer Protocols"},{"id":"req_01M2ESMQPQTBPN9DN4Z6YVY3D9","code":"COA 11.82","name":"Coordinate Timing of Disruptive Activities Away From Vulnerable TRBL Periods"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="tricolored blackbird"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.82 TRBL Avoidance and Daily Activity Window"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.82</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="TRBL Avoidance and Daily Activity Window"
            >TRBL Avoidance and Daily Activity Window</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.83 TRBL Preconstruction Habitat Assessment"
          data-item='{"memberId":"COA 11.83","id":"COA 11.83","title":"TRBL Preconstruction Habitat Assessment","code":"COA 11.83","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMQRFGZFYAMZ3JVECQ9GW","code":"COA 11.83","name":"Conduct Baseline TRBL Habitat Assessment Each Project Phase"},{"id":"req_01M2ESMQRFGZFYAMZ3JVECQ9GX","code":"COA 11.83","name":"Map and Submit Nesting/Foraging Sites in Phase Authorization Package"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species="tricolored blackbird"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.83 TRBL Preconstruction Habitat Assessment"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.83</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="TRBL Preconstruction Habitat Assessment"
            >TRBL Preconstruction Habitat Assessment</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.84 TRBL Nesting and Roosting Habitat Surveys"
          data-item='{"memberId":"COA 11.84","id":"COA 11.84","title":"TRBL Nesting and Roosting Habitat Surveys","code":"COA 11.84","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMQT7T8P4JGZD5SRSA4NQ","code":"COA 11.84","name":"Survey TRBL Habitat and Acquire Colony Data Before Any Covered Activities"},{"id":"req_01M2ESMQT8BHA58JZ110V53F5P","code":"COA 11.84","name":"Submit Preconstruction TRBL Survey Results to CDFW"},{"id":"req_01M2ESMQT8BHA58JZ110V53F5Q","code":"COA 11.84","name":"Conduct and Report Annual TRBL Surveys During Construction and Maintenance"},{"id":"req_01M2ESMQT8BHA58JZ110V53F5R","code":"COA 11.84","name":"Map and Provide TRBL Nesting/Roosting Sites to CDFW"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="tricolored blackbird"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.84 TRBL Nesting and Roosting Habitat Surveys"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.84</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="TRBL Nesting and Roosting Habitat Surveys"
            >TRBL Nesting and Roosting Habitat Surveys</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.84.1 TRBL Nesting Habitat Preconstruction Surveys"
          data-item='{"memberId":"COA 11.84.1","id":"COA 11.84.1","title":"TRBL Nesting Habitat Preconstruction Surveys","code":"COA 11.84.1","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMQW0R26AHJ3VWDQJPY91","code":"COA 11.84.1","name":"Conduct Seasonal Preconstruction Surveys for TRBL Breeding Colonies and Nesting Habitat"},{"id":"req_01M2ESMQW1FAGP1AF7EGMEHEG6","code":"COA 11.84.1","name":"Delineate Suitable Nesting Habitat and Breeding Colonies With Flagging"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="tricolored blackbird"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.84.1 TRBL Nesting Habitat Preconstruction Surveys"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.84.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="TRBL Nesting Habitat Preconstruction Surveys"
            >TRBL Nesting Habitat Preconstruction Surveys</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.84.2 TRBL Roosting Habitat Preconstruction Surveys"
          data-item='{"memberId":"COA 11.84.2","id":"COA 11.84.2","title":"TRBL Roosting Habitat Preconstruction Surveys","code":"COA 11.84.2","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMQXRJSFK7M57RNRQWDG6","code":"COA 11.84.2","name":"Conduct Preconstruction Roosting Habitat Surveys During the Nonbreeding Season"},{"id":"req_01M2ESMQXS2JVGD9Q9XY1WQM7E","code":"COA 11.84.2","name":"Presume TRBL Occupancy for Unclearly Identified Mixed Blackbird Flocks"},{"id":"req_01M2ESMQXS2JVGD9Q9XY1WQM7F","code":"COA 11.84.2","name":"Check Previously Unoccupied Roost Sites for Later TRBL Occupancy"},{"id":"req_01M2ESMQXS2JVGD9Q9XY1WQM7G","code":"COA 11.84.2","name":"Delineate Occupied TRBL Roost Sites With Flagging"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="tricolored blackbird"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.84.2 TRBL Roosting Habitat Preconstruction Surveys"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.84.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="TRBL Roosting Habitat Preconstruction Surveys"
            >TRBL Roosting Habitat Preconstruction Surveys</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.85 TRBL Nest Buffer Zone"
          data-item='{"memberId":"COA 11.85","id":"COA 11.85","title":"TRBL Nest Buffer Zone","code":"COA 11.85","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMQZHR8EPFQSHAHGWANV7","code":"COA 11.85","name":"Avoid Suitable TRBL Nesting Habitat Within 1,300 Feet of Construction Sites"},{"id":"req_01M2ESMQZHR8EPFQSHAHGWANV8","code":"COA 11.85","name":"Maintain a 1,300-Foot No-Activity Buffer Around an Unavoidable Active TRBL Colony"},{"id":"req_01M2ESMQZJE9FTSQBMYW339TT7","code":"COA 11.85","name":"Delineate the TRBL Colony No-Activity Buffer"},{"id":"req_01M2ESMQZJE9FTSQBMYW339TT8","code":"COA 11.85","name":"Reduce the TRBL Colony Buffer to 300 Feet With CDFW Approval Where Site Conditions Qualify"},{"id":"req_01M2ESMQZJE9FTSQBMYW339TT9","code":"COA 11.85","name":"Reduce Disturbance When TRBL Colonizes Habitat Adjacent to Ongoing Activities"},{"id":"req_01M2ESMQZJE9FTSQBMYW339TTA","code":"COA 11.85","name":"Submit TRBL Buffer Zone Design and Location to CDFW for Approval"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance|Implementation Planning"
          data-f-species="tricolored blackbird"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.85 TRBL Nest Buffer Zone"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.85</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="TRBL Nest Buffer Zone"
            >TRBL Nest Buffer Zone</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.86 TRBL Nest Buffer Monitoring"
          data-item='{"memberId":"COA 11.86","id":"COA 11.86","title":"TRBL Nest Buffer Monitoring","code":"COA 11.86","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMR1RKWTNP0T22SEAXRFG","code":"COA 11.86","name":"Monitor an Active TRBL Colony Daily Through the Nesting Season"},{"id":"req_01M2ESMR1SS863DF2A3NHG04CP","code":"COA 11.86","name":"Prohibit Covered Activities Within the Nest Disturbance Buffer"},{"id":"req_01M2ESMR1SS863DF2A3NHG04CQ","code":"COA 11.86","name":"Stop Work When the Biologist Observes Colony Disruption and Agitated Behavior"},{"id":"req_01M2ESMR1SS863DF2A3NHG04CR","code":"COA 11.86","name":"Notify CDFW Within 24 Hours of a Colony-Disruption Stop-Work Event"},{"id":"req_01M2ESMR1SS863DF2A3NHG04CS","code":"COA 11.86","name":"Maintain and Adjust Protective Measures Until TRBL Behavior Normalizes"},{"id":"req_01M2ESMR1SS863DF2A3NHG04CT","code":"COA 11.86","name":"Consult CDFW on At-Risk Colonies and Report Nest or Nestling Abandonment"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Maintenance"
          data-f-species="tricolored blackbird"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.86 TRBL Nest Buffer Monitoring"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.86</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="TRBL Nest Buffer Monitoring"
            >TRBL Nest Buffer Monitoring</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.87 TRBL Roosting Site Buffer Zone"
          data-item='{"memberId":"COA 11.87","id":"COA 11.87","title":"TRBL Roosting Site Buffer Zone","code":"COA 11.87","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMR3SD02F9Q3Y4KQ0XF8D","code":"COA 11.87","name":"Avoid Suitable TRBL Roosting Habitat and Its 300-Foot Buffer"},{"id":"req_01M2ESMR3TEAHJ2FGX74G0945J","code":"COA 11.87","name":"Maintain a 300-Foot No-Activity Buffer Around an Unavoidable Occupied TRBL Roost"},{"id":"req_01M2ESMR3TEAHJ2FGX74G0945K","code":"COA 11.87","name":"Delineate the TRBL Roost No-Activity Buffer"},{"id":"req_01M2ESMR3TEAHJ2FGX74G0945M","code":"COA 11.87","name":"Modify the TRBL Roost Buffer Where Site Conditions Qualify, as CDFW Approves"},{"id":"req_01M2ESMR3TEAHJ2FGX74G0945N","code":"COA 11.87","name":"Submit TRBL Roost Buffer Zone Design and Location to CDFW for Approval"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance|Implementation Planning"
          data-f-species="tricolored blackbird"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.87 TRBL Roosting Site Buffer Zone"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.87</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="TRBL Roosting Site Buffer Zone"
            >TRBL Roosting Site Buffer Zone</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.88 TRBL Roosting Site Buffer Monitoring"
          data-item='{"memberId":"COA 11.88","id":"COA 11.88","title":"TRBL Roosting Site Buffer Monitoring","code":"COA 11.88","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMR5RJFQKVNDVNS5EKMCS","code":"COA 11.88","name":"Monitor Occupied Roost Sites Within the 300-Foot Buffer Daily"},{"id":"req_01M2ESMR5SS20S0A1492D7DQY8","code":"COA 11.88","name":"Prohibit Covered Activities Within the Roosting Site"},{"id":"req_01M2ESMR5SS20S0A1492D7DQY9","code":"COA 11.88","name":"Implement Additional Protective Measures When Roosting TRBL Show Agitated Behavior"},{"id":"req_01M2ESMR5SS20S0A1492D7DQYA","code":"COA 11.88","name":"Contact CDFW When Roost Protective Measures Are Not Reducing Disruption"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Maintenance"
          data-f-species="tricolored blackbird"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.88 TRBL Roosting Site Buffer Monitoring"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.88</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="TRBL Roosting Site Buffer Monitoring"
            >TRBL Roosting Site Buffer Monitoring</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.89 Disturbance of TRBL Breeding Colonies and Roost Sites"
          data-item='{"memberId":"COA 11.89","id":"COA 11.89","title":"Disturbance of TRBL Breeding Colonies and Roost Sites","code":"COA 11.89","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMR7QEP5R4JSR21MA31X4","code":"COA 11.89","name":"Prohibit Physical Contact With Active Breeding Colonies and Occupied Roost Sites"},{"id":"req_01M2ESMR7RQNJ6YETZAC5DFVV1","code":"COA 11.89","name":"Prohibit Personnel From Exiting Vehicles Inside an Occupied No-Activity Buffer"},{"id":"req_01M2ESMR7RQNJ6YETZAC5DFVV2","code":"COA 11.89","name":"Prohibit Employee Break, Rest, or Meeting Areas Within or Adjacent to No-Activity Buffers"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Maintenance"
          data-f-species="tricolored blackbird"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.89 Disturbance of TRBL Breeding Colonies and Roost Sites"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.89</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Disturbance of TRBL Breeding Colonies and Roost Sites"
            >Disturbance of TRBL Breeding Colonies and Roost Sites</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.90 Delineation of TRBL Nesting and Roosting Habitat"
          data-item='{"memberId":"COA 11.90","id":"COA 11.90","title":"Delineation of TRBL Nesting and Roosting Habitat","code":"COA 11.90","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMR9PY8F1M7KPA6DD3DDE","code":"COA 11.90","name":"Delineate TRBL Nesting/Roosting Habitat and Buffers"},{"id":"req_01M2ESMR9QBX9TQPQ3P8MZR8Z5","code":"COA 11.90","name":"Restrict Activities Outside Delineated Habitat/Buffers"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="tricolored blackbird"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.90 Delineation of TRBL Nesting and Roosting Habitat"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.90</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Delineation of TRBL Nesting and Roosting Habitat"
            >Delineation of TRBL Nesting and Roosting Habitat</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.91 Helicopter Restrictions Near TRBL Colonies and Roosts"
          data-item='{"memberId":"COA 11.91","id":"COA 11.91","title":"Helicopter Restrictions Near TRBL Colonies and Roosts","code":"COA 11.91","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMRBEZBF5C77H3XMSSWQK","code":"COA 11.91","name":"Maintain Helicopter Distance/Time Buffers Near TRBL Sites"},{"id":"req_01M2ESMRBEZBF5C77H3XMSSWQM","code":"COA 11.91","name":"Restrict Helicopter Use to Daylight Hours"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species="tricolored blackbird"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.91 Helicopter Restrictions Near TRBL Colonies and Roosts"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.91</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Helicopter Restrictions Near TRBL Colonies and Roosts"
            >Helicopter Restrictions Near TRBL Colonies and Roosts</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.92 TRBL Mortality Reduction and Relocation Plan"
          data-item='{"memberId":"COA 11.92","id":"COA 11.92","title":"TRBL Mortality Reduction and Relocation Plan","code":"COA 11.92","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMRD7GNZNESZEXHQR204D","code":"COA 11.92","name":"Prepare and Submit TRBL Mortality/Relocation Plan"},{"id":"req_01M2ESMRD7GNZNESZEXHQR204E","code":"COA 11.92","name":"Restrict TRBL Handling to CDFW-Approved Biologist"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Maintenance"
          data-f-species="tricolored blackbird"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.92 TRBL Mortality Reduction and Relocation Plan"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.92</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="TRBL Mortality Reduction and Relocation Plan"
            >TRBL Mortality Reduction and Relocation Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.93 Notification of TRBL Take or Injury"
          data-item='{"memberId":"COA 11.93","id":"COA 11.93","title":"Notification of TRBL Take or Injury","code":"COA 11.93","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMRF0PJK8JBTHZN7TQKZ0","code":"COA 11.93","name":"Notify Designated Biologist of TRBL Take or Injury"},{"id":"req_01M2ESMRF0PJK8JBTHZN7TQKZ1","code":"COA 11.93","name":"Transport Injured TRBL to Approved Care Facility"},{"id":"req_01M2ESMRF1YW0VN6WV9VMY07ZQ","code":"COA 11.93","name":"Notify CDFW Representative Within One Business Day"},{"id":"req_01M2ESMRF1YW0VN6WV9VMY07ZR","code":"COA 11.93","name":"Bear Costs of Injured TRBL Care and Treatment"},{"id":"req_01M2ESMRF1YW0VN6WV9VMY07ZS","code":"COA 11.93","name":"Notify CDFW of TRBL Nest/Colony Abandonment or Distress"},{"id":"req_01M2ESMRF1YW0VN6WV9VMY07ZT","code":"COA 11.93","name":"Submit Written TRBL Incident Report to CDFW"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance|Operations"
          data-f-species="tricolored blackbird"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.93 Notification of TRBL Take or Injury"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.93</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notification of TRBL Take or Injury"
            >Notification of TRBL Take or Injury</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.94 CBB Habitat Avoidance and Nest Encounter Response"
          data-item='{"memberId":"COA 11.94","id":"COA 11.94","title":"CBB Habitat Avoidance and Nest Encounter Response","code":"COA 11.94","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMRGSKR1G03BPM15TBD1Q","code":"COA 11.94","name":"Avoid CBB Habitat and Confine Ground Disturbance Footprint"},{"id":"req_01M2ESMRGSKR1G03BPM15TBD1R","code":"COA 11.94","name":"Halt Activities Within 50 ft of a Discovered CBB Nest"},{"id":"req_01M2ESMRGT715YPPHA107T5SGN","code":"COA 11.94","name":"Relocate Unavoidable CBB Nest via Designated Biologist"},{"id":"req_01M2ESMRGT715YPPHA107T5SGP","code":"COA 11.94","name":"Report CBB Sightings to the Designated Biologist"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="crotch bumble bee"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.94 CBB Habitat Avoidance and Nest Encounter Response"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.94</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="CBB Habitat Avoidance and Nest Encounter Response"
            >CBB Habitat Avoidance and Nest Encounter Response</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.95 CBB Seasonal Restriction on Vegetation and Ground Disturbance"
          data-item='{"memberId":"COA 11.95","id":"COA 11.95","title":"CBB Seasonal Restriction on Vegetation and Ground Disturbance","code":"COA 11.95","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMRJKAVP3AM4PZ3QNZ2YG","code":"COA 11.95","name":"Avoid Vegetation/Ground Disturbance During Colony Active Period"},{"id":"req_01M2ESMRJMEXEW0QW3QQMZJ1HA","code":"COA 11.95","name":"Time Flowering Vegetation Removal Outside Colony Active Period"},{"id":"req_01M2ESMRJMEXEW0QW3QQMZJ1HB","code":"COA 11.95","name":"Avoid Vegetation/Ground Disturbance During Flight Seasons"},{"id":"req_01M2ESMRJMEXEW0QW3QQMZJ1HC","code":"COA 11.95","name":"Survey Annually to Set Flight Season Dates"},{"id":"req_01M2ESMRJMEXEW0QW3QQMZJ1HD","code":"COA 11.95","name":"Avoid Ground Disturbance During Overwintering Period"},{"id":"req_01M2ESMRJMEXEW0QW3QQMZJ1HE","code":"COA 11.95","name":"Inspect and Supervise Overwintering Refugia Removal"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="crotch bumble bee"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.95 CBB Seasonal Restriction on Vegetation and Ground Disturbance"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.95</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="CBB Seasonal Restriction on Vegetation and Ground Disturbance"
            >CBB Seasonal Restriction on Vegetation and Ground Disturbance</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.96 CBB Preconstruction Habitat Assessment"
          data-item='{"memberId":"COA 11.96","id":"COA 11.96","title":"CBB Preconstruction Habitat Assessment","code":"COA 11.96","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMRMD5X4C2ZD982W42P4T","code":"COA 11.96","name":"Conduct Preconstruction CBB Habitat Assessment Survey"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species="crotch bumble bee"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.96 CBB Preconstruction Habitat Assessment"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.96</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="CBB Preconstruction Habitat Assessment"
            >CBB Preconstruction Habitat Assessment</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.97 CBB Surveys During Construction and Maintenance"
          data-item='{"memberId":"COA 11.97","id":"COA 11.97","title":"CBB Surveys During Construction and Maintenance","code":"COA 11.97","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMRP89YS91R7CZY0S628H","code":"COA 11.97","name":"Conduct Pre-Activity CBB Surveys During Construction/Maintenance"},{"id":"req_01M2ESMRP9RKKF3TK57F7V1ARZ","code":"COA 11.97","name":"Notify CDFW of a CBB Detection Within 24 Hours"},{"id":"req_01M2ESMRP9RKKF3TK57F7V1AS0","code":"COA 11.97","name":"Report Survey Results in Compliance and Status Reports"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="crotch bumble bee"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.97 CBB Surveys During Construction and Maintenance"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.97</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="CBB Surveys During Construction and Maintenance"
            >CBB Surveys During Construction and Maintenance</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.98 CBB Nest No-Activity Buffer Zone"
          data-item='{"memberId":"COA 11.98","id":"COA 11.98","title":"CBB Nest No-Activity Buffer Zone","code":"COA 11.98","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMRR1S26EXFBWQDFTE588","code":"COA 11.98","name":"Enforce No-Activity Buffer Around Discovered CBB Nest"},{"id":"req_01M2ESMRR1S26EXFBWQDFTE589","code":"COA 11.98","name":"Submit CBB Buffer Zone Design Plan to CDFW"},{"id":"req_01M2ESMRR1S26EXFBWQDFTE58A","code":"COA 11.98","name":"Delineate and Maintain CBB Nest Buffer Marking"},{"id":"req_01M2ESMRR1S26EXFBWQDFTE58B","code":"COA 11.98","name":"Report GPS-Recorded Nest Location to CDFW Within 24 Hours"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Maintenance|Implementation Planning|Pre-Construction"
          data-f-species="crotch bumble bee"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.98 CBB Nest No-Activity Buffer Zone"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.98</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="CBB Nest No-Activity Buffer Zone"
            >CBB Nest No-Activity Buffer Zone</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.99 CBB Daily Monitoring"
          data-item='{"memberId":"COA 11.99","id":"COA 11.99","title":"CBB Daily Monitoring","code":"COA 11.99","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMRSSQJYJZ5K02FM5E253","code":"COA 11.99","name":"Survey Undisturbed CBB Habitat Before Activities Begin"},{"id":"req_01M2ESMRSSQJYJZ5K02FM5E254","code":"COA 11.99","name":"Conduct Daily Visual Sweeps for CBB Flight Activity"},{"id":"req_01M2ESMRSTR9HY12WTKKXTH440","code":"COA 11.99","name":"Notify CDFW of a CBB Detection Within 24 Hours"},{"id":"req_01M2ESMRSTR9HY12WTKKXTH441","code":"COA 11.99","name":"Search for Active Nest After a CBB Detection"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="crotch bumble bee"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.99 CBB Daily Monitoring"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.99</span
          ><span class="bcn-lao__label" data-opt-label="" data-text="CBB Daily Monitoring"
            >CBB Daily Monitoring</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.100 Avoidance or Treatment of CBB Underground Refugia"
          data-item='{"memberId":"COA 11.100","id":"COA 11.100","title":"Avoidance or Treatment of CBB Underground Refugia","code":"COA 11.100","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMRVHH73JMGM6XG5397KC","code":"COA 11.100","name":"Avoid and Buffer Underground CBB Refugia"},{"id":"req_01M2ESMRVJYG082T0SAE12EZMA","code":"COA 11.100","name":"Hold Refugia Vegetation Removal Until Overwintering Absence Confirmed"},{"id":"req_01M2ESMRVJYG082T0SAE12EZMB","code":"COA 11.100","name":"Flag Refugia and Habitat Features Before Earthmoving"},{"id":"req_01M2ESMRVJYG082T0SAE12EZMC","code":"COA 11.100","name":"Repeat CBB Survey After a 14-Day Work Stoppage"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="crotch bumble bee"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.100 Avoidance or Treatment of CBB Underground Refugia"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.100</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Avoidance or Treatment of CBB Underground Refugia"
            >Avoidance or Treatment of CBB Underground Refugia</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.101 Vegetation Management in CBB Habitat"
          data-item='{"memberId":"COA 11.101","id":"COA 11.101","title":"Vegetation Management in CBB Habitat","code":"COA 11.101","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMRX9BT746KPVF13B0RAP","code":"COA 11.101","name":"Minimize Vegetation Disturbance in CBB Habitat"},{"id":"req_01M2ESMRXA7VFWYRC008ABK23F","code":"COA 11.101","name":"Hand-Trim Protected Vegetation Only"},{"id":"req_01M2ESMRXA7VFWYRC008ABK23G","code":"COA 11.101","name":"Set Mower Blade Height to Four Inches Minimum"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="crotch bumble bee"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.101 Vegetation Management in CBB Habitat"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.101</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Vegetation Management in CBB Habitat"
            >Vegetation Management in CBB Habitat</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.102 CBB Nest Relocation Plan"
          data-item='{"memberId":"COA 11.102","id":"COA 11.102","title":"CBB Nest Relocation Plan","code":"COA 11.102","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMRZ181JYEY65HZ6AD84A","code":"COA 11.102","name":"Halt Work Within 50-Foot CBB Nest Buffer"},{"id":"req_01M2ESMRZ2SQA04DKYQWZHN3NX","code":"COA 11.102","name":"Develop and Submit CBB Nest Relocation Plan"},{"id":"req_01M2ESMRZ2SQA04DKYQWZHN3NY","code":"COA 11.102","name":"Relocate Unavoidable CBB Nest as Last Resort"},{"id":"req_01M2ESMRZ2SQA04DKYQWZHN3NZ","code":"COA 11.102","name":"Monitor Relocated CBB Nest for One Week"},{"id":"req_01M2ESMRZ2SQA04DKYQWZHN3P0","code":"COA 11.102","name":"Notify CDFW Within 24 Hours of Potential Nest Loss"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Maintenance|Implementation Planning|Pre-Construction"
          data-f-species="crotch bumble bee"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.102 CBB Nest Relocation Plan"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.102</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="CBB Nest Relocation Plan"
            >CBB Nest Relocation Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.103 Notification of CBB Take or Injury"
          data-item='{"memberId":"COA 11.103","id":"COA 11.103","title":"Notification of CBB Take or Injury","code":"COA 11.103","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMS0T2RSRJA03WEQSCC33","code":"COA 11.103","name":"Immediately Notify Biologist of CBB Take or Mortality"},{"id":"req_01M2ESMS0T2RSRJA03WEQSCC34","code":"COA 11.103","name":"Provide Initial CDFW Notice of CBB Take Within 1 Day"},{"id":"req_01M2ESMS0VRXQZQ44TNN5TJ4N0","code":"COA 11.103","name":"Submit Written CBB Incident Report Within 2 Days"},{"id":"req_01M2ESMS0VRXQZQ44TNN5TJ4N1","code":"COA 11.103","name":"Salvage and Label CBB Carcass for CDFW Lab"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="crotch bumble bee"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.103 Notification of CBB Take or Injury"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.103</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notification of CBB Take or Injury"
            >Notification of CBB Take or Injury</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.104 MALI Initial Site Clearing and Monitoring"
          data-item='{"memberId":"COA 11.104","id":"COA 11.104","title":"MALI Initial Site Clearing and Monitoring","code":"COA 11.104","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMS2J8K75A6BFAQ1C7V5H","code":"COA 11.104","name":"Confine MALI Ground Disturbance to Minimal Footprint"},{"id":"req_01M2ESMS2KJG72AVTFC3R8HHR3","code":"COA 11.104","name":"Station Biologist Onsite Daily During Initial Ground Disturbance"},{"id":"req_01M2ESMS2KJG72AVTFC3R8HHR4","code":"COA 11.104","name":"Monitor Covered Activities in Suitable MALI Habitat"},{"id":"req_01M2ESMS2KJG72AVTFC3R8HHR5","code":"COA 11.104","name":"Stop Work Pending MALI Translocation Upon Discovery"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction"
          data-f-species="mason’s lilaeopsis"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.104 MALI Initial Site Clearing and Monitoring"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.104</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="MALI Initial Site Clearing and Monitoring"
            >MALI Initial Site Clearing and Monitoring</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.105 MALI Preconstruction Surveys"
          data-item='{"memberId":"COA 11.105","id":"COA 11.105","title":"MALI Preconstruction Surveys","code":"COA 11.105","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMS4B6RKD5GF8X6CCJ5FR","code":"COA 11.105","name":"Conduct Preconstruction MALI Floristic Survey"},{"id":"req_01M2ESMS4B6RKD5GF8X6CCJ5FS","code":"COA 11.105","name":"Submit MALI Survey Results for CDFW Approval"},{"id":"req_01M2ESMS4B6RKD5GF8X6CCJ5FT","code":"COA 11.105","name":"Repeat MALI Surveys Each Year in Suitable Habitat"},{"id":"req_01M2ESMS4C8ZZ5JGVRQGM5AGY1","code":"COA 11.105","name":"Report MALI Survey Results Monthly and Annually"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction"
          data-f-species="mason’s lilaeopsis"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.105 MALI Preconstruction Surveys"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.105</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="MALI Preconstruction Surveys"
            >MALI Preconstruction Surveys</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.106 MALI No-Activity Buffer Zone"
          data-item='{"memberId":"COA 11.106","id":"COA 11.106","title":"MALI No-Activity Buffer Zone","code":"COA 11.106","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMS63S5TJRSKN2D93XX9M","code":"COA 11.106","name":"Avoid MALI Removal to Maximum Extent Practicable"},{"id":"req_01M2ESMS63S5TJRSKN2D93XX9N","code":"COA 11.106","name":"Establish 100-Foot No-Activity Buffer Around MALI"},{"id":"req_01M2ESMS63S5TJRSKN2D93XX9P","code":"COA 11.106","name":"Delineate MALI Buffer With High-Visibility Materials"},{"id":"req_01M2ESMS63S5TJRSKN2D93XX9Q","code":"COA 11.106","name":"Station Biologist Onsite During Buffer Installation"},{"id":"req_01M2ESMS64HSCCA956ZZYZCFCS","code":"COA 11.106","name":"Maintain Buffer Fencing Integrity Through Weather"},{"id":"req_01M2ESMS64HSCCA956ZZYZCFCT","code":"COA 11.106","name":"Submit MALI Buffer Zone Design Plan for CDFW Approval"},{"id":"req_01M2ESMS64HSCCA956ZZYZCFCV","code":"COA 11.106","name":"Record and Report MALI Locations by GPS"},{"id":"req_01M2ESMS64HSCCA956ZZYZCFCW","code":"COA 11.106","name":"Follow MALI Relocation Plan When Removal Is Unavoidable"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Pre-Construction|Maintenance|Implementation Planning"
          data-f-species="mason’s lilaeopsis"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.106 MALI No-Activity Buffer Zone"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.106</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="MALI No-Activity Buffer Zone"
            >MALI No-Activity Buffer Zone</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.107 MALI Measures for SCADA and Transmission Line Maintenance"
          data-item='{"memberId":"COA 11.107","id":"COA 11.107","title":"MALI Measures for SCADA and Transmission Line Maintenance","code":"COA 11.107","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMS7W6E1HTMTD240D0JJN","code":"COA 11.107","name":"Site SCADA/Transmission Line Maintenance on Levee Landside"},{"id":"req_01M2ESMS7W6E1HTMTD240D0JJP","code":"COA 11.107","name":"Survey for MALI Before SCADA/Line Maintenance"},{"id":"req_01M2ESMS7W6E1HTMTD240D0JJQ","code":"COA 11.107","name":"Place Non-Disturbance Buffers Around MALI Before Maintenance"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Maintenance|Pre-Construction"
          data-f-species="mason’s lilaeopsis"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.107 MALI Measures for SCADA and Transmission Line Maintenance"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.107</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="MALI Measures for SCADA and Transmission Line Maintenance"
            >MALI Measures for SCADA and Transmission Line Maintenance</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.108 MALI Translocation Plan"
          data-item='{"memberId":"COA 11.108","id":"COA 11.108","title":"MALI Translocation Plan","code":"COA 11.108","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMS9N6R3G11B584DPJ5HC","code":"COA 11.108","name":"Prepare and Submit MALI Translocation Plan"},{"id":"req_01M2ESMS9N6R3G11B584DPJ5HD","code":"COA 11.108","name":"Notify Biologist Immediately of MALI Found Onsite"},{"id":"req_01M2ESMS9PZAA7R0G27BRK7FGS","code":"COA 11.108","name":"Collect, Handle and Relocate Threatened MALI Plants"},{"id":"req_01M2ESMS9PZAA7R0G27BRK7FGT","code":"COA 11.108","name":"Call CDFW Within 24 Hours of Each MALI Transplant"},{"id":"req_01M2ESMS9PZAA7R0G27BRK7FGV","code":"COA 11.108","name":"Submit Written MALI Transplant Report Within 2 Days"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Maintenance"
          data-f-species="mason’s lilaeopsis"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.108 MALI Translocation Plan"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.108</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="MALI Translocation Plan"
            >MALI Translocation Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.109 Velocity Requirements at North Delta Intakes"
          data-item='{"memberId":"COA 11.109","id":"COA 11.109","title":"Velocity Requirements at North Delta Intakes","code":"COA 11.109","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMSBE1S7VRTS2Y8GMEDS7","code":"COA 11.109","name":"Divert Only Within Fish Screen Approach Velocity Limit"},{"id":"req_01M2ESMSBE1S7VRTS2Y8GMEDS8","code":"COA 11.109","name":"Spread Diversion Across Intakes to Minimize Localized Velocity"},{"id":"req_01M2ESMSBE1S7VRTS2Y8GMEDS9","code":"COA 11.109","name":"Maintain Minimum Fish Screen Sweeping Velocity"},{"id":"req_01M2ESMSBE1S7VRTS2Y8GMEDSA","code":"COA 11.109","name":"Conduct Regular Hydraulic Testing of Screen Velocities"},{"id":"req_01M2ESMSBE1S7VRTS2Y8GMEDSB","code":"COA 11.109","name":"Develop Hydraulic Data Plan With CDFW"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Operations|Implementation Planning"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.109 Velocity Requirements at North Delta Intakes"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.109</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Velocity Requirements at North Delta Intakes"
            >Velocity Requirements at North Delta Intakes</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.109.1 No Diversions Without North Delta Intake Screens"
          data-item='{"memberId":"COA 11.109.1","id":"COA 11.109.1","title":"No Diversions Without North Delta Intake Screens","code":"COA 11.109.1","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMSD72ZD3PSG8PQ392H6H","code":"COA 11.109.1","name":"Prohibit Diversion Through Non-Functional Screen Units"},{"id":"req_01M2ESMSD72ZD3PSG8PQ392H6J","code":"COA 11.109.1","name":"Notify CDFW Within 1 Day of Non-Operational Fish Screens"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.109.1 No Diversions Without North Delta Intake Screens"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.109.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="No Diversions Without North Delta Intake Screens"
            >No Diversions Without North Delta Intake Screens</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.110 Phase 1 and Phase 2 Authorized Operations"
          data-item='{"memberId":"COA 11.110","id":"COA 11.110","title":"Phase 1 and Phase 2 Authorized Operations","code":"COA 11.110","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMSEYKHGEWS8KFQQF826N","code":"COA 11.110","name":"Cap Phase 1 Operations at One Calendar Year"},{"id":"req_01M2ESMSEZ3J30473DP1TESQH9","code":"COA 11.110","name":"Obtain CDFW Approval to Extend Phase 1 Operations"},{"id":"req_01M2ESMSEZ3J30473DP1TESQHA","code":"COA 11.110","name":"Prohibit Diversion During Bethany Reservoir Contractor&apos;s Test"},{"id":"req_01M2ESMSEZ3J30473DP1TESQHB","code":"COA 11.110","name":"Cap Diversion at 500 CFS During Phase 1 Testing"},{"id":"req_01M2ESMSEZ3J30473DP1TESQHC","code":"COA 11.110","name":"Cap Phase 2 Operations at One Calendar Year"},{"id":"req_01M2ESMSEZ3J30473DP1TESQHD","code":"COA 11.110","name":"Evaluate Joint North/South Delta Intake Operations"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.110 Phase 1 and Phase 2 Authorized Operations"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.110</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Phase 1 and Phase 2 Authorized Operations"
            >Phase 1 and Phase 2 Authorized Operations</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.111 Diversion Criteria for North Delta Intakes"
          data-item='{"memberId":"COA 11.111","id":"COA 11.111","title":"Diversion Criteria for North Delta Intakes","code":"COA 11.111","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMSGQ0CME08SA39ND031V","code":"COA 11.111","name":"Prohibit Diversion While Delta Cross Channel Gates Are Open"},{"id":"req_01M2ESMSGRP9DVS55MKS4X5YBD","code":"COA 11.111","name":"Maintain Minimum Bypass Flow Below Intake C (Tidally Dominated)"},{"id":"req_01M2ESMSGRP9DVS55MKS4X5YBE","code":"COA 11.111","name":"Cap Diversion at 6% of Flow, Tidally Dominated"},{"id":"req_01M2ESMSGRP9DVS55MKS4X5YBF","code":"COA 11.111","name":"Cap Diversion at 6-10% of Flow, Transitional"},{"id":"req_01M2ESMSGRP9DVS55MKS4X5YBG","code":"COA 11.111","name":"Cap Diversion at 10-12% of Flow, Flow Dominated"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Operations"
          data-f-species="winter-run chinook salmon|spring-run chinook salmon|delta smelt|longfin smelt|white sturgeon"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.111 Diversion Criteria for North Delta Intakes"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.111</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Diversion Criteria for North Delta Intakes"
            >Diversion Criteria for North Delta Intakes</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.111.1 June Operations Diversion Criteria"
          data-item='{"memberId":"COA 11.111.1","id":"COA 11.111.1","title":"June Operations Diversion Criteria","code":"COA 11.111.1","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMSJH110ZZVFMZ5MD0BV3","code":"COA 11.111.1","name":"Apply Tiered June Diversion Limits by Freeport Flow"},{"id":"req_01M2ESMSJJ0K3HPN6NC01BTT5M","code":"COA 11.111.1","name":"Apply Post-15-Day High-Bypass June Diversion Limits"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.111.1 June Operations Diversion Criteria"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.111.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="June Operations Diversion Criteria"
            >June Operations Diversion Criteria</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.111.2 Seasonal Operations of the North Delta Intakes"
          data-item='{"memberId":"COA 11.111.2","id":"COA 11.111.2","title":"Seasonal Operations of the North Delta Intakes","code":"COA 11.111.2","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMSM9VZGDZ0JXS2Q0H0WH","code":"COA 11.111.2","name":"Coordinate Project Operations With CDFW During Phase 1 and 2"},{"id":"req_01M2ESMSMAA8RVNCHG7JT7CNHX","code":"COA 11.111.2","name":"Apply November Risk-Based Diversion Criteria"},{"id":"req_01M2ESMSMAA8RVNCHG7JT7CNHY","code":"COA 11.111.2","name":"Apply Default December Through May Operating Criteria"},{"id":"req_01M2ESMSMAA8RVNCHG7JT7CNHZ","code":"COA 11.111.2","name":"Apply Default June Operating Criteria Before Salmon Presence Off-Ramp"},{"id":"req_01M2ESMSMAA8RVNCHG7JT7CNJ0","code":"COA 11.111.2","name":"Apply June Operations Criteria After Salmon Presence Off-Ramp"},{"id":"req_01M2ESMSMAA8RVNCHG7JT7CNJ1","code":"COA 11.111.2","name":"Apply July Risk-Based Diversion Criteria"},{"id":"req_01M2ESMSMAA8RVNCHG7JT7CNJ2","code":"COA 11.111.2","name":"Maintain Mandatory Bypass Flow November 1 Through July 30"},{"id":"req_01M2ESMSMAA8RVNCHG7JT7CNJ3","code":"COA 11.111.2","name":"Maintain Minimum Bypass Flow August 1 Through September 30"},{"id":"req_01M2ESMSMAA8RVNCHG7JT7CNJ4","code":"COA 11.111.2","name":"Maintain Minimum Bypass Flow October 1 Through October 31"},{"id":"req_01M2ESMSMAA8RVNCHG7JT7CNJ5","code":"COA 11.111.2","name":"Implement Year-Round Diversion Conditions of Approval"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.111.2 Seasonal Operations of the North Delta Intakes"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.111.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Seasonal Operations of the North Delta Intakes"
            >Seasonal Operations of the North Delta Intakes</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.111.3 North Delta Diversion Monitoring Team and Risk Assessments"
          data-item='{"memberId":"COA 11.111.3","id":"COA 11.111.3","title":"North Delta Diversion Monitoring Team and Risk Assessments","code":"COA 11.111.3","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMSP28M32XPN201SKGW5F","code":"COA 11.111.3","name":"Establish NDDMT Membership With CDFW and Optional Federal Partners"},{"id":"req_01M2ESMSP28M32XPN201SKGW5G","code":"COA 11.111.3","name":"Convene NDDMT Weekly Beginning First Week of October"},{"id":"req_01M2ESMSP3QEZQRVJ3HWC8EAFK","code":"COA 11.111.3","name":"Begin Risk Assessments Last Week of October and Meet Weekly Through November"},{"id":"req_01M2ESMSP3QEZQRVJ3HWC8EAFM","code":"COA 11.111.3","name":"Convene NDDMT As Needed December Through June"},{"id":"req_01M2ESMSP3QEZQRVJ3HWC8EAFN","code":"COA 11.111.3","name":"Convene NDDMT Weekly in July"},{"id":"req_01M2ESMSP3QEZQRVJ3HWC8EAFP","code":"COA 11.111.3","name":"Provide NDDMT Raw Data and Modeling to CDFW Within 10 Days of Request"},{"id":"req_01M2ESMSP3QEZQRVJ3HWC8EAFQ","code":"COA 11.111.3","name":"Conduct Risk Assessments Covering Components A Through G"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Operations"
          data-f-species="delta smelt|longfin smelt|white sturgeon|winter-run chinook salmon|spring-run chinook salmon"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.111.3 North Delta Diversion Monitoring Team and Risk Assessments"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.111.3</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="North Delta Diversion Monitoring Team and Risk Assessments"
            >North Delta Diversion Monitoring Team and Risk Assessments</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.111.4 Chartering the North Delta Diversion Monitoring Team"
          data-item='{"memberId":"COA 11.111.4","id":"COA 11.111.4","title":"Chartering the North Delta Diversion Monitoring Team","code":"COA 11.111.4","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMSQV25VV7Q7632NJ9MF1","code":"COA 11.111.4","name":"Develop and Submit NDDMT Charter for CDFW Approval"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.111.4 Chartering the North Delta Diversion Monitoring Team"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.111.4</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Chartering the North Delta Diversion Monitoring Team"
            >Chartering the North Delta Diversion Monitoring Team</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.111.5 Collaborative Approach to Real-time Decision Making"
          data-item='{"memberId":"COA 11.111.5","id":"COA 11.111.5","title":"Collaborative Approach to Real-time Decision Making","code":"COA 11.111.5","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMSSPGPGXPREKCV7YCHHF","code":"COA 11.111.5","name":"Convene NDDMT to Review Real-time Operations Data"},{"id":"req_01M2ESMSSPGPGXPREKCV7YCHHG","code":"COA 11.111.5","name":"Prepare Weekly Risk Assessment for Operating Criteria Changes"},{"id":"req_01M2ESMSSQYYRK2AF6VVNTC1XW","code":"COA 11.111.5","name":"Resolve Disputed Real-time Operations Decisions"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.111.5 Collaborative Approach to Real-time Decision Making"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.111.5</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Collaborative Approach to Real-time Decision Making"
            >Collaborative Approach to Real-time Decision Making</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.111.6 Salmon Presence Off-ramp"
          data-item='{"memberId":"COA 11.111.6","id":"COA 11.111.6","title":"Salmon Presence Off-ramp","code":"COA 11.111.6","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMSVD1KJC0F34NR5PD1GK","code":"COA 11.111.6","name":"Determine Salmon Passage and Temperature Trigger for June Shift"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Operations"
          data-f-species="winter-run chinook salmon|spring-run chinook salmon"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.111.6 Salmon Presence Off-ramp"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.111.6</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Salmon Presence Off-ramp"
            >Salmon Presence Off-ramp</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.112 Reservoir Storage"
          data-item='{"memberId":"COA 11.112","id":"COA 11.112","title":"Reservoir Storage","code":"COA 11.112","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMSX62K9KSWNFWGPK95EM","code":"COA 11.112","name":"Cap Combined South and North Delta SWP Diversions"},{"id":"req_01M2ESMSX724175190C3250ET8","code":"COA 11.112","name":"Restrict Additional Upstream Reservoir Releases for Diversion"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox size="sm" aria-label="COA 11.112 Reservoir Storage"></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.112</span
          ><span class="bcn-lao__label" data-opt-label="" data-text="Reservoir Storage"
            >Reservoir Storage</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.113 Shifting Exports During Balanced Conditions"
          data-item='{"memberId":"COA 11.113","id":"COA 11.113","title":"Shifting Exports During Balanced Conditions","code":"COA 11.113","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMSYZF2RQ2A0WXRVCBAGK","code":"COA 11.113","name":"Prohibit North Delta Diversions During Low-Export Balanced Conditions"},{"id":"req_01M2ESMSYZF2RQ2A0WXRVCBAGM","code":"COA 11.113","name":"Limit Export Shifting to North Delta During Balanced Conditions"},{"id":"req_01M2ESMSZ08PDFV1CSZRT18R6W","code":"COA 11.113","name":"Develop and Implement Real-time Information Sharing Process with CDFW"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Operations|Implementation Planning"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.113 Shifting Exports During Balanced Conditions"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.113</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Shifting Exports During Balanced Conditions"
            >Shifting Exports During Balanced Conditions</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.114 Additional Diversions from North Delta Intakes Daily Cap"
          data-item='{"memberId":"COA 11.114","id":"COA 11.114","title":"Additional Diversions from North Delta Intakes Daily Cap","code":"COA 11.114","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMT0R3AVAQHERSDS0GMD2","code":"COA 11.114","name":"Cap Combined South and North Delta SWP Diversions"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.114 Additional Diversions from North Delta Intakes Daily Cap"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.114</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Additional Diversions from North Delta Intakes Daily Cap"
            >Additional Diversions from North Delta Intakes Daily Cap</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.115 Delta Smelt and Longfin Smelt Biological Criteria Model Approval"
          data-item='{"memberId":"COA 11.115","id":"COA 11.115","title":"Delta Smelt and Longfin Smelt Biological Criteria Model Approval","code":"COA 11.115","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMT2GD69RBQ63A8A8HYSN","code":"COA 11.115","name":"Obtain CDFW Approval for Biological Criteria Compliance Models"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Operations"
          data-f-species="delta smelt|longfin smelt"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.115 Delta Smelt and Longfin Smelt Biological Criteria Model Approval"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.115</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Delta Smelt and Longfin Smelt Biological Criteria Model Approval"
            >Delta Smelt and Longfin Smelt Biological Criteria Model Approval</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.115.1 Smelt Biological Criterion 1"
          data-item='{"memberId":"COA 11.115.1","id":"COA 11.115.1","title":"Smelt Biological Criterion 1","code":"COA 11.115.1","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMT49GX2D5VVT0VT7RHK4","code":"COA 11.115.1","name":"Assess Covered Activities Against Smelt Entrainment and Abundance Criteria"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Operations"
          data-f-species="delta smelt|longfin smelt"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.115.1 Smelt Biological Criterion 1"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.115.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Smelt Biological Criterion 1"
            >Smelt Biological Criterion 1</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.115.2 Smelt Biological Criterion 2"
          data-item='{"memberId":"COA 11.115.2","id":"COA 11.115.2","title":"Smelt Biological Criterion 2","code":"COA 11.115.2","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMT614Q1SBCBDNAFM28AQ","code":"COA 11.115.2","name":"Assess Smelt Population Growth Rate Against Baseline"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Operations"
          data-f-species="delta smelt|longfin smelt"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.115.2 Smelt Biological Criterion 2"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.115.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Smelt Biological Criterion 2"
            >Smelt Biological Criterion 2</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.116 Winter- and Spring-run Chinook Salmon Biological Criteria Model Approval"
          data-item='{"memberId":"COA 11.116","id":"COA 11.116","title":"Winter- and Spring-run Chinook Salmon Biological Criteria Model Approval","code":"COA 11.116","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMT7TABTK6P93QMMQBAQF","code":"COA 11.116","name":"Obtain CDFW Approval for Salmonid Biological Criteria Models"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Operations"
          data-f-species="winter-run chinook salmon|spring-run chinook salmon"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.116 Winter- and Spring-run Chinook Salmon Biological Criteria Model Approval"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.116</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Winter- and Spring-run Chinook Salmon Biological Criteria Model Approval"
            >Winter- and Spring-run Chinook Salmon Biological Criteria Model
            Approval</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.116.1 Salmonid Biological Criterion 1"
          data-item='{"memberId":"COA 11.116.1","id":"COA 11.116.1","title":"Salmonid Biological Criterion 1","code":"COA 11.116.1","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMT9J6H7C4D8AMBPRXB29","code":"COA 11.116.1","name":"Monitor for Juvenile Salmon Entrainment at North Delta Intakes"},{"id":"req_01M2ESMT9J6H7C4D8AMBPRXB2A","code":"COA 11.116.1","name":"Assess Covered Activities Against Salmonid Survival Criterion"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Operations|Construction"
          data-f-species="winter-run chinook salmon|spring-run chinook salmon"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.116.1 Salmonid Biological Criterion 1"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.116.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Salmonid Biological Criterion 1"
            >Salmonid Biological Criterion 1</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.116.2 Salmonid Biological Criterion 2"
          data-item='{"memberId":"COA 11.116.2","id":"COA 11.116.2","title":"Salmonid Biological Criterion 2","code":"COA 11.116.2","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMTBAKV3R7VSK61G0CBDQ","code":"COA 11.116.2","name":"Assess Salmonid Population Growth Rate Against Baseline"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Operations"
          data-f-species="winter-run chinook salmon|spring-run chinook salmon"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.116.2 Salmonid Biological Criterion 2"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.116.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Salmonid Biological Criterion 2"
            >Salmonid Biological Criterion 2</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.117 White Sturgeon Biological Criteria Model Approval"
          data-item='{"memberId":"COA 11.117","id":"COA 11.117","title":"White Sturgeon Biological Criteria Model Approval","code":"COA 11.117","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMTD3MKXCW8AW2F365EEC","code":"COA 11.117","name":"Obtain CDFW Approval for White Sturgeon Biological Criteria Models"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Operations"
          data-f-species="white sturgeon"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.117 White Sturgeon Biological Criteria Model Approval"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.117</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="White Sturgeon Biological Criteria Model Approval"
            >White Sturgeon Biological Criteria Model Approval</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.117.1 White Sturgeon Biological Criterion 1"
          data-item='{"memberId":"COA 11.117.1","id":"COA 11.117.1","title":"White Sturgeon Biological Criterion 1","code":"COA 11.117.1","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMTEVCT94CYF2TVVG84MJ","code":"COA 11.117.1","name":"Assess Covered Activities Against Sturgeon Catch Criterion"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Operations"
          data-f-species="white sturgeon"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.117.1 White Sturgeon Biological Criterion 1"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.117.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="White Sturgeon Biological Criterion 1"
            >White Sturgeon Biological Criterion 1</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 11.117.2 White Sturgeon Biological Criterion 2"
          data-item='{"memberId":"COA 11.117.2","id":"COA 11.117.2","title":"White Sturgeon Biological Criterion 2","code":"COA 11.117.2","groupId":"COA 11","groupName":"COA 11","reqs":[{"id":"req_01M2ESMTGMW3VF8AG8TM1SGS1C","code":"COA 11.117.2","name":"Assess Sturgeon Population Growth Rate Against Baseline"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 11"
          data-f-phase="Operations"
          data-f-species="white sturgeon"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 11.117.2 White Sturgeon Biological Criterion 2"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.117.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="White Sturgeon Biological Criterion 2"
            >White Sturgeon Biological Criterion 2</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12 Habitat Management Land Acquisition and Restoration"
          data-item='{"memberId":"COA 12","id":"COA 12","title":"Habitat Management Land Acquisition and Restoration","code":"COA 12","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMTJCND5F4VV6BR1CRRTB","code":"COA 12","name":"Meet Compensatory Mitigation Acreage via Credits or HM Lands"},{"id":"req_01M2ESMTJDPF4BKMV539XW8FER","code":"COA 12","name":"Obtain CESA Authorization for HM Lands Activities"},{"id":"req_01M2ESMTJDPF4BKMV539XW8FES","code":"COA 12","name":"Maintain 10% HM Lands Stay-Ahead Ratio"},{"id":"req_01M2ESMTJDPF4BKMV539XW8FET","code":"COA 12","name":"Amend ITP When Actual Impacts Vary from Anticipated"},{"id":"req_01M2ESMTJEPDSERNB5QPHEZ71K","code":"COA 12","name":"Complete Mitigation or Security Before Phase Impacts"},{"id":"req_01M2ESMTJEPDSERNB5QPHEZ71M","code":"COA 12","name":"Obtain CDFW Written Approval for Mitigation Projects"},{"id":"req_01M2ESMTJEPDSERNB5QPHEZ71N","code":"COA 12","name":"Calculate Phase Impacts and Mitigation for Authorization Package"},{"id":"req_01M2ESMTJEPDSERNB5QPHEZ71P","code":"COA 12","name":"Document Stay-Ahead Compliance in Annual Status Report"},{"id":"req_01M2ESMTJEPDSERNB5QPHEZ71Q","code":"COA 12","name":"Notify CDFW and Provide Plan for Stay-Ahead Shortfall"},{"id":"req_01M2ESMTJEPDSERNB5QPHEZ71R","code":"COA 12","name":"Restore Temporarily Impacted Covered Species Habitat"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations|Post-Construction"
          data-f-species="california tiger salamander|giant garter snake|swainson’s hawk|tricolored blackbird|crotch bumble bee|mason’s lilaeopsis|delta smelt|longfin smelt|winter-run chinook salmon|spring-run chinook salmon|white sturgeon"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12 Habitat Management Land Acquisition and Restoration"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Habitat Management Land Acquisition and Restoration"
            >Habitat Management Land Acquisition and Restoration</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.1 Project Footprint Features with Impact Multiplier Percentages"
          data-item='{"memberId":"COA 12.1","id":"COA 12.1","title":"Project Footprint Features with Impact Multiplier Percentages","code":"COA 12.1","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMTM6F7R8AKVMKB6H58V0","code":"COA 12.1","name":"Verify Transmission Line and Preconstruction Impact Multipliers"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Pre-Construction|Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.1 Project Footprint Features with Impact Multiplier Percentages"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Project Footprint Features with Impact Multiplier Percentages"
            >Project Footprint Features with Impact Multiplier Percentages</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.2 Restoration from Temporary Preconstruction Impacts"
          data-item='{"memberId":"COA 12.2","id":"COA 12.2","title":"Restoration from Temporary Preconstruction Impacts","code":"COA 12.2","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMTNXG144G8WNFT4JXMPZ","code":"COA 12.2","name":"Backfill and Restore Preconstruction Investigation Sites"},{"id":"req_01M2ESMTNY7D1418K170PZNHSR","code":"COA 12.2","name":"Site Geotechnical Test Locations Away From Aquatic Features"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Pre-Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.2 Restoration from Temporary Preconstruction Impacts"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Restoration from Temporary Preconstruction Impacts"
            >Restoration from Temporary Preconstruction Impacts</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.3 Temporary Impacts and On-Site Restoration"
          data-item='{"memberId":"COA 12.3","id":"COA 12.3","title":"Temporary Impacts and On-Site Restoration","code":"COA 12.3","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMTQPZPEYQ0BM549VQ78K","code":"COA 12.3","name":"Restore Temporarily Disturbed Covered Species Habitat On-Site"},{"id":"req_01M2ESMTQPZPEYQ0BM549VQ78M","code":"COA 12.3","name":"Obtain CDFW-Approved Species-Specific Restoration Guidelines"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Post-Construction|Implementation Planning"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.3 Temporary Impacts and On-Site Restoration"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.3</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Temporary Impacts and On-Site Restoration"
            >Temporary Impacts and On-Site Restoration</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.3.1 Temporary Impact Criteria"
          data-item='{"memberId":"COA 12.3.1","id":"COA 12.3.1","title":"Temporary Impact Criteria","code":"COA 12.3.1","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMTSFZE1MPKDC55PW5H2E","code":"COA 12.3.1","name":"Recontour and Reseed Temporary Impact Areas Same-Year"},{"id":"req_01M2ESMTSGH2CPJYC0EHHW9011","code":"COA 12.3.1","name":"Remove Exclusion Fencing by October 31 Near Aquatic Features"},{"id":"req_01M2ESMTSGH2CPJYC0EHHW9012","code":"COA 12.3.1","name":"Obtain CDFW Approval of Restoration Plan Before Temporary Impacts"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Post-Construction|Construction|Implementation Planning|Pre-Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.3.1 Temporary Impact Criteria"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.3.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Temporary Impact Criteria"
            >Temporary Impact Criteria</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.3.2 Temporary Impact Restoration Schedule"
          data-item='{"memberId":"COA 12.3.2","id":"COA 12.3.2","title":"Temporary Impact Restoration Schedule","code":"COA 12.3.2","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMTV61PPK7RWYVRPSSH96","code":"COA 12.3.2","name":"Develop Temporary Impact Restoration Schedule"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Pre-Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.3.2 Temporary Impact Restoration Schedule"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.3.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Temporary Impact Restoration Schedule"
            >Temporary Impact Restoration Schedule</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.3.3 Restoration and Revegetation Plan"
          data-item='{"memberId":"COA 12.3.3","id":"COA 12.3.3","title":"Restoration and Revegetation Plan","code":"COA 12.3.3","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMTWYDE1920SWZ9QXMMM0","code":"COA 12.3.3","name":"Submit Restoration and Revegetation Plan for CDFW Approval"},{"id":"req_01M2ESMTWZNQTVFA2YPJBP8E28","code":"COA 12.3.3","name":"Establish Reference and Treatment Transects for Restoration"},{"id":"req_01M2ESMTWZNQTVFA2YPJBP8E29","code":"COA 12.3.3","name":"Design Seed Mix and Target Vegetation Communities"},{"id":"req_01M2ESMTWZNQTVFA2YPJBP8E2A","code":"COA 12.3.3","name":"Remove Invasive Substrate and Manage Restoration Fill"},{"id":"req_01M2ESMTX0GQVZGMA42T89ZK0E","code":"COA 12.3.3","name":"Protect Restoration Soils and Meet Seeding Window"},{"id":"req_01M2ESMTX0GQVZGMA42T89ZK0F","code":"COA 12.3.3","name":"Install Barriers to Protect Restored Road Shoulders"},{"id":"req_01M2ESMTX0GQVZGMA42T89ZK0G","code":"COA 12.3.3","name":"Control Invasive Plants at Restoration Sites"},{"id":"req_01M2ESMTX0GQVZGMA42T89ZK0H","code":"COA 12.3.3","name":"Meet Restoration Survivorship Success Standards"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction|Post-Construction|Construction|Maintenance"
          data-f-species="mason’s lilaeopsis"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.3.3 Restoration and Revegetation Plan"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.3.3</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Restoration and Revegetation Plan"
            >Restoration and Revegetation Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.3.4 Restoration Monitoring and Maintenance"
          data-item='{"memberId":"COA 12.3.4","id":"COA 12.3.4","title":"Restoration Monitoring and Maintenance","code":"COA 12.3.4","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMTYP66KXTJEHEW4M81KS","code":"COA 12.3.4","name":"Monitor and Maintain Restoration Areas to Success"},{"id":"req_01M2ESMTYQKRY2AEA4HFNVAVW0","code":"COA 12.3.4","name":"Submit Restoration Monitoring Reports to CDFW"},{"id":"req_01M2ESMTYQKRY2AEA4HFNVAVW1","code":"COA 12.3.4","name":"Perform Remedial Restoration When Standards Are Unmet"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Post-Construction|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.3.4 Restoration Monitoring and Maintenance"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.3.4</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Restoration Monitoring and Maintenance"
            >Restoration Monitoring and Maintenance</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.4 Bird Strike Diverters on Transmission Lines"
          data-item='{"memberId":"COA 12.4","id":"COA 12.4","title":"Bird Strike Diverters on Transmission Lines","code":"COA 12.4","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMV0G2RPZFHW44PCZ3G5Z","code":"COA 12.4","name":"Submit Bird Strike Diverter Plan for CDFW Approval"},{"id":"req_01M2ESMV0G2RPZFHW44PCZ3G60","code":"COA 12.4","name":"Install Bird Strike Diverters on Transmission Lines"},{"id":"req_01M2ESMV0G2RPZFHW44PCZ3G61","code":"COA 12.4","name":"Maintain Installed Bird Strike Diverters"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations|Maintenance"
          data-f-species="swainson’s hawk|tricolored blackbird"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.4 Bird Strike Diverters on Transmission Lines"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.4</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Bird Strike Diverters on Transmission Lines"
            >Bird Strike Diverters on Transmission Lines</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.5.1 SWHA Compensation for Lost Occupied Nest Sites"
          data-item='{"memberId":"COA 12.5.1","id":"COA 12.5.1","title":"SWHA Compensation for Lost Occupied Nest Sites","code":"COA 12.5.1","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMV290BYP9VJ1MDF8SZN2","code":"COA 12.5.1","name":"Plant Replacement Nest Trees for Each Removed Nest Site"},{"id":"req_01M2ESMV2AYG1M0RCCZPA7FTW6","code":"COA 12.5.1","name":"Site Replacement Nest Trees per Spacing Criteria"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Pre-Construction|Construction"
          data-f-species="swainson’s hawk"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.5.1 SWHA Compensation for Lost Occupied Nest Sites"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.5.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="SWHA Compensation for Lost Occupied Nest Sites"
            >SWHA Compensation for Lost Occupied Nest Sites</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.5.2 SWHA Compensation for Lost Suitable Nest Trees"
          data-item='{"memberId":"COA 12.5.2","id":"COA 12.5.2","title":"SWHA Compensation for Lost Suitable Nest Trees","code":"COA 12.5.2","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMV436Y8K8NHQB9MMX3JE","code":"COA 12.5.2","name":"Plant Replacement Trees for Each Suitable Nest Tree Removed"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Construction|Post-Construction"
          data-f-species="swainson’s hawk"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.5.2 SWHA Compensation for Lost Suitable Nest Trees"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.5.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="SWHA Compensation for Lost Suitable Nest Trees"
            >SWHA Compensation for Lost Suitable Nest Trees</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.5.3 SWHA Replacement Nest Tree Monitoring and Success Criteria"
          data-item='{"memberId":"COA 12.5.3","id":"COA 12.5.3","title":"SWHA Replacement Nest Tree Monitoring and Success Criteria","code":"COA 12.5.3","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMV5V36QAS8SYKGYQNNTW","code":"COA 12.5.3","name":"Monitor Replacement Nest Trees for Ten Years and Beyond"},{"id":"req_01M2ESMV5WNA9H2H2GRY0Y20RC","code":"COA 12.5.3","name":"Irrigate and Maintain Replacement Nest Trees"},{"id":"req_01M2ESMV5WNA9H2H2GRY0Y20RD","code":"COA 12.5.3","name":"Meet Replacement Nest Tree Survival Standard"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Post-Construction|Maintenance"
          data-f-species="swainson’s hawk"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.5.3 SWHA Replacement Nest Tree Monitoring and Success Criteria"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.5.3</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="SWHA Replacement Nest Tree Monitoring and Success Criteria"
            >SWHA Replacement Nest Tree Monitoring and Success Criteria</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.6.1 Construction Mitigation for Delta Smelt and Longfin Smelt"
          data-item='{"memberId":"COA 12.6.1","id":"COA 12.6.1","title":"Construction Mitigation for Delta Smelt and Longfin Smelt","code":"COA 12.6.1","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMV7KRZKKJSNH8GTNVGEK","code":"COA 12.6.1","name":"Site, Design and Restore DS/LFS Tidal and Spawning Habitat"},{"id":"req_01M2ESMV7KRZKKJSNH8GTNVGEM","code":"COA 12.6.1","name":"Obtain CDFW Approval of Habitat Restoration Projects"},{"id":"req_01M2ESMV7KRZKKJSNH8GTNVGEN","code":"COA 12.6.1","name":"Monitor Habitat Mitigation Sites for Ten Years"},{"id":"req_01M2ESMV7KRZKKJSNH8GTNVGEP","code":"COA 12.6.1","name":"Coordinate with CDFW on Mitigation Site Selection and Design"},{"id":"req_01M2ESMV7M3QTHZW3VMB5W7Y74","code":"COA 12.6.1","name":"Integrate Spawning Habitat Study into Design"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations|Post-Construction|Maintenance"
          data-f-species="delta smelt|longfin smelt"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.6.1 Construction Mitigation for Delta Smelt and Longfin Smelt"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.6.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Construction Mitigation for Delta Smelt and Longfin Smelt"
            >Construction Mitigation for Delta Smelt and Longfin Smelt</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.6.2 Operations Mitigation for Delta Smelt"
          data-item='{"memberId":"COA 12.6.2","id":"COA 12.6.2","title":"Operations Mitigation for Delta Smelt","code":"COA 12.6.2","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMV9CFD75GZNER1MNVCS7","code":"COA 12.6.2","name":"Site, Design and Restore DS Operations Mitigation Habitat"},{"id":"req_01M2ESMV9D0SY0RCKVRGZZCSX8","code":"COA 12.6.2","name":"Obtain CDFW Approval of DS Tidal Wetland Restoration"},{"id":"req_01M2ESMV9D0SY0RCKVRGZZCSX9","code":"COA 12.6.2","name":"Coordinate with CDFW on Operations Mitigation Site Selection"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Construction|Operations|Pre-Construction"
          data-f-species="delta smelt|longfin smelt"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.6.2 Operations Mitigation for Delta Smelt"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.6.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Operations Mitigation for Delta Smelt"
            >Operations Mitigation for Delta Smelt</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.6.3 Delta Smelt Summer–Fall Habitat Action"
          data-item='{"memberId":"COA 12.6.3","id":"COA 12.6.3","title":"Delta Smelt Summer–Fall Habitat Action","code":"COA 12.6.3","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMVB5C4P4MQC3XXD185QC","code":"COA 12.6.3","name":"Model Operations Effects on DS Habitat in Suisun Marsh"},{"id":"req_01M2ESMVB5C4P4MQC3XXD185QD","code":"COA 12.6.3","name":"Operate SMSCG Additional Days for DS Summer-Fall Habitat"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Operations"
          data-f-species="delta smelt"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.6.3 Delta Smelt Summer–Fall Habitat Action"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.6.3</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Delta Smelt Summer–Fall Habitat Action"
            >Delta Smelt Summer–Fall Habitat Action</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.6.4 Operations Mitigation for Longfin Smelt"
          data-item='{"memberId":"COA 12.6.4","id":"COA 12.6.4","title":"Operations Mitigation for Longfin Smelt","code":"COA 12.6.4","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMVCWFFX07R442SF1DMSD","code":"COA 12.6.4","name":"Site, Design and Restore LFS Operations Mitigation Habitat"},{"id":"req_01M2ESMVCXPEMFPGKCYVR3FT9D","code":"COA 12.6.4","name":"Coordinate Agency Approval of LFS Mitigation Site and Design"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Construction|Operations|Pre-Construction"
          data-f-species="longfin smelt"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.6.4 Operations Mitigation for Longfin Smelt"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.6.4</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Operations Mitigation for Longfin Smelt"
            >Operations Mitigation for Longfin Smelt</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.6.5 Spring Longfin Smelt Distribution"
          data-item='{"memberId":"COA 12.6.5","id":"COA 12.6.5","title":"Spring Longfin Smelt Distribution","code":"COA 12.6.5","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMVEK8T2M05ZWRYV1WKK6","code":"COA 12.6.5","name":"Model Operational Scenarios for Spring LFS Distribution"},{"id":"req_01M2ESMVEMC08TZ9QWN5G7Y4AB","code":"COA 12.6.5","name":"Implement Approved Operational Scenario During Operations"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Operations"
          data-f-species="delta smelt|longfin smelt"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.6.5 Spring Longfin Smelt Distribution"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.6.5</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Spring Longfin Smelt Distribution"
            >Spring Longfin Smelt Distribution</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.6.6 Longfin Smelt Refugial Population Establishment and Management"
          data-item='{"memberId":"COA 12.6.6","id":"COA 12.6.6","title":"Longfin Smelt Refugial Population Establishment and Management","code":"COA 12.6.6","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMVGB5PMSV2NJKNMMMWEE","code":"COA 12.6.6","name":"Fund Longfin Smelt Culture Program"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning"
          data-f-species="longfin smelt"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.6.6 Longfin Smelt Refugial Population Establishment and Management"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.6.6</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Longfin Smelt Refugial Population Establishment and Management"
            >Longfin Smelt Refugial Population Establishment and Management</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.7.1 Construction Mitigation for CHNWR and CHNSR"
          data-item='{"memberId":"COA 12.7.1","id":"COA 12.7.1","title":"Construction Mitigation for CHNWR and CHNSR","code":"COA 12.7.1","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMVJ6V6KZ8E8WVQ2QHJ69","code":"COA 12.7.1","name":"Site, Design and Restore CHNWR/CHNSR Construction Mitigation"},{"id":"req_01M2ESMVJ6V6KZ8E8WVQ2QHJ6A","code":"COA 12.7.1","name":"Coordinate CDFW Approval of CHNWR/CHNSR Mitigation Design"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction|Construction"
          data-f-species="winter-run chinook salmon|spring-run chinook salmon"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.7.1 Construction Mitigation for CHNWR and CHNSR"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.7.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Construction Mitigation for CHNWR and CHNSR"
            >Construction Mitigation for CHNWR and CHNSR</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.7.2 Operations Mitigation for CHNWR and CHNSR"
          data-item='{"memberId":"COA 12.7.2","id":"COA 12.7.2","title":"Operations Mitigation for CHNWR and CHNSR","code":"COA 12.7.2","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMVKZY4783EXRCR1239EV","code":"COA 12.7.2","name":"Site, Design and Restore CHNWR/CHNSR Operations Mitigation"},{"id":"req_01M2ESMVKZY4783EXRCR1239EW","code":"COA 12.7.2","name":"Coordinate CDFW Approval of CHNWR/CHNSR Operations Mitigation Design"},{"id":"req_01M2ESMVKZY4783EXRCR1239EX","code":"COA 12.7.2","name":"Fund CHNWR/CHNSR Operations Mitigation Projects"},{"id":"req_01M2ESMVM0CGR0YASR0GJVQCH6","code":"COA 12.7.2","name":"Coordinate Annual Selection of CHNWR/CHNSR Funded Projects"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Construction|Operations|Pre-Construction"
          data-f-species="winter-run chinook salmon|spring-run chinook salmon"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.7.2 Operations Mitigation for CHNWR and CHNSR"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.7.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Operations Mitigation for CHNWR and CHNSR"
            >Operations Mitigation for CHNWR and CHNSR</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.8.1 Construction Mitigation for White Sturgeon"
          data-item='{"memberId":"COA 12.8.1","id":"COA 12.8.1","title":"Construction Mitigation for White Sturgeon","code":"COA 12.8.1","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMVNQATTJ2CZMEQYXE9XT","code":"COA 12.8.1","name":"Site, Design and Restore White Sturgeon Construction Mitigation"},{"id":"req_01M2ESMVNRG291J0GR7K2B5CV4","code":"COA 12.8.1","name":"Coordinate CDFW Approval of White Sturgeon Mitigation Design"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction|Construction"
          data-f-species="white sturgeon"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.8.1 Construction Mitigation for White Sturgeon"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.8.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Construction Mitigation for White Sturgeon"
            >Construction Mitigation for White Sturgeon</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.8.2 Operations Mitigation for White Sturgeon"
          data-item='{"memberId":"COA 12.8.2","id":"COA 12.8.2","title":"Operations Mitigation for White Sturgeon","code":"COA 12.8.2","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMVQHVGN8HHKT7KYV03A3","code":"COA 12.8.2","name":"Site, Design and Restore White Sturgeon Operations Mitigation"},{"id":"req_01M2ESMVQJ3YJN9P04EC17WD3V","code":"COA 12.8.2","name":"Coordinate CDFW Approval of WS Operations Mitigation Design"},{"id":"req_01M2ESMVQJ3YJN9P04EC17WD3W","code":"COA 12.8.2","name":"Fund White Sturgeon Operations Mitigation"},{"id":"req_01M2ESMVQJ3YJN9P04EC17WD3X","code":"COA 12.8.2","name":"Fund and Complete CDFW-Approved White Sturgeon Projects"},{"id":"req_01M2ESMVQJ3YJN9P04EC17WD3Y","code":"COA 12.8.2","name":"Re-evaluate WS Operations Impacts with Life Cycle Model"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Construction|Operations|Pre-Construction"
          data-f-species="white sturgeon"
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.8.2 Operations Mitigation for White Sturgeon"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.8.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Operations Mitigation for White Sturgeon"
            >Operations Mitigation for White Sturgeon</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.9 Cost Estimates for Security"
          data-item='{"memberId":"COA 12.9","id":"COA 12.9","title":"Cost Estimates for Security","code":"COA 12.9","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMVSBVQEDHZQMC4V8JBDJ","code":"COA 12.9","name":"Estimate Security Costs for HM Land Acquisition and Management"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.9 Cost Estimates for Security"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.9</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Cost Estimates for Security"
            >Cost Estimates for Security</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.9.1 Land Acquisition Cost Estimates"
          data-item='{"memberId":"COA 12.9.1","id":"COA 12.9.1","title":"Land Acquisition Cost Estimates","code":"COA 12.9.1","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMVV7BCC2RB28PK82C9W0","code":"COA 12.9.1","name":"Estimate HM Land Acquisition Costs at Fair Market Value"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.9.1 Land Acquisition Cost Estimates"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.9.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Land Acquisition Cost Estimates"
            >Land Acquisition Cost Estimates</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.9.3 Management Funding Estimates"
          data-item='{"memberId":"COA 12.9.3","id":"COA 12.9.3","title":"Management Funding Estimates","code":"COA 12.9.3","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMVYNXV2GGGV5FN69JFWM","code":"COA 12.9.3","name":"Estimate Long-Term HM Lands Management Funding"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.9.3 Management Funding Estimates"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.9.3</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Management Funding Estimates"
            >Management Funding Estimates</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.10 Covered Species Credits"
          data-item='{"memberId":"COA 12.10","id":"COA 12.10","title":"Covered Species Credits","code":"COA 12.10","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMW3XWZY1B7J5NK83JMJC","code":"COA 12.10","name":"Obtain CDFW Approval Before Purchasing Covered Species Credits"},{"id":"req_01M2ESMW3XWZY1B7J5NK83JMJD","code":"COA 12.10","name":"Submit Bill of Sale and Payment Receipt for Purchased Credits"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.10 Covered Species Credits"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.10</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Covered Species Credits"
            >Covered Species Credits</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.11.1 HM Lands Fee Title"
          data-item='{"memberId":"COA 12.11.1","id":"COA 12.11.1","title":"HM Lands Fee Title","code":"COA 12.11.1","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMW7BVA8PQP436P7Z157Y","code":"COA 12.11.1","name":"Transfer Fee Title of HM Lands to CDFW"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.11.1 HM Lands Fee Title"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.11.1</span
          ><span class="bcn-lao__label" data-opt-label="" data-text="HM Lands Fee Title"
            >HM Lands Fee Title</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.11.2 HM Lands Conservation Easement"
          data-item='{"memberId":"COA 12.11.2","id":"COA 12.11.2","title":"HM Lands Conservation Easement","code":"COA 12.11.2","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMW932XKRWGNYKYCS522W","code":"COA 12.11.2","name":"Obtain CDFW Approval of HM Lands Conservation Easement"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.11.2 HM Lands Conservation Easement"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.11.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="HM Lands Conservation Easement"
            >HM Lands Conservation Easement</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.11.3 HM Lands Approval"
          data-item='{"memberId":"COA 12.11.3","id":"COA 12.11.3","title":"HM Lands Approval","code":"COA 12.11.3","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMWAXVMHD5Q8J7ZFF4TWX","code":"COA 12.11.3","name":"Obtain CDFW Approval of HM Lands Before Acquisition or Transfer"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.11.3 HM Lands Approval"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.11.3</span
          ><span class="bcn-lao__label" data-opt-label="" data-text="HM Lands Approval"
            >HM Lands Approval</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.11.4 HM Lands Documentation"
          data-item='{"memberId":"COA 12.11.4","id":"COA 12.11.4","title":"HM Lands Documentation","code":"COA 12.11.4","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMWCMB9JG9J2XAQP2JJNY","code":"COA 12.11.4","name":"Provide Title and Environmental Documentation for HM Lands"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.11.4 HM Lands Documentation"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.11.4</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="HM Lands Documentation"
            >HM Lands Documentation</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.11.5 HM Lands Land Manager"
          data-item='{"memberId":"COA 12.11.5","id":"COA 12.11.5","title":"HM Lands Land Manager","code":"COA 12.11.5","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMWEDFEK2SJ9M45V4297S","code":"COA 12.11.5","name":"Designate CDFW-Approved Interim and Long-Term Land Managers"},{"id":"req_01M2ESMWEE97ENMXP49X45HKWJ","code":"COA 12.11.5","name":"Notify CDFW of Land Manager Changes Within 30 Days"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.11.5 HM Lands Land Manager"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.11.5</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="HM Lands Land Manager"
            >HM Lands Land Manager</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.11.6 HM Lands Start-up Activities"
          data-item='{"memberId":"COA 12.11.6","id":"COA 12.11.6","title":"HM Lands Start-up Activities","code":"COA 12.11.6","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMWG6VA04DKPWKMX051FF","code":"COA 12.11.6","name":"Prepare Final Management Plan for HM Lands"},{"id":"req_01M2ESMWG6VA04DKPWKMX051FG","code":"COA 12.11.6","name":"Conduct Baseline Biological Assessment and Land Survey"},{"id":"req_01M2ESMWG6VA04DKPWKMX051FH","code":"COA 12.11.6","name":"Complete Initial HM Lands Site Establishment Tasks"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Pre-Construction|Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.11.6 HM Lands Start-up Activities"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.11.6</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="HM Lands Start-up Activities"
            >HM Lands Start-up Activities</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.11.7 HM Lands Interim Management"
          data-item='{"memberId":"COA 12.11.7","id":"COA 12.11.7","title":"HM Lands Interim Management","code":"COA 12.11.7","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMWHYM7C650MKCRWS45YY","code":"COA 12.11.7","name":"Implement Interim Management of HM Lands"},{"id":"req_01M2ESMWHZGBZBXMKPQ5MRZ3PA","code":"COA 12.11.7","name":"Fund Interim Management from SWP Contractor Charges"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.11.7 HM Lands Interim Management"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.11.7</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="HM Lands Interim Management"
            >HM Lands Interim Management</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.12 In-Perpetuity Management Funding"
          data-item='{"memberId":"COA 12.12","id":"COA 12.12","title":"In-Perpetuity Management Funding","code":"COA 12.12","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMWKQRXTQ20EGY49RWWPS","code":"COA 12.12","name":"Implement Perpetual Management of HM Lands"},{"id":"req_01M2ESMWKR3XYAFRTEAMNZAGG4","code":"COA 12.12","name":"Provide Annual Long-Term HM Lands Management Funding"},{"id":"req_01M2ESMWKR3XYAFRTEAMNZAGG5","code":"COA 12.12","name":"Establish Endowment When SWP Funding Ends"},{"id":"req_01M2ESMWKR3XYAFRTEAMNZAGG6","code":"COA 12.12","name":"Fund the Endowment at Minimum Ten Percent Annually"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Operations|Maintenance|Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.12 In-Perpetuity Management Funding"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.12</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="In-Perpetuity Management Funding"
            >In-Perpetuity Management Funding</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.12.1 Identify an Endowment Manager"
          data-item='{"memberId":"COA 12.12.1","id":"COA 12.12.1","title":"Identify an Endowment Manager","code":"COA 12.12.1","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMWNJCYH7CFZKH76128Q3","code":"COA 12.12.1","name":"Submit Endowment Manager Proposal to CDFW"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.12.1 Identify an Endowment Manager"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.12.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Identify an Endowment Manager"
            >Identify an Endowment Manager</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.12.2 Calculate the Endowment Funds Deposit"
          data-item='{"memberId":"COA 12.12.2","id":"COA 12.12.2","title":"Calculate the Endowment Funds Deposit","code":"COA 12.12.2","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMWQ9FFCCSJVMSG0ZMMXV","code":"COA 12.12.2","name":"Prepare Endowment Assessment (PAR-Equivalent)"},{"id":"req_01M2ESMWQAXVFYVR50AVZG23PV","code":"COA 12.12.2","name":"Submit Endowment Assessment for CDFW Approval"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.12.2 Calculate the Endowment Funds Deposit"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.12.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Calculate the Endowment Funds Deposit"
            >Calculate the Endowment Funds Deposit</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.12.2.1 Endowment Capitalization Rate and Fees"
          data-item='{"memberId":"COA 12.12.2.1","id":"COA 12.12.2.1","title":"Endowment Capitalization Rate and Fees","code":"COA 12.12.2.1","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMWS290SR3EMGS4Z6Y5CK","code":"COA 12.12.2.1","name":"Obtain and Apply Endowment Capitalization Rate"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.12.2.1 Endowment Capitalization Rate and Fees"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.12.2.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Endowment Capitalization Rate and Fees"
            >Endowment Capitalization Rate and Fees</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.12.2.2 Endowment Buffers and Assumptions"
          data-item='{"memberId":"COA 12.12.2.2","id":"COA 12.12.2.2","title":"Endowment Buffers and Assumptions","code":"COA 12.12.2.2","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMWTVQCN437BEHM5QQM8Y","code":"COA 12.12.2.2","name":"Include Viability Buffers in Endowment Assumptions"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.12.2.2 Endowment Buffers and Assumptions"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.12.2.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Endowment Buffers and Assumptions"
            >Endowment Buffers and Assumptions</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.12.2.2.1 Endowment 10 Percent Contingency"
          data-item='{"memberId":"COA 12.12.2.2.1","id":"COA 12.12.2.2.1","title":"Endowment 10 Percent Contingency","code":"COA 12.12.2.2.1","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMWWMSW4CBNECH46JBQB9","code":"COA 12.12.2.2.1","name":"Add 10 Percent Contingency to Endowment Calculation"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.12.2.2.1 Endowment 10 Percent Contingency"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.12.2.2.1</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Endowment 10 Percent Contingency"
            >Endowment 10 Percent Contingency</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.12.2.2.2 Endowment Three Years Delayed Spending"
          data-item='{"memberId":"COA 12.12.2.2.2","id":"COA 12.12.2.2.2","title":"Endowment Three Years Delayed Spending","code":"COA 12.12.2.2.2","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMWYAQWPCQ67M605H4EVQ","code":"COA 12.12.2.2.2","name":"Assume Three Years Delayed Endowment Spending"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.12.2.2.2 Endowment Three Years Delayed Spending"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.12.2.2.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Endowment Three Years Delayed Spending"
            >Endowment Three Years Delayed Spending</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.12.2.2.3 Endowment Non-annualized Expenses"
          data-item='{"memberId":"COA 12.12.2.2.3","id":"COA 12.12.2.2.3","title":"Endowment Non-annualized Expenses","code":"COA 12.12.2.2.3","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMX046KMDYSZKZTBFZQP7","code":"COA 12.12.2.2.3","name":"Withhold Non-annualized Capital Expenses from Annual Disbursement"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.12.2.2.3 Endowment Non-annualized Expenses"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.12.2.2.3</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Endowment Non-annualized Expenses"
            >Endowment Non-annualized Expenses</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.12.3 Transfer Long-term Endowment Funds"
          data-item='{"memberId":"COA 12.12.3","id":"COA 12.12.3","title":"Transfer Long-term Endowment Funds","code":"COA 12.12.3","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMX1XQXE5G4Y2BW203CPW","code":"COA 12.12.3","name":"Fund Endowment Deposit Amount Over Ten Years"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.12.3 Transfer Long-term Endowment Funds"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.12.3</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Transfer Long-term Endowment Funds"
            >Transfer Long-term Endowment Funds</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.12.4 Management of the Endowment"
          data-item='{"memberId":"COA 12.12.4","id":"COA 12.12.4","title":"Management of the Endowment","code":"COA 12.12.4","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMX3TF14WVNXSCGMG8YVV","code":"COA 12.12.4","name":"Hold and Pool Endowment with Separate Accounting"},{"id":"req_01M2ESMX3V5B3GJBP6QJF07JK7","code":"COA 12.12.4","name":"Obtain CDFW Approval Before Executing Endowment Agreements"},{"id":"req_01M2ESMX3V5B3GJBP6QJF07JK8","code":"COA 12.12.4","name":"Require CDFW Approval Before Principal Disbursement"},{"id":"req_01M2ESMX3V5B3GJBP6QJF07JK9","code":"COA 12.12.4","name":"Process CDFW-Directed Endowment Expenditures"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 12.12.4 Management of the Endowment"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.12.4</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Management of the Endowment"
            >Management of the Endowment</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 12.13 Reimburse CDFW"
          data-item='{"memberId":"COA 12.13","id":"COA 12.13","title":"Reimburse CDFW","code":"COA 12.13","groupId":"COA 12","groupName":"COA 12","reqs":[{"id":"req_01M2ESMX5J1FNXQ8JJFBF8Z7F2","code":"COA 12.13","name":"Reimburse CDFW Costs for ITP Issuance and Monitoring"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox size="sm" aria-label="COA 12.13 Reimburse CDFW"></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.13</span
          ><span class="bcn-lao__label" data-opt-label="" data-text="Reimburse CDFW"
            >Reimburse CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 13.1 Security Amount"
          data-item='{"memberId":"COA 13.1","id":"COA 13.1","title":"Security Amount","code":"COA 13.1","groupId":"COA 13","groupName":"COA 13","reqs":[{"id":"req_01M2ESMX7ADGRE9KJQC795NMQE","code":"COA 13.1","name":"Calculate Security Amount Before Each Phase Approval"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 13"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox size="sm" aria-label="COA 13.1 Security Amount"></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 13.1</span
          ><span class="bcn-lao__label" data-opt-label="" data-text="Security Amount"
            >Security Amount</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 13.2 Security Form and CESA Mitigation Funding Strategy"
          data-item='{"memberId":"COA 13.2","id":"COA 13.2","title":"Security Form and CESA Mitigation Funding Strategy","code":"COA 13.2","groupId":"COA 13","groupName":"COA 13","reqs":[{"id":"req_01M2ESMX932P8X2GF2S1KQRDA9","code":"COA 13.2","name":"Submit Initial CESA Mitigation Funding Strategy"},{"id":"req_01M2ESMX94HD08Y0H66AQJBQWE","code":"COA 13.2","name":"Submit Periodic Updates to Mitigation Funding Strategy"},{"id":"req_01M2ESMX94HD08Y0H66AQJBQWF","code":"COA 13.2","name":"Submit Fish Monitoring and Science Funding Strategy"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 13"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 13.2 Security Form and CESA Mitigation Funding Strategy"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 13.2</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Security Form and CESA Mitigation Funding Strategy"
            >Security Form and CESA Mitigation Funding Strategy</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 13.3 Demonstration of Performance"
          data-item='{"memberId":"COA 13.3","id":"COA 13.3","title":"Demonstration of Performance","code":"COA 13.3","groupId":"COA 13","groupName":"COA 13","reqs":[{"id":"req_01M2ESMXB5BDGZN1PNZT41YB2F","code":"COA 13.3","name":"Demonstrate Funding Arrangements Before Impacts to Covered Species"},{"id":"req_01M2ESMXB61WXZTSWY83SJ53JY","code":"COA 13.3","name":"Provide Ongoing Demonstration of Mitigation Performance"},{"id":"req_01M2ESMXB61WXZTSWY83SJ53JZ","code":"COA 13.3","name":"Complete HM Lands Acquisition and Easement Recording Before Covered Activities"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 13"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 13.3 Demonstration of Performance"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 13.3</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Demonstration of Performance"
            >Demonstration of Performance</span
          >
        </li>
      </ul>
    </div>
  </div>
</div>
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
.typography-microcopy-sm {
  font-family: var(--typography-microcopy-sm-font-family);
  font-size: var(--typography-microcopy-sm-font-size);
  font-weight: var(--typography-microcopy-sm-font-weight);
  line-height: var(--typography-microcopy-sm-line-height);
  letter-spacing: var(--typography-microcopy-sm-letter-spacing);
}
.typography-microcopy-sm-subtle {
  font-family: var(--typography-microcopy-sm-subtle-font-family);
  font-size: var(--typography-microcopy-sm-subtle-font-size);
  font-weight: var(--typography-microcopy-sm-subtle-font-weight);
  line-height: var(--typography-microcopy-sm-subtle-line-height);
  letter-spacing: var(--typography-microcopy-sm-subtle-letter-spacing);
}
.typography-microcopy-sm-strong {
  font-family: var(--typography-microcopy-sm-strong-font-family);
  font-size: var(--typography-microcopy-sm-strong-font-size);
  font-weight: var(--typography-microcopy-sm-strong-font-weight);
  line-height: var(--typography-microcopy-sm-strong-line-height);
  letter-spacing: var(--typography-microcopy-sm-strong-letter-spacing);
}
.bcn-loc[data-class="commitment"] .bcn-loc__req .bcn-cbadge {
  display: none;
}
.bcn-lam__opts {
  padding-inline-start: calc(var(--spacing-200) + 22px);
}
.bcn-lam__opts--flat {
  padding-inline-start: var(--spacing-200);
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
.typography-microcopy-sm {
  font-family: var(--typography-microcopy-sm-font-family);
  font-size: var(--typography-microcopy-sm-font-size);
  font-weight: var(--typography-microcopy-sm-font-weight);
  line-height: var(--typography-microcopy-sm-line-height);
  letter-spacing: var(--typography-microcopy-sm-letter-spacing);
}
.typography-microcopy-sm-subtle {
  font-family: var(--typography-microcopy-sm-subtle-font-family);
  font-size: var(--typography-microcopy-sm-subtle-font-size);
  font-weight: var(--typography-microcopy-sm-subtle-font-weight);
  line-height: var(--typography-microcopy-sm-subtle-line-height);
  letter-spacing: var(--typography-microcopy-sm-subtle-letter-spacing);
}
.typography-microcopy-sm-strong {
  font-family: var(--typography-microcopy-sm-strong-font-family);
  font-size: var(--typography-microcopy-sm-strong-font-size);
  font-weight: var(--typography-microcopy-sm-strong-font-weight);
  line-height: var(--typography-microcopy-sm-strong-line-height);
  letter-spacing: var(--typography-microcopy-sm-strong-letter-spacing);
}
.bcn-laf__clear[hidden] {
  display: none;
}
.bcn-lao {
  gap: var(--spacing-300);
  color: var(--color-content-default);
  flex-direction: column;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-lao__nomatch {
  padding: var(--spacing-300) var(--spacing-100);
  color: var(--color-content-default-tertiary);
  margin: 0;
  font-style: italic;
}
.bcn-lao__tree {
  border-top: 1px solid var(--color-border-default-subtle);
  flex-direction: column;
  display: flex;
}
.bcn-lao__cat {
  border-bottom: 1px solid var(--color-border-default);
}
.bcn-lao__cat[hidden],
.bcn-lao__sub[hidden],
.bcn-lao__opt[hidden] {
  display: none;
}
.bcn-lao__subs {
  flex-direction: column;
  display: flex;
}
.bcn-lao__sub + .bcn-lao__sub {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-lao__row {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 34px;
  padding: var(--spacing-100) var(--spacing-200);
  cursor: pointer;
  user-select: none;
  list-style: none;
  transition: background-color 0.12s;
  display: flex;
}
.bcn-lao__row::-webkit-details-marker {
  display: none;
}
.bcn-lao__row:hover {
  background: var(--color-background-default);
}
.bcn-lao__row--cat {
  font-weight: 600;
}
.bcn-lao__row--sub {
  padding-left: calc(var(--spacing-200) + 22px);
}
.bcn-lao__row:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: calc(var(--focus-ring-offset, 2px) * -1);
}
.bcn-lao__chevron {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.12s;
  display: inline-flex;
}
details[open] > .bcn-lao__row .bcn-lao__chevron {
  transform: rotate(90deg);
}
.bcn-lao__name {
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  overflow: hidden;
}
.bcn-lao__opts {
  padding: var(--spacing-150) var(--spacing-200) var(--spacing-300)
    calc(var(--spacing-200) + 44px);
  gap: var(--spacing-150);
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-lao__opts:empty {
  display: none;
}
.bcn-lao__opt {
  align-items: flex-start;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-lao__opt esa-checkbox {
  flex-shrink: 0;
  margin-top: 2px;
}
.bcn-lao__label {
  cursor: pointer;
  user-select: none;
  flex: 1;
  min-width: 0;
  line-height: 1.45;
}
.bcn-lao__foot {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-200);
  width: 100%;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-lao__selected {
  color: var(--color-content-default-secondary);
}
.bcn-lao__foot-right {
  align-items: center;
  gap: var(--spacing-200);
  display: inline-flex;
}
.esa-filter-container {
  align-items: center;
  gap: var(--_filter-container-row-gap, 0.5rem) var(--_filter-container-gap, 0.75rem);
  padding: var(--filter-container-padding, 0);
  flex-wrap: wrap;
  display: flex;
}
.esa-filter-clear-button {
  --_clear-text: var(--color-content-default-secondary, #646464);
  --_clear-text-hover: var(
    --color-content-utility-danger,
    var(--color-content-brand, #2a7e3b)
  );
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
```

## Tokens
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-700`: #525252 _(component)_
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-overlay-hover`: #00000008 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-commitment`: #58508d _(component)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--filter-container-padding`: 0 _(component)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-sm`: .25rem _(semantic)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
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
