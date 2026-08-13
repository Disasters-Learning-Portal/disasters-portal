import type { DataContent } from "@/app/site-config/types";

export const DATA__SENTINEL_2_NBR: DataContent = {
  id: "sentinel-2-nbr",
  contentType: "data",
  title: "Sentinel-2 Normalized Burn Ratio (NBR)",
  description:
    "Normalized Burn Ratio (NBR) is defined mathematically as (NIR – SWIR)/(NIR + SWIR) where NIR is near-infrared and SWIR is short-wave infrared. NBR is commonly used as a proxy to indicate areas which have charred vegetation.",
  thumbnailImage: {
    src: "/img/data/sentinel-2-nbr.webp",
    alt: "Sentinel-2 Normalized Burn Ratio (NBR)",
  },
  mastheadImage: {
    src: "/img/data/sentinel-2-nbr.webp",
    alt: "Sentinel-2 Normalized Burn Ratio (NBR)",
  },
  themes: ["respond", "recover"],
  categories: ["fire"],
  relatedContent: ["sentinel-2-dnbr"],
  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "Normalized Burn Ratio (NBR) is defined mathematically as (NIR – SWIR)/(NIR + SWIR) where NIR is near-infrared and SWIR is short-wave infrared. NBR is commonly used as a proxy to indicate areas which have charred vegetation.",
      ],
    },
    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Darker areas (more negative values) in the NBR image more strongly represent the presence of burned vegetation.",
      ],
    },
    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "MultiSpectral Instrument (MSI) on European Space Agency's (ESA) Copernicus Sentinel-2A/2B satellites",
      ],
    },
    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: ["10 meters"],
    },
    {
      type: "text",
      heading: "Credits",
      headingLevel: "h3",
      paragraphs: ["NASA/GSFC, USGS, ESA Copernicus"],
    },
    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: ["ESA, Copernicus, Sentinel-2, Optical"],
    },
  ],
};
