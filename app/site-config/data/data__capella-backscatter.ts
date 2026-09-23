import type { DataContent } from "@/app/site-config/types";

export const DATA__CAPELLA_BACKSCATTER: DataContent = {
  id: "capella-backscatter",

  contentType: "data",

  title: "Capella Backscatter",

  description:
    "Sigma Naught backscatter derived from high-resolution Capella Space synthetic aperture radar (SAR) imagery acquired through NASA's Commercial Satellite Data Acquisition (CSDA) Program.",

  thumbnailImage: {
    src: "/img/data/capella-backscatter.webp",
    alt: "Capella SAR backscatter image of Waialua on the North Shore of Oahu, Hawaii, collected March 20, 2026, with dark returns along Paomoho Stream indicating likely flooding",
  },

  mastheadImage: {
    src: "/img/data/capella-backscatter.webp",
    alt: "Capella SAR backscatter image of Waialua on the North Shore of Oahu, Hawaii, collected March 20, 2026, with dark returns along Paomoho Stream indicating likely flooding",
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

  relatedContent: ["umbra-sigma-naught"],

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "This product provides calibrated Sigma Naught (σ⁰) radar backscatter derived from high-resolution Capella Space synthetic aperture radar (SAR) imagery acquired through NASA's Commercial Satellite Data Acquisition (CSDA) Program. Source Geocoded Terrain Corrected (GEO) imagery is processed to Sigma Naught backscatter and filtered to reduce SAR speckle while preserving spatial detail. Sigma Naught represents the strength of radar energy scattered back toward the sensor and can reveal differences in surface roughness, moisture, structure, and other physical characteristics.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Capella Space backscatter imagery can be used to assess surface conditions and identify changes associated with natural hazards, including flooding, wildfire impacts, severe storm damage, tropical cyclones, earthquakes, and winter weather. Because SAR is an active microwave imaging system, observations can be collected during both day and night and through clouds, smoke, and many other atmospheric conditions that can obscure optical imagery. Differences in backscatter can help identify inundated areas, changes in surface roughness or moisture, and damage to vegetation or the built environment. Debris may manifest in images via nonuniform shapes or with significant backscatter.",
        "Radar backscatter is also influenced by viewing geometry, incidence angle, polarization, and surface orientation, which should be considered when comparing scenes.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      paragraphs: [
        "X-band Synthetic Aperture Radar (SAR) aboard the Capella Space commercial satellite constellation",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      paragraphs: [
        "Acquisition-dependent; native Capella Space source resolution is preserved, with imagery available at resolutions as fine as 25 centimeters",
      ],
    },

    {
      type: "text",
      heading: "Credits",
      paragraphs: [
        "NASA Disasters Program, processing by MSFC, Capella Space. For derived products: “Includes copyrighted material of Capella Space. All rights reserved.” This work utilized data made available through the NASA Commercial Satellite Data Acquisition (CSDA) program.",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "NASA, CSDA, Capella Space, SAR, Synthetic Aperture Radar, X-band, Sigma Naught, Sigma0, Backscatter, GEO, Radar",
      ],
    },
  ],
};
