# Add actions drawer

Checkbox drawer of every action not on the list, in Action Type folders, with search and facets Phase / Species / Type / Frequency.

## Key decisions
- Replaces prod's separate Edit Actions page.
- No Commitment facet.

## Gotchas
- The trigger attribute is shared with the obligation page (data-list-add-obligations); data-list-add-event names the event.

## Markup
```html
<div class="bcn-lao">
  <esa-text-field
    size="sm"
    name="lam-search"
    aria-label="Search actions"
    placeholder="Search by action name"
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
        name="phase"
        label="Phase"
        placeholder="Search phase"
        size="sm"
        multiple=""
        options='[{"value":"Implementation Planning","label":"Implementation Planning"},{"value":"Pre-Construction","label":"Pre-Construction"},{"value":"Construction","label":"Construction"},{"value":"Operations","label":"Operations"},{"value":"Maintenance","label":"Maintenance"},{"value":"Post-Construction","label":"Post-Construction"}]'
      ></esa-filter-dropdown
      ><esa-filter-dropdown
        name="species"
        label="Species"
        placeholder="Search species"
        size="sm"
        multiple=""
        options='[{"value":"black bass","label":"Black bass"},{"value":"california tiger salamander","label":"California tiger salamander"},{"value":"catfish","label":"Catfish"},{"value":"chinook salmon","label":"Chinook salmon"},{"value":"crotch bumble bee","label":"Crotch bumble bee"},{"value":"delta smelt","label":"Delta smelt"},{"value":"giant garter snake","label":"Giant garter snake"},{"value":"longfin smelt","label":"Longfin smelt"},{"value":"mason’s lilaeopsis","label":"Mason’s lilaeopsis"},{"value":"sacramento pikeminnow","label":"Sacramento pikeminnow"},{"value":"spring-run chinook salmon","label":"Spring-run chinook salmon"},{"value":"striped bass","label":"Striped bass"},{"value":"swainson’s hawk","label":"Swainson’s hawk"},{"value":"tricolored blackbird","label":"Tricolored blackbird"},{"value":"white sturgeon","label":"White sturgeon"},{"value":"winter-run chinook salmon","label":"Winter-run chinook salmon"}]'
      ></esa-filter-dropdown
      ><esa-filter-dropdown
        name="type"
        label="Type"
        placeholder="Search type"
        size="sm"
        multiple=""
        options='[{"value":"Analysis","label":"Analysis"},{"value":"ApprovalAndConsultation","label":"Approval &amp; Consultation"},{"value":"AvoidanceAndBMPs","label":"Avoidance &amp; BMPs"},{"value":"Design","label":"Design"},{"value":"Financial","label":"Financial"},{"value":"Monitoring","label":"Monitoring"},{"value":"Other","label":"Other"},{"value":"Plan","label":"Plan"},{"value":"Reporting","label":"Reporting"},{"value":"RestorationAndMitigation","label":"Restoration &amp; Mitigation"},{"value":"Survey","label":"Survey"},{"value":"TrainingAndEducation","label":"Training &amp; Education"}]'
      ></esa-filter-dropdown
      ><esa-filter-dropdown
        name="frequency"
        label="Frequency"
        placeholder="Search frequency"
        size="sm"
        multiple=""
        options='[{"value":"AsNeeded","label":"As needed"},{"value":"Onetime","label":"One time"},{"value":"Ongoing","label":"Ongoing"},{"value":"Recurring","label":"Recurring"}]'
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
  <p class="bcn-lao__nomatch" data-lam-nomatch="" hidden="">No actions match.</p>
  <p class="bcn-lao__nomatch" data-lam-none="" hidden="">
    Every action in the registry is already on this list.
  </p>
  <div class="bcn-lao__tree" data-lam-tree="">
    <details class="bcn-lao__cat" data-lam-group="Analysis">
      <summary class="bcn-lao__row bcn-lao__row--cat">
        <span class="bcn-lao__chevron" aria-hidden="true"
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
        ><span class="bcn-lao__name">Analysis</span
        ><span data-lao-count=""
          ><span class="bcn-swcb" aria-label="13 actions available">13</span></span
        >
      </summary>
      <ul class="bcn-lao__opts bcn-lam__opts">
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Calculate Phase Impacts and Mitigation for Authorization Package"
          data-item='{"memberId":"act_01M2G6Y32F2DZX3TCXSF7HD077","id":"act_01M2G6Y32F2DZX3TCXSF7HD077","title":"Calculate Phase Impacts and Mitigation for Authorization Package","chip":{"label":"Analysis","tone":"action"},"groupId":"Analysis","groupName":"Analysis","reqs":[{"id":"req_01M2ESMTJEPDSERNB5QPHEZ71N","code":"COA 12","name":"Calculate Phase Impacts and Mitigation for Authorization Package","index":["Mitigation and restoration::Mitigation lands","Habitat protection::Habitat impact tracking"]}],"impls":[{"id":"act_01M2G6Y32F2DZX3TCXSF7HD077|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y32F2DZX3TCXSF7HD077|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"in-progress","label":"In Progress","comments":0,"evidence":0}]}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species=""
          data-f-type="Analysis"
          data-f-frequency="Onetime"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Calculate Phase Impacts and Mitigation for Authorization Package"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Calculate Phase Impacts and Mitigation for Authorization Package"
            >Calculate Phase Impacts and Mitigation for Authorization Package</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Complete COA 10.25 Series Models and Report"
          data-item='{"memberId":"act_01M2G6Y32F2DZX3TCXSF7HD073","id":"act_01M2G6Y32F2DZX3TCXSF7HD073","title":"Complete COA 10.25 Series Models and Report","chip":{"label":"Analysis","tone":"action"},"groupId":"Analysis","groupName":"Analysis","reqs":[{"id":"req_01M2ESMH482SRYPDZ45R1CEVHY","code":"COA 10.25.1","name":"Complete Mathematical Intake Structure Hydraulic Model","index":["Water operations::Fish screens","Water operations::Hydraulic and sediment models"]},{"id":"req_01M2ESMH6093KC5P4SWVRJXXM3","code":"COA 10.25.2","name":"Complete Physical Reduced-Scale Intake Structure Model","index":["Water operations::Fish screens","Water operations::Hydraulic and sediment models"]},{"id":"req_01M2ESMH7PGYFFQ2NB0Y9XC3HP","code":"COA 10.25.3","name":"Complete Mathematical Tee Screen Hydraulic Model","index":["Water operations::Fish screens","Water operations::Hydraulic and sediment models"]},{"id":"req_01M2ESMH9F16JCFE1QH35MGSZB","code":"COA 10.25.4","name":"Develop Physical Tee Screen Lab Model","index":["Water operations::Fish screens","Water operations::Hydraulic and sediment models"]}],"impls":[{"id":"act_01M2G6Y32F2DZX3TCXSF7HD073|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning"
          data-f-species=""
          data-f-type="Analysis"
          data-f-frequency="Onetime"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Complete COA 10.25 Series Models and Report"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Complete COA 10.25 Series Models and Report"
            >Complete COA 10.25 Series Models and Report</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Complete Hydraulic and Sediment Transport Modeling Report"
          data-item='{"memberId":"act_01M2G6Y32EX2B7J0Q0QX2WW1TR","id":"act_01M2G6Y32EX2B7J0Q0QX2WW1TR","title":"Complete Hydraulic and Sediment Transport Modeling Report","chip":{"label":"Analysis","tone":"action"},"groupId":"Analysis","groupName":"Analysis","reqs":[{"id":"req_01M2ESMGYXR984FC4A4EABEBSG","code":"COA 10.24.1","name":"Complete 3D Sacramento River Hydraulic Model","index":["Water operations::Operations monitoring and studies","Water operations::Hydraulic and sediment models"]},{"id":"req_01M2ESMH0NYS2HV9RZRDQC1BKX","code":"COA 10.24.2","name":"Complete Sacramento River Sediment Transport Model","index":["Water operations::Operations monitoring and studies","Water operations::Hydraulic and sediment models"]}],"impls":[{"id":"act_01M2G6Y32EX2B7J0Q0QX2WW1TR|byron-tract-forebay","component":"Byron Tract Forebay","status":"in-progress","label":"In Progress","comments":0,"evidence":3}]}'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning"
          data-f-species=""
          data-f-type="Analysis"
          data-f-frequency="Onetime"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Complete Hydraulic and Sediment Transport Modeling Report"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Complete Hydraulic and Sediment Transport Modeling Report"
            >Complete Hydraulic and Sediment Transport Modeling Report</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Complete Joint Operations Optimization Study"
          data-item='{"memberId":"act_01M2G6Y32F2DZX3TCXSF7HD075","id":"act_01M2G6Y32F2DZX3TCXSF7HD075","title":"Complete Joint Operations Optimization Study","chip":{"label":"Analysis","tone":"action"},"groupId":"Analysis","groupName":"Analysis","reqs":[{"id":"req_01M2ESMSEZ3J30473DP1TESQHD","code":"COA 11.110","name":"Evaluate Joint North/South Delta Intake Operations","index":["Water operations::Operations monitoring and studies","Water operations::Diversion limits and bypass flows"]}],"impls":[{"id":"act_01M2G6Y32F2DZX3TCXSF7HD075|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"in-progress","label":"In Progress","comments":0,"evidence":6}]}'
          data-f-commitment="COA 11"
          data-f-phase="Operations"
          data-f-species=""
          data-f-type="Analysis"
          data-f-frequency=""
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Complete Joint Operations Optimization Study"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Complete Joint Operations Optimization Study"
            >Complete Joint Operations Optimization Study</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Complete Sacramento River Hydrograph Limb Impact Evaluation"
          data-item='{"memberId":"act_01M2G6Y32EX2B7J0Q0QX2WW1TN","id":"act_01M2G6Y32EX2B7J0Q0QX2WW1TN","title":"Complete Sacramento River Hydrograph Limb Impact Evaluation","chip":{"label":"Analysis","tone":"action"},"groupId":"Analysis","groupName":"Analysis","reqs":[{"id":"req_01M2ESMFJP84FPQ8WD96C79HB3","code":"COA 10.18.3","name":"Evaluate Hydrograph Limb Impacts on Covered Fish Species","index":["Water operations::Diversion limits and bypass flows","Water operations::Operations monitoring and studies"]},{"id":"req_01M2ESMGQVQ28RFNJX1ZA1EZMC","code":"COA 10.21.10","name":"Model Ascending Versus Descending Hydrograph Limb Impacts","index":["Water operations::Operations monitoring and studies","Water operations::Life cycle and operations models"]}],"impls":[{"id":"act_01M2G6Y32EX2B7J0Q0QX2WW1TN|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"completed","label":"Completed","comments":0,"evidence":4},{"id":"act_01M2G6Y32EX2B7J0Q0QX2WW1TN|byron-tract-forebay","component":"Byron Tract Forebay","status":"overdue","label":"Overdue","comments":1,"evidence":6}]}'
          data-f-commitment="COA 10"
          data-f-phase="Construction|Operations|Pre-Construction"
          data-f-species=""
          data-f-type="Analysis"
          data-f-frequency="Onetime"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Complete Sacramento River Hydrograph Limb Impact Evaluation"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Complete Sacramento River Hydrograph Limb Impact Evaluation"
            >Complete Sacramento River Hydrograph Limb Impact Evaluation</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Complete WS Life Cycle Model Re-Evaluation Report"
          data-item='{"memberId":"act_01M2G6Y32F2DZX3TCXSF7HD07A","id":"act_01M2G6Y32F2DZX3TCXSF7HD07A","title":"Complete WS Life Cycle Model Re-Evaluation Report","chip":{"label":"Analysis","tone":"action"},"groupId":"Analysis","groupName":"Analysis","reqs":[{"id":"req_01M2ESMVQJ3YJN9P04EC17WD3Y","code":"COA 12.8.2","name":"Re-evaluate WS Operations Impacts with Life Cycle Model","index":["Water operations::Operations monitoring and studies","Fish::White sturgeon"]}],"impls":[{"id":"act_01M2G6Y32F2DZX3TCXSF7HD07A|twin-cities-complex","component":"Twin Cities Complex","status":"in-progress","label":"In Progress","comments":0,"evidence":6}]}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Construction"
          data-f-species="white sturgeon"
          data-f-type="Analysis"
          data-f-frequency="AsNeeded"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Complete WS Life Cycle Model Re-Evaluation Report"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Complete WS Life Cycle Model Re-Evaluation Report"
            >Complete WS Life Cycle Model Re-Evaluation Report</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Develop CDFW-Approved Spring LFS Operational Scenario"
          data-item='{"memberId":"act_01M2G6Y32F2DZX3TCXSF7HD079","id":"act_01M2G6Y32F2DZX3TCXSF7HD079","title":"Develop CDFW-Approved Spring LFS Operational Scenario","chip":{"label":"Analysis","tone":"action"},"groupId":"Analysis","groupName":"Analysis","reqs":[{"id":"req_01M2ESMVEK8T2M05ZWRYV1WKK6","code":"COA 12.6.5","name":"Model Operational Scenarios for Spring LFS Distribution","index":["Water operations::Operations monitoring and studies","Water operations::Diversion limits and bypass flows","Fish::Delta smelt and longfin smelt"]}],"impls":[{"id":"act_01M2G6Y32F2DZX3TCXSF7HD079|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"completed","label":"Completed","comments":1,"evidence":6}]}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning"
          data-f-species="delta smelt|longfin smelt"
          data-f-type="Analysis"
          data-f-frequency="Onetime"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Develop CDFW-Approved Spring LFS Operational Scenario"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Develop CDFW-Approved Spring LFS Operational Scenario"
            >Develop CDFW-Approved Spring LFS Operational Scenario</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Develop Real-Time Biological Criteria Compliance Model"
          data-item='{"memberId":"act_01M2G6Y32EX2B7J0Q0QX2WW1TQ","id":"act_01M2G6Y32EX2B7J0Q0QX2WW1TQ","title":"Develop Real-Time Biological Criteria Compliance Model","chip":{"label":"Analysis","tone":"action"},"groupId":"Analysis","groupName":"Analysis","reqs":[{"id":"req_01M2ESMGP1Y7ZE95PPTF235TAA","code":"COA 10.21.9","name":"Evaluate and Refine Real-Time Operations Modeling Tools","index":["Water operations::Operations coordination and data","Water operations::Biological performance criteria","Water operations::Life cycle and operations models"]}],"impls":[{"id":"act_01M2G6Y32EX2B7J0Q0QX2WW1TQ|intake-c-north-delta","component":"Intake C — North Delta","status":"completed","label":"Completed","comments":0,"evidence":1},{"id":"act_01M2G6Y32EX2B7J0Q0QX2WW1TQ|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-type="Analysis"
          data-f-frequency="Ongoing"
          data-f-deliverable="other"
        >
          <esa-checkbox
            size="sm"
            aria-label="Develop Real-Time Biological Criteria Compliance Model"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Develop Real-Time Biological Criteria Compliance Model"
            >Develop Real-Time Biological Criteria Compliance Model</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Develop Tidal Wetland Restoration Efficacy Study Plan"
          data-item='{"memberId":"act_01M2G6Y32EX2B7J0Q0QX2WW1TP","id":"act_01M2G6Y32EX2B7J0Q0QX2WW1TP","title":"Develop Tidal Wetland Restoration Efficacy Study Plan","chip":{"label":"Analysis","tone":"action"},"groupId":"Analysis","groupName":"Analysis","reqs":[{"id":"req_01M2ESMGD8N4F2ZYV5J3EF3N0N","code":"COA 10.21.4","name":"Develop Tidal Wetland Restoration Efficacy Study and Evaluate Benefits","index":["Water operations::Operations monitoring and studies","Mitigation and restoration::Restoration"]}],"impls":[{"id":"act_01M2G6Y32EX2B7J0Q0QX2WW1TP|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y32EX2B7J0Q0QX2WW1TP|intake-c-north-delta","component":"Intake C — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":5},{"id":"act_01M2G6Y32EX2B7J0Q0QX2WW1TP|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"completed","label":"Completed","comments":0,"evidence":6}]}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Operations"
          data-f-species=""
          data-f-type="Analysis"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Develop Tidal Wetland Restoration Efficacy Study Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Develop Tidal Wetland Restoration Efficacy Study Plan"
            >Develop Tidal Wetland Restoration Efficacy Study Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Prepare Endowment Assessment for CDFW Approval"
          data-item='{"memberId":"act_01M2G6Y32F2DZX3TCXSF7HD078","id":"act_01M2G6Y32F2DZX3TCXSF7HD078","title":"Prepare Endowment Assessment for CDFW Approval","chip":{"label":"Analysis","tone":"action"},"groupId":"Analysis","groupName":"Analysis","reqs":[{"id":"req_01M2ESMWQ9FFCCSJVMSG0ZMMXV","code":"COA 12.12.2","name":"Prepare Endowment Assessment (PAR-Equivalent)","index":["Mitigation and restoration::Mitigation lands","Mitigation and restoration::Conservation endowment"]},{"id":"req_01M2ESMWS290SR3EMGS4Z6Y5CK","code":"COA 12.12.2.1","name":"Obtain and Apply Endowment Capitalization Rate","index":["Mitigation and restoration::Mitigation lands","Mitigation and restoration::Conservation endowment"]},{"id":"req_01M2ESMWTVQCN437BEHM5QQM8Y","code":"COA 12.12.2.2","name":"Include Viability Buffers in Endowment Assumptions","index":["Mitigation and restoration::Mitigation lands","Mitigation and restoration::Conservation endowment"]},{"id":"req_01M2ESMWWMSW4CBNECH46JBQB9","code":"COA 12.12.2.2.1","name":"Add 10 Percent Contingency to Endowment Calculation","index":["Mitigation and restoration::Mitigation lands","Mitigation and restoration::Conservation endowment"]},{"id":"req_01M2ESMWYAQWPCQ67M605H4EVQ","code":"COA 12.12.2.2.2","name":"Assume Three Years Delayed Endowment Spending","index":["Mitigation and restoration::Mitigation lands","Mitigation and restoration::Conservation endowment"]},{"id":"req_01M2ESMX046KMDYSZKZTBFZQP7","code":"COA 12.12.2.2.3","name":"Withhold Non-annualized Capital Expenses from Annual Disbursement","index":["Mitigation and restoration::Mitigation lands","Mitigation and restoration::Conservation endowment"]}],"impls":[{"id":"act_01M2G6Y32F2DZX3TCXSF7HD078|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y32F2DZX3TCXSF7HD078|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"in-progress","label":"In Progress","comments":1,"evidence":2}]}'
          data-f-commitment="COA 12"
          data-f-phase="Operations|Maintenance"
          data-f-species=""
          data-f-type="Analysis"
          data-f-frequency="AsNeeded"
          data-f-deliverable="payment"
        >
          <esa-checkbox
            size="sm"
            aria-label="Prepare Endowment Assessment for CDFW Approval"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Prepare Endowment Assessment for CDFW Approval"
            >Prepare Endowment Assessment for CDFW Approval</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Prepare Phase Security Cost Estimate for HM Lands"
          data-item='{"memberId":"act_01M2G6Y32F2DZX3TCXSF7HD07B","id":"act_01M2G6Y32F2DZX3TCXSF7HD07B","title":"Prepare Phase Security Cost Estimate for HM Lands","chip":{"label":"Analysis","tone":"action"},"groupId":"Analysis","groupName":"Analysis","reqs":[{"id":"req_01M2ESMVSBVQEDHZQMC4V8JBDJ","code":"COA 12.9","name":"Estimate Security Costs for HM Land Acquisition and Management","index":["Mitigation and restoration::Mitigation lands","Mitigation and restoration::Security and funding assurances"]},{"id":"req_01M2ESMVV7BCC2RB28PK82C9W0","code":"COA 12.9.1","name":"Estimate HM Land Acquisition Costs at Fair Market Value","index":["Mitigation and restoration::Mitigation lands","Mitigation and restoration::Security and funding assurances"]},{"id":"req_01M2ESMVYNXV2GGGV5FN69JFWM","code":"COA 12.9.3","name":"Estimate Long-Term HM Lands Management Funding","index":["Mitigation and restoration::Mitigation lands","Mitigation and restoration::Security and funding assurances"]}],"impls":[{"id":"act_01M2G6Y32F2DZX3TCXSF7HD07B|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"completed","label":"Completed","comments":0,"evidence":6},{"id":"act_01M2G6Y32F2DZX3TCXSF7HD07B|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"completed","label":"Completed","comments":0,"evidence":5},{"id":"act_01M2G6Y32F2DZX3TCXSF7HD07B|twin-cities-complex","component":"Twin Cities Complex","status":"in-progress","label":"In Progress","comments":0,"evidence":6}]}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species=""
          data-f-type="Analysis"
          data-f-frequency="AsNeeded"
          data-f-deliverable="payment"
        >
          <esa-checkbox
            size="sm"
            aria-label="Prepare Phase Security Cost Estimate for HM Lands"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Prepare Phase Security Cost Estimate for HM Lands"
            >Prepare Phase Security Cost Estimate for HM Lands</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Prepare Weekly Operating-Criteria Risk Assessment Report"
          data-item='{"memberId":"act_01M2G6Y32F2DZX3TCXSF7HD076","id":"act_01M2G6Y32F2DZX3TCXSF7HD076","title":"Prepare Weekly Operating-Criteria Risk Assessment Report","chip":{"label":"Analysis","tone":"action"},"groupId":"Analysis","groupName":"Analysis","reqs":[{"id":"req_01M2ESMSSPGPGXPREKCV7YCHHG","code":"COA 11.111.5","name":"Prepare Weekly Risk Assessment for Operating Criteria Changes","index":["Water operations::Operations coordination and data","Water operations::Diversion limits and bypass flows"]}],"impls":[{"id":"act_01M2G6Y32F2DZX3TCXSF7HD076|twin-cities-complex","component":"Twin Cities Complex","status":"in-progress","label":"In Progress","comments":0,"evidence":3},{"id":"act_01M2G6Y32F2DZX3TCXSF7HD076|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"on-hold","label":"On Hold","comments":0,"evidence":2},{"id":"act_01M2G6Y32F2DZX3TCXSF7HD076|byron-tract-forebay","component":"Byron Tract Forebay","status":"completed","label":"Completed","comments":2,"evidence":2}]}'
          data-f-commitment="COA 11"
          data-f-phase="Operations"
          data-f-species=""
          data-f-type="Analysis"
          data-f-frequency="AsNeeded"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Prepare Weekly Operating-Criteria Risk Assessment Report"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Prepare Weekly Operating-Criteria Risk Assessment Report"
            >Prepare Weekly Operating-Criteria Risk Assessment Report</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Fish Guidance System Recommendation Report to CDFW"
          data-item='{"memberId":"act_01M2G6Y32F2DZX3TCXSF7HD074","id":"act_01M2G6Y32F2DZX3TCXSF7HD074","title":"Submit Fish Guidance System Recommendation Report to CDFW","chip":{"label":"Analysis","tone":"action"},"groupId":"Analysis","groupName":"Analysis","reqs":[{"id":"req_01M2ESMHB8XDGERVYJ54SWK0BC","code":"COA 10.26","name":"Implement Study and Recommend Fish Guidance Approach","index":["Water operations::Fish screens","Water operations::Fish guidance systems"]}],"impls":[{"id":"act_01M2G6Y32F2DZX3TCXSF7HD074|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"overdue","label":"Overdue","comments":0,"evidence":1},{"id":"act_01M2G6Y32F2DZX3TCXSF7HD074|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"completed","label":"Completed","comments":0,"evidence":2}]}'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning"
          data-f-species=""
          data-f-type="Analysis"
          data-f-frequency="Onetime"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Fish Guidance System Recommendation Report to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Fish Guidance System Recommendation Report to CDFW"
            >Submit Fish Guidance System Recommendation Report to CDFW</span
          >
        </li>
      </ul>
    </details>
    <details class="bcn-lao__cat" data-lam-group="ApprovalAndConsultation">
      <summary class="bcn-lao__row bcn-lao__row--cat">
        <span class="bcn-lao__chevron" aria-hidden="true"
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
        ><span class="bcn-lao__name">Approval &amp; Consultation</span
        ><span data-lao-count=""
          ><span class="bcn-swcb" aria-label="49 actions available">49</span></span
        >
      </summary>
      <ul class="bcn-lao__opts bcn-lam__opts">
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Consult CDFW on Deceased CTS Specimen Disposal"
          data-item='{"memberId":"act_01M2G6Y34X89RDDJZVZVMK8Y0F","id":"act_01M2G6Y34X89RDDJZVZVMK8Y0F","title":"Consult CDFW on Deceased CTS Specimen Disposal","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMNFAW6P5NJ8QT7ASJVXX","code":"COA 11.52.3","name":"Consult CDFW on Disposal of Deceased CTS Specimen","index":["Agency reporting and approvals::Take and injury reporting","Amphibians and reptiles::Amphibians"]}],"impls":[{"id":"act_01M2G6Y34X89RDDJZVZVMK8Y0F|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species="california tiger salamander"
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Consult CDFW on Deceased CTS Specimen Disposal"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Consult CDFW on Deceased CTS Specimen Disposal"
            >Consult CDFW on Deceased CTS Specimen Disposal</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Consult CDFW on Federal Biological Opinions"
          data-item='{"memberId":"act_01M2G6Y34ZRWNWJ42W3E737QZR","id":"act_01M2G6Y34ZRWNWJ42W3E737QZR","title":"Consult CDFW on Federal Biological Opinions","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMC0B9X341GWB1FC7JSGT","code":"COA 4","name":"Consult with CDFW on Federal Biological Opinion Terms","index":["Agency reporting and approvals::Agency approvals"]}],"impls":[{"id":"act_01M2G6Y34ZRWNWJ42W3E737QZR|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"on-hold","label":"On Hold","comments":2,"evidence":3},{"id":"act_01M2G6Y34ZRWNWJ42W3E737QZR|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"completed","label":"Completed","comments":0,"evidence":2}]}'
          data-f-commitment="COA 4"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Consult CDFW on Federal Biological Opinions"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Consult CDFW on Federal Biological Opinions"
            >Consult CDFW on Federal Biological Opinions</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Consult CDFW on Non-Native or Hybrid Salamander Measures"
          data-item='{"memberId":"act_01M2G6Y34X89RDDJZVZVMK8Y0G","id":"act_01M2G6Y34X89RDDJZVZVMK8Y0G","title":"Consult CDFW on Non-Native or Hybrid Salamander Measures","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMNJVZV958WPXE76E9J5S","code":"COA 11.53","name":"Consult CDFW on Non-Native or Hybrid Salamander Measures","index":["Amphibians and reptiles::Amphibians","Water::Invasive species"]}],"impls":[{"id":"act_01M2G6Y34X89RDDJZVZVMK8Y0G|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"overdue","label":"Overdue","comments":0,"evidence":2},{"id":"act_01M2G6Y34X89RDDJZVZVMK8Y0G|byron-tract-forebay","component":"Byron Tract Forebay","status":"completed","label":"Completed","comments":0,"evidence":5}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction"
          data-f-species="california tiger salamander"
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Consult CDFW on Non-Native or Hybrid Salamander Measures"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Consult CDFW on Non-Native or Hybrid Salamander Measures"
            >Consult CDFW on Non-Native or Hybrid Salamander Measures</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Convene Fish Guidance System Working Group"
          data-item='{"memberId":"act_01M2G6Y34V8WHD9WZSVEXW30W7","id":"act_01M2G6Y34V8WHD9WZSVEXW30W7","title":"Convene Fish Guidance System Working Group","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMHB8XDGERVYJ54SWK0BD","code":"COA 10.26","name":"Convene Fish Guidance System Working Group","index":["Water operations::Fish screens","Water operations::Fish guidance systems"]}],"impls":[{"id":"act_01M2G6Y34V8WHD9WZSVEXW30W7|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"in-progress","label":"In Progress","comments":0,"evidence":1}]}'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="Onetime"
          data-f-deliverable="other"
        >
          <esa-checkbox
            size="sm"
            aria-label="Convene Fish Guidance System Working Group"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Convene Fish Guidance System Working Group"
            >Convene Fish Guidance System Working Group</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Coordinate Annual Selection of CHNWR and CHNSR Funded Projects"
          data-item='{"memberId":"act_01M2G6Y34ZRWNWJ42W3E737QZW","id":"act_01M2G6Y34ZRWNWJ42W3E737QZW","title":"Coordinate Annual Selection of CHNWR and CHNSR Funded Projects","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMVM0CGR0YASR0GJVQCH6","code":"COA 12.7.2","name":"Coordinate Annual Selection of CHNWR/CHNSR Funded Projects","index":["Mitigation and restoration::Mitigation lands","Mitigation and restoration::Mitigation funding contributions","Fish::Chinook salmon"]}],"impls":[{"id":"act_01M2G6Y34ZRWNWJ42W3E737QZW|twin-cities-complex","component":"Twin Cities Complex","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y34ZRWNWJ42W3E737QZW|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"completed","label":"Completed","comments":2,"evidence":2},{"id":"act_01M2G6Y34ZRWNWJ42W3E737QZW|byron-tract-forebay","component":"Byron Tract Forebay","status":"on-hold","label":"On Hold","comments":0,"evidence":6}]}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Construction|Operations"
          data-f-species="winter-run chinook salmon|spring-run chinook salmon"
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="Recurring"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Coordinate Annual Selection of CHNWR and CHNSR Funded Projects"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Coordinate Annual Selection of CHNWR and CHNSR Funded Projects"
            >Coordinate Annual Selection of CHNWR and CHNSR Funded Projects</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Coordinate with CDFW on Breeding Habitat Buffer Encroachment"
          data-item='{"memberId":"act_01M2G6Y34X89RDDJZVZVMK8Y0D","id":"act_01M2G6Y34X89RDDJZVZVMK8Y0D","title":"Coordinate with CDFW on Breeding Habitat Buffer Encroachment","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMM7EFFY55TCP0J01VJ86","code":"COA 11.40","name":"Coordinate with CDFW on Breeding Habitat Buffer Encroachment","index":["Amphibians and reptiles::Amphibians","Agency reporting and approvals::Agency approvals"]}],"impls":[{"id":"act_01M2G6Y34X89RDDJZVZVMK8Y0D|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"in-progress","label":"In Progress","comments":0,"evidence":0},{"id":"act_01M2G6Y34X89RDDJZVZVMK8Y0D|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction|Construction"
          data-f-species="california tiger salamander"
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Coordinate with CDFW on Breeding Habitat Buffer Encroachment"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Coordinate with CDFW on Breeding Habitat Buffer Encroachment"
            >Coordinate with CDFW on Breeding Habitat Buffer Encroachment</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Coordinate with CDFW on Mitigation Site Selection and Design"
          data-item='{"memberId":"act_01M2G6Y34YSP53SW383CFT2CZT","id":"act_01M2G6Y34YSP53SW383CFT2CZT","title":"Coordinate with CDFW on Mitigation Site Selection and Design","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMV7KRZKKJSNH8GTNVGEP","code":"COA 12.6.1","name":"Coordinate with CDFW on Mitigation Site Selection and Design","index":["Mitigation and restoration::Mitigation lands","Fish::Aquatic habitat mitigation"]},{"id":"req_01M2ESMV9D0SY0RCKVRGZZCSX9","code":"COA 12.6.2","name":"Coordinate with CDFW on Operations Mitigation Site Selection","index":["Mitigation and restoration::Mitigation lands","Fish::Aquatic habitat mitigation"]}],"impls":[{"id":"act_01M2G6Y34YSP53SW383CFT2CZT|byron-tract-forebay","component":"Byron Tract Forebay","status":"on-hold","label":"On Hold","comments":1,"evidence":3}]}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction|Construction"
          data-f-species="delta smelt|longfin smelt"
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="Ongoing"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Coordinate with CDFW on Mitigation Site Selection and Design"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Coordinate with CDFW on Mitigation Site Selection and Design"
            >Coordinate with CDFW on Mitigation Site Selection and Design</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Designate CDFW-Approved Interim and Long-Term Land Managers"
          data-item='{"memberId":"act_01M2G6Y34YSP53SW383CFT2CZP","id":"act_01M2G6Y34YSP53SW383CFT2CZP","title":"Designate CDFW-Approved Interim and Long-Term Land Managers","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMWEDFEK2SJ9M45V4297S","code":"COA 12.11.5","name":"Designate CDFW-Approved Interim and Long-Term Land Managers","index":["Mitigation and restoration::Mitigation lands","People and qualifications::Qualified specialists"]}],"impls":[{"id":"act_01M2G6Y34YSP53SW383CFT2CZP|intake-b-north-delta","component":"Intake B — North Delta","status":"completed","label":"Completed","comments":0,"evidence":3},{"id":"act_01M2G6Y34YSP53SW383CFT2CZP|intake-c-north-delta","component":"Intake C — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y34YSP53SW383CFT2CZP|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency=""
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Designate CDFW-Approved Interim and Long-Term Land Managers"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Designate CDFW-Approved Interim and Long-Term Land Managers"
            >Designate CDFW-Approved Interim and Long-Term Land Managers</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Notify and Consult CDFW on ITP Amendment Conditions"
          data-item='{"memberId":"act_01M2G6Y34V8WHD9WZSVEXW30W6","id":"act_01M2G6Y34V8WHD9WZSVEXW30W6","title":"Notify and Consult CDFW on ITP Amendment Conditions","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMFJQSEEGPYZYE6WVCX4G","code":"COA 10.18.3","name":"Consult CDFW on ITP Amendment for Alternative Operating Criteria","index":["Agency reporting and approvals::Agency approvals","Water operations::Diversion limits and bypass flows"]},{"id":"req_01M2ESMTJDPF4BKMV539XW8FET","code":"COA 12","name":"Amend ITP When Actual Impacts Vary from Anticipated","index":["Agency reporting and approvals::Agency approvals","Habitat protection::Habitat impact tracking"]},{"id":"req_01M2ESMD546NR666PVXEW5APZW","code":"COA 8","name":"Notify and Consult CDFW on Amendment-Triggering Conditions","index":["Agency reporting and approvals::Agency approvals","Agency reporting and approvals::Non-compliance reporting"]}],"impls":[{"id":"act_01M2G6Y34V8WHD9WZSVEXW30W6|byron-tract-forebay","component":"Byron Tract Forebay","status":"in-progress","label":"In Progress","comments":0,"evidence":3},{"id":"act_01M2G6Y34V8WHD9WZSVEXW30W6|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y34V8WHD9WZSVEXW30W6|intake-c-north-delta","component":"Intake C — North Delta","status":"completed","label":"Completed","comments":0,"evidence":2}]}'
          data-f-commitment="COA 10|COA 12|COA 8"
          data-f-phase="Operations|Pre-Construction|Construction|Implementation Planning"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Notify and Consult CDFW on ITP Amendment Conditions"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notify and Consult CDFW on ITP Amendment Conditions"
            >Notify and Consult CDFW on ITP Amendment Conditions</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Obtain CDFW Approval for In-Channel Work in the GGS Active Season"
          data-item='{"memberId":"act_01M2G6Y34X89RDDJZVZVMK8Y0M","id":"act_01M2G6Y34X89RDDJZVZVMK8Y0M","title":"Obtain CDFW Approval for In-Channel Work in the GGS Active Season","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMP2VS2KH28B9FRJ498K8","code":"COA 11.60","name":"Obtain CDFW Approval and Survey for In-Channel Work in Active Season","index":["Water::In-water work","Amphibians and reptiles::Giant garter snake","Agency reporting and approvals::Agency approvals"]}],"impls":[{"id":"act_01M2G6Y34X89RDDJZVZVMK8Y0M|byron-tract-forebay","component":"Byron Tract Forebay","status":"completed","label":"Completed","comments":1,"evidence":3}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="giant garter snake"
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Obtain CDFW Approval for In-Channel Work in the GGS Active Season"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Obtain CDFW Approval for In-Channel Work in the GGS Active Season"
            >Obtain CDFW Approval for In-Channel Work in the GGS Active Season</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Obtain CDFW Approval for Pesticide and Herbicide Use"
          data-item='{"memberId":"act_01M2G6Y34X89RDDJZVZVMK8Y0C","id":"act_01M2G6Y34X89RDDJZVZVMK8Y0C","title":"Obtain CDFW Approval for Pesticide and Herbicide Use","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMHYSHPSSPHZ1CGQNSKGT","code":"COA 11.4","name":"Obtain CDFW Approval Before Any Pesticide or Herbicide Use","index":["Hazards::Pesticides and rodenticides"]}],"impls":[{"id":"act_01M2G6Y34X89RDDJZVZVMK8Y0C|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Obtain CDFW Approval for Pesticide and Herbicide Use"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Obtain CDFW Approval for Pesticide and Herbicide Use"
            >Obtain CDFW Approval for Pesticide and Herbicide Use</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Obtain CDFW Approval of a Reduced SWHA Nest Buffer"
          data-item='{"memberId":"act_01M2G6Y34YSP53SW383CFT2CZF","id":"act_01M2G6Y34YSP53SW383CFT2CZF","title":"Obtain CDFW Approval of a Reduced SWHA Nest Buffer","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMQ52X2ZM48TYEMYHBH8G","code":"COA 11.72","name":"Obtain CDFW Approval to Reduce SWHA Nest Buffer Below 656 Feet","index":["Birds::Nesting birds"]}],"impls":[{"id":"act_01M2G6Y34YSP53SW383CFT2CZF|twin-cities-complex","component":"Twin Cities Complex","status":"on-hold","label":"On Hold","comments":3,"evidence":0},{"id":"act_01M2G6Y34YSP53SW383CFT2CZF|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"completed","label":"Completed","comments":2,"evidence":6}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="swainson’s hawk"
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Obtain CDFW Approval of a Reduced SWHA Nest Buffer"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Obtain CDFW Approval of a Reduced SWHA Nest Buffer"
            >Obtain CDFW Approval of a Reduced SWHA Nest Buffer</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Obtain CDFW Approval of a Substitute Biologist or Monitor"
          data-item='{"memberId":"act_01M2G6Y34ZRWNWJ42W3E737QZX","id":"act_01M2G6Y34ZRWNWJ42W3E737QZX","title":"Obtain CDFW Approval of a Substitute Biologist or Monitor","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMD8P1D9GP5SHAZ2ZEEXM","code":"COA 9.2","name":"Obtain CDFW Approval Before Replacing a Biologist or Monitor","index":["People and qualifications::Designated biologists and monitors"]}],"impls":[{"id":"act_01M2G6Y34ZRWNWJ42W3E737QZX|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"completed","label":"Completed","comments":0,"evidence":1},{"id":"act_01M2G6Y34ZRWNWJ42W3E737QZX|byron-tract-forebay","component":"Byron Tract Forebay","status":"in-progress","label":"In Progress","comments":0,"evidence":5}]}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Obtain CDFW Approval of a Substitute Biologist or Monitor"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Obtain CDFW Approval of a Substitute Biologist or Monitor"
            >Obtain CDFW Approval of a Substitute Biologist or Monitor</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Obtain CDFW Approval of Biological Criteria Compliance Models"
          data-item='{"memberId":"act_01M2G6Y34WE7XE98281ZXQVPK6","id":"act_01M2G6Y34WE7XE98281ZXQVPK6","title":"Obtain CDFW Approval of Biological Criteria Compliance Models","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMT2GD69RBQ63A8A8HYSN","code":"COA 11.115","name":"Obtain CDFW Approval for Biological Criteria Compliance Models","index":["Water operations::Biological performance criteria"]},{"id":"req_01M2ESMT7TABTK6P93QMMQBAQF","code":"COA 11.116","name":"Obtain CDFW Approval for Salmonid Biological Criteria Models","index":["Water operations::Biological performance criteria"]},{"id":"req_01M2ESMTD3MKXCW8AW2F365EEC","code":"COA 11.117","name":"Obtain CDFW Approval for White Sturgeon Biological Criteria Models","index":["Water operations::Biological performance criteria"]}],"impls":[{"id":"act_01M2G6Y34WE7XE98281ZXQVPK6|byron-tract-forebay","component":"Byron Tract Forebay","status":"on-hold","label":"On Hold","comments":0,"evidence":0},{"id":"act_01M2G6Y34WE7XE98281ZXQVPK6|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Operations"
          data-f-species="delta smelt|longfin smelt|winter-run chinook salmon|spring-run chinook salmon|white sturgeon"
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="Ongoing"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Obtain CDFW Approval of Biological Criteria Compliance Models"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Obtain CDFW Approval of Biological Criteria Compliance Models"
            >Obtain CDFW Approval of Biological Criteria Compliance Models</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Obtain CDFW Approval of Dewatering Measure Deviations"
          data-item='{"memberId":"act_01M2G6Y34X89RDDJZVZVMK8Y0N","id":"act_01M2G6Y34X89RDDJZVZVMK8Y0N","title":"Obtain CDFW Approval of Dewatering Measure Deviations","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMP4K7W5XYW0R2Z17AQ18","code":"COA 11.61","name":"Obtain CDFW Approval for Deviations from the Dewatering Measure","index":["Water::Dewatering","Agency reporting and approvals::Agency approvals","Amphibians and reptiles::Giant garter snake"]}],"impls":[{"id":"act_01M2G6Y34X89RDDJZVZVMK8Y0N|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"overdue","label":"Overdue","comments":0,"evidence":0},{"id":"act_01M2G6Y34X89RDDJZVZVMK8Y0N|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction"
          data-f-species="giant garter snake"
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Obtain CDFW Approval of Dewatering Measure Deviations"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Obtain CDFW Approval of Dewatering Measure Deviations"
            >Obtain CDFW Approval of Dewatering Measure Deviations</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Obtain CDFW Approval of Erosion Control Stabilization Measures"
          data-item='{"memberId":"act_01M2G6Y34WE7XE98281ZXQVPKD","id":"act_01M2G6Y34WE7XE98281ZXQVPKD","title":"Obtain CDFW Approval of Erosion Control Stabilization Measures","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMKCZB1AQW6B43EGM7WRB","code":"COA 11.27","name":"Obtain CDFW Approval for Erosion Control Stabilization Measures","index":["Water::Erosion and sediment control"]}],"impls":[{"id":"act_01M2G6Y34WE7XE98281ZXQVPKD|intake-b-north-delta","component":"Intake B — North Delta","status":"completed","label":"Completed","comments":0,"evidence":4},{"id":"act_01M2G6Y34WE7XE98281ZXQVPKD|intake-c-north-delta","component":"Intake C — North Delta","status":"overdue","label":"Overdue","comments":0,"evidence":0},{"id":"act_01M2G6Y34WE7XE98281ZXQVPKD|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"on-hold","label":"On Hold","comments":0,"evidence":2}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Construction"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="Onetime"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Obtain CDFW Approval of Erosion Control Stabilization Measures"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Obtain CDFW Approval of Erosion Control Stabilization Measures"
            >Obtain CDFW Approval of Erosion Control Stabilization Measures</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Obtain CDFW Approval of HM Lands Before Acquisition"
          data-item='{"memberId":"act_01M2G6Y34YSP53SW383CFT2CZN","id":"act_01M2G6Y34YSP53SW383CFT2CZN","title":"Obtain CDFW Approval of HM Lands Before Acquisition","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMWAXVMHD5Q8J7ZFF4TWX","code":"COA 12.11.3","name":"Obtain CDFW Approval of HM Lands Before Acquisition or Transfer","index":["Mitigation and restoration::Mitigation lands","Agency reporting and approvals::Agency approvals"]}],"impls":[{"id":"act_01M2G6Y34YSP53SW383CFT2CZN|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="Onetime"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Obtain CDFW Approval of HM Lands Before Acquisition"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Obtain CDFW Approval of HM Lands Before Acquisition"
            >Obtain CDFW Approval of HM Lands Before Acquisition</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Obtain CDFW Approval of Mitigation Habitat Restoration Projects"
          data-item='{"memberId":"act_01M2G6Y34YSP53SW383CFT2CZH","id":"act_01M2G6Y34YSP53SW383CFT2CZH","title":"Obtain CDFW Approval of Mitigation Habitat Restoration Projects","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMTJEPDSERNB5QPHEZ71M","code":"COA 12","name":"Obtain CDFW Written Approval for Mitigation Projects","index":["Mitigation and restoration::Mitigation lands","Agency reporting and approvals::Agency approvals"]},{"id":"req_01M2ESMV7KRZKKJSNH8GTNVGEM","code":"COA 12.6.1","name":"Obtain CDFW Approval of Habitat Restoration Projects","index":["Mitigation and restoration::Mitigation lands","Fish::Aquatic habitat mitigation","Fish::Delta smelt and longfin smelt"]},{"id":"req_01M2ESMV9D0SY0RCKVRGZZCSX8","code":"COA 12.6.2","name":"Obtain CDFW Approval of DS Tidal Wetland Restoration","index":["Mitigation and restoration::Mitigation lands","Fish::Aquatic habitat mitigation","Fish::Delta smelt and longfin smelt"]},{"id":"req_01M2ESMVCXPEMFPGKCYVR3FT9D","code":"COA 12.6.4","name":"Coordinate Agency Approval of LFS Mitigation Site and Design","index":["Mitigation and restoration::Mitigation lands","Fish::Aquatic habitat mitigation"]},{"id":"req_01M2ESMVJ6V6KZ8E8WVQ2QHJ6A","code":"COA 12.7.1","name":"Coordinate CDFW Approval of CHNWR/CHNSR Mitigation Design","index":["Mitigation and restoration::Mitigation lands","Fish::Aquatic habitat mitigation","Fish::Chinook salmon"]},{"id":"req_01M2ESMVKZY4783EXRCR1239EW","code":"COA 12.7.2","name":"Coordinate CDFW Approval of CHNWR/CHNSR Operations Mitigation Design","index":["Mitigation and restoration::Mitigation lands","Fish::Aquatic habitat mitigation","Fish::Chinook salmon"]},{"id":"req_01M2ESMVNRG291J0GR7K2B5CV4","code":"COA 12.8.1","name":"Coordinate CDFW Approval of White Sturgeon Mitigation Design","index":["Mitigation and restoration::Mitigation lands","Fish::Aquatic habitat mitigation","Fish::White sturgeon"]},{"id":"req_01M2ESMVQJ3YJN9P04EC17WD3V","code":"COA 12.8.2","name":"Coordinate CDFW Approval of WS Operations Mitigation Design","index":["Mitigation and restoration::Mitigation lands","Fish::Aquatic habitat mitigation","Fish::White sturgeon"]}],"impls":[{"id":"act_01M2G6Y34YSP53SW383CFT2CZH|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y34YSP53SW383CFT2CZH|twin-cities-complex","component":"Twin Cities Complex","status":"completed","label":"Completed","comments":0,"evidence":4},{"id":"act_01M2G6Y34YSP53SW383CFT2CZH|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":1,"evidence":0}]}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
          data-f-species="delta smelt|longfin smelt|winter-run chinook salmon|spring-run chinook salmon|white sturgeon"
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="Ongoing"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Obtain CDFW Approval of Mitigation Habitat Restoration Projects"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Obtain CDFW Approval of Mitigation Habitat Restoration Projects"
            >Obtain CDFW Approval of Mitigation Habitat Restoration Projects</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Obtain CDFW Approval of Mowing or Clearing Equipment"
          data-item='{"memberId":"act_01M2G6Y34WE7XE98281ZXQVPK8","id":"act_01M2G6Y34WE7XE98281ZXQVPK8","title":"Obtain CDFW Approval of Mowing or Clearing Equipment","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMJS999Z18GR8YFDYGW1G","code":"COA 11.18","name":"Obtain CDFW Approval for Non-String-Trimmer Mowing Equipment","index":["Habitat protection::Vegetation removal","Habitat protection::Habitat avoidance and work footprint"]},{"id":"req_01M2ESMMEG0R2D5MWTTDJMHNAC","code":"COA 11.42.2","name":"Obtain CDFW Approval for Non-String-Trimmer Mowing Equipment","index":["Habitat protection::Vegetation removal","Amphibians and reptiles::Amphibians"]},{"id":"req_01M2ESMNVPGQNZ1HSC42V2SN9Q","code":"COA 11.57","name":"Obtain CDFW Approval for Non-String-Trimmer Mowing Equipment","index":["Habitat protection::Vegetation removal","Amphibians and reptiles::Giant garter snake"]},{"id":"req_01M2ESMP2VS2KH28B9FRJ498KA","code":"COA 11.60","name":"Obtain CDFW Approval for Non-String-Trimmer Canal Mowing Equipment","index":["Habitat protection::Vegetation removal","Water::In-water work","Amphibians and reptiles::Giant garter snake"]},{"id":"req_01M2ESMPFQNWZW6VVJM7QKG2P8","code":"COA 11.65","name":"Obtain CDFW Approval to Use Other Mowing Equipment","index":["Amphibians and reptiles::Giant garter snake","Habitat protection::Vegetation removal"]},{"id":"req_01M2ESMEB3JEW0AY0NARFBHQMR","code":"COA 9.18","name":"Obtain CDFW Approval for Mowing, Disking or Tilling as Fire Prevention","index":["Habitat protection::Vegetation removal","Hazards::Fire prevention","Agency reporting and approvals::Agency approvals"]}],"impls":[{"id":"act_01M2G6Y34WE7XE98281ZXQVPK8|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":1,"evidence":0},{"id":"act_01M2G6Y34WE7XE98281ZXQVPK8|byron-tract-forebay","component":"Byron Tract Forebay","status":"in-progress","label":"In Progress","comments":0,"evidence":0},{"id":"act_01M2G6Y34WE7XE98281ZXQVPK8|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11|COA 9"
          data-f-phase="Construction|Maintenance|Pre-Construction"
          data-f-species="california tiger salamander|giant garter snake"
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Obtain CDFW Approval of Mowing or Clearing Equipment"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Obtain CDFW Approval of Mowing or Clearing Equipment"
            >Obtain CDFW Approval of Mowing or Clearing Equipment</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Obtain CDFW Approval of Nighttime Covered Activities"
          data-item='{"memberId":"act_01M2G6Y34YSP53SW383CFT2CZD","id":"act_01M2G6Y34YSP53SW383CFT2CZD","title":"Obtain CDFW Approval of Nighttime Covered Activities","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMJ42JSX41WJGE87W85HV","code":"COA 11.7","name":"Detail and Justify Nighttime Work in Authorization Package","index":["Site conduct::Work hours","Agency reporting and approvals::Agency approvals"]}],"impls":[{"id":"act_01M2G6Y34YSP53SW383CFT2CZD|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"on-hold","label":"On Hold","comments":3,"evidence":6},{"id":"act_01M2G6Y34YSP53SW383CFT2CZD|twin-cities-complex","component":"Twin Cities Complex","status":"in-progress","label":"In Progress","comments":2,"evidence":1},{"id":"act_01M2G6Y34YSP53SW383CFT2CZD|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":3,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Construction"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Obtain CDFW Approval of Nighttime Covered Activities"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Obtain CDFW Approval of Nighttime Covered Activities"
            >Obtain CDFW Approval of Nighttime Covered Activities</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Obtain CDFW Approval of the Endowment Management Agreement"
          data-item='{"memberId":"act_01M2G6Y34YSP53SW383CFT2CZS","id":"act_01M2G6Y34YSP53SW383CFT2CZS","title":"Obtain CDFW Approval of the Endowment Management Agreement","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMX3V5B3GJBP6QJF07JK7","code":"COA 12.12.4","name":"Obtain CDFW Approval Before Executing Endowment Agreements","index":["Mitigation and restoration::Mitigation lands","Mitigation and restoration::Conservation endowment"]}],"impls":[{"id":"act_01M2G6Y34YSP53SW383CFT2CZS|intake-b-north-delta","component":"Intake B — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":3},{"id":"act_01M2G6Y34YSP53SW383CFT2CZS|intake-c-north-delta","component":"Intake C — North Delta","status":"on-hold","label":"On Hold","comments":1,"evidence":2},{"id":"act_01M2G6Y34YSP53SW383CFT2CZS|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 12"
          data-f-phase="Operations|Maintenance"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Obtain CDFW Approval of the Endowment Management Agreement"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Obtain CDFW Approval of the Endowment Management Agreement"
            >Obtain CDFW Approval of the Endowment Management Agreement</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Obtain CDFW Approval of the HM Lands Conservation Easement"
          data-item='{"memberId":"act_01M2G6Y34YSP53SW383CFT2CZM","id":"act_01M2G6Y34YSP53SW383CFT2CZM","title":"Obtain CDFW Approval of the HM Lands Conservation Easement","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMW932XKRWGNYKYCS522W","code":"COA 12.11.2","name":"Obtain CDFW Approval of HM Lands Conservation Easement","index":["Mitigation and restoration::Mitigation lands"]}],"impls":[{"id":"act_01M2G6Y34YSP53SW383CFT2CZM|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":3,"evidence":0},{"id":"act_01M2G6Y34YSP53SW383CFT2CZM|twin-cities-complex","component":"Twin Cities Complex","status":"in-progress","label":"In Progress","comments":0,"evidence":0},{"id":"act_01M2G6Y34YSP53SW383CFT2CZM|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"on-hold","label":"On Hold","comments":0,"evidence":3}]}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="Onetime"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Obtain CDFW Approval of the HM Lands Conservation Easement"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Obtain CDFW Approval of the HM Lands Conservation Easement"
            >Obtain CDFW Approval of the HM Lands Conservation Easement</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Obtain CDFW Approval of the Mitigation or Conservation Bank"
          data-item='{"memberId":"act_01M2G6Y34YSP53SW383CFT2CZK","id":"act_01M2G6Y34YSP53SW383CFT2CZK","title":"Obtain CDFW Approval of the Mitigation or Conservation Bank","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMW3XWZY1B7J5NK83JMJC","code":"COA 12.10","name":"Obtain CDFW Approval Before Purchasing Covered Species Credits","index":["Mitigation and restoration::Mitigation lands","Agency reporting and approvals::Agency approvals"]}],"impls":[{"id":"act_01M2G6Y34YSP53SW383CFT2CZK|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"overdue","label":"Overdue","comments":0,"evidence":0},{"id":"act_01M2G6Y34YSP53SW383CFT2CZK|twin-cities-complex","component":"Twin Cities Complex","status":"on-hold","label":"On Hold","comments":0,"evidence":6},{"id":"act_01M2G6Y34YSP53SW383CFT2CZK|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"completed","label":"Completed","comments":0,"evidence":6}]}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Obtain CDFW Approval of the Mitigation or Conservation Bank"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Obtain CDFW Approval of the Mitigation or Conservation Bank"
            >Obtain CDFW Approval of the Mitigation or Conservation Bank</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Obtain CDFW Approval to Construct Off-Site Travel Routes"
          data-item='{"memberId":"act_01M2G6Y34X89RDDJZVZVMK8Y0P","id":"act_01M2G6Y34X89RDDJZVZVMK8Y0P","title":"Obtain CDFW Approval to Construct Off-Site Travel Routes","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMPZQ9NN9E3861M5F8KYT","code":"COA 11.69","name":"Obtain CDFW Approval Before Constructing New Off-Site Travel Routes","index":["Site conduct::Access routes and parking","Birds::Nesting birds"]},{"id":"req_01M2ESMDV2Z1D8E43SV3PA7GHA","code":"COA 9.10","name":"Obtain CDFW Approval Before Constructing New Travel Routes","index":["Site conduct::Access routes and parking","Agency reporting and approvals::Agency approvals"]}],"impls":[{"id":"act_01M2G6Y34X89RDDJZVZVMK8Y0P|twin-cities-complex","component":"Twin Cities Complex","status":"in-progress","label":"In Progress","comments":0,"evidence":0},{"id":"act_01M2G6Y34X89RDDJZVZVMK8Y0P|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y34X89RDDJZVZVMK8Y0P|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11|COA 9"
          data-f-phase="Pre-Construction|Construction"
          data-f-species="swainson’s hawk"
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Obtain CDFW Approval to Construct Off-Site Travel Routes"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Obtain CDFW Approval to Construct Off-Site Travel Routes"
            >Obtain CDFW Approval to Construct Off-Site Travel Routes</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Obtain CDFW Approval to Extend Phase 1 Operations"
          data-item='{"memberId":"act_01M2G6Y34WE7XE98281ZXQVPK5","id":"act_01M2G6Y34WE7XE98281ZXQVPK5","title":"Obtain CDFW Approval to Extend Phase 1 Operations","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMSEZ3J30473DP1TESQH9","code":"COA 11.110","name":"Obtain CDFW Approval to Extend Phase 1 Operations","index":["Water operations::Diversion limits and bypass flows","Agency reporting and approvals::Agency approvals"]}],"impls":[{"id":"act_01M2G6Y34WE7XE98281ZXQVPK5|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Operations"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Obtain CDFW Approval to Extend Phase 1 Operations"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Obtain CDFW Approval to Extend Phase 1 Operations"
            >Obtain CDFW Approval to Extend Phase 1 Operations</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Obtain CDFW Approval to Remove or Trim a Known Nest Tree"
          data-item='{"memberId":"act_01M2G6Y34YSP53SW383CFT2CZG","id":"act_01M2G6Y34YSP53SW383CFT2CZG","title":"Obtain CDFW Approval to Remove or Trim a Known Nest Tree","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMQC449CBWAQ4AXX5Q7TB","code":"COA 11.76","name":"Obtain CDFW Approval Before Removing a Known SWHA Nest Tree","index":["Birds::Nesting birds","Habitat protection::Vegetation removal"]},{"id":"req_01M2ESMQHDSWYB94XYC24TQNXK","code":"COA 11.79","name":"Remove or Trim an Occupied Nest Tree for Safety Per 11.77 or CDFW Approval","index":["Birds::Nesting birds","Habitat protection::Vegetation removal"]}],"impls":[{"id":"act_01M2G6Y34YSP53SW383CFT2CZG|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"overdue","label":"Overdue","comments":0,"evidence":0},{"id":"act_01M2G6Y34YSP53SW383CFT2CZG|twin-cities-complex","component":"Twin Cities Complex","status":"in-progress","label":"In Progress","comments":0,"evidence":0},{"id":"act_01M2G6Y34YSP53SW383CFT2CZG|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"in-progress","label":"In Progress","comments":0,"evidence":5}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="swainson’s hawk"
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Obtain CDFW Approval to Remove or Trim a Known Nest Tree"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Obtain CDFW Approval to Remove or Trim a Known Nest Tree"
            >Obtain CDFW Approval to Remove or Trim a Known Nest Tree</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Obtain CDFW Approval to Work During the SWHA Nesting Season"
          data-item='{"memberId":"act_01M2G6Y34YSP53SW383CFT2CZE","id":"act_01M2G6Y34YSP53SW383CFT2CZE","title":"Obtain CDFW Approval to Work During the SWHA Nesting Season","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMQ1JCSNP3WDJZSP8BFSQ","code":"COA 11.70","name":"Submit CDFW Approval Plan to Work During SWHA Nesting Season","index":["Birds::Nesting birds"]}],"impls":[{"id":"act_01M2G6Y34YSP53SW383CFT2CZE|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"in-progress","label":"In Progress","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="swainson’s hawk"
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Obtain CDFW Approval to Work During the SWHA Nesting Season"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Obtain CDFW Approval to Work During the SWHA Nesting Season"
            >Obtain CDFW Approval to Work During the SWHA Nesting Season</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Obtain CDFW Approval to Work Outside the Seasonal Window"
          data-item='{"memberId":"act_01M2G6Y34X89RDDJZVZVMK8Y0J","id":"act_01M2G6Y34X89RDDJZVZVMK8Y0J","title":"Obtain CDFW Approval to Work Outside the Seasonal Window","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMP13NA9T96QAKVJHBMPP","code":"COA 11.59","name":"Obtain CDFW Approval for Early-Season Work Before May 1","index":["Amphibians and reptiles::Giant garter snake","Agency reporting and approvals::Agency approvals"]},{"id":"req_01M2ESMP1408Q3PX5ZFQRD41HX","code":"COA 11.59","name":"Obtain CDFW Approval to Work Outside the Window via Early Ground Disturbance","index":["Amphibians and reptiles::Giant garter snake","Agency reporting and approvals::Agency approvals","Habitat protection::Exclusion fencing and ESAs"]}],"impls":[{"id":"act_01M2G6Y34X89RDDJZVZVMK8Y0J|byron-tract-forebay","component":"Byron Tract Forebay","status":"completed","label":"Completed","comments":0,"evidence":4}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="giant garter snake"
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Obtain CDFW Approval to Work Outside the Seasonal Window"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Obtain CDFW Approval to Work Outside the Seasonal Window"
            >Obtain CDFW Approval to Work Outside the Seasonal Window</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Obtain CDFW Permission for Hazardous Material Use Near Streams"
          data-item='{"memberId":"act_01M2G6Y34WE7XE98281ZXQVPK9","id":"act_01M2G6Y34WE7XE98281ZXQVPK9","title":"Obtain CDFW Permission for Hazardous Material Use Near Streams","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMK27YFM5RYJ58JMWJ8RA","code":"COA 11.21","name":"Obtain CDFW Permission for Hazardous Material Use Near Streams","index":["Hazards::Hazardous materials","Water::Water quality"]}],"impls":[{"id":"act_01M2G6Y34WE7XE98281ZXQVPK9|twin-cities-complex","component":"Twin Cities Complex","status":"on-hold","label":"On Hold","comments":0,"evidence":3}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Obtain CDFW Permission for Hazardous Material Use Near Streams"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Obtain CDFW Permission for Hazardous Material Use Near Streams"
            >Obtain CDFW Permission for Hazardous Material Use Near Streams</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Obtain CESA Authorization for HM Lands Activities"
          data-item='{"memberId":"act_01M2G6Y34YSP53SW383CFT2CZJ","id":"act_01M2G6Y34YSP53SW383CFT2CZJ","title":"Obtain CESA Authorization for HM Lands Activities","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMTJDPF4BKMV539XW8FER","code":"COA 12","name":"Obtain CESA Authorization for HM Lands Activities","index":["Mitigation and restoration::Mitigation lands","Agency reporting and approvals::Agency approvals"]}],"impls":[{"id":"act_01M2G6Y34YSP53SW383CFT2CZJ|twin-cities-complex","component":"Twin Cities Complex","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y34YSP53SW383CFT2CZJ|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":1,"evidence":0}]}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Construction|Operations"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Obtain CESA Authorization for HM Lands Activities"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Obtain CESA Authorization for HM Lands Activities"
            >Obtain CESA Authorization for HM Lands Activities</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Annual Biologist Reapproval List to CDFW"
          data-item='{"memberId":"act_01M2G6Y34ZRWNWJ42W3E737QZY","id":"act_01M2G6Y34ZRWNWJ42W3E737QZY","title":"Submit Annual Biologist Reapproval List to CDFW","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMD8P1D9GP5SHAZ2ZEEXK","code":"COA 9.2","name":"Submit Annual Biologist Reapproval List by January 31","index":["People and qualifications::Designated biologists and monitors"]}],"impls":[{"id":"act_01M2G6Y34ZRWNWJ42W3E737QZY|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="Recurring"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Annual Biologist Reapproval List to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Annual Biologist Reapproval List to CDFW"
            >Submit Annual Biologist Reapproval List to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Biologist Resume Forms to CDFW Before Each Phase"
          data-item='{"memberId":"act_01M2G6Y34ZRWNWJ42W3E737QZZ","id":"act_01M2G6Y34ZRWNWJ42W3E737QZZ","title":"Submit Biologist Resume Forms to CDFW Before Each Phase","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMD8N87X4KKRYNGESBETT","code":"COA 9.2","name":"Submit Biologist Resume Forms 30 Days Before Each Phase","index":["People and qualifications::Designated biologists and monitors"]}],"impls":[{"id":"act_01M2G6Y34ZRWNWJ42W3E737QZZ|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"in-progress","label":"In Progress","comments":0,"evidence":5}]}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="Onetime"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Biologist Resume Forms to CDFW Before Each Phase"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Biologist Resume Forms to CDFW Before Each Phase"
            >Submit Biologist Resume Forms to CDFW Before Each Phase</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Buffer Zone Designs and Locations for CDFW Approval"
          data-item='{"memberId":"act_01M2G6Y34WE7XE98281ZXQVPK4","id":"act_01M2G6Y34WE7XE98281ZXQVPK4","title":"Submit Buffer Zone Designs and Locations for CDFW Approval","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMS64HSCCA956ZZYZCFCT","code":"COA 11.106","name":"Submit MALI Buffer Zone Design Plan for CDFW Approval","index":["Plants and invertebrates::Special-status plants","Habitat protection::Exclusion fencing and ESAs"]},{"id":"req_01M2ESMQ52X2ZM48TYEMYHBH8F","code":"COA 11.72","name":"Submit SWHA Nest Buffer Design and Location to CDFW","index":["Birds::Nesting birds"]},{"id":"req_01M2ESMQZJE9FTSQBMYW339TTA","code":"COA 11.85","name":"Submit TRBL Buffer Zone Design and Location to CDFW for Approval","index":["Birds::Nesting birds","Birds::Tricolored blackbird"]},{"id":"req_01M2ESMR3TEAHJ2FGX74G0945N","code":"COA 11.87","name":"Submit TRBL Roost Buffer Zone Design and Location to CDFW for Approval","index":["Birds::Nesting birds","Birds::Tricolored blackbird"]}],"impls":[{"id":"act_01M2G6Y34WE7XE98281ZXQVPK4|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"completed","label":"Completed","comments":0,"evidence":3},{"id":"act_01M2G6Y34WE7XE98281ZXQVPK4|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":1,"evidence":0},{"id":"act_01M2G6Y34WE7XE98281ZXQVPK4|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species="mason’s lilaeopsis|swainson’s hawk|tricolored blackbird"
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="Onetime"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Buffer Zone Designs and Locations for CDFW Approval"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Buffer Zone Designs and Locations for CDFW Approval"
            >Submit Buffer Zone Designs and Locations for CDFW Approval</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Construction Phase Authorization Package to CDFW"
          data-item='{"memberId":"act_01M2G6Y34ZRWNWJ42W3E737QZS","id":"act_01M2G6Y34ZRWNWJ42W3E737QZS","title":"Submit Construction Phase Authorization Package to CDFW","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMC3SG5TTMS74P5R5PTEA","code":"COA 6","name":"Obtain Construction Phase Authorization Before Each Phase","index":["Agency reporting and approvals::Agency approvals"]},{"id":"req_01M2ESMC939ZX97P9AXG9S3A6G","code":"COA 6.2","name":"Submit Construction Phase Authorization Package 90 Days Prior","index":["Agency reporting and approvals::Agency approvals","Agency reporting and approvals::Schedule notices"]}],"impls":[{"id":"act_01M2G6Y34ZRWNWJ42W3E737QZS|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"completed","label":"Completed","comments":0,"evidence":5}]}'
          data-f-commitment="COA 6"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="Onetime"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Construction Phase Authorization Package to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Construction Phase Authorization Package to CDFW"
            >Submit Construction Phase Authorization Package to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Culvert Under-Crossing Count and Location Report"
          data-item='{"memberId":"act_01M2G6Y34WE7XE98281ZXQVPK7","id":"act_01M2G6Y34WE7XE98281ZXQVPK7","title":"Submit Culvert Under-Crossing Count and Location Report","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMJCW3S0Y78C3N63HEMHB","code":"COA 11.12","name":"Submit Wildlife Culvert Under-crossing Plan for CDFW Approval","index":["Site conduct::Facility design and siting"]}],"impls":[{"id":"act_01M2G6Y34WE7XE98281ZXQVPK7|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"in-progress","label":"In Progress","comments":0,"evidence":6},{"id":"act_01M2G6Y34WE7XE98281ZXQVPK7|byron-tract-forebay","component":"Byron Tract Forebay","status":"in-progress","label":"In Progress","comments":0,"evidence":1},{"id":"act_01M2G6Y34WE7XE98281ZXQVPK7|intake-b-north-delta","component":"Intake B — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":1}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="Onetime"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Culvert Under-Crossing Count and Location Report"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Culvert Under-Crossing Count and Location Report"
            >Submit Culvert Under-Crossing Count and Location Report</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Endowment Assessment for CDFW Approval"
          data-item='{"memberId":"act_01M2G6Y34YSP53SW383CFT2CZR","id":"act_01M2G6Y34YSP53SW383CFT2CZR","title":"Submit Endowment Assessment for CDFW Approval","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMWQAXVFYVR50AVZG23PV","code":"COA 12.12.2","name":"Submit Endowment Assessment for CDFW Approval","index":["Mitigation and restoration::Mitigation lands","Mitigation and restoration::Conservation endowment"]}],"impls":[{"id":"act_01M2G6Y34YSP53SW383CFT2CZR|intake-c-north-delta","component":"Intake C — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":0},{"id":"act_01M2G6Y34YSP53SW383CFT2CZR|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"completed","label":"Completed","comments":0,"evidence":4}]}'
          data-f-commitment="COA 12"
          data-f-phase="Operations|Maintenance"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Endowment Assessment for CDFW Approval"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Endowment Assessment for CDFW Approval"
            >Submit Endowment Assessment for CDFW Approval</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Endowment Manager Proposal to CDFW"
          data-item='{"memberId":"act_01M2G6Y34YSP53SW383CFT2CZQ","id":"act_01M2G6Y34YSP53SW383CFT2CZQ","title":"Submit Endowment Manager Proposal to CDFW","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMWNJCYH7CFZKH76128Q3","code":"COA 12.12.1","name":"Submit Endowment Manager Proposal to CDFW","index":["Mitigation and restoration::Mitigation lands","Mitigation and restoration::Conservation endowment"]}],"impls":[{"id":"act_01M2G6Y34YSP53SW383CFT2CZQ|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"on-hold","label":"On Hold","comments":0,"evidence":2}]}'
          data-f-commitment="COA 12"
          data-f-phase="Operations|Maintenance"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Endowment Manager Proposal to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Endowment Manager Proposal to CDFW"
            >Submit Endowment Manager Proposal to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Exclusion Barrier Design and Locations to CDFW"
          data-item='{"memberId":"act_01M2G6Y34X89RDDJZVZVMK8Y0E","id":"act_01M2G6Y34X89RDDJZVZVMK8Y0E","title":"Submit Exclusion Barrier Design and Locations to CDFW","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMMG8S1HWB1AND39KY4G7","code":"COA 11.43","name":"Submit Site-Specific Exclusion Barrier Design for CDFW Approval","index":["Habitat protection::Exclusion fencing and ESAs","Amphibians and reptiles::Amphibians"]},{"id":"req_01M2ESMP6B09YEGB5XD12TN3G2","code":"COA 11.62","name":"Submit Exclusion Barrier Design and Location to CDFW","index":["Habitat protection::Exclusion fencing and ESAs","Amphibians and reptiles::Giant garter snake"]}],"impls":[{"id":"act_01M2G6Y34X89RDDJZVZVMK8Y0E|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y34X89RDDJZVZVMK8Y0E|intake-c-north-delta","component":"Intake C — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y34X89RDDJZVZVMK8Y0E|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"completed","label":"Completed","comments":0,"evidence":2}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species="california tiger salamander|giant garter snake"
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="Onetime"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Exclusion Barrier Design and Locations to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Exclusion Barrier Design and Locations to CDFW"
            >Submit Exclusion Barrier Design and Locations to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Fertilizer Application Plan for CDFW Approval"
          data-item='{"memberId":"act_01M2G6Y34X89RDDJZVZVMK8Y0K","id":"act_01M2G6Y34X89RDDJZVZVMK8Y0K","title":"Submit Fertilizer Application Plan for CDFW Approval","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMJ29XED85VTSSFH9QFYF","code":"COA 11.6","name":"Obtain CDFW Written Approval Before Fertilizer Use","index":["Hazards::Pesticides and rodenticides"]}],"impls":[{"id":"act_01M2G6Y34X89RDDJZVZVMK8Y0K|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"overdue","label":"Overdue","comments":0,"evidence":5},{"id":"act_01M2G6Y34X89RDDJZVZVMK8Y0K|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Fertilizer Application Plan for CDFW Approval"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Fertilizer Application Plan for CDFW Approval"
            >Submit Fertilizer Application Plan for CDFW Approval</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Fish Study Plans and Reports for CDFW Approval"
          data-item='{"memberId":"act_01M2G6Y34TCYX1R0179FZ33YWM","id":"act_01M2G6Y34TCYX1R0179FZ33YWM","title":"Submit Fish Study Plans and Reports for CDFW Approval","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMFF83ZDJRVZFNX2DKF42","code":"COA 10.18.1","name":"Adhere to CDFW Review Process for Fish Study Plans and Reports","index":["Water operations::Operations monitoring and studies","Agency reporting and approvals::Agency approvals"]}],"impls":[{"id":"act_01M2G6Y34TCYX1R0179FZ33YWM|twin-cities-complex","component":"Twin Cities Complex","status":"in-progress","label":"In Progress","comments":0,"evidence":5},{"id":"act_01M2G6Y34TCYX1R0179FZ33YWM|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"on-hold","label":"On Hold","comments":0,"evidence":6},{"id":"act_01M2G6Y34TCYX1R0179FZ33YWM|byron-tract-forebay","component":"Byron Tract Forebay","status":"completed","label":"Completed","comments":0,"evidence":5}]}'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="Ongoing"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Fish Study Plans and Reports for CDFW Approval"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Fish Study Plans and Reports for CDFW Approval"
            >Submit Fish Study Plans and Reports for CDFW Approval</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Habitat Disturbance Footprint and ESAs for CDFW Approval"
          data-item='{"memberId":"act_01M2G6Y34X89RDDJZVZVMK8Y0H","id":"act_01M2G6Y34X89RDDJZVZVMK8Y0H","title":"Submit Habitat Disturbance Footprint and ESAs for CDFW Approval","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMNPC70G96ND7GGB3PC4A","code":"COA 11.55","name":"Submit Habitat Disturbance Footprint for CDFW Approval","index":["Habitat protection::Habitat avoidance and work footprint","Amphibians and reptiles::Giant garter snake"]},{"id":"req_01M2ESMP86ZDJDW04YY8YTW5QN","code":"COA 11.62.1","name":"Submit Proposed ESAs and Burrow-Bearing Areas to CDFW for Approval","index":["Amphibians and reptiles::Giant garter snake","Habitat protection::Exclusion fencing and ESAs"]}],"impls":[{"id":"act_01M2G6Y34X89RDDJZVZVMK8Y0H|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"completed","label":"Completed","comments":0,"evidence":3},{"id":"act_01M2G6Y34X89RDDJZVZVMK8Y0H|byron-tract-forebay","component":"Byron Tract Forebay","status":"completed","label":"Completed","comments":0,"evidence":6}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction|Construction"
          data-f-species="giant garter snake"
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="Onetime"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Habitat Disturbance Footprint and ESAs for CDFW Approval"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Habitat Disturbance Footprint and ESAs for CDFW Approval"
            >Submit Habitat Disturbance Footprint and ESAs for CDFW Approval</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Hazardous Materials Management Plan to CDFW"
          data-item='{"memberId":"act_01M2G6Y34WE7XE98281ZXQVPKA","id":"act_01M2G6Y34WE7XE98281ZXQVPKA","title":"Submit Hazardous Materials Management Plan to CDFW","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMK27YFM5RYJ58JMWJ8RF","code":"COA 11.21","name":"Submit HMMP to CDFW with Construction Phase Authorization Package","index":["Hazards::Hazardous materials"]}],"impls":[{"id":"act_01M2G6Y34WE7XE98281ZXQVPKA|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y34WE7XE98281ZXQVPKA|intake-c-north-delta","component":"Intake C — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":0},{"id":"act_01M2G6Y34WE7XE98281ZXQVPKA|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Hazardous Materials Management Plan to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Hazardous Materials Management Plan to CDFW"
            >Submit Hazardous Materials Management Plan to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit In-Water Pile Driving Information to CDFW"
          data-item='{"memberId":"act_01M2G6Y34X89RDDJZVZVMK8Y0B","id":"act_01M2G6Y34X89RDDJZVZVMK8Y0B","title":"Submit In-Water Pile Driving Information to CDFW","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMKNSX5WPNMGT57793V9A","code":"COA 11.31.2","name":"Submit In-Water Pile Driving Plan for CDFW Approval","index":["Noise and vibration::Pile driving and underwater sound","Water::In-water work"]}],"impls":[{"id":"act_01M2G6Y34X89RDDJZVZVMK8Y0B|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y34X89RDDJZVZVMK8Y0B|intake-c-north-delta","component":"Intake C — North Delta","status":"completed","label":"Completed","comments":0,"evidence":6},{"id":"act_01M2G6Y34X89RDDJZVZVMK8Y0B|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":1,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Construction"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="Onetime"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit In-Water Pile Driving Information to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit In-Water Pile Driving Information to CDFW"
            >Submit In-Water Pile Driving Information to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Over-Water Geotechnical Exploration Description to CDFW"
          data-item='{"memberId":"act_01M2G6Y34WE7XE98281ZXQVPKE","id":"act_01M2G6Y34WE7XE98281ZXQVPKE","title":"Submit Over-Water Geotechnical Exploration Description to CDFW","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMKM0VEBTJPRJMCT61J08","code":"COA 11.31.1","name":"Submit Over-Water Geotechnical Exploration Description for CDFW Approval","index":["Water::In-water work","Water::Geotechnical exploration"]}],"impls":[{"id":"act_01M2G6Y34WE7XE98281ZXQVPKE|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="Onetime"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Over-Water Geotechnical Exploration Description to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Over-Water Geotechnical Exploration Description to CDFW"
            >Submit Over-Water Geotechnical Exploration Description to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Phase 2 Authorization Package to CDFW"
          data-item='{"memberId":"act_01M2G6Y34ZRWNWJ42W3E737QZV","id":"act_01M2G6Y34ZRWNWJ42W3E737QZV","title":"Submit Phase 2 Authorization Package to CDFW","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMCNBKDG2MXRMH6NHDPGV","code":"COA 7","name":"Obtain Phase 2 Authorization Before Phase 2 Operations","index":["Agency reporting and approvals::Agency approvals"]},{"id":"req_01M2ESMCQ5MM4B9MEJ7232K24M","code":"COA 7.1","name":"Submit Phase 2 Authorization Package Before Phase 1 Operations","index":["Agency reporting and approvals::Agency approvals"]}],"impls":[{"id":"act_01M2G6Y34ZRWNWJ42W3E737QZV|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":1,"evidence":0}]}'
          data-f-commitment="COA 7"
          data-f-phase="Operations|Maintenance"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="Onetime"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Phase 2 Authorization Package to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Phase 2 Authorization Package to CDFW"
            >Submit Phase 2 Authorization Package to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Pre-implementation Phase Authorization Package to CDFW"
          data-item='{"memberId":"act_01M2G6Y34ZRWNWJ42W3E737QZT","id":"act_01M2G6Y34ZRWNWJ42W3E737QZT","title":"Submit Pre-implementation Phase Authorization Package to CDFW","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMC5JPZYS7Y50RAJ4JT9P","code":"COA 6.1","name":"Submit Pre-implementation Phase Authorization Package","index":["Agency reporting and approvals::Agency approvals","Agency reporting and approvals::Schedule notices"]}],"impls":[{"id":"act_01M2G6Y34ZRWNWJ42W3E737QZT|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y34ZRWNWJ42W3E737QZT|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 6"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="Onetime"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Pre-implementation Phase Authorization Package to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Pre-implementation Phase Authorization Package to CDFW"
            >Submit Pre-implementation Phase Authorization Package to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Preconstruction Survey Results for CDFW Approval"
          data-item='{"memberId":"act_01M2G6Y34V8WHD9WZSVEXW30W8","id":"act_01M2G6Y34V8WHD9WZSVEXW30W8","title":"Submit Preconstruction Survey Results for CDFW Approval","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMS4B6RKD5GF8X6CCJ5FS","code":"COA 11.105","name":"Submit MALI Survey Results for CDFW Approval","index":["Plants and invertebrates::Special-status plants"]},{"id":"req_01M2ESMMAY0PGV8V7Z8ACMASBF","code":"COA 11.42","name":"Submit CTS Preconstruction Survey Results to CDFW for Approval","index":["Amphibians and reptiles::Amphibians"]}],"impls":[{"id":"act_01M2G6Y34V8WHD9WZSVEXW30W8|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y34V8WHD9WZSVEXW30W8|twin-cities-complex","component":"Twin Cities Complex","status":"in-progress","label":"In Progress","comments":0,"evidence":0},{"id":"act_01M2G6Y34V8WHD9WZSVEXW30W8|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction"
          data-f-species="mason’s lilaeopsis|california tiger salamander"
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="Onetime"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Preconstruction Survey Results for CDFW Approval"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Preconstruction Survey Results for CDFW Approval"
            >Submit Preconstruction Survey Results for CDFW Approval</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Spill Prevention, Control, and Countermeasure Plan to CDFW"
          data-item='{"memberId":"act_01M2G6Y34WE7XE98281ZXQVPKB","id":"act_01M2G6Y34WE7XE98281ZXQVPKB","title":"Submit Spill Prevention, Control, and Countermeasure Plan to CDFW","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMK406ECZG1RS62GFJ5A0","code":"COA 11.22","name":"Submit SPCC Plans to CDFW with Construction Phase Authorization Package","index":["Hazards::Spill prevention and response"]}],"impls":[{"id":"act_01M2G6Y34WE7XE98281ZXQVPKB|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Spill Prevention, Control, and Countermeasure Plan to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Spill Prevention, Control, and Countermeasure Plan to CDFW"
            >Submit Spill Prevention, Control, and Countermeasure Plan to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Stormwater Pollution Prevention Plan to CDFW"
          data-item='{"memberId":"act_01M2G6Y34WE7XE98281ZXQVPKC","id":"act_01M2G6Y34WE7XE98281ZXQVPKC","title":"Submit Stormwater Pollution Prevention Plan to CDFW","chip":{"label":"Approval &amp; Consultation","tone":"action"},"groupId":"ApprovalAndConsultation","groupName":"Approval &amp; Consultation","reqs":[{"id":"req_01M2ESMK9F910VNEH5Y3ZKSX84","code":"COA 11.25","name":"Submit SWPPP to CDFW with Construction Phase Authorization Package","index":["Water::Stormwater and discharges"]}],"impls":[{"id":"act_01M2G6Y34WE7XE98281ZXQVPKC|intake-c-north-delta","component":"Intake C — North Delta","status":"completed","label":"Completed","comments":0,"evidence":2},{"id":"act_01M2G6Y34WE7XE98281ZXQVPKC|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"completed","label":"Completed","comments":0,"evidence":1}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Stormwater Pollution Prevention Plan to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Stormwater Pollution Prevention Plan to CDFW"
            >Submit Stormwater Pollution Prevention Plan to CDFW</span
          >
        </li>
      </ul>
    </details>
    <details class="bcn-lao__cat" data-lam-group="AvoidanceAndBMPs">
      <summary class="bcn-lao__row bcn-lao__row--cat">
        <span class="bcn-lao__chevron" aria-hidden="true"
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
        ><span class="bcn-lao__name">Avoidance &amp; BMPs</span
        ><span data-lao-count=""
          ><span class="bcn-swcb" aria-label="26 actions available">26</span></span
        >
      </summary>
      <ul class="bcn-lao__opts bcn-lam__opts">
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Adjust and Retest Fish Screen Baffles After a Non-Compliant Test"
          data-item='{"memberId":"act_01M2G6YKM9WGMGA0BV3KTY98EG","id":"act_01M2G6YKM9WGMGA0BV3KTY98EG","title":"Adjust and Retest Fish Screen Baffles After a Non-Compliant Test","chip":{"label":"Avoidance &amp; BMPs","tone":"action"},"groupId":"AvoidanceAndBMPs","groupName":"Avoidance &amp; BMPs","reqs":[{"id":"req_01M2ESMHGJED0F8PP04FMVHBE0","code":"COA 10.27.2","name":"Adjust Baffles and Retest After Non-Compliance","index":["Water operations::Fish screens"]}],"impls":[{"id":"act_01M2G6YKM9WGMGA0BV3KTY98EG|twin-cities-complex","component":"Twin Cities Complex","status":"in-progress","label":"In Progress","comments":1,"evidence":0},{"id":"act_01M2G6YKM9WGMGA0BV3KTY98EG|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"completed","label":"Completed","comments":0,"evidence":2},{"id":"act_01M2G6YKM9WGMGA0BV3KTY98EG|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 10"
          data-f-phase="Operations|Maintenance"
          data-f-species=""
          data-f-type="AvoidanceAndBMPs"
          data-f-frequency="AsNeeded"
          data-f-deliverable="other"
        >
          <esa-checkbox
            size="sm"
            aria-label="Adjust and Retest Fish Screen Baffles After a Non-Compliant Test"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Adjust and Retest Fish Screen Baffles After a Non-Compliant Test"
            >Adjust and Retest Fish Screen Baffles After a Non-Compliant Test</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Block burrows after confirming vacancy"
          data-item='{"memberId":"act_01M2G6Y37E7QF03BCX148MFCR2","id":"act_01M2G6Y37E7QF03BCX148MFCR2","title":"Block burrows after confirming vacancy","chip":{"label":"Avoidance &amp; BMPs","tone":"action"},"groupId":"AvoidanceAndBMPs","groupName":"Avoidance &amp; BMPs","reqs":[{"id":"req_01M2ESMMVVR3CR1BGCKGCBA0DF","code":"COA 11.49","name":"Monitor and Temporarily Block Vacant Burrows","index":["Amphibians and reptiles::Amphibians","Habitat protection::Habitat avoidance and work footprint"]},{"id":"req_01M2ESMMXNW06J2K6JTX9DFAKK","code":"COA 11.49.1","name":"Monitor and Block Burrows That Cannot Be Buffered","index":["Amphibians and reptiles::Amphibians","Habitat protection::Habitat avoidance and work footprint"]},{"id":"req_01M2ESMNSXG45H0H0SE68K0EPH","code":"COA 11.56","name":"Block Vacant Burrows and Relocate Any GGS Found","index":["Amphibians and reptiles::Giant garter snake","Habitat protection::Habitat avoidance and work footprint","Habitat protection::Wildlife encounters and handling"]},{"id":"req_01M2ESMP6CF3YRTR62KB5BMKWF","code":"COA 11.62","name":"Stop Barrier Construction When GGS Is Discovered and Block Undermined Burrows","index":["Habitat protection::Wildlife encounters and handling","Habitat protection::Exclusion fencing and ESAs","Amphibians and reptiles::Giant garter snake"]},{"id":"req_01M2ESMP86ZDJDW04YY8YTW5QP","code":"COA 11.62.1","name":"Determine Vacancy and Block or Excavate Burrows That Cannot Be Buffered","index":["Amphibians and reptiles::Giant garter snake","Habitat protection::Wildlife encounters and handling"]},{"id":"req_01M2ESMP9ZV6NV1G1EA1KK4YJB","code":"COA 11.62.2","name":"Determine Burrow Vacancy, Block Unoccupied Burrows, and Remove Blocks After Work","index":["Amphibians and reptiles::Giant garter snake","Habitat protection::Wildlife encounters and handling"]}],"impls":[{"id":"act_01M2G6Y37E7QF03BCX148MFCR2|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="california tiger salamander|giant garter snake"
          data-f-type="AvoidanceAndBMPs"
          data-f-frequency="AsNeeded"
          data-f-deliverable="other"
        >
          <esa-checkbox
            size="sm"
            aria-label="Block burrows after confirming vacancy"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Block burrows after confirming vacancy"
            >Block burrows after confirming vacancy</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Clean and decontaminate equipment at each work site"
          data-item='{"memberId":"act_01M2G6Y37E7QF03BCX148MFCR7","id":"act_01M2G6Y37E7QF03BCX148MFCR7","title":"Clean and decontaminate equipment at each work site","chip":{"label":"Avoidance &amp; BMPs","tone":"action"},"groupId":"AvoidanceAndBMPs","groupName":"Avoidance &amp; BMPs","reqs":[{"id":"req_01M2ESMDYRSCC4TRN3XVY6KGWC","code":"COA 9.12","name":"Inspect and Clean Equipment and Vessels for Invasive Species","index":["Water::Invasive species"]}],"impls":[{"id":"act_01M2G6Y37E7QF03BCX148MFCR7|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y37E7QF03BCX148MFCR7|intake-c-north-delta","component":"Intake C — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":5}]}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
          data-f-species=""
          data-f-type="AvoidanceAndBMPs"
          data-f-frequency="Ongoing"
          data-f-deliverable="other"
        >
          <esa-checkbox
            size="sm"
            aria-label="Clean and decontaminate equipment at each work site"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Clean and decontaminate equipment at each work site"
            >Clean and decontaminate equipment at each work site</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Complete fish salvage and relocation before in-water work"
          data-item='{"memberId":"act_01M2G6Y37SEW3JD5E67FT3BE0V","id":"act_01M2G6Y37SEW3JD5E67FT3BE0V","title":"Complete fish salvage and relocation before in-water work","chip":{"label":"Avoidance &amp; BMPs","tone":"action"},"groupId":"AvoidanceAndBMPs","groupName":"Avoidance &amp; BMPs","reqs":[{"id":"req_01M2ESMKWX75VN6Q904Q7QHHXN","code":"COA 11.35","name":"Exclude, Capture, Hold and Release Fish During Salvage","index":["Fish::Fish rescue and salvage","Water::Dewatering"]}],"impls":[{"id":"act_01M2G6Y37SEW3JD5E67FT3BE0V|intake-c-north-delta","component":"Intake C — North Delta","status":"completed","label":"Completed","comments":0,"evidence":4},{"id":"act_01M2G6Y37SEW3JD5E67FT3BE0V|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"overdue","label":"Overdue","comments":0,"evidence":5},{"id":"act_01M2G6Y37SEW3JD5E67FT3BE0V|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"completed","label":"Completed","comments":0,"evidence":2}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species=""
          data-f-type="AvoidanceAndBMPs"
          data-f-frequency="Onetime"
          data-f-deliverable="other"
        >
          <esa-checkbox
            size="sm"
            aria-label="Complete fish salvage and relocation before in-water work"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Complete fish salvage and relocation before in-water work"
            >Complete fish salvage and relocation before in-water work</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct daily clearance surveys before work begins"
          data-item='{"memberId":"act_01M2G6Y37QZY1A3K7JAYVP7ZEA","id":"act_01M2G6Y37QZY1A3K7JAYVP7ZEA","title":"Conduct daily clearance surveys before work begins","chip":{"label":"Avoidance &amp; BMPs","tone":"action"},"groupId":"AvoidanceAndBMPs","groupName":"Avoidance &amp; BMPs","reqs":[{"id":"req_01M2ESMMT2ZR1740F4HF6BZW5X","code":"COA 11.48","name":"Stop Work on CTS Discovery Inside Exclusion Fencing","index":["Amphibians and reptiles::Amphibians","Habitat protection::Wildlife encounters and handling","Habitat protection::Exclusion fencing and ESAs"]}],"impls":[{"id":"act_01M2G6Y37QZY1A3K7JAYVP7ZEA|byron-tract-forebay","component":"Byron Tract Forebay","status":"completed","label":"Completed","comments":2,"evidence":1},{"id":"act_01M2G6Y37QZY1A3K7JAYVP7ZEA|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y37QZY1A3K7JAYVP7ZEA|intake-c-north-delta","component":"Intake C — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species="california tiger salamander"
          data-f-type="AvoidanceAndBMPs"
          data-f-frequency="Recurring"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct daily clearance surveys before work begins"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct daily clearance surveys before work begins"
            >Conduct daily clearance surveys before work begins</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct hydroacoustic monitoring during in-water pile driving"
          data-item='{"memberId":"act_01M2G6Y37SEW3JD5E67FT3BE0T","id":"act_01M2G6Y37SEW3JD5E67FT3BE0T","title":"Conduct hydroacoustic monitoring during in-water pile driving","chip":{"label":"Avoidance &amp; BMPs","tone":"action"},"groupId":"AvoidanceAndBMPs","groupName":"Avoidance &amp; BMPs","reqs":[{"id":"req_01M2ESMKNSX5WPNMGT57793V97","code":"COA 11.31.2","name":"Allow Year-Round Pile Driving Inside Cofferdams or Training Walls","index":["Noise and vibration::Pile driving and underwater sound","Water::In-water work"]}],"impls":[{"id":"act_01M2G6Y37SEW3JD5E67FT3BE0T|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"completed","label":"Completed","comments":0,"evidence":4},{"id":"act_01M2G6Y37SEW3JD5E67FT3BE0T|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"on-hold","label":"On Hold","comments":3,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species=""
          data-f-type="AvoidanceAndBMPs"
          data-f-frequency="Ongoing"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct hydroacoustic monitoring during in-water pile driving"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct hydroacoustic monitoring during in-water pile driving"
            >Conduct hydroacoustic monitoring during in-water pile driving</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Cover open excavations at the close of each working day"
          data-item='{"memberId":"act_01M2G6Y37TC7ZSR7P81QYD2TH9","id":"act_01M2G6Y37TC7ZSR7P81QYD2TH9","title":"Cover open excavations at the close of each working day","chip":{"label":"Avoidance &amp; BMPs","tone":"action"},"groupId":"AvoidanceAndBMPs","groupName":"Avoidance &amp; BMPs","reqs":[{"id":"req_01M2ESMJGDAZD639XYXVJKZ53Z","code":"COA 11.14","name":"Cover or Ramp Open Excavations Nightly","index":["Habitat protection::Wildlife entrapment"]}],"impls":[{"id":"act_01M2G6Y37TC7ZSR7P81QYD2TH9|intake-c-north-delta","component":"Intake C — North Delta","status":"in-progress","label":"In Progress","comments":1,"evidence":0},{"id":"act_01M2G6Y37TC7ZSR7P81QYD2TH9|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":3,"evidence":0},{"id":"act_01M2G6Y37TC7ZSR7P81QYD2TH9|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":2,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species=""
          data-f-type="AvoidanceAndBMPs"
          data-f-frequency="Recurring"
          data-f-deliverable="installation"
        >
          <esa-checkbox
            size="sm"
            aria-label="Cover open excavations at the close of each working day"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Cover open excavations at the close of each working day"
            >Cover open excavations at the close of each working day</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Delineate and sign occupied nest and roost buffers"
          data-item='{"memberId":"act_01M2G6Y37E7QF03BCX148MFCR6","id":"act_01M2G6Y37E7QF03BCX148MFCR6","title":"Delineate and sign occupied nest and roost buffers","chip":{"label":"Avoidance &amp; BMPs","tone":"action"},"groupId":"AvoidanceAndBMPs","groupName":"Avoidance &amp; BMPs","reqs":[{"id":"req_01M2ESMQ51T6HN61N27Z6H7119","code":"COA 11.72","name":"Establish, Delineate and Maintain SWHA Nest Buffer","index":["Birds::Nesting birds","Habitat protection::Habitat avoidance and work footprint"]},{"id":"req_01M2ESMQDWQRXTGEXYK0XZGMD9","code":"COA 11.77","name":"Delineate and Avoid 656-Foot Buffer Around Active SWHA Nests","index":["Birds::Nesting birds","Habitat protection::Vegetation removal"]}],"impls":[{"id":"act_01M2G6Y37E7QF03BCX148MFCR6|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y37E7QF03BCX148MFCR6|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y37E7QF03BCX148MFCR6|intake-c-north-delta","component":"Intake C — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Post-Construction|Maintenance"
          data-f-species="swainson’s hawk"
          data-f-type="AvoidanceAndBMPs"
          data-f-frequency="AsNeeded"
          data-f-deliverable="installation"
        >
          <esa-checkbox
            size="sm"
            aria-label="Delineate and sign occupied nest and roost buffers"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Delineate and sign occupied nest and roost buffers"
            >Delineate and sign occupied nest and roost buffers</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Delineate Covered Species Habitat and Fence Construction Sites"
          data-item='{"memberId":"act_01M2G6YKM817BXJNTVA76DKTZ3","id":"act_01M2G6YKM817BXJNTVA76DKTZ3","title":"Delineate Covered Species Habitat and Fence Construction Sites","chip":{"label":"Avoidance &amp; BMPs","tone":"action"},"groupId":"AvoidanceAndBMPs","groupName":"Avoidance &amp; BMPs","reqs":[{"id":"req_01M2ESMDS4KC7YKNABBMKNV6GV","code":"COA 9.9","name":"Delineate Covered Species Habitat and Show on Construction Plans","index":["Habitat protection::Exclusion fencing and ESAs","Habitat protection::Habitat avoidance and work footprint"]}],"impls":[{"id":"act_01M2G6YKM817BXJNTVA76DKTZ3|intake-b-north-delta","component":"Intake B — North Delta","status":"in-progress","label":"In Progress","comments":1,"evidence":0},{"id":"act_01M2G6YKM817BXJNTVA76DKTZ3|intake-c-north-delta","component":"Intake C — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6YKM817BXJNTVA76DKTZ3|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"overdue","label":"Overdue","comments":0,"evidence":3}]}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction"
          data-f-species=""
          data-f-type="AvoidanceAndBMPs"
          data-f-frequency="Onetime"
          data-f-deliverable="installation"
        >
          <esa-checkbox
            size="sm"
            aria-label="Delineate Covered Species Habitat and Fence Construction Sites"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Delineate Covered Species Habitat and Fence Construction Sites"
            >Delineate Covered Species Habitat and Fence Construction Sites</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Delineate habitat, buffers, and construction site boundaries"
          data-item='{"memberId":"act_01M2G6Y37DQ86DQQR0DMG43C04","id":"act_01M2G6Y37DQ86DQQR0DMG43C04","title":"Delineate habitat, buffers, and construction site boundaries","chip":{"label":"Avoidance &amp; BMPs","tone":"action"},"groupId":"AvoidanceAndBMPs","groupName":"Avoidance &amp; BMPs","reqs":[{"id":"req_01M2ESMRVJYG082T0SAE12EZMB","code":"COA 11.100","name":"Flag Refugia and Habitat Features Before Earthmoving","index":["Habitat protection::Exclusion fencing and ESAs","Plants and invertebrates::Bumble bees and monarchs"]},{"id":"req_01M2ESMS63S5TJRSKN2D93XX9P","code":"COA 11.106","name":"Delineate MALI Buffer With High-Visibility Materials","index":["Habitat protection::Exclusion fencing and ESAs","Plants and invertebrates::Special-status plants"]},{"id":"req_01M2ESMQW1FAGP1AF7EGMEHEG6","code":"COA 11.84.1","name":"Delineate Suitable Nesting Habitat and Breeding Colonies With Flagging","index":["Birds::Nesting birds","Birds::Tricolored blackbird","Habitat protection::Exclusion fencing and ESAs"]},{"id":"req_01M2ESMQXS2JVGD9Q9XY1WQM7G","code":"COA 11.84.2","name":"Delineate Occupied TRBL Roost Sites With Flagging","index":["Birds::Nesting birds","Birds::Tricolored blackbird","Habitat protection::Exclusion fencing and ESAs"]},{"id":"req_01M2ESMQZJE9FTSQBMYW339TT7","code":"COA 11.85","name":"Delineate the TRBL Colony No-Activity Buffer","index":["Birds::Nesting birds","Birds::Tricolored blackbird","Habitat protection::Exclusion fencing and ESAs"]},{"id":"req_01M2ESMR3TEAHJ2FGX74G0945K","code":"COA 11.87","name":"Delineate the TRBL Roost No-Activity Buffer","index":["Birds::Nesting birds","Birds::Tricolored blackbird","Habitat protection::Exclusion fencing and ESAs"]},{"id":"req_01M2ESMR9PY8F1M7KPA6DD3DDE","code":"COA 11.90","name":"Delineate TRBL Nesting/Roosting Habitat and Buffers","index":["Birds::Nesting birds","Birds::Tricolored blackbird","Habitat protection::Exclusion fencing and ESAs"]},{"id":"req_01M2ESMRR1S26EXFBWQDFTE58A","code":"COA 11.98","name":"Delineate and Maintain CBB Nest Buffer Marking","index":["Plants and invertebrates::Bumble bees and monarchs","Habitat protection::Exclusion fencing and ESAs"]},{"id":"req_01M2ESMDQ70QCZ5B0X554ZQPFC","code":"COA 9.8","name":"Delineate and Maintain Construction Site Boundary","index":["Habitat protection::Exclusion fencing and ESAs","Habitat protection::Habitat avoidance and work footprint"]}],"impls":[{"id":"act_01M2G6Y37DQ86DQQR0DMG43C04|intake-c-north-delta","component":"Intake C — North Delta","status":"completed","label":"Completed","comments":0,"evidence":4},{"id":"act_01M2G6Y37DQ86DQQR0DMG43C04|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y37DQ86DQQR0DMG43C04|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"completed","label":"Completed","comments":0,"evidence":5}]}'
          data-f-commitment="COA 11|COA 9"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="crotch bumble bee|mason’s lilaeopsis|tricolored blackbird"
          data-f-type="AvoidanceAndBMPs"
          data-f-frequency="Onetime"
          data-f-deliverable="installation"
        >
          <esa-checkbox
            size="sm"
            aria-label="Delineate habitat, buffers, and construction site boundaries"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Delineate habitat, buffers, and construction site boundaries"
            >Delineate habitat, buffers, and construction site boundaries</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Dewater aquatic habitat and hold the dry period"
          data-item='{"memberId":"act_01M2G6Y37E7QF03BCX148MFCR3","id":"act_01M2G6Y37E7QF03BCX148MFCR3","title":"Dewater aquatic habitat and hold the dry period","chip":{"label":"Avoidance &amp; BMPs","tone":"action"},"groupId":"AvoidanceAndBMPs","groupName":"Avoidance &amp; BMPs","reqs":[{"id":"req_01M2ESMP4JFYT5C3WF6QC3PDCX","code":"COA 11.61","name":"Dewater Unavoidable GGS Aquatic Habitat Before Work Begins","index":["Water::Dewatering","Amphibians and reptiles::Giant garter snake"]},{"id":"req_01M2ESMP4K7W5XYW0R2Z17AQ15","code":"COA 11.61","name":"Maintain 15-Day Dry Period Before Excavating or Filling Dewatered Habitat","index":["Water::Dewatering","Amphibians and reptiles::Giant garter snake"]}],"impls":[{"id":"act_01M2G6Y37E7QF03BCX148MFCR3|byron-tract-forebay","component":"Byron Tract Forebay","status":"on-hold","label":"On Hold","comments":0,"evidence":1},{"id":"act_01M2G6Y37E7QF03BCX148MFCR3|intake-b-north-delta","component":"Intake B — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":5},{"id":"act_01M2G6Y37E7QF03BCX148MFCR3|intake-c-north-delta","component":"Intake C — North Delta","status":"completed","label":"Completed","comments":0,"evidence":1}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction"
          data-f-species="giant garter snake"
          data-f-type="AvoidanceAndBMPs"
          data-f-frequency="Onetime"
          data-f-deliverable="other"
        >
          <esa-checkbox
            size="sm"
            aria-label="Dewater aquatic habitat and hold the dry period"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Dewater aquatic habitat and hold the dry period"
            >Dewater aquatic habitat and hold the dry period</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Excavate and collapse burrows ahead of trenching"
          data-item='{"memberId":"act_01M2G6Y37E7QF03BCX148MFCR1","id":"act_01M2G6Y37E7QF03BCX148MFCR1","title":"Excavate and collapse burrows ahead of trenching","chip":{"label":"Avoidance &amp; BMPs","tone":"action"},"groupId":"AvoidanceAndBMPs","groupName":"Avoidance &amp; BMPs","reqs":[{"id":"req_01M2ESMMVVR3CR1BGCKGCBA0DG","code":"COA 11.49","name":"Hand Excavate Unavoidable Burrows Before Trenching","index":["Amphibians and reptiles::Amphibians","Habitat protection::Wildlife encounters and handling"]},{"id":"req_01M2ESMMZDEG0FSF04VK5A9TBP","code":"COA 11.49.2","name":"Hand Excavate Refuge Features by Designated Biologist Only","index":["Amphibians and reptiles::Amphibians","People and qualifications::Designated biologists and monitors"]},{"id":"req_01M2ESMNSY95MBB3815AW1HPQ4","code":"COA 11.56","name":"Hand Excavate Unavoidable Burrows Before Trenching","index":["Amphibians and reptiles::Giant garter snake","Habitat protection::Wildlife encounters and handling"]},{"id":"req_01M2ESMP9ZV6NV1G1EA1KK4YJC","code":"COA 11.62.2","name":"Hand Excavate Unavoidable Burrows and Refuge Features Before Trenching","index":["Amphibians and reptiles::Giant garter snake","Habitat protection::Wildlife encounters and handling"]}],"impls":[{"id":"act_01M2G6Y37E7QF03BCX148MFCR1|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"overdue","label":"Overdue","comments":1,"evidence":5}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction"
          data-f-species="california tiger salamander|giant garter snake"
          data-f-type="AvoidanceAndBMPs"
          data-f-frequency="Onetime"
          data-f-deliverable="other"
        >
          <esa-checkbox
            size="sm"
            aria-label="Excavate and collapse burrows ahead of trenching"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Excavate and collapse burrows ahead of trenching"
            >Excavate and collapse burrows ahead of trenching</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Flag and Sign Cross-Country Access Routes"
          data-item='{"memberId":"act_01M2G6YKM817BXJNTVA76DKTZ4","id":"act_01M2G6YKM817BXJNTVA76DKTZ4","title":"Flag and Sign Cross-Country Access Routes","chip":{"label":"Avoidance &amp; BMPs","tone":"action"},"groupId":"AvoidanceAndBMPs","groupName":"Avoidance &amp; BMPs","reqs":[{"id":"req_01M2ESMDV2Z1D8E43SV3PA7GH9","code":"COA 9.10","name":"Mark Cross-Country Access Routes in the Field","index":["Site conduct::Access routes and parking","Habitat protection::Exclusion fencing and ESAs"]}],"impls":[{"id":"act_01M2G6YKM817BXJNTVA76DKTZ4|intake-b-north-delta","component":"Intake B — North Delta","status":"on-hold","label":"On Hold","comments":1,"evidence":2},{"id":"act_01M2G6YKM817BXJNTVA76DKTZ4|intake-c-north-delta","component":"Intake C — North Delta","status":"not-started","label":"Not Started","comments":2,"evidence":0},{"id":"act_01M2G6YKM817BXJNTVA76DKTZ4|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"on-hold","label":"On Hold","comments":0,"evidence":0}]}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction"
          data-f-species=""
          data-f-type="AvoidanceAndBMPs"
          data-f-frequency="Onetime"
          data-f-deliverable="installation"
        >
          <esa-checkbox
            size="sm"
            aria-label="Flag and Sign Cross-Country Access Routes"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Flag and Sign Cross-Country Access Routes"
            >Flag and Sign Cross-Country Access Routes</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Install Bird Strike Diverters on New Transmission Lines"
          data-item='{"memberId":"act_01M2G6YKM817BXJNTVA76DKTZ1","id":"act_01M2G6YKM817BXJNTVA76DKTZ1","title":"Install Bird Strike Diverters on New Transmission Lines","chip":{"label":"Avoidance &amp; BMPs","tone":"action"},"groupId":"AvoidanceAndBMPs","groupName":"Avoidance &amp; BMPs","reqs":[{"id":"req_01M2ESMJQFYA8QN1KR6N41VJE2","code":"COA 11.17.1","name":"Install Bird Strike Diverters on New and Existing Power Lines","index":["Site conduct::Facility design and siting","Birds::Power line collisions"]},{"id":"req_01M2ESMV0G2RPZFHW44PCZ3G60","code":"COA 12.4","name":"Install Bird Strike Diverters on Transmission Lines","index":["Birds::Nesting birds","Birds::Bird strike diverters","Site conduct::Facility design and siting"]}],"impls":[{"id":"act_01M2G6YKM817BXJNTVA76DKTZ1|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":2,"evidence":0},{"id":"act_01M2G6YKM817BXJNTVA76DKTZ1|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11|COA 12"
          data-f-phase="Construction"
          data-f-species="swainson’s hawk|tricolored blackbird"
          data-f-type="AvoidanceAndBMPs"
          data-f-frequency="Onetime"
          data-f-deliverable="installation"
        >
          <esa-checkbox
            size="sm"
            aria-label="Install Bird Strike Diverters on New Transmission Lines"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Install Bird Strike Diverters on New Transmission Lines"
            >Install Bird Strike Diverters on New Transmission Lines</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Install Erosion and Sediment Control Measures Before Earth-Moving"
          data-item='{"memberId":"act_01M2G6YKM817BXJNTVA76DKTZ2","id":"act_01M2G6YKM817BXJNTVA76DKTZ2","title":"Install Erosion and Sediment Control Measures Before Earth-Moving","chip":{"label":"Avoidance &amp; BMPs","tone":"action"},"groupId":"AvoidanceAndBMPs","groupName":"Avoidance &amp; BMPs","reqs":[{"id":"req_01M2ESMDND6Q88AT76ZWVB5VRW","code":"COA 9.7","name":"Install and Maintain Erosion and Sediment Control Measures","index":["Water::Erosion and sediment control"]}],"impls":[{"id":"act_01M2G6YKM817BXJNTVA76DKTZ2|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6YKM817BXJNTVA76DKTZ2|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction|Post-Construction"
          data-f-species=""
          data-f-type="AvoidanceAndBMPs"
          data-f-frequency="Onetime"
          data-f-deliverable="installation"
        >
          <esa-checkbox
            size="sm"
            aria-label="Install Erosion and Sediment Control Measures Before Earth-Moving"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Install Erosion and Sediment Control Measures Before Earth-Moving"
            >Install Erosion and Sediment Control Measures Before Earth-Moving</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Install erosion and sediment controls ahead of storms"
          data-item='{"memberId":"act_01M2G6Y37TC7ZSR7P81QYD2TH8","id":"act_01M2G6Y37TC7ZSR7P81QYD2TH8","title":"Install erosion and sediment controls ahead of storms","chip":{"label":"Avoidance &amp; BMPs","tone":"action"},"groupId":"AvoidanceAndBMPs","groupName":"Avoidance &amp; BMPs","reqs":[{"id":"req_01M2ESMKD1149R8RFXNQY4H35J","code":"COA 11.27","name":"Delay Sediment-Risk Activities Until Erosion Controls Are Complete","index":["Water::Erosion and sediment control"]}],"impls":[{"id":"act_01M2G6Y37TC7ZSR7P81QYD2TH8|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":1,"evidence":0},{"id":"act_01M2G6Y37TC7ZSR7P81QYD2TH8|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"completed","label":"Completed","comments":0,"evidence":5}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction"
          data-f-species=""
          data-f-type="AvoidanceAndBMPs"
          data-f-frequency="AsNeeded"
          data-f-deliverable="installation"
        >
          <esa-checkbox
            size="sm"
            aria-label="Install erosion and sediment controls ahead of storms"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Install erosion and sediment controls ahead of storms"
            >Install erosion and sediment controls ahead of storms</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Install ESA fencing and identification signage"
          data-item='{"memberId":"act_01M2G6Y37E7QF03BCX148MFCQY","id":"act_01M2G6Y37E7QF03BCX148MFCQY","title":"Install ESA fencing and identification signage","chip":{"label":"Avoidance &amp; BMPs","tone":"action"},"groupId":"AvoidanceAndBMPs","groupName":"Avoidance &amp; BMPs","reqs":[{"id":"req_01M2ESMNMKZ2CXZM89538YV5TQ","code":"COA 11.54","name":"Establish and Maintain ESA Fencing Around GGS Habitat","index":["Habitat protection::Exclusion fencing and ESAs","Amphibians and reptiles::Giant garter snake"]},{"id":"req_01M2ESMNMMW9SG3Q6Z79Q52X05","code":"COA 11.54","name":"Post and Maintain ESA Identification Signage","index":["Habitat protection::Exclusion fencing and ESAs","Amphibians and reptiles::Giant garter snake"]},{"id":"req_01M2ESMP86ZDJDW04YY8YTW5QM","code":"COA 11.62.1","name":"Demarcate High-Burrow-Concentration Areas as ESAs","index":["Amphibians and reptiles::Giant garter snake","Habitat protection::Exclusion fencing and ESAs"]}],"impls":[{"id":"act_01M2G6Y37E7QF03BCX148MFCQY|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"in-progress","label":"In Progress","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction"
          data-f-species="giant garter snake"
          data-f-type="AvoidanceAndBMPs"
          data-f-frequency="Ongoing"
          data-f-deliverable="installation"
        >
          <esa-checkbox
            size="sm"
            aria-label="Install ESA fencing and identification signage"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Install ESA fencing and identification signage"
            >Install ESA fencing and identification signage</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Install exclusion barriers at work areas and shaft openings"
          data-item='{"memberId":"act_01M2G6Y37E7QF03BCX148MFCQZ","id":"act_01M2G6Y37E7QF03BCX148MFCQZ","title":"Install exclusion barriers at work areas and shaft openings","chip":{"label":"Avoidance &amp; BMPs","tone":"action"},"groupId":"AvoidanceAndBMPs","groupName":"Avoidance &amp; BMPs","reqs":[{"id":"req_01M2ESMJGDAZD639XYXVJKZ540","code":"COA 11.14","name":"Install Exclusion Barriers Around Shaft Openings","index":["Habitat protection::Wildlife entrapment","Habitat protection::Exclusion fencing and ESAs"]},{"id":"req_01M2ESMP4MX65TNY0B89G46JP2","code":"COA 11.61","name":"Install Exclusion Fencing Once Habitat Is Confirmed GGS-Free","index":["Habitat protection::Exclusion fencing and ESAs","Water::Dewatering","Amphibians and reptiles::Giant garter snake"]},{"id":"req_01M2ESMP6B09YEGB5XD12TN3G3","code":"COA 11.62","name":"Erect Exclusion Barrier Before Ground-Disturbing Activities","index":["Habitat protection::Exclusion fencing and ESAs","Amphibians and reptiles::Giant garter snake"]}],"impls":[{"id":"act_01M2G6Y37E7QF03BCX148MFCQZ|twin-cities-complex","component":"Twin Cities Complex","status":"completed","label":"Completed","comments":0,"evidence":6},{"id":"act_01M2G6Y37E7QF03BCX148MFCQZ|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"in-progress","label":"In Progress","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Pre-Construction"
          data-f-species="giant garter snake"
          data-f-type="AvoidanceAndBMPs"
          data-f-frequency="Onetime"
          data-f-deliverable="installation"
        >
          <esa-checkbox
            size="sm"
            aria-label="Install exclusion barriers at work areas and shaft openings"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Install exclusion barriers at work areas and shaft openings"
            >Install exclusion barriers at work areas and shaft openings</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Install visual barriers along night access routes"
          data-item='{"memberId":"act_01M2G6Y37E7QF03BCX148MFCR5","id":"act_01M2G6Y37E7QF03BCX148MFCR5","title":"Install visual barriers along night access routes","chip":{"label":"Avoidance &amp; BMPs","tone":"action"},"groupId":"AvoidanceAndBMPs","groupName":"Avoidance &amp; BMPs","reqs":[{"id":"req_01M2ESMJ9BGHZMB473YX12MFMD","code":"COA 11.10","name":"Install CDFW-Approved Visual Barriers Along Access Routes","index":["Lighting::Lighting near habitat and waters","Site conduct::Access routes and parking"]}],"impls":[{"id":"act_01M2G6Y37E7QF03BCX148MFCR5|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y37E7QF03BCX148MFCR5|intake-b-north-delta","component":"Intake B — North Delta","status":"on-hold","label":"On Hold","comments":0,"evidence":2},{"id":"act_01M2G6Y37E7QF03BCX148MFCR5|intake-c-north-delta","component":"Intake C — North Delta","status":"in-progress","label":"In Progress","comments":3,"evidence":2}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species=""
          data-f-type="AvoidanceAndBMPs"
          data-f-frequency="AsNeeded"
          data-f-deliverable="installation"
        >
          <esa-checkbox
            size="sm"
            aria-label="Install visual barriers along night access routes"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Install visual barriers along night access routes"
            >Install visual barriers along night access routes</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Install wildlife under-crossing culverts and speed limit signage"
          data-item='{"memberId":"act_01M2G6Y37E7QF03BCX148MFCR4","id":"act_01M2G6Y37E7QF03BCX148MFCR4","title":"Install wildlife under-crossing culverts and speed limit signage","chip":{"label":"Avoidance &amp; BMPs","tone":"action"},"groupId":"AvoidanceAndBMPs","groupName":"Avoidance &amp; BMPs","reqs":[{"id":"req_01M2ESMJCW3S0Y78C3N63HEMHC","code":"COA 11.12","name":"Construct Wildlife Under-crossing Culverts to Specification","index":["Site conduct::Facility design and siting","Amphibians and reptiles::Giant garter snake"]},{"id":"req_01M2ESMM5PJ68M2M1KZ3RW9HGJ","code":"COA 11.39.1","name":"Post 10 MPH Speed Limit Signage on Nonpublic Project Roads","index":["Site conduct::Speed limits","Amphibians and reptiles::Amphibians"]}],"impls":[{"id":"act_01M2G6Y37E7QF03BCX148MFCR4|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"overdue","label":"Overdue","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Pre-Construction|Operations|Maintenance"
          data-f-species="california tiger salamander"
          data-f-type="AvoidanceAndBMPs"
          data-f-frequency="Onetime"
          data-f-deliverable="installation"
        >
          <esa-checkbox
            size="sm"
            aria-label="Install wildlife under-crossing culverts and speed limit signage"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Install wildlife under-crossing culverts and speed limit signage"
            >Install wildlife under-crossing culverts and speed limit signage</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Obtain agency approval of designated wildlife handlers"
          data-item='{"memberId":"act_01M2G6Y37TC7ZSR7P81QYD2THA","id":"act_01M2G6Y37TC7ZSR7P81QYD2THA","title":"Obtain agency approval of designated wildlife handlers","chip":{"label":"Avoidance &amp; BMPs","tone":"action"},"groupId":"AvoidanceAndBMPs","groupName":"Avoidance &amp; BMPs","reqs":[{"id":"req_01M2ESMRZ2SQA04DKYQWZHN3NY","code":"COA 11.102","name":"Relocate Unavoidable CBB Nest as Last Resort","index":["Plants and invertebrates::Bumble bees and monarchs","People and qualifications::Designated biologists and monitors"]},{"id":"req_01M2ESMRGT715YPPHA107T5SGN","code":"COA 11.94","name":"Relocate Unavoidable CBB Nest via Designated Biologist","index":["Plants and invertebrates::Bumble bees and monarchs","Habitat protection::Wildlife encounters and handling"]}],"impls":[{"id":"act_01M2G6Y37TC7ZSR7P81QYD2THA|intake-b-north-delta","component":"Intake B — North Delta","status":"on-hold","label":"On Hold","comments":0,"evidence":5}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Maintenance"
          data-f-species="crotch bumble bee"
          data-f-type="AvoidanceAndBMPs"
          data-f-frequency="Onetime"
          data-f-deliverable="approval"
        >
          <esa-checkbox
            size="sm"
            aria-label="Obtain agency approval of designated wildlife handlers"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Obtain agency approval of designated wildlife handlers"
            >Obtain agency approval of designated wildlife handlers</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Plant Vegetative Ground Cover on Disturbed Areas"
          data-item='{"memberId":"act_01M2G6YKM817BXJNTVA76DKTZ5","id":"act_01M2G6YKM817BXJNTVA76DKTZ5","title":"Plant Vegetative Ground Cover on Disturbed Areas","chip":{"label":"Avoidance &amp; BMPs","tone":"action"},"groupId":"AvoidanceAndBMPs","groupName":"Avoidance &amp; BMPs","reqs":[{"id":"req_01M2ESMKGJBCK65KGGWNK6WZX9","code":"COA 11.29","name":"Plant Vegetative Ground Cover After Construction","index":["Air quality::Fugitive dust","Mitigation and restoration::Restoration","Water::Erosion and sediment control"]}],"impls":[{"id":"act_01M2G6YKM817BXJNTVA76DKTZ5|byron-tract-forebay","component":"Byron Tract Forebay","status":"on-hold","label":"On Hold","comments":2,"evidence":6}]}'
          data-f-commitment="COA 11"
          data-f-phase="Post-Construction"
          data-f-species=""
          data-f-type="AvoidanceAndBMPs"
          data-f-frequency="Onetime"
          data-f-deliverable="installation"
        >
          <esa-checkbox
            size="sm"
            aria-label="Plant Vegetative Ground Cover on Disturbed Areas"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Plant Vegetative Ground Cover on Disturbed Areas"
            >Plant Vegetative Ground Cover on Disturbed Areas</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Prepare the hazardous materials management plan"
          data-item='{"memberId":"act_01M2G6Y37E7QF03BCX148MFCR8","id":"act_01M2G6Y37E7QF03BCX148MFCR8","title":"Prepare the hazardous materials management plan","chip":{"label":"Avoidance &amp; BMPs","tone":"action"},"groupId":"AvoidanceAndBMPs","groupName":"Avoidance &amp; BMPs","reqs":[{"id":"req_01M2ESME28WH6M351CX8A8P93C","code":"COA 9.14","name":"Implement CDFW-Approved Hazardous Materials Management Plan","index":["Hazards::Hazardous materials"]}],"impls":[{"id":"act_01M2G6Y37E7QF03BCX148MFCR8|twin-cities-complex","component":"Twin Cities Complex","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y37E7QF03BCX148MFCR8|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"on-hold","label":"On Hold","comments":0,"evidence":6}]}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
          data-f-species=""
          data-f-type="AvoidanceAndBMPs"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Prepare the hazardous materials management plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Prepare the hazardous materials management plan"
            >Prepare the hazardous materials management plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Remove and Clean North Delta Intake Fish Screens"
          data-item='{"memberId":"act_01M2G6YKM817BXJNTVA76DKTZ7","id":"act_01M2G6YKM817BXJNTVA76DKTZ7","title":"Remove and Clean North Delta Intake Fish Screens","chip":{"label":"Avoidance &amp; BMPs","tone":"action"},"groupId":"AvoidanceAndBMPs","groupName":"Avoidance &amp; BMPs","reqs":[{"id":"req_01M2ESMHM4KCFCMYCV8HCE6WB9","code":"COA 10.28","name":"Remove and Clean Fish Screens Every Six Months","index":["Water operations::Fish screens"]}],"impls":[{"id":"act_01M2G6YKM817BXJNTVA76DKTZ7|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"completed","label":"Completed","comments":0,"evidence":6},{"id":"act_01M2G6YKM817BXJNTVA76DKTZ7|byron-tract-forebay","component":"Byron Tract Forebay","status":"completed","label":"Completed","comments":0,"evidence":6}]}'
          data-f-commitment="COA 10"
          data-f-phase="Operations|Maintenance"
          data-f-species=""
          data-f-type="AvoidanceAndBMPs"
          data-f-frequency="Recurring"
          data-f-deliverable="other"
        >
          <esa-checkbox
            size="sm"
            aria-label="Remove and Clean North Delta Intake Fish Screens"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Remove and Clean North Delta Intake Fish Screens"
            >Remove and Clean North Delta Intake Fish Screens</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Remove exclusion barriers after covered activities end"
          data-item='{"memberId":"act_01M2G6Y37E7QF03BCX148MFCR0","id":"act_01M2G6Y37E7QF03BCX148MFCR0","title":"Remove exclusion barriers after covered activities end","chip":{"label":"Avoidance &amp; BMPs","tone":"action"},"groupId":"AvoidanceAndBMPs","groupName":"Avoidance &amp; BMPs","reqs":[{"id":"req_01M2ESMP6D71ETMFGEBPMJCEQ1","code":"COA 11.62","name":"Keep Barrier in Place Until Completion and Remove It Afterward","index":["Habitat protection::Exclusion fencing and ESAs","Amphibians and reptiles::Giant garter snake"]},{"id":"req_01M2ESMTSGH2CPJYC0EHHW9011","code":"COA 12.3.1","name":"Remove Exclusion Fencing by October 31 Near Aquatic Features","index":["Habitat protection::Exclusion fencing and ESAs","Mitigation and restoration::Restoration"]}],"impls":[{"id":"act_01M2G6Y37E7QF03BCX148MFCR0|intake-b-north-delta","component":"Intake B — North Delta","status":"in-progress","label":"In Progress","comments":2,"evidence":0},{"id":"act_01M2G6Y37E7QF03BCX148MFCR0|intake-c-north-delta","component":"Intake C — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11|COA 12"
          data-f-phase="Construction|Post-Construction"
          data-f-species="giant garter snake"
          data-f-type="AvoidanceAndBMPs"
          data-f-frequency="Onetime"
          data-f-deliverable="installation"
        >
          <esa-checkbox
            size="sm"
            aria-label="Remove exclusion barriers after covered activities end"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Remove exclusion barriers after covered activities end"
            >Remove exclusion barriers after covered activities end</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Remove Temporary Fill and Construction Refuse at Completion"
          data-item='{"memberId":"act_01M2G6YKM817BXJNTVA76DKTZ6","id":"act_01M2G6YKM817BXJNTVA76DKTZ6","title":"Remove Temporary Fill and Construction Refuse at Completion","chip":{"label":"Avoidance &amp; BMPs","tone":"action"},"groupId":"AvoidanceAndBMPs","groupName":"Avoidance &amp; BMPs","reqs":[{"id":"req_01M2ESME9BSX73B5K904W1AMCF","code":"COA 9.17","name":"Remove Temporary Fill and Construction Refuse on Completion","index":["Mitigation and restoration::Restoration","Site conduct::Trash and food waste"]}],"impls":[{"id":"act_01M2G6YKM817BXJNTVA76DKTZ6|byron-tract-forebay","component":"Byron Tract Forebay","status":"overdue","label":"Overdue","comments":0,"evidence":0}]}'
          data-f-commitment="COA 9"
          data-f-phase="Post-Construction"
          data-f-species=""
          data-f-type="AvoidanceAndBMPs"
          data-f-frequency="Onetime"
          data-f-deliverable="other"
        >
          <esa-checkbox
            size="sm"
            aria-label="Remove Temporary Fill and Construction Refuse at Completion"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Remove Temporary Fill and Construction Refuse at Completion"
            >Remove Temporary Fill and Construction Refuse at Completion</span
          >
        </li>
      </ul>
    </details>
    <details class="bcn-lao__cat" data-lam-group="Design">
      <summary class="bcn-lao__row bcn-lao__row--cat">
        <span class="bcn-lao__chevron" aria-hidden="true"
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
        ><span class="bcn-lao__name">Design</span
        ><span data-lao-count=""
          ><span class="bcn-swcb" aria-label="1 actions available">1</span></span
        >
      </summary>
      <ul class="bcn-lao__opts bcn-lam__opts">
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Develop Refugia Design and Field Study Plan"
          data-item='{"memberId":"act_01M2G6Y3CAZ0RTVT4JT3NA167V","id":"act_01M2G6Y3CAZ0RTVT4JT3NA167V","title":"Develop Refugia Design and Field Study Plan","chip":{"label":"Design","tone":"action"},"groupId":"Design","groupName":"Design","reqs":[{"id":"req_01M2ESMGGSKMA3NH7DNR3MW3SN","code":"COA 10.21.6","name":"Develop Refugia Design and Field Study Plan","index":["Water operations::Operations monitoring and studies","Water operations::Fish screens"]}],"impls":[{"id":"act_01M2G6Y3CAZ0RTVT4JT3NA167V|twin-cities-complex","component":"Twin Cities Complex","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3CAZ0RTVT4JT3NA167V|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"in-progress","label":"In Progress","comments":0,"evidence":4}]}'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning|Pre-Construction|Construction"
          data-f-species=""
          data-f-type="Design"
          data-f-frequency=""
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Develop Refugia Design and Field Study Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Develop Refugia Design and Field Study Plan"
            >Develop Refugia Design and Field Study Plan</span
          >
        </li>
      </ul>
    </details>
    <details class="bcn-lao__cat" data-lam-group="Financial">
      <summary class="bcn-lao__row bcn-lao__row--cat">
        <span class="bcn-lao__chevron" aria-hidden="true"
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
        ><span class="bcn-lao__name">Financial</span
        ><span data-lao-count=""
          ><span class="bcn-swcb" aria-label="8 actions available">8</span></span
        >
      </summary>
      <ul class="bcn-lao__opts bcn-lam__opts">
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Calculate Phase Security Amount Before Phase Approval"
          data-item='{"memberId":"act_01M2G6Y3EPKKKVFDBN1YQGB0HT","id":"act_01M2G6Y3EPKKKVFDBN1YQGB0HT","title":"Calculate Phase Security Amount Before Phase Approval","chip":{"label":"Financial","tone":"action"},"groupId":"Financial","groupName":"Financial","reqs":[{"id":"req_01M2ESMX7ADGRE9KJQC795NMQE","code":"COA 13.1","name":"Calculate Security Amount Before Each Phase Approval","index":["Mitigation and restoration::Mitigation lands","Mitigation and restoration::Security and funding assurances","Agency reporting and approvals::Agency approvals"]}],"impls":[{"id":"act_01M2G6Y3EPKKKVFDBN1YQGB0HT|twin-cities-complex","component":"Twin Cities Complex","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3EPKKKVFDBN1YQGB0HT|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"on-hold","label":"On Hold","comments":0,"evidence":0},{"id":"act_01M2G6Y3EPKKKVFDBN1YQGB0HT|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 13"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species=""
          data-f-type="Financial"
          data-f-frequency="AsNeeded"
          data-f-deliverable="other"
        >
          <esa-checkbox
            size="sm"
            aria-label="Calculate Phase Security Amount Before Phase Approval"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Calculate Phase Security Amount Before Phase Approval"
            >Calculate Phase Security Amount Before Phase Approval</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Contribute Funding to the Longfin Smelt Culture Program"
          data-item='{"memberId":"act_01M2G6Y3EPKKKVFDBN1YQGB0HR","id":"act_01M2G6Y3EPKKKVFDBN1YQGB0HR","title":"Contribute Funding to the Longfin Smelt Culture Program","chip":{"label":"Financial","tone":"action"},"groupId":"Financial","groupName":"Financial","reqs":[{"id":"req_01M2ESMVGB5PMSV2NJKNMMMWEE","code":"COA 12.6.6","name":"Fund Longfin Smelt Culture Program","index":["Mitigation and restoration::Mitigation lands","Mitigation and restoration::Mitigation funding contributions","Fish::Delta smelt and longfin smelt"]}],"impls":[{"id":"act_01M2G6Y3EPKKKVFDBN1YQGB0HR|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning"
          data-f-species="longfin smelt"
          data-f-type="Financial"
          data-f-frequency=""
          data-f-deliverable="payment"
        >
          <esa-checkbox
            size="sm"
            aria-label="Contribute Funding to the Longfin Smelt Culture Program"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Contribute Funding to the Longfin Smelt Culture Program"
            >Contribute Funding to the Longfin Smelt Culture Program</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Establish Long-Term HM Lands Management Endowment"
          data-item='{"memberId":"act_01M2G6Y3ENYWE6AXT12YDFDJM0","id":"act_01M2G6Y3ENYWE6AXT12YDFDJM0","title":"Establish Long-Term HM Lands Management Endowment","chip":{"label":"Financial","tone":"action"},"groupId":"Financial","groupName":"Financial","reqs":[{"id":"req_01M2ESMWKR3XYAFRTEAMNZAGG5","code":"COA 12.12","name":"Establish Endowment When SWP Funding Ends","index":["Mitigation and restoration::Mitigation lands"]}],"impls":[{"id":"act_01M2G6Y3ENYWE6AXT12YDFDJM0|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3ENYWE6AXT12YDFDJM0|byron-tract-forebay","component":"Byron Tract Forebay","status":"completed","label":"Completed","comments":0,"evidence":1}]}'
          data-f-commitment="COA 12"
          data-f-phase="Operations|Maintenance"
          data-f-species=""
          data-f-type="Financial"
          data-f-frequency="AsNeeded"
          data-f-deliverable="other"
        >
          <esa-checkbox
            size="sm"
            aria-label="Establish Long-Term HM Lands Management Endowment"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Establish Long-Term HM Lands Management Endowment"
            >Establish Long-Term HM Lands Management Endowment</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Fund CHNWR, CHNSR and White Sturgeon Operations Mitigation"
          data-item='{"memberId":"act_01M2G6Y3EPKKKVFDBN1YQGB0HS","id":"act_01M2G6Y3EPKKKVFDBN1YQGB0HS","title":"Fund CHNWR, CHNSR and White Sturgeon Operations Mitigation","chip":{"label":"Financial","tone":"action"},"groupId":"Financial","groupName":"Financial","reqs":[{"id":"req_01M2ESMVKZY4783EXRCR1239EX","code":"COA 12.7.2","name":"Fund CHNWR/CHNSR Operations Mitigation Projects","index":["Mitigation and restoration::Mitigation lands","Mitigation and restoration::Mitigation funding contributions","Fish::Chinook salmon"]},{"id":"req_01M2ESMVQJ3YJN9P04EC17WD3W","code":"COA 12.8.2","name":"Fund White Sturgeon Operations Mitigation","index":["Mitigation and restoration::Mitigation lands","Mitigation and restoration::Mitigation funding contributions","Fish::White sturgeon"]}],"impls":[{"id":"act_01M2G6Y3EPKKKVFDBN1YQGB0HS|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"in-progress","label":"In Progress","comments":0,"evidence":6},{"id":"act_01M2G6Y3EPKKKVFDBN1YQGB0HS|byron-tract-forebay","component":"Byron Tract Forebay","status":"completed","label":"Completed","comments":0,"evidence":3}]}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Operations"
          data-f-species="winter-run chinook salmon|spring-run chinook salmon|white sturgeon"
          data-f-type="Financial"
          data-f-frequency="Onetime"
          data-f-deliverable="payment"
        >
          <esa-checkbox
            size="sm"
            aria-label="Fund CHNWR, CHNSR and White Sturgeon Operations Mitigation"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Fund CHNWR, CHNSR and White Sturgeon Operations Mitigation"
            >Fund CHNWR, CHNSR and White Sturgeon Operations Mitigation</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Pay Care and Treatment Costs for Injured Covered Species"
          data-item='{"memberId":"act_01M2G6Y3ENYWE6AXT12YDFDJKZ","id":"act_01M2G6Y3ENYWE6AXT12YDFDJKZ","title":"Pay Care and Treatment Costs for Injured Covered Species","chip":{"label":"Financial","tone":"action"},"groupId":"Financial","groupName":"Financial","reqs":[{"id":"req_01M2ESMPPXXTTV96MGFP9E403C","code":"COA 11.68","name":"Bear Costs of Injured GGS Care and Treatment","index":["Amphibians and reptiles::Giant garter snake","Habitat protection::Wildlife encounters and handling"]},{"id":"req_01M2ESMPTEM53MG569201GQDP7","code":"COA 11.68.2","name":"Bear Costs of Seriously Injured GGS Care and Treatment","index":["Amphibians and reptiles::Giant garter snake","Habitat protection::Wildlife encounters and handling"]},{"id":"req_01M2ESMRF1YW0VN6WV9VMY07ZR","code":"COA 11.93","name":"Bear Costs of Injured TRBL Care and Treatment","index":["Birds::Nesting birds","Birds::Tricolored blackbird","Habitat protection::Wildlife encounters and handling"]}],"impls":[{"id":"act_01M2G6Y3ENYWE6AXT12YDFDJKZ|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"in-progress","label":"In Progress","comments":0,"evidence":2},{"id":"act_01M2G6Y3ENYWE6AXT12YDFDJKZ|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"completed","label":"Completed","comments":0,"evidence":5},{"id":"act_01M2G6Y3ENYWE6AXT12YDFDJKZ|twin-cities-complex","component":"Twin Cities Complex","status":"in-progress","label":"In Progress","comments":0,"evidence":6}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance|Post-Construction|Operations"
          data-f-species="giant garter snake|tricolored blackbird"
          data-f-type="Financial"
          data-f-frequency="AsNeeded"
          data-f-deliverable="payment"
        >
          <esa-checkbox
            size="sm"
            aria-label="Pay Care and Treatment Costs for Injured Covered Species"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Pay Care and Treatment Costs for Injured Covered Species"
            >Pay Care and Treatment Costs for Injured Covered Species</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Reimburse CDFW Costs for ITP Issuance and Monitoring"
          data-item='{"memberId":"act_01M2G6Y3EPKKKVFDBN1YQGB0HQ","id":"act_01M2G6Y3EPKKKVFDBN1YQGB0HQ","title":"Reimburse CDFW Costs for ITP Issuance and Monitoring","chip":{"label":"Financial","tone":"action"},"groupId":"Financial","groupName":"Financial","reqs":[{"id":"req_01M2ESMX5J1FNXQ8JJFBF8Z7F2","code":"COA 12.13","name":"Reimburse CDFW Costs for ITP Issuance and Monitoring","index":["Mitigation and restoration::Mitigation lands","Mitigation and restoration::Security and funding assurances"]}],"impls":[{"id":"act_01M2G6Y3EPKKKVFDBN1YQGB0HQ|twin-cities-complex","component":"Twin Cities Complex","status":"completed","label":"Completed","comments":0,"evidence":6},{"id":"act_01M2G6Y3EPKKKVFDBN1YQGB0HQ|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3EPKKKVFDBN1YQGB0HQ|byron-tract-forebay","component":"Byron Tract Forebay","status":"in-progress","label":"In Progress","comments":0,"evidence":4}]}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Construction|Operations|Maintenance"
          data-f-species=""
          data-f-type="Financial"
          data-f-frequency="AsNeeded"
          data-f-deliverable="payment"
        >
          <esa-checkbox
            size="sm"
            aria-label="Reimburse CDFW Costs for ITP Issuance and Monitoring"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Reimburse CDFW Costs for ITP Issuance and Monitoring"
            >Reimburse CDFW Costs for ITP Issuance and Monitoring</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit and Update the CESA Mitigation Funding Strategy"
          data-item='{"memberId":"act_01M2G6Y3EPKKKVFDBN1YQGB0HW","id":"act_01M2G6Y3EPKKKVFDBN1YQGB0HW","title":"Submit and Update the CESA Mitigation Funding Strategy","chip":{"label":"Financial","tone":"action"},"groupId":"Financial","groupName":"Financial","reqs":[{"id":"req_01M2ESMX932P8X2GF2S1KQRDA9","code":"COA 13.2","name":"Submit Initial CESA Mitigation Funding Strategy","index":["Mitigation and restoration::Mitigation lands","Mitigation and restoration::Security and funding assurances"]},{"id":"req_01M2ESMX94HD08Y0H66AQJBQWE","code":"COA 13.2","name":"Submit Periodic Updates to Mitigation Funding Strategy","index":["Mitigation and restoration::Mitigation lands","Mitigation and restoration::Security and funding assurances"]}],"impls":[{"id":"act_01M2G6Y3EPKKKVFDBN1YQGB0HW|twin-cities-complex","component":"Twin Cities Complex","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3EPKKKVFDBN1YQGB0HW|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"completed","label":"Completed","comments":0,"evidence":2},{"id":"act_01M2G6Y3EPKKKVFDBN1YQGB0HW|byron-tract-forebay","component":"Byron Tract Forebay","status":"in-progress","label":"In Progress","comments":0,"evidence":2}]}'
          data-f-commitment="COA 13"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-type="Financial"
          data-f-frequency="Recurring"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit and Update the CESA Mitigation Funding Strategy"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit and Update the CESA Mitigation Funding Strategy"
            >Submit and Update the CESA Mitigation Funding Strategy</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Covered Fish Monitoring Funding Strategy to CDFW"
          data-item='{"memberId":"act_01M2G6Y3EPKKKVFDBN1YQGB0HV","id":"act_01M2G6Y3EPKKKVFDBN1YQGB0HV","title":"Submit Covered Fish Monitoring Funding Strategy to CDFW","chip":{"label":"Financial","tone":"action"},"groupId":"Financial","groupName":"Financial","reqs":[{"id":"req_01M2ESMX94HD08Y0H66AQJBQWF","code":"COA 13.2","name":"Submit Fish Monitoring and Science Funding Strategy","index":["Water operations::Operations monitoring and studies","Mitigation and restoration::Security and funding assurances"]}],"impls":[{"id":"act_01M2G6Y3EPKKKVFDBN1YQGB0HV|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"completed","label":"Completed","comments":0,"evidence":3},{"id":"act_01M2G6Y3EPKKKVFDBN1YQGB0HV|byron-tract-forebay","component":"Byron Tract Forebay","status":"in-progress","label":"In Progress","comments":0,"evidence":0}]}'
          data-f-commitment="COA 13"
          data-f-phase="Implementation Planning"
          data-f-species=""
          data-f-type="Financial"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Covered Fish Monitoring Funding Strategy to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Covered Fish Monitoring Funding Strategy to CDFW"
            >Submit Covered Fish Monitoring Funding Strategy to CDFW</span
          >
        </li>
      </ul>
    </details>
    <details class="bcn-lao__cat" data-lam-group="Monitoring">
      <summary class="bcn-lao__row bcn-lao__row--cat">
        <span class="bcn-lao__chevron" aria-hidden="true"
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
        ><span class="bcn-lao__name">Monitoring</span
        ><span data-lao-count=""
          ><span class="bcn-swcb" aria-label="18 actions available">18</span></span
        >
      </summary>
      <ul class="bcn-lao__opts bcn-lam__opts">
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct and Report Preconstruction SWHA Nest Monitoring"
          data-item='{"memberId":"act_01M2G6Y3H41AKKXC7WAC4X6PQS","id":"act_01M2G6Y3H41AKKXC7WAC4X6PQS","title":"Conduct and Report Preconstruction SWHA Nest Monitoring","chip":{"label":"Monitoring","tone":"action"},"groupId":"Monitoring","groupName":"Monitoring","reqs":[{"id":"req_01M2ESMQ6TQEK3RDVYVY9E6ZBD","code":"COA 11.73","name":"Conduct and Report Baseline SWHA Nest Monitoring","index":["Birds::Nesting birds"]}],"impls":[{"id":"act_01M2G6Y3H41AKKXC7WAC4X6PQS|twin-cities-complex","component":"Twin Cities Complex","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction"
          data-f-species="swainson’s hawk"
          data-f-type="Monitoring"
          data-f-frequency="AsNeeded"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct and Report Preconstruction SWHA Nest Monitoring"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct and Report Preconstruction SWHA Nest Monitoring"
            >Conduct and Report Preconstruction SWHA Nest Monitoring</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct Annual Invasive Plant Survey"
          data-item='{"memberId":"act_01M2G6Y3H41AKKXC7WAC4X6PQP","id":"act_01M2G6Y3H41AKKXC7WAC4X6PQP","title":"Conduct Annual Invasive Plant Survey","chip":{"label":"Monitoring","tone":"action"},"groupId":"Monitoring","groupName":"Monitoring","reqs":[{"id":"req_01M2ESMJV4F9SC76BM0QNDZZVZ","code":"COA 11.19","name":"Conduct Annual Invasive Plant Monitoring Survey","index":["Water::Invasive species"]}],"impls":[{"id":"act_01M2G6Y3H41AKKXC7WAC4X6PQP|twin-cities-complex","component":"Twin Cities Complex","status":"in-progress","label":"In Progress","comments":0,"evidence":6}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Post-Construction|Operations"
          data-f-species=""
          data-f-type="Monitoring"
          data-f-frequency="Recurring"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct Annual Invasive Plant Survey"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct Annual Invasive Plant Survey"
            >Conduct Annual Invasive Plant Survey</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct Annual TRBL Survey During Construction"
          data-item='{"memberId":"act_01M2G6Y3H41AKKXC7WAC4X6PQV","id":"act_01M2G6Y3H41AKKXC7WAC4X6PQV","title":"Conduct Annual TRBL Survey During Construction","chip":{"label":"Monitoring","tone":"action"},"groupId":"Monitoring","groupName":"Monitoring","reqs":[{"id":"req_01M2ESMQT8BHA58JZ110V53F5Q","code":"COA 11.84","name":"Conduct and Report Annual TRBL Surveys During Construction and Maintenance","index":["Birds::Nesting birds"]}],"impls":[{"id":"act_01M2G6Y3H41AKKXC7WAC4X6PQV|twin-cities-complex","component":"Twin Cities Complex","status":"in-progress","label":"In Progress","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Maintenance"
          data-f-species="tricolored blackbird"
          data-f-type="Monitoring"
          data-f-frequency="Recurring"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct Annual TRBL Survey During Construction"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct Annual TRBL Survey During Construction"
            >Conduct Annual TRBL Survey During Construction</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct Baseline and Annual In-Water Mercury Monitoring"
          data-item='{"memberId":"act_01M2G6Y3H41AKKXC7WAC4X6PQQ","id":"act_01M2G6Y3H41AKKXC7WAC4X6PQQ","title":"Conduct Baseline and Annual In-Water Mercury Monitoring","chip":{"label":"Monitoring","tone":"action"},"groupId":"Monitoring","groupName":"Monitoring","reqs":[{"id":"req_01M2ESMKJ962P3Z8GXN62B4VFE","code":"COA 11.30","name":"Conduct Baseline and Annual In-Water Mercury Monitoring","index":["Water::Water quality"]}],"impls":[{"id":"act_01M2G6Y3H41AKKXC7WAC4X6PQQ|byron-tract-forebay","component":"Byron Tract Forebay","status":"completed","label":"Completed","comments":0,"evidence":3},{"id":"act_01M2G6Y3H41AKKXC7WAC4X6PQQ|intake-b-north-delta","component":"Intake B — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":6}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction"
          data-f-species=""
          data-f-type="Monitoring"
          data-f-frequency="Recurring"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct Baseline and Annual In-Water Mercury Monitoring"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct Baseline and Annual In-Water Mercury Monitoring"
            >Conduct Baseline and Annual In-Water Mercury Monitoring</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct Ecological Response Evaluation Studies"
          data-item='{"memberId":"act_01M2G6Y3H3KQ2JH8QCYXWA8G3Q","id":"act_01M2G6Y3H3KQ2JH8QCYXWA8G3Q","title":"Conduct Ecological Response Evaluation Studies","chip":{"label":"Monitoring","tone":"action"},"groupId":"Monitoring","groupName":"Monitoring","reqs":[{"id":"req_01M2ESMG67SBQQ9NGTDVYWB5GJ","code":"COA 10.21","name":"Conduct Ecological Response Evaluation Studies Program","index":["Water operations::Operations monitoring and studies"]},{"id":"req_01M2ESMG7ZSS0VR9VCVNR8Q59C","code":"COA 10.21.1","name":"Develop and Implement Georgiana Slough Hydrodynamics Monitoring","index":["Water operations::Operations monitoring and studies","Water operations::Diversion limits and bypass flows"]},{"id":"req_01M2ESMGBHRNY6JFE0S1HFFP8V","code":"COA 10.21.3","name":"Monitor Food Web and Larval Fish Entrainment During Operations","index":["Water operations::Fish screens","Water operations::Operations monitoring and studies","Water operations::Screen impingement and entrainment"]}],"impls":[{"id":"act_01M2G6Y3H3KQ2JH8QCYXWA8G3Q|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"in-progress","label":"In Progress","comments":2,"evidence":5},{"id":"act_01M2G6Y3H3KQ2JH8QCYXWA8G3Q|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-type="Monitoring"
          data-f-frequency="Ongoing"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct Ecological Response Evaluation Studies"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct Ecological Response Evaluation Studies"
            >Conduct Ecological Response Evaluation Studies</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct Fisheries Evaluation Studies for Covered Fish"
          data-item='{"memberId":"act_01M2G6Y3H3KQ2JH8QCYXWA8G3M","id":"act_01M2G6Y3H3KQ2JH8QCYXWA8G3M","title":"Conduct Fisheries Evaluation Studies for Covered Fish","chip":{"label":"Monitoring","tone":"action"},"groupId":"Monitoring","groupName":"Monitoring","reqs":[{"id":"req_01M2ESMFMEJXZM1HVYK3XV5PQT","code":"COA 10.19","name":"Conduct Fisheries Evaluation Studies for Covered Fish Species","index":["Water operations::Operations monitoring and studies"]},{"id":"req_01M2ESMFP7PJEEVSGSWXDT8J8D","code":"COA 10.19.1","name":"Fund and Implement Migration and Survival Telemetry Study","index":["Water operations::Operations monitoring and studies"]},{"id":"req_01M2ESMFR2KXGWDWNPQA65Y5SX","code":"COA 10.19.2","name":"Capture, Tag, and Survey Predatory Fish Distribution","index":["Water operations::Operations monitoring and studies"]},{"id":"req_01M2ESMFR2KXGWDWNPQA65Y5SY","code":"COA 10.19.2","name":"Measure Predation Rate on Covered Fish Species","index":["Water operations::Operations monitoring and studies"]},{"id":"req_01M2ESMFSWDA12BBS51THCDAHJ","code":"COA 10.19.3","name":"Conduct Far-Field Abundance and Distribution Monitoring","index":["Water operations::Operations monitoring and studies"]},{"id":"req_01M2ESMFSWDA12BBS51THCDAHH","code":"COA 10.19.3","name":"Conduct Near-Field Abundance and Distribution Monitoring","index":["Water operations::Operations monitoring and studies"]}],"impls":[{"id":"act_01M2G6Y3H3KQ2JH8QCYXWA8G3M|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"in-progress","label":"In Progress","comments":0,"evidence":0},{"id":"act_01M2G6Y3H3KQ2JH8QCYXWA8G3M|byron-tract-forebay","component":"Byron Tract Forebay","status":"in-progress","label":"In Progress","comments":0,"evidence":0}]}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species="chinook salmon|black bass|catfish|sacramento pikeminnow|striped bass"
          data-f-type="Monitoring"
          data-f-frequency="Ongoing"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct Fisheries Evaluation Studies for Covered Fish"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct Fisheries Evaluation Studies for Covered Fish"
            >Conduct Fisheries Evaluation Studies for Covered Fish</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct North Delta Intake Fish Screen Hydraulic Tests"
          data-item='{"memberId":"act_01M2G6Y3H3KQ2JH8QCYXWA8G3R","id":"act_01M2G6Y3H3KQ2JH8QCYXWA8G3R","title":"Conduct North Delta Intake Fish Screen Hydraulic Tests","chip":{"label":"Monitoring","tone":"action"},"groupId":"Monitoring","groupName":"Monitoring","reqs":[{"id":"req_01M2ESMHD1WNN0Q544H487855D","code":"COA 10.27","name":"Conduct Scheduled Fish Screen Hydraulic Tests","index":["Water operations::Fish screens"]},{"id":"req_01M2ESMHESPTYZVZHBGTPERHSP","code":"COA 10.27.1","name":"Conduct Fish Screen Testing per NMFS 2023 Guidance","index":["Water operations::Fish screens"]},{"id":"req_01M2ESMSBE1S7VRTS2Y8GMEDSA","code":"COA 11.109","name":"Conduct Regular Hydraulic Testing of Screen Velocities","index":["Water operations::Fish screens"]}],"impls":[{"id":"act_01M2G6Y3H3KQ2JH8QCYXWA8G3R|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3H3KQ2JH8QCYXWA8G3R|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 10|COA 11"
          data-f-phase="Operations"
          data-f-species=""
          data-f-type="Monitoring"
          data-f-frequency="Onetime"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct North Delta Intake Fish Screen Hydraulic Tests"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct North Delta Intake Fish Screen Hydraulic Tests"
            >Conduct North Delta Intake Fish Screen Hydraulic Tests</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct Photo Monitoring of Temporary Impact Areas"
          data-item='{"memberId":"act_01M2G6Y3H41AKKXC7WAC4X6PQN","id":"act_01M2G6Y3H41AKKXC7WAC4X6PQN","title":"Conduct Photo Monitoring of Temporary Impact Areas","chip":{"label":"Monitoring","tone":"action"},"groupId":"Monitoring","groupName":"Monitoring","reqs":[{"id":"req_01M2ESMENP1CJ80TQ2PM1VM14Q","code":"COA 10.6","name":"Document Restoration Success with Quarterly Photos","index":["Habitat protection::Habitat impact tracking","Mitigation and restoration::Restoration"]},{"id":"req_01M2ESMENP1CJ80TQ2PM1VM14P","code":"COA 10.6","name":"Photograph Impact Areas Before and During Construction","index":["Habitat protection::Habitat impact tracking"]}],"impls":[{"id":"act_01M2G6Y3H41AKKXC7WAC4X6PQN|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":2,"evidence":0}]}'
          data-f-commitment="COA 10"
          data-f-phase="Maintenance|Pre-Construction|Construction"
          data-f-species=""
          data-f-type="Monitoring"
          data-f-frequency="Recurring"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct Photo Monitoring of Temporary Impact Areas"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct Photo Monitoring of Temporary Impact Areas"
            >Conduct Photo Monitoring of Temporary Impact Areas</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct Water Quality Evaluation Studies"
          data-item='{"memberId":"act_01M2G6Y3H3KQ2JH8QCYXWA8G3N","id":"act_01M2G6Y3H3KQ2JH8QCYXWA8G3N","title":"Conduct Water Quality Evaluation Studies","chip":{"label":"Monitoring","tone":"action"},"groupId":"Monitoring","groupName":"Monitoring","reqs":[{"id":"req_01M2ESMFVMMT7GYMAYSSJWC4NA","code":"COA 10.20","name":"Conduct Water Quality Evaluation Studies Program","index":["Water::Water quality","Water operations::Operations monitoring and studies"]},{"id":"req_01M2ESMFZ5H9GH44E6MV06FWQV","code":"COA 10.20.2","name":"Implement Sediment and Turbidity Monitoring Through Phase 2 Operations","index":["Water::Water quality","Water operations::Operations monitoring and studies"]},{"id":"req_01M2ESMG0XBZNCYVWPBKFF9KN3","code":"COA 10.20.3","name":"Develop and Implement Harmful Algal Bloom Monitoring Plan","index":["Water::Water quality","Water operations::Operations monitoring and studies"]},{"id":"req_01M2ESMG2PRTZSMCABGAWR0K28","code":"COA 10.20.4","name":"Develop and Implement Selenium Bioaccumulation Monitoring","index":["Water::Water quality","Water operations::Operations monitoring and studies"]},{"id":"req_01M2ESMG4EDSA27H7ZGNA9A8PQ","code":"COA 10.20.5","name":"Develop and Implement Mercury Monitoring Study","index":["Water::Water quality","Water operations::Operations monitoring and studies"]}],"impls":[{"id":"act_01M2G6Y3H3KQ2JH8QCYXWA8G3N|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"in-progress","label":"In Progress","comments":2,"evidence":4},{"id":"act_01M2G6Y3H3KQ2JH8QCYXWA8G3N|byron-tract-forebay","component":"Byron Tract Forebay","status":"completed","label":"Completed","comments":0,"evidence":2}]}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-type="Monitoring"
          data-f-frequency="Ongoing"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct Water Quality Evaluation Studies"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct Water Quality Evaluation Studies"
            >Conduct Water Quality Evaluation Studies</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Implement CDFW-Approved Subsurface Vibration Study"
          data-item='{"memberId":"act_01M2G6Y3H29GVGPNMNFZ3NX9WZ","id":"act_01M2G6Y3H29GVGPNMNFZ3NX9WZ","title":"Implement CDFW-Approved Subsurface Vibration Study","chip":{"label":"Monitoring","tone":"action"},"groupId":"Monitoring","groupName":"Monitoring","reqs":[{"id":"req_01M2ESMFBG0N35H82TF02GZ3ZM","code":"COA 10.17","name":"Implement Approved Vibration Study Before Covered Activities","index":["Noise and vibration::Vibration"]}],"impls":[{"id":"act_01M2G6Y3H29GVGPNMNFZ3NX9WZ|byron-tract-forebay","component":"Byron Tract Forebay","status":"on-hold","label":"On Hold","comments":3,"evidence":1}]}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction"
          data-f-species=""
          data-f-type="Monitoring"
          data-f-frequency="Onetime"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Implement CDFW-Approved Subsurface Vibration Study"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Implement CDFW-Approved Subsurface Vibration Study"
            >Implement CDFW-Approved Subsurface Vibration Study</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Implement Covered Fish Species Monitoring and Science Program"
          data-item='{"memberId":"act_01M2G6Y3H3KQ2JH8QCYXWA8G3K","id":"act_01M2G6Y3H3KQ2JH8QCYXWA8G3K","title":"Implement Covered Fish Species Monitoring and Science Program","chip":{"label":"Monitoring","tone":"action"},"groupId":"Monitoring","groupName":"Monitoring","reqs":[{"id":"req_01M2ESMFDD89X51ER81SA5A47Y","code":"COA 10.18","name":"Conduct Covered Fish Species Monitoring Across Project Phases","index":["Water operations::Operations monitoring and studies"]}],"impls":[{"id":"act_01M2G6Y3H3KQ2JH8QCYXWA8G3K|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3H3KQ2JH8QCYXWA8G3K|byron-tract-forebay","component":"Byron Tract Forebay","status":"in-progress","label":"In Progress","comments":0,"evidence":6}]}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-type="Monitoring"
          data-f-frequency="Ongoing"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Implement Covered Fish Species Monitoring and Science Program"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Implement Covered Fish Species Monitoring and Science Program"
            >Implement Covered Fish Species Monitoring and Science Program</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Implement Fish Screen Impingement Study"
          data-item='{"memberId":"act_01M2G6Y3H41AKKXC7WAC4X6PQM","id":"act_01M2G6Y3H41AKKXC7WAC4X6PQM","title":"Implement Fish Screen Impingement Study","chip":{"label":"Monitoring","tone":"action"},"groupId":"Monitoring","groupName":"Monitoring","reqs":[{"id":"req_01M2ESMHQM4Y8XNWWGJWTJ3P5N","code":"COA 10.30","name":"Implement Screen Impingement Study During Operations","index":["Water operations::Fish screens","Water operations::Screen impingement and entrainment"]}],"impls":[{"id":"act_01M2G6Y3H41AKKXC7WAC4X6PQM|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"in-progress","label":"In Progress","comments":0,"evidence":0},{"id":"act_01M2G6Y3H41AKKXC7WAC4X6PQM|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3H41AKKXC7WAC4X6PQM|intake-b-north-delta","component":"Intake B — North Delta","status":"completed","label":"Completed","comments":0,"evidence":1}]}'
          data-f-commitment="COA 10"
          data-f-phase="Operations"
          data-f-species=""
          data-f-type="Monitoring"
          data-f-frequency="Ongoing"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Implement Fish Screen Impingement Study"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Implement Fish Screen Impingement Study"
            >Implement Fish Screen Impingement Study</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Inspect Sediment Deposition at Intake Tee Screens Annually"
          data-item='{"memberId":"act_01M2G6Y3H41AKKXC7WAC4X6PQK","id":"act_01M2G6Y3H41AKKXC7WAC4X6PQK","title":"Inspect Sediment Deposition at Intake Tee Screens Annually","chip":{"label":"Monitoring","tone":"action"},"groupId":"Monitoring","groupName":"Monitoring","reqs":[{"id":"req_01M2ESMHNV33KRJW34PYX96NJ9","code":"COA 10.29","name":"Inspect Sediment Deposition at Intake Tee Screens","index":["Water operations::Fish screens","Water operations::Operations monitoring and studies"]}],"impls":[{"id":"act_01M2G6Y3H41AKKXC7WAC4X6PQK|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"in-progress","label":"In Progress","comments":0,"evidence":0},{"id":"act_01M2G6Y3H41AKKXC7WAC4X6PQK|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3H41AKKXC7WAC4X6PQK|intake-b-north-delta","component":"Intake B — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":4}]}'
          data-f-commitment="COA 10"
          data-f-phase="Operations|Maintenance"
          data-f-species=""
          data-f-type="Monitoring"
          data-f-frequency="Recurring"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Inspect Sediment Deposition at Intake Tee Screens Annually"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Inspect Sediment Deposition at Intake Tee Screens Annually"
            >Inspect Sediment Deposition at Intake Tee Screens Annually</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Install Real-Time Water Quality Monitoring Station"
          data-item='{"memberId":"act_01M2G6Y3H3KQ2JH8QCYXWA8G3P","id":"act_01M2G6Y3H3KQ2JH8QCYXWA8G3P","title":"Install Real-Time Water Quality Monitoring Station","chip":{"label":"Monitoring","tone":"action"},"groupId":"Monitoring","groupName":"Monitoring","reqs":[{"id":"req_01M2ESMFXACJWZR5W6GS2G1D3B","code":"COA 10.20.1","name":"Install and Maintain Real-Time Water Quality Monitoring Station","index":["Water::Water quality","Water operations::Operations coordination and data"]}],"impls":[{"id":"act_01M2G6Y3H3KQ2JH8QCYXWA8G3P|byron-tract-forebay","component":"Byron Tract Forebay","status":"completed","label":"Completed","comments":0,"evidence":4}]}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-type="Monitoring"
          data-f-frequency="Onetime"
          data-f-deliverable="installation"
        >
          <esa-checkbox
            size="sm"
            aria-label="Install Real-Time Water Quality Monitoring Station"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Install Real-Time Water Quality Monitoring Station"
            >Install Real-Time Water Quality Monitoring Station</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Notify Designated Representative of SWHA Nest Distress"
          data-item='{"memberId":"act_01M2G6Y3H41AKKXC7WAC4X6PQT","id":"act_01M2G6Y3H41AKKXC7WAC4X6PQT","title":"Notify Designated Representative of SWHA Nest Distress","chip":{"label":"Monitoring","tone":"action"},"groupId":"Monitoring","groupName":"Monitoring","reqs":[{"id":"req_01M2ESMQABV7ZXHTW7CASVJ9Q5","code":"COA 11.75","name":"Stop Work and Notify Designated Representative of SWHA Distress","index":["Birds::Nesting birds"]}],"impls":[{"id":"act_01M2G6Y3H41AKKXC7WAC4X6PQT|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"overdue","label":"Overdue","comments":0,"evidence":2},{"id":"act_01M2G6Y3H41AKKXC7WAC4X6PQT|twin-cities-complex","component":"Twin Cities Complex","status":"on-hold","label":"On Hold","comments":0,"evidence":3}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="swainson’s hawk"
          data-f-type="Monitoring"
          data-f-frequency="AsNeeded"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Notify Designated Representative of SWHA Nest Distress"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notify Designated Representative of SWHA Nest Distress"
            >Notify Designated Representative of SWHA Nest Distress</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Retest Fish Screen Hydraulics After a Qualifying Event"
          data-item='{"memberId":"act_01M2G6Y3H41AKKXC7WAC4X6PQJ","id":"act_01M2G6Y3H41AKKXC7WAC4X6PQJ","title":"Retest Fish Screen Hydraulics After a Qualifying Event","chip":{"label":"Monitoring","tone":"action"},"groupId":"Monitoring","groupName":"Monitoring","reqs":[{"id":"req_01M2ESMHD1WNN0Q544H487855E","code":"COA 10.27","name":"Retest Fish Screens After a Qualifying Event","index":["Water operations::Fish screens"]}],"impls":[{"id":"act_01M2G6Y3H41AKKXC7WAC4X6PQJ|byron-tract-forebay","component":"Byron Tract Forebay","status":"overdue","label":"Overdue","comments":0,"evidence":3},{"id":"act_01M2G6Y3H41AKKXC7WAC4X6PQJ|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 10"
          data-f-phase="Operations|Maintenance"
          data-f-species=""
          data-f-type="Monitoring"
          data-f-frequency="AsNeeded"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Retest Fish Screen Hydraulics After a Qualifying Event"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Retest Fish Screen Hydraulics After a Qualifying Event"
            >Retest Fish Screen Hydraulics After a Qualifying Event</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Survey Riverbank and Vegetation Conditions at Barge Sites"
          data-item='{"memberId":"act_01M2G6Y3H41AKKXC7WAC4X6PQR","id":"act_01M2G6Y3H41AKKXC7WAC4X6PQR","title":"Survey Riverbank and Vegetation Conditions at Barge Sites","chip":{"label":"Monitoring","tone":"action"},"groupId":"Monitoring","groupName":"Monitoring","reqs":[{"id":"req_01M2ESMKYQ8AM5AR4SCE24X1JE","code":"COA 11.36","name":"Survey Riverbank and Vegetation Conditions at Barge Sites","index":["Water::Barge and vessel operations","Habitat protection::Habitat impact tracking"]}],"impls":[{"id":"act_01M2G6Y3H41AKKXC7WAC4X6PQR|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3H41AKKXC7WAC4X6PQR|byron-tract-forebay","component":"Byron Tract Forebay","status":"completed","label":"Completed","comments":0,"evidence":3},{"id":"act_01M2G6Y3H41AKKXC7WAC4X6PQR|intake-b-north-delta","component":"Intake B — North Delta","status":"completed","label":"Completed","comments":0,"evidence":6}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Post-Construction"
          data-f-species=""
          data-f-type="Monitoring"
          data-f-frequency="Recurring"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Survey Riverbank and Vegetation Conditions at Barge Sites"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Survey Riverbank and Vegetation Conditions at Barge Sites"
            >Survey Riverbank and Vegetation Conditions at Barge Sites</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Verify Impact Multipliers in the Annual Status Report"
          data-item='{"memberId":"act_01M2G6Y3H41AKKXC7WAC4X6PQW","id":"act_01M2G6Y3H41AKKXC7WAC4X6PQW","title":"Verify Impact Multipliers in the Annual Status Report","chip":{"label":"Monitoring","tone":"action"},"groupId":"Monitoring","groupName":"Monitoring","reqs":[{"id":"req_01M2ESMTM6F7R8AKVMKB6H58V0","code":"COA 12.1","name":"Verify Transmission Line and Preconstruction Impact Multipliers","index":["Habitat protection::Habitat impact tracking","Mitigation and restoration::Mitigation lands"]}],"impls":[{"id":"act_01M2G6Y3H41AKKXC7WAC4X6PQW|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"completed","label":"Completed","comments":0,"evidence":6},{"id":"act_01M2G6Y3H41AKKXC7WAC4X6PQW|twin-cities-complex","component":"Twin Cities Complex","status":"completed","label":"Completed","comments":2,"evidence":2}]}'
          data-f-commitment="COA 12"
          data-f-phase="Pre-Construction|Construction"
          data-f-species=""
          data-f-type="Monitoring"
          data-f-frequency="Recurring"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Verify Impact Multipliers in the Annual Status Report"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Verify Impact Multipliers in the Annual Status Report"
            >Verify Impact Multipliers in the Annual Status Report</span
          >
        </li>
      </ul>
    </details>
    <details class="bcn-lao__cat" data-lam-group="Other">
      <summary class="bcn-lao__row bcn-lao__row--cat">
        <span class="bcn-lao__chevron" aria-hidden="true"
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
        ><span class="bcn-lao__name">Other</span
        ><span data-lao-count=""
          ><span class="bcn-swcb" aria-label="1 actions available">1</span></span
        >
      </summary>
      <ul class="bcn-lao__opts bcn-lam__opts">
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Incorporate Litter and Erosion Control Language in Contractor Contracts"
          data-item='{"memberId":"act_01M2G6Y3KFHG8TXPSP55F7CZQA","id":"act_01M2G6Y3KFHG8TXPSP55F7CZQA","title":"Incorporate Litter and Erosion Control Language in Contractor Contracts","chip":{"label":"Other","tone":"action"},"groupId":"Other","groupName":"Other","reqs":[{"id":"req_01M2ESMK0E6ZRR9CKPYAD4WQJH","code":"COA 11.20","name":"Include Litter Compliance Language in Contractor Contracts","index":["Site conduct::Trash and food waste"]},{"id":"req_01M2ESMKD0JHB00RJNR3WFEE56","code":"COA 11.27","name":"Include Erosion Control Material Standard in Contractor Bid Specifications","index":["Water::Erosion and sediment control"]}],"impls":[{"id":"act_01M2G6Y3KFHG8TXPSP55F7CZQA|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3KFHG8TXPSP55F7CZQA|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3KFHG8TXPSP55F7CZQA|intake-c-north-delta","component":"Intake C — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":1}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Construction|Maintenance"
          data-f-species=""
          data-f-type="Other"
          data-f-frequency="Onetime"
          data-f-deliverable="other"
        >
          <esa-checkbox
            size="sm"
            aria-label="Incorporate Litter and Erosion Control Language in Contractor Contracts"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Incorporate Litter and Erosion Control Language in Contractor Contracts"
            >Incorporate Litter and Erosion Control Language in Contractor Contracts</span
          >
        </li>
      </ul>
    </details>
    <details class="bcn-lao__cat" data-lam-group="Plan">
      <summary class="bcn-lao__row bcn-lao__row--cat">
        <span class="bcn-lao__chevron" aria-hidden="true"
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
        ><span class="bcn-lao__name">Plan</span
        ><span data-lao-count=""
          ><span class="bcn-swcb" aria-label="45 actions available">45</span></span
        >
      </summary>
      <ul class="bcn-lao__opts bcn-lam__opts">
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Develop Covered Fish Species Abundance and Distribution Study Plan"
          data-item='{"memberId":"act_01M2G6Y3NJADVCJBHXD7RXW12E","id":"act_01M2G6Y3NJADVCJBHXD7RXW12E","title":"Develop Covered Fish Species Abundance and Distribution Study Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMFSVPYFXAKH7EGNG5276","code":"COA 10.19.3","name":"Develop Covered Fish Species Abundance and Distribution Study Plan","index":["Water operations::Operations monitoring and studies"]}],"impls":[{"id":"act_01M2G6Y3NJADVCJBHXD7RXW12E|twin-cities-complex","component":"Twin Cities Complex","status":"in-progress","label":"In Progress","comments":0,"evidence":4}]}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency=""
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Develop Covered Fish Species Abundance and Distribution Study Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Develop Covered Fish Species Abundance and Distribution Study Plan"
            >Develop Covered Fish Species Abundance and Distribution Study Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Develop Environmental Compliance Monitoring Plan per Site"
          data-item='{"memberId":"act_01M2G6Y3NH29YN1B50VPENFKBD","id":"act_01M2G6Y3NH29YN1B50VPENFKBD","title":"Develop Environmental Compliance Monitoring Plan per Site","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMEYQKN0BMMHCSCGJAM12","code":"COA 10.11","name":"Develop Environmental Compliance Monitoring Plan","index":["Site conduct::Compliance inspections and records"]}],"impls":[{"id":"act_01M2G6Y3NH29YN1B50VPENFKBD|intake-c-north-delta","component":"Intake C — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":6},{"id":"act_01M2G6Y3NH29YN1B50VPENFKBD|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":3,"evidence":0}]}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Develop Environmental Compliance Monitoring Plan per Site"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Develop Environmental Compliance Monitoring Plan per Site"
            >Develop Environmental Compliance Monitoring Plan per Site</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Develop Fish Guidance System Study Plan"
          data-item='{"memberId":"act_01M2G6Y3NJADVCJBHXD7RXW12K","id":"act_01M2G6Y3NJADVCJBHXD7RXW12K","title":"Develop Fish Guidance System Study Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMHB8XDGERVYJ54SWK0BB","code":"COA 10.26","name":"Develop Fish Guidance System Study Plan","index":["Water operations::Fish screens","Water operations::Fish guidance systems"]}],"impls":[{"id":"act_01M2G6Y3NJADVCJBHXD7RXW12K|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"in-progress","label":"In Progress","comments":0,"evidence":0},{"id":"act_01M2G6Y3NJADVCJBHXD7RXW12K|byron-tract-forebay","component":"Byron Tract Forebay","status":"on-hold","label":"On Hold","comments":0,"evidence":6},{"id":"act_01M2G6Y3NJADVCJBHXD7RXW12K|intake-b-north-delta","component":"Intake B — North Delta","status":"completed","label":"Completed","comments":1,"evidence":1}]}'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency=""
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Develop Fish Guidance System Study Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Develop Fish Guidance System Study Plan"
            >Develop Fish Guidance System Study Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Develop Hazardous Materials Management Plan"
          data-item='{"memberId":"act_01M2G6Y3NK6K0BZ6XYWCKNWKN0","id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKN0","title":"Develop Hazardous Materials Management Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMK264B6YJSTX7W90NN3M","code":"COA 11.21","name":"Develop Hazardous Materials Management Plan Before Covered Activities","index":["Hazards::Hazardous materials"]}],"impls":[{"id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKN0|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"on-hold","label":"On Hold","comments":0,"evidence":1}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Develop Hazardous Materials Management Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Develop Hazardous Materials Management Plan"
            >Develop Hazardous Materials Management Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Develop Hydraulic Data Plan for Operating Criteria"
          data-item='{"memberId":"act_01M2G6Y3NJADVCJBHXD7RXW12F","id":"act_01M2G6Y3NJADVCJBHXD7RXW12F","title":"Develop Hydraulic Data Plan for Operating Criteria","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMFXB7WQBC5CM212M571M","code":"COA 10.20.1","name":"Develop Hydraulic Data Plan for Operating Criteria","index":["Water operations::Operations coordination and data","Water operations::Diversion limits and bypass flows"]},{"id":"req_01M2ESMSBE1S7VRTS2Y8GMEDSB","code":"COA 11.109","name":"Develop Hydraulic Data Plan With CDFW","index":["Water operations::Operations coordination and data","Water operations::Diversion limits and bypass flows"]}],"impls":[{"id":"act_01M2G6Y3NJADVCJBHXD7RXW12F|twin-cities-complex","component":"Twin Cities Complex","status":"overdue","label":"Overdue","comments":0,"evidence":4}]}'
          data-f-commitment="COA 10|COA 11"
          data-f-phase="Pre-Construction|Operations|Implementation Planning"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency=""
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Develop Hydraulic Data Plan for Operating Criteria"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Develop Hydraulic Data Plan for Operating Criteria"
            >Develop Hydraulic Data Plan for Operating Criteria</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Develop Migration and Survival Study Plan"
          data-item='{"memberId":"act_01M2G6Y3NJADVCJBHXD7RXW12C","id":"act_01M2G6Y3NJADVCJBHXD7RXW12C","title":"Develop Migration and Survival Study Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMFP7PJEEVSGSWXDT8J8C","code":"COA 10.19.1","name":"Develop Migration and Survival Study Plan","index":["Water operations::Operations monitoring and studies"]}],"impls":[{"id":"act_01M2G6Y3NJADVCJBHXD7RXW12C|twin-cities-complex","component":"Twin Cities Complex","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning"
          data-f-species="chinook salmon"
          data-f-type="Plan"
          data-f-frequency=""
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Develop Migration and Survival Study Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Develop Migration and Survival Study Plan"
            >Develop Migration and Survival Study Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Develop Predation Study Plan"
          data-item='{"memberId":"act_01M2G6Y3NJADVCJBHXD7RXW12D","id":"act_01M2G6Y3NJADVCJBHXD7RXW12D","title":"Develop Predation Study Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMFR2KXGWDWNPQA65Y5SW","code":"COA 10.19.2","name":"Develop Predation Study Plan","index":["Water operations::Operations monitoring and studies"]}],"impls":[{"id":"act_01M2G6Y3NJADVCJBHXD7RXW12D|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"in-progress","label":"In Progress","comments":0,"evidence":1},{"id":"act_01M2G6Y3NJADVCJBHXD7RXW12D|twin-cities-complex","component":"Twin Cities Complex","status":"completed","label":"Completed","comments":0,"evidence":4}]}'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning"
          data-f-species="chinook salmon"
          data-f-type="Plan"
          data-f-frequency=""
          data-f-deliverable="plan"
        >
          <esa-checkbox size="sm" aria-label="Develop Predation Study Plan"></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Develop Predation Study Plan"
            >Develop Predation Study Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Develop Real-Time Information Sharing Process with CDFW"
          data-item='{"memberId":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMX","id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMX","title":"Develop Real-Time Information Sharing Process with CDFW","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMSZ08PDFV1CSZRT18R6W","code":"COA 11.113","name":"Develop and Implement Real-time Information Sharing Process with CDFW","index":["Water operations::Operations coordination and data"]}],"impls":[{"id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMX|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":1,"evidence":0},{"id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMX|intake-b-north-delta","component":"Intake B — North Delta","status":"overdue","label":"Overdue","comments":1,"evidence":5},{"id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMX|intake-c-north-delta","component":"Intake C — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":4}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Operations"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Develop Real-Time Information Sharing Process with CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Develop Real-Time Information Sharing Process with CDFW"
            >Develop Real-Time Information Sharing Process with CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Develop Sediment and Turbidity Monitoring Study Plan"
          data-item='{"memberId":"act_01M2G6Y3NJADVCJBHXD7RXW12G","id":"act_01M2G6Y3NJADVCJBHXD7RXW12G","title":"Develop Sediment and Turbidity Monitoring Study Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMFZ5H9GH44E6MV06FWQT","code":"COA 10.20.2","name":"Develop Sediment and Turbidity Monitoring Study Plan","index":["Water::Water quality","Water operations::Operations monitoring and studies"]}],"impls":[{"id":"act_01M2G6Y3NJADVCJBHXD7RXW12G|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"completed","label":"Completed","comments":0,"evidence":4},{"id":"act_01M2G6Y3NJADVCJBHXD7RXW12G|byron-tract-forebay","component":"Byron Tract Forebay","status":"overdue","label":"Overdue","comments":3,"evidence":0},{"id":"act_01M2G6Y3NJADVCJBHXD7RXW12G|intake-b-north-delta","component":"Intake B — North Delta","status":"on-hold","label":"On Hold","comments":0,"evidence":3}]}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency=""
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Develop Sediment and Turbidity Monitoring Study Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Develop Sediment and Turbidity Monitoring Study Plan"
            >Develop Sediment and Turbidity Monitoring Study Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Develop Sediment Reintroduction Plan"
          data-item='{"memberId":"act_01M2G6Y3NJADVCJBHXD7RXW12H","id":"act_01M2G6Y3NJADVCJBHXD7RXW12H","title":"Develop Sediment Reintroduction Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMFZ5H9GH44E6MV06FWQW","code":"COA 10.20.2","name":"Develop and Implement Sediment Reintroduction Plan if Criteria Unmet","index":["Water::Water quality","Water operations::Operations monitoring and studies"]}],"impls":[{"id":"act_01M2G6Y3NJADVCJBHXD7RXW12H|byron-tract-forebay","component":"Byron Tract Forebay","status":"in-progress","label":"In Progress","comments":0,"evidence":5},{"id":"act_01M2G6Y3NJADVCJBHXD7RXW12H|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 10"
          data-f-phase="Operations"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="AsNeeded"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Develop Sediment Reintroduction Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Develop Sediment Reintroduction Plan"
            >Develop Sediment Reintroduction Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Develop Spill Prevention, Control, and Countermeasure Plan"
          data-item='{"memberId":"act_01M2G6Y3NK6K0BZ6XYWCKNWKN1","id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKN1","title":"Develop Spill Prevention, Control, and Countermeasure Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMK3ZJQ9BHNEKAKFQY2VB","code":"COA 11.22","name":"Address Site-Specific Spill Prevention and Notification Actions","index":["Hazards::Spill prevention and response"]},{"id":"req_01M2ESMK3YTNATKZ8DGM1P6DTC","code":"COA 11.22","name":"Develop SPCCP and Ensure Stormwater Permit Compliance","index":["Hazards::Spill prevention and response","Water::Stormwater and discharges"]},{"id":"req_01M2ESMK3ZJQ9BHNEKAKFQY2VC","code":"COA 11.22","name":"Scope SPCCP to Oil and Petroleum-Based Products","index":["Hazards::Spill prevention and response","Hazards::Hazardous materials"]}],"impls":[{"id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKN1|intake-c-north-delta","component":"Intake C — North Delta","status":"completed","label":"Completed","comments":0,"evidence":2},{"id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKN1|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"in-progress","label":"In Progress","comments":2,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Construction"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency=""
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Develop Spill Prevention, Control, and Countermeasure Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Develop Spill Prevention, Control, and Countermeasure Plan"
            >Develop Spill Prevention, Control, and Countermeasure Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Develop Spoils and Dredged Material Disposal Plan"
          data-item='{"memberId":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMY","id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMY","title":"Develop Spoils and Dredged Material Disposal Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMJKYQ156WGZ62C1YQYFS","code":"COA 11.16","name":"Develop Spoils, RTM and Dredged Material Disposal Plan","index":["Water::Erosion and sediment control","Water::Spoils and dredged material","Hazards::Hazardous materials","Water::Water quality"]}],"impls":[{"id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMY|intake-b-north-delta","component":"Intake B — North Delta","status":"overdue","label":"Overdue","comments":0,"evidence":1},{"id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMY|intake-c-north-delta","component":"Intake C — North Delta","status":"not-started","label":"Not Started","comments":1,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Develop Spoils and Dredged Material Disposal Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Develop Spoils and Dredged Material Disposal Plan"
            >Develop Spoils and Dredged Material Disposal Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Develop Temporary Impact Restoration Schedule"
          data-item='{"memberId":"act_01M2G6Y3NPMSXZQMQNBGV7AENK","id":"act_01M2G6Y3NPMSXZQMQNBGV7AENK","title":"Develop Temporary Impact Restoration Schedule","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMTV61PPK7RWYVRPSSH96","code":"COA 12.3.2","name":"Develop Temporary Impact Restoration Schedule","index":["Mitigation and restoration::Restoration"]}],"impls":[{"id":"act_01M2G6Y3NPMSXZQMQNBGV7AENK|twin-cities-complex","component":"Twin Cities Complex","status":"overdue","label":"Overdue","comments":0,"evidence":0},{"id":"act_01M2G6Y3NPMSXZQMQNBGV7AENK|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 12"
          data-f-phase="Pre-Construction"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Develop Temporary Impact Restoration Schedule"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Develop Temporary Impact Restoration Schedule"
            >Develop Temporary Impact Restoration Schedule</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Prepare HM Lands Management Plan"
          data-item='{"memberId":"act_01M2G6Y3NPMSXZQMQNBGV7AENH","id":"act_01M2G6Y3NPMSXZQMQNBGV7AENH","title":"Prepare HM Lands Management Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMWG6VA04DKPWKMX051FF","code":"COA 12.11.6","name":"Prepare Final Management Plan for HM Lands","index":["Mitigation and restoration::Mitigation lands"]}],"impls":[{"id":"act_01M2G6Y3NPMSXZQMQNBGV7AENH|twin-cities-complex","component":"Twin Cities Complex","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3NPMSXZQMQNBGV7AENH|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":2,"evidence":0}]}'
          data-f-commitment="COA 12"
          data-f-phase="Pre-Construction|Construction"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Prepare HM Lands Management Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Prepare HM Lands Management Plan"
            >Prepare HM Lands Management Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Prepare Stormwater Pollution Prevention Plan"
          data-item='{"memberId":"act_01M2G6Y3NK6K0BZ6XYWCKNWKN4","id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKN4","title":"Prepare Stormwater Pollution Prevention Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMK9F910VNEH5Y3ZKSX80","code":"COA 11.25","name":"Address Core SWPPP Control Measure Categories","index":["Water::Stormwater and discharges","Water::Erosion and sediment control","Hazards::Hazardous materials"]},{"id":"req_01M2ESMK9F910VNEH5Y3ZKSX82","code":"COA 11.25","name":"Describe Site Conditions, Schedules, Materials, and Training in SWPPP","index":["Water::Stormwater and discharges","People and qualifications::Worker training"]},{"id":"req_01M2ESMK9EW9X7X4YSN8VHGYXC","code":"COA 11.25","name":"Ensure Stormwater Permit Compliance and Prepare SWPPP","index":["Water::Stormwater and discharges","Water::Erosion and sediment control"]},{"id":"req_01M2ESMK9F910VNEH5Y3ZKSX7Z","code":"COA 11.25","name":"Meet SWRCB and Central Valley RWQCB Stormwater Requirements","index":["Water::Stormwater and discharges"]}],"impls":[{"id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKN4|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"completed","label":"Completed","comments":0,"evidence":6},{"id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKN4|twin-cities-complex","component":"Twin Cities Complex","status":"in-progress","label":"In Progress","comments":0,"evidence":0},{"id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKN4|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"completed","label":"Completed","comments":2,"evidence":1}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Construction"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency=""
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Prepare Stormwater Pollution Prevention Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Prepare Stormwater Pollution Prevention Plan"
            >Prepare Stormwater Pollution Prevention Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Barge Operations Plan"
          data-item='{"memberId":"act_01M2G6Y3NNJMTS3JZDQQZNRKEQ","id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEQ","title":"Submit Barge Operations Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMKYNZZAGM46HKFBZYF2R","code":"COA 11.36","name":"Develop and Obtain CDFW Approval of Barge Operations Plan","index":["Water::Barge and vessel operations"]}],"impls":[{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEQ|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEQ|twin-cities-complex","component":"Twin Cities Complex","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEQ|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"in-progress","label":"In Progress","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox size="sm" aria-label="Submit Barge Operations Plan"></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Barge Operations Plan"
            >Submit Barge Operations Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Bird Strike Diverter Location and Type Plan"
          data-item='{"memberId":"act_01M2G6Y3NPMSXZQMQNBGV7AENM","id":"act_01M2G6Y3NPMSXZQMQNBGV7AENM","title":"Submit Bird Strike Diverter Location and Type Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMV0G2RPZFHW44PCZ3G5Z","code":"COA 12.4","name":"Submit Bird Strike Diverter Plan for CDFW Approval","index":["Birds::Nesting birds","Birds::Bird strike diverters","Site conduct::Facility design and siting"]}],"impls":[{"id":"act_01M2G6Y3NPMSXZQMQNBGV7AENM|byron-tract-forebay","component":"Byron Tract Forebay","status":"completed","label":"Completed","comments":0,"evidence":3},{"id":"act_01M2G6Y3NPMSXZQMQNBGV7AENM|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3NPMSXZQMQNBGV7AENM|intake-c-north-delta","component":"Intake C — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":0}]}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species="swainson’s hawk|tricolored blackbird"
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Bird Strike Diverter Location and Type Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Bird Strike Diverter Location and Type Plan"
            >Submit Bird Strike Diverter Location and Type Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit CBB Buffer Zone Design Plan"
          data-item='{"memberId":"act_01M2G6Y3NPMSXZQMQNBGV7AENG","id":"act_01M2G6Y3NPMSXZQMQNBGV7AENG","title":"Submit CBB Buffer Zone Design Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMRR1S26EXFBWQDFTE589","code":"COA 11.98","name":"Submit CBB Buffer Zone Design Plan to CDFW","index":["Plants and invertebrates::Bumble bees and monarchs"]}],"impls":[{"id":"act_01M2G6Y3NPMSXZQMQNBGV7AENG|twin-cities-complex","component":"Twin Cities Complex","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3NPMSXZQMQNBGV7AENG|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"overdue","label":"Overdue","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species="crotch bumble bee"
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit CBB Buffer Zone Design Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit CBB Buffer Zone Design Plan"
            >Submit CBB Buffer Zone Design Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit CBB Nest Relocation Plan"
          data-item='{"memberId":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMT","id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMT","title":"Submit CBB Nest Relocation Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMRZ2SQA04DKYQWZHN3NX","code":"COA 11.102","name":"Develop and Submit CBB Nest Relocation Plan","index":["Plants and invertebrates::Bumble bees and monarchs"]}],"impls":[{"id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMT|byron-tract-forebay","component":"Byron Tract Forebay","status":"in-progress","label":"In Progress","comments":0,"evidence":0},{"id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMT|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMT|intake-c-north-delta","component":"Intake C — North Delta","status":"completed","label":"Completed","comments":0,"evidence":5}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species="crotch bumble bee"
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit CBB Nest Relocation Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit CBB Nest Relocation Plan"
            >Submit CBB Nest Relocation Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Covered Fish Species Monitoring and Science Plan"
          data-item='{"memberId":"act_01M2G6Y3NJADVCJBHXD7RXW12B","id":"act_01M2G6Y3NJADVCJBHXD7RXW12B","title":"Submit Covered Fish Species Monitoring and Science Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMFDD89X51ER81SA5A47W","code":"COA 10.18","name":"Develop Draft Covered Fish Species Monitoring and Science Plan","index":["Water operations::Operations monitoring and studies"]},{"id":"req_01M2ESMFDD89X51ER81SA5A47X","code":"COA 10.18","name":"Submit Final Fish Monitoring Plan for CDFW Approval","index":["Water operations::Operations monitoring and studies","Agency reporting and approvals::Agency approvals"]}],"impls":[{"id":"act_01M2G6Y3NJADVCJBHXD7RXW12B|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3NJADVCJBHXD7RXW12B|twin-cities-complex","component":"Twin Cities Complex","status":"completed","label":"Completed","comments":0,"evidence":5}]}'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Covered Fish Species Monitoring and Science Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Covered Fish Species Monitoring and Science Plan"
            >Submit Covered Fish Species Monitoring and Science Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit CTS Relocation Plan"
          data-item='{"memberId":"act_01M2G6Y3NNJMTS3JZDQQZNRKEW","id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEW","title":"Submit CTS Relocation Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMN2YQ60Y2FFS086MKP75","code":"COA 11.51","name":"Prepare and Submit CTS Mortality Reduction and Relocation Plan","index":["Amphibians and reptiles::Amphibians","Habitat protection::Wildlife encounters and handling"]}],"impls":[{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEW|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species="california tiger salamander"
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox size="sm" aria-label="Submit CTS Relocation Plan"></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit CTS Relocation Plan"
            >Submit CTS Relocation Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Dewatering Plan"
          data-item='{"memberId":"act_01M2G6Y3NNJMTS3JZDQQZNRKER","id":"act_01M2G6Y3NNJMTS3JZDQQZNRKER","title":"Submit Dewatering Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMM0EM81PTXW51E1T9ERW","code":"COA 11.37","name":"Develop and Obtain CDFW Approval of Dewatering Plan","index":["Water::Dewatering"]}],"impls":[{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKER|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKER|twin-cities-complex","component":"Twin Cities Complex","status":"overdue","label":"Overdue","comments":0,"evidence":0},{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKER|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox size="sm" aria-label="Submit Dewatering Plan"></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Dewatering Plan"
            >Submit Dewatering Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Erosion and Sediment Control Plan"
          data-item='{"memberId":"act_01M2G6Y3NMGVH2VJSMJC7KKSH7","id":"act_01M2G6Y3NMGVH2VJSMJC7KKSH7","title":"Submit Erosion and Sediment Control Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMKB7XTCSNNGN1FT760N3","code":"COA 11.26","name":"Submit and Implement Site-Specific Erosion and Sediment Control Plan","index":["Water::Erosion and sediment control"]}],"impls":[{"id":"act_01M2G6Y3NMGVH2VJSMJC7KKSH7|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3NMGVH2VJSMJC7KKSH7|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3NMGVH2VJSMJC7KKSH7|twin-cities-complex","component":"Twin Cities Complex","status":"completed","label":"Completed","comments":0,"evidence":4}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Construction"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Erosion and Sediment Control Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Erosion and Sediment Control Plan"
            >Submit Erosion and Sediment Control Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Fertilizer Application Plan"
          data-item='{"memberId":"act_01M2G6Y3NNJMTS3JZDQQZNRKEX","id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEX","title":"Submit Fertilizer Application Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMJ2AQJCN2G7VR9PBB3JB","code":"COA 11.6","name":"Prepare and Submit Fertilizer Application Plan to CDFW","index":["Hazards::Pesticides and rodenticides"]}],"impls":[{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEX|byron-tract-forebay","component":"Byron Tract Forebay","status":"completed","label":"Completed","comments":0,"evidence":2},{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEX|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":1,"evidence":0},{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEX|intake-c-north-delta","component":"Intake C — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="AsNeeded"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Fertilizer Application Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Fertilizer Application Plan"
            >Submit Fertilizer Application Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Fish Salvage Plan"
          data-item='{"memberId":"act_01M2G6Y3NNJMTS3JZDQQZNRKEP","id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEP","title":"Submit Fish Salvage Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMKWWFQ2XBV3AV9Z71DHD","code":"COA 11.35","name":"Develop and Obtain CDFW Approval of Fish Salvage Plan","index":["Fish::Fish rescue and salvage"]}],"impls":[{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEP|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox size="sm" aria-label="Submit Fish Salvage Plan"></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Fish Salvage Plan"
            >Submit Fish Salvage Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Fugitive Dust Control and Monitoring Plan"
          data-item='{"memberId":"act_01M2G6Y3NMGVH2VJSMJC7KKSH8","id":"act_01M2G6Y3NMGVH2VJSMJC7KKSH8","title":"Submit Fugitive Dust Control and Monitoring Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMKGHYQC5TH3EPKATNKAS","code":"COA 11.29","name":"Submit Fugitive Dust Control and Monitoring Plan","index":["Air quality::Fugitive dust"]}],"impls":[{"id":"act_01M2G6Y3NMGVH2VJSMJC7KKSH8|twin-cities-complex","component":"Twin Cities Complex","status":"completed","label":"Completed","comments":0,"evidence":2}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Construction"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Fugitive Dust Control and Monitoring Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Fugitive Dust Control and Monitoring Plan"
            >Submit Fugitive Dust Control and Monitoring Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit GGS Relocation Plan"
          data-item='{"memberId":"act_01M2G6Y3NNJMTS3JZDQQZNRKEY","id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEY","title":"Submit GGS Relocation Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMPKAG6VQ9A1ZV3ZCXR6F","code":"COA 11.67","name":"Prepare and Submit GGS Mortality Reduction and Relocation Plan","index":["Amphibians and reptiles::Giant garter snake","Habitat protection::Wildlife encounters and handling"]}],"impls":[{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEY|twin-cities-complex","component":"Twin Cities Complex","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEY|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species="giant garter snake"
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox size="sm" aria-label="Submit GGS Relocation Plan"></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit GGS Relocation Plan"
            >Submit GGS Relocation Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Groundwater Testing and Monitoring Plan"
          data-item='{"memberId":"act_01M2G6Y3NK6K0BZ6XYWCKNWKN2","id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKN2","title":"Submit Groundwater Testing and Monitoring Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMK5XM7T1VJ6933H6KCBR","code":"COA 11.23","name":"Develop and Submit Groundwater Testing and Monitoring Plan","index":["Water::Groundwater"]}],"impls":[{"id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKN2|intake-c-north-delta","component":"Intake C — North Delta","status":"on-hold","label":"On Hold","comments":0,"evidence":2},{"id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKN2|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Groundwater Testing and Monitoring Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Groundwater Testing and Monitoring Plan"
            >Submit Groundwater Testing and Monitoring Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Herbicide and Pesticide Application Plan"
          data-item='{"memberId":"act_01M2G6Y3NNJMTS3JZDQQZNRKET","id":"act_01M2G6Y3NNJMTS3JZDQQZNRKET","title":"Submit Herbicide and Pesticide Application Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMHYSHPSSPHZ1CGQNSKGW","code":"COA 11.4","name":"Prepare and Submit Annual Herbicide Application Plan to CDFW","index":["Hazards::Pesticides and rodenticides"]}],"impls":[{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKET|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"overdue","label":"Overdue","comments":1,"evidence":2},{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKET|twin-cities-complex","component":"Twin Cities Complex","status":"overdue","label":"Overdue","comments":0,"evidence":0},{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKET|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":2,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="AsNeeded"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Herbicide and Pesticide Application Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Herbicide and Pesticide Application Plan"
            >Submit Herbicide and Pesticide Application Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Hydraulic Testing Plan for Intake Fish Screens"
          data-item='{"memberId":"act_01M2G6Y3NJADVCJBHXD7RXW12M","id":"act_01M2G6Y3NJADVCJBHXD7RXW12M","title":"Submit Hydraulic Testing Plan for Intake Fish Screens","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMHD09XMJW13QPHXCDF52","code":"COA 10.27","name":"Prepare and Submit Hydraulic Testing Plan","index":["Water operations::Fish screens"]},{"id":"req_01M2ESMHESPTYZVZHBGTPERHSQ","code":"COA 10.27.1","name":"Specify Hydraulic Testing Plan Methods and Contents","index":["Water operations::Fish screens"]}],"impls":[{"id":"act_01M2G6Y3NJADVCJBHXD7RXW12M|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"on-hold","label":"On Hold","comments":0,"evidence":4},{"id":"act_01M2G6Y3NJADVCJBHXD7RXW12M|byron-tract-forebay","component":"Byron Tract Forebay","status":"in-progress","label":"In Progress","comments":0,"evidence":0},{"id":"act_01M2G6Y3NJADVCJBHXD7RXW12M|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 10"
          data-f-phase="Construction|Operations"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Hydraulic Testing Plan for Intake Fish Screens"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Hydraulic Testing Plan for Intake Fish Screens"
            >Submit Hydraulic Testing Plan for Intake Fish Screens</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Invasive Plant Species Monitoring, Management and Control Plan"
          data-item='{"memberId":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMZ","id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMZ","title":"Submit Invasive Plant Species Monitoring, Management and Control Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMJWX86XC6P7ST3J5X0Q8","code":"COA 11.19.1","name":"Develop Draft Invasive Plant Species Management Plan","index":["Water::Invasive species"]},{"id":"req_01M2ESMJWX86XC6P7ST3J5X0Q9","code":"COA 11.19.1","name":"Submit Final IPSMMCP for Each Construction Phase","index":["Water::Invasive species"]}],"impls":[{"id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMZ|intake-c-north-delta","component":"Intake C — North Delta","status":"on-hold","label":"On Hold","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Construction|Operations"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Invasive Plant Species Monitoring, Management and Control Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Invasive Plant Species Monitoring, Management and Control Plan"
            >Submit Invasive Plant Species Monitoring, Management and Control Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Joint Operations Optimization Study Plan"
          data-item='{"memberId":"act_01M2G6Y3NJADVCJBHXD7RXW12J","id":"act_01M2G6Y3NJADVCJBHXD7RXW12J","title":"Submit Joint Operations Optimization Study Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMGMBN9YSZN01BVXBTRPV","code":"COA 10.21.8","name":"Develop and Implement Joint Operations Optimization Study Plan","index":["Water operations::Operations monitoring and studies","Water operations::Diversion limits and bypass flows","Water operations::Life cycle and operations models"]}],"impls":[{"id":"act_01M2G6Y3NJADVCJBHXD7RXW12J|twin-cities-complex","component":"Twin Cities Complex","status":"in-progress","label":"In Progress","comments":0,"evidence":1}]}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Joint Operations Optimization Study Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Joint Operations Optimization Study Plan"
            >Submit Joint Operations Optimization Study Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit MALI Translocation Plan"
          data-item='{"memberId":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMV","id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMV","title":"Submit MALI Translocation Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMS9N6R3G11B584DPJ5HC","code":"COA 11.108","name":"Prepare and Submit MALI Translocation Plan","index":["Plants and invertebrates::Special-status plants"]}],"impls":[{"id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMV|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"in-progress","label":"In Progress","comments":0,"evidence":5}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species="mason’s lilaeopsis"
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit MALI Translocation Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit MALI Translocation Plan"
            >Submit MALI Translocation Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Mercury Management and Monitoring Plan"
          data-item='{"memberId":"act_01M2G6Y3NMGVH2VJSMJC7KKSH9","id":"act_01M2G6Y3NMGVH2VJSMJC7KKSH9","title":"Submit Mercury Management and Monitoring Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMKJ962P3Z8GXN62B4VFD","code":"COA 11.30","name":"Finalize and Obtain CDFW Approval of MMMP","index":["Water::Water quality"]}],"impls":[{"id":"act_01M2G6Y3NMGVH2VJSMJC7KKSH9|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"overdue","label":"Overdue","comments":0,"evidence":3},{"id":"act_01M2G6Y3NMGVH2VJSMJC7KKSH9|byron-tract-forebay","component":"Byron Tract Forebay","status":"on-hold","label":"On Hold","comments":0,"evidence":6},{"id":"act_01M2G6Y3NMGVH2VJSMJC7KKSH9|intake-b-north-delta","component":"Intake B — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Mercury Management and Monitoring Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Mercury Management and Monitoring Plan"
            >Submit Mercury Management and Monitoring Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit North Delta Diversion Monitoring Team Charter"
          data-item='{"memberId":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMW","id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMW","title":"Submit North Delta Diversion Monitoring Team Charter","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMSQV25VV7Q7632NJ9MF1","code":"COA 11.111.4","name":"Develop and Submit NDDMT Charter for CDFW Approval","index":["Water operations::Operations coordination and data"]}],"impls":[{"id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMW|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMW|intake-b-north-delta","component":"Intake B — North Delta","status":"overdue","label":"Overdue","comments":1,"evidence":3},{"id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMW|intake-c-north-delta","component":"Intake C — North Delta","status":"completed","label":"Completed","comments":0,"evidence":3}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit North Delta Diversion Monitoring Team Charter"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit North Delta Diversion Monitoring Team Charter"
            >Submit North Delta Diversion Monitoring Team Charter</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Pile Driving Plan"
          data-item='{"memberId":"act_01M2G6Y3NNJMTS3JZDQQZNRKEN","id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEN","title":"Submit Pile Driving Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMKV3GT4BZZAA72R61S1X","code":"COA 11.34","name":"Submit Pile Driving Plan for CDFW Approval","index":["Noise and vibration::Pile driving and underwater sound"]}],"impls":[{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEN|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"in-progress","label":"In Progress","comments":0,"evidence":1},{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEN|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"completed","label":"Completed","comments":0,"evidence":5},{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEN|twin-cities-complex","component":"Twin Cities Complex","status":"in-progress","label":"In Progress","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Construction"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox size="sm" aria-label="Submit Pile Driving Plan"></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Pile Driving Plan"
            >Submit Pile Driving Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Preconstruction CTS Burrow Watering Protocol"
          data-item='{"memberId":"act_01M2G6Y3NNJMTS3JZDQQZNRKEV","id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEV","title":"Submit Preconstruction CTS Burrow Watering Protocol","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMMCQ2FHMYR575BA568WT","code":"COA 11.42.1","name":"Prepare CDFW-Consulted Preconstruction Watering Protocol","index":["Amphibians and reptiles::Amphibians"]}],"impls":[{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEV|twin-cities-complex","component":"Twin Cities Complex","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEV|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"in-progress","label":"In Progress","comments":0,"evidence":4}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species="california tiger salamander"
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Preconstruction CTS Burrow Watering Protocol"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Preconstruction CTS Burrow Watering Protocol"
            >Submit Preconstruction CTS Burrow Watering Protocol</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Restoration and Revegetation Plan"
          data-item='{"memberId":"act_01M2G6Y3NPMSXZQMQNBGV7AENJ","id":"act_01M2G6Y3NPMSXZQMQNBGV7AENJ","title":"Submit Restoration and Revegetation Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMTQPZPEYQ0BM549VQ78M","code":"COA 12.3","name":"Obtain CDFW-Approved Species-Specific Restoration Guidelines","index":["Mitigation and restoration::Restoration","Agency reporting and approvals::Agency approvals"]},{"id":"req_01M2ESMTSGH2CPJYC0EHHW9012","code":"COA 12.3.1","name":"Obtain CDFW Approval of Restoration Plan Before Temporary Impacts","index":["Mitigation and restoration::Restoration","Agency reporting and approvals::Agency approvals"]},{"id":"req_01M2ESMTWYDE1920SWZ9QXMMM0","code":"COA 12.3.3","name":"Submit Restoration and Revegetation Plan for CDFW Approval","index":["Mitigation and restoration::Restoration","Plants and invertebrates::Special-status plants"]}],"impls":[{"id":"act_01M2G6Y3NPMSXZQMQNBGV7AENJ|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3NPMSXZQMQNBGV7AENJ|intake-b-north-delta","component":"Intake B — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":3},{"id":"act_01M2G6Y3NPMSXZQMQNBGV7AENJ|intake-c-north-delta","component":"Intake C — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species="mason’s lilaeopsis"
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Restoration and Revegetation Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Restoration and Revegetation Plan"
            >Submit Restoration and Revegetation Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Screen Impingement Study Plan"
          data-item='{"memberId":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMS","id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMS","title":"Submit Screen Impingement Study Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMHQM4Y8XNWWGJWTJ3P5M","code":"COA 10.30","name":"Develop and Submit Screen Impingement Study Plan","index":["Water operations::Fish screens","Water operations::Screen impingement and entrainment"]}],"impls":[{"id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKMS|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 10"
          data-f-phase="Construction"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Screen Impingement Study Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Screen Impingement Study Plan"
            >Submit Screen Impingement Study Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Species and Habitat Survey Protocols to CDFW"
          data-item='{"memberId":"act_01M2G6Y3NNJMTS3JZDQQZNRKES","id":"act_01M2G6Y3NNJMTS3JZDQQZNRKES","title":"Submit Species and Habitat Survey Protocols to CDFW","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMM256F0RRDSBCNM9S5G4","code":"COA 11.38","name":"Develop and Obtain CDFW-Approved Species Survey Protocols","index":["Agency reporting and approvals::Agency approvals"]},{"id":"req_01M2ESMC5KYTF17870WK6KKW9N","code":"COA 6.1","name":"Submit Protocol-Level Survey Methodology for CDFW Approval","index":["Agency reporting and approvals::Agency approvals","People and qualifications::Designated biologists and monitors"]}],"impls":[{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKES|twin-cities-complex","component":"Twin Cities Complex","status":"in-progress","label":"In Progress","comments":2,"evidence":0},{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKES|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11|COA 6"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Species and Habitat Survey Protocols to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Species and Habitat Survey Protocols to CDFW"
            >Submit Species and Habitat Survey Protocols to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Subsurface Testing and Monitoring Study Plan"
          data-item='{"memberId":"act_01M2G6Y3NH29YN1B50VPENFKBE","id":"act_01M2G6Y3NH29YN1B50VPENFKBE","title":"Submit Subsurface Testing and Monitoring Study Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMFBFFQB6W6S2SBSGX16J","code":"COA 10.17","name":"Develop Draft Subsurface Vibration Study Plan","index":["Noise and vibration::Vibration"]},{"id":"req_01M2ESMFBG0N35H82TF02GZ3ZK","code":"COA 10.17","name":"Submit Final Study Plan One Year Before Ground Disturbance","index":["Noise and vibration::Vibration","Agency reporting and approvals::Agency approvals"]}],"impls":[{"id":"act_01M2G6Y3NH29YN1B50VPENFKBE|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3NH29YN1B50VPENFKBE|intake-c-north-delta","component":"Intake C — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3NH29YN1B50VPENFKBE|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Subsurface Testing and Monitoring Study Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Subsurface Testing and Monitoring Study Plan"
            >Submit Subsurface Testing and Monitoring Study Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit SWHA Relocation Plan"
          data-item='{"memberId":"act_01M2G6Y3NNJMTS3JZDQQZNRKEZ","id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEZ","title":"Submit SWHA Relocation Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMQK5KXEQT5D15EGCDHXJ","code":"COA 11.80","name":"Develop and Submit SWHA Mortality Reduction and Relocation Plan","index":["Birds::Nesting birds","Habitat protection::Wildlife encounters and handling"]}],"impls":[{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEZ|twin-cities-complex","component":"Twin Cities Complex","status":"on-hold","label":"On Hold","comments":0,"evidence":0},{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEZ|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"in-progress","label":"In Progress","comments":0,"evidence":6}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species="swainson’s hawk"
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox size="sm" aria-label="Submit SWHA Relocation Plan"></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit SWHA Relocation Plan"
            >Submit SWHA Relocation Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit TRBL Relocation Plan"
          data-item='{"memberId":"act_01M2G6Y3NNJMTS3JZDQQZNRKF0","id":"act_01M2G6Y3NNJMTS3JZDQQZNRKF0","title":"Submit TRBL Relocation Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMRD7GNZNESZEXHQR204D","code":"COA 11.92","name":"Prepare and Submit TRBL Mortality/Relocation Plan","index":["Birds::Nesting birds","Birds::Tricolored blackbird","Habitat protection::Wildlife encounters and handling"]}],"impls":[{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKF0|intake-b-north-delta","component":"Intake B — North Delta","status":"overdue","label":"Overdue","comments":0,"evidence":4}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species="tricolored blackbird"
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox size="sm" aria-label="Submit TRBL Relocation Plan"></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit TRBL Relocation Plan"
            >Submit TRBL Relocation Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Underground Well Detection Plan"
          data-item='{"memberId":"act_01M2G6Y3NK6K0BZ6XYWCKNWKN3","id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKN3","title":"Submit Underground Well Detection Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMK7NGGYP3AZGTTG4KXZ5","code":"COA 11.24","name":"Develop and Submit Underground Well Detection Plan","index":["Water::Groundwater"]}],"impls":[{"id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKN3|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"completed","label":"Completed","comments":0,"evidence":2},{"id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKN3|twin-cities-complex","component":"Twin Cities Complex","status":"on-hold","label":"On Hold","comments":0,"evidence":5},{"id":"act_01M2G6Y3NK6K0BZ6XYWCKNWKN3|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"in-progress","label":"In Progress","comments":0,"evidence":3}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Underground Well Detection Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Underground Well Detection Plan"
            >Submit Underground Well Detection Plan</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Underwater Sound Abatement Plan"
          data-item='{"memberId":"act_01M2G6Y3NNJMTS3JZDQQZNRKEM","id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEM","title":"Submit Underwater Sound Abatement Plan","chip":{"label":"Plan","tone":"action"},"groupId":"Plan","groupName":"Plan","reqs":[{"id":"req_01M2ESMKSA5B31E9JAZ7XQPKZF","code":"COA 11.33","name":"Develop and Implement Underwater Sound Abatement Plan","index":["Noise and vibration::Pile driving and underwater sound"]}],"impls":[{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEM|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEM|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"completed","label":"Completed","comments":0,"evidence":5},{"id":"act_01M2G6Y3NNJMTS3JZDQQZNRKEM|twin-cities-complex","component":"Twin Cities Complex","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Construction|Maintenance"
          data-f-species=""
          data-f-type="Plan"
          data-f-frequency="Onetime"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Underwater Sound Abatement Plan"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Underwater Sound Abatement Plan"
            >Submit Underwater Sound Abatement Plan</span
          >
        </li>
      </ul>
    </details>
    <details class="bcn-lao__cat" data-lam-group="Reporting">
      <summary class="bcn-lao__row bcn-lao__row--cat">
        <span class="bcn-lao__chevron" aria-hidden="true"
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
        ><span class="bcn-lao__name">Reporting</span
        ><span data-lao-count=""
          ><span class="bcn-swcb" aria-label="49 actions available">49</span></span
        >
      </summary>
      <ul class="bcn-lao__opts bcn-lam__opts">
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Deliver Mitigation Status Report Before ITP Expiration"
          data-item='{"memberId":"act_01M2G6Y3R7PYV1TN3PG7JYE8R0","id":"act_01M2G6Y3R7PYV1TN3PG7JYE8R0","title":"Deliver Mitigation Status Report Before ITP Expiration","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMF7XVAKBFM66763ENDSK","code":"COA 10.15.1","name":"Deliver Mitigation Status Report Before ITP Expiration","index":["Site conduct::Compliance inspections and records","Mitigation and restoration::Restoration","Agency reporting and approvals::Periodic compliance reports"]}],"impls":[{"id":"act_01M2G6Y3R7PYV1TN3PG7JYE8R0|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 10"
          data-f-phase="Operations"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="Onetime"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Deliver Mitigation Status Report Before ITP Expiration"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Deliver Mitigation Status Report Before ITP Expiration"
            >Deliver Mitigation Status Report Before ITP Expiration</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Demonstrate Project Funding Arrangements to CDFW"
          data-item='{"memberId":"act_01M2G6Y3RC1N589S9ETAS5HQK2","id":"act_01M2G6Y3RC1N589S9ETAS5HQK2","title":"Demonstrate Project Funding Arrangements to CDFW","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMXB5BDGZN1PNZT41YB2F","code":"COA 13.3","name":"Demonstrate Funding Arrangements Before Impacts to Covered Species","index":["Mitigation and restoration::Mitigation lands","Mitigation and restoration::Security and funding assurances"]}],"impls":[{"id":"act_01M2G6Y3RC1N589S9ETAS5HQK2|twin-cities-complex","component":"Twin Cities Complex","status":"completed","label":"Completed","comments":2,"evidence":1}]}'
          data-f-commitment="COA 13"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="Onetime"
          data-f-deliverable="other"
        >
          <esa-checkbox
            size="sm"
            aria-label="Demonstrate Project Funding Arrangements to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Demonstrate Project Funding Arrangements to CDFW"
            >Demonstrate Project Funding Arrangements to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Disclose Detected Wells in the Construction Phase Package"
          data-item='{"memberId":"act_01M2G6Y3RA6HTPQEBMJTM46QTR","id":"act_01M2G6Y3RA6HTPQEBMJTM46QTR","title":"Disclose Detected Wells in the Construction Phase Package","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMK7PAVW5TD19TE9Z6C2T","code":"COA 11.24","name":"Disclose Detected Wells in Construction Phase Authorization Package","index":["Water::Groundwater"]}],"impls":[{"id":"act_01M2G6Y3RA6HTPQEBMJTM46QTR|intake-c-north-delta","component":"Intake C — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3RA6HTPQEBMJTM46QTR|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":1,"evidence":0},{"id":"act_01M2G6Y3RA6HTPQEBMJTM46QTR|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"on-hold","label":"On Hold","comments":3,"evidence":2}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Implementation Planning"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Disclose Detected Wells in the Construction Phase Package"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Disclose Detected Wells in the Construction Phase Package"
            >Disclose Detected Wells in the Construction Phase Package</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Map and Submit Nesting, Foraging and Roosting Sites to CDFW"
          data-item='{"memberId":"act_01M2G6Y3RA6HTPQEBMJTM46QTS","id":"act_01M2G6Y3RA6HTPQEBMJTM46QTS","title":"Map and Submit Nesting, Foraging and Roosting Sites to CDFW","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMQ3BXJWY2RWRRD34QXXF","code":"COA 11.71","name":"Map SWHA Nesting and Foraging Sites for CDFW","index":["Birds::Nesting birds","Habitat protection::Habitat impact tracking"]},{"id":"req_01M2ESMQRFGZFYAMZ3JVECQ9GX","code":"COA 11.83","name":"Map and Submit Nesting/Foraging Sites in Phase Authorization Package","index":["Birds::Nesting birds","Habitat protection::Habitat impact tracking"]},{"id":"req_01M2ESMQT8BHA58JZ110V53F5R","code":"COA 11.84","name":"Map and Provide TRBL Nesting/Roosting Sites to CDFW","index":["Birds::Nesting birds","Habitat protection::Habitat impact tracking"]}],"impls":[{"id":"act_01M2G6Y3RA6HTPQEBMJTM46QTS|intake-b-north-delta","component":"Intake B — North Delta","status":"on-hold","label":"On Hold","comments":2,"evidence":6}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Maintenance"
          data-f-species="swainson’s hawk|tricolored blackbird"
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="other"
        >
          <esa-checkbox
            size="sm"
            aria-label="Map and Submit Nesting, Foraging and Roosting Sites to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Map and Submit Nesting, Foraging and Roosting Sites to CDFW"
            >Map and Submit Nesting, Foraging and Roosting Sites to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Notify CDFW 14 Days Before Starting Covered Activities"
          data-item='{"memberId":"act_01M2G6Y3R2ZP7KE7EZHM396ZJY","id":"act_01M2G6Y3R2ZP7KE7EZHM396ZJY","title":"Notify CDFW 14 Days Before Starting Covered Activities","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMECVYQSPE08483H5P0ET","code":"COA 10.1","name":"Notify CDFW 14 Days Before Starting Covered Activities","index":["Agency reporting and approvals::Schedule notices"]}],"impls":[{"id":"act_01M2G6Y3R2ZP7KE7EZHM396ZJY|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3R2ZP7KE7EZHM396ZJY|twin-cities-complex","component":"Twin Cities Complex","status":"not-started","label":"Not Started","comments":3,"evidence":0},{"id":"act_01M2G6Y3R2ZP7KE7EZHM396ZJY|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"in-progress","label":"In Progress","comments":0,"evidence":0}]}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="Onetime"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Notify CDFW 14 Days Before Starting Covered Activities"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notify CDFW 14 Days Before Starting Covered Activities"
            >Notify CDFW 14 Days Before Starting Covered Activities</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Notify CDFW 60 Days Before In-Water Maintenance"
          data-item='{"memberId":"act_01M2G6Y3RB67EQDRWNDJBKFW6X","id":"act_01M2G6Y3RB67EQDRWNDJBKFW6X","title":"Notify CDFW 60 Days Before In-Water Maintenance","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMKNSX5WPNMGT57793V9B","code":"COA 11.31.2","name":"Notify CDFW 60 Days Before In-Water Maintenance","index":["Agency reporting and approvals::Schedule notices","Water::In-water work"]}],"impls":[{"id":"act_01M2G6Y3RB67EQDRWNDJBKFW6X|byron-tract-forebay","component":"Byron Tract Forebay","status":"in-progress","label":"In Progress","comments":0,"evidence":6},{"id":"act_01M2G6Y3RB67EQDRWNDJBKFW6X|intake-b-north-delta","component":"Intake B — North Delta","status":"in-progress","label":"In Progress","comments":2,"evidence":4},{"id":"act_01M2G6Y3RB67EQDRWNDJBKFW6X|intake-c-north-delta","component":"Intake C — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Maintenance"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Notify CDFW 60 Days Before In-Water Maintenance"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notify CDFW 60 Days Before In-Water Maintenance"
            >Notify CDFW 60 Days Before In-Water Maintenance</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Notify CDFW and Provide a Plan for a Stay-Ahead Shortfall"
          data-item='{"memberId":"act_01M2G6Y3RC1N589S9ETAS5HQJX","id":"act_01M2G6Y3RC1N589S9ETAS5HQJX","title":"Notify CDFW and Provide a Plan for a Stay-Ahead Shortfall","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMTJEPDSERNB5QPHEZ71Q","code":"COA 12","name":"Notify CDFW and Provide Plan for Stay-Ahead Shortfall","index":["Mitigation and restoration::Mitigation lands"]}],"impls":[{"id":"act_01M2G6Y3RC1N589S9ETAS5HQJX|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3RC1N589S9ETAS5HQJX|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"overdue","label":"Overdue","comments":0,"evidence":0}]}'
          data-f-commitment="COA 12"
          data-f-phase="Construction|Operations"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Notify CDFW and Provide a Plan for a Stay-Ahead Shortfall"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notify CDFW and Provide a Plan for a Stay-Ahead Shortfall"
            >Notify CDFW and Provide a Plan for a Stay-Ahead Shortfall</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Notify CDFW Before Dewatering or Fish-Isolating Work"
          data-item='{"memberId":"act_01M2G6Y3RB67EQDRWNDJBKFW6Y","id":"act_01M2G6Y3RB67EQDRWNDJBKFW6Y","title":"Notify CDFW Before Dewatering or Fish-Isolating Work","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMKWX75VN6Q904Q7QHHXM","code":"COA 11.35","name":"Notify CDFW Before Dewatering or Fish-Isolating Activities","index":["Fish::Fish rescue and salvage","Water::Dewatering"]}],"impls":[{"id":"act_01M2G6Y3RB67EQDRWNDJBKFW6Y|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"on-hold","label":"On Hold","comments":0,"evidence":6}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Notify CDFW Before Dewatering or Fish-Isolating Work"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notify CDFW Before Dewatering or Fish-Isolating Work"
            >Notify CDFW Before Dewatering or Fish-Isolating Work</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Notify CDFW of a CBB Detection"
          data-item='{"memberId":"act_01M2G6Y3RC1N589S9ETAS5HQJV","id":"act_01M2G6Y3RC1N589S9ETAS5HQJV","title":"Notify CDFW of a CBB Detection","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMRP9RKKF3TK57F7V1ARZ","code":"COA 11.97","name":"Notify CDFW of a CBB Detection Within 24 Hours","index":["Plants and invertebrates::Bumble bees and monarchs"]},{"id":"req_01M2ESMRSTR9HY12WTKKXTH440","code":"COA 11.99","name":"Notify CDFW of a CBB Detection Within 24 Hours","index":["Plants and invertebrates::Bumble bees and monarchs"]}],"impls":[{"id":"act_01M2G6Y3RC1N589S9ETAS5HQJV|twin-cities-complex","component":"Twin Cities Complex","status":"in-progress","label":"In Progress","comments":0,"evidence":3},{"id":"act_01M2G6Y3RC1N589S9ETAS5HQJV|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"completed","label":"Completed","comments":0,"evidence":3},{"id":"act_01M2G6Y3RC1N589S9ETAS5HQJV|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="crotch bumble bee"
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Notify CDFW of a CBB Detection"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notify CDFW of a CBB Detection"
            >Notify CDFW of a CBB Detection</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Notify CDFW of a Land Manager Change"
          data-item='{"memberId":"act_01M2G6Y3RC1N589S9ETAS5HQK0","id":"act_01M2G6Y3RC1N589S9ETAS5HQK0","title":"Notify CDFW of a Land Manager Change","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMWEE97ENMXP49X45HKWJ","code":"COA 12.11.5","name":"Notify CDFW of Land Manager Changes Within 30 Days","index":["Mitigation and restoration::Mitigation lands","People and qualifications::Qualified specialists"]}],"impls":[{"id":"act_01M2G6Y3RC1N589S9ETAS5HQK0|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"in-progress","label":"In Progress","comments":0,"evidence":0},{"id":"act_01M2G6Y3RC1N589S9ETAS5HQK0|twin-cities-complex","component":"Twin Cities Complex","status":"not-started","label":"Not Started","comments":1,"evidence":0}]}'
          data-f-commitment="COA 12"
          data-f-phase="Construction|Operations|Maintenance"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Notify CDFW of a Land Manager Change"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notify CDFW of a Land Manager Change"
            >Notify CDFW of a Land Manager Change</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Notify CDFW of an Accidental Spill"
          data-item='{"memberId":"act_01M2G6Y3RB67EQDRWNDJBKFW6T","id":"act_01M2G6Y3RB67EQDRWNDJBKFW6T","title":"Notify CDFW of an Accidental Spill","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMK406ECZG1RS62GFJ59Z","code":"COA 11.22","name":"Notify CDFW of Accidental Spills Within 24 Hours","index":["Hazards::Spill prevention and response"]}],"impls":[{"id":"act_01M2G6Y3RB67EQDRWNDJBKFW6T|intake-c-north-delta","component":"Intake C — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Operations"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Notify CDFW of an Accidental Spill"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notify CDFW of an Accidental Spill"
            >Notify CDFW of an Accidental Spill</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Notify CDFW of Inability to Comply with the ITP"
          data-item='{"memberId":"act_01M2G6Y3RB67EQDRWNDJBKFW6P","id":"act_01M2G6Y3RB67EQDRWNDJBKFW6P","title":"Notify CDFW of Inability to Comply with the ITP","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMDEC1Q0RGFP8KGZD7JYH","code":"COA 9.3","name":"Notify CDFW When Unable to Comply with the ITP","index":["Agency reporting and approvals::Non-compliance reporting","People and qualifications::Designated biologists and monitors"]}],"impls":[{"id":"act_01M2G6Y3RB67EQDRWNDJBKFW6P|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3RB67EQDRWNDJBKFW6P|intake-c-north-delta","component":"Intake C — North Delta","status":"in-progress","label":"In Progress","comments":3,"evidence":0}]}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Notify CDFW of Inability to Comply with the ITP"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notify CDFW of Inability to Comply with the ITP"
            >Notify CDFW of Inability to Comply with the ITP</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Notify CDFW of Nest Survey Results Before Vegetation Removal"
          data-item='{"memberId":"act_01M2G6Y3RC1N589S9ETAS5HQJR","id":"act_01M2G6Y3RC1N589S9ETAS5HQJR","title":"Notify CDFW of Nest Survey Results Before Vegetation Removal","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMQDWQRXTGEXYK0XZGMD8","code":"COA 11.77","name":"Notify CDFW of Nest Survey Results Before Vegetation Removal","index":["Birds::Nesting birds","Habitat protection::Vegetation removal"]}],"impls":[{"id":"act_01M2G6Y3RC1N589S9ETAS5HQJR|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"completed","label":"Completed","comments":0,"evidence":1},{"id":"act_01M2G6Y3RC1N589S9ETAS5HQJR|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"on-hold","label":"On Hold","comments":0,"evidence":2}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="swainson’s hawk"
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Notify CDFW of Nest Survey Results Before Vegetation Removal"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notify CDFW of Nest Survey Results Before Vegetation Removal"
            >Notify CDFW of Nest Survey Results Before Vegetation Removal</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Notify CDFW of Non-Operational Fish Screens"
          data-item='{"memberId":"act_01M2G6Y3RB67EQDRWNDJBKFW6R","id":"act_01M2G6Y3RB67EQDRWNDJBKFW6R","title":"Notify CDFW of Non-Operational Fish Screens","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMSD72ZD3PSG8PQ392H6J","code":"COA 11.109.1","name":"Notify CDFW Within 1 Day of Non-Operational Fish Screens","index":["Water operations::Fish screens"]}],"impls":[{"id":"act_01M2G6Y3RB67EQDRWNDJBKFW6R|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":2,"evidence":0},{"id":"act_01M2G6Y3RB67EQDRWNDJBKFW6R|intake-b-north-delta","component":"Intake B — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":5},{"id":"act_01M2G6Y3RB67EQDRWNDJBKFW6R|intake-c-north-delta","component":"Intake C — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Operations"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Notify CDFW of Non-Operational Fish Screens"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notify CDFW of Non-Operational Fish Screens"
            >Notify CDFW of Non-Operational Fish Screens</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Notify CDFW of Potential CBB Nest Loss"
          data-item='{"memberId":"act_01M2G6Y3RC1N589S9ETAS5HQJW","id":"act_01M2G6Y3RC1N589S9ETAS5HQJW","title":"Notify CDFW of Potential CBB Nest Loss","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMRZ2SQA04DKYQWZHN3P0","code":"COA 11.102","name":"Notify CDFW Within 24 Hours of Potential Nest Loss","index":["Plants and invertebrates::Bumble bees and monarchs","Agency reporting and approvals::Take and injury reporting"]}],"impls":[{"id":"act_01M2G6Y3RC1N589S9ETAS5HQJW|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"completed","label":"Completed","comments":0,"evidence":5},{"id":"act_01M2G6Y3RC1N589S9ETAS5HQJW|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":1,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Maintenance"
          data-f-species="crotch bumble bee"
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Notify CDFW of Potential CBB Nest Loss"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notify CDFW of Potential CBB Nest Loss"
            >Notify CDFW of Potential CBB Nest Loss</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Notify CDFW of SWHA Nest Abandonment or Distress"
          data-item='{"memberId":"act_01M2G6Y3RC1N589S9ETAS5HQJQ","id":"act_01M2G6Y3RC1N589S9ETAS5HQJQ","title":"Notify CDFW of SWHA Nest Abandonment or Distress","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMQACBHVMRN8J6HBT74MK","code":"COA 11.75","name":"Notify CDFW of SWHA Nest or Nestling Abandonment Within 24 Hours","index":["Birds::Nesting birds"]},{"id":"req_01M2ESMQABV7ZXHTW7CASVJ9Q6","code":"COA 11.75","name":"Notify CDFW of SWHA Nesting Distress Within 24 Hours","index":["Birds::Nesting birds"]},{"id":"req_01M2ESMQMZAZ4ATFDENRZAYK0X","code":"COA 11.81","name":"Notify CDFW Within 24 Hours of SWHA Nest Abandonment or Distress","index":["Birds::Nesting birds"]}],"impls":[{"id":"act_01M2G6Y3RC1N589S9ETAS5HQJQ|twin-cities-complex","component":"Twin Cities Complex","status":"overdue","label":"Overdue","comments":0,"evidence":2},{"id":"act_01M2G6Y3RC1N589S9ETAS5HQJQ|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3RC1N589S9ETAS5HQJQ|byron-tract-forebay","component":"Byron Tract Forebay","status":"in-progress","label":"In Progress","comments":1,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="swainson’s hawk"
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Notify CDFW of SWHA Nest Abandonment or Distress"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notify CDFW of SWHA Nest Abandonment or Distress"
            >Notify CDFW of SWHA Nest Abandonment or Distress</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Notify CDFW of the Designated Representative and Substitutes"
          data-item='{"memberId":"act_01M2G6Y3RB67EQDRWNDJBKFW6Q","id":"act_01M2G6Y3RB67EQDRWNDJBKFW6Q","title":"Notify CDFW of the Designated Representative and Substitutes","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMD6W6RQG8JF2DYBGJG48","code":"COA 9.1","name":"Designate and Notify CDFW of Designated Representative","index":["People and qualifications::Qualified specialists"]},{"id":"req_01M2ESMD6XM3P5WQ752XPQVX8Z","code":"COA 9.1","name":"Notify CDFW of Substitute Designated Representative","index":["People and qualifications::Qualified specialists"]}],"impls":[{"id":"act_01M2G6Y3RB67EQDRWNDJBKFW6Q|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3RB67EQDRWNDJBKFW6Q|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":3,"evidence":0},{"id":"act_01M2G6Y3RB67EQDRWNDJBKFW6Q|intake-c-north-delta","component":"Intake C — North Delta","status":"completed","label":"Completed","comments":0,"evidence":5}]}'
          data-f-commitment="COA 9"
          data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="Onetime"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Notify CDFW of the Designated Representative and Substitutes"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notify CDFW of the Designated Representative and Substitutes"
            >Notify CDFW of the Designated Representative and Substitutes</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Notify CDFW of TRBL Nest or Colony Abandonment or Distress"
          data-item='{"memberId":"act_01M2G6Y3RC1N589S9ETAS5HQJT","id":"act_01M2G6Y3RC1N589S9ETAS5HQJT","title":"Notify CDFW of TRBL Nest or Colony Abandonment or Distress","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMRF1YW0VN6WV9VMY07ZS","code":"COA 11.93","name":"Notify CDFW of TRBL Nest/Colony Abandonment or Distress","index":["Birds::Nesting birds","Birds::Tricolored blackbird","Agency reporting and approvals::Take and injury reporting"]}],"impls":[{"id":"act_01M2G6Y3RC1N589S9ETAS5HQJT|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3RC1N589S9ETAS5HQJT|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":1,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Maintenance"
          data-f-species="tricolored blackbird"
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Notify CDFW of TRBL Nest or Colony Abandonment or Distress"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notify CDFW of TRBL Nest or Colony Abandonment or Distress"
            >Notify CDFW of TRBL Nest or Colony Abandonment or Distress</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Notify CDFW When Fish Salvage Is Complete"
          data-item='{"memberId":"act_01M2G6Y3RB67EQDRWNDJBKFW6Z","id":"act_01M2G6Y3RB67EQDRWNDJBKFW6Z","title":"Notify CDFW When Fish Salvage Is Complete","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMM0FVKV7MZMMSVC11NPD","code":"COA 11.37","name":"Notify CDFW When Fish Salvage Is Complete","index":["Fish::Fish rescue and salvage","Water::Dewatering"]}],"impls":[{"id":"act_01M2G6Y3RB67EQDRWNDJBKFW6Z|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Notify CDFW When Fish Salvage Is Complete"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notify CDFW When Fish Salvage Is Complete"
            >Notify CDFW When Fish Salvage Is Complete</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Notify the Designated Biologist of CBB, CTS or SWHA Take or Injury"
          data-item='{"memberId":"act_01M2G6Y3R8HSR7K069ZM5EZCXP","id":"act_01M2G6Y3R8HSR7K069ZM5EZCXP","title":"Notify the Designated Biologist of CBB, CTS or SWHA Take or Injury","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMS0T2RSRJA03WEQSCC33","code":"COA 11.103","name":"Immediately Notify Biologist of CBB Take or Mortality","index":["Agency reporting and approvals::Take and injury reporting","Plants and invertebrates::Bumble bees and monarchs"]},{"id":"req_01M2ESMN9ZQ8CS1KWBNS6BJ4PM","code":"COA 11.52","name":"Immediately Notify Biologist of Injured or Dead CTS","index":["Agency reporting and approvals::Take and injury reporting","Amphibians and reptiles::Amphibians","Habitat protection::Wildlife encounters and handling"]},{"id":"req_01M2ESMQMYFBJZP5GR352A38DG","code":"COA 11.81","name":"Notify Designated Biologist of SWHA Take, Injury or Death","index":["Birds::Nesting birds","Agency reporting and approvals::Take and injury reporting"]}],"impls":[{"id":"act_01M2G6Y3R8HSR7K069ZM5EZCXP|intake-c-north-delta","component":"Intake C — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":2},{"id":"act_01M2G6Y3R8HSR7K069ZM5EZCXP|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"completed","label":"Completed","comments":2,"evidence":1},{"id":"act_01M2G6Y3R8HSR7K069ZM5EZCXP|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance|Operations"
          data-f-species="crotch bumble bee|california tiger salamander|swainson’s hawk"
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Notify the Designated Biologist of CBB, CTS or SWHA Take or Injury"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notify the Designated Biologist of CBB, CTS or SWHA Take or Injury"
            >Notify the Designated Biologist of CBB, CTS or SWHA Take or Injury</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Notify the Designated Biologist of Covered Species Take or Injury"
          data-item='{"memberId":"act_01M2G6Y3R8HSR7K069ZM5EZCXN","id":"act_01M2G6Y3R8HSR7K069ZM5EZCXN","title":"Notify the Designated Biologist of Covered Species Take or Injury","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMF9PFFTXCX5ZD1XJ6RT3","code":"COA 10.16","name":"Notify Biologist Immediately of Take or Injury","index":["Agency reporting and approvals::Take and injury reporting","Habitat protection::Wildlife encounters and handling"]},{"id":"req_01M2ESMPPWZPQPM63D24K68WYR","code":"COA 11.68","name":"Notify Designated Biologist Immediately of GGS Take, Injury or Death","index":["Amphibians and reptiles::Giant garter snake","Agency reporting and approvals::Take and injury reporting"]},{"id":"req_01M2ESMRF0PJK8JBTHZN7TQKZ0","code":"COA 11.93","name":"Notify Designated Biologist of TRBL Take or Injury","index":["Birds::Nesting birds","Birds::Tricolored blackbird","Agency reporting and approvals::Take and injury reporting"]}],"impls":[{"id":"act_01M2G6Y3R8HSR7K069ZM5EZCXN|intake-b-north-delta","component":"Intake B — North Delta","status":"in-progress","label":"In Progress","comments":1,"evidence":6}]}'
          data-f-commitment="COA 10|COA 11"
          data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
          data-f-species="giant garter snake|tricolored blackbird"
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Notify the Designated Biologist of Covered Species Take or Injury"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Notify the Designated Biologist of Covered Species Take or Injury"
            >Notify the Designated Biologist of Covered Species Take or Injury</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Provide NDDMT Raw Data and Modeling to CDFW on Request"
          data-item='{"memberId":"act_01M2G6Y3RB67EQDRWNDJBKFW6S","id":"act_01M2G6Y3RB67EQDRWNDJBKFW6S","title":"Provide NDDMT Raw Data and Modeling to CDFW on Request","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMSP3QEZQRVJ3HWC8EAFP","code":"COA 11.111.3","name":"Provide NDDMT Raw Data and Modeling to CDFW Within 10 Days of Request","index":["Water operations::Operations coordination and data"]}],"impls":[{"id":"act_01M2G6Y3RB67EQDRWNDJBKFW6S|intake-c-north-delta","component":"Intake C — North Delta","status":"overdue","label":"Overdue","comments":0,"evidence":1}]}'
          data-f-commitment="COA 11"
          data-f-phase="Operations"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="other"
        >
          <esa-checkbox
            size="sm"
            aria-label="Provide NDDMT Raw Data and Modeling to CDFW on Request"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Provide NDDMT Raw Data and Modeling to CDFW on Request"
            >Provide NDDMT Raw Data and Modeling to CDFW on Request</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Provide Title and Environmental Documentation for HM Lands"
          data-item='{"memberId":"act_01M2G6Y3RC1N589S9ETAS5HQJZ","id":"act_01M2G6Y3RC1N589S9ETAS5HQJZ","title":"Provide Title and Environmental Documentation for HM Lands","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMWCMB9JG9J2XAQP2JJNY","code":"COA 12.11.4","name":"Provide Title and Environmental Documentation for HM Lands","index":["Mitigation and restoration::Mitigation lands"]}],"impls":[{"id":"act_01M2G6Y3RC1N589S9ETAS5HQJZ|intake-c-north-delta","component":"Intake C — North Delta","status":"completed","label":"Completed","comments":0,"evidence":1},{"id":"act_01M2G6Y3RC1N589S9ETAS5HQJZ|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3RC1N589S9ETAS5HQJZ|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"in-progress","label":"In Progress","comments":0,"evidence":4}]}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Provide Title and Environmental Documentation for HM Lands"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Provide Title and Environmental Documentation for HM Lands"
            >Provide Title and Environmental Documentation for HM Lands</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Report Barred Tiger Salamander or Hybrid Detections to CDFW"
          data-item='{"memberId":"act_01M2G6Y3RC1N589S9ETAS5HQJP","id":"act_01M2G6Y3RC1N589S9ETAS5HQJP","title":"Report Barred Tiger Salamander or Hybrid Detections to CDFW","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMNJVZV958WPXE76E9J5R","code":"COA 11.53","name":"Notify CDFW of Barred Tiger Salamander or Hybrid Detection","index":["Amphibians and reptiles::Amphibians","Water::Invasive species"]}],"impls":[{"id":"act_01M2G6Y3RC1N589S9ETAS5HQJP|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"on-hold","label":"On Hold","comments":0,"evidence":6}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction"
          data-f-species="california tiger salamander"
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Report Barred Tiger Salamander or Hybrid Detections to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Report Barred Tiger Salamander or Hybrid Detections to CDFW"
            >Report Barred Tiger Salamander or Hybrid Detections to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Report Bathymetric Survey Results to CDFW"
          data-item='{"memberId":"act_01M2G6Y3RA6HTPQEBMJTM46QTM","id":"act_01M2G6Y3RA6HTPQEBMJTM46QTM","title":"Report Bathymetric Survey Results to CDFW","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMGVDDZE5XV4ZZWKHTZBT","code":"COA 10.23","name":"Report Bathymetric Survey Results Within 120 Days","index":["Water operations::Operations monitoring and studies"]}],"impls":[{"id":"act_01M2G6Y3RA6HTPQEBMJTM46QTM|intake-c-north-delta","component":"Intake C — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3RA6HTPQEBMJTM46QTM|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"completed","label":"Completed","comments":0,"evidence":3},{"id":"act_01M2G6Y3RA6HTPQEBMJTM46QTM|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Report Bathymetric Survey Results to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Report Bathymetric Survey Results to CDFW"
            >Report Bathymetric Survey Results to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Report CBB Sightings to the Designated Biologist"
          data-item='{"memberId":"act_01M2G6Y3R8HSR7K069ZM5EZCXQ","id":"act_01M2G6Y3R8HSR7K069ZM5EZCXQ","title":"Report CBB Sightings to the Designated Biologist","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMRGT715YPPHA107T5SGP","code":"COA 11.94","name":"Report CBB Sightings to the Designated Biologist","index":["Plants and invertebrates::Bumble bees and monarchs"]}],"impls":[{"id":"act_01M2G6Y3R8HSR7K069ZM5EZCXQ|intake-b-north-delta","component":"Intake B — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":5}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="crotch bumble bee"
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Report CBB Sightings to the Designated Biologist"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Report CBB Sightings to the Designated Biologist"
            >Report CBB Sightings to the Designated Biologist</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Report CBB, CTS and SWHA Take or Injury Incidents to CDFW"
          data-item='{"memberId":"act_01M2G6Y3R8HSR7K069ZM5EZCXM","id":"act_01M2G6Y3R8HSR7K069ZM5EZCXM","title":"Report CBB, CTS and SWHA Take or Injury Incidents to CDFW","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMS0T2RSRJA03WEQSCC34","code":"COA 11.103","name":"Provide Initial CDFW Notice of CBB Take Within 1 Day","index":["Agency reporting and approvals::Take and injury reporting","Plants and invertebrates::Bumble bees and monarchs"]},{"id":"req_01M2ESMS0VRXQZQ44TNN5TJ4N0","code":"COA 11.103","name":"Submit Written CBB Incident Report Within 2 Days","index":["Agency reporting and approvals::Take and injury reporting","Plants and invertebrates::Bumble bees and monarchs"]},{"id":"req_01M2ESMNA0BX5FD2QMF1667XY5","code":"COA 11.52","name":"Contact CDFW Representative Within One Business Day of Injury","index":["Agency reporting and approvals::Take and injury reporting","Amphibians and reptiles::Amphibians"]},{"id":"req_01M2ESMNDKAXN4DY312N8QFX49","code":"COA 11.52.2","name":"Document Injury Circumstances in Written Incident Report","index":["Agency reporting and approvals::Take and injury reporting","Amphibians and reptiles::Amphibians"]},{"id":"req_01M2ESMQMZAZ4ATFDENRZAYK0Y","code":"COA 11.81","name":"Provide Initial CDFW Notification With Event Details","index":["Birds::Nesting birds","Agency reporting and approvals::Take and injury reporting"]},{"id":"req_01M2ESMQMZAZ4ATFDENRZAYK0Z","code":"COA 11.81","name":"Submit Written Incident Report to CDFW Within Two Business Days","index":["Birds::Nesting birds","Agency reporting and approvals::Take and injury reporting"]}],"impls":[{"id":"act_01M2G6Y3R8HSR7K069ZM5EZCXM|intake-b-north-delta","component":"Intake B — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":3}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance|Post-Construction|Operations"
          data-f-species="crotch bumble bee|california tiger salamander|swainson’s hawk"
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Report CBB, CTS and SWHA Take or Injury Incidents to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Report CBB, CTS and SWHA Take or Injury Incidents to CDFW"
            >Report CBB, CTS and SWHA Take or Injury Incidents to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Report Covered Species Sightings to CDFW"
          data-item='{"memberId":"act_01M2G6Y3R8HSR7K069ZM5EZCXS","id":"act_01M2G6Y3R8HSR7K069ZM5EZCXS","title":"Report Covered Species Sightings to CDFW","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMEQFTWDF4BPXFH799KTB","code":"COA 10.7","name":"Email CDFW of Covered Species Sightings Within One Day","index":["Agency reporting and approvals::Species sightings and CNDDB reporting"]},{"id":"req_01M2ESMHSDAW774SZWKJC8RQZD","code":"COA 11.1","name":"Record and Report Covered Species Sighting Locations to CDFW","index":["Agency reporting and approvals::Species sightings and CNDDB reporting"]}],"impls":[{"id":"act_01M2G6Y3R8HSR7K069ZM5EZCXS|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3R8HSR7K069ZM5EZCXS|intake-b-north-delta","component":"Intake B — North Delta","status":"completed","label":"Completed","comments":0,"evidence":1}]}'
          data-f-commitment="COA 10|COA 11"
          data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Report Covered Species Sightings to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Report Covered Species Sightings to CDFW"
            >Report Covered Species Sightings to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Report Covered Species Take or Injury to CDFW"
          data-item='{"memberId":"act_01M2G6Y3R7PYV1TN3PG7JYE8R1","id":"act_01M2G6Y3R7PYV1TN3PG7JYE8R1","title":"Report Covered Species Take or Injury to CDFW","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMF9PFFTXCX5ZD1XJ6RT4","code":"COA 10.16","name":"Call CDFW with Initial Take or Injury Notification","index":["Agency reporting and approvals::Take and injury reporting"]},{"id":"req_01M2ESMF9PFFTXCX5ZD1XJ6RT5","code":"COA 10.16","name":"Send Written Take Report to CDFW Within Two Days","index":["Agency reporting and approvals::Take and injury reporting"]},{"id":"req_01M2ESMHV8ZTVEEH1XRC04ZSKM","code":"COA 11.2","name":"Notify CDFW of Injury and Submit Written Incident Report","index":["Agency reporting and approvals::Take and injury reporting","Habitat protection::Wildlife encounters and handling"]},{"id":"req_01M2ESMNH15YZ4G05ST577QXV5","code":"COA 11.52.4","name":"Submit Written CTS Take/Injury Incident Report to CDFW","index":["Agency reporting and approvals::Take and injury reporting","Amphibians and reptiles::Amphibians"]},{"id":"req_01M2ESMPPXXTTV96MGFP9E403D","code":"COA 11.68","name":"Provide Initial and Written Incident Reports to CDFW on GGS Take or Injury","index":["Amphibians and reptiles::Giant garter snake","Agency reporting and approvals::Take and injury reporting"]},{"id":"req_01M2ESMPTEM53MG569201GQDP8","code":"COA 11.68.2","name":"Document Injury Circumstances and Disposition in the Written Incident Report","index":["Amphibians and reptiles::Giant garter snake","Agency reporting and approvals::Take and injury reporting"]},{"id":"req_01M2ESMPXZ8BZZ7N0NNT5MKQFM","code":"COA 11.68.4","name":"Send CDFW Written Incident Report Within Two Business Days","index":["Amphibians and reptiles::Giant garter snake","Agency reporting and approvals::Take and injury reporting"]},{"id":"req_01M2ESMRF1YW0VN6WV9VMY07ZQ","code":"COA 11.93","name":"Notify CDFW Representative Within One Business Day","index":["Birds::Nesting birds","Birds::Tricolored blackbird","Agency reporting and approvals::Take and injury reporting"]},{"id":"req_01M2ESMRF1YW0VN6WV9VMY07ZT","code":"COA 11.93","name":"Submit Written TRBL Incident Report to CDFW","index":["Birds::Nesting birds","Birds::Tricolored blackbird","Agency reporting and approvals::Take and injury reporting"]}],"impls":[{"id":"act_01M2G6Y3R7PYV1TN3PG7JYE8R1|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"in-progress","label":"In Progress","comments":0,"evidence":0},{"id":"act_01M2G6Y3R7PYV1TN3PG7JYE8R1|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 10|COA 11"
          data-f-phase="Pre-Construction|Construction|Operations|Maintenance|Post-Construction"
          data-f-species="california tiger salamander|giant garter snake|tricolored blackbird"
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Report Covered Species Take or Injury to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Report Covered Species Take or Injury to CDFW"
            >Report Covered Species Take or Injury to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Report CTS and MALI Relocations to CDFW"
          data-item='{"memberId":"act_01M2G6Y3R8HSR7K069ZM5EZCXV","id":"act_01M2G6Y3R8HSR7K069ZM5EZCXV","title":"Report CTS and MALI Relocations to CDFW","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMS9PZAA7R0G27BRK7FGT","code":"COA 11.108","name":"Call CDFW Within 24 Hours of Each MALI Transplant","index":["Plants and invertebrates::Special-status plants"]},{"id":"req_01M2ESMS9PZAA7R0G27BRK7FGV","code":"COA 11.108","name":"Submit Written MALI Transplant Report Within 2 Days","index":["Plants and invertebrates::Special-status plants"]},{"id":"req_01M2ESMN87B9MY447Z0HMPG8MV","code":"COA 11.51.3","name":"Notify CDFW Within One Business Day of Each CTS Relocation","index":["Agency reporting and approvals::Take and injury reporting","Amphibians and reptiles::Amphibians"]}],"impls":[{"id":"act_01M2G6Y3R8HSR7K069ZM5EZCXV|byron-tract-forebay","component":"Byron Tract Forebay","status":"in-progress","label":"In Progress","comments":2,"evidence":5},{"id":"act_01M2G6Y3R8HSR7K069ZM5EZCXV|intake-b-north-delta","component":"Intake B — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="mason’s lilaeopsis|california tiger salamander"
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Report CTS and MALI Relocations to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Report CTS and MALI Relocations to CDFW"
            >Report CTS and MALI Relocations to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Report GGS Relocations to CDFW"
          data-item='{"memberId":"act_01M2G6Y3R8HSR7K069ZM5EZCXW","id":"act_01M2G6Y3R8HSR7K069ZM5EZCXW","title":"Report GGS Relocations to CDFW","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMPN5893FF8Q2YE57ZWQA","code":"COA 11.67.1","name":"Notify CDFW Within 24 Hours of Each GGS Relocation","index":["Amphibians and reptiles::Giant garter snake","Agency reporting and approvals::Take and injury reporting"]}],"impls":[{"id":"act_01M2G6Y3R8HSR7K069ZM5EZCXW|intake-c-north-delta","component":"Intake C — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":3},{"id":"act_01M2G6Y3R8HSR7K069ZM5EZCXW|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"completed","label":"Completed","comments":1,"evidence":6},{"id":"act_01M2G6Y3R8HSR7K069ZM5EZCXW|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":3,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="giant garter snake"
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Report GGS Relocations to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Report GGS Relocations to CDFW"
            >Report GGS Relocations to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Report GPS-Recorded CBB Nest and MALI Locations to CDFW"
          data-item='{"memberId":"act_01M2G6Y3R8HSR7K069ZM5EZCXT","id":"act_01M2G6Y3R8HSR7K069ZM5EZCXT","title":"Report GPS-Recorded CBB Nest and MALI Locations to CDFW","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMS64HSCCA956ZZYZCFCV","code":"COA 11.106","name":"Record and Report MALI Locations by GPS","index":["Plants and invertebrates::Special-status plants","Agency reporting and approvals::Species sightings and CNDDB reporting"]},{"id":"req_01M2ESMRR1S26EXFBWQDFTE58B","code":"COA 11.98","name":"Report GPS-Recorded Nest Location to CDFW Within 24 Hours","index":["Plants and invertebrates::Bumble bees and monarchs"]}],"impls":[{"id":"act_01M2G6Y3R8HSR7K069ZM5EZCXT|intake-b-north-delta","component":"Intake B — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":1}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="mason’s lilaeopsis|crotch bumble bee"
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Report GPS-Recorded CBB Nest and MALI Locations to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Report GPS-Recorded CBB Nest and MALI Locations to CDFW"
            >Report GPS-Recorded CBB Nest and MALI Locations to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Report Hydroacoustic Threshold Exceedances to CDFW"
          data-item='{"memberId":"act_01M2G6Y3R99JZNVA7RWDTVTCW6","id":"act_01M2G6Y3R99JZNVA7RWDTVTCW6","title":"Report Hydroacoustic Threshold Exceedances to CDFW","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMKSB96CWQM0DXWY5AQH2","code":"COA 11.33","name":"Report Hydroacoustic Threshold Exceedances Within One Business Day","index":["Noise and vibration::Pile driving and underwater sound"]}],"impls":[{"id":"act_01M2G6Y3R99JZNVA7RWDTVTCW6|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"in-progress","label":"In Progress","comments":0,"evidence":0},{"id":"act_01M2G6Y3R99JZNVA7RWDTVTCW6|twin-cities-complex","component":"Twin Cities Complex","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3R99JZNVA7RWDTVTCW6|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"on-hold","label":"On Hold","comments":0,"evidence":5}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Report Hydroacoustic Threshold Exceedances to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Report Hydroacoustic Threshold Exceedances to CDFW"
            >Report Hydroacoustic Threshold Exceedances to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Report Invasive Aquatic Species Detections to CDFW"
          data-item='{"memberId":"act_01M2G6Y3RC1N589S9ETAS5HQJN","id":"act_01M2G6Y3RC1N589S9ETAS5HQJN","title":"Report Invasive Aquatic Species Detections to CDFW","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMKYPBG0Z69DC9K48B19M","code":"COA 11.36","name":"Report Detected Invasive Species to CDFW Within 24 Hours","index":["Water::Invasive species"]}],"impls":[{"id":"act_01M2G6Y3RC1N589S9ETAS5HQJN|intake-c-north-delta","component":"Intake C — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3RC1N589S9ETAS5HQJN|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"in-progress","label":"In Progress","comments":0,"evidence":4},{"id":"act_01M2G6Y3RC1N589S9ETAS5HQJN|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":3,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Report Invasive Aquatic Species Detections to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Report Invasive Aquatic Species Detections to CDFW"
            >Report Invasive Aquatic Species Detections to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Report ITP Non-Compliance to CDFW"
          data-item='{"memberId":"act_01M2G6Y3RB67EQDRWNDJBKFW6N","id":"act_01M2G6Y3RB67EQDRWNDJBKFW6N","title":"Report ITP Non-Compliance to CDFW","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMEEMEXGEGREP1K279WSX","code":"COA 10.2","name":"Notify and Report Non-Compliance with the ITP to CDFW","index":["Agency reporting and approvals::Non-compliance reporting"]}],"impls":[{"id":"act_01M2G6Y3RB67EQDRWNDJBKFW6N|intake-c-north-delta","component":"Intake C — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Report ITP Non-Compliance to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Report ITP Non-Compliance to CDFW"
            >Report ITP Non-Compliance to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Report MALI and CTS Finds to the Designated Biologist"
          data-item='{"memberId":"act_01M2G6Y3R8HSR7K069ZM5EZCXR","id":"act_01M2G6Y3R8HSR7K069ZM5EZCXR","title":"Report MALI and CTS Finds to the Designated Biologist","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMS9N6R3G11B584DPJ5HD","code":"COA 11.108","name":"Notify Biologist Immediately of MALI Found Onsite","index":["Plants and invertebrates::Special-status plants"]},{"id":"req_01M2ESMN4NKSK6C4P5V4Y0W5R5","code":"COA 11.51.1","name":"Notify Designated Biologist of CTS Found in Site or Buffer","index":["Amphibians and reptiles::Amphibians","Habitat protection::Wildlife encounters and handling"]}],"impls":[{"id":"act_01M2G6Y3R8HSR7K069ZM5EZCXR|intake-b-north-delta","component":"Intake B — North Delta","status":"overdue","label":"Overdue","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Maintenance|Operations"
          data-f-species="mason’s lilaeopsis|california tiger salamander"
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Report MALI and CTS Finds to the Designated Biologist"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Report MALI and CTS Finds to the Designated Biologist"
            >Report MALI and CTS Finds to the Designated Biologist</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Report Vessel Fuel Spills to CDFW OSPR"
          data-item='{"memberId":"act_01M2G6Y3RB67EQDRWNDJBKFW6V","id":"act_01M2G6Y3RB67EQDRWNDJBKFW6V","title":"Report Vessel Fuel Spills to CDFW OSPR","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMKYQ8AM5AR4SCE24X1JG","code":"COA 11.36","name":"Report Vessel Fuel Spills to CDFW Spill Prevention Office","index":["Hazards::Spill prevention and response","Water::Barge and vessel operations"]}],"impls":[{"id":"act_01M2G6Y3RB67EQDRWNDJBKFW6V|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3RB67EQDRWNDJBKFW6V|intake-c-north-delta","component":"Intake C — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Report Vessel Fuel Spills to CDFW OSPR"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Report Vessel Fuel Spills to CDFW OSPR"
            >Report Vessel Fuel Spills to CDFW OSPR</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Report Vessel Groundings and Barge Plan Deviations to CDFW"
          data-item='{"memberId":"act_01M2G6Y3RB67EQDRWNDJBKFW70","id":"act_01M2G6Y3RB67EQDRWNDJBKFW70","title":"Report Vessel Groundings and Barge Plan Deviations to CDFW","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMKYQ8AM5AR4SCE24X1JC","code":"COA 11.36","name":"Report Vessel Groundings and Plan Deviations Within 24 Hours","index":["Water::Barge and vessel operations"]}],"impls":[{"id":"act_01M2G6Y3RB67EQDRWNDJBKFW70|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"completed","label":"Completed","comments":0,"evidence":5}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Report Vessel Groundings and Barge Plan Deviations to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Report Vessel Groundings and Barge Plan Deviations to CDFW"
            >Report Vessel Groundings and Barge Plan Deviations to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Share Phase 1 Operations Data with CDFW"
          data-item='{"memberId":"act_01M2G6Y3RC1N589S9ETAS5HQK3","id":"act_01M2G6Y3RC1N589S9ETAS5HQK3","title":"Share Phase 1 Operations Data with CDFW","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMCQ5MM4B9MEJ7232K24N","code":"COA 7.1","name":"Share Phase 1 Operations Data with CDFW","index":["Water operations::Operations coordination and data"]}],"impls":[{"id":"act_01M2G6Y3RC1N589S9ETAS5HQK3|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3RC1N589S9ETAS5HQK3|twin-cities-complex","component":"Twin Cities Complex","status":"completed","label":"Completed","comments":0,"evidence":6}]}'
          data-f-commitment="COA 7"
          data-f-phase="Operations"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="Ongoing"
          data-f-deliverable="other"
        >
          <esa-checkbox
            size="sm"
            aria-label="Share Phase 1 Operations Data with CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Share Phase 1 Operations Data with CDFW"
            >Share Phase 1 Operations Data with CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Aquatic Conditions Assessments with the Phase 2 Package"
          data-item='{"memberId":"act_01M2G6Y3RA6HTPQEBMJTM46QTT","id":"act_01M2G6Y3RA6HTPQEBMJTM46QTT","title":"Submit Aquatic Conditions Assessments with the Phase 2 Package","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMFDD89X51ER81SA5A47Z","code":"COA 10.18","name":"Report Aquatic Conditions in Phase 2 Package and Final Report","index":["Water operations::Operations monitoring and studies","Agency reporting and approvals::Agency approvals"]}],"impls":[{"id":"act_01M2G6Y3RA6HTPQEBMJTM46QTT|intake-c-north-delta","component":"Intake C — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3RA6HTPQEBMJTM46QTT|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"completed","label":"Completed","comments":0,"evidence":1},{"id":"act_01M2G6Y3RA6HTPQEBMJTM46QTT|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 10"
          data-f-phase="Operations"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="Onetime"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Aquatic Conditions Assessments with the Phase 2 Package"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Aquatic Conditions Assessments with the Phase 2 Package"
            >Submit Aquatic Conditions Assessments with the Phase 2 Package</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Credit Bill of Sale and Payment Receipt to CDFW"
          data-item='{"memberId":"act_01M2G6Y3RC1N589S9ETAS5HQJY","id":"act_01M2G6Y3RC1N589S9ETAS5HQJY","title":"Submit Credit Bill of Sale and Payment Receipt to CDFW","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMW3XWZY1B7J5NK83JMJD","code":"COA 12.10","name":"Submit Bill of Sale and Payment Receipt for Purchased Credits","index":["Mitigation and restoration::Mitigation lands"]}],"impls":[{"id":"act_01M2G6Y3RC1N589S9ETAS5HQJY|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 12"
          data-f-phase="Pre-Construction"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="payment"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Credit Bill of Sale and Payment Receipt to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Credit Bill of Sale and Payment Receipt to CDFW"
            >Submit Credit Bill of Sale and Payment Receipt to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Final Hydraulic and Sediment Models and Reports to CDFW"
          data-item='{"memberId":"act_01M2G6Y3R99JZNVA7RWDTVTCW7","id":"act_01M2G6Y3R99JZNVA7RWDTVTCW7","title":"Submit Final Hydraulic and Sediment Models and Reports to CDFW","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMGX3R64B0C3GTQ10EM3H","code":"COA 10.24","name":"Submit Final Models and Reports to CDFW Before 30% Design","index":["Water operations::Operations monitoring and studies","Water operations::Hydraulic and sediment models"]},{"id":"req_01M2ESMH2DT08G18ZCGEFSA9TW","code":"COA 10.25","name":"Submit 10.25.1 Mathematical Model and Report to CDFW","index":["Water operations::Fish screens","Water operations::Hydraulic and sediment models"]},{"id":"req_01M2ESMH2DT08G18ZCGEFSA9TX","code":"COA 10.25","name":"Submit 10.25.2-10.25.4 Models and Reports to CDFW","index":["Water operations::Fish screens","Water operations::Hydraulic and sediment models"]}],"impls":[{"id":"act_01M2G6Y3R99JZNVA7RWDTVTCW7|intake-c-north-delta","component":"Intake C — North Delta","status":"completed","label":"Completed","comments":0,"evidence":5},{"id":"act_01M2G6Y3R99JZNVA7RWDTVTCW7|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"on-hold","label":"On Hold","comments":0,"evidence":0}]}'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="Onetime"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Final Hydraulic and Sediment Models and Reports to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Final Hydraulic and Sediment Models and Reports to CDFW"
            >Submit Final Hydraulic and Sediment Models and Reports to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Fish Screen Hydraulic Testing Data and Report to CDFW"
          data-item='{"memberId":"act_01M2G6Y3R99JZNVA7RWDTVTCW8","id":"act_01M2G6Y3R99JZNVA7RWDTVTCW8","title":"Submit Fish Screen Hydraulic Testing Data and Report to CDFW","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMHGJED0F8PP04FMVHBDZ","code":"COA 10.27.2","name":"Submit Hydraulic Testing Data Within 72 Hours","index":["Water operations::Fish screens","Water operations::Operations coordination and data"]},{"id":"req_01M2ESMHJA6YJA4EHD7WDAT58E","code":"COA 10.27.3","name":"Submit Hydraulic Testing Report Within 30 Days","index":["Water operations::Fish screens"]}],"impls":[{"id":"act_01M2G6Y3R99JZNVA7RWDTVTCW8|intake-c-north-delta","component":"Intake C — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3R99JZNVA7RWDTVTCW8|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 10"
          data-f-phase="Operations"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="AsNeeded"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Fish Screen Hydraulic Testing Data and Report to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Fish Screen Hydraulic Testing Data and Report to CDFW"
            >Submit Fish Screen Hydraulic Testing Data and Report to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Joint Operations Study Results and Compliance Report"
          data-item='{"memberId":"act_01M2G6Y3RA6HTPQEBMJTM46QTV","id":"act_01M2G6Y3RA6HTPQEBMJTM46QTV","title":"Submit Joint Operations Study Results and Compliance Report","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMGMBN9YSZN01BVXBTRPW","code":"COA 10.21.8","name":"Report Joint Operations Study Results in Phase 2 Authorization Package","index":["Water operations::Operations monitoring and studies","Agency reporting and approvals::Agency approvals"]}],"impls":[{"id":"act_01M2G6Y3RA6HTPQEBMJTM46QTV|intake-b-north-delta","component":"Intake B — North Delta","status":"in-progress","label":"In Progress","comments":2,"evidence":1}]}'
          data-f-commitment="COA 10"
          data-f-phase="Operations"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="Onetime"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Joint Operations Study Results and Compliance Report"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Joint Operations Study Results and Compliance Report"
            >Submit Joint Operations Study Results and Compliance Report</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Monthly Compliance Report to CDFW"
          data-item='{"memberId":"act_01M2G6Y3R2ZP7KE7EZHM396ZJZ","id":"act_01M2G6Y3R2ZP7KE7EZHM396ZJZ","title":"Submit Monthly Compliance Report to CDFW","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMF0PKSGVSRBAB5339S9M","code":"COA 10.12","name":"Compile and Submit Monthly Compliance Report","index":["Site conduct::Compliance inspections and records","Agency reporting and approvals::Periodic compliance reports"]},{"id":"req_01M2ESMDS5E818E06EZYTVMJ36","code":"COA 9.9","name":"Verify and Document Fencing Status in Monthly Compliance Report","index":["Habitat protection::Exclusion fencing and ESAs","Site conduct::Compliance inspections and records"]}],"impls":[{"id":"act_01M2G6Y3R2ZP7KE7EZHM396ZJZ|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"in-progress","label":"In Progress","comments":0,"evidence":2},{"id":"act_01M2G6Y3R2ZP7KE7EZHM396ZJZ|twin-cities-complex","component":"Twin Cities Complex","status":"completed","label":"Completed","comments":0,"evidence":1},{"id":"act_01M2G6Y3R2ZP7KE7EZHM396ZJZ|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 10|COA 9"
          data-f-phase="Pre-Construction|Construction|Post-Construction|Maintenance"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="Recurring"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Monthly Compliance Report to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Monthly Compliance Report to CDFW"
            >Submit Monthly Compliance Report to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Preconstruction Habitat Survey Results in the Phase Package"
          data-item='{"memberId":"act_01M2G6Y3RA6HTPQEBMJTM46QTN","id":"act_01M2G6Y3RA6HTPQEBMJTM46QTN","title":"Submit Preconstruction Habitat Survey Results in the Phase Package","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMES8P77HCP3S39H7JS58","code":"COA 10.8","name":"Submit Habitat Survey Results in Authorization Package","index":["Habitat protection::Habitat impact tracking","Agency reporting and approvals::Agency approvals"]}],"impls":[{"id":"act_01M2G6Y3RA6HTPQEBMJTM46QTN|intake-c-north-delta","component":"Intake C — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3RA6HTPQEBMJTM46QTN|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"completed","label":"Completed","comments":1,"evidence":5},{"id":"act_01M2G6Y3RA6HTPQEBMJTM46QTN|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="Onetime"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Preconstruction Habitat Survey Results in the Phase Package"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Preconstruction Habitat Survey Results in the Phase Package"
            >Submit Preconstruction Habitat Survey Results in the Phase Package</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Preconstruction TRBL Survey Results to CDFW"
          data-item='{"memberId":"act_01M2G6Y3RA6HTPQEBMJTM46QTP","id":"act_01M2G6Y3RA6HTPQEBMJTM46QTP","title":"Submit Preconstruction TRBL Survey Results to CDFW","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMQT8BHA58JZ110V53F5P","code":"COA 11.84","name":"Submit Preconstruction TRBL Survey Results to CDFW","index":["Birds::Nesting birds"]}],"impls":[{"id":"act_01M2G6Y3RA6HTPQEBMJTM46QTP|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"completed","label":"Completed","comments":2,"evidence":6},{"id":"act_01M2G6Y3RA6HTPQEBMJTM46QTP|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction"
          data-f-species="tricolored blackbird"
          data-f-type="Reporting"
          data-f-frequency="Onetime"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Preconstruction TRBL Survey Results to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Preconstruction TRBL Survey Results to CDFW"
            >Submit Preconstruction TRBL Survey Results to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Subsurface Vibration Study Results to CDFW"
          data-item='{"memberId":"act_01M2G6Y3RA6HTPQEBMJTM46QTQ","id":"act_01M2G6Y3RA6HTPQEBMJTM46QTQ","title":"Submit Subsurface Vibration Study Results to CDFW","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMFBG0N35H82TF02GZ3ZN","code":"COA 10.17","name":"Submit Vibration Study Results in Construction Phase Package","index":["Noise and vibration::Vibration","Agency reporting and approvals::Agency approvals"]}],"impls":[{"id":"act_01M2G6Y3RA6HTPQEBMJTM46QTQ|intake-c-north-delta","component":"Intake C — North Delta","status":"completed","label":"Completed","comments":0,"evidence":2},{"id":"act_01M2G6Y3RA6HTPQEBMJTM46QTQ|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"completed","label":"Completed","comments":0,"evidence":1},{"id":"act_01M2G6Y3RA6HTPQEBMJTM46QTQ|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="Onetime"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Subsurface Vibration Study Results to CDFW"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Subsurface Vibration Study Results to CDFW"
            >Submit Subsurface Vibration Study Results to CDFW</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Submit Supplemental Phase 1 Operations Data Before Phase 2"
          data-item='{"memberId":"act_01M2G6Y3RA6HTPQEBMJTM46QTW","id":"act_01M2G6Y3RA6HTPQEBMJTM46QTW","title":"Submit Supplemental Phase 1 Operations Data Before Phase 2","chip":{"label":"Reporting","tone":"action"},"groupId":"Reporting","groupName":"Reporting","reqs":[{"id":"req_01M2ESMCQ5MM4B9MEJ7232K24P","code":"COA 7.1","name":"Submit Supplemental Phase 1 Data Before Phase 2 Operations","index":["Water operations::Operations coordination and data","Agency reporting and approvals::Agency approvals"]}],"impls":[{"id":"act_01M2G6Y3RA6HTPQEBMJTM46QTW|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"completed","label":"Completed","comments":0,"evidence":2},{"id":"act_01M2G6Y3RA6HTPQEBMJTM46QTW|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"in-progress","label":"In Progress","comments":0,"evidence":5}]}'
          data-f-commitment="COA 7"
          data-f-phase="Operations"
          data-f-species=""
          data-f-type="Reporting"
          data-f-frequency="Onetime"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Submit Supplemental Phase 1 Operations Data Before Phase 2"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Submit Supplemental Phase 1 Operations Data Before Phase 2"
            >Submit Supplemental Phase 1 Operations Data Before Phase 2</span
          >
        </li>
      </ul>
    </details>
    <details class="bcn-lao__cat" data-lam-group="RestorationAndMitigation">
      <summary class="bcn-lao__row bcn-lao__row--cat">
        <span class="bcn-lao__chevron" aria-hidden="true"
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
        ><span class="bcn-lao__name">Restoration &amp; Mitigation</span
        ><span data-lao-count=""
          ><span class="bcn-swcb" aria-label="10 actions available">10</span></span
        >
      </summary>
      <ul class="bcn-lao__opts bcn-lam__opts">
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Backfill and Restore Preconstruction Investigation Sites"
          data-item='{"memberId":"act_01M2G6Y3V2EGJHQX6564T66398","id":"act_01M2G6Y3V2EGJHQX6564T66398","title":"Backfill and Restore Preconstruction Investigation Sites","chip":{"label":"Restoration &amp; Mitigation","tone":"action"},"groupId":"RestorationAndMitigation","groupName":"Restoration &amp; Mitigation","reqs":[{"id":"req_01M2ESMTNXG144G8WNFT4JXMPZ","code":"COA 12.2","name":"Backfill and Restore Preconstruction Investigation Sites","index":["Mitigation and restoration::Restoration"]}],"impls":[{"id":"act_01M2G6Y3V2EGJHQX6564T66398|intake-c-north-delta","component":"Intake C — North Delta","status":"on-hold","label":"On Hold","comments":0,"evidence":6}]}'
          data-f-commitment="COA 12"
          data-f-phase="Pre-Construction"
          data-f-species=""
          data-f-type="RestorationAndMitigation"
          data-f-frequency="Onetime"
          data-f-deliverable="other"
        >
          <esa-checkbox
            size="sm"
            aria-label="Backfill and Restore Preconstruction Investigation Sites"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Backfill and Restore Preconstruction Investigation Sites"
            >Backfill and Restore Preconstruction Investigation Sites</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Complete HM Lands Start-Up Fencing, Signage and Enhancement"
          data-item='{"memberId":"act_01M2G6Y3V2EGJHQX6564T66397","id":"act_01M2G6Y3V2EGJHQX6564T66397","title":"Complete HM Lands Start-Up Fencing, Signage and Enhancement","chip":{"label":"Restoration &amp; Mitigation","tone":"action"},"groupId":"RestorationAndMitigation","groupName":"Restoration &amp; Mitigation","reqs":[{"id":"req_01M2ESMWG6VA04DKPWKMX051FH","code":"COA 12.11.6","name":"Complete Initial HM Lands Site Establishment Tasks","index":["Mitigation and restoration::Mitigation lands","Mitigation and restoration::Restoration"]}],"impls":[{"id":"act_01M2G6Y3V2EGJHQX6564T66397|intake-c-north-delta","component":"Intake C — North Delta","status":"on-hold","label":"On Hold","comments":0,"evidence":0}]}'
          data-f-commitment="COA 12"
          data-f-phase="Pre-Construction|Construction"
          data-f-species=""
          data-f-type="RestorationAndMitigation"
          data-f-frequency="Onetime"
          data-f-deliverable="installation"
        >
          <esa-checkbox
            size="sm"
            aria-label="Complete HM Lands Start-Up Fencing, Signage and Enhancement"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Complete HM Lands Start-Up Fencing, Signage and Enhancement"
            >Complete HM Lands Start-Up Fencing, Signage and Enhancement</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Complete Mitigation and HM Lands Protection Before Impacts"
          data-item='{"memberId":"act_01M2G6Y3V2EGJHQX6564T66396","id":"act_01M2G6Y3V2EGJHQX6564T66396","title":"Complete Mitigation and HM Lands Protection Before Impacts","chip":{"label":"Restoration &amp; Mitigation","tone":"action"},"groupId":"RestorationAndMitigation","groupName":"Restoration &amp; Mitigation","reqs":[{"id":"req_01M2ESMTJEPDSERNB5QPHEZ71K","code":"COA 12","name":"Complete Mitigation or Security Before Phase Impacts","index":["Mitigation and restoration::Mitigation lands"]},{"id":"req_01M2ESMXB61WXZTSWY83SJ53JZ","code":"COA 13.3","name":"Complete HM Lands Acquisition and Easement Recording Before Covered Activities","index":["Mitigation and restoration::Mitigation lands","Mitigation and restoration::Security and funding assurances"]}],"impls":[{"id":"act_01M2G6Y3V2EGJHQX6564T66396|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3V2EGJHQX6564T66396|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"overdue","label":"Overdue","comments":2,"evidence":3},{"id":"act_01M2G6Y3V2EGJHQX6564T66396|twin-cities-complex","component":"Twin Cities Complex","status":"in-progress","label":"In Progress","comments":1,"evidence":5}]}'
          data-f-commitment="COA 12|COA 13"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-type="RestorationAndMitigation"
          data-f-frequency="Onetime"
          data-f-deliverable="other"
        >
          <esa-checkbox
            size="sm"
            aria-label="Complete Mitigation and HM Lands Protection Before Impacts"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Complete Mitigation and HM Lands Protection Before Impacts"
            >Complete Mitigation and HM Lands Protection Before Impacts</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Develop and Implement Methylmercury Management Approach"
          data-item='{"memberId":"act_01M2G6Y3V103NJ75GYQV09GB8S","id":"act_01M2G6Y3V103NJ75GYQV09GB8S","title":"Develop and Implement Methylmercury Management Approach","chip":{"label":"Restoration &amp; Mitigation","tone":"action"},"groupId":"RestorationAndMitigation","groupName":"Restoration &amp; Mitigation","reqs":[{"id":"req_01M2ESMG4EDSA27H7ZGNA9A8PR","code":"COA 10.20.5","name":"Develop and Implement Methylmercury Management Approach if Criteria Exceeded","index":["Water::Water quality"]}],"impls":[{"id":"act_01M2G6Y3V103NJ75GYQV09GB8S|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":3,"evidence":0},{"id":"act_01M2G6Y3V103NJ75GYQV09GB8S|twin-cities-complex","component":"Twin Cities Complex","status":"on-hold","label":"On Hold","comments":0,"evidence":0}]}'
          data-f-commitment="COA 10"
          data-f-phase="Construction|Operations"
          data-f-species=""
          data-f-type="RestorationAndMitigation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="plan"
        >
          <esa-checkbox
            size="sm"
            aria-label="Develop and Implement Methylmercury Management Approach"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Develop and Implement Methylmercury Management Approach"
            >Develop and Implement Methylmercury Management Approach</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Fund and Complete White Sturgeon Mitigation Projects"
          data-item='{"memberId":"act_01M2G6Y3V2EGJHQX6564T6639C","id":"act_01M2G6Y3V2EGJHQX6564T6639C","title":"Fund and Complete White Sturgeon Mitigation Projects","chip":{"label":"Restoration &amp; Mitigation","tone":"action"},"groupId":"RestorationAndMitigation","groupName":"Restoration &amp; Mitigation","reqs":[{"id":"req_01M2ESMVQJ3YJN9P04EC17WD3X","code":"COA 12.8.2","name":"Fund and Complete CDFW-Approved White Sturgeon Projects","index":["Mitigation and restoration::Mitigation lands","Mitigation and restoration::Mitigation funding contributions","Fish::White sturgeon"]}],"impls":[{"id":"act_01M2G6Y3V2EGJHQX6564T6639C|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 12"
          data-f-phase="Pre-Construction|Construction"
          data-f-species="white sturgeon"
          data-f-type="RestorationAndMitigation"
          data-f-frequency="Onetime"
          data-f-deliverable="payment"
        >
          <esa-checkbox
            size="sm"
            aria-label="Fund and Complete White Sturgeon Mitigation Projects"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Fund and Complete White Sturgeon Mitigation Projects"
            >Fund and Complete White Sturgeon Mitigation Projects</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Plant Replacement Swainson's Hawk Nest Trees"
          data-item='{"memberId":"act_01M2G6Y3V2EGJHQX6564T66399","id":"act_01M2G6Y3V2EGJHQX6564T66399","title":"Plant Replacement Swainson&apos;s Hawk Nest Trees","chip":{"label":"Restoration &amp; Mitigation","tone":"action"},"groupId":"RestorationAndMitigation","groupName":"Restoration &amp; Mitigation","reqs":[{"id":"req_01M2ESMV290BYP9VJ1MDF8SZN2","code":"COA 12.5.1","name":"Plant Replacement Nest Trees for Each Removed Nest Site","index":["Birds::Nesting birds","Mitigation and restoration::Restoration","Mitigation and restoration::Replacement nest trees"]},{"id":"req_01M2ESMV436Y8K8NHQB9MMX3JE","code":"COA 12.5.2","name":"Plant Replacement Trees for Each Suitable Nest Tree Removed","index":["Birds::Nesting birds","Mitigation and restoration::Restoration","Mitigation and restoration::Replacement nest trees"]}],"impls":[{"id":"act_01M2G6Y3V2EGJHQX6564T66399|intake-b-north-delta","component":"Intake B — North Delta","status":"on-hold","label":"On Hold","comments":0,"evidence":0},{"id":"act_01M2G6Y3V2EGJHQX6564T66399|intake-c-north-delta","component":"Intake C — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 12"
          data-f-phase="Pre-Construction|Construction|Post-Construction"
          data-f-species="swainson’s hawk"
          data-f-type="RestorationAndMitigation"
          data-f-frequency="Onetime"
          data-f-deliverable="installation"
        >
          <esa-checkbox
            size="sm"
            aria-label="Plant Replacement Swainson's Hawk Nest Trees"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Plant Replacement Swainson's Hawk Nest Trees"
            >Plant Replacement Swainson's Hawk Nest Trees</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Restore Riverbank Eroded by Barge Operations"
          data-item='{"memberId":"act_01M2G6Y3V2EGJHQX6564T66395","id":"act_01M2G6Y3V2EGJHQX6564T66395","title":"Restore Riverbank Eroded by Barge Operations","chip":{"label":"Restoration &amp; Mitigation","tone":"action"},"groupId":"RestorationAndMitigation","groupName":"Restoration &amp; Mitigation","reqs":[{"id":"req_01M2ESMKYQ8AM5AR4SCE24X1JF","code":"COA 11.36","name":"Restore Riverbanks Eroded by Barge Operations","index":["Mitigation and restoration::Restoration","Water::Barge and vessel operations"]}],"impls":[{"id":"act_01M2G6Y3V2EGJHQX6564T66395|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":3,"evidence":0},{"id":"act_01M2G6Y3V2EGJHQX6564T66395|twin-cities-complex","component":"Twin Cities Complex","status":"in-progress","label":"In Progress","comments":0,"evidence":3}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Post-Construction"
          data-f-species=""
          data-f-type="RestorationAndMitigation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="other"
        >
          <esa-checkbox
            size="sm"
            aria-label="Restore Riverbank Eroded by Barge Operations"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Restore Riverbank Eroded by Barge Operations"
            >Restore Riverbank Eroded by Barge Operations</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Restore Temporarily Impacted Habitat to Pre-Project Conditions"
          data-item='{"memberId":"act_01M2G6Y3V103NJ75GYQV09GB8T","id":"act_01M2G6Y3V103NJ75GYQV09GB8T","title":"Restore Temporarily Impacted Habitat to Pre-Project Conditions","chip":{"label":"Restoration &amp; Mitigation","tone":"action"},"groupId":"RestorationAndMitigation","groupName":"Restoration &amp; Mitigation","reqs":[{"id":"req_01M2ESMJNQ9FV420MSYCZ3Q6ET","code":"COA 11.17","name":"Restore Areas Disturbed by Power Line Construction","index":["Mitigation and restoration::Restoration","Mitigation and restoration::Agricultural land"]},{"id":"req_01M2ESMM95JM93STV0ZS9872BR","code":"COA 11.41","name":"Restore Temporarily Disturbed CTS Habitat With Native Vegetation","index":["Mitigation and restoration::Restoration","Amphibians and reptiles::Amphibians"]},{"id":"req_01M2ESMPFRRK7FBN8PGN0GP06F","code":"COA 11.65","name":"Restore Temporarily Disturbed Upland and Channel Habitat","index":["Amphibians and reptiles::Giant garter snake","Mitigation and restoration::Restoration"]},{"id":"req_01M2ESMPHJ9K1JPTSFFKW27FTB","code":"COA 11.66","name":"Restore Temporarily Impacted GGS Habitat to Pre-Project Conditions","index":["Amphibians and reptiles::Giant garter snake","Mitigation and restoration::Restoration"]},{"id":"req_01M2ESMTJEPDSERNB5QPHEZ71R","code":"COA 12","name":"Restore Temporarily Impacted Covered Species Habitat","index":["Mitigation and restoration::Restoration"]},{"id":"req_01M2ESMTQPZPEYQ0BM549VQ78K","code":"COA 12.3","name":"Restore Temporarily Disturbed Covered Species Habitat On-Site","index":["Mitigation and restoration::Restoration"]},{"id":"req_01M2ESMTSFZE1MPKDC55PW5H2E","code":"COA 12.3.1","name":"Recontour and Reseed Temporary Impact Areas Same-Year","index":["Mitigation and restoration::Restoration"]}],"impls":[{"id":"act_01M2G6Y3V103NJ75GYQV09GB8T|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3V103NJ75GYQV09GB8T|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"in-progress","label":"In Progress","comments":0,"evidence":5},{"id":"act_01M2G6Y3V103NJ75GYQV09GB8T|twin-cities-complex","component":"Twin Cities Complex","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11|COA 12"
          data-f-phase="Post-Construction"
          data-f-species="california tiger salamander|giant garter snake|swainson’s hawk|tricolored blackbird|crotch bumble bee|mason’s lilaeopsis"
          data-f-type="RestorationAndMitigation"
          data-f-frequency="Onetime"
          data-f-deliverable="other"
        >
          <esa-checkbox
            size="sm"
            aria-label="Restore Temporarily Impacted Habitat to Pre-Project Conditions"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Restore Temporarily Impacted Habitat to Pre-Project Conditions"
            >Restore Temporarily Impacted Habitat to Pre-Project Conditions</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Site, Design and Restore Construction Mitigation Habitat for Covered Fish"
          data-item='{"memberId":"act_01M2G6Y3V2EGJHQX6564T6639A","id":"act_01M2G6Y3V2EGJHQX6564T6639A","title":"Site, Design and Restore Construction Mitigation Habitat for Covered Fish","chip":{"label":"Restoration &amp; Mitigation","tone":"action"},"groupId":"RestorationAndMitigation","groupName":"Restoration &amp; Mitigation","reqs":[{"id":"req_01M2ESMV7KRZKKJSNH8GTNVGEK","code":"COA 12.6.1","name":"Site, Design and Restore DS/LFS Tidal and Spawning Habitat","index":["Mitigation and restoration::Mitigation lands","Fish::Aquatic habitat mitigation","Fish::Delta smelt and longfin smelt"]},{"id":"req_01M2ESMVJ6V6KZ8E8WVQ2QHJ69","code":"COA 12.7.1","name":"Site, Design and Restore CHNWR/CHNSR Construction Mitigation","index":["Mitigation and restoration::Mitigation lands","Fish::Aquatic habitat mitigation","Fish::Chinook salmon"]},{"id":"req_01M2ESMVNQATTJ2CZMEQYXE9XT","code":"COA 12.8.1","name":"Site, Design and Restore White Sturgeon Construction Mitigation","index":["Mitigation and restoration::Mitigation lands","Fish::Aquatic habitat mitigation","Fish::White sturgeon"]}],"impls":[{"id":"act_01M2G6Y3V2EGJHQX6564T6639A|intake-c-north-delta","component":"Intake C — North Delta","status":"on-hold","label":"On Hold","comments":0,"evidence":6},{"id":"act_01M2G6Y3V2EGJHQX6564T6639A|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":2,"evidence":0}]}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction|Construction"
          data-f-species="delta smelt|longfin smelt|winter-run chinook salmon|spring-run chinook salmon|white sturgeon"
          data-f-type="RestorationAndMitigation"
          data-f-frequency="Onetime"
          data-f-deliverable="other"
        >
          <esa-checkbox
            size="sm"
            aria-label="Site, Design and Restore Construction Mitigation Habitat for Covered Fish"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Site, Design and Restore Construction Mitigation Habitat for Covered Fish"
            >Site, Design and Restore Construction Mitigation Habitat for Covered
            Fish</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Site, Design and Restore Operations Mitigation Habitat for Covered Fish"
          data-item='{"memberId":"act_01M2G6Y3V2EGJHQX6564T6639B","id":"act_01M2G6Y3V2EGJHQX6564T6639B","title":"Site, Design and Restore Operations Mitigation Habitat for Covered Fish","chip":{"label":"Restoration &amp; Mitigation","tone":"action"},"groupId":"RestorationAndMitigation","groupName":"Restoration &amp; Mitigation","reqs":[{"id":"req_01M2ESMV9CFD75GZNER1MNVCS7","code":"COA 12.6.2","name":"Site, Design and Restore DS Operations Mitigation Habitat","index":["Mitigation and restoration::Mitigation lands","Fish::Aquatic habitat mitigation","Fish::Delta smelt and longfin smelt"]},{"id":"req_01M2ESMVCWFFX07R442SF1DMSD","code":"COA 12.6.4","name":"Site, Design and Restore LFS Operations Mitigation Habitat","index":["Mitigation and restoration::Mitigation lands","Fish::Aquatic habitat mitigation","Fish::Delta smelt and longfin smelt"]},{"id":"req_01M2ESMVKZY4783EXRCR1239EV","code":"COA 12.7.2","name":"Site, Design and Restore CHNWR/CHNSR Operations Mitigation","index":["Mitigation and restoration::Mitigation lands","Fish::Aquatic habitat mitigation","Fish::Chinook salmon"]},{"id":"req_01M2ESMVQHVGN8HHKT7KYV03A3","code":"COA 12.8.2","name":"Site, Design and Restore White Sturgeon Operations Mitigation","index":["Mitigation and restoration::Mitigation lands","Fish::Aquatic habitat mitigation","Fish::White sturgeon"]}],"impls":[{"id":"act_01M2G6Y3V2EGJHQX6564T6639B|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"in-progress","label":"In Progress","comments":0,"evidence":0},{"id":"act_01M2G6Y3V2EGJHQX6564T6639B|twin-cities-complex","component":"Twin Cities Complex","status":"overdue","label":"Overdue","comments":0,"evidence":4},{"id":"act_01M2G6Y3V2EGJHQX6564T6639B|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Construction|Operations"
          data-f-species="delta smelt|longfin smelt|winter-run chinook salmon|spring-run chinook salmon|white sturgeon"
          data-f-type="RestorationAndMitigation"
          data-f-frequency="Onetime"
          data-f-deliverable="other"
        >
          <esa-checkbox
            size="sm"
            aria-label="Site, Design and Restore Operations Mitigation Habitat for Covered Fish"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Site, Design and Restore Operations Mitigation Habitat for Covered Fish"
            >Site, Design and Restore Operations Mitigation Habitat for Covered Fish</span
          >
        </li>
      </ul>
    </details>
    <details class="bcn-lao__cat" data-lam-group="Survey">
      <summary class="bcn-lao__row bcn-lao__row--cat">
        <span class="bcn-lao__chevron" aria-hidden="true"
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
        ><span class="bcn-lao__name">Survey</span
        ><span data-lao-count=""
          ><span class="bcn-swcb" aria-label="27 actions available">27</span></span
        >
      </summary>
      <ul class="bcn-lao__opts bcn-lam__opts">
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Complete Baseline Biological Assessment and Land Survey"
          data-item='{"memberId":"act_01M2G6Y3Y1MDXG6FS3PQ7VM4YH","id":"act_01M2G6Y3Y1MDXG6FS3PQ7VM4YH","title":"Complete Baseline Biological Assessment and Land Survey","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMWG6VA04DKPWKMX051FG","code":"COA 12.11.6","name":"Conduct Baseline Biological Assessment and Land Survey","index":["Mitigation and restoration::Mitigation lands"]}],"impls":[{"id":"act_01M2G6Y3Y1MDXG6FS3PQ7VM4YH|twin-cities-complex","component":"Twin Cities Complex","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3Y1MDXG6FS3PQ7VM4YH|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"in-progress","label":"In Progress","comments":0,"evidence":4},{"id":"act_01M2G6Y3Y1MDXG6FS3PQ7VM4YH|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 12"
          data-f-phase="Pre-Construction"
          data-f-species=""
          data-f-type="Survey"
          data-f-frequency="Onetime"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Complete Baseline Biological Assessment and Land Survey"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Complete Baseline Biological Assessment and Land Survey"
            >Complete Baseline Biological Assessment and Land Survey</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Complete Pre-Disturbance Habitat Photo Documentation"
          data-item='{"memberId":"act_01M2G6Y3XZ7WK0185QGKR0185W","id":"act_01M2G6Y3XZ7WK0185QGKR0185W","title":"Complete Pre-Disturbance Habitat Photo Documentation","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMEGDMF3XE1YW7BYGW6H8","code":"COA 10.3","name":"Photo-Document Habitat Areas Before Covered Activities Begin","index":["Habitat protection::Habitat impact tracking"]}],"impls":[{"id":"act_01M2G6Y3XZ7WK0185QGKR0185W|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction"
          data-f-species=""
          data-f-type="Survey"
          data-f-frequency="Onetime"
          data-f-deliverable="other"
        >
          <esa-checkbox
            size="sm"
            aria-label="Complete Pre-Disturbance Habitat Photo Documentation"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Complete Pre-Disturbance Habitat Photo Documentation"
            >Complete Pre-Disturbance Habitat Photo Documentation</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct and Report Annual CTS Surveys"
          data-item='{"memberId":"act_01M2G6Y3XZ7WK0185QGKR01862","id":"act_01M2G6Y3XZ7WK0185QGKR01862","title":"Conduct and Report Annual CTS Surveys","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMMAY0PGV8V7Z8ACMASBG","code":"COA 11.42","name":"Report Annual Construction-Phase CTS Surveys to CDFW","index":["Amphibians and reptiles::Amphibians"]}],"impls":[{"id":"act_01M2G6Y3XZ7WK0185QGKR01862|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3XZ7WK0185QGKR01862|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species="california tiger salamander"
          data-f-type="Survey"
          data-f-frequency="Recurring"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct and Report Annual CTS Surveys"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct and Report Annual CTS Surveys"
            >Conduct and Report Annual CTS Surveys</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct and Report Annual GGS Surveys"
          data-item='{"memberId":"act_01M2G6Y3XZ7WK0185QGKR01864","id":"act_01M2G6Y3XZ7WK0185QGKR01864","title":"Conduct and Report Annual GGS Surveys","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMNSXG45H0H0SE68K0EPD","code":"COA 11.56","name":"Conduct and Report Annual GGS Surveys During Construction","index":["Amphibians and reptiles::Giant garter snake","Site conduct::Compliance inspections and records"]}],"impls":[{"id":"act_01M2G6Y3XZ7WK0185QGKR01864|byron-tract-forebay","component":"Byron Tract Forebay","status":"on-hold","label":"On Hold","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species="giant garter snake"
          data-f-type="Survey"
          data-f-frequency="Recurring"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct and Report Annual GGS Surveys"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct and Report Annual GGS Surveys"
            >Conduct and Report Annual GGS Surveys</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct and Report Annual SWHA Nest Tree Surveys"
          data-item='{"memberId":"act_01M2G6Y3Y008XT5YC8FTSZY6J6","id":"act_01M2G6Y3Y008XT5YC8FTSZY6J6","title":"Conduct and Report Annual SWHA Nest Tree Surveys","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMQ3AH38XGY89WZCHJ04R","code":"COA 11.71","name":"Conduct Recurring Annual SWHA Nest Surveys During Construction","index":["Birds::Nesting birds"]}],"impls":[{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6J6|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6J6|intake-c-north-delta","component":"Intake C — North Delta","status":"overdue","label":"Overdue","comments":0,"evidence":0},{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6J6|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"on-hold","label":"On Hold","comments":0,"evidence":5}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Maintenance"
          data-f-species="swainson’s hawk"
          data-f-type="Survey"
          data-f-frequency="Recurring"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct and Report Annual SWHA Nest Tree Surveys"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct and Report Annual SWHA Nest Tree Surveys"
            >Conduct and Report Annual SWHA Nest Tree Surveys</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct Annual CBB Flight Season Surveys"
          data-item='{"memberId":"act_01M2G6Y3Y008XT5YC8FTSZY6JD","id":"act_01M2G6Y3Y008XT5YC8FTSZY6JD","title":"Conduct Annual CBB Flight Season Surveys","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMRJMEXEW0QW3QQMZJ1HC","code":"COA 11.95","name":"Survey Annually to Set Flight Season Dates","index":["Plants and invertebrates::Bumble bees and monarchs"]}],"impls":[{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6JD|intake-b-north-delta","component":"Intake B — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":3}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="crotch bumble bee"
          data-f-type="Survey"
          data-f-frequency="Recurring"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct Annual CBB Flight Season Surveys"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct Annual CBB Flight Season Surveys"
            >Conduct Annual CBB Flight Season Surveys</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct Annual MALI Surveys in Suitable Habitat"
          data-item='{"memberId":"act_01M2G6Y3XZ7WK0185QGKR0185Z","id":"act_01M2G6Y3XZ7WK0185QGKR0185Z","title":"Conduct Annual MALI Surveys in Suitable Habitat","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMS4B6RKD5GF8X6CCJ5FT","code":"COA 11.105","name":"Repeat MALI Surveys Each Year in Suitable Habitat","index":["Plants and invertebrates::Special-status plants"]},{"id":"req_01M2ESMS7W6E1HTMTD240D0JJP","code":"COA 11.107","name":"Survey for MALI Before SCADA/Line Maintenance","index":["Plants and invertebrates::Special-status plants"]}],"impls":[{"id":"act_01M2G6Y3XZ7WK0185QGKR0185Z|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"completed","label":"Completed","comments":0,"evidence":1},{"id":"act_01M2G6Y3XZ7WK0185QGKR0185Z|twin-cities-complex","component":"Twin Cities Complex","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3XZ7WK0185QGKR0185Z|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"in-progress","label":"In Progress","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction|Pre-Construction"
          data-f-species="mason’s lilaeopsis"
          data-f-type="Survey"
          data-f-frequency="Recurring"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct Annual MALI Surveys in Suitable Habitat"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct Annual MALI Surveys in Suitable Habitat"
            >Conduct Annual MALI Surveys in Suitable Habitat</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct Baseline Food Web Resource Surveys"
          data-item='{"memberId":"act_01M2G6Y3XYHN837NKGVMS0K46X","id":"act_01M2G6Y3XYHN837NKGVMS0K46X","title":"Conduct Baseline Food Web Resource Surveys","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMGBG6K7E9GGDZEX3WR6M","code":"COA 10.21.3","name":"Conduct Baseline Food Web Resource Surveys","index":["Water operations::Operations monitoring and studies"]}],"impls":[{"id":"act_01M2G6Y3XYHN837NKGVMS0K46X|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"completed","label":"Completed","comments":0,"evidence":1}]}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction"
          data-f-species=""
          data-f-type="Survey"
          data-f-frequency="Recurring"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct Baseline Food Web Resource Surveys"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct Baseline Food Web Resource Surveys"
            >Conduct Baseline Food Web Resource Surveys</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct Baseline Invasive Plant Survey"
          data-item='{"memberId":"act_01M2G6Y3XZ7WK0185QGKR01860","id":"act_01M2G6Y3XZ7WK0185QGKR01860","title":"Conduct Baseline Invasive Plant Survey","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMJV4F9SC76BM0QNDZZVY","code":"COA 11.19","name":"Conduct Pre-Project Baseline Invasive Plant Survey","index":["Water::Invasive species","People and qualifications::Designated biologists and monitors"]}],"impls":[{"id":"act_01M2G6Y3XZ7WK0185QGKR01860|twin-cities-complex","component":"Twin Cities Complex","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3XZ7WK0185QGKR01860|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"overdue","label":"Overdue","comments":0,"evidence":5},{"id":"act_01M2G6Y3XZ7WK0185QGKR01860|byron-tract-forebay","component":"Byron Tract Forebay","status":"in-progress","label":"In Progress","comments":2,"evidence":1}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction"
          data-f-species=""
          data-f-type="Survey"
          data-f-frequency="Onetime"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct Baseline Invasive Plant Survey"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct Baseline Invasive Plant Survey"
            >Conduct Baseline Invasive Plant Survey</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct Baseline TRBL Habitat Assessment"
          data-item='{"memberId":"act_01M2G6Y3Y008XT5YC8FTSZY6J9","id":"act_01M2G6Y3Y008XT5YC8FTSZY6J9","title":"Conduct Baseline TRBL Habitat Assessment","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMQRFGZFYAMZ3JVECQ9GW","code":"COA 11.83","name":"Conduct Baseline TRBL Habitat Assessment Each Project Phase","index":["Birds::Nesting birds"]}],"impls":[{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6J9|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6J9|intake-c-north-delta","component":"Intake C — North Delta","status":"completed","label":"Completed","comments":0,"evidence":2},{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6J9|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"overdue","label":"Overdue","comments":0,"evidence":4}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species="tricolored blackbird"
          data-f-type="Survey"
          data-f-frequency="AsNeeded"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct Baseline TRBL Habitat Assessment"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct Baseline TRBL Habitat Assessment"
            >Conduct Baseline TRBL Habitat Assessment</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct CTS Walking Clearance Survey Before Ground Disturbance"
          data-item='{"memberId":"act_01M2G6Y3XZ7WK0185QGKR01861","id":"act_01M2G6Y3XZ7WK0185QGKR01861","title":"Conduct CTS Walking Clearance Survey Before Ground Disturbance","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMMAY0PGV8V7Z8ACMASBH","code":"COA 11.42","name":"Complete Walking Clearance Survey Before Clearing or Ground Disturbance","index":["Amphibians and reptiles::Amphibians"]}],"impls":[{"id":"act_01M2G6Y3XZ7WK0185QGKR01861|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"on-hold","label":"On Hold","comments":0,"evidence":5},{"id":"act_01M2G6Y3XZ7WK0185QGKR01861|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="california tiger salamander"
          data-f-type="Survey"
          data-f-frequency="AsNeeded"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct CTS Walking Clearance Survey Before Ground Disturbance"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct CTS Walking Clearance Survey Before Ground Disturbance"
            >Conduct CTS Walking Clearance Survey Before Ground Disturbance</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct GGS Survey Before Exclusion Fencing Installation"
          data-item='{"memberId":"act_01M2G6Y3Y008XT5YC8FTSZY6J3","id":"act_01M2G6Y3Y008XT5YC8FTSZY6J3","title":"Conduct GGS Survey Before Exclusion Fencing Installation","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMNSXG45H0H0SE68K0EPE","code":"COA 11.56","name":"Survey Within 24 Hours Before Exclusion Fencing Installation","index":["Amphibians and reptiles::Giant garter snake","Habitat protection::Exclusion fencing and ESAs"]}],"impls":[{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6J3|intake-c-north-delta","component":"Intake C — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":0},{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6J3|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction"
          data-f-species="giant garter snake"
          data-f-type="Survey"
          data-f-frequency="AsNeeded"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct GGS Survey Before Exclusion Fencing Installation"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct GGS Survey Before Exclusion Fencing Installation"
            >Conduct GGS Survey Before Exclusion Fencing Installation</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct Habitat Evaluation Field Survey"
          data-item='{"memberId":"act_01M2G6Y3XZ7WK0185QGKR0185X","id":"act_01M2G6Y3XZ7WK0185QGKR0185X","title":"Conduct Habitat Evaluation Field Survey","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMES8P77HCP3S39H7JS57","code":"COA 10.8","name":"Conduct Preconstruction Habitat Evaluation Field Survey","index":["Habitat protection::Habitat avoidance and work footprint","Habitat protection::Habitat impact tracking"]}],"impls":[{"id":"act_01M2G6Y3XZ7WK0185QGKR0185X|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"overdue","label":"Overdue","comments":0,"evidence":5}]}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction"
          data-f-species=""
          data-f-type="Survey"
          data-f-frequency="Onetime"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct Habitat Evaluation Field Survey"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct Habitat Evaluation Field Survey"
            >Conduct Habitat Evaluation Field Survey</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct Nesting-Season SWHA Survey Before Field Investigations"
          data-item='{"memberId":"act_01M2G6Y3Y008XT5YC8FTSZY6J8","id":"act_01M2G6Y3Y008XT5YC8FTSZY6J8","title":"Conduct Nesting-Season SWHA Survey Before Field Investigations","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMQFNFZT5HSCXF6R3A3F3","code":"COA 11.78","name":"Survey for Nesting SWHA Before In-Season Field Investigations","index":["Birds::Nesting birds"]}],"impls":[{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6J8|intake-c-north-delta","component":"Intake C — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":5},{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6J8|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"on-hold","label":"On Hold","comments":3,"evidence":4}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction"
          data-f-species="swainson’s hawk"
          data-f-type="Survey"
          data-f-frequency="AsNeeded"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct Nesting-Season SWHA Survey Before Field Investigations"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct Nesting-Season SWHA Survey Before Field Investigations"
            >Conduct Nesting-Season SWHA Survey Before Field Investigations</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct Post-Dewatering GGS Clearance Survey"
          data-item='{"memberId":"act_01M2G6Y3Y008XT5YC8FTSZY6J4","id":"act_01M2G6Y3Y008XT5YC8FTSZY6J4","title":"Conduct Post-Dewatering GGS Clearance Survey","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMP4K7W5XYW0R2Z17AQ17","code":"COA 11.61","name":"Survey for GGS Following Dewatering","index":["Water::Dewatering","Amphibians and reptiles::Giant garter snake"]}],"impls":[{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6J4|intake-c-north-delta","component":"Intake C — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":0},{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6J4|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction"
          data-f-species="giant garter snake"
          data-f-type="Survey"
          data-f-frequency="Onetime"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct Post-Dewatering GGS Clearance Survey"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct Post-Dewatering GGS Clearance Survey"
            >Conduct Post-Dewatering GGS Clearance Survey</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct Pre-Activity CBB Foraging and Nest Surveys"
          data-item='{"memberId":"act_01M2G6Y3Y008XT5YC8FTSZY6JF","id":"act_01M2G6Y3Y008XT5YC8FTSZY6JF","title":"Conduct Pre-Activity CBB Foraging and Nest Surveys","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMRVJYG082T0SAE12EZMC","code":"COA 11.100","name":"Repeat CBB Survey After a 14-Day Work Stoppage","index":["Plants and invertebrates::Bumble bees and monarchs"]},{"id":"req_01M2ESMRP89YS91R7CZY0S628H","code":"COA 11.97","name":"Conduct Pre-Activity CBB Surveys During Construction/Maintenance","index":["Plants and invertebrates::Bumble bees and monarchs"]},{"id":"req_01M2ESMRSSQJYJZ5K02FM5E253","code":"COA 11.99","name":"Survey Undisturbed CBB Habitat Before Activities Begin","index":["Plants and invertebrates::Bumble bees and monarchs"]}],"impls":[{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6JF|byron-tract-forebay","component":"Byron Tract Forebay","status":"on-hold","label":"On Hold","comments":0,"evidence":0},{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6JF|intake-b-north-delta","component":"Intake B — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":4}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="crotch bumble bee"
          data-f-type="Survey"
          data-f-frequency="Recurring"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct Pre-Activity CBB Foraging and Nest Surveys"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct Pre-Activity CBB Foraging and Nest Surveys"
            >Conduct Pre-Activity CBB Foraging and Nest Surveys</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct Preconstruction CBB Habitat Survey"
          data-item='{"memberId":"act_01M2G6Y3Y008XT5YC8FTSZY6JE","id":"act_01M2G6Y3Y008XT5YC8FTSZY6JE","title":"Conduct Preconstruction CBB Habitat Survey","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMRMD5X4C2ZD982W42P4T","code":"COA 11.96","name":"Conduct Preconstruction CBB Habitat Assessment Survey","index":["Plants and invertebrates::Bumble bees and monarchs"]}],"impls":[{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6JE|byron-tract-forebay","component":"Byron Tract Forebay","status":"overdue","label":"Overdue","comments":0,"evidence":6},{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6JE|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species="crotch bumble bee"
          data-f-type="Survey"
          data-f-frequency="Onetime"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct Preconstruction CBB Habitat Survey"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct Preconstruction CBB Habitat Survey"
            >Conduct Preconstruction CBB Habitat Survey</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct Preconstruction GGS Survey"
          data-item='{"memberId":"act_01M2G6Y3XZ7WK0185QGKR01863","id":"act_01M2G6Y3XZ7WK0185QGKR01863","title":"Conduct Preconstruction GGS Survey","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMNSWCZGT0M3FST201ZGF","code":"COA 11.56","name":"Conduct GGS Preconstruction Survey and Submit Results to CDFW","index":["Amphibians and reptiles::Giant garter snake","Agency reporting and approvals::Schedule notices"]}],"impls":[{"id":"act_01M2G6Y3XZ7WK0185QGKR01863|byron-tract-forebay","component":"Byron Tract Forebay","status":"in-progress","label":"In Progress","comments":0,"evidence":3}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction"
          data-f-species="giant garter snake"
          data-f-type="Survey"
          data-f-frequency="Onetime"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct Preconstruction GGS Survey"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct Preconstruction GGS Survey"
            >Conduct Preconstruction GGS Survey</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct Preconstruction MALI Survey"
          data-item='{"memberId":"act_01M2G6Y3XZ7WK0185QGKR0185Y","id":"act_01M2G6Y3XZ7WK0185QGKR0185Y","title":"Conduct Preconstruction MALI Survey","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMS4B6RKD5GF8X6CCJ5FR","code":"COA 11.105","name":"Conduct Preconstruction MALI Floristic Survey","index":["Plants and invertebrates::Special-status plants"]}],"impls":[{"id":"act_01M2G6Y3XZ7WK0185QGKR0185Y|twin-cities-complex","component":"Twin Cities Complex","status":"on-hold","label":"On Hold","comments":0,"evidence":1},{"id":"act_01M2G6Y3XZ7WK0185QGKR0185Y|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction"
          data-f-species="mason’s lilaeopsis"
          data-f-type="Survey"
          data-f-frequency="Onetime"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct Preconstruction MALI Survey"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct Preconstruction MALI Survey"
            >Conduct Preconstruction MALI Survey</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct Preconstruction SWHA Nest Tree Survey"
          data-item='{"memberId":"act_01M2G6Y3Y008XT5YC8FTSZY6J7","id":"act_01M2G6Y3Y008XT5YC8FTSZY6J7","title":"Conduct Preconstruction SWHA Nest Tree Survey","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMQ3AH38XGY89WZCHJ04Q","code":"COA 11.71","name":"Conduct and Submit Preconstruction SWHA Nest Tree Survey","index":["Birds::Nesting birds"]}],"impls":[{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6J7|byron-tract-forebay","component":"Byron Tract Forebay","status":"completed","label":"Completed","comments":0,"evidence":3}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction"
          data-f-species="swainson’s hawk"
          data-f-type="Survey"
          data-f-frequency="Onetime"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct Preconstruction SWHA Nest Tree Survey"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct Preconstruction SWHA Nest Tree Survey"
            >Conduct Preconstruction SWHA Nest Tree Survey</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct Preconstruction TRBL Breeding-Colony Surveys"
          data-item='{"memberId":"act_01M2G6Y3Y008XT5YC8FTSZY6JB","id":"act_01M2G6Y3Y008XT5YC8FTSZY6JB","title":"Conduct Preconstruction TRBL Breeding-Colony Surveys","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMQW0R26AHJ3VWDQJPY91","code":"COA 11.84.1","name":"Conduct Seasonal Preconstruction Surveys for TRBL Breeding Colonies and Nesting Habitat","index":["Birds::Nesting birds","Birds::Tricolored blackbird"]}],"impls":[{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6JB|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"completed","label":"Completed","comments":0,"evidence":5},{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6JB|byron-tract-forebay","component":"Byron Tract Forebay","status":"overdue","label":"Overdue","comments":0,"evidence":6},{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6JB|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction"
          data-f-species="tricolored blackbird"
          data-f-type="Survey"
          data-f-frequency="Recurring"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct Preconstruction TRBL Breeding-Colony Surveys"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct Preconstruction TRBL Breeding-Colony Surveys"
            >Conduct Preconstruction TRBL Breeding-Colony Surveys</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct Preconstruction TRBL Habitat Survey"
          data-item='{"memberId":"act_01M2G6Y3Y008XT5YC8FTSZY6JA","id":"act_01M2G6Y3Y008XT5YC8FTSZY6JA","title":"Conduct Preconstruction TRBL Habitat Survey","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMQT7T8P4JGZD5SRSA4NQ","code":"COA 11.84","name":"Survey TRBL Habitat and Acquire Colony Data Before Any Covered Activities","index":["Birds::Nesting birds"]}],"impls":[{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6JA|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6JA|byron-tract-forebay","component":"Byron Tract Forebay","status":"on-hold","label":"On Hold","comments":0,"evidence":6},{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6JA|intake-b-north-delta","component":"Intake B — North Delta","status":"completed","label":"Completed","comments":0,"evidence":5}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction"
          data-f-species="tricolored blackbird"
          data-f-type="Survey"
          data-f-frequency="Onetime"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct Preconstruction TRBL Habitat Survey"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct Preconstruction TRBL Habitat Survey"
            >Conduct Preconstruction TRBL Habitat Survey</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct Preconstruction TRBL Roosting-Habitat Surveys"
          data-item='{"memberId":"act_01M2G6Y3Y008XT5YC8FTSZY6JC","id":"act_01M2G6Y3Y008XT5YC8FTSZY6JC","title":"Conduct Preconstruction TRBL Roosting-Habitat Surveys","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMQXRJSFK7M57RNRQWDG6","code":"COA 11.84.2","name":"Conduct Preconstruction Roosting Habitat Surveys During the Nonbreeding Season","index":["Birds::Nesting birds","Birds::Tricolored blackbird"]}],"impls":[{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6JC|intake-b-north-delta","component":"Intake B — North Delta","status":"on-hold","label":"On Hold","comments":0,"evidence":5}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species="tricolored blackbird"
          data-f-type="Survey"
          data-f-frequency="Recurring"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct Preconstruction TRBL Roosting-Habitat Surveys"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct Preconstruction TRBL Roosting-Habitat Surveys"
            >Conduct Preconstruction TRBL Roosting-Habitat Surveys</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct Sacramento River Bathymetric Surveys Near the Intakes"
          data-item='{"memberId":"act_01M2G6Y3XZ7WK0185QGKR0185V","id":"act_01M2G6Y3XZ7WK0185QGKR0185V","title":"Conduct Sacramento River Bathymetric Surveys Near the Intakes","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMGVCT9X0A51HY1Y8JGYA","code":"COA 10.23","name":"Conduct Sacramento River Bathymetric Surveys Near Intakes","index":["Water operations::Operations monitoring and studies"]}],"impls":[{"id":"act_01M2G6Y3XZ7WK0185QGKR0185V|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":3,"evidence":0},{"id":"act_01M2G6Y3XZ7WK0185QGKR0185V|twin-cities-complex","component":"Twin Cities Complex","status":"on-hold","label":"On Hold","comments":0,"evidence":2},{"id":"act_01M2G6Y3XZ7WK0185QGKR0185V|bouldin-island-launch-shaft","component":"Bouldin Island Launch Shaft","status":"in-progress","label":"In Progress","comments":0,"evidence":0}]}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-type="Survey"
          data-f-frequency="Recurring"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct Sacramento River Bathymetric Surveys Near the Intakes"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct Sacramento River Bathymetric Surveys Near the Intakes"
            >Conduct Sacramento River Bathymetric Surveys Near the Intakes</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Establish Restoration Treatment and Reference Transects"
          data-item='{"memberId":"act_01M2G6Y3Y1MDXG6FS3PQ7VM4YJ","id":"act_01M2G6Y3Y1MDXG6FS3PQ7VM4YJ","title":"Establish Restoration Treatment and Reference Transects","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMTWZNQTVFA2YPJBP8E28","code":"COA 12.3.3","name":"Establish Reference and Treatment Transects for Restoration","index":["Mitigation and restoration::Restoration","Habitat protection::Habitat impact tracking"]}],"impls":[{"id":"act_01M2G6Y3Y1MDXG6FS3PQ7VM4YJ|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":1,"evidence":0}]}'
          data-f-commitment="COA 12"
          data-f-phase="Pre-Construction"
          data-f-species=""
          data-f-type="Survey"
          data-f-frequency="Onetime"
          data-f-deliverable="other"
        >
          <esa-checkbox
            size="sm"
            aria-label="Establish Restoration Treatment and Reference Transects"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Establish Restoration Treatment and Reference Transects"
            >Establish Restoration Treatment and Reference Transects</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Flag Burrows and Habitat Features Before Earthmoving"
          data-item='{"memberId":"act_01M2G6Y3Y008XT5YC8FTSZY6J5","id":"act_01M2G6Y3Y008XT5YC8FTSZY6J5","title":"Flag Burrows and Habitat Features Before Earthmoving","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMMXNW06J2K6JTX9DFAKH","code":"COA 11.49.1","name":"Flag Burrows and Habitat Features Before Earthmoving","index":["Amphibians and reptiles::Amphibians","Habitat protection::Exclusion fencing and ESAs"]},{"id":"req_01M2ESMNMMW9SG3Q6Z79Q52X06","code":"COA 11.54","name":"Identify and Flag Avoidable Burrows Before Ground Disturbance","index":["Habitat protection::Habitat avoidance and work footprint","Habitat protection::Exclusion fencing and ESAs","Amphibians and reptiles::Giant garter snake"]},{"id":"req_01M2ESMP86ZDJDW04YY8YTW5QH","code":"COA 11.62.1","name":"Flag Burrows and Habitat Features Outside the Disturbance Footprint","index":["Amphibians and reptiles::Giant garter snake","Habitat protection::Exclusion fencing and ESAs"]}],"impls":[{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6J5|intake-b-north-delta","component":"Intake B — North Delta","status":"not-started","label":"Not Started","comments":3,"evidence":0},{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6J5|intake-c-north-delta","component":"Intake C — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":2},{"id":"act_01M2G6Y3Y008XT5YC8FTSZY6J5|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"completed","label":"Completed","comments":0,"evidence":5}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction"
          data-f-species="california tiger salamander|giant garter snake"
          data-f-type="Survey"
          data-f-frequency="Onetime"
          data-f-deliverable="other"
        >
          <esa-checkbox
            size="sm"
            aria-label="Flag Burrows and Habitat Features Before Earthmoving"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Flag Burrows and Habitat Features Before Earthmoving"
            >Flag Burrows and Habitat Features Before Earthmoving</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Fund and Implement the DS/LFS Spawning Habitat Study"
          data-item='{"memberId":"act_01M2G6Y3XYHN837NKGVMS0K46Y","id":"act_01M2G6Y3XYHN837NKGVMS0K46Y","title":"Fund and Implement the DS/LFS Spawning Habitat Study","chip":{"label":"Survey","tone":"action"},"groupId":"Survey","groupName":"Survey","reqs":[{"id":"req_01M2ESMGF1TSJX5H4GGJY5YZCJ","code":"COA 10.21.5","name":"Fund and Implement DS/LFS Spawning Habitat Study","index":["Water operations::Operations monitoring and studies"]}],"impls":[{"id":"act_01M2G6Y3XYHN837NKGVMS0K46Y|intake-c-north-delta","component":"Intake C — North Delta","status":"completed","label":"Completed","comments":0,"evidence":3},{"id":"act_01M2G6Y3XYHN837NKGVMS0K46Y|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"in-progress","label":"In Progress","comments":1,"evidence":4}]}'
          data-f-commitment="COA 10"
          data-f-phase="Pre-Construction|Construction|Operations"
          data-f-species="delta smelt|longfin smelt"
          data-f-type="Survey"
          data-f-frequency="Onetime"
          data-f-deliverable="survey"
        >
          <esa-checkbox
            size="sm"
            aria-label="Fund and Implement the DS/LFS Spawning Habitat Study"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Fund and Implement the DS/LFS Spawning Habitat Study"
            >Fund and Implement the DS/LFS Spawning Habitat Study</span
          >
        </li>
      </ul>
    </details>
    <details class="bcn-lao__cat" data-lam-group="TrainingAndEducation">
      <summary class="bcn-lao__row bcn-lao__row--cat">
        <span class="bcn-lao__chevron" aria-hidden="true"
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
        ><span class="bcn-lao__name">Training &amp; Education</span
        ><span data-lao-count=""
          ><span class="bcn-swcb" aria-label="4 actions available">4</span></span
        >
      </summary>
      <ul class="bcn-lao__opts bcn-lam__opts">
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct Spill Response and Containment Training"
          data-item='{"memberId":"act_01M2G6Y40SJ78J9AJM2D416MYN","id":"act_01M2G6Y40SJ78J9AJM2D416MYN","title":"Conduct Spill Response and Containment Training","chip":{"label":"Training &amp; Education","tone":"action"},"groupId":"TrainingAndEducation","groupName":"Training &amp; Education","reqs":[{"id":"req_01M2ESMK3ZJQ9BHNEKAKFQY2VD","code":"COA 11.22","name":"Train Personnel in Emergency Response and Spill Containment","index":["People and qualifications::Worker training","Hazards::Spill prevention and response"]}],"impls":[{"id":"act_01M2G6Y40SJ78J9AJM2D416MYN|byron-tract-forebay","component":"Byron Tract Forebay","status":"not-started","label":"Not Started","comments":0,"evidence":0},{"id":"act_01M2G6Y40SJ78J9AJM2D416MYN|intake-b-north-delta","component":"Intake B — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction"
          data-f-species=""
          data-f-type="TrainingAndEducation"
          data-f-frequency=""
          data-f-deliverable="training"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct Spill Response and Containment Training"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct Spill Response and Containment Training"
            >Conduct Spill Response and Containment Training</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Conduct Worker Education Program and Annual Refresher Training"
          data-item='{"memberId":"act_01M2G6Y40SJ78J9AJM2D416MYM","id":"act_01M2G6Y40SJ78J9AJM2D416MYM","title":"Conduct Worker Education Program and Annual Refresher Training","chip":{"label":"Training &amp; Education","tone":"action"},"groupId":"TrainingAndEducation","groupName":"Training &amp; Education","reqs":[{"id":"req_01M2ESMQPQTBPN9DN4Z6YVY3D8","code":"COA 11.82","name":"Train Project Personnel on TRBL Avoidance and Buffer Protocols","index":["People and qualifications::Worker training","Birds::Nesting birds"]},{"id":"req_01M2ESMDG5ZAFW7GT3S4AFYDA4","code":"COA 9.4","name":"Conduct Worker Education Program Before Work Begins","index":["People and qualifications::Worker training"]},{"id":"req_01M2ESMDG5ZAFW7GT3S4AFYDA5","code":"COA 9.4","name":"Repeat Worker Education Annually for Long-Term Employees","index":["People and qualifications::Worker training"]}],"impls":[{"id":"act_01M2G6Y40SJ78J9AJM2D416MYM|byron-tract-forebay","component":"Byron Tract Forebay","status":"in-progress","label":"In Progress","comments":0,"evidence":0},{"id":"act_01M2G6Y40SJ78J9AJM2D416MYM|intake-b-north-delta","component":"Intake B — North Delta","status":"completed","label":"Completed","comments":0,"evidence":2}]}'
          data-f-commitment="COA 11|COA 9"
          data-f-phase="Pre-Construction|Construction|Maintenance|Operations"
          data-f-species="tricolored blackbird"
          data-f-type="TrainingAndEducation"
          data-f-frequency="Recurring"
          data-f-deliverable="training"
        >
          <esa-checkbox
            size="sm"
            aria-label="Conduct Worker Education Program and Annual Refresher Training"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Conduct Worker Education Program and Annual Refresher Training"
            >Conduct Worker Education Program and Annual Refresher Training</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Train and Staff Fish Salvage Teams Before Site Access"
          data-item='{"memberId":"act_01M2G6Y40SJ78J9AJM2D416MYQ","id":"act_01M2G6Y40SJ78J9AJM2D416MYQ","title":"Train and Staff Fish Salvage Teams Before Site Access","chip":{"label":"Training &amp; Education","tone":"action"},"groupId":"TrainingAndEducation","groupName":"Training &amp; Education","reqs":[{"id":"req_01M2ESMKWX75VN6Q904Q7QHHXP","code":"COA 11.35","name":"Train and Staff Fish Salvage Teams with a Biologist","index":["Fish::Fish rescue and salvage","People and qualifications::Worker training","People and qualifications::Designated biologists and monitors"]}],"impls":[{"id":"act_01M2G6Y40SJ78J9AJM2D416MYQ|intake-c-north-delta","component":"Intake C — North Delta","status":"completed","label":"Completed","comments":0,"evidence":2},{"id":"act_01M2G6Y40SJ78J9AJM2D416MYQ|bethany-reservoir-aqueduct","component":"Bethany Reservoir Aqueduct","status":"completed","label":"Completed","comments":0,"evidence":1},{"id":"act_01M2G6Y40SJ78J9AJM2D416MYQ|southern-forebay-pumping-plant","component":"Southern Forebay &amp; Pumping Plant","status":"not-started","label":"Not Started","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species=""
          data-f-type="TrainingAndEducation"
          data-f-frequency="Onetime"
          data-f-deliverable="training"
        >
          <esa-checkbox
            size="sm"
            aria-label="Train and Staff Fish Salvage Teams Before Site Access"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Train and Staff Fish Salvage Teams Before Site Access"
            >Train and Staff Fish Salvage Teams Before Site Access</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Train Tugboat and Barge Operators on Habitat Impacts"
          data-item='{"memberId":"act_01M2G6Y40SJ78J9AJM2D416MYP","id":"act_01M2G6Y40SJ78J9AJM2D416MYP","title":"Train Tugboat and Barge Operators on Habitat Impacts","chip":{"label":"Training &amp; Education","tone":"action"},"groupId":"TrainingAndEducation","groupName":"Training &amp; Education","reqs":[{"id":"req_01M2ESMKYPBG0Z69DC9K48B19J","code":"COA 11.36","name":"Train Tugboat and Barge Operators","index":["People and qualifications::Worker training","Water::Barge and vessel operations"]}],"impls":[{"id":"act_01M2G6Y40SJ78J9AJM2D416MYP|intake-b-north-delta","component":"Intake B — North Delta","status":"in-progress","label":"In Progress","comments":0,"evidence":0}]}'
          data-f-commitment="COA 11"
          data-f-phase="Pre-Construction|Construction"
          data-f-species=""
          data-f-type="TrainingAndEducation"
          data-f-frequency=""
          data-f-deliverable="training"
        >
          <esa-checkbox
            size="sm"
            aria-label="Train Tugboat and Barge Operators on Habitat Impacts"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Train Tugboat and Barge Operators on Habitat Impacts"
            >Train Tugboat and Barge Operators on Habitat Impacts</span
          >
        </li>
      </ul>
    </details>
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
.bcn-lam__opts {
  padding-inline-start: calc(var(--spacing-200) + 22px);
}
.bcn-lam__opts--flat {
  padding-inline-start: var(--spacing-200);
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
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```

## Tokens
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-overlay-hover`: #00000008 _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--filter-container-padding`: 0 _(component)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-size-050`: clamp(.5rem, .44rem + .3vw, .625rem) _(primitive)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-sm`: .25rem _(semantic)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
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
