// The Monitoring Portal dashboard's saved layout — ONE record, read by the
// dashboard (apply) and written by the Customize composer (Save layout) and the
// widget ⋯ menu (width / remove shortcuts). Client-side only.
import {
  DASHBOARD_CONFIG_KEY,
  defaultDashboardConfig,
  type DashboardConfig,
} from '../data/monitoring-streams';

export type { DashboardConfig };
export { defaultDashboardConfig };

/** Read the saved layout, merged over registry defaults. A bad or missing read
 *  returns the defaults — the dashboard must render, never break. */
export const readDashboardConfig = (): DashboardConfig => {
  const fallback = defaultDashboardConfig();
  try {
    const raw = localStorage.getItem(DASHBOARD_CONFIG_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as Partial<DashboardConfig>;
    if (!parsed || typeof parsed !== 'object' || !parsed.widgets) return fallback;
    // Ids missing from the saved record append in registry order.
    const order = [...(parsed.order ?? [])].filter((id) => fallback.order.includes(id));
    for (const id of fallback.order) if (!order.includes(id)) order.push(id);
    return { order, widgets: { ...fallback.widgets, ...parsed.widgets } };
  } catch {
    return fallback;
  }
};

export const writeDashboardConfig = (config: DashboardConfig): void => {
  try {
    localStorage.setItem(DASHBOARD_CONFIG_KEY, JSON.stringify(config));
  } catch {
    /* private mode — the session still works, the layout just won't persist */
  }
};
