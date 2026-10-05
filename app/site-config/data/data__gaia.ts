import type { DataContent } from "@/app/site-config/types";

export const DATA__GAIA: DataContent = {
  id: "gaia-infrastructure-assets",

  contentType: "data",

  title: "Global Assessment of Infrastructure Assets (GAIA)",

  description:
    "The Global Assessment of Infrastructure Assets (GAIA) provides gridded building exposure data to support disaster risk assessment, response, and recovery.",

  thumbnailImage: {
    src: "/img/data/gaia-building-exposure.webp",
    alt: "GAIA gridded building exposure across the Los Angeles basin, where color shows modeled built-up area per 100-meter grid cell, from dark blue in the lowest range to orange and red in the densest urban core",
  },

  mastheadImage: {
    src: "/img/data/gaia-building-exposure.webp",
    alt: "GAIA gridded building exposure across the Los Angeles basin, where color shows modeled built-up area per 100-meter grid cell, from dark blue in the lowest range to orange and red in the densest urban core",
  },

  themes: ["respond", "prepare", "recover"],

  // Applicable to any disaster type, so every hazard is tagged.
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

  relatedContent: [],

  exploreDataUrl:
    "https://science-dev.data.nasa.gov/disasters/data-visualization/?mission=disasters_learning_portal&mapLon=0.0&mapLat=0.0&mapZoom=2&globeLon=undefined&globeLat=undefined&panePercents=0,100,0&on=30f57de9-d010-4e76-b87c-097420646fc4$1.00&startTime=2012-01-19T00:00:00.000Z&endTime=2025-01-31T23:59:59.000Z&live=0",

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "The Global Assessment of Infrastructure Assets (GAIA) is an open, global gridded building exposure dataset developed by ImageCat, Inc. with funding from the NASA Disasters Program. GAIA provides consistent spatial information on buildings and infrastructure to support assessment of assets exposed to natural hazards. It is designed to fill gaps in existing infrastructure information and to deliver actionable exposure data for disaster risk modeling and decision-making. Each grid cell contains a modeled estimate of the total built-up area within that cell.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "GAIA can be used to identify buildings and infrastructure located within areas affected or potentially affected by natural hazards. When combined with hazard extent, intensity, or damage products, the dataset provides context for evaluating exposed assets, prioritizing areas for assessment, and supporting disaster preparedness, response, and recovery activities. GAIA can also support risk modeling by providing a consistent representation of building exposure in locations where detailed infrastructure inventories may be incomplete or unavailable.",
        "GAIA is a modeled dataset, not an aggregation of ground-up building inventories. It represents the underlying building stock for risk modeling purposes, so grid cell values are estimates rather than exact measurements of built-up area. Values may therefore differ from what is visible in satellite imagery of the same location.",
      ],
    },

    {
      type: "text",
      heading: "Terms of Use",
      paragraphs: [
        "NASA data and products are freely available to federal, state, public, non-profit and commercial users. This information can be experimental- or research-grade data products and may not be appropriate for operational use. These NASA data products, services, and the Disasters Mapping Portal are intended to aid decision makers and enhance situational awareness, but these data are not guaranteed to be consistently available or routinely updated.",
      ],
    },

    {
      type: "text",
      heading: "Source",
      paragraphs: ["ImageCat, Inc., with funding from the NASA Disasters Program"],
    },

    {
      type: "text",
      heading: "Resolution",
      paragraphs: [
        "100 meters by 100 meters per grid cell. The dataset is distributed as a GeoTIFF raster in the World Mollweide projection (EPSG:54009). Pixel values represent the modeled built-up area, in square meters, contained within each 100-meter grid cell. A value of 0 indicates no modeled exposure in that grid cell.",
      ],
    },

    {
      type: "text",
      heading: "Credits",
      paragraphs: ["ImageCat, Inc., NASA Disasters Program"],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "NASA, NASA Disasters Program, ImageCat, GAIA, Global Assessment of Infrastructure Assets, Infrastructure, Buildings, Exposure, Built-Up Area, Raster, Risk Assessment, Disaster Risk",
      ],
    },
  ],
};
