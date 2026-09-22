import type { DataContent } from "@/app/site-config/types";

export const DATA__PLANET_NDVI_CHANGE: DataContent = {
  id: "planet-ndvi-change",

  contentType: "data",

  title: "Planet NDVI Change",

  description:
    "Change in Normalized Difference Vegetation Index (NDVI) between two PlanetScope acquisitions, highlighting where vegetation has been lost, stressed, or has recovered between a pre-event baseline and a later observation.",

  thumbnailImage: {
    src: "/img/data/planet-ndvi-change.webp",
    alt: "Planet NDVI Change",
  },

  mastheadImage: {
    src: "/img/data/planet-ndvi-change.webp",
    alt: "Planet NDVI Change",
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

  relatedContent: ["planet-ndvi", "planet-true-color", "sentinel-2-ndvi"],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "Planet NDVI Change is the difference between Normalized Difference Vegetation Index (NDVI) calculated from two PlanetScope acquisitions, a pre-event baseline and a later observation. Because each input is itself a ratio of near-infrared to red reflectance, differencing them isolates where green vegetation has changed rather than where the scene is simply brighter or darker. Negative values indicate a decrease in NDVI between the two dates, consistent with vegetation loss, defoliation, inundation, burning, or scour; positive values indicate an increase, consistent with regrowth, greening, or recovery. Values near zero indicate little change. NASA-supported access to Planet commercial satellite imagery is provided through NASA's Commercial Satellite Data Acquisition (CSDA) Program.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Planet NDVI Change can be used to map the footprint and relative severity of vegetation disturbance after a hazard, and to track recovery when later acquisitions are differenced against the same baseline. It is particularly useful for flood scour along river corridors, storm damage to canopy, and burned vegetation. Because the product compares two specific dates, differences driven by seasonality, crop harvest, irrigation, or changing illumination and atmospheric conditions between those dates can resemble hazard impacts; results should be interpreted alongside true color imagery and other observations, and the dates of both inputs should be considered when drawing conclusions.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "PlanetScope Dove and SuperDove optical satellite constellation operated by Planet Labs PBC",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: ["Approximately 3 meters"],
    },

    {
      type: "text",
      heading: "Credits",
      headingLevel: "h3",
      paragraphs: [
        "Planet Labs PBC; NASA Commercial Satellite Data Acquisition (CSDA) Program; NASA Disasters Program",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, CSDA, Planet Labs, PlanetScope, Dove, SuperDove, Commercial Satellite Data, NDVI, NDVI Change, Change Detection, Vegetation, Optical",
      ],
    },
  ],
};
