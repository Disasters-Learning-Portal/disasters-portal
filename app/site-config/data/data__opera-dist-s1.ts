import { DATA_VISUALIZATION_URL } from "@/app/site-config/env.helpers";
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

  exploreDataUrl: `${DATA_VISUALIZATION_URL}/?mapLon=-118.388671875&mapLat=34.161536263520496&mapZoom=10.61&globeLon=undefined&globeLat=undefined&panePercents=0,100,0&on=f154c768-c8e7-4b23-a783-1ec458bdbb20$1.00&startTime=2012-01-19T00:00:00.000Z&endTime=2025-01-09T23:59:59.000Z&live=0`,

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "The OPERA Surface Disturbance from Sentinel-1 (DIST-S1) product uses Sentinel-1 synthetic aperture radar (SAR) observations to identify changes to the land surface. The product provides per-pixel disturbance classifications based on the magnitude of change relative to observations prior to an event. A value of 0 indicates no disturbance, 1 indicates moderate-confidence disturbance greater than 2.5 standard deviations from the pre-event mean, and 2 indicates high-confidence disturbance greater than 4.5 standard deviations from the pre-event mean.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "DIST-S1 can be used to identify and map areas of potential surface disturbance following wildfires. Because the product is derived from synthetic aperture radar observations, it can provide information during both day and night and in conditions where clouds or smoke may limit optical satellite observations. The disturbance classifications can support assessment of potentially affected areas and help guide disaster response and recovery activities. These prototype data are preliminary and should be used as a first-look assessment rather than a definitive characterization of surface impacts.",
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
        "C-band Synthetic Aperture Radar (SAR) on the European Space Agency's Copernicus Sentinel-1A, Sentinel-1B, and Sentinel-1C satellites",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      paragraphs: ["30 meters"],
    },

    {
      type: "text",
      heading: "Credits",
      paragraphs: [
        "This prototype product was developed by Harris Hardiman-Mostow (UCLA) under the guidance of Charlie Marshak and Al Handwerger. Further product development has been led by the JPL OPERA DIST-S1 team (Charlie Marshak, Talib Oliver Cabrera, Jungkyo Jung, Richard West)",
        "NASA Jet Propulsion Laboratory, California Institute of Technology; NASA OPERA; ESA Copernicus; NASA Disasters Program",
        "Use of this product should include: “Contains modified Copernicus Sentinel data (2022-2026) processed by ESA”",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "NASA, OPERA, Sentinel-1, DIST-S1, Surface Disturbance, SAR, Synthetic Aperture Radar, Wildfire, Fire",
      ],
    },
  ],
};
