// A category's hue in step 3's index: one family per category (--bcn-cat-* in
// theme-beacon.css), shown as its dot in the index and its run in the scrubber.
//
// Families go out in index order the first time a category is seen and stay with it, so
// dragging a category or deleting one does not recolor the rest. A category made later
// takes the first family nobody holds.

export const CAT_FAMILIES = ['blue', 'grass', 'amber', 'violet', 'crimson', 'teal', 'orange', 'indigo', 'lime', 'plum', 'cyan', 'tomato', 'jade', 'purple', 'gold', 'sky', 'pink', 'brown'] as const;

const held = new Map<string, string>();

/** Give every category a family, in index order; call before reading hueOf. */
export function assignHues(catIds: string[]): void {
  const live = new Set(catIds);
  for (const id of [...held.keys()]) if (!live.has(id)) held.delete(id);
  for (const id of catIds) {
    if (held.has(id)) continue;
    const taken = new Set(held.values());
    const free = CAT_FAMILIES.find((f) => !taken.has(f)) ?? CAT_FAMILIES[held.size % CAT_FAMILIES.length];
    held.set(id, free);
  }
}

/** The category's swatch, as a CSS value. */
export function hueOf(catId: string): string {
  return `var(--bcn-cat-${held.get(catId) ?? 'blue'})`;
}
