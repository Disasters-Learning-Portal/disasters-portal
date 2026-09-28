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
      paragraphs: [
        "Normalized Burn Ratio (NBR) is calculated using near-infrared and shortwave-infrared observations as (NIR - SWIR)/(NIR + SWIR). For Landsat 8 and Landsat 9, NBR is commonly calculated using Operational Land Imager (OLI) Band 5 for near-infrared and Band 7 for shortwave infrared. NBR is particularly sensitive to changes in healthy vegetation and charred or burned surfaces and is commonly used to assess areas affected by wildfire.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Landsat NBR can be used to identify burned vegetation and assess spatial patterns of wildfire impacts. Healthy vegetation generally produces higher positive NBR values, while recently burned or charred vegetation generally produces lower or negative values. Comparing pre-fire and post-fire NBR observations can also be used to calculate differenced NBR (dNBR) for assessing relative burn severity.",
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
        "Operational Land Imager (OLI) and Operational Land Imager-2 (OLI-2) aboard the NASA/USGS Landsat 8 and Landsat 9 satellites",
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
      paragraphs: ["NASA, U.S. Geological Survey (USGS)"],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "NASA, USGS, Landsat, Landsat 8, Landsat 9, OLI, OLI-2, NBR, Normalized Burn Ratio, Wildfire, Burned Vegetation",
      ],
    },
  ],
};
