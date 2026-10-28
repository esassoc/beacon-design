/* bcn-lego-checked: this file ships NO UI — it is a build-time handoff spec (data only,
   consumed by scripts/gen-handoff.mjs) that DESCRIBES already-built components. */

// Handoff spec for /prototypes/permit-tracker: the Permit Tracker's landing page. The
// tracker is a satellite of Beacon with its own shell (PermitTrackerLayout over
// esa-app-shell: Projects, Permits, Permit types). Projects have sites; permits are
// project-wide or per site. The prototype's shared state (teams, project edits) lives in
// browser storage; in the product it is server data every user sees.

/** @type {{ sections: import('./help.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'My projects',
      selector: '[data-bcn-ppl]',
      intent:
        'Cards for the active projects the current user is on the team of: client, project no., project manager, construction start, permits issued of total, and what needs attention. A badge says whether the project is on track to have every permit issued by construction start.',
      decisions: [
        'Membership is the only role: a project team is a list of people, plus the project manager. "My projects" is every active project whose team includes the current user.',
        'The badge is the readiness state of the whole project: At risk when the expected all-issued date is after construction start or a permit expires before it; All issued; Unconfirmed when a permit has no forecast; otherwise On track. The same rule drives the project page.',
        'The cards re-read the project store, so an edited client, manager or construction start shows here without a rebuild.',
      ],
      gotchas: [
        'An empty state ("You\'re not on any active projects") points people to All projects, where they can open a project and add themselves to its team.',
      ],
      acceptance: [
        'Removing yourself from a project\'s team takes its card off My projects; adding yourself brings it back.',
        'Moving a project\'s construction start earlier than its expected all-issued date turns its badge to At risk.',
      ],
    },
    {
      label: 'All projects',
      selector: '[data-pprg]',
      intent:
        'Every project in the tracker, whoever is on it, as an AG Grid, so anyone can reach a project they are not on, or a closed one, for its permits and files.',
      decisions: [
        'An esa-button-toggle (Active, Closed, All) filters by project status; Active is the default and Clear Filters returns to it. It is an external filter, so search and column filters apply on top.',
        'Columns: project (links to the project page), project no., client, project manager, sites, permits issued of total, construction start, status.',
        'The grid grows to its rows (autoHeight); a tracker holds dozens of projects, not thousands.',
      ],
      acceptance: [
        'Switching to Closed shows only closed projects; each project name opens its project page.',
      ],
    },
  ],
};
