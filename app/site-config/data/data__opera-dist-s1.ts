import type { DataContent } from "@/app/site-config/types";

export const DATA__OPERA_DIST_S1: DataContent = {
  id: "opera-dist-s1",

  contentType: "data",

  title: "OPERA Surface Disturbance from Sentinel-1 (DIST-S1)",

  description:
    "The OPERA Surface Disturbance from Sentinel-1 (DIST-S1) product provides maps of surface disturbance detected from Sentinel-1 synthetic aperture radar (SAR) observations, with per-pixel classifications indicating the confidence of detected disturbance.",

  thumbnailImage: {
    src: "/img/data/opera-dist-s1.webp",
    alt: "OPERA DIST-S1 surface disturbance imagery",
  },

  mastheadImage: {
    src: "/img/data/opera-dist-s1.webp",
    alt: "OPERA DIST-S1 surface disturbance imagery",
  },

  themes: ["respond", "recover"],

  categories: ["fire"],

  relatedContent: [],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "The OPERA Surface Disturbance from Sentinel-1 (DIST-S1) product uses Sentinel-1 synthetic aperture radar (SAR) observations to identify changes to the land surface. The product provides per-pixel disturbance classifications based on the magnitude of change relative to observations prior to an event. A value of 0 indicates no disturbance, 1 indicates moderate-confidence disturbance greater than 2.5 standard deviations from the pre-event mean, and 2 indicates high-confidence disturbance greater than 4.5 standard deviations from the pre-event mean.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "DIST-S1 can be used to rapidly identify and map areas of potential surface disturbance following wildfires. Because the product is derived from synthetic aperture radar observations, it can provide information during both day and night and in conditions where clouds or smoke may limit optical satellite observations. The disturbance classifications can support rapid assessment of potentially affected areas and help guide disaster response and recovery activities. These prototype data are preliminary and should be used as a first-look assessment rather than a definitive characterization of surface impacts.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "C-band Synthetic Aperture Radar (SAR) on the European Space Agency's Copernicus Sentinel-1A, Sentinel-1B, and Sentinel-1C satellites",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: ["30 meters"],
    },

    {
      type: "text",
      heading: "Credits",
      headingLevel: "h3",
      paragraphs: [
        "NASA Jet Propulsion Laboratory, California Institute of Technology; NASA OPERA; ESA Copernicus; NASA Disasters Program",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, OPERA, Sentinel-1, DIST-S1, Surface Disturbance, SAR, Synthetic Aperture Radar, Wildfire, Fire",
      ],
    },
  ],
};