// The design layer's controls for beacon-design (@esa/design-layer). The type
// rows and lengths are the hub defaults. Only the chrome differs: AppShell's top
// bar paints from --bcn-gray-100 rather than a tier-2 role, the sidenav shares
// the canvas (--color-background-default), and the raised role stays the card
// and "white" fill it already is here.
import { defineConfig } from '@esa/design-layer/defaults';

export default defineConfig({
  roles: {
    bar: ['--bcn-gray-100'],
    rail: [],
    canvas: ['--color-background-default'],
    raised: ['--color-background-elevation-raised', '--color-background-elevation-floating'],
    sunken: ['--color-background-elevation-sunken'],
  },
});
