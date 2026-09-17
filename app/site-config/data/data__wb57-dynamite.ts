import type { DataContent } from "@/app/site-config/types";

export const DATA__WB57_DYNAMITE: DataContent = {
  id: "wb57-dynamite",

  contentType: "data",

  title: "WB-57 DyNAMITE Airborne Imagery",

  description:
    "High-resolution visible and infrared imagery collected by the DyNAMITE instrument aboard NASA's WB-57 high-altitude aircraft, streamed to responders during flight.",

  thumbnailImage: {
    src: "/img/story/finding-floods__wb57-nosecone.webp",
    alt: "NASA's high-altitude WB-57 aircraft with the DyNAMITE instrument affixed to its nose",
  },

  mastheadImage: {
    src: "/img/story/finding-floods__wb57-nosecone.webp",
    alt: "NASA's high-altitude WB-57 aircraft with the DyNAMITE instrument affixed to its nose",
  },

  themes: ["respond"],

  categories: ["flood"],

  relatedContent: [],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "The WB-57 high-altitude aircraft, operated by NASA's Johnson Space Center, carries a nose-mounted instrument called DyNAMITE that collects 10-centimeter resolution visible and infrared imagery.",
        "Imagery is collected as individual scan frames from a pointable turret, so each frame covers a small footprint at very high detail rather than a wide swath.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "The imagery can be used to identify individual structures, debris fields, and flood boundaries along river corridors, at a level of detail that satellite imagery cannot resolve. During the July 2025 Central Texas floods, NASA streamed live video feeds and imagery directly to responders while the flights were still in the air.",
        "Frames are collected through gaps in the clouds rather than as continuous coverage, so availability varies across an area of interest.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "DyNAMITE, a nose-mounted visible and infrared imager aboard NASA's WB-57 high-altitude aircraft, operated by NASA's Johnson Space Center",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: ["10 centimeters"],
    },

    {
      type: "text",
      heading: "Credits",
      headingLevel: "h3",
      paragraphs: ["NASA Johnson Space Center, NASA Disasters Program"],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, WB-57, DyNAMITE, Airborne, Visible, Infrared, MWIR, High Resolution, Flood, Disaster Response",
      ],
    },
  ],
};
