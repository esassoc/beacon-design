// Help spot ids, emitted by components on the parts a help dot can sit on.
//
// A dot anchors to a spot id, never to a CSS path, so it survives a refactor of the markup
// around it: the component that renders a part keeps saying what the part is. An id names
// a KIND of part ("list-row.count"), not an instance, and the first one on the page is the
// anchor. When a refactor drops a part, its id disappears with it and the dot shows up
// under Needs a New Spot.
//
//   <span {...helpSpot('list-row.count', 'Member Count')}>…</span>

export interface HelpSpotAttrs {
  'data-help-spot': string;
  'data-help-spot-label': string;
}

/** The two attributes a part carries: its stable id and the name an admin reads. */
export const helpSpot = (id: string, label: string): HelpSpotAttrs => ({
  'data-help-spot': id,
  'data-help-spot-label': label,
});
