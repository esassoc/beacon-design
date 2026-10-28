/* bcn-lego-checked: this file ships NO UI — it is a build-time handoff spec (data only,
   consumed by scripts/gen-handoff.mjs) that DESCRIBES already-built components. */

// Handoff spec for /prototypes/permit-tracker/permits/<id>: one permit. Every editable
// section has its own Edit opening a side drawer (BcnPermitEditor). Permits added in the
// browser have one client-drawn page instead (/permits/added?id=…) with the same facts
// and editors for details, status and waits on.

/** @type {{ sections: import('./help.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Timeline',
      selector: '[data-ptl-root]',
      intent:
        'The permit\'s history with the agency (submittal, each review round, issuance, expiry) read from its status log, with a pace badge comparing it with the typical time for this permit type at this agency.',
      decisions: [
        'Dates are never typed in: they come from status changes (Change status logs the change, its date and a note; an issued status also takes the expiry).',
        'Pace: Took longer than typical / Within typical time once issued; Taking longer than typical once past the median; Likely to take longer when the remaining review rounds, at the rate so far, project past 115% of the median (the Issued step then shows the projected date).',
      ],
      acceptance: [
        'Changing status to Issued with an expiry adds both to the timeline and updates the project\'s readiness.',
      ],
    },
    {
      label: 'Application needs and waits on',
      selector: '[data-bcn-permit-prereqs]',
      intent:
        'The application checklist (the permit type\'s standard items plus custom ones), then the permits this one waits on and the permits that wait on it, each with its status.',
      decisions: [
        'Checking an item off stamps who and when; items can be edited, and custom ones removed.',
        'Waits on is edited in its own drawer; a plain note says the permit cannot be submitted until its unissued prerequisites are issued.',
      ],
      acceptance: [
        'Removing every Waits on entry shows None and drops the blocked note, and the project\'s list stops flagging "Waiting on".',
      ],
    },
    {
      label: 'Details',
      selector: '[data-pdet]',
      intent:
        'The permit\'s facts: trigger, applies to, level, agency, reference no., assigned to, conditions. Edit opens the details drawer.',
      decisions: [
        'Saved edits change the permit itself: the page header (name, agency, reference no., breadcrumb), this panel, the project\'s list and board, and the permit type section all follow.',
      ],
      acceptance: [
        'Renaming the permit updates the page title and its row on the project page.',
      ],
    },
    {
      label: 'Permit type',
      selector: '[data-pti]',
      intent:
        'What the permit\'s type says in general (level, how long it stays valid, typical days across agencies, governing law) and at this permit\'s agency (typical days there; for Critical Areas Review the agency\'s ordinance with its last amendment, the rules\' review status, and the gist of the rules), each linking to its Permit types page.',
      decisions: [
        'Rules status badges: AI suggested, Edited (not validated), Validated; plus Example data for template content and Ordinance changed when the code was amended after the rules were last reviewed.',
        'It reads the same stores as the Permit types pages, so edits there show here.',
      ],
      acceptance: [
        '"Full rules and buffer tables for <agency>" opens that agency\'s Critical Areas Review page.',
      ],
    },
  ],
};
