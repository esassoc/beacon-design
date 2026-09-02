// Prototypes that predate the guidance gate and still have no curated spec in
// src/data/handoff/. They fall back to the hub's whole-page capture: auto-derived
// sections, guessed labels, no authored intent / decisions / gotchas / acceptance.
//
// This list is a RATCHET, not a permit. check-guidance.mjs fails on any prototype
// missing a spec that is NOT listed here, so new work is gated from day one while
// this backlog stays visible. Entries come OFF the list when a spec is written —
// never go back on. The check errors if a listed slug turns out to have a spec, so
// the list can't quietly drift out of date.
export default [
  'homepage',
  'settings-page',
  'settings-feature-flags',
  'settings-operations',
  'settings-tenants',
  'data-catalog-actions',
  'data-catalog-action',
  'data-catalog-commitment',
  'data-catalog-requirement',
  'data-catalog-requirements-streamlined',
  'site-clearance',
  'work-area-drawer-specimen',
  'site-clearance-simple',
  'monitoring-surveys',
  'fish-studies',
  'fish-study',
  'fish-gantt',
  'fish-node',
  'fish-model-map',
  'fish-detail',
  'fish-science-plan',
  // Added as a stopgap (2026-08-14) to unblock the Deploy workflow's guidance gate,
  // which fails the WHOLE site's deploy if any one prototype lacks a spec — not
  // authored by this change. Its own curated spec still belongs with whoever built
  // it; remove this entry once src/data/handoff/evidence-drawer.mjs exists.
  'evidence-drawer',
  // Added as a stopgap (2026-08-24) to unblock the Deploy workflow's guidance gate —
  // not authored by this change. Its own curated spec still belongs with whoever
  // built it; remove this entry once src/data/handoff/evidence-triage.mjs exists.
  'evidence-triage',
  // Added as a stopgap (2026-09-02) to unblock the Deploy workflow's guidance gate.
  // monitoring-data is the Monitoring Data catalog from the 2026-08-24 rebuild; the
  // two permitting pages came in with the Permitting module. Each still owes a
  // curated spec at src/data/handoff/<slug>.mjs; remove the entry when it exists.
  'monitoring-data',
  'permitting-dashboard',
  'permitting-details',
  // Added as a stopgap (2026-08-24) to unblock deploy for the Beale due-diligence
  // flow (siting -> boundary -> overview -> constraints -> permits -> report).
  // Real curated specs (sections with selector + intent/decisions/gotchas/
  // acceptance, per permit-tracking.mjs) are still owed for all six — remove each
  // slug below once its src/data/handoff/<slug>.mjs exists.
  'due-diligence-siting',
  'due-diligence-boundary',
  'due-diligence-overview',
  'due-diligence-constraints',
  'due-diligence-permits',
  'due-diligence-report',
];
