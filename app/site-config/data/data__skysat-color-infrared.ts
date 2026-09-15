import type { DataContent } from "@/app/site-config/types";

export const DATA__SKYSAT_COLOR_INFRARED: DataContent = {
  id: "skysat-color-infrared",

  contentType: "data",

  title: "Planet SkySat Color Infrared Imagery",

  description:
    "Planet SkySat Color Infrared imagery combines near-infrared, red, and green observations from Planet's SkySat constellation to highlight vegetation, water, and burned areas at very high resolution.",

  thumbnailImage: {
    src: "/img/data/skysat-color-infrared.webp",
    alt: "Planet Labs satellite image of farmland, towns, and industrial sites along the Mississippi River in Louisiana, from NASA's Commercial Satellite Data Acquisition Program",
  },

  mastheadImage: {
    src: "/img/data/skysat-color-infrared.webp",
    alt: "Planet Labs satellite image of farmland, towns, and industrial sites along the Mississippi River in Louisiana, from NASA's Commercial Satellite Data Acquisition Program",
  },

  themes: ["respond", "build", "prepare", "recover"],

  categories: [
    "severewx",
    "fire",
    "heat",
    "flood",
    "tropical cyclone",
    "earthquake",
    "winter weather",
  ],

  relatedContent: ["skysat-true-color", "planet-true-color"],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "Planet SkySat Color Infrared imagery is created using the near-infrared, red, and green bands from SkySat observations. Healthy vegetation appears red, water appears dark blue to black, and burned or bare areas appear dark or brown, which makes flood extent, vegetation damage, and burn scars easier to distinguish than in natural color. SkySat is a constellation of very-high-resolution optical satellites operated by Planet Labs PBC that can revisit a location multiple times a day, collecting imagery at approximately 50 cm per pixel. Each SkySat scene is published as an individual acquisition with its collection time. NASA-supported access to Planet commercial satellite imagery is provided through NASA's Commercial Satellite Data Acquisition (CSDA) Program.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Planet SkySat Color Infrared imagery can be used to identify flooded areas, vegetation loss, and burned areas after natural hazards at the neighborhood scale, and the near-infrared band gives some ability to see through thin haze. Because the product uses optical wavelengths, clouds and smoke may still obscure the surface. Scene footprints are small compared to PlanetScope, so coverage is targeted rather than wall-to-wall.",
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
        "NASA, CSDA, Planet Labs, SkySat, Commercial Satellite Data, Color Infrared, False Color, NIR, Optical, Very High Resolution",
      ],
    },
  ],
};
