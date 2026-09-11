import type { DataContent } from "@/app/site-config/types";

export const DATA__SENTINEL_2_MNDWI: DataContent = {
  id: "sentinel-2-mndwi",

  contentType: "data",

  title: "Sentinel-2 Modified Normalized Difference Water Index (MNDWI)",

  description:
    "Modified Normalized Difference Water Index (MNDWI) uses green and shortwave-infrared reflectance to enhance open water features and suppress vegetation, soil, and built-up surfaces.",

  thumbnailImage: {
    src: "/img/data/sentinel-2-mndwi.webp",
    alt: "Sentinel-2 Modified Normalized Difference Water Index (MNDWI)",
  },

  mastheadImage: {
    src: "/img/data/sentinel-2-mndwi.webp",
    alt: "Sentinel-2 Modified Normalized Difference Water Index (MNDWI)",
  },

  themes: ["respond", "build", "prepare", "recover"],

  categories: [
    "severewx",
    "flood",
    "tropical cyclone",
    "winter weather",
  ],

  relatedContent: [
    "sentinel-2-true-color",
    "sentinel-2-color-infrared",
    "sentinel-2-swir",
  ],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "Modified Normalized Difference Water Index (MNDWI) is calculated as (Green - SWIR)/(Green + SWIR), where Green is visible green reflectance and SWIR is shortwave-infrared reflectance. For Sentinel-2, MNDWI is commonly calculated using MSI Band 3 for green and Band 11 for shortwave infrared. The index is designed to enhance open water features while reducing the influence of vegetation, soil, and built-up surfaces.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Sentinel-2 MNDWI can be used to identify and map open water and changes in surface water extent associated with flooding, tropical cyclones, severe storms, and other hydrologic events. Positive MNDWI values are generally associated with water, while lower or negative values are more commonly associated with vegetation, bare ground, and developed surfaces. Thresholds may vary by location and environmental conditions, so MNDWI should be interpreted together with supporting imagery and local context.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "MultiSpectral Instrument (MSI) on European Space Agency's (ESA) Copernicus Sentinel-2A/2B satellites",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: ["20 meters"],
    },

    {
      type: "text",
      heading: "Credits",
      headingLevel: "h3",
      paragraphs: ["NASA/GSFC, USGS, ESA Copernicus"],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "ESA, Copernicus, Sentinel-2, MSI, MNDWI, Modified Normalized Difference Water Index, Surface Water, Flooding",
      ],
    },
  ],
};
