import type { DataContent } from "@/app/site-config/types";

export const DATA__CAPELLA_BACKSCATTER: DataContent = {
  id: "capella-backscatter",

  contentType: "data",

  title: "Capella SAR Backscatter",

  description:
    "Calibrated radar backscatter in decibels derived from high-resolution Capella Space synthetic aperture radar (SAR) imagery acquired through NASA's Commercial Satellite Data Acquisition (CSDA) Program.",

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
      headingLevel: "h3",
      paragraphs: [
        "This product provides calibrated radar backscatter derived from high-resolution Capella Space synthetic aperture radar (SAR) imagery acquired through NASA's Commercial Satellite Data Acquisition (CSDA) Program. Backscatter is computed from the scaling factors supplied with the Capella Geocoded Terrain Corrected (GEO) product, which is geocoded and terrain-height corrected using a high-resolution Digital Elevation Model (DEM). The SAR image is multi-looked, range compressed, and focused, and the resulting values are expressed in decibels (dB). Backscatter represents the strength of radar energy scattered back toward the sensor and reveals differences in surface roughness, moisture, structure, and other physical characteristics.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Capella backscatter imagery can be used to assess surface conditions and identify changes associated with natural hazards, including flooding, tropical cyclone damage, wildfire impacts, severe storms, earthquakes, and winter weather. Because SAR is an active microwave imaging system, scenes can be collected day or night and through clouds, smoke, and rain that obscure optical imagery, which makes it especially valuable in the first days after a storm. Smooth open water returns very little energy and appears dark, so comparing a post-event scene against a pre-event scene can highlight inundated areas, while changes in bright returns can indicate damage to buildings, vegetation, or infrastructure. Radar backscatter is also influenced by viewing geometry, incidence angle, polarization, and surface orientation, so scenes should be compared with these differences in mind.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "X-band Synthetic Aperture Radar (SAR) aboard the Capella Space commercial satellite constellation",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: [
        "Acquisition-dependent; native Capella source resolution is preserved, with imagery available at resolutions as fine as 25 centimeters (Spotlight) to 1.2 meters (Stripmap)",
      ],
    },

    {
      type: "text",
      heading: "Credits",
      headingLevel: "h3",
      paragraphs: [
        "Capella Space, NASA Commercial Satellite Data Acquisition (CSDA) Program, NASA Disasters Program",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, CSDA, Capella, SAR, Synthetic Aperture Radar, X-band, Backscatter, Sigma Naught, Sigma0, GEO, Radar, Flood, Tropical Cyclone",
      ],
    },
  ],
};
