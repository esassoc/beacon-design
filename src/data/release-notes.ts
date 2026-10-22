// Beacon Release Notes content — the customer-facing subset behind the Release
// Notes prototype page and the "What's new" popover.
//
// Condensed from esassoc/Beacon docs/release-notes (1.39.0, 1.40.0, 1.41.0 on
// origin/develop). Only Customer Announcements are carried here; the ESA Internal
// and Dev-only sections, items still marked TBD, and Jira keys are left out.
//
// Each release is one post: a one-line summary, two or three features (title,
// paragraph, optional note on what moved, screenshot), then that release's
// full Added / Changed / Fixed changelog.
//
// Consumers:
//   - the Release Notes prototype page — renders every release as a post.
//   - BcnHelpBar — the "What's new" popover lists the latest release's features.

/**
 * One changelog line. Inline `code` marks a value as it appears in Beacon
 * (a status or outcome name); it renders as bold text, never monospace.
 */
export interface ReleaseChange {
  text: string;
  /** Product area the line belongs to, when it is not app-wide, e.g. 'Monitoring Portal'. */
  area?: string;
}

export interface ReleaseChangeGroup {
  kind: 'Added' | 'Changed' | 'Fixed';
  changes: ReleaseChange[];
}

/** Where a feature screenshot comes from is an open question; today it is a capture of this repo's own prototype. */
export interface ReleaseImage {
  /** Path under public/, without the base. */
  src: string;
  alt: string;
}

export interface ReleaseFeature {
  /** Kebab id, unique within the release — anchor `${release.anchor}-${id}`. */
  id: string;
  title: string;
  text: string;
  /** What moved or was removed that customers will look for in its old place. */
  note?: string;
  image: ReleaseImage;
}

export interface Release {
  /** e.g. '1.41.0' */
  version: string;
  /** Hash anchor, e.g. 'v1-41-0'. */
  anchor: string;
  /** ISO date. */
  date: string;
  /** One plain line naming what the release brings. */
  summary: string;
  features: ReleaseFeature[];
  changelog: ReleaseChangeGroup[];
}

// Newest first.
export const RELEASES: Release[] = [
  {
    version: '1.41.0',
    anchor: 'v1-41-0',
    date: '2026-10-13',
    summary: 'Lists, a configurable Monitoring Portal dashboard, and evidence for a whole action list.',
    features: [
      {
        id: 'lists',
        title: 'Lists replace Action Lists',
        text: 'Each project now has one Lists page for action lists and commitment lists. Every list has its own page, with a searchable drawer for adding items, Select mode for removing many, and CSV export.',
        note: 'The Action Lists entry in the navigation is gone on every tenant. Your lists are all on the new page.',
        image: { src: '/release-notes/lists-index.jpg', alt: 'The Lists page, with Commitment Lists and Action Lists sections' },
      },
      {
        id: 'monitoring-dashboard',
        title: 'Configurable Monitoring Portal dashboard',
        text: 'The dashboard is now a board of widgets. Admins add them from a gallery, then resize, reorder, recolor and configure each one, and the layout is saved for the project.',
        note: 'Monitoring pages moved under each project’s new Data page. Old links redirect.',
        image: { src: '/release-notes/monitoring.jpg', alt: 'The Monitoring Portal dashboard with its widgets' },
      },
      {
        id: 'list-evidence',
        title: 'Evidence for a whole action list',
        text: 'Choose a component, stage the evidence, and save it to every action on that component in one step.',
        image: { src: '/release-notes/evidence-bulk.jpg', alt: 'Add Evidence of Compliance, with staged evidence beside the component’s actions' },
      },
    ],
    changelog: [
      {
        kind: 'Added',
        changes: [
          { text: 'Added a Lists page to every project that holds action lists and commitment lists together, with keyword search and an Add button for each kind of list' },
          { text: 'Added a page for every list, with editable details, sharing and delete, and views by type, by commitment or A to Z' },
          { text: 'Added a searchable drawer for building action lists, filtered by phase, species, type and frequency, and Select mode for removing many items at once' },
          { text: 'Added evidence for a whole action list at once: choose a component, stage the evidence, and save it to every action’s occurrences' },
          { text: 'Added CSV export to every action list and commitment list' },
          { text: 'Added a lineage view to Evidence of Compliance records, from source documents through to the project' },
          { text: 'Added an Evidence of Compliance card to Project and Component dashboards that takes files dropped straight onto it' },
          { text: 'Added starred projects, which pin to the top of the project picker, and a search field in the picker once you can see more than eight projects' },
          { text: 'Added project archiving: archived projects leave pickers and lists, stay reachable by link, and nothing is deleted' },
          { text: 'Added your organization’s custom fields as columns on the Projects, Source Documents and Components grids' },
          { area: 'Monitoring Portal', text: 'Added a dashboard of widgets that admins can add, resize, reorder, recolor and configure, saved per project' },
          { area: 'Monitoring Portal', text: 'Added a Data page that lists every monitoring stream with its record count' },
          { area: 'Site Clearance', text: 'Added `Provisionally Cleared` and `Provisionally Blocked` outcomes for the review kinds an admin allows' },
        ],
      },
      {
        kind: 'Changed',
        changes: [
          { text: 'Changed Action Lists to Lists: the Action Lists entry in the navigation is gone on every tenant' },
          { text: 'Changed where evidence is associated: one dialog on the evidence record’s page replaces Associate To Actions and the Associated Work Areas picker' },
          { text: 'Changed a requirement’s evidence to come from the actions it is attached to, instead of being filed against the requirement' },
          { text: 'Changed the Permit Tracking status `Not Required` to `Not Needed`, with a new color, on every tenant' },
          { text: 'Changed commitment lists to follow a versioned commitment to its latest version' },
          { text: 'Changed survey report downloads to start with `DRAFT-` unless their status is marked final in Configure Statuses' },
          { area: 'Monitoring Portal', text: 'Changed Observation, Daily Monitoring Report and Survey Report pages to live under each project’s Data page; old links redirect' },
        ],
      },
      {
        kind: 'Fixed',
        changes: [
          { text: 'Fixed deleting a component; the dialog now asks for the component’s name and shows what is removed and what is kept' },
          { text: 'Fixed the Components link showing in a project’s navigation when Components are turned off' },
          { area: 'Site Clearance', text: 'Fixed Show on Map not switching to the Map tab and zooming to the work area or observation' },
          { text: 'Fixed report sections that draw on more than one evidence record overwriting files with the same name' },
          { text: 'Fixed custom field dates using different formats across grids; every grid now shows 8/25/2026' },
          { text: 'Fixed evidence counts not updating after evidence is removed from an occurrence' },
        ],
      },
    ],
  },
  {
    version: '1.40.0',
    anchor: 'v1-40-0',
    date: '2026-09-10',
    summary: 'Component dashboards, and evidence upload in the shared evidence drawer.',
    features: [
      {
        id: 'component-dashboards',
        title: 'Component dashboards',
        text: 'Each component has a dashboard with Tracking, Monitoring and Reporting cards showing overdue and due-soon counts, a 30, 60 and 90 day timeline, and a map of the component’s work areas.',
        note: 'The Species, Milestones, Construction Activities and Seasons tabs now open as side panels on the dashboards. Bookmarks redirect.',
        image: { src: '/release-notes/component.jpg', alt: 'A component dashboard with Tracking, Monitoring and Reporting cards' },
      },
      {
        id: 'evidence-upload',
        title: 'Evidence upload in the evidence drawer',
        text: 'Drop several files together and they become one piece of evidence, with a title and description drafted for you to review before saving.',
        image: { src: '/release-notes/evidence-upload.jpg', alt: 'The evidence drawer with uploaded files and a drafted title and description' },
      },
    ],
    changelog: [
      {
        kind: 'Added',
        changes: [
          { text: 'Added a dashboard for every component, with Tracking, Monitoring and Reporting cards, a 30, 60 and 90 day timeline, and a component area map' },
          { text: 'Added a components section to the project dashboard, with health indicators for starred components' },
          { text: 'Added a shared drawer for attaching evidence to actions by drag or keyboard, saved as one batch' },
          { text: 'Added project and component boundaries to every project map, from a shapefile or an ArcGIS feature-server layer' },
          { text: 'Added Work Area custom fields to report templates, so bulk-created reports open with Site Information filled in' },
          { area: 'AI', text: 'Added Suggest Matches, which attaches staged evidence to the actions it fits for you to keep or remove' },
        ],
      },
      {
        kind: 'Changed',
        changes: [
          { text: 'Changed the Project and Component dashboards to be on for every tenant' },
          { text: 'Changed Requirement, Commitment and Component deletes to remove their attached children, after you type the item’s name to confirm' },
          { text: 'Changed the Species, Milestones, Construction Activities and Seasons tabs to open as side panels on the dashboards; bookmarks redirect' },
        ],
      },
      {
        kind: 'Fixed',
        changes: [
          { text: 'Fixed Compliance Concern logs showing the device’s record date instead of the log’s own date' },
          { text: 'Fixed first-time sign-in failing when the account profile had no first or last name' },
          { text: 'Fixed grid quick search missing the Status and work area Identifier columns' },
        ],
      },
    ],
  },
  {
    version: '1.39.0',
    anchor: 'v1-39-0',
    date: '2026-08-13',
    summary: 'A project dashboard homepage, dark mode, and improved global search.',
    features: [
      {
        id: 'project-dashboard',
        title: 'Project dashboard homepage',
        text: 'Projects can open to a dashboard with a header showing the cover image, organization seal and lifecycle phase, Tracking and Reporting cards, and a 30, 60 and 90 day timeline. It is off until ESA turns it on for your tenant.',
        image: { src: '/release-notes/project.jpg', alt: 'A project dashboard with its header, Tracking and Reporting cards, and timeline' },
      },
      {
        id: 'search',
        title: 'Global search ranking and results',
        text: 'Exact matches rank above similar spellings, the search keeps your query and scope when you close and reopen it, and results show longer snippets with the match highlighted.',
        image: { src: '/release-notes/search.jpg', alt: 'Global search results for “nesting bird” with highlighted snippets' },
      },
    ],
    changelog: [
      {
        kind: 'Added',
        changes: [
          { text: 'Added dark mode for every tenant: Light, Dark or System, chosen from the command palette under Appearance' },
          { text: 'Added an on-screen button that opens the command palette' },
          { text: 'Added a project dashboard homepage with Tracking and Reporting cards, a 30, 60 and 90 day timeline, a project details card and an area map; off until ESA turns it on for your tenant' },
          { text: 'Added side panels on the project dashboard for species, milestones, construction activities, seasons, spatial layers and project info, each with its own link' },
          { text: 'Added a Setup Wizard card to the project dashboard with a count for each step' },
          { text: 'Added delete to the Action detail page, after you type the action’s name to confirm' },
          { text: 'Added an abbreviation of up to 10 characters to Commitment Categories and subcategories' },
          { text: 'Added each commitment’s source document to the Commitment Category Map export' },
          { area: 'Site Clearance', text: 'Added a `Determination Needed` outcome for surveys a field monitor ran but could not decide' },
          { area: 'Spatial Data Library', text: 'Added browsing the shared layer library when adding a spatial layer, alongside pasting a URL' },
        ],
      },
      {
        kind: 'Changed',
        changes: [
          { text: 'Changed deleting a source document to remove its subtree, after you type its name to confirm' },
          { text: 'Changed the Action and Requirement detail pages to use the item’s name as the page title, with a cleaner layout' },
          { text: 'Changed icons so Commitments, Requirements, Actions, Components and Evidence of Compliance each have one icon everywhere' },
          { text: 'Changed global search to rank exact matches above similar spellings' },
          { text: 'Changed the search palette to keep its query, results and scope when you close and reopen it' },
          { text: 'Changed searches inside a project to default to that project, with the scope shown in the palette' },
          { text: 'Changed search results to show longer snippets, with matches highlighted in commitment IDs too' },
        ],
      },
      {
        kind: 'Fixed',
        changes: [
          { text: 'Fixed choosing a record type in global search leaving out some of that type’s matches' },
          { text: 'Fixed the All count in global search including record types your tenant does not use' },
        ],
      },
    ],
  },
];

/** A feature's hash anchor on the Release Notes page, e.g. 'v1-41-0-lists'. The page and the What's-new popover both use it. */
export const featureAnchor = (release: Release, feature: ReleaseFeature): string =>
  `${release.anchor}-${feature.id}`;

/** The newest release (the list is newest first). */
export const LATEST_RELEASE: Release = RELEASES[0];
