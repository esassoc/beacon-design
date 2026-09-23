// Handoff spec for /prototypes/obligations-registry — the READ-ONLY obligations registry.
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by the browser.
//
// WHY IT EXISTS. Not as a second surface: it is the SAME component as setup step 5, given
// the other mode. BcnRegistryTree takes mode="review" (step 5 — selectors, bulk verbs,
// per-area approval) or mode="browse" (here — nothing to decide). Building a read-only
// registry as its own component would guarantee the two drift the first time either one
// gains a field.
//
// HOW IT DIFFERS FROM THE DATA CATALOG. The catalog's obligations list is deliberately
// FLAT — a filing cabinet, sortable and filterable, one row per duty (team decision,
// 2026-09-03). This is the HIERARCHICAL view: the registry as it is actually organised.
// Both are legitimate; neither replaces the other.
//
// DATA PROVENANCE. Every duty, heading, subject area, class, standard, condition, gate
// flag and value conflict is registry data, extracted from four real permit documents
// (ITP 177, EIR 129, ITP Amendment 36, USFWS BiOp 33). EXAMPLE: the tenant and project
// names in the shell.

/** @type {{ sections: import('./requirement-tracker.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'The registry (read-only)',
      selector: '.bcn-rt',
      intent:
        'The registry as a nested tree — 17 subject areas over 69 headings over 402 standing duties, each duty a one-line row opening in place to its record. No selection, no verbs, nothing to decide.',
      decisions: [
        'SAME COMPONENT AS STEP 5, mode="browse". The review affordances are a prop, not a fork: passing the other mode drops the select-all, the bulk verbs, the per-area Approve and every row checkbox, and nothing else changes. Do not reimplement a read-only registry.',
        'Expand/collapse-all SURVIVES into browse mode. It is navigation over 86 grouping nodes, not a decision control, and a reader needs it more than a reviewer does.',
        'The duty row keeps its class chip and commitment codes, and the record keeps every field including the gate and the value conflict. Read-only means no VERBS, not less information.',
        'The registry is reachable along any axis a reader thinks in — subject, activity, species. This page shows the SUBJECT axis, the one step 5 approves along. An axis pivot belongs in the component, not on this page.',
      ],
      gotchas: [
        'The controller (registry-tree.ts) returns early unless data-mode is "review", so the same script costs one no-op call here. Do not branch at the call site.',
        'Everything is server-rendered — 691 duty placements, ~1500 <details>. Deliberate for a static prototype. In the Angular app, render areas and headings eagerly but defer each heading’s duty rows until it opens; headings ship closed, so it is invisible.',
        'A duty filed under two or three subject areas appears in each of them. That is the registry’s own structure — 613 placements over 402 duties — not a duplicate to de-dupe. The record names the other areas under “Also filed under”.',
      ],
      acceptance: [
        'Seventeen subject areas render open with their headings and counts; headings and duty records render closed.',
        'No checkbox, no Approve control and no bulk verb appears anywhere on the page.',
        'Expand all opens every area and heading but leaves duty records closed.',
        'Opening a duty shows Standard, Condition, then Parameters / Notice window / In effect / Installed control where present, then Activities, Species and “Also filed under”, then a link to the full record.',
      ],
    },
  ],
};
