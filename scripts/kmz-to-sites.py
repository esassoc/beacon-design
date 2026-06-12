#!/usr/bin/env python3
"""
kmz-to-sites.py — extract the proposed-exploration placemarks of the DWR DCP
geotech KMZ into src/data/geotech-sites.json (GeoJSON FeatureCollection the
geotech fixture consumes).

Usage:
    python3 scripts/kmz-to-sites.py [path/to.kmz]
    # default: ~/Downloads/DCP_Proposed_Explorations_2026_Program.kmz

What it does (and why):
  - The KMZ is an ESRI export: every <Placemark> has an EMPTY <name>. The
    attributes live in each placemark's HTML <description> table as
    label/value <td> pairs, so we regex those cells out (html-unescaped,
    stripped):
      * ExporationID (sic — the source layer's typo) → id
      * ExplorationMethod → method (e.g. Boring, CPT)
      * Depth (ft) → depthFt (number | null when absent/non-numeric)
      * ParcelAPN → parcelApn, DCPN → dcpn, County → county,
        EntryAgreement → entryAgreement
  - Some placemarks repeat an ExporationID already seen — dedupe keeping the
    FIRST occurrence, report the drop count.
  - Coordinates are GeoJSON [lng, lat] rounded to 6 decimals (~0.1 m — point
    sites feed buffer-distance math in the fixture, so keep them tight).
  - Output is stable-sorted by id; a prefix histogram prints so segment
    coverage is eyeball-able (DCTR1..4, DCRDS, DCRAI, DCSHF, DCBPP, ...).
"""

import html
import json
import re
import sys
import zipfile
from collections import Counter
from io import BytesIO
from pathlib import Path

try:  # hardened parser if available (XXE / entity-expansion safe)
    import defusedxml.ElementTree as ET
except ImportError:  # stdlib fallback — fine for KMZs you produced/trust
    import xml.etree.ElementTree as ET

NS = {'k': 'http://www.opengis.net/kml/2.2'}
OUT = Path(__file__).resolve().parent.parent / 'src' / 'data' / 'geotech-sites.json'
DEFAULT_SRC = '~/Downloads/DCP_Proposed_Explorations_2026_Program.kmz'

# description-table label → output property name
FIELDS = {
    'ExporationID': 'id',  # sic — typo lives in the source layer
    'ExplorationMethod': 'method',
    'ParcelAPN': 'parcelApn',
    'DCPN': 'dcpn',
    'County': 'county',
    'EntryAgreement': 'entryAgreement',
}


def cell(desc, label):
    """Value <td> following the label <td>, html-decoded + stripped (or None)."""
    m = re.search(rf'<td>{re.escape(label)}</td>\s*<td>(.*?)</td>', desc, re.S)
    if m is None:
        return None
    val = html.unescape(re.sub(r'<[^>]+>', '', m.group(1))).strip()
    return val or None


def main():
    src = Path(sys.argv[1] if len(sys.argv) > 1 else DEFAULT_SRC).expanduser()
    with zipfile.ZipFile(src) as z:
        kml = next(n for n in z.namelist() if n.endswith('.kml'))
        root = ET.parse(BytesIO(z.read(kml))).getroot()

    features = {}
    dropped = 0
    for pm in root.iter('{http://www.opengis.net/kml/2.2}Placemark'):
        desc_el = pm.find('k:description', NS)
        coords_el = pm.find('.//k:Point/k:coordinates', NS)
        if desc_el is None or coords_el is None:
            continue  # not a site placemark
        desc = desc_el.text or ''

        props = {out: cell(desc, label) for label, out in FIELDS.items()}
        site_id = props['id']
        if not site_id:
            print(f"  ! skipping {pm.get('id')}: no ExporationID in description", file=sys.stderr)
            continue
        if site_id in features:  # repeat of an ID already seen — keep the first
            dropped += 1
            continue

        depth_raw = cell(desc, 'Depth')
        try:
            depth = float(depth_raw)
            props['depthFt'] = int(depth) if depth.is_integer() else depth
        except (TypeError, ValueError):
            props['depthFt'] = None

        lon, lat = coords_el.text.split(',')[:2]
        features[site_id] = {
            'type': 'Feature',
            'properties': {
                'id': site_id,
                'method': props['method'],
                'depthFt': props['depthFt'],
                'parcelApn': props['parcelApn'],
                'dcpn': props['dcpn'],
                'county': props['county'],
                'entryAgreement': props['entryAgreement'],
            },
            'geometry': {'type': 'Point', 'coordinates': [round(float(lon), 6), round(float(lat), 6)]},
        }

    ordered = sorted(features.values(), key=lambda f: f['properties']['id'])
    OUT.write_text(json.dumps({'type': 'FeatureCollection', 'features': ordered}, indent=None) + '\n')

    print(f'{len(ordered)} sites → {OUT}  ({dropped} duplicate-ID placemarks dropped)')
    prefixes = Counter(f['properties']['id'].split('-')[0] for f in ordered)
    for prefix, n in sorted(prefixes.items()):
        print(f'  {prefix:<6} {n:>3}')


if __name__ == '__main__':
    main()
