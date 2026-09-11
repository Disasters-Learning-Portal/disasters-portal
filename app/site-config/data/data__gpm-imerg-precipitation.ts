import type { DataContent } from "@/app/site-config/types";

export const DATA__GPM_IMERG_PRECIPITATION: DataContent = {
  id: "gpm-imerg-precipitation",

  contentType: "data",

  title: "GPM IMERG Precipitation",

  description:
    "Daily total precipitation from NASA's Integrated Multi-satellitE Retrievals for GPM (IMERG), a near-real-time global rainfall estimate that blends passive microwave, radar, and infrared satellite observations onto a 0.1 degree grid.",

  thumbnailImage: {
    src: "/img/data/gpm-imerg-precipitation.webp",
    alt: "GPM IMERG storm-total precipitation accumulation from Typhoon Sinlaku over Guam and Saipan, April 2026",
  },

  mastheadImage: {
    src: "/img/data/gpm-imerg-precipitation.webp",
    alt: "GPM IMERG storm-total precipitation accumulation from Typhoon Sinlaku over Guam and Saipan, April 2026",
  },

  themes: ["respond", "prepare", "recover"],

  categories: ["severewx", "flood", "tropical cyclone", "winter weather"],

  relatedContent: [],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "The Integrated Multi-satellitE Retrievals for GPM (IMERG) algorithm combines precipitation estimates from the Global Precipitation Measurement (GPM) satellite constellation to produce a near-global rainfall record. Passive microwave observations from partner satellites are intercalibrated to the GPM Core Observatory's dual-frequency precipitation radar and radiometer, then morphed forward in time using geostationary infrared imagery to fill the gaps between microwave overpasses. The result is a half-hourly precipitation rate on a 0.1 degree by 0.1 degree grid covering the latitude band from 60 degrees north to 60 degrees south, with microwave-only coverage extending to the poles.",
        "For disaster activations the half-hourly Early Run product (Version 07) is accumulated into daily precipitation totals in millimetres using NASA's Giovanni analysis tool. The Early Run is available about four hours after observation, which makes it the lowest-latency IMERG product and the one best suited to tracking rainfall while an event is unfolding. A Late Run with about 14 hours of latency adds backward morphing and a climatological gauge adjustment for higher quality, and a research-grade Final Run follows roughly three months later.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Daily IMERG totals show where and how much rain fell during a storm, which helps identify areas at risk of flash flooding, riverine flooding, and landslides, and provides context for interpreting flood extent and damage products from other sensors. Because IMERG is satellite-derived it is especially valuable over oceans, islands, and remote regions with few rain gauges, such as the Western Pacific islands affected by tropical cyclones. Accumulating consecutive days gives storm-total rainfall for comparison against historical events.",
        "IMERG is an estimate, not a measurement. Values can be biased in mountainous terrain, along coastlines, and in intense convective cores, and the Early Run has not yet been adjusted against gauge data. Use it to characterise the pattern and relative magnitude of rainfall rather than as a substitute for local gauge or radar observations.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "Global Precipitation Measurement (GPM) Core Observatory Dual-frequency Precipitation Radar (DPR) and GPM Microwave Imager (GMI), combined with passive microwave sensors from the GPM constellation and geostationary infrared imagers",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: [
        "0.1 degree by 0.1 degree (approximately 10 kilometers at the equator); half-hourly source data accumulated to daily totals",
      ],
    },

    {
      type: "text",
      heading: "Credits",
      headingLevel: "h3",
      paragraphs: [
        "Huffman et al. (2024), GPM IMERG Early Precipitation L3 Half Hourly 0.1 degree x 0.1 degree V07, NASA Goddard Earth Sciences Data and Information Services Center (GES DISC), DOI 10.5067/GPM/IMERG/3B-HH-E/07. Accumulations produced with NASA Giovanni. NASA Disasters Program.",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, GPM, IMERG, Precipitation, Rainfall, Flood, Tropical Cyclone, Typhoon, GES DISC, Giovanni, Near Real-Time, Satellite Data",
      ],
    },
  ],
};
