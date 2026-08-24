// COMPONENT NAV — the sidebar with the navigation move this effort proposes.
//
// The 2026-08-13 design call settled where components live once they have a
// dashboard of their own. Andy's framing was a tree: project is level one, the
// component index is level two, a component detail is level three. Today the
// index hangs off Tracking as "All Components", which puts a level-two surface
// inside a level-two zone and implies components are a tracking concern rather
// than a fact about the project.
//
// So three changes, all visible in the array below:
//   · Components JOINS the Project section, directly under Dashboard — the
//     project owns its components, and the path down the tree matches the nav.
//   · "All Components" LEAVES the Tracking section. It is a move, not a
//     duplicate: same route, one home.
//   · The Data Catalog keeps no Components entry. The catalog's copy was a
//     second door to a near-identical grid; the page itself stays reachable by
//     URL, it just stops occupying nav.
//
// Everything else is verbatim from AppShell's default, which is itself verbatim
// from prod's side-nav-modern.component.ts. The section glyphs are duplicated
// here because AppShell keeps its Lucide map private and several of these
// (radar, map-pinned, clipboard-list) are not in esa-icon's shared registry —
// passing a name alone would silently drop them. Worth collapsing if a page
// ever needs a third variant.

import { withBase } from '../lib/base';

// Section glyphs, copied from AppShell's private LUCIDE map.
const GLYPH = {
  compass:
    '<path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/><circle cx="12" cy="12" r="10"/>',
  'layout-dashboard':
    '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
  radar:
    '<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"/><path d="M12 18h.01"/><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"/><circle cx="12" cy="12" r="2"/><path d="m13.41 10.59 5.66-5.66"/>',
  'map-pinned':
    '<path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"/><circle cx="12" cy="8" r="2"/><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"/>',
  'clipboard-list':
    '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>',
  database:
    '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
};

export const COMPONENTS_HREF = '/prototypes/components';
export const COMPONENT_DASHBOARD_HREF = '/prototypes/component-dashboard';

/**
 * @param activeId Which nav item reads as current — 'components' on the index,
 *   and also on a component detail, since the detail is that item's subtree.
 */
export const componentNav = (activeId: 'components' | 'dashboard' = 'components') => [
  {
    id: 'setup-wizard',
    title: 'Setup Wizard',
    icon: 'compass',
    iconPaths: GLYPH.compass,
    link: true,
  },
  {
    id: 'project',
    title: 'Project',
    icon: 'layout-dashboard',
    iconPaths: GLYPH['layout-dashboard'],
    expanded: true,
    dividerAfter: true,
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        href: withBase('/prototypes/project-dashboard'),
        active: activeId === 'dashboard',
      },
      // THE MOVE: components belong to the project, so they sit with it.
      {
        id: 'components',
        label: 'Components',
        href: withBase(COMPONENTS_HREF),
        active: activeId === 'components',
      },
      { id: 'action-lists', label: 'Action Lists' },
      { id: 'document-reviews', label: 'Document Reviews' },
      { id: 'spatial-library-layers', label: 'Spatial Library Layers' },
    ],
  },
  {
    id: 'tracking',
    title: 'Tracking',
    icon: 'radar',
    iconPaths: GLYPH.radar,
    expanded: true,
    items: [
      { id: 'tracking-summary', label: 'Tracking Summary' },
      { id: 'project-tracking', label: 'Project Tracking' },
      { id: 'permit-tracking', label: 'Permit Tracking', href: withBase('/prototypes/permit-tracking') },
      // "All Components" was here. It moved up to the Project section — one home.
    ],
  },
  {
    id: 'monitoring',
    title: 'Monitoring',
    icon: 'map-pinned',
    iconPaths: GLYPH['map-pinned'],
    expanded: true,
    items: [
      { id: 'mp-dashboard', label: 'Dashboard', href: withBase('/prototypes/monitoring/dashboard') },
      { id: 'mp-surveys', label: 'Surveys', href: withBase('/prototypes/monitoring/surveys') },
      { id: 'mp-all-observations', label: 'All Observations' },
      { id: 'site-clearance', label: 'Site Clearance', href: withBase('/prototypes/site-clearance'), divider: true },
    ],
  },
  {
    id: 'reporting',
    title: 'Reporting',
    icon: 'clipboard-list',
    iconPaths: GLYPH['clipboard-list'],
    expanded: true,
    dividerAfter: true,
    items: [
      { id: 'progress-report', label: 'Progress Report' },
      { id: 'report-center', label: 'Report Center' },
    ],
  },
  {
    id: 'data-catalog',
    title: 'Data Catalog',
    icon: 'database',
    iconPaths: GLYPH.database,
    expanded: true,
    items: [
      { id: 'dc-source-documents', label: 'Source Documents' },
      { id: 'dc-commitments', label: 'Commitments' },
      { id: 'dc-requirements', label: 'Requirements' },
      { id: 'dc-actions', label: 'Actions', href: withBase('/prototypes/data-catalog-actions') },
      // No Components entry — the catalog's duplicate door is retired.
      { id: 'dc-all-data', label: 'All Data' },
    ],
  },
];
