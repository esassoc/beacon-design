// season-overlap — positions <BcnSeasonOverlap>'s pre-rendered bars, band and ticks
// for a date range, and flips each season's verdict. Pure DOM positioning; the
// verdict itself is seasonOverlaps() from the fixture, the same function the
// recommendation uses, so the chart and the reasons cannot disagree.
import { PROJECT_SEASONS, seasonOverlaps } from '../../data/component-commitments';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAY = 86_400_000;
const utc = (y: number, m: number, d: number) => Date.UTC(y, m - 1, d);
const parse = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return { y, m, d, t: utc(y, m, d) };
};

export function paintSeasonOverlap(root: HTMLElement, startIso: string, endIso: string): void {
  if (!startIso || !endIso) return;
  const s = parse(startIso);
  const e = parse(endIso);
  if (e.t < s.t) return;

  // Axis: the first of the start month, twelve months or as long as the work runs.
  const axisStart = utc(s.y, s.m, 1);
  const spanMonths = (e.y - s.y) * 12 + (e.m - s.m) + 1;
  const months = Math.max(12, spanMonths);
  const axisEnd = utc(s.y, s.m + months, 1);
  const total = axisEnd - axisStart;
  const pct = (t: number) => ((Math.min(Math.max(t, axisStart), axisEnd) - axisStart) / total) * 100;

  // Ticks: every month up to two years, then every quarter.
  const step = months <= 24 ? 1 : 3;
  const ticks = root.querySelectorAll<HTMLElement>('[data-so-tick]');
  ticks.forEach((el, i) => {
    const offset = i * step;
    if (offset >= months) {
      el.hidden = true;
      return;
    }
    const t = utc(s.y, s.m + offset, 1);
    const dt = new Date(t);
    el.hidden = false;
    el.style.left = `${pct(t + 15 * DAY)}%`;
    const mo = MONTHS[dt.getUTCMonth()];
    el.textContent = dt.getUTCMonth() === 0 || i === 0 ? `${mo} ’${String(dt.getUTCFullYear()).slice(2)}` : mo;
    // Thin out labels when months are many so they never collide.
    if (months > 12 && step === 1 && i % 2 === 1) el.hidden = true;
  });

  for (const season of PROJECT_SEASONS) {
    const track = root.querySelector<HTMLElement>(`[data-so-track="${season.id}"]`);
    if (!track) continue;
    const segs = Array.from(track.querySelectorAll<HTMLElement>('[data-so-seg]'));
    const wraps = season.endMonth * 100 + season.endDay < season.startMonth * 100 + season.startDay;
    const occurrences: [number, number][] = [];
    for (let y = s.y - 1; y <= e.y + Math.ceil(months / 12); y++) {
      const a = utc(y, season.startMonth, season.startDay);
      const b = utc(wraps ? y + 1 : y, season.endMonth, season.endDay) + DAY;
      if (b > axisStart && a < axisEnd) occurrences.push([a, b]);
    }
    segs.forEach((seg, i) => {
      const occ = occurrences[i];
      seg.hidden = !occ;
      if (!occ) return;
      seg.style.left = `${pct(occ[0])}%`;
      seg.style.width = `${Math.max(0.8, pct(occ[1]) - pct(occ[0]))}%`;
    });
    const band = track.querySelector<HTMLElement>('[data-so-band]')!;
    band.style.left = `${pct(s.t)}%`;
    band.style.width = `${Math.max(0.8, pct(e.t + DAY) - pct(s.t))}%`;

    const verdict = root.querySelector<HTMLElement>(`[data-so-verdict="${season.id}"]`);
    const yes = seasonOverlaps(season, startIso, endIso);
    verdict?.querySelector<HTMLElement>('[data-so-yes]')?.toggleAttribute('hidden', !yes);
    verdict?.querySelector<HTMLElement>('[data-so-no]')?.toggleAttribute('hidden', yes);
  }
}
