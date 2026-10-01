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

  relatedContent: ["sentinel-2-color-infrared", "sentinel-2-true-color", "sentinel-2-nbr"],

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "Normalized Difference Vegetation Index (NDVI) is calculated as (NIR - Red)/(NIR + Red), where NIR is near-infrared reflectance and Red is visible red reflectance. For Sentinel-2, NDVI is commonly calculated using MSI Band 8 for near-infrared and Band 4 for red. NDVI values generally range from -1 to 1, with higher positive values associated with dense, healthy green vegetation and lower or negative values associated with sparse vegetation, bare surfaces, water, snow, clouds, or other non-vegetated areas.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Sentinel-2 NDVI can be used to assess vegetation condition and identify changes to vegetated surfaces before and after natural hazards. Changes in NDVI can help characterize vegetation loss, stress, or recovery associated with wildfire, flooding, severe weather, drought or heat impacts, and other disturbances. NDVI should be interpreted together with other imagery and environmental information because vegetation type, seasonality, atmospheric conditions, soil background, and surface moisture can influence observed values.",
      ],
    },

    {
      type: "text",
      heading: "Terms of Use",
      paragraphs: [
        "NASA data and products are freely available to federal, state, public, non-profit and commercial users. This information can be experimental- or research-grade data products and may not be appropriate for operational use. These NASA data products, services, and the Disasters Mapping Portal are intended to aid decision makers and enhance situational awareness, but these data are not guaranteed to be consistently available or routinely updated. Use of this product should include: 'Contains modified Copernicus Sentinel data (2026) processed by ESA.'",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      paragraphs: [
        "MultiSpectral Instrument (MSI) on European Space Agency's (ESA) Copernicus Sentinel-2A/2B satellites",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      paragraphs: ["10 meters"],
    },

    {
      type: "text",
      heading: "Credits",
      paragraphs: [
        "NASA/GSFC, USGS, ESA Copernicus, NASA Disasters Program",
        "The product contains modified Copernicus Sentinel-2, processed by the European Space Agency.",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "ESA, Copernicus, Sentinel-2, MSI, NDVI, Normalized Difference Vegetation Index, Vegetation, Optical",
      ],
    },
  ],
};
