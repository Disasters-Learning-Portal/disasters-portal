import type { DataContent } from "@/app/site-config/types";

export const DATA__LANDSAT_NBR: DataContent = {
  id: "landsat-nbr",

  contentType: "data",

  title: "Landsat Normalized Burn Ratio (NBR)",

  description:
    "Normalized Burn Ratio (NBR) is defined mathematically as (NIR - SWIR)/(NIR + SWIR), where NIR is near-infrared and SWIR is shortwave infrared. NBR is commonly used as a proxy to identify areas of burned or charred vegetation.",

  thumbnailImage: {
    src: "/img/data/landsat-nbr.webp",
    alt: "Landsat Normalized Burn Ratio (NBR)",
  },

  mastheadImage: {
    src: "/img/data/landsat-nbr.webp",
    alt: "Landsat Normalized Burn Ratio (NBR)",
  },

  themes: ["respond", "recover"],

  categories: ["fire"],

  relatedContent: ["sentinel-2-nbr", "sentinel-2-dnbr"],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "Normalized Burn Ratio (NBR) is calculated using near-infrared and shortwave-infrared observations as (NIR - SWIR)/(NIR + SWIR). For Landsat 8 and Landsat 9, NBR is commonly calculated using Operational Land Imager (OLI) Band 5 for near-infrared and Band 7 for shortwave infrared. NBR is particularly sensitive to changes in healthy vegetation and charred or burned surfaces and is commonly used to assess areas affected by wildfire.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Landsat NBR can be used to identify burned vegetation and assess spatial patterns of wildfire impacts. Healthy vegetation generally produces higher positive NBR values, while recently burned or charred vegetation generally produces lower or negative values. Comparing pre-fire and post-fire NBR observations can also be used to calculate differenced NBR (dNBR) for assessing relative burn severity.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "Operational Land Imager (OLI) and Operational Land Imager-2 (OLI-2) aboard the NASA/USGS Landsat 8 and Landsat 9 satellites",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: ["30 meters"],
    },

    {
      type: "text",
      heading: "Credits",
      headingLevel: "h3",
      paragraphs: ["NASA, U.S. Geological Survey (USGS)"],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, USGS, Landsat, Landsat 8, Landsat 9, OLI, OLI-2, NBR, Normalized Burn Ratio, Wildfire, Burned Vegetation",
      ],
    },
  ],
};
