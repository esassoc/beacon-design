// Project Almond's three-phase lifecycle identity (Due Diligence -> Permitting ->
// Compliance Tracking), shared by every phase's page so the "current phase" chip
// reads consistently everywhere it appears. Same mechanism BcnProjectHeader already
// uses for a project's phase (BcnStatusChip driven by a {label, hex} pair) — reused
// here rather than a new indicator, per the same bcn-lego-checked discipline.
//
// For this demo, the chip shown on a given page reflects the MODULE that page
// belongs to, not a single live "project.phase" field — Due Diligence pages always
// show Due Diligence, Permitting always shows Permitting, so the lifecycle can be
// demoed by simply navigating between modules.
export type ProjectPhaseKey = 'due-diligence' | 'permitting' | 'compliance-tracking';

export const PROJECT_PHASES: Record<ProjectPhaseKey, { label: string; hex: string }> = {
  'due-diligence': { label: 'Due Diligence', hex: '#4a90d9' },
  permitting: { label: 'Permitting', hex: '#7b5ea7' },
  'compliance-tracking': { label: 'Compliance Tracking', hex: '#2e7571' },
};
