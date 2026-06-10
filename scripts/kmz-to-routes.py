#!/usr/bin/env python3
"""
kmz-to-routes.py — extract the `Routes` folder of an AWS path KMZ into
src/data/aws-routes.json (GeoJSON FeatureCollection the map fixture consumes).

Usage:
    python3 scripts/kmz-to-routes.py "~/Downloads/Phase-1 05.27 - Paths 1_2_3_4.kmz"

What it does (and why):
  - Only the `Routes` folder is permit-relevant — Proposed Sites / Existing
    Network are context layers we don't track.
  - The KMZ is messy by nature: "Path 1 Day 1" and "Path 1 Day 2" repeat the
    same IIG segments (1A/1B), names are "Untitled Path 1E", and the lone
    "Path 4A" segment is filed inside Path 1's folder. This script normalizes:
      * dedupe identical segments across Day 1 / Day 2 (merging their phases)
      * "Untitled Path 1E" → name "Segment 1E", id "seg-1e"
      * 4A is promoted to its own line, "Path 4" (per the file name's
        "Paths 1_2_3_4"); "Path 3 Risk Mitigation" folds into Path 3 as a phase
      * contractor (Fishel / IIG / Windwave) + build spec kept from subfolders
  - lengthFt is recomputed from geometry (haversine), coordinates are GeoJSON
    [lng, lat] rounded to 5 decimals (~1 m).
  - Jurisdiction is a centroid heuristic (WA/OR line ~46.0°N; Columbia River
    ~-119.02°W splits Benton/Walla Walla) — curate per-segment overrides in
    map-fixture.ts, not here.
"""

import json
import math
import re
import sys
import zipfile
from io import BytesIO
from pathlib import Path

try:  # hardened parser if available (XXE / entity-expansion safe)
    import defusedxml.ElementTree as ET
except ImportError:  # stdlib fallback — fine for KMZs you produced/trust
    import xml.etree.ElementTree as ET

NS = {'k': 'http://www.opengis.net/kml/2.2'}
OUT = Path(__file__).resolve().parent.parent / 'src' / 'data' / 'aws-routes.json'

# KMZ folder name → (line, phase). 4A gets re-homed to Path 4 in handle_pm.
FOLDER_MAP = {
    'Path 1 Day 1': ('Path 1', 'Day 1'),
    'Path 1 Day 2': ('Path 1', 'Day 2'),
    'Path 2': ('Path 2', 'Day 1'),
    'Path 3': ('Path 3', 'Day 1'),
    'Path 3 Risk Mitigation': ('Path 3', 'Risk Mitigation'),
}


def name_of(el):
    n = el.find('k:name', NS)
    return (n.text or '').strip() if n is not None else ''


def haversine_ft(a, b):
    R = 20902231  # earth radius, feet
    lat1, lon1, lat2, lon2 = map(math.radians, [a[1], a[0], b[1], b[0]])
    h = math.sin((lat2 - lat1) / 2) ** 2 + math.cos(lat1) * math.cos(lat2) * math.sin((lon2 - lon1) / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))


def jurisdiction(centroid):
    lon, lat = centroid
    if lat >= 46.0:
        return 'Benton County, WA' if lon < -119.02 else 'Walla Walla County, WA'
    return 'Umatilla County, OR'


def main():
    src = Path(sys.argv[1]).expanduser()
    with zipfile.ZipFile(src) as z:
        kml = next(n for n in z.namelist() if n.endswith('.kml'))
        root = ET.parse(BytesIO(z.read(kml))).getroot()

    routes = next(f for f in root.iter('{http://www.opengis.net/kml/2.2}Folder') if name_of(f) == 'Routes')

    features = {}
    for path_folder in routes.findall('k:Folder', NS):
        line, phase = FOLDER_MAP[name_of(path_folder)]

        def handle_pm(pm, subgroup, line=line, phase=phase):
            ls = pm.find('.//k:LineString', NS)
            if ls is None:
                return  # skip Points/Polygons (e.g. the BLM polygon under Path 3)
            raw = name_of(pm)
            m = re.search(r'Path\s+(\d)([A-Z])', raw)
            if m:
                code = f'{m.group(1)}{m.group(2)}'
                seg_id, seg_name = f'seg-{code.lower()}', f'Segment {code}'
                if m.group(1) == '4':
                    line = 'Path 4'  # filed under Path 1 in the KMZ; the file name says Paths 1_2_3_4
            else:
                seg_id, seg_name = 'seg-eas', 'Easements Reach'

            contractor = subgroup.split(' Proposed')[0].split(' Build')[0] if subgroup else ''
            spec = (re.search(r'\(([^)]+)\)', subgroup or '') or [None]) and (
                re.search(r'\(([^)]+)\)', subgroup or '').group(1) if subgroup and '(' in subgroup else ''
            )

            if seg_id in features:  # Day 1 / Day 2 repeat the same IIG segments
                phases = features[seg_id]['properties']['phases']
                if phase not in phases:
                    phases.append(phase)
                return

            pts = []
            for tok in ls.find('k:coordinates', NS).text.split():
                lon, lat = tok.split(',')[:2]
                pts.append([round(float(lon), 5), round(float(lat), 5)])
            length = round(sum(haversine_ft(pts[i], pts[i + 1]) for i in range(len(pts) - 1)))
            cx = sum(p[0] for p in pts) / len(pts)
            cy = sum(p[1] for p in pts) / len(pts)

            features[seg_id] = {
                'type': 'Feature',
                'properties': {
                    'id': seg_id,
                    'name': seg_name,
                    'line': line,
                    'phases': [phase],
                    'contractor': contractor,
                    'buildSpec': spec,
                    'jurisdiction': jurisdiction((cx, cy)),
                    'lengthFt': length,
                    'sourceName': raw,
                },
                'geometry': {'type': 'LineString', 'coordinates': pts},
            }

        for pm in path_folder.findall('k:Placemark', NS):
            handle_pm(pm, None)
        for sub in path_folder.findall('k:Folder', NS):
            for pm in sub.findall('k:Placemark', NS):
                handle_pm(pm, name_of(sub))

    ordered = sorted(features.values(), key=lambda f: (f['properties']['line'], f['properties']['name']))
    OUT.write_text(json.dumps({'type': 'FeatureCollection', 'features': ordered}, indent=None) + '\n')

    print(f'{len(ordered)} segments → {OUT}')
    for f in ordered:
        p = f['properties']
        c = f['geometry']['coordinates']
        print(
            f"  {p['id']:<8} {p['name']:<16} {p['line']:<7} {'+'.join(p['phases']):<22} "
            f"{p['contractor']:<9} {p['jurisdiction']:<22} {p['lengthFt']:>8,} ft  "
            f"start({c[0][1]:.3f},{c[0][0]:.3f}) end({c[-1][1]:.3f},{c[-1][0]:.3f})"
        )
    total = sum(f['properties']['lengthFt'] for f in ordered)
    print(f'  total: {total:,} ft ({total / 5280:.1f} mi)')


if __name__ == '__main__':
    main()
