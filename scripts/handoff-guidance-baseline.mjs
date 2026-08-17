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
];
