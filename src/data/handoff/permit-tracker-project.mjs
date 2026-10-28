/* bcn-lego-checked: this file ships NO UI — it is a build-time handoff spec (data only,
   consumed by scripts/gen-handoff.mjs) that DESCRIBES already-built components. */

// Handoff spec for /prototypes/permit-tracker/projects/<id>: one project. Header actions
// are icon-only Edit project, Team and Configure statuses, then the primary Add permit.
// The prototype keeps edits in browser storage; the product saves them server-side.

/** @type {{ sections: import('./help.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Ready to break ground?',
      selector: '[data-bcn-pr]',
      intent:
        'Whether every permit will be issued by construction start: permits issued of total, the expected all-issued date with how many days before or after construction start it falls (a warning icon when after), the construction start, then a Sites table with the same answer site by site.',
      decisions: [
        'The expected all-issued date is the latest permit forecast: issued date, or submittal plus the median days for that permit type at that agency, or (not yet submitted) its prerequisites\' forecasts plus prep time.',
        'Sites table: a Project-wide row first (the project-wide permits), then each site with its location and its own permits plus the project-wide ones, since those gate every site. Add site and a pencil per site open the site drawer. A site has no agency; each permit on it names its own.',
        'Issued-of-total and the status counts follow live status changes (Board, Change status) and added permits.',
        'Editing construction start (Edit project) re-dates every figure and badge.',
      ],
      gotchas: [
        'A site with permits cannot be removed; the drawer only offers Remove on an empty site.',
      ],
      acceptance: [
        'Moving a permit to Issued on the Board raises "N of M issued" without a reload.',
        'A construction start earlier than the expected date shows "N days after construction start" with a warning icon and an At risk badge.',
      ],
    },
    {
      label: 'Permits (List view)',
      selector: '[data-ptl]',
      intent:
        'Every permit on the project as an AG Grid: permit (links to its page), applies to, level, agency, assigned to, status with flags, submitted, reviews, issued, expires, conditions. Board and Schedule are the other two tabs.',
      decisions: [
        'Status is user data: each project configures its own status columns per workflow (Configure statuses); rows resolve through the status store and follow board moves.',
        'Two derived flags ride beside the status and are never statuses: "Waiting on <permit>" (unissued prerequisites) and "Expires soon" / "Expired".',
        'The Board is one column per status of the chosen workflow (or All permits by backbone category); dragging a card logs a status change. The Schedule draws one bar per permit on a calendar with Today and Construction start lines, each permit indented under the one it waits on.',
        'Permits added with Add permit join the List, Board and Schedule and link to their own page.',
      ],
      acceptance: [
        'The Applies to filter narrows to one site (project-wide permits stay listed under Project-wide).',
      ],
    },
    {
      label: 'Add permit',
      selector: '[data-bcn-ap] esa-side-dialog',
      apply: [{ click: '[data-add-permit]' }],
      intent:
        'A side drawer that adds a permit: permit type (required), applies to (project-wide or a site), agency, assigned to, why it applies, and the permits it waits on.',
      decisions: [
        'State and federal permit types have one issuing office, so the agency is locked with "Issued by <office>". Local types pick the city or county, defaulting to the chosen site\'s agency, else the project\'s lead agency.',
        'The new permit is built like any other: named from its type (a critical areas permit takes the agency\'s own name for it), first status of its workflow, and the type\'s application checklist.',
      ],
      acceptance: [
        'Adding a permit shows it in the List and on the Board, raises the issued total, and its name opens its permit page.',
      ],
    },
  ],
};
