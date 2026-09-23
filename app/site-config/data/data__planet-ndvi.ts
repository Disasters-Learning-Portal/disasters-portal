import type { DataContent } from "@/app/site-config/types";

export const DATA__PLANET_NDVI: DataContent = {
  id: "planet-ndvi",

  contentType: "data",

  title: "Planet Normalized Difference Vegetation Index (NDVI)",

  description:
    "Normalized Difference Vegetation Index (NDVI) derived from PlanetScope observations, using near-infrared and red reflectance to indicate the presence and relative condition of green vegetation at high spatial resolution.",

  thumbnailImage: {
    src: "/img/data/planet-ndvi.webp",
    alt: "Planet Normalized Difference Vegetation Index (NDVI)",
  },

  mastheadImage: {
    src: "/img/data/planet-ndvi.webp",
    alt: "Planet Normalized Difference Vegetation Index (NDVI)",
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

  relatedContent: ["planet-ndvi-change", "planet-true-color", "sentinel-2-ndvi", "landsat-ndvi"],

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "Normalized Difference Vegetation Index (NDVI) is calculated as (NIR - Red)/(NIR + Red), where NIR is near-infrared reflectance and Red is visible red reflectance. For PlanetScope, NDVI is calculated from the near-infrared and red bands of the Dove and SuperDove sensors. NDVI values generally range from -1 to 1, with higher positive values associated with dense, healthy green vegetation and lower or negative values associated with sparse vegetation, bare surfaces, water, snow, clouds, or other non-vegetated areas. The high spatial resolution and frequent revisit of the PlanetScope constellation make this product well suited to mapping vegetation condition at the scale of individual fields, parcels, and riparian corridors. NASA-supported access to Planet commercial satellite imagery is provided through NASA's Commercial Satellite Data Acquisition (CSDA) Program.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Planet NDVI can be used to assess vegetation condition and identify changes to vegetated surfaces before and after natural hazards. Changes in NDVI can help characterize vegetation loss, stress, or recovery associated with flooding, wildfire, severe weather, drought or heat impacts, and other disturbances. NDVI should be interpreted together with other imagery and environmental information because vegetation type, seasonality, atmospheric conditions, soil background, and surface moisture can influence observed values. Clouds, smoke, and haze may obscure the surface in individual scenes.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      paragraphs: [
        "PlanetScope Dove and SuperDove optical satellite constellation operated by Planet Labs PBC",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      paragraphs: ["Approximately 3 meters"],
    },

    {
      type: "text",
      heading: "Credits",
      paragraphs: [
        "Planet Labs PBC; NASA Commercial Satellite Data Acquisition (CSDA) Program; NASA Disasters Program",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "NASA, CSDA, Planet Labs, PlanetScope, Dove, SuperDove, Commercial Satellite Data, NDVI, Normalized Difference Vegetation Index, Vegetation, Optical",
      ],
    },
  ],
};
