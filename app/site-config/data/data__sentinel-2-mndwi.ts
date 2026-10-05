import type { DataContent } from "@/app/site-config/types";

export const DATA__SENTINEL_2_MNDWI: DataContent = {
  id: "sentinel-2-mndwi",

  contentType: "data",

  title: "Sentinel-2 Modified Normalized Difference Water Index (MNDWI)",

  description:
    "Modified Normalized Difference Water Index (MNDWI) uses green and shortwave-infrared reflectance to enhance open water features and suppress vegetation, soil, and built-up surfaces.",

  thumbnailImage: {
    src: "/img/data/sentinel-2-mndwi.webp",
    alt: "Sentinel-2 Modified Normalized Difference Water Index (MNDWI)",
  },

  mastheadImage: {
    src: "/img/data/sentinel-2-mndwi.webp",
    alt: "Sentinel-2 Modified Normalized Difference Water Index (MNDWI)",
  },

  themes: ["respond", "resilience", "prepare", "recover"],

  categories: ["severe weather", "flood", "tropical cyclone", "winter weather"],

  relatedContent: ["sentinel-2-true-color", "sentinel-2-color-infrared", "sentinel-2-swir"],

  exploreDataUrl:
    "https://science-dev.data.nasa.gov/disasters/data-visualization/?mission=disasters_learning_portal&mapLon=-96.48193359375017&mapLat=41.924246755559665&mapZoom=7.02&globeLon=undefined&globeLat=undefined&panePercents=0,100,0&on=98a3c263-03a8-4cc9-8ea7-603366a2baf9$1.00&startTime=2012-01-19T00:00:00.000Z&endTime=2019-03-16T23:59:59.000Z&live=0",

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "Modified Normalized Difference Water Index (MNDWI) is calculated as (Green - SWIR)/(Green + SWIR), where Green is visible green reflectance and SWIR is shortwave-infrared reflectance. For Sentinel-2, MNDWI is commonly calculated using MSI Band 3 for green and Band 11 for shortwave infrared. The index is designed to enhance open water features while reducing the influence of vegetation, soil, and built-up surfaces.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Sentinel-2 MNDWI can be used to identify and map open water and changes in surface water extent associated with flooding, tropical cyclones, severe storms, and other hydrologic events. Positive MNDWI values are generally associated with water, while lower or negative values are more commonly associated with vegetation, bare ground, and developed surfaces. Thresholds may vary by location and environmental conditions, so MNDWI should be interpreted together with supporting imagery and local context.",
        "Note: Areas of cloud cover will show up in varying shades of green/blue similar to water.",
      ],
    },

    {
      type: "text",
      heading: "Terms of Use",
      paragraphs: [
        "NASA data and products are freely available to federal, state, public, non-profit and commercial users. This information can be experimental- or research-grade data products and may not be appropriate for operational use. These NASA data products, services, and the Disasters Mapping Portal are intended to aid decision makers and enhance situational awareness, but these data are not guaranteed to be consistently available or routinely updated. Use of this product should include: 'Contains modified Copernicus Sentinel data (2026) processed by ESA.'",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      paragraphs: [
        "MultiSpectral Instrument (MSI) on European Space Agency's (ESA) Copernicus Sentinel-2A/2B satellites",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      paragraphs: ["20 meters"],
    },

    {
      type: "text",
      heading: "Credits",
      paragraphs: [
        "NASA, USGS, ESA Copernicus",
        "Use of this product should include: “Contains modified Copernicus Sentinel data (2023-2026) processed by ESA”",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "ESA, Copernicus, Sentinel-2, MSI, MNDWI, Modified Normalized Difference Water Index, Surface Water, Flooding",
      ],
    },
  ],
};
