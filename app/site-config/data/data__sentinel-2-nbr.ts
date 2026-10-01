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
      paragraphs: [
        "Normalized Burn Ratio (NBR) is defined mathematically as (NIR – SWIR)/(NIR + SWIR) where NIR is near-infrared and SWIR is short-wave infrared. NBR is commonly used as a proxy to indicate areas which have charred vegetation.",
      ],
    },
    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "NBR can be used to identify burned vegetation and assess spatial patterns of wildfire impacts. Healthy vegetation generally produces higher positive NBR values, while recently burned or charred vegetation generally produces lower or negative values.",
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
      paragraphs: ["10 meters"],
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
