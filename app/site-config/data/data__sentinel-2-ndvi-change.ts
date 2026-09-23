import type { DataContent } from "@/app/site-config/types";

export const DATA__SENTINEL_2_NDVI_CHANGE: DataContent = {
  id: "sentinel-2-ndvi-change",

  contentType: "data",

  title: "Sentinel-2 Normalized Difference Vegetation Index (NDVI) Change",

  description:
    "Sentinel-2 NDVI Change compares vegetation index values between two observation dates to identify increases or decreases in green vegetation associated with disturbance, stress, or recovery.",

  thumbnailImage: {
    src: "/img/data/sentinel-2-ndvi-change.webp",
    alt: "Sentinel-2 Normalized Difference Vegetation Index change imagery",
  },

  mastheadImage: {
    src: "/img/data/sentinel-2-ndvi-change.webp",
    alt: "Sentinel-2 Normalized Difference Vegetation Index change imagery",
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

  relatedContent: [
    "sentinel-2-ndvi",
    "sentinel-2-true-color",
    "landsat-ndvi",
    "landsat-true-color",
    "planet-ndvi",
    "plaent-true-color",
  ],

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "Sentinel-2 NDVI Change is derived by comparing Normalized Difference Vegetation Index (NDVI) values from two observation dates. NDVI is calculated as (NIR - Red)/(NIR + Red), using near-infrared and visible red reflectance from the Sentinel-2 MultiSpectral Instrument (MSI). The change product highlights where vegetation conditions have increased or decreased between the two observations, with negative changes generally indicating vegetation loss, stress, or disturbance and positive changes generally indicating increased vegetation cover or recovery.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Sentinel-2 NDVI Change can be used to identify vegetation impacts associated with wildfire, flooding, severe weather, tropical cyclones, heat or drought stress, and other disturbances, as well as to monitor vegetation recovery following an event. Comparing pre-event and post-event observations can help identify areas where vegetation condition has changed substantially. NDVI change should be interpreted together with other imagery and environmental information because differences in seasonality, phenology, soil moisture, atmospheric conditions, acquisition geometry, and cloud or smoke contamination can also influence observed changes.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      paragraphs: [
        "MultiSpectral Instrument (MSI) aboard the European Space Agency's Copernicus Sentinel-2 satellites",
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
      paragraphs: ["NASA/GSFC, USGS, ESA Copernicus, NASA Disasters Program"],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "NASA, ESA, Copernicus, Sentinel-2, MSI, NDVI, NDVI Change, Normalized Difference Vegetation Index, Vegetation Change, Vegetation Disturbance, Optical",
      ],
    },
  ],
};
