import type { DataContent } from "@/app/site-config/types";

export const DATA__PLANET_TRUE_COLOR: DataContent = {
  id: "planet-true-color",

  contentType: "data",

  title: "Planet True Color Imagery",

  description:
    "Planet True Color imagery combines red, green, and blue PlanetScope observations to provide a high-resolution, natural-looking view of the Earth's surface for disaster response and assessment.",

  thumbnailImage: {
    src: "/img/data/planet-true-color.webp",
    alt: "Planet True Color imagery example",
  },

  mastheadImage: {
    src: "/img/data/planet-true-color.webp",
    alt: "Planet True Color imagery example",
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

  relatedContent: ["sentinel-2-true-color", "landsat-true-color"],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "Planet True Color imagery is created using the red, green, and blue visible wavelength bands from PlanetScope observations to provide a natural-looking representation of the Earth's surface. PlanetScope imagery is collected by Planet Labs' Dove and SuperDove satellite constellations and provides high-resolution observations with frequent revisit coverage. NASA-supported access to Planet commercial satellite imagery is provided through NASA's Commercial Satellite Data Acquisition (CSDA) Program.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Planet True Color imagery can be used for detailed visual assessment of surface conditions before and after natural hazards. The high spatial resolution and frequent observations can support identification of wildfire impacts, flooding, storm damage, changes to vegetation and infrastructure, and other visible surface changes. Because the product uses visible wavelengths, clouds, smoke, haze, and other atmospheric conditions may obscure the surface.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "PlanetScope Dove and SuperDove optical satellite constellation operated by Planet Labs PBC",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: ["Approximately 3 meters"],
    },

    {
      type: "text",
      heading: "Credits",
      headingLevel: "h3",
      paragraphs: [
        "Planet Labs PBC; NASA Commercial Satellite Data Acquisition (CSDA) Program; NASA Disasters Program",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, CSDA, Planet Labs, PlanetScope, Dove, SuperDove, Commercial Satellite Data, True Color, RGB, Optical",
      ],
    },
  ],
};
