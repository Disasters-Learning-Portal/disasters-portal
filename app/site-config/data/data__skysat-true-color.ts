import type { DataContent } from "@/app/site-config/types";

export const DATA__SKYSAT_TRUE_COLOR: DataContent = {
  id: "skysat-true-color",

  contentType: "data",

  title: "Planet SkySat True Color Imagery",

  description:
    "Planet SkySat True Color imagery combines red, green, and blue observations from Planet's SkySat constellation to provide very-high-resolution, natural-looking views of the Earth's surface for disaster response and assessment.",

  thumbnailImage: {
    src: "/img/data/skysat-true-color.webp",
    alt: "Planet Labs satellite image of farmland, towns, and industrial sites along the Mississippi River in Louisiana, from NASA's Commercial Satellite Data Acquisition Program",
  },

  mastheadImage: {
    src: "/img/data/skysat-true-color.webp",
    alt: "Planet Labs satellite image of farmland, towns, and industrial sites along the Mississippi River in Louisiana, from NASA's Commercial Satellite Data Acquisition Program",
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

  relatedContent: ["skysat-color-infrared", "planet-true-color"],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "Planet SkySat True Color imagery is created using the red, green, and blue visible wavelength bands from SkySat observations to provide a natural-looking representation of the Earth's surface. SkySat is a constellation of very-high-resolution optical satellites operated by Planet Labs PBC that can revisit a location multiple times a day, collecting imagery at approximately 50 cm per pixel. Each SkySat scene is published as an individual acquisition with its collection time. NASA-supported access to Planet commercial satellite imagery is provided through NASA's Commercial Satellite Data Acquisition (CSDA) Program.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Planet SkySat True Color imagery can be used for detailed visual assessment of surface conditions before and after natural hazards. The very high spatial resolution supports identification of storm and wind damage to buildings and infrastructure, flooding, debris, changes to vegetation, and other visible surface changes at the neighborhood scale. Because the product uses visible wavelengths, clouds, smoke, haze, and other atmospheric conditions may obscure the surface. Scene footprints are small compared to PlanetScope, so coverage is targeted rather than wall-to-wall.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: ["SkySat optical satellite constellation operated by Planet Labs PBC"],
    },

    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: ["Approximately 50 centimeters"],
    },

    {
      type: "text",
      heading: "Credits",
      headingLevel: "h3",
      paragraphs: [
        "Planet Labs PBC; NASA Commercial Satellite Data Acquisition (CSDA) Program; NASA Disasters Program. Includes copyrighted material of Planet Labs PBC. All rights reserved.",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, CSDA, Planet Labs, SkySat, Commercial Satellite Data, True Color, RGB, Optical, Very High Resolution",
      ],
    },
  ],
};
