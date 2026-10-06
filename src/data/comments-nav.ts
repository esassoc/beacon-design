// The side nav for the Comments pages: Comments sits under Planning. The other Beacon
// sections stay collapsed so the Planning module reads as where you are.
import { withBase } from '../lib/base';

const ICON = {
  dashboard: '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
  planning: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/>',
  radar: '<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"/><path d="M12 18h.01"/><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"/><circle cx="12" cy="12" r="2"/><path d="m13.41 10.59 5.66-5.66"/>',
};

export const COMMENTS_PROJECT = { tenant: 'Port of Seattle', name: 'SEA Part 150 Study' };

export const COMMENTS_BASE = '/prototypes/comments';

/** A submission's record number, "S-018" (the store's submissionNo, for build time). */
export const submissionNoFor = (key: number) => `S-${String(key).padStart(3, '0')}`;

export function commentsNav() {
  return [
    { id: 'project', title: 'Project', icon: 'layout-dashboard', iconPaths: ICON.dashboard, expanded: false, items: [{ id: 'dashboard', label: 'Dashboard' }] },
    {
      id: 'planning', title: 'Planning', icon: 'calendar-check', iconPaths: ICON.planning, expanded: true, dividerAfter: true,
      items: [
        { id: 'study-planning', label: 'Study Planning' },
        { id: 'comments', label: 'Comments', href: withBase(COMMENTS_BASE) },
      ],
    },
    { id: 'tracking', title: 'Tracking', icon: 'radar', iconPaths: ICON.radar, expanded: false, items: [{ id: 'project-tracking', label: 'Project Tracking' }] },
  ];
}
