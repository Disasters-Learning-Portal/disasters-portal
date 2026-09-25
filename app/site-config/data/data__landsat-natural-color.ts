import type { DataContent } from "@/app/site-config/types";

export const DATA__LANDSAT_NATURAL_COLOR: DataContent = {
  id: "landsat-natural-color",

  contentType: "data",

  title: "Landsat Natural Color Imagery",

  description:
    "The Landsat Natural Color composite uses shortwave infrared, near-infrared, and red channels to emphasize vegetation, water, urban areas, and other surface features.",

  thumbnailImage: {
    src: "/img/data/landsat-natural-color.webp",
    alt: "Landsat Natural Color imagery example",
  },

  mastheadImage: {
    src: "/img/data/landsat-natural-color.webp",
    alt: "Landsat Natural Color imagery example",
  },

  themes: ["respond", "build", "prepare", "recover"],

  categories: [
    "earthquake",
    "fire",
    "flood",
    "heat",
    "landslide",
    "severe weather",
    "tropical cyclone",
    "hurricane",
    "typhoon",
    "cyclone",
    "volcano",
    "tsunami",
    "winter weather",
  ],

  relatedContent: ["landsat-true-color", "landsat-color-infrared"],

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "The Landsat Natural Color composite is a false-color visualization created using shortwave infrared, near-infrared, and red wavelength bands. This combination enhances differences among vegetation, water, developed areas, and exposed surfaces. Healthy vegetation generally appears bright green, water appears blue to dark blue, and urban or developed areas can appear in shades of magenta.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Landsat Natural Color imagery can be used to assess surface conditions and identify changes associated with natural hazards. The combination of shortwave infrared, near-infrared, and red wavelengths provides useful contrast for mapping water, vegetation condition, burned areas, exposed soils, and developed surfaces. It can support assessment of wildfire impacts, flooding, severe weather, and other events where changes in land-surface characteristics are important.",
        "Clouds, shadows, smoke, and atmospheric conditions may obscure or alter surface features.",
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
        "NASA, USGS, Landsat, Landsat 8, Landsat 9, OLI, OLI-2, Natural Color, SWIR, Near Infrared, Optical",
      ],
    },
  ],
};
