import { DATA__HURRICANE_ISAIAS_OCT_2026 } from "@/app/site-config/data";
import type { EventContent } from "@/app/site-config/types";

export const EVENT__HURRICANE_ISAIAS_OCT_2026: EventContent = {
  id: "hurricane-isaias-oct-2026",
  contentType: "event",
  title: "Hurricane Isaias October 2026",
  description:
    "Hurricane Isaias made landfall in the Southeastern United States, prompting NASA to support federal response partners to assess flooding, power outages, and other storm impacts in the region.",
  datePublished: "2026-10-26",
  thumbnailImage: {
    src: "/img/event/template-hero.webp",
    alt: "Hurricane Isaias October 2026",
  },
  mastheadImage: {
    src: "/img/event/template-hero.webp",
    alt: "Hurricane Isaias October 2026",
  },
  themes: ["respond"],
  categories: ["tropical cyclone", "flood"],
  region: "Florida, Alabama, Georgia, South Carolina",
  startDate: "2026-10-09",
  linkUSGovernment: {
    label: "Learn more",
    href: "https://www.fema.gov/disaster/3655",
  },
  body: [
    {
      type: "text",
      heading: "Overview",
      paragraphs: [
        "In coordination with the FEMA Response Geospatial Office, FEMA Region 4, and other federal partners, the NASA Disasters Program worked with the American Red Cross, the Alabama Emergency Management Agency, and the National Weather Service Mobile, Charleston, and Columbia offices to support the U.S. response to the hurricane. The program shared satellite-based maps and data with partners, including flood assessment, power outage, and optical situational awareness products for impacted areas in the southeastern United States.",
      ],
    },
    {
      type: "sectionCardGallery",
      heading: "Event Data Gallery",
      link: {
        href: "/data-gallery",
        label: "View all",
      },
      cards: DATA__HURRICANE_ISAIAS_OCT_2026,
    },
  ],
};
