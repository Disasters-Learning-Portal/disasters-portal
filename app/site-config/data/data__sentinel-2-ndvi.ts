import type { DataContent } from "@/app/site-config/types";

export const DATA__SENTINEL_2_NDVI: DataContent = {
  id: "sentinel-2-ndvi",

  contentType: "data",

  title: "Sentinel-2 Normalized Difference Vegetation Index (NDVI)",

  description:
    "Normalized Difference Vegetation Index (NDVI) uses near-infrared and red reflectance to indicate the presence and relative condition of green vegetation.",

  thumbnailImage: {
    src: "/img/data/sentinel-2-ndvi.webp",
    alt: "Sentinel-2 Normalized Difference Vegetation Index (NDVI)",
  },

  mastheadImage: {
    src: "/img/data/sentinel-2-ndvi.webp",
    alt: "Sentinel-2 Normalized Difference Vegetation Index (NDVI)",
  },

  themes: ["respond", "build", "prepare", "recover"],

  categories: [
    "severewx",
    "fire",
    "heat",
    "flood",
    "tropical cyclone",
    "earthquake",
    "winter weather",
  ],

  relatedContent: ["sentinel-2-color-infrared", "sentinel-2-true-color", "sentinel-2-nbr"],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "Normalized Difference Vegetation Index (NDVI) is calculated as (NIR - Red)/(NIR + Red), where NIR is near-infrared reflectance and Red is visible red reflectance. For Sentinel-2, NDVI is commonly calculated using MSI Band 8 for near-infrared and Band 4 for red. NDVI values generally range from -1 to 1, with higher positive values associated with dense, healthy green vegetation and lower or negative values associated with sparse vegetation, bare surfaces, water, snow, clouds, or other non-vegetated areas.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Sentinel-2 NDVI can be used to assess vegetation condition and identify changes to vegetated surfaces before and after natural hazards. Changes in NDVI can help characterize vegetation loss, stress, or recovery associated with wildfire, flooding, severe weather, drought or heat impacts, and other disturbances. NDVI should be interpreted together with other imagery and environmental information because vegetation type, seasonality, atmospheric conditions, soil background, and surface moisture can influence observed values.",
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
      paragraphs: ["10 meters"],
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
        "ESA, Copernicus, Sentinel-2, MSI, NDVI, Normalized Difference Vegetation Index, Vegetation, Optical",
      ],
    },
  ],
};
