/* bcn-lego-checked: this file ships NO UI — it is a build-time handoff spec (data only,
   consumed by scripts/gen-handoff.mjs) that DESCRIBES already-built components. */

// Handoff spec for /prototypes/permit-tracker/permit-types: the library of permit types.
// Beneath it: a page per type (governing law, application needs, every agency that issues
// it) and a page per type × agency (time to issue, past permits, and for Critical Areas
// Review the agency's ordinance and rules).
//
// Critical areas data: every Washington county and city's CAO chapter, link and last
// amendment (read from the code sites Oct 23, 2026, via MRSC's lists); full rules read
// from the code for Lewis County, Napavine, Grays Harbor County, Pacific County and
// Raymond; badged example rules for the tracker's other sample agencies. In the prototype
// the AI review and "Check for updates" are SIMULATED and edits live in browser storage.

/** @type {{ sections: import('./help.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Permit types',
      selector: '.bcn-ptc',
      intent:
        'One card per permit type, linking to its page: level, who issues it (the office for state and federal types; for critical areas, the 320 counties and cities), and typical days to issue.',
      acceptance: [
        'Each card opens its permit type page.',
      ],
    },
    {
      label: 'Timelines by agency',
      selector: '[data-ptd]',
      intent:
        'How long each permit type has taken at each agency, learned from every issued permit: past permits, typical (median) days, review rounds and the fastest-to-slowest range. A row opens that type at that agency.',
      decisions: [
        'On the Critical Areas Review page the grid becomes the statewide list: every county and city with its county, ordinance (links to the code site), last amendment, and a Rules column (AI suggested / Edited / Validated / Not read, plus Ordinance changed). Facets: Type, County, Rules, Past permits.',
        'Ordinance changed compares the ordinance\'s last amendment with the date the rules were last suggested, edited or validated (a year-only date counts as Jan 1). Check for updates re-reads every code site and stamps when it ran.',
        'On an agency\'s Critical Areas Review page, How review works and the wetland and stream buffers are each a card with its status badge, a history line (suggested by AI, edited by, validated by, with dates), Edit (every text, citation and table value) and Validate. The AI suggestion is kept beside any edit; Restore AI suggestion puts it back.',
        'Governing law is editable per permit type (citation, name, link); on an agency page the local ordinance\'s chapter and link are editable too.',
      ],
      gotchas: [
        'Every citation links to the code section online and opens in a new tab; keep the citations with the text they support so a person can check one against the other.',
        'Example rules exist only so the sample agencies have something to show; they must stay badged so nobody takes them for the agency\'s code.',
      ],
      acceptance: [
        'Sorting the Critical Areas Review grid by Rules puts jurisdictions with a changed ordinance first.',
        'After Validate, the section\'s badge reads Validated and the history line names who validated it and when.',
      ],
    },
  ],
};
