import type { DataContent } from "@/app/site-config/types";

export const DATA__LANDSAT_TRUE_COLOR: DataContent = {
  id: "landsat-true-color",

  contentType: "data",

  title: "Landsat True Color Imagery",

  description:
    "The Landsat True Color RGB composite provides a natural-looking view of the Earth's surface similar to how it would appear to the human eye.",

  thumbnailImage: {
    src: "/img/data/landsat-true-color.webp",
    alt: "Landsat True Color imagery example",
  },

  mastheadImage: {
    src: "/img/data/landsat-true-color.webp",
    alt: "Landsat True Color imagery example",
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

  relatedContent: ["landsat-natural-color", "landsat-color-infrared", "sentinel-2-true-color"],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "The Landsat True Color RGB composite provides a natural-looking representation of the Earth's surface using the red, green, and blue visible wavelength bands. For Landsat 8 and Landsat 9, the composite is created using Operational Land Imager (OLI) Bands 4, 3, and 2 for red, green, and blue, respectively.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Landsat True Color imagery can be used for visual interpretation of surface conditions before, during, and after natural hazards. The imagery can support assessment of wildfire impacts, flooding, storm damage, changes to vegetation and land cover, and other visible surface changes. Because the composite uses visible wavelengths, clouds, smoke, haze, and atmospheric conditions may obscure the land surface.",
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
      paragraphs: ["NASA, USGS, Landsat, Landsat 8, Landsat 9, OLI, OLI-2, True Color, Optical"],
    },
  ],
};
