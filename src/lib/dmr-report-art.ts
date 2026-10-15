// Invented artwork for the Daily Monitoring Report prototype — placeholder field
// photos and two made-up logos. Nothing here depicts a real place or organization:
// the real report's agency seal and firm logo are deliberately NOT reproduced.
//
// Shared by the on-screen work-area photos, the report preview, and the PDF
// (which rasterizes these SVG strings through a canvas). Colors are illustration
// paint, not UI — they never style chrome, so they don't read the token layer.

import type { PhotoScene } from '../data/dmr-review-fixture';

const SKY = '#cfdde6';
const GROUND = '#d9c7a3';
const GROUND_DARK = '#bfa77c';
const BRUSH = '#7d8a5a';
const BRUSH_DARK = '#5f6b41';
const STEEL = '#8d949a';
const ORANGE = '#d9822b';

const ridge = `<path d="M0 70 L40 52 L75 62 L120 44 L165 60 L200 50 L200 80 L0 80Z" fill="#b9c3c4"/>`;
const ground = `<rect y="78" width="200" height="72" fill="${GROUND}"/>`;
const shrub = (x: number, y: number, r = 9) =>
  `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.7}" fill="${BRUSH}"/><ellipse cx="${x + r * 0.4}" cy="${y - 2}" rx="${r * 0.6}" ry="${r * 0.45}" fill="${BRUSH_DARK}"/>`;

const SCENES: Record<PhotoScene, string> = {
  cactus: `${ground}${shrub(30, 110)}${shrub(170, 100, 7)}
    <rect x="92" y="86" width="16" height="40" rx="8" fill="${BRUSH_DARK}"/>
    <rect x="78" y="96" width="10" height="20" rx="5" fill="${BRUSH_DARK}"/><rect x="82" y="110" width="14" height="6" fill="${BRUSH_DARK}"/>
    <rect x="112" y="92" width="10" height="18" rx="5" fill="${BRUSH_DARK}"/><rect x="104" y="104" width="12" height="6" fill="${BRUSH_DARK}"/>
    <rect x="108" y="98" width="9" height="6" fill="${ORANGE}"/>`,
  pad: `${ground}<path d="M20 150 L60 92 L150 92 L190 150Z" fill="${GROUND_DARK}"/>${shrub(15, 96, 7)}${shrub(185, 98, 8)}
    <line x1="60" y1="92" x2="60" y2="84" stroke="${ORANGE}" stroke-width="2"/><line x1="150" y1="92" x2="150" y2="84" stroke="${ORANGE}" stroke-width="2"/>`,
  grading: `${ground}<path d="M0 150 L70 100 L200 100 L200 150Z" fill="${GROUND_DARK}"/>
    <rect x="96" y="96" width="44" height="22" rx="3" fill="#e0a526"/><rect x="104" y="86" width="22" height="14" rx="2" fill="#e0a526"/>
    <rect x="80" y="112" width="20" height="6" fill="#6b6b6b"/><circle cx="104" cy="122" r="7" fill="#3d3d3d"/><circle cx="132" cy="122" r="7" fill="#3d3d3d"/>
    ${shrub(40, 104)}${shrub(28, 112, 7)}`,
  fence: `${ground}${shrub(170, 96)}
    <path d="M0 110 L60 104 L80 112" stroke="#2f2f2f" stroke-width="3" fill="none"/>
    <path d="M80 112 L120 128 L150 124" stroke="#2f2f2f" stroke-width="3" fill="none" stroke-dasharray="6 5"/>
    ${[10, 30, 50].map((x) => `<line x1="${x}" y1="96" x2="${x}" y2="112" stroke="#6e5a3a" stroke-width="3"/>`).join('')}
    <line x1="118" y1="112" x2="126" y2="132" stroke="#6e5a3a" stroke-width="3"/>`,
  drainage: `${ground}<path d="M60 150 C80 120 110 110 130 78 L150 78 C135 112 110 130 100 150Z" fill="${GROUND_DARK}"/>
    <path d="M80 150 C95 125 118 110 138 80" stroke="#a89067" stroke-width="2" fill="none"/>${shrub(40, 100)}${shrub(170, 110, 10)}`,
  poles: `${ground}${shrub(25, 100)}
    ${[0, 1, 2].map((i) => `<rect x="40" y="${104 + i * 9}" width="130" height="8" rx="4" fill="${STEEL}"/>`).join('')}
    <rect x="52" y="128" width="10" height="6" fill="#6e5a3a"/><rect x="146" y="128" width="10" height="6" fill="#6e5a3a"/>`,
  nest: `${ground}${shrub(100, 104, 26)}${shrub(70, 112, 12)}
    <circle cx="104" cy="100" r="6" fill="#8a6d45"/>
    ${[[50, 90], [150, 90], [40, 130], [160, 130]].map(([x, y]) => `<line x1="${x}" y1="${y}" x2="${x}" y2="${y - 16}" stroke="#6e5a3a" stroke-width="2"/><rect x="${x}" y="${y - 16}" width="8" height="5" fill="${ORANGE}"/>`).join('')}`,
  burrow: `${ground}${shrub(150, 98, 12)}<ellipse cx="96" cy="114" rx="34" ry="12" fill="${GROUND_DARK}"/>
    <ellipse cx="96" cy="112" rx="16" ry="8" fill="#4a3c28"/>
    <line x1="140" y1="122" x2="140" y2="104" stroke="#6e5a3a" stroke-width="2"/><rect x="140" y="104" width="8" height="5" fill="#3f8fd9"/>`,
};

/** A 4:3 placeholder field photo for a scene, as an SVG document string. */
export function photoSvg(scene: PhotoScene): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" preserveAspectRatio="xMidYMid slice"><rect width="200" height="150" fill="${SKY}"/>${ridge}${SCENES[scene]}</svg>`;
}

export function photoDataUri(scene: PhotoScene): string {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(photoSvg(scene))}`;
}

/** Invented agency seal — a shield with a basin-and-range skyline. Not a real agency's mark. */
export const AGENCY_SEAL_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <path d="M60 4 L112 22 L104 82 Q86 108 60 116 Q34 108 16 82 L8 22Z" fill="#2f4f4f"/>
  <path d="M60 12 L104 27 L97 79 Q81 101 60 108 Q39 101 23 79 L16 27Z" fill="#e9e2cf"/>
  <path d="M20 70 L38 48 L50 60 L66 38 L82 58 L92 50 L102 66 L98 80 Q82 100 60 106 Q38 100 22 80Z" fill="#7a6a4f"/>
  <path d="M24 84 Q60 72 96 84 Q82 100 60 106 Q38 100 24 84Z" fill="#b08d57"/>
  <circle cx="84" cy="36" r="7" fill="#d9822b"/>
</svg>`;

/** Invented monitoring-firm mark — three stacked field stones. */
export const FIRM_MARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <ellipse cx="60" cy="92" rx="44" ry="16" fill="#4d5b3a"/>
  <ellipse cx="58" cy="64" rx="32" ry="13" fill="#7d8a5a"/>
  <ellipse cx="62" cy="40" rx="20" ry="10" fill="#a9b07c"/>
</svg>`;

export function svgDataUri(svg: string): string {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
