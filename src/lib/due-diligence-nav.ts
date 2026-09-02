// Shared AppShell navSections for Project Almond's Due Diligence AND Permitting
// phases (phases 1 and 2 of its three-phase lifecycle — see due-diligence-overview.astro
// for the phase-3 stub, on its "Project Lifecycle" stepper; Permitting's own pages
// carry no lifecycle summary of their own — a phase tag is enough once each phase
// has its own module, per design review 2026-08-27). The sidebar is adapted for
// these phases: Tracking / Monitoring
// / Reporting are Compliance-module (phase 3) concepts with nothing to show here, and
// Setup Wizard / Data Catalog belong to that same later phase, so none of the default
// sections carry over. Site Screening happens BEFORE a project exists (candidates
// aren't a project yet), so it renders as its own top-level link, never inside either
// phase's section.
//
// "Due Diligence" and "Permitting" are siblings, each its OWN collapsible section
// with its own sub-items (Overview/Boundary/Constraints/Permit Matrix/CIA Report vs.
// Permit Dashboard/Permit Details) — Permitting mirrors Due Diligence's shape now
// that it has two pages of its own, rather than a single flat link (design review,
// 2026-08-27). A hairline (dividerAfter on "Due Diligence") keeps the module
// boundary visible even with both collapsed.
import { withBase } from './base';

export interface DueDiligenceNavOptions {
  /** False on the Site Screening page — there is no project to show sections for. */
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
    sections.push(
      {
        id: 'due-diligence',
        title: 'Due Diligence',
        icon: 'layout-dashboard',
        expanded: true,
        dividerAfter: true,
        items: [
          { id: 'dd-overview', label: 'Overview', href: withBase('/prototypes/due-diligence-overview') },
          { id: 'dd-boundary', label: 'Project Boundary', href: withBase('/prototypes/due-diligence-boundary') },
          { id: 'dd-constraints', label: 'Constraints Cross-Reference', href: withBase('/prototypes/due-diligence-constraints') },
          { id: 'dd-permits', label: 'Permit Matrix', href: withBase('/prototypes/due-diligence-permits') },
          { id: 'dd-report', label: 'CIA Report', href: withBase('/prototypes/due-diligence-report') },
        ],
      },
      {
        id: 'permitting',
        title: 'Permitting',
        icon: 'file-text',
        expanded: true,
        items: [
          { id: 'permitting-dashboard', label: 'Permit Dashboard', href: withBase('/prototypes/permitting-dashboard') },
          { id: 'permitting-details', label: 'Permit Details', href: withBase('/prototypes/permitting-details') },
        ],
      },
    );
  }

  return sections;
}
