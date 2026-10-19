// Handoff spec for /prototypes/plans/ — a REPLICA of Beacon's shipped Planning feature (BCN-1652, origin/develop).
//
// Consumed only by the build-time generator (scripts/gen-handoff.mjs), never by the browser.
//
// WHY IT EXISTS. Not a design to build from: Planning already ships. This rebuilds the prod screens one-for-one
// (plan list, plan Gantt, element drawer, Plan settings, Move plan + schedule preview, edit-mode drag, live refresh)
// so they can be reviewed and reworked in the spoke. Nothing was fixed or simplified on the way in.
//
// DATA PROVENANCE. EXAMPLE: the sample plan, its programs, studies, tasks, dates and landmarks are invented. The
// mock plan API stores plans in the browser (localStorage); a second tab with &user=Name stands in for another editor.

/** @type {{ sections: import('./requirement-tracker.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Plan list',
      selector: '[data-plan-list]',
      intent:
        'The project’s plans, with New plan and Load sample plan. Each row opens that plan’s Gantt. A replica of Beacon’s pages/plan-list.',
      decisions: [
        'REPLICA, NOT A SPEC. Read Beacon’s origin/develop for behavior; this page mirrors it, including its complexity.',
        'Load sample plan is prod’s temporary demo scaffolding (BCN-1788), kept because prod still has it.',
      ],
      gotchas: [
        'Plans persist in this browser only. Clearing site data empties the list.',
      ],
      acceptance: [
        'With no plans, the empty state offers New plan and Load sample plan.',
        'Load sample plan creates a plan and opens its Gantt.',
      ],
    },
  ],
};
