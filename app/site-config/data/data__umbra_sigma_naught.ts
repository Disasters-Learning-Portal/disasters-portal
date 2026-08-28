import type { DataContent } from "@/app/site-config/types";

export const DATA__UMBRA_SIGMA_NAUGHT: DataContent = {
  id: "umbra-sigma-naught",

  contentType: "data",

  title: "Umbra Sigma Naught SAR Backscatter",

  description:
    "Sigma Naught backscatter derived from high-resolution Umbra synthetic aperture radar (SAR) imagery acquired through NASA's Commercial Satellite Data Acquisition (CSDA) Program.",

  thumbnailImage: {
    src: "/img/data/umbra-sigma-naught.webp",
    alt: "Umbra Sigma Naught SAR backscatter imagery",
  },

  mastheadImage: {
    src: "/img/data/umbra-sigma-naught.webp",
    alt: "Umbra Sigma Naught SAR backscatter imagery",
  },

  themes: ["respond", "prepare", "recover"],

  categories: [
    "severewx",
    "fire",
    "flood",
    "tropical cyclone",
    "earthquake",
    "winter weather",
  ],

  relatedContent: [],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "This product provides calibrated Sigma Naught (σ⁰) radar backscatter derived from high-resolution Umbra synthetic aperture radar (SAR) imagery acquired through NASA's Commercial Satellite Data Acquisition (CSDA) Program. Source Geocoded Ellipsoid Corrected (GEC) imagery is processed to Sigma Naught backscatter and filtered to reduce SAR speckle while preserving spatial detail. Sigma Naught represents the strength of radar energy scattered back toward the sensor and can reveal differences in surface roughness, moisture, structure, and other physical characteristics.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Umbra Sigma Naught imagery can be used to assess surface conditions and identify changes associated with natural hazards, including flooding, wildfire impacts, severe storm damage, tropical cyclones, earthquakes, and winter weather. Because SAR is an active microwave imaging system, observations can be collected during both day and night and through clouds, smoke, and many other atmospheric conditions that can obscure optical imagery. Differences in backscatter can help identify inundated areas, changes in surface roughness or moisture, and damage to vegetation or the built environment. Radar backscatter is also influenced by viewing geometry, incidence angle, polarization, and surface orientation, which should be considered when comparing scenes.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "X-band Synthetic Aperture Radar (SAR) aboard the Umbra commercial satellite constellation",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: [
        "Acquisition-dependent; native Umbra source resolution is preserved, with imagery available at resolutions as fine as 25 centimeters",
      ],
    },

    {
      type: "text",
      heading: "Credits",
      headingLevel: "h3",
      paragraphs: [
        "Umbra Space, NASA Commercial Satellite Data Acquisition (CSDA) Program, NASA Disasters Program",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, CSDA, Umbra, SAR, Synthetic Aperture Radar, X-band, Sigma Naught, Sigma0, Backscatter, GEC, Radar",
      ],
    },
  ],
};