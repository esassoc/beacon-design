// The Monitoring Portal dashboard's saved layout — ONE record, read by the
// dashboard (apply) and written by the Customize composer (Save layout) and the
// widget ⋯ menu (width / remove shortcuts). Client-side only.
import {
  DASHBOARD_CONFIG_KEY,
  defaultDashboardConfig,
  instanceType,
  widgetById,
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
    // Validate by TYPE, not by instance id. This filter used to require the id
    // itself to exist in the defaults, which silently discarded every ADDED
    // instance (`obs-active~2`) on reload — the ids are legitimate but by
    // definition absent from the default board. Resolving the type still drops a
    // genuinely stale id (a widget that was renamed or retired), which is the
    // protection the filter was there for.
    const order = [...(parsed.order ?? [])].filter((id) => {
      const w = parsed.widgets?.[id];
      return Boolean(widgetById(w?.type ?? instanceType(id)));
    });
    // Ids missing from the saved record append in registry order.
    for (const id of fallback.order) if (!order.includes(id)) order.push(id);
    // Same rule for the record itself, so a retired widget's config cannot linger.
    const widgets = Object.fromEntries(
      Object.entries({ ...fallback.widgets, ...parsed.widgets }).filter(([id, w]) =>
        Boolean(widgetById(w?.type ?? instanceType(id))),
      ),
    ) as DashboardConfig['widgets'];
    return { order, widgets };
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
