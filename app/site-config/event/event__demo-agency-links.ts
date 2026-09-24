import type { EventContent } from "@/app/site-config/types";

// DEMO ONLY: review the agency links row. Delete before merging.
export const EVENT__DEMO_AGENCY_LINKS: EventContent = {
  id: "demo-agency-links",
  contentType: "event",
  title: "Demo Event (delete before merge)",
  description: "Demo content to review the agency links. Not real content, delete before merge.",
  thumbnailImage: {
    src: "/img/event/texas-floods-july-2025.webp",
    alt: "Lorem ipsum",
  },
  mastheadImage: {
    src: "/img/event/texas-floods-july-2025.webp",
    alt: "Lorem ipsum",
  },
  themes: ["respond"],
  categories: ["flood"],
  region: "Lorem, Ipsum",
  startDate: "Jan. 1, 2026",
  linkUSGovernment: {
    label: "Learn more",
    href: "https://www.usa.gov/",
  },
  linkDHSFEMA: {
    label: "Learn more",
    href: "https://www.fema.gov/",
  },
  body: [
    {
      type: "text",
      heading: "Overview",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
  ],
};
