import { DATA__US_WINTER_STORM_JAN_2026 } from "@/app/site-config/data";
import type { EventContent } from "@/app/site-config/types";

export const EVENT__US_WINTER_STORM_JAN_2026: EventContent = {
  id: "us-winter-storm-jan-2026",

  contentType: "event",

  title: "U.S. Winter Storm January 2026",

  datePublished: "2026-01-28",

  thumbnailImage: {
    src: "/img/event/template-hero.webp",
    alt: "Hazard pattern swirls in shades of blue",
  },

  mastheadImage: {
    src: "/img/event/template-hero.webp",
    alt: "Hazard pattern swirls in shades of blue",
  },

  themes: ["respond"],

  categories: ["winter weather"],

  region: "U.S., North America",

  startDate: "2026-01-23",

  linkDHSFEMA: {
    label: "Learn more",
    href: "https://www.fema.gov/disaster/2026-winter-storm",
  },

  body: [
    {
      type: "text",
      heading: "Overview",
      paragraphs: [
        "A large winter storm impacted much of the continental U.S., bringing snow, ice, and subfreezing temperatures. NASA’s Disasters Program is sharing maps and data to support state and federal response agencies.",
      ],
    },
    {
      type: "sectionCardGallery",
      heading: "Related Data",
      cards: DATA__US_WINTER_STORM_JAN_2026,
    },
  ],
};
