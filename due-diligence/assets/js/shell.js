/*
 * Beacon prototype shell — vanilla JS module that mounts the topbar, phase
 * strip, and sidenav around the page-specific <main>. Every page sets:
 *   window.BeaconShell = { phase, activeNavId, project, tenant }
 * before this script runs.
 */

const ICON_LIB = {
  // Lucide source: lucide.dev. Hand-inlined to avoid the runtime CDN dep.
  hammer:       '<path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"/>',
  search:       '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  settings:     '<path d="M19.14 12.94a8.05 8.05 0 0 0 .04-1.88l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.61-.22l-2.39.96a8 8 0 0 0-1.62-.94l-.36-2.54a.5.5 0 0 0-.5-.42h-3.84a.5.5 0 0 0-.5.42l-.36 2.54a8 8 0 0 0-1.62.94l-2.39-.96a.5.5 0 0 0-.61.22L2.69 8.84a.5.5 0 0 0 .12.64l2.03 1.58a8.05 8.05 0 0 0 0 1.88L2.8 14.52a.5.5 0 0 0-.12.64l1.92 3.32a.5.5 0 0 0 .61.22l2.39-.96a8 8 0 0 0 1.62.94l.36 2.54a.5.5 0 0 0 .5.42h3.84a.5.5 0 0 0 .5-.42l.36-2.54a8 8 0 0 0 1.62-.94l2.39.96a.5.5 0 0 0 .61-.22l1.92-3.32a.5.5 0 0 0-.12-.64Z"/><circle cx="12" cy="12" r="3"/>',
  triangle:     '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  user:         '<path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/>',
  chevron:      '<path d="m6 9 6 6 6-6"/>',
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  'sidebar':    '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',
  'home':       '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  // Section icons
  'compass':    '<path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/><circle cx="12" cy="12" r="10"/>',
  'layout':     '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
  'map-pinned': '<path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"/><circle cx="12" cy="8" r="2"/>',
  'map':        '<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>',
  'layers':     '<path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
  'clipboard':  '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>',
  'file-text':  '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  'plus':       '<path d="M5 12h14"/><path d="M12 5v14"/>',
  'arrow-right':'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  'arrow-up-right':'<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  'leaf':       '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96a1 1 0 0 1 1.8.66 23.2 23.2 0 0 1-1.4 10.34"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>',
  'database':   '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
  'shield':     '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.78 17 5 19 5a1 1 0 0 1 1 1z"/>',
  'building':   '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>',
  'pencil':     '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',
  'download':   '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
  'upload':     '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
  'check':      '<path d="M20 6 9 17l-5-5"/>',
  'circle-check':'<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  'x':          '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  'info':       '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  'alert':      '<circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
  'sparkles':   '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>',
  'route':      '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
  'list':       '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
  'eye':        '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
  'compass-2':  '<path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/><circle cx="12" cy="12" r="10"/>',
};

function icon(name, cls = 'icon') {
  const paths = ICON_LIB[name] || '';
  return `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${paths}</svg>`;
}
window.bcnIcon = icon;

// ── Phase / module manifest ──
const PHASES = {
  'due-diligence': {
    label: 'Due Diligence',
    href: '../due-diligence/index.html',
    sections: [
      {
        id: 'dd-project', title: 'Project', icon: 'layout', expanded: true,
        items: [
          { id: 'dd-overview', label: 'Overview', href: 'project.html' },
          { id: 'dd-boundary', label: 'Project Boundary', href: 'new-project.html' },
          { id: 'dd-constraints', label: 'Constraints', href: 'constraints.html' },
          { id: 'dd-permits', label: 'Permit Matrix', href: 'permits.html' },
          { id: 'dd-report', label: 'Preliminary Report', href: 'report.html' },
        ],
      },
      {
        id: 'dd-data', title: 'GIS Data', icon: 'database', expanded: true,
        items: [
          { id: 'dd-layers', label: 'Layer Library', href: '#' },
          { id: 'dd-feeds',  label: 'Data Feeds', href: '#' },
          { id: 'dd-uploads',label: 'Project Uploads', href: '#' },
        ],
        dividerAfter: true,
      },
      {
        id: 'dd-portfolio', title: 'Portfolio', icon: 'list', expanded: true,
        items: [
          { id: 'dd-projects', label: 'All Projects', href: 'index.html' },
          { id: 'dd-new',      label: 'New Project',  href: 'new-project.html' },
        ],
      },
    ],
  },
  'planning-permitting': {
    label: 'Planning & Permitting',
    href: '../planning-permitting/index.html',
    sections: [
      { id: 'pp-project', title: 'Project', icon: 'layout', expanded: true,
        items: [
          { id: 'pp-overview', label: 'Overview', href: 'index.html' },
          { id: 'pp-strategy', label: 'Permit Strategy', href: '#' },
          { id: 'pp-applications', label: 'Applications', href: '#' },
          { id: 'pp-ahj', label: 'AHJ Coordination', href: '#' },
        ],
      },
      { id: 'pp-tracking', title: 'Tracking', icon: 'route', expanded: true,
        items: [
          { id: 'pp-timeline', label: 'Schedule', href: '#' },
          { id: 'pp-conditions', label: 'Permit Conditions', href: '#' },
        ],
      },
    ],
  },
  'compliance': {
    label: 'Compliance',
    href: '../compliance/index.html',
    sections: [
      { id: 'cp-setup', title: 'Setup Wizard', icon: 'compass', link: true, href: '#' },
      { id: 'cp-project', title: 'Project', icon: 'layout', expanded: true, dividerAfter: true,
        items: [
          { id: 'cp-dashboard',      label: 'Dashboard',              href: 'index.html' },
          { id: 'cp-source-documents', label: 'Source Documents',     href: '#' },
          { id: 'cp-commitments',    label: 'Commitments',            href: '#' },
          { id: 'cp-requirements',   label: 'Requirements',           href: '#' },
          { id: 'cp-organize',       label: 'Organize Actions',       href: '#' },
          { id: 'cp-action-lists',   label: 'Action Lists',           href: '#' },
          { id: 'cp-doc-reviews',    label: 'Document Reviews',       href: '#' },
          { id: 'cp-spatial',        label: 'Spatial Library Layers', href: '#' },
        ],
      },
      { id: 'cp-tracking', title: 'Tracking', icon: 'route', expanded: true,
        items: [
          { id: 'cp-summary',  label: 'Tracking Summary', href: '#' },
          { id: 'cp-proj-trk', label: 'Project Tracking', href: '#' },
          { id: 'cp-permits',  label: 'Permit Tracking',  href: '#' },
          { id: 'cp-all-comp', label: 'All Components',   href: '#' },
        ],
      },
      { id: 'cp-monitoring', title: 'Monitoring', icon: 'map-pinned', expanded: true,
        items: [
          { id: 'cp-monitoring-portal', label: 'Monitoring Portal', href: '#' },
          { id: 'cp-site-clearance',    label: 'Site Clearance',     href: '#' },
        ],
      },
      { id: 'cp-reporting', title: 'Reporting', icon: 'clipboard', expanded: true, dividerAfter: true,
        items: [
          { id: 'cp-progress-rpt', label: 'Progress Report', href: '#' },
          { id: 'cp-report-center', label: 'Report Center',  href: '#' },
        ],
      },
      { id: 'cp-data', title: 'Data Catalog', icon: 'database', expanded: false,
        items: [
          { id: 'cp-dc-sd', label: 'Source Documents', href: '#' },
          { id: 'cp-dc-co', label: 'Commitments',      href: '#' },
          { id: 'cp-dc-rq', label: 'Requirements',     href: '#' },
          { id: 'cp-dc-ac', label: 'Actions',          href: '#' },
          { id: 'cp-dc-all',label: 'All Data',         href: '#' },
        ],
      },
    ],
  },
};
window.BeaconPhases = PHASES;

// ── Render shell ──
function renderShell() {
  const config = window.BeaconShell || {};
  const phaseId = config.phase || 'due-diligence';
  const phase = PHASES[phaseId];
  const tenant = config.tenant || 'Acme Energy';
  const project = config.project || 'Mojave Stockyard BESS';
  const activeNavId = config.activeNavId;

  // Topbar
  const topbar = `
    <header class="topbar">
      <div class="topbar__left">
        <button class="sidebar-toggle" id="sidebar-toggle" aria-label="Toggle sidebar">${icon('sidebar')}</button>
        <button class="tenant-trigger">${tenant} ${icon('chevron','icon icon--sm')}</button>
      </div>
      <div></div>
      <div class="topbar__right">
        <span class="qa-warning">${icon('triangle','icon icon--sm')} Prototype</span>
        <button class="icon-button" aria-label="Search">${icon('search')}</button>
        <button class="icon-button" aria-label="Settings">${icon('settings')}</button>
        <button class="user-avatar" aria-label="User menu">${icon('user','icon icon--lg')}</button>
      </div>
    </header>`;

  // Phase strip
  const phaseStrip = `
    <nav class="phase-strip" aria-label="Project phases">
      <span class="phase-strip__label">Phases</span>
      <div class="phase-strip__nav">
        ${Object.entries(PHASES).map(([id, p]) => `
          <a class="phase-pill phase-pill--${id} ${id === phaseId ? 'active' : ''}" href="${p.href}">
            <span class="phase-pill__dot"></span>${p.label}
          </a>`).join('')}
      </div>
      <span class="phase-strip__spacer"></span>
      ${config.hideProject ? '' : `<span class="phase-strip__project">Project · <strong>${project}</strong></span>`}
    </nav>`;

  // Sidenav
  const navItem = (item) => {
    const isActive = item.id === activeNavId ? ' active' : '';
    return `<li class="nav-item"><a class="nav-sublink${isActive}" href="${item.href || '#'}">${item.label}</a></li>`;
  };
  const navSection = (s) => {
    const sectionActive = (s.items || []).some(i => i.id === activeNavId);
    const collapsed = !s.expanded && !sectionActive;
    return `
      <div class="nav-section ${collapsed ? 'nav-section--collapsed' : ''} ${sectionActive ? 'nav-section--active' : ''}">
        <button class="nav-section__header" aria-expanded="${!collapsed}">
          ${icon(s.icon)}
          <span class="nav-section__title">${s.title}</span>
          ${icon('chevron','icon icon--sm nav-section__chevron')}
        </button>
        <ul class="nav-section__items">${(s.items || []).map(navItem).join('')}</ul>
      </div>
      ${s.dividerAfter ? '<hr class="nav-divider" aria-hidden="true">' : ''}`;
  };

  // Logo SVG (real Beacon mark — fill colors are baked in)
  const logoHref = (document.querySelector('link[rel=stylesheet][href*="../assets/"]') ? '../' : '') + 'assets/img/beacon-icon.svg';
  const sidenav = `
    <nav class="side-nav" id="side-nav">
      <div class="sidebar-header">
        <a href="../index.html" class="site-logo" aria-label="Beacon home">
          <img src="${logoHref}" alt="Beacon" class="site-logo__img" />
        </a>
      </div>
      <div class="project-switcher-container">
        <button class="project-switcher__trigger">
          ${icon('hammer')}
          <span class="project-switcher__name">${project}</span>
          ${icon('chevron','icon icon--sm project-switcher__chevron')}
        </button>
      </div>
      <div class="main-nav">
        ${phase.sections.map(navSection).join('')}
      </div>
    </nav>`;

  // Mount
  const main = document.querySelector('main');
  document.body.classList.add('has-shell');
  const frame = document.createElement('div');
  frame.className = 'modern-layout';
  frame.innerHTML = `
    ${topbar}
    ${phaseStrip}
    <div class="modern-layout__body">
      ${sidenav}
      <div class="modern-layout__content" id="shell-content"></div>
    </div>`;
  document.body.insertBefore(frame, main);
  document.getElementById('shell-content').appendChild(main);

  wireShellEvents();
}

function wireShellEvents() {
  const toggle = document.getElementById('sidebar-toggle');
  const sideNav = document.getElementById('side-nav');
  if (toggle && sideNav) {
    toggle.addEventListener('click', () => sideNav.classList.toggle('collapsed'));
  }
  document.querySelectorAll('.nav-section__header').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.closest('.nav-section');
      if (section) section.classList.toggle('nav-section--collapsed');
    });
  });
}

document.addEventListener('DOMContentLoaded', renderShell);
