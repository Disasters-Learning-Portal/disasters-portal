import type { FooterProps } from "@teamimpact/veda-ui-blocks";
import { Image } from "@/app/components/Image";

import { withBasePath } from "@/app/site-config/base-path";

// The Footer renders plain <a> elements, so internal hrefs need the base path
// applied manually — Next only prefixes next/link for us.
const primaryNavItems: FooterProps["primaryNavItems"] = [
  { label: "About Us", href: withBasePath("/about") },
  { label: "Data Gallery", href: withBasePath("/data-gallery") },
  { label: "News & Events", href: withBasePath("/news-events") },
  { label: "Training", href: withBasePath("/training") },
];

const secondaryNavItems: FooterProps["secondaryNavItems"] = [
  {
    label: "Image Use Policy",
    href: "https://www.nasa.gov/nasa-brand-center/images-and-media/",
    isExternal: true,
  },
  {
    label: "Privacy Policy",
    href: "https://www.nasa.gov/nasa-web-privacy-policy-and-important-notices/",
    isExternal: true,
  },
];

const utilityNavItems: FooterProps["utilityNavItems"] = [
  { label: "Visit nasa.gov", href: "https://www.nasa.gov", isExternal: true },
];

const portalDetails: FooterProps["portalDetails"] = {
  contacts: [
    {
      label: "Page Manager:",
      name: "Jacob Reed",
      email: "jacob.reed@nasa.gov",
    },
    {
      label: "NASA Responsible Official:",
      name: "Shanna McClain",
      email: "shanna.n.mcclain@nasa.gov",
    },
  ],
  logo: <Image src="/img/logo-emblem.svg" alt="Disasters.gov" width={121} height={124} priority />,
  title: "NASA Disasters PORTAL",
  tagline: "Partnership-Oriented Resource for Training, Analysis, and Learning",
  updatedDate: "June 1, 2026",
};

export const MOCK_FOOTER_PROPS: FooterProps = {
  portalDetails,
  primaryNavItems,
  secondaryNavItems,
  utilityNavItems,
};
