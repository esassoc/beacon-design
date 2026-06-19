/*
 * Fictional BESS project portfolio + GIS layer fixtures for the Due Diligence
 * prototype. Coordinates are real (CA Mojave / Antelope Valley area) so the
 * basemap renders something sensible; site outlines + overlay polygons are
 * illustrative, not real-world data.
 */

window.BeaconData = (function () {
  // ── Project portfolio ──────────────────────────────────────────────
  const projects = [
    {
      id: 'proj-mojave-stockyard',
      name: 'Mojave Stockyard BESS',
      developer: 'Acme Energy',
      location: 'Kern County, CA',
      mw: 500,
      acres: 18,
      phase: 'due-diligence',
      stage: 'CIA in progress',
      created: '2026-05-12',
      updated: '2026-06-14',
      center: [-118.176, 35.052],
      boundary: bbox(-118.179, 35.049, -118.173, 35.054),
      findings: { high: 2, medium: 4, low: 5, none: 11 },
      permitsRequired: 9,
      progress: 0.42,
    },
    {
      id: 'proj-antelope-pivot',
      name: 'Antelope Pivot BESS',
      developer: 'Acme Energy',
      location: 'Los Angeles County, CA',
      mw: 750,
      acres: 22,
      phase: 'due-diligence',
      stage: 'Boundary uploaded',
      created: '2026-06-02',
      updated: '2026-06-15',
      center: [-118.117, 34.731],
      boundary: bbox(-118.120, 34.728, -118.114, 34.733),
      findings: { high: 1, medium: 3, low: 6, none: 12 },
      permitsRequired: 8,
      progress: 0.18,
    },
    {
      id: 'proj-saddle-creek',
      name: 'Saddle Creek BESS',
      developer: 'Acme Energy',
      location: 'San Bernardino County, CA',
      mw: 1000,
      acres: 21,
      phase: 'planning-permitting',
      stage: 'CUP application drafted',
      created: '2026-02-08',
      updated: '2026-06-10',
      center: [-117.314, 34.485],
      boundary: bbox(-117.317, 34.482, -117.311, 34.487),
      findings: null,
      permitsRequired: 11,
      progress: 0.55,
    },
    {
      id: 'proj-rio-vista',
      name: 'Rio Vista BESS — Phase II',
      developer: 'Acme Energy',
      location: 'Solano County, CA',
      mw: 400,
      acres: 12,
      phase: 'compliance',
      stage: 'Construction monitoring',
      created: '2025-08-21',
      updated: '2026-06-16',
      center: [-121.685, 38.155],
      boundary: bbox(-121.688, 38.152, -121.682, 38.157),
      findings: null,
      permitsRequired: 14,
      progress: 0.88,
    },
  ];

  // ── GIS layers (toggleable on Constraints + boundary pages) ────────
  // Each layer has a Beacon resource category, color, and a synthetic
  // intersection result for the active project.
  const gisLayers = [
    {
      id: 'jurisdictions',
      name: 'Jurisdictions',
      category: 'Land Use',
      color: '#003f5c',
      source: 'CA Cities & County Boundaries (CDFA, 2026 refresh)',
      defaultOn: true,
      features: 3,
      intersects: [
        { label: 'Primary Jurisdiction', value: 'City of Mojave Stockyard (incorporated)' },
        { label: 'County',               value: 'Kern County' },
        { label: 'Regional Plan',        value: 'SCAG RTP/SCS 2024' },
      ],
      risk: 'low',
    },
    {
      id: 'zoning',
      name: 'Zoning & General Plan',
      category: 'Land Use',
      color: '#7a5195',
      source: 'City GIS, parcel-level zoning (last sync 2026-06-01)',
      defaultOn: true,
      features: 1,
      intersects: [
        { label: 'Zoning',         value: 'M-2 (Heavy Industrial)' },
        { label: 'GP Designation', value: 'Industrial Employment Center' },
        { label: 'BESS allowed',   value: 'CUP required (SB 283)' },
      ],
      risk: 'medium',
    },
    {
      id: 'parcels',
      name: 'Parcels & Ownership',
      category: 'Land Use',
      color: '#955196',
      source: 'County Assessor (refreshed nightly)',
      defaultOn: true,
      features: 2,
      intersects: [
        { label: 'APN', value: '237-104-007, 237-104-008' },
        { label: 'Owner', value: 'Acme Land Holdings, LLC (record)' },
        { label: 'Acreage', value: '18.2 ac net' },
      ],
      risk: 'none',
    },
    {
      id: 'fire-hazard',
      name: 'CalFire Fire Hazard Severity',
      category: 'Hazards',
      color: '#d45087',
      source: 'CAL FIRE FHSZ (LRA + SRA, 2025 update)',
      defaultOn: true,
      features: 1,
      intersects: [
        { label: 'FHSZ',           value: 'Moderate (SRA portion overlapping NE corner)' },
        { label: 'SB 283 trigger', value: 'Yes — early fire authority outreach required' },
      ],
      risk: 'medium',
    },
    {
      id: 'haz-waste',
      name: 'Hazardous Materials (Cortese / EnviroStor)',
      category: 'Hazards',
      color: '#ef4444',
      source: 'DTSC EnviroStor + SWRCB GeoTracker (live feed)',
      defaultOn: true,
      features: 2,
      intersects: [
        { label: 'On-site listings', value: 'None' },
        { label: 'Within 1 mi', value: '2 closed LUST sites, 1 open VCP case' },
      ],
      risk: 'high',
    },
    {
      id: 'biological',
      name: 'Sensitive Biological Resources',
      category: 'Biological',
      color: '#2e7571',
      source: 'CNDDB (Q2 2026) + USFWS Critical Habitat',
      defaultOn: true,
      features: 3,
      intersects: [
        { label: 'Critical Habitat', value: 'Mohave ground squirrel — designated, 0.4 mi south' },
        { label: 'CNDDB occurrences (1 mi)', value: '6 sensitive species, 2 within parcel' },
        { label: 'Burrowing Owl protocol', value: 'Required (CDFW 2012 protocol)' },
      ],
      risk: 'high',
    },
    {
      id: 'cultural',
      name: 'Cultural & Tribal Resources',
      category: 'Cultural',
      color: '#d68910',
      source: 'NAHC SLF + SHPO (record search initiated)',
      defaultOn: false,
      features: 1,
      intersects: [
        { label: 'Records search', value: 'Pending SCCIC return' },
        { label: 'AB 52 consultation', value: 'Not yet initiated' },
        { label: 'Known sites within 1 mi', value: '0 known, 1 sensitivity area' },
      ],
      risk: 'medium',
    },
    {
      id: 'water',
      name: 'Hydrology & Floodplain',
      category: 'Water',
      color: '#228be6',
      source: 'FEMA NFHL + NHD (2026)',
      defaultOn: false,
      features: 1,
      intersects: [
        { label: 'FEMA Zone', value: 'Zone X (outside SFHA)' },
        { label: 'Drainages on parcel', value: '1 ephemeral wash (potential CWA 404)' },
        { label: 'Groundwater basin', value: 'Mojave Adjudicated' },
      ],
      risk: 'medium',
    },
    {
      id: 'ag-williamson',
      name: 'Farmland & Williamson Act',
      category: 'Land Use',
      color: '#7CB342',
      source: 'CDFA Williamson Act + DOC FMMP (2024)',
      defaultOn: false,
      features: 0,
      intersects: [
        { label: 'Farmland classification', value: 'Other Land' },
        { label: 'Williamson Act', value: 'No contract' },
      ],
      risk: 'low',
    },
    {
      id: 'transmission',
      name: 'Transmission & Substations',
      category: 'Infrastructure',
      color: '#0a6562',
      source: 'CEC Energy Atlas (2026)',
      defaultOn: false,
      features: 1,
      intersects: [
        { label: 'Nearest substation', value: 'Mojave Stockyard 230 kV — 0.6 mi NW' },
        { label: 'Interconnection queue', value: 'CAISO Cluster 16 (queued)' },
      ],
      risk: 'low',
    },
  ];

  // ── CEQA Appendix G resources (Optional Task 4) ────────────────────
  const ceqaResources = [
    { id: 'aesthetics',        name: 'Aesthetics',                construction: 'Low',    operations: 'Med',   notes: 'Industrial backdrop; lighting design may suffice.' },
    { id: 'ag',                name: 'Agriculture & Forestry',    construction: 'Low',    operations: 'Low',   notes: 'No Prime Ag conversion; FMMP Other Land.' },
    { id: 'air-quality',       name: 'Air Quality',               construction: 'Med',    operations: 'Low',   notes: 'SCAQMD construction thresholds applicable.' },
    { id: 'bio',               name: 'Biological Resources',      construction: 'High',   operations: 'Med',   notes: 'Burrowing owl + Mohave ground squirrel protocols.' },
    { id: 'cultural',          name: 'Cultural Resources',        construction: 'Med',    operations: 'Low',   notes: 'AB 52 consultation outstanding.' },
    { id: 'energy',            name: 'Energy',                    construction: 'Low',    operations: 'Low',   notes: 'BESS supports grid resilience; net beneficial.' },
    { id: 'geo',               name: 'Geology & Soils',           construction: 'Low',    operations: 'Low',   notes: 'Standard geotech recommendations.' },
    { id: 'ghg',               name: 'Greenhouse Gas',            construction: 'Low',    operations: 'Low',   notes: 'Net displacement of fossil generation.' },
    { id: 'haz',               name: 'Hazards & Hazardous Mats',  construction: 'Med',    operations: 'High',  notes: 'Adjacent VCP case; battery fire hazard — SB 283.' },
    { id: 'hydro',             name: 'Hydrology / Water Quality', construction: 'Med',    operations: 'Low',   notes: 'Ephemeral wash on parcel; SWPPP required.' },
    { id: 'land-use',          name: 'Land Use & Planning',       construction: 'Low',    operations: 'Med',   notes: 'CUP needed; consistent with industrial zoning.' },
    { id: 'mineral',           name: 'Mineral Resources',         construction: 'Low',    operations: 'Low',   notes: 'No locally important mineral overlays.' },
    { id: 'noise',             name: 'Noise',                     construction: 'Med',    operations: 'Med',   notes: 'Inverter/cooling noise; site setbacks needed.' },
    { id: 'pop-housing',       name: 'Population & Housing',      construction: 'Low',    operations: 'Low',   notes: 'No displacement; minimal indirect growth.' },
    { id: 'public-svc',        name: 'Public Services',           construction: 'Low',    operations: 'Med',   notes: 'Fire response capacity coordination (SB 283).' },
    { id: 'rec',               name: 'Recreation',                construction: 'Low',    operations: 'Low',   notes: 'No park/trail conflicts identified.' },
    { id: 'transport',         name: 'Transportation',            construction: 'Med',    operations: 'Low',   notes: 'Construction VMT; standard TIA scope.' },
    { id: 'tribal',            name: 'Tribal Cultural Resources', construction: 'Med',    operations: 'Low',   notes: 'AB 52 outreach pending.' },
    { id: 'utilities',         name: 'Utilities & Service Systems', construction: 'Low', operations: 'Low',   notes: 'Interconnection in queue.' },
    { id: 'wildfire',          name: 'Wildfire',                  construction: 'Med',    operations: 'High',  notes: 'Moderate FHSZ adjacent; battery fire mitigation key.' },
    { id: 'mandatory',         name: 'Mandatory Findings',        construction: '—',      operations: '—',     notes: 'To be evaluated at IS/MND stage.' },
  ];

  // ── Permit matrix — columns match real CIA matrices:
  //   Agency · Permit/Approval · Requirement · Applicable? · Comments/Notes
  // Applicability follows the four-state convention used in actual ESA CIAs.
  const permits = [
    // FEDERAL
    { name: 'Section 404 — Dredge or Fill Permit', agency: 'U.S. Army Corps of Engineers (USACE), Los Angeles Regulatory District', level: 'Federal',
      requirement: 'Construction resulting in discharge of dredge or fill to Waters of the U.S. (WOTUS).',
      applicability: 'not-likely',
      notes: 'Post-Sackett, ephemeral washes such as those traversing the site are unlikely to be jurisdictional. Field delineation required to confirm.' },
    { name: 'ESA §7 / §10 Consultation & Incidental Take', agency: 'U.S. Fish and Wildlife Service (USFWS)', level: 'Federal',
      requirement: 'Federal nexus action affecting federally listed species or designated Critical Habitat; or stand-alone take authorization via Habitat Conservation Plan.',
      applicability: 'potentially',
      notes: 'Mohave ground squirrel Critical Habitat designated 0.4 mi south. §7 path preferred if federal nexus identified; §10 HCP is more cumbersome (12–24 mo).' },
    { name: 'Migratory Bird Treaty Act Compliance', agency: 'USFWS', level: 'Federal',
      requirement: 'Construction or operation may impact migratory birds.',
      applicability: 'applicable',
      notes: 'Standard nesting-bird avoidance/buffer measures. No incidental-take permit currently available.' },
    { name: 'NEPA Review', agency: 'Varies by federal trigger', level: 'Federal',
      requirement: 'Federal nexus action requires CatEx / EA / EIS.',
      applicability: 'potentially',
      notes: 'Triggered only if §10 HCP, USACE permit, or federal funding apply.' },

    // STATE / REGIONAL
    { name: 'CEQA Lead Agency Review', agency: 'City of Mojave Stockyard (anticipated)', level: 'State',
      requirement: 'Discretionary project approval triggers CEQA review (CatEx / IS-MND / EIR).',
      applicability: 'applicable',
      notes: 'CUP is discretionary. IS/MND anticipated based on findings.' },
    { name: 'AB 52 Tribal Consultation', agency: 'Lead Agency + California Native American Tribes', level: 'State',
      requirement: 'Lead agency must consult with traditionally and culturally affiliated tribes prior to CEQA determination.',
      applicability: 'applicable',
      notes: 'Initiate at Notice of Preparation. NAHC Sacred Lands File request submitted; SCCIC records search pending.' },
    { name: 'CESA Incidental Take Permit (§2081)', agency: 'CA Dept. of Fish and Wildlife (CDFW)', level: 'State',
      requirement: 'Take of state-listed threatened or endangered species during project activities.',
      applicability: 'potentially',
      notes: 'Conditional on results of protocol-level surveys (Mohave ground squirrel, burrowing owl).' },
    { name: 'Western Joshua Tree Conservation Act ITP', agency: 'CDFW', level: 'State',
      requirement: 'Incidental take of one or more western Joshua trees.',
      applicability: 'potentially',
      notes: 'CNDDB occurrence on parcel — confirm via tree inventory. Statutory in-lieu fees available.' },
    { name: 'Section 1602 Streambed Alteration Agreement', agency: 'CDFW', level: 'State',
      requirement: 'Substantial obstruction, diversion, or alteration of a river, stream, or lake.',
      applicability: 'potentially',
      notes: 'Ephemeral wash on parcel. Triggered if wash impacts unavoidable. Notification package requires certified CEQA document.' },
    { name: '401 Water Quality Certification', agency: 'SWRCB / Lahontan RWQCB', level: 'State',
      requirement: 'Discharges to waters of the state, including isolated waters.',
      applicability: 'potentially',
      notes: 'Likely needed in parallel with §1602 if wash impacts occur.' },
    { name: 'NPDES Construction General Permit (SWPPP)', agency: 'SWRCB', level: 'State',
      requirement: 'Construction that disturbs ≥ 1 acre of soil.',
      applicability: 'applicable',
      notes: 'SWPPP must be developed by a certified Qualified SWPPP Developer (QSD). NOI + WDID required before disturbance.' },
    { name: 'CEC Opt-In Certification (AB 205)', agency: 'California Energy Commission', level: 'State',
      requirement: 'Voluntary state-level certification path for energy storage ≥ 200 MW.',
      applicability: 'not-likely',
      notes: 'Eligible (500 MW) but local CUP path anticipated to be faster and lower-risk in this jurisdiction.' },
    { name: 'Portable Equipment Registration (PERP)', agency: 'CA Air Resources Board', level: 'State',
      requirement: 'Operation of portable diesel engines/equipment during construction.',
      applicability: 'applicable',
      notes: 'Construction-only. Allows statewide use without local district permits.' },
    { name: 'Permit to Construct / Operate', agency: 'South Coast AQMD (regional)', level: 'Regional',
      requirement: 'Stationary sources emitting criteria pollutants above thresholds.',
      applicability: 'not-likely',
      notes: 'Only if backup diesel generation > 50 hp is added.' },

    // LOCAL
    { name: 'Conditional Use Permit (CUP)', agency: 'City of Mojave Stockyard — Planning Division', level: 'Local',
      requirement: 'Discretionary permit for energy storage in M-2 (Heavy Industrial); SB 283-aligned conditions anticipated.',
      applicability: 'applicable',
      notes: 'Pre-application fire authority outreach required (SB 283, ≥ 10 mo lead time).' },
    { name: 'Building Permit', agency: 'City Building Department', level: 'Local',
      requirement: 'Plan check; structural, electrical, and fire-code compliance.',
      applicability: 'applicable',
      notes: 'NFPA 855 fire-rated enclosure spec; California Fire Code Chapter 12.' },
    { name: 'Grading Permit', agency: 'City Public Works', level: 'Local',
      requirement: 'Earthwork above local thresholds; ties to NPDES Construction GP.',
      applicability: 'applicable',
      notes: 'Drainage study and Water Quality Management Plan likely required.' },
    { name: 'Encroachment Permit', agency: 'City Public Works', level: 'Local',
      requirement: 'Driveway, utility taps, or other work in public right-of-way.',
      applicability: 'applicable',
      notes: 'Driveway connection from Stockyard Road.' },
    { name: 'BESS Fire Safety Review (NFPA 855)', agency: 'Kern County Fire / SBCFPD-equivalent', level: 'Local',
      requirement: 'Pre-application review of HMBP, ERP, water supply, and access for BESS.',
      applicability: 'applicable',
      notes: 'SB 283 requires fire authority noticing at least 10 months prior to application.' },
    { name: 'Interconnection Agreement', agency: 'CAISO / IOU', level: 'Regional',
      requirement: 'Connection to the bulk electric system.',
      applicability: 'applicable',
      notes: 'CAISO Cluster 16 — currently in study.' },
  ];

  // ── Critical-issues bullets (Section 3 / Executive Summary headline) ──
  const criticalIssues = [
    'Discretionary permit (CUP) required — triggers CEQA review (IS/MND anticipated).',
    'Designated Critical Habitat for Mohave ground squirrel within 0.4 mi; CNDDB occurrences on parcel.',
    'Documented hazardous-materials cases (2 LUST, 1 open VCP) within 1 mi — Phase I ESA recommended.',
    'Ephemeral wash on parcel may trigger CDFW §1602 + 401 Water Quality Certification.',
    'Northeast boundary corner overlaps Moderate Fire Hazard Severity Zone — SB 283 fire authority outreach required.',
    'AB 52 tribal consultation pending; SCCIC records search initiated.',
  ];

  // ── Limitations — resources NOT covered by the CIA but expected at CEQA ──
  const limitations = [
    { covered: 'Resources covered by this CIA', items: ['Land Use & Planning', 'Aesthetics & Visual Resources', 'Agriculture', 'Biological & Aquatic Resources', 'Cultural & Tribal Resources', 'Hazardous Materials', 'Hydrology & Water Quality', 'Public Services & Wildfire'] },
    { covered: 'Deferred to CEQA-stage analysis', items: ['Air Quality', 'Greenhouse Gas Emissions', 'Energy Conservation', 'Geology & Soils (incl. paleontological)', 'Noise', 'Population & Housing', 'Recreation', 'Transportation / VMT', 'Utilities & Service Systems'] },
  ];

  // ── AHJ outreach notes (Task 5) ────────────────────────────────────
  const ahjNotes = [
    { topic: 'BESS history',         summary: 'City has reviewed 2 prior BESS projects; both used CUP path.' },
    { topic: 'Council sentiment',    summary: 'Mixed — fire safety + decommissioning bonds were primary concerns at Apr 2026 hearing.' },
    { topic: 'SB 283 process',       summary: 'City has not yet finalized SB 283 ordinance; using interim guidance.' },
    { topic: 'Fire authority gate',  summary: 'County Fire requires NFPA 855 conformance briefing pre-submittal.' },
  ];

  return { projects, gisLayers, ceqaResources, permits, ahjNotes, criticalIssues, limitations };

  // helper: build a closed polygon ring from a bbox
  function bbox(minX, minY, maxX, maxY) {
    return {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [minX, minY], [maxX, minY], [maxX, maxY], [minX, maxY], [minX, minY],
        ]],
      },
      properties: {},
    };
  }
})();
