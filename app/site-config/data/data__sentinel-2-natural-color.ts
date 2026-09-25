import type { DataContent } from "@/app/site-config/types";

export const DATA__SENTINEL_2_NATURAL_COLOR: DataContent = {
  id: "sentinel-2-natural-color",

  contentType: "data",

  title: "Sentinel-2 Natural Color",

  description:
    "Natural color imagery from Sentinel-2 combines the red, green, and blue bands of the MultiSpectral Instrument into a view approximating what the human eye would see, supporting visual assessment of surface conditions before and after a disaster.",

  thumbnailImage: {
    src: "/img/data/sentinel-2-natural-color.webp",
    alt: "Sentinel-2 natural color imagery",
  },

  mastheadImage: {
    src: "/img/data/sentinel-2-natural-color.webp",
    alt: "Sentinel-2 natural color imagery",
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

  relatedContent: ["sentinel-2-true-color", "sentinel-2-color-infrared", "landsat-natural-color"],

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "Sentinel-2 natural color imagery is built from the visible red, green and blue bands of the MultiSpectral Instrument (MSI), presented in the order the eye expects so that vegetation appears green, bare ground appears brown or tan, and water appears dark. Because it uses only visible wavelengths, it is the most directly interpretable of the Sentinel-2 composites and needs no legend to read. Sentinel-2A, 2B and 2C together provide frequent revisit coverage at 10 meter resolution.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Natural color imagery supports visual assessment of surface conditions before and after a hazard, and is often the first layer responders and the public look at because it requires no interpretation key. It can show flood inundation, storm and earthquake damage to the built environment, burn scars, landslides, and changes to shorelines and river courses. Because the product relies on visible light, clouds, smoke and haze obscure the surface, and no observation is possible at night; radar-derived products are the complement in those conditions.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      paragraphs: [
        "MultiSpectral Instrument (MSI) on the European Space Agency's Copernicus Sentinel-2A, Sentinel-2B and Sentinel-2C satellites",
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
      paragraphs: [
        "ESA Copernicus; NASA Disasters Program",
        "Use of this product should include: “Contains modified Copernicus Sentinel data (2022-2026) processed by ESA”",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "ESA, Copernicus, Sentinel-2, MSI, Natural Color, RGB, Visible, Optical, Imagery",
      ],
    },
  ],
};
