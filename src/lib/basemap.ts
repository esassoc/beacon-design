// Shared Leaflet basemap tile source for every map in the spoke.
//
// CARTO's free, keyless "light_all" tiles (the basemap every Leaflet map here used
// to share) now serve a watermarked "API KEY REQUIRED" image baked into the PNG
// itself, regardless of caller — confirmed 2026-08-27 by fetching the tile URL
// directly, outside the app, with a fresh HTTP request (200 OK, cached at CARTO's
// own CDN edge, watermark still present). Not a rate limit from this app's usage —
// CARTO has gated the endpoint. Replaced with Mapbox's "Light" style, the closest
// visual match to CARTO Positron's quiet gray (see design-principles' neutral-
// chrome rule) and the one every map in the spoke now shares from this one place
// instead of seven separate hardcoded tile URLs.
//
// Needs PUBLIC_MAPBOX_TOKEN in .env (see .env.example) — a public token (starts
// "pk."), safe to ship client-side; Mapbox scopes/rate-limits it on their end, not
// via secrecy.
export const BASEMAP_TILE_URL = `https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}{r}?access_token=${import.meta.env.PUBLIC_MAPBOX_TOKEN}`;

export const BASEMAP_ATTRIBUTION =
  '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
