import { DATA } from "@/app/site-config/data";
import type { EventContent } from "@/app/site-config/types";

export const EVENT__VENEZUELA_EQ_JUN_2026: EventContent = {
  id: "venzuela-earthquake-jun-2026",
  contentType: "event",
  title: "Venezuela Earthquake June 2026",
  lastUpdatedDate: "2026-06-24",
  thumbnailImage: {
    src: "/img/event/us-winter-storm-jan-2026.webp",
    alt: "Hazard pattern swirls in shades of blue",
  },
  mastheadImage: {
    src: "/img/event/us-winter-storm-jan-2026.webp",
    alt: "Hazard pattern swirls in shades of blue",
  },
  themes: ["respond"],
  categories: ["earthquake"],
  region: "Venezuela, South America",
  startDate: "2026-06-24",
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
              DATA__BLACK_MARBLE_HD,
              DATA__OPERA_DISP_S1_COHERENCE,
              DATA__UMBRA_SIGMA_NAUGHT],
    },
  ],
};
