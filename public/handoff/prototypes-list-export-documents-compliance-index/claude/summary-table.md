# Summary table

One line per item across the whole index, with category, subcategory and kind as full-width rows over one repeating header.

## Key decisions
- Same single-table build as the list PDFs; the kind label is a third full-width row inside each subcategory.

## Done when
- Every printed page of the summary starts with the Item / Type / Commitments header.

## Markup
```html
<table class="bcn-doc-summary">
  <colgroup>
    <col style="width: 56%" />
    <col style="width: 24%" />
    <col />
  </colgroup>
  <thead>
    <tr>
      <th scope="col">Item</th>
      <th scope="col">Type</th>
      <th scope="col">Commitments</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bcn-doc-summary__group">
      <th scope="colgroup" colspan="3">Agency reporting and approvals</th>
    </tr>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Agency approvals</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Calculate Phase Security Amount Before Phase Approval</th>
      <td>Financial</td>
      <td>COA 13.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Consult CDFW on Federal Biological Opinions</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 4</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Coordinate with CDFW on Breeding Habitat Buffer Encroachment</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 11.40</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Notify and Consult CDFW on ITP Amendment Conditions</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 8, COA 10.18.3, COA 12</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Obtain CDFW Approval for In-Channel Work in the GGS Active Season
      </th>
      <td>Approval &amp; Consultation</td>
      <td>COA 11.60</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Obtain CDFW Approval of Dewatering Measure Deviations</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 11.61</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Obtain CDFW Approval of HM Lands Before Acquisition</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 12.11.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Obtain CDFW Approval of Nighttime Covered Activities</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 11.7</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Obtain CDFW Approval of the Mitigation or Conservation Bank</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 12.10</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Obtain CDFW Approval to Extend Phase 1 Operations</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 11.110</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Obtain CDFW Approval to Work Outside the Seasonal Window</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 11.59</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Obtain CESA Authorization for HM Lands Activities</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 12</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Aquatic Conditions Assessments with the Phase 2 Package</th>
      <td>Reporting</td>
      <td>COA 10.18</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Construction Phase Authorization Package to CDFW</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 6, COA 6.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Fish Study Plans and Reports for CDFW Approval</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 10.18.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Joint Operations Study Results and Compliance Report</th>
      <td>Reporting</td>
      <td>COA 10.21.8</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Phase 2 Authorization Package to CDFW</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 7, COA 7.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Pre-implementation Phase Authorization Package to CDFW</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 6.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Submit Preconstruction Habitat Survey Results in the Phase Package
      </th>
      <td>Reporting</td>
      <td>COA 10.8</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Species and Habitat Survey Protocols to CDFW</th>
      <td>Plan</td>
      <td>COA 6.1, COA 11.38</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Subsurface Vibration Study Results to CDFW</th>
      <td>Reporting</td>
      <td>COA 10.17</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Supplemental Phase 1 Operations Data Before Phase 2</th>
      <td>Reporting</td>
      <td>COA 7.1</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Non-compliance reporting</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Notify CDFW of Inability to Comply with the ITP</th>
      <td>Reporting</td>
      <td>COA 9.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Report ITP Non-Compliance to CDFW</th>
      <td>Reporting</td>
      <td>COA 10.2</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Periodic compliance reports</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Deliver Final Phase Mitigation Report to CDFW</th>
      <td>Reporting</td>
      <td>COA 10.15</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Deliver Mitigation Status Report Before ITP Expiration</th>
      <td>Reporting</td>
      <td>COA 10.15.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Photo Monitoring Documentation Report</th>
      <td>Reporting</td>
      <td>COA 10.6</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Schedule notices</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct Preconstruction GGS Survey</th>
      <td>Survey</td>
      <td>COA 11.56</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Notify CDFW 14 Days Before Starting Covered Activities</th>
      <td>Reporting</td>
      <td>COA 10.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Notify CDFW 60 Days Before In-Water Maintenance</th>
      <td>Reporting</td>
      <td>COA 11.31.2</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Species sightings and CNDDB reporting</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Report Covered Species Sightings to CDFW</th>
      <td>Reporting</td>
      <td>COA 10.7, COA 11.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Covered Species Observations to CNDDB</th>
      <td>Reporting</td>
      <td>COA 10.14</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Biological Monitor daily communication and immediate reports to the Designated
        Biologist
      </th>
      <td>Notify</td>
      <td>COA 9.2.2</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Take and injury reporting</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Consult CDFW on Deceased CTS Specimen Disposal</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 11.52.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Notify CDFW of Potential CBB Nest Loss</th>
      <td>Reporting</td>
      <td>COA 11.102</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Notify CDFW of TRBL Nest or Colony Abandonment or Distress</th>
      <td>Reporting</td>
      <td>COA 11.93</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Notify the Designated Biologist of CBB, CTS or SWHA Take or Injury
      </th>
      <td>Reporting</td>
      <td>COA 11.52, COA 11.81, COA 11.103</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Notify the Designated Biologist of Covered Species Take or Injury
      </th>
      <td>Reporting</td>
      <td>COA 10.16, COA 11.68, COA 11.93</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Report CBB, CTS and SWHA Take or Injury Incidents to CDFW</th>
      <td>Reporting</td>
      <td>COA 11.52, COA 11.52.2, COA 11.81, COA 11.103</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Report Covered Species Take or Injury to CDFW</th>
      <td>Reporting</td>
      <td>
        COA 10.16, COA 11.2, COA 11.52.4, COA 11.68, COA 11.68.2, COA 11.68.4, COA 11.93
      </td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Report GGS Relocations to CDFW</th>
      <td>Reporting</td>
      <td>COA 11.67.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Phase 2 Project Operations Report to CDFW</th>
      <td>Reporting</td>
      <td>COA 7.5</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Carcass salvage, labeling and storage for the wildlife health lab
      </th>
      <td>Adhere</td>
      <td>COA 11.103</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__group">
      <th scope="colgroup" colspan="3">Air quality</th>
    </tr>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Fugitive dust</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Plant Vegetative Ground Cover on Disturbed Areas</th>
      <td>Avoidance &amp; BMPs</td>
      <td>COA 11.29</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Fugitive Dust Control and Monitoring Plan</th>
      <td>Plan</td>
      <td>COA 11.29</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Access Route Surface Stabilization</th>
      <td>Adhere</td>
      <td>COA 11.29</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Dryer and Conveyor Enclosure</th>
      <td>Adhere</td>
      <td>COA 11.29</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Dust Complaint Sign</th>
      <td>Adhere</td>
      <td>COA 11.29</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Fugitive Dust Suppression</th>
      <td>Adhere</td>
      <td>COA 11.29, COA 11.55, COA 11.69</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Haul Truck Cover and Freeboard</th>
      <td>Adhere</td>
      <td>COA 11.29</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Inactive Area Stabilization</th>
      <td>Adhere</td>
      <td>COA 11.29</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Prompt Paving After Grading</th>
      <td>Adhere</td>
      <td>COA 11.29</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Stabilized Construction Entrances</th>
      <td>Adhere</td>
      <td>COA 11.29</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Stockpile Tackifier Application</th>
      <td>Adhere</td>
      <td>COA 11.29</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Tire Wash Stations</th>
      <td>Adhere</td>
      <td>COA 11.29</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Track-Out Removal</th>
      <td>Adhere</td>
      <td>COA 11.29</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Wind Breaks</th>
      <td>Adhere</td>
      <td>COA 11.29</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__group">
      <th scope="colgroup" colspan="3">Amphibians and reptiles</th>
    </tr>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Amphibians</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct and Report Annual CTS Surveys</th>
      <td>Survey</td>
      <td>COA 11.42</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct CTS Walking Clearance Survey Before Ground Disturbance</th>
      <td>Survey</td>
      <td>COA 11.42</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct daily clearance surveys before work begins</th>
      <td>Avoidance &amp; BMPs</td>
      <td>COA 11.48</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Consult CDFW on Non-Native or Hybrid Salamander Measures</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 11.53</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Report Barred Tiger Salamander or Hybrid Detections to CDFW</th>
      <td>Reporting</td>
      <td>COA 11.53</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit CTS Relocation Plan</th>
      <td>Plan</td>
      <td>COA 11.51</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Preconstruction CTS Burrow Watering Protocol</th>
      <td>Plan</td>
      <td>COA 11.42.1</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Biological monitoring of initial grading and excavation</th>
      <td>Monitor</td>
      <td>COA 11.42, COA 11.48, COA 11.62.1, COA 11.63</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Biologist presence during site selection, access and set-up</th>
      <td>Monitor</td>
      <td>COA 11.41, COA 11.55, COA 11.65</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Biologist survey before work resumes after rain</th>
      <td>Monitor</td>
      <td>COA 11.13</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Breeding habitat no-activity buffer</th>
      <td>Adhere</td>
      <td>COA 11.40</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Burrow avoidance</th>
      <td>Adhere</td>
      <td>COA 11.49, COA 11.62</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Burrow Avoidance</th>
      <td>Adhere</td>
      <td>COA 11.56, COA 11.62.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Burrow monitoring when night lighting spills toward habitat</th>
      <td>Monitor</td>
      <td>COA 11.47</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Burrow release protocol</th>
      <td>Adhere</td>
      <td>COA 11.51.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Clearance survey after barrier repair</th>
      <td>Monitor</td>
      <td>COA 11.43, COA 11.62</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Daily burrow check before work starts</th>
      <td>Monitor</td>
      <td>COA 11.41, COA 11.65</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Habitat disturbance work window</th>
      <td>Adhere</td>
      <td>COA 11.40</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Habitat Disturbance Work Window</th>
      <td>Adhere</td>
      <td>COA 11.44, COA 11.58</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Hand excavation of burrows in the trench alignment</th>
      <td>Adhere</td>
      <td>COA 11.62</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Morning survey after burrow watering</th>
      <td>Monitor</td>
      <td>COA 11.42.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Mowing pattern</th>
      <td>Adhere</td>
      <td>COA 11.42.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Mowing Pattern</th>
      <td>Adhere</td>
      <td>COA 11.57</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Night Work Prohibition After Construction</th>
      <td>Adhere</td>
      <td>COA 11.7</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">No-Activity Buffer Around Occupied Burrows</th>
      <td>Adhere</td>
      <td>COA 11.55</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">No-activity buffer around occupied burrows and refugia</th>
      <td>Adhere</td>
      <td>COA 11.65</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Occupied burrow no-activity buffer</th>
      <td>Adhere</td>
      <td>COA 11.39, COA 11.41, COA 11.49.1, COA 11.62.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Presence surveys before and during each work day</th>
      <td>Monitor</td>
      <td>COA 11.63</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Presence surveys before and during each work day</th>
      <td>Monitor</td>
      <td>COA 11.48</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Site survey before work on days with rain forecast</th>
      <td>Monitor</td>
      <td>COA 11.45</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Yearly site assessment of the active season</th>
      <td>Monitor</td>
      <td>COA 11.46</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Giant garter snake</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Block burrows after confirming vacancy</th>
      <td>Avoidance &amp; BMPs</td>
      <td>COA 11.49, COA 11.49.1, COA 11.56, COA 11.62, COA 11.62.1, COA 11.62.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct and Report Annual GGS Surveys</th>
      <td>Survey</td>
      <td>COA 11.56</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct GGS Survey Before Exclusion Fencing Installation</th>
      <td>Survey</td>
      <td>COA 11.56</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct Post-Dewatering GGS Clearance Survey</th>
      <td>Survey</td>
      <td>COA 11.61</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Dewater aquatic habitat and hold the dry period</th>
      <td>Avoidance &amp; BMPs</td>
      <td>COA 11.61</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Install ESA fencing and identification signage</th>
      <td>Avoidance &amp; BMPs</td>
      <td>COA 11.54, COA 11.62.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit GGS Relocation Plan</th>
      <td>Plan</td>
      <td>COA 11.67</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Habitat Disturbance Footprint and ESAs for CDFW Approval</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 11.55, COA 11.62.1</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Avoidance of Federally Listed Species</th>
      <td>Adhere</td>
      <td>COA 11.54</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Canal bank disturbance avoidance</th>
      <td>Adhere</td>
      <td>COA 11.60</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Canal Bank Disturbance Avoidance</th>
      <td>Adhere</td>
      <td>COA 11.60</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Canal excavation limited to one side</th>
      <td>Adhere</td>
      <td>COA 11.60</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Canal Spoils Placement</th>
      <td>Adhere</td>
      <td>COA 11.60</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Daily inspection of environmentally sensitive area markings</th>
      <td>Monitor</td>
      <td>COA 11.54</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">ESA demarcation observed</th>
      <td>Adhere</td>
      <td>COA 11.65</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Flagging of suitable upland habitat at work sites</th>
      <td>Monitor</td>
      <td>COA 11.65</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">In-Channel Work Window</th>
      <td>Adhere</td>
      <td>COA 11.60</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Investigation of burrows for occupancy</th>
      <td>Monitor</td>
      <td>COA 11.56</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Maintenance Ground Disturbance Limit</th>
      <td>Adhere</td>
      <td>COA 11.65</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Resurvey after a lapse in covered activities</th>
      <td>Monitor</td>
      <td>COA 11.56</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Staging Area Setback from Habitat</th>
      <td>Adhere</td>
      <td>COA 11.55, COA 11.69</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Suitable habitat delineation maintained</th>
      <td>Monitor</td>
      <td>COA 11.78</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__group">
      <th scope="colgroup" colspan="3">Birds</th>
    </tr>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Bird strike diverters</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Bird Strike Diverter Location and Type Plan</th>
      <td>Plan</td>
      <td>COA 12.4</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Nesting birds</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct and Report Annual SWHA Nest Tree Surveys</th>
      <td>Survey</td>
      <td>COA 11.71</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct and Report Preconstruction SWHA Nest Monitoring</th>
      <td>Monitoring</td>
      <td>COA 11.73</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct Annual TRBL Survey During Construction</th>
      <td>Monitoring</td>
      <td>COA 11.84</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct Baseline TRBL Habitat Assessment</th>
      <td>Survey</td>
      <td>COA 11.83</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct Nesting-Season SWHA Survey Before Field Investigations</th>
      <td>Survey</td>
      <td>COA 11.78</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct Preconstruction SWHA Nest Tree Survey</th>
      <td>Survey</td>
      <td>COA 11.71</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct Preconstruction TRBL Breeding-Colony Surveys</th>
      <td>Survey</td>
      <td>COA 11.84.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct Preconstruction TRBL Habitat Survey</th>
      <td>Survey</td>
      <td>COA 11.84</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct Preconstruction TRBL Roosting-Habitat Surveys</th>
      <td>Survey</td>
      <td>COA 11.84.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Delineate and sign occupied nest and roost buffers</th>
      <td>Avoidance &amp; BMPs</td>
      <td>COA 11.72, COA 11.77</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Map and Submit Nesting, Foraging and Roosting Sites to CDFW</th>
      <td>Reporting</td>
      <td>COA 11.71, COA 11.83, COA 11.84</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Notify CDFW of Nest Survey Results Before Vegetation Removal</th>
      <td>Reporting</td>
      <td>COA 11.77</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Notify CDFW of SWHA Nest Abandonment or Distress</th>
      <td>Reporting</td>
      <td>COA 11.75, COA 11.81</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Notify CDFW of TRBL Colony or Roost Disturbance</th>
      <td>Reporting</td>
      <td>COA 11.86, COA 11.88</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Notify Designated Representative of SWHA Nest Distress</th>
      <td>Monitoring</td>
      <td>COA 11.75</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Obtain CDFW Approval of a Reduced SWHA Nest Buffer</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 11.72</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Obtain CDFW Approval to Remove or Trim a Known Nest Tree</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 11.76, COA 11.79</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Obtain CDFW Approval to Work During the SWHA Nesting Season</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 11.70</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Plant Replacement Swainson's Hawk Nest Trees</th>
      <td>Restoration &amp; Mitigation</td>
      <td>COA 12.5.1, COA 12.5.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Buffer Zone Designs and Locations for CDFW Approval</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 11.72, COA 11.85, COA 11.87, COA 11.106</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Preconstruction TRBL Survey Results to CDFW</th>
      <td>Reporting</td>
      <td>COA 11.84</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit SWHA Relocation Plan</th>
      <td>Plan</td>
      <td>COA 11.80</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit TRBL Relocation Plan</th>
      <td>Plan</td>
      <td>COA 11.92</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Active colony buffer</th>
      <td>Adhere</td>
      <td>COA 11.85, COA 11.86, COA 11.90</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Biologist stop-work authority for distressed nesting birds</th>
      <td>Monitor</td>
      <td>COA 11.75</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Break areas out of nest line of sight</th>
      <td>Adhere</td>
      <td>COA 11.74</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Break areas outside buffers</th>
      <td>Adhere</td>
      <td>COA 11.89</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Daily monitoring of an active colony near work</th>
      <td>Monitor</td>
      <td>COA 11.86</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Daily monitoring of an occupied roost site near work</th>
      <td>Monitor</td>
      <td>COA 11.88</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Daylight work limit near nests</th>
      <td>Adhere</td>
      <td>COA 11.73, COA 11.82</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Disruptive Activity Timing</th>
      <td>Adhere</td>
      <td>COA 11.82</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Distance-tiered nest observation during covered activities</th>
      <td>Monitor</td>
      <td>COA 11.73, COA 11.75</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Equipment staging out of nest line of sight</th>
      <td>Adhere</td>
      <td>COA 11.74</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Helicopter buffer from colonies</th>
      <td>Adhere</td>
      <td>COA 11.91</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Helicopter Daylight Limit</th>
      <td>Adhere</td>
      <td>COA 11.91</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Helicopter setback from nests</th>
      <td>Adhere</td>
      <td>COA 11.79</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Irrigation and maintenance of replacement nest trees</th>
      <td>Adhere</td>
      <td>COA 12.5.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Mixed flock roost occupancy presumption</th>
      <td>Adhere</td>
      <td>COA 11.84.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Monitoring of replacement nest trees</th>
      <td>Monitor</td>
      <td>COA 12.5.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Nest tree removal avoidance</th>
      <td>Adhere</td>
      <td>COA 11.79</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Nest Tree Removal Avoidance</th>
      <td>Adhere</td>
      <td>COA 11.76</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Nesting season work restriction</th>
      <td>Adhere</td>
      <td>COA 11.70, COA 11.78</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">No contact with occupied nest trees</th>
      <td>Adhere</td>
      <td>COA 11.74</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">No exiting vehicles within buffers</th>
      <td>Adhere</td>
      <td>COA 11.89</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">No physical contact with colonies</th>
      <td>Adhere</td>
      <td>COA 11.89</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">No removal of occupied nest trees</th>
      <td>Adhere</td>
      <td>COA 11.76, COA 11.79</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Occupancy checks of unoccupied roost sites during work</th>
      <td>Monitor</td>
      <td>COA 11.84.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Occupied nest no-activity buffer</th>
      <td>Adhere</td>
      <td>COA 11.78</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Occupied roost buffer</th>
      <td>Adhere</td>
      <td>COA 11.87, COA 11.88, COA 11.90</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Replacement nest tree survival standard and replanting</th>
      <td>Adhere</td>
      <td>COA 12.5.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Response to colonization adjacent to work</th>
      <td>Adhere</td>
      <td>COA 11.85</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Siting of replacement nest sites</th>
      <td>Adhere</td>
      <td>COA 12.5.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Stop work on signs of distress</th>
      <td>Adhere</td>
      <td>COA 11.86, COA 11.88</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__group">
      <th scope="colgroup" colspan="3">Fish</th>
    </tr>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Aquatic habitat mitigation</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Coordinate with CDFW on Mitigation Site Selection and Design</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 12.6.1, COA 12.6.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Site, Design and Restore Construction Mitigation Habitat for Covered Fish
      </th>
      <td>Restoration &amp; Mitigation</td>
      <td>COA 12.6.1, COA 12.7.1, COA 12.8.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Site, Design and Restore Operations Mitigation Habitat for Covered Fish
      </th>
      <td>Restoration &amp; Mitigation</td>
      <td>COA 12.6.2, COA 12.6.4, COA 12.7.2, COA 12.8.2</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Chinook salmon</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Coordinate Annual Selection of CHNWR and CHNSR Funded Projects</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 12.7.2</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Delta smelt and longfin smelt</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Contribute Funding to the Longfin Smelt Culture Program</th>
      <td>Financial</td>
      <td>COA 12.6.6</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Develop CDFW-Approved Spring LFS Operational Scenario</th>
      <td>Analysis</td>
      <td>COA 12.6.5</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Fish rescue and salvage</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Complete fish salvage and relocation before in-water work</th>
      <td>Avoidance &amp; BMPs</td>
      <td>COA 11.35</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Notify CDFW Before Dewatering or Fish-Isolating Work</th>
      <td>Reporting</td>
      <td>COA 11.35</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Notify CDFW When Fish Salvage Is Complete</th>
      <td>Reporting</td>
      <td>COA 11.37</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Fish Salvage Plan</th>
      <td>Plan</td>
      <td>COA 11.35</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Train and Staff Fish Salvage Teams Before Site Access</th>
      <td>Training &amp; Education</td>
      <td>COA 11.35</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Dead Specimen Preservation</th>
      <td>Adhere</td>
      <td>COA 11.68.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Fisheries biologist present to rescue fish during dewatering</th>
      <td>Monitor</td>
      <td>COA 11.37</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Preservation and delivery of dead covered fish</th>
      <td>Adhere</td>
      <td>COA 11.35</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Preservation and delivery of dead covered specimens</th>
      <td>Adhere</td>
      <td>COA 11.52.3</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">White sturgeon</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Complete WS Life Cycle Model Re-Evaluation Report</th>
      <td>Analysis</td>
      <td>COA 12.8.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Fund and Complete White Sturgeon Mitigation Projects</th>
      <td>Restoration &amp; Mitigation</td>
      <td>COA 12.8.2</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__group">
      <th scope="colgroup" colspan="3">Habitat protection</th>
    </tr>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Exclusion fencing and ESAs</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Delineate Covered Species Habitat and Fence Construction Sites</th>
      <td>Avoidance &amp; BMPs</td>
      <td>COA 9.9</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Delineate habitat, buffers, and construction site boundaries</th>
      <td>Avoidance &amp; BMPs</td>
      <td>
        COA 9.8, COA 11.84.1, COA 11.84.2, COA 11.85, COA 11.87, COA 11.90, COA 11.98, COA
        11.100, COA 11.106
      </td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Flag and Sign Cross-Country Access Routes</th>
      <td>Avoidance &amp; BMPs</td>
      <td>COA 9.10</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Flag Burrows and Habitat Features Before Earthmoving</th>
      <td>Survey</td>
      <td>COA 11.49.1, COA 11.54, COA 11.62.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Install exclusion barriers at work areas and shaft openings</th>
      <td>Avoidance &amp; BMPs</td>
      <td>COA 11.14, COA 11.61, COA 11.62</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Remove exclusion barriers after covered activities end</th>
      <td>Avoidance &amp; BMPs</td>
      <td>COA 11.62, COA 12.3.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Exclusion Barrier Design and Locations to CDFW</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 11.43, COA 11.62</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Biological monitoring during exclusion barrier installation</th>
      <td>Monitor</td>
      <td>COA 11.43, COA 11.49, COA 11.62</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Exclusion barrier construction specification</th>
      <td>Adhere</td>
      <td>COA 11.43, COA 11.62</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Exclusion fencing gate closure</th>
      <td>Adhere</td>
      <td>COA 11.43, COA 11.62</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Exclusion fencing in place during covered activities</th>
      <td>Adhere</td>
      <td>COA 11.43</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Exclusion Fencing Inspection and Repair</th>
      <td>Monitor</td>
      <td>COA 9.9</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Exclusion fencing repair</th>
      <td>Adhere</td>
      <td>COA 11.43, COA 11.62</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Habitat and buffer markers maintained</th>
      <td>Adhere</td>
      <td>COA 11.106</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Inspection and reporting of habitat fencing, stakes and flags</th>
      <td>Monitor</td>
      <td>COA 11.43, COA 11.62</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Refuge cover along exclusion fencing</th>
      <td>Adhere</td>
      <td>COA 11.43</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Vegetation maintenance along exclusion fencing</th>
      <td>Adhere</td>
      <td>COA 11.43, COA 11.62</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Habitat avoidance and work footprint</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct Habitat Evaluation Field Survey</th>
      <td>Survey</td>
      <td>COA 10.8</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Avoidance Measures in Unmapped Habitat</th>
      <td>Adhere</td>
      <td>COA 10.7, COA 10.8</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conservation Easement Buffer</th>
      <td>Adhere</td>
      <td>COA 9.16.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Geotechnical investigation avoidance of aquatic features</th>
      <td>Adhere</td>
      <td>COA 12.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">No Disturbance of CDFW Conserved Lands</th>
      <td>Adhere</td>
      <td>COA 9.16</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Suitable habitat avoidance</th>
      <td>Adhere</td>
      <td>COA 11.65, COA 11.78, COA 11.85, COA 11.87, COA 11.90</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Suitable Habitat Avoidance</th>
      <td>Adhere</td>
      <td>COA 11.39, COA 11.55, COA 11.94</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Work footprint limit</th>
      <td>Adhere</td>
      <td>COA 9.8</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Work Footprint Limit</th>
      <td>Adhere</td>
      <td>COA 11.94, COA 11.104</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Habitat impact tracking</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Calculate Phase Impacts and Mitigation for Authorization Package
      </th>
      <td>Analysis</td>
      <td>COA 12</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Complete Pre-Disturbance Habitat Photo Documentation</th>
      <td>Survey</td>
      <td>COA 10.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct Photo Monitoring of Temporary Impact Areas</th>
      <td>Monitoring</td>
      <td>COA 10.6</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Establish Restoration Treatment and Reference Transects</th>
      <td>Survey</td>
      <td>COA 12.3.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Notify CDFW of Likely Impact Exceedance and Revised Schedule</th>
      <td>Reporting</td>
      <td>COA 10.9</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Report Habitat Disturbance Acreage and GIS Layers to CDFW</th>
      <td>Reporting</td>
      <td>COA 10.3, COA 10.5</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Survey Riverbank and Vegetation Conditions at Barge Sites</th>
      <td>Monitoring</td>
      <td>COA 11.36</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Verify Impact Multipliers in the Annual Status Report</th>
      <td>Monitoring</td>
      <td>COA 12.1</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        GIS tracking of land disturbance and suitable habitat feature impacts
      </th>
      <td>Monitor</td>
      <td>COA 10.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        GIS tracking of land disturbance and suitable habitat feature impacts
      </th>
      <td>Monitor</td>
      <td>COA 10.4, COA 10.9</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Vegetation removal</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Obtain CDFW Approval of Mowing or Clearing Equipment</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 9.18, COA 11.18, COA 11.42.2, COA 11.57, COA 11.60, COA 11.65</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Biologist presence during vegetation management</th>
      <td>Monitor</td>
      <td>COA 11.18, COA 11.42.2, COA 11.57</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Channel bank mowing limits</th>
      <td>Adhere</td>
      <td>COA 11.57, COA 11.65</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Emergent vegetation left unmowed</th>
      <td>Adhere</td>
      <td>COA 11.65</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Emergent Vegetation Mowing Avoidance</th>
      <td>Adhere</td>
      <td>COA 11.57</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Hand Tool Trimming of Protected Vegetation</th>
      <td>Adhere</td>
      <td>COA 11.18, COA 11.101</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Mower blade height</th>
      <td>Adhere</td>
      <td>COA 11.65</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Mower Blade Height</th>
      <td>Adhere</td>
      <td>COA 11.18, COA 11.57, COA 11.101</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Mowing Timing Limit</th>
      <td>Adhere</td>
      <td>COA 11.18</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Mowing timing limits</th>
      <td>Adhere</td>
      <td>COA 11.42.2, COA 11.57</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Upland Discing Prohibition</th>
      <td>Adhere</td>
      <td>COA 11.57, COA 11.60, COA 11.65</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Vegetation Removal Minimization</th>
      <td>Adhere</td>
      <td>COA 11.18, COA 11.57, COA 11.101</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Vegetation removal minimized</th>
      <td>Adhere</td>
      <td>COA 11.42.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Vegetative Material Disposal</th>
      <td>Adhere</td>
      <td>COA 11.16, COA 11.64</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Woody Vegetation Removal Window</th>
      <td>Adhere</td>
      <td>COA 11.77</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Wildlife encounters and handling</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Excavate and collapse burrows ahead of trenching</th>
      <td>Avoidance &amp; BMPs</td>
      <td>COA 11.49, COA 11.49.2, COA 11.56, COA 11.62.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Pay Care and Treatment Costs for Injured Covered Species</th>
      <td>Financial</td>
      <td>COA 11.68, COA 11.68.2, COA 11.93</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Care and authorized release of covered species taken into captivity
      </th>
      <td>Adhere</td>
      <td>COA 11.68.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Care of covered species injured by covered activities</th>
      <td>Adhere</td>
      <td>COA 11.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Care of injured covered species</th>
      <td>Adhere</td>
      <td>COA 11.52, COA 11.52.1, COA 11.52.2, COA 11.81</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Care of Injured Covered Species</th>
      <td>Adhere</td>
      <td>COA 11.68, COA 11.68.1, COA 11.68.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Covered species capture and handling</th>
      <td>Adhere</td>
      <td>COA 11.50</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Covered Species Capture and Handling</th>
      <td>Adhere</td>
      <td>COA 11.3, COA 11.67.1, COA 11.80</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Covered Species Encounter Reporting to the Biologist</th>
      <td>Notify</td>
      <td>COA 11.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Covered species relocation</th>
      <td>Adhere</td>
      <td>COA 11.51.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Covered Species Relocation</th>
      <td>Adhere</td>
      <td>COA 11.1, COA 11.67.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Injured Wildlife Rehabilitation Transport</th>
      <td>Adhere</td>
      <td>COA 11.93</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Monitoring record of covered species capture and relocation</th>
      <td>Monitor</td>
      <td>COA 11.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Wildlife encounter response</th>
      <td>Adhere</td>
      <td>COA 11.14, COA 11.39</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Wildlife Encounter Response</th>
      <td>Adhere</td>
      <td>COA 11.55, COA 11.55.1, COA 11.65, COA 11.67.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Work Stoppage on Covered Species Encounter</th>
      <td>Adhere</td>
      <td>COA 11.1</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Wildlife entrapment</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Cover open excavations at the close of each working day</th>
      <td>Avoidance &amp; BMPs</td>
      <td>COA 11.14</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Biologist inspection and presence when excavations are filled or covered
      </th>
      <td>Monitor</td>
      <td>COA 11.14</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Debris Pile Removal</th>
      <td>Adhere</td>
      <td>COA 11.15</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Inspection of stored pipes, culverts and similar structures for wildlife
      </th>
      <td>Monitor</td>
      <td>COA 11.15</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Morning inspection of overnight equipment, materials and excavations for trapped
        wildlife
      </th>
      <td>Monitor</td>
      <td>COA 11.14</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Wildlife check of idle vehicles and equipment before moving</th>
      <td>Monitor</td>
      <td>COA 9.12</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Wildlife in stored materials response</th>
      <td>Adhere</td>
      <td>COA 11.15</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__group">
      <th scope="colgroup" colspan="3">Hazards</th>
    </tr>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Fire prevention</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Fire Suppression Supplies On Site</th>
      <td>Adhere</td>
      <td>COA 9.18</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Vegetation clearing method for fire prevention</th>
      <td>Adhere</td>
      <td>COA 9.18</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Vegetation Clearing Method for Fire Prevention</th>
      <td>Adhere</td>
      <td>COA 9.18</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Hazardous materials</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Develop Hazardous Materials Management Plan</th>
      <td>Plan</td>
      <td>COA 11.21</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Develop Spoils and Dredged Material Disposal Plan</th>
      <td>Plan</td>
      <td>COA 11.16</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Obtain CDFW Permission for Hazardous Material Use Near Streams</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 11.21</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Prepare the hazardous materials management plan</th>
      <td>Avoidance &amp; BMPs</td>
      <td>COA 9.14</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Hazardous Materials Management Plan to CDFW</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 11.21</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Concrete Washwater Containment</th>
      <td>Adhere</td>
      <td>COA 11.22, COA 11.26</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Contaminated Soil Segregation and Removal</th>
      <td>Adhere</td>
      <td>COA 11.21</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Database of historic contamination and hazardous materials inspections
      </th>
      <td>Monitor</td>
      <td>COA 11.21</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Hazardous Materials Container Labeling</th>
      <td>Adhere</td>
      <td>COA 11.21</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Hazardous Materials in Designated Storage</th>
      <td>Adhere</td>
      <td>COA 11.21</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Hazardous Materials Storage Duration Limit</th>
      <td>Adhere</td>
      <td>COA 11.21</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Material Safety Data Sheets provided to site personnel</th>
      <td>Adhere</td>
      <td>COA 11.21</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Petroleum Storage Containment</th>
      <td>Adhere</td>
      <td>COA 11.22</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Pesticides and rodenticides</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Obtain CDFW Approval for Pesticide and Herbicide Use</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 11.4</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Fertilizer Application Plan</th>
      <td>Plan</td>
      <td>COA 11.6</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Fertilizer Application Plan for CDFW Approval</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 11.6</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Herbicide and Pesticide Application Plan</th>
      <td>Plan</td>
      <td>COA 11.4</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Licensed Pesticide Applicator</th>
      <td>Roster</td>
      <td>COA 11.4</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Pesticide Application Wind Limit</th>
      <td>Adhere</td>
      <td>COA 11.4</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Pesticide Setback from Aquatic Habitat</th>
      <td>Adhere</td>
      <td>COA 11.4</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Rodenticide and Poison Prohibition</th>
      <td>Adhere</td>
      <td>COA 11.5</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Refueling and equipment servicing</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Daily contaminant leak check and maintenance of vehicles and equipment
      </th>
      <td>Monitor</td>
      <td>COA 9.13</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Daily inspection of equipment in contact with water for petroleum leaks
      </th>
      <td>Monitor</td>
      <td>COA 11.22</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Fuel Transfer Containment</th>
      <td>Adhere</td>
      <td>COA 11.22</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Refueling Practices</th>
      <td>Adhere</td>
      <td>COA 9.13</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Refueling Setback from Water</th>
      <td>Adhere</td>
      <td>COA 9.13</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Spill prevention and response</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct Spill Response and Containment Training</th>
      <td>Training &amp; Education</td>
      <td>COA 11.22</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Develop Spill Prevention, Control, and Countermeasure Plan</th>
      <td>Plan</td>
      <td>COA 11.22</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Notify CDFW of an Accidental Spill</th>
      <td>Reporting</td>
      <td>COA 11.22</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Report Vessel Fuel Spills to CDFW OSPR</th>
      <td>Reporting</td>
      <td>COA 11.36</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Submit Spill Prevention, Control, and Countermeasure Plan to CDFW
      </th>
      <td>Approval &amp; Consultation</td>
      <td>COA 11.22</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Equipment Cleaning Before Water Contact</th>
      <td>Adhere</td>
      <td>COA 11.22</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Oil Absorbent Booms in Place</th>
      <td>Adhere</td>
      <td>COA 11.22</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Spill Containment and Response</th>
      <td>Adhere</td>
      <td>COA 11.22</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Spill Kits On Site</th>
      <td>Adhere</td>
      <td>COA 11.21, COA 11.22</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Spill Response</th>
      <td>Adhere</td>
      <td>COA 9.14</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Staging Area Spill Containment</th>
      <td>Adhere</td>
      <td>COA 11.22</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__group">
      <th scope="colgroup" colspan="3">Lighting</th>
    </tr>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Lighting near habitat and waters</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Install visual barriers along night access routes</th>
      <td>Avoidance &amp; BMPs</td>
      <td>COA 11.10</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Access road location assessment before visual barrier installation
      </th>
      <td>Monitor</td>
      <td>COA 11.10</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Intake Lighting Restricted from the River Channel</th>
      <td>Adhere</td>
      <td>COA 11.9</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Lighting Color Near Habitat</th>
      <td>Adhere</td>
      <td>COA 11.8</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Night Lighting Spill Control</th>
      <td>Adhere</td>
      <td>COA 11.8, COA 11.47</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__group">
      <th scope="colgroup" colspan="3">Mitigation and restoration</th>
    </tr>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Conservation endowment</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Obtain CDFW Approval of the Endowment Management Agreement</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 12.12.4</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Prepare Endowment Assessment for CDFW Approval</th>
      <td>Analysis</td>
      <td>
        COA 12.12.2, COA 12.12.2.1, COA 12.12.2.2, COA 12.12.2.2.1, COA 12.12.2.2.2, COA
        12.12.2.2.3
      </td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Endowment Assessment for CDFW Approval</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 12.12.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Endowment Manager Proposal to CDFW</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 12.12.1</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Mitigation funding</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Funding of interim management of Habitat Management lands</th>
      <td>Adhere</td>
      <td>COA 12.11.7</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Holding, pooling and disbursement of the Endowment</th>
      <td>Adhere</td>
      <td>COA 12.12.4</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Mitigation funding contributions</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Fund CHNWR, CHNSR and White Sturgeon Operations Mitigation</th>
      <td>Financial</td>
      <td>COA 12.7.2, COA 12.8.2</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Mitigation lands</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Complete Baseline Biological Assessment and Land Survey</th>
      <td>Survey</td>
      <td>COA 12.11.6</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Complete HM Lands Start-Up Fencing, Signage and Enhancement</th>
      <td>Restoration &amp; Mitigation</td>
      <td>COA 12.11.6</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Complete Mitigation and HM Lands Protection Before Impacts</th>
      <td>Restoration &amp; Mitigation</td>
      <td>COA 12, COA 13.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Demonstrate Project Funding Arrangements to CDFW</th>
      <td>Reporting</td>
      <td>COA 13.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Designate CDFW-Approved Interim and Long-Term Land Managers</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 12.11.5</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Establish Long-Term HM Lands Management Endowment</th>
      <td>Financial</td>
      <td>COA 12.12</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Fund Annual Endowment Deposit Amount Installment</th>
      <td>Financial</td>
      <td>COA 12.12, COA 12.12.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Notify CDFW and Provide a Plan for a Stay-Ahead Shortfall</th>
      <td>Reporting</td>
      <td>COA 12</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Notify CDFW of a Land Manager Change</th>
      <td>Reporting</td>
      <td>COA 12.11.5</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Obtain CDFW Approval of Mitigation Habitat Restoration Projects</th>
      <td>Approval &amp; Consultation</td>
      <td>
        COA 12, COA 12.6.1, COA 12.6.2, COA 12.6.4, COA 12.7.1, COA 12.7.2, COA 12.8.1,
        COA 12.8.2
      </td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Obtain CDFW Approval of the HM Lands Conservation Easement</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 12.11.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Prepare HM Lands Management Plan</th>
      <td>Plan</td>
      <td>COA 12.11.6</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Prepare Phase Security Cost Estimate for HM Lands</th>
      <td>Analysis</td>
      <td>COA 12.9, COA 12.9.1, COA 12.9.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Provide Annual Long-Term HM Lands Management Funding</th>
      <td>Financial</td>
      <td>COA 12.12</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Provide Title and Environmental Documentation for HM Lands</th>
      <td>Reporting</td>
      <td>COA 12.11.4</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Reimburse CDFW Costs for ITP Issuance and Monitoring</th>
      <td>Financial</td>
      <td>COA 12.13</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit and Update the CESA Mitigation Funding Strategy</th>
      <td>Financial</td>
      <td>COA 13.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Credit Bill of Sale and Payment Receipt to CDFW</th>
      <td>Reporting</td>
      <td>COA 12.10</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Compensatory habitat acreage for each covered species</th>
      <td>Adhere</td>
      <td>COA 12</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Fee title to Habitat Management lands</th>
      <td>Adhere</td>
      <td>COA 12.11.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Habitat Management lands stay-ahead ratio</th>
      <td>Adhere</td>
      <td>COA 12</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Integration of the spawning habitat study into shallow spawning habitat design
      </th>
      <td>Adhere</td>
      <td>COA 12.6.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Interim management of Habitat Management lands</th>
      <td>Adhere</td>
      <td>COA 12.11.7</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Long-term monitoring of tidal habitat mitigation sites</th>
      <td>Monitor</td>
      <td>COA 12.6.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Ongoing demonstration of mitigation performance during the permit term
      </th>
      <td>Notify</td>
      <td>COA 13.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Perpetual management, maintenance and monitoring of Habitat Management lands
      </th>
      <td>Adhere</td>
      <td>COA 12.12</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Restoration</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Backfill and Restore Preconstruction Investigation Sites</th>
      <td>Restoration &amp; Mitigation</td>
      <td>COA 12.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Develop Temporary Impact Restoration Schedule</th>
      <td>Plan</td>
      <td>COA 12.3.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Develop Tidal Wetland Restoration Efficacy Study Plan</th>
      <td>Analysis</td>
      <td>COA 10.21.4</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Remove Temporary Fill and Construction Refuse at Completion</th>
      <td>Avoidance &amp; BMPs</td>
      <td>COA 9.17</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Restore Riverbank Eroded by Barge Operations</th>
      <td>Restoration &amp; Mitigation</td>
      <td>COA 11.36</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Restore Temporarily Impacted Habitat to Pre-Project Conditions</th>
      <td>Restoration &amp; Mitigation</td>
      <td>COA 11.17, COA 11.41, COA 11.65, COA 11.66, COA 12, COA 12.3, COA 12.3.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Restoration and Revegetation Plan</th>
      <td>Plan</td>
      <td>COA 12.3, COA 12.3.1, COA 12.3.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Restoration Monitoring Reports to CDFW</th>
      <td>Reporting</td>
      <td>COA 12.3.4</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Erosion protection of restoration soils until vegetation establishes
      </th>
      <td>Adhere</td>
      <td>COA 12.3.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Invasive plant management and cover limit at restoration sites</th>
      <td>Adhere</td>
      <td>COA 12.3.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Monitoring and maintenance of habitat restoration areas</th>
      <td>Monitor</td>
      <td>COA 12.3.4</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Monitoring of restored habitat until success</th>
      <td>Monitor</td>
      <td>COA 11.66</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Restoration survivorship and cover success standards with remedial action
      </th>
      <td>Adhere</td>
      <td>COA 12.3.3, COA 12.3.4</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Seed mix composition and sourcing for restoration</th>
      <td>Adhere</td>
      <td>COA 12.3.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Seeding timing and reseeding at restoration sites</th>
      <td>Adhere</td>
      <td>COA 12.3.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Substrate removal, topsoil salvage and imported fill in restoration areas
      </th>
      <td>Adhere</td>
      <td>COA 12.3.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Target native vegetation community for each restoration area</th>
      <td>Adhere</td>
      <td>COA 12.3.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Vehicle Barriers on Restored Shoulders</th>
      <td>Adhere</td>
      <td>COA 12.3.3</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Security and funding assurances</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Covered Fish Monitoring Funding Strategy to CDFW</th>
      <td>Financial</td>
      <td>COA 13.2</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__group">
      <th scope="colgroup" colspan="3">Noise and vibration</th>
    </tr>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Pile driving and underwater sound</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct hydroacoustic monitoring during in-water pile driving</th>
      <td>Avoidance &amp; BMPs</td>
      <td>COA 11.31.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Report Hydroacoustic and Pile Driving Monitoring Results</th>
      <td>Reporting</td>
      <td>COA 11.33</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Report Hydroacoustic Threshold Exceedances to CDFW</th>
      <td>Reporting</td>
      <td>COA 11.33</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit In-Water Pile Driving Information to CDFW</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 11.31.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Pile Driving Plan</th>
      <td>Plan</td>
      <td>COA 11.34</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Underwater Sound Abatement Plan</th>
      <td>Plan</td>
      <td>COA 11.33</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Continual hydroacoustic monitoring of in-water work</th>
      <td>Monitor</td>
      <td>COA 11.33</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Escape route during multiple pile driver operation</th>
      <td>Adhere</td>
      <td>COA 11.33</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Hours of the day for pile driving</th>
      <td>Adhere</td>
      <td>COA 11.33</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Impact pile driving limits</th>
      <td>Adhere</td>
      <td>COA 11.31.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Pile Driving Hour Limit</th>
      <td>Adhere</td>
      <td>COA 11.32</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Pile driving noise attenuation</th>
      <td>Adhere</td>
      <td>COA 11.33</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Pile driving soft start</th>
      <td>Adhere</td>
      <td>COA 11.33</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Shoulder-season pile driving restrictions</th>
      <td>Adhere</td>
      <td>COA 11.31.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Underwater noise disturbance threshold outside the construction work window
      </th>
      <td>Adhere</td>
      <td>COA 11.31.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Underwater noise threshold outside the work window</th>
      <td>Adhere</td>
      <td>COA 11.33</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Underwater noise threshold within the work window</th>
      <td>Adhere</td>
      <td>COA 11.33</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Watch for distressed or injured fish during pile driving</th>
      <td>Monitor</td>
      <td>COA 11.33</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Vibration</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Implement CDFW-Approved Subsurface Vibration Study</th>
      <td>Monitoring</td>
      <td>COA 10.17</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Subsurface Testing and Monitoring Study Plan</th>
      <td>Plan</td>
      <td>COA 10.17</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__group">
      <th scope="colgroup" colspan="3">People and qualifications</th>
    </tr>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Designated biologists and monitors</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct Baseline Invasive Plant Survey</th>
      <td>Survey</td>
      <td>COA 11.19</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Obtain CDFW Approval of a Substitute Biologist or Monitor</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 9.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Annual Biologist Reapproval List to CDFW</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 9.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Biologist Resume Forms to CDFW Before Each Phase</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 9.2</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Approved Wildlife Handler</th>
      <td>Roster</td>
      <td>COA 11.92</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Biological Monitor qualifications and permitted scope</th>
      <td>Roster</td>
      <td>COA 9.2.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Biologist or monitor on site during take-risk construction activities
      </th>
      <td>Monitor</td>
      <td>COA 9.2, COA 11.104, COA 11.106</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Designated Biologist and Fisheries Biologist qualifications and responsibilities
      </th>
      <td>Roster</td>
      <td>COA 9.2.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Handling and relocation restricted to the approved Designated Biologist
      </th>
      <td>Roster</td>
      <td>COA 11.108</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Stop-work authority of biologists and monitors</th>
      <td>Adhere</td>
      <td>COA 9.3</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Qualified specialists</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Notify CDFW of the Designated Representative and Substitutes</th>
      <td>Reporting</td>
      <td>COA 9.1</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Permitted personnel for studies that may take Covered Fish Species
      </th>
      <td>Roster</td>
      <td>COA 10.22</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Worker training</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct Worker Education Program and Annual Refresher Training</th>
      <td>Training &amp; Education</td>
      <td>COA 9.4, COA 11.82</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Train Tugboat and Barge Operators on Habitat Impacts</th>
      <td>Training &amp; Education</td>
      <td>COA 11.36</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__group">
      <th scope="colgroup" colspan="3">Plants and invertebrates</th>
    </tr>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Bumble bees and monarchs</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct Annual CBB Flight Season Surveys</th>
      <td>Survey</td>
      <td>COA 11.95</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct Pre-Activity CBB Foraging and Nest Surveys</th>
      <td>Survey</td>
      <td>COA 11.97, COA 11.99, COA 11.100</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct Preconstruction CBB Habitat Survey</th>
      <td>Survey</td>
      <td>COA 11.96</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Notify CDFW of a CBB Detection</th>
      <td>Reporting</td>
      <td>COA 11.97, COA 11.99</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Obtain agency approval of designated wildlife handlers</th>
      <td>Avoidance &amp; BMPs</td>
      <td>COA 11.94, COA 11.102</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Report CBB Sightings to the Designated Biologist</th>
      <td>Reporting</td>
      <td>COA 11.94</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit CBB Buffer Zone Design Plan</th>
      <td>Plan</td>
      <td>COA 11.98</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit CBB Nest Relocation Plan</th>
      <td>Plan</td>
      <td>COA 11.102</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Active nest buffer</th>
      <td>Adhere</td>
      <td>COA 11.98, COA 11.102</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Daily visual sweeps for bee flight activity during work</th>
      <td>Monitor</td>
      <td>COA 11.99</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Flowering Vegetation Removal Timing</th>
      <td>Adhere</td>
      <td>COA 11.95</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Inspection and supervision of refugia removal during overwintering
      </th>
      <td>Monitor</td>
      <td>COA 11.95</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Monitoring of a relocated nest</th>
      <td>Monitor</td>
      <td>COA 11.102</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Overwintering Habitat Disturbance Avoidance</th>
      <td>Adhere</td>
      <td>COA 11.95</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Relocation as a last resort under the approved protocol</th>
      <td>Adhere</td>
      <td>COA 11.108</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Search for the active nest when a bee is detected on site</th>
      <td>Monitor</td>
      <td>COA 11.99</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Stop work on covered species discovery</th>
      <td>Adhere</td>
      <td>COA 11.94, COA 11.104</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Underground refugia buffer</th>
      <td>Adhere</td>
      <td>COA 11.100</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Vegetation removal clearance near refugia</th>
      <td>Adhere</td>
      <td>COA 11.100</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Special-status plants</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct Annual MALI Surveys in Suitable Habitat</th>
      <td>Survey</td>
      <td>COA 11.105, COA 11.107</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct Preconstruction MALI Survey</th>
      <td>Survey</td>
      <td>COA 11.105</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Report CTS and MALI Relocations to CDFW</th>
      <td>Reporting</td>
      <td>COA 11.51.3, COA 11.108</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit MALI Translocation Plan</th>
      <td>Plan</td>
      <td>COA 11.108</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Avoidance of covered plant removal</th>
      <td>Adhere</td>
      <td>COA 11.106</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Covered Plant Removal Avoidance</th>
      <td>Adhere</td>
      <td>COA 11.106</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Levee Landside Line Maintenance</th>
      <td>Adhere</td>
      <td>COA 11.107</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Post-disturbance grading to elevations and hydrology suitable for covered plants
      </th>
      <td>Adhere</td>
      <td>COA 12.3.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Special-status plant occurrence buffer</th>
      <td>Adhere</td>
      <td>COA 11.106, COA 11.107</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__group">
      <th scope="colgroup" colspan="3">Site conduct</th>
    </tr>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Access routes and parking</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Obtain CDFW Approval to Construct Off-Site Travel Routes</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 9.10, COA 11.69</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Equipment Confined to Access Routes</th>
      <td>Adhere</td>
      <td>COA 11.55.1, COA 11.69</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Equipment confined to designated access routes</th>
      <td>Adhere</td>
      <td>COA 11.41, COA 11.65</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Equipment Storage Setback from Aquatic Habitat</th>
      <td>Adhere</td>
      <td>COA 9.11</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Staging Area Confinement</th>
      <td>Adhere</td>
      <td>COA 9.11</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Use of Established Access Routes</th>
      <td>Adhere</td>
      <td>COA 9.10, COA 9.11</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Agency and biologist access</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Agency access to construction sites</th>
      <td>Adhere</td>
      <td>COA 11.35</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">CDFW access to the Project and mitigation lands</th>
      <td>Adhere</td>
      <td>COA 9.15</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Construction-monitoring documentation kept on site</th>
      <td>Adhere</td>
      <td>COA 9.5</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        No agreements restricting contractor or biologist communication with CDFW
      </th>
      <td>Adhere</td>
      <td>COA 9.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Unfettered biologist access to the Project Site</th>
      <td>Adhere</td>
      <td>COA 9.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Wallet card or fact sheet carried by workers in the Project Area
      </th>
      <td>Adhere</td>
      <td>COA 9.4</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Compliance inspections and records</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Develop Environmental Compliance Monitoring Plan per Site</th>
      <td>Plan</td>
      <td>COA 10.11</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Monthly Compliance Report to CDFW</th>
      <td>Reporting</td>
      <td>COA 9.9, COA 10.12</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Daily biologist compliance inspection at each construction site and maintenance
        activity
      </th>
      <td>Monitor</td>
      <td>COA 10.10</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Daily written observation and inspection record</th>
      <td>Monitor</td>
      <td>COA 10.10</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Facility design and siting</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Install Bird Strike Diverters on New Transmission Lines</th>
      <td>Avoidance &amp; BMPs</td>
      <td>COA 11.17.1, COA 12.4</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Culvert Under-Crossing Count and Location Report</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 11.12</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Annual inspection and replacement of bird strike diverters</th>
      <td>Monitor</td>
      <td>COA 11.17.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Bird Strike Diverter Maintenance</th>
      <td>Adhere</td>
      <td>COA 12.4</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Power line and support structure siting away from covered species habitat
      </th>
      <td>Adhere</td>
      <td>COA 11.17, COA 11.79</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Roadway design passable by covered species</th>
      <td>Adhere</td>
      <td>COA 11.12</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Pets, firearms and campfires</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">No Pets, Campfires or Firearms On Site</th>
      <td>Adhere</td>
      <td>COA 11.20</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Speed limits</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Nighttime Speed Limit</th>
      <td>Adhere</td>
      <td>COA 11.11</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Paved Road Speed Limit</th>
      <td>Adhere</td>
      <td>COA 11.11</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Speed Limit Near Habitat</th>
      <td>Adhere</td>
      <td>COA 11.11, COA 11.39.1, COA 11.55.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Speed Limit Posting</th>
      <td>Adhere</td>
      <td>COA 11.11</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Unpaved Road Speed Limit</th>
      <td>Adhere</td>
      <td>COA 11.11, COA 11.29</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Wildlife Crossing Signage</th>
      <td>Adhere</td>
      <td>COA 11.11</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Trash and food waste</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Covered Food Waste Containers</th>
      <td>Adhere</td>
      <td>COA 11.20</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Trash Abatement</th>
      <td>Adhere</td>
      <td>COA 9.6</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Trash Load Covering</th>
      <td>Adhere</td>
      <td>COA 11.20</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Trash Removal Cadence</th>
      <td>Adhere</td>
      <td>COA 11.20</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Work hours</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Daytime Work Hour Limit</th>
      <td>Adhere</td>
      <td>COA 11.7, COA 11.46</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Night Vehicle Travel Caution</th>
      <td>Adhere</td>
      <td>COA 11.7</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__group">
      <th scope="colgroup" colspan="3">Water</th>
    </tr>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Barge and vessel operations</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Report Vessel Groundings and Barge Plan Deviations to CDFW</th>
      <td>Reporting</td>
      <td>COA 11.36</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Barge Operations Plan</th>
      <td>Plan</td>
      <td>COA 11.36</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Barge Mooring and Anchoring</th>
      <td>Adhere</td>
      <td>COA 11.36</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Biological monitoring of barge operations</th>
      <td>Monitor</td>
      <td>COA 11.36</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Propeller Wash Limit</th>
      <td>Adhere</td>
      <td>COA 11.36</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Vessel Deck Loose Material Containment</th>
      <td>Adhere</td>
      <td>COA 11.36</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Vessel Navigation Regulation Compliance</th>
      <td>Adhere</td>
      <td>COA 11.36</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Vessel Speed and Wake Limit</th>
      <td>Adhere</td>
      <td>COA 11.36</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Vessel Spill Kits Onboard</th>
      <td>Adhere</td>
      <td>COA 11.36</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Dewatering</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Dewatering Plan</th>
      <td>Plan</td>
      <td>COA 11.37</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Biologist present to salvage snakes during dewatering</th>
      <td>Monitor</td>
      <td>COA 11.61</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Dewatering Pump Intake Screening</th>
      <td>Adhere</td>
      <td>COA 11.37</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Dewatering pump shutdown</th>
      <td>Adhere</td>
      <td>COA 11.61</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Dewatering rate limit</th>
      <td>Adhere</td>
      <td>COA 11.37</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Dewatering Window</th>
      <td>Adhere</td>
      <td>COA 11.61</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Erosion and sediment control</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Install Erosion and Sediment Control Measures Before Earth-Moving
      </th>
      <td>Avoidance &amp; BMPs</td>
      <td>COA 9.7</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Install erosion and sediment controls ahead of storms</th>
      <td>Avoidance &amp; BMPs</td>
      <td>COA 11.27</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Obtain CDFW Approval of Erosion Control Stabilization Measures</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 11.27</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Erosion and Sediment Control Plan</th>
      <td>Plan</td>
      <td>COA 11.26</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Damaged Pavement Repaving</th>
      <td>Adhere</td>
      <td>COA 11.26</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Emergency Erosion Control Supplies On Site</th>
      <td>Adhere</td>
      <td>COA 11.26</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Erosion Control in Place Before Storms</th>
      <td>Adhere</td>
      <td>COA 11.13</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Erosion control inspection before, during and after storms</th>
      <td>Monitor</td>
      <td>COA 9.7</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Erosion Control Material Standard</th>
      <td>Adhere</td>
      <td>COA 11.27</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Ground Disturbance Minimization</th>
      <td>Adhere</td>
      <td>COA 11.26, COA 11.48, COA 11.63</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Grubbed Material Disposal</th>
      <td>Adhere</td>
      <td>COA 11.16</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Inspection of erosion controls before, during and after rain events
      </th>
      <td>Monitor</td>
      <td>COA 11.26, COA 11.27</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Monitoring of the 72-hour weather forecast for each project site
      </th>
      <td>Monitor</td>
      <td>COA 11.13, COA 11.27, COA 11.45, COA 11.58.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Monofilament Netting Prohibition</th>
      <td>Adhere</td>
      <td>COA 11.27, COA 11.28, COA 11.43, COA 11.62</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Precipitation Work Limit</th>
      <td>Adhere</td>
      <td>COA 11.58.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Runoff and Drainage Control</th>
      <td>Adhere</td>
      <td>COA 11.26</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Sediment Control Measures</th>
      <td>Adhere</td>
      <td>COA 11.26</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Sizing, siting and protection of spoils and RTM storage sites</th>
      <td>Adhere</td>
      <td>COA 11.16</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Spoils Storage Site Siting</th>
      <td>Adhere</td>
      <td>COA 11.16</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Stockpile Placement and Covering</th>
      <td>Adhere</td>
      <td>COA 11.26</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Storm Onset Work Restriction</th>
      <td>Adhere</td>
      <td>COA 9.7</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Vegetation Retention for Erosion Control</th>
      <td>Adhere</td>
      <td>COA 11.26</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Wind Erosion Control</th>
      <td>Adhere</td>
      <td>COA 11.26</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Work limits during precipitation</th>
      <td>Adhere</td>
      <td>COA 11.13, COA 11.45</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Geotechnical exploration</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Over-Water Geotechnical Exploration Description to CDFW</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 11.31.1</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Groundwater</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Disclose Detected Wells in the Construction Phase Package</th>
      <td>Reporting</td>
      <td>COA 11.24</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Groundwater Testing and Monitoring Plan</th>
      <td>Plan</td>
      <td>COA 11.23</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Underground Well Detection Plan</th>
      <td>Plan</td>
      <td>COA 11.24</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">In-water work</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Daily In-Water Work Limit</th>
      <td>Adhere</td>
      <td>COA 11.31.1, COA 11.32</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">In-Water Work Window During Construction</th>
      <td>Adhere</td>
      <td>COA 11.31.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">In-Water Work Window During Pre-Construction</th>
      <td>Adhere</td>
      <td>COA 11.31.1</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Invasive species</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Clean and decontaminate equipment at each work site</th>
      <td>Avoidance &amp; BMPs</td>
      <td>COA 9.12</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct Annual Invasive Plant Survey</th>
      <td>Monitoring</td>
      <td>COA 11.19</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Report Invasive Aquatic Species Detections to CDFW</th>
      <td>Reporting</td>
      <td>COA 11.36</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Submit Invasive Plant Species Monitoring, Management and Control Plan
      </th>
      <td>Plan</td>
      <td>COA 11.19.1</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Invasive Animal Removal</th>
      <td>Adhere</td>
      <td>COA 11.19</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Invasive plant removal methods in restoration areas</th>
      <td>Adhere</td>
      <td>COA 11.19.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Invasive species inspection of in-water equipment before deployment
      </th>
      <td>Monitor</td>
      <td>COA 11.36</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Invasive Species Spread Prevention</th>
      <td>Adhere</td>
      <td>COA 11.19</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Pathogen Spread Prevention BMPs</th>
      <td>Adhere</td>
      <td>COA 11.19</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Predatory Species Introduction Prohibition</th>
      <td>Adhere</td>
      <td>COA 11.53</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Stormwater and discharges</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Prepare Stormwater Pollution Prevention Plan</th>
      <td>Plan</td>
      <td>COA 11.25</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Stormwater Pollution Prevention Plan to CDFW</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 11.25</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Upload Stormwater Forms and Records to SMARTS</th>
      <td>Reporting</td>
      <td>COA 11.25</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Non-Stormwater Discharge Prevention</th>
      <td>Adhere</td>
      <td>COA 11.25</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Reusable Tunnel Material Drainage Discharge</th>
      <td>Adhere</td>
      <td>COA 11.16</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Water quality</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct Baseline and Annual In-Water Mercury Monitoring</th>
      <td>Monitoring</td>
      <td>COA 11.30</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Develop and Implement Methylmercury Management Approach</th>
      <td>Restoration &amp; Mitigation</td>
      <td>COA 10.20.5</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Report Mercury Monitoring Results to CDFW</th>
      <td>Reporting</td>
      <td>COA 11.30</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Mercury Management and Monitoring Plan</th>
      <td>Plan</td>
      <td>COA 11.30</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__group">
      <th scope="colgroup" colspan="3">Water operations</th>
    </tr>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Biological performance criteria</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Develop Real-Time Biological Criteria Compliance Model</th>
      <td>Analysis</td>
      <td>COA 10.21.9</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Obtain CDFW Approval of Biological Criteria Compliance Models</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 11.115, COA 11.116, COA 11.117</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Biological criterion on entrainment, survival and abundance reduction
      </th>
      <td>Adhere</td>
      <td>COA 11.115.1, COA 11.116.1, COA 11.117.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Biological criterion on population growth rate</th>
      <td>Adhere</td>
      <td>COA 11.115.2, COA 11.116.2, COA 11.117.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Covered Fish Species Biological Criteria met during operations</th>
      <td>Adhere</td>
      <td>COA 10.21.8</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Funding and data support for Covered Fish Species life cycle models
      </th>
      <td>Monitor</td>
      <td>COA 10.21.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">No entrainment of juvenile salmon at the north Delta intakes</th>
      <td>Adhere</td>
      <td>COA 11.116.1</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Diversion limits and bypass flows</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Complete Joint Operations Optimization Study</th>
      <td>Analysis</td>
      <td>COA 11.110</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Develop Hydraulic Data Plan for Operating Criteria</th>
      <td>Plan</td>
      <td>COA 10.20.1, COA 11.109</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Prepare Weekly Operating-Criteria Risk Assessment Report</th>
      <td>Analysis</td>
      <td>COA 11.111.5</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Joint Operations Optimization Study Plan</th>
      <td>Plan</td>
      <td>COA 10.21.8</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Additional Suisun Marsh Salinity Control Gate operating days for Delta smelt
        habitat
      </th>
      <td>Adhere</td>
      <td>COA 12.6.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Annual Operating Criteria Schedule</th>
      <td>Adhere</td>
      <td>COA 11.111.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Annual schedule for applying the diversion operating criteria</th>
      <td>Adhere</td>
      <td>COA 11.111.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Bypass Flow Minimum</th>
      <td>Adhere</td>
      <td>COA 11.111, COA 11.111.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Combined south and north Delta SWP diversion daily cap</th>
      <td>Adhere</td>
      <td>COA 11.112, COA 11.114</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Diversion Flow Fraction Limit</th>
      <td>Adhere</td>
      <td>COA 11.111</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Flow Reversal Minimization</th>
      <td>Adhere</td>
      <td>COA 10.21.7</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">June Diversion Limit</th>
      <td>Adhere</td>
      <td>COA 11.111.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Larval Distribution Operational Scenario</th>
      <td>Adhere</td>
      <td>COA 12.6.5</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Limits on shifting exports from south Delta to north Delta during balanced
        conditions
      </th>
      <td>Adhere</td>
      <td>COA 11.113</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        No additional upstream stored water releases for north Delta diversion
      </th>
      <td>Adhere</td>
      <td>COA 11.112</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">No Diversion When the Delta Cross Channel Gates Are Open</th>
      <td>Adhere</td>
      <td>COA 11.111</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        No north Delta diversion during balanced conditions at low south Delta exports
      </th>
      <td>Adhere</td>
      <td>COA 11.113</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Phase 1 Operations Limit</th>
      <td>Adhere</td>
      <td>COA 11.110</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Phase 2 Operations Limit</th>
      <td>Adhere</td>
      <td>COA 11.110</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Salmon presence off-ramp from spring operating criteria</th>
      <td>Adhere</td>
      <td>COA 11.111.6</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Fish guidance systems</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Convene Fish Guidance System Working Group</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 10.26</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Develop Fish Guidance System Study Plan</th>
      <td>Plan</td>
      <td>COA 10.26</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Fish Guidance System Recommendation Report to CDFW</th>
      <td>Analysis</td>
      <td>COA 10.26</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Fish screens</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Adjust and Retest Fish Screen Baffles After a Non-Compliant Test
      </th>
      <td>Avoidance &amp; BMPs</td>
      <td>COA 10.27.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Complete COA 10.25 Series Models and Report</th>
      <td>Analysis</td>
      <td>COA 10.25.1, COA 10.25.2, COA 10.25.3, COA 10.25.4</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct North Delta Intake Fish Screen Hydraulic Tests</th>
      <td>Monitoring</td>
      <td>COA 10.27, COA 10.27.1, COA 11.109</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Develop Refugia Design and Field Study Plan</th>
      <td>Design</td>
      <td>COA 10.21.6</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Implement Fish Screen Impingement Study</th>
      <td>Monitoring</td>
      <td>COA 10.30</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Inspect Sediment Deposition at Intake Tee Screens Annually</th>
      <td>Monitoring</td>
      <td>COA 10.29</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Notify CDFW of Non-Operational Fish Screens</th>
      <td>Reporting</td>
      <td>COA 11.109.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Remove and Clean North Delta Intake Fish Screens</th>
      <td>Avoidance &amp; BMPs</td>
      <td>COA 10.28</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Report Intake Sediment Deposition Assessment to CDFW</th>
      <td>Reporting</td>
      <td>COA 10.29</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Retest Fish Screen Hydraulics After a Qualifying Event</th>
      <td>Monitoring</td>
      <td>COA 10.27</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Fish Screen Hydraulic Testing Data and Report to CDFW</th>
      <td>Reporting</td>
      <td>COA 10.27.2, COA 10.27.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Hydraulic Testing Plan for Intake Fish Screens</th>
      <td>Plan</td>
      <td>COA 10.27, COA 10.27.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Screen Impingement Study Plan</th>
      <td>Plan</td>
      <td>COA 10.30</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Approach Velocity Maintenance</th>
      <td>Adhere</td>
      <td>COA 10.27.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Diversion Spreading Across Screens</th>
      <td>Adhere</td>
      <td>COA 11.109</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Fish Screen Velocity Criteria</th>
      <td>Adhere</td>
      <td>COA 11.109</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Unscreened Diversion Prohibition</th>
      <td>Adhere</td>
      <td>COA 11.109.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Visual inspection of intake fish screens for integrity, cleaning and impingement
      </th>
      <td>Monitor</td>
      <td>COA 10.28</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Hydraulic and sediment models</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Complete Hydraulic and Sediment Transport Modeling Report</th>
      <td>Analysis</td>
      <td>COA 10.24.1, COA 10.24.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Final Hydraulic and Sediment Models and Reports to CDFW</th>
      <td>Reporting</td>
      <td>COA 10.24, COA 10.25</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Operations coordination and data</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Develop Real-Time Information Sharing Process with CDFW</th>
      <td>Plan</td>
      <td>COA 11.113</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Install Real-Time Water Quality Monitoring Station</th>
      <td>Monitoring</td>
      <td>COA 10.20.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Provide NDDMT Raw Data and Modeling to CDFW on Request</th>
      <td>Reporting</td>
      <td>COA 11.111.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Share Phase 1 Operations Data with CDFW</th>
      <td>Reporting</td>
      <td>COA 7.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit North Delta Diversion Monitoring Team Charter</th>
      <td>Plan</td>
      <td>COA 11.111.4</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        North Delta Diversion Monitoring Team membership and meeting cadence
      </th>
      <td>Adhere</td>
      <td>COA 11.111.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        North Delta Diversion Monitoring Team membership and meeting cadence
      </th>
      <td>Adhere</td>
      <td>COA 11.111.3, COA 11.111.5</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        North Delta Diversion Monitoring Team membership and meeting cadence
      </th>
      <td>Adhere</td>
      <td>COA 11.111.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Resolution and implementation of real-time operations decisions</th>
      <td>Adhere</td>
      <td>COA 11.111.5</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Weekly operations risk assessment content</th>
      <td>Monitor</td>
      <td>COA 11.111.3</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Operations monitoring and studies</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Complete Sacramento River Hydrograph Limb Impact Evaluation</th>
      <td>Analysis</td>
      <td>COA 10.18.3, COA 10.21.10</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct Baseline Food Web Resource Surveys</th>
      <td>Survey</td>
      <td>COA 10.21.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct Ecological Response Evaluation Studies</th>
      <td>Monitoring</td>
      <td>COA 10.21, COA 10.21.1, COA 10.21.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct Fisheries Evaluation Studies for Covered Fish</th>
      <td>Monitoring</td>
      <td>COA 10.19, COA 10.19.1, COA 10.19.2, COA 10.19.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct Sacramento River Bathymetric Surveys Near the Intakes</th>
      <td>Survey</td>
      <td>COA 10.23</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Conduct Water Quality Evaluation Studies</th>
      <td>Monitoring</td>
      <td>COA 10.20, COA 10.20.2, COA 10.20.3, COA 10.20.4, COA 10.20.5</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Develop Covered Fish Species Abundance and Distribution Study Plan
      </th>
      <td>Plan</td>
      <td>COA 10.19.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Develop Migration and Survival Study Plan</th>
      <td>Plan</td>
      <td>COA 10.19.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Develop Predation Study Plan</th>
      <td>Plan</td>
      <td>COA 10.19.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Develop Sediment and Turbidity Monitoring Study Plan</th>
      <td>Plan</td>
      <td>COA 10.20.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Develop Sediment Reintroduction Plan</th>
      <td>Plan</td>
      <td>COA 10.20.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Fund and Implement the DS/LFS Spawning Habitat Study</th>
      <td>Survey</td>
      <td>COA 10.21.5</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Implement Covered Fish Species Monitoring and Science Program</th>
      <td>Monitoring</td>
      <td>COA 10.18</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Report Bathymetric Survey Results to CDFW</th>
      <td>Reporting</td>
      <td>COA 10.23</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Covered Fish Species Monitoring and Science Plan</th>
      <td>Plan</td>
      <td>COA 10.18</td>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Obligations</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Assessment of juvenile salmon route entrainment by reach and junction
      </th>
      <td>Monitor</td>
      <td>COA 10.21.7</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Covered fish monitoring across baseline, construction and operations periods
      </th>
      <td>Monitor</td>
      <td>COA 10.18.2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Food web and larval fish entrainment study</th>
      <td>Monitor</td>
      <td>COA 10.21.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Modeling of operations effects on Delta smelt habitat in Suisun Marsh and Grizzly
        Bay
      </th>
      <td>Monitor</td>
      <td>COA 12.6.3</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__group">
      <th scope="colgroup" colspan="3">Unfiled</th>
    </tr>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Needs a home</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Deliver Annual Status Report to CDFW</th>
      <td>Reporting</td>
      <td>COA 10.13, COA 11.35, COA 11.36, COA 12</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Incorporate Litter and Erosion Control Language in Contractor Contracts
      </th>
      <td>Other</td>
      <td>COA 11.20, COA 11.27</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Install wildlife under-crossing culverts and speed limit signage
      </th>
      <td>Avoidance &amp; BMPs</td>
      <td>COA 11.12, COA 11.39.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Report Construction-Phase CBB and MALI Survey Results</th>
      <td>Reporting</td>
      <td>COA 11.97, COA 11.105</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Report GPS-Recorded CBB Nest and MALI Locations to CDFW</th>
      <td>Reporting</td>
      <td>COA 11.98, COA 11.106</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Report MALI and CTS Finds to the Designated Biologist</th>
      <td>Reporting</td>
      <td>COA 11.51.1, COA 11.108</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Preconstruction Survey Results for CDFW Approval</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 11.42, COA 11.105</td>
    </tr>
  </tbody>
</table>
```

## Styles
```css
.bcn-doc-summary {
  border-collapse: collapse;
  table-layout: fixed;
  inline-size: 100%;
  font-size: var(--bcn-print-font-size-body);
}
.bcn-doc-summary thead th {
  padding: var(--spacing-100) var(--spacing-200) var(--spacing-100) 0;
  text-align: start;
  vertical-align: bottom;
  font-size: var(--bcn-print-font-size-meta);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
  border-block-end: 1px solid var(--color-content-default);
}
.bcn-doc-summary__group th {
  padding: var(--spacing-400) 0 var(--spacing-100);
  text-align: start;
  font-size: var(--bcn-print-font-size-subgroup);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  border-block-end: 1px solid var(--color-border-default-strong);
}
.bcn-doc-summary__section th {
  padding: var(--spacing-250) 0 var(--spacing-100);
  text-align: start;
  font-size: var(--bcn-print-font-size-entry);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-doc-summary__run th {
  padding: var(--spacing-150) 0 var(--spacing-050);
  text-align: start;
  font-size: var(--bcn-print-font-size-meta);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
}
.bcn-doc-summary__group,
.bcn-doc-summary__section,
.bcn-doc-summary__run {
  break-after: avoid;
}
.bcn-doc-summary__row > {
  padding: var(--spacing-100) var(--spacing-200) var(--spacing-100) 0;
  text-align: start;
  vertical-align: top;
  font-weight: var(--typography-font-weight-regular);
  border-block-start: 1px solid var(--color-border-default-subtle);
  overflow-wrap: anywhere;
}
.bcn-doc-summary__row > th {
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-doc-summary__row {
  break-inside: avoid;
}
.bcn-doc-summary__section + .bcn-doc-summary__row >,
.bcn-doc-summary__run + .bcn-doc-summary__row >,
.bcn-doc-summary__group + .bcn-doc-summary__row > {
  border-block-start: 0;
}
```

## Tokens
- `--bcn-print-font-size-body`: 9pt _(component)_
- `--bcn-print-font-size-entry`: 9.5pt _(component)_
- `--bcn-print-font-size-meta`: 8pt _(component)_
- `--bcn-print-font-size-subgroup`: 10.5pt _(component)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-regular`: 400 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
