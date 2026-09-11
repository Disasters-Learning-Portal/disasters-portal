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

  relatedContent: ["sentinel-1-sentinel-2-burn-severity","opera-disp-s1-coherence"],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "The Sentinel-1 Likely Damaged Areas product identifies areas of potential fire-related damage in urban and built-up regions using coherent change detection analysis of interferometric Sentinel-1 synthetic aperture radar (SAR) imagery. Post-event Sentinel-1 observations are compared with a multi-year pre-disaster reference dataset to identify locations where radar coherence changed substantially. The analysis is constrained using FIRIS fire perimeter information to focus the resulting damage assessment on areas affected by the January 2025 Southern California wildfires.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "This product is intended for landscape-level geospatial visualization and assessment of likely fire damage in urban and built-up areas. Pixel values of 1 indicate regions classified as likely damaged or destroyed, while values of 0 represent all other regions. The data can support estimates of potentially affected structures and help prioritize areas for further assessment during disaster response and recovery. The product has not been field validated, and omission or commission errors may occur, so individual pixels should not be interpreted as definitive confirmation of structural damage.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "C-band Synthetic Aperture Radar (SAR) aboard the European Space Agency's Copernicus Sentinel-1 satellites",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: ["40 meters"],
    },

    {
      type: "text",
      heading: "Credits",
      headingLevel: "h3",
      paragraphs: [
        "Damage analysis of Copernicus Sentinel-1 satellite data by Corey Scher, CUNY Graduate Center, and Jamon Van Den Hoek, Oregon State University; NASA Disasters Program; ESA Copernicus",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, NASA Disasters Program, Sentinel-1, ESA, Copernicus, SAR, InSAR, Coherent Change Detection, Damage Assessment, Wildfire, Built Environment, Southern California Wildfires",
      ],
    },
  ],
};
