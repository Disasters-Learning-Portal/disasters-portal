import type { DataContent } from "@/app/site-config/types";

export const DATA__LANDSAT_COLOR_INFRARED: DataContent = {
  id: "landsat-color-infrared",

  contentType: "data",

  title: "Landsat Color Infrared Imagery",

  description:
    "Created using near-infrared, red, and green channels to highlight vegetation, water, burned areas, and other surface changes associated with natural hazards.",

  thumbnailImage: {
    src: "/img/data/landsat-color-infrared.webp",
    alt: "Landsat Color Infrared imagery example",
  },

  mastheadImage: {
    src: "/img/data/landsat-color-infrared.webp",
    alt: "Landsat Color Infrared imagery example",
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

  relatedContent: ["landsat-color-infrared", "landsat-true-color", "sentinel-2-color-infrared"],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "The Landsat Color Infrared composite is created using the near-infrared, red, and green wavelength bands. For Landsat 8 and Landsat 9, the composite uses Operational Land Imager (OLI) Bands 5, 4, and 3. Healthy vegetation generally appears red because vegetation strongly reflects near-infrared radiation, while water typically appears dark blue to black and burned or sparsely vegetated areas appear darker brown or gray.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Landsat Color Infrared imagery can be used to distinguish healthy vegetation from stressed or burned vegetation, identify water and inundated areas, and assess surface changes associated with wildfires, floods, severe weather, and other hazards. Near-infrared observations provide greater contrast between vegetation, water, and exposed surfaces than visible imagery alone, although clouds, heavy smoke, and atmospheric conditions may still obscure the surface.",
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
      paragraphs: [
        "NASA, USGS, Landsat, Landsat 8, Landsat 9, OLI, OLI-2, Color Infrared, Near Infrared, Optical",
      ],
    },
  ],
};
