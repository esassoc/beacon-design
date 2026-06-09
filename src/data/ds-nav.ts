// Single source of truth for the design-system sidebar + breadcrumbs.
// Mirrors Beacon's in-app catalog structure (Beacon.Web/.../ui-catalog.component.ts):
// the same sections and entries, mapped from Beacon's ui-* components to their
// @esa/ecology esa-* equivalents (the hub was ported from Beacon, so it's ~1:1).
// Types come from @esa/docs so this data is structurally compatible with DocsShell.
import type { NavItem, NavGroup } from '@esa/docs/nav';
export type { NavItem, NavGroup };

export const foundations: NavGroup = {
  label: 'Foundations',
  items: [
    { label: 'Color', href: '/design-system/foundations/color' },
    { label: 'Typography', href: '/design-system/foundations/typography' },
    { label: 'Spacing', href: '/design-system/foundations/spacing' },
    { label: 'Radius', href: '/design-system/foundations/radius' },
    { label: 'Iconography', href: '/design-system/foundations/iconography' },
  ],
};

const c = (label: string, name: string): NavItem => ({
  label,
  href: `/design-system/components/${name}`,
});

// Beacon ui-catalog sections. ui-* → esa-* mapping in the labels/slugs below:
// Toggle→switch-toggle, Tag→input-tag, Search select→combobox, Dropdown→dropdown-menu,
// Tabs→tab-layout, Toast→alert-box (Beacon's toast look = the alert-box skin).
export const componentGroups: NavGroup[] = [
  {
    label: 'Form Inputs',
    items: [
      c('Text', 'esa-text-field'),
      c('Textarea', 'esa-textarea'),
      c('Checkbox', 'esa-checkbox'),
      c('Toggle', 'esa-switch-toggle'),
      c('Select', 'esa-select'),
      c('Button toggle', 'esa-button-toggle'),
      c('Tag', 'esa-input-tag'),
      c('Filter', 'esa-filter-container'),
      c('Search select', 'esa-combobox'),
      c('Date picker', 'esa-date-picker'),
    ],
  },
  {
    label: 'Actions',
    items: [
      c('Button', 'esa-button'),
      c('Icon button', 'esa-icon-button'),
    ],
  },
  {
    label: 'Navigation',
    items: [
      c('Tabs', 'esa-tab-layout'),
      c('Dropdown', 'esa-dropdown-menu'),
    ],
  },
  {
    label: 'Overlays',
    items: [
      c('Popover', 'esa-popover'),
      c('Dialog', 'esa-dialog'),
      c('Toast', 'esa-alert-box'),
    ],
  },
];

export const allGroups: NavGroup[] = [foundations, ...componentGroups];
