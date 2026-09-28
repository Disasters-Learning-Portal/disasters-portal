import type { ThemeContent } from "@/app/site-config/types";

export const RESILIENCE_CONTENT: ThemeContent = {
  id: "resilience",
  mastheadImage: {
    alt: "A tower crane rises over high-rise buildings under construction, silhouetted against a city skyline at sunset.",
    src: "/img/theme/resilience-masthead.webp",
  },
  subtitle: "Safeguard communities for enduring impact",
  theme: "build",
  body: [
    {
      type: "image",
      heading: "Data Visualization",
      src: "/img/theme/resilience-matthew-inundation.webp",
      alt: "Map of central Virginia Beach shading modeled maximum flood extent and water depth during Hurricane Matthew, with a legend grading water depth from under half a foot to more than nine feet.",
      width: 1280,
      height: 898,
      caption:
        "This map shows the modeled maximum flood extent and water depth in central Virginia Beach during Hurricane Matthew in October 2016. Using a Virginia Institute of Marine Science (VIMS) street-level inundation model, researchers can examine how a real storm affected individual streets and neighborhoods, then use that event as a baseline for scenarios exploring how similar storms could produce different flooding as sea levels rise. Those scenarios can help communities stress-test infrastructure and emergency plans before the next major flood. Credit: NASA; J. Derek Loftis, Ph.D., Virginia Institute of Marine Science, William & Mary.",
    },
    {
      type: "text",
      paragraphs: [
        "Learn how NASA researchers are using historic storms like Hurricane Matthew to help Hampton Roads plan for the floods of the future.",
      ],
    },
    {
      type: "sectionCardSimple",
      heading: "Stories of Impact",
      link: { href: "/news-events-stories", label: "More Stories of Impact" },
      cards: [
        {
          id: "helping-hampton-roads-face-the-floods",
          contentType: "story",
          title: "Helping Hampton Roads Face the Floods",
          thumbnailImage: {
            src: "/img/placeholder/card-masthead.webp",
            alt: "",
          },
        },
      ],
    },
    {
      type: "sectionCardSimple",
      heading: "Resources & Learning",
      link: { href: "/training", label: "More Resources and Learning" },
      cards: [
        {
          id: "sea-level-change-tools-planning-decision-support",
          contentType: "training",
          title: "Sea Level Change Tools for Planning and Decision Support",
          thumbnailImage: {
            src: "https://earthdata.nasa.gov/s3fs-public/2025-06/arset-sealevelchange-th.png",
            alt: "Map of sea surface height anomalies across the Americas and the Atlantic, with higher anomalies in orange and lower in blue.",
          },
          url: "https://www.earthdata.nasa.gov/learn/trainings/sea-level-change-tools-planning-decision-support",
        },
        {
          id: "eo-building-exposure",
          contentType: "training",
          title:
            "Understanding EO-based Building Exposure Data: Application to Disaster Mitigation, Preparedness, Response and Recovery",
          thumbnailImage: {
            src: "/img/training/eo-building-exposure.webp",
            alt: "Los Angeles building exposure map showing building risk data across the city",
          },
        },
      ],
    },
  ],
} as const;
