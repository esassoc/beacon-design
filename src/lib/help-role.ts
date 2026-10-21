// Who is looking at help, in the prototype (round 17d). Help content (dots, the terms a
// page lists) is ESA-authored and the same for every tenant (BCN-1513), so authoring it is
// an ESA admin's job. A page's description is the tenant's own custom rich text, which the
// tenant's admins edit. ESA admins can do both.
//
//   ?as=esa-admin     ESA admin: everything (`?as=admin` is kept as an alias)
//   ?as=tenant-admin  tenant admin: the page description only
//   (none)            reader
export type HelpRole = 'reader' | 'esa-admin' | 'tenant-admin';

export function helpRole(): HelpRole {
  const as = new URLSearchParams(location.search).get('as');
  if (as === 'esa-admin' || as === 'admin') return 'esa-admin';
  if (as === 'tenant-admin') return 'tenant-admin';
  return 'reader';
}

/** Authors ESA help content: dots, drafts, page terms. */
export const isEsaAdmin = (): boolean => helpRole() === 'esa-admin';

/** Edits the tenant's own page description. */
export const canEditTenantText = (): boolean => helpRole() !== 'reader';
