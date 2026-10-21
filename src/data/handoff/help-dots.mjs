/* bcn-lego-checked: this file ships NO UI — it is a build-time handoff spec (data only,
   consumed by scripts/gen-handoff.mjs) that DESCRIBES already-built components. */

// Handoff spec for /prototypes/help-dots: help dots on the Lists page, the Guidance bar's
// band, and the drawer's page sections. Round 17d starts it with who may do what, which
// the prototype had only in code comments: dots and page terms are ESA-authored and the
// same for every tenant (BCN-1513), the page description is the tenant's own.
//
// Capture runs against the production preview with no query string, so the sections
// below are the reader's view; the admin controls are described, and reachable in the
// prototype with ?as=esa-admin (alias ?as=admin) or ?as=tenant-admin.
//
// Permissions (control · role · why):
//   Add Dot (band)                   ESA admin     dots are ESA help content, one set for every tenant
//   Edit Dots (band) + its modes     ESA admin     moving, editing or detaching a dot changes it for every tenant
//   Need a Spot chip + Pick Again    ESA admin     repairing a dot whose part is gone is authoring
//   Drafts (muted dots, Draft tags)  ESA admin     Claude drafts await ESA review before any tenant sees them
//   Dot popover Edit, dot ×          ESA admin     as Edit Dots
//   On This Page row tools           ESA admin     Publish, Edit, Dismiss, Pick Again, Detach: as above
//   + Add Term, term ×               ESA admin     a page's terms are ESA help content (BCN-1513)
//   Inherited term Hide / Edit on    ESA admin     the parent page's terms are ESA help content too
//   Page description pencil          tenant admin  the description is the tenant's custom rich text
//                                    (ESA admins too)  (ActionLists); "for everyone in <tenant>"
//   Everything else                  everyone      reading dots, the drawer, terms

/** @type {{ sections: import('./help.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Band above the Guidance bar',
      selector: '[data-help-panelbar]',
      apply: [{ click: '[data-help-bar] [data-help-trigger]' }],
      intent:
        'Guidance on a page with dots turns the dots on and raises a band above the Guidance bar. Everyone gets Open Help & Guidance. ESA admins ONLY also get Add Dot and Edit Dots, in a quiet admin inset; a tenant admin sees exactly what a reader sees.',
      decisions: [
        'Roles: Add Dot, Edit Dots, the Need a Spot chip, drafts and every dot editing control are ESA admin only. Dots are ESA-authored help content and identical for every tenant (BCN-1513), so no tenant role authors them.',
        'Every ESA-only control says so in its tooltip ("ESA admin: …"), so the role is legible on the surface, not only in the permission check.',
        'The band rises from behind the bar and fades in (220ms, easing-enter); off, it drops back (160ms, easing-exit). Reduced motion: fades only.',
        'Dots come in at random: each draws a delay (0 to 350ms) and a length (180 to 260ms) on every Guidance-on; pings start once a dot lands.',
      ],
      gotchas: [
        'Gate on the ESA admin claim, not on a tenant admin role: a tenant admin must not see Add Dot or Edit Dots.',
      ],
      acceptance: [
        'A reader and a tenant admin see only Open Help & Guidance in the band; an ESA admin also sees Add Dot and Edit Dots.',
      ],
    },
    {
      label: 'On This Page (the dots)',
      selector: '[data-gd-section="howtos"]',
      apply: [{ click: '[data-help-bar] [data-help-trigger]' }, { click: '[data-help-panel-open]' }],
      intent:
        'On a page with dots, the drawer\'s On This Page is the page\'s published dots in page order. A row closes the drawer, turns dots on, scrolls to the dot and opens it. No page-attached articles are listed here (Related was cut, a deviation from BCN-1513 to settle).',
      decisions: [
        'ESA admin only: drafts with a Draft tag, dots that need a spot (last, muted, alert icon), and hover row tools (Publish, Edit, Dismiss, Pick Again, Detach), each tooltip prefixed "ESA admin:".',
        'Row tools sit in the shared admin cue (src/styles/bcn-admin-cue.css: the settings rail\'s ESA Admin glass, 22px icon buttons, 14px glyphs) and take their own width, so the text truncates short of them.',
      ],
      acceptance: [
        'A tenant admin sees the same list as a reader: published dots only, no tools.',
      ],
    },
    {
      label: 'Terms',
      selector: '[data-gd-section="terms"]',
      apply: [{ click: '[data-help-bar] [data-help-trigger]' }, { click: '[data-help-panel-open]' }],
      intent:
        'The glossary terms for this page, then the terms it takes from its parent page ("From Project").',
      decisions: [
        'ESA admin only: + Add Term (a typeahead over glossary titles, no tenant aliases exist yet), × to detach a page\'s own term, and Hide on This Page or Edit on Project for an inherited one. Terms are ESA help content, the same for every tenant (BCN-1513).',
      ],
      acceptance: [
        'A tenant admin sees no + and no row tools on Terms.',
      ],
    },
    {
      label: 'Page header',
      selector: '.bcn-gd__here',
      apply: [{ click: '[data-help-bar] [data-help-trigger]' }, { click: '[data-help-panel-open]' }],
      intent:
        'The page name with a map pin, and the page description as plain text under it.',
      decisions: [
        'Tenant admin (and ESA admin): a small pencil at the end of the heading row, tooltip "Edit page description for everyone in <tenant>", opens the description in a side panel. The description is the tenant\'s own custom rich text (ActionLists on Lists), so this is the one help control a tenant admin has.',
      ],
      acceptance: [
        'A tenant admin sees the pencil and no other admin control in the drawer.',
      ],
    },
  ],
};
