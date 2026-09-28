import type { DataContent } from "@/app/site-config/types";

export const DATA__SENTINEL_2_TRUE_COLOR: DataContent = {
  id: "sentinel-2-true-color",
  contentType: "data",
  title: "Sentinel-2 True Color Imagery",
  description:
    "The True Color RGB composite provides a product of how the surface would look to the naked eye from space.",
  thumbnailImage: {
    src: "/img/data/sentinel-2-true-color.webp",
    alt: "Sentinel-2 True Color imagery example",
  },
  mastheadImage: {
    src: "/img/data/sentinel-2-true-color.webp",
    alt: "Sentinel-2 True Color imagery example",
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
  relatedContent: ["sentinel-2-color-infrared", "sentinel-2-swir"],
  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "The True Color RGB composite provides a product of how the surface would look to the naked eye from space. The RGB is created using the red, green, and blue channels of the respective instrument.",
      ],
    },
    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "The True Color RGB provides a product of how the surface would look to the naked eye from space. The True Color RGB is produced using the 3 visible wavelength bands (red, green, and blue) from the respective sensor. Some minor atmospheric corrections have occurred.",
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
