import { STORY__HELPING_HAMPTON_ROADS_FACE_THE_FLOODS } from "@/app/site-config/story/story__helping-hampton-roads-face-the-floods";
import { TRAINING__PORTAL_101 } from "@/app/site-config/training/training__portal-101";
import { pickKeys } from "@/app/site-config/typed.helpers";
import type { ThemeContent } from "@/app/site-config/types";
import { TRAINING__EO_BUILDING_EXPOSURE } from "../training/training__eo-building-exposure";
import { TRAINING__SEA_LEVEL_CHANGE_TOOLS } from "../training/training__sea-level-change-tools";

export const RESILIENCE_CONTENT: ThemeContent = {
  id: "resilience",
  mastheadImage: {
    alt: "A tower crane rises over high-rise buildings under construction, silhouetted against a city skyline at sunset.",
    src: "/img/theme/resilience-masthead.webp",
  },
  subtitle: "Safeguard communities for enduring impact",
  theme: "resilience",
  body: [
    {
      type: "sectionCardSimple",
      heading: "Stories of Impact",
      link: { href: "/news-events-stories?type=story", label: "More Stories of Impact" },
      cards: [STORY__HELPING_HAMPTON_ROADS_FACE_THE_FLOODS].map((i) =>
        pickKeys(i, ["id", "contentType", "thumbnailImage", "themes", "title", "subtitle"]),
      ),
    },
    {
      type: "image",
      heading: "Data Visualization",
      src: "/img/theme/resilience-matthew-inundation.webp",
      alt: "Map of central Virginia Beach shading modeled maximum flood depth during Hurricane Matthew, with floodwater following storm drainage channels through neighborhoods and a legend grading water depth from half a foot to ten feet.",
      width: 1280,
      height: 654,
      caption:
        "This map shows the modeled maximum flood extent and water depth in central Virginia Beach during Hurricane Matthew in October 2016. Using a Virginia Institute of Marine Science (VIMS) street-level inundation model, researchers can examine how a real storm affected individual streets and neighborhoods, then use that event as a baseline for scenarios exploring how similar storms could produce different flooding as sea levels rise. Those scenarios can help communities stress-test infrastructure and emergency plans before the next major flood. Credit: NASA; J. Derek Loftis, Ph.D., Virginia Institute of Marine Science, William & Mary.",
    },
    {
      type: "sectionCardSimple",
      heading: "Resources & Learning",
      link: { href: "/training", label: "More Resources and Learning" },
      cards: [TRAINING__PORTAL_101, TRAINING__SEA_LEVEL_CHANGE_TOOLS, TRAINING__EO_BUILDING_EXPOSURE].map((i) =>
        pickKeys(i, ["id", "contentType", "thumbnailImage", "themes", "title", "subtitle"]),
      ),
    },
  ],
} as const;
