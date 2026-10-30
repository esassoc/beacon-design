// The Permits grid theme: beaconTheme (src/lib/beacon-grid.ts) with a quiet header.
//
// Beacon's grids carry a filled teal header band. In Permits every grid sits inside a
// card whose own header already names it, so a second solid band stacks two headings on
// top of each other. This is the same call settingsEsaTheme makes for ESA settings
// cards: a light header in the row ink, a hairline under it, and everything else
// (DM Sans, 13px rows, zebra, borders, the Lucide funnel, the ESA-orange accent) kept
// from beaconTheme. Literal hex because AG Grid resolves theme params at config time.
import { beaconTheme } from '../../lib/beacon-grid';

export const permitsGridTheme = beaconTheme.withParams({
  headerBackgroundColor: '#f4f7f7', // ESA site's #f4fbfb, pulled toward neutral
  headerTextColor: '#3d3d3d', // gray-900, the rows' own ink
  headerRowBorder: '1px solid #dcdcdc', // gray-200
  headerColumnResizeHandleColor: '#dcdcdc',
  headerHeight: 44,
  rowHoverColor: '#effaf9', // --esa-teal-50
  selectedRowBackgroundColor: '#ddf3f1', // --esa-teal-100
});
