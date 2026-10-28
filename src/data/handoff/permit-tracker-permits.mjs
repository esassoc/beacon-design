/* bcn-lego-checked: this file ships NO UI — it is a build-time handoff spec (data only,
   consumed by scripts/gen-handoff.mjs) that DESCRIBES already-built components. */

// Handoff spec for /prototypes/permit-tracker/permits: every permit on every project in
// one grid, so a permit can be found without knowing its project.

/** @type {{ sections: import('./help.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'All permits',
      selector: '[data-ptl]',
      intent:
        'The project page\'s permit list across every project, with a Project column (links to the project) after the permit name (links to the permit page).',
      decisions: [
        'It is the same component as the project page\'s List (BcnPermitTable without a project id), so columns, status resolution and flags match exactly.',
        'An esa-button-toggle filters by the permit\'s project status: Active (default), Closed, All. Clear Filters returns to Active.',
        'Permits added in the browser on any project are included.',
        'Default order is by project (active first, then closed, newest construction start first), then project-wide permits, then each site\'s.',
      ],
      gotchas: [
        'The grid is wider than a laptop screen; it scrolls sideways rather than dropping columns.',
      ],
      acceptance: [
        'Searching an agency name narrows the grid across projects; Closed shows only permits on closed projects.',
      ],
    },
  ],
};
