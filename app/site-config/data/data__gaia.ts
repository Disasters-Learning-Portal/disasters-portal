import type { DataContent } from "@/app/site-config/types";

export const DATA__GAIA: DataContent = {
  id: "gaia-infrastructure-assets",

  contentType: "data",

  title: "Global Assessment of Infrastructure Assets (GAIA)",

  description:
    "The Global Assessment of Infrastructure Assets (GAIA) provides building-level infrastructure exposure data to support disaster risk assessment, response, and recovery.",

  thumbnailImage: {
    src: "/img/data/gaia-infrastructure-assets.webp",
    alt: "GAIA building and infrastructure exposure data",
  },

  mastheadImage: {
    src: "/img/data/gaia-infrastructure-assets.webp",
    alt: "GAIA building and infrastructure exposure data",
  },

  themes: ["respond", "prepare", "recover"],

  categories: [
    "severewx",
    "fire",
    "heat",
    "flood",
    "tropical cyclone",
    "earthquake",
    "winter weather",
  ],

  relatedContent: [],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "The Global Assessment of Infrastructure Assets (GAIA) is an open building exposure dataset developed by ImageCat with funding from the NASA Disasters Program. GAIA provides spatial information on buildings and infrastructure to support consistent assessment of assets exposed to natural hazards. The dataset is designed to address gaps in existing infrastructure information and provide actionable exposure data for disaster risk modeling and decision-making.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "GAIA can be used to identify buildings and infrastructure located within areas affected or potentially affected by natural hazards. When combined with hazard extent, intensity, or damage products, the dataset provides context for evaluating exposed assets, prioritizing areas for assessment, and supporting disaster preparedness, response, and recovery activities. GAIA can also support risk modeling by providing a consistent representation of building exposure in locations where detailed infrastructure inventories may be incomplete or unavailable.",
      ],
    },

    {
      type: "text",
      heading: "Source",
      headingLevel: "h3",
      paragraphs: [
        "ImageCat, with funding from the NASA Disasters Program",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: [
        "Building-level vector data; no fixed spatial resolution",
      ],
    },

    {
      type: "text",
      heading: "Credits",
      headingLevel: "h3",
      paragraphs: [
        "ImageCat, NASA Disasters Program",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, NASA Disasters Program, ImageCat, GAIA, Global Assessment of Infrastructure Assets, Infrastructure, Buildings, Exposure, Risk Assessment, Disaster Risk",
      ],
    },
  ],
};