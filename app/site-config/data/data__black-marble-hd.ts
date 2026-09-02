import type { DataContent } from "@/app/site-config/types";

export const DATA__BLACK_MARBLE_HD: DataContent = {
  id: "black-marble-hd",

  contentType: "data",

  title: "Black Marble HD Nighttime Lights",

  description:
    "HD Black Marble combines VIIRS nighttime lights with Landsat-derived land surface information and OpenStreetMap road networks to create enhanced 30-meter nighttime light imagery for disaster impact assessment.",

  thumbnailImage: {
    src: "/img/data/black-marble-hd.webp",
    alt: "HD Black Marble nighttime lights imagery",
  },

  mastheadImage: {
    src: "/img/data/black-marble-hd.webp",
    alt: "NASA VEDA Black Marble HD nighttime lights imagery",
  },

  themes: ["respond", "recover"],

  categories: ["severewx", "fire", "flood", "tropical cyclone", "earthquake", "winter weather"],

  relatedContent: ["black-marble-blue-yellow"],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "HD Black Marble is a high-resolution nighttime lights visualization that combines NASA's VIIRS Black Marble nighttime lights with Landsat-derived land surface information and OpenStreetMap road networks. The processing pipeline uses the daily, moonlight- and atmosphere-corrected VIIRS VNP46A2 nighttime lights product together with Landsat-derived Normalized Difference Vegetation Index (NDVI) and Normalized Difference Water Index (NDWI) information and road-density patterns from OpenStreetMap. These higher-resolution datasets are used to spatially enhance the VIIRS nighttime lights and produce a 30-meter representation of nighttime illumination.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Black Marble HD can be used to visually assess changes in nighttime illumination associated with disasters, including potential power outages and subsequent electricity restoration. The enhanced spatial detail can help identify neighborhood-scale patterns that are difficult to distinguish in the native VIIRS nighttime lights product and can support situational awareness during response and recovery. The 30-meter imagery is a modeled, downscaled representation of VIIRS nighttime lights rather than a direct 30-meter nighttime radiance measurement and should therefore be used for visualization and qualitative assessment rather than quantitative analysis or identification of outages at individual buildings, homes, or roads.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "Visible Infrared Imaging Radiometer Suite (VIIRS) Day/Night Band (DNB) aboard the Suomi National Polar-orbiting Partnership (Suomi NPP), combined with Landsat Collection 2 imagery and OpenStreetMap road network data",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: [
        "30 meters (modeled/downscaled from approximately 500-meter VIIRS nighttime lights)",
      ],
    },

    {
      type: "text",
      heading: "Credits",
      headingLevel: "h3",
      paragraphs: [
        "NASA Visualization, Exploration, and Data Analysis (VEDA), NASA Black Marble Science Team, NASA Goddard Space Flight Center (GSFC), U.S. Geological Survey (USGS), and OpenStreetMap contributors",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, Black Marble, Black Marble HD, VIIRS, Nighttime Lights, Day/Night Band, DNB, VNP46A2, Landsat, OpenStreetMap, OSM, Power Outage, Disaster Response, Disaster Recovery",
      ],
    },
  ],
};
