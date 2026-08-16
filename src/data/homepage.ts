// The public marketing HOMEPAGE content — translated from the approved specimen
// (beacon-prototypes/homepage-specimen.html). Copy is verbatim from the specimen;
// every section component reads its content from here so the page itself is a
// pure manifest of sections.

/** Lucide path data for glyphs not in the hub icon registry — handed to
 *  esa-icon's `paths` fallback (the same mechanism BcnKbHero uses for its
 *  off-registry search glyph). Keyed by lucide name for honesty about origin. */
export const MARKETING_ICON_PATHS: Record<string, string> = {
  'badge-check':
    '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>',
  'clipboard-list':
    '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>',
  landmark:
    '<line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',
  'calendar-days':
    '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/>',
  calendar:
    '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  map: '<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
  'mail-question':
    '<path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"/><path d="M20 22v.01"/>',
  'arrow-left-right':
    '<path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/>',
  history:
    '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  sparkles:
    '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>',
  network:
    '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',
  'circle-check-big': '<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>',
  'log-in':
    '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/>',
  'book-open':
    '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
};

/* ── 1. Hero ─────────────────────────────────────────────────────── */

export interface HeroContent {
  headlineLines: string[];
  sub: string;
  /** Opens the demo dialog (bcn-demo-dialog) — a button, not a link. */
  primaryCta: { label: string };
  badge: string;
}

export const HERO: HeroContent = {
  headlineLines: ['Environmental compliance can be a knot.', 'Beacon untangles it.'],
  sub: "Nobody should need a day and three spreadsheets to answer what's due next month. Beacon keeps every requirement, the work behind it, and the evidence together — for as long as the project runs.",
  primaryCta: { label: 'Schedule a Demo' },
  badge: 'Built by ESA — 50+ years of environmental science',
};

/* ── 2. Scale stats ──────────────────────────────────────────────── */

export interface ScaleStat {
  /** lucide glyph key into MARKETING_ICON_PATHS (or a registry name). */
  icon: string;
  value: string;
  label: string;
}

export const SCALE_STATS: ScaleStat[] = [
  { icon: 'file-text', value: '98+', label: 'Permits on a single reservoir project' },
  { icon: 'clipboard-list', value: '1,000s', label: 'Tracked actions across a major tunnel project' },
  { icon: 'landmark', value: '12+', label: 'Agencies with overlapping jurisdiction' },
  { icon: 'calendar-days', value: '10+ yrs', label: 'Of ongoing monitoring obligations' },
];

/* ── 3. Challenges ───────────────────────────────────────────────── */

export interface Challenge {
  icon: string;
  question: string;
  description: string;
}

export const CHALLENGES: Challenge[] = [
  {
    icon: 'clock',
    question: '“Where are we on that CDFW deadline?”',
    description:
      "Permit deadlines are scattered across different documents and calendars. Nobody has a single view of what's due, when, and whether it's on track.",
  },
  {
    icon: 'map',
    question: '“Which parcels still need pre-construction surveys?”',
    description:
      "The same action repeats across dozens of locations and phases. Tracking which have been done — and which haven't — means cross-referencing multiple spreadsheets.",
  },
  {
    icon: 'leaf',
    question: '“Can we start grading on Parcel 12 or is the nesting bird window still open?”',
    description:
      'Seasonal restrictions vary by species, location, and permit. Knowing whether construction can proceed on a given parcel on a given date requires checking multiple sources.',
  },
  {
    icon: 'mail-question',
    question: '“Did USACE sign off on the revised mitigation plan or are we still waiting?”',
    description:
      'Agency approvals live in email threads and shared drives. Tracking which submittals have been sent, reviewed, and approved across multiple agencies is a full-time job.',
  },
  {
    icon: 'arrow-left-right',
    question: '“Does the 404 permit have the same setback as the ITP, or are they different?”',
    description:
      'Different permits from different agencies impose overlapping but inconsistent requirements. Reconciling them requires reading the original permit language every time.',
  },
  {
    icon: 'history',
    question: '“We finished construction two years ago — what monitoring reports are still due?”',
    description:
      "Post-construction monitoring obligations can run for a decade. Without a system of record, teams lose track of what's still owed long after the hard hats come off.",
  },
];

/* ── 4. Contrast (before / after) ────────────────────────────────── */

export const CONTRAST_WITHOUT: string[] = [
  'Permit conditions scattered across spreadsheets, PDFs, and email',
  'No traceability from an action back to its source permit language',
  'Deadline tracking relies on individual calendars and memory',
  'Audit preparation takes weeks of gathering scattered documentation',
];

export const CONTRAST_WITH: string[] = [
  'All commitments centralized with complete chain of evidence',
  'Every action links back to its source document and commitment text',
  'Automated scheduling across phases, components, and seasons',
  'Audit-ready reports generated in minutes, not weeks',
];

export type MockStatus = 'done' | 'active' | 'pending';

export interface MockRow {
  status: MockStatus;
  label: string;
  badge: string;
}

/** Rows of the illustrative product-window mock inside the "With Beacon" card. */
export const CONTRAST_MOCK_ROWS: MockRow[] = [
  { status: 'done', label: 'Pre-construction bird survey — Parcel 7', badge: 'Complete' },
  { status: 'done', label: 'Giant garter snake clearance — Parcel 3', badge: 'Complete' },
  { status: 'active', label: 'Nesting bird check — Dam Site', badge: 'In Progress' },
  { status: 'pending', label: 'SWPPP annual report', badge: 'Upcoming' },
];

/* ── 5. Solution phases ──────────────────────────────────────────── */

export interface SolutionPhase {
  icon: string;
  /** Marketing-only categorical accent for the phase medallion (specimen step ramp). */
  accent: string;
  title: string;
  description: string;
}

export const SOLUTION_PHASES: SolutionPhase[] = [
  {
    icon: 'sparkles',
    accent: '#003f5c',
    title: 'Catalog',
    description:
      "Upload source documents. Beacon's AI guide, Aldo, extracts commitments and identifies requirements — turning dense permit language into structured, trackable data.",
  },
  {
    icon: 'network',
    accent: '#a05195',
    title: 'Plan',
    description:
      'Decompose requirements into actions. Assign to teams. Map to components, phases, and seasons. Set milestones and define what "done" looks like.',
  },
  {
    icon: 'circle-check-big',
    accent: '#ffa600',
    title: 'Execute',
    description:
      'Track field work and desk work. Collect evidence — photos, reports, signed forms. Prove completion. Generate compliance reports for agencies.',
  },
];

/* ── 6. Markets ──────────────────────────────────────────────────── */

export interface MarketCard {
  image: string;
  alt: string;
  title: string;
  description: string;
  linkLabel: string;
  href: string;
}

export const MARKETS: MarketCard[] = [
  {
    image: '/images/marketing/market-airports.jpg',
    alt: 'SFO Shoreline Protection Program',
    title: 'Airports & Aviation',
    description:
      'Noise management, wildlife mitigation, and environmental compliance across 200+ airports nationwide.',
    linkLabel: 'Beacon for Airports',
    href: 'https://esassoc.com/market/airports-aviation/',
  },
  {
    image: '/images/marketing/market-community.jpg',
    alt: 'Innovation Park Sacramento',
    title: 'Community Development',
    description:
      'Climate adaptation, housing, infrastructure resilience, and environmental planning from vision to project delivery.',
    linkLabel: 'Beacon for Communities',
    href: 'https://esassoc.com/market/community-development/',
  },
  {
    image: '/images/marketing/market-energy.jpg',
    alt: 'Antelope Valley energy production',
    title: 'Energy',
    description:
      'Solar, wind, battery storage, transmission, and emerging technologies — licensing, permitting, and restoration.',
    linkLabel: 'Beacon for Energy',
    href: 'https://esassoc.com/market/energy/',
  },
  {
    image: '/images/marketing/market-natural-resources.jpg',
    alt: 'Spanish Creek forest restoration',
    title: 'Natural Resource Management',
    description:
      'Tidal wetland restoration, forest resiliency, species conservation — from headwaters to coast.',
    linkLabel: 'Beacon for Natural Resources',
    href: 'https://esassoc.com/market/natural-resource-management/',
  },
  {
    image: '/images/marketing/market-transportation.jpg',
    alt: 'Brooks Bridge replacement construction',
    title: 'Transportation & Ports',
    description:
      'Roads, transit, freight rail, and waterways — strategic permitting for multi-phased design-build projects.',
    linkLabel: 'Beacon for Transportation',
    href: 'https://esassoc.com/market/surface-transportation-and-ports/',
  },
  {
    image: '/images/marketing/market-water.jpg',
    alt: 'Flood-managed aquifer recharge',
    title: 'Water',
    description:
      'Supply, conveyance, wastewater reuse, flood control, and fish passage — integrated solutions for water resilience.',
    linkLabel: 'Beacon for Water',
    href: 'https://esassoc.com/market/water/',
  },
];

/* ── 7. Dot map projects ─────────────────────────────────────────── */

export interface DotMapProject {
  name: string;
  /** Short display name on the map hover pill (falls back to name). */
  mapLabel?: string;
  lng: number;
  lat: number;
  color: string;
  tagline: string;
  /** Hover-pill placement relative to the marker. */
  label: { dx: number; dy: number; anchor: 'start' | 'end' };
}

export const DOT_MAP_PROJECTS: DotMapProject[] = [
  {
    name: 'Delta Conveyance',
    lng: -121.61,
    lat: 37.78,
    color: '#4ade80',
    tagline:
      "Tunnel boring and intake construction for 27M Californians' water supply — tracking fish screen compliance for delta smelt, longfin smelt, and winter-run Chinook.",
    label: { dx: 16, dy: 1, anchor: 'start' },
  },
  {
    name: 'Sites Reservoir',
    lng: -122.15,
    lat: 39.25,
    color: '#4ade80',
    tagline:
      "Off-stream dam and canal construction — monitoring giant garter snake avoidance, Swainson's hawk nesting buffers, and bald eagle setbacks across eight agencies.",
    label: { dx: 16, dy: 1, anchor: 'start' },
  },
  {
    name: 'SFO Shoreline Protection',
    mapLabel: 'SFO',
    lng: -122.38,
    lat: 37.62,
    color: '#4ade80',
    tagline:
      "Levee construction and tidal marsh restoration defending airport infrastructure from sea-level rise — salt marsh harvest mouse and Ridgway's rail mitigation.",
    label: { dx: -16, dy: 1, anchor: 'end' },
  },
  {
    name: 'Lake Tahoe Basin Restoration',
    mapLabel: 'Lake Tahoe',
    lng: -120.04,
    lat: 39.09,
    color: '#4ade80',
    tagline:
      'Watershed erosion control and stream restoration to preserve lake clarity — Lahontan cutthroat trout reintroduction.',
    label: { dx: 16, dy: 1, anchor: 'start' },
  },
];

/* ── 8. CTA paths ────────────────────────────────────────────────── */

export interface CtaPath {
  icon: string;
  title: string;
  description: string;
  button: { label: string; href: string };
  featured?: boolean;
}

export const CTA_PATHS: CtaPath[] = [
  {
    icon: 'log-in',
    title: 'Existing Client?',
    description:
      'Log in to your Beacon project dashboard to manage commitments, track actions, and generate reports.',
    button: { label: 'Go to Beacon', href: '#' },
  },
  {
    icon: 'calendar',
    title: 'Schedule a Demo',
    description:
      'See Beacon in action with a walkthrough tailored to your project type and compliance needs.',
    button: { label: 'Request a Demo', href: '#' },
    featured: true,
  },
  {
    icon: 'book-open',
    title: 'Explore the Problem',
    description:
      'Learn why environmental compliance for infrastructure projects needs purpose-built software, not spreadsheets.',
    button: { label: 'Why Beacon?', href: '#' },
  },
];
