import type { EventContent } from "@/app/site-config/types";

export const EVENT__HURRICANE_HELENE_SEPT_2024: EventContent = {
  id: "hurricane-helene-sept-2024",
  contentType: "event",
  title: "Hurricane Helene September 2024",
  lastUpdatedDate: "2024-09-26",
  thumbnailImage: {
    src: "/img/event/us-winter-storm-jan-2026.webp",
    alt: "Hazard pattern swirls in shades of blue",
  },
  mastheadImage: {
    src: "/img/event/us-winter-storm-jan-2026.webp",
    alt: "Hazard pattern swirls in shades of blue",
  },
  themes: ["respond"],
  categories: ["tropical cyclone"],
  region: "Southeast U.S., North America",
  startDate: "2024-09-26",
  body: [
    {
      type: "text",
      paragraphs: ["x."],
    },
    {
      type: "sectionCardGallery",
      heading: "Related Data",
      cards: [
        DATA__BLACK_MARBLE_BLUE_YELLOW,
        DATA__BLACK_MARBLE_HD,
        DATA__SENTINEL_2_TRUE_COLOR,
        DATA__SENTINEL_2_SWIR,
      ],
    },
  ],
};
