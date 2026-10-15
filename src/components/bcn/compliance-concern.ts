// Runtime + shared constants for <BcnComplianceConcern> (and the entity glyphs the
// Daily Monitoring Report's work-area rows wear).
//
// ENTITY_GLYPH — Beacon prod's `beacon-entity-icon` mapping (origin/develop
// shared/components/beacon-entity-icon: BeaconEntityTypeEnum) for the four work-area
// item kinds, as esa-icon `paths` fallbacks (24×24 stroke viewBox):
//   ComplianceConcerns   → triangle-alert         (in the esa-icon registry; paths kept for parity)
//   SiteActivity         → construction-activity  (prod's CUSTOM icon, a traffic cone drawn on a
//                                                  16×16 box at stroke 1.5 — scaled ×1.5 here so it
//                                                  sits on the 24 grid at Lucide's stroke 2)
//   NestingBirds         → bird
//   ResourceObservations → flag
//
// setupComplianceConcerns() — one bundled script for every concern row on the page
// (several can render). Each root carries its ids on data-* attributes; the controller
// wires its disclosure and re-renders the live parts on dmrStore 'change':
//   [data-bcn-cc]               root — data-item-id, data-concern-id
//   [data-bcn-cc-toggle]        the BcnDisclosureToggle (aria-expanded is the state)
//   [data-bcn-cc-panel]         the expanded panel
//   [data-bcn-cc-summary]       the collapsed row's read-only log entry text
//   [data-bcn-cc-status]        one pre-rendered badge per concern status (data-status)
//   [data-bcn-cc-this-log]      this report's entry text in the Daily Logs list
//   [data-bcn-cc-outdated]      per generated report: "Out of date — regenerate" flag

import { dmrStore, isReportOutOfDate } from '../../lib/dmr-review-store';

export type EntityGlyph = 'concern' | 'activity' | 'bird' | 'resource';

export const ENTITY_GLYPH: Record<EntityGlyph, { name: string; paths: string }> = {
  concern: {
    name: 'triangle-alert',
    paths: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  },
  activity: {
    // Not a registry name on purpose, so esa-icon falls through to these paths.
    name: 'bcn-construction-activity',
    paths:
      '<g transform="scale(1.5)" stroke-width="1.3333">' +
      '<path d="M10.8342 7.27686C10.5097 7.50093 10.0836 7.68334 9.5909 7.80914C9.09815 7.93493 8.55277 8.00052 7.99951 8.00052C7.44624 8.00052 6.90086 7.93493 6.40811 7.80914C5.91536 7.68334 5.48929 7.50093 5.16484 7.27686M11.4452 9.4347L14.5808 10.8625C14.7053 10.9171 14.8111 11.0068 14.8855 11.1205C14.9598 11.2343 14.9994 11.3672 14.9995 11.5031C14.9996 11.639 14.9601 11.7719 14.8859 11.8858C14.8117 11.9996 14.7059 12.0893 14.5815 12.1441L8.58044 14.8738C8.39807 14.9569 8.19996 15 7.99951 15C7.79906 15 7.60095 14.9569 7.41857 14.8738L1.41747 12.1371C1.29327 12.0823 1.18767 11.9926 1.11354 11.8789C1.03941 11.7652 0.999939 11.6324 0.999939 11.4967C0.999939 11.3609 1.03941 11.2281 1.11354 11.1144C1.18767 11.0007 1.29327 10.911 1.41747 10.8562L4.55591 9.4284"/>' +
      '<path d="M11.4635 9.49837C11.5342 9.74651 11.4974 9.99934 11.3558 10.2398C11.2141 10.4802 10.9707 10.7026 10.6422 10.8919C10.3137 11.0812 9.90769 11.2331 9.45164 11.3371C8.99559 11.4412 8.50015 11.495 7.99886 11.495C7.49757 11.495 7.00213 11.4412 6.54608 11.3371C6.09003 11.2331 5.684 11.0812 5.35549 10.8919C5.02698 10.7026 4.78364 10.4802 4.64196 10.2398C4.50028 9.99934 4.46355 9.74651 4.53426 9.49837L6.64382 2.05126C6.72116 1.75046 6.89634 1.48392 7.14178 1.2936C7.38722 1.10329 7.68898 1 7.99956 1C8.31014 1 8.61191 1.10329 8.85735 1.2936C9.10279 1.48392 9.27796 1.75046 9.3553 2.05126L11.4635 9.49837Z"/>' +
      '<path d="M6.03552 4.20007C6.61496 4.39641 7.29883 4.50136 7.99879 4.50136C8.69875 4.50136 9.38263 4.39641 9.96207 4.20007"/>' +
      '</g>',
  },
  bird: {
    name: 'bcn-bird',
    paths:
      '<path d="M16 7h.01"/><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/><path d="m20 7 2 .5-2 .5"/><path d="M10 18v3"/><path d="M14 17.75V21"/><path d="M7 18a6 6 0 0 0 3.84-10.61"/>',
  },
  resource: {
    name: 'bcn-flag',
    paths: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
  },
};

export const CATEGORY_GLYPH: Record<string, EntityGlyph> = {
  'Compliance Concerns': 'concern',
  'Site Activities': 'activity',
  'Nesting Birds': 'bird',
  'Resource Observations': 'resource',
};

let wired = false;

function render(root: HTMLElement): void {
  const { itemId, concernId } = root.dataset;
  if (!itemId || !concernId) return;
  const status = dmrStore.field(`concern:${concernId}:status`).value;
  for (const badge of root.querySelectorAll<HTMLElement>('[data-bcn-cc-status]')) {
    badge.hidden = badge.dataset.status !== status;
  }
  // A generated report that a shared-record edit has made stale.
  for (const flag of root.querySelectorAll<HTMLElement>('[data-bcn-cc-outdated]')) {
    flag.hidden = !isReportOutOfDate(dmrStore.state, flag.dataset.bcnCcOutdated ?? '');
  }
  const entry = dmrStore.field(`item:${itemId}:summary`).display;
  for (const el of root.querySelectorAll<HTMLElement>('[data-bcn-cc-summary], [data-bcn-cc-this-log]')) {
    el.textContent = entry;
  }
}

function setExpanded(root: HTMLElement, open: boolean): void {
  const toggle = root.querySelector<HTMLButtonElement>('[data-bcn-cc-toggle]');
  const panel = root.querySelector<HTMLElement>('[data-bcn-cc-panel]');
  const summary = root.querySelector<HTMLElement>('[data-bcn-cc-summary]');
  if (!toggle || !panel) return;
  toggle.setAttribute('aria-expanded', String(open));
  panel.hidden = !open;
  // Expanded, the entry is shown (editable) inside the panel; don't print it twice.
  if (summary) summary.hidden = open;
  root.toggleAttribute('data-open', open);
}

export function setupComplianceConcerns(scope: ParentNode = document): void {
  const roots = [...scope.querySelectorAll<HTMLElement>('[data-bcn-cc]:not([data-cc-ready])')];
  for (const root of roots) {
    root.setAttribute('data-cc-ready', '');
    const toggle = root.querySelector<HTMLButtonElement>('[data-bcn-cc-toggle]');
    const panel = root.querySelector<HTMLElement>('[data-bcn-cc-panel]');
    if (toggle && panel) toggle.setAttribute('aria-controls', panel.id);
    toggle?.addEventListener('click', () => setExpanded(root, toggle.getAttribute('aria-expanded') !== 'true'));
    render(root);
  }
  if (wired) return;
  wired = true;
  dmrStore.addEventListener('change', () => {
    document.querySelectorAll<HTMLElement>('[data-bcn-cc][data-cc-ready]').forEach(render);
  });
}
