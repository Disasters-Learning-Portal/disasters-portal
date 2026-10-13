import { DATA__HURRICANE_ISAIAS_OCT_2026 } from "@/app/site-config/data";
import type { EventContent } from "@/app/site-config/types";

export const EVENT__HURRICANE_ISAIAS_OCT_2026: EventContent = {
  id: "hurricane-isaias-oct-2026",
  contentType: "event",
  title: "Hurricane Isaias October 2026",
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
  region: "Florida, Alabama",
  startDate: "2026-10-09",
  linkUSGovernment: {
    label: "Learn more",
    href: "https://www.fema.gov/disaster/3655",
  },
  body: [
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
