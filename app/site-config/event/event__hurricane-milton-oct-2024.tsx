import { DATA } from "@/app/site-config/data";
import type { EventContent } from "@/app/site-config/types";

export const EVENT__HURRICANE_MILTON_OCT_2024: EventContent = {
  id: "hurricane-milton-oct-2024",
  contentType: "event",
  title: "Hurricane Milton October 2024",
  lastUpdatedDate: "2024-10-10",
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
  region: "Florida, U.S., North America",
  startDate: "2024-10-10",
  body: [
    {
      type: "text",
      paragraphs: [
        "x.",
      ],
    },
    {
      type: "sectionCardGallery",
      heading: "Related Data",
      cards: [DATA__BLACK_MARBLE_BLUE_YELLOW,
              DATA__SENTINEL_2_TRUE_COLOR,
              DATA__SENTINEL_2_COLOR_INFRARED,
              DATA__SENTINEL_2_SWIR],
    },
  ],
};
