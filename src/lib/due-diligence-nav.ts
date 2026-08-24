// Shared AppShell navSections for the Due Diligence effort. The sidebar is adapted
// for this phase of the project — Tracking / Monitoring / Reporting are Compliance-
// module concepts with nothing to show here, and Setup Wizard / Data Catalog belong
// to that same later phase, so none of the default sections carry over. Site
// Screening happens BEFORE a project exists (candidates aren't a project yet), so it
// renders as its own top-level link, never inside the "Project" section; the six
// due-diligence steps ARE the Project section's sub-items once a candidate advances.
import { withBase } from './base';

export interface DueDiligenceNavOptions {
  /** False on the Site Screening page — there is no project to show a section for. */
  showProject: boolean;
}

// Mirrors AppShell.astro's (unexported) NavItem/NavSection shape.
interface NavItem {
  id: string;
  label: string;
  active?: boolean;
  href?: string;
  divider?: boolean;
}
interface NavSection {
  id: string;
  title: string;
  icon: string;
  iconPaths?: string;
  items?: NavItem[];
  link?: boolean;
  /** Real route for a `link` section. Defaults to the `#id` stub when absent. */
  href?: string;
  expanded?: boolean;
  active?: boolean;
  dividerAfter?: boolean;
}

export function dueDiligenceNavSections({ showProject }: DueDiligenceNavOptions): NavSection[] {
  const sections: NavSection[] = [
    {
      id: 'due-diligence-siting',
      title: 'Site Screening',
      icon: 'search',
      link: true,
      href: withBase('/prototypes/due-diligence-siting'),
    },
  ];

  if (showProject) {
    sections.push({
      id: 'project',
      title: 'Project',
      icon: 'layout-dashboard',
      expanded: true,
      items: [
        { id: 'dd-overview', label: 'Overview', href: withBase('/prototypes/due-diligence-overview') },
        { id: 'dd-boundary', label: 'Project Boundary', href: withBase('/prototypes/due-diligence-boundary') },
        { id: 'dd-constraints', label: 'Constraints Cross-Reference', href: withBase('/prototypes/due-diligence-constraints') },
        { id: 'dd-permits', label: 'Permit Matrix', href: withBase('/prototypes/due-diligence-permits') },
        { id: 'dd-report', label: 'CIA Report', href: withBase('/prototypes/due-diligence-report') },
      ],
    });
  }

  return sections;
}
