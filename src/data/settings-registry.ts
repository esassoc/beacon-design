// Unified Settings — the single dataset behind the settings prototype, which
// reconceives Beacon’s two split administration surfaces (the tenant-facing
// Settings pages and the ESA-only esa-config app) as zones of one place. A page’s
// `audience` records which of the two it lives in today: an 'esa-admin' page sits
// beside its tenant-admin neighbors here and carries an [ESA] badge, instead of
// living in a separate application.
//
// Consumers:
//   - the settings shell — SETTINGS_ZONES + pagesByZone() build the zone nav and
//     the landing cards; settingsPagePath() builds every link.
//   - the standard page renderer — a SettingsPage of kind 'standard' renders
//     entirely from `sections`; the three section kinds (rows / collection /
//     pairs) are the only layouts a settings page can take.
//   - the bespoke platform builds — tenants, feature-flags, and operations carry
//     `sections: []` and are fed by TENANTS / FEATURE_FLAGS / OPERATIONS +
//     OPERATION_RUNS instead.
//   - the settings home activity rail — SETTINGS_CHANGES.
//
// GROUNDING: the zone and page inventory, the control kinds, the nine aliasable
// entities, the FieldDefinitionType label list, the role and module names, and
// the dbo.FeatureFlag rows are swept from the real Beacon codebase. Every value
// is INVENTED prototype copy — people, emails, counts, and tenants beyond the
// Delta Conveyance Project persona are fictional; agency names are real
// organizations, the people at them are not.
//
// Every SettingItem carries a mandatory plain-language description. The real app
// ships almost no help text next to its settings; this schema makes the absence
// impossible.
//
// `settingsPagePath()` returns a base-less path — callers wrap it with withBase().

/** Which of Beacon’s two admin surfaces a page lives in today. */
export type SettingsAudience = 'tenant-admin' | 'esa-admin';

/** What a page’s values apply to: one tenant, or the whole platform. */
export type SettingsScope = 'tenant' | 'platform';

/** The control a single setting is edited with. */
export type SettingControl =
  | { kind: 'toggle'; value: boolean }
  | { kind: 'text'; value: string; placeholder?: string; locked?: boolean; lockedReason?: string }
  | { kind: 'select'; value: string; options: string[] }
  | { kind: 'textarea'; value: string }
  | { kind: 'upload'; value: string | null; hint: string }
  /** `value` is the selected set, in display order; `options` is everything selectable. */
  | { kind: 'chips'; value: string[]; options: string[] };

export interface SettingsZone {
  id: string;
  title: string;
  /** esa-icon name (must exist in the shared icon registry). */
  icon: string;
  description: string;
  audience: SettingsAudience;
}

export interface SettingItem {
  id: string;
  label: string;
  /** Mandatory: what the setting does and where it applies. */
  description: string;
  control: SettingControl;
  /** Extra search terms beyond label + description. */
  keywords?: string[];
}

export interface CollectionColumn {
  key: string;
  label: string;
}

export interface CollectionRecord {
  id: string;
  /** Keyed by CollectionColumn.key. */
  cells: Record<string, string>;
  badge?: string;
}

/**
 * One aliasable entity. `canonical*` is the default Beacon term and renders as
 * the placeholder; `singular`/`plural` are the tenant’s override when set.
 */
export interface TermPair {
  entity: string;
  canonicalSingular: string;
  canonicalPlural: string;
  singular?: string;
  plural?: string;
}

export type SettingsSection =
  | { kind: 'rows'; id: string; title: string; description?: string; items: SettingItem[] }
  | { kind: 'collection'; id: string; title: string; description?: string; columns: CollectionColumn[]; records: CollectionRecord[]; addLabel?: string }
  | { kind: 'pairs'; id: string; title: string; description?: string; pairs: TermPair[] };

export interface SettingsPage {
  id: string;
  zone: string;
  title: string;
  description: string;
  /** 'standard' renders from `sections`; 'bespoke' has a dedicated build. */
  kind: 'standard' | 'bespoke';
  scope: SettingsScope;
  audience: SettingsAudience;
  /** HelpCategoryId from help-center.ts — the guidance drawer’s starting point. */
  helpCategory?: string;
  /** Empty for bespoke pages. */
  sections: SettingsSection[];
  danger?: { title: string; description: string; actionLabel: string };
}

/**
 * What a flag IS, which decides how it should be presented and when it dies:
 *   capability — a product area this tenant bought; mirrors a tenant module.
 *   rollout    — work in progress; some are marked to be removed at GA.
 *   preference — a default for new work, not a gate. Never removed.
 */
export type FlagLifecycle = 'capability' | 'rollout' | 'preference';

export interface FeatureFlag {
  id: string;
  /** The dbo.FeatureFlag row name — PascalCase, as it appears in code. */
  name: string;
  displayName: string;
  description: string;
  lifecycle: FlagLifecycle;
  gaTarget?: string;
  removeAtGa?: boolean;
  enabled: boolean;
  lastChanged: { by: string; on: string };
}

export interface Operation {
  id: string;
  name: string;
  description: string;
  scope: 'tenant' | 'all-tenants';
  /** True when the operation opens a multi-step flow instead of running on click. */
  guided?: boolean;
  guidedNote?: string;
}

export interface OperationRun {
  id: string;
  operationId: string;
  started: string;
  actor: string;
  status: 'succeeded' | 'failed' | 'running';
  summary: string;
}

export interface SettingsChange {
  on: string;
  by: string;
  /** A SettingsPage id. */
  pageId: string;
  summary: string;
}

export interface TenantRecord {
  id: string;
  name: string;
  subdomain: string;
  modules: string[];
  users: number;
  created: string;
}

// ─── Zones ───────────────────────────────────────────────────────────────────
// Order below IS the nav order. Platform is last and is the only esa-admin zone;
// the esa-admin PAGES inside the other six are folded in beside their neighbors.

export const SETTINGS_ZONES: SettingsZone[] = [
  {
    id: 'general',
    title: 'General',
    icon: 'settings',
    description: 'Tenant identity and branding, the product vocabulary, field definitions, and the pages added to the main menu.',
    audience: 'tenant-admin',
  },
  {
    id: 'people-access',
    title: 'People & Access',
    icon: 'users',
    description: 'Who can sign in, what each role is allowed to do, and the contact records used for assignments and notifications.',
    audience: 'tenant-admin',
  },
  {
    id: 'tracking',
    title: 'Tracking',
    icon: 'activity',
    description: 'The reminder emails sent for actions, and the delivery record of every one already sent.',
    audience: 'tenant-admin',
  },
  {
    id: 'monitoring',
    title: 'Monitoring',
    icon: 'map-pin',
    description: 'The site clearance review kinds a site must pass, and the detection rule behind provisional blocks.',
    audience: 'tenant-admin',
  },
  {
    id: 'reporting',
    title: 'Reporting',
    icon: 'file-text',
    description: 'The report types this tenant files and the block templates each one is assembled from.',
    audience: 'tenant-admin',
  },
  {
    id: 'data-catalog',
    title: 'Data Catalog',
    icon: 'database',
    description: 'The pick lists commitments are classified with, the grid and card layout, and the category maps published to the reporting API.',
    audience: 'tenant-admin',
  },
  {
    id: 'platform',
    title: 'Platform',
    icon: 'layout-dashboard',
    description: 'Tenant provisioning, feature flags, and the maintenance operations ESA runs across the platform.',
    audience: 'esa-admin',
  },
];

// ─── Pages ───────────────────────────────────────────────────────────────────
// Array order = display order, zone by zone.

export const SETTINGS_PAGES: SettingsPage[] = [
  // ═══ General ═══
  {
    id: 'tenant-profile',
    zone: 'general',
    title: 'Tenant Profile',
    description: 'The tenant’s name, address, logo, and enabled modules.',
    kind: 'standard',
    scope: 'tenant',
    audience: 'tenant-admin',
    helpCategory: 'general',
    sections: [
      {
        kind: 'rows',
        id: 'identity',
        title: 'Identity',
        items: [
          {
            id: 'tenant-name',
            label: 'Tenant name',
            description: 'The organization name shown in the top bar, on generated reports, and in notification emails.',
            control: { kind: 'text', value: 'Delta Conveyance Project' },
            keywords: ['organization', 'client', 'name'],
          },
          {
            id: 'subdomain',
            label: 'Subdomain',
            description: 'The address this tenant is reached at — dcp.beacon.esassoc.com. Set by ESA when the tenant is created.',
            control: {
              kind: 'text',
              value: 'dcp',
              locked: true,
              lockedReason: 'Subdomain cannot be changed.',
            },
            keywords: ['url', 'address', 'domain'],
          },
        ],
      },
      {
        kind: 'rows',
        id: 'branding',
        title: 'Branding',
        items: [
          {
            id: 'tenant-logo',
            label: 'Logo',
            description: 'Shown in the top bar and on every generated report, in place of the default Beacon mark.',
            control: {
              kind: 'upload',
              value: 'dcp-logo.png',
              hint: 'PNG, JPG, or SVG · 200×200 px or larger · shown in reports and tenant-branded material',
            },
            keywords: ['logo', 'image', 'brand'],
          },
        ],
      },
      {
        kind: 'rows',
        id: 'modules',
        title: 'Modules',
        items: [
          {
            id: 'tenant-modules',
            label: 'Enabled modules',
            description: 'Modules control which product areas appear in the main menu. Core is always enabled; ESA turns the rest on and off as part of the tenant’s agreement.',
            control: {
              kind: 'chips',
              value: [
                'Core',
                'Commitment Library',
                'Compliance Tracking',
                'Reporting',
                'Monitoring Dashboard',
                'Spatial Library',
              ],
              options: [
                'Core',
                'Commitment Library',
                'Compliance Tracking',
                'Reporting',
                'Monitoring Dashboard',
                'Spatial Library',
                'Scheduling',
              ],
            },
            keywords: ['module', 'licensing', 'product area'],
          },
        ],
      },
    ],
    danger: {
      title: 'Deactivate tenant',
      description: 'Signs everyone out and closes the subdomain. Data is retained and the tenant can be reactivated by ESA.',
      actionLabel: 'Deactivate tenant',
    },
  },
  {
    id: 'terminology',
    zone: 'general',
    title: 'Terminology',
    description: 'Aliases for the nine entities Beacon names on screen. A term applies across the app for everyone on this tenant; leaving it blank uses the default.',
    kind: 'standard',
    scope: 'tenant',
    audience: 'esa-admin',
    helpCategory: 'general',
    sections: [
      {
        kind: 'pairs',
        id: 'entity-aliases',
        title: 'Entity aliases',
        description: 'Both forms are required when a term is set — the singular and the plural appear in different places.',
        pairs: [
          { entity: 'Project', canonicalSingular: 'Project', canonicalPlural: 'Projects' },
          {
            entity: 'Source Document',
            canonicalSingular: 'Source Document',
            canonicalPlural: 'Source Documents',
            singular: 'Regulatory Document',
            plural: 'Regulatory Documents',
          },
          {
            entity: 'Commitment',
            canonicalSingular: 'Commitment',
            canonicalPlural: 'Commitments',
            singular: 'Environmental Commitment',
            plural: 'Environmental Commitments',
          },
          { entity: 'Requirement', canonicalSingular: 'Requirement', canonicalPlural: 'Requirements' },
          { entity: 'Action', canonicalSingular: 'Action', canonicalPlural: 'Actions' },
          {
            entity: 'Component',
            canonicalSingular: 'Component',
            canonicalPlural: 'Components',
            singular: 'Construction Area',
            plural: 'Construction Areas',
          },
          {
            entity: 'Action Implementation',
            canonicalSingular: 'Action Implementation',
            canonicalPlural: 'Action Implementations',
          },
          {
            entity: 'Evidence of Compliance',
            canonicalSingular: 'Evidence of Compliance',
            canonicalPlural: 'Evidence of Compliance',
          },
          { entity: 'Work Area', canonicalSingular: 'Work Area', canonicalPlural: 'Work Areas' },
        ],
      },
    ],
    danger: {
      title: 'Reset all terms',
      description: 'Clears every alias at once and returns the whole app to Beacon’s default vocabulary.',
      actionLabel: 'Reset to defaults',
    },
  },
  {
    id: 'labels-definitions',
    zone: 'general',
    title: 'Labels & Definitions',
    description: 'Rich-text definitions shown as info tooltips next to fields throughout the app. The label itself is fixed — renaming the nouns Beacon uses happens in Terminology.',
    kind: 'standard',
    scope: 'tenant',
    audience: 'tenant-admin',
    helpCategory: 'general',
    sections: [
      {
        kind: 'collection',
        id: 'field-definitions',
        title: 'Field definitions',
        description: 'A field with no definition shows no tooltip.',
        columns: [
          { key: 'label', label: 'Label' },
          { key: 'definition', label: 'Definition' },
        ],
        records: [
          {
            id: 'def-name',
            cells: {
              label: 'Name',
              definition: 'The short working title a commitment is listed, searched, and referred to by.',
            },
          },
          {
            id: 'def-commitment-id',
            cells: {
              label: 'Commitment ID',
              definition: 'The identifier carried over from the source document, used to trace a commitment back to its origin.',
            },
          },
          {
            id: 'def-commitment-type',
            cells: {
              label: 'Commitment Type',
              definition: 'How the commitment functions — avoidance, mitigation, monitoring, or reporting.',
            },
          },
          {
            id: 'def-resource-category',
            cells: {
              label: 'Resource Category',
              definition: 'The environmental resource the commitment is meant to protect.',
            },
          },
          {
            id: 'def-phase',
            cells: {
              label: 'Phase',
              definition: 'The stage of the project during which the commitment applies.',
            },
          },
          {
            id: 'def-full-text',
            cells: {
              label: 'Full Commitment Text',
              definition: 'The verbatim language as it appears in the source document, unedited.',
            },
          },
          {
            id: 'def-compliance-lead',
            cells: {
              label: 'Compliance Lead(s)',
              definition: 'The people accountable for the commitment being met and for its evidence being filed.',
            },
          },
          {
            id: 'def-approving-agency',
            cells: {
              label: 'Approving Agency',
              definition: 'The agency that issued the commitment and accepts the evidence that it was met.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'custom-fields',
    zone: 'general',
    title: 'Custom Fields',
    description: 'Extra fields added to an entity’s form and detail page for this tenant, on top of the fields Beacon ships.',
    kind: 'standard',
    scope: 'tenant',
    audience: 'esa-admin',
    helpCategory: 'general',
    sections: [
      {
        kind: 'collection',
        id: 'custom-field-definitions',
        title: 'Field definitions',
        description: 'A required field blocks the record from being saved until it has a value.',
        columns: [
          { key: 'field', label: 'Field' },
          { key: 'entity', label: 'Entity' },
          { key: 'type', label: 'Type' },
          { key: 'required', label: 'Required' },
        ],
        records: [
          {
            id: 'cf-cdfw-permit',
            cells: { field: 'CDFW Permit Number', entity: 'Source Document', type: 'Text', required: 'No' },
          },
          {
            id: 'cf-acreage',
            cells: { field: 'Acreage Impacted', entity: 'Component', type: 'Number', required: 'Yes' },
          },
          {
            id: 'cf-survey-window',
            cells: { field: 'Survey Window', entity: 'Work Area', type: 'Date', required: 'No' },
          },
          {
            id: 'cf-funding-source',
            cells: { field: 'Funding Source', entity: 'Project', type: 'Dropdown', required: 'No' },
          },
          {
            id: 'cf-photo-required',
            cells: { field: 'Photo Required', entity: 'Component', type: 'Boolean', required: 'No' },
          },
        ],
        addLabel: 'Add field definition',
      },
    ],
  },
  {
    id: 'custom-pages',
    zone: 'general',
    title: 'Custom Pages',
    description: 'Tenant-authored pages with their own rich-text content, added to a section of the main menu.',
    kind: 'standard',
    scope: 'tenant',
    audience: 'tenant-admin',
    helpCategory: 'general',
    sections: [
      {
        kind: 'collection',
        id: 'custom-page-list',
        title: 'Pages',
        description: 'A page appears in the menu section it is filed under, for the roles listed.',
        columns: [
          { key: 'page', label: 'Page' },
          { key: 'menu', label: 'Menu' },
          { key: 'viewableBy', label: 'Viewable by' },
        ],
        records: [
          {
            id: 'cp-field-crew',
            cells: { page: 'Field Crew Resources', menu: 'Monitoring', viewableBy: 'All roles' },
          },
          {
            id: 'cp-cdfw-coordination',
            cells: {
              page: 'CDFW Coordination',
              menu: 'Tracking',
              viewableBy: 'Compliance Lead, Administrator',
            },
          },
          {
            id: 'cp-program-contacts',
            cells: { page: 'Program Contacts', menu: 'General', viewableBy: 'All roles' },
          },
        ],
        addLabel: 'Add custom page',
      },
    ],
  },

  // ═══ People & Access ═══
  {
    id: 'users',
    zone: 'people-access',
    title: 'Users',
    description: 'Everyone who can sign in to this tenant. A user’s role controls what they can see and do.',
    kind: 'standard',
    scope: 'tenant',
    audience: 'tenant-admin',
    helpCategory: 'general',
    sections: [
      {
        kind: 'collection',
        id: 'user-list',
        title: 'Users',
        description: 'An invited user is active as soon as they accept and sign in for the first time.',
        columns: [
          { key: 'name', label: 'Name' },
          { key: 'email', label: 'Email' },
          { key: 'role', label: 'Role' },
          { key: 'added', label: 'Added' },
        ],
        records: [
          {
            id: 'u-quintero',
            cells: {
              name: 'Marla Quintero',
              email: 'm.quintero@esassoc.com',
              role: 'Administrator',
              added: '2024-11-04',
            },
          },
          {
            id: 'u-oyelaran',
            cells: {
              name: 'Devin Oyelaran',
              email: 'd.oyelaran@esassoc.com',
              role: 'Compliance Lead',
              added: '2025-02-18',
            },
          },
          {
            id: 'u-raghunathan',
            cells: {
              name: 'Priya Raghunathan',
              email: 'p.raghunathan@icf.com',
              role: 'Compliance Lead',
              added: '2025-06-09',
            },
          },
          {
            id: 'u-beaudry',
            cells: {
              name: 'Tom Beaudry',
              email: 't.beaudry@icf.com',
              role: 'Field Monitor',
              added: '2025-08-22',
            },
          },
          {
            id: 'u-ishikawa',
            cells: {
              name: 'Karen Ishikawa',
              email: 'karen.ishikawa@water.ca.gov',
              role: 'DWR Reviewer',
              added: '2026-01-13',
            },
          },
          {
            id: 'u-ferrer',
            cells: {
              name: 'Alonzo Ferrer',
              email: 'alonzo.ferrer@water.ca.gov',
              role: 'Read Only',
              added: '2026-07-17',
            },
          },
        ],
        addLabel: 'Invite user',
      },
    ],
  },
  {
    id: 'roles',
    zone: 'people-access',
    title: 'Roles',
    description: 'Each role sets thirteen per-area rights, from none to full, plus six administrative flags such as impersonating another user and finalizing commitments.',
    kind: 'standard',
    scope: 'tenant',
    audience: 'tenant-admin',
    helpCategory: 'general',
    sections: [
      {
        kind: 'collection',
        id: 'role-list',
        title: 'Roles',
        description: 'System roles ship with Beacon and cannot be deleted; custom roles belong to this tenant.',
        columns: [
          { key: 'role', label: 'Role' },
          { key: 'description', label: 'Description' },
          { key: 'type', label: 'Type' },
        ],
        records: [
          {
            id: 'r-administrator',
            cells: {
              role: 'Administrator',
              description: 'Full rights in every area, plus every administrative flag.',
              type: 'System',
            },
          },
          {
            id: 'r-compliance-lead',
            cells: {
              role: 'Compliance Lead',
              description: 'Edits commitments, actions, and evidence; cannot change tenant configuration.',
              type: 'Custom',
            },
          },
          {
            id: 'r-field-monitor',
            cells: {
              role: 'Field Monitor',
              description: 'Records observations, daily reports, and evidence from the field; reads everything else.',
              type: 'Custom',
            },
          },
          {
            id: 'r-dwr-reviewer',
            cells: {
              role: 'DWR Reviewer',
              description: 'Reads every area and comments on reports; holds no edit rights.',
              type: 'Custom',
            },
          },
          {
            id: 'r-read-only',
            cells: {
              role: 'Read Only',
              description: 'Reads every area; holds no edit rights anywhere.',
              type: 'System',
            },
          },
        ],
        addLabel: 'Add role',
      },
    ],
  },
  {
    id: 'people',
    zone: 'people-access',
    title: 'People',
    description: 'Contact records used as notification recipients and assignees. People do not sign in — a person becomes a user only when invited on the Users page.',
    kind: 'standard',
    scope: 'tenant',
    audience: 'tenant-admin',
    helpCategory: 'general',
    sections: [
      {
        kind: 'collection',
        id: 'person-list',
        title: 'People',
        columns: [
          { key: 'name', label: 'Name' },
          { key: 'organization', label: 'Organization' },
          { key: 'email', label: 'Email' },
          { key: 'phone', label: 'Phone' },
        ],
        records: [
          {
            id: 'p-salcido',
            cells: {
              name: 'Renata Salcido',
              organization: 'California Department of Fish and Wildlife',
              email: 'r.salcido@wildlife.ca.gov',
              phone: '(916) 555-0142',
            },
          },
          {
            id: 'p-whitfield',
            cells: {
              name: 'Grant Whitfield',
              organization: 'Department of Water Resources',
              email: 'grant.whitfield@water.ca.gov',
              phone: '(916) 555-0198',
            },
          },
          {
            id: 'p-nakamura',
            cells: {
              name: 'Hollis Nakamura',
              organization: 'ICF',
              email: 'hollis.nakamura@icf.com',
              phone: '(916) 555-0173',
            },
          },
          {
            id: 'p-trombley',
            cells: {
              name: 'Bea Trombley',
              organization: 'U.S. Fish and Wildlife Service',
              email: 'bea_trombley@fws.gov',
              phone: '(916) 555-0121',
            },
          },
        ],
        addLabel: 'Add person',
      },
    ],
  },
  {
    id: 'organizations',
    zone: 'people-access',
    title: 'Organizations',
    description: 'The agencies and firms people, commitments, and approvals are attributed to.',
    kind: 'standard',
    scope: 'tenant',
    audience: 'tenant-admin',
    helpCategory: 'general',
    sections: [
      {
        kind: 'collection',
        id: 'organization-list',
        title: 'Organizations',
        description: 'An organization in use by a person or a commitment cannot be deleted.',
        columns: [
          { key: 'name', label: 'Name' },
          { key: 'email', label: 'Email' },
          { key: 'phone', label: 'Phone' },
        ],
        records: [
          {
            id: 'org-dwr',
            cells: {
              name: 'Department of Water Resources',
              email: 'deltaprogram@water.ca.gov',
              phone: '(916) 555-0100',
            },
          },
          {
            id: 'org-cdfw',
            cells: {
              name: 'California Department of Fish and Wildlife',
              email: 'r3permits@wildlife.ca.gov',
              phone: '(916) 555-0140',
            },
          },
          {
            id: 'org-icf',
            cells: { name: 'ICF', email: 'delta.program@icf.com', phone: '(916) 555-0170' },
          },
          {
            id: 'org-esa',
            cells: {
              name: 'Environmental Science Associates',
              email: 'beacon@esassoc.com',
              phone: '(916) 555-0180',
            },
          },
          {
            id: 'org-usfws',
            cells: {
              name: 'U.S. Fish and Wildlife Service',
              email: 'sfbaydelta@fws.gov',
              phone: '(916) 555-0121',
            },
          },
        ],
        addLabel: 'Add organization',
      },
    ],
  },

  // ═══ Tracking ═══
  {
    id: 'notifications',
    zone: 'tracking',
    title: 'Notifications',
    description: 'The reminder emails Beacon sends for actions, and the signature appended to each one.',
    kind: 'standard',
    scope: 'tenant',
    audience: 'tenant-admin',
    helpCategory: 'tracking',
    sections: [
      {
        kind: 'rows',
        id: 'email-templates',
        title: 'Email templates',
        description: 'Which people are notified, and how many days ahead, is set on each Action. These templates supply the body of the message.',
        items: [
          {
            id: 'template-coming-up',
            label: 'Coming up',
            description: 'Body of the advance reminder, sent the number of days before the due date configured on the Action.',
            control: {
              kind: 'textarea',
              value:
                '{Action} is coming up on {DueDate}. Please confirm the work is scheduled, and upload evidence of compliance once it is complete.',
            },
            keywords: ['reminder', 'advance', 'upcoming', 'email'],
          },
          {
            id: 'template-due-today',
            label: 'Due today',
            description: 'Body of the reminder sent on the due date itself.',
            control: {
              kind: 'textarea',
              value:
                '{Action} is due today, {DueDate}. Record the outcome and attach evidence of compliance before the end of the day.',
            },
            keywords: ['reminder', 'due', 'email'],
          },
          {
            id: 'template-past-due',
            label: 'Past due',
            description: 'Body of the reminder sent after the due date passes, repeating on the overdue interval set on the Action.',
            control: {
              kind: 'textarea',
              value:
                '{Action} was due {DueDate} and has not been marked complete. Complete the work or update the due date so the compliance record stays accurate.',
            },
            keywords: ['reminder', 'overdue', 'late', 'email'],
          },
        ],
      },
      {
        kind: 'rows',
        id: 'signature',
        title: 'Signature',
        items: [
          {
            id: 'signoff-text',
            label: 'Sign-off text',
            description: 'Appended to the bottom of every notification email, above the logo.',
            control: { kind: 'text', value: 'The Delta Conveyance compliance team' },
            keywords: ['signature', 'footer'],
          },
          {
            id: 'include-logo',
            label: 'Include tenant logo',
            description: 'Adds the logo set in Tenant Profile beneath the sign-off text.',
            control: { kind: 'toggle', value: true },
            keywords: ['logo', 'branding', 'signature'],
          },
        ],
      },
    ],
  },
  {
    id: 'notification-log',
    zone: 'tracking',
    title: 'Notification Log',
    description: 'Every notification email sent for this tenant, including the recipient and whether delivery succeeded.',
    kind: 'standard',
    scope: 'tenant',
    audience: 'tenant-admin',
    helpCategory: 'tracking',
    sections: [
      {
        kind: 'collection',
        id: 'sent-notifications',
        title: 'Sent',
        description: 'Newest first. A failed message is not retried automatically — fix the address and resend from the Action.',
        columns: [
          { key: 'sent', label: 'Sent' },
          { key: 'action', label: 'Action' },
          { key: 'recipient', label: 'Recipient' },
          { key: 'type', label: 'Type' },
          { key: 'status', label: 'Status' },
        ],
        records: [
          {
            id: 'n-0127',
            cells: {
              sent: '2026-07-27 09:00',
              action: 'Install exclusion fencing — Reach 3',
              recipient: 'd.oyelaran@esassoc.com',
              type: 'Coming up',
              status: 'Delivered',
            },
          },
          {
            id: 'n-0126',
            cells: {
              sent: '2026-07-26 16:42',
              action: 'Quarterly turbidity monitoring report',
              recipient: 'karen.ishikawa@water.ca.gov',
              type: 'Coming up',
              status: 'Delivered',
            },
            badge: 'TEST',
          },
          {
            id: 'n-0125',
            cells: {
              sent: '2026-07-26 09:00',
              action: 'Preconstruction nesting bird survey',
              recipient: 't.beaudry@icf.com',
              type: 'Due today',
              status: 'Delivered',
            },
          },
          {
            id: 'n-0124',
            cells: {
              sent: '2026-07-24 09:00',
              action: 'Annual mitigation site monitoring',
              recipient: 'r.salcido@wildlife.ca.gov',
              type: 'Past due',
              status: 'Failed — mailbox full',
            },
          },
          {
            id: 'n-0123',
            cells: {
              sent: '2026-07-23 09:00',
              action: 'Submit SWPPP amendment',
              recipient: 'p.raghunathan@icf.com',
              type: 'Coming up',
              status: 'Delivered',
            },
          },
          {
            id: 'n-0122',
            cells: {
              sent: '2026-07-21 09:00',
              action: 'Cultural resources monitor check-in',
              recipient: 'hollis.nakamura@icf.com',
              type: 'Due today',
              status: 'Delivered',
            },
          },
        ],
      },
    ],
  },

  // ═══ Monitoring ═══
  {
    id: 'site-clearance',
    zone: 'monitoring',
    title: 'Site Clearance',
    description: 'The reviews a site must clear before work proceeds, and whether the system flags incomplete sites on its own.',
    kind: 'standard',
    scope: 'tenant',
    audience: 'esa-admin',
    helpCategory: 'monitoring',
    sections: [
      {
        kind: 'collection',
        id: 'review-kinds',
        title: 'Review kinds',
        description: 'A site is cleared once every applicable review kind has recorded its required outcome.',
        columns: [
          { key: 'reviewKind', label: 'Review kind' },
          { key: 'discipline', label: 'Discipline' },
          { key: 'requiredOutcome', label: 'Required outcome' },
        ],
        records: [
          {
            id: 'rk-nesting-bird',
            cells: {
              reviewKind: 'Nesting bird survey',
              discipline: 'Biological',
              requiredOutcome: 'Survey complete + buffer set',
            },
          },
          {
            id: 'rk-aquatic',
            cells: {
              reviewKind: 'Aquatic resources review',
              discipline: 'Biological',
              requiredOutcome: 'Clearance memo',
            },
          },
          {
            id: 'rk-cultural',
            cells: {
              reviewKind: 'Cultural resources review',
              discipline: 'Cultural',
              requiredOutcome: 'Records search + monitor decision',
            },
          },
          {
            id: 'rk-paleo',
            cells: {
              reviewKind: 'Paleontological review',
              discipline: 'Paleo',
              requiredOutcome: 'Sensitivity determination',
            },
          },
          {
            id: 'rk-hazmat',
            cells: {
              reviewKind: 'Hazardous materials screen',
              discipline: 'Hazmat',
              requiredOutcome: 'Phase I complete',
            },
          },
        ],
        addLabel: 'Add review kind',
      },
      {
        kind: 'rows',
        id: 'detection',
        title: 'Detection',
        items: [
          {
            id: 'provisional-blocks',
            label: 'Provisional blocks',
            description: 'The system flags sites whose reviews are incomplete; reviewers decide the final call.',
            control: { kind: 'toggle', value: true },
            keywords: ['block', 'go/no-go', 'clearance', 'detection'],
          },
        ],
      },
    ],
  },

  // ═══ Reporting ═══
  {
    id: 'report-types',
    zone: 'reporting',
    title: 'Report Types',
    description: 'The kinds of report this tenant files. Scope controls which entity a report is filed against; order controls how templates are grouped when a report is created.',
    kind: 'standard',
    scope: 'tenant',
    audience: 'esa-admin',
    helpCategory: 'reporting',
    sections: [
      {
        kind: 'collection',
        id: 'report-type-list',
        title: 'Report types',
        columns: [
          { key: 'reportType', label: 'Report type' },
          { key: 'scope', label: 'Scope' },
          { key: 'order', label: 'Order' },
        ],
        records: [
          {
            id: 'rt-daily-monitoring',
            cells: { reportType: 'Daily Monitoring Report', scope: 'Work Area', order: '1' },
          },
          {
            id: 'rt-weekly-compliance',
            cells: { reportType: 'Weekly Compliance Summary', scope: 'Project', order: '2' },
          },
          {
            id: 'rt-monthly-compliance',
            cells: { reportType: 'Monthly Compliance Report', scope: 'Project', order: '3' },
          },
          {
            id: 'rt-component-completion',
            cells: { reportType: 'Component Completion Report', scope: 'Component', order: '4' },
          },
        ],
        addLabel: 'Add report type',
      },
    ],
  },
  {
    id: 'report-templates',
    zone: 'reporting',
    title: 'Report Templates',
    description: 'The layout each report is generated from. A template is an ordered stack of blocks — Custom Fields, Rich Text, Table — Text, Table — Commitments, and Documents.',
    kind: 'standard',
    scope: 'tenant',
    audience: 'esa-admin',
    helpCategory: 'reporting',
    sections: [
      {
        kind: 'collection',
        id: 'template-list',
        title: 'Templates',
        description: 'A report type can carry several templates; the author picks one when the report is created.',
        columns: [
          { key: 'template', label: 'Template' },
          { key: 'reportType', label: 'Report type' },
          { key: 'blocks', label: 'Blocks' },
        ],
        records: [
          {
            id: 'tpl-dmr-standard',
            cells: {
              template: 'Daily Monitoring Report — Standard',
              reportType: 'Daily Monitoring Report',
              blocks: '7',
            },
          },
          {
            id: 'tpl-dmr-biological',
            cells: {
              template: 'Daily Monitoring Report — Biological',
              reportType: 'Daily Monitoring Report',
              blocks: '9',
            },
          },
          {
            id: 'tpl-weekly',
            cells: {
              template: 'Weekly Compliance Summary',
              reportType: 'Weekly Compliance Summary',
              blocks: '5',
            },
          },
          {
            id: 'tpl-monthly-dwr',
            cells: {
              template: 'Monthly Compliance Report — DWR',
              reportType: 'Monthly Compliance Report',
              blocks: '12',
            },
          },
        ],
        addLabel: 'Add template',
      },
    ],
  },

  // ═══ Data Catalog ═══
  {
    id: 'commitment-types',
    zone: 'data-catalog',
    title: 'Commitment Types',
    description: 'How a commitment functions. Every commitment carries one type; a type in use must be reassigned before it can be deleted.',
    kind: 'standard',
    scope: 'tenant',
    audience: 'tenant-admin',
    helpCategory: 'data-catalog',
    sections: [
      {
        kind: 'collection',
        id: 'commitment-type-list',
        title: 'Commitment types',
        columns: [
          { key: 'name', label: 'Name' },
          { key: 'description', label: 'Description' },
          { key: 'inUse', label: 'In use' },
        ],
        records: [
          {
            id: 'ct-avoidance',
            cells: {
              name: 'Avoidance and Minimization',
              description: 'Measures that keep an impact from occurring, or reduce its severity.',
              inUse: '48',
            },
          },
          {
            id: 'ct-mitigation',
            cells: {
              name: 'Mitigation',
              description: 'Measures that offset an impact that cannot be avoided.',
              inUse: '31',
            },
          },
          {
            id: 'ct-monitoring',
            cells: {
              name: 'Monitoring',
              description: 'Observation and survey work that confirms conditions in the field.',
              inUse: '22',
            },
          },
          {
            id: 'ct-reporting',
            cells: {
              name: 'Reporting',
              description: 'Documents and submittals owed to an agency on a schedule.',
              inUse: '9',
            },
          },
          {
            id: 'ct-compensatory',
            cells: {
              name: 'Compensatory Mitigation',
              description: 'Habitat or credit obligations satisfied away from the impact site.',
              inUse: '6',
            },
          },
        ],
        addLabel: 'Add commitment type',
      },
    ],
  },
  {
    id: 'phases',
    zone: 'data-catalog',
    title: 'Phases',
    description: 'The stage of the project a commitment applies to. Sort order sets how phases are listed in filters and grids; a phase in use must be reassigned before it can be deleted.',
    kind: 'standard',
    scope: 'tenant',
    audience: 'tenant-admin',
    helpCategory: 'data-catalog',
    sections: [
      {
        kind: 'collection',
        id: 'phase-list',
        title: 'Phases',
        columns: [
          { key: 'name', label: 'Name' },
          { key: 'sortOrder', label: 'Sort order' },
          { key: 'inUse', label: 'In use' },
        ],
        records: [
          { id: 'ph-preconstruction', cells: { name: 'Pre-Construction', sortOrder: '1', inUse: '64' } },
          { id: 'ph-construction', cells: { name: 'Construction', sortOrder: '2', inUse: '89' } },
          { id: 'ph-operations', cells: { name: 'Operations', sortOrder: '3', inUse: '12' } },
          { id: 'ph-restoration', cells: { name: 'Restoration', sortOrder: '4', inUse: '18' } },
        ],
        addLabel: 'Add phase',
      },
    ],
  },
  {
    id: 'resource-categories',
    zone: 'data-catalog',
    title: 'Resource Categories',
    description: 'The environmental resource a commitment protects. A category in use must be reassigned before it can be deleted.',
    kind: 'standard',
    scope: 'tenant',
    audience: 'tenant-admin',
    helpCategory: 'data-catalog',
    sections: [
      {
        kind: 'collection',
        id: 'resource-category-list',
        title: 'Resource categories',
        columns: [
          { key: 'name', label: 'Name' },
          { key: 'inUse', label: 'In use' },
        ],
        records: [
          { id: 'rc-biological', cells: { name: 'Biological Resources', inUse: '72' } },
          { id: 'rc-cultural', cells: { name: 'Cultural Resources', inUse: '24' } },
          { id: 'rc-water-quality', cells: { name: 'Water Quality', inUse: '31' } },
          { id: 'rc-air-quality', cells: { name: 'Air Quality', inUse: '12' } },
          { id: 'rc-noise', cells: { name: 'Noise', inUse: '9' } },
          { id: 'rc-recreation', cells: { name: 'Recreation', inUse: '4' } },
        ],
        addLabel: 'Add resource category',
      },
    ],
  },
  {
    id: 'tags',
    zone: 'data-catalog',
    title: 'Tags',
    description: 'Free-form labels applied on top of the fixed classifications. Applies to sets which kind of record a tag can be attached to.',
    kind: 'standard',
    scope: 'tenant',
    audience: 'tenant-admin',
    helpCategory: 'data-catalog',
    sections: [
      {
        kind: 'collection',
        id: 'tag-list',
        title: 'Tags',
        columns: [
          { key: 'tag', label: 'Tag' },
          { key: 'appliesTo', label: 'Applies to' },
          { key: 'inUse', label: 'In use' },
        ],
        records: [
          { id: 'tg-nesting-season', cells: { tag: 'Nesting Season', appliesTo: 'Commitment', inUse: '18' } },
          { id: 'tg-usace-404', cells: { tag: 'USACE 404', appliesTo: 'Requirement', inUse: '11' } },
          {
            id: 'tg-photo-required',
            cells: { tag: 'Photo Required', appliesTo: 'Evidence of Compliance', inUse: '26' },
          },
          { id: 'tg-night-work', cells: { tag: 'Night Work', appliesTo: 'Commitment', inUse: '7' } },
        ],
        addLabel: 'Add tag',
      },
    ],
  },
  {
    id: 'data-catalog-display',
    zone: 'data-catalog',
    title: 'Data Catalog Display',
    description: 'Which columns the commitments grid shows, and which fields appear when commitments are compared.',
    kind: 'standard',
    scope: 'tenant',
    audience: 'tenant-admin',
    helpCategory: 'data-catalog',
    sections: [
      {
        kind: 'rows',
        id: 'commitments-grid',
        title: 'Commitments grid',
        items: [
          {
            id: 'grid-columns',
            label: 'Columns',
            description: 'The columns shown on the commitments grid, in this order. An empty selection falls back to the system default layout.',
            control: {
              kind: 'chips',
              value: [
                'Commitment ID',
                'Name',
                'Commitment Type',
                'Resource Category',
                'Phase',
                'Compliance Lead(s)',
              ],
              options: [
                'Commitment ID',
                'Name',
                'Commitment Type',
                'Resource Category',
                'Phase',
                'Compliance Lead(s)',
                'Approving Agency',
                'Tags',
                'Work Activities',
              ],
            },
            keywords: ['grid', 'columns', 'commitments'],
          },
        ],
      },
      {
        kind: 'rows',
        id: 'compare-cards',
        title: 'Compare cards',
        items: [
          {
            id: 'compare-fields',
            label: 'Fields',
            description: 'The fields shown on each card when commitments are compared side by side. An empty selection falls back to the system default layout.',
            control: {
              kind: 'chips',
              value: ['Commitment ID', 'Full Commitment Text', 'Compliance Lead(s)', 'Phase'],
              options: [
                'Commitment ID',
                'Full Commitment Text',
                'Compliance Lead(s)',
                'Phase',
                'Commitment Type',
                'Resource Category',
                'Approving Agency',
                'Tags',
              ],
            },
            keywords: ['compare', 'cards', 'commitments'],
          },
        ],
      },
    ],
  },
  {
    id: 'commitment-categories',
    zone: 'data-catalog',
    title: 'Commitment Categories',
    description: 'Category trees that group commitments for the external reporting API. Each map carries its own endpoint and key.',
    kind: 'standard',
    scope: 'tenant',
    audience: 'esa-admin',
    helpCategory: 'data-catalog',
    sections: [
      {
        kind: 'collection',
        id: 'category-maps',
        title: 'Category maps',
        description: 'A map is scoped to one project; rolling the key invalidates the previous one immediately.',
        columns: [
          { key: 'map', label: 'Map' },
          { key: 'project', label: 'Project' },
          { key: 'categories', label: 'Categories' },
          { key: 'apiKey', label: 'API key' },
        ],
        records: [
          {
            id: 'cm-dwr-quarterly',
            cells: {
              map: 'DWR Quarterly Rollup',
              project: 'Delta Conveyance',
              categories: '12 categories',
              apiKey: 'Active — rolled 2026-06-12',
            },
          },
          {
            id: 'cm-annual-mitigation',
            cells: {
              map: 'Annual Mitigation Summary',
              project: 'Delta Conveyance',
              categories: '8 categories',
              apiKey: 'Active',
            },
          },
        ],
        addLabel: 'Add category map',
      },
    ],
  },

  // ═══ Platform (bespoke builds — no sections) ═══
  {
    id: 'tenants',
    zone: 'platform',
    title: 'Tenants',
    description: 'Every tenant on the platform, with its subdomain, enabled modules, user count, and creation date.',
    kind: 'bespoke',
    scope: 'platform',
    audience: 'esa-admin',
    helpCategory: 'settings-config',
    sections: [],
  },
  {
    id: 'feature-flags',
    zone: 'platform',
    title: 'Feature Flags',
    description: 'Per-tenant switches for product capabilities, in-progress rollouts, and default behavior.',
    kind: 'bespoke',
    // Lives in the Platform zone (ESA staff manage it) but EDITS this tenant's
    // flag values — the real FeatureFlagController resolves the tenant from
    // request context. No "All tenants" page badge.
    scope: 'tenant',
    audience: 'esa-admin',
    helpCategory: 'settings-config',
    sections: [],
  },
  {
    id: 'operations',
    zone: 'platform',
    title: 'Operations',
    description: 'Maintenance jobs ESA runs against a single tenant or every tenant, and the record of each run.',
    kind: 'bespoke',
    // Scope varies per job, and each op card carries its own tenant/all-tenants
    // badge — a page-level "All tenants" would overstate. Tenants is the only
    // page whose every action is platform-wide.
    scope: 'tenant',
    audience: 'esa-admin',
    helpCategory: 'settings-config',
    sections: [],
  },
];

// ─── Feature flags ───────────────────────────────────────────────────────────
// `name` matches the dbo.FeatureFlag row. Lifecycle is the addition the real
// table lacks: today a capability the tenant bought, a rollout that will be
// deleted at GA, and a permanent default all sit in one undifferentiated list.

export const FEATURE_FLAGS: FeatureFlag[] = [
  {
    id: 'monitoring-dashboard',
    name: 'MonitoringDashboard',
    displayName: 'Monitoring Dashboard',
    description: 'Shows the Monitoring product area — daily reports, observations, and surveys. Mirrors the Monitoring Dashboard module on the tenant’s profile.',
    lifecycle: 'capability',
    enabled: true,
    lastChanged: { by: 'Sylvia Marchetti', on: '2026-05-06' },
  },
  {
    id: 'spatial-library',
    name: 'SpatialLibrary',
    displayName: 'Spatial Library',
    description: 'Shows the Spatial Library product area — uploaded map layers and work-area geometry. Mirrors the Spatial Library module on the tenant’s profile.',
    lifecycle: 'capability',
    enabled: true,
    lastChanged: { by: 'Marla Quintero', on: '2026-07-02' },
  },
  {
    id: 'reporting',
    name: 'Reporting',
    displayName: 'Reporting',
    description: 'Shows the Reporting product area — report types, templates, and generated reports. Mirrors the Reporting module on the tenant’s profile.',
    lifecycle: 'capability',
    enabled: true,
    lastChanged: { by: 'Sylvia Marchetti', on: '2026-05-06' },
  },
  {
    id: 'tenant-ai-usage',
    name: 'TenantAIUsage',
    displayName: 'AI Assistance',
    description: 'Gates every AI-assisted extraction and drafting endpoint for this tenant. Off means no tenant content is sent to a model.',
    lifecycle: 'capability',
    enabled: true,
    lastChanged: { by: 'Rob Kittredge', on: '2026-06-24' },
  },
  {
    id: 'notifications',
    name: 'Notifications',
    displayName: 'Notifications',
    description: 'Turns on action reminder emails, plus the Notifications settings page and the notification log.',
    lifecycle: 'rollout',
    enabled: false,
    lastChanged: { by: 'Curtis Lam', on: '2026-06-11' },
  },
  {
    id: 'setup-wizard',
    name: 'SetupWizard',
    displayName: 'Setup Wizard',
    description: 'Turns on the guided first-run flow and its entry in the main menu.',
    lifecycle: 'rollout',
    enabled: true,
    lastChanged: { by: 'Nadia Boutros', on: '2026-05-19' },
  },
  {
    id: 'document-review',
    name: 'DocumentReview',
    displayName: 'Document Review',
    description: 'Turns on the Document Review area and its routes.',
    lifecycle: 'rollout',
    enabled: true,
    lastChanged: { by: 'Nadia Boutros', on: '2026-05-19' },
  },
  {
    id: 'configurable-data-catalog-display',
    name: 'ConfigurableDataCatalogDisplay',
    displayName: 'Configurable Data Catalog Display',
    description: 'Lets the tenant choose the commitments grid columns and compare-card fields instead of using the system default layout.',
    lifecycle: 'rollout',
    enabled: false,
    lastChanged: { by: 'Curtis Lam', on: '2026-07-08' },
  },
  {
    id: 'permit-tracking',
    name: 'PermitTracking',
    displayName: 'Permit Tracking',
    description: 'Turns on permit records and the views that track their conditions and expirations.',
    lifecycle: 'rollout',
    enabled: false,
    lastChanged: { by: 'Rob Kittredge', on: '2026-06-30' },
  },
  {
    id: 'site-clearance',
    name: 'SiteClearance',
    displayName: 'Site Clearance',
    description: 'Turns on the go/no-go clearance map and the per-discipline reviews behind it.',
    lifecycle: 'rollout',
    enabled: true,
    lastChanged: { by: 'Nadia Boutros', on: '2026-07-28' },
  },
  {
    id: 'streamlined-workflow-enabled',
    name: 'StreamlinedWorkflowEnabled',
    displayName: 'Streamlined Workflow',
    description: 'Turns on the streamlined path from commitment to tracked action. Removed once the workflow ships to every tenant.',
    lifecycle: 'rollout',
    gaTarget: '2026 R4',
    removeAtGa: true,
    enabled: false,
    lastChanged: { by: 'Curtis Lam', on: '2026-07-14' },
  },
  {
    id: 'help-guidance',
    name: 'HelpGuidance',
    displayName: 'Help & Guidance',
    description: 'Turns on the app-wide help bar and the guidance drawer. Removed once help ships to every tenant.',
    lifecycle: 'rollout',
    gaTarget: '2026 R3',
    removeAtGa: true,
    enabled: false,
    lastChanged: { by: 'Sylvia Marchetti', on: '2026-07-20' },
  },
  {
    id: 'components-default-off',
    name: 'ComponentsDefaultOff',
    displayName: 'Components Default Off',
    description: 'New projects start with components turned off. A default for new work, not a gate — projects that already use components are unaffected.',
    lifecycle: 'preference',
    enabled: false,
    lastChanged: { by: 'Marla Quintero', on: '2026-06-03' },
  },
  {
    id: 'streamlined-workflow-default-on',
    name: 'StreamlinedWorkflowDefaultOn',
    displayName: 'Streamlined Workflow Default On',
    description: 'Where the streamlined workflow is enabled, new work uses it by default. A default for new work, not a gate.',
    lifecycle: 'preference',
    enabled: false,
    lastChanged: { by: 'Curtis Lam', on: '2026-07-14' },
  },
];

// ─── Operations ──────────────────────────────────────────────────────────────

export const OPERATIONS: Operation[] = [
  {
    id: 'bulk-eoc-ingest',
    name: 'Bulk EOC Ingest',
    description: 'Matches a folder of field files to action implementations by filename and creates an evidence-of-compliance record for each match. Runs against this tenant.',
    scope: 'tenant',
    guided: true,
    guidedNote: 'Pattern-matched file ingest with preview before commit',
  },
  {
    id: 'extract-source-pdfs',
    name: 'Extract Source PDFs',
    description: 'Re-runs text extraction across this tenant’s source documents so commitment text and page references are rebuilt from the current PDFs.',
    scope: 'tenant',
  },
  {
    id: 'backfill-dmr-eoc',
    name: 'Backfill DMR Evidence',
    description: 'Creates evidence-of-compliance records from this tenant’s historical daily monitoring report data.',
    scope: 'tenant',
  },
  {
    id: 'extend-rolling-window',
    name: 'Extend Rolling Window',
    description: 'Advances the recurring-action scheduling window, generating the next set of due dates for every tenant on the platform.',
    scope: 'all-tenants',
  },
  {
    id: 'send-notifications',
    name: 'Send Notifications',
    description: 'Runs the notification job immediately rather than waiting for the nightly schedule, for every tenant on the platform.',
    scope: 'all-tenants',
  },
];

/** Newest first. */
export const OPERATION_RUNS: OperationRun[] = [
  {
    id: 'run-0231',
    operationId: 'extract-source-pdfs',
    started: '2026-07-29 08:12',
    actor: 'Nadia Boutros',
    status: 'running',
    summary: '341 of 512 documents processed',
  },
  {
    id: 'run-0230',
    operationId: 'bulk-eoc-ingest',
    started: '2026-07-27 14:05',
    actor: 'Curtis Lam',
    status: 'succeeded',
    summary: '182 files — 174 created, 6 updated, 2 skipped',
  },
  {
    id: 'run-0229',
    operationId: 'backfill-dmr-eoc',
    started: '2026-07-24 11:30',
    actor: 'Sylvia Marchetti',
    status: 'failed',
    summary: 'Stopped at 41/300 — duplicate DMR keys',
  },
  {
    id: 'run-0228',
    operationId: 'send-notifications',
    started: '2026-07-22 06:00',
    actor: 'Rob Kittredge',
    status: 'succeeded',
    summary: '214 emails across 9 tenants',
  },
  {
    id: 'run-0227',
    operationId: 'extract-source-pdfs',
    started: '2026-07-16 09:48',
    actor: 'Nadia Boutros',
    status: 'succeeded',
    summary: '512 documents — 512 extracted, 0 failed',
  },
  {
    id: 'run-0226',
    operationId: 'extend-rolling-window',
    started: '2026-07-01 05:00',
    actor: 'Rob Kittredge',
    status: 'succeeded',
    summary: 'Window advanced to 2027-01-31 for 9 tenants',
  },
];

// ─── Recent changes ──────────────────────────────────────────────────────────

/** Newest first. Every `pageId` resolves through settingsPage(). */
export const SETTINGS_CHANGES: SettingsChange[] = [
  {
    on: '2026-07-28',
    by: 'Nadia Boutros',
    pageId: 'feature-flags',
    summary: 'Turned on Site Clearance',
  },
  {
    on: '2026-07-24',
    by: 'Marla Quintero',
    pageId: 'terminology',
    summary: 'Set Component to Construction Area / Construction Areas',
  },
  {
    on: '2026-07-21',
    by: 'Devin Oyelaran',
    pageId: 'report-templates',
    summary: 'Edited Daily Monitoring Report — Biological, now 9 blocks',
  },
  {
    on: '2026-07-17',
    by: 'Marla Quintero',
    pageId: 'users',
    summary: 'Invited alonzo.ferrer@water.ca.gov as Read Only',
  },
  {
    on: '2026-07-09',
    by: 'Sylvia Marchetti',
    pageId: 'site-clearance',
    summary: 'Added the Paleontological review kind',
  },
  {
    on: '2026-07-02',
    by: 'Marla Quintero',
    pageId: 'tenant-profile',
    summary: 'Enabled the Spatial Library module',
  },
];

// ─── Tenants ─────────────────────────────────────────────────────────────────
// ESA Baseline is the clone source: a new tenant is provisioned by copying its
// configuration, which is why it carries every module and only ESA staff.

export const TENANTS: TenantRecord[] = [
  {
    id: 'dcp',
    name: 'Delta Conveyance Project',
    subdomain: 'dcp',
    modules: [
      'Core',
      'Commitment Library',
      'Compliance Tracking',
      'Reporting',
      'Monitoring Dashboard',
      'Spatial Library',
    ],
    users: 34,
    created: '2024-09-16',
  },
  {
    id: 'prologis',
    name: 'Prologis',
    subdomain: 'prologis',
    modules: ['Core', 'Commitment Library', 'Compliance Tracking', 'Reporting'],
    users: 18,
    created: '2025-03-04',
  },
  {
    id: 'aws',
    name: 'AWS Infrastructure',
    subdomain: 'aws',
    modules: ['Core', 'Commitment Library', 'Compliance Tracking', 'Scheduling', 'Reporting'],
    users: 26,
    created: '2025-10-21',
  },
  {
    id: 'esa-baseline',
    name: 'ESA Baseline',
    subdomain: 'esa',
    modules: [
      'Core',
      'Commitment Library',
      'Monitoring Dashboard',
      'Scheduling',
      'Compliance Tracking',
      'Spatial Library',
      'Reporting',
    ],
    users: 6,
    created: '2024-06-03',
  },
];

// ─── Small helpers (build-time) ──────────────────────────────────────────────

export function pagesByZone(zoneId: string): SettingsPage[] {
  return SETTINGS_PAGES.filter((p) => p.zone === zoneId);
}

export function settingsPage(id: string): SettingsPage | undefined {
  return SETTINGS_PAGES.find((p) => p.id === id);
}

/** Base-less route for a settings page — wrap with withBase() at the call site. */
export function settingsPagePath(id: string): string {
  return `/prototypes/settings/${id}`;
}
