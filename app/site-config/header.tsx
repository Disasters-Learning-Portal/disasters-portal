import type { HeaderProps } from "@teamimpact/veda-ui-blocks";
import { Image } from "@/app/components/Image";

import { withBasePath } from "@/app/site-config/base-path";

// The Header renders plain <a> elements, so hrefs need the base path applied
// manually — Next only prefixes next/link for us.
const MOCK_NAV_ITEM_WITH_DROPDOWN_1 = [
  {
    label: "Explore By Need",
    subItems: [
      { label: "Prepare", href: withBasePath("/prepare") },
      { label: "Respond", href: withBasePath("/respond") },
      { label: "Recover", href: withBasePath("/recover") },
      { label: "Build Resilience", href: withBasePath("/resilience") },
    ],
  },
];

const MOCK_NAV_ITEM_WITH_DROPDOWN_2 = [
  {
    label: "Explore Data",
    subItems: [
      { label: "Data Gallery", href: withBasePath("/data-gallery") },
      { label: "Data Visualization", href: withBasePath("/data-visualization") },
      { label: "Data Processing", href: withBasePath("/data-processing") },
    ],
  },
];
const MOCK_NAV_ITEM_WITH_DROPDOWN_3 = [
  {
    label: "Resources & Learning",
    subItems: [
      { label: "Training", href: withBasePath("/training") },
      { label: "News, Events & Stories", href: withBasePath("/news-events") },
    ],
  },
];

export const MOCK_HEADER_PROPS: HeaderProps = {
  portalDetails: {
    logo: <Image src="/img/logo-header.png" alt="Disasters.gov" width={148} height={52} />,
    url: withBasePath("/"),
  },
  navItems: [
    { label: "About Us", href: withBasePath("/about") },
    ...MOCK_NAV_ITEM_WITH_DROPDOWN_1,
    ...MOCK_NAV_ITEM_WITH_DROPDOWN_2,
    ...MOCK_NAV_ITEM_WITH_DROPDOWN_3,
  ],
};
