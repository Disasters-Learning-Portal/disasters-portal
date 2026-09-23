import type { DataContent } from "@/app/site-config/types";

export const DATA__ICEYE_BACKSCATTER: DataContent = {
  id: "iceye-backscatter",

  contentType: "data",

  title: "ICEYE SAR Backscatter",

  description:
    "Sigma Naught backscatter derived from high-resolution ICEYE synthetic aperture radar (SAR) imagery acquired through NASA's Commercial Satellite Data Acquisition (CSDA) Program.",

  thumbnailImage: {
    src: "/img/data/iceye-backscatter.webp",
    alt: "ICEYE synthetic aperture radar image of a frozen river system, February 2026",
  },

  mastheadImage: {
    src: "/img/data/iceye-backscatter.webp",
    alt: "ICEYE synthetic aperture radar image of a frozen river system, February 2026",
  },

  themes: ["respond", "prepare", "recover"],

  categories: [
    "severe weather",
    "fire",
    "flood",
    "tropical cyclone",
    "earthquake",
    "winter weather",
  ],

  relatedContent: ["capella-backscatter", "umbra-sigma-naught"],

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "This product provides calibrated sigma naught radar backscatter derived from high-resolution ICEYE synthetic aperture radar (SAR) imagery acquired through NASA's Commercial Satellite Data Acquisition (CSDA) Program. Source Ground Range Detected (GRD) imagery is converted to backscatter using the calibration factor supplied with each scene and expressed in decibels (dB). Backscatter represents the strength of radar energy scattered back toward the sensor and reveals differences in surface roughness, moisture, structure, and other physical characteristics. ICEYE operates a constellation of small X-band SAR satellites designed for frequent revisit and rapid delivery, which makes repeat imaging of an affected area over consecutive days practical during a response.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "ICEYE backscatter imagery can be used to assess surface conditions and identify changes associated with natural hazards, including flooding, tropical cyclone damage, wildfire impacts, severe storms, earthquakes, and winter weather. Because SAR is an active microwave imaging system, scenes can be collected day or night and through clouds, smoke, and rain that obscure optical imagery, which is especially valuable in the first days after an event. Smooth open water returns very little energy and appears dark, so comparing a post-event scene against a pre-event scene can highlight inundated areas, while changes in bright returns can indicate damage to buildings, vegetation, or infrastructure.",
        "Radar backscatter is also influenced by viewing geometry, incidence angle, polarization, and surface orientation, so scenes should be compared with these differences in mind.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      paragraphs: [
        "X-band Synthetic Aperture Radar (SAR) aboard the ICEYE commercial satellite constellation",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      paragraphs: [
        "Acquisition-dependent; native ICEYE source resolution is preserved, with imagery available at resolutions as fine as 25 centimeters (Dwell) and 50 centimeters (Spot) to 3 meters (Strip)",
      ],
    },

    {
      type: "text",
      heading: "Credits",
      paragraphs: [
        "ICEYE, NASA Commercial Satellite Data Acquisition (CSDA) Program, NASA Disasters Program",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "NASA, CSDA, ICEYE, SAR, Synthetic Aperture Radar, X-band, Backscatter, Sigma Naught, Sigma0, GRD, Radar, Flood, Tropical Cyclone",
      ],
    },
  ],
};
