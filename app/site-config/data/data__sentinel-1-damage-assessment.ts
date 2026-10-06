import { DATA_VISUALIZATION_URL } from "@/app/site-config/env.helpers";
import type { DataContent } from "@/app/site-config/types";

export const DATA__SENTINEL_1_DAMAGE_ASSESSMENT: DataContent = {
  id: "sentinel-1-damage-assessment",

  contentType: "data",

  title: "Sentinel-1 Likely Damaged Areas",

  description:
    "The Sentinel-1 Likely Damaged Areas product uses coherent change detection from interferometric SAR imagery to identify urban and built-up areas likely damaged or destroyed by the January 2025 Southern California wildfires.",

  thumbnailImage: {
    src: "/img/data/sentinel-1-damage-assessment.webp",
    alt: "Sentinel-1 Likely Damaged Areas imagery",
  },

  mastheadImage: {
    src: "/img/data/sentinel-1-damage-assessment.webp",
    alt: "Sentinel-1 Likely Damaged Areas imagery",
  },

  themes: ["respond", "recover"],

  categories: ["fire"],

  relatedContent: ["sentinel-1-sentinel-2-burn-severity", "opera-disp-s1-coherence"],

  exploreDataUrl: `${DATA_VISUALIZATION_URL}/?mapLon=-118.42041232905592&mapLat=34.16275059200858&mapZoom=9.13&globeLon=undefined&globeLat=undefined&panePercents=0,100,0&on=2db3fe61-f031-4a6e-89a2-33bfe1ca4389$1.00&startTime=2012-01-19T00:00:00.000Z&endTime=2025-01-21T23:59:59.000Z&live=0`,

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "The Sentinel-1 Likely Damaged Areas product identifies areas of potential fire-related damage in urban and built-up regions using coherent change detection analysis of interferometric Sentinel-1 synthetic aperture radar (SAR) imagery. Post-event Sentinel-1 observations are compared with a multi-year pre-disaster reference dataset to identify locations where radar coherence changed substantially. The analysis is constrained using fire perimeter information from the Fire Integrated Real-Time Intelligence System (FIRIS), which provides event-specific wildfire mapping used here to focus the resulting damage assessment on areas affected by the January 2025 Southern California wildfires.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "This product is intended for landscape-level geospatial visualization and assessment of likely fire damage in urban and built-up areas. Pixel values of 1 indicate regions classified as likely damaged or destroyed, while values of 0 represent all other regions. The data can support estimates of potentially affected structures and help prioritize areas for further assessment during disaster response and recovery. The product has not been field validated, and omission or commission errors may occur, so individual pixels should not be interpreted as definitive confirmation of structural damage.",
      ],
    },

    {
      type: "text",
      heading: "Terms of Use",
      paragraphs: [
        "NASA data and products are freely available to federal, state, public, non-profit and commercial users. This information can be experimental- or research-grade data products and may not be appropriate for operational use. These NASA data products, services, and the Disasters Mapping Portal are intended to aid decision makers and enhance situational awareness, but these data are not guaranteed to be consistently available or routinely updated. Use of this product should include: 'The product contains modified Copernicus Sentinel-1 data, processed by the European Space Agency and NASA.'",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      paragraphs: [
        "C-band Synthetic Aperture Radar (SAR) aboard the European Space Agency's Copernicus Sentinel-1 satellites",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      paragraphs: [
        "40 meters. Copernicus Sentinel-1 observations have a native spatial resolution of approximately 10 meters for this application and were processed to 40 meters for interferometric coherence change analysis.",
      ],
    },

    {
      type: "text",
      heading: "Credits",
      paragraphs: [
        "Damage analysis of Copernicus Sentinel-1 satellite data by Corey Scher, CUNY Graduate Center, and Jamon Van Den Hoek, Oregon State University; FIRIS fire perimeter data; NASA Disasters Program; ESA Copernicus",
        "The product contains modified Copernicus Sentinel-1 data, processed by the European Space Agency and NASA.",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "NASA, NASA Disasters Program, Sentinel-1, ESA, Copernicus, SAR, InSAR, Coherent Change Detection, Damage Assessment, Wildfire, FIRIS, Fire Perimeter, Built Environment, Southern California Wildfires",
      ],
    },
  ],
};
