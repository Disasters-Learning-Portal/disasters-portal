import { DATA_VISUALIZATION_URL } from "@/app/site-config/env.helpers";
import type { DataContent } from "@/app/site-config/types";

export const DATA__UMBRA_SIGMA_NAUGHT: DataContent = {
  id: "umbra-sigma-naught",

  contentType: "data",

  title: "Umbra Backscatter",

  description:
    "Sigma Naught backscatter derived from high-resolution Umbra synthetic aperture radar (SAR) imagery acquired through NASA's Commercial Satellite Data Acquisition (CSDA) Program.",

  thumbnailImage: {
    src: "/img/event/typhoon-sinlaku-2026__umbra-guam.webp",
    alt: "Umbra radar backscatter image of Antonio B. Won Pat International Airport in Guam",
  },

  mastheadImage: {
    src: "/img/event/typhoon-sinlaku-2026__umbra-guam.webp",
    alt: "Umbra radar backscatter image of Antonio B. Won Pat International Airport in Guam",
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

  relatedContent: [],

  exploreDataUrl: `${DATA_VISUALIZATION_URL}/?mapLon=145.2305223976693&mapLat=14.166206119302075&mapZoom=13.61&globeLon=undefined&globeLat=undefined&panePercents=0,100,0&on=659cc09b-0133-4f07-a16a-a00dfd318e1f$1.00&startTime=2012-01-19T00:00:00.000Z&endTime=2026-04-19T23:59:59.000Z&live=0`,

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "This product provides calibrated Sigma Naught (σ⁰) radar backscatter derived from high-resolution Umbra synthetic aperture radar (SAR) imagery acquired through NASA's Commercial Satellite Data Acquisition (CSDA) Program. Source Geocoded Ellipsoid Corrected (GEC) imagery is processed to Sigma Naught backscatter and filtered to reduce SAR speckle while preserving spatial detail. Sigma Naught represents the strength of radar energy scattered back toward the sensor and can reveal differences in surface roughness, moisture, structure, and other physical characteristics.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Umbra backscatter imagery can be used to assess surface conditions and identify changes associated with natural hazards, including flooding, wildfire impacts, severe storm damage, tropical cyclones, earthquakes, and winter weather. Because SAR is an active microwave imaging system, observations can be collected during both day and night and through clouds, smoke, and many other atmospheric conditions that can obscure optical imagery. Differences in backscatter can help identify inundated areas, changes in surface roughness or moisture, and damage to vegetation or the built environment. Debris may manifest in images via nonuniform shapes or with significant backscatter.",
        "Radar backscatter is also influenced by viewing geometry, incidence angle, polarization, and surface orientation, which should be considered when comparing scenes.",
      ],
    },

    {
      type: "text",
      heading: "Terms of Use",
      paragraphs: [
        "NASA data and products are freely available to federal, state, public, non-profit and commercial users. This information can be experimental- or research-grade data products and may not be appropriate for operational use. These NASA data products, services, and the Disasters Mapping Portal are intended to aid decision makers and enhance situational awareness, but these data are not guaranteed to be consistently available or routinely updated. Use of this product should include: 'Includes copyrighted material of Umbra Lab Inc. All rights reserved.'",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      paragraphs: [
        "X-band Synthetic Aperture Radar (SAR) aboard the Umbra commercial satellite constellation",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      paragraphs: [
        "Acquisition-dependent; native Umbra source resolution is preserved, with imagery available at resolutions as fine as 25 centimeters",
      ],
    },

    {
      type: "text",
      heading: "Credits",
      paragraphs: [
        "NASA Disasters Program, processing by MSFC, Umbra. For derived products: “Includes copyrighted material of Umbra. All rights reserved.” This work utilized data made available through the NASA Commercial Satellite Data Acquisition (CSDA) program.",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "NASA, CSDA, Umbra, SAR, Synthetic Aperture Radar, X-band, Sigma Naught, Sigma0, Backscatter, GEC, Radar",
      ],
    },
  ],
};
