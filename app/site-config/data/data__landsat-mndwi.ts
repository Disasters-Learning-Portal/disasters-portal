import type { DataContent } from "@/app/site-config/types";

export const DATA__LANDSAT_MNDWI: DataContent = {
  id: "landsat-mndwi",

  contentType: "data",

  title: "Landsat Modified Normalized Difference Water Index (MNDWI)",

  description:
    "Modified Normalized Difference Water Index (MNDWI) uses green and shortwave-infrared reflectance to enhance open water features and suppress vegetation, soil, and built-up surfaces.",

  thumbnailImage: {
    src: "/img/data/landsat-mndwi.webp",
    alt: "Landsat Modified Normalized Difference Water Index (MNDWI)",
  },

  mastheadImage: {
    src: "/img/data/landsat-mndwi.webp",
    alt: "Landsat Modified Normalized Difference Water Index (MNDWI)",
  },

  themes: ["respond", "build", "prepare", "recover"],

  categories: ["severe weather", "flood", "tropical cyclone", "winter weather"],

  relatedContent: ["landsat-true-color", "landsat-color-infrared", "landsat-natural-color"],

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "Modified Normalized Difference Water Index (MNDWI) is calculated as (Green - SWIR)/(Green + SWIR), where Green is visible green reflectance and SWIR is shortwave-infrared reflectance. For Landsat 8 and Landsat 9, MNDWI is commonly calculated using Operational Land Imager (OLI) Band 3 for green and Band 6 for shortwave infrared. The index is designed to enhance open water features while reducing the influence of vegetation, soil, and built-up surfaces.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Landsat MNDWI can be used to identify and map open water and changes in surface water extent associated with flooding, tropical cyclones, severe storms, and other hydrologic events. Positive MNDWI values are generally associated with water, while lower or negative values are more commonly associated with vegetation, bare ground, and developed surfaces. Thresholds may vary by location and environmental conditions, so MNDWI should be interpreted together with supporting imagery and local context.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      paragraphs: [
        "Operational Land Imager (OLI) and Operational Land Imager-2 (OLI-2) aboard the NASA/USGS Landsat 8 and Landsat 9 satellites",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      paragraphs: ["30 meters"],
    },

    {
      type: "text",
      heading: "Credits",
      paragraphs: ["NASA, U.S. Geological Survey (USGS)"],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "NASA, USGS, Landsat, Landsat 8, Landsat 9, OLI, OLI-2, MNDWI, Modified Normalized Difference Water Index, Surface Water, Flooding",
      ],
    },
  ],
};
