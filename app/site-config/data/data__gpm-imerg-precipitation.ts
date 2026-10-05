import type { DataContent } from "@/app/site-config/types";

export const DATA__GPM_IMERG_PRECIPITATION: DataContent = {
  id: "gpm-imerg-precipitation",

  contentType: "data",

  title: "GPM IMERG Accumulated Precipitation",

  description:
    "Daily accumulated precipitation from NASA's Integrated Multi-satellitE Retrievals for GPM (IMERG), a near-real-time global rainfall estimate that blends passive microwave, radar, and infrared satellite observations onto a 0.1 degree grid.",

  thumbnailImage: {
    src: "/img/data/gpm-imerg-precipitation.webp",
    alt: "GPM IMERG accumulated precipitation from Typhoon Sinlaku over Guam and Saipan, April 2026",
  },

  mastheadImage: {
    src: "/img/data/gpm-imerg-precipitation.webp",
    alt: "GPM IMERG accumulated precipitation from Typhoon Sinlaku over Guam and Saipan, April 2026",
  },

  themes: ["respond", "prepare", "recover"],

  categories: ["severe weather", "flood", "tropical cyclone", "winter weather"],

  relatedContent: [],

  exploreDataUrl:
    "https://science-dev.data.nasa.gov/disasters/data-visualization/?mission=disasters_learning_portal&mapLon=146.59999596866186&mapLat=11.749996556025831&mapZoom=4.71&globeLon=undefined&globeLat=undefined&panePercents=0,100,0&on=742af199-222d-4d0d-94cf-d9191c0d2369$1.00&startTime=2012-01-19T00:00:00.000Z&endTime=2026-04-18T23:59:59.000Z&live=0",

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "The Integrated Multi-satellitE Retrievals for GPM (IMERG) algorithm combines precipitation estimates from the Global Precipitation Measurement (GPM) satellite constellation to produce a near-global rainfall record. Passive microwave observations from partner satellites are intercalibrated to the GPM Core Observatory's dual-frequency precipitation radar and radiometer, then morphed forward in time using geostationary infrared imagery to fill the gaps between microwave overpasses. The underlying IMERG product provides half-hourly precipitation rates on a 0.1 degree by 0.1 degree grid covering the latitude band from 60 degrees north to 60 degrees south, with microwave-only coverage extending to the poles.",
        "The layer shown here is an accumulated precipitation product rather than an instantaneous precipitation-rate product. For disaster activations, the half-hourly IMERG Early Run product (Version 07) is accumulated into daily precipitation totals in millimetres using NASA's Giovanni analysis tool. The Early Run is available about four hours after observation, which makes it the lowest-latency IMERG product and the one best suited to tracking rainfall while an event is unfolding. A Late Run with about 14 hours of latency adds backward morphing and a climatological gauge adjustment for higher quality, and a research-grade Final Run follows roughly three months later.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Daily IMERG accumulations show where precipitation fell and how much accumulated over the analysis period, which helps identify areas at risk of flash flooding, riverine flooding, and landslides and provides context for interpreting flood extent and damage products from other sensors. Because IMERG is satellite-derived, it is especially valuable over oceans, islands, and remote regions with few rain gauges, such as the Western Pacific islands affected by tropical cyclones. Consecutive daily accumulations can also be combined to estimate storm-total precipitation over multi-day events.",
        "IMERG precipitation is an estimate, not a direct surface measurement. Values can be biased in mountainous terrain, along coastlines, and in intense convective cores, and the Early Run has not yet been adjusted against gauge data. Use it to characterise the spatial pattern and relative magnitude of accumulated precipitation rather than as a substitute for local gauge or radar observations.",
      ],
    },

    {
      type: "text",
      heading: "Terms of Use",
      paragraphs: [
        "NASA data and products are freely available to federal, state, public, non-profit and commercial users. This information can be experimental- or research-grade data products and may not be appropriate for operational use. These NASA data products, services, and the Disasters Mapping Portal are intended to aid decision makers and enhance situational awareness, but these data are not guaranteed to be consistently available or routinely updated.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      paragraphs: [
        "Global Precipitation Measurement (GPM) Core Observatory Dual-frequency Precipitation Radar (DPR) and GPM Microwave Imager (GMI), combined with passive microwave sensors from the GPM constellation and geostationary infrared imagers",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      paragraphs: [
        "0.1 degree by 0.1 degree (approximately 10 kilometers at the equator); half-hourly source data accumulated to daily precipitation totals",
      ],
    },

    {
      type: "text",
      heading: "Credits",
      paragraphs: [
        "Huffman et al. (2024), GPM IMERG Early Precipitation L3 Half Hourly 0.1 degree x 0.1 degree V07, NASA Goddard Earth Sciences Data and Information Services Center (GES DISC), DOI 10.5067/GPM/IMERG/3B-HH-E/07. Accumulations produced with NASA Giovanni. NASA Disasters Program.",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "NASA, GPM, IMERG, Accumulated Precipitation, Precipitation, Rainfall, Daily Accumulation, Flood, Tropical Cyclone, Typhoon, GES DISC, Giovanni, Near Real-Time, Satellite Data",
      ],
    },
  ],
};
