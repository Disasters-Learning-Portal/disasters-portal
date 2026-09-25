import type { DataContent } from "@/app/site-config/types";

export const DATA__LANDSAT_NDVI: DataContent = {
  id: "landsat-ndvi",

  contentType: "data",

  title: "Landsat Normalized Difference Vegetation Index (NDVI)",

  description:
    "Normalized Difference Vegetation Index (NDVI) uses near-infrared and red reflectance to indicate the presence and relative condition of green vegetation.",

  thumbnailImage: {
    src: "/img/data/landsat-ndvi.webp",
    alt: "Landsat Normalized Difference Vegetation Index (NDVI)",
  },

  mastheadImage: {
    src: "/img/data/landsat-ndvi.webp",
    alt: "Landsat Normalized Difference Vegetation Index (NDVI)",
  },

  themes: ["respond", "build", "prepare", "recover"],

  categories: [
    "earthquake",
    "fire",
    "flood",
    "heat",
    "landslide",
    "severe weather",
    "tropical cyclone",
    "hurricane",
    "typhoon",
    "cyclone",
    "volcano",
    "tsunami",
    "winter weather",
  ],

  relatedContent: ["landsat-color-infrared", "landsat-natural-color", "landsat-nbr"],

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "Normalized Difference Vegetation Index (NDVI) is calculated as (NIR - Red)/(NIR + Red), where NIR is near-infrared reflectance and Red is visible red reflectance. For Landsat 8 and Landsat 9, NDVI is commonly calculated using Operational Land Imager (OLI) Band 5 for near-infrared and Band 4 for red. NDVI values generally range from -1 to 1, with higher positive values associated with dense, healthy green vegetation and lower or negative values associated with sparse vegetation, bare surfaces, water, snow, clouds, or other non-vegetated areas.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Landsat NDVI can be used to assess vegetation condition and identify changes to vegetated surfaces before and after natural hazards. Changes in NDVI can help characterize vegetation loss, stress, or recovery associated with wildfire, flooding, severe weather, drought or heat impacts, and other disturbances. NDVI should be interpreted together with other imagery and environmental information because vegetation type, seasonality, atmospheric conditions, soil background, and surface moisture can influence observed values.",
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
        "NASA, USGS, Landsat, Landsat 8, Landsat 9, OLI, OLI-2, NDVI, Normalized Difference Vegetation Index, Vegetation, Optical",
      ],
    },
  ],
};
