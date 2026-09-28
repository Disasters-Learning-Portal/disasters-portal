import type { DataContent } from "@/app/site-config/types";

export const DATA__SENTINEL_2_SWIR: DataContent = {
  id: "sentinel-2-swir",
  contentType: "data",
  title: "Sentinel-2 Shortwave Infrared Imagery",
  description: "Created using SWIR, Near Infrared (NIR), and Red channels for flood detection.",
  thumbnailImage: {
    src: "/img/data/sentinel-2-swir.webp",
    alt: "Sentinel-2 Shortwave Infrared imagery example",
  },
  mastheadImage: {
    src: "/img/data/sentinel-2-swir.webp",
    alt: "Sentinel-2 Shortwave Infrared imagery example",
  },
  themes: ["respond", "build", "prepare", "recover"],
  categories: [
    "severe weather",
    "fire",
    "heat",
    "flood",
    "tropical cyclone",
    "earthquake",
    "winter weather",
  ],
  relatedContent: ["sentinel-2-true-color", "sentinel-2-color-infrared"],
  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "The Short Wave Infrared (SWIR) RGB is a product that is created using the SWIR, Near Infrared (NIR), and Red channels of the respective instrument.",
      ],
    },
    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "The Short Wave Infrared (SWIR) RGB is a product that can provide value in flood detection. Areas of water will appear blue, healthy green vegetation will appear as a bright green, urban areas in various shades of magenta, snow will appear as a bright blue/cyan, and bare soils being multicolor dependent on their makeup.",
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
      paragraphs: ["NASA/GSFC, USGS, ESA Copernicus"],
    },
    {
      type: "text",
      heading: "Tags",
      paragraphs: ["ESA, Copernicus, Sentinel-2, Optical"],
    },
  ],
};
