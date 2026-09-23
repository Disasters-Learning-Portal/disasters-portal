import type { DataContent } from "@/app/site-config/types";

export const DATA__PLANET_NDWI: DataContent = {
  id: "planet-ndwi",

  contentType: "data",

  title: "Planet Normalized Difference Water Index (NDWI)",

  description:
    "Normalized Difference Water Index (NDWI) derived from PlanetScope observations, using green and near-infrared reflectance to highlight surface water and water-related changes at high spatial resolution.",

  thumbnailImage: {
    src: "/img/data/planet-ndwi.webp",
    alt: "Planet Normalized Difference Water Index (NDWI)",
  },

  mastheadImage: {
    src: "/img/data/planet-ndwi.webp",
    alt: "Planet Normalized Difference Water Index (NDWI)",
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

  relatedContent: ["planet-ndvi", "planet-ndvi-change", "planet-true-color"],

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "Normalized Difference Water Index (NDWI) is calculated as (Green - NIR)/(Green + NIR), where Green is visible green reflectance and NIR is near-infrared reflectance. For PlanetScope, NDWI is calculated from the green and near-infrared bands of the Dove and SuperDove sensors. NDWI values generally range from -1 to 1, with higher positive values commonly associated with open water and lower or negative values associated with vegetation, bare ground, and many built surfaces. The high spatial resolution and frequent revisit of the PlanetScope constellation make this product useful for mapping water extent and changes in surface water at the scale of individual rivers, streams, reservoirs, neighborhoods, and flood-affected areas. NASA-supported access to Planet commercial satellite imagery is provided through NASA's Commercial Satellite Data Acquisition (CSDA) Program.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Planet NDWI can be used to identify surface water and assess changes in inundation before, during, and after natural hazards. It is particularly useful for mapping flood extent, changes in rivers and reservoirs, standing water, and water-related impacts associated with severe weather and tropical cyclones. NDWI should be interpreted together with other imagery and environmental information because shadows, dark surfaces, built environments, vegetation, sediment, and atmospheric conditions can influence observed values. Clouds, smoke, and haze may obscure the surface in individual scenes.",
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
        "NASA, CSDA, Planet Labs, PlanetScope, Dove, SuperDove, Commercial Satellite Data, NDWI, Normalized Difference Water Index, Surface Water, Flooding, Optical",
      ],
    },
  ],
};
