import type { DataContent } from "@/app/site-config/types";

export const DATA__VANTOR_TRUE_COLOR: DataContent = {
  id: "vantor-true-color",

  contentType: "data",

  title: "Vantor True Color",

  description:
    "Vantor True Color imagery combines the red, green, and blue bands of the WorldView eight-band multispectral sensors into a natural-looking view of the surface at roughly a third of a meter per pixel, supporting visual assessment at the scale of individual buildings.",

  thumbnailImage: {
    src: "/img/data/vantor-true-color.webp",
    alt: "Vantor true color satellite image of a dense residential city edge meeting farmland, crossed by a highway and dotted with cumulus clouds",
  },

  mastheadImage: {
    src: "/img/data/vantor-true-color.webp",
    alt: "Vantor true color satellite image of a dense residential city edge meeting farmland, crossed by a highway and dotted with cumulus clouds",
  },

  themes: ["respond", "build", "prepare", "recover"],

  categories: [
    "severe weather",
    "fire",
    "heat",
    "flood",
    "tropical cyclone",
    "earthquake",
    "winter weather",
  ],

  relatedContent: ["vantor-color-infrared", "vantor-panchromatic", "satellogic-true-color"],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "Vantor True Color imagery presents the surface as the eye would see it, so vegetation appears green, bare ground appears brown or tan, water appears dark, and roofs and pavement keep their real colors. It needs no legend to read.",
        "The scenes are delivered as eight-band multispectral tiles from the Vantor (formerly Maxar) WorldView satellites, in the order coastal, blue, green, yellow, red, red edge, near-infrared 1, and near-infrared 2. The true color view is assembled when the tile is displayed by drawing on the red, green, and blue bands of that set. Keeping the full eight bands rather than a pre-flattened color image means the same scenes also serve the color infrared view without a second copy of the data.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "The very high spatial resolution supports damage assessment at the scale of individual structures: collapsed or unroofed buildings, blocked and buckled roads, debris fields, landslide scars, flood inundation, and changes to shorelines and river courses. It also needs no interpretation key, so it can be presented in public communication and briefings as it is.",
        "Because the product uses only visible wavelengths, cloud, smoke, and haze obscure the surface, and no observation is possible at night. Coverage is targeted rather than wall-to-wall: scenes are collected over a specific area of interest during an activation, delivered as adjacent tiles, and there is no fixed revisit. Radar and nighttime lights products are the complement when the sky is closed or the sun is down.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "Eight-band (coastal, blue, green, yellow, red, red edge, near-infrared 1, near-infrared 2) multispectral imagers on the WorldView-2 and WorldView-3 very high resolution optical satellites operated by Vantor, formerly Maxar",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: [
        "Approximately 35 centimeters (multispectral tiles are delivered on a 0.348 meter grid)",
      ],
    },

    {
      type: "text",
      heading: "Credits",
      headingLevel: "h3",
      paragraphs: [
        "Vantor; NASA Disasters Program",
        "©2026 Vantor. All rights reserved.",
        "This work utilized data made available through the NASA Commercial Satellite Data Acquisition (CSDA) Program.",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, Vantor, Maxar, WorldView, Commercial Satellite Data, True Color, RGB, Optical, Very High Resolution",
      ],
    },
  ],
};
